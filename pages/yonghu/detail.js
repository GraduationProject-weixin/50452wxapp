(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/detail"],{"0e4b":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,n,e,a,r,s,o){try{var i=t[s](o),u=i.value}catch(c){return void e(c)}i.done?n(u):Promise.resolve(u).then(a,r)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var o=t.apply(n,e);function i(t){s(o,a,r,i,u,"next",t)}function u(t){s(o,a,r,i,u,"throw",t)}i(void 0)}))}}var i={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=o(a.default.mark((function t(n){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=n.id,n.userid&&(this.userid=n.userid);case 2:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onShow:function(){var n=o(a.default.mark((function n(e){var r,s;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.init(),r=t.getStorageSync("nowTable"),n.next=4,this.$api.session(r);case 4:s=n.sent,this.user=s.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","yonghu"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(n){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(n.id,"&userid=")+this.userid)},onAcrossTap:function(n,e,a,r,s){if(t.setStorageSync("crossTable","yonghu"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",a),t.setStorageSync("statusColumnValue",s),t.setStorageSync("tips",r),""!=a&&!a.startsWith("[")){var o=t.getStorageSync("crossObj");for(var i in o)if(i==a&&o[i]==s)return void this.$utils.msg(r)}this.$utils.jump("../".concat(n,"/add-or-update?cross=true"))},init:function(){var t=o(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("yonghu",this.id);case 2:n=t.sent,this.detail=n.data;case 4:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=o(a.default.mark((function t(n){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.endSuccess(n.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(n){var e=this;n=e.$base.url+n,t.downloadFile({url:n,success:function(t){200===t.statusCode&&(e.$utils.msg("下载成功"),window.open(n))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=o(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discussyonghu/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onSHTap:function(){this.$refs.popup.open()}}};n.default=i}).call(this,e("543d")["default"])},"24cc":function(t,n,e){"use strict";var a=e("780f"),r=e.n(a);r.a},"41ae":function(t,n,e){"use strict";e.r(n);var a=e("0e4b"),r=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=r.a},"780f":function(t,n,e){},b923:function(t,n,e){"use strict";(function(t){e("6cdc"),e("921b");a(e("66fd"));var n=a(e("d56b"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},d56b:function(t,n,e){"use strict";e.r(n);var a=e("e8de"),r=e("41ae");for(var s in r)"default"!==s&&function(t){e.d(n,t,(function(){return r[t]}))}(s);e("24cc");var o,i=e("f0c5"),u=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"246c8384",null,!1,a["a"],o);n["default"]=u.exports},e8de:function(t,n,e){"use strict";var a={"mescroll-uni":()=>Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"f05e"))},r=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}))}},[["b923","common/runtime","common/vendor"]]]);