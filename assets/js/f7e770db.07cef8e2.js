"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[3840],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),s=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),k=s(a),c=r,m=k["".concat(g,".").concat(c)]||k[c]||p[c]||l;return a?n.createElement(m,o(o({ref:t},i),{},{components:a})):n.createElement(m,o({ref:t},i))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var u={};for(var g in t)hasOwnProperty.call(t,g)&&(u[g]=t[g]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},12739:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return g},default:function(){return c},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),o=["components"],u={title:"Storage\u5b58\u50a8\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Storage\u5b58\u50a8\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Storage\u5b58\u50a8\u51fd\u6570"]},g=void 0,s={unversionedId:"zh-cn/funcs/storage-api",id:"zh-cn/funcs/storage-api",title:"Storage\u5b58\u50a8\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Storage\u5b58\u50a8\u51fd\u6570",source:"@site/docs/zh-cn/funcs/storage-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/storage-api",permalink:"/docs/zh-cn/funcs/storage-api",draft:!1,tags:[],version:"current",frontMatter:{title:"Storage\u5b58\u50a8\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Storage\u5b58\u50a8\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Storage\u5b58\u50a8\u51fd\u6570"]},sidebar:"docs",previous:{title:"\u6587\u4ef6\u51fd\u6570",permalink:"/docs/zh-cn/funcs/file-api"},next:{title:"\u7f51\u7edc\u51fd\u6570",permalink:"/docs/zh-cn/funcs/http-api"}},i={},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u521b\u5efa\u5b58\u50a8\u5bf9\u8c61",id:"\u521b\u5efa\u5b58\u50a8\u5bf9\u8c61",level:2},{value:"storages.create \u521b\u5efa\u5b58\u50a8",id:"storagescreate-\u521b\u5efa\u5b58\u50a8",level:3},{value:"\u5b58\u50a8\u6570\u636e",id:"\u5b58\u50a8\u6570\u636e",level:2},{value:"storage.keys \u6240\u6709key\u83b7\u53d6",id:"storagekeys-\u6240\u6709key\u83b7\u53d6",level:3},{value:"storage.all \u83b7\u53d6\u6240\u6709\u7684key\u548c\u503c",id:"storageall-\u83b7\u53d6\u6240\u6709\u7684key\u548c\u503c",level:3},{value:"storage.putString \u5b58\u50a8\u5b57\u7b26\u4e32",id:"storageputstring-\u5b58\u50a8\u5b57\u7b26\u4e32",level:3},{value:"storage.putInt \u5b58\u50a8\u6574\u578b\u6570\u636e",id:"storageputint-\u5b58\u50a8\u6574\u578b\u6570\u636e",level:3},{value:"storage.putBoolean \u5b58\u50a8\u5e03\u5c14\u578b\u6570\u636e",id:"storageputboolean-\u5b58\u50a8\u5e03\u5c14\u578b\u6570\u636e",level:3},{value:"storage.putFloat \u5b58\u50a8\u6d6e\u70b9\u578b\u6570\u636e",id:"storageputfloat-\u5b58\u50a8\u6d6e\u70b9\u578b\u6570\u636e",level:3},{value:"storage.putEncrypt \u5b58\u50a8\u5e76\u52a0\u5bc6\u5b57\u7b26\u4e32",id:"storageputencrypt-\u5b58\u50a8\u5e76\u52a0\u5bc6\u5b57\u7b26\u4e32",level:3},{value:"\u83b7\u53d6\u6570\u636e",id:"\u83b7\u53d6\u6570\u636e",level:2},{value:"storage.getString \u83b7\u53d6\u5b57\u7b26\u4e32\u6570\u636e",id:"storagegetstring-\u83b7\u53d6\u5b57\u7b26\u4e32\u6570\u636e",level:3},{value:"storage.getInt \u83b7\u53d6\u6574\u578b\u6570\u636e",id:"storagegetint-\u83b7\u53d6\u6574\u578b\u6570\u636e",level:3},{value:"storage.getBoolean \u83b7\u53d6\u5e03\u5c14\u578b\u6570\u636e",id:"storagegetboolean-\u83b7\u53d6\u5e03\u5c14\u578b\u6570\u636e",level:3},{value:"storage.getFloat \u83b7\u53d6\u6d6e\u70b9\u578b\u6570\u636e",id:"storagegetfloat-\u83b7\u53d6\u6d6e\u70b9\u578b\u6570\u636e",level:3},{value:"storage.getDecryptString \u83b7\u53d6\u89e3\u5bc6\u5b57\u7b26\u4e32",id:"storagegetdecryptstring-\u83b7\u53d6\u89e3\u5bc6\u5b57\u7b26\u4e32",level:3},{value:"\u6e05\u7406\u548c\u5176\u4ed6",id:"\u6e05\u7406\u548c\u5176\u4ed6",level:2},{value:"storage.clear \u6e05\u7a7a\u5b58\u50a8",id:"storageclear-\u6e05\u7a7a\u5b58\u50a8",level:3},{value:"storage.remove \u79fb\u51fakey\u5bf9\u5e94\u7684\u503c",id:"storageremove-\u79fb\u51fakey\u5bf9\u5e94\u7684\u503c",level:3},{value:"storage.contains \u662f\u5426\u5305\u542b\u67d0\u4e2akey",id:"storagecontains-\u662f\u5426\u5305\u542b\u67d0\u4e2akey",level:3}],k={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u5b58\u50a8\u76f8\u5173\u6570\u636e\uff0ckey-value\u7ed3\u6784"),(0,l.kt)("li",{parentName:"ul"},"\u5de5\u5177\u7c7b\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662f storages\uff0c\u4f8b\u5982 storages.create()\u8fd9\u6837\u8c03\u7528")),(0,l.kt)("h2",{id:"\u521b\u5efa\u5b58\u50a8\u5bf9\u8c61"},"\u521b\u5efa\u5b58\u50a8\u5bf9\u8c61"),(0,l.kt)("h3",{id:"storagescreate-\u521b\u5efa\u5b58\u50a8"},"storages.create \u521b\u5efa\u5b58\u50a8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5b58\u50a8\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@param name \u5b58\u50a8\u5bf9\u8c61\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},"@return {StorageApiWrapper} \u5b58\u50a8\u5bf9\u8c61\u5b9e\u4f8b")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    let storage= storages.create("123");\n    logd(storage); \n}\nmain();\n'))),(0,l.kt)("h2",{id:"\u5b58\u50a8\u6570\u636e"},"\u5b58\u50a8\u6570\u636e"),(0,l.kt)("h3",{id:"storagekeys-\u6240\u6709key\u83b7\u53d6"},"storage.keys \u6240\u6709key\u83b7\u53d6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709key\u83b7\u53d6"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.16.0+)"),(0,l.kt)("li",{parentName:"ul"},"@return {string} JSON\u5b57\u7b26\u4e32")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putString("key","sdfasfd");\n logd(r);\n logd(storage.keys());\n}\nmain();\n'))),(0,l.kt)("h3",{id:"storageall-\u83b7\u53d6\u6240\u6709\u7684key\u548c\u503c"},"storage.all \u83b7\u53d6\u6240\u6709\u7684key\u548c\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6240\u6709\u7684key\u548c\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.16.0+)"),(0,l.kt)("li",{parentName:"ul"},"@return {string} JSON\u5b57\u7b26\u4e32")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putString("key","sdfasfd");\n logd(r);\n logd(storage.all());\n}\nmain();\n'))),(0,l.kt)("h3",{id:"storageputstring-\u5b58\u50a8\u5b57\u7b26\u4e32"},"storage.putString \u5b58\u50a8\u5b57\u7b26\u4e32"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5b57\u7b26\u4e32"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,l.kt)("li",{parentName:"ul"},"@param value \u5b57\u7b26\u4e32"),(0,l.kt)("li",{parentName:"ul"},"@return {bool} true\u6210\u529f false \u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putString("key","sdfasfd");\n logd(r);\n //\u83b7\u53d6\u6570\u636e,\u6682\u65f6\u6709bug,\u9700 +""\n logd(storage.getString("key","")+"");\n}\nmain();\n'))),(0,l.kt)("h3",{id:"storageputint-\u5b58\u50a8\u6574\u578b\u6570\u636e"},"storage.putInt \u5b58\u50a8\u6574\u578b\u6570\u636e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6574\u578b\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,l.kt)("li",{parentName:"ul"},"@param value \u6574\u578b\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"@return {bool} true\u6210\u529f false \u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putInt("key",1);\n logd(r);\n //\u83b7\u53d6\u6570\u636e\n logd(storage.getInt("key",0));\n}\nmain();\n'))),(0,l.kt)("h3",{id:"storageputboolean-\u5b58\u50a8\u5e03\u5c14\u578b\u6570\u636e"},"storage.putBoolean \u5b58\u50a8\u5e03\u5c14\u578b\u6570\u636e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5e03\u5c14\u578b\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,l.kt)("li",{parentName:"ul"},"@param value \u5e03\u5c14\u578b\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"@return {bool} true\u6210\u529f false \u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putBoolean("key",true);\n logd(r);\n //\u83b7\u53d6\u6570\u636e\n logd(storage.getBoolean("key",false));\n}\nmain();\n`\n'))),(0,l.kt)("h3",{id:"storageputfloat-\u5b58\u50a8\u6d6e\u70b9\u578b\u6570\u636e"},"storage.putFloat \u5b58\u50a8\u6d6e\u70b9\u578b\u6570\u636e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6d6e\u70b9\u578b\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,l.kt)("li",{parentName:"ul"},"@param value \u6d6e\u70b9\u578b\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"@return {bool} true\u6210\u529f false \u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putFloat("key",1.0);\n logd(r);\n //\u83b7\u53d6\u6570\u636e\n logd(storage.getFloat("key",0));\n}\nmain();\n`\n'))),(0,l.kt)("h3",{id:"storageputencrypt-\u5b58\u50a8\u5e76\u52a0\u5bc6\u5b57\u7b26\u4e32"},"storage.putEncrypt \u5b58\u50a8\u5e76\u52a0\u5bc6\u5b57\u7b26\u4e32"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5e76\u52a0\u5bc6\u5b57\u7b26\u4e32\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,l.kt)("li",{parentName:"ul"},"@param value \u5b57\u7b26\u4e32\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"@return {bool} true\u6210\u529f false \u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putEncrypt("key","3232");\n logd(r);\n //\u83b7\u53d6\u6570\u636e\n logd(storage.getDecryptString("key"));\n}\nmain();\n`\n'))),(0,l.kt)("h2",{id:"\u83b7\u53d6\u6570\u636e"},"\u83b7\u53d6\u6570\u636e"),(0,l.kt)("h3",{id:"storagegetstring-\u83b7\u53d6\u5b57\u7b26\u4e32\u6570\u636e"},"storage.getString \u83b7\u53d6\u5b57\u7b26\u4e32\u6570\u636e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5b57\u7b26\u4e32\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,l.kt)("li",{parentName:"ul"},"@return {string} \u5b57\u7b26\u4e32")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putString("key","sdfasfd");\n logd(r);\n //\u83b7\u53d6\u6570\u636e,\u6682\u65f6\u6709bug,\u9700 +""\n logd(storage.getString("key","")+"");\n}\nmain();\n'))),(0,l.kt)("h3",{id:"storagegetint-\u83b7\u53d6\u6574\u578b\u6570\u636e"},"storage.getInt \u83b7\u53d6\u6574\u578b\u6570\u636e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6574\u578b\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,l.kt)("li",{parentName:"ul"},"@return {string} \u6574\u578b")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putInt("key",1);\n logd(r);\n //\u83b7\u53d6\u6570\u636e\n logd(storage.getInt("key",0));\n}\nmain();\n'))),(0,l.kt)("h3",{id:"storagegetboolean-\u83b7\u53d6\u5e03\u5c14\u578b\u6570\u636e"},"storage.getBoolean \u83b7\u53d6\u5e03\u5c14\u578b\u6570\u636e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5e03\u5c14\u578b\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,l.kt)("li",{parentName:"ul"},"@return {string} \u5e03\u5c14\u578b")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putBoolean("key",true);\n logd(r);\n //\u83b7\u53d6\u6570\u636e\n logd(storage.getBoolean("key",false));\n}\nmain();\n`\n'))),(0,l.kt)("h3",{id:"storagegetfloat-\u83b7\u53d6\u6d6e\u70b9\u578b\u6570\u636e"},"storage.getFloat \u83b7\u53d6\u6d6e\u70b9\u578b\u6570\u636e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6d6e\u70b9\u578b\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,l.kt)("li",{parentName:"ul"},"@return {string} \u6d6e\u70b9\u578b")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putFloat("key",1.0);\n logd(r);\n //\u83b7\u53d6\u6570\u636e\n logd(storage.getFloat("key",0));\n}\nmain();\n`\n'))),(0,l.kt)("h3",{id:"storagegetdecryptstring-\u83b7\u53d6\u89e3\u5bc6\u5b57\u7b26\u4e32"},"storage.getDecryptString \u83b7\u53d6\u89e3\u5bc6\u5b57\u7b26\u4e32"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u89e3\u5bc6\u5b57\u7b26\u4e32\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,l.kt)("li",{parentName:"ul"},"@return {string} \u89e3\u5bc6\u540e\u7684\u5b57\u7b26\u4e32")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putEncrypt("key","3232");\n logd(r);\n //\u83b7\u53d6\u6570\u636e\n logd(storage.getDecryptString("key"));\n}\nmain();\n`\n'))),(0,l.kt)("h2",{id:"\u6e05\u7406\u548c\u5176\u4ed6"},"\u6e05\u7406\u548c\u5176\u4ed6"),(0,l.kt)("h3",{id:"storageclear-\u6e05\u7a7a\u5b58\u50a8"},"storage.clear \u6e05\u7a7a\u5b58\u50a8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e05\u7a7a\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@return {bool} true\u6210\u529f false \u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putEncrypt("key","3232");\n logd(r);\n //\u83b7\u53d6\u6570\u636e\n logd(storage.getDecryptString("key"));\n logd(storage.clear());\n logd(storage.getDecryptString("key"));\n}\nmain();\n`\n'))),(0,l.kt)("h3",{id:"storageremove-\u79fb\u51fakey\u5bf9\u5e94\u7684\u503c"},"storage.remove \u79fb\u51fakey\u5bf9\u5e94\u7684\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u79fb\u51fakey\u5bf9\u5e94\u7684\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@return {bool} true\u6210\u529f false \u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putEncrypt("key","3232");\n logd(r);\n //\u83b7\u53d6\u6570\u636e\n logd(storage.getDecryptString("key"));\n logd(storage.remove("key"));\n  logd(storage.getDecryptString("key"));\nmain();\n`\n'))),(0,l.kt)("h3",{id:"storagecontains-\u662f\u5426\u5305\u542b\u67d0\u4e2akey"},"storage.contains \u662f\u5426\u5305\u542b\u67d0\u4e2akey"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u662f\u5426\u5305\u542b\u67d0\u4e2akey"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,l.kt)("li",{parentName:"ul"},"@return {bool} true\u6210\u529f false \u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n let storage= storages.create("123");\n logd(storage);\n //\u5b58\u50a8\u6570\u636e\n let r = storage.putEncrypt("key","3232");\n logd(r);\n //\u83b7\u53d6\u6570\u636e\n logd(storage.getDecryptString("key"));\n logd(storage.contains("key"));\n  logd(storage.getDecryptString("key"));\nmain();\n'))))}c.isMDXComponent=!0}}]);