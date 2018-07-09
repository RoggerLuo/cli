#!/usr/bin/env node
 console.log('Hello, world!')
 var shell = require('shelljs');
 var program = require('commander')
// co = require('co');

// const appInfo = require('./../package.json'),
//   asyncFunc = require('./../common/asyncfunc.js');

program.allowUnknownOption();
// // program.version(appInfo.version);
program.version('0.0.5')

program
    .command('init')
    .description('初始化当前目录文件')
    .action(function(){
        console.log('start..')
        if (!shell.which('git')) {
          shell.echo('Sorry, this script requires git');
          shell.exit(1);
        }
        shell.echo('下载数据...')
        shell.exec('git clone https://github.com/RoggerLuo/react-scaffold.git')
        shell.cp('-R', 'react-scaffold/', './');

        shell.exit(1);

    })