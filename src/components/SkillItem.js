import React, { Component } from 'react';
import "../styles/Skills.css"

export class SkillItem extends Component {
  render() {
    const {skill, handleDelete, handleDeleteSkills } = this.props
    return (
        <div onClick={() => handleDelete(skill.id)} className="skill">
        <p>{skill.language}</p>
        <p style={{ textTransform: "capitalize"}}>{skill.skills.map((sk, index) => (<span key={index} onClick={() => handleDeleteSkills(index)} style={{ marginRight: "5px"}}>{sk}</span>))}</p>
      </div>
    )
  }
}

export default SkillItem
