const express = require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000


  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.get('/', (req, res) => res.render('pages/index'));
  app.get('/apitest', (req, res) => res.send('hello') );
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
