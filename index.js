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

    fs.readFile('./parents.json', 'utf8', function(err, input1){ if(err){
    console.log(err)
    }else{
    console.log('loading Data Parent.....')
    var parent = JSON.parse(input1)
    sleep(3000)
    fs.readFile('./children.json', 'utf8', function(err, input2){ if(err){
      console.log(err)
      }else{
      console.log('Loading Data children......')
      var child = JSON.parse(input2)
      sleep(3000)
      for (let i = 0; i < parent.length; i++){
        // console.log(parent[0].last_name, '<<<')
        // console.log(child)
        let anak2 = []
          for (let j = 0; j< child.length; j++){
            // console.log (parent[i],'???')
            if (parent[i].last_name == child[j].family){
            anak2.push(child[j].full_name)
            // console.log(anak2)
            }
          }
          parent[i].children = anak2
          console.log(parent)
    }
      }
      })
    }
    })

}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
