export interface IProject {
	name: string;
	link: string;
	technologies: string[];
}

export const projects: IProject[] = [
	{
		name: 'Accounting',
		link: 'https://github.com/brodyd795/accounting',
		technologies: ['Next.js', 'MySQL', 'Styled Components']
	},
	{
		name: 'Course Website',
		link: 'https://github.com/brodyd795/course-website',
		technologies: ['React', 'Express', 'Bootstrap']
	},
	{
		name: '#100DaysOfCode',
		link: 'https://github.com/brodyd795/100-days-of-code',
		technologies: ['Vanilla HTML, CSS, & JS']
	},
	{
		name: 'Secret message app',
		link: 'https://github.com/brodyd795/secret-message',
		technologies: ['Next.js', 'Tailwind CSS', 'MySQL']
	},
	{
		name: 'Covid-19 vaccine appt finder',
		link: 'https://github.com/brodyd795/covid-vaccine-appointment-notifier',
		technologies: ['Node.js', 'Twilio', 'Cheerio']
	},
	{
		name: 'Hy-Vee Aisles Online',
		link: 'https://hy-vee.com/aisles-online',
		technologies: ['Next.js!']
	}
];
