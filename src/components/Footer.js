import React from 'react';
import {icons} from "../constants";

const Footer = () => {
  return (
    <footer>
      <div class="container" id="footer">
          <div class="footer-wrapper">
              <div class="footer-faded-text">CourseTime</div>
              <div class="link-wrapper">
                  <div>
                      <a href="#home">Home</a>
                  </div>
                  <div>
                      <a href="#about">About</a>
                  </div>
                  <div>
                      <a href="#courses">Courses</a>
                  </div>
                  <div>
                      <a href="#contact">Contact</a>
                  </div>
              </div>

              <div class="icon-wrapper">
                {icons.map((icon) => (
                  <a className='icon' target="_blank" href={icon.hre}>{icon.ic}</a>
                ))}
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer;