import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import SubMenu from './components/SubMenu'
import MainContainer from './components/MainContainer'

class User extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <SubMenu />
        <MainContainer />
        <Footer />
      </div>
    );
  }
}

User.propTypes = {
  history: PropTypes.object.isRequired,
}

export default User;
