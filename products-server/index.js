const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const SELECT_ALL_PRODUCTS_QRY = "SELECT * FROM products";
const connection = mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'test'
});

connection.connect(err=>{
    if(err){
        return err;
    }
});

//console.log(connection);

const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send (`Hello from the products server`);
});

app.get('/products',(req,res)=>{
    connection.query(SELECT_ALL_PRODUCTS_QRY,(err,results)=>{
        if(err){
            return res.send(err);
        } else {
            return res.json({
                data:results
            })
        }
    })
});

app.get('/products/add',(req,res)=>{
    const{name,price} = req.query;
    const INSERT_QRY = `INSERT INTO products (name,price,status) VALUES ('${name}','${price}',1)`;
    connection.query(INSERT_QRY,(err,results)=>{
        if(err){
            return res.send(err);
        } else {
            return res.send("Successfully added");
        }
    })
});

app.listen(4000,()=>{
    console.log(`product server listening on port 4000`);
});

