(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bundle-pages-writeoff_detail-writeoff_detail"],{"1b7c":function(t,e,a){"use strict";a.r(e);var i=a("fcb8"),n=a("8f1e");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("febb");var o,d=a("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"5bac94aa",null,!1,i["a"],o);e["default"]=s.exports},"2f51":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.orderBuy=r,e.delOrder=o,e.getDelivery=d,e.getOrderList=s,e.getOrderDetail=c,e.cancelOrder=f,e.orderTraces=l,e.confirmOrder=u,e.getOrderCoupon=v,e.getVerifyLists=p,e.verification=g,e.verificationConfirm=b;var n=i(a("d192"));a("125d");function r(t){return n.default.post("order/buy",t)}function o(t){return n.default.post("order/del",{id:t})}function d(){return n.default.get("order/getDeliveryType")}function s(t){return n.default.get("order/lists",{params:t})}function c(t){return n.default.get("order/detail",{params:{id:t}})}function f(t){return n.default.post("order/cancel",{id:t})}function l(t){return n.default.get("order/orderTraces",{params:{id:t}})}function u(t){return n.default.post("order/confirm",{id:t})}function v(t){return n.default.post("coupon/orderCoupon",t)}function p(t){return n.default.get("order/verificationLists",{params:t})}function g(t){return n.default.post("order/verification",t)}function b(t){return n.default.post("order/verificationConfirm",t)}},"38f0":function(t,e,a){"use strict";var i=a("80ba"),n=a.n(i);n.a},4265:function(t,e,a){"use strict";a("a630"),a("a9e3"),a("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{color:String,vertical:Boolean,type:{type:String,default:"spinner"},size:{type:Number,default:40},textSize:String},data:function(){return{array12:Array.from({length:12})}}};e.default=i},"4a12":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.writeoff-order .list[data-v-ac597f54]{padding:%?20?%}.writeoff-order .list .item[data-v-ac597f54]{border-radius:%?10?%}.writeoff-order .list .item[data-v-ac597f54]:not(:last-of-type){margin-bottom:%?20?%}.writeoff-order .list .item .title[data-v-ac597f54]{padding:%?20?%}.writeoff-order .btns[data-v-ac597f54]{width:100%;padding:0 %?40?% %?50?%}',""]),t.exports=e},"4e5e":function(t,e,a){var i=a("87f9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3569884a",i,!0,{sourceMap:!1,shadowMode:!1})},"57b8":function(t,e,a){"use strict";a.r(e);var i=a("4265"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},6254:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={orderGoods:a("3442").default,uModal:a("2203").default,loadingView:a("1b7c").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"writeoff-order"},[t.detail.id?[a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"item bg-white"},[a("v-uni-view",{staticClass:"row-between title"},[a("v-uni-view",[t._v("联系人："+t._s(t.detail.consignee))]),a("v-uni-view",{class:[0==t.detail.verification_status?"primary":"muted"]},[t._v(t._s(t.detail.verification_status_desc))])],1),a("order-goods",{attrs:{list:t.detail.order_goods}})],1)],1),a("v-uni-view",{staticClass:"btns"},[a("v-uni-button",{staticClass:"bg-primary br60 white btn",attrs:{size:"lg"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal=!0}}},[t._v("已提货")]),a("v-uni-navigator",{staticClass:"mt20",attrs:{"open-type":"navigateBack",delta:1,"hover-class":"none"}},[a("v-uni-button",{staticClass:"bg-white br60 btn",attrs:{size:"lg"}},[t._v("返回核销列表")])],1)],1)]:[a("v-uni-view",{staticClass:"column-center",staticStyle:{"padding-top":"200rpx"}},[a("v-uni-image",{staticClass:"img-null",attrs:{src:"/static/images/order_null.png"}}),a("v-uni-text",{staticClass:"lighter"},[t._v("抱歉，该订单不存在！")]),a("v-uni-view",{staticClass:"btns",staticStyle:{"margin-top":"100rpx"}},[a("v-uni-navigator",{staticStyle:{width:"100%"},attrs:{"open-type":"navigateBack",delta:1,"hover-class":"none"}},[a("v-uni-button",{staticClass:"bg-primary br60 white",attrs:{size:"lg"}},[t._v("返回核销列表")])],1)],1)],1)],a("u-modal",{ref:"uModalInput",attrs:{"show-cancel-button":!0,"confirm-color":t.primaryColor,"confirm-text":"确定",title:"确认核销",content:"是否确认核销？"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.handleVerificationConfirm.apply(void 0,arguments)}},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}}),t.isFirstLoading?a("loading-view"):t._e()],2)},r=[]},"65b6":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:"loading "+(t.vertical?"loading--vertical":"")},[a("v-uni-view",{class:"loading__spinner loading__spinner--"+t.type,style:{color:t.color,width:t.size+"rpx",height:t.size+"rpx"}},t._l(t.array12,(function(e,i){return"spinner"===t.type?a("v-uni-view",{key:i,staticClass:"loading__dot"}):t._e()})),1),a("v-uni-view",{staticClass:"loading__text",style:{"font-size":t.textSize+"rpx",color:t.color}},[t._t("default")],2)],1)},r=[]},"80ba":function(t,e,a){var i=a("87b0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("8b2e258e",i,!0,{sourceMap:!1,shadowMode:!1})},"87b0":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'[data-v-49a28488]:host{font-size:0;line-height:1}.loading[data-v-49a28488]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#c8c9cc}.loading__spinner[data-v-49a28488]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:%?45?%;max-width:100%;max-height:100%;height:%?45?%;-webkit-animation:rotate-data-v-49a28488 .8s linear infinite;animation:rotate-data-v-49a28488 .8s linear infinite}.loading__spinner--spinner[data-v-49a28488]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.loading__spinner--circular[data-v-49a28488]{border:%?2?% solid transparent;border-top-color:initial;border-radius:100%}.loading__text[data-v-49a28488]{margin-left:%?16?%;color:#969799;font-size:%?28?%;line-height:%?40?%}.loading__text[data-v-49a28488]:empty{display:none}.loading--vertical[data-v-49a28488]{-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.loading--vertical .loading__text[data-v-49a28488]{margin:%?16?% 0 0}.loading__dot[data-v-49a28488]{position:absolute;top:0;left:0;width:100%;height:100%}.loading__dot[data-v-49a28488]:before{display:block;width:%?4?%;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.loading__dot[data-v-49a28488]:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.loading__dot[data-v-49a28488]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.loading__dot[data-v-49a28488]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.loading__dot[data-v-49a28488]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.loading__dot[data-v-49a28488]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.loading__dot[data-v-49a28488]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.loading__dot[data-v-49a28488]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.loading__dot[data-v-49a28488]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.loading__dot[data-v-49a28488]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.loading__dot[data-v-49a28488]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.loading__dot[data-v-49a28488]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.loading__dot[data-v-49a28488]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes rotate-data-v-49a28488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-49a28488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},"87d9":function(t,e,a){"use strict";a.r(e);var i=a("6254"),n=a("c8d0");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("c60d");var o,d=a("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"ac597f54",null,!1,i["a"],o);e["default"]=s.exports},"87f9":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".loading[data-v-5bac94aa]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.loading.flex[data-v-5bac94aa]{position:static;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%}",""]),t.exports=e},"8f1e":function(t,e,a){"use strict";a.r(e);var i=a("fb6e"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},9532:function(t,e,a){"use strict";a.r(e);var i=a("65b6"),n=a("57b8");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("38f0");var o,d=a("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"49a28488",null,!1,i["a"],o);e["default"]=s.exports},a9c8:function(t,e,a){var i=a("4a12");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("e36e5a72",i,!0,{sourceMap:!1,shadowMode:!1})},c60d:function(t,e,a){"use strict";var i=a("a9c8"),n=a.n(i);n.a},c8d0:function(t,e,a){"use strict";a.r(e);var i=a("e80e"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},e80e:function(t,e,a){"use strict";(function(t){var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),r=a("2f51"),o={data:function(){return{detail:{},showModal:!1,isFirstLoading:!0}},methods:{verificationFun:function(){var t=this;(0,r.verification)({pickup_code:this.code}).then((function(e){t.isFirstLoading=!1,1==e.code&&(t.detail=e.data)}))},handleVerificationConfirm:function(){var t=this;(0,r.verificationConfirm)({id:this.detail.id}).then((function(e){1==e.code&&(uni.$emit("refreshverify"),t.$toast({title:e.msg},{tab:3,url:1}))}))}},onLoad:function(e){var a=this;return(0,n.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a.code=e.code,a.verificationFun(),t.log(e);case 3:case"end":return i.stop()}}),i)})))()}};e.default=o}).call(this,a("5a52")["default"])},fb6e:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},props:{type:{type:String,default:"fixed"},backgroundColor:{type:String,default:"#fff"},color:{type:String},size:{type:Number,default:40}},methods:{}};e.default=i},fcb8:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={loading:a("9532").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:"loading "+("flex"==t.type?"flex":""),style:{backgroundColor:t.backgroundColor}},[a("loading",{attrs:{color:t.color,size:t.size}})],1)},r=[]},febb:function(t,e,a){"use strict";var i=a("4e5e"),n=a.n(i);n.a}}]);