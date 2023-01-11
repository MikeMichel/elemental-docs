"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[2651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=m(n),c=r,d=h["".concat(s,".").concat(c)]||h[c]||u[c]||i;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>w,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var a=n(7462),r=(n(7294),n(3905)),i=n(6854),l=n(4713);var o=n(3367);const s={sidebar_label:"Quickstart",title:""},m="Quickstart",p={unversionedId:"quickstart",id:"quickstart",title:"",description:"Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/next/quickstart",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Quickstart",title:""},sidebar:"docs",previous:{title:"Overview",permalink:"/next/"},next:{title:"Architecture",permalink:"/next/architecture"}},u={},h=[{value:"Introduction",id:"introduction",level:2},{value:"What is Elemental Teal ?",id:"what-is-elemental-teal-",level:3},{value:"Elemental on x86-64 hardware",id:"elemental-on-x86-64-hardware",level:4},{value:"Elemental on ARM hardware",id:"elemental-on-arm-hardware",level:4},{value:"Elemental on other hardware",id:"elemental-on-other-hardware",level:4},{value:"What is the Rancher Elemental Stack ?",id:"what-is-the-rancher-elemental-stack-",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Preparing the cluster",id:"preparing-the-cluster",level:2},{value:"Prepare your kubernetes resources",id:"prepare-your-kubernetes-resources",level:2},{value:"Preparing the installation (seed) image",id:"preparing-the-installation-seed-image",level:2},{value:"Retrieving the prebuilt seed image",id:"retrieving-the-prebuilt-seed-image",level:4},{value:"Verifying the download",id:"verifying-the-download",level:5},{value:"Writing the seed image to a USB stick",id:"writing-the-seed-image-to-a-usb-stick",level:4},{value:"Injecting the registration information",id:"injecting-the-registration-information",level:4},{value:"Booting the Raspberry Pi",id:"booting-the-raspberry-pi",level:4},{value:"Selecting the right machines to join a cluster",id:"selecting-the-right-machines-to-join-a-cluster",level:3},{value:"How can I choose the kubernetes version and deployer for the cluster?",id:"how-can-i-choose-the-kubernetes-version-and-deployer-for-the-cluster",level:2},{value:"How can I follow what is going on behind the scenes?",id:"how-can-i-follow-what-is-going-on-behind-the-scenes",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("Tabs"),k=c("TabItem"),g=c("CodeBlock"),b={toc:h};function w(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,"Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher\nwith the only help of an Elemental Teal iso"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"what-is-elemental-teal-"},"What is Elemental Teal ?"),(0,r.kt)("p",null,'Elemental Teal is the combination of "SLE Micro for Rancher" with the Rancher Elemental stack.'),(0,r.kt)("p",null,'SLE Micro for Rancher is a containerized and "stripped to the bones"\noperating system layer. At its core, it only requires grub2, dracut, a kernel, and systemd.'),(0,r.kt)("p",null,"Its sole purpose is to run Kubernetes (k3s or RKE2), with everything controlled through Rancher Manager."),(0,r.kt)("p",null,"Elemental Teal is built in the ",(0,r.kt)("a",{parentName:"p",href:"https://build.opensuse.org/package/show/isv:Rancher:Elemental:Stable:Teal53/node-image"},"openSUSE Build Service"),"\nand available through the ",(0,r.kt)("a",{parentName:"p",href:"https://registry.opensuse.org/cgi-bin/cooverview?srch_term=project%3D%5Eisv%3ARancher%3AElemental%3AStable+container%3D.*"},"openSUSE Registry"),"."),(0,r.kt)("h4",{id:"elemental-on-x86-64-hardware"},"Elemental on x86-64 hardware"),(0,r.kt)("p",null,"Elemental Teal is production ready and fully supported on x86-64 with Rancher v2.7.0."),(0,r.kt)("h4",{id:"elemental-on-arm-hardware"},"Elemental on ARM hardware"),(0,r.kt)("p",null,"ARM (aarch64) is functional in the development version. ARM is currently only tested on Raspberry Pi 4 Model B with k3s 1.24.8 (or later). We welcome feedback !"),(0,r.kt)("h4",{id:"elemental-on-other-hardware"},"Elemental on other hardware"),(0,r.kt)("p",null,"Elemental is currently targeting 'edge' scenarios and does therefore not support other hardware.\nWe will revise this as the market evolves."),(0,r.kt)("h3",{id:"what-is-the-rancher-elemental-stack-"},"What is the Rancher Elemental Stack ?"),(0,r.kt)("p",null,"The Elemental Stack consists of some packages on top of SLE Micro for Rancher"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elemental-toolkit")," - includes a set of OS utilities to enable OS management via containers. Includes dracut modules, bootloader configuration, cloud-init style configuration services, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elemental-operator")," - this connects to Rancher Manager and handles machineRegistration and machineInventory CRDs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elemental-register")," - this registers machines via machineRegistrations and installs them via elemental-cli"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elemental-cli")," - this installs any elemental-toolkit based derivative. Basically an installer based on our A/B install and upgrade system"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rancher-system-agent"),' - runs on the installed system and gets instructions ("Plans") from Rancher Manager what to install and run on the system')),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Rancher server (v2.7.0) configured (server-url set)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To configure the Rancher ",(0,r.kt)("inlineCode",{parentName:"li"},"server-url")," please check the ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/#first-log-in"},"Rancher docs")))),(0,r.kt)("li",{parentName:"ul"},"A machine (bare metal or virtualized) with TPM 2.0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Hint 1: Libvirt allows setting virtual TPMs for virtual machines ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.github.io/elemental/tpm/#add-tpm-module-to-virtual-machine"},"example here")),(0,r.kt)("li",{parentName:"ul"},"Hint 2: You can enable TPM emulation on bare metal machines missing the TPM 2.0 module ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.github.io/elemental/tpm/#add-tpm-emulation-to-bare-metal-machine"},"example here")),(0,r.kt)("li",{parentName:"ul"},"Hint 3: Make sure you're using UEFI (not BIOS) on x86-64, or the ISO won't boot"))),(0,r.kt)("li",{parentName:"ul"},"Helm Package Manager (",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"https://helm.sh/"),")"),(0,r.kt)("li",{parentName:"ul"},"Docker (for ISO manipulation)"),(0,r.kt)("li",{parentName:"ul"},"For ARM - One SD-card (32 GB or more, must be ",(0,r.kt)("strong",{parentName:"li"},"fast")," - 40MB/s write speed is acceptable) and a USB-stick for installation")),(0,r.kt)("h2",{id:"preparing-the-cluster"},"Preparing the cluster"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"elemental-operator")," is the management endpoint, running the management\ncluster and taking care of creating inventories, registrations for machines and much more."),(0,r.kt)("p",null,"We will use the Helm package manager to install the elemental-operator chart into our cluster."),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(k,{value:"stableOperator",label:"Stable version (x86-64 only)",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/stable/charts/rancher/elemental-operator-chart\n"))),(0,r.kt)(k,{value:"develOperator",label:"Development version (x86-64, ARM64 (Raspberry Pi 4))",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Reminder",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The development version is 'best effort' supported. We welcome feedback via Slack or Github issues. But it might be a bit rough as we move the stack forward.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"helm upgrade --create-namespace -n cattle-elemental-system --install --set image.imagePullPolicy=Always elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/dev/charts/rancher/elemental-operator-chart\n")))),(0,r.kt)("p",null,"There is a few options that can be set in the chart install but that is out of scope for this document. You can see all the values on the chart ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-operator/blob/main/chart/values.yaml"},"values.yaml")),(0,r.kt)("p",null,"Now after a few seconds you should see the operator pod appear on the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-elemental-system")," namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl get pods -n cattle-elemental-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nelemental-operator-64f88fc695-b8qhn   1/1     Running   0          16s\n")),(0,r.kt)("h2",{id:"prepare-your-kubernetes-resources"},"Prepare your kubernetes resources"),(0,r.kt)("p",null,"Node deployment starts with a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration"),", identifying a set of machines sharing the same configuration (disk drives, network, etc.)"),(0,r.kt)("p",null,"Then it continues with having a Cluster resource that uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventorySelectorTemplate")," to know which machines are for that cluster."),(0,r.kt)("p",null,"This selector is a simple matcher based on labels set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory"),", so if your selector is matching the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-id")," key with a value ",(0,r.kt)("inlineCode",{parentName:"p"},"myId"),"\nand your ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," has that same key with that value, it will match and be bootstrapped as part of the cluster."),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(k,{value:"manualYaml",label:"Manually creating the resource yamls",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"You will need to create the following files."),(0,r.kt)(g,{language:"yaml",title:"selector.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},o.Z),(0,r.kt)("p",null,"As you can see this is a very simple selector that checks the key ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," for the value ",(0,r.kt)("inlineCode",{parentName:"p"},"europe")),(0,r.kt)(g,{language:"yaml",title:"cluster.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},i.Z),(0,r.kt)("p",null,"As you can see we are setting that our ",(0,r.kt)("inlineCode",{parentName:"p"},"machineConfigRef")," is of Kind ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventorySelectorTemplate")," with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"my-machine-selector"),", which matches the selector we created."),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(k,{value:"normalRegistration",label:"Registration",default:!0,mdxType:"TabItem"},(0,r.kt)(g,{language:"yaml",title:"registration.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},l.Z)),(0,r.kt)(k,{value:"rpiRegistration",label:"Registration for Raspberry Pi",default:!0,mdxType:"TabItem"},(0,r.kt)(g,{language:"yaml",title:"rpi-registration.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/mmcblk0\n        debug: true\n        disable-boot-entry: true\n      registration:\n        emulate-tpm: true\n  machineInventoryLabels:\n    manufacturer: "${System Information/Manufacturer}"\n    productName: "${System Information/Product Name}"\n    serialNumber: "${System Information/Serial Number}"\n    machineUUID: "${System Information/UUID}"\n'),(0,r.kt)("p",null,"For deployment on Raspberry Pi, you need to enable emulated TPM\n(except you have ",(0,r.kt)("a",{parentName:"p",href:"https://thepihut.com/products/letstrust-tpm-for-raspberry-pi"},"a hardware TPM for Raspberry Pi"),").\nYou also need to disable writing to the EFI store (since Raspberry Pi doesn't have one) via ",(0,r.kt)("inlineCode",{parentName:"p"},"disable-boot-entry: true"),"."))),(0,r.kt)("p",null,"This creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration")," which will provide a unique URL which we will use with ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-register")," to register\nthe node during installation, so the operator can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," which will be using to bootstrap the node.\nSee that we set the label that match our selector here already, although it can always be added later to the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory"),"."),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to modify the registration.yaml above to set the proper install device to point to a valid device based on your node configuration (i.e. /dev/sda, /dev/vda, /dev/nvme0, etc...)."),(0,r.kt)("p",{parentName:"admonition"},"The SD-card on a Raspberry Pi is usually ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/mmcblk0"),".")),(0,r.kt)("p",null,"Now that we have all the configuration to create the proper resources in Kubernetes just apply them"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f selector.yaml \nkubectl apply -f cluster.yaml \nkubectl apply -f registration.yaml\n"))),(0,r.kt)(k,{value:"repofiles",label:"Using quickstart files from Elemental docs repo directly",mdxType:"TabItem"},(0,r.kt)("p",null,"You can directly apply the quickstart example resource files from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-docs"},"Elemental docs repository")),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This assumes that your Node will have a ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/sda")," disk available as that is the default device selected in those files.\nIf your node doesnt have that device you will have to manually create the registration.yaml file or download the one from the repo and modify before applying")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/selector.yaml\nkubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/cluster.yaml\nkubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/registration.yaml\n")))),(0,r.kt)("h2",{id:"preparing-the-installation-seed-image"},"Preparing the installation (seed) image"),(0,r.kt)("p",null,"Now this is the last step, we need to prepare an Elemental Teal seed image that includes the initial registration config, so\nit can be auto registered, installed and fully deployed as part of our cluster. The contents of the file are nothing\nmore than the registration url that the node needs to register and the proper server certificate, so it can connect securely."),(0,r.kt)("p",null,"This seed image can then be used to provision an infinite number of machines."),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration")," provides the needed config in its resource as part of its ",(0,r.kt)("inlineCode",{parentName:"p"},"Status.RegistrationURL"),",\nso we can use that url to obtain the proper yaml needed for the seed image."),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(k,{value:"oneLiner",label:"One liner",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},'wget --no-check-certificate `kubectl get machineregistration -n fleet-default my-nodes -o jsonpath="{.status.registrationURL}"` -O initial-registration.yaml\n')),(0,r.kt)("p",null,"This will download the proper yaml from the registration URL and store it on the current directory under the ",(0,r.kt)("inlineCode",{parentName:"p"},"initial-registration.yaml")," name.")),(0,r.kt)(k,{value:"explanation",label:"Full explanation",mdxType:"TabItem"},(0,r.kt)("p",null,"First we need to obtain the ",(0,r.kt)("inlineCode",{parentName:"p"},"RegistrationURL")," that was generated for our ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'$ kubectl get machineregistration -n fleet-default my-nodes -o jsonpath="{.status.registrationURL}"\nhttps://172.18.0.2.sslip.io/elemental/registration/gsh4n8nj9gvbsjk4x7hxvnr5l6hmhbdbdffrmkwzrss2dtfbnpbmqp\n')),(0,r.kt)("p",null,"As you can see we obtained the proper initial registration needed by ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-register")," to register the node properly and continue with the automated installation."),(0,r.kt)("p",null,"Then we need to visit that URL as that will provide the URL and CA certificate for unauthenticated requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"$ curl --insecure https://172.18.0.2.sslip.io/elemental/registration/gsh4n8nj9gvbsjk4x7hxvnr5l6hmhbdbdffrmkwzrss2dtfbnpbmqp\n\nelemental:\n  registration:\n    url: https://172.18.0.2.sslip.io/elemental/registration/gsh4n8nj9gvbsjk4x7hxvnr5l6hmhbdbdffrmkwzrss2dtfbnpbmqp\n    ca-cert: |-\n      -----BEGIN CERTIFICATE-----\n      MIIBqDCCAU2gAwIBAgIBADAKBggqhkjOPQQDAjA7MRwwGgYDVQQKExNkeW5hbWlj\n      bGlzdGVuZXItb3JnMRswGQYDVQQDExJkeW5hbWljbGlzdGVuZXItY2EwHhcNMjIw\n      ODA0MTA1OTE1WhcNMzIwODAxMTA1OTE1WjA7MRwwGgYDVQQKExNkeW5hbWljbGlz\n      dGVuZXItb3JnMRswGQYDVQQDExJkeW5hbWljbGlzdGVuZXItY2EwWTATBgcqhkjO\n      PQIBBggqhkjOPQMBBwNCAASa8PJH7JJGT5QUPMBYnJe0j50G7dTEaDlk4xRpqVk1\n      y4dloslsI0RTb6B++7nNgnLPOe2KqZfylNmVIAelrSaUo0IwQDAOBgNVHQ8BAf8E\n      BAMCAqQwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUxp8OBfjZlnyV6pzzKqIF\n      wWByvCYwCgYIKoZIzj0EAwIDSQAwRgIhAPI2XUWcnxkkBe98SGPFa1Hlncyu/FCR\n      AbEYIAdUC2z+AiEA+GizukSRiiLV28wdNdKihEELy+qzi5MlVYowUuQYZsA=\n      -----END CERTIFICATE-----\n")),(0,r.kt)("p",null,"As you can see we obtained the proper initial registration needed by ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-register")," to register the node properly and continue with the automated installation."),(0,r.kt)("p",null,"Now we can write down the data returned for that url into a file that we will inject into the seed image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="initial-registration.yaml" showLineNumbers',title:'"initial-registration.yaml"',showLineNumbers:!0},"elemental:\n  registration:\n    url: https://172.18.0.2.sslip.io/elemental/registration/gsh4n8nj9gvbsjk4x7hxvnr5l6hmhbdbdffrmkwzrss2dtfbnpbmqp\n    ca-cert: |-\n      -----BEGIN CERTIFICATE-----\n      MIIBqDCCAU2gAwIBAgIBADAKBggqhkjOPQQDAjA7MRwwGgYDVQQKExNkeW5hbWlj\n      bGlzdGVuZXItb3JnMRswGQYDVQQDExJkeW5hbWljbGlzdGVuZXItY2EwHhcNMjIw\n      ODA0MTA1OTE1WhcNMzIwODAxMTA1OTE1WjA7MRwwGgYDVQQKExNkeW5hbWljbGlz\n      dGVuZXItb3JnMRswGQYDVQQDExJkeW5hbWljbGlzdGVuZXItY2EwWTATBgcqhkjO\n      PQIBBggqhkjOPQMBBwNCAASa8PJH7JJGT5QUPMBYnJe0j50G7dTEaDlk4xRpqVk1\n      y4dloslsI0RTb6B++7nNgnLPOe2KqZfylNmVIAelrSaUo0IwQDAOBgNVHQ8BAf8E\n      BAMCAqQwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUxp8OBfjZlnyV6pzzKqIF\n      wWByvCYwCgYIKoZIzj0EAwIDSQAwRgIhAPI2XUWcnxkkBe98SGPFa1Hlncyu/FCR\n      AbEYIAdUC2z+AiEA+GizukSRiiLV28wdNdKihEELy+qzi5MlVYowUuQYZsA=\n      -----END CERTIFICATE-----\n")))),(0,r.kt)("p",null,"Now we can proceed to create the final seed image:"),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(k,{value:"script",label:"ISO (x86-64) via script",mdxType:"TabItem"},(0,r.kt)("p",null,"We provide a ISO build script for ease of use that can get the final ISO and inject the ",(0,r.kt)("inlineCode",{parentName:"p"},"initial-registration.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"wget -q https://raw.githubusercontent.com/rancher/elemental/main/.github/elemental-iso-add-registration && chmod +x elemental-iso-add-registration\n")),(0,r.kt)("p",null,"Now that we have the script we can proceed to download the ISO and inject our configuration injected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"./elemental-iso-add-registration initial-registration.yaml\n")),(0,r.kt)("p",null,"This will generate an ISO on the current directory with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-teal-x86_64.iso"),".")),(0,r.kt)(k,{value:"manual",label:"Preparing the seed image (aarch64) manually",mdxType:"TabItem"},(0,r.kt)("p",null,"Elemental's support for Raspberry Pi is primarily for demonstration purposes at this point. Therefore the installation\nprocess is modelled similar to x86-64. You boot from a seed image (USB stick in this case) and install to a storage medium (SD-card for Raspberry Pi)."),(0,r.kt)("h4",{id:"retrieving-the-prebuilt-seed-image"},"Retrieving the prebuilt seed image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"wget -q https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Dev:/Teal53/images/rpi.raw\n")),(0,r.kt)("h5",{id:"verifying-the-download"},"Verifying the download"),(0,r.kt)("p",null,"In order to verify the integrity of the downloaded artifacts, you\nshould do a checksum verification:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"wget -q https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Dev:/Teal53/images/rpi.raw.sha256\nsha256sum -c rpi.raw.sha256\n")),(0,r.kt)("p",null,"This should print ",(0,r.kt)("inlineCode",{parentName:"p"},"rpi.raw: OK")," as output."),(0,r.kt)("h4",{id:"writing-the-seed-image-to-a-usb-stick"},"Writing the seed image to a USB stick"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".raw")," image needs to be written to a USB stick to boot from. This can be done with ",(0,r.kt)("inlineCode",{parentName:"p"},"dd")," on the Linux command line if you're comfortable with this command.\n",(0,r.kt)("a",{parentName:"p",href:"https://www.opensuse.org"},"openSUSE")," has nice instructions on how to write an image to a storage medium for ",(0,r.kt)("a",{parentName:"p",href:"https://en.opensuse.org/SDB:Live_USB_stick"},"Linux"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_Windows"},"Windows"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_macOS"},"OS X"),"."),(0,r.kt)("h4",{id:"injecting-the-registration-information"},"Injecting the registration information"),(0,r.kt)("p",null,"Adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"initial-registration.yaml")," isn't scripted yet. This is still a manual process:"),(0,r.kt)("p",null,"The written USB stick will have two partitions. ",(0,r.kt)("inlineCode",{parentName:"p"},"RPI_BOOT")," contains the boot loader files and ",(0,r.kt)("inlineCode",{parentName:"p"},"COS_LIVE")," the Elemental files.\nMount the ",(0,r.kt)("inlineCode",{parentName:"p"},"COS_LIVE")," partition and write ",(0,r.kt)("inlineCode",{parentName:"p"},"initial-registration.yaml")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"livecd-cloud-config.yaml")," to this partition."),(0,r.kt)("p",null,"If you've mounted the USB stick with a file manager, this command should work to copy the registration information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"sudo cp initial-registration.yaml /run/media/$USER/COS_LIVE/livecd-cloud-config.yaml\n")),(0,r.kt)("h4",{id:"booting-the-raspberry-pi"},"Booting the Raspberry Pi"),(0,r.kt)("p",null,"Now unmount the USB stick and plug it into your Raspberry Pi."),(0,r.kt)("p",null,"Plug a large (32 GB or more) and ",(0,r.kt)("strong",{parentName:"p"},"fast")," (!!) micro SD-card into the respective slot."),(0,r.kt)("p",null,"Connect the system to ethernet."),(0,r.kt)("p",null,"A powercycle will reboot the Pi. Everything else is identical to x86-64."),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Make sure the micro SD-card is unpartitioned. Otherwise the Pi bootloader will try to boot from it and fail.")))),(0,r.kt)("p",null,"You can now boot your nodes with this image and they will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Register with the registrationURL given and create a per-machine ",(0,r.kt)("inlineCode",{parentName:"li"},"MachineInventory")),(0,r.kt)("li",{parentName:"ul"},"Install Elemental Teal to the given device"),(0,r.kt)("li",{parentName:"ul"},"Reboot")),(0,r.kt)("h3",{id:"selecting-the-right-machines-to-join-a-cluster"},"Selecting the right machines to join a cluster"),(0,r.kt)("p",null,"In order for the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventorySelectorTemplate")," to select the nodes, a location label to the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," is now needed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},'kubectl -n fleet-default label machineinventory $(kubectl get machineinventory -n fleet-default --no-headers -o custom-columns=":metadata.name") location=europe\n')),(0,r.kt)("p",null,"After the label has been applied the machines will auto-deploy the cluster via the chosen provider (k3s/rke)."),(0,r.kt)("p",null,"After a few minutes your new cluster will be fully provisioned!!"),(0,r.kt)("h2",{id:"how-can-i-choose-the-kubernetes-version-and-deployer-for-the-cluster"},"How can I choose the kubernetes version and deployer for the cluster?"),(0,r.kt)("p",null,"In your cluster.yaml file there is a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetesVersion"),". That sets the version and deployer that will be used for the cluster,\nfor example for rke ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.8")," while for rke2 would be ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.8+rke2r1")," and for k3s ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.8+k3s1")),(0,r.kt)("p",null,"To see all compatible versions check the ",(0,r.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/"},"Rancher Support Matrix")," PDF for rke/rke2/k3s versions and their components."),(0,r.kt)("p",null,"You can also check our ",(0,r.kt)("a",{parentName:"p",href:"/next/kubernetesversions"},"Version doc")," to know how to obtain those versions."),(0,r.kt)("p",null,"Check our ",(0,r.kt)("a",{parentName:"p",href:"/next/cluster-reference"},"Cluster Spec")," page for more info about the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster")," resource."),(0,r.kt)("h2",{id:"how-can-i-follow-what-is-going-on-behind-the-scenes"},"How can I follow what is going on behind the scenes?"),(0,r.kt)("p",null,"You should be able to follow along what the machine is doing via:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"During ISO boot:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ssh into the machine (user/pass: root/ros):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -t elemental")," will show you the output of the elemental-register and the elemental install"))))),(0,r.kt)("li",{parentName:"ul"},"Once the system is installed:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On the Rancher UI -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Cluster Management")," you should see your new cluster and be able to see the ",(0,r.kt)("inlineCode",{parentName:"li"},"Provisioning Log")," in the cluster details"),(0,r.kt)("li",{parentName:"ul"},"ssh into the machine (user/pass: Whatever your configured on the registration.yaml under ",(0,r.kt)("inlineCode",{parentName:"li"},"Spec.config.cloud-config.users"),"):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -u elemental-system-agent")," will show the output of the initial elemental config and install of ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher-system-agent")),(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -u rancher-system-agent")," will show the output of the boostrap of cluster components like k3s"),(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -u k3s")," will show the logs of the k3s deployment")))))))}w.isMDXComponent=!0},6854:(e,t,n)=>{n.d(t,{Z:()=>a});const a="kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: my-cluster\n  namespace: fleet-default\nspec:\n  rkeConfig:\n    machinePools:\n      - controlPlaneRole: true\n        etcdRole: true\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: my-machine-selector\n        name: pool1\n        quantity: 1\n        unhealthyNodeTimeout: 0s\n        workerRole: true\n  kubernetesVersion: v1.24.8+k3s1"},4713:(e,t,n)=>{n.d(t,{Z:()=>a});const a='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineInventoryLabels:\n    manufacturer: "${System Information/Manufacturer}"\n    productName: "${System Information/Product Name}"\n    serialNumber: "${System Information/Serial Number}"\n    machineUUID: "${System Information/UUID}"\n'},3367:(e,t,n)=>{n.d(t,{Z:()=>a});const a="apiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventorySelectorTemplate\nmetadata:\n  name: my-machine-selector\n  namespace: fleet-default\nspec:\n  template:\n    spec:\n      selector:\n        matchExpressions:\n          - key: location\n            operator: In\n            values: [ 'europe' ]\n"}}]);