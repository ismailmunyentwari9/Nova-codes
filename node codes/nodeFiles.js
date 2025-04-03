const http = require('http');
const fs = require('fs');

const server=http.createServer((req,resp)=>{
if(req.url==='/'){
 fs.readFile('./views/home.html',(err,data)=>{
   if(err){
      resp.writeHead(500,{'Content-Type':'text/plain'})
      resp.end('Internal Server Erro..');
   }
   else{
    resp.writeHead(200,{'Content-Type':'text/html'}) 
    resp.end(data); 
    }
 })
}
else if(req.url==='/about'){
    fs.readFile('./views/about.html',(err,data)=>{
        if(err){
            resp.writeHead(500,{'Content-Type':'text/plain'})
            resp.end('Internal Server Erro..');
         }
         else{
            resp.writeHead(200,{'Content-Type':'text/html'})
            resp.end(data);
         }
    })
}
else{
    fs.readFile('./views/404.html',(err,data)=>{
        if(err){
            resp.writeHead(500,{'Content-Type':'text/plain'})
            resp.end('Internal Server Erro..');
         }
         else{
            resp.writeHead(200,{'Content-Type':'text/html'});
            resp.end(data)  ;
         }
    })
}

})
server.listen(4000,console.log("it's ok I'm running on port 4k...."));