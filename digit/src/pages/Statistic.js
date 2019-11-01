import React, { Component } from 'react';
import StatisticSection from '../components/StatisticSection/StatisticSection'
import MenuSection from '../components/MenuSection/MenuSection';
import FooterSection from '../components/FooterSection/FooterSection';
export default function Statistic() {
    return(
        <div>
            <MenuSection/>
            <StatisticSection/>
            <FooterSection/>
        </div>
    );
}
