import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t,H as n,Tr as r,Ur as i,y as a}from"./icons-vendor-C23rQ2ix.js";import{At as o,Dt as s,Ht as c,Pt as l,Tt as u,Vt as d,Xt as f,Yt as p,at as m,bn as h,cn as g,gn as _,kt as v,on as y,ot as b,pn as ee,wt as x,yn as S,zt as C}from"./ds-BJhQ4zht.js";import{f as te,n as w,u as ne}from"./router-vendor-DDSrk2O2.js";import{D as T}from"./ui-vendor-CUROeZIN.js";import{O as E}from"./markdown-vendor-BoH6QLuc.js";import{Bt as D,Gt as re,Ht as ie,Jt as O,Kt as ae,Rt as oe,Ut as se,Vt as k,Wt as A,Yt as ce,Zt as le,qt as ue}from"./PrimaryNav-CxHD5Sf1.js";import{r as j,t as de}from"./fetchClient-BF44M5G_.js";import{n as fe,r as M}from"./NavigationContext-DTwRip-h.js";import{u as N}from"./animations-D6JAIVtz.js";import{t as P}from"./utils-DMoTunZH.js";import{u as F}from"./Dialog-BFakgPRd.js";import{Ci as pe,fn as I,hn as L,mn as R,pn as me,yn as he}from"./TaraChatContext-Ne5fUqNv.js";import{t as z}from"./Shimmer-BQNKs0BP.js";import{t as B}from"./loading-Cm5yT19R.js";import"./error-CrcmsCT-.js";import{i as V,n as H}from"./ErrorBoundary-BIvdWyH0.js";import{t as U}from"./useSubscriptionGate-BclSWIGQ.js";import{t as ge}from"./usePageSearchParams-Dppn5wBJ.js";import{d as W}from"./ticketingApi-KgUEfcZP.js";import{Y as _e,dt as G,ft as K,q as ve}from"./index-rXoDQG7j.js";import{n as ye}from"./ExplorerLayout-BMe5mI5t.js";var q=e(t(),1),J=E(),Y=[{label:`Today`,days:0},{label:`Last 7 days`,days:7},{label:`Last 30 days`,days:30},{label:`Last 90 days`,days:90}];function X(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function Z(e){return e===0?1:e}function be(e){let t=Z(e),n=S(_(h())),r=new Date(n);return r.setDate(r.getDate()-(t-1)),{date_from:X(r),date_to:X(n),relativeDate:`last_${t}d`}}function xe(e,t){let n=X(S(_(h())));if(e===t&&t===n)return`Today`;let r=new Date(`${e}T00:00:00`),i=new Date(`${t}T00:00:00`),a=Math.round((i.getTime()-r.getTime())/(1e3*60*60*24))+1;return Y.find(e=>e.days>0&&Z(e.days)===a)?.label??`Custom`}var Se=({activeTab:e,platform:t,dateFrom:n,dateTo:i,onTabChange:a,onPlatformChange:l,onDateRangeChange:f})=>{let p=(0,q.useMemo)(()=>xe(n,i),[n,i]),h=Y.some(e=>e.label===p)?p:`Custom`;return(0,J.jsxs)(`div`,{className:`sticky top-[56px] z-[19] flex min-h-14 shrink-0 items-center justify-between gap-4 border-b border-[var(--border)] bg-[var(--background)] px-6`,children:[(0,J.jsx)(C,{value:e,onValueChange:e=>a(e),className:`min-w-0`,children:(0,J.jsxs)(d,{variant:`underline`,"aria-label":`Stability views`,className:`h-14 gap-6`,children:[(0,J.jsx)(c,{value:`overview`,variant:`underline`,id:`stability-tab-overview`,"aria-controls":`stability-panel-overview`,className:`h-14 pb-0 pt-0`,children:`Overview`}),(0,J.jsx)(c,{value:`issues`,variant:`underline`,id:`stability-tab-issues`,"aria-controls":`stability-panel-issues`,className:`h-14 pb-0 pt-0`,children:`Issues`}),(0,J.jsx)(c,{value:`releases`,variant:`underline`,id:`stability-tab-releases`,"aria-controls":`stability-panel-releases`,className:`h-14 pb-0 pt-0`,children:`Releases`})]})}),(0,J.jsxs)(`div`,{className:`flex min-w-0 flex-wrap items-center justify-end gap-3`,children:[(0,J.jsx)(m,{value:t,onValueChange:e=>{(e===`all`||e===`android`||e===`ios`)&&l(e)},grow:!1,"aria-label":`Platform filter`,children:ae.map(e=>(0,J.jsx)(b,{value:e.value,children:e.label},e.value))}),(0,J.jsxs)(x,{value:h,onValueChange:e=>{let t=Y.find(t=>t.label===e);if(!t)return;let n=be(t.days);f(n.date_from,n.date_to,n.relativeDate)},children:[(0,J.jsxs)(v,{size:`inline`,"aria-label":`Date range`,className:`h-8 min-w-[140px]`,children:[(0,J.jsx)(r,{"aria-hidden":`true`,className:`size-3.5 text-[color:var(--muted-foreground)]`}),(0,J.jsx)(o,{placeholder:`Date range`})]}),(0,J.jsxs)(u,{align:`end`,children:[Y.map(e=>(0,J.jsx)(s,{value:e.label,children:e.label},e.label)),h===`Custom`?(0,J.jsx)(s,{value:`Custom`,disabled:!0,children:`Custom`}):null]})]})]})]})};function Ce(e,t,n){return N.issueDetail(e,t,n)}function Q(e){return e===`crash`?`Crash`:`Freeze`}function we(e){return e===`crash`?`Crashes`:`Freezes & ANRs`}function $(e){return e.title?.trim()||e.signature||`Unknown issue`}function Te(e){let t=[];return e.top_screen&&t.push(`top screen: ${e.top_screen}`),e.issue_type===`freeze`&&(e.median_duration_sec!=null&&t.push(`median ${Me(e.median_duration_sec)}`),e.max_duration_sec!=null&&t.push(`max ${Me(e.max_duration_sec)}`)),t.join(` · `)}function Ee(e){return e===`critical`||e===`high`?`Critical`:e===`warning`||e===`medium`||e===`persistent`?`Warning`:e===`good`||e===`low`?`Low`:`Unknown`}function De(e){return e===`critical`||e===`high`?`critical`:e===`warning`||e===`medium`||e===`persistent`?`warning`:e===`good`||e===`low`?`good`:`secondary`}function Oe(e){return e.triage?.status??`open`}function ke(e){return e===`resolved`?`Resolved`:e===`snoozed`?`Snoozed`:e===`ignored`?`Ignored`:`Open`}function Ae(e,t=2){return e==null||!Number.isFinite(e)?`--`:`${e.toFixed(t)}%`}function je(e){return e==null||!Number.isFinite(e)?`--`:Math.abs(e)>=10?`${e.toFixed(1)}%`:`${e.toFixed(2)}%`}function Me(e){if(!Number.isFinite(e))return`--`;if(e<1)return`${Math.round(e*1e3)}ms`;if(e<60)return`${e.toFixed(+(e<10))}s`;let t=Math.floor(e/60),n=Math.round(e%60);return n>0?`${t}m ${n}s`:`${t}m`}var Ne=[{value:`open`,label:`Open`},{value:`resolved`,label:`Resolved`},{value:`snoozed`,label:`Snoozed`},{value:`ignored`,label:`Ignored`},{value:`all`,label:`All`}],Pe=[{value:`open`,label:`Open`},{value:`resolved`,label:`Resolved`},{value:`snoozed`,label:`Snoozed`},{value:`ignored`,label:`Ignored`}];function Fe(e){return`${e.issue_type}:${e.group_id}`}function Ie(e){return`issue:${Fe(e)}`}function Le(e){return e===`crash`?`Crash`:`Freeze`}function Re(e){return`${Le(e.issue_type)}: ${$(e)} (${e.affected_users} users)`}function ze(e){if(!e.length)return`--`;let t=e.slice(0,3),n=e.length-t.length;return n>0?`${t.join(`, `)} +${n}`:t.join(`, `)}var Be=({appId:e,rows:t,isLoading:r,error:i,onRetry:c,facet:d,counts:m,status:h,newOnly:g,search:_,sortBy:b,sortOrder:ee,pagination:S,hiddenBelowFloorCount:C,minOccurrences:te,onFacetChange:w,onStatusChange:ne,onNewOnlyChange:T,onSearchChange:E,onSortChange:D,onShowBelowFloor:re,onPageChange:ie,onOpenIssue:ae})=>{let oe=M()?.selectedOrgId||null,k=U(oe,e||null),A=se(e),[le,j]=(0,q.useState)({}),[de,fe]=(0,q.useState)(null),[N,P]=(0,q.useState)(null),pe=(0,q.useMemo)(()=>t.map(e=>({entity_type:`issue`,entity_id:Fe(e)})),[t]),I=W(e||null,pe),L=(0,q.useCallback)((e,t)=>{if(k.isBlocked)return;let n=Fe(e),r=le[n]??Oe(e);fe(null),j(e=>({...e,[n]:t})),A.mutate({issueType:e.issue_type,groupId:e.group_id,payload:{status:t}},{onSuccess:e=>{j(t=>({...t,[n]:e.status}))},onError:e=>{j(e=>({...e,[n]:r})),fe(e instanceof Error?e.message:`Status update failed`)}})},[k.isBlocked,le,A]),R=(0,q.useCallback)(e=>{P(e)},[]),me=(0,q.useCallback)(e=>{e||P(null)},[]),he=(0,q.useMemo)(()=>ue.find(e=>e.value===b)?.label??`Affected users`,[b]),B=N?Fe(N):``;return(0,J.jsxs)(`div`,{role:`tabpanel`,id:`stability-panel-issues`,"aria-labelledby":`stability-tab-issues`,className:`flex min-h-0 flex-col gap-4 p-6`,children:[(0,J.jsxs)(f,{className:`flex flex-col gap-3 p-4`,children:[(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,J.jsx)(Ve,{active:d===`all`,label:`All`,count:m.all,onClick:()=>w(`all`)}),(0,J.jsx)(Ve,{active:d===`crash`,label:`Crashes`,count:m.crash,onClick:()=>w(`crash`)}),(0,J.jsx)(Ve,{active:d===`freeze`,label:`Freezes & ANRs`,count:m.freeze,onClick:()=>w(`freeze`)}),(0,J.jsxs)(F,{type:`button`,variant:g?`secondary`:`outline`,size:`sm`,onClick:()=>T(!g),className:`h-8`,children:[`New`,(0,J.jsx)(`span`,{className:`rounded-full bg-[var(--muted)] px-1.5 py-px font-mono text-[11px]`,children:O(m.new)})]}),(0,J.jsxs)(`div`,{className:`ml-auto flex min-w-0 flex-wrap items-center justify-end gap-2`,children:[(0,J.jsxs)(`div`,{className:`relative min-w-[240px] max-w-full`,children:[(0,J.jsx)(n,{"aria-hidden":`true`,className:`pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[color:var(--muted-foreground)]`}),(0,J.jsx)(y,{type:`search`,value:_,placeholder:`Search signature, screen, version...`,"aria-label":`Search issues`,onChange:e=>E(e.target.value),className:`h-8 pl-8 text-[13px]`})]}),(0,J.jsxs)(x,{value:h,onValueChange:e=>ne(e),children:[(0,J.jsx)(v,{size:`inline`,"aria-label":`Status filter`,className:`h-8 min-w-[128px]`,children:(0,J.jsx)(o,{placeholder:`Status`})}),(0,J.jsx)(u,{align:`end`,children:Ne.map(e=>(0,J.jsx)(s,{value:e.value,children:e.label},e.value))})]}),(0,J.jsxs)(x,{value:b,onValueChange:e=>D(e,`desc`),children:[(0,J.jsxs)(v,{size:`inline`,"aria-label":`Sort issues`,className:`h-8 min-w-[174px]`,children:[(0,J.jsx)(`span`,{className:`text-[color:var(--muted-foreground)]`,children:`Sort:`}),(0,J.jsx)(o,{children:he})]}),(0,J.jsx)(u,{align:`end`,children:ue.map(e=>(0,J.jsx)(s,{value:e.value,children:e.label},e.value))})]})]})]}),C>0&&te!==0?(0,J.jsxs)(`div`,{className:`text-[12px] text-[color:var(--muted-foreground)]`,role:`note`,children:[`Hiding `,O(C),` groups with < 3 occurrences`,` `,(0,J.jsx)(`button`,{type:`button`,className:`font-medium text-[color:var(--foreground)] underline decoration-[var(--zinc-300)] underline-offset-2`,onClick:re,children:`show anyway`})]}):null,de?(0,J.jsx)(`div`,{role:`alert`,className:`rounded-[var(--radius-sm)] border border-[var(--color-critical-border)] bg-[var(--color-critical-bg-subtle)] px-3 py-2 text-[12px] text-[color:var(--color-critical-text)]`,children:de}):null]}),(0,J.jsx)(f,{className:`min-h-0 overflow-hidden p-0`,children:i&&!t.length?(0,J.jsx)(`div`,{className:`p-4`,children:(0,J.jsx)(V,{error:H(i,`issues list`),onRetry:c})}):r&&!t.length?(0,J.jsx)(`div`,{className:`flex flex-col gap-2 p-4`,children:Array.from({length:8}).map((e,t)=>(0,J.jsx)(z,{variant:`block`,height:`46px`,index:t},`issues-row-${t}`))}):t.length===0?(0,J.jsx)(`div`,{className:`p-8 text-center text-[13px] text-[color:var(--muted-foreground)]`,children:`No issues found for this filter set.`}):(0,J.jsx)(`div`,{className:`overflow-x-auto`,children:(0,J.jsxs)(`table`,{className:`w-full min-w-[1180px] border-collapse text-[13px]`,children:[(0,J.jsx)(`thead`,{children:(0,J.jsxs)(`tr`,{className:`bg-[var(--muted)] text-left text-[12px] font-medium text-[color:var(--muted-foreground)]`,children:[(0,J.jsx)(`th`,{className:`h-10 px-4`,children:`Type`}),(0,J.jsx)(`th`,{className:`h-10 px-4`,children:`Issue`}),(0,J.jsx)(`th`,{className:`h-10 px-4 text-right`,children:`Users`}),(0,J.jsx)(`th`,{className:`h-10 px-4 text-right`,children:`Occurrences`}),(0,J.jsx)(`th`,{className:`h-10 px-4 text-right`,children:`Sessions`}),(0,J.jsx)(`th`,{className:`h-10 px-4`,children:`Severity`}),(0,J.jsx)(`th`,{className:`h-10 px-4`,children:`Versions`}),(0,J.jsx)(`th`,{className:`h-10 px-4`,children:`First seen`}),(0,J.jsx)(`th`,{className:`h-10 px-4`,children:`Last seen`}),(0,J.jsx)(`th`,{className:`h-10 px-4`,children:`Status`})]})}),(0,J.jsx)(`tbody`,{children:t.map(t=>{let n=Fe(t),r=le[n]??Oe(t),i=Te(t);return(0,J.jsxs)(`tr`,{tabIndex:0,"aria-label":`${Q(t.issue_type)} issue ${$(t)}`,className:`cursor-pointer border-t border-[var(--border)] text-[color:var(--foreground)] hover:bg-[var(--sidebar-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--foreground)]`,onClick:()=>ae(t),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),ae(t))},children:[(0,J.jsx)(`td`,{className:`px-4 py-3`,children:(0,J.jsx)(p,{variant:`secondary`,shape:`pill`,className:`uppercase`,children:Q(t.issue_type)})}),(0,J.jsx)(`td`,{className:`px-4 py-3`,children:(0,J.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-1`,children:[(0,J.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2`,children:[(0,J.jsx)(`span`,{className:`truncate font-medium`,children:$(t)}),t.is_new?(0,J.jsx)(p,{variant:`info`,shape:`pill`,className:`shrink-0 uppercase`,children:`NEW`}):null,t.triage?.regressed?(0,J.jsx)(p,{variant:`critical`,shape:`pill`,className:`shrink-0`,children:`Regressed`}):null]}),(0,J.jsx)(`span`,{className:`truncate font-mono text-[12px] text-[color:var(--muted-foreground)]`,children:t.signature}),i?(0,J.jsx)(`span`,{className:`truncate text-[12px] text-[color:var(--muted-foreground)]`,children:i}):null]})}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-right font-mono [font-variant-numeric:tabular-nums]`,children:O(t.affected_users)}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-right font-mono [font-variant-numeric:tabular-nums]`,children:O(t.occurrences)}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-right font-mono [font-variant-numeric:tabular-nums]`,children:O(t.affected_sessions)}),(0,J.jsx)(`td`,{className:`px-4 py-3`,children:(0,J.jsx)(p,{variant:De(t.severity),shape:`pill`,children:Ee(t.severity)})}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-[color:var(--muted-foreground)]`,children:ze(t.versions)}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-[color:var(--muted-foreground)]`,children:ce(t.first_seen)}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-[color:var(--muted-foreground)]`,children:ce(t.last_seen)}),(0,J.jsx)(`td`,{className:`px-4 py-3`,onClick:e=>e.stopPropagation(),children:(0,J.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,J.jsx)(l,{active:k.isBlocked,reason:k.reason,children:(0,J.jsxs)(x,{value:r,disabled:k.isBlocked,onValueChange:e=>L(t,e),children:[(0,J.jsx)(v,{size:`inline`,"aria-label":`Status for ${$(t)}`,children:(0,J.jsx)(o,{children:ke(r)})}),(0,J.jsx)(u,{align:`end`,children:Pe.map(e=>(0,J.jsx)(s,{value:e.value,children:e.label},e.value))})]})}),(I.data?.links[Ie(t)]??[]).length>0?(0,J.jsx)(G,{appId:e,tickets:I.data?.links[Ie(t)]??[],source:`issues_inbox`,entityType:`issue`,compact:!0}):(0,J.jsx)(F,{type:`button`,variant:`ghost`,size:`icon`,"aria-label":`Create ticket for ${$(t)}`,title:`Create ticket`,onClick:()=>R(t),children:(0,J.jsx)(a,{"aria-hidden":!0})})]})})]},n)})})]})})}),(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3 text-[12px] text-[color:var(--muted-foreground)]`,children:[(0,J.jsxs)(`div`,{children:[`Page `,S.current,` / `,S.pages,` · `,O(S.total),` total`,d===`all`?``:` · ${we(d)}`,ee===`asc`?` · ascending`:``]}),(0,J.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,J.jsx)(F,{type:`button`,variant:`outline`,size:`sm`,disabled:S.current<=1,onClick:()=>ie(Math.max(1,S.current-1)),children:`Previous`}),(0,J.jsx)(F,{type:`button`,variant:`outline`,size:`sm`,disabled:S.current>=S.pages,onClick:()=>ie(Math.min(S.pages,S.current+1)),children:`Next`})]})]}),N?(0,J.jsx)(K,{open:!0,onOpenChange:me,orgId:oe,appId:e,entityType:`issue`,entityId:B,source:`issues_inbox`,summary:Re(N),context:{}},B):null]})},Ve=({active:e,label:t,count:n,onClick:r})=>(0,J.jsxs)(F,{type:`button`,variant:e?`secondary`:`outline`,size:`sm`,onClick:r,className:`h-8`,children:[t,(0,J.jsx)(`span`,{className:`rounded-full bg-[var(--muted)] px-1.5 py-px font-mono text-[11px]`,children:O(n)})]});T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`,T.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,T.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,T.div`
  display: flex;
  align-items: center;
  gap: 1px;
  background: ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  overflow: hidden;
`,T.button`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e,$active:t})=>t?e.typography.fontWeight.semibold:e.typography.fontWeight.medium};
  color: ${({theme:e,$active:t})=>t?e.colors.text.inverse:e.colors.text.secondary};
  background: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[500]:e.colors.background.surface};
  border: none;
  padding: 5px 12px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[600]:e.colors.background.hover};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: -2px;
    position: relative;
    z-index: 1;
  }
`,T.select`
  appearance: none;
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  padding: 6px 28px 6px 12px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;

  &:hover {
    border-color: ${({theme:e})=>e.colors.border.strong};
  }

  &:focus-visible {
    outline: none;
    border-color: ${({theme:e})=>e.colors.border.focus};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.uxcam.indigo[100]};
  }
`;var He=T.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3px;
  height: 38px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
  background: ${({theme:e})=>e.colors.background.hover};

  opacity: 0;
  pointer-events: none;
  transition: opacity 120ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (hover: none) {
    opacity: 1;
    pointer-events: auto;
  }
`;T.div`
  position: relative;

  &:hover ${He} {
    opacity: 1;
    pointer-events: auto;
  }

  /* When hovering the shell (including ActionOverlay), ensure the
     inner card (ds/Card with .ds-card class) also shows its hover
     background so the entire card highlights uniformly, not just
     the bottom 38px overlay. */
  &:hover .ds-card {
    background: ${({theme:e})=>e.colors.background.hover};
  }
`,T.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({theme:e,$severity:t})=>e.colors.severity[t].icon};
  box-shadow: 0 0 6px 1px ${({theme:e,$severity:t})=>t===`critical`?`${e.colors.severity.critical.icon}66`:t===`warning`?`${e.colors.severity.warning.icon}44`:`${e.colors.severity.good.icon}44`};
  cursor: help;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: scale(1.25);
    box-shadow: 0 0 10px 2px ${({theme:e,$severity:t})=>t===`critical`?`${e.colors.severity.critical.icon}88`:t===`warning`?`${e.colors.severity.warning.icon}66`:`${e.colors.severity.good.icon}66`};
  }
`,T.button`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2px 6px;
  height: 22px;
  border: 1px solid ${({theme:e})=>e.colors.border.subtle};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.secondary};
  cursor: pointer;
  white-space: nowrap;
  transition: background 120ms ease, color 120ms ease, border-color 120ms ease;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    border-color: ${({theme:e})=>e.colors.border.default};
    color: ${({theme:e})=>e.colors.text.primary};
  }

  &:active {
    background: ${({theme:e})=>e.colors.background.sunken};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: 1px;
  }

  &:disabled {
    cursor: wait;
    opacity: 0.5;
  }
`,T.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  line-height: 1;
`,T.div`
  display: grid;
  grid-template-columns: repeat(${4}, 1fr);
  gap: 16px;

  @media (max-width: 1400px) {
    gap: 12px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,T.div`
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
`,T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1440px) {
    display: contents;
  }
`,T.span`
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
`,T.div`
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
`,T.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: 4px;
  /* Leave room for ActionOverlay (38px) so narration doesn't get clipped */
  padding-bottom: 38px;

  @media (max-width: 1440px) {
    width: 100%;
    order: 4;
  }
`,T.span`
  font-size: 13px;
  color: #a1a1aa;
  line-height: 1.75;
`,T.span`
  font-size: 13px;
  font-weight: 500;
  color: var(--foreground, #09090b);
`,T.span`
  font-weight: 400;
`,T.span`
  font-size: 13px;
  font-weight: 400;
  color: #a1a1aa;
`;var Ue=[`#6366F1`,`#F59E0B`,`#10B981`,`#F43F5E`,`#3B82F6`,`#8B5CF6`,`#14B8A6`,`#F97316`],We=`#94A3B8`;function Ge(e){if(!e.match(/^(\d{4})-(\d{2})-(\d{2})$/))return e;let t=new Date(`${e}T00:00:00`);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`})}function Ke(e,t,n){if(!t||!n||t===n)return null;let r=Ge(t),i=Ge(n);return r===i?null:`${r} \u2013 ${i}`}function qe(e){let{buckets:t,top_issues_legend:n}=e;if(t.length===0)return[];let r=new Set(n.map(e=>e.group_id));return t.map(e=>{let t={label:Ge(e.label),rate_pct:e.rate_pct,tooltipRange:Ke(e.label,e.bucket_start,e.bucket_end),total_sessions:e.total_sessions,total_issues:e.total_issues};for(let e of n)t[e.group_id]=0;t.__other__=0;for(let n of e.issues)r.has(n.group_id)?t[n.group_id]=n.count:t.__other__+=n.count;return t.__other__+=e.other_count,t})}function Je(e){return e.map(e=>({group_id:e.group_id,title:e.title,color:Ue[e.color_index%Ue.length]}))}function Ye(e,t=25){return e.length<=t?e:`${e.slice(0,t-1)}\u2026`}function Xe(e,t){let n=e.reduce((e,t)=>Math.max(e,t.rate_pct??0),0);return Math.max(t*1.2,n*1.2,.01)}function Ze(){return{axisLabel:I(`--chart-axis-label`,`#667085`),axisLine:I(`--chart-axis-line`,`#D0D5DD`),gridLine:I(`--chart-grid-line`,`#EEF2F7`),good:I(`--color-good-text`,`#16A34A`),goodBg:I(`--color-good-bg-subtle`,`rgba(22,163,74,0.08)`),warning:I(`--color-warning-text`,`#D97706`),warningBg:I(`--color-warning-bg-subtle`,`rgba(217,119,6,0.08)`),critical:I(`--color-critical-text`,`#DC2626`),criticalBg:I(`--color-critical-bg-subtle`,`rgba(220,38,38,0.08)`)}}function Qe(e){return e===0?`0%`:e<.01?`<0.01%`:e<1?`${e.toFixed(2)}%`:`${e.toFixed(1)}%`}function $e(e){return e===0?`0`:Math.abs(e)>=1e6?`${(e/1e6).toFixed(1)}M`:Math.abs(e)>=1e3?`${(e/1e3).toFixed(1)}K`:String(Math.round(e))}function et(e,t,n){return r=>{let i=(Array.isArray(r)?r:[r])[0]?.dataIndex,a=i==null?void 0:e[i];if(!a)return``;let o=a.tooltipRange??a.label,s=[];a.rate_pct!=null&&s.push(`
        <div style="display:flex;align-items:center;gap:8px;min-width:180px;margin-top:6px;">
          <span style="flex:1;">Rate</span>
          <strong style="color:${n};">${a.rate_pct.toFixed(2)}%</strong>
        </div>
      `);for(let e of t){let t=a[e.group_id];t&&s.push(`
        <div style="display:flex;align-items:center;gap:8px;min-width:180px;margin-top:4px;">
          <span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${e.color};flex-shrink:0;"></span>
          <span style="flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${R(Ye(e.title,30))}</span>
          <strong>${t.toLocaleString()}</strong>
        </div>
      `)}let c=a.__other__;return c>0&&s.push(`
        <div style="display:flex;align-items:center;gap:8px;min-width:180px;margin-top:4px;">
          <span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${We};flex-shrink:0;"></span>
          <span style="flex:1;">Other</span>
          <strong>${c.toLocaleString()}</strong>
        </div>
      `),s.push(`
      <div style="display:flex;align-items:center;gap:8px;min-width:180px;margin-top:6px;padding-top:4px;border-top:1px solid rgba(0,0,0,0.08);font-weight:600;">
        <span style="flex:1;">Total</span>
        <strong>${a.total_issues.toLocaleString()}</strong>
      </div>
    `),a.total_sessions>0&&s.push(`
        <div style="text-align:right;font-size:10px;opacity:0.7;margin-top:2px;">
          ${a.total_sessions.toLocaleString()} sessions
        </div>
      `),`
      <div>
        <div style="font-weight:500;margin-bottom:4px;font-family:monospace;">${R(o)}</div>
        ${s.join(``)}
      </div>
    `}}function tt(e){let t=qe(e),n=me(),r=Je(e.top_issues_legend).map((e,t)=>({...e,color:n[t%n.length]})),i=Ze(),a=e.rate_thresholds.warning,o=e.rate_thresholds.critical,s=Xe(t,o),c=t.some(e=>e.__other__>0);function l(e,t,n,r){return{id:e,name:t,type:`bar`,stack:`issues`,yAxisIndex:1,barMaxWidth:28,itemStyle:{color:n,opacity:.75},data:r}}let u=r.map(e=>l(e.group_id,Ye(e.title),e.color,t.map(t=>t[e.group_id]??0)));c&&u.push(l(`__other__`,`Other`,We,t.map(e=>e.__other__??0)));let d=[{id:`rate`,name:`Rate %`,type:`line`,yAxisIndex:0,smooth:!0,symbol:`circle`,symbolSize:6,z:10,lineStyle:{width:2.5,color:i.critical},itemStyle:{color:i.critical},data:t.map(e=>e.rate_pct),markLine:{symbol:`none`,silent:!0,label:{show:!1},lineStyle:{type:`dashed`,width:1},data:[{yAxis:a,lineStyle:{color:i.warning}},{yAxis:o,lineStyle:{color:i.critical}}]},markArea:{silent:!0,data:[[{yAxis:0,itemStyle:{color:i.goodBg}},{yAxis:a}],[{yAxis:a,itemStyle:{color:i.warningBg}},{yAxis:o}],[{yAxis:o,itemStyle:{color:i.criticalBg}},{yAxis:s}]]}}],f={color:n,tooltip:{trigger:`axis`,confine:!0,axisPointer:{type:`shadow`},formatter:et(t,r,i.critical)},legend:{type:`scroll`,bottom:0,icon:`roundRect`,itemWidth:10,itemHeight:8,textStyle:{color:i.axisLabel,fontSize:11}},grid:{left:52,right:52,top:16,bottom:40},xAxis:{type:`category`,data:t.map(e=>e.label),axisLabel:{color:i.axisLabel,fontSize:11},axisTick:{show:!1},axisLine:{lineStyle:{color:i.axisLine}}},yAxis:[{type:`value`,position:`left`,min:0,max:s,axisLabel:{color:i.axisLabel,formatter:Qe},splitLine:{lineStyle:{color:i.gridLine}}},{type:`value`,position:`right`,axisLabel:{color:i.axisLabel,formatter:$e},splitLine:{show:!1}}],series:[...u,...d]};return L(f,`column`),f}var nt=({data:e})=>{let t=(0,q.useMemo)(()=>qe(e),[e]),n=(0,q.useMemo)(()=>tt(e),[e]);return t.length===0?(0,J.jsx)(`div`,{className:`flex h-[280px] items-center justify-center text-[13px] text-[color:var(--muted-foreground)]`,children:`No stability data for this period.`}):(0,J.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,J.jsxs)(`span`,{className:`sr-only`,children:[e.issue_type===`crash`?`Crash`:`UI Freeze`,` rate trend chart with`,` `,t.length,` data points.`]}),(0,J.jsx)(he,{option:n,height:`320px`,minHeight:`280px`})]})},rt=[{id:`day`,label:`Day`,granularity:`day`,groupBy:`time`},{id:`week`,label:`Week`,granularity:`week`,groupBy:`time`},{id:`month`,label:`Month`,granularity:`month`,groupBy:`time`},{id:`version`,label:`App Version`,granularity:`week`,groupBy:`app_version`},{id:`platform`,label:`Platform`,granularity:`week`,groupBy:`platform`}],it=rt[1],at=`inline-flex items-center gap-[2px] rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-tint)] p-[3px]`,ot=({appId:e,issueType:t,apiWindow:n,platform:r,isLoading:i})=>{let[a,o]=(0,q.useState)(it),{data:s,isLoading:c,isFetching:l}=oe(e,(0,q.useMemo)(()=>({issue_type:t,...n,platform:r===`all`?void 0:r,granularity:a.granularity,group_by:a.groupBy,top_n:5}),[t,n,r,a])),u=(i||c)&&!s,d=l&&!c;return u?(0,J.jsx)(z,{variant:`block`,height:`360px`}):(0,J.jsxs)(`section`,{className:`min-h-[280px] rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] p-3.5`,children:[(0,J.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center justify-between gap-2.5`,children:[(0,J.jsx)(`h2`,{className:`m-0 text-[15px] font-semibold text-[color:var(--foreground)]`,children:`Stability trends`}),(0,J.jsx)(`div`,{role:`radiogroup`,"aria-label":`Grouping`,className:at,children:rt.map(e=>{let t=a.id===e.id;return(0,J.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":t,onClick:()=>o(e),className:P(`rounded-[6px] px-[11px] py-[4px] text-[11.5px] font-medium transition-colors duration-100`,`focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--ring)]`,t?`bg-[var(--card)] font-semibold text-[var(--foreground)] shadow-[var(--shadow-sm)]`:`text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]`),children:e.label},e.id)})})]}),(0,J.jsx)(B,{isStale:d,children:s?(0,J.jsx)(nt,{data:s}):(0,J.jsx)(`div`,{className:`flex h-[280px] items-center justify-center text-[13px] text-[color:var(--muted-foreground)]`,children:`No stability data for this period.`})})]})};T.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 0;
`,T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`,T.input`
  width: 320px;
  max-width: 100%;
  padding: 8px 10px;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.surface};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.primary};

  &:focus-visible {
    outline: none;
    border-color: ${({theme:e})=>e.colors.border.focus};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.uxcam.indigo[100]};
  }
`,T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,T.div`
  border: 1px dashed ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: 24px;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
  text-align: center;
`,T.div`
  border: 1px solid var(--border, #e4e4e7);
  border-radius: var(--radius, 8px);
  overflow: auto;
  background: ${({theme:e})=>e.colors.background.surface};
`,T.table`
  width: 100%;
  min-width: 1050px;
  border-collapse: collapse;
`,T.th`
  text-align: ${({$align:e})=>e??`left`};
  padding: 0 12px;
  height: 40px;
  border-bottom: 1px solid var(--ds-border, ${({theme:e})=>e.colors.border.default});
  color: var(--muted-foreground, #71717a);
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: var(--font-medium, 500);
  background: var(--ds-muted, ${({theme:e})=>e.colors.background.canvas});
  position: sticky;
  top: 0;
  z-index: 1;
`,T.button`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  font: inherit;
  color: ${({theme:e,$active:t})=>t?e.colors.text.primary:e.colors.text.tertiary};
  cursor: pointer;
`,T.tr`
  cursor: pointer;
  background: ${({$selected:e})=>e?`var(--muted, #F4F4F5)`:`transparent`};

  &:hover {
    background: ${({$selected:e})=>e?`var(--muted, #F4F4F5)`:`#fafafa`};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: -2px;
  }
`,T.td`
  text-align: ${({$align:e})=>e??`left`};
  padding: 10px 12px;
  border-bottom: 1px solid var(--border, #E4E4E7);
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  vertical-align: top;
`,T.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,T.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  border: 1px solid ${({theme:e,$type:t})=>t===`crash`?e.colors.severity.critical.border:e.colors.severity.warning.border};
  color: ${({theme:e,$type:t})=>t===`crash`?e.colors.severity.critical.text:e.colors.severity.warning.text};
  background: ${({theme:e,$type:t})=>t===`crash`?e.colors.severity.critical.bg:e.colors.severity.warning.bg};
`,T.span`
  color: ${({theme:e})=>e.colors.text.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,T.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e,$compareClass:t})=>t===`regressed`?e.colors.severity.critical.border:t===`new`?e.colors.severity.warning.border:t===`resolved`?e.colors.severity.good.border:e.colors.border.default};
  background: ${({theme:e,$compareClass:t})=>t===`regressed`?e.colors.severity.critical.bg:t===`new`?e.colors.severity.warning.bg:t===`resolved`?e.colors.severity.good.bg:e.colors.background.sunken};
  color: ${({theme:e,$compareClass:t})=>t===`regressed`?e.colors.severity.critical.text:t===`new`?e.colors.severity.warning.text:t===`resolved`?e.colors.severity.good.text:e.colors.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,T.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 7px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  border: 1px solid ${({theme:e,$severity:t})=>t===`critical`||t===`high`?e.colors.severity.critical.border:t===`warning`||t===`medium`||t===`persistent`?e.colors.severity.warning.border:e.colors.severity.good.border};
  color: ${({theme:e,$severity:t})=>t===`critical`||t===`high`?e.colors.severity.critical.text:t===`warning`||t===`medium`||t===`persistent`?e.colors.severity.warning.text:e.colors.severity.good.text};
  background: ${({theme:e,$severity:t})=>t===`critical`||t===`high`?e.colors.severity.critical.bg:t===`warning`||t===`medium`||t===`persistent`?e.colors.severity.warning.bg:e.colors.severity.good.bg};
`,T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,T.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,T.div`
  display: inline-flex;
  gap: 8px;
`,T.button`
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  padding: 6px 10px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function st(e,t={}){let n={event:e,ts:Date.now(),...t};typeof window<`u`&&typeof window.dispatchEvent==`function`&&window.dispatchEvent(new CustomEvent(`uxcam:issues-explorer-telemetry`,{detail:n}))}function ct(e){st(`issues_overview_load_started`,e)}function lt(e){st(`issues_overview_loaded`,e)}function ut(e){st(`issues_list_loaded`,e)}T.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,T.h3`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.text.primary};
`,T.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,T.article`
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.surface};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,T.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`,T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,T.code`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.secondary};
`,T.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,T.p`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,T.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.link};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};

  &:hover {
    text-decoration: underline;
  }
`,T.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,T.div`
  border: 1px dashed ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 14px;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,T.button`
  display: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
    position: fixed;
    inset: 0;
    border: 0;
    background: ${({theme:e})=>e.colors.background.overlay};
    z-index: ${({theme:e})=>e.zIndex.modal-1};
  }
`,T.aside`
  width: 390px;
  max-width: 42vw;
  border-left: 1px solid ${({theme:e})=>e.colors.border.default};
  background: ${({theme:e})=>e.colors.background.surface};
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 420px;
    z-index: ${({theme:e})=>e.zIndex.modal};
    box-shadow: ${({theme:e})=>e.shadows.xl};
  }
`,T.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  padding: 14px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
`,T.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,T.h2`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,T.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`,T.span`
  display: inline-flex;
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e,$type:t})=>t===`crash`?e.colors.severity.critical.border:e.colors.severity.warning.border};
  background: ${({theme:e,$type:t})=>t===`crash`?e.colors.severity.critical.bg:e.colors.severity.warning.bg};
  color: ${({theme:e,$type:t})=>t===`crash`?e.colors.severity.critical.text:e.colors.severity.warning.text};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  padding: 2px 7px;
`,T.span`
  display: inline-flex;
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e,$tone:t})=>e.colors.severity[t].border};
  background: ${({theme:e,$tone:t})=>e.colors.severity[t].bg};
  color: ${({theme:e,$tone:t})=>e.colors.severity[t].text};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  padding: 2px 7px;
`,T.button`
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  padding: 5px 9px;
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
  }
`,T.div`
  padding: 12px 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
`,T.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,T.h3`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.primary};
`,T.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`,T.div`
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.surface};
  padding: 8px;
`,T.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,T.div`
  margin-top: 4px;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
`,T.div`
  height: 1px;
  background: ${({theme:e})=>e.colors.border.subtle};
`,T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,T.p`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,T.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`,T.div`
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,T.h4`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.secondary};
`,T.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.secondary};
`,T.div`
  padding-top: 2px;
`,T.button`
  width: 100%;
  border: 1px solid ${({theme:e})=>e.colors.uxcam.indigo[200]};
  background: ${({theme:e})=>e.colors.uxcam.indigo[50]};
  color: ${({theme:e})=>e.colors.uxcam.indigo[700]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  padding: 8px 10px;
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.uxcam.indigo[100]};
  }
`,T.section`
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({theme:e})=>e.colors.background.surface};
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`,T.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,T.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
`,T.input`
  margin: 0;
`,T.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(180px, 1fr)) auto;
  gap: 10px;
  align-items: end;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
`,T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,T.label`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,T.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,T.select`
  height: 34px;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: 0 10px;
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};

  &:focus-visible {
    outline: none;
    border-color: ${({theme:e})=>e.colors.border.focus};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.uxcam.indigo[100]};
  }
`,T.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 34px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.secondary};
`,T.button`
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  padding: 6px 10px;
  cursor: pointer;

  &:hover:enabled {
    background: ${({theme:e})=>e.colors.background.hover};
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }
`,T.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,T.div`
  border: 1px solid ${({theme:e})=>e.colors.severity.warning.border};
  background: ${({theme:e})=>e.colors.severity.warning.bg};
  color: ${({theme:e})=>e.colors.severity.warning.text};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  padding: 6px 8px;
`,T.div`
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  background: ${({theme:e})=>e.colors.background.sunken};
  color: ${({theme:e})=>e.colors.text.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  padding: 6px 8px;
`,T.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`,T.div`
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.sunken};
  padding: 4px 7px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,T.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,T.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.primary};
`;var dt=`overview`,ft={last_7d:`Last 7 days`,last_30d:`Last 30 days`,last_90d:`Last 90 days`,custom:`Custom range`},pt=32e3,mt=10;function ht(e,t=256){if(typeof e!=`string`)return null;let n=e.trim();return n?n.length>t?n.slice(0,t):n:null}function gt(e){return Array.isArray(e)?e.map(gt):e&&typeof e==`object`?Object.fromEntries(Object.entries(e).filter(([,e])=>e!=null).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>[e,gt(t)])):e}function _t(e){let t=`${e.window}|${e.platform}|${e.timezone}`;return e.window===`custom`?`${t}|${e.date_from}|${e.date_to}`:t}function vt(e){return e.toLocaleDateString(`en-CA`)}function yt(e){let t=e.now??new Date,n=vt(t),r=vt(new Date(t.getTime()-29*864e5));return{scope_entity:dt,window:`last_30d`,platform:e.platform,date_from:r,date_to:n,timezone:e.timezone}}function bt(e){let t=ht(e.group_id);if(!t)return null;let n=e.issue_type===`freeze`?`ui_freeze`:e.issue_type;return n!==`crash`&&n!==`ui_freeze`?null:{issue_type:n,group_id:t,title:ht(e.title)??ht(e.signature)??`Untitled issue`,occurrences:e.occurrences,affected_users:e.affected_users,severity:e.severity,is_new:!!e.is_new}}function xt({appId:e,scope:t,overview:n,topMovers:r,topIssuesWindow:i=null}){return{entity:{app_id:e,scope_entity:dt},scope:t,fingerprint_basis:{total_crashes:n.total_crashes.value,total_ui_freezes:n.total_ui_freezes.value,canonical_scope_key:_t(t)},kpis:{crash_free_session_pct:n.crash_free_session_pct,crash_free_user_pct:n.crash_free_user_pct,ui_freeze_session_pct:n.ui_freeze_session_pct,total_crashes:n.total_crashes.value,total_ui_freezes:n.total_ui_freezes.value,crash_affected_users:n.crash_affected_users.value,freeze_affected_users:n.freeze_affected_users.value,severity:n.severity},top_issues:r.slice(0,mt).flatMap(e=>{let t=bt(e);return t?[t]:[]}),top_issues_window:i}}function St(e){return JSON.stringify(gt(e.fingerprint_basis))}async function Ct(e){let t=new TextEncoder().encode(St(e)),n=await globalThis.crypto.subtle.digest(`SHA-256`,t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function wt(e){return JSON.stringify(e).length}function Tt(e,t=pt){if(wt(e)<=t)return e;let n={...e,top_issues:e.top_issues.slice(0,5),context_truncated:!0,omitted_sections:[`top_issues_tail`]};return wt(n)<=t?n:{...n,top_issues:[],omitted_sections:[`top_issues`]}}function Et(e){let t=e?.trim();return t?t.slice(0,300):void 0}async function Dt(e){let t=Tt(e.context),n=Et(e.focusQuestion);return{stability_analysis_context_version:1,reservation_id:e.reservationId,app_id:e.appId,scope_entity:dt,input_fingerprint:await Ct(t),scope:e.scope,...n&&{focus_question:n},context:t}}var Ot={latest:(e,t,n=null)=>[`stabilityAnalysisArtifact`,e,`overview`,_t(t),n?St(n):`noinput`]};function kt(e){return`/api/apps/${encodeURIComponent(e)}/stability-analysis`}function At(e){return new URLSearchParams({window:e.window,platform:e.platform,date_from:e.date_from,date_to:e.date_to,timezone:e.timezone})}async function jt(e,t,n=null){let r=At(t);return n&&r.set(`input_fingerprint`,await Ct(n)),j(`${kt(e)}/analysis-artifacts/latest?${r.toString()}`)}async function Mt(e,t,n){return j(`${kt(e)}/analysis-slot`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({scope:n})})}async function Nt(e,t,n){return j(`${kt(e)}/analysis-slot/${encodeURIComponent(n)}`,{method:`DELETE`})}function Pt(e,t,n,r,i={}){let a=!!(e&&n);return ve({enabled:a&&(i.enabled??!0),poll:!!i.poll,queryKey:a?Ot.latest(e,n,r):[`stabilityAnalysisArtifact`,`disabled`],queryFn:()=>jt(e,n,r)})}var Ft=`Challenge this Stability Analysis verdict and tell me what evidence would change the conclusion.`,It={session:`Watch session`,issue:`View issue`,screen:`Open screen`},Lt=[`Did the latest release make stability worse?`,`What is driving crashes this month?`,`Are ANRs concentrated on specific devices?`];function Rt(e=Date.now()){return Lt[Math.floor(e/864e5)%Lt.length]}function zt(e){if(!e||typeof e!=`object`)return null;let t=e,n=e=>t[e]&&typeof t[e]==`object`?t[e]:void 0,r=n(`error`)?.details??n(`detail`)?.details??t.details;if(!r||typeof r!=`object`)return null;let i=r.retry_after_seconds;return typeof i==`number`&&Number.isFinite(i)?i:null}function Bt(e){if(e<60)return`${Math.max(1,Math.round(e))}s`;let t=Math.round(e/60);return t<60?`${t}m`:`${Math.round(t/60)}h`}function Vt(e){if(e instanceof de&&e.status===429){if(e.code===`RATE_LIMIT`){let t=e.message?.trim()||`Too many analysis runs right now.`,n=zt(e.body);return n?`${t} Try again in ${Bt(n)}.`:t}return e.message?.trim()||`Analyzed today · available again tomorrow`}return e instanceof Error?e.message:`Could not start Stability Analysis.`}function Ht(e){let t=new Date(e);return Number.isFinite(t.getTime())?t.toLocaleDateString(void 0,{month:`short`,day:`numeric`}):e}function Ut(e){if(!e)return`available again tomorrow`;let t=new Date(e);return Number.isFinite(t.getTime())?`available again ${t.toLocaleString(void 0,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}`:`available again tomorrow`}function Wt(e){return e.platform===`all`?`All platforms`:e.platform===`ios`?`iOS`:`Android`}function Gt(e){return`${ft[e.window]} · ${Wt(e)}`}function Kt(e){let t=[];return e.platform!==`all`&&t.push({table:`session`,attribute:`device_platform`,operator:`equal`,value:e.platform}),t}function qt(e){let t=e.result.method.tracks_completed,n=e.result.method.sessions_analyzed;return[`Scope: ${Gt(e.scope)} (${e.scope.date_from} – ${e.scope.date_to}) · ${e.scope.timezone}`,`${t.length}/4 analysis tracks completed`,n==null?null:`${n} sessions analyzed`].filter(e=>!!e).join(` · `)}function Jt(e){return`/api/apps/${encodeURIComponent(e)}/stability-analysis`}var Yt={surfaceId:`stability`,skillId:`analyze-stability`,workflowSource:`stability_overview`,contextMarker:`stability_analysis_context_version`,testIdPrefix:`stability-analysis`,expandedTestId:`stability-tara-brief-expanded`,adminGated:!1,useLatestArtifact:Pt,claimSlot:Mt,releaseSlot:Nt,endpoints:{latest:e=>`${Jt(e)}/analysis-artifacts/latest`,claim:e=>`${Jt(e)}/analysis-slot`,release:(e,t,n)=>`${Jt(e)}/analysis-slot/${encodeURIComponent(n)}`},queryKey:(e,t,n,r)=>Ot.latest(e,n,r),scopeToCanonicalKey:_t,async buildLaunch({appId:e,scope:t,context:n,reservationId:r,focusQuestion:i}){let a=Et(i),o=await Dt({appId:e,scope:t,context:n,reservationId:r,focusQuestion:a}),s=a?` Focus on: ${a}`:``,c=`Analyze this app's stability for ${t.date_from}–${t.date_to} (${Wt(t)}). Identify the biggest verified risk, a material counter-signal, and the next investigation.${s}`,l=Kt(t);return{skillId:`analyze-stability`,source:`stability_overview`,context:{entity:{name:`overview`,metadata:`Stability Overview`,scopeType:`stability`,scopeId:`overview`,scopeLabel:`Stability`},dashboardContext:{session_list:{filters:l,date_range:{attribute:`session_recordedon`,operator:`between`,value:{lower:t.date_from,upper:t.date_to},tz:t.timezone}}},pageMetadata:{page_type:`stability_overview`,active_tab:`overview`,date_from:t.date_from,date_to:t.date_to,timezone:t.timezone,window:t.window,platform:t.platform,active_filter_count:l.length,active_filter_objects:l,stability_analysis_workflow:!0}},trailing:pe(c,JSON.stringify(o)),displayContent:`Analyze stability`,titleHint:`Analyze stability`,openDrawer:!1}},describeError:Vt,enforcedFilters:e=>Kt(e),buildWorkflowMarker:()=>`"scope_entity":"overview"`,copy:{titleFallback:`Stability Analysis`,loadingStatus:`Loading latest Stability Analysis…`,runningStatus:()=>`Analyzing stability… usually ~2 min`,emptyText:()=>`Tara can analyze this app's stability — crash and ANR trends, release health, affected users, and the sessions behind them.`,emptyErrorDetail:e=>e,bodyErrorDetail:e=>`${e} The previous result remains available.`,staleLabel:e=>e.is_stale?`New crashes since this analysis`:e.scope_match===`mismatch`?e.scope_differences[0]??`Scope changed since this analysis`:null,meta:e=>`Tara analysis · ${Ht(e.generated_at)} · ${Gt(e.scope)}`,timeoutMessage:`Analysis is taking longer than expected. Its Tara thread remains available.`,workflowError:(e,t)=>t||(e===`failed`?`Stability Analysis could not complete.`:`Stability Analysis was cancelled.`),popover:{description:`Tara reviews this app's crash and ANR trends, release health, affected users, and session evidence — and links the replays and issues behind each finding.`,scopeLine:e=>Gt(e),statusLabel:({analysisAvailable:e,nextAvailableAt:t})=>e?`1 analysis per app per day · available`:`1 analysis per app per day · ${Ut(t)}`,focusPlaceholder:Rt()}},evidenceLabels:It,methodLine:qt,analysisSource:`stability_analysis`,openEvidence:(e,t)=>{if(e.kind===`session`&&e.session_id){t.openReplayOverlay({sessionId:e.session_id,startTime:e.timestamp_sec??void 0,source:`stability_analysis`,appId:t.appId});return}if(e.kind===`issue`&&e.group_id&&e.issue_type){let n=e.issue_type===`ui_freeze`?`freeze`:`crash`;t.navigate(N.issueDetail(t.appId??``,n,e.group_id));return}e.kind===`screen`&&e.screen_name&&t.navigate(N.screenInsights(t.appId??``,e.screen_name))},askTaraPrompt:Ft,askTara:({taraController:e})=>{e.ask({prompt:Ft,source:`stability_analysis`,displayContent:`Challenge this Stability Analysis verdict.`,titleHint:`Investigate app stability`})},popoverTracksRunning:!0};function Xt(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||`UTC`}catch{return`UTC`}}var Zt=({appId:e,platform:t,dateFrom:n,dateTo:r,topMovers:i,areTopMoversLoading:a,topMoversError:o})=>{let s=q.useMemo(()=>yt({platform:t,timezone:Xt()}),[t]),c=k(e,{date_from:s.date_from,date_to:s.date_to,...t===`all`?{}:{platform:t}}).data,l=!a||!!o;return(0,J.jsx)(_e,{descriptor:Yt,appId:e,entityId:dt,entityLabel:`Stability`,storageId:dt,scope:s,context:q.useMemo(()=>c&&l?xt({appId:e,scope:s,overview:c,topMovers:i,topIssuesWindow:{date_from:n,date_to:r}}):null,[e,c,n,r,l,s,i])})};Zt.displayName=`StabilityTaraBrief`;var Qt=[`sessions`,`users`,`freeze`];function $t(e){return e===`critical`||e===`high`?`Critical`:e===`warning`||e===`medium`||e===`persistent`?`Warning`:e===`good`||e===`low`?`Good`:`Unknown`}var en=({appId:e,overview:t,isOverviewLoading:n,overviewError:r,onRetryOverview:a,topMovers:o,areTopMoversLoading:s,topMoversError:c,onRetryTopMovers:l,trendIssueType:u,dateFrom:d,dateTo:m,apiWindow:h,platform:g})=>(0,J.jsxs)(`div`,{role:`tabpanel`,id:`stability-panel-overview`,"aria-labelledby":`stability-tab-overview`,className:`flex flex-col gap-6 p-6`,children:[(0,J.jsx)(Zt,{appId:e,platform:g,dateFrom:d,dateTo:m,topMovers:o,areTopMoversLoading:s,topMoversError:c}),r&&!t?(0,J.jsx)(V,{error:H(r,`stability overview`),onRetry:a}):(0,J.jsx)(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:n&&!t?Qt.map((e,t)=>(0,J.jsx)(z,{variant:`card`,height:`142px`,index:t},e)):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(tn,{label:`Crash-free sessions`,value:t?Ae(t.crash_free_session_pct):`--`,badge:t?(0,J.jsx)(p,{variant:De(t.severity),shape:`pill`,children:$t(t.severity)}):void 0,trend:`Play flags > 1.09% user-perceived crash rate`,context:`${O(t?.total_crashes.value??0)} crashes in this window`}),(0,J.jsx)(tn,{label:`Crash-free users`,value:Ae(t?.crash_free_user_pct),trend:`${O(t?.crash_affected_users.value??0)} users hit a crash`,context:`User-level crash-free percentage from overview payload`}),(0,J.jsx)(tn,{label:`Freeze / ANR rate`,value:je(t?.ui_freeze_session_pct),trend:`${O(t?.total_ui_freezes.value??0)} freezes`,context:`${O(t?.freeze_affected_users.value??0)} users · server-computed session rate`})]})}),(0,J.jsx)(`section`,{id:`issues-trend-section`,className:`min-w-0`,children:(0,J.jsx)(ot,{appId:e,issueType:u,apiWindow:h,platform:g,isLoading:n&&!t})}),(0,J.jsxs)(f,{className:`overflow-hidden p-0`,children:[(0,J.jsx)(`div`,{className:`flex items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-3`,children:(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h2`,{className:`text-[14px] font-semibold text-[color:var(--foreground)]`,children:`Top movers`}),(0,J.jsx)(`p`,{className:`mt-0.5 text-[12px] text-[color:var(--muted-foreground)]`,children:`Ranked by occurrences in the selected window.`})]})}),c&&!o.length?(0,J.jsx)(`div`,{className:`p-4`,children:(0,J.jsx)(V,{error:H(c,`top movers`),onRetry:l})}):s&&!o.length?(0,J.jsx)(`div`,{className:`flex flex-col gap-2 p-4`,children:Array.from({length:5}).map((e,t)=>(0,J.jsx)(z,{variant:`block`,height:`42px`,index:t},`top-mover-${t}`))}):o.length===0?(0,J.jsx)(`div`,{className:`p-6 text-[13px] text-[color:var(--muted-foreground)]`,children:`No grouped issues matched this window.`}):(0,J.jsx)(`div`,{className:`overflow-x-auto`,children:(0,J.jsxs)(`table`,{className:`w-full min-w-[760px] border-collapse text-[13px]`,children:[(0,J.jsx)(`thead`,{children:(0,J.jsxs)(`tr`,{className:`bg-[var(--muted)] text-left text-[12px] font-medium text-[color:var(--muted-foreground)]`,children:[(0,J.jsx)(`th`,{className:`h-10 px-4`,children:`Issue`}),(0,J.jsx)(`th`,{className:`h-10 px-4`,children:`Type`}),(0,J.jsx)(`th`,{className:`h-10 px-4 text-right`,children:`Occurrences`}),(0,J.jsx)(`th`,{className:`h-10 px-4 text-right`,children:`Users`}),(0,J.jsx)(`th`,{className:`h-10 px-4`,children:`Severity`}),(0,J.jsx)(`th`,{className:`h-10 px-4 text-right`,children:`View`})]})}),(0,J.jsx)(`tbody`,{children:o.map(t=>(0,J.jsxs)(`tr`,{className:`border-t border-[var(--border)] text-[color:var(--foreground)]`,children:[(0,J.jsx)(`td`,{className:`px-4 py-3`,children:(0,J.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-1`,children:[(0,J.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2`,children:[(0,J.jsx)(`span`,{className:`truncate font-medium`,children:$(t)}),t.is_new?(0,J.jsx)(p,{variant:`info`,shape:`pill`,className:`shrink-0 uppercase`,children:`NEW`}):null]}),(0,J.jsx)(`span`,{className:`truncate font-mono text-[12px] text-[color:var(--muted-foreground)]`,children:t.signature})]})}),(0,J.jsx)(`td`,{className:`px-4 py-3`,children:(0,J.jsx)(p,{variant:`secondary`,shape:`pill`,className:`uppercase`,children:Q(t.issue_type)})}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-right font-mono [font-variant-numeric:tabular-nums]`,children:O(t.occurrences)}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-right font-mono [font-variant-numeric:tabular-nums]`,children:O(t.affected_users)}),(0,J.jsx)(`td`,{className:`px-4 py-3`,children:(0,J.jsx)(p,{variant:De(t.severity),shape:`pill`,children:Ee(t.severity)})}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-right`,children:(0,J.jsx)(F,{asChild:!0,variant:`ghost`,size:`sm`,children:(0,J.jsx)(w,{to:Ce(e,t.issue_type,t.group_id),children:(0,J.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[`View`,(0,J.jsx)(i,{"aria-hidden":`true`,className:`size-3.5`})]})})})})]},`${t.issue_type}:${t.group_id}`))})]})})]})]}),tn=({label:e,value:t,badge:n,trend:r,context:i})=>(0,J.jsxs)(f,{className:`min-w-0 p-5`,children:[(0,J.jsx)(`div`,{className:`text-[13px] font-medium text-[color:var(--muted-foreground)]`,children:e}),(0,J.jsxs)(`div`,{className:`mt-2 flex items-center gap-2`,children:[(0,J.jsx)(`span`,{className:`text-[30px] font-semibold leading-tight text-[color:var(--foreground)] [font-variant-numeric:tabular-nums]`,children:t}),n]}),(0,J.jsx)(`div`,{className:`mt-2 text-[12px] font-medium text-[color:var(--foreground)]`,children:r}),(0,J.jsx)(`div`,{className:`mt-3 border-t border-dashed border-[var(--border)] pt-3 text-[12px] text-[color:var(--muted-foreground)]`,children:i})]}),nn=99.9;function rn(e){return Number.isFinite(e)?`${e.toFixed(e>=10?0:1)}%`:`--`}function an(e){return e.crash_free_session_pct>=nn?`good`:`warning`}var on=({appId:e,apiWindow:t,platform:n})=>{let r=ie(e,(0,q.useMemo)(()=>({...t,platform:n===`all`?void 0:n}),[t,n])),a=r.data?.releases??[],o=a.find(e=>e.version===r.data?.target_version)??a[0]??null,s=a.find(e=>e.version===r.data?.baseline_version)??null,c=a.flatMap(e=>e.regressed_issues.map(t=>({...t,releaseVersion:e.version})));return(0,J.jsx)(`div`,{role:`tabpanel`,id:`stability-panel-releases`,"aria-labelledby":`stability-tab-releases`,className:`flex flex-col gap-6 p-6`,children:r.error&&!a.length?(0,J.jsx)(V,{error:H(r.error,`releases`),onRetry:()=>r.refetch()}):r.isLoading&&!a.length?(0,J.jsxs)(`div`,{className:`grid gap-4`,children:[(0,J.jsx)(z,{variant:`card`,height:`132px`}),(0,J.jsx)(z,{variant:`card`,height:`320px`,index:1})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(f,{className:`p-5`,children:(0,J.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`div`,{className:`text-[12px] font-medium uppercase tracking-[0.05em] text-[color:var(--muted-foreground)]`,children:`Release stability`}),(0,J.jsxs)(`h2`,{className:`mt-2 text-[20px] font-semibold text-[color:var(--foreground)]`,children:[o?`Target ${o.version}`:`No release data`,s?` vs baseline ${s.version}`:``]}),(0,J.jsxs)(`p`,{className:`mt-1 text-[13px] text-[color:var(--muted-foreground)]`,children:[`Target crash-free sessions are evaluated against `,nn.toFixed(1),`%.`]})]}),o?(0,J.jsxs)(`div`,{className:`grid grid-cols-3 gap-3 text-right`,children:[(0,J.jsx)(sn,{label:`New`,value:o.new_count}),(0,J.jsx)(sn,{label:`Regressed`,value:o.regressed_count}),(0,J.jsx)(sn,{label:`Resolved`,value:o.resolved_count})]}):null]})}),(0,J.jsxs)(f,{className:`overflow-hidden p-0`,children:[(0,J.jsx)(`div`,{className:`border-b border-[var(--border)] px-4 py-3`,children:(0,J.jsx)(`h2`,{className:`text-[14px] font-semibold text-[color:var(--foreground)]`,children:`Versions`})}),a.length===0?(0,J.jsx)(`div`,{className:`p-8 text-center text-[13px] text-[color:var(--muted-foreground)]`,children:`No releases matched this window.`}):(0,J.jsx)(`div`,{className:`overflow-x-auto`,children:(0,J.jsxs)(`table`,{className:`w-full min-w-[980px] border-collapse text-[13px]`,children:[(0,J.jsx)(`thead`,{children:(0,J.jsxs)(`tr`,{className:`bg-[var(--muted)] text-left text-[12px] font-medium text-[color:var(--muted-foreground)]`,children:[(0,J.jsx)(`th`,{className:`h-10 px-4`,children:`Version`}),(0,J.jsx)(`th`,{className:`h-10 px-4`,children:`Released`}),(0,J.jsx)(`th`,{className:`h-10 px-4 text-right`,children:`Adoption`}),(0,J.jsx)(`th`,{className:`h-10 px-4 text-right`,children:`Sessions`}),(0,J.jsx)(`th`,{className:`h-10 px-4 text-right`,children:`Crash-free`}),(0,J.jsx)(`th`,{className:`h-10 px-4 text-right`,children:`Freeze`}),(0,J.jsx)(`th`,{className:`h-10 px-4 text-right`,children:`New`}),(0,J.jsx)(`th`,{className:`h-10 px-4 text-right`,children:`Regr.`}),(0,J.jsx)(`th`,{className:`h-10 px-4 text-right`,children:`Res.`}),(0,J.jsx)(`th`,{className:`h-10 px-4`,children:`Verdict`})]})}),(0,J.jsx)(`tbody`,{children:a.map(e=>{let t=an(e);return(0,J.jsxs)(`tr`,{className:`border-t border-[var(--border)] text-[color:var(--foreground)]`,children:[(0,J.jsx)(`td`,{className:`px-4 py-3 font-medium`,children:e.version}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-[color:var(--muted-foreground)]`,children:ce(e.released_at)}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-right font-mono [font-variant-numeric:tabular-nums]`,children:rn(e.adoption_pct)}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-right font-mono [font-variant-numeric:tabular-nums]`,children:O(e.sessions)}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-right font-mono [font-variant-numeric:tabular-nums]`,children:je(e.crash_free_session_pct)}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-right font-mono [font-variant-numeric:tabular-nums]`,children:je(e.freeze_session_pct)}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-right font-mono [font-variant-numeric:tabular-nums]`,children:O(e.new_count)}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-right font-mono [font-variant-numeric:tabular-nums]`,children:O(e.regressed_count)}),(0,J.jsx)(`td`,{className:`px-4 py-3 text-right font-mono [font-variant-numeric:tabular-nums]`,children:O(e.resolved_count)}),(0,J.jsx)(`td`,{className:`px-4 py-3`,children:(0,J.jsx)(p,{variant:t,shape:`pill`,children:t===`good`?`Good`:`Warn`})})]},e.version)})})]})})]}),(0,J.jsxs)(f,{className:`overflow-hidden p-0`,children:[(0,J.jsx)(`div`,{className:`border-b border-[var(--border)] px-4 py-3`,children:(0,J.jsx)(`h2`,{className:`text-[14px] font-semibold text-[color:var(--foreground)]`,children:`Regressed groups`})}),c.length===0?(0,J.jsx)(`div`,{className:`p-6 text-[13px] text-[color:var(--muted-foreground)]`,children:`No regressed issue rows were returned for this release window.`}):(0,J.jsx)(`div`,{className:`divide-y divide-[var(--border)]`,children:c.map(t=>(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3 px-4 py-3`,children:[(0,J.jsxs)(`div`,{className:`min-w-0`,children:[(0,J.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2`,children:[(0,J.jsx)(p,{variant:`secondary`,shape:`pill`,className:`uppercase`,children:Q(t.issue_type)}),(0,J.jsx)(`span`,{className:`truncate font-medium text-[color:var(--foreground)]`,children:$(t)}),(0,J.jsx)(p,{variant:De(t.severity),shape:`pill`,children:Ee(t.severity)})]}),(0,J.jsxs)(`div`,{className:`mt-1 truncate font-mono text-[12px] text-[color:var(--muted-foreground)]`,children:[`Regressed in `,t.releaseVersion,` · `,t.signature]})]}),(0,J.jsx)(F,{asChild:!0,variant:`ghost`,size:`sm`,children:(0,J.jsx)(w,{to:Ce(e,t.issue_type,t.group_id),children:(0,J.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[`View`,(0,J.jsx)(i,{"aria-hidden":`true`,className:`size-3.5`})]})})})]},`${t.issue_type}:${t.group_id}:${t.releaseVersion}`))})]})]})})},sn=({label:e,value:t})=>(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`div`,{className:`font-mono text-[22px] font-semibold leading-tight text-[color:var(--foreground)] [font-variant-numeric:tabular-nums]`,children:O(t)}),(0,J.jsx)(`div`,{className:`mt-1 text-[12px] text-[color:var(--muted-foreground)]`,children:e})]});function cn(){return typeof performance<`u`&&typeof performance.now==`function`?performance.now():Date.now()}function ln(e){return e===`issues`||e===`releases`?e:re}function un(e,t=`crash`){return e===`freeze`||e===`crash`?e:t}function dn(e){return e===`crash`||e===`freeze`?e:`all`}function fn(e){return e===`android`||e===`ios`?e:`all`}function pn(e){return e===`resolved`||e===`snoozed`||e===`ignored`||e===`all`?e:`open`}function mn(e){return e&&[`occurrences`,`affected_users`,`affected_sessions`,`first_seen`,`last_seen`,`severity`].includes(e)?e:A.sort_by}function hn(e){return e===`asc`?`asc`:`desc`}function gn(e,t){if(!e)return t;let n=Number.parseInt(e,10);return Number.isFinite(n)&&n>0?n:t}function _n(e){if(e===`0`)return 0;let t=Number.parseInt(e??``,10);return Number.isFinite(t)&&t>=0?t:3}function vn(e){return e===`true`||e===`1`}function yn(e,t){return{current:e,next:null,pages:1,limit:t,total:0}}function bn(e,t){return(n,r)=>{let i=t===`asc`?1:-1,a=n[e],o=r[e];if(typeof a==`number`&&typeof o==`number`)return(a-o)*i;let s=String(a??``),c=String(o??``);return s.localeCompare(c)*i}}function xn(e){typeof window>`u`||typeof window.dispatchEvent!=`function`||window.dispatchEvent(new CustomEvent(`uxcam:issues-explorer-telemetry`,{detail:{event:`issues_detail_navigated`,ts:Date.now(),...e}}))}var Sn=()=>{let{selectedAppId:e}=fe(),t=(0,q.useMemo)(()=>le(),[]),[n,r]=ge({globalDateRangeAppId:e,defaultDateRange:t}),i=te(),a=ne(),o=(0,q.useRef)(null),s=(0,q.useRef)({overview:!1,list:!1}),c=e||null,l=n.get(`date_from`)||t.date_from,u=n.get(`date_to`)||t.date_to,d=ee(n),f=fn(n.get(`platform`)),p=ln(n.get(`tab`)),m=dn(n.get(`issue_type`)),h=pn(n.get(`status`)),_=vn(n.get(`new_only`)),v=n.get(`search`)||``,y=mn(n.get(`sort_by`)),b=hn(n.get(`sort_order`)),x=gn(n.get(`page`),1),S=gn(n.get(`per_page`),25),C=_n(n.get(`min_occurrences`)),w=n.get(`issue_id`),T=un(n.get(`issue_type`),`crash`),E=(0,q.useCallback)(e=>{let t={};for(let[e,r]of n.entries())e===`app`||e===`org`||(t[e]=r);for(let[n,r]of Object.entries(e))r===void 0||r===``?delete t[n]:t[n]=r;r(t)},[n,r]),re=(0,q.useCallback)(e=>{let t=new URLSearchParams(n);t.delete(`issue_id`),e===`overview`?t.delete(`tab`):t.set(`tab`,e);let r=t.toString();i(`${a.pathname}${r?`?${r}`:``}`)},[a.pathname,i,n]),ie=(0,q.useCallback)(e=>{E({platform:e===`all`?void 0:e,page:void 0,issue_id:void 0})},[E]),O=(0,q.useCallback)((e,t,n)=>{E({date_from:e,date_to:t,relative_date:n,page:void 0,issue_id:void 0})},[E]),ae=(0,q.useCallback)(e=>{E({issue_type:e===`all`?void 0:e,page:void 0,issue_id:void 0})},[E]),oe=(0,q.useCallback)(e=>{E({status:e===`open`?void 0:e,page:void 0})},[E]),se=(0,q.useCallback)(e=>{E({new_only:e?`true`:void 0,page:void 0})},[E]),ce=(0,q.useCallback)(e=>{E({search:e||void 0,page:void 0})},[E]),ue=(0,q.useCallback)((e,t)=>{E({sort_by:e===A.sort_by?void 0:e,sort_order:t===A.sort_order?void 0:t,page:void 0})},[E]),j=(0,q.useCallback)(()=>{E({min_occurrences:`0`,page:void 0})},[E]),de=(0,q.useCallback)(e=>{E({page:e<=1?void 0:String(e)})},[E]),M=(0,q.useMemo)(()=>g({from:l,to:u,relativeDate:d}),[l,u,d]),N=(0,q.useMemo)(()=>({...M,platform:f===`all`?void 0:f}),[M,f]),P=(0,q.useMemo)(()=>({...M,platform:f===`all`?void 0:f,search:v||void 0,sort_by:y,sort_order:b,page:x,per_page:S,min_occurrences:C,status:h}),[M,C,x,S,f,v,y,b,h]),F=(0,q.useMemo)(()=>({...P,issue_type:`crash`}),[P]),pe=(0,q.useMemo)(()=>({...P,issue_type:`freeze`}),[P]),I=(0,q.useMemo)(()=>({...M,platform:f===`all`?void 0:f,sort_by:`occurrences`,sort_order:`desc`,page:1,per_page:5,min_occurrences:3,status:`open`}),[M,f]),{data:L,isLoading:R,error:me,refetch:he}=k(c,N),z=D(c,F),B=D(c,pe),V=D(c,{...I,issue_type:`crash`}),H=D(c,{...I,issue_type:`freeze`}),U=(0,q.useMemo)(()=>[...z.data?.rows??[],...B.data?.rows??[]],[z.data?.rows,B.data?.rows]),W=(0,q.useMemo)(()=>{let e=m===`crash`?z.data?.rows??[]:m===`freeze`?B.data?.rows??[]:U;return[..._?e.filter(e=>e.is_new):e].sort(bn(y,b))},[U,z.data?.rows,m,B.data?.rows,_,y,b]),_e=(0,q.useMemo)(()=>[...V.data?.rows??[],...H.data?.rows??[]].sort(bn(`occurrences`,`desc`)).slice(0,5),[V.data?.rows,H.data?.rows]),G=z.data?.pagination.total??0,K=B.data?.pagination.total??0,ve=(z.data?.meta.hidden_below_floor_count??0)+(B.data?.meta.hidden_below_floor_count??0),Y=(0,q.useMemo)(()=>({all:G+K,crash:G,freeze:K,new:U.filter(e=>e.is_new).length}),[U,G,K]),X=(0,q.useMemo)(()=>{if(_)return{current:1,next:null,pages:1,limit:S,total:W.length};if(m===`crash`)return z.data?.pagination??yn(x,S);if(m===`freeze`)return B.data?.pagination??yn(x,S);let e=G+K;return{current:x,next:x*S<e?x+1:null,pages:Math.max(1,Math.ceil(e/S)),limit:S,total:e}},[z.data?.pagination,G,m,B.data?.pagination,K,_,x,S,W.length]),Z=m===`crash`?z.isLoading:m===`freeze`?B.isLoading:z.isLoading||B.isLoading,be=m===`crash`?z.error:m===`freeze`?B.error:z.error??B.error,xe=(0,q.useCallback)(()=>{(m===`all`||m===`crash`)&&z.refetch(),(m===`all`||m===`freeze`)&&B.refetch()},[z,m,B]),Q=(0,q.useCallback)(e=>{c&&(xn({appId:c,issueId:e.group_id,issueType:e.issue_type,source:`table`}),i(Ce(c,e.issue_type,e.group_id)))},[c,i]),we=(0,q.useMemo)(()=>JSON.stringify({activeTab:p,dateFrom:l,dateTo:u,relativeDate:d,platform:f,facet:m,status:h,newOnly:_,search:v,sortBy:y,sortOrder:b,page:x,perPage:S,minOccurrences:C}),[p,l,u,d,m,C,_,x,S,f,v,y,b,h]);q.useEffect(()=>{c&&(o.current=cn(),s.current={overview:!1,list:!1},ct({appId:c,issueType:m,platform:f}))},[c,m,f,we]),q.useEffect(()=>{if(!c||!L||R||s.current.overview)return;s.current.overview=!0;let e=o.current;lt({appId:c,durationMs:e==null?0:cn()-e,crashFreePct:L.crash_free_session_pct,severity:L.severity})},[c,L,R]),q.useEffect(()=>{if(!c||Z||s.current.list||!z.data&&!B.data)return;s.current.list=!0;let e=o.current;ut({appId:c,durationMs:e==null?0:cn()-e,rowCount:W.length,total:X.total,issueType:m,compareStatus:`disabled`})},[Z,X.total,c,z.data,m,B.data,W.length]),q.useEffect(()=>{if(!c||!w)return;let e=U.find(e=>e.group_id===w)?.issue_type??T;xn({appId:c,issueId:w,issueType:e,source:`legacy-url`}),i(Ce(c,e,w),{replace:!0})},[U,c,w,T,i]);let $=m===`freeze`?`freeze`:`crash`,Te=W.filter(e=>h===`all`||Oe(e)===h);return c?(0,J.jsx)(ye,{borderlessTopbar:!0,children:(0,J.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col bg-[var(--background)]`,children:[(0,J.jsx)(Se,{activeTab:p,platform:f,dateFrom:l,dateTo:u,onTabChange:re,onPlatformChange:ie,onDateRangeChange:O}),p===`overview`?(0,J.jsx)(en,{appId:c,overview:L,isOverviewLoading:R,overviewError:me,onRetryOverview:()=>{he()},topMovers:_e,areTopMoversLoading:V.isLoading||H.isLoading,topMoversError:V.error??H.error,onRetryTopMovers:()=>{V.refetch(),H.refetch()},trendIssueType:$,dateFrom:l,dateTo:u,apiWindow:M,platform:f}):null,p===`issues`?(0,J.jsx)(Be,{appId:c,rows:Te,isLoading:Z,error:be,onRetry:xe,facet:m,counts:Y,status:h,newOnly:_,search:v,sortBy:y,sortOrder:b,pagination:X,hiddenBelowFloorCount:ve,minOccurrences:C,onFacetChange:ae,onStatusChange:oe,onNewOnlyChange:se,onSearchChange:ce,onSortChange:ue,onShowBelowFloor:j,onPageChange:de,onOpenIssue:Q}):null,p===`releases`?(0,J.jsx)(on,{appId:c,apiWindow:M,platform:f}):null]})}):(0,J.jsx)(ye,{children:(0,J.jsxs)(`div`,{className:`flex flex-1 flex-col items-center justify-center p-10 text-center`,children:[(0,J.jsx)(`h1`,{className:`text-[20px] font-semibold text-[color:var(--foreground)]`,children:`Select an app to view stability`}),(0,J.jsx)(`p`,{className:`mt-2 text-[13px] text-[color:var(--muted-foreground)]`,children:`Use the navigation sidebar to pick an app first.`})]})})};export{Sn as IssuesPage};