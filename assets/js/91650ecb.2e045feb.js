"use strict";(self.webpackChunkanyshake=self.webpackChunkanyshake||[]).push([[528],{7218:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=s(5893),r=s(1151);const t={sidebar_position:5},a="Stream Settings",o={id:"AnyShake Observer/Configuration/stream",title:"Stream Settings",description:"- Key: stream_settings",source:"@site/docs/AnyShake Observer/Configuration/stream.md",sourceDirName:"AnyShake Observer/Configuration",slug:"/AnyShake Observer/Configuration/stream",permalink:"/docs/AnyShake Observer/Configuration/stream",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Sensor Settings",permalink:"/docs/AnyShake Observer/Configuration/sensor"},next:{title:"NTP Client Settings",permalink:"/docs/AnyShake Observer/Configuration/ntpclient"}},c={},l=[{value:"Fields",id:"fields",level:2},{value:"network",id:"network",level:3},{value:"station",id:"station",level:3},{value:"location",id:"location",level:3},{value:"channel",id:"channel",level:3},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"stream-settings",children:"Stream Settings"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Key: ",(0,i.jsx)(n.code,{children:"stream_settings"})]}),"\n",(0,i.jsx)(n.li,{children:"Description: Define the data stream settings for the data stream server"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"AnyShake Observer requires uniquely identified using a sequence of codes named network, station, location and channel, where the channel is further subdivided into band, source and subsource codes."}),"\n",(0,i.jsx)(n.p,{children:"Each of these codes must be composed of the following ASCII character sets:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Uppercase [A-Z], ASCII 65 through 90"}),"\n",(0,i.jsx)(n.li,{children:"Numeric [0-9], ASCII 48 through 57"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsx)(n.h3,{id:"network",children:"network"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.li,{children:"Description: Always in 2 uppercase character."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"station",children:"station"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.li,{children:"Description: Always less than 5 uppercase character."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"location",children:"location"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.li,{children:"Description: Always in 2 uppercase character."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"channel",children:"channel"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: Prefix for the channel code, always in 2 uppercase character, one for band and one for source. See ",(0,i.jsx)(n.a,{href:"https://docs.fdsn.org/projects/source-identifiers/en/v1.0/channel-codes.html",children:"Channel codes \u2014 FDSN Source Identifiers"})," for more details."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "stream_settings": {\n        "network": "AS",\n        "station": "SHAKE",\n        "location": "00",\n        "channel": "EH"\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var i=s(7294);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);