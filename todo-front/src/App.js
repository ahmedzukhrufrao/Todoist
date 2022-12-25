import React from "react";
import { BrowserRouter as Router , Route, Link, Routes } from "react-router-dom"; //import these from react-router-dom package
import "bootstrap/dist/css/bootstrap.min.css"; //Importing Bootstrap CSS Library
import { useState } from "react";
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/EditTodo';
import TodosList from './components/TodosList';
import Navbar from "./components/Navbar";
import About from "./components/About";
import logo from "./logo.png"

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>

    <Navbar title="Todoist" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <div className="container">
    

        <Router>
          <Routes>
            
            <Route exact path="/" element={<TodosList />} /> 
            <Route exact path="/edit/:id" element={<EditTodo />}/>
            <Route exact path="/create" element={<CreateTodo />} />
            <Route exact path="/about" element={<About />} />
            
          </Routes>
        </Router>
      </div> 
    </> 
  );
}


export default App;
