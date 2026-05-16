const path = require("path");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");
const defaultConfig = getDefaultConfig(projectRoot);
const config = {
  watchFolders: [workspaceRoot],
  resolver: {
    ...defaultConfig.resolver,
    nodeModulesPaths: [
      path.resolve(projectRoot, "node_modules"),
      path.resolve(workspaceRoot, "node_modules")
    ],
    unstable_enableSymlinks: true
  }
};

module.exports = withNativeWind(mergeConfig(defaultConfig, config), {
  input: "./global.css"
});
