module.exports = {
  setupFiles: ['<rootDir>/enzyme.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
