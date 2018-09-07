#!/usr/bin/env node
const params = require('commander');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const package = require('./package.json');
const copydir = require('copy-dir');

params.version(package.json)
    .option('-d, --dir [directory]', 'The directory to save the project','.')
    .option('-n, --name [name]', 'The project name','express-tpl')
    //.option('-p, --package [pacakge]','The package you want to use')
    .parse(process.argv);

let dst = path.resolve(params.dir);
if (!fs.existsSync(dst)) {
    console.warn('The config file %s does not exists.',params.config);
    process.exit();
}
dst = path.join(dst,params.name);
if (fs.existsSync(dst)) {
    console.warn('The current folder has exists',dst);
}

const tplStr = fs.readFileSync(path.join(__dirname, './tpl/package.json.ejs'),{encoding:'utf-8'});
const outStr = ejs.render(tplStr,{packageName:params.name});
const src = path.join(__dirname,'./tpl');
copydir.sync(src,dst,function(stat,filepath,filename) {
    if (filename === 'package.json.ejs' || filename === 'package.json') {
        return false;
    }
    return true;
},function(err) {
    if (err) {
        return console.error('copy error:',err);
    }
});
fs.writeFileSync(path.join(dst,'./package.json'),outStr);


