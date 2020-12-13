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
fs.readFile(parent_file,'utf8',function(err,data){
  if(err){
    console.log(err)
  }
  else{
    sleep(2000)
      console.log('loading data parents...')
    sleep(2000)
      console.log('loading data children...')
    sleep(1000)
      console.log('Notification:Data sedang diproses!')
    let DataParents=JSON.parse(data)
  fs.readFile(children_file,'utf8',function(err,data){
    if(err){
      console.log(err)
    }
    else{
      let DataChildren=JSON.parse(data)
      for(let i=0;i<DataParents.length;i++){
        let penampung=[]
      for(let j=0;j<DataChildren.length;j++){
        if(DataParents[i].last_name===DataChildren[j].family)
          penampung.push(DataChildren[j].full_name)
          DataParents[i].children=penampung
      }
      }
      console.log(DataParents)
    }
  })
  }
})

}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
