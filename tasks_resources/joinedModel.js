const db = require('../data/db-config');

module.exports = {
	joinedList
};

function joinedList(){
	//SELECT * FROM tasks INNER JOIN resources ON tasks.project_id = resources.project_id
    return db("connection");
}


