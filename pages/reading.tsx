import React, {useState} from 'react';
import styled from 'styled-components';

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

const Reading = () => {
	const [url, setUrl] = useState('');

	const handleChange = (e: {target: {value: React.SetStateAction<string>}}) => {
		setUrl(e.target.value);
	};

	const handleSubmit = (e: {preventDefault: () => void}) => {
		e.preventDefault();
		console.log('url', url);
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
			</main>
		</Container>
	);
};

export default Reading;
