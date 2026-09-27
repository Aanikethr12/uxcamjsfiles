import{D as e}from"./ui-vendor-CUROeZIN.js";var t=e.div`
  /* TableContainer: match session table container style.
     Specificity (.wrap > div) = (0,1,1) > TableContainer class (0,1,0) */
  > div {
    border: 1px solid var(--color-slate-200);
    background: transparent;
    border-radius: var(--radius-md);
    max-height: none;
    height: auto;
    overflow: hidden;
  }

  /* TableWrapper: strip overflow and min-height.
     Specificity (.wrap > div > div) = (0,1,2) > TableWrapper class (0,1,0) */
  > div > div {
    overflow: visible;
    min-height: 0;
  }

  /* Disable sticky thead.
     Specificity (.wrap thead) = (0,1,1) > TableHeader class (0,1,0) */
  thead {
    position: static;
    border-bottom: none;
    background: transparent;
  }

  /* Header cells — comfortable density, matches sessions table.
     Specificity (.wrap th) = (0,1,1) > TableHeaderCell class (0,1,0) */
  th {
    background: var(--muted);
    border: none;
    border-bottom: 1px solid var(--color-slate-200);
    padding: 0 16px;
    height: 40px;
    font-family: var(--font-sans);
    font-size: 13px;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 0;
    color: var(--muted-foreground);
    transition: ${({theme:e})=>e.transitions.fast};

    /* Neutralize Table.tsx sortable-header hover (background.hover).
       Header stays muted; only text color shifts on hover. */
    &:hover {
      background: var(--muted);
      color: var(--foreground);
    }
  }

  /* Sort arrow — matches session table InteractiveHeaderCell pattern. */
  th span {
    font-size: 11px;
    line-height: 1;
    opacity: 1;
    color: var(--foreground);
  }

  /* Data cells — secondary baseline (13px / muted-foreground) matching the
     session table's DurationText / SessionUserText. Primary cells (names)
     override to 14px / --foreground / weight 500 individually. */
  td {
    vertical-align: middle;
    border: none;
    border-bottom: 1px solid var(--color-slate-200);
    padding: 0 16px;
    height: 53px;
    font-family: var(--font-sans);
    font-size: 13px;
    color: var(--muted-foreground);
  }

  /* Fixed-layout table so column widths are respected. */
  table {
    table-layout: fixed;
    width: 100%;
  }

  /* Row hover — matches sessions row hover. */
  tbody tr {
    transition: background-color 100ms ease;

    &:hover {
      background: var(--color-slate-50);
    }
  }
`;export{t};