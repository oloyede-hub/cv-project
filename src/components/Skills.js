import React, { Component } from "react";
import "../styles/Skills.css"
import SkillItem from "./SkillItem";
import uniqid from "uniqid"

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language:"",
      skills: [],
      id: uniqid(),
      skillsList: [
        { language: "Web Technology", skills: ["HTML5", "CSS2&3", "React", "React-Native", "Node", "NativeBase", "SematicUI", "MateriaUI"], id: uniqid()},
        { language: "Programming Languages", skills: ["Javascript"], id: uniqid()},
        { language: "Tools and IDE", skills: ["Visual Studio Code"," Expo-CLI", "Atom", "Git & GitHub","BitBucket"], id: uniqid()},
      ],
      edit: false
    }
  }

  toogleEditBtn = () => {
    this.setState({
      edit: true
    })
  }

  handleCloseForm =() => {
    this.setState({
      edit: false
    })
  }


  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleDelete = (id) => {
    const filterArray = this.state.skillsList.filter(sk => sk.id !== id)
    this.setState({
      skillsList: filterArray
    })
  }

  handleDeleteSkills = (id) => {
    const filterArray = this.state.skills.filter(sk => sk.id !== id)
    this.setState({
      skills: filterArray
    })
  }

  handleSubmitForm = (event) => {
    event.preventDefaukt();
    const {id, language, skills} = this.state
    const obj = {id, language, skills}
    this.setState({
      skillsList: this.state.skillsList.concat(obj)
    })
    this.setState({
      language: "",
      id: ""
    })
  }

  render() {
    return (
      <div className="skills">
        <p className="skill-heading">Skills</p>
        {this.state.skillsList.map(skill => (<SkillItem skill={skill} key={skill.id} handleDeleteSkills={this.handleDeleteSkills} handleDelete={this.handleDelete} />))}
        <button className="editBtn" onClick={this.toogleEditBtn}><ion-icon name="create-outline"></ion-icon></button>
        {this.state.edit && <form className="form-feild">
          <input onChange={this.onChangeHandler} value={this.state.name} className="input" name="name" type='text' id="name" placeholder="First Surname"/>
          <input onChange={this.onChangeHandler} value={this.state.position} type='text' name="position" className="input" placeholder="Position" />
          <input onChange={this.onChangeHandler} value={this.state.address}  type='text' name="address" id="address" className="input" placeholder="Address" />
          <input onChange={this.onChangeHandler}  value={this.state.phonenumber} type='tele' name="phonenumber" id="phone" className="input" placeholder="Phone Number"/>
          <input onChange={this.onChangeHandler} value={this.state.email}  type='email' name="email" id="phone" className="input" placeholder="Email" />
          <input onChange={this.onChangeHandler} value={this.state.email_optional} type='email' name="email_optional" id="email_optional" className="input" placeholder="Optional Email"/>
          <div className="btn-container">
            <button className="save" type="submit" onClick={this.handleSubmitForm}>Save</button>
            <button className="cancel" onClick={this.handleCloseForm}>Cancel</button>
          </div>
      </form>}
      </div>
    );
  }
}

export default Skills;
