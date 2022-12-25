const express = require('express');
const app = express();
const todoRoutes = express.Router();

let Todo = require('../model/todo.model');
const mongoose = require('mongoose')



/*
todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});
*/

todoRoutes.get('/',async(req,res) => {
    try{
        const todos = await Todo.find()
        res.json(todos)
    } catch(err){
        res.send('Error ' + err)
    }
})



todoRoutes.route('/:id').get(function(req, res) {
    const id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});


todoRoutes.route('/add').post(function(req, res) {
    const todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});


/*
todoRoutes.post('/add',async(req,res) => {
    const todos = new Todo({
           todo_description = req.body.todo_description;
            todo_responsible = req.body.todo_responsible;
            todo_priority = req.body.todo_priority;
            todo_completed = req.body.todo_completed;
    })

    try{
        const a1 = await todos.save()
        res.json(a1)
    } catch(err){
        res.send('Error')
    }
})
*/

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send('data is not found');
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});



module.exports = todoRoutes;