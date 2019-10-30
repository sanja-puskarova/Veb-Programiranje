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
                <h3 className="moveRight">Statistics of our country compared to others</h3>
            </Row>
            <Row>
                <Col className="colona">
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['City', '2010 Population', '2000 Population'],
                            ['New York City, NY', 8175000, 8008000],
                            ['Los Angeles, CA', 3792000, 3694000],
                            ['Chicago, IL', 2695000, 2896000],
                            ['Houston, TX', 2099000, 1953000],
                            ['Philadelphia, PA', 1526000, 1517000],
                        ]}

                        options={{
                            title: 'Population of Largest U.S. Cities',
                            chartArea: { width: '50%' },
                            backgroundColor: "",
                            hAxis: {
                                title: 'Total Population',
                                minValue: 0,
                            },
                            vAxis: {
                                title: 'City',
                            },
                        }}
                        // For tests
                        rootProps={{ 'data-testid': '1' }}
                    />
                </Col>
                <Col className="colona">
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="BubbleChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
                            ['CAN', 80.66, 1.67, 'North America', 33739900],
                            ['DEU', 79.84, 1.36, 'Europe', 81902307],
                            ['DNK', 78.6, 1.84, 'Europe', 5523095],
                            ['EGY', 72.73, 2.78, 'Middle East', 79716203],
                            ['GBR', 80.05, 2, 'Europe', 61801570],
                            ['IRN', 72.49, 1.7, 'Middle East', 73137148],
                            ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
                            ['ISR', 81.55, 2.96, 'Middle East', 7485600],
                            ['RUS', 68.6, 1.54, 'Europe', 141850000],
                            ['USA', 78.09, 2.05, 'North America', 307007000],
                        ]}
                        options={{
                            backgroundColor: "",
                            title:
                            'Correlation between life expectancy, fertility rate ' +
                            'and population of some world countries (2010)',

                            hAxis: { title: 'Life Expectancy' },
                            vAxis: { title: 'Fertility Rate' },
                            bubble: { textStyle: { fontSize: 11 } },
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
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