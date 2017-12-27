import React, { Component } from 'react'
import Wrapper from './Wrapper'
import SoundTrack from './SoundTrack'

class MainContainer extends Component {
  render() {
    return (
      <Wrapper>        
        <ul className="soundTraks">
          <li><SoundTrack /></li>
          <li><SoundTrack /></li>
          <li><SoundTrack /></li>
          <li><SoundTrack /></li>
          <li><SoundTrack /></li>
        </ul>
      </Wrapper>
    );
  }
}


export default MainContainer;
