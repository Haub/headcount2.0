import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import Search from '../Search';

class App extends Component {
  constructor() {
    super()
    this.state = {
      district: new DistrictRepository(kinderData),
      filteredDistricts: []
    }
  }
  
  componentDidMount = () => {
    this.filterDistricts()
  }

  filterDistricts = (districtInput) => {
    const filteredDistricts = this.state.district.findAllMatches(districtInput);
    this.setState({ filteredDistricts })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Headcount 2.0</h1>
          <Search filterDistricts={this.filterDistricts} />
        </header>
      </div>
    );
  }
}

export default App;
