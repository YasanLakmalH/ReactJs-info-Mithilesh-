import React from "react";
import About from './About';
import Intersts from "./Intersts";
import Footer from "./Footer";

const Info = ()=> {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 my-5">
          <div className="card bg-dark text-light text-center" style={{border:"2px solid black",borderRadius:"15px"}}>
            <img className="card-img-top" src="imgs/profile.png" alt="profileImg"/>
            <div className="card-body">
              <h1 className="card-title">Laura Smith</h1>
              <h4 style={{color:"#F3BF99"}}>Frontend developer</h4>
              <p>laurasmith.website</p>
              <div>
                <span className="" >
                  <button className="btn btn-lg btn-light mx-1"><img src="imgs/mail.svg" alt="linkedinIcon" />Email</button>
                  <button className="btn btn-lg btn-primary mx-1"><img src="imgs/linkedin.svg" alt="emailIcon" />Linkedin</button>
                </span>
              </div>
              <About/>
              <Intersts/>
            </div>
            <Footer/>
          </div>
        </div>  
      </div>
    )
  }
  export default Info;