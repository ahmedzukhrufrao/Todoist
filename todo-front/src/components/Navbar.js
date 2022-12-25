import React from "react";
import { BrowserRouter as Router , Route, Link, Routes } from "react-router-dom"; //import these from react-router-dom package
import "bootstrap/dist/css/bootstrap.min.css"; //Importing Bootstrap CSS Library
import logo from "../logo.png"


const Navbar = () => {
/* /* 
    return (
     
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <img src={logo} width="30" height="30"/>
    </a>
    <Link to="/" className="navbar-brand">Todoist</Link>
    <div className="collpase nav-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="/">ToDos</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="/create">Create Todo</a>
        </li>
      </ul>
    </div>
  </nav>
  */
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Todoist</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                        <a className="nav-link " aria-current="page" href="/about">About</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link " aria-current="page" href="/">ToDos</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link " href="/create">Create ToDos</a>
                    </li>
                </ul>
                {<form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form> }
            </div>
        </div>
    </nav>
)
}
export default Navbar;