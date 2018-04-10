// ��gulp����ִ�����̣���webpack���������õ�����
var gulp = require('gulp');
// ɾ���ļ���Ŀ¼
var del = require('del');
// ��˳��ִ��
var gulpSequence = require('gulp-sequence');
// ����webpack�ı���ģ��
var webpack = require("webpack");
// ����wbpack�������ļ�
var webpackConfig = require("./webpack.publish.config.js");

gulp.task('default',['sequence'], function() {
    console.log("��Ŀ�����ɹ�");
});

// ���̿��ƣ�ִ�������˳��
gulp.task('sequence', gulpSequence('clean','webpack'));

// ɾ���ļ����ļ���
gulp.task('clean', function(cb) {
    //del('dist);// ���ֱ�Ӹ�dist��Ŀ¼����Ŀ������˳�����������ᱨ������Ҫд�ĸ���ϸһЩ
    del(['dist/*.js','dist/*.css','dist/images','dist/*.html']);
    setTimeout(function(){
        return cb();
    },3000)

});


//дһ��������gulp��ִ��webpack�Ĺ���
// gulp �����������̲��ֵĲ�����webpack������ģ��ϵͳ�����÷��빤��
gulp.task('webpack', function(cb) {
    setTimeout(function(){
        // ִ��webpack�Ĺ�������
        webpack(webpackConfig, function (err, stats) {
            if (err){
                console.log("��������ʧ��");
            }else{
                cb();
            }

        });
    },3000)
});