import{a as e}from"./rolldown-runtime-C5Y2Ol-c.js";import{$r as t,Kr as n}from"./icons-vendor-C23rQ2ix.js";import{Pt as r}from"./ds-BJhQ4zht.js";import{n as i,u as a}from"./router-vendor-DDSrk2O2.js";import{D as o}from"./ui-vendor-CUROeZIN.js";import{O as s}from"./markdown-vendor-BoH6QLuc.js";import{dt as c,n as l}from"./NavigationContext-DTwRip-h.js";import{x as u}from"./animations-D6JAIVtz.js";import{n as d}from"./TaraChatContext-Ne5fUqNv.js";import{t as f}from"./useSubscriptionGate-BclSWIGQ.js";import{t as p}from"./TaraBrandMark-B2v8yjXU.js";import{qt as m}from"./index-rXoDQG7j.js";var h=e(t(),1),g=s();function _(e){let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return`hsl(${Math.abs(t)%360}, 55%, 45%)`}var v={"/":{group:`Core`,page:`Home`},"/analytics":{group:``,page:`Analytics`},"/analytics/dashboards":{group:`Analytics`,page:`Dashboards`},"/analytics/reports":{group:`Analytics`,page:`Reports`},"/reviews":{group:`Explore`,page:`Reviews`},"/sessions":{group:`Evidence`,page:`Sessions`},"/screens":{group:`Screens`,page:`List`},"/users":{group:`Evidence`,page:`Users`},"/events":{group:`Evidence`,page:`Events`},"/notes":{group:`Explore`,page:`Notes`},"/stability":{group:`Evidence`,page:`Stability`},"/funnels":{group:`Evidence`,page:`Funnels`},"/retention":{group:`Evidence`,page:`Retention`},"/admin-debug":{group:`Internal`,page:`Debug`},"/internal-analytics":{group:`Internal`,page:`Analytics`},"/internal-ai-costs":{group:`Internal`,page:`AI Costs`},"/whats-new":{group:``,page:`What's New`},"/settings":{group:`Settings`,page:`Settings`}};function y(e){let t=u(e);if(v[t])return v[t];let n=`/`+t.split(`/`)[1];return v[n]?{...v[n],page:v[n].page}:{group:``,page:`Page`}}var b=({entry:e})=>{let[t,n]=h.useState(!1);if(!e.avatar)return(0,g.jsx)(g.Fragment,{children:e.group});let r=(e.avatar.iconFallback||e.group?.[0]||`?`).charAt(0).toUpperCase();return(0,g.jsxs)(g.Fragment,{children:[e.avatar.iconUrl&&!t?(0,g.jsx)(P,{src:e.avatar.iconUrl,alt:``,onError:()=>n(!0)}):(0,g.jsx)(F,{$bg:_(e.group||r),children:r}),e.group]})},x=({className:e})=>{let{openDrawer:t,drawerMode:n}=d(),{pathname:i}=a(),{selectedOrgId:o,selectedAppId:s}=l(),u=f(o,s),_=h.useRef(null);return n===`extended`||c(i)?null:(0,g.jsx)(r,{active:u.isBlocked,reason:u.reason,children:(0,g.jsxs)(z,{ref:_,type:`button`,onClick:()=>{u.isBlocked||t(``)},disabled:u.isBlocked,className:e,children:[(0,g.jsx)(m,{hostRef:_,fromColor:`var(--color-workbench-blue)`,toColor:`var(--color-workbench-green)`}),(0,g.jsx)(p,{size:16,idSuffix:`explorer-ask-tara`}),`Ask Tara`]})})},S=({children:e,breadcrumb:t,backHref:r,hideAskTara:i,hideTopbar:o,topbarActions:s,borderlessTopbar:c,hideBreadcrumb:l,rightRail:u,rightRailCollapsed:d=!1,rightRailWidth:f=420,rightRailNarrowWidth:p=380,lockPageScroll:m=!1})=>{let{pathname:h}=a(),_=t??y(h),v=!!_.group;return(0,g.jsxs)(C,{"data-explorer-layout":`true`,children:[(0,g.jsxs)(w,{$lockPageScroll:m,children:[o?null:(0,g.jsxs)(E,{$borderless:c,children:[(0,g.jsx)(`h1`,{className:`sr-only`,children:_.trailing||_.page}),(0,g.jsxs)(D,{children:[r?(0,g.jsx)(O,{to:r,"aria-label":`Back to list`,children:(0,g.jsx)(n,{"aria-hidden":`true`})}):null,l?null:(0,g.jsxs)(k,{children:[v&&(0,g.jsxs)(g.Fragment,{children:[_.groupHref?(0,g.jsx)(M,{to:_.groupHref,children:(0,g.jsx)(b,{entry:_})}):(0,g.jsx)(j,{children:(0,g.jsx)(b,{entry:_})}),(0,g.jsx)(N,{"aria-hidden":`true`,children:`/`})]}),_.trailing?(0,g.jsxs)(g.Fragment,{children:[_.pageHref?(0,g.jsx)(M,{to:_.pageHref,children:_.page}):(0,g.jsx)(j,{children:_.page}),(0,g.jsx)(N,{"aria-hidden":`true`,children:`/`}),(0,g.jsxs)(I,{children:[_.pageIcon?(0,g.jsx)(R,{"aria-hidden":`true`,children:_.pageIcon}):null,(0,g.jsx)(L,{children:_.trailing})]})]}):(0,g.jsxs)(I,{children:[_.pageIcon?(0,g.jsx)(R,{"aria-hidden":`true`,children:_.pageIcon}):null,(0,g.jsx)(L,{children:_.page})]})]})]}),(0,g.jsxs)(A,{children:[s,!i&&(0,g.jsx)(x,{})]})]}),e]}),u?(0,g.jsx)(T,{"data-explorer-right-rail":`true`,$collapsed:d,$width:f,$narrowWidth:p,children:u}):null]})},C=o.div`
  --explorer-pagination-safe-area: 180px;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
`,w=o.div`
  flex: 1;
  min-width: 0;
  min-height: 0;
  height: 100%;
  overflow-y: ${({$lockPageScroll:e})=>e?`hidden`:`auto`};
  overscroll-behavior-y: contain;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.background.canvas};
`,T=o.aside`
  --drawer-column-width: ${({$width:e})=>e}px;
  width: ${({$collapsed:e,$width:t})=>e?0:t}px;
  flex: 0 0 auto;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  background: ${({theme:e})=>e.colors.background.surface};
  transition: width 180ms ease;

  @media (max-width: 1440px) {
    --drawer-column-width: ${({$narrowWidth:e})=>e}px;
    width: ${({$collapsed:e,$narrowWidth:t})=>e?0:t}px;
  }

  @media (max-width: 1023px) {
    --drawer-column-width: 0px;
    width: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,E=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: ${({theme:e,$borderless:t})=>t?`none`:`1px solid ${e.colors.border.default}`};
  height: 56px;
  min-height: 56px;
  flex-shrink: 0;
  /* Sticky on BOTH axes. left:0 keeps the topbar anchored to the
     PageContent's visible left edge when a wide child (e.g. Sessions'
     wide table) makes PageContent scroll horizontally, otherwise the
     breadcrumb / Workbench button drift sideways with the table scroll. */
  position: sticky;
  top: 0;
  left: 0;
  z-index: 20;
  background: var(--background);
`,D=o.div`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 10px;
`,O=o(i)`
  display: inline-flex;
  width: 32px;
  height: 32px;
  /* Optically align the arrow glyph with the topbar's 24px content edge —
     the 32px hit area centers a 16px icon, leaving 8px of visual inset. */
  margin-left: -8px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: var(--muted-foreground);
  text-decoration: none;
  transition: background 80ms ease, color 80ms ease;

  svg {
    width: 16px;
    height: 16px;
    stroke-width: 2;
  }

  &:hover {
    background: var(--muted);
    color: var(--foreground);
  }

  &:focus-visible {
    outline: 2px solid var(--foreground);
    outline-offset: 2px;
  }
`,k=o.nav`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 8px;
  font-size: 12px;
  line-height: 1.25;
`,A=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,j=o.span`
  color: var(--muted-foreground);
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
`,M=o(i)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--muted-foreground);
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--foreground);
  }

  &:focus-visible {
    outline: 2px solid var(--foreground);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }
`,N=o.span`
  display: inline-flex;
  align-items: center;
  padding: 0 2px;
  color: var(--muted-foreground, #71717A);
  font-size: 12px;
`,P=o.img`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
`,F=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background: ${({$bg:e})=>e};
  color: ${({theme:e})=>e.colors.text.inverse};
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  flex-shrink: 0;
`,I=o.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  color: var(--foreground, #09090B);
  font-weight: 600;
  /* The crumb is a flex child of Breadcrumb (min-width: 0), so it shrinks below
     its own content. Without nowrap a two-word entity name broke at the space
     and dropped onto a second line inside the 56px topbar — a name on two lines
     reads as two names. It ellipses instead. */
  white-space: nowrap;
  overflow: hidden;
`,L=o.span`
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,R=o.span`
  display: inline-flex;
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: var(--muted-foreground);

  svg {
    width: 14px;
    height: 14px;
    stroke-width: 1.9;
  }
`,z=o.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 14px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: 13px;
  font-weight: 500;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text.primary};
  transition: background 80ms, box-shadow 120ms ease;
  border: 1px solid transparent;
  background-image: linear-gradient(
      var(--color-workbench-surface),
      var(--color-workbench-surface)
    ),
    var(--workbench-gradient-muted);
  background-origin: border-box;
  background-clip: padding-box, border-box;

  /* Anchor for the TaraHoverSweep border-glint overlay. */
  position: relative;

  &:hover {
    background-image: linear-gradient(
        var(--color-workbench-surface-hover),
        var(--color-workbench-surface-hover)
      ),
      var(--workbench-gradient);
    box-shadow: 0 1px 4px color-mix(in oklab, var(--color-workbench-blue) 18%, transparent);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg { width: 16px; height: 16px; flex-shrink: 0; }

  /* The sweep ring must keep its measured size — exempt it (and its paths)
     from the 16px icon sizing above. */
  svg.ask-tara-sweep-ring { width: auto; height: auto; }
`;export{S as n,x as t};