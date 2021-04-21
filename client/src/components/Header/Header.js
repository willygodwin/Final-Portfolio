import React, { useState, useEffect } from "react";
import "./style.css";
import ksgNav from "../../ksgNav.jpg"
import Grid from '@material-ui/core/Grid';
// import linkedin from "../../assets/images/linkedin.png"


function Header() {

    const [scrollPosition, setScrollPosition] = useState(0)
    const [navColour, setNavColour] = useState("")
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
  };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      console.log(scrollPosition)
  
      if(scrollPosition > 2){
        setNavColour(ksgNav) 
      } else {
        setNavColour("") 
      }
      console.log(navColour)
    }, [scrollPosition, navColour]);

    return (
      <nav className="navbar" style={{backgroundImage: "url(" + "ksgNav" + ")"}} >
      <Grid container spacing={3}>
        <Grid item xs={2}>
          
        </Grid>
        <Grid item xs={2}>
          <div className="d-flex" style={{display: 'flex', flexDirection :'column'}}>
              <a className="navbar-brand" href="/"><h1>Will Godwin</h1></a>
              <span>Web Developer</span>
          </div>
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={2}>
          <ul className="navbar-nav" style={{display: 'flex', flexDirection :'row', justifyContent: "space-evenly"}}>
              <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/will-godwin-341a9aa6/" target="_blank"><img className="linkedin" src="/assets/images/linkedin.png" alt="Linkedin"/><span className="sr-only"></span></a>
                      <div className="tooltipnavtext">Linkedin</div>
              </li>
              <li className="nav-item">
                    <a className="nav-link" href="https://github.com/willygodwin" target="_blank"><img className="github" src="/assets/images/github.png" alt="Github"/><span className="sr-only"></span></a>
                      <div className="tooltipnavtext">Github</div>
                  </li>
              <li className="nav-item">
                  <a className="nav-link" href="assets/images/WillGodwinResume1.pdf" download><img className="resume" src="/assets/images/resume.png" alt="Resume"/><span className="sr-only"></span></a>
                  <div className="tooltipnavtext">Resume</div>
              </li>
          </ul>
        </Grid>
        <Grid item xs={2}>
          
        </Grid>

      </Grid>
      </nav>

    // <nav className="navbar" style={{backgroundImage: "url(" + "ksgNav" + ")"}} >
    //   {/* <div style={{display: 'flex', flexDirection :'row' } > */}
    //     <div className="navbar-container" style={{display: 'flex', flexDirection :'row', justifyContent: "space-between" , alignItems: "center"}} >
    //         <div className="d-flex" style={{display: 'flex', flexDirection :'column'}}>
    //                 <a className="navbar-brand" href="index.html"><h1>Will Godwin</h1></a>
    //             <span>Web Developer</span>
    //         </div>
    //         <div>
    //             <ul className="navbar-nav" style={{display: 'flex', flexDirection :'row', justifyContent: "space-evenly"}}>
    //                 <li className="nav-item">
    //                 <a className="nav-link" href="https://www.linkedin.com/in/will-godwin-341a9aa6/" target="_blank"><img className="linkedin" src="/assets/images/linkedin.png" alt="Linkedin"/><span className="sr-only"></span></a>
    //                         <div className="tooltipnavtext">Linkedin</div>
    //                 </li>
    //                 <li className="nav-item">
    //                         <a className="nav-link" href="https://github.com/willygodwin" target="_blank"><img className="github" src="/assets/images/github.png" alt="Github"/><span className="sr-only"></span></a>
    //                         <div className="tooltipnavtext">Github</div>
    //                     </li>
    //                 <li className="nav-item">
    //                     <a className="nav-link" href="assets/images/WillGodwinResume1.pdf" download><img className="resume" src="/assets/images/resume.png" alt="Resume"/><span className="sr-only"></span></a>
    //                     <div className="tooltipnavtext">Resume</div>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>

    //     <div class= "back-ground-image-container">
    //     <div class="back-ground-image">
    //         <div class="back-ground-image-cover"></div>
    //     </div>
    //     </div>

        /* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                    <a className="nav-link" href="index.html">About<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="portfoliopage.html">Portfolio</a>
                    </li>

                </ul>
        </div>
        </div> */
    // </nav> 
    );
}


export default Header;