export interface IProject {
	name: string;
	link: string;
	technologies: string[];
	tldr: string;
	description: string;
}

export const projects: IProject[] = [
	{
		name: 'Accounting',
		link: 'https://github.com/brodyd795/accounting',
		technologies: ['Next.js', 'MySQL', 'Styled Components'],
		tldr: "Custom-tailored for managing my family's finances. You know, accounting stuff.",
		description:
			"I've gone through multiple iterations of this project, learning more and more as I go. It started in Python with Google Sheets as the backend and has now evolved into a single-page Next app powered by automated email scraping and categorization."
	},
	{
		name: 'Course Website',
		link: 'https://github.com/brodyd795/course-website',
		technologies: ['React', 'Express', 'Bootstrap'],
		tldr: 'Custom-made platform for my past students. Included an appointment scheduler, anonymous messaging, automated homework grading, and grade reports.',
		description:
			"I've gone through multiple iterations of this project, learning more and more as I go. It started in Python with Google Sheets as the backend and has now evolved into a single-page Next app powered by automated email scraping and categorization."
	},
	{
		name: '#100DaysOfCode',
		link: 'https://github.com/brodyd795/100-days-of-code',
		technologies: ['Vanilla HTML, CSS, & JS'],
		tldr: 'Learned the basics of web dev. Would 1000% recommend to anyone looking to get their feet web in programming!',
		description:
			"I've gone through multiple iterations of this project, learning more and more as I go. It started in Python with Google Sheets as the backend and has now evolved into a single-page Next app powered by automated email scraping and categorization."
	},
	{
		name: 'Secret message app',
		link: 'https://github.com/brodyd795/secret-message',
		technologies: ['Next.js', 'Tailwind CSS', 'MySQL'],
		tldr: 'In case you ever need to share your Netflix password.',
		description:
			"I've gone through multiple iterations of this project, learning more and more as I go. It started in Python with Google Sheets as the backend and has now evolved into a single-page Next app powered by automated email scraping and categorization."
	},
	{
		name: 'Covid-19 vaccine appt finder',
		link: 'https://github.com/brodyd795/covid-vaccine-appointment-notifier',
		technologies: ['Node.js', 'Twilio', 'Cheerio'],
		tldr: 'Back when appointments were hard to find. Alerted users of open slots in their area every few minutes.',
		description:
			"I've gone through multiple iterations of this project, learning more and more as I go. It started in Python with Google Sheets as the backend and has now evolved into a single-page Next app powered by automated email scraping and categorization."
	},
	{
		name: 'Hy-Vee Aisles Online',
		link: 'https://hy-vee.com/aisles-online',
		technologies: ['Next.js!'],
		tldr: "Hy-Vee's e-commerce platform. Making customers' lives better every day. A team effort, for sure!",
		description:
			"I've gone through multiple iterations of this project, learning more and more as I go. It started in Python with Google Sheets as the backend and has now evolved into a single-page Next app powered by automated email scraping and categorization."
	}
];
