import React, {FC} from 'react';

export const Footer: FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='text-center w-screen absolute left-0'>
			<p className='m-0 p-8'>{`© 2020 – ${currentYear} Brody Dingel`}</p>
		</footer>
	);
};
