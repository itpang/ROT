(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bundle-pages-goods_combination-goods_combination"],{"09d7":function(t,e,a){"use strict";a.r(e);var i=a("84ae"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"14e9":function(t,e,a){"use strict";a.r(e);var i=a("811a"),n=a("5b07");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("ad79");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"60f6159f",null,!1,i["a"],r);e["default"]=c.exports},2153:function(t,e,a){var i=a("5781");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("5e68e46c",i,!0,{sourceMap:!1,shadowMode:!1})},2323:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={loading:a("9532").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"loading-footer row-center",style:"color: "+t.color},["loading"===t.status?a("v-uni-view",{staticClass:"loading row"},[a("loading",{staticClass:"mr20",attrs:{color:t.color}}),a("v-uni-text",{style:"color: "+t.color},[t._v(t._s(t.loadingText))])],1):t._e(),"finished"===t.status?a("v-uni-view",{staticClass:"finished"},[t._v(t._s(t.finishedText))]):t._e(),"error"===t.status?a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onRefresh.apply(void 0,arguments)}}},[t._v(t._s(t.errorText))]):t._e(),"empty"===t.status?a("v-uni-view",{staticClass:"empty"},[t.slotEmpty?t._t("empty"):a("v-uni-text",[t._v("暂无数据")])],2):t._e()],1)},o=[]},2596:function(t,e,a){"use strict";a("a9e3"),a("acd8"),a("ac1f"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:[String,Number],default:28},secondSize:{type:[String,Number],default:28},color:{type:String},weight:{type:[String,Number],default:400},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:[String,Number],default:28},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(t){this.priceFormat()}},methods:{priceFormat:function(){var t=this.price,e={};null!==t&&""!==t&&void 0!==t&&(t=parseFloat(t),t=String(t).split("."),e.first=t[0],e.second=t[1],this.priceSlice=e)}}};e.default=i},2865:function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),o=a("eae9"),r=a("744b"),s=a("125d"),c={data:function(){return{page:1,groupList:[],status:o.loadingType.LOADING}},components:{},onLoad:function(t){this.getGroupListFun()},onPullDownRefresh:function(){this.page=1,this.groupList=[],this.status=o.loadingType.LOADING,this.getGroupListFun()},onReachBottom:function(){this.getGroupListFun()},methods:{getGroupListFun:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=t.page,i=t.groupList,n=t.status,e.next=4,(0,s.loadingFun)(r.getGroupList,a,i,n);case 4:if(c=e.sent,c){e.next=7;break}return e.abrupt("return");case 7:t.page=c.page,t.groupList=c.dataList,t.status=c.status,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),t.status=o.loadingType.ERROR;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}}};e.default=c},"29f2":function(t,e,a){"use strict";var i=a("59fc"),n=a.n(i);n.a},"2a7f":function(t,e,a){"use strict";a.r(e);var i=a("a9d5"),n=a("5096");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("3b94");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"0659d2c8",null,!1,i["a"],r);e["default"]=c.exports},3726:function(t,e,a){"use strict";a.r(e);var i=a("c18e"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},3788:function(t,e,a){"use strict";var i=a("2153"),n=a.n(i);n.a},"38f0":function(t,e,a){"use strict";var i=a("80ba"),n=a.n(i);n.a},"3af4":function(t,e,a){var i=a("8124");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("4b0e9618",i,!0,{sourceMap:!1,shadowMode:!1})},"3b94":function(t,e,a){"use strict";var i=a("f578"),n=a.n(i);n.a},"413f":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.goods-combination[data-v-0659d2c8]{background-color:#ff2c3c;min-height:100vh}.goods-combination .header .img[data-v-0659d2c8]{display:block;width:%?750?%;height:%?380?%}.goods-combination .main[data-v-0659d2c8]{padding:0 %?20?%;margin-top:%?-30?%;position:relative;z-index:1}.goods-combination .main .goods-list .goods-item[data-v-0659d2c8]{border-radius:%?20?%;padding:%?30?% %?20?%}.goods-combination .main .goods-list .goods-item .goods-img[data-v-0659d2c8]{width:%?180?%;height:%?180?%;-webkit-box-flex:0;-webkit-flex:none;flex:none}.goods-combination .main .goods-list .goods-item .goods-info[data-v-0659d2c8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:%?475?%}.goods-combination .main .goods-list .goods-item .goods-info .group[data-v-0659d2c8]{border:1px solid #ff2c3c;border-radius:%?4?%}.goods-combination .main .goods-list .goods-item .goods-info .group .group-img[data-v-0659d2c8]{padding:%?2?% %?6?%;background:-webkit-gradient(linear,left top,right top,from(#f95f2f),to(#ff2c3c));background:-webkit-linear-gradient(left,#f95f2f,#ff2c3c);background:linear-gradient(90deg,#f95f2f,#ff2c3c);border-radius:0 %?4?% %?4?% 0}.goods-combination .main .goods-list .goods-item .goods-info .info-footer .btn[data-v-0659d2c8]{padding:0 %?30?%;background-color:#f95f2f}',""]),t.exports=e},4265:function(t,e,a){"use strict";a("a630"),a("a9e3"),a("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{color:String,vertical:Boolean,type:{type:String,default:"spinner"},size:{type:Number,default:40},textSize:String},data:function(){return{array12:Array.from({length:12})}}};e.default=i},4593:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".price-format[data-v-60f6159f]{font-family:Avenir,SourceHanSansCN,PingFang SC,Arial,Hiragino Sans GB,Microsoft YaHei,sans-serif}",""]),t.exports=e},5096:function(t,e,a){"use strict";a.r(e);var i=a("2865"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},5781:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.custom-image[data-v-bdc441b8]{position:relative;display:block;width:100%;height:100%}.custom-image.image-round[data-v-bdc441b8]{overflow:hidden;border-radius:50%}.custom-image .image[data-v-bdc441b8]{display:block;width:100%;height:100%}.custom-image .loading-wrap[data-v-bdc441b8],\n.custom-image .error-wrap[data-v-bdc441b8]{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#969799;font-size:%?28?%;background-color:#f7f8fa}',""]),t.exports=e},"579b":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("125d"),n={name:"float-tab",data:function(){return{showMore:!1,top:0}},mounted:function(){var e=this;(0,i.getRect)(".tab-img",!1,this).then((function(a){e.height=a.height,t.log(e.height)}))},methods:{onChange:function(){this.showMore=!this.showMore}},watch:{showMore:function(t){this.top=t?-this.height:0}}};e.default=n}).call(this,a("5a52")["default"])},"57b8":function(t,e,a){"use strict";a.r(e);var i=a("4265"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"59fc":function(t,e,a){var i=a("ccb9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("9c75a242",i,!0,{sourceMap:!1,shadowMode:!1})},"5b07":function(t,e,a){"use strict";a.r(e);var i=a("2596"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"65b6":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:"loading "+(t.vertical?"loading--vertical":"")},[a("v-uni-view",{class:"loading__spinner loading__spinner--"+t.type,style:{color:t.color,width:t.size+"rpx",height:t.size+"rpx"}},t._l(t.array12,(function(e,i){return"spinner"===t.type?a("v-uni-view",{key:i,staticClass:"loading__dot"}):t._e()})),1),a("v-uni-view",{staticClass:"loading__text",style:{"font-size":t.textSize+"rpx",color:t.color}},[t._t("default")],2)],1)},o=[]},"696c":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"float-tab ~column"},[a("v-uni-navigator",{staticClass:"tab-img",style:{top:3*t.top+"px"},attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}},[a("v-uni-image",{staticClass:"tab-icon",attrs:{src:"/static/images/icon_float_home.png"}})],1),a("v-uni-navigator",{staticClass:"tab-img",style:{top:2*t.top+"px"},attrs:{"hover-class":"none","open-type":"navigate",url:"/bundle/pages/contact_offical/contact_offical"}},[a("v-uni-image",{staticClass:"tab-icon",attrs:{src:"/static/images/icon_float_help.png"}})],1),a("v-uni-navigator",{staticClass:"tab-img",style:{top:t.top+"px"},attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/shop_cart/shop_cart"}},[a("v-uni-image",{staticClass:"tab-icon",attrs:{src:"/static/images/icon_float_cart.png"}})],1),a("v-uni-image",{staticClass:"tab-img",staticStyle:{"z-index":"99"},style:{transform:"rotateZ("+(t.showMore?135:0)+"deg)"},attrs:{src:"/static/images/icon_float_more.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}})],1)},o=[]},"6ab8":function(t,e,a){t.exports=a.p+"static/img/group_bg.72ad1619.png"},"72bf":function(t,e,a){"use strict";a.r(e);var i=a("696c"),n=a("e7e4");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("29f2");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"c91146d2",null,!1,i["a"],r);e["default"]=c.exports},"744b":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getGoodsCoupon=o,e.getCouponList=r,e.getActivityGoodsLists=s,e.getSeckillTime=c,e.getSeckillGoods=u,e.getGroupList=d,e.getUserGroup=l,e.getTeamInfo=f,e.teamCheck=g,e.teamBuy=p,e.getBargainList=v,e.getBargainDetail=m,e.getBargainNumber=b,e.launchBargain=h,e.getBargainActivityList=w,e.getBargainActivityDetail=y,e.getBargainPost=_,e.helpBargain=x,e.closeBargainOrder=k;var n=i(a("d192"));a("125d");function o(t){return n.default.get("coupon/getGoodsCoupon",{params:t})}function r(t){return n.default.get("coupon/couponList",{params:t})}function s(t){return n.default.get("activity_area/activityGoodsList",{params:t})}function c(){return n.default.get("seckill/seckillTime")}function u(t){return n.default.get("seckill/seckillGoods",{params:t})}function d(t){return n.default.get("team/teamGoodsList",{params:t})}function l(t){return n.default.get("user/myTeam",{params:t})}function f(t){return n.default.get("team/teamInfo",{params:t})}function g(t){return n.default.post("team/check",t)}function p(t){return n.default.post("team/buy",t)}function v(t){return n.default.get("bargain/lists",{params:t})}function m(t){return n.default.get("bargain/detail",{params:t})}function b(){return n.default.get("bargain/barginNumber")}function h(t){return n.default.post("bargain/sponsor",t)}function w(t){return n.default.get("bargain/orderList",{params:t})}function y(t){return n.default.get("bargain/bargainDetail",{params:t})}function _(t){return n.default.get("share/shareBargain",{params:t})}function x(t){return n.default.post("bargain/knife",t)}function k(t){return n.default.get("bargain/closeBargain",{params:t})}},"80ba":function(t,e,a){var i=a("87b0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("8b2e258e",i,!0,{sourceMap:!1,shadowMode:!1})},"811a":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-text",{class:(t.lineThrough?"line-through":"")+" price-format",style:{color:t.color,"font-weight":t.weight}},[t.showSubscript?a("v-uni-text",{style:{"font-size":t.subscriptSize+"rpx","margin-right":"2rpx"}},[t._v("¥")]):t._e(),a("v-uni-text",{style:{"font-size":t.firstSize+"rpx","margin-right":"1rpx"}},[t._v(t._s(t.priceSlice.first))]),t.priceSlice.second?a("v-uni-text",{style:{"font-size":t.secondSize+"rpx"}},[t._v("."+t._s(t.priceSlice.second))]):t._e()],1)},o=[]},8124:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".loading-footer[data-v-1b4a51d1]{padding:%?30?% 0;color:#666}",""]),t.exports=e},"84ae":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{src:{type:String},round:Boolean,width:{type:null},height:{type:null},radius:null,lazyLoad:{type:Boolean,default:!0},useErrorSlot:Boolean,useLoadingSlot:Boolean,showMenuByLongpress:Boolean,mode:{type:String,default:"scaleToFill"},showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},customStyle:{type:Object,default:function(){}}},data:function(){return{error:!1,loading:!0,viewStyle:{}}},created:function(){this.setStyle()},methods:{setStyle:function(){var t=this.width,e=this.height,a=this.radius,i={};t&&(i.width=t),e&&(i.height=e),a&&(i["overflow"]="hidden",i["border-radius"]=a),this.viewStyle=i,this.customStyle&&(this.viewStyle=Object.assign(this.viewStyle,this.customStyle))},onLoaded:function(t){this.loading=!1,this.$emit("load",t.detail)},onErrored:function(t){this.error=!1,this.loading=!0,this.$emit("error",t.detail)},onClick:function(t){this.$emit("click",t.detail)}},watch:{src:function(){this.error=!1,this.loading=!0},width:function(){this.setStyle()},height:function(){this.setStyle()}}};e.default=i},8579:function(t,e,a){var i=a("4593");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("453f3022",i,!0,{sourceMap:!1,shadowMode:!1})},"87b0":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'[data-v-49a28488]:host{font-size:0;line-height:1}.loading[data-v-49a28488]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#c8c9cc}.loading__spinner[data-v-49a28488]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:%?45?%;max-width:100%;max-height:100%;height:%?45?%;-webkit-animation:rotate-data-v-49a28488 .8s linear infinite;animation:rotate-data-v-49a28488 .8s linear infinite}.loading__spinner--spinner[data-v-49a28488]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.loading__spinner--circular[data-v-49a28488]{border:%?2?% solid transparent;border-top-color:initial;border-radius:100%}.loading__text[data-v-49a28488]{margin-left:%?16?%;color:#969799;font-size:%?28?%;line-height:%?40?%}.loading__text[data-v-49a28488]:empty{display:none}.loading--vertical[data-v-49a28488]{-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.loading--vertical .loading__text[data-v-49a28488]{margin:%?16?% 0 0}.loading__dot[data-v-49a28488]{position:absolute;top:0;left:0;width:100%;height:100%}.loading__dot[data-v-49a28488]:before{display:block;width:%?4?%;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.loading__dot[data-v-49a28488]:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.loading__dot[data-v-49a28488]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.loading__dot[data-v-49a28488]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.loading__dot[data-v-49a28488]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.loading__dot[data-v-49a28488]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.loading__dot[data-v-49a28488]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.loading__dot[data-v-49a28488]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.loading__dot[data-v-49a28488]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.loading__dot[data-v-49a28488]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.loading__dot[data-v-49a28488]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.loading__dot[data-v-49a28488]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.loading__dot[data-v-49a28488]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes rotate-data-v-49a28488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-49a28488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},"8f17":function(t,e,a){"use strict";var i=a("3af4"),n=a.n(i);n.a},9532:function(t,e,a){"use strict";a.r(e);var i=a("65b6"),n=a("57b8");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("38f0");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"49a28488",null,!1,i["a"],r);e["default"]=c.exports},a118:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAECAwQFBfYG9wf4CPkJ+gr7C/wM/Q3+Dv8DuVxxcAAAIeSURBVEjHzZbLsqMwDERljC8hXMIAAePz/x86i0AQYHBSNYvRJuWUW4+21ELkv7Ls57frYOweN/s5ytyeKBt/s89g94m9PT6A5iMAbZnnIjZ3TQCY7incHcAXRrvqATpziXsAoThk0QNPk8D1sQs1MJoYjzcRkRJo4i6LAF2Ux0LEAfUpacBj+5d9AjgxE7TnZRSA2+AmoM9FahiuCGhg3OGCE5EMyC87I8BKeDbBYGeH/fUblzrkAOHVT0Cqn/1aZQnhdd3BkGqr6v1aZoLyXXqZAtp3rtUaZkxnKuKXS37lCUiPTjsTb8Ev7CY5nTOs5t967agvgO1K72dAN9PqIfsKWM4RFSHfpaqAdtvBJ1YfgQKYJLCfnyOoy/1u2qK2eO/VINWnqrEhddikPBc5mXTjlIsaPPWAVYmFwvJ8hvUhpUiGbNZqGl2Yv9C4RedUv6zD5K5Fx0zaca+rbGE6nUnzBL+WkgUls8afI82fXT6lFmgbzpDmidbGmR8eRiGJrEI3HXAv5LgkYT0w/uzo7IjgXiuMboaaFu1IRLIOwMf4dgG1UFxg0wodQB1vDdOg5thUGwKBPrvSBK8PYcNBd9kVlT4oUc9CjJhVS3z88DqPFwFd9HDci/uA/WnAi5Bm0iyOB/8mnIxNoWMUh4DneuR1jDayJ7O4dlr9bPE7Q5QeE5RKldFvnSL+BZTZjbDYhO8zDYy2s/niA/vf21/CUTWn2ub5bwAAAABJRU5ErkJggg=="},a86d:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uIcon:a("2124").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:{"custom-image":!0,"image-round":t.round},style:[t.viewStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.error?t._e():a("v-uni-image",{staticClass:"image",attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoaded.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrored.apply(void 0,arguments)}}}),t.loading&&t.showLoading?a("v-uni-view",{staticClass:"loading-wrap image"},[t.useLoadingSlot?t._t("loading"):a("u-icon",{attrs:{color:"#aaa",name:"photo-fill",size:"45"}})],2):t._e(),t.error&&t.showError?a("v-uni-view",{staticClass:"error-wrap image"},[t.useErrorSlot?t._t("error"):a("u-icon",{attrs:{color:"#aaa",name:"error-circle-fill",size:"45"}}),a("v-uni-text",{staticClass:"sm"},[t._v("加载失败")])],2):t._e()],1)},o=[]},a9d5:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={customImage:a("c9cc").default,priceFormat:a("14e9").default,loadingFooter:a("f9f9").default,floatTab:a("72bf").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"goods-combination"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-image",{staticClass:"img",attrs:{src:a("6ab8")}})],1),i("v-uni-view",{staticClass:"main bg-primary"},[i("v-uni-view",{staticClass:"goods-list"},t._l(t.groupList,(function(e,n){return i("v-uni-navigator",{key:n,staticClass:"goods-item row mt20 bg-white",attrs:{"hover-class":"none",url:"/pages/goods_details/goods_details?id="+e.goods_id}},[i("custom-image",{attrs:{width:"180rpx",height:"180rpx",radius:"6rpx","lazy-load":!0,src:e.image}}),i("v-uni-view",{staticClass:"goods-info ml20"},[i("v-uni-view",{staticClass:"goods-name line2 mb10"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"dec row"},[i("v-uni-view",{staticClass:"group mr20 row"},[i("v-uni-view",{staticClass:"group-img row-center"},[i("v-uni-image",{staticClass:"icon-sm",attrs:{src:a("a118")}})],1),i("v-uni-view",{staticClass:"primary xxs mr10 ml10"},[t._v(t._s(e.people_num)+"人团")])],1),i("v-uni-view",{staticClass:"sale muted xs"},[t._v("已拼"+t._s(e.sales_sum)+"件")])],1),i("v-uni-view",{staticClass:"info-footer row-between"},[i("v-uni-view",{staticClass:"price row"},[i("price-format",{attrs:{color:"#FF2C3C","subscript-size":26,"second-size":26,"first-size":34,price:e.team_min_price,weight:500}}),i("price-format",{staticClass:"ml10",attrs:{color:"#999","line-through":!0,"subscript-size":24,"first-size":24,"second-size":24,price:e.min_price}})],1),i("v-uni-button",{staticClass:"br60 btn white",attrs:{size:"sm",type:"primary"}},[t._v("去拼团")])],1)],1)],1)})),1),i("loading-footer",{attrs:{status:t.status,"slot-empty":!0,color:"#fff"},on:{refresh:function(e){arguments[0]=e=t.$handleEvent(e),t.getGroupListFun.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"column-center",staticStyle:{"padding-top":"200rpx"},attrs:{slot:"empty"},slot:"empty"},[i("v-uni-text",{staticClass:"lg",staticStyle:{color:"#FFD4D8"}},[t._v("暂无拼团商品")])],1)],1)],1),i("float-tab")],1)},o=[]},ad79:function(t,e,a){"use strict";var i=a("8579"),n=a.n(i);n.a},c18e:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},components:{},props:{status:{type:String,default:"loading"},errorText:{type:String,default:"加载失败，点击重新加载"},loadingText:{type:String,default:"加载中..."},finishedText:{type:String,default:"我可是有底线的～"},slotEmpty:{type:Boolean,default:!1},color:{type:String,default:"#666"}},methods:{onRefresh:function(){this.$emit("refresh")}}};e.default=i},c9cc:function(t,e,a){"use strict";a.r(e);var i=a("a86d"),n=a("09d7");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("3788");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"bdc441b8",null,!1,i["a"],r);e["default"]=c.exports},ccb9:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.float-tab[data-v-c91146d2]{position:fixed;right:%?16?%;bottom:%?200?%;width:%?96?%;height:%?96?%;z-index:777}.float-tab .tab-img[data-v-c91146d2]{width:100%;height:100%;position:absolute;-webkit-transition:all .5s;transition:all .5s}.float-tab .tab-img .tab-icon[data-v-c91146d2]{width:100%;height:100%}',""]),t.exports=e},e7e4:function(t,e,a){"use strict";a.r(e);var i=a("579b"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},f578:function(t,e,a){var i=a("413f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("d6cdc934",i,!0,{sourceMap:!1,shadowMode:!1})},f9f9:function(t,e,a){"use strict";a.r(e);var i=a("2323"),n=a("3726");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("8f17");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"1b4a51d1",null,!1,i["a"],r);e["default"]=c.exports}}]);