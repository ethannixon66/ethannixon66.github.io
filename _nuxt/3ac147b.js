(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{200:function(t,e,n){"use strict";var r=n(285);e.a=function(t){var e=t.store;new r.a({}).plugin(e)}},264:function(t,e,n){var content=n(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("6cd9a3d1",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";var r=n(432),o=n(437),c=n(433),l=n(438),f=n(196),d=n(194),_=n(128),v=n(195),m=n(80),h=n(435),w=n(436),x=n(434),k=n(202),y={name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-emoticon",title:"Welcome",to:"/"},{icon:"mdi-apps",title:"Collection",to:"/collection"},{icon:"mdi-magnify",title:"Search",to:"/search"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Lego Logger"}}},S=n(91),component=Object(S.a)(y,(function(){var t=this,e=t._self._c;return e(r.a,[e(w.a,{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(d.a,t._l(t.items,(function(n,i){return e(_.a,{key:i,attrs:{to:n.to,router:"",exact:""}},[e(v.a,[e(f.a,[t._v(t._s(n.icon))])],1),t._v(" "),e(m.a,[e(m.b,[t._v(t._s(n.title))])],1)],1)})),1)],1),t._v(" "),e(o.a,{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[e(c.a,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(k.a,[t._v(t._s(t.title))]),t._v(" "),e(x.a)],1),t._v(" "),e(h.a,[e(l.a,[e("Nuxt")],1)],1),t._v(" "),e(w.a,{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[e(d.a,[e(_.a,{nativeOn:{click:function(e){t.right=!t.right}}},[e(v.a,[e(f.a,{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),e(m.b,[t._v("Switch drawer (click me)")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},296:function(t,e,n){n(297),t.exports=n(298)},346:function(t,e,n){"use strict";n(264)},347:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),r.locals={},t.exports=r},406:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"mutations",(function(){return c}));n(9),n(3),n(133);var r=function(){return{sets:[]}},o={getAllSets:function(t){return function(filter){return"No Status"===filter?t.sets.filter((function(t){return""===t.status||void 0===t.status})):filter?t.sets.filter((function(t){return t.status===filter})):t.sets}},isSetInCollection:function(t){return function(e){return t.sets.filter((function(t){return t.set_num===e.set_num})).length>0}}},c={addSet:function(t,e){t.sets.find((function(t){return t.set_num===e.set_num}))||t.sets.push(e)},changeStatus:function(t,e){var n=e.set,r=e.newStatus;t.sets.find((function(t){return t.set_num===n.set_num})).status=r},removeSet:function(t,e){t.sets=t.sets.filter((function(t){return t.set_num!==e.set_num}))}}},81:function(t,e,n){"use strict";var r=n(432),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(n(346),n(91)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[296,9,3,10]]]);