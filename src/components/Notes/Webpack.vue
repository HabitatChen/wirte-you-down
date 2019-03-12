<template>
  <div class="wrapper">
    <link href="http://statics.1024tools.com/css/markdown/github.css" rel="stylesheet" />
    <h3 id="webpack">Webpack</h3>
    <p>1.什么是webpack</p>
    <p>2.webpack有什么用</p>
    <p>3.webpack怎么用</p>
    <pre><code>1.基本概念
2.环境配置和简单打包
3.如何使用配置文件打包(npm run dev)
4.出入口的进阶用法(entry,output)
5.配置webpack的devServer(devServer)
6.如何加载css,scss,图片，字体等文件(loader)
7.使用babel解析js(babeljs)
8.加载第三方js
9.插件：自动生成HTML，提取分离CSS，压缩优化CSS
10.拷贝静态文件
11.清除文件(去除hash文件)
12.优化解析效率等用法之后补充
</code></pre><p>4.webpack和其他打包玩意有什么不同</p>
    <p>5.webpack进阶用法</p>
    <p>6.vue中的webpack解析(我不会，但是需要切实理解一下，才能很好的向vue过渡)</p>
    <h4 id="webpack-">webpack 是什么？</h4>
    <p>假设，我们有一个XXX的生产车间，现在使用流水化的作业，每个工人各司其职生产的各个部件，那么所有的部件生产
      完成的时候是这件XXX生产的完成的时候么？答案肯定不是，还需要把这些东西组装成成品。<br>
      再假如，现在有一个黑盒子，你只需要把所有生产完成的部件，全部丢进去，最后成品就能出来了。我私以为，这样的一个黑盒子就是
      我所接触到的ewbpack。</p>
    <pre><code>本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。
当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，
其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
</code></pre><p>简单来说，webpack是一个JavaScript应用程序的打包器，打包之后让ES5，ES6的语法能被不同的浏览器识别，而且体积更小，
    让访问的速度更效率。</p>
    <h4 id="webpack-">webpack 有什么用</h4>
    <p>模块化打包 </p>
    <p>=&gt; 体积更小</p>
    <p>=&gt; 兼容性更好（各个浏览器都能访问）</p>
    <p>=&gt; 各个语法都能使用（让你使用熟悉的开发环境以及拓展语言Scss,TS）</p>
    <h4 id="webpack-">webpack 怎么使用</h4>
    <p>1.基本概念 <a href="https://www.webpackjs.com/concepts/">https://www.webpackjs.com/concepts/</a></p>
    <p>2.环境配置和简单打包</p>
    <pre><code>1.安装nodejs  https://nodejs.org/ja/
2.创建package.json文件
    npm init
    npm init -y
3.安装webpack
    1.本地安装(推荐本地安装，因为防止webpack版本不同时的不同配置导致一些问题)
        npm install webpack --save-dev
        npm install webpack-cli
    2.全局安装
        npm install webpack webpack-cli -g(--global)
4.打包
    默认 entry为 src/index.js
    默认 output 为 dist/main.js

    打包 webpack --mode development 开发环境
         webpack --mode production 生产环境

    打包时，需要创建一个webpack.config.js文件规定，webpack是以什么方式执行。

    webpack.config.js
    // 首先引入一个库，详解官网
    const path = require(&quot;path&quot;)

    module.exports = {
        entry: &#39;./src/index.js&#39;,  // 你想要打包的js的入口文件在哪个地方
        output: {
            path: path.resolve(__dirname, &#39;dist&#39;), // __dirname: 当前模块的目录名称; 然后创建一个dist目录
            filename: &#39;main.js&#39; // 导出的文件叫什么名字
        }
    }

    然后在package.json中的script写入

    &quot;dev&quot;: &quot;webpack --mode development&quot; // 使用npm run dev 就可以利用开发模式打包文件
    &quot;build&quot;: &quot;webpack --mode production&quot;/ 使用npm run build 就可以利用开发模式打包文件

    最后在命令行输入  npm run dev 就会在当前目录下输出一个dist文件，并在dist文件中生成一个main.js文件

为什么webpack打包需要一个package.json文件？

因为一个项目的描述信息都放在package.json文件，不是webpack需要package.json文件，而是创建项目时都需要，让你更好的管理
你的项目
</code></pre>
    <img src="../../assets/pictures/npm-run-dev.png" alt="">
    <p>2.出入口的进阶用法</p>
    <pre><code>(1)单入口
    单入口单文件：
        entry: &#39;./src/index.js&#39;
    单入口多文件：(多个文件打包到一个bundle.js中，写成数组)
        entry: [&#39;./src/index1.js&#39;, &#39;./src/index2.js&#39;]
(2)多入口(不是很理解)
    例如：
        Entry :{
            pageOne: ‘./src/pageOne/index.js’.
            pageTwp: ‘./src/pageTwo/inddex    ’
        }
(3)单出口
        Output: {
            Path: path.resolve(__dirname, ‘dist’),
            Filename: ‘bundle.js’
        }
(4)多出口 (都干到一个[name].js文件中)
        output: {
            Path: path.resolve(__diename, ‘dist’),
            Filename: ‘[name].js’
        }
</code></pre><p>4.配置webpack的devServer</p>
    <p>编写一个devServer使得让项目能够在本地预览</p>
    <pre><code>1.了解webpack-dev-server
    Webpakc-dev-server是用来配置本地服务器的，使用它可以为web pack打包生成的资源文件提供web服务
    两个功能：
        1.为静态文件提供web服务(将webpack生成的文件部署到本地服务器上)
        2.自动刷新和热替代HMR(自动编译)
2.如何使用
    1.安装  webpack-dev-server
        npm i webpack-dev-server --save-dev
    2.配置webpack.config.js文件
        devServer: {
            contentBase: &#39;./build&#39;, // 服务器访问当根本路径
            Host: &#39;localhost&#39;, // 服务器的ip地址
            Post： 8080， // 端口号
            Open： false // 是否自动打开
        }
    3.配置package.json 使得能够开启服务器
        &quot;script&quot;: {
            &quot;start&quot;: &quot;npm run dev&quot;; // 或者把下面；后的内容直接写在这里
            &quot;dev&quot;: &quot;webpack --mode development;webpack-dev-server --mode development&quot;
        }
</code></pre><p>5.loader 详解</p>

  </div>
</template>

<script>
  export default {
    name: "Webpack.vue"
  }
</script>

<style scoped>
  @import "../../assets/css/markdown.css";
  .wrapper {
    width: 100%;
    height: 100%;
  }
</style>
