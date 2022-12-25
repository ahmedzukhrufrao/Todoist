const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({ //Creating Schema for our database
    todo_description: {
        type: String
    },
    todo_responsible: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Todo', Todo); //Exporting our data model