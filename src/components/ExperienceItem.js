import React, { Component } from 'react';
import "../styles/Experience.css";

export default class ExperienceItem extends Component {
    constructor(props) {
        super(props)
    }

    
  render() {
    const {experience, handleDelete} = this.props;
    return (
        <div onClick={() => handleDelete(experience.id)} className="container-experience">
        <div>
          <p className="job-title">{experience.title}</p>
          <p className="city">{experience.location}</p>
          <p className="date">{experience.start} - {experience.end}</p>
        </div>
        <div>
          <p className="company-name">{experience.company}</p>
          <p className="role">
            {experience.role}
          </p>
        </div>
      </div>
    )
  }
}
