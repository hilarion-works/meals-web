(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[588],{1461:function(e,t,r){Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,831)),Promise.resolve().then(r.bind(r,953)),Promise.resolve().then(r.bind(r,9111))},1991:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(2265),s=r(1448),l=r.n(s),n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},i=Object.defineProperty,A=Object.defineProperties,c=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&x(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&x(e,r,t[r]);return e},h=(e,t)=>A(e,c(t)),f=(e,t)=>{var r={};for(var a in e)m.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))0>t.indexOf(a)&&d.call(e,a)&&(r[a]=e[a]);return r},p=(e,t,r)=>{let s=(0,a.forwardRef)((t,s)=>{var{color:l="currentColor",size:i=24,stroke:A=2,children:c}=t,o=f(t,["color","size","stroke","children"]);return(0,a.createElement)("svg",u(h(u({ref:s},n),{width:i,height:i,stroke:l,strokeWidth:A,className:"tabler-icon tabler-icon-".concat(e)}),o),[...r.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...c||[]])});return s.propTypes={color:l().string,size:l().oneOfType([l().string,l().number]),stroke:l().oneOfType([l().string,l().number])},s.displayName="".concat(t),s}},6648:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var a=r(5601),s=r.n(a)},5601:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return A},getImageProps:function(){return i}});let a=r(9920),s=r(497),l=r(8173),n=a._(r(1241));function i(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let A=l.Image},9949:function(e,t,r){"use strict";var a=r(8877);function s(){}function l(){}l.resetWarningCache=s,e.exports=function(){function e(e,t,r,s,l,n){if(n!==a){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:s};return r.PropTypes=r,r}},1448:function(e,t,r){e.exports=r(9949)()},8877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},953:function(e,t,r){"use strict";var a=r(7437),s=r(2265),l=r(6164);t.default=e=>{let{title:t,description:r,inputs:n,radioBtns:i,textarea:A,checkboxes:c,btn:o,btnPosition:m,containerClass:d}=e,[x,u]=(0,s.useState)([]),[h,f]=(0,s.useState)(""),[p,g]=(0,s.useState)(""),[b,v]=(0,s.useState)(Array(c&&c.length).fill(!1)),j=e=>{let{name:t,value:r}=e.target;u({...x,[t]:r})},y=e=>{f(e.target.value)},w=e=>{g(e.target.value)},N=e=>{v(t=>{let r=[...t];return r.map(()=>{r[e]=!b[e]}),r})};return(0,a.jsxs)("form",{id:"contactForm",className:(0,l.m6)("",d),children:[t&&(0,a.jsx)("h2",{className:"".concat(r?"mb-2":"mb-4"," text-2xl font-bold"),children:t}),r&&(0,a.jsx)("p",{className:"mb-4",children:r}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("div",{className:"mx-0 mb-1 sm:mb-4",children:n&&n.map((e,t)=>{let{type:r,label:s,name:l,autocomplete:n,placeholder:i}=e;return(0,a.jsxs)("div",{className:"mx-0 mb-1 sm:mb-4",children:[(0,a.jsx)("label",{htmlFor:l,className:"pb-1 text-xs uppercase tracking-wider",children:s}),(0,a.jsx)("input",{type:r,id:l,name:l,autoComplete:n,value:x[t],onChange:j,placeholder:i,className:"mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"})]},"item-input-".concat(t))})}),i&&(0,a.jsxs)("div",{className:"mx-0 mb-1 sm:mb-3",children:[(0,a.jsx)("span",{className:"pb-1 text-xs uppercase tracking-wider",children:null==i?void 0:i.label}),(0,a.jsx)("div",{className:"flex flex-wrap",children:i.radios.map((e,t)=>{let{label:r}=e;return(0,a.jsxs)("div",{className:"mr-4 items-baseline",children:[(0,a.jsx)("input",{id:r,type:"radio",name:r,value:"value".concat(t),checked:h==="value".concat(t),onChange:y,className:"cursor-pointer"}),(0,a.jsx)("label",{htmlFor:r,className:"ml-2",children:r})]},"radio-btn-".concat(t))})})]}),A&&(0,a.jsxs)("div",{className:"mx-0 mb-1 sm:mb-4",children:[(0,a.jsx)("label",{htmlFor:A.name,className:"pb-1 text-xs uppercase tracking-wider",children:A.label}),(0,a.jsx)("textarea",{id:A.name,name:A.name,cols:A.cols,rows:A.rows,value:p,onChange:e=>w(e),placeholder:A.placeholder,className:"mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"})]}),c&&(0,a.jsx)("div",{className:"mx-0 mb-1 sm:mb-4",children:c.map((e,t)=>{let{label:r}=e;return(0,a.jsxs)("div",{className:"mx-0 my-1 flex items-baseline",children:[(0,a.jsx)("input",{id:r,type:"checkbox",name:r,checked:b[t],onChange:()=>N(t),className:"cursor-pointer"}),(0,a.jsx)("label",{htmlFor:r,className:"ml-2",children:r})]},"checkbox-".concat(t))})})]}),o&&(0,a.jsx)("div",{className:"".concat("left"===m?"text-left":"right"===m?"text-right":"text-center"),children:(0,a.jsx)("button",{type:o.type||"button",className:"btn btn-primary sm:mb-0",children:o.title})})]})}},4294:function(e,t,r){"use strict";var a=r(7437),s=r(6164);t.Z=e=>{let{header:t,containerClass:r,titleClass:l,subtitleClass:n}=e,{title:i,subtitle:A,tagline:c,position:o}=t;return(0,a.jsx)("div",{className:"mb-4",children:(i||A||c)&&(0,a.jsxs)("div",{className:(0,s.m6)("mb-6 mx-auto md:mb-12 ".concat("left"===o?"text-left ml-0":"right"===o?"text-right mr-0":"text-center"),r),children:[c&&(0,a.jsx)("p",{className:"text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200",children:c}),i&&(0,a.jsx)("h2",{className:(0,s.m6)("font-heading mb-4 font-bold tracking-tight",l),children:i}),A&&(0,a.jsx)("p",{className:(0,s.m6)("mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 ".concat("left"===o?"text-left ml-0":"right"===o?"text-right mr-0":"text-center"),n),children:A})]})})}},1458:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(7437),s=r(6164),l=e=>{let{children:t,hasBackground:r}=e;return(0,a.jsx)("div",{className:"absolute inset-0 ".concat(r?"bg-primary-50 dark:bg-slate-800":"bg-transparent"),children:t})},n=e=>{let{children:t,id:r,hasBackground:n,containerClass:i}=e;return(0,a.jsxs)("section",{className:"relative not-prose scroll-mt-[72px]",id:r,children:[(0,a.jsx)(l,{hasBackground:n}),(0,a.jsx)("div",{className:(0,s.m6)("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",i),children:t})]})}},9111:function(e,t,r){"use strict";r.d(t,{default:function(){return u}});var a=r(7437),s=r(4294),l=r(1458),n=r(6648),i=r(6164),A=e=>{let{dividerLineClass:t}=e;return(0,a.jsx)("hr",{className:(0,i.m6)("border-gray-200 dark:border-gray-700 my-4",t)})},c=e=>{let{name:t,job:r,testimonial:s,image:l,isTestimonialUp:c,hasDividerLine:o,startSlice:m,endSlice:d,containerClass:x,panelClass:u,imageClass:h,dataClass:f,nameJobClass:p,nameClass:g,jobClass:b,testimonialClass:v}=e;return(0,a.jsx)("div",{className:(0,i.m6)("select-none",x),children:(0,a.jsxs)("div",{className:(0,i.m6)("flex ".concat(c?"flex-col-reverse":"flex-col"),u),children:[(l&&t||t&&r)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:(0,i.m6)("flex items-center",f),children:[l&&(0,a.jsx)(n.default,{src:l.src,width:248,height:248,alt:l.alt,className:(0,i.m6)("object-cover shadow-lg bg-gray-500 dark:bg-slate-700",h)}),(0,a.jsxs)("div",{className:(0,i.m6)("flex flex-col justify-center",p),children:[t&&(0,a.jsx)("h3",{className:(0,i.m6)("font-semibold",g),children:t}),r&&(0,a.jsx)("span",{className:(0,i.m6)("dark:text-slate-400",b),children:r})]})]}),o&&(0,a.jsx)(A,{})]}),s&&(0,a.jsx)("blockquote",{className:(0,i.m6)("flex-auto",v),children:(0,a.jsx)("p",{className:"font-light dark:text-slate-400",children:void 0!==m&&void 0!==d?'" '.concat(s.slice(Number(m),Number(d)),'... "'):'" '.concat(s,' "')})})]})})},o=r(1991),m=(0,o.Z)("chevron-left","IconChevronLeft",[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]]),d=(0,o.Z)("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]]),x=r(2265),u=e=>{let{header:t,testimonials:r,isTestimonialUp:n,id:i,hasBackground:A=!1}=e,[o,u]=(0,x.useState)(0),h=r.length-1,f=e=>{o>0&&u(e-1)},p=e=>{o<h&&u(e+1)};return(0,a.jsxs)(l.Z,{id:i||"",hasBackground:A,containerClass:"",children:[t&&(0,a.jsx)(s.Z,{header:t,titleClass:"text-2xl sm:text-3xl"}),(0,a.jsx)("div",{className:"card flex overflow-hidden mx-auto max-w-6xl",children:r.map((e,t)=>{let{name:r,job:s,testimonial:l,image:i}=e;return l&&(0,a.jsxs)("div",{className:"mx-auto inline-flex flex-col items-stretch justify-center min-w-full transition-all duration-300 linear max-w-6xl",style:{transform:"translate(-".concat(100*o,"%)")},children:[(0,a.jsx)(c,{name:r,job:s,testimonial:l,isTestimonialUp:n,image:i,containerClass:"flex w-full h-full px-4 py-8 text-center lg:py-16 lg:px-6",panelClass:"w-full md:max-w-md lg:max-w-screen-sm mx-auto",imageClass:"w-6 h-6 rounded-full",dataClass:"mt-8 space-x-3 mx-auto",nameJobClass:"flex flex-row items-center divide-x-2 divide-gray-500 dark:divide-gray-700",nameClass:"pr-3 font-medium text-gray-900 dark:text-white",jobClass:"pl-3 text-sm font-light text-gray-500 dark:text-gray-400",testimonialClass:"text-2xl font-medium text-gray-900 dark:text-white"}),(0,a.jsxs)("div",{className:"md:absolute md:inset-0 flex items-center justify-center md:justify-between p-4 mb-6 md:mb-0",children:[(0,a.jsx)("button",{onClick:()=>f(t),children:(0,a.jsx)(m,{className:"w-12 h-12 mr-4 ".concat(0===o?"cursor-not-allowed text-gray-400 dark:text-gray-600":"text-black dark:text-white")})}),(0,a.jsx)("button",{onClick:()=>p(t),children:(0,a.jsx)(d,{className:"w-12 h-12 ml-4 ".concat(o===h?"cursor-not-allowed text-gray-400 dark:text-gray-600":"text-black dark:text-white")})})]})]},"item-testimonial-".concat(t))})})]})}},831:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/hero2.a5cf14e9.jpg",height:3024,width:4032,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAGIL//EABYQAAMAAAAAAAAAAAAAAAAAAAIDJP/aAAgBAQABBQImz//EABYRAAMAAAAAAAAAAAAAAAAAAAADMf/aAAgBAwEBPwFlP//EABYRAAMAAAAAAAAAAAAAAAAAAAADMf/aAAgBAgEBPwFUP//EABcQAQADAAAAAAAAAAAAAAAAABEAITH/2gAIAQEABj8CCtn/xAAZEAABBQAAAAAAAAAAAAAAAAABACFBcfH/2gAIAQEAAT8hZCMBrF//2gAMAwEAAgADAAAAEAP/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPxAgL//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/ECCv/8QAGhABAQACAwAAAAAAAAAAAAAAAREAITFBUf/aAAgBAQABPxB01XGB2JT1VYhvvP/Z",blurWidth:8,blurHeight:6}}},function(e){e.O(0,[173,231,164,971,23,744],function(){return e(e.s=1461)}),_N_E=e.O()}]);