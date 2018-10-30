#!/usr/bin/env node
var shell = require('shelljs');
var program = require('commander');
const fs = require('fs')

program.allowUnknownOption();
program.version('1.0.4');

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
        console.log('ok')
        shell.rm('-rf','react-scaffold/.git')
        shell.exec('mv react-scaffold react-app')
        // shell.exec('cp -rf react-scaffold/* ./')
        // shell.rm('-rf','react-scaffold')
        // console.log('建构完成，请手动执行npm install')
        // shell.exec('cd react-app')
        shell.cd('./react-app');
        console.log('安装依赖..')
        shell.exec('npm install')
        console.log('ok')
        console.log('启动开发环境..')
        shell.exec('npm run start')
        shell.exit(1);
    });

program.parse(process.argv); //有这一句才能获得命令行的输入参数
