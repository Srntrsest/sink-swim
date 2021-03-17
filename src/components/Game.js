import React, { Component } from 'react';
import { Formik, Field, Form, useField } from 'formik';
import {
	TextField,
	Button,
	Checkbox,
	Radio,
	FormControlLabel,
} from '@material-ui/core';
import QuizletCard from './QuizletCard';

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

	render() {
		if (this.state.hasCompletedForm) {
			return <h1>yes</h1>;
		}
		return (
			<div>
				<Formik
					initialValues={{
						wordList: '',
						team1: '',
						team2: '',
						isRandomOrder: false,
					}}
					onSubmit={data => {
						console.log(data);
						this.setState({ form: data, hasCompletedForm: true });
					}}
				>
					{({ values }) => (
						<Form>
							<Field
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
									placeholder="Team 1 (separate names by new lines)"
									multiline
									variant="outlined"
									name="team1"
									type="input"
									as={TextField}
									required
								/>
								<Field
									placeholder="Team 2 (separate names by new lines)"
									multiline
									variant="outlined"
									name="team2"
									type="input"
									as={TextField}
									required
								/>
							</div>
							<div>
								<label>Random Order?</label>
								<Field
									name="isRandomOrder"
									type="checkbox"
									as={Checkbox}
								/>
							</div>
							<div>
								<Button type="submit">Submit</Button>
							</div>
							<pre>{JSON.stringify(values, null, 4)}</pre>
							<QuizletCard />
						</Form>
					)}
				</Formik>
			</div>
		);
	}
}
