const router = require('express').Router();
let MongoClient = require("mongodb").MongoClient;

router.get('/', (req, res) => {
    res.json({
      message: 'API - auth'
    });
  });

router.post('/login', (req, res, next) => {
    const params = req.body.params
    MongoClient.connect(process.env.DB_URL, function(err, db) {
        if (err) {
            res.json({msg:"connection failed"});
        } else {
            connected = true;
            let users = db.db('myAppdb').collection('users');
            users.findOne(params, function(err, result) {
                err ? res.json({msg:"query failed"}) 
                : result ? res.json({user:result}) 
                : res.json({user:null});
            })
            db.close()
        }
    }) 
})

router.post('/logout', (req, res, next) => {  
    const params = req.body.params
    MongoClient.connect(process.env.DB_URL, function(err, db) {
        if (err) {
            res.json({msg:"connection failed"});
        } else {
            connected = true;
            let users = db.db('myAppdb').collection('users');
            users.findOne(params, function(err, result) {
                err ? res.json({msg:"query failed"}) 
                : result ? res.json({user:result}) 
                : res.json({user:null});
            })
            db.close()
        }
    }) 
})

router.post('/register', (req, res, next) => {
    const params = req.body.params
    MongoClient.connect(process.env.DB_URL, function(err, db) {
        if (err) {
            res.json({msg:"connection failed"});
        } else {
            connected = true;
            let users = db.db('myAppdb').collection('users');
            // users.insert(params, function(err, result) {
            //     err ? res.json({msg:err}) 
            //     : result ? res.json({user:result}) 
            //     : res.json({user:null});
            // })
            db.close()
        }
    })
})

router.post('/update', (req, res, next) => {
    const params = req.body.params;
    res.json({
        message:'update attempt'
    })
})


module.exports = router;