webpackJsonp([38],{"1+AF":function(e,t,a){"use strict";t.a={name:"Base",props:{isLong:{type:Boolean},params:{type:Object}},mounted:function(){var e=this;setTimeout(function(){e.$store.commit("setLoading",!1)},100)},activated:function(){var e=this;setTimeout(function(){e.$store.commit("setLoading",!1)},100)}}},JsM0:function(e,t,a){"use strict";var u=a("vgQg").a.apiHost,r={queryOutOrder:u+"/outorder/findOutOrderPage",createOutOrder:u+"/outorder/createOutOrder",updateOutOrder:u+"/outorder/editOutOrder",changeOutOrder:u+"/outorder/changeOutOrderStatus",detailOutOrder:u+"/operational/outorder/getWebOutOrderDetails"},l=a("KvKp"),n={queryOutOrder:function(e){e.method="post";var t=r.queryOutOrder;l.a.sendReq({queryUrl:t,req:e})},createOutOrder:function(e){e.method="post";var t=r.createOutOrder;l.a.sendReq({queryUrl:t,req:e})},updateOutOrder:function(e){e.method="post";var t=r.updateOutOrder;l.a.sendReq({queryUrl:t,req:e})},changeOutOrder:function(e){e.method="post";var t=r.changeOutOrder;l.a.sendReq({queryUrl:t,req:e})},detailOutOrder:function(e){e.method="post";var t=r.detailOutOrder;l.a.sendReq({queryUrl:t,req:e,outOrderId:1})}};t.a=n},Ugjb:function(e,t,a){e.exports=a.p+"spop/static/img/u3546.d8ba4de.jpg"},YEdX:function(e,t){},jsdL:function(e,t,a){"use strict";var u={PageSizeOptions:[10,20,50,100],NormalHeight:265,WindowHeight:document.documentElement.clientHeight,StaffTypes:[{key:"MANAGER",value:"管理员"},{key:"COMMON",value:"普通员工"}],StatusList:[{key:"ON",value:"启用"},{key:"OFF",value:"禁用"}],GoodsTypeList:[{key:"PH",value:"普货"},{key:"MG",value:"敏感"}],OwnershipTypeList:[{key:"GY",value:"国有"},{key:"SZ",value:"三资"},{key:"MY",value:"民营"}],SalesChannelList:[{key:"DL",value:"代理"},{key:"ZJ",value:"直接"},{key:"YCX",value:"一次性客户"}],StrategicNatureList:[{key:"FZLGJ",value:"非战略改进"},{key:"FZLWX",value:"非战略维系"},{key:"ZLMB",value:"战略目标"},{key:"ZLWX",value:"战略维系"}],TradeIdentityList:[{key:"KH",value:"客户"},{key:"GYS",value:"供应商"}],AuthStatusList:[{key:"WRZ",value:"未认证"},{key:"SHZ",value:"待审核"},{key:"RZTG",value:"认证通过"},{key:"RZBTG",value:"认证不通过"}],ReletedFunctionList:[{key:"BUSINESS",value:"营业执照"},{key:"IDENTITYFM",value:"身份证反面"},{key:"IDENTITYZM",value:"身份证正面"},{key:"LETTER",value:"企业公函"},{key:"RTPC",value:"道路运输许可证"},{key:"NVOCC",value:"NVOCC"}],PrivateList:[{key:"Y",value:"私有"},{key:"N",value:"公有"}],EffectiveList:[{key:"Y",value:"是"},{key:"N",value:"否"}],ChargeTypeList:[{key:"YJFM",value:"月结费目"},{key:"YSDFM",value:"运输单费目"},{key:"ZCDFM",value:"装车单费目"}],PaymentTypeList:[{key:"YJ",value:"月结"},{key:"XJ",value:"现结"},{key:"ZZ",value:"转账"},{key:"YFK",value:"预付款"}],ChargePlanTypeList:[{key:"zcdjf",value:"装车单计费"},{key:"ckddjf",value:"出库订单计费"}],RpTypeList:[{key:"ar",value:"应收"},{key:"ap",value:"应付"},{key:"dd",value:"代收代付"},{key:"ds",value:"代收"},{key:"df",value:"代付"},{key:"sf",value:"收和付"}],AuthTemplateList:[{key:"BUSINESS",value:"营业执照"},{key:"IDENTITY",value:"身份证"},{key:"LETTER",value:"企业公函"},{key:"RTPC",value:"道路运输许可证"},{key:"NVOCC",value:"nvocc"}],IsSigns:[{key:"Y",value:"已签约"},{key:"N",value:"未签约"}]};t.a=u},oMlS:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("JsM0");var u=a("1+AF"),r=(a("jsdL"),{name:"SafetyDoc",extends:u.a,components:{},data:function(){return{}},methods:{}}),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"FilePreview"},[t("img",{attrs:{src:a("Ugjb"),alt:""}})])}]};var n=a("VU/8")(r,l,!1,function(e){a("YEdX")},"data-v-51b2454e",null);t.default=n.exports}});