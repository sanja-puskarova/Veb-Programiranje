import React from 'react'
import Row from "react-bootstrap/Row";
import  faPaw from '@fortawesome/react-fontawesome'

import {Col} from "react-bootstrap";

export default function About() {
    return(
        <div>
            <Row>
                <Col className={Col}>
                    <h2>Who are we?</h2>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Col>
                <Col>
                    <img src='https://www.tinytailsk-9rescue.com/uploads/8/6/0/5/8605722/5333509.jpg'/>
                </Col>
                <Col>
                    <ul>
                        <li>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                            by injected humour, or randomised words which don't look even slightly believable
                        </li>
                        <li>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                            by injected humour, or randomised words which don't look even slightly believable
                        </li>
                        <li>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                            by injected humour, or randomised words which don't look even slightly believable
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
}
