var Jimp = require('jimp');

exports.splitImage = function (img_path,num_row,num_col) {
  console.log("splitImage fn is called");
  var res_files = [];
  Jimp.read(img_path, (err, yankee) => {
    var w_size = yankee.bitmap.width / num_col;
    var h_size = yankee.bitmap.height / num_row;
    var part_num = 0;

    for (var i = 0; i < num_row; i++) {
      for (var j = 0; j < num_col; j++) {
        if (err) throw err;
        var p = yankee.clone();
        p
          .crop(i * w_size, j * h_size, w_size, h_size)
          .write('res-p' + part_num.toString() + '.jpg');
        part_num++;
        res_files.push(p);
      };
    };

  });

  return res_files;
};
