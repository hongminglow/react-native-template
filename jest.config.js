module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-gesture-handler|react-native-reanimated|@react-navigation|@rn-primitives|nativewind|react-native-css-interop)/)',
  ],
};
