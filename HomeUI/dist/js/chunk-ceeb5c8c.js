(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ceeb5c8c"],{"1d17":function(t,e,a){"use strict";var s=a("b4c0");e["a"]={listZelNodes:function(){return Object(s["a"])().get("/daemon/listzelnodes")},zelnodeCount:function(){return Object(s["a"])().get("/daemon/getzelnodecount")}}},"49f5":function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var s=a("2b0e"),r=a("c637"),o=a("a723"),n=a("d82f"),i=a("cf75"),c=a("8c18"),u=a("cf07");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b=Object(n["j"])(u["b"],["label","labelHtml"]),h=Object(i["d"])(Object(n["m"])(d(d({},b),{},{animated:Object(i["c"])(o["g"],!1),height:Object(i["c"])(o["t"]),max:Object(i["c"])(o["o"],100),precision:Object(i["c"])(o["o"],0),showProgress:Object(i["c"])(o["g"],!1),showValue:Object(i["c"])(o["g"],!1),striped:Object(i["c"])(o["g"],!1)})),r["nb"]),m=s["default"].extend({name:r["nb"],mixins:[c["a"]],provide:function(){return{bvProgress:this}},props:h,computed:{progressHeight:function(){return{height:this.height||null}}},render:function(t){var e=this.normalizeSlot();return e||(e=t(u["a"],{props:Object(i["e"])(b,this.$props)})),t("div",{staticClass:"progress",style:this.progressHeight},[e])}})},5312:function(t,e,a){"use strict";var s={cumulus:"#36c9a5",nimbus:"#ff9f43",stratus:"#ea5455"};e["a"]=s},cf07:function(t,e,a){"use strict";a.d(e,"b",(function(){return b})),a.d(e,"a",(function(){return h}));var s=a("2b0e"),r=a("c637"),o=a("a723"),n=a("8690"),i=a("7b1e"),c=a("a8c8"),u=a("3a58"),l=a("cf75"),d=a("fa73"),p=a("8c18"),b=Object(l["d"])({animated:Object(l["c"])(o["g"],null),label:Object(l["c"])(o["t"]),labelHtml:Object(l["c"])(o["t"]),max:Object(l["c"])(o["o"],null),precision:Object(l["c"])(o["o"],null),showProgress:Object(l["c"])(o["g"],null),showValue:Object(l["c"])(o["g"],null),striped:Object(l["c"])(o["g"],null),value:Object(l["c"])(o["o"],0),variant:Object(l["c"])(o["t"])},r["ob"]),h=s["default"].extend({name:r["ob"],mixins:[p["a"]],inject:{bvProgress:{default:function(){return{}}}},props:b,computed:{progressBarClasses:function(){var t=this.computedAnimated,e=this.computedVariant;return[e?"bg-".concat(e):"",this.computedStriped||t?"progress-bar-striped":"",t?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.computedValue/this.computedMax*100+"%"}},computedValue:function(){return Object(u["b"])(this.value,0)},computedMax:function(){var t=Object(u["b"])(this.max)||Object(u["b"])(this.bvProgress.max,0);return t>0?t:100},computedPrecision:function(){return Object(c["c"])(Object(u["c"])(this.precision,Object(u["c"])(this.bvProgress.precision,0)),0)},computedProgress:function(){var t=this.computedPrecision,e=Object(c["e"])(10,t);return Object(u["a"])(100*e*this.computedValue/this.computedMax/e,t)},computedVariant:function(){return this.variant||this.bvProgress.variant},computedStriped:function(){return Object(i["b"])(this.striped)?this.striped:this.bvProgress.striped||!1},computedAnimated:function(){return Object(i["b"])(this.animated)?this.animated:this.bvProgress.animated||!1},computedShowProgress:function(){return Object(i["b"])(this.showProgress)?this.showProgress:this.bvProgress.showProgress||!1},computedShowValue:function(){return Object(i["b"])(this.showValue)?this.showValue:this.bvProgress.showValue||!1}},render:function(t){var e,a=this.label,s=this.labelHtml,r=this.computedValue,o=this.computedPrecision,i={};return this.hasNormalizedSlot()?e=this.normalizeSlot():a||s?i=Object(n["a"])(s,a):this.computedShowProgress?e=this.computedProgress:this.computedShowValue&&(e=Object(u["a"])(r,o)),t("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":Object(d["g"])(this.computedMax),"aria-valuenow":Object(u["a"])(r,o)},domProps:i},e)}})},d6e4:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var s=a("2b0e"),r=a("b42e"),o=a("c637"),n=a("a723"),i=a("cf75"),c=Object(i["d"])({textTag:Object(i["c"])(n["t"],"p")},o["p"]),u=s["default"].extend({name:o["p"],functional:!0,props:c,render:function(t,e){var a=e.props,s=e.data,o=e.children;return t(a.textTag,Object(r["a"])(s,{staticClass:"card-text"}),o)}})},e2b7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-overlay",{attrs:{show:t.historyStatsLoading,variant:"transparent",blur:"5px"}},[a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{md:"12",lg:"6",xxl:"4"}},[a("b-card",{attrs:{"no-body":""}},[a("b-card-body",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",[a("h2",{staticClass:"mt-0 truncate"},[t._v(" Total Nodes: "+t._s(t.totalNodes)+" ")])]),a("b-avatar",{attrs:{size:"48",variant:"light-success"}},[a("feather-icon",{attrs:{size:"24",icon:"ServerIcon"}})],1)],1),a("vue-apex-charts",{attrs:{type:"donut",height:"400",width:"100%",options:t.nodeData.chartOptions,series:t.nodeData.series}})],1)],1),a("b-col",{attrs:{md:"12",lg:"6",xxl:"8"}},[a("b-card",{attrs:{"no-body":""}},[a("b-card-body",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",[a("h2",{staticClass:"mt-0 truncate"},[t._v(" Node History ")])])]),a("div",{staticClass:"mt-auto"},[a("vue-apex-charts",{attrs:{type:"area",height:"400",width:"100%",options:t.nodeHistoryData.chartOptions,series:t.nodeHistoryData.series}})],1)],1)],1)],1)],1),a("b-overlay",{attrs:{show:t.supplyLoading,variant:"transparent",blur:"5px"}},[a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{md:"12",lg:"6",xxl:"4"}},[a("b-card",{attrs:{"no-body":""}},[a("b-card-body",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",[a("h2",{staticClass:"mt-0 truncate"},[t._v(" Locked Supply: "+t._s(t.beautifyValue(t.lockedSupply,0))+" ")])]),a("b-avatar",{attrs:{size:"48",variant:"light-success"}},[a("feather-icon",{attrs:{size:"24",icon:"LockIcon"}})],1)],1),a("vue-apex-charts",{attrs:{type:"donut",height:"300",options:t.lockedSupplyData.chartOptions,series:t.lockedSupplyData.series}})],1)],1),a("b-col",{attrs:{md:"12",lg:"6",xxl:"8"}},[a("b-card",{attrs:{"no-body":""}},[a("b-card-body",[a("div",[a("h2",{staticClass:"mt-0 truncate"},[t._v(" FLUX Supply ")])]),a("div",[a("b-card-text",{staticClass:"mt-2"},[t._v(" Total Supply ")]),a("h3",[t._v(" "+t._s(t.beautifyValue(t.maxSupply,0))+" FLUX ")])],1),a("hr"),a("div",[a("b-card-text",[t._v("Circulating Supply")]),a("b-row",[a("b-col",{attrs:{xl:"4",md:"6",sm:"12"}},[a("h3",[t._v(" "+t._s(t.beautifyValue(t.circulatingSupply,0))+" FLUX ")])]),a("b-col",{attrs:{xl:"8",md:"6",sm:"12"}},[a("b-progress",{staticClass:"mt-25",attrs:{value:t.circulatingSupply,max:t.maxSupply,variant:"success",height:"10px"}})],1)],1)],1),a("hr"),a("div",[a("b-card-text",[t._v("Locked Supply")]),a("b-row",[a("b-col",{attrs:{xl:"4",md:"6",sm:"12"}},[a("h3",[t._v(" "+t._s(t.beautifyValue(t.lockedSupply,0))+" FLUX ")])]),a("b-col",{attrs:{xl:"8",md:"6",sm:"12"}},[a("b-progress",{staticClass:"mt-25",attrs:{value:t.lockedSupply,max:t.circulatingSupply,variant:"success",height:"10px"}})],1)],1)],1)])],1)],1)],1)],1)],1)},r=[],o=a("2909"),n=a("1da1"),i=(a("96cf"),a("a9e3"),a("b680"),a("b64b"),a("d3b7"),a("159b"),a("ac1f"),a("5319"),a("9b03")),c=a("205f"),u=a("6197"),l=a("d6e4"),d=a("a15b"),p=a("b28b"),b=a("e8a3"),h=a("49f5"),m=a("1321"),f=a.n(m),g=a("b307"),y=a("5312"),v=a("1d17"),x=a("bc3a"),O={components:{BOverlay:i["a"],BCard:c["a"],BCardBody:u["a"],BCardText:l["a"],BRow:d["a"],BCol:p["a"],BAvatar:b["a"],BProgress:h["a"],VueApexCharts:f.a,ToastificationContent:g["a"]},data:function(){var t=this;return{historyStatsLoading:!0,supplyLoading:!0,totalNodes:0,nodeData:{chartOptions:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!0},labels:["Cumulus","Nimbus","Stratus"],legend:{show:!1},stroke:{width:0},colors:[y["a"].cumulus,y["a"].nimbus,y["a"].stratus],tooltip:{y:{formatter:function(e){return t.beautifyValue(e,0)}}}},series:[]},nodeHistoryData:{chartOptions:{colors:[y["a"].cumulus,y["a"].nimbus,y["a"].stratus],labels:["Cumulus","Nimbus","Stratus"],grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0},stacked:!0},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{formatter:function(e){return new Date(e).toLocaleString("en-GB",t.timeoptions)}}}},series:[]},lockedSupplyData:{chartOptions:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!0},labels:["Cumulus","Nimbus","Stratus"],legend:{show:!1},stroke:{width:0},colors:[y["a"].cumulus,y["a"].nimbus,y["a"].stratus],tooltip:{y:{formatter:function(e){return t.beautifyValue(e,0)}}}},series:[]},maxSupply:44e7,lockedSupply:0,lockedSupplyPerc:0,circulatingSupply:0,circulatingSupplyPerc:0}},mounted:function(){this.getHistoryStats(),this.getCircSupply()},methods:{getCircSupply:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.supplyLoading=!0,e.next=3,x.get("https://explorer.runonflux.io/api/statistics/circulating-supply");case 3:return a=e.sent,t.circulatingSupply=a.data,t.circulatingSupplyPerc=Number((t.circulatingSupply/44e7*100).toFixed(2)),e.next=8,t.getZelNodeCount();case 8:t.supplyLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},getHistoryStats:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,r,n,i,c,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.historyStatsLoading=!0,e.next=4,x.get("https://stats.runonflux.io/fluxhistorystats");case 4:a=e.sent,t.fluxHistoryStats=a.data.data,t.historyStatsLoading=!1,s=Object.keys(t.fluxHistoryStats),r=Math.max.apply(Math,Object(o["a"])(s)),n=1e4*t.fluxHistoryStats[r].cumulus,i=25e3*t.fluxHistoryStats[r].nimbus,c=1e5*t.fluxHistoryStats[r].stratus,u=[],l=[],d=[],s.forEach((function(e){u.push([Number(e),t.fluxHistoryStats[e].cumulus]),l.push([Number(e),t.fluxHistoryStats[e].nimbus]),d.push([Number(e),t.fluxHistoryStats[e].stratus])})),t.totalNodes=t.fluxHistoryStats[r].cumulus+t.fluxHistoryStats[r].nimbus+t.fluxHistoryStats[r].stratus,t.lockedSupplyData.series=[n,i,c],t.nodeData.series=[t.fluxHistoryStats[r].cumulus,t.fluxHistoryStats[r].nimbus,t.fluxHistoryStats[r].stratus],t.nodeHistoryData.series=[{name:"Cumulus",data:u},{name:"Nimbus",data:l},{name:"Stratus",data:d}],e.next=26;break;case 22:e.prev=22,e.t0=e["catch"](0),console.log(e.t0),t.$toast({component:g["a"],props:{title:"Unable to fetch history stats",icon:"InfoIcon",variant:"danger"}});case 26:case"end":return e.stop()}}),e,null,[[0,22]])})))()},getZelNodeCount:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,r,o,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v["a"].zelnodeCount();case 3:a=e.sent,s=a.data.data,r=s["stratus-enabled"],o=s["nimbus-enabled"],n=s["cumulus-enabled"],s["cumulus-enabled"]<s["nimbus-enabled"]&&(o=s["cumulus-enabled"],n=s["nimbus-enabled"]),i=1e5*r+25e3*o+1e4*n,t.lockedSupply=i,t.lockedSupplyPerc=Number((i/t.circulatingSupply*100).toFixed(2)),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()},beautifyValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=t.toFixed(e);return a.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}}},S=O,j=a("2877"),w=Object(j["a"])(S,s,r,!1,null,null,null);e["default"]=w.exports}}]);