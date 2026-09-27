import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import{b as n,v as r}from"./ds-BJhQ4zht.js";import{u as i}from"./router-vendor-DDSrk2O2.js";import{D as a}from"./ui-vendor-CUROeZIN.js";import{O as o}from"./markdown-vendor-BoH6QLuc.js";import{n as s}from"./fetchClient-BF44M5G_.js";import{i as c,n as ee}from"./AppContext-Dsu2Mbed.js";import{f as te,l}from"./appsApi-C20a8ISo.js";import{c as ne,i as re,s as ie,t as ae}from"./Dialog-BFakgPRd.js";import{t as oe}from"./useDebounce-D9SbeORx.js";import{a as se,i as u,n as d,r as f}from"./index.esm-CW2TCAl3.js";import{n as p,t as m}from"./validation-vendor-cNC1sexv.js";var h=e(t(),1),g=(e,t,n)=>{if(e&&`reportValidity`in e){let r=f(n,t);e.setCustomValidity(r&&r.message||``),e.reportValidity()}},_=(e,t)=>{for(let n in t.fields){let r=t.fields[n];r&&r.ref&&`reportValidity`in r.ref?g(r.ref,n,e):r&&r.refs&&r.refs.forEach(t=>g(t,n,e))}},v=(e,t)=>{t.shouldUseNativeValidation&&_(e,t);let n={};for(let r in e){let i=f(t.fields,r),a=Object.assign(e[r]||{},{ref:i&&i.ref});if(y(t.names||Object.keys(e),r)){let e=Object.assign({},f(n,r));u(e,`root`,a),u(n,r,e)}else u(n,r,a)}return n},y=(e,t)=>{let n=b(t);return e.some(e=>b(e).match(`^${n}\\.\\d+`))};function b(e){return e.replace(/\]|\[/g,``)}function x(e,t,n){return n===void 0&&(n={}),function(r,i,a){try{return Promise.resolve(function(o,s){try{var c=(t?.context,Promise.resolve(e[n.mode===`sync`?`validateSync`:`validate`](r,Object.assign({abortEarly:!1},t,{context:i}))).then(function(e){return a.shouldUseNativeValidation&&_({},a),{values:n.raw?Object.assign({},r):e,errors:{}}}))}catch(e){return s(e)}return c&&c.then?c.then(void 0,s):c}(0,function(e){if(!e.inner)throw e;return{values:{},errors:v((t=e,n=!a.shouldUseNativeValidation&&a.criteriaMode===`all`,(t.inner||[]).reduce(function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),n){var r=e[t.path].types,i=r&&r[t.type];e[t.path]=d(t.path,n,e,t.type,i?[].concat(i,t.message):t.message)}return e},{})),a)};var t,n}))}catch(e){return Promise.reject(e)}}}var S=o(),C=a.div`
  padding: 1.5rem;
  max-width: 500px;
  min-width: 400px;
`,w=a.div`
  margin-bottom: 1rem;
`,T=a.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.colors.gray[700]};
  font-size: 0.875rem;
`;a.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({theme:e})=>e.colors.gray[300]};
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.875rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary[500]};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary[100]};
  }

  &.error {
    border-color: ${({theme:e})=>e.colors.error||`#dc2626`};
  }
`;var ce=a.span`
  color: ${({theme:e})=>e.colors.error||`#dc2626`};
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
`,E=a.span`
  color: ${({theme:e})=>e.colors.gray[500]};
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
`,le=a.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,D=a.button`
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  ${({$variant:e,theme:t})=>e===`primary`?`
    background: ${t.colors.primary[600]};
    color: white;
    
    &:hover:not(:disabled) {
      background: ${t.colors.primary[700]};
    }
    
    &:disabled {
      background: ${t.colors.gray[400]};
      cursor: not-allowed;
    }
  `:`
    background: ${t.colors.gray[100]};
    color: ${t.colors.gray[700]};
    border: 1px solid ${t.colors.gray[300]};
    
    &:hover:not(:disabled) {
      background: ${t.colors.gray[200]};
    }
  `}
`,ue=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`,O=a.button`
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid ${({theme:e})=>e.colors.gray[300]};
  background: ${({theme:e})=>e.colors.gray[100]};
  color: ${({theme:e})=>e.colors.gray[700]};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.gray[200]};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,de=a.div`
  margin-top: 0.5rem;
`,fe=a.div`
  margin-bottom: 1rem;
`,pe=a.h5`
  margin: 0 0 0.5rem 0;
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
`,me=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
`,he=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem;
`,ge=a.input`
  margin: 0;
`,_e=a.label`
  cursor: pointer;
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
`,ve=m({appId:p().required(`App ID is required`).min(3,`App ID must be at least 3 characters`),persona:p().required(`Please select a persona`),sessionName:p().optional()}),k=({isOpen:e,onClose:t,onCreateSession:a,isLoading:o=!1,currentAppId:u,orgId:d})=>{let{appDescription:f}=ee(),{currentSession:p}=c(),m=i(),g=u?`new-session`:`new-app`,_=m.state?.app,[v,y]=(0,h.useState)(``),[b,k]=(0,h.useState)(null),[A,j]=(0,h.useState)(null),ye=oe(v,300),[M,N]=(0,h.useState)({}),[P,F]=(0,h.useState)([]),[I,L]=(0,h.useState)(!1),[R,z]=(0,h.useState)(null),[B,V]=(0,h.useState)(!1),{data:H}=l(g===`new-session`?u??null:null),{data:be,isLoading:xe}=te({search:ye,limit:50,orgId:d,enabled:g===`new-app`&&!!d}),U=g===`new-session`?H?[H]:[]:be?.apps||[],Se=U.map(e=>({value:e._id||`unknown`,label:e.name||`Unknown App`})),[Ce,we]=(0,h.useState)([{value:`agent`,label:`Standard: multi-agent Tara`},{value:`assistant`,label:`Experimental: direct tool access`}]),Te=async e=>(y(e),[]),{register:W,handleSubmit:Ee,formState:{errors:G,isValid:De},reset:K,setValue:q,getValues:J,watch:Y}=se({resolver:x(ve),mode:`onChange`,defaultValues:{appId:u||p?.appId||``,persona:localStorage.getItem(`tara_last_selected_agent`)||`agent`,sessionName:``}});(0,h.useEffect)(()=>{(async()=>{try{let e=await s(`/personas`);if(e.ok){let t=await e.json();if(t.personas&&Array.isArray(t.personas)){let e=t.personas.map(e=>({value:e.value,label:e.label}));we(e);let n=J(`persona`);!e.some(e=>e.value===n)&&e.length>0&&q(`persona`,e[0].value,{shouldValidate:!0})}}}catch(e){console.error(`Failed to fetch personas, using defaults:`,e)}})()},[q,J]),(0,h.useEffect)(()=>{W(`appId`,{required:`App ID is required`}),W(`persona`,{required:`Please select a persona`})},[W]),(0,h.useEffect)(()=>{(async()=>{if(g===`new-app`&&b?._id)try{let e=await s(`/apps/${b._id}`);if(e.ok){let t=await e.json();t.success&&t.app?.ai_description?j(t.app.ai_description):j(`This description is for ${b.name}`)}}catch(e){console.error(`Failed to fetch app description:`,e),j(`This description is for ${b.name}`)}})()},[b,g]);let X=b?.name||p?.appId,Oe=g===`new-app`&&A?A:f||`This description is for ${X}`;(0,h.useEffect)(()=>{e&&u&&g===`new-session`&&(q(`appId`,u,{shouldValidate:!0}),_&&k({_id:_._id||u,name:_.name,orgName:``,orgId:``}))},[e,u,g,q,_]);let ke=Y(`appId`),Ae=Y(`persona`),Z=async()=>{L(!0),z(null);try{let e=J(`persona`)||`agent`,t=await s(`/available-tools?persona=${encodeURIComponent(e)}`);if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);let n=(await t.json()).tools_by_server||{};N(n);let r=[];Object.values(n).forEach(e=>{e.forEach(e=>{e.enabled_by_default&&r.push(e.name)})}),F(r),V(!0)}catch(e){console.error(`Failed to load tools:`,e),z(`Failed to load tools. Please try again.`)}finally{L(!1)}},je=()=>{let e=[];Object.values(M).forEach(t=>{t.forEach(t=>e.push(t.name))}),F(e)},Q=()=>{F([])},Me=e=>{F(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},Ne=e=>e.includes(`app-info`)?`App Info Server`:e.includes(`documents`)?`Documents Server`:e.includes(`visualisation`)?`Visualization Server`:e.includes(`sessions`)?`Sessions Server`:e.replace(/https?:\/\//,``).split(`.`)[0],Pe=async e=>{try{await a({appId:e.appId,appName:X,appDescription:Oe,persona:e.persona,sessionName:e?.sessionName?.trim()||void 0,toolFilter:P.length>0?P:void 0}),K(),F([]),V(!1),N({}),y(``),j(null),t()}catch(e){console.error(`Failed to create session:`,e)}},$=()=>{K(),F([]),V(!1),N({}),y(``),j(null),t()},Fe=()=>{B&&(V(!1),F([]),N({}),setTimeout(Z,100))};return(0,S.jsx)(ae,{open:e,onOpenChange:e=>{e||$()},children:(0,S.jsxs)(re,{style:{maxWidth:500},children:[(0,S.jsx)(ie,{children:(0,S.jsx)(ne,{children:g===`new-session`?`New Session`:`Start Chat with New App`})}),(0,S.jsx)(C,{children:(0,S.jsxs)(`form`,{onSubmit:Ee(Pe),children:[(0,S.jsxs)(w,{children:[(0,S.jsx)(T,{children:`🏷️ Select App *`}),(0,S.jsx)(r,{value:ke,onChange:e=>{q(`appId`,e,{shouldValidate:!0}),k(U.find(t=>t._id===e)||null)},options:Se,onSearch:Te,onClose:()=>{y(``)},placeholder:g===`new-session`?_?.name||`Current app selected`:`Choose an app...`,searchPlaceholder:`Search apps...`,clearable:g!==`new-session`,disabled:g===`new-session`,error:G.appId?.message,loading:xe,remote:!0}),(0,S.jsx)(E,{children:g===`new-session`?`Creating a new session for the current app`:`Select your UXCam application`})]}),(0,S.jsxs)(w,{children:[(0,S.jsx)(T,{children:`👤 Select Agent *`}),(0,S.jsx)(r,{value:Ae,onChange:e=>{q(`persona`,e,{shouldValidate:!0}),localStorage.setItem(`tara_last_selected_agent`,e),Fe()},options:Ce,placeholder:`Choose agent type...`,searchable:!1,error:G.persona?.message}),(0,S.jsx)(E,{children:`Select the AI agent variant for this session. Different agents have different capabilities and tools.`})]}),(0,S.jsx)(w,{children:(0,S.jsxs)(n,{title:`Edit tools`,icon:`🔧`,defaultOpen:!1,children:[(0,S.jsxs)(ue,{children:[(0,S.jsx)(O,{type:`button`,onClick:Z,disabled:I,children:I?`🔄 Loading...`:`🔧 Load Available Tools`}),B&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(O,{type:`button`,onClick:je,children:`✅ Select All`}),(0,S.jsx)(O,{type:`button`,onClick:Q,children:`❌ Clear All`})]})]}),R&&(0,S.jsx)(ce,{children:R}),B&&(0,S.jsx)(de,{children:Object.entries(M).map(([e,t])=>(0,S.jsxs)(fe,{children:[(0,S.jsxs)(pe,{children:[Ne(e),` (`,t.length,` tools)`]}),(0,S.jsx)(me,{children:t.map(e=>(0,S.jsxs)(he,{children:[(0,S.jsx)(ge,{type:`checkbox`,id:`tool-${e.name}`,checked:P.includes(e.name),onChange:()=>Me(e.name)}),(0,S.jsx)(_e,{htmlFor:`tool-${e.name}`,children:e.name})]},e.name))})]},e))}),(0,S.jsxs)(E,{style:{marginTop:`1rem`},children:[(0,S.jsx)(`strong`,{children:`Optional:`}),` Select specific tools to restrict access. If no tools are selected, all tools will be available.`]})]})}),(0,S.jsxs)(le,{children:[(0,S.jsx)(D,{type:`button`,$variant:`secondary`,onClick:$,children:`Cancel`}),(0,S.jsx)(D,{type:`submit`,$variant:`primary`,disabled:!De||o,children:o?`⏳ Creating...`:`🚀 Create Session`})]})]})})]})})};export{k as NewSessionModal};