(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[776],{5535:function(e,a,s){Promise.resolve().then(s.t.bind(s,8173,23)),Promise.resolve().then(s.t.bind(s,231,23)),Promise.resolve().then(s.bind(s,953))},953:function(e,a,s){"use strict";var l=s(7437),t=s(2265),r=s(6164);a.default=e=>{let{title:a,description:s,inputs:m,radioBtns:c,textarea:n,checkboxes:i,btn:d,btnPosition:o,containerClass:x}=e,[b,h]=(0,t.useState)([]),[u,p]=(0,t.useState)(""),[N,j]=(0,t.useState)(""),[v,f]=(0,t.useState)(Array(i&&i.length).fill(!1)),g=e=>{let{name:a,value:s}=e.target;h({...b,[a]:s})},y=e=>{p(e.target.value)},k=e=>{j(e.target.value)},w=e=>{f(a=>{let s=[...a];return s.map(()=>{s[e]=!v[e]}),s})};return(0,l.jsxs)("form",{id:"contactForm",className:(0,r.m6)("",x),children:[a&&(0,l.jsx)("h2",{className:"".concat(s?"mb-2":"mb-4"," text-2xl font-bold"),children:a}),s&&(0,l.jsx)("p",{className:"mb-4",children:s}),(0,l.jsxs)("div",{className:"mb-6",children:[(0,l.jsx)("div",{className:"mx-0 mb-1 sm:mb-4",children:m&&m.map((e,a)=>{let{type:s,label:t,name:r,autocomplete:m,placeholder:c}=e;return(0,l.jsxs)("div",{className:"mx-0 mb-1 sm:mb-4",children:[(0,l.jsx)("label",{htmlFor:r,className:"pb-1 text-xs uppercase tracking-wider",children:t}),(0,l.jsx)("input",{type:s,id:r,name:r,autoComplete:m,value:b[a],onChange:g,placeholder:c,className:"mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"})]},"item-input-".concat(a))})}),c&&(0,l.jsxs)("div",{className:"mx-0 mb-1 sm:mb-3",children:[(0,l.jsx)("span",{className:"pb-1 text-xs uppercase tracking-wider",children:null==c?void 0:c.label}),(0,l.jsx)("div",{className:"flex flex-wrap",children:c.radios.map((e,a)=>{let{label:s}=e;return(0,l.jsxs)("div",{className:"mr-4 items-baseline",children:[(0,l.jsx)("input",{id:s,type:"radio",name:s,value:"value".concat(a),checked:u==="value".concat(a),onChange:y,className:"cursor-pointer"}),(0,l.jsx)("label",{htmlFor:s,className:"ml-2",children:s})]},"radio-btn-".concat(a))})})]}),n&&(0,l.jsxs)("div",{className:"mx-0 mb-1 sm:mb-4",children:[(0,l.jsx)("label",{htmlFor:n.name,className:"pb-1 text-xs uppercase tracking-wider",children:n.label}),(0,l.jsx)("textarea",{id:n.name,name:n.name,cols:n.cols,rows:n.rows,value:N,onChange:e=>k(e),placeholder:n.placeholder,className:"mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"})]}),i&&(0,l.jsx)("div",{className:"mx-0 mb-1 sm:mb-4",children:i.map((e,a)=>{let{label:s}=e;return(0,l.jsxs)("div",{className:"mx-0 my-1 flex items-baseline",children:[(0,l.jsx)("input",{id:s,type:"checkbox",name:s,checked:v[a],onChange:()=>w(a),className:"cursor-pointer"}),(0,l.jsx)("label",{htmlFor:s,className:"ml-2",children:s})]},"checkbox-".concat(a))})})]}),d&&(0,l.jsx)("div",{className:"".concat("left"===o?"text-left":"right"===o?"text-right":"text-center"),children:(0,l.jsx)("button",{type:d.type||"button",className:"btn btn-primary sm:mb-0",children:d.title})})]})}}},function(e){e.O(0,[173,231,164,971,23,744],function(){return e(e.s=5535)}),_N_E=e.O()}]);