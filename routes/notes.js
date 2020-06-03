const express = require('express');
const router = express.Router();
const client = require('../database')

router.get('/', (req, res) => {
    client.query('SELECT * FROM notes', (error, results) => {
        if (error){
            console.log(error);
        }
        else{
            res.status(200).json(results.rows)
        }
    })
})

router.get('/:id', (req, res) => {
    client.query('SELECT * FROM notes WHERE note_id=$1', [req.params.id], (error, results) => {
        if (error){
            console.log(error);
        }
        else{
            res.status(200).json(results.rows)
        }
    })
})

router.post('/', (req, res) => {
    values = [req.body.date, req.body.title, req.body.body]
    client.query('INSERT INTO notes(date, title, body) VALUES($1, $2, $3)', values, (error, results) => {
        if (error){
            console.log(error);
        }
        else{
            res.status(201).json({msg: "Entry has been created"})
        }
    })
})

router.delete('/:id', (req, res) => {
    client.query('DELETE FROM notes WHERE note_id=$1', [req.params.id], (error, results) => {
        if (error){
            console.log(error);
        }
        else{
            res.status(202).json({msg: "Entry has been deleted."})
        }
    })
})

router.put('/:id', (req, res) => {
    values = [req.body.title, req.body.body, req.params.id]
    client.query('UPDATE notes SET title=$1, body=$2 WHERE note_id=$3' , values, (error, results) => {
        if (error){
            console.log(error);
        }
        else{
            res.status(200).json({msg: "Entry has been updated"})
        }
    })
})

module.exports = router