export interface IProject {
	name: string;
	description: string;
	link: string;
	technologies?: string[];
	image: {
		src: string;
		credit: string;
	};
}

export const projects: IProject[] = [
	{
		name: 'Accounting',
		description: 'Personal accounting app',
		link: 'https://github.com/brodyd795/accounting',
		technologies: ['Next.js', 'MySQL', 'Styled Components'],
		image: {
			src: '/project-images/accounting.jpg',
			credit: '@kellysikkema'
		}
	},
	{
		name: 'Course Website',
		description: 'Website for my students',
		link: 'https://github.com/brodyd795/course-website',
		technologies: ['React', 'Express', 'Bootstrap'],
		image: {
			src: '/project-images/accounting.jpg',
			credit: '@kellysikkema'
		}
	},
	{
		name: '#100 Days of Code',
		description: 'My first round!',
		link: 'https://github.com/brodyd795/100-days-of-code',
		technologies: ['Vanilla HTML, CSS, & JS'],
		image: {
			src: '/project-images/accounting.jpg',
			credit: '@kellysikkema'
		}
	},
	{
		name: 'Secret Message App',
		description: 'Send secret messages securely',
		link: 'https://github.com/brodyd795/secret-message',
		technologies: ['Next.js', 'Tailwind CSS', 'MySQL'],
		image: {
			src: '/project-images/accounting.jpg',
			credit: '@kellysikkema'
		}
	},
	{
		name: 'COVID-19 vaccine appt finder',
		description: 'Notified me of available appointments',
		link: 'https://github.com/brodyd795/covid-vaccine-appointment-notifier',
		technologies: ['Node.js', 'Twilio', 'Cheerio'],
		image: {
			src: '/project-images/accounting.jpg',
			credit: '@kellysikkema'
		}
	},
	{
		name: 'Hy-Vee Aisles Online',
		description: 'A team effort!',
		link: 'https://hy-vee.com/aisles-online',
		image: {
			src: '/project-images/accounting.jpg',
			credit: '@kellysikkema'
		}
	}
];
