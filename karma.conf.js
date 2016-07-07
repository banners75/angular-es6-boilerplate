var webpackConfig = require("./webpack.config.js");
webpackConfig.entry = {};
webpackConfig.devtool = "inline-source-map";

module.exports = function (config) {
    config.set({
        browsers: ["Chrome"],
        frameworks: ["jasmine"],
        files: [
            "tests/tests.js",
            "tests/**/*.spec.js"
        ],
        preprocessors: {
            'tests/tests.js': ["webpack", "sourcemap"],
            'tests/**/*.spec.js': ["webpack", "sourcemap"]
        },

        webpack: webpackConfig,
        singleRun: false,
        reporters: ["spec"]
});
};