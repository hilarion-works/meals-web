exports.id=434,exports.ids=[434],exports.modules={2335:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},7775:(e,t,s)=>{Promise.resolve().then(s.bind(s,2897)),Promise.resolve().then(s.bind(s,8558))},2897:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});var a=s(326),l=s(3574);let r=({children:e})=>a.jsx(l.f,{attribute:"class",disableTransitionOnChange:!0,children:e})},8558:(e,t,s)=>{"use strict";s.d(t,{default:()=>k});var a=s(326),l=s(7577),r=s(6072),i=s(3574),n=s(9786),d=s(8287);let o=()=>{let[e,t]=(0,l.useState)(!1),{systemTheme:s,theme:r,setTheme:o}=(0,i.F)(),m="system"===r?s:r;return(0,l.useEffect)(()=>{t(!0)},[]),a.jsx("button",{onClick:()=>o("dark"===m?"light":"dark"),className:"inline-block rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700","aria-label":"Toggle Dark Mode",children:e?"dark"===m?a.jsx(n.Z,{className:"h-5 w-5"}):a.jsx(d.Z,{className:"h-5 w-5"}):a.jsx("div",{className:"h-5 w-5"})})};var m=s(434);let c=()=>a.jsx("span",{className:"ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl",children:"God Recipe"});var x=s(7693),h=s(8424);let u=({handleToggleMenuOnClick:e,isToggleMenuOpen:t})=>a.jsx("button",{type:"button",className:"ml-1.5 inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-700","aria-label":"Toggle Menu",onClick:e,children:t?a.jsx(x.Z,{className:"h-6 w-6"}):a.jsx(h.Z,{className:"h-6 w-6"})});var f=s(5058),g=s(249),b=s(3602),p=s(685),j=s(9417);let y={links:[{label:"Pages",icon:f.Z,links:[{label:"Meal",href:"/"}]}],isSticky:!0,showToggleTheme:!0,showRssFeed:!1,position:"right"};g.Z,b.Z,p.Z,r.Z,j.Z,g.Z,b.Z,p.Z,r.Z,j.Z;var w=s(1009);let v=({callToAction:e,containerClass:t,linkClass:s,iconClass:l})=>{let{text:r,href:i,icon:n,targetBlank:d}=e;return a.jsx(a.Fragment,{children:i&&(r||n)&&a.jsx("div",{className:(0,w.m6)("flex w-auto cursor-pointer",t),children:d?(0,a.jsxs)(m.default,{className:(0,w.m6)("inline-flex items-center justify-center w-full sm:mb-0",s),href:i,target:"_blank",rel:"noopener noreferrer",children:[n&&a.jsx(n,{className:(0,w.m6)(`w-5 h-5 ${r?"mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5":""}`,l)}),r]}):(0,a.jsxs)(m.default,{className:(0,w.m6)("inline-flex items-center justify-center w-full sm:mb-0 ",s),href:i,children:[n&&a.jsx(n,{className:(0,w.m6)(`w-5 h-5 ${r?"mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5":""}`,l)}),r]})})})},k=()=>{let{links:e,actions:t,isSticky:s,showToggleTheme:i,showRssFeed:n,position:d}=y,x=e&&e.map(()=>!1),[h,f]=(0,l.useState)(x),[g,b]=(0,l.useState)(!1),p=e=>{f(t=>{let s=[...t];return s.forEach((t,a)=>{!0===t?s[a]=!1:s[a]=a===e}),s})},j=e=>{f(t=>{let s=[...t];return s[e]=!1,s})},w=()=>{b(!g)};return a.jsx("header",{className:`top-0 z-40 mx-auto w-full flex-none bg-white transition-all duration-100 ease-in dark:bg-slate-900 md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 ${s?"sticky":"relative"}`,id:"header",children:(0,a.jsxs)("div",{className:"mx-auto w-full max-w-7xl py-3 px-3 md:flex md:justify-between md:py-3.5 md:px-4",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[a.jsx(m.default,{className:"flex items-center",href:"/",onClick:()=>g?w():f(x),children:a.jsx(c,{})}),a.jsx("div",{className:"flex items-center md:hidden",children:a.jsx(u,{handleToggleMenuOnClick:w,isToggleMenuOpen:g})})]}),a.jsx("nav",{className:`${g?"block":"hidden"} h-screen md:w-full ${"right"===d?"justify-end":"left"===d?"justify-start":"justify-center"} w-auto overflow-y-auto dark:text-slate-200 md:mx-5 md:flex md:h-auto md:items-center md:overflow-visible`,"aria-label":"Main navigation",children:a.jsx("ul",{className:"flex w-full flex-col pt-8 text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base",children:e&&e.map(({label:e,href:t,icon:s,links:l},r)=>a.jsx("li",{className:l?.length?"dropdown":"",children:l&&l.length?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{className:"flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white",onClick:()=>p(r),children:[e," ",s&&a.jsx(s,{className:"ml-0.5 hidden h-3.5 w-3.5 md:inline"})]}),a.jsx("ul",{className:`${h[r]?"block":"md:hidden"} rounded pl-4 font-medium drop-shadow-xl md:absolute md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md dark:md:bg-slate-900/90`,children:l.map(({label:e,href:t},s)=>a.jsx("li",{children:a.jsx(m.default,{className:"whitespace-no-wrap block py-2 px-5 first:rounded-t last:rounded-b dark:hover:bg-gray-700 md:hover:bg-gray-200",href:t,onClick:()=>g?w():j(r),children:e})},`item-link-${s}`))})]}):a.jsx(m.default,{className:"flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white",href:t,onClick:()=>g?w():p(r),children:e})},`item-link-${r}`))})}),a.jsx("div",{className:`${g?"block":"hidden"} fixed bottom-0 left-0 w-full justify-end p-3 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0`,children:(0,a.jsxs)("div",{className:"flex w-full items-center justify-between md:w-auto",children:[i&&a.jsx(o,{}),n&&a.jsx(m.default,{className:"text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700","aria-label":"RSS Feed",href:"",children:a.jsx(r.Z,{className:"h-5 w-5"})}),t&&t.length>0&&a.jsx("div",{className:"ml-4 flex w-max flex-wrap justify-end",children:t.map((e,t)=>a.jsx(v,{callToAction:e,linkClass:"btn btn-primary m-1 py-2 px-5 text-sm font-semibold shadow-none md:px-6"},`item-action-${t}`))})]})})]})})}},6242:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Z,metadata:()=>N});var a=s(9510),l=s(4148),r=s.n(l),i=s(4091),n=s(8570);let d=(0,n.createProxy)(String.raw`/home/ubuntu/web/meals-web/src/components/atoms/Providers.tsx`),{__esModule:o,$$typeof:m}=d;d.default;let c=(0,n.createProxy)(String.raw`/home/ubuntu/web/meals-web/src/components/atoms/Providers.tsx#default`),x=(0,n.createProxy)(String.raw`/home/ubuntu/web/meals-web/src/components/widgets/Header.tsx`),{__esModule:h,$$typeof:u}=x;x.default;let f=(0,n.createProxy)(String.raw`/home/ubuntu/web/meals-web/src/components/widgets/Header.tsx#default`);var g=s(9720),b=s(4569),p=s(6331),j=s(5487),y=s(2556),w=s(5914);g.Z,b.Z,p.Z,j.Z,y.Z,w.Z;let v={links:[{label:"Terms & Conditions",href:"/terms"},{label:"Privacy Policy",href:"/privacy"}],columns:[{title:"Address",texts:["51 Phasellus Avenue Maecenas","Aliquam, AQ 52098"]},{title:"Phone",texts:["Reception: +105 123 4567","Office: +107 235 7890"]},{title:"Email",texts:["Office: info@example.com","Site: https://example.com"]}],socials:[{label:"Twitter",icon:b.Z,href:"#"},{label:"Instagram",icon:p.Z,href:"#"},{label:"Facebook",icon:j.Z,href:"#"},{label:"RSS",icon:y.Z,href:"#"},{label:"Github",icon:w.Z,href:"https://github.com/onwidget/tailnext"}],footNote:(0,a.jsxs)("div",{className:"mr-4 text-sm",children:[a.jsx("span",{className:"float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"}),"Made by"," ",(0,a.jsxs)("a",{className:"font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600",href:"https://onwidget.com/",children:[" ","onWidget"]})," ","\xb7 All rights reserved."]})},k=()=>{let{links:e,columns:t,socials:s,footNote:l}=v;return(0,a.jsxs)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6",children:[(0,a.jsxs)("div",{className:"xs:gap-8 grid grid-cols-4 gap-4 gap-y-8 py-8 md:py-12",children:[t.map(({title:e,texts:t},s)=>(0,a.jsxs)("div",{className:"col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1",children:[a.jsx("div",{className:"mb-2 font-medium text-gray-800 dark:text-gray-300",children:e}),t&&t.map((e,t)=>a.jsx("p",{className:"text-gray-600 dark:text-slate-400",children:e},`item-text-${t}`))]},`item-column-${s}`)),(0,a.jsxs)("div",{className:"col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1",children:[a.jsx("div",{className:"mb-2 font-medium text-gray-800 dark:text-gray-300",children:"Social"}),a.jsx("ul",{className:"mb-4 -ml-2 flex md:order-1 md:mb-0",children:s.map(({label:e,icon:t,href:s},l)=>a.jsx("li",{children:a.jsx("a",{className:"text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700","aria-label":e,href:s,children:t&&a.jsx(t,{className:"h-5 w-5"})})},`item-social-${l}`))})]})]}),(0,a.jsxs)("div",{className:"text-muted py-6 text-sm text-gray-700 dark:text-slate-400 md:flex md:items-center md:justify-between md:py-8",children:[a.jsx("ul",{className:"mb-4 -ml-2 flex pl-2 md:order-1 md:mb-0",children:e&&e.map(({label:t,href:s},l)=>(0,a.jsxs)("li",{children:[a.jsx("a",{className:"duration-150 ease-in-out placeholder:transition hover:text-gray-700 hover:underline dark:text-gray-400","aria-label":t,href:s,children:t}),e.length-1!==l&&a.jsx("span",{className:"mr-1",children:" \xb7 "})]},`item-link-${l}`))}),l]})]})};s(6406);let N={title:{template:`%s — ${i.E.name}`,default:i.E.title},description:i.E.description};function Z({children:e}){return(0,a.jsxs)("html",{lang:"en",className:`motion-safe:scroll-smooth 2xl:text-[24px] ${r().variable} font-sans`,children:[(0,a.jsxs)("head",{children:[a.jsx("meta",{charSet:"utf-8"}),a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),a.jsx("body",{className:"tracking-tight antialiased text-gray-900 dark:text-slate-300",children:(0,a.jsxs)(c,{children:[a.jsx(f,{}),a.jsx("main",{children:e}),a.jsx(k,{})]})})]})}},4091:e=>{"use strict";e.exports.E={name:"God Recipe",origin:"https://tailnext.vercel.app",basePathname:"/",trailingSlash:!1,title:"Good food good mood",description:"God Recipe to satisfy your belly"}},6406:()=>{}};