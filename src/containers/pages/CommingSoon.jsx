import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommingSoon extends Component {
  render() {
    return (
      <div className="App">
        Comming Soon
      </div>
    );
  }
}

CommingSoon.propTypes = {
  history: PropTypes.object.isRequired,
}

export default CommingSoon;
