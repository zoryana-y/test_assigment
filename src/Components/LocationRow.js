// Core
import React, { Component } from 'react';


export default class LocationRow extends Component {
    state = {
        isChecked: false
    }

    _toggleCheckBox = (e) => {
        const { _selectLocation } = this.props;
        const elemId = e.target.value;
        const checked = this.state.isChecked;

        _selectLocation(elemId, !checked);

        this.setState({
            isChecked: !checked
        })
    }

    render () {
        const { label } = this.props;
        return (
            <div className="table-row">
            <span className="table-cell">
                <input
                  type = "checkbox"
                  onChange = {this._toggleCheckBox}
                  value = {label.id}    
                />
            </span>
                <span className="table-cell">{ label.location }</span>
                <span className="table-cell">{ label.referense }</span>
                <span className="table-cell">{ label.city }</span>
                <span className="table-cell">{ label.code }</span>
                <span className="table-cell">{ label.client }</span> 
            </div>                  
        );
    }
}
