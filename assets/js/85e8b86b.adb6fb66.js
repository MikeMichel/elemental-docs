"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[2308],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=l,h=c["".concat(i,".").concat(d)]||c[d]||u[d]||r;return t?a.createElement(h,o(o({ref:n},m),{},{components:t})):a.createElement(h,o({ref:n},m))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const r={sidebar_label:"Elemental plans",title:""},o=void 0,s={unversionedId:"elemental-plans",id:"version-stable/elemental-plans",title:"",description:"Introduction",source:"@site/versioned_docs/version-stable/elemental-plans.md",sourceDirName:".",slug:"/elemental-plans",permalink:"/elemental-plans",draft:!1,tags:[],version:"stable",frontMatter:{sidebar_label:"Elemental plans",title:""},sidebar:"docs",previous:{title:"Customize Elemental Install",permalink:"/customizing"},next:{title:"Cloud-config reference",permalink:"/cloud-config-reference"}},i={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Types of Plans",id:"types-of-plans",level:2},{value:"Adding local plans on Elemental",id:"adding-local-plans-on-elemental",level:2},{value:"Plan examples",id:"plan-examples",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",n)},c=m("Tabs"),u=m("TabItem"),d={toc:p},h="wrapper";function b(e){let{components:n,...t}=e;return(0,l.kt)(h,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Elemental uses the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-agent"},"Rancher System Agent"),", renamed to Elemental System Agent, to initially bootstrap the node with a simple plan."),(0,l.kt)("p",null,"The plan will apply the following configurations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Set some labels for the node"),(0,l.kt)("li",{parentName:"ul"},"Set the proper hostname according to the ",(0,l.kt)("inlineCode",{parentName:"li"},"MachineInventory")," value"),(0,l.kt)("li",{parentName:"ul"},"Install the default Rancher System Agent from Rancher Server, and install the proper Kubernetes components")),(0,l.kt)("p",null,"The bootstrap service also accepts local plans stored under ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/elemental/agent/plans"),". Any plan written\nin there will also be applied during the initial node start after the installation is completed."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The local plans run only during the initial Elemental bootstrap ",(0,l.kt)("strong",{parentName:"p"},"before")," Kubernetes is installed on the node.")),(0,l.kt)("h2",{id:"types-of-plans"},"Types of Plans"),(0,l.kt)("p",null,"The type of plans that Elemental can use are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"One time instructions: Only run once"),(0,l.kt)("li",{parentName:"ul"},"Periodic instructions: They run periodically"),(0,l.kt)("li",{parentName:"ul"},"Files: Creates files"),(0,l.kt)("li",{parentName:"ul"},"Probes: http probes")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Both one time instructions and periodic instructions can run either a direct command or a docker image.")),(0,l.kt)("h2",{id:"adding-local-plans-on-elemental"},"Adding local plans on Elemental"),(0,l.kt)("p",null,"You can add local plans to Elemental as part of the ",(0,l.kt)("inlineCode",{parentName:"p"},"MachineRegistration")," CRD, in the ",(0,l.kt)("inlineCode",{parentName:"p"},"cloud-config")," section as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n      write_files:\n        - path: /var/lib/elemental/agent/plans/mycustomplan.plan\n          permissions: "0600"\n          content: |\n            {"instructions":\n                [\n                  {\n                    "name":"set hostname",\n                    "command":"hostnamectl",\n                    "args": ["set-hostname", "myHostname"]\n                  },\n                  {\n                    "name":"stop sshd service",\n                    "command":"systemctl",\n                    "args": ["stop", "sshd"]\n                  }\n                ]\n            }\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineName: my-machine\n  machineInventoryLabels:\n    location: "europe"\n')),(0,l.kt)("h2",{id:"plan-examples"},"Plan examples"),(0,l.kt)("p",null,"The following plans are provided as a quick reference and are not guaranteed to work in your environment. To learn more about plans please check ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-agent"},"Rancher System Agent"),"."),(0,l.kt)(c,{mdxType:"Tabs"},(0,l.kt)(u,{value:"example1",label:"Example 1: one time instructions",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{"instructions":\n    [\n        {\n            "name":"set hostname",\n            "command":"hostnamectl",\n            "args": ["set-hostname", "myHostname"]\n        },\n        {\n            "name":"stop sshd service",\n            "command":"systemctl",\n            "args": ["stop", "sshd"]\n        }\n    ]\n}\n'))),(0,l.kt)(u,{value:"example2",label:"Example 2: periodic instructions",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{"periodicInstructions":\n    [\n        {\n            "name":"set hostname",\n            "image":"ghcr.io/rancher-sandbox/elemental-example-plan:main"\n            "command": "run.sh"\n        }\n    ]\n}\n'))),(0,l.kt)(u,{value:"example3",label:"Example 3: files",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{"files":\n    [\n        {\n            "content":"Welcome to the system",\n            "path":"/etc/motd",\n            "permissions": "0644"\n        }\n    ]\n}\n'))),(0,l.kt)(u,{value:"example4",label:"Example 4: probes",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{"probes":\n    "probe1": {\n        "name": "Service Up",\n        "httpGet": {\n            "url": "http://10.0.0.1/healthz",\n            "insecure": "false",\n            "clientCert": "....",\n            "clientKey": "....",\n            "caCert": "....."\n        }   \n    }\n}\n')))))}b.isMDXComponent=!0}}]);