var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object





const html=fs.readFileSync("index.html","utf-8");



app.get('/',(req,res)=>{
    res.end(html);
})

// app.get('/:name',(req,res)=>{
//     let name=req.params.name;
   
   
//     let dataToshow=data;
    
//     res.send(dataToshow);
// })


 app.get('/:name', function(req, res){
   fs.readFile(__dirname + "/" + "prizes.json", 'utf8', function(err, data){
    let name=req.params.name;
console.log(name);
let dataToshow=JSON.parse(data)

function getResult(filterBy, dataToshow) {
    return dataToshow.prizes.filter(function(obj) {
     return obj.laureates.filter(function(item){

        if(item.firstname===filterBy)
        
       return item;
     });
   });
  }
  

 res.send(getResult(name,dataToshow));
   })
})

 

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
 });