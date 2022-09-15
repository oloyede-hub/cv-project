import React, { Component } from "react";
import "../styles/PersonalInfo.css"
import Button from "../Utils/Button";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      position: "", 
      address: "",
      phonenumber: "",
      email: "",
      email_optional: "",
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



  

  render() {
    const {name, address, position, email, email_optional, phonenumber} = this.state;
    return (
      <div>
         <div className="personal_info">
        <div className="left">
          <h2>{name === "" ? "Buore Oloyede" : name}</h2>
          <p>{position === "" ? "Software Engineer" : position}</p>
        </div>
        <div className="right">
          <p className="addre"><ion-icon name="location-outline"></ion-icon>{address === "" ? "14585 AvenueWhitestone, NY": address}</p>
          <p className="tele"><ion-icon name="call-outline"></ion-icon> {phonenumber === "" ? "+249055936018" : phonenumber}</p>
          <p className="email"><ion-icon name="mail-outline"></ion-icon>{email === ''?" info@youremailaddress.com": email}</p>
          {email_optional && <p className="email"><ion-icon name="mail-outline"></ion-icon>{email_optional}</p>}
        </div>
      <button className="editBtn" onClick={this.toogleEditBtn}><ion-icon name="create-outline"></ion-icon></button>
      </div>
      { this.state.edit && <form className="form-feild">
          <input onChange={this.onChangeHandler} value={this.state.name} className="input" name="name" type='text' id="name" placeholder="First Surname"/>
          <input onChange={this.onChangeHandler} value={this.state.position} type='text' name="position" className="input" placeholder="Position" />
          <input onChange={this.onChangeHandler} value={this.state.address}  type='text' name="address" id="address" className="input" placeholder="Address" />
          <input onChange={this.onChangeHandler}  value={this.state.phonenumber} type='tele' name="phonenumber" id="phone" className="input" placeholder="Phone Number"/>
          <input onChange={this.onChangeHandler} value={this.state.email}  type='email' name="email" id="phone" className="input" placeholder="Email" />
          <input onChange={this.onChangeHandler} value={this.state.email_optional} type='email' name="email_optional" id="email_optional" className="input" placeholder="Optional Email"/>
          <div className="btn-container">
            <button className="save" type="submit">Save</button>
            <button className="cancel" onClick={this.handleCloseForm}>Cancel</button>
          </div>
      </form>}
      </div>
 
    );
  }
}

export default PersonalInfo;
