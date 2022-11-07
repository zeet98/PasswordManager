const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3001;

const { encrypt, decrypt } = require("./EncryptionHandler");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({  //establish connection to db
    user: 'root', 
    host: 'localhost',
    password: 'password..',
    database: 'PassMang'
});

app.post("/addpassword", (req, res) => {
    const {password, url} = req.body;
    const hashedPassword = encrypt(password); //encrypt b4 insert

    db.query(
      "INSERT INTO passwords (password, url, iv) VALUES (?,?,?)", 
      [hashedPassword.password, url, hashedPassword.iv],
      (err, result) => {
        if (err){
            console.log(err);
        } else {
            res.send("Success");
        }
      }
    );
});

app.get("/showpasswords", (req, res) => {
    db.query("SELECT * FROM passwords;", (err, result) => {
       if (err){
        console.log(err);
       } else {
        res.send(result);
       }
    });
});

app.post("/decryptpassword", (req, res)=> {
    res.send(decrypt(req.body))
});

app.listen(PORT, ()=> {
    console.log("Server is running");
});