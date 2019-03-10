<template>
  <div class="wrapper">
    <h2 id="coolie-">Coolie与登陆注册</h2>
    <p>cookie session cache-control</p>
    <h4 id="-cookie-">什么是Cookie？</h4>
    <h4 id="-">问题</h4>
    <p>1.我在chrome登录了得到Cookie，用Safari访问，Safari会带上Cookie吗 不会的</p>
    <p>2.Cookie存在哪 ==&gt; Window 存在C盘的一个文件里</p>
    <p>3.Cookie会被用户篡改么？ ==&gt; 会的，所以Session可以防止用户篡改</p>
    <p>4.Cookie的有效期 ==&gt; 默认有效期20分钟，不同浏览器策略不同，后端可以设置过期时间</p>
    <p>5.Cookie遵守通源策略么 ==&gt; 会的</p>
    <p>node.js 中如何获取用户上传的数据</p>
    <pre><code>request.on(&#39;data&#39;, (chunk) =&gt; {
    body.push(chunk)
}).on(&#39;end&#39;, () =&gt; {
    body = Buffer.concat(body).toString();
})
</code></pre><p>这样就可以以字符串的形式获得用户传递的数据</p>
    <h4 id="-"> </h4>
    <p>1.服务器通过Set-Cookie响应头设置Cookie
      2.浏览器得到Cookie之后，每次请求时都会带上Cookie
      3.服务器读取Cooke就能知道用户登入的信息</p>
    <h4 id="session-cookie-">Session 与 Cookie 的关系</h4>
    <p>一般来说Seesion是基于Cookie实现的</p>
    <h4 id="-session-">使用Session保存信息</h4>
    <p>当使用Cookie时，写法如下
      <code>response.setHeader(&#39;Set_Cookie&#39;,</code>sign_in_email=${email}<code>)</code></p>
    <p>然后使用Session，则创建一个随机数来返回。然后让该随机数对应真正当Cookie值</p>
    <pre><code>let sessions = {}

let sessionId = Math.random() * 100000
sessions[sessionId] = email
response.setHeader(&#39;Set-Cookie&#39;, `sign_in_email=${sessionId}`)
</code></pre><p>用一个Sessions当hash表来维护用户信息，返回key作为其Cookie当值，在读取时，去Sessions表里去查询值</p>
    <p>Session是一份内存，</p>
    <p>Cookie</p>
    <p>1.服务器通过Set-Cookie头给客户端一串字符串</p>
    <p>2.客户端每次请求同源服务器时都会带上这个Cookie</p>
    <p>3。服务器在接受到有Cookie头部时，回去数据库做匹配，然后返回用户信息</p>
    <p>4.Cookie默认会在用户关闭页面后失效，而后台代码可以设置Cookie的过期时间</p>
    <p>Session</p>
    <p>1.服务器通过Set-Cookie头给用户返回一个随机数，然后在内存维护一份Sessions表</p>
    <p>2.客户端访问服务器时，服务器读取SessionId</p>
    <p>3.服务器中的Sessions可以读取到所有的用户信息</p>
    <p>4.这块内存就是服务器上的所有session</p>
    <h4 id="localstorage">LocalStorage</h4>
    <p>是浏览器上的hash表
      Application &gt; LocalStorage</p>
    <p>最终是以string的形式存在</p>
    <pre><code>localstorage.setItem(&#39;key&#39;, &#39;value&#39;)
</code></pre><p>localstorage.setItem()</p>
    <p>localstorage.getItem(&#39;key&#39;)</p>
    <p>localstorage.clear()</p>
    <h4 id="localstorage-">LocalStorage的用法</h4>
    <p>存在C盘的一个文件里，可以持久化存储</p>
    <pre><code>let already = localStorage.getItem(&#39;已经提示了&#39;)
if (!already) {
    alert(&#39;nihao&#39;)
    localStorage.setItem(&#39;已经提示了&#39;, true)
}
</code></pre><h4 id="locakstorage-">LocakStorage的特点</h4>
    <p>1.LocalStorage和Http无关</p>
    <p>2.HTTP不会爱上LocalStorage的值</p>
    <p>3.只有相同域名的页面才能互相读取LocalStorage（没有同源那么严格）</p>
    <p>4.每个域名的localstorage最大存储的数据为5Mb左右</p>
    <p>5.用来记录有没有提示过是否提示（不敏感的信息）</p>
    <p>6.LocalStorage永久有效不会过期</p>
    <h4 id="sessionstorage">SessionStorage</h4>
    <p>1234同上</p>
    <p>5.在用户关闭会话时失效</p>
    <h3 id="-">面试相关问题</h3>
    <p>1.cookie 和 session 的关系</p>
    <p>首先，session是基于cookie实现的，cookie是session的基石，session通过set-cookie头来返回sessionId</p>
    <p>2.cookie 和 localStorage的区别</p>
    <p>http 得到cookie之后每次请求都会带上cookie，而http不会带上localstorage</p>
    <p>3.localStorage 和 sessionStorage的区别</p>
    <h4 id="-cookie-session">不通过Cookie实现Session</h4>
    <p>将sessionID作为查询参数，存在localStorage里面，服务器可以通过查询参数获得sesssionId，然后得到用户信息
      sessionStorage会在会话结束之后清空，而localStorage是永久有效的</p>
    <h4 id="http-">http 缓存</h4>
    <p>Cache-Control</p>
    <p>web性能优化</p>
    <p><code>response.setHeader(&#39;Cache-Control&#39;, &#39;max-age=30&#39;)</code></p>
    <h4 id="-">首页为什么不能做缓存？</h4>
    <p>因为首页设置缓存，浏览器就不会向服务器发起请求，如果页面发生更新，就不能获得最新的页面。
      ==&gt; 在html不设置缓存，留一个入口</p>
    <p>如何更新已经缓存的文件？</p>
    <p>让请求的URL的发生变动，例如 /main.js?v2</p>
    <h4 id="expire">Expire</h4>
    <p>设置过期时间点 本机的格林尼治时间</p>

  </div>
</template>

<script>
  export default {
    name: "CookieAndSession.vue"
  }
</script>

<style scoped>
  @import "../../assets/css/markdown.css";
  .wrapper {
    width: 100%;
  }
</style>
