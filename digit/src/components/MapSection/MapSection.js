import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Animated} from "react-animated-css";
import './MapSection.css'

export default function MapSection() {
    return (
        <div>

            <iframe className="map-section" width={600} height={450} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d47436.84774319002!2d21.43497444444406!3d42.004503600184286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sanimal%20shelter!5e0!3m2!1sen!2smk!4v1572340540898!5m2!1sen!2smk"></iframe>

            <p className="div-map">Доколку забележите бездомно куче особено ако е повредено, Ве замолуваме да го однесете на некоја од посочените локации
                за да ја добие соодветната негa.<br/>Кучињата од засолништата се објавуваат на оваа страна со цел да се зголемат шансите да бидат посвоени.</p>

        </div>
    )
}