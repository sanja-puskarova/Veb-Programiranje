import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { faPaw} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import $ from 'jquery';


import MenuSection from '../MenuSection/MenuSection'
import './FormSection.css';

export default function FormPerson() {
    function Zavrshi(){
        $(document).ready(function () {

            $("#hidden-section").show()
            $(".form").hide();
            $("#hide-section").hide();

        });
    }
    function Back() {
        window.location.href='/'
    }


    return(
        <div className="div-form">
            <MenuSection/>
            <br/>
            <h1 className="tellusmore"><Animated  animationIn="bounce" repeat="infinity" isVisible={true}><FontAwesomeIcon icon={faPaw}/> </Animated><h1 id="hide-section">Запознај нé со вашите лични податици!</h1></h1>
            <br/>

            <Row>
                <Col md={4}>
                </Col>
                <Col md={4} >
                    <Form className="form tellusmore">
                        <Form.Group>
                            <Form.Label>Име:</Form.Label>
                            <Form.Control type="text" placeholder="Внесете име" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Презиме:</Form.Label>
                            <Form.Control type="text" placeholder="Внесете презиме" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Емаил Адреса:</Form.Label>
                            <Form.Control type="email" placeholder="Внесете емаил адреса" />
                            <Form.Text className="text-muted" id="text-under">
                                Вашата емаил адреса е безбедна со нас!
                            </Form.Text>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Години:</Form.Label>
                            <Form.Control type="number" placeholder="Внесете години" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Телефонски Број:</Form.Label>
                            <Form.Control type="text" placeholder="Внесете телефонски број" />
                        </Form.Group>

                        <Button className="btn-submit" variant="info" onClick={Zavrshi}>
                            Заврши
                        </Button>
                    </Form>
                </Col>
                <Col md={4}>

                </Col>
            </Row>
            <Row id="hidden-section"><div id="div-info">Почитувани, Вашите податоци се испратени до агенцијата каде се чува кучето. Во најкраток рок ќе бидете контактирани
                од нивен претставник. <br/>Ви благодариме!</div>

                <Row><button onClick={Back} className="btn-back">Почетна</button></Row>

            <br/><br/><br/><br/>
                <br/>
                <br/>
                <br/>
                <br/></Row>
            <br/>
            <br/>
            <br/>

        </div>
    );
}