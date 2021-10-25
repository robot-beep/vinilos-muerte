const mysql = require('mysql');        

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Vinilos'
});

con.connect(function (err){
if(err){
    console.log(err);
    return;
    }else{
        console.log("* * * La BD esta conectada! * * *");
        }
});

module.exports = con;  

