import { useParams} from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";



const EditTodo = () => {

   

    const [todo_description,setTodo_description] = useState('');
    const [todo_responsible,setTodo_responsible] = useState('');   
    const [todo_priority,setTodo_priority] = useState(''); 
    const [todo_completed,setTodo_completed] = useState(false); 
    let {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:3000/{id}') //Erro
        .then(response => {
                setTodo_description(response.data.todo_description);
                setTodo_responsible(response.data.todo_responsible);
                setTodo_priority(response.data.todo_priority);
                setTodo_completed(response.data.todo_completed);
            })
        
        .catch(function(error) {
            console.log(error)
        })

    })

    const onChangeTodoDescription = (event) => {
        setTodo_description(event.target.value) ;
   }

   const onChangeTodoResponsible = (event) => {
       setTodo_responsible(event.target.value) ;
   }

  const onChangeTodoPriority= (event) => {
   setTodo_priority(event.target.value) ;
   }

   const onChangeTodoCompleted=(event) => {
    
        setTodo_completed(!todo_completed);
}

    const onSubmit = (event) => {
        event.preventDefault();
        const obj = {
            todo_description: todo_description,
            todo_responsible: todo_responsible,
            todo_priority: todo_priority,
            todo_completed:todo_completed
        };
        axios.post(`http://localhost:3000/todos/update/${id}`, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    return ( 
            
                <div>
                <h3>Update </h3>
                <form onSubmit={onSubmit}>
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
                        <div className="form-check form-check-inline">
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
                        <div className="form-check form-check-inline">
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
                        <div className="form-check">
                            <input  type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    name="completedCheckbox"
                                    onChange={onChangeTodoCompleted}
                                    checked={todo_completed}
                                    value={todo_completed}
                                    />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Todo" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
    
        )

    }

export default EditTodo