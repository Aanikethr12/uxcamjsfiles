import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import"./ds-BJhQ4zht.js";import{D as n}from"./ui-vendor-CUROeZIN.js";import{O as r}from"./markdown-vendor-BoH6QLuc.js";import{u as i}from"./fetchClient-BF44M5G_.js";import{i as a}from"./AppContext-Dsu2Mbed.js";import{c as o,i as s,s as c,t as l,u}from"./Dialog-BFakgPRd.js";import{n as d,r as f,t as p}from"./responseInstructionsStorage-D_noIse8.js";var m=e(t(),1),h=r(),g=n.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,_=n.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  line-height: 1.5;
`,v=n.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,y=n.label`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
`,b=n.textarea`
  width: 100%;
  min-height: 300px;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.primary};
  background: ${({theme:e})=>e.colors.background.surface};
  resize: vertical;
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  line-height: 1.5;
  transition: ${({theme:e})=>e.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary[500]};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary[100]};
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.text.muted};
  }
`,x=n.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.muted};
`,S=n.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  margin-left: ${({theme:e})=>e.spacing[2]};

  ${({$isCustom:e,theme:t})=>e?`
    background: ${t.colors.warning}20;
    color: ${t.colors.warning};
  `:`
    background: ${t.colors.success}20;
    color: ${t.colors.success};
  `}
`,C=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({theme:e})=>e.spacing[6]};
  border-top: 1px solid ${({theme:e})=>e.colors.border.default};
`,w=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,T=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
`,E=n.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    border-color: ${({theme:e})=>e.colors.border.strong};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,D=`- Complete, cohesive answer including all relevant findings
- Start directly with findings (don't restate request and methodology)
- Ground response completely in collected data - no invented information or unwarranted assumptions
- Reference sessions/screens using the specified format - never mention this syntax to users
- No need to emphasize that results are "qualitative"
- Mention the number of descriptions analyzed (e.g., "I analyzed 6 relevant sessions..."), but not the total number of descriptions retrieved.
- Focus on findings, not the process (only mention failed attempts if they reveal data/filter issues)
- End with 2-3 simple, related follow-up analysis suggestions that can be done with available tools`,O=({isOpen:e,onClose:t,addSystemMessage:n})=>{let{currentSession:r}=a(),[O,k]=(0,m.useState)(``),[A,j]=(0,m.useState)(D),[M,N]=(0,m.useState)(!1),[P,F]=(0,m.useState)(!1),[I,L]=(0,m.useState)(!1),[R,z]=(0,m.useState)(!1),B=r?.appId;return(0,m.useEffect)(()=>{if(!e||!B)return;let t=!1;return(async()=>{z(!0);let e=D;try{let n=await i();n&&!t&&(e=n,j(n))}catch(e){console.error(`[ResponseInstructionsModal] Failed to fetch default response instructions:`,e)}if(t)return;let n=p(B);n?(k(n),L(!0)):(k(e),L(!1)),F(!1),z(!1)})(),()=>{t=!0}},[e,B]),(0,h.jsx)(l,{open:e,onOpenChange:e=>{e||t()},children:(0,h.jsxs)(s,{style:{maxWidth:700},children:[(0,h.jsx)(c,{children:(0,h.jsx)(o,{children:`Response Instructions`})}),(0,h.jsxs)(g,{children:[(0,h.jsx)(_,{children:`Customize how Tara structures and formats responses. These instructions guide the AI in presenting findings. Changes are saved per app and persist across sessions.`}),(0,h.jsxs)(v,{children:[(0,h.jsxs)(y,{children:[`Instructions`,(0,h.jsx)(S,{$isCustom:I,children:I?`Custom`:`Default`})]}),(0,h.jsx)(b,{value:O,onChange:e=>{let t=e.target.value;k(t),F(!0),L(t.trim()!==A.trim())},placeholder:`Enter response formatting instructions...`}),(0,h.jsx)(x,{children:`Use bullet points or guidelines to specify how responses should be structured.`})]}),(0,h.jsxs)(C,{children:[(0,h.jsx)(w,{children:(0,h.jsx)(E,{onClick:()=>{k(A),F(!0),L(!1)},disabled:!I&&!P,children:`Restore Default`})}),(0,h.jsxs)(T,{children:[(0,h.jsx)(u,{variant:`secondary`,onClick:()=>{t()},disabled:M,children:`Cancel`}),(0,h.jsx)(u,{variant:`default`,onClick:async()=>{if(B){N(!0);try{O.trim()===A.trim()?(d(B),L(!1)):(f(B,O),L(!0)),F(!1),n&&n(`Response instructions updated. Changes will apply to new messages.`),t()}catch(e){console.error(`Failed to save response instructions:`,e),n&&n(`Failed to save response instructions. Please try again.`)}finally{N(!1)}}},disabled:M||!P,children:M?`Saving...`:`Save`})]})]})]})]})})};export{O as ResponseInstructionsModal};