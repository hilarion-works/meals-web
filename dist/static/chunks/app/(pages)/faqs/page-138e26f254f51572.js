(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[419],{2032:function(e,t,r){Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,9882))},1991:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(2265),a=r(1448),s=r.n(a),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&x(e,r,t[r]);if(d)for(var r of d(t))u.call(t,r)&&x(e,r,t[r]);return e},h=(e,t)=>c(e,o(t)),f=(e,t)=>{var r={};for(var n in e)m.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&d)for(var n of d(e))0>t.indexOf(n)&&u.call(e,n)&&(r[n]=e[n]);return r},v=(e,t,r)=>{let a=(0,n.forwardRef)((t,a)=>{var{color:s="currentColor",size:l=24,stroke:c=2,children:o}=t,d=f(t,["color","size","stroke","children"]);return(0,n.createElement)("svg",p(h(p({ref:a},i),{width:l,height:l,stroke:s,strokeWidth:c,className:"tabler-icon tabler-icon-".concat(e)}),d),[...r.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...o||[]])});return a.propTypes={color:s().string,size:s().oneOfType([s().string,s().number]),stroke:s().oneOfType([s().string,s().number])},a.displayName="".concat(t),a}},4754:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(1991).Z)("chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]])},8239:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(1991).Z)("chevron-up","IconChevronUp",[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]])},9949:function(e,t,r){"use strict";var n=r(8877);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,s,i){if(i!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:a};return r.PropTypes=r,r}},1448:function(e,t,r){e.exports=r(9949)()},8877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5210:function(e,t,r){"use strict";r.d(t,{default:function(){return c}});var n=r(7437),a=r(8239),s=r(4754),i=r(2265),l=()=>{let[e,t]=(0,i.useState)(!0),[r,n]=(0,i.useState)(void 0);return{activeIndex:r,handleSetIndex:a=>{r!==a?n(a):n(void 0),t(!e)}}},c=e=>{let{items:t,classCollapseItem:r,iconUp:i,iconDown:c}=e,{activeIndex:o,handleSetIndex:d}=l();return(0,n.jsx)(n.Fragment,{children:t.map((e,t)=>{let{title:l,description:m}=e;return(0,n.jsx)("div",{onClick:()=>d(t),className:"mx-auto max-w-3xl select-none bg-transparent text-base text-gray-700",children:(0,n.jsxs)("div",{className:r,children:[(0,n.jsxs)("div",{className:"align-center flex justify-between",id:"accordion__heading-".concat(t),"aria-disabled":"false","aria-expanded":"false","aria-controls":"accordion__panel-".concat(t),role:"button",children:[(0,n.jsx)("h2",{className:"w-full pr-2 text-lg font-medium leading-6 text-gray-900 dark:text-slate-300",children:l}),c&&i?o===t?i:c:o===t?(0,n.jsx)(a.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"}):(0,n.jsx)(s.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"})]}),o===t&&(0,n.jsx)("div",{className:"mt-3 select-none","aria-labelledby":"accordion__heading-".concat(t),id:"accordion__panel-".concat(t),children:(0,n.jsx)("p",{className:"mt-2 text-gray-600 dark:text-slate-400",children:m})})]})},"accordion-".concat(t))})})}},4294:function(e,t,r){"use strict";var n=r(7437),a=r(6164);t.Z=e=>{let{header:t,containerClass:r,titleClass:s,subtitleClass:i}=e,{title:l,subtitle:c,tagline:o,position:d}=t;return(0,n.jsx)("div",{className:"mb-4",children:(l||c||o)&&(0,n.jsxs)("div",{className:(0,a.m6)("mb-6 mx-auto md:mb-12 ".concat("left"===d?"text-left ml-0":"right"===d?"text-right mr-0":"text-center"),r),children:[o&&(0,n.jsx)("p",{className:"text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200",children:o}),l&&(0,n.jsx)("h2",{className:(0,a.m6)("font-heading mb-4 font-bold tracking-tight",s),children:l}),c&&(0,n.jsx)("p",{className:(0,a.m6)("mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 ".concat("left"===d?"text-left ml-0":"right"===d?"text-right mr-0":"text-center"),i),children:c})]})})}},1458:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7437),a=r(6164),s=e=>{let{children:t,hasBackground:r}=e;return(0,n.jsx)("div",{className:"absolute inset-0 ".concat(r?"bg-primary-50 dark:bg-slate-800":"bg-transparent"),children:t})},i=e=>{let{children:t,id:r,hasBackground:i,containerClass:l}=e;return(0,n.jsxs)("section",{className:"relative not-prose scroll-mt-[72px]",id:r,children:[(0,n.jsx)(s,{hasBackground:i}),(0,n.jsx)("div",{className:(0,a.m6)("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",l),children:t})]})}},9882:function(e,t,r){"use strict";r.d(t,{default:function(){return f}});var n=r(7437),a=r(4294),s=r(5210),i=r(1991),l=(0,i.Z)("minus","IconMinus",[["path",{d:"M5 12l14 0",key:"svg-0"}]]),c=(0,i.Z)("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]),o=r(2265),d=()=>{let[e,t]=(0,o.useState)({width:0,height:0});return(0,o.useEffect)(()=>{let e=()=>{t({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e},m=r(4754),u=r(8239),x=(0,i.Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]),p=e=>{var t;let{options:r,activeTab:a,onActiveTabSelected:s,iconUp:i,iconDown:l}=e,[c,d]=(0,o.useState)(!1),[p,h]=(0,o.useState)(null===(t=r[a].link)||void 0===t?void 0:t.label),f=(e,t)=>{var r;h(null===(r=e.link)||void 0===r?void 0:r.label),s(t)};return(0,o.useEffect)(()=>{let e=()=>d(!1);return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}}),(0,n.jsxs)("div",{className:"relative mt-4 rounded-md border border-gray-400 text-left",children:[(0,n.jsxs)("div",{onClick:e=>{e.stopPropagation(),d(!c)},className:"flex select-none items-center justify-between rounded-md p-3",children:[(0,n.jsx)("div",{className:"text-lg",children:p}),l&&i?!1===c?l:i:!1===c?(0,n.jsx)(m.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"}):(0,n.jsx)(u.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"})]}),c&&(0,n.jsx)("div",{className:"absolute w-full translate-y-1 overflow-auto rounded-md border border-gray-400",children:r.map((e,t)=>{var r;return(0,n.jsxs)("div",{onClick:()=>f(e,t),className:"flex cursor-pointer items-center bg-white p-3 text-lg dark:bg-slate-900 ".concat(a!==t?"pl-10":"text-primary-600 dark:text-primary-200"),children:[a===t&&(0,n.jsx)(x,{className:"mr-2 h-5 w-5"})," ",null===(r=e.link)||void 0===r?void 0:r.label]},"option-".concat(t))})})]})},h=r(1458),f=e=>{let{header:t,tabs:r,id:i,hasBackground:m=!1}=e,{width:u}=d(),[x,f]=(0,o.useState)(0);return(0,n.jsxs)(h.Z,{id:i||"",hasBackground:m,containerClass:"",children:[t&&(0,n.jsx)(a.Z,{header:t,titleClass:"text-3xl sm:text-4xl"}),(0,n.jsx)("div",{className:"flex items-stretch justify-center",children:(0,n.jsxs)("div",{className:"grid w-full md:grid-cols-3 md:items-center md:gap-4",children:[u>767?(0,n.jsx)("div",{className:"block h-full sm:flex sm:items-center sm:justify-between md:mx-4 md:mt-10 md:block md:px-4",children:(0,n.jsx)("div",{className:"flex h-fit w-full justify-center sm:w-auto sm:justify-start",children:(0,n.jsx)("ul",{children:r.map((e,t)=>{var r;return(0,n.jsx)("li",{className:"mb-5 flex cursor-pointer items-center ".concat(x===t?"text-primary-600 dark:text-primary-200":""),tabIndex:0,onClick:()=>{f(t)},children:(0,n.jsx)("span",{className:"w-full text-xl hover:underline",children:null===(r=e.link)||void 0===r?void 0:r.label})},"tab-".concat(t))})})})}):(0,n.jsx)(p,{options:r,activeTab:x,onActiveTabSelected:e=>{f(e)}}),(0,n.jsx)("div",{className:"mt-4 h-fit md:col-span-2 md:mx-4 md:mt-0 md:px-4",children:r.map((e,t)=>(0,n.jsx)("div",{className:"",children:x===t&&(0,n.jsx)(s.default,{items:e.items,classCollapseItem:"border-b border-solid border-slate-300 dark:border-slate-500 py-5",iconUp:(0,n.jsx)(l,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"}),iconDown:(0,n.jsx)(c,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"})})},"tab-".concat(t)))})]})})]})}}},function(e){e.O(0,[173,231,164,971,23,744],function(){return e(e.s=2032)}),_N_E=e.O()}]);