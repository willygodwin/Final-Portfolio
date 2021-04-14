import React, { useState } from "react";
// import{ Navbar, Nav, Button, NavDropdown}  from "react-bootstrap";
import "./style.css";


function Header() {

    const toggleMenu = () => {
        return 
    }

    return (

    <nav className="navbar navbar-expand-lg" >
      {/* <div style={{display: 'flex', flexDirection :'row' } > */}
        <div style={{display: 'flex', flexDirection :'row', justifyContent: "space-between" , alignItems: "center"}} >
            <div className="d-flex" style={{display: 'flex', flexDirection :'column'}}>
                    <a className="navbar-brand" href="index.html">Will Godwin</a>
                <span>Web Developer</span>
            </div>
            <div>
                <ul className="navbar-nav" style={{display: 'flex', flexDirection :'row', justifyContent: "space-evenly"}}>
                    <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/will-godwin-341a9aa6/" target="_blank"><img className="linkedin" src="assets/images/linkedin.png" alt="Linkedin"/><span className="sr-only"></span></a>
                            <div className="tooltipnavtext">Linkedin</div>
                    </li>
                    <li className="nav-item">
                            <a className="nav-link" href="https://github.com/willygodwin" target="_blank"><img className="github" src="assets/images/github.png" alt="Github"/><span className="sr-only"></span></a>
                            <div className="tooltipnavtext">Github</div>
                        </li>
                    <li className="nav-item">
                        <a className="nav-link" href="assets/images/WillGodwinResume1.pdf" download><img className="resume" src="assets/images/resume.png" alt="Resume"/><span className="sr-only"></span></a>
                        <div className="tooltipnavtext">Resume</div>
                    </li>
                </ul>
            </div>
        </div>

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                    <a className="nav-link" href="index.html">About<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="portfoliopage.html">Portfolio</a>
                    </li>

                </ul>
        </div>
        </div> */}
    </nav> 
    );
}


export default Header;