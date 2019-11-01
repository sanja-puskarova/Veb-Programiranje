import React, { Component } from 'react';
import AdoptSection from '../components/AdoptSection/AdoptSection'
import MenuSection from '../components/MenuSection/MenuSection'
import FooterSection from '../components/FooterSection/FooterSection'

export default function Adopt() {
    return(
        <div>
            <MenuSection/>
            <AdoptSection/>
            <FooterSection/>

        </div>
    );
}