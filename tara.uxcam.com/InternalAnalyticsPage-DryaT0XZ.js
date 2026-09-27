import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import{n}from"./router-vendor-DDSrk2O2.js";import{D as r,E as i}from"./ui-vendor-CUROeZIN.js";import{O as a}from"./markdown-vendor-BoH6QLuc.js";import{t as o}from"./useAuthStatus-BdbZHG0D.js";import{n as s}from"./NavigationContext-DTwRip-h.js";import{Yr as c,_n as l,bn as u,cn as d,gn as f,nn as p,rn as m,tn as h,yn as g}from"./TaraChatContext-Ne5fUqNv.js";import{t as _}from"./Shimmer-BQNKs0BP.js";import{a as v,c as ee,o as te,s as ne}from"./internalAnalyticsApi-Durohxxi.js";import{t as re}from"./usePageSearchParams-Dppn5wBJ.js";import"./icons-D4l8vC7U.js";import{a as y,i as b,n as x,o as S,r as C,t as w}from"./utils-BcDJ365M.js";var T=e(t(),1),E=a(),ie={growing:{label:`Growing`,icon:`↑`},stable:{label:`Stable`,icon:`–`},declining:{label:`Declining`,icon:`↓`}},ae=({direction:e,className:t})=>{let n=ie[e];return(0,E.jsxs)(ce,{$direction:e,className:t,"aria-label":`Trend: ${n.label}`,children:[(0,E.jsx)(le,{$direction:e,children:n.icon}),n.label]})};function oe(e,t){switch(e){case`growing`:return t?.colors.severity.good.bg??t?.colors.background.sunken??`#F0F0F2`;case`declining`:return t?.colors.severity.critical.bg??t?.colors.background.sunken??`#F0F0F2`;default:return t?.colors.background.sunken??`#F0F0F2`}}function se(e,t){switch(e){case`growing`:return t?.colors.severity.good.text??t?.colors.text.secondary??`#454B5D`;case`declining`:return t?.colors.severity.critical.text??t?.colors.text.secondary??`#454B5D`;default:return t?.colors.text.secondary??`#454B5D`}}var ce=r.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  background: ${({$direction:e,theme:t})=>oe(e,t)};
  color: ${({$direction:e,theme:t})=>se(e,t)};
  white-space: nowrap;
`,le=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  line-height: 1;
`,D=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,O=r.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,k=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,A=r.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
`,j=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 48px 24px;
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  margin-top: 8px;
`,M=r.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.severity.critical.text};
  margin: 0;
`,N=r.button`
  padding: 6px 16px;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: -2px;
  }
`,P=50;function ue(e){if(e.length===0)return{sortBy:`total_events`,sortDir:`desc`};let t=e[0];return{sortBy:t.id,sortDir:t.desc?`desc`:`asc`}}var de=({days:e,onSelectOrg:t})=>{let[n,r]=(0,T.useState)(``),[i,a]=(0,T.useState)([{id:`total_events`,desc:!0}]),[o,s]=(0,T.useState)(0),{sortBy:c,sortDir:l}=ue(i),u=te({days:e,limit:P,offset:o*P,sortBy:c,sortDir:l}),f=(0,T.useCallback)(e=>{a(e),s(0)},[]),p=(0,T.useCallback)(e=>{s(e)},[]),m=(0,T.useCallback)(e=>{t(e.org_id)},[t]),h=(0,T.useMemo)(()=>{let e=u.data?.orgs??[];if(!n.trim())return e;let t=n.toLowerCase();return e.filter(e=>(e.org_name??e.org_id).toLowerCase().includes(t))},[u.data?.orgs,n]),g=(0,T.useMemo)(()=>[{id:`org_name`,header:`Organization`,accessorFn:e=>e.org_name??e.org_id,cell:({row:e})=>(0,E.jsxs)(pe,{children:[(0,E.jsx)(me,{children:e.original.org_name??`Unnamed`}),(0,E.jsx)(he,{children:e.original.org_id})]})},{id:`active_users_7d`,header:`Active (7d)`,accessorKey:`active_users_7d`,cell:({getValue:e})=>(0,E.jsx)(D,{children:C(e())}),meta:{align:`right`}},{id:`active_users_30d`,header:`Active (30d)`,accessorKey:`active_users_30d`,cell:({getValue:e})=>(0,E.jsx)(D,{children:C(e())}),meta:{align:`right`}},{id:`trend_direction`,header:`Trend`,accessorKey:`trend_direction`,cell:({getValue:e})=>(0,E.jsx)(ae,{direction:e()})},{id:`plan_type`,header:`Plan`,accessorKey:`plan_type`,cell:({getValue:e})=>e()??`--`},{id:`last_active`,header:`Last Active`,accessorKey:`last_active`,cell:({getValue:e})=>(0,E.jsx)(D,{children:b(e())})}],[]),_=u.data?.total??0,v=Math.ceil(_/P);return(0,E.jsx)(fe,{children:(0,E.jsx)(d,{data:h,columns:g,density:`default`,enableSorting:!0,manualSorting:!0,sortState:i,onSortChange:f,enablePagination:!0,manualPagination:!0,pageIndex:o,pageSize:P,totalItems:_,totalPages:v,onPageChange:p,hasNextPage:o<v-1,hasPreviousPage:o>0,paginationItemLabel:`organizations`,enableSearch:!0,searchPlaceholder:`Search by organization name...`,searchValue:n,onSearchChange:r,onRowClick:m,getRowId:e=>e.org_id,isLoading:u.isLoading,emptyState:{title:`No organizations found`,description:n?`Try adjusting your search.`:`No organization data is available for this period.`},ariaLabel:`Organization directory`})})},fe=r.div`
  width: 100%;
`,pe=r.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,me=r.span`
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
`,he=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,ge=({data:e})=>(0,E.jsxs)(_e,{children:[(0,E.jsxs)(ve,{children:[(0,E.jsx)(ye,{children:e.org_name??`Unnamed Organization`}),(0,E.jsx)(be,{title:`Organization ID`,children:e.org_id})]}),(0,E.jsxs)(xe,{children:[(0,E.jsxs)(F,{children:[(0,E.jsxs)(I,{children:[`Owner`,e.owner_emails.length>1?`s`:``]}),(0,E.jsx)(L,{children:e.owner_emails.length>0?e.owner_emails.join(`, `):`No owner`})]}),(0,E.jsxs)(F,{children:[(0,E.jsx)(I,{children:`Plan`}),(0,E.jsx)(L,{children:e.plan_type??`--`})]}),(0,E.jsxs)(F,{children:[(0,E.jsx)(I,{children:`Status`}),(0,E.jsx)(Se,{$status:e.subscription_status,children:e.subscription_status??`--`})]}),(0,E.jsxs)(F,{children:[(0,E.jsx)(I,{children:`Created`}),(0,E.jsx)(L,{children:w(e.created_at)})]}),(0,E.jsxs)(F,{children:[(0,E.jsx)(I,{children:`Team Size`}),(0,E.jsx)(L,{children:e.team_size})]})]}),(e.hubspot_link||e.chartmogul_link)&&(0,E.jsxs)(Ce,{children:[e.hubspot_link&&(0,E.jsxs)(R,{href:e.hubspot_link,target:`_blank`,rel:`noopener noreferrer`,children:[`HubSpot`,(0,E.jsx)(we,{"aria-hidden":`true`,children:`↗`})]}),e.chartmogul_link&&(0,E.jsxs)(R,{href:e.chartmogul_link,target:`_blank`,rel:`noopener noreferrer`,children:[`ChartMogul`,(0,E.jsx)(we,{"aria-hidden":`true`,children:`↗`})]})]})]}),_e=r.div`
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: 20px;
`,ve=r.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,ye=r.h2`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.primary};
`,be=r.code`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  color: ${({theme:e})=>e.colors.text.tertiary};
  background: ${({theme:e})=>e.colors.background.sunken};
  padding: 2px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.default};
`,xe=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px 24px;
`,F=r.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,I=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,L=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  word-break: break-word;
`,Se=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-transform: capitalize;
  color: ${({$status:e,theme:t})=>e===`active`?t.colors.severity.good.text:e===`past_due`||e===`cancelled`?t.colors.severity.critical.text:t.colors.text.primary};
`,Ce=r.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.colors.border.subtle};
`,R=r.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.link};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: 2px;
    border-radius: 2px;
  }
`,we=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,Te=({signals:e,className:t})=>e.length===0?null:(0,E.jsxs)(Ee,{className:t,role:`alert`,children:[(0,E.jsxs)(De,{children:[(0,E.jsx)(Oe,{"aria-hidden":`true`,children:`!`}),(0,E.jsx)(ke,{children:`Risk Signals Detected`})]}),(0,E.jsx)(Ae,{children:e.map(e=>(0,E.jsx)(je,{children:e},e))})]}),Ee=r.div`
  padding: 14px 20px;
  background: ${({theme:e})=>e.colors.severity.warning.bg};
  border: 1px solid ${({theme:e})=>e.colors.severity.warning.border};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
`,De=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`,Oe=r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.severity.warning.icon};
  color: ${({theme:e})=>e.colors.text.inverse};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  flex-shrink: 0;
`,ke=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.severity.warning.text};
`,Ae=r.ul`
  margin: 0;
  padding-left: 28px;
  list-style-type: disc;
`,je=r.li`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.severity.warning.text};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};

  &::marker {
    color: ${({theme:e})=>e.colors.severity.warning.icon};
  }
`,Me=7,Ne=({users:e,isLoading:t=!1,onSelectUser:n})=>{let r=(0,T.useCallback)(e=>{n?.(e.email)},[n]);return(0,E.jsx)(d,{data:e,columns:(0,T.useMemo)(()=>[{id:`email`,header:`Email`,accessorKey:`email`,cell:({getValue:e})=>(0,E.jsx)(Pe,{title:e(),children:e()})},{id:`total_events`,header:`Events`,accessorKey:`total_events`,cell:({getValue:e})=>(0,E.jsx)(D,{children:e().toLocaleString()}),meta:{align:`right`}},{id:`ai_events`,header:`AI Events`,accessorKey:`ai_events`,cell:({getValue:e})=>(0,E.jsx)(D,{children:e().toLocaleString()}),meta:{align:`right`}},{id:`feature_categories`,header:`Features`,accessorFn:e=>e.feature_categories.length,cell:({row:e})=>{let t=e.original.feature_categories.length;return(0,E.jsxs)(Fe,{title:e.original.feature_categories.join(`, `),children:[t,` `,(0,E.jsxs)(Ie,{children:[`of `,Me]})]})},meta:{align:`right`}},{id:`active_days`,header:`Active Days`,accessorKey:`active_days`,cell:({getValue:e})=>(0,E.jsx)(D,{children:e()}),meta:{align:`right`}},{id:`first_active`,header:`First Active`,accessorKey:`first_active`,cell:({getValue:e})=>(0,E.jsx)(D,{children:b(e())})},{id:`last_active`,header:`Last Active`,accessorKey:`last_active`,cell:({getValue:e})=>(0,E.jsx)(D,{children:b(e())})}],[]),density:`compact`,enableSorting:!0,enablePagination:!0,pageSize:10,onRowClick:n?r:void 0,isLoading:t,emptyState:{title:`No team activity`,description:`No user activity found for this period.`},ariaLabel:`Team activity`})},Pe=r.span`
  color: ${({theme:e})=>e.colors.text.link};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 220px;
  display: block;
`,Fe=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,Ie=r.span`
  color: ${({theme:e})=>e.colors.text.tertiary};
`,z=l(`bar`),Le={visits:[`--color-chart-1`,p[`--color-chart-1`]],users:[`--color-chart-2`,p[`--color-chart-2`]],axisLabel:[`--chart-axis-label`,p[`--chart-axis-label`]],axisLine:[`--chart-axis-line`,p[`--chart-axis-line`]],gridLine:[`--chart-grid-line`,p[`--chart-grid-line`]],legendLabel:[`--chart-legend-label`,p[`--chart-legend-label`]]},Re=m(null,Le),ze=e=>m(e,Le);function Be(e){return[...e].sort((e,t)=>t.visit_count-e.visit_count)}function Ve(e){let{data:t,palette:n=Re}=e,r=Be(t),i={barMinHeight:f.barMinHeight},a={animationDuration:f.animation.durationMs,animationEasing:f.animation.easing,grid:{...f.grid,right:24},textStyle:{fontSize:11},tooltip:{trigger:`axis`,confine:!0,axisPointer:{type:`shadow`},valueFormatter:e=>Number(e??0).toLocaleString()},legend:{type:`scroll`,top:0,right:0,icon:`roundRect`,itemWidth:12,itemHeight:8,textStyle:{color:n.legendLabel,fontSize:c.legend.size}},xAxis:{type:`value`,axisLine:{lineStyle:{color:n.axisLine}},axisLabel:{color:n.axisLabel,fontSize:c.axisTick.size,formatter:e=>e.toLocaleString()},splitLine:{lineStyle:{color:n.gridLine}}},yAxis:{type:`category`,data:r.map(e=>e.category_label),inverse:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{color:n.axisLabel,fontSize:c.axisTick.size,interval:0,overflow:`truncate`,width:180}},series:[{name:`Visits`,type:`bar`,color:n.visits,itemStyle:{color:n.visits,borderRadius:z.radius},data:r.map(e=>e.visit_count),...i},{name:`Unique Users`,type:`bar`,color:n.users,itemStyle:{color:n.users,borderRadius:z.radius},data:r.map(e=>e.unique_users),...i}]};return u(a,`bar`),a}function He(e){return Math.max(200,e*z.minSlot*2+48)}var Ue=({data:e})=>{let t=(0,T.useRef)(null),n=e.length>0,r=h(t,ze,Re,n),i=(0,T.useMemo)(()=>Ve({data:e,palette:r}),[e,r]);return n?(0,E.jsx)(We,{ref:t,children:(0,E.jsx)(g,{option:i,height:`${He(e.length)}px`,categoryScroll:!0})}):(0,E.jsx)(Ge,{children:`No feature usage data available.`})},We=r.div`
  width: 100%;
  min-height: 200px;
`,Ge=r.p`
  text-align: center;
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  padding: 24px 0;
  margin: 0;
`,Ke=({summary:e})=>{if(!e)return(0,E.jsx)(rt,{children:`No AI activity data available.`});let t=e.breakdown??[];return(0,E.jsxs)(qe,{children:[(0,E.jsxs)(Je,{children:[(0,E.jsxs)(B,{children:[(0,E.jsx)(V,{children:C(e.total_ai_events)}),(0,E.jsx)(H,{children:`Total AI Events`})]}),(0,E.jsxs)(B,{children:[(0,E.jsx)(V,{children:C(e.unique_ai_users)}),(0,E.jsx)(H,{children:`Unique AI Users`})]}),(0,E.jsxs)(B,{children:[(0,E.jsx)(V,{children:C(e.prompts_submitted)}),(0,E.jsx)(H,{children:`Prompts Submitted`})]}),(0,E.jsxs)(B,{children:[(0,E.jsx)(V,{children:C(e.responses_received)}),(0,E.jsx)(H,{children:`Responses Received`})]})]}),t.length>0&&(0,E.jsxs)(Ye,{children:[(0,E.jsx)(Xe,{children:`Event Breakdown`}),(0,E.jsx)(Ze,{children:t.map(e=>(0,E.jsxs)(Qe,{children:[(0,E.jsx)($e,{children:e.event_group}),(0,E.jsxs)(et,{children:[(0,E.jsx)(tt,{children:C(e.event_count)}),(0,E.jsxs)(nt,{children:[C(e.unique_users),` users`]})]})]},e.event_group))})]})]})},qe=r.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Je=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
`,B=r.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.background.sunken};
  border-radius: ${({theme:e})=>e.borderRadius.default};
`,V=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize[`2xl`]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  color: ${({theme:e})=>e.colors.text.primary};
`,H=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,Ye=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Xe=r.h4`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,Ze=r.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Qe=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.default};

  &:nth-child(even) {
    background: ${({theme:e})=>e.colors.background.sunken};
  }
`,$e=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  text-transform: capitalize;
`,et=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,tt=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
`,nt=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  min-width: 64px;
  text-align: right;
`,rt=r.p`
  text-align: center;
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  padding: 24px 0;
  margin: 0;
`,it={line:[`--color-chart-1`,p[`--color-chart-1`]],axisLabel:[`--chart-axis-label`,p[`--chart-axis-label`]],axisLine:[`--chart-axis-line`,p[`--chart-axis-line`]],gridLine:[`--chart-grid-line`,p[`--chart-grid-line`]]},at=m(null,it),ot=e=>m(e,it);function st(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`})}function ct(e){let{data:t,palette:n=at}=e;return{animationDuration:f.animation.durationMs,animationEasing:f.animation.easing,grid:{...f.grid,bottom:8},textStyle:{fontSize:11},tooltip:{trigger:`axis`,confine:!0,axisPointer:{type:`line`},valueFormatter:e=>Number(e??0).toLocaleString()},xAxis:{type:`category`,boundaryGap:!1,data:t.map(e=>st(e.date)),axisTick:{show:!1},axisLine:{lineStyle:{color:n.axisLine}},axisLabel:{color:n.axisLabel,fontSize:c.axisTick.size,showMinLabel:!0,showMaxLabel:!0,hideOverlap:!0}},yAxis:{type:`value`,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:n.axisLabel,fontSize:c.axisTick.size,formatter:e=>e.toLocaleString()},splitLine:{lineStyle:{color:n.gridLine}}},series:[{name:`Daily Active Users`,type:`line`,smooth:!1,symbol:`circle`,symbolSize:5,showSymbol:!1,color:n.line,itemStyle:{color:n.line},lineStyle:{color:n.line,width:2},data:t.map(e=>e.unique_users)}]}}var lt=240,ut=({data:e})=>{let t=(0,T.useRef)(null),n=e.length>0,r=h(t,ot,at,n),i=(0,T.useMemo)(()=>ct({data:e,palette:r}),[e,r]);return n?(0,E.jsx)(dt,{ref:t,children:(0,E.jsx)(g,{option:i,height:`${lt}px`})}):(0,E.jsx)(ft,{children:`No usage trend data available.`})},dt=r.div`
  width: 100%;
  min-height: 240px;
`,ft=r.p`
  text-align: center;
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  padding: 24px 0;
  margin: 0;
`,pt=({$compact:e})=>{let t=e?10:12;return(0,E.jsx)(_t,{width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.25`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,E.jsx)(`polyline`,{points:`9 18 15 12 9 6`})})},U=({segments:e,className:t,showTrailingChevron:n=!0,compact:r=!1})=>e.length===0?null:(0,E.jsxs)(mt,{"aria-label":`Breadcrumb`,className:t,$compact:r,children:[(0,E.jsx)(ht,{children:e.map((t,n)=>{let i=typeof t.onClick==`function`;return(0,E.jsxs)(gt,{children:[n>0&&(0,E.jsx)(vt,{"aria-hidden":`true`,children:(0,E.jsx)(pt,{$compact:r})}),i?(0,E.jsx)(bt,{type:`button`,onClick:t.onClick,"aria-label":t.ariaLabel??t.label,$mono:t.mono===!0,$compact:r,children:t.label}):(0,E.jsx)(xt,{"aria-current":n===e.length-1?`page`:void 0,$mono:t.mono===!0,$compact:r,children:t.label})]},`${t.label}-${n}`)})}),n&&(0,E.jsx)(yt,{"aria-hidden":`true`,children:(0,E.jsx)(pt,{$compact:r})})]}),mt=r.nav`
  display: inline-flex;
  align-items: center;
  font-size: ${({theme:e,$compact:t})=>t?e.typography.fontSize.xs:e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  letter-spacing: 0.01em;
  min-width: 0;
`,ht=r.ol`
  display: flex;
  align-items: center;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  min-width: 0;
  flex-wrap: nowrap;
`,gt=r.li`
  display: inline-flex;
  align-items: center;
  gap: 0;
  min-width: 0;
`,_t=r.svg`
  flex-shrink: 0;
`,vt=r.span`
  display: inline-flex;
  align-items: center;
  margin: 0 6px;
  color: ${({theme:e})=>e.colors.text.tertiary};
  opacity: 0.55;
  user-select: none;
`,yt=r.span`
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
  color: ${({theme:e})=>e.colors.text.tertiary};
  opacity: 0.55;
`,bt=r.button`
  background: none;
  border: none;
  padding: 2px 2px;
  border-radius: 3px;
  font-size: ${({theme:e,$compact:t})=>t?e.typography.fontSize.xs:e.typography.fontSize.base};
  font-family: ${({$mono:e,theme:t})=>e?t.typography.fontFamily.mono:t.typography.fontFamily.sans};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-variant-numeric: ${({$mono:e})=>e?`tabular-nums`:`normal`};
  color: ${({theme:e})=>e.colors.text.tertiary};
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.text.link};
    background: ${({theme:e})=>e.colors.background.hover};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: 2px;
  }
`,xt=r.span`
  font-size: ${({theme:e,$compact:t})=>t?e.typography.fontSize.xs:e.typography.fontSize.base};
  font-family: ${({$mono:e,theme:t})=>e?t.typography.fontFamily.mono:t.typography.fontFamily.sans};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-variant-numeric: ${({$mono:e})=>e?`tabular-nums`:`normal`};
  color: ${({theme:e})=>e.colors.text.tertiary};
  padding: 2px 2px;
  white-space: nowrap;
`,St={width:14,height:14,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0},Ct=()=>(0,E.jsxs)(`svg`,{...St,children:[(0,E.jsx)(`line`,{x1:`12`,y1:`17`,x2:`12`,y2:`22`}),(0,E.jsx)(`path`,{d:`M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z`})]});function wt(e){return!Number.isFinite(e)||e<0?String(e):e>=999500?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${Math.round(e/1e3)}K`:String(e)}var Tt=()=>(0,E.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,E.jsx)(`polyline`,{points:`15 6 9 12 15 18`})}),Et=()=>(0,E.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,E.jsx)(`polyline`,{points:`9 6 15 12 9 18`})}),Dt=({$open:e})=>(0,E.jsx)(Pt,{$open:e,width:`10`,height:`10`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,E.jsx)(`polyline`,{points:`6 9 12 15 18 9`})});(0,T.forwardRef)(function({currentIndex:e,total:t,onPrev:n,onNext:r,onOpenPopover:i,popoverOpen:a,canPrev:o,canNext:s,prevAriaLabel:c=`Previous`,nextAriaLabel:l=`Next`,labelAriaLabel:u=`Select item`,walkedOff:d=!1,labelText:f},p){let m=`${e} of ${wt(t)}`,h=f??m,g=d?f?`Return to ${f}`:`Return to session ${m}`:u;return(0,E.jsxs)(Ot,{role:`group`,"aria-label":u,$walkedOff:d,children:[(0,E.jsx)(At,{type:`button`,onClick:n,disabled:!o,"aria-disabled":!o,"aria-label":c,title:c,children:(0,E.jsx)(Tt,{})}),(0,E.jsxs)(jt,{ref:p,type:`button`,onClick:i,"aria-haspopup":`listbox`,"aria-expanded":a,"aria-label":u,title:g,$active:a,children:[d&&(0,E.jsx)(Nt,{"aria-hidden":`true`,"data-pin-glyph":`true`,children:(0,E.jsx)(Ct,{})}),(0,E.jsx)(Mt,{children:d?`From ${h}`:h}),(0,E.jsx)(Dt,{$open:a})]}),(0,E.jsx)(At,{type:`button`,onClick:r,disabled:!s,"aria-disabled":!s,"aria-label":l,title:l,$rightEdge:!0,children:(0,E.jsx)(Et,{})})]})});var Ot=r.div`
  display: inline-flex;
  align-items: stretch;
  height: 28px;
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-left: 8px;
  overflow: hidden;
  flex-shrink: 0;
  opacity: ${({$walkedOff:e})=>e?.7:1};
  transition: opacity 120ms ease;
`,kt=i`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.colors.text.tertiary};
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: ${({theme:e})=>e.transitions.fast};

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: -2px;
  }
`,At=r.button`
  ${kt};
  width: 24px;
  border-left: ${({$rightEdge:e,theme:t})=>e?`1px solid ${t.colors.border.subtle}`:`none`};
  border-right: ${({$rightEdge:e,theme:t})=>e?`none`:`1px solid ${t.colors.border.subtle}`};

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.background.hover};
    color: ${({theme:e})=>e.colors.text.primary};
  }

  &:disabled {
    cursor: default;
    opacity: 0.4;
  }
`,jt=r.button`
  ${kt};
  gap: 6px;
  padding: 0 10px;
  min-width: 80px;
  color: ${({theme:e,$active:t})=>t?e.colors.interactive.activeText:e.colors.text.primary};
  background: ${({theme:e,$active:t})=>t?e.colors.interactive.activeBg:`transparent`};

  &:hover:not(:disabled) {
    background: ${({theme:e,$active:t})=>t?e.colors.interactive.activeBg:e.colors.background.hover};
  }
`,Mt=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-variant-numeric: tabular-nums;
  line-height: 1;
  white-space: nowrap;
`,Nt=r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.text.tertiary};
`,Pt=r.svg`
  transition: transform 120ms ease;
  transform: ${({$open:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  flex-shrink: 0;
`;r.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 32px;
  padding: 0 14px 0 11px;
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.uxcam.indigo[500]},
    ${({theme:e})=>e.colors.uxcam.indigo[600]}
  );
  color: ${({theme:e})=>e.colors.text.inverse};
  border: 0;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  letter-spacing: 0.02em;
  line-height: 1;
  box-shadow:
    0 1px 2px rgba(99, 102, 241, 0.18),
    0 2px 6px rgba(99, 102, 241, 0.22);
  transition:
    transform 120ms ease,
    box-shadow 180ms ease,
    filter 120ms ease;

  & > svg {
    flex-shrink: 0;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow:
      0 2px 4px rgba(99, 102, 241, 0.22),
      0 6px 14px rgba(99, 102, 241, 0.32);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    filter: brightness(0.96);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.uxcam.indigo[300]};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,r.header`
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.background.surface};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
  flex-shrink: 0;
  position: relative;
  z-index: 30;
`,r.div`
  min-height: 36px;
  display: flex;
  align-items: center;
  gap: 0;
  padding: 0 ${({theme:e})=>e.spacing[6]};
`,r.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  height: 32px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: ${({theme:e})=>e.colors.interactive.activeText};
    border-color: ${({theme:e})=>e.colors.interactive.activeBorder};
    background: ${({theme:e})=>e.colors.interactive.activeBg};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: 2px;
  }
`,r.svg`
  flex-shrink: 0;
  stroke: currentColor;
  transition: stroke 150ms cubic-bezier(0.4, 0, 0.2, 1);
`,r.span`
  display: inline-block;
  line-height: 1;
`,r.span`
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
  color: ${({theme:e})=>e.colors.text.tertiary};
  opacity: 0.55;
  flex-shrink: 0;
`,r.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({theme:e})=>e.spacing[6]};
  gap: ${({theme:e})=>e.spacing[4]};
  min-width: 0;
`,r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  gap: 2px;
`,r.h1`
  margin: 0;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  font-family: ${({$mono:e,theme:t})=>e?t.typography.fontFamily.mono:t.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  font-variant-numeric: tabular-nums;
  line-height: 1.2;
  color: ${({theme:e})=>e.colors.text.primary};
  letter-spacing: ${({$mono:e})=>e?`0`:`-0.01em`};
  white-space: nowrap;
  overflow: hidden;

  & > span {
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
  }
`,r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.text.primary};
`,r.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,r(n)`
  display: inline-flex;
  align-items: baseline;
  color: inherit;
  text-decoration: none;
  font: inherit;
  font-family: ${({$mono:e,theme:t})=>e?t.typography.fontFamily.mono:t.typography.fontFamily.sans};
  font-variant-numeric: ${({$mono:e})=>e?`tabular-nums`:`normal`};
  cursor: pointer;
  border-radius: 3px;
  outline: none;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover,
  &:focus-visible {
    color: ${({theme:e})=>e.colors.text.link};
  }

  &:hover > span:first-child,
  &:focus-visible > span:first-child {
    text-decoration: underline;
    text-decoration-color: ${({theme:e})=>e.colors.text.link};
    text-underline-offset: 3px;
  }

  &:hover > span:last-child,
  &:focus-visible > span:last-child {
    opacity: 1;
    transform: translateX(0);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: 2px;
  }
`,r.span`
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
  font-size: 0.9em;
  line-height: 1;
  opacity: 0;
  transform: translateX(-2px);
  transition: opacity 120ms ease-out, transform 120ms ease-out;
  color: ${({theme:e})=>e.colors.text.link};
`,r.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-shrink: 0;
  margin-left: auto;
`,r.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-weight: ${({$strong:e,theme:t})=>e?t.typography.fontWeight.medium:t.typography.fontWeight.normal};
  white-space: nowrap;

  & svg {
    color: ${({theme:e})=>e.colors.text.tertiary};
    flex-shrink: 0;
  }
`,r.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.text.tertiary};
  opacity: 0.5;
  flex-shrink: 0;
`,r.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 8px 2px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.02em;

  ${({theme:e,$variant:t=`good`})=>{if(t===`neutral`)return`
        background: ${e.colors.background.sunken};
        color: ${e.colors.text.secondary};
      `;let n=e.colors.severity[t===`critical`?`critical`:t===`warning`?`warning`:`good`];return`
      background: ${n.bg};
      color: ${n.text};
    `}}
`,r.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({theme:e,$variant:t=`good`})=>t===`neutral`?e.colors.text.tertiary:e.colors.severity[t===`critical`?`critical`:t===`warning`?`warning`:`good`].icon};
  flex-shrink: 0;
`;var Ft=({orgId:e,days:t,onBack:n,onSelectUser:r})=>{let i=v(e,t),a=(0,T.useCallback)(()=>{i.refetch()},[i]),o=[{label:`Internal Analytics`,onClick:n},{label:i.data?.org_name??e}];if(i.isLoading)return(0,E.jsxs)(O,{children:[(0,E.jsx)(U,{segments:o,showTrailingChevron:!1,compact:!0}),(0,E.jsxs)(A,{children:[(0,E.jsx)(_,{variant:`block`,height:`160px`}),(0,E.jsx)(_,{variant:`block`,height:`300px`,index:1}),(0,E.jsx)(_,{variant:`block`,height:`200px`,index:2})]})]});if(i.isError)return(0,E.jsxs)(O,{children:[(0,E.jsx)(U,{segments:o,showTrailingChevron:!1,compact:!0}),(0,E.jsxs)(j,{children:[(0,E.jsx)(M,{children:`Failed to load organization data. This may require admin access.`}),(0,E.jsx)(N,{type:`button`,onClick:a,children:`Retry`})]})]});let s=i.data;return s?(0,E.jsxs)(O,{children:[(0,E.jsx)(U,{segments:o,showTrailingChevron:!1,compact:!0}),(0,E.jsxs)(k,{children:[(0,E.jsx)(ge,{data:s}),(0,E.jsx)(Te,{signals:s.risk_signals}),(0,E.jsx)(y,{title:`Team Activity`,dataFreshness:s.data_freshness,children:(0,E.jsx)(Ne,{users:s.users,onSelectUser:r})}),(0,E.jsx)(y,{title:`Feature Adoption`,dataFreshness:s.data_freshness,children:(0,E.jsx)(Ue,{data:s.feature_usage})}),(0,E.jsx)(y,{title:`Dashboard Interactions`,dataFreshness:s.data_freshness,children:(0,E.jsx)(Ke,{summary:s.ai_summary})}),(0,E.jsx)(y,{title:`Usage Trend`,dataFreshness:s.data_freshness,children:(0,E.jsx)(ut,{data:s.dau_trend})}),(s.warnings?.length??0)>0&&(0,E.jsx)(It,{children:s.warnings.map(e=>(0,E.jsx)(Lt,{children:e},e))})]})]}):null},It=r.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
  background: ${({theme:e})=>e.colors.severity.warning.bg};
  border-radius: ${({theme:e})=>e.borderRadius.default};
`,Lt=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.severity.warning.text};
`,Rt=({email:e,orgName:t,days:n,onBackToDirectory:r,onBackToOrg:i})=>{let a=ee([e],n),o=a.data?.users?.[0]??null,s=[{label:`Internal Analytics`,onClick:r},{label:t??`Organization`,onClick:i},{label:e}],c=(0,T.useMemo)(()=>[{id:`screen_name`,header:`Screen`,accessorKey:`screen_name`,cell:({getValue:e})=>(0,E.jsx)(qt,{children:e()})},{id:`visit_count`,header:`Visits`,accessorKey:`visit_count`,cell:({getValue:e})=>(0,E.jsx)(D,{children:e().toLocaleString()}),meta:{align:`right`}},{id:`avg_duration_sec`,header:`Avg Duration`,accessorKey:`avg_duration_sec`,cell:({getValue:e})=>(0,E.jsx)(D,{children:x(e())}),meta:{align:`right`}}],[]);if(a.isLoading)return(0,E.jsxs)(O,{children:[(0,E.jsx)(U,{segments:s,showTrailingChevron:!1,compact:!0}),(0,E.jsxs)(A,{children:[(0,E.jsx)(_,{variant:`block`,height:`120px`}),(0,E.jsx)(_,{variant:`block`,height:`240px`,index:1})]})]});if(a.isError)return(0,E.jsxs)(O,{children:[(0,E.jsx)(U,{segments:s,showTrailingChevron:!1,compact:!0}),(0,E.jsxs)(j,{children:[(0,E.jsx)(M,{children:`Failed to load user activity data.`}),(0,E.jsx)(N,{type:`button`,onClick:()=>a.refetch(),children:`Retry`})]})]});if(!o)return(0,E.jsxs)(O,{children:[(0,E.jsx)(U,{segments:s,showTrailingChevron:!1,compact:!0}),(0,E.jsxs)(Jt,{children:[`No activity data found for `,e,`.`]})]});let l=[...o.screen_visits].sort((e,t)=>t.visit_count-e.visit_count).slice(0,20);return(0,E.jsxs)(O,{children:[(0,E.jsx)(U,{segments:s,showTrailingChevron:!1,compact:!0}),(0,E.jsxs)(k,{children:[(0,E.jsxs)(zt,{children:[(0,E.jsx)(Bt,{children:o.email}),(0,E.jsxs)(Vt,{children:[(0,E.jsxs)(W,{children:[(0,E.jsx)(G,{children:`Events`}),(0,E.jsx)(K,{children:o.total_events.toLocaleString()})]}),(0,E.jsxs)(W,{children:[(0,E.jsx)(G,{children:`AI Events`}),(0,E.jsx)(K,{children:o.ai_events.toLocaleString()})]}),(0,E.jsxs)(W,{children:[(0,E.jsx)(G,{children:`Sessions`}),(0,E.jsx)(K,{children:o.session_count.toLocaleString()})]}),(0,E.jsxs)(W,{children:[(0,E.jsx)(G,{children:`Session Duration`}),(0,E.jsx)(K,{children:x(o.total_session_duration_sec)})]}),(0,E.jsxs)(W,{children:[(0,E.jsx)(G,{children:`Active Days`}),(0,E.jsx)(K,{children:o.active_days})]}),(0,E.jsxs)(W,{children:[(0,E.jsx)(G,{children:`First Active`}),(0,E.jsx)(K,{children:w(o.first_active)})]}),(0,E.jsxs)(W,{children:[(0,E.jsx)(G,{children:`Last Active`}),(0,E.jsx)(K,{children:w(o.last_active)})]})]}),o.org_ids.length>0&&(0,E.jsxs)(Ht,{children:[(0,E.jsx)(G,{children:`Organizations Accessed`}),(0,E.jsx)(Ut,{children:o.org_ids.map(e=>(0,E.jsx)(Wt,{children:e},e))})]})]}),o.feature_categories.length>0&&(0,E.jsx)(y,{title:`Feature Categories`,children:(0,E.jsx)(Gt,{children:o.feature_categories.map(e=>(0,E.jsx)(Kt,{children:e},e))})}),(0,E.jsx)(y,{title:`Screen Visits (Top ${l.length})`,children:(0,E.jsx)(d,{data:l,columns:c,density:`compact`,enableSorting:!0,enablePagination:!1,emptyState:{title:`No screen visits`,description:`No screen visit data found for this user.`},ariaLabel:`User screen visits`})})]})]})},zt=r.div`
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: 20px;
`,Bt=r.h2`
  margin: 0 0 16px;
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  word-break: break-all;
`,Vt=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
`,W=r.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,G=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,K=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  color: ${({theme:e})=>e.colors.text.primary};
`,Ht=r.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.colors.border.subtle};
`,Ut=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Wt=r.code`
  padding: 2px 8px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  color: ${({theme:e})=>e.colors.text.secondary};
  background: ${({theme:e})=>e.colors.background.sunken};
  border-radius: ${({theme:e})=>e.borderRadius.default};
`,Gt=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Kt=r.span`
  padding: 4px 10px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.interactive.activeText};
  background: ${({theme:e})=>e.colors.interactive.activeBg};
  border: 1px solid ${({theme:e})=>e.colors.interactive.subtleBorder};
  border-radius: ${({theme:e})=>e.borderRadius.full};
`,qt=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
`,Jt=r.p`
  text-align: center;
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  padding: 48px 0;
  margin-top: 8px;
`;function Yt(e){return e.dau_trend.length===0?0:e.dau_trend[e.dau_trend.length-1].unique_users}var Xt=({days:e})=>{let t=ne(e);if(t.isLoading)return(0,E.jsx)(Zt,{children:Array.from({length:5}).map((e,t)=>(0,E.jsx)(_,{variant:`card`,height:`72px`},t))});if(t.isError||!t.data)return(0,E.jsxs)(Qt,{children:[`Failed to load platform overview.`,(0,E.jsx)($t,{type:`button`,onClick:()=>t.refetch(),children:`Retry`})]});let n=t.data,r=Yt(n),i=n.ai_summary?.unique_ai_users??0;return(0,E.jsxs)(Zt,{children:[(0,E.jsxs)(q,{children:[(0,E.jsx)(J,{children:C(r)}),(0,E.jsx)(Y,{children:`DAU (latest)`})]}),(0,E.jsxs)(q,{children:[(0,E.jsx)(J,{children:C(n.wau)}),(0,E.jsx)(Y,{children:`WAU`})]}),(0,E.jsxs)(q,{children:[(0,E.jsx)(J,{children:C(n.mau)}),(0,E.jsx)(Y,{children:`MAU`})]}),(0,E.jsxs)(q,{children:[(0,E.jsx)(J,{children:C(n.total_sessions)}),(0,E.jsx)(Y,{children:`Total Sessions`})]}),(0,E.jsxs)(q,{children:[(0,E.jsx)(J,{children:x(n.avg_session_duration_sec)}),(0,E.jsx)(Y,{children:`Avg Duration`})]}),(0,E.jsxs)(q,{children:[(0,E.jsx)(J,{children:C(i)}),(0,E.jsx)(Y,{children:`AI Active Users`})]})]})},Zt=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
`,q=r.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
`,J=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  color: ${({theme:e})=>e.colors.text.primary};
`,Y=r.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,Qt=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  margin-bottom: 20px;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.severity.warning.text};
  background: ${({theme:e})=>e.colors.severity.warning.bg};
  border-radius: ${({theme:e})=>e.borderRadius.default};
`,$t=r.button`
  padding: 0;
  border: none;
  background: none;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.link};
  cursor: pointer;
  text-decoration: underline;
`;function en(e){let t=e.get(`period`);return t===`7`?7:t===`90`?90:30}function tn(e){return e.get(`view`)===`directory`?`directory`:`current-org`}var nn=()=>{let{selectedOrgId:e}=s(),{isAdmin:t,isLoading:n}=o(),[r,i]=re(),a=en(r),c=tn(r),[l,u]=(0,T.useState)({detailOrgId:null,userEmail:null,detailOrgName:null}),d=(0,T.useCallback)(e=>{i({period:String(e),view:c===`current-org`?void 0:c})},[i,c]),f=(0,T.useCallback)(e=>{u({detailOrgId:null,userEmail:null,detailOrgName:null}),i({period:String(a),view:e===`current-org`?void 0:e})},[i,a]),p=(0,T.useCallback)(e=>{u({detailOrgId:e,userEmail:null,detailOrgName:null}),i({period:String(a),view:`directory`})},[i,a]),m=(0,T.useCallback)(e=>{u(t=>({...t,userEmail:e}))},[]),h=(0,T.useCallback)(()=>{u({detailOrgId:null,userEmail:null,detailOrgName:null})},[]),g=(0,T.useCallback)(()=>{u(e=>({...e,userEmail:null}))},[]);if(n)return(0,E.jsx)(X,{children:(0,E.jsx)(_,{variant:`block`,height:`200px`})});if(!t)return(0,E.jsx)(X,{children:(0,E.jsxs)(cn,{children:[(0,E.jsx)(ln,{children:`Access Restricted`}),(0,E.jsx)(un,{children:`This page is only available to administrators.`})]})});let v=l.detailOrgId??e;return l.userEmail?(0,E.jsxs)(X,{children:[(0,E.jsxs)(Z,{children:[(0,E.jsx)(Q,{children:`Internal Analytics`}),(0,E.jsx)(S,{value:a,onChange:d})]}),(0,E.jsx)(Rt,{email:l.userEmail,orgName:l.detailOrgName,days:a,onBackToDirectory:h,onBackToOrg:g})]}):l.detailOrgId?(0,E.jsxs)(X,{children:[(0,E.jsxs)(Z,{children:[(0,E.jsx)(Q,{children:`Internal Analytics`}),(0,E.jsx)(S,{value:a,onChange:d})]}),(0,E.jsx)(Ft,{orgId:l.detailOrgId,days:a,onBack:h,onSelectUser:m})]}):(0,E.jsxs)(X,{children:[(0,E.jsxs)(Z,{children:[(0,E.jsxs)(rn,{children:[(0,E.jsx)(Q,{children:`Internal Analytics`}),(0,E.jsx)(S,{value:a,onChange:d})]}),(0,E.jsxs)(an,{role:`tablist`,"aria-label":`Analytics views`,children:[(0,E.jsx)($,{role:`tab`,type:`button`,$active:c===`current-org`,"aria-selected":c===`current-org`,onClick:()=>f(`current-org`),children:`Current Organization`}),(0,E.jsx)($,{role:`tab`,type:`button`,$active:c===`directory`,"aria-selected":c===`directory`,onClick:()=>f(`directory`),children:`All Organizations`})]})]}),(0,E.jsxs)(on,{role:`tabpanel`,children:[c===`current-org`&&v&&(0,E.jsx)(Ft,{orgId:v,days:a,onBack:()=>f(`directory`),onSelectUser:m}),c===`current-org`&&!v&&(0,E.jsx)(sn,{children:`Select an app to view the current organization's analytics, or switch to the "All Organizations" tab.`}),c===`directory`&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Xt,{days:a}),(0,E.jsx)(de,{days:a,onSelectOrg:p})]})]})]})},X=r.div`
  height: 100%;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 0;
`,Z=r.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`,rn=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`,Q=r.h1`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`,an=r.div`
  display: flex;
  gap: 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
`,$=r.button`
  padding: 8px 16px;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({$active:e,theme:t})=>e?t.typography.fontWeight.semibold:t.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  color: ${({$active:e,theme:t})=>e?t.colors.interactive.activeText:t.colors.text.tertiary};
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({$active:e,theme:t})=>e?t.colors.interactive.activeText:`transparent`};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  margin-bottom: -1px;

  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: -2px;
  }
`,on=r.div`
  flex: 1;
`,sn=r.p`
  text-align: center;
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  padding: 60px 24px;
  margin: 0;
`,cn=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 80px 24px;
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
`,ln=r.h2`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.primary};
`,un=r.p`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.text.secondary};
`;export{nn as InternalAnalyticsPage};