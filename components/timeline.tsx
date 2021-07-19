import React, {FC} from 'react';
import styled from 'styled-components';
import {timelineEvents} from '../data/timeline-events';
import {StyledH2} from './styles';

const StyledTimelineContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledUl = styled.ul`
	padding-left: 0;
	width: 500px;
`;

const StyledLi = styled.li`
	margin: 8px 20px;
`;

const StyledEvent = styled.div`
	display: flex;
`;

export const Timeline: FC = () => (
	<StyledTimelineContainer>
		<StyledH2>Timeline</StyledH2>
		{timelineEvents.map(({year, events}) => (
			<div key={year}>
				<span>{year}</span>
				<StyledUl>
					{events.map((event) => (
						<StyledLi key={event}>
							<StyledEvent>
								<span>{event}</span>
							</StyledEvent>
						</StyledLi>
					))}
				</StyledUl>
			</div>
		))}
	</StyledTimelineContainer>
);
