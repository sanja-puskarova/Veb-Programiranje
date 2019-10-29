import React, { Component } from 'react';
import "./MenuSection.css"
import {Animated} from "react-animated-css";

import { BrowserRouter as Router,Link} from "react-router-dom";
export default function MenuSection() {
    return (
        <div>

        <ul className="ul-menu">
            <Animated animationIn="bounceInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>

                <Link to={"/adopt"} className="li-name">Name</Link>
                <Link to={"/adopt"} className="li-menu">About</Link>
            <Link to={"/adopt"} className="li-menu">Adopt</Link>
                <Link to={"/adopt"} className="li-menu">Statistic</Link>

            </Animated>
        </ul>
        </div>
    );
}