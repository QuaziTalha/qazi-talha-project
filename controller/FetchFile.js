const fetch = require('node-fetch');
const fs= require('fs')

exports.FetchFile = (async (url) => {
  var name = url.split("/");
  return res.send(name)
    var path = './public/downloads';
    const res = await fetch(url);
    const fileStream = fs.createWriteStream(path);
    await new Promise((resolve, reject) => {
        res.body.pipe(fileStream);
        res.body.on("error", reject);
        fileStream.on("finish", resolve);
      });
  });
/* exports.FetchAudiobook = (async (url, path) => {
    const res = await fetch(url);
    const fileStream = fs.createWriteStream(path);
    await new Promise((resolve, reject) => {
        res.body.pipe(fileStream);
        res.body.on("error", reject);
        fileStream.on("finish", resolve);
      });
  }); */