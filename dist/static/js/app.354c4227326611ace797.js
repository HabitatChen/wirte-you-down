webpackJsonp([1],{"0Tuo":function(t,e){},DRKV:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},r,!1,function(t){n("Qjqk")},null,null).exports,s=n("/ocq"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("button",{on:{click:this.toStart}},[this._v("跳到起步页")])])},staticRenderFns:[]};var c=n("VU/8")({name:"HelloWorld",data:function(){return{}},methods:{toStart:function(){this.$router.push({name:"note"})}}},o,!1,function(t){n("0Tuo")},"data-v-1157835e",null).exports,u={sideBarDir:[{title:"脚本入门笔记",name:"script"},{title:"http学习笔记",name:"http"}]},l={name:"Note",data:function(){return{sideBarArray:u.sideBarDir,sideBarIndex:-1}},created:function(){console.log(this.sideBarDir)},methods:{sideChange:function(t,e){this.sideBarIndex=e,this.$router.push({name:t})}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-wrap"},[n("div",{staticClass:"wrap"},[n("header",{staticClass:"navBar"},[t._v("头部导航")]),t._v(" "),n("div",{staticClass:"layout"},[n("aside",{staticClass:"sideBar"},[n("ol",{staticClass:"sideBar-ol"},t._l(t.sideBarArray,function(e,a){return n("li",{staticClass:"sideBar-item",class:{active:t.sideBarIndex===a},on:{click:function(n){return t.sideChange(e.name,a)}}},[t._v("\n            "+t._s(e.title))])}),0)]),t._v(" "),n("div",{staticClass:"mainAndFooter"},[n("div",{staticClass:"content"},[n("router-view")],1),t._v(" "),n("footer",{staticClass:"foot"},[t._v("底部")])])])])])},staticRenderFns:[]};var p=n("VU/8")(l,d,!1,function(t){n("UOrC")},null,null).exports,v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  这是脚本的内容\n")])},staticRenderFns:[]};var f=n("VU/8")({name:"Script.vue"},v,!1,function(t){n("DRKV")},"data-v-28519666",null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  这是Http的内容\n")])},staticRenderFns:[]};var m=n("VU/8")({name:"Http.vue"},h,!1,function(t){n("Y2nF")},"data-v-28513220",null).exports;a.default.use(s.a);var _=new s.a({routes:[{path:"/",name:"HelloWorld",component:c},{path:"/notes",name:"note",component:p,children:[{name:"script",path:"script",component:f},{name:"http",path:"http",component:m}]}]}),C=n("zL8q"),B=n.n(C);n("tvR6");a.default.use(B.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:_,components:{App:i},template:"<App/>"})},Qjqk:function(t,e){},UOrC:function(t,e){},Y2nF:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.354c4227326611ace797.js.map