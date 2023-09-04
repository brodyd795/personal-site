import '@testing-library/cypress/add-commands';

declare global {
	namespace Cypress {
		interface Chainable {
			addToReadingList(url: string): void;
			deleteFromReadingList(url: string): void;
		}
	}
}

export {};
