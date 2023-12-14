"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[710],{8953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(5893),i=t(1151);const o={sidebar_label:"Inventory Management",title:"",version_badge:"1.3.0"},r=void 0,c={id:"inventory-management",title:"",description:"Inventory Management",source:"@site/versioned_docs/version-1.2/inventory-management.md",sourceDirName:".",slug:"/inventory-management",permalink:"/1.2/inventory-management",draft:!1,unlisted:!1,tags:[],version:"1.2",frontMatter:{sidebar_label:"Inventory Management",title:"",version_badge:"1.3.0"},sidebar:"docs",previous:{title:"Hardware Labels",permalink:"/1.2/hardwarelabels"},next:{title:"Backup",permalink:"/1.2/backup"}},s={},l=[{value:"Inventory Management",id:"inventory-management",level:2},{value:"MachineInventory",id:"machineinventory",level:3},{value:"Reference",id:"reference",level:4},{value:"MachineRegistration",id:"machineregistration",level:3},{value:"Reference",id:"reference-1",level:4}];function d(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/inventory-management"})}),"\n",(0,a.jsx)(n.h2,{id:"inventory-management",children:"Inventory Management"}),"\n",(0,a.jsx)(n.p,{children:"The Elemental operator can hold an inventory of machines and\nthe mapping of the machine to it's configuration and assigned cluster."}),"\n",(0,a.jsx)(n.h3,{id:"machineinventory",children:"MachineInventory"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"MachineInventory"})," holds all the relevant information for a registered machine.",(0,a.jsx)(n.br,{}),"\n","Upon successful registration, the ",(0,a.jsx)(n.code,{children:"MachineInventory"})," will inherit all ",(0,a.jsx)(n.code,{children:"machineInventoryLabels"})," defined in the related ",(0,a.jsx)(n.code,{children:"MachineRegistration"}),".",(0,a.jsx)(n.br,{}),"\n","Additionally, the machine ",(0,a.jsx)(n.code,{children:"annotations"})," will also be updated on each successful registration."]}),"\n",(0,a.jsx)(n.p,{children:"By default, Elemental Teal machines will attempt a registration update every 24 hours to update labels and annotations."}),"\n",(0,a.jsx)(n.h4,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventory\nmetadata:\n  # Machine annotations can be useful to identify hosts\n  annotations:\n    elemental.cattle.io/auth: tpm\n    elemental.cattle.io/registration-ip: 192.168.122.152\n  labels:\n    # A label inherited from the MachineRegistration definition\n    element: fire\n    # Generic SMBIOS labels that are typically populated with\n    # the MachineRegister approach\n    machineUUID: f266c64b-3972-40e7-9937-3dc4a311436c\n    manufacturer: QEMU\n    productName: Standard-PC-Q35-ICH9-2009\n    serialNumber: Not-Specified\n    # Custom labels can be applied to each MachineInventory\n    myCustomLabel: foo \n  name: m-479ab68e-00ff-4081-a731-5b1a76610289\n  # The namespace must match the namespace of the cluster\n  # assigned to the clusters.provisioning.cattle.io resource\n  namespace: fleet-default\n  # A reference to the MachineInventorySelector that links the \n  # machine to a Cluster definition\n  ownerReferences:\n  - apiVersion: elemental.cattle.io/v1beta1\n    controller: true\n    kind: MachineInventorySelector\n    name: fire-machine-selector-qcn7d\n    uid: 0a1f751e-4ca9-4a0d-919a-97ba1f434d12\nspec:\n  # The hash of the TPM EK public key. This is used if you are\n  # using TPM2 to identifiy nodes. Nodes can report their TPM\n  # hash by using the MachineRegistration.\n  tpmHash: d68795c6192af9922692f050b...\n"})}),"\n",(0,a.jsx)(n.h3,{id:"machineregistration",children:"MachineRegistration"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"MachineRegistration"})," holds information on how to install and configure all connected Elemental Teal machines."]}),"\n",(0,a.jsxs)(n.p,{children:["It's possible to update the ",(0,a.jsx)(n.code,{children:"spec.machineInventoryLabels"})," and ",(0,a.jsx)(n.code,{children:"spec.machineInventoryAnnotations"})," and this will be applied to all registered machines.\nBy default, Elemental Teal machines will attempt a registration update every 24 hours to update labels and annotations."]}),"\n",(0,a.jsxs)(n.p,{children:["While it's possible to modify the ",(0,a.jsx)(n.code,{children:"spec.config"})," definition, updates to the ",(0,a.jsx)(n.code,{children:"spec.config"})," will be ignored by machines that already completed installation.\nMachines that couldn't complete the installation will try again every 30 minutes by reloading the remote ",(0,a.jsx)(n.code,{children:"MachineRegistration"})," definition. This can be useful to correct ",(0,a.jsx)(n.code,{children:"spec.config"})," mistakes that prevent successful installation (for ex. ",(0,a.jsx)(n.code,{children:"spec.config.elemental.install.device"}),"), without having to create a new ",(0,a.jsx)(n.code,{children:"MachineRegistration"})," and a new ISO."]}),"\n",(0,a.jsx)(n.h4,{id:"reference-1",children:"Reference"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: fire-nodes\n  # The namespace must match the namespace of the cluster\n  # assigned to the clusters.provisioning.cattle.io resource\n  namespace: fleet-default\nspec:\n  # The cloud config that will be used to provision the node\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  # Labels to be added to the created MachineInventory object\n  machineInventoryLabels:\n    element: fire\n    manufacturer: "${System Information/Manufacturer}"\n    productName: "${System Information/Product Name}"\n    serialNumber: "${System Information/Serial Number}"\n    machineUUID: "${System Information/UUID}"\n  # Annotations to be added to the created MachineInventory object\n  machineInventoryAnnotations: {}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var a=t(7294);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);