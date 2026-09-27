import{D as e,E as t}from"./ui-vendor-CUROeZIN.js";var n=t`
  --card: var(--color-surface-card, #ffffff);
  --secondary: var(--muted);
  --input: var(--border);
  --text-1: var(--foreground);
  --text-2: color-mix(in oklch, var(--foreground) 72%, var(--muted-foreground));
  --text-3: var(--muted-foreground);
  --background-tint: color-mix(in oklab, var(--primary) 5%, var(--background));
  --color-surface-section: var(--background-tint);
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
`,r=e.div`
  ${n}
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  background: ${({theme:e})=>`var(--color-surface-canvas, ${e.colors.background.canvas})`};
`,i=e.div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  padding: ${({theme:e})=>`${e.spacing[4]} ${e.spacing[6]} ${e.spacing[6]}`};
`,a=e.section`
  display: flex;
  /* flex: 1 is load-bearing, and its absence was the same bug documented on
     ExplorerPageHeaderText below: the parent ExplorerContentSection is a flex
     row, so without it this resolved to flex: 0 1 auto and sized to its
     widest intrinsic child instead of claiming the row. Pages whose content
     is a wide table happened to fill anyway (their content forced the width),
     which masked it — a dashboard whose blocks are all width: 100% had
     nothing to push against and rendered narrow on a full-width canvas. */
  flex: 1;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: 0;
  background: transparent;
`,o=e.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};
`,s=e.div`
  /* flex: 1 matters, and its absence was a real bug: with only min-width: 0
     this resolved to flex: 0 1 auto, so it never claimed the header row and
     shrank well below the available width. The title inside is truncate-ed, so
     it clipped to an ellipsis on a canvas with hundreds of free pixels.
     Neither the title nor the description has a max-width, and that IS the
     intended end state (2026-08-03 decision) — the clipping was never a cap,
     it was this line missing. */
  flex: 1;
  min-width: 0;
`,c=e.h2`
  margin: 0;
  color: ${({theme:e})=>`var(--text-2, ${e.colors.text.primary})`};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize[`2xl`]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,l=e.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>`var(--text-3, ${e.colors.text.tertiary})`};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,u=e.div`
  display: flex;
  min-width: 0;
  border-bottom: 1px solid ${({theme:e})=>`var(--border, ${e.colors.border.default})`};
`,d=e.div`
  flex-shrink: 0;
  padding: 0;
  background: transparent;
`,f=e.div`
  display: flex;
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
`,p=e.div`
  margin: 0 0 ${({theme:e})=>e.spacing[1]};
  color: ${({theme:e})=>`var(--text-3, ${e.colors.text.tertiary})`};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-style: italic;

  strong {
    color: ${({theme:e})=>`var(--text-2, ${e.colors.text.secondary})`};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    font-style: normal;
  }
`;e.p`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>`var(--text-3, ${e.colors.text.tertiary})`};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`;var m=e.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  text-align: center;
`,h=e.h2`
  margin: 0 0 8px;
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,g=e.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;export{p as a,l as c,u as d,c as f,n as h,h as i,o as l,d as m,g as n,a as o,f as p,m as r,r as s,i as t,s as u};