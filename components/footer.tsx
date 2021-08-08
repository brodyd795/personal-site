import React, {FC} from 'react';

import styled from 'styled-components';

const StyledFooter = styled.footer``;

export const Footer: FC = () => {
	const firstYear = 2021;
	const currentYear = new Date().getFullYear();
	const throughYear = currentYear > firstYear ? ` - ${currentYear}` : '';

	return (
		<StyledFooter>{`© ${firstYear}${throughYear} Brody Dingel`}</StyledFooter>
	);
};
