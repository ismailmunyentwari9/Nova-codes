const http= require('http');
const server=http.createServer(
    (req,resp)=>{
        resp.writeHead(200,{'Content-Type':'text/plain'});
      
        resp.end('Hello its first Node js project....')
        console.log(req);
      }
)

server.listen(3000,console.log('Im listerning on port 3k.....'));