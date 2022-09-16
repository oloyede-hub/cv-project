import React, { Component } from "react";
import Navibar from "../Utils/Navibar";
<<<<<<< HEAD

=======
import General from "./General";
import PersonalInfo from "./PersonalInfo";
import Social from "./Social";
import Experience from "./Experience";
import Education from "./Education";
>>>>>>> 7e2c6a2cf95b61f34d12cf47d2abc593399b060b
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
<<<<<<< HEAD
          documentTitle="Curriculum Vitae"
          content={() => this.componentRef}
=======
          content={() => this.componentRef}
          documentTitle="curriculum-vitae"
          pageStyle={`margin:0 @media print { html, body { height: initial !important; overflow: initial !important; -webkit-print-color-adjust: exact; }}`}
>>>>>>> 7e2c6a2cf95b61f34d12cf47d2abc593399b060b
          />
          <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Resume;
