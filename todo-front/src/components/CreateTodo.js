import React from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



const CreateTodo = () => {
       
        const [todo_description,setTodo_description] = useState('');
        const [todo_responsible,setTodo_responsible] = useState('');   
        const [todo_priority,setTodo_priority] = useState(''); 
        const [todo_completed,setTodo_completed] = useState(false);    
    
        const onChangeTodoDescription = (event) => {
             setTodo_description(event.target.value) ;
        }

        const onChangeTodoResponsible = (event) => {
            setTodo_responsible(event.target.value) ;
        }

       const onChangeTodoPriority= (event) => {
        setTodo_priority(event.target.value) ;
        }

        const onsubmit = (event) => {
           event.preventDefault();

           console.log('Form Submitted: ');
           console.log(`Todo Description: ${todo_description}`);
           console.log(`Todo Responsible: ${todo_responsible}`);
           console.log(`Todo Priority: ${todo_priority}`);
           console.log(`Todo Completed: ${todo_completed}`);

           const newTodo = {
            todo_description: todo_description,
            todo_responsible: todo_responsible,
            todo_priority: todo_priority,
            todo_completed:todo_completed
        }

        axios.post('http://localhost:3000/todos/add', newTodo)
            .then(res => console.log(res.data));

           setTodo_description('') ;
           setTodo_responsible('');
           setTodo_priority('');
           setTodo_completed(false);
           
        }

        return ( 
            <>
                <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={onsubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={todo_description}
                                onChange={onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text"
                                className="form-control"
                                value={todo_responsible}
                                onChange={onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                    <label>Choose Priority: </label>
                        <div className="form-check form-check">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={todo_priority==='Low'}
                                    onChange={onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={todo_priority==='Medium'}
                                    onChange={onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={todo_priority==='High'}
                                    onChange={onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary my-3" />
                    </div>
                </form>
            </div>
            </>
        )

    }

export default CreateTodo