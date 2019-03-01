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
    <p>第一种写法：</p>
      <p>1. 目标点击时，弹出浮层</p>
      <p>2. 阻止浮层冒泡</p>
      <p>3. 监听document的点击事件，修改浮层的display<pre><code>$(btn).on(&#39;click&#39;, function() {
 $(popover).style.dispaly = block
})
$(wrap).on(&#39;click&#39;, function(e) {
 e.stopPropagation()
})
$(document).on(&#39;click&#39;, function() {
 $(popover).style.display = &#39;block&#39;
})
</code></pre>存在的问题是如果有多个浮层的弹出，document监听的事件过多<br>
        解决方案： 只有在点击之后监听一次，不点击的时候不监听<pre><code>$(btn).on(&#39;click&#39;, function() {
 $(popover).style.dispaly = block
 $(document).one(&#39;click&#39;, function() {
   $(popover).style.display = &#39;block&#39;
 })
})
$(wrap).on(&#39;click&#39;, function(e) {
 e.stopPropagation()
})
</code></pre>为什么还要加一个setTimeout更好?<br>
        因为异步执行的函数会在事件的冒泡全部触发完成后再将事件放入队列。<pre><code>$(btn).on(&#39;click&#39;, function() {
 $(popover).style.dispaly = block
 setTimeout(function() {
   $(document).one(&#39;click&#39;, function() {
     $(popover).style.display = &#39;block&#39;
 }, 0)
})
})
</code></pre></p>

    <p>Q: 在Vue中如何使用JQuery事件将下列的每个圈一次变色，即Vue中使用原生事件</p>
    <div class="ruinbow">
      <div class="red">
        <div class="orange">
          <div class="blue">
            <div class="green">
              <div class="black">
                <div class="purple">
                  <div class="pink">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  console.log($('.caihong div'))
  let n = 0
  $('.ruinbow div').on('click', function(e) {
    console.log(1)
    setTimeout(function() {
      $(e.currentTarget).addClass('active')
    }, n * 500)
    n += 1
  })

  export default {
    name: "DonEvent.vue",
    created() {
      $('.ruinbow div').on('click', function(e) {
        console.log(1)
        setTimeout(function() {
          $(e.currentTarget).addClass('active')
        }, n * 500)
        n += 1
      })
    }
  }
</script>

<style scoped>
  @import "../../assets/css/markdown.css";
  .wrapper {
    width: 100%;
  }
  .red.active {
    background: red;
  }
  .orange.active {
    background: orange;
  }
  .blue.active {
    background: blue;
  }
  .green.active {
    background: green;
  }
  .black.active {
    background: black;
  }
  .purple.active {
    background: purple;
  }
  .pink.active {
    background: pink;
  }

  .ruinbow {
    width: 200px;
    height: 200px;
  }

  .ruinbow  div {
    border: 1px solid black;
    padding: 10px;
    border-radius: 50%;
  }

</style>
