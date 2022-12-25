import React from 'react'
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {

     const [myStyle, setMyStyle] = useState({
         color: 'black',
         backgroundColor: 'white'
     }) 
    
    
    return (
        <div className="container">
            <h1 className="my-3" style={{color:'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Organize your life </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Todoist is a free task management tool that provides free task management.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
