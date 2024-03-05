import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";

export default function HomeScreen(){
    return <div className="homeScreen">
        < Nav/>

        <Banner/>

        < Row />
    </div>
}