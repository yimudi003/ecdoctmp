"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[6237],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return d}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(s,".").concat(d)]||m[d]||i[d]||l;return r?t.createElement(k,o(o({ref:n},c),{},{components:r})):t.createElement(k,o({ref:n},c))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74642:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return i}});var t=r(83117),a=r(80102),l=(r(67294),r(3905)),o=["components"],p={},s=void 0,u={unversionedId:"zh-cn/zk/zk-shell",id:"zh-cn/zk/zk-shell",title:"zk-shell",description:"- \u5bf9\u5e94\u529f\u80fd\u51fd\u6570\u4e2d\u7684 shell\u4e8b\u4ef6 \u6a21\u5757",source:"@site/docs/zh-cn/zk/zk-shell.md",sourceDirName:"zh-cn/zk",slug:"/zh-cn/zk/zk-shell",permalink:"/en/docs/zh-cn/zk/zk-shell",draft:!1,tags:[],version:"current",frontMatter:{}},c={},i=[{value:"installApp \u5b89\u88c5 apk",id:"installapp-\u5b89\u88c5-apk",level:2},{value:"uninstallApp \u5378\u8f7d\u5e94\u7528\u7a0b\u5e8f",id:"uninstallapp-\u5378\u8f7d\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"stopApp \u505c\u6b62\u6b63\u5728\u6267\u884c\u7684\u5e94\u7528",id:"stopapp-\u505c\u6b62\u6b63\u5728\u6267\u884c\u7684\u5e94\u7528",level:2},{value:"execCommand \u6267\u884cShell\u547d\u4ee4",id:"execcommand-\u6267\u884cshell\u547d\u4ee4",level:2}],m={toc:i};function d(e){var n=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u5e94\u529f\u80fd\u51fd\u6570\u4e2d\u7684 shell\u4e8b\u4ef6 \u6a21\u5757")),(0,l.kt)("h2",{id:"installapp-\u5b89\u88c5-apk"},"installApp \u5b89\u88c5 apk"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 apk"),(0,l.kt)("li",{parentName:"ul"},"@param path \u5e94\u7528\u7a0b\u5e8f\u7684\u5305\u540d"),(0,l.kt)("li",{parentName:"ul"},"@return true \u4ee3\u8868\u6210\u529f\uff0cfalse \u4ee3\u8868\u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/shell";\n    var params = {\n      "type": "installApp",\n      "path": "/sdcard/aaa.apk"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,l.kt)("h2",{id:"uninstallapp-\u5378\u8f7d\u5e94\u7528\u7a0b\u5e8f"},"uninstallApp \u5378\u8f7d\u5e94\u7528\u7a0b\u5e8f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5378\u8f7d\u5e94\u7528\u7a0b\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"@param packageName \u5e94\u7528\u7a0b\u5e8f\u7684\u5305\u540d"),(0,l.kt)("li",{parentName:"ul"},"@return true \u4ee3\u8868\u6210\u529f\uff0cfalse \u4ee3\u8868\u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/shell";\n    var params = {\n      "type": "uninstallApp",\n      "packageName": "com.aaaa"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,l.kt)("h2",{id:"stopapp-\u505c\u6b62\u6b63\u5728\u6267\u884c\u7684\u5e94\u7528"},"stopApp \u505c\u6b62\u6b63\u5728\u6267\u884c\u7684\u5e94\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u505c\u6b62\u6b63\u5728\u6267\u884c\u7684\u5e94\u7528"),(0,l.kt)("li",{parentName:"ul"},"@param packageName \u5e94\u7528\u7a0b\u5e8f\u7684\u5305\u540d"),(0,l.kt)("li",{parentName:"ul"},"@return true \u4ee3\u8868\u6210\u529f\uff0cfalse \u4ee3\u8868\u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/shell";\n    var params = {\n      "type": "stopApp",\n      "packageName": "com.aaaa"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,l.kt)("h2",{id:"execcommand-\u6267\u884cshell\u547d\u4ee4"},"execCommand \u6267\u884cShell\u547d\u4ee4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884cShell\u547d\u4ee4"),(0,l.kt)("li",{parentName:"ul"},"@param command \u547d\u4ee4\uff0c\u4f8b\u5982\u5b89\u88c5App \uff1a pm install /sdcard/app.apk"),(0,l.kt)("li",{parentName:"ul"},"@return \u547d\u4ee4\u6267\u884c\u540e\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u7ed3\u679c")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/shell";\n    var params = {\n      "type": "execCommand",\n      "command": "ls -al /sdcard/"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))))}d.isMDXComponent=!0}}]);