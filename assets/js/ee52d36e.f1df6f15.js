"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[5580],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,k=m["".concat(s,".").concat(d)]||m[d]||i[d]||o;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67006:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return i}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),l=["components"],u={},s=void 0,p={unversionedId:"zh-cn/zk/zk-agent",id:"zh-cn/zk/zk-agent",title:"zk-agent",description:"- \u5bf9\u5e94\u529f\u80fd\u51fd\u6570\u4e2d\u7684 \u4ee3\u7406\u4e8b\u4ef6 \u6a21\u5757",source:"@site/docs/zh-cn/zk/zk-agent.md",sourceDirName:"zh-cn/zk",slug:"/zh-cn/zk/zk-agent",permalink:"/docs/zh-cn/zk/zk-agent",draft:!1,tags:[],version:"current",frontMatter:{}},c={},i=[{value:"setCurrentIme \u8bbe\u7f6e\u6211\u4eec\u7684\u8f93\u5165\u6cd5",id:"setcurrentime-\u8bbe\u7f6e\u6211\u4eec\u7684\u8f93\u5165\u6cd5",level:2},{value:"restoreIme \u6062\u590d\u8f93\u5165\u6cd5",id:"restoreime-\u6062\u590d\u8f93\u5165\u6cd5",level:2},{value:"inputEvent \u6267\u884c\u8f93\u5165\u4e8b\u4ef6",id:"inputevent-\u6267\u884c\u8f93\u5165\u4e8b\u4ef6",level:2},{value:"touchDown \u6309\u4e0b\u4e8b\u4ef6",id:"touchdown-\u6309\u4e0b\u4e8b\u4ef6",level:2},{value:"touchMove \u79fb\u52a8\u4e8b\u4ef6",id:"touchmove-\u79fb\u52a8\u4e8b\u4ef6",level:2},{value:"touchUp \u5f39\u8d77\u8f93\u4e8b\u4ef6",id:"touchup-\u5f39\u8d77\u8f93\u4e8b\u4ef6",level:2},{value:"pressKey \u6a21\u62df\u6309\u952e",id:"presskey-\u6a21\u62df\u6309\u952e",level:2},{value:"pressKeyCode \u6a21\u62df\u952e\u76d8\u8f93\u5165",id:"presskeycode-\u6a21\u62df\u952e\u76d8\u8f93\u5165",level:2},{value:"pressKeyCodeWithMetaState \u6a21\u62df\u952e\u76d8\u8f93\u5165",id:"presskeycodewithmetastate-\u6a21\u62df\u952e\u76d8\u8f93\u5165",level:2},{value:"menu \u6253\u5f00\u83dc\u5355",id:"menu-\u6253\u5f00\u83dc\u5355",level:2},{value:"enter Enter\u952e",id:"enter-enter\u952e",level:2},{value:"delete \u5220\u9664\u952e",id:"delete-\u5220\u9664\u952e",level:2},{value:"closeScreen \u5173\u95ed\u5c4f\u5e55\uff0c\u7701\u70b9\u6a21\u5f0f",id:"closescreen-\u5173\u95ed\u5c4f\u5e55\u7701\u70b9\u6a21\u5f0f",level:2},{value:"lightScreen  \u70b9\u4eae\u5c4f\u5e55",id:"lightscreen--\u70b9\u4eae\u5c4f\u5e55",level:2}],m={toc:i};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u5e94\u529f\u80fd\u51fd\u6570\u4e2d\u7684 \u4ee3\u7406\u4e8b\u4ef6 \u6a21\u5757")),(0,o.kt)("h2",{id:"setcurrentime-\u8bbe\u7f6e\u6211\u4eec\u7684\u8f93\u5165\u6cd5"},"setCurrentIme \u8bbe\u7f6e\u6211\u4eec\u7684\u8f93\u5165\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5f53\u524d\u7684\u8f93\u5165\u6cd5\uff0c\u7528\u4e8e\u8f93\u5165\u6570\u636e"),(0,o.kt)("li",{parentName:"ul"},"@return {boolean|\u5e03\u5c14\u578b}")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n    var params = {\n      "type": "setCurrentIme"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,o.kt)("h2",{id:"restoreime-\u6062\u590d\u8f93\u5165\u6cd5"},"restoreIme \u6062\u590d\u8f93\u5165\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6062\u590d\u5230\u4e4b\u524d\u7684\u8f93\u5165\u6cd5"),(0,o.kt)("li",{parentName:"ul"},"@return {boolean|\u5e03\u5c14\u578b}")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n    var params = {\n      "type": "restoreIme"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,o.kt)("h2",{id:"inputevent-\u6267\u884c\u8f93\u5165\u4e8b\u4ef6"},"inputEvent \u6267\u884c\u8f93\u5165\u4e8b\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c\u8f93\u5165\u4e8b\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"@param action \u52a8\u4f5c\uff0c\u8bf7\u770b\u7c7b: MotionEvent.ACTION_*"),(0,o.kt)("li",{parentName:"ul"},"@param x x\u5750\u6807"),(0,o.kt)("li",{parentName:"ul"},"@param y y\u5750\u6807"),(0,o.kt)("li",{parentName:"ul"},"@param metaState \u63a7\u5236\u6309\u952e\uff0c\u6bd4\u5982\u8bf4shift\u952e\uff0calt\u952e\uff0cctrl\u952e\u7b49\u63a7\u5236\u952e, 0\u6216\u8005 1 any meta info"),(0,o.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n  var params = {\n     "type": "inputEvent",\n     "action": 0,\n     "x": 1,\n     "y": 1,\n     "metaState": 0,\n   };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,o.kt)("h2",{id:"touchdown-\u6309\u4e0b\u4e8b\u4ef6"},"touchDown \u6309\u4e0b\u4e8b\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c\u6309\u4e0b\u8f93\u5165\u4e8b\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"@param x x\u5750\u6807"),(0,o.kt)("li",{parentName:"ul"},"@param y y\u5750\u6807"),(0,o.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n    var params = {\n      "type": "touchDown",\n      "x": 1,\n      "y": 1\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n    \n'))),(0,o.kt)("h2",{id:"touchmove-\u79fb\u52a8\u4e8b\u4ef6"},"touchMove \u79fb\u52a8\u4e8b\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c\u79fb\u52a8\u8f93\u5165\u4e8b\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"@param x x\u5750\u6807"),(0,o.kt)("li",{parentName:"ul"},"@param y y\u5750\u6807"),(0,o.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n    var params = {\n      "type": "touchMove",\n      "x": 1,\n      "y": 1\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n    \n'))),(0,o.kt)("h2",{id:"touchup-\u5f39\u8d77\u8f93\u4e8b\u4ef6"},"touchUp \u5f39\u8d77\u8f93\u4e8b\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c\u5f39\u8d77\u8f93\u5165\u4e8b\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"@param x x\u5750\u6807"),(0,o.kt)("li",{parentName:"ul"},"@param y y\u5750\u6807"),(0,o.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n    var params = {\n      "type": "touchUp",\n      "x": 1,\n      "y": 1\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n    \n'))),(0,o.kt)("h2",{id:"presskey-\u6a21\u62df\u6309\u952e"},"pressKey \u6a21\u62df\u6309\u952e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6a21\u62df\u6309\u952e,\u4f8b\u5982home back\u7b49"),(0,o.kt)("li",{parentName:"ul"},"@param key \u5bf9\u5e94\u7684\u503c\u5206\u522b\u4e3a home, back, left, right, up, down, center, menu, search, enter, delete(or del), recent(recent apps), volume_up, volume_down, volume_mute, camera, power\n*@return \u5e03\u5c14\u578b true \u6210\u529f, false \u5931\u8d25")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n    var params = {\n      "type": "pressKey",\n      "key": "back"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n    \n'))),(0,o.kt)("h2",{id:"presskeycode-\u6a21\u62df\u952e\u76d8\u8f93\u5165"},"pressKeyCode \u6a21\u62df\u952e\u76d8\u8f93\u5165"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6a21\u62df\u952e\u76d8\u8f93\u5165"),(0,o.kt)("li",{parentName:"ul"},"@param keyCode \u952e\u76d8\u7684key\uff0c\u53c2\u89c1KeyEvent.KEYCODE_*"),(0,o.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f\uff0cfalse \u4ee3\u8868\u5931\u8d25")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n    var params = {\n      "type": "pressKeyCode",\n      "keyCode": 4\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n    \n'))),(0,o.kt)("h2",{id:"presskeycodewithmetastate-\u6a21\u62df\u952e\u76d8\u8f93\u5165"},"pressKeyCodeWithMetaState \u6a21\u62df\u952e\u76d8\u8f93\u5165"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6a21\u62df\u952e\u76d8\u8f93\u5165"),(0,o.kt)("li",{parentName:"ul"},"@param keyCode keyCode \u952e\u76d8\u7684key\uff0c\u53c2\u89c1KeyEvent.KEYCODE_*"),(0,o.kt)("li",{parentName:"ul"},"@param metaState metaState \u63a7\u5236\u6309\u952e\uff0c\u6bd4\u5982\u8bf4shift\u952e\uff0calt\u952e\uff0cctrl\u952e\u7b49\u63a7\u5236\u952e, 0\u6216\u8005 1"),(0,o.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f\uff0cfalse \u4ee3\u8868\u5931\u8d25\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n    var params = {\n      "type": "pressKeyCodeWithMetaState",\n      "keyCode": 4,\n      "metaState":1\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n    \n'))),(0,o.kt)("h2",{id:"menu-\u6253\u5f00\u83dc\u5355"},"menu \u6253\u5f00\u83dc\u5355"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00\u83dc\u5355"),(0,o.kt)("li",{parentName:"ul"},"@return {null|\u5e03\u5c14\u578b}")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n    var params = {\n      "type": "menu"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n'))),(0,o.kt)("h2",{id:"enter-enter\u952e"},"enter Enter\u952e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enter\u952e"),(0,o.kt)("li",{parentName:"ul"},"@return {null|\u5e03\u5c14\u578b}")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n    var params = {\n      "type": "enter"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n'))),(0,o.kt)("h2",{id:"delete-\u5220\u9664\u952e"},"delete \u5220\u9664\u952e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5220\u9664\u952e"),(0,o.kt)("li",{parentName:"ul"},"@return {null|\u5e03\u5c14\u578b}")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n    var params = {\n      "type": "delete"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n'))),(0,o.kt)("h2",{id:"closescreen-\u5173\u95ed\u5c4f\u5e55\u7701\u70b9\u6a21\u5f0f"},"closeScreen \u5173\u95ed\u5c4f\u5e55\uff0c\u7701\u70b9\u6a21\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5173\u95ed\u5c4f\u5e55\uff0c\u5c4f\u5e55\u4e0d\u4eae\uff0c\u4f46\u662f\u4f9d\u7136\u53ef\u4ee5\u81ea\u52a8\u70b9\u51fb"),(0,o.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u6210\u529f\uff0cfalse \u5931\u8d25")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n    var params = {\n      "type": "closeScreen"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n'))),(0,o.kt)("h2",{id:"lightscreen--\u70b9\u4eae\u5c4f\u5e55"},"lightScreen  \u70b9\u4eae\u5c4f\u5e55"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u70b9\u4eae\u5c4f\u5e55\uff0c\u548ccloseScreen\u76f8\u53cd\u7684\u52a8\u4f5c"),(0,o.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u6210\u529f\uff0cfalse \u5931\u8d25")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/agentEvent";\n    var params = {\n      "type": "lightScreen"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n'))))}d.isMDXComponent=!0}}]);