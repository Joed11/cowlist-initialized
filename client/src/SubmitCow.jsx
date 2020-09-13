import React from "react";
import ReactDOM from "react-dom";

class SubmitCow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: '',
      descriptionInput: ''
    };
  }

  handleNameChange(inputText) {
    console.log(inputText);
    this.setState({
      nameInput: inputText,
    });
  }

  handleDescriptionChange(inputText) {
    console.log(inputText);
    this.setState({
      descriptionInput: inputText,
    });
  }

  handleSubmit() {
    var newCow = {
      name: this.state.nameInput,
      description: this.state.descriptionInput
    }
    console.log('new cow', newCow)
    this.props.addCow(newCow)
  }


  render() {
    return (
      <div className="submit-cow-form">
        <h4>Add a Cow</h4>
        <div>Name:</div>
        <input className="input-cow-name" type="text" onChange={(event) => this.handleNameChange(event.target.value)}/>
        <div>Description:</div>
        <input className="input-cow-description" type="text" onChange={(event) => this.handleDescriptionChange(event.target.value)}/>
        <button className="btn hidden-sm-down" onClick={() => this.handleSubmit()}>
          SUBMIT!
          </button>
      </div>
    );
  }
}

export default SubmitCow;
