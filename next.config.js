module.exports = {
  webpack(config) {
    config.externals = {
      jquery: "jQuery"
    };
    return config;
  }
};
