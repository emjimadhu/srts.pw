module.exports = {
  name: 'server-core-typeorm',
  preset: '../../../../jest.config.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$':  'ts-jest' 
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../../coverage/libs/server/core/typeorm'
};
