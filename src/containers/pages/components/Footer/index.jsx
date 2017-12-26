import React, { Component } from 'react'
import Wrapper from './Wrapper'
import MdSkipPrevious from 'react-icons/lib/md/skip-previous'
import MdSkipNext from 'react-icons/lib/md/skip-next'
import MdPlayArrow from 'react-icons/lib/md/play-arrow'
import MdShuffle from 'react-icons/lib/md/shuffle'
import MdVolumeUp from 'react-icons/lib/md/volume-up'

import photo from './playerThumb.jpg'

class SubMenu extends Component {
  render() {
    return (
      <Wrapper>        
        <div className="title">
          <img src={photo} className="thumbnail" alt="thumbnail" />
          <div>
            <h6>Ghost Force Killers</h6>
            <p>21 Savage &amp; Offset &amp; Travis Scott</p>
          </div>
        </div>
        <div className="statusBar">
          <span className="totalMinutes">2:30</span>
          <span className="statusBar">
            <span className="progress"></span>
          </span>
          <span className="totalMinutes">0:19</span>
        </div>
        <div className="controlWrap">
          <div className="control">          
            <MdSkipPrevious />
            <MdPlayArrow />
            <MdSkipNext />
          </div>
          <div className="mute">
            <MdShuffle />
            <MdVolumeUp />  
          </div>
        </div>
      </Wrapper>
    );
  }
}


export default SubMenu;
