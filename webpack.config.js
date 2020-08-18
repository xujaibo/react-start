/**
 * @author: 徐家波
 * @create: 2020/8/17 21:13
 * @version: 1.0
 * @email: xujp@oceansoft.com
 */
const path = require('path');
const HtmlWebpackPlugin = require('HtmlWebpackPlugin')

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'App.js'
    },
    plugins: [new HtmlWebpackPlugin()]
};
