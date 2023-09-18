"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[7775],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1981:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Rancher upgrades",title:""},i="Troubleshooting Rancher upgrades",c={unversionedId:"troubleshooting-rancher-upgrades",id:"version-1.3/troubleshooting-rancher-upgrades",title:"",description:"Upgrading to Rancher v2.7.2 will fail if Elemental clusters are defined. The rancher pod gets stuck in a crash loop (see https://github.com/rancher/rancher/issues/41145).",source:"@site/versioned_docs/version-1.3/troubleshooting-rancher-upgrades.md",sourceDirName:".",slug:"/troubleshooting-rancher-upgrades",permalink:"/troubleshooting-rancher-upgrades",draft:!1,tags:[],version:"1.3",frontMatter:{sidebar_label:"Rancher upgrades",title:""},sidebar:"docs",previous:{title:"Add a custom certificate",permalink:"/custom-certificate"},next:{title:"Restore",permalink:"/troubleshooting-restore"}},s={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting-rancher-upgrades"},"Troubleshooting Rancher upgrades"),(0,a.kt)("admonition",{title:"warning",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Upgrading to Rancher v2.7.2 will fail if Elemental clusters are defined. The rancher pod gets stuck in a crash loop (see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/41145"},"https://github.com/rancher/rancher/issues/41145"),").")),(0,a.kt)("p",null,"Note that the issue is present only if at least one Elemental cluster is defined."),(0,a.kt)("p",null,"To workaround the issue create an empty ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamicschemas.management.cattle.io")," resource named ",(0,a.kt)("inlineCode",{parentName:"p"},"machineinventoryselectortemplate"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f - <<EOF\nkind: DynamicSchema\napiVersion: management.cattle.io/v3\nmetadata:\n  name: machineinventoryselectortemplate\nEOF\n\n")),(0,a.kt)("p",null,"The crash loop will stop and Rancher upgrade will complete successfully."))}m.isMDXComponent=!0}}]);