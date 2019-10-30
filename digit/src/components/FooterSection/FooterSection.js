import React from 'react'
import './FooterSection.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function FooterSection(){
    return(
        <div>
            <br/>
            <br/>
            <footer>
                <div className='f-row'>
                    <div className='f-col'>
                        You can donate a meal for this little fellas just by clicking this button.

                        <br/>
                        <button className='button mt-5 foo-button '>Donate</button>
                    </div>

                    <div className='f-col customText'>Feel free to contact us anytime!<br/>
                        <div className='customText'>
                            <a href="https://www.youtube.com/c/jamesqquick" className="youtube social">
                                <FontAwesomeIcon icon={faYoutube} size="2x"/>
                            </a>
                            <a href="https://www.facebook.com/learnbuildteach/" className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com/learnbuildteach" className="instagram social">
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