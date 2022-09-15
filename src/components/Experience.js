import React, { Component } from "react";
import "../styles/Experience.css"
import ExperienceItem from "./ExperienceItem.js";
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      location: "",
      start: "",
      end: "",
      company: "",
      role: "",
      edit: false,
      id: uniqid(),
      experience: [
        {
          title: "Software Engineer",
      location: "Lagos State, Nigeria",
      start: "2/3/2022",
      end: "2/3/2022",
      company: "Enyata Software Company",
      role: "Motivated by 8 years of Area of expertise. Recognise for assessing operational need and developing solution to save cost, improve revenues and drives",
      id: uniqid()
        },
        {
          title: "Computer Analyst",
      location: "Kampala State, Zimbabuwe",
      start: "2/3/2020",
      end: "2/3/2022",
      company: "Derob Software Company",
      role: "Competent in Area of expertise. Recognise for assessing operational need and developing solution to save cost, improve revenues and drives",
      id: uniqid()
        }
      ]
    }
  }
handleOpenForm = () => {
  this.setState({
    edit:true
  })
}
  handleCloseForm = () => {
    this.setState({
      edit: false
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
handleSubmit = (e) => {
  e.preventDefault();
  const {title,
  location,
  start,
  end,
  company,
  role, id} = this.state
  const newExp = {
    title: title ,
      location:location,
      start: start,
      end: end,
      company: company,
      role: role,
      id: id
  }
  this.setState({
    experience: this.state.experience.concat(newExp)
  })
  this.setState({
    title: "",
    location: "",
    start: "",
    end: "",
    company: "",
    role: "",
    id: ""
  })
  this.handleCloseForm()
}

handleDelete = (id) => {
  const filterArray = this.state.experience.filter(exp => exp.id !== id)
  this.setState({
    experience: filterArray
  })
}

  render() {
    const {experience } = this.state;
    return (
      <div className="Experience">
        <p className="heading">Work Experience</p>
        {experience.map(item => <ExperienceItem handleDelete={this.handleDelete} key={item.id} experience={item} />)}
        <button className="editBtn" onClick={this.handleOpenForm}><ion-icon name="create-outline"></ion-icon></button>
        { this.state.edit && <form className="form-feild" >
          <input onChange={this.onChangeHandler} value={this.state.title} className="input" name="title" type='text' id="title" placeholder="Job Title"/>
          <input onChange={this.onChangeHandler} value={this.state.location} type='text' name="location" className="input" placeholder="location" />
          <input onChange={this.onChangeHandler} value={this.state.start}  type='date' name="address" id="start" className="input" placeholder="Start Date" />
          <input onChange={this.onChangeHandler}  value={this.state.end} type='date' name="date" id="date" className="input" placeholder="End Date"/>
          <input onChange={this.onChangeHandler} value={this.state.company}  type='text' name="company" id="company" className="input" placeholder="Company Name" />
          <input onChange={this.onChangeHandler} value={this.state.role} type='text' name="role" id="role" className="input" placeholder="Responsibility"/>
          <div className="btn-container">
            <button className="save" type="submit" onClick={this.handleSubmit} disabled={!this.state.title && !this.state.location}>Save</button>
            <button className="cancel" onClick={this.handleCloseForm}>Cancel</button>
          </div>
      </form>}
      </div>
    );
  }
}

export default Experience;
