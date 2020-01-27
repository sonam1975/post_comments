var mysql = require('mysql');
var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '123',
    database: 'soundcloud'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connection is id ' + connection.threadId);
    }
});

module.exports = {connection};