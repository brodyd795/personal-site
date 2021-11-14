import React, {useState} from 'react';
import {useUser, withPageAuthRequired, UserProvider} from '@auth0/nextjs-auth0';
import {captureException} from '@sentry/nextjs';

import {ADMIN_EMAILS} from '../enums/admin-emails';
import {Container} from '../components/container';
import {domains} from '../enums/domains';

// TODO: make this dynamic per env
const apiUrl = `http://${domains.LOCALHOST}/api/controllers/add-to-reading-list`;

const Reading = () => {
	const [url, setUrl] = useState('');
	const [success, setSuccess] = useState<boolean | null>(null);
	const {user, error, isLoading} = useUser();

	if (error) {
		return <div>Error</div>;
	}

	if (isLoading) {
		return <div>Loading user profile...</div>;
	}

	if (!user || !user.email || !ADMIN_EMAILS.includes(user.email)) {
		return <div>Unauthorized</div>;
	}

	const handleChange = (e: {target: {value: React.SetStateAction<string>}}) => {
		setUrl(e.target.value);
	};

	const handleSubmit = async (e: {preventDefault: () => void}) => {
		e.preventDefault();

		try {
			const res = await fetch(apiUrl, {
				method: 'POST',
				body: JSON.stringify({url})
			});
	
			if (res.status === 200) {
				setSuccess(true);
			} else {
				setSuccess(false);
				captureException('Failed addition to reading list');
			}
		} catch (err) {
			captureException(err);
		}
	};

	return (
		<Container
			headerText='Add to Reading List'
			subHeaderText='Add to your reading list below!'
		>
			<main>
				<form onSubmit={handleSubmit}>
					<label id='url' htmlFor='url'>
						<span hidden>Url:</span>
						<input
							className='m-20 p-4 border-2 border-black rounded'
							onChange={handleChange}
							value={url}
							name='url'
							placeholder='https://example.com'
						/>
					</label>
					<button
						className='ml-8 h-20 border-2 border-black rounded'
						type='submit'
					>
						Add
					</button>
				</form>
				{success ? 'Success!' : 'Something went wrong. Please try again.'}
			</main>
		</Container>
	);
};

const Wrapper = () => (
	<UserProvider>
		<Reading />
	</UserProvider>
);

export const getServerSideProps = withPageAuthRequired();

export default Wrapper;
