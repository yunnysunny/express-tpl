# 模板项目

## 初始化

```
cp config.example.json config.json
cnpm install
```

## 架构设计

项目中 http 请求的数据流图如下：

http 请求 -> requestRecordFilter (日志记录) -> bodyParser (POST 解析) -> requestValidator (请求参数校验) -> 路由 -> 静态文件映射 -> 错误捕获


## 测试

mocha 测试文件位于 src/test/mocha 目录下，运行如下命令开始测试：

```
npm test
```
