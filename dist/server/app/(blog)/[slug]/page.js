(()=>{var e={};e.id=206,e.ids=[206],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},8021:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>l,routeModule:()=>f,tree:()=>d}),r(5),r(5866),r(6242);var n=r(3191),o=r(8716),a=r(7922),i=r.n(a),s=r(5231),u={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>s[e]);r.d(t,u);let d=["",{children:["(blog)",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5)),"/home/ubuntu/web/meals-web/app/(blog)/[slug]/page.jsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,6242)),"/home/ubuntu/web/meals-web/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],l=["/home/ubuntu/web/meals-web/app/(blog)/[slug]/page.jsx"],c="/(blog)/[slug]/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(blog)/[slug]/page",pathname:"/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9568:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2481,23))},5:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p,dynamicParams:()=>u,generateMetadata:()=>l,generateStaticParams:()=>c});var n=r(9510),o=r(9821),a=r(7710),i=r(1085),s=r(513);let u=!1,d=e=>e;async function l({params:e}){let t=await (0,s.Uv)(e.slug);return t?{title:t.title,description:t.description}:(0,i.notFound)()}async function c(){return(await (0,s.eO)()).map(({slug:e})=>({slug:e}))}async function p({params:e}){let t=await (0,s.Uv)(e.slug);return t?n.jsx("section",{className:"mx-auto py-8 sm:py-16 lg:py-20",children:(0,n.jsxs)("article",{children:[(0,n.jsxs)("header",{className:t.image?"text-center":"",children:[(0,n.jsxs)("p",{className:"mx-auto max-w-3xl px-4 sm:px-6",children:[n.jsx("time",{dateTime:t.publishDate,children:d(t.publishDate)})," ~"," "]}),n.jsx("h1",{className:"leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl",children:t.title}),t.image?n.jsx(a.default,{src:t.image,className:"mx-auto mt-4 mb-6 max-w-full bg-gray-400 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl",sizes:"(max-width: 900px) 400px, 900px",alt:t.description,loading:"eager",priority:!0,width:900,height:480}):n.jsx("div",{className:"mx-auto max-w-3xl px-4 sm:px-6",children:n.jsx("div",{className:"border-t dark:border-slate-700"})})]}),n.jsx("div",{className:"prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl",dangerouslySetInnerHTML:{__html:(0,o.Z)({html:!0}).render(t.content)}})]})}):(0,i.notFound)()}},1085:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return i},RedirectType:function(){return n.RedirectType},notFound:function(){return o.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(3953),o=r(6399);class a extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class i extends URLSearchParams{append(){throw new a}delete(){throw new a}set(){throw new a}sort(){throw new a}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8586:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3953:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return u},getRedirectStatusCodeFromError:function(){return m},getRedirectTypeFromError:function(){return f},getURLFromRedirectError:function(){return p},isRedirectError:function(){return c},permanentRedirect:function(){return l},redirect:function(){return d}});let o=r(4580),a=r(2934),i=r(8586),s="NEXT_REDIRECT";function u(e,t,r){void 0===r&&(r=i.RedirectStatusCode.TemporaryRedirect);let n=Error(s);n.digest=s+";"+t+";"+e+";"+r+";";let a=o.requestAsyncStorage.getStore();return a&&(n.mutableCookies=a.mutableCookies),n}function d(e,t){void 0===t&&(t="replace");let r=a.actionAsyncStorage.getStore();throw u(e,t,(null==r?void 0:r.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.TemporaryRedirect)}function l(e,t){void 0===t&&(t="replace");let r=a.actionAsyncStorage.getStore();throw u(e,t,(null==r?void 0:r.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.PermanentRedirect)}function c(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,o]=e.digest.split(";",4),a=Number(o);return t===s&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(a)&&a in i.RedirectStatusCode}function p(e){return c(e)?e.digest.split(";",3)[2]:null}function f(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!c(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},513:(e,t,r)=>{"use strict";let n;r.d(t,{Uv:()=>f,eO:()=>p});var o=r(7147),a=r.n(o),i=r(3673),s=r.n(i),u=r(1017);let d=(0,u.join)(process.cwd(),"src/content/blog"),l=()=>Promise.all(a().readdirSync(d).filter(e=>e.endsWith(".md")).map(async e=>{let t=e.replace(".md","");return await f(t)})),c=async()=>(n=n||l(),await n),p=async({count:e}={})=>{let t=await c();return t?t.slice(-1*(e||4)):[]},f=async e=>{if(!e)return null;try{let t=a().readFileSync((0,u.join)(d,`${e}.md`),"utf-8"),{data:r,content:n}=s()(t);return{slug:e,...r,content:n}}catch(e){}return null}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[69,481,710,821,673,434],()=>r(8021));module.exports=n})();