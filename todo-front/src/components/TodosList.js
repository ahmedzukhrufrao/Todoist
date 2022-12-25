import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Todo = (props) => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
            
        </td>
    </tr>
)

const TodosList = () => {
            const [todos,setTodos]=useState([]);

            
 useEffect(() => {
        axios.get('http://localhost:3000/todos/')
            .then(response => {
                setTodos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    })

    
    
    function todoList() {
        

        
        return todos.map(function (currentTodo, i){ 
            return <Todo todo={currentTodo} key={i} />;
    });
    }
    







            return ( 
                <>
                   <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoList()}
                    </tbody>
                </table>
            </div>
                </>
            )
    
    }
export default TodosList;
