import React from "react";
import "./App.css";

const StoryP = (props) => {
  console.log(props);
  return (
    <div className="wrapper">
      <div className="storyp">
        <img src={props.sto.imgg} className="img" alt="..." />
        <div className="overlay">
          <h6 className="name">{props.sto.forname}</h6>
        </div>
      </div>
    </div>
  );
};

export default StoryP;
