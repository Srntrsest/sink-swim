import React, { Component } from 'react';
import Team from '../Team';

export default class NoReboundNoLimitRevive extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gameData: props,
		};
	}

	render() {
		return (
			<div className="game">
				<Team id={1} members={this.state.gameData.team1} />
				<Team id={2} members={this.state.gameData.team2} />
			</div>
		);
	}
}
