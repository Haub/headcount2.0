import kinderData from '../../data/kindergartners_in_full_day_program';

export default class DistrictRepository {
  
  constructor() {
    this.stats = this.removeDuplicates(kinderData);
    const average = this.findAverage('ACADEMY 20')
    console.log(average)
  }

  removeDuplicates = (kinderData) => {
    return kinderData.reduce((kinderObj, district) => {
      let schoolDistrict = district.Location.toUpperCase();
      let year = district.TimeFrame;
      let roundedData = Math.round(district.Data * 1000)/1000;
      
      if (!kinderObj[schoolDistrict]) {
        kinderObj[schoolDistrict] = {
          location: schoolDistrict, 
          stats: {}
        };
      }      
      kinderObj[schoolDistrict].stats[year] = roundedData || 0;
      return kinderObj;
    }, {});  
  }

  findByName = (schoolDistrict = '') => {
    const upperSchoolDistrict = schoolDistrict.toUpperCase();
    return this.stats[upperSchoolDistrict]; 
  }

  findAllMatches = (schoolDistrict = '') => {
    const districts = Object.keys(this.stats);
    const matchingDistricts = districts.filter(district => {
      return district.toUpperCase().includes(schoolDistrict.toUpperCase());
    }); 
    const matchingDistrictStats = matchingDistricts.map(location => this.stats[location]);
    return matchingDistrictStats;
  }

  findAverage = (schoolDistrict) => {
    const statValues = Object.values(this.stats[schoolDistrict].stats);
    const average = statValues.reduce((sum, stat) => {
      return sum += stat
    }, 0)/statValues.length
    return Math.round(average * 1000)/1000;
  }

  compareDistrictAverages = (district1, district2) => {
    const district1Average = this.findAverage(district1.toUpperCase());
    const district2Average = this.findAverage(district2.toUpperCase());
    const ratio = (Math.round((district1Average/district2Average)*1000)/1000);
    return {[district1.toUpperCase()]: district1Average, [district2.toUpperCase()]: district2Average, compared: ratio};
  }
}