var express= require("express");
const trip = require("../models/trips");
var trips= require("../models/trips");
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
    trip.insertOne([
        "trip_name","arizona"
    ], [req.body.trip_name, req.body.arizona
    ], function(result){
        res.json({id: result.insertId});
    })
});

module.exports=router;