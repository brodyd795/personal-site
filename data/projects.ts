export interface IProject {
	name: string;
	link: string;
	technologies: string[];
	tldr: string;
	description: string;
}

export const projects: IProject[] = [
	{
		name: 'Bestow Life Insurance Platform',
		link: 'https://bestow.com',
		technologies: ['Remix', 'TypeScript'],
		tldr: 'The future of life insurance',
		description:
			"Working at Bestow has raised my tech skills by so many levels. I've had the opportunity to think high-level and build software that will scale for years to come, all while diving into the intricacies of JS, TS, React, and the fundamentals of the web deeper than I had ever dreamed."
	},
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
			'This was my first-ever playground for learning real web development. I had a deadline and real users to build new features for. It started out using the Pug templating language, which I eventually re-vamped into React as I was preparing for my first job at Hy-Vee.'
	},
	{
		name: '#100DaysOfCode',
		link: 'https://github.com/brodyd795/100-days-of-code',
		technologies: ['Vanilla HTML, CSS, & JS'],
		tldr: 'Learned the basics of web dev. Would 1000% recommend to anyone looking to get their feet wet in programming!',
		description:
			"Can't speak highly enough of this, given the fundamentals I learned during this challenge. Got the chance to build some simple static sites using the basic HTML, CSS, and JS that I was learning. Everything built on top of this!"
	},
	{
		name: 'Secret message app',
		link: 'https://github.com/brodyd795/secret-message',
		technologies: ['Next.js', 'Tailwind CSS', 'MySQL'],
		tldr: 'In case you ever need to share a secret.',
		description:
			"This fun challenge helped me learn some basics of encryption, along with some Tailwind CSS and practice using MySQL. I'm no UI/UX expert, but I'm fairly happy with how the design turned out. Spent some considerable effort getting it looking nice on responsive widths, which was a good learning experience."
	},
	{
		name: 'Covid-19 vaccine appt finder',
		link: 'https://github.com/brodyd795/covid-vaccine-appointment-notifier',
		technologies: ['Node.js', 'Twilio', 'Cheerio'],
		tldr: 'Back when appointments were hard to find. Alerted users of open slots in their area every few minutes.',
		description:
			"Had the chance to learn some of the basic functionality of SMS with Twilio, along with some practice with web scraping using Cheerio. This turned into a decent example of an 'MPV' type of project built on a deadline."
	},
	{
		name: 'Hy-Vee Aisles Online',
		link: 'https://hy-vee.com/aisles-online',
		technologies: ['Too many to count!'],
		tldr: "Hy-Vee's e-commerce platform. Making customers' lives better every day. A team effort, for sure!",
		description:
			'Much of the foundation of my learning has occurred while helping build this platform. From gaining experience with enterprise-level Next.js and React, to building out microservices backed by their own databases, to getting it all deployed via a CI/CD pipeline... I learned a lot!'
	}
];
