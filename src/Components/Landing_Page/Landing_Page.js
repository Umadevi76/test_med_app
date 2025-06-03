import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function Landing_Page(){
    return(
      <section className="hero-section">
         <div>
          <div data-aos="fade-up" className="flex-hero">
              
              <h1>
                Your Health<br/>
                <span className="text-gradient">
                  
                  Our Responsibility
                </span>
              </h1>
                <div className="blob-cont">
                    <div className="blue blob"></div>
                </div>
                <div className="blob-cont">
                    <div className="blue1 blob"></div>
                </div>
              <h4>
              Being healthy should be a part of our lifestyle as a whole. Good health and a happy mind are priceless possessions that one can have. 
              </h4>
              <Link href="#services">
                <button className="button">Get Started</button>
              </Link>
                
          </div>
   
        </div>
         </section>

)

}