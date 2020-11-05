var mysql= require('mysql');
const util= require("util");

var connection = mysql.createConnection({
    // host is the location of your local server
    host: "us-cdbr-east-02.cleardb.com",
    port: 3306,
    user:"b01e171b246c91",
    password:"460aaa3e",
    database: "heroku_b50c6733891c7e8",
});

connection.query = util.promisify(connection.query);

connection.connect(function(err){
    if (err) throw err;

    console.log(`connected as id ${connection.threadId}`);
    
    // connection.end();
})

module.exports= connection