(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1863],{7270:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/upload",function(){return t(2402)}])},9972:function(n,e,t){"use strict";t.d(e,{Z:function(){return d}});var r=t(5893),i=t(1555),s=t(5213),a=t(5738),o=t(4051),c=t(231);function d(){return(0,r.jsx)(a.Z,{bg:"dark",className:"mt-auto justify-content-center rounded text-light",children:(0,r.jsx)(s.Z,{variant:"underline",children:(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(i.Z,{className:"px-5",children:[(0,r.jsx)("h3",{children:"Developer"}),(0,r.jsx)(s.Z.Link,{className:"ms-1 p-0",href:"https://github.com/cartesi",children:(0,r.jsxs)("span",{className:"d-flex align-items-center",children:[(0,r.jsx)(c.hJX,{})," ",(0,r.jsx)("span",{className:"ms-1",children:"Github"})]})}),(0,r.jsxs)(s.Z.Link,{className:"ms-1 p-0",href:"https://docs.cartesi.io/",children:[(0,r.jsx)("img",{src:"/cartesi.jpg",width:16,className:"me-1 align-baseline"}),"Documentation"]})]}),(0,r.jsxs)(i.Z,{className:"px-5",children:[(0,r.jsx)("h3",{children:"Community"}),(0,r.jsx)(s.Z.Link,{className:"ms-1 p-0",href:"https://discord.gg/VCbnrbrh",children:(0,r.jsxs)("span",{className:"d-flex align-items-center",children:[(0,r.jsx)(c.j2d,{})," ",(0,r.jsx)("span",{className:"ms-1",children:"Discord"})]})}),(0,r.jsx)(s.Z.Link,{className:"ms-1 p-0",href:"https://twitter.com/cartesiproject?s=20",children:(0,r.jsxs)("span",{className:"d-flex align-items-center",children:[(0,r.jsx)(c.fWC,{})," ",(0,r.jsx)("span",{className:"ms-1",children:"Twitter"})]})})]})]})})})}},8376:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var r=t(5893),i=t(132),s=t(7294),a=t(5005),o=t(5213),c=t(5738),d=t(478),l=t(2585);function u(n){let{activeKey:e}=n,[{wallet:t,connecting:u},p,h]=(0,i.Or)(),[x,f]=(0,s.useState)((0,r.jsx)(r.Fragment,{}));return(0,s.useEffect)(()=>{f((0,r.jsx)(a.Z,{variant:"outline-light",className:"position-absolute bottom-0 end-0 m-2",onClick:()=>t?h(t):p(),children:u?"Connecting":t?"Disconnect":"Connect Wallet"}))},[t,u]),(0,r.jsxs)(c.Z,{bg:"dark",className:"mb-3 rounded sticky-top position-relative",children:[(0,r.jsxs)(d.Z,{gap:1,children:[(0,r.jsxs)(c.Z.Brand,{href:"/",className:"d-flex justify-content-center",children:[(0,r.jsx)("img",{className:"header-image-left",alt:"Cartesi Arcade Image",src:"/controlls.png",width:"60",height:"60"}),(0,r.jsx)("h1",{className:"text-light m-2",children:"World Arcade"}),(0,r.jsx)("img",{className:"header-image-right",alt:"Cartesi Arcade Image",src:"/controlls.png",width:"60",height:"60"})]}),(0,r.jsxs)(o.Z,{variant:"underline",className:"justify-content-center",activeKey:e,children:[(0,r.jsx)(o.Z.Item,{children:(0,r.jsx)(o.Z.Link,{href:"/",children:"Games"})}),(0,r.jsx)(o.Z.Item,{children:(0,r.jsxs)(o.Z.Link,{href:"/upload",children:["Upload",(0,r.jsx)("span",{className:"ms-1",children:(0,r.jsx)(l.BDG,{})})]})})]})]}),x]})}},5808:function(n,e,t){"use strict";t.d(e,{U3:function(){return f},ib:function(){return m},uz:function(){return g}});var r=t(2729),i=t(8461);function s(){let n=(0,r._)(["\n    query notice($noticeIndex: Int!, $inputIndex: Int!) {\n  notice(noticeIndex: $noticeIndex, inputIndex: $inputIndex) {\n    index\n    input {\n      index\n      payload\n    }\n    payload\n    proof {\n      validity {\n        inputIndex\n        outputIndex\n        outputHashesRootHash\n        vouchersEpochRootHash\n        noticesEpochRootHash\n        machineStateHash\n        keccakInHashesSiblings\n        outputHashesInEpochSiblings\n      }\n      context\n    }\n  }\n}\n    "]);return s=function(){return n},n}function a(){let n=(0,r._)(["\n    query notices {\n  notices {\n    edges {\n      node {\n        index\n        input {\n          index\n          payload\n        }\n        payload\n      }\n    }\n  }\n}\n    "]);return a=function(){return n},n}function o(){let n=(0,r._)(["\n    query noticesByInput($inputIndex: Int!) {\n  input(index: $inputIndex) {\n    notices {\n      edges {\n        node {\n          index\n          input {\n            index\n          }\n          payload\n        }\n      }\n    }\n  }\n}\n    "]);return o=function(){return n},n}function c(){let n=(0,r._)(["\n    query voucher($voucherIndex: Int!, $inputIndex: Int!) {\n  voucher(voucherIndex: $voucherIndex, inputIndex: $inputIndex) {\n    index\n    input {\n      index\n      payload\n    }\n    destination\n    payload\n    proof {\n      validity {\n        inputIndex\n        outputIndex\n        outputHashesRootHash\n        vouchersEpochRootHash\n        noticesEpochRootHash\n        machineStateHash\n        keccakInHashesSiblings\n        outputHashesInEpochSiblings\n      }\n      context\n    }\n  }\n}\n    "]);return c=function(){return n},n}function d(){let n=(0,r._)(["\n    query vouchers {\n  vouchers {\n    edges {\n      node {\n        index\n        input {\n          index\n          payload\n        }\n        destination\n        payload\n      }\n    }\n  }\n}\n    "]);return d=function(){return n},n}function l(){let n=(0,r._)(["\n    query vouchersByInput($inputIndex: Int!) {\n  input(index: $inputIndex) {\n    vouchers {\n      edges {\n        node {\n          index\n          input {\n            index\n          }\n          destination\n          payload\n        }\n      }\n    }\n  }\n}\n    "]);return l=function(){return n},n}function u(){let n=(0,r._)(["\n    query report($reportIndex: Int!, $inputIndex: Int!) {\n  report(reportIndex: $reportIndex, inputIndex: $inputIndex) {\n    index\n    input {\n      index\n      payload\n    }\n    payload\n  }\n}\n    "]);return u=function(){return n},n}function p(){let n=(0,r._)(["\n    query reports {\n  reports {\n    edges {\n      node {\n        index\n        input {\n          index\n          payload\n        }\n        payload\n      }\n    }\n  }\n}\n    "]);return p=function(){return n},n}function h(){let n=(0,r._)(["\n    query reportsByInput($inputIndex: Int!) {\n  input(index: $inputIndex) {\n    reports {\n      edges {\n        node {\n          index\n          input {\n            index\n          }\n          payload\n        }\n      }\n    }\n  }\n}\n    "]);return h=function(){return n},n}function x(){let n=(0,r._)(["\n    query getInput($inputIndex: Int!) {\n  input(index: $inputIndex) {\n    reports {\n      edges {\n        node {\n          index\n          input {\n            index\n          }\n          payload\n        }\n      }\n    }\n    notices {\n      edges {\n        node {\n          index\n          input {\n            index\n          }\n          payload\n        }\n      }\n    }\n  }\n}\n    "]);return x=function(){return n},n}(0,i.ZP)(s());let f=(0,i.ZP)(a()),g=(0,i.ZP)(o());(0,i.ZP)(c()),(0,i.ZP)(d()),(0,i.ZP)(l()),(0,i.ZP)(u()),(0,i.ZP)(p()),(0,i.ZP)(h());let m=(0,i.ZP)(x())},1147:function(n,e,t){"use strict";t.d(e,{V:function(){return c}});var r=t(9934),i=t(2583),s=t(4098),a=t.n(s),o=t(5808);let c=async(n,e)=>{let t={notices:[],reports:[]};for(;0==t.notices.length&&0==t.reports.length;){let s=(0,r.eI)({url:n,exchanges:[(0,i.O)({initialDelayMs:2e3,maxNumberAttempts:Number.POSITIVE_INFINITY,retryIf:n=>(console.log("Checking error then retrying..."),n.graphQLErrors.length>0)}),r.Ek],fetch:a()});console.log("querying ".concat(n,' for notices and reports for input with index "').concat(e,'"...'));let{data:c,error:d}=await s.query(o.ib,{inputIndex:e}).toPromise();if(null==c?void 0:c.input){t={notices:[],reports:[]};for(let n=0;n<c.input.notices.edges.length;n++)t.notices.push(c.input.notices.edges[n].node);for(let n=0;n<c.input.reports.edges.length;n++)t.reports.push(c.input.reports.edges[n].node)}else throw Error(null==d?void 0:d.message)}return t}},2402:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return E}});var r,i,s=t(5893),a=t(9972),o=t(8376),c=t(682),d=t(7294),l=t(478),u=t(2914),p=t(4051),h=t(1555),x=t(5005),f=t(6968),g=t(7977),m=t(2585),j=t(6441),y=t(9251),I=t(241),Z=t(4146),N=t(4359),v=t(1163),w=t(132),C=t(1147);async function b(n,e){if(!n.target.files||0==n.target.files.length)return;let t=n.target.files[0],r=new FileReader;r.onload=async n=>{var t,r;let i;(i=(null===(t=n.target)||void 0===t?void 0:t.result)instanceof ArrayBuffer?null===(r=n.target)||void 0===r?void 0:r.result:{})&&e(new Uint8Array(i))},r.readAsArrayBuffer(t)}async function _(n,e,t){let r;let i=parseInt("409600"),s=window.generateCartridgeId(e);if(e.length>i){let a=window.prepareData(j.Dv(e),i);for(let e=0;e<a.length;e+=1){let i=a[e];t([e+1,a.length]),r=await n.addInput("0x70ac08179605AF2D9e75782b8DEcDD3c22aA4D0C",window.encodeAddCartridgeChunk(s,i)),await r.wait()}}else t([1,1]),r=await n.addInput("0x70ac08179605AF2D9e75782b8DEcDD3c22aA4D0C",window.encodeAddCartridge(s,j.Dv(e)));let a=await r.wait();return a}async function k(n){let e=await (0,C.V)("http://localhost:8080/graphql",n);if(0==e.reports.length)throw Error("Upload Failed! Report not found for input ".concat(n));let t=y.ZN(e.reports[0].payload),r=JSON.parse(t);if("STATUS_SUCCESS"==r.status){let n=r.hash;return n}throw Error("Upload Failed! ".concat(r))}function D(){let n=(0,v.useRouter)(),[{wallet:e}]=(0,w.Or)(),[t,r]=(0,d.useState)(null),[a,o]=(0,d.useState)([0,0]),[c,j]=(0,d.useState)(i.Ready);async function y(){if(!t){alert("Cartridge field is mandatory!");return}if(!e){alert("Connect first to upload a cartridge.");return}let r=new I.Q(e.provider,"any").getSigner(),s=new Z.CH("0x59b22D57D4f067708AB0c00552767405926dc768",N.IInputBox__factory.abi,r);j(i.UploadCartridge);try{let e=await _(s,t,o),r=await k(Number(e.events[0].args[1]._hex));await new Promise(n=>setTimeout(n,300)),n.push("/cartridge/".concat(r))}catch(n){j(i.Ready),alert(n.message)}}return c!=i.Ready?(0,s.jsx)(p.Z,{children:(0,s.jsx)(h.Z,{md:{span:5,offset:4},children:(0,s.jsxs)("div",{className:"bg-dark text-center text-light py-3 rounded",children:[(0,s.jsx)("h1",{children:"Uploading your Cartridge"}),(0,s.jsx)(l.Z,{gap:1,className:"mb-2",children:(0,s.jsx)("div",{className:"d-flex justify-content-center",children:(0,s.jsx)(f.Z,{className:"my-2",animation:"border",variant:"light"})})}),(0,s.jsx)(l.Z,{gap:2,direction:"horizontal",className:"justify-content-center",children:(0,s.jsxs)(g.Z,{bg:c>i.UploadCartridge?"success":"warning",children:["Cartridge: ","".concat(a[0]," of ").concat(a[1])]})})]})})}):(0,s.jsxs)(u.Z,{className:"bg-dark rounded py-3 px-5 text-light",children:[(0,s.jsx)("h1",{className:"text-center mb-4",children:"Setup your Cartridge"}),(0,s.jsx)(p.Z,{children:(0,s.jsx)(h.Z,{md:"12",children:(0,s.jsxs)(u.Z.Group,{controlId:"formFile",className:"mb-3",children:[(0,s.jsxs)(u.Z.Label,{children:["Cartridge File",(0,s.jsx)("span",{className:"ms-1",children:(0,s.jsx)(m.BDG,{})})]}),(0,s.jsx)(u.Z.Control,{type:"file",onChange:function(n){b(n,r)}})]})})}),(0,s.jsx)(p.Z,{children:(0,s.jsx)(h.Z,{md:"12",children:(0,s.jsxs)(x.Z,{variant:"outline-light",className:"text-center",onClick:()=>{y()},children:[(0,s.jsx)("span",{className:"me-1",children:(0,s.jsx)(m.rhr,{})}),"Upload Cartridge"]})})})]})}function E(){return(0,s.jsxs)(c.Z,{id:"page-container",children:[(0,s.jsx)(o.Z,{activeKey:"/upload"}),(0,s.jsx)(D,{}),(0,s.jsx)(a.Z,{})]})}(r=i||(i={}))[r.Ready=0]="Ready",r[r.UploadCartridge=1]="UploadCartridge",r[r.Finish=2]="Finish"}},function(n){n.O(0,[4980,1778,6243,5127,7123,9774,2888,179],function(){return n(n.s=7270)}),_N_E=n.O()}]);