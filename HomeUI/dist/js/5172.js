"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[5172],{87156:(t,e,s)=>{s.d(e,{Z:()=>g});var o=function(){var t=this,e=t._self._c;return e("b-popover",{ref:"popover",attrs:{target:`${t.target}`,triggers:"click blur",show:t.show,placement:"auto",container:"my-container","custom-class":`confirm-dialog-${t.width}`},on:{"update:show":function(e){t.show=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("span",[t._v(t._s(t.title))]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:function(e){t.show=!1}}},[e("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}])},[e("div",{staticClass:"text-center"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(e){t.show=!1}}},[t._v(" "+t._s(t.cancelButton)+" ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.confirm()}}},[t._v(" "+t._s(t.confirmButton)+" ")])],1)])},a=[],r=s(15193),i=s(72417),n=s(20266);const l={components:{BButton:r.T,BPopover:i.x},directives:{Ripple:n.Z},props:{target:{type:String,required:!0},title:{type:String,required:!1,default:"Are You Sure?"},cancelButton:{type:String,required:!1,default:"Cancel"},confirmButton:{type:String,required:!0},width:{type:Number,required:!1,default:300}},data(){return{show:!1}},methods:{confirm(){this.show=!1,this.$emit("confirm")}}},c=l;var u=s(1001),d=(0,u.Z)(c,o,a,!1,null,null,null);const g=d.exports},48904:(t,e,s)=>{s.r(e),s.d(e,{default:()=>_});var o=function(){var t=this,e=t._self._c;return e("b-overlay",{attrs:{show:t.sessionsLoading,variant:"transparent",blur:"5px"}},[e("b-card",[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[e("b-form-group",{staticClass:"mb-0"},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),e("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"8"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-table",{attrs:{striped:"",hover:"",responsive:"",small:"","per-page":t.perPage,"current-page":t.currentPage,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,filter:t.filter,"filter-included-fields":t.filterOn,"show-empty":"","empty-text":"No Sessions"},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(logout)",fn:function(s){return[e("v-icon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Currently logged and used session by you",expression:"'Currently logged and used session by you'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-1",class:s.item.loginPhrase===t.currentLoginPhrase?"":"hidden",attrs:{name:"info-circle"}}),e("b-button",{staticClass:"mr-0",attrs:{id:`${s.item.loginPhrase}`,size:"sm",variant:"danger"}},[t._v(" Log Out ")]),e("confirm-dialog",{attrs:{target:`${s.item.loginPhrase}`,"confirm-button":"Log Out!"},on:{confirm:function(e){return t.onLogoutOK(s.item)}}})]}}])})],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"center",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),e("span",{staticClass:"table-total"},[t._v("Total: "+t._s(t.totalRows))])],1)],1),e("div",{staticClass:"text-center"},[e("b-button",{staticClass:"mt-2",attrs:{id:"logout-all",size:"sm",variant:"danger"},on:{click:function(e){t.logoutAllPopoverShow=!0}}},[t._v(" Logout all sessions ")]),e("confirm-dialog",{attrs:{target:"logout-all","confirm-button":"Log Out All!"},on:{confirm:function(e){return t.onLogoutAllOK()}}})],1)],1)],1)},a=[],r=s(23215),i=s(21843),n=s(26253),l=s(50725),c=s(61081),u=s(54240),d=s(41011),g=s(4060),p=s(22183),m=s(22418),h=s(15193),f=s(66126),b=s(5870),v=s(34547),y=s(20266),w=s(87156),P=s(34369);const C=s(80129),S={components:{BCard:r._,BTable:i.h,BRow:n.T,BCol:l.l,BPagination:c.c,BFormGroup:u.x,BFormSelect:d.K,BInputGroup:g.w,BFormInput:p.e,BInputGroupAppend:m.B,BButton:h.T,BOverlay:f.X,ConfirmDialog:w.Z,ToastificationContent:v.Z},directives:{"b-tooltip":b.o,Ripple:y.Z},data(){return{perPage:10,pageOptions:[10,25,50,100],sortBy:"",sortDesc:!1,sortDirection:"asc",items:[],filter:"",filterOn:[],fields:[{key:"zelid",label:"ZelID",sortable:!0},{key:"loginPhrase",label:"Login Phrase",sortable:!0},{key:"logout",label:""}],totalRows:1,currentPage:1,sessionsLoading:!0}},computed:{sortOptions(){return this.fields.filter((t=>t.sortable)).map((t=>({text:t.label,value:t.key})))},currentLoginPhrase(){const t=localStorage.getItem("zelidauth"),e=C.parse(t);return console.log(e),e.loginPhrase}},mounted(){this.loggedSessions()},methods:{async loggedSessions(){this.sessionsLoading=!0;const t=localStorage.getItem("zelidauth"),e=C.parse(t);console.log(e),P.Z.loggedSessions(t).then((async t=>{console.log(t),"error"===t.data.status?this.showToast("danger",t.data.data.message||t.data.data):(this.items=t.data.data,this.totalRows=this.items.length,this.currentPage=1),this.sessionsLoading=!1})).catch((t=>{console.log(t),this.showToast("danger",t.toString()),this.sessionsLoading=!1}))},onFiltered(t){this.totalRows=t.length,this.currentPage=1},async onLogoutOK(t){const e=localStorage.getItem("zelidauth"),s=C.parse(e);P.Z.logoutSpecificSession(e,t.loginPhrase).then((e=>{console.log(e),"error"===e.data.status?this.showToast("danger",e.data.data.message||e.data.data):(this.showToast("success",e.data.data.message||e.data.data),t.loginPhrase===s.loginPhrase?(localStorage.removeItem("zelidauth"),this.$store.commit("flux/setPrivilege","none"),this.$store.commit("flux/setZelid",""),this.$router.replace("/")):this.loggedSessions())})).catch((t=>{console.log(t),this.showToast("danger",t.toString())}))},async onLogoutAllOK(){const t=localStorage.getItem("zelidauth");P.Z.logoutAllSessions(t).then((t=>{console.log(t),"error"===t.data.status?this.showToast("danger",t.data.data.message||t.data.data):(localStorage.removeItem("zelidauth"),this.$store.commit("flux/setPrivilege","none"),this.$store.commit("flux/setZelid",""),this.$router.replace("/"),this.showToast("success",t.data.data.message||t.data.data))})).catch((t=>{console.log(t),this.showToast("danger",t.toString())}))},showToast(t,e,s="InfoIcon"){this.$toast({component:v.Z,props:{title:e,icon:s,variant:t}})}}},x=S;var B=s(1001),k=(0,B.Z)(x,o,a,!1,null,null,null);const _=k.exports}}]);