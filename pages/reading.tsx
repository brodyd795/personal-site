import React, {useState} from 'react';
import styled from 'styled-components';
import {useUser, withPageAuthRequired, UserProvider} from '@auth0/nextjs-auth0';
import {captureException} from '@sentry/nextjs';

import {ADMIN_EMAILS} from '../enums/admin-emails';
import {Container} from '../components/container';
import {domains} from '../enums/domains';

const StyledInput = styled.input`
	margin: 20px auto;
	padding: 4px;
	border: 1px solid black;
	border-radius: 4px;
`;

const StyledSubmit = styled.input`
	margin-left: 8px;
	border: 1px solid black;
	border-radius: 4px;
	height: 24px;
`;

const apiUrl = `https://${domains.PRODUCTION}/api/controllers/add-to-reading-list`;

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
						<StyledInput
							onChange={handleChange}
							value={url}
							name='url'
							placeholder='https://example.com'
						/>
					</label>
					<StyledSubmit type='submit' value='Add' />
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
