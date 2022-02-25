import React from 'react';

export const Heading = ({text}: {text: string}): JSX.Element => (
	<h3 className='text-3xl m-4 mb-10'>{text}</h3>
);
