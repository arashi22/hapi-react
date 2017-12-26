import React, { Component } from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import MdPlayArrow from 'react-icons/lib/md/play-arrow'
import MdPlayCircleFilled from 'react-icons/lib/md/play-circle-filled'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'
import Wrapper from './Wrapper'
import Separator from '../../Separator'
import photo from './photo.jpg'

class SoundTrack extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      playing: false,
      pos: 0
    };
  }

  handleTogglePlay = () => {
    this.setState({
      playing: !this.state.playing
    });
  }

  handlePosChange = (e) => {
    this.setState({
      pos: e.originalArgs[0]
    });
  }
  
  render() {

    return (
      <Wrapper>
        <div className="playerWrapper">
          <img src={photo} className="thumbImage" alt="Thumbnail" />
          <div className="player">
            <div className="trackDetail">
              <div className="detail">
                <div className="playButton"><MdPlayCircleFilled /></div>
                <div>
                  <h6>Andrea Charls</h6>
                  <p>Falling For You</p>
                </div>
              </div>
              <div className="social">
                <a href="#facebook"><FaFacebook /></a>
                <a href="#twitter"><FaTwitter /></a>
              </div>
            </div>
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
        <Separator />
      </Wrapper>
    );
  }
}

export default SoundTrack;
