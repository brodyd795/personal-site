import React from 'react';
import AnimateHeight from 'react-animate-height';

export const Collapse = ({
	children,
	showMore,
	myRef
}: {
	children: JSX.Element[];
	showMore: boolean;
	myRef: React.RefObject<HTMLDivElement>;
}): JSX.Element => (
	<AnimateHeight
		duration={showMore ? 500 : 300}
		onAnimationStart={() => {
			if (!showMore && myRef.current) {
				myRef.current.scrollIntoView();
			}
		}}
		height={showMore ? 'auto' : 0}
		className={'text-gray-400 leading-relaxed'}
	>
		{children}
	</AnimateHeight>
);
