import React, { Component } from 'react';
import Team from '../Team';

export default class NoReboundNoLimitRevive extends Component {
	constructor(props) {
		super(props);
		this.switchTurns.bind(this);
		this.change.bind(this);
		this.chooseWord.bind(this);
		this.state = {
			gameData: props,
			turn: 1,
		};
		this.chooseWord();
	}

	componentDidMount() {
		const currentWord = this.chooseWord();
		this.setState({ currentWord });
	}

	change = () => {
		if (this.state.turn === 1) {
			this.setState({ turn: 2 });
		} else {
			this.setState({ turn: 1 });
		}
	};

	chooseWord = () => {
		const gameData = { ...this.state.gameData };
		const wordList = gameData.wordList;
		if (wordList.length === 0) {
			return 'no words left';
		}
		const index = Math.floor(Math.random() * wordList.length);
		const pair = wordList.splice(index, 1);
		this.setState({ gameData });

		return pair;
	};

	switchTurns = (clickedOnTeamId, clickedOnState, switchState) => {
		const clickerTeamId = this.state.turn;

		if (clickerTeamId === 1) {
			if (
				(clickedOnTeamId === 2 && clickedOnState === 'swimming') ||
				(clickedOnTeamId === 1 && clickedOnState === 'sinking')
			) {
				this.change();
				switchState();
			}
		} else {
			if (
				(clickedOnTeamId === 1 && clickedOnState === 'swimming') ||
				(clickedOnTeamId === 2 && clickedOnState === 'sinking')
			) {
				this.change();
				switchState();
			}
		}
	};

	render() {
		return (
			<div className="game">
				<Team
					id={1}
					members={this.state.gameData.team1}
					switchTurns={this.switchTurns}
				/>

				<div className="turn">Team {this.state.turn}'s turn</div>
				<div className="current-word"></div>
				<Team
					id={2}
					members={this.state.gameData.team2}
					switchTurns={this.switchTurns}
				/>
			</div>
		);
	}
}
