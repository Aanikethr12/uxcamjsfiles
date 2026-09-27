import"./rolldown-runtime-C5Y2Ol-c.js";import{$r as e}from"./icons-vendor-C23rQ2ix.js";import{D as t}from"./ui-vendor-CUROeZIN.js";import{O as n}from"./markdown-vendor-BoH6QLuc.js";import{i as r,t as i}from"./animations-D6JAIVtz.js";e();var a=n(),o={card:{height:`80px`},block:{height:`200px`}},s=t.div`
  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};
  border-radius: ${({theme:e,$radius:t})=>t??e.borderRadius.lg};
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.background.sunken} 25%,
    ${({theme:e})=>e.colors.background.hover} 50%,
    ${({theme:e})=>e.colors.background.sunken} 75%
  );
  background-size: 400% 100%;
  animation: ${r} ${i} ease-in-out infinite;
  animation-delay: ${({$delay:e})=>e}ms;
  border: 1px solid ${({theme:e})=>e.colors.border.subtle};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: ${({theme:e})=>e.colors.background.sunken};
  }
`,c=({variant:e=`block`,width:t=`100%`,height:n,index:r=0,radius:i,className:c})=>(0,a.jsx)(s,{$height:n??o[e].height,$width:t,$delay:r*60,$radius:i,className:c,role:`status`,"aria-label":`Loading`});export{c as t};