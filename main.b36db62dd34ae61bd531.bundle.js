webpackJsonp([1,4],{"/fcW":function(l,n){function t(l){throw new Error("Cannot find module '"+l+"'.")}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="/fcW"},0:function(l,n,t){l.exports=t("x35b")},"1A80":function(l,n,t){"use strict";function u(l){return r._24(0,[(l()(),r._25(0,null,null,22,"div",[["class","wrapper"]],null,null,null,null,null)),(l()(),r._26(null,["\n  "])),(l()(),r._25(0,null,null,10,"div",[["class","left-outer"]],null,null,null,null,null)),(l()(),r._26(null,["\n    "])),(l()(),r._25(0,null,null,7,"div",[["class","left"]],null,null,null,null,null)),(l()(),r._26(null,["\n      "])),(l()(),r._25(0,null,null,1,"app-header",[],null,null,null,_.a,_.b)),r._27(24576,null,0,o.a,[],null,null),(l()(),r._26(null,["\n      "])),(l()(),r._25(0,null,null,1,"app-docs",[],null,null,null,s.a,s.b)),r._27(548864,null,0,a.a,[],null,null),(l()(),r._26(null,["\n    "])),(l()(),r._26(null,["\n  "])),(l()(),r._26(null,["\n\n  "])),(l()(),r._25(0,null,null,7,"div",[["class","right-outer"]],[[2,"dark",null]],null,null,null,null)),(l()(),r._26(null,["\n    "])),(l()(),r._25(0,null,null,4,"div",[["class","right"]],null,null,null,null,null)),(l()(),r._26(null,["\n\n      "])),(l()(),r._25(0,null,null,1,"app-preview",[],null,null,null,c.a,c.b)),r._27(24576,null,0,h.a,[p.a],null,null),(l()(),r._26(null,["\n\n    "])),(l()(),r._26(null,["\n  "])),(l()(),r._26(null,["\n"])),(l()(),r._26(null,["\n"]))],null,function(l,n){var t=n.component,u=t.appState.get("themeSwitcher");l(n,14,0,u)})}function e(l){return r._24(0,[(l()(),r._25(0,null,null,1,"app-root",[],null,null,null,u,g)),r._27(24576,null,0,f.a,[p.a],null,null)],null,null)}var i=t("l0Vc"),r=t("3j3K"),_=t("r8N4"),o=t("3avZ"),s=t("hh9M"),a=t("rIcD"),c=t("78ck"),h=t("d7eA"),p=t("H9mM"),f=t("YWx4");t.d(n,"a",function(){return m});var d=[i.a],g=r._23({encapsulation:0,styles:d,data:{}}),m=r._28("app-root",f.a,e,{},{},[])},"3QDV":function(l,n,t){"use strict";(function(l){var u=t("3j3K"),e=t("KVAh");t.d(n,"a",function(){return i});var i=function(){function n(l,n,t){this.renderer=l,this.el=n,this.dService=t,this.comment=new u.R}return n.prototype.ngOnChanges=function(l){if(this.dService.disqus){var n=l.identifier,t=l.url,u=l.categoryId,e=l.title,i=l.language,r=!1;n&&n.currentValue!==n.previousValue&&(r=!0),t&&t.currentValue!==t.previousValue&&(r=!0),u&&u.currentValue!==u.previousValue&&(r=!0),e&&e.currentValue!==e.previousValue&&(r=!0),i&&i.currentValue!==i.previousValue&&(r=!0),r&&this.reset()}else this.addDisqusScript()},n.prototype.addDisqusScript=function(){this.dService.disqusConfig=this.getConfig();var l=this.renderer.createElement("script");l.src="//"+this.shortname+".disqus.com/embed.js",l.async=!0,l.type="text/javascript",this.renderer.setAttribute(l,"data-timestamp",(new Date).getTime().toString()),this.renderer.appendChild(this.el.nativeElement,l)},n.prototype.reset=function(){this.dService.disqus.reset({reload:!0,config:this.getConfig()})},n.prototype.getConfig=function(){var l=this;return function(){this.page.identifier=l.identifier,this.page.url=l.dService.validateUrl(l.url),this.page.title=l.title,this.category_id=l.categoryId,this.language=l.language,this.callbacks.onNewComment=[function(n){l.comment.emit(n)}]}},n.prototype.ngOnDestroy=function(){this.dService.window?(this.dService.window.DISQUS=void 0,this.dService.window.disqusConfig=void 0):(l.DISQUS=void 0,l.disqusConfig=void 0)},n.ctorParameters=function(){return[{type:u._32},{type:u.L},{type:e.a}]},n}()}).call(n,t("DuR2"))},"3avZ":function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=function(){function l(){}return l}()},"78ck":function(l,n,t){"use strict";function u(l){return i._24(0,[(l()(),i._25(0,null,null,44,"div",[["class","preview"]],null,null,null,null,null)),(l()(),i._26(null,["\n  "])),(l()(),i._25(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),i._26(null,["Preview"])),(l()(),i._26(null,["\n  "])),(l()(),i._25(0,null,null,7,"div",[["class","preview-header"]],null,null,null,null,null)),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,1,"div",[["class","preview-img"]],[[4,"backgroundImage",null]],null,null,null,null)),(l()(),i._26(null,["\n    "])),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),i._26(null,["",""])),(l()(),i._26(null,["\n  "])),(l()(),i._26(null,["\n  "])),(l()(),i._25(0,null,null,23,"nav",[],null,null,null,null,null)),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,9,"a",[["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;if("click"===n){var e=i._29(l,17).onClick(t.button,t.ctrlKey,t.metaKey)!==!1;u=e&&u}return u},null,null)),i._27(335872,[[2,4]],0,r.y,[r.j,r.v,_.f],{routerLink:[0,"routerLink"]},null),i._30(1),i._27(860160,null,2,r.z,[r.j,i.L,i.K,i.P],{routerLinkActive:[0,"routerLinkActive"]},null),i._31(301989888,1,{links:1}),i._31(301989888,2,{linksWithHrefs:1}),(l()(),i._26(null,["\n      "])),(l()(),i._25(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._26(null,["Light theme"])),(l()(),i._26(null,["\n    "])),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,9,"a",[["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;if("click"===n){var e=i._29(l,28).onClick(t.button,t.ctrlKey,t.metaKey)!==!1;u=e&&u}return u},null,null)),i._27(335872,[[4,4]],0,r.y,[r.j,r.v,_.f],{routerLink:[0,"routerLink"]},null),i._30(1),i._27(860160,null,2,r.z,[r.j,i.L,i.K,i.P],{routerLinkActive:[0,"routerLinkActive"]},null),i._31(301989888,3,{links:1}),i._31(301989888,4,{linksWithHrefs:1}),(l()(),i._26(null,["\n      "])),(l()(),i._25(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._26(null,["Dark theme"])),(l()(),i._26(null,["\n    "])),(l()(),i._26(null,["\n  "])),(l()(),i._26(null,["\n\n  "])),(l()(),i._25(0,null,null,4,"main",[],null,null,null,null,null)),(l()(),i._26(null,["\n    "])),(l()(),i._25(8388608,null,null,1,"router-outlet",[],null,null,null,null,null)),i._27(73728,null,0,r.A,[r.l,i.T,i.U,[8,null]],null,null),(l()(),i._26(null,["\n  "])),(l()(),i._26(null,["\n\n"])),(l()(),i._26(null,["\n"]))],function(l,n){var t=l(n,18,0,"./");l(n,17,0,t);var u="active";l(n,19,0,u);var e=l(n,29,0,"./dark");l(n,28,0,e);var i="active";l(n,30,0,i)},function(l,n){var t=n.component,u="url("+t.appState.get("themeCover")+")";l(n,7,0,u);var e=t.appState.get("themeName");l(n,11,0,e);var r=i._29(n,17).target,_=i._29(n,17).href;l(n,16,0,r,_);var o=i._29(n,28).target,s=i._29(n,28).href;l(n,27,0,o,s)})}function e(l){return i._24(0,[(l()(),i._25(0,null,null,1,"app-preview",[],null,null,null,u,c)),i._27(24576,null,0,o.a,[s.a],null,null)],null,null)}var i=t("3j3K"),r=t("5oXY"),_=t("2Je8"),o=t("d7eA"),s=t("H9mM");t.d(n,"b",function(){return c}),n.a=u;var a=[],c=i._23({encapsulation:2,styles:a,data:{}});i._28("app-preview",o.a,e,{},{},[])},Aszi:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=function(){function l(){}return l}()},BPEq:function(l,n,t){"use strict";function u(l){return i._24(0,[(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,1,"disqus",[],null,[[null,"comment"]],function(l,n,t){var u=!0,e=l.component;if("comment"===n){var i=e.display(t)!==!1;u=i&&u}return u},_.a,_.b)),i._27(352256,null,0,o.a,[i._32,i.L,s.a],{shortname:[0,"shortname"],identifier:[1,"identifier"],title:[2,"title"]},{comment:"comment"})],function(l,n){var t=n.component,u=t.shortname,e=t.identifier,i=t.title;l(n,2,0,u,e,i)},null)}function e(l){return i._24(0,[(l()(),i._25(0,null,null,1,"app-dark",[],null,null,null,u,h)),i._27(24576,null,0,r.a,[a.a],null,null)],null,null)}var i=t("3j3K"),r=t("tFXp"),_=t("woHO"),o=t("3QDV"),s=t("KVAh"),a=t("H9mM");t.d(n,"a",function(){return p});var c=[],h=i._23({encapsulation:2,styles:c,data:{}}),p=i._28("app-dark",r.a,e,{},{},[])},H9mM:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=function(){function l(){this._state={}}return Object.defineProperty(l.prototype,"state",{get:function(){return this._state=this._clone(this._state)},set:function(l){throw new Error("do not mutate the `.state` directly")},enumerable:!0,configurable:!0}),l.prototype.get=function(l){var n=this.state;return n.hasOwnProperty(l)?n[l]:n},l.prototype.set=function(l,n){return this._state[l]=n},l.prototype._clone=function(l){return JSON.parse(JSON.stringify(l))},l.ctorParameters=function(){return[]},l}()},HSRa:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=function(){function l(){}return l}()},Iksp:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=function(){function l(){}return l}()},KVAh:function(l,n,t){"use strict";(function(l){t.d(n,"a",function(){return e});var u=function(){return"undefined"!=typeof window?window:void 0},e=function(){function n(){this.window=u()}return Object.defineProperty(n.prototype,"url",{get:function(){return this.window?this.window.location.href:l.url||""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disqus",{get:function(){return this.window?this.window.DISQUS:l.DISQUS},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disqusConfig",{get:function(){return this.window?this.window.disqus_config:l.disqus_config},set:function(n){this.window?this.window.disqus_config=n:l.disqus_config=n},enumerable:!0,configurable:!0}),n.prototype.validateUrl=function(l){if(l){var n=/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;if(n.test(l))return l;console.warn("[Disqus]: Invalid URL, fallback to Window URL")}return this.url},n.ctorParameters=function(){return[]},n}()}).call(n,t("DuR2"))},YWx4:function(l,n,t){"use strict";var u=t("H9mM");t.d(n,"a",function(){return e});var e=function(){function l(l){this.appState=l}return l.ctorParameters=function(){return[{type:u.a}]},l}()},d7eA:function(l,n,t){"use strict";var u=t("H9mM");t.d(n,"a",function(){return e});var e=function(){function l(l){this.appState=l}return l.ctorParameters=function(){return[{type:u.a}]},l}()},gQNh:function(l,n,t){"use strict";function u(l){return i._24(0,[(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,1,"disqus",[],null,[[null,"comment"]],function(l,n,t){var u=!0,e=l.component;if("comment"===n){var i=e.display(t)!==!1;u=i&&u}return u},_.a,_.b)),i._27(352256,null,0,o.a,[i._32,i.L,s.a],{shortname:[0,"shortname"],identifier:[1,"identifier"],title:[2,"title"]},{comment:"comment"}),(l()(),i._26(null,["\n  "]))],function(l,n){var t=n.component,u=t.shortname,e=t.identifier,i=t.title;l(n,2,0,u,e,i)},null)}function e(l){return i._24(0,[(l()(),i._25(0,null,null,1,"app-light",[],null,null,null,u,h)),i._27(24576,null,0,r.a,[a.a],null,null)],null,null)}var i=t("3j3K"),r=t("ilIL"),_=t("woHO"),o=t("3QDV"),s=t("KVAh"),a=t("H9mM");t.d(n,"a",function(){return p});var c=[],h=i._23({encapsulation:2,styles:c,data:{}}),p=i._28("app-light",r.a,e,{},{},[])},hh9M:function(l,n,t){"use strict";function u(l){return i._24(0,[(l()(),i._25(0,null,null,130,"div",[["class","docs container"]],null,null,null,null,null)),(l()(),i._26(null,["\n\n  "])),(l()(),i._25(0,null,null,28,"section",[],null,null,null,null,null)),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,4,"p",[["class","subtitle"]],null,null,null,null,null)),(l()(),i._26(null,["\n      Add "])),(l()(),i._25(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i._26(null,["Disqus"])),(l()(),i._26(null,[" to your 🆖 app instantly\n    "])),(l()(),i._26(null,["\n\n    "])),(l()(),i._25(0,null,null,19,"div",[["class","badges"]],null,null,null,null,null)),(l()(),i._26(null,["\n      "])),(l()(),i._26(null,["\n      "])),(l()(),i._25(0,null,null,0,"iframe",[["frameborder","0"],["height","20px"],["scrolling","0"],["src","https://ghbtns.com/github-btn.html?user=murhafsousli&repo=ng2-disqus&type=star&count=true&size=small"],["width","80px"]],null,null,null,null,null)),(l()(),i._26(null,["\n      "])),(l()(),i._25(0,null,null,3,"a",[["href","https://www.npmjs.com/package/ng2-awesome-disqus"]],null,null,null,null,null)),(l()(),i._26(null,["\n        "])),(l()(),i._25(0,null,null,0,"img",[["_ngcontent-fau-2",""],["data-canonical-src","https://www.npmjs.com/package/ng2-awesome-disqus"],["src","https://img.shields.io/npm/v/ng2-awesome-disqus.svg?maxAge=2592000?style=plastic"]],null,null,null,null,null)),(l()(),i._26(null,["\n      "])),(l()(),i._26(null,["\n      "])),(l()(),i._25(0,null,null,3,"a",[["href","https://www.npmjs.com/package/ng2-awesome-disqus"]],null,null,null,null,null)),(l()(),i._26(null,["\n        "])),(l()(),i._25(0,null,null,0,"img",[["_ngcontent-fau-2",""],["data-canonical-src","https://travis-ci.org/MurhafSousli/ng2-disqus"],["src","https://travis-ci.org/MurhafSousli/ng2-disqus.svg?branch=master"]],null,null,null,null,null)),(l()(),i._26(null,["\n      "])),(l()(),i._26(null,["\n      "])),(l()(),i._25(0,null,null,3,"a",[["href","https://www.npmjs.com/package/ng2-awesome-disqus"]],null,null,null,null,null)),(l()(),i._26(null,["\n        "])),(l()(),i._25(0,null,null,0,"img",[["_ngcontent-fau-2",""],["data-canonical-src","https://www.npmjs.com/package/ng2-awesome-disqus"],["src","https://img.shields.io/npm/dt/ng2-awesome-disqus.svg?maxAge=2592000?style=plastic"]],null,null,null,null,null)),(l()(),i._26(null,["\n      "])),(l()(),i._26(null,["\n    "])),(l()(),i._26(null,["\n  "])),(l()(),i._26(null,["\n\n  "])),(l()(),i._25(0,null,null,11,"section",[],null,null,null,null,null)),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),i._26(null,["Installation"])),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._26(null,["Install it with npm"])),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),i._25(0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(l()(),i._26(null,["$ npm install ng2-awesome-disqus --save"])),(l()(),i._26(null,["\n  "])),(l()(),i._26(null,["\n\n  "])),(l()(),i._25(0,null,null,27,"section",[],null,null,null,null,null)),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),i._26(null,["Basic usage"])),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,10,"p",[],null,null,null,null,null)),(l()(),i._26(null,["Add "])),(l()(),i._25(0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(l()(),i._26(null,["DisqusModule"])),(l()(),i._26(null,[" to "])),(l()(),i._25(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i._26(null,["NgModule"])),(l()(),i._26(null,[" "])),(l()(),i._25(0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(l()(),i._26(null,["imports"])),(l()(),i._26(null,["      array."])),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),i._25(0,null,null,1,"code",[["class","language-html"]],null,null,null,null,null)),(l()(),i._26(null,["",""])),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._26(null,["In your template"])),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),i._25(0,null,null,1,"code",[["class","language-html"]],null,null,null,null,null)),(l()(),i._26(null,["",""])),(l()(),i._26(null,["\n  "])),(l()(),i._26(null,["\n\n  "])),(l()(),i._25(0,null,null,23,"section",[],null,null,null,null,null)),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),i._26(null,["Advanced usage"])),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),i._26(null,["See Disqus official documentation ("])),(l()(),i._25(0,null,null,1,"a",[["href","https://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables"]],null,null,null,null,null)),(l()(),i._26(null,["JavaScript\n      configuration variables"])),(l()(),i._26(null,[") before using these inputs."])),(l()(),i._26(null,["\n\n    "])),(l()(),i._25(0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),i._25(0,null,null,1,"code",[["class","language-html"]],null,null,null,null,null)),(l()(),i._26(null,["",""])),(l()(),i._26(null,["\n\n    "])),(l()(),i._25(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),i._26(null,["Use the output "])),(l()(),i._25(0,null,null,1,"code",[["class","language-markup"]],null,null,null,null,null)),(l()(),i._26(null,["(comment)"])),(l()(),i._26(null,[" to get responses for the new comments posted by users."])),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._26(null,["Disqus will automatically reload when any of these inputs changed."])),(l()(),i._26(null,["\n  "])),(l()(),i._26(null,["\n\n\n  "])),(l()(),i._25(0,null,null,19,"section",[],null,null,null,null,null)),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),i._26(null,["Author"])),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,2,"a",[["href","http://murhafsousli.com"]],null,null,null,null,null)),(l()(),i._25(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i._26(null,["Murhaf Sousli"])),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,9,"ul",[],null,null,null,null,null)),(l()(),i._26(null,["\n      "])),(l()(),i._25(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),i._25(0,null,null,1,"a",[["href","https://github.com/MurhafSousli"]],null,null,null,null,null)),(l()(),i._26(null,["github/murhafsousli"])),(l()(),i._26(null,["\n      "])),(l()(),i._25(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),i._25(0,null,null,1,"a",[["href","https://twitter.com/MurhafSousli"]],null,null,null,null,null)),(l()(),i._26(null,["twitter/murhafsousli"])),(l()(),i._26(null,["\n    "])),(l()(),i._26(null,["\n  "])),(l()(),i._26(null,["\n\n  "])),(l()(),i._25(0,null,null,9,"section",[],null,null,null,null,null)),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),i._26(null,["License"])),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),i._25(0,null,null,1,"a",[["href","https://github.com/MurhafSousli/ng2-disqus/blob/master/LICENSE"]],null,null,null,null,null)),(l()(),i._25(0,null,null,0,"img",[["alt","npm"],["data-canonical-src","https://img.shields.io/npm/l/express.svg?maxAge=2592000"],["src","https://camo.githubusercontent.com/25d313ccfafb08618b31899a22af11a5b8a79aad/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f657870726573732e7376673f6d61784167653d32353932303030"],["style","max-width:100%;"]],null,null,null,null,null)),(l()(),i._26(null,["\n"])),(l()(),i._26(null,["\n"])),(l()(),i._26(null,["\n"])),(l()(),i._26(null,["\n"]))],null,function(l,n){var t=n.component,u=t.importing;l(n,64,0,u);var e=t.usage;l(n,71,0,e);var i=t.advancedUsage;l(n,87,0,i)})}function e(l){return i._24(0,[(l()(),i._25(0,null,null,1,"app-docs",[],null,null,null,u,o)),i._27(548864,null,0,r.a,[],null,null)],null,null)}var i=t("3j3K"),r=t("rIcD");t.d(n,"b",function(){return o}),n.a=u;var _=[],o=i._23({encapsulation:2,styles:_,data:{}});i._28("app-docs",r.a,e,{},{},[])},ilIL:function(l,n,t){"use strict";var u=t("H9mM");t.d(n,"a",function(){return e});var e=function(){function l(l){this.shortname="ng2",this.identifier="light",this.title="Light Theme",l.set("themeSwitcher",!1),l.set("themeName","Light Theme"),l.set("themeCover","assets/img/light.png")}return l.prototype.display=function(l){console.log("It works 😎 \n"+JSON.stringify(l))},l.ctorParameters=function(){return[{type:u.a}]},l}()},kZql:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u={production:!0}},kke6:function(l,n,t){"use strict";var u=t("3j3K"),e=t("Iksp"),i=t("2Je8"),r=t("5oXY"),_=t("Qbdm"),o=t("NVOs"),s=t("Fzro"),a=t("Aszi"),c=t("KVAh"),h=t("H9mM"),p=t("gQNh"),f=t("BPEq"),d=t("rwVy"),g=t("1A80"),m=t("ilIL"),y=t("tFXp"),b=t("HSRa");t.d(n,"a",function(){return w});var v=this&&this.__extends||function(){var l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var t in n)n.hasOwnProperty(t)&&(l[t]=n[t])};return function(n,t){function u(){this.constructor=n}l(n,t),n.prototype=null===t?Object.create(t):(u.prototype=t.prototype,new u)}}(),S=function(l){function n(n){return l.call(this,n,[p.a,f.a,d.a,g.a],[g.a])||this}return v(n,l),Object.defineProperty(n.prototype,"_LOCALE_ID_26",{get:function(){return null==this.__LOCALE_ID_26&&(this.__LOCALE_ID_26=u.b(this.parent.get(u.c,null))),this.__LOCALE_ID_26},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_NgLocalization_27",{get:function(){return null==this.__NgLocalization_27&&(this.__NgLocalization_27=new i.a(this._LOCALE_ID_26)),this.__NgLocalization_27},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_APP_ID_28",{get:function(){return null==this.__APP_ID_28&&(this.__APP_ID_28=u.d()),this.__APP_ID_28},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_IterableDiffers_29",{get:function(){return null==this.__IterableDiffers_29&&(this.__IterableDiffers_29=u.e()),this.__IterableDiffers_29},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_KeyValueDiffers_30",{get:function(){return null==this.__KeyValueDiffers_30&&(this.__KeyValueDiffers_30=u.f()),this.__KeyValueDiffers_30},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_DomSanitizer_31",{get:function(){return null==this.__DomSanitizer_31&&(this.__DomSanitizer_31=new _.b(this.parent.get(_.c))),this.__DomSanitizer_31},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Sanitizer_32",{get:function(){return null==this.__Sanitizer_32&&(this.__Sanitizer_32=this._DomSanitizer_31),this.__Sanitizer_32},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_HAMMER_GESTURE_CONFIG_33",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_33&&(this.__HAMMER_GESTURE_CONFIG_33=new _.d),this.__HAMMER_GESTURE_CONFIG_33},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EVENT_MANAGER_PLUGINS_34",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_34&&(this.__EVENT_MANAGER_PLUGINS_34=[new _.e(this.parent.get(_.c)),new _.f(this.parent.get(_.c)),new _.g(this.parent.get(_.c),this._HAMMER_GESTURE_CONFIG_33)]),this.__EVENT_MANAGER_PLUGINS_34},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EventManager_35",{get:function(){return null==this.__EventManager_35&&(this.__EventManager_35=new _.h(this._EVENT_MANAGER_PLUGINS_34,this.parent.get(u.g))),this.__EventManager_35},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵDomSharedStylesHost_36",{get:function(){return null==this.__ɵDomSharedStylesHost_36&&(this.__ɵDomSharedStylesHost_36=new _.i(this.parent.get(_.c))),this.__ɵDomSharedStylesHost_36},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵDomRendererFactory2_37",{get:function(){return null==this.__ɵDomRendererFactory2_37&&(this.__ɵDomRendererFactory2_37=new _.j(this._EventManager_35,this._ɵDomSharedStylesHost_36)),this.__ɵDomRendererFactory2_37},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RendererFactory2_38",{get:function(){return null==this.__RendererFactory2_38&&(this.__RendererFactory2_38=this._ɵDomRendererFactory2_37),this.__RendererFactory2_38},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵSharedStylesHost_39",{get:function(){return null==this.__ɵSharedStylesHost_39&&(this.__ɵSharedStylesHost_39=this._ɵDomSharedStylesHost_36),this.__ɵSharedStylesHost_39},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Testability_40",{get:function(){return null==this.__Testability_40&&(this.__Testability_40=new u.h(this.parent.get(u.g))),this.__Testability_40},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Meta_41",{get:function(){return null==this.__Meta_41&&(this.__Meta_41=new _.k(this.parent.get(_.c))),this.__Meta_41},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Title_42",{get:function(){return null==this.__Title_42&&(this.__Title_42=new _.l(this.parent.get(_.c))),this.__Title_42},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_43",{get:function(){return null==this.__ɵi_43&&(this.__ɵi_43=new o.a),this.__ɵi_43},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_BrowserXhr_44",{get:function(){return null==this.__BrowserXhr_44&&(this.__BrowserXhr_44=new s.a),this.__BrowserXhr_44},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ResponseOptions_45",{get:function(){return null==this.__ResponseOptions_45&&(this.__ResponseOptions_45=new s.b),this.__ResponseOptions_45},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_XSRFStrategy_46",{get:function(){return null==this.__XSRFStrategy_46&&(this.__XSRFStrategy_46=s.c()),this.__XSRFStrategy_46},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_XHRBackend_47",{get:function(){return null==this.__XHRBackend_47&&(this.__XHRBackend_47=new s.d(this._BrowserXhr_44,this._ResponseOptions_45,this._XSRFStrategy_46)),this.__XHRBackend_47},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RequestOptions_48",{get:function(){return null==this.__RequestOptions_48&&(this.__RequestOptions_48=new s.e),this.__RequestOptions_48},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Http_49",{get:function(){return null==this.__Http_49&&(this.__Http_49=s.f(this._XHRBackend_47,this._RequestOptions_48)),this.__Http_49},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_DisqusService_50",{get:function(){return null==this.__DisqusService_50&&(this.__DisqusService_50=new c.a),this.__DisqusService_50},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ActivatedRoute_51",{get:function(){return null==this.__ActivatedRoute_51&&(this.__ActivatedRoute_51=r.a(this._Router_22)),this.__ActivatedRoute_51},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_NoPreloading_52",{get:function(){return null==this.__NoPreloading_52&&(this.__NoPreloading_52=new r.b),this.__NoPreloading_52},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_PreloadingStrategy_53",{get:function(){return null==this.__PreloadingStrategy_53&&(this.__PreloadingStrategy_53=this._NoPreloading_52),this.__PreloadingStrategy_53},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RouterPreloader_54",{get:function(){return null==this.__RouterPreloader_54&&(this.__RouterPreloader_54=new r.c(this._Router_22,this._NgModuleFactoryLoader_20,this._Compiler_19,this,this._PreloadingStrategy_53)),this.__RouterPreloader_54},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_PreloadAllModules_55",{get:function(){return null==this.__PreloadAllModules_55&&(this.__PreloadAllModules_55=new r.d),this.__PreloadAllModules_55},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ROUTER_INITIALIZER_56",{get:function(){return null==this.__ROUTER_INITIALIZER_56&&(this.__ROUTER_INITIALIZER_56=r.e(this._ɵg_3)),this.__ROUTER_INITIALIZER_56},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_APP_BOOTSTRAP_LISTENER_57",{get:function(){return null==this.__APP_BOOTSTRAP_LISTENER_57&&(this.__APP_BOOTSTRAP_LISTENER_57=[this._ROUTER_INITIALIZER_56]),this.__APP_BOOTSTRAP_LISTENER_57},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_AppState_58",{get:function(){return null==this.__AppState_58&&(this.__AppState_58=new h.a),this.__AppState_58},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new i.b,this._ErrorHandler_1=_.m(),this._NgProbeToken_2=[r.f()],this._ɵg_3=new r.g(this),this._APP_INITIALIZER_4=[u.i,_.n(this.parent.get(_.o,null),this._NgProbeToken_2),r.h(this._ɵg_3)],this._ApplicationInitStatus_5=new u.j(this._APP_INITIALIZER_4),this._ɵf_6=new u.k(this.parent.get(u.g),this.parent.get(u.l),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_5),this._ApplicationRef_7=this._ɵf_6,this._ApplicationModule_8=new u.m(this._ApplicationRef_7),this._BrowserModule_9=new _.p(this.parent.get(_.p,null)),this._ɵba_10=new o.b,this._FormsModule_11=new o.c,this._HttpModule_12=new s.g,this._ɵa_13=r.i(this.parent.get(r.j,null)),this._UrlSerializer_14=new r.k,this._RouterOutletMap_15=new r.l,this._ROUTER_CONFIGURATION_16={},this._LocationStrategy_17=r.m(this.parent.get(i.c),this.parent.get(i.d,null),this._ROUTER_CONFIGURATION_16),this._Location_18=new i.e(this._LocationStrategy_17),this._Compiler_19=new u.n,this._NgModuleFactoryLoader_20=new u.o(this._Compiler_19,this.parent.get(u.p,null)),this._ROUTES_21=[[{path:"",component:m.a},{path:"light",component:m.a},{path:"dark",component:y.a},{path:"**",component:b.a}]],this._Router_22=r.n(this._ApplicationRef_7,this._UrlSerializer_14,this._RouterOutletMap_15,this._Location_18,this,this._NgModuleFactoryLoader_20,this._Compiler_19,this._ROUTES_21,this._ROUTER_CONFIGURATION_16,this.parent.get(r.o,null),this.parent.get(r.p,null)),this._RouterModule_23=new r.q(this._ɵa_13,this._Router_22),this._DisqusModule_24=new a.a,this._AppModule_25=new e.a,this._AppModule_25},n.prototype.getInternal=function(l,n){return l===i.b?this._CommonModule_0:l===u.q?this._ErrorHandler_1:l===u.r?this._NgProbeToken_2:l===r.g?this._ɵg_3:l===u.s?this._APP_INITIALIZER_4:l===u.j?this._ApplicationInitStatus_5:l===u.k?this._ɵf_6:l===u.t?this._ApplicationRef_7:l===u.m?this._ApplicationModule_8:l===_.p?this._BrowserModule_9:l===o.b?this._ɵba_10:l===o.c?this._FormsModule_11:l===s.g?this._HttpModule_12:l===r.r?this._ɵa_13:l===r.s?this._UrlSerializer_14:l===r.l?this._RouterOutletMap_15:l===r.t?this._ROUTER_CONFIGURATION_16:l===i.f?this._LocationStrategy_17:l===i.e?this._Location_18:l===u.n?this._Compiler_19:l===u.u?this._NgModuleFactoryLoader_20:l===r.u?this._ROUTES_21:l===r.j?this._Router_22:l===r.q?this._RouterModule_23:l===a.a?this._DisqusModule_24:l===e.a?this._AppModule_25:l===u.c?this._LOCALE_ID_26:l===i.g?this._NgLocalization_27:l===u.v?this._APP_ID_28:l===u.w?this._IterableDiffers_29:l===u.x?this._KeyValueDiffers_30:l===_.q?this._DomSanitizer_31:l===u.y?this._Sanitizer_32:l===_.r?this._HAMMER_GESTURE_CONFIG_33:l===_.s?this._EVENT_MANAGER_PLUGINS_34:l===_.h?this._EventManager_35:l===_.i?this._ɵDomSharedStylesHost_36:l===_.j?this._ɵDomRendererFactory2_37:l===u.z?this._RendererFactory2_38:l===_.t?this._ɵSharedStylesHost_39:l===u.h?this._Testability_40:l===_.k?this._Meta_41:l===_.l?this._Title_42:l===o.a?this._ɵi_43:l===s.a?this._BrowserXhr_44:l===s.h?this._ResponseOptions_45:l===s.i?this._XSRFStrategy_46:l===s.d?this._XHRBackend_47:l===s.j?this._RequestOptions_48:l===s.k?this._Http_49:l===c.a?this._DisqusService_50:l===r.v?this._ActivatedRoute_51:l===r.b?this._NoPreloading_52:l===r.w?this._PreloadingStrategy_53:l===r.c?this._RouterPreloader_54:l===r.d?this._PreloadAllModules_55:l===r.x?this._ROUTER_INITIALIZER_56:l===u.A?this._APP_BOOTSTRAP_LISTENER_57:l===h.a?this._AppState_58:n},n.prototype.destroyInternal=function(){this._ɵf_6.ngOnDestroy(),this.__ɵDomSharedStylesHost_36&&this._ɵDomSharedStylesHost_36.ngOnDestroy(),this.__RouterPreloader_54&&this._RouterPreloader_54.ngOnDestroy()},n}(u.B),w=new u.C(S,e.a)},l0Vc:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=[""]},r8N4:function(l,n,t){"use strict";function u(l){return i._24(0,[(l()(),i._25(0,null,null,14,"div",[["class","header container"]],null,null,null,null,null)),(l()(),i._26(null,["\n  "])),(l()(),i._25(0,null,null,3,"div",[["class","cover"]],null,null,null,null,null)),(l()(),i._26(null,["\n    "])),(l()(),i._25(0,null,null,0,"img",[["src","https://cdn.rawgit.com/MurhafSousli/ng2-disqus/master/assets/logo.svg"]],null,null,null,null,null)),(l()(),i._26(null,["\n  "])),(l()(),i._26(null,["\n  "])),(l()(),i._25(0,null,null,6,"div",[["class","title"]],null,null,null,null,null)),(l()(),
i._26(null,["\n    "])),(l()(),i._25(0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),i._25(0,null,null,1,"span",[["class","red"]],null,null,null,null,null)),(l()(),i._26(null,["Angular "])),(l()(),i._26(null,[" Disqus Module"])),(l()(),i._26(null,["\n  "])),(l()(),i._26(null,["\n"])),(l()(),i._26(null,["\n\n"])),(l()(),i._25(0,null,null,3,"a",[["href","https://github.com/MurhafSousli/ng2-disqus"]],null,null,null,null,null)),(l()(),i._26(null,["\n  "])),(l()(),i._25(0,null,null,0,"img",[["alt","Fork me on GitHub"],["data-canonical-src","https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"],["src","https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"],["style","position: absolute; top: 0; right: 0; border: 0;"]],null,null,null,null,null)),(l()(),i._26(null,["\n"])),(l()(),i._26(null,["\n"]))],null,null)}function e(l){return i._24(0,[(l()(),i._25(0,null,null,1,"app-header",[],null,null,null,u,o)),i._27(24576,null,0,r.a,[],null,null)],null,null)}var i=t("3j3K"),r=t("3avZ");t.d(n,"b",function(){return o}),n.a=u;var _=[],o=i._23({encapsulation:2,styles:_,data:{}});i._28("app-header",r.a,e,{},{},[])},rIcD:function(l,n,t){"use strict";var u=t("OEdS");t.n(u);t.d(n,"a",function(){return e});var e=function(){function l(){this.importing='import {DisqusModule} from "ng2-awesome-disqus";\n@NgModule({\n  imports: [\n    DisqusModule\n  ]\n})',this.usage='<disqus [shortname]="shortname" [identifier]="pageId" ></disqus>',this.advancedUsage='<disqus [shortname]="shortname" [identifier]="pageId" [url]="anyUrl"\n  [categoryId]="catId" [lang]="\'en\'" (comment)="onComment($event)"></disqus>'}return l.prototype.ngAfterContentInit=function(){setTimeout(function(){return Prism.highlightAll()},500)},l.ctorParameters=function(){return[]},l}()},rwVy:function(l,n,t){"use strict";function u(l){return i._24(0,[(l()(),i._25(0,null,null,4,"div",[],null,null,null,null,null)),(l()(),i._26(null,["\n  "])),(l()(),i._25(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),i._26(null,["No such page"])),(l()(),i._26(null,["\n"])),(l()(),i._26(null,["\n"]))],null,null)}function e(l){return i._24(0,[(l()(),i._25(0,null,null,1,"app-nocontent",[],null,null,null,u,o)),i._27(24576,null,0,r.a,[],null,null)],null,null)}var i=t("3j3K"),r=t("HSRa");t.d(n,"a",function(){return s});var _=[],o=i._23({encapsulation:2,styles:_,data:{}}),s=i._28("app-nocontent",r.a,e,{},{},[])},tFXp:function(l,n,t){"use strict";var u=t("H9mM");t.d(n,"a",function(){return e});var e=function(){function l(l){this.shortname="ng2",this.identifier="dark",this.title="Dark Theme",l.set("themeSwitcher",!0),l.set("themeName","Dark Theme"),l.set("themeCover","assets/img/dark.png")}return l.prototype.display=function(l){console.log("It works 🤠 \n"+JSON.stringify(l))},l.ctorParameters=function(){return[{type:u.a}]},l}()},woHO:function(l,n,t){"use strict";function u(l){return i._24(2,[(l()(),i._25(0,null,null,0,"div",[["id","disqus_thread"]],null,null,null,null,null))],null,null)}function e(l){return i._24(0,[(l()(),i._25(0,null,null,1,"disqus",[],null,null,null,u,s)),i._27(352256,null,0,r.a,[i._32,i.L,_.a],null,null)],null,null)}var i=t("3j3K"),r=t("3QDV"),_=t("KVAh");t.d(n,"b",function(){return s}),n.a=u;var o=[],s=i._23({encapsulation:2,styles:o,data:{}});i._28("disqus",r.a,e,{shortname:"shortname",identifier:"identifier",url:"url",categoryId:"categoryId",language:"language",title:"title"},{comment:"comment"},[])},x35b:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=t("3j3K"),e=t("kZql"),i=t("Qbdm"),r=t("kke6");e.a.production&&t.i(u.a)(),t.i(i.a)().bootstrapModuleFactory(r.a)}},[0]);