const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/javascript-nEBsLRAt.js","assets/js/rolldown-runtime-C5Y2Ol-c.js","assets/js/javascript-Ck_Kdvpb.js","assets/js/typescript-VaXwCtSA.js","assets/js/json-SqaA16Ii.js","assets/js/python-B0wCt58X.js","assets/js/bash-BBh4sEw6.js","assets/js/sql-CZqgArL5.js","assets/js/yaml-qbBLJJ2H.js","assets/js/prism-light-BI5BQYM4.js","assets/js/extends-B_2CNyqb.js","assets/js/icons-vendor-C23rQ2ix.js"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$ as t,$r as n,En as r,H as i,N as a,Qt as o,Rt as s,Zr as c,a as l,c as u,j as d,jt as f,n as p,qt as m,rt as h,yr as g}from"./icons-vendor-C23rQ2ix.js";import{_t as _}from"./radix-vendor-DlJdQz7_.js";import{Cn as v}from"./ds-BJhQ4zht.js";import{O as y,d as b,f as x,p as S,u as C,w}from"./markdown-vendor-BoH6QLuc.js";import{Q as T,un as E}from"./PrimaryNav-CxHD5Sf1.js";import{$ as D,n as ee}from"./NavigationContext-DTwRip-h.js";import{T as O,_i as k,di as te,gi as A,ui as j}from"./TaraChatContext-Ne5fUqNv.js";import{t as M}from"./preload-helper-B9ed4rUe.js";import{dt as N}from"./atlas-C0G2HGCl.js";import{r as ne}from"./textColorPalette-DSxUuk7A.js";var P=e(n(),1),F=y(),re=`mx-0.5 inline-flex max-w-full items-center gap-1.5 rounded-[var(--radius-full)] border border-[var(--border)] bg-[var(--secondary)] px-2.5 py-1 align-middle text-[13px] font-medium text-[var(--text-1)] transition-colors hover:border-[var(--primary)] hover:bg-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]`;function ie({prompt:e,onAsk:t}){return(0,F.jsxs)(`button`,{type:`button`,onClick:(0,P.useCallback)(()=>t(e),[t,e]),className:re,"data-testid":`digest-ask-chip`,"aria-label":`Ask Tara: ${e}`,children:[(0,F.jsx)(`svg`,{"aria-hidden":`true`,width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`shrink-0 text-[var(--primary)]`,children:(0,F.jsx)(`path`,{d:`M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z`})}),(0,F.jsx)(`span`,{className:`truncate`,children:e})]})}function ae(e){switch(e){case`up_bad`:return{glyph:`▲`,colorClass:`text-[var(--color-critical-text)]`,srLabel:`up (worse)`};case`down_good`:return{glyph:`▼`,colorClass:`text-[var(--color-good-text)]`,srLabel:`down (better)`};default:return{glyph:`→`,colorClass:`text-[var(--text-3)]`,srLabel:`flat`}}}var oe=`mx-0.5 inline-flex items-baseline gap-1 align-baseline`;function se({metric:e}){let t=ae(e.dir),n=!!(e.label&&e.label.trim());return(0,F.jsxs)(`span`,{className:oe,"data-testid":`digest-metric-chip`,"data-direction":e.dir,children:[n?(0,F.jsx)(`span`,{className:`text-[12px] text-[var(--text-3)]`,children:e.label}):null,(0,F.jsx)(`span`,{className:`text-sm font-semibold text-[var(--text-1)]`,children:e.value}),e.delta?(0,F.jsxs)(`span`,{className:`inline-flex items-center gap-0.5 text-[12px] font-semibold ${t.colorClass}`,children:[(0,F.jsx)(`span`,{"aria-hidden":`true`,children:t.glyph}),(0,F.jsx)(`span`,{children:e.delta}),(0,F.jsx)(`span`,{className:`sr-only`,children:t.srLabel})]}):(0,F.jsxs)(`span`,{className:`text-[12px] font-semibold ${t.colorClass}`,children:[(0,F.jsx)(`span`,{"aria-hidden":`true`,children:t.glyph}),(0,F.jsx)(`span`,{className:`sr-only`,children:t.srLabel})]})]})}var I=N(`tara-inline-reference relative inline-flex h-7 cursor-pointer items-center gap-1.5 align-middle rounded-full px-3`,`border border-[var(--border)] bg-[var(--card)] text-[var(--text-2)]`,`whitespace-nowrap text-[13px] font-medium leading-none no-underline`,`transition-[background-color,border-color,color,box-shadow] duration-[var(--motion-fast)]`,`hover:bg-[var(--muted)] hover:text-[var(--foreground)]`,`focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_color-mix(in_oklab,var(--ring)_40%,transparent)]`,`[&_svg]:h-3 [&_svg]:w-3 [&_svg]:shrink-0 [&_svg]:text-[var(--text-3)]`),L=N(`tara-citation-marker relative inline-flex h-4 min-w-[22px] cursor-pointer items-center justify-center gap-[3px] rounded-full px-[5px] align-[0.18em]`,`border-0 bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] text-[var(--primary)]`,`whitespace-nowrap font-mono text-[10.5px] font-semibold leading-none no-underline tabular-nums`,`transition-[background-color] duration-[var(--motion-fast)]`,`hover:bg-[color-mix(in_oklab,var(--primary)_18%,transparent)]`,`focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_color-mix(in_oklab,var(--ring)_40%,transparent)]`,`before:content-[''] before:absolute before:-inset-x-1 before:-inset-y-1`,`[@media(pointer:coarse)]:h-[22px] [@media(pointer:coarse)]:px-2 [@media(pointer:coarse)]:text-[11.5px]`,`[&_svg]:h-2.5 [&_svg]:w-2.5 [&_svg]:shrink-0`),ce=e(_(),1),le=350,R=({href:e,label:t,icon:n,preview:r,onOpenFull:i,title:a,pending:o=!1,disabled:c=!1,citationNumber:l=null})=>{let u=(0,P.useRef)(null),d=(0,P.useRef)(null),[m,h]=(0,P.useState)(!1),[g,_]=(0,P.useState)(null),v=(0,P.useCallback)(()=>{let e=u.current?.getBoundingClientRect();if(!e||typeof window>`u`)return;let t=Math.min(560,window.innerWidth-24);_({left:Math.max(12,Math.min(e.left,window.innerWidth-t-12)),top:window.innerHeight-e.bottom>=le?e.bottom+8:Math.max(12,e.top-le-8),width:t})},[]);(0,P.useLayoutEffect)(()=>{m&&v()},[m,v]),(0,P.useEffect)(()=>{if(!m)return;let e=e=>{let t=e.target;u.current?.contains(t)||d.current?.contains(t)||h(!1)},t=e=>{e.key===`Escape`&&h(!1)};return window.addEventListener(`resize`,v),window.addEventListener(`scroll`,v,!0),document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),()=>{window.removeEventListener(`resize`,v),window.removeEventListener(`scroll`,v,!0),document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)}},[m,v]);let y=u.current?.closest(`.atlas-root`)??(typeof document<`u`?document.body:null);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`a`,{ref:u,href:e,className:N(`evidence-inline-link`,l==null?I:L,(c||o)&&`cursor-wait opacity-70`),title:a,"aria-expanded":r?m:void 0,"aria-haspopup":r?`dialog`:void 0,"aria-busy":o||void 0,"aria-disabled":c||o||void 0,onClick:e=>{e.preventDefault(),!(c||o)&&(r?h(e=>!e):i())},children:[o?(0,F.jsx)(s,{className:`motion-safe:animate-spin`,"data-testid":`inline-evidence-reference-spinner`,"aria-hidden":`true`}):n,l==null?t:(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{"aria-hidden":`true`,children:l}),(0,F.jsx)(`span`,{className:`sr-only`,children:t})]}),o?(0,F.jsx)(`span`,{className:`sr-only`,children:`Opening report`}):null]}),m&&r&&y&&g&&(0,ce.createPortal)((0,F.jsxs)(`div`,{ref:d,role:`dialog`,"aria-label":`Evidence preview`,"data-testid":`inline-evidence-preview`,className:N(`z-[1000] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)]`,`bg-[var(--card)] text-[var(--text-1)] shadow-[0_18px_50px_rgba(16,24,40,0.22)]`),style:{position:`fixed`,left:g.left,top:g.top,width:g.width},children:[(0,F.jsxs)(`div`,{className:`flex h-10 items-center justify-between border-b border-[var(--border)] px-3`,children:[(0,F.jsx)(`span`,{className:`text-xs font-semibold text-[var(--text-2)]`,children:`Evidence preview`}),(0,F.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,F.jsxs)(`button`,{type:`button`,className:`inline-flex h-7 items-center gap-1.5 rounded-[var(--radius-sm)] px-2 text-xs font-medium text-[var(--text-2)] hover:bg-[var(--muted)]`,onClick:()=>{h(!1),i()},children:[(0,F.jsx)(f,{size:13,"aria-hidden":`true`}),`Open full view`]}),(0,F.jsx)(`button`,{type:`button`,"aria-label":`Close evidence preview`,className:`inline-flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-3)] hover:bg-[var(--muted)] hover:text-[var(--text-1)]`,onClick:()=>h(!1),children:(0,F.jsx)(p,{size:14,"aria-hidden":`true`})})]})]}),r]}),y)]})},ue={javascript:()=>M(()=>import(`./javascript-nEBsLRAt.js`),__vite__mapDeps([0,1,2])),typescript:()=>M(()=>import(`./typescript-VaXwCtSA.js`),__vite__mapDeps([3,1])),json:()=>M(()=>import(`./json-SqaA16Ii.js`),__vite__mapDeps([4,1])),python:()=>M(()=>import(`./python-B0wCt58X.js`),__vite__mapDeps([5,1])),bash:()=>M(()=>import(`./bash-BBh4sEw6.js`),__vite__mapDeps([6,1])),sql:()=>M(()=>import(`./sql-CZqgArL5.js`),__vite__mapDeps([7,1])),yaml:()=>M(()=>import(`./yaml-qbBLJJ2H.js`),__vite__mapDeps([8,1]))},de=[C],fe=[x,[C,{...b,tagNames:[...b.tagNames??[],`u`],attributes:{...b.attributes,span:[...b.attributes?.span??[],`style`]}}]],pe=({node:e,style:t,children:n})=>{let r=typeof t?.color==`string`?t.color.trim():``,i=ne(r)?r:void 0;return(0,F.jsx)(`span`,{style:i?{color:i}:void 0,children:n})},z=null,B=null,V=new Set;function me(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`_`).replace(/^_+|_+$/g,``)}function he(e){let t=e.split(`
`),n=[],r=null;for(let e=0;e<t.length;e+=1){let i=t[e].match(/^\s*(`{3,}|~{3,})/);if(i){let e=i[1][0];r===null?r=e:r===e&&(r=null);continue}if(r!==null)continue;let a=t[e].match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);a&&n.push({level:a[1].length,title:a[2].trim(),lineIndex:e})}let i=new Set;return n.map((e,r)=>{let a=e.lineIndex+1,o=me(e.title),s=!o||i.has(o)?`${o||`section`}_${a}`:o;i.add(o);let c=r+1<n.length?n[r+1].lineIndex:t.length,l=t.slice(e.lineIndex,c).join(`
`).trim();return{key:s,title:e.title,level:e.level,line:a,markdown:l}})}var ge=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`];function _e(e,t){let n=new Map;for(let t of e.sections)n.set(t.line,t);let r=r=>function({children:i,node:a,...o}){let s=a?.position?.start?.line,c;return typeof s==`number`?c=n.get(s):(c=e.sections[e.cursor],e.cursor+=1),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(r,{...o,children:i}),c?t(c):null]})};return ge.reduce((e,t)=>(e[t]=r(t),e),{})}function H(e){if(!e)return null;let t=e.trim();return t?/^s\d+$/i.test(t)?t.toUpperCase():t:null}function U(e){if(!e)return null;let t=Number(e);return Number.isFinite(t)?t:null}function ve(e){return e.replace(/\r?\n/g,` `).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\\/g,`\\\\`).replace(/\[/g,`\\[`).replace(/\]/g,`\\]`).replace(/\*/g,`\\*`).replace(/_/g,`\\_`).replace(/`/g,"\\`").replace(/~/g,`\\~`).replace(/\|/g,`\\|`)}function W(e,t){return`[${ve(e)}](<${t}>)`}function ye(e){return e.replace(/\\([\\[\]*_`~|])/g,`$1`).replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&amp;/g,`&`)}function G(e){if(!e)return null;try{let t=typeof window<`u`&&window.location?.href?window.location.href:`https://tara.local/`,n=new URL(e,t),r=null,i=null,a=null,o=null,s=null,c=null,l=null,u=null,d=null;if(n.pathname===`/tara`){let e=n.searchParams.get(`tara_link_kind`);if(e!==`session`&&e!==`screenvisit`)return null;r=e,i=n.searchParams.get(`app`),a=n.searchParams.get(`replay_session`),o=n.searchParams.get(`tara_session_alias`),s=n.searchParams.get(`tara_evidence_item_id`),c=n.searchParams.get(`tara_row_id`),l=n.searchParams.get(`tara_local_alias`),u=n.searchParams.get(`tara_screen_visit_id`),d=U(n.searchParams.get(`replay_t`))}else return null;return!r||!i?null:{kind:r,appId:i,sessionId:a,sessionAlias:o,evidenceItemId:s,rowId:c,localAlias:l,screenVisitId:u,startTimeSec:d}}catch{return null}}function be(e){if(!e)return null;try{let t=typeof window<`u`&&window.location?.href?window.location.href:`https://tara.local/`,n=new URL(e,t);if(n.pathname!==`/tara`||n.searchParams.get(`tara_link_kind`)!==`evidence`)return null;let r=n.searchParams.get(`app`),i=n.searchParams.get(`tara_evidence_item_id`),a=n.searchParams.get(`tara_evidence_ref_id`)??i;return!i||!a?null:{appId:r,refId:a,evidenceItemId:i}}catch{return null}}function xe(e){if(!e)return null;try{let t=typeof window<`u`&&window.location?.href?window.location.href:`http://localhost/`,n=new URL(e,t);if(n.pathname!==`/analytics/reports`)return null;let r=new URL(t).origin;if(n.origin!==r)return null;let i=n.searchParams.get(`brief_report`),a=n.searchParams.get(`evidence_key`);return!i||!a?null:{appId:n.searchParams.get(`app`),reportId:i,evidenceKey:a,href:`${n.pathname}${n.search}`}}catch{return null}}function K(e){if(e.kind!==`session`)return null;let t=e.sessionId??e.sessionAlias??e.rowId??e.evidenceItemId;return t?`replay:${t}`:null}function q(e,t){let n=t.sessionContext?.app_id||null;return A(Oe(Ae(ke(n?Pe(e,n,t.sessionReplayBindings??[]):e,{appId:n,evidenceBindings:t.inlineEvidenceBindings,artifactBindings:t.inlineArtifactBindings,linkify:t.linkify}),{appId:n,bindings:t.inlineArtifactBindings,linkify:t.linkify}),{appId:n,bindings:t.inlineEvidenceBindings,linkify:t.linkify}).replace(/[ \t]*\(\s*(?:see\s*)?\)/gi,``),t.sessionContext??null)}function Se(e,t,n){return Ce(q(e,t),n)}function Ce(e,t){if(!e)return null;let n=[],r=new Map,i=new Map,a=/\[(?:[^\]\\]|\\.)*\]\(\s*(<[^>]*>|[^)\s]+)[^)]*\)/g,o;for(;(o=a.exec(e))!==null;){let e=o[1].startsWith(`<`)?o[1].slice(1,-1):o[1],a=null,s=null,c=null,l=be(e);if(l)a=`evidence:${l.refId}`,s=`evidence`,c=l.evidenceItemId;else{let t=G(e);t&&(a=K(t),s=`replay`,c=t.evidenceItemId)}if(!a||!s||!c||t&&!t.has(c)||r.has(a))continue;let u=i.get(c);u||(u={canonicalKey:`item:${c}`,family:s,number:n.length+1,evidenceItemId:c},n.push(u),i.set(c,u)),r.set(a,u)}return n.length>0?{entries:n,byKey:r,byEvidenceItemId:i}:null}function we(e){if(!e)return null;try{let t=typeof window<`u`&&window.location?.href?window.location.href:`http://localhost/`,n=new URL(e,t);if(n.pathname!==`/tara`||n.searchParams.get(`tara_link_kind`)!==`ask`)return null;let r=n.searchParams.get(`tara_ask_prompt`);return r?{prompt:r}:null}catch{return null}}function Te(e){if(!e)return null;try{let t=typeof window<`u`&&window.location?.href?window.location.href:`http://localhost/`,n=new URL(e,t);if(n.pathname!==`/tara`||n.searchParams.get(`tara_link_kind`)!==`metric`)return null;let r=n.searchParams.get(`tara_metric_label`),i=n.searchParams.get(`tara_metric_value`),a=n.searchParams.get(`tara_metric_dir`);if(!i||a!==`up_bad`&&a!==`down_good`&&a!==`flat`)return null;let o=n.searchParams.get(`tara_metric_delta`);return{value:i,dir:a,label:r||void 0,delta:o||void 0}}catch{return null}}function J(e,t,n){let r=new URLSearchParams;return r.set(`app`,e),r.set(`replay_src`,`tara`),r.set(`tara_link_kind`,`evidence`),r.set(`tara_evidence_item_id`,n),r.set(`tara_evidence_ref_id`,t),`/tara?${r.toString()}`}function Ee(e,t){return!e||e.length===0?null:e.find(e=>e.refId===t)??null}function De(e,t){return!e||e.length===0?null:e.find(e=>e.artifactId===t)??null}function Oe(e,t){return e.replace(/([ \t]*)\{\{evidence:([^}\s|)]+)\}\}?/g,(e,n,r)=>{let i=String(r??``).trim(),a=i?Ee(t.bindings,i):null;if(!a)return``;let o=a.label||`Evidence`,s=a.evidenceItemId;return i?!t.linkify||!t.appId?o:`${n}${W(o,J(t.appId,i,s))}`:``})}function ke(e,t){let n=e.replace(/\[([^\]]+)\]\(\s*\{\{?evidence:([^}\s]+)\}\}?\s*\)/gi,(e,n,r)=>{let i=ye(String(n??``).trim())||`Evidence`,a=String(r??``).trim(),o=a?Ee(t.evidenceBindings,a):null,s=o?.evidenceItemId;return!o||!a||!t.linkify||!t.appId||!s?i:W(i,J(t.appId,a,s))});return n=n.replace(/\[([^\]]+)\]\(\s*\{\{?artifact:([^}\s]+)\}\}?\s*\)/gi,(e,n,r)=>{let i=ye(String(n??``).trim())||`Analysis`,a=String(r??``).trim(),o=(a?De(t.artifactBindings,a):null)?.evidenceItemId?.trim();return!a||!t.linkify||!t.appId||!o?i:W(i,J(t.appId,a,o))}),n}function Ae(e,t){return e.replace(/\{\{?artifact:([^}\s]+)\}\}?/gi,(e,n)=>{let r=String(n??``).trim(),i=r?De(t.bindings,r):null,a=(i?.label??`Analysis`)||`Analysis`,o=i?.evidenceItemId?.trim();return!r||!t.linkify||!t.appId||!o?a:W(a,J(t.appId,r,o))})}function je(e,t){let n=e.sessionId||(e.sessionAlias&&t===void 0?k(e.sessionAlias):null),r=!!(e.evidenceItemId&&e.rowId);return{appId:e.appId,evidenceItemId:e.evidenceItemId,rowId:e.rowId,localAlias:r?e.localAlias??e.sessionAlias:null,sessionAlias:r?null:e.sessionAlias,sessionId:n,screenVisitId:e.screenVisitId,startTimeSec:e.startTimeSec}}function Me(e){return e.sessionId?te(e.appId,e.sessionId,e.startTimeSec==null?void 0:String(e.startTimeSec)):null}function Ne(e){let t=new Map,n=new Map;for(let r of e){r.mentionKey&&!t.has(r.mentionKey)&&t.set(r.mentionKey,r);for(let e of r.sessionReferences){let t=H(e);if(!t)continue;let i=n.get(t)??[];i.push(r),n.set(t,i)}}return{byMentionKey:t,bySessionRef:n}}function Pe(e,t,n){if(n.length===0)return e;let r=Ne(n),i=e.replace(/\{\{session:([^}\s)]+)\}\}?/g,(e,n)=>{let i=H(String(n)),a=O({kind:`session`,sessionRef:i}),o=(a?r.byMentionKey.get(a):null)??(i?r.bySessionRef.get(i)?.[0]:null);return o?j(`Session ${o.localAlias}`,{kind:`session`,appId:t,evidenceItemId:o.evidenceItemId,rowId:o.rowId,localAlias:o.localAlias,sessionId:o.sessionId,screenVisitId:o.screenVisitId,startTimeSec:o.startTimeSec==null?null:String(o.startTimeSec)}):e});return i=i.replace(/\{\{screenvisit:([^,}]+),([^,}]+)(?:,([^}]*))?\}\}/g,(e,n,i,a)=>{let o=H(String(n)),s=a?String(a).replace(`&#44;`,`,`).trim():null,c=O({kind:`screenvisit`,sessionRef:o,startTimeSec:U(String(i).trim()),screenName:s}),l=c?r.byMentionKey.get(c):null;if(!l)return e;let u=String(i).trim();return j(s?`${s} @${u}s`:`Screen @${u}s`,{kind:`screenvisit`,appId:t,evidenceItemId:l.evidenceItemId,rowId:l.rowId,localAlias:l.localAlias,sessionId:l.sessionId,screenVisitId:l.screenVisitId,startTimeSec:u})}),i}function Fe(e){return typeof e==`string`?e:Array.isArray(e)?e.map(e=>typeof e==`string`?e:``).join(``):``}var Ie=({className:e,children:t})=>{let[n,r]=(0,P.useState)(!1),i=/language-(\w+)/.exec(e||``),a=!e,o=i?i[1]:``;return(0,P.useEffect)(()=>{!a&&i&&!n?(async()=>{try{if(!z){let[e,t]=await Promise.all([M(()=>import(`./prism-light-BI5BQYM4.js`),__vite__mapDeps([9,1,10,11,2])),M(()=>import(`./tomorrow-BlGLzNQs.js`),[])]);z=e.Light||e.default,B=t.default}let e=ue[o];if(e&&!V.has(o))try{let t=await e();z?.registerLanguage?.(o,t.default),V.add(o)}catch(e){console.warn(`Failed to load syntax highlighting for ${o}:`,e)}r(!0)}catch(e){console.error(`Failed to load syntax highlighter:`,e),r(!0)}})():a&&r(!0)},[a,i,o,n]),a||!i?(0,F.jsx)(`code`,{className:e,children:t}):!n||!z?(0,F.jsx)(`pre`,{className:`loading-code-block`,children:(0,F.jsx)(`code`,{className:e,children:String(t).replace(/\n$/,``)})}):(0,F.jsx)(z,{style:B,language:o,PreTag:`div`,children:String(t).replace(/\n$/,``)})},Le=({rawJson:e,isStreaming:t=!1,target:n=`dashboard`})=>{let r=null,i=!1;try{let t=JSON.parse(e);i=!0,t&&typeof t==`object`&&typeof t.title==`string`&&(r=t.title)}catch{}let a=t&&!i,o=n===`screen`;return(0,F.jsxs)(`section`,{"data-testid":o?`screen-insight-json-card`:`insight-json-card`,className:`my-2 flex flex-col gap-1 rounded-[8px] border border-[var(--border)] bg-[var(--muted)] px-3 py-2`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2 text-[12.5px] font-medium text-[var(--foreground)]`,children:[(0,F.jsx)(d,{size:14,"aria-hidden":!0,className:`shrink-0 text-[var(--primary)]`}),(0,F.jsx)(`span`,{children:a?`Preparing the ${o?`screen`:`dashboard`} analysis card…`:r??`${o?`Screen`:`Dashboard`} analysis card`})]}),(0,F.jsx)(`p`,{className:`m-0 text-[11.5px] text-[var(--muted-foreground)]`,children:a?`It will be saved to ${o?`Screen Analytics`:`the dashboard`} when the analysis completes.`:o?`Saved to Screen Analytics — see the Tara brief on the Overview tab.`:`Saved to the dashboard — see the Tara analysis strip at the top of the board.`}),a?null:(0,F.jsxs)(`details`,{className:`text-[11px] text-[var(--muted-foreground)]`,children:[(0,F.jsx)(`summary`,{className:`cursor-pointer select-none`,children:`Show data`}),(0,F.jsx)(`pre`,{className:`mt-1 max-h-64 overflow-auto whitespace-pre-wrap break-words text-[10.5px]`,children:e})]})]})},Re=({className:e,children:t,resolver:n})=>{let r=Fe(t),i=r.includes(`
`)?``:r.trim(),a=i?n(i):null;return a?(0,F.jsx)(`button`,{type:`button`,className:`ds-entity-link`,"data-entity-kind":a.kind,"aria-label":a.ariaLabel,onClick:e=>{e.preventDefault(),a.onActivate()},children:t}):(0,F.jsx)(Ie,{className:e,children:t})},ze=({content:e,className:t=``,isStreaming:n=!1,sessionContext:r=null,sessionReplayBindings:a=[],inlineEvidenceBindings:o,inlineArtifactBindings:c,onSessionReplayLinkClick:l,onEvidenceLinkClick:u,renderEvidencePreview:d,onAnalyticsReportLinkClick:f,renderSectionActions:p,onAskChip:m,entityResolver:_,citationIndex:v=null,evidenceCitationIndex:y=null,enableInlineColor:b=!1})=>{let x=r?.app_id||null,C=(0,P.useRef)(null),[T,E]=(0,P.useState)(null),D=e=>{if(!f||C.current)return;let t=[e.appId??``,e.reportId,e.evidenceKey].join(`:`);C.current=t,E(t),(async()=>{try{await f(e)}catch{}finally{C.current===t&&(C.current=null,E(null))}})()},ee=q(e,{sessionContext:r,sessionReplayBindings:a,inlineEvidenceBindings:o,inlineArtifactBindings:c,linkify:!!u}),O=p?{sections:he(e),cursor:0}:null,k=O&&p?_e(O,p):null;return(0,F.jsx)(`div`,{className:`markdown-content ${t} ${n?`streaming`:``}`,children:(0,F.jsx)(w,{remarkPlugins:[S],rehypePlugins:b?fe:de,components:{...k??{},...b?{span:pe}:{},pre({children:e,node:t,...r}){let i=P.Children.toArray(e).find(e=>P.isValidElement(e)),a=typeof i?.props.className==`string`?i.props.className:``,o=/\blanguage-insight-json\b/.test(a),s=/\blanguage-screen-insight-json\b/.test(a);return o||s?(0,F.jsx)(Le,{rawJson:Fe(i?.props.children).replace(/\n$/,``),isStreaming:n,target:s?`screen`:`dashboard`}):(0,F.jsx)(`pre`,{...r,children:e})},code({className:e,children:t,...n}){return _&&!e?(0,F.jsx)(Re,{className:e,resolver:_,children:t}):(0,F.jsx)(Ie,{className:e,...n,children:t})},a({children:e,href:t,title:n,node:a,...p}){if(m){let e=we(t);if(e)return(0,F.jsx)(ie,{prompt:e.prompt,onAsk:m});let n=Te(t);if(n)return(0,F.jsx)(se,{metric:n})}let _=G(t);if(_){let t=Me(je(_,r?.session_aliases)),i=_.kind===`session`,a=_.kind===`screenvisit`,o=i?K(_):null,s=v&&o?v.byKey.get(o)??null:null,c=i&&v?_.localAlias:null,u=_.sessionId&&y?y.sessionAliasById.get(_.sessionId)??null:null,d=_.sessionId&&y?y.sessionMetaById.get(_.sessionId)??null:null;return(0,F.jsxs)(`a`,{href:t??`#`,className:u||s||c?`replay-pill-link ${L}`:i?`replay-pill-link ${I}`:`replay-inline-link`,title:d?.label??n,target:a&&!u&&t?`_blank`:void 0,rel:a&&!u&&t?`noopener noreferrer`:void 0,onClick:e=>{let t=je(_,r?.session_aliases),n=Me(t);if(l){e.preventDefault(),l(t);return}if(!n){e.preventDefault();return}e.preventDefault(),a?window.open(n,`_blank`,`noopener,noreferrer`):window.location.href=n},...p,children:[(i||u)&&(0,F.jsx)(h,{"aria-hidden":`true`}),u?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{"aria-hidden":`true`,children:u}),(0,F.jsx)(`span`,{className:`sr-only`,children:d?.accessibleLabel??e})]}):c?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{"aria-hidden":`true`,children:c}),(0,F.jsx)(`span`,{className:`sr-only`,children:e})]}):s?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{"aria-hidden":`true`,children:s.number}),(0,F.jsx)(`span`,{className:`sr-only`,children:e})]}):e]})}let b=be(t);if(b){let r=o?.find(e=>e.refId===b.refId&&e.evidenceItemId===b.evidenceItemId),a=c?.find(e=>e.artifactId===b.refId&&e.evidenceItemId===b.evidenceItemId);if(!r&&!a||!u)return(0,F.jsx)(F.Fragment,{children:e});let s=r?.kind===`report`||r?.kind===`analytics`,l={appId:b.appId??x,refId:b.refId,evidenceItemId:b.evidenceItemId},f=v?v.byKey.get(`evidence:${b.refId}`)??null:null;return(0,F.jsx)(R,{href:t??`#`,title:n,icon:s?(0,F.jsx)(g,{"aria-hidden":`true`}):(0,F.jsx)(i,{"aria-hidden":`true`}),label:e,citationNumber:f?.number??null,preview:d?.(l),onOpenFull:()=>u(l),...p})}let S=xe(t);if(S){let r=T===[S.appId??``,S.reportId,S.evidenceKey].join(`:`),i=T!==null,a=y?.analyticsNumberByKey.get(S.evidenceKey)??null;return a==null?(0,F.jsxs)(`a`,{href:t??`#`,className:`analytics-report-inline-link ${I}${i?` cursor-wait opacity-70`:``}`,title:n,"aria-busy":r||void 0,"aria-disabled":i||void 0,onClick:e=>{f&&(e.preventDefault(),!i&&D(S))},...p,children:[r?(0,F.jsx)(s,{className:`motion-safe:animate-spin`,"data-testid":`analytics-report-link-spinner`,"aria-hidden":`true`}):(0,F.jsx)(g,{"aria-hidden":`true`}),e,r?(0,F.jsx)(`span`,{className:`sr-only`,children:`Opening report`}):null]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{"data-testid":`digest-analytics-citation-label`,children:e}),` `,(0,F.jsx)(R,{href:t??`#`,title:n,icon:(0,F.jsx)(g,{"aria-hidden":`true`}),label:(0,F.jsxs)(F.Fragment,{children:[`Analytics evidence: `,e]}),citationNumber:a,pending:r,disabled:i,onOpenFull:()=>D(S)})]})}return(0,F.jsx)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,...p,children:e})},table({children:e,...t}){return(0,F.jsx)(`div`,{className:`table-container`,children:(0,F.jsx)(`table`,{...t,children:e})})}},children:ee})})},Be=`
.markdown-content {
  line-height: 1.6;
  color: inherit;
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  margin: 0.75rem 0 0.75rem 0;
  line-height: 1.3;
  font-weight: 600;
}

.markdown-content h1:first-child,
.markdown-content h2:first-child,
.markdown-content h3:first-child,
.markdown-content h4:first-child,
.markdown-content h5:first-child,
.markdown-content h6:first-child {
  margin-top: 0;
}

.markdown-content p {
  margin: 0.5rem 0;
  line-height: 1.5;
}

.markdown-content p:first-child {
  margin-top: 0;
}

.markdown-content p:last-child {
  margin-bottom: 0;
}

.markdown-content ul,
.markdown-content ol {
  margin: 0.75rem 0;
  padding-left: 1.5rem;
}

.markdown-content li {
  margin: 0.25rem 0;
  line-height: 1.4;
}

.markdown-content blockquote {
  margin: 0.75rem 0;
  padding: 0.5rem 1rem;
  border-left: 4px solid #E8E8EB;
  background: #FAFBFC;
  font-style: italic;
  color: #737886;
}

.markdown-content pre {
  margin: 0.75rem 0;
  padding: 0.75rem;
  background: #FAFBFC;
  border: 1px solid #E8E8EB;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.875rem;
}

.markdown-content code {
  background: #EEF2FF;
  padding: 1px 5px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  border: 1px solid #C7D2FE;
  color: #4F46E5;
}

.markdown-content pre code {
  background: none;
  padding: 0;
  border: none;
  font-family: var(--font-mono);
  font-size: inherit;
  font-weight: normal;
  color: inherit;
}

.table-container {
  overflow-x: auto;
  overflow: hidden;
  margin: 0.75rem 0;
  border: 1px solid #E8E8EB;
  border-radius: 8px;
}

.markdown-content table {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  font-size: 0.6875rem;
  min-width: 100%;
}

.markdown-content th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 600;
  color: #454B5D;
  background: #FAFBFC;
  border-bottom: 1px solid #E8E8EB;
}

.markdown-content td {
  padding: 8px 12px;
  text-align: left;
  color: #161E35;
  border-bottom: 1px solid #F0F0F2;
}

.markdown-content tr:last-child td {
  border-bottom: none;
}

.markdown-content hr {
  margin: 1rem 0;
  border: none;
  border-top: 1px solid #E8E8EB;
}

.markdown-content a {
  color: #6366F1;
  text-decoration: underline;
}

.markdown-content a.tara-inline-reference {
  color: var(--text-2);
  text-decoration: none;
}

.markdown-content a.tara-inline-reference:hover {
  color: var(--foreground);
  text-decoration: none;
}

.markdown-content a:hover {
  color: #4F46E5;
}

.markdown-content strong {
  font-weight: 600;
}

.markdown-content em {
  font-style: italic;
}

/* ── Dark mode overrides (body.dark-mode set by ThemeContext) ── */

.dark-mode .markdown-content blockquote {
  border-left-color: #3A3F4A;
  background: #16181D;
  color: #A0A4AB;
}

.dark-mode .markdown-content pre {
  background: #16181D;
  border-color: #3A3F4A;
}

.dark-mode .markdown-content code {
  background: rgba(139, 147, 255, 0.12);
  border-color: rgba(139, 147, 255, 0.25);
  color: #B0B7FF;
}

.dark-mode .markdown-content pre code {
  background: none;
  border: none;
  color: inherit;
}

.dark-mode .table-container {
  border-color: #3A3F4A;
}

.dark-mode .markdown-content th {
  color: #A0A4AB;
  background: #16181D;
  border-bottom-color: #3A3F4A;
}

.dark-mode .markdown-content td {
  color: #E8E8E8;
  border-bottom-color: #2D3139;
}

.dark-mode .markdown-content hr {
  border-top-color: #3A3F4A;
}

.dark-mode .markdown-content a {
  color: #8B93FF;
}

.dark-mode .markdown-content a:hover {
  color: #B0B7FF;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
`;if(typeof document<`u`&&!document.getElementById(`markdown-styles`)){let e=document.createElement(`style`);e.id=`markdown-styles`,e.textContent=Be,document.head.appendChild(e)}function Ve(e,t){return e===`private`?{value:e,label:`Private`,description:`Only you can view this note. Mentions and Tara are unavailable.`,icon:`private`}:e===`uxcam_internal`?{value:e,label:`UXCam only`,description:`Only UXCam teammates can view this note.`,icon:`uxcam`}:e===`uxcam_shared`?t===`uxcam`?{value:e,label:`Team + UXCam`,description:`The app team and UXCam can view and reply.`,icon:`shared`}:{value:e,label:`Team + UXCam`,description:`Your app team and invited UXCam teammates can view and reply.`,icon:`shared`}:{value:e,label:`Team`,description:`Everyone with access to this app can view and reply.`,icon:`app`}}function He(e){return e.allowed_visibilities.map(t=>Ve(t,e.author_mode))}function Ue(e){return e.some(e=>e.target_type===`uxcam_support`||e.target_type===`uxcam_user`)}var We=/(?:^|\s)#([A-Za-z0-9_-]{0,40})$/,Ge=/^[a-z0-9][a-z0-9_-]{0,39}$/;function Ke(e){let t=e.match(We);return t?t[1].toLowerCase():null}function qe(e){let t=e.trim().replace(/^#/,``).toLowerCase();return Ge.test(t)?t:null}function Je(e,t){if(e===null)return[];let n=e.toLowerCase(),r=t.filter(e=>e.label.includes(n)).slice(0,8).map(e=>({label:e.label,count:e.count})),i=qe(n);return i&&!r.some(e=>e.label===i)?[{label:i,count:0,isNew:!0},...r].slice(0,8):r}function Ye(e,t){let n=qe(t);return n?e.replace(We,(t,r,i)=>`${e[i]===`#`?``:t[0]}#${n} `):e}function Xe(e,t,n){let r=t?.selectionStart??e.length,i=t?.selectionEnd??r,a=`${r>0&&!/\s/.test(e[r-1]??``)?` `:``}${n}`;return{value:`${e.slice(0,r)}${a}${e.slice(i)}`,cursor:r+a.length}}function Ze(e){return e===`app`?`App`:e===`page`?`Page`:e===`screen`?`Screen`:e===`event`?`Event`:e===`session`?`Session`:e===`user`?`User`:e===`report`?`Report`:e===`dashboard`?`Dashboard`:e===`dashboard_block`?`Dashboard block`:e===`metric`?`Metric`:e===`digest`?`Digest`:`Context`}function Qe(e){return e===`dashboard_block`?`block`:Ze(e).toLowerCase()}function $e(e,t){if(t===`private`)return{enabled:!1,disabledReason:`Tara isn't available in private notes`};if(!e)return{enabled:!1,disabledReason:`Tara availability could not be confirmed. Try again in a moment.`};let n=e.tara;return!e.tara_enabled||n?.status===`unsupported`?{enabled:!1,disabledReason:n?.reason?.trim()||`Tara isn't available for this note`}:n?.status===`degraded`||n?.status===`definition_only`?{enabled:!0,informationalReason:n.reason?.trim()||(n.status===`definition_only`?`Tara can use this note and its saved definition, but live entity data is limited.`:`Tara can join this note, but some entity context may be unavailable.`)}:{enabled:!0}}function et(e){return/(^|[^\w@])@tara\b/i.test(e)}function tt(e){return e===`app`?(0,F.jsx)(c,{"aria-hidden":`true`}):e===`session`?(0,F.jsx)(l,{"aria-hidden":`true`}):e===`screen`?(0,F.jsx)(a,{"aria-hidden":`true`}):e===`event`?(0,F.jsx)(t,{"aria-hidden":`true`}):e===`user`?(0,F.jsx)(u,{"aria-hidden":`true`}):e===`report`||e===`digest`||e===`page`?(0,F.jsx)(r,{"aria-hidden":`true`}):e===`dashboard`||e===`dashboard_block`?(0,F.jsx)(o,{"aria-hidden":`true`}):e===`metric`?(0,F.jsx)(g,{"aria-hidden":`true`}):(0,F.jsx)(r,{"aria-hidden":`true`})}function nt(e){let t=v(e);return Number.isNaN(t.getTime())?``:t.toLocaleString(void 0,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}function rt(e,t=Date.now()){let n=v(e),r=n.getTime();if(Number.isNaN(r))return``;let i=Math.max(0,Math.round((t-r)/1e3));if(i<45)return`now`;let a=Math.round(i/60);if(a<60)return`${a}m`;let o=Math.round(a/60);if(o<24)return`${o}h`;let s=Math.round(o/24);return s===1?`yesterday`:s<7?`${s}d`:n.toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function it(e){return e.entity_label||e.entity_id}function at(e){let[t]=e.split(`@`);return t.split(/[._-]+/).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)||e}function ot(e){return at(e).charAt(0).toUpperCase()||`U`}function st(e){return e.label||e.name||e.email||e.target_id||`Mention`}function ct(e){return e.label&&!Y(e.label)?e.label:e.name&&!Y(e.name)?e.name:e.label||e.name||e.email||e.target_id||`Mention`}function lt(e){if(e.target_type===`tara`)return`tara:tara`;let t=e.email?e.email.toLowerCase():e.target_id||(e.label||e.name||``).toLowerCase();return`${e.target_type}:${t}`}function Y(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function ut(e){let t=new Set;return e.forEach(e=>{e.status===`Active`&&e.email&&t.add(e.email.toLowerCase())}),t}function dt(e,t){if(e.target_type!==`invited_user`)return!1;let n=e.email?.toLowerCase();return!n||!t.has(n)}function ft(e,t){return!e||Y(e)&&!Y(t)?!0:t.length<e.length&&!Y(t)}function pt(e){let t=new Map;return e.forEach(e=>{let n=lt(e),r=t.get(n);(!r||ft(st(r),st(e)))&&t.set(n,e)}),Array.from(t.values())}function mt(e){return e.some(e=>e.target_type===`uxcam_user`||e.target_type===`uxcam_support`)}function ht(e,t){return e===`private`||e===`uxcam_internal`?e:mt(t)?`uxcam_shared`:e}function gt(e){let t=new Map;return/(^|\s)@tara\b/i.test(e)&&t.set(`tara:tara`,Q()),/(^|\s)@(uxcam support|support|uxcam)\b/gi.test(e)&&t.set(`uxcam_support:uxcam_support`,{target_type:`uxcam_support`,target_id:`uxcam_support`,label:`UXCam Support`,name:`UXCam Support`}),Array.from(t.values())}var _t=`@[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}|@tara\\b|@uxcam support\\b|@support\\b|@uxcam\\b`;function vt(){return RegExp(`(${_t})`,`gi`)}function yt(e){return e.split(vt())}function bt(e){let t=new Map,n=(e,n)=>{let r=e?.trim().toLowerCase();r&&t.set(`@${r.replace(/^@/,``)}`,n)};return e.forEach(e=>{let t=`@${ct(e)}`;n(e.label,t),n(e.name,t),n(e.email,t),e.target_type===`tara`&&n(`tara`,`@Tara`),e.target_type===`uxcam_support`&&(n(`support`,t),n(`uxcam`,t),n(`uxcam support`,t))}),t}function xt(e,t){if(!e)return null;let n=bt(t);return yt(e).map((e,t)=>{if(!e)return null;let r=`${e}-${t}`,i=n.get(e.toLowerCase());return i?(0,F.jsx)(`span`,{className:`font-semibold text-[var(--primary)]`,children:i},r):(0,F.jsx)(P.Fragment,{children:e},r)})}var St=/(?:^|\s)@([^\s@]*@?[^\s@]*)$/;function Ct(e){let t=St.exec(e);return t?t[1].toLowerCase():null}function wt(e,t){let n=St.exec(e);return!n||n.index===void 0?`${e}${e.endsWith(` `)||e.length===0?``:` `}${t.insertText} `:`${e.slice(0,n.index)}${n[0].startsWith(` `)?` `:``}${t.insertText} `}function X(e){let t=e.email?e.email.toLowerCase():e.target_id||(e.label||e.name||``).toLowerCase();return[e.target_type,t].join(`:`)}function Tt(e,t){let n=e.toLowerCase();return t.target_type===`tara`?/(^|\s)@tara\b/i.test(e):t.target_type===`uxcam_support`?/(^|\s)@(uxcam support|support|uxcam)\b/i.test(e):!!(t.email&&n.includes(`@${t.email.toLowerCase()}`))}function Z(e,t,n){let r=new Map;return e.filter(e=>Tt(n,e)).forEach(e=>r.set(X(e),e)),t.forEach(e=>{let t=X(e);r.has(t)||r.set(t,e)}),Array.from(r.values())}function Et(e,t=[],n=!0,r={}){let i=r.taraDisabledReason??(r.taraDisabled?`Tara isn't available for this type of note yet`:void 0),a={id:`tara-ai`,label:`Tara`,description:i??r.taraInformationalReason??`AI analyst`,insertText:`@tara`,mention:Q(),ai:!0,disabled:!!r.taraDisabled,disabledReason:r.taraDisabled?i:void 0},o=[{id:`uxcam-support`,label:`UXCam Support`,description:`Share this note with UXCam support`,insertText:`@support`,mention:{target_type:`uxcam_support`,target_id:`uxcam_support`,label:`UXCam Support`,name:`UXCam Support`}}],s=t.flatMap(e=>{let t=e.email?.trim();if(!t)return[];let n=e.name||t;return[{id:`customer-${t}`,label:n,description:t,insertText:`@${t}`,mention:{target_type:t.toLowerCase().endsWith(`@uxcam.com`)?`uxcam_user`:`customer_user`,target_id:e.member_id||(e.invitation_id==null?t:String(e.invitation_id)),email:t,name:e.name||null,label:n}}]}).slice(0,20),c=[a,...o,...s];if(e===null)return[];let l=c.filter(t=>`${t.label} ${t.description} ${t.insertText}`.toLowerCase().includes(e));if(n&&l.length===0&&Y(e)){let t=e;return[{id:`invite-${t}`,label:`Invite ${t}`,description:`Invite to collaborate`,insertText:`@${t}`,mention:{target_type:`invited_user`,email:t,label:t}}]}let u=l.slice(0,6);return n&&u.push({id:`invite-teammate`,label:`Invite a teammate…`,description:`Add someone new to collaborate`,insertText:``,mention:{target_type:`invited_user`,label:`Invite a teammate`}}),u}function Q(){return{target_type:`tara`,target_id:`tara`,label:`Tara`,name:`Tara`}}var Dt=new Set([`customer_user`,`uxcam_user`,`uxcam_support`,`invited_user`,`tara`]);function Ot(e){if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.target_type!=`string`||!Dt.has(t.target_type)?!1:[`target_id`,`email`,`name`,`label`].every(e=>t[e]===void 0||t[e]===null||typeof t[e]==`string`)}function kt(e){if(!e||typeof window>`u`)return{body:``,mentions:[]};try{let t=window.sessionStorage.getItem(e);if(!t)return{body:``,mentions:[]};let n=JSON.parse(t);return typeof n.body!=`string`||!Array.isArray(n.mentions)?{body:``,mentions:[]}:{body:n.body,mentions:n.mentions.filter(Ot)}}catch{return{body:``,mentions:[]}}}function $(e,t,n){if(!(!e||typeof window>`u`))try{if(!t&&n.length===0){window.sessionStorage.removeItem(e);return}window.sessionStorage.setItem(e,JSON.stringify({body:t,mentions:n}))}catch{}}function At(e,t){let n=t?.onInviteSucceeded,r=!!t?.taraDisabled,i=t?.taraDisabledReason,a=t?.taraInformationalReason,o=t?.draftStorageKey,{selectedAppId:s,selectedOrgId:c}=ee(),l=D(c||null),u=(0,P.useMemo)(()=>l.data?.members??[],[l.data?.members]),{openInvite:d,capability:f}=E(),p=f.variant!==`hidden`,m=(0,P.useRef)(null);m.current===null&&(m.current=kt(o));let[h,g]=(0,P.useState)(()=>m.current?.body??``),[_,v]=(0,P.useState)(()=>m.current?.mentions??[]),y=(0,P.useRef)(null);(0,P.useEffect)(()=>{$(o,h,_)},[h,o,_]);let b=Ct(h),x=Ke(h),S=T(e,x??``,x!==null),C=(0,P.useMemo)(()=>Et(b,u,p,{taraDisabled:r,taraDisabledReason:i,taraInformationalReason:a}),[p,b,r,i,a,u]),w=(0,P.useMemo)(()=>Z(_,gt(h),h),[h,_]),O=(0,P.useMemo)(()=>Je(x,S.data?.items??[]),[x,S.data?.items]),k=(0,P.useCallback)(e=>{v(t=>Z(t,[e.mention],`${h} ${e.insertText}`)),g(t=>wt(t,e)),window.setTimeout(()=>y.current?.focus(),0)},[h]),te=(0,P.useCallback)(t=>{if(t.mention.target_type===`invited_user`){if(!p)return;let r=t.mention.email,i=!!r||!!n;d({source:`notes_unknown_mention`,...r?{prefillEmails:[r]}:{},appId:(e??s)||void 0,accessLevel:`application`,role:`collaborator`,onInvited:i?e=>{r&&k(t),n?.(e)}:void 0});return}k(t)},[e,p,k,n,d,s]),A=(0,P.useCallback)(()=>{if(r)return;let e=y.current,t=e?.selectionStart??h.length,n=e?.selectionEnd??t,i=t>0&&!/\s/.test(h[t-1]??``),a=!/\s/.test(h[n]??` `),o=`${i?` `:``}@tara${a?` `:``}`,s=`${h.slice(0,t)}${o}${h.slice(n)}`;v(e=>Z(e,[Q()],s)),g(s),window.setTimeout(()=>{y.current?.focus();let e=t+o.length;y.current?.setSelectionRange(e,e)},0)},[h,r]),j=(0,P.useCallback)(e=>{let t=Xe(h,y.current,e);g(t.value),window.setTimeout(()=>{y.current?.focus(),y.current?.setSelectionRange(t.cursor,t.cursor)},0)},[h]),M=(0,P.useCallback)(()=>j(`@`),[j]),N=(0,P.useCallback)(()=>j(`#`),[j]);return{draft:h,setDraft:g,mentions:w,suggestions:C,labelSuggestions:O,chooseSuggestion:te,chooseLabel:(0,P.useCallback)(e=>{g(t=>Ye(t,e.label)),window.setTimeout(()=>y.current?.focus(),0)},[]),insertMentionTrigger:M,insertLabelTrigger:N,insertTaraMention:A,reset:(0,P.useCallback)(()=>{g(``),v([]),$(o,``,[])},[o]),textareaRef:y}}function jt({mentions:e,enabled:t}){return!t||!Ue(e)?null:(0,F.jsxs)(`p`,{role:`status`,className:`m-0 flex items-start gap-1.5 rounded-md border border-[var(--border)] bg-[var(--muted)] px-2.5 py-2 text-[11px] leading-4 text-[var(--foreground,var(--text-2))]`,children:[(0,F.jsx)(m,{"aria-hidden":`true`,className:`mt-px size-3.5 flex-shrink-0`}),(0,F.jsx)(`span`,{children:`UXCam Support will be notified and can join this note.`})]})}export{L as A,He as C,G as D,xe as E,q as O,Ve as S,Se as T,xt as _,at as a,Q as b,tt as c,rt as d,nt as f,it as g,X as h,ot as i,I as j,R as k,Qe as l,dt as m,At as n,bt as o,et as p,ut as r,vt as s,jt as t,Ze as u,$e as v,ze as w,pt as x,ht as y};