const { connect } = require("./connection");
var connection= require("./connection");

function questions(num){
    var arr= [];

}
// creating a selectAll(), insertOne(), updateOne(),
var orm= {
    selectAll:function(input,cb){
        var queryString= "SELECT * FROM " + input + ";";
        connection.query(queryString, function(err, res){
            if (err){
                throw err;
            }
            cb(res);
        });
    },

    insertOne: function(table,columns, values, cb){
        var queryString= `INSERT INTO ${table} ( ${columns.toString()} ) VALUES ( ${values.length})`
        connection.query(queryString, values, function(err, res){
            if (err) {
                throw err;
        }
        cb(res);
        });
    },

    // updateOne: function()

}