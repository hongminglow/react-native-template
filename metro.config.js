const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

/**
 * Metro configuration with NativeWind v4 support
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'css'],
    assetExts: ['glb', 'gltf', 'png', 'jpg', 'jpeg', 'svg', 'gif', 'webp', 'mp4', 'mov', 'webm'],
  },
};

module.exports = withNativeWind(
  mergeConfig(getDefaultConfig(__dirname), config),
  {
    input: './global.css',
  },
);
