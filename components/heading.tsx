import React from 'react';

export const Heading = ({text}: {text: string}): JSX.Element => (
	<h2 className='text-4xl text-center m-4 mb-10'>{text}</h2>
);
