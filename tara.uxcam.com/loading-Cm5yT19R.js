import"./rolldown-runtime-C5Y2Ol-c.js";import{$r as e}from"./icons-vendor-C23rQ2ix.js";import{D as t,E as n}from"./ui-vendor-CUROeZIN.js";import{O as r}from"./markdown-vendor-BoH6QLuc.js";import{i,t as a}from"./animations-D6JAIVtz.js";import"./Shimmer-BQNKs0BP.js";e();var o=r(),s=({isStale:e,children:t,className:n})=>(0,o.jsxs)(c,{className:n,children:[e&&(0,o.jsx)(l,{role:`progressbar`,"aria-label":`Loading new data`}),(0,o.jsx)(u,{$isStale:e,children:t})]}),c=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  min-width: 0;
  overflow: hidden;
`,l=t.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 10;
  overflow: hidden;
  border-radius: 1px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 25%,
      ${({theme:e})=>e.colors.uxcam.indigo[400]} 50%,
      transparent 75%
    );
    background-size: 400% 100%;
    animation: ${i} ${a} ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
      background: ${({theme:e})=>e.colors.uxcam.indigo[400]};
    }
  }
`,u=t.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  transition: opacity 200ms ease;

  ${({$isStale:e})=>e&&n`
      opacity: 0.55;
      pointer-events: auto;
    `}
`;export{s as t};