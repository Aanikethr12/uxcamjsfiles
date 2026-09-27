import{D as e}from"./ui-vendor-CUROeZIN.js";function t(e,t){return`
    grid-template-columns: repeat(${e}, minmax(0, 1fr));

    > * {
      border-right: 1px solid ${t};
      border-top: none;
    }

    > *:nth-child(${e}n) {
      border-right: none;
    }

    > *:nth-child(n + ${e+1}) {
      border-top: 1px solid ${t};
    }

    > *:last-child {
      border-right: none;
    }
  `}var n=e.div`
  display: grid;
  grid-template-columns: repeat(${({$columns:e=4})=>e}, minmax(0, 1fr));
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.background.surface};
  box-shadow: ${({theme:e})=>e.shadows.sm};

  /* Strip card-surface styling from direct children AND their immediate
     children. Some consumers (e.g. SessionsKpiStrip) wrap NumberCard in
     a positioning div (CardShell), so the actual card (ds/Card) is a grandchild.
     Without also targeting grandchildren, the card keeps its own border-radius,
     border, and box-shadow -- causing visible corner artifacts/gaps. */
  > *,
  > * > * {
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    animation: none !important;
  }

  /* Structural dividers: direct children only (grid cells). */
  > * {
    border-right: 1px solid ${({theme:e})=>e.colors.border.subtle} !important;

    &:last-child {
      border-right: none !important;
    }
  }

  /* Cards beyond the first row get a top divider */
  > *:nth-child(n + ${({$columns:e=4})=>e+1}) {
    border-top: 1px solid ${({theme:e})=>e.colors.border.subtle};
  }

  /* Last card in each full-width row loses right border */
  > *:nth-child(${({$columns:e=4})=>e}n) {
    border-right: none;
  }

  /* ── Responsive: 3 columns at <=1320px ── */
  @media (max-width: 1320px) {
    ${({theme:e})=>t(3,e.colors.border.subtle)}
  }

  /* ── Responsive: 2 columns at <=900px ── */
  @media (max-width: 900px) {
    ${({theme:e})=>t(2,e.colors.border.subtle)}
  }

  /* ── Responsive: 1 column (stacked) at <=640px ── */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;

    > * {
      border-right: none;
    }

    > * + * {
      border-top: 1px solid ${({theme:e})=>e.colors.border.subtle};
    }
  }
`;export{n as t};