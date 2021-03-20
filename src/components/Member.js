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
		this.switchState.bind(this);
	}

	switchState = () => {
		if (this.state.state === 'swimming') {
			this.setState({ state: 'sinking' });
		} else {
			this.setState({ state: 'swimming' });
		}
	};

	render() {
		return (
			<Button
				variant="outlined"
				className={this.state.state}
				size="large"
				onClick={() => {
					this.state.switchTurns(
						this.state.teamId,
						this.state.state,
						this.switchState,
					);
				}}
			>
				{this.state.name}
			</Button>
		);
	}
}
