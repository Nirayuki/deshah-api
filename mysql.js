const mysql = require('mysql2');

var pool = mysql.createPool({
    "user": "root",
    "password": "familia123",
    "database": "mydb",
    "host": "localhost",
    "port": "3306"
})

exports.pool = pool;