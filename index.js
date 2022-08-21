const express = require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('092330a1b5264930b1af7c9d7fecabe5');

// var FetchFile = require('./controller/FetchFile');

const downloadFile = (async (url) => {
  var name = url.split("/");
  console.log(name[name.length-1]);
  return(name);
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
      res.body.pipe(fileStream);
      res.body.on("error", reject);
      fileStream.on("finish", resolve);
    });
}); 


  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.get('/', (req, res) =>
  response.sendFile('public/index.html')
  );
  app.get('/tabrez', (req, res) =>
  response.sendFile('public/binarydecode.html')
  );
  app.get('/apitest', (req, res) => 
  newsapi.v2.topHeadlines({
    language: 'en',
  }).then(response => {
    return res.send(response);
  })
  );
  app.get('/FetchFile', (req, res)=>{
    return(downloadFile('https://ipaudio3.club/wp-content/uploads/HHD/Dune/22.mp3'));
  });

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

