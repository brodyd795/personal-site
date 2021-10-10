import React, {useState} from 'react';
import styled from 'styled-components';
import {useUser, withPageAuthRequired} from '@auth0/nextjs-auth0';

import {ADMIN_EMAILS} from '../enums/admin-emails';
import {Container} from '../components/container';

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

const apiUrl = 'http://localhost:3000/api/controllers/add-to-reading-list';

const Reading = () => {
	const [url, setUrl] = useState('');
	const [success, setSuccess] = useState<boolean | null>(null);
	const {user, error, isLoading} = useUser();

	if (error) {
		return 'Error';
	}

	if (isLoading) {
		return 'Loading user profile...';
	}

	if (!user || !user.email || !ADMIN_EMAILS.includes(user.email)) {
		return 'Unauthorized';
	}

	const handleChange = (e: {target: {value: React.SetStateAction<string>}}) => {
		setUrl(e.target.value);
	};

	const handleSubmit = async (e: {preventDefault: () => void}) => {
		const key = process.env.READING_LIST_EXTENSION_SECRET;
		e.preventDefault();
		console.log('url', url);
		console.log(`key`, key);

		try {
			const result = await fetch(apiUrl, {
				method: 'POST',
				body: JSON.stringify({url, key})
			});

			if (result.status === 200) {
				setSuccess(true);
			} else {
				setSuccess(false);
			}
		} catch (error) {
			console.log(`error`, error);
			setSuccess(false);
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
				{success ? 'Yay!' : 'Oh no!'}
			</main>
		</Container>
	);
};

export const getServerSideProps = withPageAuthRequired();

export default Reading;
