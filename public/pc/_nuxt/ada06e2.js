(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{506:function(t,e,r){var content=r(566);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("5b9c9283",content,!0,{sourceMap:!1})},563:function(t,e,r){t.exports=r.p+"img/logistics_success.a1c9fb7.png"},564:function(t,e,r){t.exports=r.p+"img/address_null.aa56dde.png"},565:function(t,e,r){"use strict";r(506)},566:function(t,e,r){var d=r(15)(!1);d.push([t.i,".address-list[data-v-8d962992]{padding:10px}.address-list .address-header[data-v-8d962992]{padding:10px 5px;border-bottom:1px solid #e5e5e5}.address-list .address-content[data-v-8d962992]{margin-top:15px}.address-list .address-content .default-border[data-v-8d962992]{border:1px solid #e5e5e5;border-radius:60px}.address-list .address-content[data-v-8d962992]  .el-table{color:#222}.address-list .address-content[data-v-8d962992]  .el-table .el-button--text{color:#222;font-weight:400}.address-list .address-content[data-v-8d962992]  .el-table th{background-color:#f2f2f2}.address-list .address-content[data-v-8d962992]  .el-table thead{color:#555}.address-list .address-content .add-address-btn[data-v-8d962992]{margin-top:18px}.address-list .data-null[data-v-8d962992]{padding-top:100px}",""]),t.exports=d},626:function(t,e,r){"use strict";r.r(e);var d=r(6),n=(r(48),r(18),{head:function(){return{title:this.$store.getters.headTitle,link:[{rel:"icon",type:"image/x-icon",href:this.$store.getters.favicon}]}},layout:"user_lauout",asyncData:function(t){return Object(d.a)(regeneratorRuntime.mark((function e(){var r,d,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$get,t.$post,d=[],n=!0,e.next=5,r("user_address/lists");case 5:return 1==(o=e.sent).code&&((d=o.data).forEach((function(t){t.addressDetail=t.province+" "+t.city+" "+t.district+" "+t.address})),n=d.length<=0),e.abrupt("return",{addressList:d,isDataNull:n});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{addressPop:!1,editId:-1}},mounted:function(){},methods:{modifyRow:function(t){this.editId=t.id,this.addressPop=!0},setDefault:function(t){var e=this;return Object(d.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$post("user_address/setdefault",{id:t.id});case 2:if(1!=r.sent.code){r.next=7;break}return r.next=6,e.getAddressList();case 6:e.$message({message:"设置成功",type:"success"});case 7:case"end":return r.stop()}}),r)})))()},getAddressList:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$get("user_address/lists");case 2:1==(r=e.sent).code&&(t.addressList=r.data,t.addressList.forEach((function(t){t.addressDetail=t.province+" "+t.city+" "+t.district+" "+t.address})),t.addressList.length<=0?t.isDataNull=!0:t.isDataNull=!1);case 4:case"end":return e.stop()}}),e)})))()},deleteAddress:function(t){var e=this;return Object(d.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$post("user_address/del",{id:t.id});case 2:if(1!=r.sent.code){r.next=7;break}return r.next=6,e.getAddressList();case 6:e.$message({message:"删除成功",type:"success"});case 7:case"end":return r.stop()}}),r)})))()},showAddressPop:function(){this.addressPop=!0,this.editId=-1}}}),o=(r(565),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"address-list"},[d("div",{staticClass:"address-header lg"},[t._v("收货地址")]),t._v(" "),d("div",{directives:[{name:"show",rawName:"v-show",value:!t.isDataNull,expression:"!isDataNull"}],staticClass:"address-content"},[d("el-table",{staticStyle:{width:"100%"},attrs:{data:t.addressList}},[d("el-table-column",{attrs:{prop:"contact",label:"收货人",width:"200"}}),t._v(" "),d("el-table-column",{attrs:{prop:"telephone",label:"手机号码",width:"150"}}),t._v(" "),d("el-table-column",{attrs:{prop:"addressDetail",label:"收货地区"}}),t._v(" "),d("el-table-column",{attrs:{fixed:"right",label:"操作",width:"216"},scopedSlots:t._u([{key:"default",fn:function(e){return[d("div",{staticClass:"row"},[d("div",{staticStyle:{"margin-right":"24px"}},[d("el-button",{staticClass:"nr",attrs:{type:"text",size:"small"},on:{click:function(r){return t.modifyRow(e.row)}}},[t._v("修改")])],1),t._v(" "),d("el-popconfirm",{attrs:{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定要删除地址吗？"},on:{confirm:function(r){return t.deleteAddress(e.row)}}},[d("el-button",{staticClass:"nr",attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[t._v("删除")])],1),t._v(" "),d("div",{staticClass:"row",staticStyle:{"margin-left":"36px",cursor:"pointer"},on:{click:function(r){return t.setDefault(e.row)}}},[0==e.row.is_default?d("div",{class:{"default-border":0==e.row.is_default},staticStyle:{width:"16px",height:"16px","margin-right":"8px"}}):d("img",{class:{"default-border":0==e.row.is_default},staticStyle:{width:"16px",height:"16px","margin-right":"8px"},attrs:{src:r(563)}}),t._v(" "),d("div",{staticClass:"nr",class:{primary:1==e.row.is_default}},[t._v(t._s(1==e.row.is_default?"默认":"设为默认"))])])],1)]}}])})],1),t._v(" "),d("div",{staticClass:"add-address-btn row-end"},[d("el-button",{staticStyle:{width:"106px"},attrs:{type:"primary"},on:{click:t.showAddressPop}},[t._v("添加地址")])],1)],1),t._v(" "),d("div",{directives:[{name:"show",rawName:"v-show",value:t.isDataNull,expression:"isDataNull"}],staticClass:"column-center data-null"},[d("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:r(564)}}),t._v(" "),d("div",{staticClass:"muted xs mt8"},[t._v("暂无地址记录～")]),t._v(" "),d("div",{staticClass:"mt8"},[d("el-button",{staticStyle:{width:"106px"},attrs:{type:"primary"},on:{click:t.showAddressPop}},[t._v("添加地址")])],1)]),t._v(" "),d("address-add",{attrs:{aid:-1==t.editId?"":t.editId},on:{success:t.getAddressList},model:{value:t.addressPop,callback:function(e){t.addressPop=e},expression:"addressPop"}})],1)}),[],!1,null,"8d962992",null);e.default=component.exports;installComponents(component,{AddressAdd:r(473).default})}}]);