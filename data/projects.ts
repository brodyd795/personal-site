export interface IProject {
	name: string;
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
		link: 'https://github.com/brodyd795/accounting',
		technologies: ['Next.js', 'MySQL', 'Styled Components'],
		image: {
			src: '/project-images/accounting.jpg',
			credit: '@kellysikkema'
		}
	},
	{
		name: 'Course Website',
		link: 'https://github.com/brodyd795/course-website',
		technologies: ['React', 'Express', 'Bootstrap'],
		image: {
			src: '/project-images/accounting.jpg',
			credit: '@kellysikkema'
		}
	},
	{
		name: '#100DaysOfCode',
		link: 'https://github.com/brodyd795/100-days-of-code',
		technologies: ['Vanilla HTML, CSS, & JS'],
		image: {
			src: '/project-images/accounting.jpg',
			credit: '@kellysikkema'
		}
	},
	{
		name: 'Secret message app',
		link: 'https://github.com/brodyd795/secret-message',
		technologies: ['Next.js', 'Tailwind CSS', 'MySQL'],
		image: {
			src: '/project-images/accounting.jpg',
			credit: '@kellysikkema'
		}
	},
	{
		name: 'Covid-19 vaccine appt finder',
		link: 'https://github.com/brodyd795/covid-vaccine-appointment-notifier',
		technologies: ['Node.js', 'Twilio', 'Cheerio'],
		image: {
			src: '/project-images/accounting.jpg',
			credit: '@kellysikkema'
		}
	},
	{
		name: 'Hy-Vee Aisles Online',
		link: 'https://hy-vee.com/aisles-online',
		technologies: ['Next.js'],
		image: {
			src: '/project-images/accounting.jpg',
			credit: '@kellysikkema'
		}
	}
];
