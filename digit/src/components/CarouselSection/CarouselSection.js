import React from "react";
import './CarouselSection.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Animated} from "react-animated-css";

import { Card } from 'react-bootstrap';
export default function CarouselSection() {
    return(
        <div className="background">

            <Carousel >
                <div>
                    <img className="carousel-img" src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=940"/>
                    <p className="legend">Legend 1</p>
                </div>

                <div>
                    <img className="carousel-img" src="https://images.pexels.com/photos/672244/pexels-photo-672244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <p className="legend">Legend 1</p>
                </div>

                <div>
                    <img className="carousel-img" src="https://images.pexels.com/photos/1750378/pexels-photo-1750378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
            <Animated animationIn="wobble" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
            <h2 id="text">
                WHERE TO FIND HELP
            </h2>
            </Animated>
            <br/>
            <div>

             <iframe className="map-section" width={600} height={450} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d47436.84774319002!2d21.43497444444406!3d42.004503600184286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sanimal%20shelter!5e0!3m2!1sen!2smk!4v1572340540898!5m2!1sen!2smk"></iframe>
            </div>


        </div>

    )
}