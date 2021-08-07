import React, {FC} from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import {timelineEvents} from '../data/timeline-events';
import {StyledH2} from './styles';

const StyledTimelineContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledUl = styled.ul`
	padding-left: 0;
`;

const StyledLi = styled.li`
	a {
		color: #6f6c6c;
	}
`;

const StyledEvent = styled.div`
	display: flex;
`;

const StyledMarkdown = styled(ReactMarkdown)`
	p {
		margin: 0;
	}
`;

export const Timeline: FC = () => (
	<StyledTimelineContainer>
		<StyledH2>Timeline</StyledH2>
		{timelineEvents.map(({year, events}) => (
			<div key={year}>
				<h3>{year}</h3>
				<StyledUl>
					{events.map((event) => (
						<StyledLi key={event}>
							<StyledEvent>
								<StyledMarkdown>{event}</StyledMarkdown>
							</StyledEvent>
						</StyledLi>
					))}
				</StyledUl>
				<hr />
			</div>
		))}
	</StyledTimelineContainer>
);
