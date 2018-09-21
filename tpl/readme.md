# 模板项目

## 1. 初始化
以下两组命令可以快速在本地启动当前项目：
### 1.1 在命令行中启动
```shell
cp config.example.json config.json
cnpm install
npm start
```
### 1.2 通过 pm2 启动
```shell
cp config.example.json config.json
cp process.example.json process.json
cnpm install
pm2 startOrReload process.json --env production
```

## 2. 架构设计

项目中 http 请求的数据流图如下：

http 请求 -> requestRecordFilter (日志记录) -> bodyParser (POST 解析) -> requestValidator (请求参数校验) -> 路由 -> 静态文件映射 -> 错误捕获


## 3. 测试

mocha 测试文件位于 src/test/mocha 目录下，运行如下命令开始测试：

```
npm test
```

## 4. 部署
目录中 Makefile 文件已经将常用的命令进行了封装。  
项目使用 pm2 进行部署，初始化时需要拷贝配置文件，在项目目录中执行 `make config` 来拷贝配置文件，执行 `make run` 会 `启动/重启` 当前项目。  

为了同一套代码在不同环境上运行，在 deploy 文件夹下会放置不同环境的配置文件，同时在不同环境上拉取的 git 分支是不同的，在部署过程中根据当前环境变量 GIT_BRANCH_FOR_MAKE 来区分不同环境，具体对应情况如下：  

| GIT_BRANCH_FOR_MAKE | 配置文件前缀 | 说明     |
| ------------------- | ------------ | -------- |
| development         | development. | 开发环境 |
| master              | test.        | 测试环境 |
| production          | production.  | 正式环境 |

例如对于开发环境，在 deploy 文件夹中对应的配置文件为 development.config.json 和 development.process.json。`make config` 命令正式根据这个规律进行初始化，将 deploy 文件夹下的配置文件拷贝到上层目录，且重命名为 config.json 和 process.json。

同时在文件夹 src/test/config 中同样包含三个环境的配置文件，配置的前缀跟 deploy 文件下的文件一致。

平常更新项目时，执行 `make` 可以从 git 拉取最新代码并且重启；执行 `make grace` 会拉取代码，并且跑单元测试，在单元测试运行成功后才会进行重启。 如果当前更新中包含配置文件更新，需要先执行 `make pull` 拉取最新代码，然后执行 `make config` 更新配置文件，最后执行 `make grace` 跑测试用例，并且重启；或者你可以使用 `make config-grace` 来批量完成上述动作。