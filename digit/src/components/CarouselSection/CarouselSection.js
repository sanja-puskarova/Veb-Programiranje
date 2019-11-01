import React from "react";
import './CarouselSection.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-bootstrap';
import { Animated } from "react-animated-css";

export default function CarouselSection() {
    return(
        <div className="background">
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src="https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

                            alt="First slide"
                        />
                        <Carousel.Caption className="text-carousel">
                            <Animated animationIn="lightSpeedIn" animationInDuration={1600} isVisible={true}>
                            <h5 className="text-car">“Вдомување на едно куче нема да го промени светот,но со сигурност светот на тоа едно куче ке биде променет засекогаш!”
                                ― Karen Davison</h5>
                            </Animated>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src="https://images.pexels.com/photos/1750378/pexels-photo-1750378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <Animated animationIn="lightSpeedIn" animationInDuration={1600} isVisible={true}>
                            <h5 className="text-car">"Кучињата, од причина што може да се опише само како божествена, имаат можност да простат,
                                да заборават на минатото и да го живеат секој ден радосно.
                                Тоа е нешто за кое што се стремиме сите ние.“ -Jennifer Skiff</h5>
                            </Animated>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src="https://iheartdogs.com/wp-content/uploads/2017/06/shutterstock_470866751-e1498863918253.jpg    "
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <Animated animationIn="lightSpeedIn" animationInDuration={1600} isVisible={true}>
                            <h5 className="text-car">
                                "Кучето не е предмет. Предметот може да се замени. Кучето не. Предметот е за еднократна употреба. Кучето не. Предметот нема срце.
                                Срцето на кучето е поголемо од кој било предмет што некогаш може да го поседувате" -Elizabeth Parker</h5>
                            </Animated>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br/><br/>
            <Animated animationIn="wobble" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
            <h2 id="text">
              На кого можете да помогнете?
            </h2>
            </Animated>




        </div>

    )
}