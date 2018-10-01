import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      districtInput: ''
    }
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ districtInput: e.target }) 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.filterDistricts(this.state.districtInput)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Enter a district"
          onChange={this.handleChange}
        />
        <button>Enter</button>
      </form>
    )
  }
  
}

export default Search;