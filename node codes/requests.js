const http= require('http');
const server=http.createServer(
    (req,resp)=>{
      if(req.url==='/'){
        resp.writeHead(200,{'Content-Type':'text/plain'});
        resp.end("This is Home Page");
      }
      else if(req.url==='/about'){
        resp.writeHead(200,{'Content-Type':'text/plain'});
        resp.end("This is my about page...");
      }
      else{
        resp.writeHead(404,{'Content-Type':'text/plain'});

        resp.end("404, Page Not Found");
      }
    }
)
server.listen(2000,console.log("don't worry I'm running on port 2k......."));