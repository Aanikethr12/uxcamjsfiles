"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1237],{
  21237:function(e,t,r){
    r.d(t,{
      o:function(){
        return Q
      },
      Z:function(){
        return A
      }
    });
    var n=r(85893),
    a=r(67294),
    l=r(14416),
    s=r(87536),
    i=r(79870),
    o=r(83423),
    u=r(80432),
    d=r(72654),
    m=r(74936),
    c=r(39284),
    p=r(68432),
    v=r(41371),
    f=r(30663),
    b=r(19521);
    let h=b.default.h2.withConfig({
      componentId:"sc-ecba63bf-0"
    })(["font-family:'Roboto';font-style:normal;font-weight:500;font-size:18px;line-height:24px;color:#161E35;margin-bottom:16px;"]),
    g=b.default.div.withConfig({
      componentId:"sc-ecba63bf-1"
    })(['.ant-form-item-label{margin:0 !important;padding:0;label{font-size:12px;line-height:24px;font-weight:400;&:before{display:none !important;}&:after{display:none !important;}}}textarea.ant-input{height:unset;}.ant-input-number-input-wrap,.ant-input-number{width:100%;}input.ant-input,.ant-input-number,.ant-select-selector{border-radius:6px !important;border-color:#E8E8EB !important;}.ant-select-selector{height:28px !important;}input[type="search"]{height:26px !important;}input:not([type="search"]){height:28px !important;padding:0 10px !important;font-size:12px !important;}.ant-form-item{margin-bottom:24px}.ant-select-selection-item{font-size:12px !important;line-height:26px !important;}.ant-form-item-explain-error{font-size:12px;line-height:1rem;margin-top:2px;}']),
    y=b.default.div.withConfig({
      componentId:"sc-ecba63bf-2"
    })(["display:flex;justify-content:flex-end;gap:16px;button.ant-btn-link{font-size:14px;line-height:24px;font-weight:500;color:#5D97FF;border:unset;&:hover{color:#4A79CC;}}button.ant-btn-primary{font-weight:400;font-size:14px;line-height:24px;color:#FFFFFF;padding:4px 29px;background-color:#5D97FF;border-radius:6px;cursor:pointer;border:none;outline:none;width:fit-content;transition:all 0.2s ease-in-out;&:hover{background-color:#4A79CC;}}"]),
    x=b.default.div.withConfig({
      componentId:"sc-ecba63bf-3"
    })(["display:flex;gap:24px;width:100%;.ant-row{flex:1;min-width:0;}&:has(.ant-row:only-child) .ant-row{flex-basis:100%;}.ant-row:only-child{flex-basis:100%;}"]),
    {
      Option:w
    }=i.default,
    {
      TextArea:j
    }=o.default,
    N=[{
      value:"Less than 50K"
    },{
      value:"50K - 100K"
    },{
      value:"100K - 250K"
    },{
      value:"250K - 500K"
    },{
      value:"500K - 1M"
    },{
      value:"1M - 2M"
    },{
      value:"More than 2M"
    }],
    S={
      sessionQuantity:{
        required:!0,
        visible:!0,
        title:"Estimated monthly sessions",
        defaultValue:""
      },
      webSessionQuantity:{
        required:!1,
        visible:!1,
        title:"Estimated monthly sessions for web",
        defaultValue:""
      },
      customerName:{
        required:!0,
        visible:!0,
        title:"Your name",
        defaultValue:""
      },
      emailAddress:{
        required:!0,
        visible:!0,
        title:"Email address",
        defaultValue:""
      },
      companyName:{
        required:!0,
        visible:!0,
        title:"Company name",
        defaultValue:""
      },
      phoneNumber:{
        required:!0,
        visible:!0,
        title:"Phone number",
        defaultValue:""
      },
      numberOfApps:{
        required:!0,
        visible:!0,
        title:"Number of apps you want to track",
        defaultValue:""
      },
      numberOfUsers:{
        required:!0,
        visible:!0,
        title:"Number of seats required",
        defaultValue:""
      },
      message:{
        required:!1,
        visible:!0,
        title:"Message (optional)",
        defaultValue:""
      }
    },
    q=(e,t)=>{
      if(!t)return e;
      let r={};
      return Object.keys(e).forEach(n=>{
        let a=e[n],
        l=t[n];
        l?r[n]={
          ...a,
          ...l
        }:r[n]=a
      }),
      r
    },
    Q=(0,a.memo)(e=>{
      let{
        onCancel:t,
        showCancelButton:r=!0,
        fieldConfig:c,
        onSubmitSuccess:b,
        onSubmitError:Q,
        className:A="",
        showTitle:C=!0,
        triggerTitle:O="Request pricing"
      }=e,
      Z=(0,a.useMemo)(()=>q(S,c),[c]),
      {
        currentOrgReducer:k
      }=(0,l.v9)(e=>e),
      I=(0,l.I0)(),
      P=(0,v.I)(),
      {
        orgId:V
      }=k,
      [E,F]=(0,a.useState)(!1),
      U=(0,a.useMemo)(()=>{
        var e,
        t,
        r,
        n,
        a,
        l,
        s,
        i,
        o;
        return{
          sessionQuantity:(null===(e=Z.sessionQuantity)||void 0===e?void 0:e.defaultValue)||"",
          webSessionQuantity:(null===(t=Z.webSessionQuantity)||void 0===t?void 0:t.defaultValue)||"",
          customerName:(null===(r=Z.customerName)||void 0===r?void 0:r.defaultValue)||"",
          emailAddress:(null===(n=Z.emailAddress)||void 0===n?void 0:n.defaultValue)||"",
          companyName:(null===(a=Z.companyName)||void 0===a?void 0:a.defaultValue)||"",
          phoneNumber:(null===(l=Z.phoneNumber)||void 0===l?void 0:l.defaultValue)||"",
          numberOfApps:(null===(s=Z.numberOfApps)||void 0===s?void 0:s.defaultValue)||"",
          numberOfUsers:(null===(i=Z.numberOfUsers)||void 0===i?void 0:i.defaultValue)||"",
          message:(null===(o=Z.message)||void 0===o?void 0:o.defaultValue)||""
        }
      },[Z]),
      {
        control:_,
        handleSubmit:R,
        reset:M,
        setError:z,
        formState:{
          errors:K
        }
      }=(0,s.cI)({
        defaultValues:U
      }),
      W=(0,a.useCallback)(async e=>{
        F(!0);
        try{
          let n=await I((0,p.SM)(V,e));
          if(F(!1),n.error){
            if(n.error.emailAddress&&n.error.emailAddress.length)z("emailAddress",{
              type:"manual",
              message:"Please enter valid work email"
            });
            else{
              if(!n.success){
                var r;
                u.ZP.error((null===(r=n.error)||void 0===r?void 0:r.message)||"An error occurred")
              }
              Q?Q(n.error):t&&t()
            }
          }
          else{
            M(),
            (null==n?void 0:n.message)&&u.ZP.success(n.message);
            let r=e.sessionQuantity&&""!==e.sessionQuantity.trim(),
            a=e.webSessionQuantity&&""!==e.webSessionQuantity.trim(),
            l=(null==P?void 0:P.selfServeFlag)?"enabled":"disabled";
            I((0,f.CW)(null,{
              eventName:"wa_pricing_request_submitted",
              track_type:"event",
              eventProperty:{
                self_serve_status:l,
                chosen_platform:r&&a?"Mobile, Web":""
              }
            })),
            b?b(n):t&&t()
          }
        }
        catch(e){
          F(!1),
          Q&&Q(e)
        }
      },[I,V,z,Q,t,M,null==P?void 0:P.selfServeFlag,b]),
      $=(e,t,r)=>(null==t?void 0:t.visible)?r():null,
      D=function(e){
        let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},
        r=Z[e],
        n={
          ...t
        };
        return(null==r?void 0:r.required)&&(n.required=t.required||"Please enter ".concat(e.replace(/([A-Z])/g," $1").toLowerCase())),
        n
      };
      return(0,n.jsx)(g,{
        children:(0,n.jsxs)("div",{
          className:A,
          children:[C&&(0,n.jsx)(h,{
            children:"Request pricing"
          }),(0,n.jsxs)(d.Z,{
            layout:"vertical",
            onFinish:R(W),
            children:[$("sessionQuantity",Z.sessionQuantity,()=>{
              var e,
              t,
              r;
              return(0,n.jsx)(d.Z.Item,{
                label:null===(e=Z.sessionQuantity)||void 0===e?void 0:e.title,
                validateStatus:K.sessionQuantity?"error":"",
                help:null===(t=K.sessionQuantity)||void 0===t?void 0:t.message,
                children:(0,n.jsx)(s.Qr,{
                  name:"sessionQuantity",
                  control:_,
                  rules:D("sessionQuantity",{
                    required:null!==(r=Z.sessionQuantity)&&void 0!==r&&!!r.required&&"Please select number of monthly sessions"
                  }),
                  render:e=>{
                    let{
                      field:t
                    }=e;
                    return(0,n.jsx)(i.default,{
                      ...t,
                      getPopupContainer:e=>e.parentNode,
                      showSearch:!0,
                      placeholder:"Select number of sessions",
                      dropdownClassName:"modal-dropdown",
                      children:N.map(e=>(0,n.jsx)(w,{
                        value:e.value,
                        children:e.value
                      },e.value))
                    })
                  }
                })
              })
            }),$("webSessionQuantity",Z.webSessionQuantity,()=>{
              var e,
              t,
              r;
              return(0,n.jsx)(d.Z.Item,{
                label:null===(e=Z.webSessionQuantity)||void 0===e?void 0:e.title,
                validateStatus:K.webSessionQuantity?"error":"",
                help:null===(t=K.webSessionQuantity)||void 0===t?void 0:t.message,
                children:(0,n.jsx)(s.Qr,{
                  name:"webSessionQuantity",
                  control:_,
                  rules:D("webSessionQuantity",{
                    required:null!==(r=Z.webSessionQuantity)&&void 0!==r&&!!r.required&&"Please select number of web sessions"
                  }),
                  render:e=>{
                    let{
                      field:t
                    }=e;
                    return(0,n.jsx)(i.default,{
                      ...t,
                      showSearch:!0,
                      getPopupContainer:e=>e.parentNode,
                      placeholder:"Select number of web sessions",
                      dropdownClassName:"modal-dropdown",
                      children:N.map(e=>(0,n.jsx)(w,{
                        value:e.value,
                        children:e.value
                      },e.value))
                    })
                  }
                })
              })
            }),(0,n.jsxs)(x,{
              children:[$("customerName",Z.customerName,()=>{
                var e,
                t,
                r;
                return(0,n.jsx)(d.Z.Item,{
                  label:null===(e=Z.customerName)||void 0===e?void 0:e.title,
                  validateStatus:K.customerName?"error":"",
                  help:null===(t=K.customerName)||void 0===t?void 0:t.message,
                  children:(0,n.jsx)(s.Qr,{
                    name:"customerName",
                    control:_,
                    rules:D("customerName",{
                      required:null!==(r=Z.customerName)&&void 0!==r&&!!r.required&&"Please enter your name"
                    }),
                    render:e=>{
                      let{
                        field:t
                      }=e;
                      return(0,n.jsx)(o.default,{
                        ...t,
                        maxLength:255,
                        placeholder:"Enter your name"
                      })
                    }
                  })
                })
              }),$("emailAddress",Z.emailAddress,()=>{
                var e,
                t,
                r;
                return(0,n.jsx)(d.Z.Item,{
                  label:null===(e=Z.emailAddress)||void 0===e?void 0:e.title,
                  validateStatus:K.emailAddress?"error":"",
                  help:null===(t=K.emailAddress)||void 0===t?void 0:t.message,
                  children:(0,n.jsx)(s.Qr,{
                    name:"emailAddress",
                    control:_,
                    rules:D("emailAddress",{
                      required:null!==(r=Z.emailAddress)&&void 0!==r&&!!r.required&&"Please enter your email address",
                      pattern:{
                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message:"Please enter a valid email address"
                      }
                    }),
                    render:e=>{
                      let{
                        field:t
                      }=e;
                      return(0,n.jsx)(o.default,{
                        ...t,
                        type:"email",
                        placeholder:"Enter your work email"
                      })
                    }
                  })
                })
              })]
            }),(0,n.jsxs)(x,{
              children:[$("companyName",Z.companyName,()=>{
                var e,
                t,
                r;
                return(0,n.jsx)(d.Z.Item,{
                  label:null===(e=Z.companyName)||void 0===e?void 0:e.title,
                  validateStatus:K.companyName?"error":"",
                  help:null===(t=K.companyName)||void 0===t?void 0:t.message,
                  children:(0,n.jsx)(s.Qr,{
                    name:"companyName",
                    control:_,
                    rules:D("companyName",{
                      required:null!==(r=Z.companyName)&&void 0!==r&&!!r.required&&"Please enter your company name"
                    }),
                    render:e=>{
                      let{
                        field:t
                      }=e;
                      return(0,n.jsx)(o.default,{
                        ...t,
                        placeholder:"Enter company name"
                      })
                    }
                  })
                })
              }),$("phoneNumber",Z.phoneNumber,()=>{
                var e,
                t,
                r;
                return(0,n.jsx)(d.Z.Item,{
                  label:null===(e=Z.phoneNumber)||void 0===e?void 0:e.title,
                  validateStatus:K.phoneNumber?"error":"",
                  help:null===(t=K.phoneNumber)||void 0===t?void 0:t.message,
                  children:(0,n.jsx)(s.Qr,{
                    name:"phoneNumber",
                    control:_,
                    rules:D("phoneNumber",{
                      required:null!==(r=Z.phoneNumber)&&void 0!==r&&!!r.required&&"Please enter your phone number"
                    }),
                    render:e=>{
                      let{
                        field:t
                      }=e;
                      return(0,n.jsx)(o.default,{
                        ...t,
                        placeholder:"Enter phone number"
                      })
                    }
                  })
                })
              })]
            }),(0,n.jsxs)(x,{
              children:[$("numberOfApps",Z.numberOfApps,()=>{
                var e,
                t,
                r;
                return(0,n.jsx)(d.Z.Item,{
                  label:null===(e=Z.numberOfApps)||void 0===e?void 0:e.title,
                  validateStatus:K.numberOfApps?"error":"",
                  help:null===(t=K.numberOfApps)||void 0===t?void 0:t.message,
                  children:(0,n.jsx)(s.Qr,{
                    name:"numberOfApps",
                    control:_,
                    rules:D("numberOfApps",{
                      required:null!==(r=Z.numberOfApps)&&void 0!==r&&!!r.required&&"Please enter number of apps you want to track in UXCam",
                      pattern:{
                        value:/^[1-9]\d*$/,
                        message:"Please enter a valid number greater than 0"
                      }
                    }),
                    render:e=>{
                      let{
                        field:t
                      }=e;
                      return(0,n.jsx)(o.default,{
                        ...t,
                        placeholder:"Enter number of apps",
                        style:{
                          width:"100%"
                        }
                      })
                    }
                  })
                })
              }),$("numberOfUsers",Z.numberOfUsers,()=>{
                var e,
                t,
                r;
                return(0,n.jsx)(d.Z.Item,{
                  label:null===(e=Z.numberOfUsers)||void 0===e?void 0:e.title,
                  validateStatus:K.numberOfUsers?"error":"",
                  help:null===(t=K.numberOfUsers)||void 0===t?void 0:t.message,
                  children:(0,n.jsx)(s.Qr,{
                    name:"numberOfUsers",
                    control:_,
                    rules:D("numberOfUsers",{
                      required:null!==(r=Z.numberOfUsers)&&void 0!==r&&!!r.required&&"Please enter number of seats required",
                      pattern:{
                        value:/^[1-9]\d*$/,
                        message:"Please enter a valid number greater than 0"
                      }
                    }),
                    render:e=>{
                      let{
                        field:t
                      }=e;
                      return(0,n.jsx)(o.default,{
                        ...t,
                        placeholder:"Enter number of seats",
                        style:{
                          width:"100%"
                        }
                      })
                    }
                  })
                })
              })]
            }),$("message",Z.message,()=>{
              var e,
              t;
              return(0,n.jsx)(d.Z.Item,{
                label:null===(e=Z.message)||void 0===e?void 0:e.title,
                validateStatus:K.message?"error":"",
                help:null===(t=K.message)||void 0===t?void 0:t.message,
                children:(0,n.jsx)(s.Qr,{
                  name:"message",
                  control:_,
                  rules:D("message"),
                  render:e=>{
                    let{
                      field:t
                    }=e;
                    return(0,n.jsx)(j,{
                      ...t,
                      rows:4,
                      placeholder:"Enter your message",
                      style:{
                        fontSize:"12px"
                      }
                    })
                  }
                })
              })
            }),(0,n.jsxs)(y,{
              children:[r&&(0,n.jsx)(m.Z,{
                type:"link",
                onClick:t,
                children:"Cancel"
              },"button"),(0,n.jsx)(m.Z,{
                type:"primary",
                className:"ant-btn",
                loading:E,
                htmlType:"submit",
                children:O
              },"submit")]
            })]
          })]
        })
      })
    });
    var A=(0,a.memo)(e=>{
      let{
        setShowPricingModal:t,
        showPricingModal:r,
        fieldConfig:s,
        ...i
      }=e,
      {
        currentOrgReducer:o
      }=(0,l.v9)(e=>e),
      {
        status:u,
        planType:d
      }=o,
      m=(0,v.I)(),
      p=(0,a.useCallback)(()=>{
        let e=null==m?void 0:m.setTriggerRequestQuote;
        "trial"===d&&"Expired"===u||null==t||t(!1),
        null==e||e(!1)
      },[d,null==m?void 0:m.setTriggerRequestQuote,t,u]);
      return(0,n.jsx)(c.default,{
        wrapClassName:"filters-locked-modal request-pricing-modal",
        visible:r,
        closable:!1,
        footer:null,
        onCancel:p,
        maskStyle:{
          zIndex:"99998",
          background:"rgba(22, 30, 53, 0.3)"
        },
        getContainer:()=>document.body.querySelector(".ant-layout-content"),
        children:(0,n.jsx)(Q,{
          ...i,
          onCancel:p,
          fieldConfig:s
        },"request-quote-form")
      })
    })
  },
  68432:function(e,t,r){
    r.d(t,{
      Hh:function(){
        return c
      },
      Ls:function(){
        return v
      },
      SM:function(){
        return m
      },
      V_:function(){
        return i
      },
      jW:function(){
        return s
      },
      qD:function(){
        return f
      },
      wW:function(){
        return d
      },
      x2:function(){
        return p
      }
    });
    var n=r(32642),
    a=r(10013),
    l=r(47639);
    let s=e=>({
      type:n.rk,
      data:e
    }),
    i=e=>({
      type:n.Dj,
      data:e
    }),
    o=e=>({
      type:n.$s,
      data:e
    }),
    u=e=>({
      type:n.pR,
      data:e
    }),
    d=e=>(t,r)=>a.Z.getActiveSubscription(e).then(n=>{
      var a,
      l,
      s;
      let o=r(),
      u=(null===(a=o.urlReducer)||void 0===a?void 0:a.org)||(null===(l=o.urlReducer)||void 0===l?void 0:l.orgId)||(null===(s=o.currentAppReducer)||void 0===s?void 0:s.orgId);
      return e&&u&&String(u)!==String(e)||t(i(n.data.data)),
      n.data
    }).catch(e=>((0,l.jF)(t,i,e.response),e.response)),
    m=(e,t)=>(r,n)=>(e=e||n().currentOrgReducer.orgId,a.Z.postRequestQuote(e,t).then(e=>e.data.data).catch(t=>(0,l.pA)(r,void 0,t.response,{
      orgId:e
    }))),
    c=e=>t=>a.Z.getSessionUsage(e).then(e=>(t(o(e.data.data)),e.data)).catch(e=>(0,l.jF)(t,o,e)),
    p=(e,t)=>async r=>{
      let n=await r((0,l.c8)());
      return t._csrf=n,
      a.Z.updateSessionUsage(e,t).then(e=>{
        var t,
        n;
        if(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.success)return r(o(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.data)),
        e.data
      }).catch(e=>(0,l.jF)(r,o,e))
    },
    v=e=>t=>a.Z.getWebSessionUsage(e).then(e=>(t(u(e.data.data)),e.data)).catch(e=>(0,l.jF)(t,o,e)),
    f=(e,t)=>async r=>{
      let n=await r((0,l.c8)());
      return t._csrf=n,
      a.Z.updateWebSessionUsage(e,t).then(e=>{
        var t,
        n;
        if(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.success)return r(u(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.data)),
        e.data
      }).catch(e=>(0,l.jF)(r,u,e))
    }
  }
}]);