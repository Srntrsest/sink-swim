import React, { Component } from 'react';
import Member from './Member';

export default class Team extends Component {
	constructor(props) {
		super(props);
		this.state = {
			members: props.members,
			id: props.id,
			swimming: props.members,
			sinking: [],
			switchTurns: props.switchTurns,
		};
	}

	render() {
		return (
			<div className="team">
				{this.state.swimming.map(member => {
					return (
						<Member
							key={member}
							name={member}
							state="swimming"
							teamId={this.state.id}
							switchTurns={this.state.switchTurns}
						/>
					);
				})}
			</div>
		);
	}
}
