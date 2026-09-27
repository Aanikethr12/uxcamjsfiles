import{E as e,T as t}from"./ui-vendor-CUROeZIN.js";var n=encodeURIComponent,r=[`subscription`,`subscription-console`,`plan`,`tara-ai`,`teams`,`apps`,`integrations`,`org-profile`,`recording`,`data-access`,`segments`,`tracked-entities`,`screen-url-rules`,`analytics-defaults`,`my-profile`,`security`,`notification-preferences`,`issue-notification`],i=[`api-key`,`recording`,`data-access`,`segments`,`analytics-defaults`,`tracked-entities`,`screen-url-rules`],a={plan:`subscription`,team:`teams`,profile:`org-profile`},o={home:e=>`/app/${n(e)}`,project:`/project`,envHome:(e,t)=>`/project/${n(e)}/${n(t)}`,envSettings:(e,t)=>`/project/${n(e)}/${n(t)}/settings`,insights:e=>`/app/${n(e)}/insights`,insightSettings:e=>`/app/${n(e)}/insights/settings`,analytics:e=>`/app/${n(e)}/analytics`,taraWorkspace:e=>`/app/${n(e)}/tara`,taraChat:e=>`/app/${n(e)}/tara/chat`,taraBriefs:e=>`/app/${n(e)}/tara/briefs`,taraAssignments:e=>`/app/${n(e)}/tara/assignments`,taraAssignmentNew:e=>`/app/${n(e)}/tara/assignments/new`,taraAssignmentDetail:(e,t)=>`/app/${n(e)}/tara/assignments/${n(t)}`,analyticsReports:e=>`/app/${n(e)}/analytics/reports`,analyticsDashboards:e=>`/app/${n(e)}/analytics/dashboards`,tara:`/tara`,reviews:e=>`/app/${n(e)}/reviews`,sessions:e=>`/app/${n(e)}/sessions`,sessionDetail:(e,t)=>`/app/${n(e)}/sessions/${n(t)}`,events:e=>`/app/${n(e)}/events`,eventInsights:(e,t)=>`/app/${n(e)}/events/${n(t)}`,issues:e=>`/app/${n(e)}/stability`,issueDetail:(e,t,r)=>`/app/${n(e)}/stability/${n(t)}/${n(r)}`,notes:e=>`/app/${n(e)}/notes`,artifactDetail:(e,t)=>`/app/${n(e)}/analyses/artifacts/${n(t)}`,legacyOrgSettings:e=>`/settings/org/${n(e)}/subscription`,legacyOrgSettingsTab:(e,t)=>`/settings/org/${n(e)}/${a[t]??t}`,settingsEnvLeaf:(e,t)=>`/settings/env/${n(e)}/${t}`,appSettings:e=>`/app/${n(e)}/settings`,appSettingsTab:(e,t)=>`/app/${n(e)}/settings/${n(t)}`,settingsOrg:(e,t)=>`/settings/org/${n(e)}/${t}`,planQuote:(e,t)=>`/app/${n(e)}/settings/plan/quote/${n(t)}`,planQuoteOrg:(e,t)=>`/settings/org/${n(e)}/plan/quote/${n(t)}`,settingsProjectGeneral:e=>`/settings/project/${n(e)}/general`,settingsProjectEnv:(e,t,r)=>`/settings/project/${n(e)}/env/${n(t)}/${r}`,appIntegration:e=>`/app/${n(e)}/integration`,screens:e=>`/app/${n(e)}/screens`,appFlows:e=>`/app/${n(e)}/screens`,pages:e=>`/app/${n(e)}/pages`,pageDetail:(e,t)=>`/app/${n(e)}/pages/${n(t)}`,screenInsights:(e,t)=>`/app/${n(e)}/screens/${n(t)}`,screenStory:(e,t)=>`/app/${n(e)}/screens/${n(t)}`,screenHeatmap:(e,t)=>`/app/${n(e)}/screens/${n(t)}?tab=heatmap`,users:e=>`/app/${n(e)}/users`,userInsight:(e,t)=>`/app/${n(e)}/users/${n(t)}`,dashboardDetail:(e,t)=>`/app/${n(e)}/analytics/dashboards/${n(t)}`,adminDebug:e=>`/app/${n(e)}/admin-debug`,internalAnalytics:e=>`/org/${n(e)}/internal-analytics`,internalAiCosts:e=>`/org/${n(e)}/internal-ai-costs`,whatsNew:e=>`/org/${n(e)}/whats-new`,whatsNewPost:(e,t)=>`/org/${n(e)}/whats-new/${n(t)}`};function s(e){let t=e.split(/[?#]/,1)[0];return/^\/app\/[^/]+\/sessions(-v2)?\/[^/]+\/?$/.test(t)}var c=/^\/project\/[^/]+\/([^/]+)(?:\/|$)/,l=`appId`,u=`orgId`;function d(e,t){return e.toLowerCase()===t.toLowerCase()}function f(e){let t=e.split(/[?#]/,1)[0],n=/^\/app\/([^/]+)(?:\/|$)/.exec(t)||c.exec(t);return n?decodeURIComponent(n[1]):``}function p(e){let t=e.split(/[?#]/,1)[0],n=/^\/org\/([^/]+)(?:\/|$)/.exec(t)||/^\/settings\/org\/([^/]+)(?:\/|$)/.exec(t);return n?decodeURIComponent(n[1]):``}function m(e){return d(f(e),`appId`)||d(p(e),`orgId`)}function h(e,t,n){let r=e.split(`/`),i=r.findIndex(e=>d(e,t));return i===-1?e:(r[i]=n,r.join(`/`))}function g(e){let t=f(e);return d(t,`appId`)?``:t}function _(e){let t=p(e);return d(t,`orgId`)?``:t}function v(e){let t=e.split(/[?#]/,1)[0],n=/^\/project\/[^/]+\/[^/]+(\/.*)?$/.exec(t);if(n)return n[1]||`/`;let r=/^\/(?:app|org)\/[^/]+(\/.*)?$/.exec(t);return r?r[1]||`/`:t}var y=new Set([`app`,`tab`,`org`]);function b(e,t,n){let r=new URLSearchParams,i=/^\/app\//.test(e);if(!/^\/org\//.test(e)&&t.orgId&&r.set(`org`,t.orgId),!i&&t.app&&r.set(`app`,t.app),n)for(let[e,t]of Object.entries(n))t!==void 0&&t!==``&&r.set(e,t);let a=r.toString();return a?`${e}?${a}`:e}function x(e,t){let n=t.get(`app`),r=t.get(`org`);if(!n&&!r)return e;let i=new URLSearchParams;return r&&i.set(`org`,r),n&&i.set(`app`,n),`${e}?${i.toString()}`}var S=new Set([`app`,`org`]);function C(e){let t={};return e.forEach((e,n)=>{!S.has(n)&&e&&(t[n]=e)}),t}var w=t`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,T=t`
  0%, 80%, 100% { opacity: 0.4; }
  40% { opacity: 1; }
`,E=t`
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,D=t`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;t`
  0%, 100% { transform: scaleY(0.25); }
  50% { transform: scaleY(1); }
`;var O=`1.8s`,k=e`
  animation: ${E} ${350}ms ${`cubic-bezier(0.16, 1, 0.3, 1)`} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;export{s as _,D as a,h as b,u as c,r as d,g as f,d as g,C as h,w as i,i as l,b as m,k as n,l as o,x as p,T as r,y as s,O as t,o as u,_ as v,v as x,m as y};