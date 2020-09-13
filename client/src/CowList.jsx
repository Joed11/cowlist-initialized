import React from "react";
import ReactDOM from "react-dom";
import CowListEntry from './CowListEntry'

var CowList = function(props) {
  if (props.cows === undefined) {
    return <div></div>
  }
  return (
    <div className="cow-list">
      {props.cows.map(function(cow) {
        return <CowListEntry name={cow.name} key={cow.name} thisCow={cow} changeCow={props.changeCow}/>
      })
    }
    </div>
  );
}

export default CowList;