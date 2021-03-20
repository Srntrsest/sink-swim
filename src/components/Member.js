import { Button } from '@material-ui/core';
import { Component } from 'react';

export default class Member extends Component {
	constructor({ name, state, switchTurns, teamId, ...props }) {
		super(props);
		this.state = {
			name,
			state,
			switchTurns,
			teamId,
		};
	}

	render() {
		return (
			<Button
				variant="outlined"
				className={this.state.state}
				size="large"
				onClick={() => {
					this.state.switchTurns(this.state.teamId, this.state.state);
				}}
			>
				{this.state.name}
			</Button>
		);
	}
}
