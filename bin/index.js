#!/usr/bin/env node
console.log('Hello, world!');
var shell = require('shelljs');
var program = require('commander');
const fs = require('fs')

program.allowUnknownOption();
program.version('0.0.5');

program
    .command('init')
    .description('初始化当前目录文件')
    .action(function(){
        console.log('开始搭建')
        if (!shell.which('git')) {
          shell.echo('先安装git呀,bro');
          shell.exit(1);
        }
        if(fs.existsSync('react-scaffold')){ 
            shell.rm('-rf', 'react-scaffold');            
        }
        console.log('正在从github下载数据')
        shell.exec('git clone https://github.com/RoggerLuo/react-scaffold.git')
        shell.rm('-rf','react-scaffold/.git');
        shell.exec('cp -rf react-scaffold/* ./')
        shell.rm('-rf','react-scaffold')

        console.log('正在执行npm install')
        shell.exec('npm install')
        shell.echo('建构完成，(如果npm安装失败，可以后续自行安装)')
        shell.exit(1);
    });

program.parse(process.argv); //有这一句才能获得命令行的输入参数