const express =require('express');
const mysql =require('mysql');
const bodyParser=require('body-parser');

const app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

// .......set database.............
const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"book-shop"

})
// ...check connection.........

db.connect(err=>{
    if(err){
        console.log("Failed To connect..");
        return;
    }
    else{
        console.log("db connected....");
    }
})
// ........Insert datas in database.....
app.get('/add',(req,resp)=>{
    resp.render('form');
})




app.listen(5000,console.log("I'm listerning on 5k port")); 
app.get('/books',(req,resp)=>{
    const sql =`SELECT  * FROM boostore`;
    db.query(sql,(err,data)=>{
        if(err){
           resp.end("Internal server erro");
           return;
        }
        else{
            resp.render('books',{data});
        }
    })
    
}) 
app.post('/delete/:id',(req,resp)=>{
    const {id}=req.params;
    const sql =`DELETE FROM boostore WHERE book_id=${id}`;
    db.query(sql,(err)=>{
        if(err){
    resp.end("Internal Server Error");
    return;
        }
        else{
            
            resp.end("Book Removed From Store..");
        }
    })
})
app.post('/book',(req,resp)=>{
    const {name,title,author}=req.body;
    const sql=`INSERT INTO boostore VALUES(NULL,'${name}','${title}','${author}')`;

    db.query(sql,(err)=>{
        if(err){
            resp.end("interal server erro");
            return;
        }
        console.log("Data Inserted Well...");
        resp.redirect('books');
    })
})
app.post('/edit/:id',(req,resp)=>{
    const {id}=req.params;
    const sql=`SELECT * FROM boostore WHERE book_id=${id}`;
    db.query(sql,(err,data)=>{
      if(err){
        resp.end("Internal Server error");
        return;
      }
      else{

        resp.render('editform',{data});
      }
    })
    
})
app.post('/edit',(req,resp)=>{
    const{id,name,title,author}=req.body;
    const sql =`UPDATE boostore SET book_name='${name}',book_title='${title}', book_author='${author}' WHERE book_id=${id}`;

    db.query(sql,(err)=>{
        if(err){
            resp.end("Internal Server Error");
            return;
            
        }
        else{
            resp.redirect("books");
        }
    })

})