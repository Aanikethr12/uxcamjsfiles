import{D as e,E as t,T as n}from"./ui-vendor-CUROeZIN.js";var r=({theme:e})=>`var(--color-surface-card, ${e.colors.background.surface})`,i=({theme:e})=>`color-mix(in srgb, var(--primary) 5%, var(--color-surface-card, ${e.colors.background.surface}))`,a=t`
  color: ${({theme:e})=>`var(--text-3, ${e.colors.text.tertiary})`};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`,o=t`
  position: relative;
  flex: 1;
  min-height: 0;
  padding: ${4}px;
  border: 1px solid ${({theme:e})=>`var(--border, ${e.colors.border.default})`};
  border-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
  background: ${({theme:e})=>`var(--muted, ${e.colors.background.sunken})`};
`;t`
  overflow: hidden;
  border-radius: var(--radius, ${({theme:e})=>e.borderRadius.default});
  background: ${r};
`;var s=t`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  line-height: 1.2;
  text-transform: uppercase;
  color: ${({theme:e})=>`var(--text-2, ${e.colors.text.primary})`};
`,c=t`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 10px;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  background: ${({theme:e})=>`var(--muted, ${e.colors.background.sunken})`};
  color: ${({theme:e})=>`var(--foreground, ${e.colors.text.primary})`};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background-color 120ms ease,
    border-color 120ms ease,
    color 120ms ease;

  &:hover,
  &:focus-visible {
    background: var(--color-slate-900, #0f172a);
    border-color: var(--color-slate-900, #0f172a);
    color: #ffffff;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--ring);
  }
`,l=t`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 20;
  overflow: hidden;
  background: transparent;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({theme:e})=>e.colors.uxcam.indigo[400]} 50%,
      transparent 100%
    );
    background-size: 240% 100%;
    animation: ${n`
  from {
    background-position: 120% 0;
  }
  to {
    background-position: -120% 0;
  }
`} 1.1s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
      background: ${({theme:e})=>e.colors.uxcam.indigo[400]};
    }
  }
`,u=e.div`
  ${l}
`,d=t`
  position: sticky;
  left: 0;
  padding: 0 ${({theme:e})=>e.spacing[6]};
  background: ${({theme:e})=>`var(--background, ${e.colors.background.canvas})`};
`;export{c as a,o as c,l as i,s as l,u as n,r as o,a as r,i as s,d as t};