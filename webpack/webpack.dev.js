const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common,{
    output:{
          path: path.resolve(__dirname, '../src/public'),
        //publicPath: '/'
    },
    devtool: 'eval',
    mode: 'development',
    devServer: {
        historyApiFallback: true,
       
    }

})