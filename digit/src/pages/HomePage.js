import React, { Component } from 'react';
import CarouselSection from '../components/CarouselSection/CarouselSection'
import MenuSection from '../components/MenuSection/MenuSection'
import CardSection from '../components/CardSection/CardSection'
import FooterSection from '../components/FooterSection/FooterSection'
import ButtonSection from '../components/ButtonSection/ButtonSection'
import MapSection from '../components/MapSection/MapSection'
import './HomePage.css'
export default function HomePage() {
return(
    <div className="background-home">
        <MenuSection/>
        <CarouselSection/>
        <CardSection list={'https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg,' +
        'https://images.pexels.com/photos/128817/pexels-photo-128817.jpeg,https://images.pexels.com/photos/57708/dog-bernese-mountain-dog-berner-senner-dog-57708.jpeg'}/>
        <ButtonSection/>
        <MapSection/>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <FooterSection/>
    </div>
);
}