import React from "react";
import ReactDOM from "react-dom";
import CowList from './CowList'
import CowSpotlight from './CowSpotlight'
import SubmitCow from './SubmitCow'
import exampleCowList from '../../server/db/exampleCowData.js'
import addACow from '../lib/addCows.js'
import getAllCows from '../lib/getCows.js'
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

  addCow(newCow) {
    addACow(newCow, (response) => {
      console.log('You maybe posted a cow', response)
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
    console.log('changing the cow')
    this.setState({
      currentCow: targetCow
    })
  }

  deleteCow() {

  }

  render() {
    return (
      <div>
        <h2>Cow List Exercise</h2>
        <SubmitCow addCow={this.addCow.bind(this)}/>
        <CowSpotlight cow={this.state.currentCow}/>
        <CowList cows={this.state.cowList} changeCow={this.changeCurrentCow.bind(this)}/>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);