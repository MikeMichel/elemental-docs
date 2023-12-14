"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[4619],{2961:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var l=t(5893),s=t(1151);const a={sidebar_label:"Elemental plans",title:""},i=void 0,o={id:"elemental-plans",title:"",description:"Introduction",source:"@site/docs/elemental-plans.md",sourceDirName:".",slug:"/elemental-plans",permalink:"/next/elemental-plans",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Elemental plans",title:""},sidebar:"docs",previous:{title:"Customize Elemental Install",permalink:"/next/customizing"},next:{title:"Cloud-config reference",permalink:"/next/cloud-config-reference"}},r={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Types of Plans",id:"types-of-plans",level:2},{value:"Adding local plans on Elemental",id:"adding-local-plans-on-elemental",level:2},{value:"Plan examples",id:"plan-examples",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Head:t,TabItem:a,Tabs:i}=n;return t||p("Head",!0),a||p("TabItem",!0),i||p("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{children:(0,l.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/elemental-plans"})}),"\n",(0,l.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,l.jsxs)(n.p,{children:["Elemental uses the ",(0,l.jsx)(n.a,{href:"https://github.com/rancher/system-agent",children:"Rancher System Agent"}),", renamed to Elemental System Agent, to initially bootstrap the node with a simple plan."]}),"\n",(0,l.jsx)(n.p,{children:"The plan will apply the following configurations:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Set some labels for the node"}),"\n",(0,l.jsxs)(n.li,{children:["Set the proper hostname according to the ",(0,l.jsx)(n.code,{children:"MachineInventory"})," value"]}),"\n",(0,l.jsx)(n.li,{children:"Install the default Rancher System Agent from Rancher Server, and install the proper Kubernetes components"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["The bootstrap service also accepts local plans stored under ",(0,l.jsx)(n.code,{children:"/var/lib/elemental/agent/plans"}),". Any plan written\nin there will also be applied during the initial node start after the installation is completed."]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["The local plans run only during the initial Elemental bootstrap ",(0,l.jsx)(n.strong,{children:"before"})," Kubernetes is installed on the node."]})}),"\n",(0,l.jsx)(n.h2,{id:"types-of-plans",children:"Types of Plans"}),"\n",(0,l.jsx)(n.p,{children:"The type of plans that Elemental can use are:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"One time instructions: Only run once"}),"\n",(0,l.jsx)(n.li,{children:"Periodic instructions: They run periodically"}),"\n",(0,l.jsx)(n.li,{children:"Files: Creates files"}),"\n",(0,l.jsx)(n.li,{children:"Probes: http probes"}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Both one time instructions and periodic instructions can run either a direct command or a docker image."})}),"\n",(0,l.jsx)(n.h2,{id:"adding-local-plans-on-elemental",children:"Adding local plans on Elemental"}),"\n",(0,l.jsxs)(n.p,{children:["You can add local plans to Elemental as part of the ",(0,l.jsx)(n.code,{children:"MachineRegistration"})," CRD, in the ",(0,l.jsx)(n.code,{children:"cloud-config"})," section as follows:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n      write_files:\n        - path: /var/lib/elemental/agent/plans/mycustomplan.plan\n          permissions: "0600"\n          content: |\n            {"instructions":\n                [\n                  {\n                    "name":"set hostname",\n                    "command":"hostnamectl",\n                    "args": ["set-hostname", "myHostname"]\n                  },\n                  {\n                    "name":"stop sshd service",\n                    "command":"systemctl",\n                    "args": ["stop", "sshd"]\n                  }\n                ]\n            }\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineName: my-machine\n  machineInventoryLabels:\n    element: fire\n'})}),"\n",(0,l.jsx)(n.h2,{id:"plan-examples",children:"Plan examples"}),"\n",(0,l.jsxs)(n.p,{children:["The following plans are provided as a quick reference and are not guaranteed to work in your environment. To learn more about plans please check ",(0,l.jsx)(n.a,{href:"https://github.com/rancher/system-agent",children:"Rancher System Agent"}),"."]}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)(a,{value:"example1",label:"Example 1: one time instructions",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{"instructions":\n    [\n        {\n            "name":"set hostname",\n            "command":"hostnamectl",\n            "args": ["set-hostname", "myHostname"]\n        },\n        {\n            "name":"stop sshd service",\n            "command":"systemctl",\n            "args": ["stop", "sshd"]\n        }\n    ]\n}\n'})})}),(0,l.jsx)(a,{value:"example2",label:"Example 2: periodic instructions",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{"periodicInstructions":\n    [\n        {\n            "name":"set hostname",\n            "image":"ghcr.io/rancher-sandbox/elemental-example-plan:main"\n            "command": "run.sh"\n        }\n    ]\n}\n'})})}),(0,l.jsx)(a,{value:"example3",label:"Example 3: files",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{"files":\n    [\n        {\n            "content":"Welcome to the system",\n            "path":"/etc/motd",\n            "permissions": "0644"\n        }\n    ]\n}\n'})})}),(0,l.jsx)(a,{value:"example4",label:"Example 4: probes",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{"probes":\n    "probe1": {\n        "name": "Service Up",\n        "httpGet": {\n            "url": "http://10.0.0.1/healthz",\n            "insecure": "false",\n            "clientCert": "....",\n            "clientKey": "....",\n            "caCert": "....."\n        }   \n    }\n}\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var l=t(7294);const s={},a=l.createContext(s);function i(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);