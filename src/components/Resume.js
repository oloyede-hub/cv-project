import React, { Component } from "react";
import Navibar from "../Utils/Navibar";
import ReactToPrint from "react-to-print";

import "../styles/Resume.css";
import ComponentToPrint from "./ComponentToPrint";

class Resume extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <ReactToPrint
          trigger={() => {
            return <button className="print-btn">Print</button>;
          }}
          content={() => this.componentRef}
          documentTitle="curriculum-vitae"
          pageStyle={`margin:0 @media print { html, body { height: initial !important; overflow: initial !important; -webkit-print-color-adjust: exact; }}`}
          />
          <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Resume;
