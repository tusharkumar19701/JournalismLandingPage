import React from "react";
import body from "./body-img.jpg";
import Button from "./Button";
import { info } from "../constants";

const Body = () => {
  return (
    <div className="body-wrap" id="home">
      <div className="body-left">
        <h2 className="body-h2">{info.heading}</h2>
        <p className="body-p">{info.para}</p>
        <p className="body-p p2">{info.para2}</p>
        <p className="body-p p2">{info.para3}</p>
        <Button />
      </div>
      <div className="body-right">
        <img src={body} className="body-img" />
      </div>
    </div>
  );
};

export default Body;
