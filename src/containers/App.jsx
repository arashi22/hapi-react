import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Router from './Router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={this.props.history} />
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
}

export default App;
