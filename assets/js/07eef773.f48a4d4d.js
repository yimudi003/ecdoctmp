"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[1217],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=c(t),m=l,d=k["".concat(i,".").concat(m)]||k[m]||p[m]||r;return t?a.createElement(d,u(u({ref:n},s),{},{components:t})):a.createElement(d,u({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,u=new Array(r);u[0]=k;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,u[1]=o;for(var c=2;c<r;c++)u[c]=t[c];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},49023:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=t(83117),l=t(80102),r=(t(67294),t(3905)),u=["components"],o={},i=void 0,c={unversionedId:"zh-cn/ecloud/ecloud-func",id:"zh-cn/ecloud/ecloud-func",title:"ecloud-func",description:"EC\u7684\u5b9e\u4f8b\u4ee3\u7801",source:"@site/docs/zh-cn/ecloud/ecloud-func.md",sourceDirName:"zh-cn/ecloud",slug:"/zh-cn/ecloud/ecloud-func",permalink:"/docs/zh-cn/ecloud/ecloud-func",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"EC\u7684\u5b9e\u4f8b\u4ee3\u7801",id:"ec\u7684\u5b9e\u4f8b\u4ee3\u7801",level:2},{value:"ecloud.log \u53d1\u9001\u65e5\u5fd7",id:"ecloudlog-\u53d1\u9001\u65e5\u5fd7",level:2},{value:"ecloud.getDeviceNo \u83b7\u53d6\u673a\u5668\u7f16\u53f7",id:"ecloudgetdeviceno-\u83b7\u53d6\u673a\u5668\u7f16\u53f7",level:2},{value:"ecloud.getTaskInfo \u83b7\u53d6\u5f53\u524d\u4efb\u52a1\u4fe1\u606f",id:"ecloudgettaskinfo-\u83b7\u53d6\u5f53\u524d\u4efb\u52a1\u4fe1\u606f",level:2},{value:"ecloud.getResources \u53d6\u5f97\u4e00\u7ec4\u8d44\u6e90",id:"ecloudgetresources-\u53d6\u5f97\u4e00\u7ec4\u8d44\u6e90",level:2},{value:"ecloud.getStorageDatas \u53d6\u5f97\u4e00\u7ec4\u6570\u636e",id:"ecloudgetstoragedatas-\u53d6\u5f97\u4e00\u7ec4\u6570\u636e",level:2},{value:"ecloud.uploadStorageData \u4e0a\u4f20\u8981\u5b58\u50a8\u7684\u6570\u636e",id:"eclouduploadstoragedata-\u4e0a\u4f20\u8981\u5b58\u50a8\u7684\u6570\u636e",level:2},{value:"ecloud.subTaskOk \u5b50\u4efb\u52a1\u6210\u529f",id:"ecloudsubtaskok-\u5b50\u4efb\u52a1\u6210\u529f",level:2},{value:"ecloud.subTaskFail \u5b50\u4efb\u52a1\u6210\u529f",id:"ecloudsubtaskfail-\u5b50\u4efb\u52a1\u6210\u529f",level:2}],k={toc:p};function m(e){var n=e.components,t=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ec\u7684\u5b9e\u4f8b\u4ee3\u7801"},"EC\u7684\u5b9e\u4f8b\u4ee3\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u662f\u4e91\u63a7\u5b9e\u4f8b\u4ee3\u7801")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \n  function main() {\n   \n      //\u5982\u679c\u81ea\u52a8\u5316\u670d\u52a1\u6b63\u5e38\n      if (!autoServiceStart(3)) {\n          logd("\u81ea\u52a8\u5316\u670d\u52a1\u542f\u52a8\u5931\u8d25\uff0c\u65e0\u6cd5\u6267\u884c\u811a\u672c");\n          exit();\n          return;\n      }\n      logd("\u5f00\u59cb\u6267\u884c\u811a\u672c...");\n      let ts = ecloud.getTaskInfo();\n      if (ts == null) {\n          logd("\u6ca1\u6709\u4efb\u52a1\u4fe1\u606f");\n          return;\n      }\n      logd("\u4efb\u52a1\u4fe1\u606f:" + JSON.stringify(ts));\n      logd(ts["taskName"]);\n      //\u5b50\u4efb\u52a1\u4fe1\u606f\n      let subs = ts["subTasks"];\n      if (subs == null || subs.length <= 0) {\n          logd("\u6ca1\u6709\u5b50\u4efb\u52a1\u4fe1\u606f ");\n          return;\n      }\n   \n      //\u5982\u679c\u9700\u8981\u8fde\u63a5\u67d0\u4e2a\u4ee3\u7406\u7f51\u7edc\uff0c\u8bf7\u53d6\u5f97network\u53c2\u6570\u5e76\u81ea\u884c\u5904\u7406\n      let networkInfo = ts["network"];\n      if (networkInfo) {\n          logd("\u7f51\u7edc\u4fe1\u606f:" + JSON.stringify(networkInfo));\n      }\n   \n      // \u52a8\u6001\u83b7\u53d6\u9700\u8981\u7684\u8d44\u6e90\u4fe1\u606f\uff0c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u83b7\u53d6\u4f7f\u7528\n      var myRes = ecloud.getResources({\n          "groupName": "\u5feb\u624b\u7d20\u6750\u7ec4",\n          "pageNum": 1,\n          "pageSize": 1000\n      });\n      if (myRes) {\n          logd("\u52a8\u6001\u83b7\u53d6\u8d44\u6e90\u4fe1\u606f: " + JSON.stringify(myRes));\n      }\n   \n      //\u5f00\u59cb\u5faa\u73af\u5b50\u4efb\u52a1\u548c\u5bf9\u5e94\u7684\u529f\u80fd\n      logd("\u5b50\u4efb\u52a1:" + JSON.stringify(subs));\n      for (var i = 0; i < subs.length; i++) {\n          var value = subs[i];\n          let subTaskId = value["subTaskId"];\n          let name = value["subTaskName"];\n          logd("\u4efb\u52a1\u540d\u79f0-> " + name);\n   \n          if (i == 0) {\n              //\u6a21\u62df - \u7b2c\u4e00\u4e2a\u4efb\u52a1\u6253\u5f00\u624b\u673a\u8bbe\u7f6e\u754c\u9762\n              clickSettingTask(value)\n          } else if (i == 1) {\n              //\u6a21\u62df - \u7b2c\u4e8c\u4e2a\u4efb\u52a1\u6253\u5f00\u624b\u673a\u56fe\u5e93\n              clickImgTask(value)\n          }\n      }\n  }\n   \n  /**\n   * \u6253\u5f00\u8bbe\u7f6e\u6309\u94ae\n   **/\n  function clickSettingTask(value) {\n      var historyData = ecloud.getStorageDatas({\n          "groupName": "\u8bbe\u7f6e\u7ec4",\n          "pageNum": 1,\n          "pageSize": 1000\n      });\n      if (historyData) {\n          logd("\u8bbe\u7f6e\u7ec4\u7684\u5386\u53f2\u6570\u636e: " + JSON.stringify(historyData));\n      }\n   \n      let clickResult = false;\n      //\u5148\u53d6\u51fa\u5b50\u4efb\u52a1ID\uff0c\u540e\u7eed\u4e0a\u4f20\u7ed3\u679c\u4f7f\u7528\n      let subTaskId = value["subTaskId"];\n      logd("\u6269\u5c55\u53c2\u6570=> " + value["extraParam"]);\n      logd("\u9700\u8981\u7684\u8d44\u6e90=> " + JSON.stringify(value["resources"]));\n      for (var i = 0; i < 10; i++) {\n          sleep(1000);\n          logd("\u627e\u8bbe\u7f6e\u6309\u94ae " + (i + 1) + "\u6b21");\n          logd("-- " + "\u627e\u8bbe\u7f6e\u6309\u94ae " + (i + 1) + "\u6b21");\n          var n = text("\u8bbe\u7f6e").getOneNodeInfo(1000);\n          if (n) {\n              clickResult = n.clickEx();\n              if (clickResult) {\n                  break;\n              }\n          }\n      }\n      //\u4e0a\u4f20\u7ed3\u679c\u5b50\u4efb\u52a1\u6267\u884c\u7ed3\u679c\n      if (clickResult) {\n          ecloud.subTaskOk({\n              "subTaskId": "" + subTaskId,\n              "msg": "\u627e\u5230\u4e86\u8bbe\u7f6e"\n          });\n          // \u6a21\u62df\u4e0a\u4f20\u6570\u636e\n          var d = ecloud.uploadStorageData({\n              "groupName": "\u8bbe\u7f6e\u7ec4",\n              "dataKey": ecloud.getDeviceNo() + "-111",\n              "content": "xxx" + new Date()\n          });\n          logd("\u4e0a\u4f20\u6570\u636e\u7ed3\u679c->" + d);\n      } else {\n          ecloud.subTaskFail({\n              "subTaskId": "" + subTaskId,\n              "msg": "\u6ca1\u627e\u5230\u8bbe\u7f6e"\n          });\n      }\n  }\n   \n  /**\n   * \u6253\u5f00\u624b\u673a\u56fe\u5e93\n   **/\n  function clickImgTask(value) {\n      let clickResult = false;\n      //\u5148\u53d6\u51fa\u5b50\u4efb\u52a1ID\uff0c\u540e\u7eed\u4e0a\u4f20\u7ed3\u679c\u4f7f\u7528\n      let subTaskId = value["subTaskId"];\n      logd("clickImgTask \u6269\u5c55\u53c2\u6570=> " + value["extraParam"]);\n      logd("clickImgTask \u9700\u8981\u7684\u8d44\u6e90=> " + JSON.stringify(value["resources"]));\n      for (var i = 0; i < 10; i++) {\n          sleep(1000);\n         \n          logd("-- " + "\u627e\u56fe\u5e93\u6309\u94ae " + (i + 1) + "\u6b21");\n          var n = text("\u56fe\u5e93").getOneNodeInfo(1000);\n          if (n) {\n              clickResult = n.clickEx();\n              if (clickResult) {\n                  break;\n              }\n          }\n      }\n   \n      //\u4e0a\u4f20\u7ed3\u679c\u5b50\u4efb\u52a1\u6267\u884c\u7ed3\u679c\n      if (clickResult) {\n          ecloud.subTaskOk({\n              "subTaskId": "" + subTaskId,\n              "msg": "\u627e\u5230\u4e86\u56fe\u5e93"\n          });\n          // \u6a21\u62df\u4e0a\u4f20\u6570\u636e\n          var d = ecloud.uploadStorageData({\n              "groupName": "\u56fe\u5e93\u7ec4",\n              "dataKey": ecloud.getDeviceNo() + "-img",\n              "content": "xxx" + new Date()\n          });\n          logd("\u4e0a\u4f20\u6570\u636e\u7ed3\u679c->" + d);\n      } else {\n          ecloud.subTaskFail({\n              "subTaskId": "" + subTaskId,\n              "msg": "\u6ca1\u627e\u5230\u56fe\u5e93"\n          });\n      }\n  }\n   \n  function autoServiceStart(time) {\n      for (var i = 0; i < time; i++) {\n          if (isServiceOk()) {\n              return true;\n          }\n          var started = startEnv();\n          logd("\u7b2c" + (i + 1) + "\u6b21\u542f\u52a8\u670d\u52a1\u7ed3\u679c: " + started);\n          if (isServiceOk()) {\n              return true;\n          }\n      }\n      return isServiceOk();\n  }\n   \n  main();\n'))),(0,r.kt)("h2",{id:"ecloudlog-\u53d1\u9001\u65e5\u5fd7"},"ecloud.log \u53d1\u9001\u65e5\u5fd7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d1\u9001\u65e5\u5fd7\u5230\u4e91\u7aef"),(0,r.kt)("li",{parentName:"ul"},"@param msg \u65e5\u5fd7\u4fe1\u606f")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    ecloud.log("\u6211\u662fCLOUD\u65e5\u5fd7")\n}\nmain();\n'))),(0,r.kt)("h2",{id:"ecloudgetdeviceno-\u83b7\u53d6\u673a\u5668\u7f16\u53f7"},"ecloud.getDeviceNo \u83b7\u53d6\u673a\u5668\u7f16\u53f7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u673a\u5668\u7f16\u53f7"),(0,r.kt)("li",{parentName:"ul"},"@return {string} \u673a\u5668\u7f16\u7801\u6216\u8005null")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var d = ecloud.getDeviceNo()\n    logd(d)\n}\nmain();\n"))),(0,r.kt)("h2",{id:"ecloudgettaskinfo-\u83b7\u53d6\u5f53\u524d\u4efb\u52a1\u4fe1\u606f"},"ecloud.getTaskInfo \u83b7\u53d6\u5f53\u524d\u4efb\u52a1\u4fe1\u606f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u5f53\u524d\u4efb\u52a1\u7684\u4fe1\u606f\uff0c\u5f53\u524d\u4efb\u52a1\u5df2\u7ecf\u88ab\u63a8\u9001\u5230\u672c\u5730\u4e86\uff0c\u76f4\u63a5\u83b7\u53d6"),(0,r.kt)("li",{parentName:"ul"},"@return {JSON} \u5bf9\u8c61")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var d = ecloud.getTaskInfo()\n    logd(d)\n}\nmain();\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"taskId: \u4e91\u7aef\u4e3b\u4efb\u52a1ID"),(0,r.kt)("li",{parentName:"ul"},"taskName: \u4e91\u7aef\u4e3b\u4efb\u52a1\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"sort: \u4e3b\u4efb\u52a1\u6392\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"scriptId: \u811a\u672c\u7684\u4e91\u7aefID"),(0,r.kt)("li",{parentName:"ul"},"scriptName: \u811a\u672c\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"scriptVersion: \u811a\u672c\u7684\u7248\u672c\u53f7"),(0,r.kt)("li",{parentName:"ul"},"network: \u7f51\u7edc\u8d44\u6e90\u5bf9\u8c61",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"address: \u7f51\u7edc\u8d44\u6e90\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},"userName: \u7f51\u7edc\u8d44\u6e90\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},"password: \u7f51\u7edc\u8d44\u6e90\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"protocolType: \u7f51\u7edc\u8d44\u6e90\u534f\u8bae\u7c7b\u578b, 0\u3001 PPTP   1\u3001L2TP"),(0,r.kt)("li",{parentName:"ul"},"mppeType: \u4f20\u8f93\u662f\u5426\u9700\u8981MPPE\u52a0\u5bc6, 1\u662f/0\u5426"),(0,r.kt)("li",{parentName:"ul"},"shareKey: L2TP\u7528\u7684\u79d8\u94a5"))),(0,r.kt)("li",{parentName:"ul"},"subTasks: \u5b50\u4efb\u52a1\u6570\u7ec4\u5217\u8868",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"subTaskId: \u5b50\u4efb\u52a1\u4e91\u7aefID"),(0,r.kt)("li",{parentName:"ul"},"subTaskName: \u5b50\u4efb\u52a1"),(0,r.kt)("li",{parentName:"ul"},"resourceGroupId: \u8d44\u6e90\u7ec4\u4e91\u7aefID"),(0,r.kt)("li",{parentName:"ul"},"extraParam: \u5b50\u4efb\u52a1\u6269\u5c55\u53c2\u6570\u5b57\u7b26\u4e32"),(0,r.kt)("li",{parentName:"ul"},"sort: \u5b50\u4efb\u52a1\u6392\u5e8f\u503c"),(0,r.kt)("li",{parentName:"ul"},"resources: \u5b50\u4efb\u52a1\u5173\u8054\u7684\u8d44\u6e90\u5217\u8868\u5bf9\u8c61",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"name: \u8d44\u6e90\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"content: \u8d44\u6e90\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"type: \u8d44\u6e90\u7c7b\u578b, 1 \u5b57\u7b26\u4e32  2 \u56fe\u7247 3 \u89c6\u9891 4 \u6587\u4ef6")))))),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},' # \u4efb\u52a1\u4fe1\u606f\u51fd\u6570\u8fd4\u56de\u7684\u503c\n  {\n      "taskId": "1",\n      "taskName": "X\u624b\u6d4f\u89c8",\n      "sort": 3,\n      "scriptId": "1",\n      "scriptName": "X\u624b\u811a\u672c",\n      "scriptUrl": "http://baidu.com/a.iec",\n      "scriptVersion": "1",\n      "network": {\n          "address": "180.1.1.3.2",\n          "userName": "123",\n          "password": "123",\n          "protocolType": "1",\n          "mppeType": "",\n          "shareKey": ""\n      },\n      "subTasks": [\n          {\n              "subTaskId": "1",\n              "subTaskName": "\u767b\u5f55",\n              "resourceGroupId": "1",\n              "extraParam": "testtext",\n              "sort": 1,\n              "resources": [\n                  {\n                      "name": "\u8d26\u53f71",\n                      "content": "123456",\n                      "type": 1\n                  }\n              ]\n          }\n      ]\n  }\n'))),(0,r.kt)("h2",{id:"ecloudgetresources-\u53d6\u5f97\u4e00\u7ec4\u8d44\u6e90"},"ecloud.getResources \u53d6\u5f97\u4e00\u7ec4\u8d44\u6e90"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8d44\u6e90\u7ec4\u53d6\u5f97\u4e00\u7ec4\u8d44\u6e90"),(0,r.kt)("li",{parentName:"ul"},"@param map \u53ef\u6269\u5c55\u53c2\u6570\u8868"),(0,r.kt)("li",{parentName:"ul"},'\u4f8b\u5982 {"groupName":"\u8d44\u6e90\u7ec41"}'),(0,r.kt)("li",{parentName:"ul"},"key\u5b9a\u4e49\uff1a"),(0,r.kt)("li",{parentName:"ul"},"groupName = \u8d44\u6e90\u7ec4\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"pageNum= \u9875\u7801 \u4f8b\u5982 1\u4ee3\u8868\u7b2c\u4e00\u9875"),(0,r.kt)("li",{parentName:"ul"},"pageSize= \u6bcf\u9875\u4e2a\u6570 \u4f8b\u5982 10 \u4ee3\u8868\u4e00\u9875\u670910\u4e2a"),(0,r.kt)("li",{parentName:"ul"}),(0,r.kt)("li",{parentName:"ul"},"@return {JSON} \u8d44\u6e90JSON\u5bf9\u8c61")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var d = ecloud.getResources({"groupName":"\u8d44\u6e90\u7ec41","pageNum":1,"pageSize":1000})\n    logd(d)\n}\nmain();\n'))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"total: \u8bb0\u5f55\u603b\u6570\u91cf"),(0,r.kt)("li",{parentName:"ul"},"rows: \u8bb0\u5f55\u5217\u8868",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"groupName: \u8d44\u6e90\u7ec4\u540d"),(0,r.kt)("li",{parentName:"ul"},"name: \u8d44\u6e90\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"content: \u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"type: \u8d44\u6e90\u7c7b\u578b, 1 \u5b57\u7b26\u4e32  2 \u56fe\u7247 3 \u89c6\u9891 4 \u6587\u4ef6")))),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n      "rows": [\n          {\n              "groupName": "",\n              "name": "",\n              "content": "",\n              "type": 1\n          }\n      ],\n      "total": 10000\n  }\n'))),(0,r.kt)("h2",{id:"ecloudgetstoragedatas-\u53d6\u5f97\u4e00\u7ec4\u6570\u636e"},"ecloud.getStorageDatas \u53d6\u5f97\u4e00\u7ec4\u6570\u636e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6570\u636e\u7ec4\u540d\u53d6\u5f97\u4e00\u7ec4\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@param map \u53ef\u6269\u5c55\u53c2\u6570\u8868"),(0,r.kt)("li",{parentName:"ul"},'\u4f8b\u5982 {"groupName":"\u6570\u636e\u7ec41"}'),(0,r.kt)("li",{parentName:"ul"},'{"dataKey":"key"}'),(0,r.kt)("li",{parentName:"ul"},"key\u5b9a\u4e49\uff1a groupName = \u6570\u636e\u7ec4\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"dataKey = \u6570\u636e\u552f\u4e00\u6807\u793a"),(0,r.kt)("li",{parentName:"ul"},"pageNum= \u9875\u7801 \u4f8b\u5982 1\u4ee3\u8868\u7b2c\u4e00\u9875"),(0,r.kt)("li",{parentName:"ul"},"pageSize= \u6bcf\u9875\u4e2a\u6570 \u4f8b\u5982 10 \u4ee3\u8868\u4e00\u9875\u670910\u4e2a")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var d = ecloud.getStorageDatas({"groupName":"\u8d44\u6e90\u7ec41","dataKey":"111","pageNum":1,"pageSize":1000})\n    logd(d)\n}\nmain();\n'))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"total: \u8bb0\u5f55\u603b\u6570\u91cf"),(0,r.kt)("li",{parentName:"ul"},"rows: \u8bb0\u5f55\u5217\u8868",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"groupName: \u6570\u636e\u6240\u5728\u7ec4\u540d"),(0,r.kt)("li",{parentName:"ul"},"dataKey: \u6570\u636e\u552f\u4e00\u6807\u8bc6"),(0,r.kt)("li",{parentName:"ul"},"content: \u6570\u636e\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"deviceNo: \u4ea7\u751f\u8be5\u6570\u636e\u7684\u8bbe\u5907\u53f7")))),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "rows": [\n            {\n                "dataKey": "",\n                "groupName": "",\n                "deviceNo": "",\n                "content": ""\n            }\n        ],\n        "total": 10000\n    }\n'))),(0,r.kt)("h2",{id:"eclouduploadstoragedata-\u4e0a\u4f20\u8981\u5b58\u50a8\u7684\u6570\u636e"},"ecloud.uploadStorageData \u4e0a\u4f20\u8981\u5b58\u50a8\u7684\u6570\u636e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4f20\u8981\u5b58\u50a8\u7684\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@param map \u53ef\u6269\u5c55\u53c2\u6570\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982"),(0,r.kt)("li",{parentName:"ul"},"{"),(0,r.kt)("li",{parentName:"ul"},'"groupName":"123",'),(0,r.kt)("li",{parentName:"ul"},'"dataKey": "11111",'),(0,r.kt)("li",{parentName:"ul"},'"content":"123"'),(0,r.kt)("li",{parentName:"ul"},"}"),(0,r.kt)("li",{parentName:"ul"},"key\u5b9a\u4e49\uff1a"),(0,r.kt)("li",{parentName:"ul"},"groupName = \u6570\u636e\u7684\u7ec4\u540d\uff0c\u5982\u679c\u4e91\u7aef\u6ca1\u6709\u8fd9\u4e2a\u7ec4\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa"),(0,r.kt)("li",{parentName:"ul"},"dataKey = \u5b58\u50a8\u6570\u636e\u7684\u552f\u4e00\u6807\u793a"),(0,r.kt)("li",{parentName:"ul"},"content = \u6570\u636e\u5b57\u7b26\u4e32"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true\u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var d = ecloud.uploadStorageData({"groupName":"\u8d44\u6e90\u7ec41","dataKey":"111","content":"xxx"})\n    logd(d)\n}\nmain();\n'))),(0,r.kt)("h2",{id:"ecloudsubtaskok-\u5b50\u4efb\u52a1\u6210\u529f"},"ecloud.subTaskOk \u5b50\u4efb\u52a1\u6210\u529f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b50\u4efb\u52a1\u6210\u529f"),(0,r.kt)("li",{parentName:"ul"},"@param map \u53ef\u6269\u5c55\u53c2\u6570\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982"),(0,r.kt)("li",{parentName:"ul"},"{"),(0,r.kt)("li",{parentName:"ul"},'"subTaskId":123,'),(0,r.kt)("li",{parentName:"ul"},'"msg": "\u4efb\u52a1\u6210\u529f"'),(0,r.kt)("li",{parentName:"ul"},"}"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true\u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var d = ecloud.subTaskOk({"subTaskId":"123","msg":"\u4efb\u52a1\u6210\u529f"})\n    logd(d)\n}\nmain();\n'))),(0,r.kt)("h2",{id:"ecloudsubtaskfail-\u5b50\u4efb\u52a1\u6210\u529f"},"ecloud.subTaskFail \u5b50\u4efb\u52a1\u6210\u529f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b50\u4efb\u52a1\u5931\u8d25"),(0,r.kt)("li",{parentName:"ul"},"@param map \u53ef\u6269\u5c55\u53c2\u6570\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982"),(0,r.kt)("li",{parentName:"ul"},"{"),(0,r.kt)("li",{parentName:"ul"},'"subTaskId":123,'),(0,r.kt)("li",{parentName:"ul"},' "msg": "\u56e0\u4e3a\u627e\u4e0d\u5230XXX\u5931\u8d25"'),(0,r.kt)("li",{parentName:"ul"},"}"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true\u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var d = ecloud.subTaskFail({"subTaskId":"123","msg":"\u56e0\u4e3a\u627e\u4e0d\u5230XXX\u5931\u8d25"})\n    logd(d)\n}\nmain();\n'))))}m.isMDXComponent=!0}}]);