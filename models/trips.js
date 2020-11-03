const orm = require("../config/orm.js");

var trip = {
    selectAll: function(cb) {
        orm.selectAll("trips", function(res){
            cb(res);
        });
    },
    
    insertOne: function(columns,values,cb) {
        orm.insertOne("trips",columns, values, function(res){
            cb(res);
        })
    },
    // updateOne:
}

module.exports= trip;