import {projects} from '../../data/projects';

const baseUrl = 'https://dev-brody.dingel.dev';

describe('Navigation', () => {
	it('should show the header', () => {
		cy.visit(baseUrl);

		cy.get('h1').contains('Brody Dingel');
		cy.get('h2').contains('Full-stack software engineer at Hy-Vee');
	});

	it('should show projects', () => {
		const {name, link, tldr} = projects[0];

		cy.visit(baseUrl);

		cy.findByText(name);
		cy.findByText(tldr);
		cy.get(`a[href*="${link}"]`);
	});

	it('should show reading list items', () => {
		const testUrl = 'https://kentcdodds.com/blog/useeffect-vs-uselayouteffect';
		cy.deleteFromReadingList(testUrl);
		cy.addToReadingList(testUrl);

		cy.visit(baseUrl);
		cy.get(`a[href*="${testUrl}"]`);
	});

	it('should have a functional contact form', () => {
		cy.visit(baseUrl);

		cy.get('input[name=name]').type('Cypress User');
		cy.get('input[name=email]').type('brodydingel@gmail.com');
		cy.get('textarea[name=message]').type('This is a Cypress test!');

		cy.findByLabelText('Send message').click();

		cy.findByText('Thanks for reaching out!!');
		cy.findByText("I'll be in touch.");
	});
});
