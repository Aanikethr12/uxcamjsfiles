import"./rolldown-runtime-C5Y2Ol-c.js";import{$r as e}from"./icons-vendor-C23rQ2ix.js";import{D as t}from"./ui-vendor-CUROeZIN.js";import{O as n}from"./markdown-vendor-BoH6QLuc.js";import{t as r}from"./ScreenSearchInput-CUwxO0qG.js";e();var i=n(),a=({query:e,onQueryChange:t,searchInputRef:n,ariaLabel:a=`Screens list filters`,showSearch:l=!0,filterControls:u,searchPlaceholder:d,searchAriaLabel:f})=>(0,i.jsxs)(o,{role:`navigation`,"aria-label":a,$showSearch:l,$hasFilterControls:!!u,children:[u?(0,i.jsx)(c,{children:u}):null,l?(0,i.jsx)(s,{children:(0,i.jsx)(r,{query:e,onQueryChange:t,inputRef:n,placeholder:d,compactPlaceholder:`Search`,ariaLabel:f,variant:`compact`})}):null]}),o=t.div`
  display: grid;
  grid-template-columns: ${({$showSearch:e,$hasFilterControls:t})=>e&&t?`minmax(0, 1fr) auto`:e?`auto`:t?`minmax(0, 1fr)`:`auto`};
  align-items: center;
  justify-content: ${({$hasFilterControls:e})=>e?`stretch`:`end`};
  column-gap: ${({theme:e})=>e.spacing[3]};
  row-gap: ${({theme:e})=>e.spacing[2]};
  padding: 12px 0;
  width: 100%;
  min-width: 0;

  @media (max-width: 840px) {
    grid-template-columns: ${({$showSearch:e,$hasFilterControls:t})=>e&&t?`minmax(0, 1fr) auto`:e?`auto`:t?`minmax(0, 1fr)`:`auto`};
  }
`,s=t.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 0;
  justify-self: end;
`,c=t.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 0;
  max-width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  justify-self: stretch;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 840px) {
    justify-self: start;
    width: 100%;
  }
`;export{a as t};