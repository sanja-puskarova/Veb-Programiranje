import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./AdoptSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChartBar, faPaw} from "@fortawesome/free-solid-svg-icons";
import {faHandHoldingHeart} from "@fortawesome/free-solid-svg-icons";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
export default function AdoptSection() {
    return (
        <div className="card-deck">
            <Row class="rowAdopt">
                <Col >
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/68940891_3164130133629677_1531720508964339712_n.jpg?_nc_cat=103&_nc_oc=AQmlAs5B8y1fnPX2qAbkjZ-RmytvHrxLhAimTL-4grZprnPSXbtavGnIFGpN0tIhMXI&_nc_ht=scontent-sof1-1.xx&oh=d2351ad51d6653b0722cfe05b480eae6&oe=5E65776E"/>
                        <Card.Body>
                            <Card.Title>Max</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small >Last updated 3 min ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/71375968_1764009187076425_6185675851762237440_n.jpg?_nc_cat=109&_nc_oc=AQnb9UCwEwuadecESTm7mplmdn-2uVGMTTUEZ-h7YPagaUW1_emtndGTd0umR9W1ugo&_nc_ht=scontent-sof1-1.xx&oh=4eb8ad72028555a4c56b72319c0e704d&oe=5E5EFFAA"/>
                        <Card.Body className="card-body">
                            <Card.Title>Max</Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>

                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span>  4</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> кафеава</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small >Last updated 3 min ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/68940891_3164130133629677_1531720508964339712_n.jpg?_nc_cat=103&_nc_oc=AQmlAs5B8y1fnPX2qAbkjZ-RmytvHrxLhAimTL-4grZprnPSXbtavGnIFGpN0tIhMXI&_nc_ht=scontent-sof1-1.xx&oh=d2351ad51d6653b0722cfe05b480eae6&oe=5E65776E"/>
                        <Card.Body>
                            <Card.Title>Max</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small >Last updated 3 min ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row class="rowAdopt">
                <Col md={4}>
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/68940891_3164130133629677_1531720508964339712_n.jpg?_nc_cat=103&_nc_oc=AQmlAs5B8y1fnPX2qAbkjZ-RmytvHrxLhAimTL-4grZprnPSXbtavGnIFGpN0tIhMXI&_nc_ht=scontent-sof1-1.xx&oh=d2351ad51d6653b0722cfe05b480eae6&oe=5E65776E"/>
                        <Card.Body>
                            <Card.Title>Max</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small >Last updated 3 min ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/68940891_3164130133629677_1531720508964339712_n.jpg?_nc_cat=103&_nc_oc=AQmlAs5B8y1fnPX2qAbkjZ-RmytvHrxLhAimTL-4grZprnPSXbtavGnIFGpN0tIhMXI&_nc_ht=scontent-sof1-1.xx&oh=d2351ad51d6653b0722cfe05b480eae6&oe=5E65776E"/>
                        <Card.Body>
                            <Card.Title>Max</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small >Last updated 3 min ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/68940891_3164130133629677_1531720508964339712_n.jpg?_nc_cat=103&_nc_oc=AQmlAs5B8y1fnPX2qAbkjZ-RmytvHrxLhAimTL-4grZprnPSXbtavGnIFGpN0tIhMXI&_nc_ht=scontent-sof1-1.xx&oh=d2351ad51d6653b0722cfe05b480eae6&oe=5E65776E"/>
                        <Card.Body>
                            <Card.Title>Max</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small >Last updated 3 min ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row class="rowAdopt">
                <Col md={4}>
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/68940891_3164130133629677_1531720508964339712_n.jpg?_nc_cat=103&_nc_oc=AQmlAs5B8y1fnPX2qAbkjZ-RmytvHrxLhAimTL-4grZprnPSXbtavGnIFGpN0tIhMXI&_nc_ht=scontent-sof1-1.xx&oh=d2351ad51d6653b0722cfe05b480eae6&oe=5E65776E"/>
                        <Card.Body>
                            <Card.Title>Max</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small >Last updated 3 min ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/68940891_3164130133629677_1531720508964339712_n.jpg?_nc_cat=103&_nc_oc=AQmlAs5B8y1fnPX2qAbkjZ-RmytvHrxLhAimTL-4grZprnPSXbtavGnIFGpN0tIhMXI&_nc_ht=scontent-sof1-1.xx&oh=d2351ad51d6653b0722cfe05b480eae6&oe=5E65776E"/>
                        <Card.Body>
                            <Card.Title>Max</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small >Last updated 3 min ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/68940891_3164130133629677_1531720508964339712_n.jpg?_nc_cat=103&_nc_oc=AQmlAs5B8y1fnPX2qAbkjZ-RmytvHrxLhAimTL-4grZprnPSXbtavGnIFGpN0tIhMXI&_nc_ht=scontent-sof1-1.xx&oh=d2351ad51d6653b0722cfe05b480eae6&oe=5E65776E"/>
                        <Card.Body>
                            <Card.Title>Max</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small >Last updated 3 min ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
/*export default function AdoptCards() {
    function AdoptMe() {
        window.location.href="/form"
    }

    return (
        <button onClick={AdoptMe}>
            Save me!
        </button>
    );
}*/