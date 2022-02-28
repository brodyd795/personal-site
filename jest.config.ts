import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
	roots: ['<rootDir>'],
	testEnvironment: 'jsdom',
	setupFiles: ['./jest.setup.tsx'],
	moduleNameMapper: {
		'^.+\\.(css)$': '<rootDir>/test/mocks/cssMock.ts',
		'^.+\\.(jpg)$': '<rootDir>/test/mocks/fileMock.ts',
		'react-markdown': '<rootDir>/test/mocks/react-markdown.tsx'
	},
	testMatch: ['<rootDir>/test/**/*.tsx']
};
export default config;
