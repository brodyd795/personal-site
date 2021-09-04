export interface IEvent {
	heading: string;
	subtext: string;
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
				subtext: "Making customers' lives better every day"
			},
			{
				heading: 'Iowa STATEment Makers award 🏆',
				subtext:
					'Honored by the ISU Alumni Center for early professional accomplishments. [Check it out!](https://www.isualum.org/s/565/17/interior.aspx?sid=565&gid=1&pgid=2551)'
			}
		]
	},
	{
		year: 2020,
		events: [
			{
				heading: 'Daughter born 👶🏻',
				subtext: "She's the best!"
			},
			{
				heading: 'Software Engineer I at Hy-Vee 👨🏻‍💻',
				subtext:
					'Started my career on the [Aisles Online](https://www.hy-vee.com/aisles-online) team'
			},
			{
				heading: "Graduated with Master's degree 🎓",
				subtext:
					'Got my M.A. in Applied Linguistics, focusing on computational and corpus linguistics. Check out my thesis! [_Semantic relatedness in L2 vocabulary learning: Does it really matter?_](/thesis.pdf)'
			}
		]
	},
	{
		year: 2019,
		events: [
			{
				heading: 'Published first tech article ✏️',
				subtext:
					'Shared my journey to software engineering with the rest of the world on freeCodeCamp.org. [Have a read!](https://www.freecodecamp.org/news/how-freecodecamp-and-100daysofcode-helped-me-get-hired-in-under-a-year/)'
			},
			{
				heading: 'Began teaching Introduction to Computers and Language 👨‍🏫',
				subtext:
					'Taught sixty ISU students the fundamentals of computer science and NLP through hands-on exercises, including a crash course on regular expressions!'
			},
			{
				heading: 'Deployed first website! 😄',
				subtext:
					'Spent the summer of 2019 learning the basics of web development to create [a website for my students](https://github.com/brodyd795/course-website) to practice regular expressions.'
			}
		]
	},
	{
		year: 2018,
		events: [
			{
				heading: 'Began teaching Spanish 101 🇪🇸',
				subtext:
					"Taught the basics of Spanish to ~200 ISU students throughout my Master' degree. So fun!"
			},
			{
				heading: 'Got married! 💒',
				subtext:
					"Rachel and I stepped onto the altar on a beautiful spring day. Couldn't ask for a better bride!"
			},
			{
				heading: 'Graduated from ISU 🎓',
				subtext:
					'Got a BA in World Languages and Cultures (emphasis in Spanish) and a BA in Linguistics, with _suma cum laude_ honors'
			},
			{
				heading: 'Became President of Linguatorium Research Corporation 😁',
				subtext:
					'A 501(c)(3) non-profit organization dedicated to helping students and teachers across the globe to learn languages easier through research-proven methods. [Learn more](https://www.linguatorium.org/)'
			}
		]
	},
	{
		year: 2016,
		events: [
			{
				heading: 'Got engaged 💍',
				subtext:
					"I asked Rachel to marry me, and she said yes! We'd been together for 2.5 years, and together ever since."
			}
		]
	},
	{
		year: 2015,
		events: [
			{
				heading: 'Wrote my first line of code 💻',
				subtext:
					'Was fortunate to work alongside my professor and his PhD students on the [the CyWrite project](https://github.com/chukharev/cywrite), getting hands-on practice with coding along the way.'
			}
		]
	},
	{
		year: 2014,
		events: [
			{
				heading: 'Graduated high school 🎓',
				subtext:
					'Was class validictorian, and headed on to keep my head in the books at ISU.'
			}
		]
	}
];
