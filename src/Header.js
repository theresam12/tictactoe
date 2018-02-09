import React, { Component } from 'react';
import './Header.css'

class Header extends Component {

  render(){
    console.log(this.props)
    return(
      <header>
        <h1>{this.props.message}</h1>
        <h2>{this.props.subtitle}</h2>
      </header>
    )
  }
}

export default Header
