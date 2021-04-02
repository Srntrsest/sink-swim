import React, { Component } from 'react';
import Team from '../Team';

const CurrentWord = ({ prompt, pair }) => {
	const term = `The term is ${pair.term}.`;
	const definition = `The definition is ${pair.definition}.`;
	let shown;
	switch (prompt) {
		case 'turn':
			shown = term;
			break;
		case 'definition':
			shown = definition;
			break;
		case 'both':
			const rand = Math.random();
			if (rand < 0.5) {
				shown = term;
			} else {
				shown = definition;
			}
			break;
		default:
			shown = term;
			break;
	}
	return <div className="current-word">{shown}</div>;
};

export default class NoReboundNoLimitRevive extends Component {
	constructor(props) {
		super(props);
		this.switchTurns.bind(this);
		this.change.bind(this);
		this.chooseWord.bind(this);
		this.state = {
			...props,
			turn: 1,
		};
		console.log(this.state);
		this.chooseWord();
	}

	change = () => {
		if (this.state.turn === 1) {
			this.setState({ turn: 2 });
		} else {
			this.setState({ turn: 1 });
		}
	};

	chooseWord = () => {
		const gameData = this.state;
		const wordList = gameData.wordList;
		if (wordList.length === 0) {
			return 'no words left';
		}
		const index = Math.floor(Math.random() * wordList.length);
		const pair = wordList.splice(index, 1)[0];
		gameData.currentWord = pair;
		this.setState({ gameData });
		console.log('CHOSE WORD');
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
					members={this.state.team1}
					switchTurns={this.switchTurns}
				/>

				<div className="middle">
					<div className="turn">Team {this.state.turn}'s turn</div>
					<CurrentWord
						prompt={this.state.prompt}
						pair={this.state.currentWord}
					/>
				</div>
				<Team
					id={2}
					members={this.state.team2}
					switchTurns={this.switchTurns}
				/>
			</div>
		);
	}
}
