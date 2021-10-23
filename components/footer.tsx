import React, {FC} from 'react';

export const Footer: FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-gray-500 text-center w-full mt-20'>
			<p className='m-0 p-8'>{`© 2020 – ${currentYear} Brody Dingel`}</p>
		</footer>
	);
};
