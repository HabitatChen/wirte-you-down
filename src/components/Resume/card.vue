<template>
  <div class="card-container">
    <div data-x id='siteAbout' class="userCard">
      <div class="pictureAndText clearfix">
        <div class="picture">
          <img :src="avatarImg" alt="头像">
        </div>
        <div class="text">
          <span class="welcome">hello
            <span class="triangle"></span>
          </span>
          <h1>陈&nbsp;&nbsp;康</h1>
          <p>前端工程师在途。</p>
          <hr>
          <dl>
            <dt>年龄</dt>
            <dd>22</dd>
            <dt>电话</dt>
            <dd>15809090909</dd>
            <dt>邮箱</dt>
            <dd>habitatchen@163.com</dd>
            <dt>应聘地点</dt>
            <dd>杭州</dd>
          </dl>
        </div>
      </div>
      <footer class="media">
        <a href="https://zhuanlan.zhihu.com/c_200636826">
          <img :src="zhihuImg" alt="微博">
        </a>
        <a href="https://github.com/HabitatChen">
          <img :src="githubImg" alt="github">
        </a>
        <a href="#">
          <img :src="tuiteImg" alt="tuite">
        </a>
      </footer>
    </div>
    <p class="downloadResume-container">
      <a href="./resume.pdf" target="_blank" download class="downloadResume">下载打印版PDF</a>
    </p>
    <p class="self-interduction">
      前端工程师在途。
    </p>
  </div>
</template>

<script>
  import self from '@/assets/pictures/resume/self.jpg'
  import tuite from '@/assets/pictures/resume/tuite.png'
  import zhihu from '@/assets/pictures/resume/zhihu.png'
  import github from '@/assets/pictures/resume/github.png'
  export default {
    name: "HomeCard",
    data (){
      return {
        avatarImg:self,
        zhihuImg:zhihu,
        githubImg:github,
        tuiteImg:tuite
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .container {
  }
  .userCard {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
  }
  .userCard .welcome{
    background-color: #E2D3BE;
    color: #FEFBFC;
    display: inline-block;
    padding: 4px 16px;
    position: relative;
    margin-bottom: 10px;
  }
  .welcome .triangle{
    display: block;
    border: 10px solid transparent;
    width: 0px;
    border-left-color: #E2D3BE;
    border-top-width: 0px;
    position: absolute;
    left: 6px;
    top: 100%;
  }
  .userCard .picture{ float: left; }
  .userCard .text{
    float: left;
    margin-left: 65px;
    width:400px;
  }
  .userCard .pictureAndText{
    padding: 50px;
  }
  .userCard .text h1{
    margin-top: 26px;
    margin-bottom: 5px;
  }
  .userCard .text hr{ margin: 20px 0; }
  hr{
    height: 0;
    border: none;
    border-top: 1px solid #dedede;
  }
  .userCard dl dt,
  .userCard dl dd{
    float: left;
    padding: 8px 0px;
  }
  .userCard dl dt{
    width: 30%;
    font-weight: bold;
  }
  .userCard dl dd{
    width: 70%;
    color: #9da0a7;
  }
  .userCard .media{
    background-color: #E4D6C5;
  }
  .media img {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: transparent;
    vertical-align: top;

  }
  .media a {
    display: inline-block;
    width: 40px;
    padding: 5px 0;
    line-height: 30px;
    border-radius: 50px;
    margin: 16px;
  }
  .media a:hover{
    background: #cf5d5f;
  }
  .media {
    text-align: center;
  }
  .card-container{
    margin-top: -340px;
  }
  .card-container .downloadResume{
    font-size: 14px;
    line-height: 16px;
    padding: 21px 55px;
    display: inline-block;
    border: 1px solid #cdcfd1;
    border-radius: 7px;
    color: #3d4451;
    font-weight: bold;
    margin: 32px 0;
    transition: box-shadow 0.2s;
  }
  .card-container .downloadResume-container{
    text-align: center;
  }
  .card-container .downloadResume:hover{
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  }
  .self-interduction{
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
  }
</style>
