import { Button } from '@material-ui/core';
import React, { Component } from 'react';

const Member = ({ name, state }) => {
	return (
		<Button variant="outlined" className={state} size="large">
			{name}
		</Button>
	);
};

export default class Team extends Component {
	constructor(props) {
		super(props);
		this.state = {
			members: props.members,
			id: props.id,
			swimming: props.members,
			sinking: [],
		};
	}

	render() {
		return (
			<div className="team">
				{this.state.swimming.map(member => {
					return <Member name={member} state="swimming" />;
				})}
			</div>
		);
	}
}
