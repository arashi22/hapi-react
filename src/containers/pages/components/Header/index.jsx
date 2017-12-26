import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Search from './Search'
import Avatar from './Avatar'

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <header>
          <Search />
          <Avatar />
        </header>
      </Wrapper>
    );
  }
}

Header.propTypes = {
}

export default Header;
