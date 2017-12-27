import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer'
import MdPlayCircleFilled from 'react-icons/lib/md/play-circle-filled'
import FaPauseCircle from 'react-icons/lib/fa/pause-circle' 
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'

export default class Waveform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
      duration: ''
    }
  }
  componentDidMount() {
    this.$el = ReactDOM.findDOMNode(this)
    this.$waveform = this.$el.querySelector('.wave')
    this.wavesurfer = WaveSurfer.create({
      container: this.$waveform,
      waveColor: 'black',
      progressColor: 'purple',
      normalize: true,
      height: 76,
      barHeight: 2
    })
    this.wavesurfer.load(this.props.src)
    this.wavesurfer.on('ready', (e) => {
      const duration = this.wavesurfer.getDuration()
      this.setState({duration: `${Math.floor(duration / 60)}:${Math.floor(duration - duration / 60)}`})
    });
  }
  componentWillUnmount() {
  }

  handleClickPlay() {
    this.wavesurfer.playPause()
    this.setState({isPlaying: !this.state.isPlaying})
  }
  render() {
    return (
      <div className='waveform'>
        <div className="trackDetail">
          <div className="detail">
            <div className="playButton" onClick={this.handleClickPlay.bind(this)}>
              {this.state.isPlaying? <FaPauseCircle /> : <MdPlayCircleFilled />}
            </div>
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
        <div className='wave'>
          <span className="duration">{this.state.duration}</span>
        </div>
      </div>
    )
  }
}

Waveform.defaultProps = {
  src: ""
}
