"use strict";(self.webpackChunkanyshake=self.webpackChunkanyshake||[]).push([[995],{854:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var s=i(5893),t=i(1151);const r={sidebar_position:4},l="Serial Settings",a={id:"AnyShake Observer/Configuration/serial",title:"Serial Settings",description:"- Key: serial_settings",source:"@site/docs/AnyShake Observer/Configuration/serial.md",sourceDirName:"AnyShake Observer/Configuration",slug:"/AnyShake Observer/Configuration/serial",permalink:"/docs/AnyShake Observer/Configuration/serial",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"ADC Settings",permalink:"/docs/AnyShake Observer/Configuration/adc"},next:{title:"NTP Client Settings",permalink:"/docs/AnyShake Observer/Configuration/ntpclient"}},c={},o=[{value:"Fields",id:"fields",level:2},{value:"packet",id:"packet",level:3},{value:"baud",id:"baud",level:3},{value:"device",id:"device",level:3},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"serial-settings",children:"Serial Settings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Key: ",(0,s.jsx)(n.code,{children:"serial_settings"})]}),"\n",(0,s.jsx)(n.li,{children:"Description: Serial port settings for AnyShake Observer"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"AnyShake Observer requires a serial port to communicate with the AnyShake Explorer. This object manages serial port settings for AnyShake Observer."}),"\n",(0,s.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(n.h3,{id:"packet",children:"packet"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"})]}),"\n",(0,s.jsx)(n.li,{children:"Description: Channel packet length, must be same with AnyShake Explorer"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"baud",children:"baud"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"})]}),"\n",(0,s.jsx)(n.li,{children:"Description: Serial baud rate, must be same with AnyShake Explorer"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"device",children:"device"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["Description: Serial device, in Linux, it is usually starts with ",(0,s.jsx)(n.code,{children:"/dev/tty"}),", in Windows, it is usually starts with ",(0,s.jsx)(n.code,{children:"COM"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "serial_settings": {\n        "packet": 4,\n        "baud": 19200,\n        "device": "/dev/ttyUSB0"\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var s=i(7294);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);