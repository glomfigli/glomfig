import type {Config} from '@jest/types';


const config: Config.InitialOptions = {
  transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
  verbose: true,
  testEnvironment: 'node',
  transform: {
  "^.+\\.tsx?$": "ts-jest"
}
  
}
export default config;