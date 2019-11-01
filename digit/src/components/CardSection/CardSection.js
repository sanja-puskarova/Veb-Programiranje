import React from 'react';
import './CardSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw} from "@fortawesome/free-solid-svg-icons";

import Card from "react-bootstrap/Card";
export default function CardSection(props) {

    function AdoptMe() {
        window.location.href="/adopt"
    }
    return (
        <div className="card-deck">
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
                    <span>Објавено пред 5 минути</span>
                </Card.Footer>
            </Card>

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
                    <span>Објавено пред 30 минути</span>
                </Card.Footer>
            </Card>

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
                   <span>Објавено пред 50 минути</span>
                </Card.Footer>
            </Card>




        <br/>

        </div>
    )
}