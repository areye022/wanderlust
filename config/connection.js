var mysql= require('mysql');
const util= require("util");

var connection = mysql.createConnection({
    // host is the location of your local server
    host: "g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    port: 3306,
    user:"cp9xwervbapyz968",
    password:"nvdvn5jnrv37nsy7",
    database: "s9w73gfwqkry2vk2",
});

connection.query = util.promisify(connection.query);

connection.connect(function(err){
    if (err) throw err;

    console.log(`connected as id ${connection.threadId}`);
    
    // connection.end();
})

module.exports= connection