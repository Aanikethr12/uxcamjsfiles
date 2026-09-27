"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7447],{
  27447:function(e,s,i){
    i.r(s);
    var r=i(85893),
    t=i(67294),
    l=i(62357),
    a=i(39284),
    n=i(74936),
    o=i(14416),
    c=i(47639),
    p=i(18879),
    d=i(41371);
    s.default=e=>{
      let{
        isVisible_custom_popup:s,
        handleCsrfAndQuoteModelVisible:i
      }=e,
      m=(0,o.I0)(),
      {
        modalMessage:u
      }=(0,o.v9)(e=>e.commonReducer),
      {
        setShowPricingModal:h
      }=(0,d.I)();
      return(0,t.useEffect)(()=>{
        let e=setTimeout(()=>{
          m((0,c.Ap)("isVisible_custom_popup",!1,"..."))
        },5e3);
        return()=>{
          clearTimeout(e)
        }
      },[]),
      (0,r.jsxs)(a.default,{
        wrapClassName:"app-restriction-modal",
        style:{
          top:10
        },
        mask:!1,
        className:u?"limit-message-box":"message-on-modal",
        visible:s,
        onCancel:()=>m((0,c.Ap)("isVisible_custom_popup",!1,"...")),
        footer:null,
        children:[u?(0,r.jsxs)(r.Fragment,{
          children:[(0,r.jsx)("div",{
            className:"modal-body",
            style:{
              padding:0
            },
            children:(0,r.jsx)("span",{
              children:u
            })
          }),(0,r.jsx)("div",{
            className:"modal-footer",
            children:(0,r.jsxs)("div",{
              className:"btn-wrapper",
              children:[(0,r.jsx)(n.Z,{
                onClick:async e=>{
                  i(e),
                  m((0,c.Ap)("isVisible_custom_popup",!1,"...")),
                  h(!0)
                },
                type:"primary",
                style:{
                  width:130
                },
                children:"Request Upgrade"
              }),(0,r.jsx)(n.Z,{
                onClick:()=>m((0,c.Ap)("isVisible_custom_popup",!1,"...")),
                type:"primary",
                children:"Got it"
              })]
            })
          })]
        }):(0,r.jsxs)(r.Fragment,{
          children:[(0,r.jsx)("div",{
            className:"message-icon",
            children:(0,r.jsx)(l.Z,{})
          }),(0,r.jsx)("p",{
            className:"error-title",
            style:{
              marginBottom:"5px"
            },
            children:(0,r.jsx)("strong",{
              children:"Google reCaptcha reported suspicious activity on this page."
            })
          }),(0,r.jsxs)("p",{
            children:["Please try again in a few minutes or different browser or device. Get in touch with",(0,r.jsx)("br",{}),(0,r.jsx)("a",{
              href:"#!",
              onClick:()=>(0,p.aL)(),
              children:"our team"
            })," if the issue persists."]
          })]
        }),(0,r.jsx)("style",{
          children:"\n      .modal-footer {\n        display: flex;\n      }\n    "
        })]
      })
    }
  }
}]);