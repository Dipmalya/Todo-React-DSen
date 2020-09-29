const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
    ]
};