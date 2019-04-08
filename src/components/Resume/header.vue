<template>
  <div class="topNavBar">
    <div class="topNavBar-inner clearfix">
      <a href="#" class="logo">
        <span class="rs">RS</span>
        <span class="card">card</span>
      </a>
      <nav class="menu">
        <ul class="clearfix">
          <li>
            <a href="#siteAbout">关于</a>
          </li>
          <li>
            <a href="#siteSkills">技能</a>
          </li>
          <li>
            <a href="#siteWorks">作品</a>
            <ul class='subMenu'>
              <li>作品1</li>
              <li>作品2</li>
              <li>作品3</li>
            </ul>
          </li>
          <li>
            <a href="#siteBlog">博客</a>
            <ul class="subMenu">
              <li>博客1</li>
              <li>博客2</li>
              <li>博客3</li>
            </ul>
          </li>
          <li>
            <a href="#siteContact">联系我</a>
          </li>
          <li>
            <a href="#siteAnother">其他</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped >
  .topNavBar  nav > ul >li{ float:left; margin-left:17px; margin-right:17px; position: relative; }
  .topNavBar  nav  > ul >  li > a{
    font-size: 12px;
    text-decoration: none;
    font-weight: bold;
    border-top: 3px solid transparent;
    border-bottom:3px solid transparent;
    padding-top: 5px;
    padding-bottom: 5px;
    display: block;
    position: relative;
    color: white
  }
  .topNavBar nav{ padding-top: 4px; padding-bottom: 4px; float: right; }
  .topNavBar nav > ul { list-style: none; padding: 0; margin: 0; }
  .topNavBar > a { float: left; }
  .topNavBar  nav>ul>li.active>a::after,
  .topNavBar  nav>ul>li.highlight>a::after{
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background:#e06567;
    height: 3px;
    animation: menuSlide 0.4s;
  }
  @keyframes menuSlide{
    0%{
      width:0;
    }
    100%{
      width:100%;
    }
  }
  .topNavBar li .subMenu{
    display: none;
    position: absolute;
    right: 0;
    top: 100%;
    background: white;
    color:#3d4451;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  .topNavBar li.active > .subMenu{
    display: block;
    animation: sunmenuSlide 0.3s;
  }
  @keyframes sunmenuSlide{
    0%{
      margin-right: 100%;
    }
    100%{
      margin-right: 0;
    }
  }
  .topNavBar li .subMenu >li{
    white-space: nowrap;
    padding: 5px 10px;
  }
  [data-x].offset{ transform: translateY(100px) }
  [data-x]{ transform: translateY(0); transition: all 0.5s }
  .topNavBar .logo{
    font-size: 24px;
    font-family: "Arial Black";
    padding-top: 3px;
    padding-bottom: 3.4px;
  }
  .topNavBar .logo .card{
    color:#9A9DA2;
  }
  .topNavBar .logo .rs{
    margin-right: 4px;
    color:#e6686a;
  }
  .topNavBar{
    padding:20px 0px 20px 0px;
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    transition: all 0.5s;
    color:white !important;
  }
  .topNavBar.sticky{
    background: white;
    padding: 10px 0px;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    color: #3d4451;
  }
  .topNavBar .topNavBar-inner{
    padding: 0 16px 0 16px;
  }
</style>
