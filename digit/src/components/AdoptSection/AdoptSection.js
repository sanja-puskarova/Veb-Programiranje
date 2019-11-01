import React, { useState } from 'react';
import {Animated} from "react-animated-css";
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from 'react-bootstrap'
import "./AdoptSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaw} from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';
import Pagination from "react-bootstrap/Pagination";

export default function AdoptSection() {


    let index=null;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function AdoptMe() {
        window.location.href="/form"
    }

    return (
        <div className="card-deck1">

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-text">Сакате нов член на вашата фамилија?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-text">Ова куче ќе има потреба од многу топлина и љубов! Дали сте спремни за ова прекрасно искуство?</Modal.Body>
                <Modal.Footer>
                    <Button className='button-no' variant="secondary" onClick={handleClose}>
                        Се предомислив
                    </Button>
                    <Button className='button-ok' variant="primary" onClick={AdoptMe}>
                        Секако!
                    </Button>
                </Modal.Footer>
            </Modal>


            <h1 className='header-text'> Кучиња кои чекаат вдомување</h1>

            <Row class="rowAdopt">
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth" id="1">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/67100866_2493142134075343_8023633361496965120_n.jpg?_nc_cat=107&_nc_oc=AQlwyBRx2PrwjEJZeBfHVQ4laFhO4_cFLv7wX_VpJPH3gQEOc51tXycbJFrXEllr7II&_nc_ht=scontent-sof1-1.xx&oh=7d69be6b767425344a1526b82ff51019&oe=5E4E53D1"/>
                        <Card.Body>
                            <Card.Title><div className='dogName'>Леси</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span>  3</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> кафеаво со бело</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={handleShow} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
                <br/>
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth" id="2">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/48392996_2151912094865017_2497979749884755968_n.jpg?_nc_cat=106&_nc_oc=AQkZRZnTD8piYWOZ3JQC6GOoMkWPmfjaRwotcwWuzH9_AUaME3uMDS7sHvT0tGLOiRM&_nc_ht=scontent-sof1-1.xx&oh=07083a95ed50496740fcf42498279340&oe=5E1A387C"/>
                        <Card.Body>
                            <Card.Title><div className='dogName' id="ook">Леа</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Женско</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span>  2</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> црно</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={handleShow} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
                <br/>
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/65429494_3015691361806889_302109567263703040_n.jpg?_nc_cat=107&_nc_oc=AQnpfAjEoGKe0otk4-CluUwN4MEos_QPzGLHYaU1Gbi_CAotz36DXLtEmtTlZSJ_Cgk&_nc_ht=scontent-sof1-1.xx&oh=fa619b9dac9a0084676ef991efb5646b&oe=5E4B9E62"/>
                        <Card.Body>
                            <Card.Title><div className='dogName'> Рекс</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span> 1</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> кафеаво</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={handleShow} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <br/>
            <br/><br/>
            <Row class="rowAdopt">
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/41991039_2023848807671347_7587397811029671936_n.jpg?_nc_cat=111&_nc_oc=AQm5yM5wjyCQ4mFcjd6QMif0cx5LhqP-eb-mXCmGYh7CTj33MRmNBEFpelVMEkKvXAM&_nc_ht=scontent-sof1-1.xx&oh=0da9eabe1d9f4e21faf80660bfbc0744&oe=5E5B72EE"/>
                        <Card.Body>
                            <Card.Title><div className='dogName'>Арчи</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span>  4</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> кафеаво со црно</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={handleShow} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/37227481_1923872707668958_7991176194856845312_o.jpg?_nc_cat=101&_nc_oc=AQn6HVNwxnsIrSaBpEcDns-D8lWNKUhgdXrAaLgZf95s6FEGpGuFItUrdZCfJHPtVGs&_nc_ht=scontent-sof1-1.xx&oh=38cf6dabb7657ad3f06c02c580d7e0c5&oe=5E175E0D"/>
                        <Card.Body>
                            <Card.Title><div className='dogName'>Луна</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Женско</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span>  1</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> бело со кафеаво</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={handleShow} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/68940891_3164130133629677_1531720508964339712_n.jpg?_nc_cat=103&_nc_oc=AQmlAs5B8y1fnPX2qAbkjZ-RmytvHrxLhAimTL-4grZprnPSXbtavGnIFGpN0tIhMXI&_nc_ht=scontent-sof1-1.xx&oh=d2351ad51d6653b0722cfe05b480eae6&oe=5E65776E"/>
                        <Card.Body>
                            <Card.Title><div className='dogName'> Лео</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span> 1</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> кафеаво</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={handleShow} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <br/><br/>
            <Row class="rowAdopt">
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t31.0-8/18192372_1449007568488810_8228267928160200694_o.jpg?_nc_cat=107&_nc_oc=AQn6cSomDVoKdH3uxK9elfowF-y52DIKGBGZvXr5FM31yv_sCGHk1ctzobykMKWJRCY&_nc_ht=scontent-sof1-1.xx&oh=1e1094cf77244a6f8f60f6fb7c10c22d&oe=5E533D88"/>
                        <Card.Body>
                            <Card.Title><div className='dogName'>Црнчо</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span> 2.5</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> црно</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={handleShow} className='foo-button'>Вдоми</button></small>
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
                            <small><button onClick={handleShow} className='foo-button'>Вдоми</button></small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} class="colAdopt">
                    <Card className="cardWidth">
                        <Card.Img variant="top" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/65636522_3015691468473545_8243649606764724224_n.jpg?_nc_cat=101&_nc_oc=AQm8HkJhI7hdrcqrDa0gENy9LApe5piCy24HLa_O1lAinJ35qgDKEwuZvbzV2zBZQys&_nc_ht=scontent-sof1-1.xx&oh=e3292b004a4f340737c0926feb1cfe75&oe=5E1CE6CC"/>
                        <Card.Body>
                            <Card.Title><div className="dogName">Лаки</div></Card.Title>
                            <Card.Text>
                                <ul className='card-ul'>
                                    <li><FontAwesomeIcon icon={faPaw}/> <span>пол:</span> Машко</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>години: </span> 2</li>
                                    <li> <FontAwesomeIcon icon={faPaw}/> <span>боја:</span> бело со кафеаво</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small><button onClick={handleShow} className='foo-button'>Вдоми</button></small>
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
