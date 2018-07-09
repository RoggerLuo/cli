#!/usr/bin/env node
 // console.log('Hello, world!')
 var shell = require('shelljs');

 const program = require('commander')
// co = require('co');

// const appInfo = require('./../package.json'),
//   asyncFunc = require('./../common/asyncfunc.js');

program.allowUnknownOption();
// program.version(appInfo.version);

program
    .command('init')
    .description('初始化当前目录文件')
    .action(() => {
        console.log('first')
        if (!shell.which('git')) {
          shell.echo('Sorry, this script requires git');
          shell.exit(1);
        }
        shell.exec('git clone https://github.com/RoggerLuo/react-scaffold.git')
        shell.echo('下载数据')
        shell.exit(1);
        
    })