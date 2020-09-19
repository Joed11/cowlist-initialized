import React from "react";
import ReactDOM from "react-dom";

var CowSpotlight = function(props) {
  if (props.cow) {
  return (
      <div className="cow-spotlight">
        <div>{props.cow.name}</div>
        <div>{props.cow.description}</div>
      </div>
    );
  } else {
    return <div className="cow-spotlight">PICK A COW!</div>
  }
}

export default CowSpotlight;