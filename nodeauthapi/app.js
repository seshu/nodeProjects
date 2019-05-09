const express = require('express');
const jwt = require('jsonwebtoken');

var app = express();

app.get('/api',(req,res)=>{
    res.json({
        message:"Welcome to API"
    });
});

app.post('/api/posts',verifyToken,(req,res)=>{
    jwt.verify(req.token,'MySecretKey',(err,authData)=>{
        if(err){
            res.json(err);
            // res.sendStatus(403);
        } else {
            res.json({
                message:"Post created",
                authData
            });
        }
    });
});

app.post('/api/login',(req,res)=>{
    const user={
        id:123,
        name:'seshu',
        email:'seshu.n.mca@gmail.com'
    }
    jwt.sign({user},'MySecretKey',{expiresIn:'50s'},(err,token)=>{
        res.json({
            token
        })
    })
})

//Format of the TOKEN
// Authorization : Bearer <access-token>

//Verify token function
function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    //check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split();
        //get the token from array
        const bearerToken = bearer[1];
        //set the token
        req.token = bearerToken;
        //Next middleware
        next();
    } else {
        res.sendStatus(403);
    }
}

app.listen(3000,()=>console.log("Server running at port:3000"));