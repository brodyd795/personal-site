import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Formik, Field, Form} from 'formik';
import fetch from 'cross-fetch';

import {StyledH2 as H2} from './styles';
import {FieldValues} from '../types/shared-types';
import {getBaseUrl} from '../utils/url-helpers';

const StyledContactContainer = styled.div`
	background-color: #272e41;
	color: white;
	border-radius: 8px;
	margin: 80px 32px 32px;
	padding: 16px;
`;

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
`;

const StyledField = styled(Field)`
	margin: 8px;
	border: 1px solid grey;
	border-radius: 4px;
	padding: 4px;

	::placeholder {
		font-family: Helvetica, sans-serif;
	}
`;

const StyledInput = styled(StyledField)`
	width: 200px;
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
	border-radius: 8px;
	display: flex;
	align-items: center;
	margin-top: 8px;
	color: black;
`;

const StyledStatusWord = styled.span`
	font-weight: bold;
	margin: 0 6px;
`;

const StyledH3 = styled.h3`
	margin: 8px;
`;

const StyledH2 = styled(H2)`
	margin-top: 8px;
	color: white;
`;

const StyledSubmitButton = styled.button`
	width: 100px;
	height: 30px;
	margin: 8px auto auto;
	background-color: #dedede;
	border: 1px solid black;
	border-radius: 20px;
	cursor: pointer;
`;

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
	if (submission.hasSubmitted && submission.wasSuccessful) {
		return (
			<StyledAlert wasSuccessful>
				<StyledStatusWord>Success!</StyledStatusWord>
				<span>I’ll get back to you as soon as I can.</span>
			</StyledAlert>
		);
	}

	if (submission.hasSubmitted && !submission.wasSuccessful) {
		return (
			<StyledAlert wasSuccessful={false}>
				<StyledStatusWord>Oops!</StyledStatusWord>
				<span>Something went wrong.</span>
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
		const res = await fetch(`${getBaseUrl()}/api/controllers/contact`, {
			body: JSON.stringify({
				values
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		});

		if (res.status === 200) {
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
		<StyledContactContainer id='contact'>
			<StyledH2>Contact</StyledH2>
			<StyledH3>Drop a message, ask a question, or just say hi!</StyledH3>
			<Formik
				initialValues={{name: '', email: '', message: ''}}
				onSubmit={handleSubmit}
			>
				<StyledForm>
					<label htmlFor='name' hidden>
						Name
					</label>
					<StyledInput
						id='name'
						name='name'
						type='text'
						placeholder='First and last name'
						aria-label='name'
						required
					/>
					<label htmlFor='email' hidden>
						Email
					</label>
					<StyledInput
						name='email'
						type='email'
						placeholder='you@some-domain.com'
						aria-label='email'
						required
					/>
					<label htmlFor='message' hidden>
						Message
					</label>
					<StyledField
						name='message'
						type='message'
						component='textarea'
						rows={4}
						placeholder="How's it going?"
						aria-label='message'
						required
					/>
					<StyledSubmitButton type='submit' aria-label='Send'>
						Send
					</StyledSubmitButton>
				</StyledForm>
			</Formik>
			<SubmissionAlert submission={submission} />
		</StyledContactContainer>
	);
};
