const router = require('express').Router();
let MongoClient = require("mongodb").MongoClient;


router.get('/', (req, res) => {
    res.json({
        message: 'API - auth'
    });
});

// router.post('/login', (req, res, next) => {
//     const params = req.body.params
//     const client = await MongoClient.connect(process.env.DB_URL, { 
//         useNewUrlParser: true, 
//         useUnifiedTopology: true,
//     });
//     const db = client.db(process.env.DB_NAME_APP);
//     const result = await db.collection('users').findOne(params);
//     res.json(result)
//     client.close();
// })

// router.post('/logout', (req, res, next) => {  
//     const params = req.body.params
    
// })

// router.post('/register', async (req, res, next) => {
//     const params = req.body.params
//     const client = await MongoClient.connect(process.env.DB_URL, { 
//         useNewUrlParser: true, 
//         useUnifiedTopology: true,
//     });
//     const db = client.db(process.env.DB_NAME_APP);
//     const result = await db.collection('users').findOne(params);
//     if(result == null) {
//         const _result = await db.collection('users').insertOne(params);
//         res.json(_result)
//     } else {
//         res.json({
//             "result": {
//                 "n": 0,
//                 "ok": 0
//             },
//             msg: "user already exists"
//         })
//     }
//     client.close();
// })


// CREATE
router.post('/create', async (req, res, next) => {
    const params = req.body.params
    const client = await MongoClient.connect(process.env.DB_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    const db = client.db(process.env.DB_NAME_APP);
    const result = await db.collection('users').insertOne(params);
    res.json(result)
    client.close();
})

// READ
router.post('/read', async (req, res, next) => {
    const params = req.body.params
    const client = await MongoClient.connect(process.env.DB_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    const db = client.db(process.env.DB_NAME_APP);
    const result = await db.collection('users').findOne(params);
    res.json(result)
    client.close();
})

// UPDATE
router.post('/update', async (req, res, next) => {
    const params = req.body.params;
    const query = params.query;
    
    const client = await MongoClient.connect(process.env.DB_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    const db = client.db(process.env.DB_NAME_APP);
    const result = await db.collection('users').findOne(query);
    if(result) {
        const r = await db.collection('users').updateOne(query, {$set:params.newValues});
        res.json(r)
    }
    
    client.close();
})

// DELETE
router.post('/delete', async (req, res, next) => {
    const params = req.body.params
    const client = await MongoClient.connect(process.env.DB_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    const db = client.db(process.env.DB_NAME_APP);
    const result = await db.collection('users').deleteOne(params);
    res.json(result)
    client.close();
})


module.exports = router;