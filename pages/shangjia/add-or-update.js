(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangjia/add-or-update"],{"3d6c":function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");a(n("66fd"));var t=a(n("a1f2"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"40d5":function(e,t,n){},"4ba6":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,a,i,r,s){try{var u=e[r](s),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(a,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var s=e.apply(t,n);function u(e){r(s,a,i,u,o,"next",e)}function o(e){r(s,a,i,u,o,"throw",e)}u(void 0)}))}}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},o=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{shangjiazhanghao:"",mima:"",shangjiamingcheng:"",fengmian:"",yingyexuke:"",lianxidianhua:"",money:""},yingyexukeOptions:[],yingyexukeIndex:0,user:{},ro:{shangjiazhanghao:!1,mima:!1,shangjiamingcheng:!1,fengmian:!1,yingyexuke:!1,lianxidianhua:!1,money:!1}}},components:{wPicker:u,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=s(a.default.mark((function t(n){var i,r,s,u;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:if(r=t.sent,this.user=r.data,this.yingyexukeOptions="有许可证,无许可证".split(","),this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=14;break}return this.ruleForm.id=n.id,t.next=12,this.$api.info("shangjia",this.ruleForm.id);case 12:r=t.sent,this.ruleForm=r.data;case 14:if(this.cross=n.cross,!n.cross){t.next=50;break}s=e.getStorageSync("crossObj"),t.t0=a.default.keys(s);case 18:if((t.t1=t.t0()).done){t.next=50;break}if(u=t.t1.value,"shangjiazhanghao"!=u){t.next=24;break}return this.ruleForm.shangjiazhanghao=s[u],this.ro.shangjiazhanghao=!0,t.abrupt("continue",18);case 24:if("mima"!=u){t.next=28;break}return this.ruleForm.mima=s[u],this.ro.mima=!0,t.abrupt("continue",18);case 28:if("shangjiamingcheng"!=u){t.next=32;break}return this.ruleForm.shangjiamingcheng=s[u],this.ro.shangjiamingcheng=!0,t.abrupt("continue",18);case 32:if("fengmian"!=u){t.next=36;break}return this.ruleForm.fengmian=s[u],this.ro.fengmian=!0,t.abrupt("continue",18);case 36:if("yingyexuke"!=u){t.next=40;break}return this.ruleForm.yingyexuke=s[u],this.ro.yingyexuke=!0,t.abrupt("continue",18);case 40:if("lianxidianhua"!=u){t.next=44;break}return this.ruleForm.lianxidianhua=s[u],this.ro.lianxidianhua=!0,t.abrupt("continue",18);case 44:if("money"!=u){t.next=48;break}return this.ruleForm.money=s[u],this.ro.money=!0,t.abrupt("continue",18);case 48:t.next=18;break;case 50:this.styleChange();case 51:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},yingyexukeChange:function(e){this.yingyexukeIndex=e.target.value,this.ruleForm.yingyexuke=this.yingyexukeOptions[this.yingyexukeIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.fengmian="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=s(a.default.mark((function t(){var n,i,r,s,u,o,c,h,l,f;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){t.next=3;break}return this.$utils.msg("联系电话应输入手机格式"),t.abrupt("return");case 3:if(!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){t.next=6;break}return this.$utils.msg("余额应输入数字"),t.abrupt("return");case 6:if(!this.cross){t.next=22;break}if(u=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==u){t.next=22;break}if(n||(n=e.getStorageSync("crossObj")),u.startsWith("[")){t.next=18;break}for(c in n)c==u&&(n[c]=o);return h=e.getStorageSync("crossTable"),t.next=16,this.$api.update("".concat(h),n);case 16:t.next=22;break;case 18:i=Number(e.getStorageSync("userid")),r=n["id"],s=e.getStorageSync("statusColumnName"),s=s.replace(/\[/,"").replace(/\]/,"");case 22:if(!r||!i){t.next=44;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=r,l={page:1,limit:10,crossuserid:i,crossrefid:r},t.next=28,this.$api.list("shangjia",l);case 28:if(f=t.sent,!(f.data.total>=s)){t.next=34;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 34:if(!this.ruleForm.id){t.next=39;break}return t.next=37,this.$api.update("shangjia",this.ruleForm);case 37:t.next=41;break;case 39:return t.next=41,this.$api.add("shangjia",this.ruleForm);case 41:this.$utils.msgBack("提交成功");case 42:t.next=52;break;case 44:if(!this.ruleForm.id){t.next=49;break}return t.next=47,this.$api.update("shangjia",this.ruleForm);case 47:t.next=51;break;case 49:return t.next=51,this.$api.add("shangjia",this.ruleForm);case 51:this.$utils.msgBack("提交成功");case 52:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),a=a>9?a:"0"+a,i=i>9?i:"0"+i,"".concat(n,"-").concat(a,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},7555:function(e,t,n){"use strict";var a=n("40d5"),i=n.n(a);i.a},a1f2:function(e,t,n){"use strict";n.r(t);var a=n("cc57"),i=n("d85f");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("7555");var s,u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"33cd3fca",null,!1,a["a"],s);t["default"]=o.exports},cc57:function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}))},d85f:function(e,t,n){"use strict";n.r(t);var a=n("4ba6"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a}},[["3d6c","common/runtime","common/vendor"]]]);