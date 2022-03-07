import React from 'react';

export interface IEvent {
	heading: string;
	subtext: JSX.Element;
}

export interface IYearEvents {
	year: number;
	events: IEvent[];
}

export const timelineEvents: IYearEvents[] = [
	{
		year: 2021,
		events: [
			{
				heading: 'Software Engineer at Hy-Vee 🎉',
				subtext: <div>{"Making customers' lives better every day"}</div>
			},
			{
				heading: 'Iowa STATEment Makers award 🏆',
				subtext: (
					<div>
						Honored by the ISU Alumni Center for early professional
						accomplishments.{' '}
						<a
							className={'underline'}
							href={
								'https://www.isualum.org/s/565/17/interior.aspx?sid=565&gid=1&pgid=2551'
							}
						>
							Check it out!
						</a>
					</div>
				)
			}
		]
	},
	{
		year: 2020,
		events: [
			{
				heading: 'Daughter born 👶🏻',
				subtext: <div>{"She's the best!"}</div>
			},
			{
				heading: 'Software Engineer I at Hy-Vee 👨🏻‍💻',
				subtext: (
					<div>
						Started my career on the{' '}
						<a
							className={'underline'}
							href={'https://www.hy-vee.com/aisles-online'}
						>
							Aisles Online
						</a>{' '}
						team
					</div>
				)
			},
			{
				heading: "Graduated with Master's degree 🎓",
				subtext: (
					<div>
						Got my M.A. in Applied Linguistics, focusing on computational and
						corpus linguistics. Check out my thesis!{' '}
						<a className={'underline block'} href={'/thesis.pdf'}>
							Semantic relatedness in L2 vocabulary learning: Does it really
							matter?
						</a>
					</div>
				)
			}
		]
	},
	{
		year: 2019,
		events: [
			{
				heading: 'Published first tech article ✏️',
				subtext: (
					<div>
						Shared my journey to software engineering with the rest of the world
						on freeCodeCamp.org.{' '}
						<a
							className={'underline'}
							href={
								'https://www.freecodecamp.org/news/how-freecodecamp-and-100daysofcode-helped-me-get-hired-in-under-a-year/'
							}
						>
							Have a read!
						</a>
					</div>
				)
			},
			{
				heading: 'Began teaching Introduction to Computers and Language 👨‍🏫',
				subtext: (
					<div>
						Taught sixty ISU students the fundamentals of computer science and
						NLP through hands-on exercises, including a crash course on regular
						expressions!
					</div>
				)
			},
			{
				heading: 'Deployed first website! 😄',
				subtext: (
					<div>
						Spent the summer of 2019 learning the basics of web development to
						create{' '}
						<a
							className={'underline'}
							href='https://github.com/brodyd795/course-website'
						>
							a website for my students
						</a>{' '}
						to practice regular expressions.
					</div>
				)
			}
		]
	},
	{
		year: 2018,
		events: [
			{
				heading: 'Began teaching Spanish 101 🇪🇸',
				subtext: (
					<div>
						{
							"Taught the basics of Spanish to ~200 ISU students throughout my Master' degree. So fun!"
						}
					</div>
				)
			},
			{
				heading: 'Got married! 💒',
				subtext: (
					<div>
						{
							"Rachel and I stepped onto the altar on a beautiful spring day. Couldn't ask for a better bride!"
						}
					</div>
				)
			},
			{
				heading: 'Graduated from ISU 🎓',
				subtext: (
					<div>
						Got a BA in World Languages and Cultures (emphasis in Spanish) and a
						BA in Linguistics, with{' '}
						<span className={'italic'}>suma cum laude</span> honors
					</div>
				)
			},
			{
				heading: 'Became President of Linguatorium Research Corporation 😁',
				subtext: (
					<div>
						A 501(c)(3) non-profit organization dedicated to helping students
						and teachers across the globe to learn languages easier through
						research-proven methods.{' '}
						<a className={'underline'} href={'https://www.linguatorium.org/'}>
							Learn more
						</a>
					</div>
				)
			}
		]
	},
	{
		year: 2016,
		events: [
			{
				heading: 'Got engaged 💍',
				subtext: (
					<div>
						{
							"I asked Rachel to marry me, and she said yes! We'd been together for 2.5 years, and together ever since."
						}
					</div>
				)
			}
		]
	},
	{
		year: 2015,
		events: [
			{
				heading: 'Wrote my first line of code 💻',
				subtext: (
					<div>
						Was fortunate to work alongside my professor and his PhD students on
						the{' '}
						<a
							className={'underline'}
							href={'https://github.com/chukharev/cywrite'}
						>
							the CyWrite project
						</a>
						, getting hands-on practice with coding along the way.
					</div>
				)
			}
		]
	},
	{
		year: 2014,
		events: [
			{
				heading: 'Graduated high school 🎓',
				subtext: (
					<div>
						Was class validictorian, and headed on to keep my head in the books
						at ISU.
					</div>
				)
			}
		]
	}
];
