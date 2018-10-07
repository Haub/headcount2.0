import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

class Search extends Component {

  handleChange = (event) => {
    this.props.filterDistricts(event.target.value);
  }

  render() {
    return (
      <form>
        <input
          placeholder="Enter District Name"
          onChange={this.handleChange}
          className='search'
        />
        <button className='enter-button'>Enter</button>
      </form>
    );
  }
}

Search.propTypes = { 
  filterDistricts: PropTypes.func.isRequired
};

export default Search;