const express = require('express');
const Projects = require('./projectsModel');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(201).json(projects);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.post('/', (req, res) => {
    Projects.addProjects(req.body)
    .then(newProject => {
        res.status(201).json(newProject);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;