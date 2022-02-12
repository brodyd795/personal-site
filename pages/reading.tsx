import React, {useState} from 'react';
import {useUser, withPageAuthRequired, UserProvider} from '@auth0/nextjs-auth0';
import {captureException} from '@sentry/nextjs';

import {ADMIN_EMAILS} from '../enums/admin-emails';
import {domains} from '../enums/domains';

// TODO: make this dynamic per env
const apiUrl = `http://${domains.LOCALHOST}/api/controllers/add-to-reading-list`;

const Reading = () => {
	const [url, setUrl] = useState('');
	const [success, setSuccess] = useState<boolean>(false);
	const {user, error, isLoading: userLoading} = useUser();
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	if (error) {
		return <div>Error</div>;
	}

	if (userLoading) {
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
		setLoading(true);

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
		} finally {
			setHasSubmitted(true);
			setLoading(false);
		}
	};

	const getSuccessMessage = () => {
		if (loading) {
			return 'Loading...'
		}

		if (hasSubmitted) {
			return success ? 'Success!' : 'Something went wrong. Please try again.';
		}

		return '';
	}

	return (
		<main className='flex flex-col items-center h-screen flex-1 justify-center'>
			<form onSubmit={handleSubmit} className='flex flex-col items-center'>
				<label id='url' htmlFor='url'>
					<span hidden>Url:</span>
					<input
						className='p-2 m-2 border-2 border-black rounded'
						onChange={handleChange}
						value={url}
						name='url'
						placeholder='https://example.com'
					/>
				</label>
				<button
					className='p-1 m-2 border-2 border-black rounded'
					type='submit'
				>
					Add
				</button>
			</form>
			{getSuccessMessage()}
		</main>
	);
};

const Wrapper = () => (
	<UserProvider>
		<Reading />
	</UserProvider>
);

export const getServerSideProps = withPageAuthRequired();

export default Wrapper;
