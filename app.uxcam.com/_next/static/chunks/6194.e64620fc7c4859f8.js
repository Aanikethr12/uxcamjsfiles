"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6194],{
  26194:function(e,t,o){
    o.r(t),
    o.d(t,{
      default:function(){
        return ev
      }
    });
    var i=o(85893),
    n=o(67294),
    r=o(48203),
    a=o(26390),
    s=o(19521),
    l=o(14416),
    d=o(59017),
    c=o(95315),
    p=o(79999),
    u=o(74936),
    g=o(25104),
    f=o(11163),
    h=o.n(f),
    v=o(21237),
    x=o(80688),
    m=o(41664),
    b=o.n(m),
    y=o(59722),
    w=o(65372),
    j=o(47639),
    I=o(55137);
    o(18879);
    var S=o(62610),
    _=o(68432),
    C=o(28599),
    A=o(7906),
    E=o(95220),
    k=o(80432),
    R=o(39284),
    Z=o(39618),
    D=o(36005),
    O=o(88767),
    L=o(30381),
    T=o.n(L),
    M=o(13979),
    q=o(1363),
    z=o(55931),
    P=o(67401);
    let{
      RangePicker:V
    }=E.default,
    B=e=>[{
      label:"Sessions",
      value:"sessions"
    },{
      label:"Users",
      value:"users"
    },...e?[{
      label:"Coded events",
      value:"events"
    },{
      label:"Smart events",
      value:"no_code_event"
    }]:[{
      label:"Events",
      value:"events"
    }],{
      label:"Screens",
      value:"screens"
    }],
    N=s.default.div.withConfig({
      componentId:"sc-83d99f2-0"
    })([".export-data-res-loader{padding-bottom:70px;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0;}.download-box{.ant-checkbox-group{width:100%;}.date-rangepicker{margin-top:20px;}.response-text{padding-bottom:25px;}}.limit-message-box{text-align:center;}.limit-message-box .modal-header{text-align:left;border-bottom:1px solid #e6e6e6;margin-left:-15px;margin-right:-15px;padding:0 15px 5px;}.data-request-failure{text-align:center;}.limit-message-box .modal-body{padding:30px 0;}.limit-message-box .modal-body p{font-size:14px;}.limit-message-box .modal-footer a{line-height:35px;margin:0 10px;}"]),
    F=s.default.p.withConfig({
      componentId:"sc-83d99f2-1"
    })(["line-height:normal;"]),
    Y=s.default.h3.withConfig({
      componentId:"sc-83d99f2-2"
    })(["margin-bottom:8px !important;"]),
    Q=s.default.p.withConfig({
      componentId:"sc-83d99f2-3"
    })(["color:",";"],e=>{
      let{
        key:t
      }=e;
      return"success"===t?"green":"red"
    }),
    H=(0,s.default)(u.Z).withConfig({
      componentId:"sc-83d99f2-4"
    })(["padding:8px 0;font-size:12px;font-weight:500;border-radius:6px;border:1px solid #E8E8EB;display:flex;align-items:center;justify-content:center;color:",";:hover{border-color:#E8E8EB;color:#5d97ff;}"],p.r.colors.surface400.toString()),
    U=(0,i.jsx)("span",{
      children:(0,i.jsx)(Q,{
        children:"Sorry, we are unable to process your request! Please try again later"
      },"error-p")
    },"error-span"),
    W={
      lower:T()().subtract(1,"months").utcOffset(0).startOf("day").format(),
      upper:T()().utcOffset(0).endOf("day").format()
    };
    var G=e=>{
      let t=(0,l.I0)(),
      o=(0,O.useQueryClient)(),
      {
        hasAccessOrg:r,
        keyValueDispatcher:a,
        displayAppListPopover:s
      }=e,
      {
        canExportData:d,
        isApiError:p,
        apiError:g,
        CommonUpgradeModal:f,
        upgradePlan:h,
        setUpgradePlan:v
      }=(0,q.D)(),
      [x,m]=(0,n.useState)(!1),
      [b,y]=(0,n.useState)(!1),
      [w,I]=(0,n.useState)([]),
      [S,_]=(0,n.useState)([]),
      [C,A]=(0,n.useState)(""),
      [E,L]=(0,n.useState)(),
      {
        currentAppReducer:G,
        profileReducer:$
      }=(0,l.v9)(e=>e),
      {
        noCodeEventsFeatureFlag:J
      }=(0,P.Z)(),
      {
        _id:K,
        isIntegrated:X
      }=G,
      ee=(0,n.useMemo)(()=>B(J),[J]),
      {
        email:et
      }=$,
      eo=e=>{
        e.preventDefault(),
        d?(m(!0),y(!0)):v(!0)
      },
      ei=(0,z.e)("web"),
      en=(0,n.useMemo)(()=>"export-".concat(K),[K]),
      {
        data:er,
        refetch:ea,
        isLoading:es
      }=(0,c.zF)({
        name:"get_csv_dump",
        appid:K,
        email_id:et,
        table_list:w,
        date_range:{
          attribute:"date_range",
          operator:"between_dates",
          value:S
        },
        webApp:ei||!1
      },en),
      el=()=>{
        ea().then(e=>{
          var o,
          i;
          (null==e?void 0:null===(o=e.data)||void 0===o?void 0:o.success)?!(0,D.HD)(null==e?void 0:e.data)&&(null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.success)?t((0,j.hI)({
            action:"Export CSV"
          })):A(U):(M.l.error(e&&"".concat(null==e?void 0:e.data," [ DATA CSV DOWNLOAD ]")),A(U))
        }).catch(e=>{
          var t,
          o,
          n;
          M.l.error(e&&"".concat(null==e?void 0:e.response," [ DATA CSV DOWNLOAD ]")),
          A((0,i.jsx)("span",{
            children:(0,i.jsx)(Q,{
              children:(null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(o=n.data)||void 0===o?void 0:null===(t=o.error)||void 0===t?void 0:t.message)||"Error, please try again after a few minutes"
            },"error-catch-p")
          },"error-catch-span"))
        })
      },
      ed=e=>{
        if(e.preventDefault(),(null==w?void 0:w.length)<=0){
          k.ZP.info("Select an option");
          return
        }
        L(!0),
        el()
      },
      ec=()=>{
        m(!1),
        y(!1),
        I([]),
        L(!1),
        _([]),
        A(""),
        o.setQueryData(en,{})
      },
      ep=async e=>{
        var t,
        o,
        i,
        n,
        r;
        if(e.preventDefault(),(null==g?void 0:null===(o=g.response)||void 0===o?void 0:null===(t=o.data)||void 0===t?void 0:t.error)||p){
          k.ZP.error((null==g?void 0:null===(r=g.response)||void 0===r?void 0:null===(n=r.data)||void 0===n?void 0:null===(i=n.error)||void 0===i?void 0:i.message)||"Something went wrong");
          return
        }
        eo(e)
      };
      return(0,n.useEffect)(()=>{
        x&&_(W)
      },[x]),
      (0,i.jsxs)(i.Fragment,{
        children:[X?(0,i.jsx)(H,{
          onClick:e=>{
            "boolean"==typeof r?r?ep(e):a("isVisible_custom_popup",!0,"As your current plan limit has exceeded, access to the feature is revoked."):ep(e),
            s(!1)
          },
          children:"Export data"
        }):null,h&&(0,i.jsx)(f,{}),(0,i.jsx)(R.default,{
          visible:x,
          title:"Export Data",
          width:530,
          onCancel:()=>ec(),
          footer:[E?(0,i.jsx)(u.Z,{
            type:"primary",
            onClick:e=>ec(e),
            children:"Got it!"
          },"btn-cancel"):(u.Z,(0,i.jsx)(u.Z,{
            type:"primary",
            loading:es,
            onClick:e=>ed(e),
            children:"Request data"
          },"submit"))],
          children:b&&(0,i.jsx)(N,{
            children:E?(0,i.jsx)("div",{
              className:"".concat(E?"data-request-box":"data-request-failure"," "),
              children:(0,i.jsx)("div",{
                children:(0,i.jsxs)("div",{
                  children:[!(null==er?void 0:er.error)&&E&&(0,i.jsx)(Y,{
                    children:"Your data is on its way, check your mail"
                  }),(0,i.jsx)("div",{
                    className:"response-text",
                    children:(null==er?void 0:er.error)?C:""
                  }),!(null==er?void 0:er.error)&&E&&(0,i.jsx)(F,{
                    children:"It might take some minutes to prepare your data, but we will send you a link to the csv files via email once it's ready."
                  })]
                })
              })
            }):(0,i.jsxs)("div",{
              className:"download-box",
              children:[(0,i.jsxs)("h3",{
                children:["Download the raw data recorded from your sessions, events,"," ","users and screens in CSV format."]
              }),(0,i.jsxs)("p",{
                children:["If you have questions regarding the data format or need the data in another format, please get in touch with"," ",(0,i.jsx)("a",{
                  href:"mailto:team@uxcam.com",
                  children:"team@uxcam.com"
                })]
              }),(0,i.jsx)(Z.default.Group,{
                options:ee,
                value:w,
                onChange:e=>{
                  I(e)
                }
              }),(0,i.jsx)("div",{
                className:"date-rangepicker",
                children:(0,i.jsxs)("span",{
                  children:[(0,i.jsxs)("b",{
                    children:[" ","Select a date range (optional): "]
                  }),(0,i.jsx)(V,{
                    onChange:e=>{
                      _({
                        lower:T()(e[0]).utcOffset(0).startOf("day").format(),
                        upper:T()(e[1]).utcOffset(0).endOf("day").format()
                      })
                    },
                    format:"YYYY-MM-DD",
                    popupStyle:{
                      zIndex:"999999"
                    }
                  })]
                })
              })]
            })
          })
        })]
      })
    };
    let $=["settings","integration","dashboard"],
    J={
      sessionsList:"aiSessionsList",
      sessionStatistics:"aiSessionStatistics"
    },
    K={
      sessionsList:"aisessions/list",
      sessionStatistics:"aisessions/analytics"
    },
    X=s.default.div.withConfig({
      componentId:"sc-6868cc41-0"
    })(["padding:12px;display:flex;flex-direction:column;gap:10px;background:",";border-radius:6px;border:1px solid;border-color:",";cursor:pointer;:hover{border-color:#5d97ff;}.ellipse-tooltip-text{font-weight:"," !important;}"],e=>{
      let{
        isactive:t
      }=e;
      return t?"#EFF5FF":"#ffffff"
    },e=>{
      let{
        isactive:t
      }=e;
      return t?"#fff":"#E8E8EB"
    },e=>{
      let{
        isactive:t
      }=e;
      return t?"500":"400"
    }),
    ee=s.default.div.withConfig({
      componentId:"sc-6868cc41-1"
    })(["display:flex;align-items:center;gap:10px;.anticon{margin-bottom:12px;font-size:8px;}svg{width:24px;height:24px;fill:","}"],p.r.colors.surface400.toString()),
    et=s.default.div.withConfig({
      componentId:"sc-6868cc41-2"
    })(["display:flex;gap:8px;a{display:flex;width:100%;justify-content:center;align-items:center;}button{flex:1;}"]),
    eo=(0,s.default)(u.Z).withConfig({
      componentId:"sc-6868cc41-3"
    })(["padding:8px 0px;font-size:12px;font-weight:500;border-radius:6px;border:1px solid #E8E8EB;display:flex;align-items:center;justify-content:center;box-shadow:none;min-width:100px;color:",";:hover{border-color:#E8E8EB;color:#5d97ff;}"],p.r.colors.surface400.toString()),
    ei=(0,s.default)(u.Z).withConfig({
      componentId:"sc-6868cc41-4"
    })(["color:#5d97ff;padding:0;height:0;border:none;"]),
    en=s.default.img.withConfig({
      componentId:"sc-6868cc41-5"
    })(["pointer-events:none;width:24px;height:24px;"]),
    er=s.default.div.withConfig({
      componentId:"sc-6868cc41-6"
    })(["display:flex;max-width:100%;width:100%;justify-content:space-between;overflow:hidden;gap:",";"],p.r.spacing(2));
    var ea=(0,n.memo)(e=>{
      var t;
      let{
        urlRouteTo:o,
        app:r,
        displayAppListPopover:a,
        initial:s,
        showHideQuoteModal:c
      }=e,
      p=(0,l.I0)(),
      {
        accessManagement:u,
        urlReducer:g,
        currentAppReducer:f,
        currentOrgReducer:v
      }=(0,l.v9)(e=>e),
      x=(0,n.useRef)(),
      m=(e,t,o)=>p((0,j.Ap)(e,t,o)),
      E=(0,A.ye)("app-settings-domains"),
      k=(null==g?void 0:g.appId)||(null==f?void 0:f._id),
      {
        hasAccess:R,
        _id:Z,
        isIntegrated:D,
        name:O,
        image:L,
        appType:T
      }=r,
      {
        orgId:M
      }=v||{},
      q=null==v?void 0:null===(t=v.planLimit)||void 0===t?void 0:t.appCount,
      {
        planStatus:z
      }=u,
      P=(null==z?void 0:z.selectAppAction)||(null==z?void 0:z.selectUserAction),
      V=null==g?void 0:g.parentType,
      B=(0,n.useMemo)(()=>!V||$.includes(V)?"overview":V in J?J[V]:V,[V]),
      N=(0,n.useMemo)(()=>V in K?K[V]:o,[V,o]),
      F=D?"/app/".concat(Z,"/").concat(N):"/integration?appId=".concat(Z),
      Y="appId=".concat(Z,"&parentType=").concat(D?B:"integration","&eventpage=").concat("eventsList"===V?"&eventpage=1":"","&issueType=").concat("issues"===V?"crashes":""),
      Q=async e=>{
        if(e.preventDefault(),a(!1),R&&!P){
          m("isVisible_custom_popup",!1,null);
          try{
            localStorage.setItem("appId",Z)
          }
          catch(e){}p((0,I.kA)()),
          p((0,w.ro)(M)).then(e=>{
            ((null==e?void 0:e.selectAppAction)||(null==e?void 0:e.selectUserAction))&&h().push("/integration?parentType=plan-downgrade&appId=".concat(Z||"").concat(M?"&orgId=".concat(M):""),"/plan-downgrade?appId=".concat(Z||"").concat(M?"&orgId=".concat(M):""))
          }).catch(e=>e),
          p((0,S.uv)(Z))
        }
        R||m("isVisible_custom_popup",!0,(0,i.jsxs)("span",{
          children:[(0,i.jsxs)("h3",{
            children:["Your current plan includes ".concat(q," app environment").concat(q>1?"s":""),"."]
          }),(0,i.jsxs)("p",{
            children:["To gain access to additional apps, please"," ",(0,i.jsx)(ei,{
              type:"link",
              onClick:()=>{
                c(!0),
                m("isVisible_custom_popup",!1,"")
              },
              children:"request a quote"
            })," ","to upgrade your account."]
          })]
        })),
        R&&p((0,_.wW)(M)).then(()=>h().push("/integration?".concat(Y),F))
      },
      H=()=>{
        var e;
        return null==x?void 0:null===(e=x.current)||void 0===e?void 0:e.scrollIntoView(!0)
      };
      return(0,n.useEffect)(()=>{
        (null==x?void 0:x.current)&&H()
      },[null==x?void 0:x.current]),
      (0,i.jsxs)(X,{
        isactive:k===Z,
        onClick:e=>{
          Z!==k&&Q(e)
        },
        ref:s?x:null,
        children:[(0,i.jsxs)(ee,{
          children:[(0,i.jsx)("div",{
            children:(0,i.jsx)(d.Z,{
              picture:L,
              nameInfo:O||"",
              size:36,
              shape:"square"
            })
          }),E?(0,i.jsxs)(er,{
            children:[(0,i.jsx)(y.Z,{
              value:O
            }),"web"===T?(0,i.jsx)(en,{
              src:"/static/web-app.svg",
              alt:"web-app"
            }):null,"mobile"===T?(0,i.jsx)(en,{
              src:"/static/mobile-app.svg",
              alt:"web-app"
            }):null]
          }):(0,i.jsx)(y.Z,{
            value:O
          }),!R&&(0,i.jsx)(C.mB,{})]
        }),k===Z&&(0,i.jsxs)(et,{
          children:[(0,i.jsx)(eo,{
            onClick:()=>a(!1),
            "data-intercom-target":"App settings",
            children:(0,i.jsx)(b(),{
              href:{
                pathname:"/integration",
                query:{
                  parentType:"settings",
                  setting:"app_setting",
                  org:M,
                  app:Z,
                  app_tab:"video_recording_setting"
                }
              },
              as:"/settings/app/".concat(M,"/").concat(Z,"/video_recording_setting"),
              passHref:!0,
              children:"App settings"
            })
          }),(0,i.jsx)(G,{
            hasAccessOrg:R,
            keyValueDispatcher:m,
            displayAppListPopover:a
          })]
        })]
      },Z)
    });
    let es=s.default.div.withConfig({
      componentId:"sc-a6edc28b-0"
    })(["width:260px;display:flex;flex-direction:column;gap:16px;"]),
    el=s.default.div.withConfig({
      componentId:"sc-a6edc28b-1"
    })(["overflow-y:auto;max-height:340px;display:flex;flex-direction:column;gap:16px;background:transparent;"]),
    ed=s.default.div.withConfig({
      componentId:"sc-a6edc28b-2"
    })(["display:flex;justify-content:space-between;align-items:center;.ant-btn{padding:8px 18px;font-size:12px;font-weight:500;border-radius:6px;border:1px solid #E8E8EB;display:flex;align-items:center;justify-content:center;color:",";&:hover{color:",";}}"],p.r.colors.surface400.toString(),p.r.colors.primary500.toString()),
    ec=s.default.div.withConfig({
      componentId:"sc-a6edc28b-3"
    })(["font-weight:500;font-size:14px;line-height:16px;color:",";"],p.r.colors.primary900.toString());
    var ep=e=>{
      var t;
      let{
        orgIndex:o,
        urlRouteTo:r,
        orgList:a,
        displayAppListPopover:s
      }=e,
      [d,p]=(0,n.useState)(!1),
      f=(0,n.useRef)(),
      {
        urlReducer:m,
        currentAppReducer:b,
        currentOrgReducer:y
      }=(0,l.v9)(e=>e),
      w=(null==m?void 0:m.appId)||(null==b?void 0:b._id),
      j=null==a?void 0:null===(t=a[o])||void 0===t?void 0:t.apps,
      I=(null==b?void 0:b.orgId)||(null==y?void 0:y.orgId),
      {
        isLoading:S,
        data:_
      }=(0,c.RL)(I);
      (0,c.Y$)("profileInfo");
      let C=(0,n.useMemo)(()=>Array.isArray(_)?_.map(e=>null==e?void 0:e._id):[],[_]),
      A=(0,n.useMemo)(()=>Array.isArray(j)?j.filter(e=>C.includes(null==e?void 0:e._id)).sort((e,t)=>(null==e?void 0:e._id)===w?-1:(null==t?void 0:t._id)===w?1:0):[],[C,j,w]),
      E=()=>{
        let e,
        t;
        b._id&&(e="/settings/org/".concat(null==b?void 0:b.orgId,"/apps"),t="/integration?parentType=settings&setting=org_setting&org=".concat(null==b?void 0:b.orgId,"&org_tab=apps")),
        s(!1),
        h().push(t,e)
      };
      return(0,i.jsxs)(es,{
        "data-intercom-target":"App Popup",
        children:[(0,i.jsxs)(ed,{
          children:[(0,i.jsx)(ec,{
            children:"My apps"
          }),(null==A?void 0:A.length)>0&&(0,i.jsx)("div",{
            children:(0,i.jsx)(u.Z,{
              onClick:()=>{
                E()
              },
              children:"Manage apps"
            })
          })]
        }),(0,i.jsx)(g.Z,{
          loading:S||!Array.isArray(j),
          active:!0,
          children:(0,i.jsx)(el,{
            ref:f,
            children:(null==A?void 0:A.length)>0&&A.map((e,t)=>(0,i.jsx)("div",{
              children:(0,i.jsx)(ea,{
                urlRouteTo:r,
                app:e,
                displayAppListPopover:s,
                initial:0===t,
                showHideQuoteModal:p
              })
            },null==e?void 0:e._id))
          })
        }),(0,i.jsx)(x.ZP,{
          menuBar:!0,
          displayAppListPopover:s
        }),(0,i.jsx)(v.Z,{
          setShowPricingModal:p,
          showPricingModal:d
        })]
      })
    },
    eu=o(76886);
    let eg=s.default.div.withConfig({
      componentId:"sc-b5b7984c-0"
    })(["display:flex;height:36px;width:100%;cursor:pointer;border-radius:6px;background:",";align-items:center;padding:0 6px;color:",";transition:color 0.2s ease-in-out;&.ant-popover-open{background-color:",";color:",";svg{fill:",";}}.anticon{margin-left:auto;}svg{min-width:24px;width:24px;min-height:24px;fill:",";margin-left:auto;}&:hover:not(.ant-popover-open){background-color:",";color:",";svg{fill:",";}}"],p.r.colors.surface10.toString(),p.r.colors.surface500.toString(),p.r.colors.primary500.toString(),p.r.colors.primarySnow.toString(),p.r.colors.primarySnow.toString(),p.r.colors.surface300.toString(),p.r.colors.primary100.toString(),p.r.colors.primary500.toString(),p.r.colors.primary500.toString()),
    ef=s.default.div.withConfig({
      componentId:"sc-b5b7984c-1"
    })(["display:flex;flex-direction:column;max-width:108px;color:inherit;font-weight:400;font-size:14px;line-height:16px;margin-left:8px;"]),
    eh=s.default.p.withConfig({
      componentId:"sc-b5b7984c-2"
    })(["text-overflow:ellipsis;overflow:hidden;white-space:pre;color:inherit;margin:0;padding:0;width:100%;"]);
    var ev=e=>{
      var t;
      let{
        collapsed:o,
        orgIndex:n,
        urlRouteTo:s,
        navigate:p,
        navigateToAppTeam:u,
        addSessionId:g,
        showAppList:f,
        displayAppListPopover:h
      }=e,
      {
        currentOrgReducer:v,
        urlReducer:x,
        currentAppReducer:m,
        applicationReducer:b,
        currentOrgReducer:y,
        profileReducer:w
      }=(0,l.v9)(e=>e),
      {
        orgId:j
      }=v||{};
      return(0,c.R7)("roles_permission"),
      (0,c.RL)((null==m?void 0:m.orgId)||j),
      (0,i.jsx)(eu.Z,{
        placement:"rightTop",
        collapsed:o,
        content:(0,i.jsx)(ep,{
          orgIndex:n,
          urlRouteTo:s,
          orgList:b,
          currentApp:m,
          navigate:p,
          navigateToAppTeam:u,
          currentOrg:y,
          profile:w,
          addSessionId:g,
          urlQuery:x,
          displayAppListPopover:h
        }),
        trigger:"click",
        visible:f,
        onVisibleChange:h,
        mouseEnterDelay:.4,
        children:(0,i.jsxs)(eg,{
          "data-intercom-target":"Sidebar App",
          children:[(0,i.jsxs)(i.Fragment,{
            children:[(0,i.jsx)(d.Z,{
              picture:null==m?void 0:m.image,
              nameInfo:null==m?void 0:m.name,
              size:25,
              shape:"square"
            }),!o&&(0,i.jsx)(ef,{
              children:(0,i.jsx)(eh,{
                children:(0,i.jsx)(r.Z,{
                  title:(null==m?void 0:null===(t=m.name)||void 0===t?void 0:t.length)>=10?null==m?void 0:m.name:void 0,
                  color:"#fff",
                  overlayInnerStyle:{
                    color:"#000000d9",
                    whiteSpace:"pre"
                  },
                  children:null==m?void 0:m.name
                })
              })
            })]
          }),(0,i.jsx)(a.Z,{})]
        })
      })
    }
  }
}]);