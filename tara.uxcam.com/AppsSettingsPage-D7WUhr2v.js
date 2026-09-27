import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t,Hn as n,R as r,_ as i,mr as a}from"./icons-vendor-C23rQ2ix.js";import{Ft as o,It as s,Lt as c,Pt as l,Rt as u,S as d,o as f,on as p}from"./ds-BJhQ4zht.js";import{f as m}from"./router-vendor-DDSrk2O2.js";import{D as h}from"./ui-vendor-CUROeZIN.js";import{n as g}from"./settings-CbbRMUZJ.js";import{O as _}from"./markdown-vendor-BoH6QLuc.js";import{t as v}from"./useAuthStatus-BdbZHG0D.js";import{F as y,I as b,L as x,P as S,T as C,n as w,q as T}from"./NavigationContext-DTwRip-h.js";import{m as E,u as D}from"./animations-D6JAIVtz.js";import{l as O,u as k}from"./Dialog-BFakgPRd.js";import{t as ee}from"./Shimmer-BQNKs0BP.js";import"./loading-Cm5yT19R.js";import"./error-CrcmsCT-.js";import{t as te}from"./ErrorBoundary-BIvdWyH0.js";import{t as A}from"./useSubscriptionGate-BclSWIGQ.js";import{t as ne}from"./SettingsPageHeader-BT6hgNOC.js";import{n as j}from"./components-Dw05BWz3.js";import{t as re}from"./seedAppTimezone-C-pxIQQC.js";import{n as ie,r as ae}from"./appAdminDisable-BUiTNOFg.js";import{t as M}from"./usePageSearchParams-Dppn5wBJ.js";import{t as oe}from"./SettingsCard-BeWOMqWB.js";import{t as N}from"./SettingsSearchField-BhsJehcR.js";import{t as P}from"./SettingsTableWrap-BLNjUtl3.js";import{t as F}from"./appNameValidator-CoeNwCbJ.js";var I=e(t(),1);function se(e,{setApp:t,navigate:n}){return e?(t(e),n(E(D.appIntegration(e),{app:e})),!0):!1}var L=(0,I.createContext)(null);function ce(){let e=(0,I.useContext)(L);if(!e)throw Error(`useAppManagement must be used within AppManagementProvider`);return e}var R=_(),le=({canDelete:e,deleteDisabledReason:t,onSettings:n,onDelete:a})=>{let l=e||!!t,d=!!t,f=t??`Delete app`;return(0,R.jsx)(c,{delayDuration:300,children:(0,R.jsxs)(ue,{children:[(0,R.jsxs)(o,{children:[(0,R.jsx)(u,{asChild:!0,children:(0,R.jsx)(z,{type:`button`,onClick:n,"aria-label":`App settings`,children:(0,R.jsx)(r,{size:14})})}),(0,R.jsx)(s,{side:`top`,children:`App settings`})]}),l&&(0,R.jsxs)(o,{children:[(0,R.jsx)(u,{asChild:!0,children:(0,R.jsx)(z,{type:`button`,onClick:d?void 0:a,"aria-label":d?`Delete app (admin-disabled)`:`Delete app`,title:d?f:void 0,disabled:d,$danger:!0,children:(0,R.jsx)(i,{size:14})})}),(0,R.jsx)(s,{side:`top`,children:f})]})]})})},ue=h.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[1]};
`,z=h.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: 6px;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text.tertiary};
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({theme:e,$danger:t})=>t?e.colors.severity.critical.icon:e.colors.border.strong};
    color: ${({theme:e,$danger:t})=>t?e.colors.severity.critical.icon:e.colors.text.primary};
    background: ${({theme:e})=>e.colors.background.hover};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,de=({appId:e})=>{let[t,n]=(0,I.useState)(!1),[r,i]=(0,I.useState)(!1),[a,o]=(0,I.useState)(!1),[s,c]=(0,I.useState)(!1),l=C(t?e:null),u=l.data?.app_key??null;(0,I.useEffect)(()=>{if(!s)return;let e=window.setTimeout(()=>c(!1),1500);return()=>window.clearTimeout(e)},[s]),(0,I.useEffect)(()=>{!a||!u||(o(!1),navigator.clipboard.writeText(u).then(()=>c(!0)))},[a,u]);let d=(0,I.useCallback)(()=>{n(!0),i(e=>!e)},[]),f=(0,I.useCallback)(async()=>{if(n(!0),!u){o(!0);return}await navigator.clipboard.writeText(u),c(!0)},[u]);return l.isError||l.isSuccess&&!u?(0,R.jsx)(K,{children:`—`}):(0,R.jsxs)(W,{children:[(0,R.jsx)(G,{children:r&&u?u:`•`.repeat(14)}),(0,R.jsx)(q,{type:`button`,onClick:d,"aria-label":r?`Hide app key`:`Show app key`,children:r?B:V}),(0,R.jsx)(J,{type:`button`,onClick:()=>{f()},"aria-label":`Copy app key`,children:s?U:H})]})},B=(0,R.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,R.jsx)(`path`,{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`}),(0,R.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),V=(0,R.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,R.jsx)(`path`,{d:`M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24`}),(0,R.jsx)(`line`,{x1:`1`,y1:`1`,x2:`23`,y2:`23`})]}),H=(0,R.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,R.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),(0,R.jsx)(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})]}),U=(0,R.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,R.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),W=h.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>`${e.spacing[1]} ${e.spacing[1]} ${e.spacing[1]} ${e.spacing[2]}`};
  width: 100%;
  max-width: 100%;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: transparent;
`,G=h.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  color: ${({theme:e})=>e.colors.text.primary};
  white-space: nowrap;
  letter-spacing: 0.05em;
`,K=h.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,q=h.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  padding: 0;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text.secondary};
  flex-shrink: 0;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,J=h.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text.tertiary};
  flex-shrink: 0;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    border-color: ${({theme:e})=>e.colors.border.strong};
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,fe=({app:e,canRename:t,canChangeIcon:n,onRename:r,onIconUpload:i})=>{let[a,d]=(0,I.useState)(!1),[f,p]=(0,I.useState)(e.name),[m,h]=(0,I.useState)(null),g=(0,I.useRef)(null),_=(0,I.useRef)(null),v=A(),y=(0,I.useCallback)(()=>{t&&(p(e.name),h(null),d(!0),requestAnimationFrame(()=>g.current?.select()))},[t,e.name]),b=(0,I.useCallback)(()=>{let t=f.trim();if(t===e.name){h(null),d(!1);return}let n=F(t);if(n){h(n);return}h(null),d(!1),r(e.app_id,t)},[f,e.name,e.app_id,r]),x=(0,I.useCallback)(()=>{d(!1),h(null),p(e.name)},[e.name]),S=(0,I.useCallback)(e=>{let t=e.target.value;p(t);let n=t.trim();if(!n){h(null);return}h(F(n))},[]),C=e=>{e.key===`Enter`&&b(),e.key===`Escape`&&x()},w=()=>{v.isBlocked||n&&_.current?.click()},T=t=>{let n=t.target.files?.[0];n&&(i(e.app_id,n),t.target.value=``)},[E,D]=(0,I.useState)(!1),O=e.icon_url&&!E?e.icon_url:null,k=(0,R.jsx)(j,{name:e.name,src:O,size:32,shape:`square`,tone:`neutral`}),ee=e.icon_url&&!E?(0,R.jsx)(`img`,{src:e.icon_url,alt:``,crossOrigin:`use-credentials`,onError:()=>D(!0),style:{display:`none`},"aria-hidden":`true`}):null;return(0,R.jsxs)(Z,{children:[(0,R.jsx)(c,{delayDuration:300,children:n?(0,R.jsx)(l,{active:v.isBlocked,reason:v.reason,children:(0,R.jsxs)(o,{children:[(0,R.jsx)(u,{asChild:!0,children:(0,R.jsxs)(he,{type:`button`,onClick:w,disabled:v.isBlocked,"aria-label":`Change icon`,children:[k,ee,(0,R.jsx)(ge,{"aria-hidden":`true`,children:(0,R.jsx)(Y,{})})]})}),(0,R.jsx)(s,{side:`bottom`,children:`Change avatar`})]})}):(0,R.jsxs)(me,{children:[k,ee]})}),(0,R.jsx)(`input`,{ref:_,type:`file`,accept:`image/png,image/jpeg`,hidden:!0,onChange:T}),a?(0,R.jsxs)(xe,{children:[(0,R.jsxs)(Se,{children:[(0,R.jsx)(be,{ref:g,value:f,onChange:S,onKeyDown:C,maxLength:32,"aria-invalid":m?`true`:void 0,"aria-describedby":m?`app-name-error-${e.app_id}`:void 0,autoFocus:!0}),(0,R.jsx)(we,{$variant:`primary`,type:`button`,onMouseDown:e=>e.preventDefault(),onClick:b,disabled:!!m,title:`Save (Enter)`,"aria-label":`Save app name`,children:(0,R.jsx)(pe,{})}),(0,R.jsx)(we,{$variant:`ghost`,type:`button`,onMouseDown:e=>e.preventDefault(),onClick:x,title:`Cancel (Esc)`,"aria-label":`Cancel rename`,children:(0,R.jsx)(X,{})})]}),m&&(0,R.jsx)(Ce,{id:`app-name-error-${e.app_id}`,role:`alert`,children:m})]}):(0,R.jsxs)(_e,{children:[(0,R.jsx)(ve,{children:e.name}),t&&(0,R.jsx)(c,{delayDuration:300,children:(0,R.jsxs)(o,{children:[(0,R.jsx)(u,{asChild:!0,children:(0,R.jsx)(ye,{onClick:y,"aria-label":`Rename ${e.name}`,children:(0,R.jsx)(Y,{size:13})})}),(0,R.jsx)(s,{side:`bottom`,children:`Change name`})]})})]})]})},Y=({size:e=14})=>(0,R.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.75`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,R.jsx)(`path`,{d:`M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z`}),(0,R.jsx)(`path`,{d:`m15 5 4 4`})]}),pe=()=>(0,R.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,R.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),X=()=>(0,R.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.25`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,R.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,R.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}),Z=h.div`
  display: flex;
  align-items: center;
  /* spacing[5] (20px) keeps the app icon visually distinct from the name +
     edit affordance — at spacing[3] (12px) they read as one cluttered blob
     because the pencil sits flush with the icon's right edge. */
  gap: ${({theme:e})=>e.spacing[5]};
  min-width: 0;
`,me=h.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  position: relative;
`,he=h.button`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  position: relative;
  display: block;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }
`,ge=h.span`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  border-radius: var(--radius-sm);
  color: var(--color-surface-card);
  transition: ${({theme:e})=>e.transitions.fast};
  pointer-events: none;

  svg {
    width: 14px;
    height: 14px;
  }

  tr:hover & {
    display: inline-flex;
  }
`,_e=h.div`
  display: flex;
  align-items: center;
  /* spacing[3] (12px) gives the pencil a clear gap from the name without
     orphaning it — was spacing[2] which read as "stuck to the text". */
  gap: ${({theme:e})=>e.spacing[3]};
  min-width: 0;
`,ve=h.span`
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--foreground);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ye=h.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text.tertiary};
  flex-shrink: 0;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  opacity: 0;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.background.sunken};
    color: ${({theme:e})=>e.colors.text.primary};
  }

  &:focus-visible {
    opacity: 1;
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: 2px;
  }

  tr:hover & {
    opacity: 1;
  }
`,be=h.input`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  background: ${({theme:e})=>e.colors.background.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[3]}`};
  outline: none;
  flex: 1;
  min-width: 0;
  transition: ${({theme:e})=>e.transitions.fast};

  &:focus {
    border-color: ${({theme:e})=>e.colors.border.focus};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.border.focus}22;
  }
`,xe=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
  flex: 1;
`,Se=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
  flex: 1;
`,Ce=h.span`
  color: ${({theme:e})=>e.colors.severity.critical.icon};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  line-height: 1.3;
`,we=h.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  cursor: pointer;
  flex-shrink: 0;
  transition: ${({theme:e})=>e.transitions.fast};

  ${({theme:e,$variant:t})=>t===`primary`?`
        background: var(--primary);
        border: 1px solid var(--primary);
        color: var(--background);

        &:hover {
          background: var(--foreground);
          border-color: var(--foreground);
        }
      `:`
        background: transparent;
        border: none;
        color: ${e.colors.text.tertiary};

        &:hover {
          background: ${e.colors.background.sunken};
          color: ${e.colors.text.primary};
        }
      `}

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.border.focus};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,Te=({isOpen:e,isLoading:t,orgName:n,mriFeature:r=!1,dismissable:i=!0,disabledReason:a=null,onConfirm:o,onClose:s})=>{let[c,u]=(0,I.useState)(``),[d,f]=(0,I.useState)(`mobile`),[m,h]=(0,I.useState)(`us`),[g,_]=(0,I.useState)(null),v=A(),y=r,b=`Multi-region storage isn’t included in your plan.`,x=`UAE region is temporarily unavailable.`,S=!!a,C=c.trim(),w=C?F(C):null,T=g??w,E=C.length>0&&!w,D=()=>{u(``),f(`mobile`),h(`us`),_(null),s()};return(0,R.jsx)(O,{open:e,onClose:D,title:`Create new app`,width:520,closable:i,children:(0,R.jsxs)(ke,{children:[n&&(0,R.jsxs)(Ae,{children:[`This app will be a part of the `,(0,R.jsx)(`strong`,{children:n}),` organization and fully accessible to the organization's Owner and Admins.`]}),a&&(0,R.jsxs)(He,{role:`status`,children:[(0,R.jsx)(Ue,{children:(0,R.jsx)(Oe,{})}),(0,R.jsx)(We,{children:a})]}),(0,R.jsxs)(je,{children:[(0,R.jsx)(Me,{children:`App name`}),(0,R.jsx)(p,{type:`text`,placeholder:`Enter a name for your new app`,value:c,onChange:e=>{u(e.target.value),g&&_(null)},maxLength:32,disabled:S,"aria-invalid":T?`true`:void 0,"aria-describedby":T?`create-app-name-error`:void 0,className:T?`ds-input-error`:void 0,autoFocus:!0}),T&&(0,R.jsx)(Ne,{id:`create-app-name-error`,role:`alert`,children:T})]}),(0,R.jsxs)(je,{children:[(0,R.jsx)(Me,{children:`Select a platform to integrate`}),(0,R.jsxs)(Pe,{children:[(0,R.jsxs)(Fe,{type:`button`,$active:d===`mobile`,disabled:S,onClick:()=>f(`mobile`),children:[(0,R.jsx)(Ie,{children:(0,R.jsx)(Ee,{})}),`Mobile App`]}),(0,R.jsxs)(Fe,{type:`button`,$active:d===`web`,disabled:S,onClick:()=>f(`web`),children:[(0,R.jsx)(Ie,{children:(0,R.jsx)(De,{})}),`Web App`]})]})]}),(0,R.jsxs)(je,{children:[(0,R.jsx)(Me,{children:`Select data storage region`}),(0,R.jsxs)(Le,{children:[(0,R.jsxs)(Re,{type:`button`,$active:m===`us`,$disabled:S,disabled:S,onClick:S?void 0:()=>h(`us`),children:[(0,R.jsx)(Ve,{children:`🇺🇸`}),` US`]}),(0,R.jsxs)(ze,{children:[(0,R.jsxs)(Re,{type:`button`,$active:m===`eu`,$disabled:!y||S,disabled:!y||S,"aria-disabled":!y||S,"aria-label":y?`EU region`:`EU region — ${b}`,onClick:y&&!S?()=>h(`eu`):void 0,children:[(0,R.jsx)(Ve,{children:`🇪🇺`}),` EU`]}),y?null:(0,R.jsx)(Be,{children:b})]}),(0,R.jsxs)(ze,{children:[(0,R.jsxs)(Re,{type:`button`,$active:m===`ae`,$disabled:!0,disabled:!0,"aria-disabled":!0,"aria-label":`UAE region — ${x}`,onClick:void 0,children:[(0,R.jsx)(Ve,{children:`🇦🇪`}),` UAE`]}),(0,R.jsx)(Be,{children:x})]})]})]}),!S&&!r?(0,R.jsxs)(He,{children:[(0,R.jsx)(Ue,{children:(0,R.jsx)(Oe,{})}),(0,R.jsxs)(We,{children:[`Your default data storage is currently in the United States, and your current plan does not include support for storage across multiple locations. If you require this feature, please`,` `,(0,R.jsx)(Ge,{href:`https://uxcam.com/contact`,target:`_blank`,rel:`noopener noreferrer`,children:`contact our customer support team`})]})]}):null,(0,R.jsxs)(Ke,{children:[i&&(0,R.jsx)(k,{variant:`secondary`,type:`button`,onClick:D,children:`Cancel`}),(0,R.jsx)(l,{active:v.isBlocked,reason:v.reason,children:(0,R.jsx)(k,{variant:`default`,type:`button`,onClick:()=>{if(v.isBlocked)return;let e=F(c);if(e){_(e);return}o(C,d,m)},disabled:!E||t||S||v.isBlocked,loading:t,children:`Create`})})]})]})})},Ee=()=>(0,R.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,R.jsx)(`rect`,{x:`5`,y:`2`,width:`14`,height:`20`,rx:`2`,ry:`2`}),(0,R.jsx)(`line`,{x1:`12`,y1:`18`,x2:`12.01`,y2:`18`})]}),De=()=>(0,R.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,R.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,R.jsx)(`line`,{x1:`2`,y1:`12`,x2:`22`,y2:`12`}),(0,R.jsx)(`path`,{d:`M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z`})]}),Oe=()=>(0,R.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,R.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,R.jsx)(`line`,{x1:`12`,y1:`16`,x2:`12`,y2:`12`}),(0,R.jsx)(`line`,{x1:`12`,y1:`8`,x2:`12.01`,y2:`8`})]}),ke=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[4]};
`,Ae=h.p`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,je=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Me=h.label`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
`,Ne=h.span`
  color: ${({theme:e})=>e.colors.severity.critical.icon};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  line-height: 1.3;
  margin-top: ${({theme:e})=>e.spacing[1]};
`,Pe=h.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
`,Fe=h.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[4]}`};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  border: 1px solid ${({theme:e,$active:t})=>t?e.colors.text.primary:e.colors.border.default};
  background: ${({theme:e,$active:t})=>t?e.colors.background.sunken:e.colors.background.surface};
  color: ${({theme:e,$active:t})=>t?e.colors.text.primary:e.colors.text.secondary};

  &:hover {
    border-color: ${({theme:e})=>e.colors.border.strong};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:disabled:hover {
    border-color: ${({theme:e})=>e.colors.border.default};
  }
`,Ie=h.span`
  display: inline-flex;
  align-items: center;
`,Le=h.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
`,Re=h.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[4]}`};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  transition: ${({theme:e})=>e.transitions.fast};
  border: 1px solid ${({theme:e,$active:t})=>t?e.colors.text.primary:e.colors.border.default};
  background: ${({theme:e,$active:t})=>t?e.colors.background.sunken:e.colors.background.surface};
  color: ${({theme:e,$active:t})=>t?e.colors.text.primary:e.colors.text.secondary};
  cursor: ${({$disabled:e})=>e?`not-allowed`:`pointer`};
  opacity: ${({$disabled:e})=>e?.4:1};

  &:hover {
    border-color: ${({theme:e,$disabled:t})=>t?void 0:e.colors.border.strong};
  }
`,ze=h.div`
  flex: 1;
  display: flex;
  position: relative;

  &:hover > span {
    opacity: 1;
    visibility: visible;
  }
`,Be=h.span`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  padding: ${({theme:e})=>`${e.spacing[1]} ${e.spacing[3]}`};
  background: ${({theme:e})=>e.colors.text.primary};
  color: ${({theme:e})=>e.colors.text.inverse};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  white-space: normal;
  text-align: center;
  max-width: 180px;
  width: max-content;
  box-shadow: ${({theme:e})=>e.shadows.md};
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.1s ease;
  pointer-events: none;
  z-index: 10;
`,Ve=h.span`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
`,He=h.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]};
  background: ${({theme:e})=>e.colors.background.sunken};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,Ue=h.span`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.text.tertiary};
  margin-top: 2px;
`,We=h.p`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,Ge=h.a`
  color: ${({theme:e})=>e.colors.text.link};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,Ke=h.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,qe=({appName:e,isOpen:t,isLoading:r,onConfirm:i,onClose:o})=>{let[s,c]=(0,I.useState)(``),[l,u]=(0,I.useState)(!1),[d,f]=(0,I.useState)(!1),m=(0,I.useRef)(null),h=s===e,g=l&&s.length>0&&!h,_=(0,I.useCallback)(()=>{navigator.clipboard.writeText(e).then(()=>{f(!0),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>f(!1),1500)}).catch(()=>{})},[e]);(0,I.useEffect)(()=>()=>{m.current&&clearTimeout(m.current)},[]);let v=(0,I.useCallback)(()=>{c(``),u(!1),o()},[o]);return(0,R.jsx)(O,{open:t,onClose:v,width:560,title:`Delete ${e}`,children:(0,R.jsxs)(Je,{children:[(0,R.jsx)(Ye,{children:`This app and all associated analytics data will be permanently removed from UXCam. This action cannot be undone.`}),(0,R.jsxs)(Xe,{children:[(0,R.jsxs)(Ze,{children:[`Type`,` `,(0,R.jsxs)(Qe,{children:[e,(0,R.jsx)($e,{type:`button`,onClick:_,"aria-label":`Copy app name`,title:`Copy app name`,children:d?(0,R.jsx)(a,{size:11,"aria-hidden":`true`}):(0,R.jsx)(n,{size:11,"aria-hidden":`true`})})]}),` `,`to confirm deletion`]}),(0,R.jsx)(p,{type:`text`,placeholder:`Enter app name to confirm deletion`,value:s,onChange:e=>{c(e.target.value),l||u(!0)},className:g?`ds-input-error`:void 0,autoFocus:!0}),g&&(0,R.jsx)(et,{children:`The name you entered doesn't match the name of the app`})]}),(0,R.jsxs)(tt,{children:[(0,R.jsx)(k,{variant:`ghost`,type:`button`,onClick:v,disabled:r,children:`Cancel`}),(0,R.jsx)(k,{variant:`danger`,type:`button`,onClick:i,disabled:!h||r,children:r?`Deleting...`:`Delete`})]})]})})},Je=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Ye=h.p`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,Xe=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ze=h.p`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,Qe=h.strong`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
`,$e=h.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({theme:e})=>e.spacing[1]};
  padding: 0;
  background: none;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
  cursor: pointer;
  vertical-align: middle;
  transition: ${({theme:e})=>e.transitions.instant};

  &:hover {
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,et=h.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.severity.critical.text};
`,tt=h.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[3]};
  padding-top: ${({theme:e})=>e.spacing[2]};
`;function Q(e){let t=e?.permissions;return t?{canRename:!!t.can_rename,canChangeIcon:!!t.can_change_icon,canDelete:!!t.can_delete,canCreate:!!t.can_create}:{canRename:!1,canChangeIcon:!1,canDelete:!1,canCreate:!1}}function nt(e){return e?e.charAt(0).toUpperCase()+e.slice(1):`Unknown`}var rt={us:`US`,eu:`EU`,ae:`UAE`};function it(e){return typeof e!=`string`||!e.trim()?`—`:rt[e.trim().toLowerCase()]??e.toUpperCase()}var at=2*1024*1024,ot=new Set([`image/png`,`image/jpeg`,`image/pjpeg`]),st=()=>{let e=m(),{selectedOrgId:t,selectedAppId:n,orgDisplayName:r,setApp:i}=w(),a=A(t,n),p=T(t||null),h=b(t),_=y(t),C=S(t),E=x(t),{user:O,impersonation:te,adminAccessMode:ne}=v(),j=te?.active??!1,M=ie(O,j),N=ae(O,te,ne),P=O?.is_admin===!0,F=P&&!j,{search:L,setSearch:ue,createOpen:z,setCreateOpen:B}=ce(),[V,H]=(0,I.useState)(null),[U,W]=(0,I.useState)(null),G=(0,I.useMemo)(()=>p.data?.apps??[],[p.data?.apps]),K=p.data?.mri_feature??!1,q=p.data?.supported_regions??[`us`],J=(0,I.useCallback)((e,t)=>{h.mutate({appId:e,name:t},{onSuccess:()=>H({message:`App renamed`,variant:`success`}),onError:e=>H({message:e instanceof Error?e.message:`Rename failed`,variant:`error`})})},[h]),Y=(0,I.useCallback)((e,t)=>{if(!ot.has(t.type)){H({message:`Only JPG and PNG images are supported`,variant:`error`});return}if(t.size>at){H({message:`Image must be under 2MB`,variant:`error`});return}let n=new FileReader;n.onload=()=>{let t=n.result;if(typeof t!=`string`){H({message:`Could not read image`,variant:`error`});return}let r=t.split(`,`)[1];if(!r){H({message:`Could not read image`,variant:`error`});return}E.mutate({appId:e,imageFile:r},{onSuccess:()=>H({message:`Icon updated`,variant:`success`}),onError:e=>H({message:e instanceof Error?e.message:`Icon upload failed`,variant:`error`})})},n.onerror=()=>{H({message:`Could not read image`,variant:`error`})},n.readAsDataURL(t)},[E]),pe=(0,I.useCallback)(()=>{if(!U)return;let e=U.app_id;_.mutate({appId:e,name:U.name},{onSuccess:()=>{if(H({message:`App deleted`,variant:`success`}),W(null),e===n){let t=G.find(t=>t.app_id!==e)??null;i(t?t.app_id:null)}},onError:e=>H({message:e instanceof Error?e.message:`Delete failed`,variant:`error`})})},[U,_,n,G,i]),X=(0,I.useCallback)((t,n,r)=>{a.isBlocked||C.mutate({name:t,appType:n,region:r},{onSuccess:t=>{H({message:`App created`,variant:`success`}),B(!1),re(t?._id),se(t?._id,{setApp:i,navigate:e})},onError:e=>H({message:e instanceof Error?e.message:`Create failed`,variant:`error`})})},[C,a.isBlocked,B,i,e]),Z=(0,I.useCallback)(t=>{e(D.settingsEnvLeaf(t,`recording`))},[e]),me=(0,I.useMemo)(()=>{let e=[{id:`name`,accessorKey:`name`,header:`App`,size:260,cell:({row:e})=>(0,R.jsx)(fe,{app:e.original,canRename:!F&&Q(e.original).canRename,canChangeIcon:!P&&Q(e.original).canChangeIcon,onRename:J,onIconUpload:Y},e.original.app_id)},{id:`platform`,accessorFn:e=>nt(e.app_type),header:`Platform`,size:120},{id:`role`,accessorKey:`role`,header:`Role`,size:120,cell:({getValue:e})=>(0,R.jsx)(R.Fragment,{children:e()||`—`})},{id:`app_key`,header:`App key`,size:200,enableSorting:!1,cell:({row:e})=>(0,R.jsx)(de,{appId:e.original.app_id})}];return K&&e.push({id:`region`,accessorKey:`region`,header:`Data storage location`,size:120,enableSorting:!1,cell:({getValue:e})=>(0,R.jsx)(R.Fragment,{children:it(e())})}),e.push({id:`actions`,header:``,size:80,enableSorting:!1,cell:({row:e})=>(0,R.jsx)(le,{canDelete:Q(e.original).canDelete,deleteDisabledReason:M,onSettings:()=>Z(e.original.app_id),onDelete:()=>W(e.original)})}),e},[K,J,Y,Z,M,P,F]),he=(0,I.useMemo)(()=>G.some(e=>Q(e).canCreate),[G]),ge=(0,I.useMemo)(()=>{if(!L.trim())return G;let e=L.toLowerCase();return G.filter(t=>t.name.toLowerCase().includes(e))},[G,L]),_e=G.length>0?(0,R.jsxs)(ht,{children:[(0,R.jsx)(gt,{value:L,onChange:ue,placeholder:`Search apps...`,"aria-label":`Search apps`}),(0,R.jsxs)(_t,{children:[G.length,` apps`]}),he&&N?(0,R.jsx)(c,{delayDuration:300,children:(0,R.jsxs)(o,{children:[(0,R.jsx)(u,{asChild:!0,children:(0,R.jsx)(k,{size:`compact`,variant:`muted`,className:`cursor-not-allowed opacity-50`,"aria-disabled":`true`,children:`Create app`})}),(0,R.jsx)(s,{side:`top`,children:N})]})}):he?(0,R.jsx)(l,{active:a.isBlocked,reason:a.reason,children:(0,R.jsx)(k,{size:`compact`,variant:`muted`,onClick:()=>B(!0),disabled:a.isBlocked,children:`Create app`})}):null]}):void 0;if(p.isLoading)return(0,R.jsx)($,{children:(0,R.jsx)(oe,{children:(0,R.jsx)(ee,{width:`100%`,height:`120px`})})});if(p.error){let e=p.error instanceof Error?p.error.message:`Failed to load apps.`,t=p.error instanceof g?p.error.fallbackUrl:null;return(0,R.jsx)($,{children:(0,R.jsxs)(lt,{children:[(0,R.jsx)(ut,{children:e}),t&&(0,R.jsx)(dt,{href:t,target:`_blank`,rel:`noopener noreferrer`,children:`View in UXCam Dashboard`})]})})}return G.length===0?(0,R.jsxs)($,{children:[(0,R.jsxs)(ft,{children:[(0,R.jsx)(pt,{children:`No apps configured`}),(0,R.jsx)(mt,{children:`Create an app to start analyzing user sessions.`})]}),(0,R.jsx)(Te,{isOpen:z,isLoading:C.isPending,orgName:r||void 0,mriFeature:K,supportedRegions:q,disabledReason:N,onConfirm:X,onClose:()=>B(!1)})]}):(0,R.jsxs)($,{children:[(0,R.jsx)(oe,{action:_e,noBorder:!0,children:(0,R.jsx)(ct,{children:(0,R.jsx)(f,{data:ge,columns:me,enableSorting:!0,initialSorting:[{id:`name`,desc:!1}],enablePagination:!1,emptyMessage:`No apps match your search.`})})}),(0,R.jsx)(qe,{appName:U?.name??``,isOpen:!!U,isLoading:_.isPending,onConfirm:pe,onClose:()=>W(null)}),(0,R.jsx)(Te,{isOpen:z,isLoading:C.isPending,mriFeature:K,supportedRegions:q,disabledReason:N,onConfirm:X,onClose:()=>B(!1)}),V&&(0,R.jsx)(d,{message:V.message,variant:V.variant,onDismiss:()=>H(null)})]})},$=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,ct=h(P)`
  th:nth-child(1), td:nth-child(1) { width: 18% !important; }
  th:nth-child(2), td:nth-child(2) { width: 8% !important; }
  th:nth-child(3), td:nth-child(3) { width: 8% !important; }
  th:nth-child(4), td:nth-child(4) { width: 18% !important; }
  th:nth-child(5), td:nth-child(5) { width: 10% !important; }
  th:nth-child(6), td:nth-child(6) { width: 8% !important; }
`,lt=h.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[6]};
`,ut=h.p`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,dt=h.a`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.link};
  text-decoration: none;
`,ft=h.div`
  display: grid;
  place-items: center;
  text-align: center;
  padding: ${({theme:e})=>`${e.spacing[8]} 0`};
  gap: ${({theme:e})=>e.spacing[3]};
`,pt=h.h3`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
`,mt=h.p`
  margin: 0;
  max-width: 320px;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,ht=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex: 1;
  width: 100%;
  justify-content: flex-end;
`,gt=h(N)`
  flex: 0 1 320px;
  min-width: 0;
  max-width: 360px;
`,_t=h.div`
  flex-shrink: 0;
  margin-right: auto;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`;h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-shrink: 0;
`,h(N)`
  width: 240px;
`;var vt=({children:e})=>{let[t,n]=M(),[r,i]=(0,I.useState)(``),[a,o]=(0,I.useState)(!1);(0,I.useEffect)(()=>{t.get(`action`)===`create`&&(o(!0),n({action:void 0},{replace:!0}))},[t,n]);let s=(0,I.useMemo)(()=>({search:r,setSearch:i,createOpen:a,setCreateOpen:o}),[r,a]);return(0,R.jsx)(L.Provider,{value:s,children:e})},yt=()=>(0,R.jsxs)(te,{children:[(0,R.jsx)(ne,{title:`Apps`,description:`Create and manage the apps in this organization.`}),(0,R.jsx)(vt,{children:(0,R.jsx)(st,{})})]});export{yt as AppsSettingsPage,yt as default};