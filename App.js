var mysql = require('mysql');  
const selectData=require('./selectquery')
const util=require('util');
const insertData=require('./insertData');
const selectUnique = require('./selectUnqiue');
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "password",  
  database:"demo"
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
  
});  
var sql = "UPDATE employees SET city = 'Delhi' WHERE city = 'Allahabad'";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log(result.affectedRows + " record(s) updated");  
});  
const query = util.promisify(con.query).bind(con);
(async function(){ await insertData(query);
    })();
    (async function(){ let emp=await selectUnique(query);
        console.log(emp)
    })();
(async function(){let users = await selectData(query);
    console.log(users);
    })()

  
// var sql = "INSERT INTO employees (id, name, age, city) VALUES ('1', 'Ajeet Kumar', '27', 'Allahabad')";  
// con.query(sql, function (err, result) {  
// if (err) throw err;  
// console.log("1 record inserted");  
// });  
// var sql = "CREATE TABLE employees (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";  
// con.query(sql, function (err, result) {  
// if (err) throw err;  
// console.log("Table created");  
// });  
// con.query("CREATE DATABASE demo", function (err, result) {  
//     if (err) throw err;  
//     console.log("Database created");  });