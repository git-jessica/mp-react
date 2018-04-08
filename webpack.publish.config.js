/**
 * Created by sky on 2018/4/7.
 */
var path = require('path');

module.exports = {
    //����ļ�
    entry: path.resolve(__dirname,'src/js/app.js'),

    //�������
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // ��������ƥ���ļ�·���������˼��ƥ�� js ���� jsx
                loader: 'babel',// ����ģ�� "babel" �� "babel-loader" ����д
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css'
            } // Run both loaders
        ]
    }
};
