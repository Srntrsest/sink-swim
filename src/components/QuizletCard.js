import React, { Component } from 'react';
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
} from '@material-ui/core';

export default class QuizletCard extends Component {
	render() {
		return (
			<Card style={{ width: '40%' }}>
				<CardContent>
					<Typography variant="h6">
						* Word list should be in the form of an exported Quizlet
						set.
					</Typography>
					<Typography variant="subtitle">
						When exporting your Quizlet set, make sure to export the
						set as follows:
						<br />
						Between term and definition: | (no additional spaces)
						<br />
						Between rows: New line
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">
						<a
							href="https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets"
							className="export-quizlet"
							target="__blank__"
						>
							How to Export Quizlet Sets
						</a>
					</Button>
				</CardActions>
			</Card>
		);
	}
}
