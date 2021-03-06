import React, { Component } from 'react';
import { Formik, Field, Form, useField } from 'formik';
import { TextField, Button, Radio, FormControlLabel } from '@material-ui/core';
import QuizletCard from './QuizletCard';
import NoReboundNoLimitRevive from './games/NoReboundNoLimitRevive';
import Footer from './Footer';

const MyRadio = ({ label, ...props }) => {
	const [field] = useField(props);
	return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

export default class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasCompletedForm: false,
		};
	}

	handleSubmit = data => {
		const { wordList, team1, team2, prompt } = data;
		let words = wordList.split('\n');
		words = words.map(pair => {
			const [term, definition] = pair.split('|');
			return {
				term,
				definition,
			};
		});
		console.log(words);
		const team1Members = team1.split('\n');
		const team2Members = team2.split('\n');

		this.setState({
			gameData: {
				wordList: words,
				team1: team1Members,
				team2: team2Members,
				prompt,
			},
			hasCompletedForm: true,
		});
	};

	render() {
		if (this.state.hasCompletedForm) {
			const { prompt, wordList, team1, team2 } = this.state.gameData;
			return (
				<NoReboundNoLimitRevive
					prompt={prompt}
					wordList={wordList}
					team1={team1}
					team2={team2}
				/>
			);
		}
		return (
			<div>
				<img
					src="/img/logo.gif"
					height="300"
					alt="Sink or Swim animated logo"
				/>
				<Formik
					initialValues={{
						wordList: '',
						team1: '',
						team2: '',
						prompt: 'term',
						// isRandomOrder: false,
					}}
					onSubmit={this.handleSubmit}
				>
					{({ values }) => (
						<Form>
							<Field
								className="text-input"
								placeholder="Word List*"
								multiline
								variant="outlined"
								name="wordList"
								type="input"
								as={TextField}
								required
							/>
							<div>
								<Field
									className="text-input"
									placeholder="Team 1 (separate names by new lines)"
									multiline
									variant="outlined"
									name="team1"
									type="input"
									as={TextField}
									required
								/>
								<Field
									className="text-input"
									placeholder="Team 2 (separate names by new lines)"
									multiline
									variant="outlined"
									name="team2"
									type="input"
									as={TextField}
									required
								/>
							</div>
							{/* <div>
								<label>Random Order?</label>
								<Field
									name="isRandomOrder"
									type="checkbox"
									as={Checkbox}
								/>
							</div> */}
							<div>Prompt with:</div>
							<MyRadio
								name="prompt"
								type="radio"
								value="term"
								label="Term"
							/>
							<MyRadio
								name="prompt"
								type="radio"
								value="definition"
								label="Definition"
							/>
							<MyRadio
								name="prompt"
								type="radio"
								value="both"
								label="Both"
							/>
							<div>
								<Button
									type="submit"
									color="primary"
									variant="contained"
								>
									Submit
								</Button>
							</div>
							{/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
							<QuizletCard />
						</Form>
					)}
				</Formik>

				<Footer />
			</div>
		);
	}
}
