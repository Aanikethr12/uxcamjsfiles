import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import{D as n}from"./ui-vendor-CUROeZIN.js";import{O as r}from"./markdown-vendor-BoH6QLuc.js";import{t as ee}from"./useAuthStatus-BdbZHG0D.js";import{t as i}from"./Shimmer-BQNKs0BP.js";import{i as te,n as a,r as o,t as s}from"./internalAnalyticsApi-Durohxxi.js";import{t as c}from"./usePageSearchParams-Dppn5wBJ.js";import{a as l,i as u,o as d,r as f}from"./utils-BcDJ365M.js";var p=e(t(),1),m=r(),h=100;function ne(e){let t=e.get(`period`);return t===`7`?7:t===`90`?90:30}function g(e){let t=Number(e??0);return Math.abs(t)<1?`$${t.toFixed(4)}`:new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`,minimumFractionDigits:2,maximumFractionDigits:2}).format(t)}function _(e){if(!e)return`--`;let t=new Date(e);return Number.isNaN(t.getTime())?`--`:t.toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}function v(e){return e?e.replace(/_/g,` `).replace(/\b\w/g,e=>e.toUpperCase()):`--`}function y(e,t){return e?e.org_name||e.org_id:t||`All organizations`}function b(e){return e[0]?.label??`--`}var x=()=>{let{isAdmin:e,isLoading:t}=ee(),[n,r]=c(),u=ne(n),_=n.get(`org_id`),b=n.get(`user_id`),x=te(u,_,{enabled:e}),L=a(u,{enabled:e}),R=s(_,u,{enabled:e&&!!_}),z=o({days:u,orgId:_,userId:b,limit:h,offset:0},{enabled:e}),B=(0,p.useMemo)(()=>L.data?.orgs.find(e=>e.org_id===_)??null,[L.data?.orgs,_]),V=(0,p.useMemo)(()=>R.data?.users.find(e=>e.user_id===b)??null,[R.data?.users,b]),H=(0,p.useCallback)(e=>{r({period:String(e),org_id:_??void 0,user_id:b??void 0})},[_,b,r]),U=(0,p.useCallback)(e=>{r({period:String(u),org_id:e??void 0,user_id:void 0})},[u,r]),W=(0,p.useCallback)(e=>{r({period:String(u),org_id:_??void 0,user_id:e??void 0})},[u,_,r]);if(t)return(0,m.jsx)(E,{children:(0,m.jsx)(i,{variant:`block`,height:`200px`})});if(!e)return(0,m.jsx)(E,{children:(0,m.jsxs)(ge,{children:[(0,m.jsx)($,{children:`Access Restricted`}),(0,m.jsx)(_e,{children:`This page is only available to administrators.`})]})});let G=x.data,K=y(B,_);return(0,m.jsxs)(E,{children:[(0,m.jsx)(D,{children:(0,m.jsxs)(O,{children:[(0,m.jsxs)(re,{children:[(0,m.jsx)(ie,{children:`Internal AI Costs`}),(0,m.jsx)(ae,{children:K})]}),(0,m.jsxs)(oe,{children:[_&&(0,m.jsx)(ue,{type:`button`,onClick:()=>U(null),children:`All organizations`}),(0,m.jsx)(d,{value:u,onChange:H})]})]})}),(0,m.jsx)(se,{children:G?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(ce,{children:[(0,m.jsx)(k,{children:G.coverage_note}),(0,m.jsx)(le,{title:`Operational estimates from persisted cost fields — not invoice-reconciled provider billing.`,children:G.cost_status===`estimated`?`Estimated`:v(G.cost_status)})]}),G.tracked_sources?.length>0&&(0,m.jsxs)(A,{children:[(0,m.jsx)(j,{children:`Counts:`}),` `,G.tracked_sources.map(v).join(`, `)]}),G.known_gaps?.length>0&&(0,m.jsxs)(A,{children:[(0,m.jsx)(j,{children:`Excludes (not yet tracked):`}),` `,G.known_gaps.map(v).join(`, `)]})]}):(0,m.jsx)(k,{children:`Loading coverage details…`})}),x.isLoading&&(0,m.jsx)(M,{children:Array.from({length:5}).map((e,t)=>(0,m.jsx)(i,{variant:`card`,height:`78px`},t))}),!x.isLoading&&x.isError&&(0,m.jsxs)(me,{children:[`Failed to load AI cost summary.`,(0,m.jsx)(he,{type:`button`,onClick:()=>x.refetch(),children:`Retry`})]}),!x.isLoading&&!x.isError&&G&&(0,m.jsxs)(M,{children:[(0,m.jsxs)(N,{children:[(0,m.jsx)(P,{children:g(G.total_cost_usd)}),(0,m.jsx)(F,{children:`Tracked cost`})]}),(0,m.jsxs)(N,{children:[(0,m.jsx)(P,{children:f(G.total_runs)}),(0,m.jsx)(F,{children:`Runs`})]}),(0,m.jsxs)(N,{children:[(0,m.jsx)(P,{children:g(G.avg_cost_per_run)}),(0,m.jsx)(F,{children:`Avg per run`})]}),(0,m.jsxs)(N,{children:[(0,m.jsx)(P,{children:f(G.total_tokens)}),(0,m.jsx)(F,{children:`Tokens`})]}),(0,m.jsxs)(N,{children:[(0,m.jsx)(P,{children:g(G.failed_cost_usd)}),(0,m.jsx)(F,{children:`Failed cost`})]})]}),(0,m.jsxs)(I,{children:[(0,m.jsx)(l,{title:`Cost By Type`,isLoading:x.isLoading,isError:x.isError,onRetry:()=>x.refetch(),children:(0,m.jsx)(S,{buckets:G?.by_cost_type??[]})}),(0,m.jsx)(l,{title:`Cost By Actor`,isLoading:x.isLoading,isError:x.isError,onRetry:()=>x.refetch(),children:(0,m.jsx)(S,{buckets:G?.by_actor_type??[]})})]}),(0,m.jsx)(l,{title:`Organizations`,isLoading:L.isLoading,isError:L.isError,onRetry:()=>L.refetch(),children:(0,m.jsx)(C,{orgs:L.data?.orgs??[],selectedOrgId:_,onSelectOrg:U})}),_&&(0,m.jsx)(l,{title:`Users: ${K}`,isLoading:R.isLoading,isError:R.isError,onRetry:()=>R.refetch(),children:(0,m.jsx)(w,{users:R.data?.users??[],selectedUserId:b,onSelectUser:W})}),(0,m.jsxs)(l,{title:V?`Runs: ${V.user_id}`:`Runs: ${K}`,isLoading:z.isLoading,isError:z.isError,onRetry:()=>z.refetch(),children:[(0,m.jsx)(T,{runs:z.data?.runs??[]}),z.data&&z.data.total>h&&(0,m.jsxs)(pe,{children:[`Showing latest `,h,` of `,f(z.data.total),` runs.`]})]})]})},S=({buckets:e})=>e.length===0?(0,m.jsx)(Q,{children:`No cost rows in this period.`}):(0,m.jsx)(L,{children:(0,m.jsxs)(R,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`Type`}),(0,m.jsx)(z,{children:`Cost`}),(0,m.jsx)(z,{children:`Runs`}),(0,m.jsx)(z,{children:`Tokens`}),(0,m.jsx)(z,{children:`Failed Cost`})]})}),(0,m.jsx)(`tbody`,{children:e.map(e=>(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(H,{children:e.label}),(0,m.jsx)(J,{children:g(e.cost_usd)}),(0,m.jsx)(J,{children:f(e.runs)}),(0,m.jsx)(J,{children:f(e.total_tokens)}),(0,m.jsx)(J,{children:g(e.failed_cost_usd)})]},e.key))})]})}),C=({orgs:e,selectedOrgId:t,onSelectOrg:n})=>e.length===0?(0,m.jsx)(Q,{children:`No organization cost rows in this period.`}):(0,m.jsx)(L,{children:(0,m.jsxs)(R,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`Organization`}),(0,m.jsx)(z,{children:`Cost`}),(0,m.jsx)(z,{children:`Runs`}),(0,m.jsx)(z,{children:`Tokens`}),(0,m.jsx)(`th`,{children:`Top Type`}),(0,m.jsx)(`th`,{children:`Actor Mix`}),(0,m.jsx)(`th`,{children:`Last Run`}),(0,m.jsx)(`th`,{children:`Quality`}),(0,m.jsx)(B,{"aria-label":`Actions`})]})}),(0,m.jsx)(`tbody`,{children:e.map(e=>{let r=t===e.org_id;return(0,m.jsxs)(V,{$selected:r,children:[(0,m.jsx)(U,{children:(0,m.jsxs)(W,{children:[(0,m.jsx)(G,{children:e.org_name||`Unnamed org`}),(0,m.jsx)(q,{children:e.org_id})]})}),(0,m.jsx)(J,{children:g(e.cost_usd)}),(0,m.jsx)(J,{children:f(e.runs)}),(0,m.jsx)(J,{children:f(e.total_tokens)}),(0,m.jsx)(`td`,{children:b(e.by_cost_type)}),(0,m.jsx)(`td`,{children:e.by_actor_type.map(e=>e.label).join(`, `)||`--`}),(0,m.jsx)(`td`,{children:u(e.last_run_at)}),(0,m.jsx)(`td`,{children:(0,m.jsx)(de,{children:e.data_quality.map(e=>(0,m.jsx)(Z,{children:e},e))})}),(0,m.jsx)(Y,{children:(0,m.jsx)(X,{type:`button`,onClick:()=>n(r?null:e.org_id),children:r?`Clear`:`View`})})]},e.org_id)})})]})}),w=({users:e,selectedUserId:t,onSelectUser:n})=>e.length===0?(0,m.jsx)(Q,{children:`No user cost rows in this period.`}):(0,m.jsx)(L,{children:(0,m.jsxs)(R,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`User`}),(0,m.jsx)(z,{children:`Cost`}),(0,m.jsx)(z,{children:`Runs`}),(0,m.jsx)(z,{children:`Tokens`}),(0,m.jsx)(`th`,{children:`Top Type`}),(0,m.jsx)(`th`,{children:`Actor Mix`}),(0,m.jsx)(`th`,{children:`Last Run`}),(0,m.jsx)(B,{"aria-label":`Actions`})]})}),(0,m.jsx)(`tbody`,{children:e.map(e=>{let r=t===e.user_id;return(0,m.jsxs)(V,{$selected:r,children:[(0,m.jsx)(H,{children:e.user_id}),(0,m.jsx)(J,{children:g(e.cost_usd)}),(0,m.jsx)(J,{children:f(e.runs)}),(0,m.jsx)(J,{children:f(e.total_tokens)}),(0,m.jsx)(`td`,{children:b(e.by_cost_type)}),(0,m.jsx)(`td`,{children:e.by_actor_type.map(e=>e.label).join(`, `)||`--`}),(0,m.jsx)(`td`,{children:u(e.last_run_at)}),(0,m.jsx)(Y,{children:(0,m.jsx)(X,{type:`button`,onClick:()=>n(r?null:e.user_id),children:r?`Clear`:`View`})})]},e.user_id)})})]})}),T=({runs:e})=>e.length===0?(0,m.jsx)(Q,{children:`No run rows in this period.`}):(0,m.jsx)(L,{children:(0,m.jsxs)(R,{children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`Created`}),(0,m.jsx)(`th`,{children:`Source`}),(0,m.jsx)(`th`,{children:`Organization`}),(0,m.jsx)(`th`,{children:`User`}),(0,m.jsx)(`th`,{children:`Type`}),(0,m.jsx)(`th`,{children:`Actor`}),(0,m.jsx)(`th`,{children:`Model`}),(0,m.jsx)(`th`,{children:`Status`}),(0,m.jsx)(z,{children:`Cost`}),(0,m.jsx)(z,{children:`Tokens`})]})}),(0,m.jsx)(`tbody`,{children:e.map(e=>(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:_(e.created_at)}),(0,m.jsx)(U,{children:(0,m.jsxs)(W,{children:[(0,m.jsx)(G,{children:v(e.source_type)}),(0,m.jsx)(q,{children:e.source_id})]})}),(0,m.jsx)(U,{children:(0,m.jsxs)(W,{children:[(0,m.jsx)(G,{children:e.org_name||e.org_id||`--`}),e.app_name||e.app_id?(0,m.jsx)(K,{children:e.app_name||e.app_id}):null]})}),(0,m.jsx)(`td`,{children:e.user_id||`--`}),(0,m.jsx)(`td`,{children:e.cost_type_label}),(0,m.jsx)(`td`,{children:v(e.actor_type)}),(0,m.jsx)(`td`,{children:[e.provider,e.model].filter(Boolean).join(` / `)||`--`}),(0,m.jsx)(`td`,{children:(0,m.jsx)(fe,{$status:e.status,children:v(e.status)})}),(0,m.jsx)(J,{children:g(e.cost_usd)}),(0,m.jsx)(J,{children:f(e.total_tokens)})]},`${e.source_type}:${e.source_id}`))})]})}),E=n.div`
  height: 100%;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,D=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,O=n.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`,re=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ie=n.h1`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`,ae=n.p`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,oe=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`,se=n.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 12px;
  border: 1px solid ${({theme:e})=>e.colors.border.subtle};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,ce=n.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
`,k=n.span`
  color: ${({theme:e})=>e.colors.text.secondary};
`,A=n.div`
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,j=n.span`
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,le=n.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border: 1px solid ${({theme:e})=>e.colors.severity.warning.border};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.severity.warning.bg};
  color: ${({theme:e})=>e.colors.severity.warning.text};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.02em;
  white-space: nowrap;
`,M=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
`,N=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
`,P=n.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  color: ${({theme:e})=>e.colors.text.primary};
`,F=n.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  text-transform: uppercase;
`,I=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
`,L=n.div`
  width: 100%;
  overflow-x: auto;
`,R=n.table`
  width: 100%;
  min-width: 820px;
  border-collapse: collapse;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};

  th {
    padding: 0 12px 10px 0;
    text-align: left;
    color: ${({theme:e})=>e.colors.text.tertiary};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    border-bottom: 1px solid ${({theme:e})=>e.colors.border.subtle};
    white-space: nowrap;
  }

  td {
    padding: 10px 12px 10px 0;
    border-bottom: 1px solid ${({theme:e})=>e.colors.border.subtle};
    color: ${({theme:e})=>e.colors.text.secondary};
    vertical-align: top;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }
`,z=n.th`
  text-align: right !important;
`,B=n.th`
  width: 72px;
`,V=n.tr`
  background: ${({$selected:e,theme:t})=>e?t.colors.interactive.activeBg:`transparent`};
`,H=n.td`
  color: ${({theme:e})=>e.colors.text.primary} !important;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,U=n.td``,W=n.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,G=n.span`
  color: ${({theme:e})=>e.colors.text.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,K=n.span`
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,q=n(K)`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
`,J=n.td`
  text-align: right;
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  color: ${({theme:e})=>e.colors.text.primary} !important;
  white-space: nowrap;
`,Y=n.td`
  text-align: right;
`,X=n.button`
  padding: 4px 10px;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
  }
`,ue=n(X)`
  padding: 5px 12px;
`,de=n.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,Z=n.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  border: 1px solid ${({theme:e})=>e.colors.border.subtle};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  line-height: 1.3;
`,fe=n(Z)`
  border-color: ${({$status:e,theme:t})=>[`failed`,`analysis_error`,`cancelled`,`timed_out`].includes(e)?t.colors.severity.critical.border:[`completed`,`succeeded`,`success`].includes(e)?t.colors.severity.good.border:t.colors.border.subtle};
  color: ${({$status:e,theme:t})=>[`failed`,`analysis_error`,`cancelled`,`timed_out`].includes(e)?t.colors.severity.critical.text:[`completed`,`succeeded`,`success`].includes(e)?t.colors.severity.good.text:t.colors.text.tertiary};
`,Q=n.div`
  padding: 20px 0;
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,pe=n.div`
  margin-top: 12px;
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,me=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.severity.warning.text};
  background: ${({theme:e})=>e.colors.severity.warning.bg};
  border-radius: ${({theme:e})=>e.borderRadius.default};
`,he=n.button`
  padding: 0;
  border: none;
  background: none;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.link};
  cursor: pointer;
  text-decoration: underline;
`,ge=n.div`
  padding: 32px;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({theme:e})=>e.colors.background.surface};
`,$=n.h2`
  margin: 0 0 8px;
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: ${({theme:e})=>e.colors.text.primary};
`,_e=n.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.secondary};
`;export{x as InternalAiCostsPage};