"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[7844],{5861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(5893),s=t(1151);const a={sidebar_label:"SeedImage reference",title:""},o="SeedImage reference",i={id:"seedimage-reference",title:"",description:"A SeedImage resource allows to build an ISO that can be used to install Elemental onto a node.",source:"@site/docs/seedimage-reference.md",sourceDirName:".",slug:"/seedimage-reference",permalink:"/next/seedimage-reference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"SeedImage reference",title:""},sidebar:"docs",previous:{title:"Cluster reference",permalink:"/next/cluster-reference"},next:{title:"Elemental Operator Helm Chart",permalink:"/next/elementaloperatorchart-reference"}},c={},d=[];function l(e){const n={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:t,Head:a}=n;return t||u("Details",!0),a||u("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/seedimage-reference"})}),"\n",(0,r.jsx)(n.h1,{id:"seedimage-reference",children:"SeedImage reference"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"SeedImage"})," resource allows to build an ISO that can be used to install Elemental onto a node.",(0,r.jsx)(n.br,{}),"\n","It requires a ",(0,r.jsx)(n.code,{children:"baseImage"}),", i.e., a URL to an Elemental installation ISO, and a ",(0,r.jsx)(n.code,{children:"registrationRef"})," reference to a ",(0,r.jsx)(n.code,{children:"MachineRegistration"})," resource, from which the registration part of the Elemental configuration is extracted and injected in the ISO to produce the final ",(0,r.jsx)(n.em,{children:"seed image"}),".",(0,r.jsx)(n.br,{}),"\n","It is also possible to inject ISO customizations in the ",(0,r.jsx)(n.code,{children:"cloud-config"})," field."]}),"\n",(0,r.jsxs)(n.p,{children:["Once the seed image is ready, the download URL is shared in the ",(0,r.jsx)(n.code,{children:".status.downloadURL"})," field.\nIt stays available for download for ",(0,r.jsx)(n.code,{children:"cleanupAfterMinutes"})," minutes (default is ",(0,r.jsx)(n.code,{children:"60"}),", 1 hour), after which it is deleted.",(0,r.jsx)(n.br,{}),"\n","Setting ",(0,r.jsx)(n.code,{children:"retriggerBuild"})," to ",(0,r.jsx)(n.code,{children:"true"})," retriggers the seed image build process while setting ",(0,r.jsx)(n.code,{children:"cleanupAfterMinutes"})," to ",(0,r.jsx)(n.code,{children:"0"})," keeps the seed image around till the ",(0,r.jsx)(n.code,{children:"SeedImage"})," resource is deleted."]}),"\n",(0,r.jsx)(n.admonition,{title:"seed images may fill up local storage",type:"warning",children:(0,r.jsxs)(n.p,{children:["The seed images are kept on the node's local storage: pay attention to the number of ",(0,r.jsx)(n.code,{children:"SeedImage"})," resources you start concurrently and to the ones you may leave around with the auto-cleanup feature disabled (",(0,r.jsx)(n.code,{children:"cleanupAfterMinutes"})," = ",(0,r.jsx)(n.code,{children:"0"}),") as you may exhaust the storage on your cluster nodes."]})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"SeedImage"})," resource tracks the seed image build process through two status conditions:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ready"}),": tracks the creation of all the required child resources that perform the actual build process."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SeedImageReady"}),": tracks the status of the build process in the child resources."]}),"\n"]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: SeedImage\nmetadata:\n  name: ...\n  namespace: ...\nspec:\n  baseImage: ...\n  cloud-config: ...\n  registrationRef:\n    name: ...\n    namespace: ...\n  cleanupAfterMinutes: ...\n  retriggerBuild: ...\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(7294);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);