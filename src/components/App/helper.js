import kinderData from '../../data/kindergartners_in_full_day_program';

export default class DistrictRepository {
  
  constructor(data) {
    this.stats = this.removeDuplicates(kinderData)
  }

  removeDuplicates = (kinderData) => {
    return kinderData.reduce((kinderObj, district) => {
      let schoolDistrict = district.Location;
      let year = district.TimeFrame;
      let roundedData = Math.round(district.Data * 1000)/1000;
      
      if(!kinderObj[schoolDistrict]) {
        kinderObj[schoolDistrict] = {
          location: schoolDistrict, 
          stats: {}
        }
      } 
      
      kinderObj[schoolDistrict].stats[year] = roundedData || 0;
      return kinderObj
    
    }, {})  
  }

  findByName = (schoolDistrict = '') => {
    const upperSchoolDistrict = schoolDistrict.toUpperCase();
    return this.stats[upperSchoolDistrict] 
  }



  findAllMatches = (schoolDistrict = '') => {
    const districts = Object.keys(this.stats);
    const matchingDistricts = districts.filter(district => district.toUpperCase().includes(schoolDistrict.toUpperCase()));
    return matchingDistricts
  }
}