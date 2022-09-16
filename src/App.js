import React, { Component } from "react";
import Instruction from "./components/Instruction";
import Resume from "./components/Resume";

class App extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return(
            <div className="container">
                <Instruction />
                <Resume />
            </div>
        )
    }}

export default App;



