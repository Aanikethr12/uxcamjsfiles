import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import{_t as n}from"./radix-vendor-DlJdQz7_.js";import{cn as r}from"./ds-BJhQ4zht.js";import{D as i,i as a,n as o}from"./ui-vendor-CUROeZIN.js";import{O as s}from"./markdown-vendor-BoH6QLuc.js";import{r as c}from"./fetchClient-BF44M5G_.js";import{o as l}from"./queryConfig-Nlc451hX.js";import{t as u}from"./useAuthStatus-BdbZHG0D.js";import{Ft as d}from"./NavigationContext-DTwRip-h.js";import{q as f}from"./CreateSegmentDialog-xTI_NlWz.js";var p={equal:`eq`,eq:`eq`,not_equal:`ne`,ne:`ne`,in:`in`,not_in:`nin`,nin:`nin`,greater:`gt`,gt:`gt`,greater_equal:`ge`,ge:`ge`,less:`lt`,lt:`lt`,less_equal:`le`,le:`le`,contains:`contains`,not_contains:`not_contains`,starts_with:`starts_with`,between:`between`,between_dates:`between`},m=new Set([`has_any`,`has_all`,`not_has_any`,`contains_any`,`not_contains_any`]),h=new Set([`friction_tags`,`is_ui_freeze`,`screen_property`,`action_sequence`,`action_sequence_ordered`,`action_sequence_conversion`]);function g(e){let{value:t}=e;return!!(t==null||t===``||Array.isArray(t)&&t.length===0)}function _(e){let t=[],n=[];for(let r of e){if(g(r))continue;if(f(r)){n.push(r);continue}if(h.has(r.attribute)){n.push(r);continue}let e=p[r.operator];if(!e){n.push(r);continue}let i={attribute:r.attribute,operator:e,value:r.value,...r.property_name?{property_key:r.property_name}:{}};t.push(i)}return{reportFilters:t,droppedFilters:n}}function v(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))r!=null&&r!==``&&t.set(n,String(r));return t.toString()}async function y(e,t,n,i,a,o={}){let s=v({page:i,per_page:a,sort_by:n.sort_by,sort_order:n.sort_order,...r(t.dateRange),provisional:o.provisionalTotal?`true`:void 0}),l=`/api/apps/${encodeURIComponent(e)}/sessions?${s}`,u={filters:d(t.filters)};return t.segmentId&&(u.mongo_segment_id=t.segmentId),o.widgetColumns&&o.widgetColumns.length>0&&(u.columns=[...o.widgetColumns],u.widget=!0),c(l,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(u)})}async function b(e,t,n,i,a,o,s,l){let u=v({per_page:n,keyset:`true`,cursor:i??void 0,sort_by:o.sort_by,sort_order:o.sort_order,...r(a)}),f=`/api/apps/${encodeURIComponent(e)}/sessions?${u}`,p={filters:d(s?[...t,s]:[...t])};return l&&l.length>0&&(p.columns=[...l]),c(f,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(p)})}async function x(e,t){let n=v({...r(t.dateRange)}),i=`/api/apps/${encodeURIComponent(e)}/sessions/stats?${n}`,a={filters:d(t.filters)};return t.segmentId&&(a.mongo_segment_id=t.segmentId),c(i,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(a)})}function S(e){let t={page:`1`,per_page:String(e.perPage),sort_by:e.sortBy||`recordedon`,sort_order:e.sortOrder||`desc`},n=r({from:e.dateFrom,to:e.dateTo,relativeDate:e.relativeDate});for(let[e,r]of Object.entries(n))r&&(t[e]=r);return e.hasVideo&&(t.has_video=`true`),e.crashed&&(t.crashed=`true`),e.hasRageTaps&&(t.has_rage_taps=`true`),e.hasUiFreeze&&(t.has_ui_freeze=`true`),e.frustrated&&(t.frustrated=`true`),e.aiFriction&&(t.ai_friction=`true`),e.excludeClassicFriction&&(t.exclude_classic_friction=`true`),e.eventName&&(t.event_name=e.eventName),t}async function C(e,t,n){let r=v(S(t)),i=`/api/apps/${encodeURIComponent(e)}/sessions?${r}`,a={filters:d(n)};return t.columns&&t.columns.length>0&&(a.columns=[...t.columns]),t.segmentId&&(a.segment_ids=[t.segmentId]),c(i,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(a)})}function w(e,t,n){return[`watchlist-sessions`,e,JSON.stringify(t),JSON.stringify(n)]}function T(e,t,n,r=!0){return a({queryKey:w(e,t,n),queryFn:()=>C(e,t,n),enabled:!!e&&r,...l.short})}async function E({appId:e,sessionId:t,uxcamuserId:n,isViewed:r}){return c(`/api/apps/${encodeURIComponent(e)}/sessions/${encodeURIComponent(t)}/viewed`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({isViewed:r,uxcamuserId:n})})}async function D(e,t,n){let r=v({date_from:n.from,date_to:n.to});return c(`/api/apps/${encodeURIComponent(e)}/sessions/video-status?${r}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({session_ids:[...t]})})}function O(e,t){return[`session-stats`,e,t.dateRange.from,t.dateRange.to,t.dateRange.fromTime??null,t.dateRange.toTime??null,t.dateRange.relativeDate??null,JSON.stringify(t.filters),t.segmentId??null]}async function k(e,t,n,r,i,a={}){return y(e,t,n,r,i,a)}async function A(e,t){return x(e,t)}var j={sort_by:`recordedon`,sort_order:`desc`};function M(e,t,n,r,i,a,o){return[`sessions`,`cursor`,e,JSON.stringify(t),n.from,n.to,n.fromTime??null,n.toTime??null,n.relativeDate??null,r.sort_by,r.sort_order,i?JSON.stringify(i):null,a??null,o?JSON.stringify([...new Set(o)].sort()):null]}function N(e,t,n={}){let{enabled:r=!0,perPage:i=50,extraFilter:a,sort:s=j,columns:c}=n,{isAdmin:d,isLoading:f}=u(),p=d?void 0:c,m=t.filters,h=t.dateRange;return o({queryKey:M(e,m,h,s,a,i,p),queryFn:({pageParam:t})=>b(e,m,i,t??null,h,s,a,p),initialPageParam:null,getNextPageParam:e=>e.pagination?.next_cursor??void 0,enabled:!!e&&r&&!f,...l.short,retry:3})}function P(e,t){return a({queryKey:O(e,t),queryFn:()=>A(e,t),enabled:!!e,...l.short,retry:3})}function F(e,t){let n=P(e,t),r=n.data?.current?.session_count;return{...n,data:r==null?void 0:{count:r}}}function I(e,t,n,i){let o=t.slice().sort().join(`,`),s=JSON.stringify(n.filters);return a({queryKey:[`segment-counts`,e,n.dateRange.from,n.dateRange.to,n.dateRange.fromTime??null,n.dateRange.toTime??null,n.dateRange.relativeDate??null,s,o],queryFn:async()=>{let i=v({...r(n.dateRange)});return(await c(`/api/apps/${encodeURIComponent(e)}/segments/counts?${i}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({filters:d(n.filters),segment_ids:[...t]})})).counts??{}},enabled:!!e&&i&&t.length>0,retry:1}).data??L}var L=Object.freeze({}),R=e(t(),1),z=e(n(),1),B=s(),V=({column:e,anchorEl:t,sort:n,isLastColumn:r,hasRemovedDefaults:i,onSortChange:a,onFilterAttributeClick:o,onHideColumn:s,canMoveLeft:c,canMoveRight:l,onMoveLeft:u,onMoveRight:d,onResetToDefaults:f,onClose:p,onToggleDisplayMode:m,hasDisplayModeToggle:h,currentDisplayMode:g})=>{let _=(0,R.useRef)(null),[v,y]=(0,R.useState)({top:0,left:0}),b=n.sort_by===(e.sortKey??e.id)&&n.sort_order===`asc`,x=n.sort_by===(e.sortKey??e.id)&&n.sort_order===`desc`,S=(0,R.useCallback)(()=>{let e=t.getBoundingClientRect(),n=window.innerWidth,r=e.left;r+180>n-16&&(r=Math.max(16,n-180-16)),y({top:e.bottom+4,left:r})},[t]);(0,R.useEffect)(()=>(S(),window.addEventListener(`resize`,S),window.addEventListener(`scroll`,S,!0),()=>{window.removeEventListener(`resize`,S),window.removeEventListener(`scroll`,S,!0)}),[S]),(0,R.useEffect)(()=>{let e=e=>{let t=e.target;_.current&&!_.current.contains(t)&&p()},t=setTimeout(()=>{document.addEventListener(`mousedown`,e)},0);return()=>{clearTimeout(t),document.removeEventListener(`mousedown`,e)}},[p]),(0,R.useEffect)(()=>{let e=e=>{e.key===`Escape`&&p()};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[p]);let C=(0,R.useCallback)(()=>{e.sortKey&&(a({sort_by:e.sortKey,sort_order:`asc`}),p())},[e.sortKey,a,p]),w=(0,R.useCallback)(()=>{e.sortKey&&(a({sort_by:e.sortKey,sort_order:`desc`}),p())},[e.sortKey,a,p]),T=(0,R.useCallback)(()=>{e.filterAttribute&&(o?.(e.filterAttribute),p())},[e.filterAttribute,o,p]),E=(0,R.useCallback)(()=>{r||(s(e.id),p())},[e.id,r,s,p]),D=(0,R.useCallback)(()=>{c&&(u(),p())},[c,u,p]),O=(0,R.useCallback)(()=>{l&&(d(),p())},[l,d,p]),k=(0,R.useCallback)(()=>{f(),p()},[f,p]),A=(0,R.useCallback)(()=>{m&&(m(e.id),p())},[e.id,m,p]),j=(0,R.useMemo)(()=>{let t=[];if(e.isSortable&&e.sortKey&&t.push((0,B.jsxs)(U,{$active:b,role:`menuitem`,onClick:C,children:[(0,B.jsx)(W,{children:`Sort Ascending`}),(0,B.jsx)(G,{children:`↑`})]},`sort-asc`),(0,B.jsxs)(U,{$active:x,role:`menuitem`,onClick:w,children:[(0,B.jsx)(W,{children:`Sort Descending`}),(0,B.jsx)(G,{children:`↓`})]},`sort-desc`)),e.filterAttribute&&(t.length>0&&t.push((0,B.jsx)(K,{},`sep-filter`)),t.push((0,B.jsxs)(U,{role:`menuitem`,onClick:T,children:[(0,B.jsxs)(W,{children:[`Filter by `,e.label]}),(0,B.jsx)(G,{children:(0,B.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M0.5 1h9L6 4.5V8L4 9V4.5L0.5 1z`})})})]},`filter`))),h&&m){t.length>0&&t.push((0,B.jsx)(K,{},`sep-display-mode`));let e=g===`change_first`?`Show value first`:`Show change first`;t.push((0,B.jsxs)(U,{role:`menuitem`,onClick:A,children:[(0,B.jsx)(W,{children:e}),(0,B.jsx)(G,{children:(0,B.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M5 1L8 4H2L5 1ZM5 9L2 6H8L5 9Z`})})})]},`toggle-display-mode`))}return t.length>0&&t.push((0,B.jsx)(K,{},`sep-move`)),t.push((0,B.jsxs)(U,{$disabled:!c,role:`menuitem`,"aria-disabled":!c,onClick:D,children:[(0,B.jsx)(W,{children:`Move Left`}),(0,B.jsx)(G,{children:`←`})]},`move-left`),(0,B.jsxs)(U,{$disabled:!l,role:`menuitem`,"aria-disabled":!l,onClick:O,children:[(0,B.jsx)(W,{children:`Move Right`}),(0,B.jsx)(G,{children:`→`})]},`move-right`)),t.length>0&&t.push((0,B.jsx)(K,{},`sep-hide`)),t.push((0,B.jsx)(U,{$disabled:r,role:`menuitem`,"aria-disabled":r,onClick:E,children:(0,B.jsx)(W,{children:`Hide Column`})},`hide`)),i&&(t.push((0,B.jsx)(K,{},`sep-reset`)),t.push((0,B.jsx)(U,{role:`menuitem`,onClick:k,children:(0,B.jsxs)(W,{children:[(0,B.jsx)(q,{children:`↻`}),` Reset All Columns`]})},`reset`))),t},[e,b,x,r,c,l,i,h,g,m,C,w,T,A,D,O,E,k]);return(0,z.createPortal)((0,B.jsx)(H,{ref:_,$top:v.top,$left:v.left,role:`menu`,"aria-label":`Options for ${e.label} column`,children:j}),document.body)},H=i.div`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  width: 180px;
  background: ${({theme:e})=>e.elevation.high.background};
  border: ${({theme:e})=>e.elevation.high.border};
  box-shadow: ${({theme:e})=>e.elevation.high.shadow};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  z-index: ${({theme:e})=>e.zIndex.dropdown};
  padding: 4px 0;

  animation: menuIn 200ms ${({theme:e})=>e.animation.easing.spring};

  @keyframes menuIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,U=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  cursor: ${({$disabled:e})=>e?`not-allowed`:`pointer`};
  opacity: ${({$disabled:e})=>e?.4:1};
  color: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[700]:e.colors.text.secondary};
  background: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[50]:`transparent`};
  user-select: none;

  &:hover:not([aria-disabled='true']) {
    background: ${({theme:e,$active:t})=>t?e.colors.uxcam.indigo[50]:e.colors.background.hover};
  }
`,W=i.span`
  flex: 1;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,G=i.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  line-height: 1;
  color: inherit;
`,K=i.div`
  height: 1px;
  background: ${({theme:e})=>e.colors.border.subtle};
  margin: 4px 0;
`,q=i.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;export{I as a,N as c,p as d,m as f,E as i,T as l,k as n,P as o,D as r,F as s,V as t,_ as u};