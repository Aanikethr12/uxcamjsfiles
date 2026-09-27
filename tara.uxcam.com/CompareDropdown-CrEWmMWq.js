import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import{_t as n}from"./radix-vendor-DlJdQz7_.js";import{D as r}from"./ui-vendor-CUROeZIN.js";import{O as i}from"./markdown-vendor-BoH6QLuc.js";import{p as a}from"./contextMetaFormatters-DsqiyKzC.js";import{r as o}from"./screensApi-BuY1FY0t.js";var s=e(t(),1),c=e(n(),1),l=864e5;function u(e){if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})/.exec(e);if(!t)return null;let n=Date.UTC(Number(t[1]),Number(t[2])-1,Number(t[3]));return Number.isNaN(n)?null:n}function ee(e){return new Date(e).toISOString().slice(0,10)}function d(e){let{target:t,baseline:n,targetInWindow:r,baselineInWindow:i,dateFrom:a,dateTo:o}=e;if(r==null||i==null)return null;let s=u(a),c=u(o);if(s==null||c==null)return null;let d=[{detail:t,inWindow:r},{detail:n,inWindow:i}],[f,p]=d[0].inWindow<=d[1].inWindow?d:[d[1],d[0]];if((p.inWindow+1)/(f.inWindow+1)<10)return null;let m=f.detail.session_count;if(m==null||m<Math.max(1e3,f.inWindow*10))return null;let te=u(f.detail.first_seen_date);if(te==null)return null;let h=c-365*l,g=Math.max(te,h);return g>=s?null:{starvedVersion:f.detail.version,starvedInWindow:f.inWindow,starvedLifetime:m,from:ee(g),to:o}}var f=i(),p=864e5,m=[{value:`android`,label:`Android`},{value:`ios`,label:`iOS`}];function te(e,t){let n=new Date(e),r=new Date(t);return Math.max(1,Math.round((r.getTime()-n.getTime())/p)+1)}function h(e){if(!e)return null;let t=new Date(e).getTime();return Number.isNaN(t)?null:t}function g(e){let t=e%100;if(t>=11&&t<=13)return`th`;switch(e%10){case 1:return`st`;case 2:return`nd`;case 3:return`rd`;default:return`th`}}function _(e){let t=/^(\d{4})-(\d{2})-(\d{2})/.exec(e);if(t){let[,e,n,r]=t;return new Date(Number(e),Number(n)-1,Number(r))}let n=new Date(e);return Number.isNaN(n.getTime())?null:n}function v(e){if(!e)return null;let t=_(e);if(!t)return e;let n=t.toLocaleDateString(`en-US`,{month:`short`}),r=t.getDate();return`${n} ${r}${g(r)}`}function ne(e){let t=_(e);return t?`${t.toLocaleDateString(`en-US`,{month:`short`})} ${t.getDate()}`:e}function y(e){return e.map((e,t)=>({item:e,index:t})).sort((e,t)=>{let n=h(e.item.first_seen_date),r=h(t.item.first_seen_date);return n!=null&&r!=null&&n!==r?r-n:n!=null&&r==null?-1:n==null&&r!=null?1:e.index-t.index}).map(({item:e})=>e)}function re(e,t){let n=e.session_count==null?`Session volume unavailable`:`${a(e.session_count).toLowerCase()} ${e.session_count===1?`session`:`sessions`}`,r=t==null?n:`${a(t).toLowerCase()} in range · ${a(e.session_count??0).toLowerCase()} total`,i=v(e.first_seen_date);return i?`${r} - first seen ${i}`:r}function ie(e){return e===`android`||e===`ios`?e:null}function b(e,t){let n=e.filter(e=>e.platform==null);if(!t)return y(n.length>0?n:e);let r=e.filter(e=>e.platform===t);return r.length>0?y(r):y(n.length>0?n:e)}function ae(e){return`${e} version${e===1?``:`s`}`}function oe(e,t,n){if(e.compareBy===`time`)return`Previous ${t}d`;let r=e.scopeVersions.length>0?e.scopeVersions:e.versionA?[e.versionA]:[],i=e.baselineVersions.length>0?e.baselineVersions:e.versionB?[e.versionB]:[],a=r[0]??e.versionA??`Version`,o=i.length>1&&n.length>0&&i.length>=n.length-r.length;return e.compareMode===`previous_major`?`latest major vs prev major`:e.compareMode===`exact_versions`&&e.versionA&&e.versionB?`${e.versionA} vs ${e.versionB}`:o?r.length>1?`latest major vs rest`:`${a} vs rest`:i.length>0?`${a} vs ${i[0]}`:`${a} vs rest`}var x=({value:e,currentPlatform:t,dateFrom:n,dateTo:r,versionOptions:i,onChange:l,disabled:u=!1,disabledReason:ee,triggerPrefix:p=`Compare:`,autoOpenKey:h,appId:g=null})=>{let _=(0,s.useRef)(null),v=(0,s.useRef)(null),y=(0,s.useRef)(h),[x,M]=(0,s.useState)(!1),[N,P]=(0,s.useState)(`root`),[De,Oe]=(0,s.useState)({top:0,left:0}),[F,I]=(0,s.useState)(``),[L,R]=(0,s.useState)(``),[z,B]=(0,s.useState)(null),[V,H]=(0,s.useState)(`rest`),[U,W]=(0,s.useState)(null),[G,ke]=(0,s.useState)(`android`),Ae=(0,s.useMemo)(()=>te(n,r),[n,r]),K=o(x&&g?g:null,n,r),je=(0,s.useMemo)(()=>{let e=new Map;for(let t of K.data?.versions??[])e.set(`${t.platform??`all`}:${t.version}`,t.session_count);return e},[K.data?.versions]),q=(0,s.useCallback)(e=>{if(K.data)return je.get(`${e.platform??`all`}:${e.version}`)??0},[K.data,je]),J=t===`all`,Me=J?G:ie(t),Y=(0,s.useMemo)(()=>b(i,Me),[Me,i]),X=(0,s.useMemo)(()=>new Map(m.map(e=>[e.value,b(i,e.value).length])),[i]),Ne=(0,s.useMemo)(()=>Y.map(e=>e.version).filter(Boolean),[Y]),Z=J?m.some(e=>(X.get(e.value)??0)>=2):Ne.length>=2,Pe=(0,s.useMemo)(()=>oe(e,Ae,Y),[Ae,Y,e]),Q=(0,s.useCallback)(()=>{let n=ie(t)??`android`,r=b(i,n).map(e=>e.version).filter(Boolean),a=e.scopeVersions.length>0?e.scopeVersions:e.versionA?[e.versionA]:[],o=e.baselineVersions.length>0?e.baselineVersions:e.versionB?[e.versionB]:[],s=a.find(e=>r.includes(e))??r[0]??null,c=e.versionB&&e.versionB!==s&&r.includes(e.versionB)?e.versionB:o.find(e=>e!==s&&r.includes(e))??r.find(e=>e!==s)??null;B(s),H(e.compareMode===`exact_versions`&&(e.versionB??o[0])?`specific`:`rest`),W(c),ke(n),I(``),R(``),P(`root`)},[t,e,i]),Fe=(0,s.useCallback)(e=>{let t=b(i,e).map(e=>e.version).filter(Boolean),n=t[0]??null;ke(e),B(n),W(t.find(e=>e!==n)??null),I(``),R(``)},[i]),Ie=(0,s.useCallback)(()=>{if(!_.current)return;let e=_.current.getBoundingClientRect(),t=e.left;t+360>window.innerWidth-12&&(t=Math.max(12,window.innerWidth-360-12)),Oe({top:e.bottom+4,left:t})},[]);(0,s.useEffect)(()=>{if(!x)return;Ie();let e=()=>Ie();return window.addEventListener(`resize`,e),window.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`resize`,e),window.removeEventListener(`scroll`,e,!0)}},[x,Ie]),(0,s.useEffect)(()=>{if(!x)return;let e=e=>{let t=e.target;v.current?.contains(t)||_.current?.contains(t)||M(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[x]),(0,s.useEffect)(()=>{u&&M(!1)},[u]),(0,s.useEffect)(()=>{if(!x)return;let e=e=>{e.key===`Escape`&&(e.preventDefault(),M(!1),_.current?.focus())};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[x]);let Le=(0,s.useMemo)(()=>{let e=F.trim().toLowerCase();return Y.filter(t=>!e||t.version.toLowerCase().includes(e))},[Y,F]),Re=(0,s.useMemo)(()=>{let e=L.trim().toLowerCase();return Y.filter(t=>!e||t.version.toLowerCase().includes(e))},[L,Y]),ze=(0,s.useCallback)(()=>{if(!u){if(x){M(!1);return}Q(),M(!0)}},[u,x,Q]);(0,s.useEffect)(()=>{h==null||h===y.current||(y.current=h,!u&&(Q(),M(!0),_.current?.focus()))},[h,u,Q]);let Be=(0,s.useCallback)(()=>{l({compareBy:`time`,compareMode:`exact_versions`,versionA:null,versionB:null,scopeVersions:[],baselineVersions:[]}),M(!1)},[l]),$=(0,s.useMemo)(()=>{if(V!==`specific`||!z||!U)return null;let e=Y.find(e=>e.version===z),t=Y.find(e=>e.version===U);return!e||!t?null:d({target:e,baseline:t,targetInWindow:q(e),baselineInWindow:q(t),dateFrom:n,dateTo:r})},[V,n,r,U,z,q,Y]),Ve=(0,s.useCallback)(()=>{if(!z)return;if(V===`specific`){if(!U)return;l({compareBy:`version`,compareMode:`exact_versions`,versionA:z,versionB:U,scopeVersions:[z],baselineVersions:[U],...J?{platform:G}:{}}),M(!1);return}let e=Ne.filter(e=>e!==z);l({compareBy:`version`,compareMode:`latest_major_vs_rest`,versionA:z,versionB:null,scopeVersions:[z],baselineVersions:e,...J?{platform:G}:{}}),M(!1)},[Ne,V,U,G,z,J,l]),He=(0,s.useCallback)(()=>{!z||!U||!$||(l({compareBy:`version`,compareMode:`exact_versions`,versionA:z,versionB:U,scopeVersions:[z],baselineVersions:[U],dateRange:{from:$.from,to:$.to},...J?{platform:G}:{}}),M(!1))},[U,G,z,J,l,$]),Ue=x?(0,c.createPortal)((0,f.jsxs)(de,{ref:v,style:{top:De.top,left:De.left},role:`dialog`,"aria-label":`Comparison settings`,children:[N===`root`&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(S,{children:(0,f.jsx)(C,{children:`Compare by`})}),(0,f.jsxs)(T,{children:[(0,f.jsxs)(E,{type:`button`,$active:e.compareBy===`time`,onClick:Be,children:[(0,f.jsx)(D,{$active:e.compareBy===`time`}),(0,f.jsxs)(O,{children:[(0,f.jsx)(k,{children:`Time period`}),(0,f.jsxs)(A,{children:[`vs previous `,Ae,` days`]})]})]}),(0,f.jsxs)(E,{type:`button`,$active:e.compareBy===`version`,disabled:!Z,onClick:()=>{Z&&P(J?`platform`:`target`)},title:Z?`Compare by app version`:`Requires at least two versions`,children:[(0,f.jsx)(D,{$active:e.compareBy===`version`}),(0,f.jsxs)(O,{children:[(0,f.jsx)(k,{children:`App version`}),(0,f.jsx)(A,{children:Z?`Pick target and baseline versions`:`Requires at least two versions`})]})]})]})]}),N===`platform`&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(S,{children:[(0,f.jsx)(w,{type:`button`,onClick:()=>P(`root`),children:`‹ Back`}),(0,f.jsx)(C,{children:`Platform`})]}),(0,f.jsx)(fe,{children:`Version comparisons use one platform at a time.`}),(0,f.jsx)(T,{children:m.map(e=>{let t=X.get(e.value)??0;return(0,f.jsxs)(E,{type:`button`,$active:G===e.value,disabled:t<2,onClick:()=>Fe(e.value),title:t<2?`Requires at least two versions`:`Use ${e.label} versions`,children:[(0,f.jsx)(D,{$active:G===e.value}),(0,f.jsxs)(O,{children:[(0,f.jsx)(k,{children:e.label}),(0,f.jsx)(A,{children:t>=2?ae(t):`Requires at least two versions`})]})]},e.value)})}),(0,f.jsxs)(Te,{children:[(0,f.jsx)(Ee,{}),(0,f.jsx)(j,{type:`button`,disabled:(X.get(G)??0)<2,onClick:()=>P(`target`),children:`Continue`})]})]}),N===`target`&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(S,{children:[(0,f.jsx)(w,{type:`button`,onClick:()=>P(J?`platform`:`root`),children:`‹ Back`}),(0,f.jsx)(C,{children:`Target version`})]}),(0,f.jsx)(pe,{type:`text`,value:F,onChange:e=>I(e.target.value),placeholder:`Filter versions…`}),(0,f.jsx)(me,{children:Le.map(e=>(0,f.jsxs)(he,{type:`button`,$active:z===e.version,onClick:()=>B(e.version),children:[(0,f.jsx)(D,{$active:z===e.version}),(0,f.jsxs)(ge,{children:[(0,f.jsx)(ve,{children:e.version}),(0,f.jsx)(be,{children:re(e,q(e))})]})]},e.version))}),(0,f.jsxs)(Te,{children:[(0,f.jsx)(Ee,{}),(0,f.jsx)(j,{type:`button`,disabled:!z,onClick:()=>P(`baseline`),children:`Continue`})]})]}),N===`baseline`&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(S,{children:[(0,f.jsx)(w,{type:`button`,onClick:()=>P(`target`),children:`‹ Back`}),(0,f.jsx)(C,{children:`Baseline`})]}),(0,f.jsxs)(xe,{children:[`Target: `,z??`None selected`]}),(0,f.jsxs)(T,{children:[(0,f.jsxs)(E,{type:`button`,$active:V===`rest`,onClick:()=>H(`rest`),children:[(0,f.jsx)(D,{$active:V===`rest`}),(0,f.jsxs)(O,{children:[(0,f.jsx)(k,{children:`All other versions`}),(0,f.jsx)(A,{children:`Compare against every version except the target`})]})]}),(0,f.jsxs)(E,{type:`button`,$active:V===`specific`,onClick:()=>H(`specific`),children:[(0,f.jsx)(D,{$active:V===`specific`}),(0,f.jsxs)(O,{children:[(0,f.jsx)(k,{children:`Specific version`}),(0,f.jsx)(A,{children:`Pick one explicit baseline version`})]})]})]}),V===`specific`&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(pe,{type:`text`,value:L,onChange:e=>R(e.target.value),placeholder:`Filter baseline versions…`}),(0,f.jsx)(me,{children:Re.map(e=>{let t=e.version===z;return(0,f.jsxs)(he,{type:`button`,$active:!t&&U===e.version,$isTarget:t,disabled:t,onClick:()=>{t||W(e.version)},children:[(0,f.jsx)(D,{$active:!t&&U===e.version}),(0,f.jsxs)(ge,{children:[(0,f.jsxs)(_e,{children:[(0,f.jsx)(ve,{children:e.version}),t?(0,f.jsx)(ye,{children:`Target`}):null]}),(0,f.jsx)(be,{children:re(e,q(e))})]})]},e.version)})}),$?(0,f.jsxs)(Se,{"data-testid":`compare-coverage-hint`,children:[(0,f.jsxs)(Ce,{children:[`⚠ `,$.starvedVersion,` has only`,` `,a($.starvedInWindow).toLowerCase(),` of its`,` `,a($.starvedLifetime).toLowerCase(),` sessions in this range — most differences would be inconclusive.`]}),(0,f.jsxs)(we,{type:`button`,onClick:He,children:[`Widen range to `,ne($.from),` –`,` `,ne($.to),` & apply`]})]}):null]}),(0,f.jsxs)(Te,{children:[(0,f.jsx)(Ee,{}),(0,f.jsx)(j,{type:`button`,disabled:!z||V===`specific`&&!U,onClick:Ve,children:`Apply`})]})]})]}),document.body):null;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(se,{ref:_,type:`button`,onClick:ze,"aria-haspopup":`dialog`,"aria-expanded":x,"aria-disabled":u,disabled:u,title:u?ee:void 0,$disabled:u,children:[(0,f.jsx)(ce,{children:p}),(0,f.jsx)(le,{title:Pe,children:Pe}),(0,f.jsx)(ue,{$open:x,children:`▾`})]}),Ue]})},se=r.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 148px;
  max-width: 260px;
  height: 32px;
  padding: 0 10px;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  cursor: pointer;
  opacity: ${({$disabled:e})=>e?.58:1};

  &:hover {
    border-color: ${({theme:e})=>e.colors.border.strong};
    color: ${({theme:e})=>e.colors.text.primary};
    background: ${({theme:e})=>e.colors.background.hover};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    border-color: ${({theme:e})=>e.colors.border.default};
    color: ${({theme:e})=>e.colors.text.secondary};
    background: ${({theme:e})=>e.colors.background.surface};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.uxcam.indigo[100]};
  }
`,ce=r.span`
  color: ${({theme:e})=>e.colors.text.tertiary};
`,le=r.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ue=r.span`
  margin-left: auto;
  color: ${({theme:e})=>e.colors.text.tertiary};
  transform: rotate(${({$open:e})=>e?`180deg`:`0deg`});
  transition: transform 120ms ease;
`,de=r.div`
  position: fixed;
  z-index: ${({theme:e})=>e.zIndex.dropdown};
  width: 360px;
  overflow: hidden;
  background: ${({theme:e})=>e.elevation.high.background};
  border: ${({theme:e})=>e.elevation.high.border};
  box-shadow: ${({theme:e})=>e.elevation.high.shadow};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
`,S=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.subtle};
`,C=r.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
`,w=r.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  cursor: pointer;
`,T=r.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 6px;
`,E=r.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${({$active:e,theme:t})=>e?t.colors.metrics.rate[300]:t.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({$active:e,theme:t})=>e?t.colors.metrics.rate[50]:t.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  text-align: left;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,D=r.span`
  display: inline-flex;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1.5px solid ${({$active:e,theme:t})=>e?t.colors.metrics.rate[500]:t.colors.border.strong};
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({$active:e,theme:t})=>e?t.colors.metrics.rate[500]:`transparent`};
  }
`,O=r.div`
  min-width: 0;
`,k=r.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
`,A=r.div`
  margin-top: 2px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,fe=r.div`
  padding: 12px 16px 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,pe=r.input`
  width: calc(100% - 24px);
  height: 32px;
  margin: 12px;
  padding: 0 10px;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.border.focus};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.uxcam.indigo[100]};
  }
`,me=r.div`
  max-height: 240px;
  overflow-y: auto;
  padding: 0 8px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,he=r.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${({$active:e,theme:t})=>e?t.colors.metrics.rate[300]:t.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({$active:e,$isTarget:t,theme:n})=>e?n.colors.metrics.rate[50]:t?n.colors.background.hover:n.colors.background.surface};
  text-align: left;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 1;
  }
`,ge=r.div`
  min-width: 0;
`,_e=r.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,ve=r.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.primary};
`,ye=r.span`
  display: inline-flex;
  align-items: center;
  height: 18px;
  padding: 0 6px;
  border-radius: 999px;
  background: ${({theme:e})=>e.colors.uxcam.indigo[50]};
  color: ${({theme:e})=>e.colors.uxcam.indigo[600]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,be=r.div`
  margin-top: 2px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,xe=r.div`
  padding: 0 16px 12px;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,Se=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 8px 8px;
  padding: 10px 12px;
  border: 1px solid ${({theme:e})=>e.colors.severity.warning.border};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.severity.warning.bg};
`,Ce=r.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.severity.warning.text};
`,we=r.button`
  align-self: flex-start;
  height: 26px;
  padding: 0 10px;
  border: 1px solid ${({theme:e})=>e.colors.severity.warning.border};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.background.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
  }
`,Te=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid ${({theme:e})=>e.colors.border.subtle};
`,Ee=r.span`
  flex: 1;
`,j=r.button`
  height: 32px;
  padding: 0 14px;
  border: 1px solid ${({theme:e})=>e.colors.metrics.rate[600]};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.metrics.rate[500]};
  color: white;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;export{x as t};