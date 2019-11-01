import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import MenuSection from '../MenuSection/MenuSection'
import './DonateSection.css';

export default function DonateSection() {
    return(
        <div className="div-form">
            <MenuSection/>

            <Row>
                <Col md={4} className='col-forma'>
                    <div className="tellusmore">
                        Со потполнување на формата донирате на заедничката сметка
                        на здруженија за заштита на животни. Парите потоа подеднакво
                        ќе им бидат разделени и искористени за купување на храна и лекови
                        за кучињата.
                    </div>
                </Col>
                <Col md={4} className='col-forma '>
                    <Form className="form">
                        <Form.Group>
                            <Form.Label className="tellusmore">Име и Презиме</Form.Label>
                            <Form.Control type="text" placeholder="Име Презиме" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="tellusmore">Број на картичка</Form.Label>
                            <Form.Control type="email" placeholder="Број на картичка"/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label className="tellusmore"> CVV код</Form.Label>
                            <Form.Control type="text" placeholder=" CVV код" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label className="tellusmore">Сума вo денари</Form.Label>
                            <Form.Control type="text" placeholder="Сума" />
                        </Form.Group>


                        <Button className='btn-submit tellusmore' id="btn-s" variant="info" type="submit" >
                            Донирај
                        </Button>
                    </Form>
                </Col>
                <Col md={4}>

                </Col>
                <br/>
            </Row>
            <br/>
        </div>
    );
}