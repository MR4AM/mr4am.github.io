webpackJsonp([8],{FhoZ:function(e,t,o){"use strict";(function(t){var s=o("o/zv");e.exports={moduleName:"spop",dev:{assetsSubDirectory:"spop/static",assetsPublicPath:"/",proxyTable:{"/spop-web/":{target:"http://test.newmedia.baina.com",changeOrigin:!0,pathRewrite:{"^/spop-web/":"/spop-web/"}}},host:"127.0.0.1",port:8081,autoOpenBrowser:!1,disableHostCheck:!0,errorOverlay:!0,notifyOnErrors:!0,poll:!1,useEslint:!1,showEslintErrorsInOverlay:!1,devtool:"source-map",cacheBusting:!0,cssSourceMap:!0},build:{manage:s.resolve(t,"../dist/spop/manage/manage.html"),login:s.resolve(t,"../dist/spop/login/login.html"),assetsRoot:s.resolve(t,"../dist"),assetsSubDirectory:"spop/static",assetsPublicPath:"./",productionSourceMap:!1,devtool:"#source-map",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report}}}).call(t,"/")},"i/Gk":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("7+uW"),n=o("/ocq"),a=o("FhoZ"),r=o.n(a);s.default.use(n.a);var i=new n.a({mode:"history",base:"/"+r.a.moduleName+"/manage",routes:[{path:"/",name:"Manage",component:function(){return o.e(1).then(o.bind(null,"rfy1"))},meta:{title:"主页"}},{path:"*",name:"NotFound",component:function(){return o.e(0).then(o.bind(null,"csQh"))},meta:{title:"找不到页面"}}]});t.default=i}},["i/Gk"]);