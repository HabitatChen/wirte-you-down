<template>
  <h3>css</h3>
  <p>css的四种引入方式</p>
  <p>
    1. 内联样式 style='background: grey'
    2. 在head中添加style
    3. 外联.css文件，然后在head中添加link标签 // <link rel="stylesheet" href="./style.css">
    4. 在css中引入其他的css // @import url('./c.css')
  </p>>
  <p>
    利用float来做布局
    1. 在子元素上添加 float: left
    2, 在子元素的父元素上添加 class='clearfix' .clearfix{content: ''; display: block; clear: both}
  </p>
  <p>
    ul 带有的自定义样式 ==> 使用 ul {list-style: none; margin: 0; padding: 0} 来取消其自由样式
  </p>
  <p>a标签去除下划线 a{text-decoration: none}</p>
  <p>外部元素保不住内部元素的话，可能是因为块级元素和内联元素的问题，将dispaly: inline ==> 设置为 display: block</p>
</template>

<script>
  export default {
    name: "Css.vue"
  }
</script>

<style scoped>

</style>
