import React from 'react';
import AnimateHeight from 'react-animate-height';

export const Collapse = ({
	children,
	showMore,
	scrollToRef
}: {
	children: JSX.Element[];
	showMore: boolean;
	scrollToRef: React.RefObject<HTMLDivElement>;
}): JSX.Element => (
	<AnimateHeight
		duration={500}
		delay={!showMore ? 300 : 0}
		onAnimationStart={() => {
			if (!showMore && scrollToRef.current) {
				scrollToRef.current.scrollIntoView();
			}
		}}
		height={showMore ? 'auto' : 0}
		className={'text-gray-400 leading-relaxed'}
	>
		{children}
	</AnimateHeight>
);
