import React, {FC, useState} from 'react';
import {Formik, Field, Form} from 'formik';

import {FieldValues} from '../types/shared-types';
import {getBaseUrl} from '../utils/url-helpers';

type Submission = {
	hasSubmitted: boolean;
	wasSuccessful: boolean;
};

interface ISubmissionAlertProps {
	submission: Submission;
}

const fieldStyles: string = 'm-8 p-4 border-2 border-grey-500';
const statusWordStyles: string = 'my-0 mx-6';
const getAlertStyles = (wasSuccessful: boolean) =>
	`${wasSuccessful ? 'bg-emerald-200' : 'bg-red-200'}`;

const SubmissionAlert: FC<ISubmissionAlertProps> = ({
	submission
}: ISubmissionAlertProps): JSX.Element | null => {
	if (submission.hasSubmitted && submission.wasSuccessful) {
		return (
			<div className={getAlertStyles(submission.wasSuccessful)}>
				<span className={statusWordStyles}>Success!</span>
				<span>I’ll get back to you as soon as I can.</span>
			</div>
		);
	}

	if (submission.hasSubmitted && !submission.wasSuccessful) {
		return (
			<div className={getAlertStyles(submission.wasSuccessful)}>
				<span className={statusWordStyles}>Oops!</span>
				<span>Something went wrong.</span>
			</div>
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
		<div className='min-h-screen w-full bg-zinc-500' id='contact'>
			<h2 className='m-4'>Contact</h2>
			<h3 className='m-4'>Drop a message, ask a question, or just say hi!</h3>
			<Formik
				initialValues={{name: '', email: '', message: ''}}
				onSubmit={handleSubmit}
			>
				<Form className='flex flex-col'>
					<label htmlFor='name' hidden>
						Name
					</label>
					<Field
						className={`${fieldStyles}`}
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
					<Field
						className={`${fieldStyles}`}
						name='email'
						type='email'
						placeholder='you@some-domain.com'
						aria-label='email'
						required
					/>
					<label htmlFor='message' hidden>
						Message
					</label>
					<Field
						className={fieldStyles}
						name='message'
						type='message'
						component='textarea'
						rows={4}
						placeholder="How's it going?"
						aria-label='message'
						required
					/>
					<button
						className='w-20 bg-white rounded m-8'
						type='submit'
						aria-label='Send'
					>
						Send
					</button>
				</Form>
			</Formik>
			<SubmissionAlert submission={submission} />
		</div>
	);
};
