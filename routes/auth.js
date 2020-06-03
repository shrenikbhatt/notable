const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router();

const client = require('../database')

// router.get('/', (req, res) => {
//     if (req.body.username == "test" && req.body.password == "test")
//         res.json({msg: "success"})
//     else{
//         res.status(400).json({msg: "incorrect credentials"})
//     }
// })

router.post('/register/', (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.confirm_password){
        return res.status(400).json({msg: "Please enter all fields."})
    }
    else if (req.body.password !== req.body.confirm_password){
        return res.status(400).json({msg: "Passwords do not match."})
    }

    client.query("SELECT EXISTS(SELECT 1 FROM users WHERE username=$1)", [req.body.username], (error, results) => {
        if (error) throw error;
        if (results.rows[0].exists){
            return res.status(400).json({msg: "Username is taken."})
        }
        else{
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if (err) throw err;
                    client.query("INSERT INTO users(username, password) VALUES($1, $2)", [req.body.username, hash], (error, results) => {
                        if (error){
                            return res.status(400).json({msg: "Could not complete request", error})
                        }
                        else{
                            jwt.sign({
                                username: req.body.username},
                                "n0ta6l3S3cr3t",
                                {expiresIn: 1800},
                                (err, token) => {
                                    if (err) throw err;
                                    return res.status(201).json({token})
                                }
                            )
                        }
                    })
                })
            })
        }
    })
})

router.post('/', (req, res) => {
    if (!req.body.username || !req.body.password){
        return res.status(400).json({msg: "Please enter all fields."})
    }

    client.query("SELECT * FROM users WHERE username=$1", [req.body.username], (error, results) => {
        if (error) throw error;
        // console.log(results);
        if (!results.rows || !results.rows.length){
            return res.status(400).json({msg: "User does not exist"})
        }
        else{
            bcrypt.compare(req.body.password, results.rows[0].password).then(match => {
                if (!match) return res.status(400).json({msg: "Invalid credentials."});
                jwt.sign(
                    {username: results.rows[0].username},
                    "n0ta6l3S3cr3t",
                    {expiresIn: 1800},
                    (err, token) => {
                        if (err) throw err;
                        res.status(201).json({
                            token
                        })
                    }
                )
            })
        }
    })
})

module.exports = router