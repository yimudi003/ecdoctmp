"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[7176],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return g}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),p=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),g=o,d=m["".concat(u,".").concat(g)]||m[g]||i[g]||a;return r?t.createElement(d,l(l({ref:n},c),{},{components:r})):t.createElement(d,l({ref:n},c))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11561:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return i}});var t=r(83117),o=r(80102),a=(r(67294),r(3905)),l=["components"],s={},u="\u65e5\u5fd7\u51fd\u6570",p={unversionedId:"zh-cn/zk/global/zk-global-log",id:"zh-cn/zk/global/zk-global-log",title:"\u65e5\u5fd7\u51fd\u6570",description:"toast \u6d6e\u5c42\u6d88\u606f",source:"@site/docs/zh-cn/zk/global/zk-global-log.md",sourceDirName:"zh-cn/zk/global",slug:"/zh-cn/zk/global/zk-global-log",permalink:"/en/docs/zh-cn/zk/global/zk-global-log",draft:!1,tags:[],version:"current",frontMatter:{}},c={},i=[{value:"toast \u6d6e\u5c42\u6d88\u606f",id:"toast-\u6d6e\u5c42\u6d88\u606f",level:2},{value:"logd \u8c03\u8bd5\u6d88\u606f",id:"logd-\u8c03\u8bd5\u6d88\u606f",level:2},{value:"logi \u4fe1\u606f\u6d88\u606f",id:"logi-\u4fe1\u606f\u6d88\u606f",level:2},{value:"logw \u8b66\u544a\u6d88\u606f",id:"logw-\u8b66\u544a\u6d88\u606f",level:2},{value:"loge \u9519\u8bef\u6d88\u606f",id:"loge-\u9519\u8bef\u6d88\u606f",level:2},{value:"setSaveLog \u4fdd\u5b58\u65e5\u5fd7",id:"setsavelog-\u4fdd\u5b58\u65e5\u5fd7",level:2},{value:"clearLog \u6e05\u7406\u65e5\u5fd7",id:"clearlog-\u6e05\u7406\u65e5\u5fd7",level:2}],m={toc:i};function g(e){var n=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u65e5\u5fd7\u51fd\u6570"},"\u65e5\u5fd7\u51fd\u6570"),(0,a.kt)("h2",{id:"toast-\u6d6e\u5c42\u6d88\u606f"},"toast \u6d6e\u5c42\u6d88\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d6e\u5c42\u6d88\u606f"),(0,a.kt)("li",{parentName:"ul"},"@param msg \u6d88\u606f\u5b57\u7b26\u4e32")),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'  var request = require(\'request\');\n  var url = "http://127.0.0.1:20390/global";\n  var params = {\n    "type": "toast",\n    "msg": "\u6211\u662f\u6d88\u606f"\n  };\n  request({\n    url: url,\n    method: "POST",\n    json: true,\n    headers: {\n      "content-type": "application/json",\n    },\n    body: params\n  }, function (error, response, body) {\n    if (!error && response.statusCode == 200) {\n      console.log(body)\n    } else {\n      console.log(error)\n    }\n  });\n  \n'))),(0,a.kt)("h2",{id:"logd-\u8c03\u8bd5\u6d88\u606f"},"logd \u8c03\u8bd5\u6d88\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8c03\u8bd5\u6d88\u606f"),(0,a.kt)("li",{parentName:"ul"},"@param msg \u6d88\u606f\u5b57\u7b26\u4e32")),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'  var request = require(\'request\');\n  var url = "http://127.0.0.1:20390/global";\n  var params = {\n    "type": "logd",\n    "msg": "\u6211\u662f\u6d88\u606f"\n  };\n  request({\n    url: url,\n    method: "POST",\n    json: true,\n    headers: {\n      "content-type": "application/json",\n    },\n    body: params\n  }, function (error, response, body) {\n    if (!error && response.statusCode == 200) {\n      console.log(body)\n    } else {\n      console.log(error)\n    }\n  });\n  \n'))),(0,a.kt)("h2",{id:"logi-\u4fe1\u606f\u6d88\u606f"},"logi \u4fe1\u606f\u6d88\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fe1\u606f\u6d88\u606f"),(0,a.kt)("li",{parentName:"ul"},"@param msg \u6d88\u606f\u5b57\u7b26\u4e32")),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'  var request = require(\'request\');\n  var url = "http://127.0.0.1:20390/global";\n  var params = {\n    "type": "logi",\n    "msg": "\u6211\u662f\u6d88\u606f"\n  };\n  request({\n    url: url,\n    method: "POST",\n    json: true,\n    headers: {\n      "content-type": "application/json",\n    },\n    body: params\n  }, function (error, response, body) {\n    if (!error && response.statusCode == 200) {\n      console.log(body)\n    } else {\n      console.log(error)\n    }\n  });\n  \n'))),(0,a.kt)("h2",{id:"logw-\u8b66\u544a\u6d88\u606f"},"logw \u8b66\u544a\u6d88\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8b66\u544a\u6d88\u606f"),(0,a.kt)("li",{parentName:"ul"},"@param msg \u6d88\u606f\u5b57\u7b26\u4e32")),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'  var request = require(\'request\');\n  var url = "http://127.0.0.1:20390/global";\n  var params = {\n    "type": "logw",\n    "msg": "\u6211\u662f\u6d88\u606f"\n  };\n  request({\n    url: url,\n    method: "POST",\n    json: true,\n    headers: {\n      "content-type": "application/json",\n    },\n    body: params\n  }, function (error, response, body) {\n    if (!error && response.statusCode == 200) {\n      console.log(body)\n    } else {\n      console.log(error)\n    }\n  });\n  \n'))),(0,a.kt)("h2",{id:"loge-\u9519\u8bef\u6d88\u606f"},"loge \u9519\u8bef\u6d88\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9519\u8bef\u6d88\u606f"),(0,a.kt)("li",{parentName:"ul"},"@param msg \u6d88\u606f\u5b57\u7b26\u4e32")),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'  var request = require(\'request\');\n  var url = "http://127.0.0.1:20390/global";\n  var params = {\n    "type": "loge",\n    "msg": "\u6211\u662f\u6d88\u606f"\n  };\n  request({\n    url: url,\n    method: "POST",\n    json: true,\n    headers: {\n      "content-type": "application/json",\n    },\n    body: params\n  }, function (error, response, body) {\n    if (!error && response.statusCode == 200) {\n      console.log(body)\n    } else {\n      console.log(error)\n    }\n  });\n  \n'))),(0,a.kt)("h2",{id:"setsavelog-\u4fdd\u5b58\u65e5\u5fd7"},"setSaveLog \u4fdd\u5b58\u65e5\u5fd7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4fdd\u5b58\u65e5\u5fd7\u5230\u624b\u673a\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"@param save \u662f\u5426\u4fdd\u5b58"),(0,a.kt)("li",{parentName:"ul"},"@param path \u81ea\u5b9a\u4e49\u7684\u6587\u4ef6\u5939"),(0,a.kt)("li",{parentName:"ul"},"@param size \u6bcf\u4e2a\u6587\u4ef6\u5206\u9694\u7684\u5c3a\u5bf8"),(0,a.kt)("li",{parentName:"ul"},"@return \u4fdd\u5b58\u65e5\u5fd7\u6587\u4ef6\u7684\u76ee\u5f55")),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/global";\n    var params = {\n      "type": "setSaveLog",\n      "save": true,\n      "path": "/sdcard/bbb/",\n      "size": 2048\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,a.kt)("h2",{id:"clearlog-\u6e05\u7406\u65e5\u5fd7"},"clearLog \u6e05\u7406\u65e5\u5fd7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6e05\u9664\u65e5\u5fd7"),(0,a.kt)("li",{parentName:"ul"},"@param lines \u6574\u578b\uff0c\u8981\u6e05\u9664\u7684\u884c\u6570\uff0c-1 \u4ee3\u8868\u5168\u90e8\u6e05\u9664")),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/global";\n    var params = {\n      "type": "clearLog",\n      "lines": -1\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))))}g.isMDXComponent=!0}}]);