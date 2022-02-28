import React, {FC, useState} from 'react';
import {Formik, Field, Form} from 'formik';
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import type {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {FieldValues} from '../types/shared-types';
import {getBaseUrl} from '../utils/url-helpers';
import {Heading} from './heading';

type Submission = {
	hasSubmitted: boolean;
	wasSuccessful: boolean;
};

interface ISubmissionAlertProps {
	submission: Submission;
}

const fieldStyles = 'm-2 p-2 w-80 border-2 rounded border-grey-500';
const statusWordStyles = 'my-0 mx-6';
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

const SocialLink = ({href, icon}: {href: string, icon: IconDefinition}) => (
	<a href={href} target={'_blank'} rel={'noreferrer'}>
		<FontAwesomeIcon icon={icon} className='ml-2 w-6 h-6' />
	</a>
)

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
		<div
			className='w-full mt-10 flex flex-col items-center mb-8 bg-slate-700 p-4'
			id='contact'
		>
			<Heading text='Contact' />
			<h3 className='m-4'>Drop a message, ask a question, or just say hi!</h3>
			<div className={'mx-2 mb-10 flex justify-start'}>
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
							placeholder='Your name'
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
							className='w-20 h-12 bg-slate-500 rounded m-auto'
							type='submit'
							aria-label='Send'
						>
							<span>Send</span>
							<FontAwesomeIcon icon={faPaperPlane} className='ml-2 w-6 h-6' />
						</button>
					</Form>
				</Formik>
			</div>
			<div>
				<SocialLink href={'https://github.com/brodyd795'} icon={faGithub} />
				<SocialLink href={'https://twitter.com/btdingel'} icon={faTwitter} />
				<SocialLink href={'https://www.linkedin.com/in/brodydingel'} icon={faLinkedin} />
			</div>
			<SubmissionAlert submission={submission} />
		</div>
	);
};
