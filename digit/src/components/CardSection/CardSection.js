import React from 'react';
import './CardSection.css';
import Card from "react-bootstrap/Card";
export default function CardSection(props) {
    let localListUrl = props.list.split(',');
    function Adopt() {
        window.location.href="/adopt"
    }
    return (
        <div className="card-deck">{
              localListUrl.map(el => {
                  return (
                      <Card className="cardSection zoom">
                          <Card.Img variant="top" src={el}/>
                          <Card.Body>
                              <Card.Title ClassName='tittle'>Max</Card.Title>
                              <Card.Text ClassName='cart-text'>
                                  This is a wider card with supporting text below as a natural lead-in to
                                  additional content. This content is a little bit longer.
                              </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                              <small className="text-muted">Last updated 3 min ago</small>
                          </Card.Footer>
                      </Card>
                  )
              })


          }

        <br/>

        </div>
    )
}