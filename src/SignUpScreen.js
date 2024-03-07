import React from "react";
import "./SignUpScreen.css";

function SignUpScreen(){
    return (
    <div className="SignUpScreen">
     <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign in</button>
     </form>
     </div>
    );
}

export default SignUpScreen;