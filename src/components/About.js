import React from 'react';
import about from '../assets/about-img.jpg';
import { info } from '../constants';

const About = () => {
  return (
    <div>
        <div className='about-wrap' id="about">
          <h2 className='about-h2'>Our Instructor</h2>
          <div className='container-about'>
            <div className='about-left'>
                  <img src={about} className="about-img user-img" />
              </div>
              <div className='about-right'>
                <h3 className="about-h3">{info.name}</h3>
                <span className="about-h3 about-span">{info.desc}</span>
                <p className='about-p'>{info.detail1}</p>
                <p className='about-p'>{info.detail2}</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About;