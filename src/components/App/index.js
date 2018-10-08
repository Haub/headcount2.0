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
    this.filterDistricts();
  }

  filterDistricts = (districtInput) => {
    const filteredDistricts = this.state.district.findAllMatches(districtInput);
    this.setState({ filteredDistricts });
  }

  selectDistrict = (location) => {
    const newDistrict = this.state.district.findByName(location);
    if (this.state.selectedDistricts.length < 2 && !this.state.selectedDistricts.includes(newDistrict)) {
      const selectedDistricts = [...this.state.selectedDistricts, newDistrict];
      this.setState({selectedDistricts}, () => this.compareDistricts(this.state.selectedDistricts));
    }

    if (this.state.selectedDistricts.includes(newDistrict)) {
      this.unselectDistrict(newDistrict.location);
    }

    if (this.state.selectedDistricts.length > 1) {
      const selectedDistricts = [];
      this.setState({selectedDistricts});
    }
  }

  unselectDistrict = (district) => {
    const filterSelected = this.state.selectedDistricts.filter(card => card.location !== district);
    this.setState({selectedDistricts: filterSelected});
  }
  
  compareDistricts = (comparedCards) => {
    if (this.state.selectedDistricts.length === 2) {
      const districtOne = comparedCards[0].location;
      const districtTwo = comparedCards[1].location;
      const comparedData = this.state.district.compareDistrictAverages(districtOne, districtTwo);
      this.setState({comparisonObject: comparedData});
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1 className='headcount-title'>Headcount 2.0</h1>
          <Search filterDistricts={this.filterDistricts} />
        </header>
        
        {this.state.selectedDistricts &&
          <ComparisonContainer 
            comparisonObject={this.state.comparisonObject} 
            selectedDistricts={this.state.selectedDistricts}
            unselectDistrict={this.unselectDistrict}
          />
        } 

        <CardContainer 
          filteredDistricts={this.state.filteredDistricts} 
          selectDistrict={this.selectDistrict}
        />
      </div>
    );
  }
}

export default App;
