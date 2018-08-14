import React, { Component } from 'react';


export default class Tabs extends Component {
	static defaultProps = {
		defaultTabIndex: null
	}
	state = {
		activeTabIndex: 0
	}

	_handleClick = (tabIndex) => {
		this.setState({
			activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultTabIndex : tabIndex
		});
	}

	_renderChildrensTab = () => (
		this.props.children.map((child, index) => (
			React.cloneElement(child, {
				onClick: this._handleClick,
				tabIndex: index,
				isActive: index === this.state.activeTabIndex
			})
		))
	)

	_activeTabContent = () => {
		const { children } = this.props;
		const { activeTabIndex } = this.state;
		if(children[activeTabIndex]) {
			return children[activeTabIndex].props.children;
		}
	}


	render() {
		return(
			<div className="tabs">
				<ul className="tabs-wrapper">{this._renderChildrensTab()}</ul>
				<div className="activeTabContent">{this._activeTabContent()}</div>
			</div>
		);
	}
};

