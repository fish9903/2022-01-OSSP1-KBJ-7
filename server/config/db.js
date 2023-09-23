const mysql = require('mysql');

const db = mysql.createPool({
    host: 'database-1.chlqnazpznfr.us-west-2.rds.amazonaws.com',
    port: '3306',
    user: '****',
    password: '****',
    database: '****'
});

module.exports = db;
