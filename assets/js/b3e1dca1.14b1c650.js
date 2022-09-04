"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[449],{31498:function(e,a,n){n.d(a,{Z:function(){return d}});var t=n(21073),s=n(82255),r=n(84275),o=n(98982),l=n(64789),i=n(3089),c=n(67294),d=function(e){function a(a){var n;return(n=e.call(this,a)||this).onRegexChange=function(e,a){var t=n.state.values;t[a].name=e,n.triggerChange(t),n.setValues(t)},n.add=function(){var e=n.state.values;if(e.length>100)return s.Z.warning({message:"\u6700\u591a\u6dfb\u52a0100\u4e2a"}),null;n.setState({values:e.concat({name:""})})},n.remove=function(e){var a=n.state.values;a.splice(e,1),n.setValues(a),n.triggerChange(a)},n.state={values:[{name:""}]},n}(0,t.Z)(a,e);var n=a.prototype;return n.setValues=function(e){var a=e||[];a.length||a.push({name:""}),this.setState({values:a})},n.initFromProps=function(e){var a=e;a&&this.setValues(a)},n.triggerChange=function(e){for(var a=[],n=0;n<e.length;n++)a.push({name:e[n].name});var t=this.props.onChange;t&&t(a)},n.render=function(){var e=this,a=this.state.values;return c.createElement("div",null,a.map((function(a,n){var t=0===n;return c.createElement("div",{className:"rainbond_rowsLeft",key:n},c.createElement("div",{className:"rainbond_rows"},c.createElement("span",{className:"rainbond_spanTitle"},"\u8282\u70b9\u540d\u79f0"),c.createElement(r.Z.Item,{rules:[{required:!0,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},c.createElement(o.Z,{name:"name",onChange:function(a){e.onRegexChange(a.target.value,n)},className:"rainbond_inputs",value:a.name,placeholder:"\u8bf7\u8f93\u5165\u8282\u70b9\u540d\u79f0  \u4f8b\uff1amaster1"})),t?c.createElement(l.Z,{onClick:function(){return e.add()},className:"rainbond_icons"}):c.createElement(i.Z,{onClick:function(){return e.remove(n)},className:"rainbond_icons"})))})))},a}(c.Component)},28091:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(21073),s=n(82255),r=n(98982),o=n(64789),l=n(3089),i=n(67294),c=function(e){function a(a){var n;return(n=e.call(this,a)||this).onRegexChange=function(e,a){var t=n.state.values;t[a].externalIP=e,n.triggerChange(t),n.setValues(t)},n.onReplacementChange=function(e,a){var t=n.state.values;t[a].internalIP=e,n.triggerChange(t),n.setValues(t)},n.onFlagChange=function(e,a){var t=n.state.values;t[a].name=e,n.triggerChange(t),n.setValues(t)},n.add=function(){var e=n.state.values;if(e.length>100)return s.Z.warning({message:"\u6700\u591a\u6dfb\u52a0100\u4e2a"}),null;n.setState({values:e.concat({externalIP:"",internalIP:"",name:""})})},n.remove=function(e){var a=n.state.values;a.splice(e,1),n.setValues(a),n.triggerChange(a)},n.state={values:[{externalIP:"",internalIP:"",name:""}]},n}(0,t.Z)(a,e);var n=a.prototype;return n.setValues=function(e){var a=e||[];a.length||a.push({externalIP:"",internalIP:"",name:""}),this.setState({values:a})},n.initFromProps=function(e){var a=e;a&&this.setValues(a)},n.triggerChange=function(e){for(var a=[],n=0;n<e.length;n++)a.push({externalIP:e[n].externalIP,internalIP:e[n].internalIP,name:e[n].name});var t=this.props.onChange;t&&t(a)},n.render=function(){var e=this,a=this.state.values;return i.createElement("div",null,a.map((function(a,n){var t=0===n;return i.createElement("div",{className:"rainbond_rowsLeft",key:n},i.createElement(r.Z,{name:"externalIP",onChange:function(a){e.onRegexChange(a.target.value,n)},className:"rainbond_DAinputs",value:a.externalIP,placeholder:"\u5916\u7f51 IP \u4f8b\uff1a47.104.156.133"}),i.createElement(r.Z,{name:"internalIP",onChange:function(a){e.onReplacementChange(a.target.value,n)},className:"rainbond_DAinputs",value:a.internalIP,placeholder:"\u5185\u7f51 IP \u4f8b\uff1a192.168.0.1"}),i.createElement(r.Z,{name:"namePlaceholder",onChange:function(a){e.onFlagChange(a.target.value,n)},className:"rainbond_DAinputs",value:a.namePlaceholder,placeholder:"\u8282\u70b9\u540d\u79f0  \u4f8b\uff1anode1"}),t?i.createElement(o.Z,{onClick:function(){return e.add()},className:"rainbond_icons"}):i.createElement(l.Z,{onClick:function(){return e.remove(n)},className:"rainbond_icons"}))})))},a}(i.Component)},72401:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(21073),s=n(84275),r=n(98982),o=n(64789),l=n(3089),i=n(67294),c=(n(86455),function(e){function a(a){var n;return(n=e.call(this,a)||this).onRegexChange=function(e,a){var t=n.state.values;t[a].ip=e,n.triggerChange(t),n.setValues(t)},n.add=function(){var e=n.state.values;if(e.length>99)return null;n.setState({values:e.concat({ip:""})})},n.remove=function(e){var a=n.state.values;a.splice(e,1),n.setValues(a),n.triggerChange(a)},n.state={values:[{ip:""}],count:!1},n}(0,t.Z)(a,e);var n=a.prototype;return n.setValues=function(e){var a=e||[];a.length||a.push({ip:""}),this.setState({values:a})},n.initFromProps=function(e){var a=e;a&&this.setValues(a)},n.triggerChange=function(e){for(var a=[],n=0;n<e.length;n++)a.push({ip:e[n].ip});var t=this.props.onChange;t&&t(a)},n.render=function(){var e=this,a=this.state,n=a.values;a.count;return i.createElement("div",null,n.map((function(a,n){var t=0===n;return i.createElement("div",{key:n},i.createElement("div",{className:"rainbond_rows"},i.createElement("span",{className:"rainbond_spanTitle"},"\u8282\u70b9\u540d\u79f0"),i.createElement(s.Z.Item,{rules:[{required:!0,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},i.createElement(r.Z,{name:"ip",onChange:function(a){e.onRegexChange(a.target.value,n)},className:"rainbond_inputs",value:a.ip,placeholder:"\u8bf7\u8f93\u5165endpoints\u5730\u5740  \u4f8b\uff1a192.168.0.1:2379"})),t?i.createElement(o.Z,{onClick:function(){return e.add()},className:"rainbond_icons"}):i.createElement(l.Z,{onClick:function(){return e.remove(n)},className:"rainbond_icons"})))})))},a}(i.Component))},92999:function(e,a,n){var t=n(21073),s=n(67294),r=n(25035),o=n(369);n(18846),s.Component},74506:function(e,a,n){n.r(a),n.d(a,{default:function(){return I}});var t=n(67294),s=n(91047),r=n(8759),o=n(21073),l=n(20550),i=n(84275),c=n(98982),d=n(42101),m=n(57132),_=n(86455),b=n.n(_),u=n(9669),p=n.n(u),h=n(20640),g=n.n(h),v=n(28091),E=n(31498),N=n(72401),f=(n(92999),n(18846),l.Z.CheckableTag),w={enableHA:!0,gatewayIngressIPs:"",imageHub:{enable:!1,domain:"",namespace:"",username:"",password:""},etcd:{enable:!1,endpoints:[],secretName:""},estorage:{enable:!1,RWX:{enable:!1,config:{server:"",storageClassName:""}},RWO:{enable:!1,storageClassName:""},NFS:{enable:!1,server:"",path:""}},type:"nfs",database:{enable:!1,uiDatabase:{host:"",port:"",username:"",password:"",dbname:"",enable:!1},regionDatabase:{host:"",port:"",username:"",password:"",dbname:"",enable:!1}},nodesForChaos:{enable:!1,nodes:[]},nodesForGateway:{enable:!0,nodes:[]}},C=function(e){function a(a){var n,t;return(t=e.call(this,a)||this).reminder=function(e){var a=t.state;a.btnFlag,a.btnFlags;e.gatewayIngressIPs||e.nodesForGateway?(b().fire({position:"center-center",icon:"success",title:"HELM\u547d\u4ee4\u751f\u6210\u6210\u529f",showConfirmButton:!1,timer:1500,heightAuto:!0}),t.setState({btnFlags:!1})):(b().fire({position:"center-center",icon:"error",title:"\u4fe1\u606f\u6ca1\u6709\u586b\u5199\u5b8c\u6574",showConfirmButton:!1,timer:2e3}),t.setState({command:"",copyCommand:"",btnFlog:!1}))},t.handleAdvanced=function(){var e=t.state.isAdvanced;t.setState({isAdvanced:!e,etcd_enabled:"\u81ea\u5b9a\u4e49\u914d\u7f6e",node_enabled:"\u81ea\u5b9a\u4e49\u914d\u7f6e"})},t.onFinish=function(e){var a=t.state,n=a.etcd_enabled,s=a.node_enabled;t.setState({btnLoading:!0,btnFlags:!0},(function(){t.reminder(e)})),e&&(w.etcd.enable="\u81ea\u5b9a\u4e49\u914d\u7f6e"!==n,w.nodesForChaos.enable="\u81ea\u5b9a\u4e49\u914d\u7f6e"!==s,e.server||e.path?(w.estorage.enable=!0,w.estorage.NFS.enable=!0):(w.estorage.enable=!1,w.estorage.NFS.enable=!1),w.estorage.NFS.server=e.server||"",w.estorage.NFS.path=e.path||"",e.host1||e.port1||e.username1||e.password1||e.dbname1?(w.database.enable=!0,w.database.uiDatabase.enable=!0):(w.database.enable=!1,w.database.uiDatabase.enable=!1),e.host2||e.port2||e.username2||e.password2||e.dbname2?(w.database.enable=!0,w.database.regionDatabase.enable=!0):(w.database.enable=!1,w.database.regionDatabase.enable=!1),w.database.uiDatabase.host=e.host1||"",w.database.uiDatabase.port=e.port1||"",w.database.uiDatabase.username=e.username1||"",w.database.uiDatabase.password=e.password1||"",w.database.uiDatabase.dbname=e.dbname1||"",w.database.regionDatabase.host=e.host2||"",w.database.regionDatabase.port=e.port2||"",w.database.regionDatabase.username=e.username2||"",w.database.regionDatabase.password=e.password2||"",w.database.regionDatabase.dbname=e.dbname2||"",e.domain||e.namespace||e.username||e.password?w.imageHub.enable=!0:w.imageHub.enable=!1,w.imageHub.domain=e.domain||"",w.imageHub.namespace=e.namespace||"",w.imageHub.username=e.username||"",w.imageHub.password=e.password||"",w.gatewayIngressIPs=e.gatewayIngressIPs||"",w.nodesForChaos.nodes=e.nodesForChaos||[],w.etcd.endpoints=e.endpoints||[],w.etcd.secretName=e.secretName||"",w.nodesForGateway.nodes=e.nodesForGateway||[],p()({method:"post",url:"https://cloud.goodrain.com/enterprise-server/api/v1/helm/chart",headers:{"Content-Type":"application/json"},data:{enableHA:w.enableHA,database:w.database,estorage:w.estorage,etcd:w.etcd,gatewayIngressIPs:w.gatewayIngressIPs,imageHub:w.imageHub,nodesForChaos:w.nodesForChaos,nodesForGateway:w.nodesForGateway,DockingType:w.type,appui:!0}}).then((function(e){if(200==e.status){var a=e.data.command.split(" & "),n=a.join("\n ");t.setState({command:e.data.command,resCommand:a,copyCommand:n,btnFlog:!0,btnLoading:!1,btnFlag:!1})}})))},t.state=((n={copyColor:!1,btnFlog:!1,btnLoading:!1,command:"",resCommand:[],copyCommand:""}).btnLoading=!1,n.disabled=!1,n.btnFlag=!0,n.btnFlags=!1,n.etcd_enabled="\u81ea\u5b9a\u4e49\u914d\u7f6e",n.node_enabled="\u81ea\u5b9a\u4e49\u914d\u7f6e",n.isAdvanced=!1,n),t}return(0,o.Z)(a,e),a.prototype.render=function(){var e=this,a=this.state,n=a.copyColor,r=a.btnFlog,o=(a.command,a.resCommand),l=a.copyCommand,_=a.btnLoading,u=(a.disabled,a.etcd_enabled),p=a.node_enabled,h=a.isAdvanced;return t.createElement(s.Z,null,t.createElement("div",{className:"rainbond_box"},t.createElement("header",null,t.createElement("div",{className:"rainbond_helmTop"},t.createElement("div",{className:"rainbond_heard"},"CCE \u5b89\u88c5\u547d\u4ee4\u751f\u6210\u5de5\u5177"))),t.createElement("div",{className:"rainbond_content"},t.createElement(i.Z,{onFinish:this.onFinish},t.createElement("div",{className:"rainbond_line"},t.createElement("h4",{className:"rainbond_title"},"ELB \u8d1f\u8f7d\u5747\u8861:"),t.createElement("div",{className:"rainbond_gateway"},t.createElement("div",{className:"rainbond_rows"},t.createElement(i.Z.Item,{name:"gatewayIngressIPs",extra:t.createElement("div",{style:{width:"780px"}},"\u6839\u636e\u81ea\u8eab\u9700\u6c42\uff0c\u63d0\u524d\u5728\u534e\u4e3a\u4e91\u5b98\u7f51\u51c6\u5907\u597d\u4e91\u8d44\u6e90\uff1aELB\u8d1f\u8f7d\u5747\u8861\uff0c ELB\u8d1f\u8f7d\u6d41\u91cf\u5230\u540e\u7aef\u7f51\u5173\u8282\u70b9\u7684 80\u3001443\u30016060\u30016443\u30017070\u30018443 \u7aef\u53e3\uff0c\u6240\u4ee5\u9700\u8981\u914d\u7f6eELB\u76d1\u542c\u7aef\u53e3\uff0c",t.createElement("a",{target:"_blank",href:"https://support.huaweicloud.com/qs-elb/zh-cn_topic_0052569751.html"},"\u8be6\u7ec6\u914d\u7f6e\u89c1\u5b98\u65b9\u6587\u6863\u3002")),rules:[{required:!0,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"},{pattern:/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684IP\u5730\u5740"}]},t.createElement(c.Z,{className:"rainbond_inputs",placeholder:"\u8bf7\u8f93\u5165 IP \u5730\u5740  \u4f8b\uff1a47.104.156.133"}))))),t.createElement("div",{className:"rainbond_lines"},t.createElement("h4",{className:"rainbond_titles"},"\u7f51\u5173\u5b89\u88c5\u8282\u70b9:"),t.createElement("div",{className:"rainbond_has"},t.createElement(i.Z.Item,{name:"nodesForGateway",extra:t.createElement("div",{style:{width:"780px"}},"rainbond\u7f51\u5173\u5b89\u88c5\u5230\u7684\u8282\u70b9\uff0c\u53ef\u4ee5\u5b89\u88c5\u5230\u591a\u4e2a\u8282\u70b9\uff0c\u5b9e\u73b0\u7f51\u5173\u9ad8\u53ef\u7528\u3002\u8282\u70b9\u540d\u79f0\u586b\u5199k8s\u96c6\u7fa4\u4e2dnode\u540d\u79f0\uff0c \u534e\u4e3a\u4e91\u8bf7\u786e\u8ba4\u5b89\u88c5\u8282\u70b9\u53ef\u4ee5\u8fde\u63a5\u5916\u7f51\u3002"),rules:[{required:!0,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(v.Z,null)))),t.createElement("div",{className:"rainbond_storage"},t.createElement("div",{className:"rainbond_handelTitle"},t.createElement("div",null,t.createElement("h4",{className:"rainbond_titles"},"SFS \u5b58\u50a8:")),t.createElement("div",{className:"descs"},"(\u975e\u5fc5\u586b) \u6839\u636e\u81ea\u8eab\u9700\u6c42\uff0c\u5728\u534e\u4e3a\u4e91\u5b98\u7f51\u51c6\u5907\u597dSFS\u6587\u4ef6\u7cfb\u7edf\uff0c\u7528\u4e8e\u6301\u4e45\u5316\u6570\u636e\uff0c",t.createElement("a",{target:"_blank",href:"https://support.huaweicloud.com/qs-sfs/zh-cn_topic_0034428727.html"},"\u8be6\u7ec6\u914d\u7f6e\u89c1\u5b98\u65b9\u6587\u6863\u3002"))),t.createElement("div",{className:"rainbond_ha"},t.createElement("div",{className:"rainbond_rowsLefts"},t.createElement("div",{className:"rainbond_rows_rwxs"},t.createElement("span",{className:"rainbond_spanTitles"},"\u6302\u8f7d\u70b9\u5730\u5740"),t.createElement(i.Z.Item,{name:"server",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_inputs",placeholder:"\u8bf7\u586b\u5199\u6302\u8f7d\u70b9\u5730\u5740  \u4f8b\uff1a192.168.0.12"}))),t.createElement("div",{className:"rainbond_rows"},t.createElement("span",{className:"rainbond_spanTitles"},"\u6302\u8f7d\u70b9\u8def\u5f84"),t.createElement(i.Z.Item,{name:"path",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_inputs",placeholder:"\u8bf7\u586b\u5199\u6302\u8f7d\u70b9\u8def\u5f84  \u4f8b\uff1a/"})))))),t.createElement("div",{className:"rainbond_storage"},t.createElement("div",{className:"rainbond_handelTitle"},t.createElement("div",null,t.createElement("h4",{className:"rainbond_titles"},"RDS \u6570\u636e\u5e93:")),t.createElement("div",{className:"descs"},"(\u975e\u5fc5\u586b) \u6839\u636e\u81ea\u8eab\u9700\u6c42\uff0c\u5728\u534e\u4e3a\u4e91\u5b98\u7f51\u51c6\u5907\u597d\u201c\u4e91\u6570\u636e\u5e93 RDS for MySQL 8.0\u201c\uff0c\u5e76\u5f00\u653e3306\u8fde\u63a5\u7aef\u53e3\uff0c\u767b\u5f55RDS\u521b\u5efa\uff0c\u6388\u6743\u7528\u6237\uff0c\u521b\u5efa\u597d\u76f8\u5bf9\u5e94\u7684\u6570\u636e\u5e93\uff0c",t.createElement("a",{target:"_blank",href:"https://support.huaweicloud.com/qs-rds/zh-cn_topic_0046585334.html"},"\u8be6\u7ec6\u914d\u7f6e\u89c1\u5b98\u65b9\u6587\u6863\u3002"))),t.createElement("div",{className:"rainbond_ha"},t.createElement("div",{className:"rainbond_rowsLefts"},t.createElement("div",{className:"rainbond_rowsTitle"},t.createElement("h5",{className:"rainbond_console"},"\u63a7\u5236\u53f0\u6570\u636e\u5e93: "),t.createElement("h5",{className:"rainbond_region"},"\u6570\u636e\u4e2d\u5fc3\u6570\u636e\u5e93: ")),t.createElement("div",{className:"rainbond_rows",style:{marginTop:"10px"}},t.createElement("span",{className:"rainbond_dataTitle"},"\u8fde\u63a5\u5730\u5740"),t.createElement("div",{className:"rainbond_databaseBox"},t.createElement(i.Z.Item,{name:"host1",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_dataInput",placeholder:"\u8bf7\u8f93\u5165\u6570\u636e\u5e93\u8fde\u63a5\u5730\u5740  \u4f8b\uff1a127.0.0.1"}))),t.createElement("div",{className:"rainbond_databaseBox"},t.createElement(i.Z.Item,{name:"host2",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_dataInput",placeholder:"\u8bf7\u8f93\u5165\u6570\u636e\u5e93\u8fde\u63a5\u5730\u5740  \u4f8b\uff1a127.0.0.1"})))),t.createElement("div",{className:"rainbond_rows"},t.createElement("span",{className:"rainbond_dataTitle"},"\u8fde\u63a5\u7aef\u53e3"),t.createElement("div",{className:"rainbond_databaseBox"},t.createElement(i.Z.Item,{name:"port1",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_dataInput",placeholder:"\u8bf7\u8f93\u5165\u8fde\u63a5\u7aef\u53e3  \u4f8b\uff1a3306"}))),t.createElement("div",{className:"rainbond_databaseBox"},t.createElement(i.Z.Item,{name:"port2",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_dataInput",placeholder:"\u8bf7\u8f93\u5165\u8fde\u63a5\u7aef\u53e3  \u4f8b\uff1a3306"})))),t.createElement("div",{className:"rainbond_rows"},t.createElement("span",{className:"rainbond_dataTitle"},"\u7528\u6237\u540d"),t.createElement("div",{className:"rainbond_databaseBox"},t.createElement(i.Z.Item,{name:"username1",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_dataInput",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d  \u4f8b\uff1aroot"}))),t.createElement("div",{className:"rainbond_databaseBox"},t.createElement(i.Z.Item,{name:"username2",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_dataInput",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d  \u4f8b\uff1aroot"})))),t.createElement("div",{className:"rainbond_rows"},t.createElement("span",{className:"rainbond_dataTitle"},"\u5bc6\u7801"),t.createElement("div",{className:"rainbond_databaseBox"},t.createElement(i.Z.Item,{name:"password1",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_dataInput",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),t.createElement("div",{className:"rainbond_databaseBox"},t.createElement(i.Z.Item,{name:"password2",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_dataInput",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})))),t.createElement("div",{className:"rainbond_rows"},t.createElement("span",{className:"rainbond_dataTitle"},"\u6570\u636e\u5e93\u540d\u79f0"),t.createElement("div",{className:"rainbond_databaseBox"},t.createElement(i.Z.Item,{name:"dbname1",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_dataInput",placeholder:"\u8bf7\u8f93\u5165\u6570\u636e\u5e93\u5e93\u540d\u79f0  \u4f8b\uff1aconsole"}))),t.createElement("div",{className:"rainbond_databaseBox"},t.createElement(i.Z.Item,{name:"dbname2",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_dataInput",placeholder:"\u8bf7\u8f93\u5165\u6570\u636e\u5e93\u5e93\u540d\u79f0  \u4f8b\uff1aregion"}))))))),t.createElement("div",{className:"rainbond_storage"},t.createElement("div",{className:"rainbond_handelTitle"},t.createElement("div",null,t.createElement("h4",{className:"rainbond_titles"},"\u5bb9\u5668\u955c\u50cf\u670d\u52a1:")),t.createElement("div",{className:"descs"},"(\u975e\u5fc5\u586b) \u6839\u636e\u81ea\u8eab\u9700\u6c42\uff0c\u5728\u534e\u4e3a\u4e91\u5b98\u7f51\u51c6\u5907\u597d\u201d\u5bb9\u5668\u955c\u50cf\u670d\u52a1SWR\u201c\uff0c\u6839\u636e\u63d0\u793a\u5f00\u901a\u4e4b\u540e\uff0c\u4f1a\u5f97\u5230\u4e00\u4e2a\u4ed3\u5e93\u57df\u540d\uff0c\u7ec4\u7ec7\u540d\u79f0\uff08\u6216\u547d\u540d\u7a7a\u95f4\uff09\uff0c\u767b\u5f55\u955c\u50cf\u4ed3\u5e93\u7684\u7528\u6237\u540d\uff0c\u5bc6\u7801\u3002")),t.createElement("div",{className:"rainbond_ha"},t.createElement("div",{className:"rainbond_rowsLefts"},t.createElement("div",{className:"rainbond_rows"},t.createElement("span",{className:"rainbond_spanTitles"},"\u955c\u50cf\u4ed3\u5e93\u57df\u540d"),t.createElement(i.Z.Item,{name:"domain",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"},{pattern:/^(?=^.{3,255}$)[a-zA-Z0-9*][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u57df\u540d\u683c\u5f0f"}]},t.createElement(c.Z,{className:"rainbond_inputs",placeholder:"\u8bf7\u8f93\u5165\u955c\u50cf\u4ed3\u5e93\u57df\u540d"}))),t.createElement("div",{className:"rainbond_rows"},t.createElement("span",{className:"rainbond_spanTitles"},"\u547d\u540d\u7a7a\u95f4"),t.createElement(i.Z.Item,{name:"namespace"},t.createElement(c.Z,{className:"rainbond_inputs",placeholder:"\u8bf7\u8f93\u5165\u547d\u540d\u7a7a\u95f4"}))),t.createElement("div",{className:"rainbond_rows"},t.createElement("span",{className:"rainbond_spanTitles"},"\u7528\u6237\u540d"),t.createElement(i.Z.Item,{name:"username",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_inputs",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}))),t.createElement("div",{className:"rainbond_rows"},t.createElement("span",{className:"rainbond_spanTitles"},"\u5bc6\u7801"),t.createElement(i.Z.Item,{name:"password",rules:[{required:!1,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(c.Z,{className:"rainbond_inputs",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})))))),h&&t.createElement(t.Fragment,null,t.createElement("div",{className:"rainbond_lines"},t.createElement("h4",{className:"rainbond_titles"},"Etcd: "),t.createElement("div",{className:"rainbond_ha"},t.createElement(f,{checked:"\u5173\u95ed\u914d\u7f6e"!==u||!1,onChange:function(){e.setState((function(e){return Object.assign({},e,{etcd_enabled:"\u81ea\u5b9a\u4e49\u914d\u7f6e"===u?"\u5173\u95ed\u914d\u7f6e":"\u81ea\u5b9a\u4e49\u914d\u7f6e"})}))},className:"checkableTag"},t.createElement("div",{className:"\u81ea\u5b9a\u4e49\u914d\u7f6e"===u?"checkableTag_text":"checkableTag_texts"},u)),"\u81ea\u5b9a\u4e49\u914d\u7f6e"!==u?t.createElement("div",{className:"rainbond_rowsLeft"},t.createElement("div",{className:"rainbond_rows"},t.createElement("span",{className:"rainbond_spanTitle"},"secret\u540d\u79f0"),t.createElement(i.Z.Item,{rules:[{required:!0,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}],name:"secretName"},t.createElement(c.Z,{className:"rainbond_inputs",placeholder:"\u8bf7\u8f93\u5165secret\u540d\u79f0  \u4f8b\uff1arbd-etcd-secret"}))),t.createElement(i.Z.Item,{name:"endpoints",rules:[{required:!0,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(N.Z,null))):t.createElement("div",{className:"desc"},"(\u975e\u5fc5\u586b) \u8bbe\u7f6e\u5916\u90e8\u72ec\u7acb\u7684 ETCD \u670d\u52a1\u7684\u8bbf\u95ee\u5730\u5740\u3002"))),t.createElement("div",{className:"rainbond_lines"},t.createElement("h4",{className:"rainbond_titles"},"\u6784\u5efa\u8282\u70b9"),t.createElement("div",{className:"rainbond_ha"},t.createElement(f,{checked:"\u5173\u95ed\u914d\u7f6e"!==p||!1,onChange:function(){e.setState((function(e){return Object.assign({},e,{node_enabled:"\u81ea\u5b9a\u4e49\u914d\u7f6e"===p?"\u5173\u95ed\u914d\u7f6e":"\u81ea\u5b9a\u4e49\u914d\u7f6e"})}))},className:"checkableTag"},t.createElement("div",{className:"\u81ea\u5b9a\u4e49\u914d\u7f6e"===p?"checkableTag_text":"checkableTag_texts"},p)),"\u81ea\u5b9a\u4e49\u914d\u7f6e"!==p?t.createElement(i.Z.Item,{name:"nodesForChaos",rules:[{required:!0,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]},t.createElement(E.Z,null)):t.createElement("div",{className:"desc"},"(\u975e\u5fc5\u586b) \u8bbe\u7f6e\u6e90\u7801\u6784\u5efa\u7684\u8282\u70b9\uff0c\u8282\u70b9\u540d\u662f Kubernetes \u7684 Nodename\u3002")))),r&&t.createElement("div",{className:"rainbond_copyContent"},t.createElement(m.Z,{className:n?"rainbond_iconCopys":"rainbond_iconCopy",onClick:function(){e.setState({copyColor:!0}),g()(l),b().fire({position:"center-center",icon:"success",title:"\u590d\u5236\u6210\u529f",showConfirmButton:!1,timer:1500})}}),o.length>0&&o.map((function(e,a){return t.createElement("span",{key:a,className:"rainbond_spanCommand"},e)}))),t.createElement("div",{className:"rainbond_btnBox"},t.createElement(i.Z.Item,{wrapperCol:{offset:0,span:20}},t.createElement(d.Z,{className:"rainbond_btn",loading:_,type:"primary",htmlType:"submit",onClick:this.reminder},"\u4e00\u952e\u751f\u6210\u5b89\u88c5\u547d\u4ee4"),t.createElement(d.Z,{className:"rainbond_btn",type:"primary",style:{marginLeft:"10px"},onClick:this.handleAdvanced}," ",h?"\u5173\u95ed\u9ad8\u7ea7\u914d\u7f6e":"\u5c55\u5f00\u9ad8\u7ea7\u914d\u7f6e")))))))},a}(t.Component),Z=(n(74181),n(23012));function I(){return t.createElement(s.Z,null,t.createElement(r.Z,null),t.createElement(C,null),t.createElement(Z.Z,null))}},74181:function(e,a){a.Z={heroBanner:"heroBanner_jHI5",width:"width_cDFa",rainbond_desc:"rainbond_desc_JUH0",docs:"docs_o6wt",btns:"btns_sUjO",section_first:"section_first_vqWd",section_second:"section_second_eJ0v",img_container:"img_container_lD0f",carousel_container:"carousel_container_sNSa",title:"title_spfF",nav_lists:"nav_lists_AoX7",nav_container:"nav_container_MQnJ",isMobieNav:"isMobieNav_ISP_",isMobieNavBar:"isMobieNavBar_yp86",mobile_nav_lists:"mobile_nav_lists_rlNJ",buttons:"buttons_Pntg",btnBox:"btnBox_wnJq",right_btns:"right_btns_MJkx",join_logos:"join_logos_V1nK",hover_imgs:"hover_imgs_BV_S",open_source:"open_source_sLKj",hide:"hide_s7ye",play_btn:"play_btn_OJeI",community_case:"community_case_aSwk",section_third:"section_third_Ps0_",how_rainbond:"how_rainbond_jjlr",dosc_logo:"dosc_logo_Q0wB",left_logo:"left_logo_c0U8",animate_arrow:"animate_arrow__mlS",desc:"desc_avSH",desc_title:"desc_title_VwZX",desc_detail:"desc_detail_YYyI",section_fouth:"section_fouth_niE9",mdHeader:"mdHeader_CqFG",nav_bar:"nav_bar_Y8f5",githubLogo:"githubLogo_Y2Bz",footer_container:"footer_container_d501",join_type:"join_type_R2mA",join_logo:"join_logo_GkR1",hover_img:"hover_img_scnV",join_detali:"join_detali_Q5Vd",copyright:"copyright_H1bV",mask_div:"mask_div_gT74",bili_video:"bili_video_UCNw",enterprise_logo:"enterprise_logo_geqY",section_experience:"section_experience_MMbX",experience_sort:"experience_sort_e2Jn",imgContainer:"imgContainer_HbEj",experience_sort_title:"experience_sort_title_JYon",experience_sort_desc:"experience_sort_desc_l3TM",section_why_rainbond:"section_why_rainbond_zc5O",how_rainbond_desc_container:"how_rainbond_desc_container_fxhL",how_rainbond_btn:"how_rainbond_btn_CDvb",how_rainbond_desc:"how_rainbond_desc_srtu",how_rainbond_desc_container_start:"how_rainbond_desc_container_start_GvwJ",active_btn:"active_btn_CdxB",default_btn:"default_btn_sWZu",second:"second_q32v",third:"third_PwnT",fouthBg:"fouthBg_IJig",know_rainbond_video:"know_rainbond_video_ckAz",know_rainbond_video_div:"know_rainbond_video_div_tI8l",know_rainbond_video_div_img:"know_rainbond_video_div_img_ZQdj",angle:"angle_YetL",rainbond_title:"rainbond_title_6UvE",rainbond_title_en:"rainbond_title_en_RMhh",rainbond_description:"rainbond_description_QwWd"}}}]);