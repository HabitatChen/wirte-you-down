<template>
  <div class="wrapper">
    <h3 id="ajax">AJAX</h3>
    <p>什么是AJAX？<br></p>
    <ol>
      <li>使用XMlHttpRequest发请求</li>
      <li>服务器返回XML格式的字符串</li>
      <li>JS解析XML，并更新局部页面</li>
    </ol>
    <p>这就用到了AJAX技术。异步的JavaScript和XML。
      请使用原生JS来发送AJAX请求。</p>
    <pre><code>1. 首先，使用自己的电脑开启一个服务器，服务器地址是localhost:8888
2. 然后浏览器首先去请求服务器，localhost:8888
3. 服务器接受请求之后，因为请求的根路径是 path === &#39;/&#39;，所以服务器认为是向要请求index.html，
然后同步的读取该文件，并将该文件以符合html语法的字符串形式，传送给浏览器。
4. 浏览器在接收到符合html语法的字符串以后进行解析，并渲染到页面上
5. 因为在文档中载入了外部的&lt;scriptt&gt;，而&lt;scirpt&gt;标签也能发送请求，src=&#39;./main.js&#39;，浏览器的http请求会自动忽略前面的 . 号，
去请求当前目录下的 &#39;main.js&#39;
6. 服务器监听到了当 path === &#39;/main.js&#39;，就会fs.readFileSync(&#39;./main.js&#39;)，然后通过response.write()将js文件
以字符串的形式传递出去
7. xml类型 则是通过AJAX请求，同样的去访问服务器中写好的对应路径，然后得到返回的数据，并局部渲染页面的变化。
</code></pre><h5 id="-xml-dom-json-">因为之前的服务器都是返回XML格式，然后通过DOM操作去操作返回的数据，太难受，所以JSON更方便的表示有机构的数据</h5>
    <p>JSON是一门新的语言，是数据格式化语言，而JS是一门变成语言，所以json没有变量一说<br>
      1.string  &quot;string&quot;  VS &#39;string&#39; || &quot;string&quot;<br>
      2.number  same as javascript<br>
      3.bool    same as javascript<br>
      4.null    same as javascript<br>
      6.object(array) {&quot;key&quot;: value}; [&quot;a&quot;, &quot;b&quot;] </p>
    <p>1.json 没有抄袭function and undefined<br>
      2.json 的字符串首位必须是&quot;&quot;</p>
    <p>所以AJAX核心是通过 new XMLHttpRequest()一个对象，然后通过该对象发起请求。注意是向目标服务器发起请求，发起请求，<br>
      并监听响应状态，当响应完成后，获得返回当JSON字符串，并解析成JS对象</p>
    <h4 id="1-xmlhttprequest-">1. 首先配置XMLHttpRequest对象</h4>
    <pre><code>let request = new XMLHttpRequest()
request.open(&#39;方法&#39;, &#39;对应路径&#39;)
request.send()
</code></pre><h4 id="2-onreadystatechange-readystate-4-">2. 同时监听onreadystatechange，当readyState === 4 表示请求响应处理完毕</h4>
    <pre><code>myBtn.addEventListener(&#39;click&#39;, function90 {
    let request = new XMLHttpRequest()
    // 通过监听onreadystatechange事件可以知道readyState的变化
    onreadystatechange = () =&gt; {
        if (readyState === 4) {
            if (statusCode === 200) {
                console.log(request.responseText)
            }
        }
    }
    request.open(&#39;GET&#39;, &#39;/xxx&#39;)
    request.send()
})
</code></pre><h5 id="3-request-responsetext-json-parse-js-">3. 通过request.responseText嫩够拿到响应的第四部分字符串，然后使用JSON.parse()解析成JS对象</h5>
    <pre><code>onreadystatechange = () =&gt; {
        if (readyState === 4) {
            if (statusCode === 200) {
                let res = JSON.parse(request.responseText)
            }
        }
    }
</code></pre><h4 id="-">服务器返回的第四部分始终是字符串，只是符合不同的语法</h4>
    <pre><code>Node.js
response.write(`
  {
      &quot;title&quot;: &quot;hellø&quot;,
      &quot;key&quot;: &quot;value&quot;
  }
`)
</code></pre>
  </div>
</template>

<script>
  export default {
    name: "Ajax.vue"
  }
</script>

<style scoped>
  @import "../../assets/css/markdown.css";
  .wrapper {
    width: 100%;
  }
</style>
