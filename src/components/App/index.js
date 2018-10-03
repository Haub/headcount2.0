import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import { CardContainer } from '../CardContainer';

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
          <CardContainer filteredDistricts={this.state.filteredDistricts} />
        </header>
      </div>
    );
  }
}

export default App;
