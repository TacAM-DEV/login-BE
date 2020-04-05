let mysql = require('mysql');

let connection = mysql.createConnection({
    host    : process.env.DBHOST,
    user    : process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME
});

module.exports = connection;