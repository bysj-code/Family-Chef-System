(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goumaicaipin/add-or-update"],{"0452":function(n,i,e){"use strict";e.r(i);var t=e("b943"),a=e.n(t);for(var r in t)"default"!==r&&function(n){e.d(i,n,(function(){return t[n]}))}(r);i["default"]=a.a},"241d":function(n,i,e){},"34e4":function(n,i,e){"use strict";var t={"w-picker":function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"175c"))}},a=function(){var n=this,i=n.$createElement;n._self._c},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return t}))},5242:function(n,i,e){"use strict";e.r(i);var t=e("34e4"),a=e("0452");for(var r in a)"default"!==r&&function(n){e.d(i,n,(function(){return a[n]}))}(r);e("9642");var u,o=e("f0c5"),s=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"066ab212",null,!1,t["a"],u);i["default"]=s.exports},"82f9":function(n,i,e){"use strict";(function(n){e("6ccf"),e("921b");t(e("66fd"));var i=t(e("5242"));function t(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},9642:function(n,i,e){"use strict";var t=e("241d"),a=e.n(t);a.a},b943:function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,i,e,t,a,r,u){try{var o=n[r](u),s=o.value}catch(c){return void e(c)}o.done?i(s):Promise.resolve(s).then(t,a)}function u(n){return function(){var i=this,e=arguments;return new Promise((function(t,a){var u=n.apply(i,e);function o(n){r(u,t,a,o,s,"next",n)}function s(n){r(u,t,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("175c"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{ruleForm:{dingdanbianhao:this.getUUID(),caipinmingcheng:"",caipinfenlei:"",tupian:"",jiage:"",shuliang:"",zongjine:"",xiadanshijian:"",dianpuzhanghao:"",dianpumingcheng:"",lianxidianhua:"",zhanghao:"",xingming:"",shouji:"",ispay:"",userid:""},user:{},ro:{dingdanbianhao:!1,caipinmingcheng:!1,caipinfenlei:!1,tupian:!1,jiage:!1,shuliang:!1,zongjine:!1,xiadanshijian:!1,dianpuzhanghao:!1,dianpumingcheng:!1,lianxidianhua:!1,zhanghao:!1,xingming:!1,shouji:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{zongjine:{get:function(){return 1*this.ruleForm.jiage*this.ruleForm.shuliang}}},onLoad:function(){var i=u(t.default.mark((function i(e){var a,r,u,o;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.ruleForm.xiadanshijian=this.$utils.getCurDateTime(),a=n.getStorageSync("nowTable"),i.next=4,this.$api.session(a);case 4:if(r=i.sent,this.user=r.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.shouji=this.user.shouji,this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=17;break}return this.ruleForm.id=e.id,i.next=15,this.$api.info("goumaicaipin",this.ruleForm.id);case 15:r=i.sent,this.ruleForm=r.data;case 17:if(!e.cross){i.next=84;break}u=n.getStorageSync("crossObj"),i.t0=t.default.keys(u);case 20:if((i.t1=i.t0()).done){i.next=84;break}if(o=i.t1.value,"dingdanbianhao"!=o){i.next=26;break}return this.ruleForm.dingdanbianhao=u[o],this.ro.dingdanbianhao=!0,i.abrupt("continue",20);case 26:if("caipinmingcheng"!=o){i.next=30;break}return this.ruleForm.caipinmingcheng=u[o],this.ro.caipinmingcheng=!0,i.abrupt("continue",20);case 30:if("caipinfenlei"!=o){i.next=34;break}return this.ruleForm.caipinfenlei=u[o],this.ro.caipinfenlei=!0,i.abrupt("continue",20);case 34:if("tupian"!=o){i.next=38;break}return this.ruleForm.tupian=u[o],this.ro.tupian=!0,i.abrupt("continue",20);case 38:if("jiage"!=o){i.next=42;break}return this.ruleForm.jiage=u[o],this.ro.jiage=!0,i.abrupt("continue",20);case 42:if("shuliang"!=o){i.next=46;break}return this.ruleForm.shuliang=u[o],this.ro.shuliang=!0,i.abrupt("continue",20);case 46:if("zongjine"!=o){i.next=50;break}return this.ruleForm.zongjine=u[o],this.ro.zongjine=!0,i.abrupt("continue",20);case 50:if("xiadanshijian"!=o){i.next=54;break}return this.ruleForm.xiadanshijian=u[o],this.ro.xiadanshijian=!0,i.abrupt("continue",20);case 54:if("dianpuzhanghao"!=o){i.next=58;break}return this.ruleForm.dianpuzhanghao=u[o],this.ro.dianpuzhanghao=!0,i.abrupt("continue",20);case 58:if("dianpumingcheng"!=o){i.next=62;break}return this.ruleForm.dianpumingcheng=u[o],this.ro.dianpumingcheng=!0,i.abrupt("continue",20);case 62:if("lianxidianhua"!=o){i.next=66;break}return this.ruleForm.lianxidianhua=u[o],this.ro.lianxidianhua=!0,i.abrupt("continue",20);case 66:if("zhanghao"!=o){i.next=70;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,i.abrupt("continue",20);case 70:if("xingming"!=o){i.next=74;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,i.abrupt("continue",20);case 74:if("shouji"!=o){i.next=78;break}return this.ruleForm.shouji=u[o],this.ro.shouji=!0,i.abrupt("continue",20);case 78:if("userid"!=o){i.next=82;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,i.abrupt("continue",20);case 82:i.next=20;break;case 84:this.styleChange();case 85:case"end":return i.stop()}}),i,this)})));function e(n){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xiadanshijianConfirm:function(n){console.log(n),this.ruleForm.xiadanshijian=n.result,this.$forceUpdate()},tupianTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.tupian=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.zongjine=this.zongjine,!this.ruleForm.jiage||this.$validate.isIntNumer(this.ruleForm.jiage)){n.next=4;break}return this.$utils.msg("价格应输入整数"),n.abrupt("return");case 4:if(!this.ruleForm.shuliang||this.$validate.isIntNumer(this.ruleForm.shuliang)){n.next=7;break}return this.$utils.msg("数量应输入整数"),n.abrupt("return");case 7:if(!this.ruleForm.zongjine||this.$validate.isIntNumer(this.ruleForm.zongjine)){n.next=10;break}return this.$utils.msg("总金额应输入整数"),n.abrupt("return");case 10:if(!this.ruleForm.id){n.next=15;break}return n.next=13,this.$api.update("goumaicaipin",this.ruleForm);case 13:n.next=17;break;case 15:return n.next=17,this.$api.add("goumaicaipin",this.ruleForm);case 17:this.$utils.msgBack("提交成功");case 18:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,a=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};i.default=s}).call(this,e("543d")["default"])}},[["82f9","common/runtime","common/vendor"]]]);