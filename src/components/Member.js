import { Button } from '@material-ui/core';
import { Component } from 'react';

export default class Member extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			state: props.state,
			switchTurns: props.switchTurns,
			teamId: props.teamId,
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
