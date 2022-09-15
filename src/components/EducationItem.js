import React, { Component } from 'react'
import "../styles/Education.css"

export default class EducationItem extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    const { education, handleDelete } = this.props;
    return (
        <div onClick={() => handleDelete(education.id)} className="degree-info">
        <div className="degree">
          <p className="uni-name">{education.uni}</p>
          <p className="city">{education.location}</p>
          <p className="date">{education.start} - {education.end}</p>
        </div>
        <div className="course">
          <p className="course-title">{education.course}</p>
          <p className="role">
           {education.role}
          </p>
          <p className="gpa">{education.gpa}gpa</p>
        </div>
      </div>
    )
  }
}
