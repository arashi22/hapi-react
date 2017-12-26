import React, { Component } from 'react'
import Wrapper from './Wrapper'
import avatar from './download.jpeg'

class Banner extends Component {
  render() {
    return (
      <Wrapper>        
        <div className="avatarInfo">
          <img src={avatar} className="avatar" alt="avatar" />
          <div className="detail">
            <span className="item">Artist</span>
            <span className="item sizeXL">Andrea Charls</span>
            <span className="item">Pop & Rap - Boston, USA</span>
          </div>
        </div>
      </Wrapper>
    );
  }
}


export default Banner;
