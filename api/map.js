/**
 * Created by ypling on 2/12/15.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    req.db.get("test").find({},{},function(e,docs){
        res.write(JSON.stringify(docs));
        console.log("e:"+e);
        res.end();
    });
});

router.post('/', function(req, res) {
    console.log(req.body);
    req.db.get("test").insert(req.body,{w: 1},function(err, records){
        console.log("Record added as "+records._id);
        res.write(JSON.stringify(records));
        res.end();
    });
});

module.exports = router;