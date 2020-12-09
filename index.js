const fs = require('fs');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  fs.readFile(parent_file,'utf8',function (err, berhasil) {
    if (err) {
      console.log(err)
    }
    else{
      console.log('Loading');
      sleep(2000)
      fs.readFile(children_file,'utf8',function (err,sukses) {
        if (err) {
          console.log(err);
        }
        else{
          console.log('Loading');
          sleep(2000)
          var dataKeluarga = JSON.parse(berhasil)
          // console.log(dataKeluarga);
          for (let i = 0; i < dataKeluarga.length; i++) {
            let dataAnak = JSON.parse(sukses)
            let tampungAnak = []; 
            for (let j = 0; j < dataAnak.length; j++) {
              if (dataKeluarga[i].last_name == dataAnak[j].family) {
                tampungAnak.push(dataAnak[j].full_name);
              }
            }
            dataKeluarga[i].children = tampungAnak;
            console.log(dataKeluarga[i]);
          }
        }
      })
    }
  })
  
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
