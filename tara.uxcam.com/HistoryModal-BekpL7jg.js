import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import"./ds-BJhQ4zht.js";import{D as n}from"./ui-vendor-CUROeZIN.js";import{O as r}from"./markdown-vendor-BoH6QLuc.js";import{i,n as a}from"./AppContext-Dsu2Mbed.js";import{c as o,i as s,s as c,t as l}from"./Dialog-BFakgPRd.js";var u=e(t(),1),d=r(),f=n.div`
  padding: 20px 0;
`,p=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,m=n.button`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
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
      `:t===`danger`?`
        background: ${e.colors.error};
        color: ${e.colors.text.inverse};
        border-color: ${e.colors.error};

        &:hover:not(:disabled) {
          background: ${e.colors.severity.critical.text};
          border-color: ${e.colors.severity.critical.text};
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
`,h=n.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,g=n.label`
  display: block;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,_=n.div`
  background: ${({theme:e})=>e.colors.background.muted};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing[4]};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  white-space: pre-wrap;
  overflow: auto;
`,v=n(_)`
  max-height: 100px;
`,y=n(_)`
  max-height: 500px;
`,b=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,x=n.label`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  cursor: pointer;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};

  input[type="checkbox"] {
    margin: 0;
  }
`,S=({isOpen:e,onClose:t,messages:n,onClearHistory:r,onAddSystemMessage:_})=>{let{currentSession:S}=i(),[C,w]=(0,u.useState)(!0),[T,E]=(0,u.useState)(!0),[D,O]=(0,u.useState)(!0),[k,A]=(0,u.useState)(!0),[j,M]=(0,u.useState)(0),{appDescription:N}=a(),P=()=>{M(e=>e+1)},F=(0,u.useMemo)(()=>{if(!S?.sessionId)return`No session active`;let e=S.persona===`agent`?`Standard`:S.persona===`email-insight`?`Email Insights workflow (legacy session)`:`Experimental`,t={sessionId:`${S.sessionId} (server session)`,userId:S.userId,appId:S.appId,appName:S.appName||`tara`,appDescription:N,persona:e,createdAt:S.createdAt,updatedAt:S.updatedAt,messageCount:S.messageCount},n=Object.fromEntries(Object.entries(t).filter(([e,t])=>t!==void 0));return JSON.stringify(n,null,2)},[S,j]),I=(0,u.useMemo)(()=>({metadata:{exportDate:new Date().toISOString(),sessionId:S?.sessionId||`no-session`,userId:S?.userId||`no-user`,serverSession:S,messageCount:n.length},messages:n.map((e,t)=>{let n={id:e.id,role:e.role,isStreaming:e.isStreaming,invocationId:e.invocationId,partial:e.partial,thought:e.thought,chartId:e.chartId,chartConfig:e.chartConfig,tokenUsage:e.tokenUsage};return(e.functionCall||e.functionResponse)&&(n.toolData={toolType:`function_call`,name:e.functionCall?.name||e.functionResponse?.name,id:e.functionCall?.id||e.functionResponse?.id,args:e.functionCall?.args,response:e.functionResponse?.response}),{index:t,type:e.role===`user`?`user`:e.role===`assistant`?`assistant`:e.role===`tool`?`tool`:`system`,content:e.content,timestamp:e.timestamp,rawData:n}})}),[n,S,j]),L=(0,u.useMemo)(()=>{let e=I.messages.filter(e=>!(e.type===`user`&&!C||e.type===`assistant`&&!T||e.type===`tool`&&!D||e.type===`system`&&!k));return{...I,messages:e}},[I,C,T,D,k]),R=()=>{let e=JSON.stringify(I,null,2),t=new Blob([e],{type:`application/json`}),n=`${S?.sessionId?.replace(/[^a-z0-9]/gi,`_`).toLowerCase()||`tara_chat`}_${new Date().toISOString().slice(0,16).replace(/[T:]/g,`_`)}.json`,r=document.createElement(`a`);r.href=URL.createObjectURL(t),r.download=n,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(r.href),_&&_(`✅ Chat history exported as ${n}`)},z=()=>{window.confirm(`Clear current chat display? This does not delete the server session.`)&&r()},B=L.messages.length===I.messages.length?`${L.messages.length}`:`${L.messages.length} (of ${I.messages.length} total)`;return(0,d.jsx)(l,{open:e,onOpenChange:e=>{e||t()},children:(0,d.jsxs)(s,{style:{maxWidth:900},children:[(0,d.jsx)(c,{children:(0,d.jsx)(o,{children:`Chat History Inspector`})}),(0,d.jsxs)(f,{children:[(0,d.jsxs)(p,{children:[(0,d.jsx)(m,{onClick:P,children:`🔄 Refresh`}),(0,d.jsx)(m,{onClick:R,children:`💾 Export Current`}),(0,d.jsx)(m,{$variant:`danger`,onClick:z,children:`🗑️ Clear History`})]}),(0,d.jsxs)(h,{children:[(0,d.jsx)(g,{children:`Session Information`}),(0,d.jsx)(v,{children:F})]}),(0,d.jsxs)(h,{children:[(0,d.jsxs)(g,{children:[`Message Count: `,B]}),(0,d.jsxs)(b,{children:[(0,d.jsxs)(x,{children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:C,onChange:e=>w(e.target.checked)}),(0,d.jsx)(`span`,{children:`👤 User Messages`})]}),(0,d.jsxs)(x,{children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:T,onChange:e=>E(e.target.checked)}),(0,d.jsx)(`span`,{children:`🤖 AI Messages`})]}),(0,d.jsxs)(x,{children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:D,onChange:e=>O(e.target.checked)}),(0,d.jsx)(`span`,{children:`🔧 Tool Messages`})]}),(0,d.jsxs)(x,{children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:k,onChange:e=>A(e.target.checked)}),(0,d.jsx)(`span`,{children:`⚙️ System Messages`})]})]})]}),(0,d.jsxs)(h,{children:[(0,d.jsx)(g,{children:`Chat History`}),(0,d.jsx)(y,{children:JSON.stringify(L,null,2)})]}),(0,d.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,marginTop:`1rem`},children:(0,d.jsx)(m,{onClick:t,children:`Close`})})]})]})})};export{S as HistoryModal};