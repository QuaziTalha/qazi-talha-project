const express = require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000

var response="";
var news="";

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('092330a1b5264930b1af7c9d7fecabe5');





  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.get('/', (req, res) =>
  // res.redirect(url: 'public/index.js');
  response.sendFile('public/index.html')
  );
  app.get('/apitest', (req, res) => 
  newsapi.v2.topHeadlines({
    language: 'en',
  }).then(response => {
    // console.log(response);
    return res.send(response);
  })
  );
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

