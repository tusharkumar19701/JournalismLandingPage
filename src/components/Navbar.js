import React from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
    <div className="navbar-div">
        <div className="nav-heading">
            <h3>Course<span className="nav-time">Time</span></h3>
        </div>

        <div className="nav-items">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#courses">Courses</a>
            <a href="#contact">Contact</a>
            <a href="#footer">Footer</a>
        </div>
        <div className="hamburger">
            <a href="#" className='ham-a' onClick={() => setShow(!show)}>
                <RxHamburgerMenu />
            </a>
        </div>

    </div>
        <div className="mobile-nav-items" style={show ? {display:"flex",transform:`translateY(${19}px)`,transition: "2s"} :{display:"none"}}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#courses">Courses</a>
            <a href="#contact">Contact</a>
            <a href="#footer">Footer</a>
        </div>
</nav>
  )
}

export default Navbar