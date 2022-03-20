import React, {useState, useRef} from 'react';

import {ShowMoreLessButton} from './buttons';
import {Heading} from './heading';
import {Collapse} from './collapse';

const H3 = ({children}: {children: JSX.Element | string}) => (
	<h3 className={'text-white mt-4 text-lg'}>{children}</h3>
);
const H2 = ({children}: {children: JSX.Element | string}) => (
	<h2 className={'text-white mt-4 text-xl'}>{children}</h2>
);
const P = ({children}: {children: JSX.Element | string}) => (
	<p className={'mt-3'}>{children}</p>
);

const Technology = ({
	text,
	href,
	background,
	color
}: {
	text: string;
	href: string;
	background: string;
	color: string;
}) => (
	<a href={href}>
		<div
			className={`bg-slate-500 ${background} ${color} flex items-center text-sm italic rounded border border-black h-8 p-2 m-2 transition ease-in-out delay-50 hover:text-gray-200 duration-300 hover:scale-[1.05] drop-shadow-lg`}
		>
			{text}
		</div>
	</a>
);

export const About = (): JSX.Element => {
	const [showMore, setShowMore] = useState(false);
	const scrollToRef = useRef<HTMLDivElement>(null);

	return (
		<div className='w-full py-10 flex flex-col' id='about' ref={scrollToRef}>
			<Heading text={'About'} />
			<div className={'mx-4'}>
				<H2>TL;DR</H2>
				<ul className={'list-disc ml-4 mt-4 leading-loose text-gray-400'}>
					<li>Full-stack software engineer in ecommerce at Hy-Vee</li>
					<li>
						Degrees from Iowa State University
						<ul className={'list-disc ml-8'}>
							<li>
								{`Master's – Applied Linguistics (emphasis in computational
									linguistics)`}
							</li>
							<li>{`Bachelor's – Linguistics (with TESL minor)`}</li>
							<li>{`Bachelor's – World Languages and Cultures (emphasis in Spanish)`}</li>
						</ul>
					</li>
					<li>{`Enjoy developing software that makes a difference in others' lives`}</li>
					<li>Always ready for a new challenge!</li>
				</ul>
				<H2>Skills / Technologies</H2>
				<div className='flex mt-4 flex-wrap justify-center'>
					<Technology
						text={'Next.js'}
						href='https://nextjs.org/'
						background={'bg-[#000]'}
						color={'text-[#fff]'}
					/>
					<Technology
						text={'React'}
						href='https://reactjs.org/'
						background={'bg-[#20232a]'}
						color={'text-[#61dafb]'}
					/>
					<Technology
						text={'PostgreSQL'}
						href='https://www.postgresql.org/'
						background={'bg-[#336791]'}
						color={'text-[#fff]'}
					/>
					<Technology
						text={'Google Cloud Platform'}
						href='https://cloud.google.com/gcp'
						background={'bg-[#1a73e8]'}
						color={'text-[#fff]'}
					/>
					<Technology
						text={'Kubernetes'}
						href='https://kubernetes.io/'
						background={'bg-[#3371e3]'}
						color={'text-[#fff]'}
					/>
					<Technology
						text={'Node.js'}
						href='https://nodejs.org/en/'
						background={'bg-[#026e00]'}
						color={'text-[#fff]'}
					/>
					<Technology
						text={'Docker'}
						href='https://www.docker.com/'
						background={'bg-[#0b214a]'}
						color={'text-[#fff]'}
					/>
				</div>
				<Collapse showMore={showMore} scrollToRef={scrollToRef}>
					<H2>{`You want to know more? Alright!`}</H2>
					<H3>{`My journey into software engineering`}</H3>
					<P>{`I grew up in small-town Iowa and headed to Iowa State University (Go, Cyclones!) after high school.
                            Didn't quite know what I wanted to do with my life at that point, but I quickly discovered a passion
                            for Spanish and Linguistics. I was fascinated at how structured human language is, and that drew me into a dual Spanish and Linguistics major`}</P>
					<P>{`By the end of my first year, I was introduced to programming. And so my career began!`}</P>
					<P>{`I spent the next three years dabbling in programming while I focused on my studies in Spanish and Linguistics. Mostly Perl and Python, of which I remember almost nothing 😅
                            But my interest continued to grow little by little.`}</P>
					<P>{`After graduating with my bachelor's degrees, I continued my studies at ISU in a Master's program in Applied Linguistics. I was deeply interested in coding by this point, so I declared an emphasis in computational/corpus linguistics.`}</P>
					<P>{`In December 2018, I decided to make a career switch to software engineeering! Fortunately, my major professor had a background in software and agreed to help me in my journey.`}</P>
					<P>{`My breakthrough opportunity came a few months later when I was asked to teach an introductory course titled "Computers and Language" in the Linguistics program. I knew I wanted to teach my upcoming students how to use regular expressions,
                            so I decided to build a website for that purpose. It took me the full summer of 2019, but I did it!`}</P>
					<P>{`My first website was pretty awful in retrospect, but it fulfilled its purpose. It had ~150 total users over the course of the year, and I was able to make improvements to it to fit my students' needs.`}</P>
					<P>{`As I neared graduation, I got an interview with Hy-Vee and showed off my course website. It went pretty well! And after learning that Hy-Vee uses React, I spent the following Christmas break React-ifying my site to learn the skills for the job.`}</P>
					<P>{`Diving into the world of software engineering as a hobbyist was definitely a big change, but I haven't looked back. Fun stuff!`}</P>
					<H3>{`My Skills`}</H3>
					<P>{`Advanced: React, Next.js, Typescript`}</P>
					<P>{`Working proficiency: GCP, Postgres, Styled Components`}</P>
					<P>{`Learning: Golang`}</P>
					<H3>{`Outside of work`}</H3>
					<P>{`When I'm not working, I'm usually hanging out with my amazing wife and daughter. ♥️ My wife is wonderful and has supported me throughout this whole journey, and my daughter has brought a whole new level of joy into our lives that we
                            never would've thought possible. We like playing games, walks on Iowa trails, and reading lots.`}</P>
					<P>{`If I'm not with them, I'm probably playing around with some new technology, trying my hand at woodworking, pretending I know how to golf, or reading.`}</P>
				</Collapse>
			</div>
			<ShowMoreLessButton
				showMore={showMore}
				setShowMore={setShowMore}
				type={'about me'}
			/>
		</div>
	);
};
