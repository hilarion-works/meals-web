(()=>{var e={};e.id=534,e.ids=[534],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2025:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>x,tree:()=>c}),s(9359),s(5866),s(6242);var r=s(3191),a=s(8716),i=s(7922),l=s.n(i),n=s(5231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let c=["",{children:["(pages)",{children:["pricing",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9359)),"/home/ubuntu/web/meals-web/app/(pages)/pricing/page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,6242)),"/home/ubuntu/web/meals-web/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/home/ubuntu/web/meals-web/app/(pages)/pricing/page.tsx"],m="/(pages)/pricing/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(pages)/pricing/page",pathname:"/pricing",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8135:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2481,23)),Promise.resolve().then(s.t.bind(s,9404,23)),Promise.resolve().then(s.bind(s,6948))},8069:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var r=(0,s(1287).Z)("chevron-up","IconChevronUp",[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]])},6948:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var r=s(326),a=s(8069),i=s(5058),l=s(7577);let n=()=>{let[e,t]=(0,l.useState)(!0),[s,r]=(0,l.useState)(void 0);return{activeIndex:s,handleSetIndex:a=>{s!==a?r(a):r(void 0),t(!e)}}},o=({items:e,classCollapseItem:t,iconUp:s,iconDown:l})=>{let{activeIndex:o,handleSetIndex:c}=n();return r.jsx(r.Fragment,{children:e.map(({title:e,description:n},d)=>r.jsx("div",{onClick:()=>c(d),className:"mx-auto max-w-3xl select-none bg-transparent text-base text-gray-700",children:(0,r.jsxs)("div",{className:t,children:[(0,r.jsxs)("div",{className:"align-center flex justify-between",id:`accordion__heading-${d}`,"aria-disabled":"false","aria-expanded":"false","aria-controls":`accordion__panel-${d}`,role:"button",children:[r.jsx("h2",{className:"w-full pr-2 text-lg font-medium leading-6 text-gray-900 dark:text-slate-300",children:e}),l&&s?o===d?s:l:o===d?r.jsx(a.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"}):r.jsx(i.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"})]}),o===d&&r.jsx("div",{className:"mt-3 select-none","aria-labelledby":`accordion__heading-${d}`,id:`accordion__panel-${d}`,children:r.jsx("p",{className:"mt-2 text-gray-600 dark:text-slate-400",children:n})})]})},`accordion-${d}`))})}},9359:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Z,metadata:()=>C});var r=s(9510),a=s(1669),i=s(3700),l=s(5334),n=s(8730),o=s(7586),c=s(6237);let d=({header:e,prices:t,id:s,hasBackground:a=!1})=>(0,r.jsxs)(n.Z,{id:s||"",hasBackground:a,containerClass:"",children:[e&&r.jsx(l.Z,{header:e,containerClass:"max-w-5xl",titleClass:"text-2xl sm:text-3xl"}),r.jsx("div",{className:"flex items-stretch justify-center",children:r.jsx("div",{className:"grid grid-cols-3 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",children:t&&t.map(({title:e,subtitle:t,price:a,period:l,items:n,callToAction:d,hasRibbon:m=!1,ribbonTitle:u},x)=>r.jsx("div",{className:"col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1",children:a&&l&&(0,r.jsxs)("div",{className:"card max-w-sm flex flex-col justify-between text-center",children:[m&&u&&r.jsx("div",{className:"absolute right-[-5px] rtl:right-auto rtl:left-[-5px] top-[-5px] z-[1] h-[100px] w-[100px] overflow-hidden text-right",children:r.jsx("span",{className:"absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']",children:u})}),(0,r.jsxs)("div",{className:"px-2 py-0",children:[e&&r.jsx("h3",{className:"text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2",children:e}),t&&r.jsx("p",{className:"font-light sm:text-lg text-gray-600 dark:text-slate-400",children:t}),(0,r.jsxs)("div",{className:"my-8",children:[(0,r.jsxs)("div",{className:"flex items-center justify-center text-center mb-1",children:[r.jsx("span",{className:"text-5xl",children:"$"}),r.jsx("span",{className:"text-6xl font-extrabold",children:a})]}),r.jsx("span",{className:"text-base leading-6 lowercase text-gray-600 dark:text-slate-400",children:l})]}),n&&r.jsx("div",{className:"my-8 md:my-10 space-y-2 text-left",children:r.jsx(o.Z,{id:s,items:n,columns:1,defaultIcon:c.Z,containerClass:"gap-2 md:gap-y-2",panelClass:"flex items-start space-x-2",iconClass:"w-4 h-4 mt-1.5 mr-2 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"})})]}),d&&r.jsx(i.Z,{callToAction:d,linkClass:`btn ${m?"btn-primary":""}`})]})},`pricing-${x}`))})})]});var m=s(5444),u=(0,m.Z)("minus","IconMinus",[["path",{d:"M5 12l14 0",key:"svg-0"}]]);let x=({header:e,columns:t,id:s,hasBackground:a=!1})=>(0,r.jsxs)(n.Z,{id:s||"",hasBackground:a,containerClass:"",children:[e&&r.jsx(l.Z,{header:e,titleClass:"text-2xl sm:text-3xl"}),r.jsx("div",{className:"relative ml-[-1em] flex overflow-x-auto md:pb-12",children:t.map(({title:e,items:t,callToAction:s},l)=>(0,r.jsxs)("div",{className:`relative mx-auto w-full min-w-fit max-w-3xl select-none border-r border-solid border-gray-300 px-4 py-4 first-of-type:sticky first-of-type:left-0 first-of-type:z-10 first-of-type:w-auto ${a?"first-of-type:bg-primary-50 first-of-type:dark:bg-slate-800":"first-of-type:bg-white first-of-type:dark:bg-slate-900"} first-of-type:pl-6 last-of-type:border-none dark:border-slate-500  md:px-5 md:first-of-type:w-full md:first-of-type:pl-5`,children:[r.jsx("h3",{className:`mb-4 border-b border-solid border-gray-300 pb-4 text-lg font-medium uppercase leading-6 text-gray-900 dark:border-slate-500 dark:text-white ${0===l?"text-left":"text-center"}`,children:e}),t&&t.map(({title:e},t)=>r.jsx("div",{className:`leading-7 text-gray-600 dark:text-slate-400 ${0===l?"text-left":"text-center"}`,children:!0===e?r.jsx(c.Z,{className:"mt-2 w-full"}):!1===e?r.jsx(u,{className:"mt-2 w-full"}):0!==l?r.jsx("p",{className:"mt-2",children:e}):r.jsx("h4",{className:"mt-2 text-lg",children:e})},`column-content-${t}`)),0!==l&&s&&r.jsx(i.Z,{callToAction:s,linkClass:"btn btn-primary mt-8"})]},`column-content-${l}`))})]});var p=s(8570);let h=(0,p.createProxy)(String.raw`/home/ubuntu/web/meals-web/src/components/common/Collapse.tsx`),{__esModule:f,$$typeof:g}=h;h.default;let b=(0,p.createProxy)(String.raw`/home/ubuntu/web/meals-web/src/components/common/Collapse.tsx#default`);var j=(0,m.Z)("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]);let y=({header:e,items:t,callToAction:s,id:a,hasBackground:o=!1})=>r.jsx(n.Z,{id:a||"",hasBackground:o,containerClass:"",children:r.jsx("div",{className:"flex items-stretch justify-center",children:(0,r.jsxs)("div",{className:"grid w-full md:grid-cols-3 md:items-center md:gap-4",children:[(0,r.jsxs)("div",{className:"block h-full sm:flex sm:items-center sm:justify-between md:mt-10 md:block",children:[e&&r.jsx(l.Z,{header:e,titleClass:"text-3xl sm:text-4xl"}),s&&r.jsx(i.Z,{callToAction:s,linkClass:"btn btn-primary mb-8 sm:w-auto sm:justify-start"})]}),r.jsx("div",{className:"mt-4 h-fit md:col-span-2 md:mx-4 md:mt-0 md:px-4",children:r.jsx(b,{items:t,classCollapseItem:"border-b border-solid border-slate-300 dark:border-slate-500 py-5",iconUp:r.jsx(u,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"}),iconDown:r.jsx(j,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"})})})]})})}),v={title:"Plans and Prices",subtitle:(0,r.jsxs)(r.Fragment,{children:[r.jsx("span",{className:"hidden md:inline",children:`Here, you'll find a clear breakdown of our service plans and their respective features. Whether you're a small
        business or a large enterprise, we have options tailored to your needs.`})," ","You can choose the plan that best suits your goals!"]}),tagline:"Demo Pricing Page"},w={id:"pricing-on-pricing",hasBackground:!0,header:{title:"Our plans",subtitle:(0,r.jsxs)(r.Fragment,{children:["Discover our flexible pricing options designed to fit your needs perfectly."," ",r.jsx("span",{className:"hidden md:inline",children:"No matter the size of your project, we have the right plan for you."})]})},prices:[{title:"basic",subtitle:"Optimal choice for personal use",price:29,period:"per month",items:[{description:"Access to a selection of professionally designed website templates."},{description:"Email support to assist you with any questions or issues."},{description:"Adequate storage space for small to medium-sized websites."},{description:"Core features for a functional online presence, such as SEO tools and contact forms."}],callToAction:{targetBlank:!0,text:"Free 7-day trial",href:"/"},hasRibbon:!1},{title:"standard",subtitle:"Optimal choice for small teams",price:69,period:"per month",items:[{description:"A larger variety of premium website templates to choose from."},{description:"Faster response times and priority customer support."},{description:"More storage space to accommodate growing websites and content."},{description:"Enable e-commerce capabilities to sell products or services online."}],callToAction:{targetBlank:!0,text:"Free 15-day trial",href:"/"},hasRibbon:!0,ribbonTitle:"Popular"},{title:"premium",subtitle:"Optimal choice for companies",price:199,period:"per month",items:[{description:"Access to exclusive and customizable premium website templates."},{description:"Round-the-clock customer support for immediate assistance."},{description:"No limits on storage, ideal for extensive websites and media."},{description:"Advanced SEO, analytics, and marketing tools for optimal performance and growth."}],callToAction:{targetBlank:!0,text:"Free 30-day trial",href:"/"},hasRibbon:!1}]},N={id:"comparison-on-pricing",hasBackground:!1,header:{title:"What's available for each plan?",subtitle:"Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien."},columns:[{title:"compare plans",items:[{title:"In vitae finibus"},{title:"Cras sollicitudin"},{title:"Suspendisse"},{title:"Vestibulum ornare"},{title:"In hendrerit"},{title:"Ut pharetra"}]},{title:"basic",items:[{title:"Free 7-day trial"},{title:"Limited"},{title:"$29"},{title:!1},{title:!1},{title:!0}],callToAction:{text:"Get started",href:"/"}},{title:"standard",items:[{title:"Free 15-day trial"},{title:"Unlimited"},{title:"$69"},{title:!1},{title:!0},{title:!0}],callToAction:{text:"Get started",href:"/"}},{title:"premium",items:[{title:"Free 30-day trial"},{title:"Unlimited"},{title:"$199"},{title:!0},{title:!0},{title:!0}],callToAction:{text:"Get started",href:"/"}}]},k={id:"faqsThree-on-pricing",hasBackground:!0,header:{title:"Pricing FAQs",subtitle:"Do you have other questions?",position:"left"},items:[{title:"Which plan is best for me?",description:"Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula."},{title:"What are my payment options?",description:"Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus."},{title:"How do I change my plan to a different one?",description:"Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur."},{title:"What happen at the end of my free trial?",description:"Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc."},{title:"Can I import data from other tools?",description:"Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur."},{title:"Can I cancel my plan at any time?",description:"Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros."}],callToAction:{text:"Contact us",href:"/contact"}},C={title:"Pricing"},Z=()=>(0,r.jsxs)(r.Fragment,{children:[r.jsx(a.Z,{...v}),r.jsx(d,{...w}),r.jsx(x,{...N}),r.jsx(y,{...k})]})},6237:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var r=(0,s(5444).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},3700:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var r=s(9510),a=s(7371),i=s(2386);let l=({callToAction:e,containerClass:t,linkClass:s,iconClass:l})=>{let{text:n,href:o,icon:c,targetBlank:d}=e;return r.jsx(r.Fragment,{children:o&&(n||c)&&r.jsx("div",{className:(0,i.m6)("flex w-auto cursor-pointer",t),children:d?(0,r.jsxs)(a.default,{className:(0,i.m6)("inline-flex items-center justify-center w-full sm:mb-0",s),href:o,target:"_blank",rel:"noopener noreferrer",children:[c&&r.jsx(c,{className:(0,i.m6)(`w-5 h-5 ${n?"mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5":""}`,l)}),n]}):(0,r.jsxs)(a.default,{className:(0,i.m6)("inline-flex items-center justify-center w-full sm:mb-0 ",s),href:o,children:[c&&r.jsx(c,{className:(0,i.m6)(`w-5 h-5 ${n?"mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5":""}`,l)}),n]})})})}},5334:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(9510),a=s(2386);let i=({header:e,containerClass:t,titleClass:s,subtitleClass:i})=>{let{title:l,subtitle:n,tagline:o,position:c}=e;return r.jsx("div",{className:"mb-4",children:(l||n||o)&&(0,r.jsxs)("div",{className:(0,a.m6)(`mb-6 mx-auto md:mb-12 ${"left"===c?"text-left ml-0":"right"===c?"text-right mr-0":"text-center"}`,t),children:[o&&r.jsx("p",{className:"text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200",children:o}),l&&r.jsx("h2",{className:(0,a.m6)("font-heading mb-4 font-bold tracking-tight",s),children:l}),n&&r.jsx("p",{className:(0,a.m6)(`mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 ${"left"===c?"text-left ml-0":"right"===c?"text-right mr-0":"text-center"}`,i),children:n})]})})}},7586:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var r=s(9510),a=s(2386),i=s(3700);let l=({id:e,items:t,columns:s,defaultColumns:l,defaultIcon:n,containerClass:o,panelClass:c,iconClass:d,titleClass:m,descriptionClass:u,actionClass:x})=>r.jsx(r.Fragment,{children:t&&r.jsx("div",{className:(0,a.m6)(`grid mx-auto gap-8 md:gap-y-12 ${4===(s||l)?"lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2":3===(s||l)?"lg:grid-cols-3 sm:grid-cols-2":2===(s||l)?"sm:grid-cols-2":"max-w-4xl"}`,o),children:t.map(({title:t,description:s,icon:l,callToAction:o},p)=>r.jsx("div",{children:(0,r.jsxs)("div",{className:((0,a.m6)("flex flex-row max-w-md"),c),children:[r.jsx("div",{className:"flex justify-center",children:l?r.jsx(l,{className:(0,a.m6)("w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2",d)}):n?r.jsx(n,{className:(0,a.m6)("w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2",d)}):null}),(0,r.jsxs)("div",{className:"mt-0.5",children:[t&&r.jsx("h3",{className:(0,a.m6)("text-xl font-bold",m),children:t}),s&&r.jsx("p",{className:(0,a.m6)(`text-gray-600 dark:text-slate-400 ${t?"mt-3":""}`,u),children:s}),o&&r.jsx(i.Z,{callToAction:o,linkClass:(0,a.m6)(`${t||s?"mt-3":""} text-primary font-bold text-blue-600 hover:underline dark:text-gray-200 cursor-pointer`,x)})]})]})},e?`item-${e}-${p}`:`item-grid-${p}`))})})},8730:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var r=s(9510),a=s(2386);let i=({children:e,hasBackground:t})=>r.jsx("div",{className:`absolute inset-0 ${t?"bg-primary-50 dark:bg-slate-800":"bg-transparent"}`,children:e}),l=({children:e,id:t,hasBackground:s,containerClass:l})=>(0,r.jsxs)("section",{className:"relative not-prose scroll-mt-[72px]",id:t,children:[r.jsx(i,{hasBackground:s}),r.jsx("div",{className:(0,a.m6)("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",l),children:e})]})},1669:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var r=s(9510),a=s(7710),i=s(3700);let l=({title:e,subtitle:t,tagline:s,callToAction:l,callToAction2:n,image:o})=>r.jsx("section",{id:"heroOne",children:r.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6",children:(0,r.jsxs)("div",{className:"py-12 md:py-20",children:[(0,r.jsxs)("div",{className:"mx-auto max-w-4xl pb-10 text-center md:pb-16",children:[s&&r.jsx("p",{className:"text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200",children:s}),e&&r.jsx("h1",{className:"leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl",children:e}),(0,r.jsxs)("div",{className:"mx-auto max-w-3xl",children:[t&&r.jsx("p",{className:"mb-6 text-xl font-normal text-gray-600 dark:text-slate-400",children:t}),(0,r.jsxs)("div",{className:"flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center",children:[l&&r.jsx(i.Z,{callToAction:l,linkClass:"btn btn-primary"}),n&&r.jsx(i.Z,{callToAction:n,linkClass:"btn"})]})]})]}),o&&r.jsx("div",{className:"relative m-auto max-w-5xl",children:r.jsx(a.default,{className:"mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700",src:o.src,alt:o.alt,width:1024,height:607,sizes:"(max-width: 64rem) 100vw, 1024px",loading:"eager",placeholder:"blur",priority:!0})})]})})})}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[69,481,710,615,434],()=>s(2025));module.exports=r})();