import"./rolldown-runtime-C5Y2Ol-c.js";import{$r as e}from"./icons-vendor-C23rQ2ix.js";import{D as t}from"./ui-vendor-CUROeZIN.js";import{O as n}from"./markdown-vendor-BoH6QLuc.js";e();var r=n(),i=({items:e,columns:t=3})=>(0,r.jsx)(a,{$columns:t,children:e.map(e=>(0,r.jsxs)(o,{children:[(0,r.jsx)(s,{children:e.label}),(0,r.jsx)(c,{children:e.value}),e.detail?(0,r.jsx)(l,{children:e.detail}):null]},e.label))}),a=t.div`
  display: grid;
  grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
  gap: ${({theme:e})=>`${e.spacing[4]} ${e.spacing[8]}`};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,o=t.div`
  min-width: 0;
`,s=t.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--muted-foreground);
`,c=t.div`
  margin-top: ${({theme:e})=>e.spacing[1]};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: 500;
  font-family: var(--font-display);
  color: ${({theme:e})=>e.colors.text.primary};
`,l=t.div`
  margin-top: 2px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.secondary};
`;export{i as t};