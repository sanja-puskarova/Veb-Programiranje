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
import Pagination from "react-bootstrap/Pagination";
export default function AdoptSection() {
    function AdoptMe() {
        window.location.href="/form"
    }

    return (
        <div className="card-deck1">
            <h1 className='header-text'> Кучиња кои чекаат вдомување</h1>
            <Row class="rowAdopt">
                <Col class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/68940891_3164130133629677_1531720508964339712_n.jpg?_nc_cat=103&_nc_oc=AQmlAs5B8y1fnPX2qAbkjZ-RmytvHrxLhAimTL-4grZprnPSXbtavGnIFGpN0tIhMXI&_nc_ht=scontent-sof1-1.xx&oh=d2351ad51d6653b0722cfe05b480eae6&oe=5E65776E"/>
                        <Card.Body>
                            <Card.Title><div className='dogName'>Leo</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span>  2</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> кафеава</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={AdoptMe} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/71375968_1764009187076425_6185675851762237440_n.jpg?_nc_cat=109&_nc_oc=AQnb9UCwEwuadecESTm7mplmdn-2uVGMTTUEZ-h7YPagaUW1_emtndGTd0umR9W1ugo&_nc_ht=scontent-sof1-1.xx&oh=4eb8ad72028555a4c56b72319c0e704d&oe=5E5EFFAA"/>
                        <Card.Body className='card-body'>
                            <Card.Title><div className='dogName'>Luna</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Женско </li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span>  3</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> светло кафеава </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={AdoptMe} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/70970730_1764008367076507_7578000955161968640_n.jpg?_nc_cat=108&_nc_oc=AQmducDHHQoCNLmsM9j57hfoS28lww7_Ylo2GpVISe9BlPdj4UqDS1ZvkbrSnMzu9Yo&_nc_ht=scontent-sof1-1.xx&oh=fa65e68f9dd15e7f127fc6d06b74a6c6&oe=5E60AD3B"/>
                        <Card.Body>
                            <Card.Title><div className='dogName'>Арчи</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span>  4</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> црно</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={AdoptMe} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row class="rowAdopt">
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/70832819_1764008527076491_7692550576214638592_n.jpg?_nc_cat=109&_nc_oc=AQkUfgjJ8f9szJywy26BB998yNOk9ethlDXUvvEhHou7M3dUtZ7x4haIBHN6jd0HM7g&_nc_ht=scontent-sof1-1.xx&oh=8dd69fe11b597722fe6334aa8155f6d1&oe=5E504E32"/>
                        <Card.Body>
                            <Card.Title><div className='dogName'>Lesi</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span>  4</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> кафеаво со црно</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={AdoptMe} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/71270817_1764008050409872_1184602514822004736_n.jpg?_nc_cat=102&_nc_oc=AQmge6XutnM_BkpkIeiUydWySTv_uRA3BKGL1GbOWRGN8gkDAeLPKevxMNNKl1RMIOo&_nc_ht=scontent-sof1-1.xx&oh=a4a9bab8c4828bd3d4a32a0e39061939&oe=5E4EFDDF"/>
                        <Card.Body>
                            <Card.Title><div className='dogName'>Леа</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Женско</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span>  2</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> бело</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={AdoptMe} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/70749300_1762554253888585_3574581562542391296_n.jpg?_nc_cat=110&_nc_oc=AQlL9Jfrdb5RQnbGki4aY5o2cNJOE53i5H1eJqkHJyPNo2WzB72pgxrtviAhbpgQP3k&_nc_ht=scontent-sof1-1.xx&oh=8d83977db9179c6e630e20d8b42a2446&oe=5E625952"/>
                        <Card.Body>
                            <Card.Title><div className='dogName'> Рекс</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span> 4</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> црно</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={AdoptMe} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row class="rowAdopt">
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/72951130_2695937217129166_6662795956129366016_n.jpg?_nc_cat=106&_nc_oc=AQlbMUN_A4mtQOQUFxD1JiBay-MWykqMrVBmBuD3pn2bt6L3azOUx3qUgkNSaZUtzao&_nc_ht=scontent-sof1-1.xx&oh=c6ca09ac8c1d2b20a917f837640b449d&oe=5E65609A"/>
                        <Card.Body>
                            <Card.Title><div className='dogName'>Кремчо</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span> 3</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> кафеаво со црно</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={AdoptMe} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/46401711_1970967962992311_6505180478956371968_n.jpg?_nc_cat=106&_nc_oc=AQlnROYpNUThf27QSl0PZ_nlh_c-_rhCvY0_pfa9qrKwX8iZwr4phpatJyTEUvFaFFY&_nc_ht=scontent-sof1-1.xx&oh=b8f593bb350f0179f3fcba1c4b49a3dd&oe=5E1C21FE"/>
                        <Card.Body>
                            <Card.Title><div className='dogName'>Дино </div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span> 5</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> црно</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={AdoptMe} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/71960940_1520733651399334_7418834427859435520_n.jpg?_nc_cat=101&_nc_oc=AQmeiEyMI10VbJQEe9uHFCL-YwO7xS9UTgI-rh8ccfPkbFXDIk1R6cQ1qp0x3q9kX8I&_nc_ht=scontent-sof1-1.xx&oh=9631366e9d6a87269ef67ac89c623a8e&oe=5E62442C"/>
                        <Card.Body>
                            <Card.Title><div className="dogName">Лаки</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span> 3</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> бело со црно</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={AdoptMe} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Col md={4}> </Col>
            <Row className='paginationA'>
                <Col md={4}>
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Item>{5}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </Col>
            </Row>
        </div>
    );
}
/*export default function AdoptCards() {

 return (
 <button onClick={AdoptMe}>
 Save me!
 </button>
 );
 }*/