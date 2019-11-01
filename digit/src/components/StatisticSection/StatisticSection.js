import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Chart from "react-google-charts";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./StatisticSection.css"


export default function StatisticSection() {
    return (

        <div className="bColor">
            <Row>
                <h3 className="moveRight">Статистика за кучиња скитници во Р.Северна Македонија во споредба со други држави</h3>
            </Row>
            <Row className="RowChartLeft">
                <Col className="colona, colorChart">
                    <br/>
                    <br/>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="BarChart"
                        loader={<div>Податоците се вчитуваат</div>}
                        data={[
                            ['Градови', 'Популација во 2018', 'Популација во 2010'],
                            ['Скопје', 2400, 2000],
                            ['Охрид', 1600, 1480],
                            ['Струмица', 1300, 1220],
                            ['Штип', 1400, 1300],
                            ['Радовиш', 1000, 950],
                        ]}
                        options={{
                            title: '',
                            chartArea: { width: '50%' },
                            backgroundColor: "",
                            colors: ['#4CA1AF', '#2C3E50'],
                            hAxis: {
                                title: 'Тотална популација',
                                minValue: 0,
                                "viewWindow" : {
                                    "min" : 0,
                                    "max" : 3000
                                }
                            },
                            vAxis: {
                                title: 'Град',
                            },
                        }}
                        // For tests
                        rootProps={{ 'data-testid': '1' }}
                    />
                    <br/><br/><br/>
                    <Row className="moveLittle">Популација на кучиња скитници низ градовите во Р.Северна Македонија</Row>

                    {/*<h6 style={{color:'black'}}>На графикот за приказ на популација на кучиња скитници низ градовите во Р.Северна Македонија има направено
                     споредба на кучињата скитници низ неколку градови.Како што може да се види од графикот најмногу кучиња
                     скитници(2400) има во главниот град, Скопје.Тоа може и да се претпостави бидејќи е најголемиот град и со најголема
                     популација во државата.
                     </h6>*/}
                </Col>
                <Col className="colona">

                    <Chart
                        width={'500px'}
                        height={'300px'}
                        loader={<div>Податоците се вчитуваат</div>}
                        chartType="GeoChart"
                        data={[
                            ['Country', 'Popularity'],
                            ['Germany', 0],
                            ['United States', 70000000],
                            ['Brazil', 4000000],
                            ['Canada', 500000],
                            ['France', 7400000],
                            ['RU', 2000000],
                        ]}

                        options={{
                            title:'',
                            backgroundColor: "",
                            colorAxis: { colors: ['#4CA1AF', '#2C3E50'] },
                        }}
                        // Note: you will need to get a mapsApiKey for your project.
                        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                        mapsApiKey="YOUR_KEY_HERE"
                        rootProps={{ 'data-testid': '1' }}
                    />
                    <br/><br/><br/>
                    <Row className="moveLittle">Популација на кучиња скитници низ државите во светот</Row>

                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}