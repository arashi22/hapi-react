import React, { Component } from 'react'
import Wrapper from './Wrapper'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaInstagram from 'react-icons/lib/fa/instagram'

class SubMenu extends Component {
  render() {
    return (
      <Wrapper>        
        <ul className="social">
          <li><a href="#facebook"><FaFacebook /></a></li>
          <li><a href="#twitter"><FaTwitter /></a></li>
          <li><a href="#instagram"><FaInstagram /></a></li>
        </ul>
        <ul className="buttons">
          <li><button>Upload</button></li>
          <li><button>Analytics</button></li>
        </ul>
      </Wrapper>
    );
  }
}


export default SubMenu;
