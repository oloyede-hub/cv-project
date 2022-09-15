import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const  { btnText } = this.props
    return <button style={{ paddingBlock: "10px",paddingInline: "20px", textAlign: "center", fontSize: "15px" }} className='button'> {btnText}</button>
  }
}
