import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Formik, Field, Form} from 'formik';

import {StyledH2} from './styles';
import {FieldValues} from '../types/shared-types';

const StyledContactContainer = styled.div``;

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
`;

const StyledField = styled(Field)`
	margin: 8px;
`;

interface IStyledAlertProps {
	readonly wasSuccessful: boolean;
}

const StyledAlert = styled.div<IStyledAlertProps>`
	background-color: ${({wasSuccessful}) =>
		wasSuccessful ? '#abffab' : '#ffabab'};
	padding: 8px;
	border: ${({wasSuccessful}) =>
		`1px solid ${wasSuccessful ? '#204018' : '#401818'}`};
`;

const StyledSuccessWord = styled.span`
	font-weight: bold;
	margin: 0 6px;
`;

const StyledH3 = styled.h3``;

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
			return (
				<StyledAlert wasSuccessful>
					<span>👍🏼</span>
					<StyledSuccessWord>Success!</StyledSuccessWord>
					<span>I’ll get back to you as soon as I can.</span>
				</StyledAlert>
			);
		}

		return (
			<StyledAlert wasSuccessful={false}>
				<span>😬</span>
				<StyledSuccessWord>Oops!</StyledSuccessWord>
				<span>
					Something went wrong. Please try again, and I’ll look into what
					happened!
				</span>
			</StyledAlert>
		);
	}

	return null;
};

export const Contact: FC = () => {
	const [submission, setSubmission] = useState({
		hasSubmitted: false,
		wasSuccessful: true
	} as Submission);

	const handleSubmit = async (values: FieldValues) => {
		const res = await fetch(`/api/controllers/contact`, {
			body: JSON.stringify({
				values
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		});

		if (res.ok) {
			setSubmission({
				hasSubmitted: true,
				wasSuccessful: true
			});
		} else {
			setSubmission({
				hasSubmitted: true,
				wasSuccessful: false
			});
		}
	};

	return (
		<StyledContactContainer>
			<StyledH2>Contact</StyledH2>
			<StyledH3>Drop a message, ask a question, or just say hi!</StyledH3>
			<Formik
				initialValues={{name: '', email: '', message: ''}}
				onSubmit={handleSubmit}
			>
				<StyledForm>
					<label htmlFor='name'>
						Name
						<StyledField
							id='name'
							name='name'
							type='text'
							placeholder='John Doe'
							aria-label='name'
						/>
					</label>
					<label htmlFor='email'>
						Email
						<StyledField
							name='email'
							type='email'
							placeholder='me@example.com'
							aria-label='email'
						/>
					</label>
					<label htmlFor='message'>
						Message
						<StyledField
							name='message'
							type='message'
							placeholder="How's it going?"
							aria-label='message'
						/>
					</label>
					<button type='submit' aria-label='Submit'>
						Submit
					</button>
				</StyledForm>
			</Formik>
			<SubmissionAlert submission={submission} />
		</StyledContactContainer>
	);
};
