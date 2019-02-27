<template>
  <div class="wrapper">
    <h2 id="domevent">DomEvent</h2>
    <h4 id="dom-level-0-event-">Dom Level 0 Event写法</h4>
    <p>HTML 中 onclick = &#39;代码字符串&#39; 即onclick = print()<br>
      JS 中 onclick = function () {} 对应一个函数</p>
    <pre><code>&lt;button id=&#39;X&#39; onclick=&quot;print&quot;&gt;&lt;/button&gt;
&lt;button id=&#39;Y&#39; onclick=&quot;print()&quot;&gt;&lt;/button&gt; // ✅
&lt;button id=&#39;Z&#39; onclick=&quot;print.call（）&quot;&gt;&lt;/button&gt; // ✅
// 因为HTML中的onclick后面接的是要执行的代码，一旦用户点击，浏览就会eval(&quot;要执行的代码&quot;)
// 即上述例子中
// A. eval(&quot;print&quot;) ==&gt; 不会有任何效果
// B，eval(&quot;print()&quot;) ==&gt; eval(&quot;console.log(&#39;hi&#39;)&quot;) ===&gt; 才会打印出东西


&lt;script&gt;
    function print() {
        console.log(&#39;hi&#39;)
    }

    X.onclick = print  // ✅JS中 X.onclick = function () {} 对应的是一个函数，而之后print是函数
    Y.onclick = print()
    Z.onclick = print.call()
&lt;/script&gt;
</code></pre><h4 id="dom-level-2">Dom Level 2</h4>
    <h5 id="-">上述方法的不足</h5>
    <p><code>id.onclick = function () {}</code>， 其实指的是这个id的onclick属性对应的是一个方法，所以如果添加两个会发生覆盖</p>
    <p>解决方案：使用事件监听队列</p>
    <h5 id="dom-2-">Dom 2 写法</h5>
    <pre><code>1. 监听事件入队 id.addEventListner(&#39;click&#39;, f1) 2. 监听事件出队 id.removeEventListner(&#39;click&#39;, f1) </code></pre>
    <img src="../../assets/pictures/eventModel.png" alt="">
    <p>1.如果我点击儿子的时候，我是否点击了父亲<br>
      2.如果我点击儿子，三个函数会不会都调用<br>
      3.fn1() fn2() fn3() 的调用顺序<br>
      4.<code>id.addEventListner(&#39;click&#39;, fn1, false/true)</code>  不传入第三个参数或者传入false或者falsy值 =&gt; 从小到大 true =&gt; 从大到小
      <br><br>
      Dom的事件模型首先会从文档的父元素向子元素去询问，然后再从子元素向祖先元素去询问，如果有传入第三个参数并且不是false值，就
      会在从上倒下的那个阶段去调用它，相反的如果没有传入第三个参数或者第三个参数为false，就会再从下往上的时候再去调用</p>
    <h5>冒泡</h5>
    <p>没有传入第三个参数或者第三个参数为falsy 值</p>
    <h5>捕获</h5>
    <p>第三个参数为true</p>
    <h4>事件模型</h4>
    <p>先捕获再冒泡，如果在捕获阶段插入一个函数(即事件监听函数中的第三个参数为true)，就会先执行该函数</p>
    <h5>注意</h5>
    <p>如果一个元素最底层的元素，同时添加冒泡和捕获的事件监听，则那个先定义就先执行</p>
  </div>
</template>

<script>
  export default {
    name: "DonEvent.vue"
  }
</script>

<style scoped>
  @import "http://statics.1024tools.com/css/markdown/github.css";
  .wrapper {
    width: 100%;
  }
</style>
