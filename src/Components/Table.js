import React, { Component } from 'react';


// Components
import Tabs from './Tabs';
import Tab from './Tab';
import CreateLocation from './CreateLocation';
import Locations from './Locations';

// Styles
import '../styles/main.css';

export default class Table extends Component {
    state = {
      locationLength: '',
      locations: []
    }

  _saveNewLocation = (location) => {
    this.setState((prevState) => ({
      locations: [location, ...prevState.locations]
    }));
  } 
 
  render() {
    const { locations } = this.state;
    const showLength = `(${locations.length})`;
      
    return (
      <div className="container">
      <Tabs>
        <Tab key = "1" title = "Create Location">
          <CreateLocation 
            _saveNewLocation = { this._saveNewLocation } />
        </Tab>
        <Tab key = "2" title = {`Locations ${locations.length > 0 ? showLength : '' }`}>
          <Locations 
            data = { locations } />
        </Tab>
      </Tabs>
      </div>
    );
  }
}
