var http = require("http");
var url = require('url');
var fs = require("fs");
var is = require('./image-split');
var Jimp = require('jimp');

var args = process.argv.slice(2);
var image_path = args[0];
var num_row = args[1];
var num_col = args[2];
var res_files = is.splitImage(image_path,num_row,num_col);
var content_type;
var short_type;

console.log("Server starting at localhost 3000");


http.createServer(function(req, res){
  console.log("request sent");
  if (image_path.includes(".gif")){
    content_type = 'image/gif';
    short_type = '.jpg';
  } else {
    content_type = 'image/jpg';
    short_type = '.jpg';
  }
  if (req.url != "/favicon.ico" && req.url == "/"){
    res.writeHead(200, {'Content-Type': content_type});
    var rs = fs.createReadStream(image_path);
    rs.pipe(res);
  } else if (req.url != "/favicon.ico") {
    var q = url.parse(req.url, true).query;
    var user_Row = Number(q.userRow);
    var user_Col = Number(q.userCol);
    //Error checking for malformed query
    if (typeof(q.userRow) == 'undefined' || typeof(q.userCol) == 'undefined'){
      console.log('wrong format');
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('Malformed request; request format : /?userRow=#&userCol=#');
      res.end();
    } else if (user_Row >= num_row || user_Col >= num_col || user_Row < 0 || user_Col < 0){
      console.log('wrong number');
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('userRow or userCol out of dimension');
      res.end();
    } else {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      var rs = fs.createReadStream("p-r" + user_Row.toString() + 'c' + user_Col.toString() + short_type);
      rs.pipe(res);
    }
 }
}).listen(3000);
