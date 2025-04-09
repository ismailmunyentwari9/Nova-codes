const express=require ('express');
const mysql = require('mysql');
const bodyParser=require('body-parser');

const app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('view engine','ejs');

// .......seting database.........

const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'sms_db'
});

db.connect(err=>{
    if(err){
        console.log("Failed to connect...")
        return;
    }
    else{
        console.log("connected to sms_db..")
    }
})
app.listen(5000);

// .......Endpoints.............
app.get('/',(req,resp)=>{
    resp.render('form');
})
app.post('/add',(req,resp)=>{
  console.log(req.body);
  const{studentName,studentGrade,studentLocation}=req.body;
  const sql=`INSERT INTO students VALUES(Null,'${studentName}','${studentGrade}','${studentLocation}')`

  db.query(sql,(err)=>{
    if(err){
        resp.end("There is error");
    }
    else{
        console.log("Data inserted");
    }
  })
});
app.get('/students',(req,resp)=>{
    const sql= `SELECT * FROM students`;
    db.query(sql,(err,results)=>{
    if(err){
        resp.end('Internal server erro');
        return;
    }
    else{
        resp.json(results);
    }
    })
})
app.get('/student/:id',(req,resp)=>{
    console.log(req.params);
    const {id}=req.params;
    const sql=`DELETE FROM students WHERE student_id=${id}`;
    db.query(sql,(err)=>{
        if(err){
            resp.send("Internal server error");
        }
        else{
            console.log("Deal Done ✔");
        }
    })

 
})

app.get('/update/:id',(req,resp)=>{
    const {id}=req.params;
    console.log(req.body);
})
