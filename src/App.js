import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";

const AppLayout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Body />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
};
export default AppLayout;
