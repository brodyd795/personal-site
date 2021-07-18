export interface IProject {
	name: string;
	description: string;
	link: string;
}

export const projects: IProject[] = [
	{
		name: 'Accounting',
		description: 'Personal accounting app',
		link: 'https://github.com/brodyd795/accounting'
	},
	{
		name: 'Course Website',
		description: 'Website for my students',
		link: 'https://github.com/brodyd795/course-website'
	},
	{
		name: '#100 Days of Code',
		description: 'My first round!',
		link: 'https://github.com/brodyd795/100-days-of-code'
	}
];
