"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3168],{
  13168:function(e,t,n){
    n.r(t),
    n.d(t,{
      default:function(){
        return D
      }
    });
    var o=n(85893),
    i=n(67294),
    r=n(72654),
    l=n(80432),
    a=n(83423),
    s=n(74936),
    d=n(92585),
    c=n(45640),
    h=n(14416),
    u=n(88767),
    p=n(95315),
    f=n(36639),
    x=n(39284),
    m=n(19521);
    let g=r.Z.Item,
    b=(0,m.default)(r.Z).withConfig({
      componentId:"sc-ef9b1171-0"
    })(["margin-top:24px;"]),
    j=(0,m.default)(g).withConfig({
      componentId:"sc-ef9b1171-1"
    })([".ant-form-item-control{}.ant-input-affix-wrapper{height:30px;border:1px solid #D0D2D7;border-radius:6px;input{height:100%;}}.ant-form-item-explain-error{font-size:12px;}"]),
    v=(0,m.default)(s.Z).withConfig({
      componentId:"sc-ef9b1171-2"
    })(["font-weight:500;"]),
    y=(0,m.default)(x.default).withConfig({
      componentId:"sc-ef9b1171-3"
    })([".title{color:#161e35;font-weight:500;font-size:18px;line-height:21px;}.ant-modal-content{border-radius:8px;}h4{color:#161e35;font-weight:500;font-size:14px;line-height:16px;}.modal-footer-part .ant-form-item-control{flex-direction:row-reverse;}.ant-btn.cancel-btn{color:#5d97ff;border-color:#5d97ff;border-radius:4px;margin-right:20px;}"]),
    w=m.default.figure.withConfig({
      componentId:"sc-ef9b1171-4"
    })(["height:150px;"]),
    C=(0,m.default)(s.Z).withConfig({
      componentId:"sc-ef9b1171-5"
    })([".ant-btn{width:144px;height:47px;font-weight:400;font-size:16px;line-height:19px;}"]),
    k=(0,m.default)(x.default).withConfig({
      componentId:"sc-ef9b1171-6"
    })([".ant-modal-content{width:420px;margin:0 auto;},.ant-modal-content,.ant-modal-header{border-radius:8px;border:none;}.ant-modal-body{padding:32px;h2{font-size:18px;line-height:24px;margin-bottom:4px;color:#161E35;}p{font-size:12px;line-height:16px;}.modal-footer{border:none;padding:0px 32px;display:flex;justify-content:flex-end;gap:16px;.ant-btn{font-weight:400;font-size:14px;line-height:14px;height:34px;min-width:112px;border-radius:6px;text-transform:none;}.ant-btn-link{color:#5C97FF;}.ant-btn-link:hover{border-color:#fff;}}}"]),
    E=r.Z.Item;
    var D=()=>{
      let e=(0,i.useRef)(),
      t=(0,u.useQueryClient)(),
      [n,x]=(0,i.useState)(!1),
      [m,g]=(0,i.useState)(!1),
      [D,F]=(0,i.useState)(),
      [Z,I]=(0,i.useState)(!1),
      [N,S]=(0,i.useState)(!1),
      z=(0,h.I0)(),
      {
        profileReducer:A,
        currentOrgReducer:{
          orgId:P
        }
      }=(0,h.v9)(e=>e),
      _="teamList".concat(P),
      M=(0,i.useMemo)(()=>null==A?void 0:A.mfaEnabled,[null==A?void 0:A.mfaEnabled]),
      R=()=>{
        I(!0)
      },
      q=e=>{
        F(e)
      },
      O=e=>{
        x(e)
      },
      Q=()=>{
        D?I(!1):O(!1)
      },
      {
        refetch:T,
        isFetching:G,
        data:L
      }=(0,p.MH)(),
      {
        mutate:U,
        isLoading:H
      }=(0,u.useMutation)(p.b3,{
        onSuccess:e=>{
          var n;
          q(!M),
          g(!1),
          Q(),
          t.setQueryData(_,e=>(null==e?void 0:e.length)&&e.map(e=>(null==e?void 0:e.email)===(null==A?void 0:A.email)?{
            ...e,
            mfaEnabled:!M
          }:e)),
          l.ZP.success(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.message),
          z((0,f.PR)())
        },
        onError:t=>{
          var n,
          o,
          i,
          r;
          let l=null==t?void 0:null===(n=t.response)||void 0===n?void 0:n.data;
          (null==l?void 0:l.error)&&e.current.setFields([{
            name:"password",
            status:"error",
            errors:[null!==(r=null!==(i=null==l?void 0:null===(o=l.error)||void 0===o?void 0:o.message)&&void 0!==i?i:null==l?void 0:l.error.code1[0])&&void 0!==r?r:null==l?void 0:l.error.code2[0]]
          }])
        }
      }),
      X=()=>{
        T()
      };
      return(0,i.useEffect)(()=>{
        q(M)
      },[M]),
      (0,i.useEffect)(()=>{
        var e,
        t;
        (null==L?void 0:L.secret)&&O(!0),
        !G&&(null==L?void 0:null===(t=L.error)||void 0===t?void 0:null===(e=t.message)||void 0===e?void 0:e.includes("This feature is not enabled"))&&l.ZP.error("Multi factor authentication is not enabled for your organization.")
      },[L,G]),
      (0,o.jsxs)(o.Fragment,{
        children:[(0,o.jsx)(v,{
          loading:G,
          onClick:()=>{
            D?R():X()
          },
          children:D?"Disable multi-factor authentication":"Enable multi-factor authentication"
        }),(null==L?void 0:L.secret)?(0,o.jsxs)(y,{
          visible:!G&&n,
          wrapClassName:"mfa-modal-box",
          footer:null,
          closable:!1,
          onCancel:()=>O(!1),
          destroyOnClose:!0,
          style:{
            width:"490px"
          },
          children:[(0,o.jsx)("p",{
            className:"title",
            children:"Enable multi-factor authentication"
          }),(0,o.jsx)("p",{
            children:"Add an extra layer of protection on top of your user name and password."
          }),(0,o.jsxs)("ul",{
            children:[(0,o.jsxs)("li",{
              children:[(0,o.jsx)("h4",{
                children:"Download an authenticator app"
              }),(0,o.jsx)("a",{
                href:"https://apps.apple.com/us/app/google-authenticator/id388497605",
                target:"_blank",
                rel:"noreferrer",
                children:"Google Authenticator for iOS"
              }),(0,o.jsx)("br",{}),(0,o.jsx)("a",{
                href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2",
                target:"_blank",
                rel:"noreferrer",
                children:"Google Authenticator for Android"
              })]
            }),(0,o.jsxs)("li",{
              children:[(0,o.jsx)("h4",{
                children:"Scan this QR code with your authenticator app"
              }),(0,o.jsxs)("div",{
                style:{
                  display:"flex",
                  alignItems:"center"
                },
                children:[(0,o.jsx)(w,{
                  children:(0,o.jsx)("img",{
                    src:L?null==L?void 0:L.mfaQrUrl:"https://fakeimg.pl/150x150/",
                    alt:""
                  })
                }),(0,o.jsxs)("div",{
                  style:{
                    marginLeft:"70px"
                  },
                  children:[(0,o.jsx)("h4",{
                    children:"Or Enter this secret key"
                  })," ",(0,o.jsx)("strong",{
                    style:{
                      color:"#5D97FF",
                      letterSpacing:"0.8px"
                    },
                    children:L.secret
                  })]
                })]
              })]
            }),(0,o.jsxs)("li",{
              style:{
                border:"0",
                margin:"0",
                padding:"0"
              },
              children:[(0,o.jsx)("h4",{
                children:"Enter two consecutive authentication codes"
              }),(0,o.jsxs)(r.Z,{
                ref:e,
                onFinish:()=>{
                  e.current.validateFields().then(e=>{
                    U(e)
                  })
                },
                children:[(0,o.jsx)(E,{
                  name:"code1",
                  rules:[{
                    required:!0,
                    message:"Please enter first authentication code"
                  }],
                  children:(0,o.jsx)(a.default,{
                    placeholder:"Enter first authentication code"
                  })
                }),(0,o.jsx)(E,{
                  name:"code2",
                  rules:[{
                    required:!0,
                    message:"Please enter next authentication code"
                  }],
                  children:(0,o.jsx)(a.default,{
                    placeholder:"Enter next authentication code"
                  })
                }),(0,o.jsxs)(E,{
                  className:"modal-footer-part",
                  children:[(0,o.jsx)(C,{
                    onClick:()=>O(),
                    className:"cancel-btn",
                    children:"Cancel"
                  }),(0,o.jsx)(C,{
                    type:"primary",
                    htmlType:"submit",
                    loading:H,
                    children:"Enable"
                  })]
                })]
              })]
            })]
          })]
        }):"",(0,o.jsx)(k,{
          visible:Z,
          title:"",
          footer:null,
          closable:!1,
          onCancel:()=>I(!1),
          wrapClassName:"disable-modal-box",
          style:{
            top:270
          },
          children:m?(0,o.jsxs)(o.Fragment,{
            children:[(0,o.jsx)("h2",{
              children:"Enter multi factor authentication code"
            }),(0,o.jsx)("p",{
              children:"MFA code is required to disable the multi-factor authentication."
            }),(0,o.jsxs)(b,{
              ref:e,
              onFinish:()=>{
                e.current.validateFields().then(e=>{
                  U({
                    otp:e.password
                  },"disable-mfa")
                })
              },
              children:[(0,o.jsx)(j,{
                name:"password",
                rules:[{
                  required:!0,
                  message:"The code you entered is incorrect. Please try again."
                }],
                children:(0,o.jsx)(a.default,{
                  suffix:N?(0,o.jsx)(d.Z,{
                    onClick:()=>S(!N),
                    color:"#D0D2D7"
                  }):(0,o.jsx)(c.Z,{
                    onClick:()=>S(!N),
                    color:"#D0D2D7"
                  }),
                  name:"UXCam-password",
                  autoComplete:"chrome-off",
                  type:N?"userName":"password"
                })
              }),(0,o.jsxs)("div",{
                className:"modal-footer",
                children:[(0,o.jsx)(s.Z,{
                  onClick:()=>{
                    g(!1),
                    I(!1)
                  },
                  type:"link",
                  children:"Cancel"
                }),(0,o.jsx)(s.Z,{
                  type:"primary",
                  loading:H,
                  htmlType:"submit",
                  children:"Disable"
                })]
              })]
            })]
          }):(0,o.jsxs)(o.Fragment,{
            children:[(0,o.jsx)("h2",{
              children:"Disable multi-factor authentication"
            }),(0,o.jsx)("p",{
              children:"Are you sure you want to disable multi-factor authentication? You will have to go through the setup process to enable it again."
            }),(0,o.jsxs)("div",{
              className:"modal-footer",
              children:[(0,o.jsx)(s.Z,{
                onClick:()=>I(!1),
                type:"link",
                children:"Cancel"
              }),(0,o.jsx)(s.Z,{
                type:"primary",
                loading:H,
                onClick:()=>g(!0),
                children:"Continue"
              })]
            })]
          })
        })]
      })
    }
  }
}]);