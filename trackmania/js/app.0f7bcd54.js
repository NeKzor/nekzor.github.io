(function(e){function t(t){for(var n,c,o=t[0],i=t[1],l=t[2],f=0,u=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},s=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://nekz.me/trackmania/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=i;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app",[a("v-main",[a("v-row",[a("v-col",[a("v-row",{staticStyle:{"padding-left":"20px","padding-right":"20px"},attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"3",lg:"4",xl:"4"}},[a("v-img",{staticStyle:{opacity:"1","border-radius":"10px","box-shadow":"0 0 4px 1px rgba(0, 0, 0, 0.8)"},attrs:{src:e.mapImage,"aspect-ratio":"7"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}])})],1)],1),a("v-row",{staticStyle:{"padding-left":"20px","padding-right":"20px"},attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"2",xl:"3"}},[a("v-select",{attrs:{items:e.campaigns,"item-text":"name","item-value":"name",label:"Campaign","hide-details":""},on:{change:e.updateScores},model:{value:e.campaign,callback:function(t){e.campaign=t},expression:"campaign"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"2",xl:"1"}},[a("v-select",{attrs:{items:e.tracks,label:"Track","hide-details":""},on:{change:e.updateScores},model:{value:e.track,callback:function(t){e.track=t},expression:"track"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"2",xl:"1"}},[a("v-autocomplete",{attrs:{items:e.zoneTypes,"item-text":"name","item-value":"zoneId",label:"Zone","hide-details":"","return-object":""},model:{value:e.zoneType,callback:function(t){e.zoneType=t},expression:"zoneType"}})],1)],1),a("v-row",{staticStyle:{"padding-left":"20px","padding-right":"20px"},attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"9",lg:"6",xl:"5"}},[a("v-data-table",{attrs:{headers:e.headers,items:e.filteredScores,"footer-props":{"items-per-page-options":[10,100,1e3]},loading:0===e.scores.length},scopedSlots:e._u([{key:"item.score",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.formatScore(a.score))+" ")]}}],null,!0)}),a("br"),a("v-tooltip",{attrs:{bottom:"","open-delay":"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:"",color:"primary",disabled:"1"===e.track},on:{click:e.previousTrack}},"v-btn",r,!1),n),[a("v-icon",[e._v("mdi-arrow-left")])],1)]}}])},[a("span",[e._v("Previous Track")])]),a("v-tooltip",{attrs:{bottom:"","open-delay":"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:"",color:"primary",disabled:e.track===e.tracks.length.toString()},on:{click:e.nextTrack}},"v-btn",r,!1),n),[a("v-icon",[e._v("mdi-arrow-right")])],1)]}}])},[a("span",[e._v("Next Track")])])],1)],1)],1)],1),a("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{fixed:"",fab:"",bottom:"",right:"",color:"primary"},on:{click:e.toggleDarkTheme}},"v-btn",r,!1),n),[e.$vuetify.theme.dark?a("v-icon",[e._v("mdi-lightbulb")]):a("v-icon",[e._v("mdi-lightbulb-outline")])],1)]}}])},[a("span",[e._v("Toggle light/dark theme")])])],1)],1)],1)},s=[],c=(a("99af"),a("cb29"),a("4de4"),a("7db0"),a("caad"),a("c975"),a("d81d"),a("fb6a"),a("b0c0"),a("d3b7"),a("ac1f"),a("2532"),a("1276"),a("b85c")),o=a("2909"),i=a("5530"),l={name:"App",data:function(){return{headers:[{align:"start",text:"Player",value:"displayName",sortable:!1},{align:"start",text:"Zone",value:"zoneName",sortable:!1},{align:"end",text:"Score",value:"score",sortable:!1}],scores:[],campaigns:[{name:"Summer 2020",path:"summer2020",route:"Summer-2020",tracks:Array(25).fill().map((function(e,t){return"".concat(t+1)}))}],campaign:"Summer 2020",track:"1",zones:[],zonesCache:{},zoneTypes:[],zoneType:{},search:""}},mounted:function(){var e=this,t=document.location.hash.slice(2).split(/\//g);if(1===t.length){var a=t[0].toLowerCase(),n=this.campaigns.find((function(e){var t=e.path;return t===a}));n&&(this.campaign=n.name)}else if(2===t.length){var r=t[0].toLowerCase(),s=this.campaigns.find((function(e){var t=e.path;return t===r}));if(s){this.campaign=s.name;var c=t[1];s.tracks.find((function(e){return e===c}))&&(this.track=c)}}var l="https://raw.githubusercontent.com/NeKzor/nekzor.github.io/master/trackmania/zones.json";fetch(l).then((function(e){return e.json()})).then((function(t){e.zones=t.data;var a=e.zones.find((function(e){return null===e.parentId})),n=e.zones.filter((function(e){return e.parentId===a.zoneId})).map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{index:1})})),r=n.map((function(e){return e.zoneId})),s=e.zones.filter((function(e){return r.includes(e.parentId)})).map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{index:2})}));e.zoneTypes=[Object(i["a"])(Object(i["a"])({},a),{},{index:0})].concat(Object(o["a"])(n),Object(o["a"])(s)),e.zoneType=a,e.updateScores()}))},computed:{filteredScores:function(){var e=this;return this.scores&&this.zoneType?this.scores.filter((function(t){return t.zone.filter((function(t){return t.zoneId===e.zoneType.zoneId})).length})):[]},tracks:function(){var e=this;return this.campaigns.find((function(t){var a=t.name;return a===e.campaign})).tracks},mapImage:function(){return"https://raw.githubusercontent.com/NeKzor/nekzor.github.io/master/trackmania/images/summer2020/".concat(this.track,".webp")}},methods:{updateScores:function(){var e=this;this.scores=[];var t=this.campaigns.find((function(t){var a=t.name;return a===e.campaign}));if(t){var a="https://raw.githubusercontent.com/jonese1234/Trackmania-Leaderboard/master/",n=2;fetch("".concat(a).concat(t.route,"/").concat(this.track,"/latest.json")).then((function(e){return e.json()})).then((function(a){document.location.hash="#/".concat(t.path,"/").concat(e.track),e.scores=a.tops[0].top.map((function(t){var a=e.zonesCache[t.zoneId];return a||(a=e.zonesCache[t.zoneId]=e.findZone(t.zoneId)),Object(i["a"])(Object(i["a"])({},t),{},{zone:a,zoneName:a[n].name})}))}))}},findZone:function(e){var t,a=[],n=Object(c["a"])(this.zones);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.zoneId===e&&(null!==r.parentId&&a.push.apply(a,Object(o["a"])(this.findZone(r.parentId))),a.push(r))}}catch(s){n.e(s)}finally{n.f()}return a},previousTrack:function(){var e=this.tracks,t=e.indexOf(this.track);this.track=e[t-1],this.updateScores()},nextTrack:function(){var e=this.tracks,t=e.indexOf(this.track);this.track=e[t+1],this.updateScores()},formatScore:function(e){var t=e%1e3,a=Math.floor(e/1e3),n=a%60,r=Math.floor(a/60);return(r>0?r+":":"")+(n<10&&r>0?"0"+n:n)+"."+(t<100?t<10?"00"+t:"0"+t:t)},toggleDarkTheme:function(){var e="true"!==window.localStorage.getItem("dark-theme");window.localStorage.setItem("dark-theme",e),this.$vuetify.theme.dark=e}}},d=l,f=a("2877"),u=a("6544"),b=a.n(u),p=a("7496"),j=a("c6a6"),m=a("8336"),h=a("62ad"),v=a("8fea"),g=a("132d"),k=a("adda"),y=a("f6c4"),z=a("490a"),x=a("0fd9"),w=a("b974"),S=a("3a2f"),O=Object(f["a"])(d,r,s,!1,null,null,null),_=O.exports;b()(O,{VApp:p["a"],VAutocomplete:j["a"],VBtn:m["a"],VCol:h["a"],VDataTable:v["a"],VIcon:g["a"],VImg:k["a"],VMain:y["a"],VProgressCircular:z["a"],VRow:x["a"],VSelect:w["a"],VTooltip:S["a"]});var T=a("ce5b"),I=a.n(T),V=a("c1df"),C=a.n(V);a("bf40");n["default"].use(I.a),n["default"].config.productionTip=!1,n["default"].prototype.$m=C.a,new n["default"]({vuetify:new I.a({theme:{dark:"true"===localStorage.getItem("dark-theme")}}),render:function(e){return e(_)}}).$mount("#app")}});
//# sourceMappingURL=app.0f7bcd54.js.map