const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const configData = require('./src/config/Config.json');
const constant = require('./src/config/Constants.json');

module.exports = {
    "devServer": {
        "port": 5000,
        "contentBase": "./dist",
        "hot": true
    },
    "entry": "./src/index.jsx",
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": ["babel-loader"]
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": ["eslint-loader"]
            },
            {
                "test": /\.css$/,
                "use": [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            }
        ]
    },
    "resolve": {
        "extensions": [
            "*",
            ".js",
            ".jsx"
        ]
    },
    "output": {
        "path": `${__dirname}/dist`,
        "publicPath": "/",
        "filename": "bundle.js"
    },
    "plugins": [
        new webpack.DefinePlugin({
            CONFIG: JSON.stringify(configData),
            CONSTANT: JSON.stringify(constant)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
    ]
};