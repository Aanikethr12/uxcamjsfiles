import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t,hn as n,ht as r,nn as i}from"./icons-vendor-C23rQ2ix.js";import{C as a,Cn as o,Ft as s,It as c,Lt as l,Pt as u,Rt as d,Xt as f,Zt as p,it as m}from"./ds-BJhQ4zht.js";import{D as h,s as g}from"./ui-vendor-CUROeZIN.js";import{n as _}from"./settings-CbbRMUZJ.js";import{O as v}from"./markdown-vendor-BoH6QLuc.js";import{vn as y}from"./PrimaryNav-CxHD5Sf1.js";import{t as b}from"./useAuthStatus-BdbZHG0D.js";import{$ as x,B as S,G as C,K as w,g as ee,lt as te,n as ne,q as re,tt as ie}from"./NavigationContext-DTwRip-h.js";import{t as T}from"./utils-DMoTunZH.js";import{u as E}from"./Dialog-BFakgPRd.js";import{t as D}from"./Shimmer-BQNKs0BP.js";import"./loading-Cm5yT19R.js";import"./error-CrcmsCT-.js";import{t as ae}from"./ErrorBoundary-BIvdWyH0.js";import{t as O}from"./useSubscriptionGate-BclSWIGQ.js";import{i as oe,n as k,r as se}from"./aiUsageApi-ChaefBqD.js";import{i as ce}from"./useIsViewerOnlyCaller-COEP5ASr.js";import{t as le}from"./SettingsPageHeader-BT6hgNOC.js";import{i as A,o as ue,r as de}from"./components-Dw05BWz3.js";import{r as j}from"./useTrackEvent-D6Dgp7g-.js";import{t as fe}from"./useIsOrgOwnerOrManager-DOKqVLmq.js";import{t as M}from"./SettingsLockedCard-CUkZ7WqI.js";import{i as N,n as P,r as F,t as pe}from"./SettingsGridTable-DkErNXOg.js";import{t as me}from"./KVGrid-CB8dDsjj.js";var I=e(t(),1);h.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[4]};
`;var he=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[8]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,L=h.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,ge=h.span`
  color: ${({theme:e,$tone:t})=>t===`critical`?e.colors.severity.critical.text:t===`warning`?e.colors.severity.warning.text:e.colors.text.secondary};
`,_e=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[5]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,R=h.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,ve=h.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$color:e})=>e};
`,ye=h.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.secondary};
`,be=h.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  font-family: var(--font-display);
  color: ${({theme:e})=>e.colors.text.primary};
`,z=h.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`,B=h.p`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,xe=h.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  min-width: 0;
`,h.span`
  position: relative;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.text.tertiary};

  &[data-platform='web']::before {
    content: '○';
    position: absolute;
    inset: -2px 0 0;
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
  }

  &[data-platform='mobile']::before {
    content: '▣';
    position: absolute;
    inset: -2px 0 0;
    font-size: ${({theme:e})=>e.typography.fontSize.base};
  }
`,h.div`
  min-width: 0;
`,h.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
`,h.div`
  margin-top: 2px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`;var Se=h.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[2]};
`,V=h.span`
  min-width: 60px;
  text-align: right;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e,$enabled:t,$blocked:n})=>n?e.colors.text.tertiary:t?e.colors.text.primary:e.colors.text.tertiary};
`,Ce=h.div`
  margin-top: ${({theme:e})=>e.spacing[3]};
  width: fit-content;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: ${({theme:e})=>e.colors.interactive.activeBg};
  color: ${({theme:e})=>e.colors.text.link};
  padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[3]}`};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,H=`minmax(0, 1fr) 160px`;h(P)`
  grid-template-columns: ${H};
`,h(N)`
  grid-template-columns: ${H};
`;var U=`minmax(0, 1.2fr) minmax(0, 1.5fr) minmax(0, 1.1fr) minmax(0, 1fr)`,W=`550px`,we=h(P)`
  grid-template-columns: ${U};
  min-width: ${W};
  height: 52px;
`,Te=h(N)`
  grid-template-columns: ${U};
  min-width: ${W};
`,G=v();function K(e){return e==null||Number.isNaN(e)?`-`:new Intl.NumberFormat(void 0,{maximumFractionDigits:0}).format(e)}function q(e){if(!e)return null;let t=o(e);return Number.isNaN(t.getTime())?null:t}function Ee(e){let t=q(e);if(!t)return`Never`;let n=Date.now(),r=n-t.getTime(),i=3600*1e3;if(r>=0&&r<24*i)return`${Math.max(1,Math.round(r/i))}h ago`;let a=new Date(n);return t.getFullYear()===a.getFullYear()&&t.getMonth()===a.getMonth()&&t.getDate()===a.getDate()?`Today`:new Intl.DateTimeFormat(void 0,{month:`short`,day:`numeric`}).format(t)}function J(e){return e.email||`Unknown user`}function Y(e){return e.weeklyLimit==null||e.weeklyLimit<=0?0:Math.max(0,Math.min(100,e.usedCredits/e.weeklyLimit*100))}function De(e){return q(e.lastActivityAt)?.getTime()??0}function Oe(e,t){return[...e].sort((e,n)=>{let r=De(e)-De(n);return r===0?e.email.localeCompare(n.email):t===`asc`?r:-r})}var ke=({member:e})=>{let t=Y(e),n=e.weeklyLimit!=null&&e.weeklyLimit>0,r=(0,G.jsx)(`span`,{className:`whitespace-nowrap font-mono text-[12px] tabular-nums text-[var(--foreground)]`,children:n?`${Math.round(t)}%`:`${K(e.usedCredits)} / no limit set`});return(0,G.jsxs)(`div`,{className:`flex min-w-[150px] items-center gap-2`,children:[(0,G.jsx)(`div`,{className:`h-1.5 min-w-0 flex-1 overflow-hidden rounded-[var(--radius-full)] bg-[var(--muted)]`,children:(0,G.jsx)(`div`,{role:`progressbar`,"aria-label":`${J(e)} weekly AI credits`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(t),className:`h-full rounded-[var(--radius-full)] bg-[var(--foreground)]`,style:{width:`${t}%`}})}),n?(0,G.jsx)(l,{delayDuration:300,children:(0,G.jsxs)(s,{children:[(0,G.jsx)(d,{asChild:!0,children:(0,G.jsx)(`span`,{tabIndex:0,className:`ds-btn-focus rounded-[4px]`,children:r})}),(0,G.jsx)(c,{side:`top`,children:`${K(e.usedCredits)} of ${K(e.weeklyLimit)} credits used`})]})}):r]})},Ae=({snapshot:e})=>{let[t,n]=I.useState(`desc`),r=I.useMemo(()=>Oe(e.members,t),[e.members,t]);return(0,G.jsx)(pe,{children:(0,G.jsxs)(`div`,{className:`ds-scrollbar-auto-hide max-h-[460px] overflow-auto`,"data-scrolling":`true`,children:[(0,G.jsxs)(we,{className:`sticky top-0 z-[1]`,children:[(0,G.jsx)(F,{children:`Teammates`}),(0,G.jsxs)(F,{children:[(0,G.jsx)(`span`,{className:`block leading-tight`,children:`Credits used`}),(0,G.jsx)(`span`,{className:`block text-[11px] font-normal text-[var(--muted-foreground)]`,children:`This week`})]}),(0,G.jsxs)(F,{children:[(0,G.jsx)(`span`,{className:`block leading-tight`,children:`Extra credits used`}),(0,G.jsx)(`span`,{className:`block text-[11px] font-normal text-[var(--muted-foreground)]`,children:`This month`})]}),(0,G.jsxs)(F,{as:`button`,type:`button`,onClick:()=>n(e=>e===`desc`?`asc`:`desc`),style:{cursor:`pointer`},children:[`Last AI activity `,t===`desc`?`↓`:`↑`]})]}),r.map(e=>(0,G.jsxs)(Te,{children:[(0,G.jsx)(`span`,{className:`truncate text-[var(--foreground)]`,children:J(e)}),(0,G.jsx)(ke,{member:e}),(0,G.jsx)(`span`,{children:e.overflowCreditsThisMonth>0?(0,G.jsxs)(`span`,{className:`inline-flex rounded-[var(--radius-sm)] bg-[var(--color-good-bg-subtle)] px-2 py-0.5 font-mono text-[12px] text-[var(--color-good-text)]`,children:[`+`,K(e.overflowCreditsThisMonth)]}):(0,G.jsx)(`span`,{className:`font-mono text-[var(--muted-foreground)]`,children:`0`})}),(0,G.jsx)(`span`,{className:`text-[var(--muted-foreground)]`,children:Ee(e.lastActivityAt)})]},e.userKey))]})})};Ae.displayName=`AiUsageAdminPanel`;function X(e){let t=/^\d{4}-\d{2}-\d{2}$/.test(e);return new Date(t?`${e}T00:00:00`:e)}function je(e,t){if(!e||!t)return`—`;try{let n=X(e),r=X(t),i=new Intl.DateTimeFormat(void 0,{month:`short`,day:`numeric`,year:`numeric`});return n.getFullYear()===r.getFullYear()?`${new Intl.DateTimeFormat(void 0,{month:`short`,day:`numeric`}).format(n)} - ${i.format(r)}`:`${i.format(n)} - ${i.format(r)}`}catch{return`${e} - ${t}`}}function Me(e){let t=new Date(e);return Number.isNaN(t.getTime())?`Resets Monday at 12:00 AM`:`Resets ${t.toLocaleDateString(void 0,{weekday:`long`})} at ${t.toLocaleTimeString(void 0,{hour:`numeric`,minute:`2-digit`})}`}function Ne(e){let t=X(e);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function Pe(e,t){return t==null||t<=0?e<=0?{valueLabel:`0% used`,valueTooltip:`0 credits used`}:{valueLabel:`${e.toLocaleString()} used`}:{valueLabel:`${Math.min(100,Math.max(0,Math.round(e/t*100)))}% used`,valueTooltip:`${e.toLocaleString()} of ${t.toLocaleString()} credits used`}}var Fe=`Your weekly AI credits and shared extra team credits are all used up.`,Ie=`Every AI interaction with Tara counts as a single credit.`,Le=`Shared extra credits, used only after a teammate runs out of weekly credits.`,Re=`Your team has used all of its shared extra credits for this month.`,ze=({className:e})=>(0,G.jsxs)(`div`,{className:T(`mt-2 flex items-start gap-2 rounded-[var(--radius)] bg-[var(--muted)] px-3 py-2`,`text-[12px] leading-[1.4] text-[var(--muted-foreground)]`,e),children:[(0,G.jsx)(i,{"aria-hidden":`true`,className:`mt-0.5 size-3.5 shrink-0`}),(0,G.jsx)(`span`,{children:Ie})]}),Z=({className:e})=>(0,G.jsx)(n,{"aria-hidden":`true`,className:T(`size-3.5 shrink-0 text-[var(--color-good-text)]`,e)}),Be=({snapshot:e,label:t,srOnlyLabel:n})=>{let{valueLabel:r,valueTooltip:i}=Pe(e.usedCredits,e.weeklyLimit);return(0,G.jsx)(A,{label:t,srOnlyLabel:n,current:e.usedCredits,total:e.weeklyLimit??0,valueLabel:r,valueTooltip:i,note:Me(e.resetsAt),className:`mb-0`})},Ve=({pool:e,snapshot:t,label:n,audience:r})=>{let{valueLabel:i,valueTooltip:a}=Pe(e.usedOverflowCredits,e.monthlyCredits),o=Ne(e.resetsAt),s=e.monthlyCredits>0&&e.remaining<=0,c;if(s)c=`${Re} They reset monthly (${o}).`;else if(r===`member`&&t.drawingOnOrgPool){let e=Math.max(t.usedCredits-(t.weeklyLimit??0),0),n=new Date(t.resetsAt).toLocaleDateString(void 0,{weekday:`long`});c=`Because you've used all your weekly credits, your usage now comes from the team pool (${e.toLocaleString()} credits so far). Once your weekly credits reset on ${n}, you'll stop using the pool.`}else c=`${Le} Resets monthly (${o}).`;return(0,G.jsx)(A,{label:n,labelIcon:r===`org`?(0,G.jsx)(Z,{}):void 0,current:e.usedOverflowCredits,total:e.monthlyCredits,valueLabel:i,valueTooltip:a,note:c,className:`mb-0`})},He=({snapshot:e})=>(0,G.jsx)(f,{children:(0,G.jsxs)(p,{className:`grid gap-5 p-5`,children:[(0,G.jsx)(Be,{snapshot:e,label:`Your weekly AI credits`}),e.orgPool?(0,G.jsx)(`div`,{className:`border-t border-[var(--border)] pt-5`,children:(0,G.jsx)(Ve,{pool:e.orgPool,snapshot:e,label:`Extra team credits`,audience:`org`})}):null]})}),Ue=({snapshot:e})=>(0,G.jsxs)(`div`,{className:`grid gap-3`,children:[k(e)?(0,G.jsx)(a,{variant:`critical`,icon:(0,G.jsx)(r,{"aria-hidden":`true`}),children:Fe}):null,(0,G.jsx)(Be,{snapshot:e,label:`Your weekly AI credits`,srOnlyLabel:!0})]}),We=({snapshot:e})=>e.orgPool?(0,G.jsx)(Ve,{pool:e.orgPool,snapshot:e,label:`This month`,audience:`member`}):null,Ge=`You don't have permission to change this setting.`,Ke=({projects:e,isLoading:t,errorFallback:n,aiAppEnabledById:r,aiAppsLoaded:i,pendingToggles:a,blockedAppIds:o,onToggleRequest:f,canToggle:p})=>{let h=O(),g=I.useMemo(()=>(e||[]).map(e=>({projectId:e.projectId,projectName:e.name,iconUrl:e.iconUrl,environments:e.environments.filter(e=>e.appId).map(e=>({appId:e.appId,envName:e.name}))})).filter(e=>e.environments.length>0),[e]),_=I.useMemo(()=>{let t=new Map;for(let n of e||[])for(let e of n.environments)e.appId&&t.set(e.appId,!!e.isAIEnabled);return t},[e]);return t?(0,G.jsxs)(xe,{children:[(0,G.jsx)(D,{width:`100%`,height:`44px`,radius:`8px`}),(0,G.jsx)(D,{width:`100%`,height:`44px`,radius:`8px`,index:1}),(0,G.jsx)(D,{width:`100%`,height:`44px`,radius:`8px`,index:2})]}):g.length===0?(0,G.jsx)(G.Fragment,{children:n??(0,G.jsx)(z,{children:(0,G.jsx)(B,{children:`No projects are currently configured for Tara AI.`})})}):(0,G.jsx)(y,{groups:g,ariaLabel:`Automatic session analysis`,renderRowTrailing:(e,t)=>{let n=r.has(e.appId),g=i&&!n,v=a[e.appId],y=n?!!r.get(e.appId):_.get(e.appId)??!1,b=v===void 0?y:v,x=v!==void 0,S=!!o[e.appId],C=!g&&b,w=(0,G.jsx)(m,{checked:C,disabled:g||S||x||h.isBlocked,"aria-label":`Toggle Tara AI for ${t.projectName} ${e.envName}${g?` (not integrated)`:``}`,onCheckedChange:()=>{h.isBlocked||f(e.appId,b)}});return(0,G.jsxs)(Se,{children:[p?g?(0,G.jsx)(l,{delayDuration:300,children:(0,G.jsxs)(s,{children:[(0,G.jsx)(d,{asChild:!0,children:(0,G.jsx)(`span`,{children:w})}),(0,G.jsx)(c,{side:`top`,children:`Not integrated`})]})}):(0,G.jsx)(u,{active:h.isBlocked,reason:h.reason,children:w}):null,(0,G.jsx)(V,{$blocked:S,$enabled:C,children:S?`No permission`:x?`Saving...`:C?`Enabled`:`Disabled`})]})},maxHeight:460})};Ke.displayName=`ProjectsUsingTaraSection`;function Q(e){return e==null||Number.isNaN(e)?`—`:new Intl.NumberFormat().format(Math.round(e))}function qe(e){if(e!=null)return e<7?`critical`:e<=14?`warning`:`default`}function Je(e,t){if(t<=0)return`good`;let n=e/t;return n>.5?`good`:n>=.2?`warning`:`critical`}function Ye(e,t){let n=new Map((t||[]).map(e=>[e.app_id,e]));return(e?.apps||[]).map(e=>{let t=String(e._id||e.app_id||e.id||``),r=t?n.get(t):void 0;return{id:t,name:String(e.name||r?.name||t||`Unnamed app`),appType:r?.app_type??null,isEnabled:!!e.isAIEnabled,dailyLimit:typeof e.dailyLimit==`number`?e.dailyLimit:void 0}}).filter(e=>!!e.id)}function Xe(e){return e instanceof Error?e.message:`Failed to load settings data.`}function Ze(e){return e instanceof _&&e.fallbackUrl?e.fallbackUrl:null}function Qe({error:e}){let t=Ze(e);return(0,G.jsxs)(z,{children:[(0,G.jsx)(B,{children:Xe(e)}),t?(0,G.jsx)(E,{asChild:!0,variant:`link`,size:`sm`,className:`w-fit px-0`,children:(0,G.jsx)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,children:`View in UXCam Dashboard`})}):null]})}var $e=()=>{let e=g(),{selectedOrgId:t,selectedAppId:n}=ne(),{isAdmin:r}=b(),i=fe(t||null),a=r||i,o=!ce(t||null),s=r||i,c=w(t||null),l=C(t||null),u=re(t||null),d=se(n||null),p=oe(n||null,{enabled:a}),m=x(a&&t||null),h=ie(t||null),v=ee(t||null),[y,T]=I.useState({}),[E,ae]=I.useState({}),[O,k]=I.useState(null);I.useEffect(()=>{if(!O)return;let e=window.setTimeout(()=>k(null),2600);return()=>window.clearTimeout(e)},[O]);let j=c.data,M=I.useMemo(()=>Ye(l.data,u.data?.apps),[l.data,u.data?.apps]),N=I.useMemo(()=>new Map(M.map(e=>[e.id,e.isEnabled])),[M]),P=Number(j?.monthly_tara_credit||0),F=Number(j?.consumed_tara_credit||0),pe=Number(j?.consumed_tara_credit_by_video_analysis||0),z=Number(j?.consumed_tara_credit_by_chat||0),B=Math.max(P-F,0),xe=Je(B,P),Se=qe(j?.recording_days_left),V=d.data,H=d.isLoading||!!V,U=a&&(p.isLoading||!!p.data),W=I.useMemo(()=>{let e=p.data;if(!e)return e;let t=new Set(e.members.map(e=>e.email.toLowerCase())),n=new Map((m.data?.members??[]).filter(e=>!!e.email&&e.status===`Active`).filter(e=>!t.has(e.email.toLowerCase())).map(e=>[e.email.toLowerCase(),{userKey:`roster-${e.email.toLowerCase()}`,email:e.email,usedCredits:0,weeklyLimit:V?.weeklyLimit??null,overflowCreditsThisMonth:0,lastActivityAt:null}]));return n.size===0?e:{...e,members:[...e.members,...n.values()]}},[p.data,m.data?.members,V?.weeklyLimit]),we=async(n,r)=>{if(t){T(e=>({...e,[n]:r}));try{await h.mutateAsync({appId:n,isAIEnabled:r}),e.setQueryData(S.aiApps(t),e=>e?.apps?{...e,apps:e.apps.map(e=>String(e._id||e.app_id||e.id||``)===n?{...e,isAIEnabled:r}:e)}:e),e.invalidateQueries({queryKey:te.list(t)})}catch(e){e instanceof _&&e.statusCode===403?(ae(e=>({...e,[n]:!0})),k(Ge)):e instanceof _&&e.message?k(e.message):k(`Failed to update Tara AI setting. Please try again.`)}finally{T(e=>{let t={...e};return delete t[n],t})}}},Te=(e,t)=>{!s||E[e]||y[e]!==void 0||we(e,!t)},K=e=>(0,G.jsx)(me,{items:[{label:`Recording period`,value:je(e.recording_start_date,e.recording_end_date),detail:e.recording_days_left==null?void 0:(0,G.jsxs)(ge,{$tone:Se,children:[Q(e.recording_days_left),` days remaining`]})},{label:`Monthly credits`,value:Q(e.monthly_tara_credit),detail:`Org-wide`},...V?.weeklyLimit==null?[]:[{label:`Weekly credits`,value:Q(V.weeklyLimit),detail:`Per member`}]]}),q=()=>(0,G.jsxs)(`div`,{className:`mt-5`,children:[(0,G.jsx)(A,{label:`Monthly credits used`,current:F,total:P,currentLabel:Q(F),totalLabel:Q(P),trailing:(0,G.jsxs)(de,{tone:xe,className:`font-mono`,children:[Q(B),` remaining`]})}),(0,G.jsxs)(_e,{children:[(0,G.jsxs)(R,{children:[(0,G.jsx)(ve,{$color:`var(--color-credit-analysis)`}),(0,G.jsx)(ye,{children:`Session analysis:`}),(0,G.jsx)(be,{children:Q(pe)})]}),(0,G.jsxs)(R,{children:[(0,G.jsx)(ve,{$color:`var(--color-credit-chat)`}),(0,G.jsx)(ye,{children:`Chat:`}),(0,G.jsx)(be,{children:Q(z)})]})]})]}),Ee={key:`projects`,title:`Automatic session analysis`,description:s?`Control where Tara automatically watches and analyzes session recordings.`:`Where Tara automatically watches and analyzes session recordings.`,node:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Ke,{projects:v.data,isLoading:v.isLoading,errorFallback:v.error?(0,G.jsx)(Qe,{error:v.error}):null,aiAppEnabledById:N,aiAppsLoaded:!!l.data,pendingToggles:y,blockedAppIds:E,onToggleRequest:Te,canToggle:s}),O?(0,G.jsx)(Ce,{role:`status`,children:O}):null]})},J=(0,G.jsxs)(L,{children:[(0,G.jsx)(D,{width:`180px`,height:`13px`,radius:`6px`}),(0,G.jsx)(D,{width:`100%`,height:`12px`,radius:`9999px`,index:1}),(0,G.jsx)(D,{width:`240px`,height:`12px`,radius:`6px`,index:2})]}),Y=[...o?[{key:`plan`,title:`Tara AI plan`,description:`What your organization plan includes, and how much is used`,node:c.isLoading?(0,G.jsxs)(he,{children:[(0,G.jsx)(D,{width:`80px`,height:`24px`,radius:`8px`}),(0,G.jsx)(D,{width:`80px`,height:`24px`,radius:`8px`,index:1}),(0,G.jsx)(D,{width:`80px`,height:`24px`,radius:`8px`,index:2})]}):j?(0,G.jsxs)(G.Fragment,{children:[K(j),q()]}):(0,G.jsx)(Qe,{error:c.error})}]:[],...H?a?[{key:`your-ai-usage`,title:`Your AI usage`,labelExtra:(0,G.jsx)(ze,{}),node:V?(0,G.jsx)(He,{snapshot:V}):J}]:[{key:`weekly-credits`,title:`Your weekly AI credits`,labelExtra:(0,G.jsx)(ze,{}),node:V?(0,G.jsx)(Ue,{snapshot:V}):J},...V?.orgPool?[{key:`extra-team-credits`,title:(0,G.jsxs)(`span`,{className:`inline-flex items-center gap-2`,children:[(0,G.jsx)(Z,{}),`Extra team credits`]}),description:`Extra shared credits that keep you going after your weekly credits are used up.`,node:(0,G.jsx)(We,{snapshot:V})}]:[]]:[],...U?[{key:`team-usage`,title:`Team usage`,description:`Credit usage per teammate`,node:W?(0,G.jsx)(Ae,{snapshot:W}):(0,G.jsxs)(L,{children:[(0,G.jsx)(D,{width:`220px`,height:`13px`,radius:`6px`}),(0,G.jsx)(D,{width:`100%`,height:`12px`,radius:`9999px`,index:1}),(0,G.jsx)(D,{width:`100%`,height:`120px`,radius:`8px`,index:2})]})}]:[],Ee];return(0,G.jsxs)(`div`,{children:[(0,G.jsx)(le,{title:`Tara AI usage`,description:a?`Organization plan, your usage limits, and where Tara automatically analyzes sessions.`:`View your AI usage and where sessions are auto-analyzed.`}),(0,G.jsx)(f,{className:`overflow-visible p-0`,children:(0,G.jsx)(`div`,{className:`px-6`,children:Y.map((e,t)=>(0,G.jsx)(ue,{title:e.title,description:e.description,labelExtra:e.labelExtra,isLast:t===Y.length-1,children:e.node},e.key))})})]})},et=(0,G.jsx)(M,{title:`Tara AI is not enabled`,description:`This organization's plan doesn't include Tara AI. Contact your organization owner to enable it.`}),$=()=>{j(`wa_settings_tara_ai_viewed`,`settings_org`,{scope:`org`});let{selectedOrgId:e}=ne(),t=w(e||null);return t.error instanceof _&&t.error.statusCode===403?et:(0,G.jsx)(ae,{fallback:et,children:(0,G.jsx)($e,{})})};export{$ as TaraAiSettingsPage,$ as default};