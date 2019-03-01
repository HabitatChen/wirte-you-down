<template>
  <div class="wrapper">
    <h3 id="jsonp">JSONP</h3>
    <p>和后端打交道，和服务端交互。</p>
    <h4 id="-">什么是数据库</h4>
    <p>1.文件系统就是一个数据库<br>
      2.MySQL也是一个数据库<br></p>
    <p>只要能长久存东西的，就是数据库</p>
    <h4 id="-">用文件存储数据</h4>
    <pre><code>Node.js
if (path === &#39;/pay&#39;) {
    // 首先在文件中存入一个值，然后在Node.js中读取出来
    let account = fs.readFileSync(&#39;./xxx&#39;, &#39;utf8&#39;)
    // 对值进行修改
    let newAccount = account - 1
    // 最后将新值重新写入文件
    fs.writeFileSync(&#39;./xxx&#39;, newAccount)
}
</code></pre><h4 id="form-">form表单发送请求</h4>
    <pre><code>&lt;form action=&#39;/pay&#39; method=&#39;post&#39;&gt;  // 向目标路径为/pay发送请求
  &lt;input type=&#39;text&#39; value=&#39;1&#39;&gt;
  &lt;input type=&#39;submit&#39; value=&#39;付款&#39;&gt;
&lt;/form&gt;
</code></pre><p>缺陷：form表单提交会刷新页面</p>
    <h4 id="-">动态创建图片发送请求</h4>
    <pre><code>JavaScript
btn.addEventListener(&#39;click&#39;, function() {
    let img = document.createElement(&#39;img&#39;)
    img.src = &#39;/pay&#39;
})
// 缺陷：只能发起get请求，而且不知道成功还是失败
</code></pre><h4 id="-script-srj-sever-rendered-javascript-">动态创建script来发送请求 SRJ(sever rendered javascript)</h4>
    <pre><code>JavaScript
// 动态创建的script的src可以不受域名限制，例如引入jQuery&lt;script src=&#39;.....jquery.min.js&#39;&gt;&lt;/script&gt;
btn.addEventListener(&#39;click&#39;, function() {
    let script = document.createElement(&#39;script&#39;)
    script.src = &#39;/pay&#39;
    document.body.appendChild(script) // 一定要把script标签放在body中才能发送请求
    script.onload = function(e) {
        e.currentTarget.remove()
    }
    script.onerror = function(e) {
        e.currentTarget.remove()
    }
})
// 缺陷：页面会增加很多script标签，而且会执行，也不能发送post
</code></pre><h4 id="jsonp-json-pading-">JSONP (json + pading)</h4>
    <p>就是当我去请求另一个服务器的时候，我首先发起请求，并定义好回调函数，服务器只需要调用我的回调函数，并传入参数。<br>
      所以前端在定义回调时，就可以进行下一步的操作。</p>
    <pre><code>JSONP关键语句在于服务端的回调，并返回一个JSON对象
Node.js
response.write(`${query.callbackName}.call(undefined, {
    &quot;success&quot;: true,
    &quot;key&quot;: value
})`)
</code></pre><pre><code>JavaScript
  window.xxx = function() {
      alert(&#39;this is my page&#39;)
    }
    btn.addEventListener(&#39;click&#39;, function() {
      let script = document.createElement(&#39;script&#39;)
      script.src = &#39;/pay?callbackName=xxx&#39;
      document.body.appendChild(script)
      script.onload = function() {
        alert(&#39;hello&#39;)
      }
    })
</code></pre>
    <img src="../../assets/pictures/JSONP.png" alt="">
    <h5 id="jsonp-">JSONP 约定</h5>
    <p>callbackName 统一为 callback</p>
    <p>yyy -&gt; 回调函数名为随机数 jWueryjlksdfiosdfjsdlk()  // Math.random() * 100000 </p>
    <p>调用成功或失败之后在删除这个函数<pre><code>let functionName = &#39;aaa&#39; + Math.random() * 100000
window[functionNmae] = function() {
  // function body
}
script.src = &#39;http://www.baidu.com/pay?callback=&#39; + functionName
</code></pre></p>
    <h5 id="-jquery-jsonp">使用jQuery改写上述的JSONP</h5>
    <pre><code>btn.addEventListener(&#39;click&#39;, function() {
    $.ajax({
        url: &#39;服务端地址&#39;,
        dataType: &#39;jsonp&#39;,
        success: function(res) {
            // res是服务端返回的数据
            // 我们只需要写调用成功之后的执行函数
        }
    })
})
</code></pre>
    <p>jQuery帮我们动态创建了script</p>
    <p>生成随机的函数名</p>
    <p>JSONP 不是 AJAX</p>
    <p>面试题：JSONP 为什么不支持POST？<br>
      因为JSONP是通过动态创建script实现的，而使用script发起请求只能使用GET方法，而不能使用POST。</p>

  </div>
</template>

<script>
  export default {
    name: "JSONP.vue"
  }
</script>

<style scoped>
  @import "../../assets/css/markdown.css";
  .wrapper {
    width: 100%;
  }
</style>
