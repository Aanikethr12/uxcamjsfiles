import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import"./ds-BJhQ4zht.js";import{D as n}from"./ui-vendor-CUROeZIN.js";import{O as r}from"./markdown-vendor-BoH6QLuc.js";import{n as i}from"./fetchClient-BF44M5G_.js";import{i as a,n as o,s}from"./AppContext-Dsu2Mbed.js";import{c,i as l,s as u,t as d}from"./Dialog-BFakgPRd.js";var f=e(t(),1),p=r(),m=n.div`
  padding: 20px 0;
`,h=n.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.colors.background.muted};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,g=n.div`
  color: ${({theme:e})=>e.colors.text.tertiary};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,_=n.div`
  color: ${({theme:e})=>e.colors.text.primary};
  line-height: 1.5;
`,v=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  flex-wrap: wrap;
`,y=n.button`
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  transition: ${({theme:e})=>e.transitions.default};

  ${({theme:e,$variant:t=`secondary`})=>t===`primary`?`
        background: ${e.colors.primary[500]};
        color: white;
        border-color: ${e.colors.primary[500]};
        
        &:hover:not(:disabled) {
          background: ${e.colors.primary[600]};
          border-color: ${e.colors.primary[600]};
        }
      `:`
        background: ${e.colors.background.primary};
        color: ${e.colors.text.secondary};
        
        &:hover:not(:disabled) {
          background: ${e.colors.background.hover};
        }
      `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,b=n.span`
  color: ${({theme:e})=>e.colors.severity.good.text};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  line-height: 1.5;
  display: ${({$visible:e})=>e?`inline`:`none`};
  transition: opacity 0.2s;
`,x=n.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,S=n.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,C=n.div`
  background: ${({$bgColor:e,theme:t})=>e||t.colors.background.muted};
  border: 1px solid ${({$borderColor:e,theme:t})=>e||t.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing[4]};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: 0.75rem;
  white-space: pre-wrap;
  overflow: auto;
  line-height: 1.4;
`,w=n(C)`
  max-height: 30vh;
  background: ${({theme:e})=>e.colors.severity.warning.bg};
  border-color: ${({theme:e})=>e.colors.severity.warning.icon};
`,T=n(C)`
  max-height: 20vh;
  background: ${({theme:e})=>e.colors.primary[100]};
  border-color: ${({theme:e})=>e.colors.primary[500]};
`,E=n(C)`
  max-height: 40vh;
  background: ${({theme:e})=>e.colors.background.muted};
  border-color: ${({theme:e})=>e.colors.border.default};
`,D=({isOpen:e,onClose:t})=>{let{currentSession:n}=a(),{ui:r}=s(),C=r.lastUserQuery,[D,O]=(0,f.useState)(null),[k,A]=(0,f.useState)(!1),[j,M]=(0,f.useState)(``),{appDescription:N}=o(),P=f.useMemo(()=>{let e=n?.persona===`agent`?`Standard`:n?.persona===`email-insight`?`Email Insights workflow (legacy session)`:`Experimental`;return`Model: Default model (from settings.yaml)\nSession: ${n?.appId?`App: ${N||n.appId}, Persona: ${e}`:`No session context`}\nLast Query: ${C.length>50?`${C.substring(0,50)}...`:C}\nDate: ${new Date().toLocaleDateString(`en-US`,{weekday:`long`,year:`numeric`,month:`long`,day:`numeric`})}`},[n,C]),F=async()=>{A(!0);try{let e={app_id:n?.appId||`default-app`,app_description:N||`Sample application`,user_query:C,persona:n?.persona||`agent`},t=await i(`/preview-prompt`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)});if(!t.ok)throw Error(`HTTP ${t.status}`);O(await t.json())}catch(e){console.error(`Failed to generate prompt preview:`,e),O({system_instruction:`Error loading system instruction. Please check your connection and try again.`,formatted_user_query:C,rendered_prompt:`Error loading complete prompt. Please check your connection and try again.`})}finally{A(!1)}},I=async(e,t)=>{try{await navigator.clipboard.writeText(e),L(t)}catch(n){console.error(`Failed to copy to clipboard:`,n);let r=document.createElement(`textarea`);r.value=e,r.style.position=`fixed`,r.style.left=`-999999px`,r.style.top=`-999999px`,document.body.appendChild(r),r.focus(),r.select();try{document.execCommand(`copy`)}catch(e){console.error(`Fallback copy failed:`,e)}document.body.removeChild(r),L(t)}},L=e=>{M(e),setTimeout(()=>M(``),2e3)};return(0,f.useEffect)(()=>{e&&F()},[e]),(0,p.jsx)(d,{open:e,onOpenChange:e=>{e||t()},children:(0,p.jsxs)(l,{style:{maxWidth:1e3},children:[(0,p.jsx)(u,{children:(0,p.jsx)(c,{children:`Prompt Preview`})}),(0,p.jsxs)(m,{children:[(0,p.jsxs)(h,{children:[(0,p.jsx)(g,{children:`Using context from:`}),(0,p.jsx)(_,{children:P})]}),(0,p.jsxs)(x,{children:[(0,p.jsx)(S,{children:`Complete Prompt (as sent to LLM)`}),(0,p.jsxs)(v,{children:[(0,p.jsx)(y,{onClick:()=>{D?.rendered_prompt&&I(D.rendered_prompt,`✅ Full prompt copied!`)},disabled:!D,children:`📋 Copy Full Prompt`}),(0,p.jsx)(y,{onClick:()=>{D?.system_instruction&&I(D.system_instruction,`✅ System instruction copied!`)},disabled:!D,children:`📋 Copy System Only`}),(0,p.jsxs)(y,{$variant:`primary`,onClick:F,disabled:k,children:[`🔄 `,k?`Loading...`:`Refresh Preview`]}),(0,p.jsx)(b,{$visible:!!j,children:j})]}),(0,p.jsxs)(x,{children:[(0,p.jsx)(S,{children:`📋 System Instruction`}),(0,p.jsx)(w,{children:k?`Loading system instruction...`:D?.system_instruction||`No system instruction available`})]}),(0,p.jsxs)(x,{children:[(0,p.jsx)(S,{children:`👤 Formatted User Query`}),(0,p.jsx)(T,{children:k?`Loading user query...`:D?.formatted_user_query||`No user query available`})]}),(0,p.jsxs)(x,{children:[(0,p.jsx)(S,{children:`🤖 Complete Combined Prompt`}),(0,p.jsx)(E,{children:k?`Loading complete prompt...`:D?.rendered_prompt||`No rendered prompt available`})]})]})]})]})})};export{D as PromptPreviewModal};