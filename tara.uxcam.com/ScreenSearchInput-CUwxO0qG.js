import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import{D as n}from"./ui-vendor-CUROeZIN.js";import{O as r}from"./markdown-vendor-BoH6QLuc.js";import{t as i}from"./useDebounce-D9SbeORx.js";var a=e(t(),1),o=r(),s=({query:e,onQueryChange:t,inputRef:n,placeholder:r=`Search screens…`,compactPlaceholder:s=`Search`,ariaLabel:p=`Filter screens`,variant:m=`default`,onSubmit:h,onEscape:g})=>{let _=(0,a.useRef)(null),v=n??_,[y,b]=(0,a.useState)(e),[x,S]=(0,a.useState)(!1),C=i(y,200),w=m!==`compact`||x||y.length>0;return(0,a.useEffect)(()=>{b(e)},[e]),(0,a.useEffect)(()=>{if(C!==y)return;let n=C.trim();n!==e&&t(n)},[C,y,t,e]),(0,o.jsxs)(c,{$variant:m,$expanded:w,children:[(0,o.jsx)(l,{"aria-hidden":`true`,children:(0,o.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:[(0,o.jsx)(`circle`,{cx:`9`,cy:`9`,r:`5.75`}),(0,o.jsx)(`path`,{d:`m13.5 13.5 4 4`})]})}),(0,o.jsx)(u,{ref:v,type:`text`,value:y,onChange:e=>b(e.target.value),onFocus:()=>S(!0),onBlur:()=>S(!1),onKeyDown:e=>{if(e.key===`Enter`&&h){e.preventDefault(),h(y.trim());return}if(e.key===`Escape`){if(g&&g()){e.preventDefault();return}y&&(e.preventDefault(),b(``),t(``))}},placeholder:w?r:s,"aria-label":p}),y?(0,o.jsx)(f,{type:`button`,onClick:()=>{b(``),t(``),v.current?.focus()},"aria-label":`Clear screen filter`,children:`×`}):(0,o.jsx)(d,{children:`/`})]})},c=n.div`
  position: relative;
  width: ${({$variant:e,$expanded:t})=>e===`compact`?t?`280px`:`124px`:`260px`};
  max-width: 100%;
  min-width: 0;
  flex-shrink: 0;
  transition: width 140ms ease;
`,l=n.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.text.tertiary};
  pointer-events: none;
`,u=n.input`
  width: 100%;
  height: 32px;
  padding: 0 34px 0 32px;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};

  &::placeholder {
    color: ${({theme:e})=>e.colors.text.tertiary};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.border.focus};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.uxcam.indigo[100]};
  }
`,d=n.span`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  pointer-events: none;
`,f=n.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  padding: 0;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: transparent;
  color: ${({theme:e})=>e.colors.text.tertiary};
  cursor: pointer;

  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
    background: ${({theme:e})=>e.colors.background.hover};
  }
`;export{s as t};