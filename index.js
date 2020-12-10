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
  // Code here
  fs.readFile(parent_file, 'utf8', function (err, data) {
    if (err)  {
      console.log(err)
    } else  {
      sleep(1000)
      console.log('loading data parent.....')
      sleep(1000)
      console.log('loading data children.....')
      sleep(3000)
      let dataParent = JSON.parse(data)
        fs.readFile(children_file, 'utf8', function (err, data) {
          if (err)  {
            console.log(err)
          } else  {
            let dataChildren = JSON.parse(data)
            for (let i=0; i<dataParent.length; i++) {
            let penampung = []
            for (let j=0; j<dataChildren.length; j++) {
              if (dataParent[i].last_name===dataChildren[j].family)
                penampung.push(dataChildren[j].full_name)
                dataParent[i].children = penampung
            }
          }
          console.log(dataParent)
        }
      })
    }
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
