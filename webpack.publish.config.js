var path = require('path');
var webpack=require('webpack');

// 提取css文件的插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// 自动生成index页面
var HtmlWebpackPlugin = require('html-webpack-plugin');

//
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
            },{
                test:/\.css$/,
                //loader: 'style!css'
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("app.css"),
        // 自动生成html插件
        new HtmlWebpackPlugin({
            template: './src/template.html',
            htmlWebpackPlugin: {
                "files": {
                    "css": ["app.css"],
                    "js": ["vendors.js","bundle.js"]
                }
            },
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        // 定义生产环境变量，node自动优化项目代码
        new webpack.DefinePlugin({
            //去掉react中的警告，react会自己判断
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    ]
};
