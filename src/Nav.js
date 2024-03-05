import React, { useEffect, useState } from "react";
import "./Nav.css";

export default function Nav(){
    const [show, handleShow] = useState(false);
    
    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, []);

    return(
     <div className={`nav ${show && "nav_black_header"}`}>
        <div className="nav_contents">
        <img
          className="nav_logo"
          src="/images/netflix_logo_transparent.png"
          alt=""
        />
        <img
          className="nav_avatar"
          src="/images/profile_logo3.jpg"
          alt=""
        />
        </div>
     </div>
    )
}