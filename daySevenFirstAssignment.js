const fs = require("fs");
const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");
const { readFile } = require("fs");
const { MongoClient, Collection } = require("mongodb");

const port=3000;
var app=express();
const uri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var prdArr=[];

app.post("/product",(request,response)=>{

    mongoClient.connect()  
    .then((client) => {  
        
        var dbName = client.db("ProductDB");
        var collName = dbName.collection("product"); 

        prdArr.push(request.body);
        

        console.log(prdArr);

        const options = { ordered: true };

        //collName.insertMany(prdArr,options)
        // collName.insertOne(prdArr)
        // .then((res) => {
        //     response.send("Products updated");  
              
        // })
        // .catch((err) => {
        //     console.log("Error doing the insertMany operation", err);
            
        // })
    })  
    .catch((err) => {
        console.log("Error in Database Connection", err);
    })
})

app.listen(port,()=>{
    console.log(`Server started at port : ${port}`);
})