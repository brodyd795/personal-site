import React, {FC} from 'react';

import styled from 'styled-components';

const StyledFooter = styled.footer`
	background-color: #dfdfdf;
	font-size: 12px;
	text-align: center;
	width: 100%;
	margin-top: 40px;
	border-top: 1px solid grey;
`;

const StyledText = styled.p`
	margin: 0;
	padding: 8px;
`;

export const Footer: FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<StyledFooter>
			<StyledText>{`© 2020 – ${currentYear} Brody Dingel`}</StyledText>
		</StyledFooter>
	);
};