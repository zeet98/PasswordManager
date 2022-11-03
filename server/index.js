const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3001;

const {encrypt, decrypt} = require('./EncryptionHandler');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({  //establish connection to db
    user: 'root', 
    host: 'localhost',
    password: 'password..',
    database: 'PassMang'
});

app.post("/addpassword", (req, res) => {
    const {password, url} = req.body

    db.query(
      "INSERT INTO passwords (password, url) VALUES (?,?)", 
      [password, url],
      (err, result) => {
        if (err){
            console.log(err);
        } else {
            res.send("Success");
        }
      }
    );
});
app.listen(PORT, ()=> {
    console.log("Server is running");
});