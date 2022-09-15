import React, { Component } from 'react';
import uniqid from "uniqid";
import User from "../assets/images/user.jpg"

import "../styles/General.css"

 class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: "Motivated by 8 years of Area of expertise. Recognise for assessing operational need and developing solution to save cost, improve revenues and drive customers satisfaction Resourceful and well-organized with excellent.",
      image: "",
      every: {about: "", image: "", id: uniqid()},
      edit: false,
    }
  }

  handleOpenForm = () => {
    this.setState({
      edit: true
    })
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { about, image } = this.state
    this.setState({
      every: { about, image }
    })
    this.handleCloseForm()
  }

  handleCloseForm = () => {
    this.setState({
      edit: false
    })
  }

  handleDelete = () => {
    console.log(this.state.every)
    this.setState({
      every: { about: "", id: "", edit: false}
    })
  }

  render() {
    console.log(this.state.every)
    return (
      <div className='general'>
        <div className='image_container'>
          <button><label htmlFor='image'>Edit</label></button>
          <input type="file" name='image' value={this.state.image} onChange={this.handleOnChange} id='image' className="choose_image" />
          <img className='image' src={this.state.every.image? this.state.every.image: User} id='image' alt='user' />
        </div>
        <div className='about'>
          <h3 className='title'>About Me</h3>
          <p onClick={this.handleDelete}>{!this.state.every.about ? this.state.about :  this.state.every.about}</p>
        <button className='editBtn' onClick={this.handleOpenForm}><ion-icon name="create-outline"></ion-icon></button>
        </div>
        {this.state.edit && <form className="form-feild">
            <textarea className='input' value={this.state.about} onChange={this.handleOnChange} placeholder="About Me" id="about" name='about'></textarea>
            <div className="btn-container">
            <button className="save" type="submit" onClick={this.handleSubmit}>Save</button>
            <button className="cancel" onClick={this.handleCloseForm}>Cancel</button>
          </div>
        </form>}
      </div>
    )
  }
}

export default General
