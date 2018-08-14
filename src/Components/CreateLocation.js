import React, { Component } from 'react';

import { getUniqueID } from '../instruments/UniqueId.js'

export default class CreateLocation extends Component {
	state = {
	    location: '',
	    city: 'option1',
	    client: 'Client1',
	    referense: '',
	    code: ''
	}

	_saveNewLocation = (e) => {
	    e.preventDefault();
	    const {
	        _saveNewLocation
	    } = this.props;

	    _saveNewLocation(this.state);

	    this.setState({
	        location: '',
	        city: 'option1',
	        client: 'Client1',
	        referense: '',
	        code: ''
	    })
	}

	setValue(field, event) {
	    var object = {};
	    object[field] = event.target.value;
	    object['id'] = getUniqueID();
	    this.setState(object);
	}
	  
	render() {
		const { location, city, client, referense } = this.state;
		return (
			<section>
			<form onSubmit = {this._saveNewLocation} className="createLocationTable">
				<div className="border">
				<div className="column2">
					<div className="location-row">
						<label htmlFor="location">Location Name:</label>
						<input 
							id="location" 
							type="text" 
							value = { location }
							onChange = {this.setValue.bind(this, 'location')}/>
					</div>					
					<div className="location-row">
						<label htmlFor="city">City:</label>
						<select 
							id="city" 
							value = { city }
							onChange = {this.setValue.bind(this, 'city')}>
							<option>option1</option>
							<option>option2</option>
							<option>option3</option>
						</select>
					</div>					
					<div className="location-row">
						<label htmlFor="client">Existing Client:</label>
						<select 
							id="client" 
							value = { client }
							onChange = {this.setValue.bind(this, 'client')}>
							<option>Client1</option>
							<option>Client2</option>
							<option>Client3</option>
						</select>
					</div>
				</div>
				<div className="column2">
					<div className="location-row">
						<label htmlFor="referense">Referense:</label>
						<input 
							id="referense" 
							type="text" 
							value = { referense }
							onChange = {this.setValue.bind(this, 'referense')} />
					</div>
					<div className="location-row">
						<label htmlFor="code">Postal Code:</label>
						<input 
							id="code" 
							type="text"  
							value = { referense }
							onChange = {this.setValue.bind(this, 'code')}/>
					</div>
				</div>
				</div>
				
					<div className="column2 left">
						<button className="btn save">Save Location</button>
					</div>
					<div className="column2 right">
						<button className="btn delete">Delete Location</button>
					</div>
			</form>	
			</section>
		)
	}
}