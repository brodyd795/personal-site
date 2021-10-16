import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
	testEnvironment: 'jsdom',
	setupFiles: ['./jest.setup.ts']
};
export default config;
