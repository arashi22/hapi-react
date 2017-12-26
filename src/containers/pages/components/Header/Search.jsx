import React, { Component } from 'react'
import FaSearch from 'react-icons/lib/fa/search'

class Search extends Component {
  render() {
    return (
      <div className="searchWrap">
        <span className="logo">LOGO</span>
        <span className="search">
          <input type="text" placeholder="Search" className="input" />
          <span><FaSearch /></span>
        </span>
      </div>
    );
  }
}

Search.propTypes = {
}

export default Search;
