"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[4156],{57796:(t,e,r)=>{r.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"collapse-icon",class:t.collapseClasses,attrs:{role:"tablist"}},[t._t("default")],2)},o=[],a=(r(70560),r(57632));const s={props:{accordion:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},type:{type:String,default:"default"}},data(){return{collapseID:""}},computed:{collapseClasses(){const t=[],e={default:"collapse-default",border:"collapse-border",shadow:"collapse-shadow",margin:"collapse-margin"};return t.push(e[this.type]),t}},created(){this.collapseID=(0,a.Z)()}},i=s;var l=r(1001),c=(0,l.Z)(i,n,o,!1,null,null,null);const u=c.exports},22049:(t,e,r)=>{r.d(e,{Z:()=>h});var n=function(){var t=this,e=t._self._c;return e("b-card",{class:{open:t.visible},attrs:{"no-body":""},on:{mouseenter:t.collapseOpen,mouseleave:t.collapseClose,focus:t.collapseOpen,blur:t.collapseClose}},[e("b-card-header",{class:{collapsed:!t.visible},attrs:{"aria-expanded":t.visible?"true":"false","aria-controls":t.collapseItemID,role:"tab","data-toggle":"collapse"},on:{click:function(e){return t.updateVisible(!t.visible)}}},[t._t("header",(function(){return[e("span",{staticClass:"lead collapse-title"},[t._v(t._s(t.title))])]}))],2),e("b-collapse",{attrs:{id:t.collapseItemID,accordion:t.accordion,role:"tabpanel"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e("b-card-body",[t._t("default")],2)],1)],1)},o=[],a=r(23215),s=r(87047),i=r(19279),l=r(11688),c=r(57632);const u={components:{BCard:a._,BCardHeader:s.p,BCardBody:i.O,BCollapse:l.k},props:{isVisible:{type:Boolean,default:!1},title:{type:String,required:!0}},data(){return{visible:!1,collapseItemID:"",openOnHover:this.$parent.hover}},computed:{accordion(){return this.$parent.accordion?`accordion-${this.$parent.collapseID}`:null}},created(){this.collapseItemID=(0,c.Z)(),this.visible=this.isVisible},methods:{updateVisible(t=!0){this.visible=t,this.$emit("visible",t)},collapseOpen(){this.openOnHover&&this.updateVisible(!0)},collapseClose(){this.openOnHover&&this.updateVisible(!1)}}},p=u;var f=r(1001),d=(0,f.Z)(p,n,o,!1,null,null,null);const h=d.exports},34547:(t,e,r)=>{r.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},o=[],a=r(47389);const s={components:{BAvatar:a.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=s;var l=r(1001),c=(0,l.Z)(i,n,o,!1,null,"22d964ca",null);const u=c.exports},57632:(t,e,r)=>{r.d(e,{Z:()=>p});const n="undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),o={randomUUID:n};let a;const s=new Uint8Array(16);function i(){if(!a&&(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(s)}const l=[];for(let f=0;f<256;++f)l.push((f+256).toString(16).slice(1));function c(t,e=0){return l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]}function u(t,e,r){if(o.randomUUID&&!e&&!t)return o.randomUUID();t=t||{};const n=t.random||(t.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(let t=0;t<16;++t)e[r+t]=n[t];return e}return c(n)}const p=u},84328:(t,e,r)=>{var n=r(65290),o=r(27578),a=r(6310),s=function(t){return function(e,r,s){var i,l=n(e),c=a(l),u=o(s,c);if(t&&r!==r){while(c>u)if(i=l[u++],i!==i)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===r)return t||u||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},5649:(t,e,r)=>{var n=r(67697),o=r(92297),a=TypeError,s=Object.getOwnPropertyDescriptor,i=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=i?function(t,e){if(o(t)&&!s(t,"length").writable)throw new a("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},8758:(t,e,r)=>{var n=r(36812),o=r(19152),a=r(82474),s=r(72560);t.exports=function(t,e,r){for(var i=o(e),l=s.f,c=a.f,u=0;u<i.length;u++){var p=i[u];n(t,p)||r&&n(r,p)||l(t,p,c(e,p))}}},55565:t=>{var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},72739:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},79989:(t,e,r)=>{var n=r(19037),o=r(82474).f,a=r(75773),s=r(11880),i=r(95014),l=r(8758),c=r(35266);t.exports=function(t,e){var r,u,p,f,d,h,v=t.target,y=t.global,b=t.stat;if(u=y?n:b?n[v]||i(v,{}):(n[v]||{}).prototype,u)for(p in e){if(d=e[p],t.dontCallGetSet?(h=o(u,p),f=h&&h.value):f=u[p],r=c(y?p:v+(b?".":"#")+p,t.forced),!r&&void 0!==f){if(typeof d==typeof f)continue;l(d,f)}(t.sham||f&&f.sham)&&a(d,"sham",!0),s(u,p,d,t)}}},94413:(t,e,r)=>{var n=r(68844),o=r(3689),a=r(6648),s=Object,i=n("".split);t.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"===a(t)?i(t,""):s(t)}:s},92297:(t,e,r)=>{var n=r(6648);t.exports=Array.isArray||function(t){return"Array"===n(t)}},35266:(t,e,r)=>{var n=r(3689),o=r(69985),a=/#|\.prototype\./,s=function(t,e){var r=l[i(t)];return r===u||r!==c&&(o(e)?n(e):!!e)},i=s.normalize=function(t){return String(t).replace(a,".").toLowerCase()},l=s.data={},c=s.NATIVE="N",u=s.POLYFILL="P";t.exports=s},6310:(t,e,r)=>{var n=r(43126);t.exports=function(t){return n(t.length)}},58828:t=>{var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},82474:(t,e,r)=>{var n=r(67697),o=r(22615),a=r(49556),s=r(75684),i=r(65290),l=r(18360),c=r(36812),u=r(68506),p=Object.getOwnPropertyDescriptor;e.f=n?p:function(t,e){if(t=i(t),e=l(e),u)try{return p(t,e)}catch(r){}if(c(t,e))return s(!o(a.f,t,e),t[e])}},72741:(t,e,r)=>{var n=r(54948),o=r(72739),a=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},7518:(t,e)=>{e.f=Object.getOwnPropertySymbols},54948:(t,e,r)=>{var n=r(68844),o=r(36812),a=r(65290),s=r(84328).indexOf,i=r(57248),l=n([].push);t.exports=function(t,e){var r,n=a(t),c=0,u=[];for(r in n)!o(i,r)&&o(n,r)&&l(u,r);while(e.length>c)o(n,r=e[c++])&&(~s(u,r)||l(u,r));return u}},49556:(t,e)=>{var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},19152:(t,e,r)=>{var n=r(76058),o=r(68844),a=r(72741),s=r(7518),i=r(85027),l=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=a.f(i(t)),r=s.f;return r?l(e,r(t)):e}},27578:(t,e,r)=>{var n=r(68700),o=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):a(r,e)}},65290:(t,e,r)=>{var n=r(94413),o=r(74684);t.exports=function(t){return n(o(t))}},68700:(t,e,r)=>{var n=r(58828);t.exports=function(t){var e=+t;return e!==e||0===e?0:n(e)}},43126:(t,e,r)=>{var n=r(68700),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},70560:(t,e,r)=>{var n=r(79989),o=r(90690),a=r(6310),s=r(5649),i=r(55565),l=r(3689),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},p=c||!u();n({target:"Array",proto:!0,arity:1,forced:p},{push:function(t){var e=o(this),r=a(e),n=arguments.length;i(r+n);for(var l=0;l<n;l++)e[r]=arguments[l],r++;return s(e,r),r}})}}]);