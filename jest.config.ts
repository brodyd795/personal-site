import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
	testEnvironment: 'jsdom',
	setupFiles: ['./jest.setup.ts'],
	moduleNameMapper: {
		'^.+\\.(css)$': '<rootDir>/test/mocks/cssMock.ts',
		'^.+\\.(jpg)$': '<rootDir>/test/mocks/fileMock.ts'
	}
};
export default config;
