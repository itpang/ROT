(window.webpackJsonp=window.webpackJsonp||[]).push([[24,12,14,15],{415:function(t,e,r){"use strict";var o=r(13),n=r(2),c=r(121),l=r(24),d=r(14),h=r(53),f=r(258),v=r(84),m=r(257),y=r(5),x=r(70),w=r(85).f,_=r(45).f,I=r(23).f,S=r(416).trim,C="Number",k=n.Number,T=k.prototype,N=h(x(T))==C,E=function(t){if(v(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,o,n,c,l,d,code,h=m(t,"number");if("string"==typeof h&&h.length>2)if(43===(e=(h=S(h)).charCodeAt(0))||45===e){if(88===(r=h.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+h}for(l=(c=h.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>n)return NaN;return parseInt(c,o)}return+h};if(c(C,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var A,z=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof z&&(N?y((function(){T.valueOf.call(r)})):h(r)!=C)?f(new k(E(e)),r,z):E(e)},O=o?w(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),G=0;O.length>G;G++)d(k,A=O[G])&&!d(z,A)&&I(z,A,_(k,A));z.prototype=T,T.constructor=z,l(n,C,z)}},416:function(t,e,r){var o=r(28),n=r(11),c="["+r(417)+"]",l=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),h=function(t){return function(e){var r=n(o(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(d,"")),r}};t.exports={start:h(1),end:h(2),trim:h(3)}},417:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},418:function(t,e,r){var content=r(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("03051d40",content,!0,{sourceMap:!1})},419:function(t,e,r){"use strict";r.r(e);r(415),r(69),r(259);var o={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:Number,default:14},secondSize:{type:Number,default:14},color:{type:String},weight:{type:[String,Number],default:500},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:Number,default:14},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(t){this.priceFormat()}},methods:{priceFormat:function(){var t=this.price,e={};null!==t&&(t=parseFloat(t),t=String(t).split("."),e.first=t[0],e.second=t[1],this.priceSlice=e)}}},n=(r(420),r(8)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{class:(t.lineThrough?"line-through":"")+"price-format",style:{color:t.color,"font-weight":t.weight}},[t.showSubscript?r("span",{style:{"font-size":t.subscriptSize+"px","margin-right":"1px"}},[t._v("¥")]):t._e(),t._v(" "),r("span",{style:{"font-size":t.firstSize+"px","margin-right":"1px"}},[t._v(t._s(t.priceSlice.first))]),t._v(" "),t.priceSlice.second?r("span",{style:{"font-size":t.secondSize+"px"}},[t._v("."+t._s(t.priceSlice.second))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},420:function(t,e,r){"use strict";r(418)},421:function(t,e,r){var o=r(15)(!1);o.push([t.i,".price-format{display:flex;align-items:baseline}",""]),t.exports=o},422:function(t,e,r){var content=r(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("7277513c",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r(422)},424:function(t,e,r){var o=r(15)(!1);o.push([t.i,".null-data[data-v-7fa0e58c]{padding:100px}.null-data .img-null[data-v-7fa0e58c]{width:150px;height:150px}",""]),t.exports=o},425:function(t,e,r){"use strict";r.r(e);var o={components:{},props:{img:{type:String},text:{type:String,default:"暂无数据"},imgStyle:{type:String,default:""}},methods:{}},n=(r(423),r(8)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white column-center null-data"},[r("img",{staticClass:"img-null",style:t.imgStyle,attrs:{src:t.img,alt:""}}),t._v(" "),r("div",{staticClass:"muted mt8"},[t._v(t._s(t.text))])])}),[],!1,null,"7fa0e58c",null);e.default=component.exports},429:function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return l}));var o=r(33);r(69),r(259),r(89),r(54),r(19),r(36),r(55),r(37),r(17),r(56),r(57),r(46);var n=function(t){var time=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,e=arguments.length>2?arguments[2]:void 0,r=new Date(0).getTime();return function(){var o=(new Date).getTime();if(o-r>time){for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];t.apply(e,c),r=o}}};function c(t){var p="";if("object"==Object(o.a)(t)){for(var e in p="?",t)p+="".concat(e,"=").concat(t[e],"&");p=p.slice(0,-1)}return p}var l=function(t){var e=document.createElement("input");e.setAttribute("value",t),document.body.appendChild(e),e.select();try{if(document.execCommand("copy"))return Promise.resolve();throw new Error}catch(t){return Promise.reject(t)}finally{document.body.removeChild(e)}}},430:function(t,e,r){var content=r(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("f37a30f2",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";r(430)},439:function(t,e,r){var o=r(15)(!1);o.push([t.i,".goods-list[data-v-483dfcdd]{align-items:stretch}.goods-list .goods-item[data-v-483dfcdd]{display:block;box-sizing:border-box;width:224px;height:310px;margin-bottom:16px;padding:12px 12px 16px;border-radius:4px;transition:all .2s}.goods-list .goods-item[data-v-483dfcdd]:hover{transform:translateY(-8px);box-shadow:0 0 6px rgba(0,0,0,.1)}.goods-list .goods-item .goods-img[data-v-483dfcdd]{width:200px;height:200px}.goods-list .goods-item .name[data-v-483dfcdd]{margin-bottom:10px;height:40px;line-height:20px}.goods-list .goods-item .seckill .btn[data-v-483dfcdd]{padding:4px 12px;border-radius:4px;border:1px solid transparent}.goods-list .goods-item .seckill .btn.not-start[data-v-483dfcdd]{border-color:#ff2c3c;color:#ff2c3c;background-color:transparent}.goods-list .goods-item .seckill .btn.end[data-v-483dfcdd]{background-color:#e5e5e5;color:#fff}",""]),t.exports=o},447:function(t,e,r){"use strict";r.r(e);r(415);var o={props:{list:{type:Array,default:function(){return[]}},num:{type:Number,default:5},type:{type:String},status:{type:Number}},watch:{list:{immediate:!0,handler:function(t){}}},computed:{getSeckillText:function(){switch(this.status){case 0:return"未开始";case 1:return"立即抢购";case 2:return"已结束"}}}},n=(r(438),r(8)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goods-list row wrap"},t._l(t.list,(function(e,o){return r("nuxt-link",{key:o,staticClass:"goods-item bg-white",style:{marginRight:(o+1)%t.num==0?0:"14px"},attrs:{to:"/goods_details/"+e.id}},[r("el-image",{staticClass:"goods-img",attrs:{lazy:"",src:e.image,alt:""}}),t._v(" "),r("div",{staticClass:"name line2"},[t._v(t._s(e.name))]),t._v(" "),"seckill"==t.type?r("div",{staticClass:"seckill row-between"},[r("div",{staticClass:"primary row"},[t._v("\n        秒杀价"),r("price-formate",{attrs:{price:e.seckill_price,"first-size":18}})],1),t._v(" "),r("div",{class:["btn bg-primary white",{"not-start":0==t.status,end:2==t.status}]},[t._v(t._s(t.getSeckillText))])]):r("div",{staticClass:"row-between wrap"},[r("div",{staticClass:"price row"},[r("div",{staticClass:"primary mr8"},[r("price-formate",{attrs:{price:e.price,"first-size":16}})],1),t._v(" "),r("div",{staticClass:"muted sm line-through"},[r("price-formate",{attrs:{price:e.market_price}})],1)]),t._v(" "),r("div",{staticClass:"muted xs"},[t._v(t._s(e.sales_sum)+"人购买")])])],1)})),1)}),[],!1,null,"483dfcdd",null);e.default=component.exports;installComponents(component,{PriceFormate:r(419).default})},457:function(t,e,r){t.exports=r.p+"img/goods_null.38f1689.png"},492:function(t,e,r){var content=r(530);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("38d10b78",content,!0,{sourceMap:!1})},529:function(t,e,r){"use strict";r(492)},530:function(t,e,r){var o=r(15)(!1);o.push([t.i,".category[data-v-97320974]{padding:16px 0}.category .category-hd .category-wrap[data-v-97320974]{padding:0 16px}.category .category-hd .category-con[data-v-97320974]{border-bottom:1px dashed #e5e5e5;align-items:flex-start;padding-top:16px}.category .category-hd .category-con .name[data-v-97320974]{flex:none}.category .category-hd .category-con .item[data-v-97320974]{margin-bottom:16px;width:84px;margin-left:14px;cursor:pointer}.category .category-hd .category-con .item.active[data-v-97320974],.category .category-hd .category-con .item[data-v-97320974]:hover{color:#ff2c3c}.category .category-hd .sort[data-v-97320974]{padding:15px 16px}.category .category-hd .sort .sort-name .item[data-v-97320974]{margin-right:30px;cursor:pointer}.category .category-hd .sort .sort-name .item.active[data-v-97320974]{color:#ff2c3c}",""]),t.exports=o},614:function(t,e,r){"use strict";r.r(e);var o=r(6),n=(r(415),r(48),r(429)),c={head:function(){return{title:this.$store.getters.headTitle,link:[{rel:"icon",type:"image/x-icon",href:this.$store.getters.favicon}]}},watchQuery:!0,asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.query,r=t.$get,e.next=3,r("goods_category/lists",{params:{client:2}});case 3:return o=e.sent,data=o.data,e.abrupt("return",{categoryList:data});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{count:0,oneIndex:0,twoIndex:"",threeIndex:"",categoryOne:[],categoryTwo:[],categoryThree:[],sortType:"",saleSort:"desc",priceSort:"desc",page:"",goodsList:[],cateId:0,isHasGoods:!0}},created:function(){this.changeSortType=Object(n.c)(this.changeSortType,500,this)},methods:{changeData:function(t){var e=this.categoryList;this.setIndex(t),this.categoryOne=e,this.categoryTwo=e[this.oneIndex]?e[this.oneIndex].sons:[],this.categoryThree=this.categoryTwo[this.twoIndex]?this.categoryTwo[this.twoIndex].sons:[],this.setCateId(t),this.getGoods()},setCateId:function(t){""==this.twoIndex&&""==this.threeIndex&&""!==this.oneIndex&&(this.cateId=this.categoryOne[this.oneIndex].id),""==this.threeIndex&&""!==this.twoIndex&&(this.cateId=this.categoryTwo[this.twoIndex].id),t&&(this.cateId=t)},setIndex:function(t){var e=this;this.categoryList.some((function(r,o){return r.id===t?(e.oneIndex=o,e.twoIndex="",e.threeIndex="",!0):r.sons&&r.sons.some((function(r,n){return r.id===t?(e.oneIndex=o,e.twoIndex=n,e.threeIndex="",!0):r.sons&&r.sons.some((function(r,c){if(r.id===t)return e.oneIndex=o,e.twoIndex=n,e.threeIndex=c,!0}))}))}))},clickAllTwo:function(){this.twoIndex="",this.threeIndex="",this.changeData()},clickAll:function(){this.threeIndex="",this.changeData()},changeSortType:function(t){switch(this.sortType=t,t){case"price":"asc"==this.priceSort?this.priceSort="desc":"desc"==this.priceSort&&(this.priceSort="asc");break;case"sales_sum":"asc"==this.saleSort?this.saleSort="desc":"desc"==this.saleSort&&(this.saleSort="asc")}this.getGoods()},changePage:function(t){this.page=t,this.getGoods()},getGoods:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,c,l,d,h,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.priceSort,o=t.sortType,n=t.saleSort,c=t.cateId,l="",e.t0=o,e.next="price"===e.t0?6:"sales_sum"===e.t0?8:10;break;case 6:return l=r,e.abrupt("break",10);case 8:return l=n,e.abrupt("break",10);case 10:return e.next=12,t.$get("pc/goodsList",{params:{page_size:20,page_no:t.page,sort_type:o,sort:l,category_id:c}});case 12:d=e.sent,h=d.data,f=h.list,v=h.count,t.goodsList=f,f.length?t.isHasGoods=!0:t.isHasGoods=!1,t.count=v;case 19:case"end":return e.stop()}}),e)})))()}},watch:{categoryList:{immediate:!0,handler:function(t){var e=this.$route.query.id;this.changeData(Number(e))}}}},l=(r(529),r(8)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"category"},[o("div",{staticClass:"category-hd bg-white"},[o("div",{staticClass:"category-wrap"},[o("div",{staticClass:"category-con row"},[o("div",{staticClass:"name muted"},[t._v("一级分类：")]),t._v(" "),o("div",{staticClass:"category-list row wrap lighter"},t._l(t.categoryOne,(function(e,r){return o("div",{key:r,class:["item line1",{active:t.oneIndex==r}],on:{click:function(r){return t.changeData(e.id)}}},[t._v("\n                        "+t._s(e.name)+"\n                    ")])})),0)]),t._v(" "),o("div",{staticClass:"category-con row"},[o("div",{staticClass:"name muted"},[t._v("二级分类：")]),t._v(" "),o("div",{staticClass:"category-list row wrap lighter"},[o("div",{class:["item line1",{active:""===t.twoIndex}],on:{click:t.clickAllTwo}},[t._v("\n                        全部\n                    ")]),t._v(" "),t._l(t.categoryTwo,(function(e,r){return o("div",{key:r,class:["item line1",{active:t.twoIndex===r}],on:{click:function(r){return t.changeData(e.id)}}},[t._v("\n                        "+t._s(e.name)+"\n                    ")])}))],2)]),t._v(" "),o("div",{staticClass:"category-con row"},[o("div",{staticClass:"name muted"},[t._v("三级分类：")]),t._v(" "),o("div",{staticClass:"category-list row wrap lighter"},[o("div",{class:["item line1",{active:""===t.threeIndex}],on:{click:t.clickAll}},[t._v("\n                        全部\n                    ")]),t._v(" "),t._l(t.categoryThree,(function(e,r){return o("div",{key:r,class:["item line1",{active:t.threeIndex===r}],on:{click:function(r){return t.changeData(e.id)}}},[t._v("\n                        "+t._s(e.name)+"\n                    ")])}))],2)])]),t._v(" "),o("div",{staticClass:"sort mb16 row bg-white"},[o("div",{staticClass:"title muted"},[t._v("排序方式：")]),t._v(" "),o("div",{staticClass:"sort-name ml16 row lighter"},[o("div",{class:["item",{active:""==t.sortType}],on:{click:function(e){return t.changeSortType("")}}},[t._v("\n                    综合\n                ")]),t._v(" "),o("div",{class:["item",{active:"price"==t.sortType}],on:{click:function(e){return t.changeSortType("price")}}},[t._v("\n                    价格\n                    "),o("i",{directives:[{name:"show",rawName:"v-show",value:"desc"==t.priceSort,expression:"priceSort == 'desc'"}],staticClass:"el-icon-arrow-down"}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:"asc"==t.priceSort,expression:"priceSort == 'asc'"}],staticClass:"el-icon-arrow-up"})]),t._v(" "),o("div",{class:["item",{active:"sales_sum"==t.sortType}],on:{click:function(e){return t.changeSortType("sales_sum")}}},[t._v("\n                    销量\n                    "),o("i",{directives:[{name:"show",rawName:"v-show",value:"desc"==t.saleSort,expression:"saleSort == 'desc'"}],staticClass:"el-icon-arrow-down"}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:"asc"==t.saleSort,expression:"saleSort == 'asc'"}],staticClass:"el-icon-arrow-up"})])])])]),t._v(" "),t.isHasGoods?o("div",[o("goods-list",{attrs:{list:t.goodsList}}),t._v(" "),t.count?o("div",{staticClass:"pagination row-center",staticStyle:{"padding-bottom":"38px"}},[o("el-pagination",{attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next",total:t.count,"prev-text":"上一页","next-text":"下一页","page-size":20},on:{"current-change":t.changePage}})],1):t._e()],1):o("null-data",{attrs:{img:r(457),text:"暂无商品~"}})],1)}),[],!1,null,"97320974",null);e.default=component.exports;installComponents(component,{GoodsList:r(447).default,NullData:r(425).default})}}]);