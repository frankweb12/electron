const Module = require('module');

module.exports = (paths) => {
  const nodeModulePaths = Module._nodeModulePaths;
  Module._nodeModulePaths = (from) => {
    return nodeModulePaths(from).concat(paths);
  };
};
