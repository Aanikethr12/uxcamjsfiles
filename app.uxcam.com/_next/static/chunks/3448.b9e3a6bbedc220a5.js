"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3448],{
  83448:function(e,a,s){
    s.r(a),
    s.d(a,{
      Common:function(){
        return g
      }
    });
    var t=s(85893),
    i=s(67294),
    n=s(13980),
    c=s(74936),
    r=s(98777),
    o=s(11163),
    l=s.n(o),
    d=s(18879),
    m=s(21237);
    let x=i.memo(e=>{
      let{
        id:a
      }=e,
      s="isTrial"===a;
      return(0,t.jsx)(c.Z,{
        type:s?"text":"primary",
        style:{
          color:s?"#5D97FF":"#ffffff",
          marginTop:s?"":"10px"
        },
        onClick:()=>(0,d.aL)(),
        children:s?"Contact Sales":(0,t.jsxs)(t.Fragment,{
          children:["Need help? Get in touch ",(0,t.jsx)(n.Z,{})]
        })
      })
    }),
    h=()=>r.be.get("".concat("https://dashboardapi.uxcam.com","/organization/csrf"),{
      withCredentials:!0,
      validateStatus:e=>e>=200&&e<401
    }).then(e=>e.data.data.csrf.token).catch(e=>(401===e.response.data.error.status&&(window.location.href="".concat("https://app.uxcam.com","/login")),e.response)),
    g=e=>{
      let{
        headerMsg:a,
        msg:s,
        imgSrcLink:n,
        id:r,
        isSrcElement:o
      }=e,
      [d,g]=(0,i.useState)(!1),
      [p,u]=(0,i.useState)(!1);
      return(0,t.jsxs)("div",{
        className:"isTrial"===r?"message-box trial-end-message-box":"message-box",
        children:[(0,t.jsxs)("div",{
          className:"message-body-box",
          children:[(0,t.jsx)("div",{
            className:"icon-box",
            children:o?n:(0,t.jsx)("img",{
              src:n||"/static/icon-inactive.svg"
            })
          }),(0,t.jsx)("h2",{
            children:a||"Your account is currently inactive."
          })]
        }),(0,t.jsx)("p",{
          children:s||""
        }),"isTrial"===r?(0,t.jsxs)(t.Fragment,{
          children:[(0,t.jsx)(c.Z,{
            className:"ant-btn-gradient",
            onClick:async()=>{
              let e=await h();
              e&&await g(e),
              u(!0)
            },
            children:"Request a quote"
          }),(0,t.jsxs)("p",{
            children:[" or "," ",(0,t.jsx)("br",{}),(0,t.jsx)(x,{
              id:r
            })]
          }),(0,t.jsx)(m.Z,{
            setShowPricingModal:u,
            showPricingModal:p
          })]
        }):"isLogin"===r?(0,t.jsx)("a",{
          className:"ant-btn ant-btn-gradient",
          onClick:()=>l().push("/login"),
          children:"Login"
        }):(0,t.jsx)(x,{})]
      })
    },
    p={
      "invalid-email-address":(0,t.jsx)(g,{
        msg:"A valid company email is required to access UXCam. ".concat("Please reach out to sales@uxcam.com to activate your account.")
      }),
      "reach-sales":(0,t.jsx)(g,{
        msg:"Please reach out to sales@uxcam.com to activate your account"
      }),
      "reach-team":(0,t.jsx)(g,{
        msg:"Please reach out to team@uxcam.com"
      }),
      "activation-needed":(0,t.jsx)(g,{
        headerMsg:"We have sent you an activation link.",
        msg:"Please check your email and click the link to activate your account.",
        imgSrcLink:"/static/icon-check-email.svg "
      }),
      "reach-finance":(0,t.jsx)(g,{
        msg:"Please reach out to finance@uxcam.com to discuss your account"
      })
    };
    a.default=e=>{
      let{
        direct:a,
        headerMsg:s,
        imgSrcLink:i,
        reasonNoDashboardAccess:n,
        id:c,
        isSrcElement:r
      }=e;
      return(0,t.jsxs)("div",{
        className:"dashboard-restriction-wrapper",
        children:[(0,t.jsx)("div",{
          className:"message-wrapper",
          children:a?(0,t.jsx)(g,{
            headerMsg:s,
            msg:n,
            imgSrcLink:i,
            id:c,
            isSrcElement:r
          }):Object.keys(p).includes(n)?p[n]:"isTrial"===c?(0,t.jsx)(g,{
            headerMsg:n,
            id:c,
            imgSrcLink:"/static/icon-sad.svg"
          }):(0,t.jsx)(g,{
            msg:n
          })
        }),(0,t.jsx)("style",{
          children:"\n          .dashboard-restriction-wrapper .message-wrapper .message-box{\n            text-align: center;\n            display: block;\n            width: 500px;\n            padding: 50px 20px\n          }\n          .dashboard-restriction-wrapper .message-wrapper .message-box .icon-box{\n            width: 50px;\n            margin: 0 auto 20px;\n          }\n          .dashboard-restriction-wrapper .message-wrapper .message-box .icon-box img{\n            max-width: 100%;\n          }\n          .dashboard-restriction-wrapper .message-wrapper .message-box .anticon{\n            font-size: 14px;\n          }\n        "
        })]
      })
    }
  }
}]);