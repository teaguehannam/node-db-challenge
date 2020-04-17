const express = require('express');
const projectsRouter = require('./projects/projectsRouter');
const tasksRouter = require('./tasks/tasksRouter');
const resourcesRouter = require('./resources/resourcesRouter');

const server = express();
const port = 5000;

server.use(express.json());
server.use('/resources', resourcesRouter);
server.use('/projects', projectsRouter);
server.use('/tasks', tasksRouter);

server.listen(port, () => console.log(`Server running on port ${port}`))