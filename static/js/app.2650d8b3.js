(function(){"use strict";var t={9234:function(t,e,n){n.r(e),n.d(e,{default:function(){return r}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"hundredfixbox commoncss hundredcolor",on:{touchstart:function(e){t.textshow=!0}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.textshow,expression:"textshow"}]},[t._v("111")]),e("div",{staticClass:"digitcss"},[e("div",{staticClass:"hundred digitbox"},[t._m(0),e("div",{staticClass:"content",attrs:{id:"huncontent"}},t._l(10,(function(n,o){return e("div",{key:o,staticClass:"contabox"},[8==o?e("div",{staticClass:"imgboxs"},[t.flagh?e("el-image",{staticClass:"bombimage",attrs:{src:t.bomb,draggable:"false",fit:"fit"},on:{click:function(e){t.flagh=!1}}}):e("div",{staticClass:"hundredbox commonstyle hundredcolor"})],1):t._e()])})),0)]),e("div",{staticClass:"ten digitbox"},[t._m(1),e("div",{staticClass:"content",attrs:{id:"tencontent"}},t._l(10,(function(n,o){return e("div",{key:o,staticClass:"contabox"},[8==o?e("div",{staticClass:"imgboxs"},[t.flagt?e("el-image",{staticClass:"bombimage",attrs:{src:t.bomb,draggable:"false",fit:"fit"},on:{click:function(e){t.flagt=!1}}}):e("div",{staticClass:"tenbox commonstyle tencolor"})],1):t._e()])})),0)]),e("div",{staticClass:"ind digitbox"},[t._m(2),e("div",{staticClass:"content",attrs:{id:"indcontent"}},t._l(10,(function(n,o){return e("div",{key:o,staticClass:"contabox indtabox"},[8==o?e("div",{staticClass:"imgboxs"},[t.flagi?e("el-image",{staticClass:"bombimage",attrs:{src:t.bomb,draggable:"false",fit:"fit"},on:{click:function(e){t.flagi=!1}}}):e("div",{staticClass:"indbox commonstyle indcolor"})],1):t._e()])})),0)])]),e("div",{staticClass:"logoscss"},[e("div",{staticClass:"roundlistcss"},[e("div",{staticStyle:{display:"flex"}},[e("div",{staticClass:"hundredfixbox commoncss hundredcolor",on:{touchstart:function(e){return t.hundredadd()}}}),t._l(t.hundredlist,(function(n,o){return e("div",{key:o,ref:"box",refInFor:!0,staticClass:"hundredbox commoncss hundredcolor",style:"position:fixed;left:"+n.left+"px;top:"+n.top+"px;",on:{touchstart:function(e){return t.hundreddown(e,n)}}})}))],2),e("div",{staticStyle:{display:"flex"}},[e("div",{staticClass:"tenfixbox commoncss tencolor",on:{touchstart:function(e){return t.tenadd()}}}),t._l(t.tenlist,(function(n,o){return e("div",{key:o,ref:"box",refInFor:!0,staticClass:"tenbox commoncss tencolor",style:"position:fixed;left:"+n.left+"px;top:"+n.top+"px;",on:{touchstart:function(e){return t.tendown(e,n)}}})}))],2),e("div",{staticStyle:{display:"flex"}},[e("div",{staticClass:"indfixbox commoncss indcolor"}),t._l(t.indlist,(function(t,n){return e("div",{key:n,ref:"box",refInFor:!0,staticClass:"indbox commoncss indcolor",style:"position:fixed;left:"+t.left+"px;top:"+t.top+"px;"})}))],2)]),e("div",{staticClass:"dotscss"},[e("div",{staticClass:"doctbox"},t._l(10,(function(n,o){return e("div",{key:o,staticClass:"dotout"},[e("div",{staticClass:"dotcss",style:{backgroundColor:1==t.flagnum?"yellowgreen":"#fff"}})])})),0),e("div",{staticClass:"btncss"},[e("el-button",{attrs:{size:"mini"},on:{click:function(e){t.flagnum=1}}},[t._v("十个一")]),e("el-button",{attrs:{size:"mini"},on:{click:function(e){t.flagnum=0}}},[t._v("清空")])],1)]),e("el-button",{staticClass:"btns bbtn",on:{click:t.resetind}},[t._v("清空个位")]),e("el-button",{staticClass:"btns gbtn",on:{click:t.resetten}},[t._v("清空十位")]),e("el-button",{staticClass:"btns ybtn",on:{click:t.resetall}},[t._v("清 除")])],1)])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav hundrednav"},[e("div",{staticClass:"titlecss"},[t._v("百")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav tennav"},[e("div",{staticClass:"titlecss"},[t._v("十")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav indnav"},[e("div",{staticClass:"titlecss"},[t._v("个")])])}],s=(n(7658),n.p+"static/img/bomb.d8aca2e7.png"),l={name:"MathView",components:{},data(){return{bomb:s,hundredlist:[{left:"",top:""}],tenlist:[{left:"",top:""}],indlist:[{left:"",top:""}],flagnum:0,flagh:!0,flagt:!0,flagi:!0,textshow:!1}},mounted(){this.hundredadd(),this.tenadd(),this.indadd()},methods:{hundredadd(){console.log(1);const t=t=>{let e={left:"",top:""};this.hundredlist.push(e)},e=()=>{this.$el.removeEventListener("touchmove",t),this.$el.removeEventListener("touchend",e)};this.$el.addEventListener("touchmove",t),this.$el.addEventListener("touchend",e)},hundreddown(t,e){document.ontouchmove=n=>{e.left=n.clientX-t.offsetX,e.top=n.clientY-t.offsetY},document.ontouchend=()=>{document.ontouchmove=null,document.ontouchmove=null}},tenadd(){const t=t=>{let e={left:"",top:""};this.tenlist.push(e)},e=()=>{this.$el.removeEventListener("touchmove",t),this.$el.removeEventListener("touchend",e)};this.$el.addEventListener("touchmove",t),this.$el.addEventListener("touchend",e)},tendown(t,e){document.ontouchmove=n=>{e.left=n.clientX-t.offsetX,e.top=n.clientY-t.offsetY},document.ontouchend=()=>{document.ontouchmove=null,document.ontouchmove=null}},indadd(){const t=t=>{let e={left:"",top:""};this.indlist.push(e)},e=()=>{this.$el.removeEventListener("touchmove",t),this.$el.removeEventListener("touchend",e)};this.$el.addEventListener("touchmove",t),this.$el.addEventListener("touchend",e)},inddown(t,e){document.ontouchmove=n=>{e.left=n.clientX-t.offsetX,e.top=n.clientY-t.offsetY},document.ontouchend=()=>{document.ontouchmove=null,document.ontouchmove=null}},resetind(){let t=[],e=[];t=JSON.parse(JSON.stringify(this.indlist)),t.forEach(((t,n)=>{""==t.left&&""==t.top||e.push(t)})),this.indlist=e;var n=document.getElementById("indcontent");let o="",i="",s="",l="",c=[];o=n.getBoundingClientRect().top,i=n.getBoundingClientRect().left,s=n.getBoundingClientRect().width,l=n.getBoundingClientRect().height,console.log("top :>> ",o),console.log("left :>> ",i),console.log("width :>> ",s),console.log("bb :>> ",e),e.forEach(((t,e)=>{t.left>i-5&&t.left<i+s-75&&t.top>o-5&&t.top<o-75+l?console.log("满足条件"):c.push(t)})),this.flagi=!0,this.indlist=c,this.indadd()},resetten(){let t=[],e=[];t=JSON.parse(JSON.stringify(this.tenlist)),t.forEach(((t,n)=>{""==t.left&&""==t.top||e.push(t)})),this.tenlist=e;var n=document.getElementById("tencontent");let o="",i="",s="",l="",c=[];o=n.getBoundingClientRect().top,i=n.getBoundingClientRect().left,s=n.getBoundingClientRect().width,l=n.getBoundingClientRect().height,console.log("top :>> ",o),console.log("left :>> ",i),console.log("width :>> ",s),console.log("bb :>> ",e),e.forEach(((t,e)=>{t.left>i-5&&t.left<i+s-75&&t.top>o-5&&t.top<o-75+l?console.log("满足条件"):c.push(t)})),this.flagt=!0,this.tenlist=c,this.tenadd()},resetall(){this.hundredlist=[],this.tenlist=[],this.indlist=[],this.flagh=!0,this.flagt=!0,this.flagi=!0,this.flagnum=0,this.hundredadd(),this.tenadd(),this.indadd()},handleBomb(t){console.log("num :>> ",t)}}},c=l,d=n(1001),a=(0,d.Z)(c,o,i,!1,null,"5ab655e4",null),r=a.exports},3224:function(t,e,n){var o=n(144),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],l=n(1001),c={},d=(0,l.Z)(c,i,s,!1,null,null,null),a=d.exports,r=n(8345);n(9234);o["default"].use(r.ZP);const u=[{path:"/",name:"math",component:()=>Promise.resolve().then(n.bind(n,9234))}],f=new r.ZP({routes:u});var h=f,v=n(629);o["default"].use(v.ZP);var m=new v.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),g=n(4720),b=n.n(g);o["default"].config.productionTip=!1,o["default"].use(b()),new o["default"]({router:h,store:m,render:t=>t(a)}).$mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={id:o,loaded:!1,exports:{}};return t[o](s,s.exports,n),s.loaded=!0,s.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,o,i,s){if(!o){var l=1/0;for(r=0;r<t.length;r++){o=t[r][0],i=t[r][1],s=t[r][2];for(var c=!0,d=0;d<o.length;d++)(!1&s||l>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[d])}))?o.splice(d--,1):(c=!1,s<l&&(l=s));if(c){t.splice(r--,1);var a=i();void 0!==a&&(e=a)}}return e}s=s||0;for(var r=t.length;r>0&&t[r-1][2]>s;r--)t[r]=t[r-1];t[r]=[o,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,s,l=o[0],c=o[1],d=o[2],a=0;if(l.some((function(e){return 0!==t[e]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(d)var r=d(n)}for(e&&e(o);a<l.length;a++)s=l[a],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(r)},o=self["webpackChunkcourseware"]=self["webpackChunkcourseware"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3224)}));o=n.O(o)})();