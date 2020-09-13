import React from "react";
import ReactDOM from "react-dom";

var CowSpotlight = function(props) {
  console.log(props)
  if (props.cow) {
  return (
      <div className="cow-spotlight">
        <div>{props.cow.name}</div>
        <div>{props.cow.description}</div>
      </div>
    );
  } else {
    return <div className="cow-spotlight">No Cow Selected</div>
  }
}

export default CowSpotlight;