import"./rolldown-runtime-C5Y2Ol-c.js";import{$r as e}from"./icons-vendor-C23rQ2ix.js";import{D as t}from"./ui-vendor-CUROeZIN.js";import{O as n}from"./markdown-vendor-BoH6QLuc.js";import{t as r}from"./Shimmer-BQNKs0BP.js";e();var i=n(),a=[{value:7,label:`7d`},{value:30,label:`30d`},{value:90,label:`90d`}],o=({value:e,onChange:t,className:n})=>(0,i.jsx)(s,{role:`group`,"aria-label":`Time period`,className:n,children:a.map(n=>(0,i.jsx)(c,{type:`button`,$active:e===n.value,onClick:()=>t(n.value),"aria-pressed":e===n.value,children:n.label},n.value))}),s=t.div`
  display: flex;
  gap: 0;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  overflow: hidden;
`,c=t.button`
  padding: 4px 14px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border: none;
  border-right: 1px solid ${({theme:e})=>e.colors.border.default};
  cursor: pointer;
  white-space: nowrap;
  transition: ${({theme:e})=>e.transitions.fast};

  background: ${({$active:e,theme:t})=>e?t.colors.interactive.activeBg:t.colors.background.surface};
  color: ${({$active:e,theme:t})=>e?t.colors.interactive.activeText:t.colors.text.tertiary};

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: ${({$active:e,theme:t})=>e?t.colors.interactive.activeBg:t.colors.background.hover};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: -2px;
  }
`,l=({title:e,dataFreshness:t,isLoading:n=!1,isError:a=!1,onRetry:o,children:s,className:c})=>(0,i.jsxs)(u,{className:c,children:[(0,i.jsxs)(d,{children:[(0,i.jsx)(f,{children:e}),t&&(0,i.jsx)(p,{title:`Data freshness: ${t}`,children:t})]}),n&&(0,i.jsx)(m,{children:(0,i.jsx)(r,{variant:`block`,height:`120px`})}),!n&&a&&(0,i.jsxs)(g,{children:[(0,i.jsx)(_,{children:`Failed to load this section.`}),o&&(0,i.jsx)(v,{type:`button`,onClick:o,children:`Retry`})]}),!n&&!a&&(0,i.jsx)(h,{children:s})]}),u=t.div`
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
`,d=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.subtle};
`,f=t.h3`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
`,p=t.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
`,m=t.div`
  padding: 20px;
`,h=t.div`
  padding: 20px;
`,g=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 32px 20px;
`,_=t.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.severity.critical.text};
`,v=t.button`
  padding: 4px 12px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: transparent;
  color: ${({theme:e})=>e.colors.text.secondary};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: -2px;
  }
`;function y(e){if(e==null)return`--`;let t=new Date(e),n=new Date().getTime()-t.getTime(),r=Math.floor(n/(1e3*60*60*24));return r===0?`Today`:r===1?`Yesterday`:r<7?`${r}d ago`:r<30?`${Math.floor(r/7)}w ago`:`${Math.floor(r/30)}mo ago`}function b(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toLocaleString()}function x(e){return e==null?`--`:new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`short`,day:`numeric`})}function S(e){if(e==null||e===0)return`0s`;let t=Math.floor(e/3600),n=Math.floor(e%3600/60);return t>0?`${t}h ${n}m`:n>0?`${n}m`:`${Math.round(e)}s`}export{l as a,y as i,S as n,o,b as r,x as t};