import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import MenuSection from '../components/MenuSection/MenuSection'
import '../components/FormSection/FormSection.css';

export default function FormPerson() {
    return(
        <div className="div-form">
            <MenuSection/>
            <br/>
            <h1 className="tellusmore">Tell us more about yourself!</h1>
            <br/>

            <Row>
                <Col md={4}>
                </Col>
                <Col md={4}>
                    <Form className="form">
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Years" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Phone" />
                        </Form.Group>

                        <Button variant="info" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={4}>

                </Col>
            </Row>
            <br/>
        </div>
    );
}