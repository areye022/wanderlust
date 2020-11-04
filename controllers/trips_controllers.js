var express= require("express");
const trip = require("../models/trips");
// var trips= require("../models/trips");
var router = express.Router();

router.get("/",function(req,res){
    trip.selectAll(function(data){
        var hbsObject= {
            trips: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/trips", function(req,res){
    console.log(req.body);
    trip.insertOne([
        "trip_name","traveled"
    ], [req.body.trip_name, false
    ], function(result){
        res.json({id: result.insertId});
    })
});

router.put("/api/trips/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    trip.updateOne({
      traveled: true
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  