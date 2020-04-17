const express = require('express');
const router = express.Router();
const Joined = require('./joinedModel');

router.get('/', (req, res) => {
    Joined.joinedList()
    .then(tasks => {
        res.status(201).json(tasks)
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.post('/', (req, res) => {

})

module.exports = router;