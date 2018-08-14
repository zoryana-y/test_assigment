import React, { Component } from 'react';

export default class Tab extends Component {

	_handleTabClick = (e) => {
		e.preventDefault();
		const { isActive, tabIndex, onClick } = this.props;
		if(isActive) {
			return null
		}
		onClick(tabIndex)
	}

	render() {
		const { title, isActive } = this.props;

		return (
			<li>
				<span onClick = {this._handleTabClick} className={`tab${isActive ? ' active' : '' }`}>{ title }</span>
			</li>
		)
	}
}