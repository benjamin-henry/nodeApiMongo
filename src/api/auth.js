const router = require('express').Router();

router.post('/login', (req, res, next) => {
    res.json({
        message:'login attempt'
    })
})

router.post('/logout', (req, res, next) => {
    res.json({
        message:'logout attempt'
    })
})

router.post('/register', (req, res, next) => {
    res.json({
        message:'registerUser attempt'
    })
})

router.post('/update', (req, res, next) => {
    res.json({
        message:'update attempt'
    })
})


module.exports = router;