const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const mongoose = require('mongoose')


const Todo = require('./model/todo.model');

app.use(cors());
//Body Parser
app.use(bodyParser.urlencoded(
    {
        extended: false
    }
));

app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const todosRouter = require("./routes/todos") 
app.use('/todos',todosRouter)

//Message to display when wrong url is called
app.use((req,res,next) => {
    res.status(404).json( {
        error: 'Bad Request: URL not found'
    })

})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});