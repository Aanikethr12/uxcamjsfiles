import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import"./ds-BJhQ4zht.js";import{D as n}from"./ui-vendor-CUROeZIN.js";import{O as r}from"./markdown-vendor-BoH6QLuc.js";import{r as i}from"./AppContext-Dsu2Mbed.js";import{c as a,i as o,o as s,r as c,s as l,t as u,u as d}from"./Dialog-BFakgPRd.js";import{n as f,t as p}from"./dashboardFiltersStorage-0Zq2zs4I.js";var m=e(t(),1),h=r(),g=n.div`
  padding: 20px 0;
`,_=n.div`
  background: ${({theme:e})=>e.colors.background.muted};
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,v=n.h4`
  margin: 0 0 ${({theme:e})=>e.spacing[2]} 0;
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,y=n.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,b=n.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,x=n.label`
  display: block;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;n.select`
  width: 100%;
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-family: inherit;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  background: ${({theme:e})=>e.colors.background.primary};

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary[500]};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary[100]};
  }
`,n.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-family: inherit;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary[500]};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary[100]};
  }
`;var S=n.small`
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  display: block;
  margin-top: ${({theme:e})=>e.spacing[1]};
`,C=n.textarea`
  width: 100%;
  min-height: 300px;
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  line-height: 1.5;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary[500]};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary[100]};
  }

  &.error {
    border-color: ${({theme:e})=>e.colors.error||`#ef4444`};
  }
`,w=n.div`
  color: ${({theme:e})=>e.colors.error||`#ef4444`};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  margin-top: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.colors.error?`${e.colors.error}10`:`#fef2f2`};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
`,T=n.div`
  color: ${({theme:e})=>e.colors.success||`#10b981`};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  margin-top: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.colors.success?`${e.colors.success}10`:`#f0fdf4`};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
`,E=n.fieldset`
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,D=n.legend`
  padding: 0 ${({theme:e})=>e.spacing[2]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;n.div`
  display: grid;
  grid-template-columns: repeat(${({$columns:e=2})=>e}, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};
`;var O=n.div`
  background: ${({theme:e})=>e.colors.background.muted};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing[4]};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  max-height: 200px;
  overflow: auto;
  white-space: pre-wrap;
`,k=n.button`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  transition: ${({theme:e})=>e.transitions.default};
  margin-top: ${({theme:e})=>e.spacing[2]};

  ${({theme:e,$variant:t=`secondary`})=>t===`primary`?`
        background: ${e.colors.primary[500]};
        color: white;
        border-color: ${e.colors.primary[500]};
        
        &:hover:not(:disabled) {
          background: ${e.colors.primary[600]};
          border-color: ${e.colors.primary[600]};
        }
      `:`
        background: ${e.colors.background.primary};
        color: ${e.colors.text.secondary};
        
        &:hover:not(:disabled) {
          background: ${e.colors.background.hover};
        }
      `}
`;function A(e){try{return JSON.parse(e)}catch{return JSON.parse(e.replace(/'/g,`"`))}}var j=`{
  "session_list": {
    "filters": [
      {
        "attribute": "device_platform",
        "operator": "equal",
        "value": "1",
        "table": "session"
      }
    ],
    "date_range": {
      "attribute": "device_time",
      "operator": "between_dates",
      "value": {
        "lower": "2025-09-29T12:49:56.027Z",
        "upper": "2025-10-29T12:49:56.027Z"
      },
      "tz": "America/Sao_Paulo",
      "labelId": "absolute_last30d",
      "table": "session"
    }
  },
  "stats": {
    "sessions_analyzed_by_ai": 0,
    "total_sessions": 317
  }
}`,M=({isOpen:e,onClose:t,appId:n})=>{let{contextConfig:r,updateContextConfig:M}=i(),[N,P]=(0,m.useState)(``),[F,I]=(0,m.useState)(``),[L,R]=(0,m.useState)(``);(0,m.useEffect)(()=>{if(e){if(n){let e=p(n);if(e)try{let t=JSON.parse(e);P(JSON.stringify(t,null,2)),M({dashboardFilters:e});return}catch(e){console.error(`[ContextModal] Failed to parse saved filters from local storage:`,e)}}if(r.dashboardFilters)try{let e=JSON.parse(r.dashboardFilters);P(JSON.stringify(e,null,2))}catch{P(r.dashboardFilters)}else P(j)}},[e,n,r.dashboardFilters,M]);let z=e=>{P(e),I(``),R(``)},B=()=>{P(j),M({dashboardFilters:``}),I(``),R(`Filters reset to default example`)},V=()=>{let e={},t={};r.session_id&&r.session_id.trim()&&(t.session_detail={session_id:r.session_id});let n={};r.totalSessions&&r.totalSessions>0&&(n.total_sessions=r.totalSessions),r.users&&r.users>0&&(n.users=r.users),r.newUsers&&r.newUsers>0&&(n.new_users=r.newUsers),r.crashes&&r.crashes>0&&(n.crashes=r.crashes),r.rageTaps&&r.rageTaps>0&&(n.rage_taps=r.rageTaps),r.avgDuration&&r.avgDuration>0&&(n.avg_duration=r.avgDuration),Object.keys(n).length>0&&(t.stats=n);let i={};if(r.dateFrom&&r.dateFrom.trim()&&(i.date_from=r.dateFrom),r.dateTo&&r.dateTo.trim()&&(i.date_to=r.dateTo),r.timezone&&r.timezone!==`UTC`&&(i.timezone=r.timezone),r.page&&r.page!==1&&(i.page=r.page),r.sessionsPerPage&&r.sessionsPerPage!==50&&(i.sessions_per_page=r.sessionsPerPage),r.labelId&&r.labelId.trim()&&(i.label_id=r.labelId),Object.keys(i).length>0&&(t.session_list=i),r.dashboardFilters)try{t.dashboard_filters=JSON.parse(r.dashboardFilters)}catch{}return Object.keys(t).length>0&&(e.dashboard_context=t),Object.keys(e).length===0?`No context configured`:JSON.stringify(e,null,2)},H=e=>n&&e.includes(`{{app_id}}`)?e.replace(/\{\{app_id\}\}/g,n):e;return(0,h.jsx)(u,{open:e,onOpenChange:e=>{e||t()},children:(0,h.jsxs)(o,{style:{maxWidth:800},children:[(0,h.jsx)(l,{children:(0,h.jsx)(a,{children:`Advanced: Adjust message context`})}),(0,h.jsxs)(g,{children:[(0,h.jsxs)(_,{children:[(0,h.jsx)(v,{children:`💡 Session-Based Analysis`}),(0,h.jsx)(y,{children:`Message context is passed at every message sent by the user. You can adjust the session ID and dashboard filters. The AI model is configured in settings.yaml and cannot be changed from the UI.`})]}),(0,h.jsxs)(E,{children:[(0,h.jsx)(D,{children:`🎛️ Dashboard Filters (Frontend Format)`}),(0,h.jsxs)(b,{children:[(0,h.jsx)(x,{children:`Filter JSON`}),(0,h.jsx)(C,{value:N,onChange:e=>z(e.target.value),className:F?`error`:``,placeholder:`Enter dashboard filters in frontend format...`}),(0,h.jsx)(S,{children:`Edit the dashboard context JSON in the verbose frontend format. This will be transformed internally and passed with every query.`})]}),F&&(0,h.jsx)(w,{children:F}),L&&(0,h.jsx)(T,{children:L}),(0,h.jsx)(`div`,{style:{display:`flex`,gap:`8px`,marginTop:`12px`},children:(0,h.jsx)(k,{$variant:`secondary`,onClick:B,children:`Reset to Example`})})]}),(0,h.jsxs)(b,{children:[(0,h.jsx)(x,{children:`📄 Generated Context Preview`}),(0,h.jsx)(O,{children:V()})]})]}),(0,h.jsxs)(s,{children:[(0,h.jsx)(c,{asChild:!0,children:(0,h.jsx)(d,{variant:`outline`,onClick:t,children:`Cancel`})}),(0,h.jsx)(d,{onClick:()=>{try{let e=A(H(N));if(typeof e!=`object`||!e){I(`Invalid JSON: Root must be an object`);return}let r=JSON.stringify(e);M({dashboardFilters:r}),n&&f(n,r),R(`Filters saved successfully!`),I(``),setTimeout(()=>{t()},500)}catch(e){I(`JSON Error: ${e.message}`),R(``)}},children:`OK`})]})]})})};export{M as ContextModal};