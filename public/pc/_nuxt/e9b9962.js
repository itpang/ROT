(window.webpackJsonp=window.webpackJsonp||[]).push([[2,10,15,16],{415:function(e,t,r){"use strict";var n=r(13),o=r(2),d=r(121),l=r(24),c=r(14),v=r(53),m=r(258),h=r(84),f=r(257),_=r(5),x=r(70),y=r(85).f,w=r(45).f,C=r(23).f,S=r(416).trim,k="Number",T=o.Number,O=T.prototype,N=v(x(O))==k,D=function(e){if(h(e))throw TypeError("Cannot convert a Symbol value to a number");var t,r,n,o,d,l,c,code,v=f(e,"number");if("string"==typeof v&&v.length>2)if(43===(t=(v=S(v)).charCodeAt(0))||45===t){if(88===(r=v.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(v.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+v}for(l=(d=v.slice(2)).length,c=0;c<l;c++)if((code=d.charCodeAt(c))<48||code>o)return NaN;return parseInt(d,n)}return+v};if(d(k,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var I,E=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof E&&(N?_((function(){O.valueOf.call(r)})):v(r)!=k)?m(new T(D(t)),r,E):D(t)},A=n?y(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;A.length>F;F++)c(T,I=A[F])&&!c(E,I)&&C(E,I,w(T,I));E.prototype=O,O.constructor=E,l(o,k,E)}},416:function(e,t,r){var n=r(28),o=r(11),d="["+r(417)+"]",l=RegExp("^"+d+d+"*"),c=RegExp(d+d+"*$"),v=function(e){return function(t){var r=o(n(t));return 1&e&&(r=r.replace(l,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:v(1),end:v(2),trim:v(3)}},417:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},418:function(e,t,r){var content=r(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("03051d40",content,!0,{sourceMap:!1})},419:function(e,t,r){"use strict";r.r(t);r(415),r(69),r(259);var n={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:Number,default:14},secondSize:{type:Number,default:14},color:{type:String},weight:{type:[String,Number],default:500},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:Number,default:14},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(e){this.priceFormat()}},methods:{priceFormat:function(){var e=this.price,t={};null!==e&&(e=parseFloat(e),e=String(e).split("."),t.first=e[0],t.second=e[1],this.priceSlice=t)}}},o=(r(420),r(8)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{class:(e.lineThrough?"line-through":"")+"price-format",style:{color:e.color,"font-weight":e.weight}},[e.showSubscript?r("span",{style:{"font-size":e.subscriptSize+"px","margin-right":"1px"}},[e._v("¥")]):e._e(),e._v(" "),r("span",{style:{"font-size":e.firstSize+"px","margin-right":"1px"}},[e._v(e._s(e.priceSlice.first))]),e._v(" "),e.priceSlice.second?r("span",{style:{"font-size":e.secondSize+"px"}},[e._v("."+e._s(e.priceSlice.second))]):e._e()])}),[],!1,null,null,null);t.default=component.exports},420:function(e,t,r){"use strict";r(418)},421:function(e,t,r){var n=r(15)(!1);n.push([e.i,".price-format{display:flex;align-items:baseline}",""]),e.exports=n},428:function(e,t,r){"use strict";r.r(t);r(415),r(71),r(54),r(19),r(87),r(69),r(86);var n=6e4,o=36e5,d=24*o;function l(e){return(0+e.toString()).slice(-2)}var c={components:{},props:{isSlot:{type:Boolean,default:!1},time:{type:Number,default:0},format:{type:String,default:"hh:mm:ss"},autoStart:{type:Boolean,default:!0}},watch:{time:{immediate:!0,handler:function(e){e&&this.reset()}}},data:function(){return{timeObj:{},formateTime:0}},created:function(){},computed:{},methods:{createTimer:function(e){return setTimeout(e,100)},isSameSecond:function(e,t){return Math.floor(e)===Math.floor(t)},start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+1e3*this.remain,this.setTimer())},setTimer:function(){var e=this;this.tid=this.createTimer((function(){var t=e.getRemain();e.isSameSecond(t,e.remain)&&0!==t||e.setRemain(t),0!==e.remain&&e.setTimer()}))},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},pause:function(){this.counting=!1,clearTimeout(this.tid)},reset:function(){this.pause(),this.remain=this.time,this.setRemain(this.remain),this.autoStart&&this.start()},setRemain:function(e){var t=this.format;this.remain=e;var time,r=(time=e,{days:Math.floor(time/d),hours:l(Math.floor(time%d/o)),minutes:l(Math.floor(time%o/n)),seconds:l(Math.floor(time%n/1e3))});this.formateTime=function(e,t){var r=t.days,n=t.hours,o=t.minutes,d=t.seconds;return-1!==e.indexOf("dd")&&(e=e.replace("dd",r)),-1!==e.indexOf("hh")&&(e=e.replace("hh",l(n))),-1!==e.indexOf("mm")&&(e=e.replace("mm",l(o))),-1!==e.indexOf("ss")&&(e=e.replace("ss",l(d))),e}(t,r),this.$emit("change",r),0===e&&(this.pause(),this.$emit("finish"))}}},v=r(8),component=Object(v.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.time>=0?r("div",[r("client-only",[e.isSlot?e._t("default"):r("span",[e._v(e._s(e.formateTime))])],2)],1):e._e()}),[],!1,null,null,null);t.default=component.exports},451:function(e,t,r){var content=r(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("3e5ddd00",content,!0,{sourceMap:!1})},469:function(e,t,r){"use strict";r(451)},470:function(e,t,r){var n=r(15)(!1);n.push([e.i,".deliver-search-container .deliver-box .deliver-recode-box[data-v-c351ad84]{padding:10px 20px;background-color:#f2f2f2}.deliver-search-container .deliver-box .deliver-recode-box .recode-img[data-v-c351ad84]{position:relative;width:72px;height:72px}.deliver-search-container .deliver-box .deliver-recode-box .recode-img .float-count[data-v-c351ad84]{position:absolute;bottom:0;height:20px;width:100%;background-color:rgba(0,0,0,.5);color:#fff;font-size:12px}.deliver-search-container .deliver-box .deliver-recode-box .recode-info-container[data-v-c351ad84]{flex:1}.deliver-search-container .deliver-box .deliver-recode-box .recode-info-container .recode-label[data-v-c351ad84]{width:70px}.deliver-search-container .deliver-box .deliver-recode-box .recode-info-container .copy-btn[data-v-c351ad84]{height:20px;min-width:42px;border:1px solid #ff2c3c;font-size:12px;margin-left:8px;border-radius:60px;cursor:pointer}.deliver-search-container .deliver-box .deliver-recode-box .recode-info-container .copy-btn[data-v-c351ad84]:hover{background-color:#fff}.deliver-search-container .deliver-box .deliver-flow-box[data-v-c351ad84]{padding-left:15px}",""]),e.exports=n},476:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(48),r(415),{props:{value:{type:Boolean,default:!1},aid:{type:Number|String}},data:function(){return{showDialog:!1,deliverBuy:{},delivery:{},deliverFinish:{},deliverOrder:{},deliverShipment:{},deliverTake:{},timeLineArray:[]}},watch:{value:function(e){console.log(e,"val"),this.showDialog=e},showDialog:function(e){e&&this.aid&&(this.timeLineArray=[],this.getDeliverTraces()),this.$emit("input",e)}},methods:{getDeliverTraces:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data,r,n,o,d,l,c,v,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data={id:e.aid},t.next=3,e.$get("order/orderTraces",{params:data});case 3:1==(r=t.sent).code&&(n=r.data,o=n.buy,d=n.delivery,l=n.finish,c=n.order,v=n.shipment,m=n.take,e.deliverBuy=o,e.delivery=d,e.deliverFinish=l,e.deliverOrder=c,e.deliverShipment=v,e.deliverTake=m,e.timeLineArray.push(e.deliverFinish),e.timeLineArray.push(e.delivery),e.timeLineArray.push(e.deliverShipment),e.timeLineArray.push(e.deliverBuy),console.log(e.timeLineArray));case 5:case"end":return t.stop()}}),t)})))()},onCopy:function(){var e=document.createElement("input");e.value=this.deliverOrder.invoice_no,document.body.appendChild(e),e.select(),document.execCommand("Copy"),this.$message.success("复制成功"),e.remove()}}}),d=(r(469),r(8)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"deliver-search-container"},[r("el-dialog",{attrs:{visible:e.showDialog,width:"920px",title:"物流查询"},on:{"update:visible":function(t){e.showDialog=t}}},[r("div",{staticClass:"deliver-box"},[r("div",{staticClass:"deliver-recode-box row"},[r("div",{staticClass:"recode-img"},[r("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{fit:"cover",src:e.deliverOrder.image}}),e._v(" "),r("div",{staticClass:"float-count row-center"},[e._v("共"+e._s(e.deliverOrder.count)+"件商品")])],1),e._v(" "),r("div",{staticClass:"recode-info-container ml10"},[r("div",{staticClass:"row"},[r("div",{staticClass:"recode-label"},[e._v("物流状态：")]),e._v(" "),r("div",{staticClass:"primary lg",staticStyle:{"font-weight":"500"}},[e._v(e._s(e.deliverOrder.tips))])]),e._v(" "),r("div",{staticClass:"row",staticStyle:{margin:"6px 0"}},[r("div",{staticClass:"recode-label"},[e._v("快递公司：")]),e._v(" "),r("div",[e._v(e._s(e.deliverOrder.shipping_name))])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"recode-label"},[e._v("快递单号：")]),e._v(" "),r("div",[e._v(e._s(e.deliverOrder.invoice_no))]),e._v(" "),r("div",{staticClass:"copy-btn primary row-center",on:{click:e.onCopy}},[e._v("复制")])])])]),e._v(" "),r("div",{staticClass:"deliver-flow-box mt16"},[r("el-timeline",[this.deliverFinish.tips?r("el-timeline-item",[r("div",[r("div",{staticClass:"row lg"},[r("div",{staticClass:"mr8",staticStyle:{"font-weight":"500"}},[e._v("\n                                    "+e._s(this.deliverTake.contacts)+"\n                                ")]),e._v(" "),r("div",{staticStyle:{"font-weight":"500"}},[e._v(e._s(this.deliverTake.mobile))])]),e._v(" "),r("div",{staticClass:"lighter mt8"},[e._v(e._s(this.deliverTake.address))])])]):e._e(),e._v(" "),this.deliverFinish.tips?r("el-timeline-item",{attrs:{timestamp:this.deliverFinish.time}},[r("div",{staticClass:"time-line-title"},[e._v(e._s(this.deliverFinish.title))]),e._v(" "),r("div",[e._v(e._s(this.deliverFinish.tips))])]):e._e(),e._v(" "),this.delivery.traces&&this.delivery.traces.length?r("el-timeline-item",{attrs:{timestamp:this.delivery.time}},[r("div",{staticClass:"time-line-title mb8"},[e._v(e._s(this.delivery.title))]),e._v(" "),e._l(this.delivery.traces,(function(t,n){return r("el-timeline-item",{key:n,attrs:{timestamp:t[0]}},[r("div",{staticClass:"muted"},[e._v(e._s(t[1]))])])}))],2):e._e(),e._v(" "),this.deliverShipment.tips?r("el-timeline-item",{attrs:{timestamp:this.deliverShipment.time}},[r("div",{staticClass:"time-line-title"},[e._v(e._s(this.deliverShipment.title))]),e._v(" "),r("div",[e._v(e._s(this.deliverShipment.tips))])]):e._e(),e._v(" "),this.deliverBuy.tips?r("el-timeline-item",{attrs:{timestamp:this.deliverBuy.time}},[r("div",{staticClass:"time-line-title"},[e._v(e._s(this.deliverBuy.title))]),e._v(" "),r("div",[e._v(e._s(this.deliverBuy.tips))])]):e._e()],1)],1)])])],1)}),[],!1,null,"c351ad84",null);t.default=component.exports},511:function(e,t,r){var content=r(578);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("478847ea",content,!0,{sourceMap:!1})},577:function(e,t,r){"use strict";r(511)},578:function(e,t,r){var n=r(15)(!1);n.push([e.i,".order-list[data-v-59915681]{padding:0 10px}.order-list .item[data-v-59915681]{margin-bottom:20px}.order-list .item .item-hd[data-v-59915681]{height:40px;border:1px solid #e5e5e5;background:#f2f2f2;padding:0 20px}.order-list .item .item-hd .status[data-v-59915681]{width:100px;text-align:right}.order-list .item .item-con[data-v-59915681]{box-shadow:0 3px 4px rgba(0,0,0,.08);align-items:stretch}.order-list .item .item-con .goods[data-v-59915681]{padding:17px 0;width:560px}.order-list .item .item-con .goods .goods-item[data-v-59915681]{padding:10px 20px}.order-list .item .item-con .goods .goods-item .goods-img[data-v-59915681]{flex:none;margin-right:10px;width:72px;height:72px}.order-list .item .item-con .goods .goods-item .goods-name[data-v-59915681]{width:100%}.order-list .item .item-con .goods .goods-item .goods-name .num[data-v-59915681]{padding:0 42px}.order-list .item .item-con .pay-price[data-v-59915681]{width:200px;border-left:1px solid #e5e5e5;border-right:1px solid #e5e5e5}.order-list .item .item-con .operate[data-v-59915681]{width:185px}.order-list .item .item-con .operate>div[data-v-59915681]{cursor:pointer}.order-list .item .item-con .operate .btn[data-v-59915681]{width:120px;height:32px;border-radius:2px}.order-list .item .item-con .operate .btn.plain[data-v-59915681]{border:1px solid #ff2c3c}",""]),e.exports=n},612:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(48),{components:{CountDown:r(428).default},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{showDeliver:!1,aid:-1}},created:function(){console.log(this.list)},methods:{handleOrder:function(e,t){var r=this;this.type=e,this.orderId=t,this.$confirm(this.getTipsText(e),{title:"温馨提示",center:!0,confirmButtonText:"确定",cancelButtonText:"取消",callback:function(e){"confirm"==e&&r.postOrder()}})},postOrder:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,d,code,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.type,n=e.orderId,o="",t.t0=r,t.next=0===t.t0?5:1===t.t0?7:2===t.t0?9:11;break;case 5:return o="order/cancel",t.abrupt("break",11);case 7:return o="order/del",t.abrupt("break",11);case 9:return o="order/confirm",t.abrupt("break",11);case 11:return t.next=13,e.$post(o,{id:n});case 13:d=t.sent,code=d.code,d.data,l=d.msg,1==code&&(e.$message({message:l,type:"success"}),e.$emit("refresh"));case 18:case"end":return t.stop()}}),t)})))()},getTipsText:function(e){switch(e){case 0:return"确认取消订单吗？";case 1:return"确认删除订单吗?";case 2:return"确认收货吗?"}},showDeliverDialog:function(e){console.log("showDeliverDialog"),this.aid=e,this.showDeliver=!0}},computed:{getOrderStatus:function(){return function(e){var text="";switch(e){case 0:text="待支付";break;case 1:text="待发货";break;case 2:text="待收货";break;case 3:text="已完成";break;case 4:text="订单已关闭"}return text}},getCancelTime:function(){return function(time){return time-Date.now()/1e3}}}}),d=(r(577),r(8)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order-list"},[e._l(e.list,(function(t){return r("div",{key:t.id,staticClass:"item mb16"},[r("div",{staticClass:"item-hd row"},[r("div",{staticClass:"flex1 lighter sm"},[e._v("下单时间："+e._s(t.create_time))]),e._v(" "),r("div",{staticClass:"flex1 lighter sm"},[e._v("订单编号："+e._s(t.order_sn))]),e._v(" "),r("div",{staticClass:"flex1 lighter sm"},[e._v("订单类型："+e._s(t.order_type_desc))]),e._v(" "),r("div",{class:["status sm",{primary:0==t.order_status}]},[e._v("\n        "+e._s(t.order_status_desc)+"\n      ")])]),e._v(" "),r("div",{staticClass:"item-con row"},[r("div",{staticClass:"goods"},e._l(t.order_goods,(function(t,n){return r("nuxt-link",{key:n,staticClass:"goods-item row",attrs:{to:"/goods_details/"+t.goods_id}},[r("el-image",{staticClass:"goods-img",attrs:{src:t.image,alt:""}}),e._v(" "),r("div",{staticClass:"goods-info flex1"},[r("div",{staticClass:"goods-name mb8 row-between"},[r("div",{staticClass:"line1",staticStyle:{width:"350px"}},[t.is_seckill?r("el-tag",{attrs:{size:"mini",effect:"plain"}},[e._v("秒杀")]):e._e(),e._v("\n                  "+e._s(t.goods_name)+"\n              ")],1),e._v(" "),r("div",{staticClass:"num"},[e._v("x"+e._s(t.goods_num))])]),e._v(" "),r("div",{staticClass:"sm muted mb8"},[e._v(e._s(t.spec_value))]),e._v(" "),r("div",{staticClass:"primary"},[r("price-formate",{attrs:{price:t.goods_price}})],1)])],1)})),1),e._v(" "),r("div",{staticClass:"pay-price column",staticStyle:{"padding-left":"30px"}},[r("div",{staticClass:"muted"},[e._v("共"+e._s(t.goods_count)+"件商品")]),e._v(" "),r("div",{staticClass:"muted mt8 row"},[e._v("\n          应付金额：\n          "),r("span",{staticClass:"primary"},[r("price-formate",{attrs:{price:t.order_amount,"subscript-size":16,"first-size":16,"second-size":16}})],1)])]),e._v(" "),r("div",{staticClass:"operate column-center sm"},[t.pay_btn?r("nuxt-link",{staticClass:"btn mb16 bg-primary row-center white sm",attrs:{to:"/payment?id="+t.id}},[r("span",{staticClass:"mr8"},[e._v("去付款")]),e._v(" "),e.getCancelTime(t.order_cancel_time)>0?r("count-down",{attrs:{time:e.getCancelTime(t.order_cancel_time),format:"hh:mm:ss"},on:{finish:function(t){return e.$emit("refresh")}}}):e._e()],1):e._e(),e._v(" "),t.take_btn?r("div",{staticClass:"btn mb10 primary row-center sm plain",on:{click:function(r){return e.handleOrder(2,t.id)}}},[e._v("\n          确认收货\n        ")]):e._e(),e._v(" "),t.delivery_btn?r("div",{staticClass:"mb10 muted row-center sm",on:{click:function(r){return e.showDeliverDialog(t.id)}}},[e._v("\n          物流查询\n        ")]):e._e(),e._v(" "),t.cancel_btn?r("div",{staticClass:"mb10 muted row-center sm",on:{click:function(r){return e.handleOrder(0,t.id)}}},[e._v("\n          取消订单\n        ")]):e._e(),e._v(" "),t.del_btn?r("div",{staticClass:"mb10 muted row-center sm",on:{click:function(r){return e.handleOrder(1,t.id)}}},[e._v("\n          删除订单\n        ")]):e._e(),e._v(" "),r("nuxt-link",{staticClass:"lighter",attrs:{to:"/user/order/detail?id="+t.id}},[r("span",[e._v("查看详情")])])],1)])])})),e._v(" "),r("deliver-search",{attrs:{aid:e.aid},model:{value:e.showDeliver,callback:function(t){e.showDeliver=t},expression:"showDeliver"}})],2)}),[],!1,null,"59915681",null);t.default=component.exports;installComponents(component,{PriceFormate:r(419).default,DeliverSearch:r(476).default})}}]);