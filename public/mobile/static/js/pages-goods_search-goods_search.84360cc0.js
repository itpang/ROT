(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods_search-goods_search"],{"180e":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String},searchIcon:{type:String,default:"search"},wrapBgColor:{type:String,default:"#fff"},hideRight:{type:Boolean,default:!1}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(t){this.$emit("input",t),this.$emit("change",t)},value:{immediate:!0,handler:function(t){this.keyword=t}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(t){this.keyword=t.detail.value},clear:function(){var t=this;this.keyword="",this.$nextTick((function(){t.$emit("clear")}))},search:function(t){this.$emit("search",t.detail.value);try{uni.hideKeyboard()}catch(t){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(t){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var t=this;setTimeout((function(){t.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};e.default=n},1849:function(t,e,i){"use strict";i.r(e);var n=i("75d8"),o=i("3862");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("7a56");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"29e1f541",null,!1,n["a"],r);e["default"]=c.exports},"1b1b":function(t,e,i){var n=i("f129");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("c7e00e40",n,!0,{sourceMap:!1,shadowMode:!1})},"1b91":function(t,e,i){"use strict";i.r(e);var n=i("8ab9"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},2323:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={loading:i("9532").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"loading-footer row-center",style:"color: "+t.color},["loading"===t.status?i("v-uni-view",{staticClass:"loading row"},[i("loading",{staticClass:"mr20",attrs:{color:t.color}}),i("v-uni-text",{style:"color: "+t.color},[t._v(t._s(t.loadingText))])],1):t._e(),"finished"===t.status?i("v-uni-view",{staticClass:"finished"},[t._v(t._s(t.finishedText))]):t._e(),"error"===t.status?i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onRefresh.apply(void 0,arguments)}}},[t._v(t._s(t.errorText))]):t._e(),"empty"===t.status?i("v-uni-view",{staticClass:"empty"},[t.slotEmpty?t._t("empty"):i("v-uni-text",[t._v("暂无数据")])],2):t._e()],1)},a=[]},"2dc4":function(t,e,i){"use strict";var n=i("6f9d"),o=i.n(n);o.a},"34bf":function(t,e,i){"use strict";i.r(e);var n=i("93e9"),o=i("1b91");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("9c24");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"333ff7d5",null,!1,n["a"],r);e["default"]=c.exports},3726:function(t,e,i){"use strict";i.r(e);var n=i("c18e"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},3862:function(t,e,i){"use strict";i.r(e);var n=i("180e"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"38f0":function(t,e,i){"use strict";var n=i("80ba"),o=i.n(n);o.a},"3af4":function(t,e,i){var n=i("8124");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("4b0e9618",n,!0,{sourceMap:!1,shadowMode:!1})},"3bf3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},components:{},props:{color:{type:String,default:""},direction:{type:String},size:{type:String},opacity:{type:String,default:"0.8"}},methods:{}};e.default=n},"3bf6":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-sticky",props:{offsetTop:{type:[Number,String],default:0},index:{type:[Number,String],default:""},enable:{type:Boolean,default:!0},h5NavHeight:{type:[Number,String],default:44},bgColor:{type:String,default:"#ffffff"},zIndex:{type:[Number,String],default:""}},data:function(){return{fixed:!1,height:"auto",stickyTop:0,elClass:this.$u.guid(),left:0,width:"auto"}},watch:{offsetTop:function(t){this.initObserver()},enable:function(t){0==t?(this.fixed=!1,this.disconnectObserver("contentObserver")):this.initObserver()}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.sticky}},mounted:function(){this.initObserver()},methods:{initObserver:function(){var t=this;this.enable&&(this.stickyTop=0!=this.offsetTop?uni.upx2px(this.offsetTop)+this.h5NavHeight:this.h5NavHeight,this.disconnectObserver("contentObserver"),this.$uGetRect("."+this.elClass).then((function(e){t.height=e.height,t.left=e.left,t.width=e.width,t.$nextTick((function(){t.observeContent()}))})))},observeContent:function(){var t=this;this.disconnectObserver("contentObserver");var e=this.createIntersectionObserver({thresholds:[.95,.98,1]});e.relativeToViewport({top:-this.stickyTop}),e.observe("."+this.elClass,(function(e){t.enable&&t.setFixed(e.boundingClientRect.top)})),this.contentObserver=e},setFixed:function(t){var e=t<this.stickyTop;e?this.$emit("fixed",this.index):this.fixed&&this.$emit("unfixed",this.index),this.fixed=e},disconnectObserver:function(t){var e=this[t];e&&e.disconnect()}},beforeDestroy:function(){this.disconnectObserver("contentObserver")}};e.default=n},4265:function(t,e,i){"use strict";i("a630"),i("a9e3"),i("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{color:String,vertical:Boolean,type:{type:String,default:"spinner"},size:{type:Number,default:40},textSize:String},data:function(){return{array12:Array.from({length:12})}}};e.default=n},"57b8":function(t,e,i){"use strict";i.r(e);var n=i("4265"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},6121:function(t,e,i){var n=i("cfe5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("53c5c943",n,!0,{sourceMap:!1,shadowMode:!1})},"65b6":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:"loading "+(t.vertical?"loading--vertical":"")},[i("v-uni-view",{class:"loading__spinner loading__spinner--"+t.type,style:{color:t.color,width:t.size+"rpx",height:t.size+"rpx"}},t._l(t.array12,(function(e,n){return"spinner"===t.type?i("v-uni-view",{key:n,staticClass:"loading__dot"}):t._e()})),1),i("v-uni-view",{staticClass:"loading__text",style:{"font-size":t.textSize+"rpx",color:t.color}},[t._t("default")],2)],1)},a=[]},"6f9d":function(t,e,i){var n=i("8893");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("7092fa76",n,!0,{sourceMap:!1,shadowMode:!1})},"75d8":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uIcon:i("2124").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-search",style:{margin:t.margin,backgroundColor:t.wrapBgColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-content",style:{backgroundColor:t.bgColor,borderRadius:"round"==t.shape?"100rpx":"10rpx",border:t.borderStyle,height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:t.searchIcon,color:t.searchIconColor?t.searchIconColor:t.color}})],1),i("v-uni-input",{staticClass:"u-input",style:[{textAlign:t.inputAlign,color:t.color,backgroundColor:t.bgColor},t.inputStyle],attrs:{"confirm-type":"search",value:t.value,disabled:t.disabled,focus:t.focus,maxlength:t.maxlength,"placeholder-class":"u-placeholder-class",placeholder:t.placeholder,"placeholder-style":"color: "+t.placeholderColor,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getFocus.apply(void 0,arguments)}}}),t.keyword&&t.clearabled&&t.focused?i("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):t._e()],1),t.hideRight?i("v-uni-view",{staticClass:"u-action",class:[t.showActionBtn||t.show?"u-action-active":""],style:[t.actionStyle],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v(t._s(t.actionText))]):t._e()],1)},a=[]},"7a56":function(t,e,i){"use strict";var n=i("f805"),o=i.n(n);o.a},"80ba":function(t,e,i){var n=i("87b0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("8b2e258e",n,!0,{sourceMap:!1,shadowMode:!1})},8124:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".loading-footer[data-v-1b4a51d1]{padding:%?30?% 0;color:#666}",""]),t.exports=e},"87b0":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'[data-v-49a28488]:host{font-size:0;line-height:1}.loading[data-v-49a28488]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#c8c9cc}.loading__spinner[data-v-49a28488]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:%?45?%;max-width:100%;max-height:100%;height:%?45?%;-webkit-animation:rotate-data-v-49a28488 .8s linear infinite;animation:rotate-data-v-49a28488 .8s linear infinite}.loading__spinner--spinner[data-v-49a28488]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.loading__spinner--circular[data-v-49a28488]{border:%?2?% solid transparent;border-top-color:initial;border-radius:100%}.loading__text[data-v-49a28488]{margin-left:%?16?%;color:#969799;font-size:%?28?%;line-height:%?40?%}.loading__text[data-v-49a28488]:empty{display:none}.loading--vertical[data-v-49a28488]{-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.loading--vertical .loading__text[data-v-49a28488]{margin:%?16?% 0 0}.loading__dot[data-v-49a28488]{position:absolute;top:0;left:0;width:100%;height:100%}.loading__dot[data-v-49a28488]:before{display:block;width:%?4?%;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.loading__dot[data-v-49a28488]:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.loading__dot[data-v-49a28488]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.loading__dot[data-v-49a28488]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.loading__dot[data-v-49a28488]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.loading__dot[data-v-49a28488]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.loading__dot[data-v-49a28488]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.loading__dot[data-v-49a28488]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.loading__dot[data-v-49a28488]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.loading__dot[data-v-49a28488]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.loading__dot[data-v-49a28488]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.loading__dot[data-v-49a28488]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.loading__dot[data-v-49a28488]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes rotate-data-v-49a28488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-49a28488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},8893:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".trigonometry[data-v-6b0e7d7b]{border-color:transparent transparent currentcolor currentcolor;border-style:solid;border-width:3px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:.8;margin:-3px %?10?% 0}.up[data-v-6b0e7d7b]{margin-top:%?1?%;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.small[data-v-6b0e7d7b]{border-width:2px;margin-top:-2px}.small.up[data-v-6b0e7d7b]{margin-top:2px}",""]),t.exports=e},"8ab9":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var o=n(i("1da1")),a=i("a9ad"),r=i("125d"),s=i("eae9"),c={data:function(){return{keyword:"",status:s.loadingType.LOADING,page:1,goodsType:"double",goodsList:[],priceSort:"",saleSort:"",showHistory:!1,hotList:[],historyList:[]}},components:{},props:{},watch:{keyword:function(t,e){t||this.id||(this.showHistory=!0)},showHistory:function(t){t&&this.getSearchpageFun()}},computed:{comprehensive:function(){var t=this.priceSort,e=this.saleSort;return""==t&&""==e}},onLoad:function(t){this.onNormal=(0,r.trottle)(this.onNormal,500,this),this.onPriceSort=(0,r.trottle)(this.onPriceSort,500,this),this.onSaleSort=(0,r.trottle)(this.onSaleSort,500,this),this.onSearch=(0,r.trottle)(this.onSearch,500,this),this.init(t)},onReachBottom:function(){this.getGoodsSearchFun()},methods:{onChange:function(t){this.keyword=t.value},changeType:function(){this.goodsType="one"===this.goodsType?"double":"one"},clearSearchFun:function(){var t=this;(0,a.clearSearch)().then((function(e){1==e.code&&t.getSearchpageFun()}))},onNormal:function(){this.priceSort="",this.saleSort="",this.onRefresh()},onPriceSort:function(){var t=this.priceSort;this.saleSort="",this.priceSort="asc"==t?"desc":"asc",this.onRefresh()},onSaleSort:function(){var t=this.saleSort;this.priceSort="",this.saleSort="desc"==t?"asc":"desc",this.onSearch()},init:function(t){var e=t.id,i=t.name,n=t.type;this.type=n,e?(uni.setNavigationBarTitle({title:i}),this.id=e,this.getGoodsSearchFun()):(uni.setNavigationBarTitle({title:"搜索"}),this.showHistory=!0)},getSearchpageFun:function(){var t=this;(0,a.getSearchpage)().then((function(e){if(1==e.code){var i=e.data,n=i.history_lists,o=i.hot_lists;t.hotList=o,t.historyList=n}}))},onClear:function(){this.id&&this.onSearch()},onSearch:function(){this.onRefresh()},onRefresh:function(){var t=this;this.showHistory=!1,this.page=1,this.goodsList=[],this.status=s.loadingType.LOADING,this.$nextTick((function(){t.getGoodsSearchFun()}))},onChangeKeyword:function(t){this.keyword=t,this.showHistory=!1,this.onRefresh()},getGoodsSearchFun:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var i,n,o,c,l,d,u,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t.page,n=t.goodsList,o=t.keyword,c=t.priceSort,l=t.saleSort,d=t.status,d!=s.loadingType.FINISHED){e.next=3;break}return e.abrupt("return");case 3:return u={category_id:1==t.type?t.id:"",brand_id:0==t.type?t.id:"",page_no:i,keyword:o,price:c,sales_sum:l},e.next=6,(0,r.loadingFun)(a.getGoodsSearch,i,n,d,u);case 6:if(f=e.sent,f){e.next=9;break}return e.abrupt("return");case 9:t.page=f.page,t.goodsList=f.dataList,t.status=f.status;case 12:case"end":return e.stop()}}),e)})))()}}};e.default=c},"8f17":function(t,e,i){"use strict";var n=i("3af4"),o=i.n(n);o.a},"93e9":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uSticky:i("d7d6").default,uSearch:i("1849").default,trigonometry:i("d254").default,goodsList:i("c1a8").default,loadingFooter:i("f9f9").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"goods-search"},[i("v-uni-view",{staticClass:"header-wrap"},[i("u-sticky",{attrs:{"offset-top":"0","h5-nav-height":"0"}},[i("v-uni-view",{staticClass:"search"},[i("u-search",{attrs:{focus:t.showHistory,"bg-color":"#F4F4F4"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.showHistory=!0},search:function(e){arguments[0]=e=t.$handleEvent(e),t.onSearch.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.showHistory,expression:"!showHistory"}],staticClass:"header row bg-white"},[i("v-uni-view",{class:"tag row-center "+(t.comprehensive?"primary":""),on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onNormal.apply(void 0,arguments)}}},[t._v("综合")]),i("v-uni-view",{staticClass:"tag row-center",attrs:{"data-type":"priceSort"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPriceSort.apply(void 0,arguments)}}},[i("v-uni-text",{class:t.priceSort?"primary":""},[t._v("价格")]),i("v-uni-view",[i("trigonometry",{attrs:{direction:"up",size:"small",color:"desc"==t.priceSort?"#FF5058":"#333"}}),i("trigonometry",{attrs:{size:"small",color:"asc"==t.priceSort?"#FF5058":"#333"}})],1)],1),i("v-uni-view",{staticClass:"tag row-center",attrs:{"data-type":"saleSort"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSaleSort.apply(void 0,arguments)}}},[i("v-uni-text",{class:t.saleSort?"primary":""},[t._v("销量")]),i("v-uni-view",[i("trigonometry",{attrs:{direction:"up",size:"small",color:"desc"==t.saleSort?"#FF5058":"#333"}}),i("trigonometry",{attrs:{size:"small",color:"asc"==t.saleSort?"#FF5058":"#333"}})],1)],1),i("v-uni-view",{staticClass:"tag row-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeType.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"icon-sm",attrs:{src:"one"===t.goodsType?"/static/images/icon_double.png":"/static/images/icon_one.png"}})],1)],1)],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showHistory,expression:"showHistory"}],staticClass:"content bg-white"},[t.hotList.length?i("v-uni-view",{staticClass:"search-words"},[i("v-uni-view",{staticClass:"title"},[t._v("热门搜索")]),i("v-uni-view",{staticClass:"words row wrap"},t._l(t.hotList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item br60  mr20 mb20 lighter sm line1",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onChangeKeyword(e)}}},[t._v(t._s(e))])})),1)],1):t._e(),t.historyList.length?i("v-uni-view",{staticClass:"search-words"},[i("v-uni-view",{staticClass:"title row-between"},[i("v-uni-view",[t._v("历史搜索")]),i("v-uni-view",{staticClass:"xs muted mr20",staticStyle:{padding:"10rpx 20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearSearchFun.apply(void 0,arguments)}}},[t._v("清空")])],1),i("v-uni-view",{staticClass:"words row wrap"},t._l(t.historyList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item br60  mr20 mb20 lighter sm line1",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onChangeKeyword(e)}}},[t._v(t._s(e))])})),1)],1):t._e()],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.showHistory,expression:"!showHistory"}],staticClass:"content"},[i("v-uni-view",{staticClass:"goods-list"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"double"==t.goodsType,expression:"goodsType == 'double'"}],staticClass:"double"},[i("goods-list",{attrs:{type:"double",list:t.goodsList}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"one"==t.goodsType,expression:"goodsType == 'one'"}],staticClass:"one"},[i("goods-list",{attrs:{list:t.goodsList,type:"one"}})],1)],1),i("loading-footer",{attrs:{status:t.status,"slot-empty":!0}},[i("v-uni-view",{staticClass:"column-center",staticStyle:{"padding-top":"200rpx"},attrs:{slot:"empty"},slot:"empty"},[i("v-uni-image",{staticClass:"img-null",attrs:{src:"/static/images/goods_null.png"}}),i("v-uni-text",{staticClass:"lighter"},[t._v("暂无商品")])],1)],1)],1)],1)},a=[]},9532:function(t,e,i){"use strict";i.r(e);var n=i("65b6"),o=i("57b8");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("38f0");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"49a28488",null,!1,n["a"],r);e["default"]=c.exports},"9c24":function(t,e,i){"use strict";var n=i("6121"),o=i.n(n);o.a},a884:function(t,e,i){"use strict";var n=i("1b1b"),o=i.n(n);o.a},ad8e:function(t,e,i){"use strict";i.r(e);var n=i("3bf6"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},c18e:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},components:{},props:{status:{type:String,default:"loading"},errorText:{type:String,default:"加载失败，点击重新加载"},loadingText:{type:String,default:"加载中..."},finishedText:{type:String,default:"我可是有底线的～"},slotEmpty:{type:Boolean,default:!1},color:{type:String,default:"#666"}},methods:{onRefresh:function(){this.$emit("refresh")}}};e.default=n},cce7:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-sticky-wrap",class:[t.elClass],style:{height:t.fixed?t.height+"px":"auto",backgroundColor:t.bgColor}},[i("v-uni-view",{staticClass:"u-sticky",style:{position:t.fixed?"fixed":"static",top:t.stickyTop+"px",left:t.left+"px",width:"auto"==t.width?"auto":t.width+"px",zIndex:t.uZIndex}},[t._t("default")],2)],1)],1)},a=[]},ccee:function(t,e,i){"use strict";i.r(e);var n=i("3bf3"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},cf97:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:"trigonometry "+("up"===t.direction?"up":"")+" "+("small"===t.size?"small":""),style:"color:"+t.color+";opacity: "+t.opacity})},a=[]},cfe5:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.goods-search .header-wrap .search[data-v-333ff7d5]{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.03);box-shadow:0 3px 6px rgba(0,0,0,.03);position:relative;z-index:1}.goods-search .header-wrap .header[data-v-333ff7d5]{height:%?80?%}.goods-search .header-wrap .header .tag[data-v-333ff7d5]{height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.goods-search .content .search-words[data-v-333ff7d5]{padding-left:%?24?%;padding-bottom:%?20?%}.goods-search .content .search-words .title[data-v-333ff7d5]{padding:%?26?% 0}.goods-search .content .search-words .words .item[data-v-333ff7d5]{line-height:%?52?%;height:%?52?%;padding:0 %?24?%;background-color:#f5f5f5}.goods-search .content .goods-list[data-v-333ff7d5]{overflow:hidden}',""]),t.exports=e},d254:function(t,e,i){"use strict";i.r(e);var n=i("cf97"),o=i("ccee");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("2dc4");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"6b0e7d7b",null,!1,n["a"],r);e["default"]=c.exports},d7d6:function(t,e,i){"use strict";i.r(e);var n=i("cce7"),o=i("ad8e");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("a884");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"5d87ddbc",null,!1,n["a"],r);e["default"]=c.exports},e8e7:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.u-search[data-v-29e1f541]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?15?% %?20?%}.u-content[data-v-29e1f541]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?18?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-clear-icon[data-v-29e1f541]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-input[data-v-29e1f541]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-29e1f541]{width:%?40?%;height:100%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-29e1f541]{color:#909399}.u-action[data-v-29e1f541]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;-webkit-transition:all .3s;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-29e1f541]{width:%?80?%;margin-left:%?10?%}',""]),t.exports=e},f129:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.u-sticky[data-v-5d87ddbc]{z-index:9999999999}',""]),t.exports=e},f805:function(t,e,i){var n=i("e8e7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("195d1991",n,!0,{sourceMap:!1,shadowMode:!1})},f9f9:function(t,e,i){"use strict";i.r(e);var n=i("2323"),o=i("3726");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("8f17");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"1b4a51d1",null,!1,n["a"],r);e["default"]=c.exports}}]);