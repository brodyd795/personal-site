import React from 'react';

export const Heading = ({text}: {text: string}): JSX.Element => (
	<h3 className='text-2xl m-4 font-bold text-center'>{text}</h3>
);
