# myadmin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目搭建

> 项目采用`Webpack`+`Vue-router`的架构方式

1、安装vue-cli

```js
npm install -g vue-cli

```

2、在命令行中初始化项目，我们采用的是`webpack`模板

```js
vue init webpack
```

3、使用`npm install` 安装`package.json`里项目的依赖包。

> 也可用淘宝镜像安装

```js
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

```js
cnpm install
```

## 项目结构

```js
.
|-- build                           // 项目构建(webpack)相关代码
|   |-- build.js                    // 生产环境构建代码
|   |-- check-version.js           // 检查node、npm等版本
|   |-- dev-client.js               // 热重载相关
|   |-- dev-server.js              // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js      // webpack基础配置
|   |-- webpack.dev.conf.js       // webpack开发环境配置
|   |-- webpack.prod.conf.js      // webpack生产环境配置
|-- config                          // 项目开发环境配置
|   |-- dev.env.js                  // 开发环境变量
|   |-- index.js                    // 项目一些配置变量
|   |-- prod.env.js                 // 生产环境变量
|   |-- test.env.js                 // 测试环境变量
|-- src                             // 源码目录
|   |-- components                 // vue公共组件
|   |-- store                       // vuex的状态管理
|   |-- App.vue                    // 页面入口文件
|   |-- main.js                     // 程序入口文件，加载各种公共组件
|-- static                          // 静态文件，比如一些图片，json数据等
|   |-- data                        // 群聊分析得到的数据用于数据可视化
|-- .babelrc                        // ES6语法编译配置
|-- .editorconfig                   // 定义代码格式
|-- .gitignore                      // git上传需要忽略的文件格式
|-- README.md                   // 项目说明
|-- favicon.ico                     //图标
|-- index.html                     // 入口页面
|-- package.json                   // 项目基本信息
```
