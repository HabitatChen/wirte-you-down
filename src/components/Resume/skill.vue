<template>
  <div data-x id='siteSkills' class="skills">
    <h2>技能</h2>
    <ol class="clearfix">
      <li>
        <h3>HTML 5 &amp; CSS 3</h3>
        <div class="progressBar">
          <div class="progress" style="width:20%"></div>
        </div>
      </li>
      <li>
        <h3>JavaScript</h3>
        <div class="progressBar">
          <div class="progress" style="width:30%"></div>
        </div>
      </li>
      <li>
        <h3>jQuery</h3>
        <div class="progressBar">
          <div class="progress" style="width:35%"></div>
        </div>
      </li>
      <li>
        <h3>React.js</h3>
        <div class="progressBar">
          <div class="progress" style="width:45%"></div>
        </div>
      </li>
      <li>
        <h3>Vue.js</h3>
        <div class="progressBar">
          <div class="progress" style="width:55%"></div>
        </div>
      </li>
      <li>
        <h3>Node.js</h3>
        <div class="progressBar">
          <div class="progress" style="width:58%"></div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style lang="stylus" scoped>
  .skills,
  .portfolio {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
  }
  .skills h2
  {
    text-align: center;
    color: #3d4451;
    font-size: 34px;
    line-height: 1.2;
    font-weight: 600;
  }
  .skills ol{
    background-color: #ffffff;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
    padding: 42px 50px 25px;
    margin-top: 30px;
  }
  .skills ol>li{
    float: left;
    width: 48%;
    box-sizing: border-box;
  }
  .skills ol>li:nth-child(even){
    float: right;
  }

  .skills .progressBar {
    height: 5px;
    background: #fae1e1;
    margin: 6px 0px 40px;
    overflow: hidden;
  }
  .skills .progressBar .progress{
    background: #e6686a;
    width: 70%;
    height: 100%;
    border-radius: 2px;
    transform: translateX(0);
    transition: all 1s;
  }
  .skills.offset .progress {
    transform: translateX(-100%);
  }

  .skills h3{
    font-size: 14px;
    line-height: 1.1;
    padding-right: 40px;
  }
</style>
