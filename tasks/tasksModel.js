const db = require('../data/db-config');

module.exports = {
    getTasks,
    addTask,
    findById
}

function getTasks(){
    return db('tasks')
        .select('tasks.description as taskDescription', 'projects.name as project', 'projects.description')
        .join('projects', 'tasks.project_id', 'projects.id')
}

function findById(id){
    return db('tasks')
        .where({id})
        .first();
}

function addTask(task){
    return db('tasks')
        .insert(task, 'id')
        .then(id => {
            return findById(id[0]);
        })
}