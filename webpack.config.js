var webpack = require('webpack');


module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        './src/app.js'
    ],
    output: {
        path: __dirname + '/public/',
        filename: 'app.js',
        publicPath: '/public/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: [
            '',
            '.js',
            '.json',
            '.styl'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel-loader'
                ]
            }
        ]
    },
    modules: 'common'
};
