(window.webpackJsonp=window.webpackJsonp||[]).push([[12,15],{415:function(t,e,r){"use strict";var o=r(13),n=r(2),c=r(121),l=r(24),d=r(14),f=r(53),m=r(258),h=r(84),v=r(257),x=r(5),_=r(70),y=r(85).f,w=r(45).f,N=r(23).f,S=r(416).trim,I="Number",k=n.Number,C=k.prototype,E=f(_(C))==I,z=function(t){if(h(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,o,n,c,l,d,code,f=v(t,"number");if("string"==typeof f&&f.length>2)if(43===(e=(f=S(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>n)return NaN;return parseInt(c,o)}return+f};if(c(I,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var A,F=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof F&&(E?x((function(){C.valueOf.call(r)})):f(r)!=I)?m(new k(z(e)),r,F):z(e)},T=o?y(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;T.length>M;M++)d(k,A=T[M])&&!d(F,A)&&N(F,A,w(k,A));F.prototype=C,C.constructor=F,l(n,I,F)}},416:function(t,e,r){var o=r(28),n=r(11),c="["+r(417)+"]",l=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),f=function(t){return function(e){var r=n(o(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(d,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},417:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},418:function(t,e,r){var content=r(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("03051d40",content,!0,{sourceMap:!1})},419:function(t,e,r){"use strict";r.r(e);r(415),r(69),r(259);var o={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:Number,default:14},secondSize:{type:Number,default:14},color:{type:String},weight:{type:[String,Number],default:500},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:Number,default:14},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(t){this.priceFormat()}},methods:{priceFormat:function(){var t=this.price,e={};null!==t&&(t=parseFloat(t),t=String(t).split("."),e.first=t[0],e.second=t[1],this.priceSlice=e)}}},n=(r(420),r(8)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{class:(t.lineThrough?"line-through":"")+"price-format",style:{color:t.color,"font-weight":t.weight}},[t.showSubscript?r("span",{style:{"font-size":t.subscriptSize+"px","margin-right":"1px"}},[t._v("¥")]):t._e(),t._v(" "),r("span",{style:{"font-size":t.firstSize+"px","margin-right":"1px"}},[t._v(t._s(t.priceSlice.first))]),t._v(" "),t.priceSlice.second?r("span",{style:{"font-size":t.secondSize+"px"}},[t._v("."+t._s(t.priceSlice.second))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},420:function(t,e,r){"use strict";r(418)},421:function(t,e,r){var o=r(15)(!1);o.push([t.i,".price-format{display:flex;align-items:baseline}",""]),t.exports=o},430:function(t,e,r){var content=r(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("f37a30f2",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";r(430)},439:function(t,e,r){var o=r(15)(!1);o.push([t.i,".goods-list[data-v-483dfcdd]{align-items:stretch}.goods-list .goods-item[data-v-483dfcdd]{display:block;box-sizing:border-box;width:224px;height:310px;margin-bottom:16px;padding:12px 12px 16px;border-radius:4px;transition:all .2s}.goods-list .goods-item[data-v-483dfcdd]:hover{transform:translateY(-8px);box-shadow:0 0 6px rgba(0,0,0,.1)}.goods-list .goods-item .goods-img[data-v-483dfcdd]{width:200px;height:200px}.goods-list .goods-item .name[data-v-483dfcdd]{margin-bottom:10px;height:40px;line-height:20px}.goods-list .goods-item .seckill .btn[data-v-483dfcdd]{padding:4px 12px;border-radius:4px;border:1px solid transparent}.goods-list .goods-item .seckill .btn.not-start[data-v-483dfcdd]{border-color:#ff2c3c;color:#ff2c3c;background-color:transparent}.goods-list .goods-item .seckill .btn.end[data-v-483dfcdd]{background-color:#e5e5e5;color:#fff}",""]),t.exports=o},447:function(t,e,r){"use strict";r.r(e);r(415);var o={props:{list:{type:Array,default:function(){return[]}},num:{type:Number,default:5},type:{type:String},status:{type:Number}},watch:{list:{immediate:!0,handler:function(t){}}},computed:{getSeckillText:function(){switch(this.status){case 0:return"未开始";case 1:return"立即抢购";case 2:return"已结束"}}}},n=(r(438),r(8)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goods-list row wrap"},t._l(t.list,(function(e,o){return r("nuxt-link",{key:o,staticClass:"goods-item bg-white",style:{marginRight:(o+1)%t.num==0?0:"14px"},attrs:{to:"/goods_details/"+e.id}},[r("el-image",{staticClass:"goods-img",attrs:{lazy:"",src:e.image,alt:""}}),t._v(" "),r("div",{staticClass:"name line2"},[t._v(t._s(e.name))]),t._v(" "),"seckill"==t.type?r("div",{staticClass:"seckill row-between"},[r("div",{staticClass:"primary row"},[t._v("\n        秒杀价"),r("price-formate",{attrs:{price:e.seckill_price,"first-size":18}})],1),t._v(" "),r("div",{class:["btn bg-primary white",{"not-start":0==t.status,end:2==t.status}]},[t._v(t._s(t.getSeckillText))])]):r("div",{staticClass:"row-between wrap"},[r("div",{staticClass:"price row"},[r("div",{staticClass:"primary mr8"},[r("price-formate",{attrs:{price:e.price,"first-size":16}})],1),t._v(" "),r("div",{staticClass:"muted sm line-through"},[r("price-formate",{attrs:{price:e.market_price}})],1)]),t._v(" "),r("div",{staticClass:"muted xs"},[t._v(t._s(e.sales_sum)+"人购买")])])],1)})),1)}),[],!1,null,"483dfcdd",null);e.default=component.exports;installComponents(component,{PriceFormate:r(419).default})}}]);