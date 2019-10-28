import React, { Component } from 'react';
import "./MenuSection.css"

export default function MenuSection() {
    return (
        <div>
        <ul className="ul-menu">
            <li className='floatLeft li-menu'><a href="#">Name</a></li>
            <li className="li-menu"><a  href="#">About</a></li>
            <li className="li-menu"><a href="#">Statistics</a></li>
            <li className="li-menu"><a href="#">Adopt</a></li>
        </ul>
        </div>
    );
}