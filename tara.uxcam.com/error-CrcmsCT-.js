import"./rolldown-runtime-C5Y2Ol-c.js";import{$r as e}from"./icons-vendor-C23rQ2ix.js";import{u as t}from"./router-vendor-DDSrk2O2.js";import{D as n,E as r}from"./ui-vendor-CUROeZIN.js";import{O as i}from"./markdown-vendor-BoH6QLuc.js";import{n as a}from"./animations-D6JAIVtz.js";import"./loading-Cm5yT19R.js";import{t as o}from"./ErrorBoundary-BIvdWyH0.js";e();var s=i();function c(e){switch(e){case`network`:case`ai`:return r`
        background: ${({theme:e})=>e.colors.severity.warning.bg};
        border-color: ${({theme:e})=>e.colors.severity.warning.border};
      `;case`client`:return r`
        background: ${({theme:e})=>e.colors.metrics.rate[50]};
        border-color: ${({theme:e})=>e.colors.metrics.rate[200]};
      `;case`crash`:return r`
        background: ${({theme:e})=>e.colors.severity.critical.bg};
        border-color: ${({theme:e})=>e.colors.severity.critical.border};
      `;default:return r`
        background: ${({theme:e})=>e.colors.severity.warning.bg};
        border-color: ${({theme:e})=>e.colors.severity.warning.border};
      `}}function l(e){switch(e){case`network`:case`ai`:return r`color: ${({theme:e})=>e.colors.severity.warning.icon};`;case`client`:return r`color: ${({theme:e})=>e.colors.metrics.rate[500]};`;case`crash`:return r`color: ${({theme:e})=>e.colors.severity.critical.icon};`;default:return r`color: ${({theme:e})=>e.colors.severity.warning.icon};`}}n.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid;
  ${({$category:e})=>c(e)}
  ${a}
`,n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
  ${({$category:e})=>l(e)}
`,n.div`
  flex: 1;
  min-width: 0;
`,n.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,n.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  margin-top: 2px;
`,n.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
  color: ${({theme:e})=>e.colors.text.tertiary};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  font-style: italic;
  margin-top: 2px;
`,n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  margin-top: 8px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    border-color: ${({theme:e})=>e.colors.border.strong};
  }

  &:active {
    transform: scale(0.97);
  }
`,n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 2px;
  border: none;
  background: none;
  color: ${({theme:e})=>e.colors.text.tertiary};
  cursor: pointer;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.text.secondary};
    background: ${({theme:e})=>e.colors.background.hover};
  }
`,n.div`
  margin-top: 8px;
`,n.button`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,n.pre`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  background: ${({theme:e})=>e.colors.background.sunken};
  padding: 8px 12px;
  margin-top: 6px;
  border-radius: ${({theme:e})=>e.borderRadius.default};
  max-height: 120px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`;function u({children:e,fallback:n}){return(0,s.jsx)(o,{resetKey:t().key,fallback:n,children:e})}export{u as t};