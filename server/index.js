const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 3001;

const db = mysql.createConnection({  //establish connection to db
    user: 'root', 
    host: 'localhost',
    password: 'password..',
    datbase: 'PassMang'
})

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(PORT, ()=> {
    console.log("Server is running");
});