import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import{v as n}from"./ds-BJhQ4zht.js";import{f as r,p as i,u as a}from"./router-vendor-DDSrk2O2.js";import{D as o,r as s,s as c}from"./ui-vendor-CUROeZIN.js";import{O as l}from"./markdown-vendor-BoH6QLuc.js";import{_ as u,d,n as f,v as p,y as m}from"./fetchClient-BF44M5G_.js";import{a as h,i as g,n as _,o as v,r as y,s as b}from"./AppContext-Dsu2Mbed.js";import{p as x}from"./appsApi-C20a8ISo.js";import{r as S,u as C}from"./animations-D6JAIVtz.js";import{d as w,u as T}from"./Dialog-BFakgPRd.js";import{u as E}from"./TaraUniversalDrawer-CTq1IPqS.js";import{Si as D,_ as O,fi as k,mi as A,pi as j,ti as M,vi as N}from"./TaraChatContext-Ne5fUqNv.js";import{o as P}from"./TaraResponseLoader-CEuS7CVQ.js";import{Jt as F,Yt as I}from"./index-rXoDQG7j.js";import{t as ee}from"./responseInstructionsStorage-D_noIse8.js";var L=e(t(),1),R=l(),te=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  min-height: 60px;
`,ne=o.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,re=o.div`
  display: flex;
  flex-direction: column;
`,ie=o.h2`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
`,z=o.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  color: white;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${({theme:e,$persona:t})=>t===`agent`?`
        background: ${e.colors.gray[900]};
      `:`
        background: ${e.colors.primary[500]};
      `}
`,ae=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 0.875rem;
  color: #64748b;
  margin-top: ${({theme:e})=>e.spacing[1]};
`,oe=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: auto;
`,se=o.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ce=o.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #64748b;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #374151;
  }
`,le=o.div`
  position: relative;
  width: 44px;
  height: 24px;
  background: ${({$enabled:e,theme:t})=>e?t.colors.primary[500]:`#cbd5e1`};
  border-radius: 12px;
  transition: background 0.2s;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${({$enabled:e})=>e?`22px`:`2px`};
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: left 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    opacity: 0.9;
  }
`,ue=o.div`
  width: auto;
  position: relative;
  
  /* Override SearchableDropdown styles for menu button appearance */
  button[aria-haspopup="listbox"] {
    background: none !important;
    border: none !important;
    padding: 0.5rem !important;
    min-width: 36px !important;
    width: 36px !important;
    height: 36px !important;
    border-radius: 6px !important;
    color: #64748b !important;
    
    &:hover {
      background: #e2e8f0 !important;
      color: #374151 !important;
    }

    &:focus {
      background: #e2e8f0 !important;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2) !important;
    }
  }
  
  /* Style the placeholder (three dots) */
  span {
    font-size: 1.2rem !important;
    font-weight: bold !important;
    color: inherit !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  /* Hide the chevron icon */
  svg {
    display: none !important;
  }

  /* Style the dropdown menu to have proper width */
  > div > div:last-child {
    min-width: 160px !important;
    width: 160px !important;
    left: auto !important;
    right: 0 !important;
  }
`,de=({persona:e,version:t,conversationTitle:r=`New Chat`,messages:i,addSystemMessage:a,appId:o,appName:s,streamingEnabled:c=!0,onStreamingToggle:l})=>{let{taraVersion:u}=h(),{setActiveModal:d,ui:f}=b(),m=p(),g=t||`v${u}`,_=e===`agent`?`Standard`:e===`email-insight`?`Email Insights workflow (legacy session)`:`Experimental`,v=[{value:`context`,label:`View context`},{value:`prompt`,label:`View prompt`},{value:`response-instructions`,label:`Response Instructions`},{value:`history`,label:`Open History`},{value:`reload`,label:`Reload Prompts`},{value:`copy`,label:`Copy chat`}],y=async()=>{try{a&&a(`🔄 Reloading prompts...`),await m.mutateAsync(),a&&a(`✅ Prompts reloaded successfully! New prompt changes will take effect immediately.`)}catch(e){console.error(`Error reloading prompts:`,e),a&&a(`❌ Failed to reload prompts. Please try again.`)}},x=()=>{if(!i||i.length===0)return`No messages to copy.`;let e=new Date().toLocaleString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`,timeZoneName:`short`}),t=`# Tara Chat Export

`;return t+=`**Date:** ${e}\n`,t+=`**Conversation:** ${r}\n`,t+=`**Tara Version:** ${g}\n`,o&&(t+=`**App ID:** ${o}\n`),s&&(t+=`**App Name:** ${s}\n`),t+=`**Persona:** ${_}\n`,t+=`
---

`,i.forEach((e,n)=>{let r=new Date(e.timestamp).toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`});e.role===`user`?t+=`## 👤 User
`:e.role===`assistant`?(t+=`## 🤖 Tara`,e.model&&(t+=` (${e.model})`),t+=`
`):e.role===`tool`?t+=`## 🛠️ Tool Call
`:e.role===`system`&&(t+=`## ℹ️ System
`),t+=`*${r}*\n\n`,e.content&&(t+=`${e.content}\n\n`),e.functionCall&&(t+=`**Tool Call:** \`${e.functionCall.name}\`\n\n`,t+=`**Arguments:**\n\`\`\`json\n${JSON.stringify(e.functionCall.args,null,2)}\n\`\`\`\n\n`),e.functionCalls&&e.functionCalls.length>0&&(t+=`**Tool Calls:**

`,e.functionCalls.forEach((e,n)=>{t+=`${n+1}. **${e.name}**\n\n`,t+=`**Arguments:**\n\`\`\`json\n${JSON.stringify(e.args,null,2)}\n\`\`\`\n\n`})),e.functionResponse&&(t+=`**Tool Response:** \`${e.functionResponse.name}\`\n\n`,t+=`**Result:**\n\`\`\`json\n${JSON.stringify(e.functionResponse.response,null,2)}\n\`\`\`\n\n`),e.functionResponses&&e.functionResponses.length>0&&(t+=`**Tool Responses:**

`,e.functionResponses.forEach((e,n)=>{t+=`${n+1}. **${e.name}**\n\n`,t+=`**Result:**\n\`\`\`json\n${JSON.stringify(e.response,null,2)}\n\`\`\`\n\n`})),e.tokenUsage&&(t+=`**Token Usage:** ${e.tokenUsage.total} tokens (${e.tokenUsage.prompt} prompt, ${e.tokenUsage.completion} completion`,e.tokenUsage.cached&&(t+=`, ${e.tokenUsage.cached} cached`),t+=`)

`),n<i.length-1&&(t+=`---

`)}),t},S=async()=>{try{let e=x();await navigator.clipboard.writeText(e),a&&a(`✅ Chat copied to clipboard in Markdown format!`)}catch(e){console.error(`Error copying chat:`,e),a&&a(`❌ Failed to copy chat. Please try again.`)}};return(0,R.jsxs)(te,{children:[(0,R.jsx)(ne,{children:(0,R.jsxs)(re,{children:[(0,R.jsx)(ie,{children:s&&o?`${s} (${o})`:r}),(0,R.jsxs)(ae,{children:[e===`assistant`?(0,R.jsx)(z,{$persona:e,children:`Experimental`}):(0,R.jsx)(z,{$persona:e,children:`Standard`}),g&&(0,R.jsx)(`span`,{children:g})]})]})}),(0,R.jsxs)(oe,{children:[(0,R.jsx)(se,{children:(0,R.jsxs)(ce,{onClick:()=>l?.(!c),children:[(0,R.jsx)(`span`,{children:`Streaming`}),(0,R.jsx)(le,{$enabled:c})]})}),(0,R.jsx)(ue,{children:(0,R.jsx)(n,{value:``,onChange:e=>{switch(e){case`context`:d(`context`);break;case`prompt`:d(`prompt-preview`);break;case`response-instructions`:d(`response-instructions`);break;case`history`:d(`history`);break;case`reload`:y();break;case`copy`:S();break}},options:v,placeholder:`⋯`,searchable:!1,className:`menu-dropdown`})})]})]})},fe=({content:e,className:t=``})=>{let[n,r]=(0,L.useState)(!1);return(0,R.jsxs)(pe,{className:t,children:[(0,R.jsxs)(me,{onClick:()=>r(e=>!e),children:[(0,R.jsx)(`span`,{children:`Thinking Process`}),(0,R.jsx)(he,{$expanded:n,children:`▼`})]}),n&&(0,R.jsx)(ge,{children:(0,R.jsx)(_e,{children:e})})]})},pe=o.div`
  background: ${({theme:e})=>e.colors.severity.warning.bg};
  border: 1px solid ${({theme:e})=>e.colors.severity.warning.border};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  margin-bottom: 0.75rem;
  overflow: hidden;
`,me=o.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({theme:e})=>e.colors.severity.warning.icon};
  color: white;
  padding: 0.5rem 0.75rem;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;
  user-select: none;
  border: none;
  text-align: left;
  transition: background 0.15s ease;

  &:hover {
    filter: brightness(0.9);
  }
`,he=o.span`
  transition: transform 0.2s ease;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  transform: ${({$expanded:e})=>e?`rotate(180deg)`:`rotate(0)`};
`,ge=o.div`
  padding: 0.75rem;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.severity.warning.text};
  background: ${({theme:e})=>e.colors.severity.warning.bg};
  border-top: 1px solid ${({theme:e})=>e.colors.severity.warning.border};
`,_e=o.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  white-space: pre-wrap;
  font-size: 0.8rem;
`,ve=({message:e,taraVersion:t=`1.0.5`,sessionTokenUsage:n})=>{if(e.role!==`assistant`||!e.tokenUsage)return null;let r=e.tokenUsage;return(0,R.jsxs)(`div`,{style:{marginTop:`0.5rem`,padding:`0.375rem 0.75rem`,background:`#f8fafc`,border:`1px solid #e2e8f0`,borderRadius:`4px`,fontSize:`0.75rem`,color:`#6b7280`,fontFamily:`'Monaco', 'Menlo', monospace`,lineHeight:`1.4`},children:[(0,R.jsxs)(`div`,{children:[`📊 `,r.prompt.toLocaleString(),` + `,r.completion.toLocaleString(),` = `,r.total.toLocaleString(),` tokens`,t&&(0,R.jsxs)(`span`,{style:{color:`#374151`,fontWeight:500,marginLeft:`0.5rem`},children:[`| Tara v`,t]})]}),n&&n.total>0?(0,R.jsxs)(`div`,{style:{marginTop:`0.25rem`},children:[`💰 Session: `,n.total.toLocaleString(),` tokens`]}):null,r.cached&&r.cached>0?(0,R.jsxs)(`div`,{style:{marginTop:`0.25rem`},children:[`⚡ Cached: `,r.cached.toLocaleString(),` tokens`]}):null]})},ye=(0,L.memo)(({message:e,onMessageClick:t,sessionTokenUsage:n,sessionContext:r=null})=>{let i=v(),a=()=>{switch(e.role){case`user`:return`U`;case`assistant`:return`T`;case`tool`:return`🔧`;case`system`:return`⚙️`;default:return`?`}},o=()=>{let t=`message ${e.role}`;return e.functionCall&&(t+=` tool call`),e.functionResponse&&(t+=` tool response`),e.thought&&(t+=` thought`),e.isStreaming&&(t+=` streaming`),t},s=()=>{t?.(e)};if(e.thought&&e.content)return(0,R.jsxs)(`div`,{className:o(),onClick:s,children:[(0,R.jsx)(`div`,{className:`avatar ${e.role}`,children:a()}),(0,R.jsx)(`div`,{className:`message-content`,children:(0,R.jsx)(fe,{content:e.content})})]});if(e.functionCall&&e.role===`tool`)return(0,R.jsxs)(`div`,{className:o(),onClick:s,children:[(0,R.jsx)(`div`,{className:`avatar ${e.role}`,children:a()}),(0,R.jsx)(`div`,{className:`message-content`,children:(0,R.jsxs)(`div`,{className:`function-call`,children:[(0,R.jsxs)(`strong`,{children:[`🔧 `,e.functionCall.name]}),Object.keys(e.functionCall.args||{}).length>0&&(0,R.jsxs)(`details`,{className:`function-args`,children:[(0,R.jsx)(`summary`,{children:`Arguments`}),(0,R.jsx)(`pre`,{children:JSON.stringify(e.functionCall.args,null,2)})]})]})})]});if(e.functionResponse&&e.role===`tool`){let t=e.functionResponse.response!==null&&e.functionResponse.response!==void 0;return(0,R.jsxs)(`div`,{className:o(),onClick:s,children:[(0,R.jsx)(`div`,{className:`avatar ${e.role}`,children:a()}),(0,R.jsx)(`div`,{className:`message-content`,children:(0,R.jsxs)(`div`,{className:`function-response`,children:[(0,R.jsxs)(`strong`,{children:[`✅ `,e.functionResponse.name]}),t&&(0,R.jsxs)(`details`,{className:`function-response-data`,children:[(0,R.jsx)(`summary`,{children:`Response Data`}),(0,R.jsx)(`pre`,{children:JSON.stringify(e.functionResponse.response,null,2)})]})]})})]})}return(0,R.jsxs)(`div`,{className:o(),onClick:s,children:[(0,R.jsx)(`div`,{className:`avatar ${e.role}`,children:a()}),(0,R.jsxs)(`div`,{className:`message-content`,children:[e.content&&(e.role===`user`?(0,R.jsx)(`div`,{className:`user-message-text`,children:e.content}):(0,R.jsx)(`div`,{className:`assistant-message-text`,children:(0,R.jsx)(P,{content:e.content,isStreaming:!!e.isStreaming,messageId:e.id,markdownProps:{sessionContext:r}})})),(0,R.jsx)(ve,{message:e,taraVersion:i,sessionTokenUsage:n})]})]})},(e,t)=>e.message.id===t.message.id&&e.message.content===t.message.content&&e.message.isStreaming===t.message.isStreaming&&e.message.timestamp===t.message.timestamp&&JSON.stringify(e.message.tokenUsage)===JSON.stringify(t.message.tokenUsage)),be=({show:e,className:t=``})=>e?(0,R.jsxs)(xe,{className:t,children:[(0,R.jsx)(Se,{children:`T`}),(0,R.jsx)(Ce,{children:`Tara is thinking`}),(0,R.jsxs)(we,{children:[(0,R.jsx)(B,{$delay:0}),(0,R.jsx)(B,{$delay:.2}),(0,R.jsx)(B,{$delay:.4})]})]}):null,xe=o.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-style: italic;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`,Se=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  flex-shrink: 0;
  background: ${({theme:e})=>e.colors.uxcam.emerald[500]};
  color: white;
`,Ce=o.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,we=o.div`
  display: flex;
  gap: 2px;
  margin-left: 0.5rem;
`,B=o.span`
  width: 4px;
  height: 4px;
  background: ${({theme:e})=>e.colors.text.secondary};
  border-radius: 50%;
  animation: ${S} 1.4s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>e}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.6;
  }
`,Te=(0,L.memo)(({messages:e,isStreaming:t=!1,onMessageClick:n,sessionTokenUsage:r,sessionContext:i=null})=>{let a=(0,L.useRef)(null),o=(0,L.useRef)(null),{userId:s,authUser:c,isInitialized:l}=D(),[u,d]=(0,L.useState)(!0),f=(0,L.useCallback)((e=`smooth`)=>{a.current?.scrollIntoView({behavior:e})},[]),p=(0,L.useCallback)(()=>{let e=o.current;return e?e.scrollHeight-e.scrollTop-e.clientHeight<150:!0},[]),m=(0,L.useCallback)(()=>{d(p())},[p]);(0,L.useEffect)(()=>{u&&f()},[e,t,f,u]);let h=(0,L.useCallback)(e=>{n?.(e)},[n]);return(0,R.jsxs)(`div`,{className:`messages`,ref:o,onScroll:m,style:{position:`relative`},children:[e.length===0&&l&&(0,R.jsxs)(`div`,{className:`message assistant`,children:[(0,R.jsx)(`div`,{className:`avatar assistant`,children:`T`}),(0,R.jsx)(`div`,{className:`message-content`,children:c?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(`p`,{children:[`👋 Hello `,c.name||c.email,`! I'm Tara, your UXCam data analysis assistant.`]}),(0,R.jsx)(`p`,{children:`How can I help you today?`}),(0,R.jsxs)(`p`,{style:{color:`#666`,fontSize:`0.875rem`,marginTop:`0.5rem`},children:[`User ID: `,s]})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`p`,{children:`👋 Hello! I'm Tara, your UXCam data analysis assistant.`}),(0,R.jsx)(`p`,{children:`How can I help you today?`}),(0,R.jsxs)(`p`,{style:{color:`#666`,fontSize:`0.875rem`,marginTop:`0.5rem`},children:[`User ID: `,s]})]})})]}),e.map(e=>(0,R.jsx)(ye,{message:e,onMessageClick:h,sessionTokenUsage:r,sessionContext:i},e.id)),(0,R.jsx)(be,{show:t}),(0,R.jsx)(`div`,{ref:a})]})},(e,t)=>e.messages.length===t.messages.length&&e.isStreaming===t.isStreaming&&e.messages.every((e,n)=>e.id===t.messages[n]?.id&&e.content===t.messages[n]?.content&&e.isStreaming===t.messages[n]?.isStreaming)),Ee=o.div`
  padding: 1rem;
  border-top: 1px solid ${({theme:e})=>e.colors.gray[200]};
  background: white;
`,De=o.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`,Oe=o.textarea`
  flex: 1;
  min-height: 44px;
  max-height: 120px;
  padding: 0.75rem;
  border: 1px solid ${({theme:e})=>e.colors.gray[300]};
  border-radius: 12px;
  resize: none;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary[600]};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary[100]};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.colors.gray[100]};
    cursor: not-allowed;
  }
`,ke=o.button`
  padding: 0.75rem 1.5rem;
  background: ${({theme:e,disabled:t})=>t?e.colors.gray[400]:e.colors.primary[600]};
  color: white;
  border: none;
  border-radius: 12px;
  cursor: ${({disabled:e})=>e?`not-allowed`:`pointer`};
  font-weight: 500;
  transition: background-color 0.2s;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.primary[700]};
  }
`,Ae=o.div`
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${({theme:e})=>e.colors.gray[100]};
`,je=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Me=o.button`
  padding: 0.375rem 0.625rem;
  background: ${({theme:e})=>e.colors.gray[50]};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  border-radius: 6px;
  color: ${({theme:e})=>e.colors.gray[600]};
  font-size: 0.8125rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  font-family: inherit;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.gray[100]};
    border-color: ${({theme:e})=>e.colors.gray[300]};
    color: ${({theme:e})=>e.colors.gray[700]};
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    white-space: normal;
    text-align: left;
  }
`,Ne=[`What gestures do users perform most frequently?`,`What are the most common screen transitions?`,`How do power users differ from casual users?`,`What is my app version adoption?`],Pe=({onSendMessage:e,isLoading:t=!1,disabled:n=!1})=>{let[r,i]=(0,L.useState)(``),[a,o]=(0,L.useState)(!1),s=(0,L.useRef)(null),{contextConfig:c}=y(),{setActiveModal:l}=b(),u=E(c),d=e=>{i(e.target.value),s.current&&(s.current.style.height=`44px`,s.current.style.height=Math.min(s.current.scrollHeight,120)+`px`)},f=e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),m())},p=(0,L.useCallback)(async t=>{if(t.trim()){o(!0);try{await e(t,{dashboardContext:u,selectedModel:c.modelSelection||void 0}),i(``),s.current&&(s.current.style.height=`44px`)}catch(e){console.error(`Failed to send message:`,e)}finally{o(!1)}}},[e,u,c.modelSelection,l]),m=()=>{p(r)},h=e=>{p(e)},g=n||t||a,_=r.trim().length>0&&!g;return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(Ee,{children:[(0,R.jsxs)(De,{children:[(0,R.jsx)(Oe,{ref:s,value:r,onChange:d,onKeyDown:f,placeholder:`Ask me about your UXCam data...`,disabled:g,rows:1}),(0,R.jsx)(ke,{onClick:m,disabled:!_,children:a?`⏳`:`Send`})]}),(0,R.jsx)(Ae,{children:(0,R.jsx)(je,{children:Ne.map((e,t)=>(0,R.jsx)(Me,{onClick:()=>h(e),disabled:g,children:e},t))})})]})})},V=e=>{try{let t=JSON.parse(e);return t&&typeof t==`object`?t:null}catch{return null}},H=`The text below contains hidden dashboard context JSON`,U=`The text below contains hidden Screen Analysis Context V1 JSON`,W=e=>e.startsWith(H)||e.slice(0,200).includes(H),G=e=>e.startsWith(U)||e.slice(0,240).includes(U)||e.slice(0,240).includes(`"screen_analysis_context_version"`),Fe=e=>{let t=V(e),n=t?.session_context;if(!n||typeof n!=`object`)return null;let r=n;return{appId:typeof r.app_id==`string`?r.app_id:void 0,persona:r.persona,toolFilter:Array.isArray(r.tool_filter)?r.tool_filter:Array.isArray(t?.tool_filter)?t.tool_filter:void 0}},Ie=e=>{let t=V(e)?.query,n=e;return t&&typeof t==`object`&&typeof t.content==`string`&&(n=t.content),W(e)||W(n)?{content:`Analyze dashboard`,hiddenContent:e,workflowId:`analyze-dashboard`,isAutomatedPrompt:!0}:G(e)||G(n)?{content:`Analyze screen`,hiddenContent:e,workflowId:`analyze-screen`,isAutomatedPrompt:!0}:{content:n}},Le=(e,t)=>{if(typeof e==`string`)return e.length>200?`${e.substring(0,200)}...`:e;if(e&&typeof e==`object`){let t=e;if(typeof t.error==`string`)return`❌ Error: ${t.error}`;if(typeof t.message==`string`)return t.message;if(t.data!==void 0){let e=JSON.stringify(t.data);return`📊 Data: ${e.substring(0,200)}${e.length>200?`...`:``}`}let n=JSON.stringify(e,null,2);return n.length>300?`${n.substring(0,300)}...`:n}return e===void 0?`📤 ${t} response`:`📤 ${t}: ${String(e)}`},Re=e=>{if(!e||typeof e!=`object`)return null;let t=e,n=t.result;if(n&&typeof n==`object`){let e=n.structuredContent;if(e&&typeof e==`object`){let t=e.chart_config;if(t&&typeof t==`object`)return t}}return t.chart_config&&typeof t.chart_config==`object`?t.chart_config:null},K=(e,t,n,r,i)=>{if(i?.(r.response),r.name===`generate_chart`){let i=`historical_chart_${t.id||e.length}`;e.push({id:`historical_chart_${t.id||e.length}_${e.length}`,content:`📊 Chart generated`,role:`tool`,timestamp:n,functionResponse:r,chartId:i,chartConfig:Re(r.response)||void 0});return}e.push({id:`historical_tool_response_${t.id||e.length}_${e.length}`,content:Le(r.response,r.name),role:`tool`,timestamp:n,functionResponse:r})},ze=(e,t={})=>{let n=[],r=null,i=null;for(let a of e.events||[]){let e=a.content?.parts;if(!e||e.length===0)continue;let o=a.create_time||a.timestamp||new Date().toISOString(),s=a.content?.role;if(s===`user`){for(let s of e)if(s.text){r||(r=Fe(s.text));let e=Ie(s.text);i=e.content,n.push({id:`historical_user_${a.id||n.length}_${n.length}`,...e,role:`user`,timestamp:o})}else s.functionResponse&&K(n,a,o,s.functionResponse,t.extractDocumentMetadata);continue}if(s===`model`)for(let r of e)if(r.text)n.push({id:`historical_assistant_${a.id||n.length}_${n.length}`,content:M(r.text),role:`assistant`,timestamp:o});else if(r.functionCall){let e=r.functionCall.args||{},t=Object.keys(e).length>0?Object.keys(e).map(t=>`${t}: ${JSON.stringify(e[t])}`).join(`, `):``;n.push({id:`historical_tool_call_${a.id||n.length}_${n.length}`,content:`🔧 ${r.functionCall.name}(${t})`,role:`tool`,timestamp:o,functionCall:r.functionCall})}else r.functionResponse&&K(n,a,o,r.functionResponse,t.extractDocumentMetadata)}return{aliasMap:e.state?._session_alias_map||null,extractedSessionContext:r,lastUserQuery:i,messages:n}},Be=({currentSession:e,sessionId:t,userId:n,sessionData:r,extractedSessionContext:i})=>{let a=e?{...e}:{sessionId:t,userId:n,appId:``};if(i?.appId)return{...a,sessionId:t,userId:n,appId:i.appId,persona:i.persona,toolFilter:i.toolFilter,createdAt:a.createdAt||r.state?.create_time||new Date().toISOString(),updatedAt:r.state?.lastUpdateTime||new Date().toISOString(),messageCount:r.events?.length||0};let o=r.state?.session_context;return o?.app_id?{...a,sessionId:t,userId:n,appId:o.app_id,persona:o.persona,toolFilter:o.tool_filter,createdAt:a.createdAt||r.state?.create_time||new Date().toISOString(),updatedAt:r.state?.lastUpdateTime||new Date().toISOString(),messageCount:r.events?.length||0}:e?{...e}:null},Ve=e=>{switch(e){case`agent`:return`Standard (Full Analysis)`;case`assistant`:return`Experimental (Quick Response)`;case`email-insight`:return`Email Insights workflow (legacy session)`;default:return e}},He=(e,t,n)=>{let r=n?.persona||`agent`,i=n?.toolFilter;return`✅ New session created with ${r} persona

**App:** ${e}
**Persona:** ${Ve(r)}
**Session ID:** ${t}
**Context:** Pre-initialized with session context${i?`\n**Tools:** ${i.length} tools selected`:``}`},q=e=>!!(e?.appId&&e.appId.trim().length>0),Ue=async({currentSession:e})=>{let t=e?.appId?.trim();if(!t)throw Error(`Cannot create session without an app_id`);return{sessionId:`session_${Date.now()}${Math.random().toString(36).substring(2,15)}`,userId:d(),appId:t,persona:e?.persona||`agent`,createdAt:new Date().toISOString(),toolFilter:e?.toolFilter||void 0}},We=({primarySession:e,fallbackSession:t,defaultAppDescription:n})=>{let r=[e,t].find(q)||null;if(!r?.appId?.trim())return null;let i={app_id:r.appId,app_description:n,persona:r.persona||`agent`};return Array.isArray(r.toolFilter)&&r.toolFilter.length>0&&(i.tool_filter=r.toolFilter),i},Ge=(e,t,n)=>e?.app_id||t?.appId||n?.appId||null,Ke=({sessionInfo:e,messageText:t,appId:n,sessionContext:r,defaultAppDescription:i,dashboardContext:a,questionContext:o,responseInstructions:s,streaming:c})=>({appName:`tara`,userId:e.userId,sessionId:e.sessionId,newMessage:{parts:[{text:t}],role:`user`},streaming:c??!0,app_id:n,app_description:r?.app_description||i,...r?.persona&&{persona:r.persona},...a&&{dashboard_context:a},...o&&{question_context:o},...s&&{response_instructions:s}}),J=e=>`${e}_${Date.now()}_${Math.random().toString(36).substring(2,9)}`,Y=e=>Object.keys(e).map(t=>`${t}: ${JSON.stringify(e[t])}`).join(`, `),qe=({setMessages:e,setTokenUsageState:t,sessionTokenUsageRef:n})=>{let r=(0,L.useRef)(new Set),i=(0,L.useRef)(new Set),a=(0,L.useRef)(new Set),o=(0,L.useRef)(new Map),s=(0,L.useRef)(null),c=(0,L.useRef)(new Set),l=(0,L.useCallback)(()=>{if(!s.current)return;let t=s.current.id,n=s.current.tokenUsage;e(e=>e.map(e=>e.id===t?{...e,isStreaming:!1,...n&&{tokenUsage:n}}:e)),s.current=null},[e]);return{clearStreamingState:(0,L.useCallback)(()=>{r.current.clear(),i.current.clear(),a.current.clear(),o.current.clear(),s.current=null,c.current.clear()},[]),finalizeCurrentAssistantMessage:l,processEventData:(0,L.useCallback)(async u=>{if(u.type===`function_call`&&u.tool){if(!u.tool.name){console.warn(`Received function_call event without tool name:`,u);return}let t=u.tool.id||J(`call`),n=`call_${t}_${u.tool.name}`;if(!r.current.has(n)){r.current.add(n),c.current.add(t);let i=``;try{i=Y(u.tool.data||{})}catch(e){console.warn(`Failed to serialize tool args:`,e),i=`[serialization failed]`}let a={id:`tool_call_${t}`,content:`🔧 ${u.tool.name}(${i})`,role:`tool`,timestamp:new Date().toISOString(),functionCall:{name:u.tool.name,id:t,args:u.tool.data||{}},invocationId:u.invocation_id};e(e=>[...e,a])}return}if(u.type===`function_response`&&u.tool){if(!u.tool.name){console.warn(`Received function_response event without tool name:`,u);return}let t=u.tool.id||J(`response`),n=`response_${t}_${u.tool.name}`;if(!r.current.has(n)){r.current.add(n),c.current.delete(t);try{A(u.tool.data)}catch(e){console.warn(`Failed to extract document metadata:`,e)}if(u.tool.name===`generate_chart`){let n={id:`chart_${t}`,content:`📊 Chart generated`,role:`tool`,timestamp:new Date().toISOString(),functionResponse:{id:t,name:u.tool.name,response:u.tool.data},chartId:J(`chart`),chartConfig:u.tool.data,invocationId:u.invocation_id};e(e=>[...e,n])}else{let n={id:`tool_response_${t}`,content:`📤 ${u.tool.name} response`,role:`tool`,timestamp:new Date().toISOString(),functionResponse:{id:t,name:u.tool.name,response:u.tool.data},invocationId:u.invocation_id};e(e=>[...e,n])}c.current.size===0&&s.current&&l()}return}if(u.type===`session_map`&&u.map){N(u.map);return}if(u.type===`structured_question`)return;if(u.type===`content`&&u.content){let t=u.invocation_id||u.invocationId||`unknown`;if(typeof u.content!=`string`||u.content.length===0){console.warn(`[Content Event] Ignoring non-string or empty content payload`,u.content);return}let n=u.content,r=!!s.current,i=n;if(r){let e=s.current?.content??``;if(n.startsWith(e))i=n.slice(e.length);else if(e&&n===e)return}let a=o.current.get(t)||{lastChunk:``};if(a.lastChunk&&(a.lastChunk===n||a.lastChunk.length>n.length&&a.lastChunk.endsWith(n))){o.current.set(t,{lastChunk:n});return}if(r){if(!i){o.current.set(t,{lastChunk:n});return}let r=s.current?.tokenUsage;e(e=>e.map(e=>e.id===s.current?.id?{...e,content:e.content+i,isStreaming:!0,...r&&{tokenUsage:r}}:e)),s.current&&(s.current={...s.current,content:s.current.content+i})}else{let r={id:J(`msg`)+`_assistant`,content:n,role:`assistant`,timestamp:new Date().toISOString(),isStreaming:!0,invocationId:t};s.current=r,e(e=>[...e,r])}o.current.set(t,{lastChunk:n});return}if(u.type===`end`){u.session_alias_map&&typeof u.session_alias_map==`object`&&N(u.session_alias_map),l();return}let d=u.model||u.content?.model||void 0;if(u.usageMetadata||u.usage_metadata||u.type===`usage_metadata`&&u.token_usage){let e=u.usageMetadata||u.usage_metadata||u.token_usage,r=e.promptTokenCount||e.prompt_token_count||e.prompt_tokens||e.prompt||0,i=e.candidatesTokenCount||e.candidates_token_count||e.completion_tokens||e.completion||0,a=e.totalTokenCount||e.total_token_count||r+i,o=e.cachedContentTokenCount||e.cached_content_token_count||e.cached_tokens||0;n.current.prompt+=r,n.current.completion+=i,n.current.total+=a,n.current.cached+=o;let c={prompt:r,completion:i,total:a,cached:o};if(s.current){s.current.tokenUsage=c,d&&(s.current.model=d);let e=s.current;e?.id&&t(t=>({...t,[e.id]:c}))}}if(u.content&&(u.content.role===`model`||u.content.role===`user`)&&u.content.parts&&u.content.parts.length>0){for(let t of u.content.parts)if(t.functionCall){let n=t.functionCall.id||u.id||J(`call`),i=`call_${n}_${t.functionCall.name}`;if(!r.current.has(i)){r.current.add(i),c.current.add(n);let a={id:`tool_call_${n}`,content:`🔧 ${t.functionCall.name}(${Y(t.functionCall.args||{})})`,role:`tool`,timestamp:new Date().toISOString(),functionCall:t.functionCall,invocationId:u.invocationId};e(e=>[...e,a])}}else if(t.functionResponse){let n=t.functionResponse.id||u.id||J(`response`),i=`response_${n}_${t.functionResponse.name}`;if(!r.current.has(i))if(r.current.add(i),c.current.delete(n),A(t.functionResponse.response),t.functionResponse.name===`generate_chart`){let r={id:`chart_${n}`,content:`📊 Chart generated`,role:`tool`,timestamp:new Date().toISOString(),functionResponse:t.functionResponse,chartId:J(`chart`),chartConfig:t.functionResponse.response,invocationId:u.invocationId};e(e=>[...e,r])}else{let r={id:`tool_response_${n}`,content:`📤 ${t.functionResponse.name} response`,role:`tool`,timestamp:new Date().toISOString(),functionResponse:t.functionResponse,invocationId:u.invocationId};e(e=>[...e,r])}}for(let t of u.content.parts)if(t.text&&u.content.role===`model`){let n=t.thought===!0||u.thought===!0||t.thought===`true`,r=u.invocationId||`unknown`;if(n){let n={id:`thought_${Date.now()}`,content:t.text,role:`assistant`,timestamp:new Date().toISOString(),thought:!0,invocationId:r};e(e=>[...e,n])}else{if(u.partial&&i.current.add(r),!u.partial&&i.current.has(r)){a.current.add(r),i.current.delete(r),l();return}if(s.current){let n=s.current?.tokenUsage;e(e=>e.map(e=>e.id===s.current?.id?{...e,content:e.content+t.text,isStreaming:u.partial||!1,...n&&{tokenUsage:n}}:e)),s.current&&(s.current={...s.current,content:s.current.content+t.text}),u.partial||(s.current=null)}else{let n={id:`msg_${Date.now()}_assistant_${r}`,content:t.text,role:`assistant`,timestamp:new Date().toISOString(),isStreaming:u.partial||!1,invocationId:r,partial:u.partial,model:d};s.current=n,e(e=>[...e,n])}}}}},[l,n,e,t])}},Je=`How many users had crashes this week?`,X=e=>{if(typeof e==`string`)return e;if(e instanceof Error&&e.message){try{let t=JSON.parse(e.message);if(t.error&&typeof t.error==`string`)return t.error}catch{return e.message}return e.message}if(e&&typeof e==`object`){let t=e;if(t.error&&typeof t.error==`string`)return t.error;if(t.message&&typeof t.message==`string`)return t.message}return`Unknown error occurred`},Ye=()=>{let[e,t]=(0,L.useState)([]),[n,r]=(0,L.useState)(!1),[i,a]=(0,L.useState)(null),[o,s]=(0,L.useState)(!1),[l,u]=(0,L.useState)({}),d=c(),{currentSession:p,setCurrentSession:h}=g(),{appDescription:v}=_(),{setLastUserQuery:x}=b(),{sendStreaming:S}=m(),{contextConfig:C}=y(),w=(0,L.useRef)(null),T=(0,L.useRef)({prompt:0,completion:0,total:0,cached:0}),E=v||`This app description is for ${p?.appId||`unknown app`}`,D=(0,L.useCallback)(e=>{let n={id:`system_${Date.now()}_${Math.random().toString(36).substring(2,11)}`,content:e,role:`system`,timestamp:new Date().toISOString()};t(e=>[...e,n])},[]);(0,L.useEffect)(()=>{Object.keys(l).length!==0&&t(e=>e.map(e=>{let t=l[e.id];return t?{...e,tokenUsage:t}:e}))},[l]);let{clearStreamingState:O,finalizeCurrentAssistantMessage:M,processEventData:P}=qe({setMessages:t,setTokenUsageState:u,sessionTokenUsageRef:T}),F=(0,L.useCallback)(()=>{t([]),a(null),O(),T.current={prompt:0,completion:0,total:0,cached:0},u({}),k(),j()},[O]);return{messages:e,isLoading:n,error:i,isStreaming:o,sendMessageStreaming:(0,L.useCallback)(async(e,n)=>{if(!e.trim())return;if(!q(p)){console.error(`[useChat] Cannot send message without app_id. Current session:`,p),D(`⚠️ Please create a new session with app details before sending messages.`),window.dispatchEvent(new CustomEvent(`openNewSessionModal`));return}let r=null;if(!p?.sessionId)try{D(`🔄 Creating session with saved app data...`),r=await Ue({currentSession:p,defaultAppDescription:E,contextConfig:C}),h(r),D(`✅ Session created with saved app data: ${E}`)}catch(e){console.error(`Failed to create session with saved data:`,e),D(`⚠️ Failed to create session with saved data. Please try the "New Session" button.`);return}finally{await d.invalidateQueries({queryKey:[`chat-sessions`]})}a(null),s(!0),O();let i=r||p,o=We({primarySession:i,fallbackSession:p,defaultAppDescription:E}),c=e.trim(),l={id:`msg_${Date.now()}_user`,content:c,role:`user`,timestamp:new Date().toISOString()};t(e=>[...e,l]);let u=r||p||{sessionId:`default_session`,userId:`default_user`,appId:``};try{let e=Ge(o,i,p);if(!e){let e=`Critical error: app_id is missing despite validation`;throw console.error(`[useChat] Critical request build failure`,{sessionContext:o,sessionForContext:i,currentSession:p}),D(`❌ ${e}`),Error(e)}let t=ee(e);w.current=await S(Ke({sessionInfo:{sessionId:u.sessionId,userId:u.userId},messageText:c,appId:e,sessionContext:o,defaultAppDescription:E,dashboardContext:n?.dashboardContext,questionContext:n?.questionContext,responseInstructions:t||void 0,streaming:n?.streaming}),{onMessage:P,onError:e=>{let t=X(e);a(t),console.error(`Streaming error:`,e),D(`❌ Error: ${t}`),M(),s(!1),w.current=null},onComplete:()=>{setTimeout(()=>{M(),s(!1),w.current=null},10)}})}catch(e){let t=X(e);a(t),console.error(`Failed to start streaming:`,e),D(`❌ Error: ${t}`),M(),s(!1)}},[D,O,C,p,E,M,P,d,S,h]),stopStreaming:(0,L.useCallback)(()=>{w.current&&(w.current.abort(),w.current=null),M(),O(),s(!1)},[O,M]),clearMessages:F,addSystemMessage:D,loadSessionHistory:(0,L.useCallback)(async(e,n,i)=>{try{r(!0),a(null),F(),D(`🔄 Loading session history...`);let o=i||p?.appId;if(!o)throw Error(`Cannot load chat history without an application id`);let s=await f(`/apps/tara/users/${encodeURIComponent(e)}/sessions/${encodeURIComponent(n)}?app_id=${encodeURIComponent(o)}`);if(!s.ok)throw Error(`Failed to fetch session events: HTTP ${s.status}`);let c=await s.json();t([]);let l=ze(c,{extractDocumentMetadata:A});if(l.aliasMap&&N(l.aliasMap),l.messages.length>0){t(l.messages),x(l.lastUserQuery||Je);let r=Be({currentSession:p,sessionId:n,userId:e,sessionData:c,extractedSessionContext:l.extractedSessionContext});r&&h(r),D(`✅ Loaded session with ${c.events?.length||0} events`)}else D(`📂 Session loaded (no previous conversation history)`)}catch(e){let t=X(e);a(`Failed to load session history: ${t}`),D(`❌ Failed to load session history: ${t}`),console.error(`Failed to load session history:`,e)}finally{r(!1)}},[D,F,p,h,x]),startNewSessionChat:(0,L.useCallback)((e,t,n)=>{try{F(),n&&h(n),D(He(v,t,n))}catch(e){let t=X(e);console.error(`Failed to start new session chat:`,e),D(`❌ Failed to start new session: ${t}`)}},[D,v,F,h]),hasSession:!!p?.sessionId,sessionTokenUsage:T.current}},Xe=o.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 0.5rem;
  background: #f59e0b;
  color: white;
  border-radius: 6px;
  font-size: 0.875rem;
`,Ze=o.div`
  position: fixed;
  bottom: 5rem;
  right: 1rem;
  padding: 0.75rem;
  background: #dc2626;
  color: white;
  border-radius: 6px;
  max-width: 300px;
`,Qe=o.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    overflow: hidden;
    height: 100%;
`,$e=()=>{let{setActiveModal:e,setLastUserQuery:t}=b(),{currentSession:n,setCurrentSession:r}=g(),{appDescription:i}=_(),[a,o]=(0,L.useState)(!0),{data:s}=u(),{messages:c,isStreaming:l,sendMessageStreaming:d,clearMessages:f,addSystemMessage:p,loadSessionHistory:m,startNewSessionChat:v,isLoading:y,error:x,sessionTokenUsage:S}=Ye(),{taraVersion:C}=h();(0,L.useEffect)(()=>{let t=e=>{let{userId:t,sessionId:n,sessionData:i}=e.detail;i&&i.appId&&r(i),m(t,n,i?.appId)},n=e=>{let{userId:t,sessionId:n,sessionData:r}=e.detail;v(t,n,r)},i=()=>{e(`new-session`)},a=e=>{let{message:t}=e.detail;p(t)};return window.addEventListener(`loadSessionHistory`,t),window.addEventListener(`startSessionChat`,n),window.addEventListener(`openNewSessionModal`,i),window.addEventListener(`addSystemMessage`,a),()=>{window.removeEventListener(`loadSessionHistory`,t),window.removeEventListener(`startSessionChat`,n),window.removeEventListener(`openNewSessionModal`,i),window.removeEventListener(`addSystemMessage`,a)}},[m,v,e,p,r]);let w=()=>{},T=l||y;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(Qe,{children:[(0,R.jsx)(de,{persona:n?.persona,conversationTitle:n?.sessionId||`New Chat`,version:n?.taraVersion?`v${n.taraVersion.replace(/"/g,``)}`:`v${C}`,messages:c,addSystemMessage:p,appId:n?.appId,appName:n?.appName,streamingEnabled:a,onStreamingToggle:o}),(0,R.jsx)(Te,{messages:c,isStreaming:l,onMessageClick:w,sessionTokenUsage:S,sessionContext:n?{app_id:n.appId,app_description:i,persona:n.persona}:null}),(0,R.jsx)(Pe,{onSendMessage:(e,n)=>(t(e),d(e,{...n,streaming:a})),disabled:T})]}),!s&&(0,R.jsx)(Xe,{children:`⚠️ Backend connection issue`}),x&&(0,R.jsxs)(Ze,{children:[(0,R.jsx)(`strong`,{children:`Error:`}),` `,x]}),(0,R.jsx)(F,{messages:c,clearMessages:f})]})},et=o.div`
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  display: flex;
  flex-direction: column;
  margin: ${({theme:e})=>e.spacing[4]} 0;
  min-width: 300px;
`,tt=o.div`
  padding: ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
`,nt=o.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`,rt=o.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,it=o.div`
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  background: ${({theme:e})=>e.colors.background.surface};

  ${({theme:e,$isActive:t})=>t?`
        background: ${e.colors.primary[50]};
        border-color: ${e.colors.primary[200]};
      `:`
        &:hover {
          background: ${e.colors.background.hover};
          border-color: ${e.colors.border.strong};
        }
      `}
`,at=o.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
`,ot=o.h4`
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
  flex: 1;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,st=o.button`
  padding: 0.25rem 0.5rem;
  background: ${({theme:e})=>e.colors.background.secondary};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  cursor: ${({$isLoading:e})=>e?`not-allowed`:`pointer`};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  transition: all 0.2s;
  opacity: ${({$isLoading:e})=>e?.6:1};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;

  &:hover:not(:disabled) {
    background: ${({theme:e,$isLoading:t})=>t?e.colors.background.secondary:e.colors.error||`#dc2626`};
    color: ${({$isLoading:e})=>e?`inherit`:`white`};
    border-color: ${({theme:e,$isLoading:t})=>t?e.colors.border.default:e.colors.error||`#dc2626`};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,ct=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex-wrap: wrap;
`,lt=o.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.muted};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,ut=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: relative;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.text.secondary};
`,dt=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({theme:e})=>e.spacing[8]};
  text-align: center;
  color: ${({theme:e})=>e.colors.text.secondary};
`,ft=o.div`
  margin: ${({theme:e})=>e.spacing[4]};
`,pt=o.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border-top: 1px solid ${({theme:e})=>e.colors.border.default};
  background: ${({theme:e})=>e.colors.background.muted};
`,mt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,ht=o.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.secondary};
  text-align: center;
  flex: 1;
`,Z=o.button`
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  min-width: 60px;

  ${({theme:e,$disabled:t})=>t?`
        opacity: 0.5;
        cursor: not-allowed;
        background: ${e.colors.background.muted};
      `:`
        &:hover {
          background: ${e.colors.background.hover};
          border-color: ${e.colors.border.strong};
        }
      `}
`,gt=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.error};
  text-align: center;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,_t=o.button`
  border: none;
  background: none;
  padding: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,vt=e=>{if(!e)return`Recent`;try{let t=new Date(e);if(!isNaN(t.getTime()))return t.toLocaleDateString()}catch{}return`Recent`},yt=({appId:e,appData:t,currentSessionId:n,onNewSession:i})=>{let{userId:a}=D(),o=r(),l=c(),[u,d]=(0,L.useState)(1),[p]=(0,L.useState)(20),[m,h]=(0,L.useState)(null),{data:g,isLoading:_,error:v,refetch:y}=x({user_id:a,app_id:e,page:u,page_size:p}),b=g?.chat_list||[],S=s({mutationFn:async t=>{h(t);let n=await f(`/remove/chat`,{method:`POST`,headers:{"Content-Type":`application/json`},credentials:`include`,body:JSON.stringify({persona:`agent`,session_id:t,app_id:e})});if(!n.ok)throw Error(`HTTP ${n.status}`);return t},onSuccess:async r=>{if(await l.invalidateQueries({queryKey:[`chat-sessions`]}),await l.invalidateQueries({queryKey:[`chat-list`]}),await l.invalidateQueries({queryKey:[`chat-sessions-list`]}),n===r){let n=b.filter(e=>e.session_id!==r);if(n.length>0){let r=n[0];o(C.sessionDetail(e,r.session_id),{state:{app:{appId:t?.appId,name:t?.name},session:r}})}else o(C.sessions(e),{state:t?{app:{appId:t?.appId,name:t?.name}}:void 0})}h(null)},onError:()=>{h(null)}}),E=n=>{let r=b.find(e=>e.session_id===n);o(C.sessionDetail(e,n),{state:{app:{appId:t?.appId,name:t?.name},session:r}})},k=(e,t)=>{t.stopPropagation(),S.mutate(e)},A=(0,L.useCallback)(()=>{u>1&&d(u-1)},[u]),j=(0,L.useCallback)(()=>{g?.pagination.has_next&&d(u+1)},[u,g?.pagination.has_next]),M=g?.pagination,N=M?.has_next||!1,P=M?.has_previous||!1,F=M?.total_items_estimated||0;return(0,R.jsxs)(et,{children:[(0,R.jsx)(tt,{children:(0,R.jsx)(nt,{children:`Chat History`})}),(0,R.jsxs)(rt,{children:[_&&(0,R.jsxs)(ut,{children:[(0,R.jsx)(w,{}),`Loading sessions...`]}),v&&(0,R.jsxs)(gt,{role:`alert`,children:[`Failed to load sessions`,(0,R.jsx)(_t,{type:`button`,onClick:()=>void y(),children:`Try again`})]}),!_&&!v&&b.length===0&&(0,R.jsxs)(dt,{children:[(0,R.jsx)(`div`,{children:`No chat sessions yet`}),(0,R.jsx)(`div`,{children:`Start a new conversation`})]}),!_&&!v&&b.map(e=>(0,R.jsxs)(it,{$isActive:n===e.session_id,onClick:()=>E(e.session_id),children:[(0,R.jsx)(at,{children:(0,R.jsx)(ot,{children:O(e)})}),(0,R.jsx)(ct,{children:(0,R.jsx)(st,{$isLoading:m===e.session_id,onClick:t=>k(e.session_id,t),disabled:m===e.session_id,title:`Delete session`,children:m===e.session_id?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(w,{size:`sm`}),` Deleting...`]}):`Delete`})}),(0,R.jsx)(lt,{children:vt(e.last_update_time)})]},e.session_id))]}),!_&&!v&&F>0&&(N||P)&&(0,R.jsx)(pt,{children:(0,R.jsxs)(mt,{children:[(0,R.jsx)(Z,{$disabled:!P,onClick:A,disabled:!P,children:`← Prev`}),(0,R.jsxs)(ht,{children:[`Page `,u,` • `,F,` sessions`]}),(0,R.jsx)(Z,{$disabled:!N,onClick:j,disabled:!N,children:`Next →`})]})}),(0,R.jsx)(ft,{children:(0,R.jsx)(T,{variant:`default`,size:`sm`,className:`w-full`,onClick:i,children:`+ New Session`})})]})},Q=o.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.background.muted};
`,$=o.div`
  background: ${({theme:e})=>e.colors.background.surface};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
  padding: ${({theme:e})=>e.spacing[1]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,bt=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,xt=o.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.secondary};
  cursor: pointer;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  transition: ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    border-color: ${({theme:e})=>e.colors.border.strong};
  }
`,St=o.div`
  flex: 1;
`,Ct=o.h1`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[2]} 0;
`,wt=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Tt=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Et=o.div`
  display: flex;
  max-height: calc( 100vh - 64px); /* Adjust based on header height */
  height: 100%;
  gap: 16px;
`,Dt=o.div`
  margin: ${({theme:e})=>e.spacing[4]} 0;
`,Ot=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: ${({theme:e})=>e.colors.text.muted};
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
`,kt=o.div`
  font-size: 48px;
  margin-bottom: 16px;
`,At=o.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`,jt=o.div`
  font-size: 14px;
  margin-bottom: 16px;
`,Mt=()=>{let e=r(),t=a(),n=i(),{userId:o}=D(),{currentSession:s,setCurrentSession:c}=g(),{setActiveModal:l}=b(),{resetContextConfig:u}=y(),{appDescription:d,setAppDescription:f}=_(),{taraVersion:p}=h(),m=t.state?.app,v=t.state?.session,x=t.state?.newSession,S=n.sessionid,C=()=>{e(`/app`)},w=()=>{l(`new-session`)};(0,L.useEffect)(()=>{m?.appId&&f(`This description is for ${m.name||m.appId}`)},[m?.appId,m?.name,f]),(0,L.useEffect)(()=>{s?.sessionId&&u()},[s?.sessionId,u]),(0,L.useEffect)(()=>{(async()=>{let e=v?.persona||x?.formData?.persona||`agent`,t=x?.formData?.toolFilter||void 0,n=v?.tara_version||p;if(!m?.appId){console.warn(`Cannot create session without appId`);return}let r={sessionId:S||``,userId:o,appId:m.appId,appName:m?.name||``,persona:e,taraVersion:n,toolFilter:t};if(S&&o&&m?.appId)try{x?.justCreated?window.dispatchEvent(new CustomEvent(`startSessionChat`,{detail:{userId:o,sessionId:S,sessionData:r}})):window.dispatchEvent(new CustomEvent(`loadSessionHistory`,{detail:{userId:o,sessionId:S,sessionData:r}}))}catch(e){console.error(`Failed to load session:`,e)}c(r)})()},[S,o,m?.appId,m?.name,v?.persona,v?.tara_version,x?.formData?.persona,p]);let E=(0,L.useMemo)(()=>(0,R.jsx)(I,{children:(0,R.jsxs)(Et,{children:[(0,R.jsx)(yt,{appId:m?.appId||``,appData:m,currentSessionId:S,onNewSession:w}),(0,R.jsx)(Dt,{children:(0,R.jsx)($e,{})})]})}),[m?.appId,S,o,w]);return m?(0,R.jsxs)(Q,{children:[(0,R.jsx)($,{children:(0,R.jsx)(I,{children:(0,R.jsxs)(bt,{children:[(0,R.jsx)(xt,{onClick:C,children:`← Back`}),(0,R.jsx)(St,{children:(0,R.jsxs)(Ct,{children:[m.name,` (`,m.appId,`)`]})}),(0,R.jsx)(T,{variant:`secondary`,size:`sm`,onClick:()=>{window.openEditAppModal&&window.openEditAppModal(m)},children:`✏️ Edit App`})]})})}),(0,R.jsx)(Tt,{children:(0,R.jsx)(wt,{children:E})})]}):(0,R.jsx)(Q,{children:(0,R.jsxs)(Ot,{children:[(0,R.jsx)(kt,{children:`🔍`}),(0,R.jsx)(At,{children:`Application not found`}),(0,R.jsx)(jt,{children:`Please navigate to this page from the Apps list.`}),(0,R.jsx)(T,{variant:`secondary`,onClick:C,children:`← Back to Apps`})]})})};export{Mt as AppDetailPage};