export interface IProject {
	name: string;
	description: string;
	link: string;
	technologies: string[];
}

export const projects: IProject[] = [
	{
		name: 'Accounting',
		description: 'Personal accounting app',
		link: 'https://github.com/brodyd795/accounting',
		technologies: ['Next.js', 'MySQL', 'Styled Components']
	},
	{
		name: 'Course Website',
		description: 'Website for my students',
		link: 'https://github.com/brodyd795/course-website',
		technologies: ['React', 'Express', 'Bootstrap']
	},
	{
		name: '#100 Days of Code',
		description: 'My first round!',
		link: 'https://github.com/brodyd795/100-days-of-code',
		technologies: ['Vanilla HTML, CSS, & JS']
	}
];
