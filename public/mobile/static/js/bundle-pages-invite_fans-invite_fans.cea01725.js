(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bundle-pages-invite_fans-invite_fans"],{3598:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("977b"),i=(e("125d"),{data:function(){return{imgUrl:""}},components:{},props:{},onLoad:function(n){this.getInviteBannerFun()},methods:{saveImageToAlbum:function(){var n=this;uni.downloadFile({url:this.imgUrl,success:function(t){n.$toast({title:请长按图片保存})}})},getInviteBannerFun:function(){var n=this,t="/";(0,a.getInviteBanner)({url:t}).then((function(t){1==t.code&&(n.imgUrl=t.data.url)}))}}});t.default=i},"3a0d":function(n,t,e){"use strict";var a=e("4b7e"),i=e.n(a);i.a},"4b7e":function(n,t,e){var a=e("63f0");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("7ec99030",a,!0,{sourceMap:!1,shadowMode:!1})},"63f0":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* pages/invite_fans/invite_fans.wxss */.invite-fans-container[data-v-3fff5a00]{padding:%?0?% %?75?%;background:-webkit-gradient(linear,left top,left bottom,from(#333),to(#767676));background:-webkit-linear-gradient(top,#333,#767676);background:linear-gradient(180deg,#333,#767676);min-height:100vh}.invite-fans-container .save-btn[data-v-3fff5a00]{background-color:#ff2c3c;margin-top:%?30?%;width:100%;padding:%?20?% 0}',""]),n.exports=t},8546:function(n,t,e){"use strict";e.r(t);var a=e("d1ba"),i=e("da30");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("3a0d");var o,s=e("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"3fff5a00",null,!1,a["a"],o);t["default"]=u.exports},d1ba:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"invite-fans-container column-center"},[e("v-uni-image",{staticStyle:{width:"600rpx",height:"980rpx","border-radius":"20rpx","z-index":"6"},attrs:{src:n.imgUrl}}),e("v-uni-view",{staticClass:"save-btn br60 md white row-center"},[n._v("长按保存到相册")])],1)},r=[]},da30:function(n,t,e){"use strict";e.r(t);var a=e("3598"),i=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);t["default"]=i.a}}]);