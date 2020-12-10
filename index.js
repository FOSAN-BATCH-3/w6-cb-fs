const fs = require('fs');
const {
  join
} = require('path');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf8', function (err, loading) {
    if (err) {
      console.log(err)
    } else {
      console.log('loading');
      sleep(2000);

      fs.readFile(children_file, 'utf8', function (err, berhasil) {

        if (err) {
          console.log(err)
        } else {
          console.log('loading');
          sleep(2000);

          var dataKeluarga = JSON.parse(loading);

          for (let i = 0; i < dataKeluarga.length; i++) {
            let dataAnak = JSON.parse(berhasil);
            let penampung = []

            // console.log(dataAnak.length);
            for (let x = 0; x < dataAnak.length; x++) {
              if (dataKeluarga[i].last_name == dataAnak[x].family) {
                penampung.push(dataAnak[x].full_name);
              }
            }
            dataKeluarga[i].children = penampung;
            // console.log(penampung);
            console.log(dataKeluarga[i]);
          }

        }

      })
    }

  })
}


match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");