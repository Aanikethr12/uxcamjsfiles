import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$ as t,$r as n,K as r,Pt as i,Qr as a,o,rt as s,vn as c,vr as l,wt as u,yr as d,z as f}from"./icons-vendor-C23rQ2ix.js";import{Ht as p,Vt as ee,Xt as m,Zt as h,_ as te,ct as ne,en as g,lt as re,m as ie,p as ae,x as _,zt as v}from"./ds-BJhQ4zht.js";import{D as y,T as b,k as oe}from"./ui-vendor-CUROeZIN.js";import{X as se,rt as ce,tt as le}from"./ImpersonationContext-BG2GELh-.js";import{O as x}from"./markdown-vendor-BoH6QLuc.js";import{$t as S,At as C,B as w,Dt as T,Ft as E,In as ue,It as D,Lt as O,Mt as k,Nt as A,Ot as j,Qt as de,Z as fe,an as pe,en as me,jt as M,kt as he,nn as ge,tn as _e}from"./PrimaryNav-CxHD5Sf1.js";import{bt as ve,n as ye}from"./NavigationContext-DTwRip-h.js";import{i as N}from"./animations-D6JAIVtz.js";import{u as P}from"./Dialog-BFakgPRd.js";import{c as be}from"./recordingHealthApi-D07JTYvO.js";import{Ht as xe,Qr as Se,Yr as F,gn as I,nn as L,rn as R,tn as z,yn as B}from"./TaraChatContext-Ne5fUqNv.js";import{t as V}from"./Shimmer-BQNKs0BP.js";import"./loading-Cm5yT19R.js";import"./useDebounce-D9SbeORx.js";import{r as Ce}from"./sessions-BaaP9LMe.js";import{t as we}from"./TaraBrandMark-B2v8yjXU.js";import{f as Te}from"./TaraResponseLoader-CEuS7CVQ.js";import"./renderers-Be0x-EFc.js";import{t as Ee}from"./ColumnContextMenu-C-bNxflw.js";import{t as De}from"./EntityNotesBubble-BdM_DTM1.js";import{t as Oe}from"./ColumnPickerPopover-C6Ww2ABB.js";import{c as ke,i as Ae,l as H,o as je,r as Me,s as Ne,t as Pe}from"./ExplorerTablePrimitives-CLtc3-ZU.js";import"./JoinedStrip-SqDmUFdP.js";import{a as Fe,c as Ie,i as Le,n as Re,o as ze,r as Be,s as Ve,t as U}from"./RecordingsTablePrimitives-BlPmYmYd.js";import{d as He}from"./ExplorerPageLayout-D9JZdkDJ.js";import{a as Ue,i as W}from"./explorerPageHeaderChrome-D9k3ke0p.js";import{n as We,t as Ge}from"./ExplorerDetailLayout-Ckzcpy27.js";var G=e(n(),1),K=x();y.div`
  display: grid;
  grid-template-columns: repeat(${5}, 1fr);
  gap: 16px;

  @media (max-width: 1400px) {
    gap: 12px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,y.div`
  position: relative;
  min-width: 0;
`,y.div`
  border: 1px solid var(--border, #e4e4e7);
  border-radius: 8px;
  padding: 20px;
  background: linear-gradient(to top, transparent, rgba(244, 244, 245, 0.2));
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  overflow: hidden;
  height: 100%;

  @media (max-width: 1400px) {
    padding: 16px;
  }

  @media (max-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0;
    align-items: baseline;
  }
`,y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1440px) {
    display: contents;
  }
`,y.span`
  font-size: 14px;
  font-weight: 400;
  color: var(--muted-foreground, #71717a);
  display: inline-flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    color: var(--muted-foreground, #71717a);
  }

  @media (max-width: 1440px) {
    width: 100%;
    order: 1;
  }
`,y.div`
  font-family: 'Inter', sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: var(--foreground, #09090b);
  font-variant-numeric: tabular-nums;
  line-height: 1.2;
  margin: 4px 0;

  @media (max-width: 1400px) {
    font-size: 24px;
  }

  @media (max-width: 1440px) {
    font-size: 24px;
    order: 2;
    margin: 4px 10px 4px 0;
  }
`,y.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: 4px;

  @media (max-width: 1440px) {
    width: 100%;
    order: 4;
  }
`,y.span`
  font-size: 13px;
  color: #a1a1aa;
  line-height: 1.75;
`,y.span`
  font-size: 13px;
  font-weight: 500;
  color: var(--foreground, #09090b);
`,y.span`
  font-weight: 400;
`,y.span`
  font-size: 13px;
  font-weight: 400;
  color: #a1a1aa;
`,y.div`
  position: relative;
`,y.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.default};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  white-space: nowrap;
  border: 1px solid ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[300]:e.colors.border.default};
  background: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[50]:e.colors.background.surface};
  color: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[700]:e.colors.text.primary};

  &:hover {
    border-color: ${({theme:e})=>e.colors.border.strong};
    background: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[100]:e.colors.background.hover};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.uxcam.indigo[100]};
  }
`,y.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,y.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,y.span`
  display: flex;
  align-items: center;
  transition: transform 150ms ease;
  transform: ${({$open:e})=>e?`rotate(180deg)`:`rotate(0)`};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,y.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 50;
  min-width: 140px;
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>e.shadows.md};
  padding: 4px;
  overflow: hidden;
`,y.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px 10px;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: ${({theme:e,$selected:t})=>t?e.colors.uxcam.indigo[50]:`transparent`};
  color: ${({theme:e,$selected:t})=>t?e.colors.uxcam.indigo[700]:e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e,$selected:t})=>t?e.typography.fontWeight.semibold:e.typography.fontWeight.normal};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  text-align: left;

  &:hover {
    background: ${({theme:e,$selected:t})=>t?e.colors.uxcam.indigo[100]:e.colors.background.hover};
  }
`;var Ke=3,qe=G.memo(({categories:e,selectedCategory:t,onCategoryClick:n})=>{let[r,i]=(0,G.useState)(!1),a=(0,G.useRef)(null),o=(0,G.useMemo)(()=>[...e].sort((e,t)=>e.name===`Other`?1:t.name===`Other`?-1:t.total_count-e.total_count),[e]),s=o.slice(0,Ke),c=o.slice(Ke);(0,G.useEffect)(()=>{if(!r)return;let e=e=>{a.current&&!a.current.contains(e.target)&&i(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[r]);let l=(0,G.useCallback)(e=>{n(e),i(!1)},[n]);if(o.length===0)return null;let u=c.some(e=>e.name===t);return(0,K.jsxs)(Je,{children:[(0,K.jsx)(Ye,{$active:t===null,onClick:()=>{t!==null&&n(t)},children:`All`}),s.map(e=>(0,K.jsxs)(Ye,{$active:t===e.name,onClick:()=>l(e.name),children:[e.name,(0,K.jsx)(Xe,{children:e.event_count})]},e.name)),c.length>0&&(0,K.jsxs)(Ze,{ref:a,children:[(0,K.jsxs)(Ye,{$active:u,onClick:()=>i(e=>!e),children:[u?t:`+${c.length} more`,(0,K.jsx)(Qe,{$open:r,children:(0,K.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,K.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})})]}),r&&(0,K.jsx)(q,{children:c.map(e=>(0,K.jsxs)($e,{$active:t===e.name,onClick:()=>l(e.name),children:[(0,K.jsx)(et,{children:e.name}),(0,K.jsx)(tt,{children:e.event_count})]},e.name))})]})]})});qe.displayName=`CategoryFilter`;var Je=y.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: nowrap;
  min-width: 0;
`,Ye=y.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e,$active:t})=>t?e.typography.fontWeight.semibold:e.typography.fontWeight.medium};
  color: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[700]:e.colors.text.secondary};
  background: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[50]:e.colors.background.surface};
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[300]:e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    border-color: ${({theme:e})=>e.colors.uxcam.indigo[300]};
    color: ${({theme:e})=>e.colors.uxcam.indigo[700]};
  }
`,Xe=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,Ze=y.div`
  position: relative;
`,Qe=y.span`
  display: flex;
  align-items: center;
  transition: transform 0.15s ease;
  transform: ${({$open:e})=>e?`rotate(180deg)`:`rotate(0)`};
`,q=y.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 20;
  min-width: 180px;
  max-height: 240px;
  overflow-y: auto;
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.elevation.medium.shadow};
  padding: 4px 0;
`,$e=y.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 6px 12px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e,$active:t})=>t?e.typography.fontWeight.semibold:e.typography.fontWeight.medium};
  color: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[700]:e.colors.text.primary};
  background: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[50]:`transparent`};
  border: none;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  text-align: left;

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
  }
`,et=y.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,tt=y.span`
  flex-shrink: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  margin-left: 8px;
`;y.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  padding: 0 20px;
  flex-wrap: wrap;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,y.span`
  width: 1px;
  height: 18px;
  flex-shrink: 0;
  background: ${({theme:e})=>e.colors.border.default};
`,y.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 200px;
  padding: 5px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.default};
  border: 1px solid
    ${({theme:e,$focused:t})=>t?e.colors.uxcam.indigo[300]:e.colors.border.default};
  background: ${({theme:e})=>e.colors.background.surface};
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.border.strong};
  }
`,y.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.text.tertiary};
`,y.input`
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.primary};

  &::placeholder {
    color: ${({theme:e})=>e.colors.text.tertiary};
  }
`,y.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  padding: 0;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: ${({theme:e})=>e.colors.background.sunken};
  color: ${({theme:e})=>e.colors.text.tertiary};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`;var nt=new Set([`rageTap`,`UI Freeze`,`crash`,`ANR`,`unresponsive_gesture`]);function J(e,t){let n=t?.get(e);if(n?.sentiment)return n.sentiment;if(nt.has(e))return`negative`;let r=e.toLowerCase();return r.includes(`crash`)||r.includes(`error`)||r.includes(`fail`)?`negative`:`neutral`}function Y(e,t){return J(e,t)===`negative`}var rt=({name:e,onClick:t,isPinned:n,onTogglePin:r,description:i,notesAppId:a=null,noteCount:o,noteContextSnapshot:s,onAskTaraAboutEvent:c})=>{let l=t=>{t.preventDefault(),t.stopPropagation(),c?.(e)},d=e=>{(e.key===`Enter`||e.key===` `)&&e.stopPropagation()};return(0,K.jsxs)(X,{$clickable:!!t,onClick:t,children:[(0,K.jsx)(it,{title:i||e,children:e}),(0,K.jsxs)(at,{children:[c&&!a?(0,K.jsx)(ot,{type:`button`,"data-event-row-action":!0,onClick:l,onKeyDown:d,"aria-label":`Ask Tara about ${e}`,title:`Ask Tara about ${e}`,children:(0,K.jsx)(we,{size:14,tone:`mono`})}):null,r&&(0,K.jsx)(lt,{"data-event-row-action":!0,$visible:n??!1,children:(0,K.jsx)(_,{entityName:e,isPinned:n??!1,onToggle:r})}),a?(0,K.jsx)(ct,{$hasNotes:(o??0)>0,children:(0,K.jsx)(De,{appId:a,entityType:`event`,entityId:e,entityLabel:e,contextSnapshot:s,count:o,portal:!0,renderTrigger:({onClick:t,openComposer:n,expanded:r,count:i})=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(ot,{type:`button`,"data-event-row-action":!0,onClick:e=>{e.preventDefault(),e.stopPropagation(),n(`@tara `)},onKeyDown:d,"aria-label":`Ask Tara about ${e}`,title:`Ask Tara about ${e}`,children:(0,K.jsx)(we,{size:14,tone:`mono`})}),(0,K.jsx)(st,{type:`button`,"data-event-row-action":!0,onClick:e=>{e.preventDefault(),e.stopPropagation(),t()},"aria-label":`Discussion about ${e}${i>0?`, ${i} notes`:``}`,"aria-expanded":r,"aria-haspopup":`dialog`,children:(0,K.jsx)(u,{size:14,"aria-hidden":!0})})]})})}):null]})]})},X=y.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  width: 100%;
  cursor: ${({$clickable:e})=>e?`pointer`:`inherit`};
`,it=y.span`
  min-width: 0;
  flex: 1;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 13px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: var(--foreground);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,at=y.span`
  display: inline-flex;
  width: 104px;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  justify-content: flex-end;
`,ot=y.button`
  display: inline-flex;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--background);
  color: var(--foreground);
  cursor: pointer;
  padding: 0;
  opacity: 0;
  pointer-events: none;
  transition: color 120ms ease, background 120ms ease, border-color 120ms ease, opacity 120ms ease;

  tr:hover &,
  tr:focus-within &,
  ${X}:hover &,
  ${X}:focus-within &,
  &:focus-visible {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover,
  &:focus-visible {
    border-color: var(--foreground);
    background: var(--foreground);
    color: var(--background);
    outline: none;
  }
`,st=y(ot)`
  color: var(--muted-foreground);
`,ct=y.span`
  position: relative;
  z-index: 30;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  opacity: ${({$hasNotes:e})=>+!!e};
  pointer-events: ${({$hasNotes:e})=>e?`auto`:`none`};
  transition: opacity 120ms ease;

  ${X}:hover &,
  &:focus-within {
    opacity: 1;
    pointer-events: auto;
  }
`,lt=y.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  opacity: ${({$visible:e})=>+!!e};
  pointer-events: ${({$visible:e})=>e?`auto`:`none`};
  transition: opacity 120ms ease;

  tr:hover &,
  tr:focus-within &,
  ${X}:hover &,
  ${X}:focus-within & {
    opacity: 1;
    pointer-events: auto;
  }

  [data-pin-toggle] {
    opacity: 1;
  }
`;y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`;var ut=.5,dt=.1;function ft(e,t=!1,n=ut){return Math.abs(e)<n?`gray`:e>0===t?`red`:`green`}function pt(e,t=ut){return Math.abs(e)<t?`0.0%`:`${e>0?`+`:``}${e.toFixed(1)}%`}var mt=G.memo(({value:e,deltaPct:t,previousValue:n,invertSentiment:r=!1,metricLensValue:i,metricLensFormat:a,showDelta:o=!1})=>{let s=i!=null,c=s?a?a(i):O(i):O(e);return(0,K.jsxs)(gt,{title:s?i.toLocaleString():e.toLocaleString(),children:[(0,K.jsx)(_t,{children:c}),o&&!s&&(0,K.jsx)(ht,{deltaPct:t,previousValue:n,invertSentiment:r})]})});mt.displayName=`CompoundCountCell`;var ht=G.memo(({deltaPct:e,previousValue:t,invertSentiment:n=!1})=>e==null?(0,K.jsx)(yt,{children:`NEW`}):(0,K.jsx)(vt,{$color:ft(e,n),$bold:Math.abs(e)>20,title:t==null?void 0:`Previous: ${t.toLocaleString()}`,children:pt(e)}));ht.displayName=`DeltaLine`;var gt=y.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
`,_t=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 13px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  line-height: 1.2;
`,vt=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e,$bold:t})=>t?e.typography.fontWeight.semibold:e.typography.fontWeight.normal};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  line-height: 1.2;
  color: ${({theme:e,$color:t})=>{switch(t){case`green`:return e.colors.severity.good.icon;case`red`:return e.colors.severity.critical.icon;default:return e.colors.text.tertiary}}};
`,yt=y.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 9px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.metrics.rate[700]};
  background: ${({theme:e})=>e.colors.metrics.rate[50]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  padding: 1px 5px;
  line-height: 1.3;
`;y.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  min-width: 0;
  width: 100%;
`,y.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  min-width: 0;
  width: 100%;
  overflow: hidden;
  background: transparent;
`,y.div`
  flex: 1;
  min-height: 0;
  padding: 0;
`,y.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  min-width: 720px;
  margin: 0 0 8px;

  thead th {
    height: 24px;
    border-bottom: 0;
    background: transparent;
    ${Me}
    text-transform: uppercase;
    text-align: left;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    z-index: 1;
  }
`,y.th`
  position: relative;
  text-align: ${({$align:e})=>e===`right`?`right`:`left`};
`,y.div`
  display: inline-flex;
  align-items: center;
  justify-content: ${({$align:e})=>e===`right`?`flex-end`:`flex-start`};
  height: 100%;
  min-height: 24px;
  width: 100%;
  min-width: 0;
  gap: 2px;
  padding: 0 12px;
`,y.span`
  ${Me}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,y.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  border: 0;
  background: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  text-align: inherit;
  cursor: pointer;
  white-space: nowrap;

  &:hover,
  &:focus-visible {
    color: ${({theme:e})=>e.colors.text.secondary};
  }

  &[data-active='true'] {
    color: ${({theme:e})=>e.colors.text.secondary};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  }

  > span:first-child {
    ${Me}
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > .sort-indicator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--muted-foreground);
    transition: transform 80ms ease;
    flex-shrink: 0;
  }

  > .sort-indicator[data-direction='asc'] {
    transform: rotate(180deg);
  }
`,y.th`
  padding: 0;
  background: transparent;
  box-shadow: none;
`,y.div`
  ${ke}
  flex: 1;
  overflow: hidden;
`,y.div`
  ${Ae}
`,y.table`
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0 ${2}px;
  width: 100%;
  min-width: 720px;

  tbody td {
    border-top: 0;
    border-bottom: 0;
    color: var(--foreground);
    font-family: ${({theme:e})=>e.typography.fontFamily.sans};
    font-size: 13px;
    font-variant-numeric: tabular-nums;
  }

  tbody tr:last-child td {
    border-bottom: 0;
  }
`,y.td`
  position: sticky;
  right: 0;
  z-index: 6;
  padding: 0 12px;
  height: ${48}px;
  text-align: right;
  vertical-align: middle;
  background: ${({theme:e})=>e.colors.background.surface};
  box-shadow: none;

  button {
    max-width: 100%;
  }
`,y.tr`
  height: 28px;
`,y.td`
  padding: 8px 12px 6px;
  background: transparent !important;
  box-shadow: none !important;
  ${H}
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  color: inherit;
`,y.div`
  padding: 28px 16px;
  text-align: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,y.tr`
  position: relative;
  cursor: pointer;
  transition: background-color 150ms ease;

  td {
    background: ${je};
  }

  td:first-child {
    border-top-left-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
    border-bottom-left-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
  }

  td:last-child {
    border-top-right-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
    border-bottom-right-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
  }

  &:hover td {
    background: ${Ne};
  }

  &:hover [data-pin-toggle] {
    opacity: 1;
  }

  &:hover [data-event-row-action],
  &:focus-within [data-event-row-action] {
    opacity: 1;
    pointer-events: auto;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: -2px;
  }
`,y.td`
  min-width: 0;
  padding: 0 12px;
  height: ${48}px;
  vertical-align: middle;
  text-align: ${({$align:e})=>e===`right`?`right`:`left`};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 13px;
  font-variant-numeric: tabular-nums;

  > * {
    justify-content: ${({$align:e})=>e===`right`?`flex-end`:`flex-start`};
  }
`,y.tr`
  td {
    background: ${je};
  }

  td:first-child {
    border-top-left-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
    border-bottom-left-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
  }

  td:last-child {
    border-top-right-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
    border-bottom-right-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
  }
`,y.td`
  padding: 0 12px;
  height: ${48}px;
  text-align: ${({$align:e})=>e===`right`?`right`:`left`};
  vertical-align: middle;
`,y(y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 13px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`)`
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,y.div`
  ${Pe}
`,y.div`
  display: flex;
  flex: 1;
  min-height: 320px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  text-align: center;
`,y.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.display};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0 0 8px;
`,y.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
  margin: 0;
  max-width: 360px;
`,y.div`
  color: ${({theme:e})=>e.colors.text.tertiary};
  margin-bottom: 16px;
  opacity: 0.5;
`;var bt=y.div`
  display: inline-block;
  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e??`14px`};
  border-radius: ${({theme:e,$radius:t})=>t??e.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.background.sunken} 25%,
    ${({theme:e})=>e.colors.background.hover} 50%,
    ${({theme:e})=>e.colors.background.sunken} 75%
  );
  background-size: 400% 100%;
  animation: ${N} 1.8s infinite ease-in-out;
  vertical-align: middle;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: ${({theme:e})=>e.colors.background.sunken};
  }
`;function xt(e){return e>50?`high`:e>=10?`mid`:`low`}var St=G.memo(({value:e,penDeltaPct:t,isEnrichmentLoading:n,invertSentiment:r=!1})=>n?(0,K.jsxs)(wt,{children:[(0,K.jsx)(bt,{$width:`44px`}),(0,K.jsx)(bt,{$width:`36px`})]}):e==null?(0,K.jsx)(wt,{children:(0,K.jsx)(Dt,{children:`—`})}):(0,K.jsxs)(wt,{children:[(0,K.jsxs)(Tt,{$tier:xt(e),children:[e.toFixed(1),`%`]}),(0,K.jsx)(Ct,{penDeltaPct:t,invertSentiment:r})]}));St.displayName=`PenetrationCell`;var Ct=G.memo(({penDeltaPct:e,invertSentiment:t=!1})=>e==null?(0,K.jsx)(Et,{$color:`gray`,children:`—`}):(0,K.jsx)(Et,{$color:ft(e,t),$bold:Math.abs(e)>20,children:pt(e)}));Ct.displayName=`PenetrationDeltaLine`;var wt=y.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-height: 32px;
  justify-content: center;
`,Tt=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 13px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  line-height: 1.2;
  color: ${({theme:e,$tier:t})=>{switch(t){case`high`:return e.colors.text.primary;case`mid`:return e.colors.text.secondary;case`low`:return e.colors.text.tertiary}}};
`,Et=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e,$bold:t})=>t?e.typography.fontWeight.semibold:e.typography.fontWeight.normal};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  line-height: 1.2;
  color: ${({theme:e,$color:t})=>{switch(t){case`green`:return e.colors.severity.good.icon;case`red`:return e.colors.severity.critical.icon;default:return e.colors.text.tertiary}}};
`,Dt=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.tertiary};
  line-height: 1.2;
`;function Ot(e,t,n=!1){if(e==null)return{text:``,deltaColor:null};let r=`${e.toFixed(1)}% conv`;t!=null&&Math.abs(t)>=.1&&(r+=` ${t>0?`↑`:`↓`}${Math.abs(t).toFixed(1)}%`);let i=t!=null&&Math.abs(t)>=.1?ft(t,n,dt):null;return{text:r,deltaColor:i}}var kt=G.memo(({screenName:e,conversionPct:t,convDeltaPct:n,isEnrichmentLoading:r,invertSentiment:i=!1})=>{if(r)return(0,K.jsxs)(At,{children:[(0,K.jsx)(bt,{$width:`100px`}),(0,K.jsx)(bt,{$width:`60px`})]});if(e==null)return(0,K.jsx)(At,{children:(0,K.jsx)(Nt,{children:`—`})});let a=Ot(t,n,i);return(0,K.jsxs)(At,{children:[(0,K.jsx)(jt,{title:e,children:e}),a.text&&(0,K.jsx)(Mt,{$deltaColor:a.deltaColor,children:a.text})]})});kt.displayName=`ScreenContextCell`;var At=y.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-height: 32px;
  justify-content: center;
  overflow: hidden;
`,jt=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 13px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
`,Mt=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
  white-space: nowrap;
  line-height: 1.2;
  color: ${({theme:e,$deltaColor:t})=>{switch(t){case`green`:return e.colors.severity.good.icon;case`red`:return e.colors.severity.critical.icon;default:return e.colors.text.tertiary}}};
`,Nt=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.tertiary};
  line-height: 1.2;
`,Pt=({sessionid:e,userSessionRun:t,userProperty:n})=>{let{name:r}=Te(n);return(0,K.jsxs)(Ft,{children:[(0,K.jsxs)(It,{title:`Session ID: ${e}`,children:[E(t),` session`]}),(0,K.jsx)(Lt,{title:r,children:r})]})},Ft=y.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,It=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Lt=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Rt=({screen:e})=>(0,K.jsx)(zt,{title:e,children:e||`—`}),zt=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Bt=()=>(0,K.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,K.jsx)(`path`,{d:`M3 7.5c0-1.93 1.57-3.5 3.5-3.5S10 5.57 10 7.5V11a.5.5 0 01-.5.5h-6A.5.5 0 013 11V7.5Z`}),(0,K.jsx)(`circle`,{cx:`5`,cy:`8.5`,r:`.55`,fill:`currentColor`,stroke:`none`}),(0,K.jsx)(`circle`,{cx:`8`,cy:`8.5`,r:`.55`,fill:`currentColor`,stroke:`none`}),(0,K.jsx)(`path`,{d:`M5 4L4 2`}),(0,K.jsx)(`path`,{d:`M8 4L9 2`})]}),Vt=()=>(0,K.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 13 13`,fill:`currentColor`,"aria-hidden":`true`,children:[(0,K.jsx)(`path`,{d:`M8.6 1.5c0 1.1-.8 2-1.9 2h-.3c.1-1.1 1-2 2.2-2z`}),(0,K.jsx)(`path`,{d:`M10 6.5C9.5 5.3 8.5 4.7 7.5 4.7c-.7 0-1.1.3-1.5.3-.4 0-.9-.3-1.5-.3-1.3 0-2.5 1.3-2.5 3.4 0 2.1 1.5 4.4 2.5 4.4.5 0 .9-.3 1.4-.3.5 0 .9.3 1.4.3 1.1 0 2-1.4 2.4-2.5C10.3 9.7 9 9 9 7.7c0-.5.4-1 .7-1.2z`})]}),Ht=()=>(0,K.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,"aria-hidden":`true`,children:[(0,K.jsx)(`circle`,{cx:`6.5`,cy:`6.5`,r:`5`}),(0,K.jsx)(`path`,{d:`M6.5 1.5c-1.5 2-1.5 7 0 10M6.5 1.5c1.5 2 1.5 7 0 10`}),(0,K.jsx)(`path`,{d:`M1.5 6.5h10`})]}),Ut=()=>(0,K.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,K.jsx)(`rect`,{x:`3.5`,y:`1`,width:`6`,height:`11`,rx:`1.5`}),(0,K.jsx)(`circle`,{cx:`6.5`,cy:`10`,r:`.55`,fill:`currentColor`,stroke:`none`})]}),Wt={android:(0,K.jsx)(Bt,{}),ios:(0,K.jsx)(Vt,{}),web:(0,K.jsx)(Ht,{})},Gt=({platform:e,deviceModel:t})=>(0,K.jsxs)(Kt,{children:[(0,K.jsx)(qt,{children:Wt[he[e]||`web`]??(0,K.jsx)(Ut,{})}),(0,K.jsx)(Jt,{title:t,children:t||`—`})]}),Kt=y.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
`,qt=y.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.text.secondary};
`,Jt=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Yt=({city:e,country:t})=>{let n=e||t||`—`,r=e&&t?t:``;return(0,K.jsxs)(Xt,{children:[(0,K.jsx)(Zt,{children:n}),r&&(0,K.jsx)(Qt,{children:r})]})},Xt=y.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`,Zt=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Qt=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$t=({properties:e})=>{let[t,n]=(0,G.useState)(!1),r=(0,G.useRef)(null),i=Object.entries(e||{}),a=i.length;return a===0?(0,K.jsx)(nn,{children:`\\u2014`}):(0,K.jsxs)(en,{ref:r,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[(0,K.jsxs)(tn,{children:[a,` `,a===1?`property`:`properties`]}),t&&(0,K.jsxs)(rn,{children:[i.slice(0,10).map(([e,t])=>(0,K.jsxs)(an,{children:[(0,K.jsxs)(on,{children:[e,`:`]}),(0,K.jsx)(sn,{children:String(t)})]},e)),i.length>10&&(0,K.jsxs)(cn,{children:[`+`,i.length-10,` more`]})]})]})},en=y.div`
  position: relative;
  display: inline-flex;
`,tn=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.link};
  cursor: default;
`,nn=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,rn=y.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  z-index: ${({theme:e})=>e.zIndex.tooltip};
  min-width: 200px;
  max-width: 320px;
  padding: 8px 12px;
  background: ${({theme:e})=>e.glass.background};
  backdrop-filter: ${({theme:e})=>e.glass.backdropFilter};
  border: ${({theme:e})=>e.glass.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>e.glass.shadow};
`,an=y.div`
  display: flex;
  gap: 6px;
  padding: 2px 0;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  line-height: 1.4;
`,on=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  color: ${({theme:e})=>e.colors.text.tertiary};
  flex-shrink: 0;
`,sn=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  color: ${({theme:e})=>e.colors.text.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,cn=y.div`
  padding-top: 4px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-style: italic;
`,ln=({dateStr:e})=>e?(0,K.jsx)(un,{title:C(e),children:D(e)}):(0,K.jsx)(un,{children:`\\u2014`}),un=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  white-space: nowrap;
`,dn=({eventPropertyTime:e,sessionDuration:t,trackedon:n})=>{let r=M(e),i=M(t),a=t>0?Math.min(100,Math.round(e/t*100)):0;return(0,K.jsxs)(fn,{title:[`Event at ${r} of ${i} session (${a}%)`,C(n)].join(`
`),children:[(0,K.jsxs)(pn,{children:[(0,K.jsx)(mn,{"aria-hidden":`true`,children:(0,K.jsxs)(`svg`,{width:`11`,height:`11`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,K.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,K.jsx)(`polyline`,{points:`12 6 12 12 16 14`})]})}),(0,K.jsx)(hn,{children:r}),(0,K.jsx)(gn,{children:`/`}),(0,K.jsx)(_n,{children:i})]}),(0,K.jsxs)(vn,{children:[(0,K.jsxs)(yn,{children:[(0,K.jsx)(bn,{$pct:a}),(0,K.jsx)(xn,{$pct:a})]}),(0,K.jsxs)(Sn,{children:[a,`%`]})]})]})},fn=y.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  padding: 2px 0;
`,pn=y.div`
  display: flex;
  align-items: center;
  gap: 3px;
  min-width: 0;
`,mn=y.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.metrics.time[500]};
`,hn=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  white-space: nowrap;
`,gn=y.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,_n=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  white-space: nowrap;
`,vn=y.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,yn=y.div`
  position: relative;
  flex: 1;
  height: 3px;
  background: ${({theme:e})=>e.colors.border.subtle};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  overflow: visible;
`,bn=y.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({$pct:e})=>e}%;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: ${({theme:e})=>e.colors.metrics.time[400]};
  transition: width 0.3s ease-out;
`,xn=y.div`
  position: absolute;
  top: 50%;
  left: ${({$pct:e})=>e}%;
  transform: translate(-50%, -50%);
  width: 7px;
  height: 7px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: ${({theme:e})=>e.colors.metrics.time[500]};
  border: 1.5px solid ${({theme:e})=>e.colors.background.surface};
  box-shadow: 0 0 0 1px ${({theme:e})=>e.colors.metrics.time[300]};
  transition: left 0.3s ease-out;
`,Sn=y.span`
  flex-shrink: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.tertiary};
  min-width: 28px;
  text-align: right;
`,Cn=1.5;function wn(e,t=80,n=24,r=Cn){let i=e.length===1?[e[0],e[0]]:e,a=r/2,o=n-r,s=Math.min(...i),c=Math.max(...i)-s,l=t/(i.length-1);return i.map((e,t)=>{let n=a+(1-(c===0?.5:(e-s)/c))*o;return`${(t*l).toFixed(2)},${n.toFixed(2)}`}).join(` `)}var Tn=G.memo(({trend:e,dateLabel:t})=>{let[n,r]=(0,G.useState)(!1),i=(0,G.useRef)(null),a=oe();if(!e||e.length===0)return(0,K.jsx)(Dn,{children:`--`});let o=e[e.length-1]>=e[0],s=e.reduce((e,t)=>e+t,0),c=t?`Daily event count, ${t} (${e.length}d) \u00b7 Total: ${s.toLocaleString()}`:`Daily event count, last ${e.length} days \u00b7 Total: ${s.toLocaleString()}`;return(0,K.jsxs)(En,{ref:i,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,K.jsx)(`svg`,{width:80,height:24,viewBox:`0 0 80 24`,role:`img`,"aria-label":`${c} \u00b7 trending ${o?`up`:`down`}`,children:(0,K.jsx)(`polyline`,{points:wn(e),fill:`none`,stroke:o?a.colors.severity.good.icon:a.colors.severity.critical.icon,strokeWidth:Cn,strokeLinecap:`round`,strokeLinejoin:`round`})}),n&&(0,K.jsx)(On,{children:c})]})});Tn.displayName=`SparklineCell`;var En=y.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,Dn=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.tertiary};
`,On=y.div`
  position: absolute;
  bottom: calc(100% + 6px);
  right: 0;
  z-index: 30;
  padding: 6px 10px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  box-shadow: ${({theme:e})=>e.elevation.medium.shadow};
  white-space: nowrap;
  pointer-events: none;
`,kn=G.memo(({deltaPct:e,previousCount:t})=>e===null?(0,K.jsx)(Mn,{children:`NEW`}):(0,K.jsxs)(An,{$color:e>0?`green`:e<0?`red`:`gray`,$bold:Math.abs(e)>20,title:t===void 0?void 0:`Previous: ${t.toLocaleString()}`,children:[e>0&&(0,K.jsx)(jn,{children:`↑`}),e<0&&(0,K.jsx)(jn,{children:`↓`}),e>0?`+`:``,e.toFixed(1),`%`]}));kn.displayName=`DeltaCell`;var An=y.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 13px;
  font-weight: ${({theme:e,$bold:t})=>t?e.typography.fontWeight.bold:e.typography.fontWeight.medium};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({theme:e,$color:t})=>{switch(t){case`green`:return e.colors.severity.good.icon;case`red`:return e.colors.severity.critical.icon;default:return e.colors.text.tertiary}}};
`,jn=y.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  line-height: 1;
`,Mn=y.span`
  display: inline-flex;
  align-items: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.metrics.rate[700]};
  background: ${({theme:e})=>e.colors.metrics.rate[50]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  padding: 1px 6px;
`,Nn={core:`Core`,enrichment:`Enrichment`,derived:`Derived Metrics`,metadata:`Metadata`},Pn=[`core`,`enrichment`,`derived`,`metadata`],Fn=[{id:`event_name`,label:`Event`,headerLabel:`Event`,tooltip:`Event type name and kind badge`,symbol:`E`,group:`core`,isDefault:!0,isSortable:!0,sortKey:`event_name`,defaultSortOrder:`asc`,defaultSortHint:`(A-Z)`,width:`380px`,accessor:e=>e.event_name,entityType:`event`},{id:`signals`,label:`Changes`,headerLabel:`Changes`,tooltip:`Largest event metric changes compared with the active baseline.`,symbol:`CH`,group:`enrichment`,isDefault:!0,isSortable:!1,width:`flex`,accessor:e=>e.badges?.length?e.badges.join(`, `):`Stable`,requiresEnrichment:!0},{id:`unique_users`,label:`Users`,headerLabel:`Users`,tooltip:`Number of unique users who triggered this event`,symbol:`U`,group:`core`,isDefault:!0,isSortable:!0,sortKey:`unique_users`,defaultSortOrder:`desc`,width:`100px`,accessor:e=>O(e.unique_users),entityType:`user`},{id:`unique_sessions`,label:`Sessions`,headerLabel:`Sess`,tooltip:`Number of unique sessions containing this event`,symbol:`S`,group:`core`,isDefault:!1,isSortable:!0,sortKey:`unique_sessions`,defaultSortOrder:`desc`,defaultSortHint:`(most first)`,width:`100px`,accessor:e=>O(e.unique_sessions),entityType:`session`},{id:`count`,label:`Count`,headerLabel:`Count`,tooltip:`Total event count with period-over-period delta`,symbol:`#`,group:`core`,isDefault:!0,isSortable:!0,sortKey:`count`,defaultSortOrder:`desc`,defaultSortHint:`(most first)`,width:`120px`,accessor:e=>O(e.count),requiresEnrichment:!0},{id:`session_penetration_pct`,label:`Reach`,headerLabel:`Reach`,tooltip:`Percentage of sessions in which this event occurred`,symbol:`P%`,group:`enrichment`,isDefault:!1,isSortable:!0,sortKey:`session_penetration_pct`,defaultSortOrder:`desc`,defaultSortHint:`(highest first)`,width:`110px`,accessor:e=>e.session_penetration_pct==null?`—`:`${e.session_penetration_pct.toFixed(1)}%`,requiresEnrichment:!0},{id:`primary_screen`,label:`Top Screen`,headerLabel:`Screen`,tooltip:`Screen where this event fires most, with conversion rate`,symbol:`Scr`,group:`enrichment`,isDefault:!1,isSortable:!1,width:`180px`,accessor:e=>e.primary_screen_name??`—`,requiresEnrichment:!0,entityType:`screen`},{id:`trend`,label:`Trend`,headerLabel:`Trend`,tooltip:`Sparkline showing event count trend over the date range`,symbol:`~`,group:`enrichment`,isDefault:!1,isSortable:!1,width:`80px`,accessor:()=>``,requiresEnrichment:!0},{id:`delta_pct`,label:`Delta`,headerLabel:`Delta`,tooltip:`Period-over-period percentage change in event count (standalone)`,symbol:`Δ`,group:`enrichment`,isDefault:!1,isSortable:!0,sortKey:`delta_pct`,defaultSortOrder:`desc`,defaultSortHint:`(biggest change first)`,width:`80px`,accessor:e=>e.delta_pct==null?`—`:`${e.delta_pct>0?`+`:``}${e.delta_pct.toFixed(1)}%`,requiresEnrichment:!0},{id:`events_per_user`,label:`Events/User`,headerLabel:`E/U`,tooltip:`Average number of times each user triggered this event`,symbol:`E/U`,group:`derived`,isDefault:!1,isSortable:!0,sortKey:`events_per_user`,defaultSortOrder:`desc`,defaultSortHint:`(highest first)`,width:`100px`,accessor:e=>e.events_per_user==null?`—`:e.events_per_user.toFixed(1),requiresEnrichment:!0},{id:`events_per_session`,label:`Events/Sess`,headerLabel:`E/S`,tooltip:`Average number of times this event fires per session`,symbol:`E/S`,group:`derived`,isDefault:!1,isSortable:!0,sortKey:`events_per_session`,defaultSortOrder:`desc`,defaultSortHint:`(highest first)`,width:`100px`,accessor:e=>e.events_per_session==null?`—`:e.events_per_session.toFixed(1),requiresEnrichment:!0},{id:`category`,label:`Category`,headerLabel:`Cat`,tooltip:`Event category (coded or smart event classification)`,symbol:`C`,group:`metadata`,isDefault:!1,isSortable:!0,sortKey:`category`,defaultSortOrder:`asc`,defaultSortHint:`(A-Z)`,width:`120px`,accessor:e=>e.category||`—`}],In=Object.fromEntries(Fn.map(e=>[e.id,e])),Ln=[`event_name`,`unique_users`,`count`,`signals`];Fn.filter(e=>!e.isDefault);var Rn=Fn.filter(e=>e.isSortable);Object.fromEntries(Rn.map(e=>[e.sortKey??e.id,e]));function zn(e){return e.find(e=>In[e]?.width===`flex`)||(e.includes(`event_name`)?`event_name`:null)}var Bn=420,Vn=36,Hn=60,Un=360,Wn=[],Gn=[`event_name`],Kn=new Set(Gn);function qn(e,t){if(e===`count`&&t&&t!==`count`)return j.find(e=>e.value===t)?.label??`Count`;let n=In[e];return n?.headerLabel??n?.label??``}function Jn(e,t){if(!t||t===`count`)return e.count;let n=e[t];return typeof n==`number`?n:e.count}function Yn(e,t){return!t||t===`count`?O(e):t===`session_penetration_pct`?`${e.toFixed(1)}%`:t===`events_per_user`||t===`events_per_session`?e.toFixed(1):O(e)}function Xn(e,t,n=!1){return(n||t?e<0:e>0)?`good`:`warning`}function Zn(e){let t=e.delta>0?`+`:`-`,n=Math.abs(e.delta);return e.format===`duration`?`${t}${M(n)}`:e.format===`number`?`${t}${n.toFixed(1)}`:`${t}${n.toFixed(1)}pp`}function Qn(e,t,n,r){n==null||!Number.isFinite(n)||n===0||Math.abs(n)<r.noiseFloor||e.push({label:t,delta:n,direction:n>0?`up`:`down`,format:r.format,tone:Xn(n,r.invertSentiment,r.lowerIsBetter)})}function $n(e,t){let n=e,r=[];return Qn(r,`Reach`,e.pen_delta_pct,{format:`percentage-point`,noiseFloor:1,invertSentiment:t}),Qn(r,`Per session`,n.events_per_session_delta,{format:`number`,noiseFloor:.2,invertSentiment:t}),Qn(r,`Session time`,n.avg_session_time_to_event_delta_sec,{format:`duration`,noiseFloor:2,invertSentiment:t,lowerIsBetter:!t}),Qn(r,`Screen time`,n.avg_screen_time_to_event_delta_sec??n.avg_time_to_event_delta_sec,{format:`duration`,noiseFloor:2,invertSentiment:t,lowerIsBetter:!t}),r.slice(0,3)}function er(e,t){if(t===`event_name`)return e.event_name;if(t===`category`)return e.category||``;let n=e[t];return typeof n==`number`?n:n==null?-1/0:0}function tr(e,t,n,r){let i=n===`count`&&r&&r!==`count`?r:n,a=er(e,i),o=er(t,i);return i===`event_name`||i===`category`?String(a).localeCompare(String(o)):a===-1/0&&o===-1/0?0:a===-1/0?1:o===-1/0?-1:a-o}function nr(e){return e.id===`event_name`?Un:Hn}function rr(e){return`${e.type}:${e.event_name}`}var ir=({appId:e=null,eventTypes:t,isLoading:n,isFetching:r=!1,isEnriching:i=!1,onEventClick:a,metricLens:o,sort:s,onSortChange:c,visibleColumnIds:l,onToggleColumn:u,onRemoveColumn:d,onReorderColumns:f,resetToDefaults:p,isCustomConfig:ee,searchTerm:m,pinnedNames:h,pinnedOrder:ne,onTogglePin:g,onAskTaraAboutEvent:re,metadataMap:ie})=>{let[_,v]=(0,G.useState)(1),[y,b]=(0,G.useState)(null),[oe,se]=(0,G.useState)(null),ce=(0,G.useRef)(null),[le,x]=(0,G.useState)(!1),S=!!u,C=t.length>0&&t[0].trend!==void 0;(0,G.useEffect)(()=>{v(1)},[s,m,t.length]);let T=(0,G.useMemo)(()=>{let e=new Map((ne??[]).map((e,t)=>[e,t]));return[...h?t.map(e=>({...e,is_pinned:h.has(e.event_name)})):t].sort((t,n)=>{let r=+!!t.is_pinned,i=+!!n.is_pinned;if(r!==i)return i-r;if(t.is_pinned&&n.is_pinned&&e.size>0){let r=e.get(t.event_name)??2**53-1,i=e.get(n.event_name)??2**53-1;if(r!==i)return r-i}let a=tr(t,n,s.sort_by,o);return s.sort_order===`asc`?a:-a})},[t,o,h,ne,s]),E=Math.ceil(T.length/25),D=(0,G.useMemo)(()=>{let e=(_-1)*25;return T.slice(e,e+25)},[_,T]),{pinnedRows:k,unpinnedRows:A}=(0,G.useMemo)(()=>{let e=[],t=[];for(let n of D)n.is_pinned?e.push(n):t.push(n);return{pinnedRows:e,unpinnedRows:t}},[D]),j=k.length>0,de=fe(e,(0,G.useMemo)(()=>[...k,...A],[k,A]).map(e=>({entityType:`event`,entityId:e.event_name}))).data??{},pe=(0,G.useCallback)((t,n)=>{let r=Y(n.event_name,ie),a=i&&t.requiresEnrichment&&!C;switch(t.id){case`event_name`:{let t=ie?.get(n.event_name);return(0,K.jsx)(rt,{name:n.event_name,type:n.type,category:n.category,isPinned:n.is_pinned,onTogglePin:g,description:t?.description,notesAppId:e,noteCount:de[w(`event`,n.event_name)]??0,noteContextSnapshot:{surface:`events_table`,event_type:n.type,count:n.count,unique_users:n.unique_users,unique_sessions:n.unique_sessions},onAskTaraAboutEvent:re})}case`signals`:{if(a)return(0,K.jsx)(fr,{width:`140px`,height:`16px`,radius:`4px`});let e=$n(n,r);return e.length===0?(0,K.jsx)(xr,{"aria-hidden":`true`}):(0,K.jsxs)(Sr,{"aria-label":`Changes for ${n.event_name}`,children:[e.slice(0,2).map(e=>(0,K.jsxs)(Cr,{$tone:e.tone,children:[(0,K.jsx)(wr,{"aria-hidden":`true`,children:e.direction===`down`?`▾`:`▴`}),(0,K.jsx)(Tr,{children:e.label}),(0,K.jsx)(Er,{children:Zn(e)})]},`${e.label}-${e.delta}`)),e.length>2?(0,K.jsxs)(Dr,{children:[`+`,e.length-2,` more`]}):null]})}case`count`:if(a)return(0,K.jsx)(mt,{value:n.count,deltaPct:void 0,invertSentiment:r});if(o&&o!==`count`){let e=Jn(n,o);return(0,K.jsx)(mt,{value:n.count,deltaPct:n.delta_pct,previousValue:n.previous_count,invertSentiment:r,metricLensValue:e,metricLensFormat:e=>Yn(e,o)})}return(0,K.jsx)(mt,{value:n.count,deltaPct:n.delta_pct,previousValue:n.previous_count,invertSentiment:r});case`unique_sessions`:return(0,K.jsx)(yr,{children:O(n.unique_sessions)});case`unique_users`:return(0,K.jsx)(yr,{children:O(n.unique_users)});case`session_penetration_pct`:return(0,K.jsx)(St,{value:n.session_penetration_pct,penDeltaPct:n.pen_delta_pct,isEnrichmentLoading:a,invertSentiment:r});case`primary_screen`:return(0,K.jsx)(kt,{screenName:n.primary_screen_name,conversionPct:n.screen_conversion_pct,convDeltaPct:n.conv_delta_pct,isEnrichmentLoading:a,invertSentiment:r});case`trend`:return a?(0,K.jsx)(fr,{width:`64px`,height:`16px`,radius:`4px`}):(0,K.jsx)(Tn,{trend:n.trend??[]});case`delta_pct`:return a?(0,K.jsx)(fr,{width:`48px`,height:`16px`,radius:`4px`}):(0,K.jsx)(kn,{deltaPct:n.delta_pct??null,previousCount:n.previous_count??0});case`events_per_user`:case`events_per_session`:return a?(0,K.jsx)(fr,{width:`44px`,height:`16px`,radius:`4px`}):(0,K.jsx)(br,{children:t.accessor(n)});case`category`:return(0,K.jsx)(br,{children:n.category||`—`});default:return(0,K.jsx)(br,{children:t.accessor(n)})}},[e,C,i,ie,o,de,re,g]),me=(0,G.useMemo)(()=>l.map(e=>In[e]).filter(e=>!!e).map(e=>({...e,label:qn(e.id,o),align:`left`,renderCell:t=>pe(e,t)})),[o,pe,l]),M=me,he=(0,G.useMemo)(()=>Object.fromEntries(M.map(e=>[e.id,e])),[M]),ge=(0,G.useMemo)(()=>Ve(M,{hasAddColumnSlot:S,hasLeadingRowActions:!0,leadingRowActionsColumnWidth:Vn,flexColumnWidthPx:Bn}),[S,M]),_e=(0,G.useCallback)(()=>{u&&x(e=>!e)},[u]),ve=(0,G.useCallback)((e,t)=>{let n=l.indexOf(e),r=l.indexOf(t);n>=0&&r>=0&&f(n,r)},[f,l]),ye=(0,G.useCallback)((e,t)=>{b(e),se(t)},[]),N=(0,G.useCallback)(()=>{b(null),se(null)},[]),P=(0,G.useMemo)(()=>y?l.indexOf(y):-1,[y,l]),be=y?Kn.has(y):!1,xe=!be&&P>Gn.length,Se=!be&&P>=0&&P<l.length-1,F=y?In[y]:null,I=me.length+1+(S?2:0),L=r&&!n,R=(0,G.useMemo)(()=>te({pageIndex:_-1,pageSize:25,currentItemCount:D.length,totalItems:T.length,itemLabel:`events`,variant:`directory`,supportsJump:!0}),[_,25,D.length,T.length]),z=()=>Array.from({length:8}).map((e,t)=>(0,K.jsxs)(ur,{children:[(0,K.jsx)(dr,{"data-column-id":`__row_actions__`,children:(0,K.jsx)(fr,{width:`24px`,height:`24px`,radius:`6px`,index:t})}),me.map(e=>(0,K.jsx)(dr,{children:(0,K.jsx)(fr,{width:e.id===`event_name`?`70%`:`60%`,height:`16px`,radius:`4px`,index:t})},e.id)),S?(0,K.jsx)(dr,{"aria-hidden":`true`}):null,S?(0,K.jsx)(dr,{"aria-hidden":`true`}):null]},t)),B=e=>(0,K.jsx)(Re,{row:e,columns:M,renderCell:(e,t)=>t.renderCell?.(e),onClick:()=>a(e.event_name),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),a(e.event_name))},tabIndex:0,hasLeadingRowActions:!0,leadingRowActions:(0,K.jsx)(`span`,{className:`flex items-center justify-center`,children:(0,K.jsx)(vr,{title:`Event`,"aria-hidden":`true`,children:(0,K.jsx)(ue,{})})}),hasAddColumnSlot:S,pinnedColumnIds:Wn},rr(e));return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(ar,{"aria-busy":n||L,children:[L?(0,K.jsx)(sr,{role:`progressbar`,"aria-label":`Loading updated events`}):null,(0,K.jsx)(ze,{children:(0,K.jsx)(Fe,{children:(0,K.jsxs)(or,{style:{minWidth:`${ge}px`},children:[S?(0,K.jsx)(Ce,{onClick:_e,buttonRef:ce}):null,(0,K.jsxs)(Le,{style:{minWidth:`${ge}px`,...Ie(he,Wn,void 0,{flexColumnWidthPx:Bn})},children:[(0,K.jsx)(U,{columns:M,hasAddColumnSlot:S,hasLeadingRowActions:!0,leadingRowActionsColumnWidth:Vn,flexColumnWidthPx:Bn}),(0,K.jsx)(`thead`,{children:(0,K.jsx)(Be,{columns:M,sortState:s,onSortChange:c,onReorder:ve,hasLeadingRowActions:!0,pinnedColumnIds:Wn,lockedColumnIds:Gn,flexColumnWidthPx:Bn,onAddColumnClick:S?_e:void 0,minWidthForColumn:nr,onHeaderContextMenu:(e,t,n)=>{n.preventDefault(),ye(e,t)}})}),(0,K.jsxs)(`tbody`,{children:[!n&&j?(0,K.jsx)(cr,{children:(0,K.jsxs)(lr,{colSpan:I,children:[`Watching · `,k.length]})}):null,n?null:k.map(B),!n&&j&&A.length>0?(0,K.jsx)(cr,{children:(0,K.jsxs)(lr,{colSpan:I,children:[`All events · `,A.length]})}):null,n?null:A.map(B),n?z():null]})]}),!n&&T.length===0?(0,K.jsxs)(mr,{children:[(0,K.jsx)(hr,{"aria-hidden":`true`,children:(0,K.jsx)(ue,{})}),(0,K.jsx)(gr,{children:m?`No events match your search`:`No events found`}),(0,K.jsx)(_r,{children:m?`No results for "${m}". Try adjusting your search or filters.`:`Events will appear here once your app starts sending them.`})]}):null]})})})]}),E>1&&!n?(0,K.jsx)(pr,{children:(0,K.jsx)(ae,{model:R,onPageChange:v,onJumpToPage:v})}):null,F&&oe?(0,K.jsx)(Ee,{column:F,anchorEl:oe,sort:s,isLastColumn:l.length<=1,hasRemovedDefaults:ee,onSortChange:c,onHideColumn:d,canMoveLeft:xe,canMoveRight:Se,onMoveLeft:()=>f(P,P-1),onMoveRight:()=>f(P,P+1),onResetToDefaults:p,onClose:N}):null,u?(0,K.jsx)(Oe,{visibleColumnIds:l,onToggleColumn:u,isOpen:le,onClose:()=>x(!1),anchorRef:ce,columns:Fn,groupLabels:Nn,groupOrder:Pn,onResetToDefaults:p,onReorderColumns:f,pinnedColumnIds:Gn}):null]})},ar=y.div`
  position: relative;
  display: flex;
  flex: 1;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
  overflow: auto;
  border: 1px solid ${({theme:e})=>`var(--border, ${e.colors.border.default})`};
  border-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
  background: ${({theme:e})=>`var(--background, ${e.colors.background.surface})`};
  scrollbar-gutter: stable;
`,or=y.div`
  position: relative;
`,sr=y.div`
  ${Ae}
`,cr=y.tr`
  td {
    height: 36px;
    background: var(--background) !important;
    border-top: 1px solid var(--border) !important;
    border-bottom: 1px solid var(--border) !important;
  }
`,lr=y.td`
  padding: 0 16px;
  box-shadow: none !important;
  color: var(--muted-foreground);
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 12px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0;
  line-height: 1;
  text-transform: uppercase;
`,ur=y.tr`
  td {
    background: ${je};
  }
`,dr=y.td`
  vertical-align: middle;
`,fr=y(V)``,pr=y.div`
  ${Pe}
`,mr=y.div`
  position: sticky;
  left: 0;
  display: flex;
  min-height: 320px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 48px 24px;
  text-align: center;
  background: var(--background);
`,hr=y.div`
  color: ${({theme:e})=>e.colors.text.tertiary};
  opacity: 0.75;

  svg {
    width: 20px;
    height: 20px;
  }
`,gr=y.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.display};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
`,_r=y.p`
  margin: 0;
  max-width: 360px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,vr=y.span`
  position: relative;
  display: inline-flex;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--muted);
  color: var(--muted-foreground);

  svg {
    width: 14px;
    height: 14px;
  }
`,yr=y.span`
  font-variant-numeric: tabular-nums;
`,br=y.span`
  display: inline-block;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,xr=y.span`
  display: inline-block;
  width: 12px;
  color: ${({theme:e})=>e.colors.text.tertiary};

  &::before {
    content: "\\2014";
  }
`,Sr=y.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
`,Cr=y.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  max-width: 156px;
  height: 24px;
  padding: 0 8px;
  border-radius: 6px;
  font-size: 12px;
  line-height: 1;
  color: ${({$tone:e})=>e===`good`?`var(--color-success-700, #15803d)`:e===`critical`?`var(--color-danger-700, #b91c1c)`:e===`warning`?`var(--color-warning-700, #b45309)`:`var(--muted-foreground)`};
  background: ${({$tone:e})=>e===`good`?`var(--color-success-50, #f0fdf4)`:e===`critical`?`var(--color-danger-50, #fef2f2)`:e===`warning`?`var(--color-warning-50, #fff7ed)`:`var(--muted)`};
`,wr=y.span`
  flex-shrink: 0;
  font-size: 10px;
`,Tr=y.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Er=y.span`
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,Dr=y.span`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,Or={adoption:{metrics:[`unique_users`,`event_count`],phrase:`Unique users and events`},frequency:{metrics:[`event_count`,`unique_users`],phrase:`Events and unique users`},volume:{metrics:[`event_count`,`unique_users`],phrase:`Events and unique users`}};function kr(e){return`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`}function Ar(e=new Date){let t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=new Date(t);return n.setMonth(n.getMonth()-6),{from:kr(n),to:kr(t)}}function jr(e,t){let n=Or[t],r=Ar(),i=[{attribute:`event_name`,operator:`eq`,value:e,table:`event`}];return{_schema_version:1,table:`event`,metric:n.metrics[0],metrics:[...n.metrics],groupby:[`week_local`],filters:i,date_range:{mode:`fixed`,from:r.from,to:r.to},visualization:`line`}}function Mr(e,t,n){return e.trim()?{kind:`builder`,appId:t,title:`${Or[n].phrase} for ${e} per week`,source:`event_insights_metric_trend`,toolName:`query_metrics`,initialConfig:jr(e,n),initialPreview:null,initialSettingsMode:`hidden`}:null}var Nr=1.25,Pr={events:[`--color-chart-1`,L[`--color-chart-1`]],users:[`--color-chart-3`,L[`--color-chart-3`]],retention:[`--color-chart-4`,L[`--color-chart-4`]],dataLabel:[`--foreground`,L[`--foreground`]],axisLabel:[`--chart-axis-label`,L[`--chart-axis-label`]],axisLine:[`--chart-axis-line`,L[`--chart-axis-line`]],gridLine:[`--chart-grid-line`,L[`--chart-grid-line`]],legendLabel:[`--chart-legend-label`,L[`--chart-legend-label`]]},Fr=R(null,Pr),Ir=e=>R(e,Pr);function Lr(e){return{animationDuration:I.animation.durationMs,animationEasing:I.animation.easing,textStyle:{fontSize:11},tooltip:{trigger:`axis`,confine:!0,axisPointer:{type:`line`,lineStyle:{color:e.axisLine}}}}}function Rr(e){let{rows:t,palette:n=Fr,formatXAxisLabel:r,formatAxisValue:i,formatValue:a}=e,o=t.length<=20,s=(e,n,r)=>({name:e,type:`line`,smooth:!1,symbol:`circle`,symbolSize:6,showSymbol:o,color:n,itemStyle:{color:n},lineStyle:{color:n,width:2},data:t.map(r)});return{...Lr(n),tooltip:{...Lr(n).tooltip,valueFormatter:e=>a(Number(e??0))},grid:{...I.grid,top:30,right:24},legend:{type:`scroll`,top:0,right:0,icon:`roundRect`,itemWidth:12,itemHeight:8,textStyle:{color:n.legendLabel,fontSize:F.legend.size}},xAxis:{type:`category`,boundaryGap:!1,data:t.map(e=>r(e.day_local)),axisTick:{show:!1},axisLine:{lineStyle:{color:n.axisLine}},axisLabel:{color:n.axisLabel,fontSize:F.axisTick.size,hideOverlap:!0}},yAxis:{type:`value`,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:n.axisLabel,fontSize:F.axisTick.size,formatter:e=>i(e)},splitLine:{lineStyle:{color:n.gridLine}}},series:[s(`Events`,n.events,e=>e.events),s(`Unique users`,n.users,e=>e.users)]}}function zr(e){let t=Math.max(...e.map(e=>e.retention),1);return Math.ceil(t*Nr/5)*5}function Br(e){let{points:t,palette:n=Fr}=e;return{...Lr(n),tooltip:{...Lr(n).tooltip,valueFormatter:e=>`${Number(e??0)}%`},grid:{...I.grid,top:28,right:28},xAxis:{type:`category`,boundaryGap:!1,data:t.map(e=>e.label),axisTick:{show:!1},axisLine:{lineStyle:{color:n.axisLine}},axisLabel:{color:n.axisLabel,fontSize:F.axisTick.size}},yAxis:{type:`value`,min:0,max:zr(t),axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:n.axisLabel,fontSize:F.axisTick.size,formatter:e=>`${e}%`},splitLine:{lineStyle:{color:n.gridLine}}},series:[{name:`Returned`,type:`line`,smooth:!1,symbol:`circle`,symbolSize:10,showSymbol:!0,color:n.retention,itemStyle:{color:n.retention},lineStyle:{color:n.retention,width:2.5},label:{show:!0,position:`top`,distance:10,color:n.dataLabel,fontSize:F.legend.size,fontWeight:600,formatter:e=>`${Number(e.value??0)}%`},data:t.map(e=>e.retention)}]}}var Vr={0:`Week 0`,1:`1 week`,2:`2 weeks`,3:`3 weeks`,4:`1 month`};function Hr(e,t){if(!e&&!t)return[];let n=new Map,r=new Map;return e?.data.categories.forEach((t,r)=>{n.set(t,e.data.series[0]?.data[r]??0)}),t?.data.categories.forEach((e,n)=>{r.set(e,t.data.series[0]?.data[n]??0)}),Array.from(new Set([...n.keys(),...r.keys()])).sort().map(e=>({day_local:e,events:n.get(e)??0,users:r.get(e)??0}))}function Ur(e){let t=e?.cohorts??[];if(t.length===0)return{points:[],completeCohortCount:0};let n=(e?.retention_periods??4)+1,r=[];for(let e=0;e<n;e+=1){let n=t.slice(0,Math.max(0,t.length-e)).map(t=>t.periods?.[e]).filter(e=>typeof e==`number`&&Number.isFinite(e));if(n.length===0)continue;let i=n.reduce((e,t)=>e+t,0)/n.length;r.push({period:e,label:Vr[e]??`Week ${e}`,retention:Math.round(i*10)/10})}return{points:r,completeCohortCount:Math.max(0,t.length-(n-1))}}var Wr=y.p`
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
  color: var(--muted-foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  line-height: 1.5;
`,Gr=y.span`
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: var(--color-accent-50);
  color: var(--color-accent-600);
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`;function Kr({rows:e}){let t=(0,G.useRef)(null),n=z(t,Ir,Fr,e.length>0);return(0,K.jsx)(Qr,{ref:t,children:(0,K.jsx)(B,{option:(0,G.useMemo)(()=>Rr({rows:e,palette:n,formatXAxisLabel:e=>ce(e,`day_local`),formatAxisValue:se,formatValue:e=>le(e)}),[n,e]),height:`100%`,minHeight:`0`})})}function qr({points:e}){let t=(0,G.useRef)(null),n=z(t,Ir,Fr,e.length>0);return(0,K.jsx)(Qr,{ref:t,children:(0,K.jsx)(B,{option:(0,G.useMemo)(()=>Br({points:e,palette:n}),[n,e]),height:`100%`,minHeight:`0`})})}var Jr=({volumeData:e,uniqueUsersData:t,retentionData:n,volumeLoading:r,uniqueUsersLoading:i,retentionLoading:a,onOpenVolumeTrend:o})=>{let s=(0,G.useMemo)(()=>Hr(e,t),[e,t]),{points:c,completeCohortCount:u}=(0,G.useMemo)(()=>Ur(n),[n]),d=r||i,f=n?.summary,p=(0,K.jsxs)(Se,{title:(0,K.jsx)($r,{children:`Event Volume & Adoption`}),subtitle:`Total events vs unique users over time`,titleActions:o?(0,K.jsxs)(Zr,{"aria-hidden":`true`,children:[(0,K.jsx)(l,{size:13}),`Weekly trend`]}):null,framed:!0,children:[(0,K.jsx)(Wr,{children:`Both lines share one scale, so the vertical gap shows how many events each user fires.`}),d?(0,K.jsx)(V,{variant:`block`,height:`300px`}):s.length>0?(0,K.jsx)(Kr,{rows:s}):(0,K.jsx)(ei,{children:`No data for this period`})]});return(0,K.jsxs)(Yr,{children:[o?(0,K.jsx)(Xr,{type:`button`,onClick:o,"aria-label":`Open weekly events and unique users trend in the report builder`,children:p}):p,(0,K.jsxs)(Se,{title:(0,K.jsx)($r,{children:`Event Retention`}),subtitle:`% of users who return to trigger this event again`,titleActions:f&&f.retention_rate>0?(0,K.jsxs)(Gr,{children:[f.period_label,`: `,f.retention_rate.toFixed(1),`%`]}):null,framed:!0,children:[(0,K.jsxs)(Wr,{children:[`Average share of first-time users who trigger this event again over time`,u>0?`, based on ${u} complete ${u===1?`cohort`:`cohorts`}.`:`.`]}),a?(0,K.jsx)(V,{variant:`block`,height:`300px`}):c.length>0?(0,K.jsx)(qr,{points:c}):(0,K.jsx)(ei,{children:`Not enough data for retention analysis`})]})]})},Yr=y.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,Xr=y.button`
  display: block;
  width: 100%;
  min-width: 0;
  padding: 0;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.borderRadius.lg};

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.border.focus};
  }

  &:hover [data-framed='true'] {
    border-color: var(--color-accent-600);
  }
`,Zr=y.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--color-accent-600);
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,Qr=y.div`
  position: relative;
  width: 100%;
  min-width: 0;
  height: 300px;
`,$r=y.span`
  color: var(--foreground);
  font-size: 15px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,ei=y.div`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted-foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;function ti(e){let t=e.platform===3,n=[];t?(e.browserName&&n.push({label:`Browser`,value:e.browserName}),e.browserVersion&&n.push({label:`Browser Version`,value:e.browserVersion}),e.deviceOsName&&n.push({label:`OS`,value:e.deviceOsName}),e.deviceType&&n.push({label:`Device Type`,value:e.deviceType})):e.deviceModel&&n.push({label:`Device type`,value:e.deviceModel}),e.osVersion&&n.push({label:`OS version`,value:e.osVersion}),e.appVersion&&n.push({label:`App version`,value:e.appVersion});let r=e.userProperty?.kUXCam_UserIdentity;r&&n.push({label:`User ID`,value:r});let i=e.userProperty?.uxcamuserid;return i&&n.push({label:`UXCam user id`,value:i}),n.push({label:`Event Number`,value:e.id}),n}function ni(e,t){let n=[];e.city&&n.push({label:`City`,value:e.city}),e.country&&n.push({label:`Country`,value:e.country}),e.deviceLocalDateTime&&n.push({label:`Local Time`,value:A(e.deviceLocalDateTime)}),e.screen&&n.push({label:`Screen`,value:e.screen});let r=t?`https://app.uxcam.com/app/${t}/aisessions/list/1/${e.sessionid}`:void 0;n.push({label:`Session ID`,value:e.sessionid,isLink:!!r,href:r}),n.push({label:`Time In Session`,value:k(e.eventPropertyTime,e.sessionDuration)}),n.push({label:`Session Duration`,value:M(e.sessionDuration)}),n.push({label:`Session Number`,value:`${E(e.userSessionRun)} session of user`});let i=ve[e.platform];return i&&n.push({label:`Platform`,value:i}),n}function ri(e){return Object.entries(e||{}).filter(([,e])=>e!=null).map(([e,t])=>({label:e,value:typeof t==`object`?JSON.stringify(t):String(t)}))}function ii(e){if(!e)return[];let t=new Set([`kUXCam_UserIdentity`,`uxcamuserid`]);return Object.entries(e).filter(([e,n])=>!t.has(e)&&n!=null).map(([e,t])=>({label:e,value:typeof t==`object`?JSON.stringify(t):String(t)}))}var ai=({event:e,appId:t})=>{let n=ti(e),r=ni(e,t),i=ri(e.property),a=ii(e.userProperty);return(0,K.jsxs)(oi,{children:[(0,K.jsxs)(si,{children:[(0,K.jsx)(ci,{children:`User / Device`}),(0,K.jsx)(li,{children:n.map(e=>(0,K.jsxs)(ui,{children:[(0,K.jsx)(di,{children:e.label}),(0,K.jsx)(fi,{children:e.value})]},e.label))})]}),(0,K.jsxs)(si,{children:[(0,K.jsx)(ci,{children:`Session`}),(0,K.jsx)(li,{children:r.map(e=>(0,K.jsxs)(ui,{children:[(0,K.jsx)(di,{children:e.label}),e.isLink&&e.href?(0,K.jsx)(pi,{href:e.href,target:`_blank`,rel:`noopener noreferrer`,children:e.value}):(0,K.jsx)(fi,{children:e.value})]},e.label))})]}),(0,K.jsxs)(si,{children:[(0,K.jsx)(ci,{children:`Event Properties`}),i.length===0?(0,K.jsx)(mi,{children:`No event properties`}):(0,K.jsx)(li,{children:i.map(e=>(0,K.jsxs)(ui,{children:[(0,K.jsx)(di,{children:e.label}),(0,K.jsx)(fi,{children:e.value})]},e.label))})]}),(0,K.jsxs)(si,{children:[(0,K.jsx)(ci,{children:`User Properties`}),a.length===0?(0,K.jsx)(mi,{children:`No custom user properties`}):(0,K.jsx)(li,{children:a.map(e=>(0,K.jsxs)(ui,{children:[(0,K.jsx)(di,{children:e.label}),(0,K.jsx)(fi,{children:e.value})]},e.label))})]})]})},oi=y.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px 20px;
  background: ${({theme:e})=>e.colors.background.sunken};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
  border-left: 3px solid ${({theme:e})=>e.colors.uxcam.indigo[300]};
  box-shadow: ${({theme:e})=>e.shadows.inner};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,si=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ci=y.h4`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0;
  padding-bottom: 4px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.subtle};
`,li=y.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ui=y.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
`,di=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  flex-shrink: 0;
  min-width: 100px;
`,fi=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.primary};
  word-break: break-all;
`,pi=y.a`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.link};
  text-decoration: none;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }
`,mi=y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-style: italic;
`,hi=[{key:`session`,label:`Session`,width:`180px`,sortable:!1},{key:`eventName`,label:`Event`,width:`150px`,sortable:!0,sortKey:`event_name`},{key:`screen`,label:`Screen`,width:`140px`,sortable:!1},{key:`device`,label:`Device`,width:`120px`,sortable:!0,sortKey:`devicemodel`},{key:`location`,label:`Location`,width:`120px`,sortable:!0,sortKey:`city`},{key:`inSession`,label:`In Session`,width:`140px`,sortable:!0,sortKey:`eventPropertyTime`},{key:`time`,label:`Time`,width:`90px`,sortable:!0,sortKey:`trackedon`},{key:`properties`,label:`Properties`,width:`100px`,sortable:!1}],gi=({events:e,pagination:t,sort:n,isLoading:r,onSortChange:i,onPageChange:a,onAnalyze:o,onQuickReplay:s,appId:c})=>{let[l,u]=(0,G.useState)(new Set),d=(0,G.useCallback)(e=>{u(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),f=(0,G.useCallback)(e=>{n.sort_by===e?i({...n,sort_order:n.sort_order===`desc`?`asc`:`desc`}):i({sort_by:e,sort_order:`desc`})},[n,i]),p=(0,G.useMemo)(()=>t?ie(t,e,{variant:`embedded`}):null,[e,t]);return r?(0,K.jsx)(_i,{children:(0,K.jsx)(Di,{children:Array.from({length:10}).map((e,t)=>(0,K.jsx)(V,{variant:`block`,height:`52px`,index:t},t))})}):e.length===0?(0,K.jsx)(_i,{children:(0,K.jsxs)(Oi,{children:[(0,K.jsx)(ki,{children:`No events match your filters`}),(0,K.jsx)(Ai,{children:`Try adjusting the date range or removing some filters.`})]})}):(0,K.jsxs)(_i,{children:[(0,K.jsx)(vi,{children:(0,K.jsxs)(yi,{children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[hi.map(e=>(0,K.jsxs)(bi,{$width:e.width,$sortable:e.sortable,onClick:e.sortable&&e.sortKey?()=>f(e.sortKey):void 0,children:[e.label,e.sortKey&&n.sort_by===e.sortKey&&(0,K.jsx)(xi,{children:n.sort_order===`desc`?`↓`:`↑`})]},e.key)),(0,K.jsx)(bi,{$width:`170px`,$sortable:!1})]})}),(0,K.jsx)(`tbody`,{children:e.map(e=>{let t=l.has(e.id);return(0,K.jsxs)(G.Fragment,{children:[(0,K.jsxs)(Si,{$expanded:t,onClick:()=>d(e.id),children:[(0,K.jsx)(Z,{children:(0,K.jsx)(Pt,{sessionid:e.sessionid,userSessionRun:e.userSessionRun,userProperty:e.userProperty})}),(0,K.jsx)(Z,{children:(0,K.jsx)(rt,{name:e.eventName})}),(0,K.jsx)(Z,{children:(0,K.jsx)(Rt,{screen:e.screen})}),(0,K.jsx)(Z,{children:(0,K.jsx)(Gt,{platform:e.platform,deviceModel:e.deviceModel})}),(0,K.jsx)(Z,{children:(0,K.jsx)(Yt,{city:e.city,country:e.country})}),(0,K.jsx)(Z,{children:(0,K.jsx)(dn,{eventPropertyTime:e.eventPropertyTime,sessionDuration:e.sessionDuration,trackedon:e.trackedon})}),(0,K.jsx)(Z,{children:(0,K.jsx)(ln,{dateStr:e.trackedon})}),(0,K.jsx)(Z,{children:(0,K.jsx)($t,{properties:e.property})}),(0,K.jsx)(Z,{children:(0,K.jsxs)(wi,{children:[(0,K.jsx)(Ti,{onClick:t=>{t.stopPropagation(),o(e)},title:`Analyze this event`,children:`Analyze`}),s&&(0,K.jsx)(Ei,{onClick:t=>{t.stopPropagation(),s(e)},title:`Open session replay overlay`,children:`Replay`})]})})]}),t&&(0,K.jsx)(`tr`,{children:(0,K.jsx)(Ci,{colSpan:hi.length+1,children:(0,K.jsx)(ai,{event:e,appId:c})})})]},e.id)})})]})}),p&&(0,K.jsx)(ae,{model:p,onPageChange:a})]})},_i=y.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,vi=y.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
`,yi=y.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,bi=y.th`
  position: sticky;
  top: 0;
  z-index: 1;
  width: ${({$width:e})=>e};
  padding: 8px 16px;
  font-size: 10.5px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: var(--muted-foreground);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-align: left;
  background: var(--color-surface-sunken);
  border-bottom: 1px solid var(--border);
  cursor: ${({$sortable:e})=>e?`pointer`:`default`};
  user-select: none;
  white-space: nowrap;

  &:hover {
    color: ${({$sortable:e})=>e?`var(--foreground)`:`var(--muted-foreground)`};
  }
`,xi=y.span`
  margin-left: 4px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
`,Si=y.tr`
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  background: ${({$expanded:e})=>e?`var(--color-surface-sunken)`:`transparent`};

  &:hover {
    background: var(--color-surface-sunken);
  }
`,Z=y.td`
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
  color: var(--foreground);
  font-variant-numeric: tabular-nums;
`,Ci=y.td`
  padding: 0;
`,wi=y.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  opacity: 0;
  transition: ${({theme:e})=>e.transitions.fast};

  tr:hover & {
    opacity: 1;
  }
`,Ti=y.button`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: var(--primary);
  background: var(--color-surface-card);
  border: 1px solid var(--border);
  border-radius: ${({theme:e})=>e.borderRadius.default};
  padding: 4px 10px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  white-space: nowrap;

  &:hover {
    background: var(--color-surface-sunken);
    border-color: var(--border);
  }

  &:active {
    transform: translateY(1px);
  }
`,Ei=y(Ti)`
  color: var(--primary);
`,Di=y.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 0 20px;
`,Oi=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  text-align: center;
`,ki=y.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: var(--foreground);
  margin: 0 0 8px;
`,Ai=y.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: var(--muted-foreground);
  margin: 0;
  max-width: 320px;
`,ji=[],Mi=[{id:`behavior`,label:`Behavior`},{id:`outcomes`,label:`Outcomes`},{id:`evidence`,label:`Evidence`}],Ni=[{id:`trend`,label:`Trend`,icon:(0,K.jsx)(d,{"aria-hidden":`true`})},{id:`where`,label:`Where it happens`,icon:(0,K.jsx)(i,{"aria-hidden":`true`})},{id:`sequence`,label:`Sequence`,icon:(0,K.jsx)(r,{"aria-hidden":`true`})}];function Pi(e){let t=new Date(e);return t.setMonth(t.getMonth()-6),t.toISOString().split(`T`)[0]}function Q(e,t=1){return e==null||!Number.isFinite(e)?`--`:`${e.toFixed(t)}%`}function Fi(e,t=`%`){return e==null||!Number.isFinite(e)?null:e===0?`0${t}`:`${e>0?`+`:``}${e.toFixed(+(t===`pp`))}${t}`}function Ii(e){return e==null||e===0?`flat`:e>0?`up`:`down`}function Li(e){return e?.cohorts?.[e.cohorts.length-1]?.cohort_size??null}function Ri(e,t){let n=e?.average_retention?.[t];return typeof n==`number`&&Number.isFinite(n)?n:null}function zi(e){return e.find(e=>e.key===`rf.screen`)?.value}function Bi(e){let t=e.find(e=>e.key.startsWith(`rf.prop.`));return t?{key:t.key.slice(8),value:t.value}:null}function Vi(e,t){let n=e.find(e=>e.key===t);if(!n)return null;let[r,...i]=n.value.split(`:`),a=i.join(`:`);return(r===`event`||r===`screen`)&&a?{kind:r,name:a}:null}function Hi(e){return e==null||e===``?`(empty)`:typeof e==`object`?JSON.stringify(e):String(e)}function Ui(e){return e==null?``:typeof e==`object`?JSON.stringify(e):String(e)}function Wi(e){let t=new Set(e.map(e=>typeof e));if(t.size===1){let[e]=Array.from(t);if(e===`string`||e===`number`||e===`boolean`)return e}return`mixed`}function Gi(e){if(e.length===0)return[];let t=new Map;for(let n of e)for(let[e,r]of Object.entries(n.property??{}))t.has(e)||t.set(e,[]),t.get(e).push(r);return Array.from(t.entries()).map(([t,n])=>{let r=Wi(n),i=new Map,a=n.map(e=>typeof e==`number`?e:Number(e)).filter(e=>Number.isFinite(e));for(let e of n){let t=Hi(e),n=i.get(t);i.set(t,{count:(n?.count??0)+1,filterValue:n?.filterValue??Ui(e)})}let o=Array.from(i.entries()).map(([e,t])=>({value:e,filterValue:t.filterValue,count:t.count,sharePct:n.length>0?t.count/n.length*100:0})).sort((e,t)=>t.count-e.count).slice(0,12),s=a.length>0?{min:Math.min(...a),max:Math.max(...a),average:a.reduce((e,t)=>e+t,0)/a.length}:null;return{key:t,type:r,source:`sampled`,presentCount:n.length,coveragePct:n.length/e.length*100,values:o,numeric:s}}).sort((e,t)=>t.presentCount-e.presentCount||e.key.localeCompare(t.key))}function Ki(e){return e?.length?e.map(e=>({key:e.key,type:e.type,source:`summary`,presentCount:e.present_count,coveragePct:e.coverage_pct,coverageDeltaPp:e.coverage_delta_pp,cardinality:e.cardinality,values:e.values.map(e=>({value:e.value,filterValue:e.filter_value,count:e.count,users:e.users,sharePct:e.share_pct??0,deltaPp:e.delta_pp})),numeric:e.numeric?{min:e.numeric.min,max:e.numeric.max,average:e.numeric.average,median:e.numeric.median,p90:e.numeric.p90}:null})):[]}function qi(e){return e?.find(e=>e.kind===`event`||e.kind===`screen`)??null}function Ji(e){let t=new Set,n=[];for(let r of e){let e=`${r.event.sessionid}:${r.event.eventPropertyTime}`;if(!t.has(e)&&(t.add(e),n.push(r),n.length>=5))break}return n}function Yi(e){if(e.length===0)return[];let t=e[0],n=e.find(e=>e.video),r=e.find(e=>e.crashed||e.totalGesture>=40),i=e.find(e=>Object.keys(e.property??{}).length===0),a=e.find(e=>!e.screen);return Ji([n&&{bucket:`Replayable`,tone:`neutral`,reason:`has session video and opens at the event moment`,event:n},r&&{bucket:r.crashed?`Crashed session`:`High friction`,tone:r.crashed?`critical`:`warning`,reason:r.crashed?`session crashed`:`${r.totalGesture} gestures in session`,event:r},i&&{bucket:`Missing property`,tone:`warning`,reason:`no event payload was captured`,event:i},a&&{bucket:`Missing context`,tone:`warning`,reason:`no screen was attached to this occurrence`,event:a},{bucket:`Latest`,tone:`neutral`,reason:`latest loaded occurrence`,event:t}].filter(Boolean))}var Xi=Object.freeze([]),Zi=({eventType:e,dateRange:n,apiWindow:l,appId:u,platform:d,activeTab:m=`behavior`,evidenceMode:h=`replays`,evidenceModeLocked:te=!1,replayFilters:g=[],onTabChange:ie,onEvidenceModeChange:ae,onApplyReplayFilter:_,onClearReplayFilter:y,onConfigurePath:b,onAnalyzeInstance:oe,onQuickReplay:se,hideTabs:ce=!1,showKpiGrid:le=!0,filters:x=Xi,initialBehaviorLens:C=`trend`,overviewKpis:w=null})=>{let E=xe(),ue=be(),[D,k]=(0,G.useState)(T),[A,j]=(0,G.useState)(1),[fe,he]=(0,G.useState)(m),[ve,ye]=(0,G.useState)(h),[N,Se]=(0,G.useState)(C),[F,I]=(0,G.useState)(null),L=(0,G.useMemo)(()=>zi(g),[g]),R=(0,G.useMemo)(()=>Bi(g),[g]),z=(0,G.useMemo)(()=>Vi(g,`rf.before`),[g]),B=(0,G.useMemo)(()=>Vi(g,`rf.after`),[g]);(0,G.useEffect)(()=>{he(m)},[m]),(0,G.useEffect)(()=>{ye(h)},[h]),(0,G.useEffect)(()=>{Se(C)},[C]);let Ce=(0,G.useMemo)(()=>({...l,event_names:[e.event_name],aggregation:`event_count`,aggregation_operator:`count`,group_by:[{attribute:`event_period_day`,table:`event`,type:`date`,period:86400}]}),[l,e.event_name]),we=(0,G.useMemo)(()=>({...l,event_names:[e.event_name],aggregation:`event_unique_user_count`,aggregation_operator:`count`,group_by:[{attribute:`event_period_day`,table:`event`,type:`date`,period:86400}]}),[l,e.event_name]),{data:Ee,isLoading:De}=de(u,Ce),{data:Oe,isLoading:ke}=de(u,we),Ae=(0,G.useMemo)(()=>Pi(n.date_to),[n.date_to]),{data:H,isLoading:je}=ge(u,e.event_name,{date_from:Ae,date_to:n.date_to,cohort_period:`week`,retention_periods:4}),Me=(0,G.useMemo)(()=>({...l,filters:x}),[l,x]),{data:Ne,isLoading:Pe}=pe(u,e.event_name,Me),Fe=(0,G.useMemo)(()=>({...l,event_type:e.type,platform:d,filters:x}),[l,e.type,d,x]),{data:Ie,isLoading:Le}=me(u,e.event_name,Fe),Re=(0,G.useMemo)(()=>({...l,platform:d,filters:x}),[l,d,x]),{data:ze}=_e(u,e.event_name,Re),{data:Be,isLoading:Ve}=S(u,(0,G.useMemo)(()=>({...l,event_names:[e.event_name],event_type:e.type,platform:d,screen_name:L,event_property_key:R?.key,event_property_value:R?.value,before_event_name:z?.kind===`event`?z.name:void 0,before_screen_name:z?.kind===`screen`?z.name:void 0,after_event_name:B?.kind===`event`?B.name:void 0,after_screen_name:B?.kind===`screen`?B.name:void 0,...D,page:A,per_page:20}),[B?.kind,B?.name,z?.kind,z?.name,l,e.event_name,e.type,A,d,R?.key,R?.value,L,D])),U=Be?.body??ji;(0,G.useEffect)(()=>{j(1)},[B?.kind,B?.name,z?.kind,z?.name,n.date_from,n.date_to,l.relative_date,e.event_name,d,R?.key,R?.value,L]),(0,G.useEffect)(()=>{if(U.length===0){E.clearItems();return}let t=U.map((e,t)=>{let{name:n}=Te(e.userProperty);return{sessionId:e.sessionid,startTime:Number.isFinite(e.eventPropertyTime)?Math.max(0,e.eventPropertyTime):void 0,label:`${t+1} of ${U.length}`,eventName:e.eventName,screen:e.screen,meta:{duration:e.eventPropertyTime,sessionDuration:e.sessionDuration,gestures:e.totalGesture,isCrashed:e.crashed,platform:e.platform,city:e.city,country:e.country,deviceModel:e.deviceModel,userName:n,userSessionRun:e.userSessionRun,recordedOn:e.trackedon,hasVideo:e.video}}});return E.setItems(t,`events`,e.event_name),()=>E.clearItems()},[U,e.event_name]);let He=(0,G.useMemo)(()=>Gi(U),[U]),Ue=(0,G.useMemo)(()=>Ki(ze?.properties),[ze?.properties]),W=Ue.length>0?Ue:He;(0,G.useEffect)(()=>{if(W.length===0){I(null);return}(!F||!W.some(e=>e.key===F))&&I(W[0].key)},[W,F]);let Ge=(0,G.useMemo)(()=>Yi(U),[U]),Ke=(0,G.useMemo)(()=>W.find(e=>e.key===F)??W[0]??null,[W,F]),qe=(0,G.useMemo)(()=>U.filter(e=>e.video).length,[U]),Je=(0,G.useCallback)(e=>{let t=U.findIndex(t=>t.sessionid===e.sessionid&&t.eventPropertyTime===e.eventPropertyTime);t>=0&&E.setCurrentIndex(t),se?.(e)},[U,se,E]),Ye=(0,G.useCallback)(e=>{k(e),j(1)},[]),Xe=(0,G.useCallback)(()=>{if(!ue)return;let t=Mr(e.event_name,u,`volume`);t&&ue.openReportSurface(t)},[u,ue,e.event_name]),Ze=(0,G.useCallback)(e=>{he(e),ie?.(e)},[ie]),Qe=(0,G.useCallback)(e=>{ye(e),ae?.(e)},[ae]),q=Ne?.screens?.[0]??null,$e=q?q.event_count/Math.max(e.count,1)*100:null,et=Li(H),tt=Ri(H,1),nt=Ri(H,4)??Ri(H,3),J=qi(Ie?.before),Y=qi(Ie?.after),rt=Ni.find(e=>e.id===N)??Ni[0],X=te?h:ve;return(0,K.jsxs)(oa,{children:[ce?null:(0,K.jsx)(sa,{children:(0,K.jsx)(v,{value:fe,onValueChange:e=>Ze(e),className:`min-w-0 flex-1`,children:(0,K.jsx)(We,{className:`border-b border-border py-0`,children:(0,K.jsx)(ee,{variant:`underline`,"aria-label":`Event detail sections`,className:`h-auto min-h-9 w-full max-w-none justify-start gap-4 overflow-x-auto overscroll-y-none`,children:Mi.map(e=>(0,K.jsx)(p,{value:e.id,variant:`underline`,id:`event-detail-tab-${e.id}`,className:`shrink-0`,onClick:()=>Ze(e.id),children:e.label},e.id))})})})}),(0,K.jsxs)(ca,{$hideTabs:ce,children:[fe===`behavior`?(0,K.jsxs)(la,{children:[le?(0,K.jsxs)(ua,{children:[(0,K.jsxs)(Qi,{title:`Volume`,subtitle:`How often this event is triggered`,children:[(0,K.jsx)($i,{icon:(0,K.jsx)(t,{"aria-hidden":`true`}),label:`Occurrences`,value:O(e.count),delta:Fi(e.delta_pct)}),(0,K.jsx)($i,{icon:(0,K.jsx)(a,{"aria-hidden":`true`}),label:`Events / user`,value:e.events_per_user==null?`--`:e.events_per_user.toFixed(1)})]}),(0,K.jsxs)(Qi,{title:`Reach`,subtitle:`How broadly users encounter it`,children:[(0,K.jsx)($i,{icon:(0,K.jsx)(o,{"aria-hidden":`true`}),label:`Unique users`,value:O(e.unique_users)}),(0,K.jsx)($i,{icon:(0,K.jsx)(r,{"aria-hidden":`true`}),label:`Session penetration`,value:Q(e.session_penetration_pct),delta:Fi(e.pen_delta_pct,`pp`)})]}),(0,K.jsxs)(Qi,{title:`Context`,subtitle:`Where it appears in the session`,children:[(0,K.jsx)($i,{icon:(0,K.jsx)(i,{"aria-hidden":`true`}),label:`Top screen`,helper:q?.screen||e.primary_screen_name||`No screen context`,value:$e==null?`--`:Q($e,0)}),(0,K.jsx)($i,{icon:(0,K.jsx)(a,{"aria-hidden":`true`}),label:`Median time into session`,helper:`From session start`,value:q?M(q.avg_time_to_event_sec):`--`})]})]}):null,(0,K.jsxs)(_a,{"aria-labelledby":`event-behavior-lens-title`,children:[(0,K.jsxs)(va,{children:[(0,K.jsxs)(ya,{children:[(0,K.jsx)(ba,{children:rt.icon}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(xa,{id:`event-behavior-lens-title`,children:N===`sequence`?`Sequence around event`:rt.label}),(0,K.jsx)(Sa,{children:N===`sequence`?`What typically precedes and follows this event.`:`Current period compared with the previous period where available.`})]})]}),(0,K.jsx)(ne,{type:`single`,value:N,onValueChange:e=>{e&&Se(e)},"aria-label":`Behavior lens`,className:`rounded-lg bg-[color:var(--muted)] p-1`,children:Ni.map(e=>(0,K.jsxs)(re,{value:e.id,"aria-label":e.label,className:`h-8 gap-2 px-3 text-sm [&_svg]:size-4`,children:[e.icon,e.label]},e.id))})]}),(0,K.jsxs)(Ca,{children:[N===`trend`?(0,K.jsx)(Da,{children:(0,K.jsx)(Jr,{volumeData:Ee,uniqueUsersData:Oe,retentionData:H,volumeLoading:De,uniqueUsersLoading:ke,retentionLoading:je,onOpenVolumeTrend:ue?Xe:void 0})}):null,N===`where`?(0,K.jsx)(ea,{screenData:Ne,isLoading:Pe,totalCount:e.count,onApplyReplayFilter:e=>_?.(`rf.screen`,e,`screen: ${e}`,!0)}):null,N===`sequence`?(0,K.jsx)(na,{data:Ie,isLoading:Le,eventName:e.event_name,onApplyReplayFilter:e=>_?.(e.key,e.value,e.label,!0)}):null]})]})]}):null,fe===`outcomes`?(0,K.jsxs)(la,{children:[(0,K.jsxs)(da,{children:[(0,K.jsxs)(fa,{children:[(0,K.jsx)(pa,{children:`Adoption`}),(0,K.jsxs)(no,{children:[w?(0,K.jsx)($,{label:`Adoption rate`,value:Q(w.adoption_pct,w.adoption_pct!=null&&w.adoption_pct>=10?0:1),note:`${O(w.unique_users??0)} of ${O(w.active_users??0)} active users`}):null,(0,K.jsx)($,{label:`New adopters`,value:et==null?`--`:O(et),note:`latest complete retention cohort`})]})]}),(0,K.jsxs)(fa,{children:[(0,K.jsx)(pa,{children:`Return behavior`}),(0,K.jsxs)(no,{children:[(0,K.jsx)($,{label:`1-week repeat`,value:Q(tt),note:`complete-window cohorts`}),(0,K.jsx)($,{label:`1-month repeat`,value:Q(nt),note:`complete-window cohorts`})]})]})]}),(0,K.jsxs)(so,{children:[(0,K.jsxs)(Ta,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(pa,{children:`Conversion paths`}),(0,K.jsx)(ma,{children:`Configure conversion into this event and conversion from this event to another event or screen.`})]}),b?(0,K.jsx)(P,{type:`button`,variant:`outline`,size:`sm`,icon:(0,K.jsx)(f,{"aria-hidden":`true`}),onClick:b,children:`Configure path`}):null]}),(0,K.jsxs)(co,{children:[(0,K.jsxs)(lo,{children:[(0,K.jsx)(uo,{children:`Into this event`}),(0,K.jsx)(fo,{children:J?J.name:`Source event or screen`}),(0,K.jsx)(po,{children:J?`${J.kind} · ${Q(J.share_pct,0)} of occurrences`:`Choose the upstream step that should convert into ${e.event_name}.`}),J?.replay_filter?(0,K.jsx)(P,{type:`button`,variant:`link`,size:`sm`,onClick:()=>_?.(J.replay_filter.key,J.replay_filter.value,J.replay_filter.label,!0),children:`Open matching evidence`}):null]}),(0,K.jsxs)(lo,{children:[(0,K.jsx)(uo,{children:`After this event`}),(0,K.jsx)(fo,{children:Y?Y.name:`Target event or screen`}),(0,K.jsx)(po,{children:Y?`${Y.kind} · ${Q(Y.share_pct,0)} of occurrences`:`Choose the downstream step that should happen after this event.`}),Y?.replay_filter?(0,K.jsx)(P,{type:`button`,variant:`link`,size:`sm`,onClick:()=>_?.(Y.replay_filter.key,Y.replay_filter.value,Y.replay_filter.label,!0),children:`Open matching evidence`}):null]})]})]}),(0,K.jsxs)(wa,{children:[(0,K.jsx)(Ta,{children:(0,K.jsxs)(`div`,{children:[(0,K.jsx)(pa,{children:`Impact trend`}),(0,K.jsx)(ma,{children:`Event adoption and repeat cohorts over the last six months.`})]})}),(0,K.jsx)(ia,{retentionData:H,isLoading:je})]})]}):null,fe===`evidence`?(0,K.jsxs)(la,{children:[(0,K.jsxs)(mo,{children:[te?null:(0,K.jsxs)(ne,{type:`single`,value:ve,onValueChange:e=>{e&&Qe(e)},"aria-label":`Evidence mode`,className:`rounded-lg bg-[color:var(--muted)] p-1`,children:[(0,K.jsx)(re,{value:`replays`,"aria-label":`Replays`,className:`h-8 px-3 text-sm`,children:`Replays`}),(0,K.jsx)(re,{value:`properties`,"aria-label":`Properties`,className:`h-8 px-3 text-sm`,children:`Properties`})]}),(0,K.jsxs)(ho,{children:[(0,K.jsx)(`strong`,{children:O(e.count)}),` occurrences ·`,` `,(0,K.jsx)(`strong`,{children:O(e.unique_sessions)}),` sessions ·`,` `,(0,K.jsx)(`strong`,{children:qe}),` replayable loaded`]}),(0,K.jsx)(go,{children:g.map(e=>(0,K.jsxs)(_o,{$unsupported:!e.supported,children:[e.label,(0,K.jsx)(`button`,{type:`button`,onClick:()=>y?.(e.key),"aria-label":`Remove ${e.label}`,children:(0,K.jsx)(c,{size:12})})]},e.key))})]}),X===`replays`?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(vo,{children:[(0,K.jsx)(ha,{children:`Representative replays`}),Ve?(0,K.jsx)(yo,{children:Array.from({length:5}).map((e,t)=>(0,K.jsx)(V,{variant:`card`,height:`138px`,index:t},t))}):Ge.length>0?(0,K.jsx)(yo,{children:Ge.map(e=>(0,K.jsxs)(bo,{children:[(0,K.jsxs)(xo,{children:[(0,K.jsx)(So,{type:`button`,onClick:()=>Je(e.event),"aria-label":`Replay ${e.bucket}`,children:(0,K.jsx)(s,{size:15,fill:`currentColor`})}),(0,K.jsxs)(Co,{children:[`@`,M(e.event.eventPropertyTime)]})]}),(0,K.jsx)(wo,{$tone:e.tone,children:e.bucket}),(0,K.jsx)(To,{title:e.reason,children:e.reason}),(0,K.jsxs)(Eo,{children:[e.event.deviceModel||`Unknown device`,` · `,e.event.appVersion||`unknown version`]})]},`${e.bucket}-${e.event.sessionid}-${e.event.eventPropertyTime}`))}):(0,K.jsxs)(Pa,{children:[(0,K.jsx)(Fa,{children:`No representative replays in this page of data`}),(0,K.jsx)(Ia,{children:`Try removing filters or changing the date range.`})]})]}),(0,K.jsxs)(Do,{children:[(0,K.jsx)(Ta,{children:(0,K.jsxs)(`div`,{children:[(0,K.jsx)(pa,{children:`Event occurrences`}),(0,K.jsx)(ma,{children:`Server-paginated, sortable, expandable rows. Replay opens at eventPropertyTime.`})]})}),(0,K.jsx)(gi,{events:U,pagination:Be?.pagination,sort:D,isLoading:Ve,onSortChange:Ye,onPageChange:j,onAnalyze:oe,onQuickReplay:Je,appId:u})]})]}):(0,K.jsx)(aa,{properties:W,selectedProperty:Ke,onSelectProperty:I,onOpenReplays:(e,t)=>_?.(`rf.prop.${e}`,t,`${e}: ${t}`,!0)})]}):null]})]})};function Qi({title:e,subtitle:t,children:n}){return(0,K.jsxs)(m,{className:`flex h-full min-w-0 flex-col rounded-lg border-[var(--border)] bg-[var(--color-surface-card)] shadow-none`,children:[(0,K.jsx)(g,{className:`px-4 pb-3 pt-4`,children:(0,K.jsxs)(`div`,{className:`space-y-1`,children:[(0,K.jsx)(`h3`,{className:`m-0 text-[15px] font-semibold text-[color:var(--foreground)]`,children:e}),(0,K.jsx)(`p`,{className:`m-0 text-[13px] leading-normal text-[color:var(--muted-foreground)]`,children:t})]})}),(0,K.jsx)(h,{className:`px-4 pb-4 pt-0`,children:(0,K.jsx)(`div`,{className:`flex flex-col`,children:n})})]})}function $i({icon:e,label:t,helper:n,value:r,delta:i}){let a=Ii(i?Number(i.replace(/[^0-9.-]/g,``)):null);return(0,K.jsxs)(`div`,{className:`flex min-h-[46px] items-center justify-between gap-2.5 border-b border-[var(--border)] py-2 last:border-b-0`,children:[(0,K.jsxs)(`span`,{className:`flex min-w-0 items-center gap-2.5`,children:[(0,K.jsx)(`span`,{className:`grid size-[1.625rem] shrink-0 place-items-center rounded-[6px] bg-[var(--color-surface-sunken)] text-[color:var(--muted-foreground)] [&_svg]:size-4`,children:e}),(0,K.jsxs)(`span`,{className:`flex min-w-0 flex-col`,children:[(0,K.jsx)(`span`,{className:`block truncate text-[13.5px] font-semibold leading-tight text-[color:var(--foreground)]`,children:t}),n?(0,K.jsx)(`span`,{className:`block truncate text-[11px] leading-tight text-[color:var(--muted-foreground)]`,children:n}):null]})]}),(0,K.jsxs)(`span`,{className:`flex shrink-0 items-baseline gap-3`,children:[(0,K.jsx)(`span`,{className:`font-mono text-[15px] font-semibold tabular-nums tracking-normal text-[color:var(--foreground)]`,children:r}),(0,K.jsx)(`span`,{className:`min-w-12 text-right text-xs font-semibold ${a===`up`?`text-[color:var(--color-good-text)]`:a===`down`?`text-[color:var(--color-critical-text)]`:`text-[color:var(--muted-foreground)]`}`,children:i??`--`})]})]})}function $({label:e,value:t,note:n}){return(0,K.jsxs)(ro,{children:[(0,K.jsx)(io,{children:e}),(0,K.jsx)(ao,{children:t}),(0,K.jsx)(oo,{children:n})]})}function ea({screenData:e,isLoading:t,totalCount:n,onApplyReplayFilter:r}){if(t)return(0,K.jsx)(Ea,{children:(0,K.jsx)(V,{variant:`block`,height:`220px`})});let i=e?.screens??[];return i.length===0?(0,K.jsxs)(Pa,{children:[(0,K.jsx)(Fa,{children:`No screen context for this selection`}),(0,K.jsx)(Ia,{children:`This event did not return screen-breakdown rows for the active period.`})]}):(0,K.jsx)(Oa,{children:(0,K.jsxs)(ka,{children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{children:`Screen`}),(0,K.jsx)(`th`,{children:`Share of occurrences`}),(0,K.jsx)(`th`,{className:`right`,children:`Count`}),(0,K.jsx)(`th`,{className:`right`,children:`Delta`}),(0,K.jsx)(`th`,{className:`right`,children:`Time to event`}),(0,K.jsx)(`th`,{className:`right`})]})}),(0,K.jsx)(`tbody`,{children:i.map(e=>(0,K.jsx)(ta,{row:e,totalCount:n,onApplyReplayFilter:r},e.screen||`(no screen)`))})]})})}function ta({row:e,totalCount:t,onApplyReplayFilter:n}){let r=t>0?e.event_count/t*100:0;return(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`td`,{children:e.screen||`No screen context`}),(0,K.jsx)(`td`,{children:(0,K.jsxs)(Aa,{children:[(0,K.jsx)(ja,{children:(0,K.jsx)(Ma,{style:{width:`${Math.min(100,r)}%`}})}),(0,K.jsx)(`span`,{children:Q(r,0)})]})}),(0,K.jsx)(`td`,{className:`right mono`,children:O(e.event_count)}),(0,K.jsx)(`td`,{className:`right`,children:(0,K.jsx)(ga,{$tone:Ii(e.delta_pct),children:Fi(e.delta_pct)??`--`})}),(0,K.jsx)(`td`,{className:`right mono`,children:e.avg_time_to_event_sec>0?M(e.avg_time_to_event_sec):`--`}),(0,K.jsx)(`td`,{className:`right`,children:e.screen?(0,K.jsx)(P,{type:`button`,variant:`link`,size:`sm`,onClick:()=>n(e.screen),children:`Open evidence`}):null})]})}function na({data:e,isLoading:t,eventName:n,onApplyReplayFilter:r}){return t?(0,K.jsx)(Ea,{children:(0,K.jsx)(V,{variant:`block`,height:`280px`})}):!e||e.center_event_count<=0?(0,K.jsxs)(Pa,{children:[(0,K.jsx)(Fa,{children:`No adjacent sequence data for this selection`}),(0,K.jsx)(Ia,{children:`The journey contract returned no center occurrences for the active date range and platform.`})]}):(0,K.jsxs)(La,{children:[(0,K.jsxs)(Ra,{children:[(0,K.jsxs)(`span`,{children:[(0,K.jsx)(`strong`,{children:O(e.center_event_count)}),` occurrences ·`,` `,(0,K.jsx)(`strong`,{children:O(e.center_session_count)}),` sessions · occurrence weighted`]}),e.sample_state===`low_sample`?(0,K.jsx)(za,{children:`Low sample`}):null]}),(0,K.jsxs)(Ba,{children:[(0,K.jsxs)(Va,{children:[(0,K.jsx)(Ha,{children:`Comes before`}),(0,K.jsx)(ra,{nodes:e.before,onApplyReplayFilter:r})]}),(0,K.jsxs)(Za,{children:[(0,K.jsx)(Qa,{children:`Event`}),(0,K.jsx)($a,{children:n}),(0,K.jsxs)(eo,{children:[O(e.center_event_count),` occ`]})]}),(0,K.jsxs)(Va,{children:[(0,K.jsx)(Ha,{children:`Comes after`}),(0,K.jsx)(ra,{nodes:e.after,onApplyReplayFilter:r})]})]}),e.limitations.length>0?(0,K.jsx)(to,{children:e.limitations[0]}):null]})}function ra({nodes:e,onApplyReplayFilter:t}){let n=Math.max(1,...e.map(e=>e.share_pct??0));return(0,K.jsx)(Ua,{children:e.slice(0,5).map(e=>(0,K.jsxs)(Wa,{children:[(0,K.jsxs)(Ga,{children:[(0,K.jsxs)(Ka,{children:[(0,K.jsx)(qa,{$kind:e.kind,children:e.kind===`event`?`EVT`:e.kind===`screen`?`SCR`:`SYS`}),(0,K.jsx)(Ja,{title:e.name,children:e.name})]}),(0,K.jsxs)(Ya,{children:[(0,K.jsx)(`strong`,{children:Q(e.share_pct,0)}),e.delta_pp==null?null:(0,K.jsx)(ga,{$tone:Ii(e.delta_pp),children:Fi(e.delta_pp,`pp`)})]})]}),(0,K.jsx)(ja,{children:(0,K.jsx)(Ma,{style:{width:`${Math.min(100,(e.share_pct??0)/n*100)}%`}})}),(0,K.jsxs)(Xa,{children:[(0,K.jsxs)(`span`,{children:[O(e.count),` occ · `,e.median_gap_sec==null?`--`:M(e.median_gap_sec)]}),e.replay_filter?(0,K.jsx)(P,{type:`button`,variant:`link`,size:`sm`,onClick:()=>t(e.replay_filter),children:`Open evidence`}):null]})]},`${e.kind}-${e.name}`))})}function ia({retentionData:e,isLoading:t}){if(t)return(0,K.jsx)(Ea,{children:(0,K.jsx)(V,{variant:`block`,height:`180px`})});let n=e?.cohorts?.slice(-8)??[];return n.length===0?(0,K.jsxs)(Pa,{children:[(0,K.jsx)(Fa,{children:`No cohort trend available`}),(0,K.jsx)(Ia,{children:`Retention data will appear after complete return windows are available.`})]}):(0,K.jsx)(Oa,{children:(0,K.jsxs)(ka,{children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{children:`Cohort`}),(0,K.jsx)(`th`,{className:`right`,children:`New adopters`}),(0,K.jsx)(`th`,{className:`right`,children:`1-week repeat`}),(0,K.jsx)(`th`,{className:`right`,children:`1-month repeat`})]})}),(0,K.jsx)(`tbody`,{children:n.map(e=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`td`,{children:e.label}),(0,K.jsx)(`td`,{className:`right mono`,children:O(e.cohort_size)}),(0,K.jsx)(`td`,{className:`right mono`,children:Q(e.periods[1])}),(0,K.jsx)(`td`,{className:`right mono`,children:Q(e.periods[4]??e.periods[3])})]},e.date))})]})})}function aa({properties:e,selectedProperty:t,onSelectProperty:n,onOpenReplays:r}){return e.length===0||!t?(0,K.jsxs)(Pa,{children:[(0,K.jsx)(Fa,{children:`No event properties in this selection`}),(0,K.jsx)(Ia,{children:`The properties summary contract returned no custom event payload keys for the active filters.`})]}):(0,K.jsxs)(Oo,{children:[(0,K.jsxs)(ko,{children:[(0,K.jsxs)(Ao,{children:[`Properties · `,t.source===`summary`?`summary`:`sampled`]}),e.map(e=>(0,K.jsxs)(jo,{type:`button`,$active:e.key===t.key,onClick:()=>n(e.key),children:[(0,K.jsx)(Mo,{children:e.key}),(0,K.jsxs)(No,{children:[e.type,` · `,Q(e.coveragePct,0),` coverage`,e.coverageDeltaPp==null?``:` · ${Fi(e.coverageDeltaPp,`pp`)}`]})]},e.key))]}),(0,K.jsxs)(wa,{children:[(0,K.jsx)(Ta,{children:(0,K.jsxs)(`div`,{children:[(0,K.jsxs)(pa,{children:[t.key,` value distribution`]}),(0,K.jsx)(ma,{children:t.source===`summary`?`Full-period distribution from ${O(t.presentCount)} captured values.`:`Sampled from the loaded event occurrences.`})]})}),t.numeric?(0,K.jsxs)(Po,{children:[(0,K.jsx)($,{label:`Average`,value:t.numeric.average.toFixed(1),note:`numeric value`}),(0,K.jsx)($,{label:`Median`,value:(t.numeric.median??t.numeric.average).toFixed(1),note:`numeric value`}),(0,K.jsx)($,{label:`P90`,value:(t.numeric.p90??t.numeric.max).toFixed(1),note:`numeric value`})]}):null,(0,K.jsx)(Oa,{children:(0,K.jsxs)(ka,{children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{children:`Value`}),(0,K.jsx)(`th`,{children:`Share`}),(0,K.jsx)(`th`,{className:`right`,children:`Delta`}),(0,K.jsx)(`th`,{className:`right`,children:`Occurrences`}),(0,K.jsx)(`th`,{className:`right`})]})}),(0,K.jsx)(`tbody`,{children:t.values.map(e=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`td`,{className:`mono`,children:e.value}),(0,K.jsx)(`td`,{children:(0,K.jsxs)(Aa,{children:[(0,K.jsx)(ja,{children:(0,K.jsx)(Ma,{style:{width:`${Math.min(100,e.sharePct)}%`}})}),(0,K.jsx)(`span`,{children:Q(e.sharePct,0)})]})}),(0,K.jsx)(`td`,{className:`right`,children:e.deltaPp==null?(0,K.jsx)(Na,{children:`--`}):(0,K.jsx)(ga,{$tone:Ii(e.deltaPp),children:Fi(e.deltaPp,`pp`)})}),(0,K.jsx)(`td`,{className:`right mono`,children:O(e.count)}),(0,K.jsx)(`td`,{className:`right`,children:e.filterValue?(0,K.jsx)(P,{type:`button`,variant:`link`,size:`sm`,onClick:()=>r(t.key,e.filterValue),children:`Open replays`}):(0,K.jsx)(Na,{children:`Not filterable`})})]},e.value))})]})})]})]})}var oa=y.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  background: transparent;
`,sa=y.div`
  display: flex;
  min-width: 0;
  flex-shrink: 0;
  background: transparent;
`,ca=y.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: ${({$hideTabs:e,theme:t})=>e?`0 0 ${t.spacing[10]}`:`${t.spacing[5]} 0 ${t.spacing[10]}`};
`,la=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,ua=y.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,da=y.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,fa=y.section`
  background: var(--color-surface-card);
  border: 1px solid var(--border);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[4]};
`,pa=y.h3`
  margin: 0;
  color: var(--foreground);
  font-size: 15px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,ma=y.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: var(--muted-foreground);
  font-size: 13px;
  line-height: 1.5;
`,ha=y.div`
  color: var(--muted-foreground);
  font-size: 10.5px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,ga=y.span`
  color: ${({$tone:e})=>e===`up`?`var(--color-good-text)`:e===`down`?`var(--color-critical-text)`:`var(--muted-foreground)`};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  font-variant-numeric: tabular-nums;
`,_a=y.section`
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: var(--color-surface-card);
`,va=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid var(--border);
  background: var(--color-surface-card);

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: stretch;
    flex-direction: column;
  }
`,ya=y.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,ba=y.span`
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: var(--color-surface-sunken);
  color: var(--muted-foreground);

  svg {
    width: 16px;
    height: 16px;
  }
`,xa=y.h3`
  margin: 0;
  color: var(--foreground);
  font-size: 15px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,Sa=y.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: var(--muted-foreground);
  font-size: 13px;
  line-height: 1.5;
`,Ca=y.div`
  min-width: 0;
  padding: ${({theme:e})=>e.spacing[4]};
`,wa=y.section`
  background: var(--color-surface-card);
  border: 1px solid var(--border);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
`,Ta=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid var(--border);
`,Ea=y.div`
  padding: ${({theme:e})=>e.spacing[4]};
`,Da=y.div`
  padding: ${({theme:e})=>e.spacing[4]};
`,Oa=y.div`
  overflow: auto;
`,ka=y.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  th {
    padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[4]}`};
    background: var(--color-surface-sunken);
    border-bottom: 1px solid var(--border);
    color: var(--muted-foreground);
    font-size: 10.5px;
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  td {
    padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[4]}`};
    border-bottom: 1px solid var(--border);
    color: var(--muted-foreground);
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }

  tbody tr {
    transition: background-color 120ms ease;
  }

  tbody tr:hover {
    background: var(--color-surface-sunken);
  }

  .right {
    text-align: right;
  }

  /* Tabular numerals stay sans (matches the Overview/screens vocabulary);
     only true mono data columns opt in via .mono-data. */
  .mono {
    color: var(--foreground);
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    font-variant-numeric: tabular-nums;
  }
`,Aa=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,ja=y.div`
  position: relative;
  width: min(180px, 100%);
  height: 7px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: var(--color-surface-sunken);
  overflow: hidden;
`,Ma=y.div`
  height: 100%;
  border-radius: inherit;
  background: var(--primary);
`,Na=y.span`
  color: var(--muted-foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,Pa=y.div`
  margin: ${({theme:e})=>e.spacing[4]};
  min-height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  border: 1px dashed var(--border);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: var(--color-surface-sunken);
  text-align: center;
`,Fa=y.div`
  color: var(--foreground);
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,Ia=y.div`
  max-width: 620px;
  color: var(--muted-foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,La=y.div`
  padding: ${({theme:e})=>e.spacing[4]};
`,Ra=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  color: var(--muted-foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.sm};

  strong {
    color: var(--foreground);
    font-variant-numeric: tabular-nums;
  }
`,za=y.span`
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  border: 1px solid var(--color-warning-border);
  background: var(--color-warning-bg-subtle);
  color: var(--color-warning-text);
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,Ba=y.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: start;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,Va=y.div`
  min-width: 0;
`,Ha=y.div`
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  color: var(--muted-foreground);
  font-size: 10.5px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,Ua=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Wa=y.div`
  min-width: 0;
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid var(--border);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: var(--color-surface-card);
`,Ga=y.div`
  display: flex;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
`,Ka=y.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,qa=y.span`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background:
    ${({$kind:e})=>e===`event`?`var(--color-accent-50)`:e===`screen`?`var(--color-good-bg-subtle)`:`var(--muted)`};
  color:
    ${({$kind:e})=>e===`event`?`var(--color-accent-600)`:e===`screen`?`var(--color-good-text)`:`var(--muted-foreground)`};
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  letter-spacing: 0.04em;
`,Ja=y.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,Ya=y.div`
  display: inline-flex;
  align-items: baseline;
  gap: ${({theme:e})=>e.spacing[2]};
  color: var(--foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-variant-numeric: tabular-nums;

  strong {
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  }
`,Xa=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: var(--muted-foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,Za=y.div`
  margin-top: 34px;
  padding: ${({theme:e})=>e.spacing[4]};
  border: 1px solid color-mix(in oklab, var(--primary) 30%, transparent);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: color-mix(in oklab, var(--primary) 6%, var(--color-surface-card));
  text-align: center;
`,Qa=y.div`
  color: var(--muted-foreground);
  font-size: 10.5px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,$a=y.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: var(--foreground);
  font-size: 15px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  overflow-wrap: anywhere;
`,eo=y.div`
  margin-top: ${({theme:e})=>e.spacing[1]};
  color: var(--muted-foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-variant-numeric: tabular-nums;
`,to=y.div`
  margin-top: ${({theme:e})=>e.spacing[3]};
  color: var(--muted-foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,no=y.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,ro=y.div`
  min-width: 0;
  border: 1px solid var(--border);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: var(--color-surface-sunken);
  padding: 10px 14px;
`,io=y.div`
  color: var(--foreground);
  font-size: 11.5px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,ao=y.div`
  margin-top: ${({theme:e})=>e.spacing[1]};
  color: var(--foreground);
  font-size: 24px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.extrabold??e.typography.fontWeight.bold};
  line-height: 1;
  font-variant-numeric: tabular-nums;
`,oo=y.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: var(--muted-foreground);
  font-size: 10.5px;
  line-height: 1.3;
`,so=y(wa)``,co=y.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,lo=y.div`
  border: 1px dashed var(--border);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing[4]};
  background: var(--color-surface-sunken);
`,uo=y.div`
  color: var(--muted-foreground);
  font-size: 10.5px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,fo=y.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: var(--foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,po=y.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: var(--muted-foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,mo=y.div`
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-wrap: wrap;
  padding: ${({theme:e})=>e.spacing[3]};
  background: var(--color-surface-card);
  border: 1px solid var(--border);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
`,ho=y.div`
  color: var(--muted-foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.sm};

  strong {
    color: var(--foreground);
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    font-variant-numeric: tabular-nums;
  }
`,go=y.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  flex-wrap: wrap;
`,_o=y.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-height: 26px;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  border: 1px solid ${({$unsupported:e})=>e?`var(--color-warning-border)`:`var(--border)`};
  background: ${({$unsupported:e})=>e?`var(--color-warning-bg-subtle)`:`var(--color-surface-sunken)`};
  color: ${({$unsupported:e})=>e?`var(--color-warning-text)`:`var(--muted-foreground)`};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    padding: 0;
  }
`,vo=y.section`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,yo=y.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.xl}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,bo=y.article`
  min-width: 0;
  background: var(--color-surface-card);
  border: 1px solid var(--border);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
`,xo=y.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
  background: var(--color-surface-sunken);
`,So=y.button`
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: var(--color-surface-card);
  color: var(--primary);
  cursor: pointer;
`,Co=y.span`
  position: absolute;
  right: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  padding: 1px ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: var(--foreground);
  color: var(--color-surface-card);
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  font-variant-numeric: tabular-nums;
`,wo=y.div`
  padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[3]} 0`};
  color: ${({$tone:e})=>e===`critical`?`var(--color-critical-text)`:e===`warning`?`var(--color-warning-text)`:`var(--primary)`};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,To=y.div`
  padding: ${({theme:e})=>`2px ${e.spacing[3]} 0`};
  color: var(--foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Eo=y.div`
  padding: ${({theme:e})=>`0 ${e.spacing[3]} ${e.spacing[3]}`};
  color: var(--muted-foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Do=y(wa)`
  min-height: 420px;
`,Oo=y.div`
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,ko=y.div`
  background: var(--color-surface-card);
  border: 1px solid var(--border);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
`,Ao=y.div`
  padding: ${({theme:e})=>e.spacing[3]};
  background: var(--color-surface-sunken);
  border-bottom: 1px solid var(--border);
  color: var(--muted-foreground);
  font-size: 10.5px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,jo=y.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2px;
  padding: ${({theme:e})=>e.spacing[3]};
  border: 0;
  border-left: 3px solid ${({$active:e})=>e?`var(--primary)`:`transparent`};
  border-bottom: 1px solid var(--border);
  background: ${({$active:e})=>e?`color-mix(in oklab, var(--primary) 8%, var(--color-surface-card))`:`var(--color-surface-card)`};
  color: var(--foreground);
  cursor: pointer;
  text-align: left;
  transition: background-color 120ms ease;

  &:hover {
    background: ${({$active:e})=>e?`color-mix(in oklab, var(--primary) 8%, var(--color-surface-card))`:`var(--color-surface-sunken)`};
  }
`,Mo=y.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,No=y.span`
  color: var(--muted-foreground);
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,Po=y.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid var(--border);
`,Fo=b`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;y.div`
  position: relative;
  padding: 14px 18px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({theme:e})=>e.glass.background};
  backdrop-filter: ${({theme:e})=>e.glass.backdropFilter};
  border: 1px solid transparent;
  background-clip: padding-box;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      ${({theme:e})=>e.colors.uxcam.indigo[400]},
      ${({theme:e})=>e.colors.uxcam.emerald[400]},
      ${({theme:e})=>e.colors.uxcam.indigo[400]}
    );
    background-size: 200% 200%;
    animation: ${Fo} 6s ease infinite;
    z-index: -1;
    opacity: 0.4;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    padding: 1px;
  }

  box-shadow: ${({theme:e})=>e.shadows.sm};
`,y.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
`,y.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`,y.span`
  color: ${({theme:e})=>e.colors.uxcam.indigo[500]};
  display: flex;
  align-items: center;
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.display};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
`,y.div`
  display: flex;
  gap: 8px;
  flex: 1;
  min-width: 0;
`;var Io=y.button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: left;
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  padding: 8px 10px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    border-color: ${({theme:e})=>e.colors.uxcam.indigo[300]};
  }

  &:active {
    transform: translateY(1px);
  }
`;y.span`
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  flex-shrink: 0;
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,y.span`
  color: ${({theme:e})=>e.colors.text.tertiary};
  flex-shrink: 0;
  transition: transform 0.15s ease;

  ${Io}:hover & {
    color: ${({theme:e})=>e.colors.uxcam.indigo[500]};
    transform: translateX(2px);
  }
`,y.form`
  display: flex;
  align-items: center;
  gap: 8px;
`,y.textarea`
  flex: 1;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.primary};
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  padding: 8px 12px;
  resize: none;
  outline: none;
  transition: ${({theme:e})=>e.transitions.fast};
  line-height: 1.4;

  &::placeholder {
    color: ${({theme:e})=>e.colors.text.tertiary};
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.uxcam.indigo[400]};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.uxcam.indigo[100]};
  }
`,y.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: ${({theme:e})=>e.borderRadius.default};
  border: none;
  background: ${({theme:e})=>e.colors.uxcam.indigo[500]};
  color: white;
  cursor: pointer;
  flex-shrink: 0;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.uxcam.indigo[600]};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,y.div``,y.div`
  margin-bottom: 12px;
`,y.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0 0 2px;
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,y.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;var Lo=b`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
`;y.div`
  display: flex;
  gap: 10px;
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: 12px 14px;
  animation: ${Lo} 0.3s ease-out both;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.uxcam.indigo[300]};
    box-shadow: ${({theme:e})=>e.shadows.sm};
  }
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.tertiary};
  min-width: 20px;
  padding-top: 1px;
`,y.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,y.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  font-variant-numeric: tabular-nums;
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,y.span`
  margin-left: auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({$color:e,theme:t})=>e??t.colors.text.tertiary};
  background: ${({$color:e,theme:t})=>e===`#10B981`?t.colors.severity.good.deltaBg:e===`#EF4444`?t.colors.severity.critical.deltaBg:`transparent`};
  padding: 1px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
`,y.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.uxcam.indigo[700]};
  background: ${({theme:e})=>e.colors.uxcam.indigo[50]};
  padding: 1px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
`,y.div`
  width: 100%;
  height: 4px;
  background: ${({theme:e})=>e.colors.background.sunken};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  overflow: hidden;
  margin-top: 2px;
`,y.div`
  height: 100%;
  width: ${({$width:e})=>e}%;
  background: ${({theme:e})=>e.colors.uxcam.indigo[400]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
`,y.div`
  margin-top: 10px;
`,y.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.link};
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    text-decoration: underline;
  }
`,y.span`
  display: flex;
  transition: transform 0.2s ease;
  transform: rotate(${({$open:e})=>e?`180deg`:`0deg`});
`,y.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
`,y.th`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.tertiary};
  text-align: ${({$align:e})=>e};
  padding: 8px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
`,y.tr`
  &:not(:last-child) {
    border-bottom: 1px solid ${({theme:e})=>e.colors.border.subtle};
  }

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
  }
`,y.td`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.primary};
  text-align: ${({$align:e})=>e};
  padding: 8px 12px;
`,y.td`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.primary};
  text-align: ${({$align:e})=>e};
  padding: 8px 12px;
  font-variant-numeric: tabular-nums;
`,y.td`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({$color:e,theme:t})=>e??t.colors.text.tertiary};
  text-align: ${({$align:e})=>e};
  padding: 8px 12px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-variant-numeric: tabular-nums;
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  min-width: 24px;
  display: inline-block;
  flex-shrink: 0;
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
`,y.div`
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: 20px;
`,y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,y.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0;
`,y.div`
  display: flex;
  gap: 0;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  overflow: hidden;
`,y.button`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  padding: 4px 12px;
  border: none;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  background: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[50]:e.colors.background.surface};
  color: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[700]:e.colors.text.secondary};

  &:hover {
    background: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[100]:e.colors.background.hover};
  }
`,y.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 16px;
`,y.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e,$highlight:t})=>t?e.typography.fontWeight.semibold:e.typography.fontWeight.normal};
  color: ${({theme:e,$highlight:t})=>t?e.colors.text.primary:e.colors.text.secondary};
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  font-variant-numeric: tabular-nums;
`,y.div`
  width: 100%;
  height: 24px;
  background: ${({theme:e})=>e.colors.background.sunken};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  overflow: hidden;
`,y.div`
  height: 100%;
  width: ${({$width:e})=>e}%;
  background: ${({theme:e,$position:t})=>t===`top`?e.colors.uxcam.indigo[200]:e.colors.uxcam.indigo[500]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
`,y.div`
  display: flex;
  justify-content: center;
  color: ${({theme:e})=>e.colors.text.tertiary};
  padding: 2px 0;
`,y.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 12px 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border.subtle};
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize[`2xl`]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  font-variant-numeric: tabular-nums;
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,y.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e,$direction:t})=>{switch(t){case`up`:return e.colors.severity.good.text;case`down`:return e.colors.severity.critical.text;default:return e.colors.text.tertiary}}};
  margin-left: auto;
`,y.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.link};
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    text-decoration: underline;
  }
`;var Ro=({appId:e,entityType:t,entityId:n,entityLabel:r,contextSnapshot:i,className:a})=>(0,K.jsx)(De,{appId:e,entityType:t,entityId:n,entityLabel:r,contextSnapshot:i,className:a}),zo=[{id:`behavior`,label:`Behavior`},{id:`outcomes`,label:`Outcomes`},{id:`evidence`,label:`Evidence`}],Bo=({eventType:e,activeTab:t,onTabChange:n})=>{let{selectedAppId:r}=ye();return(0,K.jsxs)(Ge,{"data-testid":`event-detail-header`,children:[(0,K.jsx)(`div`,{className:`flex min-w-0 flex-wrap items-start justify-between gap-3`,children:(0,K.jsxs)(`div`,{className:`min-w-0`,children:[(0,K.jsxs)(`div`,{className:`flex min-w-0 flex-wrap items-center gap-2`,children:[(0,K.jsx)(`h2`,{className:`m-0 truncate text-lg font-semibold text-text-2`,children:e.event_name}),(0,K.jsx)(Ro,{appId:r,entityType:`event`,entityId:e.event_name,entityLabel:e.event_name,contextSnapshot:{surface:`event_detail`,event_type:e.type,count:e.count,unique_users:e.unique_users,unique_sessions:e.unique_sessions}})]}),(0,K.jsx)(`p`,{className:`mb-0 mt-1 text-sm leading-normal text-text-3`,children:`Start with behavior signals, then switch analysis domains. Outcomes cover adoption and retention; evidence covers replays and properties.`})]})}),(0,K.jsx)(`div`,{className:`flex min-w-0 flex-wrap items-end justify-between gap-3`,children:(0,K.jsx)(v,{value:t,onValueChange:e=>{let r=e;r!==t&&n(r)},className:`min-w-0 flex-1`,children:(0,K.jsx)(We,{className:`border-b border-border py-0`,children:(0,K.jsx)(ee,{variant:`underline`,"aria-label":`Event detail sections`,className:`h-auto min-h-9 w-full max-w-none justify-start gap-4 overflow-x-auto overscroll-y-none`,children:zo.map(e=>(0,K.jsx)(p,{value:e.id,variant:`underline`,id:`event-detail-tab-${e.id}`,className:`shrink-0`,onClick:()=>{e.id!==t&&n(e.id)},children:e.label},e.id))})})})})]})},Vo=({activeTab:e,onTabChange:t,inline:n=!1})=>{let r=(0,K.jsx)(v,{value:e,onValueChange:e=>t(e),className:`min-w-0`,children:(0,K.jsxs)(ee,{variant:`underline`,"aria-label":`Events view`,className:W,children:[(0,K.jsx)(p,{value:`events`,variant:`underline`,className:Ue,children:`Events`}),(0,K.jsx)(p,{value:`analytics`,variant:`underline`,className:Ue,children:`Analytics`})]})});return n?r:(0,K.jsx)(He,{children:r})};export{ir as a,Ln as c,Mr as i,zn as l,Bo as n,In as o,Zi as r,Fn as s,Vo as t};