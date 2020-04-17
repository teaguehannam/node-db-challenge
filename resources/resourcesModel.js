const db = require('../data/db-config');

module.exports = {
    getResources,
    addResource,
    findById
}

function getResources(){
    return db('resources');
}

function findById(id){
    return db('resources')
        .where({id})
        .first();
}

function addResource(resource){
    return db('resources')
        .insert(resource, 'id')
        .then(id => {
            return findById(id[0]);
        })
}