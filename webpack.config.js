"use strict";

module.exports = {
    entry: "./app/app.module.js",
    output: {
        path: "./dist/",
        filename: "[name].js",
        sourceMapFileName: "[file].map"
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: "html-loader"
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader?sourceMap"
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    resolve: {
        extensions: ["",".js",".es6"]
    },
    devtool: "source-map"
};
