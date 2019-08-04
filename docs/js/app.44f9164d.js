(function(t){function e(e){for(var n,o,l=e[0],u=e[1],i=e[2],d=0,f=[];d<l.length;d++)o=l[d],a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,l=1;l<r.length;l++){var u=r[l];0!==a[u]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var c=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container m-auto"},[r("Header"),r("Main"),r("Footer")],1)},s=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-5 bg-red-100 font-bold text-red-500 text-center text-lg sm:text-5xl border-2 border-solid border-red-500 w-full"},[r("h1",[t._v("Youtube Video Downloader")])])}],u={name:"Header"},i=u,c=r("2877"),d=Object(c["a"])(i,o,l,!1,null,"cf176ac4",null),f=d.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap w-full items-center"},[r("form",{staticClass:"w-full",on:{submit:function(e){return e.preventDefault(),t.fetchResults(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"block m-auto border border-solid my-5 w-1/2 p-2 border-red-500",attrs:{type:"text",placeholder:"Enter youtube link.."},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),r("button",{staticClass:"block m-auto my-5 border border-solid border-green-600 bg-green-300 p-4 rounded-lg",attrs:{type:"submit"}},[t._v(" Get Download Link")])]),t.link?r("Results",{attrs:{url:t.url}}):t._e()],1)},m=[],b=(r("b54a"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.status?r("div",{staticClass:"block md:flex flex-wrap my-4 p-4 border-2 border-solid border-green-300 bg-green-100 w-full max-h-screen overflow-y-auto"},[r("div",{staticClass:"flex-1"},[r("img",{staticClass:"block m-auto w-auto h-auto content-center",attrs:{src:t.data.thumb,alt:"video thumbnail"}}),r("h1",{staticClass:"p-4 m-auto my-2 text-center text-2xl"},[t._v(" "+t._s(t.data.title))]),r("h2",{staticClass:"my-2 text-left text-xl"},[t._v(" Category: "+t._s(t.data.category)+" ")]),r("h2",{staticClass:"my-2 text-left text-xl"},[t._v(" Published on: "+t._s(t.data.published)+" ")]),r("h2",{staticClass:" my-2 text-left text-xl"},[t._v(" Published by: "+t._s(t.data.userName)+" ")]),r("h2",{staticClass:" my-2 text-left text-xl"},[t._v(" Description:")]),r("p",{staticClass:"w-full h-64 overflow-y-auto text-justify p-4 border border-solid"},[t._v(" "+t._s(t.data.description))])]),r("div",{staticClass:"flex-1"},t._l(t.data.streams,function(t){return r("div",{staticClass:"m-auto my-4 w-full h-auto"},[r("Streams",{attrs:{stream:t}})],1)}),0)]):r("div",{staticClass:"m-auto my-4 p-4 border-2 border-solid border-green-300 bg-green-200 w-full max-h-screen text-center"},[r("p",[t._v(" "+t._s(t.msg)+" ")])])}),h=[],v=(r("96cf"),r("3b8d")),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-stretch content-center"},[r("div",{staticClass:"flex-1 border-2 border-solid p-2 text-center"},[r("p",[t._v(t._s(t.stream.quality)+" : "+t._s(t.stream.extension)+" "+t._s(t.stream.mediaType))])]),r("div",{staticClass:"flex-1 border-2 border-solid text-center p-2"},[r("p",[t._v(" "+t._s(t.round(t.stream.fileSize/1048576,2))+"MB")])]),r("div",{staticClass:"flex-1 border-2 border-solid p-2 text-center"},[r("a",{staticClass:"m-auto p-2 border border-solid rounded-lg bg-green-400 text-white text-center",attrs:{href:t.stream.url}},[t._v(" Download")])])])},g=[],_=(r("c5f6"),{name:"HelloWorld",props:["stream"],methods:{round:function(t,e){return Number(Math.round(t+"e"+e)+"e-"+e)}}}),y=_,w=Object(c["a"])(y,x,g,!1,null,"6559e5a6",null),C=w.exports,k=r("bc3a"),j={name:"Results",props:["url"],components:{Streams:C},data:function(){return{data:null,status:null,msg:"Processing your request",apiBase:"https://my-youtube-download.herokuapp.com"}},mounted:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k({url:this.apiBase+"/api/getyt",method:"post",data:{url:this.url}});case 3:e=t.sent,this.status=e.data.status,this.msg=e.data.msg,this.data=e.data.data,console.log(e.data),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),this.msg="Hmm an error occoured. the link you provided might not be valid or its not downloadable";case 13:case"end":return t.stop()}},t,this,[[0,10]])}));function e(){return t.apply(this,arguments)}return e}()},O=j,P=Object(c["a"])(O,b,h,!1,null,"6fd7e476",null),E=P.exports,M={name:"Main",components:{Results:E},data:function(){return{url:"",link:null}},methods:{fetchResults:function(){this.link?this.link=null:this.link=this.url}}},S=M,$=Object(c["a"])(S,p,m,!1,null,"b74a203c",null),R=$.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"border-2 border-solid border-gray-700 w-full p-5 bg-gray-400 text-center font-bold"},[r("p",[t._v(" ©odysseusmax")])])}],T={name:"HelloWorld",props:{msg:String}},B=T,N=Object(c["a"])(B,H,D,!1,null,"aec4af50",null),q=N.exports,F={name:"app",components:{Header:f,Main:R,Footer:q}},J=F,W=Object(c["a"])(J,a,s,!1,null,null,null),z=W.exports;r("def6");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(z)}}).$mount("#app")},def6:function(t,e,r){}});
//# sourceMappingURL=app.44f9164d.js.map