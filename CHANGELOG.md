# v0.9.0

## 优化

1. 升级 mongoose 到 5.12.0
2. 升级 @yunnysunny/request-logging 到 0.11.1
# v0.8.1
## 修正

1. 修正 npm start 命令找不到的问题。

## 优化

1. 更新 eslint 配置文件。

# v0.8.0
## 改进
1. 崩溃时级联清空日志缓冲区。
2. 更改入口文件后缀。
3. node-slogger 升级到 2.2.0 版本。

## 增加

1. 增加 ES2018 语法支持。

# v0.7.0
## 改进
1. eslint 中禁用 console 调用

# v0.6.0
## 改进
1. 将包管理工具由 cnpm 换为 yarn。
2. 升级依赖包 `@yunnysunny/request-logging` 到 0.11.0，升级 `config-settings` 到 1.0.0。


# v0.5.3
## 改进
1. 重命名 gitignore 文件，防止 npm publish 的时候不提交此文件的问题。

# v0.5.2
## 改进
1. 忽略文件中增加若干文件夹。

# v0.5.1
## 修正
1. 可执行文件换行改为 Linux 格式，解决在 Linux 执行失败的问题。

# v0.5.0
## 增加
1. 增加 deploy 文件夹。

# v0.4.6
## 改进
1. 升级 @yunnysunny/request-logging 到 [0.8.0](https://github.com/yunnysunny/request-log/blob/master/CHANGELOG.md#v080).

# v0.4.5
## 改进
1. 升级 @yunnysunny/request-logging 到 [0.7.0](https://github.com/yunnysunny/request-log/blob/master/CHANGELOG.md#v070).
2. 升级 node-slogger 到 [2.0.0](https://github.com/yunnysunny/slogger/blob/master/changelog.md#v200).
3. 升级 validator-param 到 [0.4.1](https://github.com/yunnysunny/validator-param/blob/master/changelog.md#v041).
4. 升级 express 到 [4.17.1](https://github.com/expressjs/express/blob/master/History.md#4171--2019-05-25).

# v0.4.4
## 改进
1. 升级  @yunnysunny/request-logging 到 [0.5.2](https://github.com/yunnysunny/request-log/blob/master/CHANGELOG.md#v052).

# v0.4.3
## 修正
1. 日志输出改为延迟打印

# v0.4.2
## 修正
1. 升级 @yunnysunny/request-logging 到 [0.5.0](https://github.com/yunnysunny/request-log/blob/master/CHANGELOG.md#v050)
2. 修正 -V 参数不打印版本号的问题

# v0.4.1
## 修正
1. 升级 node-slogger 到 [1.0.2](https://github.com/yunnysunny/slogger/blob/master/changelog.md#v102)
2. 升级 @yunnysunny/request-logging 到 [0.4.0](https://github.com/yunnysunny/request-log/blob/master/CHANGELOG.md#v040)

# v0.4.0
## 增加
1. 模板中增加 Makefile 文件用于部署
2. 模板中增加 pm2 的配置文件 process.example.json
3. 命令行中参数 -d 指定的目录不存在时会级联创建目录，-a 指定的目录存在时，会退出当前进程

# v0.3.0
## 增加
1. 增加包 [@yunnysunny/request-logging]((https://www.npmjs.com/package/@yunnysunny/request-logging) 依赖

# v0.2.1
## 修正
1. 升级 config-settings 到 0.2.1

# v0.2.0
## 增加
1. 添加包 [config-settings](https://www.npmjs.com/package/config-settings) 依赖

# v0.1.0
## 修正
1. 无法生成可执行程序的bug

# v0.0.1
## 增加
1. 项目初始化