const express = require('express');
const router = express.Router();
const client = require('../database')
const auth = require('../middleware/authentication')

router.get('/', auth, (req, res) => {
    client.query('SELECT * FROM notes WHERE author=$1', [req.user.username], (error, results) => {
        if (error){
            return res.status(400).json({msg: "Could not get notes."})
        }
        else{
            return res.status(200).json(results.rows)
        }
    })
})

router.get('/:id', auth, (req, res) => {
    client.query('SELECT * FROM notes WHERE note_id=$1 AND author=$2', [req.params.id, req.user.username], (error, results) => {
        if (error){
            return res.status(400).json({msg: "Could not get note."})
        }
        else{
            return res.status(200).json(results.rows[0])
        }
    })
})

router.post('/', auth, (req, res) => {
    values = [req.body.date, req.body.title, req.body.body, req.body.author]
    client.query('INSERT INTO notes(date, title, body, author) VALUES($1, $2, $3, $4) RETURNING *', values, (error, results) => {
        if (error){
            return res.status(400).json({msg: "Could not create note."})
        }
        else{
            return res.status(201).json({msg: "Note has been created.", results})
        }
    })
})

router.delete('/:id', auth, (req, res) => {
    console.log("here")
    client.query('DELETE FROM notes WHERE (note_id=$1 AND author=$2)', [req.params.id, req.user.username], (error, results) => {
        if (error){
            return res.status(400).json({msg: "Could not delete note."})
        }
        else{
            return res.status(202).json({msg: "Entry has been deleted."})
        }
    })
})

router.put('/:id', auth, (req, res) => {
    if (req.body.title && req.body.body){
        values = [req.body.title, req.body.body, req.user.username, req.params.id]
        client.query('UPDATE notes SET title=$1, body=$2 WHERE (author=$3 AND note_id=$4)' , values, (error, results) => {
            if (error){
                return res.status(401).json({msg: "Could not update note."})
            }
            else{
                return res.status(200).json({msg: "Note has been updated."})
            }
        })
    }
    else if (req.body.body){
        values = [req.body.body, req.user.username, req.params.id]
        client.query('UPDATE notes SET body=$1 WHERE (author=$2 AND note_id=$3)' , values, (error, results) => {
            if (error){
                return res.status(401).json({msg: "Could not update note."})
            }
            else{
                return res.status(200).json({msg: "Note has been updated."})
            }
        })
    }
    else if (req.body.title){
        values = [req.body.title, req.user.username, req.params.id]
        client.query('UPDATE notes SET title=$1 WHERE (author=$2 AND note_id=$3)' , values, (error, results) => {
            if (error){
                return res.status(401).json({msg: "Could not update note."})
            }
            else{
                return res.status(200).json({msg: "Note has been updated."})
            }
        })
    }
})

module.exports = router