import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import{D as n,g as r,i}from"./ui-vendor-CUROeZIN.js";import{O as a}from"./markdown-vendor-BoH6QLuc.js";import{n as o}from"./fetchClient-BF44M5G_.js";import{n as s}from"./NavigationContext-DTwRip-h.js";import{i as c,t as l}from"./animations-D6JAIVtz.js";import{Yr as u,_n as d,gn as f,ln as p,nn as m,rn as h,tn as g,yn as _}from"./TaraChatContext-Ne5fUqNv.js";import{t as v}from"./Shimmer-BQNKs0BP.js";import"./loading-Cm5yT19R.js";import{t as ee}from"./usePageSearchParams-Dppn5wBJ.js";import{n as te}from"./ExplorerLayout-BMe5mI5t.js";import{t as y}from"./JoinedStrip-SqDmUFdP.js";var b=e(t(),1),ne=new Intl.NumberFormat(`en`,{notation:`compact`,maximumFractionDigits:1});function x(e){return ne.format(e)}function S(e,t=1){return`${e.toFixed(t)}%`}var C={verified:`Verified`,sampling:`Sampling`,limit_exceeded:`Limit Exceeded`,recording_filter:`Recording Filter`,overage_disabled:`Overage Disabled`,recording_off:`Recording Off`,daily_limit:`Daily Limit`,reason_15:`Already Processed`},w={verified:`#10B981`,sampling:`#3B82F6`,limit_exceeded:`#F59E0B`,recording_filter:`#8B5CF6`,overage_disabled:`#EF4444`,recording_off:`#6B7280`,daily_limit:`#D97706`,reason_15:`#D1D5DB`};function T(e){switch(e){case`typical`:case`healthy`:return`#10B981`;case`below_average`:case`monitor`:return`#F59E0B`;case`investigate`:return`#F97316`;case`critical`:return`#EF4444`;default:return`#6B7280`}}function E(e){switch(e){case`typical`:return`Typical`;case`healthy`:return`Healthy`;case`below_average`:return`Below Average`;case`monitor`:return`Monitor`;case`investigate`:return`Investigate`;case`critical`:return`Critical`;default:return e}}function re(e){let t=new Date,n=t.toISOString().split(`T`)[0],r=parseInt(e,10);return{from_date:new Date(t.getTime()-r*864e5).toISOString().split(`T`)[0],to_date:n}}var ie=[{value:`7d`,label:`Last 7 days`},{value:`14d`,label:`Last 14 days`},{value:`30d`,label:`Last 30 days`},{value:`60d`,label:`Last 60 days`},{value:`90d`,label:`Last 90 days`}],D=a(),ae=({value:e,onChange:t})=>(0,D.jsxs)(O,{children:[(0,D.jsx)(oe,{children:`Date Range:`}),(0,D.jsx)(se,{children:ie.map(n=>(0,D.jsx)(ce,{$active:e===n.value,onClick:()=>t(n.value),type:`button`,children:n.label},n.value))})]}),O=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,oe=n.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.secondary};
  white-space: nowrap;
`,se=n.div`
  display: flex;
  gap: 0;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  overflow: hidden;
`,ce=n.button`
  padding: 6px 12px;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border: none;
  border-right: 1px solid ${({theme:e})=>e.colors.border.default};
  cursor: pointer;
  white-space: nowrap;
  transition: ${({theme:e})=>e.transitions.fast};

  background: ${({$active:e,theme:t})=>e?t.colors.metrics.rate[500]:t.colors.background.surface};
  color: ${({$active:e,theme:t})=>e?t.colors.text.inverse:t.colors.text.secondary};

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: ${({$active:e,theme:t})=>e?t.colors.metrics.rate[600]:t.colors.background.hover};
  }
`,k=({text:e})=>{let[t,n]=(0,b.useState)(!1),[r,i]=(0,b.useState)(`above`),a=(0,b.useRef)(null);return(0,b.useEffect)(()=>{!t||!a.current||i(a.current.getBoundingClientRect().top<80?`below`:`above`)},[t]),(0,D.jsxs)(le,{ref:a,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),"aria-label":e,children:[(0,D.jsx)(ue,{children:`i`}),t&&(0,D.jsx)(de,{$position:r,children:e})]})},le=n.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: help;
  margin-left: 4px;
  vertical-align: middle;
`,ue=n.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.background.sunken};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  color: ${({theme:e})=>e.colors.text.tertiary};
  line-height: 1;
  flex-shrink: 0;
`,de=n.div`
  position: absolute;
  ${({$position:e})=>e===`above`?`bottom: calc(100% + 6px);`:`top: calc(100% + 6px);`}
  left: 50%;
  transform: translateX(-50%);
  background: ${({theme:e})=>e.colors.text.primary};
  color: ${({theme:e})=>e.colors.text.inverse};
  padding: 8px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
  line-height: 1.5;
  width: 260px;
  z-index: ${({theme:e})=>e.zIndex.tooltip};
  pointer-events: none;
  box-shadow: ${({theme:e})=>e.shadows.lg};
  text-transform: none;
  letter-spacing: normal;
`,A=({message:e=`Failed to load this section.`,onRetry:t})=>(0,D.jsxs)(fe,{children:[(0,D.jsxs)(pe,{children:[(0,D.jsx)(me,{"aria-hidden":`true`,children:`!`}),(0,D.jsx)(he,{children:e})]}),t&&(0,D.jsx)(ge,{type:`button`,onClick:t,children:`Retry`})]}),fe=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  background: ${({theme:e})=>e.colors.severity.warning.bg};
  border: 1px solid ${({theme:e})=>e.colors.severity.warning.border};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
`,pe=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,me=n.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.severity.warning.border};
  color: ${({theme:e})=>e.colors.text.inverse};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  flex-shrink: 0;
`,he=n.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.severity.warning.text};
`,ge=n.button`
  padding: 4px 12px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border: 1px solid ${({theme:e})=>e.colors.severity.warning.border};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: transparent;
  color: ${({theme:e})=>e.colors.severity.warning.text};
  cursor: pointer;
  white-space: nowrap;
  transition: ${({theme:e})=>e.transitions.fast};
  flex-shrink: 0;

  &:hover {
    background: ${({theme:e})=>e.colors.severity.warning.border};
    color: white;
  }
`,j={settings_approved:`Proportion of SDK verification attempts approved for recording. Uses verifystats proportions (absolute counts inflated ~1.3x by re-checks).`,verified_unique:`Unique sessions approved for recording. Deduplicated from sessionverify (25% of sessions have 2+ check-ins).`,uploaded:`Sessions that successfully uploaded and landed in the Hive data lake.`,recording_rate:`Percentage of verified sessions that uploaded. Rates of 30-40% are typical due to short sessions and app backgrounding.`},_e=({data:e,isLoading:t,isError:n,onRetry:r})=>{let i=(0,b.useMemo)(()=>{if(!e)return[];let{kpi:t,previous_period:n}=e,r=n.settings_approved_pct===null?null:t.settings_approved_pct-n.settings_approved_pct,i=n.verified_unique!==null&&n.verified_unique>0?(t.verified_unique-n.verified_unique)/n.verified_unique*100:null,a=n.uploaded!==null&&n.uploaded>0?(t.uploaded-n.uploaded)/n.uploaded*100:null,o=n.recording_rate===null?null:t.recording_rate-n.recording_rate;return[{key:`settings_approved`,label:`Settings Approved`,tooltip:j.settings_approved,value:S(t.settings_approved_pct),type:`rate`,trend:r===null?void 0:{direction:r>.1?`up`:r<-.1?`down`:`flat`,percentage:Math.abs(r)},comparison:n.settings_approved_pct===null?void 0:{value:S(n.settings_approved_pct),label:`vs previous period`}},{key:`verified_unique`,label:`Verified (Unique)`,tooltip:j.verified_unique,value:x(t.verified_unique),type:`count`,trend:i===null?void 0:{direction:i>1?`up`:i<-1?`down`:`flat`,percentage:Math.abs(i)},comparison:n.verified_unique===null?void 0:{value:x(n.verified_unique),label:`vs previous period`}},{key:`uploaded`,label:`Uploaded (Hive)`,tooltip:j.uploaded,value:x(t.uploaded),type:`count`,trend:a===null?void 0:{direction:a>1?`up`:a<-1?`down`:`flat`,percentage:Math.abs(a)},comparison:n.uploaded===null?void 0:{value:x(n.uploaded),label:`vs previous period`}},{key:`recording_rate`,label:`Recording Rate`,tooltip:j.recording_rate,value:S(t.recording_rate),type:`rate`,benchmark:{label:E(t.recording_rate_severity),threshold:0,severity:t.recording_rate_severity===`typical`?`good`:t.recording_rate_severity===`below_average`?`warning`:`critical`},trend:o===null?void 0:{direction:o>.1?`up`:o<-.1?`down`:`flat`,percentage:Math.abs(o)},comparison:n.recording_rate===null?void 0:{value:S(n.recording_rate),label:`vs previous period`}}]},[e]);return n?(0,D.jsx)(A,{message:`Failed to load pipeline summary.`,onRetry:r}):t?(0,D.jsx)(y,{$columns:4,role:`status`,"aria-label":`Loading pipeline metrics`,children:Array.from({length:4}).map((e,t)=>(0,D.jsx)(v,{variant:`card`,index:t},t))}):i.length===0?null:(0,D.jsx)(y,{$columns:4,children:i.map((e,t)=>(0,D.jsxs)(ve,{children:[(0,D.jsx)(p,{label:e.label,value:e.value,type:e.type,metricKey:e.key,benchmark:e.benchmark,trend:e.trend,comparison:e.comparison,animate:!0,animationDelay:t*60}),(0,D.jsx)(ye,{children:(0,D.jsx)(k,{text:e.tooltip})})]},e.key))})},ve=n.div`
  position: relative;
`,ye=n.div`
  position: absolute;
  top: ${({theme:e})=>e.spacing[2]};
  right: ${({theme:e})=>e.spacing[2]};
`,be=`How SDK verification check-ins distribute across reason codes. Proportions only (verifystats counts are event-level, not unique sessions).`,xe=({proportions:e,isLoading:t,isError:n,onRetry:r})=>{let[i,a]=(0,b.useState)(null);if(n)return(0,D.jsxs)(M,{children:[(0,D.jsx)(N,{children:(0,D.jsx)(P,{children:`Settings Loss Breakdown`})}),(0,D.jsx)(A,{message:`Failed to load settings loss data.`,onRetry:r})]});if(t)return(0,D.jsxs)(M,{children:[(0,D.jsx)(P,{children:`Settings Loss Breakdown`}),(0,D.jsx)(v,{variant:`card`,height:`36px`,radius:`8px`})]});if(e.length===0)return null;let o=[...e].sort((e,t)=>e.reason===`verified`?-1:t.reason===`verified`?1:t.pct-e.pct);return(0,D.jsxs)(M,{children:[(0,D.jsx)(N,{children:(0,D.jsxs)(P,{children:[`Settings Loss Breakdown`,(0,D.jsx)(k,{text:be})]})}),(0,D.jsx)(Se,{role:`img`,"aria-label":`Settings loss distribution bar chart`,children:o.map((e,t)=>{let n=C[e.reason]||e.reason,r=w[e.reason]||`#9CA3AF`,o=i===t;return(0,D.jsxs)(Ce,{$width:e.pct,$color:r,$hovered:o,onMouseEnter:()=>a(t),onMouseLeave:()=>a(null),"aria-label":`${n}: ${e.pct.toFixed(1)}%`,children:[e.pct>=5&&(0,D.jsxs)(we,{children:[n,` `,e.pct.toFixed(1),`%`]}),o&&(0,D.jsxs)(Te,{children:[(0,D.jsx)(Ee,{children:n}),(0,D.jsxs)(De,{children:[e.pct.toFixed(2),`%`]})]})]},e.reason)})}),(0,D.jsx)(Oe,{children:o.map(e=>{let t=C[e.reason]||e.reason;return(0,D.jsxs)(ke,{children:[(0,D.jsx)(Ae,{$color:w[e.reason]||`#9CA3AF`}),(0,D.jsxs)(je,{children:[t,` (`,e.pct.toFixed(1),`%)`]})]},e.reason)})})]})},M=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,N=n.div`
  display: flex;
  align-items: center;
`,P=n.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
`,Se=n.div`
  display: flex;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
`,Ce=n.div`
  position: relative;
  width: ${({$width:e})=>`${e}%`};
  min-width: ${({$width:e})=>e>.5?`2px`:`0`};
  background: ${({$color:e})=>e};
  opacity: ${({$hovered:e})=>e?1:.85};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.15s ease;
  cursor: default;
`,we=n.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.inverse};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 6px;
`,Te=n.div`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: ${({theme:e})=>e.colors.text.primary};
  color: ${({theme:e})=>e.colors.text.inverse};
  padding: 6px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.default};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  white-space: nowrap;
  z-index: ${({theme:e})=>e.zIndex.tooltip};
  pointer-events: none;
  box-shadow: ${({theme:e})=>e.shadows.md};
`,Ee=n.div`
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,De=n.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
`,Oe=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,ke=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Ae=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$color:e})=>e};
  flex-shrink: 0;
`,je=n.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.secondary};
`,F=d(`bar`),I={line:[`--color-chart-1`,m[`--color-chart-1`]],good:[`--color-success-text`,m[`--color-success-text`]],warning:[`--color-warning-text`,m[`--color-warning-text`]],critical:[`--color-critical-text`,m[`--color-critical-text`]],axisLabel:[`--chart-axis-label`,m[`--chart-axis-label`]],axisLine:[`--chart-axis-line`,m[`--chart-axis-line`]],gridLine:[`--chart-grid-line`,m[`--chart-grid-line`]],referenceLine:[`--muted-foreground`,m[`--muted-foreground`]]},L=h(null,I),Me=e=>h(e,I);function Ne(e){let t=e.reduce((e,t)=>e+t.verified,0),n=e.reduce((e,t)=>e+t.uploaded,0);return t>0?n/t*100:0}function Pe(e,t){return e>=t*1?`good`:e>=t*.75?`warning`:`critical`}function R(e,t,n){return{silent:!0,symbol:`none`,lineStyle:{color:t.referenceLine,type:`dashed`,width:1},label:{show:!0,position:`end`,formatter:`Avg ${e.toFixed(1)}%`,color:t.referenceLine,fontSize:u.axisTick.size},data:[n===`yAxis`?{yAxis:e}:{xAxis:e}]}}var z=e=>`${e}%`;function B(e){return{animationDuration:f.animation.durationMs,animationEasing:f.animation.easing,grid:{...f.grid,right:24},textStyle:{fontSize:11},tooltip:{trigger:`axis`,confine:!0,axisPointer:{type:`line`,lineStyle:{color:e.axisLine}}}}}function V(e){return t=>{let n=e[t];return n?[`<div><b>${n.label}</b></div>`,`<div>Upload Rate: <b>${n.upload_rate.toFixed(1)}%</b></div>`,`<div>Verified: ${n.verified.toLocaleString()}</div>`,`<div>Uploaded: ${n.uploaded.toLocaleString()}</div>`,`<div>Not Uploaded: ${n.not_uploaded.toLocaleString()}</div>`].join(``):``}}function Fe(e){let{rows:t,averageRate:n,palette:r=L}=e;return{...B(r),tooltip:{...B(r).tooltip,formatter:e=>{let n=(Array.isArray(e)?e:[e])[0]?.dataIndex;return typeof n==`number`?V(t)(n):``}},xAxis:{type:`category`,boundaryGap:!1,data:t.map(e=>e.shortLabel),axisTick:{show:!1},axisLine:{lineStyle:{color:r.axisLine}},axisLabel:{color:r.axisLabel,fontSize:u.axisTick.size,hideOverlap:!0}},yAxis:{type:`value`,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:r.axisLabel,fontSize:u.axisTick.size,formatter:z},splitLine:{lineStyle:{color:r.gridLine}},scale:!0},series:[{name:`Upload Rate`,type:`line`,smooth:!1,symbol:`circle`,symbolSize:6,color:r.line,itemStyle:{color:r.line},lineStyle:{color:r.line,width:2},data:t.map(e=>e.upload_rate),markLine:R(n,r,`yAxis`)}]}}function Ie(e){let{rows:t,averageRate:n,palette:r=L}=e;return{...B(r),tooltip:{...B(r).tooltip,axisPointer:{type:`shadow`},formatter:e=>{let n=(Array.isArray(e)?e:[e])[0]?.dataIndex;return typeof n==`number`?V(t)(n):``}},xAxis:{type:`value`,min:0,axisLine:{lineStyle:{color:r.axisLine}},axisLabel:{color:r.axisLabel,fontSize:u.axisTick.size,formatter:z},splitLine:{lineStyle:{color:r.gridLine}}},yAxis:{type:`category`,data:t.map(e=>e.shortLabel),axisTick:{show:!1},axisLine:{show:!1},axisLabel:{color:r.axisLabel,fontSize:u.axisTick.size,interval:0,overflow:`truncate`,width:140}},series:[{name:`Upload Rate`,type:`bar`,barMinWidth:F.minBar,barMaxWidth:F.maxBar,barCategoryGap:F.categoryGap,barMinHeight:f.barMinHeight,itemStyle:{borderRadius:F.radius},data:t.map(e=>({value:e.upload_rate,itemStyle:{color:r[Pe(e.upload_rate,n)],borderRadius:F.radius}})),markLine:R(n,r,`xAxis`)}]}}function Le(e,t){return e?320:Math.max(320,Math.max(t,1)*F.minSlot+60)}var Re=[{value:`day`,label:`Day`},{value:`week`,label:`Week`},{value:`app_version`,label:`App Version`},{value:`sdk_version`,label:`SDK Version`},{value:`device_type`,label:`Device Type`},{value:`country`,label:`Country`}],H=new Set([`day`,`week`]),ze=`Upload success rate (verified sessions that made it to Hive). Excludes sessions from the last 48 hours that may still be uploading. Color: green = above average, amber = 75-100% of avg, red = below 50% of avg.`;function Be(e,t){if(H.has(t))try{return new Date(e).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`})}catch{return e}return e.length>20?`${e.slice(0,18)}...`:e}var Ve=({data:e,groupBy:t,onGroupByChange:n,isLoading:r,isError:i,onRetry:a})=>{let o=(0,b.useRef)(null),s=H.has(t),c=(0,b.useMemo)(()=>e?Ne(e):0,[e]),l=(0,b.useMemo)(()=>e?e.map(e=>({...e,shortLabel:Be(e.label,t)})):[],[e,t]),u=g(o,Me,L,l.length>0),d=(0,b.useMemo)(()=>s?Fe({rows:l,averageRate:c,palette:u}):Ie({rows:l,averageRate:c,palette:u}),[c,l,s,u]),f=Le(s,l.length);return(0,D.jsxs)(He,{children:[(0,D.jsxs)(Ue,{children:[(0,D.jsxs)(We,{children:[`Upload Rate (Recording Loss)`,(0,D.jsx)(k,{text:ze})]}),(0,D.jsx)(Ge,{role:`group`,"aria-label":`Chart grouping`,children:Re.map(e=>(0,D.jsx)(Ke,{$active:t===e.value,onClick:()=>n(e.value),type:`button`,"aria-pressed":t===e.value,children:e.label},e.value))})]}),(0,D.jsx)(qe,{children:i?(0,D.jsx)(A,{message:`Failed to load upload rate chart.`,onRetry:a}):r?(0,D.jsx)(v,{variant:`block`,height:`280px`}):l.length===0?(0,D.jsx)(Je,{children:`No data available for this grouping`}):(0,D.jsx)(`div`,{ref:o,children:(0,D.jsx)(_,{option:d,height:`${f}px`,minHeight:`0`,categoryScroll:!s})})})]})},He=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ue=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`,We=n.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
`,Ge=n.div`
  display: flex;
  gap: 0;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  overflow: hidden;
`,Ke=n.button`
  padding: 4px 10px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border: none;
  border-right: 1px solid ${({theme:e})=>e.colors.border.default};
  cursor: pointer;
  white-space: nowrap;
  transition: ${({theme:e})=>e.transitions.fast};

  background: ${({$active:e,theme:t})=>e?t.colors.metrics.rate[500]:t.colors.background.surface};
  color: ${({$active:e,theme:t})=>e?t.colors.text.inverse:t.colors.text.tertiary};

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: ${({$active:e,theme:t})=>e?t.colors.metrics.rate[600]:t.colors.background.hover};
  }
`,qe=n.div`
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: 16px;
  min-height: 320px;
`,Je=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,U=[{key:`sdk_version`,label:`SDK Version`,sortable:!1,render:e=>e.sdk_version||`--`},{key:`platform`,label:`Platform`,sortable:!1,render:e=>e.platform||`--`},{key:`app_version`,label:`App Version`,sortable:!1,render:e=>e.app_version||`--`},{key:`device_type`,label:`Device Type`,sortable:!1,render:e=>e.device_type||`--`},{key:`country`,label:`Country`,sortable:!1,render:e=>e.country||`--`},{key:`verified_count`,label:`Verified`,sortable:!0,sortKey:`verified_count`,align:`right`,render:e=>e.verified_count.toLocaleString()},{key:`uploaded_count`,label:`Uploaded`,sortable:!1,align:`right`,render:e=>e.uploaded_count.toLocaleString()},{key:`not_uploaded_count`,label:`Not Uploaded`,sortable:!0,sortKey:`not_uploaded_count`,align:`right`,render:e=>e.not_uploaded_count.toLocaleString()},{key:`upload_rate`,label:`Upload Rate`,sortable:!0,sortKey:`upload_rate`,align:`right`,render:e=>`${e.upload_rate.toFixed(1)}%`}],Ye=`Verified-but-not-uploaded sessions grouped by SDK version, platform, and app version. Groups with fewer than 10 verified sessions are excluded. Rows with upload rate below 20% are highlighted in red.`;function Xe(e){let t=[`SDK Version`,`Platform`,`App Version`,`Device Type`,`Country`,`Verified Count`,`Uploaded Count`,`Not Uploaded Count`,`Upload Rate (%)`],n=e.map(e=>[e.sdk_version||``,e.platform||``,e.app_version||``,e.device_type||``,e.country||``,e.verified_count,e.uploaded_count,e.not_uploaded_count,e.upload_rate]),r=[t.join(`,`),...n.map(e=>e.join(`,`))].join(`
`),i=new Blob([r],{type:`text/csv`}),a=URL.createObjectURL(i),o=document.createElement(`a`);o.href=a,o.download=`recording-loss-${new Date().toISOString().split(`T`)[0]}.csv`,o.click(),URL.revokeObjectURL(a)}var Ze=({data:e,isLoading:t,isError:n,onRetry:r,sortBy:i,sortDir:a,onSortChange:o})=>{let s=(0,b.useMemo)(()=>!e||e.rows.length===0?U:U.filter(t=>[`verified_count`,`uploaded_count`,`not_uploaded_count`,`upload_rate`].includes(t.key)?!0:e.rows.some(e=>e[t.key]!=null)),[e]),c=(0,b.useCallback)(e=>{if(!e.sortable||!e.sortKey)return;let t=i===e.sortKey&&a===`desc`?`asc`:`desc`;o(e.sortKey,t)},[i,a,o]);return(0,D.jsxs)(Qe,{children:[(0,D.jsxs)($e,{children:[(0,D.jsxs)(et,{children:[`Recording Loss Analysis`,(0,D.jsx)(k,{text:Ye})]}),e&&e.rows.length>0&&(0,D.jsx)(tt,{type:`button`,onClick:()=>Xe(e.rows),children:`Export CSV`})]}),n?(0,D.jsx)(A,{message:`Failed to load recording loss breakdown.`,onRetry:r}):(0,D.jsxs)(D.Fragment,{children:[e&&(0,D.jsxs)(nt,{children:[(0,D.jsxs)(rt,{children:[`Overall: `,(0,D.jsxs)(`strong`,{children:[e.overall_upload_rate.toFixed(1),`%`]}),` upload rate`]}),(0,D.jsxs)(rt,{children:[e.total_verified.toLocaleString(),` verified, `,e.total_uploaded.toLocaleString(),` uploaded`]})]}),(0,D.jsx)(it,{children:(0,D.jsx)(at,{children:(0,D.jsxs)(ot,{children:[(0,D.jsx)(`thead`,{children:(0,D.jsx)(`tr`,{children:s.map(e=>(0,D.jsxs)(st,{$sortable:e.sortable,$align:e.align||`left`,onClick:()=>c(e),"aria-sort":e.sortable&&e.sortKey===i?a===`asc`?`ascending`:`descending`:void 0,children:[e.label,e.sortable&&e.sortKey===i&&(0,D.jsx)(ct,{children:a===`asc`?` ↑`:` ↓`})]},e.key))})}),(0,D.jsx)(`tbody`,{children:t?Array.from({length:5}).map((e,t)=>(0,D.jsx)(`tr`,{children:s.map(e=>(0,D.jsx)(W,{$align:e.align||`left`,children:(0,D.jsx)(dt,{$delay:t*30})},e.key))},t)):!e||e.rows.length===0?(0,D.jsx)(`tr`,{children:(0,D.jsx)(W,{colSpan:s.length,$align:`left`,children:(0,D.jsx)(ut,{children:`No recording loss data available`})})}):e.rows.map((e,t)=>(0,D.jsx)(lt,{$highlight:e.upload_rate<20,children:s.map(t=>(0,D.jsx)(W,{$align:t.align||`left`,$mono:t.align===`right`,children:t.render(e)},t.key))},t))})]})})})]})]})},Qe=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$e=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,et=n.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
`,tt=n.button`
  padding: 4px 12px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  color: ${({theme:e})=>e.colors.text.secondary};
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    border-color: ${({theme:e})=>e.colors.border.strong};
  }
`,nt=n.div`
  display: flex;
  gap: 16px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,rt=n.span`
  strong {
    color: ${({theme:e})=>e.colors.text.primary};
    font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  }
`,it=n.div`
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.background.surface};
`,at=n.div`
  overflow-x: auto;
  max-height: 440px;
  overflow-y: auto;
`,ot=n.table`
  width: 100%;
  border-collapse: collapse;
`,st=n.th`
  padding: 8px 12px;
  text-align: ${({$align:e})=>e};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.secondary};
  background: ${({theme:e})=>e.colors.background.sunken};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
  white-space: nowrap;
  position: sticky;
  top: 0;
  z-index: 2;
  cursor: ${({$sortable:e})=>e?`pointer`:`default`};
  user-select: none;

  &:hover {
    background: ${({$sortable:e,theme:t})=>e?t.colors.background.hover:t.colors.background.sunken};
  }
`,ct=n.span`
  opacity: 0.7;
`,W=n.td`
  padding: 6px 12px;
  text-align: ${({$align:e})=>e||`left`};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.primary};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.subtle};
  font-family: ${({$mono:e,theme:t})=>e?t.typography.fontFamily.mono:`inherit`};
`,lt=n.tr`
  background: ${({$highlight:e,theme:t})=>e?t.colors.severity.critical.deltaBg:`transparent`};

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
  }
`,ut=n.div`
  padding: 24px;
  text-align: center;
  color: ${({theme:e})=>e.colors.text.tertiary};
`,dt=n.div`
  height: 14px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.background.sunken} 25%,
    ${({theme:e})=>e.colors.background.hover} 50%,
    ${({theme:e})=>e.colors.background.sunken} 75%
  );
  background-size: 400% 100%;
  animation: ${c} ${l} ease-in-out infinite;
  animation-delay: ${({$delay:e=0})=>e}ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: ${({theme:e})=>e.colors.background.sunken};
  }
`,ft=`Sessions uploaded to Citus (session_min) but missing from Hive. This is the final pipeline stage and typically accounts for less than 1% of sessions. A staleness buffer excludes recent sessions that may still be processing.`,pt=({data:e,isLoading:t,isError:n,onRetry:r})=>{if(n)return(0,D.jsxs)(G,{children:[(0,D.jsxs)(K,{children:[`Pipeline Loss (Citus → Hive)`,(0,D.jsx)(k,{text:ft})]}),(0,D.jsx)(A,{message:`Failed to load pipeline loss data.`,onRetry:r})]});if(t)return(0,D.jsxs)(G,{children:[(0,D.jsx)(K,{children:`Pipeline Loss (Citus → Hive)`}),(0,D.jsx)(v,{variant:`card`,height:`100px`})]});if(!e)return null;let i=T(e.severity);return(0,D.jsxs)(G,{children:[(0,D.jsxs)(K,{children:[`Pipeline Loss (Citus → Hive)`,(0,D.jsx)(k,{text:ft})]}),(0,D.jsxs)(mt,{children:[(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{children:`Lost sessions:`}),(0,D.jsx)(ht,{children:e.loss_count.toLocaleString()})]}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{children:`Loss rate:`}),(0,D.jsxs)(ht,{children:[e.loss_rate.toFixed(2),`%`]})]}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{children:`Severity:`}),(0,D.jsx)(gt,{$color:i,children:E(e.severity)})]}),(0,D.jsxs)(_t,{children:[`Excludes sessions from the last `,e.staleness_buffer_hours,` hours (may still be processing).`]}),e.loss_count===0&&(0,D.jsx)(vt,{children:`No pipeline losses detected.`})]})]})},G=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,K=n.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
`,mt=n.div`
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,q=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,J=n.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,ht=n.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  color: ${({theme:e})=>e.colors.text.primary};
`,gt=n.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({$color:e})=>e};
  background: ${({$color:e})=>`${e}15`};
  border: 1px solid ${({$color:e})=>`${e}30`};
`,_t=n.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-style: italic;
  margin-top: 4px;
`,vt=n.div`
  padding: 8px 12px;
  background: ${({theme:e})=>e.colors.severity.good.bg};
  border: 1px solid ${({theme:e})=>e.colors.severity.good.border};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  color: ${({theme:e})=>e.colors.severity.good.text};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  margin-top: 4px;
`,yt=`Individual sessions from sessionverify that never appeared in Hive. Excludes sessions from the last 48 hours (may still be uploading). Use filters to narrow by platform, SDK version, or country.`;function bt(e){if(!e)return`--`;try{return new Date(e).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}catch{return e}}function xt({text:e}){let[t,n]=(0,b.useState)(!1);return(0,D.jsx)(Lt,{type:`button`,onClick:(0,b.useCallback)(async()=>{try{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),2e3)}catch{let t=document.createElement(`textarea`);t.value=e,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t),n(!0),setTimeout(()=>n(!1),2e3)}},[e]),title:`Copy Session ID`,children:t?`Copied`:`Copy`})}var Y=[{key:`session_id`,label:`Session ID`,sortable:!1,render:e=>(0,D.jsxs)(Ft,{children:[(0,D.jsxs)(It,{title:e.session_id,children:[e.session_id.slice(0,12),`...`]}),(0,D.jsx)(xt,{text:e.session_id})]})},{key:`verified_at`,label:`Verified At`,sortable:!0,render:e=>bt(e.verified_at)},{key:`sdk_version`,label:`SDK Version`,sortable:!0,render:e=>e.sdk_version||`--`},{key:`app_version`,label:`App Version`,sortable:!0,render:e=>e.app_version||`--`},{key:`platform`,label:`Platform`,sortable:!1,render:e=>e.platform||`--`},{key:`device_type`,label:`Device`,sortable:!1,render:e=>e.device_type||`--`},{key:`device_model`,label:`Model`,sortable:!1,render:e=>e.device_model||`--`},{key:`os_version`,label:`OS`,sortable:!1,render:e=>e.os_version||`--`},{key:`country`,label:`Country`,sortable:!0,render:e=>e.country||`--`},{key:`city`,label:`City`,sortable:!1,render:e=>e.city||`--`},{key:`response_time_ms`,label:`Resp. Time`,sortable:!1,render:e=>e.response_time_ms===null?`--`:`${e.response_time_ms.toFixed(0)}ms`}];function St(e){let t=[`Session ID`,`Verified At`,`SDK Version`,`App Version`,`Platform`,`Device Type`,`Device Model`,`OS Version`,`Country`,`City`,`Response Time (ms)`],n=e.map(e=>[e.session_id,e.verified_at||``,e.sdk_version||``,e.app_version||``,e.platform||``,e.device_type||``,e.device_model||``,e.os_version||``,e.country||``,e.city||``,e.response_time_ms?.toFixed(0)||``]),r=[t.join(`,`),...n.map(e=>e.map(e=>`"${e}"`).join(`,`))].join(`
`),i=new Blob([r],{type:`text/csv`}),a=URL.createObjectURL(i),o=document.createElement(`a`);o.href=a,o.download=`not-uploaded-sessions-${new Date().toISOString().split(`T`)[0]}.csv`,o.click(),URL.revokeObjectURL(a)}var Ct=({sessions:e,pagination:t,isLoading:n,isError:r,onRetry:i,filters:a,onFiltersChange:o,page:s,onPageChange:c,sortBy:l,sortDir:u,onSortChange:d})=>{let f=(0,b.useCallback)((e,t)=>{o({...a,[e]:t||void 0}),c(1)},[a,o,c]),p=(0,b.useCallback)(e=>{if(!e.sortable)return;let t=l===e.key&&u===`desc`?`asc`:`desc`;d(e.key,t)},[l,u,d]);return(0,D.jsxs)(wt,{children:[(0,D.jsxs)(Tt,{children:[(0,D.jsxs)(Et,{children:[`Verified-Not-Uploaded Sessions`,(0,D.jsx)(k,{text:yt})]}),e&&e.length>0&&(0,D.jsx)(Dt,{type:`button`,onClick:()=>St(e),children:`Export CSV`})]}),r?(0,D.jsx)(A,{message:`Failed to load not-uploaded sessions.`,onRetry:i}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(Ot,{role:`search`,"aria-label":`Session filters`,children:[(0,D.jsxs)(kt,{value:a.platform||``,onChange:e=>f(`platform`,e.target.value),"aria-label":`Platform filter`,children:[(0,D.jsx)(`option`,{value:``,children:`All Platforms`}),(0,D.jsx)(`option`,{value:`1`,children:`Android`}),(0,D.jsx)(`option`,{value:`2`,children:`iOS`})]}),(0,D.jsx)(X,{placeholder:`SDK Version`,value:a.sdk_version||``,onChange:e=>f(`sdk_version`,e.target.value),"aria-label":`SDK version filter`}),(0,D.jsx)(X,{placeholder:`App Version`,value:a.app_version||``,onChange:e=>f(`app_version`,e.target.value),"aria-label":`App version filter`}),(0,D.jsx)(X,{placeholder:`Device Type`,value:a.device_type||``,onChange:e=>f(`device_type`,e.target.value),"aria-label":`Device type filter`}),(0,D.jsx)(X,{placeholder:`Country`,value:a.country||``,onChange:e=>f(`country`,e.target.value),"aria-label":`Country filter`})]}),(0,D.jsxs)(At,{children:[(0,D.jsx)(jt,{children:(0,D.jsxs)(Mt,{children:[(0,D.jsx)(`thead`,{children:(0,D.jsx)(`tr`,{children:Y.map(e=>(0,D.jsxs)(Nt,{$sortable:e.sortable,onClick:()=>p(e),"aria-sort":e.sortable&&l===e.key?u===`asc`?`ascending`:`descending`:void 0,children:[e.label,e.sortable&&l===e.key&&(0,D.jsx)(Pt,{children:u===`asc`?` ↑`:` ↓`})]},e.key))})}),(0,D.jsx)(`tbody`,{children:n?Array.from({length:8}).map((e,t)=>(0,D.jsx)(`tr`,{role:`status`,"aria-label":`Loading row`,children:Y.map(e=>(0,D.jsx)(Z,{children:(0,D.jsx)(Ut,{$delay:t*25})},e.key))},t)):!e||e.length===0?(0,D.jsx)(`tr`,{children:(0,D.jsx)(Z,{colSpan:Y.length,children:(0,D.jsx)(Vt,{children:`No not-uploaded sessions found for the selected filters.`})})}):e.map(e=>(0,D.jsx)(`tr`,{children:Y.map(t=>(0,D.jsx)(Z,{children:t.render(e)},t.key))},e.session_id))})]})}),t&&(0,D.jsxs)(Rt,{children:[(0,D.jsx)(zt,{type:`button`,disabled:s<=1,onClick:()=>c(s-1),children:`Previous`}),(0,D.jsxs)(Bt,{children:[`Page `,s]}),(0,D.jsx)(zt,{type:`button`,disabled:!t.has_next,onClick:()=>c(s+1),children:`Next`})]})]}),(0,D.jsx)(Ht,{children:`Excludes sessions from the last 48 hours (may still be uploading).`})]})]})},wt=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Tt=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Et=n.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
`,Dt=n.button`
  padding: 4px 12px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  color: ${({theme:e})=>e.colors.text.secondary};
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
  }
`,Ot=n.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,kt=n.select`
  padding: 6px 8px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.border.focus};
  }
`,X=n.input`
  padding: 6px 8px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  width: 120px;

  &::placeholder {
    color: ${({theme:e})=>e.colors.text.tertiary};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.border.focus};
  }
`,At=n.div`
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.background.surface};
`,jt=n.div`
  overflow-x: auto;
  max-height: 480px;
  overflow-y: auto;
`,Mt=n.table`
  width: 100%;
  border-collapse: collapse;
`,Nt=n.th`
  padding: 8px 10px;
  text-align: left;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.secondary};
  background: ${({theme:e})=>e.colors.background.sunken};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
  white-space: nowrap;
  position: sticky;
  top: 0;
  z-index: 2;
  cursor: ${({$sortable:e})=>e?`pointer`:`default`};
  user-select: none;

  &:hover {
    background: ${({$sortable:e,theme:t})=>e?t.colors.background.hover:t.colors.background.sunken};
  }
`,Pt=n.span`
  opacity: 0.7;
`,Z=n.td`
  padding: 6px 10px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.primary};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.subtle};
  white-space: nowrap;
`,Ft=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,It=n.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.secondary};
`,Lt=n.button`
  padding: 1px 6px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.tertiary};
  cursor: pointer;
  white-space: nowrap;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.border.strong};
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,Rt=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 8px 12px;
  border-top: 1px solid ${({theme:e})=>e.colors.border.default};
  background: ${({theme:e})=>e.colors.background.sunken};
`,zt=n.button`
  padding: 4px 12px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.secondary};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({theme:e})=>e.colors.background.hover};
  }
`,Bt=n.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
`,Vt=n.div`
  padding: 24px;
  text-align: center;
  color: ${({theme:e})=>e.colors.text.tertiary};
`,Ht=n.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-style: italic;
`,Ut=n.div`
  height: 14px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.background.sunken} 25%,
    ${({theme:e})=>e.colors.background.hover} 50%,
    ${({theme:e})=>e.colors.background.sunken} 75%
  );
  background-size: 400% 100%;
  animation: ${c} ${l} ease-in-out infinite;
  animation-delay: ${({$delay:e=0})=>e}ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: ${({theme:e})=>e.colors.background.sunken};
  }
`;function Q(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))r!=null&&r!==``&&t.set(n,String(r));return t.toString()}async function Wt(e,t,n){let r=Q({from_date:t,to_date:n}),i=await o(`/api/apps/${encodeURIComponent(e)}/debug/pipeline-summary?${r}`);if(!i.ok)throw Error(`Failed to fetch pipeline summary: ${i.status}`);return i.json()}async function Gt(e,t,n,r,i){let a=Q({from_date:t,to_date:n,group_by:r,platform:i}),s=await o(`/api/apps/${encodeURIComponent(e)}/debug/upload-rate?${a}`);if(!s.ok)throw Error(`Failed to fetch upload rate: ${s.status}`);return s.json()}async function Kt(e,t,n,r,i,a,s,c){let l=Q({from_date:t,to_date:n,group_by:r,sort_by:i,sort_dir:a,min_sessions:s,limit:c}),u=await o(`/api/apps/${encodeURIComponent(e)}/debug/recording-loss?${l}`);if(!u.ok)throw Error(`Failed to fetch recording loss: ${u.status}`);return u.json()}async function qt(e,t,n,r,i,a,s,c){let l=Q({from_date:t,to_date:n,page:r,per_page:i,platform:a.platform,sdk_version:a.sdk_version,app_version:a.app_version,device_type:a.device_type,country:a.country,sort_by:s,sort_dir:c}),u=await o(`/api/apps/${encodeURIComponent(e)}/debug/not-uploaded-sessions?${l}`);if(!u.ok)throw Error(`Failed to fetch not-uploaded sessions: ${u.status}`);return u.json()}async function Jt(e,t,n){let r=Q({from_date:t,to_date:n}),i=await o(`/api/apps/${encodeURIComponent(e)}/debug/pipeline-loss?${r}`);if(!i.ok)throw Error(`Failed to fetch pipeline loss: ${i.status}`);return i.json()}function Yt(e,t,n){return i({queryKey:[`debug`,`pipeline-summary`,e,t,n],queryFn:()=>Wt(e,t,n),enabled:!!e})}function Xt(e,t,n,a,o){return i({queryKey:[`debug`,`upload-rate`,e,t,n,a,o],queryFn:()=>Gt(e,t,n,a,o),enabled:!!e,placeholderData:r})}function Zt(e,t,n,a,o,s,c,l){return i({queryKey:[`debug`,`recording-loss`,e,t,n,a,o,s,c,l],queryFn:()=>Kt(e,t,n,a,o,s,c??10,l??100),enabled:!!e,placeholderData:r})}function Qt(e,t,n,a,o,s,c,l){return i({queryKey:[`debug`,`not-uploaded`,e,t,n,a,o,s,c,l],queryFn:()=>qt(e,t,n,a,o,s,c,l),enabled:!!e,placeholderData:r})}function $t(e,t,n){return i({queryKey:[`debug`,`pipeline-loss`,e,t,n],queryFn:()=>Jt(e,t,n),enabled:!!e})}function en(e){let t=e.get(`range`);return t===`7d`||t===`14d`||t===`30d`||t===`60d`||t===`90d`?t:`30d`}function tn(e){let t=e.get(`platform`);return t===`ios`||t===`android`?t:`all`}function nn(e){let t=e.get(`group_by`);return t===`day`||t===`week`||t===`app_version`||t===`sdk_version`||t===`device_type`||t===`country`?t:`day`}function rn(e){let t=e.get(`sort_by`),n=e.get(`sort_dir`);return{sortBy:t===`not_uploaded_count`||t===`upload_rate`||t===`verified_count`?t:`not_uploaded_count`,sortDir:n===`asc`?`asc`:`desc`}}function an(e){let t=e.get(`s_page`);return t?Math.max(1,parseInt(t,10)):1}function on(e){let t=e.get(`s_sort`),n=e.get(`s_dir`);return{sortBy:t||`verified_at`,sortDir:n===`asc`?`asc`:`desc`}}function sn(e){return{platform:e.get(`f_platform`)||void 0,sdk_version:e.get(`f_sdk`)||void 0,app_version:e.get(`f_app_ver`)||void 0,device_type:e.get(`f_device`)||void 0,country:e.get(`f_country`)||void 0}}var cn=()=>{let{selectedAppId:e}=s(),[t,n]=ee(),r=en(t),i=nn(t),a=tn(t),{sortBy:o,sortDir:c}=rn(t),l=an(t),{sortBy:u,sortDir:d}=on(t),f=sn(t),p=(0,b.useMemo)(()=>re(r),[r]),m=e||null,h=Yt(m,p.from_date,p.to_date),g=Xt(m,p.from_date,p.to_date,i,a===`all`?void 0:a),_=Zt(m,p.from_date,p.to_date,`sdk_version,platform,app_version`,o,c),v=Qt(m,p.from_date,p.to_date,l,50,f,u,d),y=$t(m,p.from_date,p.to_date),ne=(0,b.useCallback)(e=>{n({range:e,platform:a===`all`?void 0:a})},[n,a]),S=(0,b.useCallback)(e=>{n({range:r,group_by:i,platform:e===`all`?void 0:e})},[n,r,i]),C=(0,b.useCallback)(e=>{n({range:r,group_by:e,sort_by:o,sort_dir:c})},[n,r,o,c]),w=(0,b.useCallback)((e,t)=>{n({range:r,group_by:i,sort_by:e,sort_dir:t})},[n,r,i]),T=(0,b.useCallback)(e=>{n({range:r,group_by:i,sort_by:o,sort_dir:c,s_page:String(e),s_sort:u,s_dir:d,...$(f)})},[n,r,i,o,c,u,d,f]),E=(0,b.useCallback)((e,t)=>{n({range:r,group_by:i,sort_by:o,sort_dir:c,s_page:`1`,s_sort:e,s_dir:t,...$(f)})},[n,r,i,o,c,f]),ie=(0,b.useCallback)(e=>{n({range:r,group_by:i,sort_by:o,sort_dir:c,s_page:`1`,s_sort:u,s_dir:d,...$(e)})},[n,r,i,o,c,u,d]),O=h.isError&&g.isError;return(0,D.jsx)(te,{children:(0,D.jsxs)(ln,{children:[(0,D.jsxs)(un,{children:[(0,D.jsxs)(dn,{children:[(0,D.jsxs)(fn,{children:[(0,D.jsx)(pn,{children:`Session Pipeline Health`}),h.data?.framework&&(0,D.jsx)(mn,{children:h.data.framework.framework})]}),(0,D.jsxs)(hn,{children:[(0,D.jsx)(gn,{role:`group`,"aria-label":`Platform filter`,children:[`all`,`ios`,`android`].map(e=>(0,D.jsx)(_n,{$active:a===e,onClick:()=>S(e),type:`button`,children:e===`all`?`All`:e===`ios`?`iOS`:`Android`},e))}),(0,D.jsx)(ae,{value:r,onChange:ne})]})]}),m&&(0,D.jsxs)(vn,{children:[(0,D.jsxs)(yn,{children:[`App: `,m]}),h.data?.platform_rates&&h.data.platform_rates.length>0&&(0,D.jsxs)(bn,{children:[(0,D.jsxs)(xn,{$severity:h.data.kpi.recording_rate_severity,children:[`Overall: `,(0,D.jsxs)(`strong`,{children:[h.data.kpi.recording_rate.toFixed(1),`%`]})]}),h.data.platform_rates.map(e=>(0,D.jsxs)(xn,{$severity:e.recording_rate>50?`typical`:e.recording_rate>30?`below_average`:`critical`,children:[e.platform,`: `,(0,D.jsxs)(`strong`,{children:[e.recording_rate.toFixed(1),`%`]}),(0,D.jsxs)(`small`,{children:[`(`,x(e.uploaded),`/`,x(e.verified_unique),`)`]})]},e.platform))]})]}),!m&&(0,D.jsx)(Sn,{children:`Select an app to view pipeline debug data.`})]}),O&&(0,D.jsxs)(wn,{children:[(0,D.jsx)(Tn,{children:`Failed to load pipeline data. This page requires admin access.`}),(0,D.jsx)(En,{type:`button`,onClick:()=>{h.refetch(),g.refetch(),_.refetch(),v.refetch(),y.refetch()},children:`Retry All`})]}),m&&!O&&(0,D.jsxs)(Cn,{children:[(0,D.jsx)(_e,{data:h.data,isLoading:h.isLoading,isError:h.isError,onRetry:()=>h.refetch()}),(0,D.jsx)(xe,{proportions:h.data?.settings_loss_proportions||[],isLoading:h.isLoading,isError:h.isError,onRetry:()=>h.refetch()}),(0,D.jsx)(Ve,{data:g.data?.data,groupBy:i,onGroupByChange:C,isLoading:g.isLoading,isError:g.isError,onRetry:()=>g.refetch()}),(0,D.jsx)(Ze,{data:_.data?{rows:_.data.rows,total_verified:_.data.total_verified,total_uploaded:_.data.total_uploaded,overall_upload_rate:_.data.overall_upload_rate}:void 0,isLoading:_.isLoading,isError:_.isError,onRetry:()=>_.refetch(),sortBy:o,sortDir:c,onSortChange:w}),(0,D.jsx)(pt,{data:y.data,isLoading:y.isLoading,isError:y.isError,onRetry:()=>y.refetch()}),(0,D.jsx)(Ct,{sessions:v.data?.sessions,pagination:v.data?.pagination,isLoading:v.isLoading,isError:v.isError,onRetry:()=>v.refetch(),filters:f,onFiltersChange:ie,page:l,onPageChange:T,sortBy:u,sortDir:d,onSortChange:E})]})]})})};function $(e){return{f_platform:e.platform,f_sdk:e.sdk_version,f_app_ver:e.app_version,f_device:e.device_type,f_country:e.country}}var ln=n.div`
  height: 100%;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 0;
`,un=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`,dn=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`,fn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,pn=n.h1`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`,mn=n.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: ${({theme:e})=>e.colors.uxcam.indigo[100]};
  color: ${({theme:e})=>e.colors.uxcam.indigo[700]};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,hn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,gn=n.div`
  display: flex;
  gap: 0;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  overflow: hidden;
`,_n=n.button`
  padding: 4px 12px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border: none;
  border-right: 1px solid ${({theme:e})=>e.colors.border.default};
  cursor: pointer;
  white-space: nowrap;
  transition: ${({theme:e})=>e.transitions.fast};

  background: ${({$active:e,theme:t})=>e?t.colors.uxcam.indigo[600]:t.colors.background.surface};
  color: ${({$active:e,theme:t})=>e?t.colors.text.inverse:t.colors.text.tertiary};

  &:last-child { border-right: none; }
  &:hover {
    background: ${({$active:e,theme:t})=>e?t.colors.uxcam.indigo[700]:t.colors.background.hover};
  }
`,vn=n.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`,yn=n.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
`,bn=n.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,xn=n.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  padding: 2px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  border: 1px solid ${({$severity:e,theme:t})=>e===`typical`?t.colors.severity.good.border:e===`below_average`?t.colors.severity.warning.border:t.colors.severity.critical.border};
  background: ${({$severity:e,theme:t})=>e===`typical`?t.colors.severity.good.bg:e===`below_average`?t.colors.severity.warning.bg:t.colors.severity.critical.bg};
  color: ${({$severity:e,theme:t})=>e===`typical`?t.colors.severity.good.text:e===`below_average`?t.colors.severity.warning.text:t.colors.severity.critical.text};

  strong {
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  }

  small {
    opacity: 0.7;
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
  }
`,Sn=n.div`
  padding: 40px;
  text-align: center;
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
`,Cn=n.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,wn=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: ${({theme:e})=>e.colors.severity.critical.bg};
  border: 1px solid ${({theme:e})=>e.colors.severity.critical.border};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  margin-bottom: 16px;
`,Tn=n.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.severity.critical.text};
`,En=n.button`
  padding: 4px 12px;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border: 1px solid ${({theme:e})=>e.colors.severity.critical.border};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: transparent;
  color: ${({theme:e})=>e.colors.severity.critical.text};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.severity.critical.border};
    color: white;
  }
`;export{cn as AdminDebugPage};