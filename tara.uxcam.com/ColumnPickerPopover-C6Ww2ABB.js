import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import{_t as n}from"./radix-vendor-DlJdQz7_.js";import{D as r}from"./ui-vendor-CUROeZIN.js";import{O as i}from"./markdown-vendor-BoH6QLuc.js";import{n as a,r as o}from"./columnConfig-B1xwVkRT.js";var s=e(t(),1),c=e(n(),1),l=i(),u=[`user`,`duration`],d=[`screen`],f=({visibleColumnIds:e,onToggleColumn:t,isOpen:n,onClose:r,anchorRef:i,columns:f,groupLabels:N,groupOrder:P,presets:F,onApplyPreset:I,activePreset:L,onResetToDefaults:R,onReorderColumns:z,pinnedColumnIds:B=d})=>{let V=(0,s.useRef)(null),H=(0,s.useRef)(null),[U,W]=(0,s.useState)(``),[G,K]=(0,s.useState)({top:0,left:0}),q=(0,s.useMemo)(()=>new Set(e),[e]),J=(0,s.useMemo)(()=>{let e=U.toLowerCase(),t=f??o;return u.map(e=>t.find(t=>t.id===e)).filter(e=>!!e).filter(t=>e===``||t.label.toLowerCase().includes(e))},[U,f]),Y=(0,s.useMemo)(()=>{let e=P?[...P]:[`core`,`session`,`device`,`ai`],t=U.toLowerCase(),n=f??o,r=N??a,i=new Set(u);return e.map(e=>{let a=n.filter(n=>n.group===e&&!i.has(n.id)&&(t===``||n.label.toLowerCase().includes(t)));return{group:e,label:r[e]??e,columns:a}}).filter(e=>e.columns.length>0)},[U,f,N,P]),X=(0,s.useCallback)(()=>{if(!i.current)return;let e=i.current.getBoundingClientRect(),t=window.innerWidth,n=e.left;n+260>t-16&&(n=Math.max(16,t-260-16)),K({top:e.bottom+4,left:n})},[i]);(0,s.useEffect)(()=>{if(n)return X(),window.addEventListener(`resize`,X),window.addEventListener(`scroll`,X,!0),()=>{window.removeEventListener(`resize`,X),window.removeEventListener(`scroll`,X,!0)}},[n,X]),(0,s.useEffect)(()=>{n&&(W(``),requestAnimationFrame(()=>H.current?.focus()))},[n]),(0,s.useEffect)(()=>{if(!n)return;let e=e=>{let t=e.target;V.current&&!V.current.contains(t)&&i.current&&!i.current.contains(t)&&r()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[n,r,i]),(0,s.useEffect)(()=>{if(!n)return;let e=e=>{e.key===`Escape`&&r()};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[n,r]);let Z=(0,s.useCallback)(e=>{t(e.id)},[t]),Q=(0,s.useCallback)(e=>{I?.(e)},[I]);return n?(0,c.createPortal)((0,l.jsxs)(p,{ref:V,$top:G.top,$left:G.left,role:`dialog`,"aria-label":`Choose visible columns`,children:[F&&F.length>0&&I&&(0,l.jsxs)(k,{children:[(0,l.jsx)(A,{children:`Presets`}),(0,l.jsx)(j,{children:F.map(e=>(0,l.jsx)(M,{$active:L===e.id,onClick:()=>Q(e.id),title:e.description,type:`button`,children:e.label},e.id))})]}),(0,l.jsxs)(m,{children:[(0,l.jsx)(v,{ref:H,type:`text`,placeholder:`Search columns...`,value:U,onChange:e=>W(e.target.value)}),R&&(0,l.jsx)(h,{type:`button`,onClick:()=>{R()},title:`Reset to default columns and order`,children:`Reset`})]}),(0,l.jsxs)(y,{children:[J.length===0&&Y.length===0&&(0,l.jsx)(b,{children:`No columns match`}),J.length>0&&(0,l.jsxs)(S,{children:[(0,l.jsx)(C,{children:`Always shown`}),J.map(e=>(0,l.jsxs)(T,{"aria-disabled":`true`,title:`This column can't be hidden`,children:[(0,l.jsx)(D,{type:`checkbox`,checked:!0,disabled:!0,readOnly:!0,tabIndex:-1}),(0,l.jsx)(O,{children:e.label}),(0,l.jsx)(E,{"aria-hidden":`true`,children:(0,l.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,l.jsx)(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}),(0,l.jsx)(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})]})})]},e.id))]}),Y.map(({group:t,label:n,columns:r})=>(0,l.jsxs)(x,{children:[(0,l.jsx)(C,{children:n}),r.map(t=>{let n=q.has(t.id),r=B.includes(t.id),i=e.indexOf(t.id),a=n&&!r&&i>0&&!B.includes(e[i-1]??``),o=n&&!r&&i>=0&&i<e.length-1;return(0,l.jsxs)(w,{onClick:()=>{r||Z(t)},$disabled:r,children:[(0,l.jsx)(D,{type:`checkbox`,checked:n,onChange:()=>!r&&Z(t),disabled:r,tabIndex:-1}),(0,l.jsx)(O,{children:t.label}),z&&n&&!r&&(0,l.jsxs)(g,{onClick:e=>e.stopPropagation(),children:[(0,l.jsx)(_,{type:`button`,disabled:!a,onClick:e=>{e.stopPropagation(),a&&z(i,i-1)},"aria-label":`Move ${t.label} up`,children:(0,l.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,l.jsx)(`polyline`,{points:`2 6 5 3 8 6`})})}),(0,l.jsx)(_,{type:`button`,disabled:!o,onClick:e=>{e.stopPropagation(),o&&z(i,i+1)},"aria-label":`Move ${t.label} down`,children:(0,l.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,l.jsx)(`polyline`,{points:`2 4 5 7 8 4`})})})]})]},t.id)})]},t))]})]}),document.body):null},p=r.div`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  width: 260px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.elevation.high.background};
  border: ${({theme:e})=>e.elevation.high.border};
  box-shadow: ${({theme:e})=>e.elevation.high.shadow};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  z-index: ${({theme:e})=>e.zIndex.dropdown};
  padding: 8px 0;
  overflow: hidden;

  animation: popoverIn 200ms ${({theme:e})=>e.animation.easing.spring};

  @keyframes popoverIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,m=r.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 8px 8px;
  flex-shrink: 0;
`,h=r.button`
  flex-shrink: 0;
  padding: 6px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    color: ${({theme:e})=>e.colors.text.primary};
    border-color: ${({theme:e})=>e.colors.border.strong};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.uxcam.indigo[200]};
  }
`,g=r.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin-left: auto;
  flex-shrink: 0;
`,_=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: transparent;
  color: ${({theme:e})=>e.colors.text.tertiary};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.background.hover};
    color: ${({theme:e})=>e.colors.text.primary};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.uxcam.indigo[200]};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,v=r.input`
  width: 100%;
  box-sizing: border-box;
  background: ${({theme:e})=>e.colors.background.sunken};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 8px 12px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.primary};
  outline: none;

  &::placeholder {
    color: ${({theme:e})=>e.colors.text.tertiary};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.uxcam.indigo[200]};
  }
`,y=r.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`,b=r.div`
  padding: 16px 12px;
  text-align: center;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,x=r.div`
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`,S=r.div`
  padding-bottom: 8px;
  margin-bottom: 4px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.subtle};
`,C=r.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors.text.tertiary};
  padding: 12px 12px 4px;
  user-select: none;
`,w=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: ${({$disabled:e})=>e?`default`:`pointer`};
  transition: ${({theme:e})=>e.transitions.fast};
  user-select: none;
  opacity: ${({$disabled:e})=>e?.65:1};

  &:hover {
    background: ${({$disabled:e,theme:t})=>e?`transparent`:t.colors.background.hover};
  }
`,T=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  margin: 0 4px;
  border-radius: calc(var(--ds-radius-sm, ${({theme:e})=>e.borderRadius.md}) - 2px);
  cursor: not-allowed;
  user-select: none;
  font-size: 13px;
  opacity: 0.7;
`,E=r.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.text.tertiary};

  svg {
    width: 12px;
    height: 12px;
  }
`,D=r.input`
  width: 14px;
  height: 14px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  flex-shrink: 0;
  cursor: inherit;
  accent-color: ${({theme:e})=>e.colors.uxcam.indigo[500]};
`,O=r.span`
  flex: 1;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,k=r.div`
  padding: 8px 8px 4px;
  flex-shrink: 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.subtle};
`,A=r.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors.text.tertiary};
  padding: 0 4px 6px;
  user-select: none;
`,j=r.div`
  display: flex;
  gap: 6px;
  padding-bottom: 8px;
`,M=r.button`
  flex: 1;
  min-width: 0;
  padding: 6px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.default};
  border: 1.5px solid ${({$active:e,theme:t})=>e?t.colors.uxcam.indigo[400]:t.colors.border.default};
  background: ${({$active:e,theme:t})=>e?t.colors.uxcam.indigo[50]:t.colors.background.surface};
  color: ${({$active:e,theme:t})=>e?t.colors.uxcam.indigo[700]:t.colors.text.secondary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({$active:e,theme:t})=>e?t.typography.fontWeight.semibold:t.typography.fontWeight.medium};
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.uxcam.indigo[300]};
    background: ${({theme:e})=>e.colors.uxcam.indigo[50]};
    color: ${({theme:e})=>e.colors.uxcam.indigo[700]};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.uxcam.indigo[200]};
  }
`;export{f as t};