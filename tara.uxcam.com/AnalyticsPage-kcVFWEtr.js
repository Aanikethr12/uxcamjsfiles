import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t,Hn as n,W as r,Yt as i,Z as a,_ as o,ct as s,kn as c,nn as l,tt as u,wt as d}from"./icons-vendor-C23rQ2ix.js";import{Ft as f,It as ee,Lt as te,Pt as p,Rt as m,on as h}from"./ds-BJhQ4zht.js";import{i as ne,u as re}from"./router-vendor-DDSrk2O2.js";import{D as g}from"./ui-vendor-CUROeZIN.js";import{A as ie,D as _,F as ae,I as oe,L as v,M as se,N as y,O as ce,P as le,R as ue,T as de,_ as b,b as fe,j as x,k as S,x as pe,y as C}from"./ImpersonationContext-BG2GELh-.js";import{O as w}from"./markdown-vendor-BoH6QLuc.js";import{B as T,S as me,Z as E}from"./PrimaryNav-CxHD5Sf1.js";import{n as he}from"./NavigationContext-DTwRip-h.js";import{x as D}from"./projectsApi-erVZl67d.js";import{t as O}from"./utils-DMoTunZH.js";import{u as ge}from"./Dialog-BFakgPRd.js";import{C as _e,F as ve,M as ye,N as be,P as xe,S as Se,_ as Ce,g as we,j as Te,k as Ee,s as De,w as Oe,z as ke}from"./recordingHealthApi-D07JTYvO.js";import{$r as Ae,Wt as je}from"./TaraChatContext-Ne5fUqNv.js";import{tt as Me}from"./CreateSegmentDialog-xTI_NlWz.js";import{t as Ne}from"./useSubscriptionGate-BclSWIGQ.js";import{n as Pe,t as Fe}from"./template-library-DxiEKPyF.js";import{a as Ie,i as Le,l as Re,o as ze,r as Be,u as Ve}from"./useAnalyticsReports-CqRkDUon.js";import{r as He}from"./PageContextMetaContext-Dm2xv-H4.js";import{t as Ue}from"./dashboards-FAkVF_Gj.js";import{t as We}from"./EntityNotesBubble-BdM_DTM1.js";import{n as Ge}from"./recentlyViewedApi-Dg5hkjqx.js";var k=e(t(),1),Ke={report:38,value:26,current:22,updated:14},A={report:28,value:20,current:16,updated:12};function qe(e){let[t,n]=(0,k.useState)(680),[r,i]=(0,k.useState)(Ke),a=(0,k.useRef)(null),o=(0,k.useRef)(null);(0,k.useEffect)(()=>()=>{a.current?.abort(),a.current=null,o.current?.abort(),o.current=null},[]);let s=(0,k.useCallback)(r=>{if(!e)return;r.preventDefault();let i=r.clientX,o=t;a.current?.abort();let s=new AbortController;a.current=s,document.addEventListener(`mousemove`,e=>{let t=o+e.clientX-i;n(Math.min(900,Math.max(560,t)))},{signal:s.signal}),document.addEventListener(`mouseup`,()=>{s.abort(),a.current===s&&(a.current=null)},{signal:s.signal,once:!0})},[t,e]),c=(0,k.useCallback)(e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;e.preventDefault();let t=e.key===`ArrowRight`?1:-1;n(e=>Math.min(900,Math.max(560,e+t*24)))},[]),l=(0,k.useCallback)((e,t,n,r)=>{i(i=>{let a=r??i,o=a[e]+a[t],s=A[e],c=A[t],l=Math.min(o-c,Math.max(s,a[e]+n));return{...i,[e]:l,[t]:o-l}})},[]);return{libraryWidth:t,setLibraryWidth:n,columnWidths:r,handlePaneResizeStart:s,handlePaneResizeKeyDown:c,handleColumnResizeStart:(0,k.useCallback)((e,t,n)=>{e.preventDefault(),e.stopPropagation();let i=e.currentTarget.closest(`table`)?.getBoundingClientRect().width??1,a=e.clientX,s=r;o.current?.abort();let c=new AbortController;o.current=c,document.addEventListener(`mousemove`,e=>{l(t,n,(e.clientX-a)/i*100,s)},{signal:c.signal}),document.addEventListener(`mouseup`,()=>{c.abort(),o.current===c&&(o.current=null)},{signal:c.signal,once:!0})},[r,l]),handleColumnResizeKeyDown:(0,k.useCallback)((e,t,n)=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;e.preventDefault();let r=e.shiftKey?4:2;l(t,n,e.key===`ArrowRight`?r:-r)},[l])}}g.div`
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[6]};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.background.canvas};
`,g.header`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[6]};

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
`,g.div`
  min-width: 0;
  max-width: 720px;
`,g.h1`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,g.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,g.div`
  min-width: min(100%, 720px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: 980px) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;var Je=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;

  @media (max-width: 1180px) {
    align-items: stretch;
    flex-direction: column;
  }
`,Ye=g.div`
  min-width: 0;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: 760px) {
    align-items: stretch;
    flex-direction: column;
  }
`,Xe=g.div`
  margin-left: auto;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: 1180px) {
    margin-left: 0;
    flex-wrap: wrap;
  }

  @media (max-width: 760px) {
    justify-content: flex-start;
  }
`,Ze=g.div`
  flex: 0 1 320px;
  width: min(320px, 100%);
`,Qe=g.div`
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  white-space: nowrap;
`,$e=g.select`
  height: 32px;
  min-width: 152px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;g.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${({theme:e})=>e.colors.border.default} transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: ${({theme:e})=>e.borderRadius.full};
    background: ${({theme:e})=>e.colors.border.default};
  }
`;var et=g.div`
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    overflow: auto;
  }
`,tt=g.section`
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,nt=g.div`
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 4px;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
  background: ${({theme:e})=>e.colors.background.sunken};
  overflow: visible;
  scrollbar-gutter: stable;
`,rt=g.div`
  min-height: 0;
  overflow: auto;
`,j=g.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 2px;
  table-layout: fixed;
  min-width: 860px;
`,M=g.col`
  width: ${({$width:e})=>`${e}%`};
`,N=g.th`
  height: 24px;
  padding: 8px 12px;
  border: 0;
  background: ${({theme:e})=>e.colors.background.sunken};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: left;
  white-space: nowrap;
  overflow: visible;
  position: sticky;
  top: 0;
  z-index: 18;
`,P=g.span`
  display: block;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`,F=g.button`
  position: absolute;
  top: 0;
  right: -4px;
  z-index: 2;
  width: 8px;
  height: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: col-resize;

  &::after {
    content: '';
    position: absolute;
    top: 7px;
    bottom: 7px;
    left: 3px;
    width: 2px;
    border-radius: ${({theme:e})=>e.borderRadius.full};
    background: ${({theme:e})=>e.colors.border.focus};
    opacity: 0;
    transition: opacity 120ms ease;
  }

  &:hover::after,
  &:focus-visible::after,
  &:active::after {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: -3px;
  }
`;g(N)`
  text-align: left;
`;var it=g(N)`
  text-align: right;
`,I=g.td`
  min-width: 0;
  height: 68px;
  padding: 0 14px;
  border: 0;
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,L=g.tr`
  position: relative;
  cursor: pointer;
  transition: background-color 150ms ease;

  td {
    background: ${({$selected:e,theme:t})=>e?t.colors.uxcam.indigo[50]:t.colors.background.surface};
  }

  td:first-child {
    border-top-left-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
    border-bottom-left-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
    box-shadow: inset 3px 0 0 ${({$selected:e,theme:t})=>e?t.colors.uxcam.indigo[500]:`transparent`};
  }

  td:last-child {
    border-top-right-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
    border-bottom-right-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
  }

  &:hover td {
    background: ${({$selected:e,theme:t})=>e?t.colors.uxcam.indigo[50]:t.colors.background.hover};
  }

  &:hover [data-report-row-actions],
  &:focus-within [data-report-row-actions] {
    background: ${({$selected:e,theme:t})=>e?t.colors.uxcam.indigo[50]:t.colors.background.hover};
    opacity: 1;
    pointer-events: auto;
  }

  /* Reveal the (outline) pin toggle on row hover/focus so unpinned reports
     can be pinned. A pinned report's filled pin is always visible via the
     ds-pin-toggle[aria-pressed="true"] rule in design-system.css. */
  &:hover .ds-pin-toggle,
  &:focus-within .ds-pin-toggle {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: -2px;
  }
`;g.tr`
  height: 28px;
`,g.td`
  padding: 10px 12px 4px;
  border: 0;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  letter-spacing: 0.05em;
  line-height: 1.2;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.text.tertiary};
`;var R=g(I)`
  min-width: 240px;
  overflow: visible;
`,z=g.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,B=g.div`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: ${({theme:e})=>e.colors.background.muted};
  color: ${({theme:e})=>e.colors.text.secondary};
`,at=g.div`
  min-width: 0;
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,V=g.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,H=g.div`
  min-width: 0;
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;g.span`
  flex: 0 0 auto;
  min-width: 32px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 7px;
  border: 1px solid ${({theme:e})=>e.colors.border.subtle};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: ${({theme:e})=>e.colors.background.canvas};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 11px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`;var U=g.button`
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px solid transparent;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: transparent;
  color: ${({theme:e})=>e.colors.text.muted};
  cursor: default;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover,
  &:focus-visible {
    border-color: ${({theme:e})=>e.colors.border.default};
    background: ${({theme:e})=>e.colors.background.surface};
    color: ${({theme:e})=>e.colors.text.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: 2px;
  }
`;g(I)`
  overflow: visible;
`,g.div`
  min-width: 0;
  display: flex;
  align-items: center;
`;var W=g.div`
  width: 320px;
  padding: ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.primary};
`,G=g.div`
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,K=g.div`
  display: grid;
  grid-template-columns: 86px minmax(0, 1fr);
  column-gap: ${({theme:e})=>e.spacing[3]};
  row-gap: ${({theme:e})=>e.spacing[1]};
`,ot=g.div`
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,st=g.div`
  min-width: 0;
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  line-height: 1.4;
  overflow-wrap: anywhere;
`,q=g(I)`
  overflow: hidden;
  white-space: normal;
`,ct=g.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`,J=g.div`
  min-width: 0;
  display: grid;
  grid-template-columns: 92px 76px;
  align-items: baseline;
  column-gap: 10px;
`,lt=g.span`
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: 19px;
  line-height: 1;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  letter-spacing: 0;
`,ut=g.span`
  color: ${({theme:e,$direction:t,$empty:n})=>n?`transparent`:t===`up`?e.colors.success:t===`down`?e.colors.error:e.colors.text.muted};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: 14px;
  line-height: 1;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  text-align: left;
`,dt=g.div`
  min-width: 0;
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;g.span`
  min-width: 0;
  color: ${({theme:e})=>e.colors.text.muted};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;var ft=g.span`
  display: block;
  min-height: 42px;
`,pt=g(I)`
  overflow: hidden;
  white-space: normal;
`,Y=g.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`,X=g.div`
  min-width: 0;
  display: flex;
  align-items: baseline;
  gap: ${({theme:e})=>e.spacing[2]};

  > span:last-child {
    color: ${({theme:e})=>e.colors.text.tertiary};
    font-size: 11px;
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    text-transform: uppercase;
  }
`,mt=g.span`
  min-width: 0;
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: 16px;
  line-height: 1;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  letter-spacing: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;g.div`
  min-width: 0;
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;var ht=g.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: 11px;
  line-height: 1.2;

  > span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,gt=g(I)`
  position: relative;
  padding: 0 12px 0 14px;
  overflow: visible;
`,_t=g.div`
  min-width: 0;
  min-height: 72px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[2]};
`,vt=g.span`
  flex: 1 1 auto;
  min-width: 42px;
  color: ${({theme:e,$stale:t})=>t?e.colors.warning:e.colors.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
  white-space: nowrap;
`,yt=g.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  flex: 0 0 auto;
  padding-left: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: ${({theme:e})=>e.colors.background.surface};
  opacity: 0;
  pointer-events: none;
  transition: opacity 120ms ease;
`,Z=g.button`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px solid transparent;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: transparent;
  color: ${({theme:e,$tone:t})=>t===`danger`?e.colors.error:e.colors.text.secondary};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.background.surface};
    border-color: ${({theme:e})=>e.colors.border.default};
    color: ${({theme:e,$tone:t})=>t===`danger`?e.colors.error:e.colors.text.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
`,bt=g.td`
  padding: ${({theme:e})=>e.spacing[6]};
  border-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  text-align: center;
`;g.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,g.details`
  min-width: 0;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.surface};
  overflow: hidden;

  &[open] {
    padding-bottom: ${({theme:e})=>e.spacing[3]};
  }
`,g.summary`
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: 0 ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.text.primary};
  cursor: pointer;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};

  &::marker {
    color: ${({theme:e})=>e.colors.text.muted};
  }
`,g.span`
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  white-space: nowrap;
`,g.pre`
  max-height: 360px;
  overflow: auto;
  margin: 0;
  padding: ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  line-height: 1.55;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`,g.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0 ${({theme:e})=>e.spacing[3]};
`,g.details`
  border: 1px solid ${({theme:e})=>e.colors.border.subtle};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  overflow: hidden;
`,g.summary`
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: 0 ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.colors.text.secondary};
  cursor: pointer;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};

  &::marker {
    color: ${({theme:e})=>e.colors.text.muted};
  }
`,g.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,g.div`
  padding: 0 ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;var Q=w();function xt(e){return e==null||e===``?`Empty`:Array.isArray(e)?e.map(xt).join(`, `):typeof e==`object`?JSON.stringify(e):String(e)}function St(e){if(!e||typeof e!=`object`||Array.isArray(e))return null;let t=e,n=typeof t.attribute==`string`?t.attribute:typeof t.field==`string`?t.field:typeof t.key==`string`?t.key:null;return n?`${n} ${typeof t.operator==`string`?t.operator:`=`} ${xt(t.value??t.values)}`:null}function Ct(e){let t=Array.isArray(e?.filters)?e.filters.map(St).filter(e=>!!e):[],n=e?.where_conditions,r=n&&typeof n==`object`&&!Array.isArray(n)?Object.entries(n).map(([e,t])=>`${e} = ${xt(t)}`):[],i=[...t,...r];return i.length===0?`None`:i.length<=2?i.join(` · `):`${i.slice(0,2).join(` · `)} · +${i.length-2} more`}function $(e,t,n,r){let i=ce(e),a=t.kpis.length?t.kpis.map(e=>e.metricLabel).join(`, `):t.metricLabel,o=y(v(i?.groupby)),s=e.latest_run?`${e.latest_run.status?e.latest_run.status:`run`} · ${b(e.latest_run.executed_at)}`:`Not run`;return[{label:`Source`,value:r??`Unknown`},{label:`Metric`,value:a},{label:`Breakdown`,value:o??`None`},{label:`Date`,value:`${t.period.label} (${t.period.stateLabel})`},{label:`Filters`,value:Ct(i)},{label:`Compare`,value:t.previousCompletedLabel},{label:`Chart`,value:n.label},{label:`Origin`,value:oe(e.source)},{label:`Run`,value:s}]}function wt(e,t){let n=t.trim().toLowerCase();return!t||n===`unavailable`||n===`no previous period`?e:`${e} · vs ${t}`}var Tt=k.memo(function({report:e,selected:t,deleting:n,refreshing:r,canEdit:i,summary:u,graphMeta:p,tableLabel:h,onSelect:ne,onView:re,onAskTara:g,onRefresh:ae,onEdit:v,onDelete:se,notesAppId:y=null,noteCount:ue}){let b=p.icon,x=u.kpis[0],S=u.kpis.slice(1).length===0,pe=le(e),C=$(e,u,p,h),w=x?.delta.display??u.relativeDelta.display,T=x?.delta.direction??u.relativeDelta.direction,me=w!==`-`,E=ie(ce(e)),he=E&&u.grainLabel===`Total`?`${fe(E)} · vs ${_(E)}`:wt(x?.periodLabel??u.lastCompletedLabel,x?.previousPeriodLabel??u.previousCompletedLabel),D=u.currentPeriodElapsedPercent,ge=u.currentPeriod.raw===null?null:`${u.currentPeriodLabel}${D===null?``:` · ${D}% elapsed`}`,_e=S&&u.currentPeriod.raw!==null,ve=u.currentPeriodLabel.replace(/\s+partial$/i,``),ye=u.kpis.map(e=>`${e.metricLabel}: ${e.value.title} (${e.periodLabel}); ${e.delta.display} vs ${e.previousPeriodLabel}`).join(`
`),be=u.currentPeriod.raw===null?``:`\nCurrent partial period: ${u.currentPeriod.title} (${u.currentPeriodLabel})`,xe=`${ye||u.lastCompleted.title}${be}`;return(0,Q.jsxs)(L,{$selected:t,tabIndex:0,onClick:()=>ne(e),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),ne(e))},children:[(0,Q.jsx)(R,{title:[p.label,h,de(e.analysis_kind),oe(e.source),pe].filter(Boolean).join(` · `),children:(0,Q.jsxs)(V,{children:[(0,Q.jsxs)(z,{className:`group`,children:[(0,Q.jsx)(B,{title:p.label,children:(0,Q.jsx)(b,{size:15,"aria-hidden":!0})}),(0,Q.jsx)(at,{children:e.title}),(0,Q.jsx)(te,{delayDuration:150,children:(0,Q.jsxs)(f,{children:[(0,Q.jsx)(m,{asChild:!0,children:(0,Q.jsx)(U,{type:`button`,"aria-label":`Inspect configuration for ${e.title}`,onClick:e=>e.stopPropagation(),children:(0,Q.jsx)(l,{size:14,"aria-hidden":!0})})}),(0,Q.jsx)(ee,{side:`right`,align:`start`,className:`max-w-none p-0`,children:(0,Q.jsxs)(W,{children:[(0,Q.jsx)(G,{children:`Full configuration`}),(0,Q.jsx)(K,{children:C.map(e=>(0,Q.jsxs)(k.Fragment,{children:[(0,Q.jsx)(ot,{children:e.label}),(0,Q.jsx)(st,{children:e.value})]},e.label))})]})})]})}),y?(0,Q.jsx)(`span`,{className:O(`relative z-30 inline-flex shrink-0 items-center transition-opacity`,(ue??0)>0?`opacity-100`:`pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100`),children:(0,Q.jsx)(We,{appId:y,entityType:`report`,entityId:e.report_id,entityLabel:e.title,count:ue,contextSnapshot:{surface:`reports_table`,report_id:e.report_id,report_title:e.title,report_kind:e.analysis_kind,report_source:e.source},renderTrigger:({onClick:t,openComposer:n,expanded:r,count:i})=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(U,{type:`button`,"aria-label":`Ask Tara about ${e.title}`,title:`Ask Tara`,onClick:e=>{e.stopPropagation(),n(`@tara `)},children:(0,Q.jsx)(Me,{size:14,idSuffix:`analytics-report-note-${e.report_id}`})}),(0,Q.jsx)(U,{type:`button`,"aria-label":`Discussion about ${e.title}${i>0?`, ${i} notes`:``}`,"aria-expanded":r,"aria-haspopup":`dialog`,onClick:e=>{e.stopPropagation(),t()},children:(0,Q.jsx)(d,{size:14,"aria-hidden":!0})})]})})}):null]}),pe?(0,Q.jsx)(H,{children:pe}):null]})}),(0,Q.jsx)(q,{title:S?xe:`Multiple metrics are shown in the report detail`,children:S?(0,Q.jsxs)(ct,{children:[(0,Q.jsxs)(J,{children:[(0,Q.jsx)(lt,{children:x?.value.display??u.lastCompleted.display}),(0,Q.jsx)(ut,{$direction:T,$empty:!me,"aria-hidden":!me,children:me?w:`-`})]}),(0,Q.jsx)(dt,{children:he})]}):(0,Q.jsx)(ft,{"aria-hidden":`true`})}),(0,Q.jsx)(pt,{title:_e?`Current partial period: ${u.currentPeriod.title} (${ge??u.currentPeriodLabel})`:`No current partial period`,children:_e?(0,Q.jsxs)(Y,{children:[(0,Q.jsxs)(X,{children:[(0,Q.jsx)(mt,{children:u.currentPeriod.display}),(0,Q.jsxs)(`span`,{children:[`partial`,D===null?``:` · ${D}%`]})]}),(0,Q.jsx)(ht,{children:(0,Q.jsx)(`span`,{children:ve})})]}):(0,Q.jsx)(ft,{"aria-hidden":`true`})}),(0,Q.jsx)(gt,{title:u.freshness.title,children:(0,Q.jsxs)(_t,{children:[(0,Q.jsx)(vt,{$stale:u.freshness.stale,children:u.freshness.label}),(0,Q.jsxs)(yt,{"data-report-row-actions":!0,children:[(0,Q.jsx)(Z,{type:`button`,"aria-label":`Refresh ${e.title}`,title:r?`Refreshing`:`Refresh`,disabled:r,onClick:t=>{t.stopPropagation(),ae(e)},children:(0,Q.jsx)(a,{size:15,"aria-hidden":!0})}),y?null:(0,Q.jsx)(Z,{type:`button`,"aria-label":`Ask Tara about ${e.title}`,title:`Ask Tara`,onClick:t=>{t.stopPropagation(),g(e,u)},children:(0,Q.jsx)(Me,{size:15,idSuffix:`analytics-report-${e.report_id}`})}),(0,Q.jsx)(Z,{type:`button`,"aria-label":`View ${e.title}`,title:`View`,onClick:t=>{t.stopPropagation(),re(e)},children:(0,Q.jsx)(c,{size:15,"aria-hidden":!0})}),(0,Q.jsx)(Z,{type:`button`,"aria-label":`Edit ${e.title}`,title:i?`Edit`:`Builder for this report type is not implemented yet`,disabled:!i,onClick:t=>{t.stopPropagation(),v(e)},children:(0,Q.jsx)(s,{size:15,"aria-hidden":!0})}),(0,Q.jsx)(Z,{type:`button`,"aria-label":`Delete ${e.title}`,title:`Delete`,disabled:n,$tone:`danger`,onClick:t=>{t.stopPropagation(),se(e)},children:(0,Q.jsx)(o,{size:15,"aria-hidden":!0})})]})]})})]})}),Et=({appId:e=null,reports:t,reportRowMeta:n,columnWidths:r,isLoading:i,selectedReportId:a,deletingReportId:o,refreshingReportId:s,isDeletePending:c,isRefreshPending:l,onSelectReport:u,onViewReport:d,onAskTara:f,onRefreshReport:ee,onEditReport:te,onDeleteReport:p,onColumnResizeStart:m,onColumnResizeKeyDown:h})=>{let ne=E(e,t.map(e=>({entityType:`report`,entityId:e.report_id}))).data??{};return(0,Q.jsx)(nt,{children:(0,Q.jsx)(rt,{children:(0,Q.jsxs)(j,{children:[(0,Q.jsxs)(`colgroup`,{children:[(0,Q.jsx)(M,{$width:r.report}),(0,Q.jsx)(M,{$width:r.value}),(0,Q.jsx)(M,{$width:r.current}),(0,Q.jsx)(M,{$width:r.updated})]}),(0,Q.jsx)(`thead`,{children:(0,Q.jsxs)(`tr`,{children:[(0,Q.jsxs)(N,{scope:`col`,children:[(0,Q.jsx)(P,{children:`Report`}),(0,Q.jsx)(F,{type:`button`,"aria-label":`Resize Report column`,title:`Resize column`,onMouseDown:e=>m(e,`report`,`value`),onKeyDown:e=>h(e,`report`,`value`)})]}),(0,Q.jsxs)(N,{scope:`col`,children:[(0,Q.jsx)(P,{children:`Value`}),(0,Q.jsx)(F,{type:`button`,"aria-label":`Resize Value column`,title:`Resize column`,onMouseDown:e=>m(e,`value`,`current`),onKeyDown:e=>h(e,`value`,`current`)})]}),(0,Q.jsxs)(N,{scope:`col`,children:[(0,Q.jsx)(P,{children:`Incomplete Period`}),(0,Q.jsx)(F,{type:`button`,"aria-label":`Resize Incomplete Period column`,title:`Resize column`,onMouseDown:e=>m(e,`current`,`updated`),onKeyDown:e=>h(e,`current`,`updated`)})]}),(0,Q.jsx)(it,{scope:`col`,children:(0,Q.jsx)(P,{children:`Updated`})})]})}),(0,Q.jsx)(`tbody`,{children:i?(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(bt,{colSpan:4,children:`Loading reports...`})}):t.length?t.map(t=>{let r=n.get(t.report_id);return r?(0,Q.jsx)(Tt,{report:t,selected:t.report_id===a,deleting:c&&o===t.report_id,refreshing:l&&s===t.report_id,canEdit:Se(t),summary:r.summary,graphMeta:r.graphMeta,tableLabel:r.tableLabel,onSelect:u,onView:d,onAskTara:f,onRefresh:ee,onEdit:te,onDelete:p,notesAppId:e,noteCount:ne[T(`report`,t.report_id)]??0},t.report_id):null}):(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(bt,{colSpan:4,children:`No reports match the current filters.`})})})]})})})},Dt=Object.freeze([]),Ot=3600*1e3,kt=[{value:`all`,label:`All types`},{value:`metrics`,label:`Metrics`},{value:`funnel`,label:`Funnel`},{value:`conversion`,label:`Conversion`},{value:`retention`,label:`Retention`},{value:`unknown`,label:`Other`}];function At(e){return[e.report_id,e.updated_at,e.current_revision_id??``,e.latest_run?.run_id??``,e.latest_run?.result_hash??``].join(`:`)}function jt(e){return e.latest_run?!!S(e,Ot):!0}function Mt(e){return{label:C(e),title:`Preview updated: ${b(e)}`,stale:!1}}function Nt(e){let t=S(e,Ot);return t?{...t,stale:!0}:null}function Pt(e){return e.source===`brief_evidence`}var Ft=()=>{let{selectedAppId:e}=he(),t=Ne(void 0,e||null),s=je(),c=re(),{setMeta:l,setIsLoading:d}=He(),{reportSurface:f,openReportSurface:ee,closeReportSurface:te,requestCloseReportSurface:m,reportSurfaceDirty:g,activeReportContext:ie}=De(),[_,v]=ne(),y=Le(e||null,{limit:100}),ce=Ie(e||null),le=Re(e||null),b=ze(e||null),fe=Ve(e||null),S=me(e||null),C=(0,k.useMemo)(()=>y.data?.data??Dt,[y.data?.data]),w=(0,k.useMemo)(()=>{let e=C.map(e=>{let t=ue(e),n=se(e),r=ae(e);return[e.report_id,{summary:t,graphMeta:n,tableLabel:r}]});return new Map(e)},[C]),[T,E]=(0,k.useState)(null),[O,We]=(0,k.useState)(``),[Ke,A]=(0,k.useState)(!1),[nt,rt]=(0,k.useState)(null),[j,M]=(0,k.useState)(`all`),[N,P]=(0,k.useState)(null),[F,it]=(0,k.useState)(null),I=_.get(`analytics_report`)??_.get(`report`),L=_.get(`brief_report`),R=_.get(`evidence_key`),z=I?C.find(e=>e.report_id===I)??null:null,B=Be(e||null,I,{enabled:!!(I&&!z)}),at=(0,k.useRef)(ie),V=(0,k.useRef)(f),H=(0,k.useRef)(g),U=(0,k.useRef)(0),W=(0,k.useRef)(!1),G=(0,k.useRef)(null),K=(0,k.useRef)(null),ot=(0,k.useRef)(new Set),st=(0,k.useRef)(null);(0,k.useEffect)(()=>{at.current=ie},[ie]),(0,k.useEffect)(()=>{V.current=f},[f]),(0,k.useEffect)(()=>{H.current=g},[g]);let q=(0,k.useCallback)(e=>{v(t=>{let n=new URLSearchParams(t);return e?(G.current=null,n.set(`analytics_report`,e),n.delete(`report`),n.delete(`brief_report`),n.delete(`evidence_key`)):(G.current=t.get(`analytics_report`)??t.get(`report`),n.delete(`analytics_report`),n.delete(`report`),n.delete(`brief_report`),n.delete(`evidence_key`)),n},{replace:!0})},[v]),ct=(0,k.useCallback)(()=>{!W.current&&!I||(W.current=!1,K.current=null,q(null))},[I,q]);(0,k.useEffect)(()=>{if(!e||!L||!R){st.current=null;return}let t=`${L}:${R}`;st.current!==t&&(st.current=t,S.mutate({reportId:L,evidenceKey:R},{onSuccess:e=>{v(t=>{let n=new URLSearchParams(t);return n.set(`analytics_report`,e.analytics_report.report_id),n.delete(`brief_report`),n.delete(`evidence_key`),n.delete(`report`),n},{replace:!0})},onError:()=>{st.current=null}}))},[S,L,R,e,v]);let J=(0,k.useMemo)(()=>{let e=O.trim().toLowerCase();return C.filter(t=>{if(j!==`all`&&t.analysis_kind!==j)return!1;if(!e)return!0;let n=w.get(t.report_id)?.summary;return[t.title,t.description??``,t.tool_name,de(t.analysis_kind),oe(t.source),n?.metricLabel??``].some(t=>t.toLowerCase().includes(e))})},[j,C,O,w]),lt=(0,k.useMemo)(()=>ke({appId:e,reports:C,visibleReports:J,search:O,kindFilter:j,isLoading:y.isLoading,route:c.pathname}),[J,j,c.pathname,C,y.isLoading,O,e]),ut=(0,k.useMemo)(()=>{let e=J.filter(e=>ue(e).freshness.stale),t=J.filter(e=>e.latest_run?.status===`failed`),n=J.filter(e=>!e.latest_run);return{pageType:`analytics_reports_library`,pageLabel:Te(lt),statLine:ye(lt),drawerStarterPrompts:[`Audit these saved reports and tell me which ones are stale, duplicated, or unused.`,`Find report coverage gaps in this analytics workspace.`,`Suggest a dashboard structure from these saved reports.`],analyticsContext:lt,totalReports:C.length,visibleReports:J.length,staleReports:e.length,failedReports:t.length,neverRunReports:n.length}},[J,C.length,lt]);(0,k.useEffect)(()=>(l(ut),d(y.isLoading),()=>{l(null),d(!1)}),[ut,y.isLoading,d,l]);let{columnWidths:dt,handleColumnResizeStart:ft,handleColumnResizeKeyDown:pt}=qe(!1),Y=(0,k.useCallback)((t,n,r={})=>{e&&(U.current+=1,ee({kind:`builder`,appId:e,reportId:t.reportId,title:t.title,titleOrigin:t.titleOrigin,source:r.source??(t.mode===`edit`?`analytics_report_edit`:`analytics_new_report`),...r.primaryAction?{primaryAction:r.primaryAction}:{},toolName:t.kind===`retention`?`query_retention`:t.kind===`funnel`?`query_funnels`:`query_metrics`,initialConfig:t.config,initialFunnelConfig:t.funnelConfig,initialRetentionConfig:t.retentionConfig,initialPreview:t.initialPreview,initialFunnelPreview:t.initialFunnelPreview,initialRetentionPreview:t.initialRetentionPreview,vizSpec:t.vizSpec,initialSettingsMode:r.initialSettingsMode,headerActions:r.headerActions,visualizationActions:r.visualizationActions,onMetricAction:n,onClose:r.onClose,onSaved:e=>{E(e.report_id),y.refetch()}}))},[ee,y,e]),X=(0,k.useCallback)(e=>{if(!f){e();return}m({reason:`navigation`,invokeOnClose:!1,restoreFocus:!1,afterClose:e})},[f,m]);async function mt(e,t={}){if(Pt(e))return e;let{reopen:n=!1,initialSettingsMode:r=`hidden`,trigger:i=`manual`}=t,a=U.current;P(e.report_id);try{await le.mutateAsync({reportId:e.report_id,trigger:i});let t=(await y.refetch()).data?.data.find(t=>t.report_id===e.report_id)??e,o=V.current?.reportId===e.report_id,s=o&&H.current;return n&&U.current===a&&o&&!s&&$(t,r,{skipAutoRefresh:!0,syncUrl:W.current}),t}finally{P(null)}}function ht(e){D.error(`Analytics report action failed`,e)}async function gt(e){if(t.isBlocked||!e.current_revision)return;let n=await ce.mutateAsync({title:`${e.title} copy`,description:e.description,analysis_kind:e.analysis_kind,tool_name:e.tool_name,source:`user`,is_listed:!0,query_spec:e.current_revision.query_spec,viz_spec:e.current_revision.viz_spec});E(n.report_id),ct(),$(n,`hidden`),y.refetch()}async function _t(e){if(t.isBlocked)return;let n=await fe.mutateAsync(e.report_id);E(n.report_id),q(n.report_id),$(n,`hidden`,{syncUrl:!0,skipAutoRefresh:!0}),y.refetch()}async function vt(e){if(window.confirm(`Delete "${e.title}"?`)){it(e.report_id);try{await b.mutateAsync(e.report_id),T===e.report_id&&(E(null),(I===e.report_id||W.current)&&(W.current=!1,q(null))),te()}finally{it(null)}}}function yt(t,n){let r=be(t,n,{appId:e,route:c.pathname});s({entityType:`report`,entityId:t.report_id,entityLabel:t.title,contextSnapshot:{page_type:`analytics_report_viewer`,report_id:t.report_id,report_title:t.title,[Ee]:r}})}function Z(e){if(_e(e))return t=>{let n=xe(at.current,c.pathname),r=ve({label:t.metricLabel,metric_key:t.metricKey,value:t.displayValue,relative_delta:t.deltaDisplay,report_id:e.report_id},n);s({entityType:`metric`,entityId:t.metricKey,entityLabel:t.metricLabel,contextSnapshot:{page_type:`analytics_metric`,metric_key:t.metricKey,metric_label:t.metricLabel,metric_value:t.displayValue,metric_relative_delta:t.deltaDisplay,metric_intent:t.intent,report_id:e.report_id,report_title:e.title,[Ee]:r}})}}function bt(){let e=W.current;U.current+=1,V.current=null,H.current=!1,W.current=!1,K.current=null,E(null),e&&q(null)}function xt(e,i){return s=>{if(Pt(e))return(0,Q.jsx)(p,{active:t.isBlocked,reason:t.reason,children:(0,Q.jsx)(Ae,{label:`Save to Reports`,icon:(0,Q.jsx)(r,{"aria-hidden":`true`}),onClick:()=>{_t(e).catch(ht)},disabled:t.isBlocked,loading:fe.isPending})});let c=s?.report_id===e.report_id?s.preview_updated_at:void 0,l=c?Mt(c):Nt(e);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Ae,{label:`Refresh report`,icon:(0,Q.jsx)(a,{"aria-hidden":`true`}),onClick:()=>void mt(e,{reopen:!0,initialSettingsMode:i}),loading:le.isPending&&N===e.report_id}),l?(0,Q.jsx)(It,{title:l.title,$stale:l.stale,children:l.label}):null,(0,Q.jsx)(p,{active:t.isBlocked,reason:t.reason,children:(0,Q.jsx)(Ae,{label:`Copy report`,icon:(0,Q.jsx)(n,{"aria-hidden":`true`}),onClick:()=>{gt(e).catch(ht)},disabled:!e.current_revision||ce.isPending||t.isBlocked,loading:ce.isPending})}),(0,Q.jsx)(Ae,{label:`Delete report`,icon:(0,Q.jsx)(o,{"aria-hidden":`true`}),onClick:()=>void vt(e),disabled:b.isPending&&F===e.report_id,loading:b.isPending&&F===e.report_id})]})}}function St(e){let t=w.get(e.report_id)?.summary;return t?(0,Q.jsxs)(ge,{type:`button`,variant:`default`,size:`sm`,onClick:()=>yt(e,t),"aria-label":`Analyse ${e.title}`,children:[(0,Q.jsx)(Me,{size:15,idSuffix:`analytics-modal-${e.report_id}`}),`Analyse`]}):null}function Ct(e,t,n){if(n.skipAutoRefresh||t!==`hidden`||Pt(e)||!jt(e))return;let r=At(e);ot.current.has(r)||(ot.current.add(r),mt(e,{reopen:!0,initialSettingsMode:t,trigger:`dashboard_open`}))}function $(t,n,r={}){if(E(t.report_id),W.current=r.syncUrl===!0,K.current=At(t),Pt(t)||!Se(t)){U.current+=1,ee({kind:`viewer`,appId:e,reportId:t.report_id,title:t.title,source:`analytics_report_view`,toolName:t.tool_name,initialPreview:x(t),initialFunnelPreview:pe(t),initialRetentionPreview:Oe(t),headerActions:xt(t,n),visualizationActions:St(t),querySpec:t.current_revision?.query_spec,vizSpec:t.current_revision?.viz_spec,onClose:bt}),Ct(t,n,r);return}Y(we(t),Z(t),{source:n===`hidden`?`analytics_report_view`:`analytics_report_edit`,initialSettingsMode:n,headerActions:xt(t,n),visualizationActions:St(t),onClose:bt}),Ct(t,n,r)}function wt(e){Se(e)&&X(()=>{ct(),$(e,`open`)})}function Tt(e){X(()=>{ct(),$(e,`hidden`)})}function Ot(e){Tt(e)}(0,k.useEffect)(()=>{if(!I){G.current=null,K.current=null,W.current&&f?.reportId===T&&f.source?.startsWith(`analytics_report`)&&(W.current=!1,T&&E(null),te({invokeOnClose:!1}));return}if(G.current===I)return;let e=z??B.data??null;if(!e)return;let t=At(e);E(e.report_id),!(f?.reportId===e.report_id&&K.current===t)&&$(e,`hidden`,{syncUrl:!0})},[te,f?.reportId,f?.source,I,z,B.data,T]);let Ft=Ge(e||null);(0,k.useEffect)(()=>{if(!e||!I)return;let t=z??B.data??null;t&&Ft.mutate({entityType:`report`,entityId:t.report_id,entityLabel:t.title??null})},[e,I,z,B.data]);let Lt=(0,k.useCallback)(()=>{let e=W.current||!!I;U.current+=1,V.current=null,H.current=!1,W.current=!1,K.current=null,E(null),e&&q(null)},[I,q]),Rt=(0,k.useCallback)(()=>{X(()=>{Lt(),Y(Ce())})},[Lt,Y,X]),zt=(0,k.useCallback)(e=>{A(!1),X(()=>{Lt(),Y(Fe(e),void 0,{source:`analytics_report_template`,primaryAction:`add_to_dashboard`})})},[Lt,Y,X]),Bt=(0,k.useCallback)(e=>{A(!1),rt(e.id)},[]);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(Je,{children:[(0,Q.jsxs)(Ye,{children:[(0,Q.jsx)(Ze,{children:(0,Q.jsx)(h,{value:O,onChange:e=>We(e.target.value),placeholder:`Search reports...`,"aria-label":`Search reports`})}),(0,Q.jsx)($e,{value:j,onChange:e=>M(e.target.value),"aria-label":`Filter by report type`,children:kt.map(e=>(0,Q.jsx)(`option`,{value:e.value,children:e.label},e.value))}),(0,Q.jsxs)(Qe,{children:[J.length,` of `,y.data?.total??C.length,` reports`]})]}),(0,Q.jsxs)(Xe,{children:[(0,Q.jsxs)(ge,{size:`sm`,variant:`outline`,onClick:()=>A(!0),disabled:!e,"data-testid":`analytics-browse-templates`,children:[(0,Q.jsx)(i,{size:16,"aria-hidden":!0}),`Browse templates`]}),(0,Q.jsxs)(ge,{size:`sm`,onClick:Rt,disabled:!e,children:[(0,Q.jsx)(u,{size:16,"aria-hidden":!0}),`New report`]})]})]}),(0,Q.jsx)(et,{children:(0,Q.jsx)(tt,{children:(0,Q.jsx)(Et,{appId:e,reports:J,reportRowMeta:w,columnWidths:dt,isLoading:y.isLoading,selectedReportId:T,deletingReportId:F,refreshingReportId:N,isDeletePending:b.isPending,isRefreshPending:le.isPending,onSelectReport:Ot,onViewReport:Tt,onAskTara:yt,onRefreshReport:e=>void mt(e),onEditReport:wt,onDeleteReport:vt,onColumnResizeStart:ft,onColumnResizeKeyDown:pt})})}),(0,Q.jsx)(Pe,{appId:e,open:Ke,onOpenChange:A,initialTab:`reports`,onUseReportTemplate:zt,onUseDashboardTemplate:Bt}),nt===null?null:(0,Q.jsx)(Ue,{open:!0,onOpenChange:e=>{e||rt(null)},initialTemplateId:nt})]})},It=g.span`
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({$stale:e,theme:t})=>e?t.colors.severity.warning.bg:t.colors.background.secondary};
  color: ${({$stale:e,theme:t})=>e?t.colors.severity.warning.text:t.colors.text.secondary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  white-space: nowrap;
`;export{Ft as AnalyticsPage};