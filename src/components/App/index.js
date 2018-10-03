import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import { CardContainer } from '../CardContainer';
import Search from '../Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      district: new DistrictRepository(kinderData),
      filteredDistricts: []
    };
  }
  
  componentDidMount = () => {
    this.setState({filteredDistricts: this.state.district.stats});
  }

  filterDistricts = (districtInput) => {
    const filteredDistricts = this.state.district.findAllMatches(districtInput);
    this.setState({ filteredDistricts });
  }

  render() {
    return (
      <div>
        <header>
          <h1 className='headcount-title'>Headcount 2.0</h1>
          <Search filterDistricts={this.filterDistricts} />
        </header>
        <CardContainer filteredDistricts={this.state.filteredDistricts} />
      </div>
    );
  }
}

export default App;
