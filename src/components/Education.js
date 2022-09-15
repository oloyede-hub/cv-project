import React, { Component } from "react";
import "../styles/Education.css";
import EducationItem from "./EducationItem";

import uniqid from "uniqid"

class Education extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uni: "",
      location: "",
      course: "",
      role: "",
      gpa: "",
      end: "",
      start: "",
      id: uniqid(),
      edit: false,
      educationlist: [
        { 
        uni: "Cool University",
        location: "Lagos, Nigeria",
        course: "B.S. Web Development", 
        role: " Motivated by 8 years of Area of expertise. Recognise for assessing", 
        gpa: "4.43",
        end: "2/3/2020",
        start: "2/3/2024",
        id: uniqid()
        }
      ]
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleEdit = () => {
    this.setState({
      edit: true
    })
  }
  handleCloseForm = () => {
    this.setState({
      edit: false
    })
  }

  handleSave =(e) => {
    
    const { uni, location, course, role ,gpa, id} = this.state
    e.preventDefault();
    let newEdu = {
      uni: uni,
      location: location,
      course: course,
      role: role,
      gpa: gpa,
      id: id
    }
    this.setState({
      educationlist: this.state.educationlist.concat(newEdu)
    })
    this.setState({
      uni: "",
      end: "",
      start: "",
      location: "",
      course: "",
      role: "",
      gpa: "",
      id: "",
    });
    this.handleCloseForm()
  }



  handleDelete = (id) => {
    const filterArray = this.state.educationlist.filter(education => education.id !== id)
    this.setState({
      educationlist: filterArray
    })
  }

  render() {
    return (
      <div className="Education">
        <p className="heading">Education</p>
        {this.state.educationlist.map(edu => {
        return <EducationItem handleDelete={this.handleDelete} key={edu.id} education={edu} />
        })}
      <button className="editBtn" onClick={this.handleEdit}><ion-icon name="create-outline"></ion-icon></button>
      { this.state.edit && <form className="form-feild" onSubmit={this.handleSave}>
          <input onChange={this.onChangeHandler} value={this.state.uni} className="input" name="uni" type='text' id="uni" placeholder="University"/>
          <input onChange={this.onChangeHandler} value={this.state.location} type='text' name="location" id='location' className="input" placeholder="Location" />
          <input onChange={this.onChangeHandler} value={this.state.course}  type='text' name="course" id="course" className="input" placeholder="Course" />
          <input onChange={this.onChangeHandler} value={this.state.date}  type='date' name="start" id="date" className="input" placeholder="Date" />
          <input onChange={this.onChangeHandler} value={this.state.date}  type='date' name="end" id="date" className="input" placeholder="Date" />
          <input onChange={this.onChangeHandler}  value={this.state.role} type='text' name="role" id="role" className="input" placeholder="About The Course"/>
          <input onChange={this.onChangeHandler} value={this.state.gpa}  type='number' name="gpa" id="gpa" className="input" placeholder="Gpa" />
          <div className="btn-container">
            <button className="save" disabled={!this.state.uni && !this.state.location} type="submit">Save</button>
            <button className="cancel" onClick={this.handleCloseForm}>Cancel</button>
          </div>
      </form>}
      </div>
    );
  }
}

export default Education;
