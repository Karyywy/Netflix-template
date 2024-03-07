import React, { useState } from "react";
import './LoginScreen.css';
import SignUpScreen from "../SignUpScreen";


export default function LoginScreen(){
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img 
                className="logoScreen_logo"
                src="./images/netflix_logo_transparent.png"
                alt=""
                />
                <button 
                 onClick={() => setSignIn(true)}
                 className="loginScreen_button"
                >
                    Sign In
                </button>
                <div className="loginScreen_gradient" />
            </div>

            <div className="loginScreen_body">
                {signIn ? (
                  <SignUpScreen />
                ) : (
                <>
                <h1>Unlimited movies, TV shows, and more</h1>
                <h2>Starts at HK$63. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="loginScreen_input">
                    <form>
                        <input type="email" placeholder="Email Address" />
                        <button 
                        onClick={() => setSignIn(true)}
                        className="loginScreen_getStarted">Get Started </button>
                    </form>
                </div>
                </>
                )}
            </div>
        </div>
    );
}