// 1. Use morgan and store all requests coming to the server in a log file
var express = require('express')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

const port=3000;

var app = express()
 

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 

app.use(morgan('combined', { stream: accessLogStream }))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})
app.listen(port,()=>{
    console.log(`Server started at port : ${port}`);
})

// 2. Create a employees collection and insert 10 docs.
// Each doc will have empId, empName and salary

/*
Commants:
1)mongod
2)mongo
3)use dxcDB
4)db.employees.insertMany([{ empId:101,empName:"Krish"},
                            {empId:102,empName:"Raju"},
                            {empId:103,empName:"Mani"},
                            {empId:104,empName:"Venki"},
                            {empId:105,empName:"Prabha"},
                            {empId:106,empName:"Vijaya"},
                            {empId:107,empName:"Naveen"},
                            {empId:108,empName:"Meena"},
                            {empId:109,empName:"Deebak"},
                            {empId:110,empName:"kumar"}]);
5)db.employees.find();

*/