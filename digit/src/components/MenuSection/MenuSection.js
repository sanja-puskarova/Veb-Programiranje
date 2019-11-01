import React, { Component } from 'react';
import "./MenuSection.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChartBar, faPaw} from "@fortawesome/free-solid-svg-icons";
import {faHandHoldingHeart} from "@fortawesome/free-solid-svg-icons";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {Animated} from "react-animated-css";

import { BrowserRouter as Router,Link} from "react-router-dom";
export default function MenuSection() {
    return (
        <div>

        <ul className="ul-menu">
            <Animated animationIn="fadeIn" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <Link to={"/"} className="li-name li-menu"><FontAwesomeIcon icon={faPaw}/> ShelterMe</Link>
                <Link to={"/about"} className="li-about"><FontAwesomeIcon icon={faInfoCircle}/> За Нас</Link>
                <Link to={"/statistic"} className="li-menu"><FontAwesomeIcon icon={faChartBar}/> Статистика</Link>
                <Link to={"/adopt"} className="li-menu"><FontAwesomeIcon icon={faHandHoldingHeart}/> Вдоми</Link>
            </Animated>
        </ul>
        </div>
    );
}