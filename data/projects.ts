export interface IProject {
	name: string;
	link: string;
	technologies: string[];
	description: string;
}

export const projects: IProject[] = [
	{
		name: 'Accounting',
		link: 'https://github.com/brodyd795/accounting',
		technologies: ['Next.js', 'MySQL', 'Styled Components'],
		description:
			"Custom-tailored accounting app for managing my family's finances. You know, accounting stuff."
	},
	{
		name: 'Course Website',
		link: 'https://github.com/brodyd795/course-website',
		technologies: ['React', 'Express', 'Bootstrap'],
		description:
			'Custom-made platform for my past students. Included an appointment scheduler, anonymous messaging, automated homework grading, and grade reports.'
	},
	{
		name: '#100DaysOfCode',
		link: 'https://github.com/brodyd795/100-days-of-code',
		technologies: ['Vanilla HTML, CSS, & JS'],
		description:
			'Learned the basics of web dev. Would 1000% recommend to anyone looking to get their feet web in programming!'
	},
	{
		name: 'Secret message app',
		link: 'https://github.com/brodyd795/secret-message',
		technologies: ['Next.js', 'Tailwind CSS', 'MySQL'],
		description: 'In case you ever need to share your Netflix password.'
	},
	{
		name: 'Covid-19 vaccine appt finder',
		link: 'https://github.com/brodyd795/covid-vaccine-appointment-notifier',
		technologies: ['Node.js', 'Twilio', 'Cheerio'],
		description:
			'Back when appointments were hard to find. Alerted users of open slots in their area every few minutes.'
	},
	{
		name: 'Hy-Vee Aisles Online',
		link: 'https://hy-vee.com/aisles-online',
		technologies: ['Next.js!'],
		description:
			"Hy-Vee's e-commerce platform. Making customers' lives better every day. A team effort, for sure!"
	}
];
