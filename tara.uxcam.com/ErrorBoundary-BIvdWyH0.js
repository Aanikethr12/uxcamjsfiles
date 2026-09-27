import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t}from"./icons-vendor-C23rQ2ix.js";import{D as n}from"./ui-vendor-CUROeZIN.js";import{t as r}from"./defineProperty-DjL74BD-.js";import{O as i}from"./markdown-vendor-BoH6QLuc.js";import{n as a,r as o}from"./queryConfig-Nlc451hX.js";import{n as s}from"./animations-D6JAIVtz.js";import"./loading-Cm5yT19R.js";import{n as c}from"./errorReporting-CQU3vPyn.js";var l=e(t(),1),u=i(),d={fontSans:`'Poppins', system-ui, -apple-system, sans-serif`,fontDisplay:`'Poppins', system-ui, -apple-system, sans-serif`,fontMono:`'JetBrains Mono', 'Fira Code', monospace`,textPrimary:`#0F172A`,textSecondary:`#475569`,textTertiary:`#94A3B8`,textLink:`#6366F1`,textInverse:`#FFFFFF`,bgSurface:`#FFFFFF`,bgHover:`#F9FAFB`,bgSunken:`#F0F0F2`,borderDefault:`#E2E8F0`,borderStrong:`#CBD5E1`,borderRadius:`8px`,severityWarningIcon:`#F59E0B`,severityCriticalIcon:`#F4584C`,metricsRate500:`#6366F1`},f={fontSans:({theme:e})=>e?.typography?.fontFamily?.sans??d.fontSans,fontDisplay:({theme:e})=>e?.typography?.fontFamily?.display??d.fontDisplay,fontMono:({theme:e})=>e?.typography?.fontFamily?.mono??d.fontMono,textPrimary:({theme:e})=>e?.colors?.text?.primary??d.textPrimary,textSecondary:({theme:e})=>e?.colors?.text?.secondary??d.textSecondary,textTertiary:({theme:e})=>e?.colors?.text?.tertiary??d.textTertiary,textLink:({theme:e})=>e?.colors?.text?.link??d.textLink,textInverse:({theme:e})=>e?.colors?.text?.inverse??d.textInverse,bgSurface:({theme:e})=>e?.colors?.background?.surface??d.bgSurface,bgHover:({theme:e})=>e?.colors?.background?.hover??d.bgHover,bgSunken:({theme:e})=>e?.colors?.background?.sunken??d.bgSunken,borderDefault:({theme:e})=>e?.colors?.border?.default??d.borderDefault,borderStrong:({theme:e})=>e?.colors?.border?.strong??d.borderStrong,borderRadius:({theme:e})=>e?.borderRadius?.md??d.borderRadius,fontSize:(e,t)=>({theme:n})=>n?.typography?.fontSize?.[e]??t,fontWeight:(e,t)=>({theme:n})=>n?.typography?.fontWeight?.[e]??t,lineHeight:(e,t)=>({theme:n})=>n?.typography?.lineHeight?.[e]??t,transition:({theme:e})=>e?.transitions?.fast??`all 0.15s ease`};function p({category:e}){return e===`network`?(0,u.jsxs)(`svg`,{width:`40`,height:`40`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,u.jsx)(`line`,{x1:`1`,y1:`1`,x2:`23`,y2:`23`}),(0,u.jsx)(`path`,{d:`M17.5 21H9a7 7 0 01-1.1-13.9`}),(0,u.jsx)(`path`,{d:`M20.7 17.7A4.5 4.5 0 0018 9h-1.26A8 8 0 016 5.5`}),(0,u.jsx)(`path`,{d:`M22 22L2 2`})]}):e===`ai`?(0,u.jsxs)(`svg`,{width:`40`,height:`40`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,u.jsx)(`path`,{d:`M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5A8.48 8.48 0 0121 11.5z`}),(0,u.jsx)(`line`,{x1:`9.5`,y1:`9.5`,x2:`14.5`,y2:`14.5`}),(0,u.jsx)(`line`,{x1:`14.5`,y1:`9.5`,x2:`9.5`,y2:`14.5`})]}):e===`client`?(0,u.jsxs)(`svg`,{width:`40`,height:`40`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,u.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,u.jsx)(`line`,{x1:`12`,y1:`16`,x2:`12`,y2:`12`}),(0,u.jsx)(`line`,{x1:`12`,y1:`8`,x2:`12.01`,y2:`8`})]}):(0,u.jsxs)(`svg`,{width:`40`,height:`40`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,u.jsx)(`path`,{d:`M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z`}),(0,u.jsx)(`line`,{x1:`12`,y1:`9`,x2:`12`,y2:`13`}),(0,u.jsx)(`line`,{x1:`12`,y1:`17`,x2:`12.01`,y2:`17`})]})}var m=({error:e,onRetry:t,onBack:n,backLabel:r})=>{let[i,a]=(0,l.useState)(!1);return(0,u.jsxs)(g,{role:`alert`,children:[(0,u.jsx)(_,{$category:e.category,children:(0,u.jsx)(p,{category:e.category})}),(0,u.jsx)(v,{children:e.title}),(0,u.jsx)(y,{children:e.message}),e.suggestion&&(0,u.jsx)(b,{children:e.suggestion}),(0,u.jsxs)(x,{children:[e.retryable&&t&&(0,u.jsx)(S,{type:`button`,onClick:t,children:`Retry`}),n&&(0,u.jsx)(C,{type:`button`,onClick:n,children:r||`Go back`})]}),e.technical&&(0,u.jsxs)(w,{children:[(0,u.jsxs)(T,{type:`button`,onClick:()=>a(e=>!e),children:[i?`Hide`:`Show`,` technical details`]}),i&&(0,u.jsx)(E,{children:e.technical})]})]})};function h(e,t){switch(e){case`network`:case`ai`:return t?.colors?.severity?.warning?.icon??d.severityWarningIcon;case`client`:return t?.colors?.metrics?.rate?.[500]??d.metricsRate500;case`crash`:return t?.colors?.severity?.critical?.icon??d.severityCriticalIcon;default:return t?.colors?.text?.tertiary??d.textTertiary}}var g=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 64px 40px;
  max-width: 480px;
  margin: 0 auto;
  ${s}
`,_=n.div`
  color: ${({theme:e,$category:t})=>h(t,e)};
  opacity: 0.5;
  margin-bottom: 16px;
`,v=n.h3`
  font-family: ${f.fontDisplay};
  font-size: ${f.fontSize(`lg`,`1.125rem`)};
  font-weight: ${f.fontWeight(`semibold`,`600`)};
  color: ${f.textPrimary};
  margin: 0 0 8px;
  line-height: ${f.lineHeight(`tight`,`1.25`)};
`,y=n.p`
  font-family: ${f.fontSans};
  font-size: ${f.fontSize(`sm`,`0.875rem`)};
  color: ${f.textSecondary};
  margin: 0;
  max-width: 400px;
  line-height: ${f.lineHeight(`normal`,`1.5`)};
`,b=n.p`
  font-family: ${f.fontSans};
  font-size: ${f.fontSize(`sm`,`0.875rem`)};
  color: ${f.textTertiary};
  margin: 4px 0 0;
  max-width: 400px;
  line-height: ${f.lineHeight(`normal`,`1.5`)};
  font-style: italic;
`,x=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`,S=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  font-family: ${f.fontSans};
  font-size: ${f.fontSize(`sm`,`0.875rem`)};
  font-weight: ${f.fontWeight(`medium`,`500`)};
  border-radius: ${f.borderRadius};
  border: none;
  /* Match the DS default button (.ds-btn-default) — near-black surface
     so the retry CTA looks consistent with primary buttons elsewhere
     (was previously the indigo textLink token, which read as purple). */
  background: ${f.textPrimary};
  color: ${f.textInverse};
  cursor: pointer;
  transition: ${f.transition};

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.97);
  }
`,C=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  font-family: ${f.fontSans};
  font-size: ${f.fontSize(`sm`,`0.875rem`)};
  font-weight: ${f.fontWeight(`medium`,`500`)};
  border-radius: ${f.borderRadius};
  border: 1px solid ${f.borderDefault};
  background: ${f.bgSurface};
  color: ${f.textPrimary};
  cursor: pointer;
  transition: ${f.transition};

  &:hover {
    background: ${f.bgHover};
    border-color: ${f.borderStrong};
  }

  &:active {
    transform: scale(0.97);
  }
`,w=n.div`
  margin-top: 16px;
  width: 100%;
  max-width: 400px;
`,T=n.button`
  font-family: ${f.fontSans};
  font-size: ${f.fontSize(`xs`,`0.75rem`)};
  color: ${f.textTertiary};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: ${f.textSecondary};
  }
`,E=n.pre`
  font-family: ${f.fontMono};
  font-size: ${f.fontSize(`xs`,`0.75rem`)};
  color: ${f.textTertiary};
  background: ${f.bgSunken};
  padding: 8px 12px;
  margin-top: 6px;
  border-radius: ${f.borderRadius};
  max-height: 120px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  text-align: left;
  line-height: ${f.lineHeight(`normal`,`1.5`)};
`;function D(e,t,n){let r=e instanceof Error?e.message:String(e);return n===`timeout`?{category:`ai`,title:`Analysis timed out`,message:`This took longer than expected and timed out. Please try again.`,suggestion:`Try again.`,retryable:!0,technical:r}:n===`llm`||n===`tool`?{category:`ai`,title:`Analysis failed`,message:`Something went wrong while ${t}. This might be a temporary issue.`,suggestion:`Try rephrasing your question or using a simpler query.`,retryable:!0,technical:r}:n===`finalization`?{category:`ai`,title:`Follow-up step failed`,message:`Your answer was generated but a follow-up step failed — the answer above is intact.`,retryable:!1,technical:r}:O(e,t)}function O(e,t){let n=e instanceof Error?e.message:String(e),r=n.toLowerCase(),i=o(e),s=a(e);return s===404||r.includes(`not found`)?{category:`data`,title:`${t?k(t):`Resource`} not found`,message:`The ${t||`item`} you're looking for doesn't exist or has been removed.`,retryable:i,technical:n}:j(e,n,s)||A(e,n)||(s===401||r.includes(`unauthorized`)?{category:`client`,title:`Session expired`,message:`Your session has expired. Please log in again.`,suggestion:`Refresh the page to re-authenticate.`,retryable:i,technical:n}:s===403||r.includes(`forbidden`)?{category:`client`,title:`Access denied`,message:`You don't have permission to view this.`,suggestion:`Return home or contact your admin.`,retryable:i,technical:n}:s===429||r.includes(`rate limit`)||r.includes(`too many`)?{category:`ai`,title:`Too many requests`,message:`The AI service is busy. Please wait a moment and try again.`,suggestion:`This usually clears up within 30 seconds.`,retryable:i,technical:n}:s===400?{category:`client`,title:`Invalid request`,message:t?`The request for ${t} contained invalid parameters.`:`The request contained invalid parameters.`,suggestion:`Check your filters and try again.`,retryable:i,technical:n}:s!==null&&s>=500&&s<=504?{category:`network`,title:`Server error`,message:t?`The server encountered an error with ${t}.`:`The server encountered an error.`,suggestion:`Try again in a few seconds.`,retryable:i,technical:n}:r.includes(`failed to fetch`)||r.includes(`networkerror`)||r.includes(`network error`)||r.includes(`timeout`)||r.includes(`timed out`)||r.includes(`aborted`)||r.includes(`econnrefused`)||r.includes(`econnreset`)||r.includes(`load failed`)?{category:`network`,title:`Connection issue`,message:t?`Couldn't reach the server for ${t}. This usually resolves quickly.`:`Couldn't reach the server. This usually resolves quickly.`,suggestion:`Check your connection and try again.`,retryable:i,technical:n}:r.includes(`llm`)||r.includes(`streaming`)||r.includes(`processing your request`)||r.includes(`analysis failed`)||r.includes(`tool execution`)?{category:`ai`,title:`Analysis failed`,message:t?`Something went wrong while ${t}. This might be a temporary issue.`:`Tara ran into a problem processing your request.`,suggestion:`Try rephrasing your question or using a simpler query.`,retryable:i,technical:n}:{category:`crash`,title:`Something went wrong`,message:t?`An unexpected error occurred with ${t}.`:`An unexpected error occurred.`,suggestion:`Try refreshing the page.`,retryable:i,technical:n})}function k(e){return e.charAt(0).toUpperCase()+e.slice(1)}function A(e,t){let n=M(e);return[t,N(n,`code`)||P(n?.body),n?.body?L(n.body):null].filter(Boolean).join(` `).toLowerCase().includes(`subscription_inactive`)?{category:`client`,title:`Subscription no longer active`,message:`Your subscription is no longer active. Contact sales to reactivate it.`,retryable:!1,technical:t}:null}function j(e,t,n){if(n!==403)return null;let r=M(e),i=r?r.body:void 0,a=N(r,`code`)||P(i),o=[t,a,i?L(i):null].filter(Boolean).join(` `).toLowerCase(),s=!!(a&&/ai[_-]?usage|usage[_-]?limit|weekly[_-]?ai|org[_-]?credit/.test(a.toLowerCase())),c=o.includes(`ai_usage`)||o.includes(`ai usage`)||o.includes(`ai request`)||o.includes(`weekly request`)||o.includes(`weekly ai`)||o.includes(`shared credit`)||o.includes(`org credit`)||o.includes(`monthly pool`);if(!s&&!c)return null;let l=I(F(i));return{category:`ai`,title:l?`AI requests resume ${l}`:`AI requests paused`,message:l?`You've used this week's AI requests, and your org's shared credits are spent for this month. Your requests reset ${l}. You can still open every past answer, report, and all analytics.`:`You've used this week's AI requests, and your org's shared credits are spent for this month. You can still open every past answer, report, and all analytics.`,suggestion:`Ask your admin or view usage.`,retryable:!1,technical:t}}function M(e){return typeof e==`object`&&e?e:null}function N(e,t){let n=e?.[t];return typeof n==`string`&&n.trim()?n:null}function P(e){let t=M(e);if(!t)return null;let n=M(t.detail),r=M(t.error);return N(t,`code`)||N(n,`code`)||N(r,`code`)}function F(e,t=0){if(t>4)return null;let n=M(e);if(!n)return null;for(let e of[`resetsAt`,`resets_at`,`resetAt`,`reset_at`,`weeklyResetsAt`,`weekly_resets_at`]){let t=N(n,e);if(t)return t}for(let e of[`detail`,`error`,`data`,`usage`]){let r=F(n[e],t+1);if(r)return r}return null}function I(e){if(!e)return null;let t=new Date(e);return Number.isNaN(t.getTime())?e:new Intl.DateTimeFormat(void 0,{weekday:`long`,month:`short`,day:`numeric`}).format(t)}function L(e){try{return JSON.stringify(e)}catch{return``}}var R=class extends l.Component{constructor(e){super(e),r(this,`handleRetry`,()=>{this.setState({hasError:!1,error:null,errorInfo:null})}),r(this,`handleReload`,()=>{window.location.reload()}),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t}),c(e,{source:`ErrorBoundary`,componentStack:t.componentStack})}componentDidUpdate(e){this.state.hasError&&e.resetKey!==this.props.resetKey&&this.handleRetry()}render(){return this.state.hasError?this.props.fallback?this.props.fallback:(0,u.jsx)(z,{children:(0,u.jsx)(m,{error:O(this.state.error||`Unknown error`,`rendering this section`),onRetry:this.handleRetry,onBack:this.handleReload,backLabel:`Reload page`})}):this.props.children}},z=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  width: 100%;
  padding: 24px;
`;export{m as i,O as n,D as r,R as t};