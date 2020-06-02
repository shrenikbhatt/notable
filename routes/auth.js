const express = require('express')
const router = express.Router();

router.post('/', (req, res) => {
    if (req.body.username == "test" && req.body.password == "test")
        res.json({msg: "success"})
    else{
        res.status(400).json({msg: "incorrect credentials"})
    }
})

module.exports = router