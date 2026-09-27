import{D as e}from"./ui-vendor-CUROeZIN.js";var t=e.div.attrs({role:`table`})`
  border: 1px solid var(--color-slate-200);
  border-radius: var(--radius-md);
  overflow: hidden;
`,n=e.div.attrs({role:`row`})`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: 0 ${({theme:e})=>e.spacing[4]};
  height: 40px;
  align-items: center;
  background: var(--muted);
  border-bottom: 1px solid var(--color-slate-200);
  font-family: var(--font-sans);
`,r=e.div.attrs({role:`row`})`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: center;
  padding: 0 ${({theme:e})=>e.spacing[4]};
  height: 53px;
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--muted-foreground);
  border-bottom: 1px solid var(--color-slate-200);
  transition: background-color 100ms ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: var(--color-slate-50);
  }
`,i=e.div.attrs({role:`columnheader`})`
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--muted-foreground);
  text-transform: none;
  letter-spacing: 0;
  text-align: ${({$align:e=`left`})=>e};
`;export{r as i,n,i as r,t};