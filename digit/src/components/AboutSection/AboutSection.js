import React from 'react'
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaw} from "@fortawesome/free-solid-svg-icons";
import {Col} from "react-bootstrap";
import './AboutSection.css'

export default function AboutSection() {
    return(
        <div className="back-color">
            <Row className="row-about">
                <Col className='col-about'>
                    <h2>Како може Вие да помогнете?</h2>
                    <br/>
                    <br/>
                    <div className='aboutText'>
                        Нашата цел е да ја подигниме свеста за куќињата скитници. Свесни сме дека во нашата Република популацијата на скитници е аларманта и
                        тоа бара од нас да организираме и заедно да работиме на решение на проблемот.
                        <br/>
                        <ul className='ul-bla'>
                            <div><FontAwesomeIcon icon={faPaw}/></div>  <li className='li-about1'> Наместо да купите куче, посвојте го од некое од засолништата.</li>
                            <div><FontAwesomeIcon icon={faPaw}/></div>  <li  className='li-about1'> Не се однесувајте насилно кон кучињата скитнии. Нахранете ги и погалети ги - ќе им го разубавите денот!</li>
                            <div><FontAwesomeIcon icon={faPaw}/></div>  <li  className='li-about1'> Направете засолниште околу зграда или куќа - доволно е една кутија со кебе и сад со вода.</li>
                            <div><FontAwesomeIcon icon={faPaw}/></div>  <li  className='li-about1'> Научете ги вашите деца дека кучето е најдобриот пријател на човекот!</li>
                        </ul>
                    </div>
                </Col>
                <Col className='col-about3'>
                    <h3 className='aboutText'>Здруженија за заштита на животни во Р.Северна Македонија</h3>
                    <br/>
                    <ul className='ul-bla'>
                        <li className='li-about1'>
                            Здружението за заштита на животните „АНИМА МУНДИ“ е здружение на граѓани создадено за да иницира заложба и јавна борба
                            против секаков вид злоупотреба и искористување на животните од страна на човекот. Основано е во 2006 и има 20 активни волунтери.
                        </li>
                        <span className='span-about'><FontAwesomeIcon icon={faPaw}/></span>  <li className='li-about1'>
                        Здружението на граѓани - Друштво на заштита на животните "ФАУНА" од Струмица е доброволна и непрофитна организација на сите оние кои ги
                        сакаат животните и се залагаат за целосна хуманизација на односите кон нив.
                    </li>
                        <span  className='span-about'><FontAwesomeIcon icon={faPaw}/></span>  <li className='li-about1'>
                        Здружението за заштита на животните „СРНА“ е основано во Скопје. Активно бара волунтери да помагаат за грижа на болните животни кие ги чуваат
                    </li>
                    </ul>
                </Col>
            </Row>
            <br/><br/>
        </div>
    );
}