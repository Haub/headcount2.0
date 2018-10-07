import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import { CardContainer } from '../CardContainer';
import { ComparisonContainer } from '../ComparisonContainer';
import Search from '../Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      district: new DistrictRepository(kinderData),
      filteredDistricts: [],
      selectedDistricts: [],
      comparisonObject: {}
    };
  }
  
  componentDidMount = () => {
    this.filterDistricts(this.state.district.state);
  }

  filterDistricts = (districtInput) => {
    const filteredDistricts = this.state.district.findAllMatches(districtInput);
    this.setState({ filteredDistricts });
  }

  selectDistrict = (location) => {
    const newDistrict = this.state.district.findByName(location);
    if(this.state.selectedDistricts.length < 2 && !this.state.selectedDistricts.includes(newDistrict)) {
      const selectedDistricts = [...this.state.selectedDistricts, newDistrict];
      this.setState({selectedDistricts})
    }

    if (this.state.selectedDistricts.includes(newDistrict)) {
      this.unselectLocation(newDistrict.location)
    }
  }

  unselectLocation = (district) => {
    const filterSelected = this.state.selectedDistricts.filter(card => card.location !== district)
    this.setState({selectedDistricts: filterSelected})
  }
  
  render() {
    return (
      <div>
        <header>
          <h1 className='headcount-title'>Headcount 2.0</h1>
          <Search filterDistricts={this.filterDistricts} />
        </header>
        <ComparisonContainer comparisonObject={this.comparisonObject} /> 

        <CardContainer 
          filteredDistricts={this.state.filteredDistricts} 
          selectDistrict={this.selectDistrict}
        />
      </div>
    );
  }
}

export default App;
