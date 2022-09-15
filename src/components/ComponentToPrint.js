import React, { Component } from 'react'
import General from './General'
import Skills from './Skills'
import Social from './Social'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import Experience from './Experience'


import "../styles/Resume.css";

export class ComponentToPrint extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="resume">
      <aside className="resume_aside">
        <General />
        <Skills />
        <Social />
      </aside>
      <main className="resume_main">
        <PersonalInfo />
        <Education />
        <Experience />
      </main> 
      </div>
    )
  }
}

export default ComponentToPrint
