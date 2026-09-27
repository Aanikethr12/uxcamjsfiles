"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9033],{
  96128:function(e,t,i){
    var n=i(85893),
    a=i(67294),
    o=i(74936),
    l=i(39284),
    r=i(80432),
    s=i(14416),
    c=i(19521),
    d=i(95315),
    p=i(87332);
    let u=(0,c.default)(o.Z).withConfig({
      componentId:"sc-714c93cb-0"
    })(["margin-left:4px;border-color:#5d97ff;color:#5d97ff;border-radius:4px;height:40px;"]),
    h=(0,c.default)(u).withConfig({
      componentId:"sc-714c93cb-1"
    })(["margin-left:0;"]),
    f=(0,c.default)(o.Z).withConfig({
      componentId:"sc-714c93cb-2"
    })(["height:40px;border-radius:50px;text-transform:uppercase;font-weight:700;color:#fff;background-color:#5d97ff;font-size:18px;padding:5px 20px;border:0;transition:none;:focus,:hover{background-color:#337aff !important;color:#fff;}"]),
    m=(0,c.default)(l.default).withConfig({
      componentId:"sc-714c93cb-3"
    })([".ant-modal-content{padding:14px;border-radius:8px;}.ant-modal-footer{display:none;}"]),
    v=c.default.p.withConfig({
      componentId:"sc-714c93cb-4"
    })(["line-height:normal;"]),
    g=c.default.div.withConfig({
      componentId:"sc-714c93cb-5"
    })(["font-weight:500;font-size:14px;color:#49576E;line-height:normal;margin-bottom:14px;"]);
    t.Z=e=>{
      let{
        subscriptionId:t,
        data:i,
        handleRefetchSubscription:o,
        changePayment:l,
        premiumBilling:c,
        cardChangeUrl:x
      }=e,
      [b,y]=(0,a.useState)(),
      {
        currentOrgReducer:{
          orgId:j
        },
        urlReducer:{
          key:w,
          subscriptionId:Z
        }
      }=(0,s.v9)(e=>e),
      C=t||"plan/".concat(Z),
      k=(0,s.I0)(),
      I=(0,a.useMemo)(()=>w?"subscription/".concat(C,"/checkout-link/").concat(w):"subscription/checkout-link/organization/".concat(j),[j,w,t]),
      S=x||I,
      z=()=>{
        let e=t||Z;
        null==b||b.openCheckout({
          hostedPage:()=>(0,d.O8)(S),
          success(t){
            r.ZP.success("Payment updated successfully"),
            t&&w&&(k((0,p.Io)({
              data:i,
              requestUrl:"quote/".concat(e,"/").concat(w,"\n          ")
            })),k((0,p.JS)({
              transactionId:"creditCardDone"
            }))),
            !w&&t&&o(),
            b.closeAll()
          }
        })
      },
      _=()=>{
        z()
      };
      (0,a.useEffect)(()=>{
        var e,
        t;
        null===(t=window)||void 0===t||null===(e=t.Chargebee)||void 0===e||e.init({
          site:"uxcam"
        })
      },[]),
      (0,a.useEffect)(()=>{
        var e,
        t,
        i;
        (null===(e=window)||void 0===e?void 0:e.Chargebee)&&y(null===(i=window)||void 0===i?void 0:null===(t=i.Chargebee)||void 0===t?void 0:t.getInstance())
      },[]);
      let[F,P]=(0,a.useState)(!1),
      E=()=>{
        P(!0)
      },
      M=()=>{
        P(!1)
      },
      R=()=>{
        l?E():t?_():z()
      };
      return(0,n.jsxs)(n.Fragment,{
        children:[w?(0,n.jsx)(f,{
          disabled:!(null==i?void 0:i.signature)&&!(null==i?void 0:i.fullname),
          onClick:()=>R(),
          children:"Confirm & pay"
        }):(0,n.jsx)(u,{
          onClick:()=>R(),
          children:l?"Pay & Switch":"Manage payment"
        }),(0,n.jsx)(m,{
          title:"Payment details",
          visible:F,
          maskClosable:!1,
          footer:[],
          onCancel:()=>{
            P(!1)
          },
          children:(0,n.jsxs)(n.Fragment,{
            children:[(0,n.jsxs)(g,{
              children:[(0,n.jsx)("div",{
                children:"You`re almost there!"
              }),(0,n.jsx)("div",{
                children:"Please confirm that you want to change your plan."
              })]
            }),(0,n.jsx)(v,{
              children:null==c?void 0:c.afterYourConfirmText
            }),(0,n.jsx)(v,{
              children:null==c?void 0:c.forNextMonthText
            }),(0,n.jsx)(h,{
              onClick:()=>{
                M(),
                z()
              },
              children:"Confirm and change plan"
            })]
          })
        })]
      })
    }
  },
  49033:function(e,t,i){
    i.r(t),
    i.d(t,{
      default:function(){
        return uK
      }
    });
    var n=i(85893),
    a=i(67294),
    o=i(11163),
    l=i.n(o),
    r=i(14416),
    s=i(26797);
    let c=e=>async t=>{
      try{
        let i=await s.Z.getSSOConfiguration(e);
        t({
          type:"GET_SSO_CONFIG",
          data:i.data.data
        })
      }
      catch(e){
        var i,
        n,
        a;
        t({
          type:"GET_SSO_CONFIG_ERR",
          data:(null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(n=a.data)||void 0===n?void 0:null===(i=n.error)||void 0===i?void 0:i.status)===403?"You are not allowed to perform this operation":"Something went wrong! Please try again later!"
        })
      }
    },
    d=e=>({
      type:"SET_SINGLE_SIGN_ON",
      data:e
    }),
    p=(e,t)=>({
      type:"CLEAR_SSO_CONFIG",
      data:{
        ssoUrl:"",
        entityId:"",
        certificate:"",
        loginUrl:"",
        spEntityId:e,
        spAcsUrl:t
      }
    });
    var u=i(41371),
    h=i(44042),
    f=i(88058),
    m=i(19521),
    v=i(79999),
    g=i(47639),
    x=i(18879),
    b=i(59017),
    y=i(74936),
    j=i(48203),
    w=i(75493);
    let Z=(0,m.default)(y.Z).withConfig({
      componentId:"sc-b16a145f-0"
    })(["background:#ffffff;border:0px;padding:0px;margin-left:15px;&:hover{background:transparent;color:#5d97ff;border-color:#c0cad9 !important;svg{path{fill:#5d97ff;}}}"]);
    var C=()=>{
      let{
        _id:e
      }=(0,r.v9)(e=>e.currentAppReducer),
      {
        orgId:t
      }=(0,r.v9)(e=>e.currentOrgReducer),
      i=()=>{
        let i=e?"/integration?appId=".concat(e):"/settings/org/".concat(t,"/apps"),
        n=e?"/integration?appId=".concat(e,"&parentType=","integration"):"/integration?parentType=settings&setting=org_setting&org=".concat(t,"&org_tab=apps");
        l().push(n,i)
      };
      return(0,n.jsx)(j.Z,{
        title:"Close",
        children:(0,n.jsx)(Z,{
          icon:(0,n.jsx)(w.xC,{}),
          onMouseDown:()=>i()
        })
      })
    },
    k=i(30663),
    I=i(7906),
    S=i(91369),
    z=i(97600),
    _=i(80432),
    F=i(83423),
    P=i(41664),
    E=i.n(P),
    M=i(1796),
    R=i(68432),
    N=i(74912),
    A=i(95315),
    D=i(78268),
    T=i(31895),
    L=i(94839),
    O=i(92046);
    let U=(0,m.default)(y.Z).withConfig({
      componentId:"sc-90a26609-0"
    })(["color:#5d97ff;border-color:#5d97ff;margin-left:18px;"]),
    V="image/jpeg, image/jpg, image/png",
    B="imageFile";
    var K=e=>{
      var t;
      let{
        hasOrgPermission:i
      }=e,
      o=new FormData,
      [l,s]=(0,a.useState)([]),
      [c,d]=(0,a.useState)(!1),
      [p,u]=(0,a.useState)(),
      h=(0,r.I0)(),
      {
        currentOrgReducer:f
      }=(0,r.v9)(e=>e),
      {
        orgId:m,
        name:v,
        organizationName:g
      }=f||{},
      x=e=>{
        let{
          type:t,
          size:i
        }=e,
        n=V.includes(t),
        a=i/1024/1024<2;
        return n?a||_.ZP.error("Image must smaller than 2MB."):_.ZP.error("Only files with these extensions are allowed: png, jpg, jpeg."),
        n&&a
      },
      y=async e=>{
        let t=await x(null==e?void 0:e.file),
        i=await (0,O.lH)(null==e?void 0:e.file);
        if(o.append(B,null==e?void 0:e.file),s(e),t){
          var n,
          a,
          l,
          r;
          d(!0);
          let e=await (0,A.QN)({
            [B]:i
          },m);
          if(null==e?void 0:e.organization){
            u(null==e?void 0:null===(n=e.organization)||void 0===n?void 0:n.image);
            let t={
              ...f,
              organizationIcon:null==e?void 0:null===(a=e.organization)||void 0===a?void 0:a.image
            };
            h((0,R.V_)(t)),
            _.ZP.success(null==e?void 0:e.message),
            d(!1)
          }(null==e?void 0:e.error)&&(null==e?void 0:null===(l=e.error)||void 0===l?void 0:l.imageFile)&&_.ZP.error(null==e?void 0:null===(r=e.error)||void 0===r?void 0:r.imageFile[0]),
          s({
            [B]:[]
          }),
          d(!1)
        }
      };
      return(0,a.useEffect)(()=>{
        u(null==f?void 0:f.organizationIcon)
      },[m]),
      (0,n.jsxs)(n.Fragment,{
        children:[(0,n.jsx)(D.Z,{
          spinning:c,
          indicator:(0,n.jsx)(L.Z,{}),
          size:"small",
          children:(0,n.jsx)(b.Z,{
            picture:p,
            size:80,
            nameInfo:g||v,
            shape:"circle"
          })
        }),(0,n.jsx)(T.Z,{
          name:B,
          customRequest:y,
          fileList:null===(t=l[B])||void 0===t?void 0:t.originFileObj,
          accept:V,
          listType:"picture",
          showUploadList:!1,
          maxCount:1,
          children:(0,n.jsx)(U,{
            disabled:!i(["organization.update"])||c,
            children:"Choose image"
          })
        })]
      })
    },
    W=i(86445);
    let q=["organization.update"],
    Q=m.default.div.withConfig({
      componentId:"sc-5e36d461-0"
    })(["width:520px;display:flex;flex-direction:column;"]),
    H=m.default.div.withConfig({
      componentId:"sc-5e36d461-1"
    })(["font-weight:500;margin-bottom:8px;"]),
    Y=m.default.div.withConfig({
      componentId:"sc-5e36d461-2"
    })(["margin:20px;margin-left:0px;.ant-btn{border-radius:5px;}.ant-input-group-wrapper:hover{border-color:#5d97ff;box-shadow:0 0 0 transparent;}.ant-input-group-wrapper{border:1px solid #c0cad0;padding:4px;border-radius:5px;.ant-input{border:none;}.ant-input-group-addon{border:none;padding:0;margin:4px;background-color:#fff;.ant-btn-primary{margin-right:6px;}}}img{margin-right:18px;}.ant-upload-list-item{display:none;}p{margin-bottom:0;}svg{margin-right:3px;}"]),
    G=m.default.div.withConfig({
      componentId:"sc-5e36d461-3"
    })(["margin:20px;margin-left:0px;.ant-avatar-string{font-size:40px;}display:flex;flex-direction:row;align-items:center;.ant-btn{border-radius:5px;}.ant-input-group-wrapper{border:1px solid #c0cad0;padding:4px;border-radius:5px;.ant-input{border:none;}.ant-input-group-addon{border:none;padding:0;margin:4px;.ant-btn-primary{margin-right:6px;}}}img{margin-right:18px;}.ant-upload-list-item{display:none;}p{margin-bottom:0;}svg{margin-right:3px;}"]),
    $=(0,m.default)(z.Z).withConfig({
      componentId:"sc-5e36d461-4"
    })(["border-radius:4px;border:none;width:fit-content;.ant-alert-info .ant-alert-icon{color:#eb5757 !important;}"]),
    J=m.default.div.withConfig({
      componentId:"sc-5e36d461-5"
    })(["display:flex;flex-direction:row;background-color:#fff;margin-right:4px;align-items:center;.ant-btn{display:flex;font-size:12px;line-height:0;justify-content:center;align-items:center;height:26px;padding:12px 8px;}"]),
    X=m.default.div.withConfig({
      componentId:"sc-5e36d461-6"
    })(["display:flex-inline;color:#eb5757;font-weight:400;font-size:12px;padding:4px;a{color:#eb5757;text-decoration:underline;}"]),
    ee=m.default.p.withConfig({
      componentId:"sc-5e36d461-7"
    })(["color:#eb5757;font-weight:400;font-size:12px;margin:0;margin-top:4px;"]);
    var et=()=>{
      let e=(0,r.I0)(),
      [t,i]=(0,a.useState)(!1),
      [o,l]=(0,a.useState)(),
      [s,c]=(0,a.useState)(""),
      d=(0,a.useRef)(null),
      {
        currentOrgReducer:p,
        organizationReducer:u
      }=(0,r.v9)(e=>e),
      {
        orgId:h,
        organizationName:f
      }=p,
      {
        refetch:m
      }=(0,A.l5)({
        name:o,
        _csrf:0
      },h),
      {
        data:v
      }=(0,A.Y$)("profileInfo"),
      {
        data:x
      }=(0,A.R7)("roles_permission");
      (0,A.IW)(h);
      let b=(0,a.useCallback)(e=>v&&(0,W.OQ)(e,x,null==v?void 0:v.organization,h),[v,h,x]),
      j=(0,n.jsx)(J,{
        children:t&&(0,n.jsxs)(n.Fragment,{
          children:[!s&&(0,n.jsx)(y.Z,{
            type:"primary",
            size:"small",
            onClick:()=>{
              o&&o!==f?m().then(t=>{
                var i,
                n,
                a,
                o,
                l,
                r;
                if(null==t?void 0:null===(i=t.data)||void 0===i?void 0:i.message){
                  _.ZP.success(null==t?void 0:null===(o=t.data)||void 0===o?void 0:o.message);
                  let i=u.map(e=>{
                    var i,
                    n;
                    return e._id===(null==t?void 0:null===(i=t.data)||void 0===i?void 0:i.organization._id)?null==t?void 0:null===(n=t.data)||void 0===n?void 0:n.organization:e
                  }),
                  n={
                    ...p,
                    organizationName:null==t?void 0:null===(r=t.data)||void 0===r?void 0:null===(l=r.organization)||void 0===l?void 0:l.name
                  };
                  e((0,g.HC)(i)),
                  e((0,R.V_)(n))
                }(null==t?void 0:null===(n=t.error)||void 0===n?void 0:n.message)&&_.ZP.error((null==t?void 0:null===(a=t.error)||void 0===a?void 0:a.message)||"Unable to update name")
              }):l(f),
              i(!1)
            },
            children:"Save"
          }),(0,n.jsx)(y.Z,{
            size:"small",
            onClick:()=>{
              i(!1),
              l(f),
              c("")
            },
            children:"Cancel"
          })]
        })
      }),
      w=(0,n.jsxs)(X,{
        children:["To delete the organization, please reach out to"," ",(0,n.jsx)(E(),{
          href:"mailto:team@uxam.com",
          children:"team@uxcam.com"
        })]
      });
      return(0,a.useEffect)(()=>{
        l(f)
      },[h]),
      (0,n.jsxs)(Q,{
        children:[(0,n.jsx)(H,{
          children:"Organization logo"
        }),(0,n.jsx)(G,{
          children:(0,n.jsx)(K,{
            hasOrgPermission:b
          })
        }),(0,n.jsxs)(Y,{
          children:[(0,n.jsx)(H,{
            children:"Organization name"
          }),(0,n.jsx)(F.default,{
            placeholder:"".concat(f),
            value:o,
            onChange:b(q)&&(e=>{
              t||i(!t),
              l(e.target.value);
              let n=e.target.value;
              if(!N.yJ.test(n)){
                c("Name field only accepts the following characters: alphabets (A-Z, a-z), numbers (0-9), dash (-), underscore (_), apostrophe ('), and spaces.");
                return
              }
              if(n.length>32){
                c("Organization name should contain at most 32 characters.");
                return
              }
              c("")
            }),
            ref:d,
            addonAfter:j,
            disabled:!b(q)
          }),s&&(0,n.jsx)(ee,{
            children:s
          })]
        }),b(["organization.delete"])&&(0,n.jsx)($,{
          message:w,
          type:"error",
          showIcon:!0,
          icon:(0,n.jsx)(M.Z,{})
        })]
      })
    },
    ei=i(88767),
    en=i(25104),
    ea=i(90745);
    let eo=m.default.div.withConfig({
      componentId:"sc-5fc3d6da-0"
    })(["border:1px solid #c0cad9;border-radius:5px;height:auto;padding:20px;margin:20px 0 0 0;"]),
    el=m.default.div.withConfig({
      componentId:"sc-5fc3d6da-1"
    })(["display:flex;flex-wrap:wrap;align-items:center;gap:8px;"]);
    var er=e=>{
      let{
        children:t
      }=e;
      return(0,n.jsxs)(eo,{
        children:[(0,n.jsx)("p",{
          children:"To change your plan, please contact our customer success team."
        }),(0,n.jsxs)(el,{
          children:[(0,n.jsx)(y.Z,{
            type:"primary",
            onClick:()=>(0,x.aL)(),
            children:"Contact us"
          }),t]
        })]
      })
    },
    es=i(39284),
    ec=i(33940),
    ed=i(88537),
    ep=i(10013);
    let eu=(0,m.default)(y.Z).withConfig({
      componentId:"sc-cfda35b8-0"
    })(["background-color:#f4584c !important;border-color:#f4584c !important;color:#fff !important;&:hover,&:focus{background-color:#e0463a !important;border-color:#e0463a !important;color:#fff !important;}&[disabled],&[disabled]:hover,&[disabled]:focus{background-color:#fbb0a9 !important;border-color:#fbb0a9 !important;color:#fff !important;}"]),
    eh=(0,m.default)(es.default).withConfig({
      componentId:"sc-cfda35b8-1"
    })([".ant-modal-content{border-radius:12px;}.ant-modal-body{padding:32px 32px 8px;text-align:center;}.ant-modal-footer{border-top:none;padding:16px 32px 28px;display:flex;gap:12px;}.ant-modal-footer button{flex:1;height:40px;margin:0;border-radius:8px;font-weight:600;}"]),
    ef=m.default.div.withConfig({
      componentId:"sc-cfda35b8-2"
    })(["width:56px;height:56px;border-radius:50%;background:#fdeeec;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;.anticon{font-size:26px;color:#f4584c;}"]),
    em=m.default.h3.withConfig({
      componentId:"sc-cfda35b8-3"
    })(["font-size:18px;font-weight:600;color:#161e35;margin:0 0 8px;"]),
    ev=m.default.p.withConfig({
      componentId:"sc-cfda35b8-4"
    })(["font-size:14px;line-height:1.5;color:#5b6b85;margin:0 0 16px;"]),
    eg=m.default.div.withConfig({
      componentId:"sc-cfda35b8-5"
    })(["display:flex;align-items:center;justify-content:center;gap:8px;background:#f5f7fa;border-radius:8px;padding:10px 14px;margin:0 0 16px;font-size:13px;color:#161e35;.anticon{color:#8a99b1;}strong{font-weight:600;}"]);
    var ex=e=>{
      var t,
      i,
      o,
      l,
      s,
      c;
      let{
        orgId:d,
        queryKey:p,
        isOwner:u
      }=e,
      h=(0,r.I0)(),
      f=(0,ei.useQueryClient)(),
      [m,v]=(0,a.useState)(!1),
      [g,x]=(0,a.useState)(!1),
      {
        data:b
      }=(0,A.IW)(d,!u),
      j=f.getQueryData(p),
      w=(null==j?void 0:null===(i=j.subscription)||void 0===i?void 0:null===(t=i.status)||void 0===t?void 0:t.toLowerCase())==="active",
      Z=(null==j?void 0:null===(o=j.payment)||void 0===o?void 0:o.renewalStatus)==="cancel",
      C=(null==j?void 0:null===(l=j.payment)||void 0===l?void 0:l.billingEndDate)||(null==j?void 0:null===(s=j.payment)||void 0===s?void 0:s.nextBillingDate),
      I=async()=>{
        var e,
        t,
        i,
        n,
        a;
        x(!0);
        try{
          let t=await ep.Z.cancelSelfServeSubscription(d);
          _.ZP.success((null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.message)||"Your subscription has been scheduled for cancellation at the end of your current term."),
          v(!1),
          h((0,k.CW)(null,{
            eventName:"wa_cancel_subscription",
            track_type:"event",
            eventProperty:{
              org_id:d
            }
          })),
          await f.invalidateQueries(p)
        }
        catch(l){
          let e=null==l?void 0:null===(t=l.response)||void 0===t?void 0:t.status,
          o=null==l?void 0:null===(a=l.response)||void 0===a?void 0:null===(n=a.data)||void 0===n?void 0:null===(i=n.error)||void 0===i?void 0:i.message;
          403===e?_.ZP.error(o||"You do not have permission to perform this action."):409===e?(_.ZP.error(o||"Cannot cancel a subscription that is Cancelled or Expired already"),await f.invalidateQueries(p)):_.ZP.error(o||"Something went wrong. Please try again later."),
          v(!1)
        }
        finally{
          x(!1)
        }
      };
      if(!w||Z)return null;
      let S=!u&&Array.isArray(b)?null===(c=b.find(e=>null==e?void 0:e.isOwner))||void 0===c?void 0:c.email:void 0;
      return(0,n.jsxs)(n.Fragment,{
        children:[(0,n.jsx)(eu,{
          type:"primary",
          loading:g,
          disabled:g,
          onClick:()=>v(!0),
          children:"Cancel subscription"
        }),u?(0,n.jsxs)(eh,{
          visible:m,
          title:null,
          width:420,
          centered:!0,
          okText:"Cancel subscription",
          okButtonProps:{
            style:{
              backgroundColor:"#f4584c",
              borderColor:"#f4584c",
              color:"#fff"
            }
          },
          cancelText:"Keep subscription",
          confirmLoading:g,
          onOk:I,
          onCancel:()=>v(!1),
          children:[(0,n.jsx)(ef,{
            children:(0,n.jsx)(ec.Z,{})
          }),(0,n.jsx)(em,{
            children:"Cancel your subscription?"
          }),(0,n.jsx)(ev,{
            children:"We'll schedule your subscription to cancel at the end of your current term — you keep full access until then."
          }),C&&(0,n.jsxs)(eg,{
            children:[(0,n.jsx)(ed.Z,{}),(0,n.jsxs)("span",{
              children:["Access continues until ",(0,n.jsx)("strong",{
                children:C
              })]
            })]
          }),(0,n.jsx)(ev,{
            children:"After that, your plan won't renew automatically and you'll need to re-subscribe to continue."
          })]
        }):(0,n.jsxs)(eh,{
          visible:m,
          title:null,
          width:420,
          centered:!0,
          footer:[(0,n.jsx)(y.Z,{
            type:"primary",
            onClick:()=>v(!1),
            children:"Got it"
          },"ok")],
          onCancel:()=>v(!1),
          children:[(0,n.jsx)(ef,{
            children:(0,n.jsx)(ec.Z,{})
          }),(0,n.jsx)(em,{
            children:"Only the owner can cancel"
          }),(0,n.jsxs)(ev,{
            children:["Only the organization owner can cancel this subscription."," ",S?"Please reach out to ".concat(S," to make changes to your plan."):"Please reach out to your organization owner to make changes to your plan."]
          })]
        })]
      })
    },
    eb=i(74354),
    ey=i(84266),
    ej=e=>(0,n.jsx)("svg",{
      width:10,
      height:10,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        d:"M4 1H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6M5 5l4-4m0 0v2.5M9 1H6.5",
        stroke:"currentColor",
        strokeWidth:1.1,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    }),
    ew=i(72654),
    eZ=i(68457),
    eC=i(25409),
    ek=i(79870),
    eI=i(10410),
    eS=i(52795);
    let ez=ew.Z.Item;
    m.default.div.withConfig({
      componentId:"sc-d39b91f-0"
    })(["border:1px solid #c0cad9;border-radius:4px;padding:20px;margin:0 20px 20px 0;.ant-card{&:hover{border:1px solid #c0cad9;}}"]),
    m.default.span.withConfig({
      componentId:"sc-d39b91f-1"
    })(["margin-left:5px;"]);
    let e_=m.default.div.withConfig({
      componentId:"sc-d39b91f-2"
    })(["display:flex;height:100%;"]),
    eF=m.default.div.withConfig({
      componentId:"sc-d39b91f-3"
    })(["width:50%;"]),
    eP=m.default.div.withConfig({
      componentId:"sc-d39b91f-4"
    })(["width:50%;&[aria-hidden='true']{display:none;}"]),
    eE=(0,m.default)(eZ.default).withConfig({
      componentId:"sc-d39b91f-5"
    })([".ant-menu-item{display:flex;height:30px;padding:0;color:rgba(0,0,0,0.85);margin:0 !important;align-items:center;&:hover{color:#5d97ff;}}.ant-menu-item-group-title{padding:0;margin-top:6px;color:#5d97ff !important;}.ant-menu-item-disabled,.ant-menu-item-selected{background-color:#fff !important;.ant-menu-title-content{margin-left:2px;}}"]),
    eM=(0,m.default)(eC.Z).withConfig({
      componentId:"sc-d39b91f-6"
    })([".ant-btn[disabled]{background:#ffffff;}"]),
    eR=(0,m.default)(j.Z).withConfig({
      componentId:"sc-d39b91f-7"
    })(["position:relative;.ant-tooltip{line-height:normal !important;font-weight:400;font-size:11px;}"]),
    eN=(0,m.default)(ek.default).withConfig({
      componentId:"sc-d39b91f-8"
    })(["width:100% !important;"]);
    (0,m.default)(eN).withConfig({
      componentId:"sc-d39b91f-9"
    })(["margin-bottom:4px;"]),
    (0,m.default)(ek.default).withConfig({
      componentId:"sc-d39b91f-10"
    })(["width:100%;"]),
    m.default.p.withConfig({
      componentId:"sc-d39b91f-11"
    })(["margin-bottom:0;line-height:normal;"]);
    let eA=(0,m.default)(z.Z).withConfig({
      componentId:"sc-d39b91f-12"
    })(["background-color:rgba(93,151,255,0.08);border:none;padding:20px 15px;margin-bottom:10px;border-radius:4px;.ant-alert-icon{color:#161e35;margin-right:8px;font-size:14px;}"]);
    (0,m.default)(eA).withConfig({
      componentId:"sc-d39b91f-13"
    })(["margin:12px 0 10px 0;"]),
    (0,m.default)(y.Z).withConfig({
      componentId:"sc-d39b91f-14"
    })(["border:1px solid #5d97ff;color:#5d97ff;height:auto;"]),
    m.default.div.withConfig({
      componentId:"sc-d39b91f-15"
    })(["display:flex;justify-content:space-between;"]);
    let eD=(0,m.default)(y.Z).withConfig({
      componentId:"sc-d39b91f-16"
    })(["border:none;box-shadow:none;margin-left:8px;background:transparent;padding:0;svg{path{fill:#f4584c;color:#f4584c;}}:hover{svg{path{fill:#f4584c;color:#f4584c;}}}"]);
    m.default.div.withConfig({
      componentId:"sc-d39b91f-17"
    })(["font-size:14px;"]);
    let eT=(0,m.createGlobalStyle)(["body{.ant-tooltip{line-height:normal;}.ant-tooltip .ant-tooltip-inner{display:flex;font-weight:400;font-size:11px;padding:8px 10px;}}"]),
    eL=(0,m.default)(eI.Z).withConfig({
      componentId:"sc-d39b91f-18"
    })(["border-radius:0;font-size:12px;font-weight:300;color:#5b6d89;border:1px solid #ecebec;.ant-input-number-handler-wrap{opacity:0.4;}"]),
    eO=(0,m.default)(eI.Z).withConfig({
      componentId:"sc-d39b91f-19"
    })(["border-radius:0;font-size:12px;font-weight:300;color:#5b6d89;border-right:0;border-top:1px solid #ecebec;border-bottom:1px solid #ecebec;border-left:1px solid #ecebec;.ant-input-number{border:0;}.ant-input-number-group-addon{border:0;background:#fff;}"]),
    eU=m.default.div.withConfig({
      componentId:"sc-d39b91f-20"
    })(["display:flex;"]),
    eV=m.default.div.withConfig({
      componentId:"sc-d39b91f-21"
    })(["border:1px solid #ecebec;border-radius:4px;margin:0 10px 20px 0;.ant-card{&:hover{border:1px solid #c0cad9;}}&[aria-hidden='true']{display:none;}"]),
    eB=(0,m.default)(eV).withConfig({
      componentId:"sc-d39b91f-22"
    })(["margin:0 0 20px 10px;"]),
    eK=(0,m.default)(ek.default).withConfig({
      componentId:"sc-d39b91f-23"
    })(["width:167px;color:#5b6d89;font-weight:300;font-size:14px;.ant-select-selector{border:1px solid #ecebec !important;border-radius:0 !important;}.ant-select-selector .ant-select-selection-item{color:#5b6d89;font-weight:300;font-size:14px;}"]),
    eW=(0,m.default)(eK).withConfig({
      componentId:"sc-d39b91f-24"
    })(["width:100%;"]),
    eq=(0,m.default)(y.Z).withConfig({
      componentId:"sc-d39b91f-25"
    })(["border-radius:4px;:hover{background:#337aff;color:#fff !important;}"]),
    eQ=m.default.div.withConfig({
      componentId:"sc-d39b91f-26"
    })(["margin-top:8px;.ant-form-item{margin-bottom:0;}"]),
    eH=(0,m.default)(ez).withConfig({
      componentId:"sc-d39b91f-27"
    })([".ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{display:none;}.ant-form-item-label{padding-bottom:0;}"]),
    eY=m.default.div.withConfig({
      componentId:"sc-d39b91f-28"
    })(["display:flex;gap:",";flex-direction:column;"],v.r.spacing(1)),
    eG=m.default.div.withConfig({
      componentId:"sc-d39b91f-29"
    })(['display:flex;justify-content:space-between;align-items:center;&[aria-hidden="true"]{display:none;}']),
    e$=(0,m.default)(eS.Z).withConfig({
      componentId:"sc-d39b91f-30"
    })(["color:",";"],v.r.colors.error500.toString()),
    eJ=m.default.div.withConfig({
      componentId:"sc-aaf445c2-0"
    })(["width:100%;background:",";border-radius:4px;display:flex;flex-direction:row;@media only screen and (max-width:950px){flex-direction:column;}"],v.r.colors.primary10.toString()),
    eX=m.default.img.withConfig({
      componentId:"sc-aaf445c2-1"
    })(["height:138px;width:138px;@media only screen and (max-width:950px){margin-left:",";}"],v.r.spacing(1.5)),
    e0=m.default.div.withConfig({
      componentId:"sc-aaf445c2-2"
    })(["margin-left:",";padding:",";button{background:transparent;border-color:",";color:",";&:hover{background-color:#161E351A !important;color:"," !important;border-color:"," !important;}}"],v.r.spacing(.5),v.r.spacing(2),v.r.colors.surface500.toString(),v.r.colors.surface500.toString(),v.r.colors.surface500.toString(),v.r.colors.surface500.toString()),
    e1=m.default.div.withConfig({
      componentId:"sc-aaf445c2-3"
    })(["font-weight:700;font-size:",";line-height:",";color:",";margin-bottom:",";"],v.r.fontSize(1.4),v.r.fontSize(2.2),v.r.colors.surface500.toString(),v.r.spacing(.5)),
    e2=m.default.div.withConfig({
      componentId:"sc-aaf445c2-4"
    })(["font-weight:400;font-size:",";line-height:",";color:",";margin-bottom:",";"],v.r.fontSize(1.2),v.r.fontSize(2.2),v.r.colors.surface500.toString(),v.r.spacing(1)),
    e3=()=>(0,n.jsxs)(eJ,{
      children:[(0,n.jsx)(eX,{
        src:"/static/subscription/web-unlock.png"
      }),(0,n.jsxs)(e0,{
        children:[(0,n.jsx)(e1,{
          children:"Get UXCam web analytics"
        }),(0,n.jsx)(e2,{
          children:"Unlock actionable insights to optimize user experiences, boost conversions, and drive retention—all in one powerful platform. Start your Web Trial today."
        }),(0,n.jsx)(I.zx,{
          variant:"secondary",
          size:"large",
          inline:!0,
          onClick:()=>(0,x.aL)(),
          "data-intercom-target":"Request-Web-Trial",
          children:"Request trial"
        })]
      })]
    }),
    e4=()=>(0,n.jsxs)(eJ,{
      children:[(0,n.jsx)(eX,{
        src:"/static/subscription/mobile-unlock.png"
      }),(0,n.jsxs)(e0,{
        children:[(0,n.jsx)(e1,{
          children:"Get UXCam mobile analytics"
        }),(0,n.jsx)(e2,{
          children:"Unlock actionable insights to optimize user experiences, boost conversions, and drive retention—all in one powerful platform. Start your Mobile Trial today."
        }),(0,n.jsx)(I.zx,{
          variant:"secondary",
          size:"large",
          inline:!0,
          onClick:()=>(0,x.aL)(),
          "data-intercom-target":"Request-Mobile-Trial",
          children:"Request trial"
        })]
      })]
    }),
    e5=new Date,
    e6=["subscription.create","subscription.update"],
    e7=m.default.div.withConfig({
      componentId:"sc-d95a6258-0"
    })(["border:1px solid #c0cad9;border-radius:5px;padding:",";margin-top:20px;"],v.r.spacing(2.5)),
    e8=m.default.div.withConfig({
      componentId:"sc-d95a6258-1"
    })(["h3{font-size:",";line-height:",";color:",";font-weight:500;}span{font-size:",";font-weight:400;color:#8a99b1;display:block;}"],v.r.fontSize(1.8),v.r.fontSize(2.8),v.r.colors.primaryMidnight.toString(),v.r.fontSize(1.4)),
    e9=m.default.div.withConfig({
      componentId:"sc-d95a6258-2"
    })(["font-weight:500;font-size:",";display:flex;flex-wrap:wrap;&:not( :last-of-type ){margin-bottom:20px;}&:last-of-type{margin-bottom:12px;}",""],v.r.fontSize(1.4),e=>{
      let{
        removeMargin:t
      }=e;
      return t&&(0,m.css)(["&:first-of-type{margin-top:8px;}"])
    }),
    te=(0,m.default)(eb.Z).withConfig({
      componentId:"sc-d95a6258-3"
    })(["font-size:",";margin-left:0;"],v.r.fontSize(1.4)),
    tt=m.default.span.withConfig({
      componentId:"sc-d95a6258-4"
    })(["color:#161e35;font-weight:400;font-size:",";"],v.r.fontSize(1.4)),
    ti=(0,m.default)(tt).withConfig({
      componentId:"sc-d95a6258-5"
    })(["flex:50%;"]),
    tn=(0,m.default)(tt).withConfig({
      componentId:"sc-d95a6258-6"
    })(["justify-content:flex-end;"]),
    ta=(0,m.default)(tn).withConfig({
      componentId:"sc-d95a6258-7"
    })(["font-weight:500;"]),
    to=m.default.div.withConfig({
      componentId:"sc-d95a6258-8"
    })([">:not(:first-of-type):nth-child(odd){margin-top:0;}"]),
    tl=m.default.div.withConfig({
      componentId:"sc-d95a6258-9"
    })(["font-weight:400;font-size:",";line-height:normal;"],v.r.fontSize(1.4)),
    tr=(0,m.default)(y.Z).withConfig({
      componentId:"sc-d95a6258-10"
    })(["display:flex;align-items:center;gap:4px;border:none;box-shadow:none;padding:",";color:",";line-height:normal;font-size:12px;height:auto;&:hover{background:none;color:",";}"],v.r.spacing(0,0,0,.25),v.r.colors.primarySky.toString(),v.r.colors.primaryMidnight.toString()),
    ts=m.default.span.withConfig({
      componentId:"sc-d95a6258-11"
    })(["font-size:",";font-weight:600;margin-bottom:0px;margin-top:4px;display:block;"],v.r.fontSize(1.4)),
    tc=(0,m.default)(j.Z).withConfig({
      componentId:"sc-d95a6258-12"
    })([".ant-tooltip .ant-tooltip-content{width:334px;}"]),
    td=m.default.div.withConfig({
      componentId:"sc-d95a6258-13"
    })(["display:flex;flex-direction:column;gap:16px;margin-top:20px;"]),
    tp=m.default.div.withConfig({
      componentId:"sc-d95a6258-14"
    })(["display:flex;flex-direction:column;gap:6px;"]),
    tu=(0,m.default)(y.Z).withConfig({
      componentId:"sc-d95a6258-15"
    })(["border:1px solid ",";color:",";background:",";border-radius:4px;height:36px;margin-top:4px;width:fit-content;padding:",";&:hover,:active,:focus{background:",";border:1px solid ",";color:#fff;}"],e=>{
      let{
        type:t
      }=e;
      return t?"#5D97FF":"#F4584C"
    },e=>{
      let{
        type:t
      }=e;
      return t?"#fff":"#F4584C"
    },e=>{
      let{
        type:t
      }=e;
      return t?"#5D97FF":"none"
    },v.r.spacing(0,4),e=>{
      let{
        type:t
      }=e;
      return t?"#337aff":"#F4584C"
    },e=>{
      let{
        type:t
      }=e;
      return t?"#337aff":"#F4584C"
    }),
    th=(0,m.default)(z.Z).withConfig({
      componentId:"sc-d95a6258-16"
    })(["padding:",";font-size:",";background:",";border-radius:4px;line-height:normal;border:none;.anticon-info-circle{color:#161e35;font-size:12px;margin:3px 5px 0 0;}"],v.r.spacing(1.25),v.r.fontSize(1.3),v.r.colors.surface05.toString()),
    tf=m.default.div.withConfig({
      componentId:"sc-d95a6258-17"
    })(["display:flex;flex-direction:column;gap:8px;&:empty{display:none;}"]),
    tm=m.default.div.withConfig({
      componentId:"sc-d95a6258-18"
    })(["p{margin-bottom:0;color:",";}p:first-child{margin-bottom:7px;}"],v.r.colors.surface500.toString()),
    tv=m.default.div.withConfig({
      componentId:"sc-d95a6258-19"
    })(["display:flex;flex-direction:column;gap:8px;>:first-of-type{margin-top:8px;}&:empty{display:none;}"]),
    tg=m.default.div.withConfig({
      componentId:"sc-d95a6258-20"
    })(["height:8px;"]),
    tx=e=>{
      let{
        label:t,
        values:{
          countString:i,
          totalCountString:a,
          percentage:o
        }
      }=e;
      return(0,n.jsxs)(e9,{
        children:[(0,n.jsx)(ti,{
          children:t
        }),(0,n.jsxs)(tn,{
          children:[i," /"," ",(0,n.jsx)(ta,{
            children:"-1"===a?"Unlimited":a
          })]
        }),(0,n.jsx)(te,{
          percent:o,
          status:"active",
          showInfo:!1,
          trailColor:"#F5F5F5",
          strokeColor:o>=100?"#F4584C":"#5D97FF"
        })]
      })
    },
    tb=(e,t,i,n)=>({
      totalCount:e,
      countString:n,
      totalCountString:t,
      percentage:i<e?i/e*100:100
    });
    var ty=e=>{
      var t,
      i,
      o,
      s;
      let{
        hasPermission:c
      }=e,
      d=(0,ei.useQueryClient)(),
      {
        currentOrgReducer:{
          orgId:p,
          planType:u,
          planFeature:h
        }
      }=(0,r.v9)(e=>e),
      [f,m]=(0,a.useState)(!1),
      [v,g]=(0,a.useState)(!1),
      b=(0,a.useMemo)(()=>"currentSubscription".concat(p),[p]),
      y=d.getQueryData(b),
      j=null==y?void 0:y.currentMonth,
      w=(null==y?void 0:null===(t=y.subscription)||void 0===t?void 0:t.status)==="Canceled",
      Z=(null==y?void 0:null===(i=y.subscription)||void 0===i?void 0:i.hasOverage)||!1,
      C=(null==y?void 0:null===(o=y.subscription)||void 0===o?void 0:o.hasWebOverage)||!1,
      k=(0,a.useMemo)(()=>null==h?void 0:h.tara,[null==h?void 0:h.tara]),
      {
        startDate:I,
        endDate:S,
        statSessionCount:z,
        totalSessionCount:F,
        statSessionCountString:P,
        totalSessionCountString:E,
        statEventCount:M,
        totalEventCount:R,
        statEventCountString:N,
        totalEventCountString:A,
        statWebSessionCount:D,
        totalWebSessionCount:T,
        statWebSessionCountString:L,
        totalWebSessionCountString:O,
        statWebEventCount:U,
        totalWebEventCount:V,
        statWebEventCountString:B,
        totalWebEventCountString:K,
        isOverageRecordingDisabled:W,
        isWebOverageRecordingDisabled:q
      }=j||{},
      Q={
        ...null==y?void 0:null===(s=y.subscription)||void 0===s?void 0:s.overagePricing
      },
      [H,Y]=a.useState(),
      [G,$]=a.useState(),
      J=(0,a.useMemo)(()=>({
        Sessions:tb(F,E,z,P),
        Events:tb(R,A,M,N)
      }),[F,E,z,P,R,A,M,N]),
      X=(0,a.useMemo)(()=>({
        Sessions:tb(T,O,D,L),
        Events:tb(V,K,U,B)
      }),[T,O,D,L,V,K,U,B]),
      {
        days:ee
      }=(0,a.useMemo)(()=>I&&S?(0,ey.Z)({
        start:new Date(I),
        end:new Date(S)
      }):{},[I,S]),
      {
        days:et
      }=(0,a.useMemo)(()=>I?(0,ey.Z)({
        start:new Date(I),
        end:e5
      }):{},[I]),
      en=ee-et,
      ea=async()=>{
        m(!0);
        try{
          let e=await ep.Z.toggleSessionRecording(p,{
            isOverageRecordingDisabled:!H
          });
          200===e.status&&Y(!H)
        }
        catch(n){
          var e,
          t,
          i;
          _.ZP.info(null==n?void 0:null===(i=n.response)||void 0===i?void 0:null===(t=i.data)||void 0===t?void 0:null===(e=t.error)||void 0===e?void 0:e.message)
        }
        m(!1)
      },
      eo=async()=>{
        g(!0);
        try{
          let e=await ep.Z.toggleSessionRecording(p,{
            isWebOverageRecordingDisabled:!G
          });
          200===e.status&&$(!G)
        }
        catch(n){
          var e,
          t,
          i;
          _.ZP.info(null==n?void 0:null===(i=n.response)||void 0===i?void 0:null===(t=i.data)||void 0===t?void 0:null===(e=t.error)||void 0===e?void 0:e.message)
        }
        g(!1)
      },
      el=(0,a.useMemo)(()=>H,[H]),
      er=(0,a.useMemo)(()=>G,[G]),
      es=(0,a.useMemo)(()=>Object.values(J).some(e=>e.percentage>=100),[J]),
      ec=(0,a.useMemo)(()=>Object.values(X).some(e=>e.percentage>=100),[X]),
      ed=e=>e||0===e?e.toLocaleString():"0",
      eu=(0,a.useMemo)(()=>{
        let e=(null==j?void 0:j.totalMonthlyTaraCredit)||0,
        t=(null==j?void 0:j.statConsumedTaraCredit)||0;
        return{
          organizationCredits:{
            usedDisplay:ed(t),
            totalDisplay:ed(e),
            percentage:e>0?t/e*100:0
          }
        }
      },[null==j?void 0:j.totalMonthlyTaraCredit,null==j?void 0:j.statConsumedTaraCredit]),
      eh=(0,a.useMemo)(()=>{
        var e;
        return(null==J?void 0:null===(e=J.Events)||void 0===e?void 0:e.percentage)>=100
      },[J]),
      ef=(0,a.useMemo)(()=>{
        var e;
        return(null==X?void 0:null===(e=X.Events)||void 0===e?void 0:e.percentage)>=100
      },[X]),
      em=(0,a.useMemo)(()=>Object.values(J).every(e=>e.percentage>=100),[J]),
      ev=(0,a.useMemo)(()=>Object.values(X).every(e=>e.percentage>=100),[X]),
      eg=(0,a.useMemo)(()=>em?"":eh?"events":"sessions",[eh,em]),
      ex=(0,a.useMemo)(()=>ev?"":ef?"events":"sessions",[ef,ev]),
      eb=a.useCallback(function(){
        let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];
        return"We will stop capturing the ".concat(e?ex:eg," data for current recording period.")
      },[eg,ex]),
      ew=a.useCallback(function(){
        let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];
        return(e?er:el)?"We will continue capturing the user's data even after the limit has been reached.":(e?ec:es)?eb(e):"When the limits get reached, data capture will stop until the beginning of the next billing period."
      },[eb,el,er,ec,es]),
      eZ=a.useCallback(function(){
        var e,
        t,
        i,
        n;
        let a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],
        o=a?"webSession":"session",
        l=a?"webEvent":"event";
        return"$".concat(null==Q?void 0:null===(e=Q[o])||void 0===e?void 0:e.price," per ").concat(null==Q?void 0:null===(t=Q[o])||void 0===t?void 0:t.per," sessions and $").concat(null==Q?void 0:null===(i=Q[l])||void 0===i?void 0:i.price," per ").concat(null==Q?void 0:null===(n=Q[l])||void 0===n?void 0:n.per," events.")
      },[Q]),
      eC=a.useCallback(function(){
        let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];
        return"When you reach your limits, we will continue capturing your users’ data at the rate of ".concat(eZ(e))
      },[eZ]),
      ek=a.useCallback(function(){
        let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];
        return(0,n.jsxs)(n.Fragment,{
          children:[(0,n.jsx)("p",{
            children:"You’ve stopped the data capture. Once you reach your limits, you will miss out on capturing your users’ data until your limit resets in the next recording period."
          }),(0,n.jsx)("p",{
            children:"Start recording again at the rate of ".concat(eZ(e))
          })]
        })
      },[eZ]),
      eI=a.useCallback(function(){
        let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];
        return(0,n.jsx)("p",{
          children:"Your ".concat(e?ex:eg," data capturing has now been stopped until next recording period as you reached your limits.")
        })
      },[ex,eg]),
      eS=a.useCallback(function(){
        let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];
        return(0,n.jsxs)(n.Fragment,{
          children:[(0,n.jsx)("p",{
            children:"You’ve reached 100% of your monthly ".concat(e?ex:eg,"   usage.")
          }),(0,n.jsx)("p",{
            children:"We will continue capturing your users’ data at the rate of  ".concat(eZ(e))
          })]
        })
      },[eZ,eg,ex]),
      ez=a.useCallback(function(){
        let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];
        return(0,n.jsx)("p",{
          children:"To make sure you don’t miss your users’ data, we recommend you to continue capturing at the rate of ".concat(eZ(e))
        })
      },[eZ]);
      (0,a.useEffect)(()=>{
        Y(W)
      },[W]),
      (0,a.useEffect)(()=>{
        $(q)
      },[q]);
      let e_=!F&&!w,
      eF=!T&&!w,
      eP=!Z&&!e_&&(es||!eF||ec),
      eE=!eF&&!C,
      eM=eP&&eE&&es===ec&&!es;
      return(0,n.jsxs)(e7,{
        children:[(0,n.jsxs)(e8,{
          children:[(0,n.jsxs)("h3",{
            children:["Usage"," "]
          }),"trial"!==u&&(0,n.jsxs)("span",{
            children:["Recording period: ".concat(I," - ").concat(S," (").concat(en," day").concat(en>1?"s":""," left)")," "]
          })]
        }),(0,n.jsxs)(td,{
          children:[(0,n.jsxs)(tp,{
            children:[!!k&&(0,n.jsxs)(n.Fragment,{
              children:[(0,n.jsxs)("div",{
                style:{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center"
                },
                children:[(0,n.jsx)(ts,{
                  children:"Tara AI:"
                }),(0,n.jsxs)(tr,{
                  type:"text",
                  onClick:()=>l().push("/integration?org=".concat(p,"&parentType=settings&setting=org_setting&org_tab=tara-ai"),"/settings/org/".concat(p,"/tara-ai")),
                  children:["View usage breakdown ",(0,n.jsx)(ej,{})]
                })]
              }),(0,n.jsx)(to,{
                children:(0,n.jsxs)(e9,{
                  children:[(0,n.jsx)(ti,{
                    children:"Credits"
                  }),(0,n.jsxs)(tn,{
                    children:[eu.organizationCredits.usedDisplay," /"," ",(0,n.jsx)(ta,{
                      children:eu.organizationCredits.totalDisplay
                    })]
                  }),(0,n.jsx)(te,{
                    percent:eu.organizationCredits.percentage,
                    status:"active",
                    showInfo:!1,
                    trailColor:"#F5F5F5",
                    strokeColor:eu.organizationCredits.percentage>=100?"#F4584C":"#5D97FF"
                  })]
                })
              })]
            }),!e_&&(0,n.jsxs)(n.Fragment,{
              children:[(0,n.jsx)(ts,{
                children:"Mobile app:"
              }),(0,n.jsx)(to,{
                children:Object.entries(J).map(e=>(0,n.jsx)(tx,{
                  label:e[0],
                  values:e[1]
                },e[0]))
              })]
            }),(0,n.jsxs)(tv,{
              children:[eP&&!eM&&(0,n.jsx)(th,{
                description:(0,n.jsxs)(tl,{
                  children:[es?"Your organization’s mobile app limits has been reached. Learn about plans that may better suit your needs.":"When your limits are reached, we will stop capturing new sessions, videos and events until the recording period renews.",es&&(0,n.jsx)(tr,{
                    type:"text",
                    onClick:()=>(0,x.aL)(),
                    children:"Contact us."
                  })]
                }),
                type:"info",
                showIcon:!0
              }),!!Z&&!e_&&(0,n.jsx)(th,{
                description:(0,n.jsxs)(tm,{
                  children:[es?el?eI():eS():el?ek():eC(),es&&el&&ez()]
                }),
                type:"info",
                showIcon:!0
              }),c(e6)&&!!Z&&!e_&&(0,n.jsx)(tc,{
                title:ew(),
                children:(0,n.jsx)(tu,{
                  type:el?1:0,
                  onClick:()=>ea(),
                  loading:f,
                  children:"".concat(el?"Continue capturing data for mobile":es?"Stop capturing data for mobile":"Don't exceed limits this month for mobile")
                })
              })]
            }),!eF&&!e_&&(0,n.jsx)(tg,{}),!eF&&(0,n.jsxs)(n.Fragment,{
              children:[(0,n.jsx)(ts,{
                children:"Web analytics:"
              }),(0,n.jsx)(to,{
                children:Object.entries(X).map(e=>(0,n.jsx)(tx,{
                  label:e[0],
                  values:e[1]
                },e[0]))
              })]
            }),(0,n.jsxs)(tv,{
              children:[eE&&(0,n.jsx)(th,{
                description:(0,n.jsxs)(tl,{
                  children:[ec?"Your organization’s web app limits has been reached. Learn about plans that may better suit your needs.":"When your limits are reached, we will stop capturing new sessions, videos and events until the recording period renews.",ec&&(0,n.jsx)(tr,{
                    type:"text",
                    onClick:()=>(0,x.aL)(),
                    children:"Contact us."
                  })]
                }),
                type:"info",
                showIcon:!0
              }),!!C&&!eF&&(0,n.jsx)(th,{
                description:(0,n.jsxs)(tm,{
                  children:[ec?er?eI(!0):eS(!0):er?ek(!0):eC(!0),ec&&er&&ez(!0)]
                }),
                type:"info",
                showIcon:!0
              }),c(e6)&&!!C&&!eF&&(0,n.jsx)(tc,{
                title:ew(!0),
                children:(0,n.jsx)(tu,{
                  type:er?1:0,
                  onClick:()=>eo(),
                  loading:v,
                  children:"".concat(er?"Continue capturing data for web":ec?"Stop capturing data for web":"Don't exceed limits this month for web")
                })
              })]
            })]
          }),(0,n.jsxs)(tf,{
            children:[e_&&(0,n.jsx)(e4,{}),eF&&(0,n.jsx)(e3,{})]
          }),(0,n.jsx)(eT,{})]
        })]
      })
    },
    tj=i(42432),
    tw=i(56898),
    tZ=i(54221),
    tC=i(30653),
    tk=i(47116),
    tI=i.n(tk);
    let tS=m.default.div.withConfig({
      componentId:"sc-27be336d-0"
    })(["padding:10px 0;table tr th,table tr td,h2,p{color:#505050;}.ant-table-thead th{background:#fff;}table{margin:30px 0;border:1px solid #d0d2d7;border-spacing:0;border-bottom:0;border-left:0;backgroundcolor:'#fff';}table tr th,table tr td{padding:10px;border:1px solid #d0d2d7;border-right:0;border-top:0;border-spacing:0;}@media print{padding:50px 50px;border:0;.invoice-wrapper .ant-modal-close{display:none;}thead{border-top:0;}*::before,*::after,table{border:0;}table tr th,table tr td{border:1px solid #d0d2d7;border-bottom:0;border-right:0;}table{border-bottom:1px solid #d0d2d7;border-right:1px solid #d0d2d7;}}",""],e=>{
      let{
        lineItems:t
      }=e;
      return t&&(0,m.css)(["table{margin:30px 0;border:1px solid #d0d2d7;border-spacing:0;border-bottom:0;backgroundcolor:#fff;}table tr th,table tr td{padding:10px;border:1px solid #d0d2d7;border-right:0;border-left:0;border-top:0;border-spacing:0;}@media print{table{border:1px solid #d0d2d7;border-spacing:0;}table tr th,table tr td{padding:10px;border:1px solid #d0d2d7;border-right:0;border-left:0;border-top:0;border-spacing:0;}}"])
    }),
    tz=m.default.div.withConfig({
      componentId:"sc-27be336d-1"
    })(["display:flex;width:100%;border:0;"]),
    t_=m.default.div.withConfig({
      componentId:"sc-27be336d-2"
    })(["border:0;padding:0 10px 0 0;verticalalign:top;img{width:150px;margin:0 0 10px;}h2{fontsize:24px;marginbottom:10px;}"]),
    tF=m.default.div.withConfig({
      componentId:"sc-27be336d-3"
    })(["width:230px;border:0;margin-left:auto;span{display:inline-block;width:65px;}p{color:#505050;margin:8px 0;}"]),
    tP=m.default.div.withConfig({
      componentId:"sc-27be336d-4"
    })(["padding:0px;border:0;vertical-align:top;width:50%;strong{color:#444444;}"]),
    tE=m.default.div.withConfig({
      componentId:"sc-27be336d-5"
    })(["display:flex;flex-direction:row;flex-wrap:wrap;width:230px;"]),
    tM=m.default.span.withConfig({
      componentId:"sc-27be336d-6"
    })(["display:inline-block;width:65px;font-weight:500;"]),
    tR=m.default.span.withConfig({
      componentId:"sc-27be336d-7"
    })(["word-break:break-all;line-height:normal;span{color:green;}"]),
    tN=m.default.div.withConfig({
      componentId:"sc-27be336d-8"
    })(["display:flex;justify-content:space-between;"]),
    tA=m.default.div.withConfig({
      componentId:"sc-27be336d-9"
    })(["padding:10px;p{margin-bottom:0;line-height:normal;}"]),
    tD=m.default.p.withConfig({
      componentId:"sc-27be336d-10"
    })(["font-weight:500;color:#505050 !important;"]),
    tT=(0,m.default)(tw.Z.Summary.Cell).withConfig({
      componentId:"sc-27be336d-11"
    })(["font-weight:500;span{margin-left:24px;}"]),
    tL=(0,m.default)(tT).withConfig({
      componentId:"sc-27be336d-12"
    })(["display:flex;justify-content:end;span{position:relative;left:28px;}"]),
    tO=[{
      title:"Description",
      width:300,
      render:e=>(0,n.jsx)("div",{
        children:(null==e?void 0:e.plan)==="overage"?"Overage session ".concat(null==e?void 0:e.extraSessions," recording ").concat(null==e?void 0:e.extraVideos," events ").concat(null==e?void 0:e.extraEvents," from ").concat(null==e?void 0:e.billingPeriodStartDate," to ").concat(null==e?void 0:e.billingPeriodEndDate):(0,n.jsxs)("p",{
          children:["Subscribed to ",(0,n.jsx)("span",{
            children:null==e?void 0:e.plan
          },null==e?void 0:e.plan),"from"," ",(0,n.jsx)("strong",{
            children:null==e?void 0:e.billingPeriodStartDate
          },null==e?void 0:e.billingPeriodStartDate)," ","to"," ",(0,n.jsx)("strong",{
            children:null==e?void 0:e.billingPeriodEndDate
          },null==e?void 0:e.billingPeriodEndDate)]
        })
      })
    },{
      title:"Plan Type",
      width:100,
      dataIndex:"planType",
      key:"planType"
    },{
      title:"Amount",
      width:100,
      key:"amount",
      render:e=>(0,n.jsx)("span",{
        children:"USD $".concat(null==e?void 0:e.amount)
      })
    },{
      title:"Status",
      width:100,
      key:"status",
      render:e=>(0,n.jsx)("strong",{
        children:null==e?void 0:e.status
      })
    }],
    tU=[{
      title:"Description",
      width:"70%",
      render:e=>(0,n.jsxs)(tA,{
        children:[(0,n.jsx)(tD,{
          children:null==e?void 0:e.description
        }),(null==e?void 0:e.entityType)==="plan_item_price"&&(0,n.jsx)("p",{
          children:"".concat(null==e?void 0:e.dateFrom," to ").concat(null==e?void 0:e.dateTo)
        })]
      })
    },{
      title:"Amount (USD)",
      key:"amount",
      width:"15%",
      align:"center",
      render:e=>(0,n.jsx)("strong",{
        children:"$".concat(null==e?void 0:e.amount)
      })
    }],
    tV=(0,a.forwardRef)((e,t)=>{
      var i,
      o;
      let l=null==e?void 0:null===(i=e.invoiceReceipt)||void 0===i?void 0:i.transaction,
      r=(0,a.useMemo)(()=>{
        var e;
        return null==l?void 0:null===(e=l.lineItems)||void 0===e?void 0:e.length
      },[l]);
      return(0,n.jsxs)(tS,{
        ref:t,
        lineItems:r>0,
        children:[(0,n.jsxs)(tz,{
          children:[(0,n.jsxs)(t_,{
            children:[(0,n.jsx)("img",{
              src:"/static/uxcam-new-logo.svg",
              alt:"UXCam"
            }),(0,n.jsx)("h2",{
              children:"INVOICE"
            })]
          }),(0,n.jsxs)(tF,{
            children:[(0,n.jsx)("p",{
              children:(0,n.jsx)("strong",{
                children:"UXCam Inc."
              })
            }),(0,n.jsxs)("p",{
              children:["315 Montgomery St, 10th Floor",(0,n.jsx)("br",{}),"San Francisco, CA, 94104 ",(0,n.jsx)("br",{}),"U.S.A."]
            }),(0,n.jsxs)("p",{
              children:[(0,n.jsx)("span",{
                children:(0,n.jsx)("strong",{
                  children:"Tax ID"
                })
              }),": 471651508"]
            })]
          })]
        }),(0,n.jsxs)(tN,{
          children:[(0,n.jsx)(tP,{
            children:(null==l?void 0:l.invoiceAddress)&&(0,n.jsxs)(n.Fragment,{
              children:[(0,n.jsx)("strong",{
                children:"Bill to:"
              }),(0,n.jsx)("p",{
                children:(0,tC.ZP)(null==l?void 0:l.invoiceAddress)
              })]
            })
          }),(0,n.jsxs)(tE,{
            children:[(0,n.jsxs)("div",{
              children:[(0,n.jsx)(tM,{
                children:"Date"
              }),(0,n.jsxs)(tR,{
                children:[": ",null==l?void 0:l.invoiceDate]
              })]
            }),(0,n.jsxs)("div",{
              children:[(0,n.jsx)(tM,{
                children:"Invoice #"
              }),(0,n.jsxs)(tR,{
                children:[": ",null==l?void 0:l.invoiceId]
              })]
            }),r&&(0,n.jsxs)("div",{
              children:[(0,n.jsx)(tM,{
                children:"Status"
              }),(0,n.jsxs)(tR,{
                children:[": ",(0,n.jsx)("span",{
                  children:null==l?void 0:null===(o=l.status)||void 0===o?void 0:o.toUpperCase()
                })]
              })]
            })]
          })]
        }),r?(0,n.jsx)(tw.Z,{
          columns:tU,
          dataSource:null==l?void 0:l.lineItems,
          pagination:{
            position:["none","none"]
          },
          summary:()=>(0,n.jsxs)(tw.Z.Summary.Row,{
            children:[(0,n.jsxs)(tL,{
              index:0,
              children:[" ",(0,n.jsx)("span",{
                children:"Total"
              })," "]
            }),(0,n.jsxs)(tT,{
              index:1,
              children:[" ",(0,n.jsx)("span",{
                children:"$".concat(null==l?void 0:l.amount)
              })," "]
            })]
          })
        }):(0,n.jsx)(tw.Z,{
          columns:tO,
          dataSource:[l],
          summary:()=>(0,n.jsx)(tw.Z.Summary,{
            fixed:"bottom",
            children:(0,n.jsxs)(tw.Z.Summary.Row,{
              children:[(0,n.jsx)(tw.Z.Summary.Cell,{
                colSpan:3,
                children:"Total"
              }),(0,n.jsxs)(tw.Z.Summary.Cell,{
                children:[" ",(0,n.jsxs)("strong",{
                  children:["USD $",null==l?void 0:l.amount]
                },null==l?void 0:l.amount)]
              })]
            })
          }),
          pagination:{
            position:["none","none"]
          }
        }),(0,n.jsx)("p",{
          children:"This is only for your records, no payment is due. If you have any questions, please contact us at team@uxcam.com. Thank you for your business!"
        })]
      })
    });
    var tB=e=>{
      let{
        invoiceReceipt:t,
        loading:i
      }=e,
      o=(0,a.useRef)();
      return(0,n.jsxs)(en.Z,{
        loading:i,
        children:[(0,n.jsx)(tV,{
          invoiceReceipt:t,
          ref:o
        }),(0,n.jsx)(tI(),{
          trigger:()=>(0,n.jsx)(y.Z,{
            type:"primary",
            icon:(0,n.jsx)(tZ.Z,{}),
            children:"Print"
          },"submit"),
          content:()=>o.current
        })]
      })
    };
    let tK=m.default.div.withConfig({
      componentId:"sc-45cc5b2b-0"
    })(["border:1px solid #c0cad9;border-radius:5px;padding:20px 20px 0 20px;.ant-table-thead > tr > th{background:none;&::before{display:none;}}.ant-table-thead > tr > th,.ant-table-tbody > tr > td,.ant-table tfoot > tr > th,.ant-table tfoot > tr > td{padding:10px 0;}.ant-table-pagination.ant-pagination{font-size:14px;.ant-pagination-item{min-width:25px;height:25px;text-align:center;background:#fff;line-height:23px;a{color:#161e35;}}.ant-pagination-item:focus a{color:#868ea1 !important;}}.ant-pagination-item-active{border-color:#5d97ff !important;a{color:#5d97ff !important;}}.ant-pagination-item-link{border:0;font-size:13px;}"]),
    tW=m.default.h3.withConfig({
      componentId:"sc-45cc5b2b-1"
    })(["font-size:",";line-height:",";color:",";font-weight:500;white-space:wrap;"],v.r.fontSize(1.8),v.r.fontSize(2.8),v.r.colors.primaryMidnight.toString()),
    tq=(0,m.default)(y.Z).withConfig({
      componentId:"sc-45cc5b2b-2"
    })(["color:#5d97ff !important;border-color:#5d97ff !important;border-radius:4px;font-size:12px;padding:6px 8px;width:120px;"]),
    tQ=(0,m.default)(tj.Z).withConfig({
      componentId:"sc-45cc5b2b-3"
    })(["color:",";background:rgba(0,197,140,0.05);height:25px;width:fit-content;display:flex;align-items:center;"],e=>{
      let{
        status:t
      }=e;
      return"Paid"===t?"#00C58C":"#F4584C"
    });
    var tH=()=>{
      var e,
      t,
      i,
      o;
      let{
        currentOrgReducer:{
          orgId:l
        }
      }=(0,r.v9)(e=>e),
      [s,c]=(0,a.useState)(!1),
      [d,p]=(0,a.useState)(),
      [u,h]=(0,a.useState)({}),
      [f,m]=(0,a.useState)({
        current:1,
        pageSize:4,
        position:["bottomCenter"]
      }),
      v=(0,a.useMemo)(()=>["payhistory ".concat(l),null==f?void 0:f.current],[l,f]),
      g=(0,a.useMemo)(()=>"invoice ".concat(l," ").concat(d),[l,d]),
      x=(0,a.useMemo)(()=>"downloadInvoice ".concat(l," ").concat(d),[l,d]),
      {
        data:b,
        isLoading:y
      }=(0,ei.useQuery)(v,()=>ep.Z.getPaymentHistory(l,null==f?void 0:f.current)),
      {
        paymentHistory:j,
        pagination:w
      }=(null==b?void 0:null===(e=b.data)||void 0===e?void 0:e.data)||{},
      Z=(0,a.useMemo)(()=>w&&{
        current:null==w?void 0:w.current,
        pageSize:null==w?void 0:w.limit,
        total:null==w?void 0:w.total,
        position:["bottomCenter"]
      },[w]),
      {
        data:C,
        isLoading:k,
        error:I
      }=(0,ei.useQuery)(x,()=>ep.Z.getDownloadableInvoice(l,d),{
        enabled:!!d,
        retry:!1
      }),
      {
        data:S,
        isLoading:z
      }=(0,ei.useQuery)(g,()=>d&&ep.Z.getInvoice(l,d),{
        enabled:(null==I?void 0:null===(t=I.response)||void 0===t?void 0:t.status)===404,
        retry:!1
      }),
      _=e=>{
        p(e)
      },
      F=[{
        title:"Date",
        key:"date",
        dataIndex:"date"
      },{
        title:"Amount",
        key:"amount",
        dataIndex:"amount",
        render:e=>(0,n.jsx)("span",{
          children:"USD $".concat(e)
        })
      },{
        title:"",
        key:"status",
        dataIndex:"status",
        render:e=>(0,n.jsx)(tQ,{
          status:e,
          children:e
        })
      },{
        title:"",
        key:"action",
        render:e=>(0,n.jsx)(tq,{
          ghost:!0,
          loading:k&&(d===(null==e?void 0:e.id)||d===(null==e?void 0:e.transactionId)),
          onClick:t=>{
            t.stopPropagation(),
            t.preventDefault(),
            _(null==e?void 0:e.id)
          },
          children:"Download"
        })
      }];
      return(0,a.useEffect)(()=>{
        Z&&m(Z)
      },[Z]),
      (0,a.useEffect)(()=>{
        var e,
        t;
        (null==I?void 0:null===(e=I.response)||void 0===e?void 0:e.status)===404&&c(!0),
        h(null==S?void 0:null===(t=S.data)||void 0===t?void 0:t.data)
      },[null==I?void 0:null===(i=I.response)||void 0===i?void 0:i.status,null==S?void 0:null===(o=S.data)||void 0===o?void 0:o.data]),
      (0,a.useEffect)(()=>{
        var e;
        C&&window.open(null==C?void 0:null===(e=C.data)||void 0===e?void 0:e.data.pdf,"_blank","noopener,noreferrer")
      },[C]),
      (0,n.jsxs)(tK,{
        children:[(0,n.jsx)(tW,{
          children:"Billing history"
        }),(0,n.jsx)(tw.Z,{
          rowKey:e=>null==e?void 0:e.id,
          columns:F,
          dataSource:j,
          pagination:f,
          onChange:e=>{
            let{
              current:t
            }=e;
            m({
              ...f,
              current:t
            })
          },
          loading:y
        }),(0,n.jsx)(es.default,{
          title:"",
          visible:s,
          onOk:()=>{
            p(null),
            c(!s)
          },
          width:700,
          footer:null,
          onCancel:()=>{
            p(null),
            c(!1)
          },
          children:(0,n.jsx)(tB,{
            invoiceReceipt:u,
            loading:z
          })
        })]
      })
    },
    tY=i(97043),
    tG=e=>(0,n.jsxs)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:16,
      height:16,
      fill:"none",
      ...e,
      children:[(0,n.jsx)("path",{
        stroke:"currentColor",
        strokeLinecap:"round",
        strokeWidth:1.5,
        d:"M8 5.6V8m0 0v2.4M8 8h2.4M8 8H5.6"
      }),(0,n.jsx)("path",{
        stroke:"currentColor",
        strokeWidth:1.5,
        d:"M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z"
      })]
    }),
    t$=i(39869);
    let tJ=(e,t)=>{
      (0,a.useEffect)(()=>{
        let i=i=>{
          !e.current||e.current.contains(i.target)||t(i)
        };
        return document.addEventListener("mousedown",i),
        document.addEventListener("touchstart",i),
        ()=>{
          document.removeEventListener("mousedown",i),
          document.removeEventListener("touchstart",i)
        }
      },[e,t])
    },
    tX=m.default.div.withConfig({
      componentId:"sc-757302d4-0"
    })(["display:flex;flex-wrap:wrap;position:relative;gap:8px;button{font-weight:400;font-size:14px;line-height:24px;svg{margin-right:2px;}&:not( :hover ){background-color:#F3F4F5;color:#49576E;}}"]),
    t0=m.default.div.withConfig({
      componentId:"sc-757302d4-1"
    })(["font-size:14px;line-height:24px;height:fit-content;font-weight:400;font-family:'Roboto',sans-serif;color:#49576E;background-color:#E8E8EB;padding:0 6px;border-radius:4px;"]),
    t1=m.default.div.withConfig({
      componentId:"sc-757302d4-2"
    })(["display:flex;flex-direction:column;"]),
    t2=m.default.div.withConfig({
      componentId:"sc-757302d4-3"
    })(["display:flex;flex-wrap:wrap;width:100%;border:1px solid #E8E8EB;border-radius:6px;padding:5px 10px 0 10px;margin-bottom:8px;"]),
    t3=m.default.div.withConfig({
      componentId:"sc-757302d4-4"
    })(["display:flex;flex-wrap:wrap;margin-bottom:5px;margin-right:8px;gap:8px;"]),
    t4=(0,m.default)(t0).withConfig({
      componentId:"sc-757302d4-5"
    })(["display:flex;align-items:center;background-color:#DFEAFF;border-radius:4px;color:#161E35;font-size:12px;line-height:18px;font-weight:400;font-family:'Roboto',sans-serif;cursor:default;padding-right:3px;margin-right:0px;button{padding:0;margin:0;background:transparent;border:none;height:16px;width:16px;cursor:pointer;svg{height:16px;width:16px;}}"]),
    t5=m.default.div.withConfig({
      componentId:"sc-757302d4-6"
    })(["font-size:12px;line-height:18px;color:#F4584C;"]),
    t6=m.default.div.withConfig({
      componentId:"sc-757302d4-7"
    })(["display:flex;gap:8px;margin-top:8px;button{min-width:0 !important;padding-left:36px;padding-right:36px;}"]),
    t7=m.default.input.withConfig({
      componentId:"sc-757302d4-8"
    })(["flex:1;font-size:12px;line-height:18px;color:#161E35;padding:0;margin:0;border:none;min-width:150px;margin-bottom:5px;&::placeholder{color:#737886;}"]);
    var t8=e=>{
      let{
        data:t,
        callback:i,
        inputPlaceholder:o,
        regex:l,
        loading:r,
        btnLabel:s
      }=e,
      [c,d]=a.useState(!1),
      [p,u]=a.useState([]),
      [h,f]=a.useState(""),
      [m,v]=a.useState(null),
      [g,x]=a.useState(!1),
      b=a.useRef(null),
      y=a.useRef(null),
      j=a.useCallback(()=>d(!0),[]),
      w=a.useCallback(e=>{
        u(t=>t.filter(t=>t!==e))
      },[]),
      Z=a.useCallback(e=>!l||l.test(e),[l]),
      C=a.useCallback(e=>{
        let t=e.trim();
        if(!t)return f(""),
        !1;
        if(!Z(t))return v("Please enter a valid email"),
        b.current=setTimeout(()=>v(null),4e3),
        !1;
        if(null==p?void 0:p.includes(t))return v("Email already exists"),
        b.current=setTimeout(()=>v(null),4e3),
        !1;
        let i=[...p,t];
        return u(i),
        f(""),
        i
      },[Z,p]),
      k=a.useCallback(e=>{
        let{
          noCallback:n=!1
        }=e,
        a=n?()=>null:i;
        if(null==h?void 0:h.length){
          let e=C(h);
          if(!e)return;
          a(e)
        }
        else(null==p?void 0:p.length)||(null==h?void 0:h.length)||null==t||!t.length?JSON.stringify(t)!==JSON.stringify(p)&&a(p):a([]);
        n||d(!1),
        f("")
      },[p,t,i,C,h]),
      S=a.useCallback(()=>{
        u(t||[]),
        d(!1),
        f("")
      },[t]),
      z=a.useCallback(e=>{
        v(null),
        [188,32,13].includes(e.keyCode)&&C(e.target.value),
        8===e.keyCode&&!h&&(null==p?void 0:p.length)&&u(p.slice(0,-1))
      },[p,h,C]),
      _=a.useCallback(e=>{
        let t=e.target.value;
        t.includes(",")||f(t.trim())
      },[]);
      return(tJ(y,()=>{
        k({
          noCallback:!0
        })
      }),a.useEffect(()=>{
        g||(null==p?void 0:p.length)||!t||(u(t||[]),x(!0))
      },[t,p,g]),a.useEffect(()=>()=>{
        clearTimeout(b.current)
      },[]),c)?(0,n.jsxs)(t1,{
        ref:y,
        children:[(0,n.jsxs)(t2,{
          children:[(0,n.jsx)(t3,{
            children:null==p?void 0:p.map(e=>(0,n.jsxs)(t4,{
              children:[e,(0,n.jsx)("button",{
                type:"button",
                onClick:()=>w(e),
                disabled:r,
                children:(0,n.jsx)(t$.Z,{})
              })]
            },e))
          }),(0,n.jsx)(t7,{
            placeholder:o,
            onKeyDown:z,
            value:h,
            onChange:_
          })]
        }),!!m&&(0,n.jsx)(t5,{
          children:m
        }),(0,n.jsxs)(t6,{
          children:[(0,n.jsx)(I.zx,{
            variant:"primary",
            size:"large",
            onClick:k,
            disabled:r,
            children:"Save"
          }),(0,n.jsx)(I.zx,{
            variant:"ghost",
            size:"large",
            onClick:S,
            children:"Cancel"
          })]
        })]
      }):(0,n.jsxs)(tX,{
        children:[(t||[]).map(e=>(0,n.jsx)(t0,{
          children:e
        },e)),(0,n.jsxs)(eS.Z,{
          onClick:j,
          variant:"ghost",
          size:"medium",
          disabled:r,
          children:[(0,n.jsx)(tG,{}),s]
        })]
      })
    },
    t9=i(22514),
    ie=i(17088),
    it=i(17984);
    let ii=m.default.div.withConfig({
      componentId:"sc-f6bd5539-0"
    })([".ant-form-item{display:flex;flex-direction:column;flex:1;}.ant-select-dropdown{padding:0 !important;border-radius:8px !important;box-shadow:none;border:1px solid #F2F2F2;.ant-select-item{font-size:12px;line-height:14px;font-weight:400;color:#4F4F4F;padding:8px 32px 8px 9px;&:hover:not( .ant-select-item-option-selected ){background-color:#EFF5FF;}&.ant-select-item-option-selected{background-color:#DFEAFF;}}}"]),
    ia=m.default.div.withConfig({
      componentId:"sc-f6bd5539-1"
    })(["display:flex;width:100%;gap:10px;margin-bottom:16px;.ant-form-item{margin-bottom:0 !important;}.ant-form-item-label{margin-bottom:8px !important;label{color:#454B5D !important;font-size:12px !important;line-height:14px !important;font-weight:500 !important;font-family:'Roboto',sans-serif !important;height:fit-content;&::before{display:none !important;}}}.ant-form-item-control{.ant-form-item-control-input{min-height:0px !important;input{height:fit-content !important;border-radius:6px !important;border:1px solid #E8E8EB !important;color:#161E35 !important;font-size:12px !important;line-height:14px !important;font-weight:400 !important;font-family:'Roboto',sans-serif !important;padding:8px 10px !important;box-shadow:none !important;&::placeholder{color:#737886 !important;}&:active,&:focus{border-color:#5D97FF !important;}&.ant-input-status-error{border-color:#F4584C !important;outline:none;}&:hover:not( :active ):not( :focus ):not( .ant-input-status-error ){border-color:#9EC1FF !important;}}}.ant-form-item-explain-error{font-size:12px;line-height:14px;margin-top:8px;}}.ant-select{font-size:12px !important;line-height:14px !important;color:#161E35 !important;.ant-select-selection-item{color:#161E35 !important;}.ant-select-selector{border-color:#E8E8EB !important;border-radius:6px !important;}&.ant-select-open,&.ant-select-focused{.ant-select-selector{border-color:#5D97FF !important;}}&:hover:not( :active ):not( :focus ):not( .ant-input-status-error ):not( .ant-select-open ):not( .ant-select-disabled ){.ant-select-selector{border-color:#9EC1FF !important;}}.ant-select-selection-placeholder{color:#737886 !important;}}.ufc-select{width:100%;height:fit-content;font-family:'Roboto',sans-serif !important;.ufc-select-selector{border:1px solid #E8E8EB !important;.ufc-select-selection-item{font-size:12px !important;line-height:14px !important;}}}"]),
    io=m.default.div.withConfig({
      componentId:"sc-f6bd5539-2"
    })(["width:100%;display:flex;justify-content:flex-end;margin-top:32px;gap:16px;"]);
    var il=e=>{
      let{
        form:t,
        popupOpen:i,
        setPopupOpen:o,
        setBillingAddress:l,
        billingAddressIsLoading:s,
        billingInfo:c,
        setFormDefaultValues:d
      }=e,
      [p,u]=a.useState(""),
      [h,f]=a.useState(""),
      m=ew.Z.useWatch("country",t),
      v=a.useRef(),
      {
        currentOrgReducer:{
          organizationName:g
        },
        profileReducer:{
          email:x
        }
      }=(0,r.v9)(e=>e),
      b=a.useMemo(()=>tY.Z.getAllCountries().filter(e=>{
        let{
          name:t
        }=e;
        return t.toLowerCase().includes(p.toLowerCase())
      }).map(e=>{
        let{
          name:t,
          isoCode:i
        }=e;
        return{
          label:t,
          value:i
        }
      }),[p]),
      y=a.useMemo(()=>m?it.ZP.getStatesOfCountry(m).filter(e=>{
        let{
          name:t
        }=e;
        return t.toLowerCase().includes(h.toLowerCase())
      }).map(e=>{
        let{
          name:t
        }=e;
        return{
          label:t,
          value:t
        }
      }):[],[m,h]),
      j=a.useCallback(e=>{
        var t,
        i,
        n,
        a,
        r,
        s,
        d;
        if(e.address===(null==c?void 0:null===(t=c.address)||void 0===t?void 0:t.address)&&e.city===(null==c?void 0:null===(i=c.address)||void 0===i?void 0:i.city)&&e.country===(null==c?void 0:null===(n=c.address)||void 0===n?void 0:n.country)&&e.firstName===(null==c?void 0:null===(a=c.address)||void 0===a?void 0:a.first_name)&&e.lastName===(null==c?void 0:null===(r=c.address)||void 0===r?void 0:r.last_name)&&e.state===(null==c?void 0:null===(s=c.address)||void 0===s?void 0:s.state)&&e.vatNumber===((null==c?void 0:c.vat_number)||"")&&e.zip===(null==c?void 0:null===(d=c.address)||void 0===d?void 0:d.zip)){
          o(!1);
          return
        }
        let{
          firstName:p,
          lastName:u,
          country:h,
          state:f,
          zip:m,
          city:v,
          address:b,
          vatNumber:y
        }=e;
        l({
          address:{
            company:g,
            email:x,
            first_name:p,
            last_name:u,
            address:b,
            city:v,
            state:f,
            zip:m,
            country:h
          },
          vat_number:(null==y?void 0:y.length)?y:null
        })
      },[g,x,o,l,c]),
      w=a.useCallback(()=>{
        o(!1),
        setTimeout(()=>{
          u(""),
          f(""),
          d()
        },100)
      },[o,d]);
      return(0,n.jsx)(es.default,{
        visible:i,
        footer:null,
        onCancel:w,
        closable:!1,
        className:"ant-modal-delete-nocode-event",
        wrapClassName:"ant-modal-delete-nocode-event-wrapper",
        width:570,
        children:(0,n.jsx)(I.Fo,{
          children:(0,n.jsx)(ew.Z,{
            form:t,
            onFinish:j,
            disabled:s,
            onValuesChange:e=>{
              let i=Object.keys(e)[0];
              t.setFields([{
                name:i,
                errors:[]
              }])
            },
            children:(0,n.jsxs)(ii,{
              ref:v,
              children:[(0,n.jsx)(t9.Dx,{
                children:"Update billing information"
              }),(0,n.jsx)(ie.DK,{
                children:"This information will appear on all your receipts. For your security, do not include any confidential or financial information."
              }),(0,n.jsxs)(ia,{
                children:[(0,n.jsx)(ew.Z.Item,{
                  label:"First name",
                  name:"firstName",
                  rules:[{
                    required:!0,
                    message:"Please input your first name"
                  }],
                  children:(0,n.jsx)(F.default,{
                    "aria-label":"First name",
                    placeholder:"Enter first name"
                  })
                }),(0,n.jsx)(ew.Z.Item,{
                  label:"Last name",
                  name:"lastName",
                  rules:[{
                    required:!0,
                    message:"Please input your last name"
                  }],
                  children:(0,n.jsx)(F.default,{
                    "aria-label":"Last name",
                    placeholder:"Enter last name"
                  })
                })]
              }),(0,n.jsx)(ia,{
                children:(0,n.jsx)(ew.Z.Item,{
                  label:"Country",
                  name:"country",
                  rules:[{
                    required:!0,
                    message:"Please input your country"
                  }],
                  children:(0,n.jsx)(I.MF,{
                    getPopupContainer:()=>null==v?void 0:v.current,
                    renderOptions:b,
                    onChange:()=>{
                      let e=null==t?void 0:t.setFieldsValue;
                      e&&e({
                        state:void 0
                      })
                    },
                    value:m,
                    placeholder:"Select country",
                    searchProps:{
                      onChange:e=>{
                        let{
                          target:t
                        }=e;
                        return u(t.value)
                      }
                    },
                    disabled:s
                  })
                })
              }),(0,n.jsxs)(ia,{
                children:[(0,n.jsx)(ew.Z.Item,{
                  label:"State",
                  name:"state",
                  rules:[{
                    required:!!(null==y?void 0:y.length),
                    message:"Please input your state"
                  }],
                  children:(0,n.jsx)(I.MF,{
                    getPopupContainer:()=>null==v?void 0:v.current,
                    renderOptions:y,
                    disabled:!(null==y?void 0:y.length)||s,
                    placeholder:"Select state",
                    searchProps:{
                      onChange:e=>{
                        let{
                          target:t
                        }=e;
                        return f(t.value)
                      }
                    }
                  })
                }),(0,n.jsx)(ew.Z.Item,{
                  label:"Postal code",
                  name:"zip",
                  rules:[{
                    required:!0,
                    message:"Please input your postal code"
                  }],
                  children:(0,n.jsx)(F.default,{
                    "aria-label":"Postal code",
                    placeholder:"Enter postal code"
                  })
                })]
              }),(0,n.jsx)(ia,{
                children:(0,n.jsx)(ew.Z.Item,{
                  label:"City",
                  name:"city",
                  rules:[{
                    required:!0,
                    message:"Please input city"
                  }],
                  children:(0,n.jsx)(F.default,{
                    "aria-label":"City",
                    placeholder:"Enter city"
                  })
                })
              }),(0,n.jsx)(ia,{
                children:(0,n.jsx)(ew.Z.Item,{
                  label:"Address line 1",
                  name:"address",
                  rules:[{
                    required:!0,
                    message:"Please input address"
                  }],
                  children:(0,n.jsx)(F.default,{
                    "aria-label":"Address",
                    placeholder:"Enter address"
                  })
                })
              }),(0,n.jsx)(ia,{
                children:(0,n.jsx)(ew.Z.Item,{
                  label:"VAT number (optional)",
                  name:"vatNumber",
                  children:(0,n.jsx)(F.default,{
                    "aria-label":"VAT number",
                    placeholder:"Enter VAT"
                  })
                })
              }),(0,n.jsxs)(io,{
                children:[(0,n.jsx)(eS.Z,{
                  width:"medium",
                  variant:"ghost",
                  onClick:w,
                  disabled:!!s,
                  type:"button",
                  children:"Cancel"
                }),(0,n.jsx)(eS.Z,{
                  width:"medium",
                  type:"submit",
                  disabled:!!s,
                  children:"Submit"
                })]
              })]
            })
          })
        })
      })
    };
    let ir=m.default.div.withConfig({
      componentId:"sc-9e47cb5b-0"
    })(["display:flex;margin-bottom:10px;"]),
    is=m.default.div.withConfig({
      componentId:"sc-9e47cb5b-1"
    })(["display:flex;width:100%;justify-content:space-between;margin-bottom:10px;align-items:center;"]),
    ic=(0,m.default)(I.zx).withConfig({
      componentId:"sc-9e47cb5b-2"
    })(["font-size:14px !important;line-height:16px !important;padding:8px 14px !important;height:fit-content !important;min-width:0 !important;"]),
    id=m.default.div.withConfig({
      componentId:"sc-9e47cb5b-3"
    })(["position:relative;border:1px solid #c0cad9;border-radius:5px;padding:20px;margin-top:20px;.ant-form-item-explain.ant-form-item-explain-error{font-size:12px;margin:2px;}",":last-of-type{margin-bottom:0;}"],ir),
    ip=m.default.div.withConfig({
      componentId:"sc-9e47cb5b-4"
    })(["h3{font-size:",";line-height:",";color:",";font-weight:500;margin-bottom:0px;z-index:4;}"],v.r.fontSize(1.8),v.r.fontSize(2.8),v.r.colors.primaryMidnight.toString()),
    iu=m.default.h4.withConfig({
      componentId:"sc-9e47cb5b-5"
    })(["font-size:14px;line-height:22px;font-weight:500;color:#49576E;font-family:'Roboto',sans-serif;min-width:140px;margin-right:24px;margin-bottom:0;"]),
    ih=(0,m.default)(iu).withConfig({
      componentId:"sc-9e47cb5b-6"
    })(["font-weight:400;min-width:initial;margin-right:initial;width:100%;"]),
    im=m.default.div.withConfig({
      componentId:"sc-9e47cb5b-7"
    })(["position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba( 255,255,255,0.5 );z-index:2;"]);
    var iv=()=>{
      var e,
      t,
      i,
      o,
      l,
      s,
      c,
      d;
      let[p,u]=(0,a.useState)(!1),
      {
        currentOrgReducer:{
          orgId:h
        }
      }=(0,r.v9)(e=>e),
      f=(0,ei.useQueryClient)(),
      {
        data:m,
        isFetching:v,
        refetch:x
      }=(0,ei.useQuery)("billingInfo",()=>ep.Z.getBillingInfo(h),{
        enabled:!!h
      }),
      {
        mutate:b,
        isLoading:y
      }=(0,ei.useMutation)({
        mutationFn:e=>ep.Z.setRecipientEmails(h,e),
        onMutate:async e=>{
          await f.cancelQueries({
            queryKey:["billingInfo"]
          });
          let t=f.getQueryData(["billingInfo"]);
          return f.setQueryData(["billingInfo"],t=>({
            ...t,
            billing_recipients:e
          })),
          {
            prevData:t
          }
        },
        onSuccess:()=>{
          x(),
          u(!1)
        }
      }),
      j=e=>Object.keys(e).map(t=>{
        let i=e[t];
        if("string"!=typeof i){
          let e=Object.keys(i)[0];
          return{
            name:e,
            errors:[i[e]]
          }
        }
        return i.includes("VAT Number not applicable for this country")?{
          name:"vatNumber",
          errors:["Please enter valid VAT number"]
        }:((0,g.sT)("Please enter valid billing information"),null)
      }),
      [w]=ew.Z.useForm(),
      {
        mutate:Z,
        isLoading:C
      }=(0,ei.useMutation)({
        mutationFn:e=>ep.Z.setBillingAddress(h,e),
        onMutate:async e=>{
          await f.cancelQueries({
            queryKey:["billingInfo"]
          });
          let t=f.getQueryData(["billingInfo"]);
          return f.setQueryData(["billingInfo"],t=>({
            ...t,
            billing_info:e
          })),
          {
            prevData:t
          }
        },
        onSuccess:()=>{
          x(),
          u(!1)
        },
        onError:e=>{
          var t;
          let{
            response:i
          }=e,
          n=j(null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.error);
          (null==n?void 0:n.length)&&w.setFields(n)
        }
      }),
      k=null==m?void 0:m.billing_info,
      S=null==m?void 0:m.billing_recipients,
      z=a.useCallback(e=>{
        b(e)
      },[b]),
      _=a.useCallback(()=>{
        var e,
        t,
        i,
        n,
        a,
        o,
        l;
        w.setFieldsValue({
          firstName:(null==k?void 0:null===(e=k.address)||void 0===e?void 0:e.first_name)||void 0,
          lastName:(null==k?void 0:null===(t=k.address)||void 0===t?void 0:t.last_name)||void 0,
          country:(null==k?void 0:null===(i=k.address)||void 0===i?void 0:i.country)||void 0,
          state:(null==k?void 0:null===(n=k.address)||void 0===n?void 0:n.state)||void 0,
          zip:(null==k?void 0:null===(a=k.address)||void 0===a?void 0:a.zip)||void 0,
          city:(null==k?void 0:null===(o=k.address)||void 0===o?void 0:o.city)||void 0,
          address:(null==k?void 0:null===(l=k.address)||void 0===l?void 0:l.address)||void 0,
          vatNumber:(null==k?void 0:k.vat_number)||void 0
        })
      },[w,k]);
      a.useEffect(()=>{
        _()
      },[_]);
      let F=null==k?void 0:null===(e=k.address)||void 0===e?void 0:e.country,
      P=F?null===(t=tY.Z.getCountryByCode(F))||void 0===t?void 0:t.name:"-";
      return(0,n.jsxs)(n.Fragment,{
        children:[(0,n.jsx)(il,{
          popupOpen:p,
          setPopupOpen:u,
          form:w,
          setBillingAddress:Z,
          billingAddressIsLoading:C,
          billingInfo:k,
          setFormDefaultValues:_
        }),(0,n.jsxs)(id,{
          children:[v&&!m&&(0,n.jsx)(im,{
            children:(0,n.jsx)(I.$j,{
              "data-size":"m"
            })
          }),(0,n.jsx)(ip,{
            children:(0,n.jsxs)(is,{
              children:[(0,n.jsx)("h3",{
                children:"Billing information"
              }),(0,n.jsx)(ic,{
                variant:"secondary",
                size:"big",
                onClick:()=>u(!0),
                children:"Update Information"
              })]
            })
          }),(0,n.jsxs)(ir,{
            children:[(0,n.jsx)(iu,{
              children:"VAT Number:"
            }),(0,n.jsx)(ih,{
              children:(null==k?void 0:k.vat_number)||"-"
            })]
          }),(0,n.jsxs)(ir,{
            children:[(0,n.jsx)(iu,{
              children:"First Name:"
            }),(0,n.jsx)(ih,{
              children:(null==k?void 0:null===(i=k.address)||void 0===i?void 0:i.first_name)||"-"
            })]
          }),(0,n.jsxs)(ir,{
            children:[(0,n.jsx)(iu,{
              children:"Last Name:"
            }),(0,n.jsx)(ih,{
              children:(null==k?void 0:null===(o=k.address)||void 0===o?void 0:o.last_name)||"-"
            })]
          }),(0,n.jsxs)(ir,{
            children:[(0,n.jsx)(iu,{
              children:"Country:"
            }),(0,n.jsx)(ih,{
              children:P
            })]
          }),(0,n.jsxs)(ir,{
            children:[(0,n.jsx)(iu,{
              children:"State:"
            }),(0,n.jsx)(ih,{
              children:(null==k?void 0:null===(l=k.address)||void 0===l?void 0:l.state)||"-"
            })]
          }),(0,n.jsxs)(ir,{
            children:[(0,n.jsx)(iu,{
              children:"City:"
            }),(0,n.jsx)(ih,{
              children:(null==k?void 0:null===(s=k.address)||void 0===s?void 0:s.city)||"-"
            })]
          }),(0,n.jsxs)(ir,{
            children:[(0,n.jsx)(iu,{
              children:"Address line 1:"
            }),(0,n.jsx)(ih,{
              children:(null==k?void 0:null===(c=k.address)||void 0===c?void 0:c.address)||"-"
            })]
          }),(0,n.jsxs)(ir,{
            children:[(0,n.jsx)(iu,{
              children:"Postal code:"
            }),(0,n.jsx)(ih,{
              children:(null==k?void 0:null===(d=k.address)||void 0===d?void 0:d.zip)||"-"
            })]
          }),(0,n.jsxs)(ir,{
            children:[(0,n.jsx)(iu,{
              children:"Billing Recipients:"
            }),(0,n.jsx)(ih,{
              children:(0,n.jsx)(t8,{
                data:S,
                callback:z,
                inputPlaceholder:"Add recipients’ emails",
                regex:O.HN,
                loading:y,
                btnLabel:"Add recipients"
              })
            })]
          })]
        })]
      })
    },
    ig=i(76501),
    ix=i(4035);
    let ib=ew.Z.Item,
    iy=m.default.div.withConfig({
      componentId:"sc-7d816670-0"
    })(["margin-top:15px;border:solid 1px #c0cad0;border-radius:5px;.session-usages-card-head{padding:15px 20px 0px;h3{font-size:18px;font-weight:500;margin-bottom:0px;color:#161e35;}p{font-size:14px;line-height:18px;margin-top:7px;}}.session-usages-card-body{padding:20px;padding-top:0px;.session-usages-card-element{&:not( :first-of-type ){margin-top:-10px;}&:last-of-type{.ant-btn.ant-btn-primary.ant-btn-sm{margin-bottom:0px;}}}.session-usage-label{margin:15px 0px 10px;color:#161e35;font-size:14px;font-weight:500;}.ant-input-affix-wrapper{border:solid 1px rgba(#49576e,0.4);border-radius:4px;padding:0px 12px;width:120px;}.ant-input{min-width:105px;height:34px;line-height:34px;border:0px;border-radius:4px;}.ant-input-suffix{color:rgba(#49576e,0.6);}.ant-form-item-explain.ant-form-item-explain-error{margin-top:5px;}}.ant-form-item{margin-bottom:10px;display:inline-block;width:100%;label{color:#49576e;}}.ant-btn.ant-btn-primary{width:90px;height:36px;border-radius:4px;font-size:14px;line-height:34px;margin-bottom:10px;}.ant-form-item-control{.ant-form-item-children{.ant-input-number{color:#49576e;min-width:123px;width:calc(100% - 32px);max-width:132px;border:solid 1px #c0cad0;}.anticon{margin-left:10px;&:hover{color:#f4584c;}}}.ant-btn.dynamic-delete-button{height:36px;position:absolute;left:140px;}.ant-btn-outline{height:30px;line-height:28px;font-size:12px;border-color:#5d97ff;color:#5d97ff;width:100%;max-width:123px;padding-left:10px;padding-right:10px;.anticon{margin-left:0px;}}.ant-btn{text-transform:none;border:none;&.btn-add{border:solid 1px #5d97ff;color:#5d97ff;font-size:14px;border-radius:4px;height:36px;}}}"]),
    ij=[{
      required:!0,
      message:"Please enter value."
    },{
      pattern:new RegExp(/^0*(?:[0-9][0-9]?|100)$/),
      message:"Please enter value between 0 to 100"
    }];
    var iw=()=>{
      var e;
      let[t,i]=(0,a.useState)(!1),
      [o,l]=(0,a.useState)(!1),
      [s,c]=(0,a.useState)(!1),
      [d,p]=(0,a.useState)(!1),
      u=(0,r.I0)(),
      [h]=ew.Z.useForm(),
      [f]=ew.Z.useForm(),
      {
        currentOrgReducer:{
          orgId:m
        },
        sessionUsageReducer:v
      }=(0,r.v9)(e=>e),
      g=(0,ei.useQueryClient)(),
      x=a.useMemo(()=>"currentSubscription".concat(m),[m]),
      b=g.getQueryData(x),
      j=null==b?void 0:b.currentMonth,
      w=(null==b?void 0:null===(e=b.subscription)||void 0===e?void 0:e.status)==="Canceled",
      Z=a.useRef(),
      C=a.useRef(),
      {
        totalSessionCount:k,
        totalWebSessionCount:I
      }=j||{},
      S=!!k&&!w,
      z=!!I&&!w;
      (0,a.useEffect)(()=>{
        m&&(u((0,R.Hh)(m)),u((0,R.Ls)(m)))
      },[m,u]),
      (0,a.useEffect)(()=>{
        var e,
        t;
        if(!(null===(e=Z.current)||void 0===e?void 0:e.length)){
          let e=(null==v?void 0:v.sessionUsageNotificationPercentage)instanceof Array?null==v?void 0:v.sessionUsageNotificationPercentage:[];
          Z.current=e,
          h.setFieldsValue({
            sessionUsageNotificationPercentage:e
          })
        }
        if(!(null===(t=C.current)||void 0===t?void 0:t.length)){
          let e=(null==v?void 0:v.webSessionUsageNotificationPercentage)instanceof Array?null==v?void 0:v.webSessionUsageNotificationPercentage:[];
          C.current=e,
          f.setFieldsValue({
            webSessionUsageNotificationPercentage:e
          })
        }
      },[v]);
      let P=e=>e.length===new Set(e).size,
      E=(e,t)=>{
        (t?f:h).validateFields().then(t=>{
          t&&e()
        })
      },
      M=async e=>u((0,R.x2)(m,e)),
      N=async e=>u((0,R.qD)(m,e)),
      A=async(e,t)=>{
        if(!P(t?e.webSessionUsageNotificationPercentage:e.sessionUsageNotificationPercentage||[])){
          _.ZP.error("Please enter unique values.");
          return
        }
        t?(l(!0),await N({
          webSessionUsageNotificationPercentage:e.webSessionUsageNotificationPercentage
        }).then(e=>{
          let t;
          if(null==e?void 0:e.success){
            var i,
            n,
            a;
            let o=!!(null==e?void 0:null===(n=e.data)||void 0===n?void 0:null===(i=n.webSessionUsageNotificationPercentage)||void 0===i?void 0:i.length);
            t=null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.message,
            p(!1),
            o?_.ZP.success(t):_.ZP.success("The percentage at which the email notification is sent for session usage is removed")
          }
        }).finally(()=>{
          l(!1),
          C.current=e.webSessionUsageNotificationPercentage
        })):(i(!0),await M({
          sessionUsageNotificationPercentage:e.sessionUsageNotificationPercentage
        }).then(e=>{
          let t;
          if(null==e?void 0:e.success){
            var i,
            n,
            a;
            let o=!!(null==e?void 0:null===(n=e.data)||void 0===n?void 0:null===(i=n.sessionUsageNotificationPercentage)||void 0===i?void 0:i.length);
            t=null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.message,
            c(!1),
            o?_.ZP.success(t):_.ZP.success("The percentage at which the email notification is sent for session usage is removed")
          }
        }).finally(()=>{
          i(!1),
          Z.current=e.sessionUsageNotificationPercentage
        }))
      },
      D=a.useCallback(e=>{
        if(e){
          let t=null==e?void 0:e.sessionUsageNotificationPercentage,
          i=null==e?void 0:e.webSessionUsageNotificationPercentage;
          t&&(JSON.stringify(t)!==JSON.stringify(Z.current)?c(!0):c(!1)),
          i&&(JSON.stringify(i)!==JSON.stringify(C.current)?p(!0):p(!1))
        }
      },[]);
      return S||z?(0,n.jsxs)(iy,{
        children:[(0,n.jsxs)("div",{
          className:"session-usages-card-head",
          children:[(0,n.jsx)("h3",{
            children:"Session usage alert"
          }),(0,n.jsx)("p",{
            children:"Get notified when the session usage reaches a threshold"
          })]
        }),(0,n.jsxs)("div",{
          className:"session-usages-card-body",
          children:[S&&(0,n.jsxs)("div",{
            className:"session-usages-card-element",
            children:[(0,n.jsx)("div",{
              className:"session-usage-label",
              children:"Mobile session usage threshold (%)"
            }),(0,n.jsxs)(ew.Z,{
              onFinish:e=>A(e,!1),
              form:h,
              className:"session-usages-card-new",
              colon:!1,
              onValuesChange:D,
              children:[(0,n.jsx)(ew.Z.List,{
                name:"sessionUsageNotificationPercentage",
                children:(e,t,i)=>{
                  let{
                    add:a,
                    remove:o
                  }=t,
                  {
                    errors:l
                  }=i;
                  return(0,n.jsxs)(n.Fragment,{
                    children:[e.map(e=>(0,n.jsxs)(ib,{
                      children:[(0,n.jsx)(ib,{
                        ...e,
                        validateTrigger:["onChange","onBlur"],
                        rules:ij,
                        children:(0,n.jsx)(F.default,{
                          suffix:"%",
                          maxLength:10,
                          onKeyPress:e=>{
                            /[0-9]/.test(e.key)||e.preventDefault()
                          },
                          placeholder:"Enter percentage"
                        })
                      }),(0,n.jsx)(y.Z,{
                        className:"dynamic-delete-button",
                        icon:(0,n.jsx)(ig.Z,{}),
                        onClick:()=>{
                          o(e.name)
                        }
                      })]
                    },e.name)),e.length<=4?(0,n.jsx)(ib,{
                      children:(0,n.jsx)(y.Z,{
                        onClick:()=>E(a),
                        className:"btn-add",
                        icon:(0,n.jsx)(ix.Z,{}),
                        children:"Add threshold"
                      })
                    }):null,(0,n.jsx)(ew.Z.ErrorList,{
                      errors:l
                    })]
                  })
                }
              }),s&&(0,n.jsx)(y.Z,{
                size:"small",
                loading:t,
                type:"primary",
                htmlType:"submit",
                children:"Save"
              })]
            })]
          }),z&&(0,n.jsxs)("div",{
            className:"session-usages-card-element",
            children:[(0,n.jsx)("div",{
              className:"session-usage-label",
              children:"Web session usage threshold (%)"
            }),(0,n.jsxs)(ew.Z,{
              onFinish:e=>A(e,!0),
              form:f,
              className:"session-usages-card-new",
              colon:!1,
              onValuesChange:D,
              children:[(0,n.jsx)(ew.Z.List,{
                name:"webSessionUsageNotificationPercentage",
                className:"loool",
                children:(e,t,i)=>{
                  let{
                    add:a,
                    remove:o
                  }=t,
                  {
                    errors:l
                  }=i;
                  return(0,n.jsxs)(n.Fragment,{
                    children:[e.map(e=>(0,n.jsxs)(ib,{
                      className:"web-usage-threshold",
                      children:[(0,n.jsx)(ib,{
                        ...e,
                        validateTrigger:["onChange","onBlur"],
                        rules:ij,
                        children:(0,n.jsx)(F.default,{
                          suffix:"%",
                          maxLength:10,
                          onKeyPress:e=>{
                            /[0-9]/.test(e.key)||e.preventDefault()
                          },
                          placeholder:"Enter percentage"
                        })
                      }),(0,n.jsx)(y.Z,{
                        className:"dynamic-delete-button",
                        icon:(0,n.jsx)(ig.Z,{}),
                        onClick:()=>{
                          o(e.name)
                        }
                      })]
                    },e.name)),e.length<=4?(0,n.jsx)(ib,{
                      children:(0,n.jsx)(y.Z,{
                        onClick:()=>E(a,!0),
                        className:"btn-add",
                        icon:(0,n.jsx)(ix.Z,{}),
                        children:"Add threshold"
                      })
                    }):null,(0,n.jsx)(ew.Z.ErrorList,{
                      errors:l
                    })]
                  })
                }
              }),d&&(0,n.jsx)(y.Z,{
                size:"small",
                loading:o,
                type:"primary",
                htmlType:"submit",
                className:"save-btn",
                children:"Save"
              })]
            })]
          })]
        })]
      }):null
    };
    let iZ=m.default.div.withConfig({
      componentId:"sc-28105ea5-0"
    })(["border:1px solid #c0cad9;border-radius:5px;height:fit-content;padding:20px;"]),
    iC=m.default.div.withConfig({
      componentId:"sc-28105ea5-1"
    })(["font-weight:500;font-size:16px;color:#161e35;h3{font-size:",";line-height:",";color:",";font-weight:500;}"],v.r.fontSize(1.8),v.r.fontSize(2.8),v.r.colors.primaryMidnight.toString()),
    ik=m.default.div.withConfig({
      componentId:"sc-28105ea5-2"
    })(["font-weight:500;font-size:14px;margin-top:10px;display:flex;flex-wrap:wrap;"]),
    iI=m.default.span.withConfig({
      componentId:"sc-28105ea5-3"
    })(["flex:50%;"]),
    iS=m.default.span.withConfig({
      componentId:"sc-28105ea5-4"
    })(["justify-content:flex-end;"]),
    iz=(0,m.default)(iI).withConfig({
      componentId:"sc-28105ea5-5"
    })(["font-size:14px;color:#8a99b1;font-weight:400;"]),
    i_=(0,m.default)(iS).withConfig({
      componentId:"sc-28105ea5-6"
    })(["font-size:14px;color:#8a99b1;font-weight:400;"]),
    iF=m.default.div.withConfig({
      componentId:"sc-28105ea5-7"
    })(["border:1px solid #f4584c;padding:6px;font-weight:400;margin-top:10px;font-size:14px;border-radius:4px;p{margin:0;padding:0;color:#f4584c;}"]),
    iP={
      1:"Billed every 1 month",
      3:"Billed every 3 months",
      6:"Billed every 6 months",
      9:"Billed every 9 months",
      12:"Billed every 12 months"
    };
    var iE=()=>{
      var e,
      t,
      i,
      o,
      l,
      s,
      c,
      d,
      p,
      u,
      h,
      f;
      let m=(0,ei.useQueryClient)(),
      {
        currentOrgReducer:{
          orgId:v,
          planLimit:g,
          planType:x
        }
      }=(0,r.v9)(e=>e),
      {
        dataRetentionTime:b,
        videoRetentionTime:y
      }=g||{},
      j=(0,a.useMemo)(()=>"currentSubscription".concat(v),[v]),
      w=m.getQueryData(j),
      Z=null==w?void 0:null===(t=w.subscription)||void 0===t?void 0:null===(e=t.status)||void 0===e?void 0:e.toLowerCase(),
      C=null==w?void 0:w.contract,
      k="Your current plan has been ".concat(Z).concat("canceled"===Z&&(null==w?void 0:null===(i=w.payment)||void 0===i?void 0:i.expiresAt)?" and it will expire at ".concat(null==w?void 0:null===(o=w.payment)||void 0===o?void 0:o.expiresAt,"."):"."),
      I=(0,a.useMemo)(()=>{
        var e;
        return(null==w?void 0:null===(e=w.subscription)||void 0===e?void 0:e.status)==="Active"?"Cancels on ":"Canceled on "
      },[null==w?void 0:null===(l=w.subscription)||void 0===l?void 0:l.status]);
      return(0,n.jsx)(iZ,{
        children:(0,n.jsxs)(iC,{
          children:[(0,n.jsx)("h3",{
            children:"Plan details"
          }),(0,n.jsxs)(ik,{
            children:[(0,n.jsx)(iI,{
              children:null==w?void 0:null===(s=w.yourPlan)||void 0===s?void 0:s.featurePlan
            }),(0,n.jsxs)(iS,{
              children:["$",null==w?void 0:null===(c=w.payment)||void 0===c?void 0:c.price]
            })]
          }),(0,n.jsxs)(ik,{
            children:[!!(null==w?void 0:null===(d=w.payment)||void 0===d?void 0:d.renewalStatus)&&(0,n.jsxs)(iz,{
              children:[(null==w?void 0:null===(p=w.payment)||void 0===p?void 0:p.renewalStatus)==="cancel"?I:"Renews on ",(null==w?void 0:null===(u=w.payment)||void 0===u?void 0:u.billingEndDate)||(null==w?void 0:null===(h=w.payment)||void 0===h?void 0:h.nextBillingDate)]
            }),"free"!==x&&(0,n.jsx)(i_,{
              children:iP[null==w?void 0:null===(f=w.payment)||void 0===f?void 0:f.billingFrequency]
            })]
          }),(0,n.jsxs)(ik,{
            children:[(0,n.jsx)(iz,{
              children:"Data retention policy"
            }),(0,n.jsx)(i_,{
              children:"".concat(b," month").concat(b>1?"s":"")
            })]
          }),y&&(0,n.jsxs)(ik,{
            children:[(0,n.jsx)(iz,{
              children:"Video retention policy"
            }),(0,n.jsx)(i_,{
              children:"".concat(y," month").concat(y>1?"s":"")
            })]
          }),C&&(0,n.jsxs)(ik,{
            children:[(0,n.jsx)(iz,{
              children:"Contract Period"
            }),(0,n.jsxs)(i_,{
              children:[C.contractStart," - ",C.contractEnd]
            })]
          }),Z&&"active"!==Z&&"past due"!==Z&&(0,n.jsx)(iF,{
            children:(0,n.jsx)("p",{
              children:k
            })
          })]
        })
      })
    },
    iM=i(31049),
    iR=i(46412),
    iN=i(39526),
    iA=i(96128);
    let iD=m.default.div.withConfig({
      componentId:"sc-ee8e5ca8-0"
    })(["border:1px solid #c0cad9;border-radius:5px;height:auto;padding:20px;margin-bottom:20px;"]),
    iT=m.default.div.withConfig({
      componentId:"sc-ee8e5ca8-1"
    })(["font-weight:500;font-size:16px;display:flex;line-height:normal;justify-content:space-between;&:not( :first-of-type ){margin-top:10px;}"]),
    iL=m.default.div.withConfig({
      componentId:"sc-ee8e5ca8-2"
    })(["flex:50%;h3{font-size:",";line-height:",";color:",";font-weight:500;}"],v.r.fontSize(1.8),v.r.fontSize(2.8),v.r.colors.primaryMidnight.toString()),
    iO=m.default.div.withConfig({
      componentId:"sc-ee8e5ca8-3"
    })(["justify-content:flex-end;display:flex;"]),
    iU=(0,m.default)(iL).withConfig({
      componentId:"sc-ee8e5ca8-4"
    })(["font-size:14px;color:#161e35;font-weight:500;svg{margin-right:4px;}"]),
    iV=(0,m.default)(iO).withConfig({
      componentId:"sc-ee8e5ca8-5"
    })(["font-size:14px;color:#161e35;font-weight:500;"]),
    iB=m.default.div.withConfig({
      componentId:"sc-ee8e5ca8-6"
    })(["border:1px solid #f4584c;display:flex;align-items:center;margin-right:8px;padding:6px;font-weight:400;font-size:14px;border-radius:4px;p{margin-bottom:0;color:#f4584c;}"]),
    iK=(0,m.default)(y.Z).withConfig({
      componentId:"sc-ee8e5ca8-7"
    })(["border-radius:4px;color:#5d97ff;border-color:#5d97ff;font-weight:400;font-size:14px;line-height:16px;margin:8px 0;"]),
    iW=m.default.div.withConfig({
      componentId:"sc-ee8e5ca8-8"
    })(["display:flex;justify-content:flex-end;"]);
    var iq=()=>{
      var e,
      t,
      i,
      o,
      l,
      s,
      c;
      let d=(0,ei.useQueryClient)(),
      {
        currentOrgReducer:{
          orgId:p
        }
      }=(0,r.v9)(e=>e),
      {
        isLoading:u,
        refetch:h
      }=(0,A.ad)(p),
      {
        data:f,
        refetch:m
      }=(0,A.n2)(p),
      v=(0,a.useMemo)(()=>"currentSubscription".concat(p),[p]),
      g=(0,a.useMemo)(()=>"payhistory ".concat(p," ",1),[p]),
      x=(0,a.useMemo)(()=>"subscription/manage-payments/organization/".concat(p),[p]),
      b=d.getQueryData(v),
      {
        method:y
      }=b||{},
      j=null==b?void 0:null===(t=b.subscription)||void 0===t?void 0:null===(e=t.status)||void 0===e?void 0:e.toLowerCase();
      return((null==f?void 0:f.cardType)||(null==y?void 0:y.cardType))&&(0,n.jsxs)(iD,{
        children:[(0,n.jsxs)(iT,{
          children:[(0,n.jsx)(iL,{
            children:(0,n.jsx)("h3",{
              children:"Payment methods"
            })
          }),(0,n.jsx)(iO,{
            children:(null==f?void 0:f.cardType)&&(0,n.jsx)(iA.Z,{
              cardChangeUrl:x,
              refetchCardInfo:m
            })
          })]
        }),(null==b?void 0:null===(i=b.method)||void 0===i?void 0:i.expired)&&!(null==f?void 0:f.cardType)&&(0,n.jsx)(iB,{
          children:(0,n.jsxs)("p",{
            children:["Your card - ",null==b?void 0:null===(o=b.method)||void 0===o?void 0:o.cardType," (",null==b?void 0:null===(l=b.method)||void 0===l?void 0:l.maskedNumber,") is expired. Please update your card."]
          })
        }),"past due"===j&&(0,n.jsxs)(iT,{
          children:[(0,n.jsx)(iB,{
            children:(0,n.jsx)("p",{
              children:"We are unable to process your payment. Please update your payment method."
            })
          }),(0,n.jsxs)(iW,{
            children:[(0,n.jsx)(iM.Z,{
              title:"Are you sure to retry the payment?",
              onConfirm:()=>{
                h(),
                d.invalidateQueries(v),
                d.invalidateQueries(g)
              },
              okText:"Yes",
              cancelText:"No",
              overlayClassName:"payment-confirm-box",
              children:(0,n.jsxs)(iK,{
                loading:u,
                children:["Retry payment ",(0,n.jsx)(iR.Z,{})]
              })
            })," "]
          })]
        }),(null==f?void 0:f.expired)&&(0,n.jsx)(iB,{
          children:(0,n.jsxs)("p",{
            children:["Your card - ",null==f?void 0:null===(s=f.cardType)||void 0===s?void 0:s.toUpperCase()," (",null==f?void 0:f.maskedNumber,") is expired. Please update your card."]
          })
        }),(0,n.jsxs)(iT,{
          children:[(null==y?void 0:y.maskedNumber)&&!(null==f?void 0:f.cardType)&&(0,n.jsxs)(n.Fragment,{
            children:[(0,n.jsxs)(iU,{
              children:[(0,n.jsx)(iN.Z,{}),null==y?void 0:y.cardType]
            }),(0,n.jsxs)(iV,{
              children:[" ",(null==y?void 0:y.maskedNumber)||"N/A"]
            })]
          }),(null==f?void 0:f.cardType)&&(0,n.jsxs)(n.Fragment,{
            children:[(0,n.jsxs)(iU,{
              children:[(0,n.jsx)(iN.Z,{}),null==f?void 0:null===(c=f.cardType)||void 0===c?void 0:c.toUpperCase()]
            }),(0,n.jsxs)(iV,{
              children:[" ",(null==f?void 0:f.maskedNumber)||"N/A"]
            })]
          })]
        })]
      })
    };
    let iQ=m.default.div.withConfig({
      componentId:"sc-37599441-0"
    })(["border-radius:5px;height:auto;padding:20px;margin-bottom:20px;background-color:#FFF4EF;"]),
    iH=m.default.div.withConfig({
      componentId:"sc-37599441-1"
    })(["font-weight:500;font-size:16px;display:flex;line-height:normal;justify-content:space-between;&:not( :first-of-type ){margin-top:10px;}"]),
    iY=m.default.div.withConfig({
      componentId:"sc-37599441-2"
    })(["flex:50%;h3{font-size:",";line-height:",";color:",";font-weight:500;}p{font-size:14px;font-weight:400 !important;line-height:22px;color:#737886;button{color:#FF955B;cursor:pointer;background:none;border:none;padding:0;font:inherit;&:hover{text-decoration:underline;}}}"],v.r.fontSize(1.8),v.r.fontSize(2.8),v.r.colors.primaryMidnight.toString()),
    iG=m.default.div.withConfig({
      componentId:"sc-37599441-3"
    })(["justify-content:flex-end;display:flex;"]),
    i$=(0,m.default)(y.Z).withConfig({
      componentId:"sc-37599441-4"
    })(["background-color:#FF955B !important;border-color:#FF955B !important;color:#fff !important;height:30px !important;width:100px !important;box-shadow:none !important;border-radius:6px !important;text-shadow:none !important;&:hover,&:focus{background-color:#ff7a2f !important;border-color:#ff7a2f !important;color:#fff !important;box-shadow:none !important;}"]);
    var iJ=e=>{
      let{
        paymentLink:t
      }=e,
      {
        currentOrgReducer:{
          orgId:i
        }
      }=(0,r.v9)(e=>e);
      return(0,n.jsx)(iQ,{
        children:(0,n.jsxs)(iH,{
          children:[(0,n.jsxs)(iY,{
            children:[(0,n.jsx)("h3",{
              style:{
                marginBottom:"4px"
              },
              children:"Payment due"
            }),(0,n.jsx)("p",{
              style:{
                marginBottom:"8px"
              },
              children:"Your account has an unpaid invoice. Please complete the payment to keep your dashboard access active."
            }),(0,n.jsxs)("p",{
              style:{
                marginBottom:"0px"
              },
              children:["Need help?"," ",(0,n.jsx)("button",{
                type:"button",
                onClick:()=>{
                  window.Intercom&&window.Intercom("show")
                },
                children:"Contact support"
              })]
            })]
          }),(0,n.jsx)(iG,{
            children:(0,n.jsx)(i$,{
              type:"primary",
              onClick:()=>{
                t&&window.open(t,"_blank")
              },
              children:"Pay now"
            })
          })]
        })
      })
    };
    let iX=["organization.payment.view","organization.payment.update","organization.payment.create"],
    i0=["subscription.view"],
    i1=m.default.div.withConfig({
      componentId:"sc-ba554e14-0"
    })(["display:flex;flex-wrap:wrap;gap:16px;width:100%;height:100%;display:border-box;"]),
    i2=m.default.div.withConfig({
      componentId:"sc-ba554e14-1"
    })(["width:calc(50% - 10px);"]),
    i3=m.default.div.withConfig({
      componentId:"sc-ba554e14-2"
    })(["width:calc(50% - 10px);"]);
    var i4=()=>{
      var e;
      let t=(0,r.I0)(),
      i=(0,ei.useQueryClient)(),
      {
        currentOrgReducer:{
          orgId:o,
          planType:l
        },
        applicationReducer:s
      }=(0,r.v9)(e=>e),
      c=i.getQueryData("profileInfo"),
      d=i.getQueryData("roles_permission"),
      p=(0,a.useMemo)(()=>"currentSubscription".concat(o),[o]),
      {
        isLoading:u,
        data:h
      }=(0,A.Qy)({
        queryKey:p,
        orgId:o,
        chargebeeData:!0
      }),
      {
        data:f,
        isLoading:m
      }=(0,A._3)(o),
      {
        isLoggedInFromAdmin:v
      }=(0,ea.Z)(),
      g=!!(null==h?void 0:null===(e=h.subscription)||void 0===e?void 0:e.isSelfCheckout),
      x=(0,a.useMemo)(()=>{
        var e;
        return!!(null==s?void 0:null===(e=s.find(e=>e.orgId===o))||void 0===e?void 0:e.isOwner)
      },[s,o]),
      b=(0,a.useCallback)(e=>c&&(0,W.OQ)(e,d,null==c?void 0:c.organization,o),[c,d,o]);
      return(0,a.useEffect)(()=>{
        t((0,R.jW)(h))
      },[h,t]),
      (0,a.useEffect)(()=>{
        t((0,R.wW)(o))
      },[o,t]),
      (0,n.jsx)(en.Z,{
        loading:u,
        active:!0,
        paragraph:{
          rows:8
        },
        children:(0,n.jsxs)(i1,{
          children:[(0,n.jsxs)(i2,{
            children:[b(iX)&&(0,n.jsx)(n.Fragment,{
              children:(0,n.jsx)(iE,{})
            }),b(i0)&&(0,n.jsxs)(n.Fragment,{
              children:[(0,n.jsx)(ty,{
                hasPermission:b
              }),(0,n.jsx)(iw,{})]
            })]
          }),b(iX)&&(0,n.jsxs)(i3,{
            children:[!m&&(null==f?void 0:f.payment_link)&&(0,n.jsx)(iJ,{
              paymentLink:null==f?void 0:f.payment_link
            }),(0,n.jsx)(iq,{}),(0,n.jsx)(tH,{}),"free"!==l&&"trial"!==l&&(0,n.jsx)(iv,{}),(0,n.jsx)(er,{
              children:g&&!v&&(0,n.jsx)(ex,{
                orgId:o,
                queryKey:p,
                isOwner:x
              })
            })]
          })]
        })
      })
    },
    i5=i(55877),
    i6=i(12810),
    i7=i(49470),
    i8=i(66786),
    i9=i(86285);
    let ne=(0,m.default)(y.Z).withConfig({
      componentId:"sc-7b901a35-0"
    })(["border:none;color:#5d97ff;background:transparent;box-shadow:none;"]);
    var nt=e=>{
      let{
        title:t,
        sortColumns:i,
        dataIndex:a
      }=e,
      o=null==i?void 0:i.find(e=>{
        let{
          column:t
        }=e;
        return(null==t?void 0:t.dataIndex)==="".concat(a)
      });
      return(0,n.jsxs)("div",{
        children:[t,o&&(0,n.jsx)(ne,{
          type:"circle",
          icon:(null==o?void 0:o.order)==="ascend"?(0,n.jsx)(i8.Z,{}):(0,n.jsx)(i9.Z,{})
        })]
      })
    },
    ni=i(66642),
    nn=i(1469),
    na=i.n(nn),
    no=i(60063),
    nl=i(12016),
    nr=i(59722);
    let ns=eZ.default.Item,
    nc=(0,m.default)(eZ.default).withConfig({
      componentId:"sc-fb5df5ee-0"
    })(["max-height:280px;overflow-y:auto;scrollbar-width:thin;.ant-dropdown-menu-item:hover,.ant-dropdown-menu-submenu-title:hover{background-color:transparent;}"]),
    nd=(0,m.default)(nl.Z).withConfig({
      componentId:"sc-fb5df5ee-1"
    })([".ant-dropdown-menu{border-radius:10px;}"]),
    np=m.default.div.withConfig({
      componentId:"sc-fb5df5ee-2"
    })(["color:#5d97ff;font-size:12px;cursor:pointer;"]),
    nu=m.default.div.withConfig({
      componentId:"sc-fb5df5ee-3"
    })(["display:flex;cursor:default;justify-content:space-between;"]),
    nh=m.default.div.withConfig({
      componentId:"sc-fb5df5ee-4"
    })(["width:200px;font-size:12px;color:#161e35;padding:8px;"]),
    nf=(0,m.default)(nh).withConfig({
      componentId:"sc-fb5df5ee-5"
    })(["text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"]),
    nm=(0,m.default)(nh).withConfig({
      componentId:"sc-fb5df5ee-6"
    })(["width:142px;height:36px;border-radius:30px;background:#f5f5f5;margin-left:5px;text-align:center;"]);
    var nv=(0,a.memo)(e=>{
      let{
        apps:t,
        orgId:i
      }=e,
      o=(0,n.jsx)(nc,{
        children:t&&t.map(e=>(0,n.jsx)(ns,{
          children:(0,n.jsxs)(nu,{
            children:[(0,n.jsx)(nf,{
              children:(0,n.jsx)(nr.Z,{
                value:null==e?void 0:e.name
              })
            }),(0,n.jsx)(nm,{
              children:null==e?void 0:e.roleText
            })]
          })
        },e.id))
      }),
      {
        data:l
      }=(0,A.Eo)(i),
      r=(0,a.useMemo)(()=>null==l?void 0:l.length,[l]),
      s=(0,a.useMemo)(()=>null==t?void 0:t.length,[t]);
      return(0,n.jsx)(nd,{
        overlay:o,
        trigger:"click",
        children:(0,n.jsxs)(np,{
          children:["".concat(r!==s?"".concat(s):"All"," app").concat(s>1||s===r?"s":""),(0,n.jsx)(no.Z,{})]
        })
      })
    });
    let ng=(0,a.createContext)({
      selectedTeamList:[],
      setSelectedTeamList:()=>null,
      searchValue:"",
      setSearchValue:()=>null,
      selectedApp:"",
      setSelectedApp:()=>null,
      searchAppName:"",
      setSearchAppName:()=>null
    }),
    nx=()=>{
      let{
        selectedTeamList:e,
        setSelectedTeamList:t,
        searchValue:i,
        setSearchValue:n,
        selectedApp:o,
        setSelectedApp:l,
        searchAppName:r,
        setSearchAppName:s
      }=(0,a.useContext)(ng);
      return(0,a.useMemo)(()=>({
        selectedTeamList:e,
        setSelectedTeamList:t,
        searchValue:i,
        setSearchValue:n,
        selectedApp:o,
        setSelectedApp:l,
        searchAppName:r,
        setSearchAppName:s
      }),[e,i,n,t,o,l,r,s])
    },
    nb=(0,a.memo)(e=>{
      let{
        children:t
      }=e,
      [i,o]=(0,a.useState)([]),
      [l,r]=(0,a.useState)(""),
      [s,c]=(0,a.useState)(""),
      [d,p]=(0,a.useState)(""),
      u=(0,a.useMemo)(()=>({
        selectedTeamList:i,
        setSelectedTeamList:o,
        searchValue:l,
        setSearchValue:r,
        selectedApp:s,
        setSelectedApp:c,
        searchAppName:d,
        setSearchAppName:p
      }),[i,o,l,r,s,c,d,p]);
      return(0,n.jsx)(ng.Provider,{
        value:u,
        children:t
      })
    });
    var ny=i(39618),
    nj=i(81383),
    nw=i(5004);
    let{
      confirm:nZ
    }=es.default,
    {
      Group:nC
    }=ny.default,
    nk=m.default.div.withConfig({
      componentId:"sc-fb9bd809-0"
    })(["color:#161e35;font-weight:500;font-size:18px;line-height:21px;align-items:center;p{font-weight:400;font-size:14px;line-height:16px;color:#5b6d89;margin-top:10px;font-style:normal;}"]),
    nI=(0,m.default)(y.Z).withConfig({
      componentId:"sc-fb9bd809-1"
    })(["margin:0 8px;color:#5d97ff;border-color:#dee8ff;height:41px;width:42px;}svg{margin:2px 6px;}"]),
    nS=(0,m.default)(es.default).withConfig({
      componentId:"sc-fb9bd809-2"
    })([".ant-modal-content{border-radius:8px;padding:12px;width:415px;}.ant-modal-footer{border-top:none;padding:0;}"]),
    nz=(0,m.default)(y.Z).withConfig({
      componentId:"sc-fb9bd809-3"
    })(["padding:10px 48px;height:47px;margin-left:30px;border-radius:4px;font-weight:400;font-size:16px;"]),
    n_=(0,m.default)(y.Z).withConfig({
      componentId:"sc-fb9bd809-4"
    })(["border:1px solid #5d97ff;width:200px;border-radius:4px;color:#5d97ff;font-size:12px;font-weight:400;height:36px;display:flex;align-items:center;svg{margin:4px 6px;}"]),
    nF=(0,m.default)(nC).withConfig({
      componentId:"sc-fb9bd809-5"
    })(["padding:8px 0;display:inline-grid;max-width:200px;overflow-y:auto;.ant-checkbox-group-item{padding:4px 0px;}"]),
    nP=m.default.div.withConfig({
      componentId:"sc-fb9bd809-6"
    })(["color:#161e35;font-weight:500;font-size:18px;margin-top:12px;"]),
    nE=m.default.div.withConfig({
      componentId:"sc-fb9bd809-7"
    })(["color:#5b6d89;font-weight:400;font-size:14px;margin-bottom:12px;"]),
    nM=m.default.div.withConfig({
      componentId:"sc-fb9bd809-8"
    })(["display:flex;justify-content:flex-end;"]);
    var nR=e=>{
      let t=(0,r.I0)(),
      {
        name:i,
        email:o,
        totalSelectedMember:l,
        type:s,
        selectedTeamList:c,
        currentAppList:d,
        accessApps:p,
        accessLevel:u
      }=e,
      h=(0,ei.useQueryClient)(),
      {
        setSelectedTeamList:f
      }=nx(),
      [m,v]=(0,a.useState)(!1),
      [x,b]=(0,a.useState)([]),
      {
        currentOrgReducer:{
          orgId:y
        }
      }=(0,r.v9)(e=>e),
      j=(0,a.useMemo)(()=>d&&d.map(e=>{
        if((null==e?void 0:e.role)==="admin"&&(null==p?void 0:p.length)&&(null==p?void 0:p.some(t=>(null==t?void 0:t.id)===(null==e?void 0:e.id))))return{
          label:null==e?void 0:e.name,
          value:null==e?void 0:e.id
        }
      }),[d]),
      w=j&&j.filter(e=>null==e?void 0:e.label),
      Z=(0,a.useMemo)(()=>"teamList".concat(y),[y]),
      {
        mutate:C
      }=(0,ei.useMutation)(e=>nj.Z.deleteTeammates(e),{
        onSuccess:()=>{
          let e=l?"".concat(l," teammate").concat(l?"s":""):"".concat(i||o||"Teammate");
          f([]),
          _.ZP.success("".concat(e," deleted successfully.")),
          o&&t((0,g.hI)({
            action:"Teammate deleted on setting page",
            info:{
              page:"setting",
              data:{
                level:null==u?void 0:u.toLowerCase(),
                deletedMemberName:i||"",
                deletedMemberEmail:o
              }
            }
          })),
          !o&&(null==c?void 0:c.length)>0&&c.map(e=>t((0,g.hI)({
            action:"Teammate deleted on setting page",
            info:{
              page:"setting",
              data:{
                level:null==e?void 0:e.accessLevel,
                deletedMemberName:(null==e?void 0:e.name)||"",
                deletedMemberEmail:null==e?void 0:e.email
              }
            }
          }))),
          h.invalidateQueries(Z)
        }
      }),
      k=(0,a.useMemo)(()=>(0,n.jsxs)(nk,{
        children:["Remove ".concat(i||o,"?"),(0,n.jsx)("p",{
          children:"The person will lose access to all apps."
        })]
      }),[i,o]),
      I=(0,n.jsxs)(nk,{
        children:["Remove ".concat(l," user").concat(l>1?"s":"","?"),(0,n.jsx)("p",{
          children:"The removed ".concat(l," user").concat(l>1?"s":""," will loose access to all apps.")
        })]
      }),
      S=(null==c?void 0:c.length)&&c.map(e=>null==e?void 0:e.email),
      z=o?[o]:S,
      F=()=>{
        nZ({
          title:"",
          content:"multiple"===s?I:k,
          okText:"Remove",
          okType:"primary",
          cancelText:"Cancel",
          icon:(0,n.jsx)(n.Fragment,{}),
          className:"teammates-remove-box",
          onOk(){
            C({
              data:{
                emails:z
              },
              orgId:y
            })
          }
        })
      },
      P="Remove ".concat(l," user").concat(l>1?"s":"");
      return(0,n.jsxs)(n.Fragment,{
        children:[o?(0,n.jsx)(nI,{
          shape:"circle",
          icon:(0,n.jsx)(nw.K$,{}),
          onClick:()=>"Application"===u?v(!0):F()
        }):(0,n.jsx)(n_,{
          onClick:()=>F(),
          icon:(0,n.jsx)(nw.K$,{}),
          children:P
        }),(0,n.jsxs)(nS,{
          title:"",
          visible:m,
          onCancel:()=>v(!1),
          destroyOnClose:()=>{
            b([])
          },
          footer:[null],
          closable:!1,
          children:[(0,n.jsx)(nP,{
            children:"Remove ".concat(i||o,"?")
          }),(0,n.jsx)(nE,{
            children:"Select apps to remove this user from."
          }),(0,n.jsx)(nF,{
            options:w,
            onChange:e=>{
              b(e)
            }
          }),(0,n.jsxs)(nM,{
            children:[(0,n.jsx)(nz,{
              onClick:()=>v(!1),
              children:"Cancel"
            }),(0,n.jsx)(nz,{
              type:"primary",
              danger:!0,
              disabled:!(null==x?void 0:x.length),
              onClick:()=>C({
                data:{
                  emails:z,
                  apps:x
                },
                orgId:y
              }),
              children:"Remove"
            })]
          })]
        })]
      })
    },
    nN=i(81660);
    let{
      Option:nA
    }=ek.default,
    nD=m.default.div.withConfig({
      componentId:"sc-efe5470f-0"
    })(["display:flex;gap:0 15px;"]),
    nT=m.default.span.withConfig({
      componentId:"sc-efe5470f-1"
    })(["background:#f5f5f5;height:36px;padding:8px 10px;border-radius:36px;font-size:14px;font-weight:400;color:#161e35;text-align:center;width:100%;flex-basis:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:fit-content;"]),
    nL=(0,m.default)(F.default).withConfig({
      componentId:"sc-efe5470f-2"
    })(["height:36px;background:#ffffff;border:1px solid #c0cad9;border-radius:4px;align-items:center;padding:10px 15px;"]),
    nO=m.default.div.withConfig({
      componentId:"sc-efe5470f-3"
    })(["white-space:nowrap;display:flex;align-items:center;.ant-select{padding:0 5px;}.ant-select .ant-select-dropdown{border-radius:8px;}.ant-select .ant-select-selector{border:none;padding:0;color:#161e35;&:hover{.ant-select-selection-placeholder{color:#5d97ff;}}}.ant-select-single .ant-select-selector .ant-select-selection-item{padding:0 1px;margin-top:4px;}.ant-select-selection-placeholder{color:#161e35;text-decoration:underline;text-decoration-style:dashed;text-decoration-color:#8a99b1;text-underline-offset:6px;}.ant-select-clear{top:40%;right:-8px;}"]),
    nU=()=>{
      let{
        setSelectedApp:e
      }=nx(),
      {
        currentOrgReducer:{
          orgId:t
        }
      }=(0,r.v9)(e=>e),
      {
        isLoading:i,
        data:a
      }=(0,A.Eo)(t);
      return(0,n.jsx)(nO,{
        children:(0,n.jsx)(ek.default,{
          showArrow:!1,
          onChange:t=>{
            e(t)
          },
          dropdownStyle:{
            minWidth:"200px",
            maxHeight:"250px",
            overflowY:"auto"
          },
          allowClear:!0,
          placeholder:"Apps",
          loading:i,
          children:(null==a?void 0:a.length)>0&&a.map(e=>(0,n.jsx)(nA,{
            children:null==e?void 0:e.name
          },e._id))
        })
      })
    };
    var nV=()=>{
      var e;
      let{
        selectedTeamList:t,
        setSearchValue:i
      }=nx(),
      {
        currentOrgReducer:{
          orgId:a
        }
      }=(0,r.v9)(e=>e),
      {
        data:o
      }=(0,A.lx)(a),
      {
        data:l
      }=(0,A.IW)(a),
      s=null==o?void 0:null===(e=o.planLimit)||void 0===e?void 0:e.teamMemberCount,
      c=null==t?void 0:t.length;
      return(0,n.jsxs)(nD,{
        children:[0===c?(0,n.jsx)(nT,{
          children:"".concat((null==l?void 0:l.length)||""," of ").concat(s||""," seats used")
        }):(0,n.jsx)(nR,{
          totalSelectedMember:c,
          type:"multiple",
          selectedTeamList:t
        }),(0,n.jsx)(nL,{
          placeholder:"Search teammates ",
          onChange:e=>{
            var t;
            let{
              value:n
            }=e.target;
            i(null==n?void 0:null===(t=n.toLowerCase())||void 0===t?void 0:t.trim())
          }
        }),(0,n.jsx)(nN.Z,{})]
      })
    };
    let nB=(0,m.default)(tw.Z).withConfig({
      componentId:"sc-946b4240-0"
    })([".ant-table-thead > tr > th{background:none;&::before{display:none;}}td.ant-table-column-sort{background:none;}.ant-table-thead th.ant-table-column-has-sorters:hover{background:none;}.ant-table-column-sorter{visibility:collapse;}.ant-table-tbody > tr.ant-table-row-selected:hover > td{background:#e6f7ff;}.ant-table-tbody > tr.ant-table-row-selected > td{background:transparent;}"]),
    nK=m.default.div.withConfig({
      componentId:"sc-946b4240-1"
    })(["display:flex;align-items:center;"]),
    nW=m.default.div.withConfig({
      componentId:"sc-946b4240-2"
    })(["display:flex;flex-direction:column;margin-left:10px;"]),
    nq=m.default.div.withConfig({
      componentId:"sc-946b4240-3"
    })(["display:flex;align-items:center;font-size:12px;border-radius:20px;padding:0 8px;background:",";height:auto;color:#5d97ff;color:",";line-height:0;margin-left:10px;min-width:63px;max-height:25px;"],e=>{
      let{
        isexpired:t
      }=e;
      return"expired"===t?"#ff4d4f":"rgba(93, 151, 255, 0.2)"
    },e=>{
      let{
        isexpired:t
      }=e;
      return"expired"===t?"#fff":"5d97ff"
    }),
    nQ=(0,m.default)(nq).withConfig({
      componentId:"sc-946b4240-4"
    })(["background:rgba(39,174,96,0.2);min-width:90px;max-height:25px;color:#27ae60;"]),
    nH=m.default.div.withConfig({
      componentId:"sc-946b4240-5"
    })(["display:flex;justify-content:flex-end;"]),
    nY=(0,m.default)(y.Z).withConfig({
      componentId:"sc-946b4240-6"
    })(["height:41px;width:42px;margin:0 8px;color:#5d97ff;border-color:#dee8ff;svg{margin:4px 6px;}"]),
    nG=m.default.div.withConfig({
      componentId:"sc-946b4240-7"
    })(["color:#161e35;"]),
    n$=m.default.div.withConfig({
      componentId:"sc-946b4240-8"
    })(["display:flex;flex-direction:row;"]),
    nJ=(0,m.default)(nG).withConfig({
      componentId:"sc-946b4240-9"
    })(["font-weight:500;font-size:14px;"]),
    nX=(0,m.default)(nG).withConfig({
      componentId:"sc-946b4240-10"
    })(["font-weight:400;font-size:12px;"]),
    n0=e=>{
      let{
        record:t
      }=e,
      {
        picture:i,
        name:a,
        email:o,
        invitationStatus:l,
        mfaEnabled:r
      }=t;
      return(0,n.jsxs)(nK,{
        children:[(0,n.jsx)(b.Z,{
          picture:i,
          nameInfo:a?a.trim():o.trim()
        }),(0,n.jsxs)(nW,{
          children:[(0,n.jsxs)(n$,{
            children:[(0,n.jsx)(nJ,{
              children:a||"Unknown"
            }),l&&"Accepted"!==l&&"Active"!==l?(0,n.jsx)(nq,{
              isexpired:"Expired"===l?"expired":"pending",
              children:l
            }):null,r&&(0,n.jsx)(nQ,{
              children:"MFA enabled"
            })]
          }),(0,n.jsx)(nX,{
            children:o
          })]
        })]
      })
    };
    var n1=()=>{
      let e=(0,ei.useQueryClient)(),
      [t,i]=(0,a.useState)([]),
      [o,l]=(0,a.useState)(),
      {
        setSelectedTeamList:s,
        searchValue:c,
        selectedApp:d
      }=nx(),
      [p,u]=(0,a.useState)([]),
      [h,f]=(0,a.useState)([]),
      m=(0,ni.Z)(c,500),
      v=e.getQueryData("profileInfo"),
      g=e.getQueryData("roles_permission"),
      {
        currentOrgReducer:{
          orgId:x
        }
      }=(0,r.v9)(e=>e),
      {
        isLoading:b,
        data:y,
        refetch:w
      }=(0,A.IW)(x),
      {
        refetch:Z,
        isLoading:C
      }=(0,A.hd)(o,x),
      k=(e,t)=>e&&e.includes(t),
      I=(0,a.useMemo)(()=>na()(y)&&(null==y?void 0:y.length)&&y.filter(e=>{
        let t=(0,W.d4)(null==e?void 0:e.name),
        i=(0,W.d4)(null==e?void 0:e.email);
        if(m||d){
          var n,
          a;
          if(m&&d)return(k(t,m)||k(i,m))&&(null==e?void 0:null===(n=e.apps)||void 0===n?void 0:n.find(e=>e.id===d));
          if(m)return k(t,m)||k(i,m);
          if(d)return null==e?void 0:null===(a=e.apps)||void 0===a?void 0:a.find(e=>e.id===d)
        }
        return e
      }),[m,d]),
      S=(0,a.useCallback)(e=>v&&(0,W.W9)(e,g,null==v?void 0:v.organization,x),[v,x,g]),
      z=(0,a.useCallback)((e,t)=>v&&(0,W.LQ)(e,g,null==v?void 0:v.organization,x,t),[v,g,x]),
      F=(0,a.useCallback)(e=>v&&(0,W.OQ)(e,g,null==v?void 0:v.organization,x),[v,x,g]),
      P=[{
        title:e=>{
          let{
            sortColumns:t
          }=e;
          return(0,n.jsx)(nt,{
            title:"Teammates",
            sortColumns:t,
            dataIndex:"users"
          })
        },
        dataIndex:"users",
        width:200,
        sorter:(e,t)=>{
          var i;
          return null==e?void 0:null===(i=e.name)||void 0===i?void 0:i.localeCompare(null==t?void 0:t.name)
        },
        sortDirections:["ascend","descend","ascend"],
        render:(e,t)=>(0,n.jsx)(n0,{
          record:t
        })
      },{
        title:e=>{
          let{
            sortColumns:t
          }=e;
          return(0,n.jsx)(nt,{
            title:"Access level",
            sortColumns:t,
            dataIndex:"accessLevel"
          })
        },
        dataIndex:"accessLevel",
        sorter:(e,t)=>{
          var i;
          return null==e?void 0:null===(i=e.accessLevel)||void 0===i?void 0:i.localeCompare(null==t?void 0:t.accessLevel)
        },
        sortDirections:["ascend","descend","ascend"],
        width:200
      },{
        title:e=>{
          let{
            sortColumns:t
          }=e;
          return(0,n.jsx)(nt,{
            title:"Role",
            sortColumns:t,
            dataIndex:"organizationRole"
          })
        },
        dataIndex:"organizationRole",
        defaultSortOrder:"descend",
        sorter:(e,t)=>{
          var i;
          return null==e?void 0:null===(i=e.organizationRole)||void 0===i?void 0:i.localeCompare(null==t?void 0:t.organizationRole)
        },
        sortDirections:["ascend","descend","ascend"],
        width:200,
        render:e=>(0,n.jsx)("div",{
          children:e||"-"
        })
      },{
        title:()=>(0,n.jsx)(nU,{}),
        dataIndex:"apps",
        width:200,
        render:(e,t)=>(0,n.jsx)(nv,{
          apps:null==t?void 0:t.apps,
          orgId:x
        })
      },{
        title:"",
        key:"action ".concat((0,i5.v4)()),
        visible:!S(["organization.team.create","organization.team.update","organization.team.delete","app.team.create","app.team.update","app.team.delete"]),
        width:200,
        render:(e,t)=>{
          var i;
          let{
            invitationStatus:a,
            email:o,
            name:r,
            accessLevel:s
          }=t,
          c="owner"===(0,W.d4)(null==t?void 0:t.organizationRole),
          d=(null==y?void 0:null===(i=y.find(e=>(null==e?void 0:e.email)===(null==v?void 0:v.email)))||void 0===i?void 0:i.organizationRole)==="Owner",
          p=(null==v?void 0:v.email)===o;
          return(0,n.jsxs)(nH,{
            children:[z(["organization.team.create","app.team.create","organization.team.update"],s)&&(0,n.jsx)(n.Fragment,{
              children:a&&"Accepted"!==a&&"Active"!==a&&(0,n.jsx)(j.Z,{
                title:"Resend invitation",
                children:(0,n.jsx)(nY,{
                  shape:"circle",
                  icon:(0,n.jsx)(nw.GL,{}),
                  disabled:C,
                  onClick:()=>l(o)
                })
              })
            }),z(["organization.team.update","app.team.update"],s)&&(0,n.jsx)(n.Fragment,{
              children:!c&&(0,n.jsx)(nN.Z,{
                selectedTeammate:t,
                hasTransferOwnership:d,
                refetch:w
              })
            }),z(["organization.team.delete","app.team.delete"],s)&&!c&&!p&&(0,n.jsx)(nR,{
              name:r,
              email:o,
              type:"single",
              currentAppList:h,
              accessApps:null==t?void 0:t.apps,
              accessLevel:s
            })]
          })
        }
      }].filter(e=>!(null==e?void 0:e.visible));
      return(0,a.useEffect)(()=>{
        if(v){
          var e;
          let t=(0,W.gI)(null==v?void 0:v.organization,x);
          f(null==v?void 0:null===(e=v.organization[t])||void 0===e?void 0:e.apps)
        }
      },[v]),
      (0,a.useEffect)(()=>{
        u(I)
      },[d,m]),
      (0,a.useEffect)(()=>{
        na()(y)&&(null==y?void 0:y.length)&&u(y)
      },[y]),
      (0,a.useEffect)(()=>{
        x&&w()
      },[x]),
      (0,a.useEffect)(()=>{
        o&&Z().then(e=>{
          var t,
          i,
          n,
          a;
          (null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.message)&&_.ZP.success(null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.message),
          (null==e?void 0:null===(n=e.error)||void 0===n?void 0:n.message)&&_.ZP.error((null==e?void 0:null===(a=e.error)||void 0===a?void 0:a.message)||"Unable to resend invitation"),
          l()
        })
      },[o]),
      (0,n.jsx)(i7.Z,{
        show:b,
        message:(0,n.jsx)(i6.Z,{
          type:"spin"
        }),
        backgroundStyle:{
          backgroundColor:"rgba(255,255,255,1)"
        },
        children:(0,n.jsx)(n.Fragment,{
          children:(0,n.jsx)(nB,{
            showSorterTooltip:!1,
            className:"team-table",
            rowSelection:F(["organization.team.delete"])?{
              selectedRowKeys:t,
              onChange:(e,t)=>{
                i(e),
                s(t)
              },
              getCheckboxProps:e=>({
                disabled:(null==v?void 0:v.email)===(null==e?void 0:e.email)||"owner"===(0,W.d4)(null==e?void 0:e.organizationRole),
                name:null==e?void 0:e.organizationRole
              })
            }:"",
            columns:P,
            dataSource:p||[],
            pagination:!1,
            rowKey:e=>null==e?void 0:e.email
          })
        })
      })
    },
    n2=i(74855),
    n3=i(62610);
    let n4=(0,m.default)(es.default).withConfig({
      componentId:"sc-dcf3fa5b-0"
    })([".ant-modal-content{padding:20px 20px 0 20px;border-radius:8px;}.ant-modal-body{padding:20px;}.ant-modal-footer{border-top:none;}"]),
    n5=m.default.div.withConfig({
      componentId:"sc-dcf3fa5b-1"
    })(["display:flex;justify-content:flex-start;margin-bottom:15px;"]),
    n6=m.default.div.withConfig({
      componentId:"sc-dcf3fa5b-2"
    })(["font-size:18px;font-weight:500;white-space:pre-wrap;"]),
    n7=(0,m.default)(F.default).withConfig({
      componentId:"sc-dcf3fa5b-3"
    })(["background:#ffffff;margin:10px 0;"]),
    n8=(0,m.default)(y.Z).withConfig({
      componentId:"sc-dcf3fa5b-4"
    })(["margin:0 8px;color:#5d97ff;text-align:center;border-color:#dee8ff;width:42px;height:41px;"]),
    n9=(0,m.default)(y.Z).withConfig({
      componentId:"sc-dcf3fa5b-5"
    })(["font-size:14px;background:#f4584c;width:172px;height:47px;padding:0;"]),
    ae=(0,m.default)(n9).withConfig({
      componentId:"sc-dcf3fa5b-6"
    })(["background:#ffffff;color:#5d97ff;border:1px solid #5d97ff;margin-right:15px;width:145px;padding:0;:hover{background:#ffffff;color:#5d97ff;border:1px solid #5d97ff;}"]),
    at=m.default.div.withConfig({
      componentId:"sc-dcf3fa5b-7"
    })(["display:flex;justify-content:end;"]),
    ai=m.default.p.withConfig({
      componentId:"sc-dcf3fa5b-8"
    })(["margin-bottom:0;color:#161e35;"]),
    an=ew.Z.Item;
    var aa=e=>{
      let{
        appDetail:t
      }=e,
      [i,l]=(0,a.useState)(!1),
      s=(0,o.useRouter)(),
      {
        name:c,
        _id:d
      }=t,
      p=(0,ei.useQueryClient)(),
      {
        refetch:u,
        isLoading:h
      }=(0,A.Xp)({
        name:c
      },d),
      [f]=ew.Z.useForm(),
      m=(0,a.useRef)(null),
      {
        currentOrgReducer:{
          orgId:v,
          organizationName:g,
          profileReducer:x
        },
        currentAppReducer:b
      }=(0,r.v9)(e=>e),
      y=(0,r.I0)(),
      j=()=>{
        l(!1),
        f.resetFields()
      },
      w="appList_".concat(v),
      Z=()=>{
        l(!0)
      };
      return(0,a.useEffect)(()=>{
        let e=setTimeout(()=>{
          i&&(null==m?void 0:m.current)&&(null==m||m.current.focus())
        },500);
        return()=>{
          clearTimeout(e)
        }
      },[i,null==m?void 0:m.current]),
      (0,n.jsxs)(n.Fragment,{
        children:[(0,n.jsx)(n8,{
          shape:"circle",
          onClick:()=>Z(),
          children:(0,n.jsx)(nw.K$,{})
        }),(0,n.jsx)(n4,{
          visible:i,
          onCancel:j,
          closable:!1,
          destroyOnClose:()=>{
            f.resetFields()
          },
          footer:[null],
          width:609,
          children:(0,n.jsxs)(ew.Z,{
            form:f,
            onFinish:()=>{
              u().then(e=>{
                var i,
                n,
                a,
                o,
                l;
                if(null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.error){
                  _.ZP.error(null==e?void 0:null===(o=e.data)||void 0===o?void 0:null===(a=o.error)||void 0===a?void 0:a.message);
                  return
                }(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.message)&&(_.ZP.success(null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.message),y((0,k.CW)(null,{
                  eventName:"wa_delete_app",
                  eventProperty:{
                    email:(null==x?void 0:x.email)||"",
                    appId:d,
                    appName:c,
                    appType:(null==t?void 0:t.appType)||"",
                    region:(null==t?void 0:t.region)||""
                  }
                })),j(),d===(null==b?void 0:b._id)?s.reload():(p.setQueryData(w,e=>e.filter(e=>(null==e?void 0:e._id)!==d)),p.invalidateQueries("profileInfo"),p.invalidateQueries("teamList".concat(v)),p.invalidateQueries("total_apps_".concat(v))))
              })
            },
            requiredMark:!1,
            children:[(0,n.jsxs)(n.Fragment,{
              children:[(0,n.jsx)(n5,{
                children:(0,n.jsxs)(n6,{
                  children:["Delete ",null==t?void 0:t.name]
                })
              }),(0,n.jsx)(ai,{
                children:"This app and all associated analytics data will be permanently\n              removed from ".concat(g,".")
              }),(0,n.jsx)(ai,{
                children:"This action cannot be undone."
              }),(0,n.jsx)(an,{
                name:"name",
                rules:[{
                  required:!0,
                  message:"Please enter your app name"
                },()=>({
                  validator:(e,t)=>t&&c!==t?Promise.reject(Error("The name you entered doesn’t match the name of the app")):Promise.resolve()
                })],
                children:(0,n.jsx)(n7,{
                  ref:m,
                  placeholder:"Enter the app name to confirm the deletion"
                })
              })]
            }),(0,n.jsxs)(at,{
              children:[(0,n.jsx)(ae,{
                type:"secondary",
                onClick:()=>j(),
                children:"Cancel"
              },"link"),(0,n.jsx)(n9,{
                loading:h,
                type:"primary",
                htmlType:"submit",
                danger:!0,
                children:"Delete"
              },"submit")]
            })]
          })
        })]
      })
    };
    let ao=m.default.div.withConfig({
      componentId:"sc-ec6428f4-0"
    })(["display:flex;flex-direction:column;width:70px;position:relative;align-items:center;.ant-avatar-square{border-radius:13px;}.ant-upload-select{position:absolute;bottom:-16px;left:0;}.ant-avatar-string{font-size:40px;}"]),
    al=(0,m.default)(y.Z).withConfig({
      componentId:"sc-ec6428f4-1"
    })(["margin:0 8px;color:#5d97ff;text-align:center;border-color:#dee8ff;"]),
    ar=(0,m.default)(al).withConfig({
      componentId:"sc-ec6428f4-2"
    })(["border:none;padding:0;height:0;font-size:8px;color:#5b6d89;"]),
    as="image/jpeg, image/jpg, image/png",
    ac="imageFile";
    var ad=e=>{
      var t;
      let{
        user:i,
        permission:o
      }=e,
      [l,r]=(0,a.useState)([]),
      [s,c]=(0,a.useState)(),
      [d,p]=(0,a.useState)(),
      u=e=>{
        let{
          type:t,
          size:i
        }=e,
        n=as.includes(t),
        a=i/1024/1024<2;
        return n?a||_.ZP.error("Image size must smaller than 2MB."):_.ZP.error("Only files with these extensions are allowed: png, jpg, jpeg."),
        n&&a
      },
      {
        image:h,
        _id:f
      }=i,
      {
        mutate:m,
        isLoading:v
      }=(0,ei.useMutation)(A.Nt,{
        onSuccess:e=>{
          var t,
          i,
          n;
          (null==e?void 0:e.app)&&(p(null==e?void 0:null===(t=e.app)||void 0===t?void 0:t.image),_.ZP.success(null==e?void 0:e.message)),
          (null==e?void 0:e.error)&&((null==e?void 0:null===(i=e.error)||void 0===i?void 0:i.imageFile)&&_.ZP.error(null==e?void 0:null===(n=e.error)||void 0===n?void 0:n.imageFile[0]),p(h))
        },
        onError:e=>{
          var t,
          i;
          _.ZP.error((null==e?void 0:null===(i=e.data)||void 0===i?void 0:null===(t=i.error)||void 0===t?void 0:t.message)||"Unable to change the icon of app."),
          p(h)
        }
      }),
      g=async e=>{
        let t=await u(null==e?void 0:e.file),
        i=await (0,O.lH)(null==e?void 0:e.file);
        r(e),
        t&&m({
          payload:{
            [ac]:i
          },
          appId:f
        })
      };
      return(0,a.useEffect)(()=>{
        p(h)
      },[h]),
      (0,n.jsxs)(ao,{
        children:[(0,n.jsx)(D.Z,{
          spinning:(null==i?void 0:i._id)===s&&v,
          indicator:(0,n.jsx)(L.Z,{}),
          size:"small",
          children:(0,n.jsx)(b.Z,{
            picture:d,
            nameInfo:i.name?i.name.trim():i.email.trim(),
            size:55,
            shape:"square"
          })
        }),(0,n.jsx)(T.Z,{
          name:ac,
          customRequest:g,
          fileList:null===(t=l[ac])||void 0===t?void 0:t.originFileObj,
          accept:as,
          listType:"picture",
          onChange:()=>{
            c(i._id)
          },
          showUploadList:!1,
          maxCount:1,
          children:o&&(0,n.jsx)(ar,{
            disabled:v,
            icon:(0,n.jsx)(nw.uf,{}),
            className:"hover-button",
            children:"Change icon"
          })
        })]
      })
    },
    ap=i(82482);
    let au=["app.update","app.create"],
    ah=["recording_setting.view","recording_setting.create","recording_setting.update","recording_setting.delete","app.configuration.view","app.configuration.create","app.configuration.update"],
    af=(0,m.default)(tw.Z).withConfig({
      componentId:"sc-7de6a711-0"
    })([".ant-table table{border-spacing:0 16px;}.ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before{width:0;}td.ant-table-column-sort{background:none;}.ant-table-thead th.ant-table-column-has-sorters:hover{background:none;}.ant-table-column-sorter{visibility:collapse;}.ant-table-container table > thead > tr:first-child th:first-child{border-top-left-radius:10px;border-bottom-left-radius:10px;border:1px solid #e7edf9;background:#ffffff;border-right:none;}.ant-table-container table > thead > tr:first-child th:last-child{border-top-right-radius:10px;border-bottom-right-radius:10px;border:1px solid #e7edf9;background:#ffffff;border-left:none;}.ant-table-container table > thead > tr > th{background:#ffffff;border:1px solid #e7edf9;border-left:none;border-right:none;border-spacing:10px;}.ant-table-row.editable-row{border-radius:8px;outline:1px solid ",";.hover-button{visibility:hidden;}:hover{.hover-button{visibility:visible;}}}.ant-table-tbody > tr > td{border-bottom:none;padding:20px 16px;}.ant-table-thead > tr > th{border-bottom:none;}.editable-row{border-radius:10px;}.rowClassName1 td:first-child{border-top-left-radius:10px;border-bottom-left-radius:10px;}.editable-row td:last-child{border-top-right-radius:10px;border-bottom-right-radius:10px;}"],v.r.colors.surface10),
    am=m.default.div.withConfig({
      componentId:"sc-7de6a711-1"
    })(["margin:0px;.ant-input-group-wrapper:hover{border-color:#5d97ff;box-shadow:0 0 0 transparent;}.ant-input-group-wrapper.ant-input-status-error{background:#fff;border-color:pink !important;}.ant-input-group-wrapper{border:1px solid #c0cad0;padding:4px;border-radius:5px;.ant-btn{justify-content:center;align-items:center;margin:0;}.ant-input{border:none;}.ant-input-group-addon{border:none;padding:0;margin:4px;.ant-btn-primary{margin-right:6px;}}}.ant-input{margin-top:4px;}img{margin-right:18px;}.ant-upload-list-item{display:none;}p{margin-bottom:0;}svg{margin-right:3px;}"]),
    av=m.default.div.withConfig({
      componentId:"sc-7de6a711-2"
    })(["display:flex;align-items:center;flex-direction:flex-start;"]),
    ag=m.default.div.withConfig({
      componentId:"sc-7de6a711-3"
    })(["display:flex;flex-direction:column;margin-left:10px;width:70%;"]);
    (0,m.default)(y.Z).withConfig({
      componentId:"sc-7de6a711-4"
    })(["border:none;box-shadow:none;background:transparent;padding:0;:hover{svg{path{fill:#5d97ff;color:#5d97ff;}}}"]);
    let ax=m.default.div.withConfig({
      componentId:"sc-7de6a711-5"
    })(["display:flex;justify-content:flex-end;a.ant-btn{padding:8px !important;}"]),
    ab=(0,m.default)(y.Z).withConfig({
      componentId:"sc-7de6a711-6"
    })(["margin-left:",";color:#5d97ff;text-align:center;border-color:#dee8ff;height:24px;width:24px;"],e=>{
      let{
        hasedit:t
      }=e;
      return t?"4px":""
    }),
    ay=(0,m.default)(ab).withConfig({
      componentId:"sc-7de6a711-7"
    })(["height:41px;width:42px;"]),
    aj=m.default.div.withConfig({
      componentId:"sc-7de6a711-8"
    })(["color:#161e35;font-weight:500;font-size:14px;display:flex;"]),
    aw=m.default.div.withConfig({
      componentId:"sc-7de6a711-9"
    })(["display:flex;display-direction:row;background-color:#fff;.ant-btn{display:flex;font-size:12px;line-height:0;justify-content:center;align-items:center;height:26px;padding:12px 8px;}"]),
    aZ=m.default.div.withConfig({
      componentId:"sc-7de6a711-10"
    })(["color:#f4584c;font-size:12px;"]);
    m.default.span.withConfig({
      componentId:"sc-7de6a711-11"
    })(["display:flex;align-items:center;button{position:relative;top:1px;}"]);
    let aC=e=>"web"===e?"Web App":"Mobile App",
    ak=e=>{
      let{
        record:t,
        validatePermissionOnSingleApp:i
      }=e,
      [o,l]=(0,a.useState)(),
      [s,c]=(0,a.useState)(!1),
      [d,p]=(0,a.useState)(!1),
      [u,h]=(0,a.useState)(""),
      f=(0,ei.useQueryClient)(),
      m=(0,r.I0)(),
      {
        name:v,
        _id:g,
        orgId:x
      }=t,
      b="appList_".concat(x),
      {
        refetch:j,
        isLoading:w
      }=(0,A.d_)(o,g),
      Z=(0,n.jsxs)(aw,{
        children:[(0,n.jsx)(y.Z,{
          type:"primary",
          size:"small",
          onClick:()=>{
            j().then(e=>{
              var t,
              i,
              n,
              a;
              if((null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.error)||(_.ZP.success(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.message),f.setQueryData(b,t=>{
                var i;
                let n=[...t];
                return n[(null==t?void 0:t.length)&&t.findIndex(e=>(null==e?void 0:e._id)===g)]=null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.app,
                n
              }),f.invalidateQueries("total_apps_".concat(x)),m((0,n3.Zn)()),c(!1),l()),null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.error){
                let t=null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.error;
                if(!t){
                  _.ZP.error("Something went wrong while creating app.");
                  return
                }
                _.ZP.error(t.message||t.detail||t.name)
              }
            })
          },
          disabled:u,
          loading:w,
          children:"Save"
        }),(0,n.jsx)(y.Z,{
          size:"small",
          onClick:()=>{
            c(!1),
            p(!1),
            h("")
          },
          children:"Cancel"
        })]
      });
      return(0,n.jsxs)(av,{
        children:[(0,n.jsx)(ad,{
          user:t,
          permission:i(au,g)
        }),(0,n.jsx)(ag,{
          children:s?(0,n.jsxs)(am,{
            children:[(0,n.jsx)(F.default,{
              className:"".concat(u?"ant-input-status-error":""),
              placeholder:"Enter app name",
              onChange:e=>{
                let t=e.target.value;
                h((0,O.rT)(t)),
                l(t)
              },
              value:o,
              addonAfter:Z
            }),u&&(0,n.jsx)(aZ,{
              children:u
            })]
          }):(0,n.jsxs)(aj,{
            children:[(0,n.jsx)(nr.Z,{
              value:v
            }),i(au,g)&&(0,n.jsx)(ab,{
              hasedit:!0,
              shape:"circle",
              onClick:()=>{
                l(null==t?void 0:t.name),
                c(!0)
              },
              className:"hover-button",
              children:(0,n.jsx)(nw.u1,{})
            })]
          })
        })]
      })
    };
    var aI=()=>{
      let e=(0,ei.useQueryClient)(),
      [t,i]=(0,a.useState)([]),
      [o,l]=(0,a.useState)(),
      [s,c]=(0,a.useState)(!1),
      {
        currentOrgReducer:{
          orgId:d,
          planFeature:p
        }
      }=(0,r.v9)(e=>e),
      u=(0,a.useMemo)(()=>null==p?void 0:p.mriFeature,[null==p?void 0:p.mriFeature]),
      {
        searchAppName:h
      }=nx(),
      {
        isLoading:f,
        data:m
      }=(0,A.RL)(d),
      v=(0,ni.Z)(h,500),
      g=e.getQueryData("profileInfo"),
      x=e.getQueryData("roles_permission"),
      b=(0,a.useCallback)((e,t)=>g&&(0,W.g6)(e,x,null==g?void 0:g.organization,d,t),[g,x,d]),
      y=(0,a.useCallback)(e=>g&&(0,W.W9)(e,x,null==g?void 0:g.organization,d),[g,x,d]),
      w=(0,I.ye)("app-settings-domains"),
      Z=[{
        title:e=>{
          let{
            sortColumns:t
          }=e;
          return(0,n.jsx)(nt,{
            title:"App",
            sortColumns:t,
            dataIndex:"name"
          })
        },
        dataIndex:"name",
        width:250,
        defaultSortOrder:"ascend",
        sorter:(e,t)=>{
          var i;
          return null==e?void 0:null===(i=e.name)||void 0===i?void 0:i.localeCompare(null==t?void 0:t.name)
        },
        sortDirections:["ascend","descend","ascend"],
        render:(e,t)=>(0,n.jsx)(ak,{
          record:t,
          userRoleOnOrg:o,
          userRoleOnApps:s,
          validatePermissionOnSingleApp:b
        })
      },{
        title:e=>{
          let{
            sortColumns:t
          }=e;
          return(0,n.jsx)(nt,{
            title:"Role",
            sortColumns:t,
            dataIndex:"role"
          })
        },
        dataIndex:"role",
        sorter:(e,t)=>{
          var i;
          return null==e?void 0:null===(i=e.role)||void 0===i?void 0:i.localeCompare(null==t?void 0:t.role)
        },
        sortDirections:["ascend","descend","ascend"],
        width:200,
        render:e=>(0,n.jsx)("div",{
          children:e||"-"
        })
      },{
        title:"App key",
        dataIndex:"apiKey",
        width:200,
        render:(e,t)=>(0,n.jsx)(ap.Z,{
          value:null==t?void 0:t.key,
          fixedWidth:!0
        })
      },{
        title:"",
        key:"action ".concat((0,i5.v4)()),
        width:200,
        visible:!y(ah),
        render:(e,t)=>{
          let{
            _id:i
          }=t;
          return(0,n.jsxs)(ax,{
            children:[b(ah,i)&&(0,n.jsx)(j.Z,{
              title:"App setting",
              children:(0,n.jsx)(E(),{
                href:{
                  pathname:"/integration",
                  query:{
                    parentType:"settings",
                    setting:"app_setting",
                    org:d,
                    app:i,
                    app_tab:"video_recording_setting"
                  }
                },
                as:"/settings/app/".concat(d,"/").concat(i,"/video_recording_setting"),
                passHref:!0,
                children:(0,n.jsx)(ay,{
                  shape:"circle",
                  icon:(0,n.jsx)(nw.x6,{})
                })
              })
            }),b(["app.delete"],i)&&(0,n.jsx)(aa,{
              appDetail:t
            })]
          })
        }
      }].filter(e=>!(null==e?void 0:e.visible));
      u&&Z.splice(3,0,{
        title:"Data storage location",
        dataIndex:"region",
        width:200,
        render:e=>(0,n.jsx)("span",{
          children:e||"-"
        })
      }),
      w&&Z.splice(1,0,{
        title:e=>{
          let{
            sortColumns:t
          }=e;
          return(0,n.jsx)(nt,{
            title:"Platform",
            sortColumns:t,
            dataIndex:"appType"
          })
        },
        dataIndex:"appType",
        sorter:(e,t)=>{
          var i;
          return null==e?void 0:null===(i=e.appType)||void 0===i?void 0:i.localeCompare(null==t?void 0:t.appType)
        },
        sortDirections:["ascend","descend","ascend"],
        width:200,
        render:e=>(0,n.jsx)("div",{
          children:aC(e)||"-"
        })
      });
      let C=(0,a.useMemo)(()=>(null==m?void 0:m.length)&&m.filter(e=>{
        var t,
        i;
        return null==e?void 0:null===(i=e.name)||void 0===i?void 0:null===(t=i.toLowerCase())||void 0===t?void 0:t.includes(v)
      }),[v,m]);
      return(0,a.useEffect)(()=>{
        i(C)
      },[v]),
      (0,a.useEffect)(()=>{
        (null==m?void 0:m.length)&&i(m)
      },[m]),
      (0,a.useEffect)(()=>{
        if(g){
          var e,
          t;
          let i=(0,W.gI)(null==g?void 0:g.organization,d);
          l(null==g?void 0:null===(e=g.organization[i])||void 0===e?void 0:e.role),
          c((0,W.Cu)(null==g?void 0:null===(t=g.organization[i])||void 0===t?void 0:t.apps))
        }
      },[g]),
      (0,n.jsx)(i7.Z,{
        show:f,
        message:(0,n.jsx)(i6.Z,{
          type:"spin"
        }),
        backgroundStyle:{
          backgroundColor:"rgba(255,255,255,1)"
        },
        children:(0,n.jsx)(af,{
          className:"team-table",
          showSorterTooltip:!1,
          columns:Z,
          rowClassName:()=>"editable-row",
          dataSource:t||[],
          pagination:!1,
          rowKey:e=>null==e?void 0:e._id
        })
      })
    },
    aS=i(80688);
    let az=m.default.div.withConfig({
      componentId:"sc-348a3483-0"
    })(["display:flex;gap:0 15px;"]),
    a_=(0,m.default)(F.default).withConfig({
      componentId:"sc-348a3483-1"
    })(["height:36px;background:#ffffff;border:1px solid #c0cad9;border-radius:4px;align-items:center;padding:10px 15px;"]);
    var aF=()=>{
      let{
        setSearchAppName:e
      }=nx();
      return(0,n.jsxs)(az,{
        children:[(0,n.jsx)(a_,{
          placeholder:"Search apps ",
          onChange:t=>{
            var i;
            let{
              value:n
            }=t.target;
            e(null==n?void 0:null===(i=n.toLowerCase())||void 0===i?void 0:i.trim())
          }
        }),(0,n.jsx)(aS.ZP,{})]
      })
    },
    aP=i(23078),
    aE=i.n(aP),
    aM=i(22365),
    aR=i(66873),
    aN=i(37633),
    aA=i(27205),
    aD=i(73260),
    aT=i(19755),
    aL=i.n(aT),
    aO=i(1949);
    let aU=m.default.div.withConfig({
      componentId:"sc-97b334e4-0"
    })(["display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;height:calc(100vh - 180px);"]),
    aV=m.default.div.withConfig({
      componentId:"sc-97b334e4-1"
    })(["font-size:16px;font-weight:500;margin:10px 0;"]),
    aB=m.default.div.withConfig({
      componentId:"sc-97b334e4-2"
    })(["font-size:12px;font-weight:400;margin:10px 0;"]),
    aK=(0,m.default)(y.Z).withConfig({
      componentId:"sc-97b334e4-3"
    })(["color:#5d97ff !important;border-color:#5d97ff !important;border-radius:4px;font-size:14px;font-weight:400;margin:10px 0;"]);
    var aW=e=>{
      let{
        message:t,
        feature:i
      }=e;
      return(0,n.jsxs)(aU,{
        children:[(0,n.jsx)(aO.Ak,{}),!i&&(0,n.jsx)(aV,{
          children:"Access to this page is restricted"
        }),(0,n.jsx)(aB,{
          children:t
        }),!i&&(0,n.jsx)(aK,{
          ghost:!0,
          href:"https://help.uxcam.com/en/articles/10222476-manage-your-team",
          target:"_blank",
          rel:"noopener noreferrer",
          children:"Learn more about permissions"
        })]
      })
    };
    let aq=e=>{
      let{
        title:t,
        entityUrl:i,
        acsUrl:a
      }=e;
      return(0,n.jsxs)("div",{
        className:"sso-link",
        children:[(0,n.jsxs)("div",{
          className:"form-item",
          children:[(0,n.jsx)("span",{
            children:t
          })," ",(0,n.jsx)(j.Z,{
            title:t,
            children:(0,n.jsx)(aM.Z,{})
          })]
        }),(0,n.jsxs)("p",{
          children:[": ","Entity ID"===t?i:a]
        }),(0,n.jsx)(n2.CopyToClipboard,{
          text:"Entity ID"===t?i:a,
          onCopy:()=>{},
          children:(0,n.jsx)(j.Z,{
            placement:"topLeft",
            title:"Copy ".concat(t),
            arrowPointAtCenter:!0,
            children:(0,n.jsx)(y.Z,{
              size:"small",
              style:{
                border:0
              },
              children:(0,n.jsx)(aR.Z,{
                style:{
                  marginLeft:-4
                }
              })
            })
          })
        })]
      })
    },
    {
      TextArea:aQ
    }=F.default;
    var aH=()=>{
      let[e]=ew.Z.useForm(),
      t=(0,r.I0)(),
      [,i]=(0,a.useState)({}),
      [o,l]=(0,a.useState)(!1),
      [d,u]=(0,a.useState)({
        success:"",
        failure:""
      }),
      [h,f]=(0,a.useState)([]),
      [m,v]=(0,a.useState)(!1),
      {
        sso:g,
        error:x
      }=(0,r.v9)(e=>e.ssoInfo),
      {
        ssoUrl:b,
        entityId:j,
        certificate:w,
        spEntityUrl:Z,
        spAcsUrl:C,
        debug:k,
        loginUrl:I
      }=g,
      {
        currentOrgReducer:{
          orgId:S
        },
        applicationReducer:_
      }=(0,r.v9)(e=>e),
      [P,E]=(0,a.useState)(!1),
      M=null==_?void 0:_.find(e=>e.orgId===S),
      R=(0,a.useMemo)(()=>(null==M?void 0:M.isOwner)||(null==M?void 0:M.role)===1,M),
      N=e=>{
        v(h.some(e=>e.belongsToMoreThanOneOrganization&&1===e.status))
      },
      A=e=>{
        l(!0)
      },
      D=async()=>{
        try{
          let e=await s.Z.getTeamMembers(S);
          200===e.status&&f(e.data.data.team)
        }
        catch(e){
          return e
        }
      },
      T=()=>{
        aL()(".test-successful").show(),
        setTimeout(()=>{
          aL()(".test-successful").hide()
        },3e3)
      },
      L=()=>{
        aL()(".test-failed").show(),
        setTimeout(()=>{
          aL()(".test-failed").hide()
        },3e3)
      },
      O=e=>{
        let t="",
        {
          error:i
        }=e.data;
        for(let e in i)"ssoUrl"===e&&(t+="".concat(i["".concat(e)])),
        "entityId"===e&&(t+="".concat(i["".concat(e)])),
        "certificate"===e&&(t+="".concat(i["".concat(e)]));
        422===e.status?u({
          ...d,
          failure:t
        }):u({
          ...d,
          failure:"Something went wrong! Please try again."
        }),
        L()
      },
      U=async e=>{
        E(!0);
        try{
          let i=await s.Z.saveOrUpdateSSOConfig(e,S);
          200===i.status&&(u({
            ...d,
            success:i.data.data.message
          }),T(),t(c(S)),E(!1))
        }
        catch(e){
          O(e.response),
          E(!1)
        }
      },
      V=async()=>{
        try{
          let e=await s.Z.modifySSOConfig(S,k);
          200===e.status&&(u({
            ...d,
            success:e.data.data.message
          }),T(),t(c(S)),k||t(p(Z,C)))
        }
        catch(e){
          O(e.response)
        }
      },
      B=async t=>{
        U(await e.validateFields())
      },
      K=()=>{
        l(!1)
      };
      return((0,a.useEffect)(()=>{
        N()
      },[h]),(0,a.useEffect)(()=>{
        e.setFieldsValue({
          ssoUrl:b,
          entityId:j,
          certificate:w
        })
      },[g]),(0,a.useEffect)(()=>{
        i({})
      },[]),(0,a.useEffect)(()=>(t(c(S)),D(),()=>{
        t(p(Z,C))
      }),[]),R)?x?(0,n.jsx)(z.Z,{
        message:"Error",
        description:x,
        type:"error",
        showIcon:!0,
        style:{
          margin:20
        }
      }):(0,n.jsxs)(n.Fragment,{
        children:[(0,n.jsx)("div",{
          className:"sso-link-wrapper",
          children:(0,n.jsxs)(aA.Z,{
            children:[(0,n.jsx)(aq,{
              title:"Entity ID",
              entityUrl:Z
            }),(0,n.jsx)(aq,{
              title:"ACS URL",
              acsUrl:C
            })]
          })
        }),(0,n.jsxs)(aA.Z,{
          className:"sso-form-wrapper",
          children:[(0,n.jsx)(aD.Z,{
            span:12,
            children:(0,n.jsxs)(ew.Z,{
              form:e,
              onFinish:B,
              className:"sso-form",
              initialValues:{
                ssoUrl:b,
                entityId:j,
                certificate:w
              },
              children:[(0,n.jsx)(ew.Z.Item,{
                label:"SSO URL",
                name:"ssoUrl",
                rules:[{
                  required:!0,
                  message:"Please enter sso url!"
                },{
                  min:2
                }],
                children:(0,n.jsx)(F.default,{})
              }),(0,n.jsx)(ew.Z.Item,{
                label:"Entity ID",
                name:"entityId",
                rules:[{
                  required:!0,
                  message:"Please enter entity id"
                },{
                  min:2
                }],
                children:(0,n.jsx)(F.default,{})
              }),(0,n.jsx)(ew.Z.Item,{
                label:"Certificate",
                name:"certificate",
                rules:[{
                  required:!0,
                  message:"Please enter certificate"
                },{
                  min:2
                }],
                children:(0,n.jsx)(aQ,{
                  autoSize:{
                    minRows:3,
                    maxRows:5
                  }
                })
              }),(0,n.jsxs)("div",{
                className:"btn-group",
                children:[(0,n.jsx)(ew.Z.Item,{
                  shouldUpdate:!0,
                  children:()=>(0,n.jsx)(y.Z,{
                    type:"primary",
                    htmlType:"submit",
                    loading:P,
                    disabled:!k||!e.isFieldsTouched(!0)||!!e.getFieldsError().filter(e=>{
                      let{
                        errors:t
                      }=e;
                      return t.length
                    }).length,
                    children:"Save"
                  })
                }),k&&(0,n.jsx)(ew.Z.Item,{
                  shouldUpdate:!0,
                  children:()=>(0,n.jsx)(y.Z,{
                    type:"secondary",
                    disabled:!e.isFieldsTouched(!0)||!!e.getFieldsError().filter(e=>{
                      let{
                        errors:t
                      }=e;
                      return t.length
                    }).length,
                    onClick:()=>A(),
                    children:"Test Config"
                  })
                }),(0,n.jsx)(ew.Z.Item,{
                  shouldUpdate:!0,
                  children:()=>(0,n.jsx)(y.Z,{
                    type:"secondary",
                    disabled:!e.isFieldsTouched(!0)||!!e.getFieldsError().filter(e=>{
                      let{
                        errors:t
                      }=e;
                      return t.length
                    }).length,
                    onClick:()=>V(),
                    children:k?" Enable SSO":"Disable SSO"
                  })
                })]
              })]
            })
          }),(0,n.jsx)(aD.Z,{
            span:12,
            children:(0,n.jsxs)("div",{
              className:"sso-message",
              children:[(0,n.jsxs)("div",{
                className:"test-successful",
                style:{
                  display:"none"
                },
                children:[(0,n.jsx)(aN.Z,{}),(0,n.jsx)("span",{
                  className:"info-text",
                  children:d.success
                })]
              }),(0,n.jsxs)("div",{
                className:"test-failed",
                style:{
                  display:"none"
                },
                children:[(0,n.jsx)(aM.Z,{}),(0,n.jsx)("span",{
                  children:d.failure
                })]
              }),m&&(0,n.jsxs)("div",{
                className:"message",
                children:[(0,n.jsx)("div",{
                  className:"message-icon",
                  children:(0,n.jsx)(aM.Z,{})
                }),(0,n.jsxs)("div",{
                  className:"message-text",
                  children:[(0,n.jsxs)("p",{
                    children:["The following members of ",(0,n.jsx)("strong",{
                      children:"Super Org"
                    })," are already member of at least one other organization on the UXCam dashboard."]
                  }),(0,n.jsx)("p",{
                    className:"name",
                    children:h.map(e=>(0,n.jsxs)(n.Fragment,{
                      children:[" ",e.belongsToMoreThanOneOrganization&&1===e.status&&(0,n.jsxs)(n.Fragment,{
                        children:[" ",(0,n.jsxs)("span",{
                          children:[e.name," ","(".concat(e.email,")")," "]
                        })," ",(0,n.jsx)("br",{})]
                      })," "]
                    }))
                  }),(0,n.jsx)("p",{
                    children:"Single Sign On will only work if all members of your organization are only members of your organization so please ask them to leave the other organizations or you can also remove their access from your organization before allowing Single Sign On."
                  })]
                })]
              })]
            })
          })]
        }),o&&null!==I&&(0,n.jsx)(aE(),{
          url:I,
          onUnload:()=>K(),
          title:"SSO Configuration",
          center:"parent",
          features:{
            left:200,
            top:200,
            width:600,
            height:600,
            scrollbars:"yes",
            resizable:"yes"
          }
        })]
      }):(0,n.jsx)(aW,{
        message:"The Single Sign On page is only available to the Organization owner and Organization managers."
      })
    },
    aY=i(28151);
    let aG=(0,m.default)(ew.Z).withConfig({
      componentId:"sc-84bb86c6-0"
    })(["display:flex;flex-wrap:wrap;padding:0;margin:0;gap:20px;"]),
    a$=m.default.div.withConfig({
      componentId:"sc-84bb86c6-1"
    })(["display:flex;flex-direction:column;flex:1 1 calc(50% - 20px);max-width:calc(50% - 20px);min-width:500px;border:1px solid ",";border-radius:4px;.header{display:flex;padding:14px 20px;justify-content:space-between;align-items:center;color:",";border-bottom:1px solid ",";.title{font-weight:700;}}.content{padding:20px;display:flex;flex-direction:column;gap:20px;.item-wrapper:not(:first-child){border-top:1px solid ",";padding-top:20px;}.item-wrapper{display:flex;gap:12px;.label-content{display:flex;flex-direction:column;gap:4px;color:",";.title{color:",";font-weight:500;}}}}"],v.r.colors.surface10.toString(),v.r.colors.primary1000.toString(),v.r.colors.surface10.toString(),v.r.colors.surface10.toString(),v.r.colors.surface200.toString(),v.r.colors.primaryMidnight.toString());
    var aJ=()=>{
      let[e]=ew.Z.useForm(),
      {
        getAiFilterSettings:t,
        updateAiFilterSettings:i
      }=(0,aY.H)(),
      {
        data:o,
        isLoading:l
      }=t,
      r=(0,a.useMemo)(()=>{
        var e,
        t;
        return null==o?void 0:null===(t=o.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.aiFilter
      },[o]),
      s=(0,a.useMemo)(()=>({
        "ai-filter":r
      }),[r]),
      c=e=>{
        i.mutate({
          aiFilter:e
        })
      };
      return l?(0,n.jsx)(I.$j,{}):(0,n.jsx)(aG,{
        form:e,
        initialValues:s,
        onFieldsChange:e=>{
          let t=e.find(e=>"ai-filter"===e.name[0]);
          (null==t?void 0:t.touched)&&c(t.value)
        },
        children:(0,n.jsxs)(a$,{
          children:[(0,n.jsx)("span",{
            className:"header",
            children:(0,n.jsx)("span",{
              className:"title",
              children:"UXCAM AI"
            })
          }),(0,n.jsx)("div",{
            className:"content",
            children:(0,n.jsxs)("div",{
              className:"item-wrapper",
              children:[(0,n.jsx)(ew.Z.Item,{
                name:"ai-filter",
                valuePropName:"checked",
                noStyle:!0,
                children:(0,n.jsx)(ny.default,{
                  disabled:l||i.isLoading
                })
              }),(0,n.jsxs)("div",{
                className:"label-content",
                children:[(0,n.jsx)("span",{
                  className:"title",
                  children:"Smart filters"
                }),(0,n.jsx)("span",{
                  children:"Let your team try UXCam's Smart filters for accurate and efficient analysis."
                })]
              })]
            })
          })]
        })
      })
    },
    aX=i(61288),
    a0=i(18768),
    a1=e=>(0,n.jsxs)("svg",{
      width:20,
      height:20,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,n.jsx)("path",{
        opacity:.22,
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M18.213 5.584a9.5 9.5 0 0 1 .854 3.95 9.533 9.533 0 1 1-2.74-6.688c-.694.588-1.358 1.32-1.805 2.01a.352.352 0 0 0 .199.532c1.038.306 2.384.469 3.077.538a.376.376 0 0 0 .415-.342Z",
        fill:"url(#icon-clock_svg__a)"
      }),(0,n.jsx)("path",{
        d:"M9.533 5.123v5.173l2.316 2.195",
        stroke:"#fff",
        strokeWidth:1.623,
        strokeLinecap:"round"
      }),(0,n.jsx)("path",{
        d:"M14.522 4.856a.352.352 0 0 0 .199.532c1.038.306 2.384.469 3.077.538a.376.376 0 0 0 .414-.417c-.071-.668-.236-1.954-.541-3.057a.357.357 0 0 0-.54-.21c-.957.624-1.99 1.658-2.61 2.614Z",
        fill:"#EE5EDD"
      }),(0,n.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M0 9.533a9.533 9.533 0 0 1 15.73-7.245c.316-.272.64-.519.958-.726a1.168 1.168 0 0 1 1.765.673c.323 1.17.493 2.509.566 3.188a1.187 1.187 0 0 1-1.301 1.31c-.698-.07-2.11-.239-3.226-.567a1.163 1.163 0 0 1-.651-1.752c.21-.323.46-.653.737-.974a7.91 7.91 0 1 0 2.866 6.094.811.811 0 1 1 1.623 0A9.533 9.533 0 0 1 0 9.533Zm17.046-6.228a9.413 9.413 0 0 0-1.463 1.465c.6.132 1.243.226 1.76.288a20.701 20.701 0 0 0-.297-1.753Z",
        fill:"url(#icon-clock_svg__b)"
      }),(0,n.jsxs)("defs",{
        children:[(0,n.jsxs)("linearGradient",{
          id:"icon-clock_svg__a",
          x1:14.042,
          y1:9.533,
          x2:4.298,
          y2:16.779,
          gradientUnits:"userSpaceOnUse",
          children:[(0,n.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,n.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        }),(0,n.jsxs)("linearGradient",{
          id:"icon-clock_svg__b",
          x1:14.042,
          y1:9.533,
          x2:4.298,
          y2:16.779,
          gradientUnits:"userSpaceOnUse",
          children:[(0,n.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,n.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })]
      })]
    });
    let a2=m.default.div.withConfig({
      componentId:"sc-2026f94e-0"
    })(["padding:20px;border:1px solid #E8E8EB;border-radius:8px;flex:1;@media (max-width:1024px){width:100%;}"]),
    a3=m.default.div.withConfig({
      componentId:"sc-2026f94e-1"
    })(["display:flex;align-items:center;gap:8px;margin-top:22px;&:last-of-type{margin-top:10px;}"]),
    a4=m.default.span.withConfig({
      componentId:"sc-2026f94e-2"
    })(["font-size:",";font-weight:500;color:",";"],v.r.fontSize(1.4),v.r.colors.primaryMidnight.toString()),
    a5=m.default.span.withConfig({
      componentId:"sc-2026f94e-3"
    })(["font-size:",";font-weight:700;color:#49576E;margin-left:auto;"],v.r.fontSize(1.4)),
    a6=m.default.div.withConfig({
      componentId:"sc-2026f94e-4"
    })(["h3{font-size:",";line-height:",";color:",";font-weight:500;margin-bottom:8px;}"],v.r.fontSize(1.6),v.r.fontSize(2.8),v.r.colors.primaryMidnight.toString()),
    a7=m.default.div.withConfig({
      componentId:"sc-2026f94e-5"
    })(["color:",";font-size:",";"],v.r.colors.surface300.toString(),v.r.fontSize(1.4)),
    a8=m.default.div.withConfig({
      componentId:"sc-2026f94e-6"
    })(["display:flex;position:relative;justify-content:center;align-items:center;padding:40px;"]),
    a9=m.default.div.withConfig({
      componentId:"sc-2026f94e-7"
    })(["display:flex;gap:16px;@media (max-width:1024px){flex-direction:column;}"]),
    oe=m.default.div.withConfig({
      componentId:"sc-2026f94e-8"
    })(["background:url('/static/ai/tara-banner-bg.png') no-repeat center center;background-size:cover;border-radius:4px;padding:24px;display:flex;flex-direction:column;justify-content:center;flex:2;min-height:120px;position:relative;overflow:hidden;"]),
    ot=m.default.div.withConfig({
      componentId:"sc-2026f94e-9"
    })(["display:flex;align-items:flex-start;gap:16px;z-index:1;> svg{position:relative;top:4px;}"]),
    oi=m.default.div.withConfig({
      componentId:"sc-2026f94e-10"
    })(["display:flex;flex-direction:column;gap:8px;flex:1;"]),
    on=m.default.div.withConfig({
      componentId:"sc-2026f94e-11"
    })(["display:flex;align-items:center;gap:8px;"]),
    oa=m.default.h4.withConfig({
      componentId:"sc-2026f94e-12"
    })(["font-size:21px;font-weight:600;color:#ffffff;margin:0;letter-spacing:-0.21px;"]),
    oo=m.default.p.withConfig({
      componentId:"sc-2026f94e-13"
    })(["font-size:13px;font-weight:300;color:#ffffff;margin:0;line-height:20px;letter-spacing:0.13px;max-width:420px;strong{font-weight:600;}"]),
    ol=m.default.div.withConfig({
      componentId:"sc-2026f94e-14"
    })(["position:absolute;right:24px;top:50%;transform:translateY(-50%);img{height:170px;width:auto;}"]);
    var or=()=>{
      let{
        currentOrgReducer:{
          orgId:e
        }
      }=(0,r.v9)(e=>e),
      t=(0,u.I)(),
      i=!!(null==t?void 0:t.planFeatureAiSessions),
      {
        data:o,
        isFetching:l
      }=(0,A.Yx)(e,i),
      s=(0,a.useMemo)(()=>{
        if(!o)return null;
        let e=e=>{
          try{
            return(0,a0.Z)(new Date(e),"MMM dd, yyyy")
          }
          catch(t){
            return e
          }
        },
        t=e=>e.toLocaleString();
        return{
          recordingPeriod:"".concat(e(o.recording_start_date)," - ").concat(e(o.recording_end_date)," (").concat(o.recording_days_left," days left)"),
          monthlyLimit:t(o.monthly_tara_credit),
          monthlyRandomCredits:t(o.monthly_auto_analysis_tara_credit)
        }
      },[o]);
      return l||!s?(0,n.jsx)(a2,{
        children:(0,n.jsx)(a8,{
          children:(0,n.jsx)(I.$j,{
            "data-size":"m"
          })
        })
      }):(0,n.jsxs)(a9,{
        children:[(0,n.jsxs)(a2,{
          children:[(0,n.jsx)(a6,{
            children:(0,n.jsx)("h3",{
              children:"Tara AI Plan"
            })
          }),(0,n.jsxs)(a7,{
            children:["Recording period: ",s.recordingPeriod]
          }),(0,n.jsxs)(a3,{
            children:[(0,n.jsx)(a4,{
              children:"Monthly limit"
            }),(0,n.jsx)(j.Z,{
              title:"Your organization shares a pool of credits across all users and apps, which can be used for Session Analysis or Chat prompts.",
              placement:"top",
              children:(0,n.jsx)(aX.Z,{
                style:{
                  color:"#8a99b1",
                  cursor:"pointer"
                }
              })
            }),(0,n.jsxs)(a5,{
              children:[s.monthlyLimit," credits"]
            })]
          }),(0,n.jsxs)(a3,{
            children:[(0,n.jsx)(a4,{
              children:"Context minutes"
            }),(0,n.jsx)(j.Z,{
              title:"The time Tara spends watching sessions to uncover user behavior insights. These are split proportionally based on each app's session volume.",
              placement:"top",
              children:(0,n.jsx)(aX.Z,{
                style:{
                  color:"#8a99b1",
                  cursor:"pointer"
                }
              })
            }),(0,n.jsxs)(a5,{
              children:[s.monthlyRandomCredits," minutes"]
            })]
          })]
        }),(0,n.jsxs)(oe,{
          children:[(0,n.jsxs)(ot,{
            children:[(0,n.jsx)(a1,{}),(0,n.jsxs)(oi,{
              children:[(0,n.jsx)(on,{
                children:(0,n.jsx)(oa,{
                  children:"Tara Never Stops Working"
                })
              }),(0,n.jsxs)(oo,{
                children:["Daily automatic analysis keeps Tara's knowledge current and unbiased, ",(0,n.jsx)("strong",{
                  children:"without using your credits."
                })]
              })]
            })]
          }),(0,n.jsx)(ol,{
            children:(0,n.jsx)("img",{
              src:"/static/ai/tara-banner-svg.svg",
              alt:"Tara illustration"
            })
          })]
        })]
      })
    },
    os=i(69638);
    let oc=m.default.div.withConfig({
      componentId:"sc-2ed5fa2e-0"
    })(["border:1px solid #E8E8EB;border-radius:4px;background:white;"]),
    od=m.default.div.withConfig({
      componentId:"sc-2ed5fa2e-1"
    })(["display:flex;align-items:center;justify-content:space-between;padding:20px;cursor:pointer;user-select:none;&:hover{background-color:#FAFAFA;}"]),
    op=m.default.h4.withConfig({
      componentId:"sc-2ed5fa2e-2"
    })(["font-size:",";font-weight:700;color:",";margin:0;"],v.r.fontSize(1.6),v.r.colors.primaryMidnight.toString()),
    ou=m.default.div.withConfig({
      componentId:"sc-2ed5fa2e-3"
    })(["width:32px;height:32px;display:flex;align-items:center;justify-content:center;transform:",";transition:transform 0.2s ease;svg{width:14px;height:14px;fill:",";}"],e=>e.$isExpanded?"rotate(180deg)":"rotate(0deg)",v.r.colors.surface300.toString()),
    oh=m.default.div.withConfig({
      componentId:"sc-2ed5fa2e-4"
    })(["display:",";padding:0 20px 20px 20px;"],e=>e.$isExpanded?"block":"none"),
    of=m.default.div.withConfig({
      componentId:"sc-2ed5fa2e-5"
    })(["display:flex;align-items:center;gap:12px;"]),
    om=m.default.div.withConfig({
      componentId:"sc-2ed5fa2e-6"
    })(["display:flex;flex-direction:column;line-height:24px;"]),
    ov=m.default.span.withConfig({
      componentId:"sc-2ed5fa2e-7"
    })(["font-size:",";font-weight:500;color:#090F19;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"],v.r.fontSize(1.3)),
    og=m.default.span.withConfig({
      componentId:"sc-2ed5fa2e-8"
    })(["font-size:",";font-weight:400;color:#090F19;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"],v.r.fontSize(1.3)),
    ox=m.default.span.withConfig({
      componentId:"sc-2ed5fa2e-9"
    })(["font-size:",";font-weight:400;color:#090F19;line-height:24px;"],v.r.fontSize(1.3)),
    ob=e=>{
      let{
        row:t
      }=e,
      i=t.original;
      return(0,n.jsxs)(of,{
        children:[(0,n.jsx)(b.Z,{
          picture:i.picture||"",
          nameInfo:i.name||i.email,
          size:32,
          shape:"square",
          className:""
        }),(0,n.jsxs)(om,{
          children:[(0,n.jsx)(ov,{
            children:i.name||"Unknown"
          }),(0,n.jsx)(og,{
            children:i.email
          })]
        })]
      })
    },
    oy=e=>Math.ceil(e).toLocaleString(),
    oj=[{
      id:"total",
      desc:!0
    }];
    var ow=()=>{
      let[e,t]=(0,a.useState)(!1),
      [i,o]=(0,a.useState)(oj),
      {
        currentOrgReducer:{
          orgId:l
        }
      }=(0,r.v9)(e=>e),
      s=(0,ei.useQueryClient)(),
      c=(0,u.I)(),
      d=!!(null==c?void 0:c.planFeatureAiSessions),
      {
        data:p,
        isFetching:h
      }=(0,A.Yx)(l,d),
      f=s.getQueryData("teamList".concat(l)),
      m=(0,a.useMemo)(()=>{
        if(!f||0===f.length)return[];
        let e=(null==p?void 0:p.user_usage)||{},
        t=f.map(t=>{
          let i=e[t.id],
          n=(null==i?void 0:i.chatUsage)||0,
          a=(null==i?void 0:i.videoAnalysisUsage)||0;
          return{
            id:t.id,
            name:t.name||"",
            email:t.email,
            picture:t.picture,
            total:n+a,
            sessionAnalysis:a,
            chatPrompts:n
          }
        }).filter(e=>e.total>0);
        if(i.length>0){
          let{
            id:e,
            desc:n
          }=i[0];
          t.sort((t,i)=>{
            let a=t[e],
            o=i[e];
            return"number"==typeof a&&"number"==typeof o?n?o-a:a-o:0
          })
        }
        return t
      },[p,f,i]),
      v=(0,a.useCallback)(()=>{
        t(e=>!e)
      },[]),
      g=(0,a.useCallback)(e=>(0,n.jsx)(ob,{
        row:e.row
      }),[]),
      x=(0,a.useCallback)(e=>(0,n.jsx)(ox,{
        children:oy(e.getValue())
      }),[]),
      b=(0,a.useCallback)(e=>(0,n.jsx)(ox,{
        children:oy(e.getValue())
      }),[]),
      y=(0,a.useCallback)(e=>(0,n.jsx)(ox,{
        children:oy(e.getValue())
      }),[]),
      j=(0,a.useMemo)(()=>[{
        accessorKey:"name",
        header:"User",
        size:300,
        cell:g,
        enableSorting:!1
      },{
        accessorKey:"total",
        header:"Total",
        size:150,
        cell:x,
        enableSorting:!0,
        sortDescFirst:!0
      },{
        accessorKey:"sessionAnalysis",
        header:"Session Analysis",
        size:150,
        cell:b,
        enableSorting:!0,
        sortDescFirst:!0
      },{
        accessorKey:"chatPrompts",
        header:"Chat Prompts",
        size:150,
        cell:y,
        enableSorting:!0,
        sortDescFirst:!0
      }],[g,x,b,y]);
      return(0,n.jsxs)(oc,{
        children:[(0,n.jsxs)(od,{
          $isExpanded:e,
          onClick:v,
          children:[(0,n.jsx)(op,{
            children:"Credit usage per user"
          }),(0,n.jsx)(ou,{
            $isExpanded:e,
            children:(0,n.jsx)(os._M,{})
          })]
        }),(0,n.jsx)(oh,{
          $isExpanded:e,
          children:(0,n.jsx)(I.Fo,{
            children:(0,n.jsx)(I.S5,{
              columns:j,
              data:m,
              resizeMode:"onChange",
              isLoading:h,
              sorting:i,
              setSorting:o,
              emptyText:{
                message:"Credits haven’t been used yet."
              }
            })
          })
        })]
      })
    },
    oZ=i(13354),
    oC=i(99933),
    ok=i(99252),
    oI=e=>(0,n.jsx)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        d:"M7 4H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9M8 8l4-4m0 0v2.5M12 4H9.5",
        stroke:"#454B5D",
        strokeWidth:1.1,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    });
    let oS=m.default.h4.withConfig({
      componentId:"sc-396a0553-0"
    })(["font-size:",";font-weight:700;color:",";margin:0;"],v.r.fontSize(1.6),v.r.colors.primaryMidnight.toString()),
    oz=m.default.div.withConfig({
      componentId:"sc-396a0553-1"
    })(["display:flex;justify-content:center;align-items:center;padding:40px;position:relative;"]),
    o_=m.default.div.withConfig({
      componentId:"sc-396a0553-2"
    })(["display:flex;flex-direction:column;gap:2px;"]),
    oF=m.default.span.withConfig({
      componentId:"sc-396a0553-3"
    })(["font-size:",";font-weight:400;color:#090F19;line-height:24px;"],v.r.fontSize(1.3)),
    oP=m.default.span.withConfig({
      componentId:"sc-396a0553-4"
    })(["font-size:",";font-weight:400;color:#A2A5AE;"],v.r.fontSize(1.2)),
    oE=m.default.div.withConfig({
      componentId:"sc-396a0553-5"
    })(["display:flex;flex-direction:column;gap:2px;"]),
    oM=m.default.span.withConfig({
      componentId:"sc-396a0553-6"
    })(["font-size:",";font-weight:400;color:#090F19;line-height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"],v.r.fontSize(1.3)),
    oR=m.default.span.withConfig({
      componentId:"sc-396a0553-7"
    })(["font-size:",";font-weight:400;color:#A2A5AE;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"],v.r.fontSize(1.2)),
    oN=m.default.span.withConfig({
      componentId:"sc-396a0553-8"
    })(["font-size:",";font-weight:400;color:#090F19;line-height:24px;"],v.r.fontSize(1.3)),
    oA=m.default.div.withConfig({
      componentId:"sc-396a0553-9"
    })(["display:inline-flex;align-items:center;justify-content:center;gap:4px;padding:4px 12px;border:1px solid #D0D5DD;border-radius:8px;cursor:",";font-size:",";font-weight:500;color:#344054;background:#fff;transition:background 0.2s;&:hover{background:#F9FAFB;}"],e=>{
      let{
        $clickable:t
      }=e;
      return t?"pointer":"default"
    },v.r.fontSize(1.3));
    var oD=()=>{
      let[e,t]=a.useState([]),
      {
        pagination:i,
        setPagination:o
      }=(0,oZ.h)(),
      {
        currentAppReducer:{
          _id:l
        },
        applicationReducer:s
      }=(0,r.v9)(e=>e),
      c=(0,a.useMemo)(()=>new Set((s||[]).flatMap(e=>(e.apps||[]).map(e=>e._id))),[s]),
      {
        data:d,
        isLoading:p,
        isFetching:u
      }=(0,ei.useQuery)(["BATCH_LOGS_ALL",l,i.pageIndex],()=>(0,oC.EZ)({
        appid:l,
        page:i.pageIndex
      }),{
        enabled:!!l,
        keepPreviousData:!0
      }),
      h=(null==d?void 0:d.data)||[],
      f=null==d?void 0:d.pagination,
      m=(null==f?void 0:f.next)?f.current+1:(null==f?void 0:f.current)||1,
      v=(0,a.useCallback)(e=>{
        let t=e.getValue();
        if(!t)return(0,n.jsx)(oN,{
          children:"-"
        });
        let{
          date:i,
          time:a
        }=(0,ok.k2)(t);
        return(0,n.jsxs)(o_,{
          children:[(0,n.jsx)(oF,{
            children:i
          }),(0,n.jsx)(oP,{
            children:a
          })]
        })
      },[]),
      g=(0,a.useCallback)(e=>(0,n.jsx)(oN,{
        children:e.getValue()||"-"
      }),[]),
      x=(0,a.useCallback)(e=>{
        let t=e.row.original;
        return(0,n.jsxs)(oE,{
          children:[(0,n.jsx)(oM,{
            children:t.scheduledByName||"Unknown"
          }),(0,n.jsx)(oR,{
            children:t.scheduledByEmail
          })]
        })
      },[]),
      b=(0,a.useCallback)(e=>(0,n.jsx)(oN,{
        children:e.getValue()||"-"
      }),[]),
      y=(0,a.useCallback)(e=>(0,n.jsx)(oN,{
        children:Math.ceil(e.getValue()||0).toLocaleString()
      }),[]),
      w=(0,a.useCallback)(e=>{
        let t=e.row.original;
        if(!t.url)return null;
        let i=c.has(t.appId);
        return(0,n.jsx)(j.Z,{
          title:i?"View batch sessions":"App no longer available",
          placement:"top",
          children:(0,n.jsxs)(oA,{
            $clickable:i,
            onClick:i?()=>window.open(t.url,"_blank","noopener,noreferrer"):void 0,
            style:i?void 0:{
              opacity:.5,
              cursor:"not-allowed"
            },
            children:["Filter",(0,n.jsx)(oI,{
              src:"/static/ai/ai-share-link.svg",
              alt:"Link"
            })]
          })
        })
      },[c]),
      Z=(0,a.useMemo)(()=>[{
        accessorKey:"createdAt",
        header:"Created on",
        size:140,
        cell:v,
        enableSorting:!0,
        sortDescFirst:!0
      },{
        accessorKey:"name",
        header:"Batch name",
        size:200,
        cell:g,
        enableSorting:!1
      },{
        accessorKey:"scheduledByName",
        header:"Created by",
        size:200,
        cell:x,
        enableSorting:!1
      },{
        accessorKey:"appName",
        header:"App",
        size:150,
        cell:b,
        enableSorting:!1
      },{
        accessorKey:"analyzedCredits",
        header:"Credits used",
        size:120,
        cell:y,
        enableSorting:!1
      },{
        id:"link",
        header:"",
        size:50,
        cell:w,
        enableSorting:!1
      }],[v,g,x,b,y,w]);
      return p&&!h.length?(0,n.jsxs)(n.Fragment,{
        children:[(0,n.jsx)(oS,{
          children:"Batch processing usage"
        }),(0,n.jsx)(oz,{
          children:(0,n.jsx)(I.$j,{
            "data-size":"m"
          })
        })]
      }):(0,n.jsxs)(n.Fragment,{
        children:[(0,n.jsx)(oS,{
          children:"Batch processing usage"
        }),(0,n.jsx)(I.Fo,{
          children:(0,n.jsx)(I.S5,{
            columns:Z,
            data:h,
            resizeMode:"onChange",
            isLoading:p||u,
            sorting:e,
            setSorting:t,
            pagination:{
              ...i,
              totalPagination:m
            },
            setPagination:o,
            emptyText:{
              message:"No batch logs found."
            }
          })
        })]
      })
    };
    let oT=m.default.div.withConfig({
      componentId:"sc-dc766419-0"
    })(["padding:20px;border:1px solid #E8E8EB;border-radius:4px;display:flex;flex-direction:column;gap:22px;"]),
    oL=m.default.div.withConfig({
      componentId:"sc-dc766419-1"
    })(["display:flex;flex-direction:column;gap:8px;"]),
    oO=m.default.h4.withConfig({
      componentId:"sc-dc766419-2"
    })(["font-size:",";font-weight:700;color:",";margin:0;"],v.r.fontSize(1.6),v.r.colors.primaryMidnight.toString()),
    oU=m.default.p.withConfig({
      componentId:"sc-dc766419-3"
    })(["font-size:",";color:",";margin:0;line-height:18px;"],v.r.fontSize(1.3),v.r.colors.surface300.toString()),
    oV=m.default.div.withConfig({
      componentId:"sc-dc766419-4"
    })(["border:1px solid #E8E8EB;border-radius:6px;padding:20px;display:flex;flex-direction:column;gap:16px;"]),
    oB=m.default.div.withConfig({
      componentId:"sc-dc766419-5"
    })(["display:flex;flex-direction:column;gap:10px;"]),
    oK=m.default.div.withConfig({
      componentId:"sc-dc766419-6"
    })(["display:flex;align-items:flex-end;justify-content:space-between;"]),
    oW=m.default.div.withConfig({
      componentId:"sc-dc766419-7"
    })(["display:flex;align-items:flex-end;gap:4px;"]),
    oq=m.default.span.withConfig({
      componentId:"sc-dc766419-8"
    })(["font-size:",";font-weight:700;color:",";line-height:20px;"],v.r.fontSize(2.2),v.r.colors.primaryMidnight.toString()),
    oQ=m.default.span.withConfig({
      componentId:"sc-dc766419-9"
    })(["font-size:",";color:",";line-height:normal;"],v.r.fontSize(1.3),v.r.colors.surface300.toString()),
    oH=m.default.div.withConfig({
      componentId:"sc-dc766419-10"
    })(["background-color:",";color:",";font-size:",";font-weight:500;padding:4px 8px;border-radius:50px;"],v.r.colors.success05.toString(),v.r.colors.success600.toString(),v.r.fontSize(1.2)),
    oY=m.default.div.withConfig({
      componentId:"sc-dc766419-11"
    })(["display:flex;height:6px;width:100%;background-color:#E8E8EB;border-radius:23px;overflow:hidden;"]),
    oG=m.default.div.withConfig({
      componentId:"sc-dc766419-12"
    })(["background-color:#49C5FF;width:",";border-radius:",";transition:width 0.3s ease;cursor:",";"],e=>e.$hasValue&&0!==e.width?e.width<2?"2%":"".concat(e.width,"%"):"0%",e=>100===e.width?"23px":"23px 0 0 23px",e=>e.$hasValue?"pointer":"default"),
    o$=m.default.div.withConfig({
      componentId:"sc-dc766419-13"
    })(["background-color:#B97FE8;width:",";border-radius:",";transition:width 0.3s ease;cursor:",";"],e=>e.$hasValue&&0!==e.width?e.width<2?"2%":"".concat(e.width,"%"):"0%",e=>100===e.width?"23px":"0 23px 23px 0",e=>e.$hasValue?"pointer":"default"),
    oJ=m.default.div.withConfig({
      componentId:"sc-dc766419-14"
    })(["display:flex;gap:13px;align-items:center;"]),
    oX=m.default.div.withConfig({
      componentId:"sc-dc766419-15"
    })(["display:flex;gap:6px;align-items:center;"]),
    o0=m.default.div.withConfig({
      componentId:"sc-dc766419-16"
    })(["width:9.46px;height:9.869px;border-radius:50%;background-color:",";"],e=>e.color),
    o1=m.default.span.withConfig({
      componentId:"sc-dc766419-17"
    })(["font-size:",";color:#090F19;line-height:24px;"],v.r.fontSize(1.3)),
    o2=m.default.span.withConfig({
      componentId:"sc-dc766419-18"
    })(["font-weight:700;"]),
    o3=m.default.div.withConfig({
      componentId:"sc-dc766419-19"
    })(["display:flex;justify-content:center;align-items:center;padding:40px;position:relative;"]),
    o4=m.default.div.withConfig({
      componentId:"sc-dc766419-20"
    })(["display:flex;align-items:center;gap:8px;"]),
    o5=m.default.div.withConfig({
      componentId:"sc-dc766419-21"
    })(["width:10px;height:10px;border-radius:50%;background-color:",";"],e=>e.color);
    var o6=(0,a.memo)(()=>{
      let{
        currentOrgReducer:{
          orgId:e
        }
      }=(0,r.v9)(e=>e),
      t=(0,u.I)(),
      i=!!(null==t?void 0:t.planFeatureAiSessions),
      {
        data:o,
        isFetching:l
      }=(0,A.Yx)(e,i),
      s=(0,a.useMemo)(()=>{
        if(!o)return null;
        let e=e=>Math.ceil(e).toLocaleString(),
        t=o.monthly_tara_credit||0,
        i=o.consumed_tara_credit||0,
        n=Math.min(i,t),
        a=Math.max(t-i,0),
        l=o.consumed_tara_credit_by_video_analysis||0,
        r=o.consumed_tara_credit_by_chat||0,
        s=t>0&&i>t?l/i*t:l,
        c=t>0&&i>t?r/i*t:r,
        d=t>0?s/t*100:0,
        p=t>0?c/t*100:0;
        return{
          usedCredits:e(n),
          totalCredits:e(t),
          remainingCredits:Math.floor(a).toLocaleString(),
          sessionAnalysisPercent:d,
          chatPromptsPercent:p,
          hasSessionAnalysis:l>0,
          hasChatPrompts:r>0,
          sessionAnalysisCredits:e(l),
          chatPromptsCredits:e(r)
        }
      },[o]);
      return l||!s?(0,n.jsx)(oT,{
        children:(0,n.jsx)(o3,{
          children:(0,n.jsx)(I.$j,{
            "data-size":"m"
          })
        })
      }):(0,n.jsxs)(oT,{
        children:[(0,n.jsxs)(oL,{
          children:[(0,n.jsx)(oO,{
            children:"Credit usage overview"
          }),(0,n.jsx)(oU,{
            children:"Monitor how your organization uses Tara credits each month, broken down by Session Analysis and Chat prompts. All users and apps share the same credit pool."
          })]
        }),(0,n.jsxs)(oV,{
          children:[(0,n.jsxs)(oB,{
            children:[(0,n.jsxs)(oK,{
              children:[(0,n.jsxs)(oW,{
                children:[(0,n.jsx)(oq,{
                  children:s.usedCredits
                }),(0,n.jsxs)(oQ,{
                  children:["of ",s.totalCredits," credits used"]
                })]
              }),(0,n.jsxs)(oH,{
                children:[s.remainingCredits," credits left"]
              })]
            }),(0,n.jsxs)(oY,{
              children:[(0,n.jsx)(j.Z,{
                title:s.hasSessionAnalysis?(0,n.jsxs)(o4,{
                  children:[(0,n.jsx)(o5,{
                    color:"#49C5FF"
                  }),"Session Analysis: ",s.sessionAnalysisCredits," credits used"]
                }):"",
                placement:"top",
                children:(0,n.jsx)(oG,{
                  width:s.sessionAnalysisPercent,
                  $hasValue:s.hasSessionAnalysis
                })
              }),(0,n.jsx)(j.Z,{
                title:s.hasChatPrompts?(0,n.jsxs)(o4,{
                  children:[(0,n.jsx)(o5,{
                    color:"#B97FE8"
                  }),"Chat Prompts: ",s.chatPromptsCredits," credits used"]
                }):"",
                placement:"top",
                children:(0,n.jsx)(o$,{
                  width:s.chatPromptsPercent,
                  $hasValue:s.hasChatPrompts
                })
              })]
            })]
          }),(0,n.jsxs)(oJ,{
            children:[(0,n.jsxs)(oX,{
              children:[(0,n.jsx)(o0,{
                color:"#49C5FF"
              }),(0,n.jsxs)(o1,{
                children:["Session Analysis: ",(0,n.jsx)(o2,{
                  children:s.sessionAnalysisCredits
                })]
              })]
            }),(0,n.jsxs)(oX,{
              children:[(0,n.jsx)(o0,{
                color:"#B97FE8"
              }),(0,n.jsxs)(o1,{
                children:["Chat Prompts: ",(0,n.jsx)(o2,{
                  children:s.chatPromptsCredits
                })]
              })]
            })]
          })]
        }),(0,n.jsx)(oD,{}),(0,n.jsx)(ow,{})]
      })
    }),
    o7=i(89697);
    let o8=m.default.div.withConfig({
      componentId:"sc-f3af125-0"
    })(["padding:20px;border:1px solid #E8E8EB;border-radius:8px;",""],e=>{
      let{
        $isLoaded:t
      }=e;
      return t&&"\n    > div:last-of-type > div {\n      min-height: initial;\n    }\n  "
    }),
    o9=m.default.div.withConfig({
      componentId:"sc-f3af125-1"
    })(["margin-bottom:16px;"]),
    le=m.default.h4.withConfig({
      componentId:"sc-f3af125-2"
    })(["font-size:",";font-weight:500;color:",";margin-bottom:8px;display:flex;align-items:center;gap:4px;"],v.r.fontSize(1.6),v.r.colors.primaryMidnight.toString()),
    lt=m.default.p.withConfig({
      componentId:"sc-f3af125-3"
    })(["font-size:",";color:",";margin:0;line-height:1.5;"],v.r.fontSize(1.3),v.r.colors.surface300.toString()),
    li=m.default.div.withConfig({
      componentId:"sc-f3af125-4"
    })(["display:flex;align-items:center;gap:12px;"]),
    ln=m.default.span.withConfig({
      componentId:"sc-f3af125-5"
    })(["font-size:",";color:",";"],v.r.fontSize(1.4),v.r.colors.primaryMidnight.toString()),
    la=e=>{
      let{
        row:t
      }=e,
      i=t.original,
      [o,l]=(0,a.useState)(!1),
      r=i.appPicture&&!o;
      return(0,n.jsxs)(li,{
        children:[(0,n.jsx)(b.Z,{
          picture:r?i.appPicture:"",
          nameInfo:i.appName,
          size:32,
          shape:"square",
          className:""
        }),(0,n.jsx)(ln,{
          children:i.appName
        }),i.appPicture&&!o&&(0,n.jsx)("img",{
          src:i.appPicture,
          alt:"",
          style:{
            display:"none"
          },
          onError:()=>l(!0)
        })]
      })
    },
    lo=e=>{
      let{
        getValue:t,
        row:i,
        togglingAppId:a,
        onToggle:o,
        isAdmin:l
      }=e,
      r=t(),
      s=i.original,
      c=a===s.appId,
      d=c||!l,
      p=l?s.tooltip:"You don't have permission to change this setting. Ask an organization manager or owner to enable it.";
      return(0,n.jsx)(j.Z,{
        title:p,
        placement:"left",
        children:(0,n.jsx)(o7.Z,{
          checked:r,
          size:"small",
          loading:c,
          disabled:d,
          onChange:()=>o(s.appId,r),
          style:{
            backgroundColor:r?"#5D97FF":"#d9d9d9"
          }
        })
      })
    };
    var ll=()=>{
      let{
        currentOrgReducer:{
          orgId:e
        },
        currentAppReducer:{
          _id:t
        },
        applicationReducer:i
      }=(0,r.v9)(e=>e),
      o=(0,r.I0)(),
      l=(0,ei.useQueryClient)(),
      [s,c]=(0,a.useState)(null),
      d=(0,a.useMemo)(()=>{
        var t;
        return(null==i?void 0:null===(t=i.find(t=>t.orgId===e))||void 0===t?void 0:t.roleText)==="Manager"
      },[i,e]),
      p=(0,u.I)(),
      h=!!(null==p?void 0:p.planFeatureAiSessions),
      {
        data:f,
        isFetching:m
      }=(0,A.C0)(e,h),
      {
        data:v
      }=(0,A.Yx)(e,h),
      g=(0,ei.useMutation)(A.g5,{
        onMutate:e=>{
          c(e.appId)
        },
        onSuccess:async i=>{
          l.invalidateQueries("ai_overview_".concat(e));
          let n=await o((0,n3.Zn)());
          o((0,n3.FL)(t,n)),
          _.ZP.success((null==i?void 0:i.message)||"AI settings updated successfully"),
          c(null)
        },
        onError:()=>{
          c(null)
        }
      }),
      x=(0,a.useCallback)((t,i)=>{
        o((0,S.dk)({
          taraSetting:i?"off":"on",
          isAdmin:d,
          currentAutoanalysisLimit:(null==v?void 0:v.monthly_auto_analysis_tara_credit)||0,
          currentCreditsLimit:(null==v?void 0:v.monthly_tara_credit)||0
        })),
        g.mutate({
          orgId:e,
          appId:t,
          isAIEnabled:!i
        })
      },[g,e,d,v]),
      b=(0,a.useMemo)(()=>(null==f?void 0:f.apps)?f.apps.map(e=>{
        let t=null==i?void 0:i.find(t=>t._id===e._id);
        return{
          key:e._id,
          appId:e._id,
          app:e.name,
          appName:e.name,
          appPicture:(null==t?void 0:t.appImageSrc)||"",
          autoAnalysis:e.isAIEnabled,
          tooltip:e.isAIEnabled?"Disabling Tara for this app will stop automatic session analysis.":"Enabling Tara for this app will start automatic session analysis."
        }
      }):[],[f,i]),
      y=(0,a.useCallback)(e=>(0,n.jsx)(la,{
        row:e.row
      }),[]),
      j=(0,a.useCallback)(e=>(0,n.jsx)(lo,{
        getValue:e.getValue,
        row:e.row,
        togglingAppId:s,
        onToggle:x,
        isAdmin:d
      }),[s,x,d]),
      w=(0,a.useMemo)(()=>[{
        accessorKey:"app",
        header:"Apps",
        size:400,
        cell:y
      },{
        accessorKey:"autoAnalysis",
        header:"Tara AI",
        size:200,
        cell:j
      }],[y,j]);
      return(0,n.jsxs)(o8,{
        $isLoaded:!m,
        children:[(0,n.jsxs)(o9,{
          children:[(0,n.jsx)(le,{
            children:"Apps using Tara"
          }),(0,n.jsx)(lt,{
            children:"When enabled, Tara automatically watches a sample of random sessions daily (at no credit cost) to ensure unbiased insights are ready when you ask questions."
          })]
        }),(0,n.jsx)(I.Fo,{
          children:(0,n.jsx)(I.S5,{
            columns:w,
            data:b,
            resizeMode:"onChange",
            isLoading:m
          })
        })]
      })
    };
    let lr=m.default.div.withConfig({
      componentId:"sc-e5e7f9f2-0"
    })(["display:flex;flex-direction:column;gap:16px;margin-bottom:",";"],e=>{
      let{
        $bottomBarClassFlag:t
      }=e;
      return t?"60px":"0"
    });
    var ls=()=>{
      let{
        bottomBarClassFlag:e
      }=(0,r.v9)(e=>e.commonReducer),
      {
        currentOrgReducer:{
          orgId:t
        }
      }=(0,r.v9)(e=>e);
      return(0,A.IW)(t),
      (0,n.jsxs)(lr,{
        $bottomBarClassFlag:e,
        children:[(0,n.jsx)(or,{}),(0,n.jsx)(ll,{}),(0,n.jsx)(o6,{})]
      })
    };
    let lc=h.default.Item,
    {
      TabPane:ld
    }=f.default,
    lp=["subscription.view"],
    lu=m.default.div.withConfig({
      componentId:"sc-dd5e1483-0"
    })(["background:#ffffff;padding:16px;min-height:calc(100% - 40px);.ant-tabs-extra-content{flex-basis:50%;}.ant-tabs-nav{.ant-tabs-tab{margin-top:12px !important;margin-bottom:12px !important;margin-right:40px !important;padding-left:3px;padding-right:0;color:#161e35;}.ant-tabs-tab-btn{font-weight:400;font-size:14px;line-height:16px;}}"]),
    lh=m.default.div.withConfig({
      componentId:"sc-dd5e1483-1"
    })(["display:flex;justify-content:space-between;"]),
    lf=(0,m.default)(lc).withConfig({
      componentId:"sc-dd5e1483-2"
    })(["color:#4f4f4f;font-weight:500;font-size:16px;display:inline-flex;line-height:20px;white-space:pre-wrap;.ant-avatar{margin-right:4px;}"]),
    lm=(0,m.default)(lc).withConfig({
      componentId:"sc-dd5e1483-3"
    })(["color:#333333;font-weight:300;font-size:16px;line-height:20px;"]),
    lv={
      plan:"Manage subscription",
      team:"Manage team",
      apps:"Manage apps",
      "single-sign-on":"Manage single sign on",
      profile:"Organization profile",
      "ai-filter":"UXCam AI",
      "tara-ai":"Tara AI"
    },
    lg=m.default.div.withConfig({
      componentId:"sc-dd5e1483-4"
    })(["height:18px;padding:0 6px;display:flex;align-items:center;justify-content:center;border-radius:4px;background:#FFDC62;color:",";font-size:12px;"],v.r.colors.surface500.toString()),
    lx=m.default.span.withConfig({
      componentId:"sc-dd5e1483-5"
    })(["display:flex;align-items:center;justify-content:center;gap:4px;"]);
    var lb=()=>{
      let e=(0,r.I0)(),
      [t,i]=(0,a.useState)(),
      {
        setSearchAppName:s,
        setSearchValue:c
      }=nx(),
      d=(0,I.ye)("ai-filter"),
      p=(0,u.I)(),
      m=!!(null==p?void 0:p.planFeatureAiSessions),
      v=(0,o.useRouter)(),
      {
        currentOrgReducer:{
          orgId:y,
          organizationName:j,
          organizationIcon:w,
          planFeature:Z
        },
        ssoInfo:{
          ssoEnabled:z
        },
        currentAppReducer:{
          isIntegrated:_,
          _id:F
        }
      }=(0,r.v9)(e=>e),
      {
        data:P
      }=(0,A.Yx)(y,m),
      E=(0,n.jsx)("img",{
        src:"/static/settings-new-icon/breadcrumb.svg",
        alt:""
      }),
      M=null==v?void 0:v.query,
      {
        data:R
      }=(0,A.Y$)("profileInfo"),
      {
        data:N,
        isLoading:D
      }=(0,A.R7)("roles_permission"),
      T=(0,a.useMemo)(()=>!_,[_]),
      L=(0,a.useMemo)(()=>null==Z?void 0:Z.tara,[null==Z?void 0:Z.tara]),
      O=(0,a.useMemo)(()=>(0,n.jsxs)(lx,{
        children:["UXCam AI",(0,n.jsx)(lg,{
          children:"Beta"
        })]
      }),[]),
      U=(0,a.useCallback)(e=>R&&(0,W.OQ)(e,N,null==R?void 0:R.organization,y),[R,N,y]);
      return(0,a.useEffect)(()=>{
        i(null==M?void 0:M.org_tab)
      },[M]),
      (0,a.useEffect)(()=>{
        if(t&&R){
          var i,
          n;
          let a={
            plan:"subscription",
            team:"team",
            "tara-ai":"tara-ai",
            apps:"apps",
            "single-sign-on":"sso",
            profile:"profile"
          }[t];
          if(!a)return;
          let o=null==R?void 0:null===(n=R.organization)||void 0===n?void 0:null===(i=n.find(e=>e.orgId===y))||void 0===i?void 0:i.organizationRole,
          l=(null==P?void 0:P.monthly_auto_analysis_tara_credit)>0,
          r=(null==P?void 0:P.monthly_tara_credit)>0;
          e((0,S.Ql)({
            feature:a,
            isAdmin:"owner"===o||"manager"===o,
            autoAnalysisStatus:l,
            customAnalysisStatus:r
          }))
        }
      },[t,R,y,P,e]),
      (0,a.useEffect)(()=>{
        let t=new URL(window.location.href);
        if(t.searchParams.has("referer")){
          e((0,k.CW)(null,{
            eventName:"wa_invite_everyone_button_clicked",
            track_type:"event"
          })),
          t.searchParams.delete("referer");
          let i=t.toString();
          window.history.replaceState({},"",i)
        }
      },[]),
      (0,n.jsx)(nb,{
        children:(0,n.jsxs)(lu,{
          children:[(0,n.jsxs)(lh,{
            children:[(0,n.jsxs)(h.default,{
              separator:E,
              children:[(0,n.jsxs)(lf,{
                children:[(0,n.jsx)(b.Z,{
                  picture:w,
                  nameInfo:j,
                  size:16,
                  shape:"square"
                }),j]
              }),(0,n.jsx)(lm,{
                href:"#",
                children:"".concat(lv[t])
              })]
            }),T&&F&&(0,n.jsx)(C,{})]
          }),(0,n.jsxs)(f.default,{
            activeKey:t,
            onChange:n=>{
              i(n),
              e((0,g.kM)(n)),
              c(),
              s();
              let a="org=".concat(y,"&parentType=settings&setting=org_setting&org_tab=").concat(n||t),
              o="/settings/org/".concat(y,"/").concat(n||t);
              l().push("/integration?".concat(a),"".concat(o))
            },
            tabBarExtraContent:"team"===t?(0,n.jsx)(nV,{}):"apps"===t&&(0,n.jsx)(aF,{}),
            children:[U(lp)&&(0,n.jsx)(ld,{
              tab:"Subscription",
              children:(0,n.jsx)(i4,{})
            },"plan"),L&&(0,n.jsx)(ld,{
              tab:"Tara AI",
              children:(0,n.jsx)(ls,{})
            },"tara-ai"),(0,n.jsx)(ld,{
              tab:"Team",
              children:(0,n.jsx)(n1,{})
            },"team"),(0,n.jsx)(ld,{
              tab:"Apps",
              children:(0,n.jsx)(aI,{})
            },"apps"),U(["organization.update"])&&(0,n.jsx)(ld,{
              tab:"Single Sign On",
              children:z?(0,n.jsx)(aH,{}):(0,n.jsx)(aW,{
                message:x.cr,
                feature:!0
              })
            },"single-sign-on"),U(["organization.update","organization.view"])&&(0,n.jsx)(ld,{
              tab:"Profile",
              children:(0,n.jsx)(et,{})
            },"profile"),R&&!U(lp)&&!D&&(0,n.jsx)(ld,{
              children:(0,n.jsx)(aW,{
                message:"The Subscription page is only available to the organization owner and organization managers."
              })
            },"plan"),R&&!U(["organization.view"])&&!D&&(0,n.jsx)(ld,{
              children:(0,n.jsx)(aW,{
                message:"The organization profile page is only available to the organization owner and organization managers."
              })
            },"profile"),U(["organization.update"])&&d?(0,n.jsx)(ld,{
              tab:O,
              children:(0,n.jsx)(aJ,{})
            },"ai-filter"):null]
          })]
        })
      })
    },
    ly=i(28626),
    lj=i(9872),
    lw=i(67401),
    lZ=i(32471),
    lC=i(55931),
    lk=i(55915),
    lI=i(8890),
    lS=i.n(lI),
    lz=i(38627),
    l_=i(96182);
    let lF=lz.BB?"https://api.uxcam.com/v2":"https://pythonapi-prod.uxcam.com/v2";
    (0,m.default)(z.Z).withConfig({
      componentId:"sc-e7151c9a-0"
    })(["background:rgba(93,151,255,0.08);font-size:12px;border-radius:4px;width:100%;border:none;min-height:40px;height:auto;margin-bottom:18px;a{text-decoration:none;color:#5D97FF;}.btn-wrapper .ant-btn{height:40px;align-items:center;}"]);
    class lP extends a.Component{
      copy(e){
        e.stopPropagation(),
        e.preventDefault(),
        _.ZP.success("copied")
      }
      componentDidMount(){
        var e;
        this.props.appKey?this.setState({
          appKey:this.props.appKey,
          originalAppKey:this.props.appKey,
          editKeyOption:!1
        }):this.setState({
          appKey:this.props.appKey,
          originalAppKey:this.props.appKey,
          editKeyOption:!0
        }),
        this.setState({
          viewOnly:null===(e=this.props)||void 0===e?void 0:e.appConfigViewOnly
        })
      }
      async UNSAFE_componentWillReceiveProps(e){
        var t;
        e.appKey?this.setState({
          appKey:null==e?void 0:e.appKey,
          originalAppKey:null==e?void 0:e.appKey,
          editKeyOption:!1
        }):this.setState({
          appKey:null==e?void 0:e.appKey,
          originalAppKey:null==e?void 0:e.appKey,
          editKeyOption:!0
        }),
        (null===(t=this.props)||void 0===t?void 0:t.appConfigViewOnly)!==(null==e?void 0:e.appConfigViewOnly)&&this.setState({
          viewOnly:null==e?void 0:e.appConfigViewOnly
        })
      }
      render(){
        var e;
        let{
          planFeature:t
        }=(null===(e=this.props)||void 0===e?void 0:e.currentOrg)||{},
        {
          viewOnly:i
        }=this.state;
        return(0,n.jsxs)("div",{
          className:"api-wrapper",
          children:[(0,n.jsx)(aA.Z,{
            children:(0,n.jsxs)(aD.Z,{
              sm:24,
              children:[(null==t?void 0:t.api)===0&&(0,n.jsx)(z.Z,{
                style:{
                  marginBottom:10
                },
                message:x.cr,
                type:"error",
                showIcon:!0
              }),(0,n.jsx)(l_.Z,{
                type:"info",
                marginBottom:18,
                content:(0,n.jsxs)(n.Fragment,{
                  children:["Access your data directly on our servers with the Data access API. Learn more about using our public API"," ",(0,n.jsx)("a",{
                    href:"https://developer.uxcam.com/docs/data-access-api",
                    style:{
                      textDecoration:"underline"
                    },
                    target:"_blank",
                    rel:"noreferrer",
                    children:"here"
                  }),"."]
                })
              }),(0,n.jsxs)("div",{
                className:(null==t?void 0:t.api)===0?"disable-overlay":"",
                children:[(0,n.jsxs)("div",{
                  className:"api-form",
                  children:[(0,n.jsxs)("div",{
                    className:"form-item form-label",
                    children:["App ID"," ",(0,n.jsx)(j.Z,{
                      title:"Unique identifier of your app to be provided as an argument in the API call.",
                      children:(0,n.jsx)(aM.Z,{})
                    })]
                  }),(0,n.jsx)("div",{
                    className:"form-item",
                    children:(0,n.jsx)("p",{
                      children:this.props.urlQuery.app||""
                    })
                  }),(0,n.jsx)("div",{
                    className:"form-item",
                    children:(0,n.jsx)(n2.CopyToClipboard,{
                      text:this.props.urlQuery.app,
                      onCopy:()=>{},
                      children:(0,n.jsx)(j.Z,{
                        placement:"topLeft",
                        title:"Copy App ID",
                        arrowPointAtCenter:!0,
                        children:(0,n.jsx)(y.Z,{
                          onClick:e=>this.copy(e),
                          size:"small",
                          style:{
                            border:0
                          },
                          children:(0,n.jsx)(aR.Z,{
                            style:{
                              marginLeft:-4
                            }
                          })
                        })
                      })
                    })
                  })]
                }),(0,n.jsxs)("div",{
                  className:"api-form",
                  children:[(0,n.jsxs)("div",{
                    className:"form-item form-label",
                    children:["API Key"," ",(0,n.jsx)(j.Z,{
                      title:"A code of your choice that serves as a password for accessing your app data and has to be provided in the API call.Please note that the API key and App key allow accessing your data on UXCam’s servers,even without access to the dashboard.",
                      children:(0,n.jsx)(aM.Z,{})
                    })]
                  }),(0,n.jsx)("div",{
                    className:"form-item",
                    children:(0,n.jsx)(F.default,{
                      ref:this.publicApiRef,
                      placeholder:"Enter API key",
                      defaultValue:this.props.appKey||"",
                      value:this.state.appKey||"",
                      disabled:!this.state.editKeyOption||(null==t?void 0:t.api)===0||i,
                      onChange:this.onApiKeyChange
                    })
                  }),(0,n.jsxs)("div",{
                    className:"form-item",
                    children:[!this.state.editKeyOption&&(0,n.jsx)(y.Z,{
                      onClick:()=>this.editKey(!0),
                      icon:(0,n.jsx)(lk.Z,{}),
                      style:{
                        border:"0"
                      },
                      disabled:(null==t?void 0:t.api)===0||i
                    }),!this.state.editKeyOption&&(0,n.jsx)(n2.CopyToClipboard,{
                      text:this.state.originalAppKey,
                      onCopy:()=>{},
                      children:(0,n.jsx)(j.Z,{
                        placement:"topLeft",
                        title:"Copy API key",
                        arrowPointAtCenter:!0,
                        children:(0,n.jsx)(y.Z,{
                          onClick:e=>this.copy(e),
                          size:"small",
                          style:{
                            border:0
                          },
                          children:(0,n.jsx)(aR.Z,{
                            style:{
                              marginLeft:-4
                            }
                          })
                        })
                      })
                    }),this.state.editKeyOption&&!i&&(0,n.jsx)(y.Z,{
                      onClick:this.savePublicApiKey,
                      disabled:!this.state.appKey||this.state.appKey===this.state.originalAppKey||i,
                      type:"primary",
                      children:"Save"
                    }),this.state.editKeyOption&&this.state.appKey&&(0,n.jsx)(y.Z,{
                      onClick:this.cancelPublicApiKey,
                      children:"Cancel"
                    })]
                  })]
                }),(0,n.jsx)("div",{
                  className:"api-footer",
                  children:this.state.editKeyOption&&!i&&(0,n.jsx)(y.Z,{
                    onClick:this.generateUUID,
                    icon:(0,n.jsx)(iR.Z,{}),
                    disabled:(null==t?void 0:t.api)===0,
                    children:"Generate API Key"
                  })
                }),this.state.appKey&&(0,n.jsxs)("div",{
                  className:"api-form",
                  children:[(0,n.jsxs)("div",{
                    className:"form-item form-label",
                    children:["Public session API"," "]
                  }),(0,n.jsx)("div",{
                    className:"form-item session-api",
                    children:(0,n.jsx)("a",{
                      href:"".concat(lF,"/session?appid=").concat(this.props.urlQuery.app,"&apikey=").concat(this.state.appKey,"&page=1"),
                      target:"_blank",
                      children:"".concat(lF,"/session?appid=").concat(this.props.urlQuery.app,"&apikey=").concat(this.state.appKey,"&page=1")
                    })
                  })]
                }),this.state.appKey&&(0,n.jsxs)("div",{
                  className:"api-form",
                  children:[(0,n.jsxs)("div",{
                    className:"form-item form-label",
                    children:["Public user API"," "]
                  }),(0,n.jsx)("div",{
                    className:"form-item session-api",
                    children:(0,n.jsx)("a",{
                      href:"".concat(lF,"/user?appid=").concat(this.props.urlQuery.app,"&apikey=").concat(this.state.appKey,"&page=1"),
                      target:"_blank",
                      children:"".concat(lF,"/user?appid=").concat(this.props.urlQuery.app,"&apikey=").concat(this.state.appKey,"&page=1")
                    })
                  })]
                })]
              })]
            })
          }),(0,n.jsx)("style",{
            children:"\n          .api-wrapper{\n            min-height: 200px;\n          }\n          .disable-overlay{\n            margin-top: 16px;\n            opacity: 0.4;\n          }\n\n          .api-form{\n            display: flex;\n          }\n          .api-form .form-item{\n            margin-right: 10px;\n            margin-bottom: 10px;\n            line-height: 33px;\n          }\n          .api-form .form-item .ant-btn{\n            margin-right: 10px;\n            height: 28px;\n            text-transform: none;\n          }\n          .api-form .form-item .ant-input{\n            min-width: 300px;\n            border-color: #dddddd;\n          }\n          .api-footer{\n            margin-left: 110px;\n          }\n          .api-footer .ant-btn{\n            border: 1px solid #161E35;\n          }\n          .api-footer .ant-btn:hover{\n            border-color: #5D97FF;\n          }\n          .api-form .form-item.form-label{\n            width: 100px;\n          }\n          .api-wrapper hr{\n            border-color: #cad1e8;\n            border-top: 0;\n            margin-bottom: 20px;\n            margin-top: 30px;\n           }\n          "
          })]
        })
      }
      constructor(e){
        super(e),
        this.onApiKeyChange=e=>{
          this.setState({
            appKey:e.target.value,
            editKeyOption:!0
          })
        },
        this.editKey=e=>{
          let t=this;
          this.setState({
            editKeyOption:e
          },()=>{
            setTimeout(()=>{
              t.input.focus().val(input.val())
            },100)
          })
        },
        this.savePublicApiKey=()=>{
          if(lS()(this.state.appKey)){
            if(this.state.appKey===this.state.originalAppKey){
              _.ZP.info("Public API key is same");
              return
            }
            let e={
              apiKey:this.state.appKey,
              _csrf:this.props.app_csrf
            };
            s.Z.savePublicApiKey(e,this.props.appId).then(e=>{
              this.setState({
                originalAppKey:this.state.appKey,
                editKeyOption:!1
              }),
              _.ZP.success(e.data.data.message)
            }).catch(e=>{
              e.response.data.error.message?_.ZP.error(e.response.data.error.message):e.response.data.error.apiKey.length&&_.ZP.error(e.response.data.error.apiKey[0])
            })
          }
          else _.ZP.error("Please enter valid API key")
        },
        this.cancelPublicApiKey=()=>{
          this.setState({
            originalAppKey:this.state.originalAppKey,
            appKey:this.state.originalAppKey
          }),
          this.state.originalAppKey&&this.setState({
            editKeyOption:!1
          })
        },
        this.generateUUID=()=>{
          let e=new Date().getTime();
          this.props.trackPageViews(null,{
            eventName:"wa_appsettings_generate_api_key",
            track_type:"event"
          }),
          window.performance&&"function"==typeof window.performance.now&&(e+=window.performance.now());
          let t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){
            let i=(e+16*Math.random())%16|0;
            return e=Math.floor(e/16),
            ("x"===t?i:3&i|8).toString(16)
          });
          this.setState({
            appKey:t,
            generatedApiKey:!0
          },()=>{})
        },
        this.publicApiRef=e=>this.input=e,
        this.state={
          editKeyOption:!1,
          originalAppKey:null,
          appKey:null,
          viewOnly:!1
        }
      }
    }
    var lE=(0,r.$j)(function(e){
      return{
        currentOrg:e.currentOrgReducer,
        urlQuery:e.urlReducer
      }
    },e=>({
      trackPageViews:(t,i)=>e((0,k.CW)(t,i))
    }))(lP);
    let lM=m.default.div.withConfig({
      componentId:"sc-bd8532ed-0"
    })(["min-width:600px;max-width:55vw;.api-form .form-item .ant-input{border-radius:4px;height:40px;}.api-form .form-item.form-label{width:125px;}.api-form .form-item.session-api{padding:10px 12px;width:fit-content;min-height:40px;height:auto;background:#f5f5f5;border-radius:4px;a{width:915px;height:20px;font-weight:400;font-size:14px;color:#5d97ff;}}.api-form .form-item .ant-btn{border-radius:4px;height:40px;align-items:center;}.api-footer .ant-btn.ant-btn-default{margin-top:12px;margin-left:25px;background:#5d97ff;border-radius:4px;width:164px;height:40px;border:none;color:#ffffff;margin-bottom:24px;}"]);
    var lR=e=>{
      let{
        appKey:t,
        appId:i,
        appConfigViewOnly:a
      }=e;
      return(0,n.jsxs)(lM,{
        children:[(0,n.jsx)(lE,{
          appKey:t,
          appId:i,
          appConfigViewOnly:a,
          displayUserMgmt:!0
        })," "]
      })
    },
    lN=i(50059),
    lA=i(45640),
    lD=i(92585),
    lT=i(95156);
    let lL="".concat(lz.BB?"https://api.uxcam.com/v2":"".concat("https://pythonapi-prod.uxcam.com","/v2"),"/deletion"),
    lO=[{
      value:"users",
      label:"Delete users"
    },{
      value:"sessions",
      label:"Delete sessions"
    },{
      value:"status",
      label:"Check status"
    }],
    lU=[{
      value:"curl",
      label:"curl"
    },{
      value:"javascript",
      label:"JavaScript"
    },{
      value:"python",
      label:"Python"
    }],
    lV=(e,t,i)=>"".concat("status"===e?"".concat(t,"/status"):t,"?appid=").concat(i),
    lB={
      users:{
        subjectType:"user",
        selector:{
          kind:"identifiers",
          identifiers:[{
            uxcamUserId:["<uxcamUserId>"]
          },{
            userId:["<yourUserId>"]
          }]
        },
        reason:"GDPR erasure request"
      },
      sessions:{
        subjectType:"session",
        selector:{
          kind:"identifiers",
          identifiers:[{
            sessionId:["<sessionId>","<sessionId2>"]
          }]
        }
      },
      status:{
        requestId:"<requestId>"
      }
    },
    lK=e=>{
      let{
        operation:t,
        language:i,
        baseUrl:n,
        appId:a,
        token:o
      }=e,
      l=lV(t,n,a),
      r=lB[t],
      s=JSON.stringify(r,null,2);
      return"curl"===i?["curl -X POST '".concat(l,"' \\"),"  -H 'Authorization: Bearer ".concat(o,"' \\"),"  -H 'Content-Type: application/json' \\","  -d '".concat(JSON.stringify(r),"'")].join("\n"):"javascript"===i?["const res = await fetch('".concat(l,"', {"),"  method: 'POST',","  headers: {","    Authorization: 'Bearer ".concat(o,"',"),"    'Content-Type': 'application/json',","  },","  body: JSON.stringify(".concat(s.replace(/\n/g,"\n  "),"),"),"});","const data = await res.json();"].join("\n"):["import requests","","res = requests.post(",'    "'.concat(l,'",'),"    headers={",'        "Authorization": "Bearer '.concat(o,'",'),'        "Content-Type": "application/json",',"    },","    json=".concat(s.replace(/\n/g,"\n    ").replace(/true/g,"True"),","),"    timeout=30,",")","res.raise_for_status()","data = res.json()"].join("\n")
    };
    var lW=e=>{
      let{
        appId:t
      }=e,
      [i,o]=(0,a.useState)(!0),
      [l,r]=(0,a.useState)(!1),
      [c,d]=(0,a.useState)(null),
      [p,u]=(0,a.useState)(!1),
      [h,f]=(0,a.useState)(!1),
      [m,v]=(0,a.useState)("users"),
      [g,x]=(0,a.useState)("curl"),
      b=(0,a.useCallback)(async()=>{
        var e,
        i,
        n,
        a,
        l,
        r;
        if(t){
          o(!0);
          try{
            let i=await s.Z.getDeletionApiKey(t);
            d((null==i?void 0:null===(e=i.data)||void 0===e?void 0:e.data)||null),
            f(!1)
          }
          catch(e){
            (null==e?void 0:null===(i=e.response)||void 0===i?void 0:i.status)===403?f(!0):(null==e?void 0:null===(n=e.response)||void 0===n?void 0:n.status)!==404&&_.ZP.error((null==e?void 0:null===(r=e.response)||void 0===r?void 0:null===(l=r.data)||void 0===l?void 0:null===(a=l.error)||void 0===a?void 0:a.message)||"Could not load the Deletion Key.")
          }
          finally{
            o(!1)
          }
        }
      },[t]);
      (0,a.useEffect)(()=>{
        b()
      },[b]);
      let w=(e,t)=>{
        var i,
        n,
        a;
        return _.ZP.error((null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(n=a.data)||void 0===n?void 0:null===(i=n.error)||void 0===i?void 0:i.message)||t)
      },
      Z=async e=>{
        r(!0);
        try{
          var i;
          let n=await s.Z.saveDeletionApiKey(t,e);
          d((null==n?void 0:null===(i=n.data)||void 0===i?void 0:i.data)||null),
          u(!0),
          _.ZP.success(e?"Deletion Key regenerated — the previous key no longer works, copy the new one now":"Deletion Key generated")
        }
        catch(e){
          w(e,"Could not generate the Deletion Key.")
        }
        finally{
          r(!1)
        }
      },
      C=e=>{
        e.stopPropagation(),
        e.preventDefault(),
        _.ZP.success("copied")
      };
      if(h)return(0,n.jsx)("div",{
        className:"api-wrapper",
        children:(0,n.jsx)(l_.Z,{
          type:"info",
          marginBottom:18,
          content:(0,n.jsx)(n.Fragment,{
            children:"The Deletion Key authorises permanent erasure of user data, so only organisation owners and admins can view or manage it."
          })
        })
      });
      let k=null==c?void 0:c.deletionKey,
      I=!!(null==c?void 0:c.deletionEnabled)&&!!k,
      S=k&&k.length>4?"".concat("•".repeat(20)).concat(k.slice(-4)):"•".repeat(24),
      P=p?k:S,
      E=p&&k?k:"<deletionApiKey>",
      M=lV(m,lL,t),
      R=lK({
        operation:m,
        language:g,
        baseUrl:lL,
        appId:t,
        token:E
      });
      return(0,n.jsxs)("div",{
        className:"api-wrapper",
        children:[(0,n.jsx)(z.Z,{
          type:"warning",
          showIcon:!0,
          className:"deletion-warning",
          message:"Deletions are permanent and cannot be undone.",
          description:(0,n.jsxs)(n.Fragment,{
            children:["Users and their sessions disappear from every dashboard, export and API immediately, and are erased from storage within 7 days. Requests are authenticated with the Deletion Key below — anyone holding it can erase this app's data without dashboard access."," ",(0,n.jsx)("a",{
              href:"https://developer.uxcam.com/docs/deletion-api",
              style:{
                textDecoration:"underline"
              },
              target:"_blank",
              rel:"noreferrer",
              children:"Read the deletion API docs"
            }),"."]
          })
        }),(0,n.jsxs)("div",{
          className:"api-form",
          children:[(0,n.jsxs)("div",{
            className:"form-item form-label",
            children:["App ID"," ",(0,n.jsx)(j.Z,{
              title:"Unique identifier of your app to be provided as an argument in the API call.",
              children:(0,n.jsx)(aM.Z,{})
            })]
          }),(0,n.jsx)("div",{
            className:"form-item",
            children:(0,n.jsx)("p",{
              children:t||""
            })
          }),(0,n.jsx)("div",{
            className:"form-item",
            children:(0,n.jsx)(n2.CopyToClipboard,{
              text:t,
              children:(0,n.jsx)(j.Z,{
                placement:"topLeft",
                title:"Copy App ID",
                arrowPointAtCenter:!0,
                children:(0,n.jsx)(y.Z,{
                  onClick:C,
                  size:"small",
                  style:{
                    border:0
                  },
                  children:(0,n.jsx)(aR.Z,{
                    style:{
                      marginLeft:-4
                    }
                  })
                })
              })
            })
          })]
        }),k&&(0,n.jsxs)("div",{
          className:"api-form",
          children:[(0,n.jsxs)("div",{
            className:"form-item form-label",
            children:["Deletion Key"," ",(0,n.jsx)(j.Z,{
              title:"A key used only by the Data deletion API, sent as an Authorization Bearer token. It is generated for you and cannot be chosen. Please note that anyone holding this key can permanently erase your users' data, even without access to the dashboard.",
              children:(0,n.jsx)(aM.Z,{})
            })]
          }),(0,n.jsx)("div",{
            className:"form-item",
            children:(0,n.jsx)(F.default,{
              readOnly:!0,
              value:P
            })
          }),(0,n.jsxs)("div",{
            className:"form-item",
            children:[(0,n.jsx)(j.Z,{
              placement:"topLeft",
              title:p?"Hide Deletion Key":"Reveal Deletion Key",
              arrowPointAtCenter:!0,
              children:(0,n.jsx)(y.Z,{
                onClick:()=>u(!p),
                size:"small",
                style:{
                  border:0
                },
                icon:p?(0,n.jsx)(lA.Z,{}):(0,n.jsx)(lD.Z,{})
              })
            }),(0,n.jsx)(n2.CopyToClipboard,{
              text:k,
              children:(0,n.jsx)(j.Z,{
                placement:"topLeft",
                title:"Copy Deletion Key",
                arrowPointAtCenter:!0,
                children:(0,n.jsx)(y.Z,{
                  onClick:C,
                  size:"small",
                  style:{
                    border:0
                  },
                  children:(0,n.jsx)(aR.Z,{
                    style:{
                      marginLeft:-4
                    }
                  })
                })
              })
            })]
          })]
        }),(0,n.jsxs)("div",{
          className:"api-form",
          children:[(0,n.jsx)("div",{
            className:"form-item form-label",
            children:"Status"
          }),(0,n.jsx)("div",{
            className:"form-item",
            children:i?(0,n.jsx)("p",{
              style:{
                margin:0,
                color:"#8c8c8c"
              },
              children:"Loading…"
            }):(0,n.jsxs)("p",{
              style:{
                margin:0
              },
              children:[(0,n.jsx)(tj.Z,{
                color:I?"green":"default",
                children:I?"Active":"Not set up"
              }),(0,n.jsx)("span",{
                style:{
                  color:"#8c8c8c"
                },
                children:I?"the Deletion API will accept requests for this app":"generate a Deletion Key to start accepting deletion requests. Until then, every request is refused."
              })]
            })
          })]
        }),(null==c?void 0:c.enrolledBy)&&(0,n.jsxs)("div",{
          className:"api-form",
          children:[(0,n.jsx)("div",{
            className:"form-item form-label",
            children:"Last changed"
          }),(0,n.jsx)("div",{
            className:"form-item",
            children:(0,n.jsxs)("p",{
              style:{
                margin:0
              },
              children:[c.enrolledAt?"".concat(new Date(c.enrolledAt).toLocaleString()," \xb7 "):"",c.enrolledBy]
            })
          })]
        }),(0,n.jsxs)("div",{
          className:"api-footer",
          children:[(0,n.jsx)(y.Z,{
            onClick:k?()=>{
              es.default.confirm({
                title:"Regenerating will break your current integration",
                icon:(0,n.jsx)(lN.Z,{
                  style:{
                    color:"#faad14"
                  }
                }),
                okText:"Yes, regenerate the key",
                cancelText:"Keep the current key",
                okButtonProps:{
                  danger:!0
                },
                width:520,
                content:(0,n.jsxs)(n.Fragment,{
                  children:[(0,n.jsxs)("p",{
                    style:{
                      marginBottom:8
                    },
                    children:["The current Deletion Key stops working ",(0,n.jsx)("strong",{
                      children:"immediately"
                    }),". Any service still using it starts receiving"," ",(0,n.jsx)("code",{
                      children:"401 Unauthorized"
                    })," until you give it the new key."]
                  }),(0,n.jsx)("p",{
                    style:{
                      marginBottom:0
                    },
                    children:"There is no grace period and the old key cannot be recovered. Only do this if you are ready to update every caller, or if you believe the current key has been exposed."
                  })]
                }),
                onOk:()=>Z(!0)
              })
            }:()=>Z(!1),
            icon:(0,n.jsx)(iR.Z,{}),
            loading:l,
            disabled:i,
            children:k?"Regenerate Deletion Key":"Generate Deletion Key"
          }),k&&(0,n.jsx)(y.Z,{
            onClick:()=>{
              es.default.confirm({
                title:"Revoking will switch the Deletion API off for this app",
                icon:(0,n.jsx)(lN.Z,{
                  style:{
                    color:"#ff4d4f"
                  }
                }),
                okText:"Yes, revoke the key",
                cancelText:"Keep the current key",
                okButtonProps:{
                  danger:!0
                },
                width:520,
                content:(0,n.jsxs)(n.Fragment,{
                  children:[(0,n.jsx)("p",{
                    style:{
                      marginBottom:8
                    },
                    children:"The key is destroyed and cannot be recovered, and deletion is switched off for this app. Every deletion request is refused until a new key is generated."
                  }),(0,n.jsx)("p",{
                    style:{
                      marginBottom:0
                    },
                    children:"Deletions already accepted are unaffected — they are queued and will still complete."
                  })]
                }),
                onOk:async()=>{
                  r(!0);
                  try{
                    var e;
                    let i=await s.Z.revokeDeletionApiKey(t);
                    d((null==i?void 0:null===(e=i.data)||void 0===e?void 0:e.data)||null),
                    u(!1),
                    _.ZP.success("Deletion Key revoked")
                  }
                  catch(e){
                    w(e,"Could not revoke the Deletion Key.")
                  }
                  finally{
                    r(!1)
                  }
                }
              })
            },
            icon:(0,n.jsx)(ig.Z,{}),
            loading:l,
            danger:!0,
            style:{
              marginLeft:10
            },
            children:"Revoke"
          })]
        }),k&&(0,n.jsxs)("div",{
          className:"api-form call-the-api",
          children:[(0,n.jsx)("div",{
            className:"form-item form-label",
            children:"Call the API"
          }),(0,n.jsxs)("div",{
            className:"form-item snippet-panel",
            children:[(0,n.jsx)(lT.Z,{
              options:lO,
              value:m,
              onChange:v
            }),(0,n.jsxs)("div",{
              className:"endpoint-line",
              children:[(0,n.jsx)("span",{
                className:"method-badge",
                children:"POST"
              }),(0,n.jsx)("code",{
                children:M
              }),(0,n.jsx)(n2.CopyToClipboard,{
                text:M,
                children:(0,n.jsx)(j.Z,{
                  placement:"topLeft",
                  title:"Copy endpoint URL",
                  arrowPointAtCenter:!0,
                  children:(0,n.jsx)(y.Z,{
                    onClick:C,
                    size:"small",
                    className:"endpoint-copy",
                    children:(0,n.jsx)(aR.Z,{})
                  })
                })
              })]
            }),(0,n.jsx)(lT.Z,{
              className:"language-switch",
              options:lU,
              value:g,
              onChange:x
            }),(0,n.jsxs)("div",{
              className:"snippet-body",
              children:[(0,n.jsx)("pre",{
                children:(0,n.jsx)("code",{
                  children:R
                })
              }),(0,n.jsx)(n2.CopyToClipboard,{
                text:R,
                children:(0,n.jsx)(j.Z,{
                  placement:"topLeft",
                  title:"Copy snippet",
                  arrowPointAtCenter:!0,
                  children:(0,n.jsx)(y.Z,{
                    onClick:C,
                    size:"small",
                    className:"snippet-copy",
                    children:(0,n.jsx)(aR.Z,{})
                  })
                })
              })]
            }),(0,n.jsx)(l_.Z,{
              type:"info",
              marginTop:12,
              content:p?"Copy includes your live Deletion Key, so the request runs as-is.":"The key is masked above. Reveal it to copy a snippet that runs as-is."
            })]
          })]
        })]
      })
    };
    let lq=m.default.div.withConfig({
      componentId:"sc-4bb243aa-0"
    })(["min-width:600px;max-width:55vw;.ant-alert.deletion-warning{font-size:12px;border:none;border-radius:4px;width:100%;min-height:40px;height:auto;margin-bottom:18px;}.ant-alert.deletion-warning .ant-alert-message{font-size:12px;font-weight:600;}.ant-alert.deletion-warning .ant-alert-description{font-size:12px;}.api-form .form-item.snippet-panel{width:100%;max-width:820px;background:none;padding:0;line-height:normal;}.api-form .form-item.snippet-panel .ant-segmented{display:flex;width:fit-content;}.api-form .form-item.snippet-panel .language-switch{margin-top:12px;}.api-form .form-item.snippet-panel .endpoint-line{display:flex;align-items:center;gap:8px;margin-top:12px;line-height:normal;}.api-form .form-item.snippet-panel .endpoint-line .method-badge{flex:0 0 auto;background:#f6ffed;border:1px solid #b7eb8f;border-radius:10px;color:#389e0d;font-size:11px;font-weight:600;letter-spacing:0.4px;padding:1px 8px;}.api-form .form-item.snippet-panel .endpoint-line .endpoint-copy{border:0;background:transparent;flex:0 0 auto;}.api-form .form-item.snippet-panel .endpoint-line code{font-family:'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace;font-size:12px;color:#161e35;word-break:break-all;}.api-form .form-item.snippet-panel .snippet-body{position:relative;margin-top:12px;background:#f5f5f5;border-radius:4px;padding:12px 44px 12px 12px;}.api-form .form-item.snippet-panel .snippet-body pre,.api-form .form-item.snippet-panel .snippet-body pre code{margin:0;padding:0;background:none;font-family:'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace;font-size:12px;line-height:18px;color:#161e35;white-space:pre-wrap;word-break:break-word;}.api-form .form-item.snippet-panel .snippet-copy{position:absolute;top:8px;right:8px;border:0;background:transparent;}.api-form .form-item.call-the-api,.api-form.call-the-api{align-items:flex-start;}.api-wrapper{min-height:200px;}.api-form{display:flex;align-items:flex-start;}.api-form .form-item{margin-right:10px;margin-bottom:10px;line-height:33px;}.api-form .form-item.form-label{width:150px;flex:0 0 150px;}.api-form .form-item .ant-input{min-width:300px;height:40px;border-radius:4px;border-color:#dddddd;}.api-footer{margin-left:160px;}.api-footer .ant-btn.ant-btn-default:not(.ant-btn-dangerous){background:#5d97ff;border:none;color:#ffffff;border-radius:4px;height:40px;padding:0 20px;margin-bottom:24px;}.api-footer .ant-btn.ant-btn-default:not(.ant-btn-dangerous):hover{background:#4a86f0;color:#ffffff;}.api-footer .ant-btn.ant-btn-dangerous{border-radius:4px;height:40px;padding:0 20px;margin-bottom:24px;}"]);
    var lQ=e=>{
      let{
        appId:t
      }=e;
      return(0,n.jsx)(lq,{
        children:(0,n.jsx)(lW,{
          appId:t
        })
      })
    },
    lH=i(64235),
    lY=i(93368),
    lG=i(30381),
    l$=i.n(lG),
    lJ=i(18446),
    lX=i.n(lJ),
    l0=i(28368),
    l1=i.n(l0),
    l2=i(91966),
    l3=i.n(l2),
    l4=i(63105),
    l5=i.n(l4),
    l6=i(25325),
    l7=i.n(l6),
    l8=i(3674),
    l9=i.n(l8),
    re=i(78718),
    rt=i.n(re),
    ri=i(86578);
    let rn=(0,a.createContext)(),
    ra=e=>{
      let{
        children:t
      }=e,
      [i,o]=(0,a.useState)([]),
      [l,r]=(0,a.useState)(),
      [s,c]=(0,a.useState)([]),
      [d,p]=(0,a.useState)(),
      [u,h]=(0,a.useState)([]),
      f=(0,a.useMemo)(()=>({
        selectedFilter:i,
        setSelectedFilter:o,
        filterData:u,
        initialSessionData:l,
        setFilterData:h,
        setInitialSessionData:r,
        selectedVideoFilter:s,
        setSelectedVideoFilter:c,
        initialVideoData:d,
        setInitialVideoData:p
      }),[i,o,u,l,h,r,s,c,d,p]);
      return(0,n.jsx)(rn.Provider,{
        value:f,
        children:t
      })
    },
    ro=()=>{
      let{
        selectedFilter:e,
        setSelectedFilter:t,
        filterData:i,
        setFilterData:n,
        setInitialSessionData:o,
        initialSessionData:l,
        selectedVideoFilter:r,
        setSelectedVideoFilter:s,
        initialVideoData:c,
        setInitialVideoData:d
      }=(0,a.useContext)(rn);
      return{
        selectedFilter:e,
        setSelectedFilter:t,
        filterData:i,
        setFilterData:n,
        initialSessionData:l,
        setInitialSessionData:o,
        selectedVideoFilter:r,
        setSelectedVideoFilter:s,
        initialVideoData:c,
        setInitialVideoData:d
      }
    };
    var rl=i(95220),
    rr=i(92980);
    let rs=e=>null==e?void 0:e.includes("Any of the"),
    rc=["event","screen"];
    Array.from(Array(20).keys()).map(e=>({
      value:e+1,
      label:"".concat(e+1)
    }));
    let rd=["isCrashed","screen","event"],
    rp=["appVersion","osVersion"],
    ru=["appVersion","osVersion","noOfInteraction","duration"],
    rh={
      date:"Select date",
      float:"Enter value",
      boolean:"Select value",
      categorical:"Select value"
    },
    rf={
      isCrashed:"Session property crashed",
      country:"Country",
      deviceModel:"Device Model",
      date:"Recording date",
      duration:"Session duration (seconds)",
      appVersion:"Version of application",
      sdkVersion:"Version of UXCam SDK",
      noOfInteraction:"Number of gestures",
      environment:"Environment"
    },
    rm={
      filtersDataSession:"Updated conditional session recording",
      filter:"Updated conditional video recording",
      occludeAllTextFields:"Hide text fields automatically?",
      videoQuality:"Changed quality",
      uploadNetwork:"changed upload video on",
      sessionPercentageToRecord:"changed % sessions to record",
      nativeScreenCapture:"turned on/off native recording",
      recordAppLog:"Toggle Applog",
      sessionRecording:"Session recording toggle",
      videoRecording:"Video recording toggle",
      videoPrivacy:"Video recording privacy default rule",
      occludeVideoRuleException:"Screens for occlude",
      blurVideoRuleException:"Screens for blur",
      recordVideoRuleException:"Screens for record",
      ruleRemoved:"rule added or removed",
      isFragmentEnabled:"Auto tag screen fragments",
      occludeTextFieldExceptions:"Screens where text input shouldn't be occluded"
    },
    rv={
      5:"Ultra low",
      1:"Very low",
      2:"Low",
      3:"High",
      4:"Very high"
    },
    rg={
      sessionRecording:"sessionRecording",
      videoRecording:"videoRecording",
      occludeAllTextFields:"HideTextFieldAutomatically",
      isFragmentEnabled:"isFragmentEnabled"
    },
    rx={
      record:"Record",
      blur:"Blur",
      occlude:"occlude"
    };
    var rb=JSON.parse('[{"attribute":"isCrashed","title":"isCrashed","type":"boolean","operator":[{"key":"is true","val":"is"}],"unit":[],"isSearchable":false,"isValuePredefined":true,"possibleValue":[{"key":"is true","val":true},{"key":"is false","val":false}]},{"attribute":"appVersion","title":"App version","type":"categorical","operator":[{"key":"is any of","val":"is"},{"key":"is none of","val":"isNot"}],"unit":[],"isSearchable":true,"isValuePredefined":false,"possibleValue":[]},{"attribute":"sdkVersion","title":"UXCam SDK version","type":"categorical","operator":[{"key":"is any of","val":"is"},{"key":"is none of","val":"isNot"}],"unit":[],"isSearchable":false,"isValuePredefined":true,"possibleValue":[]},{"attribute":"country","title":"country","type":"categorical","operator":[{"key":"is any of","val":"is"},{"key":"is none of","val":"isNot"}],"unit":[],"isSearchable":false,"isValuePredefined":true,"possibleValue":[]},{"attribute":"date","title":"date","type":"date","operator":[{"key":"is before","val":"lt"},{"key":"is after","val":"gt"},{"key":"in between","val":"gt&lt"}],"unit":[],"isSearchable":false,"isValuePredefined":false,"possibleValue":[]},{"attribute":"osVersion","title":"OS version","type":"categorical","operator":[{"key":"is any of","val":"is"},{"key":"is none of","val":"isNot"}],"unit":[],"isSearchable":false,"isValuePredefined":true,"possibleValue":[]},{"attribute":"deviceModel","title":"model","type":"categorical","operator":[{"key":"is any of","val":"is"},{"key":"is none of","val":"isNot"}],"unit":[],"isSearchable":true,"isValuePredefined":true,"possibleValue":[]},{"attribute":"duration","title":"duration [in seconds]","type":"float","operator":[{"key":"is greater than","val":"gt"},{"key":"is less than","val":"lt"},{"key":"in between","val":"gt&lt"}],"unit":[{"attribute":"sec","title":"sec"}],"isSearchable":false,"isValuePredefined":false,"possibleValue":[]},{"attribute":"noOfInteraction","title":"number of interactions","type":"float","operator":[{"key":"is greater than or equal to","val":"gtEq"},{"key":"is less than or equal to","val":"ltEq"},{"key":"in between","val":"gt&lt"}],"unit":[],"isSearchable":false,"isValuePredefined":false,"possibleValue":[]},{"attribute":"screen","title":"Any of the following screens were visited","type":"categorical","operator":[{"key":"is","val":"is"}],"unit":[],"isSearchable":true,"isValuePredefined":false,"possibleValue":[]},{"attribute":"screen","title":"None of the following screens were visited","type":"categorical","operator":[{"key":"is not","val":"isNot"}],"unit":[],"isSearchable":true,"isValuePredefined":false,"possibleValue":[]},{"attribute":"event","title":"Any of the following events happened","type":"categorical","operator":[{"key":"is","val":"is"}],"unit":[],"isSearchable":true,"isValuePredefined":false,"possibleValue":[]},{"attribute":"event","title":"None of the following events happened","type":"categorical","operator":[{"key":"is not","val":"isNot"}],"unit":[],"isSearchable":true,"isValuePredefined":false,"possibleValue":[]},{"attribute":"recordingScreen","title":"Video recording of all screens","type":"categorical","operator":[{"key":"is","val":"is"}],"unit":[],"isSearchable":true,"isValuePredefined":false,"possibleValue":[]},{"attribute":"recordingScreen","title":"Record video only on following screens","type":"categorical","operator":[{"key":"is","val":"is"}],"unit":[],"isSearchable":true,"isValuePredefined":false,"possibleValue":[]},{"attribute":"recordingScreen","title":"Exclude video recording on following screens","type":"categorical","operator":[{"key":"is not","val":"isNot"}],"unit":[],"isSearchable":true,"isValuePredefined":false,"possibleValue":[]},{"attribute":"environment","title":"Environment","type":"categorical","operator":[{"key":"is any of","val":"is"},{"key":"is none of","val":"isNot"}],"unit":[],"isSearchable":false,"isValuePredefined":true,"possibleValue":[]}]');
    let ry={
      isCrashed:"Crashed",
      country:"Country",
      deviceModel:"Device model",
      date:"Recording Date",
      duration:"Session duration",
      appVersion:"App version",
      sdkVersion:"UXCam SDK version",
      osVersion:"OS version",
      noOfInteraction:"Number of gestures",
      environment:"Environment"
    },
    rj=["isCrashed","country","date","duration","noOfInteraction","environment"],
    rw=["appVersion","sdkVersion"],
    rZ=["osVersion","deviceModel"];
    var rC=(0,a.memo)(e=>{
      let{
        addRules:t,
        validateFields:i,
        commonField:o,
        defaultSelected:l,
        setSelectedFilter:r,
        setFields:s,
        rulePosition:c,
        fieldsLength:d,
        disablefield:p,
        environmentEnabled:u
      }=e,
      {
        filterData:h
      }=ro(),
      [f,m]=(0,a.useState)(!1),
      v=(0,a.useId)(),
      g=(0,a.useMemo)(()=>u?rb:rb.filter(e=>(null==e?void 0:e.attribute)!=="environment"),[u]),
      x=(0,a.useCallback)(e=>h.find(t=>(null==t?void 0:t.key)===e),[h]),
      b=e=>{
        var t;
        let i=x(e);
        s([{
          name:["".concat(o),c,"attribute"],
          value:null==i?void 0:i.attribute
        },{
          name:["".concat(o),c,"unit"],
          value:null
        },{
          name:["".concat(o),c,"title"],
          value:null==i?void 0:i.title
        },{
          name:["".concat(o),c,"operator"],
          value:null==i?void 0:null===(t=i.operator[0])||void 0===t?void 0:t.val
        }]),
        (null==i?void 0:i.attribute)==="isCrashed"&&s([{
          name:["".concat(o),c,"value"],
          value:!0
        }])
      },
      y=async e=>{
        if(await i([[o,d,"value"],[o,d,"value","ios"],[o,d,"value","android"],[o,d,"value",0],[o,d,"value",1]])){
          let i=[...l];
          (null==l?void 0:l.includes(e.key))?i=l.filter(t=>t!==(null==e?void 0:e.key)):(i.push(e.key),t(),b(e.key)),
          r(i)
        }
        m(!1)
      },
      w=(0,a.useCallback)(e=>(null==l?void 0:l.length)&&(null==l?void 0:l.includes("".concat(null==e?void 0:e.attribute))),[l]),
      Z=(0,a.useCallback)(e=>(null==l?void 0:l.length)>0&&(null==l?void 0:l.includes("".concat(null==e?void 0:e.attribute,"-").concat(rs(null==e?void 0:e.title)?"is":"isNot")))||(null==l?void 0:l.length)>0&&(null==l?void 0:l.includes("".concat(null==e?void 0:e.attribute,"-").concat(rs(null==e?void 0:e.title)?"isNot":"is"))),[l]),
      C=(0,a.useMemo)(()=>{
        let e=[],
        t=[],
        i=[],
        a=[],
        o=[];
        return(null==g?void 0:g.length)&&g.map(n=>{
          ["screen"].includes(null==n?void 0:n.attribute)&&e.push({
            label:null==n?void 0:n.title,
            key:"".concat(null==n?void 0:n.attribute,"-").concat(rs(null==n?void 0:n.title)?"is":"isNot"),
            disabled:Z(n)
          }),
          ["event"].includes(null==n?void 0:n.attribute)&&t.push({
            label:null==n?void 0:n.title,
            key:"".concat(null==n?void 0:n.attribute,"-").concat(rs(null==n?void 0:n.title)?"is":"isNot"),
            disabled:Z(n)
          }),
          (null==rj?void 0:rj.includes(n.attribute))&&i.push({
            label:ry[null==n?void 0:n.attribute]||(null==n?void 0:n.title),
            key:"".concat(null==n?void 0:n.attribute),
            disabled:w(n)
          }),
          (null==rw?void 0:rw.includes(n.attribute))&&a.push({
            label:ry[null==n?void 0:n.attribute]||(null==n?void 0:n.title),
            key:"".concat(null==n?void 0:n.attribute),
            disabled:w(n)
          }),
          (null==rZ?void 0:rZ.includes(n.attribute))&&o.push({
            label:ry[null==n?void 0:n.attribute]||(null==n?void 0:n.title),
            key:"".concat(null==n?void 0:n.attribute),
            disabled:w(n)
          })
        }),
        [{
          label:"Visited screens:",
          type:"group",
          children:e
        },{
          label:"Events:",
          type:"group",
          children:t
        },{
          label:"Session properties:",
          type:"group",
          children:i.map(e=>"environment"===e.key?{
            ...e,
            label:(0,n.jsx)(j.Z,{
              title:"Build type based on the stage of the app release life cycle.",
              placement:"right",
              children:e.label
            })
          }:e)
        },{
          label:"Versions:",
          type:"group",
          children:a
        },{
          label:"Device properties:",
          type:"group",
          children:o
        }]
      },[g,w,Z]),
      k=async e=>{
        await i([[o,d,"value"],[o,d,"value","ios"],[o,d,"value","android"],[o,d,"value",0],[o,d,"value",1]])&&m(e)
      },
      I=(0,n.jsx)(eE,{
        onClick:y,
        items:C,
        selectedKeys:l
      });
      return(0,n.jsx)(a.Fragment,{
        children:(0,n.jsx)(eM,{
          placement:"right",
          visible:f,
          content:I,
          trigger:"click",
          onVisibleChange:k,
          children:(0,n.jsx)(eq,{
            type:"secondary",
            disabled:p,
            children:"Add rule"
          })
        })
      },"".concat(v,"_").concat(o))
    }),
    rk=i(75655);
    let rI=e=>{
      let{
        title:t
      }=e,
      i=m.default.div.withConfig({
        componentId:"sc-b4bfd39e-0"
      })(["padding:4px 8px;background-color:rgba(93,151,255,0.08);font-family:roboto;font-size:12px;color:#161E35;border-radius:4px;margin-top:10px;display:flex !important;gap:6px;align-items:center;"]),
      a=m.default.p.withConfig({
        componentId:"sc-b4bfd39e-1"
      })(["margin:0;padding:4px 0px;line-height:normal;a{text-decoration:underline;color:#5C97FF;}"]);
      return(0,n.jsxs)(i,{
        children:[(0,n.jsx)(aM.Z,{}),(0,n.jsx)(a,{
          children:t
        })]
      })
    };
    var rS=i(21217);
    let rz=ew.Z.Item,
    {
      Option:r_
    }=ek.default,
    {
      RangePicker:rF
    }=rl.default,
    rP=F.default.Group,
    rE=m.default.div.withConfig({
      componentId:"sc-14dda818-0"
    })(["display:flex;justify-content:space-between;height:24px;"]),
    rM=(0,m.default)(rP).withConfig({
      componentId:"sc-14dda818-1"
    })(["width:100%;display:flex !important;"]),
    rR=(0,m.default)(rF).withConfig({
      componentId:"sc-14dda818-2"
    })([".ant-picker-range-separator{padding:2px 8px;color:#5b6d89;}"]),
    rN=m.default.div.withConfig({
      componentId:"sc-14dda818-3"
    })(["margin:14px 0;padding-left:20px;"]),
    rA=m.default.div.withConfig({
      componentId:"sc-14dda818-4"
    })(["display:flex;width:100%;align-items:center;.ant-form-item{font-size:12px;}"]),
    rD=m.default.div.withConfig({
      componentId:"sc-14dda818-5"
    })(["padding:4px 6px;"]),
    rT=m.default.div.withConfig({
      componentId:"sc-14dda818-6"
    })(["display:flex;margin:4px 0px;border-radius:4px;align-items:center;width:100%;.ant-form-item{margin:0;}.ant-form-item-control{margin-bottom:0;}"]),
    rL=(0,m.default)(rz).withConfig({
      componentId:"sc-14dda818-7"
    })(["min-width:200px;.ant-select-selection-item{color:#5b6d89;font-weight:300;font-size:14px;}"]),
    rO=(0,m.default)(rz).withConfig({
      componentId:"sc-14dda818-8"
    })(["margin-bottom:0;.ant-btn{border-color:#5d97ff;color:#5d97ff;position:absolute;right:0;bottom:10px;}.ant-form-item-control-input{min-height:0;}"]),
    rU=m.default.div.withConfig({
      componentId:"sc-14dda818-9"
    })(["display:flex;font-weight:400;font-size:14px;line-height:normal;align-items:center;color:#161e35;"]),
    rV=(0,m.default)(F.default).withConfig({
      componentId:"sc-14dda818-10"
    })(["width:30px;height:32px;border-left:0;border-right:0;pointer-events:none;border-color:#ecebec;"]),
    rB=m.default.div.withConfig({
      componentId:"sc-14dda818-11"
    })(["display:flex;width:100%;.ant-input-number{width:100%;}.site-input-group-wrapper .site-input-split{background-color:#fff;}.ant-select-selection-item,.ant-input-number-input,.ant-picker-input > input{color:#5b6d89;font-weight:300;font-size:14px;}"]),
    rK=(0,m.default)(eH).withConfig({
      componentId:"sc-14dda818-12"
    })(["width:100%;.ant-input-number-input,.ant-input-number{border-radius:0 2px 2px 0 !important;}.ant-select-selector{border:1px solid #ecebec !important;border-radius:0 2px 2px 0 !important;}.ant-input-number{border:1px solid #ecebec !important;border-right-width:",";}.ant-input-number-status-error{border-color:#ff4d4f !important;}.ant-input-number:hover,.ant-input-number:focus{border-right-width:1px !important;}.ant-input-number-input:hover,.ant-input-number:focus{border-right-width:1px !important;}"],e=>{
      let{
        isbetween:t
      }=e;
      return 1===t?"0":1
    }),
    rW=(0,m.default)(eH).withConfig({
      componentId:"sc-14dda818-13"
    })(["width:100%;.ant-input-number{border-left:0;border-right:1px solid #ecebec;border-color:#ecebec;}.ant-input-number:hover,.ant-input-number:focus{border-left-width:1px !important;}"]),
    rq=m.default.label.withConfig({
      componentId:"sc-14dda818-14"
    })(["position:absolute;left:0;top:-24px;"]),
    rQ=(0,m.default)(ek.default).withConfig({
      componentId:"sc-14dda818-15"
    })([".ant-select-selector{border:1px solid #ecebec !important;border-radius:0 !important;}"]),
    rH=(0,m.default)(rz).withConfig({
      componentId:"sc-14dda818-16"
    })(["width:100%;display:flex;.ant-picker{width:100%;border-radius:0 !important;border:1px solid #ecebec;}.ant-picker.ant-picker-status-error{border-color:#ff4d4f !important;}"]),
    rY=(e,t,i)=>{
      var a,
      o,
      l;
      let{
        type:r,
        attribute:s,
        disabled:c
      }=e,
      d=(null==e?void 0:e.options)||[],
      p=(null==e?void 0:e.values)||void 0;
      if(!s)return;
      if(Array.isArray(p)&&(p=p.map(e=>({
        ...e,
        label:(null==e?void 0:e.key)||(null==e?void 0:e.val)||(null==e?void 0:e.value),
        value:(null==e?void 0:e.val)||(null==e?void 0:e.value)||(null==e?void 0:e.key)
      }))),"environment"===s&&(p=null==e?void 0:null===(a=e.values)||void 0===a?void 0:a.map(e=>{
        let{
          key:t
        }=e;
        return{
          label:(0,n.jsx)(j.Z,{
            title:(0,rr.Oh)(t),
            children:(0,rk.I)(t)
          }),
          value:t
        }
      })),"sdkVersion"===s&&(p=null==e?void 0:null===(o=e.values)||void 0===o?void 0:o.map(e=>({
        label:(0,rS.Rv)((null==e?void 0:e.key)||(null==e?void 0:e.value),null==e?void 0:e.type),
        value:(0,rS.Rv)((null==e?void 0:e.key)||(null==e?void 0:e.value),null==e?void 0:e.type)
      }))),"deviceModel"===s){
        let t=["iphone","ipad","ipod"];
        p=null==e?void 0:null===(l=e.values)||void 0===l?void 0:l.map(e=>{
          let{
            label:i,
            value:n,
            key:a,
            val:o
          }=e,
          l=i||a,
          r=n||o;
          return r.includes("+")?{
            label:l,
            value:r
          }:{
            label:(null==t?void 0:t.some(e=>l.toLowerCase().startsWith(e)))?l:"".concat(l," (").concat(r,")"),
            value:"".concat(l,"+").concat(r)
          }
        })
      }
      let u=d.map(e=>({
        label:null==e?void 0:e.key,
        value:null==e?void 0:e.key
      })),
      h=e.options;
      switch(r){
        case"date":return(0,n.jsx)(rl.default,{
          placeholder:e.placeholder,
          disabled:c
        });
        case"input":return(0,n.jsx)(F.default,{
          disabled:c,
          placeholder:e.placeholder
        });
        case"boolean":return(0,n.jsx)(rQ,{
          disabled:c,
          onChange:t,
          children:h.map(e=>(0,n.jsx)(r_,{
            value:null==e?void 0:e.val,
            children:(null==e?void 0:e.val)?"is true":"is false"
          },null==e?void 0:e.key))
        });
        case"float":return(0,n.jsx)(eO,{
          disabled:c,
          controls:!1,
          min:0,
          placeholder:e.placeholder
        });
        default:return(0,n.jsx)(rk.Z,{
          filterOptionData:u,
          defaultValues:p,
          handleSelect:t,
          attribute:s,
          attributeType:i,
          placeholder:e.placeholder,
          disabled:c
        })
      }
    };
    var rG=e=>{
      let{
        commonField:t,
        defaultSelected:i,
        form:o,
        disablefield:l,
        environmentEnabled:r
      }=e,
      s=(0,a.useId)(),
      c=(0,a.useMemo)(()=>"filter"===t,[t]),
      d=(0,a.useMemo)(()=>r?rf:()=>(delete rf.environment,rf),[r]),
      {
        filterData:p,
        setSelectedFilter:u,
        setInitialSessionData:h,
        initialSessionData:f,
        initialVideoData:m,
        setInitialVideoData:v,
        setSelectedVideoFilter:g
      }=ro(),
      x=ew.Z.useWatch("".concat(t),o),
      b=(0,a.useCallback)((e,t)=>{
        let i=(null==e?void 0:e.length)?e[t]:null;
        return(null==p?void 0:p.length)>0&&p.find(e=>i&&(null==e?void 0:e.key)===i)
      },[p]),
      y=(0,a.useCallback)(e=>b(i,e),[i,b]),
      j=(e,i)=>{
        o.setFields([{
          name:["".concat(t),i,"value"],
          value:e
        }]);
        let n=(c?[...m]:[...f]).map((t,n)=>{
          let a={
            ...t
          };
          return n===i&&(a.value=e),
          a
        });
        c?v(n):h(n),
        o.validateFields([["".concat(t),i,"value"]])
      },
      w=(e,i)=>{
        o.setFields([{
          name:["".concat(t),i,"value"],
          value:void 0
        }]),
        o.setFields([{
          name:["".concat(t),i,"operator"],
          value:e
        }])
      },
      Z=(e,i,n)=>{
        o.setFields([{
          name:["".concat(t),i,"value",n],
          value:e
        }]);
        let a=(c?[...m]:[...f]).map((e,a)=>{
          let l={
            ...e
          };
          return a===i&&(l.value=o.getFieldValue(["".concat(t),i,"value",n])),
          l
        });
        c?v(a):h(a),
        o.validateFields([["".concat(t),i,"value","ios"],["".concat(t),i,"value","android"]])
      },
      C=(0,a.useCallback)((e,t)=>e.filter(e=>(null==e?void 0:e.type)===t),[]);
      return(0,n.jsx)(ew.Z.List,{
        name:"".concat(t),
        children:(e,a)=>{
          let{
            add:p,
            remove:h
          }=a;
          return(0,n.jsxs)(n.Fragment,{
            children:[(0,n.jsx)(rO,{
              children:(0,n.jsx)(rC,{
                addRules:p,
                validateFields:o.validateFields,
                commonField:t,
                defaultSelected:i,
                setSelectedFilter:c?g:u,
                rulePosition:null==e?void 0:e.length,
                setFields:null==o?void 0:o.setFields,
                fieldsLength:(null==e?void 0:e.length)-1,
                disablefield:l,
                environmentEnabled:r
              })
            }),e.map(e=>{
              var a,
              r,
              p;
              let{
                key:f,
                name:m,
                ...v
              }=e,
              b=y(m),
              k={
                type:null==b?void 0:b.type,
                attribute:null==b?void 0:b.attribute,
                options:null==b?void 0:b.possibleValue,
                placeholder:"".concat(rh[null==b?void 0:b.type]?rh[null==b?void 0:b.type]:""),
                values:o.getFieldValue(["".concat(t),m,"value"])||void 0,
                disabled:l
              },
              I={
                type:null==b?void 0:b.type,
                attribute:null==b?void 0:b.attribute,
                options:(null==b?void 0:b.attribute)==="osVersion"?C(b.possibleValue,"android"):null==b?void 0:b.possibleValue,
                placeholder:"Select value",
                values:o.getFieldValue(["".concat(t),m,"value","android"]),
                disabled:l
              },
              S={
                type:null==b?void 0:b.type,
                attribute:null==b?void 0:b.attribute,
                options:(null==b?void 0:b.attribute)==="osVersion"?C(b.possibleValue,"ios"):null==b?void 0:b.possibleValue,
                placeholder:"Select value",
                values:o.getFieldValue(["".concat(t),m,"value","ios"])
              },
              z=(null==b?void 0:b.operator)instanceof Array?null==b?void 0:b.operator:[],
              _=()=>{
                let e=i.filter((e,t)=>t!==m);
                c?g(e):u(e),
                h(m)
              };
              return(0,n.jsxs)(rN,{
                children:[(0,n.jsxs)(rE,{
                  children:[(0,n.jsx)(rU,{
                    children:d[null==b?void 0:b.attribute]||(null==b?void 0:b.title)
                  }),(0,n.jsx)(eD,{
                    children:(0,n.jsx)(ig.Z,{
                      twoToneColor:"#f4584c",
                      onClick:()=>!l&&_()
                    })
                  })]
                }),(0,n.jsx)(rA,{
                  children:(0,n.jsx)(rT,{
                    children:(0,n.jsx)(rB,{
                      children:(0,n.jsx)(rB,{
                        className:"site-input-group-wrapper",
                        children:(0,n.jsx)(rH,{
                          noStyle:!0,
                          children:(0,n.jsxs)(rM,{
                            compact:!0,
                            children:[!(null==rd?void 0:rd.includes(null==b?void 0:b.attribute))&&(0,n.jsx)(rL,{
                              ...v,
                              name:[m,"operator"],
                              rules:[{
                                required:!0,
                                message:"Value required"
                              }],
                              children:(0,n.jsx)(rQ,{
                                placeholder:"Please select operator",
                                disabled:l,
                                onChange:e=>w(e,m),
                                children:(null==z?void 0:z.length)&&(null==z?void 0:z.map(e=>(0,n.jsx)(r_,{
                                  value:null==e?void 0:e.val,
                                  label:null==e?void 0:e.key,
                                  children:(0,n.jsx)("div",{
                                    children:null==e?void 0:e.key
                                  })
                                },null==e?void 0:e.key)))
                              })
                            }),["noOfInteraction","duration"].includes(null==b?void 0:b.attribute)&&(0,n.jsxs)(n.Fragment,{
                              children:[(0,n.jsx)(rK,{
                                isbetween:(null==x?void 0:x.length)>0&&(null===(a=x[m])||void 0===a?void 0:a.operator)==="gt&lt"?1:0,
                                rules:[{
                                  required:!0,
                                  message:"Value required"
                                }],
                                ...v,
                                name:[m,"value",0],
                                children:b&&rY(k)
                              }),(null==x?void 0:x.length)>0&&(null===(r=x[m])||void 0===r?void 0:r.operator)==="gt&lt"&&(0,n.jsxs)(n.Fragment,{
                                children:[(0,n.jsx)(rV,{
                                  className:"site-input-split",
                                  style:{
                                    width:30
                                  },
                                  placeholder:"--",
                                  disabled:!0
                                }),(0,n.jsx)(rW,{
                                  rules:[{
                                    required:!0,
                                    message:"Value required"
                                  }],
                                  ...v,
                                  name:[m,"value",1],
                                  children:b&&rY(k)
                                })]
                              })]
                            }),rp.includes(null==b?void 0:b.attribute)&&(0,n.jsx)(rH,{
                              noStyle:!0,
                              children:(0,n.jsxs)(n.Fragment,{
                                children:[(0,n.jsxs)(rK,{
                                  isbetween:1,
                                  ...v,
                                  name:[m,"value","android"],
                                  rules:[{
                                    required:!o.getFieldValue([t,m,"value","ios"]),
                                    message:"Value required"
                                  }],
                                  children:[(0,n.jsx)(rq,{
                                    children:"Android"
                                  }),rY(I,e=>Z(e,m,"android"),"android")]
                                }),(0,n.jsx)(rD,{
                                  children:"or"
                                }),(0,n.jsxs)(rW,{
                                  ...v,
                                  name:[m,"value","ios"],
                                  rules:[{
                                    required:!o.getFieldValue([t,m,"value","android"]),
                                    message:"Value required"
                                  }],
                                  children:[(0,n.jsx)(rq,{
                                    children:"iOS"
                                  }),rY(S,e=>Z(e,m,"ios"),"ios")]
                                })]
                              })
                            }),!ru.includes(null==b?void 0:b.attribute)&&(0,n.jsx)(rH,{
                              hasoperator:(null==rd?void 0:rd.includes(null==b?void 0:b.attribute))?0:1,
                              ...v,
                              name:[m,"value"],
                              rules:[{
                                required:!0,
                                message:"Value required"
                              }],
                              children:b&&(null==b?void 0:b.attribute)==="date"&&(null==x?void 0:x.length)>0&&(null===(p=x[m])||void 0===p?void 0:p.operator)==="gt&lt"?(0,n.jsx)(rR,{}):rY(k,e=>{
                                j(e,m)
                              })
                            })]
                          })
                        })
                      })
                    })
                  },s)
                },"".concat(t,"_").concat(f)),(null==b?void 0:b.attribute)==="environment"?(0,n.jsx)(rI,{
                  title:"Environment rule is supported from Android SDK version 3.6.15 onwards and iOS SDK version 3.6.6 onwards."
                }):null]
              },"main-".concat(t,"_").concat(f))
            })]
          })
        }
      },t)
    };
    let r$=ew.Z.Item,
    rJ=F.default.Group,
    rX=m.default.div.withConfig({
      componentId:"sc-436adbac-0"
    })(["margin-bottom:8px;"]),
    r0=(0,m.default)(eD).withConfig({
      componentId:"sc-436adbac-1"
    })(["position:absolute;top:-5px;right:0;"]),
    r1=m.default.div.withConfig({
      componentId:"sc-436adbac-2"
    })(["padding 5px 0 0 20px;.ant-form-item{margin-bottom:0;}.ant-form-item-has-error{margin-bottom:0 !important;}"]),
    r2=(0,m.default)(eH).withConfig({
      componentId:"sc-436adbac-3"
    })(["width:",";.ant-select-selector{border-radius:0 2px 2px 0 !important;border:1px solid #ecebec !important;}.ant-select-selection-item{color:#5b6d89;}"],e=>{
      let{
        isblur:t
      }=e;
      return t?"50%":"70%"
    }),
    r3=(0,m.default)(eH).withConfig({
      componentId:"sc-436adbac-4"
    })(["display:flex;width:30%;.ant-select-selector{border-radius:2px 0 0 2px !important;border:1px solid #ecebec !important;}.ant-select-selection-item{color:#5b6d89;}"]),
    r4=(0,m.default)(eH).withConfig({
      componentId:"sc-436adbac-5"
    })(["color:#5b6d89;width:100px;.ant-form-item-label{padding-bottom:0;}"]),
    r5=(0,m.default)(r$).withConfig({
      componentId:"sc-436adbac-6"
    })(["margin-bottom:0;.ant-btn{border-color:#5d97ff;color:#5d97ff;position:absolute;right:0;bottom:20px;}.ant-form-item-control-input{min-height:0;}"]),
    r6=(0,m.default)(r$).withConfig({
      componentId:"sc-436adbac-7"
    })([""]),
    r7=(0,m.default)(rJ).withConfig({
      componentId:"sc-436adbac-8"
    })([".ant-select-selector{border-radius:0;}"]);
    m.default.p.withConfig({
      componentId:"sc-436adbac-9"
    })(["font-weight:400;font-size:12px;color:#e81414;line-height:normal;margin-top:8px;margin-bottom:0;"]);
    var r8=e=>{
      let{
        rulesOptions:t,
        form:i,
        disablefield:o,
        screenRecordingRules:l
      }=e,
      {
        getRenamedScreenName:r
      }=(0,rS.ox)(),
      s=e=>t=>{
        i.setFields([{
          name:["videoPrivacy","exceptions","".concat(e),"config","radius"],
          value:"blur"===t?10:void 0
        }])
      },
      c=ew.Z.useWatch(["videoPrivacy","exceptions"],i),
      d=i.getFieldValue(["videoPrivacy","exceptions"]),
      p=(0,a.useMemo)(()=>"occlude"===l?"record":"occlude",[l]),
      u=(0,a.useMemo)(()=>(null==c?void 0:c.length)&&(null==c?void 0:c.findIndex(e=>(null==e?void 0:e.rule)==="record"||(null==e?void 0:e.rule)==="occlude"))!==-1,[c]),
      h=(0,a.useCallback)(e=>{
        var t;
        return(null==c?void 0:null===(t=c.filter(t=>{
          var i;
          return(null==t?void 0:null===(i=t.config)||void 0===i?void 0:i.radius)===e
        }))||void 0===t?void 0:t.length)>1
      },[c]),
      f=(0,a.useCallback)(e=>{
        var i;
        return(null==c?void 0:c.length)&&(null===(i=c[e])||void 0===i?void 0:i.rule)&&u?t.filter(e=>(null==e?void 0:e.value)!==p):t
      },[c,t]);
      (0,a.useCallback)(e=>c.filter(t=>{
        var i;
        return(null==t?void 0:null===(i=t.screens)||void 0===i?void 0:i.length)&&(null==t?void 0:t.screens.includes(null==e?void 0:e.value))
      }),[c]);
      let m=(0,a.useCallback)(e=>{
        var t,
        i;
        return(null==c?void 0:c.length)&&(null===(t=c.filter(e=>e))||void 0===t?void 0:t.length)&&c[e]&&(null===(i=c[e])||void 0===i?void 0:i.rule)==="blur"
      },[c]),
      v=async(e,t)=>{
        await i.validateFields([["videoPrivacy","exceptions",(null==e?void 0:e.length)-1,"screens"],["videoPrivacy","exceptions",(null==e?void 0:e.length)-1,"rule"]])&&t()
      },
      g=(e,t)=>{
        let n=(null==e?void 0:e.length)?e.map(e=>null==e?void 0:e.value):[];
        i.setFields([{
          name:["videoPrivacy","exceptions"],
          touched:!0
        },{
          name:["videoPrivacy","exceptions","".concat(t),"screens"],
          value:n,
          touched:!0
        }]),
        i.validateFields(["videoPrivacy","exceptions"])
      };
      return(0,a.useEffect)(()=>{
        (null==c?void 0:c.length)&&(null==c||c.map((e,t)=>i.validateFields([["videoPrivacy","exceptions",t,"config","radius"]])))
      },[c]),
      (0,n.jsx)(r1,{
        children:(0,n.jsx)(ew.Z.List,{
          name:["videoPrivacy","exceptions"],
          children:(e,t)=>{
            let{
              add:i,
              remove:a
            }=t;
            return(0,n.jsxs)(n.Fragment,{
              children:[("blur"!==l||"blur"===l&&(null==e?void 0:e.length)<=1)&&(0,n.jsx)(r5,{
                children:(0,n.jsx)(eq,{
                  onClick:()=>!o&&v(e,i),
                  children:"Add rule"
                })
              }),e.map(e=>{
                var t,
                i;
                let{
                  key:l,
                  name:c
                }=e;
                return(0,n.jsx)(rX,{
                  children:(0,n.jsxs)(r6,{
                    children:[(0,n.jsxs)(r7,{
                      compact:!0,
                      children:[(0,n.jsx)(r3,{
                        name:[c,"rule"],
                        rules:[{
                          required:!0,
                          message:"Please select rule"
                        }],
                        label:"Rule",
                        children:(0,n.jsx)(ek.default,{
                          placeholder:"Select rule",
                          showArrow:!0,
                          options:f(c-1),
                          onChange:s(c),
                          disabled:o
                        })
                      }),m(c)&&(0,n.jsx)(r4,{
                        name:[c,"config","radius"],
                        rules:[{
                          required:!0,
                          message:"Blur radius required"
                        },()=>({
                          validator:(e,t)=>h(t)?Promise.reject(Error("Each rule should have unique blur radius.")):Promise.resolve()
                        })],
                        label:" ",
                        children:(0,n.jsx)(eO,{
                          controls:!1,
                          min:1,
                          addonAfter:"dp",
                          disabled:o
                        })
                      }),(0,n.jsx)(r2,{
                        name:[c,"screens"],
                        rules:[{
                          required:!0,
                          message:"Please select any screen"
                        }],
                        isblur:m(c)?1:0,
                        label:"Screens",
                        children:(0,n.jsx)(rk.Z,{
                          attribute:"screen",
                          placeholder:"Select screen",
                          disabled:o,
                          defaultValues:null===(i=d[c])||void 0===i?void 0:null===(t=i.screens)||void 0===t?void 0:t.map(e=>({
                            label:r(e),
                            value:e,
                            key:e
                          })),
                          handleSelect:e=>{
                            g(e,c)
                          }
                        })
                      }),m(c)&&(0,n.jsx)(rI,{
                        title:(0,n.jsxs)(n.Fragment,{
                          children:["Blur will apply to the app versions with the SDKs starting from 3.6.0. On the app versions with the earlier SDKs, the screens will be occluded. "," ",(0,n.jsx)("a",{
                            target:"_blank",
                            href:"https://developer.uxcam.com/docs/screen-blurring",
                            children:"Learn more"
                          })," "," about the SDKs supporting blur on different frameworks."]
                        })
                      })]
                    }),(0,n.jsx)(r0,{
                      children:(0,n.jsx)(ig.Z,{
                        onClick:()=>!o&&a(c)
                      })
                    })]
                  })
                },l)
              })]
            })
          }
        })
      })
    };
    let r9=()=>{
      throw"Route change canceled due to unsaved form changes. by useNavigationChange triggered Please disregard this error."
    };
    var se=e=>{
      let{
        shouldStopNavigation:t,
        onNavigate:i
      }=e,
      n=(0,o.useRouter)(),
      l=n.asPath,
      r=(0,a.useRef)(""),
      s=(0,a.useCallback)(()=>{
        n.events.emit("routeChangeError"),
        r9()
      },[n]),
      c=(0,a.useCallback)(e=>{
        t&&e!==l&&(i(e),r.current=l,s())
      },[t,s,i,l]);
      return(0,a.useEffect)(()=>(n.events.on("routeChangeStart",c),()=>{
        n.events.off("routeChangeStart",c)
      }),[n.events,l,s,i,t,c]),
      ()=>{
        n.push(r.current)
      }
    };
    let st=(0,m.default)(z.Z).withConfig({
      componentId:"sc-d6cd0b1c-0"
    })(["margin-bottom:18px;padding:10px 12px;font-weight:400;font-size:14px;line-height:normal;border-radius:4px;s border:none;background:rgba(252,125,125,0.2);.ant-alert-error .ant-alert-icon{color:#161e35;}.ant-alert-close-icon .anticon-close{color:#f4584c;}"]);
    var si=()=>(0,n.jsx)(st,{
      message:"Along with your session recording, the video recording is also turned off. Please click “Save changes” button at the bottom to apply the changes.",
      type:"error",
      showIcon:!0,
      icon:(0,n.jsx)(aM.Z,{}),
      closable:!0
    }),
    sn=i(86440);
    let sa=ew.Z.Item,
    so=(0,m.default)(sa).withConfig({
      componentId:"sc-9fefdce0-0"
    })(["margin-bottom:8px;font-size:14px;.ant-form-item-label{font-weight:500;}color:#161e35;.ant-checkbox-wrapper{font-weight:400;font-size:14px;}.ant-radio-wrapper{color:#161e35;font-weight:400;}label{color:#161e35;font-size:14px;}.ant-form-item-control-input{min-height:0;}"]),
    sl=m.default.div.withConfig({
      componentId:"sc-9fefdce0-1"
    })(["display:flex;flex-direction:column;margin-top:12px;margin-bottom:6px;p{font-weight:400;font-size:12px;color:#6c7082;text-transform:none;line-height:normal;.ant-btn{height:auto;font-size:12px;line-height:normal;}}"]),
    sr=(0,m.default)(y.Z).withConfig({
      componentId:"sc-9fefdce0-2"
    })(["padding:0;border:none;color:#5C97FF;span{text-decoration:underline;}&:hover,:active{border:none;}"]),
    ss=(0,n.jsx)(sl,{
      children:(0,n.jsxs)("p",{
        children:["You can also set up privacy rules through our API. Privacy rules set via API override the settings below. Consider getting your app developers’ advice."," ",(0,n.jsx)(sr,{
          target:"_blank",
          rel:"noreferrer",
          href:"https://developer.uxcam.com/docs/screen-blurring#occlude-all-text-fields",
          type:"link",
          children:"Learn more"
        })]
      })
    }),
    sc=m.default.div.withConfig({
      componentId:"sc-9fefdce0-3"
    })(["display:flex;justify-content:flex-end;gap:16px;position :relative;align-items:center;padding:12px 50px;padding-right:94px;background:#ffffff;border-top:1px solid ",";border-radius:0px;.ant-btn{min-width:100px;height:32px;border-radius:6px;}.ant-btn-primary{background:#5C97FF;}.ant-btn-link{color:#5C97FF;padding-inline:0px;}.ant-btn-link:hover{border-color:#fff;}"],v.r.colors.surface10),
    sd=m.default.div.withConfig({
      componentId:"sc-9fefdce0-4"
    })(["display:flex;justify-content:end;margin-top:20px;.ant-form-item{margin-bottom:0px;}"]),
    sp=(0,m.default)(es.default).withConfig({
      componentId:"sc-9fefdce0-5"
    })([".ant-modal-content{width:520px;border-radius:8px;padding:12px;}.ant-modal-footer{display:none;}"]),
    su=(0,m.default)(y.Z).withConfig({
      componentId:"sc-9fefdce0-6"
    })(["border-radius:4px;color:#ffffff;font-size:14px;height:47px;"]),
    sh=(0,m.default)(su).withConfig({
      componentId:"sc-9fefdce0-7"
    })(["background:#ffffff;color:#5d97ff;border:1px solid #5d97ff;margin-right:24px;"]),
    sf=m.default.div.withConfig({
      componentId:"sc-9fefdce0-8"
    })(["display:flex;flex-direction:column;"]),
    sm=m.default.p.withConfig({
      componentId:"sc-9fefdce0-9"
    })(["font-weight:500;font-size:18px;color:#161e35;margin-bottom:4px;"]),
    sv=(0,m.default)(sm).withConfig({
      componentId:"sc-9fefdce0-10"
    })(["font-weight:400;font-size:14px;"]),
    sg=(0,m.default)(eU).withConfig({
      componentId:"sc-9fefdce0-11"
    })(["justify-content:space-between;border-bottom:1px solid #ecebec;align-items:center;padding:10px 12px 10px 20px;"]),
    sx=(0,m.default)(sg).withConfig({
      componentId:"sc-9fefdce0-12"
    })(["padding:14px;"]),
    sb=m.default.div.withConfig({
      componentId:"sc-9fefdce0-13"
    })(["color:#161e35;font-weight:800;font-size:14px;text-transform:uppercase;"]),
    sy=(0,m.default)(sb).withConfig({
      componentId:"sc-9fefdce0-14"
    })(["padding:20px 8px 0 20px;border-bottom:1px solid #ecebec;span{line-height:normal;}"]),
    sj=m.default.div.withConfig({
      componentId:"sc-9fefdce0-15"
    })(["padding:12px 12px 12px 20px;opacity:",";"],e=>{
      let{
        isDisabled:t
      }=e;
      return t?"0.4":"1"
    }),
    sw=m.default.div.withConfig({
      componentId:"sc-9fefdce0-16"
    })(["display:flex;align-items:center;position:relative:.ant-switch. ant-switch-checked{background:#5d97ff;}.ant-form-item{margin-bottom:2px;}"]),
    sZ=m.default.div.withConfig({
      componentId:"sc-9fefdce0-17"
    })(["color:#a1a8c2;font-size:12px;margin:0 8px 2px 0;"]),
    sC=(0,m.default)(eU).withConfig({
      componentId:"sc-9fefdce0-18"
    })(["justify-content:space-between;padding:8px 0;line-height:normal;&[aria-hidden='true']{display:none;}"]),
    sk=(0,m.default)(sC).withConfig({
      componentId:"sc-9fefdce0-19"
    })(["justify-content:start;padding:0;"]),
    sI=(0,m.default)(sC).withConfig({
      componentId:"sc-9fefdce0-20"
    })(["padding-bottom:0;"]),
    sS=(0,m.default)(sn.Z).withConfig({
      componentId:"sc-9fefdce0-21"
    })(["margin:8px 0;color:#ecebec;"]),
    sz=(0,m.default)(sS).withConfig({
      componentId:"sc-9fefdce0-22"
    })(["margin:20px 0;"]),
    s_=m.default.div.withConfig({
      componentId:"sc-9fefdce0-23"
    })(["display:flex;flex-direction:column;width:100%;.ant-select-multiple.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector{background:#ffffff;}"]),
    sF=(0,m.default)(s_).withConfig({
      componentId:"sc-9fefdce0-24"
    })(["width:80%;margin-top:20px;"]),
    sP=m.default.div.withConfig({
      componentId:"sc-9fefdce0-25"
    })(["font-weight:500;font-size:14px;color:#161e35;margin-top:",";"],e=>{
      let{
        sublabel:t
      }=e;
      return"none"===t?"8px":0
    }),
    sE=(0,m.default)(sP).withConfig({
      componentId:"sc-9fefdce0-26"
    })(["width:100%;margin-bottom:16px;"]),
    sM=(0,m.default)(sE).withConfig({
      componentId:"sc-9fefdce0-27"
    })(["margin-bottom:0;"]),
    sR=m.default.div.withConfig({
      componentId:"sc-9fefdce0-28"
    })(["font-weight:400;font-size:12px;color:#6c7082;margin-top:5px;text-transform:initial;"]),
    sN=m.default.div.withConfig({
      componentId:"sc-9fefdce0-29"
    })(["flex:1;.ant-input-number-disabled{background-color:#ffffff;}.ant-form-item-control-input-content{display:flex;justify-content:right;}.ant-form-item-explain-error{text-align:right;padding-top:5px;}"]),
    sA=(0,m.default)(sN).withConfig({
      componentId:"sc-9fefdce0-30"
    })(["width:100%;"]),
    sD=m.default.div.withConfig({
      componentId:"sc-9fefdce0-31"
    })(["display:flex;flex:2;margin-bottom:6px;width:100%;align-items:baseline;line-height:normal;.ant-checkbox-wrapper{margin-right:12px;}.ant-form-item{margin-bottom:0;}"]),
    sT=(0,m.default)(sa).withConfig({
      componentId:"sc-9fefdce0-32"
    })(["position:fixed;bottom:-14px;width:",";right:0;z-index:0;"],e=>{
      let{
        collapse:t
      }=e;
      return 1===t?"calc(100% - 80px)":"calc(100% - 200px)"
    }),
    sL=(0,m.default)(eO).withConfig({
      componentId:"sc-9fefdce0-33"
    })(["border-right:1px solid #ecebec;width:166px;"]),
    sO=(0,m.default)(sN).withConfig({
      componentId:"sc-9fefdce0-34"
    })(["display:flex;justify-content:end;.ant-form-item{flex-direction:row !important;}.ant-form-item-label{margin-right:8px;margin-top:4px;}.ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{display:none;}"]),
    sU=(0,m.default)(so).withConfig({
      componentId:"sc-9fefdce0-35"
    })(["label{font-size:13px;}"]),
    sV=(0,m.default)(ew.Z).withConfig({
      componentId:"sc-9fefdce0-36"
    })([".ant-form-item-explain-error{font-size:12px;line-height:normal;}"]),
    sB=m.default.span.withConfig({
      componentId:"sc-9fefdce0-37"
    })(["cursor:pointer;position:absolute;height:100%;width:100%;z-index:1;inset:0;"]),
    sK=["recording_setting.create","recording_setting.update","recording_setting.delete"],
    sW=[{
      value:"blur",
      label:"Blur"
    },{
      value:"occlude",
      label:"Occlude"
    },{
      value:"record",
      label:"Record"
    }],
    sq=[{
      value:5,
      label:"Ultra low"
    },{
      value:1,
      label:"Very low"
    },{
      value:2,
      label:"Low"
    },{
      value:3,
      label:"High"
    },{
      value:4,
      label:"Very high"
    }],
    sQ=[{
      label:"Wi-Fi only",
      value:1
    },{
      label:"Wi-Fi and cellular",
      value:2
    }],
    sH=[{
      label:"URL Path changes (Default)",
      value:"path"
    },{
      label:"URL Path and Query changes",
      value:"path_query"
    },{
      label:"URL Path, Query and Hash changes",
      value:"path_query_and_hash"
    },{
      label:"URL Path and Hash changes",
      value:"path_hash"
    }],
    sY=[{
      label:"Record all screens",
      value:"record"
    },{
      label:"Blur all screens",
      value:"blur"
    },{
      label:"Occlude all screens",
      value:"occlude"
    }],
    sG={
      blur:"blurred",
      record:"recorded",
      occlude:"occluded"
    },
    s$=["filtersDataSession","filter"],
    sJ=ew.Z.Item,
    {
      Option:sX
    }=ek.default,
    s0=[],
    s1={
      validator:(e,t)=>!t||Number.isInteger(Number(t))&&Number(t)>0?Promise.resolve():Promise.reject(Error("Only positive integers are allowed."))
    },
    s2={
      validator(e,t){
        let i=Number(t);
        if(!t||Number.isNaN(i))return Promise.reject(Error("Value required"));
        if(i<=0)return Promise.reject(Error("Value must be greater than 0"));
        if(i>100)return Promise.reject(Error("Value cannot exceed 100"));
        let n=t.toString().split(".")[1];
        return n&&n.length>1?Promise.reject(Error("Only 1 decimal place allowed")):i<.1?Promise.reject(Error("Minimum value is 0.1")):Promise.resolve()
      }
    };
    var s3=()=>{
      var e,
      t,
      i;
      let[l]=ew.Z.useForm(),
      s=(0,ei.useQueryClient)(),
      c=(0,r.I0)(),
      {
        selectedFilter:d,
        setSelectedFilter:p,
        initialSessionData:h,
        initialVideoData:f,
        selectedVideoFilter:m,
        setSelectedVideoFilter:v
      }=ro(),
      {
        setShowPricingModal:b,
        selfServeFlag:j
      }=(0,u.I)(),
      {
        planFeature:w,
        orgId:Z,
        planLimit:C
      }=(0,r.v9)(e=>e.currentOrgReducer),
      {
        app:S
      }=(0,r.v9)(e=>e.urlReducer),
      {
        collapse:z
      }=(0,r.v9)(e=>e.sidebarReducer),
      F=(0,o.useRouter)(),
      {
        resetFields:P,
        validateFields:E,
        setFields:M,
        setFieldsValue:R,
        getFieldValue:N
      }=l,
      [D,T]=(0,a.useState)([]),
      [L,O]=(0,a.useState)([]),
      [U,V]=(0,a.useState)([]),
      [B,K]=(0,a.useState)(!1),
      [q,Q]=(0,a.useState)(!1),
      [H,Y]=(0,a.useState)(),
      [G,$]=(0,a.useState)(!1),
      [J,X]=(0,a.useState)(!1),
      [ee,et]=(0,a.useState)(!1),
      {
        toggleSessionRecording:en,
        toggleVideoRecording:ea,
        nativeScreenCapture:eo
      }=w||{},
      {
        sessionCount:el,
        videoCount:er
      }=C||{},
      es=(0,I.ye)("app-setting-env"),
      ec=()=>{
        K(!0)
      };
      se({
        shouldStopNavigation:q,
        onNavigate:e=>{
          ec(),
          Q(!1),
          Y(e)
        }
      });
      let ed=()=>{
        K(!1),
        Q(!1),
        P(),
        F.push(H)
      },
      ep=s.getQueryData("profileInfo"),
      eu=s.getQueryData("roles_permission"),
      eh=(0,a.useCallback)(e=>ep&&(0,W.g6)(e,eu,null==ep?void 0:ep.organization,Z,S),[ep,Z,eu,S]),
      ef=ew.Z.useWatch(["videoPrivacy","default","rule"],l),
      em=ew.Z.useWatch(["videoPrivacy","exceptions"],l),
      ev=ew.Z.useWatch("uploadNetwork",l),
      eg=ew.Z.useWatch("occludeAllTextFields",l),
      ex=ew.Z.useWatch("videosPerDevice",l),
      eb=ew.Z.useWatch("sessionsPerDay",l),
      ey=ew.Z.useWatch("maxOfflineVideos",l),
      ej=ew.Z.useWatch("filter",l),
      eZ=ew.Z.useWatch("filtersDataSession",l),
      eC=ew.Z.useWatch("sessionRecording",l),
      eI=ew.Z.useWatch("videoRecording",l),
      eS=["appSetting",S],
      ez=ew.Z.useWatch("allowedDomains",l)||s0,
      eE=s.getQueryData(eS),
      eM=["screen",S],
      eN="rename-screen-".concat(S),
      eA=s.getQueryData(eM),
      eD=s.getQueryData(eN),
      {
        getRenamedScreenName:eO
      }=(0,rS.ox)(),
      eU=(0,a.useMemo)(()=>(null==eA?void 0:eA.length)?eA.map(e=>({
        ...e,
        label:eD&&eD[null==e?void 0:e.label]||(null==e?void 0:e.label)
      })):[],[eA,eD]),
      eq=(e,t)=>{
        let i;
        switch(e){
          case"occludeAllTextFields":case"sessionRecording":case"videoRecording":case"isFragmentEnabled":(i={})[rg[e]]=t?"enabled":"disabled";
          break;
          case"videoQuality":i={
            qualitySetting:rv[t]
          };
          break;
          case"uploadNetwork":i={
            changedUploadedVideoOn:1===t?"wifi":"wifi+data"
          };
          break;
          case"nativeScreenCapture":i={
            nativeRecording:t?"On":"Off"
          };
          break;
          case"recordAppLog":i={
            new_setting:t,
            old_setting:!t
          };
          break;
          case"videoPrivacy":(i={}).rule="".concat(rx[t]," all screens");
          break;
          case"occludeVideoRuleException":case"recordVideoRuleException":case"blurVideoRuleException":case"ruleRemoved":case"occludeTextFieldExceptions":(i={}).screen_name=JSON.stringify(t)
        }
        return i
      },
      eH=(e,t)=>{
        var i;
        return(null===(i=l3()(e,t))||void 0===i?void 0:i.length)>0
      },
      eJ=(e,t)=>l3()(e,t),
      eX=(0,a.useCallback)((e,t,i)=>{
        let n="ruleRemoved"===e?"".concat(rx[ef]," all screens"):rm[e],
        a=eq(e,t);
        c((0,g.hI)({
          action:n,
          info:{
            ...a,
            ...i
          }
        }))
      },[c,ef]),
      e0=(e,t)=>{
        var i,
        n,
        a,
        o;
        let l=l5()(e,{
          attribute:"environment"
        })||[],
        r="session"===t?null==eE?void 0:eE.filtersDataSession:null==eE?void 0:eE.filter,
        s=l5()(r,{
          attribute:"environment"
        });
        if(!s.length&&!l.length||lX()(s,l))return;
        let d=[],
        p=[];
        l&&l.length&&(p=[{
          attribute:"environment",
          operator:l[0].operator,
          value:(null===(n=l[0])||void 0===n?void 0:null===(i=n.value)||void 0===i?void 0:i.map(e=>e.val))||[]
        }]),
        s&&s.length&&(d=[{
          attribute:"environment",
          operator:s[0].operator,
          value:(null===(o=s[0])||void 0===o?void 0:null===(a=o.value)||void 0===a?void 0:a.map(e=>e.val))||[]
        }]);
        let u={
          new_rule:p,
          old_rule:d
        };
        c((0,k.CW)(null,{
          eventName:"session"===t?"wa_session_recording_rule_changed":"wa_video_recording_rule_changed",
          track_type:"event",
          eventProperty:u
        }))
      },
      {
        mutate:e1,
        isLoading:e2,
        data:e3
      }=(0,ei.useMutation)(A.dZ,{
        onSuccess:e=>{
          let{
            data:t
          }=e||{};
          if(e0((null==t?void 0:t.filtersDataSession)||[],"session"),e0((null==t?void 0:t.filter)||[],"video"),t&&t._id&&(Object.keys(t).forEach(e=>{
            if(lX()(t[e],eE[e])||"videoPrivacy"===e||"occludeTextFieldExceptions"===e){
              if("occludeTextFieldExceptions"===e){
                let i=eE[e],
                n=t[e],
                a=eH(n,i),
                o=eH(i,n);
                a&&rm.occludeTextFieldExceptions&&eX("occludeTextFieldExceptions",eJ(n,i),{
                  status:"added"
                }),
                o&&rm.occludeTextFieldExceptions&&eX("occludeTextFieldExceptions",eJ(i,n),{
                  status:"removed"
                })
              }
              else if("videoPrivacy"===e){
                var i,
                n,
                a,
                o,
                l,
                r,
                s,
                c,
                d,
                p,
                u;
                let h=(null===(n=t[e])||void 0===n?void 0:null===(i=n.default)||void 0===i?void 0:i.rule)==="blur",
                f=null===(a=eE[e])||void 0===a?void 0:a.exceptions,
                m=null===(o=t[e])||void 0===o?void 0:o.exceptions;
                if(!l1()(null===(l=eE[e])||void 0===l?void 0:l.default,null===(r=t[e])||void 0===r?void 0:r.default,rS.lt)){
                  let i=null===(d=t[e])||void 0===d?void 0:null===(c=d.default)||void 0===c?void 0:null===(s=c.config)||void 0===s?void 0:s.radius;
                  rm[e]&&eX(e,null===(u=t[e])||void 0===u?void 0:null===(p=u.default)||void 0===p?void 0:p.rule,h?{
                    blur_radius:"".concat(i," dp")
                  }:null)
                }
                if(!(0,rS.o6)(f,t)){
                  let e=eE.videoPrivacy.exceptions,
                  i=t.videoPrivacy.exceptions;
                  null==e||e.forEach((e,t)=>{
                    var n;
                    let a=l3()(null==e?void 0:e.screens,null===(n=i[t])||void 0===n?void 0:n.screens),
                    o=e.rule;
                    a.length&&o&&eX("".concat(o,"VideoRuleException"),a,{
                      status:"removed"
                    })
                  }),
                  null==m||m.forEach((e,t)=>{
                    var i;
                    let{
                      rule:n,
                      screens:a,
                      config:{
                        radius:o
                      }={}
                    }=e||{},
                    {
                      rule:l,
                      screens:r,
                      config:{
                        radius:s
                      }={}
                    }=(null==f?void 0:f[t])||{};
                    if(!lX()(n,null==f?void 0:null===(i=f[t])||void 0===i?void 0:i.rule)){
                      let e="".concat(n||l,"VideoRuleException");
                      if(rm[e]){
                        eX(e,n?a:r,{
                          status:n?"added":"removed"
                        });
                        return
                      }
                    }
                    if(!lX()(e,null==f?void 0:f[t])){
                      let e=eH(a,r),
                      t=o&&o!==s;
                      e&&!t&&rm["".concat(n,"VideoRuleException")]&&n&&eX("".concat(n,"VideoRuleException"),eJ(a,r),{
                        status:"added"
                      }),
                      t&&rm["".concat(n,"VideoRuleException")]&&n&&eX("".concat(n,"VideoRuleException"),a,{
                        status:"blur radius changed",
                        blur_radius:"".concat(o," dp")
                      })
                    }
                  })
                }
              }
            }
            else rm[e]&&eX(e,t[e])
          }),_.ZP.success("App setting updated successfully."),s.setQueryData(eS,null==e?void 0:e.data),T([]),O([]),V([]),Q(!1),B&&ed()),null==e?void 0:e.error){
            var i;
            _.ZP.error((null==e?void 0:null===(i=e.error)||void 0===i?void 0:i.message)||"App setting update failed.")
          }
        }
      },{
        enabled:!1
      });
      function e4(e){
        return e.replace(/ \(android\)| \(ios\)/i,"")
      }
      let e5=e=>e.map(e=>{
        var t,
        i,
        n,
        a,
        o,
        l,
        r,
        s,
        c,
        d,
        p,
        u,
        h,
        f;
        let m={
          ...e
        };
        if((null==e?void 0:e.attribute)==="country"&&(null==e?void 0:null===(t=e.value)||void 0===t?void 0:t.length)>0&&(m.value=null===(r=e.value)||void 0===r?void 0:r.map(e=>({
          key:(null==e?void 0:e.key)||(null==e?void 0:e.key),
          val:(null==e?void 0:e.val)||(null==e?void 0:e.value)
        }))),(null==e?void 0:e.attribute)==="environment"&&(null==e?void 0:null===(i=e.value)||void 0===i?void 0:i.length)&&(m.value=null===(s=e.value)||void 0===s?void 0:s.map(e=>({
          key:null==e?void 0:e.key,
          val:(null==e?void 0:e.val)||(null==e?void 0:e.value)
        }))),(null==e?void 0:e.attribute)==="isCrashed"&&"boolean"==typeof(null==e?void 0:e.value)&&(m.value=[{
          key:(null==e?void 0:e.value)?"is true":"is false",
          val:null==e?void 0:e.value
        }],m.operator="is"),(null==e?void 0:e.attribute)==="deviceModel"&&(null==e?void 0:null===(n=e.value)||void 0===n?void 0:n.length)>0&&(m.value=null===(c=e.value)||void 0===c?void 0:c.map(e=>{
          var t;
          let i=null==e?void 0:null===(t=e.value)||void 0===t?void 0:t.split("+");
          return{
            key:void 0===i?null==e?void 0:e.key:i[0],
            val:void 0===i?null==e?void 0:e.val:i[1]
          }
        })),(null==e?void 0:e.attribute)==="sdkVersion"&&(null==e?void 0:null===(a=e.value)||void 0===a?void 0:a.length)>0&&(m.value=null===(d=e.value)||void 0===d?void 0:d.map(e=>{
          var t;
          return{
            key:e4((null==e?void 0:e.key)||(null==e?void 0:e.value)),
            val:e4((null==e?void 0:e.val)||(null==e?void 0:e.value)),
            type:(null==e?void 0:null===(t=e.key)||void 0===t?void 0:t.includes("ios"))?"ios":"android"
          }
        })),((null==e?void 0:e.attribute)==="event"||(null==e?void 0:e.attribute)==="screen")&&(null==e?void 0:null===(o=e.value)||void 0===o?void 0:o.length)>0&&(m.value=null===(p=e.value)||void 0===p?void 0:p.map(e=>({
          key:null==e?void 0:e.key,
          val:(null==e?void 0:e.val)||(null==e?void 0:e.value)
        }))),(null==e?void 0:e.attribute)==="date"&&(null==e?void 0:e.value)&&(m.value=(null==e?void 0:e.operator)==="gt&lt"?null==e?void 0:null===(u=e.value)||void 0===u?void 0:u.map(e=>e.format("YYYY-MM-DD")):[null==e?void 0:e.value.format("YYYY-MM-DD")]),((null==e?void 0:e.attribute)==="appVersion"||(null==e?void 0:e.attribute)==="osVersion")&&(null==e?void 0:e.value)){
          let t=null==e?void 0:null===(h=e.value)||void 0===h?void 0:h.android,
          i=null==e?void 0:null===(f=e.value)||void 0===f?void 0:f.ios,
          n=(null==t?void 0:t.length)?null==t?void 0:t.map(e=>({
            key:null==e?void 0:e.key,
            val:(null==e?void 0:e.val)||e.value,
            type:"android"
          })):[],
          a=(null==i?void 0:i.length)?null==i?void 0:i.map(e=>({
            key:null==e?void 0:e.key,
            val:e.val||e.value,
            type:"ios"
          })):[];
          m.value=(null==t?void 0:t.length)||(null==i?void 0:i.length)?[...n,...a]:null==e?void 0:e.value
        }
        return m.title=(null==rb?void 0:rb.length)?null===(l=rb.find(e=>(null==e?void 0:e.attribute)===(null==m?void 0:m.attribute)))||void 0===l?void 0:l.title:null==m?void 0:m.title,
        m
      }),
      e6=async e=>{
        E().then(async()=>{
          let t={
            ...e
          },
          i=null==e?void 0:e.filtersDataSession,
          n=null==e?void 0:e.filter;
          t.filtersDataSession=(null==i?void 0:i.length)?await e5(i):[],
          t.filter=(null==n?void 0:n.length)?await e5(n):[],
          t.sessionsPerDay=(null==e?void 0:e.sessionsPerDay)?null==e?void 0:e.sessionsPerDay_customValue:-1,
          t.videosPerDevice=(null==e?void 0:e.videosPerDevice)?null==e?void 0:e.videosPerDevice_customValue:-1,
          t.maxOfflineVideos=(null==e?void 0:e.maxOfflineVideos)?null==e?void 0:e.maxOfflineVideos_customValue:-1,
          t.nativeScreenCapture=!!(null==e?void 0:e.nativeScreenCapture),
          t.rageTapIgnoreSetting=J?null==e?void 0:e.rageTapIgnoreSetting:[],
          t.activitiesToIgnore=G?null==e?void 0:e.activitiesToIgnore:[],
          t.videosPerDevice_customValue=void 0,
          t.sessionsPerDay_customValue=void 0,
          t.maxOfflineVideos_customValue=void 0,
          e1({
            appId:S,
            data:t
          })
        })
      },
      e7=e=>e&&e.map(e=>{
        var t,
        i,
        n;
        let a={
          ...e
        };
        if((null==e?void 0:e.attribute)==="date"&&(null==e?void 0:e.value)){
          let i=null==e?void 0:null===(t=e.value)||void 0===t?void 0:t.map(e=>l$()(e));
          a.value=(null==e?void 0:e.operator)==="gt&lt"?i:l$()(null==e?void 0:e.value[0])
        }
        if((null==e?void 0:e.attribute)==="appVersion"||(null==e?void 0:e.attribute)==="osVersion"){
          let t=null===(i=e.value)||void 0===i?void 0:i.filter(e=>(null==e?void 0:e.type)==="android"),
          o=null===(n=e.value)||void 0===n?void 0:n.filter(e=>(null==e?void 0:e.type)!=="android");
          a.value={
            android:t,
            ios:o
          }
        }
        return a
      }),
      e8=(0,a.useMemo)(()=>e7(h),[h]),
      e9=(0,a.useMemo)(()=>e7(f),[f]),
      te=(0,lC.e)("web"),
      tt=(0,a.useCallback)((e,t,i)=>{
        M([{
          name:"".concat(e),
          value:-1!==i
        },{
          name:"".concat(t),
          value:-1===i?void 0:i
        }])
      },[M]),
      ti=(0,a.useCallback)(()=>{
        var e,
        t;
        tt("maxOfflineVideos","maxOfflineVideos_customValue",null==eE?void 0:eE.maxOfflineVideos),
        tt("videosPerDevice","videosPerDevice_customValue",null==eE?void 0:eE.videosPerDevice),
        tt("sessionsPerDay","sessionsPerDay_customValue",null==eE?void 0:eE.sessionsPerDay),
        (null==eE?void 0:eE.videoQuality)||M([{
          name:"videoQuality",
          value:3
        }]),
        (null==eE?void 0:eE.videoPrivacy)||M([{
          name:["videoPrivacy","default","rule"],
          value:"record"
        }]),
        (null==eE?void 0:null===(e=eE.rageTapIgnoreSetting)||void 0===e?void 0:e.length)&&X(!0),
        (null==eE?void 0:null===(t=eE.activitiesToIgnore)||void 0===t?void 0:t.length)&&$(!0)
      },[eE,M,tt]),
      tn=(0,a.useMemo)(()=>eZ&&eZ.map(e=>rc.includes(null==e?void 0:e.attribute)?"".concat(null==e?void 0:e.attribute,"-").concat(null==e?void 0:e.operator):null==e?void 0:e.attribute),[eZ]),
      ta=(0,a.useMemo)(()=>ej&&ej.map(e=>rc.includes(null==e?void 0:e.attribute)?"".concat(null==e?void 0:e.attribute,"-").concat(null==e?void 0:e.operator):null==e?void 0:e.attribute),[ej]),
      to=()=>{
        var e,
        t;
        P(),
        T([]),
        O([]),
        V([]),
        X(!!(null==eE?void 0:null===(e=eE.rageTapIgnoreSetting)||void 0===e?void 0:e.length)),
        $(!!(null==eE?void 0:null===(t=eE.activitiesToIgnore)||void 0===t?void 0:t.length)),
        ti(),
        p((null==h?void 0:h.map(e=>e.attribute))||tn),
        v((null==f?void 0:f.map(e=>e.attribute))||ta),
        Q(!1)
      },
      tl=(0,a.useMemo)(()=>{
        let e;
        return eE&&((e={
          ...eE
        }).filtersDataSession=e7(eE.filtersDataSession),null===e.allowedDomains&&(e.allowedDomains=[]),te&&null===e.urlChange&&(e.urlChange="path"),e.occludeAllTextFields=eE.occludeAllTextFields||!1,e.filter=e7(eE.filter),e.occludeTextFieldExceptions=(null==eE?void 0:eE.occludeTextFieldExceptions)||void 0,e.activitiesToIgnore=(null==eE?void 0:eE.activitiesToIgnore)||[]),
        e
      },[eE,te]),
      tr=(null==tl?void 0:tl.allowedDomains)||s0,
      [ts,tc]=(0,a.useState)(tr);
      (0,a.useEffect)(()=>{
        tc(tr)
      },[tr]);
      let td=(e,t,i)=>{
        var n;
        return!lX()(null===(n=tl[e][t])||void 0===n?void 0:n.value,i)
      },
      tp=!eC||!eI,
      tu=e=>{
        "Enter"===e.code&&e.preventDefault()
      },
      th=(0,a.useMemo)(()=>e2||ep&&!eh(sK),[e2,ep,eh]);
      (0,a.useEffect)(()=>{
        p(tn)
      },[tn,p]),
      (0,a.useEffect)(()=>{
        v(ta)
      },[ta,v]),
      (0,a.useEffect)(()=>{
        let e=N(["videoPrivacy","exceptions"]);
        "record"===ef&&T(e),
        "blur"===ef&&O(e),
        "occlude"===ef&&V(e)
      },[em,ef,N]);
      let tf=(0,a.useMemo)(()=>!B&&q,[q,e2,B]);
      (0,a.useEffect)(()=>{
        eE&&ti()
      },[eE,S,ti]),
      (0,a.useEffect)(()=>{
        !ex&&q&&E(["videosPerDevice_customValue"])
      },[ex,q,E]),
      (0,a.useEffect)(()=>{
        !eb&&q&&E(["sessionsPerDay_customValue"])
      },[eb,q,E]);
      let tm=(0,a.useCallback)((e,t)=>{
        let i=e.map(e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://".concat(e)).filter(e=>{
          if(!e.includes("."))return!1;
          try{
            return new URL(e),
            !0
          }
          catch(e){
            return!1
          }
        }).map(e=>{
          let t=new URL(e);
          return"".concat(t.protocol,"//").concat(t.hostname)
        });
        Q(!0),
        R({
          allowedDomains:Array.from(new Set(ts.concat(i)))
        })
      },[R,ts]),
      tv=(0,a.useCallback)(e=>()=>{
        let t=ts[e],
        i=ts.filter((t,i)=>i!==e);
        R({
          allowedDomains:(N("allowedDomains")||[]).slice().filter(e=>e!==t)
        }),
        tc(i),
        Q(!0)
      },[N,R,ts]),
      tg=(0,a.useMemo)(()=>(ez||[]).filter(e=>!ts.includes(e)),[ez,ts]);
      return(0,n.jsxs)(n.Fragment,{
        children:[eE&&(0,n.jsxs)(sV,{
          id:"sessionRecordingForm",
          form:l,
          layout:"vertical",
          name:"dynamic_form_nest_item",
          onFinish:e6,
          initialValues:tl,
          autoComplete:"off",
          disabled:e2||th,
          onFieldsChange:(e,t)=>{
            var i,
            n,
            a,
            o;
            let r=t.some(e=>e.touched),
            s=null===(i=e[0])||void 0===i?void 0:i.name[0],
            c=null===(n=e[0])||void 0===n?void 0:n.name[1],
            d=null===(a=e[0])||void 0===a?void 0:a.value,
            p=N(["videoPrivacy"]),
            u=N(["videoPrivacy","exceptions"]),
            h=null==e3?void 0:e3.data,
            f=l7()(l9()(h),l9()(l.getFieldsValue())),
            m=l3()(f,["videoPrivacy","videosPerDevice","maxOfflineVideos"]),
            v=lX()(rt()(h,m),rt()(l.getFieldsValue(),m)),
            g=!!s$.includes(s)&&td(s,c,d),
            x=!l1()(null==h?void 0:null===(o=h.videoPrivacy)||void 0===o?void 0:o.default,p.default,(e,t,i)=>{
              if("config"===i&&"blur"===e.rule)return lX()(e,t);
              if("config"===i&&"blur"!==e.rule)return
            }),
            b=!(()=>{
              var e;
              if(!u[0])return!1;
              let{
                rule:t,
                screens:i
              }=u[0],
              n=(null==h?void 0:null===(e=h.videoPrivacy)||void 0===e?void 0:e.exceptions)||[];
              if(u.length!==n.length)return!1;
              if("blur"===t)return lX()(n,u);
              let a=n&&n[0];
              return lX()(null==a?void 0:a.rule,t)&&lX()(null==a?void 0:a.screens,i)
            })()||x;
            !B&&(!v||g||b&&r)&&Q(!0)
          },
          onKeyDown:e=>tu(e),
          children:[(null==eE?void 0:eE.appId)&&(null==eE?void 0:eE.videoRecording)&&"boolean"==typeof eC&&!eC&&!!en&&(0,n.jsx)(si,{}),(0,n.jsxs)(e_,{
            children:[(0,n.jsxs)(eF,{
              children:[(0,n.jsxs)(eV,{
                children:[(0,n.jsxs)(sg,{
                  children:[(0,n.jsx)(sb,{
                    children:"Session data capture"
                  }),(0,n.jsxs)(sw,{
                    children:[(0,n.jsx)(sZ,{
                      children:eC?"Enabled":"Disabled"
                    }),(0,n.jsxs)("span",{
                      style:{
                        position:"relative"
                      },
                      children:[(0,n.jsx)(sJ,{
                        name:"sessionRecording",
                        valuePropName:"checked",
                        children:(0,n.jsx)(o7.Z,{
                          disabled:!en,
                          onChange:e=>{
                            te?R({
                              videoRecording:e
                            }):R({
                              videoRecording:(null==eE?void 0:eE.videoRecording)&&e
                            }),
                            R({
                              filtersDataSession:e8
                            })
                          }
                        })
                      }),en?null:(0,n.jsx)(sB,{
                        "aria-hidden":!0,
                        onClick:()=>et(!0)
                      })]
                    })]
                  })]
                }),(0,n.jsxs)(sj,{
                  isDisabled:!eC&&en,
                  children:[!(null==w?void 0:w.ruleBasedSessionRecording)&&(0,n.jsx)(sC,{
                    children:(0,n.jsxs)(sD,{
                      children:[(0,n.jsx)(so,{
                        name:"excludeShortSession",
                        valuePropName:"checked",
                        children:(0,n.jsx)(ny.default,{
                          checked:G,
                          disabled:th
                        })
                      }),(0,n.jsxs)(s_,{
                        children:[(0,n.jsx)(sP,{
                          children:"Exclude short sessions"
                        }),(0,n.jsx)(sR,{
                          children:"Don`t capture sessions shorter than 5 seconds"
                        })]
                      })]
                    })
                  }),(null==w?void 0:w.sessionPercentageToRecord)!==0&&!!en&&(0,n.jsxs)(sC,{
                    children:[(0,n.jsxs)(s_,{
                      children:[(0,n.jsx)(sP,{
                        children:"Random sampling"
                      }),(0,n.jsx)(sR,{
                        children:"Random percentage of all sessions"
                      })]
                    }),(0,n.jsx)(sN,{
                      children:(0,n.jsx)(so,{
                        name:"sessionPercentageToRecord",
                        rules:[s2],
                        children:(0,n.jsx)(eL,{
                          disabled:!eC,
                          min:.1,
                          max:100,
                          step:.1,
                          precision:1,
                          formatter:e=>"".concat(e,"%"),
                          parser:e=>null==e?void 0:e.replace("%","")
                        })
                      })
                    })]
                  }),(null==w?void 0:w.sessionPercentageToRecord)!==0&&(null==w?void 0:w.ruleBasedSessionRecording)!==0&&!te&&(0,n.jsx)(sS,{}),(null==w?void 0:w.ruleBasedSessionRecording)!==0&&!te&&(0,n.jsxs)(n.Fragment,{
                    children:[(0,n.jsx)(sC,{
                      children:(0,n.jsxs)(s_,{
                        children:[(0,n.jsx)(sP,{
                          children:"Session data capture rules"
                        }),(0,n.jsx)(sR,{
                          children:"Only capture sessions that match the following criteria."
                        })]
                      })
                    }),(0,n.jsx)(sk,{
                      children:(0,n.jsx)(sA,{
                        children:(0,n.jsx)(rG,{
                          form:l,
                          commonField:"filtersDataSession",
                          defaultSelected:d,
                          disablefield:!eC,
                          environmentEnabled:es
                        })
                      })
                    })]
                  }),(null==w?void 0:w.dailySessionLimitFeature)&&(null==w?void 0:w.dailySessionLimitFeature)!==0&&!te?(0,n.jsxs)(n.Fragment,{
                    children:[(0,n.jsx)(sS,{}),(0,n.jsxs)(sC,{
                      children:[(0,n.jsxs)(sD,{
                        children:[(0,n.jsx)(sJ,{
                          name:"sessionsPerDay",
                          valuePropName:"checked",
                          noStyle:!0,
                          children:(0,n.jsx)(ny.default,{
                            disabled:th
                          })
                        }),(0,n.jsxs)(s_,{
                          children:[(0,n.jsx)(sP,{
                            children:"Daily session limit"
                          }),(0,n.jsxs)(sR,{
                            children:["Maximum number of sessions to record per day. ",(0,n.jsx)("br",{}),"(Monthly session limits: ",el,")"]
                          })]
                        })]
                      }),(0,n.jsx)(sN,{
                        children:(0,n.jsx)(so,{
                          name:"sessionsPerDay_customValue",
                          rules:[{
                            required:eb,
                            message:"Value required"
                          },s1],
                          children:(0,n.jsx)(eL,{
                            max:el,
                            disabled:!1
                          })
                        })
                      })]
                    })]
                  }):null]
                })]
              }),(0,n.jsxs)(eV,{
                "aria-hidden":te,
                children:[(0,n.jsx)(sx,{
                  children:(0,n.jsx)(sb,{
                    children:"Data consumption"
                  })
                }),(0,n.jsxs)(sj,{
                  isDisabled:!eC,
                  children:[(0,n.jsxs)(sC,{
                    children:[(0,n.jsxs)(s_,{
                      children:[(0,n.jsx)(sP,{
                        children:"Upload videos on"
                      }),(0,n.jsx)(sR,{
                        children:'Select "Wi-Fi only" to avoid consuming the users’ cellular data.'
                      })]
                    }),(0,n.jsx)(sN,{
                      children:(0,n.jsx)(so,{
                        name:"uploadNetwork",
                        noStyle:!0,
                        children:(0,n.jsx)(eK,{
                          disabled:!eC,
                          children:sQ.map(e=>(0,n.jsx)(sX,{
                            value:null==e?void 0:e.value,
                            label:null==e?void 0:e.label,
                            children:(0,n.jsx)("div",{
                              children:null==e?void 0:e.label
                            })
                          },null==e?void 0:e.value))
                        })
                      })
                    })]
                  }),1===ev&&(0,n.jsxs)(n.Fragment,{
                    children:[(0,n.jsx)(sS,{}),(0,n.jsx)(sC,{
                      children:(0,n.jsxs)(sD,{
                        children:[(0,n.jsx)(sJ,{
                          name:"mobileDataDataOnly",
                          valuePropName:"checked",
                          noStyle:!0,
                          children:(0,n.jsx)(ny.default,{
                            disabled:!eC||th
                          })
                        }),(0,n.jsxs)(s_,{
                          children:[(0,n.jsx)(sP,{
                            children:"Allow uploading session data on cellular"
                          }),(0,n.jsx)(sR,{
                            children:"When this option is turned on sessions will be uploaded with mobile data or wifi but videos will only be uploaded with a wifi connection."
                          })]
                        })]
                      })
                    })]
                  }),(0,n.jsx)(sS,{}),(0,n.jsxs)(sC,{
                    children:[(0,n.jsx)(sD,{
                      children:(0,n.jsxs)(s_,{
                        children:[(0,n.jsx)(sP,{
                          children:"Limit cellular data consumption to"
                        }),(0,n.jsx)(sR,{
                          children:"Monthly limit of cellular data per device that could be used to upload sessions and videos. If the limit is reached, data will be uploaded only through Wi-Fi."
                        })]
                      })
                    }),(0,n.jsx)(sN,{
                      children:(0,n.jsx)(sJ,{
                        name:"mobileDataLimit",
                        rules:[{
                          required:!0,
                          message:"Value required"
                        },s1],
                        children:(0,n.jsx)(eL,{
                          formatter:e=>"".concat(e,"MB"),
                          parser:e=>e.replace("MB",""),
                          disabled:!eC
                        })
                      })
                    })]
                  })]
                })]
              }),(0,n.jsxs)(eV,{
                "aria-hidden":!te,
                children:[(0,n.jsx)(sx,{
                  children:(0,n.jsx)(sb,{
                    children:"Additional setting"
                  })
                }),(0,n.jsxs)(sj,{
                  children:[(0,n.jsx)(sC,{
                    children:(0,n.jsx)(s_,{
                      children:(0,n.jsx)(sR,{
                        children:"Track screen visits based on:"
                      })
                    })
                  }),(0,n.jsx)(so,{
                    name:"urlChange",
                    noStyle:!0,
                    children:(0,n.jsx)(ek.default,{
                      disabled:!eC,
                      children:sH.map(e=>(0,n.jsx)(sX,{
                        value:null==e?void 0:e.value,
                        label:null==e?void 0:e.label,
                        children:(0,n.jsx)("div",{
                          children:null==e?void 0:e.label
                        })
                      },null==e?void 0:e.value))
                    })
                  })]
                })]
              }),(0,n.jsxs)(eV,{
                "aria-hidden":te,
                children:[(0,n.jsx)(sx,{
                  children:(0,n.jsx)(sb,{
                    children:"Additional settings"
                  })
                }),(0,n.jsxs)(sj,{
                  isDisabled:!eC,
                  children:[0!==eo&&(0,n.jsx)(sC,{
                    children:(0,n.jsxs)(sD,{
                      children:[(0,n.jsx)(so,{
                        name:"nativeScreenCapture",
                        valuePropName:"checked",
                        noStyle:!0,
                        children:(0,n.jsx)(ny.default,{
                          disabled:!eC||th
                        })
                      }),(0,n.jsx)(s_,{
                        children:(0,n.jsx)(sP,{
                          children:"Capture native screens on iOS"
                        })
                      })]
                    })
                  }),(0,n.jsx)(sC,{
                    children:(0,n.jsxs)(sD,{
                      children:[(0,n.jsx)(so,{
                        name:"isFragmentEnabled",
                        valuePropName:"checked",
                        noStyle:!0,
                        children:(0,n.jsx)(ny.default,{
                          disabled:!eC||th
                        })
                      }),(0,n.jsxs)(s_,{
                        children:[(0,n.jsx)(sP,{
                          children:"Auto tag screen fragments on Android"
                        }),(0,n.jsx)(l_.Z,{
                          type:"info",
                          content:"Supported from Android SDK version 3.6.2 onwards.",
                          marginTop:8
                        })]
                      })]
                    })
                  }),(0,n.jsx)(sS,{}),(0,n.jsx)(sC,{
                    children:(0,n.jsxs)(sD,{
                      children:[(0,n.jsx)(so,{
                        noStyle:!0,
                        children:(0,n.jsx)(ny.default,{
                          checked:J,
                          disabled:!eC||th,
                          onChange:e=>{
                            let{
                              checked:t
                            }=e.target;
                            X(t),
                            e.target&&Q(!0),
                            t||E(["rageTapIgnoreSetting"])
                          }
                        })
                      }),(0,n.jsxs)(s_,{
                        children:[(0,n.jsx)(sE,{
                          children:"Don't auto-tag gestures as rage taps on the following screens"
                        }),(0,n.jsx)(sJ,{
                          name:"rageTapIgnoreSetting",
                          rules:[{
                            required:J,
                            message:"Please select screen"
                          }],
                          children:(0,n.jsx)(rk.Z,{
                            defaultValues:(null===(e=N("rageTapIgnoreSetting"))||void 0===e?void 0:e.map(e=>({
                              value:e,
                              label:eO(e),
                              key:e
                            })))||[],
                            attribute:"screen",
                            placeholder:"Select screen",
                            disabled:!eC,
                            handleSelect:e=>{
                              M([{
                                name:"rageTapIgnoreSetting",
                                value:null==e?void 0:e.map(e=>e.value),
                                touched:!0
                              }]),
                              E(["rageTapIgnoreSetting"])
                            }
                          })
                        })]
                      })]
                    })
                  }),(0,n.jsx)(sC,{
                    children:(0,n.jsxs)(sD,{
                      children:[(0,n.jsx)(so,{
                        noStyle:!0,
                        valuePropName:"checked",
                        children:(0,n.jsx)(ny.default,{
                          checked:G,
                          disabled:!eC||th,
                          onChange:e=>{
                            let{
                              checked:t
                            }=e.target;
                            $(t),
                            e.target&&Q(!0),
                            t||E(["activitiesToIgnore"])
                          }
                        })
                      }),(0,n.jsxs)(s_,{
                        children:[(0,n.jsx)(sE,{
                          children:"Don’t auto-detect the following screens"
                        }),(0,n.jsx)(sJ,{
                          name:"activitiesToIgnore",
                          rules:[{
                            required:G,
                            message:"Please select screen"
                          }],
                          children:(0,n.jsx)(rk.Z,{
                            filterOptionData:[],
                            defaultValues:(null===(t=N("activitiesToIgnore"))||void 0===t?void 0:t.map(e=>({
                              value:e,
                              label:eO(e),
                              key:e
                            })))||[],
                            attribute:"screen",
                            placeholder:"Select screen",
                            disabled:!eC,
                            handleSelect:e=>{
                              M([{
                                name:"activitiesToIgnore",
                                value:null==e?void 0:e.map(e=>e.value),
                                touched:!0
                              }]),
                              E(["activitiesToIgnore"])
                            }
                          })
                        })]
                      })]
                    })
                  }),(null==w?void 0:w.captureAppLog)!==0&&(0,n.jsx)(sC,{
                    children:(0,n.jsxs)(sD,{
                      children:[(0,n.jsx)(so,{
                        name:"recordAppLog",
                        noStyle:!0,
                        valuePropName:"checked",
                        children:(0,n.jsx)(ny.default,{
                          disabled:!eC||th
                        })
                      }),(0,n.jsxs)(s_,{
                        children:[(0,n.jsx)(sP,{
                          children:"Record app logs"
                        }),(0,n.jsx)(sR,{
                          children:"Please, exclude any sensitive information from your Logcat or Console prior to enabling AppLogs."
                        }),(0,n.jsx)(l_.Z,{
                          type:"info",
                          content:"Recording app logs for iOS is only supported from iOS SDK version 3.4.5 onwards.",
                          marginTop:8
                        })]
                      })]
                    })
                  })]
                })]
              })]
            }),te&&(0,n.jsx)(eP,{
              children:(0,n.jsxs)(eV,{
                children:[(0,n.jsx)(sg,{
                  children:(0,n.jsxs)(sb,{
                    children:[(0,n.jsxs)("span",{
                      children:["Select authorized domains/subdomains for data-capture ",(0,n.jsx)("span",{
                        style:{
                          textTransform:"capitalize"
                        },
                        children:"(Optional)"
                      })]
                    }),(0,n.jsx)(sR,{
                      children:"Specify domains and subdomains if you want to restrict session recording. Only sessions from the listed domains (that also have the integration code) will be captured. If no domains are added, all sessions will be recorded by default."
                    })]
                  })
                }),(0,n.jsxs)(sj,{
                  isDisabled:!eC,
                  children:[(0,n.jsx)(sC,{
                    children:(0,n.jsxs)(s_,{
                      children:[(0,n.jsx)(sE,{
                        children:"Add new URL"
                      }),(0,n.jsx)(so,{
                        name:"allowedDomains"
                      }),(0,n.jsx)(so,{
                        children:(0,n.jsx)(eW,{
                          mode:"tags",
                          open:!1,
                          placeholder:"Enter URL to add",
                          showSearch:!1,
                          value:tg,
                          onChange:tm
                        })
                      }),(0,n.jsx)(sR,{
                        children:"Please enter a valid URL in the format: https://www.example.com"
                      })]
                    })
                  }),(0,n.jsx)(sC,{
                    "aria-hidden":!ez.length,
                    children:(0,n.jsxs)(s_,{
                      children:[(0,n.jsx)(sE,{
                        children:"Allowed domains / subdomains"
                      }),(0,n.jsx)(eY,{
                        children:(ts||[]).map((e,t)=>(0,n.jsxs)(eG,{
                          children:[(0,n.jsx)("span",{
                            children:e
                          }),(0,n.jsx)(e$,{
                            type:"button",
                            variant:"ghost",
                            onClick:tv(t),
                            children:"Remove"
                          })]
                        },t))
                      })]
                    })
                  })]
                })]
              })
            }),(0,n.jsxs)(eP,{
              "aria-hidden":te,
              children:[(0,n.jsxs)(eB,{
                children:[(0,n.jsxs)(sg,{
                  children:[(0,n.jsx)(sb,{
                    children:"Video recording"
                  }),(0,n.jsxs)(sw,{
                    children:[(0,n.jsx)(sZ,{
                      children:eI?"Enabled":"Disabled"
                    }),(0,n.jsxs)(eR,{
                      placement:"topRight",
                      title:eC?void 0:"Session data capture must be enabled to record videos",
                      children:[(0,n.jsx)(sJ,{
                        name:"videoRecording",
                        valuePropName:"checked",
                        children:(0,n.jsx)(o7.Z,{
                          onChange:()=>{
                            R({
                              filter:e9
                            })
                          },
                          disabled:!eC||!ea
                        })
                      }),ea?(0,n.jsx)(n.Fragment,{
                        children:" "
                      }):(0,n.jsx)(sB,{
                        "aria-hidden":!0,
                        onClick:()=>et(!0)
                      })]
                    })]
                  })]
                }),(0,n.jsxs)(sj,{
                  isDisabled:tp,
                  children:[(0,n.jsxs)(sC,{
                    children:[(0,n.jsxs)(s_,{
                      children:[(0,n.jsx)(sP,{
                        children:"Video recording quality"
                      }),(0,n.jsx)(sR,{
                        children:"Choose a lower resolution to save data."
                      })]
                    }),(0,n.jsx)(sN,{
                      children:(0,n.jsx)(so,{
                        name:"videoQuality",
                        noStyle:!0,
                        children:(0,n.jsx)(eK,{
                          disabled:tp,
                          children:sq.map(e=>(0,n.jsx)(sX,{
                            value:null==e?void 0:e.value,
                            label:null==e?void 0:e.label,
                            children:(0,n.jsx)("div",{
                              children:null==e?void 0:e.label
                            })
                          },null==e?void 0:e.value))
                        })
                      })
                    })]
                  }),(0,n.jsx)(sS,{}),(0,n.jsxs)(sC,{
                    children:[(0,n.jsxs)(sD,{
                      children:[(0,n.jsx)(sJ,{
                        name:"maxOfflineVideos",
                        noStyle:!0,
                        valuePropName:"checked",
                        children:(0,n.jsx)(ny.default,{
                          disabled:tp||th
                        })
                      }),(0,n.jsxs)(s_,{
                        children:[(0,n.jsx)(sP,{
                          children:"Limit offline recorded videos per device to"
                        }),(0,n.jsx)(sR,{
                          children:"Maximum number of videos recorded offline per device."
                        })]
                      })]
                    }),(0,n.jsx)(sN,{
                      children:(0,n.jsx)(so,{
                        name:"maxOfflineVideos_customValue",
                        rules:[{
                          required:ey,
                          message:"Value required"
                        },s1],
                        children:(0,n.jsx)(eL,{
                          disabled:tp
                        })
                      })
                    })]
                  }),!!(null==w?void 0:w.ruleBasedVideoRecording)&&(0,n.jsxs)(n.Fragment,{
                    children:[(0,n.jsx)(sS,{}),(0,n.jsx)(sC,{
                      children:(0,n.jsxs)(s_,{
                        children:[(0,n.jsx)(sP,{
                          children:"Video recording rules"
                        }),(0,n.jsx)(sR,{
                          children:"Only record videos that match the following criteria."
                        })]
                      })
                    }),(0,n.jsx)(sk,{
                      children:(0,n.jsx)(sA,{
                        children:(0,n.jsx)(rG,{
                          form:l,
                          commonField:"filter",
                          defaultSelected:m,
                          disablefield:tp,
                          renameScreen:eD,
                          environmentEnabled:es
                        })
                      })
                    })]
                  }),!!(null==w?void 0:w.ruleBasedVideoRecording)&&(0,n.jsxs)(n.Fragment,{
                    children:[(0,n.jsx)(sS,{}),(0,n.jsxs)(sC,{
                      children:[(0,n.jsxs)(sD,{
                        children:[(0,n.jsx)(sJ,{
                          name:"videosPerDevice",
                          noStyle:!0,
                          valuePropName:"checked",
                          children:(0,n.jsx)(ny.default,{
                            disabled:tp||th
                          })
                        }),(0,n.jsxs)(s_,{
                          children:[(0,n.jsx)(sP,{
                            children:"Limit recorded videos per device to"
                          }),(0,n.jsx)(sR,{
                            children:"Maximum number of videos to record per device."
                          })]
                        })]
                      }),(0,n.jsx)(sN,{
                        children:(0,n.jsx)(so,{
                          name:"videosPerDevice_customValue",
                          rules:[{
                            required:ex,
                            message:"Value required"
                          },s1],
                          children:(0,n.jsx)(eL,{
                            disabled:tp
                          })
                        })
                      })]
                    })]
                  })]
                })]
              }),(0,n.jsxs)(eB,{
                children:[(0,n.jsxs)(sy,{
                  children:[(0,n.jsx)("span",{
                    children:"Video recording privacy"
                  }),(0,n.jsx)(sR,{
                    children:ss
                  })]
                }),(0,n.jsxs)(sj,{
                  isDisabled:tp,
                  children:[(0,n.jsxs)(sC,{
                    children:[(0,n.jsx)(s_,{
                      children:(0,n.jsx)(sP,{
                        sublabel:"none",
                        children:"Default recording rules"
                      })
                    }),(0,n.jsx)(sN,{
                      children:(0,n.jsx)(so,{
                        name:["videoPrivacy","default","rule"],
                        noStyle:!0,
                        children:(0,n.jsx)(eK,{
                          showArrow:!0,
                          onChange:e=>{
                            "blur"===e&&M([{
                              name:["videoPrivacy","exceptions"],
                              value:L
                            }]),
                            M([{
                              name:["videoPrivacy","default","config","radius"],
                              value:10
                            }]),
                            "record"===e&&M([{
                              name:["videoPrivacy","exceptions"],
                              value:D
                            }]),
                            "occlude"===e&&M([{
                              name:["videoPrivacy","exceptions"],
                              value:U
                            }])
                          },
                          disabled:tp,
                          children:sY.map(e=>(0,n.jsx)(sX,{
                            value:null==e?void 0:e.value,
                            label:null==e?void 0:e.label,
                            children:(0,n.jsx)("div",{
                              children:null==e?void 0:e.label
                            })
                          },null==e?void 0:e.value))
                        })
                      })
                    })]
                  }),"blur"===ef&&(0,n.jsx)(sO,{
                    children:(0,n.jsx)(sU,{
                      name:["videoPrivacy","default","config","radius"],
                      rules:[{
                        required:!0,
                        message:"Please select blur radius"
                      }],
                      label:"Blur radius",
                      children:(0,n.jsx)(sL,{
                        controls:!1,
                        min:1,
                        addonAfter:"dp"
                      })
                    })
                  }),"blur"===ef&&(0,n.jsx)(rI,{
                    title:(0,n.jsxs)(n.Fragment,{
                      children:["Blur will apply to the app versions with the SDKs starting from 3.6.0. On the app versions with the earlier SDKs, the screens will be occluded."," ",(0,n.jsx)("a",{
                        target:"_blank",
                        href:"https://developer.uxcam.com/docs/screen-blurring",
                        rel:"noreferrer",
                        children:"Learn more"
                      })," ","about the SDKs supporting blur on different frameworks."]
                    })
                  }),(0,n.jsx)(sk,{
                    children:(0,n.jsxs)(sF,{
                      children:[(0,n.jsx)(sP,{
                        children:"Screen-specific rules"
                      }),(0,n.jsx)(sR,{
                        children:"Select screens that shouldn't be ".concat(sG[ef]," and specify a different rule.")
                      })]
                    })
                  }),(0,n.jsx)(sk,{
                    children:(0,n.jsx)(sA,{
                      children:(0,n.jsx)(r8,{
                        form:l,
                        rulesOptions:null==sW?void 0:sW.filter(e=>(null==e?void 0:e.value)!==ef),
                        updatedScreenName:eU,
                        disablefield:tp
                      })
                    })
                  }),(0,n.jsx)(sz,{}),(0,n.jsx)(sI,{
                    children:(0,n.jsxs)(sD,{
                      children:[(0,n.jsx)(sJ,{
                        name:"occludeAllTextFields",
                        valuePropName:"checked",
                        noStyle:!0,
                        children:(0,n.jsx)(ny.default,{
                          disabled:tp||th
                        })
                      }),(0,n.jsxs)(s_,{
                        children:[(0,n.jsx)(sM,{
                          children:"Occlude text input fields on all screens"
                        }),(0,n.jsx)(l_.Z,{
                          type:"info",
                          content:(0,n.jsx)(n.Fragment,{
                            children:'"Occlude text input fields on all screens" is currently not supported on Flutter and Jetpack compose.'
                          }),
                          marginTop:8
                        }),eg&&(0,n.jsxs)(n.Fragment,{
                          children:[(0,n.jsx)(eQ,{
                            children:(0,n.jsx)(sJ,{
                              name:"occludeTextFieldExceptions",
                              label:"Select screens where text input shouldn't be occluded.",
                              children:(0,n.jsx)(rk.Z,{
                                attribute:"screen",
                                placeholder:"Select screen",
                                disabled:tp,
                                defaultValues:(null===(i=N("occludeTextFieldExceptions"))||void 0===i?void 0:i.map(e=>({
                                  value:e,
                                  label:eO(e),
                                  key:e
                                })))||[],
                                handleSelect:e=>{
                                  M([{
                                    name:"occludeTextFieldExceptions",
                                    value:null==e?void 0:e.map(e=>e.value),
                                    touched:!0
                                  }]),
                                  E(["occludeTextFieldExceptions"])
                                }
                              })
                            })
                          }),(0,n.jsx)(rI,{
                            title:"Feature to show text input fields on certain screens is supported on SDK version 3.6.0 and later."
                          })]
                        })]
                      })]
                    })
                  }),(0,n.jsx)(sC,{
                    children:(0,n.jsxs)(sD,{
                      children:[(0,n.jsx)(so,{
                        name:"recordGestureForOccludedScreen",
                        valuePropName:"checked",
                        noStyle:!0,
                        children:(0,n.jsx)(ny.default,{
                          disabled:tp||th
                        })
                      }),(0,n.jsx)(s_,{
                        children:(0,n.jsx)(sM,{
                          children:"Record gestures on all occluded and blurred screens"
                        })
                      })]
                    })
                  })]
                })]
              })]
            })]
          }),tf&&(0,n.jsx)(sT,{
            collapse:z?1:0,
            className:"app-save-button",
            children:(0,n.jsxs)(sc,{
              children:[(0,n.jsx)(y.Z,{
                type:"link",
                onClick:()=>to(),
                children:"Discard changes"
              }),(0,n.jsx)(y.Z,{
                type:"primary",
                htmlType:"submit",
                loading:e2,
                children:"Save"
              })]
            })
          }),(0,n.jsx)(eT,{})]
        }),(0,n.jsx)(sp,{
          visible:B,
          footer:[],
          maskClosable:!1,
          closable:!1,
          maskStyle:{
            backgroundColor:"rgba(22, 30, 53, 0.3)"
          },
          children:(0,n.jsxs)(n.Fragment,{
            children:[(0,n.jsxs)(sf,{
              children:[(0,n.jsx)(sm,{
                children:"You have unsaved changes."
              }),(0,n.jsx)(sv,{
                children:"Are you sure you want to leave this page? Unsaved changes will be lost."
              })]
            }),(0,n.jsxs)(sd,{
              children:[(0,n.jsx)(sh,{
                type:"secondary",
                onClick:()=>ed(),
                children:"Leave without saving"
              },"link"),(0,n.jsx)(su,{
                form:"sessionRecordingForm",
                htmlType:"submit",
                type:"primary",
                loading:e2,
                children:"Save changes"
              },"submit")]
            })]
          })
        }),ee?(0,n.jsx)(ri.Z,{
          upgradePlan:ee,
          handleGetinTouch:()=>{
            (0,x.aL)()
          },
          handleUpgrade:()=>{
            et(!1),
            b(!0)
          },
          handleCancel:()=>et(!1),
          acceptText:j?"See pricing":"Request pricing"
        }):null]
      })
    };
    let s4=m.default.div.withConfig({
      componentId:"sc-749b61d9-0"
    })(["inset:0;margin:auto;position:absolute;"]),
    s5="yyyy-MM-dd'T'HH:mm:ss'Z'";
    var s6=()=>{
      var e;
      let t=(0,r.v9)(e=>e.urlReducer),
      i=(0,r.v9)(e=>e.currentOrgReducer),
      {
        currentOrgReducer:{
          orgId:l
        }
      }=(0,r.v9)(e=>e),
      s=(0,o.useRouter)(),
      c=null==i?void 0:null===(e=i.planLimit)||void 0===e?void 0:e.dataRetentionTime,
      d=(0,a.useMemo)(()=>{
        let e=new Date;
        return(0,a0.Z)((0,lH.Z)((0,W.pQ)(c,e)),s5)
      },[c]),
      p=(0,a0.Z)((0,lY.Z)(new Date),s5),
      u=(null==t?void 0:t.app)||(null==t?void 0:t.appId),
      {
        setInitialSessionData:h,
        setInitialVideoData:f,
        setFilterData:m
      }=ro(),
      v=["appSetting",u],
      g=(0,a.useMemo)(()=>["androidSDK",u],[u]),
      x=(0,a.useMemo)(()=>["iosSDK",u],[u]),
      b=(0,a.useMemo)(()=>"rename-screen-".concat(u),[u]),
      y=(0,I.ye)("app-setting-env"),
      j=(0,a.useMemo)(()=>y?rb:rb.filter(e=>(null==e?void 0:e.attribute)!=="environment"),[y]),
      {
        refetch:w,
        data:Z
      }=(0,A.E1)(b,u),
      C={
        attribute:"sdk_version",
        search:"",
        table:"session",
        dropdownLimit:501,
        appid:u,
        dateRange:{
          from:d,
          to:p
        },
        filter:[{
          attribute:"device_platform",
          operator:"equal",
          value:1,
          table:"session"
        }]
      },
      k={
        ...C,
        filter:[{
          attribute:"device_platform",
          operator:"equal",
          value:1,
          table:"session"
        }]
      },
      S={
        ...C,
        filter:[{
          attribute:"device_platform",
          operator:"equal",
          value:2,
          table:"session"
        }]
      },
      {
        data:z,
        refetch:_
      }=(0,A.vK)(g,k),
      {
        data:F,
        refetch:P
      }=(0,A.LN)(x,S),
      E=(0,a.useCallback)(()=>[...(null==F?void 0:F.length)?F:[],...(null==z?void 0:z.length)?z:[]],[F,z]),
      M=(0,a.useMemo)(()=>E(),[E]),
      {
        data:R,
        refetch:N,
        isLoading:D
      }=(0,A.hf)(v,u);
      (null==R?void 0:R.status)===404&&s.push("/error?errorStatus=".concat(R.status,"&errorMessage=").concat(R.message));
      let T=(0,a.useCallback)(()=>j.map(e=>({
        ...e,
        key:rc.includes(null==e?void 0:e.attribute)?"".concat(null==e?void 0:e.attribute,"-").concat(rs(null==e?void 0:e.title)?"is":"isNot"):"".concat(null==e?void 0:e.attribute),
        possibleValue:(null==e?void 0:e.attribute)==="sdkVersion"?M:(null==e?void 0:e.attribute)==="screen"?[]:null==e?void 0:e.possibleValue
      })),[M,j]),
      L=(0,a.useMemo)(()=>T(),[T]);
      return(0,a.useEffect)(()=>{
        m(L)
      },[L,m]),
      (0,a.useEffect)(()=>{
        h((null==R?void 0:R.filtersDataSession)||[]),
        f((null==R?void 0:R.filter)||[])
      },[R]),
      (0,a.useEffect)(()=>{
        u&&(w(),N(),P(),_())
      },[u]),
      (0,n.jsxs)(n.Fragment,{
        children:[!D&&(0,n.jsx)(s3,{}),D&&(0,n.jsx)(s4,{
          children:(0,n.jsx)(i6.Z,{})
        })]
      })
    },
    s7=()=>(0,n.jsx)(ra,{
      children:(0,n.jsx)(s6,{})
    }),
    s8=e=>(0,n.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:15,
      height:12,
      fill:"none",
      ...e,
      children:(0,n.jsx)("path",{
        fill:"currentColor",
        fillRule:"evenodd",
        d:"M3.48 0a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3h-8Zm3.471 8.878c1.475-.803 3.53-2.068 3.53-2.878 0-.809-2.055-2.074-3.53-2.878-.68-.37-1.47.148-1.47.943v3.87c0 .794.79 1.313 1.47.943Z",
        clipRule:"evenodd"
      })
    }),
    s9=i(4497),
    ce=i(18398),
    ct=i(27060),
    ci=i(32240),
    cn=e=>(0,n.jsx)("svg",{
      width:17,
      height:17,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        d:"m.828 16.13 3.863-.775a.307.307 0 0 0 .234-.222.32.32 0 0 0-.074-.307L1.394 11.38a.295.295 0 0 0-.517.147L.09 15.391a.628.628 0 0 0 .725.726l.013.013ZM15.136 1.07a3.224 3.224 0 0 0-4.552 0L2.365 9.29a.295.295 0 0 0 0 .43l4.122 4.134a.332.332 0 0 0 .443 0l8.219-8.219a3.224 3.224 0 0 0-.013-4.564Z",
        fill:"#5D97FF"
      })
    }),
    ca=i(77435),
    co=e=>(0,n.jsx)("svg",{
      width:16,
      height:17,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        d:"M13.085 5.13h-10a.333.333 0 0 0-.333.333v9.334a1.333 1.333 0 0 0 1.333 1.333h8a1.334 1.334 0 0 0 1.333-1.333V5.463a.333.333 0 0 0-.333-.333Zm-6.167 8.666a.5.5 0 1 1-1 0v-6a.5.5 0 1 1 1 0v6Zm3.334 0a.5.5 0 0 1-1 0v-6a.5.5 0 1 1 1 0v6ZM14.752 2.797h-3.167a.166.166 0 0 1-.167-.167v-.833A1.667 1.667 0 0 0 9.752.13H6.418a1.667 1.667 0 0 0-1.666 1.667v.833a.167.167 0 0 1-.167.167H1.418a.667.667 0 0 0 0 1.333h13.334a.667.667 0 1 0 0-1.333ZM6.085 2.63v-.833a.333.333 0 0 1 .333-.334h3.334a.333.333 0 0 1 .333.334v.833a.166.166 0 0 1-.167.167H6.252a.167.167 0 0 1-.167-.167Z",
        fill:"currentColor"
      })
    }),
    cl=JSON.parse('[{"attribute":"name","isSortable":false,"isVisible":true,"title":"Event name","type":"string"},{"attribute":"screenName","isSortable":false,"isVisible":true,"title":"Screen name","type":"string"},{"attribute":"elementId","isSortable":false,"isVisible":true,"title":"UI element ID","type":"string"},{"attribute":"viewName","isSortable":false,"isVisible":true,"title":"UI element name","type":"string"},{"attribute":"action","isSortable":false,"isVisible":true,"title":"Action","type":"string"}]');
    let cr=(0,ct.Cl)(),
    cs=m.default.span.withConfig({
      componentId:"sc-50f29e87-0"
    })(["span{max-width:90%;}"]),
    cc=m.default.div.withConfig({
      componentId:"sc-50f29e87-1"
    })(["display:flex;align-items:center;gap:12px;width:100%;button:last-of-type{color:#f4594c;}"]),
    cd=m.default.button.withConfig({
      componentId:"sc-50f29e87-2"
    })(["border:none;outline:none;background:transparent;cursor:pointer;margin:0;padding:0;height:24px;width:24px;display:flex;justify-content:center;align-items:center;"]),
    cp=(0,a.memo)(e=>{
      let{
        cell:t,
        row:i
      }=e,
      {
        getValue:o
      }=t,
      {
        original:l
      }=i,
      {
        setCurrentAction:r,
        setManagePopupOpen:s,
        setDeletePopupOpen:c,
        setScreenEventModalOpen:d,
        setDeleteScreenEventPopupOpen:p,
        setDuplicateEventModalOpen:u
      }=(0,lw.Z)(),
      h=(0,a.useCallback)(e=>{
        "Screen"===e.eventType?r({
          name:e.name,
          type:"smart_screenvisit_event",
          description:e.description||"",
          id:e.nceId,
          eventType:e.eventType,
          createdByName:e.createdByName,
          createdOn:e.createdOn,
          props:{
            activityName:e.screenName
          }
        }):r({
          name:e.name,
          type:"smart_gesture_event",
          description:e.description||"",
          id:e.nceId,
          screenName:e.screenName,
          eventType:e.eventType,
          createdByName:e.createdByName,
          createdOn:e.createdOn,
          props:{
            category:e.category,
            gestureType:void 0!==e.gestureType?ce.Nf[e.gestureType]:void 0,
            idString:e.elementId,
            viewName:e.viewName,
            viewType:void 0!==e.viewType?ce.Tu[e.viewType]:void 0,
            viewTypeId:e.viewTypeId
          }
        }),
        u(!0)
      },[r,u]),
      f=(0,a.useCallback)(e=>{
        "Screen"===e.eventType?(r({
          name:e.name,
          type:"smart_screenvisit_event",
          description:e.description||"",
          id:e.nceId,
          eventType:e.eventType,
          createdByName:e.createdByName,
          createdOn:e.createdOn,
          props:{
            activityName:e.screenName
          }
        }),p(!0)):(r({
          name:e.name,
          type:"smart_gesture_event",
          description:e.description||"",
          id:e.nceId,
          screenName:e.screenName,
          eventType:e.eventType,
          createdByName:e.createdByName,
          createdOn:e.createdOn,
          props:{
            category:e.category,
            gestureType:void 0!==e.gestureType?ce.Nf[e.gestureType]:void 0,
            idString:e.elementId,
            viewName:e.viewName,
            viewType:void 0!==e.viewType?ce.Tu[e.viewType]:void 0,
            viewTypeId:e.viewTypeId
          }
        }),c(!0))
      },[r,c,p]),
      m=(0,a.useCallback)(e=>{
        "Screen"===e.eventType?(r({
          name:e.name,
          type:"smart_screenvisit_event",
          description:e.description||"",
          id:e.nceId,
          eventType:e.eventType,
          createdByName:e.createdByName,
          createdOn:e.createdOn,
          props:{
            activityName:e.screenName
          }
        }),d(!0)):(r({
          name:e.name,
          type:"smart_gesture_event",
          description:e.description||"",
          id:e.nceId,
          screenName:e.screenName,
          eventType:e.eventType,
          createdByName:e.createdByName,
          createdOn:e.createdOn,
          props:{
            category:e.category,
            gestureType:void 0!==e.gestureType?ce.Nf[e.gestureType]:void 0,
            idString:e.elementId,
            viewName:e.viewName,
            viewType:void 0!==e.viewType?ce.Tu[e.viewType]:void 0,
            viewTypeId:e.viewTypeId
          }
        }),s(!0))
      },[r,s,d]);
      return"action"===t.column.id?(0,n.jsxs)(cc,{
        children:[(0,n.jsx)(j.Z,{
          title:"Edit event",
          children:(0,n.jsx)(cd,{
            type:"button",
            onClick:e=>{
              e.stopPropagation(),
              m(l)
            },
            children:(0,n.jsx)(cn,{})
          })
        }),(0,n.jsx)(j.Z,{
          title:"Duplicate event",
          children:(0,n.jsx)(cd,{
            type:"button",
            onClick:e=>{
              e.stopPropagation(),
              h(l)
            },
            children:(0,n.jsx)(ca.Z,{})
          })
        }),(0,n.jsx)(j.Z,{
          title:"Delete event",
          children:(0,n.jsx)(cd,{
            type:"button",
            onClick:e=>{
              e.stopPropagation(),
              f(l)
            },
            children:(0,n.jsx)(co,{})
          })
        })]
      }):(0,n.jsx)(cs,{
        children:(0,ci.dl)(o())
      })
    }),
    cu=m.default.div.withConfig({
      componentId:"sc-c0fd537e-0"
    })(["display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"]),
    ch=m.default.button.withConfig({
      componentId:"sc-c0fd537e-1"
    })(["padding:",";margin-right:",";border:none;font-size:",";line-height:",";color:",";border-radius:6px;background-color:",";font-weight:500;display:flex;align-items:center;cursor:pointer;transition:all 0.2s ease-in-out;svg{margin-right:",";}&:hover{background-color:",";color:",";}"],v.r.spacing(1,1.5),v.r.spacing(0),v.r.fontSize(1.4),v.r.fontSize(1.7),v.r.colors.primary500.toString(),v.r.colors.primary10.toString(),v.r.spacing(.75),v.r.colors.primary500.toString(),v.r.colors.primarySnow.toString()),
    cf=m.default.div.withConfig({
      componentId:"sc-c0fd537e-2"
    })(["height:100%;display:flex;flex-direction:column;position:relative;"]),
    cm=m.default.div.withConfig({
      componentId:"sc-c0fd537e-3"
    })(["overflow-y:auto;height:100%;position:relative;table{width:99.6% !important;}"]);
    var cv=(0,a.memo)(()=>{
      var e;
      let{
        manageListPage:t,
        setShowNoCodeEventsTutorial:i,
        setManageListPage:o
      }=(0,lw.Z)(),
      {
        currentAppReducer:l
      }=(0,r.v9)(e=>e),
      {
        setCurrentAction:s,
        setManagePopupOpen:c,
        setScreenEventModalOpen:d
      }=(0,lw.Z)(),
      {
        pagination:p,
        setPagination:u
      }=(0,oZ.h)(),
      h=null==l?void 0:l._id,
      f=(0,a.useMemo)(()=>({
        appid:h,
        filters:[],
        date_range:{
          attribute:"upload_time",
          operator:"between_dates",
          value:{
            lower:"2023-04-08T10:16:26.366Z",
            upper:"2023-05-08T10:16:26.366Z"
          }
        },
        orderBy:[{
          sortName:"name",
          sortOrder:"desc"
        }],
        page:t
      }),[h,t]),
      m=(0,a.useCallback)(()=>{
        if(h)return(0,s9.Hs)(f)
      },[h,f]),
      {
        isLoading:v,
        isFetching:g,
        data:x,
        refetch:b
      }=(0,ei.useQuery)({
        queryKey:["manage-nocode-list"],
        queryFn:m,
        keepPreviousData:!0
      }),
      y=null==x?void 0:null===(e=x.data)||void 0===e?void 0:e.data,
      j=null==y?void 0:y.pagination,
      w=(0,a.useCallback)(()=>{
        i(!0)
      },[i]),
      Z=a.useMemo(()=>null==cl?void 0:cl.map(e=>{
        let{
          isVisible:t,
          title:i,
          attribute:n,
          isSortable:a
        }=e;
        return t?cr.accessor(n,{
          header:()=>i,
          cell:cp,
          enableSorting:a
        }):null
      }),[]);
      (0,a.useEffect)(()=>{
        b()
      },[b,t]),
      (0,a.useEffect)(()=>{
        p&&o(p.pageIndex)
      },[p,o]);
      let C=(0,a.useCallback)(e=>{
        "Screen"===e.eventType?(s({
          name:e.name,
          type:"smart_screenvisit_event",
          description:e.description||"",
          id:e.nceId,
          eventType:e.eventType,
          createdByName:e.createdByName,
          createdOn:e.createdOn,
          props:{
            activityName:e.screenName
          }
        }),d(!0)):(s({
          name:e.name,
          type:"smart_gesture_event",
          description:e.description||"",
          id:e.nceId,
          screenName:e.screenName,
          eventType:e.eventType,
          createdByName:e.createdByName,
          createdOn:e.createdOn,
          props:{
            category:e.category,
            gestureType:void 0!==e.gestureType?ce.Nf[e.gestureType]:void 0,
            idString:e.elementId,
            viewName:e.viewName,
            viewType:void 0!==e.viewType?ce.Tu[e.viewType]:void 0,
            viewTypeId:e.viewTypeId
          }
        }),c(!0))
      },[s,c,d]),
      k=(0,a.useMemo)(()=>{
        var e;
        return(null==y?void 0:null===(e=y.body)||void 0===e?void 0:e.map(e=>({
          ...e,
          onRowClick:e=>C(e)
        })))||[]
      },[null==y?void 0:y.body,C]);
      return(0,n.jsxs)(cf,{
        children:[(0,n.jsxs)(cu,{
          children:[(0,n.jsx)(l_.Z,{
            type:"info",
            content:(0,n.jsxs)(n.Fragment,{
              children:["Create and manage events without a single line of code. Click ",(0,n.jsx)("a",{
                href:"https://help.uxcam.com/hc/en-us/articles/24753425542297-What-are-smart-events",
                target:"_blank",
                rel:"noreferrer",
                children:"here"
              })," to know more."]
            })
          }),(0,n.jsxs)(ch,{
            onClick:w,
            children:[(0,n.jsx)(s8,{}),"Watch tutorial"]
          })]
        }),(0,n.jsx)(cm,{
          children:(0,n.jsx)(I.Fo,{
            children:(0,n.jsx)(I.S5,{
              columns:Z,
              data:k||[],
              resizeMode:"onChange",
              isLoading:v||g,
              pagination:{
                ...p,
                totalPagination:(null==j?void 0:j.pages)||1
              },
              setPagination:u
            })
          })
        })]
      })
    }),
    cg=i(94184),
    cx=i.n(cg),
    cb=e=>(0,n.jsx)("svg",{
      viewBox:"0 0 8 8",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        d:"M7.643.38 4.896 7.622 3.555 4.94l1.759-1.76-.472-.47-1.759 1.758L.401 3.127 7.643.38Z",
        fill:"#5D97FF"
      })
    }),
    cy=e=>(0,n.jsxs)("svg",{
      width:17,
      height:17,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,n.jsx)("circle",{
        cx:8.682,
        cy:8.537,
        r:7,
        fill:"#E8E8EB"
      }),(0,n.jsx)("path",{
        d:"M8.999 10.188h-.954c.004-.328.033-.596.088-.805.058-.212.152-.405.282-.58.13-.174.302-.372.517-.594.158-.16.301-.311.431-.451.133-.144.241-.298.323-.462.082-.167.123-.367.123-.6 0-.235-.043-.439-.128-.61a.878.878 0 0 0-.37-.394 1.19 1.19 0 0 0-.6-.139c-.197 0-.385.036-.563.108a.97.97 0 0 0-.43.333c-.11.147-.166.34-.17.58H6.6c.006-.387.102-.718.287-.995a1.82 1.82 0 0 1 .759-.636c.317-.147.673-.22 1.066-.22.434 0 .803.078 1.107.236.308.157.542.382.703.676.16.29.24.636.24 1.036 0 .308-.063.591-.189.851a3.265 3.265 0 0 1-.477.723c-.195.225-.401.44-.62.646-.188.174-.315.37-.38.59a2.475 2.475 0 0 0-.097.707Zm-.995 1.625a.56.56 0 0 1 .144-.39c.096-.105.234-.158.415-.158.185 0 .325.053.42.159a.56.56 0 0 1 .144.39.547.547 0 0 1-.143.379c-.096.106-.236.159-.42.159-.182 0-.32-.053-.416-.16a.547.547 0 0 1-.144-.379Z",
        fill:"#161E35",
        stroke:"#161E35",
        strokeWidth:.2
      })]
    });
    let cj=m.default.div.withConfig({
      componentId:"sc-143100eb-0"
    })(["color:#161E35;.mb-10{margin-bottom:10px;}.ant-form{border-right:0;.ant-row{display:flex;.ant-form-item-control-wrapper{width:65%;margin-left:10px;}}}.config-form-wrapper{color:#161E35;width:100%;min-width:600px;max-width:55vw;.main-form-container{width:100%;}.switch-div{margin:10px 0;.ant-switch{margin-left:10px;}.switch-label{font-size:12px;color:#161E35;font-weight:500;}}.issue-notification-title{font-size:12px;margin-bottom:16px;color:#161E35;strong{font-size:14px;display:inline-block;width:100%;}}.main-checkbox-label{color:#161E35;margin-bottom:24px;.ant-form-item-label{width:100%;text-align:left;font-weight:500;color:#161E35;}.ant-form-item-control-input{min-height:auto;}.ant-checkbox-group{margin-left:0px;color:#161E35;display:flex;gap:16px;label{font-weight:400;font-size:12px;padding:0 2px;margin-left:0px;color:#161E35 !important;&:last-child{margin-bottom:0px;}}}.message{margin-top:7px;font-size:12px;color:#161E35;}.ant-form-item-control-input-content{input{height:28px;line-height:34px;color:#161E35;border-color:#D0D2D7;}}.ant-form-item-label > label{color:#161E35;}}.ant-form-item-required:before{position:absolute;top:5px;right:11px;}.ant-form-item-label>label:after{margin:0 8px 0 10px;}.ant-form-item-control{.ant-form-item-children{.message{font-size:11px;font-weight:500;color:#161E35;}}}.ant-form-item:nth-child(2){.ant-form-item-control{line-height:25px;}}.btn-group{margin-left:140px;.ant-btn-primary{height:30px;text-transform:inherit;font-weight:500;}.ant-btn-secondary{margin-left:10px;color:#161E35;font-size:12px;font-weight:500;border-color:#C0CAD0;}}.message{font-size:12px;color:#161E35;border:0;background-color:transparent;display:block;margin:0;padding:0;height:auto;}.btn-wrapper{display:flex;margin-top:20px;.ant-btn{margin-right:10px;}}}.config-btn-wrapper{display:flex;align-items:center;justify-content:center;.active{color:#161E35;background:#fff;border:1px solid #161E35;}}.ant-form{.ant-row{display:flex;.ant-form-item-control-wrapper{width:65%;}}}.config-form-wrapper{color:#161E35;.switch-div{margin:10px 0;.ant-switch{margin-left:10px;}.switch-label{font-size:12px;color:#161E35;font-weight:400;}}.ant-btn{height:32px;}.save-btn{margin-left:100px;}.ant-form-horizontal .ant-form-item-control{min-width:inherit;}}.config-btn-wrapper{display:flex;align-items:center;justify-content:center;.active{color:#161E35;background:#fff;border:1px solid #161E35;}}"]),
    cw=m.default.div.withConfig({
      componentId:"sc-143100eb-1"
    })([".ant-alert-info{background:rgba(93,151,255,0.08);font-size:12px;border-radius:4px;width:100%;border:none;height:40px;margin-top:4px;margin-bottom:18px;a{text-decoration:none;color:#5D97FF;}.btn-wrapper .ant-btn{height:40px;align-items:center;}}"]),
    cZ=m.default.div.withConfig({
      componentId:"sc-143100eb-2"
    })(["display:flex;width:100%;.issue-checkbox-group-container{display:flex;flex-direction:column;min-width:250px;flex-basis:fit-content;.radio-label{margin-bottom:0px;}.radio-label,.ant-form .ant-row,.ant-form-item-control-input,.ant-form-item-control-input-content{height:100%;}.ant-checkbox-group{height:100%;display:flex;flex-direction:column;gap:20px;padding:0 2px;label{margin-top:2px;width:max-content;}.checkbox-container:nth-child(1){flex:1;}.checkbox-container:nth-child(2){height:80px;margin:0;}}}.issue-form-container{display:flex;flex-direction:column;gap:20px;width:100%;.form-container{display:flex;flex-direction:column;.ant-form-item-label label{&:after{content:'';}&:before{line-height:2;}}.label-container{display:flex;gap:4px;align-items:center;margin-right:4px;svg{width:16px;height:16px;}}.ant-form-item{margin:0;}.main-checkbox-label{margin-bottom:0px;}.mt-16{margin-top:16px;}}.main-checkbox-label label{font-weight:400;}}"]),
    cC=m.default.button.withConfig({
      componentId:"sc-143100eb-3"
    })(["margin:0;padding:0;outline:none;border:none;background:transparent;display:flex;cursor:pointer;align-items:center;gap:4px;color:#5D97FF;font-size:11px;margin-top:4px;&:disabled{cursor:not-allowed;opacity:0.8;}svg{width:11px;height:11px;}&:hover{opacity:0.8;}"]),
    ck=m.default.a.withConfig({
      componentId:"sc-143100eb-4"
    })(["display:flex;tex-decoration:none;margin:0;margin-bottom:2px;padding:0;&:hover{svg{circle{fill :#5D97FF;}path{stroke:#fff;fill:#fff;}}}svg{width:16px;height:16px;}"]),
    cI={
      SLACKWEBHOOKURL:"https://api.slack.com/messaging/webhooks",
      KNOWLEDGEBASEURL:"https://help.uxcam.com/en/articles/10222576-slack-microsoft-teams-notifications-for-issues"
    },
    cS={
      TEAMSWEBHOOKURL:"https://support.microsoft.com/en-us/office/create-incoming-webhooks-with-workflows-for-microsoft-teams-8ae491c7-0394-4861-ba59-055e33f75498"
    };
    var cz=i(38878),
    c_=i(48403),
    cF=i.n(c_),
    cP=i(13979),
    cE=i(98777);
    let cM=e=>{
      let{
        appid:t
      }=e;
      return(0,ei.useQuery)(["issueConfig",t],()=>cE.be.get("".concat("https://pythonapi-prod.uxcam.com","/issue_notification/").concat(t,"/configuration"),{
        withCredentials:!0
      }).then(e=>e.data),{
        retry:!1
      })
    },
    cR=()=>{
      let e=(0,ei.useQueryClient)(),
      t=(0,r.I0)(),
      {
        urlReducer:{
          app:i
        }
      }=(0,r.v9)(e=>e),
      n=(0,a.useMemo)(()=>["issueConfig",i],[i]),
      {
        data:o
      }=cM({
        appid:i
      }),
      l=e=>e&&"#"===e[0]?e.slice(1):e,
      s=e=>{
        let t=[];
        return e.forEach(e=>{
          "Handled Exception"===e?t.push("exception"):"UI Freeze"===e?t.push("uifreeze"):t.push(e.toLowerCase())
        }),
        1===t.length?t[0]:t.join(", ")
      },
      c=(0,a.useMemo)(()=>{
        if(o){
          let{
            notification:e,
            slack:t,
            microsoft:i
          }=o.data.crashNotificationConfiguration,
          {
            isCrashNotificationEnabled:n
          }=o.data;
          return{
            isCrashNotificationEnabled:n,
            checkOptions:e,
            slack:{
              ...t,
              channelName:l(t.channelName)
            },
            microsoft:i,
            enabledIssueType:function(e,t){
              let i=[];
              return e&&!i.includes("slack")&&i.push("slack"),
              t&&!i.includes("microsoft")&&i.push("microsoft"),
              i
            }(t.isEnabled,i.isEnabled)
          }
        }
        return{
          isCrashNotificationEnabled:!1,
          checkOptions:[],
          slack:{
            webhookUrl:"",
            channelName:"",
            isEnabled:!1
          },
          microsoft:{
            webhookUrl:"",
            isEnabled:!1
          },
          enabledIssueType:[]
        }
      },[o]),
      d=e=>{
        cz.Z.success({
          message:e,
          duration:4
        })
      },
      p=e=>{
        cz.Z.error({
          message:e,
          duration:4
        })
      };
      return{
        testNotification:(0,ei.useMutation)({
          mutationFn:e=>cE.be.post("".concat("https://pythonapi-prod.uxcam.com","/issue_notification/test"),e,{
            withCredentials:!0
          }),
          onSuccess:(e,i)=>{
            let n=e.data.data,
            a=Object.keys(n).map(e=>{
              var t,
              i;
              return"".concat((null===(i=n[e])||void 0===i?void 0:null===(t=i.error)||void 0===t?void 0:t.message)||"")
            }).join("\n"),
            o=Object.keys(n).map(e=>"".concat(n[e].message||"")).join("\n");
            o.length&&d(o),
            a.length&&p(a),
            t((0,k.CW)(null,{
              eventName:"wa_test_issue_notification",
              track_type:"event",
              eventProperty:{
                notification_platform:i.notificationType,
                issue_type:s(i.notification),
                response:200===e.status?"success":"fail"
              }
            }))
          },
          onError:(e,i)=>{
            let n=e.response,
            a=n.data.error,
            o=Object.keys(a).map(e=>"".concat(cF()(e),": The URL provided is not a valid webhook URL.")).join("\n");
            cP.l.error(a,"Error on ".concat(i.notificationType," test notification")),
            422===n.status?p(o):p("Something went wrong! Please try again."),
            t((0,k.CW)(null,{
              eventName:"wa_test_issue_notification",
              track_type:"event",
              eventProperty:{
                notification_platform:i.notificationType,
                issue_type:s(i.notification),
                response:"fail"
              }
            }))
          }
        }),
        saveIssueConfig:(0,ei.useMutation)({
          mutationFn:e=>cE.be.post("".concat("https://pythonapi-prod.uxcam.com","/issue_notification/save"),e,{
            withCredentials:!0
          }),
          onSuccess:(i,a)=>{
            e.invalidateQueries(n);
            let o=i.data.data,
            l=Object.keys(o).map(e=>{
              var t,
              i;
              return"".concat((null===(i=o[e])||void 0===i?void 0:null===(t=i.error)||void 0===t?void 0:t.message)||"")
            }).join("\n"),
            r=Object.keys(o).map(e=>"".concat(cF()(e),": Issue notification configuration has been successfully updated.")).join("\n");
            Object.keys(o).length>1&&(r="Issue notification configuration has been successfully updated."),
            r.length>0&&d(r),
            l.length>3&&p(l),
            t((0,k.CW)(null,{
              eventName:"wa_issue_notification_configured",
              track_type:"event",
              eventProperty:{
                notification_platform:a.notificationType,
                issue_type:s(a.notification)
              }
            }))
          },
          onError:(e,t)=>{
            let i=e.response,
            n=i.data.error,
            a=Object.keys(n).map(e=>"".concat(cF()(e),": The URL provided is not a valid webhook URL.")).join("\n");
            cP.l.error(n,"Error on save ".concat(t.notificationType," issue notification")),
            422===i.status?p(a):p("Something went wrong! Please try again.")
          }
        }),
        issueConfig:c
      }
    },
    cN=m.default.div.withConfig({
      componentId:"sc-84549175-0"
    })(["display:flex;width:100%;max-width:724px;padding:12px;flex-direction:column;justify-content:center;align-items:flex-start;gap:8px;border-radius:4px;border:none;background-color:#FFF4EF;margin-top:16px;"]),
    cA=m.default.div.withConfig({
      componentId:"sc-84549175-1"
    })(["display:flex;align-items:center;gap:6px;"]),
    cD=m.default.svg.withConfig({
      componentId:"sc-84549175-2"
    })(["width:24px;height:24px;"]),
    cT=m.default.h2.withConfig({
      componentId:"sc-84549175-3"
    })(["font-size:13px;font-weight:600;line-height:normal;color:#161E35;margin:0;"]),
    cL=m.default.div.withConfig({
      componentId:"sc-84549175-4"
    })(["display:flex;padding-left:30px;flex-direction:column;align-items:flex-start;gap:8px;align-self:stretch;"]),
    cO=m.default.div.withConfig({
      componentId:"sc-84549175-5"
    })(["align-self:stretch;font-size:13px;font-weight:normal;line-height:25px;color:#161E35;"]),
    cU=m.default.a.withConfig({
      componentId:"sc-84549175-6"
    })(["color:#161E35;text-decoration:underline;&:hover{text-decoration:underline;}&:hover svg{transform:translateY(-1px) translateX(1px);fill:#1890ff;}"]),
    cV=m.default.svg.withConfig({
      componentId:"sc-84549175-7"
    })(["display:inline-block;margin-left:2px;vertical-align:middle;width:16px;height:16px;transition:transform 0.2s ease,fill 0.2s ease;"]),
    cB=m.default.div.withConfig({
      componentId:"sc-84549175-8"
    })(["display:flex;align-items:center;gap:8px;align-self:stretch;"]),
    cK=m.default.div.withConfig({
      componentId:"sc-84549175-9"
    })(["width:4px;height:42px;border-radius:2px;background-color:#A2A5AE;"]),
    cW=m.default.div.withConfig({
      componentId:"sc-84549175-10"
    })(["flex:1;font-size:13px;font-weight:normal;font-style:italic;line-height:25px;color:#454B5D;"]),
    cq=()=>(0,n.jsxs)(cN,{
      children:[(0,n.jsxs)(cA,{
        children:[(0,n.jsxs)(cD,{
          viewBox:"0 0 24 24",
          fill:"none",
          xmlns:"http://www.w3.org/2000/svg",
          children:[(0,n.jsx)("rect",{
            width:"24",
            height:"24",
            rx:"12",
            fill:"white"
          }),(0,n.jsx)("path",{
            fillRule:"evenodd",
            clipRule:"evenodd",
            d:"M12 4C13.9741 4 15.9931 4.57321 17.4322 5.77525C19.0536 7.12963 19.8727 9.30938 19.9862 11.4742C20.0998 13.6397 19.5146 15.9062 18.1809 17.4722C16.7203 19.1874 14.3242 19.9988 12 19.9988C9.67584 19.9988 7.27971 19.1874 5.81906 17.4722C4.48549 15.9062 3.90025 13.6397 4.01382 11.4742C4.12735 9.30938 4.94639 7.12963 6.56784 5.77525C8.0069 4.57321 10.0259 4 12 4ZM11.9999 7.62932C12.4733 7.62932 12.857 8.01305 12.857 8.4864V12.1886C12.857 12.662 12.4733 13.0457 11.9999 13.0457C11.5266 13.0457 11.1429 12.662 11.1429 12.1886V8.4864C11.1429 8.01305 11.5266 7.62932 11.9999 7.62932ZM11.9999 13.9849C12.4733 13.9849 12.857 14.3686 12.857 14.8419V15.5123C12.857 15.9856 12.4733 16.3693 11.9999 16.3693C11.5266 16.3693 11.1429 15.9856 11.1429 15.5123V14.8419C11.1429 14.3686 11.5266 13.9849 11.9999 13.9849Z",
            fill:"#FF955B"
          })]
        }),(0,n.jsx)(cT,{
          children:"Microsoft is deprecating Office 365 Connectors in December 2025"
        })]
      }),(0,n.jsxs)(cL,{
        children:[(0,n.jsxs)(cO,{
          children:[(0,n.jsxs)("span",{
            children:["Your current Teams webhook URL may stop working for issue notifications. To keep receiving them, update your webhook using"," "]
          }),(0,n.jsxs)(cU,{
            href:"https://support.microsoft.com/en-us/office/create-incoming-webhooks-with-workflows-for-microsoft-teams-8ae491c7-0394-4861-ba59-055e33f75498",
            target:"_blank",
            children:["Microsoft's new guidelines",(0,n.jsx)(cV,{
              viewBox:"0 0 16 16",
              fill:"none",
              xmlns:"http://www.w3.org/2000/svg",
              children:(0,n.jsx)("path",{
                fillRule:"evenodd",
                clipRule:"evenodd",
                d:"M5.23038 4.01571C4.83715 4.01571 4.51838 4.33449 4.51836 4.72773C4.51836 5.12097 4.83713 5.43974 5.23037 5.43974L9.55298 5.43972L4.22344 10.7693C3.94539 11.0473 3.94539 11.4981 4.22343 11.7762C4.5015 12.0542 4.95231 12.0542 5.23037 11.7762L10.5599 6.44664L10.5599 10.7692C10.5599 11.1625 10.8786 11.4812 11.2719 11.4813C11.6651 11.4812 11.9839 11.1625 11.9839 10.7693L11.9839 4.72772C11.9839 4.3345 11.6651 4.01573 11.2719 4.0157L5.23038 4.01571Z",
                fill:"currentColor"
              })
            })]
          })]
        }),(0,n.jsxs)(cB,{
          children:[(0,n.jsx)(cK,{}),(0,n.jsx)(cW,{
            children:"Note: The new workflow-based webhook doesn't support private channels. If you're using one, consider switching to a public channel."
          })]
        })]
      })]
    });
    var cQ=e=>{
      var t,
      i;
      let[o]=ew.Z.useForm(),
      l=(0,a.useRef)(null),
      s=(0,a.useRef)(null),
      {
        appId:c
      }=e,
      {
        saveIssueConfig:d,
        testNotification:p,
        issueConfig:u
      }=cR(),
      {
        checkOptions:h,
        slack:f,
        microsoft:m,
        enabledIssueType:v
      }=u,
      {
        webhookUrl:g,
        channelName:b,
        isEnabled:j
      }=f,
      {
        webhookUrl:w,
        isEnabled:Z
      }=m,
      {
        currentOrgReducer:C
      }=(0,r.v9)(e=>e),
      [,k]=(0,a.useState)({}),
      I=null==C?void 0:C.planFeature,
      S=h instanceof Array&&h.length<1,
      _=null==I?void 0:I.issueAnalytics,
      [P,E]=(0,a.useState)(!1),
      M=ew.Z.useWatch("issueNotificationType",o),
      R=ew.Z.useWatch("notification",o),
      N=ew.Z.useWatch("teamsWebhookUrl",o),
      A=ew.Z.useWatch("slackWebhookUrl",o),
      D=ew.Z.useWatch("channelname",o),
      T=e=>o.getFieldError(e).length>0,
      L=(0,a.useCallback)(()=>{
        var e,
        t,
        i;
        let n=o.getFieldsValue();
        if(T("channelname"))return!0;
        let a={
          notification:null===(e=n.notification)||void 0===e?void 0:e.sort(),
          slack:{
            webhookUrl:n.slackWebhookUrl,
            channelName:n.channelname,
            isEnabled:(null===(t=n.issueNotificationType)||void 0===t?void 0:t.includes("slack"))||!1
          },
          microsoft:{
            webhookUrl:n.teamsWebhookUrl,
            isEnabled:(null===(i=n.issueNotificationType)||void 0===i?void 0:i.includes("microsoft"))||!1
          }
        },
        l={
          notification:null==h?void 0:h.sort(),
          slack:{
            webhookUrl:g,
            channelName:b,
            isEnabled:j
          },
          microsoft:{
            webhookUrl:w,
            isEnabled:Z
          }
        };
        return lX()(a,l)
      },[o,h,g,b,j,w,Z,R]);
      (0,a.useEffect)(()=>{
        o.setFieldsValue({
          notification:h,
          slackWebhookUrl:g,
          teamsWebhookUrl:w,
          channelname:b,
          issueNotificationType:_&&v||[]
        }),
        L()
      },[u]),
      (0,a.useEffect)(()=>{
        E(S)
      },[S]),
      (0,a.useEffect)(()=>{
        k({})
      },[]);
      let O=e=>{
        let t=o.getFieldsValue(),
        i=t.channelname,
        n={
          appid:c,
          notificationType:e,
          ..."slack"===e&&{
            slack:{
              webhookUrl:t.slackWebhookUrl,
              channelName:i,
              isEnabled:M.includes("slack")
            }
          },
          ..."microsoft"===e&&{
            microsoft:{
              webhookUrl:t.teamsWebhookUrl,
              isEnabled:M.includes("microsoft")
            }
          },
          notification:t.notification
        };
        p.mutate(n)
      },
      U=(e,t)=>{
        let i=e.replace(/\s+/g,"-");
        if(/[^a-zA-Z0-9_-]/.test(i)){
          t("Channel names can’t contain spaces or punctuation. Use dashes to separate words.");
          return
        }
        o.setFieldsValue({
          channelname:i
        }),
        t()
      },
      V=(0,n.jsxs)("span",{
        children:["Get notified on tech issues of your apps. Learn more on the issue notifications"," ",(0,n.jsx)("a",{
          href:cI.KNOWLEDGEBASEURL,
          target:"_blank",
          rel:"noopener noreferrer",
          children:"here"
        })]
      }),
      B=(0,a.useCallback)(e=>(0,n.jsx)(ck,{
        href:"slack"===e?cI.SLACKWEBHOOKURL:cS.TEAMSWEBHOOKURL,
        target:"_blank",
        rel:"noopener noreferrer",
        children:(0,n.jsx)(cy,{})
      }),[]);
      return(0,n.jsx)(cj,{
        children:(0,n.jsxs)("div",{
          className:"config-form-wrapper",
          children:[!_&&(0,n.jsx)("div",{
            className:"mb-10",
            children:(0,n.jsx)(z.Z,{
              message:x.cr,
              type:"error",
              showIcon:!0
            })
          }),(0,n.jsx)(l_.Z,{
            type:"info",
            marginBottom:18,
            content:V
          }),(0,n.jsx)("div",{
            className:cx()({
              "disabled-overlay":!_
            }),
            children:(0,n.jsx)(aA.Z,{
              children:(0,n.jsx)("div",{
                className:"main-form-container",
                children:(0,n.jsxs)(ew.Z,{
                  form:o,
                  initialValues:{
                    issueNotificationType:M,
                    notification:h,
                    slackWebhookUrl:g||"",
                    teamsWebhookUrl:w||"",
                    channelname:(null==b?void 0:b.split("#")[1])||""
                  },
                  onFinish:()=>{
                    o.validateFields().then(e=>{
                      let t=e.channelname,
                      i=e.slackWebhookUrl||"",
                      n=e.teamsWebhookUrl||"",
                      a={
                        appid:c,
                        notificationType:M,
                        slack:{
                          webhookUrl:i,
                          channelName:t,
                          isEnabled:M.includes("slack")
                        },
                        microsoft:{
                          webhookUrl:n,
                          isEnabled:M.includes("microsoft")
                        },
                        notification:e.notification
                      };
                      d.mutate(a)
                    })
                  },
                  children:[(0,n.jsx)("div",{
                    className:"issue-notification-title",
                    children:(0,n.jsx)("strong",{
                      children:"Select an issue type"
                    })
                  }),(0,n.jsx)(ew.Z.Item,{
                    name:"notification",
                    className:"main-checkbox-label",
                    rules:[{
                      required:!1
                    }],
                    children:(0,n.jsxs)(ny.default.Group,{
                      className:"checkbox-label",
                      style:{
                        width:"100%"
                      },
                      onChange:e=>{
                        e.length<1?E(!0):E(!1)
                      },
                      children:[(0,n.jsx)(ny.default,{
                        disabled:!_,
                        value:"Crash",
                        children:"Crash"
                      }),(0,n.jsx)(ny.default,{
                        disabled:!_,
                        value:"UI Freeze",
                        children:"UI freeze"
                      }),(0,n.jsx)(ny.default,{
                        disabled:!_,
                        value:"Handled Exception",
                        children:"Exception"
                      })]
                    })
                  }),(0,n.jsx)("div",{
                    className:"issue-notification-title",
                    children:(0,n.jsx)("strong",{
                      children:"Configure the platform for issue notification"
                    })
                  }),(0,n.jsxs)(cZ,{
                    children:[(0,n.jsx)("div",{
                      className:"issue-checkbox-group-container",
                      children:(0,n.jsx)(ew.Z.Item,{
                        name:"issueNotificationType",
                        className:"radio-label",
                        rules:[{
                          required:!1,
                          message:"Please select a notification platform"
                        }],
                        children:(0,n.jsxs)(ny.default.Group,{
                          disabled:!_,
                          children:[(0,n.jsx)("span",{
                            className:"checkbox-container",
                            style:{
                              height:null===(t=s.current)||void 0===t?void 0:t.offsetHeight
                            },
                            children:(0,n.jsx)(ny.default,{
                              value:"slack",
                              children:"Slack"
                            })
                          }),(0,n.jsx)("span",{
                            className:"checkbox-container",
                            style:{
                              height:null===(i=l.current)||void 0===i?void 0:i.offsetHeight
                            },
                            children:(0,n.jsx)(ny.default,{
                              value:"microsoft",
                              children:"Microsoft Teams"
                            })
                          })]
                        })
                      })
                    }),(0,n.jsxs)("div",{
                      className:"issue-form-container",
                      children:[(0,n.jsxs)("div",{
                        ref:s,
                        className:"form-container",
                        children:[(0,n.jsx)(ew.Z.Item,{
                          label:(0,n.jsxs)("div",{
                            className:"label-container",
                            children:[(0,n.jsx)("span",{
                              children:"Slack webhook URL"
                            }),B("slack")]
                          }),
                          name:"slackWebhookUrl",
                          className:"main-checkbox-label",
                          rules:[{
                            required:(null==M?void 0:M.includes("slack"))||!1,
                            message:"Please enter webhook URL!"
                          }],
                          children:(0,n.jsx)(F.default,{
                            disabled:!_
                          })
                        }),(0,n.jsx)(ew.Z.Item,{
                          label:(0,n.jsx)("div",{
                            className:"label-container",
                            children:(0,n.jsx)("span",{
                              children:"Slack channel name"
                            })
                          }),
                          name:"channelname",
                          className:"main-checkbox-label mt-16",
                          rules:[{
                            required:(null==M?void 0:M.includes("slack"))||!1,
                            message:"Please enter channel name!"
                          },{
                            validator:(e,t,i)=>{
                              U(t,i)
                            }
                          }],
                          children:(0,n.jsx)(F.default,{
                            onChange:e=>{
                              let{
                                value:t
                              }=e.target;
                              !function(e){
                                let t=e.replace(/\s+/g,"-");
                                if(/[^a-zA-Z0-9_-]/.test(t)){
                                  o.setFields([{
                                    name:"channelname",
                                    value:t,
                                    errors:["Channel names can’t contain spaces or punctuation. Use dashes to separate words."],
                                    touched:!0
                                  }]);
                                  return
                                }
                                o.setFieldsValue({
                                  channelname:t
                                })
                              }(t)
                            },
                            disabled:!_
                          })
                        }),(0,n.jsxs)(cC,{
                          disabled:!_||!D||!A||p.isLoading||T("channelname"),
                          onClick:e=>{
                            e.preventDefault(),
                            O("slack")
                          },
                          children:[(0,n.jsx)(cb,{})," Send test notification"]
                        })]
                      }),(0,n.jsxs)("div",{
                        ref:l,
                        className:"form-container",
                        children:[(0,n.jsx)(ew.Z.Item,{
                          label:(0,n.jsxs)("div",{
                            className:"label-container",
                            children:[(0,n.jsx)("span",{
                              children:"Teams webhook URL"
                            }),B("teams")]
                          }),
                          name:"teamsWebhookUrl",
                          className:"main-checkbox-label",
                          rules:[{
                            required:(null==M?void 0:M.includes("microsoft"))||!1,
                            message:"Please enter webhook URL!"
                          }],
                          children:(0,n.jsx)(F.default,{
                            disabled:!_
                          })
                        }),(0,n.jsxs)(cC,{
                          disabled:!_||!N||p.isLoading,
                          onClick:e=>{
                            e.preventDefault(),
                            O("microsoft")
                          },
                          children:[(0,n.jsx)(cb,{})," Send test notification"]
                        }),w&&/^https:\/\/[A-Za-z0-9-]+\.webhook\.office\.com\/.*$/.test(w)&&(0,n.jsx)(cq,{})]
                      })]
                    })]
                  }),(0,n.jsx)("div",{
                    className:"btn-wrapper",
                    children:(0,n.jsx)(y.Z,{
                      disabled:!_||P||L()||d.isLoading,
                      type:"primary",
                      htmlType:"submit",
                      loading:d.isLoading,
                      children:"Save"
                    })
                  })]
                })
              })
            })
          })]
        })
      })
    },
    cH=e=>{
      let{
        appId:t
      }=e;
      return(0,n.jsx)(cw,{
        children:(0,n.jsx)(cQ,{
          appId:t
        })
      })
    },
    cY=i(39235),
    cG=i.n(cY),
    c$=i(9943),
    cJ=e=>(0,n.jsxs)("svg",{
      width:500,
      height:500,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,n.jsxs)("g",{
        clipPath:"url(#alerts-locked-illustration_svg__a)",
        children:[(0,n.jsx)("path",{
          fill:"#fff",
          d:"M0 0h500v500H0z"
        }),(0,n.jsxs)("g",{
          filter:"url(#alerts-locked-illustration_svg__b)",
          children:[(0,n.jsx)("rect",{
            x:15,
            y:38,
            width:371,
            height:307.565,
            rx:4.08,
            fill:"#fff"
          }),(0,n.jsx)("rect",{
            x:363.894,
            y:79.301,
            width:3.06,
            height:242.207,
            rx:1.53,
            fill:"#D9D9D9",
            fillOpacity:.3
          }),(0,n.jsx)("rect",{
            x:363.894,
            y:162.727,
            width:3.06,
            height:71.124,
            rx:1.53,
            fill:"#D9D9D9",
            fillOpacity:.85
          }),(0,n.jsx)("path",{
            d:"M38.74 64.098h1.121a2.587 2.587 0 0 1-.358 1.143 2.134 2.134 0 0 1-.856.784c-.368.192-.815.287-1.34.287-.404 0-.767-.071-1.09-.215a2.388 2.388 0 0 1-.829-.618 2.797 2.797 0 0 1-.529-.973c-.12-.38-.18-.804-.18-1.273v-.542c0-.47.062-.894.185-1.273.125-.38.304-.704.538-.973.233-.272.512-.48.838-.623a2.74 2.74 0 0 1 1.107-.215c.52 0 .959.096 1.317.287.36.191.637.456.834.793.2.338.323.725.368 1.161h-1.12a2.072 2.072 0 0 0-.198-.722 1.016 1.016 0 0 0-.44-.457c-.194-.107-.447-.161-.761-.161-.257 0-.481.048-.673.143a1.269 1.269 0 0 0-.48.422 2.03 2.03 0 0 0-.29.685 4.08 4.08 0 0 0-.095.924v.551c0 .329.029.628.086.896.06.266.149.495.268.686.123.192.278.34.467.444.188.105.413.157.676.157.32 0 .579-.05.776-.153.2-.101.35-.249.453-.443.104-.197.173-.438.206-.722Zm3.12-1.802v3.927h-1.08v-4.85h1.031l.05.923Zm1.484-.954-.009 1.004a2.798 2.798 0 0 0-.44-.036 1.36 1.36 0 0 0-.488.08.92.92 0 0 0-.57.574c-.05.138-.08.291-.089.462l-.246.018c0-.305.03-.588.09-.848s.149-.488.268-.685a1.38 1.38 0 0 1 .458-.462c.185-.11.398-.166.64-.166a1.33 1.33 0 0 1 .386.059Zm2.725 4.97c-.358 0-.683-.058-.973-.174a2.148 2.148 0 0 1-.735-.498 2.206 2.206 0 0 1-.461-.749 2.622 2.622 0 0 1-.162-.927v-.18c0-.38.056-.723.166-1.03.11-.308.265-.571.462-.79.197-.22.43-.39.7-.506.268-.116.56-.175.873-.175.347 0 .65.059.91.175.26.117.475.281.646.493.173.21.301.459.385.749.087.29.13.61.13.959v.462h-3.747v-.776h2.68v-.085a1.518 1.518 0 0 0-.116-.547.93.93 0 0 0-.319-.412c-.143-.105-.334-.157-.573-.157-.18 0-.34.039-.48.116a.95.95 0 0 0-.345.328 1.723 1.723 0 0 0-.215.52c-.048.2-.072.425-.072.676v.18c0 .212.029.409.085.591.06.18.147.336.26.47.114.135.251.241.413.32.16.074.345.111.55.111.26 0 .492-.052.696-.157.203-.104.38-.252.529-.443l.569.55a2.041 2.041 0 0 1-1.022.775 2.44 2.44 0 0 1-.834.131Zm5.518-1.062v-2.313a.991.991 0 0 0-.094-.448.66.66 0 0 0-.287-.291.981.981 0 0 0-.475-.104c-.177 0-.33.03-.458.09a.74.74 0 0 0-.3.242.584.584 0 0 0-.107.345H48.79c0-.19.046-.376.139-.555.092-.18.227-.34.403-.48.176-.14.387-.251.632-.332.245-.08.52-.12.825-.12.364 0 .687.06.968.183.284.123.507.308.668.556.164.245.246.553.246.923v2.156c0 .221.015.42.045.596.033.174.08.325.14.453v.072h-1.108a1.916 1.916 0 0 1-.12-.444 3.624 3.624 0 0 1-.041-.529Zm.157-1.977.009.668h-.776c-.2 0-.376.02-.529.058-.152.036-.28.09-.38.162a.701.701 0 0 0-.305.605c0 .128.03.246.09.354.059.105.145.187.26.247.116.06.256.09.42.09a1.188 1.188 0 0 0 .973-.471.731.731 0 0 0 .152-.381l.35.48a1.644 1.644 0 0 1-.184.394c-.086.14-.2.275-.34.403a1.692 1.692 0 0 1-1.161.43c-.317 0-.6-.063-.847-.188a1.506 1.506 0 0 1-.583-.515 1.337 1.337 0 0 1-.21-.74c0-.257.047-.484.143-.681.098-.2.242-.368.43-.502.191-.135.424-.236.7-.305.274-.072.588-.108.94-.108h.848Zm4.28-1.9v.789H53.29v-.79h2.734Zm-1.945-1.188h1.08v4.697c0 .15.021.265.063.346.045.077.106.13.184.157.077.026.168.04.273.04a2.208 2.208 0 0 0 .381-.04l.005.824c-.09.027-.195.051-.314.072-.117.02-.251.031-.404.031a1.58 1.58 0 0 1-.659-.13.97.97 0 0 1-.448-.434c-.107-.2-.161-.467-.161-.798v-4.765Zm4.917 6.127c-.359 0-.683-.058-.973-.174a2.148 2.148 0 0 1-.735-.498 2.206 2.206 0 0 1-.462-.749 2.622 2.622 0 0 1-.16-.927v-.18c0-.38.054-.723.165-1.03.11-.308.264-.571.462-.79.197-.22.43-.39.699-.506.269-.116.56-.175.874-.175.346 0 .65.059.91.175.26.117.475.281.645.493.173.21.302.459.386.749.086.29.13.61.13.959v.462H57.19v-.776h2.68v-.085a1.518 1.518 0 0 0-.117-.547.93.93 0 0 0-.318-.412c-.143-.105-.335-.157-.574-.157-.179 0-.339.039-.48.116a.95.95 0 0 0-.344.328 1.723 1.723 0 0 0-.215.52c-.048.2-.072.425-.072.676v.18c0 .212.028.409.085.591.06.18.146.336.26.47.114.135.25.241.412.32.162.074.345.111.552.111.26 0 .491-.052.694-.157.203-.104.38-.252.53-.443l.569.55c-.105.153-.241.3-.408.44-.168.138-.372.25-.614.336a2.44 2.44 0 0 1-.834.13Zm7.803-1.062v-2.313a.991.991 0 0 0-.094-.448.66.66 0 0 0-.287-.291.982.982 0 0 0-.475-.104c-.176 0-.328.03-.457.09a.738.738 0 0 0-.3.242.584.584 0 0 0-.108.345h-1.076c0-.19.047-.376.14-.555.092-.18.227-.34.403-.48.176-.14.387-.251.632-.332.245-.08.52-.12.824-.12.365 0 .688.06.969.183.284.123.506.308.668.556.164.245.246.553.246.923v2.156c0 .221.015.42.045.596.033.174.08.325.139.453v.072H66.96a1.916 1.916 0 0 1-.121-.444 3.623 3.623 0 0 1-.04-.529Zm.157-1.977.01.668h-.776c-.2 0-.377.02-.53.058-.151.036-.278.09-.38.162a.701.701 0 0 0-.305.605c0 .128.03.246.09.354a.63.63 0 0 0 .26.247c.116.06.257.09.421.09a1.188 1.188 0 0 0 .973-.471.733.733 0 0 0 .152-.381l.35.48a1.64 1.64 0 0 1-.184.394c-.087.14-.2.275-.34.403a1.693 1.693 0 0 1-1.162.43c-.316 0-.599-.063-.847-.188a1.506 1.506 0 0 1-.582-.515 1.337 1.337 0 0 1-.211-.74c0-.257.048-.484.143-.681.099-.2.242-.368.43-.502.192-.135.425-.236.7-.305.275-.072.588-.108.941-.108h.847Zm3.214-3.935v6.885h-1.085v-6.885h1.085Zm3.321 6.974c-.358 0-.683-.058-.972-.174a2.148 2.148 0 0 1-.735-.498 2.206 2.206 0 0 1-.462-.749 2.62 2.62 0 0 1-.162-.927v-.18c0-.38.056-.723.166-1.03.11-.308.265-.571.462-.79.197-.22.43-.39.7-.506.268-.116.56-.175.873-.175.347 0 .65.059.91.175.26.117.475.281.646.493.173.21.301.459.385.749.087.29.13.61.13.959v.462h-3.747v-.776h2.68v-.085a1.518 1.518 0 0 0-.116-.547.929.929 0 0 0-.319-.412c-.143-.105-.334-.157-.573-.157-.18 0-.34.039-.48.116a.949.949 0 0 0-.345.328 1.72 1.72 0 0 0-.215.52c-.048.2-.072.425-.072.676v.18c0 .212.029.409.085.591.06.18.147.336.26.47.114.135.251.241.413.32.161.074.345.111.551.111.26 0 .492-.052.695-.157.203-.104.38-.252.529-.443l.569.55a2.042 2.042 0 0 1-1.022.775c-.24.088-.517.131-.834.131Zm3.868-4.016v3.927h-1.08v-4.85h1.031l.05.923Zm1.484-.954-.009 1.004a2.798 2.798 0 0 0-.44-.036 1.36 1.36 0 0 0-.488.08.92.92 0 0 0-.569.574c-.05.138-.08.291-.09.462l-.246.018c0-.305.03-.588.09-.848s.149-.488.268-.685a1.38 1.38 0 0 1 .458-.462c.185-.11.399-.166.64-.166a1.33 1.33 0 0 1 .386.059Zm3.124.03v.79h-2.734v-.79h2.734Zm-1.945-1.187h1.08v4.697c0 .15.021.265.063.346.045.077.106.13.184.157.077.026.168.04.273.04a2.204 2.204 0 0 0 .381-.04l.004.824c-.09.027-.194.051-.313.072-.117.02-.251.031-.404.031a1.58 1.58 0 0 1-.659-.13.97.97 0 0 1-.448-.434c-.107-.2-.161-.467-.161-.798v-4.765Z",
            fill:"#161E35"
          }),(0,n.jsxs)("g",{
            clipPath:"url(#alerts-locked-illustration_svg__c)",
            children:[(0,n.jsx)("path",{
              d:"M36.974 93.556v4.35h-.744v-4.35h.744Zm1.366 0v.597h-3.463v-.597h3.463Zm1.01 1.733v2.617h-.72v-3.233h.687l.033.616Zm.989-.637-.006.67a1.865 1.865 0 0 0-.293-.024.907.907 0 0 0-.326.053.613.613 0 0 0-.38.383 1.043 1.043 0 0 0-.059.308l-.164.012c0-.204.02-.392.06-.565.04-.173.1-.326.179-.457a.818.818 0 0 1 .732-.418.888.888 0 0 1 .257.038Zm1.222.021v3.233h-.723v-3.233h.723Zm-.771-.848c0-.11.036-.2.108-.272a.412.412 0 0 1 .304-.11c.128 0 .228.036.302.11.074.071.11.162.11.272a.36.36 0 0 1-.11.269.414.414 0 0 1-.302.107.419.419 0 0 1-.304-.107.365.365 0 0 1-.108-.27Zm3.63.848h.655v3.144c0 .29-.062.538-.185.74a1.19 1.19 0 0 1-.517.464 1.807 1.807 0 0 1-1.617-.066 1.083 1.083 0 0 1-.35-.308l.338-.424c.116.137.243.238.383.302.14.063.285.095.439.095.165 0 .306-.03.421-.092a.626.626 0 0 0 .272-.266.891.891 0 0 0 .096-.43v-2.427l.066-.732Zm-2.196 1.653v-.063c0-.245.03-.468.09-.67.06-.203.145-.377.257-.522.111-.148.247-.26.406-.338.16-.08.34-.12.541-.12.21 0 .388.038.535.114.15.076.274.184.373.326.1.14.178.306.233.502.058.193.101.408.129.645v.2a3.23 3.23 0 0 1-.131.634 1.746 1.746 0 0 1-.245.496 1.046 1.046 0 0 1-.9.436c-.197 0-.375-.04-.535-.122a1.218 1.218 0 0 1-.406-.344 1.627 1.627 0 0 1-.257-.52c-.06-.201-.09-.42-.09-.654Zm.72-.063v.063c0 .147.014.284.042.412.03.127.075.24.135.338.061.095.14.17.233.227.095.053.208.08.337.08.17 0 .308-.035.416-.107a.696.696 0 0 0 .25-.29c.06-.124.102-.261.126-.412v-.541a1.316 1.316 0 0 0-.075-.329.877.877 0 0 0-.146-.266.61.61 0 0 0-.233-.18.776.776 0 0 0-.332-.065.658.658 0 0 0-.337.084.684.684 0 0 0-.236.23c-.06.097-.105.211-.135.34-.03.13-.045.268-.045.416Zm4.949-1.59h.654v3.144c0 .29-.062.538-.185.74a1.19 1.19 0 0 1-.517.464 1.807 1.807 0 0 1-1.617-.066 1.083 1.083 0 0 1-.35-.308l.338-.424c.116.137.243.238.383.302.14.063.286.095.439.095.165 0 .306-.03.421-.092a.626.626 0 0 0 .272-.266.891.891 0 0 0 .096-.43v-2.427l.066-.732Zm-2.197 1.653v-.063c0-.245.03-.468.09-.67.06-.203.145-.377.257-.522a1.12 1.12 0 0 1 .406-.338c.16-.08.34-.12.541-.12.21 0 .388.038.535.114.15.076.274.184.374.326.1.14.177.306.233.502.057.193.1.408.128.645v.2a3.23 3.23 0 0 1-.131.634 1.746 1.746 0 0 1-.245.496 1.046 1.046 0 0 1-.9.436c-.197 0-.375-.04-.535-.122a1.217 1.217 0 0 1-.406-.344 1.627 1.627 0 0 1-.257-.52c-.06-.201-.09-.42-.09-.654Zm.72-.063v.063c0 .147.014.284.042.412.03.127.075.24.135.338.061.095.14.17.233.227.096.053.208.08.337.08.17 0 .308-.035.416-.107a.696.696 0 0 0 .25-.29c.06-.124.102-.261.126-.412v-.541a1.316 1.316 0 0 0-.074-.329.877.877 0 0 0-.147-.266.61.61 0 0 0-.233-.18.776.776 0 0 0-.331-.065.658.658 0 0 0-.338.084.684.684 0 0 0-.236.23c-.06.097-.105.211-.135.34-.03.13-.044.268-.044.416Zm4.303 1.703c-.239 0-.455-.039-.648-.116a1.432 1.432 0 0 1-.49-.332 1.471 1.471 0 0 1-.308-.5 1.745 1.745 0 0 1-.108-.618v-.12c0-.252.037-.481.111-.686a1.56 1.56 0 0 1 .308-.526c.131-.148.287-.26.466-.338.18-.078.373-.117.583-.117.23 0 .433.04.606.117.174.078.317.187.43.329.116.14.202.305.257.499.058.193.087.406.087.64v.307h-2.498v-.517h1.787v-.057a1.01 1.01 0 0 0-.078-.364.62.62 0 0 0-.212-.275.635.635 0 0 0-.382-.105.633.633 0 0 0-.55.296c-.062.096-.11.211-.144.347a1.945 1.945 0 0 0-.047.45v.12c0 .142.018.273.056.395.04.12.098.224.174.313.075.09.167.16.275.213.107.05.23.074.367.074a.998.998 0 0 0 .463-.104c.136-.07.253-.169.353-.296l.38.367a1.363 1.363 0 0 1-.681.517 1.63 1.63 0 0 1-.557.087Zm2.579-2.677v2.617h-.72v-3.233h.687l.033.616Zm.989-.637-.006.67a1.865 1.865 0 0 0-.293-.024.907.907 0 0 0-.325.053.613.613 0 0 0-.38.383 1.043 1.043 0 0 0-.06.308l-.164.012c0-.204.02-.392.06-.565.04-.173.1-.326.179-.457a.818.818 0 0 1 .732-.418.888.888 0 0 1 .257.038Z",
              fill:"#454B5D"
            }),(0,n.jsx)("rect",{
              x:34.997,
              y:107.239,
              width:249.37,
              height:14.53,
              rx:2.805,
              fill:"#fff"
            }),(0,n.jsx)("rect",{
              x:34.997,
              y:107.239,
              width:249.37,
              height:14.53,
              rx:2.805,
              stroke:"#E8E8EB",
              strokeWidth:.51
            }),(0,n.jsx)("path",{
              d:"m41.491 114.689.864-3.036h.418l-.242 1.181-.93 3.17h-.415l.305-1.315Zm-.893-3.036.687 2.976.206 1.375h-.412l-1.055-4.351h.574Zm3.293 2.973.672-2.973h.577l-1.052 4.351h-.413l.216-1.378Zm-1.055-2.973.84 3.036.304 1.315h-.415l-.896-3.17-.245-1.181h.412Zm3.412-.239v4.59h-.553v-4.59h.553Zm-.131 2.851-.23-.009c.002-.221.035-.425.098-.613.064-.189.154-.353.27-.493a1.213 1.213 0 0 1 .947-.439c.159 0 .302.022.43.066a.777.777 0 0 1 .325.203.905.905 0 0 1 .21.365c.047.147.071.327.071.54v2.119h-.556v-2.125a.931.931 0 0 0-.074-.406.458.458 0 0 0-.218-.224.78.78 0 0 0-.353-.072.816.816 0 0 0-.377.087.899.899 0 0 0-.29.239 1.203 1.203 0 0 0-.253.762Zm4.29 1.799c-.225 0-.429-.038-.612-.114a1.385 1.385 0 0 1-.47-.326 1.437 1.437 0 0 1-.298-.496c-.07-.191-.105-.4-.105-.627v-.126c0-.263.04-.497.117-.702a1.58 1.58 0 0 1 .317-.526 1.351 1.351 0 0 1 .98-.436c.23 0 .43.04.597.12.17.079.308.191.416.334.107.142.187.309.239.502.052.191.078.401.078.628v.248H49.25v-.451h1.862v-.042a1.383 1.383 0 0 0-.09-.419.749.749 0 0 0-.239-.334c-.11-.088-.259-.132-.448-.132a.75.75 0 0 0-.619.314c-.075.104-.134.23-.176.379a1.93 1.93 0 0 0-.063.517v.126c0 .153.021.298.063.433.044.134.107.251.188.353a.913.913 0 0 0 .302.239.92.92 0 0 0 .406.086.96.96 0 0 0 .496-.119c.136-.08.254-.186.356-.32l.335.266c-.07.106-.159.206-.266.302-.108.096-.24.173-.398.233-.155.06-.34.09-.553.09Zm2.457-2.603v2.543h-.553v-3.233h.523l.03.69Zm-.132.804-.23-.009c.002-.221.035-.425.099-.613.063-.189.153-.353.269-.493a1.213 1.213 0 0 1 .947-.439c.16 0 .303.022.43.066a.778.778 0 0 1 .326.203.906.906 0 0 1 .209.365c.048.147.072.327.072.54v2.119h-.556v-2.125a.931.931 0 0 0-.075-.406.458.458 0 0 0-.218-.224.78.78 0 0 0-.352-.072.815.815 0 0 0-.377.087.898.898 0 0 0-.29.239 1.202 1.202 0 0 0-.254.762Zm5.462 1.24.885-2.734h.565l-1.163 3.233h-.37l.083-.499Zm-.738-2.734.912 2.749.062.484h-.37l-1.171-3.233h.567Zm4.578 2.68v-1.664a.676.676 0 0 0-.078-.332.507.507 0 0 0-.227-.221.82.82 0 0 0-.376-.078.88.88 0 0 0-.368.072.648.648 0 0 0-.245.188.414.414 0 0 0-.087.251h-.552c0-.115.03-.23.09-.343a.993.993 0 0 1 .256-.308c.114-.094.25-.167.407-.221.16-.056.336-.084.532-.084.235 0 .442.04.621.12.181.079.323.2.424.361.104.16.156.36.156.601v1.506c0 .107.009.222.027.343.02.122.049.226.086.314v.048h-.576a1.045 1.045 0 0 1-.066-.254 2.057 2.057 0 0 1-.024-.299Zm.096-1.407.006.388h-.56c-.157 0-.297.013-.42.039a.96.96 0 0 0-.311.111.5.5 0 0 0-.257.448c0 .101.023.194.069.278.045.083.114.15.206.2a.747.747 0 0 0 .343.072.932.932 0 0 0 .756-.371.564.564 0 0 0 .126-.302l.236.266a.796.796 0 0 1-.114.278 1.327 1.327 0 0 1-.612.523c-.14.06-.297.09-.472.09-.22 0-.412-.043-.577-.129a.982.982 0 0 1-.383-.343.912.912 0 0 1-.134-.487c0-.174.034-.326.102-.458a.88.88 0 0 1 .292-.331c.128-.09.281-.158.46-.204.18-.045.38-.068.601-.068h.643Zm1.927-2.63v4.59H63.5v-4.59h.556Zm2.865 3.843v-2.486h.556v3.233h-.529l-.026-.747Zm.105-.681.23-.006c0 .215-.023.414-.069.597a1.274 1.274 0 0 1-.215.472c-.1.134-.23.238-.391.314a1.406 1.406 0 0 1-.589.111c-.157 0-.302-.023-.433-.069a.874.874 0 0 1-.335-.212.965.965 0 0 1-.218-.374 1.797 1.797 0 0 1-.075-.553v-2.085h.553v2.091c0 .146.016.266.048.362a.599.599 0 0 0 .135.224.498.498 0 0 0 .19.114.75.75 0 0 0 .222.033c.235 0 .421-.045.559-.135a.768.768 0 0 0 .295-.367 1.39 1.39 0 0 0 .093-.517Zm2.635 1.488c-.225 0-.429-.038-.612-.114a1.386 1.386 0 0 1-.47-.326 1.44 1.44 0 0 1-.298-.496c-.07-.191-.105-.4-.105-.627v-.126c0-.263.04-.497.117-.702.078-.207.183-.382.317-.526a1.351 1.351 0 0 1 .98-.436c.23 0 .43.04.597.12.17.079.308.191.416.334.107.142.187.309.239.502.052.191.078.401.078.628v.248h-2.415v-.451h1.862v-.042a1.384 1.384 0 0 0-.09-.419.749.749 0 0 0-.239-.334c-.11-.088-.259-.132-.448-.132a.75.75 0 0 0-.619.314c-.075.104-.134.23-.176.379-.042.15-.063.322-.063.517v.126c0 .153.021.298.063.433.044.134.106.251.188.353a.913.913 0 0 0 .302.239c.12.058.255.086.406.086a.96.96 0 0 0 .496-.119c.136-.08.254-.186.356-.32l.335.266c-.07.106-.159.206-.266.302-.108.096-.24.173-.398.233-.155.06-.34.09-.553.09Zm4.022-3.293v3.233h-.555v-3.233h.555Zm-.597-.858c0-.089.027-.165.08-.227.056-.062.138-.092.245-.092.106 0 .187.03.242.092a.321.321 0 0 1 .087.227.31.31 0 0 1-.087.221c-.055.06-.136.09-.242.09-.107 0-.189-.03-.245-.09a.323.323 0 0 1-.08-.221Zm3.367 3.233a.468.468 0 0 0-.053-.221.462.462 0 0 0-.213-.188 1.705 1.705 0 0 0-.478-.149 3.773 3.773 0 0 1-.487-.135 1.473 1.473 0 0 1-.367-.188.788.788 0 0 1-.23-.26.726.726 0 0 1-.081-.35c0-.127.028-.248.084-.361a.97.97 0 0 1 .242-.302c.105-.088.232-.156.38-.206.147-.05.31-.075.492-.075.26 0 .48.046.663.138.184.091.324.214.422.367.097.151.146.32.146.505h-.553a.474.474 0 0 0-.08-.26.594.594 0 0 0-.23-.212.74.74 0 0 0-.368-.084.834.834 0 0 0-.373.072.485.485 0 0 0-.207.176.446.446 0 0 0-.032.389c.022.046.06.088.113.128.054.038.13.074.227.108.098.034.222.068.374.101.265.06.483.132.654.216a.96.96 0 0 1 .383.307.763.763 0 0 1 .125.443.87.87 0 0 1-.344.693 1.28 1.28 0 0 1-.394.197 1.755 1.755 0 0 1-.51.069 1.56 1.56 0 0 1-.724-.153 1.116 1.116 0 0 1-.448-.394.944.944 0 0 1-.153-.511h.556a.57.57 0 0 0 .132.361.67.67 0 0 0 .293.189c.115.036.23.053.343.053.151 0 .278-.019.38-.059a.529.529 0 0 0 .236-.165.379.379 0 0 0 .08-.239Zm4.704.305v-1.664a.676.676 0 0 0-.078-.332.507.507 0 0 0-.227-.221.82.82 0 0 0-.377-.078.88.88 0 0 0-.367.072.648.648 0 0 0-.245.188.414.414 0 0 0-.087.251h-.553c0-.115.03-.23.09-.343a.993.993 0 0 1 .257-.308c.113-.094.249-.167.406-.221.16-.056.337-.084.532-.084.235 0 .442.04.622.12.18.079.322.2.424.361.103.16.155.36.155.601v1.506c0 .107.01.222.027.343.02.122.049.226.087.314v.048h-.577a1.045 1.045 0 0 1-.066-.254 2.057 2.057 0 0 1-.023-.299Zm.095-1.407.006.388H80.7c-.157 0-.297.013-.421.039a.96.96 0 0 0-.31.111.5.5 0 0 0-.257.448c0 .101.022.194.068.278.046.083.115.15.206.2a.747.747 0 0 0 .344.072.932.932 0 0 0 .756-.371.564.564 0 0 0 .125-.302l.236.266a.796.796 0 0 1-.113.278 1.327 1.327 0 0 1-.613.523c-.14.06-.297.09-.472.09-.219 0-.411-.043-.576-.129a.982.982 0 0 1-.383-.343.912.912 0 0 1-.135-.487c0-.174.034-.326.102-.458a.88.88 0 0 1 .293-.331c.127-.09.28-.158.46-.204.18-.045.38-.068.6-.068h.643Zm1.324-2.63h.556v3.962l-.048.628h-.508v-4.59Zm2.74 2.946v.063c0 .235-.028.453-.084.655a1.617 1.617 0 0 1-.245.52 1.147 1.147 0 0 1-.394.343 1.129 1.129 0 0 1-.535.123c-.205 0-.385-.035-.54-.105a1.061 1.061 0 0 1-.39-.308 1.589 1.589 0 0 1-.253-.484 3.04 3.04 0 0 1-.129-.639v-.275c.024-.239.067-.453.129-.643a1.6 1.6 0 0 1 .254-.484c.105-.135.235-.238.388-.307.153-.072.332-.108.535-.108s.383.04.54.12c.158.077.29.189.395.334.108.146.19.32.245.523.056.201.084.425.084.672Zm-.556.063v-.063c0-.161-.015-.312-.045-.454a1.173 1.173 0 0 0-.143-.376.713.713 0 0 0-.26-.257.765.765 0 0 0-.398-.096.786.786 0 0 0-.624.266 1.03 1.03 0 0 0-.176.275 1.582 1.582 0 0 0-.099.317v.72c.032.139.084.274.155.403a.939.939 0 0 0 .293.314.809.809 0 0 0 .457.123c.15 0 .277-.03.383-.09a.728.728 0 0 0 .26-.254c.068-.108.117-.232.15-.374.031-.141.047-.292.047-.454Zm1.109 0v-.068c0-.234.033-.45.101-.649.068-.201.166-.375.293-.523.128-.149.282-.265.463-.346.181-.084.385-.126.61-.126.227 0 .431.042.612.126.184.081.339.197.466.346.13.148.229.322.296.523.068.199.102.415.102.649v.068c0 .233-.034.449-.102.649a1.559 1.559 0 0 1-.296.523 1.363 1.363 0 0 1-1.072.469 1.47 1.47 0 0 1-.613-.123 1.395 1.395 0 0 1-.466-.346 1.587 1.587 0 0 1-.293-.523 2.008 2.008 0 0 1-.101-.649Zm.552-.068v.068c0 .162.02.314.057.457.038.142.095.267.17.377a.87.87 0 0 0 .29.26.84.84 0 0 0 .404.092c.151 0 .284-.03.397-.092a.843.843 0 0 0 .287-.26c.076-.11.132-.235.17-.377.04-.143.06-.295.06-.457v-.068c0-.16-.02-.31-.06-.452a1.16 1.16 0 0 0-.173-.379.802.802 0 0 0-.687-.359.813.813 0 0 0-.4.096.857.857 0 0 0-.287.263 1.197 1.197 0 0 0-.17.379 1.747 1.747 0 0 0-.058.452Zm4.02 1.15.884-2.734h.565l-1.163 3.233h-.37l.083-.499Zm-.739-2.734.912 2.749.062.484h-.37l-1.171-3.233h.567Zm4.02 3.293c-.226 0-.43-.038-.613-.114a1.386 1.386 0 0 1-.47-.326 1.437 1.437 0 0 1-.298-.496c-.07-.191-.105-.4-.105-.627v-.126c0-.263.039-.497.117-.702.077-.207.183-.382.317-.526a1.35 1.35 0 0 1 .98-.436c.23 0 .43.04.597.12.17.079.308.191.415.334.108.142.188.309.24.502.051.191.077.401.077.628v.248h-2.414v-.451h1.861v-.042a1.38 1.38 0 0 0-.09-.419.75.75 0 0 0-.238-.334c-.11-.088-.26-.132-.448-.132a.75.75 0 0 0-.619.314 1.18 1.18 0 0 0-.176.379 1.93 1.93 0 0 0-.063.517v.126c0 .153.02.298.063.433.044.134.106.251.188.353a.911.911 0 0 0 .302.239c.12.058.255.086.406.086a.96.96 0 0 0 .496-.119c.136-.08.254-.186.356-.32l.334.266c-.07.106-.158.206-.266.302-.107.096-.24.173-.397.233-.155.06-.34.09-.553.09Z",
              fill:"#161E35"
            }),(0,n.jsx)("path",{
              d:"m277.229 113.613-1.785 1.785-1.785-1.785",
              stroke:"#737886",
              strokeWidth:.51,
              strokeLinecap:"round",
              strokeLinejoin:"round"
            }),(0,n.jsx)("path",{
              d:"M294.621 93.556v4.35h-.744v-4.35h.744Zm1.366 0v.597h-3.463v-.597h3.463Zm1.213-.24v4.59h-.717v-4.59h.717Zm-.126 2.854-.233-.003a2.1 2.1 0 0 1 .093-.618 1.58 1.58 0 0 1 .257-.493 1.149 1.149 0 0 1 .917-.443c.16 0 .303.022.431.066a.818.818 0 0 1 .334.212.896.896 0 0 1 .212.377c.05.153.075.34.075.562v2.076h-.723v-2.082a.833.833 0 0 0-.069-.37.397.397 0 0 0-.194-.198.71.71 0 0 0-.314-.063.731.731 0 0 0-.343.078.707.707 0 0 0-.245.212.978.978 0 0 0-.15.31 1.428 1.428 0 0 0-.048.377Zm3.538-.881v2.617h-.72v-3.233h.687l.033.616Zm.989-.637-.006.67a1.874 1.874 0 0 0-.292-.024.904.904 0 0 0-.326.053.604.604 0 0 0-.38.383 1.04 1.04 0 0 0-.059.308l-.165.012c0-.204.02-.392.06-.565.04-.173.1-.326.179-.457a.928.928 0 0 1 .305-.308.819.819 0 0 1 .427-.11.895.895 0 0 1 .257.038Zm1.817 3.314c-.239 0-.455-.039-.648-.116a1.42 1.42 0 0 1-.49-.332 1.467 1.467 0 0 1-.308-.5 1.74 1.74 0 0 1-.108-.618v-.12c0-.252.037-.481.111-.686.074-.206.176-.381.308-.526a1.31 1.31 0 0 1 .466-.338c.179-.078.373-.117.582-.117.231 0 .434.04.607.117.173.078.317.187.43.329.116.14.201.305.257.499.058.193.087.406.087.64v.307h-2.498v-.517h1.787v-.057a1.008 1.008 0 0 0-.078-.364.625.625 0 0 0-.212-.275.637.637 0 0 0-.383-.105.624.624 0 0 0-.549.296c-.062.096-.11.211-.144.347a1.94 1.94 0 0 0-.048.45v.12c0 .142.019.273.057.395.04.12.098.224.173.313a.83.83 0 0 0 .275.213c.108.05.23.074.368.074a.997.997 0 0 0 .816-.4l.379.367a1.358 1.358 0 0 1-.681.517c-.16.058-.345.087-.556.087Zm3.669-.935a.368.368 0 0 0-.053-.195.462.462 0 0 0-.207-.16 1.987 1.987 0 0 0-.442-.132 3.798 3.798 0 0 1-.472-.135 1.488 1.488 0 0 1-.364-.194.818.818 0 0 1-.237-.269.846.846 0 0 1 .003-.732.956.956 0 0 1 .248-.31c.108-.09.239-.161.392-.213.155-.052.329-.078.52-.078.271 0 .503.046.696.138.195.09.345.212.448.367a.905.905 0 0 1 .156.52h-.721a.457.457 0 0 0-.065-.239.462.462 0 0 0-.191-.182.66.66 0 0 0-.323-.072.7.7 0 0 0-.308.06.419.419 0 0 0-.179.15.38.38 0 0 0-.027.35c.022.04.058.08.107.116a.89.89 0 0 0 .204.095c.087.03.197.059.328.087.247.052.459.118.637.2.179.08.316.183.412.31a.764.764 0 0 1 .144.479.844.844 0 0 1-.093.394.892.892 0 0 1-.263.308 1.326 1.326 0 0 1-.415.2c-.16.048-.339.072-.538.072-.293 0-.541-.052-.744-.155a1.182 1.182 0 0 1-.463-.404.952.952 0 0 1-.156-.514h.696c.008.134.045.24.111.32a.592.592 0 0 0 .251.17c.102.034.206.051.314.051a.904.904 0 0 0 .325-.05.47.47 0 0 0 .201-.144.347.347 0 0 0 .068-.21Zm2.047-3.714v4.59h-.717v-4.59h.717Zm-.125 2.853-.233-.003a2.1 2.1 0 0 1 .092-.618c.062-.19.148-.354.257-.493a1.143 1.143 0 0 1 .918-.443c.159 0 .302.022.43.066a.818.818 0 0 1 .334.212.908.908 0 0 1 .213.377c.049.153.074.34.074.562v2.076h-.723v-2.082a.849.849 0 0 0-.068-.37.399.399 0 0 0-.195-.198.706.706 0 0 0-.313-.063.735.735 0 0 0-.344.078.716.716 0 0 0-.245.212.978.978 0 0 0-.15.31 1.47 1.47 0 0 0-.047.377Zm2.677.156v-.07c0-.232.034-.448.102-.648.067-.2.165-.375.292-.523.13-.149.287-.264.473-.346.187-.084.398-.126.633-.126.237 0 .448.042.633.126.188.082.346.197.476.346.129.148.228.322.295.523.068.2.102.416.102.649v.069c0 .233-.034.449-.102.648-.067.2-.166.373-.295.523-.13.147-.287.263-.473.347a1.545 1.545 0 0 1-.63.122c-.237 0-.449-.04-.637-.122a1.378 1.378 0 0 1-.472-.347 1.545 1.545 0 0 1-.295-.523 1.995 1.995 0 0 1-.102-.648Zm.72-.07v.07c0 .145.015.282.045.412s.077.243.14.34a.7.7 0 0 0 .245.23c.1.056.218.084.356.084a.69.69 0 0 0 .347-.083.7.7 0 0 0 .245-.23c.063-.098.11-.212.14-.341.032-.13.048-.267.048-.412v-.07c0-.143-.016-.278-.048-.406a1.062 1.062 0 0 0-.143-.343.678.678 0 0 0-.595-.32.694.694 0 0 0-.353.087.701.701 0 0 0-.242.233c-.063.1-.11.214-.14.343a1.77 1.77 0 0 0-.045.407Zm3.66-2.94v4.59h-.723v-4.59h.723Zm2.761 3.92v-3.92h.724v4.59h-.655l-.069-.67Zm-2.103-.91v-.063c0-.245.029-.468.086-.67a1.59 1.59 0 0 1 .251-.522c.11-.148.243-.26.401-.338.157-.08.335-.12.532-.12.195 0 .366.038.514.114.147.076.273.184.376.326.104.14.186.306.248.502.062.193.106.408.132.645v.2c-.026.231-.07.442-.132.634a1.698 1.698 0 0 1-.248.496 1.07 1.07 0 0 1-.379.323 1.12 1.12 0 0 1-.517.113 1.13 1.13 0 0 1-.529-.122 1.17 1.17 0 0 1-.398-.344 1.634 1.634 0 0 1-.251-.52 2.393 2.393 0 0 1-.086-.654Zm.72-.063v.063c0 .147.013.284.039.412.028.127.07.24.128.338a.669.669 0 0 0 .224.227c.094.053.206.08.335.08a.701.701 0 0 0 .403-.107.725.725 0 0 0 .248-.29c.062-.124.104-.261.126-.412v-.541a1.316 1.316 0 0 0-.075-.329.877.877 0 0 0-.146-.266.624.624 0 0 0-.23-.18.722.722 0 0 0-.32-.065.635.635 0 0 0-.335.084.685.685 0 0 0-.227.23 1.13 1.13 0 0 0-.128.34c-.028.13-.042.268-.042.416Z",
              fill:"#454B5D"
            }),(0,n.jsx)("rect",{
              x:292.644,
              y:107.239,
              width:65.785,
              height:14.53,
              rx:2.805,
              fill:"#fff"
            }),(0,n.jsx)("rect",{
              x:292.644,
              y:107.239,
              width:65.785,
              height:14.53,
              rx:2.805,
              stroke:"#E8E8EB",
              strokeWidth:.51
            }),(0,n.jsx)("path",{
              d:"M299.667 111.629v4.375h-.553v-3.684l-1.114.406v-.499l1.58-.598h.087Zm4.357 1.853v.663c0 .357-.032.658-.096.903a1.56 1.56 0 0 1-.275.591c-.119.15-.264.258-.433.326a1.538 1.538 0 0 1-.568.099 1.62 1.62 0 0 1-.463-.063 1.123 1.123 0 0 1-.383-.2 1.21 1.21 0 0 1-.286-.365 1.938 1.938 0 0 1-.183-.544 3.99 3.99 0 0 1-.062-.747v-.663c0-.357.031-.655.095-.896.066-.241.159-.435.278-.58.12-.148.263-.253.43-.317a1.6 1.6 0 0 1 .568-.095c.169 0 .325.02.466.062a1.053 1.053 0 0 1 .667.547c.079.146.14.324.182.535.042.211.063.459.063.744Zm-.556.753v-.846c0-.195-.012-.366-.036-.514a1.616 1.616 0 0 0-.099-.382.739.739 0 0 0-.167-.257.576.576 0 0 0-.23-.143.824.824 0 0 0-.29-.048.792.792 0 0 0-.349.074.622.622 0 0 0-.257.231c-.068.105-.12.244-.156.415a3.081 3.081 0 0 0-.054.624v.846c0 .195.011.368.033.517a1.7 1.7 0 0 0 .105.388.877.877 0 0 0 .167.266c.066.07.142.122.227.156a.844.844 0 0 0 .29.047.772.772 0 0 0 .356-.077.652.652 0 0 0 .254-.242c.069-.112.121-.254.155-.428.034-.175.051-.384.051-.627Zm3.998-.753v.663c0 .357-.032.658-.096.903a1.56 1.56 0 0 1-.275.591c-.119.15-.264.258-.433.326a1.534 1.534 0 0 1-.568.099c-.167 0-.321-.021-.463-.063a1.11 1.11 0 0 1-.382-.2 1.212 1.212 0 0 1-.287-.365 1.907 1.907 0 0 1-.182-.544 3.901 3.901 0 0 1-.063-.747v-.663c0-.357.032-.655.095-.896.066-.241.159-.435.278-.58a1.01 1.01 0 0 1 .431-.317 1.59 1.59 0 0 1 .567-.095c.17 0 .325.02.467.062a1.057 1.057 0 0 1 .666.547c.08.146.14.324.182.535.042.211.063.459.063.744Zm-.556.753v-.846c0-.195-.012-.366-.036-.514a1.669 1.669 0 0 0-.098-.382.755.755 0 0 0-.168-.257.57.57 0 0 0-.23-.143.82.82 0 0 0-.29-.048.792.792 0 0 0-.349.074.628.628 0 0 0-.257.231c-.068.105-.12.244-.156.415a3.163 3.163 0 0 0-.053.624v.846c0 .195.011.368.033.517.023.149.058.279.104.388a.897.897 0 0 0 .167.266c.066.07.142.122.228.156a.835.835 0 0 0 .289.047.772.772 0 0 0 .356-.077.645.645 0 0 0 .254-.242 1.26 1.26 0 0 0 .155-.428c.034-.175.051-.384.051-.627Z",
              fill:"#161E35"
            }),(0,n.jsx)("path",{
              d:"M36.974 129.52v4.351h-.744v-4.351h.744Zm1.366 0v.598h-3.463v-.598h3.463Zm1.01 1.734v2.617h-.72v-3.233h.687l.033.616Zm.989-.637-.006.669a.905.905 0 0 0-.618.03.614.614 0 0 0-.38.383 1.037 1.037 0 0 0-.06.308l-.164.012c0-.204.02-.392.06-.565.04-.174.1-.326.179-.457a.917.917 0 0 1 .304-.308.815.815 0 0 1 .428-.111.888.888 0 0 1 .257.039Zm1.817 3.314c-.24 0-.456-.039-.649-.117a1.426 1.426 0 0 1-.49-.331 1.477 1.477 0 0 1-.308-.499 1.754 1.754 0 0 1-.107-.619v-.119c0-.253.037-.482.11-.688.074-.205.177-.38.308-.526.131-.147.287-.26.466-.337.18-.078.374-.117.583-.117.231 0 .433.039.606.117.174.077.317.187.43.328.116.14.202.306.258.499.057.194.086.407.086.64v.308h-2.498v-.517h1.787v-.057a1.018 1.018 0 0 0-.078-.365.616.616 0 0 0-.212-.274.634.634 0 0 0-.382-.105.622.622 0 0 0-.55.296 1.14 1.14 0 0 0-.143.346 1.953 1.953 0 0 0-.048.452v.119c0 .142.019.273.057.395.04.119.097.224.173.313.076.09.167.161.275.212.107.05.23.075.367.075.174 0 .328-.035.463-.104a1.07 1.07 0 0 0 .353-.296l.38.367a1.359 1.359 0 0 1-.681.517c-.16.058-.345.087-.556.087Zm2.57-2.603v2.543h-.72v-3.233h.677l.042.69Zm-.13.807-.232-.003a2.1 2.1 0 0 1 .095-.63 1.54 1.54 0 0 1 .263-.493 1.194 1.194 0 0 1 .932-.431c.156 0 .296.022.422.066a.773.773 0 0 1 .325.206c.092.096.162.22.21.374.047.151.071.337.071.558v2.089h-.723v-2.092a.816.816 0 0 0-.068-.367.383.383 0 0 0-.195-.194.726.726 0 0 0-.313-.06.694.694 0 0 0-.332.078.733.733 0 0 0-.248.212 1.016 1.016 0 0 0-.152.311 1.279 1.279 0 0 0-.054.376Zm4.794 1.067v-3.921h.723v4.59h-.655l-.068-.669Zm-2.104-.912v-.062c0-.245.029-.468.087-.67.057-.203.141-.377.25-.523.11-.147.244-.26.401-.337.157-.08.335-.12.532-.12.195 0 .367.038.514.114.147.076.273.184.376.326.104.139.187.306.248.502.062.193.106.408.132.645v.2c-.026.231-.07.442-.132.634a1.712 1.712 0 0 1-.248.496c-.103.139-.23.247-.38.322-.147.076-.319.114-.516.114-.195 0-.372-.041-.529-.123a1.164 1.164 0 0 1-.397-.343 1.624 1.624 0 0 1-.251-.52 2.366 2.366 0 0 1-.087-.655Zm.72-.062v.062c0 .148.013.285.039.413.028.127.07.24.128.337a.661.661 0 0 0 .225.228c.093.053.205.08.334.08a.708.708 0 0 0 .404-.107.74.74 0 0 0 .248-.29c.061-.124.103-.261.125-.413v-.54a1.308 1.308 0 0 0-.075-.329.876.876 0 0 0-.146-.266.614.614 0 0 0-.23-.179.718.718 0 0 0-.32-.066.63.63 0 0 0-.334.084.669.669 0 0 0-.228.23c-.057.097-.1.211-.128.34-.028.13-.042.268-.042.416Zm4.246.062v-.068c0-.233.034-.45.102-.649a1.55 1.55 0 0 1 .293-.523c.129-.149.286-.265.472-.346.187-.084.398-.126.633-.126.237 0 .448.042.634.126.187.081.345.197.475.346.13.148.228.322.296.523.067.199.101.416.101.649v.068c0 .233-.034.45-.102.649a1.559 1.559 0 0 1-.295.523c-.13.147-.287.263-.472.346a1.543 1.543 0 0 1-.63.123c-.238 0-.45-.041-.637-.123a1.365 1.365 0 0 1-.472-.346 1.56 1.56 0 0 1-.296-.523 2.006 2.006 0 0 1-.102-.649Zm.72-.068v.068c0 .146.015.283.045.413.03.129.077.243.14.34a.684.684 0 0 0 .246.23c.1.056.218.084.355.084a.685.685 0 0 0 .592-.314c.063-.097.11-.211.14-.34.032-.13.048-.267.048-.413v-.068c0-.144-.016-.279-.048-.407a1.04 1.04 0 0 0-.143-.343.676.676 0 0 0-.595-.32.688.688 0 0 0-.352.087.683.683 0 0 0-.242.233 1.08 1.08 0 0 0-.14.343 1.78 1.78 0 0 0-.046.407Zm3.864 1.649h-.72v-3.544c0-.241.044-.443.134-.606a.886.886 0 0 1 .392-.374c.169-.085.37-.128.6-.128.072 0 .143.005.212.015.07.008.138.021.203.038l-.017.556a.823.823 0 0 0-.132-.021 1.724 1.724 0 0 0-.15-.006.6.6 0 0 0-.283.063.418.418 0 0 0-.18.176.626.626 0 0 0-.06.287v3.544Zm.666-3.233v.526H55.62v-.526h1.882Zm2.985 2.881.879-2.881h.77l-1.296 3.726c-.03.08-.069.166-.117.26s-.11.182-.188.266a.833.833 0 0 1-.284.206.954.954 0 0 1-.412.081.94.94 0 0 1-.185-.018 2.997 2.997 0 0 1-.165-.033l-.003-.55a2.569 2.569 0 0 0 .144.009c.12 0 .219-.015.298-.045a.406.406 0 0 0 .195-.137.811.811 0 0 0 .131-.257l.233-.627Zm-.496-2.881.768 2.42.129.759-.5.129-1.174-3.308h.777Zm2.373 1.652v-.068c0-.233.034-.45.101-.649.068-.201.166-.375.293-.523.13-.149.287-.265.472-.346.188-.084.399-.126.634-.126.237 0 .448.042.633.126.187.081.346.197.475.346.13.148.228.322.296.523.068.199.102.416.102.649v.068c0 .233-.034.45-.102.649a1.562 1.562 0 0 1-.296.523c-.13.147-.287.263-.472.346a1.543 1.543 0 0 1-.63.123c-.237 0-.45-.041-.637-.123a1.366 1.366 0 0 1-.472-.346 1.559 1.559 0 0 1-.296-.523 2.006 2.006 0 0 1-.101-.649Zm.72-.068v.068c0 .146.015.283.045.413.03.129.076.243.14.34a.684.684 0 0 0 .245.23c.1.056.218.084.356.084a.685.685 0 0 0 .591-.314 1.04 1.04 0 0 0 .14-.34c.033-.13.049-.267.049-.413v-.068c0-.144-.016-.279-.048-.407a1.036 1.036 0 0 0-.144-.343.675.675 0 0 0-.594-.32.688.688 0 0 0-.353.087.683.683 0 0 0-.242.233c-.064.099-.11.214-.14.343-.03.128-.045.263-.045.407Zm4.834.887v-2.471h.724v3.233h-.682l-.041-.762Zm.102-.672.242-.006c0 .217-.024.417-.072.6-.047.182-.121.34-.22.476a1.03 1.03 0 0 1-.383.313 1.29 1.29 0 0 1-.559.111c-.157 0-.302-.023-.433-.069a.886.886 0 0 1-.34-.212.966.966 0 0 1-.219-.374 1.72 1.72 0 0 1-.078-.549v-2.089h.72v2.095c0 .117.014.216.042.295a.503.503 0 0 0 .114.189.402.402 0 0 0 .167.101c.064.02.132.03.203.03.206 0 .367-.04.484-.119a.665.665 0 0 0 .254-.329c.052-.137.078-.292.078-.463Zm2.083-1.183v2.617h-.72v-3.233h.687l.033.616Zm.989-.637-.006.669a.905.905 0 0 0-.619.03.614.614 0 0 0-.38.383 1.037 1.037 0 0 0-.059.308l-.164.012c0-.204.02-.392.06-.565.04-.174.1-.326.179-.457a.918.918 0 0 1 .305-.308.815.815 0 0 1 .427-.111.888.888 0 0 1 .257.039Zm2.695.678v2.576h-.72v-3.233h.678l.042.657Zm-.117.84-.245-.003c0-.223.028-.429.084-.618a1.49 1.49 0 0 1 .245-.494c.108-.141.241-.25.4-.325a1.27 1.27 0 0 1 .56-.117c.147 0 .281.022.403.066.123.042.23.109.32.2a.885.885 0 0 1 .209.353c.05.143.074.317.074.52v2.154H75v-2.092a.795.795 0 0 0-.072-.37.396.396 0 0 0-.2-.191.722.722 0 0 0-.307-.06.64.64 0 0 0-.577.29.941.941 0 0 0-.132.311 1.622 1.622 0 0 0-.041.376Zm2.005-.191-.337.075c0-.196.027-.38.08-.553.056-.176.137-.329.242-.46.108-.134.24-.238.398-.314a1.23 1.23 0 0 1 .54-.114c.166 0 .314.023.443.069a.818.818 0 0 1 .335.209c.091.096.161.22.209.374.048.151.072.334.072.549v2.092h-.724v-2.095a.819.819 0 0 0-.071-.379.37.37 0 0 0-.197-.185.793.793 0 0 0-.308-.054.664.664 0 0 0-.296.063.584.584 0 0 0-.212.17.758.758 0 0 0-.132.248 1.064 1.064 0 0 0-.042.305Zm4.148 1.987c-.24 0-.455-.039-.649-.117a1.427 1.427 0 0 1-.49-.331 1.479 1.479 0 0 1-.307-.499 1.754 1.754 0 0 1-.108-.619v-.119c0-.253.037-.482.11-.688.074-.205.177-.38.308-.526.132-.147.287-.26.466-.337.18-.078.374-.117.583-.117.231 0 .433.039.607.117.173.077.316.187.43.328.116.14.201.306.257.499.058.194.087.407.087.64v.308h-2.498v-.517h1.787v-.057a1.018 1.018 0 0 0-.078-.365.616.616 0 0 0-.212-.274.633.633 0 0 0-.383-.105.623.623 0 0 0-.55.296c-.061.095-.11.211-.143.346a1.953 1.953 0 0 0-.048.452v.119c0 .142.02.273.057.395.04.119.098.224.173.313.076.09.168.161.275.212.108.05.23.075.368.075.173 0 .327-.035.463-.104a1.07 1.07 0 0 0 .352-.296l.38.367a1.359 1.359 0 0 1-.681.517c-.16.058-.345.087-.556.087Zm3.338-3.293v.526h-1.823v-.526h1.823Zm-1.297-.792h.72v3.132c0 .099.014.176.042.23.03.052.07.086.122.104a.555.555 0 0 0 .182.027 1.106 1.106 0 0 0 .254-.027l.003.55a1.53 1.53 0 0 1-.478.069 1.05 1.05 0 0 1-.439-.087.645.645 0 0 1-.299-.29c-.072-.133-.107-.31-.107-.532v-3.176Zm2.575 1.408v2.617h-.72v-3.233h.688l.032.616Zm.99-.637-.007.669a.905.905 0 0 0-.619.03.613.613 0 0 0-.379.383 1.04 1.04 0 0 0-.06.308l-.164.012c0-.204.02-.392.06-.565.04-.174.1-.326.18-.457a.918.918 0 0 1 .304-.308.815.815 0 0 1 .427-.111.888.888 0 0 1 .257.039Zm1.221.021v3.233h-.723v-3.233h.723Zm-.77-.849c0-.109.035-.2.107-.271a.41.41 0 0 1 .305-.111c.127 0 .228.037.302.111.074.071.11.162.11.271a.358.358 0 0 1-.11.269.413.413 0 0 1-.302.108.418.418 0 0 1-.305-.108.363.363 0 0 1-.107-.269Zm2.88 3.568a.709.709 0 0 0 .317-.069.59.59 0 0 0 .23-.197.535.535 0 0 0 .099-.29h.678c-.004.21-.066.4-.185.571-.12.171-.278.308-.475.409-.198.1-.416.15-.655.15-.247 0-.462-.042-.645-.126a1.272 1.272 0 0 1-.457-.352 1.56 1.56 0 0 1-.275-.517 2.135 2.135 0 0 1-.09-.628v-.104c0-.223.03-.433.09-.628.061-.197.153-.37.275-.52.121-.149.273-.266.457-.349.183-.086.397-.129.642-.129.259 0 .486.052.681.156.196.101.349.244.46.427.114.181.173.392.177.633h-.678a.719.719 0 0 0-.09-.322.584.584 0 0 0-.221-.233.629.629 0 0 0-.338-.087.669.669 0 0 0-.361.09.594.594 0 0 0-.225.239 1.159 1.159 0 0 0-.116.337 2.21 2.21 0 0 0-.033.386v.104c0 .134.011.263.033.389a1.1 1.1 0 0 0 .113.337.65.65 0 0 0 .228.236.693.693 0 0 0 .364.087Zm3.263-1.067v-.068c0-.233.034-.45.102-.649a1.55 1.55 0 0 1 .293-.523c.129-.149.286-.265.472-.346.187-.084.398-.126.633-.126.237 0 .448.042.633.126.188.081.346.197.476.346.13.148.228.322.295.523.068.199.102.416.102.649v.068c0 .233-.034.45-.102.649a1.559 1.559 0 0 1-.295.523c-.13.147-.287.263-.473.346a1.543 1.543 0 0 1-.63.123c-.237 0-.45-.041-.636-.123a1.365 1.365 0 0 1-.472-.346 1.56 1.56 0 0 1-.296-.523 2.006 2.006 0 0 1-.102-.649Zm.72-.068v.068c0 .146.015.283.045.413.03.129.077.243.14.34a.684.684 0 0 0 .246.23c.1.056.218.084.355.084a.685.685 0 0 0 .592-.314c.063-.097.11-.211.14-.34.032-.13.048-.267.048-.413v-.068c0-.144-.016-.279-.048-.407a1.04 1.04 0 0 0-.143-.343.676.676 0 0 0-.595-.32.688.688 0 0 0-.352.087.684.684 0 0 0-.243.233 1.08 1.08 0 0 0-.14.343 1.78 1.78 0 0 0-.045.407Zm3.894 1.078.791-2.662h.747l-1.123 3.233h-.466l.05-.571Zm-.607-2.662.807 2.674.039.559h-.467l-1.129-3.233h.75Zm3.974 3.293c-.239 0-.455-.039-.648-.117a1.426 1.426 0 0 1-.49-.331 1.477 1.477 0 0 1-.308-.499 1.754 1.754 0 0 1-.108-.619v-.119c0-.253.037-.482.11-.688.075-.205.177-.38.309-.526.131-.147.287-.26.466-.337.18-.078.373-.117.583-.117.231 0 .433.039.606.117.173.077.317.187.43.328.116.14.202.306.257.499.058.194.087.407.087.64v.308H98.8v-.517h1.787v-.057a1.014 1.014 0 0 0-.078-.365.614.614 0 0 0-.212-.274.634.634 0 0 0-.382-.105.622.622 0 0 0-.55.296 1.14 1.14 0 0 0-.144.346 1.952 1.952 0 0 0-.048.452v.119c0 .142.02.273.057.395.04.119.098.224.173.313.076.09.168.161.275.212.108.05.23.075.368.075.173 0 .328-.035.463-.104.136-.07.253-.169.353-.296l.379.367a1.354 1.354 0 0 1-.681.517 1.623 1.623 0 0 1-.556.087Zm2.579-2.677v2.617h-.72v-3.233h.687l.033.616Zm.989-.637-.006.669a.91.91 0 0 0-.619.03.62.62 0 0 0-.379.383 1.034 1.034 0 0 0-.06.308l-.164.012c0-.204.02-.392.06-.565.039-.174.099-.326.179-.457a.908.908 0 0 1 .305-.308.873.873 0 0 1 .684-.072Zm3.457.021v.526h-1.823v-.526h1.823Zm-1.297-.792h.72v3.132a.51.51 0 0 0 .042.23c.03.052.071.086.123.104a.55.55 0 0 0 .182.027 1.086 1.086 0 0 0 .254-.027l.003.55a1.538 1.538 0 0 1-.478.069c-.166 0-.312-.029-.439-.087a.64.64 0 0 1-.299-.29c-.072-.133-.108-.31-.108-.532v-3.176Zm2.564-.565v4.59h-.717v-4.59h.717Zm-.126 2.854-.233-.003c.002-.223.033-.429.093-.618.062-.19.147-.354.257-.494a1.145 1.145 0 0 1 .917-.442c.16 0 .303.022.431.066a.827.827 0 0 1 .334.212.897.897 0 0 1 .212.377c.05.153.075.34.075.561v2.077h-.723v-2.083a.833.833 0 0 0-.069-.37.396.396 0 0 0-.194-.197.709.709 0 0 0-.314-.063.695.695 0 0 0-.588.29.967.967 0 0 0-.15.311 1.424 1.424 0 0 0-.048.376Zm4.241 1.796c-.24 0-.456-.039-.649-.117a1.434 1.434 0 0 1-.49-.331 1.49 1.49 0 0 1-.308-.499 1.77 1.77 0 0 1-.107-.619v-.119c0-.253.037-.482.11-.688.074-.205.177-.38.308-.526.132-.147.287-.26.466-.337.179-.078.374-.117.583-.117.231 0 .433.039.606.117.174.077.317.187.431.328.115.14.201.306.257.499.057.194.086.407.086.64v.308h-2.498v-.517h1.787v-.057a1.014 1.014 0 0 0-.078-.365.607.607 0 0 0-.212-.274.631.631 0 0 0-.382-.105.629.629 0 0 0-.55.296c-.062.095-.11.211-.143.346a1.947 1.947 0 0 0-.048.452v.119c0 .142.019.273.057.395a.918.918 0 0 0 .173.313c.076.09.167.161.275.212a.86.86 0 0 0 .367.075c.174 0 .328-.035.463-.104.136-.07.253-.169.353-.296l.38.367a1.36 1.36 0 0 1-.682.517 1.617 1.617 0 0 1-.555.087Zm4.15-4.65v4.59h-.723v-4.59h.723Zm2.611 3.942v-1.542a.66.66 0 0 0-.062-.299.439.439 0 0 0-.192-.194.648.648 0 0 0-.316-.069.715.715 0 0 0-.305.06.49.49 0 0 0-.2.161.39.39 0 0 0-.072.23h-.717c0-.127.031-.251.093-.37a.984.984 0 0 1 .268-.32c.118-.094.258-.167.422-.221.163-.054.346-.081.55-.081.243 0 .458.041.645.123a.976.976 0 0 1 .445.37c.11.164.165.369.165.616v1.437c0 .147.01.28.029.397.022.116.053.217.093.302v.048h-.738a1.271 1.271 0 0 1-.081-.296 2.399 2.399 0 0 1-.027-.352Zm.105-1.318.006.445h-.517c-.133 0-.251.013-.353.039a.716.716 0 0 0-.253.108.459.459 0 0 0-.204.403c0 .086.02.164.06.236.04.07.098.125.173.164a.61.61 0 0 0 .281.06.792.792 0 0 0 .649-.314.49.49 0 0 0 .101-.254l.233.32a1.086 1.086 0 0 1-.122.263 1.299 1.299 0 0 1-.227.269 1.125 1.125 0 0 1-.774.287c-.211 0-.4-.042-.565-.126a.997.997 0 0 1-.388-.343.89.89 0 0 1-.141-.493c0-.172.032-.323.096-.454a.888.888 0 0 1 .287-.335c.127-.09.283-.158.466-.203.183-.048.392-.072.627-.072h.565Zm3.185 1.091a.37.37 0 0 0-.053-.195.468.468 0 0 0-.207-.161 1.938 1.938 0 0 0-.442-.131 3.796 3.796 0 0 1-.472-.135 1.514 1.514 0 0 1-.365-.194.826.826 0 0 1-.236-.269.843.843 0 0 1 .003-.732.956.956 0 0 1 .248-.311c.108-.09.238-.16.392-.212.155-.052.329-.078.52-.078.271 0 .503.046.696.138.195.089.345.212.448.367a.907.907 0 0 1 .156.52h-.721a.46.46 0 0 0-.065-.239.458.458 0 0 0-.192-.182.65.65 0 0 0-.322-.072.699.699 0 0 0-.308.06.425.425 0 0 0-.179.149.382.382 0 0 0-.027.35.34.34 0 0 0 .107.116c.05.034.118.066.204.096.087.03.197.059.328.087.247.052.459.118.637.2.179.08.316.183.412.311a.763.763 0 0 1 .143.478c0 .143-.03.275-.092.394a.903.903 0 0 1-.263.308 1.324 1.324 0 0 1-.415.2c-.16.048-.339.072-.538.072-.293 0-.541-.052-.744-.156a1.173 1.173 0 0 1-.463-.403.952.952 0 0 1-.156-.514h.696c.008.134.045.24.111.32a.59.59 0 0 0 .251.17.984.984 0 0 0 .314.051.901.901 0 0 0 .325-.051.469.469 0 0 0 .201-.143.348.348 0 0 0 .068-.209Zm2.818-2.358v.526h-1.823v-.526h1.823Zm-1.297-.792h.72v3.132a.51.51 0 0 0 .042.23c.03.052.071.086.123.104a.55.55 0 0 0 .182.027 1.086 1.086 0 0 0 .254-.027l.003.55a1.538 1.538 0 0 1-.478.069c-.166 0-.312-.029-.439-.087a.64.64 0 0 1-.299-.29c-.072-.133-.108-.31-.108-.532v-3.176Zm3.915 3.457h.059a1.9 1.9 0 0 0 .688-.107c.185-.074.332-.176.442-.305.109-.129.188-.282.236-.457.048-.175.072-.366.072-.571v-.75c0-.177-.019-.333-.057-.466a.97.97 0 0 0-.156-.338.659.659 0 0 0-.23-.206.576.576 0 0 0-.278-.069.583.583 0 0 0-.295.075.662.662 0 0 0-.219.2 1.018 1.018 0 0 0-.134.296 1.413 1.413 0 0 0-.003.705c.03.11.074.208.132.293a.607.607 0 0 0 .525.278.74.74 0 0 0 .553-.239.853.853 0 0 0 .165-.248.799.799 0 0 0 .065-.281l.275.084c0 .151-.032.301-.095.448a1.41 1.41 0 0 1-.26.4c-.11.12-.238.216-.386.287a1.055 1.055 0 0 1-.475.108c-.207 0-.39-.039-.55-.117a1.146 1.146 0 0 1-.394-.322 1.422 1.422 0 0 1-.233-.467 1.928 1.928 0 0 1 .018-1.141c.063-.183.156-.345.278-.484.121-.141.269-.251.442-.329.175-.079.373-.119.594-.119.235 0 .442.046.619.137a1.3 1.3 0 0 1 .448.38c.122.161.213.348.275.561.062.214.093.443.093.688v.254c0 .257-.023.505-.069.744a2.506 2.506 0 0 1-.224.66 1.754 1.754 0 0 1-1.013.887c-.239.084-.52.126-.843.126h-.065v-.595Zm5.734-1.972v.711c0 .341-.034.632-.102.873a1.523 1.523 0 0 1-.287.583 1.12 1.12 0 0 1-.451.328c-.173.07-.368.105-.583.105-.171 0-.33-.022-.478-.066a1.161 1.161 0 0 1-.696-.568 2.01 2.01 0 0 1-.191-.534 3.508 3.508 0 0 1-.066-.721v-.711c0-.342.034-.631.102-.866.067-.237.164-.43.289-.577.126-.149.275-.258.449-.326.175-.067.37-.101.585-.101.174 0 .333.022.478.065a1.12 1.12 0 0 1 .694.559c.083.146.147.322.191.529.044.205.066.444.066.717Zm-.721.813v-.92c0-.174-.009-.326-.029-.457a1.34 1.34 0 0 0-.09-.338.685.685 0 0 0-.143-.227.507.507 0 0 0-.198-.129.69.69 0 0 0-.248-.042.653.653 0 0 0-.298.066.544.544 0 0 0-.222.203 1.14 1.14 0 0 0-.137.371c-.03.151-.045.336-.045.553v.92c0 .175.01.33.03.463.02.134.05.248.09.344a.815.815 0 0 0 .143.233.54.54 0 0 0 .197.131.713.713 0 0 0 .248.042.664.664 0 0 0 .302-.066.544.544 0 0 0 .221-.209c.06-.097.105-.224.135-.379.03-.156.044-.342.044-.559Zm4.901 1.058v-3.921h.723v4.59h-.654l-.069-.669Zm-2.104-.912v-.062c0-.245.029-.468.087-.67a1.58 1.58 0 0 1 .251-.523c.11-.147.243-.26.4-.337.158-.08.335-.12.532-.12.195 0 .367.038.514.114.148.076.273.184.377.326.103.139.186.306.248.502.061.193.105.408.131.645v.2c-.026.231-.07.442-.131.634a1.732 1.732 0 0 1-.248.496 1.067 1.067 0 0 1-.897.436 1.13 1.13 0 0 1-.529-.123 1.17 1.17 0 0 1-.397-.343 1.622 1.622 0 0 1-.251-.52 2.358 2.358 0 0 1-.087-.655Zm.72-.062v.062c0 .148.013.285.039.413.028.127.071.24.129.337a.661.661 0 0 0 .224.228c.093.053.205.08.335.08a.709.709 0 0 0 .403-.107.747.747 0 0 0 .248-.29c.062-.124.103-.261.125-.413v-.54a1.307 1.307 0 0 0-.074-.329.877.877 0 0 0-.147-.266.606.606 0 0 0-.23-.179.716.716 0 0 0-.32-.066.627.627 0 0 0-.334.084.667.667 0 0 0-.227.23 1.124 1.124 0 0 0-.129.34c-.028.13-.042.268-.042.416Zm4.683.995v-1.542a.66.66 0 0 0-.063-.299.442.442 0 0 0-.191-.194.655.655 0 0 0-.317-.069.715.715 0 0 0-.305.06.496.496 0 0 0-.2.161.39.39 0 0 0-.072.23h-.717c0-.127.031-.251.093-.37a.988.988 0 0 1 .269-.32c.117-.094.258-.167.421-.221.163-.054.347-.081.55-.081.243 0 .458.041.645.123a.976.976 0 0 1 .445.37c.11.164.165.369.165.616v1.437c0 .147.01.28.03.397.022.116.052.217.092.302v.048h-.738a1.275 1.275 0 0 1-.08-.296 2.399 2.399 0 0 1-.027-.352Zm.104-1.318.006.445h-.517c-.133 0-.251.013-.352.039a.714.714 0 0 0-.254.108.459.459 0 0 0-.203.403c0 .086.019.164.059.236.04.07.098.125.174.164.077.04.171.06.281.06a.79.79 0 0 0 .648-.314.484.484 0 0 0 .102-.254l.233.32a1.093 1.093 0 0 1-.123.263 1.268 1.268 0 0 1-.227.269 1.125 1.125 0 0 1-.774.287c-.211 0-.399-.042-.565-.126a1.005 1.005 0 0 1-.388-.343.89.89 0 0 1-.141-.493c0-.172.032-.323.096-.454a.888.888 0 0 1 .287-.335c.127-.09.283-.158.466-.203.183-.048.392-.072.628-.072h.564Zm2.262 1.614.879-2.881h.771l-1.297 3.726c-.03.08-.069.166-.117.26s-.11.182-.188.266a.832.832 0 0 1-.284.206.952.952 0 0 1-.412.081.929.929 0 0 1-.185-.018 3.007 3.007 0 0 1-.165-.033l-.003-.55a2.601 2.601 0 0 0 .144.009.85.85 0 0 0 .298-.045.407.407 0 0 0 .195-.137.832.832 0 0 0 .131-.257l.233-.627Zm-.496-2.881.768 2.42.129.759-.499.129-1.175-3.308h.777Zm4.372 2.358a.362.362 0 0 0-.054-.195.47.47 0 0 0-.206-.161 1.954 1.954 0 0 0-.442-.131 3.813 3.813 0 0 1-.473-.135 1.488 1.488 0 0 1-.364-.194.744.744 0 0 1-.32-.628.83.83 0 0 1 .087-.373.943.943 0 0 1 .248-.311 1.2 1.2 0 0 1 .391-.212c.156-.052.329-.078.52-.078.271 0 .503.046.696.138.196.089.345.212.449.367a.914.914 0 0 1 .155.52h-.72a.46.46 0 0 0-.066-.239.455.455 0 0 0-.191-.182.654.654 0 0 0-.323-.072.702.702 0 0 0-.308.06.431.431 0 0 0-.179.149.382.382 0 0 0-.027.35.335.335 0 0 0 .108.116c.05.034.117.066.203.096.088.03.197.059.329.087.247.052.459.118.636.2.179.08.317.183.412.311a.764.764 0 0 1 .144.478.842.842 0 0 1-.093.394.881.881 0 0 1-.263.308 1.313 1.313 0 0 1-.415.2 1.863 1.863 0 0 1-.538.072c-.293 0-.541-.052-.744-.156a1.187 1.187 0 0 1-.463-.403.951.951 0 0 1-.155-.514h.696c.008.134.045.24.11.32a.597.597 0 0 0 .251.17.988.988 0 0 0 .314.051c.13 0 .238-.017.326-.051a.471.471 0 0 0 .2-.143.343.343 0 0 0 .069-.209Z",
              fill:"#454B5D"
            }),(0,n.jsx)("path",{
              d:"M358.239 145.387H35.491v142.456H358.24V145.387Z",
              fill:"#fff"
            }),(0,n.jsx)("path",{
              d:"M59.879 222.477H353.05",
              stroke:"#F4584C",
              strokeWidth:.521,
              strokeDasharray:"4.17 1.56"
            }),(0,n.jsx)("path",{
              d:"M59.879 267.379H353.05M59.879 228.445H353.05M59.879 189.512H353.05M59.879 150.578H353.05",
              stroke:"#E5E5E5",
              strokeWidth:1.041
            }),(0,n.jsx)("path",{
              d:"M59.879 267.379v5.191",
              stroke:"#6D6875",
              strokeWidth:1.041
            }),(0,n.jsx)("path",{
              d:"M59.879 267.637H353.05",
              stroke:"#6D6875",
              strokeWidth:.521
            }),(0,n.jsx)("path",{
              d:"M59.88 267.379h-5.19M59.88 228.445h-5.19M59.88 189.512h-5.19M59.88 150.578h-5.19M59.879 150.578V267.38",
              stroke:"#6D6875",
              strokeWidth:1.041
            }),(0,n.jsx)("mask",{
              id:"alerts-locked-illustration_svg__d",
              style:{
                maskType:"luminance"
              },
              maskUnits:"userSpaceOnUse",
              x:60,
              y:150,
              width:295,
              height:118,
              children:(0,n.jsx)("path",{
                d:"M354.19 150.598H60.49v117.168h293.7V150.598Z",
                fill:"#fff"
              })
            }),(0,n.jsxs)("g",{
              mask:"url(#alerts-locked-illustration_svg__d)",
              children:[(0,n.jsx)("mask",{
                id:"alerts-locked-illustration_svg__e",
                style:{
                  maskType:"luminance"
                },
                maskUnits:"userSpaceOnUse",
                x:59,
                y:150,
                width:33,
                height:325,
                children:(0,n.jsx)("path",{
                  d:"M91.734 150.598H59.97v323.904h31.765V150.598Z",
                  fill:"#fff"
                })
              }),(0,n.jsx)("g",{
                mask:"url(#alerts-locked-illustration_svg__e)",
                children:(0,n.jsx)("path",{
                  d:"m70.477 267.689 21.015-6.64 21.016-12.576 21.016-1.874 21.016.39 21.016-11.638 21.016-20.075 21.015-20.7 21.016-10.857 21.016-24.059 21.016 11.092 21.016 42.962 21.016 42.414 21.015 10.624",
                  stroke:"#7CB5EC",
                  strokeWidth:1.041,
                  strokeLinecap:"round",
                  strokeLinejoin:"round"
                })
              }),(0,n.jsx)("mask",{
                id:"alerts-locked-illustration_svg__f",
                style:{
                  maskType:"luminance"
                },
                maskUnits:"userSpaceOnUse",
                x:91,
                y:150,
                width:253,
                height:325,
                children:(0,n.jsx)("path",{
                  d:"M343.776 150.598H91.734v323.904h252.042V150.598Z",
                  fill:"#fff"
                })
              }),(0,n.jsx)("g",{
                mask:"url(#alerts-locked-illustration_svg__f)",
                children:(0,n.jsx)("path",{
                  d:"m70.477 267.689 21.015-6.64 21.016-12.576 21.016-1.874 21.016.39 21.016-11.638 21.016-20.075 21.015-20.7 21.016-10.857 21.016-24.059 21.016 11.092 21.016 42.962 21.016 42.414 21.015 10.624",
                  stroke:"#7CB5EC",
                  strokeWidth:1.041
                })
              }),(0,n.jsx)("path",{
                d:"m70.477 267.689 21.015-6.64 21.016-12.576 21.016-1.874 21.016.39 21.016-11.638 21.016-20.075 21.015-20.7 21.016-10.857 21.016-24.059 21.016 11.092 21.016 42.962 21.016 42.414 21.015 10.624",
                stroke:"silver",
                strokeOpacity:.01,
                strokeWidth:11.456,
                strokeLinecap:"round",
                strokeLinejoin:"round"
              })]
            }),(0,n.jsx)("path",{
              d:"M70.383 269.768a2.085 2.085 0 0 1-1.473-3.556 2.08 2.08 0 0 1 2.945-.001 2.083 2.083 0 0 1-1.47 3.557h-.002ZM112.043 250.553a2.085 2.085 0 0 1-1.474-3.556 2.087 2.087 0 0 1 2.946-.001 2.08 2.08 0 0 1 .002 2.945c-.39.391-.92.611-1.472.612h-.002ZM154.224 249.068a2.081 2.081 0 0 1-1.474-3.555 2.086 2.086 0 0 1 2.946-.001 2.086 2.086 0 0 1-1.47 3.556h-.002ZM196.404 217.357a2.081 2.081 0 0 1-1.474-3.555 2.086 2.086 0 0 1 2.946-.001 2.082 2.082 0 0 1-1.47 3.556h-.002ZM228.234 191.658a2.083 2.083 0 1 1-.004-4.166 2.083 2.083 0 0 1 .006 4.166h-.002ZM259.414 161.74a2.083 2.083 0 1 1-.004-4.166 2.083 2.083 0 0 1 .006 4.166h-.002ZM301.595 215.795a2.085 2.085 0 0 1-2.083-2.083 2.082 2.082 0 1 1 2.085 2.083h-.002ZM343.254 268.83a2.084 2.084 0 0 1-.001-4.166 2.083 2.083 0 0 1 .003 4.166h-.002Z",
              fill:"#7CB5EC"
            }),(0,n.jsx)("path",{
              d:"M77.265 267.672v5.207",
              stroke:"#6D6875",
              strokeWidth:1.041
            }),(0,n.jsx)("path",{
              d:"M71.034 277.225v-2.883h.537v2.883c0 .269-.055.495-.165.68a1.08 1.08 0 0 1-.456.422 1.477 1.477 0 0 1-.663.143c-.25 0-.471-.043-.665-.129a1.001 1.001 0 0 1-.456-.391c-.11-.176-.165-.396-.165-.663h.54c0 .171.031.312.095.422.063.11.15.191.263.244a.926.926 0 0 0 .388.078c.142 0 .269-.03.38-.09a.659.659 0 0 0 .27-.271.926.926 0 0 0 .097-.445Zm3.158.672v-1.558a.633.633 0 0 0-.073-.311.481.481 0 0 0-.212-.207.777.777 0 0 0-.353-.072.823.823 0 0 0-.344.067.588.588 0 0 0-.23.176.387.387 0 0 0-.08.235h-.518c0-.108.028-.216.084-.322a.946.946 0 0 1 .24-.288c.107-.088.234-.157.381-.207.15-.052.315-.078.498-.078.22 0 .414.037.582.112.17.074.302.187.397.338.097.149.145.337.145.562v1.41c0 .101.009.208.025.322.02.113.046.211.082.293v.045h-.54a.97.97 0 0 1-.062-.238 1.912 1.912 0 0 1-.022-.279Zm.09-1.318.005.364h-.523a1.95 1.95 0 0 0-.394.036.908.908 0 0 0-.291.104.467.467 0 0 0-.24.419c0 .095.02.182.064.26a.467.467 0 0 0 .192.188.698.698 0 0 0 .322.067.872.872 0 0 0 .708-.347.53.53 0 0 0 .117-.282l.221.249a.754.754 0 0 1-.106.26 1.255 1.255 0 0 1-.573.489 1.11 1.11 0 0 1-.442.084 1.16 1.16 0 0 1-.54-.12.925.925 0 0 1-.358-.322.851.851 0 0 1-.126-.456c0-.162.032-.305.095-.428a.824.824 0 0 1 .274-.31c.12-.084.263-.148.43-.19.169-.043.356-.065.563-.065h.601Zm1.759-.545v2.38h-.518v-3.026h.49l.028.646Zm-.123.752-.216-.008c.002-.207.033-.398.093-.574.06-.177.143-.331.251-.461a1.117 1.117 0 0 1 .887-.411c.15 0 .283.02.403.061.119.039.22.103.305.191a.843.843 0 0 1 .195.341c.045.138.067.306.067.506v1.983h-.52v-1.989a.871.871 0 0 0-.07-.38.43.43 0 0 0-.204-.21.73.73 0 0 0-.33-.067.767.767 0 0 0-.624.305 1.122 1.122 0 0 0-.237.713Zm6.693-.733v.621c0 .334-.03.616-.09.845-.06.229-.145.414-.257.554a.984.984 0 0 1-.406.305 1.455 1.455 0 0 1-.531.092c-.157 0-.301-.02-.434-.059a1.023 1.023 0 0 1-.358-.187 1.151 1.151 0 0 1-.268-.341 1.839 1.839 0 0 1-.17-.509c-.04-.2-.06-.433-.06-.7v-.621c0-.333.03-.613.09-.839.062-.225.148-.406.26-.542a.95.95 0 0 1 .403-.297c.158-.059.336-.089.531-.089.159 0 .304.019.437.058a.996.996 0 0 1 .358.182c.104.082.193.192.265.33.075.136.132.303.171.501.04.198.059.43.059.696Zm-.52.705v-.791c0-.183-.012-.343-.034-.481a1.5 1.5 0 0 0-.092-.358.713.713 0 0 0-.157-.241.56.56 0 0 0-.215-.134.77.77 0 0 0-.272-.045.73.73 0 0 0-.327.07.595.595 0 0 0-.24.215 1.166 1.166 0 0 0-.146.389c-.033.16-.05.355-.05.585v.791c0 .183.01.344.03.484.023.14.056.261.099.364.042.1.095.183.156.249a.591.591 0 0 0 .213.145c.082.03.172.045.271.045a.717.717 0 0 0 .333-.073.6.6 0 0 0 .238-.226c.065-.105.113-.238.145-.4.032-.164.048-.36.048-.588Zm3.753.554c0 .248-.058.459-.173.632a1.087 1.087 0 0 1-.465.392 1.558 1.558 0 0 1-.657.134c-.244 0-.464-.045-.66-.134-.196-.09-.35-.22-.464-.392a1.126 1.126 0 0 1-.17-.632c0-.162.03-.31.091-.445.064-.136.152-.254.266-.355.116-.101.252-.178.409-.232a1.56 1.56 0 0 1 .522-.084c.25 0 .473.049.669.146.196.095.35.226.462.394.113.168.17.36.17.576Zm-.52-.011a.802.802 0 0 0-.098-.4.688.688 0 0 0-.274-.274.83.83 0 0 0-.409-.098.826.826 0 0 0-.41.098.679.679 0 0 0-.266.274.82.82 0 0 0-.096.4c0 .156.031.291.093.403.063.11.153.194.268.254a.932.932 0 0 0 .417.087c.16 0 .298-.029.414-.087a.627.627 0 0 0 .266-.254.807.807 0 0 0 .095-.403Zm.425-1.899a.952.952 0 0 1-.157.534 1.098 1.098 0 0 1-.428.375 1.35 1.35 0 0 1-.615.137 1.38 1.38 0 0 1-.624-.137 1.076 1.076 0 0 1-.425-.375.965.965 0 0 1-.154-.534c0-.237.052-.438.154-.604.105-.166.247-.293.428-.381.181-.087.387-.131.618-.131.233 0 .44.044.621.131.181.088.323.215.425.381.105.166.157.367.157.604Zm-.517.008a.735.735 0 0 0-.087-.361.641.641 0 0 0-.24-.246.687.687 0 0 0-.359-.092.715.715 0 0 0-.358.087.604.604 0 0 0-.237.24.78.78 0 0 0-.084.372c0 .14.028.262.084.367a.62.62 0 0 0 .24.243.715.715 0 0 0 .358.087.7.7 0 0 0 .355-.087.62.62 0 0 0 .24-.243.748.748 0 0 0 .088-.367Z",
              fill:"#253858"
            }),(0,n.jsx)("path",{
              d:"M121.265 267.672v5.207",
              stroke:"#6D6875",
              strokeWidth:1.041
            }),(0,n.jsx)("path",{
              d:"M115.034 277.225v-2.883h.537v2.883c0 .269-.055.495-.165.68a1.08 1.08 0 0 1-.456.422 1.476 1.476 0 0 1-.663.143c-.25 0-.471-.043-.665-.129a1 1 0 0 1-.456-.391c-.11-.176-.165-.396-.165-.663h.54c0 .171.031.312.095.422.063.11.151.191.263.244a.92.92 0 0 0 .388.078c.142 0 .269-.03.381-.09a.66.66 0 0 0 .268-.271.93.93 0 0 0 .098-.445Zm3.158.672v-1.558a.627.627 0 0 0-.073-.311.477.477 0 0 0-.212-.207.779.779 0 0 0-.353-.072.825.825 0 0 0-.344.067.588.588 0 0 0-.229.176.387.387 0 0 0-.081.235h-.518c0-.108.028-.216.084-.322a.941.941 0 0 1 .241-.288c.106-.088.233-.157.38-.207.149-.052.315-.078.498-.078.22 0 .414.037.582.112a.87.87 0 0 1 .397.338c.097.149.145.337.145.562v1.41c0 .101.009.208.026.322.018.113.045.211.081.293v.045h-.54a.977.977 0 0 1-.062-.238 1.894 1.894 0 0 1-.022-.279Zm.089-1.318.006.364h-.523c-.147 0-.279.012-.394.036a.902.902 0 0 0-.291.104.467.467 0 0 0-.241.419c0 .095.022.182.064.26a.473.473 0 0 0 .193.188.7.7 0 0 0 .322.067.874.874 0 0 0 .708-.347.53.53 0 0 0 .117-.282l.221.249a.746.746 0 0 1-.106.26 1.257 1.257 0 0 1-.573.489 1.113 1.113 0 0 1-.442.084c-.206 0-.385-.04-.54-.12a.925.925 0 0 1-.358-.322.85.85 0 0 1-.126-.456c0-.162.032-.305.095-.428a.823.823 0 0 1 .274-.31 1.28 1.28 0 0 1 .431-.19c.168-.043.355-.065.562-.065h.601Zm1.76-.545v2.38h-.518v-3.026h.49l.028.646Zm-.123.752-.216-.008c.002-.207.033-.398.093-.574.059-.177.143-.331.251-.461a1.118 1.118 0 0 1 .887-.411c.149 0 .283.02.403.061a.73.73 0 0 1 .305.191.84.84 0 0 1 .195.341c.045.138.067.306.067.506v1.983h-.52v-1.989a.865.865 0 0 0-.07-.38.426.426 0 0 0-.204-.21.727.727 0 0 0-.33-.067.763.763 0 0 0-.352.081.846.846 0 0 0-.272.224 1.14 1.14 0 0 0-.237.713Zm5.837-2.467v4.095h-.518v-3.449l-1.043.381v-.467l1.48-.56h.081Zm2.176 2.157-.414-.107.204-2.027h2.09v.478h-1.651l-.123 1.108c.075-.043.169-.083.283-.121.115-.037.248-.056.397-.056.188 0 .357.033.506.098.149.064.276.155.381.274.106.12.187.263.243.431.056.168.084.355.084.562 0 .196-.027.376-.081.54a1.232 1.232 0 0 1-.238.431 1.07 1.07 0 0 1-.403.282c-.16.067-.349.101-.568.101-.164 0-.319-.022-.467-.067a1.21 1.21 0 0 1-.391-.21 1.133 1.133 0 0 1-.28-.352 1.402 1.402 0 0 1-.134-.498h.492a.963.963 0 0 0 .134.386.669.669 0 0 0 .263.238c.11.052.238.078.383.078a.806.806 0 0 0 .328-.064.652.652 0 0 0 .24-.185.816.816 0 0 0 .148-.291c.036-.114.054-.241.054-.383 0-.129-.018-.248-.054-.358a.809.809 0 0 0-.159-.288.689.689 0 0 0-.255-.19.807.807 0 0 0-.346-.07c-.174 0-.305.023-.395.07-.087.046-.178.11-.271.19Z",
              fill:"#253858"
            }),(0,n.jsx)("path",{
              d:"M165.265 267.672v5.207",
              stroke:"#6D6875",
              strokeWidth:1.041
            }),(0,n.jsx)("path",{
              d:"M159.034 277.225v-2.883h.537v2.883c0 .269-.055.495-.165.68a1.08 1.08 0 0 1-.456.422 1.476 1.476 0 0 1-.663.143c-.25 0-.471-.043-.665-.129a1 1 0 0 1-.456-.391c-.11-.176-.165-.396-.165-.663h.54c0 .171.031.312.095.422.063.11.151.191.263.244a.92.92 0 0 0 .388.078c.142 0 .269-.03.381-.09a.66.66 0 0 0 .268-.271.93.93 0 0 0 .098-.445Zm3.158.672v-1.558a.627.627 0 0 0-.073-.311.477.477 0 0 0-.212-.207.779.779 0 0 0-.353-.072.825.825 0 0 0-.344.067.588.588 0 0 0-.229.176.387.387 0 0 0-.081.235h-.518c0-.108.028-.216.084-.322a.941.941 0 0 1 .241-.288c.106-.088.233-.157.38-.207.149-.052.315-.078.498-.078.22 0 .414.037.582.112a.87.87 0 0 1 .397.338c.097.149.145.337.145.562v1.41c0 .101.009.208.026.322.018.113.045.211.081.293v.045h-.54a.977.977 0 0 1-.062-.238 1.894 1.894 0 0 1-.022-.279Zm.089-1.318.006.364h-.523c-.147 0-.279.012-.394.036a.902.902 0 0 0-.291.104.467.467 0 0 0-.241.419c0 .095.022.182.064.26a.473.473 0 0 0 .193.188.7.7 0 0 0 .322.067.874.874 0 0 0 .708-.347.53.53 0 0 0 .117-.282l.221.249a.746.746 0 0 1-.106.26 1.257 1.257 0 0 1-.573.489 1.113 1.113 0 0 1-.442.084c-.206 0-.385-.04-.54-.12a.925.925 0 0 1-.358-.322.85.85 0 0 1-.126-.456c0-.162.032-.305.095-.428a.823.823 0 0 1 .274-.31 1.28 1.28 0 0 1 .431-.19c.168-.043.355-.065.562-.065h.601Zm1.76-.545v2.38h-.518v-3.026h.49l.028.646Zm-.123.752-.216-.008c.002-.207.033-.398.093-.574.059-.177.143-.331.251-.461a1.118 1.118 0 0 1 .887-.411c.149 0 .283.02.403.061a.73.73 0 0 1 .305.191.84.84 0 0 1 .195.341c.045.138.067.306.067.506v1.983h-.52v-1.989a.865.865 0 0 0-.07-.38.426.426 0 0 0-.204-.21.727.727 0 0 0-.33-.067.763.763 0 0 0-.352.081.846.846 0 0 0-.272.224 1.14 1.14 0 0 0-.237.713Zm6.805 1.203v.425h-2.666v-.372l1.334-1.485c.164-.183.291-.338.381-.464a1.5 1.5 0 0 0 .19-.344.92.92 0 0 0 .056-.314.777.777 0 0 0-.084-.363.624.624 0 0 0-.241-.263.717.717 0 0 0-.386-.098.885.885 0 0 0-.453.106.651.651 0 0 0-.268.291.986.986 0 0 0-.09.431h-.517c0-.23.05-.439.151-.63.101-.19.25-.341.447-.453.198-.113.441-.17.73-.17.258 0 .478.045.66.137a.965.965 0 0 1 .42.38c.099.162.148.353.148.571 0 .119-.02.24-.061.363a1.806 1.806 0 0 1-.165.364c-.069.121-.15.241-.244.358a5.795 5.795 0 0 1-.293.347l-1.091 1.183h2.042Zm3.222 0v.425h-2.666v-.372l1.334-1.485c.165-.183.291-.338.381-.464.091-.129.155-.244.19-.344a.92.92 0 0 0 .056-.314.777.777 0 0 0-.084-.363.628.628 0 0 0-.24-.263.72.72 0 0 0-.386-.098.89.89 0 0 0-.454.106.657.657 0 0 0-.268.291.986.986 0 0 0-.09.431h-.517c0-.23.05-.439.151-.63.101-.19.25-.341.448-.453.197-.113.44-.17.73-.17.257 0 .477.045.66.137a.968.968 0 0 1 .419.38c.099.162.148.353.148.571 0 .119-.02.24-.061.363a1.806 1.806 0 0 1-.165.364c-.069.121-.15.241-.244.358a5.795 5.795 0 0 1-.293.347l-1.091 1.183h2.042Z",
              fill:"#253858"
            }),(0,n.jsx)("path",{
              d:"M208.529 267.672v5.207",
              stroke:"#6D6875",
              strokeWidth:1.041
            }),(0,n.jsx)("path",{
              d:"M203.034 277.225v-2.883h.537v2.883c0 .269-.055.495-.165.68a1.08 1.08 0 0 1-.456.422 1.476 1.476 0 0 1-.663.143c-.25 0-.471-.043-.665-.129a1 1 0 0 1-.456-.391c-.11-.176-.165-.396-.165-.663h.54c0 .171.031.312.095.422.063.11.151.191.263.244a.92.92 0 0 0 .388.078c.142 0 .269-.03.381-.09a.66.66 0 0 0 .268-.271.93.93 0 0 0 .098-.445Zm3.158.672v-1.558a.627.627 0 0 0-.073-.311.477.477 0 0 0-.212-.207.779.779 0 0 0-.353-.072.825.825 0 0 0-.344.067.588.588 0 0 0-.229.176.387.387 0 0 0-.081.235h-.518c0-.108.028-.216.084-.322a.941.941 0 0 1 .241-.288c.106-.088.233-.157.38-.207.149-.052.315-.078.498-.078.22 0 .414.037.582.112a.87.87 0 0 1 .397.338c.097.149.145.337.145.562v1.41c0 .101.009.208.026.322.018.113.045.211.081.293v.045h-.54a.977.977 0 0 1-.062-.238 1.894 1.894 0 0 1-.022-.279Zm.089-1.318.006.364h-.523c-.147 0-.279.012-.394.036a.902.902 0 0 0-.291.104.467.467 0 0 0-.241.419c0 .095.022.182.064.26a.473.473 0 0 0 .193.188.7.7 0 0 0 .322.067.874.874 0 0 0 .708-.347.53.53 0 0 0 .117-.282l.221.249a.746.746 0 0 1-.106.26 1.257 1.257 0 0 1-.573.489 1.113 1.113 0 0 1-.442.084c-.206 0-.385-.04-.54-.12a.925.925 0 0 1-.358-.322.85.85 0 0 1-.126-.456c0-.162.032-.305.095-.428a.823.823 0 0 1 .274-.31 1.28 1.28 0 0 1 .431-.19c.168-.043.355-.065.562-.065h.601Zm1.76-.545v2.38h-.518v-3.026h.49l.028.646Zm-.123.752-.216-.008c.002-.207.033-.398.093-.574.059-.177.143-.331.251-.461a1.118 1.118 0 0 1 .887-.411c.149 0 .283.02.403.061a.73.73 0 0 1 .305.191.84.84 0 0 1 .195.341c.045.138.067.306.067.506v1.983h-.52v-1.989a.865.865 0 0 0-.07-.38.426.426 0 0 0-.204-.21.727.727 0 0 0-.33-.067.763.763 0 0 0-.352.081.846.846 0 0 0-.272.224 1.14 1.14 0 0 0-.237.713Zm6.805 1.203v.425h-2.666v-.372l1.334-1.485c.164-.183.291-.338.381-.464a1.5 1.5 0 0 0 .19-.344.92.92 0 0 0 .056-.314.777.777 0 0 0-.084-.363.624.624 0 0 0-.241-.263.717.717 0 0 0-.386-.098.885.885 0 0 0-.453.106.651.651 0 0 0-.268.291.986.986 0 0 0-.09.431h-.517c0-.23.05-.439.151-.63.101-.19.25-.341.447-.453.198-.113.441-.17.73-.17.258 0 .478.045.66.137a.965.965 0 0 1 .42.38c.099.162.148.353.148.571 0 .119-.02.24-.061.363a1.806 1.806 0 0 1-.165.364c-.069.121-.15.241-.244.358a5.795 5.795 0 0 1-.293.347l-1.091 1.183h2.042Zm1.068-.008h.053c.299 0 .541-.042.727-.126.187-.084.331-.197.431-.339.101-.141.17-.301.207-.478.037-.179.056-.363.056-.551v-.624c0-.184-.021-.348-.064-.492a1.056 1.056 0 0 0-.174-.361.762.762 0 0 0-.249-.221.617.617 0 0 0-.296-.075.676.676 0 0 0-.559.271.943.943 0 0 0-.146.302c-.033.116-.05.242-.05.378 0 .121.015.238.045.352a.976.976 0 0 0 .137.308.71.71 0 0 0 .229.218.66.66 0 0 0 .327.078.788.788 0 0 0 .325-.067.93.93 0 0 0 .461-.459.834.834 0 0 0 .084-.316h.246c0 .155-.031.308-.092.459-.06.149-.144.285-.252.408a1.29 1.29 0 0 1-.38.297 1.047 1.047 0 0 1-.476.109c-.201 0-.375-.039-.523-.118a1.047 1.047 0 0 1-.363-.313 1.398 1.398 0 0 1-.21-.436 1.83 1.83 0 0 1-.067-.492c0-.194.027-.376.081-.546.054-.169.134-.319.24-.447a1.1 1.1 0 0 1 .395-.305c.158-.073.341-.109.548-.109.233 0 .432.046.596.14.164.093.297.218.4.374.104.157.181.333.229.529.049.196.073.397.073.604v.188c0 .21-.014.425-.042.643a2.591 2.591 0 0 1-.154.621 1.647 1.647 0 0 1-.327.531 1.505 1.505 0 0 1-.562.369c-.23.09-.513.135-.851.135h-.053v-.439Z",
              fill:"#253858"
            }),(0,n.jsx)("path",{
              d:"M251.773 267.672v5.207",
              stroke:"#6D6875",
              strokeWidth:1.041
            }),(0,n.jsx)("path",{
              d:"M245.949 274.342v4.072h-.54v-4.072h.54Zm1.706 1.832v.442h-1.824v-.442h1.824Zm.277-1.832v.442h-2.101v-.442h2.101Zm1.759 4.128c-.21 0-.402-.035-.573-.106a1.307 1.307 0 0 1-.439-.305 1.359 1.359 0 0 1-.28-.464 1.711 1.711 0 0 1-.098-.588v-.117c0-.246.036-.466.109-.658a1.47 1.47 0 0 1 .297-.492 1.27 1.27 0 0 1 .425-.305c.158-.069.322-.103.492-.103.216 0 .403.037.559.112.159.074.289.179.389.313.101.132.176.289.224.47.049.179.073.375.073.587v.232h-2.26v-.422h1.742v-.039a1.267 1.267 0 0 0-.084-.392.7.7 0 0 0-.223-.313.656.656 0 0 0-.42-.123.705.705 0 0 0-.579.294 1.09 1.09 0 0 0-.165.355c-.039.14-.059.301-.059.484v.117c0 .144.02.279.059.406.041.125.1.235.176.33a.868.868 0 0 0 .283.224.862.862 0 0 0 .38.081.903.903 0 0 0 .464-.112c.127-.075.238-.175.333-.299l.314.248a1.51 1.51 0 0 1-.249.283 1.206 1.206 0 0 1-.372.218 1.442 1.442 0 0 1-.518.084Zm1.779-4.352h.52v3.709l-.044.587h-.476v-4.296Zm2.565 2.758v.058c0 .22-.026.425-.078.613a1.524 1.524 0 0 1-.23.487 1.05 1.05 0 0 1-.369.321 1.052 1.052 0 0 1-.501.115c-.192 0-.36-.033-.506-.098a.989.989 0 0 1-.363-.288 1.473 1.473 0 0 1-.238-.453 2.82 2.82 0 0 1-.12-.599v-.257c.022-.224.062-.424.12-.601.059-.177.139-.328.238-.453a.962.962 0 0 1 .363-.289c.144-.067.311-.1.501-.1s.359.037.506.112c.147.072.27.177.369.313.101.136.177.299.23.489.052.189.078.399.078.63Zm-.52.058v-.058c0-.151-.014-.293-.042-.425a1.091 1.091 0 0 0-.135-.353.658.658 0 0 0-.243-.24.717.717 0 0 0-.372-.09.804.804 0 0 0-.341.067.746.746 0 0 0-.243.182.927.927 0 0 0-.165.257 1.507 1.507 0 0 0-.093.297v.674c.03.13.079.256.146.378.069.119.16.217.274.293a.753.753 0 0 0 .428.115c.14 0 .259-.028.358-.084a.676.676 0 0 0 .243-.238c.063-.1.11-.217.14-.349.03-.133.045-.275.045-.426Zm5.096-.881v.621c0 .334-.03.616-.09.845a1.462 1.462 0 0 1-.257.554.982.982 0 0 1-.406.305 1.449 1.449 0 0 1-.531.092c-.157 0-.301-.02-.434-.059a1.031 1.031 0 0 1-.358-.187 1.163 1.163 0 0 1-.268-.341 1.82 1.82 0 0 1-.171-.509 3.695 3.695 0 0 1-.058-.7v-.621c0-.333.029-.613.089-.839a1.45 1.45 0 0 1 .26-.542.95.95 0 0 1 .403-.297c.158-.059.336-.089.531-.089.159 0 .304.019.437.058.134.038.253.098.358.182.104.082.193.192.265.33.075.136.132.303.171.501.039.198.059.43.059.696Zm-.52.705v-.791c0-.183-.012-.343-.034-.481a1.525 1.525 0 0 0-.092-.358.72.72 0 0 0-.157-.241.554.554 0 0 0-.215-.134.772.772 0 0 0-.272-.045.728.728 0 0 0-.327.07.592.592 0 0 0-.24.215 1.163 1.163 0 0 0-.146.389c-.033.16-.05.355-.05.585v.791c0 .183.01.344.031.484.022.14.055.261.097.364a.87.87 0 0 0 .157.249.59.59 0 0 0 .213.145c.082.03.172.045.271.045a.717.717 0 0 0 .333-.073.604.604 0 0 0 .238-.226c.065-.105.113-.238.145-.4.032-.164.048-.36.048-.588Zm1.84-.282-.414-.107.204-2.027h2.09v.478h-1.651l-.123 1.108c.075-.043.169-.083.283-.121.115-.037.248-.056.397-.056.188 0 .357.033.506.098.149.064.276.155.381.274.106.12.187.263.243.431.056.168.084.355.084.562 0 .196-.027.376-.081.54a1.232 1.232 0 0 1-.238.431 1.07 1.07 0 0 1-.403.282c-.16.067-.349.101-.568.101-.164 0-.319-.022-.467-.067a1.21 1.21 0 0 1-.391-.21 1.133 1.133 0 0 1-.28-.352 1.402 1.402 0 0 1-.134-.498h.492a.963.963 0 0 0 .134.386.669.669 0 0 0 .263.238c.11.052.238.078.383.078a.806.806 0 0 0 .328-.064.652.652 0 0 0 .24-.185.816.816 0 0 0 .148-.291c.036-.114.054-.241.054-.383 0-.129-.018-.248-.054-.358a.809.809 0 0 0-.159-.288.689.689 0 0 0-.255-.19.807.807 0 0 0-.346-.07c-.174 0-.305.023-.395.07-.087.046-.178.11-.271.19Z",
              fill:"#253858"
            }),(0,n.jsx)("path",{
              d:"M295.458 267.672v5.207",
              stroke:"#6D6875",
              strokeWidth:1.041
            }),(0,n.jsx)("path",{
              d:"M289.949 274.342v4.072h-.54v-4.072h.54Zm1.706 1.832v.442h-1.824v-.442h1.824Zm.277-1.832v.442h-2.101v-.442h2.101Zm1.759 4.128c-.21 0-.402-.035-.573-.106a1.307 1.307 0 0 1-.439-.305 1.359 1.359 0 0 1-.28-.464 1.711 1.711 0 0 1-.098-.588v-.117c0-.246.036-.466.109-.658a1.47 1.47 0 0 1 .297-.492 1.27 1.27 0 0 1 .425-.305c.158-.069.322-.103.492-.103.216 0 .403.037.559.112.159.074.289.179.389.313.101.132.176.289.224.47.049.179.073.375.073.587v.232h-2.26v-.422h1.742v-.039a1.267 1.267 0 0 0-.084-.392.7.7 0 0 0-.223-.313.656.656 0 0 0-.42-.123.705.705 0 0 0-.579.294 1.09 1.09 0 0 0-.165.355c-.039.14-.059.301-.059.484v.117c0 .144.02.279.059.406.041.125.1.235.176.33a.868.868 0 0 0 .283.224.862.862 0 0 0 .38.081.903.903 0 0 0 .464-.112c.127-.075.238-.175.333-.299l.314.248a1.51 1.51 0 0 1-.249.283 1.206 1.206 0 0 1-.372.218 1.442 1.442 0 0 1-.518.084Zm1.779-4.352h.52v3.709l-.044.587h-.476v-4.296Zm2.565 2.758v.058c0 .22-.026.425-.078.613a1.524 1.524 0 0 1-.23.487 1.05 1.05 0 0 1-.369.321 1.052 1.052 0 0 1-.501.115c-.192 0-.36-.033-.506-.098a.989.989 0 0 1-.363-.288 1.473 1.473 0 0 1-.238-.453 2.82 2.82 0 0 1-.12-.599v-.257c.022-.224.062-.424.12-.601.059-.177.139-.328.238-.453a.962.962 0 0 1 .363-.289c.144-.067.311-.1.501-.1s.359.037.506.112c.147.072.27.177.369.313.101.136.177.299.23.489.052.189.078.399.078.63Zm-.52.058v-.058c0-.151-.014-.293-.042-.425a1.091 1.091 0 0 0-.135-.353.658.658 0 0 0-.243-.24.717.717 0 0 0-.372-.09.804.804 0 0 0-.341.067.746.746 0 0 0-.243.182.927.927 0 0 0-.165.257 1.507 1.507 0 0 0-.093.297v.674c.03.13.079.256.146.378.069.119.16.217.274.293a.753.753 0 0 0 .428.115c.14 0 .259-.028.358-.084a.676.676 0 0 0 .243-.238c.063-.1.11-.217.14-.349.03-.133.045-.275.045-.426Zm4.24-2.615v4.095h-.518v-3.449l-1.043.381v-.467l1.48-.56h.081Zm4.19 3.67v.425h-2.666v-.372l1.334-1.485c.165-.183.291-.338.381-.464.091-.129.155-.244.19-.344a.92.92 0 0 0 .056-.314.777.777 0 0 0-.084-.363.628.628 0 0 0-.24-.263.72.72 0 0 0-.386-.098.89.89 0 0 0-.454.106.657.657 0 0 0-.268.291.986.986 0 0 0-.09.431h-.517c0-.23.05-.439.151-.63.101-.19.25-.341.448-.453.197-.113.44-.17.73-.17.257 0 .477.045.66.137a.968.968 0 0 1 .419.38c.099.162.148.353.148.571 0 .119-.02.24-.061.363a1.806 1.806 0 0 1-.165.364c-.069.121-.15.241-.244.358a5.795 5.795 0 0 1-.293.347l-1.091 1.183h2.042Z",
              fill:"#253858"
            }),(0,n.jsx)("path",{
              d:"M339.849 267.672v5.207",
              stroke:"#6D6875",
              strokeWidth:1.041
            }),(0,n.jsx)("path",{
              d:"M333.949 274.342v4.072h-.54v-4.072h.54Zm1.706 1.832v.442h-1.824v-.442h1.824Zm.277-1.832v.442h-2.101v-.442h2.101Zm1.759 4.128c-.21 0-.402-.035-.573-.106a1.307 1.307 0 0 1-.439-.305 1.359 1.359 0 0 1-.28-.464 1.711 1.711 0 0 1-.098-.588v-.117c0-.246.036-.466.109-.658a1.47 1.47 0 0 1 .297-.492 1.27 1.27 0 0 1 .425-.305c.158-.069.322-.103.492-.103.216 0 .403.037.559.112.159.074.289.179.389.313.101.132.176.289.224.47.049.179.073.375.073.587v.232h-2.26v-.422h1.742v-.039a1.267 1.267 0 0 0-.084-.392.7.7 0 0 0-.223-.313.656.656 0 0 0-.42-.123.705.705 0 0 0-.579.294 1.09 1.09 0 0 0-.165.355c-.039.14-.059.301-.059.484v.117c0 .144.02.279.059.406.041.125.1.235.176.33a.868.868 0 0 0 .283.224.862.862 0 0 0 .38.081.903.903 0 0 0 .464-.112c.127-.075.238-.175.333-.299l.314.248a1.51 1.51 0 0 1-.249.283 1.206 1.206 0 0 1-.372.218 1.442 1.442 0 0 1-.518.084Zm1.779-4.352h.52v3.709l-.044.587h-.476v-4.296Zm2.565 2.758v.058c0 .22-.026.425-.078.613a1.524 1.524 0 0 1-.23.487 1.05 1.05 0 0 1-.369.321 1.052 1.052 0 0 1-.501.115c-.192 0-.36-.033-.506-.098a.989.989 0 0 1-.363-.288 1.473 1.473 0 0 1-.238-.453 2.82 2.82 0 0 1-.12-.599v-.257c.022-.224.062-.424.12-.601.059-.177.139-.328.238-.453a.962.962 0 0 1 .363-.289c.144-.067.311-.1.501-.1s.359.037.506.112c.147.072.27.177.369.313.101.136.177.299.23.489.052.189.078.399.078.63Zm-.52.058v-.058c0-.151-.014-.293-.042-.425a1.091 1.091 0 0 0-.135-.353.658.658 0 0 0-.243-.24.717.717 0 0 0-.372-.09.804.804 0 0 0-.341.067.746.746 0 0 0-.243.182.927.927 0 0 0-.165.257 1.507 1.507 0 0 0-.093.297v.674c.03.13.079.256.146.378.069.119.16.217.274.293a.753.753 0 0 0 .428.115c.14 0 .259-.028.358-.084a.676.676 0 0 0 .243-.238c.063-.1.11-.217.14-.349.03-.133.045-.275.045-.426Zm4.24-2.615v4.095h-.518v-3.449l-1.043.381v-.467l1.48-.56h.081Zm2.036 3.662h.053c.299 0 .541-.042.727-.126.187-.084.331-.197.431-.339.101-.141.17-.301.207-.478.037-.179.056-.363.056-.551v-.624c0-.184-.021-.348-.064-.492a1.056 1.056 0 0 0-.174-.361.762.762 0 0 0-.249-.221.617.617 0 0 0-.296-.075.676.676 0 0 0-.559.271.943.943 0 0 0-.146.302c-.033.116-.05.242-.05.378 0 .121.015.238.045.352a.976.976 0 0 0 .137.308.71.71 0 0 0 .229.218.66.66 0 0 0 .327.078.788.788 0 0 0 .325-.067.93.93 0 0 0 .461-.459.834.834 0 0 0 .084-.316h.246c0 .155-.031.308-.092.459-.06.149-.144.285-.252.408a1.29 1.29 0 0 1-.38.297 1.047 1.047 0 0 1-.476.109c-.201 0-.375-.039-.523-.118a1.047 1.047 0 0 1-.363-.313 1.398 1.398 0 0 1-.21-.436 1.83 1.83 0 0 1-.067-.492c0-.194.027-.376.081-.546.054-.169.134-.319.24-.447a1.1 1.1 0 0 1 .395-.305c.158-.073.341-.109.548-.109.233 0 .432.046.596.14.164.093.297.218.4.374.104.157.181.333.229.529.049.196.073.397.073.604v.188c0 .21-.014.425-.042.643a2.591 2.591 0 0 1-.154.621 1.647 1.647 0 0 1-.327.531 1.505 1.505 0 0 1-.562.369c-.23.09-.513.135-.851.135h-.053v-.439Z",
              fill:"#253858"
            }),(0,n.jsx)("path",{
              d:"M51.967 266.905v.621c0 .334-.03.615-.09.845-.06.229-.146.414-.257.553a.975.975 0 0 1-.406.305 1.434 1.434 0 0 1-.531.093c-.157 0-.301-.02-.434-.059a1.024 1.024 0 0 1-.358-.188 1.126 1.126 0 0 1-.268-.341 1.828 1.828 0 0 1-.171-.509 3.656 3.656 0 0 1-.059-.699v-.621c0-.334.03-.613.09-.839a1.44 1.44 0 0 1 .26-.543.94.94 0 0 1 .403-.296c.158-.06.335-.09.531-.09.159 0 .304.02.436.059a.98.98 0 0 1 .624.512c.075.136.132.303.17.501.04.197.06.429.06.696Zm-.52.705v-.792c0-.182-.012-.343-.034-.481a1.513 1.513 0 0 0-.093-.358.698.698 0 0 0-.156-.24.55.55 0 0 0-.216-.135.794.794 0 0 0-.27-.044.73.73 0 0 0-.328.07.58.58 0 0 0-.24.215 1.16 1.16 0 0 0-.146.389c-.034.16-.05.355-.05.584v.792c0 .183.01.344.03.484.023.14.055.261.098.363a.828.828 0 0 0 .157.249.594.594 0 0 0 .212.146c.082.03.173.044.272.044a.73.73 0 0 0 .333-.072.601.601 0 0 0 .237-.227c.066-.104.114-.238.146-.4a3.14 3.14 0 0 0 .047-.587ZM44.098 228.394l-.414-.107.204-2.027h2.09v.478h-1.651l-.123 1.108a1.302 1.302 0 0 1 .68-.177c.188 0 .357.033.506.098.15.064.276.155.38.274.107.12.188.263.244.431.056.168.083.355.083.562 0 .196-.026.376-.08.54a1.215 1.215 0 0 1-.238.431 1.07 1.07 0 0 1-.403.282c-.16.067-.35.101-.568.101a1.59 1.59 0 0 1-.467-.067 1.215 1.215 0 0 1-.392-.21 1.142 1.142 0 0 1-.28-.352 1.416 1.416 0 0 1-.133-.498h.492a.966.966 0 0 0 .134.386.67.67 0 0 0 .263.238c.11.052.238.078.383.078a.787.787 0 0 0 .327-.065.642.642 0 0 0 .24-.184.821.821 0 0 0 .15-.291c.035-.114.052-.241.052-.383 0-.129-.017-.248-.053-.358a.82.82 0 0 0-.16-.288.69.69 0 0 0-.254-.19.811.811 0 0 0-.347-.07c-.173 0-.304.023-.394.07-.088.046-.178.11-.271.19Zm5.124-.423v.621c0 .334-.03.616-.09.845-.06.229-.145.414-.257.554a.983.983 0 0 1-.406.305 1.456 1.456 0 0 1-.531.092c-.157 0-.301-.02-.434-.059a1.022 1.022 0 0 1-.358-.187 1.151 1.151 0 0 1-.268-.341 1.836 1.836 0 0 1-.17-.509c-.04-.2-.06-.433-.06-.7v-.621c0-.333.03-.613.09-.839.062-.225.148-.406.26-.542a.95.95 0 0 1 .403-.297c.158-.059.336-.089.531-.089.159 0 .304.019.437.058a.996.996 0 0 1 .358.182c.104.082.193.192.265.33.075.136.132.303.171.501.04.198.059.43.059.696Zm-.52.705v-.791c0-.183-.012-.343-.034-.481-.02-.14-.051-.26-.092-.358a.714.714 0 0 0-.157-.241.56.56 0 0 0-.215-.134.77.77 0 0 0-.272-.045.73.73 0 0 0-.327.07.594.594 0 0 0-.24.215 1.168 1.168 0 0 0-.146.389c-.033.16-.05.355-.05.585v.791c0 .183.01.344.03.484.023.14.056.261.098.364.043.1.096.183.157.249a.592.592 0 0 0 .213.145c.082.03.172.045.27.045a.717.717 0 0 0 .334-.073.599.599 0 0 0 .237-.226c.066-.105.114-.238.146-.4.032-.165.047-.36.047-.588Zm3.742-.705v.621c0 .334-.03.616-.09.845-.06.229-.145.414-.257.554a.983.983 0 0 1-.406.305 1.455 1.455 0 0 1-.53.092c-.158 0-.302-.02-.434-.059a1.022 1.022 0 0 1-.358-.187 1.151 1.151 0 0 1-.269-.341 1.836 1.836 0 0 1-.17-.509c-.04-.2-.06-.433-.06-.7v-.621c0-.333.03-.613.09-.839.062-.225.148-.406.26-.542a.951.951 0 0 1 .403-.297c.159-.059.336-.089.532-.089.158 0 .303.019.436.058a.996.996 0 0 1 .358.182c.104.082.193.192.266.33.074.136.131.303.17.501.04.198.059.43.059.696Zm-.52.705v-.791c0-.183-.012-.343-.034-.481a1.5 1.5 0 0 0-.092-.358.714.714 0 0 0-.157-.241.56.56 0 0 0-.215-.134.77.77 0 0 0-.272-.045.73.73 0 0 0-.327.07.594.594 0 0 0-.24.215 1.168 1.168 0 0 0-.146.389c-.033.16-.05.355-.05.585v.791c0 .183.01.344.03.484.023.14.056.261.099.364.042.1.095.183.156.249a.591.591 0 0 0 .213.145c.082.03.172.045.271.045a.717.717 0 0 0 .333-.073.599.599 0 0 0 .238-.226c.065-.105.113-.238.145-.4.032-.165.048-.36.048-.588ZM41.681 187.304v4.094h-.517v-3.448l-1.043.38v-.467l1.48-.559h.08Zm4.079 1.734v.621c0 .333-.03.615-.09.844-.06.23-.145.414-.257.554a.975.975 0 0 1-.406.305 1.434 1.434 0 0 1-.531.092 1.53 1.53 0 0 1-.434-.058 1.041 1.041 0 0 1-.358-.188 1.126 1.126 0 0 1-.268-.341 1.839 1.839 0 0 1-.171-.509 3.67 3.67 0 0 1-.059-.699v-.621c0-.334.03-.614.09-.839a1.44 1.44 0 0 1 .26-.543.94.94 0 0 1 .403-.296c.158-.06.335-.09.531-.09.159 0 .304.02.436.059a.98.98 0 0 1 .624.512c.075.136.132.303.17.5.04.198.06.43.06.697Zm-.52.705v-.792c0-.183-.012-.343-.034-.481a1.513 1.513 0 0 0-.093-.358.713.713 0 0 0-.156-.241.56.56 0 0 0-.216-.134.77.77 0 0 0-.27-.045.743.743 0 0 0-.328.07.59.59 0 0 0-.24.216 1.16 1.16 0 0 0-.146.389c-.034.16-.05.355-.05.584v.792c0 .182.01.344.03.484.023.139.055.261.098.363a.828.828 0 0 0 .157.249.579.579 0 0 0 .212.145c.082.03.173.045.272.045a.73.73 0 0 0 .333-.072.602.602 0 0 0 .237-.227 1.18 1.18 0 0 0 .146-.4 3.14 3.14 0 0 0 .047-.587Zm3.742-.705v.621c0 .333-.03.615-.09.844-.06.23-.145.414-.257.554a.975.975 0 0 1-.406.305 1.434 1.434 0 0 1-.531.092c-.157 0-.301-.019-.434-.058a1.041 1.041 0 0 1-.358-.188 1.126 1.126 0 0 1-.268-.341 1.839 1.839 0 0 1-.17-.509c-.04-.2-.06-.433-.06-.699v-.621c0-.334.03-.614.09-.839a1.44 1.44 0 0 1 .26-.543.94.94 0 0 1 .403-.296c.158-.06.335-.09.531-.09.159 0 .304.02.437.059a.98.98 0 0 1 .623.512c.075.136.132.303.17.5.04.198.06.43.06.697Zm-.52.705v-.792c0-.183-.012-.343-.034-.481a1.513 1.513 0 0 0-.092-.358.713.713 0 0 0-.157-.241.56.56 0 0 0-.215-.134.77.77 0 0 0-.272-.045.743.743 0 0 0-.327.07.59.59 0 0 0-.24.216 1.157 1.157 0 0 0-.146.389c-.034.16-.05.355-.05.584v.792c0 .182.01.344.03.484a1.6 1.6 0 0 0 .098.363.83.83 0 0 0 .157.249.579.579 0 0 0 .212.145c.082.03.173.045.272.045a.73.73 0 0 0 .333-.072.602.602 0 0 0 .237-.227 1.18 1.18 0 0 0 .146-.4 3.14 3.14 0 0 0 .047-.587Zm3.742-.705v.621c0 .333-.03.615-.09.844-.06.23-.145.414-.257.554a.975.975 0 0 1-.406.305 1.434 1.434 0 0 1-.531.092 1.53 1.53 0 0 1-.434-.058 1.04 1.04 0 0 1-.358-.188 1.123 1.123 0 0 1-.268-.341 1.839 1.839 0 0 1-.17-.509c-.04-.2-.06-.433-.06-.699v-.621c0-.334.03-.614.09-.839a1.44 1.44 0 0 1 .26-.543.94.94 0 0 1 .403-.296c.158-.06.335-.09.531-.09.159 0 .304.02.437.059a.981.981 0 0 1 .623.512c.075.136.132.303.171.5.04.198.059.43.059.697Zm-.52.705v-.792c0-.183-.012-.343-.034-.481a1.513 1.513 0 0 0-.092-.358.713.713 0 0 0-.157-.241.559.559 0 0 0-.215-.134.77.77 0 0 0-.272-.045.742.742 0 0 0-.327.07.59.59 0 0 0-.24.216 1.157 1.157 0 0 0-.146.389c-.034.16-.05.355-.05.584v.792c0 .182.01.344.03.484a1.6 1.6 0 0 0 .098.363.83.83 0 0 0 .157.249.58.58 0 0 0 .213.145c.082.03.172.045.27.045a.73.73 0 0 0 .334-.072.602.602 0 0 0 .237-.227c.066-.104.114-.238.146-.4a3.14 3.14 0 0 0 .047-.587ZM41.681 148.37v4.095h-.517v-3.449l-1.043.381v-.468l1.48-.559h.08Zm2.177 2.157-.414-.107.204-2.028h2.09v.479h-1.651l-.123 1.107c.074-.043.169-.083.282-.12.116-.037.248-.056.398-.056.188 0 .357.033.506.098.149.063.276.155.38.274.106.119.188.263.243.431.056.168.084.355.084.562 0 .196-.027.376-.08.54a1.215 1.215 0 0 1-.239.431 1.07 1.07 0 0 1-.402.282c-.16.067-.35.101-.568.101-.164 0-.32-.023-.467-.067a1.214 1.214 0 0 1-.392-.21 1.136 1.136 0 0 1-.28-.353 1.407 1.407 0 0 1-.134-.497h.493a.966.966 0 0 0 .134.386.658.658 0 0 0 .263.237c.11.053.237.079.383.079a.787.787 0 0 0 .327-.065.653.653 0 0 0 .24-.184.823.823 0 0 0 .149-.291 1.29 1.29 0 0 0 .053-.383c0-.129-.018-.248-.053-.358a.82.82 0 0 0-.16-.288.693.693 0 0 0-.254-.191.826.826 0 0 0-.347-.07.886.886 0 0 0-.394.07c-.088.047-.178.11-.271.191Zm5.124-.423v.621c0 .334-.03.615-.09.845-.06.229-.145.414-.257.554a.981.981 0 0 1-.406.304 1.434 1.434 0 0 1-.531.093c-.157 0-.301-.02-.434-.059a1.04 1.04 0 0 1-.358-.187 1.143 1.143 0 0 1-.268-.342 1.817 1.817 0 0 1-.17-.509 3.664 3.664 0 0 1-.06-.699v-.621c0-.334.03-.613.09-.839.061-.226.148-.406.26-.543a.957.957 0 0 1 .403-.296c.158-.06.335-.089.531-.089.159 0 .304.019.437.058a.996.996 0 0 1 .358.182c.104.082.192.192.265.33.075.136.132.303.17.501.04.197.06.43.06.696Zm-.52.705v-.792c0-.182-.012-.343-.034-.481a1.526 1.526 0 0 0-.092-.358.708.708 0 0 0-.157-.24.549.549 0 0 0-.215-.134.77.77 0 0 0-.272-.045.73.73 0 0 0-.327.07.588.588 0 0 0-.24.215 1.166 1.166 0 0 0-.146.389c-.034.16-.05.355-.05.584v.792c0 .183.01.344.03.484.023.14.055.261.098.364.043.1.095.183.157.248a.581.581 0 0 0 .212.146c.082.03.173.045.272.045a.73.73 0 0 0 .333-.073.602.602 0 0 0 .237-.227c.066-.104.114-.237.146-.4.032-.164.047-.359.047-.587Zm3.742-.705v.621c0 .334-.03.615-.09.845-.06.229-.145.414-.257.554a.981.981 0 0 1-.406.304 1.434 1.434 0 0 1-.531.093c-.157 0-.301-.02-.434-.059a1.038 1.038 0 0 1-.358-.187 1.14 1.14 0 0 1-.268-.342 1.816 1.816 0 0 1-.17-.509 3.664 3.664 0 0 1-.06-.699v-.621c0-.334.03-.613.09-.839.062-.226.148-.406.26-.543a.957.957 0 0 1 .403-.296c.158-.06.335-.089.531-.089.159 0 .304.019.437.058a.997.997 0 0 1 .358.182c.104.082.193.192.265.33.075.136.132.303.171.501.04.197.059.43.059.696Zm-.52.705v-.792c0-.182-.012-.343-.034-.481a1.526 1.526 0 0 0-.092-.358.708.708 0 0 0-.157-.24.547.547 0 0 0-.215-.134.77.77 0 0 0-.272-.045.729.729 0 0 0-.327.07.588.588 0 0 0-.24.215 1.166 1.166 0 0 0-.146.389c-.034.16-.05.355-.05.584v.792c0 .183.01.344.03.484.023.14.056.261.098.364.043.1.095.183.157.248a.582.582 0 0 0 .213.146c.082.03.172.045.27.045a.73.73 0 0 0 .334-.073.602.602 0 0 0 .237-.227 1.17 1.17 0 0 0 .146-.4c.032-.164.047-.359.047-.587Z",
              fill:"#666"
            }),(0,n.jsx)("path",{
              d:"M60 223.004h293v44H60v-44Z",
              fill:"#44AAD5",
              fillOpacity:.2
            }),(0,n.jsx)("path",{
              d:"M134.476 297.97h.669l1.258 3.355 1.255-3.355h.67l-1.662 4.35h-.532l-1.658-4.35Zm-.305 0h.637l.11 2.904v1.446h-.747v-4.35Zm3.825 0h.639v4.35h-.75v-1.446l.111-2.904Zm2.229 1.117v3.233h-.723v-3.233h.723Zm-.771-.848c0-.11.036-.201.108-.272a.41.41 0 0 1 .305-.111c.127 0 .228.037.301.111a.361.361 0 0 1 .111.272.36.36 0 0 1-.111.269.415.415 0 0 1-.301.107.42.42 0 0 1-.305-.107.366.366 0 0 1-.108-.269Zm2.274 1.538v2.543h-.72v-3.233h.678l.042.69Zm-.128.807-.233-.003c.002-.229.033-.439.095-.63.064-.191.152-.356.263-.493.114-.138.249-.243.406-.317.158-.076.333-.114.526-.114.156 0 .296.022.422.066a.77.77 0 0 1 .325.206.936.936 0 0 1 .21.374c.047.151.071.338.071.559v2.088h-.723v-2.091a.815.815 0 0 0-.069-.368.382.382 0 0 0-.194-.194.724.724 0 0 0-.314-.06.691.691 0 0 0-.331.078.743.743 0 0 0-.248.212c-.066.09-.117.193-.153.311a1.31 1.31 0 0 0-.053.376Zm3.591-1.497v3.233h-.723v-3.233h.723Zm-.771-.848c0-.11.036-.201.108-.272a.411.411 0 0 1 .305-.111c.127 0 .228.037.301.111a.361.361 0 0 1 .111.272.36.36 0 0 1-.111.269.415.415 0 0 1-.301.107.421.421 0 0 1-.305-.107.366.366 0 0 1-.108-.269Zm2.28 1.506v2.575h-.72v-3.233h.678l.042.658Zm-.116.839-.245-.003c0-.223.028-.429.083-.618.056-.189.138-.354.245-.493.108-.142.241-.25.401-.326.161-.078.347-.117.558-.117.148 0 .282.022.404.066.123.042.23.109.32.2.091.092.161.21.209.353.05.143.074.317.074.52v2.154h-.72v-2.091a.808.808 0 0 0-.071-.371.401.401 0 0 0-.201-.191.718.718 0 0 0-.307-.06.717.717 0 0 0-.347.078.65.65 0 0 0-.23.212.949.949 0 0 0-.132.311 1.673 1.673 0 0 0-.041.376Zm2.005-.191-.338.075c0-.195.027-.38.081-.553.055-.175.136-.329.242-.46a1.13 1.13 0 0 1 .397-.314c.157-.076.338-.114.541-.114.165 0 .313.023.442.069a.818.818 0 0 1 .335.209.94.94 0 0 1 .209.374c.048.151.072.335.072.55v2.091h-.723v-2.094a.818.818 0 0 0-.072-.38.377.377 0 0 0-.197-.185.797.797 0 0 0-.308-.054.664.664 0 0 0-.296.063.594.594 0 0 0-.212.17.767.767 0 0 0-.132.248 1.097 1.097 0 0 0-.041.305Zm4.667 1.165v-2.471h.723v3.233h-.681l-.042-.762Zm.102-.672.242-.006c0 .217-.024.417-.072.601a1.414 1.414 0 0 1-.221.475c-.1.133-.227.238-.383.314a1.3 1.3 0 0 1-.558.11c-.158 0-.302-.023-.434-.069a.87.87 0 0 1-.34-.212.947.947 0 0 1-.218-.373 1.724 1.724 0 0 1-.078-.55v-2.089h.72v2.095c0 .117.014.216.042.296.028.077.066.14.113.188a.405.405 0 0 0 .168.102.701.701 0 0 0 .203.029c.205 0 .366-.039.484-.119a.665.665 0 0 0 .254-.329 1.3 1.3 0 0 0 .078-.463Zm2.079-1.141v2.575h-.72v-3.233h.678l.042.658Zm-.116.839-.245-.003c0-.223.028-.429.083-.618.056-.189.138-.354.245-.493.108-.142.241-.25.401-.326.161-.078.347-.117.559-.117.147 0 .281.022.403.066.123.042.23.109.32.2.091.092.161.21.209.353.05.143.075.317.075.52v2.154h-.721v-2.091a.808.808 0 0 0-.071-.371.401.401 0 0 0-.201-.191.718.718 0 0 0-.307-.06.717.717 0 0 0-.347.078.65.65 0 0 0-.23.212.927.927 0 0 0-.131.311 1.616 1.616 0 0 0-.042.376Zm2.005-.191-.338.075c0-.195.027-.38.081-.553.056-.175.136-.329.242-.46a1.13 1.13 0 0 1 .397-.314c.158-.076.338-.114.541-.114.165 0 .313.023.442.069a.818.818 0 0 1 .544.583c.048.151.072.335.072.55v2.091h-.723v-2.094a.818.818 0 0 0-.072-.38.377.377 0 0 0-.197-.185.797.797 0 0 0-.308-.054.664.664 0 0 0-.296.063.594.594 0 0 0-.212.17.746.746 0 0 0-.131.248 1.06 1.06 0 0 0-.042.305Zm2.731 1.569c0-.112.038-.205.113-.281a.41.41 0 0 1 .308-.117c.132 0 .234.039.308.117a.38.38 0 0 1 .113.281.382.382 0 0 1-.113.281.412.412 0 0 1-.308.113.42.42 0 0 1-.308-.113.385.385 0 0 1-.113-.281Zm.003-2.546c0-.112.038-.205.113-.281a.41.41 0 0 1 .308-.116c.132 0 .234.038.308.116a.38.38 0 0 1 .113.281.382.382 0 0 1-.113.281.408.408 0 0 1-.308.113.416.416 0 0 1-.308-.113.385.385 0 0 1-.113-.281Zm5.05-1.461v4.365h-.721v-3.511l-1.066.362v-.595l1.7-.621h.087Zm4.428 3.792v.573h-2.916v-.493l1.416-1.545c.155-.175.278-.326.367-.454.09-.127.153-.242.189-.343a.901.901 0 0 0 .056-.302.797.797 0 0 0-.077-.362.578.578 0 0 0-.221-.248.662.662 0 0 0-.356-.092.747.747 0 0 0-.406.104.65.65 0 0 0-.248.29.99.99 0 0 0-.084.418h-.72c0-.253.058-.484.173-.693.116-.211.283-.378.502-.502.219-.125.483-.188.792-.188.291 0 .538.049.741.146.203.098.358.236.463.416.108.179.162.391.162.636 0 .136-.022.27-.066.404a1.974 1.974 0 0 1-.188.4c-.08.131-.175.264-.284.397-.11.132-.23.265-.362.401l-.941 1.037h2.008ZM180.854 298.549l-1.3 3.771h-.786l1.638-4.35h.502l-.054.579Zm1.088 3.771-1.303-3.771-.057-.579h.505l1.643 4.35h-.788Zm-.063-1.613v.594h-2.367v-.594h2.367Zm2.169 1.043.792-2.663h.747l-1.124 3.233h-.466l.051-.57Zm-.606-2.663.806 2.675.039.558h-.466l-1.129-3.233h.75Zm3.974 3.293a1.74 1.74 0 0 1-.649-.116 1.45 1.45 0 0 1-.49-.332 1.49 1.49 0 0 1-.308-.499 1.765 1.765 0 0 1-.107-.619v-.119c0-.253.037-.482.11-.687.074-.206.177-.381.308-.526.132-.148.287-.26.466-.338a1.45 1.45 0 0 1 .583-.117c.231 0 .433.039.607.117.173.078.316.187.43.329.115.139.201.305.257.499.058.193.086.406.086.639v.308h-2.498v-.517h1.787v-.057a1.025 1.025 0 0 0-.077-.364.614.614 0 0 0-.213-.275.631.631 0 0 0-.382-.105.637.637 0 0 0-.55.296 1.146 1.146 0 0 0-.143.347 1.932 1.932 0 0 0-.048.451v.119c0 .142.019.273.057.395a.95.95 0 0 0 .173.314c.076.089.167.16.275.212.108.049.23.074.367.074.174 0 .328-.035.464-.104.135-.07.253-.169.352-.296l.38.367a1.338 1.338 0 0 1-.682.517 1.617 1.617 0 0 1-.555.087Zm2.578-2.677v2.617h-.72v-3.233h.687l.033.616Zm.989-.637-.006.67a1.874 1.874 0 0 0-.292-.024.902.902 0 0 0-.326.054.6.6 0 0 0-.236.149.656.656 0 0 0-.144.233 1.073 1.073 0 0 0-.059.308l-.165.012c0-.203.02-.392.06-.565.04-.173.1-.326.179-.457a.926.926 0 0 1 .305-.308.816.816 0 0 1 .427-.111.895.895 0 0 1 .257.039Zm2.167 2.606v-1.542a.662.662 0 0 0-.063-.299.447.447 0 0 0-.191-.194.655.655 0 0 0-.317-.069.715.715 0 0 0-.305.06.504.504 0 0 0-.2.161.39.39 0 0 0-.072.231h-.717c0-.128.031-.251.093-.371a.988.988 0 0 1 .269-.32c.117-.093.258-.167.421-.221.163-.054.347-.081.55-.081.243 0 .458.041.645.123a.978.978 0 0 1 .445.371c.11.163.165.368.165.615v1.437c0 .148.01.28.03.398.022.115.052.216.092.302v.047h-.738a1.26 1.26 0 0 1-.08-.296 2.399 2.399 0 0 1-.027-.352Zm.104-1.318.006.445h-.517c-.133 0-.251.013-.352.039a.714.714 0 0 0-.254.108.466.466 0 0 0-.153.173.521.521 0 0 0 .009.466.42.42 0 0 0 .174.165.617.617 0 0 0 .281.059c.147 0 .275-.03.385-.089a.801.801 0 0 0 .263-.224.49.49 0 0 0 .102-.254l.233.319a1.244 1.244 0 0 1-.35.532 1.124 1.124 0 0 1-.774.287c-.211 0-.399-.042-.565-.125a1.015 1.015 0 0 1-.388-.344.888.888 0 0 1-.141-.493c0-.171.032-.323.096-.454a.888.888 0 0 1 .287-.335c.127-.09.283-.157.466-.203.183-.048.392-.072.628-.072h.564Zm3.443-1.267h.654v3.144c0 .291-.062.538-.185.741a1.198 1.198 0 0 1-.517.463 1.803 1.803 0 0 1-1.617-.066 1.076 1.076 0 0 1-.349-.308l.337-.424a1.039 1.039 0 0 0 .822.397c.165 0 .306-.03.421-.092a.63.63 0 0 0 .272-.266.89.89 0 0 0 .096-.43v-2.427l.066-.732Zm-2.197 1.653v-.063c0-.245.03-.468.09-.669.06-.204.145-.378.257-.523.111-.148.247-.26.406-.338.16-.08.34-.12.541-.12.209 0 .388.038.535.114.149.076.274.184.373.326.1.139.178.307.234.502.057.193.1.408.128.645v.2a3.3 3.3 0 0 1-.131.634 1.78 1.78 0 0 1-.245.496 1.062 1.062 0 0 1-.377.323 1.14 1.14 0 0 1-.523.113c-.197 0-.375-.041-.535-.122a1.224 1.224 0 0 1-.406-.344 1.622 1.622 0 0 1-.257-.52 2.277 2.277 0 0 1-.09-.654Zm.72-.063v.063c0 .147.014.284.042.412.03.127.075.24.135.338a.702.702 0 0 0 .233.227c.095.054.208.08.337.08.17 0 .308-.035.416-.107a.701.701 0 0 0 .251-.29c.06-.124.101-.261.125-.412v-.541a1.363 1.363 0 0 0-.074-.329.89.89 0 0 0-.147-.266.608.608 0 0 0-.233-.179.774.774 0 0 0-.332-.066.653.653 0 0 0-.573.314c-.06.098-.105.211-.135.341-.03.129-.045.267-.045.415Zm4.303 1.703c-.239 0-.455-.039-.648-.116a1.44 1.44 0 0 1-.49-.332 1.475 1.475 0 0 1-.308-.499 1.743 1.743 0 0 1-.108-.619v-.119c0-.253.037-.482.111-.687.074-.206.176-.381.308-.526.131-.148.287-.26.466-.338.179-.078.373-.117.583-.117.231 0 .433.039.606.117.173.078.317.187.43.329.116.139.202.305.257.499.058.193.087.406.087.639v.308h-2.498v-.517h1.787v-.057a1.005 1.005 0 0 0-.078-.364.612.612 0 0 0-.212-.275.633.633 0 0 0-.382-.105.63.63 0 0 0-.55.296c-.062.096-.11.211-.144.347a1.934 1.934 0 0 0-.047.451v.119c0 .142.018.273.056.395.04.119.098.224.174.314.075.089.167.16.275.212.107.049.23.074.367.074.173 0 .328-.035.463-.104.136-.07.253-.169.353-.296l.379.367a1.333 1.333 0 0 1-.681.517 1.623 1.623 0 0 1-.556.087Zm1.865-.418c0-.112.038-.205.113-.281a.41.41 0 0 1 .308-.117c.132 0 .234.039.308.117a.38.38 0 0 1 .113.281.382.382 0 0 1-.113.281.412.412 0 0 1-.308.113.42.42 0 0 1-.308-.113.385.385 0 0 1-.113-.281Zm.003-2.546c0-.112.038-.205.113-.281a.41.41 0 0 1 .308-.116c.132 0 .234.038.308.116a.38.38 0 0 1 .113.281.382.382 0 0 1-.113.281.408.408 0 0 1-.308.113.416.416 0 0 1-.308-.113.385.385 0 0 1-.113-.281Zm3.839.881-.573-.14.236-2.187h2.345v.609h-1.748l-.119 1.067a1.4 1.4 0 0 1 .69-.176c.205 0 .389.034.55.101.163.066.302.163.415.29.114.126.2.279.26.46.06.18.09.382.09.607 0 .201-.03.389-.09.565a1.319 1.319 0 0 1-.263.463 1.216 1.216 0 0 1-.445.314c-.177.073-.387.11-.63.11-.182 0-.356-.026-.523-.078a1.403 1.403 0 0 1-.446-.236 1.195 1.195 0 0 1-.316-.388 1.329 1.329 0 0 1-.138-.535h.705a.925.925 0 0 0 .117.362.621.621 0 0 0 .245.224.777.777 0 0 0 .353.077.731.731 0 0 0 .313-.062.585.585 0 0 0 .218-.186.818.818 0 0 0 .132-.286 1.387 1.387 0 0 0-.006-.715.767.767 0 0 0-.147-.275.626.626 0 0 0-.242-.179.81.81 0 0 0-.337-.066.84.84 0 0 0-.395.075c-.089.05-.173.112-.251.185Zm5.72.473v.573h-3.138l-.024-.433 1.877-2.94h.576l-.624 1.069-1.079 1.731h2.412Zm-.544-2.8v4.35h-.72v-4.35h.72ZM220.351 297.97h.669l1.258 3.355 1.255-3.355h.669l-1.661 4.35h-.532l-1.658-4.35Zm-.305 0h.636l.111 2.904v1.446h-.747v-4.35Zm3.825 0h.639v4.35h-.75v-1.446l.111-2.904Zm3.281 3.702v-1.542a.662.662 0 0 0-.063-.299.447.447 0 0 0-.191-.194.655.655 0 0 0-.317-.069.715.715 0 0 0-.305.06.498.498 0 0 0-.2.161.39.39 0 0 0-.072.231h-.717c0-.128.031-.251.093-.371a.976.976 0 0 1 .269-.32c.117-.093.257-.167.421-.221.163-.054.346-.081.55-.081.243 0 .458.041.645.123a.978.978 0 0 1 .445.371c.11.163.165.368.165.615v1.437c0 .148.01.28.03.398.021.115.052.216.092.302v.047h-.738a1.257 1.257 0 0 1-.081-.296 2.394 2.394 0 0 1-.026-.352Zm.104-1.318.006.445h-.517c-.133 0-.251.013-.352.039a.714.714 0 0 0-.254.108.466.466 0 0 0-.204.403c0 .086.02.165.06.236.04.07.098.125.173.165a.623.623 0 0 0 .281.059c.148 0 .276-.03.386-.089a.811.811 0 0 0 .263-.224.497.497 0 0 0 .101-.254l.233.319a1.07 1.07 0 0 1-.122.263 1.273 1.273 0 0 1-.227.269 1.124 1.124 0 0 1-.774.287c-.211 0-.4-.042-.565-.125a1.008 1.008 0 0 1-.388-.344.888.888 0 0 1-.141-.493c0-.171.032-.323.096-.454a.888.888 0 0 1 .287-.335c.127-.09.283-.157.466-.203.183-.048.392-.072.627-.072h.565Zm1.921-1.267.616 1.073.627-1.073h.792l-.98 1.587 1.019 1.646h-.792l-.657-1.117-.657 1.117h-.795l1.016-1.646-.977-1.587h.788Zm3.299 0v3.233h-.723v-3.233h.723Zm-.771-.848c0-.11.036-.201.108-.272a.411.411 0 0 1 .305-.111c.127 0 .228.037.301.111a.361.361 0 0 1 .111.272.36.36 0 0 1-.111.269.415.415 0 0 1-.301.107.421.421 0 0 1-.305-.107.366.366 0 0 1-.108-.269Zm2.28 1.506v2.575h-.72v-3.233h.678l.042.658Zm-.116.839-.245-.003c0-.223.028-.429.083-.618.056-.189.138-.354.245-.493.108-.142.241-.25.401-.326.161-.078.347-.117.558-.117.148 0 .282.022.404.066.123.042.23.109.32.2.091.092.161.21.209.353.05.143.074.317.074.52v2.154h-.72v-2.091a.808.808 0 0 0-.071-.371.401.401 0 0 0-.201-.191.718.718 0 0 0-.307-.06.717.717 0 0 0-.347.078.65.65 0 0 0-.23.212.949.949 0 0 0-.132.311 1.673 1.673 0 0 0-.041.376Zm2.005-.191-.338.075c0-.195.027-.38.081-.553.055-.175.136-.329.242-.46a1.13 1.13 0 0 1 .397-.314c.157-.076.338-.114.541-.114.165 0 .313.023.442.069a.818.818 0 0 1 .335.209.94.94 0 0 1 .209.374c.048.151.072.335.072.55v2.091h-.723v-2.094a.818.818 0 0 0-.072-.38.377.377 0 0 0-.197-.185.797.797 0 0 0-.308-.054.664.664 0 0 0-.296.063.594.594 0 0 0-.212.17.767.767 0 0 0-.132.248 1.097 1.097 0 0 0-.041.305Zm4.667 1.165v-2.471h.723v3.233h-.681l-.042-.762Zm.102-.672.242-.006c0 .217-.024.417-.072.601a1.414 1.414 0 0 1-.221.475c-.1.133-.227.238-.383.314a1.3 1.3 0 0 1-.558.11c-.158 0-.302-.023-.434-.069a.87.87 0 0 1-.34-.212.96.96 0 0 1-.219-.373 1.754 1.754 0 0 1-.077-.55v-2.089h.72v2.095c0 .117.014.216.042.296.028.077.065.14.113.188a.405.405 0 0 0 .168.102.701.701 0 0 0 .203.029c.205 0 .366-.039.484-.119a.665.665 0 0 0 .254-.329 1.3 1.3 0 0 0 .078-.463Zm2.079-1.141v2.575h-.72v-3.233h.678l.042.658Zm-.116.839-.245-.003c0-.223.028-.429.083-.618.056-.189.138-.354.245-.493.108-.142.241-.25.401-.326.161-.078.347-.117.559-.117.147 0 .281.022.403.066.123.042.23.109.32.2.091.092.161.21.209.353.05.143.074.317.074.52v2.154h-.72v-2.091a.808.808 0 0 0-.071-.371.401.401 0 0 0-.201-.191.718.718 0 0 0-.307-.06.717.717 0 0 0-.347.078.65.65 0 0 0-.23.212.927.927 0 0 0-.131.311 1.616 1.616 0 0 0-.042.376Zm2.005-.191-.338.075c0-.195.027-.38.081-.553.055-.175.136-.329.242-.46a1.13 1.13 0 0 1 .397-.314c.158-.076.338-.114.541-.114.165 0 .313.023.442.069a.818.818 0 0 1 .544.583c.048.151.072.335.072.55v2.091h-.723v-2.094a.818.818 0 0 0-.072-.38.377.377 0 0 0-.197-.185.797.797 0 0 0-.308-.054.664.664 0 0 0-.296.063.594.594 0 0 0-.212.17.746.746 0 0 0-.131.248 1.06 1.06 0 0 0-.042.305Zm2.731 1.569c0-.112.038-.205.113-.281a.41.41 0 0 1 .308-.117c.132 0 .234.039.308.117a.38.38 0 0 1 .113.281.382.382 0 0 1-.113.281.412.412 0 0 1-.308.113.42.42 0 0 1-.308-.113.385.385 0 0 1-.113-.281Zm.003-2.546c0-.112.038-.205.113-.281a.41.41 0 0 1 .308-.116c.132 0 .234.038.308.116a.38.38 0 0 1 .113.281.382.382 0 0 1-.113.281.408.408 0 0 1-.308.113.416.416 0 0 1-.308-.113.385.385 0 0 1-.113-.281Zm5.05-1.461v4.365h-.721v-3.511l-1.066.362v-.595l1.7-.621h.087Zm4.347 1.825v.712c0 .34-.034.631-.101.872a1.537 1.537 0 0 1-.287.583 1.126 1.126 0 0 1-.451.328c-.174.07-.368.105-.583.105-.171 0-.331-.022-.478-.066a1.148 1.148 0 0 1-.395-.206 1.223 1.223 0 0 1-.301-.361 2.03 2.03 0 0 1-.192-.535 3.496 3.496 0 0 1-.065-.72v-.712c0-.342.033-.631.101-.866a1.54 1.54 0 0 1 .29-.577c.126-.149.275-.258.448-.325.176-.068.371-.102.586-.102.173 0 .333.022.478.066.147.042.279.108.394.2.118.092.218.211.299.358.084.146.148.322.191.529.044.206.066.445.066.717Zm-.72.813v-.92c0-.173-.01-.326-.03-.457a1.398 1.398 0 0 0-.089-.338.67.67 0 0 0-.144-.227.49.49 0 0 0-.197-.128.694.694 0 0 0-.248-.042.67.67 0 0 0-.299.065.537.537 0 0 0-.221.204c-.06.093-.106.217-.138.37a2.996 2.996 0 0 0-.044.553v.92c0 .176.01.33.03.463.019.134.049.248.089.344.04.094.088.171.144.233.057.06.123.104.197.132a.733.733 0 0 0 .248.041.68.68 0 0 0 .302-.065.56.56 0 0 0 .221-.21c.06-.097.104-.224.134-.379.03-.155.045-.342.045-.559Zm4.198-.813v.712c0 .34-.034.631-.101.872a1.537 1.537 0 0 1-.287.583 1.126 1.126 0 0 1-.451.328c-.174.07-.368.105-.583.105-.171 0-.331-.022-.478-.066a1.148 1.148 0 0 1-.395-.206 1.223 1.223 0 0 1-.301-.361 2.03 2.03 0 0 1-.192-.535 3.567 3.567 0 0 1-.065-.72v-.712c0-.342.034-.631.101-.866a1.54 1.54 0 0 1 .29-.577c.126-.149.275-.258.448-.325.176-.068.371-.102.586-.102.173 0 .333.022.478.066.147.042.279.108.394.2.118.092.218.211.299.358.084.146.148.322.191.529.044.206.066.445.066.717Zm-.72.813v-.92c0-.173-.01-.326-.03-.457a1.398 1.398 0 0 0-.089-.338.67.67 0 0 0-.144-.227.49.49 0 0 0-.197-.128.694.694 0 0 0-.248-.042.67.67 0 0 0-.299.065.537.537 0 0 0-.221.204c-.06.093-.106.217-.137.37-.03.152-.045.336-.045.553v.92c0 .176.01.33.03.463.02.134.049.248.089.344.04.094.088.171.144.233.057.06.123.104.197.132a.733.733 0 0 0 .248.041.68.68 0 0 0 .302-.065.56.56 0 0 0 .221-.21c.06-.097.104-.224.134-.379.03-.155.045-.342.045-.559Z",
              fill:"#454B5D"
            })]
          })]
        }),(0,n.jsxs)("g",{
          filter:"url(#alerts-locked-illustration_svg__g)",
          children:[(0,n.jsx)("rect",{
            x:30.704,
            y:22,
            width:230.707,
            height:48.059,
            rx:3.558,
            fill:"#fff",
            shapeRendering:"crispEdges"
          }),(0,n.jsx)("path",{
            d:"M30.704 25.558A3.558 3.558 0 0 1 34.262 22H75.18v48.06H34.262a3.558 3.558 0 0 1-3.558-3.559V25.558Z",
            fill:"#EFF5FF"
          }),(0,n.jsx)("rect",{
            x:37.82,
            y:30.91,
            width:30.243,
            height:30.243,
            rx:15.121,
            fill:"#5D97FF"
          }),(0,n.jsx)("path",{
            d:"M60.755 51.116v.871H45.076v-.871l1.742-1.742v-5.226c0-2.7 1.768-5.078 4.355-5.845v-.252a1.742 1.742 0 1 1 3.484 0v.252a6.089 6.089 0 0 1 4.356 5.845v5.226l1.742 1.742Zm-6.098 1.742a1.742 1.742 0 0 1-3.484 0",
            fill:"#fff"
          }),(0,n.jsx)("path",{
            d:"M87.371 38.022h1.559c-.032.51-.172.964-.423 1.36a2.516 2.516 0 0 1-1.037.928c-.44.222-.973.333-1.594.333-.487 0-.923-.083-1.309-.25a2.783 2.783 0 0 1-.99-.73 3.251 3.251 0 0 1-.62-1.146 4.962 4.962 0 0 1-.214-1.506v-.527c0-.556.073-1.058.219-1.506.15-.452.361-.836.636-1.152.278-.316.61-.56.995-.73.386-.17.817-.255 1.293-.255.632 0 1.166.115 1.6.344.438.23.776.546 1.016.949.244.403.39.861.438 1.376h-1.564a2.013 2.013 0 0 0-.182-.777 1.035 1.035 0 0 0-.474-.485c-.209-.11-.487-.166-.834-.166-.26 0-.488.048-.683.145a1.267 1.267 0 0 0-.49.444 2.186 2.186 0 0 0-.297.75c-.062.299-.094.65-.094 1.053v.537c0 .392.03.738.089 1.037.059.295.15.545.271.75.125.202.285.355.48.459.197.1.435.151.713.151.327 0 .596-.052.808-.156.212-.105.374-.26.485-.464a1.81 1.81 0 0 0 .203-.766Zm3.993-1.892v4.41h-1.501V34.9h1.412l.089 1.23Zm1.699-1.267-.026 1.392a3.659 3.659 0 0 0-.266-.026c-.1-.01-.193-.016-.276-.016a1.65 1.65 0 0 0-.553.084.986.986 0 0 0-.385.234c-.101.104-.178.231-.23.38-.049.15-.076.32-.083.511l-.302-.093c0-.365.036-.7.109-1.006.073-.31.179-.579.318-.808.142-.23.316-.407.521-.532.205-.125.44-.187.704-.187.083 0 .168.007.255.02a.94.94 0 0 1 .214.047Zm3.2 5.78c-.438 0-.83-.07-1.178-.208a2.584 2.584 0 0 1-.886-.59c-.24-.25-.424-.54-.553-.87a2.932 2.932 0 0 1-.192-1.063v-.208c0-.428.06-.819.182-1.173.122-.354.295-.662.521-.922.23-.261.508-.46.834-.6a2.738 2.738 0 0 1 1.105-.213c.4 0 .754.066 1.063.198.31.132.568.32.777.563.212.243.372.535.48.875.107.337.16.712.16 1.126v.625h-4.481v-1h3.007v-.115a1.3 1.3 0 0 0-.115-.558.885.885 0 0 0-.333-.396 1.032 1.032 0 0 0-.574-.146.963.963 0 0 0-.51.13 1.009 1.009 0 0 0-.35.365c-.087.157-.153.34-.198.553a3.514 3.514 0 0 0-.062.688v.208c0 .226.031.435.094.626.066.19.158.356.276.495.121.139.267.246.438.323.173.076.37.115.589.115.27 0 .522-.052.755-.157.237-.107.44-.269.61-.484l.73.792c-.118.17-.28.333-.485.49a2.59 2.59 0 0 1-.73.385c-.284.098-.61.146-.974.146Zm6.212-1.376v-2.512c0-.18-.029-.335-.088-.464a.659.659 0 0 0-.276-.307.915.915 0 0 0-.475-.11.977.977 0 0 0-.432.089.626.626 0 0 0-.282.245.677.677 0 0 0-.099.37h-1.5c0-.24.055-.467.166-.683a1.7 1.7 0 0 1 .485-.568c.212-.167.464-.297.755-.39a3.27 3.27 0 0 1 .991-.141c.437 0 .827.072 1.167.218.341.146.608.365.803.657.198.292.297.657.297 1.095v2.413c0 .309.019.563.057.76.038.195.094.365.167.511v.09h-1.517a2.197 2.197 0 0 1-.167-.574 4.828 4.828 0 0 1-.052-.699Zm.198-2.163.011.85h-.839c-.198 0-.37.023-.516.068a.963.963 0 0 0-.36.193.74.74 0 0 0-.208.281.967.967 0 0 0-.063.354.631.631 0 0 0 .344.589.866.866 0 0 0 .391.084c.226 0 .422-.045.589-.136a1.08 1.08 0 0 0 .386-.333.704.704 0 0 0 .146-.376l.396.636c-.056.143-.132.29-.23.443a1.859 1.859 0 0 1-.886.76 1.93 1.93 0 0 1-.729.126c-.358 0-.683-.07-.975-.213a1.777 1.777 0 0 1-.688-.6 1.574 1.574 0 0 1-.25-.875c0-.296.056-.558.167-.787.11-.23.274-.422.49-.579.218-.16.491-.28.818-.36a4.612 4.612 0 0 1 1.136-.125h.87Zm5.233-2.204v1.063h-3.283V34.9h3.283Zm-2.47-1.392h1.501v5.332c0 .163.021.288.062.375a.374.374 0 0 0 .198.183.988.988 0 0 0 .329.047c.094 0 .177-.004.25-.01a3.3 3.3 0 0 0 .193-.032l.005 1.105a2.843 2.843 0 0 1-.912.135c-.33 0-.619-.054-.865-.161a1.188 1.188 0 0 1-.563-.532c-.132-.243-.198-.563-.198-.959v-5.483Zm5.92 7.135c-.437 0-.83-.07-1.177-.208a2.578 2.578 0 0 1-.886-.59c-.24-.25-.424-.54-.553-.87a2.943 2.943 0 0 1-.193-1.063v-.208c0-.428.061-.819.183-1.173.121-.354.295-.662.521-.922.229-.261.507-.46.834-.6a2.736 2.736 0 0 1 1.105-.213c.399 0 .754.066 1.063.198.309.132.568.32.776.563.212.243.372.535.48.875.108.337.162.712.162 1.126v.625h-4.483v-1h3.008v-.115c0-.209-.039-.394-.115-.558a.883.883 0 0 0-.334-.396c-.149-.097-.34-.146-.573-.146a.965.965 0 0 0-.511.13 1.008 1.008 0 0 0-.349.365c-.087.157-.153.34-.198.553a3.49 3.49 0 0 0-.063.688v.208c0 .226.032.435.094.626.066.19.158.356.277.495.121.139.267.246.437.323.174.076.37.115.589.115.271 0 .523-.052.756-.157.236-.107.44-.269.61-.484l.729.792c-.118.17-.279.333-.484.49a2.598 2.598 0 0 1-.73.385 3.01 3.01 0 0 1-.975.146Zm8.871-1.376v-2.512c0-.18-.029-.335-.089-.464a.659.659 0 0 0-.276-.307.909.909 0 0 0-.474-.11.984.984 0 0 0-.433.089.628.628 0 0 0-.281.245.677.677 0 0 0-.099.37h-1.501c0-.24.055-.467.167-.683.111-.215.272-.405.484-.568.212-.167.464-.297.756-.39.295-.094.626-.141.99-.141.438 0 .827.072 1.168.218.34.146.608.365.802.657.198.292.298.657.298 1.095v2.413c0 .309.019.563.057.76.038.195.094.365.167.511v.09h-1.517a2.159 2.159 0 0 1-.167-.574 4.69 4.69 0 0 1-.052-.699Zm.198-2.163.011.85h-.84c-.198 0-.37.023-.516.068a.967.967 0 0 0-.359.193.753.753 0 0 0-.209.281.988.988 0 0 0-.062.354c0 .129.029.245.088.35.059.1.145.18.256.24a.863.863 0 0 0 .391.083c.226 0 .422-.045.589-.136.166-.09.295-.201.385-.333a.688.688 0 0 0 .146-.376l.396.636c-.055.143-.132.29-.229.443a1.853 1.853 0 0 1-.886.76 1.931 1.931 0 0 1-.73.126c-.358 0-.682-.07-.974-.213a1.77 1.77 0 0 1-.688-.6 1.571 1.571 0 0 1-.25-.875c0-.296.055-.558.166-.787.112-.23.275-.422.49-.579.219-.16.492-.28.819-.36a4.612 4.612 0 0 1 1.136-.125h.87Zm4.055-4.57v8.005h-1.506v-8.005h1.506Zm3.836 8.11c-.438 0-.831-.07-1.178-.21a2.587 2.587 0 0 1-.886-.588c-.24-.25-.424-.54-.552-.87a2.922 2.922 0 0 1-.193-1.064v-.208c0-.428.061-.819.182-1.173.122-.354.295-.662.521-.922a2.3 2.3 0 0 1 .834-.6 2.74 2.74 0 0 1 1.105-.213c.4 0 .754.066 1.063.198.31.132.568.32.777.563.212.243.372.535.479.875.108.337.162.712.162 1.126v.625h-4.482v-1h3.007v-.115c0-.209-.038-.394-.115-.558a.887.887 0 0 0-.333-.396 1.034 1.034 0 0 0-.573-.146.96.96 0 0 0-.511.13 1 1 0 0 0-.349.365c-.087.157-.153.34-.199.553a3.57 3.57 0 0 0-.062.688v.208c0 .226.031.435.094.626.066.19.158.356.276.495.122.139.268.246.438.323.174.076.37.115.589.115.271 0 .523-.052.755-.157.237-.107.44-.269.61-.484l.73.792c-.118.17-.28.333-.485.49a2.592 2.592 0 0 1-.729.385 3.01 3.01 0 0 1-.975.146Zm4.67-4.514v4.41h-1.501V34.9h1.412l.089 1.23Zm1.699-1.267-.026 1.392a3.688 3.688 0 0 0-.266-.026 2.714 2.714 0 0 0-.276-.016c-.212 0-.396.028-.553.084a.98.98 0 0 0-.385.234 1.021 1.021 0 0 0-.23.38c-.048.15-.076.32-.083.511l-.302-.093c0-.365.036-.7.109-1.006.073-.31.179-.579.318-.808.142-.23.316-.407.521-.532.205-.125.44-.187.704-.187.083 0 .168.007.255.02.087.01.158.026.214.047Zm3.732.037v1.063h-3.284V34.9h3.284Zm-2.471-1.392h1.501v5.332c0 .163.021.288.063.375a.374.374 0 0 0 .198.183.981.981 0 0 0 .328.047c.094 0 .177-.004.25-.01.077-.011.141-.022.193-.032l.005 1.105a2.783 2.783 0 0 1-.417.099 3.087 3.087 0 0 1-.495.036c-.33 0-.618-.054-.865-.161a1.193 1.193 0 0 1-.563-.532c-.132-.243-.198-.563-.198-.959v-5.483ZM84.255 50.931v7.589h-1.006V50.93h1.006Zm2.647 3.153v4.435h-.964V52.88h.912l.052 1.204Zm-.23 1.402-.4-.015c.003-.386.06-.742.172-1.069.11-.33.267-.617.469-.86a2.089 2.089 0 0 1 1.652-.766c.278 0 .528.038.75.115.223.073.412.19.568.354.16.163.282.375.365.636.084.257.125.572.125.943v3.696h-.97v-3.706c0-.295-.043-.532-.13-.709a.8.8 0 0 0-.38-.39 1.366 1.366 0 0 0-.615-.126c-.24 0-.459.05-.657.151-.194.101-.363.24-.505.417-.14.177-.248.38-.328.61a2.227 2.227 0 0 0-.115.72Zm8.45 1.538a.812.812 0 0 0-.094-.386c-.06-.122-.183-.231-.37-.328-.185-.101-.463-.188-.834-.26a6.608 6.608 0 0 1-.85-.235c-.25-.09-.464-.2-.641-.329a1.377 1.377 0 0 1-.401-.453 1.265 1.265 0 0 1-.141-.61c0-.222.049-.433.146-.63.1-.199.241-.374.422-.527.184-.153.405-.273.662-.36.257-.087.544-.13.86-.13.452 0 .837.08 1.157.24.32.16.565.373.735.64.17.265.255.559.255.882h-.964a.827.827 0 0 0-.14-.454 1.038 1.038 0 0 0-.402-.37 1.295 1.295 0 0 0-.641-.146c-.268 0-.485.042-.651.125a.836.836 0 0 0-.36.308.774.774 0 0 0-.058.677.62.62 0 0 0 .199.225c.093.066.225.128.396.187.17.06.387.118.651.177.462.104.843.23 1.142.376.298.145.52.324.667.536.146.212.219.47.219.772a1.501 1.501 0 0 1-.6 1.21c-.19.145-.42.26-.688.343-.264.08-.56.12-.891.12-.497 0-.917-.089-1.261-.266a1.951 1.951 0 0 1-.782-.688 1.646 1.646 0 0 1-.266-.891h.97c.014.264.09.474.229.63.139.153.31.263.51.329.202.062.402.094.6.094.264 0 .485-.035.662-.105a.922.922 0 0 0 .412-.286.664.664 0 0 0 .14-.417Zm4.591-4.144v.74h-3.049v-.74h3.05Zm-2.017-1.37h.964v5.613c0 .19.03.335.089.432a.424.424 0 0 0 .23.193.952.952 0 0 0 .302.047c.08 0 .163-.007.25-.02a5.77 5.77 0 0 0 .203-.042l.005.787a2.247 2.247 0 0 1-.302.067 2.3 2.3 0 0 1-.443.037c-.236 0-.454-.047-.652-.141a1.048 1.048 0 0 1-.474-.469c-.115-.222-.172-.521-.172-.897V51.51Zm6.473 6.045v-2.903a1.18 1.18 0 0 0-.135-.578.888.888 0 0 0-.396-.386 1.439 1.439 0 0 0-.657-.135 1.54 1.54 0 0 0-.641.125 1.122 1.122 0 0 0-.428.328.724.724 0 0 0-.151.438h-.964c0-.202.052-.402.156-.6.105-.198.254-.377.449-.536.198-.164.434-.292.709-.386.278-.097.587-.146.927-.146.41 0 .772.07 1.084.208.317.14.563.35.74.631.181.278.271.627.271 1.048v2.627c0 .187.016.387.047.599.035.212.085.394.151.547v.084h-1.005a1.792 1.792 0 0 1-.115-.444 3.547 3.547 0 0 1-.042-.52Zm.167-2.455.01.678h-.974a3.6 3.6 0 0 0-.735.068 1.684 1.684 0 0 0-.542.193.921.921 0 0 0-.334.328.875.875 0 0 0-.114.454c0 .177.04.338.12.484a.864.864 0 0 0 .359.35c.163.083.363.124.6.124.295 0 .555-.062.781-.187.226-.125.405-.278.537-.459.136-.18.209-.356.219-.526l.412.464a1.427 1.427 0 0 1-.198.484 2.32 2.32 0 0 1-1.069.912 2.066 2.066 0 0 1-.823.157c-.382 0-.718-.075-1.006-.224a1.72 1.72 0 0 1-.667-.6 1.581 1.581 0 0 1-.235-.85c0-.302.059-.567.177-.797a1.55 1.55 0 0 1 .511-.578c.223-.157.49-.275.803-.355.313-.08.662-.12 1.047-.12h1.121Zm3.278-1.016v4.435h-.964V52.88h.912l.052 1.204Zm-.229 1.402-.401-.015c.003-.386.06-.742.172-1.069.111-.33.267-.617.469-.86a2.084 2.084 0 0 1 1.652-.766c.278 0 .528.038.75.115.223.073.412.19.568.354.16.163.282.375.365.636.084.257.125.572.125.943v3.696h-.969v-3.706c0-.295-.043-.532-.13-.709a.802.802 0 0 0-.381-.39 1.367 1.367 0 0 0-.615-.126c-.24 0-.458.05-.656.151-.195.101-.364.24-.506.417-.139.177-.248.38-.328.61a2.213 2.213 0 0 0-.115.72Zm7.526-2.606v.74h-3.049v-.74h3.049Zm-2.017-1.37h.964v5.613c0 .19.03.335.089.432a.422.422 0 0 0 .229.193.954.954 0 0 0 .302.047c.08 0 .164-.007.251-.02l.203-.042.005.787a2.23 2.23 0 0 1-.302.067c-.122.025-.27.037-.443.037-.237 0-.454-.047-.652-.141a1.047 1.047 0 0 1-.474-.469c-.115-.222-.172-.521-.172-.897V51.51Zm8.136 7.114c-.393 0-.749-.066-1.069-.198a2.42 2.42 0 0 1-.818-.568 2.514 2.514 0 0 1-.521-.866 3.163 3.163 0 0 1-.183-1.094v-.219c0-.459.068-.867.204-1.225.135-.361.319-.667.552-.917.233-.25.497-.44.792-.568.296-.129.601-.193.918-.193.403 0 .75.07 1.042.208.295.14.537.334.724.584.188.247.327.539.417.876.091.333.136.698.136 1.094v.433h-4.211v-.787h3.247v-.073a2.39 2.39 0 0 0-.157-.73 1.305 1.305 0 0 0-.417-.583c-.191-.153-.451-.23-.781-.23a1.312 1.312 0 0 0-1.079.547c-.132.181-.235.402-.308.662-.073.261-.109.562-.109.902v.219c0 .267.036.52.109.756.077.232.186.438.329.615.146.177.321.316.526.417.208.1.445.15.709.15.34 0 .629-.069.865-.208.236-.139.443-.325.62-.557l.584.464c-.122.184-.276.36-.464.526a2.221 2.221 0 0 1-.693.406 2.684 2.684 0 0 1-.964.157ZM125.309 54v4.519h-.97v-5.64h.918l.052 1.12Zm-.198 1.485-.449-.015c.004-.386.054-.742.152-1.069.097-.33.241-.617.432-.86a1.92 1.92 0 0 1 .714-.563c.285-.135.615-.203.99-.203.264 0 .508.038.73.115.222.073.415.19.579.349.163.16.29.365.38.615.09.25.136.552.136.907v3.758h-.965v-3.711c0-.296-.05-.532-.151-.71a.861.861 0 0 0-.417-.385 1.5 1.5 0 0 0-.636-.125c-.284 0-.522.05-.714.151a1.2 1.2 0 0 0-.458.417c-.115.177-.198.38-.25.61a3.386 3.386 0 0 0-.073.72Zm3.653-.531-.646.198c.003-.31.054-.607.151-.892.101-.285.245-.538.433-.76.191-.223.425-.398.703-.527.278-.132.596-.198.954-.198.302 0 .57.04.803.12.236.08.434.203.594.37.163.163.286.373.37.63a3 3 0 0 1 .125.918v3.706h-.97v-3.717c0-.316-.05-.56-.151-.734a.786.786 0 0 0-.417-.37 1.665 1.665 0 0 0-.635-.11c-.212 0-.4.037-.563.11a1.158 1.158 0 0 0-.412.302c-.111.125-.196.27-.255.432a1.596 1.596 0 0 0-.084.522Zm8.271 2.6v-2.903a1.18 1.18 0 0 0-.135-.578.888.888 0 0 0-.396-.386 1.436 1.436 0 0 0-.657-.135 1.54 1.54 0 0 0-.641.125 1.11 1.11 0 0 0-.427.328.718.718 0 0 0-.151.438h-.965c0-.202.052-.402.157-.6.104-.198.253-.377.448-.536.198-.164.434-.292.709-.386.278-.097.587-.146.927-.146.41 0 .772.07 1.085.208.316.14.562.35.74.631.18.278.271.627.271 1.048v2.627c0 .187.015.387.047.599.034.212.085.394.151.547v.084h-1.006a1.792 1.792 0 0 1-.115-.444 3.547 3.547 0 0 1-.042-.52Zm.167-2.455.011.678h-.975c-.274 0-.519.023-.735.068a1.684 1.684 0 0 0-.542.193.866.866 0 0 0-.448.782c0 .177.04.338.12.484.08.146.2.263.359.35.164.083.363.124.6.124.295 0 .556-.062.782-.187.225-.125.404-.278.536-.459.136-.18.209-.356.219-.526l.412.464c-.024.146-.09.307-.198.484a2.32 2.32 0 0 1-1.069.912 2.066 2.066 0 0 1-.823.157 2.16 2.16 0 0 1-1.006-.224 1.72 1.72 0 0 1-.667-.6 1.59 1.59 0 0 1-.235-.85c0-.302.06-.567.178-.797a1.54 1.54 0 0 1 .51-.578c.223-.157.49-.275.803-.355.313-.08.662-.12 1.048-.12h1.12Zm3.362-2.22v5.64h-.97v-5.64h.97Zm-1.043-1.495c0-.157.047-.289.141-.397.098-.107.24-.161.428-.161.184 0 .324.054.422.161.101.108.151.24.151.397 0 .149-.05.277-.151.385-.098.104-.238.156-.422.156-.188 0-.33-.052-.428-.156a.567.567 0 0 1-.141-.386Zm3.638-.87v8.005h-.969v-8.006h.969Zm7.521 7.04v-2.903a1.18 1.18 0 0 0-.135-.578.888.888 0 0 0-.396-.386 1.442 1.442 0 0 0-.657-.135 1.54 1.54 0 0 0-.641.125 1.122 1.122 0 0 0-.428.328.724.724 0 0 0-.151.438h-.964c0-.202.052-.402.156-.6.105-.198.254-.377.449-.536a2.24 2.24 0 0 1 .708-.386c.278-.097.588-.146.928-.146.41 0 .772.07 1.084.208.316.14.563.35.74.631.181.278.271.627.271 1.048v2.627c0 .187.016.387.047.599.035.212.085.394.151.547v.084h-1.005a1.792 1.792 0 0 1-.115-.444 3.547 3.547 0 0 1-.042-.52Zm.167-2.455.01.678h-.974a3.6 3.6 0 0 0-.735.068 1.675 1.675 0 0 0-.542.193.921.921 0 0 0-.334.328.875.875 0 0 0-.114.454c0 .177.04.338.119.484.08.146.2.263.36.35.163.083.363.124.599.124.296 0 .556-.062.782-.187.226-.125.405-.278.537-.459.136-.18.209-.356.219-.526l.412.464a1.427 1.427 0 0 1-.198.484 2.32 2.32 0 0 1-1.069.912 2.066 2.066 0 0 1-.823.157c-.382 0-.718-.075-1.006-.224a1.72 1.72 0 0 1-.667-.6 1.581 1.581 0 0 1-.235-.85c0-.302.059-.567.177-.797a1.55 1.55 0 0 1 .511-.578c.223-.157.49-.275.803-.355.313-.08.662-.12 1.047-.12h1.121Zm3.362-4.586v8.005h-.97v-8.005h.97Zm3.888 8.11c-.393 0-.749-.066-1.069-.198a2.42 2.42 0 0 1-.818-.568 2.514 2.514 0 0 1-.521-.866 3.163 3.163 0 0 1-.183-1.094v-.219c0-.459.068-.867.204-1.225.135-.361.319-.667.552-.917.233-.25.497-.44.792-.568.296-.129.601-.193.918-.193.403 0 .75.07 1.042.208.295.14.537.334.724.584.188.247.327.539.417.876.091.333.136.698.136 1.094v.433h-4.211v-.787h3.247v-.073a2.39 2.39 0 0 0-.157-.73 1.313 1.313 0 0 0-.417-.583c-.191-.153-.451-.23-.781-.23a1.312 1.312 0 0 0-1.079.547c-.132.181-.235.402-.308.662-.073.261-.109.562-.109.902v.219c0 .267.036.52.109.756.077.232.186.438.329.615.146.177.321.316.526.417.208.1.445.15.709.15.34 0 .629-.069.865-.208.236-.139.443-.325.62-.557l.584.464c-.122.184-.276.36-.464.526a2.221 2.221 0 0 1-.693.406 2.684 2.684 0 0 1-.964.157Zm4.284-4.858v4.754h-.964v-5.64h.938l.026.886Zm1.761-.917-.005.896a1.39 1.39 0 0 0-.229-.03 2.423 2.423 0 0 0-.24-.011c-.222 0-.418.035-.589.104a1.22 1.22 0 0 0-.432.292 1.417 1.417 0 0 0-.282.448 2.16 2.16 0 0 0-.13.563l-.271.156c0-.34.033-.66.099-.959.069-.298.175-.563.318-.792.142-.233.323-.413.542-.542a1.52 1.52 0 0 1 1.032-.172.7.7 0 0 1 .187.047Zm3.513.031v.74h-3.049v-.74h3.049Zm-2.017-1.37h.964v5.613c0 .19.03.335.089.432a.426.426 0 0 0 .229.193.956.956 0 0 0 .303.047c.08 0 .163-.007.25-.02l.203-.042.005.787a2.23 2.23 0 0 1-.302.067 2.3 2.3 0 0 1-.443.037 1.5 1.5 0 0 1-.651-.141 1.049 1.049 0 0 1-.475-.469c-.114-.222-.172-.521-.172-.897V51.51Zm6.432 5.514a.818.818 0 0 0-.094-.386c-.059-.122-.182-.231-.37-.328-.184-.101-.462-.188-.834-.26a6.62 6.62 0 0 1-.85-.235c-.25-.09-.463-.2-.641-.329a1.386 1.386 0 0 1-.401-.453 1.262 1.262 0 0 1-.141-.61c0-.222.049-.433.146-.63.101-.199.242-.374.422-.527.185-.153.405-.273.662-.36.257-.087.544-.13.86-.13.452 0 .838.08 1.157.24.32.16.565.373.735.64.171.265.256.559.256.882h-.965a.825.825 0 0 0-.14-.454 1.04 1.04 0 0 0-.402-.37 1.292 1.292 0 0 0-.641-.146c-.267 0-.484.042-.651.125a.842.842 0 0 0-.36.308.773.773 0 0 0-.057.677c.038.08.104.155.198.225.094.066.226.128.396.187.17.06.387.118.652.177.462.104.842.23 1.141.376.299.145.521.324.667.536.146.212.219.47.219.772 0 .246-.052.472-.156.677a1.51 1.51 0 0 1-.443.532c-.192.146-.421.26-.688.344a3.08 3.08 0 0 1-.892.12c-.496 0-.917-.089-1.261-.266a1.957 1.957 0 0 1-.782-.688 1.647 1.647 0 0 1-.265-.891h.969c.014.264.09.474.229.63.139.153.309.263.511.329.202.062.401.094.599.094.264 0 .485-.035.662-.105a.922.922 0 0 0 .412-.286.663.663 0 0 0 .141-.417Zm6.317 1.495h-.965v-6.233c0-.406.073-.749.219-1.027.15-.281.363-.493.641-.636.278-.145.608-.218.991-.218a2.678 2.678 0 0 1 .667.083l-.052.787a1.608 1.608 0 0 0-.251-.036c-.09-.007-.18-.01-.271-.01a1.07 1.07 0 0 0-.531.124.789.789 0 0 0-.334.355c-.076.156-.114.349-.114.578v6.233Zm1.198-5.639v.74h-3.054v-.74h3.054Zm.819 2.882v-.12c0-.406.059-.783.177-1.13.118-.351.288-.655.511-.913.222-.26.491-.462.807-.604a2.513 2.513 0 0 1 1.064-.219c.396 0 .752.073 1.068.219.32.142.591.344.813.605.226.257.398.56.516.912.118.347.177.724.177 1.13v.12c0 .407-.059.784-.177 1.131-.118.348-.29.652-.516.913a2.364 2.364 0 0 1-.808.604 2.535 2.535 0 0 1-1.063.214c-.396 0-.752-.072-1.068-.214a2.402 2.402 0 0 1-.813-.604 2.742 2.742 0 0 1-.511-.913 3.495 3.495 0 0 1-.177-1.13Zm.964-.12v.12c0 .282.033.548.099.798a2.1 2.1 0 0 0 .297.657c.135.19.304.342.505.453.202.108.437.162.704.162.264 0 .495-.054.693-.162.202-.111.369-.262.501-.453a2.1 2.1 0 0 0 .297-.657c.069-.25.104-.516.104-.798v-.12c0-.277-.035-.54-.104-.786a2.017 2.017 0 0 0-.303-.662 1.431 1.431 0 0 0-.5-.459 1.403 1.403 0 0 0-.698-.167c-.264 0-.497.056-.699.167a1.494 1.494 0 0 0-.5.459 2.093 2.093 0 0 0-.297.662 3.034 3.034 0 0 0-.099.787Zm6.343-1.876v4.754h-.965v-5.64h.939l.026.886Zm1.761-.917-.005.896a1.39 1.39 0 0 0-.229-.03c-.07-.008-.15-.011-.24-.011a1.55 1.55 0 0 0-.589.104c-.17.07-.314.167-.433.292a1.414 1.414 0 0 0-.281.448 2.16 2.16 0 0 0-.13.563l-.271.156c0-.34.033-.66.099-.959.069-.298.175-.563.318-.792.142-.233.323-.413.542-.542a1.52 1.52 0 0 1 1.032-.172.7.7 0 0 1 .187.047Zm5.124 5.087 1.568-5.056h1.032l-2.262 6.51a3.535 3.535 0 0 1-.208.448 2.168 2.168 0 0 1-.323.464 1.536 1.536 0 0 1-.48.354c-.184.094-.405.141-.662.141a2.877 2.877 0 0 1-.542-.083l-.005-.782c.028.003.071.007.13.01a1.547 1.547 0 0 0 .688-.078.842.842 0 0 0 .386-.286c.108-.133.2-.315.276-.548l.402-1.094Zm-1.152-5.056 1.464 4.378.25 1.017-.693.354-2.074-5.749h1.053Zm4.284 2.882v-.12c0-.406.059-.783.177-1.13.118-.351.289-.655.511-.913.222-.26.492-.462.808-.604.316-.146.67-.219 1.063-.219.396 0 .752.073 1.068.219.32.142.591.344.813.605.226.257.398.56.516.912.119.347.178.724.178 1.13v.12c0 .407-.059.784-.178 1.131-.118.348-.29.652-.516.913a2.36 2.36 0 0 1-.807.604 2.543 2.543 0 0 1-1.064.214c-.396 0-.752-.072-1.068-.214a2.422 2.422 0 0 1-.813-.604 2.76 2.76 0 0 1-.511-.913 3.495 3.495 0 0 1-.177-1.13Zm.964-.12v.12c0 .282.033.548.099.798a2.1 2.1 0 0 0 .297.657c.136.19.304.342.506.453.201.108.436.162.703.162.264 0 .495-.054.694-.162.201-.111.368-.262.5-.453a2.1 2.1 0 0 0 .297-.657c.069-.25.104-.516.104-.798v-.12c0-.277-.035-.54-.104-.786a2.036 2.036 0 0 0-.302-.662 1.434 1.434 0 0 0-.501-.459 1.403 1.403 0 0 0-.698-.167 1.42 1.42 0 0 0-.698.167 1.507 1.507 0 0 0-.501.459 2.093 2.093 0 0 0-.297.662 3.034 3.034 0 0 0-.099.787Zm8.829 1.575V52.88h.969v5.64h-.922l-.047-1.303Zm.182-1.189.402-.01c0 .375-.04.722-.12 1.042a2.26 2.26 0 0 1-.375.824 1.78 1.78 0 0 1-.683.547c-.282.129-.624.193-1.027.193a2.29 2.29 0 0 1-.756-.12 1.512 1.512 0 0 1-.583-.37 1.685 1.685 0 0 1-.381-.652 3.139 3.139 0 0 1-.13-.964V52.88h.964v3.649c0 .253.028.463.084.63.059.163.137.294.234.391a.87.87 0 0 0 .334.198c.125.038.253.058.385.058.41 0 .735-.079.975-.235.24-.16.412-.374.516-.641.108-.271.161-.572.161-.902Zm3.221-2.262v4.754h-.964v-5.64h.938l.026.886Zm1.762-.917-.005.896a1.404 1.404 0 0 0-.229-.03c-.07-.008-.15-.011-.24-.011-.223 0-.419.035-.589.104-.17.07-.315.167-.433.292a1.397 1.397 0 0 0-.281.448 2.16 2.16 0 0 0-.131.563l-.271.156c0-.34.033-.66.099-.959.07-.298.176-.563.318-.792.143-.233.324-.413.542-.542a1.527 1.527 0 0 1 1.032-.172.71.71 0 0 1 .188.047Zm4.498 1.152v4.519h-.97v-5.64h.918l.052 1.12Zm-.198 1.485-.448-.015c.003-.386.053-.742.151-1.069.097-.33.241-.617.432-.86a1.92 1.92 0 0 1 .714-.563c.285-.135.615-.203.991-.203.264 0 .507.038.729.115.223.073.416.19.579.349.163.16.29.365.38.615.091.25.136.552.136.907v3.758h-.964v-3.711c0-.296-.051-.532-.152-.71a.863.863 0 0 0-.416-.385 1.507 1.507 0 0 0-.636-.125c-.285 0-.523.05-.714.151-.191.101-.344.24-.459.417-.115.177-.198.38-.25.61a3.386 3.386 0 0 0-.073.72Zm3.653-.531-.646.198c.004-.31.054-.607.151-.892.101-.285.245-.538.433-.76.191-.223.425-.398.703-.527.278-.132.596-.198.954-.198.303 0 .57.04.803.12.236.08.434.203.594.37.163.163.287.373.37.63a3 3 0 0 1 .125.918v3.706h-.969v-3.717c0-.316-.051-.56-.151-.734a.793.793 0 0 0-.417-.37 1.674 1.674 0 0 0-.636-.11c-.212 0-.4.037-.563.11a1.167 1.167 0 0 0-.412.302c-.111.125-.196.27-.255.432a1.596 1.596 0 0 0-.084.522Zm7.287 3.669c-.393 0-.749-.066-1.069-.198a2.42 2.42 0 0 1-.818-.568 2.514 2.514 0 0 1-.521-.866 3.163 3.163 0 0 1-.183-1.094v-.219c0-.459.068-.867.204-1.225.135-.361.319-.667.552-.917.233-.25.497-.44.792-.568.296-.129.601-.193.918-.193.403 0 .75.07 1.042.208.295.14.537.334.724.584.188.247.327.539.417.876.091.333.136.698.136 1.094v.433h-4.211v-.787h3.247v-.073a2.39 2.39 0 0 0-.157-.73 1.313 1.313 0 0 0-.417-.583c-.191-.153-.451-.23-.781-.23a1.312 1.312 0 0 0-1.079.547c-.132.181-.235.402-.308.662-.073.261-.109.562-.109.902v.219c0 .267.036.52.109.756.077.232.186.438.329.615.145.177.321.316.526.417.208.1.445.15.709.15.34 0 .629-.069.865-.208.236-.139.443-.325.62-.557l.584.464c-.122.184-.276.36-.464.526a2.221 2.221 0 0 1-.693.406 2.684 2.684 0 0 1-.964.157Zm5.681-5.744v.74h-3.049v-.74h3.049Zm-2.017-1.37h.964v5.613c0 .19.029.335.088.432a.424.424 0 0 0 .23.193.95.95 0 0 0 .302.047c.08 0 .163-.007.25-.02l.203-.042.006.787a2.286 2.286 0 0 1-.303.067 2.294 2.294 0 0 1-.443.037 1.5 1.5 0 0 1-.651-.141 1.047 1.047 0 0 1-.474-.469c-.115-.222-.172-.521-.172-.897V51.51Zm4.112 2.256v4.754h-.964v-5.64h.938l.026.886Zm1.761-.917-.005.896a1.39 1.39 0 0 0-.229-.03c-.07-.008-.15-.011-.24-.011a1.55 1.55 0 0 0-.589.104 1.22 1.22 0 0 0-.432.292 1.4 1.4 0 0 0-.282.448 2.16 2.16 0 0 0-.13.563l-.271.156c0-.34.033-.66.099-.959.069-.298.175-.563.318-.792.142-.233.323-.413.542-.542a1.52 1.52 0 0 1 1.032-.172.7.7 0 0 1 .187.047Zm1.939.031v5.64h-.969v-5.64h.969Zm-1.042-1.495c0-.157.047-.289.141-.397.097-.107.239-.161.427-.161.184 0 .325.054.422.161.101.108.151.24.151.397 0 .149-.05.277-.151.385-.097.104-.238.156-.422.156-.188 0-.33-.052-.427-.156a.567.567 0 0 1-.141-.386Zm4.847 6.447c.229 0 .441-.047.636-.141.194-.094.354-.223.479-.386.125-.167.197-.356.214-.568h.917c-.017.334-.13.645-.339.933a2.315 2.315 0 0 1-1.907.954c-.424 0-.794-.075-1.11-.224a2.195 2.195 0 0 1-.782-.615c-.205-.26-.36-.56-.464-.897-.101-.34-.151-.7-.151-1.079v-.219c0-.378.05-.736.151-1.073.104-.34.259-.641.464-.902.208-.26.469-.465.782-.615.316-.15.686-.224 1.11-.224.441 0 .827.09 1.157.271.33.177.589.42.776.73.192.306.296.653.313 1.042h-.917a1.381 1.381 0 0 0-.198-.63 1.232 1.232 0 0 0-.459-.449 1.281 1.281 0 0 0-.672-.172c-.295 0-.544.06-.745.177a1.308 1.308 0 0 0-.475.47 2.204 2.204 0 0 0-.25.651 3.558 3.558 0 0 0-.073.724v.22c0 .246.024.49.073.729.049.24.13.457.245.651.118.195.276.351.474.47.202.114.452.172.751.172Zm6.614-.808a.818.818 0 0 0-.094-.386c-.059-.122-.182-.231-.37-.328-.184-.101-.462-.188-.834-.26a6.62 6.62 0 0 1-.85-.235c-.25-.09-.463-.2-.641-.329a1.386 1.386 0 0 1-.401-.453 1.262 1.262 0 0 1-.141-.61c0-.222.049-.433.146-.63.101-.199.242-.374.422-.527.185-.153.405-.273.662-.36.257-.087.544-.13.86-.13.452 0 .838.08 1.157.24.32.16.565.373.735.64.171.265.256.559.256.882h-.965a.825.825 0 0 0-.14-.454 1.04 1.04 0 0 0-.402-.37 1.292 1.292 0 0 0-.641-.146c-.267 0-.484.042-.651.125a.842.842 0 0 0-.36.308.773.773 0 0 0-.057.677c.038.08.104.155.198.225.094.066.226.128.396.187.17.06.387.118.652.177.462.104.842.23 1.141.376.299.145.521.324.667.536.146.212.219.47.219.772 0 .246-.052.472-.156.677a1.51 1.51 0 0 1-.443.532c-.192.146-.421.26-.688.344a3.08 3.08 0 0 1-.892.12c-.496 0-.917-.089-1.261-.266a1.957 1.957 0 0 1-.782-.688 1.647 1.647 0 0 1-.265-.891h.969c.014.264.09.474.229.63.139.153.31.263.511.329.202.062.401.094.599.094.264 0 .485-.035.662-.105a.922.922 0 0 0 .412-.286.663.663 0 0 0 .141-.417Zm2.246.985c0-.163.05-.3.151-.412.104-.115.254-.172.448-.172.195 0 .343.057.443.172a.577.577 0 0 1 .157.412.57.57 0 0 1-.157.406c-.1.111-.248.167-.443.167-.194 0-.344-.056-.448-.167a.582.582 0 0 1-.151-.406Z",
            fill:"#161E35"
          })]
        }),(0,n.jsxs)("g",{
          filter:"url(#alerts-locked-illustration_svg__h)",
          children:[(0,n.jsx)("path",{
            d:"M133.704 317.316a2.789 2.789 0 0 1 2.788-2.789h245.365a2.789 2.789 0 0 1 2.788 2.789v60.813H133.704v-60.813Z",
            fill:"#fff"
          }),(0,n.jsxs)("g",{
            clipPath:"url(#alerts-locked-illustration_svg__i)",
            children:[(0,n.jsx)("path",{
              d:"m250.496 332.503-2.851 2.86 1.333 1.338 2.851-2.86-1.333-1.338Z",
              fill:"#5D97FF"
            }),(0,n.jsx)("path",{
              d:"m248.978 336.698-1.333 1.337 2.851 2.86 1.333-1.338-2.851-2.859Z",
              fill:"#5D97FF"
            }),(0,n.jsx)("path",{
              d:"m247.644 335.36-2.851-2.86-1.334 1.338 2.852 2.859-2.852 2.861 1.334 1.337 2.851-2.86 1.334-1.338-1.334-1.337ZM256.92 339.058a2.387 2.387 0 0 1-1.876-.914 2.393 2.393 0 0 1 .897-3.653 2.37 2.37 0 0 1 2.085.064l.944-1.64a4.259 4.259 0 0 0-5.759 1.627 4.293 4.293 0 0 0 1.52 5.804 4.259 4.259 0 0 0 4.224.083l-.944-1.641a2.37 2.37 0 0 1-1.091.27ZM267.915 336.668c0-.847-.251-1.675-.72-2.379a4.268 4.268 0 0 0-4.381-1.82 4.283 4.283 0 0 0-3.111 5.837 4.276 4.276 0 0 0 3.944 2.643c.068 0 .135-.002.201-.005h.038c.058 0 .116-.005.174-.013h.028a4.19 4.19 0 0 0 .411-.063h.006a4.284 4.284 0 0 0 1.52-.642v.477h1.877l.013-4.035Zm-6.645 0a2.393 2.393 0 0 1 1.471-2.203 2.37 2.37 0 0 1 2.591.519 2.389 2.389 0 0 1-1.683 4.073 2.378 2.378 0 0 1-2.199-1.475 2.41 2.41 0 0 1-.181-.914h.001ZM271.271 340.701h-1.882v-4.05a4.273 4.273 0 0 1 2.846-4.035 4.255 4.255 0 0 1 4.742 1.345 4.261 4.261 0 0 1 6.803.219c.509.723.783 1.586.784 2.471v4.05h-1.882v-4.081a2.4 2.4 0 0 0-.7-1.695 2.385 2.385 0 0 0-3.38 0 2.4 2.4 0 0 0-.7 1.695v4.077h-1.856v-4.077a2.392 2.392 0 0 0-1.474-2.213 2.38 2.38 0 0 0-2.602.522 2.37 2.37 0 0 0-.697 1.694v.027l-.002 4.051ZM242.32 332.684h-1.882v4.045c0 .635-.251 1.244-.699 1.693a2.382 2.382 0 0 1-3.375 0 2.396 2.396 0 0 1-.699-1.693v-4.045h-1.881v4.05c0 1.136.45 2.224 1.25 3.027a4.262 4.262 0 0 0 6.036 0 4.285 4.285 0 0 0 1.251-3.027v-.021l-.001-4.029Z",
              fill:"#161E35"
            })]
          }),(0,n.jsx)("path",{
            d:"m224.314 363.859-.257-.741h-1.55l-.257.741h-.819l1.399-3.898h.909l1.4 3.898h-.825Zm-.469-1.366-.563-1.628-.563 1.628h1.126Zm1.817 1.366v-4.126h.781v4.126h-.781Zm2.879-2.498c-.373 0-.669.24-.73.664h1.466c-.011-.407-.334-.664-.736-.664Zm1.467 1.528c-.167.569-.68 1.021-1.444 1.021-.898 0-1.551-.625-1.551-1.595 0-.976.636-1.595 1.551-1.595.892 0 1.522.608 1.522 1.528 0 .1-.006.201-.022.301h-2.259c.039.457.352.714.742.714.335 0 .519-.168.619-.374h.842Zm1.429-.569v1.539h-.781v-3.089h.781v.48a1.07 1.07 0 0 1 .948-.525v.82h-.207c-.463 0-.741.179-.741.775Zm1.596.58v-1.489h-.368v-.641h.368v-.764h.786v.764h.692v.641h-.692v1.495c0 .206.084.295.329.295h.363v.658h-.491c-.591 0-.987-.251-.987-.959Zm3.491 0v-1.489h-.368v-.641h.368v-.764h.786v.764h.692v.641h-.692v1.495c0 .206.084.295.329.295h.363v.658h-.491c-.591 0-.987-.251-.987-.959Zm2.82-.58v1.539h-.781v-3.089h.781v.48a1.07 1.07 0 0 1 .948-.525v.82h-.206c-.463 0-.742.179-.742.775Zm1.474 1.539v-3.089h.78v3.089h-.78Zm.396-3.457c-.279 0-.48-.201-.48-.457 0-.257.201-.458.48-.458.273 0 .479.201.479.458 0 .256-.206.457-.479.457Zm.955 1.902c0-.965.625-1.584 1.411-1.584.485 0 .836.223 1.02.491v-.441h.787v3.112c0 .836-.513 1.5-1.528 1.5-.87 0-1.478-.435-1.556-1.143h.775c.078.278.368.462.758.462.43 0 .764-.245.764-.819v-.48a1.217 1.217 0 0 1-1.02.508c-.786 0-1.411-.642-1.411-1.606Zm2.431.011c0-.586-.39-.909-.819-.909-.419 0-.815.312-.815.898 0 .585.396.92.815.92.429 0 .819-.324.819-.909Zm1.348-.011c0-.965.625-1.584 1.411-1.584.485 0 .837.223 1.021.491v-.441h.786v3.112c0 .836-.513 1.5-1.528 1.5-.87 0-1.478-.435-1.556-1.143h.775c.078.278.368.462.759.462.429 0 .764-.245.764-.819v-.48a1.22 1.22 0 0 1-1.021.508c-.786 0-1.411-.642-1.411-1.606Zm2.432.011c0-.586-.391-.909-.82-.909-.418 0-.814.312-.814.898 0 .585.396.92.814.92.429 0 .82-.324.82-.909Zm2.876-.954c-.374 0-.669.24-.731.664h1.467c-.011-.407-.335-.664-.736-.664Zm1.466 1.528c-.167.569-.68 1.021-1.444 1.021-.898 0-1.55-.625-1.55-1.595 0-.976.635-1.595 1.55-1.595.892 0 1.522.608 1.522 1.528 0 .1-.005.201-.022.301h-2.258c.039.457.351.714.741.714.335 0 .519-.168.619-.374h.842Zm1.429-.569v1.539h-.781v-3.089h.781v.48c.195-.318.519-.525.948-.525v.82h-.206c-.463 0-.742.179-.742.775Zm2.801-.959c-.374 0-.669.24-.731.664h1.467c-.011-.407-.335-.664-.736-.664Zm1.467 1.528c-.168.569-.681 1.021-1.445 1.021-.898 0-1.55-.625-1.55-1.595 0-.976.636-1.595 1.55-1.595.892 0 1.523.608 1.523 1.528 0 .1-.006.201-.023.301h-2.258c.039.457.351.714.742.714.334 0 .518-.168.619-.374h.842Zm.447-.585c0-.965.624-1.584 1.416-1.584.407 0 .798.189 1.009.479v-1.466h.792v4.126h-.792v-.457c-.184.285-.529.508-1.014.508-.787 0-1.411-.642-1.411-1.606Zm2.431.011c0-.586-.39-.909-.82-.909-.418 0-.814.312-.814.898 0 .585.396.92.814.92.43 0 .82-.324.82-.909Zm2.961 1.544v-2.448h-.351v-.641h.351v-.156c0-.759.43-1.11 1.3-1.088v.658c-.38-.011-.508.112-.508.458v.128h.541v.641h-.541v2.448h-.792Zm4.822-1.544c0 .97-.713 1.595-1.611 1.595-.892 0-1.567-.625-1.567-1.595 0-.976.697-1.595 1.589-1.595s1.589.619 1.589 1.595Zm-2.386 0c0 .613.357.914.775.914.412 0 .808-.301.808-.914 0-.619-.384-.915-.797-.915-.413 0-.786.296-.786.915Zm3.74.005v1.539h-.781v-3.089h.781v.48a1.07 1.07 0 0 1 .948-.525v.82h-.207c-.462 0-.741.179-.741.775Zm4.118.608.809-2.158h.831l-1.913 4.55h-.831l.669-1.539-1.238-3.011h.876l.797 2.158Zm5.044-.613c0 .97-.714 1.595-1.611 1.595-.893 0-1.567-.625-1.567-1.595 0-.976.697-1.595 1.589-1.595s1.589.619 1.589 1.595Zm-2.387 0c0 .613.357.914.776.914.412 0 .808-.301.808-.914 0-.619-.385-.915-.797-.915-.413 0-.787.296-.787.915Zm5.876-1.545v3.089h-.786v-.39c-.195.262-.535.429-.92.429-.719 0-1.238-.468-1.238-1.316v-1.812h.781v1.701c0 .496.273.764.686.764.423 0 .691-.268.691-.764v-1.701h.786Zm1.551 1.55v1.539h-.78v-3.089h.78v.48c.196-.318.519-.525.948-.525v.82h-.206c-.463 0-.742.179-.742.775Zm2.602-.016c0-.965.625-1.584 1.411-1.584.496 0 .837.234 1.021.491v-.441h.786v3.089h-.786v-.451c-.184.267-.536.502-1.027.502-.78 0-1.405-.642-1.405-1.606Zm2.432.011c0-.586-.391-.909-.82-.909-.418 0-.814.312-.814.898 0 .585.396.92.814.92.429 0 .82-.324.82-.909Zm2.329-1.099c.184-.262.541-.496 1.021-.496.791 0 1.41.619 1.41 1.584 0 .964-.619 1.606-1.41 1.606-.486 0-.831-.24-1.021-.491v1.913h-.781v-4.562h.781v.446Zm1.634 1.088c0-.586-.396-.898-.82-.898-.418 0-.814.323-.814.909 0 .585.396.909.814.909.424 0 .82-.335.82-.92Zm2.145-1.088c.184-.262.541-.496 1.021-.496.792 0 1.411.619 1.411 1.584 0 .964-.619 1.606-1.411 1.606-.485 0-.831-.24-1.021-.491v1.913h-.78v-4.562h.78v.446Zm1.634 1.088c0-.586-.396-.898-.819-.898-.419 0-.815.323-.815.909 0 .585.396.909.815.909.423 0 .819-.335.819-.92Z",
            fill:"#161E35"
          }),(0,n.jsxs)("g",{
            clipPath:"url(#alerts-locked-illustration_svg__j)",
            children:[(0,n.jsx)("path",{
              d:"M133.704 378.129h250.941v108.58a2.788 2.788 0 0 1-2.788 2.788H136.492a2.788 2.788 0 0 1-2.788-2.788v-108.58Z",
              fill:"#fff"
            }),(0,n.jsx)("path",{
              d:"m212.827 381.233.926 1.791.929-1.791h.536l-1.23 2.235v1.333h-.473v-1.333l-1.23-2.235h.542Zm2.499 2.271v-.056c0-.191.028-.368.084-.532.055-.165.135-.308.24-.429a1.07 1.07 0 0 1 .38-.284c.148-.068.315-.103.499-.103.187 0 .354.035.503.103.15.067.278.162.382.284.106.121.187.264.243.429.055.164.083.341.083.532v.056c0 .192-.028.369-.083.532a1.274 1.274 0 0 1-.243.429 1.094 1.094 0 0 1-.38.284 1.19 1.19 0 0 1-.5.101 1.12 1.12 0 0 1-.884-.385 1.267 1.267 0 0 1-.24-.429 1.626 1.626 0 0 1-.084-.532Zm.454-.056v.056c0 .133.015.258.046.375a.991.991 0 0 0 .14.309c.064.09.143.161.238.213a.684.684 0 0 0 .33.076.665.665 0 0 0 .326-.076.679.679 0 0 0 .236-.213.99.99 0 0 0 .139-.309c.033-.117.049-.242.049-.375v-.056c0-.131-.016-.254-.049-.37a.943.943 0 0 0-.142-.311.666.666 0 0 0-.235-.216.664.664 0 0 0-.329-.078.671.671 0 0 0-.328.078.701.701 0 0 0-.235.216.982.982 0 0 0-.14.311 1.426 1.426 0 0 0-.046.37Zm4.151.74v-2.039h.456v2.652h-.434l-.022-.613Zm.086-.559.188-.005c0 .177-.018.34-.056.491a1.072 1.072 0 0 1-.176.387.842.842 0 0 1-.321.257 1.153 1.153 0 0 1-.483.091c-.129 0-.248-.019-.356-.057a.698.698 0 0 1-.274-.174.79.79 0 0 1-.179-.306 1.473 1.473 0 0 1-.061-.453v-1.711h.453v1.716c0 .119.013.218.039.296a.494.494 0 0 0 .111.184.402.402 0 0 0 .157.093.61.61 0 0 0 .181.027c.193 0 .345-.037.458-.11a.627.627 0 0 0 .243-.302c.05-.127.076-.268.076-.424Zm1.514-1.063v2.235h-.453v-2.652h.441l.012.417Zm.828-.431-.002.421a1.219 1.219 0 0 0-.221-.02.739.739 0 0 0-.276.049.575.575 0 0 0-.204.138.652.652 0 0 0-.132.21.989.989 0 0 0-.061.265l-.128.074c0-.16.016-.311.047-.451.032-.141.082-.265.149-.373a.74.74 0 0 1 .255-.255.72.72 0 0 1 .573-.058Zm2.775.014v.348H223.7v-.348h1.434Zm-.949-.644h.454v2.639c0 .09.013.158.041.203a.202.202 0 0 0 .108.091.44.44 0 0 0 .142.022.696.696 0 0 0 .118-.01l.095-.019.003.37a1.202 1.202 0 0 1-.351.049.706.706 0 0 1-.306-.066.496.496 0 0 1-.223-.221.922.922 0 0 1-.081-.421v-2.637Zm1.311 1.999v-.056c0-.191.028-.368.084-.532.055-.165.135-.308.24-.429a1.07 1.07 0 0 1 .38-.284c.148-.068.315-.103.499-.103.187 0 .354.035.503.103.15.067.278.162.382.284.106.121.187.264.243.429.055.164.083.341.083.532v.056c0 .192-.028.369-.083.532a1.274 1.274 0 0 1-.243.429 1.094 1.094 0 0 1-.38.284 1.19 1.19 0 0 1-.5.101 1.12 1.12 0 0 1-.884-.385 1.267 1.267 0 0 1-.24-.429 1.626 1.626 0 0 1-.084-.532Zm.454-.056v.056c0 .133.015.258.046.375a.991.991 0 0 0 .14.309c.064.09.143.161.238.213a.684.684 0 0 0 .33.076.665.665 0 0 0 .326-.076.688.688 0 0 0 .236-.213.99.99 0 0 0 .139-.309c.033-.117.049-.242.049-.375v-.056c0-.131-.016-.254-.049-.37a.943.943 0 0 0-.142-.311.666.666 0 0 0-.235-.216.664.664 0 0 0-.329-.078.671.671 0 0 0-.328.078.701.701 0 0 0-.235.216.982.982 0 0 0-.14.311 1.426 1.426 0 0 0-.046.37Zm3.639-1.299v.348h-1.434v-.348h1.434Zm-.949-.644h.454v2.639c0 .09.014.158.041.203a.202.202 0 0 0 .108.091.44.44 0 0 0 .142.022.696.696 0 0 0 .118-.01l.096-.019.002.37a1.157 1.157 0 0 1-.142.032 1.119 1.119 0 0 1-.208.017.708.708 0 0 1-.307-.066.496.496 0 0 1-.223-.221.922.922 0 0 1-.081-.421v-2.637Zm3.044 2.842v-1.365a.55.55 0 0 0-.064-.272.423.423 0 0 0-.186-.181.68.68 0 0 0-.309-.064.725.725 0 0 0-.301.059.521.521 0 0 0-.201.155.338.338 0 0 0-.071.205h-.454a.6.6 0 0 1 .074-.281.808.808 0 0 1 .211-.253c.093-.077.204-.137.333-.181.131-.046.276-.069.436-.069.193 0 .363.033.51.098a.761.761 0 0 1 .348.297c.085.13.127.295.127.492v1.235c0 .089.008.183.022.282.017.1.04.186.071.258v.039h-.472a.836.836 0 0 1-.054-.209 1.68 1.68 0 0 1-.02-.245Zm.078-1.154.005.319h-.458c-.129 0-.244.01-.345.032a.763.763 0 0 0-.255.09.406.406 0 0 0-.211.368c0 .083.019.159.056.228a.418.418 0 0 0 .169.164.619.619 0 0 0 .282.059.756.756 0 0 0 .62-.304.465.465 0 0 0 .103-.248l.194.219a.681.681 0 0 1-.093.227 1.095 1.095 0 0 1-.503.429.971.971 0 0 1-.387.074c-.18 0-.337-.035-.473-.106a.817.817 0 0 1-.314-.281.754.754 0 0 1-.11-.4c0-.142.028-.267.083-.375a.73.73 0 0 1 .241-.272c.104-.073.23-.129.377-.166a1.97 1.97 0 0 1 .493-.057h.526Zm1.581-2.156v3.764h-.456v-3.764h.456Zm3.916.196h.733v2.357c0 .275-.059.506-.177.694a1.092 1.092 0 0 1-.482.424c-.205.094-.44.142-.706.142a1.71 1.71 0 0 1-.711-.142 1.105 1.105 0 0 1-.485-.424 1.297 1.297 0 0 1-.174-.694v-2.357h.735v2.357c0 .16.025.291.076.392a.477.477 0 0 0 .218.223c.097.048.21.071.341.071a.734.734 0 0 0 .34-.071.464.464 0 0 0 .216-.223.872.872 0 0 0 .076-.392v-2.357Zm2.728 2.835a.23.23 0 0 0-.044-.137.39.39 0 0 0-.165-.113 1.573 1.573 0 0 0-.34-.098 2.618 2.618 0 0 1-.375-.11 1.325 1.325 0 0 1-.299-.164.701.701 0 0 1-.196-.226.705.705 0 0 1 0-.615.805.805 0 0 1 .208-.26c.092-.077.203-.136.333-.179.133-.044.281-.066.446-.066.231 0 .428.037.593.11a.886.886 0 0 1 .383.304c.09.128.134.273.134.437h-.705a.382.382 0 0 0-.044-.184.29.29 0 0 0-.133-.13.467.467 0 0 0-.23-.049.461.461 0 0 0-.204.042.315.315 0 0 0-.132.107.264.264 0 0 0-.019.258.264.264 0 0 0 .085.085c.04.027.09.051.152.074.064.021.142.041.235.059.192.039.362.09.513.154.15.062.269.147.357.255a.63.63 0 0 1 .133.419.67.67 0 0 1-.079.324.78.78 0 0 1-.225.257 1.146 1.146 0 0 1-.353.169 1.657 1.657 0 0 1-.458.059c-.247 0-.456-.044-.628-.133a1.001 1.001 0 0 1-.387-.335.79.79 0 0 1-.13-.422h.669a.394.394 0 0 0 .074.233.396.396 0 0 0 .179.127c.073.027.153.04.237.04a.618.618 0 0 0 .228-.037.326.326 0 0 0 .138-.103.253.253 0 0 0 .049-.152Zm2.364.782c-.205 0-.39-.033-.553-.098a1.218 1.218 0 0 1-.417-.277 1.24 1.24 0 0 1-.26-.409 1.39 1.39 0 0 1-.09-.5v-.098a1.7 1.7 0 0 1 .085-.552c.058-.166.139-.311.245-.433.108-.123.239-.217.393-.282.153-.067.326-.101.519-.101.188 0 .355.031.5.093a.986.986 0 0 1 .365.265c.1.114.175.252.226.412.05.158.076.335.076.529v.294h-2.108v-.47h1.414v-.054a.615.615 0 0 0-.054-.263.42.42 0 0 0-.157-.186.482.482 0 0 0-.269-.068.45.45 0 0 0-.24.061.484.484 0 0 0-.165.171.936.936 0 0 0-.093.26 1.704 1.704 0 0 0-.029.324v.098c0 .106.015.204.044.294.031.09.074.167.13.233a.582.582 0 0 0 .206.151.678.678 0 0 0 .277.054.777.777 0 0 0 .642-.301l.343.372a1.055 1.055 0 0 1-.228.231 1.223 1.223 0 0 1-.343.181 1.41 1.41 0 0 1-.459.069Zm2.196-2.122v2.073h-.706v-2.652h.665l.041.579Zm.799-.596-.012.654a1.524 1.524 0 0 0-.125-.012 1.25 1.25 0 0 0-.13-.007c-.1 0-.186.013-.26.039a.467.467 0 0 0-.181.11.482.482 0 0 0-.108.179.86.86 0 0 0-.039.24l-.142-.044c0-.171.017-.329.051-.473a1.29 1.29 0 0 1 .15-.38.752.752 0 0 1 .245-.25.627.627 0 0 1 .331-.088.71.71 0 0 1 .12.01.44.44 0 0 1 .1.022Zm2.674 2.166a.515.515 0 0 0 .23-.049.386.386 0 0 0 .157-.142.412.412 0 0 0 .061-.218h.664a.882.882 0 0 1-.149.498c-.098.143-.23.257-.395.34a1.226 1.226 0 0 1-.554.123c-.205 0-.385-.035-.539-.103a1.073 1.073 0 0 1-.38-.284 1.242 1.242 0 0 1-.227-.427 1.747 1.747 0 0 1-.076-.524v-.071c0-.188.025-.363.076-.525.05-.163.126-.305.227-.426.102-.123.228-.218.38-.287.152-.068.33-.103.534-.103.218 0 .408.042.571.125a.939.939 0 0 1 .388.358c.094.154.143.336.144.546h-.664a.544.544 0 0 0-.056-.24.426.426 0 0 0-.395-.237.44.44 0 0 0-.252.066.415.415 0 0 0-.152.176.893.893 0 0 0-.076.253c-.013.093-.02.191-.02.294v.071c0 .103.007.202.02.296a.832.832 0 0 0 .073.253.45.45 0 0 0 .155.174c.065.042.15.063.255.063Zm1.409-.796v-.051c0-.195.028-.374.083-.537.056-.165.137-.308.243-.429.106-.121.237-.215.392-.282.155-.068.333-.103.534-.103s.38.035.537.103c.157.067.288.161.394.282.108.121.19.264.245.429.056.163.084.342.084.537v.051c0 .193-.028.372-.084.537a1.234 1.234 0 0 1-.245.428 1.086 1.086 0 0 1-.392.282 1.335 1.335 0 0 1-.534.101c-.201 0-.38-.034-.537-.101a1.111 1.111 0 0 1-.394-.282 1.279 1.279 0 0 1-.243-.428 1.688 1.688 0 0 1-.083-.537Zm.706-.051v.051c0 .111.009.215.029.311.02.097.051.182.093.255a.48.48 0 0 0 .172.169c.07.041.156.061.257.061a.457.457 0 0 0 .421-.23.828.828 0 0 0 .094-.255c.021-.096.031-.2.031-.311v-.051c0-.108-.01-.21-.031-.304a.805.805 0 0 0-.096-.255.48.48 0 0 0-.169-.177.487.487 0 0 0-.255-.063c-.1 0-.185.021-.255.063a.513.513 0 0 0-.169.177.854.854 0 0 0-.093.255c-.02.094-.029.196-.029.304Zm3.808.715v-2.017h.706v2.652h-.665l-.041-.635Zm.078-.544.208-.005c0 .177-.02.341-.061.493-.041.15-.102.281-.184.392a.855.855 0 0 1-.308.257.99.99 0 0 1-.439.091c-.129 0-.248-.018-.358-.054a.733.733 0 0 1-.279-.174.837.837 0 0 1-.181-.306 1.412 1.412 0 0 1-.064-.454v-1.713h.706v1.718c0 .079.009.145.027.199a.346.346 0 0 0 .08.132.3.3 0 0 0 .12.073c.048.015.1.023.157.023.146 0 .26-.03.343-.089a.465.465 0 0 0 .179-.24c.036-.103.054-.217.054-.343Zm1.858-.907v2.086h-.706v-2.652h.662l.044.566Zm-.103.667h-.191c0-.196.025-.373.076-.529.05-.159.121-.294.213-.405a.908.908 0 0 1 .326-.257.971.971 0 0 1 .426-.091c.124 0 .238.018.341.054a.641.641 0 0 1 .264.172.746.746 0 0 1 .172.311c.041.129.061.287.061.473v1.691h-.71v-1.694a.634.634 0 0 0-.049-.274.276.276 0 0 0-.145-.137.56.56 0 0 0-.23-.042.525.525 0 0 0-.248.056.493.493 0 0 0-.171.157.726.726 0 0 0-.101.231 1.122 1.122 0 0 0-.034.284Zm3.524-1.233v.5h-1.544v-.5h1.544Zm-1.162-.654h.706v2.507c0 .077.01.135.029.176.022.041.053.07.094.086.04.015.092.022.154.022a1.06 1.06 0 0 0 .208-.019l.003.519a1.372 1.372 0 0 1-.429.064c-.155 0-.291-.026-.407-.076a.563.563 0 0 1-.265-.25.945.945 0 0 1-.093-.451v-2.578Zm3.377.654v2.652h-.456v-2.652h.456Zm-.49-.703c0-.074.022-.136.066-.186.046-.051.113-.076.201-.076.087 0 .153.025.199.076.047.05.071.112.071.186 0 .07-.024.131-.071.181-.046.049-.112.074-.199.074-.088 0-.155-.025-.201-.074a.266.266 0 0 1-.066-.181Zm1.671 1.269v2.086h-.453v-2.652h.429l.024.566Zm-.108.66-.188-.008c.001-.181.028-.349.081-.502.052-.155.125-.29.22-.405a.992.992 0 0 1 .777-.36c.131 0 .248.018.353.054.104.034.194.09.267.167a.753.753 0 0 1 .172.299c.039.121.058.268.058.443v1.738h-.455v-1.743a.76.76 0 0 0-.062-.333.377.377 0 0 0-.179-.184.642.642 0 0 0-.289-.058.669.669 0 0 0-.546.267.985.985 0 0 0-.209.625Zm4.784-1.226v.348h-1.434v-.348h1.434Zm-.948-.644h.453v2.639c0 .09.014.158.042.203a.195.195 0 0 0 .108.091.436.436 0 0 0 .142.022.694.694 0 0 0 .117-.01l.096-.019.002.37a1.157 1.157 0 0 1-.142.032 1.11 1.11 0 0 1-.208.017.706.706 0 0 1-.306-.066.486.486 0 0 1-.223-.221.922.922 0 0 1-.081-.421v-2.637Zm1.933-.468v3.764h-.453v-3.764h.453Zm-.108 2.338-.188-.008c.001-.181.028-.349.081-.502.052-.155.125-.29.22-.405a.992.992 0 0 1 .777-.36c.131 0 .248.018.353.054.104.034.193.09.267.167a.74.74 0 0 1 .171.299c.04.121.059.268.059.443v1.738h-.456v-1.743c0-.138-.02-.25-.061-.333a.377.377 0 0 0-.179-.184.642.642 0 0 0-.289-.058.666.666 0 0 0-.546.267.985.985 0 0 0-.209.625Zm3.519 1.475c-.184 0-.352-.031-.502-.093a1.147 1.147 0 0 1-.385-.267 1.194 1.194 0 0 1-.245-.407 1.5 1.5 0 0 1-.086-.515v-.103c0-.215.032-.407.096-.576.064-.17.15-.313.26-.431a1.094 1.094 0 0 1 .804-.358c.189 0 .352.033.49.098a.893.893 0 0 1 .34.275c.089.116.154.253.196.411.043.157.064.329.064.515v.203h-1.98v-.37h1.527v-.034a1.126 1.126 0 0 0-.074-.343.611.611 0 0 0-.196-.274.57.57 0 0 0-.367-.108.622.622 0 0 0-.508.257.962.962 0 0 0-.144.311 1.552 1.552 0 0 0-.052.424v.103c0 .126.017.244.052.355.036.11.087.206.154.29a.752.752 0 0 0 .248.196.76.76 0 0 0 .333.071c.16 0 .296-.033.407-.098.111-.066.208-.153.291-.262l.275.218c-.057.086-.13.169-.218.247a1.04 1.04 0 0 1-.326.191 1.267 1.267 0 0 1-.454.074Zm3.299-3.813v3.764h-.456v-3.764h.456Zm2.291 3.31v-1.365a.56.56 0 0 0-.063-.272.42.42 0 0 0-.187-.181.678.678 0 0 0-.308-.064.73.73 0 0 0-.302.059.521.521 0 0 0-.201.155.338.338 0 0 0-.071.205h-.453c0-.094.024-.188.073-.281a.808.808 0 0 1 .211-.253c.093-.077.204-.137.333-.181.131-.046.276-.069.436-.069.193 0 .363.033.51.098a.761.761 0 0 1 .348.297c.085.13.128.295.128.492v1.235c0 .089.007.183.022.282.016.1.04.186.071.258v.039h-.473a.836.836 0 0 1-.054-.209 1.68 1.68 0 0 1-.02-.245Zm.079-1.154.005.319h-.459c-.129 0-.244.01-.345.032a.77.77 0 0 0-.255.09.406.406 0 0 0-.211.368c0 .083.019.159.057.228a.406.406 0 0 0 .169.164c.076.039.17.059.281.059a.756.756 0 0 0 .62-.304.465.465 0 0 0 .103-.248l.194.219a.66.66 0 0 1-.093.227 1.095 1.095 0 0 1-.503.429.971.971 0 0 1-.387.074c-.179 0-.337-.035-.473-.106a.806.806 0 0 1-.313-.281.746.746 0 0 1-.111-.4c0-.142.028-.267.084-.375a.72.72 0 0 1 .24-.272c.104-.073.23-.129.377-.166a1.97 1.97 0 0 1 .493-.057h.527Zm2.632.904a.376.376 0 0 0-.045-.181.364.364 0 0 0-.174-.154 1.417 1.417 0 0 0-.392-.123 3.162 3.162 0 0 1-.399-.11 1.229 1.229 0 0 1-.301-.154.592.592 0 0 1-.255-.5c0-.105.023-.204.068-.297a.795.795 0 0 1 .199-.247.96.96 0 0 1 .311-.17c.121-.04.256-.061.404-.061.213 0 .394.038.544.113a.846.846 0 0 1 .346.301c.08.125.12.263.12.415h-.453a.385.385 0 0 0-.067-.214.489.489 0 0 0-.188-.174.619.619 0 0 0-.302-.068.675.675 0 0 0-.306.059.386.386 0 0 0-.169.144.368.368 0 0 0-.027.319.299.299 0 0 0 .093.105.737.737 0 0 0 .186.088c.08.028.183.056.307.084.217.049.396.107.536.176a.798.798 0 0 1 .314.252c.069.1.103.221.103.363a.697.697 0 0 1-.282.569 1.05 1.05 0 0 1-.323.161 1.435 1.435 0 0 1-.419.057c-.234 0-.432-.042-.593-.125a.916.916 0 0 1-.368-.324.776.776 0 0 1-.125-.419h.456a.465.465 0 0 0 .108.297.544.544 0 0 0 .24.154c.095.03.188.044.282.044a.849.849 0 0 0 .311-.049.426.426 0 0 0 .193-.134.311.311 0 0 0 .067-.197Zm2.159-1.948v.348h-1.434v-.348h1.434Zm-.949-.644h.454v2.639c0 .09.013.158.041.203a.202.202 0 0 0 .108.091.44.44 0 0 0 .142.022.696.696 0 0 0 .118-.01l.095-.019.003.37a1.157 1.157 0 0 1-.142.032 1.122 1.122 0 0 1-.209.017.706.706 0 0 1-.306-.066.496.496 0 0 1-.223-.221.922.922 0 0 1-.081-.421v-2.637Zm3.338 1.289h.323a.85.85 0 0 0 .392-.079.531.531 0 0 0 .233-.218.62.62 0 0 0 .079-.313.776.776 0 0 0-.069-.346.462.462 0 0 0-.206-.211.756.756 0 0 0-.348-.071.735.735 0 0 0-.338.076.559.559 0 0 0-.309.534h-.453c0-.181.046-.346.137-.495a.994.994 0 0 1 .385-.355 1.22 1.22 0 0 1 .578-.132 1.3 1.3 0 0 1 .566.115.844.844 0 0 1 .378.338c.09.149.135.334.135.556a.862.862 0 0 1-.258.574.992.992 0 0 1-.338.218 1.356 1.356 0 0 1-.5.083h-.387v-.274Zm0 .372v-.272h.387c.227 0 .415.027.564.081a.893.893 0 0 1 .35.216c.087.09.147.188.182.296a1.087 1.087 0 0 1-.032.762.913.913 0 0 1-.238.329c-.101.09-.221.157-.358.203a1.403 1.403 0 0 1-.448.069 1.43 1.43 0 0 1-.439-.066 1.111 1.111 0 0 1-.36-.192.878.878 0 0 1-.245-.311.974.974 0 0 1-.088-.424h.453a.57.57 0 0 0 .316.544.809.809 0 0 0 .363.076.812.812 0 0 0 .357-.071.512.512 0 0 0 .233-.22.74.74 0 0 0 .084-.37.644.644 0 0 0-.094-.365.545.545 0 0 0-.264-.214 1.036 1.036 0 0 0-.4-.071h-.323Zm4.401-.434v.545c0 .292-.026.539-.078.74a1.301 1.301 0 0 1-.226.485.864.864 0 0 1-.355.267 1.261 1.261 0 0 1-.466.081c-.137 0-.263-.017-.379-.052a.899.899 0 0 1-.314-.164.979.979 0 0 1-.235-.299 1.565 1.565 0 0 1-.15-.446 3.241 3.241 0 0 1-.051-.612v-.545c0-.292.026-.537.078-.735.054-.197.13-.356.228-.475a.829.829 0 0 1 .353-.26c.139-.052.294-.078.465-.078.139 0 .267.017.383.051a.875.875 0 0 1 .313.159c.092.072.17.169.233.29.066.119.115.265.15.438.034.173.051.377.051.61Zm-.456.618v-.693a2.62 2.62 0 0 0-.029-.422 1.325 1.325 0 0 0-.081-.314.622.622 0 0 0-.137-.21.48.48 0 0 0-.189-.118.679.679 0 0 0-.238-.039.64.64 0 0 0-.286.061.507.507 0 0 0-.211.189.995.995 0 0 0-.127.34c-.03.141-.045.312-.045.513v.693c0 .16.009.301.027.424.02.123.049.229.086.319.038.088.083.16.137.218a.514.514 0 0 0 .187.127.693.693 0 0 0 .237.039.64.64 0 0 0 .292-.063.528.528 0 0 0 .208-.199c.057-.091.1-.208.128-.35.027-.144.041-.316.041-.515Zm4.005.936v-3.249h.455v3.764h-.416l-.039-.515Zm-1.784-.782v-.051c0-.203.024-.386.073-.551.051-.167.122-.31.213-.429a.945.945 0 0 1 .762-.373c.167 0 .313.03.437.088a.85.85 0 0 1 .318.253c.088.109.158.242.209.397.05.155.085.331.105.527v.225a2.334 2.334 0 0 1-.105.525 1.258 1.258 0 0 1-.209.397.877.877 0 0 1-.318.252 1.061 1.061 0 0 1-.441.086.912.912 0 0 1-.427-.101 1.01 1.01 0 0 1-.331-.282 1.384 1.384 0 0 1-.213-.426 1.88 1.88 0 0 1-.073-.537Zm.455-.051v.051c0 .133.013.257.04.373.027.116.07.218.127.306a.64.64 0 0 0 .218.209.642.642 0 0 0 .316.073.654.654 0 0 0 .606-.348c.058-.104.104-.218.137-.341v-.59a1.3 1.3 0 0 0-.086-.26.789.789 0 0 0-.142-.225.623.623 0 0 0-.213-.16.696.696 0 0 0-.297-.058.63.63 0 0 0-.321.078.628.628 0 0 0-.218.211.96.96 0 0 0-.127.308c-.027.116-.04.241-.04.373Zm4.054.894v-1.365a.56.56 0 0 0-.064-.272.423.423 0 0 0-.186-.181.683.683 0 0 0-.309-.064.725.725 0 0 0-.301.059.521.521 0 0 0-.201.155.332.332 0 0 0-.071.205h-.454a.6.6 0 0 1 .074-.281.818.818 0 0 1 .21-.253 1.06 1.06 0 0 1 .334-.181c.13-.046.276-.069.436-.069.193 0 .363.033.51.098a.771.771 0 0 1 .348.297c.085.13.127.295.127.492v1.235c0 .089.007.183.022.282.016.1.04.186.071.258v.039h-.473a.836.836 0 0 1-.054-.209 1.672 1.672 0 0 1-.019-.245Zm.078-1.154.005.319h-.458c-.129 0-.244.01-.346.032a.78.78 0 0 0-.255.09.406.406 0 0 0-.21.368c0 .083.018.159.056.228a.418.418 0 0 0 .169.164.619.619 0 0 0 .282.059.752.752 0 0 0 .62-.304.465.465 0 0 0 .103-.248l.193.219a.641.641 0 0 1-.093.227 1.062 1.062 0 0 1-.502.429.971.971 0 0 1-.387.074c-.18 0-.338-.035-.473-.106a.81.81 0 0 1-.314-.281.754.754 0 0 1-.11-.4c0-.142.028-.267.083-.375a.737.737 0 0 1 .24-.272c.105-.073.231-.129.378-.166.147-.038.311-.057.492-.057h.527Zm1.794 1.333.738-2.377h.485l-1.064 3.061a1.608 1.608 0 0 1-.098.211c-.039.077-.09.149-.152.218a.726.726 0 0 1-.225.167.68.68 0 0 1-.311.066 1.221 1.221 0 0 1-.255-.04l-.003-.367.062.005a.723.723 0 0 0 .323-.037.393.393 0 0 0 .181-.135.799.799 0 0 0 .13-.257l.189-.515Zm-.542-2.377.689 2.059.118.478-.326.166-.976-2.703h.495Zm3.718 1.948a.387.387 0 0 0-.044-.181.373.373 0 0 0-.174-.154 1.429 1.429 0 0 0-.392-.123 3.227 3.227 0 0 1-.4-.11 1.247 1.247 0 0 1-.301-.154.592.592 0 0 1-.255-.5c0-.105.023-.204.069-.297a.777.777 0 0 1 .198-.247.97.97 0 0 1 .311-.17c.121-.04.256-.061.405-.061.212 0 .393.038.544.113a.85.85 0 0 1 .345.301c.08.125.12.263.12.415h-.453a.392.392 0 0 0-.066-.214.5.5 0 0 0-.189-.174.617.617 0 0 0-.301-.068.68.68 0 0 0-.307.059.392.392 0 0 0-.169.144.367.367 0 0 0-.027.319.299.299 0 0 0 .093.105.763.763 0 0 0 .187.088c.08.028.182.056.306.084.217.049.396.107.537.176.14.069.245.153.313.252.069.1.103.221.103.363a.696.696 0 0 1-.282.569 1.029 1.029 0 0 1-.323.161 1.43 1.43 0 0 1-.419.057c-.234 0-.431-.042-.593-.125a.922.922 0 0 1-.368-.324.776.776 0 0 1-.125-.419h.456a.477.477 0 0 0 .108.297.544.544 0 0 0 .24.154.93.93 0 0 0 .282.044.849.849 0 0 0 .311-.049.429.429 0 0 0 .194-.134.316.316 0 0 0 .066-.197Zm2.786-1.948v2.652h-.456v-2.652h.456Zm-.49-.703c0-.074.022-.136.066-.186.046-.051.113-.076.201-.076.087 0 .153.025.199.076.047.05.071.112.071.186 0 .07-.024.131-.071.181-.046.049-.112.074-.199.074-.088 0-.155-.025-.201-.074a.266.266 0 0 1-.066-.181Zm2.762 2.651a.387.387 0 0 0-.044-.181.373.373 0 0 0-.174-.154 1.429 1.429 0 0 0-.392-.123 3.227 3.227 0 0 1-.4-.11 1.247 1.247 0 0 1-.301-.154.592.592 0 0 1-.255-.5c0-.105.023-.204.069-.297a.777.777 0 0 1 .198-.247.97.97 0 0 1 .311-.17c.121-.04.256-.061.405-.061.212 0 .393.038.544.113a.85.85 0 0 1 .345.301c.08.125.12.263.12.415h-.453a.392.392 0 0 0-.066-.214.5.5 0 0 0-.189-.174.617.617 0 0 0-.301-.068.68.68 0 0 0-.307.059.392.392 0 0 0-.169.144.367.367 0 0 0-.027.319.299.299 0 0 0 .093.105.763.763 0 0 0 .187.088c.08.028.182.056.306.084.217.049.396.107.537.176.14.069.245.153.313.252.069.1.103.221.103.363a.696.696 0 0 1-.281.569c-.09.068-.198.122-.324.161a1.43 1.43 0 0 1-.419.057c-.234 0-.431-.042-.593-.125a.922.922 0 0 1-.368-.324.776.776 0 0 1-.125-.419h.456a.477.477 0 0 0 .108.297.544.544 0 0 0 .24.154.93.93 0 0 0 .282.044.849.849 0 0 0 .311-.049.429.429 0 0 0 .194-.134.316.316 0 0 0 .066-.197ZM238.425 402.05v-2.625c0-.189-.031-.35-.092-.484a.695.695 0 0 0-.289-.322.956.956 0 0 0-.496-.114c-.174 0-.324.031-.452.093a.655.655 0 0 0-.294.255.708.708 0 0 0-.103.387h-1.568c0-.25.058-.488.174-.713.116-.225.285-.423.506-.594.222-.174.485-.31.79-.408a3.41 3.41 0 0 1 1.035-.147c.457 0 .864.076 1.219.228.356.153.636.382.839.687.207.305.311.686.311 1.143v2.522c0 .323.019.588.059.795.04.203.098.381.175.533v.093h-1.585a2.287 2.287 0 0 1-.174-.599 4.849 4.849 0 0 1-.055-.73Zm.207-2.26.011.888h-.877c-.207 0-.386.023-.539.071a1.007 1.007 0 0 0-.376.201.783.783 0 0 0-.217.294 1.01 1.01 0 0 0-.066.37c0 .135.031.256.093.365.062.106.15.189.267.251a.902.902 0 0 0 .408.087c.236 0 .441-.047.615-.142a1.11 1.11 0 0 0 .403-.348.73.73 0 0 0 .153-.392l.414.664a2.668 2.668 0 0 1-.24.463 1.924 1.924 0 0 1-.926.795 2.018 2.018 0 0 1-.762.131 2.3 2.3 0 0 1-1.018-.223 1.86 1.86 0 0 1-.719-.627 1.644 1.644 0 0 1-.262-.915c0-.308.059-.582.175-.822.116-.24.286-.441.512-.604.228-.167.513-.293.855-.376a4.83 4.83 0 0 1 1.187-.131h.909Zm2.581-4.776h1.569v7.014l-.158 1.351h-1.411v-8.365Zm5.299 5.359v.114c0 .439-.047.842-.141 1.209a2.76 2.76 0 0 1-.425.953 2.044 2.044 0 0 1-.719.621 2.17 2.17 0 0 1-1.002.218c-.359 0-.672-.073-.937-.218a1.903 1.903 0 0 1-.659-.615 3.498 3.498 0 0 1-.43-.932 7.116 7.116 0 0 1-.245-1.165v-.251c.055-.421.136-.809.245-1.165.109-.356.252-.666.43-.931s.398-.47.659-.616a1.88 1.88 0 0 1 .926-.217c.389 0 .726.074 1.013.223.29.145.53.352.719.621.192.265.334.581.425.947.094.363.141.765.141 1.204Zm-1.568.114v-.114c0-.24-.018-.465-.055-.675a1.744 1.744 0 0 0-.174-.561.977.977 0 0 0-.343-.387.978.978 0 0 0-.55-.142c-.214 0-.396.037-.545.109a1.025 1.025 0 0 0-.37.305 1.393 1.393 0 0 0-.212.469 2.817 2.817 0 0 0-.087.588v.713c.01.287.058.541.141.763.087.217.218.39.392.517.178.123.409.185.692.185.221 0 .405-.043.55-.131a.88.88 0 0 0 .338-.37c.083-.16.141-.347.174-.561.033-.218.049-.454.049-.708Zm2.293.006v-.115c0-.432.061-.829.185-1.192.123-.367.303-.685.539-.953.236-.269.526-.478.871-.627a2.92 2.92 0 0 1 1.187-.228c.447 0 .844.076 1.193.228.348.149.641.358.877.627.239.268.421.586.544.953.124.363.185.76.185 1.192v.115c0 .428-.061.826-.185 1.192a2.779 2.779 0 0 1-.544.953 2.417 2.417 0 0 1-.872.627c-.345.148-.74.223-1.187.223-.446 0-.844-.075-1.192-.223a2.462 2.462 0 0 1-.877-.627 2.817 2.817 0 0 1-.539-.953 3.696 3.696 0 0 1-.185-1.192Zm1.568-.115v.115c0 .247.022.477.065.691.044.214.113.403.207.567.098.159.225.285.381.375.157.091.347.137.572.137.218 0 .405-.046.561-.137a1.04 1.04 0 0 0 .376-.375c.094-.164.163-.353.207-.567.047-.214.071-.444.071-.691v-.115c0-.239-.024-.464-.071-.675a1.79 1.79 0 0 0-.213-.566 1.047 1.047 0 0 0-.375-.392 1.07 1.07 0 0 0-.567-.142c-.221 0-.41.047-.566.142a1.107 1.107 0 0 0-.376.392 1.887 1.887 0 0 0-.207.566 3.376 3.376 0 0 0-.065.675Zm6.894 1.857 1.307-4.748h1.639l-1.987 5.892h-.991l.032-1.144Zm-.898-4.748 1.312 4.754.027 1.138h-.996l-1.988-5.892h1.645Zm7.183 6.001c-.458 0-.868-.073-1.231-.218a2.71 2.71 0 0 1-.926-.615 2.744 2.744 0 0 1-.577-.91 3.068 3.068 0 0 1-.202-1.111v-.218c0-.446.064-.855.191-1.225.127-.37.309-.692.545-.964.239-.272.53-.481.871-.626a2.855 2.855 0 0 1 1.154-.223c.418 0 .788.069 1.111.207.323.138.594.334.812.588.221.254.388.559.501.915.112.352.169.744.169 1.176v.653h-4.684v-1.045h3.142v-.12c0-.218-.039-.412-.119-.583a.935.935 0 0 0-.349-.414c-.156-.101-.356-.152-.599-.152-.207 0-.385.045-.534.136-.148.091-.27.218-.364.381-.091.164-.16.356-.207.578a3.625 3.625 0 0 0-.066.718v.218c0 .236.033.454.098.654.069.199.165.372.289.517.127.145.279.258.457.338.182.08.387.12.616.12.283 0 .546-.055.789-.164.247-.112.46-.281.637-.506l.763.827a2.308 2.308 0 0 1-.507.512c-.21.164-.464.298-.762.403a3.134 3.134 0 0 1-1.018.153Zm9.846-8.054v7.945h-1.569v-6.137l-1.884.599v-1.237l3.284-1.17h.169Zm7.918 3.283v1.373c0 .595-.064 1.109-.191 1.541-.127.428-.31.78-.55 1.056a2.166 2.166 0 0 1-.844.605c-.327.13-.69.196-1.089.196-.32 0-.617-.04-.893-.12a2.22 2.22 0 0 1-.746-.387 2.456 2.456 0 0 1-.567-.659 3.36 3.36 0 0 1-.359-.958 5.794 5.794 0 0 1-.125-1.274v-1.373c0-.595.063-1.105.19-1.53.131-.428.314-.779.55-1.051.24-.272.523-.472.85-.599.327-.131.69-.196 1.089-.196.319 0 .615.042.888.125.276.08.524.205.746.376.221.171.41.39.566.659.156.265.276.583.36.953.083.367.125.788.125 1.263Zm-1.574 1.58v-1.792c0-.287-.016-.537-.049-.752a2.19 2.19 0 0 0-.136-.544 1.14 1.14 0 0 0-.229-.37.821.821 0 0 0-.31-.207 1.088 1.088 0 0 0-.387-.066c-.178 0-.336.035-.474.104a.883.883 0 0 0-.343.332 1.797 1.797 0 0 0-.218.599 4.93 4.93 0 0 0-.07.904v1.792c0 .286.014.539.043.757.033.217.08.404.142.56.065.153.141.278.228.376a.825.825 0 0 0 .311.207c.12.044.25.066.392.066.174 0 .328-.035.463-.104a.906.906 0 0 0 .348-.338c.098-.156.171-.359.218-.61.047-.25.071-.555.071-.914Zm7.978-1.58v1.373c0 .595-.064 1.109-.191 1.541-.127.428-.31.78-.55 1.056a2.166 2.166 0 0 1-.844.605 2.92 2.92 0 0 1-1.089.196c-.319 0-.617-.04-.893-.12a2.22 2.22 0 0 1-.746-.387 2.435 2.435 0 0 1-.566-.659 3.36 3.36 0 0 1-.36-.958 5.855 5.855 0 0 1-.125-1.274v-1.373c0-.595.063-1.105.191-1.53.13-.428.314-.779.55-1.051.239-.272.522-.472.849-.599.327-.131.69-.196 1.089-.196.32 0 .616.042.888.125.276.08.525.205.746.376.221.171.41.39.566.659.156.265.276.583.36.953.083.367.125.788.125 1.263Zm-1.574 1.58v-1.792c0-.287-.016-.537-.049-.752a2.19 2.19 0 0 0-.136-.544 1.14 1.14 0 0 0-.229-.37.814.814 0 0 0-.31-.207 1.084 1.084 0 0 0-.387-.066c-.178 0-.336.035-.474.104a.883.883 0 0 0-.343.332 1.776 1.776 0 0 0-.217.599 4.835 4.835 0 0 0-.071.904v1.792c0 .286.014.539.043.757.033.217.08.404.142.56.065.153.141.278.229.376.09.095.194.164.31.207.12.044.251.066.392.066a1 1 0 0 0 .463-.104.916.916 0 0 0 .349-.338c.098-.156.17-.359.217-.61a4.95 4.95 0 0 0 .071-.914Z",
              fill:"#161E35"
            }),(0,n.jsx)("rect",{
              x:150.434,
              y:411.953,
              width:105.395,
              height:54.121,
              rx:1.115,
              fill:"#F5F5F5"
            }),(0,n.jsx)("path",{
              d:"M188.83 422.632h-.714v-.411h.714a.61.61 0 0 0 .284-.057.37.37 0 0 0 .162-.161.504.504 0 0 0 .052-.234.545.545 0 0 0-.052-.238.405.405 0 0 0-.162-.179.522.522 0 0 0-.284-.069h-.543v2.362h-.524v-2.776h1.067c.216 0 .401.039.553.117a.811.811 0 0 1 .351.318.877.877 0 0 1 .122.461.855.855 0 0 1-.122.463.776.776 0 0 1-.351.3 1.334 1.334 0 0 1-.553.104Zm1.438-1.763h1.008c.211 0 .392.032.543.096a.745.745 0 0 1 .349.282.822.822 0 0 1 .122.459.867.867 0 0 1-.076.374.74.74 0 0 1-.216.265 1.034 1.034 0 0 1-.324.167l-.164.084h-.89l-.004-.413h.666a.551.551 0 0 0 .268-.058.365.365 0 0 0 .16-.158.469.469 0 0 0 .056-.23.507.507 0 0 0-.054-.241.36.36 0 0 0-.162-.158.6.6 0 0 0-.274-.055h-.484v2.362h-.524v-2.776Zm1.566 2.776-.642-1.243.555-.002.65 1.218v.027h-.563Zm2.755-.412v.412h-1.476v-.412h1.476Zm-1.316-2.364v2.776h-.524v-2.776h.524Zm1.123 1.146v.402h-1.283v-.402h1.283Zm.187-1.146v.414h-1.47v-.414h1.47Zm1.345 2.232.692-2.232h.582l-.98 2.776h-.387l.093-.544Zm-.638-2.232.688 2.232.099.544h-.391l-.975-2.776h.579Zm2.756 0v2.776h-.524v-2.776h.524Zm2.813 1.317v.143c0 .21-.028.399-.083.566a1.226 1.226 0 0 1-.239.426 1.04 1.04 0 0 1-.368.268c-.142.063-.3.094-.474.094-.172 0-.329-.031-.473-.094a1.075 1.075 0 0 1-.37-.268 1.232 1.232 0 0 1-.242-.426 1.748 1.748 0 0 1-.086-.566v-.143c0-.211.029-.399.086-.566.057-.166.137-.308.24-.425a1.03 1.03 0 0 1 .368-.27c.144-.063.301-.094.473-.094.174 0 .332.031.475.094.142.062.265.152.367.27.105.117.185.259.241.425.057.167.085.355.085.566Zm-.53.143v-.146c0-.152-.013-.284-.041-.399a.872.872 0 0 0-.124-.291.536.536 0 0 0-.202-.178.6.6 0 0 0-.271-.061.591.591 0 0 0-.271.061.548.548 0 0 0-.198.178.895.895 0 0 0-.126.291 1.69 1.69 0 0 0-.042.399v.146c0 .15.014.283.042.399.03.115.071.213.126.293a.554.554 0 0 0 .473.24.53.53 0 0 0 .469-.24.902.902 0 0 0 .124-.293c.028-.116.041-.249.041-.399Zm2.518-1.46h.525v1.843a.98.98 0 0 1-.138.536.869.869 0 0 1-.373.326 1.283 1.283 0 0 1-.538.109c-.203 0-.384-.037-.543-.109a.86.86 0 0 1-.374-.326.996.996 0 0 1-.135-.536v-1.843h.524v1.843c0 .13.022.236.065.319a.416.416 0 0 0 .183.181.625.625 0 0 0 .28.059c.109 0 .203-.02.28-.059.079-.04.14-.1.181-.181a.705.705 0 0 0 .063-.319v-1.843Zm2.474 2.055a.4.4 0 0 0-.024-.143.27.27 0 0 0-.086-.116.681.681 0 0 0-.174-.103 2.441 2.441 0 0 0-.286-.107 3.064 3.064 0 0 1-.362-.137 1.46 1.46 0 0 1-.295-.177.652.652 0 0 1-.267-.542c0-.114.024-.218.072-.312a.723.723 0 0 1 .21-.242.967.967 0 0 1 .318-.158c.124-.037.26-.056.408-.056.206 0 .384.038.534.113a.86.86 0 0 1 .351.305.785.785 0 0 1 .124.432h-.523a.458.458 0 0 0-.055-.228.373.373 0 0 0-.164-.157.586.586 0 0 0-.274-.057.65.65 0 0 0-.267.048.36.36 0 0 0-.158.129.333.333 0 0 0-.052.183c0 .051.012.097.036.138a.44.44 0 0 0 .109.112.953.953 0 0 0 .179.097c.073.029.157.059.252.088.152.046.286.097.4.152.116.056.212.12.288.191a.7.7 0 0 1 .232.543.676.676 0 0 1-.272.561.932.932 0 0 1-.317.15 1.52 1.52 0 0 1-.409.052c-.135 0-.268-.018-.401-.054a1.218 1.218 0 0 1-.356-.164.79.79 0 0 1-.351-.674h.526c0 .087.014.162.042.225.029.061.07.111.122.15a.56.56 0 0 0 .187.084.938.938 0 0 0 .231.027.684.684 0 0 0 .263-.044.344.344 0 0 0 .156-.126.317.317 0 0 0 .053-.183Zm2.878.177.692-2.232h.582l-.98 2.776h-.387l.093-.544Zm-.638-2.232.688 2.232.099.544h-.391l-.975-2.776h.579Zm3.156.422-.791 2.354h-.554l1.037-2.776h.354l-.046.422Zm.662 2.354-.795-2.354-.048-.422h.357l1.042 2.776h-.556Zm-.037-1.032v.414h-1.488v-.414h1.488Zm2.64.62v.412h-1.395v-.412h1.395Zm-1.237-2.364v2.776h-.524v-2.776h.524Zm3.059 0h.525v1.843a.98.98 0 0 1-.138.536.869.869 0 0 1-.373.326 1.283 1.283 0 0 1-.538.109c-.203 0-.384-.037-.543-.109a.852.852 0 0 1-.373-.326.988.988 0 0 1-.136-.536v-1.843h.524v1.843c0 .13.022.236.065.319a.416.416 0 0 0 .183.181.625.625 0 0 0 .28.059.62.62 0 0 0 .281-.059c.078-.04.139-.1.181-.181a.705.705 0 0 0 .062-.319v-1.843Zm2.861 2.364v.412h-1.475v-.412h1.475Zm-1.315-2.364v2.776h-.524v-2.776h.524Zm1.123 1.146v.402h-1.283v-.402h1.283Zm.187-1.146v.414h-1.47v-.414h1.47ZM191.817 438.958v1.723h-7.998l-.106-1.334 4.627-7.342h1.746l-1.89 3.164-2.303 3.789h5.924Zm-1.258-6.953v11.1h-2.196v-11.1h2.196Zm4.62 9.248-.007 1.471c0 .564-.143 1.134-.427 1.708a4.273 4.273 0 0 1-1.068 1.411l-1.143-.588c.127-.233.251-.467.373-.701a4.16 4.16 0 0 0 .305-.77 3.39 3.39 0 0 0 .122-.953v-1.578h1.845Zm3.225.183h.145c.61 0 1.134-.074 1.571-.221a2.812 2.812 0 0 0 1.09-.656c.285-.285.495-.633.633-1.044.137-.417.206-.89.206-1.419v-2.104c0-.401-.041-.755-.122-1.06a2.108 2.108 0 0 0-.336-.754 1.424 1.424 0 0 0-.503-.458 1.302 1.302 0 0 0-.625-.152c-.244 0-.46.061-.648.183a1.561 1.561 0 0 0-.481.48 2.575 2.575 0 0 0-.297.701c-.066.26-.099.532-.099.816 0 .285.033.557.099.816.066.254.165.48.297.679.133.193.298.348.496.465.198.111.432.167.701.167.26 0 .491-.048.694-.145.209-.101.384-.233.526-.396a1.73 1.73 0 0 0 .336-.541 1.58 1.58 0 0 0 .122-.603l.724.397c0 .356-.076.706-.229 1.052a3.223 3.223 0 0 1-.64.945 3.15 3.15 0 0 1-.938.671 2.646 2.646 0 0 1-1.144.252c-.518 0-.978-.094-1.38-.282a3.014 3.014 0 0 1-1.021-.793 3.581 3.581 0 0 1-.625-1.189 4.863 4.863 0 0 1-.214-1.472c0-.539.087-1.044.259-1.517.178-.473.43-.89.755-1.25a3.544 3.544 0 0 1 1.182-.847 3.711 3.711 0 0 1 1.54-.312c.564 0 1.078.109 1.54.328a3.39 3.39 0 0 1 1.189.93c.331.396.585.871.763 1.425.183.554.274 1.169.274 1.845v.763c0 .722-.078 1.392-.236 2.013a5.862 5.862 0 0 1-.694 1.684 4.734 4.734 0 0 1-1.143 1.281 4.897 4.897 0 0 1-1.579.816c-.599.188-1.27.282-2.012.282h-.176v-1.776Zm14.882-4.857v1.922c0 .833-.088 1.552-.266 2.157-.178.6-.435 1.093-.77 1.479a3.039 3.039 0 0 1-1.182.846 4.075 4.075 0 0 1-1.525.275 4.47 4.47 0 0 1-1.25-.168 3.143 3.143 0 0 1-1.045-.541 3.448 3.448 0 0 1-.793-.923 4.749 4.749 0 0 1-.503-1.341 8.162 8.162 0 0 1-.175-1.784v-1.922c0-.833.089-1.547.267-2.142.183-.6.439-1.09.77-1.472a3.03 3.03 0 0 1 1.189-.838 4.071 4.071 0 0 1 1.525-.275c.447 0 .861.059 1.243.176.386.111.734.287 1.044.526.31.239.574.546.793.922.218.371.386.816.503 1.334.117.514.175 1.103.175 1.769Zm-2.203 2.211v-2.508a7.17 7.17 0 0 0-.068-1.052 3.132 3.132 0 0 0-.191-.763 1.622 1.622 0 0 0-.32-.518 1.167 1.167 0 0 0-.435-.29 1.532 1.532 0 0 0-.541-.091c-.249 0-.47.048-.663.145a1.22 1.22 0 0 0-.481.465c-.132.208-.234.488-.305.838a6.885 6.885 0 0 0-.099 1.266v2.508c0 .402.02.755.061 1.06.046.305.112.567.198.785.092.214.199.389.321.526.127.132.271.229.434.29.168.061.351.092.549.092.244 0 .46-.049.648-.145.193-.102.356-.26.488-.473.137-.219.239-.503.305-.854s.099-.778.099-1.281Zm11.169-2.211v1.922c0 .833-.089 1.552-.266 2.157-.178.6-.435 1.093-.77 1.479a3.039 3.039 0 0 1-1.182.846 4.075 4.075 0 0 1-1.525.275 4.47 4.47 0 0 1-1.25-.168 3.143 3.143 0 0 1-1.045-.541 3.448 3.448 0 0 1-.793-.923 4.749 4.749 0 0 1-.503-1.341 8.162 8.162 0 0 1-.175-1.784v-1.922c0-.833.089-1.547.267-2.142.182-.6.439-1.09.77-1.472.335-.381.731-.66 1.189-.838a4.071 4.071 0 0 1 1.525-.275c.447 0 .861.059 1.242.176a3.09 3.09 0 0 1 1.045.526c.31.239.574.546.793.922.218.371.386.816.503 1.334.117.514.175 1.103.175 1.769Zm-2.203 2.211v-2.508c0-.402-.023-.752-.069-1.052a3.09 3.09 0 0 0-.19-.763 1.622 1.622 0 0 0-.32-.518 1.167 1.167 0 0 0-.435-.29 1.532 1.532 0 0 0-.541-.091c-.249 0-.47.048-.664.145a1.224 1.224 0 0 0-.48.465c-.132.208-.234.488-.305.838a6.885 6.885 0 0 0-.099 1.266v2.508c0 .402.02.755.061 1.06.046.305.112.567.198.785.092.214.198.389.32.526.128.132.272.229.435.29.168.061.351.092.549.092.244 0 .46-.049.648-.145.193-.102.356-.26.488-.473.137-.219.239-.503.305-.854s.099-.778.099-1.281Z",
              fill:"#161E35"
            }),(0,n.jsx)("path",{
              d:"M189.086 449.118h.366c-.019.175-.07.332-.151.47a.871.871 0 0 1-.345.33c-.148.08-.334.12-.556.12a.988.988 0 0 1-.786-.351 1.211 1.211 0 0 1-.221-.406 1.72 1.72 0 0 1-.076-.529v-.277c0-.194.025-.37.076-.528.052-.159.127-.295.223-.408a1 1 0 0 1 .353-.261c.137-.061.291-.091.463-.091.21 0 .387.039.532.118a.844.844 0 0 1 .337.328c.081.138.132.299.151.482h-.366a1.034 1.034 0 0 0-.099-.334.52.52 0 0 0-.206-.217.697.697 0 0 0-.349-.076.645.645 0 0 0-.56.271.893.893 0 0 0-.141.31 1.571 1.571 0 0 0-.048.402v.281c0 .136.014.263.042.383.029.119.073.224.131.314a.66.66 0 0 0 .223.214c.091.05.197.076.321.076.156 0 .28-.025.373-.074a.488.488 0 0 0 .21-.214c.048-.093.082-.204.103-.333Zm.72-.126v-.044c0-.149.022-.287.065-.414a.986.986 0 0 1 .187-.333.825.825 0 0 1 .295-.221.911.911 0 0 1 .389-.08c.145 0 .275.026.391.08a.815.815 0 0 1 .297.221.957.957 0 0 1 .189.333c.043.127.065.265.065.414v.044c0 .148-.022.286-.065.413a.98.98 0 0 1-.189.334.861.861 0 0 1-.684.299.878.878 0 0 1-.688-.299 1.01 1.01 0 0 1-.187-.334 1.282 1.282 0 0 1-.065-.413Zm.353-.044v.044c0 .103.012.2.036.291.024.091.06.171.109.24.049.07.111.126.185.166.073.04.159.059.257.059a.511.511 0 0 0 .436-.225.732.732 0 0 0 .109-.24c.025-.091.038-.188.038-.291v-.044c0-.102-.013-.198-.038-.288a.754.754 0 0 0-.11-.242.544.544 0 0 0-.183-.168.524.524 0 0 0-.256-.061.525.525 0 0 0-.255.061.544.544 0 0 0-.183.168.753.753 0 0 0-.109.242c-.024.09-.036.186-.036.288Zm3.229.575v-1.585h.354V450h-.337l-.017-.477Zm.066-.434.147-.004c0 .137-.014.264-.044.381a.807.807 0 0 1-.137.301.646.646 0 0 1-.25.201.9.9 0 0 1-.375.07.811.811 0 0 1-.276-.044.55.55 0 0 1-.353-.373 1.146 1.146 0 0 1-.048-.353v-1.33h.353v1.334c0 .093.01.17.03.231a.393.393 0 0 0 .086.142.316.316 0 0 0 .122.073.65.65 0 0 0 .498-.065.487.487 0 0 0 .188-.234.873.873 0 0 0 .059-.33Zm1.178-.711V450h-.352v-2.062h.333l.019.44Zm-.084.513-.146-.006c.001-.141.022-.271.063-.391a.961.961 0 0 1 .171-.314.77.77 0 0 1 .604-.28c.102 0 .193.014.275.041.081.027.15.07.208.13.058.06.102.137.133.233.03.094.046.209.046.345V450h-.355v-1.355a.603.603 0 0 0-.047-.259.295.295 0 0 0-.14-.143.492.492 0 0 0-.224-.046.524.524 0 0 0-.426.208.794.794 0 0 0-.162.486Zm2.753-.953v.27h-1.115v-.27h1.115Zm-.738-.502h.353v2.053c0 .07.011.123.032.158a.16.16 0 0 0 .084.071.359.359 0 0 0 .111.017.487.487 0 0 0 .091-.008l.074-.015.002.288a.885.885 0 0 1-.272.038.557.557 0 0 1-.239-.051.388.388 0 0 1-.173-.172.717.717 0 0 1-.063-.328v-2.051Zm2.026 1.556v-.044c0-.149.022-.287.065-.414a.969.969 0 0 1 .187-.333.825.825 0 0 1 .295-.221.908.908 0 0 1 .389-.08c.145 0 .275.026.391.08a.815.815 0 0 1 .297.221.957.957 0 0 1 .189.333c.043.127.065.265.065.414v.044c0 .148-.022.286-.065.413a.98.98 0 0 1-.189.334.861.861 0 0 1-.684.299.878.878 0 0 1-.688-.299.992.992 0 0 1-.187-.334 1.282 1.282 0 0 1-.065-.413Zm.353-.044v.044c0 .103.012.2.036.291.024.091.06.171.109.24.049.07.111.126.185.166.073.04.159.059.257.059a.514.514 0 0 0 .436-.225.732.732 0 0 0 .109-.24c.025-.091.038-.188.038-.291v-.044c0-.102-.013-.198-.038-.288a.735.735 0 0 0-.111-.242.517.517 0 0 0-.438-.229.523.523 0 0 0-.255.061.544.544 0 0 0-.183.168.753.753 0 0 0-.109.242c-.024.09-.036.186-.036.288Zm2.493 1.052h-.353v-2.28c0-.148.027-.273.08-.375a.54.54 0 0 1 .235-.233.77.77 0 0 1 .362-.08 1 1 0 0 1 .244.031l-.019.288a.559.559 0 0 0-.092-.014 1.638 1.638 0 0 0-.099-.004.395.395 0 0 0-.194.046.285.285 0 0 0-.122.13.478.478 0 0 0-.042.211V450Zm.438-2.062v.27h-1.117v-.27h1.117Zm1.714.324V450h-.353v-2.062h.343l.01.324Zm.644-.336-.002.328a.51.51 0 0 0-.084-.011.749.749 0 0 0-.087-.004.575.575 0 0 0-.216.038.438.438 0 0 0-.158.107.498.498 0 0 0-.103.164.8.8 0 0 0-.048.205l-.099.058c0-.125.012-.242.037-.351a.952.952 0 0 1 .116-.29.569.569 0 0 1 .198-.198.56.56 0 0 1 .446-.046Zm1.466 1.721v-1.061a.432.432 0 0 0-.05-.212.325.325 0 0 0-.145-.141.524.524 0 0 0-.24-.049.568.568 0 0 0-.234.045.43.43 0 0 0-.157.12.27.27 0 0 0-.055.16h-.352a.47.47 0 0 1 .057-.219.64.64 0 0 1 .164-.196.806.806 0 0 1 .259-.141c.102-.036.215-.053.339-.053a.97.97 0 0 1 .397.076.602.602 0 0 1 .27.23c.066.102.099.23.099.384v.96c0 .069.006.142.018.219a.833.833 0 0 0 .055.201v.03h-.368a.65.65 0 0 1-.042-.162 1.331 1.331 0 0 1-.015-.191Zm.061-.897.004.247h-.357c-.1 0-.19.009-.269.025a.614.614 0 0 0-.198.071.317.317 0 0 0-.164.286c0 .064.015.124.044.177a.32.32 0 0 0 .132.128.48.48 0 0 0 .219.045.59.59 0 0 0 .482-.236.358.358 0 0 0 .08-.193l.151.17a.5.5 0 0 1-.073.177.84.84 0 0 1-.391.334.755.755 0 0 1-.301.057.789.789 0 0 1-.368-.082.573.573 0 0 1-.329-.53c0-.11.021-.207.065-.291a.565.565 0 0 1 .186-.212.91.91 0 0 1 .294-.13c.114-.029.242-.043.383-.043h.41Zm2.182-.812h.32v2.018a.914.914 0 0 1-.11.465.72.72 0 0 1-.309.292.983.983 0 0 1-.454.101 1.155 1.155 0 0 1-.533-.147.706.706 0 0 1-.231-.211l.185-.21a.738.738 0 0 0 .271.217.707.707 0 0 0 .282.061.62.62 0 0 0 .289-.063.432.432 0 0 0 .189-.187.601.601 0 0 0 .069-.301v-1.582l.032-.453Zm-1.42 1.054v-.04c0-.158.019-.301.055-.429.039-.13.093-.241.162-.334a.732.732 0 0 1 .597-.289c.13 0 .243.022.339.068a.65.65 0 0 1 .248.197.949.949 0 0 1 .162.308c.039.121.067.258.082.41v.175a1.764 1.764 0 0 1-.082.408.944.944 0 0 1-.162.309.668.668 0 0 1-.248.196.814.814 0 0 1-.343.067.716.716 0 0 1-.591-.297 1.063 1.063 0 0 1-.164-.332 1.535 1.535 0 0 1-.055-.417Zm.353-.04v.04c0 .103.01.199.03.289.022.091.054.17.097.239a.506.506 0 0 0 .17.162.502.502 0 0 0 .246.057.529.529 0 0 0 .29-.074.545.545 0 0 0 .181-.197c.046-.081.081-.169.107-.265v-.459a.952.952 0 0 0-.065-.202.607.607 0 0 0-.111-.175.459.459 0 0 0-.166-.124.54.54 0 0 0-.232-.046c-.097 0-.18.02-.25.061a.484.484 0 0 0-.17.164.789.789 0 0 0-.097.24c-.02.09-.03.187-.03.29Zm2.779 1.086a.889.889 0 0 1-.881-.596 1.175 1.175 0 0 1-.067-.401v-.08c0-.168.025-.317.075-.448a.99.99 0 0 1 .202-.335.859.859 0 0 1 .625-.278c.147 0 .274.025.381.076a.696.696 0 0 1 .265.213c.069.09.12.197.153.32.033.122.049.256.049.401v.158h-1.54v-.288h1.188v-.027a.905.905 0 0 0-.058-.266.471.471 0 0 0-.152-.214.445.445 0 0 0-.286-.084.48.48 0 0 0-.395.2.763.763 0 0 0-.112.242c-.027.096-.04.206-.04.33v.08c0 .098.013.19.04.277.028.085.068.16.12.225a.584.584 0 0 0 .193.152.583.583 0 0 0 .259.055c.124 0 .23-.025.316-.076a.784.784 0 0 0 .227-.204l.214.17a1.037 1.037 0 0 1-.17.192.808.808 0 0 1-.254.149.98.98 0 0 1-.352.057Zm3.046-2.1v.27h-1.115v-.27h1.115Zm-.738-.502h.353v2.053c0 .07.01.123.032.158a.16.16 0 0 0 .084.071.357.357 0 0 0 .11.017.49.49 0 0 0 .092-.008l.074-.015.002.288a.885.885 0 0 1-.272.038.557.557 0 0 1-.239-.051.388.388 0 0 1-.173-.172.717.717 0 0 1-.063-.328v-2.051Zm2.367 2.211v-1.061a.431.431 0 0 0-.049-.212.325.325 0 0 0-.145-.141.526.526 0 0 0-.24-.049.576.576 0 0 0-.235.045.417.417 0 0 0-.156.12.263.263 0 0 0-.055.16h-.353a.47.47 0 0 1 .057-.219.64.64 0 0 1 .164-.196.817.817 0 0 1 .259-.141c.102-.036.215-.053.34-.053.15 0 .282.025.396.076a.6.6 0 0 1 .271.23c.066.102.099.23.099.384v.96c0 .069.006.142.017.219a.881.881 0 0 0 .055.201v.03h-.368a.75.75 0 0 1-.042-.162 1.331 1.331 0 0 1-.015-.191Zm.061-.897.004.247h-.356c-.101 0-.19.009-.269.025a.597.597 0 0 0-.198.071.317.317 0 0 0-.164.286c0 .064.014.124.044.177a.323.323 0 0 0 .131.128c.06.03.133.045.219.045a.587.587 0 0 0 .482-.236.36.36 0 0 0 .081-.193l.15.17a.516.516 0 0 1-.072.177.847.847 0 0 1-.391.334.758.758 0 0 1-.301.057.783.783 0 0 1-.368-.082.582.582 0 0 1-.33-.53.63.63 0 0 1 .065-.291.559.559 0 0 1 .187-.212.905.905 0 0 1 .293-.13c.115-.029.242-.043.383-.043h.41Zm1.199-.416v2.459h-.354v-2.855h.324l.03.396Zm1.39.618v.04c0 .15-.018.289-.054.417a1.008 1.008 0 0 1-.156.332.709.709 0 0 1-.25.219.723.723 0 0 1-.341.078.86.86 0 0 1-.347-.065.69.69 0 0 1-.255-.188.967.967 0 0 1-.168-.298 1.686 1.686 0 0 1-.084-.39v-.214c.015-.152.044-.289.086-.41.042-.12.097-.223.166-.308a.682.682 0 0 1 .253-.197.808.808 0 0 1 .343-.068c.13 0 .245.025.345.076a.695.695 0 0 1 .254.213.98.98 0 0 1 .154.334c.036.128.054.271.054.429Zm-.355.04v-.04c0-.103-.011-.2-.032-.29a.745.745 0 0 0-.101-.24.482.482 0 0 0-.422-.225.54.54 0 0 0-.232.046.486.486 0 0 0-.166.124.631.631 0 0 0-.112.175 1.008 1.008 0 0 0-.063.202v.494c.025.089.061.172.106.251a.552.552 0 0 0 .183.189c.077.047.173.07.288.07a.48.48 0 0 0 .246-.059.496.496 0 0 0 .172-.166.765.765 0 0 0 .101-.24c.021-.091.032-.188.032-.291Zm2.005.461a.294.294 0 0 0-.034-.141.29.29 0 0 0-.135-.12 1.09 1.09 0 0 0-.305-.095 2.554 2.554 0 0 1-.311-.086.94.94 0 0 1-.235-.12.456.456 0 0 1-.198-.389c0-.081.018-.158.054-.231a.61.61 0 0 1 .154-.192.75.75 0 0 1 .242-.132.974.974 0 0 1 .315-.047c.165 0 .306.029.423.087a.657.657 0 0 1 .268.235.575.575 0 0 1 .094.322h-.353a.305.305 0 0 0-.051-.166.371.371 0 0 0-.147-.135.47.47 0 0 0-.234-.054.544.544 0 0 0-.239.046.312.312 0 0 0-.131.112.283.283 0 0 0-.021.248.227.227 0 0 0 .072.082.636.636 0 0 0 .145.069c.062.021.142.043.238.065.169.038.309.084.418.137.109.053.19.119.244.196a.49.49 0 0 1 .08.282.539.539 0 0 1-.219.442.784.784 0 0 1-.252.126c-.097.03-.205.044-.326.044a.994.994 0 0 1-.461-.097.715.715 0 0 1-.286-.252.599.599 0 0 1-.097-.326h.354a.363.363 0 0 0 .084.231.426.426 0 0 0 .187.12.734.734 0 0 0 .219.034.654.654 0 0 0 .242-.038.336.336 0 0 0 .151-.105.242.242 0 0 0 .051-.152ZM190.9 456.137v-.019c0-.277.031-.528.094-.751a2.54 2.54 0 0 1 .238-.591c.097-.169.198-.309.305-.419.107-.112.205-.193.295-.242l.075.232a1.263 1.263 0 0 0-.229.236 1.899 1.899 0 0 0-.212.37 2.576 2.576 0 0 0-.154.509c-.039.193-.059.41-.059.652v.027c0 .241.02.459.059.653.039.194.091.364.154.511.065.148.136.273.212.376.077.104.154.186.229.247l-.075.214a1.3 1.3 0 0 1-.295-.242 2.121 2.121 0 0 1-.305-.419 2.522 2.522 0 0 1-.238-.589 2.801 2.801 0 0 1-.094-.755Zm2.57.299v-1.965h.366v1.965a.89.89 0 0 1-.113.463.733.733 0 0 1-.311.288.998.998 0 0 1-.451.097c-.171 0-.322-.029-.454-.087a.693.693 0 0 1-.311-.267.837.837 0 0 1-.112-.452h.368c0 .117.021.213.065.288.043.075.103.13.179.166a.636.636 0 0 0 .524-.008.46.46 0 0 0 .183-.185.64.64 0 0 0 .067-.303Zm2.197.334v-1.586h.355v2.062h-.338l-.017-.476Zm.067-.435.147-.004c0 .137-.015.265-.044.381a.836.836 0 0 1-.137.302.66.66 0 0 1-.25.2.9.9 0 0 1-.375.07.817.817 0 0 1-.277-.044.546.546 0 0 1-.213-.135.61.61 0 0 1-.139-.238 1.146 1.146 0 0 1-.048-.353v-1.33h.352v1.334c0 .093.011.17.031.231.022.059.05.107.086.143a.318.318 0 0 0 .122.072.472.472 0 0 0 .141.021c.15 0 .269-.029.356-.086a.483.483 0 0 0 .189-.234.893.893 0 0 0 .059-.33Zm1.178-.711v1.622h-.353v-2.062h.334l.019.44Zm-.084.513-.147-.006c.002-.141.023-.271.063-.391a.982.982 0 0 1 .172-.314.768.768 0 0 1 .604-.28c.102 0 .193.014.274.042a.482.482 0 0 1 .208.129c.059.06.103.137.134.233.03.094.045.209.045.345v1.351h-.354v-1.355a.587.587 0 0 0-.048-.259.293.293 0 0 0-.139-.143.493.493 0 0 0-.225-.046.517.517 0 0 0-.425.208.758.758 0 0 0-.162.486Zm3.978-1.681v2.79h-.353v-2.35l-.711.259v-.318l1.009-.381h.055Zm2.777 1.465v.29h-.93v-.29h.93Zm2.531.515v-1.965h.366v1.965a.89.89 0 0 1-.112.463.74.74 0 0 1-.311.288 1.002 1.002 0 0 1-.452.097c-.17 0-.321-.029-.453-.087a.688.688 0 0 1-.311-.267.837.837 0 0 1-.112-.452h.367c0 .117.022.213.065.288.043.075.103.13.179.166a.64.64 0 0 0 .524-.008.447.447 0 0 0 .183-.185.628.628 0 0 0 .067-.303Zm2.198.334v-1.586h.354v2.062h-.337l-.017-.476Zm.067-.435.146-.004c0 .137-.014.265-.044.381a.803.803 0 0 1-.137.302.657.657 0 0 1-.249.2.905.905 0 0 1-.376.07.815.815 0 0 1-.276-.044.55.55 0 0 1-.353-.373 1.146 1.146 0 0 1-.048-.353v-1.33h.353v1.334c0 .093.01.17.031.231.021.059.05.107.085.143a.326.326 0 0 0 .122.072.65.65 0 0 0 .498-.065.487.487 0 0 0 .188-.234.873.873 0 0 0 .06-.33Zm1.177-.711v1.622h-.352v-2.062h.333l.019.44Zm-.083.513-.147-.006c.001-.141.022-.271.063-.391a.98.98 0 0 1 .171-.314.77.77 0 0 1 .604-.28.84.84 0 0 1 .275.042.488.488 0 0 1 .208.129c.058.06.103.137.133.233.031.094.046.209.046.345v1.351h-.355v-1.355a.603.603 0 0 0-.047-.259.293.293 0 0 0-.139-.143.493.493 0 0 0-.225-.046.524.524 0 0 0-.425.208.758.758 0 0 0-.162.486Zm4.612-1.666v.198l-1.149 2.577h-.372l1.148-2.485h-1.502v-.29h1.875Zm1.252 1.647v.019c0 .278-.031.53-.093.755a2.567 2.567 0 0 1-.238.589 2.121 2.121 0 0 1-.305.419 1.28 1.28 0 0 1-.296.242l-.074-.214c.075-.057.151-.137.227-.24.076-.101.147-.227.211-.377.065-.149.117-.32.157-.515.039-.195.059-.414.059-.655v-.027c0-.242-.021-.459-.063-.654a2.547 2.547 0 0 0-.164-.516 1.952 1.952 0 0 0-.213-.376 1.333 1.333 0 0 0-.214-.238l.074-.215c.091.049.189.13.296.242.107.11.208.25.305.419.096.169.176.366.238.591.062.223.093.474.093.751Z",
              fill:"#454B5D"
            }),(0,n.jsx)("rect",{
              x:262.521,
              y:411.953,
              width:105.395,
              height:54.121,
              rx:1.115,
              fill:"#F5F5F5"
            }),(0,n.jsx)("path",{
              d:"M302.069 422.732h.524c-.014.185-.066.35-.155.493a.923.923 0 0 1-.371.336 1.262 1.262 0 0 1-.578.122c-.174 0-.331-.031-.471-.092a1.01 1.01 0 0 1-.356-.265 1.202 1.202 0 0 1-.225-.415 1.793 1.793 0 0 1-.078-.547v-.212c0-.202.027-.384.08-.547.053-.163.13-.301.229-.415.1-.116.22-.205.36-.267.141-.063.299-.094.473-.094.226 0 .417.042.573.126a.902.902 0 0 1 .364.341c.087.145.139.312.157.5h-.524a.839.839 0 0 0-.077-.298.401.401 0 0 0-.179-.185.655.655 0 0 0-.314-.064.602.602 0 0 0-.269.057.495.495 0 0 0-.191.171.808.808 0 0 0-.114.282 1.799 1.799 0 0 0-.038.389v.216c0 .141.011.267.034.379a.872.872 0 0 0 .107.284.48.48 0 0 0 .187.177.566.566 0 0 0 .272.061c.129 0 .233-.02.313-.061a.41.41 0 0 0 .185-.179.779.779 0 0 0 .082-.293Zm2.474-1.863h.524v1.843a.988.988 0 0 1-.137.536.871.871 0 0 1-.374.326 1.283 1.283 0 0 1-.538.109c-.203 0-.384-.037-.543-.109a.852.852 0 0 1-.373-.326.988.988 0 0 1-.136-.536v-1.843h.525v1.843c0 .13.021.236.064.319a.426.426 0 0 0 .183.181.625.625 0 0 0 .28.059.62.62 0 0 0 .281-.059c.078-.04.139-.1.181-.181a.705.705 0 0 0 .063-.319v-1.843Zm1.021 0h1.009c.21 0 .392.032.543.096a.75.75 0 0 1 .349.282.822.822 0 0 1 .122.459.852.852 0 0 1-.077.374.737.737 0 0 1-.215.265c-.092.071-.2.127-.324.167l-.164.084h-.89l-.004-.413h.665a.555.555 0 0 0 .269-.058.37.37 0 0 0 .16-.158.469.469 0 0 0 .055-.23.507.507 0 0 0-.053-.241.37.37 0 0 0-.162-.158.6.6 0 0 0-.274-.055h-.485v2.362h-.524v-2.776Zm1.567 2.776-.642-1.243.554-.002.65 1.218v.027h-.562Zm.915-2.776h1.008c.211 0 .392.032.543.096a.74.74 0 0 1 .349.282.814.814 0 0 1 .122.459.852.852 0 0 1-.076.374.747.747 0 0 1-.215.265c-.092.071-.2.127-.324.167l-.164.084h-.89l-.004-.413h.665a.558.558 0 0 0 .269-.058.375.375 0 0 0 .16-.158.469.469 0 0 0 .055-.23.52.52 0 0 0-.053-.241.37.37 0 0 0-.162-.158.604.604 0 0 0-.275-.055h-.484v2.362h-.524v-2.776Zm1.567 2.776-.643-1.243.555-.002.65 1.218v.027h-.562Zm2.754-.412v.412h-1.475v-.412h1.475Zm-1.315-2.364v2.776h-.524v-2.776h.524Zm1.122 1.146v.402h-1.282v-.402h1.282Zm.187-1.146v.414h-1.469v-.414h1.469Zm2.6 0v2.776h-.526l-1.18-1.926v1.926h-.524v-2.776h.524l1.184 1.927v-1.927h.522Zm1.668 0v2.776h-.523v-2.776h.523Zm.861 0v.414h-2.236v-.414h2.236Zm2.202 2.232.692-2.232h.581l-.98 2.776h-.387l.094-.544Zm-.639-2.232.688 2.232.099.544h-.39l-.976-2.776h.579Zm3.157.422-.791 2.354h-.555l1.037-2.776h.354l-.045.422Zm.661 2.354-.795-2.354-.048-.422h.357l1.042 2.776h-.556Zm-.036-1.032v.414h-1.489v-.414h1.489Zm2.64.62v.412h-1.396v-.412h1.396Zm-1.237-2.364v2.776h-.525v-2.776h.525Zm3.059 0h.524v1.843a.988.988 0 0 1-.137.536.871.871 0 0 1-.374.326 1.281 1.281 0 0 1-.537.109c-.204 0-.385-.037-.544-.109a.858.858 0 0 1-.373-.326.997.997 0 0 1-.136-.536v-1.843h.525v1.843c0 .13.021.236.064.319a.426.426 0 0 0 .183.181.63.63 0 0 0 .281.059c.109 0 .202-.02.28-.059.079-.04.139-.1.181-.181a.705.705 0 0 0 .063-.319v-1.843Zm2.861 2.364v.412h-1.476v-.412h1.476Zm-1.316-2.364v2.776h-.524v-2.776h.524Zm1.123 1.146v.402h-1.283v-.402h1.283Zm.187-1.146v.414h-1.47v-.414h1.47ZM298.194 438.051l-1.754-.42.633-5.626h6.236v1.776h-4.429l-.275 2.463c.148-.087.371-.178.671-.275a3.14 3.14 0 0 1 1.007-.152c.538 0 1.016.084 1.433.251.417.168.77.412 1.06.732.294.321.518.712.671 1.174.152.463.228.987.228 1.571 0 .493-.076.963-.228 1.41a3.51 3.51 0 0 1-.694 1.19c-.31.345-.699.617-1.167.816-.467.198-1.021.297-1.662.297-.478 0-.94-.071-1.387-.214a3.795 3.795 0 0 1-1.197-.632 3.275 3.275 0 0 1-.847-1.014 3.076 3.076 0 0 1-.327-1.373h2.18c.031.315.112.587.244.816.137.224.318.397.541.519.224.122.486.183.786.183.279 0 .518-.054.716-.161.198-.106.359-.254.481-.442.122-.193.21-.417.266-.671.061-.259.092-.538.092-.838 0-.3-.036-.572-.107-.816a1.734 1.734 0 0 0-.328-.633 1.45 1.45 0 0 0-.564-.412 1.975 1.975 0 0 0-.785-.144c-.407 0-.722.063-.946.19a2.266 2.266 0 0 0-.548.435Zm9.072 3.202-.007 1.471c0 .564-.143 1.134-.427 1.708a4.273 4.273 0 0 1-1.068 1.411l-1.143-.588c.127-.233.251-.467.373-.701a4.16 4.16 0 0 0 .305-.77 3.39 3.39 0 0 0 .122-.953v-1.578h1.845Zm9.141-4.674v1.922c0 .833-.088 1.552-.266 2.157-.178.6-.435 1.093-.77 1.479a3.039 3.039 0 0 1-1.182.846 4.075 4.075 0 0 1-1.525.275 4.47 4.47 0 0 1-1.25-.168 3.143 3.143 0 0 1-1.045-.541 3.448 3.448 0 0 1-.793-.923 4.749 4.749 0 0 1-.503-1.341 8.162 8.162 0 0 1-.175-1.784v-1.922c0-.833.089-1.547.267-2.142.183-.6.439-1.09.77-1.472a3.03 3.03 0 0 1 1.189-.838 4.071 4.071 0 0 1 1.525-.275c.447 0 .861.059 1.243.176.386.111.734.287 1.044.526.31.239.574.546.793.922.218.371.386.816.503 1.334.117.514.175 1.103.175 1.769Zm-2.203 2.211v-2.508c0-.402-.023-.752-.069-1.052a3.09 3.09 0 0 0-.19-.763 1.622 1.622 0 0 0-.32-.518 1.167 1.167 0 0 0-.435-.29 1.532 1.532 0 0 0-.541-.091c-.249 0-.47.048-.663.145a1.22 1.22 0 0 0-.481.465c-.132.208-.234.488-.305.838a6.885 6.885 0 0 0-.099 1.266v2.508c0 .402.02.755.061 1.06.046.305.112.567.198.785.092.214.199.389.321.526.127.132.271.229.434.29.168.061.351.092.549.092.244 0 .46-.049.648-.145.193-.102.356-.26.488-.473.137-.219.239-.503.305-.854s.099-.778.099-1.281Zm11.169-2.211v1.922c0 .833-.089 1.552-.266 2.157-.178.6-.435 1.093-.77 1.479a3.039 3.039 0 0 1-1.182.846 4.075 4.075 0 0 1-1.525.275 4.47 4.47 0 0 1-1.25-.168 3.143 3.143 0 0 1-1.045-.541 3.448 3.448 0 0 1-.793-.923 4.749 4.749 0 0 1-.503-1.341 8.162 8.162 0 0 1-.175-1.784v-1.922c0-.833.089-1.547.267-2.142.182-.6.439-1.09.77-1.472.335-.381.731-.66 1.189-.838a4.071 4.071 0 0 1 1.525-.275c.447 0 .861.059 1.242.176a3.09 3.09 0 0 1 1.045.526c.31.239.574.546.793.922.218.371.386.816.503 1.334.117.514.175 1.103.175 1.769Zm-2.203 2.211v-2.508c0-.402-.023-.752-.069-1.052a3.09 3.09 0 0 0-.19-.763 1.622 1.622 0 0 0-.32-.518 1.167 1.167 0 0 0-.435-.29 1.532 1.532 0 0 0-.541-.091c-.249 0-.47.048-.664.145a1.224 1.224 0 0 0-.48.465c-.132.208-.234.488-.305.838a6.885 6.885 0 0 0-.099 1.266v2.508c0 .402.02.755.061 1.06.046.305.112.567.198.785.092.214.198.389.32.526.128.132.272.229.435.29.168.061.351.092.549.092.244 0 .46-.049.648-.145.193-.102.356-.26.488-.473.137-.219.239-.503.305-.854s.099-.778.099-1.281Zm11.169-2.211v1.922c0 .833-.089 1.552-.267 2.157-.177.6-.434 1.093-.77 1.479-.33.381-.724.664-1.181.846a4.075 4.075 0 0 1-1.525.275 4.47 4.47 0 0 1-1.25-.168 3.143 3.143 0 0 1-1.045-.541 3.448 3.448 0 0 1-.793-.923 4.749 4.749 0 0 1-.503-1.341 8.162 8.162 0 0 1-.175-1.784v-1.922c0-.833.089-1.547.266-2.142.183-.6.44-1.09.77-1.472.336-.381.732-.66 1.19-.838a4.071 4.071 0 0 1 1.525-.275c.447 0 .861.059 1.242.176a3.09 3.09 0 0 1 1.045.526c.31.239.574.546.793.922.218.371.386.816.503 1.334.117.514.175 1.103.175 1.769Zm-2.203 2.211v-2.508c0-.402-.023-.752-.069-1.052a3.09 3.09 0 0 0-.19-.763 1.622 1.622 0 0 0-.32-.518 1.175 1.175 0 0 0-.435-.29 1.532 1.532 0 0 0-.541-.091 1.46 1.46 0 0 0-.664.145 1.224 1.224 0 0 0-.48.465c-.132.208-.234.488-.305.838a6.885 6.885 0 0 0-.099 1.266v2.508c0 .402.02.755.061 1.06.046.305.112.567.198.785.092.214.198.389.32.526.127.132.272.229.435.29.168.061.351.092.549.092.244 0 .46-.049.648-.145.193-.102.356-.26.488-.473.137-.219.239-.503.305-.854s.099-.778.099-1.281Z",
              fill:"#161E35"
            }),(0,n.jsx)("path",{
              d:"M301.173 449.118h.366c-.019.175-.07.332-.151.47a.871.871 0 0 1-.345.33c-.149.08-.334.12-.556.12a1.06 1.06 0 0 1-.445-.091.994.994 0 0 1-.341-.26 1.211 1.211 0 0 1-.221-.406 1.72 1.72 0 0 1-.076-.529v-.277c0-.194.025-.37.076-.528.052-.159.127-.295.223-.408a1 1 0 0 1 .353-.261c.137-.061.291-.091.463-.091.21 0 .387.039.532.118a.844.844 0 0 1 .337.328c.081.138.132.299.151.482h-.366a1.034 1.034 0 0 0-.099-.334.52.52 0 0 0-.206-.217.697.697 0 0 0-.349-.076.645.645 0 0 0-.56.271.893.893 0 0 0-.141.31 1.571 1.571 0 0 0-.048.402v.281c0 .136.014.263.042.383.029.119.073.224.131.314a.66.66 0 0 0 .223.214c.091.05.197.076.321.076.156 0 .28-.025.373-.074a.488.488 0 0 0 .21-.214c.048-.093.082-.204.103-.333Zm.72-.126v-.044c0-.149.022-.287.065-.414a.969.969 0 0 1 .187-.333.825.825 0 0 1 .295-.221.908.908 0 0 1 .389-.08c.145 0 .275.026.391.08a.815.815 0 0 1 .297.221.957.957 0 0 1 .189.333c.043.127.065.265.065.414v.044c0 .148-.022.286-.065.413a.98.98 0 0 1-.189.334.861.861 0 0 1-.684.299.869.869 0 0 1-.688-.299.992.992 0 0 1-.187-.334 1.282 1.282 0 0 1-.065-.413Zm.353-.044v.044c0 .103.012.2.036.291.024.091.06.171.109.24.049.07.111.126.185.166.073.04.159.059.257.059a.514.514 0 0 0 .436-.225.732.732 0 0 0 .109-.24c.025-.091.038-.188.038-.291v-.044c0-.102-.013-.198-.038-.288a.735.735 0 0 0-.111-.242.517.517 0 0 0-.438-.229.523.523 0 0 0-.255.061.544.544 0 0 0-.183.168.753.753 0 0 0-.109.242c-.024.09-.036.186-.036.288Zm3.229.575v-1.585h.354V450h-.337l-.017-.477Zm.066-.434.147-.004c0 .137-.015.264-.044.381a.807.807 0 0 1-.137.301.654.654 0 0 1-.25.201.9.9 0 0 1-.375.07.817.817 0 0 1-.277-.044.554.554 0 0 1-.352-.373 1.146 1.146 0 0 1-.048-.353v-1.33h.353v1.334c0 .093.01.17.03.231a.316.316 0 0 0 .208.215.65.65 0 0 0 .498-.065.487.487 0 0 0 .188-.234.873.873 0 0 0 .059-.33Zm1.178-.711V450h-.352v-2.062h.333l.019.44Zm-.084.513-.146-.006c.001-.141.022-.271.062-.391a.982.982 0 0 1 .172-.314.76.76 0 0 1 .604-.28c.102 0 .193.014.275.041.081.027.15.07.207.13.059.06.103.137.134.233.03.094.046.209.046.345V450h-.355v-1.355a.587.587 0 0 0-.048-.259.289.289 0 0 0-.139-.143.493.493 0 0 0-.225-.046.523.523 0 0 0-.425.208.794.794 0 0 0-.162.486Zm2.753-.953v.27h-1.115v-.27h1.115Zm-.738-.502h.353v2.053c0 .07.01.123.032.158a.16.16 0 0 0 .084.071.357.357 0 0 0 .11.017.49.49 0 0 0 .092-.008l.074-.015.002.288a.885.885 0 0 1-.272.038.557.557 0 0 1-.239-.051.388.388 0 0 1-.173-.172.717.717 0 0 1-.063-.328v-2.051Zm2.026 1.556v-.044c0-.149.022-.287.065-.414a.969.969 0 0 1 .187-.333.825.825 0 0 1 .295-.221.908.908 0 0 1 .389-.08c.145 0 .275.026.391.08a.815.815 0 0 1 .297.221.957.957 0 0 1 .189.333c.043.127.065.265.065.414v.044c0 .148-.022.286-.065.413a.98.98 0 0 1-.189.334.861.861 0 0 1-.684.299.869.869 0 0 1-.688-.299.992.992 0 0 1-.187-.334 1.282 1.282 0 0 1-.065-.413Zm.353-.044v.044c0 .103.012.2.036.291.024.091.06.171.109.24a.54.54 0 0 0 .184.166c.074.04.16.059.258.059a.514.514 0 0 0 .436-.225.732.732 0 0 0 .109-.24c.025-.091.038-.188.038-.291v-.044c0-.102-.013-.198-.038-.288a.735.735 0 0 0-.111-.242.517.517 0 0 0-.438-.229.523.523 0 0 0-.255.061.544.544 0 0 0-.183.168.753.753 0 0 0-.109.242c-.024.09-.036.186-.036.288Zm2.493 1.052h-.353v-2.28c0-.148.027-.273.08-.375a.54.54 0 0 1 .235-.233.77.77 0 0 1 .362-.08 1 1 0 0 1 .244.031l-.019.288a.559.559 0 0 0-.092-.014 1.638 1.638 0 0 0-.099-.004.395.395 0 0 0-.194.046.285.285 0 0 0-.122.13.478.478 0 0 0-.042.211V450Zm.438-2.062v.27h-1.117v-.27h1.117Zm1.714.324V450h-.353v-2.062h.343l.01.324Zm.644-.336-.002.328a.51.51 0 0 0-.084-.011.756.756 0 0 0-.088-.004.573.573 0 0 0-.215.038.438.438 0 0 0-.158.107.498.498 0 0 0-.103.164.8.8 0 0 0-.048.205l-.099.058c0-.125.012-.242.036-.351a.98.98 0 0 1 .117-.29.569.569 0 0 1 .198-.198.56.56 0 0 1 .446-.046Zm1.466 1.721v-1.061a.432.432 0 0 0-.05-.212.325.325 0 0 0-.145-.141.526.526 0 0 0-.24-.049.568.568 0 0 0-.234.045.42.42 0 0 0-.157.12.27.27 0 0 0-.055.16h-.353c0-.073.02-.146.058-.219a.627.627 0 0 1 .164-.196.796.796 0 0 1 .259-.141 1.01 1.01 0 0 1 .339-.053.97.97 0 0 1 .397.076.602.602 0 0 1 .27.23c.066.102.099.23.099.384v.96c0 .069.006.142.017.219a.879.879 0 0 0 .056.201v.03h-.368a.65.65 0 0 1-.042-.162 1.331 1.331 0 0 1-.015-.191Zm.061-.897.003.247h-.356c-.1 0-.19.009-.269.025a.606.606 0 0 0-.198.071.317.317 0 0 0-.164.286c0 .064.015.124.044.177a.32.32 0 0 0 .132.128.48.48 0 0 0 .219.045.59.59 0 0 0 .482-.236.366.366 0 0 0 .08-.193l.151.17a.5.5 0 0 1-.073.177.84.84 0 0 1-.391.334.758.758 0 0 1-.301.057.786.786 0 0 1-.368-.082.633.633 0 0 1-.244-.219.581.581 0 0 1-.085-.311.576.576 0 0 1 .251-.503.91.91 0 0 1 .294-.13c.114-.029.242-.043.383-.043h.41Zm2.182-.812h.32v2.018a.925.925 0 0 1-.11.465.72.72 0 0 1-.309.292.983.983 0 0 1-.454.101 1.155 1.155 0 0 1-.533-.147.706.706 0 0 1-.231-.211l.185-.21a.738.738 0 0 0 .271.217.707.707 0 0 0 .282.061.622.622 0 0 0 .289-.063.432.432 0 0 0 .189-.187.601.601 0 0 0 .069-.301v-1.582l.032-.453Zm-1.42 1.054v-.04c0-.158.019-.301.055-.429.038-.13.092-.241.162-.334a.732.732 0 0 1 .597-.289c.13 0 .243.022.339.068a.65.65 0 0 1 .248.197.949.949 0 0 1 .162.308c.039.121.067.258.082.41v.175a1.764 1.764 0 0 1-.082.408.944.944 0 0 1-.162.309.668.668 0 0 1-.248.196.814.814 0 0 1-.343.067.716.716 0 0 1-.591-.297 1.041 1.041 0 0 1-.164-.332 1.535 1.535 0 0 1-.055-.417Zm.353-.04v.04c0 .103.01.199.03.289.022.091.054.17.097.239a.506.506 0 0 0 .17.162.502.502 0 0 0 .246.057.529.529 0 0 0 .29-.074.545.545 0 0 0 .181-.197c.045-.081.081-.169.106-.265v-.459a.95.95 0 0 0-.064-.202.607.607 0 0 0-.111-.175.459.459 0 0 0-.166-.124.54.54 0 0 0-.232-.046c-.097 0-.18.02-.25.061a.484.484 0 0 0-.17.164.789.789 0 0 0-.097.24c-.02.09-.03.187-.03.29Zm2.779 1.086a.889.889 0 0 1-.881-.596 1.175 1.175 0 0 1-.067-.401v-.08c0-.168.025-.317.075-.448a.99.99 0 0 1 .202-.335.855.855 0 0 1 .625-.278c.147 0 .274.025.381.076a.703.703 0 0 1 .265.213c.069.09.12.197.153.32.033.122.049.256.049.401v.158h-1.54v-.288h1.187v-.027a.873.873 0 0 0-.057-.266.471.471 0 0 0-.152-.214.445.445 0 0 0-.286-.084.47.47 0 0 0-.221.052.471.471 0 0 0-.174.148.763.763 0 0 0-.112.242c-.027.096-.04.206-.04.33v.08c0 .098.013.19.04.277.028.085.068.16.12.225a.584.584 0 0 0 .193.152.583.583 0 0 0 .259.055c.124 0 .23-.025.316-.076a.784.784 0 0 0 .227-.204l.213.17a.995.995 0 0 1-.169.192.808.808 0 0 1-.254.149.98.98 0 0 1-.352.057Zm3.045-2.1v.27h-1.115v-.27h1.115Zm-.737-.502h.352v2.053c0 .07.011.123.033.158a.152.152 0 0 0 .084.071.357.357 0 0 0 .11.017.49.49 0 0 0 .092-.008l.074-.015.002.288a.865.865 0 0 1-.111.025.828.828 0 0 1-.162.013.556.556 0 0 1-.238-.051.388.388 0 0 1-.173-.172.717.717 0 0 1-.063-.328v-2.051Zm2.367 2.211v-1.061a.431.431 0 0 0-.049-.212.325.325 0 0 0-.145-.141.526.526 0 0 0-.24-.049.573.573 0 0 0-.235.045.417.417 0 0 0-.156.12.263.263 0 0 0-.055.16h-.353a.47.47 0 0 1 .057-.219.64.64 0 0 1 .164-.196.806.806 0 0 1 .259-.141c.102-.036.215-.053.34-.053.149 0 .282.025.396.076a.6.6 0 0 1 .271.23c.066.102.099.23.099.384v.96c0 .069.005.142.017.219a.881.881 0 0 0 .055.201v.03h-.368a.75.75 0 0 1-.042-.162 1.331 1.331 0 0 1-.015-.191Zm.061-.897.004.247h-.356c-.101 0-.19.009-.269.025a.597.597 0 0 0-.198.071.317.317 0 0 0-.164.286c0 .064.014.124.043.177.03.053.074.096.132.128.06.03.133.045.219.045a.59.59 0 0 0 .482-.236.35.35 0 0 0 .08-.193l.151.17a.516.516 0 0 1-.072.177.874.874 0 0 1-.391.334.758.758 0 0 1-.301.057.783.783 0 0 1-.368-.082.582.582 0 0 1-.33-.53.63.63 0 0 1 .065-.291.559.559 0 0 1 .187-.212.905.905 0 0 1 .293-.13c.115-.029.242-.043.383-.043h.41Zm1.199-.416v2.459h-.355v-2.855h.325l.03.396Zm1.39.618v.04c0 .15-.018.289-.054.417a1.029 1.029 0 0 1-.156.332.718.718 0 0 1-.25.219.723.723 0 0 1-.341.078.856.856 0 0 1-.347-.065.69.69 0 0 1-.255-.188.967.967 0 0 1-.168-.298 1.686 1.686 0 0 1-.084-.39v-.214c.015-.152.044-.289.086-.41.042-.12.097-.223.166-.308a.682.682 0 0 1 .253-.197.808.808 0 0 1 .343-.068c.13 0 .245.025.345.076a.695.695 0 0 1 .254.213.98.98 0 0 1 .154.334c.036.128.054.271.054.429Zm-.355.04v-.04c0-.103-.011-.2-.032-.29a.745.745 0 0 0-.101-.24.482.482 0 0 0-.422-.225.54.54 0 0 0-.232.046.486.486 0 0 0-.166.124.631.631 0 0 0-.112.175 1.008 1.008 0 0 0-.063.202v.494c.025.089.061.172.106.251a.552.552 0 0 0 .183.189c.077.047.173.07.288.07a.482.482 0 0 0 .246-.059.496.496 0 0 0 .172-.166.765.765 0 0 0 .101-.24c.021-.091.032-.188.032-.291Zm2.005.461a.294.294 0 0 0-.034-.141.288.288 0 0 0-.136-.12 1.081 1.081 0 0 0-.304-.095 2.554 2.554 0 0 1-.311-.086.94.94 0 0 1-.235-.12.456.456 0 0 1-.198-.389c0-.081.018-.158.054-.231a.61.61 0 0 1 .154-.192.75.75 0 0 1 .242-.132.972.972 0 0 1 .314-.047c.166 0 .307.029.424.087a.657.657 0 0 1 .268.235.575.575 0 0 1 .094.322h-.353a.305.305 0 0 0-.051-.166.371.371 0 0 0-.147-.135.472.472 0 0 0-.235-.054.542.542 0 0 0-.238.046.312.312 0 0 0-.131.112.283.283 0 0 0-.021.248.227.227 0 0 0 .072.082.616.616 0 0 0 .145.069c.062.021.142.043.238.065.169.038.308.084.418.137.109.053.19.119.244.196a.49.49 0 0 1 .08.282.539.539 0 0 1-.219.442.784.784 0 0 1-.252.126c-.097.03-.205.044-.326.044a.994.994 0 0 1-.461-.097.715.715 0 0 1-.286-.252.599.599 0 0 1-.097-.326h.354a.363.363 0 0 0 .084.231.426.426 0 0 0 .187.12.734.734 0 0 0 .219.034.654.654 0 0 0 .242-.038.336.336 0 0 0 .151-.105.242.242 0 0 0 .051-.152ZM301.889 456.137v-.019c0-.277.032-.528.094-.751a2.54 2.54 0 0 1 .238-.591c.097-.169.198-.309.305-.419.107-.112.205-.193.295-.242l.075.232a1.295 1.295 0 0 0-.229.236 1.899 1.899 0 0 0-.212.37 2.576 2.576 0 0 0-.154.509c-.039.193-.059.41-.059.652v.027c0 .241.02.459.059.653.039.194.091.364.154.511.065.148.136.273.212.376.078.104.154.186.229.247l-.075.214a1.3 1.3 0 0 1-.295-.242 2.121 2.121 0 0 1-.305-.419 2.522 2.522 0 0 1-.238-.589 2.842 2.842 0 0 1-.094-.755Zm2.57.299v-1.965h.366v1.965a.89.89 0 0 1-.113.463.737.737 0 0 1-.31.288 1.005 1.005 0 0 1-.452.097c-.17 0-.322-.029-.454-.087a.693.693 0 0 1-.311-.267.837.837 0 0 1-.112-.452h.368c0 .117.021.213.065.288.043.075.103.13.179.166a.636.636 0 0 0 .524-.008.447.447 0 0 0 .183-.185.64.64 0 0 0 .067-.303Zm2.197.334v-1.586h.355v2.062h-.338l-.017-.476Zm.067-.435.147-.004c0 .137-.015.265-.044.381a.836.836 0 0 1-.137.302.66.66 0 0 1-.25.2.9.9 0 0 1-.375.07.817.817 0 0 1-.277-.044.546.546 0 0 1-.213-.135.61.61 0 0 1-.139-.238 1.146 1.146 0 0 1-.048-.353v-1.33h.353v1.334c0 .093.01.17.03.231.022.059.05.107.086.143a.318.318 0 0 0 .122.072.482.482 0 0 0 .141.021c.15 0 .269-.029.356-.086a.483.483 0 0 0 .189-.234.893.893 0 0 0 .059-.33Zm1.178-.711v1.622h-.353v-2.062h.334l.019.44Zm-.084.513-.147-.006c.002-.141.023-.271.063-.391a.982.982 0 0 1 .172-.314.768.768 0 0 1 .604-.28c.102 0 .193.014.274.042a.482.482 0 0 1 .208.129c.059.06.103.137.134.233.03.094.045.209.045.345v1.351h-.354v-1.355a.587.587 0 0 0-.048-.259.293.293 0 0 0-.139-.143.493.493 0 0 0-.225-.046.517.517 0 0 0-.425.208.758.758 0 0 0-.162.486Zm4.569.358c0 .169-.04.313-.118.431a.74.74 0 0 1-.317.267 1.055 1.055 0 0 1-.448.091c-.166 0-.316-.03-.449-.091a.74.74 0 0 1-.317-.267.773.773 0 0 1-.116-.431.72.72 0 0 1 .063-.303.726.726 0 0 1 .181-.242.826.826 0 0 1 .278-.158 1.07 1.07 0 0 1 .357-.057c.17 0 .322.033.455.099a.788.788 0 0 1 .315.268.69.69 0 0 1 .116.393Zm-.355-.008a.55.55 0 0 0-.066-.272.48.48 0 0 0-.187-.187.569.569 0 0 0-.278-.067.57.57 0 0 0-.281.067.472.472 0 0 0-.181.187.561.561 0 0 0-.065.272c0 .107.021.199.063.275a.442.442 0 0 0 .183.173.63.63 0 0 0 .284.059c.11 0 .204-.019.282-.059a.423.423 0 0 0 .182-.173.551.551 0 0 0 .064-.275Zm.29-1.294a.648.648 0 0 1-.107.364.74.74 0 0 1-.291.256.923.923 0 0 1-.42.093.945.945 0 0 1-.425-.093.72.72 0 0 1-.289-.256.654.654 0 0 1-.105-.364c0-.161.035-.298.105-.411a.698.698 0 0 1 .291-.26.964.964 0 0 1 .421-.089c.159 0 .3.03.424.089.123.06.219.147.289.26.071.113.107.25.107.411Zm-.353.006a.492.492 0 0 0-.059-.246.434.434 0 0 0-.164-.168.461.461 0 0 0-.244-.062.485.485 0 0 0-.244.059.412.412 0 0 0-.162.164.528.528 0 0 0-.057.253c0 .095.019.179.057.25.04.071.094.126.164.166.07.039.152.059.244.059a.48.48 0 0 0 .242-.059.422.422 0 0 0 .164-.166.502.502 0 0 0 .059-.25Zm2.604.722v.29h-.93v-.29h.93Zm2.531.515v-1.965h.366v1.965a.89.89 0 0 1-.112.463.74.74 0 0 1-.311.288 1.002 1.002 0 0 1-.452.097c-.17 0-.321-.029-.453-.087a.693.693 0 0 1-.311-.267.837.837 0 0 1-.112-.452h.367c0 .117.022.213.065.288.043.075.103.13.179.166a.64.64 0 0 0 .525-.008.46.46 0 0 0 .183-.185.64.64 0 0 0 .066-.303Zm2.198.334v-1.586h.354v2.062h-.337l-.017-.476Zm.067-.435.146-.004c0 .137-.014.265-.043.381a.82.82 0 0 1-.138.302.65.65 0 0 1-.249.2.905.905 0 0 1-.376.07.815.815 0 0 1-.276-.044.55.55 0 0 1-.353-.373 1.146 1.146 0 0 1-.048-.353v-1.33h.353v1.334c0 .093.01.17.031.231.021.059.05.107.085.143a.326.326 0 0 0 .122.072.65.65 0 0 0 .498-.065.487.487 0 0 0 .188-.234.873.873 0 0 0 .06-.33Zm1.177-.711v1.622h-.352v-2.062h.333l.019.44Zm-.083.513-.147-.006c.001-.141.022-.271.063-.391a.98.98 0 0 1 .171-.314.77.77 0 0 1 .605-.28c.101 0 .193.014.274.042a.488.488 0 0 1 .208.129c.058.06.103.137.133.233.031.094.046.209.046.345v1.351h-.355v-1.355a.588.588 0 0 0-.047-.259.293.293 0 0 0-.139-.143.493.493 0 0 0-.225-.046.517.517 0 0 0-.425.208.758.758 0 0 0-.162.486Zm3.977-1.681v2.79h-.352v-2.35l-.711.259v-.318l1.008-.381h.055Zm2.913 1.856v.29h-2.005v-.208l1.242-1.923h.288l-.308.556-.822 1.285h1.605Zm-.387-1.841v2.775h-.353v-2.775h.353Zm1.557 1.647v.019c0 .278-.031.53-.093.755a2.567 2.567 0 0 1-.238.589 2.162 2.162 0 0 1-.305.419 1.302 1.302 0 0 1-.296.242l-.074-.214c.075-.057.15-.137.227-.24.076-.101.146-.227.211-.377.065-.149.117-.32.156-.515.04-.195.06-.414.06-.655v-.027c0-.242-.021-.459-.063-.654a2.547 2.547 0 0 0-.164-.516 1.9 1.9 0 0 0-.214-.376 1.332 1.332 0 0 0-.213-.238l.074-.215c.09.049.189.13.296.242.106.11.208.25.305.419.096.169.176.366.238.591.062.223.093.474.093.751Z",
              fill:"#454B5D"
            }),(0,n.jsx)("rect",{
              x:232.661,
              y:470.675,
              width:53.027,
              height:8.644,
              rx:1.534,
              fill:"#fff"
            }),(0,n.jsx)("rect",{
              x:232.661,
              y:470.675,
              width:53.027,
              height:8.644,
              rx:1.534,
              stroke:"#5D97FF",
              strokeWidth:.279
            }),(0,n.jsx)("path",{
              d:"m244.908 475.989.73-2.268h.528l-.995 2.775h-.356l.093-.507Zm-.675-2.268.725 2.268.099.507h-.359l-.991-2.775h.526Zm2.69.713v2.062h-.462v-2.062h.462Zm-.492-.542c0-.069.023-.127.069-.173a.261.261 0 0 1 .194-.071.26.26 0 0 1 .192.071.233.233 0 0 1 .071.173.23.23 0 0 1-.071.172.263.263 0 0 1-.192.069.264.264 0 0 1-.194-.069.233.233 0 0 1-.069-.172Zm1.904 2.642c-.152 0-.29-.025-.414-.074a.9.9 0 0 1-.508-.53 1.108 1.108 0 0 1-.069-.395v-.076c0-.161.023-.307.07-.438a.998.998 0 0 1 .197-.336.852.852 0 0 1 .297-.215.915.915 0 0 1 .372-.074c.147 0 .276.024.387.074.11.05.202.119.274.21a.873.873 0 0 1 .164.318c.037.123.055.259.055.408v.196h-1.593v-.33h1.14v-.036a.642.642 0 0 0-.05-.232.394.394 0 0 0-.135-.176.41.41 0 0 0-.244-.066.406.406 0 0 0-.351.188.73.73 0 0 0-.091.221 1.21 1.21 0 0 0-.031.288v.076c0 .091.012.175.036.252a.618.618 0 0 0 .111.2.544.544 0 0 0 .175.136.567.567 0 0 0 .235.047.629.629 0 0 0 .52-.255l.242.234a.934.934 0 0 1-.173.187.89.89 0 0 1-.261.143c-.102.037-.22.055-.355.055Zm1.744-.495.477-1.605h.293l-.08.48-.48 1.582h-.263l.053-.457Zm-.28-1.605.372 1.612.03.45h-.294l-.558-2.062h.45Zm1.496 1.593.36-1.593h.448l-.556 2.062h-.294l.042-.469Zm-.396-1.593.47 1.586.059.476h-.263l-.486-1.584-.08-.478h.3Zm3.652 1.648v-.983a.434.434 0 0 0-.04-.191.292.292 0 0 0-.122-.124.422.422 0 0 0-.202-.043.452.452 0 0 0-.195.038.307.307 0 0 0-.128.103.25.25 0 0 0-.045.146h-.458c0-.081.02-.16.059-.236a.647.647 0 0 1 .172-.204.838.838 0 0 1 .269-.141c.104-.034.221-.051.35-.051.155 0 .293.026.412.078a.628.628 0 0 1 .284.236c.07.104.105.235.105.393v.917c0 .094.006.178.019.253a.845.845 0 0 0 .059.193v.03h-.471a.795.795 0 0 1-.051-.189 1.457 1.457 0 0 1-.017-.225Zm.066-.84.004.284h-.33a.895.895 0 0 0-.225.025.48.48 0 0 0-.162.068.31.31 0 0 0-.097.111.33.33 0 0 0 .006.297.26.26 0 0 0 .11.105.508.508 0 0 0 .593-.162.303.303 0 0 0 .065-.162l.149.204a.774.774 0 0 1-.435.471.724.724 0 0 1-.282.051.776.776 0 0 1-.36-.08.638.638 0 0 1-.248-.219.568.568 0 0 1-.09-.315c0-.109.021-.205.061-.289a.57.57 0 0 1 .183-.214.893.893 0 0 1 .298-.129c.117-.031.25-.046.4-.046h.36Zm1.367-1.674v2.928h-.461v-2.928h.461Zm1.412 2.966c-.152 0-.29-.025-.413-.074a.903.903 0 0 1-.509-.53 1.108 1.108 0 0 1-.069-.395v-.076c0-.161.024-.307.071-.438a.996.996 0 0 1 .196-.336.852.852 0 0 1 .297-.215.922.922 0 0 1 .372-.074c.147 0 .276.024.387.074.11.05.202.119.274.21a.858.858 0 0 1 .164.318c.037.123.056.259.056.408v.196h-1.594v-.33h1.14v-.036a.642.642 0 0 0-.05-.232.394.394 0 0 0-.135-.176.408.408 0 0 0-.244-.066.416.416 0 0 0-.204.049.414.414 0 0 0-.147.139.73.73 0 0 0-.091.221c-.02.086-.031.181-.031.288v.076c0 .091.012.175.037.252a.544.544 0 0 0 .285.336.567.567 0 0 0 .235.047.629.629 0 0 0 .52-.255l.242.234a.878.878 0 0 1-.434.33c-.102.037-.22.055-.355.055Zm1.645-1.708v1.67h-.459v-2.062h.438l.021.392Zm.631-.406-.004.427a1.027 1.027 0 0 0-.187-.015.595.595 0 0 0-.207.034.4.4 0 0 0-.242.244.663.663 0 0 0-.039.197l-.104.007c0-.129.012-.249.038-.36a.961.961 0 0 1 .114-.291.517.517 0 0 1 .467-.267.581.581 0 0 1 .164.024Zm1.329.014v.335h-1.163v-.335h1.163Zm-.828-.505h.46v1.997c0 .064.009.113.026.147a.145.145 0 0 0 .078.067.375.375 0 0 0 .117.017.662.662 0 0 0 .091-.006l.071-.011.002.35a1.074 1.074 0 0 1-.305.044.666.666 0 0 1-.28-.055.412.412 0 0 1-.191-.185.713.713 0 0 1-.069-.339v-2.026Zm3.412 2.14v-2.501h.461v2.928h-.417l-.044-.427Zm-1.342-.581v-.04c0-.157.019-.299.056-.427a.987.987 0 0 1 .16-.334.7.7 0 0 1 .255-.215.738.738 0 0 1 .339-.076.71.71 0 0 1 .328.072.68.68 0 0 1 .24.208 1.1 1.1 0 0 1 .159.32c.039.123.067.261.083.412v.127a2.055 2.055 0 0 1-.083.405c-.04.122-.093.227-.159.316a.684.684 0 0 1-.242.206.715.715 0 0 1-.329.072.725.725 0 0 1-.338-.078.745.745 0 0 1-.253-.219 1.015 1.015 0 0 1-.16-.332 1.496 1.496 0 0 1-.056-.417Zm.46-.04v.04c0 .094.008.182.024.263a.723.723 0 0 0 .082.215.431.431 0 0 0 .143.145c.06.034.131.052.214.052.104 0 .19-.023.257-.069a.469.469 0 0 0 .158-.185.842.842 0 0 0 .08-.263v-.345a.825.825 0 0 0-.047-.21.555.555 0 0 0-.094-.169.392.392 0 0 0-.146-.115.464.464 0 0 0-.204-.042.402.402 0 0 0-.359.201.715.715 0 0 0-.082.217 1.309 1.309 0 0 0-.026.265Zm2.733 1.086a1.11 1.11 0 0 1-.414-.074.9.9 0 0 1-.509-.53 1.13 1.13 0 0 1-.068-.395v-.076c0-.161.023-.307.07-.438a.998.998 0 0 1 .197-.336.843.843 0 0 1 .297-.215.915.915 0 0 1 .372-.074c.147 0 .276.024.386.074a.72.72 0 0 1 .275.21.873.873 0 0 1 .164.318c.037.123.055.259.055.408v.196h-1.593v-.33h1.14v-.036a.664.664 0 0 0-.05-.232.394.394 0 0 0-.135-.176.41.41 0 0 0-.244-.066.398.398 0 0 0-.351.188.758.758 0 0 0-.092.221c-.02.086-.03.181-.03.288v.076c0 .091.012.175.036.252a.6.6 0 0 0 .111.2.533.533 0 0 0 .175.136.567.567 0 0 0 .235.047.629.629 0 0 0 .52-.255l.242.234a.878.878 0 0 1-.435.33 1.028 1.028 0 0 1-.354.055Zm2.129-2.1v.335h-1.163v-.335h1.163Zm-.827-.505h.459v1.997a.32.32 0 0 0 .027.147.145.145 0 0 0 .078.067.368.368 0 0 0 .116.017.688.688 0 0 0 .092-.006l.07-.011.002.35a1.098 1.098 0 0 1-.305.044.67.67 0 0 1-.28-.055.416.416 0 0 1-.191-.185.726.726 0 0 1-.068-.339v-2.026Zm2.344 2.153v-.983a.42.42 0 0 0-.04-.191.286.286 0 0 0-.122-.124.42.42 0 0 0-.202-.043.445.445 0 0 0-.194.038.3.3 0 0 0-.128.103.244.244 0 0 0-.046.146h-.457a.5.5 0 0 1 .059-.236.63.63 0 0 1 .171-.204.848.848 0 0 1 .269-.141c.104-.034.221-.051.351-.051.155 0 .292.026.411.078a.623.623 0 0 1 .284.236c.07.104.105.235.105.393v.917c0 .094.007.178.019.253a.845.845 0 0 0 .059.193v.03h-.47a.791.791 0 0 1-.052-.189 1.593 1.593 0 0 1-.017-.225Zm.067-.84.004.284h-.33a.895.895 0 0 0-.225.025.463.463 0 0 0-.162.068.3.3 0 0 0-.13.258.31.31 0 0 0 .038.15c.026.045.063.08.111.105a.508.508 0 0 0 .593-.162.32.32 0 0 0 .065-.162l.148.204a.69.69 0 0 1-.078.168.81.81 0 0 1-.145.171.72.72 0 0 1-.493.183.783.783 0 0 1-.361-.08.635.635 0 0 1-.247-.219.568.568 0 0 1-.09-.315.65.65 0 0 1 .061-.289.57.57 0 0 1 .183-.214c.081-.057.18-.1.297-.129.117-.031.251-.046.401-.046h.36Zm1.366-.808v2.062h-.461v-2.062h.461Zm-.491-.542c0-.069.023-.127.068-.173a.264.264 0 0 1 .195-.071.26.26 0 0 1 .192.071.233.233 0 0 1 .071.173.23.23 0 0 1-.071.172.263.263 0 0 1-.192.069.267.267 0 0 1-.195-.069.236.236 0 0 1-.068-.172Zm1.486-.324v2.928h-.461v-2.928h.461Zm1.66 2.37a.229.229 0 0 0-.034-.124.294.294 0 0 0-.131-.103 1.24 1.24 0 0 0-.282-.084 2.419 2.419 0 0 1-.302-.086.925.925 0 0 1-.232-.124.522.522 0 0 1-.151-.171.53.53 0 0 1 .002-.467.61.61 0 0 1 .158-.198.76.76 0 0 1 .25-.136c.099-.033.21-.049.332-.049.173 0 .321.029.444.087.124.058.22.136.286.235a.578.578 0 0 1 .099.331h-.459a.293.293 0 0 0-.042-.152.298.298 0 0 0-.122-.116.416.416 0 0 0-.206-.046.458.458 0 0 0-.197.038.271.271 0 0 0-.114.095.247.247 0 0 0-.017.223.219.219 0 0 0 .069.075.558.558 0 0 0 .129.061c.056.019.126.037.21.055.157.033.293.076.406.128.114.05.202.117.263.198a.49.49 0 0 1 .091.305.53.53 0 0 1-.059.251.57.57 0 0 1-.168.197.842.842 0 0 1-.264.127 1.179 1.179 0 0 1-.344.046c-.186 0-.345-.033-.474-.099a.758.758 0 0 1-.296-.257.612.612 0 0 1-.099-.328h.444a.344.344 0 0 0 .071.204.388.388 0 0 0 .16.109.649.649 0 0 0 .408 0 .307.307 0 0 0 .128-.092.218.218 0 0 0 .043-.133Z",
              fill:"#5D97FF"
            })]
          })]
        }),(0,n.jsx)("path",{
          d:"M388.784 191.983a127.962 127.962 0 0 1 21.378 14.178l.331.273c-.063-.039-.219-.18.054.034l.592.491c.414.348.829.701 1.237 1.053a97.492 97.492 0 0 1 2.435 2.147 133.238 133.238 0 0 1 13.129 13.69 136.151 136.151 0 0 1 3.843 4.861 109.823 109.823 0 0 1 3.473 4.855 128.414 128.414 0 0 1 6.352 10.438 114.978 114.978 0 0 1 5.185 10.887c.8 1.943 1.33 3.333 1.982 5.209a101.079 101.079 0 0 1 1.742 5.498 92.85 92.85 0 0 1 2.484 11.197c.143.918.271 1.839.385 2.76l.154 1.341c.008.075.034.413.011.096l.028.297.068.745c.162 1.849.26 3.702.296 5.558.019.907.016 1.816.001 2.725a1.676 1.676 0 0 0 2.779 1.213c.319-.281.518-.673.556-1.096a87.024 87.024 0 0 0-2.748-22.734 108.542 108.542 0 0 0-8.539-22.486 127.212 127.212 0 0 0-13.596-21.11 132.64 132.64 0 0 0-17.644-18.397 130.621 130.621 0 0 0-21.396-15.021 136.099 136.099 0 0 0-2.805-1.518c-.774-.408-1.837-.297-2.301.528-.416.738-.293 1.862.539 2.299l-.005-.011Z",
          fill:"#5D97FF"
        }),(0,n.jsx)("path",{
          fillRule:"evenodd",
          clipRule:"evenodd",
          d:"m453.86 288.045.265 3.801-7.517-6.537a1.512 1.512 0 1 0-1.985 2.282l10.272 8.934c.63.548 1.585.482 2.134-.149l8.933-10.271a1.512 1.512 0 1 0-2.282-1.985l-6.538 7.516-.267-3.845a6.666 6.666 0 0 1-3.015.254Z",
          fill:"#5D97FF"
        }),(0,n.jsxs)("g",{
          filter:"url(#alerts-locked-illustration_svg__k)",
          children:[(0,n.jsx)("rect",{
            x:305.704,
            y:299.375,
            width:187.765,
            height:45.706,
            rx:3.501,
            fill:"#fff",
            shapeRendering:"crispEdges"
          }),(0,n.jsx)("path",{
            d:"M305.704 302.876a3.501 3.501 0 0 1 3.501-3.501h40.26v45.706h-40.26a3.502 3.502 0 0 1-3.501-3.501v-38.704Z",
            fill:"#EFF5FF"
          }),(0,n.jsx)("rect",{
            x:312.706,
            y:307.348,
            width:29.758,
            height:29.758,
            rx:14.879,
            fill:"#5D97FF"
          }),(0,n.jsxs)("g",{
            clipPath:"url(#alerts-locked-illustration_svg__l)",
            fill:"#fff",
            children:[(0,n.jsx)("path",{
              d:"M326.987 323.303a.814.814 0 0 0 1.138 0l6.228-6.228a.325.325 0 0 0 .078-.328.328.328 0 0 0-.258-.219l-.186-.012h-13.042a.322.322 0 0 0-.257.218.302.302 0 0 0-.01.176.303.303 0 0 0 .087.152l6.222 6.241Z"
            }),(0,n.jsx)("path",{
              d:"M335.202 317.691a.12.12 0 0 0-.129 0l-3.985 3.986a.152.152 0 0 0-.038.052.152.152 0 0 0 .038.179l3.214 3.214a.48.48 0 0 1-.681.681l-3.214-3.214a.16.16 0 0 0-.179-.036.16.16 0 0 0-.053.036l-1.369 1.37a1.774 1.774 0 0 1-2.5 0l-1.363-1.344a.157.157 0 0 0-.116-.052.152.152 0 0 0-.063.014.152.152 0 0 0-.052.038l-3.214 3.214a.481.481 0 0 1-.682-.681l3.214-3.214a.162.162 0 0 0 .039-.052.156.156 0 0 0 .013-.064.151.151 0 0 0-.052-.116l-3.985-3.985a.112.112 0 0 0-.064-.019.115.115 0 0 0-.065.019.112.112 0 0 0-.045.033.111.111 0 0 0-.025.051v7.713a1.285 1.285 0 0 0 1.285 1.286h12.856a1.286 1.286 0 0 0 1.286-1.286v-7.713a.118.118 0 0 0-.071-.11Z"
            })]
          }),(0,n.jsx)("path",{
            d:"M357.134 310.311h2.785c.571 0 1.061.085 1.471.256.414.171.732.424.954.759.223.335.334.747.334 1.236 0 .4-.069.743-.206 1.031a1.939 1.939 0 0 1-.569.713 2.949 2.949 0 0 1-.856.451l-.487.256h-2.421l-.01-1.2h1.8c.27 0 .494-.048.672-.143a.947.947 0 0 0 .4-.4c.092-.171.138-.37.138-.595 0-.24-.044-.446-.133-.621a.901.901 0 0 0-.405-.4 1.503 1.503 0 0 0-.682-.138h-1.247v6.261h-1.538v-7.466Zm4.174 7.466-1.702-3.328 1.625-.01 1.724 3.267v.071h-1.647Zm5.016.103c-.431 0-.817-.068-1.159-.205a2.542 2.542 0 0 1-.872-.58 2.577 2.577 0 0 1-.544-.856 2.893 2.893 0 0 1-.189-1.046v-.205c0-.421.06-.806.179-1.154.12-.349.291-.652.513-.908a2.26 2.26 0 0 1 .821-.59c.321-.14.683-.21 1.087-.21.393 0 .742.065 1.046.195.304.13.559.314.764.554.209.239.366.526.472.861.106.332.159.701.159 1.108v.615h-4.411v-.984h2.959v-.113c0-.205-.037-.388-.112-.549a.877.877 0 0 0-.329-.39 1.021 1.021 0 0 0-.564-.143.948.948 0 0 0-.502.128.998.998 0 0 0-.344.359c-.085.154-.15.335-.195.544-.041.205-.061.43-.061.677v.205c0 .222.031.427.092.615.065.188.156.351.272.487.12.137.263.243.431.318.171.075.364.113.579.113.267 0 .515-.051.744-.154.232-.106.432-.265.6-.477l.718.78a2.233 2.233 0 0 1-.477.482c-.199.154-.438.28-.718.379-.281.096-.6.144-.959.144Zm5.41-1.154c.181 0 .342-.034.482-.103a.8.8 0 0 0 .328-.297.876.876 0 0 0 .129-.456h1.389a1.85 1.85 0 0 1-.312 1.041 2.155 2.155 0 0 1-.826.712 2.576 2.576 0 0 1-1.159.257c-.431 0-.807-.072-1.128-.215a2.208 2.208 0 0 1-.795-.595 2.61 2.61 0 0 1-.477-.893 3.683 3.683 0 0 1-.159-1.097v-.149c0-.393.053-.759.159-1.097.106-.342.265-.64.477-.893.212-.256.477-.456.795-.6.318-.143.69-.215 1.118-.215.454 0 .853.087 1.195.262.345.174.615.423.81.748.198.322.299.703.302 1.144h-1.389a1.171 1.171 0 0 0-.118-.503.856.856 0 0 0-.318-.359.89.89 0 0 0-.508-.138.929.929 0 0 0-.528.138.88.88 0 0 0-.318.37 1.837 1.837 0 0 0-.159.528c-.027.195-.041.4-.041.615v.149c0 .215.014.422.041.62.027.199.079.375.154.529a.928.928 0 0 0 .323.364c.137.089.314.133.533.133Zm5.739 1.154c-.431 0-.817-.068-1.159-.205a2.542 2.542 0 0 1-.872-.58 2.577 2.577 0 0 1-.544-.856 2.893 2.893 0 0 1-.189-1.046v-.205c0-.421.059-.806.179-1.154.12-.349.291-.652.513-.908.226-.256.499-.453.82-.59a2.7 2.7 0 0 1 1.088-.21c.393 0 .741.065 1.046.195.304.13.559.314.764.554.208.239.366.526.472.861.106.332.159.701.159 1.108v.615h-4.411v-.984h2.959v-.113c0-.205-.037-.388-.112-.549a.877.877 0 0 0-.329-.39 1.021 1.021 0 0 0-.564-.143.948.948 0 0 0-.502.128.99.99 0 0 0-.344.359c-.085.154-.15.335-.195.544-.041.205-.061.43-.061.677v.205c0 .222.03.427.092.615.065.188.155.351.272.487.119.137.263.243.431.318.17.075.364.113.579.113.267 0 .515-.051.744-.154.232-.106.432-.265.6-.477l.718.78a2.233 2.233 0 0 1-.477.482c-.199.154-.438.28-.718.379-.281.096-.6.144-.959.144Zm4.677-5.651v5.548h-1.482v-5.548h1.482Zm-1.575-1.447c0-.215.076-.393.226-.533.15-.14.352-.21.605-.21.25 0 .45.07.6.21a.69.69 0 0 1 .231.533.69.69 0 0 1-.231.534c-.15.14-.35.21-.6.21-.253 0-.455-.07-.605-.21a.7.7 0 0 1-.226-.534Zm4.682 5.918 1.231-4.471h1.544l-1.872 5.548h-.933l.03-1.077Zm-.846-4.471 1.236 4.477.026 1.071h-.939l-1.871-5.548h1.548Zm6.764 5.651c-.43 0-.817-.068-1.159-.205a2.548 2.548 0 0 1-.871-.58 2.577 2.577 0 0 1-.544-.856 2.893 2.893 0 0 1-.19-1.046v-.205c0-.421.06-.806.18-1.154.119-.349.29-.652.513-.908.225-.256.499-.453.82-.59.322-.14.684-.21 1.087-.21.394 0 .742.065 1.047.195.304.13.558.314.764.554.208.239.365.526.471.861.106.332.159.701.159 1.108v.615h-4.41v-.984h2.959v-.113c0-.205-.038-.388-.113-.549a.875.875 0 0 0-.328-.39 1.021 1.021 0 0 0-.564-.143.954.954 0 0 0-.503.128.995.995 0 0 0-.343.359 1.923 1.923 0 0 0-.195.544c-.041.205-.062.43-.062.677v.205c0 .222.031.427.093.615.065.188.155.351.271.487.12.137.264.243.431.318.171.075.364.113.58.113.266 0 .514-.051.743-.154.233-.106.433-.265.6-.477l.718.78a2.188 2.188 0 0 1-.477.482c-.198.154-.437.28-.718.379-.28.096-.6.144-.959.144Zm7.211-4.503v4.4h-1.482v-5.548h1.389l.093 1.148Zm-.205 1.431h-.411c0-.386.047-.742.139-1.067.096-.328.234-.612.415-.851.185-.243.412-.431.682-.564a2.1 2.1 0 0 1 .939-.2c.246 0 .472.038.677.113.205.072.381.186.528.343.15.154.267.356.349.606.082.246.123.541.123.887v3.702h-1.477v-3.538c0-.253-.034-.448-.103-.585a.582.582 0 0 0-.292-.287 1.09 1.09 0 0 0-.446-.082c-.192 0-.359.039-.503.118-.14.079-.256.188-.349.328-.092.137-.16.298-.205.482a2.564 2.564 0 0 0-.066.595Zm3.302-.169-.528.067c0-.363.045-.7.133-1.011.093-.311.228-.584.406-.82a1.87 1.87 0 0 1 .671-.549c.267-.133.575-.2.923-.2.267 0 .51.039.729.118.218.075.405.197.559.364.157.164.277.38.359.646.085.267.128.593.128.98v3.543h-1.482v-3.543c0-.257-.034-.452-.103-.585a.537.537 0 0 0-.287-.282 1.075 1.075 0 0 0-.441-.082.97.97 0 0 0-.8.395 1.306 1.306 0 0 0-.2.431c-.044.16-.067.336-.067.528Zm7.518 1.887v-2.472c0-.178-.029-.33-.087-.456a.65.65 0 0 0-.272-.303.893.893 0 0 0-.466-.107.97.97 0 0 0-.426.087.61.61 0 0 0-.277.241.664.664 0 0 0-.097.364h-1.477c0-.236.054-.46.164-.672.109-.212.268-.398.477-.559.208-.164.456-.292.743-.385.291-.092.616-.138.975-.138.431 0 .813.072 1.148.215.336.144.599.359.79.647.195.287.293.646.293 1.076v2.375c0 .304.018.554.056.749.038.191.092.359.164.502v.087h-1.492a2.094 2.094 0 0 1-.164-.564 4.54 4.54 0 0 1-.052-.687Zm.195-2.128.01.836h-.825c-.195 0-.364.022-.508.066a.965.965 0 0 0-.354.19.745.745 0 0 0-.205.277.958.958 0 0 0-.061.349.616.616 0 0 0 .338.579.847.847 0 0 0 .385.082c.222 0 .415-.044.579-.133.164-.089.291-.198.38-.328a.68.68 0 0 0 .143-.369l.39.625a2.53 2.53 0 0 1-.226.436c-.092.151-.21.292-.353.426-.144.13-.317.237-.518.323a1.903 1.903 0 0 1-.718.123c-.353 0-.672-.07-.959-.21a1.752 1.752 0 0 1-.677-.59 1.549 1.549 0 0 1-.246-.862c0-.29.054-.548.164-.774.109-.226.27-.415.482-.569.215-.158.483-.275.805-.354a4.545 4.545 0 0 1 1.118-.123h.856Zm3.99-2.169v5.548h-1.482v-5.548h1.482Zm-1.574-1.447c0-.215.075-.393.225-.533.151-.14.352-.21.605-.21.25 0 .45.07.6.21a.69.69 0 0 1 .231.533.69.69 0 0 1-.231.534c-.15.14-.35.21-.6.21-.253 0-.454-.07-.605-.21a.699.699 0 0 1-.225-.534Zm4.354-.882v7.877h-1.483V309.9h1.483ZM362.852 330.962v2.733a2.401 2.401 0 0 1-.441.462c-.202.167-.48.314-.836.441-.352.123-.807.184-1.364.184-.455 0-.874-.078-1.257-.236a2.825 2.825 0 0 1-.989-.697 3.253 3.253 0 0 1-.646-1.118 4.61 4.61 0 0 1-.226-1.498v-.579c0-.557.065-1.055.195-1.492.133-.438.328-.809.584-1.113a2.46 2.46 0 0 1 .944-.698c.373-.16.8-.241 1.282-.241.571 0 1.048.1 1.431.298.386.195.687.465.902.81.219.345.359.739.421 1.18h-.99a2.068 2.068 0 0 0-.266-.739 1.43 1.43 0 0 0-.559-.533c-.243-.137-.556-.205-.939-.205a1.99 1.99 0 0 0-.897.189 1.656 1.656 0 0 0-.626.544 2.546 2.546 0 0 0-.369.856 4.957 4.957 0 0 0-.118 1.134v.589c0 .431.049.816.149 1.154.102.339.247.628.435.867.188.236.412.415.672.538.263.124.554.185.872.185.352 0 .638-.029.856-.087.219-.062.39-.133.513-.215.123-.086.217-.166.282-.241v-1.672h-1.728v-.8h2.713Zm3.8 3.82c-.386 0-.737-.065-1.051-.195a2.364 2.364 0 0 1-.805-.559 2.462 2.462 0 0 1-.513-.851 3.113 3.113 0 0 1-.18-1.077v-.215c0-.452.067-.853.2-1.205.134-.356.315-.657.544-.903.229-.246.489-.432.779-.559.291-.126.592-.19.903-.19.397 0 .738.069 1.026.205.29.137.528.329.712.575.185.243.322.53.411.861.089.329.133.688.133 1.077v.426h-4.144v-.774h3.195v-.072a2.341 2.341 0 0 0-.154-.718 1.29 1.29 0 0 0-.41-.575c-.188-.15-.444-.225-.769-.225a1.296 1.296 0 0 0-1.062.538c-.13.178-.23.395-.302.652a3.289 3.289 0 0 0-.108.887v.215c0 .263.036.511.108.744.075.229.183.431.323.605.144.174.316.311.518.41.205.099.437.149.697.149.335 0 .619-.068.852-.205.232-.137.436-.32.61-.549l.574.456a2.625 2.625 0 0 1-.456.518 2.156 2.156 0 0 1-.682.4 2.633 2.633 0 0 1-.949.154Zm5.59-5.651v.728h-3v-.728h3Zm-1.985-1.349h.949v5.523c0 .188.029.33.087.426a.415.415 0 0 0 .226.19c.092.03.191.046.297.046.079 0 .161-.007.246-.021.089-.017.156-.03.2-.041l.005.775a2.13 2.13 0 0 1-.297.066c-.12.024-.265.036-.436.036-.232 0-.446-.046-.641-.138a1.036 1.036 0 0 1-.467-.462c-.112-.219-.169-.513-.169-.882v-5.518Zm8.005 7a2.73 2.73 0 0 1-1.051-.195 2.373 2.373 0 0 1-.805-.559 2.493 2.493 0 0 1-.513-.851 3.136 3.136 0 0 1-.179-1.077v-.215c0-.452.066-.853.2-1.205.133-.356.314-.657.543-.903.229-.246.489-.432.78-.559.29-.126.591-.19.902-.19.397 0 .739.069 1.026.205.291.137.528.329.713.575.184.243.321.53.41.861.089.329.133.688.133 1.077v.426h-4.143v-.774h3.195v-.072a2.371 2.371 0 0 0-.154-.718 1.297 1.297 0 0 0-.41-.575c-.188-.15-.445-.225-.77-.225a1.275 1.275 0 0 0-1.061.538c-.13.178-.231.395-.303.652a3.291 3.291 0 0 0-.107.887v.215c0 .263.035.511.107.744.075.229.183.431.323.605.144.174.317.311.518.41.205.099.438.149.698.149.335 0 .619-.068.851-.205.233-.137.436-.32.61-.549l.575.456c-.12.182-.272.354-.457.518a2.144 2.144 0 0 1-.682.4 2.63 2.63 0 0 1-.949.154Zm4.211-4.549v4.447h-.954v-5.549h.902l.052 1.102Zm-.195 1.462-.441-.015c.003-.38.053-.73.149-1.052.095-.324.237-.606.425-.846.188-.239.422-.424.703-.554.28-.133.605-.2.974-.2.26 0 .499.038.718.113.219.072.409.186.569.344.161.157.286.359.375.605.089.246.133.543.133.892v3.698h-.949v-3.652c0-.29-.049-.523-.148-.697a.856.856 0 0 0-.411-.38 1.477 1.477 0 0 0-.625-.123c-.281 0-.515.05-.703.149a1.189 1.189 0 0 0-.451.41 1.85 1.85 0 0 0-.246.6 3.352 3.352 0 0 0-.072.708Zm3.595-.523-.636.195c.003-.304.053-.597.149-.877.099-.28.241-.53.425-.749.188-.219.419-.391.693-.518.273-.13.586-.195.938-.195.298 0 .561.04.79.118.232.079.427.2.584.364.161.161.282.368.365.621.082.253.123.554.123.902v3.647h-.954v-3.657c0-.311-.05-.552-.149-.723a.774.774 0 0 0-.41-.364 1.639 1.639 0 0 0-.626-.108c-.208 0-.393.036-.554.108-.16.072-.295.171-.405.297a1.31 1.31 0 0 0-.251.426 1.576 1.576 0 0 0-.082.513Zm8.138 2.559v-2.856a1.16 1.16 0 0 0-.133-.57.868.868 0 0 0-.39-.379 1.408 1.408 0 0 0-.646-.134c-.239 0-.449.041-.631.124a1.091 1.091 0 0 0-.42.323.708.708 0 0 0-.149.43h-.949c0-.198.052-.395.154-.589.103-.195.25-.371.441-.529.195-.16.428-.287.698-.379.273-.096.577-.144.913-.144.403 0 .759.069 1.066.205.311.137.554.344.728.621.178.273.267.617.267 1.031v2.584c0 .185.015.382.046.59.034.209.084.388.149.539v.082h-.99a1.806 1.806 0 0 1-.113-.436 3.574 3.574 0 0 1-.041-.513Zm.164-2.415.011.666h-.959c-.27 0-.511.022-.723.067-.212.041-.39.104-.534.19a.857.857 0 0 0-.441.769c0 .174.04.333.118.477a.862.862 0 0 0 .354.343c.161.082.357.123.59.123.29 0 .547-.061.769-.184.222-.123.398-.274.528-.451a.976.976 0 0 0 .216-.518l.405.456a1.374 1.374 0 0 1-.195.477 2.294 2.294 0 0 1-1.051.897c-.24.103-.51.154-.811.154-.376 0-.706-.073-.989-.22a1.69 1.69 0 0 1-.657-.59 1.56 1.56 0 0 1-.231-.836c0-.297.059-.559.175-.785.116-.229.284-.418.502-.569.219-.154.482-.27.79-.349a4.199 4.199 0 0 1 1.031-.117h1.102Zm3.308-2.185v5.549h-.954v-5.549h.954Zm-1.025-1.472c0-.154.046-.284.138-.39.096-.106.236-.159.421-.159.181 0 .319.053.415.159a.55.55 0 0 1 .149.39c0 .147-.05.274-.149.38-.096.102-.234.153-.415.153-.185 0-.325-.051-.421-.153a.561.561 0 0 1-.138-.38Zm3.579-.856v7.877h-.954v-7.877h.954Zm6.451 2.328v.728h-3v-.728h3Zm-1.984-1.349h.949v5.523c0 .188.029.33.087.426a.417.417 0 0 0 .225.19c.093.03.192.046.298.046.078 0 .161-.007.246-.021.089-.017.156-.03.2-.041l.005.775a2.13 2.13 0 0 1-.297.066c-.12.024-.265.036-.436.036-.233 0-.446-.046-.641-.138a1.032 1.032 0 0 1-.467-.462c-.113-.219-.169-.513-.169-.882v-5.518Zm2.743 4.185v-.118c0-.4.059-.771.175-1.113.116-.345.284-.644.502-.897.219-.257.484-.455.795-.595.311-.144.66-.216 1.046-.216.39 0 .741.072 1.052.216.314.14.581.338.8.595.222.253.391.552.507.897.117.342.175.713.175 1.113v.118c0 .4-.058.771-.175 1.113a2.654 2.654 0 0 1-.507.897 2.335 2.335 0 0 1-.795.595c-.308.14-.657.21-1.046.21-.39 0-.74-.07-1.052-.21a2.393 2.393 0 0 1-.8-.595 2.712 2.712 0 0 1-.502-.897 3.444 3.444 0 0 1-.175-1.113Zm.949-.118v.118c0 .277.033.538.098.784.065.243.162.459.292.647.133.188.299.336.497.446.199.106.429.159.693.159.26 0 .487-.053.682-.159a1.44 1.44 0 0 0 .492-.446c.13-.188.227-.404.292-.647a2.89 2.89 0 0 0 .103-.784v-.118a2.81 2.81 0 0 0-.103-.774 1.997 1.997 0 0 0-.297-.652 1.416 1.416 0 0 0-.492-.451 1.387 1.387 0 0 0-.688-.164c-.259 0-.488.055-.687.164a1.47 1.47 0 0 0-.492.451c-.13.188-.227.405-.292.652-.065.242-.098.5-.098.774Zm11.129 1.359a.797.797 0 0 0-.093-.38c-.058-.119-.179-.227-.364-.323-.181-.099-.455-.184-.82-.256a6.45 6.45 0 0 1-.836-.231 2.52 2.52 0 0 1-.631-.323 1.346 1.346 0 0 1-.395-.446 1.248 1.248 0 0 1-.138-.6c0-.219.047-.426.143-.621.099-.195.238-.367.416-.518.181-.15.398-.268.651-.353.253-.086.535-.129.846-.129.444 0 .824.079 1.138.236.315.157.556.368.724.631.167.26.251.549.251.867h-.949a.814.814 0 0 0-.138-.446 1.03 1.03 0 0 0-.395-.365 1.283 1.283 0 0 0-.631-.143c-.263 0-.477.041-.641.123a.822.822 0 0 0-.354.302.763.763 0 0 0-.056.667.602.602 0 0 0 .195.221c.092.065.222.126.389.184.168.058.382.117.641.175.455.102.829.225 1.123.369.294.143.513.32.657.528.143.209.215.462.215.759a1.485 1.485 0 0 1-.589 1.19 2.191 2.191 0 0 1-.677.338c-.26.079-.553.118-.877.118-.489 0-.903-.087-1.241-.261a1.927 1.927 0 0 1-.77-.677 1.622 1.622 0 0 1-.261-.877h.954c.013.26.089.467.225.62.137.151.305.258.503.323.198.062.395.093.59.093.259 0 .477-.034.651-.103a.898.898 0 0 0 .405-.282.656.656 0 0 0 .139-.41Zm5.466.523v-2.856a1.16 1.16 0 0 0-.133-.57.873.873 0 0 0-.39-.379 1.41 1.41 0 0 0-.646-.134c-.239 0-.45.041-.631.124a1.084 1.084 0 0 0-.42.323.708.708 0 0 0-.149.43h-.949c0-.198.052-.395.154-.589.103-.195.25-.371.441-.529.195-.16.428-.287.698-.379.273-.096.577-.144.912-.144.404 0 .759.069 1.067.205.311.137.554.344.728.621.178.273.267.617.267 1.031v2.584c0 .185.015.382.046.59.034.209.084.388.149.539v.082h-.99a1.806 1.806 0 0 1-.113-.436 3.574 3.574 0 0 1-.041-.513Zm.164-2.415.011.666h-.959c-.27 0-.511.022-.723.067-.212.041-.39.104-.534.19a.857.857 0 0 0-.441.769c0 .174.04.333.118.477a.862.862 0 0 0 .354.343c.161.082.357.123.59.123.29 0 .547-.061.769-.184.222-.123.398-.274.528-.451a.976.976 0 0 0 .216-.518l.405.456a1.374 1.374 0 0 1-.195.477 2.294 2.294 0 0 1-1.051.897c-.24.103-.51.154-.811.154-.376 0-.706-.073-.989-.22a1.69 1.69 0 0 1-.657-.59 1.56 1.56 0 0 1-.231-.836c0-.297.058-.559.175-.785.116-.229.283-.418.502-.569.219-.154.482-.27.79-.349a4.199 4.199 0 0 1 1.031-.117h1.102Zm3.882 2.507 1.518-4.692h.97l-1.995 5.549h-.636l.143-.857Zm-1.266-4.692 1.564 4.718.108.831h-.636l-2.011-5.549h.975Zm6.897 5.651a2.73 2.73 0 0 1-1.051-.195 2.373 2.373 0 0 1-.805-.559 2.493 2.493 0 0 1-.513-.851 3.113 3.113 0 0 1-.179-1.077v-.215c0-.452.066-.853.2-1.205.133-.356.314-.657.543-.903.229-.246.489-.432.78-.559.29-.126.591-.19.902-.19.397 0 .739.069 1.026.205.291.137.528.329.713.575.184.243.321.53.41.861.089.329.133.688.133 1.077v.426h-4.143v-.774h3.195v-.072a2.371 2.371 0 0 0-.154-.718 1.297 1.297 0 0 0-.41-.575c-.189-.15-.445-.225-.77-.225a1.275 1.275 0 0 0-1.061.538c-.13.178-.231.395-.303.652a3.289 3.289 0 0 0-.108.887v.215c0 .263.036.511.108.744.075.229.183.431.323.605.144.174.316.311.518.41.205.099.438.149.698.149.335 0 .618-.068.851-.205.232-.137.436-.32.61-.549l.575.456c-.12.182-.272.354-.457.518a2.144 2.144 0 0 1-.682.4 2.633 2.633 0 0 1-.949.154Zm7.431-.677 1.544-4.974h1.015l-2.225 6.405a3.53 3.53 0 0 1-.206.441 2.112 2.112 0 0 1-.318.457 1.516 1.516 0 0 1-.471.348 1.416 1.416 0 0 1-.652.139c-.075 0-.171-.011-.287-.031a3.379 3.379 0 0 1-.246-.051l-.005-.77c.027.004.07.007.128.011a1.527 1.527 0 0 0 .677-.077.84.84 0 0 0 .38-.282c.106-.13.196-.31.271-.539l.395-1.077Zm-1.133-4.974 1.441 4.308.246 1-.682.348-2.041-5.656h1.036Zm4.215 2.836v-.118c0-.4.058-.771.175-1.113.116-.345.283-.644.502-.897.219-.257.484-.455.795-.595.311-.144.66-.216 1.046-.216.39 0 .74.072 1.052.216.314.14.581.338.8.595.222.253.391.552.507.897.117.342.175.713.175 1.113v.118c0 .4-.058.771-.175 1.113a2.654 2.654 0 0 1-.507.897 2.335 2.335 0 0 1-.795.595c-.308.14-.657.21-1.046.21-.39 0-.741-.07-1.052-.21a2.383 2.383 0 0 1-.8-.595 2.694 2.694 0 0 1-.502-.897 3.417 3.417 0 0 1-.175-1.113Zm.949-.118v.118c0 .277.033.538.097.784.065.243.163.459.293.647.133.188.299.336.497.446.199.106.429.159.693.159.259 0 .487-.053.682-.159a1.44 1.44 0 0 0 .492-.446c.13-.188.227-.404.292-.647a2.89 2.89 0 0 0 .103-.784v-.118a2.81 2.81 0 0 0-.103-.774 1.997 1.997 0 0 0-.297-.652 1.41 1.41 0 0 0-.493-.451 1.38 1.38 0 0 0-.687-.164c-.26 0-.489.055-.687.164a1.47 1.47 0 0 0-.492.451c-.13.188-.228.405-.293.652-.064.242-.097.5-.097.774Zm8.687 1.549v-4.267h.954v5.549h-.908l-.046-1.282Zm.18-1.17.395-.01c0 .369-.04.711-.118 1.026a2.213 2.213 0 0 1-.369.81 1.75 1.75 0 0 1-.672.539c-.277.126-.614.189-1.011.189-.27 0-.518-.039-.743-.118a1.486 1.486 0 0 1-.575-.364 1.667 1.667 0 0 1-.374-.641 3.104 3.104 0 0 1-.128-.949v-3.579h.949v3.59c0 .249.027.456.082.62.058.161.135.289.23.385a.87.87 0 0 0 .329.195c.123.037.249.056.379.056.404 0 .723-.077.959-.231.236-.157.405-.367.508-.63.106-.267.159-.563.159-.888Zm3.169-2.225v4.677h-.949v-5.549h.923l.026.872Zm1.733-.903-.005.882a2.71 2.71 0 0 0-.461-.041c-.219 0-.412.034-.58.103a1.196 1.196 0 0 0-.425.287 1.36 1.36 0 0 0-.277.441 2.091 2.091 0 0 0-.128.554l-.267.154c0-.335.032-.65.097-.944.069-.294.173-.554.313-.779.14-.23.318-.407.533-.534a1.5 1.5 0 0 1 1.016-.169.71.71 0 0 1 .184.046Zm5.806.031v.728h-3v-.728h3Zm-1.985-1.349h.949v5.523c0 .188.029.33.087.426a.415.415 0 0 0 .226.19c.092.03.191.046.297.046.079 0 .161-.007.246-.021.089-.017.156-.03.2-.041l.005.775a2.13 2.13 0 0 1-.297.066c-.12.024-.265.036-.436.036-.233 0-.446-.046-.641-.138a1.032 1.032 0 0 1-.467-.462c-.113-.219-.169-.513-.169-.882v-5.518Zm4.128 1.349v5.549h-.954v-5.549h.954Zm-1.025-1.472c0-.154.046-.284.138-.39.096-.106.236-.159.421-.159.181 0 .319.053.415.159a.55.55 0 0 1 .149.39c0 .147-.05.274-.149.38-.096.102-.234.153-.415.153-.185 0-.325-.051-.421-.153a.561.561 0 0 1-.138-.38Zm3.492 2.574v4.447h-.954v-5.549h.903l.051 1.102Zm-.195 1.462-.441-.015c.003-.38.053-.73.149-1.052.096-.324.237-.606.425-.846a1.9 1.9 0 0 1 .703-.554c.28-.133.605-.2.974-.2.26 0 .5.038.718.113.219.072.409.186.57.344.16.157.285.359.374.605.089.246.133.543.133.892v3.698h-.948v-3.652c0-.29-.05-.523-.149-.697a.858.858 0 0 0-.41-.38 1.485 1.485 0 0 0-.626-.123 1.5 1.5 0 0 0-.703.149 1.189 1.189 0 0 0-.451.41 1.85 1.85 0 0 0-.246.6 3.352 3.352 0 0 0-.072.708Zm3.595-.523-.636.195c.004-.304.053-.597.149-.877.099-.28.241-.53.425-.749.189-.219.419-.391.693-.518.273-.13.586-.195.938-.195.298 0 .561.04.79.118.233.079.427.2.585.364.16.161.282.368.364.621.082.253.123.554.123.902v3.647h-.954v-3.657c0-.311-.05-.552-.149-.723a.77.77 0 0 0-.41-.364 1.635 1.635 0 0 0-.626-.108c-.208 0-.393.036-.554.108-.16.072-.295.171-.405.297a1.31 1.31 0 0 0-.251.426 1.576 1.576 0 0 0-.082.513Zm7.169 3.61a2.73 2.73 0 0 1-1.051-.195 2.373 2.373 0 0 1-.805-.559 2.493 2.493 0 0 1-.513-.851 3.113 3.113 0 0 1-.179-1.077v-.215c0-.452.066-.853.2-1.205.133-.356.314-.657.543-.903.229-.246.489-.432.78-.559.29-.126.591-.19.902-.19.397 0 .739.069 1.026.205.291.137.528.329.713.575.184.243.321.53.41.861.089.329.133.688.133 1.077v.426H478.7v-.774h3.195v-.072a2.371 2.371 0 0 0-.154-.718 1.297 1.297 0 0 0-.41-.575c-.189-.15-.445-.225-.77-.225a1.275 1.275 0 0 0-1.061.538c-.13.178-.231.395-.303.652a3.289 3.289 0 0 0-.108.887v.215c0 .263.036.511.108.744.075.229.183.431.323.605.144.174.316.311.518.41.205.099.438.149.698.149.335 0 .618-.068.851-.205.232-.137.436-.32.61-.549l.575.456c-.12.182-.272.354-.457.518a2.144 2.144 0 0 1-.682.4 2.633 2.633 0 0 1-.949.154Zm3.282-.605a.58.58 0 0 1 .149-.405c.103-.113.25-.169.441-.169.192 0 .337.056.436.169a.567.567 0 0 1 .154.405.561.561 0 0 1-.154.4c-.099.11-.244.164-.436.164-.191 0-.338-.054-.441-.164a.575.575 0 0 1-.149-.4Z",
            fill:"#161E35"
          })]
        })]
      }),(0,n.jsxs)("defs",{
        children:[(0,n.jsx)("clipPath",{
          id:"alerts-locked-illustration_svg__a",
          children:(0,n.jsx)("path",{
            fill:"#fff",
            d:"M0 0h500v500H0z"
          })
        }),(0,n.jsx)("clipPath",{
          id:"alerts-locked-illustration_svg__c",
          children:(0,n.jsx)("path",{
            fill:"#fff",
            transform:"translate(34.223 89.813)",
            d:"M0 0h324.865v236.53H0z"
          })
        }),(0,n.jsx)("clipPath",{
          id:"alerts-locked-illustration_svg__i",
          children:(0,n.jsx)("path",{
            fill:"#fff",
            transform:"translate(233.784 332.371)",
            d:"M0 0h50.781v8.644H0z"
          })
        }),(0,n.jsx)("clipPath",{
          id:"alerts-locked-illustration_svg__j",
          children:(0,n.jsx)("path",{
            fill:"#fff",
            transform:"translate(133.704 378.129)",
            d:"M0 0h250.941v111.368H0z"
          })
        }),(0,n.jsx)("clipPath",{
          id:"alerts-locked-illustration_svg__l",
          children:(0,n.jsx)("path",{
            fill:"#fff",
            transform:"translate(319.846 313.945)",
            d:"M0 0h15.427v15.427H0z"
          })
        }),(0,n.jsxs)("filter",{
          id:"alerts-locked-illustration_svg__b",
          x:6.679,
          y:30.868,
          width:387.642,
          height:324.209,
          filterUnits:"userSpaceOnUse",
          colorInterpolationFilters:"sRGB",
          children:[(0,n.jsx)("feFlood",{
            floodOpacity:0,
            result:"BackgroundImageFix"
          }),(0,n.jsx)("feColorMatrix",{
            in:"SourceAlpha",
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result:"hardAlpha"
          }),(0,n.jsx)("feOffset",{
            dy:1.189
          }),(0,n.jsx)("feGaussianBlur",{
            stdDeviation:4.161
          }),(0,n.jsx)("feComposite",{
            in2:"hardAlpha",
            operator:"out"
          }),(0,n.jsx)("feColorMatrix",{
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
          }),(0,n.jsx)("feBlend",{
            in2:"BackgroundImageFix",
            result:"effect1_dropShadow_7930_47690"
          }),(0,n.jsx)("feBlend",{
            in:"SourceGraphic",
            in2:"effect1_dropShadow_7930_47690",
            result:"shape"
          })]
        }),(0,n.jsxs)("filter",{
          id:"alerts-locked-illustration_svg__g",
          x:24.478,
          y:16.663,
          width:243.159,
          height:60.511,
          filterUnits:"userSpaceOnUse",
          colorInterpolationFilters:"sRGB",
          children:[(0,n.jsx)("feFlood",{
            floodOpacity:0,
            result:"BackgroundImageFix"
          }),(0,n.jsx)("feColorMatrix",{
            in:"SourceAlpha",
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result:"hardAlpha"
          }),(0,n.jsx)("feOffset",{
            dy:.889
          }),(0,n.jsx)("feGaussianBlur",{
            stdDeviation:3.113
          }),(0,n.jsx)("feComposite",{
            in2:"hardAlpha",
            operator:"out"
          }),(0,n.jsx)("feColorMatrix",{
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
          }),(0,n.jsx)("feBlend",{
            in2:"BackgroundImageFix",
            result:"effect1_dropShadow_7930_47690"
          }),(0,n.jsx)("feBlend",{
            in:"SourceGraphic",
            in2:"effect1_dropShadow_7930_47690",
            result:"shape"
          })]
        }),(0,n.jsxs)("filter",{
          id:"alerts-locked-illustration_svg__h",
          x:125.754,
          y:307.713,
          width:266.842,
          height:190.87,
          filterUnits:"userSpaceOnUse",
          colorInterpolationFilters:"sRGB",
          children:[(0,n.jsx)("feFlood",{
            floodOpacity:0,
            result:"BackgroundImageFix"
          }),(0,n.jsx)("feColorMatrix",{
            in:"SourceAlpha",
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result:"hardAlpha"
          }),(0,n.jsx)("feOffset",{
            dy:1.136
          }),(0,n.jsx)("feGaussianBlur",{
            stdDeviation:3.975
          }),(0,n.jsx)("feComposite",{
            in2:"hardAlpha",
            operator:"out"
          }),(0,n.jsx)("feColorMatrix",{
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
          }),(0,n.jsx)("feBlend",{
            in2:"BackgroundImageFix",
            result:"effect1_dropShadow_7930_47690"
          }),(0,n.jsx)("feBlend",{
            in:"SourceGraphic",
            in2:"effect1_dropShadow_7930_47690",
            result:"shape"
          })]
        }),(0,n.jsxs)("filter",{
          id:"alerts-locked-illustration_svg__k",
          x:299.578,
          y:294.124,
          width:200.018,
          height:57.96,
          filterUnits:"userSpaceOnUse",
          colorInterpolationFilters:"sRGB",
          children:[(0,n.jsx)("feFlood",{
            floodOpacity:0,
            result:"BackgroundImageFix"
          }),(0,n.jsx)("feColorMatrix",{
            in:"SourceAlpha",
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result:"hardAlpha"
          }),(0,n.jsx)("feOffset",{
            dy:.875
          }),(0,n.jsx)("feGaussianBlur",{
            stdDeviation:3.063
          }),(0,n.jsx)("feComposite",{
            in2:"hardAlpha",
            operator:"out"
          }),(0,n.jsx)("feColorMatrix",{
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
          }),(0,n.jsx)("feBlend",{
            in2:"BackgroundImageFix",
            result:"effect1_dropShadow_7930_47690"
          }),(0,n.jsx)("feBlend",{
            in:"SourceGraphic",
            in2:"effect1_dropShadow_7930_47690",
            result:"shape"
          })]
        })]
      })]
    }),
    cX=i(16905),
    c0=i(50691);
    let c1=m.default.section.withConfig({
      componentId:"sc-ab2fbb9d-0"
    })(["width:100%;height:100%;overflow-y:auto;"]),
    c2=m.default.div.withConfig({
      componentId:"sc-ab2fbb9d-1"
    })(["display:flex;justify-content:space-between;padding:0;> div{margin-top:0px;}"]),
    c3=m.default.div.withConfig({
      componentId:"sc-ab2fbb9d-2"
    })(["margin-top:16px;width:100%;height:calc(100% - 48px);border-bottom-left-radius:6px;border-bottom-right-radius:6px;> section > section > div{table{th > div{padding:0 4px;}td{padding-left:16px;}}}"]),
    c4=(0,m.default)(y.Z).withConfig({
      componentId:"sc-ab2fbb9d-3"
    })(["border-radius:6px;border:none !important;outline:none;background-color:#EFF5FF;display:flex;justify-content:center;align-items:center;min-width:120px;height:32px;color:#5D97FF;gap:8px;font-weight:400 !important;font-size:14px !important;padding:0 12px;text-shadow:none;box-shadow:none;&:hover{background-color:#E5EEFF;color:#5D97FF;}"]);
    var c5=e=>{
      let{
        appId:t
      }=e,
      [i,o]=(0,a.useState)(!1),
      {
        noCodeEventsFeatureFlag:l
      }=(0,lw.Z)(),
      {
        urlReducer:{
          url:s,
          parentType:c
        }
      }=(0,r.v9)(e=>e),
      d=window.location.href||s||"",
      p=(0,I.ye)("conversion-report"),
      h=(0,r.I0)(),
      {
        selfServeFlag:f,
        setShowPricingModal:m,
        alertsFeatureAllowed:v,
        retentionFeatureAllowed:x,
        aiSessionFeatureAllowed:b
      }=(0,u.I)(),
      y=(0,a.useMemo)(()=>d.includes("#create-alert")||d.includes("#view-alert"),[d]),
      j=()=>{
        let e=-1!==d.indexOf("#create-alert")?d.indexOf("#create-alert"):d.indexOf("#view-alert"),
        t=d.indexOf("?");
        if(-1===e)return;
        let i=d.substring(0,-1!==t?t:e);
        window.history.replaceState({},document.title,i)
      },
      w=()=>{
        window.location.hash="create-alert"
      },
      Z=a.useCallback((e,t)=>{
        h((0,g.hI)({
          action:e,
          property:t
        })),
        h((0,k.CW)(null,{
          eventName:e,
          track_type:"event",
          eventProperty:t,
          pageName:c
        }))
      },[h,c]);
      (0,a.useEffect)(()=>(y&&o(!0),()=>{
        o(!1)
      }),[y]);
      let C=(0,a.useMemo)(()=>(0,n.jsxs)(n.Fragment,{
        children:["Set custom alerts for proactive monitoring of your key metrics and stay ahead of potential issues."," ",(0,n.jsx)("a",{
          href:"https://help.uxcam.com/hc/en-us/articles/30459874917273-Overview-of-Alerts",
          target:"_blank",
          rel:"noopener noreferrer",
          style:{
            textDecoration:"none",
            color:"#5D97FF"
          },
          children:"Learn how."
        })]
      }),[]),
      S=(0,a.useCallback)(()=>{
        o(!0),
        w(),
        h((0,k.CW)(null,{
          eventName:"wa_alerts_click_alert_creator",
          track_type:"event",
          eventProperty:{}
        }))
      },[h]),
      z=(0,a.useCallback)(()=>{
        m(!0),
        h((0,k.CW)(null,{
          eventName:"wa_see_pricing_clicked",
          track_type:"event",
          eventProperty:{
            source:"Settings"
          }
        }))
      },[m,h]),
      _=(0,a.useCallback)(()=>{
        m(!0),
        h((0,k.CW)(null,{
          eventName:"wa_request_pricing_clicked",
          track_type:"event",
          eventProperty:{
            source:"Settings"
          }
        }))
      },[m,h]),
      F=(0,I.ye)("new-screens-filter"),
      P=(0,lC.e)("web");
      return(0,n.jsx)(c1,{
        children:v?(0,n.jsxs)(n.Fragment,{
          children:[(0,n.jsxs)(c2,{
            children:[(0,n.jsx)(l_.Z,{
              type:"info",
              content:C
            }),(0,n.jsx)(c4,{
              type:"primary",
              onClick:S,
              disabled:y,
              loading:y,
              icon:(0,n.jsx)(c$.Z,{}),
              "data-intercom-target":"Create alert top bar",
              children:"Create alert"
            })]
          }),(0,n.jsx)(c3,{
            children:(0,n.jsx)(cG(),{
              appId:t,
              env:"production",
              noCodeEnabled:l,
              cohortsEnabled:x,
              conversionEnabled:p,
              openModal:i,
              trackEvent:Z,
              handleCloseModal:()=>{
                o(!1),
                j()
              },
              isWebSDK:P,
              newScreenFilter:F,
              handleOpenModal:()=>o(!0),
              onBeforeRequest:cX.e.refreshIfNeeded,
              MassUserIdModal:c0.ZP,
              isNewAISessionEnabled:b
            })
          })]
        }):(0,n.jsx)(lZ.ZP,{
          image:cJ,
          title:"Custom Alerts",
          subTitle:"Stay on top of changes and act faster",
          list:(0,n.jsxs)(n.Fragment,{
            children:[(0,n.jsx)("li",{
              children:"Monitor your product's performance effortlessly."
            }),(0,n.jsx)("li",{
              children:"Anticipate and address potential issues promptly."
            }),(0,n.jsx)("li",{
              children:"Make informed decisions faster and more effectively."
            })]
          }),
          selfServeFlag:f,
          handleClickSeePricing:z,
          handleClickRequestPricing:_,
          imageSrc:void 0
        })
      })
    },
    c6=i(62499),
    c7=i(47357),
    c8=e=>(0,n.jsxs)("svg",{
      width:14,
      height:15,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,n.jsx)("path",{
        d:"M7 4.882v2.4m0 0v2.4m0-2.4h2.4m-2.4 0H4.6",
        stroke:"currentColor",
        strokeWidth:1.5,
        strokeLinecap:"round"
      }),(0,n.jsx)("path",{
        d:"M7 13.28a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z",
        stroke:"currentColor",
        strokeWidth:1.5
      })]
    }),
    c9=e=>(0,n.jsxs)("svg",{
      width:18,
      height:12,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,n.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M4.667 9.264h3.555V7.486H4.667c-.741 0-1.37-.26-1.89-.778A2.572 2.572 0 0 1 2 4.82c0-.74.26-1.37.778-1.888a2.572 2.572 0 0 1 1.889-.778h3.555V.375H4.667c-1.229 0-2.277.433-3.144 1.3C.655 2.542.222 3.59.223 4.82c0 1.23.433 2.277 1.3 3.144.866.867 1.914 1.3 3.144 1.3Zm.889-5.333v1.777h7.11V3.931h-7.11Zm9.53 3.082c.567.254 1.061.592 1.483 1.014l.033.033.098-.096c.866-.867 1.3-1.916 1.3-3.145s-.433-2.277-1.3-3.144-1.915-1.3-3.144-1.3H10v1.778h3.556c.74 0 1.37.259 1.888.778.519.518.778 1.148.778 1.888 0 .741-.26 1.37-.778 1.89a2.834 2.834 0 0 1-.358.304Z",
        fill:"currentColor"
      }),(0,n.jsx)("path",{
        d:"m12.372 10.275 1.763-1.763-.35-.35-1.413 1.413-.712-.712-.35.35 1.062 1.062Zm.35 1.35c-.346 0-.67-.066-.975-.197a2.527 2.527 0 0 1-.794-.534 2.518 2.518 0 0 1-.534-.794 2.438 2.438 0 0 1-.197-.975c0-.346.066-.67.197-.975.132-.304.31-.569.534-.794.225-.225.49-.403.794-.534.305-.131.63-.197.975-.197.346 0 .67.066.975.197.305.131.57.31.794.534.225.225.403.49.534.794.132.304.198.63.197.975a2.51 2.51 0 0 1-1.525 2.303 2.423 2.423 0 0 1-.975.197Z",
        fill:"currentColor"
      })]
    }),
    de=e=>(0,n.jsx)("svg",{
      width:18,
      height:14,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        d:"M10.167 0a7 7 0 0 0-7 7H.833l3.026 3.026.054.108L7.056 7H4.722a5.44 5.44 0 0 1 5.445-5.444A5.44 5.44 0 0 1 15.61 7a5.44 5.44 0 0 1-5.444 5.444 5.4 5.4 0 0 1-3.843-1.602L5.22 11.947A6.965 6.965 0 0 0 10.167 14a7 7 0 0 0 0-14Zm-.778 3.889v3.889l3.305 1.96.6-.996-2.739-1.625V3.889H9.39Z",
        fill:"currentColor"
      })
    }),
    dt=e=>(0,n.jsxs)("svg",{
      width:17,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,n.jsx)("mask",{
        id:"cogs_svg__a",
        style:{
          maskType:"luminance"
        },
        maskUnits:"userSpaceOnUse",
        x:0,
        y:0,
        width:17,
        height:16,
        children:(0,n.jsx)("path",{
          d:"M16.222 0h-16v16h16V0Z",
          fill:"currentColor"
        })
      }),(0,n.jsx)("g",{
        mask:"url(#cogs_svg__a)",
        children:(0,n.jsx)("path",{
          fillRule:"evenodd",
          clipRule:"evenodd",
          d:"M12.772 8.54V7.46l.52-.66c.16-.19.25-.43.27-.68.02-.25-.04-.5-.16-.72l-.34-.58c-.12-.22-.31-.4-.54-.51-.22-.1-.48-.14-.73-.11l-.83.13-.93-.54-.31-.78a1.26 1.26 0 0 0-1.16-.8h-.67c-.26 0-.5.08-.71.22-.21.14-.37.35-.46.58l-.31.78-.93.54-.83-.13c-.25-.03-.5.01-.73.11-.23.11-.42.29-.54.51l-.34.58c-.12.22-.18.47-.16.72.02.25.11.49.27.68l.52.66v1.08l-.52.66a1.2 1.2 0 0 0-.27.68c-.02.25.04.5.16.72l.34.58c.12.22.31.4.54.51.23.1.48.14.73.11l.83-.13.93.54.31.78a1.26 1.26 0 0 0 1.16.8h.67c.26 0 .5-.08.71-.22.21-.14.37-.35.46-.58l.3-.78.94-.54.83.13c.25.03.5-.01.73-.11.23-.11.41-.29.54-.51l.34-.58c.12-.22.18-.47.16-.72a1.26 1.26 0 0 0-.27-.69l-.52-.65Zm-4.55 1.5c-1.13 0-2.04-.91-2.04-2.04s.91-2.04 2.04-2.04 2.04.91 2.04 2.04-.91 2.04-2.04 2.04Z",
          fill:"currentColor"
        })
      })]
    }),
    di=i(37088),
    dn=e=>(0,n.jsxs)("svg",{
      width:154,
      height:104,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,n.jsx)("path",{
        d:"M142.395 90.385H19.004c-.657-.001-1.287-.261-1.751-.724a2.465 2.465 0 0 1-.726-1.743V20.544c0-.654.262-1.281.726-1.744a2.486 2.486 0 0 1 1.75-.723h123.392c.657 0 1.287.26 1.751.723.465.463.726 1.09.727 1.744v67.374a2.464 2.464 0 0 1-.727 1.743 2.485 2.485 0 0 1-1.751.724Z",
        fill:"#F7FAFF"
      }),(0,n.jsx)("rect",{
        x:.257,
        width:126.538,
        height:72.308,
        rx:6,
        fill:"#fff"
      }),(0,n.jsx)("path",{
        d:"M.257 6a6 6 0 0 1 6-6h114.539a6 6 0 0 1 6 6v1.23H.257V6Z",
        fill:"#5D97FF"
      }),(0,n.jsx)("path",{
        d:"M.257 7.23h19.885v65.078H6.257a6 6 0 0 1-6-6V7.23Z",
        fill:"#EFF5FF"
      }),(0,n.jsx)("path",{
        d:"M16.53 25.308h-11a1.5 1.5 0 0 0 0 3h11a1.5 1.5 0 1 0 0-3Z",
        fill:"#5D97FF"
      }),(0,n.jsx)("path",{
        d:"M18.495 34.308H3.565a1.5 1.5 0 0 0 0 3h14.93a1.5 1.5 0 1 0 0-3ZM18.495 41.308H3.565a1.5 1.5 0 0 0 0 3h14.93a1.5 1.5 0 1 0 0-3ZM18.495 48.308H3.565a1.5 1.5 0 0 0 0 3h14.93a1.5 1.5 0 1 0 0-3ZM18.495 55.308H3.565a1.5 1.5 0 0 0 0 3h14.93a1.5 1.5 0 1 0 0-3Z",
        fill:"#fff"
      }),(0,n.jsx)("path",{
        d:"M4.777 4.52a.904.904 0 1 0 0-1.808.904.904 0 0 0 0 1.807ZM7.488 4.52a.904.904 0 1 0 0-1.808.904.904 0 0 0 0 1.807ZM10.2 4.52a.904.904 0 1 0 0-1.808.904.904 0 0 0 0 1.807Z",
        fill:"#DFEAFF"
      }),(0,n.jsx)("path",{
        d:"M112.511 18.98H34.427c-.433.002-.847.222-1.153.614-.306.392-.477.923-.478 1.478v.337c0 .554.172 1.086.478 1.478.306.392.72.612 1.153.613h78.084c.432 0 .847-.221 1.153-.613.305-.392.477-.924.478-1.478v-.337c-.001-.555-.173-1.086-.478-1.478-.306-.392-.721-.613-1.153-.613Z",
        fill:"#5D97FF"
      }),(0,n.jsx)("path",{
        d:"M44.471 21.975H37.04c-.167 0-.326-.095-.444-.264-.118-.17-.184-.4-.184-.64 0-.239.066-.469.184-.638.118-.17.277-.265.444-.265h7.432c.81-.016.818 1.824 0 1.807ZM66.706 21.975h-7.433c-.166 0-.326-.095-.443-.264-.118-.17-.184-.4-.184-.64 0-.239.066-.469.184-.638.117-.17.277-.265.444-.265h7.432c.81-.016.818 1.824 0 1.807ZM88.94 21.975h-7.432c-.166 0-.326-.095-.444-.264-.117-.17-.183-.4-.183-.64 0-.239.066-.469.183-.638.118-.17.278-.265.444-.265h7.433c.81-.016.817 1.824 0 1.807ZM110.023 22.045h-7.433c-.166 0-.326-.095-.444-.265-.117-.17-.184-.4-.184-.639 0-.24.067-.47.184-.639.118-.17.278-.265.444-.265h7.433c.809-.016.817 1.824 0 1.808ZM98.426 18.98h-.27v4.52h.27v-4.52Z",
        fill:"#fff"
      }),(0,n.jsx)("rect",{
        x:32.796,
        y:34.346,
        width:81.346,
        height:5,
        rx:2.5,
        fill:"#DFEAFF"
      }),(0,n.jsx)("rect",{
        x:32.796,
        y:44.346,
        width:81.346,
        height:5,
        rx:2.5,
        fill:"#DFEAFF"
      }),(0,n.jsx)("rect",{
        x:32.796,
        y:54.346,
        width:81.346,
        height:5,
        rx:2.5,
        fill:"#DFEAFF"
      }),(0,n.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M91.171 63.436A4.171 4.171 0 0 0 87 67.608v25.028a4.171 4.171 0 0 0 4.171 4.172h35.002l-.17-1.859-.001-.012c-.249-2.727-.374-4.091.438-4.56.814-.47 1.936.322 4.18 1.907l3.753 2.648h.001c1.123.794 1.685 1.191 1.662 1.727a.734.734 0 0 1-.023.149h13.558a4.172 4.172 0 0 0 4.172-4.172V67.608a4.172 4.172 0 0 0-4.172-4.172h-58.4Zm9.274 21.134h-.442l-2.089-7.713h1.683l1.236 5.366 1.594-5.366H103.71l1.607 5.412 1.223-5.412h1.675l-2.081 7.713H104.708l-1.648-5.372-1.631 5.372h-.984Zm10.836 0h-.442l-2.089-7.713h1.682l1.237 5.366 1.594-5.366h1.283l1.607 5.412 1.223-5.412h1.675l-2.081 7.713H115.544l-1.648-5.372-1.631 5.372h-.984Zm10.836 0h-.442l-2.089-7.713h1.682l1.237 5.366 1.594-5.366h1.283l1.606 5.412 1.224-5.412h1.675l-2.081 7.713H126.38l-1.649-5.372-1.63 5.372h-.984Zm9.232-1.525a.908.908 0 0 0-.271.67c0 .266.09.49.271.67.18.18.425.27.734.27.314 0 .558-.09.734-.27a.909.909 0 0 0 .271-.67c0-.267-.09-.49-.271-.67-.176-.186-.42-.279-.734-.279-.309 0-.554.093-.734.278Zm.007-6.074a.909.909 0 0 0-.271.67c0 .266.09.49.271.67.18.18.425.27.734.27.314 0 .558-.09.734-.27a.909.909 0 0 0 .271-.67c0-.266-.09-.49-.271-.67-.176-.186-.42-.278-.734-.278-.309 0-.554.092-.734.278Zm4.02 8.49 4.043-11.27h-1.341l-4.049 11.27h1.347Zm4.05 0 4.042-11.27h-1.341l-4.049 11.27h1.348Zm-8.865 14.198 1.836 2.935.007.01c.186.297.28.447.403.535a.769.769 0 0 0 .574.131c.151-.025.303-.12.607-.311.303-.19.455-.285.544-.41a.776.776 0 0 0 .132-.574c-.025-.151-.12-.303-.311-.607l-1.836-2.934.895-.562.002-.001c.916-.574 1.374-.86 1.378-1.282.004-.421-.449-.718-1.353-1.31h-.001l-3.021-1.974c-1.807-1.182-2.711-1.772-3.336-1.38-.625.391-.489 1.46-.216 3.596l.001.009.457 3.582v.003c.137 1.071.206 1.608.586 1.788.381.18.839-.107 1.756-.683l.896-.56Z",
        fill:"#5D97FF"
      })]
    });
    let da=a.createContext({
      getEditLink:()=>({
        href:{
          pathname:"",
          query:{}
        },
        asUrl:""
      }),
      handleArchiveRule:()=>()=>null,
      status:"active",
      isManager:!1
    }),
    dl=a.memo(e=>{
      let{
        children:t,
        status:i,
        onArchive:l,
        isManager:r
      }=e,
      {
        pathname:s,
        query:c
      }=(0,o.useRouter)(),
      d=a.useCallback(e=>{
        let t=c.org,
        i=c.app;
        return{
          asUrl:"settings/app/".concat(t,"/").concat(i,"/page_definition?rule_id=").concat(e,"#rule-builder"),
          href:{
            pathname:s,
            query:{
              ...c,
              rule_id:e
            }
          }
        }
      },[s,c]),
      p=a.useCallback((e,t)=>()=>{
        l({
          id:e,
          name:t
        })
      },[l]),
      u=a.useMemo(()=>({
        getEditLink:d,
        handleArchiveRule:p,
        status:i,
        isManager:r
      }),[d,p,i,r]);
      return(0,n.jsx)(da.Provider,{
        value:u,
        children:t
      })
    }),
    dr=()=>a.useContext(da);
    var ds=i(87536),
    dc=i(16310);
    let dd=e=>a.useCallback(async t=>{
      try{
        return{
          values:await e.validate(t,{
            abortEarly:!1
          }),
          errors:{}
        }
      }
      catch(e){
        return{
          values:{},
          errors:e.inner.reduce((e,t)=>{
            var i;
            return{
              ...e,
              [t.path]:{
                type:null!==(i=t.type)&&void 0!==i?i:"validation",
                message:t.message
              }
            }
          },{})
        }
      }
    },[e]);
    var dp=e=>(0,n.jsx)("svg",{
      width:16,
      height:17,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M8 16.77a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1.714-5.285a.714.714 0 0 0 0 1.428h3.428a.714.714 0 1 0 0-1.428h-1V8.199A.714.714 0 0 0 8 7.485H6.857a.714.714 0 0 0 0 1.428h.429v2.572h-1Zm2.857-6.143a1.143 1.143 0 1 1-2.286 0 1.143 1.143 0 0 1 2.286 0Z",
        fill:"#F4584C"
      })
    }),
    du=i(8357),
    dh=i(51068);
    let df=function(e){
      let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];
      try{
        let i=new URL(e),
        n=i.pathname.split("/").filter(e=>e);
        if(t&&i.hash){
          let e=i.hash.slice(1).split("/").filter(e=>e);
          return[!0,[...n,"#",...e]]
        }
        return[!0,n]
      }
      catch(e){
        return[!1,[]]
      }
    },
    dm=e=>{
      try{
        let{
          pathname:t
        }=new URL("https://example.com/".concat(e));
        return t.split("/").filter(e=>e.startsWith(":")).map(e=>e.substring(1))
      }
      catch(e){
        return[]
      }
    },
    dv=function(e){
      let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];
      if("string"!=typeof e)return e;
      try{
        let{
          pathname:i,
          hash:o
        }=new URL("https://example.com/".concat(e));
        return(i.substring(1)+o).split("/").map(e=>e.startsWith(":")?(0,n.jsx)("span",{
          style:t?{
            marginLeft:"4px"
          }:void 0,
          children:"{".concat(e.substring(1),"}")
        }):(0,n.jsx)("span",{
          children:e
        })).map((e,t)=>(0,n.jsxs)(a.Fragment,{
          children:[t>0?(0,n.jsx)("span",{
            children:"/"
          }):null,e]
        },t))
      }
      catch(t){
        return e
      }
    },
    dg=e=>{
      try{
        return new URL(e).pathname
      }
      catch(t){
        if(!e.startsWith("http"))return e.startsWith("/")&&(e=e.substring(1)),
        dg("https://example.com/".concat(e));
        return""
      }
    },
    dx=e=>{
      let t;
      try{
        let i=new URL(e);
        t=i.pathname+(i.hash||"")
      }
      catch(i){
        t=e.startsWith("/")?e:"/".concat(e)
      }
      let[i,...n]=t.split("#"),
      a=n.length>0,
      o=a?n.join("#"):"",
      l=function(e){
        let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;
        return e.replaceAll("**","\0").split("*").map((e,i)=>0===i?e:":".concat(t+i-1).concat(e)).join("")
      },
      r=(i.replaceAll("**","").match(/\*/g)||[]).length,
      s=l(i),
      c=s.replaceAll("\0","/(.*)"),
      d=s.replaceAll("\0","(.*)"),
      p=t.endsWith("**"),
      u=(0,dh.EQ)(c),
      h=(0,dh.EQ)(d),
      f=null,
      m=null;
      if(a){
        let e="#".concat(l(o,r)),
        t=e.replaceAll("\0","/(.*)"),
        i=e.replaceAll("\0","(.*)");
        f=(0,dh.EQ)(t),
        m=(0,dh.EQ)(i)
      }
      return e=>{
        let t=new URL(e),
        i=u(t.pathname)||h(t.pathname);
        if(!i)return null;
        if(p)return{
          ...i.params
        };
        if(!a)return""===t.hash?{
          ...i.params
        }:null;
        let n=f(t.hash)||m(t.hash);
        return n?{
          ...i.params,
          ...n.params
        }:null
      }
    };
    var db=e=>(0,n.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,n.jsx)("rect",{
        x:2,
        y:2,
        width:12,
        height:12,
        rx:6,
        fill:"#5D97FF"
      }),(0,n.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M11.06 5.28a.847.847 0 0 1-.024 1.197c-.315.304-.99.996-1.624 1.783-.64.794-1.413 1.843-1.66 2.286a.847.847 0 0 1-1.426.085 6.63 6.63 0 0 0-.501-.567 16.979 16.979 0 0 0-.809-.784.847.847 0 0 1 1.069-1.314c.164.133.62.577.824.784.3-.416.843-1.13 1.183-1.552a22.78 22.78 0 0 1 1.771-1.943.847.847 0 0 1 1.198.025Z",
        fill:"#fff"
      })]
    });
    let dy=m.default.button.withConfig({
      componentId:"sc-42619e4e-0"
    })(["appearance:none;background:none;display:flex;border-radius:6px;align-items:center;position:relative;border:1px solid ",";padding:",";white-space:break-spaces;min-height:28px;white-space:nowrap;font-weight:400;font-size:",";color:",";cursor:pointer;transition:background-color 0.2s;&:after{content:attr(data-separator);display:flex;align-items:center;justify-content:center;position:absolute;left:100%;top:0;width:",";font-size:",";color:",';height:100%;}&[data-is-last="true"]:after{content:none;}&[data-separator*="#"]{margin-right:',';}&[data-separator*="#"]:after{width:',";}&[data-selected='true']{background:",";border-color:",";}&:disabled{pointer-events:none;background:",";}"],v.r.colors.surface10.toString(),v.r.spacing(.25,1),v.r.fontSize(1.2),v.r.colors.surface300.toString(),v.r.spacing(3),v.r.fontSize(2.4),v.r.colors.surface10.toString(),v.r.spacing(2),v.r.spacing(5),v.r.colors.primary10.toString(),v.r.colors.primary10.toString(),v.r.colors.surface10.toString()),
    dj=m.default.div.withConfig({
      componentId:"sc-42619e4e-1"
    })(["width:100%;height:1px;background:",";"],v.r.colors.surface10.toString()),
    dw=m.default.div.withConfig({
      componentId:"sc-42619e4e-2"
    })(["font-size:",";line-height:",";color:",";"],v.r.fontSize(1.2),v.r.fontSize(2.4),v.r.colors.surface200.toString()),
    dZ=m.default.input.withConfig({
      componentId:"sc-42619e4e-3"
    })(["appearance:none;border:none;background:#F3F4F5;border-radius:6px;font-size:",";height:24px;padding:",";width:100%;"],v.r.fontSize(1.2),v.r.spacing(.25,1)),
    dC=m.default.div.withConfig({
      componentId:"sc-42619e4e-4"
    })(["display:flex;flex-direction:column;gap:",";width:326px;"],v.r.spacing(1.25)),
    dk=m.default.div.withConfig({
      componentId:"sc-42619e4e-5"
    })(["flex-wrap:wrap;font-size:",";line-height:",";i{font-size:",";font-style:normal;color:",";}b{font-weight:700;}"],v.r.fontSize(1.2),v.r.fontSize(2.4),v.r.fontSize(1),v.r.colors.surface200.toString()),
    dI=m.default.button.withConfig({
      componentId:"sc-42619e4e-6"
    })(["display:flex;gap:",";align-items:center;justify-content:space-between;border:none;background:transparent;border-radius:6px;padding:",";font-size:",";color:",";font-weight:400;cursor:pointer;&:hover{background:",";}&[aria-selected='true']{background:",";}"],v.r.spacing(1),v.r.spacing(.25,1),v.r.fontSize(1.2),v.r.colors.surface500.toString(),v.r.colors.primary05.toString(),v.r.colors.primary05.toString()),
    dS=m.default.div.withConfig({
      componentId:"sc-42619e4e-7"
    })(["display:flex;flex-direction:column;gap:",";"],v.r.spacing(.5)),
    dz=m.default.label.withConfig({
      componentId:"sc-42619e4e-8"
    })(["display:flex;gap:",";font-size:",";color:",";align-items:center;cursor:pointer;input{display:none;}&[aria-disabled='true']{color:",";pointer-events:none;}span:before{content:'';display:flex;width:14px;height:14px;border-radius:50%;border:1px solid ",";}input:checked + span:before{border-color:",";border-width:4px;}"],v.r.spacing(.5),v.r.fontSize(1.2),v.r.colors.surface500.toString(),v.r.colors.surface200.toString(),v.r.colors.surface200.toString(),v.r.colors.primary500.toString());
    var d_=a.memo(e=>{
      let{
        getPopupContainer:t,
        disabled:i,
        isHash:o,
        patternPart:l,
        part:r,
        index:s,
        handlePartChange:c,
        allParameters:d,
        isLast:p,
        separator:u
      }=e,
      h=a.useMemo(()=>l.replace(/:/g,""),[l]),
      f=a.useMemo(()=>"*"===l||l.startsWith(":")||"***"===l,[l]),
      m="*"===h||"***"===l,
      [v,g]=a.useState(""),
      [x,b]=a.useState(!1);
      a.useEffect(()=>{
        g("")
      },[x]);
      let y=a.useCallback(e=>{
        g(e.target.value.replace(/[^a-zA-Z0-9]/g,""))
      },[]),
      j=a.useMemo(()=>{
        let e=v.toLowerCase();
        return e.trim()?d.filter(t=>t.toLowerCase().includes(e)):[]
      },[v,d]),
      w=a.useMemo(()=>!v.trim()&&l.startsWith(":")&&!j.length,[v,l,j]),
      Z=a.useCallback(e=>{
        if(e.target.checked){
          c(s,"*"),
          b(!1);
          return
        }
        c(s)
      },[c,s]),
      C=a.useCallback(e=>{
        let t=e.currentTarget.value.replace(/[^a-zA-Z0-9]/g,"");
        t&&"Enter"===e.key&&(e.preventDefault(),e.currentTarget.value="",c(s,":".concat(t)))
      },[c,s]),
      k=a.useMemo(()=>v.trim()&&d.every(e=>e!==v),[v,d]),
      S=a.useMemo(()=>!!v.trim(),[v]);
      return(0,n.jsx)(I.kF,{
        destroyPopupOnHide:!0,
        onVisibleChange:b,
        visible:x,
        placement:"bottomCenter",
        trigger:["click"],
        getPopupContainer:t,
        overlay:(0,n.jsx)(I.hF,{
          children:(0,n.jsxs)(dC,{
            children:[(0,n.jsx)(dZ,{
              type:"text",
              disabled:m,
              value:v,
              onChange:y,
              placeholder:"Type to create",
              onKeyDown:C
            }),j.length||w?(0,n.jsxs)(dS,{
              children:[j.map((e,t)=>{
                let i=e===h;
                return(0,n.jsxs)(dI,{
                  "aria-selected":i,
                  onClick:()=>c(s,":".concat(e)),
                  type:"button",
                  children:[e,i?(0,n.jsx)(db,{}):null]
                },t)
              }),w?(0,n.jsxs)(dI,{
                "aria-selected":!0,
                onClick:()=>c(s),
                type:"button",
                children:[h,(0,n.jsx)(db,{})]
              }):null]
            }):null,d.length||v?null:(0,n.jsxs)(dw,{
              children:["You haven’t created any parameter yet.",(0,n.jsx)("br",{}),"Enter a name to save and reuse later (e.g. productID)."]
            }),v||f?null:(0,n.jsx)(dw,{
              children:"Start typing to create a new parameter or find one you’ve already saved (e.g., productID)."
            }),k?(0,n.jsxs)(dk,{
              children:["Create parameter ",(0,n.jsxs)("b",{
                children:["“",v,"”"]
              })," ",(0,n.jsx)("i",{
                children:"Press enter"
              })]
            }):null,(0,n.jsx)(dj,{}),(0,n.jsxs)(dz,{
              "aria-disabled":S,
              children:[(0,n.jsx)("input",{
                type:"checkbox",
                checked:m,
                onChange:Z
              }),(0,n.jsx)("span",{}),"Use a wildcard (*) instead of naming this parameter"]
            })]
          })
        }),
        children:(0,n.jsx)(dy,{
          type:"button",
          "data-selected":f,
          disabled:i,
          "data-is-hash":o,
          "data-is-last":p,
          "data-separator":u,
          children:r
        })
      })
    });
    let dF=m.default.div.withConfig({
      componentId:"sc-43bfcc4e-0"
    })(["display:flex;flex-wrap:wrap;gap:",";"],v.r.spacing(1.5,2.5)),
    dP=m.default.div.withConfig({
      componentId:"sc-43bfcc4e-1"
    })(["display:flex;flex-direction:column;gap:",";"],v.r.spacing(1.25)),
    dE=m.default.div.withConfig({
      componentId:"sc-43bfcc4e-2"
    })(["font-size:",";color:",";"],v.r.fontSize(1.2),v.r.colors.error500.toString()),
    dM=m.default.div.withConfig({
      componentId:"sc-43bfcc4e-3"
    })(["display:flex;align-items:center;gap:",";background:",";border-radius:4px;padding:",";line-height:14px;font-size:",";color:",";"],v.r.spacing(1.25),v.r.colors.surface05.toString(),v.r.spacing(.625,1),v.r.fontSize(1.2),v.r.colors.surface400.toString());
    var dR=a.memo(e=>{
      let{
        allParameters:t,
        getPopupContainer:i
      }=e,
      {
        watch:o,
        setValue:l
      }=(0,ds.Gc)(),
      r=o("originalUrl"),
      s=o("pattern"),
      c=a.useMemo(()=>{
        try{
          let e=new URL(r);
          return new URL("".concat(e.origin,"/").concat(s)).hash.length>0
        }
        catch(e){
          return!1
        }
      },[r,s]),
      d=a.useMemo(()=>{
        try{
          let e=new URL(r),
          t=e.pathname.endsWith("/")&&"/"!==e.pathname?"/":"",
          i=e.hash.startsWith("#/")?"#/":"#";
          return"".concat(t).concat(i)
        }
        catch(e){
          return"#"
        }
      },[r]),
      [,p]=a.useMemo(()=>df(r,c),[r,c]),
      u=a.useMemo(()=>p.indexOf("#"),[p]),
      h=a.useRef(p);
      a.useEffect(()=>{
        h.current=p
      },[p]);
      let f=a.useRef(u);
      a.useEffect(()=>{
        f.current=u
      },[u]);
      let m=a.useCallback((e,t)=>{
        let i=new URL(r),
        n=new URL("".concat(i.origin,"/").concat(s)),
        a=n.pathname.slice(1).split("/").filter(e=>e),
        o=n.hash?n.hash.slice(1).split("/").filter(e=>e):[],
        c=f.current;
        if(-1===c){
          a[e]=t||h.current[e],
          l("pattern",a.join("/"));
          return
        }
        let d=[...a,"#",...o];
        d[e]=t||h.current[e];
        let p=d.slice(0,c),
        u=d.slice(c+1),
        m=n.hash.startsWith("#/")?"#/":"#",
        v=u.length?"".concat(m).concat(u.join("/")):"#";
        l("pattern","".concat(p.join("/")).concat(v))
      },[r,s,l]),
      v=a.useMemo(()=>{
        if(!s)return[];
        try{
          let[e,...t]=s.split("#"),
          i=e.split("/").filter(e=>e);
          if(0===t.length)return i;
          let n=t.join("#").split("/").filter(e=>e);
          return[...i,"#",...n]
        }
        catch(e){
          return[]
        }
      },[s]),
      g=!p.length,
      x=a.useMemo(()=>v.filter(e=>"*"===e||e.startsWith(":")||"***"===e).length>=5,[v]);
      return g?(0,n.jsx)(I.CS,{
        disabled:!0
      }):(0,n.jsxs)(dP,{
        children:[(0,n.jsx)(dF,{
          children:p.map((e,a)=>{
            if("#"===e)return null;
            let o=v[a]||"",
            l="*"===o||o.startsWith(":")||"***"===o,
            r="#"===p[a+1];
            return(0,n.jsx)(d_,{
              patternPart:o,
              part:e,
              disabled:!l&&x,
              isHash:!1,
              getPopupContainer:i,
              index:a,
              handlePartChange:m,
              allParameters:t,
              isLast:a===p.length-1,
              separator:r?d:"/"
            },a)
          })
        }),x?(0,n.jsx)(dE,{
          children:"You can pick up to 5 unique parameters per URL."
        }):null,(0,n.jsxs)(dM,{
          children:[(0,n.jsx)(du.sz,{}),(0,n.jsx)("span",{
            children:"Named parameter will be saved as page properties that can be used on page analytics."
          })]
        })]
      })
    });
    let dN=m.default.div.withConfig({
      componentId:"sc-f21f56cc-0"
    })(["display:flex;background:",";border-radius:6px;padding:",";line-height:28px;font-size:",";color:",";b{font-weight:700;color:",";}"],v.r.colors.primary05.toString(),v.r.spacing(0,1),v.r.fontSize(1.2),v.r.colors.surface300.toString(),v.r.colors.primary400.toString());
    var dA=a.memo(()=>{
      let{
        watch:e
      }=(0,ds.Gc)(),
      t=e("pattern"),
      i=e("originalUrl"),
      {
        parts:o,
        hashLeadingSlash:l
      }=a.useMemo(()=>{
        if(!t)return{
          parts:[],
          hashLeadingSlash:""
        };
        try{
          let e=new URL(i),
          n=new URL("".concat(e.origin,"/").concat(t)),
          a=n.pathname.slice(1).split("/");
          n.hash&&a.push(...n.hash.split("/"));
          let o=e.pathname.endsWith("/")&&"/"!==e.pathname?"/":"";
          return{
            parts:a,
            hashLeadingSlash:o
          }
        }
        catch(e){
          return{
            parts:[],
            hashLeadingSlash:""
          }
        }
      },[t,i]);
      return(0,n.jsx)(dN,{
        children:o.map((e,t,i)=>{
          let o=e.startsWith("#"),
          r=o?e.slice(1):e,
          s=r.replace("**",""),
          c=i[t+1],
          d="string"==typeof c&&!c.startsWith("#"),
          p="*"===s||s.startsWith(":"),
          u=r.endsWith("**");
          return(0,n.jsxs)(a.Fragment,{
            children:[o?"".concat(l,"#"):null,p?(0,n.jsx)("b",{
              children:"*"===s?s:"{".concat(s.substring(1),"}")
            }):s,u?(0,n.jsx)("b",{
              children:"**"
            }):null,d?(0,n.jsx)("span",{
              children:"/"
            }):null]
          },t)
        })
      })
    }),
    dD=e=>(0,n.jsx)("svg",{
      width:11,
      height:6,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        d:"m1.668 4.974 3.888-3.948 3.888 3.948",
        stroke:"#454B5D",
        strokeWidth:2,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    }),
    dT=e=>(0,n.jsx)("svg",{
      width:10,
      height:10,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        d:"M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0Zm0 9.385C2.588 9.385.625 7.412.625 5A4.38 4.38 0 0 1 5 .625 4.38 4.38 0 0 1 9.375 5c0 2.412-1.963 4.385-4.375 4.385ZM6.995 3.17 4.062 6.122 2.74 4.802a.313.313 0 0 0-.442.441L3.845 6.79a.313.313 0 0 0 .48-.045l3.113-3.133a.313.313 0 0 0-.443-.442Z",
        fill:"#32BF8A"
      })
    }),
    dL=e=>(0,n.jsx)("svg",{
      width:10,
      height:10,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M.584 5a4.415 4.415 0 1 1 8.83 0 4.415 4.415 0 0 1-8.83 0Zm4.415-3.782a3.782 3.782 0 1 0 0 7.564 3.782 3.782 0 0 0 0-7.564Zm1.57 2.213a.333.333 0 0 1 0 .472L5.47 5l1.098 1.097a.334.334 0 1 1-.472.472L4.999 5.471 3.902 6.57a.334.334 0 0 1-.472-.472L4.528 5 3.43 3.903a.334.334 0 0 1 .472-.472l1.097 1.098L6.097 3.43a.333.333 0 0 1 .472 0Z",
        fill:"#F4584C"
      })
    });
    let dO=m.default.div.withConfig({
      componentId:"sc-eba1b545-0"
    })(["display:flex;flex-direction:column;border:1px solid ",";border-radius:4px;padding:",";gap:",";"],v.r.colors.surface10.toString(),v.r.spacing(1,1.25),v.r.spacing(1.25)),
    dU=m.default.div.withConfig({
      componentId:"sc-eba1b545-1"
    })(["font-size:",";font-weight:500;line-height:",";color:",";"],v.r.fontSize(1.2),v.r.fontSize(1.4),v.r.colors.surface500.toString()),
    dV=m.default.div.withConfig({
      componentId:"sc-eba1b545-2"
    })(["display:none;flex-direction:column;gap:",';&[data-open="true"]{display:flex;}'],v.r.spacing(1.25)),
    dB=m.default.div.withConfig({
      componentId:"sc-eba1b545-3"
    })(["display:flex;gap:",';justify-content:space-between;align-items:center;cursor:pointer;i{transform:rotate(180deg);transition:transform 0.3s;}&[data-open="true"]{i{transform:rotate(0deg);}}'],v.r.spacing(2)),
    dK=m.default.p.withConfig({
      componentId:"sc-eba1b545-4"
    })(["margin:0;font-size:",";line-height:",";color:",";"],v.r.fontSize(1),v.r.fontSize(1.6),v.r.colors.surface400.toString()),
    dW=m.default.div.withConfig({
      componentId:"sc-eba1b545-5"
    })(["display:flex;gap:",";align-items:center;font-size:",";line-height:",";color:",";"],v.r.spacing(1.25),v.r.fontSize(1),v.r.fontSize(1.2),v.r.colors.surface300.toString()),
    dq=m.default.div.withConfig({
      componentId:"sc-eba1b545-6"
    })(["display:flex;align-items:center;gap:",";"],v.r.spacing(1.25)),
    dQ=(0,m.default)(I.zx).withConfig({
      componentId:"sc-eba1b545-7"
    })(['&[data-size="large"]{height:28px;width:86px;min-width:86px;}']);
    var dH=a.memo(e=>{
      let{
        isEdit:t
      }=e,
      [i,o]=a.useState(),
      {
        watch:l
      }=(0,ds.Gc)(),
      s=l("pattern"),
      [c,d]=a.useState(""),
      p=a.useRef(c);
      a.useEffect(()=>{
        p.current=c
      },[c]);
      let[u,h]=a.useState(!1);
      a.useEffect(()=>{
        s||h(!1)
      },[s]);
      let f=a.useCallback(e=>{
        d(e.target.value)
      },[]),
      m=a.useCallback(()=>{
        h(e=>!e)
      },[]),
      v=(0,r.I0)(),
      g=a.useCallback(()=>{
        if(v((0,k.CW)(null,{
          eventName:"wa_page_definitions_test_rule",
          track_type:"event",
          eventProperty:{
            position:t?"edit_rule_modal":"create_rule_modal"
          }
        })),!p.current)return o("invalidUrl");
        try{
          if(new URL(p.current),dx(s)(p.current))return o("success");
          return o("error")
        }
        catch(e){
          return o("invalidUrl")
        }
      },[v,t,s]);
      return(0,n.jsxs)(dO,{
        children:[(0,n.jsxs)(dB,{
          "data-open":u,
          onClick:m,
          children:[(0,n.jsx)(dU,{
            children:"Test rules (optional)"
          }),(0,n.jsx)("i",{
            children:(0,n.jsx)(dD,{})
          })]
        }),(0,n.jsxs)(dV,{
          "data-open":u,
          children:[(0,n.jsx)(dK,{
            children:"Enter a URL to evaluate against the rules. The results will indicate if the URL matches or not. You can test as many URLs as you want."
          }),(0,n.jsxs)(dq,{
            children:[(0,n.jsx)(I.CS,{
              onChange:f,
              value:c,
              placeholder:"Enter URL to evaluate against rules"
            }),(0,n.jsx)(dQ,{
              variant:"secondary",
              type:"button",
              size:"large",
              inline:!0,
              onClick:g,
              children:"Test"
            })]
          }),"invalidUrl"===i?(0,n.jsxs)(dW,{
            children:[(0,n.jsx)(dL,{}),"Invalid URL. Please enter a valid URL."]
          }):null,"error"===i?(0,n.jsxs)(dW,{
            children:[(0,n.jsx)(dL,{}),"This URL does not match your rule. It will not be grouped under this page name."]
          }):null,"success"===i?(0,n.jsxs)(dW,{
            children:[(0,n.jsx)(dT,{}),"This URL matches your rule. It will be grouped under this page name."]
          }):null]
        })]
      })
    });
    let dY=(0,m.default)(I.zx).withConfig({
      componentId:"sc-84c76376-0"
    })(['&[data-inline="true"]{width:min( 100%,130px ) !important;}']),
    dG=(0,m.default)(es.default).withConfig({
      componentId:"sc-84c76376-1"
    })([".ant-modal-content{border-radius:8px;min-height:180px;}.ant-modal-footer{border-top:none;padding:0;}"]),
    d$=m.default.div.withConfig({
      componentId:"sc-84c76376-2"
    })(["display:flex;justify-content:space-between;"]),
    dJ=m.default.div.withConfig({
      componentId:"sc-84c76376-3"
    })(["font-size:18px;font-weight:500;"]),
    dX=m.default.div.withConfig({
      componentId:"sc-84c76376-4"
    })(["display:flex;flex-direction:column;gap:",";font-size:12px;line-height:16px;color:#090F19;p{margin:0;}"],v.r.spacing(.5)),
    d0=m.default.div.withConfig({
      componentId:"sc-84c76376-5"
    })(["display:flex;flex-direction:column;gap:",";"],v.r.spacing(2)),
    d1=m.default.form.withConfig({
      componentId:"sc-84c76376-6"
    })(["display:flex;flex-direction:column;gap:",";"],v.r.spacing(1.5)),
    d2=m.default.div.withConfig({
      componentId:"sc-84c76376-7"
    })(["display:flex;flex-direction:column;gap:",";"],v.r.spacing(1)),
    d3=m.default.label.withConfig({
      componentId:"sc-84c76376-8"
    })(["display:flex;flex-direction:column;font-weight:500;font-size:",';&[data-disabled="true"]{color:#A2A5AE;}'],v.r.fontSize(1.2)),
    d4=m.default.label.withConfig({
      componentId:"sc-84c76376-9"
    })(["display:inline-flex;gap:",";> input:disabled + span{color:",";}"],v.r.spacing(1),v.r.colors.surface300.toString()),
    d5=m.default.div.withConfig({
      componentId:"sc-84c76376-10"
    })(["display:flex;justify-content:flex-end;gap:",";margin-top:",";"],v.r.spacing(2),v.r.spacing(2)),
    d6=m.default.div.withConfig({
      componentId:"sc-84c76376-11"
    })(["font-size:",";color:",";margin-top:",";"],v.r.fontSize(1.2),v.r.colors.error500.toString(),v.r.spacing(-.5)),
    d7=m.default.div.withConfig({
      componentId:"sc-84c76376-12"
    })(["display:flex;align-items:center;gap:",";padding:",";background:#FEEEED;font-size:",";border-radius:4px;color:",";"],v.r.spacing(1.25),v.r.spacing(1),v.r.fontSize(1.2),v.r.colors.surface400.toString()),
    d8=m.default.div.withConfig({
      componentId:"sc-84c76376-13"
    })(["display:inline-flex;justify-content:center;align-items:center;vertical-align:middle;width:14px;height:14px;border-radius:50%;font-size:12px;margin-left:4px;cursor:default;background:",";color:",";"],v.r.colors.surface10.toString(),v.r.colors.surface500.toString()),
    d9=(0,m.default)(I.CS).withConfig({
      componentId:"sc-84c76376-14"
    })(['&[aria-invalid="true"]{border-color:',";}"],v.r.colors.error500.toString()),
    pe=dc.Ry().shape({
      originalUrl:dc.Z_().url().required(),
      pattern:dc.Z_().required(),
      pageName:dc.Z_().required()
    }),
    pt={
      originalUrl:"",
      pattern:"",
      pageName:""
    },
    pi=e=>{
      let{
        onClose:t,
        ruleId:i,
        allParameters:l,
        activeRulesQueryRef:s,
        cleanUpRef:c
      }=e,
      {
        query:d
      }=(0,o.useRouter)(),
      [p,u]=a.useState(),
      h=a.useCallback(()=>{
        setTimeout(()=>{
          u(void 0)
        },300)
      },[]);
      a.useEffect(()=>{
        c.current=h
      },[h,c]);
      let f=a.useMemo(()=>["pageRule",i||"new"],[i]),
      m=a.useCallback(async()=>{
        if(!i)return pt;
        let{
          app:e
        }=d,
        {
          _id:t,
          pageName:n,
          originalUrl:a,
          patternUrl:o,
          order:l
        }=(await fetch("".concat("https://das-api.uxcam.com","/app/").concat(e,"/page-definition-setting/").concat(i,"/"),{
          credentials:"include"
        }).then(e=>e.json())).data;
        return{
          id:t,
          originalUrl:a,
          pattern:o,
          pageName:n,
          order:l
        }
      },[i,d]),
      v=(0,ei.useQuery)(f,{
        queryFn:m,
        suspense:!0,
        staleTime:1/0
      }).data||pt,
      g=dd(pe),
      x=(0,ds.cI)({
        defaultValues:pt,
        resolver:g
      }),
      {
        watch:b,
        setValue:y,
        handleSubmit:w,
        reset:Z,
        formState:{
          errors:C
        }
      }=x;
      a.useEffect(()=>{
        Z(v),
        setTimeout(()=>{
          y("pattern",v.pattern),
          y("originalUrl",v.originalUrl)
        },0)
      },[v,Z,y]);
      let S=b("pattern"),
      z=b("originalUrl");
      a.useEffect(()=>{
        !S&&z&&y("pattern",dg(z).substring(1))
      },[z,S,y]),
      a.useEffect(()=>{
        z&&z!==v.originalUrl&&y("pattern",dg(z).substring(1))
      },[y,z,v.originalUrl]);
      let _=a.useMemo(()=>{
        try{
          return new URL(z).hash
        }
        catch(e){
          return!1
        }
      },[z]),
      F=a.useMemo(()=>{
        if(!S)return!1;
        try{
          let e=new URL(z);
          return new URL("".concat(e.origin,"/").concat(S)).pathname.endsWith("**")
        }
        catch(e){
          return!1
        }
      },[S,z]),
      P=a.useCallback(e=>{
        let{
          checked:t
        }=e.target,
        i=new URL(z),
        {
          pathname:n,
          hash:a
        }=new URL("".concat(i.origin,"/").concat(S));
        t?y("pattern","".concat(n.slice(1),"**").concat(a)):y("pattern","".concat(n.slice(1,-2)).concat(a))
      },[S,y,z]),
      E=a.useMemo(()=>{
        try{
          let e=new URL(z);
          return new URL("".concat(e.origin,"/").concat(S)).hash.length>0
        }
        catch(e){
          return!1
        }
      },[z,S]),
      M=a.useCallback(()=>{
        let e=S;
        try{
          let t=new URL(z),
          i=new URL("https://example.com/".concat(S)),
          n=i.hash.length>0,
          a=t.hash;
          e=n?i.pathname.substring(1):"".concat(i.pathname.substring(1)).concat(a)
        }
        catch(e){}y("pattern",e)
      },[z,S,y]);
      a.useEffect(()=>{
        for(let[e]of Object.entries(C)){
          let t=document.querySelector('[name="'.concat(e,'"]'));
          if(t){
            t.focus();
            break
          }
        }
      },[C]);
      let R=a.useMemo(()=>Array.from(new Set(l.concat(dm(S)))),[l,S]),
      N=a.useRef(null),
      A=a.useCallback(()=>N.current||document.body,[]),
      [D,T]=a.useState(!1),
      L=(0,ei.useQueryClient)(),
      O=(0,r.I0)();
      (0,a.useEffect)(()=>{
        (null==v?void 0:v.id)&&O((0,k.CW)(null,{
          eventName:"wa_page_definitions_edit_rule",
          track_type:"event"
        }))
      },[O,null==v?void 0:v.id]);
      let U=a.useCallback(e=>{
        T(!0);
        let{
          id:i,
          pattern:n,
          originalUrl:a,
          pageName:o,
          order:l
        }=e,
        r="".concat("https://das-api.uxcam.com","/app/").concat(d.app,"/page-definition-setting/").concat(i?"".concat(i,"/"):"");
        i&&v.originalUrl===a&&v.pattern===n&&v.pageName===o&&t(),
        fetch(r,{
          method:i?"PATCH":"POST",
          body:JSON.stringify({
            id:i,
            patternUrl:n,
            originalUrl:a,
            pageName:o,
            order:void 0===l?s.current.data.length+1:l,
            appId:d.app
          }),
          headers:{
            "Content-Type":"application/json"
          },
          credentials:"include"
        }).then(e=>e.json()).then(e=>{
          u({
            isEdit:!!i,
            pageName:e.data.pageName
          }),
          s.current.refetch().then(()=>{
            L.invalidateQueries(["pageRule",e.data._id||"new"])
          });
          let t={
            rule_id:i||e.data._id,
            rule_name:o,
            parameter_defined:R.length>0,
            wildcard:n.includes("/*/"),
            ignore_end:n.includes("**"),
            paramenter_named:n.includes(":"),
            fragments:n.substring(1).includes("#")
          };
          O((0,k.CW)(null,{
            eventName:v.id?"wa_page_definitions_rule_updated":"wa_page_definitions_rule_created",
            track_type:"event",
            eventProperty:t
          }))
        }).finally(()=>{
          T(!1)
        })
      },[d.app,R.length,O,v.id,v.originalUrl,v.pattern,v.pageName,s,t,L]);
      return(0,n.jsx)(ds.RV,{
        ...x,
        children:(0,n.jsx)(d0,{
          ref:N,
          children:p?(0,n.jsxs)(n.Fragment,{
            children:[(0,n.jsx)(d$,{
              children:(0,n.jsx)(dJ,{
                children:"URL Page Rule created successfully."
              })
            }),(0,n.jsxs)("p",{
              children:["New sessions containing URLs that match the pattern will be defined as ",(0,n.jsx)("b",{
                children:p.pageName
              }),"."]
            }),(0,n.jsx)(d5,{
              children:(0,n.jsx)(dY,{
                type:"button",
                variant:"primary",
                size:"large",
                onClick:t,
                inline:!0,
                children:"Ok"
              })
            })]
          }):(0,n.jsxs)(n.Fragment,{
            children:[(0,n.jsx)(d$,{
              children:(0,n.jsxs)(dJ,{
                children:[v.id?"Edit":"Create"," URL match rule"]
              })
            }),v.id?(0,n.jsxs)(d7,{
              children:[(0,n.jsx)(dp,{}),(0,n.jsx)("span",{
                children:"When changing page definition, new rules will only be applied to future sessions, changes are not retroactive"
              })]
            }):null,(0,n.jsxs)(dX,{
              children:[(0,n.jsx)("p",{
                children:"Enter the URL, select dynamic sections, and name the page to simplify reporting by grouping similar URLs."
              }),(0,n.jsxs)("p",{
                children:["Rules are not retroactive; new page definitions will be applied to future sessions.",(0,n.jsx)(j.Z,{
                  overlay:(0,n.jsx)(n.Fragment,{
                    children:'Please note that query parameters are ignored when matching the URL against the defined patterns and can"t be used to define page rules'
                  }),
                  children:(0,n.jsx)(d8,{
                    children:"?"
                  })
                })]
              })]
            }),(0,n.jsxs)(d1,{
              onSubmit:w(U),
              children:[(0,n.jsxs)(d2,{
                children:[(0,n.jsx)(d3,{
                  children:"Enter URL"
                }),(0,n.jsx)(ds.Qr,{
                  name:"originalUrl",
                  render:e=>{
                    let{
                      field:t
                    }=e;
                    return(0,n.jsxs)(n.Fragment,{
                      children:[(0,n.jsx)(d9,{
                        "aria-invalid":!!C.originalUrl,
                        disabled:!!i,
                        ...t
                      }),C.originalUrl?(0,n.jsx)(d6,{
                        children:"Must be a valid URL"
                      }):null]
                    })
                  }
                }),(0,n.jsxs)(d4,{
                  children:[(0,n.jsx)("input",{
                    type:"checkbox",
                    disabled:!_,
                    checked:E,
                    onChange:M
                  }),(0,n.jsx)("span",{
                    children:"My URL includes fragments"
                  })]
                })]
              }),(0,n.jsxs)(d2,{
                children:[(0,n.jsx)(d3,{
                  children:"Select which parts of the URL are dynamic"
                }),(0,n.jsx)(dR,{
                  allParameters:R,
                  getPopupContainer:A
                })]
              }),(0,n.jsxs)(d2,{
                children:[(0,n.jsx)(d3,{
                  "data-disabled":!S,
                  children:"URL Match Pattern"
                }),(0,n.jsx)(dA,{})]
              }),(0,n.jsx)(d2,{
                children:(0,n.jsxs)(d4,{
                  children:[(0,n.jsx)("input",{
                    disabled:!S,
                    onChange:P,
                    type:"checkbox",
                    checked:F
                  }),(0,n.jsx)("span",{
                    children:"Ignore everything after the last part of the URL path you entered"
                  })]
                })
              }),(0,n.jsxs)(d2,{
                children:[(0,n.jsx)(d3,{
                  children:"Define page name"
                }),(0,n.jsx)(ds.Qr,{
                  name:"pageName",
                  render:e=>{
                    let{
                      field:t
                    }=e;
                    return(0,n.jsx)(I.CS,{
                      ...t
                    })
                  }
                })]
              }),(0,n.jsx)(dH,{
                isEdit:!!(null==v?void 0:v.id)
              }),(0,n.jsxs)(d5,{
                children:[(0,n.jsx)(dY,{
                  type:"button",
                  variant:"ghost",
                  size:"large",
                  inline:!0,
                  onClick:t,
                  children:"Cancel"
                }),(0,n.jsx)(dY,{
                  type:"submit",
                  variant:"primary",
                  inline:!0,
                  size:"large",
                  disabled:D,
                  children:"Save"
                })]
              })]
            })]
          })
        })
      })
    },
    pn=a.memo(e=>{
      let{
        ruleId:t,
        open:i,
        onClose:o,
        allParameters:l,
        activeRulesQueryRef:r
      }=e,
      s=a.useRef();
      t="new"===t?null:t;
      let c=a.useCallback(()=>{
        s.current&&s.current(),
        o()
      },[o]);
      return(0,n.jsx)(dG,{
        visible:i,
        footer:null,
        onCancel:c,
        width:700,
        closable:!1,
        centered:!0,
        children:(0,n.jsx)(a.Suspense,{
          fallback:(0,n.jsx)("div",{
            children:(0,n.jsx)(I.$j,{
              "data-size":"m"
            })
          }),
          children:(0,n.jsx)(pi,{
            open:i,
            onClose:c,
            ruleId:t,
            allParameters:l,
            activeRulesQueryRef:r,
            cleanUpRef:s
          },"".concat(t,"-").concat(i))
        })
      })
    });
    var pa=a.memo(pn);
    let po=m.default.div.withConfig({
      componentId:"sc-ebef2452-0"
    })(["display:flex;justify-content:space-between;"]),
    pl=m.default.div.withConfig({
      componentId:"sc-ebef2452-1"
    })(["font-size:18px;font-weight:500;"]),
    pr=m.default.div.withConfig({
      componentId:"sc-ebef2452-2"
    })(["background:",";padding:",";margin:",";"],v.r.colors.surface05.toString(),v.r.spacing(1.5),v.r.spacing(2,0,4)),
    ps=m.default.div.withConfig({
      componentId:"sc-ebef2452-3"
    })(["display:flex;flex-direction:column;gap:",";"],v.r.spacing(1)),
    pc=m.default.ul.withConfig({
      componentId:"sc-ebef2452-4"
    })(["display:flex;flex-direction:column;gap:",";padding:",";> li{position:relative;line-height:",";font-size:",";&:before{content:'';position:absolute;top:50%;left:",";width:4px;height:4px;background:",";border-radius:50%;transform:translateY( -50% );}}"],v.r.spacing(1),v.r.spacing(0,0,0,4),v.r.fontSize(1.4),v.r.fontSize(1.2),v.r.spacing(-2),v.r.colors.surface300.toString()),
    pd=m.default.div.withConfig({
      componentId:"sc-ebef2452-5"
    })(["display:flex;font-size:",";position:relative;&:before{content:'';position:absolute;width:8px;height:8px;background:",";border-radius:50%;top:50%;transform:translateY( -50% );left:-14px;}"],v.r.fontSize(1.2),v.r.colors.surface200.toString()),
    pp=m.default.div.withConfig({
      componentId:"sc-ebef2452-6"
    })(["display:flex;flex-direction:column;position:relative;padding:",";max-height:396px;overflow-y:auto;"],v.r.spacing(0,0,0,1.75)),
    pu=m.default.div.withConfig({
      componentId:"sc-ebef2452-7"
    })(["display:flex;flex-direction:column;gap:",";position:relative;color:",";&:before{content:'';position:absolute;top:6px;left:-11px;width:2px;height:calc( 100% - 6px );background:",";}"],v.r.spacing(3),v.r.colors.surface300.toString(),v.r.colors.surface10.toString()),
    ph=m.default.div.withConfig({
      componentId:"sc-ebef2452-8"
    })(["display:flex;flex-direction:column;gap:",";padding:",";border-top:1px solid ",";&:first-child{padding-top:0;border-top:none;}"],v.r.spacing(1),v.r.spacing(1.5,0),v.r.colors.surface10.toString()),
    pf=(0,m.default)(es.default).withConfig({
      componentId:"sc-ebef2452-9"
    })([".ant-modal-body{padding:",";}.ant-modal-content{border-radius:8px;}.ant-modal-footer{border-top:none;padding:0;}"],v.r.spacing(4)),
    pm=m.default.div.withConfig({
      componentId:"sc-ebef2452-10"
    })(["display:flex;justify-content:flex-end;"]);
    var pv=a.memo(e=>{
      let{
        open:t,
        onClose:i
      }=e,
      {
        query:l
      }=(0,o.useRouter)(),
      r=a.useCallback(()=>{
        let{
          app:e
        }=l;
        return fetch("".concat("https://das-api.uxcam.com","/app/").concat(e,"/page-definition-setting/logs/"),{
          credentials:"include"
        }).then(e=>e.json())
      },[l]),
      s=(0,ei.useQuery)("changelog",{
        queryFn:r,
        suspense:!0,
        staleTime:1/0
      });
      a.useEffect(()=>{
        t&&s.refetch()
      },[t,s]);
      let c=a.useMemo(()=>{
        var e;
        return Object.entries(((null===(e=s.data)||void 0===e?void 0:e.data)||[]).reduce((e,t)=>{
          let i=new Date(t.actionOn).toLocaleString("en-US",{
            year:"numeric",
            month:"short",
            day:"numeric"
          });
          return e[i]||(e[i]=[]),
          e[i].push(t),
          e
        },{}))
      },[s.data]),
      d=a.useCallback(e=>{
        switch(e){
          case"created":return"Created";
          case"updated":return"Updated";
          case"archived":return"Archived";
          default:return"Unknown"
        }
      },[]);
      return(0,n.jsxs)(pf,{
        visible:t,
        footer:null,
        onCancel:i,
        width:700,
        centered:!0,
        closable:!1,
        children:[(0,n.jsx)(po,{
          children:(0,n.jsx)(pl,{
            children:"Page definition Changelog"
          })
        }),(0,n.jsx)(pr,{
          children:(0,n.jsx)(pp,{
            children:(0,n.jsx)(pu,{
              children:c.map((e,t)=>{
                let[i,a]=e;
                return(0,n.jsxs)(ps,{
                  children:[(0,n.jsx)(pd,{
                    children:i
                  }),(0,n.jsx)("div",{
                    children:a.map((e,t)=>{
                      let i="archived"===e.actionPerformed,
                      a="created"===e.actionPerformed,
                      o=!i&&e.patternUrlOld&&e.patternUrlOld!==e.patternUrl,
                      l=!i&&e.pageNameOld&&e.pageNameOld!==e.pageName;
                      return(0,n.jsxs)(ph,{
                        children:[(0,n.jsxs)("div",{
                          children:[d(e.actionPerformed)," Page definition rule | ",e.actionByEmail]
                        }),(0,n.jsxs)(pc,{
                          children:[a||i?(0,n.jsxs)("li",{
                            children:["Pattern: ",(0,n.jsx)("b",{
                              children:dv(e.patternUrl,!1)
                            })]
                          }):null,o?(0,n.jsxs)("li",{
                            children:["Pattern changed from: ",(0,n.jsx)("b",{
                              children:dv(e.patternUrlOld,!1)
                            })," to ",(0,n.jsx)("b",{
                              children:dv(e.patternUrl,!1)
                            })]
                          }):null,a||i?(0,n.jsxs)("li",{
                            children:["Page Name: ",(0,n.jsx)("b",{
                              children:e.pageName
                            })]
                          }):null,l?(0,n.jsxs)("li",{
                            children:["Page Name changed from: ",(0,n.jsx)("b",{
                              children:e.pageNameOld
                            })," to ",(0,n.jsx)("b",{
                              children:e.pageName
                            })]
                          }):null]
                        })]
                      },t)
                    })
                  })]
                },t)
              })
            })
          })
        }),(0,n.jsx)(pm,{
          children:(0,n.jsx)(I.zx,{
            type:"button",
            variant:"ghost",
            size:"large",
            onClick:i,
            children:"Close"
          })
        })]
      })
    });
    let pg=m.default.div.withConfig({
      componentId:"sc-1fef6c2-0"
    })(["display:flex;justify-content:space-between;"]),
    px=m.default.div.withConfig({
      componentId:"sc-1fef6c2-1"
    })(["font-size:18px;font-weight:500;"]),
    pb=m.default.div.withConfig({
      componentId:"sc-1fef6c2-2"
    })(["display:flex;flex-direction:column;gap:",";"],v.r.spacing(2)),
    py=(0,m.default)(es.default).withConfig({
      componentId:"sc-1fef6c2-3"
    })([".ant-modal-content{border-radius:8px;}.ant-modal-footer{border-top:none;padding:0;}"]),
    pj=m.default.div.withConfig({
      componentId:"sc-1fef6c2-4"
    })(["display:flex;justify-content:flex-end;gap:",";margin-top:",";"],v.r.spacing(2),v.r.spacing(2)),
    pw=m.default.div.withConfig({
      componentId:"sc-1fef6c2-5"
    })(["display:flex;flex-direction:column;gap:",";"],v.r.spacing(1)),
    pZ=m.default.label.withConfig({
      componentId:"sc-1fef6c2-6"
    })(["display:flex;flex-direction:column;font-weight:500;font-size:",";"],v.r.fontSize(1.2)),
    pC=m.default.div.withConfig({
      componentId:"sc-1fef6c2-7"
    })(["display:flex;flex-direction:column;position:relative;gap:",";&:before{content:'';position:absolute;top:0;left:0;width:2px;height:100%;background:",";opacity:0.4;}&:empty{display:none;}"],v.r.spacing(1.5),v.r.colors.surface200.toString()),
    pk=m.default.div.withConfig({
      componentId:"sc-1fef6c2-8"
    })(["display:flex;flex-direction:column;padding:",";"],v.r.spacing(0,0,0,2)),
    pI=m.default.div.withConfig({
      componentId:"sc-1fef6c2-9"
    })(["position:relative;&:before{content:'';width:8px;height:8px;border-radius:50%;position:absolute;background:",";top:50%;left:-19px;transform:translateY( -50% );}"],v.r.colors.surface200.toString()),
    pS=m.default.div.withConfig({
      componentId:"sc-1fef6c2-10"
    })(["padding:",";"],v.r.spacing(0,0,0,6)),
    pz=m.default.p.withConfig({
      componentId:"sc-1fef6c2-11"
    })(["margin:0;"]),
    p_=m.default.div.withConfig({
      componentId:"sc-1fef6c2-12"
    })(["display:flex;flex-direction:column;padding:",";max-height:130px;overflow-y:auto;border-radius:4px;color:",";gap:",";background:",";"],v.r.spacing(1.5),v.r.colors.surface300.toString(),v.r.spacing(2),v.r.colors.surface05.toString()),
    pF=m.default.div.withConfig({
      componentId:"sc-1fef6c2-13"
    })(["font-size:",";line-height:",";"],v.r.fontSize(1.2),v.r.fontSize(2.2));
    var pP=e=>{
      let{
        open:t,
        onClose:i,
        rules:o
      }=e,
      [l,s]=a.useState(""),
      c=a.useMemo(()=>o.map(e=>{
        let t=dx(e.patternUrl);
        return{
          ...e,
          match:t
        }
      }),[o]),
      d=a.useCallback(e=>{
        s(e.target.value)
      },[]),
      [p,u]=a.useState(),
      h=(0,r.I0)(),
      f=a.useCallback(()=>{
        u(c.filter(e=>e.match(l)).map(e=>({
          ...e,
          params:e.match(l)
        }))),
        h((0,k.CW)(null,{
          eventName:"wa_page_definitions_test_rule",
          track_type:"event",
          eventProperty:{
            position:"page"
          }
        }))
      },[c,h,l]),
      m=a.useMemo(()=>{
        try{
          return new URL(l),
          !0
        }
        catch(e){
          return!1
        }
      },[l]),
      v=a.useCallback(()=>{
        u(void 0),
        s("")
      },[]);
      return a.useEffect(()=>{
        t||setTimeout(()=>{
          v()
        },300)
      },[t,v]),
      (0,n.jsx)(py,{
        visible:t,
        footer:null,
        onCancel:i,
        width:700,
        centered:!0,
        closable:!1,
        children:p?(0,n.jsxs)(pb,{
          children:[(0,n.jsx)(pg,{
            children:(0,n.jsx)(px,{
              children:"Your URL matches the following rules:"
            })
          }),(0,n.jsxs)(p_,{
            children:[(0,n.jsxs)("div",{
              children:["URL ",(0,n.jsx)("b",{
                children:l
              }),p.length?(0,n.jsx)("span",{
                children:"\xa0 matched these rules:"
              }):(0,n.jsx)("span",{
                children:"\xa0 does not match any of the rules defined."
              })]
            }),(0,n.jsx)(pC,{
              children:p.map((e,t)=>(0,n.jsxs)(pk,{
                children:[(0,n.jsxs)(pI,{
                  children:["Rule ",t+1,":"]
                }),(0,n.jsxs)(pS,{
                  children:["Pattern: ",(0,n.jsx)("b",{
                    children:dv(e.patternUrl)
                  })]
                }),(0,n.jsxs)(pS,{
                  children:["Page name: ",(0,n.jsx)("b",{
                    children:e.pageName
                  })]
                })]
              },t))
            })]
          }),p.length>1?(0,n.jsx)(pF,{
            children:"Rules are applied from top to bottom. Rule 1 will overrule Rule 2 since it appears first. If a URL matches both rules, the system will apply Rule 1."
          }):null,(0,n.jsxs)(pj,{
            children:[(0,n.jsx)(I.zx,{
              type:"button",
              variant:"ghost",
              size:"large",
              onClick:i,
              children:"Cancel"
            }),(0,n.jsx)(I.zx,{
              type:"button",
              variant:"primary",
              size:"large",
              onClick:v,
              children:"Try another URL"
            })]
          })]
        }):(0,n.jsxs)(pb,{
          children:[(0,n.jsx)(pg,{
            children:(0,n.jsx)(px,{
              children:"Test URL"
            })
          }),(0,n.jsxs)(pz,{
            children:["Enter a URL to evaluate against your rules. The results will indicate if the URL matches any rules. ",(0,n.jsx)("a",{
              target:"_blank",
              rel:"noreferrer",
              href:"https://help.uxcam.com/en/articles/10652702-how-to-set-up-page-definition-in-uxcam",
              children:"Read more"
            })," about rules hierarchy and competing rules."]
          }),(0,n.jsxs)(pw,{
            children:[(0,n.jsx)(pZ,{
              children:"Enter URL"
            }),(0,n.jsx)(I.CS,{
              value:l,
              onChange:d,
              placeholder:"https://www.example.com/products/shoes"
            })]
          }),(0,n.jsxs)(pj,{
            children:[(0,n.jsx)(I.zx,{
              type:"button",
              variant:"ghost",
              size:"large",
              onClick:i,
              children:"Cancel"
            }),(0,n.jsx)(I.zx,{
              type:"button",
              variant:"primary",
              size:"large",
              disabled:!m,
              onClick:f,
              children:"Test"
            })]
          })]
        })
      })
    };
    let pE=(0,m.default)(I.zx).withConfig({
      componentId:"sc-c10e4a12-0"
    })(['&[data-inline="false"]{min-width:min( 130px,100% ) !important;}']),
    pM=m.default.div.withConfig({
      componentId:"sc-c10e4a12-1"
    })(["display:flex;justify-content:space-between;"]),
    pR=m.default.div.withConfig({
      componentId:"sc-c10e4a12-2"
    })(["font-size:18px;font-weight:500;"]),
    pN=m.default.div.withConfig({
      componentId:"sc-c10e4a12-3"
    })(["display:flex;flex-direction:column;gap:",";"],v.r.spacing(2)),
    pA=(0,m.default)(es.default).withConfig({
      componentId:"sc-c10e4a12-4"
    })([".ant-modal-content{border-radius:8px;}.ant-modal-footer{border-top:none;padding:0;}"]),
    pD=m.default.div.withConfig({
      componentId:"sc-c10e4a12-5"
    })(["display:flex;justify-content:flex-end;gap:",";margin-top:",";"],v.r.spacing(2),v.r.spacing(2)),
    pT=m.default.p.withConfig({
      componentId:"sc-c10e4a12-6"
    })(["margin:0;font-size:",";line-height:",";"],v.r.fontSize(1.2),v.r.fontSize(2.4));
    var pL=e=>{
      let{
        open:t,
        onClose:i,
        onConfirm:a
      }=e;
      return(0,n.jsx)(pA,{
        visible:t,
        footer:null,
        onCancel:i,
        width:700,
        centered:!0,
        closable:!1,
        children:(0,n.jsxs)(pN,{
          children:[(0,n.jsx)(pM,{
            children:(0,n.jsx)(pR,{
              children:"Are you sure you want to archive this rule ?"
            })
          }),(0,n.jsx)(pT,{
            children:"Archiving this rule will stop it from being applied to future sessions. However, existing data captured while the rule was active will remain unchanged in your reports. Please note that archived rules cannot be restored and will be permanently deleted after 60 days."
          }),(0,n.jsxs)(pD,{
            children:[(0,n.jsx)(pE,{
              type:"button",
              variant:"ghost",
              size:"large",
              onClick:i,
              children:"Cancel"
            }),(0,n.jsx)(pE,{
              type:"button",
              variant:"primary",
              size:"large",
              onClick:a,
              children:"Archive"
            })]
          })]
        })
      })
    };
    let pO=m.default.div.withConfig({
      componentId:"sc-8c58717-0"
    })(["display:flex;justify-content:space-between;gap:",";"],v.r.spacing(2)),
    pU=m.default.div.withConfig({
      componentId:"sc-8c58717-1"
    })(["display:flex;gap:",";justify-content:flex-end;> button{width:auto !important;min-width:initial !important;}"],v.r.spacing(1)),
    pV=m.default.div.withConfig({
      componentId:"sc-8c58717-2"
    })(["display:flex;flex-direction:column;table tr > th:first-child{padding-left:",";min-width:400px;}"],v.r.spacing(3.5)),
    pB=m.default.div.withConfig({
      componentId:"sc-8c58717-3"
    })(["display:flex;flex-direction:column;gap:",";"],v.r.spacing(3.25)),
    pK=(0,m.default)(e=>(0,n.jsx)("svg",{
      width:6,
      height:10,
      fill:"currentColor",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        d:"M1.282 2.56c.579 0 1.034-.488 1.034-1.074C2.316.9 1.861.41 1.282.41.702.41.247.9.247 1.486c0 .586.456 1.075 1.035 1.075Zm0 7.2c.579 0 1.034-.488 1.034-1.074 0-.586-.455-1.075-1.034-1.075-.58 0-1.035.49-1.035 1.075 0 .586.456 1.075 1.035 1.075Zm3.437-7.2c.578 0 1.034-.488 1.034-1.074C5.753.9 5.297.41 4.719.41c-.58 0-1.035.49-1.035 1.075 0 .586.456 1.075 1.035 1.075Zm0 7.2c.578 0 1.034-.488 1.034-1.074 0-.586-.456-1.075-1.034-1.075-.58 0-1.035.49-1.035 1.075 0 .586.456 1.075 1.035 1.075Zm0-3.6c.578 0 1.034-.488 1.034-1.074 0-.586-.456-1.075-1.034-1.075-.58 0-1.035.49-1.035 1.075 0 .586.456 1.075 1.035 1.075Zm-3.437 0c.579 0 1.034-.488 1.034-1.074 0-.586-.455-1.075-1.034-1.075-.58 0-1.035.49-1.035 1.075 0 .586.456 1.075 1.035 1.075Z",
        stroke:"#fff",
        strokeWidth:.35
      })
    })).withConfig({
      componentId:"sc-8c58717-4"
    })(["display:none;"]),
    pW=m.default.span.withConfig({
      componentId:"sc-8c58717-5"
    })(["display:block;"]),
    pq=m.default.button.withConfig({
      componentId:"sc-8c58717-6"
    })(["display:inline-flex;align-items:center;justify-content:center;appearance:none;min-width:20px;height:20px;border-radius:50%;padding:",";border:none;font-size:",";font-weight:500;cursor:move;&:hover{background:",";color:#fff;","{display:block;}","{display:none;}}"],v.r.spacing(0,.5),v.r.fontSize(1),v.r.colors.primary500.toString(),pK,pW),
    pQ=m.default.div.withConfig({
      componentId:"sc-8c58717-7"
    })(["display:flex;align-items:center;gap:",";"],v.r.spacing(1)),
    pH=m.default.div.withConfig({
      componentId:"sc-8c58717-8"
    })(["display:flex;gap:",";align-items:center;> div{height:24px;}"],v.r.spacing(1)),
    pY=m.default.button.withConfig({
      componentId:"sc-8c58717-9"
    })(["appearance:none;background:transparent;border:none;cursor:pointer;display:inline-flex;width:24px;height:24px;align-items:center;justify-content:center;padding:0;color:#737886;border-radius:4px;&[data-primary='true']{color:",";&:disabled{color:",";}}&:disabled{pointer-events:none;}&:hover{background:",";}&.ant-dropdown-open{background:",";color:",";}"],v.r.colors.primary500.toString(),v.r.colors.surface200.toString(),v.r.colors.primary500.alpha(.1).toString(),v.r.colors.primary500.alpha(.1).toString(),v.r.colors.primary500.toString()),
    pG=m.default.div.withConfig({
      componentId:"sc-8c58717-10"
    })(["color:#A2A5AE;"]),
    p$=m.default.div.withConfig({
      componentId:"sc-8c58717-11"
    })(['display:flex;flex-direction:column;& > div:first-child > div:first-child{min-height:initial !important;}&[data-status="archive"]{tbody tr:not(:hover) td{color:',";}}"],v.r.colors.surface300.toString()),
    pJ=m.default.div.withConfig({
      componentId:"sc-8c58717-12"
    })(["display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;margin:",";"],v.r.spacing(9,0,2)),
    pX=m.default.div.withConfig({
      componentId:"sc-8c58717-13"
    })(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",";width:592px;max-width:100%;"],v.r.spacing(1.5)),
    p0=m.default.div.withConfig({
      componentId:"sc-8c58717-14"
    })(["font-size:",";font-weight:500;color:#000;margin:",";"],v.r.fontSize(1.8),v.r.spacing(1.75,0,0)),
    p1=m.default.div.withConfig({
      componentId:"sc-8c58717-15"
    })(["font-size:",";color:",";margin:",";"],v.r.fontSize(1.2),v.r.colors.surface400.toString(),v.r.spacing(0,0,1)),
    p2=(0,m.default)(I.zx).withConfig({
      componentId:"sc-8c58717-16"
    })(["border:none !important;background:"," !important;&:hover{background:"," !important;}"],v.r.colors.primary10.toString(),v.r.colors.primary100.toString()),
    p3=(0,m.default)(I.zx).withConfig({
      componentId:"sc-8c58717-17"
    })(['&[data-variant="secondary"]{width:32px !important;padding:0 !important;}']),
    p4=m.default.div.withConfig({
      componentId:"sc-8c58717-18"
    })(["display:inline-flex;align-items:center;gap:",";background:",";padding:",";border-radius:4px;color:",";"],v.r.spacing(1.25),v.r.colors.primary10.toString(),v.r.spacing(1),v.r.colors.primary1000.toString()),
    p5=[{
      key:"active",
      label:"Active"
    },{
      key:"archive",
      label:"Archived",
      tooltip:"Archived rules are deleted after 60 days and cannot be recovered."
    }],
    p6=e=>e?new Date(e).toLocaleDateString("en-US",{
      year:"numeric",
      month:"short",
      day:"numeric"
    }):null,
    p7=[{
      accessorKey:"patternUrl",
      cell:e=>{
        let{
          status:t
        }=dr();
        return(0,n.jsxs)(pQ,{
          children:[e.row.original._id&&"active"===t?(0,n.jsx)(I.DU,{
            children:t=>(0,n.jsxs)(pq,{
              type:"button",
              ...t,
              children:[(0,n.jsx)(pK,{
                src:"/static/page-definition/drag-handle.svg",
                alt:"Drag handle"
              }),(0,n.jsx)(pW,{
                children:e.row.original.order
              })]
            })
          }):null,(0,n.jsx)("div",{
            children:dv(e.getValue())
          })]
        })
      },
      header:()=>(0,n.jsx)("span",{
        children:"URL Pattern"
      })
    },{
      accessorKey:"pageName",
      cell:e=>(0,n.jsx)(n.Fragment,{
        children:e.getValue()
      }),
      header:()=>(0,n.jsx)("span",{
        children:"Page name"
      })
    },{
      accessorKey:"createdOn",
      cell:e=>(0,n.jsx)(n.Fragment,{
        children:p6(e.getValue())
      }),
      header:()=>(0,n.jsx)("span",{
        children:"Created on"
      })
    },{
      accessorKey:"updatedOn",
      cell:e=>(0,n.jsx)(n.Fragment,{
        children:p6(e.getValue())
      }),
      header:()=>(0,n.jsx)("span",{
        children:"Last modified"
      })
    },{
      accessorKey:"actions",
      cell(e){
        let{
          getEditLink:t,
          handleArchiveRule:i,
          status:a,
          isManager:o
        }=dr();
        if(!e.row.original._id)return null;
        let{
          asUrl:l,
          href:r
        }=t(e.row.original._id),
        s=!o||"archive"===a;
        return(0,n.jsxs)(pH,{
          children:[s?(0,n.jsx)(pY,{
            "data-primary":!0,
            type:"button",
            disabled:!0,
            children:(0,n.jsx)(c6.Z,{})
          }):(0,n.jsx)(E(),{
            href:r,
            as:l,
            legacyBehavior:!0,
            children:(0,n.jsx)("a",{
              href:l,
              children:(0,n.jsx)(pY,{
                "data-primary":!0,
                type:"button",
                children:(0,n.jsx)(c6.Z,{})
              })
            })
          }),(0,n.jsx)(I.kF,{
            trigger:["click"],
            overlay:(0,n.jsx)(I.hF,{
              children:(0,n.jsx)(I.GP,{
                children:(0,n.jsx)(I.Fw,{
                  onClick:i(e.row.original._id,e.row.original.pageName),
                  children:"Archive rule"
                })
              })
            }),
            children:(0,n.jsx)(pY,{
              type:"button",
              disabled:s,
              children:(0,n.jsx)(c7.Z,{})
            })
          })]
        })
      },
      header:()=>(0,n.jsx)("span",{
        children:"Actions"
      })
    }],
    p8=[],
    p9=e=>{
      let{
        status:t,
        isManager:i
      }=e,
      {
        query:l,
        pathname:s,
        push:c
      }=(0,o.useRouter)(),
      [d,p]=a.useState(),
      u=a.useMemo(()=>l.rule_id||new URLSearchParams(l.url.split("?")[1]||"?").get("rule_id")||null,[l]),
      h=a.useCallback(async e=>{
        let{
          app:t
        }=l;
        return(await fetch("".concat("https://das-api.uxcam.com","/app/").concat(t,"/page-definition-setting/?status=").concat(e),{
          credentials:"include"
        }).then(e=>e.json())).data.map(e=>({
          ...e,
          id:e._id
        }))
      },[l]),
      f=a.useCallback(async()=>h("active"),[h]),
      m=a.useCallback(async()=>h("archive"),[h]),
      v=(0,a.useMemo)(()=>[l.app,"page-definitions",t],[t,l.app]),
      g=(0,a.useMemo)(()=>[l.app,"page-definitions","active"],[l.app]),
      x=(0,a.useMemo)(()=>[l.app,"page-definitions","archive"],[l.app]),
      b=(0,ei.useQuery)(g,{
        queryFn:f,
        suspense:!0,
        staleTime:1/0
      }),
      y=(0,ei.useQuery)(x,{
        queryFn:m,
        suspense:!0,
        staleTime:1/0
      }),
      w="active"===t?b:y,
      Z=(0,a.useMemo)(()=>Array.from(new Set((b.data||[]).concat(y.data||[]).reduce((e,t)=>e.concat(dm(t.patternUrl)),[]))),[b.data,y.data]),
      C=a.useRef(w);
      a.useEffect(()=>{
        C.current=w
      },[w]);
      let S=w.data||p8,
      z=0===S.length&&"active"===t,
      _=(0,a.useMemo)(()=>z?S.concat({
        _id:"",
        order:0,
        patternUrl:(0,n.jsx)(pG,{
          children:"website/{category}/products/{productID}/details"
        }),
        pageName:(0,n.jsx)(pG,{
          children:"Product details page"
        }),
        createdOn:"",
        updatedOn:"",
        createdByEmail:""
      }):S,[S,z]),
      F=a.useRef(_),
      P=a.useRef(b);
      a.useEffect(()=>{
        F.current=_
      },[_]),
      a.useEffect(()=>{
        P.current=b
      },[b]);
      let[E,M]=a.useState(""),
      R=(0,r.I0)();
      a.useEffect(()=>{
        let{
          hash:e
        }=window.location;
        M(e)
      },[l]),
      a.useEffect(()=>{
        "#changelog"===E&&R((0,k.CW)(null,{
          eventName:"wa_page_definitions_view_changelog",
          track_type:"event"
        }))
      },[R,E]);
      let N=(0,a.useMemo)(()=>"#rule-builder"===E,[E]),
      A=(0,a.useMemo)(()=>"#changelog"===E,[E]),
      D=(0,a.useMemo)(()=>"#test-url"===E,[E]),
      T=a.useCallback(()=>{
        let{
          rule_id:e,
          ...t
        }=l;
        c({
          pathname:s,
          query:{
            ...t
          }
        },"".concat(window.location.pathname))
      },[s,c,l]),
      L=a.useCallback(()=>{
        let{
          url:e,
          ...t
        }=l;
        c({
          pathname:s,
          query:{
            ...t
          }
        },"".concat(window.location.pathname))
      },[s,c,l]),
      O=(0,ei.useQueryClient)(),
      U=a.useCallback(e=>{
        let t={
          pageDefinitionSettings:e.map((e,t)=>({
            _id:e._id,
            order:t+1
          }))
        };
        fetch("".concat("https://das-api.uxcam.com","/app/").concat(l.app,"/page-definition-setting/update-order/"),{
          method:"POST",
          body:JSON.stringify(t),
          headers:{
            "Content-Type":"application/json"
          },
          credentials:"include"
        }).then(e=>e.json())
      },[l.app]),
      V=a.useRef(),
      B=a.useCallback(e=>{
        V.current&&clearTimeout(V.current),
        V.current=setTimeout(()=>{
          U(e)
        },500);
        let t=e.reduce((e,t,i)=>(e[t._id]=i+1,e),{}),
        i=F.current.map(e=>({
          ...e,
          order:t[e._id]
        })).sort((e,t)=>e.order-t.order);
        O.setQueryData(v,i)
      },[U,O,v]),
      K=a.useCallback(()=>{
        c({
          pathname:s,
          query:{
            ...l,
            rule_id:"new"
          }
        },"".concat(window.location.pathname,"?rule_id=new#rule-builder")),
        R((0,k.CW)(null,{
          eventName:"wa_page_definitions_click_create_rule",
          track_type:"event"
        }))
      },[s,c,l,R]),
      W=a.useCallback(()=>{
        if(!d)return;
        let{
          app:e
        }=l;
        fetch("".concat("https://das-api.uxcam.com","/app/").concat(e,"/page-definition-setting/").concat(d.id,"/"),{
          method:"DELETE",
          credentials:"include"
        }).finally(()=>{
          O.invalidateQueries([e,"page-definitions","active"]),
          O.invalidateQueries([e,"page-definitions","archive"]),
          p(null),
          R((0,k.CW)(null,{
            eventName:"wa_page_definitions_archive_rule",
            track_type:"event",
            eventProperty:{
              rule_id:d.id,
              rule_name:d.name
            }
          }))
        })
      },[l,O,d,R]),
      q=a.useCallback(()=>{
        p(null)
      },[]);
      return(0,n.jsxs)(pV,{
        children:[(0,n.jsx)(pa,{
          open:N,
          onClose:T,
          ruleId:u,
          allParameters:Z,
          activeRulesQueryRef:P
        }),(0,n.jsx)(pL,{
          open:!!d,
          onConfirm:W,
          onClose:q
        }),(0,n.jsx)(pP,{
          open:D,
          onClose:L,
          rules:b.data||p8
        }),(0,n.jsx)(pv,{
          open:A,
          onClose:T
        }),(0,n.jsx)(dl,{
          status:t,
          onArchive:p,
          isManager:i,
          children:(0,n.jsx)(p$,{
            "data-wrapper":!0,
            "data-status":t,
            children:(0,n.jsx)(I.S5,{
              columns:p7,
              data:_,
              resizeMode:"onEnd",
              draggable:!z,
              onDragEnd:B
            })
          })
        }),z?(0,n.jsx)(pJ,{
          children:(0,n.jsxs)(pX,{
            children:[(0,n.jsx)(dn,{}),(0,n.jsx)(p0,{
              children:"Define your first page URL rule"
            }),(0,n.jsx)(p1,{
              children:"Replace long URLs with shorter page names for clearer reporting, and optionally name dynamic URL parts (like product IDs) for reporting and filtering. Note: Rules are not retroactive and apply only to future sessions."
            }),i?(0,n.jsxs)(I.zx,{
              variant:"secondary",
              type:"button",
              size:"large",
              onClick:K,
              children:[(0,n.jsx)(c8,{}),"Create URL Rule"]
            }):(0,n.jsx)(j.Z,{
              overlay:"You don't have permission to create or edit page rules.",
              children:(0,n.jsx)("span",{
                children:(0,n.jsxs)(I.zx,{
                  variant:"secondary",
                  type:"button",
                  size:"large",
                  disabled:!0,
                  children:[(0,n.jsx)(c8,{}),"Create URL Rule"]
                })
              })
            })]
          })
        }):null]
      })
    };
    var ue=a.memo(()=>{
      let{
        query:e,
        pathname:t,
        push:i
      }=(0,o.useRouter)(),
      l=(0,r.I0)(),
      [s,c]=a.useState("active"),
      d=a.useCallback(()=>{
        i({
          pathname:t,
          query:{
            ...e,
            rule_id:"new"
          }
        },"".concat(window.location.pathname,"?rule_id=new#rule-builder")),
        l((0,k.CW)(null,{
          eventName:"wa_page_definitions_click_create_rule",
          track_type:"event"
        }))
      },[l,t,i,e]),
      p=a.useCallback(()=>{
        i({
          pathname:t,
          query:{
            ...e
          }
        },"".concat(window.location.pathname,"#changelog"))
      },[t,i,e]),
      u=a.useMemo(()=>p5.find(e=>e.key===s)||p5[0],[s]),
      h=a.useCallback(e=>()=>{
        c(e),
        l((0,k.CW)(null,{
          eventName:"wa_page_definitions_list_filter",
          track_type:"event",
          eventProperty:{
            filter:e
          }
        }))
      },[l]),
      f=(0,r.v9)(e=>e.currentAppReducer),
      m=(0,r.v9)(e=>e.profileReducer),
      v=a.useMemo(()=>{
        var e;
        return 0===f.role||1===f.role||["owner","manger"].includes((null===(e=m.organization.find(e=>e.$oid===f.orgId))||void 0===e?void 0:e.role)||"user")
      },[f,m]);
      return(0,n.jsx)(I.Fo,{
        children:(0,n.jsxs)(pB,{
          children:[(0,n.jsx)("div",{
            children:(0,n.jsxs)(p4,{
              children:[(0,n.jsx)(di.Z,{}),(0,n.jsxs)("span",{
                children:["Easily organize your URLs into simple pages by creating rules that group dynamic URLs or define pages using URL fragments. ",(0,n.jsx)("a",{
                  href:"https://help.uxcam.com/en/articles/10652702-define-pages-properties-to-simplify-data",
                  target:"_blank",
                  rel:"noreferrer",
                  children:"Learn more."
                })]
              })]
            })
          }),(0,n.jsxs)(pO,{
            children:[(0,n.jsx)("div",{
              children:(0,n.jsx)(j.Z,{
                overlay:u.tooltip,
                align:{
                  points:["cl","cr"]
                },
                children:(0,n.jsx)(I.kF,{
                  selectorProps:{
                    selectedValue:u.label
                  },
                  trigger:["click"],
                  overlay:(0,n.jsx)(I.hF,{
                    paddingVariant:"vertical",
                    children:(0,n.jsx)(I.GP,{
                      selectedKeys:[u.key],
                      children:p5.map(e=>(0,n.jsx)(I.Fw,{
                        onClick:h(e.key),
                        children:e.label
                      },e.key))
                    })
                  })
                })
              })
            }),(0,n.jsxs)(pU,{
              children:[v?(0,n.jsxs)(I.zx,{
                variant:"primary",
                onClick:d,
                type:"button",
                size:"large",
                children:[(0,n.jsx)(dt,{}),"Create URL Rule"]
              }):(0,n.jsx)(j.Z,{
                overlay:"You don't have permission to create or edit page rules.",
                children:(0,n.jsx)("span",{
                  children:(0,n.jsxs)(I.zx,{
                    variant:"primary",
                    type:"button",
                    size:"large",
                    disabled:!v,
                    children:[(0,n.jsx)(dt,{}),"Create URL Rule"]
                  })
                })
              }),(0,n.jsx)(E(),{
                href:"#test-url",
                legacyBehavior:!0,
                children:(0,n.jsx)("a",{
                  href:"#test-url",
                  children:(0,n.jsxs)(p2,{
                    variant:"secondary",
                    type:"button",
                    size:"large",
                    children:[(0,n.jsx)(c9,{}),"Test URL"]
                  })
                })
              }),(0,n.jsx)(p3,{
                variant:"secondary",
                type:"button",
                size:"large",
                onClick:p,
                children:(0,n.jsx)(de,{})
              })]
            })]
          }),(0,n.jsx)(a.Suspense,{
            fallback:(0,n.jsx)("div",{
              children:(0,n.jsx)(I.$j,{
                "data-size":"m"
              })
            }),
            children:(0,n.jsx)(p9,{
              status:s,
              isManager:v
            })
          })]
        })
      })
    });
    let ut=["app.configuration.create","app.configuration.update"],
    ui=["app.delete"],
    {
      Item:un
    }=h.default,
    ua=m.default.span.withConfig({
      componentId:"sc-2dc9eca1-0"
    })(["display:flex;align-items:center;"]),
    {
      TabPane:uo
    }=f.default,
    ul={
      video_recording_setting:"App setting",
      public_api:"Data access API",
      data_deletion_api:"Data deletion API",
      issue_notification:"Issue notifications",
      smart_events:"Smart events",
      alerts:"Alerts",
      page_definition:"Page definition"
    },
    ur=(0,m.createGlobalStyle)([".manage-nocode-pagination{margin-top:20px;margin-bottom:20px;}.settings-tabs-main > .ant-tabs{border-radius:8px;}"]),
    us=m.default.div.withConfig({
      componentId:"sc-2dc9eca1-1"
    })(["background:#ffffff;position:relative;margin:16px;flex:1;display:flex;flex-direction:column;height:",";margin-bottom:",";.ant-tabs.ant-tabs-top{flex:1;}.ant-tabs-content-holder{display:flex;flex-direction:column;.ant-tabs-content.ant-tabs-content-top{flex:1;.ant-tabs-content.ant-tabs-content-top{display:flex;flex-direction:column;.ant-tabs-tabpane{flex:1;}}}}.ant-tabs-nav{padding:0 16px;.ant-tabs-tab{margin-top:12px !important;margin-bottom:12px !important;margin-right:40px !important;padding-left:3px;padding-right:3px;color:#161e35;}.ant-tabs-tab-active{.ant-tabs-tab-btn{color:",";}}.ant-tabs-tab-btn{font-weight:400;font-size:14px;line-height:16px;}}.ant-tabs.ant-tabs-top{overflow:auto;}.ant-tabs-content.ant-tabs-content-top{max-height:100%;}.ant-tabs-tabpane{padding:",";}"],e=>{
      let{
        pagination:t
      }=e;
      return t?"calc( 100% - 89px )":"calc( 100% - 42px )"
    },e=>{
      let{
        pagination:t
      }=e;
      return t?"5px":"25px"
    },v.r.colors.primary500.toString(),e=>{
      let{
        isSmartEvent:t
      }=e;
      return t?"0px":"0 16px 16px"
    }),
    uc=(0,m.default)(h.default).withConfig({
      componentId:"sc-2dc9eca1-2"
    })(["ol{align-items:center;}"]),
    ud=(0,m.default)(un).withConfig({
      componentId:"sc-2dc9eca1-3"
    })(["color:#161e35;font-weight:500;font-size:16px;line-height:20px;.ant-avatar{margin-right:4px;margin-top:-2px;}"]),
    up=(0,m.default)(un).withConfig({
      componentId:"sc-2dc9eca1-4"
    })(["font-weight:500;font-size:16px;line-height:20px;.ant-avatar{margin-right:4px;margin-top:-2px;}a{color:#161e35;white-space:pre-wrap;}"]),
    uu=(0,m.default)(ud).withConfig({
      componentId:"sc-2dc9eca1-5"
    })(["font-weight:300;font-size:16px;color:#161e35;"]),
    uh=m.default.div.withConfig({
      componentId:"sc-2dc9eca1-6"
    })(["display:flex;justify-content:space-between;padding:8px 0px 24px;"]);
    m.default.div.withConfig({
      componentId:"sc-2dc9eca1-7"
    })(["background:#f5f5f5;border-radius:20px;height:36px;display:flex;justify-content:center;padding:10px 20px;align-items:center;span{font-weight:500;color:#161E35;margin-right:4px;}.ant-btn{background:#f5f5f5;line-height:10px;}"]);
    let uf=m.default.div.withConfig({
      componentId:"sc-2dc9eca1-8"
    })(["display:flex;gap:10px;margin-top:-7px;"]);
    m.default.div.withConfig({
      componentId:"sc-2dc9eca1-9"
    })(["margin-right:4px;color:#454B5D;"]);
    var um=()=>{
      let e=(0,lC.e)("web"),
      {
        alertsFeatureAllowed:t,
        setShowPricingModal:i,
        selfServeFlag:s
      }=(0,u.I)(),
      [c,d]=(0,a.useState)("video_recording_setting"),
      p=(0,ei.useQueryClient)(),
      {
        noCodeEventsFeatureFlag:h
      }=(0,lw.Z)(),
      [m,v]=(0,a.useState)(),
      g=(0,n.jsx)("img",{
        src:"/static/settings-new-icon/breadcrumb.svg",
        alt:""
      }),
      {
        currentOrgReducer:{
          orgId:x,
          organizationName:y,
          organizationIcon:j,
          planLimit:{
            webSessionCount:w,
            sessionCount:Z
          },
          status:k
        },
        urlReducer:I,
        currentAppReducer:{
          role:S,
          _id:z,
          isIntegrated:_
        }
      }=(0,r.v9)(e=>e),
      {
        app_tab:F,
        app:P,
        org:M
      }=I,
      R=(0,o.useRouter)(),
      {
        data:N,
        refetch:D
      }=(0,A.RL)(M||x),
      T=p.getQueryData("profileInfo"),
      L=p.getQueryData("roles_permission"),
      O=N&&(null==N?void 0:N.length)>0?null==N?void 0:N.findIndex(e=>e._id===P):-1,
      U=(0,a.useMemo)(()=>O>=0?N[O]:{},[N,O]),
      V=P||(null==U?void 0:U._id)||z,
      B=(0,a.useCallback)(e=>T&&(0,W.g6)(e,L,null==T?void 0:T.organization,x,V),[T,x,L,V]),
      K=(0,a.useMemo)(()=>!_,[_]),
      q=null==R?void 0:R.query,
      Q=(0,a.useMemo)(()=>T&&!B(ut),[T,B]),
      H=(0,a.useMemo)(()=>!!B(ui),[B]),
      Y=(0,a.useMemo)(()=>"Canceled"===k||"Expired"===k,[k]);
      (0,a.useEffect)(()=>{
        U&&v(null==U?void 0:U.apiKey)
      },[U]),
      (0,a.useEffect)(()=>{
        D()
      },[]),
      (0,a.useEffect)(()=>{
        d((null==q?void 0:q.app_tab)||F||"video_recording_setting")
      },[q]);
      let G=a.useCallback(()=>{
        i(!0)
      },[i]),
      $=a.useCallback(()=>{
        i(!0)
      },[i]),
      J=(0,a.useMemo)(()=>!Y&&e&&0===w,[Y,e,w]),
      X=(0,a.useMemo)(()=>!Y&&!e&&0===Z,[Y,e,Z]);
      return J?(0,n.jsx)(lZ.ZP,{
        image:ly.Z,
        title:"Get web analytics",
        subTitle:"Optimize your web experience in UXCam",
        list:(0,n.jsxs)(n.Fragment,{
          children:[(0,n.jsxs)("li",{
            children:[(0,n.jsx)("strong",{
              children:"Real-time session replays:"
            })," Dive into detailed session replays to see ",(0,n.jsx)("br",{})," exactly how users navigate in your web"]
          }),(0,n.jsxs)("li",{
            children:[(0,n.jsx)("strong",{
              children:"Best in class analytics:"
            })," Built on the proven quality of UXCam's mobile ",(0,n.jsx)("br",{})," analytics, now tailored for web"]
          }),(0,n.jsxs)("li",{
            children:[(0,n.jsx)("strong",{
              children:"Shared Insights, Seamless Collaboration:"
            })," Track web and mobile ",(0,n.jsx)("br",{})," analytics in one tool, ensuring your team works together with unified ",(0,n.jsx)("br",{})," data and insights."]
          })]
        }),
        selfServeFlag:s,
        handleClickSeePricing:G,
        handleClickRequestPricing:$,
        learnMoreLink:"https://intercom.help/uxcamhelp/en/articles/10632047-intro-to-uxcam-for-web",
        dataIntercomTarget:"Request-Web-Trial",
        openIntercom:!0
      }):X?(0,n.jsx)(lZ.ZP,{
        image:lj.Z,
        title:"Get mobile analytics",
        subTitle:"Optimize your mobile experience in UXCam",
        list:(0,n.jsxs)(n.Fragment,{
          children:[(0,n.jsxs)("li",{
            children:[(0,n.jsx)("strong",{
              children:"Real-time session replays:"
            })," Dive into detailed session replays to see ",(0,n.jsx)("br",{})," exactly how users navigate in your mobile app"]
          }),(0,n.jsxs)("li",{
            children:[(0,n.jsx)("strong",{
              children:"Best in class analytics:"
            })," Best mobile SDK on the market."]
          }),(0,n.jsxs)("li",{
            children:[(0,n.jsx)("strong",{
              children:"Shared Insights, Seamless Collaboration:"
            })," Track web and mobile ",(0,n.jsx)("br",{})," analytics in one tool, ensuring your team works together with unified ",(0,n.jsx)("br",{})," data and insights."]
          })]
        }),
        selfServeFlag:s,
        handleClickSeePricing:G,
        handleClickRequestPricing:$,
        learnMoreLink:"https://intercom.help/uxcamhelp/en/collections/11057111-product-analytics-features",
        dataIntercomTarget:"Request-Mobile-Trial",
        openIntercom:!0
      }):(0,n.jsxs)(n.Fragment,{
        children:[(0,n.jsx)(ur,{}),(0,n.jsx)(nb,{
          children:(0,n.jsxs)(us,{
            isSmartEvent:"smart_events"===c,
            recording:"video_recording_setting"===c,
            className:"settings-tabs-main",
            children:[(0,n.jsxs)(uh,{
              children:[(0,n.jsxs)(uc,{
                separator:g,
                children:[(0,n.jsxs)(ud,{
                  children:[(0,n.jsx)(b.Z,{
                    picture:j,
                    nameInfo:y,
                    size:16,
                    shape:"square"
                  }),y]
                }),(null==U?void 0:U._id)&&(0,n.jsxs)(up,{
                  children:[(0,n.jsx)(b.Z,{
                    picture:null==U?void 0:U.image,
                    nameInfo:null==U?void 0:U.name,
                    size:16,
                    shape:"square"
                  }),(0,n.jsx)(E(),{
                    href:{
                      pathname:"/integration",
                      query:{
                        parentType:"settings",
                        setting:"org_setting",
                        org_tab:"apps",
                        orgId:x,
                        org:x
                      }
                    },
                    as:"/settings/org/".concat(x,"/apps"),
                    passHref:!0,
                    children:"".concat(null==U?void 0:U.name)
                  })]
                }),(0,n.jsx)(uu,{
                  children:"".concat(ul[c])
                })]
              }),(0,n.jsxs)(uf,{
                children:[(null==U?void 0:U.key)&&(0,n.jsx)("div",{
                  style:{
                    marginTop:"2px"
                  },
                  children:(0,n.jsx)(ap.Z,{
                    label:"App key:",
                    value:null==U?void 0:U.key,
                    "data-intercom-target":"App key"
                  })
                }),(0,n.jsx)(aS.ZP,{}),K&&(0,n.jsx)(C,{})]
              })]
            }),(0,n.jsxs)(f.default,{
              activeKey:c,
              onChange:e=>{
                let t="org=".concat(x,"&app=").concat(V,"&parentType=settings&setting=app_setting&app_tab=").concat(e||c),
                i="/settings/app/".concat(x,"/").concat(V,"/").concat(e||c);
                l().push("/integration?".concat(t),"".concat(i))
              },
              children:[(0,n.jsx)(uo,{
                tab:"Data capture & recording",
                children:(0,n.jsx)(s7,{})
              },"video_recording_setting"),e?(0,n.jsxs)(n.Fragment,{
                children:[(0,n.jsx)(uo,{
                  tab:"Data access API",
                  className:B(ut)?"view-only":"",
                  children:(0,n.jsx)(lR,{
                    appId:P,
                    appKey:m,
                    appConfigViewOnly:Q
                  })
                },"public_api"),H?(0,n.jsx)(uo,{
                  tab:"Data deletion API",
                  children:(0,n.jsx)(lQ,{
                    appId:P
                  })
                },"data_deletion_api"):null,t?(0,n.jsx)(uo,{
                  tab:"Alerts",
                  style:{
                    padding:0
                  },
                  children:(0,n.jsx)(c5,{
                    appId:P
                  })
                },"alerts"):null,(0,n.jsx)(uo,{
                  tab:"Page definition",
                  children:(0,n.jsx)(ue,{})
                },"page_definition")]
              }):(0,n.jsxs)(n.Fragment,{
                children:[(0,n.jsx)(uo,{
                  tab:"Data access API",
                  className:B(ut)?"view-only":"",
                  children:(0,n.jsx)(lR,{
                    appId:P,
                    appKey:m,
                    appConfigViewOnly:Q
                  })
                },"public_api"),H?(0,n.jsx)(uo,{
                  tab:"Data deletion API",
                  children:(0,n.jsx)(lQ,{
                    appId:P
                  })
                },"data_deletion_api"):null,(0,n.jsx)(uo,{
                  tab:"Issue notifications",
                  className:B(ut)?"view-only":"",
                  children:(0,n.jsx)(cH,{
                    appId:P
                  })
                },"issue_notification"),h&&(0,n.jsx)(uo,{
                  tab:(0,n.jsxs)(ua,{
                    "data-intercom-target":"Smart events tab",
                    children:["Smart events",(0,n.jsx)(t9.vw,{
                      variant:"small",
                      children:"BETA"
                    })]
                  }),
                  children:(0,n.jsx)(cv,{})
                },"smart_events"),(0,n.jsx)(uo,{
                  tab:"Alerts",
                  style:{
                    padding:0
                  },
                  children:(0,n.jsx)(c5,{
                    appId:P
                  })
                },"alerts")]
              })]
            })]
          })
        })]
      })
    },
    uv=i(5152),
    ug=i.n(uv),
    ux=i(36639);
    let ub=(0,m.default)(es.default).withConfig({
      componentId:"sc-4b556faa-0"
    })([".ant-input{height:24px;}.ant-input-password{border-radius:5px;}.ant-modal-content,.ant-modal-header{border-radius:8px;}"]),
    uy=(0,m.default)(y.Z).withConfig({
      componentId:"sc-4b556faa-1"
    })(["font-weight:400;font-size:14px;line-height:14px;padding:10px 22px;"]),
    uj=m.default.div.withConfig({
      componentId:"sc-4b556faa-2"
    })(["display:flex;flex-direction:row-reverse;.ant-form-item{margin-bottom:0;}"]),
    uw=(0,m.default)(y.Z).withConfig({
      componentId:"sc-4b556faa-3"
    })(["margin-right:8px;"]),
    uZ=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*().,'"`~|\\=+\-_*^;:{}\[\]<>/?])[a-zA-Z\d!@#$%^&*().,'"`~|\\=+\-_*^;:{}\[\]<>/?]{12,}$/,
    uC=ew.Z.Item,
    {
      Password:uk
    }=F.default;
    var uI=()=>{
      let[e,t]=(0,a.useState)(!1),
      [i,o]=(0,a.useState)(!1),
      [l]=ew.Z.useForm(),
      s=(0,r.I0)(),
      c=async e=>{
        if(null==e?void 0:e.newpass){
          o(!0);
          let n=await s((0,ux.gQ)(e));
          if(null==n?void 0:n.success){
            var i;
            t(!1),
            _.ZP.success((null==n?void 0:null===(i=n.data)||void 0===i?void 0:i.message)||(null==n?void 0:n.message))
          }
          if(null==n?void 0:n.error){
            let e=Object.keys(null==n?void 0:n.error).map(e=>({
              name:e,
              errors:[null==n?void 0:n.error[e]]
            }));
            l.setFields(e)
          }
          o(!1)
        }
      };
      return(0,n.jsxs)(n.Fragment,{
        children:[(0,n.jsx)(uw,{
          onClick:()=>{
            t(!0)
          },
          children:"Change password"
        }),(0,n.jsx)(ub,{
          maskClosable:!1,
          visible:e,
          title:"Change password",
          onCancel:()=>{
            t(!1),
            l.resetFields()
          },
          destroyOnClose:!0,
          style:{
            top:270
          },
          footer:null,
          children:(0,n.jsxs)(ew.Z,{
            form:l,
            onFinish:c,
            onFinishFailed:()=>{},
            autoComplete:"off",
            children:[(0,n.jsx)(uC,{
              name:"oldpass",
              rules:[{
                required:!0,
                message:"Please input your current password."
              }],
              children:(0,n.jsx)(uk,{
                placeholder:"Current password"
              })
            }),(0,n.jsx)(uC,{
              name:"newpass",
              rules:[{
                required:!0,
                message:"Please input your new password."
              },{
                pattern:uZ,
                message:"Password must be a minimum of 12 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character."
              }],
              children:(0,n.jsx)(uk,{
                placeholder:"New password"
              })
            }),(0,n.jsx)(uj,{
              children:(0,n.jsx)(uC,{
                children:(0,n.jsx)(uy,{
                  type:"primary",
                  htmlType:"submit",
                  loading:i,
                  children:"Save"
                })
              })
            })]
          })
        })]
      })
    };
    let uS=(0,m.default)(y.Z).withConfig({
      componentId:"sc-765ab011-0"
    })(["color:#5d97ff;border-color:#5d97ff;margin-left:18px;"]),
    uz="image/jpeg, image/jpg, image/png";
    var u_=(0,a.memo)(()=>{
      let[e,t]=(0,a.useState)(!1),
      i=(0,r.I0)(),
      {
        profileReducer:o
      }=(0,r.v9)(e=>e),
      {
        profilePicture:l,
        name:s,
        email:c
      }=o,
      d=e=>{
        let{
          type:t,
          size:i
        }=e,
        n=uz.includes(t),
        a=i/1024/1024<2;
        return n||_.ZP.error("Only files with these extensions are allowed: png, jpg, jpeg."),
        a||_.ZP.error("Image must be smaller than 2MB."),
        n&&a
      },
      p=async e=>{
        let n=null==e?void 0:e.file;
        if(d(n)){
          t(!0);
          try{
            var a,
            o,
            l,
            r,
            s;
            let e=await (0,O.lH)(n);
            if(!e){
              _.ZP.error("Failed to convert image to Base64."),
              t(!1);
              return
            }
            let c=await i((0,ux.gO)({
              profileImage:e
            }));
            (null==c?void 0:c.success)?(i((0,ux.Ix)(null==c?void 0:null===(o=c.data)||void 0===o?void 0:null===(a=o.profile)||void 0===a?void 0:a.profilePicture)),_.ZP.success(null==c?void 0:null===(l=c.data)||void 0===l?void 0:l.message)):_.ZP.error((null==c?void 0:null===(s=c.error)||void 0===s?void 0:null===(r=s.profileImage)||void 0===r?void 0:r[0])||"Image upload failed.")
          }
          catch(e){
            _.ZP.error("An error occurred while processing the image.")
          }
          finally{
            t(!1)
          }
        }
      };
      return(0,n.jsxs)(n.Fragment,{
        children:[(0,n.jsx)(D.Z,{
          spinning:e,
          indicator:(0,n.jsx)(L.Z,{}),
          size:"small",
          children:(0,n.jsx)(b.Z,{
            picture:l,
            size:80,
            nameInfo:s||c,
            shape:"circle"
          })
        }),(0,n.jsx)(T.Z,{
          name:"profileImage",
          customRequest:p,
          accept:uz,
          listType:"picture",
          showUploadList:!1,
          maxCount:1,
          children:(0,n.jsx)(uS,{
            disabled:e,
            children:"Choose image"
          })
        })]
      })
    });
    let uF=ug()(i.e(3168).then(i.bind(i,13168)),{
      loadableGenerated:{
        webpack:()=>[13168]
      },
      loading:()=>(0,n.jsx)(n.Fragment,{})
    }),
    uP=m.default.div.withConfig({
      componentId:"sc-c1304542-0"
    })(["display:flex;flex-direction:column;background:#ffffff;padding:16px;min-height:calc(100% - 40px);"]),
    uE=m.default.div.withConfig({
      componentId:"sc-c1304542-1"
    })(["font-weight:500;margin-bottom:8px;"]),
    uM=m.default.div.withConfig({
      componentId:"sc-c1304542-2"
    })(["display:flex;justify-content:space-between;"]),
    uR=m.default.div.withConfig({
      componentId:"sc-c1304542-3"
    })(["margin:20px 0;.ant-btn{border-radius:5px;}.ant-input-group-wrapper:hover{border-color:#5d97ff;box-shadow:0 0 0 transparent;}.ant-input-group-wrapper{border:1px solid #c0cad0;padding:4px;border-radius:5px;.ant-input{border:none;}.ant-input-group-addon{border:none;padding:0;margin:4px;background-color:#fff;.ant-btn-primary{margin-right:6px;}}}img{margin-right:18px;}.ant-upload-list-item{display:none;}p{margin-bottom:0;}svg{margin-right:3px;}"]),
    uN=m.default.div.withConfig({
      componentId:"sc-c1304542-4"
    })(["margin:20px;margin-left:0px;.ant-avatar-string{font-size:40px;}display:flex;flex-direction:row;align-items:center;.ant-btn{border-radius:5px;}.ant-input-group-wrapper{border:1px solid #c0cad0;padding:4px;border-radius:5px;.ant-input{border:none;}.ant-input-group-addon{border:none;padding:0;margin:4px;.ant-btn-primary{margin-right:6px;}}}img{margin-right:18px;}.ant-upload-list-item{display:none;}p{margin-bottom:0;}svg{margin-right:3px;}"]),
    uA=m.default.div.withConfig({
      componentId:"sc-c1304542-5"
    })(["color:#f4584c;font-size:12px;line-height:1.5715;margin-top:4px;"]),
    uD=m.default.div.withConfig({
      componentId:"sc-c1304542-6"
    })(["display:flex;flex-direction:row;background-color:#fff;margin-right:4px;align-items:center;.ant-btn{display:flex;font-size:12px;line-height:0;justify-content:center;align-items:center;height:26px;padding:12px 8px;}"]),
    uT=m.default.div.withConfig({
      componentId:"sc-c1304542-7"
    })(["display:flex;margin:20px 0;flex-direction:column;.ant-btn{border-radius:5px;}.disabled-email{background-color:#f5f5f5;}.ant-input-group-wrapper:hover{border-color:#5d97ff;box-shadow:0 0 0 transparent;}.ant-input.ant-input-disabled{padding:9px;border-radius:5px;}.ant-input-group-wrapper{border:1px solid #c0cad0;padding:5px;border-radius:5px;.ant-input{border:none;}.ant-input-group-addon{border:none;padding:0;margin:4px;background-color:#fff;.ant-btn-primary{margin-right:6px;}}}p{color:'#5B6D89';}.info-div{p{display:inline;}}.ant-input.edit-error{border-color:#f4584c;}svg{margin-right:3px;}"]),
    uL=m.default.p.withConfig({
      componentId:"sc-c1304542-8"
    })(["margin-bottom:0;"]),
    uO=(0,m.default)(y.Z).withConfig({
      componentId:"sc-c1304542-9"
    })(["margin-top:12px;width:fit-content;"]),
    uU=m.default.div.withConfig({
      componentId:"sc-c1304542-10"
    })(["width:45%;margin-top:3em;margin-left:0px;"]),
    uV=m.default.div.withConfig({
      componentId:"sc-c1304542-11"
    })(["font-weight:500;font-size:16px;line-height:20px;color:#333333;"]);
    (0,m.default)(y.Z).withConfig({
      componentId:"sc-c1304542-12"
    })(["border:none;color:#5d97ff;padding:0;line-height:normal;"]);
    var uB=()=>{
      let e=(0,r.I0)(),
      t=(0,ei.useQueryClient)(),
      [i,o]=(0,a.useState)(!1),
      [l,s]=(0,a.useState)(!1),
      [c,d]=(0,a.useState)(!1),
      [p,u]=(0,a.useState)(),
      [h,f]=(0,a.useState)(),
      [m,v]=(0,a.useState)(),
      g=(0,a.useRef)(null),
      x=(0,a.useRef)(null),
      {
        refetch:b
      }=(0,A.p1)({
        name:p
      }),
      {
        profileReducer:j,
        currentOrgReducer:{
          orgId:w
        },
        currentAppReducer:{
          isIntegrated:Z
        }
      }=(0,r.v9)(e=>e),
      {
        name:k,
        email:I,
        hasPassword:S
      }=j,
      z=(0,a.useMemo)(()=>!Z,[Z]);
      (0,A.IW)(w);
      let P="teamList".concat(w),
      E=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(null==h?void 0:h.trim()),
      M=(0,n.jsx)(uD,{
        children:l&&(0,n.jsxs)(n.Fragment,{
          children:[(0,n.jsx)(y.Z,{
            type:"primary",
            size:"small",
            onClick:()=>{
              p&&p!==k?b().then(i=>{
                var n,
                a,
                o,
                l,
                r;
                (null==i?void 0:null===(n=i.data)||void 0===n?void 0:n.profile)&&(_.ZP.success("Name updated successfully"),e((0,ux.Ib)({
                  ...j,
                  name:p
                })),t.setQueryData(P,e=>(null==e?void 0:e.length)&&e.map(e=>{
                  var t,
                  n,
                  a;
                  return(null==e?void 0:e.email)===(null==i?void 0:null===(n=i.data)||void 0===n?void 0:null===(t=n.profile)||void 0===t?void 0:t.email)?{
                    ...e,
                    name:null==i?void 0:null===(a=i.data)||void 0===a?void 0:a.profile.name
                  }:e
                }))),
                (null==i?void 0:null===(o=i.data)||void 0===o?void 0:null===(a=o.error)||void 0===a?void 0:a.name)&&_.ZP.error((null==i?void 0:null===(r=i.data)||void 0===r?void 0:null===(l=r.error)||void 0===l?void 0:l.name)||"Unable to update name")
              }):u(k),
              s(!1)
            },
            loading:!!i&&c,
            children:"Save"
          }),(0,n.jsx)(y.Z,{
            size:"small",
            onClick:()=>{
              s(!1),
              u(k)
            },
            children:"Cancel"
          })]
        })
      }),
      R=()=>e((0,ux.Uk)({
        newEmail:h
      })).then(e=>{
        var t,
        i;
        (null==e?void 0:e.success)?(_.ZP.success(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.message),o(!1),f(I),v("We have sent a verification code to ".concat(h,"."))):_.ZP.error(null==e?void 0:null===(i=e.error)||void 0===i?void 0:i.newEmail[0]),
        d(!1)
      }),
      N=()=>{
        i||(o(!0),f(I)),
        i&&E&&E&&(d(!0),R())
      };
      return(0,a.useEffect)(()=>{
        u(k),
        f(I),
        o(!1)
      },[k,I]),
      (0,a.useEffect)(()=>{
        let e=setTimeout(()=>{
          var e;
          null==g||null===(e=g.current)||void 0===e||e.focus()
        },100);
        return()=>{
          clearInterval(e)
        }
      },[null==g?void 0:g.current]),
      (0,n.jsxs)(uP,{
        children:[(0,n.jsxs)(uM,{
          children:[(0,n.jsx)(uV,{
            children:"My profile"
          }),z&&(0,n.jsx)(C,{})]
        }),(0,n.jsxs)(uU,{
          children:[(0,n.jsx)(uE,{
            children:"Photo"
          }),(0,n.jsx)(uN,{
            children:(0,n.jsx)(u_,{})
          }),(0,n.jsxs)(uR,{
            children:[(0,n.jsx)(uE,{
              children:"Name"
            }),(0,n.jsx)(F.default,{
              placeholder:"".concat(k),
              value:p,
              onChange:e=>{
                l||s(!l),
                u(e.target.value)
              },
              ref:x,
              addonAfter:M,
              maxLength:50
            })]
          }),(0,n.jsxs)(uT,{
            isLoading:c,
            children:[(0,n.jsx)(uE,{
              children:"Email address"
            }),(0,n.jsx)(F.default,{
              ref:g,
              disabled:!i,
              value:h,
              onChange:e=>{
                let{
                  value:t
                }=e.target;
                f(t)
              },
              className:!E&&i?"edit-error":"",
              addonAfter:i?(0,n.jsxs)(n.Fragment,{
                children:[" ",(0,n.jsxs)(uD,{
                  editEmail:!0===i,
                  children:[(0,n.jsx)(y.Z,{
                    type:i?"primary":"",
                    onClick:N,
                    loading:!!i&&c,
                    children:"Save"
                  }),(0,n.jsx)(y.Z,{
                    onClick:()=>{
                      o(!1),
                      f(I)
                    },
                    children:"Cancel"
                  })]
                })]
              }):""
            }),i&&!E&&(0,n.jsx)(uA,{
              children:"Please enter valid email."
            }),i&&E&&(0,n.jsx)(uL,{
              children:"We will send a verification to your new email address to verify it."
            }),m&&(0,n.jsx)("div",{
              className:"info-div",
              children:(0,n.jsx)("p",{
                children:m
              })
            }),(0,n.jsx)(uO,{
              disabled:i||!!m,
              onClick:N,
              children:"Change email"
            })]
          }),(0,n.jsxs)(uR,{
            children:[(0,n.jsx)(uE,{
              children:"Account security"
            }),S&&(0,n.jsx)(uI,{}),(0,n.jsx)(uF,{})]
          })]
        })]
      })
    },
    uK=()=>{
      let{
        urlReducer:e,
        currentOrgReducer:t
      }=(0,r.v9)(e=>e),
      {
        setShowPricingModal:i
      }=(0,u.I)();
      (0,A.R7)("roles_permission"),
      (0,A.Y$)("profileInfo");
      let l=(0,o.useRouter)(),
      s=(0,r.I0)(),
      {
        setting:c
      }=e,
      p=null==l?void 0:l.query,
      h=(null==p?void 0:p.setting)||c,
      f=(()=>{
        switch(h){
          case"org_setting":return(0,n.jsx)(lb,{});
          case"profile_setting":return(0,n.jsx)(uB,{});
          default:return(0,n.jsx)(um,{})
        }
      })();
      return(0,a.useEffect)(()=>{
        if(t){
          var e;
          s(d((null==t?void 0:null===(e=t.planFeature)||void 0===e?void 0:e.SAMLSingleSignOn)===1))
        }
        i(!1)
      },[t,s,i]),
      f
    }
  },
  87332:function(e,t,i){
    i.d(t,{
      pm:function(){
        return h
      },
      K7:function(){
        return u
      },
      JS:function(){
        return s
      },
      Io:function(){
        return f
      }
    });
    var n=i(32642),
    a=i(98777);
    class o{
      static async fetchQuoteDetailByIdentifier(e){
        return await a.be.get("".concat("https://dashboardapi.uxcam.com","/quote/").concat(e.subscriptionId,"/").concat(e.key),{
          withCredentials:!0
        })
      }
      static async addPlan(e){
        return(0,a.be)({
          method:"post",
          url:"".concat("https://dashboardapi.uxcam.com","/quote/").concat(e.subscriptionId,"/").concat(e.key,"/confirm-and-pay"),
          data:{
            fullName:e.fullName,
            paymentMethodNonce:e.paymentMethodNonce,
            signature:e.signature
          },
          withCredentials:!0
        })
      }
    }
    var l=i(81383),
    r=i(47639);
    let s=e=>({
      type:n.KJ,
      data:e
    }),
    c=e=>({
      type:n.Qu,
      error:e
    }),
    d=e=>({
      type:n.hp,
      data:e
    }),
    p=e=>({
      type:n.r7,
      error:e
    }),
    u=e=>t=>o.fetchQuoteDetailByIdentifier(e).then(async e=>(t(s(e.data.data)),e.data.data)).catch(e=>{
      e&&e.response&&(0,r.jF)(t,null,e,"dashboard"),
      t(c(e.response.data))
    }),
    h=e=>t=>o.addPlan(e).then(async e=>(t(d(e.data.data)),e.data.data)).catch(e=>{
      t(p(e.response.data))
    }),
    f=e=>t=>l.Z.updatePaymentInfo(e).then(async e=>e.data.data).catch(e=>{
      e&&e.response&&(0,r.jF)(t,null,e,"dashboard")
    })
  },
  39869:function(e,t,i){
    var n=i(85893);
    i(67294),
    t.Z=e=>(0,n.jsx)("svg",{
      viewBox:"0 0 16 16",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        d:"m11.25 4.75-6.5 6.5m0-6.5 6.5 6.5",
        stroke:"#454B5D",
        strokeWidth:1.5,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    })
  },
  62499:function(e,t,i){
    var n=i(85893);
    i(67294),
    t.Z=e=>(0,n.jsx)("svg",{
      width:15,
      height:15,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        d:"m1.324 14.451 3.38-.678a.269.269 0 0 0 .205-.194.28.28 0 0 0-.065-.269L1.82 10.296a.258.258 0 0 0-.452.13l-.689 3.38a.55.55 0 0 0 .635.635l.011.01ZM13.844 1.275a2.82 2.82 0 0 0-3.983 0L2.669 8.467a.258.258 0 0 0 0 .377l3.607 3.617a.29.29 0 0 0 .388 0l7.191-7.191a2.819 2.819 0 0 0-.01-3.995Z",
        fill:"currentColor"
      })
    })
  }
}]);