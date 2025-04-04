const express = require('express');
const App =express();
const path=require('path');
App.use(express.static(path.join(__dirname,'public')));
// set view engine...
App.set('view engine','ejs');

// ...endpoints......
App.get('/',(req,resp)=>{
 resp.status(200)
 resp.send("Hello I'm home page...");
 console.log(__dirname);
})

App.get('/about',(req,resp)=>{
 resp.status(200);
 resp.send("Hello I'm about page");
})

App.get('/404',(req,resp)=>{
resp.status(404);
resp.send("Page not found..");
})

// ....accessing html files Using sendFile  method....
App.get('/contacts',(req,resp)=>{
    resp.status(200);
    resp.sendFile(path.join(__dirname,'./views/contacts.html'));
})


// .........EJS files rendering..
App.get('/blog',(req,resp)=>{
    resp.render('blogs',{title:'Blog||page',age:25,message:"welcome to out blog page"});
})

// .........listerning on port 5000....
App.listen(5000,console.log("I'm listerning on port 5k"))