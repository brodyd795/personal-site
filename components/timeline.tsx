import React, {FC, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import {IYearEvents, timelineEvents} from '../data/timeline-events';
import {StyledH2} from './styles';

const StyledTimelineContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 32px;
`;

const StyledUl = styled.ul`
	padding-left: 8px;
	border-left: 2px solid black;
	list-style-type: none;

	@media (min-width: 500px) {
		margin-left: 28px;
	}
`;

const StyledLi = styled.li`
	margin: 4px 0;

	a {
		color: #1d1e22;
	}
`;

const StyledEvent = styled.div``;

const StyledEventHeading = styled.p`
	margin: auto;
	color: #1d1e22;
	font-weight: bold;
`;

const StyledEventSubtext = styled(ReactMarkdown)`
	color: #3c3d48;
`;

const StyledYearContainer = styled.div`
	@media (min-width: 500px) {
		display: flex;
	}
`;

const StyledYear = styled.h3`
	@media (min-width: 500px) {
		margin-left: 8px;
		align-self: center;
	}
`;

const StyledShowMoreButton = styled.button`
	width: 100px;
	height: 30px;
	align-self: center;
	background-color: #dedede;
	border: 1px solid black;
	border-radius: 20px;
	cursor: pointer;
`;

const Year: FC<IYearEvents> = ({year, events}: IYearEvents) => (
	<StyledYearContainer key={year}>
		<StyledYear>{year}</StyledYear>
		<StyledUl>
			{events.map(({heading, subtext}) => (
				<StyledLi key={subtext}>
					<StyledEvent>
						<StyledEventHeading>{heading}</StyledEventHeading>
						<StyledEventSubtext>{subtext}</StyledEventSubtext>
					</StyledEvent>
				</StyledLi>
			))}
		</StyledUl>
	</StyledYearContainer>
);

export const Timeline: FC = () => {
	const [showMore, setShowMore] = useState(false);
	const initialEvents = timelineEvents.slice(0, 3);
	const otherEvents = timelineEvents.slice(3);

	return (
		<StyledTimelineContainer>
			<StyledH2>Timeline</StyledH2>
			{initialEvents.map(({year, events}) => (
				<Year year={year} events={events} />
			))}
			{!showMore && (
				<StyledShowMoreButton type='button' onClick={() => setShowMore(true)}>
					See All
				</StyledShowMoreButton>
			)}
			{showMore &&
				otherEvents.map(({year, events}) => (
					<Year year={year} events={events} key={year} />
				))}
		</StyledTimelineContainer>
	);
};
