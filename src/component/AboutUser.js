import '../App.css';
import React, { useState, useEffect } from 'react';
import prashant from '../resources/pks.png';
import cv from '../resources/PrashantSinghCV.pdf';

function PersonalDetailHorizontal(){
    return(
        <div className="about">
            <div className="person_detal">
                <p id="name">Hi, I am<br /> Prashant</p>
                <p id="position">Native Android Developer</p>
                <div>
                    <a href={cv} target="_blank" rel="noreferrer">
                        <button id="download_cv" type="button">Download CV</button>
                    </a>
                </div>
            </div>
            <img className="userImage" src={prashant} alt="" />
        </div>
    );
}

function PersonalDetailVertical(){
    return(
        <>
        <img className="userImage" src={prashant} alt="" />
            <div className="person_detalVertical">
                <p id="name">Hi, I am<br /> Prashant</p>
                <p id="position">Native Android Developer</p>
                <div>
                    <a href={cv} target="_blank" rel="noreferrer">
                        <button id="download_cv" type="button">Download CV</button>
                    </a>
                </div>
            </div>
            
        </>
    );
}


function AboutUser() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to run effect only once

    return (
        isMobile ? <PersonalDetailVertical/> : <PersonalDetailHorizontal/>
    );
}
export default AboutUser;

