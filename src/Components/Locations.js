import React, { Component } from 'react';


import LocationRow from './LocationRow';

export default class Locations extends Component {

	state = {
		selectedCheckboxes: new Map(),
		disableUpdateBtn: 'disabled',
		disableBtn: 'disabled'
	}


	_selectLocation = (id, checked) => {
		const { selectedCheckboxes } = this.state;

	    if (selectedCheckboxes.has(id)) {
	      selectedCheckboxes.delete(id);
	    } else {
	      selectedCheckboxes.set(id, checked);
	    }

 		if(selectedCheckboxes.size === 1 && checked === true) {
 			this.setState({
 				disableUpdateBtn: '',
 				disableBtn: ''
 			});		
 		} else if(selectedCheckboxes.size > 1 && checked === true) {
 			this.setState({
 				disableUpdateBtn: 'disabled',
 				disableBtn: ''
 			});	
 		}
 		else {
  			this.setState({
  				disableUpdateBtn: 'disabled',
 				disableBtn: 'disabled'
 			});			
 		}

    }


	render() {
		const { data } = this.props;
		const { disableBtn, disableUpdateBtn } = this.state;
		const location = data.map((item) => <LocationRow 
												key={item.id} 
												label = {item}
												_selectLocation = {this._selectLocation}  />);
		return(
			<section>
				<div className="table">
					<div className="table-row table-row-heading">
						<div className="table-cell">Select</div>
						<div className="table-cell">Location</div>
						<div className="table-cell">Reference</div>
						<div className="table-cell">City</div>
						<div className="table-cell">Postal Code</div>
						<div className="table-cell">Existing Client</div>
					</div>
					{ location.length ? location : null}
				</div>

				{ location.length ? null : <div className="empty-table">No location was created</div> }
				
				<div className="btn-wrapper">
				<div className="column2">
					<button disabled = {disableUpdateBtn} className="btn save">Update Location</button>
					<button disabled = {disableBtn} className="btn duplicate">Duplicate</button>
				</div>
				<div className="column2 right">
					<button disabled = {disableBtn} className="btn delete">Delete Location</button>
				</div>
				</div>
			</section>	
		)
	}
}