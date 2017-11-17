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

## 引入`Element-ui`

```js
npm install element-ui --save
```

在main.js中写入以下内容：

```js
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App }
})
```

> 设置 `Vue.config.productionTip = false` 来关闭生产模式下给出的提示

## `vue` 组件按需引用，`vue-router`懒加载，`vue`打包优化，加载动画

当SPA变得复杂的时候，使用`vue-cli`构建的项目，在默认情况下，执行`npm run build`**会将所有`js`代码打包成一个整体**就会变得**臃肿**，从而影响页面的加载。为此，我们把不同路由对应的组件，**分割成不同的代码块**，然后路由被访问的时候加载相应的组件而不是全部组件，这样效率就会提高。

结合vue-router的[异步组件](https://router.vuejs.org/zh-cn/advanced/lazy-loading.html)和webpack的[代码分离](https://doc.webpack-china.org/guides/code-splitting/)就可以实现路由组件的懒加载。

```js
//正常写法
import login from '@/component/login';
import manage from '@/page/manage';
import home from '@/page/home';
import addShop from '@/page/addShop';
import addGoods from '@/page/addGoods';
```

```js
// 路由组件的懒加载
const login = r => {
  require.ensure([],() => {
    r(require('@/component/login.vue')),'login'
  })
};
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const addShop = r =>require.ensure([], () => r(require('@/page/addShop')),'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')),'addGoods');
```