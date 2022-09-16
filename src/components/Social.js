import React, { Component } from 'react';
import uniqid from "uniqid";

import "../styles/Social.css"

class Social extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "", 
      link: "",
      icon: "",
      id: uniqid(),
      socialList: [
        {text: "Facebook", link: "www.facebook.com", id: uniqid(), icon:"logo-facebook"},
        {text: "Twitter", link: "www.twitter.com/onibuore", id: uniqid(),icon:"logo-twitter"},
        {text: "Github", link: "www.github.com/oloyede-hub", id: uniqid(), icon:"logo-github"},
      ],
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
    const {text, link, id, icon} = this.state
    const newObj = {
       text,
       link,
       id,
       icon
    }
    this.setState({
      socialList: this.state.socialList.concat(newObj)
    })
    this.setState({
     text: "",
     link: "",
     icon: ""
    })
    this.handleCloseForm()
  }

  handleCloseForm = () => {
    this.setState({
      edit: false
    })
  }

  handleDelete = (id) => {
    const filterArray = this.state.socialList.filter(social => social.id !== id);
    this.setState({
      socialList: filterArray
    })
  }
  render() {

    const options = [
      {
        label: "Twiter",
        value: "logo-twitter",
      },
      {
        label: "Facebook",
        value: "logo-facebook",
      },
      {
        label: "Pinterest",
        value: "logo-pinterest",
      },
      {
        label: "Facebook",
        value: "logo-facebook",
      },
      {
        label: "Github",
        value: "logo-github",
      }
    ]
<<<<<<< HEAD
=======
    const {} = this.state
>>>>>>> 7e2c6a2cf95b61f34d12cf47d2abc593399b060b

    return (
      <div className='social'>
        <p className='social-heading'>Website and Social links</p>
        {this.state.socialList.map(social => <p key={social.id} onClick={() => this.handleDelete(social.id)}><ion-icon name={social.icon}></ion-icon><a className='link' href={social.link}>{social.text}</a> </p>)}
        <button className='editBtn' onClick={this.handleOpenForm}><ion-icon name="create-outline"></ion-icon></button>
        {this.state.edit && <form className="form-feild">
            <input type="text" className='input' value={this.state.text} onChange={this.handleOnChange} placeholder="Add Social" id="text" name='text' />
            <input type="url" className='input' value={this.state.link} onChange={this.handleOnChange} placeholder="Your url" id="link" name='link' />
            <select value={this.state.icon} onChange={this.handleOnChange} name="icon">
              {options.map(option => {
                return <option value={option.value}> {option.label} </option>
              })}
            </select>
            <div className="btn-container">
            <button className="save" type="submit" onClick={this.handleSubmit}>Save</button>
            <button className="cancel" onClick={this.handleCloseForm}>Cancel</button>
          </div>
        </form>} 
      </div>
    );
  }
}

export default Social;
