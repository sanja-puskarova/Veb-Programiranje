import React from "react";
import './CarouselSection.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function CarouselSection() {
    return(
        <div>
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
            <div>
                
            </div>
        </div>
    )
}