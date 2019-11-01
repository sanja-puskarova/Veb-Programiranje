import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import './ButtonSection.css'

export default function ButtonSection() {
    function Adopt() {
        window.location.href="/adopt"
    }

    return (
        <div>
        <button className="btn-section" onClick={Adopt}>
            <span>Вдоми! </span>
        </button>
            <br/>
            <br/>
            <br/>
        </div>
    );
}