import React from 'react';
import SocialContact from '../../common';
import './about.css';

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hello there 👋, I am a 
                    <br/><span className='info-name'>Random Guy.</span><br/> 
                    I love experimenting with the web.
                </div>
                <div className='about-photo'>
                    <img src={require('../../../assets/coding.png').default} alt="" className='picture'/>
                </div>
            </div>
            <div className='about-bottom'>
                <SocialContact/>
            </div>
        </div>
    )
}

export default About
