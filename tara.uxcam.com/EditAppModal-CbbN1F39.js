import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import"./ds-BJhQ4zht.js";import{D as n}from"./ui-vendor-CUROeZIN.js";import{O as r}from"./markdown-vendor-BoH6QLuc.js";import{n as i}from"./AppContext-Dsu2Mbed.js";import{c as a,i as o,s,t as c,u as l}from"./Dialog-BFakgPRd.js";var u=e(t(),1),d=r(),f=n.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,p=n.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,m=n.label`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
`,h=n.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.text.primary};
  background: ${({theme:e,$readOnly:t})=>t?e.colors.background.muted:e.colors.background.surface};
  transition: ${({theme:e})=>e.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary[500]};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary[100]};
  }
  
  ${({$readOnly:e})=>e&&`
    cursor: not-allowed;
  `}
`,g=n.textarea`
  width: 100%;
  min-height: 120px;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.text.primary};
  background: ${({theme:e})=>e.colors.background.surface};
  resize: vertical;
  font-family: inherit;
  line-height: 1.5;
  transition: ${({theme:e})=>e.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary[500]};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary[100]};
  }
`,_=n.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,v=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,y=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,b=n.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
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
`,x=n.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[3]};
  padding-top: ${({theme:e})=>e.spacing[6]};
  border-top: 1px solid ${({theme:e})=>e.colors.border.default};
`,S=({isOpen:e,onClose:t,app:n,onSave:r,onRegenerate:S,addSystemMessage:C})=>{let{appDescription:w,setAppDescription:T}=i(),[E,D]=(0,u.useState)(``),[O,k]=(0,u.useState)(!1),[A,j]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{D(w||`This description is for ${n?.appName||n?.appId||`your app`}`)},[w,n?.appName,n?.appId]),n?(0,d.jsx)(c,{open:e,onOpenChange:e=>{e||t()},children:(0,d.jsxs)(o,{style:{maxWidth:600},children:[(0,d.jsx)(s,{children:(0,d.jsx)(a,{children:`Edit App`})}),(0,d.jsxs)(f,{children:[(0,d.jsxs)(p,{children:[(0,d.jsx)(m,{children:`App Name`}),(0,d.jsx)(h,{type:`text`,value:n.appName||n.appId,readOnly:!0,$readOnly:!0}),(0,d.jsx)(_,{children:`App name cannot be edited`})]}),(0,d.jsxs)(p,{children:[(0,d.jsxs)(v,{children:[(0,d.jsx)(m,{children:`App Description`}),(0,d.jsx)(y,{children:(0,d.jsx)(b,{onClick:()=>{k(!0)},disabled:O,children:`✏️ Edit`})})]}),O?(0,d.jsx)(g,{value:E,onChange:e=>D(e.target.value),placeholder:`Enter a description for your app...`,autoFocus:!0}):(0,d.jsx)(h,{type:`text`,value:E,readOnly:!0,$readOnly:!0})]}),(0,d.jsxs)(x,{children:[(0,d.jsx)(l,{variant:`secondary`,onClick:()=>{t()},disabled:A,children:`Cancel`}),(0,d.jsx)(l,{variant:`default`,onClick:async()=>{if(n){j(!0);try{T(E),await r(n.appId,E),t()}catch(e){console.error(`Failed to save app:`,e),C&&C(`❌ Failed to save app description. Please try again.`)}finally{j(!1)}}},disabled:A||!O||E.trim()===``,children:A?`Saving...`:`Save Changes`})]})]})]})}):null};export{S as EditAppModal};