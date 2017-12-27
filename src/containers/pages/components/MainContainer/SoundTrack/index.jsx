import React, { Component } from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import MdPlayArrow from 'react-icons/lib/md/play-arrow'
import WaveForm from './WaveForm'
import Wrapper from './Wrapper'
import photo from './photo.jpg'

class SoundTrack extends Component {
  
  render() {

    return (
      <Wrapper>
        <div className="playerWrapper">
          <img src={photo} className="thumbImage" alt="Thumbnail" />
          <div className="player">
            <WaveForm src={'https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3'} />
          </div>
        </div>
        <div className="metaWrapper">
            <div className="delete">
              <span className="icon"><MdDelete /></span>
              <span className="name">Delete Track</span>
            </div>
            <div className="viewCount">
              <span className="icon"><MdPlayArrow /></span>
              <span className="name">60K</span>
            </div>
        </div>
      </Wrapper>
    );
  }
}

export default SoundTrack;
