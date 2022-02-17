declare global {
	namespace Cypress {
		interface Chainable {
			addToReadingList(url: string): void;
			deleteFromReadingList(url: string): void;
		}
	}
}

Cypress.Commands.add('addToReadingList', (url: string) => {
	cy.request(
		'POST',
		'/api/controllers/add-to-reading-list',
		JSON.stringify({
			url,
			key: Cypress.env('READING_LIST_EXTENSION_SECRET')
		})
	);
});

Cypress.Commands.add('deleteFromReadingList', (url: string) => {
	cy.request(
		'POST',
		'/api/controllers/delete-from-reading-list',
		JSON.stringify({
			url,
			key: Cypress.env('READING_LIST_EXTENSION_SECRET')
		})
	);
});

export {};
