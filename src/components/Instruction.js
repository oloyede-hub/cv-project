import React, { Component } from "react";
import "../styles/Instruction.css";

class Instruction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        instructions: true
      })
    }, 2000);
  }

  toggleInstructions = () => {
    this.setState((preState) => ({
      instructions: !preState.instructions,
    }));
  };

  render() {
    return this.state.instructions ? (
      <div className="instruct" 
style={{position: "fixed", top: "0", left:"0", width: "100vw", maxWidth: "100%", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.63)" , zIndex: "99999", 
overflowY: "hidden", display: "flex", justifyContent: "center",
 alignItems: "center"
}}
      >
        <div 
        className="instruction-container">
          <ion-icon onClick={this.toggleInstructions} name="close-outline"></ion-icon>
          <h2>Instructions</h2>
          <ul>
            <li>
              Hover over the areas of the resume to find Edit and Add buttons
            </li>
            <li>
              Edit your information in the form fields and submit your edits
            </li>
            <li>
              Add your Education and Experience or click on entries to remove
              them
            </li>
            <li>
              When your done editing, use <code>CTRL</code> + <code>P</code> (
              <code>CMND</code> + <code>P</code> on a Mac) to print your resume
              to pdf
            </li>
          </ul>

          <button className="get-start" type="button" onClick={this.toggleInstructions}>
            Get Started
          </button>
        </div>
      </div>
    ) : null;
  }
}

export default Instruction;
