import React from "react";
import ReactDOM from "react-dom";

class CowListEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.changeCow(this.props.thisCow)
  }

  render() {
    return (
    <div className="cow-list-entry" onClick={() => { this.handleClick() }}>{this.props.name}</div>
  );
  }
}

export default CowListEntry;