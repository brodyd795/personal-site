interface IYearEvents {
	year: number;
	events: string[];
}

export const timelineEvents: IYearEvents[] = [
	{
		year: 2021,
		events: ["Making customers' lives easier at Hy-Vee 💪🏻"]
	},
	{
		year: 2020,
		events: [
			'Our daughter, Lillia, was born 👶🏻',
			'Started career at Hy-Vee as Software Engineer I',
			"Graduated with Masters' degree in Applied Linguistics"
		]
	},
	{
		year: 2019,
		events: ['Published first article on freeCodeCamp.org ✏️']
	},
	{
		year: 2018,
		events: [
			'Got married to my (now) wife, Rachel! ♥️',
			'Graduated from ISU with two BAs and _suma cum laude_ honors'
		]
	}
];
