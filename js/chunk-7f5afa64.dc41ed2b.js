(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f5afa64"],{"0bb4":function(t,e,n){"use strict";n("3bc0")},"3bc0":function(t,e,n){},be55:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feedBackground"},[n("v-container",{staticClass:"mb-6 "},[n("v-row",{staticStyle:{height:"100%"},attrs:{"no-gutters":""}},t._l(t.albums,(function(e){return n("v-col",{key:e.id,attrs:{sm:"4"}},[n("v-card",{staticClass:"mx-auto mb-5 albumcard",attrs:{"max-width":"344",outlined:"",elevation:"24",shaped:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline mb-4 text-center"},[t._v(" "+t._s(e.title)+" ")])])],1),n("v-card-actions",[n("router-link",{attrs:{to:{name:"Photos",params:{AId:e.id}}}},[n("v-btn",{staticClass:"mx-12",attrs:{outlined:"",rounded:"",text:"",color:"purple",elevation:"24"}},[t._v(" View ")])],1)],1)],1)],1)})),1)],1)],1)},s=[],o=(n("d3b7"),{name:"Album",components:{},props:["id"],data:function(){return{albums:[]}},mounted:function(){var t=this,e="https://jsonplaceholder.typicode.com/albums?userId=".concat(this.id);fetch(e,{method:"get"}).then((function(t){return t.json()})).then((function(e){t.albums=e,console.log(t.comments)}))}}),i=o,c=(n("0bb4"),n("2877")),r=n("6544"),l=n.n(r),u=n("8336"),d=n("b0af"),m=n("99d9"),b=n("62ad"),v=n("a523"),f=n("da13"),h=n("5d23"),p=n("0fd9"),w=Object(c["a"])(i,a,s,!1,null,null,null);e["default"]=w.exports;l()(w,{VBtn:u["a"],VCard:d["a"],VCardActions:m["a"],VCol:b["a"],VContainer:v["a"],VListItem:f["a"],VListItemContent:h["a"],VRow:p["a"]})}}]);
//# sourceMappingURL=chunk-7f5afa64.dc41ed2b.js.map