import React from 'react'
import './FooterSection.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import $ from 'jquery';
export default function FooterSection(){
    function Donate(){
        window.location.href="/donate"
    }


    return(
        <div className="div-footer">

            <footer>
                <div className='f-row'>
                    <div className='f-col'>

                        Можете да донирате оброк за кучињата со само еден клик на следното копче:

                        <br/>
                        <button onClick={Donate} className='button mt-1 foo-button '>Донирај</button>
                    </div>

                <div className='f-col customText'>Контактирајте не во секое време!<br/>
                        <div className='customText'>
                            <a href="https://www.youtube.com/" className="youtube social">
                                <FontAwesomeIcon icon={faYoutube} size="2x"/>
                            </a>
                            <a href="https://www.facebook.com/" className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.twitter.com/" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com/" className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>

                        </div>
                    </div>

                </div>
                <div className="CopyRight">
                    ShelterMe @ DIGIT 2019, Skopje
                </div>
            </footer>

        </div>


    )
}