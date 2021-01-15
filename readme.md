# express-tpl

[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]
[![node version][node-image]][node-url]

[npm-url]: https://npmjs.org/package/express-tpl
[travis-image]: https://img.shields.io/travis/yunnysunny/express-tpl.svg?style=flat-square
[travis-url]: https://travis-ci.com/yunnysunny/express-tpl
[david-image]: https://img.shields.io/david/yunnysunny/express-tpl.svg?style=flat-square
[david-url]: https://david-dm.org/yunnysunny/express-tpl
[node-image]: https://img.shields.io/badge/node.js-%3E=_6-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/

[![NPM](https://nodei.co/npm/express-tpl.png?downloads=true)](https://nodei.co/npm/node-express-tpl/)  

一个生成 express 项目脚手架的命令行工具。

## 安装

npm install express-tpl -g

## 使用

```
  Usage: express-tpl [options]

  Options:

    -V, --version          output the version number
    -d, --dir [directory]  The directory to save the project (default: .)
    -n, --name [name]      The project name (default: express-tpl)
    -h, --help             output usage information
```
## 已知问题

1. 由于 npm publish 发布时不能携带 .gitignore 文件，所以在模板中将其重命名为 `rename.gitignore` ，你需要手动将其改名。

## 协议

[MIT](LICENSE)
