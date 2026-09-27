import"./rolldown-runtime-C5Y2Ol-c.js";import{$r as e}from"./icons-vendor-C23rQ2ix.js";import{D as t}from"./ui-vendor-CUROeZIN.js";import{O as n}from"./markdown-vendor-BoH6QLuc.js";e();var r=n(),i=({title:e,description:t,action:n,children:i,noBorder:f=!1})=>{let p=!!(e||t);return(0,r.jsxs)(a,{$noBorder:f,children:[p||n?(0,r.jsxs)(o,{children:[p?(0,r.jsxs)(s,{children:[e?(0,r.jsx)(c,{children:e}):null,t?(0,r.jsx)(l,{children:t}):null]}):null,n?(0,r.jsx)(u,{$stretch:!p,children:n}):null]}):null,(0,r.jsx)(d,{children:i})]})},a=t.section`
  background: ${({theme:e,$noBorder:t})=>t?`transparent`:e.elevation.low.background};
  border: ${({$noBorder:e})=>e?`none`:`1px solid var(--border)`};
  border-radius: ${({$noBorder:e})=>e?`0`:`var(--radius)`};
  padding: ${({theme:e,$noBorder:t})=>t?`0`:e.spacing[6]};
  /* Allow tooltip bubbles (position: absolute) inside cards to escape the
     card boundary without being clipped by border-radius + BFC ancestors. */
  overflow: visible;
`,o=t.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  overflow: visible;
`,s=t.div`
  min-width: 0;
`,c=t.h3`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  color: ${({theme:e})=>e.colors.text.primary};
`,l=t.p`
  margin: ${({theme:e})=>`${e.spacing[1]} 0 0`};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,u=t.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};

  /* When the card has no title, let the action slot span the full header
     row so consumers can compose their own header layout (e.g. search +
     count + link on the Team tab). */
  overflow: visible;

  ${({$stretch:e})=>e&&`
      flex: 1;
      min-width: 0;
    `}
`,d=t.div`
  min-width: 0;
`;export{i as t};