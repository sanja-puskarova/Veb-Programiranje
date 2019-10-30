import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import './ButtonSection.css'

export default function ButtonSection() {
    function Adopt() {
        window.location.href="/adopt"
    }

    return (
        <button className="btn-section" onClick={Adopt}>
            <span>Adopt! </span>
        </button>
    );
}