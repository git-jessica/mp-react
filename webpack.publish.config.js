/**
 * Created by sky on 2018/4/7.
 */
var path = require('path');
var webpack=require('webpack');

module.exports = {
    //入口文件
    entry: {
        app:path.resolve(__dirname,'src/js/app.js'),
        vendors:['react','react-dom']
    },
        //path.resolve(__dirname,'src/js/app.js'),


    //输出配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
                query: {
                    presets: ['es2015', 'react'],
                    compact:false
                }
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    plugins: [new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),]
};
