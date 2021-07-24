import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Formik, Field, Form} from 'formik';

import {StyledH2} from './styles';

const StyledContactContainer = styled.div``;

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
`;

const StyledField = styled(Field)`
	margin: 8px 0;
`;

type FieldValues = {
	name: string;
	email: string;
	message: string;
};

type Submission = {
	hasSubmitted: boolean;
	wasSuccessful: boolean;
};

interface ISubmissionAlertProps {
	submission: Submission;
}

const SubmissionAlert: FC<ISubmissionAlertProps> = ({
	submission
}: ISubmissionAlertProps): JSX.Element | null => {
	if (submission.hasSubmitted) {
		if (submission.wasSuccessful) {
			return <div>Yay!</div>;
		}

		return <div>Oh no!</div>;
	}

	return null;
};

export const Contact: FC = () => {
	const [submission, setSubmission] = useState({
		hasSubmitted: false,
		wasSuccessful: true
	} as Submission);

	const handleSubmit = (values: FieldValues) => {
		console.log(`values`, values);

		setSubmission({
			hasSubmitted: true,
			wasSuccessful: true
		});
	};

	return (
		<StyledContactContainer>
			<StyledH2>Contact</StyledH2>
			<span>Drop a message, ask a question, or just say hi</span>
			<Formik
				initialValues={{name: '', email: '', message: ''}}
				onSubmit={handleSubmit}
			>
				<StyledForm>
					<StyledField
						name='name'
						type='text'
						placeholder='Name'
						aria-label='Name'
					/>
					<StyledField
						name='email'
						type='email'
						placeholder='Email'
						aria-label='Email'
					/>
					<StyledField
						name='message'
						type='message'
						placeholder='Message'
						aria-label='Message'
					/>
					<button type='submit' aria-label='Submit'>
						Submit
					</button>
				</StyledForm>
			</Formik>
			<SubmissionAlert submission={submission} />
		</StyledContactContainer>
	);
};
