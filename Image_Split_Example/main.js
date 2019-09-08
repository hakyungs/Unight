var http = require("http");
var url = require('url');
var fs = require("fs");
var is = require('./image-split');
var Jimp = require('jimp');


console.log("Server starting at localhost 3000");
var image_path = "Example.jpeg";
var num_row = 2;
var num_col = 2;
var user_num = 0;
var res_files = is.splitImage(image_path,num_row,num_col);


http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'image/jpeg'});
  if (req.url == "/"){
    var rs = fs.createReadStream(image_path);
    rs.pipe(res);
  } else {
  var q = url.parse(req.url, true).query;
  var user_num = q.user;
  console.log(user_num);
  var rs = fs.createReadStream("res-p"+user_num.toString()+".jpg");
  rs.pipe(res);
 }
}).listen(3000);
