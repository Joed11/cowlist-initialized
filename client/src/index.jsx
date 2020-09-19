import React from "react";
import ReactDOM from "react-dom";
import CowList from './CowList';
import CowSpotlight from './CowSpotlight';
import SubmitCow from './SubmitCow';
import exampleCowList from '../../server/db/exampleCowData.js';
import postACow from '../lib/postCows.js';
import getAllCows from '../lib/getCows.js';
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cowList: [],
      currentCow: null
    }
  }

  componentDidMount() {
    this.refreshCows();
  }

  postCow(newCow) {
    postACow(newCow, (response) => {
      this.refreshCows();
    })
  }

  refreshCows() {
    getAllCows((result) => {
      console.log(result);
      this.setState({
        cowList: result
      });
    })
  }

  changeCurrentCow(targetCow) {
    this.setState({
      currentCow: targetCow
    })
  }

  // deleteCow() {

  // }

  render() {
    return (
      <div>
        <CowSpotlight cow={this.state.currentCow}/>
        <SubmitCow addCow={this.postCow.bind(this)}/>
        <CowList cows={this.state.cowList} changeCow={this.changeCurrentCow.bind(this)}/>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);