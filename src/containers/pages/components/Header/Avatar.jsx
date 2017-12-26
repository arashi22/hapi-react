import React, { Component } from 'react'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import avatarDefault from './avatar-placeholder.svg'

class Header extends Component {
  render() {
    return (
      <div className="avatarWrap">
        <img src={avatarDefault} className="photo" alt="Avatar" />
        <span className="downArrow"><FaAngleDown style={{color: '#999'}}/></span>
      </div>
    );
  }
}

Header.propTypes = {
  
}

export default Header;
