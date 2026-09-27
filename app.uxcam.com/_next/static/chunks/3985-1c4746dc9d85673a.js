(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3985],{
  32584:function(e,t,n){
    "use strict";
    n.d(t,{
      Lo:function(){
        return o
      },
      ls:function(){
        return i
      },
      lw:function(){
        return s
      }
    });
    let i=(e,t,n)=>{
      let i=null==t?void 0:t.trim();
      (null==i?void 0:i.length)&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)?n("Please enter a valid email address."):n()
    },
    o=(e,t,n)=>{
      t||n("Please enter an email address.");
      let i=null==t?void 0:t.trim();
      (null==i?void 0:i.length)&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)?n("Please enter a valid email address."):n()
    },
    s=(e,t,n)=>{
      if(!Array.isArray(t)||0===t.length){
        n("Please enter a valid email address.");
        return
      }
      if(t.length>=50){
        n("You can only add up to 50 emails.");
        return
      }
      n()
    }
  },
  26780:function(e,t,n){
    "use strict";
    var i=n(17967);
    let o="https://app.uxcam.com",
    s=e=>{
      let t=(e||"").toLowerCase();
      return"uxcam.com"===t||t.endsWith(".uxcam.com")
    },
    a=e=>{
      let t=(0,i.N)(e||"");
      if(!t||"about:blank"===t)return"/dashboard";
      try{
        let e=new URL(t,o),
        n="https:"===e.protocol||"http:"===e.protocol,
        i=!!o&&e.origin===new URL(o).origin;
        if(n&&(i||s(e.hostname)))return e.href
      }
      catch(e){}return"/dashboard"
    };
    t.Z=(e,t)=>{
      let n=a(e);
      t?t.redirect(n):window.location.href=n
    }
  },
  63134:function(e,t,n){
    "use strict";
    n.d(t,{
      Z:function(){
        return X
      }
    });
    var i=n(85893),
    o=n(67294),
    s=n(14416),
    a=n(41609),
    r=n.n(a),
    l=n(1469),
    d=n.n(l),
    c=n(3651),
    u=n.n(c),
    p=n(13311),
    h=n.n(p),
    f=n(30998),
    m=n.n(f),
    g=n(11163),
    x=n.n(g),
    v=n(65885),
    y=n(8891),
    b=n.n(y),
    w=n(55877),
    j=n(8865),
    k=n(71768),
    _=n(62610),
    C=n(53624),
    S=n(47639),
    I=n(36639),
    E=n(68432),
    F=n(38627),
    A=n(38266),
    Z=n(98777),
    N=n(65372),
    R=n(30663),
    D=n(92046),
    T=n(13979),
    L=n(68805),
    M=n(12616),
    z=n(84621),
    P=n(85351),
    O=n(99252),
    U=n(28166),
    B=n(89734),
    V=n.n(B),
    W=n(48002),
    H=n(88767);
    let q=()=>{
      var e;
      let t=(0,s.I0)(),
      n=(0,s.v9)(e=>e.profileReducer),
      i=(0,s.v9)(e=>e.urlReducer.parentType),
      a=(0,H.useQueryClient)().getQueriesData(["ai-session-meta"]),
      l=a.length>0?a[0][1]:void 0,
      d=(0,o.useRef)(l);
      (0,o.useEffect)(()=>{
        d.current!==l&&(d.current=l)
      },[l]),
      (0,o.useEffect)(()=>{
        if(!r()(n)&&"aiSessionsList"===i){
          var e,
          o;
          t((0,R.CW)(null,{
            eventName:"screenvisit_sessions",
            track_type:"event",
            eventProperty:{
              context_length:null==d?void 0:null===(o=d.current)||void 0===o?void 0:null===(e=o.descriptions)||void 0===e?void 0:e.length
            }
          }))
        }
      },[t,i,n,null==l?void 0:null===(e=l.descriptions)||void 0===e?void 0:e.length])
    };
    var Q=JSON.parse('["600b32209aeb7a484e7d481c"]'),
    K=n(41371);
    let G=new v.Z().get("loggedInFromAdminDashboard"),
    $=!!(!F.D0&&null==G),
    Y=["welcome_firstVisit","integration","dashboard","plan-downgrade"];
    var X=e=>(0,o.memo)(t=>{
      let{
        urlReducer:n,
        profileReducer:a,
        currentAppReducer:l,
        applicationReducer:c,
        tokenReducer:p,
        eventTable:f,
        errorReducer:v,
        appFilter:{
          dateSegmentIsInitial:y
        },
        sidebarReducer:{
          collapse:B
        }
      }=(0,s.v9)(e=>e),
      H=(0,s.I0)(),
      X=(0,s.oR)(),
      J=(0,g.useRouter)(),
      [ee,et]=(0,o.useState)(!1),
      [en,ei]=(0,o.useState)(!1),
      [eo,es]=(0,o.useState)(!1),
      [ea,er]=(0,o.useState)(),
      {
        aiSessionFeatureAllowed:el
      }=(0,K.I)()||{},
      {
        parentType:ed,
        appId:ec,
        app:eu
      }=n,
      ep=(null==l?void 0:l.orgId)||(null==n?void 0:n.org),
      eh=(null==n?void 0:n.url)||"",
      ef=ec||eu,
      [em,eg]=(0,o.useState)(!1),
      ex=new URL(window.location.href).searchParams.get("tsource_id"),
      ev=!Q.includes(ep);
      (0,U.Kf)(ef),
      (0,z.Z)();
      let ey=(0,o.useRef)(!1),
      eb=o.useRef(el);
      eb.current=el;
      let ew=async(e,t)=>{
        let i=await H((0,S._A)());
        if(await (0,A._f)(),window.Intercom&&null==G&&!ey.current){
          let o=!!eb.current;
          window.Intercom("boot",{
            app_id:"ncn9bb9h",
            name:null==e?void 0:e.name,
            api_base:"https://api-iam.intercom.io",
            user_hash:null==i?void 0:i.data,
            email:null==e?void 0:e.email,
            user_id:null==e?void 0:e._id,
            organizationID:null==t?void 0:t.orgId,
            organizationName:null==t?void 0:t.organizationName,
            applicationId:null==l?void 0:l._id,
            subscriptionStatus:null==t?void 0:t.subscriptionStatus,
            hubspotLink:null==t?void 0:t.hubspotLink,
            adminPanelLink:null==t?void 0:t.adminPanelLink,
            planName:null==t?void 0:t.planName,
            url:null==n?void 0:n.url,
            alignment:o?"left":"right",
            horizontal_padding:o?B?89:209:0,
            hide_default_launcher:o
          }),
          ey.current=!0
        }
      },
      ej=()=>{
        b().__loaded||(b().init("cb9434ea98e566e7efc8a688e98eeb7b"),b().identify(a._id),b().track("Page Visited",{
          pageName:n.url,
          pageURL:window.location.href
        }),b().register({
          source:(0,j.Z)()
        }),b().people.set({
          source:(0,j.Z)()
        }))
      },
      ek=async(e,t)=>{
        window.Intercom&&window.Intercom("update",{
          name:null==t?void 0:t.name,
          email:null==t?void 0:t.email,
          url:e.url,
          applicationId:null==e?void 0:e.appId
        })
      },
      e_=async()=>{
        (0,A.$1)(),
        P.hotjar.identify(a._id,{
          email:a.email
        })
      },
      eC=(e,t)=>H((0,k.fu)(e,t)),
      eS=async()=>{
        let e=["aiSessionsList","aiSessionStatistics"].includes(ed)?"device_time":"upload_time";
        H((0,M.Nm)({
          attribute:e,
          operator:"between_dates",
          value:{
            lower:new Date(new Date(new Date().setDate(new Date().getDate()-30))),
            upper:new Date(new Date)
          },
          tz:O.x7,
          labelId:"absolute_last30d",
          initial:!0
        }))
      },
      eI=()=>{
        if(eh){
          let e=["upload_time","device_time","date_range"],
          t=[];
          null==eh||eh.replace(/([^?=&]+)=([^&]+)/g,(e,n)=>{
            t.push(n)
          });
          let n=Object.keys(W.i),
          i=null==t?void 0:t.some(t=>e.includes(t)),
          o=null==t?void 0:t.every(e=>n.includes(e));
          (!i||o)&&eS()
        }
      },
      eE=(e,t)=>{
        H((0,N.ro)(e)).then(n=>{
          ((null==n?void 0:n.selectAppAction)||(null==n?void 0:n.selectUserAction))&&x().push("/integration?parentType=plan-downgrade&appId=".concat(ef||t).concat(e?"&orgId=".concat(e):""),"/plan-downgrade?appId=".concat(ef||t).concat(e?"?orgId=".concat(e):""))
        }).catch(e=>e)
      },
      eF=async(e,t)=>{
        var n,
        i;
        let o=e||c,
        s=h()(o,e=>t?e.orgId===t:e.apps.length>0),
        a=t||(null==o?void 0:null===(n=o[0])||void 0===n?void 0:n.orgId);
        if((null==o?void 0:o.length)&&(null==o?void 0:o.length)===1){
          try{
            localStorage.setItem("orgId",a)
          }
          catch(e){}ep=a
        }
        if(s){
          let e=m()(s.apps,{
            isLastVisitedApp:!0
          }),
          n=m()(o,{
            orgId:t
          }),
          a=t?n:e,
          r=H((0,_.FL)(a>-1&&s.apps[a].hasAccess?s.apps[a]._id:s.apps[0]._id));
          r&&eE(ep,null===(i=s.apps[0])||void 0===i?void 0:i._id);
          try{
            localStorage.setItem("appId",r._id)
          }
          catch(e){}
        }
        else H((0,_.IO)({}))
      },
      eA=async e=>{
        let t=e||c,
        n="";
        try{
          n=localStorage.getItem("appId")
        }
        catch(e){}if(ef&&"undefined"!==ef){
          let e=H((0,_.FL)(ef,t));
          e&&eE(e.orgId,e._id)
        }
        else if("undefined"!==n){
          let e=[].concat(...t.map(e=>e.apps)).filter(e=>e._id).map(e=>e._id);
          if(e.length&&n){
            if(u()(e,n)>=0&&n){
              let e=H((0,_.FL)(n));
              e&&eE(e.orgId,e._id)
            }
            else eF(t)
          }
          else eF(t)
        }
        else eF(t)
      },
      eZ=async(e,t,n)=>{
        let i,
        o;
        let s=e||c;
        V()(s,e=>(null==e?void 0:e.orgId)!==t);
        let a=!0,
        r=X.getState().urlReducer,
        d=(null==r?void 0:r.parentType)||ed;
        try{
          if(Y.includes(d)){
            if(0===s.length)et(!0);
            else if(s.length>0){
              if(ef?s.forEach(e=>{
                e.apps.forEach(t=>{
                  t._id===ef&&(i=t,a="boolean"!=typeof e.dashboardAccess||e.dashboardAccess)
                })
              }):s.map(e=>{
                if(void 0===i){
                  if(e.apps.length>0){
                    let n=m()(e.apps,{
                      isLastVisitedApp:!0
                    }),
                    o=m()(s,{
                      orgId:t
                    }),
                    r=t?o:n;
                    i=r>-1&&e.apps[r].hasAccess?e.apps[r]:e.apps[0],
                    a="boolean"!=typeof e.dashboardAccess||e.dashboardAccess
                  }
                  else a="boolean"!=typeof e.dashboardAccess||e.dashboardAccess
                }
              }),i&&a){
                o=i._id;
                let e=new URL(window.location.href).searchParams.get("shareError"),
                t=e?"&shareError=".concat(e):"",
                n=i.isIntegrated?"/app/".concat(o,"/overview").concat(e?"?shareError=".concat(e):""):"/integration?appId=".concat(o);
                x().push("/integration?appId=".concat(o,"&parentType=").concat(i.isIntegrated?"overview":"integration").concat(t),n)
              }
              else a?(null==n?void 0:n.hasPassword)?(ei(!0),x().push("/dashboard?parentType=welcome_firstVisit","/welcome/first_visit")):x().push("/setup?parentType=setup_password","/signup/password"):(es(!0),er(s[0].reasonNoDashboardAccess))
            }
            else{
              o=l._id;
              let e=l.isIntegrated?"/app/".concat(o,"/overview"):"integration?appId=".concat(o);
              x().push("/integration?appId=".concat(o,"&parentType=").concat(l.isIntegrated?"overview":"integration"),e)
            }
          }
          else if("settings"===ed&&new URL(window.location.href).searchParams.has("referer")){
            if(!s.find(e=>e.orgId===ep)){
              x().push("/error?errorStatus=406");
              return
            }
            eF(s,ep)
          }
        }
        catch(e){
          return e
        }
      },
      eN=()=>{
        let e=ep||(null==l?void 0:l.orgId),
        t=ef||l._id,
        n=m()(c,{
          orgId:e
        });
        n>=0&&c[n].dashboardAccess&&"undefined"!==t&&(H((0,S.nD)(ep)),H((0,S.q6)(e,t)),!Y.includes(ed)&&t&&(H((0,_.ri)(t)),H((0,C.l4)(t))))
      },
      eR=async()=>{
        let e;
        r()(a)&&(e=await H((0,I.PR)())),
        c?(c.length&&await eA(),eZ(void 0,void 0,e)):H((0,_.Zn)(p,!1)).then(async t=>{
          t&&d()(t)&&(await eA(t),eZ(t,void 0,e))
        }).catch(e=>e)
      },
      eD=()=>{
        try{
          localStorage.setItem("bottomBarClassFlag",void 0),
          ex&&sessionStorage.setItem("source_id",ex),
          localStorage.getItem("appId")||localStorage.setItem("appId",ef)
        }
        catch(e){}H((0,S.sT)({})),
        eR()
      },
      eT=(0,o.useCallback)(()=>{
        let e=!1;
        try{
          e=localStorage.getItem("loginState"),
          "true"===e&&(H((0,R.CW)(null,{
            eventName:"wa_log_in"
          })),localStorage.setItem("loginState",!1))
        }
        catch(e){}
      },[H]),
      eL="aiSessionsList"!==ed&&"setup_password"!==ed&&"welcome_firstVisit"!==ed,
      eM=async()=>{
        H((0,E.wW)(ep)).then(e=>{
          let t=null==e?void 0:e.data;
          if(eL&&H((0,R.CW)(a)),t)try{
            localStorage.setItem("currentPlan",t.name),
            localStorage.setItem("orgId",t.orgId),
            localStorage.setItem("organizationName",t.organizationName)
          }
          catch(e){}eT(),
          t&&l&&(ew(a,t),ej(),ev&&e_(),(0,A.dl)(t,a),T.l.configure({
            payload:{
              user:{
                name:a.name,
                email:a.email,
                app:l.name,
                appId:l._id
              }
            }
          }))
        }).catch(e=>e);
        let e="",
        t="";
        try{
          e=localStorage.getItem("tokenResponse"),
          t=localStorage.getItem("tokenCallGetTime")
        }
        catch(e){}if(e&&"false"!==e&&t){
          e=JSON.parse(e),
          await (0,Z.L9)(e,t);
          try{
            localStorage.setItem("tokenResponse","false"),
            localStorage.setItem("tokenCallGetTime","false")
          }
          catch(e){}
        }
        H((0,S.uW)())
      },
      ez=async()=>{
        let e=await (0,D.X2)();
        try{
          localStorage.setItem("internetIdentity",(null==e?void 0:e.ip)||"Could not track IP"),
          localStorage.getItem("usersSessionSId")||localStorage.setItem("usersSessionId",(0,w.v4)())
        }
        catch(e){}
      };
      (0,o.useEffect)(()=>{
        let e=null==J?void 0:J.asPath,
        t=(null==n?void 0:n.appId)||(null==n?void 0:n.app),
        i=(null==n?void 0:n.orgId)||(null==n?void 0:n.org),
        o=null,
        s=null;
        try{
          o=localStorage.getItem("appId"),
          s=localStorage.getItem("orgId")
        }
        catch(e){}let a="id"===t,
        r="orgid"===i,
        l=e,
        d=!1;
        (!a||o)&&(!r||s)&&(a&&o&&(l=l.includes("?appId=id")?l.replace("?appId=id","?appId=".concat(o)):l.replace("/id/","/".concat(o,"/")),d=!0),r&&s&&(l=l.replace("/orgid/","/".concat(s,"/")),d=!0),d&&(window.location.href=l))
      },[n,ed,J]),
      (0,o.useEffect)(()=>{
        ez(),
        eD()
      },[]);
      let eP=o.useRef(ep),
      eO=o.useRef(ef);
      (0,o.useEffect)(()=>{
        (eP.current!==ep||eO.current!==ef)&&window.Intercom&&(window.Intercom("shutdown"),ey.current=!1),
        eP.current=ep,
        eO.current=ef,
        !r()(a)&&(ep?eM():$&&ew(a))
      },[ep,ef,a,em]);
      let eU=o.useRef(null);
      (0,o.useEffect)(()=>(eU.current=setTimeout(()=>{
        eg(el)
      },1e3),()=>{
        eU.current&&clearTimeout(eU.current)
      }),[el]),
      (0,o.useEffect)(()=>{
        if(!el)return;
        let e=()=>!!window.Intercom&&(window.Intercom("update",{
          hide_default_launcher:!0
        }),window.Intercom("update",{
          hide_default_launcher:!0,
          alignment:"left",
          horizontal_padding:B?89:209
        }),ey.current);
        if(e())return;
        let t=setInterval(()=>{
          e()&&clearInterval(t)
        },500);
        return()=>clearInterval(t)
      },[el,B]),
      (0,o.useEffect)(()=>{
        ep&&eN()
      },[null==l?void 0:l.orgId,ef]);
      let eB=o.useRef(!1),
      eV=o.useRef(),
      eW=["aiSessionsList","aiSessionStatistics","sessionsList","sessionStatistics"].includes(ed)||["aiSessionsList","aiSessionStatistics","sessionsList","sessionStatistics"].includes(eV.current);
      return(0,o.useEffect)(()=>{
        eV.current!==ed&&(eV.current=ed),
        ef&&c&&eB.current&&y&&eW&&eS()
      },[ef,c,ed,y]),
      (0,o.useEffect)(()=>{
        ef&&H((0,L.Eb)()),
        ef&&c&&(H((0,_.FL)(ef)),eI(),eB.current=!0)
      },[ef,c]),
      (0,o.useEffect)(()=>{
        eh&&(f.isSessionEventTab&&eC("isSessionEventTab",null),F.BB&&ej()),
        a&&ek(n,a)
      },[n,a]),
      q(),
      (0,o.useEffect)(()=>{
        !r()(a)&&eL&&H((0,R.CW)())
      },[n,ed]),
      (0,i.jsx)(e,{
        orgForm:ee,
        appForm:en,
        dashboardAccessView:eo,
        reasonNoDashboardAccess:ea,
        valueByKeyEvent:eC,
        resetStatus:()=>{
          ei(!1),
          et(!1)
        },
        errorReducer:v,
        changeAppStatus:()=>{
          ei(!0),
          et(!1)
        },
        ...t
      })
    })
  },
  76218:function(e,t,n){
    "use strict";
    n.r(t),
    n.d(t,{
      ModalWrapper:function(){
        return p
      }
    });
    var i=n(85893),
    o=n(67294),
    s=n(5152),
    a=n.n(s),
    r=n(19521),
    l=n(14416),
    d=n(47639),
    c=n(12810);
    let u=a()(n.e(6493).then(n.bind(n,56493)),{
      loadableGenerated:{
        webpack:()=>[56493]
      },
      loading:()=>(0,i.jsx)(c.Z,{})
    }),
    p=r.default.div.withConfig({
      componentId:"sc-3fe0229f-0"
    })(["> button{position:absolute;top:16px;right:16px;cursor:pointer;z-index:10;border:none;background:transparent;box-shadow:none;}"]);
    t.default=o.memo(e=>{
      let{
        resetStatus:t
      }=e,
      n=(0,l.I0)();
      return o.useEffect(()=>{
        n((0,d.ms)())
      },[n]),
      (0,i.jsx)(u,{
        resetStatus:t
      })
    })
  },
  76886:function(e,t,n){
    "use strict";
    var i=n(85893);
    n(67294);
    var o=n(19521),
    s=n(25409),
    a=n(79999);
    let r=(0,o.createGlobalStyle)([".common-overlay{.ant-popover-content{width:100%;border-radius:6px;box-shadow:1px 1px 12px 0px #A2A5AE33;.ant-popover-arrow{display:none !important;}.ant-popover-inner{border-radius:6px;border:1px solid ",";box-shadow:none;&::-webkit-scrollbar{width:6px !important;height:5px !important;}&::-webkit-scrollbar-track{border-radius:6px !important;background-color:"," !important;}&::-webkit-scrollbar-thumb{background-color:"," !important;border-radius:6px !important;transition:background-color 1s !important;&:hover{background-color:"," !important;}}.popover-menu-list{background-color:transparent;width:138px;.ant-menu-vertical .ant-menu-item:not(:last-child){margin-bottom:8px;}.ant-menu-item{padding:6px 4px;height:28px;display:flex;align-items:center;margin-top:0;color:",";font-size:12px;font-weight:500;&.ant-menu-item-selected{background:transparent !important;.ant-menu-item-icon + span{color:"," !important;}svg{fill:"," !important;}}svg{width:16px;height:16px;fill:",";}&:hover{color:"," !important;svg{fill:"," !important;}}.ant-menu-title-content{opacity:1;}}}.ant-popover-inner-content{padding:0px;}}}}"],a.r.colors.surface10.toString(),a.r.colors.surface05.toString(),a.r.colors.surface100.toString(),a.r.colors.surface200.toString(),a.r.colors.surface400.toString(),a.r.colors.primary500.toString(),a.r.colors.primary500.toString(),a.r.colors.surface300.toString(),a.r.colors.primary500.toString(),a.r.colors.primary500.toString());
    o.default.div.withConfig({
      componentId:"sc-69d5ee08-0"
    })(["position:fixed;height:100vh;top:0;left:",";right:0;bottom:0;z-index:99;background-color:rgba(22,30,53,0.3);transition:opacity 0.5s;"],e=>{
      let{
        collapsed:t
      }=e;
      return t?"80px":"200px"
    });
    let l=(0,o.default)(s.Z).withConfig({
      componentId:"sc-69d5ee08-1"
    })([""]);
    t.Z=e=>{
      let t,
      {
        children:n,
        paddingSize:o="medium",
        collapsed:s=!1,
        ...a
      }=e;
      switch(o){
        case"small":t="8px";
        break;
        case"medium":t="16px";
        break;
        default:t="24px"
      }
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(r,{}),(0,i.jsx)(l,{
          overlayClassName:"common-overlay",
          overlayInnerStyle:{
            padding:t
          },
          ...a,
          children:n
        })]
      })
    }
  },
  30512:function(e,t,n){
    "use strict";
    n.r(t),
    n.d(t,{
      default:function(){
        return ef
      },
      useFetchCheckListById:function(){
        return eh
      }
    });
    var i=n(85893),
    o=n(67294),
    s=n(14416),
    a=n(62570),
    r=n(66873),
    l=n(22365),
    d=n(98359),
    c=n(74936),
    u=n(80432),
    p=n(73260),
    h=n(27205),
    f=n(48203),
    m=n(97600),
    g=n(68972),
    x=n(19521),
    v=n(88767),
    y=n(74855),
    b=n(62610),
    w=n(79870),
    j=n(86477),
    k=n(39284),
    _=n(83423),
    C=n(72654),
    S=n(30653),
    I=n(47639),
    E=n(59722),
    F=n(95315),
    A=n(32584),
    Z=n(81383),
    N=n(48019),
    R=n(47295),
    D=n(86445);
    let{
      Option:T
    }=w.default,
    {
      Group:L
    }=j.default,
    M=(0,x.default)(c.Z).withConfig({
      componentId:"sc-582ca1b3-0"
    })(["justify-content:center;align-items:center;height:36px;background:#5d97ff;border:1px solid #5d97ff;border-radius:4px;"]),
    z=(0,x.default)(k.default).withConfig({
      componentId:"sc-582ca1b3-1"
    })([".ant-modal-content{padding:20px;border-radius:8px;}.ant-modal-footer{display:none;}"]),
    P=x.default.div.withConfig({
      componentId:"sc-582ca1b3-2"
    })([".ant-select-dropdown{border-radius:8px;padding:20px;width:310px !important;}.ant-select:not(.ant-select-customize-input) .ant-select-selector{border:none;}.ant-select-item-option{padding:10px 8px;}"]),
    O=x.default.div.withConfig({
      componentId:"sc-582ca1b3-3"
    })(["display:flex;justify-content:space-between;margin-bottom:15px;"]),
    U=x.default.div.withConfig({
      componentId:"sc-582ca1b3-4"
    })(["font-size:18px;font-weight:500;"]),
    B=x.default.div.withConfig({
      componentId:"sc-582ca1b3-5"
    })(["font-weight:500;font-size:14px !important;line-height:16px;"]),
    V=x.default.div.withConfig({
      componentId:"sc-582ca1b3-6"
    })(["max-height:250px;overflow-y:auto;scrollbar-width:thin;margin:10px 0;.ant-form-item{margin-bottom:0;}.ant-form-item-control-input{text-align:right;}.ant-select-item-option-active{background-color:rgba(93,151,255,0.08);color:#5d97ff;p{color:#5d97ff;}}.ant-select-item-option{text-align:left;:hover{background-color:rgba(93,151,255,0.08);color:#5d97ff;p{color:#5d97ff;}}}.ant-select-item-option.ant-select-item-option-selected{background-color:rgba(93,151,255,0.08);color:#5d97ff;}"]),
    W=(0,x.default)(_.default).withConfig({
      componentId:"sc-582ca1b3-7"
    })(["margin:10px 0;border:auto;"]),
    H=(0,x.default)(L).withConfig({
      componentId:"sc-582ca1b3-8"
    })(["width:100%;display:flex;margin-top:10px;"]),
    q=x.default.div.withConfig({
      componentId:"sc-582ca1b3-9"
    })(["font-weight:400;font-size:12px;line-height:16px;align-items:center;margin:5px 0;color:#5b6d89;"]),
    Q=(0,x.default)(c.Z).withConfig({
      componentId:"sc-582ca1b3-10"
    })(["border-radius:4px;color:#ffffff;font-size:14px;height:47px;margin-top:10px;padding:0 30px;"]),
    K=(0,x.default)(Q).withConfig({
      componentId:"sc-582ca1b3-11"
    })(["background:#ffffff;color:#5d97ff;border:1px solid #5d97ff;margin-right:15px;padding:0 30px;"]),
    G=x.default.div.withConfig({
      componentId:"sc-582ca1b3-12"
    })(["font-weight:500;font-size:14px;p{font-weight:400;margin:2px 0 0;font-size:12px;}"]),
    $=x.default.span.withConfig({
      componentId:"sc-582ca1b3-13"
    })(["margin:15px 0;"]),
    Y=x.default.div.withConfig({
      componentId:"sc-582ca1b3-14"
    })(["display:flex;justify-content:end;"]),
    X=x.default.div.withConfig({
      componentId:"sc-582ca1b3-15"
    })([".ant-form-item-explain{text-align:right;margin-right:10px;}.ant-form-item-explain .ant-form-item-explain-error{font-size:12px;}"]),
    J=C.Z.Item,
    ee=(0,x.default)(J).withConfig({
      componentId:"sc-582ca1b3-16"
    })([".ant-form-item-label{width:140px;}"]);
    var et=e=>{
      let{
        buttonLabel:t
      }=e,
      n=(0,v.useQueryClient)(),
      a=(0,s.I0)(),
      [r]=C.Z.useForm(),
      [l,d]=(0,o.useState)(!1),
      [c,p]=(0,o.useState)(),
      [h,f]=(0,o.useState)(!1),
      [m,g]=(0,o.useState)([]),
      x=(0,o.useRef)(null),
      y=(0,o.useRef)(),
      {
        data:b
      }=(0,F.Y$)("profileInfo"),
      {
        data:k
      }=(0,F.R7)("roles_permission"),
      {
        currentOrgReducer:{
          orgId:_
        },
        urlReducer:{
          appId:L
        }
      }=(0,s.v9)(e=>e),
      et="teamList".concat(_),
      {
        mutate:en,
        isLoading:ei
      }=(0,v.useMutation)(Z.Z.inviteTeamMates,{
        onSuccess:e=>{
          u.ZP.success("User invited successfully."),
          n.setQueriesData(et,t=>{
            var n;
            return[...t,null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.data]
          }),
          d(!1)
        },
        onError:e=>{
          var t,
          n,
          i,
          o,
          s,
          r,
          l,
          c,
          p,
          h,
          m,
          g,
          x,
          v,
          y;
          (null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.status)===403?(d(!1),f(!0)):(null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(o=s.data)||void 0===o?void 0:null===(i=o.error)||void 0===i?void 0:null===(n=i.message)||void 0===n?void 0:n.includes("upgrade your account"))?(a((0,I.Ap)("isVisible_custom_popup",!0,(0,S.ZP)(null==e?void 0:null===(c=e.response)||void 0===c?void 0:null===(l=c.data)||void 0===l?void 0:null===(r=l.error)||void 0===r?void 0:r.message))),d(!1)):u.ZP.error((null==e?void 0:null===(g=e.response)||void 0===g?void 0:null===(m=g.data)||void 0===m?void 0:null===(h=m.error)||void 0===h?void 0:null===(p=h.emails)||void 0===p?void 0:p[0])||(null==e?void 0:null===(y=e.response)||void 0===y?void 0:null===(v=y.data)||void 0===v?void 0:null===(x=v.error)||void 0===x?void 0:x.message)||"Teammate add failed.")
        }
      }),
      eo=async()=>{
        d(!1)
      },
      es=()=>{
        d(!0)
      },
      ea=(0,o.useCallback)(e=>b&&(0,D.W9)(e,k,null==b?void 0:b.organization,_),[b,k,_]),
      er=()=>{
        var e;
        let t=(0,D.gI)(null==b?void 0:b.organization,_);
        g((0,D.uu)(null==b?void 0:null===(e=b.organization[t])||void 0===e?void 0:e.apps))
      },
      el=(0,o.useCallback)(()=>y.current,[y]);
      return(0,o.useEffect)(()=>{
        b&&er()
      },[b]),
      (0,o.useEffect)(()=>{
        let e=setTimeout(()=>{
          l&&(null==x?void 0:x.current)&&(null==x||x.current.focus())
        },500);
        return p("application"),
        ()=>{
          clearTimeout(e)
        }
      },[l,x]),
      (0,i.jsxs)(i.Fragment,{
        children:[ea(["organization.team.create","app.team.create"])&&(0,i.jsx)(M,{
          type:"primary",
          onClick:()=>es(),
          children:t||"Invite a developer"
        }),(0,i.jsx)(z,{
          visible:l,
          onCancel:eo,
          closable:!1,
          afterClose:()=>{
            r.resetFields()
          },
          footer:[],
          maskClosable:!1,
          destroyOnClose:!0,
          children:(0,i.jsxs)(C.Z,{
            form:r,
            onFinish:e=>{
              var t,
              n,
              i,
              o;
              let s=null==e?void 0:null===(t=e.appAccess)||void 0===t?void 0:t.filter(e=>Object.values(e)[0]);
              if(e.accessLevel=null==e?void 0:null===(n=e.accessLevel)||void 0===n?void 0:n.toLowerCase(),(null==e?void 0:e.appAccess)&&(null==e?void 0:null===(i=e.appAccess)||void 0===i?void 0:i.length)){
                let t=null==e?void 0:e.appAccess.map(e=>Object.values(e)[0]?{
                  appId:Object.keys(e)[0],
                  role:Object.values(e)[0]
                }:void 0);
                if((null==e?void 0:e.accessLevel)==="application"&&(null==s?void 0:s.length)<=0){
                  u.ZP.info("Please choose at least one app role.");
                  return
                }
                e.appAccess=t.filter(e=>e)
              }
              a((0,I.hI)({
                action:"Teammate invited on integration page",
                info:{
                  page:"setting",
                  data:{
                    level:null==e?void 0:null===(o=e.accessLevel)||void 0===o?void 0:o.toLowerCase(),
                    role:"member",
                    email:null==e?void 0:e.email
                  }
                }
              })),
              en({
                data:{
                  ...e,
                  emails:[e.emails]
                },
                orgId:_
              })
            },
            requiredMark:!1,
            children:[(0,i.jsxs)(P,{
              children:[(0,i.jsx)(O,{
                children:(0,i.jsx)(U,{
                  children:"Invite"
                })
              }),(0,i.jsx)("p",{
                children:"Now let's bring your teammate on board."
              }),(0,i.jsx)(B,{
                children:"Email"
              }),(0,i.jsx)(J,{
                name:"emails",
                rules:[{
                  required:!0,
                  whitespace:!0,
                  message:""
                },{
                  validator:A.Lo
                }],
                children:(0,i.jsx)(W,{
                  placeholder:"Enter email address",
                  ref:x
                })
              }),(0,i.jsx)(B,{
                children:"Access Level"
              }),(0,i.jsx)(J,{
                name:"accessLevel",
                initialValue:c,
                children:(0,i.jsx)(H,{
                  disabled:!0,
                  children:(0,i.jsxs)(j.default,{
                    value:"application",
                    children:["Application",(0,i.jsx)(q,{
                      children:"Granular access to selected apps. No access to the subscription and team settings."
                    })]
                  })
                })
              }),"application"===c&&(0,i.jsxs)(X,{
                children:[(0,i.jsx)(B,{
                  children:"App access"
                }),(0,i.jsx)(V,{
                  children:(null==m?void 0:m.length)>0&&m.map((e,t)=>L===(null==e?void 0:e.id)&&(0,i.jsx)("div",{
                    ref:y,
                    children:(0,i.jsx)(ee,{
                      label:(0,i.jsx)(E.Z,{
                        value:null==e?void 0:e.name
                      }),
                      name:["appAccess",t,"".concat(null==e?void 0:e.id)],
                      children:(0,i.jsx)(w.default,{
                        getPopupContainer:el,
                        children:N.Z.map(e=>{
                          var t;
                          return(null==e?void 0:e.role)!=="noAccess"&&(0,i.jsx)(T,{
                            value:null==e?void 0:e.role,
                            children:(0,i.jsxs)(G,{
                              children:[(0,i.jsx)($,{
                                children:null==e?void 0:e.roleText
                              }),null==e?void 0:null===(t=e.infoMessage)||void 0===t?void 0:t.map(e=>(0,i.jsx)("p",{
                                children:e
                              }))]
                            })
                          },null==e?void 0:e.role)
                        })
                      })
                    })
                  },null==e?void 0:e.id))
                })]
              })]
            }),(0,i.jsxs)(Y,{
              children:[(0,i.jsx)(K,{
                type:"secondary",
                onClick:()=>eo(),
                children:"Cancel"
              },"link"),(0,i.jsx)(Q,{
                htmlType:"submit",
                type:"primary",
                loading:ei,
                children:"Send invitation"
              },"submit")]
            })]
          })
        }),h&&(0,i.jsx)(R.Z,{
          visibleForbiddenModal:h,
          setVisibleForbiddenModal:f
        })]
      })
    },
    en=e=>{
      let{
        labelName:t
      }=e;
      return(0,i.jsx)(et,{
        buttonLabel:t
      })
    },
    ei=n(10764),
    eo=n(67401);
    let{
      Panel:es
    }=d.default,
    ea=(0,x.default)(c.Z).withConfig({
      componentId:"sc-118d444f-0"
    })(["color:#5d97ff;span{text-decoration:underline;}&:hover{border:none;}"]),
    er=(0,x.default)(c.Z).withConfig({
      componentId:"sc-118d444f-1"
    })(["height:34px;margin-right:10px;"]),
    el=x.default.div.withConfig({
      componentId:"sc-118d444f-2"
    })([""]),
    ed=x.default.p.withConfig({
      componentId:"sc-118d444f-3"
    })(["margin-buttom:10px;"]),
    ec=x.default.h2.withConfig({
      componentId:"sc-118d444f-4"
    })(["font-size:18px !important;"]),
    eu=e=>(0,i.jsx)(a.Z,{
      style:{
        opacity:e?"":".2"
      },
      onClick:e=>{
        e.stopPropagation()
      }
    }),
    ep={
      isEnvironmentsCreated:"1",
      isSDKIntegrated:"2",
      isAppScreensTagged:"3",
      isDataCleaned:"4",
      isSensitiveDataBlocked:"5",
      isCustomEventTracked:"6",
      isUserPropertiesUploaded:"7",
      isHandledExceptionsReported:"8",
      isAppAnalyticsToolIntegrated:"9",
      isCrashSessionsWatched:"10",
      isFirstSessionSegmentCreated:"11",
      isSlippingWayUserSessionWatched:"12",
      isMemberInvited:"13",
      isAppScreenRenamed:"14"
    },
    eh=e=>(0,v.useQuery)(["checkList",e],()=>(0,b.jQ)(e),{});
    var ef=()=>{
      let[e,t]=(0,o.useState)({
        loading:!1,
        emailAddress:"",
        doItMyself:!1,
        checkIntegrateDone:!1,
        visible:!1,
        emails:[],
        inviteRole:1,
        privateMessage:"",
        successVisible:!1,
        btnLoadingSensitive:!1,
        btnLoading:!1
      }),
      [n,a]=(0,o.useState)(!1),
      [x,w]=(0,o.useState)("0"),
      j=(0,v.useQueryClient)(),
      k=(0,s.I0)(),
      {
        noCodeEventsFeatureFlag:_
      }=(0,eo.Z)(),
      {
        currentAppReducer:C,
        urlReducer:S
      }=(0,s.v9)(e=>e),
      {
        _id:I
      }=C,
      {
        data:E
      }=eh(null==S?void 0:S.appId),
      F=(0,o.useMemo)(()=>["checkList",I],[I]),
      {
        mutate:A
      }=(0,v.useMutation)(e=>(0,b.kI)(e,I),{
        onSuccess:e=>{
          j.setQueryData(F,t=>({
            ...t,
            ...null==e?void 0:e.app
          })),
          u.ZP.success(null==e?void 0:e.message)
        },
        onError:e=>{
          var t,
          n;
          u.ZP.error(null==e?void 0:null===(n=e.data)||void 0===n?void 0:null===(t=n.error)||void 0===t?void 0:t.message)
        }
      }),
      Z=()=>{},
      N=e=>{
        e.stopPropagation(),
        e.preventDefault(),
        u.ZP.success("copied")
      },
      R=()=>{
        t({
          ...e,
          btnLoadingSensitive:!0
        }),
        k((0,b.ym)(I,{
          sensitiveDataBlocked:!0
        })).then(async n=>{
          n&&(t({
            ...e,
            btnLoadingSensitive:!1
          }),j.invalidateQueries(F))
        })
      },
      D=()=>{
        t({
          ...e,
          btnLoading:!0
        }),
        k((0,b.FY)(I,{
          appIntegrateAnalyticTool:!0
        })).then(async n=>{
          n&&(t({
            ...e,
            btnLoading:!1
          }),j.invalidateQueries(F))
        })
      },
      T=async()=>{
        (null==E?void 0:E.isCrashSessionsWatched)||await k((0,b.jG)(I,{
          crashSessionWatched:!0
        })).then(async e=>{
          e&&j.invalidateQueries(F)
        }).catch(e=>e),
        (null==E?void 0:E.isCrashSessionsWatched)&&window.open("".concat("https://app.uxcam.com","/app/").concat(I,'/sessions/list/1?session_crashed={"o":"equal","v":"True","tb":"session"}'),"_blank")
      },
      L=async()=>{
        (null==E?void 0:E.isSlippingWayUserSessionWatched)||await k((0,b.Oc)(I,{
          slippingWayUserSessionWatched:!0
        })).then(async e=>{
          e&&j.invalidateQueries(F)
        }),
        E.isSlippingWayUserSessionWatched&&window.open("".concat("https://app.uxcam.com","/app/").concat(I,'/users/list/1?user_session_count={"o":"greater","v":"10","tb":"appuser"}&user_session_duration={"o":"greater","v":"1800","tb":"appuser"}&user_last_seen_on={"o":"before","v":"2020-04-15","tb":"appuser"}'),"_blank")
      },
      M=(0,o.useMemo)(()=>{
        let e;
        return E&&Object.keys(ep).map(t=>(E[t]||void 0!==e||(e=ep[t]),e)),
        e
      },[E]),
      z=e=>{
        w(e)
      },
      P=(0,i.jsx)(p.Z,{
        lg:20,
        className:"height-full",
        children:(0,i.jsxs)(el,{
          className:"integrate-wrapper height-full",
          children:[(0,i.jsx)(ec,{
            children:"Getting started guide"
          }),(0,i.jsxs)("div",{
            className:"accordion-wrapper",
            children:[(0,i.jsx)("h3",{
              children:"Technical setup checklist"
            }),(0,i.jsxs)(d.default,{
              accordion:!0,
              activeKey:"0"===x?E&&M:x,
              onChange:z,
              children:[(0,i.jsxs)(es,{
                header:"Create your environments",
                extra:eu(null==E?void 0:E.isEnvironmentsCreated),
                expandIconPosition:"right",
                children:[(0,i.jsx)(ed,{
                  children:"Create separate instances for your test/internal data and your production data."
                }),!(null==E?void 0:E.isEnvironmentsCreated)&&(0,i.jsx)(er,{
                  onClick:()=>(null==E?void 0:E.isSDKIntegrated)?A({
                    step:"environmentsCreated"
                  }):u.ZP.info("You need to complete the SDK integration at first."),
                  children:"Done"
                }),(0,i.jsx)("a",{
                  href:"https://developer.uxcam.com/docs/so-what-does-uxcam-do#your-app-key-",
                  target:"_blank",
                  className:"ant-btn ant-btn-primary",
                  rel:"noreferrer",
                  children:"View steps"
                })]
              },"1"),(0,i.jsx)(es,{
                header:"SDK Integration",
                extra:eu(null==E?void 0:E.isSDKIntegrated),
                expandIconPosition:"right",
                children:(0,i.jsxs)(h.Z,{
                  type:"flex",
                  justify:"center",
                  children:[(0,i.jsxs)(p.Z,{
                    span:12,
                    style:{
                      borderRight:"1px solid #C0CAD9",
                      padding:"10px 30px 10px 0",
                      margin:"-16px 0"
                    },
                    children:[(0,i.jsx)("div",{
                      className:"demo-video-box",
                      style:{
                        boxShadow:"0 0 0 transparent"
                      },
                      children:(0,i.jsx)("span",{
                        children:(0,i.jsx)("img",{
                          src:"/static/features_session_recordings.png",
                          style:{
                            opacity:"1",
                            width:"250px"
                          },
                          alt:""
                        })
                      })
                    }),(0,i.jsx)("p",{
                      children:"Our SDK connects your app with UXCam to import all of your app’s data such as your users' sessions."
                    })]
                  }),(0,i.jsx)(p.Z,{
                    span:12,
                    children:(0,i.jsxs)("div",{
                      className:"integrate-welcome",
                      children:[(0,i.jsxs)("h2",{
                        children:['Setting up UXCam in "',null==C?void 0:C.name,'" is easy and only takes a few minutes.']
                      }),(0,i.jsx)("h2",{
                        children:"Ready to get started by adding two lines of code to your app?"
                      }),(0,i.jsxs)("div",{
                        className:"integrate-button-wrapper",
                        children:[(0,i.jsx)("a",{
                          href:"https://developer.uxcam.com/docs",
                          target:"_blank",
                          rel:"noreferrer",
                          className:"ant-btn ant-btn-primary integrate-button",
                          children:"View steps"
                        }),(0,i.jsx)(en,{
                          labelName:"Invite a developer",
                          showModal:Z
                        })]
                      }),(0,i.jsxs)("p",{
                        style:{
                          margin:"20px 0 30px"
                        },
                        children:[(0,i.jsxs)("strong",{
                          children:["UXCam app key :"," ",(0,i.jsx)("span",{
                            style:{
                              fontFamily:"monospace"
                            },
                            children:null==C?void 0:C.key
                          })]
                        }),(0,i.jsx)(y.CopyToClipboard,{
                          text:null==C?void 0:C.key,
                          onCopy:()=>{},
                          children:(0,i.jsx)(f.Z,{
                            placement:"topLeft",
                            title:"Copy",
                            arrowPointAtCenter:!0,
                            children:(0,i.jsx)(c.Z,{
                              onClick:e=>N(e),
                              size:"small",
                              style:{
                                borderRadius:"50%",
                                height:20,
                                width:20,
                                textAlign:"center",
                                background:"#dde3f3",
                                color:"#413eff",
                                border:"#dde3f3",
                                marginLeft:10,
                                padding:0
                              },
                              children:(0,i.jsx)(r.Z,{
                                style:{
                                  fontSize:"12px"
                                }
                              })
                            })
                          })
                        })]
                      }),(0,i.jsx)(m.Z,{
                        message:"",
                        description:"Remember that if you want to see your sessions on the dashboard, your app has to go to the background.",
                        type:"info",
                        showIcon:!0
                      })]
                    })
                  })]
                })
              },"2"),(0,i.jsxs)(es,{
                header:"Tag your app screens",
                extra:eu(null==E?void 0:E.isAppScreensTagged),
                expandIconPosition:"right",
                children:[(0,i.jsx)("p",{
                  style:{
                    marginBottom:"10px"
                  },
                  children:"Tag all the screens in your app to enrich the usage of heatmaps, filters, and other features within UXCam. This is helpful to decide where each screen starts and ends within your app."
                }),!(null==E?void 0:E.isAppScreensTagged)&&(0,i.jsx)(er,{
                  onClick:()=>(null==E?void 0:E.isSDKIntegrated)?A({
                    step:"appScreensTagged"
                  }):u.ZP.info("You need to complete the SDK integration at first."),
                  children:"Done"
                }),(0,i.jsx)("a",{
                  href:"https://uxcam-documentation.readme.io/docs/tag-of-screens",
                  target:"_blank",
                  className:"ant-btn ant-btn-primary",
                  rel:"noreferrer",
                  children:"View steps"
                })]
              },"3"),(0,i.jsxs)(es,{
                header:"Clean your data",
                extra:eu(null==E?void 0:E.isDataCleaned),
                expandIconPosition:"right",
                children:[(0,i.jsx)(ed,{
                  children:"Utilize our APIs to remove your internal testers or users who opt-out of tracking from your production data."
                }),!(null==E?void 0:E.isDataCleaned)&&(0,i.jsx)(er,{
                  onClick:()=>(null==E?void 0:E.isSDKIntegrated)?A({
                    step:"dataCleaned"
                  }):u.ZP.info("You need to complete the SDK integration at first."),
                  children:"Done"
                }),(0,i.jsx)("a",{
                  href:"https://uxcam-documentation.readme.io/docs/opt-in-opt-out",
                  target:"_blank",
                  className:"ant-btn ant-btn-primary",
                  rel:"noreferrer",
                  children:"View steps"
                })]
              },"4"),(0,i.jsxs)(es,{
                header:"Hide end-user personal data",
                extra:eu(E&&E.isSensitiveDataBlocked),
                expandIconPosition:"right",
                children:[(0,i.jsxs)("p",{
                  children:["Before recording any sessions and/or videos, please use UXCam API to hide any personal data that you would like to hide/ occlude from UXCam App so neither you nor UXCam will store personal data in UXCam app. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Remember that personal data means any information which are related to an identified or identifiable natural person. Examples of the above are: name, email address, password, home address, telephone, IP address, cookies, location, user ID that linked to other elements can identify someone. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"If you need more information on how to hide this information, please click the following"," ",(0,i.jsx)("a",{
                    href:"https://help.uxcam.com/en/articles/10426206-ensuring-data-protection-how-to-protect-sensitive-customer-data-with-uxcam",
                    target:"_blank",
                    rel:"noopener noreferrer",
                    children:"link"
                  })," ","and/or please contact support to explain to you how to do so."," ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("i",{
                    children:"Important: UXCam app does not hide personal information by default. Customer is the main responsible for using the UXCam API to hide this information."
                  })]
                }),E&&!E.isSensitiveDataBlocked&&(0,i.jsx)(er,{
                  onClick:()=>(null==E?void 0:E.isSDKIntegrated)?R():u.ZP.info("You need to complete the SDK integration at first."),
                  loading:null==e?void 0:e.btnLoadingSensitive,
                  children:"Done"
                }),(0,i.jsx)("a",{
                  href:"https://uxcam-documentation.readme.io/docs/screen-blurring",
                  target:"_blank",
                  className:"ant-btn ant-btn-primary",
                  rel:"noreferrer",
                  children:"View steps"
                })]
              },"5"),(0,i.jsxs)(es,{
                header:"Track ".concat(_?"coded":"custom"," events"),
                extra:eu(null==E?void 0:E.isCustomEventTracked),
                expandIconPosition:"right",
                children:[(0,i.jsxs)(ed,{
                  children:[_?"Coded":"Custom"," events enable detailed analysis."," "]
                }),(0,i.jsxs)("p",{
                  children:["Upload ",_?"coded":"custom"," events from your app to analyze the behavior of users who triggered certain events, e.g. a product purchase."]
                }),(0,i.jsx)("a",{
                  href:"https://uxcam-documentation.readme.io/docs/send-events",
                  target:"_blank",
                  className:"ant-btn ant-btn-primary",
                  rel:"noreferrer",
                  children:"View steps"
                })]
              },"6"),(0,i.jsxs)(es,{
                header:"Upload user properties",
                extra:eu(E&&E.isUserPropertiesUploaded),
                expandIconPosition:"right",
                children:[(0,i.jsx)(ed,{
                  children:"User properties make it easy to find specific users."
                }),(0,i.jsx)("p",{
                  children:"By default, we generate random aliases for your users based on their country of origin. If you want to easily identify your users in UXCam, you can upload e.g. the unique user id from your app to our dashboard. Additionally, you can send us other data that will allow you to segment users in a way that works best for you."
                }),(0,i.jsx)("a",{
                  href:"https://uxcam-documentation.readme.io/docs/send-user-properties",
                  target:"_blank",
                  className:"ant-btn ant-btn-primary",
                  rel:"noreferrer",
                  children:"View steps"
                })]
              },"7"),(0,i.jsxs)(es,{
                header:"Report Handled Exceptions",
                extra:eu(null==E?void 0:E.isHandledExceptionsReported),
                expandIconPosition:"right",
                children:[(0,i.jsx)(ed,{
                  children:"Available for native iOS and Android only. Non-fatal or caught exceptions are those that are manually handled by developers that do not result in application flow breaking. Once your application reaches a code block that raises an exception, you can catch the exception and send it to UXCam using the reportExceptionEvent API."
                }),!(null==E?void 0:E.isHandledExceptionsReported)&&(0,i.jsx)(er,{
                  onClick:()=>(null==E?void 0:E.isSDKIntegrated)?A({
                    step:"handledExceptionsReported"
                  }):u.ZP.info("You need to complete the SDK integration at first."),
                  children:"Done"
                }),(0,i.jsx)("a",{
                  href:"https://uxcam-documentation.readme.io/docs/report-handled-exceptions",
                  target:"_blank",
                  className:"ant-btn ant-btn-primary",
                  rel:"noreferrer",
                  children:"View steps"
                })]
              },"8"),(0,i.jsxs)(es,{
                header:"Integrate UXCam with other Analytics tools",
                extra:eu(E&&E.isAppAnalyticsToolIntegrated),
                expandIconPosition:"right",
                children:[(0,i.jsx)(ed,{
                  children:"Enrich your existing data."
                }),(0,i.jsx)("p",{
                  children:"If you use any other analytics tools like Firebase, you can easily integrate them with UXCam. This will let you track specific events and attach session URLs to external tools, which lets you dig deeper into the event's analysis."
                }),E&&!E.isAppAnalyticsToolIntegrated&&(0,i.jsx)(er,{
                  loading:null==e?void 0:e.btnLoading,
                  onClick:()=>E.isSDKIntegrated?D():u.ZP.info("You need to complete the SDK integration at first."),
                  children:"Done"
                }),(0,i.jsx)("a",{
                  href:"https://uxcam-documentation.readme.io/docs/other-3rd-party-integrations",
                  target:"_blank",
                  className:"ant-btn ant-btn-primary",
                  rel:"noreferrer",
                  children:"View steps"
                })]
              },"9")]
            })]
          }),(0,i.jsxs)("div",{
            className:"accordion-wrapper",
            children:[(0,i.jsxs)("h3",{
              children:["Onboarding checklist"," ",(0,i.jsxs)("small",{
                children:["( ",(0,i.jsx)(l.Z,{})," It is recommended to complete the technical setup checklist at first.)"]
              })]
            }),(0,i.jsxs)(d.default,{
              accordion:!0,
              activeKey:"0"===x?E&&M:x,
              onChange:z,
              children:[(0,i.jsxs)(es,{
                header:"Watch crashed sessions",
                extra:eu(null==E?void 0:E.isCrashSessionsWatched),
                expandIconPosition:"right",
                children:[(0,i.jsx)(ed,{
                  children:"Session segments allow you to uncover issues quickly."
                }),(0,i.jsx)("p",{
                  children:'With our default "crashed sessions" segment, you can easily watch all crashed session recordings to understand when and why they happened. This will speed up the process of troubleshooting bugs and issues and minimize confusing and frustrating conversations with customers.'
                }),(0,i.jsxs)(c.Z,{
                  className:"ant-btn-primary",
                  onClick:()=>(null==E?void 0:E.isSDKIntegrated)?T():u.ZP.info("You need to complete the SDK integration at first."),
                  children:[" ","Watch crashed session"]
                })]
              },"10"),(0,i.jsxs)(es,{
                header:"Create your first saved session segment",
                extra:eu(null==E?void 0:E.isFirstSessionSegmentCreated),
                expandIconPosition:"right",
                children:[(0,i.jsx)(ed,{
                  children:"Save time through custom segments."
                }),(0,i.jsx)("p",{
                  children:"Once you've determined which session properties are most\n                valuable, you can save these segments so that you don't need to\n                add filters manually"
                }),(0,i.jsx)("a",{
                  href:"https://help.uxcam.com/en/articles/10222530-filters-segments",
                  target:"_blank",
                  rel:"noreferrer",
                  className:"ant-btn ant-btn-primary",
                  children:"View steps"
                })]
              },"11"),(0,i.jsxs)(es,{
                header:"Watch sessions of users who are slipping away",
                extra:eu(null==E?void 0:E.isSlippingWayUserSessionWatched),
                expandIconPosition:"right",
                children:[(0,i.jsxs)(ed,{
                  children:["Find out which users are abandoning your app and discover why it may be happening."," "]
                }),(0,i.jsx)("p",{
                  children:"Thanks to this, you avoid losing users in the future!"
                }),(0,i.jsxs)(c.Z,{
                  className:"ant-btn-primary",
                  onClick:()=>(null==E?void 0:E.isSDKIntegrated)?L():u.ZP.info("You need to complete the SDK integration at first."),
                  children:[" ","Find users who are slipping away"," "]
                })]
              },"12"),(0,i.jsxs)(es,{
                header:"Invite your team members",
                extra:eu(E&&(null==E?void 0:E.isMemberInvited)),
                expandIconPosition:"right",
                children:[(0,i.jsx)("p",{
                  children:"Work with your team - two heads are always better than one."
                }),(0,i.jsx)(en,{
                  labelName:"Invite",
                  showModal:Z
                })]
              },"13"),(0,i.jsxs)(es,{
                header:"Rename your screens",
                extra:E&&eu(null==E?void 0:E.isAppScreenRenamed),
                expandIconPosition:"right",
                children:[(0,i.jsx)(ed,{
                  children:"Improve the usability of your UXCam dashboard!"
                }),(0,i.jsx)("p",{
                  children:"Go through the automatically detected screens and adjust their names to ones that make sense to you."
                }),(0,i.jsx)("a",{
                  href:"https://help.uxcam.com/hc/en-us/articles/360036091852-Screen-list",
                  target:"_blank",
                  rel:"noreferrer",
                  className:"ant-btn ant-btn-primary",
                  children:"View steps"
                })]
              },"14")]
            })]
          })]
        })
      });
      return(0,o.useEffect)(()=>{
        w("0")
      },[null==S?void 0:S.appId]),
      (0,i.jsx)("div",{
        className:"checklist-integrate-body",
        children:(0,i.jsxs)(h.Z,{
          className:"height-full",
          children:[!n&&P,n&&(0,i.jsx)(ei.Z,{
            toogleQuestionPage:e=>{
              e?a(!0):a(!1)
            }
          }),(0,i.jsx)(p.Z,{
            lg:4,
            className:"height-full",
            style:{
              marginLeft:"auto"
            },
            children:(0,i.jsx)("div",{
              className:"display-table",
              children:(0,i.jsxs)("div",{
                className:"integrate-sidebar",
                children:[(0,i.jsx)("div",{
                  className:"testimonial",
                  children:(0,i.jsxs)("a",{
                    href:"mailto:team@uxcam.com",
                    children:[(0,i.jsx)(g.C,{
                      src:"/static/susan-uxcam.jpg",
                      size:"large"
                    }),(0,i.jsx)("div",{
                      className:"person",
                      children:(0,i.jsxs)("p",{
                        children:[(0,i.jsx)("strong",{
                          children:"Susan Ostojska"
                        }),(0,i.jsx)("br",{}),(0,i.jsx)("small",{
                          children:"Head of Customer Success"
                        })]
                      })
                    })]
                  })
                }),!n&&(0,i.jsx)(ea,{
                  type:"link",
                  href:"https://help.uxcam.com/en/collections/11057211-faq",
                  target:"_blank",
                  children:"Still have questions?"
                })]
              })
            })
          })]
        })
      })
    }
  },
  4490:function(e,t,n){
    "use strict";
    var i=n(73495),
    o=n(11163),
    s=n.n(o),
    a=n(8891),
    r=n.n(a),
    l=n(67294),
    d=n(14416),
    c=n(47639),
    u=n(29163);
    t.Z=()=>{
      let e=(0,d.I0)(),
      [t,n]=(0,l.useState)(!1),
      [o,a]=(0,l.useState)(!1),
      [p,h]=(0,l.useState)({}),
      {
        currentAppReducer:f,
        applicationReducer:m,
        urlReducer:{
          parentType:g,
          funnelId:x,
          eventid:v
        },
        appFilter:y,
        accessManagement:{
          planStatus:b
        }
      }=(0,d.v9)(e=>e),
      {
        _id:w,
        orgId:j
      }=f,
      k=(0,l.useMemo)(()=>"/app/".concat(w),[w]),
      _=y.session.segment,
      C=y.user.segment,
      S=y.event.segment,
      I=y.screen.segment,
      E=y.issue.segment,
      F=y.screenFlow.segment,
      A=y.heatmap.segment,
      Z=(null==b?void 0:b.selectAppAction)||(null==b?void 0:b.selectUserAction),
      N=(0,l.useMemo)(()=>(null==f?void 0:f.error)?0:null==m?void 0:m.findIndex(e=>e.orgId===f.orgId),[f,m]),
      R=(0,l.useMemo)(()=>u.P9.indexOf(g)>-1?"overview":u.yb[g]||"overview",[g]),
      D=e=>{
        n(e)
      },
      T=(0,l.useCallback)(e=>{
        let t,
        n;
        switch(e){
          case"overview":t="".concat(k,"/overview");
          break;
          case"customDashboard":t="".concat(k,"/customDashboard");
          break;
          case"sessionsList":case"aiSessionsList":t="".concat(k,"/aisessions/list/1/"),
          n=_;
          break;
          case"sessionStatistics":case"aiSessionStatistics":t="".concat(k,"/aisessions/analytics"),
          n=_;
          break;
          case"usersList":t="".concat(k,"/users/list/1/"),
          n=C;
          break;
          case"screensList":t="".concat(k,"/heatmaps/list/1/"),
          n=I;
          break;
          case"heatmapsList":t="".concat(k,"/screens/list"),
          n=A;
          break;
          case"webHeatmaps":t="".concat(k,"/web-heatmap"),
          n=A;
          break;
          case"screenFlow":t="".concat(k,"/screenflow"),
          n=F;
          break;
          case"screenBurst":t="".concat(k,"/screenburst"),
          n=F;
          break;
          case"funnels":t="".concat(k,"/funnels").concat(x?"/".concat(x):"");
          break;
          case"eventsList":t="".concat(k,"/events/list/1/").concat(v&&"undefined"!==v?v:""),
          n=S;
          break;
          case"nocodeEventsList":t="".concat(k,"/smart-events/list/1/").concat(v&&"undefined"!==v?v:""),
          n=S;
          break;
          case"statistics":t="".concat(k,"/events/analytics"),
          n=S.find(e=>"no_code_event"===e.table)?[]:S;
          break;
          case"crashes":t="".concat(k,"/issues/crashes"),
          n=E;
          break;
          case"freezes":t="".concat(k,"/issues/freezes"),
          n=E;
          break;
          case"exceptions":t="".concat(k,"/issues/exceptions"),
          n=E;
          break;
          case"insights":t="".concat(k,"/insights");
          break;
          case"retention":t="".concat(k,"/retention");
          break;
          case"guide":t="".concat(k,"/guide")
        }
        return n&&n.length&&(t=(0,i.$)(t,n)),
        Z?"/plan-downgrade":t
      },[k,S,v,x,A,E,Z,F,I,_,C]);
      return{
        organizationIndex:N,
        urlRoutePageName:R,
        showAppList:t,
        showCreateApp:o,
        portalData:p,
        displayAppListPopover:D,
        navigateToPath:()=>{
          let e,
          t;
          D(!1),
          w?(e="/settings/app/".concat(j,"/").concat(w,"/video_recording_setting"),t="/integration?parentType=settings&setting=app_setting&org=".concat(j,"&app=").concat(w,"&app_tab=video_recording_setting")):0===m.length?(e="/settings/app",t="/integration?parentType=settings&setting=app_setting"):(e="/settings/app/".concat(m[0].orgId),t="/integration?parentType=settings&setting=app_setting&org=".concat(m[0].orgId)),
          s().push(t,e)
        },
        navigateToAppTeam:()=>{
          let e,
          t;
          D(!1),
          w?(e="/settings/app/".concat(j,"/").concat(w,"/team"),t="/integration?parentType=settings&setting=app_setting&org=".concat(j,"&app=").concat(w,"&app_tab=team")):0===m.length?(e="/settings/app",t="/integration?parentType=settings&setting=app_setting"):m[0].apps.length?(e="/settings/app/".concat(m[0].apps[0].orgId,"/").concat(m[0].apps[0]._id,"/team"),t="/integration?parentType=settings&setting=app_setting&org=".concat(m[0].orgId,"&app=").concat(m[0].apps[0]._id,"&app_tab=team")):(e="/settings/app/".concat(m[0].orgId),t="/integration?parentType=settings&setting=app_setting&org=".concat(m[0].orgId)),
          s().push(t,e)
        },
        showCreateAppBox:()=>{
          a(e=>!e)
        },
        getRouteUrl:T,
        getRouteQuery:(0,l.useCallback)((e,t)=>{
          let n=Z?"plan-downgrade":e;
          return"/integration?parentType=".concat(n,"&appId=").concat(w,"&issueType=").concat(t)
        },[w,Z]),
        navigateToTeam:()=>{
          let e,
          t;
          D(!1),
          j?(e="/settings/org/".concat(j,"/team"),t="/integration?parentType=settings&setting=org_setting&org=".concat(j,"&org_tab=team")):0===m.length?(e="/settings/org}",t="/integration?parentType=settings&setting=org_setting}"):(e="/settings/org/".concat(m[0].orgId,"/team"),t="/integration?parentType=settings&setting=org_setting&org=".concat(m[0].orgId,"&org_tab=team")),
          s().push(t,e)
        },
        navigateToSubscription:()=>{
          let e,
          t;
          D(!1),
          j?(e="/settings/org/".concat(j,"/plan"),t="/integration?parentType=settings&setting=org_setting&org=".concat(j,"&org_tab=plan")):0===m.length?(e="/settings/org}",t="/integration?parentType=settings&setting=org_setting}"):(e="/settings/org/".concat(m[0].orgId,"/plan"),t="/integration?parentType=settings&setting=org_setting&org=".concat(m[0].orgId,"&org_tab=plan")),
          s().push(t,e)
        },
        navigateToAccountSetting:e=>{
          e.preventDefault(),
          D(!1),
          s().push("/integration?parentType=settings&setting=profile_setting","/settings/profile")
        },
        dispatchPortalLink:t=>{
          e((0,c.aC)(t))
        },
        dispatchPlanHatPortalAccessData:e=>{
          h(e)
        },
        handleIntercom:async()=>{
          window.Intercom&&window.Intercom("show")
        },
        logout:()=>{
          var e;
          D(!1);
          let t="";
          try{
            t=localStorage.getItem("signupApp"),
            localStorage.clear(),
            t&&localStorage.setItem("signupApp",t),
            sessionStorage.clear()
          }
          catch(e){}window.Intercom&&window.Intercom("shutdown"),
          null===r()||void 0===r()||null===(e=r().persistence)||void 0===e||e.clear(),
          caches.delete("search-attribute-cache"),
          window.location.href="".concat("https://app.uxcam.com","/logout")
        },
        setPortalData:h
      }
    }
  },
  11182:function(e,t,n){
    "use strict";
    n.d(t,{
      H4:function(){
        return h
      },
      K$:function(){
        return f
      },
      S$:function(){
        return l
      },
      VM:function(){
        return m
      },
      YX:function(){
        return u
      },
      Yq:function(){
        return p
      },
      jJ:function(){
        return x
      },
      qk:function(){
        return g
      },
      tA:function(){
        return d
      },
      tF:function(){
        return c
      },
      vS:function(){
        return r
      }
    });
    var i=n(19521),
    o=n(79999),
    s=n(10276);
    n(67294);
    let{
      Sider:a
    }=s.default,
    r=(0,i.createGlobalStyle)([".collapsed-submenu-popup > ul > li:first-child{pointer-events:none;}.collapsed-submenu-popup{.ant-menu-sub{background:"," !important;padding:12px !important;border-radius:6px;.ant-menu-title-content{color:"," !important;a{color:inherit !important;}}.ant-menu-item{&:hover:not(:first-child):not(.ant-menu-item-selected){.ant-menu-title-content{color:"," !important;a{color:inherit !important;}}}> span:nth-child(1):not(:only-child){display:none;}}.ant-menu-item-selected{border-radius:6px;background-color:"," !important;.ant-menu-title-content{color:#fff !important;a{color:inherit !important;}}}}}.collapsed-submenu-popup{left:88px !important;z-index:99 !important;.collapsed-submenu-title{padding:0;font-weight:500;margin:0;height:18px !important;display:flex;align-items:center;margin-bottom:16px !important;}.ant-menu{box-shadow:none;border-radius:6px;padding:12px;border:1px solid ",";.ant-menu-item{height:36px;line-height:36px;}}}"],o.r.colors.primarySnow.toString(),o.r.colors.surface400.toString(),o.r.colors.primary500.toString(),o.r.colors.primary500.toString(),o.r.colors.surface10.toString()),
    l=i.default.span.withConfig({
      componentId:"sc-da4116c0-0"
    })(["position:absolute;top:52px;right:-12px;width:24px;height:24px;cursor:pointer;border-radius:50%;background:#fff;display:flex;justify-content:center;align-items:center;border:1px solid ",";font-size:20px;z-index:100;rotate:",";transition:rotate 0.2s ease-in-out;svg{width:24px;height:24px;fill:",";}"],o.r.colors.surface10.toString(),e=>{
      let{
        collapsed:t
      }=e;
      return t?"0deg":"180deg"
    },o.r.colors.surface300.toString()),
    d=(0,i.default)(a).withConfig({
      componentId:"sc-da4116c0-1"
    })(["overflow:visible !important;height:100vh;width:",";position:relative;"],e=>{
      let{
        collapsedMenu:t
      }=e;
      return t?"92px":"200px"
    }),
    c=i.default.div.withConfig({
      componentId:"sc-da4116c0-2"
    })(["display:flex;flex-direction:column;height:100%;background:",";#top{min-height:132px;height:auto;overflow:hidden;padding:0 12px;.logoWrapper{display:flex;justify-content:center;align-items:center;padding:24px 0 32px 0;img{width:",";height:24px;object-fit:cover;object-position:0px 0px;transition:width 0.3s;}}}#middle{flex:1;overflow:hidden;overflow-y:auto;padding:0 12px;.ant-menu-item-divider{border-color:",";margin-bottom:10px;}.ant-divider-horizontal{margin:0;}.ant-menu{background:transparent;padding:0 !important;min-width:",";.ant-menu-submenu-selected{.ant-menu-submenu-title{background-color:"," !important;color:"," !important;transition:all 0.6s ease-in-out;svg{fill:"," !important;}}.ant-menu-submenu-arrow:before,.ant-menu-submenu-arrow:after{background:"," !important;}}.ant-menu-item{margin:0;margin-bottom:10px;height:36px;svg{width:24px;height:24px;fill:","}&.ant-menu-item-disabled{color:"," !important;svg{fill:"," !important;}}}.ant-menu-submenu{svg{width:24px;height:24px;fill:","}.ant-menu-submenu-arrow{width:24px;height:24px;}&.ant-menu-submenu-disabled{color:"," !important;> .ant-menu-submenu-title{color:"," !important;svg{fill:"," !important;}}> .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,> .ant-menu-submenu-title > .ant-menu-submenu-arrow:after{background:"," !important;}}}.ant-menu-submenu-title{margin:0;height:36px;}.ant-menu-inline .ant-menu-item:first-child{margin-top:10px;}.ant-menu-item:last-child{margin-bottom:0;}.ant-menu-item,.ant-menu-submenu-title{padding:6px !important;border-radius:6px;color:",";.ant-menu-title-content{display:",";margin-left:8px;a{color:inherit !important;}}.ant-menu-submenu-arrow{right:6px;transform:translateY(-50%);top:",";}.ant-menu-submenu-arrow:before,.ant-menu-submenu-arrow:after{top:12px;left:8px;}&:hover{color:",";svg{fill:","}.ant-menu-submenu-arrow:before,.ant-menu-submenu-arrow:after{background:",";}}}}.ant-menu-submenu{margin:0;border-radius:6px;margin-bottom:10px;.anticon{height:24px;display:flex;align-items:center;}&.ant-menu-submenu-open{.ant-menu-submenu-arrow:before,.ant-menu-submenu-arrow:after{top:"," !important;}}}.ant-menu-submenu-vertical{width:100% !important;display:flex;align-items:center;.ant-menu-submenu-title{width:100% !important;margin:0;}}.ant-menu-item{padding-left:0;color:",";border-radius:6px;display:flex;align-items:center;transition:width 0.2s ease-in-out;width:",";span:only-child{margin-left:32px;}}.ant-menu-item-selected{background-color:",";color:#fff !important;.locked{background-color:",";}svg{fill:#fff !important;}}.ant-menu-submenu-arrow{opacity:1;}.ant-menu-submenu-arrow:before,.ant-menu-submenu-arrow:after{background:",";}}#bottom{overflow:hidden;padding:12px;.ant-menu{background:",";padding:0 6px;}.ant-menu-item,.ant-menu-submenu,.ant-menu-submenu-active{padding-left:0;color:",";border-radius:6px;&.ant-menu-item-selected{background-color:",";}}}"],o.r.colors.surface05.toString(),e=>{
      let{
        collapsedMenu:t
      }=e;
      return t?"50px":"142px"
    },o.r.colors.surface10.toString(),e=>{
      let{
        collapsedMenu:t
      }=e;
      return t?"56px":"176px"
    },e=>{
      let{
        collapsedMenu:t
      }=e;
      return t?o.r.colors.primary500.toString():"transparent"
    },e=>{
      let{
        collapsedMenu:t
      }=e;
      return t?"#fff":o.r.colors.primary500.toString()
    },e=>{
      let{
        collapsedMenu:t
      }=e;
      return t?"#fff":o.r.colors.primary500.toString()
    },e=>{
      let{
        collapsedMenu:t
      }=e;
      return t?"#fff":o.r.colors.primary500.toString()
    },o.r.colors.surface400.toString(),o.r.colors.surface200.toString(),o.r.colors.surface200.toString(),o.r.colors.surface400.toString(),o.r.colors.surface200.toString(),o.r.colors.surface200.toString(),o.r.colors.surface200.toString(),o.r.colors.surface200.toString(),o.r.colors.surface500.toString(),e=>{
      let{
        collapsedMenu:t
      }=e;
      return t?"none":"inline-block"
    },e=>{
      let{
        collapsedMenu:t
      }=e;
      return t?"20px":"50%"
    },o.r.colors.primary500.toString(),o.r.colors.primary500.toString(),o.r.colors.primary500.toString(),e=>{
      let{
        collapsedMenu:t
      }=e;
      return t?"12px":"10px"
    },o.r.colors.surface400.toString(),e=>{
      let{
        collapsedMenu:t
      }=e;
      return t?"max-content":"100%"
    },o.r.colors.primary500.toString(),o.r.colors.primary500.toString(),o.r.colors.surface400.toString(),o.r.colors.surface05.toString(),o.r.colors.surface400.toString(),o.r.colors.primarySky.toString()),
    u=i.default.div.withConfig({
      componentId:"sc-da4116c0-3"
    })(["display:flex;flex-direction:column;gap:10px;height:100%;.ant-btn{height:36px;margin-top:auto;width:",";border:1px solid transparent;overflow:hidden;background:transparent;display:flex;align-items:center;border-radius:6px;padding:0 6px;box-shadow:none;cursor:pointer;.ant-progress-text{color:",";font-size:8px;}svg{width:24px;min-width:24px;height:24px;fill:",";.ant-progress-circle-trail{stroke:",";}&:not(.ant-progress-circle-gradient) .ant-progress-circle-path{stroke:",";}}&:focus{color:inherit;}&:hover{color:",";svg{fill:",";}}span:nth-child(2):not(.ant-progress-text){margin-right:auto;margin-left:8px;}&.selected{background:",";color:",";width:",";.ant-progress-text{color:",";}svg{fill:",";}}}.ant-popover-open{background-color:",";color:"," !important;border:1px solid ",";svg{fill:"," !important;}}"],e=>{
      let{
        collapsed:t
      }=e;
      return t?"55px":"100%"
    },o.r.colors.surface400.toString(),o.r.colors.surface400.toString(),o.r.colors.surface100.toString(),o.r.colors.success500.toString(),o.r.colors.primary500.toString(),o.r.colors.primary500.toString(),o.r.colors.primary500.toString(),o.r.colors.primarySnow.toString(),e=>{
      let{
        collapsed:t
      }=e;
      return t?"max-content":"100%"
    },o.r.colors.primarySnow.toString(),o.r.colors.primarySnow.toString(),o.r.colors.surface10.toString(),o.r.colors.primary500.toString(),o.r.colors.primary200.toString(),o.r.colors.primary500.toString()),
    p=i.default.div.withConfig({
      componentId:"sc-da4116c0-4"
    })(["display:flex;height:36px;cursor:pointer;border-radius:6px;background:#E8E8EB;align-items:center;padding:0 6px;border:none !important;transition:color 0.2s ease-in-out;&.selected{background:",";color:",";svg{fill:",";}}.avatar-box{margin-right:0px;}&.ant-popover-open{background-color:",";color:"," !important;svg{fill:"," !important;}}#profile-name{font-size:14px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:auto;margin-left:8px;}svg{width:24px;min-width:24px;height:24px;fill:",";}&:hover:not(.ant-popover-open){background:",";color:",";svg{fill:",";}}"],o.r.colors.primary500.toString(),o.r.colors.primarySnow.toString(),o.r.colors.primarySnow.toString(),o.r.colors.primary500.toString(),o.r.colors.primarySnow.toString(),o.r.colors.primarySnow.toString(),o.r.colors.surface400.toString(),o.r.colors.primary100.toString(),o.r.colors.primary500.toString(),o.r.colors.primary500.toString()),
    h=i.default.div.withConfig({
      componentId:"sc-da4116c0-5"
    })(["display:flex;align-items:center;gap:8px;"]),
    f=i.default.div.withConfig({
      componentId:"sc-da4116c0-6"
    })(["height:18px;padding:0 6px;display:flex;align-items:center;justify-content:center;border-radius:4px;background:",";color:",";font-size:12px;"],o.r.colors.vizButtercup009.toString(),o.r.colors.surface500.toString()),
    m=i.default.div.withConfig({
      componentId:"sc-da4116c0-7"
    })(["border-bottom:",";"],e=>{
      let{
        isScrolled:t
      }=e;
      return t?"1px solid ".concat(o.r.colors.surface10.toString()):"none"
    }),
    g=i.default.span.withConfig({
      componentId:"sc-da4116c0-8"
    })(["display:inline;align-items:center;justify-content:center;width:24px;height:24px;position:relative;&:before{content:'';display:",";position:absolute;top:0px;right:0px;width:10px;height:10px;border-radius:50%;background:",";border:1px solid ",";}.locked{content:'';position:absolute;bottom:2px;right:2px;width:8px;height:10px;border-radius:3px;display:flex;align-items:center;justify-content:center;background-color:",";svg{width:12px !important;height:12px !important;scale:1.4;}}"],e=>{
      let{
        isNew:t
      }=e;
      return t?"block":"none"
    },o.r.colors.vizButtercup009.toString(),o.r.colors.surface05.toString(),o.r.colors.surface05.toString()),
    x=i.default.a.withConfig({
      componentId:"sc-da4116c0-9"
    })(["color:inherit;text-decoration:none;width:100%;text-align:left;"])
  },
  29163:function(e,t,n){
    "use strict";
    n.d(t,{
      Do:function(){
        return o
      },
      Hj:function(){
        return l
      },
      Kp:function(){
        return m
      },
      NU:function(){
        return r
      },
      P9:function(){
        return c
      },
      QD:function(){
        return u
      },
      T8:function(){
        return a
      },
      Z$:function(){
        return s
      },
      fR:function(){
        return f
      },
      rO:function(){
        return h
      },
      yb:function(){
        return d
      },
      z_:function(){
        return p
      }
    });
    var i=n(80235);
    let o="Please install the UXCam SDK to navigate.",
    s="https://help.uxcam.com",
    a="https://help.uxcam.com/hc/en-us/articles/360056754492--Product-Updates",
    r=["screenFlowBurst","sessionsListAnalytics","aiSessionsListAnalytics","eventsListAnalytics","issuesCrashesException","heatmapsList"],
    l={
      eventsList:"eventsListAnalytics",
      nocodeEventsList:"eventsListAnalytics",
      statistics:"eventsListAnalytics",
      screensList:"screensList",
      screenFlow:"screenFlowBurst",
      screenBurst:"screenFlowBurst",
      sessionsList:"aiSessionsListAnalytics",
      sessionStatistics:"aiSessionsListAnalytics",
      aiSessionsList:"aiSessionsListAnalytics",
      aiSessionStatistics:"aiSessionsListAnalytics",
      issues:"issuesCrashesException",
      heatmapsList:"heatmapsList",
      webHeatmaps:"heatmapsList"
    },
    d={
      eventsList:"events/list",
      nocodeEventsList:"smart-events/list",
      statistics:"events/analytics",
      sessionStatistics:"aisessions/analytics",
      aiSessionStatistics:"aisessions/analytics",
      screenFlow:"screenflow",
      sessionsList:"aisessions/list",
      aiSessionsList:"aisessions/list",
      screensList:"heatmaps/list",
      heatmapsList:"screens/list",
      usersList:"users/list",
      issues:"issues/crashes"
    },
    c=["settings","integration","dashboard","plan-downgrade"],
    u=["retention","eventsListAnalytics","heatmapsList","screenFlowBurst","funnels","issuesCrashesException"],
    p={
      overview:"overview",
      dashboard:"customDashboard",
      retention:"retention",
      funnels:"funnels",
      appFlows:"screenFlowBurst",
      screenFlow:"screenFlow",
      screenBurst:"screenBurst",
      divider:"divider1",
      sessions:"sessionsListAnalytics",
      aiSessions:"aiSessionsListAnalytics",
      sessionsList:"sessionsList",
      aiSessionsList:"aiSessionsList",
      sessionAnalytics:"sessionStatistics",
      aiSessionAnalytics:"aiSessionStatistics",
      users:"usersList",
      events:"eventsListAnalytics",
      eventsList:"eventsList",
      eventAnalytics:"statistics",
      screens:"heatmapsList",
      screensAnalytics:"heatmapsList",
      webHeatmaps:"webHeatmaps",
      issues:"issuesCrashesException",
      crashes:"crashes",
      uiFreeze:"freezes",
      exceptions:"exceptions"
    },
    h={
      [p.overview]:"overview",
      [p.dashboard]:"customDashboard",
      [p.retention]:"retention",
      [p.funnels]:"funnels",
      [p.appFlows]:"screenFlow",
      [p.screenFlow]:"screenFlow",
      [p.screenBurst]:"screenBurst",
      [p.sessions]:"aiSessionsList",
      [p.sessionsList]:"aiSessionsList",
      [p.sessionAnalytics]:"aiSessionStatistics",
      [p.aiSessions]:"aiSessionsList",
      [p.aiSessionsList]:"aiSessionsList",
      [p.aiSessionAnalytics]:"aiSessionStatistics",
      [p.users]:"usersList",
      [p.events]:"eventsList",
      [p.eventsList]:"eventsList",
      [p.eventAnalytics]:"eventsList",
      [p.screens]:"heatmapsList",
      [p.screensAnalytics]:"heatmapsList",
      [p.webHeatmaps]:"webHeatmaps",
      [p.issues]:"issues",
      [p.crashes]:"issues",
      [p.uiFreeze]:"issues",
      [p.exceptions]:"issues"
    },
    f={
      [p.overview]:i.s,
      [p.sessions]:i.kA,
      [p.aiSessions]:i.kA,
      [p.dashboard]:i.Sn,
      [p.retention]:i.Yb,
      [p.funnels]:i.Ei,
      [p.users]:i.Xw,
      [p.screens]:i._j,
      [p.screensAnalytics]:i._j,
      heatmapsListWeb:i.tz,
      [p.appFlows]:i.q2,
      [p.issues]:i.c2,
      [p.events]:i.l0
    },
    m={
      [p.overview]:i.s,
      [p.dashboard]:i.Sn,
      [p.retention]:i.Yb,
      [p.funnels]:i.Ei,
      [p.users]:i.Xw,
      [p.screens]:i._j,
      [p.screensAnalytics]:i._j,
      heatmapsListWeb:i.lm,
      [p.sessions]:i.w8,
      [p.aiSessions]:i.w8,
      [p.appFlows]:i.XQ,
      [p.issues]:i.Vn,
      [p.events]:i.aW
    }
  },
  10764:function(e,t,n){
    "use strict";
    var i=n(85893),
    o=n(67294),
    s=n(84620),
    a=n(74936),
    r=n(27205),
    l=n(73260),
    d=n(25409);
    let c=(0,i.jsx)("div",{
      className:"contact-us",
      children:(0,i.jsxs)("ul",{
        children:[(0,i.jsxs)("li",{
          children:[(0,i.jsx)("strong",{
            children:"North America"
          }),(0,i.jsx)("span",{
            children:"+1-415-941-4157 "
          })]
        }),(0,i.jsxs)("li",{
          children:[(0,i.jsx)("strong",{
            children:"Europe"
          }),(0,i.jsx)("span",{
            children:"+49-30-21788710 "
          })]
        })]
      })
    });
    t.Z=o.memo(e=>{
      let{
        toogleQuestionPage:t
      }=e;
      return(0,i.jsxs)("div",{
        children:[(0,i.jsxs)("div",{
          className:"question-wrapper",
          children:[(0,i.jsxs)("div",{
            className:"question-head clearfix",
            children:[(0,i.jsx)("h2",{
              children:"Questions?"
            }),(0,i.jsx)(a.Z,{
              id:"closeSessionDetail",
              icon:(0,i.jsx)(s.Z,{}),
              onClick:()=>t(!1),
              shape:"circle"
            })]
          }),(0,i.jsxs)("div",{
            className:"question-body",
            children:[(0,i.jsx)("div",{
              className:"question-item",
              children:(0,i.jsxs)(r.Z,{
                type:"flex",
                gutter:20,
                align:"middle",
                className:"height-full",
                children:[(0,i.jsxs)(l.Z,{
                  span:18,
                  children:[(0,i.jsx)("h3",{
                    children:"Book a Demo"
                  }),(0,i.jsx)("p",{
                    children:"Why should you book a demo?"
                  }),(0,i.jsxs)("ul",{
                    children:[(0,i.jsx)("li",{
                      children:"Understand why UXCam is being used on millions of devices everyday"
                    }),(0,i.jsx)("li",{
                      children:"Find out if UXCam is the right fit for your business"
                    }),(0,i.jsx)("li",{
                      children:"Get all your questions answered personally"
                    })]
                  })]
                }),(0,i.jsx)(l.Z,{
                  span:6,
                  style:{
                    textAlign:"right"
                  },
                  children:(0,i.jsx)(a.Z,{
                    type:"primary",
                    children:(0,i.jsx)("a",{
                      href:"https://uxcam.com/request-a-demo",
                      target:"_blank",
                      rel:"noreferrer",
                      children:"Request a demo"
                    })
                  })
                })]
              })
            }),(0,i.jsx)("div",{
              className:"question-item",
              children:(0,i.jsxs)(r.Z,{
                type:"flex",
                gutter:20,
                align:"middle",
                className:"height-full",
                children:[(0,i.jsx)(l.Z,{
                  span:18,
                  children:(0,i.jsx)("h3",{
                    children:"Check the FAQ"
                  })
                }),(0,i.jsx)(l.Z,{
                  span:6,
                  style:{
                    textAlign:"right"
                  },
                  children:(0,i.jsx)(a.Z,{
                    type:"primary",
                    children:(0,i.jsx)("a",{
                      href:"https://help.uxcam.com",
                      target:"_blank",
                      rel:"noreferrer",
                      children:"Go to FAQ"
                    })
                  })
                })]
              })
            }),(0,i.jsx)("div",{
              className:"question-item",
              children:(0,i.jsxs)(r.Z,{
                type:"flex",
                gutter:20,
                align:"middle",
                className:"height-full",
                children:[(0,i.jsx)(l.Z,{
                  span:18,
                  children:(0,i.jsx)("h3",{
                    children:"Message us"
                  })
                }),(0,i.jsx)(l.Z,{
                  span:6,
                  style:{
                    textAlign:"right"
                  },
                  children:(0,i.jsx)(a.Z,{
                    type:"primary",
                    children:(0,i.jsx)("a",{
                      href:"https://uxcam.com/contact",
                      target:"_blank",
                      rel:"noreferrer",
                      children:"Send us a message"
                    })
                  })
                })]
              })
            }),(0,i.jsx)("div",{
              className:"question-item",
              children:(0,i.jsxs)(r.Z,{
                type:"flex",
                gutter:20,
                align:"middle",
                className:"height-full",
                children:[(0,i.jsx)(l.Z,{
                  span:18,
                  children:(0,i.jsx)("h3",{
                    children:"Call us"
                  })
                }),(0,i.jsx)(l.Z,{
                  span:6,
                  style:{
                    textAlign:"right"
                  },
                  children:(0,i.jsx)(d.Z,{
                    placement:"topRight",
                    content:c,
                    children:(0,i.jsx)(a.Z,{
                      type:"primary",
                      children:"Call Us"
                    })
                  })
                })]
              })
            })]
          })]
        }),(0,i.jsx)("style",{
          children:"\n          .question-wrapper{\n            text-align: left;\n          }\n          .integrate-body .question-wrapper h2{\n             padding: 0;\n            float: left;\n            font-weight: 500;\n            margin: 0;\n          }\n          .integrate-body .question-wrapper p{\n            padding-top:0;\n          }\n          .integrate-body .question-wrapper p strong{\n            color: #868EA1;\n            font-weight: 600;\n          }\n          .question-wrapper .question-head{\n            border-bottom: 2px solid #f5f5f5;\n            padding: 10px 20px;\n            display: flex;\n            align-items: center;\n          }\n          .question-item{\n            border-bottom: 2px solid #f5f5f5;\n            padding: 35px 23px;\n          }\n          .question-item .ant-btn{\n            width: 160px;\n          }\n          .question-wrapper .question-head .ant-btn{\n            margin-left: auto;\n          }\n          .integrate-body .question-wrapper .question-item p{\n            padding-bottom: 5px;\n          }\n          .integrate-body .question-wrapper .question-item ul{\n            padding-left: 20px;\n          }\n          .integrate-body .question-wrapper .question-item ul li{\n            font-size: 14px;\n            list-style-type: disc;\n          }\n          .question-item h3{\n            font-size: 16px;\n            margin-bottom: 5px;\n          }\n          .contact-us{\n            padding: 10px;\n          }\n          .contact-us ul{\n            display: table;\n          }\n          .contact-us ul li{\n            margin: 10px 0;\n            display: table-row;\n          }\n          .contact-us ul li strong,\n          .contact-us ul li span{\n            display: table-cell;\n            padding: 5px 10px;\n            font-size: 14px;\n            color: #868ea1;\n          }\n\n        "
        })]
      })
    })
  },
  61275:function(e,t,n){
    "use strict";
    n.d(t,{
      Z:function(){
        return cu
      }
    });
    var i=n(85893),
    o=n(67294),
    s=n(14416),
    a=n(88767),
    r=n(84620),
    l=n(10276),
    d=n(85286),
    c=n(74936),
    u=n(30653),
    p=n(5152),
    h=n.n(p),
    f=n(98897),
    m=n.n(f),
    g=n(42967),
    x=n(7436),
    v=n.n(x),
    y=n(41609),
    b=n.n(y),
    w=n(94184),
    j=n.n(w),
    k=n(49705),
    _=n(5257),
    C=n(47639),
    S=n(18879),
    I=n(92046),
    E=n(41371),
    F=n(30998),
    A=n.n(F),
    Z=n(65883),
    N=n(48203),
    R=n(11163),
    D=n.n(R),
    T=n(19521),
    L=n(73495),
    M=e=>(0,i.jsx)("svg",{
      width:12,
      height:12,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"m2.869 6.75 4.2 4.2L6 12 0 6l6-6 1.069 1.05-4.2 4.2H12v1.5H2.869Z",
        fill:"currentColor"
      })
    }),
    z=n(4078),
    P=n(26617),
    O=n(89135),
    U=n(98352),
    B=n(55931),
    V=n(16783),
    W=n(85445),
    H=n(3641),
    q=n(61319),
    Q=n(52552),
    K=n(91369),
    G=n(81638),
    $=n(84378);
    let Y=e=>e?"Continue watching from session list:":"Sessions from session list:";
    var X=()=>{
      var e,
      t,
      n;
      let{
        urlReducer:{
          sessionid:a,
          sessionpage:r=1,
          appId:l,
          secondarysessionid:d,
          autoplay:c,
          notetab:u,
          starttime:p,
          eventid:h,
          parentType:f
        },
        appFilter:{
          session:{
            segment:m
          },
          dateSegment:g
        },
        currentOrgReducer:{
          planLimit:x
        }
      }=(0,s.v9)(e=>e),
      v=(0,s.I0)(),
      {
        mutate:y
      }=(0,$.T)(),
      {
        isPlaying:b,
        timeRef:w
      }=(0,_.W4)(),
      {
        nextSessionCallbackRef:j,
        playAllRef:k
      }=(0,_.rS)(),
      {
        trackUserTimeEvent:C
      }=(0,H.o)({
        expanded:!0
      }),
      S=(0,E.I)(),
      {
        utils:I,
        setUtils:F,
        setActiveSessionList:A
      }=(0,q.Fk)(),
      Z=Number(r),
      N=(0,o.useMemo)(()=>{
        try{
          return JSON.parse(localStorage.getItem("aiSessionsListReqBody")||"{}")
        }
        catch(e){
          return{}
        }
      },[]),
      R=(0,B.e)("web"),
      D=(0,o.useCallback)(()=>({
        appid:l,
        filters:m,
        date_range:g,
        orderBy:N.orderBy,
        page:Z||1,
        session_per_page:50,
        webApp:R,
        navigationType:"initial"
      }),[l,m,g,N.orderBy,Z,R]),
      [T,L]=(0,o.useState)(D),
      M=(0,o.useCallback)(()=>{
        let{
          navigationType:e,
          ...t
        }=T;
        return t
      },[T]);
      (0,o.useEffect)(()=>{
        try{
          localStorage.setItem("aiSessionsListReqBody",JSON.stringify(M()))
        }
        catch(e){}
      },[M]);
      let{
        data:X,
        isLoading:J,
        isFetching:ee
      }=(0,P.C)(M(),{
        enabled:!!N
      }),
      et=(0,o.useMemo)(()=>{
        var e,
        t;
        if(!X)return;
        let{
          data:n
        }=X;
        return{
          ...X,
          data:{
            ...n,
            data:{
              ...n.data,
              body:null===(t=n.data)||void 0===t?void 0:null===(e=t.body)||void 0===e?void 0:e.map(e=>({
                ...e,
                sessionLocked:(null==S?void 0:S.monthsOfVideosAccessible)&&(0,z.gO)(e.sessionUploadedDateTime,S.monthsOfVideosAccessible)&&(null==x?void 0:x.videoRetentionTime)!==(null==x?void 0:x.videoPlaybackAccessibleTime)
              }))
            }
          }
        }
      },[X,null==S?void 0:S.monthsOfVideosAccessible,x]),
      en=(0,o.useMemo)(()=>({
        appid:l,
        filters:[...m],
        date_range:{
          ...g
        }
      }),[l,m,g]),
      {
        data:ei,
        isLoading:eo
      }=(0,U.M)(en),
      es=(0,o.useMemo)(()=>{
        var e,
        t;
        return((null==et?void 0:null===(t=et.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.body)||[]).map((e,t)=>({
          dataIndex:t,
          index:t+1+(Z-1)*50,
          id:e.sessionid,
          name:(0,K.vW)(e.userProperty),
          location:e.country||"Unknown",
          duration:(0,W.mr)(e.sessionDuration).toString(),
          date:(0,K.I1)(e.deviceLocalDateTime,e.userTimezone)[0],
          status:"playing",
          isAIAnalyzed:e.sessionanalyzedbyai||!1,
          hasVideo:e.video||!1
        }))
      },[et,Z]),
      ea=(0,o.useMemo)(()=>{
        var e,
        t;
        return eo?"":(null==ei?void 0:null===(t=ei.boxes.Sessions)||void 0===t?void 0:null===(e=t.count)||void 0===e?void 0:e.value_this_period_string)||""
      },[ei,eo]),
      {
        handleRowClick:er
      }=(0,O.z)({
        expanded:!0
      }),
      el=(0,o.useCallback)(e=>{
        b&&C(e,null==w?void 0:w.current)
      },[C,b,w]),
      ed=(0,o.useCallback)(function(e,t,n){
        var i,
        o,
        s,
        r;
        let c=arguments.length>3&&void 0!==arguments[3]&&arguments[3],
        u=arguments.length>4&&void 0!==arguments[4]&&arguments[4],
        p=null==et?void 0:null===(s=et.data)||void 0===s?void 0:null===(o=s.data)||void 0===o?void 0:null===(i=o.body)||void 0===i?void 0:i.find(t=>t.sessionid===e);
        F(e=>({
          ...e,
          activePlaylist:q.W_.SESSION_PLAYLIST
        })),
        !c&&(t&&n&&v((0,K.Gp)({
          parentType:f,
          playlistType:Q.e.SESSION,
          sessionsPosition:n,
          selectedSessionPosition:t
        })),p&&v((0,K.qo)({
          sessionId:a,
          aiAnalyzed:p.sessionanalyzedbyai,
          containsVideo:p.video,
          duration:p.sessionDuration,
          gestureCount:p.totalGesture,
          parentType:f,
          sessionSelectedFrom:"session_playlist",
          filtersApplied:m,
          isRageTap:p.isRageTap,
          isUiFreeze:p.isuifreeze,
          isCrashed:p.crashed
        }))),
        y({
          appid:l,
          uxcamuserid:null==p?void 0:null===(r=p.userProperty)||void 0===r?void 0:r.uxcamuserid,
          recordedon:null==p?void 0:p.recordedon,
          session_per_page:101,
          usersessionrun:null==p?void 0:p.userSessionRun,
          webApp:R
        }),
        el(d),
        er({
          button:0
        },e,!1,!1,u)
      },[null==et?void 0:null===(t=et.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.body,F,y,l,R,el,d,er,v,f,a,m]),
      ec=e=>{
        var t,
        n,
        i,
        o,
        s;
        if(!(null==et?void 0:null===(n=et.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.pagination))return;
        let r=es.find(e=>e.id===a);
        if(!r)return;
        let l="next"===e?r.dataIndex+1:r.dataIndex-1,
        {
          pagination:d
        }=et.data.data,
        c=d.current,
        u=d.pages,
        p=l>=es.length&&"next"===e;
        if(v((0,K.X2)({
          currentOrder:r.index,
          total:(null==ei?void 0:null===(o=ei.boxes.Sessions)||void 0===o?void 0:null===(i=o.count)||void 0===i?void 0:i.value_this_period_number)||0,
          playlistType:Q.e.SESSION,
          direction:"next"===e?"next session":"previous session",
          parentType:f
        })),p){
          c<u&&L(e=>({
            ...e,
            page:e.page+1,
            navigationType:"next"
          }));
          return
        }
        if(l<0&&"prev"===e){
          c>1&&L(e=>({
            ...e,
            page:Math.max(e.page-1,1),
            navigationType:"prev"
          }));
          return
        }
        let h="next"===e?Math.min(l,es.length-1):Math.max(l,0),
        m=null===(s=es[h])||void 0===s?void 0:s.id;
        m&&ed(m,void 0,void 0,!0,!!(null==k?void 0:k.current))
      },
      eu=(0,o.useCallback)(e=>e===a&&a!==d,[a,d]),
      ep=(0,o.useCallback)(e=>{
        var t;
        (0,V.I)({
          page:T.page,
          appId:l,
          sessionid:e.sessionid,
          secondarysessionid:d,
          autoplay:c,
          segment:m,
          parentType:f,
          notetab:u,
          eventid:null,
          starttime:p,
          expanded:!1,
          dateSegment:null,
          uxcamuserid:null
        }),
        y({
          appid:l,
          uxcamuserid:null==e?void 0:null===(t=e.userProperty)||void 0===t?void 0:t.uxcamuserid,
          recordedon:null==e?void 0:e.recordedon,
          session_per_page:101,
          usersessionrun:null==e?void 0:e.userSessionRun,
          webApp:R
        })
      },[T.page,l,d,c,m,f,u,p,y,R]);
      (0,o.useEffect)(()=>{
        if(X&&(A(X),!es.some(e=>e.id===a))){
          var e,
          t,
          n,
          i,
          o,
          s,
          r,
          l,
          d,
          c,
          u,
          p;
          if("next"===T.navigationType&&es.length>0){
            let o=null===(e=es[0])||void 0===e?void 0:e.id,
            s=null==et?void 0:null===(i=et.data)||void 0===i?void 0:null===(n=i.data)||void 0===n?void 0:null===(t=n.body)||void 0===t?void 0:t.find(e=>e.sessionid===o);
            s&&(F(e=>({
              ...e,
              activePlaylist:q.W_.SESSION_PLAYLIST
            })),ep(s))
          }
          else if("prev"===T.navigationType&&es.length>0){
            let e=null===(o=es[es.length-1])||void 0===o?void 0:o.id,
            t=null==et?void 0:null===(l=et.data)||void 0===l?void 0:null===(r=l.data)||void 0===r?void 0:null===(s=r.body)||void 0===s?void 0:s.find(t=>t.sessionid===e);
            e&&(F(e=>({
              ...e,
              activePlaylist:q.W_.SESSION_PLAYLIST
            })),ep(t))
          }
          else{
            let e=null===(d=es[0])||void 0===d?void 0:d.id,
            t=null==et?void 0:null===(p=et.data)||void 0===p?void 0:null===(u=p.data)||void 0===u?void 0:null===(c=u.body)||void 0===c?void 0:c.find(t=>t.sessionid===e);
            t&&(F(e=>({
              ...e,
              activePlaylist:q.W_.INACTIVE
            })),ep(t))
          }
        }
      },[X]);
      let eh=(0,o.useMemo)(()=>{
        let e=es.find(e=>e.id===a);
        return{
          count:null==e?void 0:e.index,
          index:null==e?void 0:e.dataIndex
        }
      },[es,a]),
      ef=(0,o.useMemo)(()=>ea&&eh.count?"Session: ".concat(eh.count," out of ").concat(ea):"Session",[eh,ea]),
      em=(0,o.useMemo)(()=>{
        var e,
        t;
        if(!(null==et?void 0:null===(t=et.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.pagination))return{
          hasPrev:!1,
          hasNext:!1
        };
        let{
          pagination:n
        }=et.data.data;
        return{
          hasPrev:0!==eh.index||1!==n.current,
          hasNext:eh.index!==es.length-1||n.current!==n.pages
        }
      },[eh,null==et?void 0:null===(n=et.data)||void 0===n?void 0:n.data,es.length]),
      eg=(0,o.useCallback)(e=>{
        e&&v((0,K.kA)({
          parentType:f,
          playlistType:Q.e.SESSION
        }))
      },[v,f]);
      return(0,o.useEffect)(()=>(j.current=()=>ec("next"),()=>{
        j.current=null
      }),[j,a,null==k?void 0:k.current]),
      (0,i.jsx)(G.Z,{
        sessions:es,
        currentSessionId:a,
        isLoading:ee||eo,
        isActive:I.activePlaylist===q.W_.SESSION_PLAYLIST,
        onSessionClick:ed,
        onNextPrevClick:ec,
        showContinueWatching:eu,
        dropdownTitle:Y(eu(a)),
        styleConfig:{
          size:"lg"
        },
        triggerLabel:ef,
        hasPrev:em.hasPrev,
        hasNext:em.hasNext,
        onVisibleChange:eg
      })
    },
    J=e=>(0,i.jsx)("svg",{
      width:15,
      height:15,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M4.688 1.375a.875.875 0 0 0-1.75 0v.875h-.526a2.1 2.1 0 0 0-2.1 2.1v8.05a2.1 2.1 0 0 0 2.1 2.1h9.8a2.1 2.1 0 0 0 2.1-2.1V4.35a2.1 2.1 0 0 0-2.1-2.1h-.524v-.875a.875.875 0 0 0-1.75 0v.875h-5.25v-.875Zm-.7 4.157a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Zm0 3.236a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Zm2.275-2.186a1.05 1.05 0 1 1 2.1 0 1.05 1.05 0 0 1-2.1 0Zm1.05 2.186a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Zm2.275-2.186a1.05 1.05 0 1 1 2.1 0 1.05 1.05 0 0 1-2.1 0Z",
        fill:"#A2A5AE"
      })
    }),
    ee=n(44818),
    et=n(30663),
    en=n(37778),
    ei=n(84122);
    let{
      Header:eo
    }=l.default,
    es=T.default.div.withConfig({
      componentId:"sc-e70a3557-0"
    })(["display:flex;align-items:center;gap:8px;width:100%;justify-content:space-between;.left{display:flex;align-items:center;gap:8px;}.right{display:flex;align-items:center;}"]),
    ea=T.default.button.withConfig({
      componentId:"sc-e70a3557-1"
    })(["background:#fff;border:1px solid #F3F4F5;border-radius:5px;padding:0 8px;height:32px;font-size:13px;font-weight:500;line-height:32px;color:#161E35;cursor:pointer;display:flex;align-items:center;gap:9px;&:hover{color:#5D97FF;fill:#5D97FF;transition:all 0.3s ease-in-out;}"]),
    er=(0,T.default)(c.Z).withConfig({
      componentId:"sc-e70a3557-2"
    })(["border:1px solid #F3F4F5 !important;display:flex;border-radius:6px;gap:8px;span{line-height:13px;}svg{position:relative;top:-1px;}padding:8px 12px;&:disabled{background-color:#fff;color:#A2A5AE;font-weight:400 !important;border-color:red;}"]);
    var el=function(){
      let{
        urlReducer:{
          sessionpage:e=1,
          appId:t,
          autoplay:n
        },
        appFilter:{
          session:{
            segment:o
          }
        }
      }=(0,s.v9)(e=>e),
      a=(0,s.I0)(),
      {
        aiSessionFeatureAllowed:r
      }=(0,E.I)()||{},
      {
        aiSessionFeatureAllowed:l
      }=(0,E.I)()||{};
      return(0,i.jsx)(eo,{
        className:"global-menu",
        children:(0,i.jsx)("div",{
          className:"global-menu-container",
          children:(0,i.jsxs)(es,{
            className:"global-left-wrapper",
            children:[(0,i.jsxs)("div",{
              className:"left",
              children:[(0,i.jsxs)(ea,{
                type:"button",
                onClick:()=>{
                  let i=(0,L.$)("/app/".concat(t,"/aisessions/list/").concat(e||1,"?"),o),
                  s="appId=".concat(t,"&parentType=aiSessionsList&sessionpage=").concat(e||1,"&starttime=0").concat("&autoplay=".concat(n?"1":" 0"));
                  a((0,et.CW)(null,{
                    eventName:"go_back_to_session_list",
                    track_type:"event",
                    eventProperty:{}
                  })),
                  D().push("/integration?".concat(s),i)
                },
                children:[(0,i.jsx)(M,{}),(0,i.jsx)("span",{
                  children:"Session list"
                })]
              }),(0,i.jsx)(X,{}),(0,i.jsx)(en.Z,{
                isAlternativeStyle:!0
              })]
            }),(0,i.jsxs)("div",{
              className:"right",
              children:[!r&&l&&(0,i.jsx)(Z.B6,{
                children:(0,i.jsx)(ee.Z,{})
              }),(0,i.jsx)(ei.Z,{
                disabled:!0,
                children:e=>{
                  let{
                    btnLabel:t
                  }=e;
                  return(0,i.jsx)(N.Z,{
                    title:"This filter can only be changed outside the player. Please navigate back to adjust.",
                    placement:"bottomRight",
                    children:(0,i.jsxs)(er,{
                      className:"date-picker-trigger",
                      disabled:!0,
                      children:[(0,i.jsx)(J,{}),(0,i.jsx)("span",{
                        children:t
                      })]
                    })
                  })
                }
              }),r&&l&&(0,i.jsx)(Z.jI,{
                children:(0,i.jsx)(ee.Z,{})
              })]
            })]
          })
        })
      })
    };
    let ed=h()(Promise.resolve().then(n.bind(n,70934)),{
      loadableGenerated:{
        webpack:()=>[70934]
      },
      loading:()=>(0,i.jsx)(i.Fragment,{})
    });
    var ec=(0,o.memo)(e=>{
      let{
        isFilterDisplayBar:t
      }=e,
      {
        parentType:n,
        sessionid:a
      }=(0,s.v9)(e=>e.urlReducer),
      r=(0,o.useMemo)(()=>"aiSessionsList"===n&&a,[n,a]);
      return -1===S.h9.indexOf(n)?(0,i.jsx)(i.Fragment,{}):r?(0,i.jsx)(el,{}):t?(0,i.jsx)(ed,{}):(0,i.jsx)(Z.ZP,{})
    }),
    eu=n(93404),
    ep=()=>{
      let e=(0,s.I0)(),
      {
        currentOrgReducer:t,
        urlReducer:{
          parentType:n
        },
        currentAppReducer:a,
        applicationReducer:r
      }=(0,s.v9)(e=>e),
      l=!b()(t.remainingTrial)&&t.remainingTrial,
      d=A()(r,{
        orgId:a.orgId
      }),
      c=o.useMemo(()=>r[d].dashboardAccess&&(!l||l.hours+l.days!==0)||t.isLoggedFromAdminDashboard,[r,d,l,t]);
      return((0,eu.Z)(),(0,o.useEffect)(()=>{
        e((0,C.vT)([])),
        e((0,C.UD)([]))
      },[n]),c&&a.isIntegrated)?(0,i.jsx)(ec,{},n+a._id):null
    },
    eh=n(18398),
    ef=n(39284),
    em=n(67401),
    eg=n(52795),
    ex=n(4497),
    ev=n(57566),
    ey=n(13979),
    eb=n(73113),
    ew=n(55137),
    ej=n(22365),
    ek=n(32240),
    e_=n(22514),
    eC=n(17088);
    let eS=(0,T.createGlobalStyle)([".ant-modal-delete-nocode-event-wrapper{display:flex;align-items:center;}.ant-modal-delete-nocode-event{top:0;.ant-modal-content{border-radius:8px;padding:32px;}.ant-modal-body{padding:0;}}"]);
    var eI=(0,o.memo)(()=>{
      var e,
      t,
      n,
      r;
      let{
        deletePopupOpen:l,
        setDeletePopupOpen:d,
        currentAction:c,
        setCurrentAction:u,
        currentScreen:p,
        noCodeEventsFeatureFlag:h
      }=(0,em.Z)(),
      {
        sessionDetail:f,
        setSessionDetail:m,
        setSessionNocodeEvents:g,
        sessionNocodeEvents:x
      }=(0,_.Lc)(),
      {
        currentAppReducer:v,
        appFilter:{
          dateSegment:y
        }
      }=(0,s.v9)(e=>e),
      {
        _id:b
      }=v,
      {
        mutate:w,
        isLoading:j
      }=(0,a.useMutation)(ex.ZP),
      {
        message:k
      }=(0,ev.Z)(),
      C=(0,s.I0)(),
      S=(0,a.useQueryClient)(),
      I=(0,o.useCallback)(()=>({
        attribute:"nce_name",
        filter:[],
        search:"",
        dropdownLimit:501,
        date_range:y
      }),[y]),
      E=(0,o.useMemo)(()=>{
        var e;
        return(null==c?void 0:null===(e=c.props)||void 0===e?void 0:e.gestureType)||"not defined"
      },[null==c?void 0:null===(e=c.props)||void 0===e?void 0:e.gestureType]),
      F=(null==c?void 0:null===(t=c.props)||void 0===t?void 0:t.viewName)||(null==c?void 0:null===(n=c.props)||void 0===n?void 0:n.viewName),
      A=(null==c?void 0:null===(r=c.props)||void 0===r?void 0:r.viewType)||"",
      Z=(0,o.useMemo)(()=>h&&(0,eb._Y)(E,A,h,F),[A,F,h,E]),
      N=(0,o.useCallback)(()=>{
        j||(d(!1),u(void 0))
      },[j,d,u]),
      R=(0,o.useCallback)(()=>{
        if(null==c?void 0:c.props){
          let{
            id:e
          }=c;
          w({
            appId:b,
            nceId:e
          },{
            onSuccess:()=>{
              var t,
              n,
              i,
              o;
              S.invalidateQueries({
                queryKey:["manage-nocode-list"]
              }),
              S.invalidateQueries({
                queryKey:["nocodeEventList"]
              }),
              C((0,ew.MH)(I(),!1,!0)),
              C((0,et.CW)(null,{
                eventName:"wa_remove_nocode_event",
                track_type:"event",
                eventProperty:{
                  event_id:e,
                  screen_name:(0,ek.ww)("activityName",(null==p?void 0:p.activityName)||(null==c?void 0:c.screenName)||"undefined").value,
                  view_name:(0,ek.ww)("viewName",(null==c?void 0:null===(t=c.props)||void 0===t?void 0:t.viewName)||"undefined").value,
                  view_type:(null==c?void 0:null===(n=c.props)||void 0===n?void 0:n.viewType)||"",
                  element_id:(0,ek.ww)("idString",(null==c?void 0:null===(i=c.props)||void 0===i?void 0:i.idString)||"undefined").value,
                  gesture_type:null==c?void 0:null===(o=c.props)||void 0===o?void 0:o.viewTypeId,
                  gesture_name:E,
                  event_name:null==c?void 0:c.name,
                  type_of_event:"gesture"
                }
              })),
              e&&f&&p&&c&&m((0,ek.TG)(f,p,e)),
              g&&x&&g(x.filter(e=>e.event_name!==(null==c?void 0:c.name))),
              k({
                content:"Smart event has been deleted succesfully.",
                type:"success"
              }),
              N()
            },
            onError:e=>{
              k({
                content:"Something went wrong while deleting an event. Please try again.",
                type:"error"
              }),
              ey.l.error(e,"Error while creating an event")
            }
          })
        }
      },[c,w,b,S,C,I,p,E,f,g,x,k,N,m]);
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(eS,{}),(0,i.jsxs)(ef.default,{
          visible:l,
          footer:null,
          onCancel:N,
          closable:!1,
          className:"ant-modal-delete-nocode-event",
          wrapClassName:"ant-modal-delete-nocode-event-wrapper",
          width:570,
          children:[(0,i.jsxs)(e_.Dx,{
            children:["Delete smart event ",(0,i.jsx)("i",{
              children:null==c?void 0:c.name
            })," ?"]
          }),(0,i.jsx)(eC.RY,{
            showIcon:!0,
            icon:(0,i.jsx)(ej.Z,{}),
            rotate:180,
            message:(0,i.jsxs)(i.Fragment,{
              children:[(0,i.jsx)("b",{
                children:"Caution:"
              })," Deleting this event will impact the reports, funnels, and segments containing the event."]
            })
          }),(0,i.jsxs)(e_.__,{
            children:["You can recreate this event. The original interaction",Z?(0,i.jsxs)(i.Fragment,{
              children:[" ","(",(0,i.jsx)("b",{
                children:Z
              }),")"," "]
            }):" ","will remain in the sessions and continue to be captured."]
          }),(0,i.jsxs)(e_.EK,{
            children:[(0,i.jsx)(eg.Z,{
              width:"medium",
              variant:"ghost",
              onClick:N,
              disabled:j,
              children:"Cancel"
            }),(0,i.jsx)(eg.Z,{
              width:"medium",
              onClick:R,
              loading:j,
              children:"Delete event"
            })]
          })]
        })]
      })
    }),
    eE=n(72654),
    eF=n(73880),
    eA=n(93193),
    eZ=n(54882),
    eN=n(87066),
    eR=n(68805),
    eD=n(99252),
    eT=(0,o.memo)(()=>{
      var e;
      let{
        screenEventModalOpen:t,
        setScreenEventModalOpen:n,
        currentScreen:r,
        currentAction:l,
        deleteScreenEventPopupOpen:d,
        setCurrentScreen:c,
        setCurrentAction:u,
        setDeleteScreenEventPopupOpen:p,
        setDuplicateEventModalOpen:h,
        duplicateEventModalOpen:f
      }=(0,em.Z)(),
      {
        sessionDetail:m,
        setSessionDetail:g,
        sessionQueriesToInvalidate:x,
        setSessionQueriesToInvalidate:v,
        sessionNocodeEvents:y,
        setSessionNocodeEvents:b
      }=(0,_.Lc)(),
      {
        device:w
      }=m||{},
      [j]=eE.Z.useForm(),
      {
        message:k
      }=(0,ev.Z)(),
      C=(0,s.I0)(),
      S=(0,a.useQueryClient)(),
      {
        resetFields:I,
        setFieldsValue:E,
        setFields:F
      }=j,
      A=(0,o.useMemo)(()=>(null==l?void 0:l.id)&&(null==l?void 0:l.type)==="smart_screenvisit_event",[null==l?void 0:l.id,null==l?void 0:l.type]),
      Z=(0,o.useRef)(void 0),
      N=(0,o.useMemo)(()=>{
        var e;
        return(null==l?void 0:null===(e=l.props)||void 0===e?void 0:e.activityName)||(null==r?void 0:r.activityName)
      },[null==l?void 0:null===(e=l.props)||void 0===e?void 0:e.activityName,null==r?void 0:r.activityName]),
      {
        currentAppReducer:R,
        currentOrgReducer:D,
        urlReducer:T,
        screenTimelineReducer:{
          selectedEventField:L
        },
        screenRenamedList:M,
        appFilter:{
          dateSegment:z
        }
      }=(0,s.v9)(e=>e),
      P=null==T?void 0:T.parentType,
      O=(0,o.useMemo)(()=>"settings"===P,[P]),
      {
        _id:U
      }=R||{},
      B=null==D?void 0:D.orgId,
      V=(0,o.useMemo)(()=>M[N||""]||N,[N,M]),
      W=(0,o.useCallback)(()=>({
        attribute:"nce_name",
        filter:[],
        search:"",
        dropdownLimit:501,
        date_range:z
      }),[z]),
      {
        mutate:H,
        isLoading:q
      }=(0,a.useMutation)(ex.Kn),
      {
        mutate:Q,
        isLoading:K
      }=(0,a.useMutation)(ex.Ov),
      G=q||K,
      $=(0,o.useCallback)(()=>!G&&n(!1),[n,G]),
      Y=(0,o.useCallback)(()=>{
        A&&(n(!1),p(!0))
      },[A,p,n]),
      X=(0,o.useCallback)(()=>{
        A&&(n(!1),h(!0))
      },[A,h,n]),
      J=(0,o.useCallback)(()=>{
        let e=null==T?void 0:T.sessionid;
        e&&v([...x,e]),
        C((0,ew.MH)(W(),!1,!0)),
        S.invalidateQueries({
          queryKey:["sessionNocodeEvents"]
        }),
        S.invalidateQueries({
          queryKey:["manage-nocode-list"]
        })
      },[null==T?void 0:T.sessionid,C,W,S,v,x]),
      ee=(0,o.useCallback)(e=>{
        if(U&&B&&(null==w?void 0:w.platform)&&(null==r?void 0:r.activityName)&&(null==w?void 0:w.sdkVersion)){
          let{
            event_name:t,
            event_description:n
          }=e;
          H({
            name:null==t?void 0:t.trim(),
            description:n,
            appid:U,
            orgid:B,
            platform:null==w?void 0:w.platform,
            screen_name:[r.activityName],
            sdk_version:null==w?void 0:w.sdkVersion,
            category:["nocode"],
            previous_screen_name:[],
            next_screen_name:[],
            custom_property:{
              access:"Yes"
            }
          },{
            onSuccess:e=>{
              var i,
              o;
              J();
              let s=null==e?void 0:null===(o=e.data)||void 0===o?void 0:null===(i=o.data)||void 0===i?void 0:i.nceId;
              b&&y&&b([...y,{
                event_name:null==t?void 0:t.trim(),
                count:1
              }]);
              let a=[...L,{
                name:null==t?void 0:t.trim(),
                count:1
              }];
              if(C((0,eR.TH)(a)),s&&m&&r){
                let e={
                  id:s,
                  name:null==t?void 0:t.trim(),
                  description:n,
                  time:null==r?void 0:r.time,
                  params:{
                    screenName:null==r?void 0:r.activityName
                  },
                  type:"smart_screenvisit_event"
                };
                g((0,ek.zE)(m,r,e))
              }
              k({
                content:"Smart event has been created successfully.",
                type:"success"
              }),
              C((0,et.CW)(null,{
                eventName:"wa_create_nocode_event",
                track_type:"event",
                eventProperty:{
                  event_id:s,
                  event_name:null==t?void 0:t.trim(),
                  screen_name:V,
                  original_screen_name:null==r?void 0:r.activityName,
                  session_id:null==T?void 0:T.sessionid,
                  type_of_event:"screenvisit"
                }
              })),
              $()
            },
            onError:e=>{
              if(eN.default.isAxiosError(e)){
                var t;
                let n=(null==e?void 0:null===(t=e.request)||void 0===t?void 0:t.response)&&JSON.parse(e.request.response).error;
                if((null==n?void 0:n.status)===409&&(null==n?void 0:n.message)==="Duplicate name."){
                  F([{
                    name:"event_name",
                    errors:["Smart event with that name already exists"]
                  }]);
                  return
                }
              }
              k({
                content:"Something went wrong while creating an event. Please try again.",
                type:"error"
              }),
              ey.l.error(e,"Error while creating an event")
            }
          })
        }
        else k({
          content:"Something went wrong while creating an event",
          type:"error"
        }),
        ey.l.error([U&&B&&(null==w?void 0:w.platform)&&(null==r?void 0:r.activityName)&&(null==w?void 0:w.sdkVersion)],"Error with values when creating event"),
        k({
          content:"Something went wrong while creating an event",
          type:"error"
        })
      },[U,B,null==w?void 0:w.platform,null==w?void 0:w.sdkVersion,r,H,J,b,y,L,C,m,k,V,null==T?void 0:T.sessionid,$,g,F]),
      en=(0,o.useCallback)(e=>{
        let{
          event_name:t,
          event_description:n
        }=e;
        if(A){
          let e=null==l?void 0:l.id;
          Q({
            appid:U,
            description:n||"",
            name:(null==t?void 0:t.trim())||"",
            nce_id:e
          },{
            onSuccess:()=>{
              if(b&&y&&b(y.map(e=>e.event_name===(null==l?void 0:l.name)?{
                ...e,
                event_name:null==t?void 0:t.trim()
              }:e)),e&&m&&r&&l){
                let i={
                  ...l,
                  id:e,
                  name:null==t?void 0:t.trim(),
                  description:n,
                  params:{
                    screenName:null==r?void 0:r.activityName
                  }
                };
                g((0,ek.Pc)(m,i))
              }
              let i=L.map(e=>e.name===(null==l?void 0:l.name)?{
                ...e,
                name:null==t?void 0:t.trim()
              }:e);
              C((0,eR.TH)(i)),
              J(),
              k({
                content:"Smart event has been updated successfully.",
                type:"success"
              }),
              C((0,et.CW)(null,{
                eventName:"wa_modify_smart_event",
                track_type:"event",
                eventProperty:{
                  event_id:e,
                  type_of_event:"screenvisit",
                  event_name:null==t?void 0:t.trim(),
                  screen_name:V,
                  original_screen_name:null==r?void 0:r.activityName,
                  session_id:null==T?void 0:T.sessionid
                }
              })),
              $()
            },
            onError:e=>{
              if(eN.default.isAxiosError(e)){
                var t;
                let n=(null==e?void 0:null===(t=e.request)||void 0===t?void 0:t.response)&&JSON.parse(e.request.response).error;
                if((null==n?void 0:n.status)===409&&(null==n?void 0:n.message)==="Duplicate name."){
                  F([{
                    name:"event_name",
                    errors:["Smart event with that name already exists"]
                  }]);
                  return
                }
              }
              k({
                content:"Something went wrong while editing an event. Please try again.",
                type:"error"
              }),
              ey.l.error(e,"Error while editing an event")
            }
          })
        }
      },[A,l,Q,U,b,y,m,r,L,C,J,k,V,null==T?void 0:T.sessionid,$,g,F]),
      ei=(0,o.useCallback)(e=>A?en(e):ee(e),[A,ee,en]),
      eo=(0,o.useCallback)(()=>{
        I(),
        d||t||(u(void 0),c(void 0))
      },[I,d,t,u,c]);
      return(0,o.useEffect)(()=>{
        A&&E({
          event_name:null==l?void 0:l.name,
          event_description:(null==l?void 0:l.description)||""
        })
      },[E,A,null==l?void 0:l.name,null==l?void 0:l.description]),
      (0,o.useEffect)(()=>(t||f||(Z.current=setTimeout(eo,500)),()=>clearTimeout(null==Z?void 0:Z.current)),[eo,f,t]),
      (0,o.useEffect)(()=>{
        t&&C((0,et.CW)(null,{
          eventName:A?"wa_activity_open_modify_event_dialog":"wa_activity_open_create_event_dialog",
          track_type:"event",
          eventProperty:{
            session_id:null==m?void 0:m._id,
            type_of_event:"screenvisit",
            screen_name:V,
            original_screen_name:N
          }
        }))
      },[r,A,m,T,C,t,V,N]),
      (0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(eC.nz,{}),(0,i.jsx)(ef.default,{
          visible:t,
          footer:null,
          onCancel:$,
          closable:!1,
          className:"ant-modal-manage-nocode-event",
          wrapClassName:"ant-modal-manage-nocode-event-wrapper",
          destroyOnClose:!0,
          width:570,
          children:(0,i.jsxs)(eE.Z,{
            form:j,
            name:"manage-no-code-screen-event",
            onFinish:ei,
            children:[(0,i.jsx)(e_.Dx,{
              children:A?"Edit smart event - screen visit":"Create smart event - screen visit"
            }),(0,i.jsxs)(eC.DK,{
              children:["Create and manage events without a single line of code. Click ",(0,i.jsx)("a",{
                href:"https://help.uxcam.com/hc/en-us/articles/24753425542297-What-are-smart-events",
                target:"_blank",
                rel:"noreferrer",
                children:"here"
              })," to know more."]
            }),(0,i.jsxs)(eC.Rm,{
              children:[(0,i.jsx)(eC.AZ,{
                children:(0,i.jsx)("b",{
                  children:"Event name"
                })
              }),(0,i.jsx)(eE.Z.Item,{
                name:"event_name",
                rules:[{
                  required:!0,
                  message:"Please provide an event name"
                },{
                  max:50,
                  message:"The event name is too long. Please make it shorter."
                }],
                shouldUpdate:!0,
                children:(0,i.jsx)(eC.oH,{
                  placeholder:"Add event name",
                  disabled:G||!!A
                })
              }),(0,i.jsx)(eC.AZ,{
                children:(0,i.jsx)("b",{
                  children:"Description"
                })
              }),(0,i.jsx)(eE.Z.Item,{
                name:"event_description",
                className:"text-area",
                rules:[{
                  max:500,
                  message:"The description is too long. Please make it shorter."
                }],
                children:(0,i.jsx)(eC.ox,{
                  placeholder:"Add description",
                  disabled:G
                })
              }),(0,i.jsxs)(eC.pM,{
                isEditable:A,
                children:[(0,i.jsxs)(eC.ub,{
                  children:[(0,i.jsx)(e_.__,{
                    children:(0,i.jsx)("b",{
                      children:"Screen name:"
                    })
                  }),(0,i.jsx)(eC.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:V
                    })
                  })]
                }),(0,i.jsxs)(eC.ub,{
                  children:[(0,i.jsx)(e_.__,{
                    children:(0,i.jsx)("b",{
                      children:"Original screen name:"
                    })
                  }),(0,i.jsx)(eC.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:N
                    })
                  })]
                }),A&&(null==l?void 0:l.eventType)&&(0,i.jsxs)(eC.ub,{
                  children:[(0,i.jsx)(e_.__,{
                    children:(0,i.jsx)("b",{
                      children:"Event type:"
                    })
                  }),(0,i.jsx)(eC.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:null==l?void 0:l.eventType
                    })
                  })]
                }),A&&(null==l?void 0:l.createdByName)&&(0,i.jsxs)(eC.ub,{
                  children:[(0,i.jsx)(e_.__,{
                    children:(0,i.jsx)("b",{
                      children:"Created by:"
                    })
                  }),(0,i.jsx)(eC.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:null==l?void 0:l.createdByName
                    })
                  })]
                }),A&&(null==l?void 0:l.createdOn)&&(0,i.jsxs)(eC.ub,{
                  children:[(0,i.jsx)(e_.__,{
                    children:(0,i.jsx)("b",{
                      children:"Created on:"
                    })
                  }),(0,i.jsx)(eC.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:(0,eD.cT)(null==l?void 0:l.createdOn)
                    })
                  })]
                })]
              })]
            }),(0,i.jsx)(eE.Z.Item,{
              children:(0,i.jsxs)(eC.Zg,{
                children:[(0,i.jsx)(e_.EK,{
                  children:A&&(0,i.jsxs)(i.Fragment,{
                    children:[O&&(0,i.jsxs)(eg.Z,{
                      width:"default",
                      variant:"ghost",
                      size:"big",
                      onClick:X,
                      type:"button",
                      style:{
                        color:"#5D97FF",
                        fontSize:"12px",
                        lineHeight:"24px",
                        paddingRight:"12px"
                      },
                      loading:K,
                      disabled:q,
                      children:[(0,i.jsx)(eA.Z,{}),"Duplicate event"]
                    }),(0,i.jsxs)(eg.Z,{
                      width:"default",
                      variant:"ghost",
                      size:"big",
                      onClick:Y,
                      type:"button",
                      style:{
                        color:"#DC4F44",
                        fontSize:"12px",
                        lineHeight:"24px",
                        paddingRight:"12px"
                      },
                      loading:K,
                      disabled:q,
                      children:[(0,i.jsx)(eF.Z,{}),"Delete event"]
                    })]
                  })
                }),(0,i.jsxs)(e_.EK,{
                  children:[(0,i.jsx)(eg.Z,{
                    width:"medium",
                    variant:"ghost",
                    onClick:$,
                    disabled:G,
                    type:"button",
                    children:"Cancel"
                  }),(0,i.jsx)(eg.Z,{
                    width:"medium",
                    type:"submit",
                    loading:q,
                    disabled:K,
                    children:A?"Save":"Create event"
                  })]
                })]
              })
            })]
          })
        })]
      })
    });
    let eL=(0,T.createGlobalStyle)([".ant-modal-delete-nocode-event-wrapper{display:flex;align-items:center;}.ant-modal-delete-nocode-event{top:0;.ant-modal-content{border-radius:8px;padding:32px;}.ant-modal-body{padding:0;}}"]);
    var eM=(0,o.memo)(()=>{
      var e;
      let{
        deleteScreenEventPopupOpen:t,
        setDeleteScreenEventPopupOpen:n,
        currentAction:r,
        setCurrentAction:l,
        currentScreen:d
      }=(0,em.Z)(),
      {
        sessionDetail:c,
        setSessionDetail:u,
        setSessionNocodeEvents:p,
        sessionNocodeEvents:h
      }=(0,_.Lc)(),
      {
        currentAppReducer:f
      }=(0,s.v9)(e=>e),
      {
        _id:m
      }=f,
      {
        mutate:g,
        isLoading:x
      }=(0,a.useMutation)(ex.e5),
      {
        message:v
      }=(0,ev.Z)(),
      y=(0,s.I0)(),
      b=(0,a.useQueryClient)(),
      w=(0,o.useCallback)(()=>{
        x||(n(!1),l(void 0))
      },[x,n,l]),
      j=(0,o.useCallback)(()=>{
        if(null==r?void 0:r.props){
          let{
            id:e
          }=r;
          g({
            appId:m,
            nceId:e
          },{
            onSuccess:()=>{
              b.invalidateQueries({
                queryKey:["manage-nocode-list"]
              }),
              b.invalidateQueries({
                queryKey:["nocodeEventList"]
              }),
              y((0,et.CW)(null,{
                eventName:"wa_remove_nocode_event",
                track_type:"event",
                eventProperty:{
                  event_id:e,
                  screen_name:null==d?void 0:d.activityName,
                  event_name:null==r?void 0:r.name,
                  type_of_event:"screenvisit"
                }
              })),
              e&&c&&d&&r&&u((0,ek.O9)(c,d,e)),
              p&&h&&p(h.filter(e=>e.event_name!==(null==r?void 0:r.name))),
              v({
                content:"Smart event has been deleted successfully.",
                type:"success"
              }),
              w()
            },
            onError:e=>{
              v({
                content:"Something went wrong while deleting an event. Please try again.",
                type:"error"
              }),
              ey.l.error(e,"Error while creating an event")
            }
          })
        }
      },[r,g,m,b,y,d,c,p,h,v,w,u]),
      k=(0,o.useMemo)(()=>{
        var e;
        return(null==d?void 0:d.activityName)||(null==r?void 0:null===(e=r.props)||void 0===e?void 0:e.activityName)
      },[null==r?void 0:null===(e=r.props)||void 0===e?void 0:e.activityName,null==d?void 0:d.activityName]);
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(eL,{}),(0,i.jsxs)(ef.default,{
          visible:t,
          footer:null,
          onCancel:w,
          closable:!1,
          className:"ant-modal-delete-nocode-event",
          wrapClassName:"ant-modal-delete-nocode-event-wrapper",
          width:570,
          children:[(0,i.jsxs)(e_.Dx,{
            children:["Delete screen event ",(0,i.jsx)("i",{
              children:null==r?void 0:r.name
            })," ?"]
          }),(0,i.jsx)(eC.RY,{
            showIcon:!0,
            icon:(0,i.jsx)(ej.Z,{}),
            rotate:180,
            message:(0,i.jsxs)(i.Fragment,{
              children:[(0,i.jsx)("b",{
                children:"Caution:"
              })," Deleting this event will impact the reports, funnels, and segments containing the event."]
            })
          }),(0,i.jsxs)(e_.__,{
            children:["You can recreate this event. The original interaction"," ",k?(0,i.jsxs)(i.Fragment,{
              children:["(",(0,i.jsx)("b",{
                children:k
              }),")"]
            }):""," ","will remain in the sessions and continue to be captured."]
          }),(0,i.jsxs)(e_.EK,{
            children:[(0,i.jsx)(eg.Z,{
              width:"medium",
              variant:"ghost",
              onClick:w,
              disabled:x,
              children:"Cancel"
            }),(0,i.jsx)(eg.Z,{
              width:"medium",
              onClick:j,
              loading:x,
              children:"Delete event"
            })]
          })]
        })]
      })
    }),
    ez=n(77435),
    eP=n(95996),
    eO=n(7906),
    eU=n(17642);
    let eB=T.default.img.withConfig({
      componentId:"sc-89a1fd29-0"
    })(["width:",";height:",";border-radius:3px;"],e=>e.isSmall?"16px":"20px",e=>e.isSmall?"16px":"20px"),
    eV=T.default.div.withConfig({
      componentId:"sc-89a1fd29-1"
    })(["background-color:",";color:white;font-size:",";display:flex;justify-content:center;align-items:center;border-radius:50%;width:",";height:",";border-radius:3px;"],e=>e.color,e=>e.isSmall?"10px":"12px",e=>e.isSmall?"16px":"20px",e=>e.isSmall?"16px":"20px"),
    eW=T.default.button.withConfig({
      componentId:"sc-89a1fd29-2"
    })(["background-color:transparent;border:1px solid ",";padding:8px 10px;border-radius:6px;font-size:12px;line-height:14px;width:100%;color:#161E35;display:flex;align-items:center;gap:10px;cursor:pointer;>svg{margin-left:auto;}"],e=>e.active?"#5D97FF":"#E8E8EB"),
    eH=e=>{
      let{
        label:t,
        icon:n,
        isSmall:s
      }=e,
      a=(0,o.useMemo)(()=>t&&(0,eP.Z)(t),[t]),
      r=(0,o.useMemo)(()=>t&&t.charAt(0).toUpperCase(),[t]);
      return n?(0,i.jsx)(eB,{
        src:n,
        alt:t,
        isSmall:s
      }):(0,i.jsx)(eV,{
        color:a,
        isSmall:s,
        children:r
      })
    };
    var eq=(0,o.memo)(e=>{
      let{
        appList:t,
        getFieldValue:n,
        setFieldsValue:s
      }=e,
      [a,r]=o.useState(!1),
      [l,d]=o.useState(""),
      c=o.useRef(null),
      u=o.useCallback(e=>{
        d(e.target.value)
      },[]),
      p=n("destination_app"),
      h=o.useMemo(()=>t.map(e=>{
        let{
          label:t,
          value:n,
          icon:o
        }=e;
        return{
          key:n,
          label:t,
          icon:(0,i.jsx)(eH,{
            label:t,
            icon:o
          }),
          onClick:()=>{
            r(!1),
            s({
              destination_app:n
            })
          }
        }
      }),[t,s]),
      f=o.useMemo(()=>l.trim().length?h.filter(e=>e.label.toLowerCase().includes(l.toLowerCase())):h,[h,l]),
      m=t.find(e=>e.value===p),
      g=o.useMemo(()=>(0,i.jsxs)(eO.hF,{
        layoutVariant:"3tier",
        paddingVariant:"vertical",
        children:[(0,i.jsx)(eO.Mj,{
          ref:c,
          value:l,
          onChange:u
        }),(0,i.jsx)(eO.GP,{
          selectedKeys:[p||""],
          renderItems:f
        })]
      }),[f,u,l,p]);
      return(0,i.jsx)(eO.Fo,{
        children:(0,i.jsx)(eO.kF,{
          overlayClassName:"app-selector-dropdown",
          getPopupContainer:e=>e.parentNode,
          trigger:["click"],
          overlay:g,
          visible:a,
          onVisibleChange:e=>{
            r(e),
            e?setTimeout(()=>{
              var e;
              return null===(e=c.current)||void 0===e?void 0:e.focus()
            },10):d("")
          },
          children:(0,i.jsxs)(eW,{
            active:a,
            type:"button",
            children:[m&&(0,i.jsx)(eH,{
              label:null==m?void 0:m.label,
              icon:null==m?void 0:m.icon,
              isSmall:!0
            }),(null==m?void 0:m.label)||"Select destination app",(0,i.jsx)(eU.Z,{})]
          })
        })
      })
    });
    let eQ=(0,T.createGlobalStyle)([".ant-modal-duplicate-nocode-event-wrapper{display:flex;align-items:center;}.ant-modal-duplicate-nocode-event{top:0;.ant-modal-content{border-radius:8px;padding:32px;}.ant-modal-body{padding:0;}input{margin-bottom:0;}.ant-form-item-explain-error{font-size:12px;}form#duplicate-smart-event{margin-top:16px;}}.app-selector-dropdown{> div{width:100%;max-width:100%;}.ufc-dropdown-menu{max-width:100%;}}"]);
    var eK=(0,o.memo)(()=>{
      var e,
      t,
      n,
      r,
      l,
      d,
      c,
      u,
      p,
      h,
      f,
      m,
      g,
      x,
      v;
      let{
        duplicateEventModalOpen:y,
        setDuplicateEventModalOpen:b,
        currentAction:w,
        setCurrentAction:j,
        currentScreen:k
      }=(0,em.Z)(),
      {
        currentAppReducer:_,
        applicationReducer:C,
        currentOrgReducer:S,
        screenRenamedList:I
      }=(0,s.v9)(e=>e),
      [E,F]=o.useState({
        title:null,
        description:null
      }),
      A=null==S?void 0:S.orgId,
      Z=(0,o.useMemo)(()=>{
        var e;
        return C&&Array.isArray(C)&&(null===(e=C.find(e=>e.orgId===A))||void 0===e?void 0:e.apps)||[]
      },[C,A]),
      {
        _id:R
      }=_,
      D=(0,o.useMemo)(()=>Z.map(e=>({
        value:e._id,
        label:R===e._id?"".concat(e.name," (Current app)"):e.name,
        icon:(null==e?void 0:e.image)||void 0
      })).sort((e,t)=>R===e.value?-1:R===t.value?1:0),[R,Z]),
      {
        mutate:T,
        isLoading:L
      }=(0,a.useMutation)(ex.jl),
      {
        mutate:M,
        isLoading:z
      }=(0,a.useMutation)(ex.Kn),
      {
        message:P
      }=(0,ev.Z)(),
      O=(0,s.I0)(),
      U=(0,a.useQueryClient)(),
      [B]=eE.Z.useForm(),
      {
        setFieldsValue:V,
        getFieldValue:W,
        resetFields:H,
        setFields:q
      }=B,
      Q=(0,o.useMemo)(()=>(null==w?void 0:w.eventType)==="Screen",[null==w?void 0:w.eventType]),
      K=(0,o.useCallback)(()=>{
        L&&z||(b(!1),j(void 0),F({
          title:null,
          description:null
        }),H())
      },[L,z,b,j,H]),
      G=(0,o.useCallback)((e,t)=>{
        var n,
        i,
        o;
        O((0,et.CW)(null,{
          eventName:"wa_duplicate_nocode_event",
          track_type:"event",
          eventProperty:{
            screen_name:(0,ek.ww)("activityName",(null==k?void 0:k.activityName)||(null==w?void 0:w.screenName)||"undefined").value,
            element_id:(0,ek.ww)("idString",(null==w?void 0:null===(n=w.props)||void 0===n?void 0:n.idString)||"undefined").value,
            gesture_name:(null==w?void 0:null===(i=w.props)||void 0===i?void 0:i.viewName)||"undefined",
            gesture_type:(null==w?void 0:null===(o=w.props)||void 0===o?void 0:o.gestureType)||(null==w?void 0:w.name),
            event_id:e,
            event_name:W("event_name"),
            type_of_event:Q?"screenvisit":"gesture",
            destination_app_name:t,
            destination_appid:W("destination_app")
          }
        }))
      },[w,k,O,W,Q]),
      $=(0,o.useCallback)(e=>{
        if(eN.default.isAxiosError(e)){
          var t;
          let n=(null==e?void 0:null===(t=e.request)||void 0===t?void 0:t.response)&&JSON.parse(e.request.response).error;
          if((null==n?void 0:n.status)===409&&(null==n?void 0:n.message)==="Duplicate name."){
            q([{
              name:"event_name",
              errors:["Smart event with that name already exists in the selected app."]
            }]);
            return
          }
        }
        F({
          title:"Event duplication failed",
          description:"Something went wrong when trying to duplicate the smart event. Please try again later."
        }),
        ey.l.error(e,"Error while duplicating an event")
      },[q]),
      Y=(0,o.useCallback)(e=>{
        var t,
        n,
        o;
        let s=null===(t=D.find(t=>t.value===e.destination_app))||void 0===t?void 0:t.label,
        a=null==s?void 0:s.replace(/\s*\(Current app\)$/,"");
        M({
          name:null==e?void 0:null===(n=e.event_name)||void 0===n?void 0:n.trim(),
          description:null==e?void 0:e.event_description,
          appid:null==e?void 0:e.destination_app,
          orgid:A,
          platform:null,
          screen_name:[(null==w?void 0:null===(o=w.props)||void 0===o?void 0:o.activityName)||""],
          sdk_version:"",
          category:["nocode"],
          previous_screen_name:[],
          next_screen_name:[],
          custom_property:{
            access:"Yes"
          }
        },{
          onSuccess:t=>{
            var n,
            o;
            let s=null==t?void 0:null===(o=t.data)||void 0===o?void 0:null===(n=o.data)||void 0===n?void 0:n.nceId;
            R===e.destination_app&&U.invalidateQueries({
              queryKey:["manage-nocode-list"]
            }),
            F({
              title:"Event duplicated",
              description:(0,i.jsxs)(i.Fragment,{
                children:[" Your smart event ",(0,i.jsxs)("strong",{
                  children:["’",e.event_name,"’"]
                })," has been duplicated successfully. You can now find the event in ",a,". "]
              })
            }),
            s&&a&&G(s,a)
          },
          onError:e=>{
            $(e)
          }
        })
      },[R,D,M,null==w?void 0:null===(e=w.props)||void 0===e?void 0:e.activityName,A,U,$,G]),
      X=(0,o.useCallback)(e=>{
        var t,
        n,
        o,
        s,
        a;
        let r=null===(t=D.find(t=>t.value===e.destination_app))||void 0===t?void 0:t.label,
        l=null==r?void 0:r.replace(/\s*\(Current app\)$/,"");
        T({
          name:e.event_name.trim(),
          description:e.event_description,
          appid:e.destination_app,
          element_id:[null==w?void 0:null===(n=w.props)||void 0===n?void 0:n.idString],
          gesture_type:[eZ.u$[null==w?void 0:null===(o=w.props)||void 0===o?void 0:o.gestureType]],
          orgid:A,
          platform:null,
          sdk_version:"",
          screen_name:[(null==w?void 0:w.screenName)||""],
          view_name:[null==w?void 0:null===(s=w.props)||void 0===s?void 0:s.viewName],
          view_type:[eZ.ev[null==w?void 0:null===(a=w.props)||void 0===a?void 0:a.viewType]],
          category:["nocoode"]
        },{
          onSuccess:t=>{
            var n,
            o;
            let s=null==t?void 0:null===(o=t.data)||void 0===o?void 0:null===(n=o.data)||void 0===n?void 0:n.nceId;
            R===e.destination_app&&U.invalidateQueries({
              queryKey:["manage-nocode-list"]
            }),
            F({
              title:"Event duplicated",
              description:(0,i.jsxs)(i.Fragment,{
                children:[" Your smart event ",(0,i.jsxs)("strong",{
                  children:["’",e.event_name,"’"]
                })," has been duplicated successfully. You can now find the event in ",l,". "]
              })
            }),
            s&&l&&G(s,l)
          },
          onError:e=>{
            $(e)
          }
        })
      },[R,D,T,null==w?void 0:null===(t=w.props)||void 0===t?void 0:t.gestureType,null==w?void 0:null===(n=w.props)||void 0===n?void 0:n.idString,null==w?void 0:null===(r=w.props)||void 0===r?void 0:r.viewName,null==w?void 0:null===(l=w.props)||void 0===l?void 0:l.viewType,null==w?void 0:w.screenName,A,U,$,G]),
      J=(0,o.useCallback)(e=>{
        if(e&&A&&w)Q?Y(e):X(e);
        else{
          var t;
          P({
            content:"Something went wrong while creating an event",
            type:"error"
          }),
          ey.l.error([R&&(null==w?void 0:w.name)&&A&&(null==w?void 0:null===(t=w.props)||void 0===t?void 0:t.viewType)],"Error with values when creating event"),
          P({
            content:"Something went wrong while creating an event",
            type:"error"
          })
        }
      },[R,w,X,Y,Q,P,A]),
      ee=(0,o.useMemo)(()=>{
        var e;
        return(null==k?void 0:k.activityName)||(null==w?void 0:null===(e=w.props)||void 0===e?void 0:e.activityName)||(null==w?void 0:w.screenName)
      },[null==w?void 0:null===(d=w.props)||void 0===d?void 0:d.activityName,null==w?void 0:w.screenName,null==k?void 0:k.activityName]),
      en=(0,o.useMemo)(()=>{
        var e;
        return(null==w?void 0:w.type)==="gesture"?(null==w?void 0:w.name)||"Undefined":(null==w?void 0:null===(e=w.props)||void 0===e?void 0:e.gestureType)||"Undefined"
      },[null==w?void 0:w.name,null==w?void 0:null===(c=w.props)||void 0===c?void 0:c.gestureType,null==w?void 0:w.type]),
      ei=(0,o.useMemo)(()=>{
        var e;
        return null==w?void 0:null===(e=w.props)||void 0===e?void 0:e.rule
      },[null==w?void 0:null===(u=w.props)||void 0===u?void 0:u.rule]),
      eo=(0,o.useMemo)(()=>I[ee||""]||ee,[ee,I]);
      return o.useEffect(()=>{
        H(),
        (null==w?void 0:w.name)&&V({
          event_name:"Copy of ".concat(null==w?void 0:w.name)
        })
      },[w,H,V]),
      (0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(eQ,{}),(0,i.jsx)(ef.default,{
          visible:y,
          footer:null,
          onCancel:K,
          closable:!1,
          className:"ant-modal-duplicate-nocode-event",
          wrapClassName:"ant-modal-duplicate-nocode-event-wrapper",
          width:570,
          children:(null==E?void 0:E.title)&&E.description?(0,i.jsxs)(eC.uH,{
            children:[(0,i.jsx)(e_.Dx,{
              children:E.title
            }),(0,i.jsx)(eC.DK,{
              children:E.description
            }),(0,i.jsx)(eg.Z,{
              onClick:K,
              width:"medium",
              type:"button",
              children:"Ok"
            })]
          }):(0,i.jsxs)(i.Fragment,{
            children:[(0,i.jsxs)(e_.Dx,{
              children:[(0,i.jsx)(ez.Z,{})," Duplicate smart event"]
            }),(0,i.jsxs)(eC.pM,{
              isEditable:!0,
              children:[(0,i.jsxs)(eC.ub,{
                children:[(0,i.jsx)(e_.__,{
                  children:(0,i.jsx)("b",{
                    children:"Screen name:"
                  })
                }),(0,i.jsx)(eC.u2,{
                  isUneditable:!0,
                  children:(0,i.jsx)("span",{
                    children:(0,ek.ww)("activityName",eo).jsx
                  })
                })]
              }),Q?(0,i.jsxs)(i.Fragment,{
                children:[(0,i.jsxs)(eC.ub,{
                  children:[(0,i.jsx)(e_.__,{
                    children:(0,i.jsx)("b",{
                      children:"Original screen name:"
                    })
                  }),(0,i.jsx)(eC.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:ee||(0,i.jsx)("i",{
                        children:"Undefined"
                      })
                    })
                  })]
                }),(0,i.jsxs)(eC.ub,{
                  children:[(0,i.jsx)(e_.__,{
                    children:(0,i.jsx)("b",{
                      children:"Event type:"
                    })
                  }),(0,i.jsx)(eC.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:(null==w?void 0:w.eventType)||(0,i.jsx)("i",{
                        children:"Undefined"
                      })
                    })
                  })]
                })]
              }):(0,i.jsxs)(i.Fragment,{
                children:[(0,i.jsxs)(eC.ub,{
                  children:[(0,i.jsx)(e_.__,{
                    children:(0,i.jsx)("b",{
                      children:"Gesture type:"
                    })
                  }),(0,i.jsx)(eC.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:en
                    })
                  })]
                }),(0,i.jsxs)(eC.ub,{
                  children:[(0,i.jsx)(e_.__,{
                    children:(0,i.jsx)("b",{
                      children:"UI element type:"
                    })
                  }),(0,i.jsx)(eC.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:(null==w?void 0:null===(p=w.props)||void 0===p?void 0:p.viewType)||(0,i.jsx)("i",{
                        children:"Undefined"
                      })
                    })
                  })]
                }),(0,i.jsxs)(eC.ub,{
                  children:[(0,i.jsx)(e_.__,{
                    children:(0,i.jsx)("b",{
                      children:"UI element name:"
                    })
                  }),(0,i.jsx)(eC.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:(0,i.jsx)(N.Z,{
                        overlay:(0,ek.hJ)(null==w?void 0:null===(h=w.props)||void 0===h?void 0:h.viewName)&&(null==w?void 0:null===(f=w.props)||void 0===f?void 0:f.viewName),
                        placement:"top",
                        children:(0,ek.ww)("viewName",(null==w?void 0:null===(m=w.props)||void 0===m?void 0:m.viewName)||"undefined",ei).jsx
                      })
                    })
                  })]
                }),(0,i.jsxs)(eC.ub,{
                  children:[(0,i.jsx)(e_.__,{
                    children:(0,i.jsx)("b",{
                      children:"UI element ID:"
                    })
                  }),(0,i.jsx)(eC.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:(0,i.jsx)(N.Z,{
                        overlay:(0,ek.hJ)(null==w?void 0:null===(g=w.props)||void 0===g?void 0:g.idString)&&(null==w?void 0:null===(x=w.props)||void 0===x?void 0:x.idString),
                        placement:"top",
                        children:(0,ek.ww)("idString",(null==w?void 0:null===(v=w.props)||void 0===v?void 0:v.idString)||"undefined",ei).jsx
                      })
                    })
                  })]
                })]
              })]
            }),(0,i.jsxs)(eE.Z,{
              form:B,
              name:"duplicate-smart-event",
              onFinish:J,
              children:[(0,i.jsx)(eC.AZ,{
                children:(0,i.jsx)("b",{
                  children:"Destination app"
                })
              }),(0,i.jsx)(eE.Z.Item,{
                name:"destination_app",
                rules:[{
                  required:!0,
                  message:"Please provide a destination app"
                }],
                shouldUpdate:!0,
                children:(0,i.jsx)(eq,{
                  appList:D,
                  getFieldValue:W,
                  setFieldsValue:V
                })
              }),(0,i.jsx)(eC.AZ,{
                children:(0,i.jsx)("b",{
                  children:"Event name"
                })
              }),(0,i.jsx)(eE.Z.Item,{
                name:"event_name",
                rules:[{
                  required:!0,
                  message:"Please provide an event name"
                },{
                  max:50,
                  message:"The event name is too long. Please make it shorter."
                }],
                shouldUpdate:!0,
                children:(0,i.jsx)(eC.oH,{
                  placeholder:"Add event name",
                  disabled:L||z
                })
              }),(0,i.jsx)(eC.AZ,{
                children:(0,i.jsx)("b",{
                  children:"Description"
                })
              }),(0,i.jsx)(eE.Z.Item,{
                name:"event_description",
                className:"text-area",
                rules:[{
                  max:500,
                  message:"The description is too long. Please make it shorter."
                }],
                children:(0,i.jsx)(eC.ox,{
                  placeholder:"Add description",
                  disabled:L||z
                })
              }),(0,i.jsxs)(e_.EK,{
                children:[(0,i.jsx)(eg.Z,{
                  width:"medium",
                  variant:"ghost",
                  onClick:K,
                  disabled:L||z,
                  children:"Cancel"
                }),(0,i.jsx)(eg.Z,{
                  width:"medium",
                  type:"submit",
                  loading:L||z,
                  children:"Duplicate"
                })]
              })]
            })]
          })
        })]
      })
    }),
    eG=n(53678),
    e$=n(16905);
    let eY=h()(()=>Promise.all([n.e(9010),n.e(5142),n.e(4417),n.e(5873),n.e(8388),n.e(522)]).then(n.t.bind(n,80400,23)).then(e=>e.DashboardTemplate),{
      loadableGenerated:{
        webpack:()=>[80400]
      },
      ssr:!1
    }),
    eX=T.default.div.withConfig({
      componentId:"sc-cbe0d9f-0"
    })(["h2{font-weight:500;margin-bottom:16px !important;}button{height:32px;min-width:132px !important;}.modal-footer{margin-top:32px !important;}"]);
    var eJ=(0,o.memo)(()=>{
      let{
        showDashboardTemplate:e,
        setShowDashboardTemplate:t,
        currentAction:n
      }=(0,em.Z)(),
      [a,r]=o.useState(!1),
      {
        currentAppReducer:l
      }=(0,s.v9)(e=>e),
      {
        _id:d
      }=l,
      [c,u]=o.useState(null),
      [p,h]=o.useState(null),
      f=(0,eO.ye)("new-screens-filter"),
      m=(0,eO.ye)("conversion-report"),
      g=o.useMemo(()=>(null==n?void 0:n.type)==="sdk_event"?"coded_event_insights":"smart_event_insights",[null==n?void 0:n.type]),
      x=o.useMemo(()=>(null==n?void 0:n.type)==="sdk_event"?{
        $CODED_EVENT$:null==n?void 0:n.name
      }:{
        $SMART_EVENT$:null==n?void 0:n.name
      },[null==n?void 0:n.name,null==n?void 0:n.type]),
      v=o.useCallback(e=>{
        var n,
        i;
        u((null==e?void 0:null===(i=e.edge)||void 0===i?void 0:null===(n=i.node)||void 0===n?void 0:n.id)||null),
        t(!1),
        r(!0)
      },[t]),
      y=o.useCallback((e,n)=>{
        u(e||null),
        h(n||null),
        t(!1),
        r(!0)
      },[t]);
      return a?(0,i.jsx)(eG.oA,{
        centered:!0,
        visible:a,
        onCancel:()=>r(!1),
        footer:null,
        closable:!1,
        children:(0,i.jsxs)(eX,{
          children:[(0,i.jsx)("h2",{
            children:"Your event analysis is ready"
          }),(0,i.jsxs)("p",{
            children:[p?(0,i.jsxs)(i.Fragment,{
              children:["Reports added to the dashboard ",(0,i.jsx)("strong",{
                children:p
              }),"."]
            }):(0,i.jsxs)(i.Fragment,{
              children:["Dashboard ",(0,i.jsx)("strong",{
                children:null==n?void 0:n.name
              })," Analysis has been created."]
            })," ","Dive in to discover trends and patterns in user behavior."]
          }),(0,i.jsxs)("div",{
            className:"modal-footer",
            children:[(0,i.jsx)(eO.zx,{
              variant:"ghost",
              onClick:()=>r(!1),
              children:"Cancel"
            }),(0,i.jsx)(eO.zx,{
              variant:"primary",
              onClick:()=>window.open("/app/".concat(d,"/customDashboard/").concat(c),"_blank"),
              children:"View analysis"
            })]
          })]
        })
      }):e?(0,i.jsx)(eY,{
        env:"production",
        templateId:g,
        templateProperties:x,
        appId:d,
        onClose:()=>t(!1),
        onDashboardCreate:v,
        onWidgetAddition:y,
        noCodeEnabled:!0,
        conversionEnabled:m,
        newScreenFilter:f,
        onBeforeRequest:e$.e.refreshIfNeeded
      }):null
    }),
    e0=n(79999),
    e1=n(98341);
    let e2=T.default.div.withConfig({
      componentId:"sc-8cfaa10d-0"
    })(["position:relative;"]),
    e5=T.default.div.withConfig({
      componentId:"sc-8cfaa10d-1"
    })(["padding:56.25% 0 0 0;position:relative;background-color:#0B0F23;overflow:hidden;"]),
    e4=T.default.button.withConfig({
      componentId:"sc-8cfaa10d-2"
    })(["position:absolute;background:none;cursor:pointer;top:-30px;right:-30px;height:30px;width:30px;border:none;padding:0;margin:0;svg > path{stroke:",";}"],e0.r.colors.primarySnow.toString());
    var e6=o.memo(()=>{
      let{
        showNoCodeEventsTutorial:e,
        setShowNoCodeEventsTutorial:t
      }=(0,em.Z)(),
      n=o.useCallback(()=>{
        t(!1)
      },[t]);
      return(0,i.jsx)(ef.default,{
        width:800,
        bodyStyle:{
          padding:0
        },
        destroyOnClose:!0,
        visible:e,
        onCancel:n,
        maskClosable:!0,
        closable:!1,
        footer:!1,
        centered:!0,
        children:(0,i.jsxs)(e2,{
          children:[(0,i.jsx)(e4,{
            onClick:n,
            children:(0,i.jsx)(e1.Z,{})
          }),(0,i.jsx)(e5,{
            children:(0,i.jsx)("iframe",{
              src:"https://player.vimeo.com/video/889855543?h=1558086bea&badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479",
              frameBorder:"0",
              allow:"autoplay; fullscreen; picture-in-picture",
              style:{
                position:"absolute",
                top:"0",
                left:"0",
                width:"100%",
                height:"100%"
              },
              title:"How to create smart events in UXCam"
            })
          })]
        })
      })
    }),
    e3=(0,o.memo)(()=>(0,i.jsxs)(i.Fragment,{
      children:[(0,i.jsx)(eh.ZP,{}),(0,i.jsx)(eT,{}),(0,i.jsx)(eI,{}),(0,i.jsx)(eM,{}),(0,i.jsx)(eK,{}),(0,i.jsx)(eJ,{})," ",(0,i.jsx)(e6,{})]
    })),
    e8=n(12616),
    e7=n(49588),
    e9=n(5084),
    te=n(71734),
    tt=n(20938),
    tn=n(38014),
    ti=n(65885),
    to=n(29230),
    ts=e=>(0,i.jsx)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M14 2 9.2 6.8M6.8 12.8V9.2H3.2M9.2 3.2v3.6h3.6M6.8 9.2 2 14",
        stroke:"currentColor",
        strokeWidth:1.5,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    }),
    ta=e=>(0,i.jsx)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M6.8 9.2 2 14M14 5.6V2h-3.6M2 10.4V14h3.6M14 2 9.2 6.8",
        stroke:"currentColor",
        strokeWidth:1.5,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    }),
    tr=e=>(0,i.jsx)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M9.875 3.625a1.875 1.875 0 1 0 3.75 0 1.875 1.875 0 0 0-3.75 0ZM2.375 8a1.875 1.875 0 1 0 3.75 0 1.875 1.875 0 0 0-3.75 0ZM9.875 12.375a1.875 1.875 0 1 0 3.75 0 1.875 1.875 0 0 0-3.75 0ZM5.869 8.944l4.268 2.487M10.131 4.569 5.87 7.056",
        stroke:"#161E35",
        strokeWidth:1.4,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    }),
    tl=e=>(0,i.jsxs)("svg",{
      width:82,
      height:36,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("path",{
        d:"M4.001 18.482a7.538 7.538 0 0 1 6.947 4.653c.377.909.571 1.882.573 2.866a8.013 8.013 0 0 1-7.52-7.519Zm15.999 0a8.012 8.012 0 0 1-7.52 7.519 7.538 7.538 0 0 1 4.653-6.945A7.536 7.536 0 0 1 20 18.482Zm-8.479-8.48a7.536 7.536 0 0 1-7.52 7.521 8.014 8.014 0 0 1 7.52-7.52Zm.96 0A8.013 8.013 0 0 1 20 17.524a7.536 7.536 0 0 1-7.52-7.52Z",
        fill:"url(#taraAILogoCircular_svg__a)"
      }),(0,i.jsx)("path",{
        d:"M28.805 11.96V9.248h12.288v2.712h-4.464V26h-3.36V11.96h-4.464Zm13.156 7.344c0-4.152 2.688-6.816 6.072-6.816 2.136 0 3.6 1.008 4.392 2.112v-1.896h3.384V26h-3.384v-1.944c-.792 1.152-2.304 2.16-4.416 2.16-3.36 0-6.048-2.76-6.048-6.912Zm10.464.048c0-2.52-1.68-3.912-3.528-3.912-1.8 0-3.504 1.344-3.504 3.864 0 2.52 1.704 3.96 3.504 3.96 1.848 0 3.528-1.392 3.528-3.912Zm9.305.024V26h-3.36V12.704h3.36v2.064c.84-1.368 2.232-2.256 4.08-2.256v3.528h-.888c-1.992 0-3.192.768-3.192 3.336Zm4.76-.072c0-4.152 2.687-6.816 6.071-6.816 2.136 0 3.6 1.008 4.392 2.112v-1.896h3.384V26h-3.384v-1.944c-.792 1.152-2.304 2.16-4.416 2.16-3.36 0-6.048-2.76-6.048-6.912Zm10.463.048c0-2.52-1.68-3.912-3.528-3.912-1.8 0-3.504 1.344-3.504 3.864 0 2.52 1.704 3.96 3.504 3.96 1.848 0 3.528-1.392 3.528-3.912Z",
        fill:"url(#taraAILogoCircular_svg__b)"
      }),(0,i.jsxs)("defs",{
        children:[(0,i.jsxs)("linearGradient",{
          id:"taraAILogoCircular_svg__a",
          x1:15.784,
          y1:18.002,
          x2:7.608,
          y2:24.082,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        }),(0,i.jsxs)("linearGradient",{
          id:"taraAILogoCircular_svg__b",
          x1:67.77,
          y1:18,
          x2:48.673,
          y2:39.3,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })]
      })]
    }),
    td=e=>(0,i.jsxs)("svg",{
      width:34,
      height:17,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:34,
        height:17,
        rx:3,
        fill:"#E8E8EB"
      }),(0,i.jsx)("path",{
        d:"M10.23 11.834V13H5.947v-1.166h4.283ZM6.357 4.469V13h-1.47V4.469h1.47Zm7.3 0V13h-1.47V4.469h1.47Zm5.883 0V13h-1.46V4.469h1.46Zm2.677 0V5.64h-6.79V4.469h6.79Zm7.43 7.365V13h-4.53v-1.166h4.53Zm-4.114-7.365V13h-1.47V4.469h1.47Zm3.522 3.562V9.18h-3.938V8.03h3.938Zm.562-3.562V5.64h-4.5V4.469h4.5Z",
        fill:"#737886"
      })]
    }),
    tc=e=>(0,i.jsxs)("svg",{
      width:34,
      height:17,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:34,
        height:17,
        rx:3,
        fill:"url(#icon-pro_svg__a)"
      }),(0,i.jsx)("path",{
        d:"M8.516 9.959H6.343V8.588h2.173c.336 0 .61-.055.82-.164.212-.113.366-.27.464-.469.097-.2.146-.424.146-.674 0-.254-.049-.49-.146-.709a1.184 1.184 0 0 0-.463-.527c-.211-.133-.485-.2-.82-.2H6.951V13H5.194V4.469h3.322c.668 0 1.24.12 1.717.363.48.238.848.568 1.102.99.254.422.38.905.38 1.448 0 .55-.126 1.027-.38 1.43-.254.402-.621.712-1.102.93-.476.22-1.049.329-1.717.329Zm5.132-5.49h3.182c.652 0 1.213.097 1.682.293.472.195.836.484 1.09.867.253.383.38.853.38 1.412 0 .457-.078.85-.234 1.178-.152.324-.37.595-.65.814a3.375 3.375 0 0 1-.979.516l-.556.293h-2.766l-.012-1.371h2.057c.308 0 .564-.055.767-.164.203-.11.356-.262.457-.457.106-.196.159-.422.159-.68 0-.274-.051-.51-.153-.71a1.028 1.028 0 0 0-.463-.456c-.207-.106-.466-.158-.779-.158h-1.424V13h-1.758V4.469ZM18.418 13l-1.945-3.803 1.857-.011 1.969 3.732V13h-1.881Zm10.646-4.465v.404c0 .649-.088 1.23-.264 1.746a3.838 3.838 0 0 1-.744 1.319c-.32.36-.703.635-1.149.826a3.659 3.659 0 0 1-1.47.287 3.686 3.686 0 0 1-1.47-.287 3.296 3.296 0 0 1-1.15-.826 3.86 3.86 0 0 1-.755-1.319c-.176-.515-.264-1.097-.264-1.746v-.404c0-.652.088-1.234.264-1.746a3.84 3.84 0 0 1 .744-1.318c.324-.364.707-.64 1.148-.832a3.686 3.686 0 0 1 1.471-.287c.54 0 1.03.095 1.47.287.446.191.829.468 1.15.832.323.363.573.802.75 1.318.179.512.269 1.094.269 1.746Zm-1.776.404v-.416c0-.453-.04-.851-.123-1.195a2.59 2.59 0 0 0-.363-.867 1.568 1.568 0 0 0-.586-.527 1.675 1.675 0 0 0-.79-.182c-.298 0-.561.06-.792.182-.227.117-.42.293-.58.527a2.669 2.669 0 0 0-.357.867 5.18 5.18 0 0 0-.123 1.195v.416c0 .45.04.848.123 1.196.082.344.203.635.363.873.16.234.355.412.586.533.23.121.494.182.79.182.298 0 .561-.06.792-.182.23-.121.424-.299.58-.533.156-.238.275-.53.357-.873.082-.348.123-.746.123-1.196Z",
        fill:"#fff"
      }),(0,i.jsx)("defs",{
        children:(0,i.jsxs)("linearGradient",{
          id:"icon-pro_svg__a",
          x1:36.662,
          y1:3.975,
          x2:24.464,
          y2:29.417,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:.444,
            stopColor:"#AC87EB"
          }),(0,i.jsx)("stop",{
            offset:.99,
            stopColor:"#49C5FF"
          })]
        })
      })]
    }),
    tu=e=>(0,i.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        x:2,
        y:2.587,
        width:12,
        height:1.5,
        rx:.75,
        fill:"currentColor"
      }),(0,i.jsx)("rect",{
        x:2,
        y:7.25,
        width:10.655,
        height:1.5,
        rx:.75,
        fill:"currentColor"
      }),(0,i.jsx)("rect",{
        x:2,
        y:11.913,
        width:8.464,
        height:1.5,
        rx:.75,
        fill:"currentColor"
      })]
    }),
    tp=n(38627),
    th=n(46294),
    tf=n(90745),
    tm=e=>(0,i.jsx)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M7.41 3.09A.59.59 0 0 1 8 2.5a5.5 5.5 0 1 1-4.635 8.462.59.59 0 0 1 .993-.636c.141.221.303.429.48.62A4.31 4.31 0 0 1 8 9.571a4.31 4.31 0 0 1 3.161 1.375A4.321 4.321 0 0 0 8 3.678a.59.59 0 0 1-.59-.589Zm-.758.15a.59.59 0 0 1-.317.77c-.239.1-.467.221-.681.36a.59.59 0 0 1-.641-.989c.273-.177.563-.33.868-.458a.59.59 0 0 1 .77.317Zm-2.27 2.395a.59.59 0 0 0-.986-.645 5.49 5.49 0 0 0-.438.81.59.59 0 0 0 1.08.472c.097-.223.212-.435.344-.637ZM3.09 7.411A.59.59 0 0 1 3.68 8c0 .29.028.574.083.848a.59.59 0 0 1-1.156.23A5.526 5.526 0 0 1 2.5 8a.59.59 0 0 1 .59-.59Zm6.875-.59a1.964 1.964 0 1 1-3.928 0 1.964 1.964 0 0 1 3.928 0Z",
        fill:"#737886"
      })
    });
    let tg=(0,o.createContext)({
      tempDocumentsMap:null,
      setTempDocumentsMap:()=>null,
      sessionAliasMap:null,
      setSessionAliasMap:()=>null
    }),
    tx=e=>{
      let{
        children:t
      }=e,
      [n,s]=o.useState(null),
      [a,r]=o.useState(null),
      l=(0,o.useMemo)(()=>({
        tempDocumentsMap:n,
        setTempDocumentsMap:s,
        sessionAliasMap:a,
        setSessionAliasMap:r
      }),[n,s,a,r]);
      return(0,i.jsx)(tg.Provider,{
        value:l,
        children:t
      })
    },
    tv=()=>(0,o.useContext)(tg);
    var ty=n(69136),
    tb=n(98777);
    let tw=async e=>{
      let t=ty.ZP.getBaseURL(e);
      return(await tb.be.get("".concat(t,"/personas"),{
        withCredentials:!0
      })).data
    },
    tj="tara_flat",
    tk="Flat",
    t_=[{
      value:tj,
      label:tk
    }],
    tC=[{
      id:"production",
      label:"PROD"
    },{
      id:"uat",
      label:"UAT"
    },{
      id:"staging",
      label:"STG"
    },{
      id:"experience",
      label:"Experience"
    },{
      id:"cx",
      label:"CX"
    },{
      id:"bizops",
      label:"BizOps"
    },{
      id:"research",
      label:"Research"
    }],
    tS={
      production:ty.iK.PROD,
      uat:ty.iK.UAT,
      staging:ty.iK.STAGING,
      experience:ty.iK.EXPERIENCE,
      cx:ty.iK.CX,
      bizops:ty.iK.BIZOPS,
      research:ty.iK.RESEARCH
    },
    tI=(0,o.createContext)({
      currentVersion:ty.iK.PROD,
      currentEnvironment:null,
      currentPersona:tj,
      environments:[],
      isLoading:!1,
      isReady:!0,
      setEnvironment:()=>{},
      setPersona:()=>{},
      fetchPersonasForEnvironment:()=>{},
      isLoadingEnvironment:()=>!1
    }),
    tE=e=>{
      let{
        children:t
      }=e,
      n=(0,a.useQueryClient)(),
      s=n.getQueryData(["tara-personas","production"]),
      [r,l]=(0,o.useState)(()=>{
        var e;
        return(null==s?void 0:null===(e=s.personas)||void 0===e?void 0:e.length)?{
          production:{
            personas:s.personas,
            default_persona:s.default_persona
          }
        }:{}
      }),
      [d,c]=(0,o.useState)("production"),
      [u,p]=(0,o.useState)(()=>{
        var e,
        t;
        return(null==s?void 0:null===(e=s.personas)||void 0===e?void 0:e.length)?s.default_persona||(null===(t=s.personas[0])||void 0===t?void 0:t.value)||tj:null
      }),
      [h,f]=(0,o.useState)(new Set),
      {
        isLoading:m
      }=(0,a.useQuery)(["tara-personas","production"],()=>tw(ty.iK.PROD),{
        onSuccess:e=>{
          var t,
          n;
          (null==e?void 0:null===(t=e.personas)||void 0===t?void 0:t.length)?(l(t=>({
            ...t,
            production:{
              personas:e.personas,
              default_persona:e.default_persona
            }
          })),null===u&&p(e.default_persona||(null===(n=e.personas[0])||void 0===n?void 0:n.value)||tj)):(l(e=>({
            ...e,
            production:{
              personas:t_,
              default_persona:tj
            }
          })),null===u&&p(tj))
        },
        onError:e=>{
          ey.l.error("AI personas failed to fetch",e,{
            environment:"production"
          }),
          l(e=>({
            ...e,
            production:{
              personas:t_,
              default_persona:tj
            }
          })),
          null===u&&p(tj)
        },
        refetchOnWindowFocus:!1,
        retry:1,
        staleTime:18e5
      }),
      g=(0,o.useCallback)(e=>{
        if(r[e]||h.has(e))return;
        let t=tS[e];
        t&&(f(t=>new Set(t).add(e)),n.fetchQuery(["tara-personas",e],()=>tw(t),{
          staleTime:18e5,
          retry:1
        }).then(t=>{
          var n;
          (null==t?void 0:null===(n=t.personas)||void 0===n?void 0:n.length)?l(n=>({
            ...n,
            [e]:{
              personas:t.personas,
              default_persona:t.default_persona
            }
          })):l(t=>({
            ...t,
            [e]:{
              personas:t_,
              default_persona:tj
            }
          }))
        }).catch(t=>{
          ey.l.error("AI personas failed to fetch",t,{
            environment:e
          }),
          l(t=>({
            ...t,
            [e]:{
              personas:t_,
              default_persona:tj
            }
          }))
        }).finally(()=>{
          f(t=>{
            let n=new Set(t);
            return n.delete(e),
            n
          })
        }))
      },[r,h,n]),
      x=(0,o.useCallback)(e=>h.has(e),[h]),
      v=(0,o.useMemo)(()=>tC.map(e=>{
        var t,
        n;
        return{
          ...e,
          personas:(null===(t=r[e.id])||void 0===t?void 0:t.personas)||[],
          default_persona:(null===(n=r[e.id])||void 0===n?void 0:n.default_persona)||tj
        }
      }),[r]),
      y=!m,
      b=(0,o.useMemo)(()=>v.find(e=>e.id===d)||v[0],[v,d]),
      w=(0,o.useMemo)(()=>tS[d]||ty.iK.PROD,[d]);
      (0,o.useEffect)(()=>{
        if(b&&null!==u&&b.personas.length>0&&!b.personas.map(e=>e.value).includes(u)){
          var e;
          p(b.default_persona||(null===(e=b.personas[0])||void 0===e?void 0:e.value)||tj)
        }
      },[b,u]);
      let j=(0,o.useCallback)((e,t)=>{
        var n,
        i,
        o;
        let s;
        let a=r[e];
        s=t||(u&&(null==a?void 0:null===(n=a.personas)||void 0===n?void 0:n.some(e=>e.value===u))?u:(null==a?void 0:a.default_persona)||(null==a?void 0:null===(o=a.personas)||void 0===o?void 0:null===(i=o[0])||void 0===i?void 0:i.value)||tj),
        c(e),
        p(s)
      },[r,u]),
      k=(0,o.useCallback)(e=>{
        p(e)
      },[]),
      _=(0,o.useMemo)(()=>({
        currentVersion:w,
        currentEnvironment:b,
        currentPersona:u||tj,
        environments:v,
        isLoading:m,
        isReady:y,
        setEnvironment:j,
        setPersona:k,
        fetchPersonasForEnvironment:g,
        isLoadingEnvironment:x
      }),[w,b,u,v,m,y,j,k,g,x]);
      return(0,i.jsx)(tI.Provider,{
        value:_,
        children:t
      })
    },
    tF=()=>(0,o.useContext)(tI);
    var tA=n(17877),
    tZ=n(99933),
    tN=n(65189);
    let tR=(e,t,n)=>{
      let{
        currentAppReducer:{
          _id:i
        },
        appFilter:{
          session:{
            segment:r
          },
          dateSegment:l
        },
        urlReducer:{
          sessionpage:d
        }
      }=(0,s.v9)(e=>e),
      c=(0,o.useMemo)(()=>[...r||[]],[r]),
      u=(0,o.useMemo)(()=>({
        appid:i,
        filters:t||c,
        date_range:l,
        page:d||1,
        session_per_page:tN.AI_SESSIONS_PER_PAGE
      }),[i,c,l,d,t]),
      {
        data:p,
        isFetching:h,
        refetch:f
      }=(0,a.useQuery)({
        queryKey:["ai-session-meta",u],
        queryFn:()=>(0,tZ.iP)(u),
        onError:t=>{
          e&&ey.l.error(e,t),
          ey.l.error(t)
        }
      });
      return o.useEffect(()=>{
        n&&f()
      },[f,u,n]),
      {
        sessionMeta:p,
        sessionMetaIsFetching:h,
        refetchSessionMeta:f
      }
    };
    var tD=n(25332),
    tT=n(4958),
    tL=n(65401),
    tM=e=>(0,i.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:16,
        height:16,
        rx:4,
        fill:"#fff"
      }),(0,i.jsx)("path",{
        d:"M10.247 12.493H5.753a1.685 1.685 0 0 1-1.685-1.685V5.192a.562.562 0 0 0-1.123 0v5.616a2.808 2.808 0 0 0 2.808 2.809h4.494a.561.561 0 1 0 0-1.124Zm2.808-6.212a.73.73 0 0 0-.034-.151v-.05a.6.6 0 0 0-.106-.158l-3.37-3.37a.601.601 0 0 0-.158-.107h-.05l-.18-.062h-2.28a1.685 1.685 0 0 0-1.685 1.685v5.617a1.685 1.685 0 0 0 1.685 1.685h4.493a1.685 1.685 0 0 0 1.685-1.685V6.281ZM9.685 4.3l1.455 1.454h-.893a.562.562 0 0 1-.562-.561v-.893Zm2.247 5.386a.562.562 0 0 1-.562.562H6.877a.561.561 0 0 1-.562-.562V4.068a.562.562 0 0 1 .562-.561h1.685v1.685a1.685 1.685 0 0 0 1.685 1.685h1.685v2.808Z",
        fill:"#A2A5AE"
      })]
    }),
    tz=e=>(0,i.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:16,
        height:16,
        rx:4,
        fill:"#EFF5FF"
      }),(0,i.jsx)("path",{
        d:"M10.247 12.493H5.753a1.685 1.685 0 0 1-1.685-1.685V5.192a.562.562 0 0 0-1.123 0v5.616a2.808 2.808 0 0 0 2.808 2.809h4.494a.561.561 0 1 0 0-1.124Zm2.808-6.212a.73.73 0 0 0-.034-.151v-.05a.6.6 0 0 0-.106-.158l-3.37-3.37a.601.601 0 0 0-.158-.107h-.05l-.18-.062h-2.28a1.685 1.685 0 0 0-1.685 1.685v5.617a1.685 1.685 0 0 0 1.685 1.685h4.493a1.686 1.686 0 0 0 1.685-1.685V6.281ZM9.685 4.3l1.455 1.454h-.893a.562.562 0 0 1-.562-.561v-.893Zm2.247 5.386a.562.562 0 0 1-.562.562H6.877a.561.561 0 0 1-.562-.562V4.068a.562.562 0 0 1 .562-.561h1.685v1.685a1.685 1.685 0 0 0 1.685 1.685h1.685v2.808Z",
        fill:"#5D97FF"
      })]
    }),
    tP=e=>(0,i.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:16,
        height:16,
        rx:4,
        fill:"#32BF8A"
      }),(0,i.jsx)("path",{
        d:"m3.595 8 2.383 2.99a.708.708 0 0 0 1.107 0l5.32-6.674",
        stroke:"#fff",
        strokeWidth:1.416,
        strokeLinecap:"round"
      })]
    }),
    tO=e=>(0,i.jsxs)("svg",{
      width:10,
      height:10,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        x:.246,
        y:.852,
        width:9.008,
        height:2,
        rx:1,
        fill:"url(#filters-count-ai_svg__a)"
      }),(0,i.jsx)("rect",{
        x:1.299,
        y:3.938,
        width:6.902,
        height:2,
        rx:1,
        fill:"url(#filters-count-ai_svg__b)"
      }),(0,i.jsx)("rect",{
        x:2.609,
        y:7.148,
        width:4.281,
        height:2,
        rx:1,
        fill:"url(#filters-count-ai_svg__c)"
      }),(0,i.jsxs)("defs",{
        children:[(0,i.jsxs)("linearGradient",{
          id:"filters-count-ai_svg__a",
          x1:6.88,
          y1:1.852,
          x2:6.295,
          y2:3.811,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        }),(0,i.jsxs)("linearGradient",{
          id:"filters-count-ai_svg__b",
          x1:6.382,
          y1:4.938,
          x2:5.66,
          y2:6.791,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        }),(0,i.jsxs)("linearGradient",{
          id:"filters-count-ai_svg__c",
          x1:5.762,
          y1:8.148,
          x2:4.801,
          y2:9.679,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })]
      })]
    });
    let tU=T.default.div.withConfig({
      componentId:"sc-ec6a47de-0"
    })(["padding:6px 8px 6px 6px;border-radius:30px;background-color:",";font-size:13px;line-height:16px;color:#161E35;font-weight:500;display:flex;align-items:center;justify-content:center;gap:5px;transition:background-color 0.1s ease;cursor:default;user-select:none;&:hover{background-color:",";}"],e=>{
      let{
        background:t
      }=e;
      return t||"#F5F7FA"
    },e=>{
      let{
        background:t
      }=e;
      return t||"#DFEAFF"
    }),
    tB=T.default.div.withConfig({
      componentId:"sc-ec6a47de-1"
    })(["height:20px;width:20px;background:#FFFFFF;border-radius:50%;display:flex;align-items:center;justify-content:center;"]),
    tV=T.default.div.withConfig({
      componentId:"sc-ec6a47de-2"
    })(["position:relative;height:20px;width:20px;"]),
    tW=e=>{
      let{
        loading:t,
        tooltip:n,
        count:o,
        background:s
      }=e;
      return(0,i.jsx)(eO.xO,{
        title:!t&&n&&n,
        align:{
          offset:[0,-10]
        },
        overlayStyle:{
          maxWidth:"285px"
        },
        children:(0,i.jsxs)(tU,{
          background:s,
          children:[(0,i.jsx)(tB,{
            children:(0,i.jsx)(tO,{})
          }),t&&(0,i.jsx)(tV,{
            children:(0,i.jsx)(eO.$j,{
              "data-size":"xs"
            })
          }),!t&&(0,i.jsxs)(i.Fragment,{
            children:[o," Session",1===o?"":"s"]
          })]
        })
      })
    },
    tH=T.default.div.withConfig({
      componentId:"sc-87274381-0"
    })(["width:100%;display:flex;justify-content:center;position:relative;z-index:1;&:not(:first-of-type){margin-top:40px;}&:first-of-type{margin-top:13px;}&::after{content:'';position:absolute;top:calc(50% - 1px);left:20px;right:20px;height:1px;background-color:#F3F4F5;}"]),
    tq=T.default.div.withConfig({
      componentId:"sc-87274381-1"
    })(["padding:0px 9px;border:1px solid #F3F4F5;border-radius:4px;font-size:10px;line-height:20px;color:#737886;background-color:#ffffff;z-index:2;position:relative;&::before{content:'';position:absolute;top:0;left:-9px;width:8px;height:100%;background-color:#ffffff;}&::after{content:'';position:absolute;top:0;right:-9px;width:8px;height:100%;background-color:#ffffff;}"]),
    tQ=e=>{
      let t=new Date(e),
      n=t.getDate(),
      i=t.toLocaleString("en-GB",{
        month:"short"
      }),
      o=t.toLocaleString("en-GB",{
        weekday:"long"
      });
      return"".concat(n," ").concat(i,", ").concat(o)
    },
    tK=(e,t)=>{
      let n=new Date(e),
      i=new Date(t);
      return n.getFullYear()!==i.getFullYear()||n.getMonth()!==i.getMonth()||n.getDate()!==i.getDate()
    };
    var tG=e=>{
      let{
        dateRef:t,
        timestamp:n
      }=e,
      [s,a]=o.useState(!1);
      if(o.useEffect(()=>{
        n&&(t.current?tK(t.current,n)?(t.current=n,a(!0)):a(!1):(t.current=n,a(!0)))
      },[n,t]),!n||!s)return null;
      let r=tQ(n);
      return(0,i.jsx)(tH,{
        children:(0,i.jsx)(tq,{
          children:r
        })
      })
    },
    t$=e=>(0,i.jsx)("svg",{
      width:18,
      height:18,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M17.104.896a.591.591 0 0 1 .134.63l-5.912 15.372a.591.591 0 0 1-1.09.033l-2.473-5.44L11.4 7.853A.887.887 0 0 0 10.147 6.6l-3.638 3.638-5.44-2.472a.591.591 0 0 1 .033-1.09L16.474.761a.591.591 0 0 1 .63.134Z",
        fill:"#EE5EDD"
      })
    }),
    tY=e=>(0,i.jsxs)("svg",{
      width:12,
      height:10,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("path",{
        d:"M7 0a5 5 0 1 1 0 10H5A5 5 0 1 1 5 0h2ZM5 .667a4.333 4.333 0 1 0 0 8.666A4.333 4.333 0 0 0 5 .667Zm5.416 7H9.23a5 5 0 0 1-.504.667h1.042c.239-.198.456-.422.648-.667ZM5.244 1.821l.158.424c.432 1.167 1.45 2.103 2.768 2.548.202.068.216.303.043.395l-.043.02c-1.318.443-2.336 1.379-2.768 2.547l-.158.424c-.071.192-.368.205-.47.039l-.018-.039-.158-.425c-.433-1.167-1.45-2.103-2.768-2.547-.202-.068-.216-.304-.043-.396l.043-.018c1.318-.445 2.335-1.38 2.768-2.548l.158-.424c.076-.206.412-.206.488 0Zm6.038 3.846H9.956a5.02 5.02 0 0 1-.136.667h1.304c.07-.216.123-.438.158-.667Zm-.158-2H9.82c.06.216.105.439.136.666h1.326a4.357 4.357 0 0 0-.158-.666Zm-1.355-2H8.727c.185.207.354.43.503.666h1.186a4.406 4.406 0 0 0-.647-.667Z",
        fill:"url(#icon-coin_svg__a)"
      }),(0,i.jsx)("defs",{
        children:(0,i.jsxs)("linearGradient",{
          id:"icon-coin_svg__a",
          x1:8.838,
          y1:5,
          x2:3.536,
          y2:9.731,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })
      })]
    }),
    tX=e=>(0,i.jsxs)("svg",{
      width:16,
      height:14,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("path",{
        fill:"#fff",
        d:"M6.217 4.011h3.075v7.922H6.217z"
      }),(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M6.213.847a1.705 1.705 0 0 1 2.946 0l5.979 10.257c.663 1.137-.157 2.566-1.473 2.566H1.708c-1.316 0-2.136-1.429-1.473-2.566L6.213.847Zm1.473 2.726c.471 0 .853.382.853.853v3.129a.853.853 0 1 1-1.705 0V4.426c0-.471.382-.853.852-.853Zm1.137 7.11a1.137 1.137 0 1 1-2.274.001 1.137 1.137 0 0 1 2.274 0Z",
        fill:"#fff"
      }),(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M6.52 2.464a1.359 1.359 0 0 1 2.347 0l4.764 8.167a1.359 1.359 0 0 1-1.174 2.044H2.93a1.359 1.359 0 0 1-1.174-2.044l4.764-8.167Zm1.173 2.17a.68.68 0 0 1 .68.68v2.491a.68.68 0 1 1-1.36 0v-2.49a.68.68 0 0 1 .68-.68Zm.906 5.663a.906.906 0 1 1-1.812 0 .906.906 0 0 1 1.812 0Z",
        fill:"#F9B41E"
      })]
    }),
    tJ=e=>(0,i.jsx)("svg",{
      width:18,
      height:18,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        fill:"#EE5EDD",
        d:"M5 5h8v8H5z"
      })
    }),
    t0=n(64863),
    t1=e=>(0,i.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("circle",{
        cx:8,
        cy:8,
        r:8,
        fill:"#FDFDFD"
      }),(0,i.jsx)("circle",{
        cx:8,
        cy:8,
        r:7.75,
        stroke:"#EE5FDD",
        strokeOpacity:.13,
        strokeWidth:.5
      }),(0,i.jsx)("path",{
        d:"M6.788 4.668c-.927 0-1.665.078-2.173.156a1.292 1.292 0 0 0-1.094 1.198 26.82 26.82 0 0 0-.066 1.98c0 .859.032 1.519.066 1.98a1.292 1.292 0 0 0 1.094 1.197c.508.078 1.246.155 2.173.155s1.665-.077 2.173-.155a1.292 1.292 0 0 0 1.094-1.198c.008-.115.017-.244.025-.384.365.219.8.446 1.272.623a.814.814 0 0 0 1.098-.67c.048-.38.095-.913.095-1.549 0-.635-.047-1.168-.095-1.548a.814.814 0 0 0-1.098-.67 7.967 7.967 0 0 0-1.272.623 18.83 18.83 0 0 0-.025-.384A1.292 1.292 0 0 0 8.96 4.824a14.359 14.359 0 0 0-2.173-.156Z",
        fill:"url(#icon-camera_svg__a)"
      }),(0,i.jsx)("defs",{
        children:(0,i.jsxs)("linearGradient",{
          id:"icon-camera_svg__a",
          x1:10.15,
          y1:8.001,
          x2:6.593,
          y2:11.608,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:.534,
            stopColor:"#9DA0A7"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })
      })]
    }),
    t2=e=>(0,i.jsxs)("svg",{
      width:26,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("circle",{
        cx:18,
        cy:8,
        r:8,
        fill:"#FDFDFD"
      }),(0,i.jsx)("circle",{
        cx:18,
        cy:8,
        r:7.75,
        stroke:"#EE5FDD",
        strokeOpacity:.13,
        strokeWidth:.5
      }),(0,i.jsx)("path",{
        d:"M16.788 4.668c-.927 0-1.665.078-2.173.156a1.292 1.292 0 0 0-1.094 1.198c-.034.46-.066 1.12-.066 1.98 0 .859.032 1.519.066 1.98a1.292 1.292 0 0 0 1.094 1.197 14.38 14.38 0 0 0 2.173.155c.927 0 1.665-.077 2.173-.155a1.292 1.292 0 0 0 1.094-1.198c.009-.115.017-.244.025-.384.365.219.8.446 1.272.623a.814.814 0 0 0 1.098-.67c.048-.38.095-.913.095-1.549 0-.635-.047-1.168-.095-1.548a.814.814 0 0 0-1.098-.67 7.967 7.967 0 0 0-1.272.623 18.83 18.83 0 0 0-.025-.384 1.292 1.292 0 0 0-1.094-1.198 14.358 14.358 0 0 0-2.173-.156Z",
        fill:"url(#icon-filters-camera_svg__a)"
      }),(0,i.jsx)("circle",{
        cx:8,
        cy:8,
        r:8,
        fill:"#FDFDFD"
      }),(0,i.jsx)("circle",{
        cx:8,
        cy:8,
        r:7.75,
        stroke:"#EE5FDD",
        strokeOpacity:.13,
        strokeWidth:.5
      }),(0,i.jsx)("rect",{
        x:4.536,
        y:4.809,
        width:6.928,
        height:1.538,
        rx:.769,
        fill:"url(#icon-filters-camera_svg__b)"
      }),(0,i.jsx)("rect",{
        x:5.345,
        y:7.18,
        width:5.309,
        height:1.538,
        rx:.769,
        fill:"url(#icon-filters-camera_svg__c)"
      }),(0,i.jsx)("rect",{
        x:6.354,
        y:9.65,
        width:3.293,
        height:1.538,
        rx:.769,
        fill:"url(#icon-filters-camera_svg__d)"
      }),(0,i.jsxs)("defs",{
        children:[(0,i.jsxs)("linearGradient",{
          id:"icon-filters-camera_svg__a",
          x1:20.15,
          y1:8.001,
          x2:16.593,
          y2:11.608,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:.534,
            stopColor:"#9DA0A7"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        }),(0,i.jsxs)("linearGradient",{
          id:"icon-filters-camera_svg__b",
          x1:9.638,
          y1:5.578,
          x2:9.188,
          y2:7.085,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:.534,
            stopColor:"#9DA0A7"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        }),(0,i.jsxs)("linearGradient",{
          id:"icon-filters-camera_svg__c",
          x1:9.255,
          y1:7.95,
          x2:8.7,
          y2:9.375,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:.534,
            stopColor:"#9DA0A7"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        }),(0,i.jsxs)("linearGradient",{
          id:"icon-filters-camera_svg__d",
          x1:8.779,
          y1:10.419,
          x2:8.039,
          y2:11.597,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:.534,
            stopColor:"#9DA0A7"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })]
      })]
    }),
    t5=n(37857);
    let t4=T.default.div.withConfig({
      componentId:"sc-99fafa63-0"
    })(["width:100%;display:flex;flex-direction:column;gap:14px;padding:14px 16px;border-top:1px solid #e8e8eb;border-bottom:1px solid #e8e8eb;background-color:white;"]),
    t6=T.default.div.withConfig({
      componentId:"sc-99fafa63-1"
    })(["position:absolute;top:0;left:0;height:100%;width:100%;background:",";opacity:0.6;z-index:69;pointer-events:none;"],e0.r.colors.surface05.toString()),
    t3=T.default.div.withConfig({
      componentId:"sc-99fafa63-2"
    })(['display:flex;align-items:center;justify-content:space-between;width:100%;background:rgba(231,29,255,0.08);border-radius:6px;padding:8px;&[data-vertical="true"]{flex-direction:column;align-items:flex-start;button{width:100%;margin-top:10px;}}']),
    t8=T.default.div.withConfig({
      componentId:"sc-99fafa63-3"
    })(["display:flex;cursor:default;svg{margin-right:4px;}"]),
    t7=T.default.div.withConfig({
      componentId:"sc-99fafa63-4"
    })(["height:16px;width:16px;position:relative;margin-right:10px;"]),
    t9=T.default.p.withConfig({
      componentId:"sc-99fafa63-5"
    })(["display:flex;font-family:'Roboto',sans-serif;font-size:13px;line-height:16px;color:",";margin-bottom:0;span{font-weight:",";margin-right:4px;}"],e=>{
      let{
        isIdle:t
      }=e;
      return t?"#161e35":"#737886"
    },e=>{
      let{
        isIdle:t
      }=e;
      return t?700:600
    }),
    ne=T.default.button.withConfig({
      componentId:"sc-99fafa63-6"
    })(["display:flex;align-items:center;gap:6px;padding:5px 7px 5px 6px;background-color:white;background-clip:padding-box;border:1px solid transparent;border-radius:6px;cursor:pointer;transition:all 0.2s;position:relative;justify-content:center;&::before{content:'';position:absolute;inset:-1px;border-radius:6px;padding:1px;background:linear-gradient(195deg,#ee5edd,#49c5ff);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none;}&:disabled{cursor:default;}"]),
    nt=T.default.span.withConfig({
      componentId:"sc-99fafa63-7"
    })(["font-family:'Roboto',sans-serif;font-size:12px;line-height:14px;font-weight:500;color:#454b5d;text-align:center;"]),
    nn=T.default.div.withConfig({
      componentId:"sc-99fafa63-8"
    })(["position:relative;width:100%;z-index:10;pointer-events:none;overflow:hidden;transition:height 0.15s ease-in-out;"," & > *{pointer-events:auto;}"],e=>{
      let{
        visible:t,
        vertical:n
      }=e,
      i=0;
      return t&&(i=n?98:72),
      (0,T.css)(["height:","px;"],i)
    }),
    ni=(e,t)=>e?t?"Upgrade to watch selected":"Upgrade to watch more":t?"Watch selected":"Watch more",
    no=e=>{
      let{
        onWatchClick:t,
        meta:n,
        metaLoading:o,
        upgradeVariant:s,
        disabled:a,
        buttonTooltip:r,
        tooltipContent:l,
        isSelected:d
      }=e;
      return(0,i.jsxs)(t4,{
        children:[a&&(0,i.jsx)(t6,{}),(0,i.jsxs)(t3,{
          "data-vertical":s,
          children:[(0,i.jsx)(eO.xO,{
            title:a?void 0:l,
            align:{
              offset:[0,-8]
            },
            children:(0,i.jsxs)(t8,{
              children:[(0,i.jsx)(t1,{}),(0,i.jsxs)(t9,{
                isIdle:!0,
                children:[o?(0,i.jsx)(t7,{
                  children:(0,i.jsx)(eO.$j,{
                    "data-size":"xs"
                  })
                }):(0,i.jsx)("span",{
                  children:null==n?void 0:n.total_sessions.toLocaleString()
                }),"session",1!==((null==n?void 0:n.total_sessions)||0)?"s ":" ","watched"]
              })]
            })
          }),(0,i.jsx)(eO.xO,{
            title:r,
            align:{
              offset:[0,-4]
            },
            children:(0,i.jsx)(ne,{
              onClick:t,
              disabled:!!a,
              children:(0,i.jsx)(nt,{
                children:ni(s,!!d)
              })
            })
          })]
        })]
      })
    },
    ns=e=>{
      let{
        onWatchClick:t,
        filteredMeta:n,
        filteredMetaLoading:o,
        upgradeVariant:s,
        disabled:a,
        buttonTooltip:r,
        tooltipContent:l,
        isSelected:d
      }=e;
      return(0,i.jsxs)(t4,{
        children:[a&&(0,i.jsx)(t6,{}),(0,i.jsxs)(t3,{
          "data-vertical":s,
          children:[(0,i.jsx)(eO.xO,{
            title:a?void 0:l,
            align:{
              offset:[0,-8]
            },
            children:(0,i.jsxs)(t8,{
              children:[(0,i.jsx)(t2,{}),(0,i.jsx)(t9,{
                isIdle:!0,
                children:o?(0,i.jsx)(t7,{
                  children:(0,i.jsx)(eO.$j,{
                    "data-size":"xs"
                  })
                }):(0,i.jsxs)(i.Fragment,{
                  children:[(0,i.jsxs)("span",{
                    children:[null==n?void 0:n.total_sessions.toLocaleString()," ","sessions"]
                  }),"watched"]
                })
              })]
            })
          }),(0,i.jsx)(eO.xO,{
            title:r,
            children:(0,i.jsx)(ne,{
              onClick:t,
              disabled:!!a,
              children:(0,i.jsx)(nt,{
                children:ni(s,!!d)
              })
            })
          })]
        })]
      })
    },
    na=(e,t)=>e.toLowerCase().startsWith("batch id")?t.reduce((e,t)=>e.includes(t.batch_id)?e.replace(t.batch_id,t.batch_name):e,e):e,
    nr=function(e){
      var t;
      let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];
      if(!e)return;
      let{
        descriptions:i,
        total_sessions:o
      }=e,
      s=null===(t=i[0])||void 0===t?void 0:t.match(/'([^']+)'/),
      a=s?s[1]:"",
      r=i.slice(1).filter(e=>!e.toLowerCase().startsWith("ai processed is")).map(e=>na(e,n)).join(", "),
      l="Tara will answer based on the ".concat(o," sessions she watched, matching your filter conditions:\nDate range: ").concat(a);
      return(r&&(l+="\nFilters: ".concat(r)),l.length>500)?"".concat(l.slice(0,500),"… (View filters for details)"):l
    },
    nl=()=>{
      let{
        setBatchModalVisible:e,
        state:t,
        upgradeVariant:n,
        setUpgradeModalVisible:a
      }=(0,t0.fB)(),
      {
        sessionMeta:r,
        sessionMetaIsFetching:l
      }=tR("TARA - error getting tara session meta"),
      d=(0,s.I0)(),
      {
        isRole:c
      }=(0,t5.Z)(),
      u=c("viewer"),
      p=(0,s.v9)(e=>{
        var t,
        n,
        i;
        return(null===(i=e.appFilter)||void 0===i?void 0:null===(n=i.fetchProperty)||void 0===n?void 0:null===(t=n.batch_id)||void 0===t?void 0:t.data)||[]
      }),
      h=(0,o.useCallback)(()=>{
        if(n){
          a(!0);
          return
        }
        d((0,K.R3)()),
        e(!0)
      },[e,a,n,d]),
      f=u?"You don't have permission to analyze more sessions":void 0,
      m=nr(r,p);
      switch(t){
        case t0.El.idle:return(0,i.jsx)(no,{
          meta:r,
          metaLoading:l,
          onWatchClick:h,
          upgradeVariant:n,
          disabled:u,
          buttonTooltip:f,
          tooltipContent:m
        });
        case t0.El.filtered:return(0,i.jsx)(ns,{
          filteredMeta:r,
          filteredMetaLoading:l,
          onWatchClick:h,
          upgradeVariant:n,
          disabled:u,
          buttonTooltip:f,
          tooltipContent:m
        });
        case t0.El.selected:return(0,i.jsx)(no,{
          meta:r,
          metaLoading:l,
          onWatchClick:h,
          upgradeVariant:n,
          tooltipContent:m,
          disabled:!0,
          isSelected:!0
        });
        case t0.El.selectedFiltered:return(0,i.jsx)(ns,{
          filteredMeta:r,
          filteredMetaLoading:l,
          onWatchClick:h,
          upgradeVariant:n,
          tooltipContent:m,
          disabled:!0,
          isSelected:!0
        });
        default:return null
      }
    };
    var nd=()=>{
      let{
        showSessionWatchStatus:e,
        state:t,
        upgradeVariant:n
      }=(0,t0.fB)();
      return(0,i.jsx)(nn,{
        visible:e,
        vertical:n,
        state:t,
        children:(0,i.jsx)(nl,{})
      })
    },
    nc=e=>(0,i.jsxs)("svg",{
      width:23,
      height:24,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:23,
        height:24,
        rx:4,
        fill:"#fff"
      }),(0,i.jsx)("g",{
        clipPath:"url(#icon-prompt_svg__a)",
        fill:"#737886",
        stroke:"#F3F4F5",
        strokeWidth:.1,
        children:(0,i.jsx)("path",{
          d:"M7.067 7.599h4.283v1.233H7.017v7.229l.947-.948.045-.04c.11-.09.249-.14.392-.14h7.05v-2.667h1.233v2.616c0 .709-.575 1.283-1.283 1.283H8.656l-1.82 1.82a.617.617 0 0 1-1.052-.436V8.882c0-.709.574-1.283 1.283-1.283ZM15.883 4.05c.384 0 .704.248.82.587l.022.071.054.184v.002a2.87 2.87 0 0 0 2.015 1.881.869.869 0 0 1 0 1.683 2.87 2.87 0 0 0-2.07 2.07.868.868 0 0 1-1.682 0 2.87 2.87 0 0 0-2.07-2.07.87.87 0 0 1-.653-.766l-.003-.073.003-.078a.87.87 0 0 1 .653-.766 2.87 2.87 0 0 0 2.07-2.069.87.87 0 0 1 .841-.656Z"
        })
      }),(0,i.jsx)("defs",{
        children:(0,i.jsx)("clipPath",{
          id:"icon-prompt_svg__a",
          children:(0,i.jsx)("path",{
            fill:"#fff",
            transform:"translate(3.5 4)",
            d:"M0 0h16v16H0z"
          })
        })
      })]
    }),
    nu=e=>(0,i.jsxs)("svg",{
      width:23,
      height:24,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:23,
        height:24,
        rx:4,
        fill:"#DFEAFF"
      }),(0,i.jsxs)("g",{
        clipPath:"url(#icon-prompt-active_svg__a)",
        children:[(0,i.jsx)("path",{
          d:"M11.4 8.882H7.067v7.057l.862-.861.049-.045a.667.667 0 0 1 .422-.15h7v-2.667h1.334v2.666c0 .737-.597 1.333-1.334 1.333H8.676L6.872 18.02a.667.667 0 0 1-1.138-.471V8.882c0-.736.597-1.333 1.333-1.333H11.4v1.333Z",
          fill:"url(#icon-prompt-active_svg__b)"
        }),(0,i.jsx)("path",{
          d:"M15.883 4c.406 0 .745.262.868.62l.022.074.054.184a2.82 2.82 0 0 0 1.98 1.849.918.918 0 0 1 0 1.78 2.82 2.82 0 0 0-2.034 2.033.918.918 0 0 1-1.78 0 2.82 2.82 0 0 0-2.033-2.034.92.92 0 0 1-.69-.81l-.004-.08.004-.08a.92.92 0 0 1 .69-.81 2.819 2.819 0 0 0 2.033-2.032.92.92 0 0 1 .89-.694Z",
          fill:"url(#icon-prompt-active_svg__c)"
        })]
      }),(0,i.jsxs)("defs",{
        children:[(0,i.jsxs)("linearGradient",{
          id:"icon-prompt-active_svg__b",
          x1:13.835,
          y1:12.882,
          x2:8.338,
          y2:17.098,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        }),(0,i.jsxs)("linearGradient",{
          id:"icon-prompt-active_svg__c",
          x1:17.594,
          y1:7.617,
          x2:13.897,
          y2:10.366,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        }),(0,i.jsx)("clipPath",{
          id:"icon-prompt-active_svg__a",
          children:(0,i.jsx)("path",{
            fill:"#fff",
            transform:"translate(3.5 4)",
            d:"M0 0h16v16H0z"
          })
        })]
      })]
    });
    let np=T.default.button.withConfig({
      componentId:"sc-f3887305-0"
    })(["display:flex;align-items:center;justify-content:center;padding:0;border:none;background:transparent;cursor:pointer;border-radius:4px;transition:all 0.15s ease;"," svg{width:23px;height:24px;}"],e=>{
      let{
        $disabled:t
      }=e;
      return t&&(0,T.css)(["cursor:not-allowed;opacity:0.5;"])
    });
    var nh=e=>{
      let{
        onClick:t,
        isActive:n=!1,
        disabled:o=!1
      }=e;
      return(0,i.jsx)(N.Z,{
        title:"Prompt suggestions",
        placement:"top",
        children:(0,i.jsx)(np,{
          onClick:()=>{
            o||t()
          },
          $disabled:o,
          disabled:o,
          type:"button",
          children:n?(0,i.jsx)(nu,{}):(0,i.jsx)(nc,{})
        })
      })
    };
    let nf="any action",
    nm=T.default.div.withConfig({
      componentId:"sc-53506b0b-0"
    })(["width:100%;padding:8px 12px;margin:0;border-radius:4px;color:#161e35;font-size:12px;line-height:20px;font-weight:400;min-height:22px;max-height:","px;overflow-y:auto;outline:none;white-space:pre-wrap;word-wrap:break-word;position:relative;::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #dddddd;}"," ",' & [data-token-type="token"]{display:inline-flex;padding:2px 3px;border-radius:2px;font-size:12px;line-height:20px;margin:0 1px;white-space:nowrap;outline:none;transition:background-color 0.15s ease;background-color:',";color:",';}& [data-token-type="token"][data-token-focused="true"]{background-color:',";color:",';}& [data-token-type="token"][data-token-empty="true"]{position:relative;min-width:60px;display:inline-block;&::before{content:attr(data-placeholder);color:',";font-style:italic;pointer-events:none;}}"],e=>{
      let{
        $maxHeight:t
      }=e;
      return t
    },e=>{
      let{
        $isEmpty:t
      }=e;
      return t&&"\n    &::before {\n      content: attr(data-placeholder);\n      color: #737886;\n      pointer-events: none;\n    }\n  "
    },e=>{
      let{
        $disabled:t
      }=e;
      return t&&"\n    cursor: not-allowed;\n    opacity: 0.5;\n  "
    },e0.r.colors.surface05.toString(),e0.r.colors.surface500.toString(),e0.r.colors.primary100.toString(),e0.r.colors.surface500.toString(),e0.r.colors.surface200.toString()),
    ng=e=>{
      let t=[],
      n=/\{([^}]+)\}/g,
      i=0,
      o=n.exec(e);
      for(;null!==o;)o.index>i&&t.push({
        type:"text",
        value:e.slice(i,o.index),
        id:"text-".concat(i)
      }),
      t.push({
        type:"token",
        value:o[1],
        id:"token-".concat(o.index)
      }),
      i=n.lastIndex,
      o=n.exec(e);
      return i<e.length&&t.push({
        type:"text",
        value:e.slice(i),
        id:"text-".concat(i)
      }),
      t
    },
    nx=e=>/\{[^}]+\}/.test(e);
    var nv=e=>{
      let{
        value:t,
        onChange:n,
        onKeyDown:s,
        disabled:a=!1,
        placeholder:r="Ask Tara anything...",
        maxHeight:l=82,
        cursorToFirstToken:d=!1,
        onCursorPlaced:c,
        secondaryPlaceholder:u
      }=e,
      p=(0,o.useRef)(null),
      [h,f]=(0,o.useState)([]),
      m=(0,o.useRef)(!1),
      [g,x]=(0,o.useState)(!1),
      v=(0,o.useRef)(!1);
      (0,o.useEffect)(()=>{
        d&&(v.current=!0)
      },[d]);
      let y=(0,o.useCallback)(()=>{
        if(!p.current)return;
        let e=window.getSelection();
        if(!e){
          null==c||c();
          return
        }
        p.current.focus();
        let t=document.createRange(),
        n=p.current.querySelector('[data-token-type="token"]');
        if(n){
          let e=n.firstChild;
          if(e){
            let n=(e.textContent||"").length;
            t.setStart(e,n),
            t.setEnd(e,n)
          }
          else t.selectNodeContents(n),
          t.collapse(!1)
        }
        else t.selectNodeContents(p.current),
        t.collapse(!1);
        if(e.removeAllRanges(),e.addRange(t),n){
          let e=p.current,
          t=n.getBoundingClientRect(),
          i=e.getBoundingClientRect();
          t.bottom>i.bottom?e.scrollTop+=t.bottom-i.bottom:t.top<i.top&&(e.scrollTop-=i.top-t.top)
        }
        null==c||c()
      },[c]),
      b=(0,o.useCallback)(()=>{
        if(!p.current)return null;
        let e=window.getSelection();
        if(!e||0===e.rangeCount)return null;
        let t=e.getRangeAt(0),
        n=t.cloneRange();
        return n.selectNodeContents(p.current),
        n.setEnd(t.endContainer,t.endOffset),
        n.toString().length
      },[]),
      w=(0,o.useCallback)(e=>{
        if(!p.current)return;
        let t=window.getSelection();
        if(!t)return;
        let n=0,
        i=t=>{
          if(t.nodeType===Node.TEXT_NODE){
            let i=(t.textContent||"").length;
            if(n+i>=e)return{
              node:t,
              offset:e-n
            };
            n+=i
          }
          else if(t.nodeType===Node.ELEMENT_NODE)for(let e=0;e<t.childNodes.length;e+=1){
            let n=i(t.childNodes[e]);
            if(n)return n
          }
          return null
        },
        o=i(p.current);
        if(o){
          let{
            node:e,
            offset:n
          }=o,
          i=document.createRange();
          i.setStart(e,Math.min(n,(e.textContent||"").length)),
          i.collapse(!0),
          t.removeAllRanges(),
          t.addRange(i)
        }
        else if(p.current.lastChild){
          let e=document.createRange();
          e.selectNodeContents(p.current),
          e.collapse(!1),
          t.removeAllRanges(),
          t.addRange(e)
        }
      },[]),
      j=(0,o.useCallback)(()=>{
        if(!p.current)return{
          plainText:"",
          newSegments:[]
        };
        let e=[],
        t="",
        n=u||nf,
        i=o=>{
          if(o.nodeType===Node.TEXT_NODE){
            let n=o.textContent||"";
            n&&(e.push({
              type:"text",
              value:n,
              id:"text-".concat(e.length)
            }),t+=n)
          }
          else if(o.nodeType===Node.ELEMENT_NODE){
            if("token"===o.dataset.tokenType){
              let i="true"===o.dataset.tokenEmpty,
              s=o.dataset.placeholder||n,
              a=(o.textContent||"").replace(/\uFEFF/g,""),
              r=i?s:a;
              e.push({
                type:"token",
                value:r,
                id:"token-".concat(e.length),
                isEmpty:i
              }),
              t+=r
            }
            else"BR"===o.tagName?(e.push({
              type:"text",
              value:"\n",
              id:"text-".concat(e.length)
            }),t+="\n"):o.childNodes.forEach(i)
          }
        };
        return p.current.childNodes.forEach(i),
        {
          plainText:t,
          newSegments:e
        }
      },[u]),
      k=(0,o.useCallback)(()=>{
        var e;
        if(!p.current)return;
        p.current.querySelectorAll('[data-token-type="token"]').forEach(e=>{
          let t=(e.textContent||"").replace(/\uFEFF/g,""),
          n="true"===e.dataset.tokenEmpty,
          i=u||nf;
          t.trim()?n&&(e.dataset.tokenEmpty="false",delete e.dataset.placeholder):n&&"​"===e.textContent||(e.dataset.tokenEmpty="true",e.dataset.placeholder=i,e.textContent="")
        });
        let{
          lastChild:t
        }=p.current;
        t&&t.nodeType===Node.ELEMENT_NODE&&(null===(e=t.dataset)||void 0===e?void 0:e.tokenType)==="token"&&p.current.appendChild(document.createTextNode(" "))
      },[u]),
      _=(0,o.useCallback)(()=>{
        k();
        let{
          plainText:e,
          newSegments:t
        }=j();
        f(t),
        n(e),
        !e&&p.current&&(p.current.innerHTML="")
      },[j,n,k]),
      C=(0,o.useCallback)(e=>{
        let t=e.target;
        "token"===t.dataset.tokenType&&"true"===t.dataset.tokenEmpty&&setTimeout(()=>{
          let e=window.getSelection();
          if(!e)return;
          let n=document.createRange(),
          i=t.firstChild||t;
          n.setStart(i,0),
          n.setEnd(i,0),
          e.removeAllRanges(),
          e.addRange(n)
        },0)
      },[]),
      S=(0,o.useCallback)(e=>{
        if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.stopPropagation(),"Enter"===e.key&&!e.shiftKey){
          e.preventDefault(),
          null==s||s(e);
          return
        }
        if("Backspace"===e.key){
          let t=window.getSelection();
          if(!t||0===t.rangeCount){
            null==s||s(e);
            return
          }
          let n=t.getRangeAt(0),
          i=n.startContainer;
          for(;i&&i!==p.current;){
            if(i.nodeType===Node.ELEMENT_NODE){
              let o=i;
              if("token"===o.dataset.tokenType){
                let i="true"===o.dataset.tokenEmpty,
                s=u||nf;
                if(i){
                  e.preventDefault(),
                  o.remove(),
                  _();
                  return
                }
                let a=(o.textContent||"").replace(/\u200B/g,"");
                if(n.collapsed&&0===n.startOffset);
                else if(1===a.length){
                  e.preventDefault(),
                  o.dataset.tokenEmpty="true",
                  o.dataset.placeholder=s,
                  o.textContent="",
                  setTimeout(()=>{
                    let e=document.createRange(),
                    n=o.firstChild;
                    n&&n.nodeType===Node.TEXT_NODE?(e.setStart(n,0),e.setEnd(n,0)):(e.selectNodeContents(o),e.collapse(!0)),
                    t.removeAllRanges(),
                    t.addRange(e)
                  },0),
                  _();
                  return
                }
                break
              }
            }
            i=i.parentNode
          }
        }
        null==s||s(e)
      },[s,u,_]),
      I=(0,o.useCallback)(e=>{
        e.preventDefault();
        let t=e.clipboardData.getData("text/plain"),
        n=window.getSelection();
        if(!n||!n.rangeCount)return;
        let i=n.getRangeAt(0);
        i.deleteContents();
        let o=document.createTextNode(t);
        i.insertNode(o),
        i.setStartAfter(o),
        i.setEndAfter(o),
        n.removeAllRanges(),
        n.addRange(i),
        _(),
        setTimeout(()=>{
          p.current&&(p.current.scrollTop=p.current.scrollHeight)
        },0)
      },[_]),
      E=(0,o.useCallback)(()=>{
        if(!p.current)return;
        let e=p.current.querySelectorAll('[data-token-type="token"]'),
        t=window.getSelection(),
        n=null;
        if(t&&t.rangeCount>0){
          let e=t.getRangeAt(0).startContainer;
          for(;e&&e!==p.current;){
            if(e.nodeType===Node.ELEMENT_NODE&&"token"===e.dataset.tokenType){
              n=e;
              break
            }
            e=e.parentNode
          }
        }
        e.forEach(e=>{
          e.setAttribute("data-token-focused",(e===n).toString())
        })
      },[]);
      (0,o.useEffect)(()=>{
        let e=()=>E();
        return document.addEventListener("selectionchange",e),
        ()=>document.removeEventListener("selectionchange",e)
      },[E]);
      let F=(0,o.useCallback)(()=>{
        x(!0)
      },[]),
      A=(0,o.useCallback)(()=>{
        x(!1),
        k(),
        p.current&&p.current.querySelectorAll('[data-token-type="token"]').forEach(e=>{
          e.setAttribute("data-token-focused","false")
        })
      },[k]);
      (0,o.useEffect)(()=>{
        if(!p.current||m.current){
          m.current=!1;
          return
        }
        let{
          plainText:e
        }=j();
        if(e===t)return;
        m.current=!0;
        let n=b();
        f(nx(t)?ng(t):""===t?[]:[{
          type:"text",
          value:t,
          id:"text-0"
        }]),
        v.current||null===n||setTimeout(()=>{
          w(n)
        },0)
      },[t,j,b,w]),
      (0,o.useEffect)(()=>{
        if(!p.current||!m.current)return;
        let e=document.createDocumentFragment();
        h.forEach((t,n)=>{
          if("token"===t.type){
            let i=document.createElement("span");
            i.dataset.tokenType="token",
            i.dataset.tokenEmpty="false",
            i.contentEditable="true",
            i.textContent="​"+t.value,
            i.addEventListener("focus",C),
            e.appendChild(i);
            let o=h[n+1];
            o&&("text"!==o.type||o.value.startsWith(" "))||e.appendChild(document.createTextNode(" "))
          }
          else{
            let n=document.createTextNode(t.value);
            e.appendChild(n)
          }
        }),
        p.current.innerHTML="",
        p.current.appendChild(e),
        m.current=!1,
        v.current&&(v.current=!1,requestAnimationFrame(()=>{
          y()
        }))
      },[h,C,y]);
      let Z=!t||0===t.length;
      return(0,i.jsx)(nm,{
        ref:p,
        contentEditable:!a,
        suppressContentEditableWarning:!0,
        onInput:_,
        onKeyDown:S,
        onPaste:I,
        onFocus:F,
        onBlur:A,
        "data-placeholder":r,
        $disabled:a,
        $maxHeight:l,
        $isEmpty:Z,
        $isFocused:g,
        role:"textbox",
        "aria-multiline":"true",
        "aria-disabled":a
      })
    };
    let ny=T.default.span.withConfig({
      componentId:"sc-a87f1318-0"
    })(["font-family:'Roboto',sans-serif;font-size:11px;line-height:11px;font-weight:500;color:#454b5d;text-align:center;"]),
    nb=T.default.div.withConfig({
      componentId:"sc-a87f1318-1"
    })(["display:flex;flex-direction:column;width:100%;"]),
    nw=T.default.div.withConfig({
      componentId:"sc-a87f1318-2"
    })(["background-color:#ffffff;width:100%;&:focus-within{border-color:#5d97ff;}"]),
    nj=T.default.div.withConfig({
      componentId:"sc-a87f1318-3"
    })(["display:flex;justify-content:space-between;flex-direction:column;border-radius:6px 6px 0 0;border:1px solid ",";",""],th.P.color.Surface10.toString(),e=>{
      let{
        $noBottomBorder:t
      }=e;
      return t&&(0,T.css)(["border-bottom:0px;padding-bottom:0;"])
    }),
    nk=T.default.div.withConfig({
      componentId:"sc-a87f1318-4"
    })(["display:flex;align-items:center;gap:8px;padding-right:12px;& > div:first-child{flex:1;}"]),
    n_=T.default.div.withConfig({
      componentId:"sc-a87f1318-5"
    })(["display:flex;align-items:center;justify-content:space-between;padding:9px 12px 12px;"]),
    nC=T.default.div.withConfig({
      componentId:"sc-a87f1318-6"
    })(["display:flex;align-items:center;justify-content:",";font-family:Roboto;font-size:12px;font-style:normal;font-weight:400;line-height:16px;padding:8px 12px;color:",";border:1px solid ",";border-top:none;border-radius:0 0 6px 6px;gap:4px;cursor:default;svg{margin-top:-1px;}",""],e=>{
      let{
        $isTaraEnabled:t
      }=e;
      return t?"center":"space-between"
    },th.P.color.Surface300.toString(),th.P.color.Surface10.toString(),e=>{
      let{
        $yellow:t
      }=e;
      return t&&(0,T.css)(["border:none;background-color:rgba(254,214,77,0.25);justify-content:space-between;"])
    }),
    nS=T.default.div.withConfig({
      componentId:"sc-a87f1318-7"
    })(["display:flex;align-items:center;gap:4px;"]),
    nI=T.default.button.withConfig({
      componentId:"sc-a87f1318-8"
    })(["position:relative;border:none;border-radius:6px;padding:0;background:linear-gradient(233.37deg,#ee5edd 48.25%,#49c5ff 81.95%);overflow:hidden;z-index:0;",";display:flex;align-items:center;justify-content:center;margin-left:auto;cursor:pointer;& > *{position:relative;z-index:1;}&::before{content:'';position:absolute;inset:1px;background:linear-gradient(260deg,#fef5fd 38%,#f4fcff 100%);border-radius:5px;opacity:1;transition:opacity 0.1s ease;}&::after{content:'';position:absolute;inset:1px;background:linear-gradient(260deg,#fdedfb 38%,#f5f2fd 100%);border-radius:5px;z-index:0;opacity:0;transition:opacity 0.1s ease;}&:not(:disabled):hover:after{opacity:1;}:disabled{cursor:not-allowed;opacity:0.5;}"],e=>{
      let{
        $large:t
      }=e;
      return t?(0,T.css)(["height:35px;width:35px;"]):(0,T.css)(["height:24px;width:26px;"])
    }),
    nE=T.default.button.withConfig({
      componentId:"sc-a87f1318-9"
    })(["position:relative;border:none;border-radius:50%;padding:0;background:linear-gradient(135deg,#ee5edd 0%,#49c5ff 100%);overflow:hidden;z-index:0;height:24px;width:24px;min-width:24px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s ease;margin-left:auto;& > *{position:relative;z-index:1;}&::before{content:'';position:absolute;inset:2px;background:linear-gradient(135deg,#fef5fd 0%,#f4fcff 100%);border-radius:50%;opacity:1;transition:opacity 0.2s ease;}&:hover{transform:scale(1.05);}&:active{transform:scale(0.98);}"]),
    nF=T.default.div.withConfig({
      componentId:"sc-a87f1318-10"
    })(["font-size:10px;line-height:10px;font-weight:400;color:#A2A5AE;margin-top:8px;text-align:center;width:100%;"]),
    nA=T.default.strong.withConfig({
      componentId:"sc-a87f1318-11"
    })(["white-space:nowrap;"]),
    nZ=e=>{
      if(e.startsWith("Sessions from the ")){
        let t="Sessions from the ",
        n=e.slice(t.length);
        return(0,i.jsxs)(i.Fragment,{
          children:[t,(0,i.jsx)("b",{
            children:n
          })]
        })
      }
      let t=e.match(/'(.*?)'/);
      if(!t)return e;
      let[n,o]=t,
      [s,a]=e.split(n);
      return(0,i.jsxs)(i.Fragment,{
        children:[s,(0,i.jsx)("b",{
          children:"'".concat(o,"'")
        }),a]
      })
    },
    nN=e=>{
      if(!e)return"";
      let{
        total_sessions:t,
        descriptions:n
      }=e;
      return(null==n?void 0:n.length)?(0,i.jsxs)(i.Fragment,{
        children:["The assistant will respond based on ",(0,i.jsxs)(nA,{
          children:["".concat(t," session").concat(1===t?"":"s")," "]
        })," filtered with the following criteria:",(0,i.jsx)("ul",{
          children:null==n?void 0:n.map(e=>(0,i.jsx)("li",{
            children:nZ(e)
          },e))
        })]
      }):""
    },
    nR=e=>{
      let{
        loading:t,
        onStop:n,
        onSend:o,
        disabled:s
      }=e;
      return t?(0,i.jsx)(nE,{
        onClick:n,
        children:(0,i.jsx)(tJ,{})
      }):(0,i.jsx)(nI,{
        onClick:o,
        disabled:s,
        children:(0,i.jsx)(t$,{})
      })
    };
    var nD=e=>{
      let{
        value:t,
        onChange:n,
        onKeyDown:a,
        disabled:r,
        onSend:l,
        loading:d=!1,
        onStop:c,
        onSuggestionsClick:u,
        showSuggestionsButton:p=!1,
        suggestionsActive:h=!1,
        cursorToFirstToken:f=!1,
        onCursorPlaced:m,
        secondaryPlaceholder:g
      }=e,
      {
        aiSessionFeatureAllowed:x
      }=(0,E.I)(),
      {
        debugMode:v
      }=(0,tA.$)(),
      {
        creditsUsageISLoading:y,
        remainingCredits:b,
        setUpgradeModalVisible:w
      }=(0,t0.fB)(),
      j=(0,s.I0)(),
      {
        parentType:k
      }=(0,R.useRouter)().query,
      {
        currentOrgReducer:{
          status:_
        }
      }=(0,s.v9)(e=>e),
      {
        sessionMeta:C,
        sessionMetaIsFetching:S
      }=tR("AI STREAM - error getting ai chat messages",void 0,!0),
      I=o.useMemo(()=>nN(C),[C]),
      F=(0,o.useCallback)(()=>{
        j((0,K.qS)({
          taraProduct:"chat",
          parentType:k||"unknown",
          source:"chat"
        })),
        w(!0)
      },[w,k,j]),
      A=(0,o.useRef)(!1);
      (0,o.useEffect)(()=>{
        y||(A.current=50>=Math.ceil(b)||"Canceled"===_)
      },[y,b,_]);
      let Z=(0,o.useMemo)(()=>!!x&&(y?A.current:50>=Math.ceil(b)||"Canceled"===_),[b,y,x,_]),
      N=(0,o.useMemo)(()=>{
        if("number"!=typeof b&&!b||y)return"-/- credits left";
        let e=Math.max(0,Math.ceil(b));
        return"".concat(e.toLocaleString()," credit").concat(1!==e?"s":""," left")
      },[b,y]),
      D=(0,o.useMemo)(()=>Z&&0===Math.max(0,Math.ceil(b))?(0,i.jsx)(tX,{}):(0,i.jsx)(tY,{}),[Z,b]),
      {
        isLoggedInAsAdminAdmin:T
      }=(0,tf.Z)(),
      L=(0,o.useMemo)(()=>!T&&(!y&&0>=Math.ceil(b)||"Canceled"===_),[T,y,b,_]);
      return(0,i.jsxs)(nb,{
        children:[(0,i.jsxs)(nw,{
          children:[(0,i.jsxs)(nj,{
            $noBottomBorder:!x,
            children:[(0,i.jsxs)(nk,{
              children:[(0,i.jsx)(nv,{
                placeholder:d?"Tara is thinking...":"Ask Tara anything...",
                value:t,
                onChange:n,
                onKeyDown:a,
                disabled:r||!!x&&L,
                cursorToFirstToken:f,
                onCursorPlaced:m,
                secondaryPlaceholder:g
              }),x&&!p&&(0,i.jsx)(nR,{
                disabled:r||!!x&&L,
                onSend:l,
                onStop:c,
                loading:d
              })]
            }),p&&(0,i.jsxs)(n_,{
              children:[u&&(0,i.jsx)(nh,{
                onClick:u,
                isActive:h,
                disabled:d
              }),x&&(0,i.jsx)(nR,{
                disabled:r||!!x&&L,
                onSend:l,
                onStop:c,
                loading:d
              })]
            })]
          }),(0,i.jsxs)(nC,{
            $isTaraEnabled:x,
            $yellow:Z,
            children:[(0,i.jsx)(nS,{
              children:x?(0,i.jsxs)(i.Fragment,{
                children:[D,N]
              }):(0,i.jsx)(tW,{
                loading:S,
                tooltip:I,
                count:(null==C?void 0:C.total_sessions)||0
              })
            }),Z&&!v&&(0,i.jsx)(ne,{
              onClick:F,
              children:(0,i.jsx)(ny,{
                children:"Upgrade plan"
              })
            }),!x&&(0,i.jsx)(nI,{
              onClick:l,
              disabled:r,
              $large:!x,
              children:(0,i.jsx)(t$,{})
            })]
          })]
        }),(0,i.jsx)(nF,{
          children:"I do my best, but I can make mistakes. Please verify key info."
        })]
      })
    },
    nT=n(59996),
    nL=e=>(0,i.jsx)("svg",{
      width:12,
      height:12,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M4.144 8.288c-1.151 0-2.13-.403-2.935-1.209C.403 6.273 0 5.295 0 4.144c0-.23.017-.46.052-.69.034-.231.098-.45.19-.657a.652.652 0 0 1 .216-.259.836.836 0 0 1 .284-.12.669.669 0 0 1 .622.19L3.177 4.42 4.42 3.177 2.607 1.364a.666.666 0 0 1-.19-.622.836.836 0 0 1 .121-.284.652.652 0 0 1 .26-.216c.206-.092.425-.156.655-.19.23-.035.46-.052.69-.052 1.152 0 2.13.403 2.936 1.209.806.805 1.209 1.784 1.209 2.935 0 .265-.023.515-.07.751-.045.236-.114.469-.206.7l3.487 3.452c.334.334.501.743.501 1.226 0 .484-.167.893-.5 1.226-.335.334-.743.501-1.227.501a1.64 1.64 0 0 1-1.226-.518l-3.453-3.47c-.23.092-.463.16-.699.207-.236.046-.486.069-.751.069Z",
        fill:"#454B5D"
      })
    }),
    nM=e=>(0,i.jsxs)("svg",{
      width:11,
      height:13,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("path",{
        d:"M10.431 5.6c-.013-.008-.028-.011-.04-.018V5.58L8.252 4.495l-.78.815 1.49.742-3.62 1.606-3.62-1.606 1.482-.755-.774-.801L.294 5.579v.004c-.014.006-.028.01-.041.018A.534.534 0 0 0 0 6.055v4.007a.534.534 0 0 0 .295.478l4.808 2.404a.534.534 0 0 0 .478 0l4.808-2.404a.534.534 0 0 0 .295-.478V6.055a.534.534 0 0 0-.253-.455Z",
        fill:"#454B5D"
      }),(0,i.jsx)("path",{
        d:"m7.856 3.049-.755-.756-1.225 1.225V0H4.808v3.518L3.583 2.293l-.756.756 2.515 2.514L7.856 3.05Z",
        fill:"#454B5D"
      })]
    });
    let nz=T.default.div.withConfig({
      componentId:"sc-ce13efa8-0"
    })(["margin:4px 0;width:100%;background:",";border:1px solid ",";border-radius:8px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:12px;"],e=>e.isResponse?"#EAF9F3":e0.r.colors.surface05.toString(),e=>e.isResponse?e0.r.colors.success100.toString():e0.r.colors.surface10.toString()),
    nP=T.default.div.withConfig({
      componentId:"sc-ce13efa8-1"
    })(["display:flex;align-items:center;justify-content:space-between;cursor:pointer;border-bottom:",";padding-bottom:",";margin-bottom:",";"],e=>e.expanded?"1px solid ".concat(e0.r.colors.surface10.toString()):"none",e=>e.expanded?"10px":"0",e=>e.expanded?"10px":"0"),
    nO=T.default.div.withConfig({
      componentId:"sc-ce13efa8-2"
    })(["display:flex;align-items:flex-start;gap:8px;> svg{margin-top:6px;}"]),
    nU=e=>{
      let{
        type:t
      }=e;
      return"function_call"===t?(0,i.jsx)(nL,{}):(0,i.jsx)(nM,{})
    },
    nB=T.default.span.withConfig({
      componentId:"sc-ce13efa8-3"
    })(["font-size:12px;font-weight:500;color:",";"],e0.r.colors.surface400.toString()),
    nV=T.default.span.withConfig({
      componentId:"sc-ce13efa8-4"
    })(["font-size:12px;color:",";"],e0.r.colors.surface300.toString()),
    nW=(0,T.default)(nT.Z).withConfig({
      componentId:"sc-ce13efa8-5"
    })(["font-size:10px;color:",";transition:transform 0.2s;transform:",";"],e0.r.colors.primarySky.toString(),e=>e.expanded?"rotate(-90deg) scale(1.2)":"rotate(90deg) scale(1.2)"),
    nH=T.default.div.withConfig({
      componentId:"sc-ce13efa8-6"
    })([""]),
    nq=T.default.pre.withConfig({
      componentId:"sc-ce13efa8-7"
    })(["background:white;border:1px solid ",";border-radius:6px;padding:12px;font-size:12px;line-height:1.5;color:#495057;margin:0;overflow-x:auto;white-space:pre-wrap;word-break:break-word;font-family:'SF Mono',Monaco,'Cascadia Code','Roboto Mono',Consolas,'Courier New',monospace;max-height:",";overflow-y:",";position:relative;"],e0.r.colors.surface05.toString(),e=>e.isLarge&&!e.isExpanded?"200px":"none",e=>e.isLarge&&!e.isExpanded?"auto":"visible"),
    nQ=T.default.button.withConfig({
      componentId:"sc-ce13efa8-8"
    })(["color:"," !important;border:none;border-radius:4px;padding:6px 12px;font-size:11px;font-weight:500;cursor:pointer;margin-top:8px;margin-left:auto;background:none !important;&:hover{color:"," !important;}"],e0.r.colors.primaryMidnight.toString(),e0.r.colors.primarySky.toString()),
    nK=T.default.div.withConfig({
      componentId:"sc-ce13efa8-9"
    })(["font-size:10px;color:#6c757d;margin-bottom:4px;font-style:italic;"]);
    var nG=e=>{
      let{
        type:t,
        tool:n,
        timestamp:s
      }=e,
      [a,r]=(0,o.useState)(!1),
      [l,d]=(0,o.useState)(!1),
      {
        formattedData:c,
        isLarge:u,
        sizeInfo:p
      }=(0,o.useMemo)(()=>{
        try{
          let e=JSON.stringify(n.data,null,2),
          t=e.split("\n"),
          i=e.length;
          return{
            formattedData:e,
            isLarge:t.length>15||i>1e3,
            sizeInfo:{
              lines:t.length,
              chars:i,
              size:i>1024?"".concat((i/1024).toFixed(1)," KB"):"".concat(i," chars")
            }
          }
        }
        catch(t){
          let e=String(n.data);
          return{
            formattedData:e,
            isLarge:e.length>500,
            sizeInfo:{
              lines:e.split("\n").length,
              chars:e.length,
              size:e.length>1024?"".concat((e.length/1024).toFixed(1)," KB"):"".concat(e.length," chars")
            }
          }
        }
      },[n.data]);
      return(0,i.jsxs)(nz,{
        isResponse:"function_response"===t,
        children:[(0,i.jsxs)(nP,{
          expanded:a,
          onClick:()=>{
            r(!a)
          },
          children:[(0,i.jsxs)(nO,{
            children:[(0,i.jsx)(nU,{
              type:t
            }),(0,i.jsxs)("div",{
              children:[(0,i.jsx)(nB,{
                children:n.name
              }),(0,i.jsx)("br",{}),(0,i.jsx)(nV,{
                children:"function_call"===t?"Argument":"Response"
              })]
            })]
          }),(0,i.jsx)(nW,{
            expanded:a
          })]
        }),a&&(0,i.jsx)(nH,{
          children:(0,i.jsxs)(i.Fragment,{
            children:[u&&(0,i.jsxs)(nK,{
              children:[p.lines," lines • ",p.size]
            }),(0,i.jsx)(nq,{
              isLarge:u,
              isExpanded:l,
              children:c
            }),u&&(0,i.jsx)(nQ,{
              onClick:()=>{
                d(!l)
              },
              children:l?"Show Less":"Show More"
            })]
          })
        })]
      })
    },
    n$=n(37088),
    nY=n(34155);
    let nX={
      [ty.iK.PROD]:{
        proxy:"/_tara_prod",
        env:"https://tara-api.uxcam.com"
      },
      [ty.iK.UAT]:{
        proxy:"/_tara_uat",
        env:"https://tara-uat.uxcam.com"
      },
      [ty.iK.STAGING]:{
        proxy:"/_tara_staging",
        env:"https://tara-stg.uxcam.com"
      },
      [ty.iK.EXPERIENCE]:{
        proxy:"/_tara_experience",
        env:"https://tara-experience.uxcam.com"
      },
      [ty.iK.CX]:{
        proxy:"/_tara_cx",
        env:"https://tara-cx.uxcam.com"
      },
      [ty.iK.BIZOPS]:{
        proxy:"/_tara_bizops",
        env:"https://tara-bizops.uxcam.com"
      },
      [ty.iK.RESEARCH]:{
        proxy:"/_tara_research",
        env:"https://tara-research.uxcam.com"
      }
    };
    class nJ{
      static getBaseURL(e,t){
        let n=nX[e]||nX[ty.iK.PROD];
        return t?n.proxy:n.env
      }
      static async getCostDetails(e,t){
        let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ty.iK.PROD,
        i="true"===nY.env.USE_PROXY,
        o=nJ.getBaseURL(n,i);
        return(await tb.be.get("".concat(o,"/debug/cost"),{
          params:{
            invocation_id:e,
            app_id:t
          },
          withCredentials:!0
        })).data
      }
      static async clearChat(e,t){
        let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ty.iK.PROD,
        i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"assistant",
        o="true"===nY.env.USE_PROXY,
        s=nJ.getBaseURL(n,o);
        return(await tb.be.post("".concat(s,"/remove/chat"),{
          app_id:e,
          persona:i,
          session_id:t
        },{
          withCredentials:!0
        })).data
      }
    }
    let n0=e=>{
      let{
        invocationId:t,
        appId:n,
        enabled:i
      }=e,
      {
        currentVersion:o
      }=tF();
      return(0,a.useQuery)(["debugCost",t,n,o],()=>nJ.getCostDetails(t,n,o),{
        enabled:i&&!!t&&!!n,
        staleTime:1/0,
        cacheTime:1/0,
        retry:!1
      })
    },
    n1=T.default.button.withConfig({
      componentId:"sc-cf945245-0"
    })(["display:inline-flex;align-items:center;gap:4px;padding:4px 6px !important;background-color:"," !important;border:1px solid "," !important;border-radius:30px !important;font-size:12px;line-height:20px;color:"," !important;cursor:pointer;margin-top:8px;transition:all 0.2s;&:hover{background-color:#E6E8EB !important;border-color:#BFBFBF !important;}svg{width:16px;height:16px;}"],e0.r.colors.surface05.toString(),e0.r.colors.surface10.toString(),e0.r.colors.surface400.toString()),
    n2=T.default.div.withConfig({
      componentId:"sc-cf945245-1"
    })(["padding:4px 0;"]),
    n5=T.default.div.withConfig({
      componentId:"sc-cf945245-2"
    })(["display:flex;align-items:center;gap:4px;font-size:13px;line-height:20px;color:#fff;strong{font-weight:600;}"]),
    n4=T.default.div.withConfig({
      componentId:"sc-cf945245-3"
    })(["display:flex;align-items:center;justify-content:center;padding:8px;"]),
    n6=T.default.div.withConfig({
      componentId:"sc-cf945245-4"
    })(["position:relative;width:16px;height:16px;"]);
    var n3=e=>{
      let{
        message:t,
        appId:n
      }=e,
      [s,a]=(0,o.useState)(!1),
      {
        invocation_id:r
      }=t,
      {
        data:l,
        isLoading:d
      }=n0({
        invocationId:r,
        appId:n,
        enabled:s
      });
      return(0,i.jsx)(N.Z,{
        title:(()=>{
          if(d)return(0,i.jsx)(n4,{
            children:(0,i.jsx)(n6,{
              children:(0,i.jsx)(eO.$j,{
                "data-size":"xs"
              })
            })
          });
          if(!l||!l.cost_breakdown||0===l.cost_breakdown.length)return(0,i.jsx)(n2,{
            children:"No cost data available"
          });
          let e=l.cost_breakdown[0],
          t=l.total_tokens||0,
          n=l.total_cost||0,
          o=l.models||[],
          s=l.tara_version||"",
          a=e.provider||"";
          return(0,i.jsxs)(n2,{
            children:[(0,i.jsxs)(n5,{
              children:[(0,i.jsx)("strong",{
                children:"Tara version:"
              }),(0,i.jsx)("span",{
                children:s||(null==e?void 0:e.tara_version)
              })]
            }),(0,i.jsxs)(n5,{
              children:[(0,i.jsx)("strong",{
                children:"Total tokens:"
              }),(0,i.jsx)("span",{
                children:t.toLocaleString()
              })]
            }),(0,i.jsxs)(n5,{
              children:[(0,i.jsx)("strong",{
                children:"Total cost:"
              }),(0,i.jsxs)("span",{
                children:["$",n.toFixed(4)]
              })]
            }),(0,i.jsxs)(n5,{
              children:[(0,i.jsx)("strong",{
                children:"Models:"
              }),(null==o?void 0:o.length)>0?(0,i.jsx)("span",{
                children:o.join(", ")
              }):(0,i.jsxs)("span",{
                children:[a," ",e.model||"Default"]
              })]
            })]
          })
        })(),
        placement:"top",
        overlayStyle:{
          maxWidth:400
        },
        color:"#1F1F1F",
        children:(0,i.jsxs)(n1,{
          onMouseEnter:()=>a(!0),
          onMouseLeave:()=>a(!1),
          children:[(0,i.jsx)(n$.Z,{}),"View response info"]
        })
      })
    },
    n8=e=>(0,i.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:16,
        height:16,
        rx:4,
        fill:"#fff"
      }),(0,i.jsx)("path",{
        d:"M5.088 7.351v5.177a.647.647 0 0 1-.647.647H3.147a.647.647 0 0 1-.647-.647v-4.53a.647.647 0 0 1 .647-.647h1.941Zm0 0a2.588 2.588 0 0 0 2.588-2.588v-.647a1.294 1.294 0 1 1 2.589 0l-.38 3.235h2.32A1.294 1.294 0 0 1 13.5 8.645l-.647 3.236c-.093.397-.27.737-.503.97-.233.234-.511.347-.791.324h-4.53a1.941 1.941 0 0 1-1.94-1.942",
        stroke:"#A2A5AE",
        strokeWidth:1.1,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })]
    }),
    n7=e=>(0,i.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:16,
        height:16,
        rx:4,
        fill:"#EAF9F3"
      }),(0,i.jsx)("path",{
        d:"M5.088 7.351v5.177a.647.647 0 0 1-.647.647H3.147a.647.647 0 0 1-.647-.647v-4.53a.647.647 0 0 1 .647-.647h1.941Zm0 0a2.588 2.588 0 0 0 2.588-2.588v-.647a1.294 1.294 0 1 1 2.589 0l-.38 3.235h2.32A1.294 1.294 0 0 1 13.5 8.645l-.647 3.236c-.093.397-.27.737-.503.97-.233.234-.511.347-.791.324h-4.53a1.941 1.941 0 0 1-1.94-1.942",
        stroke:"#32BF8A",
        strokeWidth:1.1,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })]
    }),
    n9=e=>(0,i.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:16,
        height:16,
        rx:4,
        fill:"#EAF9F3"
      }),(0,i.jsx)("path",{
        d:"M8.868 2.787a1.737 1.737 0 0 1 1.734 1.635l.003.102V6.84h1.158a1.737 1.737 0 0 1 1.726 1.534l.008.1.003.103-.011.113-.583 2.913c-.22.942-.87 1.62-1.627 1.61l-.095-.005H6.553a.58.58 0 0 1-.575-.511l-.004-.068V7.11a.579.579 0 0 1 .29-.501 1.736 1.736 0 0 0 .864-1.388l.004-.117v-.579a1.737 1.737 0 0 1 1.736-1.737ZM4.237 6.84a.579.579 0 0 1 .575.511l.004.068v5.21a.58.58 0 0 1-.511.575l-.068.004h-.58a1.158 1.158 0 0 1-1.154-1.07L2.5 12.05V7.998a1.158 1.158 0 0 1 1.071-1.155l.087-.003h.579Z",
        fill:"#32BF8A"
      })]
    }),
    ie=e=>(0,i.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:16,
        height:16,
        rx:4,
        fill:"#fff"
      }),(0,i.jsx)("path",{
        d:"M5.088 8.649V3.472a.647.647 0 0 0-.647-.647H3.147a.647.647 0 0 0-.647.647v4.53a.647.647 0 0 0 .647.647h1.941Zm0 0a2.588 2.588 0 0 1 2.588 2.588v.647a1.294 1.294 0 0 0 2.589 0l-.38-3.235h2.32A1.294 1.294 0 0 0 13.5 7.355l-.647-3.236c-.093-.397-.27-.737-.503-.97-.233-.234-.511-.348-.791-.324h-4.53a1.941 1.941 0 0 0-1.94 1.941",
        stroke:"#A2A5AE",
        strokeWidth:1.1,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })]
    }),
    it=e=>(0,i.jsx)("svg",{
      width:15,
      height:15,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsxs)("g",{
        clipPath:"url(#icon-thumbs-down-hover_svg__clip0_3040_12499)",
        children:[(0,i.jsx)("path",{
          d:"M11.25 0h-7.5A3.75 3.75 0 0 0 0 3.75v7.5A3.75 3.75 0 0 0 3.75 15h7.5A3.75 3.75 0 0 0 15 11.25v-7.5A3.75 3.75 0 0 0 11.25 0Z",
          fill:"#FEEEED"
        }),(0,i.jsx)("path",{
          d:"M4.77 8.108V3.256a.607.607 0 0 0-.606-.607H2.95a.607.607 0 0 0-.606.607v4.246a.607.607 0 0 0 .606.606h1.82Zm0 0a2.426 2.426 0 0 1 2.427 2.427v.607a1.214 1.214 0 0 0 2.426 0l-.355-3.034h2.175a1.213 1.213 0 0 0 1.213-1.213l-.606-3.033c-.088-.372-.253-.692-.472-.91-.219-.22-.479-.325-.742-.303H6.59a1.82 1.82 0 0 0-1.82 1.82",
          stroke:"#F4584C",
          strokeWidth:1.1,
          strokeLinecap:"round",
          strokeLinejoin:"round"
        })]
      })
    }),
    ii=e=>(0,i.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:16,
        height:16,
        rx:4,
        fill:"#FEEEED"
      }),(0,i.jsx)("path",{
        d:"M8.868 13.213a1.737 1.737 0 0 0 1.734-1.635l.003-.102V9.16h1.158a1.737 1.737 0 0 0 1.725-1.534l.01-.1.002-.103-.012-.113-.582-2.913c-.22-.942-.87-1.62-1.627-1.61l-.095.005H6.553a.579.579 0 0 0-.575.511l-.004.068v5.52a.579.579 0 0 0 .29.501 1.736 1.736 0 0 1 .864 1.388l.004.117v.579a1.737 1.737 0 0 0 1.736 1.737ZM4.237 9.16a.579.579 0 0 0 .575-.511l.004-.068v-5.21a.579.579 0 0 0-.511-.575l-.068-.004h-.58a1.158 1.158 0 0 0-1.154 1.07L2.5 3.95v4.052a1.158 1.158 0 0 0 1.071 1.155l.087.003h.579Z",
        fill:"#F4584C"
      })]
    });
    let io=[{
      id:"incorrect_examples",
      label:"Incorrect examples provided"
    },{
      id:"didnt_answer",
      label:"Didn’t answer my question"
    },{
      id:"inaccurate",
      label:"Inaccurate information/response"
    },{
      id:"technical_error",
      label:"Technical error or processing issue"
    },{
      id:"vague_generic",
      label:"Too vague or generic"
    },{
      id:"too_slow",
      label:"Response took too long"
    },{
      id:"exposed_sensitive_data",
      label:"Exposed sensitive data"
    },{
      id:"other",
      label:"Other"
    }],
    is=async function(e){
      let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ty.iK.PROD,
      n=ty.ZP.getBaseURL(t);
      return(await tb.be.post("".concat(n,"/feedback"),e,{
        withCredentials:!0
      })).data
    },
    ia={
      isOpen:!1,
      messageId:"",
      invocationId:"",
      sessionId:""
    },
    ir=(0,o.createContext)(null),
    il=()=>{
      let e=(0,o.useContext)(ir);
      if(!e)throw Error("useFeedbackModal must be used within a FeedbackModalProvider");
      return e
    },
    id=e=>{
      let{
        children:t
      }=e,
      [n,s]=(0,o.useState)(ia),
      [a,r]=(0,o.useState)(!1),
      [l,d]=(0,o.useState)(null),
      c=(0,o.useCallback)((e,t,n)=>{
        s({
          isOpen:!0,
          messageId:e,
          invocationId:t,
          sessionId:n
        })
      },[]),
      u=(0,o.useCallback)(()=>{
        s(ia)
      },[]),
      p=(0,o.useMemo)(()=>({
        modalState:n,
        openModal:c,
        closeModal:u,
        isSubmitting:a,
        setIsSubmitting:r,
        submittedMessageId:l,
        setSubmittedMessageId:d
      }),[n,c,u,a,l]);
      return(0,i.jsx)(ir.Provider,{
        value:p,
        children:t
      })
    },
    ic=T.default.div.withConfig({
      componentId:"sc-8f6b399f-0"
    })(["display:flex;align-items:center;gap:8px;"]),
    iu=T.default.button.withConfig({
      componentId:"sc-8f6b399f-1"
    })(["background:transparent !important;border:none !important;cursor:pointer !important;padding:0 !important;display:flex !important;align-items:center !important;justify-content:center !important;position:relative !important;width:16px !important;height:16px !important;&:disabled{cursor:not-allowed !important;opacity:0.5 !important;}"]);
    var ip=(0,o.memo)(e=>{
      let{
        messageId:t,
        invocationId:n,
        sessionId:a,
        initialFeedback:r
      }=e,
      l=(0,s.I0)(),
      {
        currentAppReducer:{
          _id:d
        }
      }=(0,s.v9)(e=>e),
      {
        openModal:c,
        isSubmitting:u,
        submittedMessageId:p,
        setSubmittedMessageId:h
      }=il(),
      {
        currentVersion:f
      }=tF(),
      [m,g]=(0,o.useState)(null!=r?r:null),
      [x,v]=(0,o.useState)(null),
      [y,b]=(0,o.useState)(!1),
      [w,j]=(0,o.useState)(!1),
      [k,_]=(0,o.useState)(!1);
      (0,o.useEffect)(()=>{
        p===t&&(g("negative"),h(null))
      },[p,t,h]);
      let C=(0,o.useCallback)(async()=>{
        if(j(!1),y||u)return;
        let e="positive"===m?null:"positive";
        g(e),
        b(!0);
        try{
          await is({
            feedback_type:e,
            why_bad_response:null,
            improvement_suggestion:null,
            app_id:d||"",
            session_id:a,
            invocation_id:n
          },f),
          "positive"===e?l((0,et.CW)(null,{
            eventName:"wa_ai_submit_feedback",
            track_type:"event",
            eventProperty:{
              feedback:"thumbs_up",
              link:(0,ty.Y6)(n)
            }
          })):l((0,et.CW)(null,{
            eventName:"wa_ai_remove_feedback",
            track_type:"event",
            eventProperty:{
              feedback:"thumbs_up"
            }
          }))
        }
        catch(e){
          console.error("Failed to submit positive feedback:",e),
          g(m)
        }
        finally{
          b(!1)
        }
      },[m,t,n,a,d,l,y,u,f]),
      S=(0,o.useCallback)(async()=>{
        if(_(!1),!y&&!u){
          if("negative"===m){
            g(null),
            b(!0);
            try{
              await is({
                feedback_type:null,
                why_bad_response:null,
                improvement_suggestion:null,
                app_id:d||"",
                session_id:a,
                invocation_id:n
              },f),
              l((0,et.CW)(null,{
                eventName:"wa_ai_remove_feedback",
                track_type:"event",
                eventProperty:{
                  feedback:"thumbs_down"
                }
              }))
            }
            catch(e){
              console.error("Failed to clear negative feedback:",e),
              g(m)
            }
            finally{
              b(!1)
            }
            return
          }
          c(t,n,a)
        }
      },[m,y,u,c,t,n,a,d,l,f]),
      I=()=>"positive"===m?"You responded positively":"Positive response",
      E=()=>"negative"===m?"You responded negatively":"Negative response",
      F="positive"!==m,
      A="negative"!==m;
      return(0,i.jsxs)(ic,{
        children:[F&&(0,i.jsx)(N.Z,{
          title:E(),
          visible:k,
          onVisibleChange:_,
          children:(0,i.jsx)(iu,{
            onClick:S,
            onMouseEnter:()=>v("down"),
            onMouseLeave:()=>v(null),
            disabled:y||u,
            "aria-label":E(),
            children:"negative"===m?(0,i.jsx)(ii,{}):"down"===x?(0,i.jsx)(it,{}):(0,i.jsx)(ie,{})
          })
        }),A&&(0,i.jsx)(N.Z,{
          title:I(),
          visible:w,
          onVisibleChange:j,
          children:(0,i.jsx)(iu,{
            onClick:C,
            onMouseEnter:()=>v("up"),
            onMouseLeave:()=>v(null),
            disabled:y||u,
            "aria-label":I(),
            children:"positive"===m?(0,i.jsx)(n9,{}):"up"===x?(0,i.jsx)(n7,{}):(0,i.jsx)(n8,{})
          })
        })]
      })
    });
    let ih=T.default.div.withConfig({
      componentId:"sc-a2040092-0"
    })(["margin-top:8px;"]),
    im=T.default.div.withConfig({
      componentId:"sc-a2040092-1"
    })(["display:flex;align-items:center;gap:4px;color:",";font-size:12px;line-height:24px;font-weight:400;svg path{fill:",";}"],e0.r.colors.surface300.toString(),e0.r.colors.surface300.toString()),
    ig=T.default.div.withConfig({
      componentId:"sc-a2040092-2"
    })(["width:100%;display:flex;flex-direction:column;padding:12px 20px 10px 20px;"]),
    ix=T.default.div.withConfig({
      componentId:"sc-a2040092-3"
    })(["font-size:10px;line-height:20px;font-weight:400;color:#a2a5ae;"]),
    iv=["tara","assistant","user_stopped"],
    iy=T.default.div.withConfig({
      componentId:"sc-a2040092-4"
    })(["padding:",";background-color:",";border-radius:6px;font-size:13px;line-height:24px;color:#161e35;font-weight:400;display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;word-break:break-word;p{color:#161e35;margin-bottom:0;}ol,ul{padding-left:24px;margin-top:1em;margin-bottom:1em;}h1,h2,h3,h4,h5,h6 + ol,ul{margin-top:0;}& > *:last-child{margin-bottom:0px;}a,button{color:#0d6efd;background-color:rgba(0,123,255,0.1);border-radius:3px;padding:1px 3px;text-decoration:none;font-weight:500;border:none;cursor:pointer;}ol{list-style:auto;}& > ul{list-style:disc;}& > * > ul{list-style:circle;}& > * > * > ul{list-style:square;}ul li{list-style:inherit;}table{width:100%;border-collapse:collapse;font-size:13px;thead{position:sticky;top:-1px;}}th,td{border:1px solid #ddd;padding:8px 12px;text-align:left;vertical-align:top;white-space:pre;}th{background-color:#f8f9fa;font-weight:600;color:#495057;}tbody tr:nth-child(even){background-color:#f8f9fa;}tbody tr:hover{background-color:#e9ecef;}td strong{font-weight:600;}"],e=>{
      let{
        role:t
      }=e;
      return iv.includes(t)?"0px":"6px 12px 12px"
    },e=>{
      let{
        role:t
      }=e;
      return iv.includes(t)?"#FFFFFF":"#DFEAFF"
    }),
    ib=T.default.div.withConfig({
      componentId:"sc-a2040092-5"
    })(["position:relative;height:20px;width:20px;margin-right:8px;"]),
    iw=T.default.a.withConfig({
      componentId:"sc-a2040092-6"
    })(['color:#5D97FF;background-color:#DFEAFF;border-radius:3px;padding:1px 3px;text-decoration:none;font-weight:500;border:none;cursor:pointer;line-height:23px;margin-bottom:1px;&[data-session-watched="true"]{background-color:#EFF5FF;color:#7DACFF;}']),
    ij=T.default.a.withConfig({
      componentId:"sc-a2040092-7"
    })(['display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 4px;background-color:#DFEAFF;color:#5D97FF;border-radius:9px;border:none;cursor:pointer;font-size:11px;font-weight:600;line-height:1;margin:0 2px;vertical-align:middle;text-decoration:none;&[data-session-watched="true"]{background-color:#EFF5FF;color:#7DACFF;}&:hover{background:#BED5FF;color:#5D97FF;}']),
    ik=T.default.button.withConfig({
      componentId:"sc-a2040092-8"
    })(["background:transparent !important;border:none !important;cursor:pointer !important;padding:0 !important;display:flex !important;align-items:center !important;justify-content:center !important;position:relative !important;width:16px !important;height:16px !important;"]),
    i_=T.default.div.withConfig({
      componentId:"sc-a2040092-9"
    })(["display:flex;align-items:center;gap:8px;margin-top:6px;"]),
    iC=T.default.div.withConfig({
      componentId:"sc-a2040092-10"
    })(["display:flex;flex-direction:row;align-items:center;"]),
    iS=T.default.div.withConfig({
      componentId:"sc-a2040092-11"
    })(["width:100%;overflow-x:auto;max-height:400px;margin:1em 0;"]),
    iI=(e,t)=>{
      let[n,i]=o.useState(""),
      s=o.useRef(""),
      a=o.useRef(0),
      r=o.useRef(null);
      return o.useEffect(()=>{
        if(!t){
          i(""),
          s.current="",
          a.current=0,
          r.current&&(clearInterval(r.current),r.current=null);
          return
        }
        let n=e.slice(a.current);
        n&&(s.current+=n,a.current=e.length),
        !r.current&&s.current.length>0&&(r.current=setInterval(()=>{
          if(s.current.length>0){
            let e=s.current[0];
            s.current=s.current.slice(1),
            i(t=>t+e)
          }
          else r.current&&(clearInterval(r.current),r.current=null)
        },8))
      },[e,t]),
      o.useEffect(()=>()=>{
        r.current&&clearInterval(r.current)
      },[]),
      n
    },
    iE=e=>new Date(e).toLocaleString("en-GB",{
      hour:"2-digit",
      minute:"2-digit"
    });
    var iF=e=>{
      let{
        isLoading:t,
        message:n,
        dateRef:r,
        customCopyContent:l,
        showCopyButton:d=!0,
        chatSessionId:c
      }=e,
      {
        content:u,
        timestamp:p,
        role:h,
        readable_filters:f,
        sessions_analyzed_by_ai:m,
        tool:g,
        invocation_id:x,
        isError:v,
        id:y,
        feedback_type:b
      }=n,
      {
        debugMode:w
      }=(0,tA.$)(),
      {
        aiSessionFeatureAllowed:j
      }=(0,E.I)(),
      k="streaming"===n.id,
      _=iI(u||"",k),
      {
        urlReducer:C,
        appFilter:{
          session:{
            segment:S
          }
        }
      }=(0,s.v9)(e=>e),
      I=o.useMemo(()=>iE(p),[p]),
      {
        tempDocumentsMap:F,
        sessionAliasMap:A
      }=tv(),
      {
        onItemSetActive:Z,
        buildSessionUrl:R
      }=(0,H.o)({
        expanded:!1
      }),
      D="user"===h,
      T=(0,s.I0)(),
      {
        setUtils:L
      }=(0,q.Fk)(),
      M=null==C?void 0:C.sessionid,
      {
        mutate:z
      }=(0,$.T)(),
      P=(0,a.useQueryClient)(),
      [O,U]=o.useState(""),
      [V,W]=o.useState({}),
      [Q,G]=o.useState(!1),
      [Y,X]=o.useState(!1),
      J=o.useRef(1),
      ee=o.useRef(new Map);
      o.useEffect(()=>{
        J.current=1,
        ee.current=new Map
      },[n.id]),
      (0,o.useEffect)(()=>{
        let e=localStorage.getItem("watched_sessions_by_invocation");
        if(e)try{
          W(JSON.parse(e))
        }
        catch(e){
          console.error("Failed to parse watched sessions map",e)
        }
      },[]);
      let en=o.useCallback((e,t)=>{
        W(n=>{
          let i=n[t]||[];
          if(i.includes(e))return n;
          let o={
            ...n,
            [t]:[...i,e]
          };
          try{
            localStorage.setItem("watched_sessions_by_invocation",JSON.stringify(o))
          }
          catch(e){
            console.error("Failed to save watched sessions map",e)
          }
          return o
        })
      },[]),
      ei=o.useCallback(()=>{
        let e=l||u;
        if("string"==typeof e){
          let t=(0,ty.LV)(e,C.appId||"",A);
          navigator.clipboard.writeText(t),
          G(!0),
          setTimeout(()=>G(!1),3e3),
          T((0,et.CW)(null,{
            eventName:"wa_ai_copy_response",
            track_type:"event"
          }))
        }
      },[u,l,C.appId,T]),
      eo=o.useCallback(e=>{
        T((0,et.CW)(null,{
          eventName:"wa_sessions_tara_click_link",
          track_type:"event",
          eventProperty:{
            url_link:e
          }
        }))
      },[T]),
      es=(0,o.useMemo)(()=>(0,K.FN)(O),[O]),
      ea=P.getQueryState(es),
      er=(0,B.e)("web");
      (0,o.useEffect)(()=>{
        var e,
        t,
        n,
        i,
        o;
        O&&(null==ea||!ea.isFetching)&&(null==ea?void 0:ea.data)&&z({
          appid:C.appId||"",
          recordedon:null==ea?void 0:null===(t=ea.data)||void 0===t?void 0:null===(e=t.time)||void 0===e?void 0:e.sessionRecordedDateTime,
          session_per_page:101,
          usersessionrun:null==ea?void 0:null===(n=ea.data)||void 0===n?void 0:n.sessionNumber,
          uxcamuserid:null==ea?void 0:null===(o=ea.data)||void 0===o?void 0:null===(i=o.userProperty)||void 0===i?void 0:i.uxcamuserid,
          webApp:er
        },{
          onSettled:()=>{
            U("")
          },
          onSuccess:e=>{
            let t=e.data.data.body.find(e=>e.sessionid===O);
            t&&T((0,K.qo)({
              sessionId:t.sessionid,
              aiAnalyzed:t.sessionanalyzedbyai,
              containsVideo:t.video,
              duration:t.sessionDuration,
              gestureCount:null==t?void 0:t.totalGesture,
              parentType:C.parentType||"",
              sessionSelectedFrom:"tara",
              filtersApplied:S,
              isRageTap:t.isRageTap,
              isUiFreeze:t.isuifreeze,
              isCrashed:t.crashed
            }))
          }
        })
      },[O,T,ea,er,z,S,C.appId,C.parentType]);
      let el=o.useCallback(e=>{
        let t=e.replace(/https?:\/\/(?:app\.)?uxcam\.com\/app\/sessions\/([a-f0-9]{24})\b[^\s)"]*/gi,"{{session:$1}}"),
        o=t.match(/\(\((\d?)\)\)/);
        if(o){
          var s;
          let e=Number(o[1]),
          a=(null==F?void 0:F[e])||(null==n?void 0:null===(s=n.document_map)||void 0===s?void 0:s[e]),
          r=t.startsWith(":")?": ":"";
          if(a)return[r,(0,i.jsx)("a",{
            href:a.url,
            target:"_blank",
            rel:"noopener noreferrer",
            onClick:()=>eo(a.url),
            children:a.title
          },a.url)]
        }
        let a=/\[\[(.*?)\]\]/g;
        if(t.match(a)){
          let e;
          let n=[],
          o=0;
          for(;null!==(e=a.exec(t));){
            e.index>o&&n.push(t.substring(o,e.index));
            let s=e[1],
            a=(x||y)&&V[x||y]||[],
            r=R(M||s,s,0,!1);
            n.push((0,i.jsx)(iw,{
              href:r,
              "data-session-watched":a.includes(s),
              onClick:e=>{
                e.preventDefault();
                let t=M||s;
                U(s);
                let n=Z(t,!1,!1,s);
                L(e=>({
                  ...e,
                  activePlaylist:q.W_.INACTIVE
                })),
                eo(n),
                (x||y)&&en(s,x||y)
              },
              children:s
            },"session-".concat(s,"-").concat(e.index))),
            o=e.index+e[0].length
          }
          return o<t.length&&n.push(t.substring(o)),
          (0,i.jsx)(i.Fragment,{
            children:n
          })
        }
        let r=t.match(/\{\{(session|screenvisit):([^}]+)\}\}/gi),
        l=(x||y)&&V[x||y]||[];
        if(r){
          let e;
          let n=[],
          o=/\{\{(session|screenvisit):([^}]+)\}\}/gi,
          s=0;
          for(;null!==(e=o.exec(t));){
            let o,
            a,
            r;
            e.index>s&&n.push(t.substring(s,e.index));
            let d=e[1].toLowerCase(),
            c=e[2];
            if("session"===d)o=c;
            else{
              let e=c.split(",");
              [o]=e;
              let t=e[1];
              if(t&&t.includes(":")){
                let e=t.split(":").map(Number);
                a=3===e.length?3600*e[0]+60*e[1]+e[2]:60*e[0]+e[1]
              }
              else a=parseFloat(t);
              r=e.slice(2).join(",")
            }
            let u=/^S\d+$/i.test(o)?(null==A?void 0:A[o])||null:o,
            p=o,
            h=ee.current.get(p);
            if(void 0===h&&(h=J.current,ee.current.set(p,h),J.current+=1),!u){
              n.push((0,i.jsx)(ij,{
                as:"span",
                style:{
                  cursor:"default"
                },
                children:h
              },"ref-".concat(h,"-").concat(e.index))),
              s=e.index+e[0].length;
              continue
            }
            let f=M||u,
            m=R(f,u,a||0,!1),
            g="session"===d?(0,i.jsxs)("span",{
              style:{
                whiteSpace:"nowrap"
              },
              children:["Watch session ",(0,i.jsx)("strong",{
                children:u
              })]
            }):(0,i.jsxs)("span",{
              style:{
                whiteSpace:"nowrap"
              },
              children:["Watch screen ",(0,i.jsx)("strong",{
                children:r
              })]
            });
            n.push((0,i.jsx)(N.Z,{
              title:g,
              placement:"bottomLeft",
              overlayStyle:{
                maxWidth:"none"
              },
              children:(0,i.jsx)(ij,{
                href:m,
                "data-session-watched":l.includes(u),
                onClick:e=>{
                  e.preventDefault(),
                  U(u);
                  let t=Z(f,!1,!1,u,a||0);
                  L(e=>({
                    ...e,
                    activePlaylist:q.W_.INACTIVE
                  })),
                  eo(t),
                  (x||y)&&en(u,x||y)
                },
                children:h
              })
            },"ref-".concat(h,"-").concat(e.index))),
            s=e.index+e[0].length
          }
          return s<t.length&&n.push(t.substring(s)),
          (0,i.jsx)(i.Fragment,{
            children:n
          })
        }
        return t.includes("<br>")?t.split("<br>").map((e,t,n)=>t<n.length-1?[e,(0,i.jsx)("br",{},t)]:e):t
      },[n,Z,R,F,A,eo,M,L,V,en,x,y]),
      ed=o.useCallback(e=>"string"==typeof e?el(e):Array.isArray(e)?e.map(e=>ed(e)):o.isValidElement(e)?e.type===iw?e:o.cloneElement(e,{
        ...e.props,
        children:ed(e.props.children)
      }):e,[el]),
      ec=o.useCallback(e=>{
        let{
          children:t,
          node:n,
          ...s
        }=e,
        a=null==n?void 0:n.tagName,
        r=ed(t),
        l=o.createElement(a,s,r);
        return"table"===a?(0,i.jsx)(iS,{
          children:l
        }):l
      },[ed]),
      eu=o.useCallback(e=>{
        let{
          children:t,
          href:n,
          ...o
        }=e,
        s=ed(t);
        return n&&/uxcam\.com\/app\/sessions\/[a-f0-9]{24}/i.test(n)?(0,i.jsx)(i.Fragment,{
          children:s
        }):(0,i.jsx)("a",{
          ...o,
          href:n,
          target:"_blank",
          rel:"noopener noreferrer",
          onClick:n?()=>eo(n):void 0,
          children:s
        })
      },[ed,eo]),
      ep=o.useMemo(()=>nN({
        total_sessions:m||0,
        descriptions:f||[]
      }),[f,m]),
      eh=o.useMemo(()=>{
        if(n.isStoppedByUser||"user_stopped"===h){
          let e=u&&"null"!==u&&"User stopped"!==u?u:"Response stopped by user";
          return(0,i.jsxs)(im,{
            children:[(0,i.jsx)(tL.Z,{}),e]
          })
        }
        if(t)return(0,i.jsxs)(iC,{
          children:[(0,i.jsx)(ib,{
            children:(0,i.jsx)(eO.$j,{
              "data-size":"xs"
            })
          }),u]
        });
        if(w&&g&&("function_call"===u||"function_response"===u))return(0,i.jsx)(nG,{
          type:u,
          tool:g,
          timestamp:p
        });
        let e={
          h1:ec,
          h2:ec,
          h3:ec,
          h4:ec,
          h5:ec,
          h6:ec,
          b:ec,
          blockquote:ec,
          strong:ec,
          em:ec,
          a:eu,
          li:ec,
          p:ec,
          span:ec,
          table:ec,
          thead:ec,
          tbody:ec,
          tr:ec,
          th:ec,
          td:ec
        };
        return k&&_?(0,i.jsx)(tD.UG,{
          remarkPlugins:[tT.Z],
          components:e,
          children:_
        }):(0,i.jsxs)(i.Fragment,{
          children:[(0,i.jsx)(tD.UG,{
            remarkPlugins:[tT.Z],
            components:e,
            children:u
          }),w&&x&&C.appId&&!D&&(0,i.jsx)(n3,{
            message:n,
            appId:C.appId
          })]
        })
      },[t,u,ec,eu,w,g,p,x,C.appId,n,D,k,_]);
      return(0,i.jsxs)(i.Fragment,{
        children:[r&&(0,i.jsx)(tG,{
          dateRef:r,
          timestamp:p
        }),(0,i.jsx)(ig,{
          role:h,
          children:(0,i.jsxs)(iy,{
            role:h,
            children:[p&&D&&(0,i.jsx)(ix,{
              children:I
            }),eh,D&&!j&&!!(null==f?void 0:f.length)&&(0,i.jsx)(ih,{
              children:(0,i.jsx)(tW,{
                count:m||0,
                loading:!1,
                tooltip:ep,
                background:"rgba(255,255,255,0.7)"
              })
            }),!D&&!t&&!v&&d&&!!x&&"user_stopped"!==h&&(0,i.jsxs)(i_,{
              children:[(0,i.jsx)(N.Z,{
                title:Q?"Response copied!":"Copy response",
                children:(0,i.jsx)(ik,{
                  onClick:ei,
                  onMouseEnter:()=>X(!0),
                  onMouseLeave:()=>X(!1),
                  children:Q?(0,i.jsx)(tP,{}):Y?(0,i.jsx)(tz,{}):(0,i.jsx)(tM,{})
                })
              }),(0,i.jsx)(ip,{
                messageId:y||"",
                invocationId:x||"",
                sessionId:c||"",
                initialFeedback:b
              })]
            })]
          })
        })]
      })
    },
    iA=e=>(0,i.jsx)("svg",{
      width:24,
      height:24,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"m15.902 7.804-3.923 4.088-3.91 4.075M7.934 8.239l8.204 7.79",
        stroke:"#454B5D",
        strokeWidth:1.5,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    }),
    iZ=e=>(0,i.jsx)("svg",{
      width:24,
      height:24,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M10.587 7.758 6.344 12l4.243 4.242M6.343 12h11.314",
        stroke:"#454B5D",
        strokeWidth:1.5,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    });
    let iN=[{
      id:"dropoff",
      title:"Diagnose drop-off reasons",
      description:"Pinpoint behavioral causes of drop-offs and suggest optimizations.",
      icon:"dropoff",
      prompts:[{
        id:"dropoff-1",
        text:"What are the most common behavioral patterns of users who abandoned {the checkout}?",
        placeholder:"the checkout",
        secondaryPlaceholder:"any action"
      },{
        id:"dropoff-2",
        text:"Why are users dropping off at {OTP step}?",
        placeholder:"OTP step",
        secondaryPlaceholder:"any action"
      },{
        id:"dropoff-3",
        text:"Compare the behavior of users who converted vs those who dropped off at {the purchase flow}.",
        placeholder:"the purchase flow",
        secondaryPlaceholder:"any action"
      },{
        id:"dropoff-4",
        text:"Map and describe the most common paths users take before completing {registration}, and how it differs from the path of users who don't complete it.",
        placeholder:"registration",
        secondaryPlaceholder:"any action"
      }]
    },{
      id:"friction",
      title:"Surface user friction and frustration",
      description:"Detect frustration signals or errors & recommend fixes.",
      icon:"friction",
      prompts:[{
        id:"friction-1",
        text:"Identify key friction points on {the checkout}.",
        placeholder:"the checkout",
        secondaryPlaceholder:"any action"
      },{
        id:"friction-2",
        text:"Categorize and summarize sessions where users encountered errors during {onboarding}.",
        placeholder:"onboarding",
        secondaryPlaceholder:"any action"
      },{
        id:"friction-3",
        text:"What are the elements in {home screen} that users struggle the most with?",
        placeholder:"home screen",
        secondaryPlaceholder:"any action"
      },{
        id:"friction-4",
        text:"Identify the main user struggles that led to exiting the app."
      },{
        id:"friction-5",
        text:"Are users having trouble finding the {review section}? Show me examples.",
        placeholder:"review section",
        secondaryPlaceholder:"any action"
      }]
    },{
      id:"feature",
      title:"Validate new feature launch",
      description:"Assess usability of new releases to spot confusion and improvements.",
      icon:"feature",
      prompts:[{
        id:"feature-1",
        text:"How are users interacting with {the order summary}?",
        placeholder:"the order summary",
        secondaryPlaceholder:"any action"
      },{
        id:"feature-2",
        text:"Identify usability hurdles users face when using the {wishlist}.",
        placeholder:"wishlist",
        secondaryPlaceholder:"any action"
      },{
        id:"feature-3",
        text:"Map and describe the most common paths users take before interacting with {cart screen}.",
        placeholder:"cart screen",
        secondaryPlaceholder:"any action"
      },{
        id:"feature-4",
        text:"Compare the behavior of users who adopted {wishlists} vs those who ignored it. Identify friction points or bottlenecks and suggest improvements.",
        placeholder:"wishlists",
        secondaryPlaceholder:"any action"
      }]
    },{
      id:"discovery",
      title:"Discovery & opportunity search",
      description:"Spot workarounds and unexpected paths to reveal opportunities.",
      icon:"discovery",
      prompts:[{
        id:"discovery-1",
        text:"Find workarounds users are using to {compare items}.",
        placeholder:"compare items",
        secondaryPlaceholder:"any action"
      },{
        id:"discovery-2",
        text:"Identify and describe the most common paths users take when they deviate from the standard path of {purchase}.",
        placeholder:"purchase",
        secondaryPlaceholder:"any action"
      },{
        id:"discovery-3",
        text:"Identify any circular navigation loops where users keep returning to {home} without making progress.",
        placeholder:"home",
        secondaryPlaceholder:"any action"
      },{
        id:"discovery-4",
        text:"Summarize the typical user journey and recommend ideas to optimize it."
      },{
        id:"discovery-5",
        text:"Compare short vs long sessions and identify behavioral patterns for each."
      },{
        id:"discovery-6",
        text:"How are users navigating from {home} to {order confirmation}?",
        placeholder:"home",
        secondaryPlaceholder:"any action"
      }]
    }],
    iR=(e,t)=>{
      let n=e.match(new RegExp("\\{".concat(t,"\\}")));
      return n&&void 0!==n.index?n.index:e.length
    };
    var iD=e=>(0,i.jsxs)("svg",{
      width:24,
      height:24,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("circle",{
        cx:12,
        cy:12,
        r:9.135,
        transform:"rotate(-90 12 12)",
        fill:"#fff"
      }),(0,i.jsx)("path",{
        d:"M13.06 8.819 16.241 12l-3.182 3.182M16.242 12H7.757",
        stroke:"#454B5D",
        strokeWidth:1.125,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })]
    }),
    iT=e=>(0,i.jsxs)("svg",{
      width:32,
      height:32,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:32,
        height:32,
        rx:16,
        fill:"currentColor"
      }),(0,i.jsx)("path",{
        d:"M11.188 9.8c.818 0 1.48.663 1.48 1.48v11.105a.74.74 0 0 1-.74.74h-2.59a.74.74 0 0 1-.74-.74V11.28c0-.818.662-1.48 1.48-1.48h1.11Zm5.367 4.442c.818 0 1.48.663 1.48 1.48v6.663a.74.74 0 0 1-.74.74h-2.59a.74.74 0 0 1-.74-.74v-6.663c0-.817.662-1.48 1.48-1.48h1.11Zm5.367 2.22c.818 0 1.48.663 1.48 1.481v4.442a.74.74 0 0 1-.74.74h-2.59a.74.74 0 0 1-.74-.74v-4.442c0-.818.662-1.48 1.48-1.48h1.11Zm-3.67-7.37a.74.74 0 0 1 1.047 0l2.623 2.622v-.803a.74.74 0 0 1 1.48 0v2.59a.74.74 0 0 1-.74.74h-2.59a.74.74 0 1 1 0-1.48h.803l-2.622-2.622a.74.74 0 0 1 0-1.047Z",
        fill:"url(#icon-case-1_svg__a)"
      }),(0,i.jsx)("defs",{
        children:(0,i.jsxs)("linearGradient",{
          id:"icon-case-1_svg__a",
          x1:19.501,
          y1:16,
          x2:12.143,
          y2:21.684,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })
      })]
    }),
    iL=e=>(0,i.jsxs)("svg",{
      width:32,
      height:32,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:32,
        height:32,
        rx:16,
        fill:"currentColor"
      }),(0,i.jsx)("path",{
        d:"M18.816 12.864c.586 0 1.079.439 1.146 1.02l.428 3.707 3.137 1.162a2.182 2.182 0 0 1 1.376 2.503l-.572 2.67a.727.727 0 0 1-.711.574h-5.636a.728.728 0 0 1-.538-.238l-3.16-3.475a.364.364 0 0 1 .042-.53l.342-.273a.728.728 0 0 1 .597-.145l2.395.48v-6.302c0-.637.517-1.153 1.154-1.153Zm-8.79 4.363a1.454 1.454 0 1 1 0 2.91 1.454 1.454 0 0 1 0-2.91Zm0-4.363a1.455 1.455 0 1 1 0 2.909 1.455 1.455 0 0 1 0-2.91Zm4.364 0a1.455 1.455 0 1 1 0 2.909 1.455 1.455 0 0 1 0-2.91ZM10.026 8.5a1.455 1.455 0 1 1 0 2.909 1.455 1.455 0 0 1 0-2.909Zm4.364 0a1.455 1.455 0 1 1 0 2.909 1.455 1.455 0 0 1 0-2.909Zm4.363 0a1.455 1.455 0 1 1 0 2.91 1.455 1.455 0 0 1 0-2.91Z",
        fill:"url(#icon-case-2_svg__a)"
      }),(0,i.jsx)("defs",{
        children:(0,i.jsxs)("linearGradient",{
          id:"icon-case-2_svg__a",
          x1:20.635,
          y1:16.5,
          x2:12.405,
          y2:22.765,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })
      })]
    }),
    iM=e=>(0,i.jsxs)("svg",{
      width:32,
      height:32,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:32,
        height:32,
        rx:16,
        fill:"currentColor"
      }),(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M7.5 13.55c0 1.297.059 2.524.203 3.61.118.883.672 1.71 1.561 2.053.697.268 1.419.386 2.481.386 1.063 0 1.785-.118 2.482-.386.889-.343 1.443-1.17 1.56-2.053.145-1.086.204-2.313.204-3.61 0-1.298-.06-2.525-.204-3.611-.117-.883-.672-1.71-1.56-2.053-.697-.268-1.42-.386-2.482-.386-1.062 0-1.784.118-2.48.386-.89.343-1.444 1.17-1.562 2.053-.144 1.085-.203 2.313-.203 3.61Zm4.245-3.069c.543 0 1.026.348 1.198.863l.846 2.54a.768.768 0 0 1 .011.034l.478 1.434a.76.76 0 0 1-1.44.48l-.31-.932h-1.565l-.31.931a.759.759 0 0 1-1.44-.48l.477-1.433a.769.769 0 0 1 .011-.034l.847-2.54a1.262 1.262 0 0 1 1.197-.863Zm0 2.071-.276.83h.553l-.277-.83Zm4.29 7.285c.029.786.086 1.534.178 2.224.117.883.671 1.71 1.56 2.053.698.268 1.42.386 2.482.386 1.062 0 1.784-.118 2.481-.386.889-.343 1.443-1.17 1.56-2.053.145-1.086.204-2.313.204-3.61 0-1.298-.059-2.525-.203-3.611-.118-.883-.672-1.71-1.561-2.053-.697-.268-1.419-.386-2.481-.386-1.063 0-1.784.118-2.482.386a2.368 2.368 0 0 0-.27.124c.004.212.005.425.005.638 0 1.338-.06 2.637-.216 3.811a4.173 4.173 0 0 1-1.258 2.477Zm3.247-4.269c-.419 0-.759.34-.759.76v4.248c0 .42.34.76.76.76h1.682a1.91 1.91 0 0 0 1.366-3.245 1.733 1.733 0 0 0-1.543-2.522h-1.506Zm.76 3.466h.923a.392.392 0 0 1 0 .784h-.924v-.784Zm.764-1.518a.215.215 0 0 0-.019-.43h-.746v.43h.765Z",
        fill:"url(#icon-case-3_svg__a)"
      }),(0,i.jsx)("defs",{
        children:(0,i.jsxs)("linearGradient",{
          id:"icon-case-3_svg__a",
          x1:20.02,
          y1:16,
          x2:11.332,
          y2:22.46,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })
      })]
    }),
    iz=e=>(0,i.jsxs)("svg",{
      width:32,
      height:32,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:32,
        height:32,
        rx:16,
        fill:"currentColor"
      }),(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M17.607 8.5C16.72 8.5 16 9.22 16 10.107v3.214c0 .1.009.197.026.291a5.335 5.335 0 0 1 2.385-.558c1.375 0 2.63.518 3.579 1.37.272-.287.439-.675.439-1.103v-3.214c0-.887-.72-1.607-1.608-1.607h-3.214ZM13.321 16c.1 0 .197.009.291.026a5.335 5.335 0 0 0-.559 2.385c0 1.376.52 2.63 1.372 3.58a1.602 1.602 0 0 1-1.104.438h-3.214c-.887 0-1.607-.72-1.607-1.607v-3.215c0-.887.72-1.607 1.607-1.607h3.214ZM8.5 10.107c0-.887.72-1.607 1.607-1.607h3.214c.888 0 1.608.72 1.608 1.607v3.214c0 .888-.72 1.608-1.608 1.608h-3.214c-.887 0-1.607-.72-1.607-1.608v-3.214ZM18.41 16a2.41 2.41 0 1 0 0 4.821 2.41 2.41 0 0 0 0-4.821Zm-4.017 2.41a4.018 4.018 0 1 1 7.37 2.216l1.502 1.502a.803.803 0 1 1-1.137 1.137l-1.502-1.502a4.018 4.018 0 0 1-6.234-3.352Z",
        fill:"url(#icon-case-4_svg__a)"
      }),(0,i.jsx)("defs",{
        children:(0,i.jsxs)("linearGradient",{
          id:"icon-case-4_svg__a",
          x1:19.547,
          y1:16,
          x2:11.882,
          y2:21.7,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })
      })]
    });
    let iP=e=>{
      let{
        type:t
      }=e;
      switch(t){
        case"dropoff":return(0,i.jsx)(iT,{});
        case"friction":return(0,i.jsx)(iL,{});
        case"feature":return(0,i.jsx)(iM,{});
        case"discovery":return(0,i.jsx)(iz,{});
        default:return null
      }
    },
    iO=T.default.button.withConfig({
      componentId:"sc-956e0a03-0"
    })(["display:flex;align-items:center;gap:2px;padding:8px;background:#EFF5FFB2;border-radius:4px;border:none;cursor:pointer;width:100%;text-align:left;transition:background-color 0.15s ease;&:hover{background:#DFEAFF99;}"]),
    iU=T.default.div.withConfig({
      componentId:"sc-956e0a03-1"
    })(["display:flex;flex:1;gap:10px;align-items:flex-start;min-width:0;"]),
    iB=T.default.div.withConfig({
      componentId:"sc-956e0a03-2"
    })(["flex-shrink:0;display:flex;align-items:center;justify-content:center;svg rect{fill:white;}"]),
    iV=T.default.div.withConfig({
      componentId:"sc-956e0a03-3"
    })(["display:flex;flex-direction:column;gap:1px;flex:1;min-width:0;"]),
    iW=T.default.span.withConfig({
      componentId:"sc-956e0a03-4"
    })(["font-family:'Roboto',sans-serif;font-weight:500;font-size:12px;line-height:20px;color:#161E35;"]),
    iH=T.default.span.withConfig({
      componentId:"sc-956e0a03-5"
    })(["font-family:'Roboto',sans-serif;font-weight:400;font-size:12px;line-height:20px;color:#737886;"]),
    iq=T.default.div.withConfig({
      componentId:"sc-956e0a03-6"
    })(["flex-shrink:0;display:flex;align-items:center;justify-content:center;width:24px;height:24px;"]);
    var iQ=e=>{
      let{
        useCase:t,
        onClick:n
      }=e;
      return(0,i.jsxs)(iO,{
        onClick:()=>{
          n(t)
        },
        children:[(0,i.jsxs)(iU,{
          children:[(0,i.jsx)(iB,{
            children:(0,i.jsx)(iP,{
              type:t.icon
            })
          }),(0,i.jsxs)(iV,{
            children:[(0,i.jsx)(iW,{
              children:t.title
            }),(0,i.jsx)(iH,{
              children:t.description
            })]
          })]
        }),(0,i.jsx)(iq,{
          children:(0,i.jsx)(iD,{})
        })]
      })
    },
    iK=e=>(0,i.jsxs)("svg",{
      width:18,
      height:18,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:18,
        height:18,
        rx:9,
        fill:"#fff"
      }),(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M11.764 12.092a.657.657 0 1 1-.929-.928l.52-.521H5.718a1.314 1.314 0 0 1-1.314-1.314V6.374a.657.657 0 0 1 1.314 0v2.955h5.639l-.52-.52a.657.657 0 1 1 .928-.93l1.642 1.642.004.005c.116.118.188.28.188.458v.004a.653.653 0 0 1-.19.46",
        fill:"#000"
      })]
    });
    let iG=T.default.button.withConfig({
      componentId:"sc-33cb3915-0"
    })(["display:flex;align-items:flex-start;gap:2px;padding:8px;background:#EFF5FFB2;border-radius:4px;border:none;cursor:pointer;width:100%;text-align:left;transition:background-color 0.15s ease;&:hover{background:#DFEAFF99;}"]),
    i$=T.default.div.withConfig({
      componentId:"sc-33cb3915-1"
    })(["flex-shrink:0;display:flex;align-items:center;justify-content:center;width:24px;height:24px;"]),
    iY=T.default.div.withConfig({
      componentId:"sc-33cb3915-2"
    })(["display:inline;"]),
    iX=T.default.span.withConfig({
      componentId:"sc-33cb3915-3"
    })(["font-family:'Roboto',sans-serif;font-weight:400;font-size:12px;line-height:20px;color:#454B5D;"]),
    iJ=T.default.span.withConfig({
      componentId:"sc-33cb3915-4"
    })(["display:inline-flex;align-items:center;justify-content:center;padding:2px 3px;background:",";border-radius:2px;font-family:'Roboto',sans-serif;font-weight:400;font-size:12px;line-height:20px;color:",";"],e0.r.colors.primary100.toString(),e0.r.colors.primary700.toString());
    var i0=e=>{
      let{
        prompt:t,
        onClick:n
      }=e;
      return(0,i.jsxs)(iG,{
        onClick:()=>{
          n(t)
        },
        children:[(0,i.jsx)(i$,{
          children:(0,i.jsx)(iK,{})
        }),(0,i.jsx)(iY,{
          children:(()=>{
            let{
              text:e
            }=t,
            n=/\{([^}]+)\}/g,
            o=[],
            s=0,
            a=n.exec(e),
            r=0;
            for(;null!==a;)a.index>s&&(o.push((0,i.jsx)(iX,{
              children:e.slice(s,a.index)
            },"text-".concat(r))),r+=1),
            o.push((0,i.jsx)(iJ,{
              children:a[1]
            },"placeholder-".concat(r))),
            r+=1,
            s=n.lastIndex,
            a=n.exec(e);
            return s<e.length&&o.push((0,i.jsx)(iX,{
              children:e.slice(s)
            },"text-".concat(r))),
            o.length>0?o:(0,i.jsx)(iX,{
              children:e
            })
          })()
        })]
      })
    };
    let i1=(0,T.keyframes)(["from{transform:translateX(100%);opacity:0;}to{transform:translateX(0);opacity:1;}"]),
    i2=(0,T.keyframes)(["from{transform:translateX(0);opacity:1;}to{transform:translateX(-100%);opacity:0;}"]),
    i5=(0,T.keyframes)(["from{transform:translateX(-100%);opacity:0;}to{transform:translateX(0);opacity:1;}"]),
    i4=(0,T.keyframes)(["from{transform:translateX(0);opacity:1;}to{transform:translateX(100%);opacity:0;}"]),
    i6=(0,T.keyframes)(["from{opacity:0;}to{opacity:1;}"]),
    i3=T.default.div.withConfig({
      componentId:"sc-79b0a372-0"
    })(["display:flex;flex-direction:column;width:100%;height:100%;background:#fff;position:relative;overflow:hidden;"]),
    i8=T.default.div.withConfig({
      componentId:"sc-79b0a372-1"
    })(["display:flex;flex-direction:column;flex:1;overflow:hidden;position:relative;"]),
    i7=T.default.div.withConfig({
      componentId:"sc-79b0a372-2"
    })(["display:flex;flex-direction:column;width:100%;height:100%;position:absolute;top:0;left:0;padding:12px 16px;overflow-y:auto;",""],e=>{
      let{
        $isExiting:t,
        $isEntering:n,
        $exitDirection:i,
        $enterDirection:o
      }=e;
      return t?"left"===i?(0,T.css)(["animation:"," 0.25s ease-out forwards;"],i2):(0,T.css)(["animation:"," 0.25s ease-out forwards;"],i4):n?"left"===o?(0,T.css)(["animation:"," 0.25s ease-out forwards;"],i5):(0,T.css)(["animation:"," 0.25s ease-out forwards;"],i1):""
    }),
    i9=T.default.div.withConfig({
      componentId:"sc-79b0a372-3"
    })(["display:flex;flex-direction:column;align-items:center;gap:20px;margin-bottom:20px;padding-top:12px;flex-shrink:0;animation:"," 0.3s ease-out;position:relative;"],i6),
    oe=T.default.div.withConfig({
      componentId:"sc-79b0a372-4"
    })(["display:flex;flex-direction:column;align-items:center;gap:7px;text-align:center;width:100%;"]),
    ot=T.default.h2.withConfig({
      componentId:"sc-79b0a372-5"
    })(["font-family:'Roboto',sans-serif;font-weight:600;font-size:18px;line-height:20px;background:linear-gradient(185deg,#EE5EDD 32%,#49C5FF 91%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin:0;padding:0;"]),
    on=T.default.p.withConfig({
      componentId:"sc-79b0a372-6"
    })(["font-family:'Roboto',sans-serif;font-weight:400;font-size:12px;line-height:20px;color:#454B5D;margin:0;padding:0;"]),
    oi=T.default.div.withConfig({
      componentId:"sc-79b0a372-7"
    })(["display:flex;flex-direction:column;gap:16px;width:100%;"]),
    oo=T.default.div.withConfig({
      componentId:"sc-79b0a372-8"
    })(["display:flex;flex-direction:column;align-items:center;gap:16px;margin-bottom:16px;"]),
    os=T.default.button.withConfig({
      componentId:"sc-79b0a372-9"
    })(["position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:none;background:transparent;cursor:pointer;border-radius:2px;transition:background-color 0.15s ease;&:hover{background:rgba(0,0,0,0.05);}"]),
    oa=T.default.div.withConfig({
      componentId:"sc-79b0a372-10"
    })(["display:flex;flex-direction:column;align-items:center;gap:16px;width:100%;position:relative;"]),
    or=T.default.div.withConfig({
      componentId:"sc-79b0a372-11"
    })(["display:flex;align-items:center;justify-content:center;width:40px;height:40px;margin-top:36px;svg{width:40px;height:40px;rect{fill:#DFEAFF80;}}"]),
    ol=T.default.div.withConfig({
      componentId:"sc-79b0a372-12"
    })(["display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;"]),
    od=T.default.h3.withConfig({
      componentId:"sc-79b0a372-13"
    })(["font-family:'Roboto',sans-serif;font-weight:500;font-size:14px;line-height:20px;color:#161E35;margin:0;padding:0;"]),
    oc=T.default.p.withConfig({
      componentId:"sc-79b0a372-14"
    })(["font-family:'Roboto',sans-serif;font-weight:400;font-size:12px;line-height:20px;color:#454B5D;margin:0;padding:0;"]),
    ou=T.default.div.withConfig({
      componentId:"sc-79b0a372-15"
    })(["display:flex;flex-direction:column;gap:16px;width:100%;"]),
    op=T.default.button.withConfig({
      componentId:"sc-79b0a372-16"
    })(["position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:none;background:transparent;cursor:pointer;border-radius:2px;transition:background-color 0.15s ease;&:hover{background:rgba(0,0,0,0.05);}"]),
    oh={
      dropoff:"Drop off",
      friction:"Frustration",
      feature:"Feature",
      discovery:"Discovery"
    };
    var of=e=>{
      let{
        onPromptSelect:t,
        isActiveUser:n=!1,
        title:a="Let Tara do the heavy lifting",
        subtitle:r="Ask any question or get started with these suggestions",
        handleClose:l,
        resetNavigation:d=!1
      }=e,
      c=(0,s.I0)(),
      [u,p]=(0,o.useState)("useCases"),
      [h,f]=(0,o.useState)(null),
      [m,g]=(0,o.useState)(!1),
      [x,v]=(0,o.useState)(null),
      [y,b]=(0,o.useState)(null);
      (0,o.useEffect)(()=>{
        d&&(p("useCases"),f(null),g(!1),v(null),b(null))
      },[d]);
      let w=(0,o.useCallback)(e=>{
        m||(c((0,et.CW)(null,{
          eventName:"wa_tara_library_1",
          track_type:"event",
          eventProperty:{
            category:oh[e.id]||e.id,
            source:n?"existing chat":"new chat"
          }
        })),g(!0),v("useCases"),b("prompts"),f(e),setTimeout(()=>{
          p("prompts"),
          v(null),
          b(null),
          g(!1)
        },250))
      },[m,c,n]),
      j=(0,o.useCallback)(()=>{
        m||(g(!0),v("prompts"),b("useCases"),setTimeout(()=>{
          p("useCases"),
          f(null),
          v(null),
          b(null),
          g(!1)
        },250))
      },[m]),
      k=(0,o.useCallback)(e=>{
        var i;
        let o;
        e.placeholder&&(o=iR(e.text,e.placeholder)),
        c((0,et.CW)(null,{
          eventName:"wa_tara_library_2",
          track_type:"event",
          eventProperty:{
            category:oh[null!==(i=null==h?void 0:h.id)&&void 0!==i?i:""]||(null==h?void 0:h.id),
            source:n?"existing chat":"new chat",
            prompt:e.text
          }
        })),
        t(e.text,o,e.secondaryPlaceholder)
      },[t,c,n,h]);
      return(0,i.jsx)(i3,{
        children:(0,i.jsxs)(i8,{
          children:[("useCases"===u||"useCases"===x||"useCases"===y)&&(0,i.jsxs)(i7,{
            $isExiting:"useCases"===x,
            $isEntering:"useCases"===y,
            $exitDirection:"left",
            $enterDirection:"left",
            children:[(0,i.jsxs)(i9,{
              children:[n&&(0,i.jsx)(op,{
                onClick:l,
                type:"button",
                "aria-label":"Close",
                children:(0,i.jsx)(iA,{})
              }),(0,i.jsxs)(oe,{
                children:[!n&&(0,i.jsx)(ot,{
                  children:a
                }),(0,i.jsx)(on,{
                  children:r
                })]
              })]
            }),(0,i.jsx)(oi,{
              children:iN.map(e=>(0,i.jsx)(iQ,{
                useCase:e,
                onClick:w
              },e.id))
            })]
          },"useCases"),("prompts"===u||"prompts"===x||"prompts"===y)&&(h?(0,i.jsxs)(i7,{
            $isExiting:"prompts"===x,
            $isEntering:"prompts"===y,
            $exitDirection:"right",
            $enterDirection:"right",
            children:[(0,i.jsx)(oo,{
              children:(0,i.jsxs)(oa,{
                children:[(0,i.jsx)(os,{
                  onClick:j,
                  children:(0,i.jsx)(iZ,{})
                }),(0,i.jsx)(or,{
                  children:(0,i.jsx)(iP,{
                    type:h.icon
                  })
                }),(0,i.jsxs)(ol,{
                  children:[(0,i.jsx)(od,{
                    children:h.title
                  }),(0,i.jsx)(oc,{
                    children:h.description
                  })]
                })]
              })
            }),(0,i.jsx)(ou,{
              children:h.prompts.map(e=>(0,i.jsx)(i0,{
                prompt:e,
                onClick:k
              },e.id))
            })]
          },"prompts"):null)]
        })
      })
    };
    let om=T.default.div.withConfig({
      componentId:"sc-9a36969d-0"
    })(["display:flex;flex-direction:column;height:100%;width:100%;background-color:#fff;justify-content:center;align-items:center;padding:0;"]);
    var og=e=>{
      let{
        setInput:t,
        onPromptSelect:n
      }=e,
      s=(0,o.useCallback)((e,i,o)=>{
        n?n(e,i,o):t(e)
      },[t,n]);
      return(0,i.jsx)(om,{
        children:(0,i.jsx)(of,{
          onPromptSelect:s
        })
      })
    };
    let ox=(0,T.keyframes)(["100%{transform:rotate(360deg);}"]),
    ov=(0,T.keyframes)(["100%{transform:rotate(-360deg);}"]),
    oy=T.default.svg.withConfig({
      componentId:"sc-10fdc628-0"
    })(["width:16px;height:16px;display:block;.outer{transform-origin:50% 50%;animation:"," 1.5s linear infinite;}.inner{transform-origin:50% 50%;animation:"," 1.7s linear infinite;}"],ox,ov),
    ob=()=>(0,i.jsxs)(oy,{
      viewBox:"0 0 16 16",
      fill:"none",
      children:[(0,i.jsx)("g",{
        className:"outer",
        children:(0,i.jsx)("path",{
          d:"M8 1a7 7 0 0 1 0 14",
          stroke:"url(#a)",
          strokeWidth:"2",
          strokeLinecap:"round"
        })
      }),(0,i.jsx)("g",{
        className:"inner",
        children:(0,i.jsx)("path",{
          d:"M8 4.667a3.333 3.333 0 1 1 0 6.666",
          stroke:"url(#b)",
          strokeOpacity:"0.4",
          strokeWidth:"2",
          strokeLinecap:"round"
        })
      }),(0,i.jsxs)("defs",{
        children:[(0,i.jsxs)("linearGradient",{
          id:"a",
          x1:"8",
          y1:"4.216",
          x2:"14.08",
          y2:"12.393",
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:"0.26",
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:"1",
            stopColor:"#49C5FF"
          })]
        }),(0,i.jsxs)("linearGradient",{
          id:"b",
          x1:"3.667",
          y1:"8",
          x2:"12.333",
          y2:"8",
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            stopColor:"#4985F0"
          }),(0,i.jsx)("stop",{
            offset:"1",
            stopColor:"#FF73A5"
          })]
        })]
      })]
    }),
    ow=T.default.div.withConfig({
      componentId:"sc-10fdc628-1"
    })(["padding:0 20px 16px 20px;display:flex;font-size:13px;line-height:24px;font-weight:400;color:#161E35;align-items:center;gap:10px;"]);
    var oj=()=>(0,i.jsxs)(ow,{
      children:[(0,i.jsx)(ob,{}),"Digging through your sessions"]
    }),
    ok=JSON.parse('{"nm":"brain","ddd":0,"h":24,"w":24,"meta":{"g":"LottieFiles Figma v106"},"layers":[{"ty":0,"nm":"Eye--Streamline-Solar-Ar","sr":1,"st":0,"op":169.18,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":true,"td":1,"ao":0,"ks":{"a":{"a":0,"k":[12.52,12.52]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12.4,11.89]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"masksProperties":[{"nm":"","inv":false,"mode":"a","x":{"a":0,"k":0},"o":{"a":0,"k":100},"pt":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.04,0],[25.04,25.04],[0,25.04],[0,0]]}],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.04,0],[25.04,25.04],[0,25.04],[0,0]]}],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.04,0],[25.04,25.04],[0,25.04],[0,0]]}],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.04,0],[25.04,25.04],[0,25.04],[0,0]]}],"t":108},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.04,0],[25.04,25.04],[0,25.04],[0,0]]}],"t":138},{"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.04,0],[25.04,25.04],[0,25.04],[0,0]]}],"t":168}]}}],"w":25.0417423248291,"h":25.0417423248291,"refId":"1","ind":1},{"ty":4,"nm":"Rectangle 3974","sr":1,"st":0,"op":169.18,"ip":0,"hd":false,"ddd":0,"bm":0,"tt":1,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[13.53,45.78]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,45.79],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,12],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,-21.78],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,-21.78],"t":108},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,12],"t":138},{"s":[13.42,45.79],"t":168}]},"r":{"a":0,"k":-180},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[27.07,0],[27.07,91.57],[0,91.57],[0,0]]}}},{"ty":"gf","bm":0,"hd":false,"nm":"","e":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":108},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":138},{"s":[29.5674991607666,88.143798828125],"t":168}]},"g":{"p":6,"k":{"a":0,"k":[0.013965383172035217,0.9333725490196078,0.3686666666666667,0.8667058823529411,0.2070484459400177,0.2863137254901961,0.7725882352941176,1,0.36134177446365356,0.678470588235294,0.678470588235294,0.678470588235294,0.5655784606933594,0.9176862745098039,0.9176862745098039,0.9176862745098039,0.7476295232772827,0.9333725490196078,0.3686666666666667,0.8667058823529411,1,0.2863137254901961,0.7725882352941176,1]}},"t":1,"a":{"a":0,"k":0},"h":{"a":0,"k":0},"s":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":108},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":138},{"s":[6.52977991104126,-1.1696799993515015],"t":168}]},"r":1,"o":{"a":0,"k":100}}],"ind":2}],"v":"5.7.0","fr":60,"op":168.18,"ip":0,"assets":[{"nm":"[Asset] Eye--Streamline-Solar-Ar","id":"1","layers":[{"ty":0,"nm":"brain 1","sr":1,"st":0,"op":169.18,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":true,"ao":0,"ks":{"a":{"a":0,"k":[12,12]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12.12,12.63]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"masksProperties":[{"nm":"","inv":false,"mode":"a","x":{"a":0,"k":0},"o":{"a":0,"k":100},"pt":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":108},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":138},{"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":168}]}}],"w":24,"h":24,"refId":"2","ind":1},{"ty":4,"nm":"Eye--Streamline-Solar-Ar Bg","sr":1,"st":0,"op":169.18,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[12.52,12.52]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12.52,12.52]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.04,0],[25.04,25.04],[0,25.04],[0,0]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":0}}],"ind":2}]},{"nm":"[Asset] brain 1","id":"2","layers":[{"ty":4,"nm":"Vector","sr":1,"st":0,"op":169.18,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[6.15,5.64]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,12]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[1.43,0],[0.47,-0.66],[0.88,0],[0.01,-1.42],[0,-1.25],[-0.49,-0.63],[0,0],[-1.6,0],[-0.53,0.79],[-1.01,0],[0,1.6],[0,0],[0,0.97],[0.86,0.62]],"o":[[-0.01,-1.42],[-0.88,0],[-0.48,-0.66],[-1.42,0],[-0.86,0.62],[0,0.97],[0,0],[0,1.6],[1.02,0],[0.53,0.79],[1.6,0],[0,0],[0.48,-0.63],[0,-1.25],[0,0]],"v":[[10.88,2.57],[8.28,0],[6.16,1.1],[4.03,0],[1.44,2.57],[0,5.67],[0.82,8.33],[0.82,8.37],[3.72,11.28],[6.16,9.97],[8.59,11.28],[11.5,8.37],[11.5,8.33],[12.31,5.67],[10.88,2.57]]}}},{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0.98,-0.11],[-0.03,-0.26],[-0.23,0],[0,0],[-0.33,0.3],[0,0],[1.09,0],[0,1.09],[-0.01,0.05],[0,0],[-0.18,0.15],[0.16,0.2],[0.2,-0.16],[0.13,-0.22],[0,0.47],[-0.44,0.49],[-0.4,-0.1],[-0.03,0],[-0.05,0.22],[0.25,0.06],[0.09,0.73],[0,0.06],[-0.91,0],[0,-0.91],[0,0]],"o":[[0,0],[-0.03,0.39],[-0.26,0.03],[0.02,0.24],[0,0],[0.54,-0.06],[0,0],[0,1.09],[-1.08,0],[0,-0.05],[0,0],[0.09,-0.37],[0.21,-0.16],[-0.16,-0.21],[-0.18,0.14],[-0.16,-0.43],[0,-0.78],[0.31,0.63],[0.03,0],[0.22,0],[0.06,-0.25],[-0.11,-0.02],[0,-0.06],[0,-0.91],[0.92,0],[0,0],[0,0]],"v":[[5.69,4.59],[5.69,4.61],[4.29,6.19],[3.88,6.71],[4.34,7.13],[4.4,7.13],[5.69,6.54],[5.69,8.37],[3.72,10.34],[1.76,8.37],[1.77,8.21],[1.77,8.18],[2.24,7.26],[2.32,6.61],[1.66,6.53],[1.2,7.08],[0.94,5.67],[1.67,3.62],[2.94,4.73],[3.04,4.74],[3.5,4.37],[3.15,3.81],[2.38,2.77],[2.37,2.59],[4.03,0.93],[5.69,2.59],[5.69,4.59]]}}},{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.17,0.14],[0.16,-0.21],[-0.2,-0.17],[-0.08,-0.38],[0,0],[0,-0.05],[1.09,0],[0,1.09],[0,0],[-0.54,-0.06],[0,0],[-0.03,0.24],[0.26,0.03],[0.05,0.41],[0,0],[-0.91,0],[0,-0.91],[0.01,-0.06],[0,0],[0.1,-0.02],[-0.06,-0.25],[-0.22,0],[-0.03,0],[-0.32,0.63],[0,-0.77],[0.16,-0.43]],"o":[[-0.12,-0.22],[-0.21,-0.16],[-0.16,0.2],[0.19,0.14],[0,0],[0.01,0.05],[0,1.09],[-1.08,0],[0,0],[0.33,0.3],[0,0],[0.24,0],[0.03,-0.26],[-0.94,-0.11],[0,0],[0,-0.91],[0.92,0],[0,0.06],[0,0],[-0.11,0.69],[-0.25,0.06],[0.05,0.22],[0.03,0],[0.4,-0.1],[0.44,0.5],[0,0.47],[0,0]],"v":[[11.11,7.08],[10.66,6.53],[10,6.61],[10.07,7.27],[10.55,8.2],[10.55,8.21],[10.56,8.37],[8.59,10.34],[6.63,8.37],[6.63,6.54],[7.92,7.13],[7.97,7.13],[8.44,6.71],[8.02,6.19],[6.63,4.65],[6.63,2.59],[8.28,0.93],[9.94,2.59],[9.93,2.77],[9.93,2.82],[9.17,3.81],[8.82,4.37],[9.28,4.74],[9.38,4.73],[10.65,3.63],[11.37,5.67],[11.11,7.08]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[0.451,0.4706,0.5255]},"r":1,"o":{"a":0,"k":100}}],"ind":1},{"ty":4,"nm":"brain 1 Bg","sr":1,"st":0,"op":169.18,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[12,12]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,12]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":0}}],"ind":2}]}]}'),
    o_=JSON.parse('{"nm":"search","ddd":0,"h":24,"w":24,"meta":{"g":"LottieFiles Figma v106"},"layers":[{"ty":0,"nm":"Frame","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":true,"td":1,"ao":0,"ks":{"a":{"a":0,"k":[12,12]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,12]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"masksProperties":[{"nm":"","inv":false,"mode":"a","x":{"a":0,"k":0},"o":{"a":0,"k":100},"pt":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":90},{"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":120}]}}],"w":24,"h":24,"refId":"1","ind":1},{"ty":4,"nm":"Rectangle 3974","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"tt":1,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[13.53,45.78]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,45.78],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,12],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,-21.78],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,12],"t":90},{"s":[13.42,45.78],"t":120}]},"r":{"a":0,"k":-180},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[27.07,0],[27.07,91.57],[0,91.57],[0,0]]}}},{"ty":"gf","bm":0,"hd":false,"nm":"","e":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":90},{"s":[29.5674991607666,88.143798828125],"t":120}]},"g":{"p":6,"k":{"a":0,"k":[0.013965383172035217,0.9333725490196078,0.3686666666666667,0.8667058823529411,0.2070484459400177,0.2863137254901961,0.7725882352941176,1,0.36134177446365356,0.678470588235294,0.678470588235294,0.678470588235294,0.5655784606933594,0.9176862745098039,0.9176862745098039,0.9176862745098039,0.7476295232772827,0.9333725490196078,0.3686666666666667,0.8667058823529411,1,0.2863137254901961,0.7725882352941176,1]}},"t":1,"a":{"a":0,"k":0},"h":{"a":0,"k":0},"s":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":90},{"s":[6.52977991104126,-1.1696799993515015],"t":120}]},"r":1,"o":{"a":0,"k":100}}],"ind":2}],"v":"5.7.0","fr":60,"op":120.24,"ip":0,"assets":[{"nm":"[Asset] Frame","id":"1","layers":[{"ty":0,"nm":"search 1","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":true,"ao":0,"ks":{"a":{"a":0,"k":[12,12]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,12]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"masksProperties":[{"nm":"","inv":false,"mode":"a","x":{"a":0,"k":0},"o":{"a":0,"k":100},"pt":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":90},{"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":120}]}}],"w":24,"h":24,"refId":"2","ind":1},{"ty":4,"nm":"Frame Bg","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[12,12]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,12]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":0}}],"ind":2}]},{"nm":"[Asset] search 1","id":"2","layers":[{"ty":4,"nm":"Vector","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[5.38,5.38]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,12]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,-2.71],[0.67,-0.84],[0,0],[0.21,-0.21],[0.21,0.21],[0,0],[1.16,0],[0,2.71],[-2.71,0]],"o":[[2.71,0],[0,1.16],[0,0],[0.21,0.21],[-0.21,0.21],[0,0],[-0.84,0.67],[-2.71,0],[0,-2.71],[0,0]],"v":[[4.9,0],[9.8,4.9],[8.73,7.96],[10.59,9.82],[10.59,10.59],[9.82,10.59],[7.96,8.73],[4.9,9.8],[0,4.9],[4.9,0]]}}},{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,-2.1],[-2.1,0],[0,2.1],[2.1,0]],"o":[[-2.1,0],[0,2.1],[2.1,0],[0,-2.1],[0,0]],"v":[[4.9,1.09],[1.09,4.9],[4.9,8.71],[8.71,4.9],[4.9,1.09]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[0,0,0]},"r":1,"o":{"a":0,"k":100}}],"ind":1},{"ty":4,"nm":"search 1 Bg","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[12,12]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,12]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":0}}],"ind":2}]}]}'),
    oC=JSON.parse('{"nm":"filter","ddd":0,"h":24,"w":24,"meta":{"g":"LottieFiles Figma v106"},"layers":[{"ty":0,"nm":"Eye--Streamline-Solar-Ar","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":true,"td":1,"ao":0,"ks":{"a":{"a":0,"k":[12.52,12.52]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12.4,11.89]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"masksProperties":[{"nm":"","inv":false,"mode":"a","x":{"a":0,"k":0},"o":{"a":0,"k":100},"pt":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.04,0],[25.04,25.04],[0,25.04],[0,0]]}],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.04,0],[25.04,25.04],[0,25.04],[0,0]]}],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.04,0],[25.04,25.04],[0,25.04],[0,0]]}],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.04,0],[25.04,25.04],[0,25.04],[0,0]]}],"t":90},{"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.04,0],[25.04,25.04],[0,25.04],[0,0]]}],"t":120}]}}],"w":25.0417423248291,"h":25.0417423248291,"refId":"1","ind":1},{"ty":4,"nm":"Rectangle 3974","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"tt":1,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[13.53,45.78]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,45.79],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,12],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,-21.78],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,12],"t":90},{"s":[13.42,45.79],"t":120}]},"r":{"a":0,"k":-180},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[27.07,0],[27.07,91.57],[0,91.57],[0,0]]}}},{"ty":"gf","bm":0,"hd":false,"nm":"","e":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":90},{"s":[29.5674991607666,88.143798828125],"t":120}]},"g":{"p":6,"k":{"a":0,"k":[0.013965383172035217,0.9333725490196078,0.3686666666666667,0.8667058823529411,0.2070484459400177,0.2863137254901961,0.7725882352941176,1,0.36134177446365356,0.678470588235294,0.678470588235294,0.678470588235294,0.5655784606933594,0.9176862745098039,0.9176862745098039,0.9176862745098039,0.7476295232772827,0.9333725490196078,0.3686666666666667,0.8667058823529411,1,0.2863137254901961,0.7725882352941176,1]}},"t":1,"a":{"a":0,"k":0},"h":{"a":0,"k":0},"s":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":90},{"s":[6.52977991104126,-1.1696799993515015],"t":120}]},"r":1,"o":{"a":0,"k":100}}],"ind":2}],"v":"5.7.0","fr":60,"op":120.24,"ip":0,"assets":[{"nm":"[Asset] Eye--Streamline-Solar-Ar","id":"1","layers":[{"ty":0,"nm":"filter 1","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":true,"ao":0,"ks":{"a":{"a":0,"k":[12,12]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12.12,12.63]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"masksProperties":[{"nm":"","inv":false,"mode":"a","x":{"a":0,"k":0},"o":{"a":0,"k":100},"pt":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":90},{"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":120}]}}],"w":24,"h":24,"refId":"2","ind":1},{"ty":4,"nm":"Eye--Streamline-Solar-Ar Bg","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[12.52,12.52]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12.52,12.52]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.04,0],[25.04,25.04],[0,25.04],[0,0]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":0}}],"ind":2}]},{"nm":"[Asset] filter 1","id":"2","layers":[{"ty":4,"nm":"Vector","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[2.84,0.68]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,15.68]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0.37],[-0.37,0],[0,0],[0,-0.37],[0.38,0]],"o":[[0,0],[-0.37,0],[0,-0.37],[0,0],[0.38,0],[0,0.37],[0,0]],"v":[[5,1.36],[0.68,1.36],[0,0.68],[0.68,0],[5,0],[5.68,0.68],[5,1.36]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[0,0,0]},"r":1,"o":{"a":0,"k":100}}],"ind":1},{"ty":4,"nm":"Vector","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[3.88,0.68]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,12]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0.37],[-0.37,0],[0,0],[0,-0.37],[0.38,0]],"o":[[0,0],[-0.37,0],[0,-0.37],[0,0],[0.38,0],[0,0.37],[0,0]],"v":[[7.08,1.36],[0.68,1.36],[0,0.68],[0.68,0],[7.08,0],[7.76,0.68],[7.08,1.36]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[0,0,0]},"r":1,"o":{"a":0,"k":100}}],"ind":2},{"ty":4,"nm":"Vector","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[5.93,0.68]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,8.32]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0.37],[-0.37,0],[0,0],[0,-0.37],[0.38,0]],"o":[[0,0],[-0.37,0],[0,-0.37],[0,0],[0.38,0],[0,0.37],[0,0]],"v":[[11.17,1.36],[0.68,1.36],[0,0.68],[0.68,0],[11.17,0],[11.85,0.68],[11.17,1.36]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[0,0,0]},"r":1,"o":{"a":0,"k":100}}],"ind":3},{"ty":4,"nm":"filter 1 Bg","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[12,12]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,12]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":0}}],"ind":4}]}]}'),
    oS=JSON.parse('{"nm":"docs","ddd":0,"h":24,"w":24,"meta":{"g":"LottieFiles Figma v106"},"layers":[{"ty":0,"nm":"Group 8206","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"td":1,"ao":0,"ks":{"a":{"a":0,"k":[12,12]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,11]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"w":24,"h":24,"refId":"1","ind":1},{"ty":4,"nm":"Rectangle 3974","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"tt":1,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[13.53,45.78]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,45.79],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,12],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,-21.78],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[13.42,12],"t":90},{"s":[13.42,45.79],"t":120}]},"r":{"a":0,"k":-180},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[27.07,0],[27.07,91.57],[0,91.57],[0,0]]}}},{"ty":"gf","bm":0,"hd":false,"nm":"","e":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[29.5674991607666,88.143798828125],"t":90},{"s":[29.5674991607666,88.143798828125],"t":120}]},"g":{"p":6,"k":{"a":0,"k":[0.013965383172035217,0.9333725490196078,0.3686666666666667,0.8667058823529411,0.2070484459400177,0.2863137254901961,0.7725882352941176,1,0.36134177446365356,0.678470588235294,0.678470588235294,0.678470588235294,0.5655784606933594,0.9176862745098039,0.9176862745098039,0.9176862745098039,0.7476295232772827,0.9333725490196078,0.3686666666666667,0.8667058823529411,1,0.2863137254901961,0.7725882352941176,1]}},"t":1,"a":{"a":0,"k":0},"h":{"a":0,"k":0},"s":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[6.52977991104126,-1.1696799993515015],"t":90},{"s":[6.52977991104126,-1.1696799993515015],"t":120}]},"r":1,"o":{"a":0,"k":100}}],"ind":2}],"v":"5.7.0","fr":60,"op":120.24,"ip":0,"assets":[{"nm":"[Asset] Group 8206","id":"1","layers":[{"ty":0,"nm":"docs 1","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":true,"ao":0,"ks":{"a":{"a":0,"k":[12,12]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,12]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"masksProperties":[{"nm":"","inv":false,"mode":"a","x":{"a":0,"k":0},"o":{"a":0,"k":100},"pt":{"a":1,"k":[{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":0},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":30},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":60},{"o":{"x":0.33,"y":1},"i":{"x":0.68,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":90},{"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}],"t":120}]}}],"w":24,"h":24,"refId":"2","ind":1}]},{"nm":"[Asset] docs 1","id":"2","layers":[{"ty":4,"nm":"Vector","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[2.92,0.53]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,12.42]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.29,0],[0,0],[0,0.29],[-0.29,0],[0,0],[0,-0.29]],"o":[[0,0.29],[0,0],[-0.29,0],[0,-0.29],[0,0],[0.29,0],[0,0]],"v":[[5.84,0.53],[5.31,1.06],[0.53,1.06],[0,0.53],[0.53,0],[5.31,0],[5.84,0.53]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[0,0,0]},"r":1,"o":{"a":0,"k":100}}],"ind":1},{"ty":4,"nm":"Vector","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[2.92,0.53]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,14.99]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.29,0],[0,0],[0,0.29],[-0.29,0],[0,0],[0,-0.3]],"o":[[0,0.29],[0,0],[-0.29,0],[0,-0.3],[0,0],[0.29,0],[0,0]],"v":[[5.84,0.53],[5.31,1.06],[0.53,1.06],[0,0.53],[0.53,0],[5.31,0],[5.84,0.53]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[0,0,0]},"r":1,"o":{"a":0,"k":100}}],"ind":2},{"ty":4,"nm":"Vector","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[4.8,6.09]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,12]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.06,0.06],[0,0],[0.16,0],[0,0],[0,-0.52],[0,0],[-0.57,0],[0,0],[0,0.53],[0,0],[0.03,0.06]],"o":[[-0.03,-0.06],[0,0],[-0.12,-0.11],[0,0],[-0.57,0],[0,0],[0,0.53],[0,0],[0.58,0],[0,0],[0,-0.08],[0,0]],"v":[[9.55,3.31],[9.42,3.14],[6.14,0.15],[5.74,0],[1.04,0],[0,0.95],[0,11.22],[1.04,12.18],[8.55,12.18],[9.6,11.22],[9.6,3.52],[9.55,3.31]]}}},{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[5.84,1.36],[8.1,3.42],[5.84,3.42],[5.84,1.36]]}}},{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[-0.58,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0.53],[0,0],[0,0],[0,0]],"v":[[8.45,11.11],[1.15,11.11],[1.15,1.06],[4.69,1.06],[4.69,3.52],[5.74,4.48],[8.45,4.48],[8.45,11.11]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[0,0,0]},"r":1,"o":{"a":0,"k":100}}],"ind":3},{"ty":4,"nm":"docs 1 Bg","sr":1,"st":0,"op":121.24,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[12,12]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[12,13]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24,0],[24,24],[0,24],[0,0]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":0}}],"ind":4}]}]}');
    let oI=h()(()=>Promise.all([n.e(296),n.e(9260)]).then(n.t.bind(n,69260,23)),{
      loadableGenerated:{
        webpack:()=>[69260]
      },
      ssr:!1
    }),
    oE=(0,T.keyframes)(["from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}"]),
    oF=(0,T.keyframes)(["from{opacity:1;transform:translateY(0);}to{opacity:0;transform:translateY(-8px);}"]),
    oA=T.default.div.withConfig({
      componentId:"sc-e19db28d-0"
    })(["display:flex;flex-direction:column;gap:12px;padding:0 20px 16px 20px;",""],e=>{
      let{
        $isExiting:t
      }=e;
      return t&&(0,T.css)(["animation:"," 0.2s ease-out forwards;"],oF)
    }),
    oZ=T.default.div.withConfig({
      componentId:"sc-e19db28d-1"
    })(["display:flex;align-items:flex-start;gap:0;padding:10px 12px 10px 6px;background-color:rgba(243,244,245,0.5);border-radius:6px;animation:"," 0.3s ease-out forwards;animation-delay:","ms;opacity:0;"],oE,e=>{
      let{
        $index:t
      }=e;
      return 150*t
    }),
    oN=T.default.div.withConfig({
      componentId:"sc-e19db28d-2"
    })(["flex-shrink:0;width:24px;height:24px;display:flex;align-items:center;justify-content:center;"]),
    oR=T.default.div.withConfig({
      componentId:"sc-e19db28d-3"
    })(["flex:1;display:flex;flex-direction:column;justify-content:center;min-height:24px;font-family:'Roboto',sans-serif;font-size:12px;font-weight:400;line-height:24px;color:#737886;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;"]),
    oD=e=>{
      switch(e){
        case"get_sessions_by_id":case"search_sessions":case"search_screens":case"get_session_screens":case"get_user_sessions":case"get_sessions":case"get_screens":return"search";
        case"analyze_behavior":case"get_behavior_examples":default:return"brain";
        case"change_active_filters":case"get_random_sessions":case"generate_session_filters":return"filter";
        case"search_docs":return"doc"
      }
    },
    oT=e=>{
      switch(e){
        case"search":return o_;
        case"brain":default:return ok;
        case"filter":return oC;
        case"doc":return oS
      }
    },
    oL=e=>{
      switch(e){
        case"get_sessions":case"get_sessions_by_id":case"search_sessions":case"get_user_sessions":return"Searching for sessions...";
        case"get_screens":case"search_screens":case"get_session_screens":return"Loading screen data...";
        case"analyze_behavior":case"get_behavior_examples":return"Analyzing user behavior...";
        case"change_active_filters":return"Updating filters...";
        case"generate_session_filters":return"Generating session filters...";
        case"get_random_sessions":return"Getting random sessions...";
        case"search_docs":return"Searching documentation...";
        default:return"Processing..."
      }
    },
    oM=e=>{
      let{
        iconType:t,
        isLoading:n
      }=e,
      o=oT(t);
      return(0,i.jsx)(oI,{
        animationData:o,
        loop:n,
        autoplay:n,
        style:{
          width:24,
          height:24
        }
      })
    };
    var oz=(0,o.memo)(e=>{
      let{
        toolCalls:t,
        visible:n
      }=e,
      [s,a]=o.useState(!1),
      [r,l]=o.useState(n),
      d=o.useRef(n);
      return(o.useEffect(()=>{
        if(d.current&&!n&&t.length>0){
          a(!0);
          let e=setTimeout(()=>{
            l(!1),
            a(!1)
          },200);
          return()=>clearTimeout(e)
        }
        n&&(l(!0),a(!1)),
        d.current=n
      },[n,t.length]),r&&0!==t.length)?(0,i.jsx)(oA,{
        $isExiting:s,
        children:t.map((e,t)=>{
          let n=oD(e.name),
          o="loading"===e.status;
          return(0,i.jsxs)(oZ,{
            $index:t,
            children:[(0,i.jsx)(oN,{
              children:(0,i.jsx)(oM,{
                iconType:n,
                isLoading:o
              })
            }),(0,i.jsx)(oR,{
              children:e.progress_message||oL(e.name)
            })]
          },e.id)
        })
      }):null
    });
    let oP=(0,T.keyframes)(["from{transform:translateY(100%);}to{transform:translateY(0);}"]),
    oO=(0,T.keyframes)(["from{transform:translateY(0);}to{transform:translateY(100%);}"]),
    oU=T.default.div.withConfig({
      componentId:"sc-1d1e8a49-0"
    })(["position:absolute;bottom:0;left:0;right:0;top:0;background:#ffffff;z-index:10;overflow:hidden;display:flex;flex-direction:column;transform:translateY(100%);",""],e=>{
      let{
        $isOpen:t,
        $isClosing:n
      }=e;
      return n?(0,T.css)(["animation:"," 0.25s ease-out forwards;"],oO):t?(0,T.css)(["animation:"," 0.25s ease-out forwards;"],oP):(0,T.css)(["visibility:hidden;"])
    }),
    oB=T.default.div.withConfig({
      componentId:"sc-1d1e8a49-1"
    })(["flex:1;overflow-y:auto;overflow-x:hidden;"]);
    var oV=e=>{
      let{
        isOpen:t,
        onClose:n,
        onPromptSelect:s
      }=e,
      [a,r]=o.useState(!1),
      [l,d]=o.useState(!1),
      c=o.useRef(t);
      o.useEffect(()=>{
        t&&!l&&d(!0)
      },[t,l]),
      o.useEffect(()=>{
        !c.current||t||a||(r(!0),setTimeout(()=>{
          r(!1)
        },250)),
        c.current=t
      },[t,a]);
      let u=()=>{
        r(!0),
        n(),
        setTimeout(()=>{
          r(!1)
        },250)
      };
      (0,o.useEffect)(()=>{
        let e=e=>{
          "Escape"===e.key&&t&&u()
        };
        return document.addEventListener("keydown",e),
        ()=>document.removeEventListener("keydown",e)
      },[t]);
      let p=l||t;
      return(0,i.jsx)(oU,{
        $isOpen:t&&p,
        $isClosing:a,
        children:(0,i.jsx)(oB,{
          children:(0,i.jsx)(of,{
            onPromptSelect:(e,t,n)=>{
              s(e,t,n)
            },
            isActiveUser:!0,
            subtitle:"Continue with these suggestions",
            handleClose:u,
            resetNavigation:t
          })
        })
      })
    };
    let oW=(0,o.createContext)(null),
    oH=()=>{
      let e=(0,o.useContext)(oW);
      if(!e)throw Error("useChatManagement must be used within a ChatManagementProvider");
      return e
    },
    oq=e=>{
      var t,
      n;
      let{
        children:r
      }=e,
      [l,d]=(0,o.useState)(null),
      [c,u]=(0,o.useState)(null),
      [p,h]=(0,o.useState)(!1),
      [f,m]=(0,o.useState)(!1),
      g=(0,o.useRef)(null),
      x=(0,o.useRef)(!1),
      [v,y]=(0,o.useState)(!1),
      b=(0,a.useQueryClient)(),
      {
        currentVersion:w,
        currentPersona:j
      }=tF(),
      {
        debugMode:k
      }=(0,tA.$)(),
      {
        currentAppReducer:{
          _id:_
        }
      }=(0,s.v9)(e=>e),
      C=(0,s.I0)(),
      S=ty.ZP.getQueryKey(w,"chat_list",!1,_),
      {
        data:I,
        isLoading:E,
        refetch:F
      }=(0,a.useQuery)({
        queryKey:S,
        queryFn:()=>(0,tZ.zG)(_,w),
        enabled:!!_
      }),
      A=null!==(t=null==I?void 0:I.sessions)&&void 0!==t?t:[],
      Z=null!==(n=null==I?void 0:I.total_count)&&void 0!==n?n:0,
      N=ty.ZP.getQueryKey(w,"chat_peek",k,_),
      {
        data:R,
        isLoading:D
      }=(0,a.useQuery)({
        queryKey:N,
        queryFn:()=>(0,tZ.ux)(_,w),
        enabled:!!_&&!l&&!f,
        staleTime:3e5
      }),
      T=(0,o.useCallback)(()=>{
        F(),
        b.removeQueries(N)
      },[F,b,N]);
      o.useEffect(()=>{
        if(!l&&!f){
          if(null==R?void 0:R.session_id){
            d(R.session_id),
            u(R.persona||j);
            let e=[...ty.ZP.getQueryKey(w,"chat_thread",k,_,R.persona||j),R.session_id];
            b.setQueryData(e,R)
          }
          else!D&&A.length>0&&(d(A[0].session_id),u(A[0].persona))
        }
      },[l,f,R,D,A,j,w,k,_,b]);
      let L=(0,o.useCallback)(()=>{
        h(e=>!e)
      },[]),
      M=(0,o.useCallback)(()=>{
        h(!1)
      },[]),
      z=Z>=150,
      P=(0,o.useCallback)(e=>{
        e&&C((0,et.CW)(null,{
          eventName:"wa_tara_new_chat",
          track_type:"event",
          eventProperty:{
            source:e
          }
        })),
        m(!0),
        d(null),
        u(null),
        b.setQueryData(ty.ZP.getQueryKey(w,"chat_thread",k,_,j),{
          messages:[],
          session_id:void 0
        })
      },[b,w,k,_,j,C]),
      O=(0,o.useCallback)((e,t)=>{
        m(!1),
        d(e),
        u(t),
        M()
      },[M]),
      U=(0,o.useCallback)((e,t)=>{
        g.current={
          chatId:e,
          persona:t
        }
      },[]),
      B=(0,o.useCallback)(()=>{
        b.invalidateQueries(S),
        b.removeQueries(N)
      },[b,S,N]);
      o.useEffect(()=>{
        l&&f&&m(!1)
      },[l,f]);
      let V=(0,o.useCallback)(async(e,t,n)=>{
        if(!_)return!1;
        try{
          return await (0,tZ.vw)(e,_,t,w,n||j),
          await b.invalidateQueries(S),
          !0
        }
        catch(e){
          return!1
        }
      },[_,w,j,b,S]),
      W=o.useRef(!0);
      o.useEffect(()=>{
        let e=g.current;
        if(g.current=null,e)x.current=!0,
        d(e.chatId),
        u(e.persona),
        m(!1),
        h(!1);
        else if(x.current)x.current=!1;
        else{
          if(W.current){
            W.current=!1;
            return
          }
          d(null),
          u(null),
          m(!1),
          h(!1)
        }
      },[_,w]);
      let H=(0,o.useMemo)(()=>({
        activeChatId:l,
        setActiveChatId:d,
        activeChatPersona:c,
        setActiveChatPersona:u,
        isSidebarOpen:p,
        toggleSidebar:L,
        closeSidebar:M,
        chats:A,
        totalChats:Z,
        isLoadingChats:E,
        createNewChat:P,
        renameChat:V,
        selectChat:O,
        deferSelectChat:U,
        isPendingNewChat:f,
        finalizePendingChat:B,
        refetchChats:T,
        isLoadingPeek:D,
        hasReachedChatLimit:z,
        showChatLimitModal:v,
        setShowChatLimitModal:y
      }),[l,d,c,u,p,L,M,A,Z,E,P,V,O,U,f,B,T,D,z,v]);
      return(0,i.jsx)(oW.Provider,{
        value:H,
        children:r
      })
    },
    oQ=(0,T.createGlobalStyle)([".shared-chat-claim-modal{.ant-modal-content{border-radius:8px;box-shadow:0px 8px 32px rgba(0,0,0,0.12);.ant-modal-body{padding:32px;}}}"]),
    oK=T.default.div.withConfig({
      componentId:"sc-f0ef91c3-0"
    })(["display:flex;flex-direction:column;gap:32px;align-items:flex-end;"]),
    oG=T.default.div.withConfig({
      componentId:"sc-f0ef91c3-1"
    })(["display:flex;flex-direction:column;gap:12px;width:100%;"]),
    o$=T.default.h2.withConfig({
      componentId:"sc-f0ef91c3-2"
    })(["font-family:Roboto;font-weight:500;font-size:18px;line-height:normal;color:",";margin:0;"],e0.r.colors.surface500.toString()),
    oY=T.default.p.withConfig({
      componentId:"sc-f0ef91c3-3"
    })(["font-family:Roboto;font-weight:400;font-size:12px;line-height:24px;color:",";margin:0;"],e0.r.colors.surface400.toString()),
    oX=T.default.div.withConfig({
      componentId:"sc-f0ef91c3-4"
    })(["display:flex;justify-content:flex-end;width:100%;"]),
    oJ=T.default.button.withConfig({
      componentId:"sc-f0ef91c3-5"
    })(["padding:8px 30px;border-radius:6px;border:none;font-family:Roboto;font-size:14px;font-weight:500;cursor:pointer;color:",";background:white;&:hover{background:",";}"],e0.r.colors.primary500.toString(),e0.r.colors.primary10.toString());
    var o0=e=>{
      let{
        visible:t,
        senderName:n,
        onClose:o
      }=e;
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(oQ,{}),(0,i.jsx)(ef.default,{
          visible:t,
          closable:!1,
          footer:null,
          className:"shared-chat-claim-modal",
          centered:!0,
          width:470,
          destroyOnClose:!0,
          children:(0,i.jsxs)(oK,{
            children:[(0,i.jsxs)(oG,{
              children:[(0,i.jsx)(o$,{
                children:n?"".concat(n," shared a chat with you"):"A chat was shared with you"
              }),(0,i.jsx)(oY,{
                children:"This is your own copy of the conversation. Any questions you ask or changes you make won't affect the original chat."
              })]
            }),(0,i.jsx)(oX,{
              children:(0,i.jsx)(oJ,{
                onClick:o,
                children:"View chat"
              })
            })]
          })
        })]
      })
    };
    let o1=T.default.div.withConfig({
      componentId:"sc-ca25e64c-0"
    })(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;flex:1;width:100%;overflow-y:auto;"]),
    o2=T.default.div.withConfig({
      componentId:"sc-ca25e64c-1"
    })(["display:flex;flex-direction:column;width:100%;flex:1;position:relative;overflow:hidden;"]),
    o5=T.default.div.withConfig({
      componentId:"sc-ca25e64c-2"
    })(["display:flex;flex-direction:column;width:100%;flex:1;overflow-x:hidden;overflow-y:auto;transition:transform 0.25s ease-out,opacity 0.25s ease-out;transform:",";opacity:",";"],e=>{
      let{
        $suggestionsOpen:t
      }=e;
      return t?"translateY(-100%)":"translateY(0)"
    },e=>{
      let{
        $suggestionsOpen:t
      }=e;
      return t?0:1
    }),
    o4=T.default.div.withConfig({
      componentId:"sc-ca25e64c-3"
    })(["display:flex;justify-content:center;align-items:center;flex:1;height:100%;width:100%;background-color:#ffffff;"]),
    o6=T.default.div.withConfig({
      componentId:"sc-ca25e64c-4"
    })(["display:flex;justify-content:center;align-items:center;padding:12px;margin-top:12px;position:relative;width:100%;"]),
    o3=T.default.div.withConfig({
      componentId:"sc-ca25e64c-5"
    })(['display:flex;flex-direction:column;width:100%;height:100%;&[data-hidden="true"]{display:none;}']),
    o8=T.default.div.withConfig({
      componentId:"sc-ca25e64c-6"
    })(["display:flex;flex-direction:column;align-items:center;border-top:1px dashed #D0D2D7;margin:0 20px;padding:10px 0;opacity:0.7;"]),
    o7=T.default.div.withConfig({
      componentId:"sc-ca25e64c-7"
    })(["display:flex;align-items:center;justify-content:center;gap:2px;width:100%;font-family:Roboto;font-size:11px;line-height:18px;color:#737886;text-align:center;svg{flex-shrink:0;width:16px;height:16px;}strong{font-weight:700;}"]),
    o9=T.default.div.withConfig({
      componentId:"sc-ca25e64c-8"
    })(["font-family:Roboto;font-size:11px;line-height:18px;color:#737886;text-align:center;width:100%;"]),
    se=T.default.div.withConfig({
      componentId:"sc-ca25e64c-9"
    })(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:16px;gap:8px;"]),
    st=o.memo(e=>{
      let{
        messages:t,
        loading:n=!1,
        hidden:s=!1,
        setInput:a,
        toolCalls:r=[],
        streamChunks:l=[],
        chatSessionId:d,
        onPromptSelect:c
      }=e,
      u=o.useRef(null),
      p=o.useRef(null),
      h=o.useMemo(()=>{
        if(0===l.length)return null;
        let e=[],
        t="",
        n=0;
        return l.forEach(o=>{
          "content"===o.type?t+=o.content:"tool_call"===o.type&&(t&&(e.push((0,i.jsx)(iF,{
            message:{
              id:"streaming-".concat(n),
              role:"assistant",
              content:t
            },
            showCopyButton:!1
          },"content-".concat(n))),n+=1,t=""),e.push((0,i.jsx)(oz,{
            toolCalls:[o.toolCall],
            visible:!0
          },"tool-".concat(o.toolCall.id))))
        }),
        t&&e.push((0,i.jsx)(iF,{
          message:{
            id:"streaming-".concat(n),
            role:"assistant",
            content:t
          },
          showCopyButton:!1
        },"content-".concat(n))),
        e
      },[l]),
      f=l.some(e=>"content"===e.type),
      m=l.some(e=>"tool_call"===e.type)||r.length>0;
      return(0,i.jsxs)(o3,{
        "data-hidden":s,
        ref:p,
        "data-element":"chat-bubbles",
        children:[null==t?void 0:t.map((e,o)=>{
          if("shared_chat_end"===e.role)return(0,i.jsxs)(o8,{
            children:[(0,i.jsxs)(o7,{
              children:[(0,i.jsx)(tm,{}),(0,i.jsxs)("span",{
                children:[(0,i.jsx)("strong",{
                  children:"End of shared chat."
                })," New messages use your filters."]
              })]
            }),(0,i.jsx)(o9,{
              children:"Include details when referencing the conversation above."
            })]
          },e.id);
          let s="user"===e.role,
          a=!0,
          r="";
          if(!s){
            let i=t[o+1];
            if(i&&"user"!==i.role&&"shared_chat_end"!==i.role?a=!1:n&&!f&&o===t.length-1?a=!1:n&&f&&o===t.length-1&&(a=!1),a){
              let n=[];
              "function_call"!==e.content&&"function_response"!==e.content&&n.unshift(e.content);
              let i=o-1;
              for(;i>=0;){
                let e=t[i];
                if("user"===e.role)break;
                "function_call"!==e.content&&"function_response"!==e.content&&n.unshift(e.content),
                i-=1
              }
              r=n.join("\n\n")
            }
          }
          return(0,i.jsx)(iF,{
            message:e,
            dateRef:u,
            showCopyButton:a,
            customCopyContent:r,
            chatSessionId:d
          },e.id)
        }),!(null==t?void 0:t.length)&&!f&&(0,i.jsx)(og,{
          setInput:a,
          onPromptSelect:c
        }),n&&!f&&!m&&(0,i.jsx)(oj,{}),n&&l.length>0&&h]
      })
    }),
    sn=(e,t,n,i,o,s,a)=>{
      var r,
      l;
      let d={
        id:new Date().toISOString(),
        role:"assistant",
        content:"An error occurred while generating the response. Please try again.",
        timestamp:new Date().toISOString(),
        isError:!0
      };
      return ey.l.error("AI STREAM - ".concat((null==n?void 0:n.message)||"An error occurred while generating the response. Please try again."),n,{
        errorCode:null==n?void 0:n.code,
        errorName:null==n?void 0:n.name,
        appID:t,
        apiVersion:i,
        debugMode:o,
        statusCode:null==n?void 0:null===(r=n.response)||void 0===r?void 0:r.status,
        endpoint:null==n?void 0:null===(l=n.config)||void 0===l?void 0:l.url,
        ...a
      }),
      e.setQueryData(ty.ZP.getQueryKey(i,"chat_thread",o,t,s),e=>{
        let t=[...(null==e?void 0:e.messages)||[],d];
        return{
          ...e,
          messages:t
        }
      }),
      d
    };
    var si=e=>{
      var t,
      n,
      r;
      let{
        streamedMessage:l,
        setStreamedMessage:d,
        chatThreadId:c,
        setChatThreadId:u,
        isSharedClaim:p,
        onDismissClaim:h,
        onLoadingChange:f
      }=e,
      [m,g]=o.useState(""),
      [x,v]=o.useState(!1);
      o.useEffect(()=>{
        null==f||f(x)
      },[x,f]);
      let[y,b]=o.useState([]),
      [w,j]=o.useState([]),
      [k,_]=o.useState(!1),
      [C,S]=o.useState(!1),
      [I,E]=o.useState(void 0),
      F=o.useRef(!1),
      A=o.useRef(!1),
      Z=o.useRef(!1),
      [N,D]=o.useState(!1),
      T=o.useRef(null),
      L=o.useRef(null),
      M=(0,R.useRouter)(),
      {
        currentVersion:z,
        currentPersona:P,
        isReady:O
      }=tF(),
      {
        isLoggedInFromAdmin:B
      }=(0,tf.Z)(),
      V=o.useRef(null),
      W=o.useRef(0),
      H=o.useRef([]),
      {
        setTempDocumentsMap:q,
        setSessionAliasMap:Q
      }=tv(),
      {
        debugMode:K
      }=(0,tA.$)(),
      {
        activeChatId:G,
        setActiveChatId:$,
        activeChatPersona:Y,
        setActiveChatPersona:X,
        isPendingNewChat:J,
        finalizePendingChat:ee,
        refetchChats:en,
        isLoadingPeek:ei,
        isLoadingChats:eo,
        chats:es,
        totalChats:ea,
        createNewChat:er,
        selectChat:el,
        hasReachedChatLimit:ed,
        setShowChatLimitModal:ec
      }=oH(),
      eu=(0,s.I0)(),
      ep=(0,a.useQueryClient)(),
      {
        currentAppReducer:{
          _id:eh
        },
        currentOrgReducer:{
          orgId:ef
        },
        urlReducer:{
          sessionpage:em,
          sessionid:eg,
          parentType:ex
        },
        appFilter:ev,
        profileReducer:{
          _id:ey
        }
      }=(0,s.v9)(e=>e),
      {
        session:{
          segment:eb
        },
        dateSegment:ew
      }=ev,
      {
        sessionMeta:ej
      }=tR("AI CHAT TAB - error getting session meta"),
      ek=o.useMemo(()=>({
        appid:eh,
        filters:eb,
        date_range:ew
      }),[eh,ew,eb]),
      {
        data:e_
      }=(0,U.M)(ek,{
        enabled:"aiSessionsList"===ex
      }),
      eC=Y||P,
      eS=o.useMemo(()=>G?[...ty.ZP.getQueryKey(z,"chat_thread",K,eh,eC),G]:ty.ZP.getQueryKey(z,"chat_thread",K,eh,eC),[z,K,eh,eC,G]),
      eI=!!eh&&O&&!J&&!!G,
      {
        data:eE,
        isLoading:eF
      }=(0,a.useQuery)({
        queryKey:eS,
        queryFn:()=>(0,tZ.Hu)(eh,z,eC,K,G||void 0),
        enabled:eI,
        staleTime:3e5,
        onSuccess:e=>{
          (null==e?void 0:e.session_id)&&u(e.session_id)
        },
        onError:e=>{
          var t;
          (null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.status)!==404&&sn(ep,eh,e,z,K,P)
        }
      });
      o.useEffect(()=>{
        Q((null==eE?void 0:eE.session_alias_map)||null)
      },[null==eE?void 0:eE.session_alias_map,Q]),
      o.useEffect(()=>{
        d(""),
        b([]),
        j([]),
        v(!1),
        g(""),
        _(!1),
        D(!1),
        T.current=null,
        V.current&&(V.current.close(),V.current=null),
        u(G||void 0)
      },[G]);
      let[eA,eZ]=o.useState(!1),
      [eN,eR]=o.useState(!1),
      eD=o.useCallback(e=>{
        if(!L.current)return;
        let t=!1,
        n=!1;
        e instanceof WheelEvent?(t=e.deltaY<0,n=e.deltaY>0):e instanceof TouchEvent&&e.touches.length>0&&(t=!0),
        t&&eZ(!0);
        let{
          scrollTop:i,
          scrollHeight:o,
          clientHeight:s
        }=L.current;
        n&&o-i-s<100&&eZ(!1)
      },[]),
      eT=o.useCallback(async()=>{
        var e;
        let t=T.current;
        if(!(null==t?void 0:t.next_page)||N)return;
        D(!0);
        let n=L.current,
        i=null!==(e=null==n?void 0:n.scrollHeight)&&void 0!==e?e:0;
        try{
          let e=await (0,tZ.Hu)(eh,z,eC,K,G||void 0,t.next_page);
          ep.setQueryData(eS,t=>{
            if(!t)return t;
            let n=t.messages||[],
            i=e.messages||[],
            o=new Set(n.map(e=>e.id)),
            s=i.filter(e=>!o.has(e.id));
            return{
              ...t,
              messages:[...s,...n],
              pagination:e.pagination
            }
          }),
          requestAnimationFrame(()=>{
            if(n){
              let e=n.scrollHeight-i;
              n.scrollTop=e
            }
          })
        }
        catch(e){
          console.error("Failed to fetch older messages:",e)
        }
        finally{
          D(!1)
        }
      },[eh,z,eC,K,G,ep,eS,N]),
      eL=o.useCallback(()=>{
        var e;
        if(!L.current)return;
        let{
          scrollTop:t,
          scrollHeight:n,
          clientHeight:i
        }=L.current,
        o=n-t-i>2*i;
        o?eN||(eu((0,et.CW)(null,{
          eventName:"wa_sessions_tara_scroll_response",
          track_type:"event",
          eventProperty:{
            height_triggered:o
          }
        })),eR(!0)):eR(!1),
        t<100&&!N&&(null===(e=T.current)||void 0===e?void 0:e.next_page)&&eT()
      },[eN,eu,N,eT]);
      o.useEffect(()=>{
        let e=L.current;
        if(e)return e.addEventListener("wheel",eD,{
          passive:!0
        }),
        e.addEventListener("touchmove",eD,{
          passive:!0
        }),
        ()=>{
          e.removeEventListener("wheel",eD),
          e.removeEventListener("touchmove",eD)
        }
      },[eD]);
      let eM=o.useCallback(function(){
        let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];
        if(!L.current)return;
        let t=L.current;
        t.scrollTo({
          top:t.scrollHeight,
          behavior:e?"auto":"smooth"
        })
      },[]),
      ez=o.useCallback(async()=>{
        if(!m.trim())return;
        if(ed&&!G){
          ec(!0);
          return
        }
        eZ(!1),
        _(!1),
        setTimeout(()=>eM(),50);
        let e=m.replace(/\{([^}]+)\}/g,"$1"),
        t={
          id:crypto.randomUUID(),
          role:"user",
          content:e,
          timestamp:new Date().toISOString(),
          readable_filters:null==ej?void 0:ej.descriptions,
          sessions_analyzed_by_ai:null==ej?void 0:ej.total_sessions
        };
        ep.setQueryData(eS,e=>{
          if(e){
            let n=[...(null==e?void 0:e.messages)||[],t];
            return{
              ...e,
              messages:n
            }
          }
          return{
            messages:[t],
            session_id:c
          }
        }),
        g(""),
        v(!0),
        d(""),
        b([]),
        j([]),
        W.current=0,
        H.current.forEach(clearTimeout),
        H.current=[],
        eu((0,et.CW)(null,{
          eventName:"wa_sessions_tara_submit_prompt",
          track_type:"event",
          eventProperty:{
            prompt_text:m,
            context_length:null==ej?void 0:ej.total_sessions,
            filters_applied:eb||[]
          }
        }));
        try{
          let t=performance.now(),
          n=Z.current&&J;
          await e$.e.refreshIfNeeded();
          let i=ty.ZP.createStream(z,{
            input:e,
            appID:eh,
            userID:ey,
            sessionid:eg,
            sessionpage:em,
            aiMeta:ej,
            statBoxesData:e_,
            appFilterSegment:eb,
            appFilterDateSegment:ew,
            chatThreadId:J?void 0:c,
            persona:eC,
            ...n&&{
              requestSource:"email_insight",
              title:"Tara email insights"
            }
          },K);
          n&&(Z.current=!1),
          V.current=i,
          J&&setTimeout(()=>{
            ee()
          },1e3);
          let o=0,
          s=0,
          a=0,
          r=[],
          l=[],
          p="",
          h=!1;
          i.onmessage=t=>{
            var n,
            c,
            f;
            let m,
            g=t.data;
            g.startsWith("data: ")&&(g=g.substring(6));
            try{
              m=JSON.parse(g)
            }
            catch(t){
              let e=g.replace(/data:\s*/g,"");
              try{
                m=JSON.parse(e)
              }
              catch(e){
                return
              }
            }
            switch(m.type){
              case"content":p+=m.content,
              b(e=>e.map(e=>({
                ...e,
                status:"loaded"
              }))),
              j(e=>{
                let t=e.map(e=>"tool_call"===e.type&&"loading"===e.toolCall.status?{
                  ...e,
                  toolCall:{
                    ...e.toolCall,
                    status:"loaded"
                  }
                }:e),
                n=t[t.length-1];
                return n&&"content"===n.type?[...t.slice(0,-1),{
                  type:"content",
                  content:n.content+m.content
                }]:[...t,{
                  type:"content",
                  content:m.content
                }]
              }),
              d(e=>e+m.content);
              break;
              case"function_call":{
                let e=m.tool;
                if((null==e?void 0:e.name)&&(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.progress_message)){
                  let t={
                    id:e.id||"tool-".concat(Date.now()),
                    name:e.name,
                    progress_message:e.data.progress_message,
                    status:"loading",
                    timestamp:Date.now()
                  },
                  n=()=>{
                    b(e=>[...e.map(e=>({
                      ...e,
                      status:"loaded"
                    })),t]),
                    j(e=>[...e.map(e=>"tool_call"===e.type?{
                      ...e,
                      toolCall:{
                        ...e.toolCall,
                        status:"loaded"
                      }
                    }:e),{
                      type:"tool_call",
                      toolCall:t
                    }])
                  },
                  i=W.current;
                  if(W.current+=1,0===i)n();
                  else{
                    let e=setTimeout(()=>{
                      n()
                    },1e3*i);
                    H.current.push(e)
                  }
                }
                else console.log("[TARA] Tool call missing required fields:",{
                  hasName:!!(null==e?void 0:e.name),
                  hasProgressMessage:!!(null==e?void 0:null===(c=e.data)||void 0===c?void 0:c.progress_message)
                });
                break
              }
              case"documents":r=m.documents,
              q(r);
              break;
              case"end":if((null==m?void 0:m.conversation_history)&&m.conversation_history.length>0)l=m.conversation_history;
              else{
                let t={
                  id:crypto.randomUUID(),
                  role:"user",
                  content:e,
                  timestamp:new Date().toISOString(),
                  readable_filters:null==ej?void 0:ej.descriptions,
                  sessions_analyzed_by_ai:null==ej?void 0:ej.total_sessions
                },
                n={
                  id:crypto.randomUUID(),
                  role:"tara",
                  content:p,
                  timestamp:new Date().toISOString(),
                  ...(null==m?void 0:m.token_usage)&&{
                    token_usage:m.token_usage
                  },
                  ...(null==m?void 0:m.model_used)&&{
                    model_used:m.model_used
                  },
                  ...(null==m?void 0:m.model_requested)&&{
                    model_requested:m.model_requested
                  }
                };
                l=[t,n]
              }
              if(K&&(null==m?void 0:null===(f=m.tool_calls)||void 0===f?void 0:f.length)>0){
                let e=m.tool_calls.map((e,t)=>({
                  id:"tool-".concat(Date.now(),"-").concat(t),
                  role:"tara",
                  content:e.content,
                  timestamp:new Date().toISOString(),
                  tool:e.tool
                }));
                if(l.length>=2){
                  let t=l[0],
                  n=l[l.length-1];
                  l=[t,...e,n]
                }
                else 1===l.length&&(l=[...e,...l])
              }
              if(l.length>=1){
                let e=l.findIndex(e=>"user"===e.role);
                if(-1!==e&&(l[e]={
                  ...l[e],
                  readable_filters:null==ej?void 0:ej.descriptions,
                  sessions_analyzed_by_ai:null==ej?void 0:ej.total_sessions
                }),l=l.map(e=>({
                  ...e,
                  content:e.content.replace(/\\n\\n/g,"\n\n").replace(/\\n/g,"\n"),
                  id:e.id||crypto.randomUUID(),
                  timestamp:e.timestamp||new Date().toISOString()
                })),null==m?void 0:m.invocation_id){
                  for(let e=l.length-1;e>=0;e-=1)if("tara"===l[e].role){
                    l[e]={
                      ...l[e],
                      invocation_id:m.invocation_id
                    };
                    break
                  }
                }
                let t=(null==m?void 0:m.session_alias_map)&&Object.keys(m.session_alias_map).length>0;
                if(t&&Q(m.session_alias_map),(null==m?void 0:m.session_id)&&(u(m.session_id),!G)){
                  let e=[...ty.ZP.getQueryKey(z,"chat_thread",K,eh,eC),m.session_id];
                  ep.setQueryData(e,{
                    messages:l,
                    session_id:m.session_id,
                    ...t&&{
                      session_alias_map:m.session_alias_map
                    }
                  }),
                  $(m.session_id),
                  X(eC)
                }
              }
              ep.setQueryData("ai_usage_overview_".concat(ef),e=>!e||B?e:{
                ...e,
                consumed_tara_credit_by_chat:e.consumed_tara_credit_by_chat+1,
                consumed_tara_credit:e.consumed_tara_credit+1
              }),
              h=!0,
              setTimeout(()=>{
                en()
              },1e3);
              break;
              case"cost":{
                o=m.cost,
                s=m.details.answer_cost,
                a=m.details.query_expansion_cost;
                let e=l.splice(-1,1)[0];
                l.push({
                  ...e,
                  document_map:r,
                  cost:o,
                  answer_cost:s,
                  query_expansion_cost:a
                });
                break
              }
              case"error":case"request_error":{
                let e=m.error||m.message||"AI Stream error",
                t=m.statusCode?" (".concat(m.statusCode,")"):"";
                sn(ep,eh,Error("".concat(e).concat(t)),z,K,P),
                ep.invalidateQueries("ai_usage_overview_".concat(ef)),
                i.close(),
                v(!1),
                d(""),
                b([]),
                j([]),
                W.current=0,
                H.current.forEach(clearTimeout),
                H.current=[]
              }
            }
          },
          i.onerror=e=>{
            let n={
              0:"CONNECTING",
              1:"OPEN",
              2:"CLOSED"
            }[i.readyState]||"UNKNOWN",
            o=l.length>0,
            s=p.length>0;
            if(h&&(2===i.readyState||0===i.readyState)&&o){
              ep.setQueryData(eS,e=>{
                if(e){
                  let t=[...((null==e?void 0:e.messages)||[]).slice(0,-1),...l];
                  return{
                    ...e,
                    messages:t
                  }
                }
                return null
              });
              let e=((performance.now()-t||0)/1e3).toFixed(2);
              eu((0,et.CW)(null,{
                eventName:"wa_sessions_tara_response",
                track_type:"event",
                eventProperty:{
                  time_to_load:e
                }
              }))
            }
            else{
              let t=o||s?"connection lost mid-conversation":"no data received",
              a={
                readyState:i.readyState,
                readyStateText:n,
                hasConversationHistory:o,
                hasStreamedContent:s,
                streamedMessageLength:p.length,
                conversationHistoryLength:l.length,
                url:i.url,
                messageLength:(null==m?void 0:m.length)||0
              };
              console.error("AI STREAM ERROR:",a,e),
              sn(ep,eh,Error("Stream ".concat(n.toLowerCase()," — ").concat(t)),z,K,P,a),
              ep.invalidateQueries("ai_usage_overview_".concat(ef))
            }
            ep.invalidateQueries("ai_usage_overview_".concat(ef)),
            v(!1),
            b([]),
            j([]),
            q(null),
            V.current=null,
            W.current=0,
            H.current.forEach(clearTimeout),
            H.current=[],
            i.close()
          }
        }
        catch(e){
          sn(ep,eh,e,z,K,P),
          ep.invalidateQueries("ai_usage_overview_".concat(ef)),
          v(!1),
          b([]),
          j([]),
          q(null),
          V.current=null,
          W.current=0,
          H.current.forEach(clearTimeout),
          H.current=[]
        }
      },[m,ej,ep,z,P,Y,eh,eu,ef,eb,ey,eg,em,e_,ew,c,q,Q,K,eM,B,J,$,ee,en,eS]),
      eP=o.useCallback(()=>{
        V.current&&(V.current.close(),V.current=null),
        eu((0,et.CW)(null,{
          eventName:"wa_ai_stop_response",
          track_type:"event"
        }));
        let e={
          id:crypto.randomUUID(),
          role:"assistant",
          content:"Response stopped by user",
          timestamp:new Date().toISOString(),
          isError:!1,
          isStoppedByUser:!0
        };
        ep.setQueryData(eS,t=>{
          if(t){
            let n=(null==t?void 0:t.messages)||[];
            if(l){
              let i=[...n,{
                id:crypto.randomUUID(),
                role:"assistant",
                content:l,
                timestamp:new Date().toISOString()
              },e];
              return{
                ...t,
                messages:i
              }
            }
            let i=[...n,e];
            return{
              ...t,
              messages:i
            }
          }
          return t
        }),
        ep.invalidateQueries("ai_usage_overview_".concat(ef)),
        v(!1),
        d(""),
        b([]),
        j([]),
        q(null),
        W.current=0,
        H.current.forEach(clearTimeout),
        H.current=[]
      },[l,ep,z,P,K,eh,q,Q,ef,eu,ej,eS]),
      eU=o.useCallback(e=>{
        g(e)
      },[]),
      eB=o.useCallback(e=>{
        "Enter"===e.key&&!e.shiftKey&&m.trim()&&!eF&&(e.preventDefault(),ez())
      },[ez,m,eF]),
      eV=o.useCallback(()=>{
        _(e=>!e)
      },[]),
      eW=o.useCallback(()=>{
        _(!1)
      },[]),
      eH=o.useCallback((e,t,n)=>{
        g(e),
        S(!0),
        E(n)
      },[]),
      eq=o.useCallback(()=>{
        S(!1)
      },[]),
      eQ=o.useMemo(()=>(null==eE?void 0:eE.messages)&&eE.messages.length>0,[null==eE?void 0:eE.messages]);
      return o.useEffect(()=>{
        eQ||_(!1)
      },[eQ]),
      o.useEffect(()=>{
        var e;
        if((null==eE?void 0:null===(e=eE.messages)||void 0===e?void 0:e.length)&&!eF){
          let e=function(){
            let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;
            if(!L.current||t>10)return;
            let{
              scrollTop:n,
              scrollHeight:i,
              clientHeight:o
            }=L.current;
            i-n-o<10||(eM(!0),setTimeout(()=>e(t+1),100))
          };
          setTimeout(()=>e(),50)
        }
      },[eF,G]),
      o.useEffect(()=>{
        !eA&&w.length>0&&eM()
      },[w,eA,eM]),
      o.useEffect(()=>{
        (null==eE?void 0:eE.pagination)&&(T.current=eE.pagination)
      },[null==eE?void 0:eE.pagination]),
      o.useEffect(()=>{
        u(void 0)
      },[eh]),
      o.useEffect(()=>{
        d(""),
        ep.invalidateQueries(ty.ZP.getQueryKey(z,"chat_thread",K,eh,P))
      },[z,P,ep,eh,K]),
      o.useEffect(()=>{
        let{
          taraPrompt:e
        }=M.query;
        if(e&&"string"==typeof e&&O&&!A.current&&eh){
          let t;
          A.current=!0;
          let n=new URL(window.location.href);
          n.searchParams.delete("taraPrompt"),
          window.history.replaceState(window.history.state,"",n.pathname+n.search);
          try{
            t=decodeURIComponent(e)
          }
          catch(n){
            t=e
          }(0,tZ.iN)(eh,z).then(e=>{
            (null==e?void 0:e.session_id)?el(e.session_id,e.persona||P):ea>=149&&es.length>0?el(es[0].session_id,es[0].persona||P):(Z.current=!0,er("Email insights"))
          }).catch(()=>{
            ea>=149&&es.length>0?el(es[0].session_id,es[0].persona||P):(Z.current=!0,er("Email insights"))
          }).finally(()=>{
            setTimeout(()=>{
              g(t),
              F.current=!0
            },0)
          })
        }
      },[M,O,er,eh,z,el,P,ea,es]),
      o.useEffect(()=>{
        F.current&&m.trim()&&!eF&&!x&&O&&eE&&(F.current=!1,ez())
      },[m,eF,x,O,ez,eE]),
      o.useEffect(()=>{
        var e;
        p&&(null==eE?void 0:null===(e=eE.shared_info)||void 0===e?void 0:e.shared_by)&&eu((0,et.CW)(null,{
          eventName:"wa_tara_open_shared_chat",
          track_type:"event"
        }))
      },[p,null==eE?void 0:null===(t=eE.shared_info)||void 0===t?void 0:t.shared_by,eu]),
      (0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsxs)(o1,{
          children:[(0,i.jsxs)(o2,{
            children:[(0,i.jsxs)(o5,{
              ref:L,
              onScroll:eL,
              $suggestionsOpen:k,
              children:[N&&(0,i.jsx)(o6,{
                children:(0,i.jsx)(eO.$j,{
                  "data-size":"sm"
                })
              }),(eF||ei||!O)&&(0,i.jsx)(o4,{
                children:(0,i.jsx)(eO.$j,{
                  "data-size":"m"
                })
              }),(0,i.jsx)(st,{
                messages:null==eE?void 0:eE.messages,
                loading:x,
                streamChunks:w,
                hidden:eF||ei||!O,
                setInput:g,
                toolCalls:y,
                chatSessionId:c,
                onPromptSelect:eH
              })]
            }),eQ&&(0,i.jsx)(oV,{
              isOpen:k,
              onClose:eW,
              onPromptSelect:eH
            })]
          }),(0,i.jsx)(se,{
            children:(0,i.jsx)(nD,{
              value:m,
              onChange:eU,
              onKeyDown:eB,
              onSend:ez,
              disabled:eF||x||!O,
              loading:x||!O,
              onStop:eP,
              onSuggestionsClick:eV,
              showSuggestionsButton:eQ,
              suggestionsActive:k,
              cursorToFirstToken:C,
              onCursorPlaced:eq,
              secondaryPlaceholder:I
            })
          })]
        }),(0,i.jsx)(o0,{
          visible:!!p&&!!(null==eE?void 0:null===(n=eE.shared_info)||void 0===n?void 0:n.shared_by),
          senderName:null==eE?void 0:null===(r=eE.shared_info)||void 0===r?void 0:r.shared_by,
          onClose:()=>null==h?void 0:h()
        })]
      })
    },
    so=n(73935),
    ss=n(94839),
    sa=n(72330),
    sr=e=>(0,i.jsx)("svg",{
      width:7,
      height:11,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M.678 9.702 4.53 5.668.678 1.634 1.864.395l5.047 5.273-5.047 5.273L.678 9.702Z",
        fill:"#5D97FF"
      })
    });
    let sl=T.default.div.withConfig({
      componentId:"sc-d574e1b7-0"
    })(["display:flex;align-items:center;justify-content:flex-end;z-index:1;position:relative;"]),
    sd=T.default.div.withConfig({
      componentId:"sc-d574e1b7-1"
    })(["font-size:13px;font-weight:400;background-color:",";color:#161E35;padding:4px;border-radius:4px;border:1px solid ",";min-width:80px;height:28px;display:flex;align-items:center;justify-content:space-between;cursor:",";user-select:none;opacity:",";pointer-events:",";&:hover{background-color:",";border-color:",";}"],e=>{
      let{
        $isActive:t
      }=e;
      return t?"#EFF5FF":e0.r.colors.surface05.toString()
    },e=>{
      let{
        $isActive:t
      }=e;
      return t?"#9EC1FF":"transparent"
    },e=>{
      let{
        $isDisabled:t
      }=e;
      return t?"not-allowed":"pointer"
    },e=>{
      let{
        $isDisabled:t
      }=e;
      return t?.6:1
    },e=>{
      let{
        $isDisabled:t
      }=e;
      return t?"none":"auto"
    },e=>{
      let{
        $isDisabled:t
      }=e;
      return t?e0.r.colors.surface05.toString():"#EFF5FF"
    },e=>{
      let{
        $isDisabled:t
      }=e;
      return t?"transparent":"#5D97FF"
    }),
    sc=T.default.span.withConfig({
      componentId:"sc-d574e1b7-2"
    })(["display:flex;align-items:center;justify-content:center;svg{width:16px;height:16px;transform:rotate(90deg);top:5px;position:relative;path{fill:",";}}"],e0.r.colors.primaryMidnight.toString()),
    su=T.default.div.withConfig({
      componentId:"sc-d574e1b7-3"
    })(["position:fixed;top:","px;left:","px;z-index:9999;"],e=>{
      let{
        $top:t
      }=e;
      return t
    },e=>{
      let{
        $left:t
      }=e;
      return t
    }),
    sp=T.default.div.withConfig({
      componentId:"sc-d574e1b7-4"
    })(["position:fixed;top:","px;left:","px;z-index:9999;"],e=>{
      let{
        $top:t
      }=e;
      return t
    },e=>{
      let{
        $left:t
      }=e;
      return t
    }),
    sh=T.default.div.withConfig({
      componentId:"sc-d574e1b7-5"
    })(["background:#fff;border-radius:6px;padding:4px;min-width:100px;box-shadow:0px 4px 12px rgba(0,0,0,0.15);height:fit-content;"]),
    sf=T.default.div.withConfig({
      componentId:"sc-d574e1b7-6"
    })(["display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-radius:4px;cursor:pointer;gap:8px;background-color:",";&:hover{background-color:",";}"],e=>{
      let{
        $isHovered:t,
        $isActive:n
      }=e;
      return n?"#DFEAFF":t?"#EFF5FF":"transparent"
    },e=>{
      let{
        $isActive:t
      }=e;
      return t?"#DFEAFF":"#EFF5FF"
    }),
    sm=T.default.span.withConfig({
      componentId:"sc-d574e1b7-7"
    })(["font-size:13px;font-weight:400;color:#161E35;"]),
    sg=T.default.span.withConfig({
      componentId:"sc-d574e1b7-8"
    })(["display:flex;align-items:center;justify-content:center;svg{width:12px;height:12px;path{fill:",";}}"],e0.r.colors.primaryMidnight.toString()),
    sx=T.default.span.withConfig({
      componentId:"sc-d574e1b7-9"
    })(["display:flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:50%;background-color:#5D97FF;.anticon{color:#fff;font-size:10px;}"]),
    sv=T.default.div.withConfig({
      componentId:"sc-d574e1b7-10"
    })(["position:fixed;top:0;left:0;right:0;bottom:0;z-index:9998;"]);
    var sy=()=>{
      var e;
      let[t,n]=(0,o.useState)(!1),
      [s,a]=(0,o.useState)(null),
      [r,l]=(0,o.useState)({
        top:0,
        left:0
      }),
      [d,c]=(0,o.useState)({
        top:0,
        left:0
      }),
      u=(0,o.useRef)(null),
      p=(0,o.useRef)(null),
      {
        currentEnvironment:h,
        currentPersona:f,
        environments:m,
        setEnvironment:g,
        setPersona:x,
        fetchPersonasForEnvironment:v,
        isLoadingEnvironment:y,
        isLoading:b
      }=tF(),
      {
        createNewChat:w
      }=oH(),
      j=()=>{
        if(u.current){
          let e=u.current.getBoundingClientRect();
          l({
            top:e.bottom+4,
            left:e.left
          })
        }
      };
      (0,o.useEffect)(()=>{
        t&&j()
      },[t]),
      (0,o.useEffect)(()=>{
        if(!t)return;
        let e=()=>{
          n(!1),
          a(null)
        };
        return window.addEventListener("resize",e),
        ()=>{
          window.removeEventListener("resize",e)
        }
      },[t]);
      let k=(e,t)=>{
        var n;
        a(e),
        v(e);
        let i=t.currentTarget.getBoundingClientRect(),
        o=null===(n=p.current)||void 0===n?void 0:n.getBoundingClientRect();
        c({
          top:i.top,
          left:o?o.right+4:i.right+4
        })
      },
      _=(null==h?void 0:null===(e=h.personas.find(e=>e.value===f))||void 0===e?void 0:e.label)||tk,
      C="".concat((null==h?void 0:h.label)||"Prod"," (").concat(_,")"),
      S=(e,t)=>{
        let i=(null==h?void 0:h.id)!==e,
        o=f!==t;
        i?g(e,t):o&&x(t),
        (i||o)&&w(),
        n(!1),
        a(null)
      },
      I=m.find(e=>e.id===s),
      E=e=>{
        var t;
        let i=null===(t=e.personas[0])||void 0===t?void 0:t.value;
        i&&g(e.id,i),
        w(),
        n(!1),
        a(null)
      };
      return(0,i.jsxs)(sl,{
        children:[(0,i.jsx)(sd,{
          ref:u,
          $isActive:t,
          $isDisabled:b,
          onClick:()=>n(!t),
          children:b?(0,i.jsx)(ss.Z,{
            style:{
              fontSize:14,
              margin:"auto"
            }
          }):(0,i.jsxs)(i.Fragment,{
            children:[(0,i.jsx)("span",{
              children:C
            }),(0,i.jsx)(sc,{
              children:(0,i.jsx)(sr,{})
            })]
          })
        }),t&&so.createPortal((0,i.jsxs)(i.Fragment,{
          children:[(0,i.jsx)(sv,{
            onClick:()=>{
              n(!1),
              a(null)
            }
          }),(0,i.jsx)(su,{
            $top:r.top,
            $left:r.left,
            children:(0,i.jsx)(sh,{
              ref:p,
              children:m.map(e=>(0,i.jsxs)(sf,{
                $isHovered:s===e.id,
                onMouseEnter:t=>k(e.id,t),
                onClick:()=>E(e),
                children:[(0,i.jsx)(sm,{
                  children:e.label
                }),(0,i.jsx)(sg,{
                  children:(0,i.jsx)(sr,{})
                })]
              },e.id))
            })
          }),I&&(0,i.jsx)(sp,{
            $top:d.top,
            $left:d.left,
            children:(0,i.jsx)(sh,{
              children:y(I.id)?(0,i.jsxs)(sf,{
                children:[(0,i.jsx)(ss.Z,{
                  style:{
                    fontSize:14
                  }
                }),(0,i.jsx)(sm,{
                  children:"Loading..."
                })]
              }):0===I.personas.length?(0,i.jsx)(sf,{
                children:(0,i.jsx)(sm,{
                  children:"No personas available"
                })
              }):I.personas.map(e=>{
                let t=(null==h?void 0:h.id)===I.id&&f===e.value;
                return(0,i.jsx)(N.Z,{
                  title:e.description,
                  placement:"right",
                  mouseEnterDelay:.3,
                  children:(0,i.jsxs)(sf,{
                    $isActive:t,
                    onClick:()=>S(I.id,e.value),
                    children:[(0,i.jsx)(sm,{
                      children:e.label
                    }),t&&(0,i.jsx)(sx,{
                      children:(0,i.jsx)(sa.Z,{})
                    })]
                  })
                },"".concat(I.id,"-").concat(e.value))
              })
            })
          })]
        }),document.body)]
      })
    },
    sb=n(83423),
    sw=n(79870),
    sj=n(39618);
    let{
      TextArea:sk
    }=sb.default,
    s_=(0,T.default)(ef.default).withConfig({
      componentId:"sc-b5a57f21-0"
    })([".ant-modal-content{border-radius:8px;padding:0;}.ant-modal-header{padding:32px 32px 0;border-bottom:none;}.ant-modal-body{padding:16px 32px 24px;}.ant-modal-footer{padding:0 32px 32px;border-top:none;}.ant-modal-title{font-size:18px;font-weight:600;color:#161e35;}"]),
    sC=T.default.div.withConfig({
      componentId:"sc-b5a57f21-1"
    })(["display:flex;flex-direction:column;gap:16px;"]),
    sS=T.default.p.withConfig({
      componentId:"sc-b5a57f21-2"
    })(["font-size:14px;line-height:24px;color:#5a5e6b;margin:0 0 8px;"]),
    sI=T.default.div.withConfig({
      componentId:"sc-b5a57f21-3"
    })(["display:flex;flex-direction:column;gap:8px;"]),
    sE=T.default.label.withConfig({
      componentId:"sc-b5a57f21-4"
    })(["font-size:12px;font-weight:500;color:#5a5e6b;"]),
    sF=T.default.span.withConfig({
      componentId:"sc-b5a57f21-5"
    })(["color:",";"],e0.r.colors.surface200.toString()),
    sA=(0,T.default)(sw.default).withConfig({
      componentId:"sc-b5a57f21-6"
    })(["width:100%;.ant-select-selector{border-radius:4px !important;border-color:#d9d9d9 !important;min-height:40px !important;padding:4px 8px !important;}&:hover .ant-select-selector{border-color:#5d97ff !important;}&.ant-select-focused .ant-select-selector{border-color:#5d97ff !important;box-shadow:0 0 0 2px rgba(93,151,255,0.2) !important;}"]),
    sZ=(0,T.default)(sk).withConfig({
      componentId:"sc-b5a57f21-7"
    })(["border-radius:4px !important;resize:none;&:hover{border-color:#5d97ff !important;}&:focus{border-color:#5d97ff !important;box-shadow:0 0 0 2px rgba(93,151,255,0.2) !important;}"]),
    sN=T.default.div.withConfig({
      componentId:"sc-b5a57f21-8"
    })(["display:flex;justify-content:flex-end;gap:16px;margin-top:32px;"]),
    sR=T.default.button.withConfig({
      componentId:"sc-b5a57f21-9"
    })(["padding:8px 24px;font-size:14px;font-weight:500;color:#5a5e6b;background:#ffffff;border:1px solid #d9d9d9;border-radius:4px;cursor:pointer;transition:all 0.2s;&:hover{color:#161e35;border-color:#161e35;}&:disabled{opacity:0.5;cursor:not-allowed;}"]),
    sD=T.default.button.withConfig({
      componentId:"sc-b5a57f21-10"
    })(["padding:8px 24px;font-size:14px;font-weight:500;color:#ffffff;background:#5d97ff;border:none;border-radius:4px;cursor:pointer;transition:all 0.2s;&:hover{background:#4080ff;}&:disabled{opacity:0.5;cursor:not-allowed;}"]);
    var sT=e=>{
      let{
        onFeedbackSubmitted:t
      }=e,
      n=(0,s.I0)(),
      {
        currentAppReducer:{
          _id:a
        }
      }=(0,s.v9)(e=>e),
      {
        modalState:r,
        closeModal:l,
        isSubmitting:d,
        setIsSubmitting:c,
        setSubmittedMessageId:u
      }=il(),
      {
        currentVersion:p
      }=tF(),
      [h,f]=(0,o.useState)([]),
      [m,g]=(0,o.useState)(""),
      x=(0,o.useCallback)(e=>{
        f(e)
      },[]),
      v=(0,o.useCallback)(e=>{
        g(e.target.value)
      },[]),
      y=(0,o.useCallback)(async()=>{
        if(!d){
          c(!0);
          try{
            await is({
              feedback_type:"negative",
              why_bad_response:h.length>0?h.join(", "):null,
              improvement_suggestion:m||null,
              app_id:a||"",
              session_id:r.sessionId,
              invocation_id:r.invocationId
            },p),
            n((0,et.CW)(null,{
              eventName:"wa_ai_submit_feedback",
              track_type:"event",
              eventProperty:{
                feedback:"thumbs_down",
                reason:h.length>0?h.join(", "):void 0,
                link:(0,ty.Y6)(r.invocationId)
              }
            })),
            u(r.messageId),
            t&&t(r.messageId),
            l()
          }
          catch(e){
            console.error("Failed to submit negative feedback:",e)
          }
          finally{
            c(!1)
          }
        }
      },[d,c,r,a,h,m,n,t,l,u,p]),
      b=(0,o.useCallback)(()=>{
        f([]),
        g(""),
        l()
      },[l]),
      w=(0,o.useCallback)(()=>{
        f([]),
        g("")
      },[]);
      return(0,i.jsxs)(s_,{
        title:"Help us improve Tara",
        visible:r.isOpen,
        onCancel:b,
        afterClose:w,
        footer:null,
        width:570,
        centered:!0,
        destroyOnClose:!0,
        children:[(0,i.jsxs)(sC,{
          children:[(0,i.jsx)(sS,{
            children:"Please be as specific as possible when sharing feedback, the more details you share, the better we can help."
          }),(0,i.jsxs)(sI,{
            children:[(0,i.jsx)(sE,{
              children:"Why was it a bad response?"
            }),(0,i.jsx)(sA,{
              placeholder:"Select one or more reasons",
              mode:"multiple",
              maxTagCount:"responsive",
              value:h,
              onChange:x,
              options:io.map(e=>({
                value:e.id,
                label:(0,i.jsxs)("div",{
                  style:{
                    display:"flex",
                    alignItems:"center",
                    gap:"8px"
                  },
                  children:[(0,i.jsx)(sj.default,{
                    checked:h.includes(e.id)
                  }),(0,i.jsx)("span",{
                    children:e.label
                  })]
                }),
                tagLabel:e.label
              })),
              optionLabelProp:"tagLabel",
              getPopupContainer:e=>e.parentElement||document.body
            })]
          }),(0,i.jsxs)(sI,{
            children:[(0,i.jsxs)(sE,{
              children:["How can we improve? ",(0,i.jsx)(sF,{
                children:"(optional)"
              })]
            }),(0,i.jsx)(sZ,{
              placeholder:"Help us understand what happened so we can improve.",
              value:m,
              onChange:v,
              rows:3,
              maxLength:500
            })]
          })]
        }),(0,i.jsxs)(sN,{
          children:[(0,i.jsx)(sR,{
            onClick:b,
            disabled:d,
            children:"Cancel"
          }),(0,i.jsx)(sD,{
            onClick:y,
            disabled:d||0===h.length,
            children:d?"Submitting...":"Submit feedback"
          })]
        })]
      })
    },
    sL=n(80432),
    sM=n(89697),
    sz=n(41664),
    sP=n.n(sz),
    sO=e=>(0,i.jsx)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M12.39 5.256H7.452M9.098 10.744H4.159M9.098 10.744a1.646 1.646 0 1 0 3.292 0 1.646 1.646 0 0 0-3.292 0ZM3.61 5.256a1.646 1.646 0 1 0 3.293 0 1.646 1.646 0 0 0-3.293 0Z",
        stroke:"#000",
        strokeWidth:1.194,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    }),
    sU=e=>(0,i.jsx)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M8 2.667A2.667 2.667 0 0 1 10.663 5.2l.003.134c.099 0 .197.021.286.064l2.022-1.292a.666.666 0 1 1 .718 1.122l-2.01 1.288c.184.474.292.976.318 1.484h2a.667.667 0 1 1 0 1.334h-2V10c0 .343-.044.685-.13 1.017l1.805 1.077a.667.667 0 0 1-.684 1.146l-1.676-1.001a4 4 0 0 1-2.649 1.707V10a.667.667 0 0 0-1.333 0v3.945a4 4 0 0 1-2.649-1.707L3.008 13.24a.667.667 0 1 1-.684-1.145l1.806-1.077A4.008 4.008 0 0 1 4 10v-.666H2A.667.667 0 0 1 2 8h2v-.036c.028-.497.134-.986.316-1.449L2.307 5.228a.667.667 0 1 1 .719-1.122l2.021 1.292.016-.008.045-.018.013-.003.01-.004.022-.005.027-.009.022-.005.023-.002.03-.006h.01l.01-.002.058-.002A2.667 2.667 0 0 1 8 2.667ZM8 4a1.333 1.333 0 0 0-1.334 1.334h2.667A1.333 1.333 0 0 0 8 4Z",
        fill:"#454B5D"
      })
    }),
    sB=n(66642);
    let sV=T.default.div.withConfig({
      componentId:"sc-f832d4e3-0"
    })(["display:flex;align-items:center;gap:8px;padding:4px 8px;border-radius:6px;background:",";"],e=>{
      let{
        $isActive:t
      }=e;
      return t?"#EFF5FF":"#F3F4F5"
    }),
    sW=T.default.input.withConfig({
      componentId:"sc-f832d4e3-1"
    })(["flex:1;border:none;outline:none;background:transparent;font-family:Roboto;font-size:12px;line-height:24px;color:#161E35;&::placeholder{color:#737886;}"]),
    sH=T.default.button.withConfig({
      componentId:"sc-f832d4e3-2"
    })(["background:none;border:none;cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;flex-shrink:0;"]),
    sq=T.default.div.withConfig({
      componentId:"sc-f832d4e3-3"
    })(["display:flex;align-items:center;justify-content:center;flex-shrink:0;"]),
    sQ=()=>(0,i.jsxs)("svg",{
      width:"14",
      height:"14",
      viewBox:"0 0 14 14",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,i.jsx)("circle",{
        cx:"6.5",
        cy:"6.5",
        r:"4",
        stroke:"#737886",
        strokeWidth:"1.2"
      }),(0,i.jsx)("path",{
        d:"M9.5 9.5L12 12",
        stroke:"#737886",
        strokeWidth:"1.2",
        strokeLinecap:"round"
      })]
    }),
    sK=()=>(0,i.jsxs)("svg",{
      width:"14",
      height:"14",
      viewBox:"0 0 14 14",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,i.jsx)("path",{
        d:"M8.5 3.5L5 7L8.5 10.5",
        stroke:"#454B5D",
        strokeWidth:"1.2",
        strokeLinecap:"round",
        strokeLinejoin:"round"
      }),(0,i.jsx)("path",{
        d:"M5 7H12",
        stroke:"#454B5D",
        strokeWidth:"1.2",
        strokeLinecap:"round"
      })]
    }),
    sG=()=>(0,i.jsxs)("svg",{
      width:"12",
      height:"12",
      viewBox:"0 0 12 12",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,i.jsx)("path",{
        d:"M3 3L9 9",
        stroke:"#737886",
        strokeWidth:"1.2",
        strokeLinecap:"round"
      }),(0,i.jsx)("path",{
        d:"M9 3L3 9",
        stroke:"#737886",
        strokeWidth:"1.2",
        strokeLinecap:"round"
      })]
    });
    var s$=e=>{
      let{
        value:t,
        onChange:n,
        isSearchMode:s,
        onEnterSearchMode:a,
        onExitSearchMode:r,
        onSubmit:l
      }=e,
      d=(0,o.useRef)(null);
      return(0,o.useEffect)(()=>{
        s&&d.current&&d.current.focus()
      },[s]),
      (0,i.jsxs)(sV,{
        $isActive:s,
        children:[s?(0,i.jsx)(sH,{
          onClick:r,
          type:"button",
          children:(0,i.jsx)(sK,{})
        }):(0,i.jsx)(sq,{
          children:(0,i.jsx)(sQ,{})
        }),(0,i.jsx)(sW,{
          ref:d,
          type:"text",
          placeholder:"Search chats",
          value:t,
          onChange:e=>n(e.target.value),
          onFocus:a,
          onKeyDown:e=>{
            "Enter"===e.key&&t.trim()&&l()
          }
        }),s&&t&&(0,i.jsx)(sH,{
          onClick:()=>{
            n("")
          },
          type:"button",
          children:(0,i.jsx)(sG,{})
        })]
      })
    },
    sY=e=>(0,i.jsx)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M13.625 9.875a1.25 1.25 0 0 1-1.25 1.25h-7.5l-2.5 2.5v-10a1.25 1.25 0 0 1 1.25-1.25h8.75a1.25 1.25 0 0 1 1.25 1.25v6.25Z",
        stroke:"#A2A5AE",
        strokeWidth:1.33,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    }),
    sX=n(68457),
    sJ=n(12016),
    s0=e=>(0,i.jsx)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M8 1.665a.762.762 0 0 1 .68.417l.004.008 1.49 2.854.147.284.315.061 3.063.6c.591.115.858.882.422 1.363l-2.155 2.38-.204.227.037.302.403 3.247c.083.67-.573 1.106-1.104.843l-2.802-1.389L8 12.716l-.295.146-2.803 1.389c-.498.247-1.107-.122-1.112-.72l.008-.123.403-3.247.037-.303-.204-.225L1.88 7.252c-.436-.481-.17-1.248.422-1.363l3.063-.6.315-.061.147-.284 1.49-2.854.004-.008A.763.763 0 0 1 8 1.665Z",
        stroke:"#161E35",
        strokeWidth:1.33
      })
    }),
    s1=e=>(0,i.jsx)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M8 12.89h5.501M10.75 2.804a1.297 1.297 0 0 1 1.834 1.834l-7.64 7.64-2.445.612.61-2.445 7.641-7.64ZM9.834 3.721l1.834 1.834",
        stroke:"#161E35",
        strokeWidth:1.33,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    }),
    s2=e=>(0,i.jsx)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M2.499 4.333H13.5M12.279 4.333v8.557c0 .611-.612 1.223-1.223 1.223H4.944c-.612 0-1.223-.612-1.223-1.223V4.333M5.555 4.332V3.11c0-.611.611-1.223 1.223-1.223h2.445c.61 0 1.222.612 1.222 1.223v1.222M6.777 7.389v3.667M9.223 7.389v3.667",
        stroke:"#F4584C",
        strokeWidth:1.33,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    }),
    s5=e=>(0,i.jsx)("svg",{
      width:15,
      height:4,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M2.615 2.022a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM8.115 2.022a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM13.615 2.022a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z",
        stroke:"#161E35",
        strokeWidth:1.5,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    });
    let s4=(0,T.createGlobalStyle)([".chat-item-dropdown{border-radius:8px;overflow:hidden;box-shadow:none;border:1px solid ",";.ant-dropdown-menu{padding:10px;display:flex;flex-direction:column;gap:12px;.ant-dropdown-menu-item{padding:0;margin:0;background:transparent !important;.ant-dropdown-menu-title-content{padding:4px 2px;border-radius:4px;transition:background 0.1s ease-in-out;}}.ant-dropdown-menu-item-active:not(.ant-dropdown-menu-item-disabled){.ant-dropdown-menu-title-content{background:",";}&:last-of-type{.ant-dropdown-menu-title-content{background:rgba(254,238,237,1);}}}.ant-dropdown-menu-item-disabled{.ant-dropdown-menu-title-content{opacity:0.5;}}}}"],e0.r.colors.surface10.toString(),e0.r.colors.primary10.toString()),
    s6=T.default.button.withConfig({
      componentId:"sc-d948ecdb-0"
    })(["background:none;border:none;cursor:pointer;padding:4px;border-radius:4px;display:flex;align-items:center;justify-content:center;width:24px;height:24px;flex-shrink:0;svg{transform:rotate(90deg);}&:hover{background:rgba(0,0,0,0.06);}"]),
    s3=T.default.div.withConfig({
      componentId:"sc-d948ecdb-1"
    })(["display:flex;align-items:center;gap:6px;font-family:Roboto;font-size:13px;font-weight:400;color:",";"],e0.r.colors.surface500.toString()),
    s8=(0,T.default)(s3).withConfig({
      componentId:"sc-d948ecdb-2"
    })(["color:#DC4F44;"]),
    s7=T.default.div.withConfig({
      componentId:"sc-d948ecdb-3"
    })(["width:16px;height:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;svg{width:16px;height:16px;}"]),
    s9=(0,T.default)(s7).withConfig({
      componentId:"sc-d948ecdb-4"
    })(["svg path{stroke:",";fill:",";}"],e=>{
      let{
        $isPinned:t
      }=e;
      return t?"#F5A623":e0.r.colors.surface500.toString()
    },e=>{
      let{
        $isPinned:t
      }=e;
      return t?"#F5A623":"none"
    }),
    ae=(0,T.default)(s7).withConfig({
      componentId:"sc-d948ecdb-5"
    })(["svg path{stroke:",";}"],e0.r.colors.surface500.toString()),
    at=(0,T.default)(s7).withConfig({
      componentId:"sc-d948ecdb-6"
    })(["svg path{stroke:",";}"],e0.r.colors.surface500.toString()),
    an=(0,T.default)(s7).withConfig({
      componentId:"sc-d948ecdb-7"
    })(["svg path{stroke:#DC4F44;}"]);
    var ai=e=>{
      let{
        chat:t,
        visible:n,
        onVisibleChange:a,
        onRename:r,
        onDelete:l,
        onTogglePin:d,
        onShare:c
      }=e,
      u=(0,s.I0)(),
      p=o.useCallback(()=>{
        d(t),
        a(!1)
      },[t,d,a]),
      h=o.useCallback(()=>{
        r(t),
        a(!1)
      },[t,r,a]),
      f=o.useCallback(()=>{
        l(t),
        a(!1)
      },[t,l,a]),
      m=o.useCallback(()=>{
        u((0,et.CW)(null,{
          eventName:"wa_tara_share_chat",
          track_type:"event",
          eventProperty:{
            source:"list"
          }
        })),
        c(t),
        a(!1)
      },[t,u,c,a]),
      g=o.useCallback(e=>{
        e.stopPropagation()
      },[]),
      x=o.useCallback(()=>(0,i.jsxs)(sX.default,{
        children:[(0,i.jsx)(sX.default.Item,{
          onClick:p,
          children:(0,i.jsxs)(s3,{
            children:[(0,i.jsx)(s9,{
              $isPinned:t.is_pinned,
              children:(0,i.jsx)(s0,{})
            }),t.is_pinned?"Remove from favorites":"Add to favorites"]
          })
        },"pin"),(0,i.jsx)(sX.default.Item,{
          onClick:h,
          children:(0,i.jsxs)(s3,{
            children:[(0,i.jsx)(ae,{
              children:(0,i.jsx)(s1,{})
            }),"Rename"]
          })
        },"rename"),(0,i.jsx)(sX.default.Item,{
          onClick:m,
          children:(0,i.jsxs)(s3,{
            children:[(0,i.jsx)(at,{
              children:(0,i.jsx)(tr,{})
            }),"Share chat"]
          })
        },"share"),(0,i.jsx)(sX.default.Item,{
          onClick:f,
          children:(0,i.jsxs)(s8,{
            children:[(0,i.jsx)(an,{
              children:(0,i.jsx)(s2,{})
            }),"Delete"]
          })
        },"delete")]
      }),[t.is_pinned,p,h,m,f]);
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(s4,{}),(0,i.jsx)(sJ.Z,{
          overlayClassName:"chat-item-dropdown",
          overlay:x,
          trigger:["click"],
          visible:n,
          onVisibleChange:a,
          placement:"bottomRight",
          children:(0,i.jsx)(s6,{
            type:"button",
            onClick:g,
            children:(0,i.jsx)(s5,{})
          })
        })]
      })
    };
    let ao=T.default.div.withConfig({
      componentId:"sc-60e080d2-0"
    })(["position:absolute;inset:0;display:flex;align-items:center;justify-content:center;"]),
    as=T.default.div.withConfig({
      componentId:"sc-60e080d2-1"
    })(["position:absolute;inset:0;opacity:",";transition:opacity 0.1s;display:flex;align-items:center;justify-content:center;"],e=>{
      let{
        $visible:t
      }=e;
      return t?1:0
    }),
    aa=T.default.div.withConfig({
      componentId:"sc-60e080d2-2"
    })(["position:relative;flex-shrink:0;margin-left:4px;width:24px;height:24px;"]),
    ar=T.default.div.withConfig({
      componentId:"sc-60e080d2-3"
    })(["display:flex;align-items:center;justify-content:space-between;padding:",";border-radius:4px;cursor:pointer;transition:background-color 0.15s;background:",";"," &:hover{background:",";","{display:none;}","{opacity:1;}}"],e=>{
      let{
        $isSearchResult:t
      }=e;
      return t?"14px 10px":"4px 10px"
    },e=>{
      let{
        $isActive:t
      }=e;
      return t?"#DFEAFF":"transparent"
    },e=>{
      let{
        $isSearchResult:t,
        $isLastSearchResult:n
      }=e;
      return t&&!n&&"border-bottom: 1px solid #E8E8EB;"
    },e=>{
      let{
        $isActive:t
      }=e;
      return t?"#DFEAFF":"#F5F5F5"
    },ao,as),
    al=T.default.div.withConfig({
      componentId:"sc-60e080d2-4"
    })(["display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;"]),
    ad=T.default.div.withConfig({
      componentId:"sc-60e080d2-5"
    })(["display:flex;align-items:flex-start;gap:8px;"]),
    ac=T.default.div.withConfig({
      componentId:"sc-60e080d2-6"
    })(["width:16px;height:16px;flex-shrink:0;display:flex;align-items:center;justify-content:center;margin-top:4px;"]),
    au=T.default.span.withConfig({
      componentId:"sc-60e080d2-7"
    })(["font-family:Roboto;font-size:13px;font-weight:400;line-height:24px;color:",";white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;min-width:0;"],e=>{
      let{
        $isActive:t
      }=e;
      return t?e0.r.colors.surface500.toString():e0.r.colors.surface400.toString()
    }),
    ap=T.default.span.withConfig({
      componentId:"sc-60e080d2-8"
    })(["font-family:Roboto;font-size:11px;font-weight:400;line-height:16px;color:#A2A5AE;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;min-width:0;strong{font-weight:700;color:#161E35;}"]),
    ah=e=>{
      let t;
      let n=new Date(e),
      i=Math.floor((new Date().getTime()-n.getTime())/864e5),
      o=n.toLocaleDateString("en-US",{
        day:"numeric",
        month:"short",
        year:"numeric"
      });
      return t=0===i?"Today":1===i?"Yesterday":i<7?"".concat(i," days ago"):i<30?"".concat(Math.floor(i/7)," weeks ago"):"".concat(Math.floor(i/30)," months ago"),
      "Last modified: ".concat(o," (").concat(t,")")
    },
    af=(e,t)=>{
      let n=e.replace(/\*\*/g,"").replace(/\n/g," "),
      i=n.toLowerCase().indexOf(t.toLowerCase());
      if(-1===i)return n;
      let o=Math.max(0,i-10),
      s=Math.min(n.length,o+45);
      s===n.length&&(o=Math.max(0,s-45));
      let a=n.slice(o,s);
      return o>0&&(a="...".concat(a)),
      s<n.length&&(a+="..."),
      a
    },
    am=(e,t)=>{
      if(!t)return e;
      let n=RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi"),
      o=[],
      s=0,
      a=n.exec(e);
      for(;null!==a;)a.index>s&&o.push(e.slice(s,a.index)),
      o.push((0,i.jsx)("strong",{
        children:a[0]
      },a.index)),
      s=n.lastIndex,
      a=n.exec(e);
      return s<e.length&&o.push(e.slice(s)),
      o.length>0?o:e
    },
    ag=()=>(0,i.jsx)("svg",{
      width:"16",
      height:"16",
      viewBox:"0 0 16 16",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:(0,i.jsx)("path",{
        d:"M8 1.5L9.79 5.13L13.81 5.72L10.905 8.55L11.58 12.55L8 10.67L4.42 12.55L5.095 8.55L2.19 5.72L6.21 5.13L8 1.5Z",
        fill:"#F5A623",
        stroke:"#F5A623",
        strokeWidth:"0.8",
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    });
    var ax=e=>{
      let{
        chat:t,
        isActive:n,
        isLast:s,
        searchQuery:a,
        onSelect:r,
        onRename:l,
        onDelete:d,
        onTogglePin:c,
        onShare:u
      }=e,
      [p,h]=(0,o.useState)(!1),
      f=t.updated_at?ah(t.updated_at):void 0,
      m=!!a,
      g=t.title||"New Chat";
      return(0,i.jsx)(N.Z,{
        title:p?void 0:f,
        placement:"topLeft",
        mouseEnterDelay:.1,
        children:(0,i.jsxs)(ar,{
          $isActive:n,
          $isSearchResult:m,
          $isLastSearchResult:m&&s,
          onClick:()=>r(t.session_id,t.persona),
          children:[m?(0,i.jsxs)(al,{
            children:[(0,i.jsxs)(ad,{
              children:[(0,i.jsx)(ac,{
                children:t.is_pinned?(0,i.jsx)(ag,{}):(0,i.jsx)(sY,{})
              }),(0,i.jsx)(au,{
                $isActive:n,
                children:am(g,a)
              })]
            }),t.search_snippet&&(0,i.jsx)(ap,{
              children:am(af(t.search_snippet,a),a)
            })]
          }):(0,i.jsx)(au,{
            $isActive:n,
            children:g
          }),(0,i.jsxs)(aa,{
            onClick:e=>e.stopPropagation(),
            children:[!m&&t.is_pinned&&!p&&(0,i.jsx)(ao,{
              children:(0,i.jsx)(ag,{})
            }),(0,i.jsx)(as,{
              $visible:p,
              children:(0,i.jsx)(ai,{
                chat:t,
                visible:p,
                onVisibleChange:h,
                onRename:l,
                onDelete:d,
                onTogglePin:c,
                onShare:u
              })
            })]
          })]
        })
      })
    };
    let av=T.default.div.withConfig({
      componentId:"sc-b1cec4ba-0"
    })(["flex:1;overflow-y:auto;overflow-x:hidden;display:flex;flex-direction:column;"]),
    ay=T.default.div.withConfig({
      componentId:"sc-b1cec4ba-1"
    })(["display:flex;align-items:center;justify-content:center;padding:32px 16px;text-align:center;font-family:Roboto;font-size:13px;color:#A2A5AE;line-height:1.5;"]),
    ab=T.default.div.withConfig({
      componentId:"sc-b1cec4ba-2"
    })(["display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;padding:16px;gap:16px;"]),
    aw=T.default.span.withConfig({
      componentId:"sc-b1cec4ba-3"
    })(["font-family:Roboto;font-size:13px;color:#A2A5AE;text-align:center;margin-top:16px;"]),
    aj=T.default.div.withConfig({
      componentId:"sc-b1cec4ba-4"
    })(["display:flex;flex-direction:column;gap:",";"],e=>{
      let{
        $isSearchMode:t
      }=e;
      return t?"0":"12px"
    });
    var ak=e=>{
      let{
        chats:t,
        activeChatId:n,
        activeChatPersona:o,
        isLoading:s,
        searchQuery:a,
        onSelect:r,
        onRename:l,
        onDelete:d,
        onTogglePin:c,
        onShare:u
      }=e;
      return s?(0,i.jsx)(av,{
        children:(0,i.jsxs)(ab,{
          children:[(0,i.jsx)(eO.$j,{
            "data-size":"sm"
          }),a&&(0,i.jsxs)(aw,{
            children:["Searching chats for '",a,"'"]
          })]
        })
      }):0===t.length?(0,i.jsx)(av,{
        children:(0,i.jsx)(ay,{
          children:a?"No results found for '".concat(a,"'"):"No chats yet. Start a new conversation!"
        })
      }):(0,i.jsx)(av,{
        children:(0,i.jsx)(aj,{
          $isSearchMode:!!a,
          children:t.map((e,s)=>(0,i.jsx)(ax,{
            chat:e,
            isActive:e.session_id===n&&e.persona===o,
            isLast:s===t.length-1,
            searchQuery:a||void 0,
            onSelect:r,
            onRename:l,
            onDelete:d,
            onTogglePin:c,
            onShare:u
          },"".concat(e.session_id,"-").concat(e.persona)))
        })
      })
    };
    let a_=(0,T.createGlobalStyle)([".rename-chat-modal{.ant-modal-content{border-radius:8px;box-shadow:none;.ant-modal-body{padding:32px;}}}"]),
    aC=T.default.h2.withConfig({
      componentId:"sc-7d4d0f87-0"
    })(["font-family:Roboto;font-weight:500;font-size:18px;line-height:normal;color:",";margin:0;"],e0.r.colors.surface500.toString()),
    aS=T.default.span.withConfig({
      componentId:"sc-7d4d0f87-1"
    })(["font-family:Roboto;font-weight:500;font-size:13px;line-height:24px;color:",";"],e0.r.colors.surface500.toString()),
    aI=T.default.div.withConfig({
      componentId:"sc-7d4d0f87-2"
    })(["margin-top:4px;display:flex;flex-direction:column;gap:4px;"]),
    aE=T.default.input.withConfig({
      componentId:"sc-7d4d0f87-3"
    })(["padding:10px 12px;border:1px solid ",";border-radius:8px;font-family:Roboto;font-size:14px;color:",";outline:none;transition:border-color 0.2s;&:focus{border-color:",";}"],e=>{
      let{
        $hasError:t
      }=e;
      return t?"#F4584C":e0.r.colors.surface10.toString()
    },e0.r.colors.surface500.toString(),e=>{
      let{
        $hasError:t
      }=e;
      return t?"#F4584C":e0.r.colors.primary500.toString()
    }),
    aF=T.default.span.withConfig({
      componentId:"sc-7d4d0f87-4"
    })(["font-family:Roboto;font-size:11px;color:#F4584C;"]),
    aA=T.default.div.withConfig({
      componentId:"sc-7d4d0f87-5"
    })(["display:flex;justify-content:flex-end;gap:16px;margin-top:32px;"]),
    aZ=(0,T.default)(eO.zx).withConfig({
      componentId:"sc-7d4d0f87-6"
    })(["background:"," !important;color:"," !important;border:none !important;min-width:100px !important;&:hover:not(:disabled){background:#E6F2FF !important;color:"," !important;}"],e0.r.colors.primarySnow.toString(),e0.r.colors.primary500.toString(),e0.r.colors.primary600.toString()),
    aN=(0,T.default)(eO.zx).withConfig({
      componentId:"sc-7d4d0f87-7"
    })(["background:"," !important;color:white !important;border:none !important;min-width:100px !important;&:hover:not(:disabled){background:"," !important;}&:disabled{opacity:0.6;}"],e0.r.colors.primary500.toString(),e0.r.colors.primary600.toString());
    var aR=e=>{
      let{
        visible:t,
        currentName:n,
        onCancel:s,
        onConfirm:a,
        isRenaming:r
      }=e,
      [l,d]=(0,o.useState)(n);
      (0,o.useEffect)(()=>{
        t&&d(n)
      },[t,n]);
      let c=l.length>35,
      u=l.trim().length>0&&l.trim()!==n&&!c,
      p=()=>{
        u&&!r&&a(l.trim())
      };
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(a_,{}),(0,i.jsxs)(ef.default,{
          visible:t,
          closable:!1,
          footer:null,
          className:"rename-chat-modal",
          centered:!0,
          width:420,
          children:[(0,i.jsx)(aC,{
            children:"Rename chat"
          }),(0,i.jsx)(aS,{
            children:"Chat name"
          }),(0,i.jsxs)(aI,{
            children:[(0,i.jsx)(aE,{
              type:"text",
              value:l,
              onChange:e=>d(e.target.value),
              onKeyDown:e=>{
                "Enter"===e.key&&p()
              },
              $hasError:c,
              autoFocus:!0
            }),c&&(0,i.jsxs)(aF,{
              children:["Chat title must be up to ",35," characters."]
            })]
          }),(0,i.jsxs)(aA,{
            children:[(0,i.jsx)(aZ,{
              type:"button",
              variant:"ghost",
              size:"large",
              onClick:s,
              disabled:r,
              children:"Cancel"
            }),(0,i.jsx)(aN,{
              type:"button",
              variant:"primary",
              size:"large",
              onClick:p,
              disabled:!u||r,
              children:"Save"
            })]
          })]
        })]
      })
    };
    let aD=(0,T.createGlobalStyle)([".delete-chat-modal{.ant-modal-content{border-radius:8px;box-shadow:none;.ant-modal-body{padding:32px;}}}"]),
    aT=T.default.div.withConfig({
      componentId:"sc-771ec9f1-0"
    })(["display:flex;flex-direction:column;gap:12px;"]),
    aL=T.default.h2.withConfig({
      componentId:"sc-771ec9f1-1"
    })(["font-family:Roboto;font-weight:500;font-size:18px;line-height:normal;color:",";margin:0;"],e0.r.colors.surface500.toString()),
    aM=T.default.p.withConfig({
      componentId:"sc-771ec9f1-2"
    })(["font-family:Roboto;font-weight:400;font-size:12px;line-height:24px;color:",";margin:0;"],e0.r.colors.surface400.toString()),
    az=T.default.div.withConfig({
      componentId:"sc-771ec9f1-3"
    })(["display:flex;justify-content:flex-end;gap:16px;margin-top:32px;"]),
    aP=(0,T.default)(eO.zx).withConfig({
      componentId:"sc-771ec9f1-4"
    })(["background:"," !important;color:"," !important;border:none !important;min-width:100px !important;&:hover:not(:disabled){background:#E6F2FF !important;color:"," !important;}"],e0.r.colors.primarySnow.toString(),e0.r.colors.primary500.toString(),e0.r.colors.primary600.toString()),
    aO=(0,T.default)(eO.zx).withConfig({
      componentId:"sc-771ec9f1-5"
    })(["background:#FEEEED !important;color:#F4584C !important;border:none !important;min-width:130px !important;&:hover:not(:disabled){background:#FDD9D6 !important;color:#E34238 !important;}&:disabled{opacity:0.6;}"]);
    var aU=e=>{
      let{
        visible:t,
        chatName:n,
        onCancel:o,
        onConfirm:s,
        isDeleting:a
      }=e;
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(aD,{}),(0,i.jsxs)(ef.default,{
          visible:t,
          closable:!1,
          footer:null,
          className:"delete-chat-modal",
          centered:!0,
          width:570,
          children:[(0,i.jsxs)(aT,{
            children:[(0,i.jsxs)(aL,{
              children:["Delete “",n,"”?"]
            }),(0,i.jsx)(aM,{
              children:"This action cannot be undone and all messages will be permanently deleted."
            })]
          }),(0,i.jsxs)(az,{
            children:[(0,i.jsx)(aP,{
              type:"button",
              variant:"ghost",
              size:"large",
              onClick:o,
              disabled:a,
              children:"Cancel"
            }),(0,i.jsx)(aO,{
              type:"button",
              variant:"primary",
              size:"large",
              onClick:s,
              disabled:a,
              children:"Delete"
            })]
          })]
        })]
      })
    };
    let aB=(0,T.createGlobalStyle)([".chat-limit-modal{.ant-modal-content{border-radius:8px;box-shadow:none;.ant-modal-body{padding:32px;}}}"]),
    aV=T.default.div.withConfig({
      componentId:"sc-8f0ccc1-0"
    })(["display:flex;flex-direction:column;gap:32px;"]),
    aW=T.default.div.withConfig({
      componentId:"sc-8f0ccc1-1"
    })(["display:flex;flex-direction:column;gap:12px;"]),
    aH=T.default.div.withConfig({
      componentId:"sc-8f0ccc1-2"
    })(["display:flex;align-items:center;gap:8px;"]),
    aq=()=>(0,i.jsxs)("svg",{
      width:"24",
      height:"24",
      viewBox:"0 0 24 24",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,i.jsx)("circle",{
        cx:"12",
        cy:"12",
        r:"10",
        fill:"#FBBF24"
      }),(0,i.jsx)("path",{
        d:"M12 8V13",
        stroke:"white",
        strokeWidth:"2",
        strokeLinecap:"round"
      }),(0,i.jsx)("circle",{
        cx:"12",
        cy:"16",
        r:"1",
        fill:"white"
      })]
    }),
    aQ=T.default.h2.withConfig({
      componentId:"sc-8f0ccc1-3"
    })(["font-family:Roboto;font-weight:500;font-size:18px;line-height:normal;color:",";margin:0;"],e0.r.colors.surface500.toString()),
    aK=T.default.p.withConfig({
      componentId:"sc-8f0ccc1-4"
    })(["font-family:Roboto;font-weight:400;font-size:12px;line-height:24px;color:",";margin:0;"],e0.r.colors.surface400.toString()),
    aG=T.default.div.withConfig({
      componentId:"sc-8f0ccc1-5"
    })(["display:flex;justify-content:flex-end;"]),
    a$=(0,T.default)(eO.zx).withConfig({
      componentId:"sc-8f0ccc1-6"
    })(["background:"," !important;color:white !important;border:none !important;min-width:100px !important;&:hover:not(:disabled){background:"," !important;}"],e0.r.colors.primary500.toString(),e0.r.colors.primary600.toString());
    var aY=e=>{
      let{
        visible:t,
        onClose:n,
        title:o,
        description:s
      }=e;
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(aB,{}),(0,i.jsx)(ef.default,{
          visible:t,
          closable:!1,
          footer:null,
          className:"chat-limit-modal",
          centered:!0,
          width:470,
          children:(0,i.jsxs)(aV,{
            children:[(0,i.jsxs)(aW,{
              children:[(0,i.jsxs)(aH,{
                children:[(0,i.jsx)(aq,{}),(0,i.jsx)(aQ,{
                  children:o
                })]
              }),(0,i.jsx)(aK,{
                children:s
              })]
            }),(0,i.jsx)(aG,{
              children:(0,i.jsx)(a$,{
                type:"button",
                variant:"primary",
                size:"large",
                onClick:n,
                children:"Got it"
              })
            })]
          })
        })]
      })
    },
    aX=e=>(0,i.jsxs)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:24,
      height:24,
      fill:"none",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:24,
        height:24,
        fill:"#fff",
        rx:12
      }),(0,i.jsx)("path",{
        fill:"#5d97ff",
        fillRule:"evenodd",
        d:"M16.144 8.722c-.266-.206-.694-.258-1.23-.015a.873.873 0 0 1-.72-1.591c.905-.41 2.075-.506 3.019.224q.525.406.931.932c1.06 1.37.41 3.14-.533 4.145a45 45 0 0 1-2.234 2.234c-1.006.944-2.776 1.593-4.145.533a5.2 5.2 0 0 1-.932-.931 2.65 2.65 0 0 1-.535-1.82.873.873 0 0 1 1.743.116.9.9 0 0 0 .174.635q.27.348.618.619c.377.291 1.16.252 1.882-.426a44 44 0 0 0 2.155-2.155c.678-.723.717-1.505.425-1.882a3.4 3.4 0 0 0-.618-.618m-7.569.62c1.012-.947 2.779-1.558 4.149-.491q.529.412.94.94a2.7 2.7 0 0 1 .555 1.827.873.873 0 0 1-1.744-.097.95.95 0 0 0-.189-.657 3.6 3.6 0 0 0-.635-.635c-.4-.311-1.182-.267-1.882.388a42 42 0 0 0-2.13 2.13c-.655.7-.699 1.482-.388 1.881q.278.358.636.636c.283.22.718.27 1.241.04a.873.873 0 1 1 .707 1.596c-.913.405-2.08.476-3.022-.258a5.4 5.4 0 0 1-.94-.94c-1.067-1.37-.456-3.138.49-4.149a43 43 0 0 1 2.212-2.212",
        clipRule:"evenodd"
      })]
    });
    let aJ={
      [ty.iK.UAT]:"uat",
      [ty.iK.STAGING]:"stg",
      [ty.iK.EXPERIENCE]:"experience",
      [ty.iK.CX]:"cx",
      [ty.iK.BIZOPS]:"bizops",
      [ty.iK.RESEARCH]:"research"
    },
    a0=(0,T.createGlobalStyle)([".share-chat-modal{.ant-modal-content{border-radius:12px;box-shadow:0px 8px 32px rgba(0,0,0,0.12);.ant-modal-close{top:16px;right:16px;}.ant-modal-body{padding:32px;}}}"]),
    a1=T.default.div.withConfig({
      componentId:"sc-8ddf54ef-0"
    })(["display:flex;flex-direction:column;gap:24px;"]),
    a2=T.default.h2.withConfig({
      componentId:"sc-8ddf54ef-1"
    })(["font-family:Roboto;font-weight:500;font-size:18px;line-height:normal;color:",";margin:0;"],e0.r.colors.surface500.toString()),
    a5=T.default.p.withConfig({
      componentId:"sc-8ddf54ef-2"
    })(["font-family:Roboto;font-weight:400;font-size:12px;line-height:24px;color:",";margin:0;"],e0.r.colors.surface400.toString()),
    a4=T.default.div.withConfig({
      componentId:"sc-8ddf54ef-3"
    })(["display:flex;align-items:center;justify-content:space-between;gap:12px;padding:4px;background:",";border-radius:40px;"],e0.r.colors.surface05.toString());
    T.default.div.withConfig({
      componentId:"sc-8ddf54ef-4"
    })([""]);
    let a6=T.default.span.withConfig({
      componentId:"sc-8ddf54ef-5"
    })(["flex:1;font-family:Roboto;font-size:12px;color:",";white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;padding-right:12px;"],e0.r.colors.surface300.toString()),
    a3=T.default.button.withConfig({
      componentId:"sc-8ddf54ef-6"
    })(["flex-shrink:0;padding:0 6px;border-radius:46px;border:none;font-family:Roboto;font-size:12px;line-height:24px;font-weight:500;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all 0.2s ease;background:",";color:white;&:hover{background:",";}"],e=>{
      let{
        $copied:t
      }=e;
      return t?"#4CAF50":e0.r.colors.primary500.toString()
    },e=>{
      let{
        $copied:t
      }=e;
      return t?"#4CAF50":e0.r.colors.primary600.toString()
    }),
    a8=T.default.div.withConfig({
      componentId:"sc-8ddf54ef-7"
    })(["position:relative;display:flex;align-items:center;justify-content:center;padding:16px;min-height:48px;"]),
    a7=T.default.p.withConfig({
      componentId:"sc-8ddf54ef-8"
    })(["font-family:Roboto;font-size:13px;color:#DC4F44;margin:0;text-align:center;"]),
    a9=T.default.strong.withConfig({
      componentId:"sc-8ddf54ef-9"
    })(["font-weight:500;color:",";"],e0.r.colors.surface500.toString()),
    re=()=>(0,i.jsx)("svg",{
      width:"14",
      height:"14",
      viewBox:"0 0 14 14",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:(0,i.jsx)("path",{
        d:"M11.5 3.5L5.5 10L2.5 7",
        stroke:"white",
        strokeWidth:"2",
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    });
    var rt=e=>{
      let{
        visible:t,
        onCancel:n,
        chatTitle:a,
        sessionId:r,
        appId:l
      }=e,
      [d,c]=(0,o.useState)(null),
      [u,p]=(0,o.useState)(!1),
      [h,f]=(0,o.useState)(!1),
      [m,g]=(0,o.useState)(null),
      x=(0,s.I0)(),
      {
        currentVersion:v
      }=tF(),
      {
        currentOrgReducer:y
      }=(0,s.v9)(e=>e),
      b=(null==y?void 0:y.organizationName)||"your organization",
      w=(0,o.useCallback)(()=>{
        c(null),
        p(!1),
        f(!1),
        g(null)
      },[]);
      (0,o.useEffect)(()=>{
        if(!t){
          w();
          return
        }
        r&&l&&(async()=>{
          p(!0),
          g(null);
          try{
            let e=await (0,tZ.I8)(r,l,v);
            if(e.success&&e.share_url){
              let t=aJ[v],
              n=t?"".concat(e.share_url.includes("?")?"&":"?","env=").concat(t):"",
              i="".concat("https://app.uxcam.com").concat(e.share_url).concat(n);
              c(i)
            }
            else g("Failed to generate share link. Please try again.")
          }
          catch(n){
            var e,
            t;
            g((null==n?void 0:null===(t=n.response)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.detail)||"Failed to generate share link. Please try again.")
          }
          finally{
            p(!1)
          }
        })()
      },[t,r,l,v,x,w]);
      let j=(0,o.useCallback)(async()=>{
        if(d&&!h)try{
          await navigator.clipboard.writeText(d),
          f(!0),
          x((0,et.CW)(null,{
            eventName:"wa_tara_share_chat_link",
            track_type:"event",
            eventProperty:{
              chat_id:r
            }
          })),
          setTimeout(()=>f(!1),2e3)
        }
        catch(t){
          let e=document.createElement("textarea");
          e.value=d,
          document.body.appendChild(e),
          e.select(),
          document.execCommand("copy"),
          document.body.removeChild(e),
          f(!0),
          setTimeout(()=>f(!1),2e3)
        }
      },[d,h,x]);
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(a0,{}),(0,i.jsx)(ef.default,{
          visible:t,
          onCancel:n,
          closable:!0,
          footer:null,
          className:"share-chat-modal",
          centered:!0,
          width:700,
          destroyOnClose:!0,
          children:(0,i.jsxs)(a1,{
            children:[(0,i.jsx)(a2,{
              children:"Share a copy of this chat"
            }),(0,i.jsxs)(a5,{
              children:["Copy this link to share ",(0,i.jsxs)(a9,{
                children:["“",a,"”"]
              })," with your team. Only members with access to ",(0,i.jsxs)(a9,{
                children:["“",b,"”"]
              })," can access it.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Recipients get their own copy to explore; your original chat and history will remain exactly as they are."]
            }),u&&(0,i.jsx)(a8,{
              children:(0,i.jsx)(eO.$j,{
                "data-size":"sm"
              })
            }),m&&(0,i.jsx)(a7,{
              children:m
            }),d&&!u&&!m&&(0,i.jsxs)(a4,{
              children:[(0,i.jsx)(aX,{}),(0,i.jsx)(a6,{
                title:d,
                children:d
              }),(0,i.jsx)(a3,{
                onClick:j,
                $copied:h,
                children:h?(0,i.jsxs)(i.Fragment,{
                  children:[(0,i.jsx)(re,{}),"Copied"]
                }):"Copy link"
              })]
            })]
          })
        })]
      })
    };
    let rn=T.default.div.withConfig({
      componentId:"sc-65001c3-0"
    })(["position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.2);z-index:10;opacity:",";visibility:",";transition:opacity 0.3s ease,visibility 0.3s ease;border-radius:0 0 6px 6px;"],e=>{
      let{
        $isOpen:t
      }=e;
      return t?1:0
    },e=>{
      let{
        $isOpen:t
      }=e;
      return t?"visible":"hidden"
    }),
    ri=T.default.div.withConfig({
      componentId:"sc-65001c3-1"
    })(["position:absolute;top:1px;left:",";width:86%;min-width:260px;height:calc(100% - 2px);background:white;z-index:11;transform:translateX(",");transition:transform 0.3s ease;display:flex;flex-direction:column;box-shadow:",";;border-radius:6px 0 0 6px;"],e=>{
      let{
        $isOpen:t
      }=e;
      return t?"1px":"0px"
    },e=>{
      let{
        $isOpen:t
      }=e;
      return t?"0":"-100%"
    },e=>{
      let{
        $isOpen:t
      }=e;
      return t?"2px 0 8px rgba(0, 0, 0, 0.1)":"none"
    }),
    ro=T.default.div.withConfig({
      componentId:"sc-65001c3-2"
    })(["flex:1;display:flex;flex-direction:column;gap:18px;padding:20px;overflow:hidden;"]),
    rs=T.default.div.withConfig({
      componentId:"sc-65001c3-3"
    })(["padding:1px;background:linear-gradient(233.37deg,#EE5EDD 48.25%,#49C5FF 81.95%);border-radius:4px;overflow:hidden;flex-shrink:0;"]),
    ra=T.default.button.withConfig({
      componentId:"sc-65001c3-4"
    })(["width:100%;height:32px;display:flex;align-items:center;justify-content:center;gap:4px;border:none;background:white;border-radius:3px;font-family:Roboto;font-size:13px;font-weight:400;color:#161E35;cursor:pointer;transition:background-color 0.15s;&:hover{background:#F9F9FB;}"]),
    rr=T.default.div.withConfig({
      componentId:"sc-65001c3-5"
    })(["flex:1;display:flex;flex-direction:column;gap:10px;overflow:hidden;"]),
    rl=T.default.span.withConfig({
      componentId:"sc-65001c3-6"
    })(["font-family:Roboto;font-weight:500;font-size:13px;line-height:24px;color:#161E35;"]),
    rd=T.default.div.withConfig({
      componentId:"sc-65001c3-7"
    })(["padding:20px;box-shadow:0px -3px 22px rgba(0,0,0,0.08);flex-shrink:0;"]),
    rc=T.default.div.withConfig({
      componentId:"sc-65001c3-8"
    })(["display:flex;align-items:center;justify-content:space-between;padding:10px 10px 8px;font-family:Roboto;font-size:13px;font-weight:400;color:#161E35;border-radius:4px;cursor:pointer;transition:background-color 0.15s;&:hover{background:#F5F5F5;}"]),
    ru=T.default.div.withConfig({
      componentId:"sc-65001c3-9"
    })(["display:flex;align-items:center;gap:8px;svg{width:16px;height:16px;flex-shrink:0;}"]),
    rp=(0,T.default)(sP()).withConfig({
      componentId:"sc-65001c3-10"
    })(["display:flex;align-items:center;gap:8px;padding:10px 10px 8px;font-family:Roboto;font-size:13px;font-weight:400;color:#161E35;text-decoration:none;border-radius:4px;transition:background-color 0.15s;&:hover{background:#F5F5F5;color:#161E35;}svg{width:16px;height:16px;flex-shrink:0;}"]),
    rh=T.default.span.withConfig({
      componentId:"sc-65001c3-11"
    })(["font-family:Roboto;font-size:12px;font-weight:400;color:#A2A5AE;text-align:center;flex-shrink:0;"]),
    rf=T.default.div.withConfig({
      componentId:"sc-65001c3-12"
    })(["flex:1;display:flex;flex-direction:column;gap:10px;overflow:hidden;"]);
    var rm=()=>{
      var e,
      t;
      let[n,r]=(0,o.useState)(!1),
      [l,d]=(0,o.useState)(""),
      [c,u]=(0,o.useState)(""),
      [p,h]=(0,o.useState)(null),
      [f,m]=(0,o.useState)(null),
      [g,x]=(0,o.useState)(!1),
      [v,y]=(0,o.useState)(!1),
      [b,w]=(0,o.useState)(!1),
      [j,k]=(0,o.useState)(null),
      _=(0,a.useQueryClient)(),
      {
        currentVersion:C
      }=tF(),
      {
        debugMode:S,
        toggleDebugMode:I
      }=(0,tA.$)(),
      {
        isLoggedInFromAdmin:E
      }=(0,tf.Z)(),
      {
        currentAppReducer:{
          _id:F
        },
        currentOrgReducer:{
          orgId:A
        }
      }=(0,s.v9)(e=>e),
      Z=(0,s.I0)(),
      {
        activeChatId:N,
        activeChatPersona:R,
        isSidebarOpen:D,
        closeSidebar:T,
        chats:L,
        totalChats:M,
        isLoadingChats:z,
        createNewChat:P,
        renameChat:O,
        selectChat:U,
        showChatLimitModal:B,
        setShowChatLimitModal:V
      }=oH(),
      W=(0,sB.Z)(l.trim(),200);
      (0,o.useEffect)(()=>{
        u(W)
      },[W]);
      let H=ty.ZP.getQueryKey(C,"chat_list",!1,F),
      q=[...H,c],
      {
        data:Q,
        isFetching:K
      }=(0,a.useQuery)({
        queryKey:q,
        queryFn:()=>(0,tZ.zG)(F,C,c),
        enabled:!!F&&c.length>0
      }),
      G=l.trim().length>0&&(l.trim()!==c||K),
      $=n?null!==(e=null==Q?void 0:Q.sessions)&&void 0!==e?e:[]:L,
      Y=n?G:z,
      X=(0,o.useCallback)(()=>{
        u(l.trim())
      },[l]),
      J=(0,o.useCallback)(()=>{
        Z((0,et.CW)(null,{
          eventName:"wa_tara_search",
          track_type:"event"
        })),
        n||r(!0)
      },[n,Z]),
      ee=(0,o.useCallback)(()=>{
        r(!1),
        d(""),
        u("")
      },[]),
      en=(0,o.useCallback)(()=>{
        if(M>=150){
          V(!0);
          return
        }
        P("Chat"),
        T()
      },[M,P,T,Z]),
      ei=(0,o.useCallback)((e,t)=>{
        U(e,t)
      },[U]),
      eo=(0,o.useCallback)(e=>{
        h(e)
      },[]),
      es=(0,o.useCallback)(e=>{
        m(e)
      },[]),
      ea=(0,o.useCallback)(e=>{
        k(e)
      },[]),
      er=(0,o.useCallback)((e,t)=>{
        n&&c&&_.setQueryData(q,n=>{
          if(!n)return n;
          let i=e(n.sessions);
          return{
            ...n,
            sessions:i,
            total_count:t?i.length:n.total_count
          }
        })
      },[n,c,_,q]),
      el=(0,o.useCallback)(()=>{
        _.invalidateQueries(H,{
          exact:!0
        })
      },[_,H]),
      ed=(0,o.useCallback)(()=>{
        _.invalidateQueries(H)
      },[_,H]),
      ec=(0,o.useCallback)(async e=>{
        if(F){
          if(e.is_pinned?Z((0,et.CW)(null,{
            eventName:"wa_tara_unpin_chat",
            track_type:"event",
            eventProperty:{
              chat_id:e.session_id
            }
          })):Z((0,et.CW)(null,{
            eventName:"wa_tara_pin_chat",
            track_type:"event",
            eventProperty:{
              chat_id:e.session_id
            }
          })),!e.is_pinned&&L.filter(e=>e.is_pinned).length>=5){
            x(!0);
            return
          }
          try{
            await (0,tZ.jb)(e.session_id,F,!e.is_pinned,C,e.persona),
            n&&c?(er(t=>t.map(t=>t.session_id===e.session_id?{
              ...t,
              is_pinned:!t.is_pinned
            }:t)),el()):ed()
          }
          catch(e){
            sL.ZP.error("Failed to update favorites")
          }
        }
      },[F,L,C,n,c,er,el,ed,Z]),
      eu=(0,o.useCallback)(async e=>{
        if(p){
          y(!0);
          try{
            if(n&&c)await (0,tZ.vw)(p.session_id,F,e,C,p.persona);
            else if(!await O(p.session_id,e,p.persona)){
              sL.ZP.error("Failed to rename chat"),
              y(!1);
              return
            }
            h(null),
            ed(),
            sL.ZP.success('Chat renamed to "'.concat(e,'"')),
            Z((0,et.CW)(null,{
              eventName:"wa_tara_rename_chat",
              track_type:"event"
            }))
          }
          catch(e){
            sL.ZP.error("Failed to rename chat")
          }
          y(!1)
        }
      },[p,O,n,c,F,C,ed,Z]),
      ep=(0,o.useCallback)(async()=>{
        if(f&&F&&!b){
          w(!0);
          try{
            let e=await nJ.clearChat(F,f.session_id,C,f.persona);
            e.success?(m(null),f.session_id===N&&P(),ed(),sL.ZP.success('"'.concat(f.title||"New chat",'" has been deleted')),Z((0,et.CW)(null,{
              eventName:"wa_tara_delete_chat",
              track_type:"event",
              eventProperty:{
                chat_id:f.session_id
              }
            }))):sL.ZP.error(e.message||"Failed to delete chat")
          }
          catch(e){
            sL.ZP.error("Failed to delete chat. Please try again.")
          }
          finally{
            w(!1)
          }
        }
      },[f,F,b,C,N,P,ed,Z]),
      eh=n&&c.length>0&&!G&&Q;
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(rn,{
          $isOpen:D,
          onClick:T
        }),(0,i.jsxs)(ri,{
          $isOpen:D,
          children:[(0,i.jsxs)(ro,{
            children:[(0,i.jsx)(s$,{
              value:l,
              onChange:d,
              isSearchMode:n,
              onEnterSearchMode:J,
              onExitSearchMode:ee,
              onSubmit:X
            }),n?(0,i.jsxs)(rf,{
              children:[eh&&(0,i.jsxs)(rh,{
                children:[Q.total_count," ",1===Q.total_count?"result":"results"," for '",c,"'"]
              }),l.trim().length>0?(0,i.jsx)(ak,{
                chats:$,
                activeChatId:N,
                activeChatPersona:R,
                isLoading:Y,
                searchQuery:G?l.trim():c,
                onSelect:ei,
                onRename:eo,
                onDelete:es,
                onTogglePin:ec,
                onShare:ea
              }):null]
            }):(0,i.jsxs)(i.Fragment,{
              children:[(0,i.jsx)(rs,{
                children:(0,i.jsx)(ra,{
                  onClick:en,
                  type:"button",
                  children:"+ New chat"
                })
              }),(0,i.jsxs)(rr,{
                children:[(0,i.jsx)(rl,{
                  children:"Chats"
                }),(0,i.jsx)(ak,{
                  chats:$,
                  activeChatId:N,
                  activeChatPersona:R,
                  isLoading:Y,
                  searchQuery:"",
                  onSelect:ei,
                  onRename:eo,
                  onDelete:es,
                  onTogglePin:ec,
                  onShare:ea
                })]
              })]
            })]
          }),!n&&(0,i.jsxs)(rd,{
            children:[!!E&&(0,i.jsxs)(rc,{
              onClick:I,
              children:[(0,i.jsxs)(ru,{
                children:[(0,i.jsx)(sU,{}),"Debug mode"]
              }),(0,i.jsx)(sM.Z,{
                checked:S,
                size:"small",
                style:{
                  backgroundColor:S?"#5D97FF":"#d9d9d9"
                }
              })]
            }),(0,i.jsxs)(rp,{
              href:"/settings/org/".concat(A,"/").concat(F,"/tara-ai"),
              target:"_blank",
              onClick:()=>Z((0,et.CW)(null,{
                eventName:"wa_tara_view_settings",
                track_type:"event"
              })),
              children:[(0,i.jsx)(sO,{}),"Settings & subscription"]
            })]
          })]
        }),(0,i.jsx)(aR,{
          visible:!!p,
          currentName:null!==(t=null==p?void 0:p.title)&&void 0!==t?t:"",
          onCancel:()=>h(null),
          onConfirm:eu,
          isRenaming:v
        }),(0,i.jsx)(aU,{
          visible:!!f,
          chatName:(null==f?void 0:f.title)||"New Chat",
          onCancel:()=>m(null),
          onConfirm:ep,
          isDeleting:b
        }),(0,i.jsx)(aY,{
          visible:B,
          onClose:()=>V(!1),
          title:"Chat limit reached",
          description:"You've reached the maximum number of chats allowed. To start a new conversation, please delete an existing chat from your sidebar."
        }),(0,i.jsx)(aY,{
          visible:g,
          onClose:()=>x(!1),
          title:"Favorite limit reached",
          description:"You can have up to 5 favorite chats at a time. To add this one, you'll need to remove a chat from your favorites list first."
        }),(0,i.jsx)(rt,{
          visible:!!j,
          onCancel:()=>k(null),
          chatTitle:(null==j?void 0:j.title)||"New Chat",
          sessionId:null==j?void 0:j.session_id,
          appId:F
        })]
      })
    },
    rg=()=>{
      let[e,t]=(0,o.useState)(!1),
      n=(0,o.useRef)(!1),
      i=(0,s.I0)(),
      {
        selectChat:a,
        deferSelectChat:r
      }=oH(),
      {
        currentPersona:l,
        currentVersion:d,
        setEnvironment:c,
        fetchPersonasForEnvironment:u
      }=tF(),
      {
        urlReducer:p
      }=(0,s.v9)(e=>e),
      h=null==p?void 0:p.sharedSessionId,
      f=null==p?void 0:p.env,
      m=(0,o.useCallback)(()=>{
        t(!1)
      },[]);
      return(0,o.useEffect)(()=>{
        var e,
        o;
        if(n.current||!h)return;
        n.current=!0;
        let s={
          uat:{
            version:ty.iK.UAT,
            environmentId:"uat"
          },
          stg:{
            version:ty.iK.STAGING,
            environmentId:"staging"
          },
          experience:{
            version:ty.iK.EXPERIENCE,
            environmentId:"experience"
          },
          cx:{
            version:ty.iK.CX,
            environmentId:"cx"
          },
          bizops:{
            version:ty.iK.BIZOPS,
            environmentId:"bizops"
          },
          research:{
            version:ty.iK.RESEARCH,
            environmentId:"research"
          }
        },
        m=f?s[f]:null,
        g=null!==(e=null==m?void 0:m.version)&&void 0!==e?e:ty.iK.PROD,
        x=null!==(o=null==m?void 0:m.environmentId)&&void 0!==o?o:"production",
        v=new URL(window.location.href);
        v.searchParams.delete("sharedSessionId"),
        v.searchParams.delete("env"),
        window.history.replaceState({},"",v.toString());
        let{
          sharedSessionId:y,
          env:b,
          ...w
        }=p||{};
        i((0,C.Uw)(w)),
        t(!0),
        d===g?a(h,l):(r(h,l),u(x),c(x))
      },[h,f,l,d,a,r,c,u]),
      {
        isSharedClaim:e,
        dismissClaim:m
      }
    };
    let rx=T.default.div.withConfig({
      componentId:"sc-ddce0015-0"
    })(["position:relative;display:flex;flex-direction:column;height:100%;width:100%;background:linear-gradient(245deg,#EE5EDD,#49C5FF);box-shadow:0px 4px 10px 0px #EE5EDD29;padding:1px;border-radius:6px;overflow:hidden;"]),
    rv=T.default.div.withConfig({
      componentId:"sc-ddce0015-1"
    })(["flex:1;background-color:#fff;display:flex;flex-direction:column;height:100%;overflow:hidden;border-radius:0 0 6px 6px;"]),
    ry=T.default.div.withConfig({
      componentId:"sc-ddce0015-2"
    })(["display:flex;align-items:center;justify-content:space-between;gap:8px;padding:12px 16px;background-color:white;border-radius:6px 6px 0 0;"]),
    rb=T.default.div.withConfig({
      componentId:"sc-ddce0015-3"
    })(["display:flex;align-items:center;gap:8px;"]),
    rw=T.default.div.withConfig({
      componentId:"sc-ddce0015-4"
    })(["display:flex;align-items:center;gap:8px;"]),
    rj=T.default.button.withConfig({
      componentId:"sc-ddce0015-5"
    })(["background:",";border-radius:6px;padding:7px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background-color 0.2s,color 0.2s;border:none;&:hover{svg{color:","}}"],e=>{
      let{
        isActive:t
      }=e;
      return t?"#ECF3FF":e0.r.colors.primarySnow.toString()
    },th.P.color.Sky.toString()),
    rk=T.default.button.withConfig({
      componentId:"sc-ddce0015-6"
    })(["background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:background-color 0.15s;svg{transition:color 0.4s;}&:hover{background:",";svg{color:","}}"],e0.r.colors.primarySnow.toString(),e0.r.colors.primarySky.toString()),
    r_=()=>{
      var e;
      let{
        toggleExpansion:t,
        isExpanded:n
      }=(0,tA.$)(),
      {
        toggleSidebar:a,
        chats:r
      }=oH(),
      {
        aiSessionFeatureAllowed:l
      }=(0,E.I)(),
      {
        currentOrgReducer:d,
        currentAppReducer:{
          _id:c
        }
      }=(0,s.v9)(e=>e),
      u=null!==(e=null==d?void 0:d.isTaraProPackage)&&void 0!==e&&e,
      p=(0,s.I0)(),
      [h,f]=o.useState(""),
      [m,g]=o.useState(void 0),
      [x,v]=o.useState(!1),
      [y,b]=o.useState(!1),
      {
        isSharedClaim:w,
        dismissClaim:j
      }=rg(),
      k=o.useMemo(()=>{
        if(!m||!r)return"New Chat";
        let e=r.find(e=>e.session_id===m);
        return(null==e?void 0:e.title)||"New Chat"
      },[m,r]);
      return(0,i.jsx)(eO.Fo,{
        children:(0,i.jsxs)(rx,{
          children:[(0,i.jsxs)(ry,{
            children:[(0,i.jsxs)(rw,{
              children:[(0,i.jsx)(N.Z,{
                title:"Expand Menu",
                align:{
                  offset:[0,4]
                },
                placement:"topLeft",
                children:(0,i.jsx)(rk,{
                  onClick:()=>{
                    p((0,et.CW)(null,{
                      eventName:"wa_tara_view_menu",
                      track_type:"event"
                    })),
                    a()
                  },
                  type:"button",
                  disabled:y,
                  style:y?{
                    opacity:.4,
                    pointerEvents:"none"
                  }:void 0,
                  children:(0,i.jsx)(tu,{})
                })
              }),(0,i.jsx)(tl,{}),u?(0,i.jsx)(tc,{}):(0,i.jsx)(td,{})]
            }),(0,i.jsxs)(rb,{
              children:[!tp.BB&&(0,i.jsx)(sy,{}),(0,i.jsx)(N.Z,{
                title:n?"Collapse":"Expand",
                align:{
                  offset:[0,4]
                },
                children:(0,i.jsx)(rj,{
                  onClick:()=>{
                    p((0,et.CW)(null,{
                      eventName:n?"wa_ai_collapse_chat":"wa_ai_expand_chat",
                      track_type:"event"
                    })),
                    t()
                  },
                  children:n?(0,i.jsx)(ts,{}):(0,i.jsx)(ta,{})
                })
              }),m&&(0,i.jsx)(N.Z,{
                placement:"bottomLeft",
                title:"Share chat",
                align:{
                  offset:[0,4]
                },
                children:(0,i.jsx)(rj,{
                  onClick:()=>{
                    p((0,et.CW)(null,{
                      eventName:"wa_tara_share_chat",
                      track_type:"event",
                      eventProperty:{
                        source:"chat"
                      }
                    })),
                    v(!0)
                  },
                  disabled:y,
                  style:y?{
                    opacity:.4,
                    pointerEvents:"none"
                  }:void 0,
                  children:(0,i.jsx)(tr,{})
                })
              })]
            })]
          }),l&&(0,i.jsx)(nd,{}),(0,i.jsx)(rv,{
            children:(0,i.jsx)(si,{
              streamedMessage:h,
              setStreamedMessage:f,
              chatThreadId:m,
              setChatThreadId:g,
              isSharedClaim:w,
              onDismissClaim:j,
              onLoadingChange:b
            })
          }),(0,i.jsx)(rm,{}),(0,i.jsx)(rt,{
            visible:x,
            onCancel:()=>v(!1),
            chatTitle:k,
            sessionId:m,
            appId:c
          })]
        })
      })
    };
    var rC=o.memo(()=>(0,i.jsx)(tE,{
      children:(0,i.jsx)(oq,{
        children:(0,i.jsxs)(id,{
          children:[(0,i.jsx)(r_,{}),(0,i.jsx)(sT,{})]
        })
      })
    })),
    rS=n(62447),
    rI=n(93250);
    let rE=T.default.div.withConfig({
      componentId:"sc-ff764f0e-0"
    })(["display:flex;min-height:100vh;align-items:center;justify-content:center;background:#f5f6fa;padding:24px;"]),
    rF=T.default.div.withConfig({
      componentId:"sc-ff764f0e-1"
    })(["width:100%;max-width:440px;border:1px solid #e4e7ef;border-radius:8px;background:#fff;padding:32px;text-align:center;h1{margin:0;font-size:18px;font-weight:600;color:#2f3345;}.redirect-countdown{margin:16px 0 0;font-size:12px;color:#6b7188;}"]);
    var rA=()=>{
      let[e,t]=(0,o.useState)(8);
      return(0,o.useEffect)(()=>{
        let e=window.setInterval(()=>{
          t(e=>e<=0?0:e-1)
        },1e3);
        return()=>window.clearInterval(e)
      },[]),
      (0,o.useEffect)(()=>{
        0===e&&window.location.replace("https://tara.uxcam.com")
      },[e]),
      (0,i.jsx)(rE,{
        children:(0,i.jsxs)(rF,{
          children:[(0,i.jsx)("h1",{
            children:"Redirecting to your UXCam dashboard"
          }),(0,i.jsxs)("p",{
            className:"redirect-countdown",
            "aria-live":"polite",
            children:["Redirecting in ",Math.max(e,0),"s…"]
          })]
        })
      })
    },
    rZ=n(27985),
    rN=n(71353),
    rR=n(52701),
    rD=n(78268),
    rT=e=>(0,i.jsx)("svg",{
      width:12,
      height:12,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M1.333 12c-.366 0-.68-.13-.941-.392A1.284 1.284 0 0 1 0 10.667V1.333C0 .967.13.653.392.392.652.13.967 0 1.333 0H6v1.333H1.333v9.334h9.334V6H12v4.667c0 .366-.13.68-.392.941a1.284 1.284 0 0 1-.941.392H1.333Zm3.134-3.533-.934-.934 6.2-6.2h-2.4V0H12v4.667h-1.333v-2.4l-6.2 6.2Z",
        fill:"#5D97FF"
      })
    });
    let rL=T.default.div.withConfig({
      componentId:"sc-79eafb89-0"
    })(["display:flex;align-items:center;gap:4px;font-family:Roboto;font-weight:400;font-size:12px;line-height:100%;margin:0;"]),
    rM=T.default.div.withConfig({
      componentId:"sc-79eafb89-1"
    })(["display:inline-block;padding:2px 4px;background:",";border-radius:4px;margin-left:3px;span{font-weight:500;color:",";}"],e0.r.colors.surface05.toString(),e0.r.colors.surface500.toString()),
    rz=T.default.div.withConfig({
      componentId:"sc-79eafb89-2"
    })(["display:flex;align-items:center;gap:4px;"]);
    var rP=e=>{
      let{
        creditsLeft:t,
        totalCredits:n
      }=e,
      {
        currentOrgReducer:{
          orgId:a
        },
        currentAppReducer:{
          _id:r
        }
      }=(0,s.v9)(e=>e),
      l=(0,o.useMemo)(()=>(0,i.jsxs)(rz,{
        children:["Check",(0,i.jsx)(sP(),{
          href:{
            pathname:"/integration",
            query:{
              setting:"org_setting",
              org:a,
              org_tab:"tara-ai",
              parentType:"settings"
            }
          },
          target:"_blank",
          as:"/settings/org/".concat(a,"/").concat(r,"/tara-ai"),
          rel:"noopener noreferrer",
          children:"usage breakdown"
        }),(0,i.jsx)(rT,{})]
      }),[a,r]);
      return(0,i.jsxs)(rL,{
        children:["Credits left:",(0,i.jsx)(eO.xO,{
          title:l,
          placement:"bottom",
          children:(0,i.jsxs)(rM,{
            children:[Math.ceil(t)," of",(0,i.jsxs)("span",{
              children:[" ",Math.ceil(n)]
            })]
          })
        })]
      })
    };
    let rO=(0,T.createGlobalStyle)(["",""],e=>e.isDragging&&"\n		* {\n			cursor: grabbing !important;\n			user-select: none !important;\n		}\n	"),
    rU=T.default.div.withConfig({
      componentId:"sc-1feeceba-0"
    })(["display:flex;flex-direction:column;gap:16px;width:100%;cursor:",";user-select:",";"],e=>e.isDragging?"grabbing":"default",e=>e.isDragging?"none":"auto"),
    rB=T.default.div.withConfig({
      componentId:"sc-1feeceba-1"
    })(["display:flex;align-items:center;justify-content:space-between;width:100%;"]),
    rV=T.default.p.withConfig({
      componentId:"sc-1feeceba-2"
    })(["font-family:Roboto;font-weight:500;font-size:12px;line-height:100%;color:",";margin:0;"],e0.r.colors.surface500.toString()),
    rW=T.default.div.withConfig({
      componentId:"sc-1feeceba-3"
    })(["display:flex;flex-direction:column;gap:10px;width:100%;"]),
    rH=T.default.div.withConfig({
      componentId:"sc-1feeceba-4"
    })(["position:relative;width:100%;height:6px;"]),
    rq=T.default.div.withConfig({
      componentId:"sc-1feeceba-5"
    })(["width:100%;height:6px;background-color:",";border-radius:60px;position:relative;"],e0.r.colors.surface05.toString()),
    rQ=T.default.div.withConfig({
      componentId:"sc-1feeceba-6"
    })(["position:absolute;left:","%;top:50%;transform:translate(-50%,-50%);width:14px;height:14px;cursor:grab;z-index:2;user-select:none;&:active{cursor:grabbing;}&::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:14px;height:14px;background-color:",";border-radius:50%;}&:hover::before{box-shadow:0px 3px 6px rgba(0,0,0,0.15);}&:active::before{box-shadow:0px 4px 8px rgba(0,0,0,0.2);}"],e=>e.position,e0.r.colors.primary500.toString()),
    rK=T.default.div.withConfig({
      componentId:"sc-1feeceba-7"
    })(["position:absolute;left:0;top:0;height:100%;width:","%;background-color:",";border-radius:60px;transition:width 0.2s ease;"],e=>e.width,e0.r.colors.primary500.toString()),
    rG=T.default.div.withConfig({
      componentId:"sc-1feeceba-8"
    })(["display:flex;align-items:flex-start;justify-content:space-between;width:100%;"]),
    r$=T.default.button.withConfig({
      componentId:"sc-1feeceba-9"
    })(["background:none;border:none;padding:0;font-family:Roboto;font-weight:400;font-size:12px;line-height:100%;color:",';cursor:pointer;width:54px;text-align:center;transition:all 0.2s ease;&[data-disabled="true"]{opacity:0.2;cursor:default;}&:hover{color:',";}"],e=>e.active?e0.r.colors.surface500.toString():e0.r.colors.surface400.toString(),e0.r.colors.surface500.toString()),
    rY=[15,30,60,90],
    rX=(e,t,n)=>{
      if(!n){
        if(15===e)return t<=0&&t<15;
        if(30===e)return t<=15&&t<30;
        if(60===e)return t<=30&&t<60;
        if(90===e)return t<=60
      }
      return!1
    };
    var rJ=e=>{
      let{
        onChange:t,
        creditsLeft:n=0,
        totalCredits:s,
        isAdmin:a=!1
      }=e,
      [r,l]=(0,o.useState)(n<=15&&!a?15:30),
      [d,c]=(0,o.useState)(!1),
      u=o.useRef(null),
      p=e=>{
        !a&&(15===e&&n<0||30===e&&n<=15||60===e&&n<=30||90===e&&n<=60)||(l(e),null==t||t(e))
      },
      h=rY.indexOf(r)/(rY.length-1)*100,
      f=e=>{
        if(!u.current)return;
        let t=u.current.getBoundingClientRect(),
        n=Math.max(0,Math.min(Math.round(Math.max(0,Math.min(100,(e-t.left)/t.width*100))/100*(rY.length-1)),rY.length-1));
        p(rY[n])
      };
      return o.useEffect(()=>{
        let e=e=>{
          d&&f(e.clientX)
        },
        t=()=>{
          c(!1)
        };
        return d&&(document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)),
        ()=>{
          document.removeEventListener("mousemove",e),
          document.removeEventListener("mouseup",t)
        }
      },[d]),
      (0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(rO,{
          isDragging:d
        }),(0,i.jsxs)(rU,{
          isDragging:d,
          children:[(0,i.jsxs)(rB,{
            children:[(0,i.jsx)(rV,{
              children:"Choose how many credits to use from your plan"
            }),(0,i.jsx)(rP,{
              creditsLeft:n,
              totalCredits:s
            })]
          }),(0,i.jsxs)(rW,{
            children:[(0,i.jsx)(rH,{
              children:(0,i.jsxs)(rq,{
                ref:u,
                onClick:e=>{
                  f(e.clientX)
                },
                children:[(0,i.jsx)(rK,{
                  width:h
                }),(0,i.jsx)(rQ,{
                  position:h,
                  onMouseDown:e=>{
                    e.preventDefault(),
                    c(!0),
                    f(e.clientX)
                  }
                })]
              })
            }),(0,i.jsx)(rG,{
              children:rY.map(e=>(0,i.jsxs)(r$,{
                active:e===r,
                onClick:()=>p(e),
                "data-disabled":rX(e,n,a),
                children:[e," credits"]
              },e))
            })]
          })]
        })]
      })
    };
    let r0=T.default.h2.withConfig({
      componentId:"sc-6ea72dd-0"
    })(["font-family:Roboto;font-weight:500;font-style:Medium;font-size:18px;line-height:25px;letter-spacing:0%;vertical-align:middle;color:",";margin-bottom:0px;"],e0.r.colors.surface500.toString()),
    r1=T.default.h3.withConfig({
      componentId:"sc-6ea72dd-1"
    })(["font-family:Roboto;font-weight:400;font-style:Regular;font-size:13px;line-height:23px;letter-spacing:0%;color:",";margin-bottom:0px;"],e0.r.colors.surface400.toString()),
    r2=T.default.div.withConfig({
      componentId:"sc-6ea72dd-2"
    })(["display:flex;justify-content:flex-end;gap:",";margin-top:24px;"],e0.r.spacing(2)),
    r5=(0,T.default)(eO.zx).withConfig({
      componentId:"sc-6ea72dd-3"
    })(['&[data-variant="ghost"]{min-width:min(100px,100%) !important;}&[data-variant="primary"]{min-width:min(130px,100%) !important;}']),
    r4=T.default.div.withConfig({
      componentId:"sc-529f250c-0"
    })(["background-color:",";padding:13px 12px;border-radius:6px;display:flex;justify-content:space-between;align-items:center;flex-direction:column;gap:10px;background-color:rgba(254,214,77,0.25);border:1px solid rgba(254,214,77,0.25);margin-bottom:24px;flex-direction:row;align-items:flex-start;"],e0.r.colors.primary05.toString()),
    r6=T.default.div.withConfig({
      componentId:"sc-529f250c-1"
    })(["display:flex;gap:6px;"]),
    r3=T.default.button.withConfig({
      componentId:"sc-529f250c-2"
    })(["display:flex;align-items:center;gap:6px;padding:5px 7px 5px 6px;background-color:white;background-clip:padding-box;border:1px solid transparent;border-radius:6px;cursor:pointer;transition:all 0.2s;position:relative;justify-content:center;font-size:12px;white-space:nowrap;align-self:center;&::before{content:'';position:absolute;inset:-1px;border-radius:6px;padding:1px;background:linear-gradient(195deg,#ee5edd,#49c5ff);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none;}"]),
    r8=T.default.div.withConfig({
      componentId:"sc-529f250c-3"
    })(["display:flex;flex-direction:column;font-family:Roboto;font-weight:400;font-style:Regular;font-size:12px;line-height:19px;letter-spacing:0%;color:",";strong{font-size:700;}"],e0.r.colors.primary1000.toString());
    var r7=()=>{
      let{
        setUpgradeModalVisible:e,
        setBatchModalVisible:t
      }=(0,t0.fB)(),
      n=(0,R.useRouter)(),
      a=(0,s.I0)(),
      {
        parentType:r
      }=n.query,
      l=(0,o.useCallback)(()=>{
        a((0,K.qS)({
          taraProduct:"low_credits",
          parentType:r||"unknown",
          source:"batch_modal_button"
        })),
        e(!0),
        t(!1)
      },[e,t,r,a]);
      return(0,i.jsxs)(r4,{
        children:[(0,i.jsxs)(r6,{
          children:[(0,i.jsx)(tX,{}),(0,i.jsxs)(r8,{
            children:[(0,i.jsx)("strong",{
              children:"Less than 50 credits remaining"
            }),"Add more to keep uncovering insights."]
          })]
        }),(0,i.jsx)(r3,{
          onClick:l,
          children:"Upgrade plan"
        })]
      })
    };
    let r9=(0,T.createGlobalStyle)([".duration-modal{.ufc-modal-content{padding:32px;}.ant-form-item{margin-bottom:0;}.ant-form-item-explain-error{font-size:12px;line-height:18px;color:#F4584C;margin-top:8px;}.ant-form-item-has-error .ant-input{border-color:#F4584C;}}"]),
    le=T.default.div.withConfig({
      componentId:"sc-bfcff3bb-0"
    })(["display:flex;flex-direction:column;gap:8px;margin-bottom:24px;"]),
    lt=T.default.div.withConfig({
      componentId:"sc-bfcff3bb-1"
    })(["background-color:",";padding:13px 12px;border-radius:6px;display:flex;align-items:center;flex-direction:column;gap:10px;"],e0.r.colors.primary05.toString()),
    ln=T.default.h3.withConfig({
      componentId:"sc-bfcff3bb-2"
    })(["font-family:Roboto;font-weight:400;font-style:Regular;font-size:12px;line-height:100%;letter-spacing:0%;color:",";"],e0.r.colors.surface500.toString()),
    li=T.default.h2.withConfig({
      componentId:"sc-bfcff3bb-3"
    })(["font-family:Roboto;font-weight:600;font-style:SemiBold;font-size:18px;line-height:100%;letter-spacing:0%;color:",";"],e0.r.colors.surface500.toString()),
    lo=T.default.h3.withConfig({
      componentId:"sc-bfcff3bb-4"
    })(["font-family:Roboto;font-weight:400;font-style:SemiBold;font-size:12px;line-height:100%;letter-spacing:0%;color:",";span{background:",";padding:2px 4px;border-radius:4px;font-weight:500;color:",";margin:0 4px;}"],e0.r.colors.surface300.toString(),e0.r.colors.primary100.toString(),e0.r.colors.surface500.toString()),
    ls=T.default.div.withConfig({
      componentId:"sc-bfcff3bb-5"
    })(["font-family:Roboto;font-weight:400;font-style:Regular;font-size:10px;line-height:100%;letter-spacing:0%;color:",";margin-bottom:0px;border-top:1px solid ",";padding-top:12px;width:100%;text-align:center;"],e0.r.colors.surface300.toString(),e0.r.colors.surface10.toString()),
    la=T.default.div.withConfig({
      componentId:"sc-bfcff3bb-6"
    })(["margin-top:24px;"]),
    lr=T.default.div.withConfig({
      componentId:"sc-bfcff3bb-7"
    })(["display:flex;flex-direction:column;gap:10px;margin-top:24px;"]),
    ll=T.default.div.withConfig({
      componentId:"sc-bfcff3bb-8"
    })(["display:flex;justify-content:space-between;align-items:center;"]),
    ld=T.default.p.withConfig({
      componentId:"sc-bfcff3bb-9"
    })(["font-family:Roboto;font-weight:500;font-size:12px;line-height:100%;color:",";margin:0;"],e0.r.colors.surface500.toString()),
    lc=T.default.input.withConfig({
      componentId:"sc-bfcff3bb-10"
    })(["width:100%;height:30px;background-color:white;border:1px solid ",";border-radius:6px;padding:2px 10px;font-family:Roboto;font-weight:400;font-size:12px;color:",";&::placeholder{color:",";}&:focus{outline:none;border-color:",';}&[data-error="true"]{border-color:#F4584C;}'],e0.r.colors.surface10.toString(),e0.r.colors.surface500.toString(),e0.r.colors.surface200.toString(),e0.r.colors.primary500.toString()),
    lu=T.default.div.withConfig({
      componentId:"sc-bfcff3bb-11"
    })(["font-family:Roboto;font-size:12px;font-style:normal;font-weight:400;line-height:15px;color:",";padding:12px;background-color:",";border-radius:4px;margin-top:24px;span{font-weight:700;}"],e0.r.colors.primary1000.toString(),e0.r.colors.surface05.toString());
    var lp=()=>{
      let{
        batchModalVisible:e,
        state:t,
        selected:n,
        remainingCredits:r,
        isFreeCustomer:l,
        setItems:d,
        setBatchModalVisible:c,
        setErrorModalVisible:u,
        setPopupVisibility:p,
        triggerManualCheck:h,
        setSessionProcessingErrorModalVisible:f,
        orgId:m,
        creditsConversion:g,
        totalCredits:x
      }=(0,t0.fB)(),
      {
        close:v
      }=(0,rI.v)(),
      y=(0,s.I0)(),
      {
        currentAppReducer:{
          _id:b
        },
        appFilter:{
          dateSegment:w,
          session:{
            segment:j
          }
        },
        profileReducer:{
          name:k
        }
      }=(0,s.v9)(e=>e),
      [_]=eE.Z.useForm(),
      [C,S]=(0,o.useState)(30),
      I=(0,a.useQueryClient)(),
      {
        isLoggedInAsAdminAdmin:E
      }=(0,tf.Z)(),
      {
        parentType:F
      }=(0,R.useRouter)().query,
      A=(0,o.useCallback)(e=>{
        if(!m)return;
        let t="ai_usage_overview_".concat(m),
        n=I.getQueryData(t);
        n&&I.setQueryData(t,{
          ...n,
          scheduled_tara_credit:(n.scheduled_tara_credit||0)+e
        }),
        I.refetchQueries(t)
      },[m,I]),
      Z=(0,o.useCallback)(()=>{
        setTimeout(()=>{
          _.resetFields()
        },300),
        c(!1)
      },[c,_]),
      {
        isLoading:N,
        mutateAsync:D
      }=(0,a.useMutation)({
        mutationFn:tZ.SZ,
        retry:!1,
        onError:()=>{
          c(!1),
          u(!0)
        },
        onSuccess:(e,t)=>{
          var i;
          if((null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.status)==="no_sessions_found"){
            Z(),
            f(!0);
            return
          }
          let{
            batch_name:o,
            session_ids:s
          }=t,
          a=new Date().toISOString(),
          r=n.reduce((e,t)=>e+Math.ceil(t.sessionDuration),0),
          l=g.tara_credits/g.video_minutes*Math.ceil(r/60);
          d(e=>[{
            id:a,
            createdAt:a,
            analyzedCount:s.length,
            name:o,
            requestedCredits:l,
            scheduledByName:k,
            analyzedCredits:0,
            completedStatus:!1,
            source:"session"
          },...e]),
          A(l),
          h(),
          Z(),
          p(!0),
          v()
        }
      }),
      {
        isLoading:T,
        mutateAsync:L
      }=(0,a.useMutation)({
        mutationFn:tZ.ko,
        retry:!1,
        onError:()=>{
          c(!1),
          u(!0)
        },
        onSuccess:(e,t)=>{
          var n;
          let{
            batch_name:i,
            max_processing_time_minutes:o
          }=t,
          s=new Date().toISOString(),
          a=g.tara_credits/g.video_minutes*Math.ceil(o||0);
          if((null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.status)==="no_sessions_found"){
            Z(),
            f(!0);
            return
          }
          d(e=>[{
            id:s,
            createdAt:s,
            name:i,
            requestedCredits:a||0,
            scheduledByName:k,
            analyzedCredits:0,
            completedStatus:!1,
            source:"batch"
          },...e]),
          A(a),
          h(),
          Z(),
          p(!0)
        }
      }),
      M=(0,o.useCallback)(e=>{
        if(![15,30,60,90].includes(e))throw Error("Credits can be only 30 60 or 90 mins");
        S(e)
      },[]),
      z=(0,o.useMemo)(()=>{
        if(!g)return 0;
        let e=Number(g.tara_credits),
        t=Number(g.video_minutes);
        if(!e||!t||0===e||0===t||Number.isNaN(e)||Number.isNaN(t))return 0;
        let n=Math.round(t/e*Math.min(C,r)/1.5);
        return Number.isNaN(n)?0:n
      },[C,r,g]),
      P=(0,o.useCallback)(async()=>{
        let e=await _.validateFields(),
        t=null==n?void 0:n.map(e=>e.sessionid),
        i=!!(null==n?void 0:n.length),
        o=i?n.length:z,
        s=i?Math.ceil(n.reduce((e,t)=>e+Math.ceil(t.sessionDuration),0)/60)*(g.tara_credits/g.video_minutes):C;
        y((0,K.YI)({
          batchName:e.batchName,
          approximateSessions:o,
          creditsUsed:s,
          creditsRemaining:r,
          filtersApplied:j,
          parentType:F||"unknown",
          type:i?"session":"batch"
        }));
        let a={
          appid:b,
          date_range:w,
          batch_name:e.batchName,
          filters:j||[],
          ...i?{}:{
            requested_credits_usage:C
          },
          ...i?{
            session_ids:t
          }:{}
        };
        i?await D(a):await L(a)
      },[_,n,b,w,C,D,L,j,z,g,r,F]),
      O=N||T,
      U=(0,o.useMemo)(()=>{
        let e=O?(0,i.jsx)(rD.Z,{
          indicator:(0,i.jsx)(ss.Z,{
            style:{
              fontSize:16,
              color:"white"
            },
            spin:!0
          })
        }):"Let Tara Watch";
        return(0,i.jsxs)(r2,{
          children:[(0,i.jsx)(r5,{
            type:"button",
            variant:"ghost",
            size:"large",
            disabled:O,
            onClick:Z,
            children:"Cancel"
          }),(0,i.jsx)(r5,{
            type:"button",
            variant:"primary",
            size:"large",
            disabled:O||0===r,
            onClick:P,
            children:e
          })]
        })
      },[Z,P,O,r]),
      B=(0,o.useMemo)(()=>{
        switch(t){
          case"filtered":return"Tara will watch sessions that match your filters to better answer  your questions";
          case"selected":case"selectedFiltered":return"Tara will focus on the selected sessions to better answer your questions";
          default:return"Tara will watch more sessions from the selected date range to better answer your questions"
        }
      },[t]),
      V="selectedFiltered"===t||"selected"===t,
      W=V?"".concat(null==n?void 0:n.length," session").concat((0,rR.r)(n)):"~".concat(z," session").concat((0,rR.r)(z)),
      H=(0,o.useMemo)(()=>{
        if("selected"!==t&&"selectedFiltered"!==t)return C;
        if(!g)return r;
        let e=Number(g.tara_credits),
        i=Number(g.video_minutes);
        if(!e||!i||0===e||0===i||Number.isNaN(e)||Number.isNaN(i))return r;
        let o=Math.round((null==n?void 0:n.reduce((e,t)=>e+t.sessionDuration,0))||0);
        return o<i/e*r*60?Math.ceil(o/60):r
      },[C,t,n,r,g]),
      q=!l&&r<50;
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(r9,{}),(0,i.jsxs)(eO.YI,{
          visible:e,
          footer:U,
          closable:!1,
          className:"duration-modal",
          style:{
            top:0
          },
          children:[(0,i.jsxs)(le,{
            children:[(0,i.jsx)(r0,{
              children:"Have Tara watch more sessions"
            }),(0,i.jsx)(r1,{
              children:B
            })]
          }),q&&!V&&(0,i.jsx)(r7,{}),(0,i.jsxs)(lt,{
            children:[(0,i.jsx)(ln,{
              children:V?"Tara will attempt to watch":"Tara will watch"
            }),(0,i.jsx)(li,{
              children:W
            }),(0,i.jsxs)(lo,{
              children:["Using up to",(0,i.jsxs)("span",{
                children:[Math.ceil(H)," credit",(0,rR.r)(Math.ceil(H))]
              }),"from your plan"]
            }),!V&&(0,i.jsx)(ls,{
              children:"Estimated count based on an average session length (~1.5 min)"
            })]
          }),!V&&(0,i.jsx)(la,{
            children:(0,i.jsx)(rJ,{
              onChange:M,
              creditsLeft:r,
              totalCredits:x,
              isAdmin:E
            })
          }),(0,i.jsx)(eE.Z,{
            form:_,
            layout:"vertical",
            children:(0,i.jsxs)(lr,{
              children:[(0,i.jsxs)(ll,{
                children:[(0,i.jsx)(ld,{
                  children:"Batch name"
                }),V&&(0,i.jsx)(rP,{
                  creditsLeft:r,
                  totalCredits:x
                })]
              }),(0,i.jsx)(eE.Z.Item,{
                name:"batchName",
                rules:[{
                  required:!0,
                  message:"Name your batch to continue"
                },{
                  min:1,
                  message:"Batch name must be at least 1 character"
                },{
                  max:50,
                  message:"Batch name must be less than 50 characters"
                }],
                validateTrigger:["onBlur","onChange"],
                style:{
                  margin:0
                },
                children:(0,i.jsx)(lc,{
                  type:"text",
                  placeholder:"Create a name for this batch",
                  disabled:O||0===r
                })
              })]
            })
          }),(0,i.jsxs)(lu,{
            children:[(0,i.jsx)("span",{
              children:"Note: "
            }),"Tara automatically excludes sessions longer than 20 minutes or without a video."]
          })]
        })]
      })
    };
    let lh=(0,T.default)(r0).withConfig({
      componentId:"sc-7581d612-0"
    })(["margin-bottom:8px;"]);
    var lf=()=>{
      let{
        setErrorModalVisible:e,
        setBatchModalVisible:t,
        errorModalVisible:n
      }=(0,t0.fB)(),
      o=(0,i.jsxs)(r2,{
        children:[(0,i.jsx)(r5,{
          type:"button",
          variant:"ghost",
          size:"large",
          onClick:()=>{
            e(!1)
          },
          children:"Close"
        }),(0,i.jsx)(r5,{
          type:"button",
          variant:"primary",
          size:"large",
          onClick:()=>{
            e(!1),
            t(!0)
          },
          children:"Try again"
        })]
      });
      return(0,i.jsxs)(eO.YI,{
        visible:n,
        footer:o,
        closable:!1,
        className:"duration-modal",
        style:{
          top:0
        },
        children:[(0,i.jsx)(lh,{
          children:"Something went wrong"
        }),(0,i.jsx)(r1,{
          children:"We couldn’t process your request. Please try again, and if the problem continues, contact support."
        })]
      })
    },
    lm=n(22911);
    let lg=T.default.div.withConfig({
      componentId:"sc-e9713789-0"
    })(["margin-bottom:8px;display:flex;align-items:center;gap:8px;"]),
    lx=(0,T.createGlobalStyle)([".duration-modal{.ufc-modal-container{padding:32px;}}"]);
    var lv=()=>{
      let{
        successModalVisible:e,
        setSuccessModalVisible:t
      }=(0,t0.fB)(),
      n=(0,i.jsx)(r2,{
        children:(0,i.jsx)(r5,{
          type:"button",
          variant:"ghost",
          size:"large",
          onClick:()=>{
            t(!1)
          },
          children:"Close"
        })
      });
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(lx,{}),(0,i.jsxs)(eO.YI,{
          visible:e,
          footer:n,
          closable:!1,
          className:"duration-modal",
          style:{
            top:0
          },
          children:[(0,i.jsxs)(lg,{
            children:[(0,i.jsx)(lm.Z,{}),(0,i.jsx)(r0,{
              children:"Request received"
            })]
          }),(0,i.jsx)(r1,{
            children:"We’ve received your request to upgrade Tara’s plan. Our team will contact you via email shortly."
          })]
        })]
      })
    },
    ly=n(87825);
    let lb=T.default.div.withConfig({
      componentId:"sc-8b11c5bf-0"
    })(["margin-bottom:8px;display:flex;align-items:center;gap:8px;"]),
    lw=(0,T.createGlobalStyle)([".duration-modal{.ufc-modal-container{padding:32px;.ufc-modal-footer{margin-top:36px;}}}"]);
    var lj=()=>{
      let{
        upgradeErrorModalVisible:e,
        setUpgradeErrorModalVisible:t,
        setUpgradeModalVisible:n
      }=(0,t0.fB)(),
      o=(0,i.jsxs)(r2,{
        children:[(0,i.jsx)(r5,{
          type:"button",
          variant:"ghost",
          size:"large",
          onClick:()=>{
            t(!1)
          },
          children:"Close"
        }),(0,i.jsx)(r5,{
          type:"button",
          variant:"primary",
          size:"large",
          onClick:()=>{
            t(!1),
            n(!0)
          },
          children:"Try again"
        })]
      });
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(lw,{}),(0,i.jsxs)(eO.YI,{
          visible:e,
          footer:o,
          closable:!1,
          className:"duration-modal",
          style:{
            top:0
          },
          children:[(0,i.jsxs)(lb,{
            children:[(0,i.jsx)(ly.Z,{}),(0,i.jsx)(r0,{
              children:"We couldn't send your upgrade request"
            })]
          }),(0,i.jsx)(r1,{
            children:"Something went wrong. Please try again in a moment."
          })]
        })]
      })
    },
    lk=n(76218),
    l_={
      src:"https://static-build.uxcam.com/production/_next/static/media/tara-upgrade-banner.1fb28b68.png",
      height:984,
      width:800,
      blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAqElEQVR42g3KOw6CQBAA0JndWVz5xZCY0BBLTawtvZSH8ibG3s7ESqxQgnwiuOyw+uqHh6NbxZwlPFic03R/q7wWYhk6IZGI1qmzoHorpADykNuOS4lg3auyz9JpTXS7nPPrKQjCfwEUdV1lmz2ZoSvKxy7bBpoQZOLP9NQToIz8EBj560Zj2sZEM0mKIVZeVdR2tE1ruG/TxURigk83sPUcs/aUQh8Bf12QTsVKXGM1AAAAAElFTkSuQmCC",
      blurWidth:7,
      blurHeight:8
    },
    lC=e=>(0,i.jsx)("svg",{
      width:10,
      height:10,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"m5.816 4.973 4.05-4.05a.556.556 0 0 0-.783-.784l-4.05 4.05L.983.134A.556.556 0 0 0 .2.917l4.05 4.056-4.056 4.05a.556.556 0 1 0 .784.783l4.055-4.05 4.05 4.05a.556.556 0 0 0 .783-.783l-4.05-4.05Z",
        fill:"#000"
      })
    }),
    lS=e=>(0,i.jsxs)("svg",{
      width:40,
      height:40,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:40,
        height:40,
        rx:20,
        fill:"#EFF5FF"
      }),(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M22.963 24.191c1.076-1.017 2.606-1.952 4.34-1.952s3.265.935 4.34 1.952c.543.513.985 1.06 1.294 1.55.155.244.28.48.368.697.085.208.149.43.149.633 0 .205-.064.426-.149.634a4.555 4.555 0 0 1-.368.697 8.277 8.277 0 0 1-1.293 1.55c-1.076 1.016-2.607 1.952-4.34 1.952-1.735 0-3.265-.936-4.341-1.952a8.277 8.277 0 0 1-1.294-1.55 4.564 4.564 0 0 1-.368-.697 1.74 1.74 0 0 1-.148-.634c0-.204.063-.425.148-.633.088-.216.214-.453.368-.697.31-.49.752-1.037 1.294-1.55Zm2.884 1.425c.351-.351.854-.522 1.456-.522.603 0 1.105.17 1.456.522.351.35.521.853.521 1.455 0 .603-.17 1.105-.521 1.456s-.853.521-1.456.521c-.602 0-1.105-.17-1.456-.52-.35-.352-.52-.854-.52-1.457 0-.602.17-1.104.52-1.455Z",
        fill:"url(#icon-upsell-one_svg__a)"
      }),(0,i.jsx)("path",{
        d:"M10.317 22.657c1.602.94 4.111 1.834 7.836 1.834.719 0 1.392-.035 2.023-.096-.137.185-.261.365-.372.54-.196.31-.355.61-.466.884-.108.264-.189.545-.189.804s.081.54.189.803c.111.274.27.574.466.885.078.123.164.248.254.375-.58.08-1.214.128-1.906.128-3.577 0-5.61-1.223-6.613-2.123-.636-.57-.917-1.352-1.04-2.06a34.3 34.3 0 0 1-.295-2.041l.113.067Zm15.853-6.23c.115 1.349.152 2.645.1 3.955a6.495 6.495 0 0 1-.217.18c-1.482.214-2.817.934-3.896 1.791-1.097.265-2.42.442-4.004.442-3.44 0-5.65-.823-6.977-1.6a7.476 7.476 0 0 1-1.141-.813 31.388 31.388 0 0 1 .101-3.955 6.11 6.11 0 0 0 1.618 1.053c1.629.744 3.834 1.068 6.399 1.068s4.77-.324 6.399-1.067a6.11 6.11 0 0 0 1.618-1.054Zm-8.017-6.603c4.925 0 7.695 1.265 7.695 3.514 0 2.249-2.77 3.514-7.695 3.514-4.925 0-7.696-1.265-7.696-3.514 0-2.249 2.77-3.514 7.696-3.514Z",
        fill:"url(#icon-upsell-one_svg__b)"
      }),(0,i.jsxs)("defs",{
        children:[(0,i.jsxs)("linearGradient",{
          id:"icon-upsell-one_svg__a",
          x1:30.212,
          y1:27.071,
          x2:25.062,
          y2:31.945,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        }),(0,i.jsxs)("linearGradient",{
          id:"icon-upsell-one_svg__b",
          x1:22.003,
          y1:19.319,
          x2:12.816,
          y2:25.176,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })]
      })]
    }),
    lI=e=>(0,i.jsxs)("svg",{
      width:40,
      height:40,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:40,
        height:40,
        rx:20,
        fill:"#EFF5FF"
      }),(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M15.57 9.948c.153-.018.335-.03.546-.03.212 0 .394.012.548.03.676.083.978.671 1 1.191.036.855.084 2.798.084 7.048s-.048 6.193-.084 7.047c-.022.52-.324 1.109-1 1.191a4.56 4.56 0 0 1-.548.03 4.56 4.56 0 0 1-.547-.03c-.676-.082-.979-.67-1-1.19-.036-.855-.085-2.799-.085-7.048 0-4.25.05-6.193.085-7.048.021-.52.324-1.108 1-1.19Zm9.192.862a5.2 5.2 0 0 1 .494-.022c.188 0 .352.009.493.022.696.067 1.035.659 1.059 1.214.035.812.08 2.55.08 6.163v.632a5.847 5.847 0 0 0-3.264-.846c.001-3.467.045-5.153.08-5.949.023-.555.362-1.147 1.058-1.214Zm-2.507 3.43c.03.652.063 1.831.063 3.929a5.883 5.883 0 0 0-3.249 2.248c-.009-.595-.015-1.328-.015-2.23 0-2.109.032-3.293.064-3.948.03-.648.468-1.232 1.204-1.267a7.781 7.781 0 0 1 .728 0c.736.035 1.174.619 1.205 1.268Zm-11.017 4.386a11.137 11.137 0 0 1 .618 0c.742.021 1.238.582 1.274 1.279.026.513.049 1.333.049 2.634 0 1.3-.023 2.12-.05 2.633-.035.697-.531 1.258-1.273 1.28a11.144 11.144 0 0 1-.618 0c-.742-.022-1.238-.583-1.274-1.28a53.503 53.503 0 0 1-.05-2.633c0-1.301.024-2.12.05-2.634.036-.697.532-1.258 1.274-1.279Zm8.034 5.218a4.57 4.57 0 1 1 8.714 1.928l.139.116c.506.42 1.017.846 1.516 1.325.521.499.623 1.303.093 1.878-.203.22-.414.431-.632.635-.576.538-1.387.436-1.887-.092-.474-.5-.896-1.012-1.313-1.518l-.113-.137a4.57 4.57 0 0 1-6.517-4.135Zm4.57-2.393a2.394 2.394 0 1 0 0 4.787 2.394 2.394 0 0 0 0-4.787Z",
        fill:"url(#icon-upsell-two_svg__a)"
      }),(0,i.jsx)("defs",{
        children:(0,i.jsxs)("linearGradient",{
          id:"icon-upsell-two_svg__a",
          x1:24.77,
          y1:20,
          x2:14.464,
          y2:27.666,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })
      })]
    }),
    lE=e=>(0,i.jsxs)("svg",{
      width:40,
      height:40,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        width:40,
        height:40,
        rx:20,
        fill:"#EFF5FF"
      }),(0,i.jsx)("path",{
        d:"M21.833 10.834a9.167 9.167 0 1 1 0 18.333h-3.666a9.167 9.167 0 1 1 0-18.333h3.666Zm-3.666 1.222a7.945 7.945 0 1 0 0 15.889 7.945 7.945 0 0 0 0-15.89Zm9.928 12.834h-2.173a9.164 9.164 0 0 1-.924 1.222l1.91.001a8.036 8.036 0 0 0 1.187-1.223Zm-9.48-10.718.288.777c.793 2.14 2.658 3.856 5.075 4.671.371.125.397.557.08.726l-.08.034c-2.417.815-4.282 2.53-5.075 4.67l-.288.778c-.131.352-.676.376-.862.071l-.034-.07-.29-.78c-.793-2.14-2.657-3.855-5.074-4.67-.371-.124-.397-.556-.079-.725l.08-.034c2.416-.815 4.28-2.53 5.074-4.67l.289-.779c.14-.377.755-.377.895 0Zm11.07 7.051h-2.433c-.055.418-.14.825-.248 1.223h2.39c.128-.396.225-.804.29-1.223Zm-.29-3.666-2.391-.001c.11.397.193.805.248 1.222h2.432a7.963 7.963 0 0 0-.29-1.221Zm-2.486-3.669L25 13.89c.34.38.65.789.923 1.222h2.174a8.073 8.073 0 0 0-1.187-1.223Z",
        fill:"url(#icon-upsell-three_svg__a)"
      }),(0,i.jsx)("defs",{
        children:(0,i.jsxs)("linearGradient",{
          id:"icon-upsell-three_svg__a",
          x1:25.202,
          y1:20,
          x2:15.482,
          y2:28.673,
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,i.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })
      })]
    }),
    lF=n(25675),
    lA=n.n(lF),
    lZ=n(18682);
    let lN=(0,T.createGlobalStyle)([".upgrade-modal{.ufc-modal-container{padding:0px;.ufc-modal-content{background-color:transparent;padding:0;}}}"]),
    lR=T.default.div.withConfig({
      componentId:"sc-563020e1-0"
    })(["display:flex;height:492px;border-radius:8px;overflow:hidden;"]),
    lD=T.default.div.withConfig({
      componentId:"sc-563020e1-1"
    })(["flex-basis:50%;background-color:#253C66;"]),
    lT=T.default.div.withConfig({
      componentId:"sc-563020e1-2"
    })(["flex-basis:50%;padding:32px;background-color:#FFF;"]),
    lL=T.default.div.withConfig({
      componentId:"sc-563020e1-3"
    })(["margin-bottom:40px;"]),
    lM=T.default.button.withConfig({
      componentId:"sc-563020e1-4"
    })(["padding:0;border:none;background:transparent;cursor:pointer;height:24px;width:24px;display:flex;justify-content:center;align-items:center;position:absolute;top:16px;right:16px;"]),
    lz=T.default.div.withConfig({
      componentId:"sc-563020e1-5"
    })(["display:flex;flex-direction:column;gap:6px;"]),
    lP=T.default.div.withConfig({
      componentId:"sc-563020e1-6"
    })(["display:flex;flex-direction:column;gap:24px;margin-top:24px;"]),
    lO=T.default.div.withConfig({
      componentId:"sc-563020e1-7"
    })(["display:flex;gap:12px;align-items:flex-start;"]),
    lU=T.default.div.withConfig({
      componentId:"sc-563020e1-8"
    })(["flex-shrink:0;width:40px;height:40px;"]),
    lB=T.default.div.withConfig({
      componentId:"sc-563020e1-9"
    })(["display:flex;flex-direction:column;flex:1;"]),
    lV=T.default.p.withConfig({
      componentId:"sc-563020e1-10"
    })(["font-size:13px;font-weight:500;line-height:23px;color:#454B5D;margin:0;"]),
    lW=T.default.p.withConfig({
      componentId:"sc-563020e1-11"
    })(["font-size:13px;font-weight:400;line-height:23px;color:#454B5D;margin:0;"]),
    lH=(0,T.default)(eO.zx).withConfig({
      componentId:"sc-563020e1-12"
    })(["width:100% !important;font-size:14px !important;padding:4px !important;height:fit-content !important;"]),
    lq=T.default.div.withConfig({
      componentId:"sc-563020e1-13"
    })([""]);
    T.default.div.withConfig({
      componentId:"sc-563020e1-14"
    })(["margin-top:12px;font-size:12px;font-style:normal;font-weight:400;line-height:normal;text-align:center;a{margin-left:4px;}"]);
    let lQ=T.default.div.withConfig({
      componentId:"sc-563020e1-15"
    })(["height:24px;width:14px;position:relative;"]);
    var lK=()=>{
      let{
        upgradeModalVisible:e,
        setUpgradeModalVisible:t,
        setSuccessModalVisible:n,
        setUpgradeErrorModalVisible:a
      }=(0,t0.fB)(),
      [r,l]=(0,o.useState)(!1),
      d=(0,R.useRouter)(),
      c=(0,s.I0)(),
      {
        parentType:u
      }=d.query,
      {
        currentOrgReducer:{
          planType:p,
          status:h
        },
        profileReducer:{
          email:f,
          name:m
        }
      }=(0,s.v9)(e=>e),
      g=(0,o.useCallback)(()=>{
        t(!1)
      },[t]),
      x=(0,o.useCallback)(async()=>{
        if(!r){
          l(!0);
          try{
            c((0,K.qS)({
              taraProduct:"upgrade_request",
              parentType:u||"unknown",
              source:"upgrade_modal"
            })),
            await lZ.Z.submitForm({
              email:f||""
            },"44b29383-6d90-4ac8-bfd1-22e00605ff9f"),
            n(!0)
          }
          catch(e){
            ey.l.error("Failed to submit upgrade request",e),
            t(!1),
            a(!0)
          }
          finally{
            l(!1)
          }
        }
      },[r,f,n,t,a,u,c]),
      v="Trial"===p||"Canceled"===h;
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(lN,{}),(0,i.jsx)(eO.YI,{
          visible:e,
          footer:null,
          closable:!1,
          className:"upgrade-modal",
          style:{
            top:0
          },
          width:v?470:800,
          maskStyle:{
            backdropFilter:"none"
          },
          children:v?(0,i.jsxs)(lk.ModalWrapper,{
            children:[(0,i.jsx)("button",{
              type:"button",
              onClick:g,
              "aria-label":"Close modal",
              children:(0,i.jsx)(lC,{})
            }),(0,i.jsx)("iframe",{
              style:{
                width:"420px",
                height:"540px",
                border:"none",
                margin:"0",
                padding:"0"
              },
              title:"hubspot",
              src:"https://info.uxcam.com/meetings/meet-uxcam/consultation?embed=true&email=".concat(f,"&firstname=").concat(m)
            })]
          }):(0,i.jsxs)(lR,{
            children:[(0,i.jsx)(lD,{
              children:(0,i.jsx)(lA(),{
                src:l_,
                alt:"",
                height:492,
                width:400,
                priority:!0,
                loading:"eager",
                fetchPriority:"high",
                placeholder:"blur"
              })
            }),(0,i.jsxs)(lT,{
              children:[(0,i.jsx)(lM,{
                onClick:g,
                children:(0,i.jsx)(lC,{})
              }),(0,i.jsxs)(lL,{
                children:[(0,i.jsxs)(lz,{
                  children:[(0,i.jsx)(r0,{
                    children:"Unlock deeper AI insights"
                  }),(0,i.jsx)(r1,{
                    children:"Upgrade to Pro to build a comprehensive knowledge base that turns user signals into confident product strategies."
                  })]
                }),(0,i.jsxs)(lP,{
                  children:[(0,i.jsxs)(lO,{
                    children:[(0,i.jsx)(lU,{
                      children:(0,i.jsx)(lS,{})
                    }),(0,i.jsxs)(lB,{
                      children:[(0,i.jsx)(lV,{
                        children:"Capture the full context"
                      }),(0,i.jsx)(lW,{
                        children:"Analyze a broad representative sample of sessions to reveal reliable trends and patterns."
                      })]
                    })]
                  }),(0,i.jsxs)(lO,{
                    children:[(0,i.jsx)(lU,{
                      children:(0,i.jsx)(lI,{})
                    }),(0,i.jsxs)(lB,{
                      children:[(0,i.jsx)(lV,{
                        children:"Go deeper where it counts"
                      }),(0,i.jsx)(lW,{
                        children:"Guide Tara's analysis into key areas, so insights align with your top priorities."
                      })]
                    })]
                  }),(0,i.jsxs)(lO,{
                    children:[(0,i.jsx)(lU,{
                      children:(0,i.jsx)(lE,{})
                    }),(0,i.jsxs)(lB,{
                      children:[(0,i.jsx)(lV,{
                        children:"More credits to keep the momentum"
                      }),(0,i.jsx)(lW,{
                        children:"Empower your team to run deep dives and ask follow-up questions freely."
                      })]
                    })]
                  })]
                })]
              }),(0,i.jsx)(lq,{
                children:(0,i.jsx)(lH,{
                  variant:"primary",
                  onClick:x,
                  disabled:r,
                  children:r?(0,i.jsx)(lQ,{
                    children:(0,i.jsx)(eO.$j,{
                      "data-size":"xs"
                    })
                  }):"Request for upgrade"
                })
              })]
            })]
          })
        })]
      })
    };
    let lG=(0,T.default)(r0).withConfig({
      componentId:"sc-354ce055-0"
    })(["margin-bottom:8px;"]);
    var l$=()=>{
      let{
        setSessionProcessingErrorModalVisible:e,
        sessionProcessingErrorModalVisible:t
      }=(0,t0.fB)(),
      n=(0,R.useRouter)(),
      a=(0,s.I0)(),
      {
        parentType:r
      }=n.query,
      l="They may have already been analyzed, don’t include a video, or are longer than 20 minutes.";
      (0,o.useEffect)(()=>{
        t&&a((0,K.b4)({
          error:l,
          parentType:r||"unknown"
        }))
      },[t,r,a]);
      let d=(0,i.jsx)(r2,{
        children:(0,i.jsx)(r5,{
          type:"button",
          variant:"ghost",
          size:"large",
          onClick:()=>{
            e(!1)
          },
          children:"Close"
        })
      });
      return(0,i.jsxs)(eO.YI,{
        visible:t,
        footer:d,
        closable:!1,
        className:"duration-modal",
        style:{
          top:0
        },
        children:[(0,i.jsx)(lG,{
          children:"We couldn’t process your sessions"
        }),(0,i.jsxs)(r1,{
          children:[l,(0,i.jsx)("a",{
            href:"https://help.uxcam.com/en/articles/13367270-what-is-tara",
            target:"_blank",
            rel:"noreferrer",
            children:" Learn more."
          })]
        })]
      })
    },
    lY=()=>(0,i.jsxs)(i.Fragment,{
      children:[(0,i.jsx)(lp,{}),(0,i.jsx)(lf,{}),(0,i.jsx)(lv,{}),(0,i.jsx)(lj,{}),(0,i.jsx)(lK,{}),(0,i.jsx)(l$,{})]
    });
    let lX=(0,T.createGlobalStyle)([".share-chat-error-modal{.ant-modal-content{border-radius:12px;box-shadow:0px 8px 32px rgba(0,0,0,0.12);.ant-modal-body{padding:32px;}}}"]),
    lJ=T.default.div.withConfig({
      componentId:"sc-4e8246c2-0"
    })(["display:flex;flex-direction:column;gap:24px;"]),
    l0=T.default.div.withConfig({
      componentId:"sc-4e8246c2-1"
    })(["display:flex;flex-direction:column;gap:12px;"]),
    l1=T.default.div.withConfig({
      componentId:"sc-4e8246c2-2"
    })(["display:flex;align-items:center;gap:8px;"]),
    l2=()=>(0,i.jsxs)("svg",{
      width:"24",
      height:"24",
      viewBox:"0 0 24 24",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,i.jsx)("circle",{
        cx:"12",
        cy:"12",
        r:"10",
        fill:"#FBBF24"
      }),(0,i.jsx)("path",{
        d:"M12 8V13",
        stroke:"white",
        strokeWidth:"2",
        strokeLinecap:"round"
      }),(0,i.jsx)("circle",{
        cx:"12",
        cy:"16",
        r:"1",
        fill:"white"
      })]
    }),
    l5=T.default.h2.withConfig({
      componentId:"sc-4e8246c2-3"
    })(["font-family:Roboto;font-weight:500;font-size:18px;line-height:normal;color:",";margin:0;"],e0.r.colors.surface500.toString()),
    l4=T.default.p.withConfig({
      componentId:"sc-4e8246c2-4"
    })(["font-family:Roboto;font-weight:400;font-size:13px;line-height:22px;color:",";margin:0;"],e0.r.colors.surface400.toString()),
    l6=T.default.strong.withConfig({
      componentId:"sc-4e8246c2-5"
    })(["font-weight:500;"]),
    l3=T.default.div.withConfig({
      componentId:"sc-4e8246c2-6"
    })(["display:flex;justify-content:flex-end;gap:12px;"]),
    l8=T.default.button.withConfig({
      componentId:"sc-4e8246c2-7"
    })(["padding:8px 20px;border-radius:6px;border:none;font-family:Roboto;font-size:13px;font-weight:500;cursor:pointer;color:",";background:transparent;&:hover{background:",";}"],e0.r.colors.primary500.toString(),e0.r.colors.primary10.toString()),
    l7=T.default.button.withConfig({
      componentId:"sc-4e8246c2-8"
    })(["padding:8px 20px;border-radius:6px;border:none;font-family:Roboto;font-size:13px;font-weight:500;cursor:pointer;color:white;background:",";&:hover{background:",";}"],e0.r.colors.primary500.toString(),e0.r.colors.primary600.toString());
    var l9=e=>{
      let{
        visible:t,
        errorType:n,
        onClose:o,
        onSwitchAccount:s
      }=e;
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(lX,{}),(0,i.jsx)(ef.default,{
          visible:t,
          closable:!1,
          footer:null,
          className:"share-chat-error-modal",
          centered:!0,
          width:470,
          destroyOnClose:!0,
          children:(0,i.jsx)(lJ,{
            children:(()=>{
              switch(n){
                case"expired":return(0,i.jsxs)(i.Fragment,{
                  children:[(0,i.jsxs)(l0,{
                    children:[(0,i.jsxs)(l1,{
                      children:[(0,i.jsx)(l2,{}),(0,i.jsx)(l5,{
                        children:"This link has expired"
                      })]
                    }),(0,i.jsx)(l4,{
                      children:"For security and data privacy, Tara AI shared links have a limited lifespan. To view this chat, please ask the sender to generate a new link."
                    })]
                  }),(0,i.jsx)(l3,{
                    children:(0,i.jsx)(l8,{
                      onClick:o,
                      children:"Close"
                    })
                  })]
                });
                case"no_permission":return(0,i.jsxs)(i.Fragment,{
                  children:[(0,i.jsxs)(l0,{
                    children:[(0,i.jsxs)(l1,{
                      children:[(0,i.jsx)(l2,{}),(0,i.jsx)(l5,{
                        children:"Can't open this chat"
                      })]
                    }),(0,i.jsx)(l4,{
                      children:"Your account doesn't have access to the app where this chat was shared. Try switching accounts, or contact the sender to request access."
                    })]
                  }),(0,i.jsxs)(l3,{
                    children:[(0,i.jsx)(l8,{
                      onClick:o,
                      children:"Continue on this account"
                    }),(0,i.jsx)(l7,{
                      onClick:s,
                      children:"Switch account"
                    })]
                  })]
                });
                case"ai_disabled":return(0,i.jsxs)(i.Fragment,{
                  children:[(0,i.jsxs)(l0,{
                    children:[(0,i.jsxs)(l1,{
                      children:[(0,i.jsx)(l2,{}),(0,i.jsx)(l5,{
                        children:"Can't open this chat"
                      })]
                    }),(0,i.jsxs)(l4,{
                      children:["AI has been disabled for this app. Go to ",(0,i.jsx)(l6,{
                        children:"Subscription settings > Tara AI > Turn On AI"
                      })," for this app and try again."]
                    })]
                  }),(0,i.jsx)(l3,{
                    children:(0,i.jsx)(l8,{
                      onClick:o,
                      children:"Close"
                    })
                  })]
                });
                default:return null
              }
            })()
          })
        })]
      })
    },
    de=n(54763),
    dt=n(82761),
    dn=n(14811);
    let di=()=>{
      let e=(0,a.useQueryClient)(),
      t=(0,B.e)("web"),
      {
        urlReducer:{
          appId:n,
          parentType:i
        },
        appFilter:{
          dateSegment:r,
          heatmap:{
            segment:l=[]
          }
        },
        currentApp:d
      }=(0,s.v9)(e=>{
        let{
          urlReducer:t,
          appFilter:n,
          currentAppReducer:i
        }=e;
        return{
          urlReducer:t,
          appFilter:n,
          currentApp:i
        }
      }),
      c=(0,o.useMemo)(()=>{
        if(!n||!r)return null;
        let e=[{
          sortName:eZ.wg.visitCount||"count",
          sortOrder:"desc"
        }];
        try{
          let t=localStorage.getItem("screenSortBy");
          if(t&&"undefined"!==t){
            let n=JSON.parse(t);
            n&&n.length>0&&(e=[{
              sortName:eZ.wg[n[0].id]||n[0].id,
              sortOrder:n[0].desc?"desc":"asc"
            }])
          }
        }
        catch(e){}let t={
          appid:n,
          date_range:r,
          filters:(0,dn.q)(l)||[],
          orderBy:e
        };
        return dt.p.generateKey(t)
      },[n,r,l]),
      u=(0,o.useRef)(null),
      p=(0,o.useRef)(null),
      h=(0,o.useRef)(!1);
      (0,o.useEffect)(()=>{
        if(!n||!c||!r||t||!(null==d?void 0:d.appType))return;
        p.current!==n&&(u.current=null,h.current=!1,p.current=n);
        let o=[{
          sortName:eZ.wg.visitCount||"count",
          sortOrder:"desc"
        }];
        try{
          let e=localStorage.getItem("screenSortBy");
          if(e&&"undefined"!==e){
            let t=JSON.parse(e);
            t&&t.length>0&&(o=[{
              sortName:eZ.wg[t[0].id]||t[0].id,
              sortOrder:t[0].desc?"desc":"asc"
            }])
          }
        }
        catch(e){}let s={
          appid:n,
          date_range:r,
          filters:(0,dn.q)(l)||[],
          orderBy:o
        },
        a=dt.p.get(s);
        if(a&&u.current===c||h.current&&"heatmapsList"!==i&&a)return;
        if(a){
          u.current=c,
          h.current=!0;
          return
        }
        let f=setTimeout(async()=>{
          try{
            await dt.p.getOrFetch(s,async()=>{
              let t=Date.now(),
              n=await de.Z.getScreenList(s),
              i=Date.now()-t;
              return e.setQueryData(["screen-table-list",s],n),
              {
                data:n,
                duration:i
              }
            }),
            u.current=c,
            h.current=!0
          }
          catch(e){}
        },1e3);
        return()=>clearTimeout(f)
      },[d,t,n,c,i,e,r,l])
    };
    var ds=n(68628),
    da=n(18446),
    dr=n.n(da),
    dl=(0,o.memo)(()=>{
      let{
        advancedFiltersAllowed:e,
        notAllowedFiltersApplied:t,
        filterOptionsWithoutNotAllowedCategories:n,
        setFiltersLockedModal:i
      }=(0,E.I)(),
      {
        callListApi:a,
        segmentType:r,
        pageType:l
      }=(0,ds.Z)(),
      {
        appFilter:d
      }=(0,s.v9)(e=>e),
      [c,u]=(0,o.useState)(!1),
      p=o.useRef(d),
      h=(0,R.useRouter)();
      if(o.useEffect(()=>{
        !dr()(p.current,d)&&c&&(u(!1),p.current=d)
      },[d,c]),e||c||!d||!l||!h)return null;
      if(t){
        let e=d[r],
        t=Object.values(n).flat().map(e=>e.attribute),
        o=JSON.parse(JSON.stringify(e.segment));
        o=o.filter(e=>t.includes(e.attribute));
        let s=new URLSearchParams(h.asPath.split("?")[1]);
        Array.from(s).forEach(e=>{
          "event_name"===e[0]?JSON.parse(e[1]).v.some(e=>!t.includes(e))&&s.delete(e[0]):t.includes(e[0])||s.delete(e[0])
        });
        let l=new URL(window.location);
        l.search=s.toString(),
        h.replace({
          query:{
            ...h.query,
            url:l.pathname+l.search
          }
        },l.pathname+l.search),
        a(o),
        u(!0),
        i(!0)
      }
      return null
    }),
    dd=n(28599),
    dc=n(4490),
    du=n(91226),
    dp=n(48002),
    dh=n(29163),
    df=n(11182);
    function dm(e,t,n,i,o,s,a){
      return{
        key:t,
        icon:i,
        children:o,
        label:e,
        disabled:s,
        type:a,
        dataAttributes:n
      }
    }
    let dg=e=>{
      let{
        title:t,
        badgeTitle:n
      }=e;
      return(0,i.jsxs)(df.H4,{
        children:[t,n&&(0,i.jsx)(df.K$,{
          children:n
        })]
      })
    },
    dx=(0,o.memo)(e=>{
      let{
        children:t,
        isLocked:n,
        isNew:a,
        id:r,
        collapsed:l,
        isSubmenu:d
      }=e,
      {
        urlReducer:{
          parentType:c
        }
      }=(0,s.v9)(e=>e),
      u=(0,B.e)("web"),
      p=(0,o.useMemo)(()=>dh.rO[r]===c,[r,c]),
      {
        getRouteQuery:h,
        getRouteUrl:f
      }=(0,dc.Z)(),
      m=(0,o.useMemo)(()=>r===dh.z_.screensAnalytics&&u?"heatmapsListWeb":r,[u,r]);
      return(0,i.jsx)(df.qk,{
        isLocked:n||!1,
        isNew:a,
        children:(0,i.jsx)(sP(),{
          href:h(r),
          as:f(r),
          children:!d&&(0,i.jsxs)(i.Fragment,{
            children:[p?(0,i.jsx)(du.Z,{
              animationData:l?dh.Kp[m]:dh.fR[m],
              active:p,
              dependencies:[l]
            }):t,n&&(0,i.jsx)("span",{
              className:"locked",
              children:(0,i.jsx)(dd.mB,{})
            })]
          })
        })
      })
    });
    var dv=e=>{
      let{
        collapsedMenu:t
      }=e,
      n=(0,R.useRouter)(),
      {
        noCodeEventsFeatureFlag:a
      }=(0,em.Z)(),
      {
        getRouteQuery:r,
        getRouteUrl:l
      }=(0,dc.Z)(),
      d=(0,eO.ye)("web-heatmaps"),
      [c,u]=(0,o.useState)([]),
      {
        urlReducer:{
          parentType:p,
          issueType:h
        },
        appFilter:f,
        currentAppReducer:{
          _id:m,
          hasAccess:g,
          isIntegrated:x
        },
        currentOrgReducer:{
          orgId:v
        }
      }=(0,s.v9)(e=>e),
      y=(0,s.I0)(),
      {
        eventsFeatureAllowed:b,
        screensFeatureAllowed:w,
        appFlowsFeatureAllowed:j,
        funnelsFeatureAllowed:k,
        issuesFeatureAllowed:_,
        retentionFeatureAllowed:C
      }=(0,E.I)(),
      S=(0,o.useMemo)(()=>void 0===m||"plan-downgrade"===p||!g||!v,[m,g,v,p]),
      F=(0,o.useCallback)(e=>e!==dh.z_.sessions,[]),
      A=(0,B.e)("web"),
      Z=(0,o.useCallback)(e=>{
        if(!A)return e===dh.z_.webHeatmaps;
        switch(e){
          case dh.z_.dashboard:case dh.z_.overview:case dh.z_.users:case dh.z_.events:case dh.z_.divider:case dh.z_.sessions:case dh.z_.aiSessions:case dh.z_.retention:case dh.z_.webHeatmaps:case dh.z_.screensAnalytics:case dh.z_.screens:case dh.z_.funnels:case dh.z_.appFlows:return!1;
          case dh.z_.issues:default:return!0
        }
      },[A]),
      N=(0,o.useMemo)(()=>"issues"===p?[h]:"nocodeEventsList"===p&&a?["eventsList"]:[p],[p,h,a]),
      D=(0,o.useMemo)(()=>Object.keys(dh.Hj).indexOf(p)>-1?[dh.Hj[p]]:[p],[p]);
      (0,o.useEffect)(()=>{
        t||u(D)
      },[D,t]);
      let T=(0,o.useCallback)(()=>A&&!d?dm((0,i.jsx)(dg,{
        title:"Heatmaps"
      }),dh.z_.webHeatmaps,{
        "data-intercom-target":"Heatmap"
      },(0,i.jsx)(dd.kV,{}),void 0,!0):A&&d?dm((0,i.jsx)(dg,{
        title:"Screens"
      }),dh.z_.screens,{
        "data-intercom-target":"Sidebar Screens"
      },(0,i.jsx)(dd.er,{}),[dm("Analytics",dh.z_.screensAnalytics,{
        "data-intercom-target":"Sidebar Screen Analytics"
      }),dm("Heatmaps",dh.z_.webHeatmaps,{
        "data-intercom-target":"Sidebar Web Heatmaps"
      })]):dm((0,i.jsx)(dg,{
        title:"Screens"
      }),dh.z_.screens,{
        "data-intercom-target":"Sidebar Heatmaps V2"
      },(0,i.jsx)(dd.H0,{})),[A,d]),
      L=(0,o.useMemo)(()=>{
        let e=T();
        return[dm((0,i.jsx)(dg,{
          title:"Overview"
        }),dh.z_.overview,{
          "data-intercom-target":"Sidebar Overview"
        },(0,i.jsx)(dd.ys,{})),dm((0,i.jsx)(dg,{
          title:"Dashboards"
        }),dh.z_.dashboard,{
          "data-intercom-target":"Sidebar Dashboards"
        },(0,i.jsx)(dd.QG,{})),dm((0,i.jsx)(dg,{
          title:"Retention"
        }),dh.z_.retention,{
          "data-intercom-target":"Sidebar Retention"
        },(0,i.jsx)(dd.E9,{})),dm((0,i.jsx)(dg,{
          title:"Funnels"
        }),dh.z_.funnels,{
          "data-intercom-target":"Sidebar Funnels"
        },(0,i.jsx)(dd.Dc,{})),dm((0,i.jsx)(dg,{
          title:A?"Flows":"App flows"
        }),dh.z_.appFlows,{
          "data-intercom-target":"Sidebar App Flows"
        },(0,i.jsx)(dd.oF,{}),[dm("Screen flow",dh.z_.screenFlow,{
          "data-intercom-target":"Sidebar Screen Flow 2"
        }),dm("Screen burst",dh.z_.screenBurst,{
          "data-intercom-target":"Sidebar Screen Burst"
        })]),dm("Divider",dh.z_.divider,null,null,void 0,void 0,"divider"),dm((0,i.jsx)(dg,{
          title:"Sessions"
        }),dh.z_.sessions,{
          "data-intercom-target":"Sidebar Sessions"
        },(0,i.jsx)(dd.NC,{}),[dm("List",dh.z_.sessionsList,{
          "data-intercom-target":"Session List"
        }),dm("Analytics",dh.z_.sessionAnalytics,{
          "data-intercom-target":"Session Analytics"
        })]),dm((0,i.jsx)(dg,{
          title:"Sessions"
        }),dh.z_.aiSessions,{
          "data-intercom-target":"Sidebar AI Sessions"
        },(0,i.jsx)(dd.NC,{}),[dm("List",dh.z_.aiSessionsList,{
          "data-intercom-target":"AI Session List"
        }),dm("Analytics",dh.z_.aiSessionAnalytics,{
          "data-intercom-target":"AI Session Analytics"
        })]),dm((0,i.jsx)(dg,{
          title:"Users"
        }),dh.z_.users,{
          "data-intercom-target":"Sidebar Users"
        },(0,i.jsx)(dd.oy,{})),dm((0,i.jsx)(dg,{
          title:"Events"
        }),dh.z_.events,{
          "data-intercom-target":"Sidebar Events"
        },(0,i.jsx)(dd.gN,{}),[dm("List",dh.z_.eventsList,{
          "data-intercom-target":"Sidebar Event List"
        }),dm("Analytics",dh.z_.eventAnalytics,{
          "data-intercom-target":"Sidebar Event Analytics"
        })]),...e?[e]:[],dm((0,i.jsx)(dg,{
          title:"Issues"
        }),dh.z_.issues,{
          "data-intercom-target":"Sidebar Issues"
        },(0,i.jsx)(dd.N$,{}),[dm("Crashes",dh.z_.crashes,{
          "data-intercom-target":"Sidebar Crashes"
        }),dm("UI Freeze",dh.z_.uiFreeze,{
          "data-intercom-target":"Sidebar UI Freezes"
        }),dm("Exceptions",dh.z_.exceptions,{
          "data-intercom-target":"Sidebar Exceptions"
        })])]
      },[A,T]),
      M=e=>L.find(t=>(null==t?void 0:t.children)&&t.children.length>0?t.children.find(t=>t.key===e):t.key===e),
      z=(0,o.useCallback)(e=>{
        var t,
        n;
        return null===(n=L.find(t=>t.key===e))||void 0===n?void 0:null===(t=n.children)||void 0===t?void 0:t[0].key
      },[L]),
      P=(0,o.useCallback)((e,t)=>{
        var i,
        o;
        if(t){
          let i=r(e,t),
          o=l(t);
          n.push(i,o);
          return
        }"usersList"!==e||(null===(i=f[I.Sz[e]])||void 0===i?void 0:i.segment.length)||(null===(o=f[I.Sz[e]])||void 0===o?void 0:o.activityFilterList.length)||y((0,e8.YS)([dp.Vv],"user"));
        let s=r(e),
        a=l(e);
        n.push(s,a)
      },[f,y,r,l,n]),
      O=(0,o.useCallback)(e=>{
        let{
          key:t
        }=e,
        n=z(t);
        if("issuesCrashesException"===t){
          P("issues",n);
          return
        }
        P(n)
      },[z,P]),
      U=(0,o.useCallback)(e=>{
        if(dh.QD.includes(e))switch(e){
          case"retention":return!C;
          case"eventsListAnalytics":return!b;
          case"heatmapsList":return!w;
          case"screenFlowBurst":return!j;
          case"funnels":return!k;
          case"issuesCrashesException":return!_
        }
        return!1
      },[j,b,k,_,C,w]),
      V=(0,o.useCallback)(function(e){
        let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],
        {
          icon:o,
          children:s,
          type:a,
          label:d,
          key:c,
          disabled:u
        }=e;
        if("divider"===a)return(0,i.jsx)(sX.default.Divider,{},e.key);
        let p=S||u;
        if(s&&s.length>0){
          let n=s.map(e=>V(e,!0));
          return(0,i.jsxs)(sX.default.SubMenu,{
            icon:(0,i.jsx)(dx,{
              id:c,
              isNew:null,
              isLocked:U(c),
              collapsed:t,
              children:o
            }),
            title:d,
            disabled:S,
            popupClassName:"collapsed-submenu-popup",
            onTitleClick:O,
            ...e.dataAttributes,
            children:[t&&(0,i.jsx)(sX.default.Item,{
              className:"collapsed-submenu-title",
              children:d
            },"".concat(c," ").concat(d)),n]
          },c)
        }
        return(0,i.jsx)(sX.default.Item,{
          icon:(0,i.jsx)(dx,{
            id:c,
            collapsed:t,
            isNew:null,
            isSubmenu:n,
            isLocked:U(c),
            children:o
          }),
          ...e.dataAttributes,
          disabled:p,
          children:p?(0,i.jsx)("a",{
            href:"#disabled",
            children:d
          }):(0,i.jsx)(sP(),{
            href:r(c),
            as:l(c),
            passHref:!0,
            legacyBehavior:!0,
            children:(0,i.jsx)("a",{
              href:"#!",
              children:d
            })
          })
        },c)
      },[t,S,r,l,U,O]),
      W=(0,o.useMemo)(()=>L.filter(e=>!Z(e.key)).filter(e=>F(e.key)).map(e=>V(e,!1)),[L,Z,F,V]);
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(df.vS,{
          collapsed:t
        }),(0,i.jsx)(sX.default,{
          mode:"inline",
          theme:"dark",
          openKeys:c,
          defaultSelectedKeys:["overview"],
          selectedKeys:N,
          inlineCollapsed:t,
          disabled:!x,
          onOpenChange:e=>{
            let t=e.find(e=>-1===c.indexOf(e));
            -1===dh.NU.indexOf(t)?u(e):u(t?[t]:[]),
            e.length||u([""])
          },
          onClick:e=>{
            let{
              key:t,
              keyPath:n
            }=e,
            i=M(t);
            if(i&&i.children&&i.children.length>0){
              let e=n[0];
              if("issuesCrashesException"===i.key){
                P("issues",e);
                return
              }
              P(e)
            }
            else P(t)
          },
          children:W
        })]
      })
    },
    dy=e=>(0,i.jsx)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        clipRule:"evenodd",
        d:"M14.087 12.286c.242 0 .474-.09.646-.251a.832.832 0 0 0 .267-.606V2.57c0-.682-.289-1.336-.802-1.818A2.832 2.832 0 0 0 12.26 0H3.739c-.726 0-1.423.27-1.937.753A2.494 2.494 0 0 0 1 2.571v10.715c0 .72.305 1.41.847 1.919A2.99 2.99 0 0 0 3.89 16h10.196c.242 0 .474-.09.646-.251a.832.832 0 0 0 .267-.606.831.831 0 0 0-.267-.606.944.944 0 0 0-.646-.251h-.304v-2h.304ZM2.947 2.469a1.07 1.07 0 0 1 .664-.219h3.452c.248 0 .487.08.662.22C7.9 2.61 8 2.8 8 3s-.099.39-.275.53c-.187.144-.421.222-.662.22H3.61c-.248 0-.487-.08-.662-.22A.682.682 0 0 1 2.674 3c0-.199.099-.39.275-.53l-.001-.001Zm.057 3.24c.21-.14.497-.219.795-.219H7.94c.299 0 .585.08.795.22.212.14.33.331.33.53s-.118.389-.328.53a1.458 1.458 0 0 1-.797.22H3.8c-.298 0-.585-.08-.795-.22-.212-.14-.33-.331-.33-.53s.12-.39.33-.53Zm8.953 8.577H3.89c-.282 0-.553-.106-.753-.293a.97.97 0 0 1-.312-.707.97.97 0 0 1 .312-.707c.2-.188.47-.293.753-.293h8.066v2Z"
      })
    }),
    db=n(80235),
    dw=n(76886),
    dj=n(74354),
    dk=n(30512);
    let d_=(0,T.default)(dj.Z).withConfig({
      componentId:"sc-d7d18668-0"
    })([""]);
    var dC=()=>{
      let{
        currentAppReducer:e
      }=(0,s.v9)(e=>e),
      {
        _id:t
      }=e,
      {
        data:n
      }=(0,dk.useFetchCheckListById)(t),
      a=(0,o.useMemo)(()=>{
        if(n){
          let e=Object.values(n).filter(e=>!0===e),
          t=Object.keys(n).length;
          return parseInt(e.length/t*100,10)
        }
        return 0
      },[n]);
      return(0,i.jsx)(d_,{
        type:"circle",
        width:25,
        percent:a
      })
    };
    let dS=(0,T.createGlobalStyle)(['.intercom-messenger-frame,[name="intercom-notifications-frame"],[name="intercom-borderless-frame"],[name="intercom-notification-stack-frame"]{transition:left 0.2s ease-in-out !important;}[data-testid="launcher-with-badge-cutout-none"]{display:none !important;}']),
    dI=T.default.button.withConfig({
      componentId:"sc-bd1d5fd9-0"
    })(["padding:",";height:34px;border:none;background-color:transparent;cursor:pointer;color:#2D74FF;border-radius:6px;display:flex;justify-content:space-between;align-items:center;transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out;"," ",""],e=>{
      let{
        collapsed:t
      }=e;
      return t?"10px 10px 10px 11px":"10px 15px 10px 11px"
    },e=>{
      let{
        active:t
      }=e;
      return t&&(0,T.css)(["background-color:#5D97FF;color:#FFFFFF;span{color:#FFFFFF;}"])
    },e=>{
      let{
        active:t
      }=e;
      return!t&&(0,T.css)(["&:hover{color:#5D97FF;background-color:#EFF5FF;}"])
    }),
    dE=(0,T.default)(e=>(0,i.jsx)("svg",{
      width:14,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M12.326 0H1.72C.79 0 .047.744.047 1.674v10.93c0 .93.744 1.675 1.674 1.675h8.046l4.187 1.72V1.675c0-.93-.745-1.674-1.628-1.674Zm-.419 10.744c-1.256.977-3.023 1.535-4.884 1.535H6.93c-1.814 0-3.535-.558-4.79-1.535-.233-.186-.233-.465-.093-.698.186-.232.465-.232.697-.093 1.07.838 2.605 1.303 4.186 1.303 1.675 0 3.256-.466 4.372-1.35.233-.185.512-.139.698.094.14.279.14.558-.093.744Z",
        fill:"currentColor"
      })
    })).withConfig({
      componentId:"sc-bd1d5fd9-1"
    })(["width:14px;height:16px;flex-shrink:0;"]),
    dF=(0,T.default)(e=>(0,i.jsx)("svg",{
      width:6,
      height:11,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M2.775 5.194a.115.115 0 0 1 0-.153c.288-.324 1.46-1.642 2.95-3.297.228-.253.363-.595.21-.9A1.748 1.748 0 0 0 5.618.41 1.687 1.687 0 0 0 5.13.056c-.264-.124-.559-.027-.789.153C2.74 1.463 1.157 3.261.298 4.297a1.28 1.28 0 0 0 0 1.641c.86 1.036 2.441 2.834 4.044 4.084.23.18.523.276.787.153.183-.088.35-.208.49-.354.127-.128.233-.275.315-.435.154-.305.019-.647-.21-.9a968.748 968.748 0 0 1-2.949-3.292Z",
        fill:"currentColor"
      })
    })).withConfig({
      componentId:"sc-bd1d5fd9-2"
    })(["color:rgb(69,75,93);transform:rotate(180deg);",""],e=>{
      let{
        active:t
      }=e;
      return t&&(0,T.css)(["color:#FFFFFF;"])
    }),
    dA=T.default.span.withConfig({
      componentId:"sc-bd1d5fd9-3"
    })(["flex:1;color:rgb(73,87,110);text-align:left;padding-left:14px;font-size:14px;&[aria-hidden='true']{display:none;}"]);
    var dZ=e=>{
      let{
        collapsed:t
      }=e,
      [n,a]=o.useState(!1),
      r=o.useRef(!1),
      {
        sidebarReducer:{
          collapse:l
        }
      }=(0,s.v9)(e=>e),
      d=(0,o.useCallback)(()=>{
        window.Intercom&&(n?window.Intercom("hide"):window.Intercom("show"))
      },[n]),
      c=l?89:209,
      u=(0,o.useRef)(c);
      u.current=c;
      let p=(0,o.useRef)(null);
      return(0,o.useEffect)(()=>{
        r.current&&window.Intercom&&p.current!==u.current&&(window.Intercom("update",{
          horizontal_padding:u.current,
          alignment:"left"
        }),p.current=u.current);
        let e=null;
        if(!r.current){
          let t=()=>{
            window.Intercom("update",{
              hide_default_launcher:!0,
              alignment:"left",
              horizontal_padding:u.current
            }),
            window.Intercom("onShow",()=>{
              window.Intercom("update",{
                horizontal_padding:u.current,
                alignment:"left"
              }),
              p.current=u.current,
              a(!0)
            }),
            window.Intercom("onHide",()=>{
              a(!1)
            })
          };
          window.Intercom?(r.current=!0,t()):e=setInterval(()=>{
            window.Intercom&&(r.current=!0,t(),clearInterval(e),e=null)
          },500)
        }
        return()=>{
          e&&clearInterval(e)
        }
      },[l]),
      (0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(dS,{
          collapsed:t
        }),(0,i.jsxs)(dI,{
          active:n,
          onClick:d,
          collapsed:t,
          children:[(0,i.jsx)(dE,{}),(0,i.jsx)(dA,{
            "aria-hidden":t,
            children:"Talk to us"
          }),(0,i.jsx)(dF,{
            active:n
          })]
        })]
      })
    };
    let dN=h()(Promise.all([n.e(6493),n.e(2153),n.e(5004),n.e(3196)]).then(n.bind(n,43196)),{
      loadableGenerated:{
        webpack:()=>[43196]
      },
      loading:()=>(0,i.jsx)("div",{})
    });
    function dR(e,t,n,i){
      return{
        key:t,
        icon:n,
        label:e,
        popupClassName:i
      }
    }
    var dD=e=>{
      let{
        organizationIndex:t,
        navigateToTeam:n,
        navigateToSubscription:o,
        navigateToAccountSetting:a,
        urlRoutePageName:r,
        dispatchPortalLink:l,
        collapsed:d,
        logout:u,
        planHatPortalAccessData:p
      }=e,
      h=(0,R.useRouter)(),
      {
        urlReducer:{
          parentType:f
        },
        currentAppReducer:{
          isIntegrated:m
        }
      }=(0,s.v9)(e=>e),
      {
        getRouteQuery:g,
        getRouteUrl:x,
        handleIntercom:v
      }=(0,dc.Z)(),
      {
        aiSessionFeatureAllowed:y
      }=(0,E.I)()||{},
      b=(0,B.e)("web"),
      w=[...y&&!b?[dR("Guide","guide",(0,i.jsx)(dy,{}))]:[dR("Talk to us","talkToUs",(0,i.jsx)(dd.m2,{}))],dR("Documentation","documentation",(0,i.jsx)(dd.$l,{})),dR("Product updates","productUpdates",(0,i.jsx)(dd.tT,{}))],
      j=e=>{
        if(!b&&"guide"===e){
          let t=g(e),
          n=x(e);
          h.push(t,n)
        }
      };
      return(0,i.jsxs)(df.YX,{
        collapsed:d,
        children:[b?(0,i.jsx)(N.Z,{
          title:"Bugs & feedback",
          placement:"right",
          children:(0,i.jsx)(df.jJ,{
            rel:"noreferrer",
            target:"_blank",
            href:"https://uxcamcom.atlassian.net/servicedesk/customer/portal/10",
            children:(0,i.jsx)(c.Z,{
              icon:(0,i.jsx)(dd.Qm,{}),
              children:d?null:"Bugs & feedback"
            })
          })
        }):null,!m||b||y?null:(0,i.jsx)(N.Z,{
          title:"Guide",
          placement:"right",
          children:(0,i.jsxs)(c.Z,{
            className:"guide"===f?"selected":"",
            icon:"guide"===f?(0,i.jsx)(du.Z,{
              animationData:db.lK,
              active:"guide"===f
            }):(0,i.jsx)(dd.x5,{}),
            onClick:()=>j("guide"),
            children:[d?null:"Guide",d?null:(0,i.jsx)(dC,{})]
          })
        }),(0,i.jsx)(dw.Z,{
          paddingSize:"small",
          placement:"rightTop",
          collapsed:d,
          content:(0,i.jsx)(sX.default,{
            mode:"vertical",
            theme:"dark",
            inlineCollapsed:!1,
            items:w,
            triggerSubMenuAction:"click",
            onClick:e=>{
              let{
                key:t
              }=e;
              if("talkToUs"===t){
                v();
                return
              }
              if("documentation"===t){
                window.open(dh.Z$,"_blank");
                return
              }
              if("guide"===t){
                j("guide");
                return
              }
              window.open(dh.T8,"_blank")
            },
            className:"popover-menu-list"
          }),
          trigger:d?"hover":"click",
          children:(0,i.jsxs)(c.Z,{
            icon:(0,i.jsx)(dd.by,{}),
            children:[d?null:"Support",(0,i.jsx)(dd.NP,{})]
          })
        }),y&&(0,i.jsx)(dZ,{
          collapsed:d
        }),(0,i.jsx)(dN,{
          navigateToTeam:n,
          navigateToSubscription:o,
          logout:u,
          collapsed:d,
          urlRouteTo:r,
          orgIndex:t,
          navigateToAccountSetting:a,
          planhatPortalLink:l,
          planHatPortalAccessData:p
        })]
      })
    };
    let dT=h()(Promise.all([n.e(6493),n.e(2153),n.e(6194)]).then(n.bind(n,26194)),{
      loadableGenerated:{
        webpack:()=>[26194]
      },
      loading:()=>(0,i.jsx)("div",{})
    });
    var dL=e=>{
      let{
        organizationIndex:t,
        urlRoutePageName:n,
        showAppList:o,
        displayAppListPopover:s,
        navigateToPath:a,
        navigateToAppTeam:r,
        collapsedMenu:l
      }=e;
      return(0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)("div",{
          className:"logoWrapper",
          children:(0,i.jsx)("img",{
            className:"logo-full",
            src:"/static/sidebarmenu/uxcam-logo.svg",
            alt:""
          })
        }),(0,i.jsx)(dT,{
          collapsed:l,
          orgIndex:t,
          urlRouteTo:n,
          navigate:a,
          navigateToAppTeam:r,
          displayAppListPopover:s,
          showAppList:o
        })]
      })
    };
    let dM=h()(n.e(1767).then(n.bind(n,51767)),{
      loadableGenerated:{
        webpack:()=>[51767]
      },
      loading:()=>(0,i.jsx)("div",{})
    });
    var dz=(0,o.memo)(e=>{
      let{
        collapsedMenu:t
      }=e,
      n=(0,s.I0)(),
      a=o.useRef(null),
      [r,l]=(0,o.useState)(0);
      (0,o.useLayoutEffect)(()=>{
        let e=a.current;
        e&&e.addEventListener("scroll",()=>{
          e.scrollTop,
          l(e.scrollTop)
        })
      },[]);
      let{
        showCreateApp:d,
        organizationIndex:c,
        urlRoutePageName:u,
        showAppList:p,
        displayAppListPopover:h,
        navigateToPath:f,
        navigateToAppTeam:m,
        showCreateAppBox:g,
        navigateToTeam:x,
        navigateToSubscription:v,
        navigateToAccountSetting:y,
        dispatchPortalLink:b,
        logout:w,
        setPortalData:j,
        portalData:k
      }=(0,dc.Z)(),
      {
        profileReducer:{
          email:_
        },
        currentAppReducer:{
          orgId:S,
          isIntegrated:I
        }
      }=(0,s.v9)(e=>e);
      return(0,o.useEffect)(()=>{
        (async function(){
          j(await n((0,C.yF)(S,_)))
        })()
      },[n,S,_,j]),
      (0,i.jsxs)(df.tF,{
        collapsedMenu:t,
        children:[(0,i.jsx)(df.S$,{
          collapsed:t,
          onClick:()=>n((0,C.tr)(!t)),
          children:(0,i.jsx)(dd.NP,{})
        }),(0,i.jsx)("div",{
          id:"top",
          children:(0,i.jsx)(dL,{
            organizationIndex:c,
            urlRoutePageName:u,
            showAppList:p,
            displayAppListPopover:h,
            navigateToPath:f,
            navigateToAppTeam:m,
            collapsedMenu:t
          })
        }),(0,i.jsx)(df.VM,{
          ref:a,
          id:"middle",
          isScrolled:r>0,
          children:(0,i.jsxs)(N.Z,{
            overlayClassName:"is-integrated-message",
            title:I?null:dh.Do,
            placement:"rightTop",
            getPopupContainer:e=>e.parentNode,
            children:[(0,i.jsx)(dv,{
              collapsedMenu:t
            }),(0,i.jsx)("span",{})]
          })
        }),(0,i.jsx)("div",{
          id:"bottom",
          children:(0,i.jsx)(dD,{
            organizationIndex:c,
            navigateToTeam:x,
            navigateToAccountSetting:y,
            navigateToSubscription:v,
            urlRoutePageName:u,
            dispatchPortalLink:b,
            collapsed:t,
            planHatPortalAccessData:k,
            logout:w
          })
        }),!!d&&(0,i.jsx)(dM,{
          showCreateApp:d,
          cancelCreateApp:g,
          pageCalled:"sidebar"
        })]
      })
    }),
    dP=e=>(0,i.jsx)("svg",{
      width:7,
      height:11,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M1.333 8a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667Zm4 0a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667Zm-4-4a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667Zm4 0a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667Zm-4-4a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667Zm4 0a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667Z",
        fill:"#fff"
      })
    });
    let dO=T.default.div.withConfig({
      componentId:"sc-a53b8f5f-0"
    })(["--width:450px;display:flex;align-items:center;position:fixed;left:","px;top:","px;height:44px;width:var(--width);background:rgba(37,60,102,0.95);z-index:100;border-radius:6px;padding:10px 8px;color:#ffffff;visibility:",";"],e=>e.$x,e=>e.$y,e=>{
      let{
        $visible:t
      }=e;
      return t?"visible":"hidden"
    }),
    dU=T.default.button.withConfig({
      componentId:"sc-a53b8f5f-1"
    })(["border:none;background:transparent;padding:0;margin:0;cursor:grab;height:16px;width:16px;display:flex;justify-content:center;align-items:center;margin-right:2px;&:active{cursor:grabbing;}"]),
    dB=(0,T.default)(dU).withConfig({
      componentId:"sc-a53b8f5f-2"
    })(["margin-right:0;margin-left:12px;cursor:pointer;svg{transform:scale(0.5475);path{stroke:#ffffff;}}"]),
    dV=T.default.div.withConfig({
      componentId:"sc-a53b8f5f-3"
    })(["width:100%;height:100%;font-family:Roboto;font-weight:400;font-style:Regular;font-size:13px;line-height:13px;letter-spacing:0%;color:rgba(255,255,255,1);strong{font-weight:600;}"]);
    var dW=(0,o.memo)(()=>{
      let{
        open:e,
        setOpen:t,
        content:n,
        onClose:s
      }=(0,rI.v)(),
      [a,r]=(0,o.useState)({
        x:0,
        y:0
      }),
      [l,d]=(0,o.useState)(!1),
      [c,u]=(0,o.useState)({
        x:0,
        y:0
      }),
      p=(0,o.useRef)(null),
      [h,f]=(0,o.useState)(!1);
      return((0,o.useEffect)(()=>{
        f(!0),
        r({
          x:window.innerWidth/2-225,
          y:window.innerHeight-84
        })
      },[]),(0,o.useEffect)(()=>{
        let e=()=>{
          r({
            x:window.innerWidth/2-225,
            y:window.innerHeight-84
          })
        };
        return window.addEventListener("resize",e),
        ()=>{
          window.removeEventListener("resize",e)
        }
      },[]),(0,o.useEffect)(()=>{
        if(!l)return;
        document.body.style.cursor="grabbing",
        document.body.style.userSelect="none";
        let e=e=>{
          r({
            x:e.clientX-c.x,
            y:e.clientY-c.y
          })
        },
        t=()=>{
          d(!1),
          document.body.style.cursor="",
          document.body.style.userSelect=""
        };
        return document.addEventListener("mousemove",e),
        document.addEventListener("mouseup",t),
        ()=>{
          document.removeEventListener("mousemove",e),
          document.removeEventListener("mouseup",t),
          document.body.style.cursor="",
          document.body.style.userSelect=""
        }
      },[l,c]),h)?(0,i.jsxs)(dO,{
        ref:p,
        $x:a.x,
        $y:a.y,
        $visible:e,
        children:[(0,i.jsx)(dU,{
          onMouseDown:e=>{
            if(p.current){
              let t=p.current.getBoundingClientRect();
              u({
                x:e.clientX-t.left,
                y:e.clientY-t.top
              }),
              d(!0)
            }
          },
          children:(0,i.jsx)(dP,{})
        }),(0,i.jsx)(dV,{
          children:n
        }),(0,i.jsx)(dB,{
          onClick:()=>{
            s&&s(),
            t(!1)
          },
          children:(0,i.jsx)(e1.Z,{})
        })]
      }):null
    });
    let dH=T.default.div.withConfig({
      componentId:"sc-66a5ee2f-0"
    })(["height:60px;width:100%;display:",";flex-shrink:0;padding:16px 16px 0 16px;"],e=>{
      let{
        $visible:t
      }=e;
      return t?"block":"none"
    });
    var dq=e=>{
      let{
        children:t,
        open:n
      }=e;
      return t?(0,i.jsx)(dH,{
        $visible:n,
        children:t
      }):null
    },
    dQ=e=>(0,i.jsxs)("svg",{
      width:24,
      height:24,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("circle",{
        cx:12,
        cy:12,
        r:9.045,
        fill:"#fff"
      }),(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M4.5 12a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Zm8.25.75a.75.75 0 1 0-1.5 0v3a.75.75 0 1 0 1.5 0v-3ZM12 8.295a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25Z",
        fill:"#EE5EDD"
      })]
    }),
    dK=n(59416);
    let dG=T.default.div.withConfig({
      componentId:"sc-37d5080-0"
    })(["position:relative;background:",";border:1px solid ",";border-radius:4px;padding:9px 20px;display:flex;justify-content:center;align-items:center;gap:4px;color:rgba(37,60,102,1);font-size:14px;a{margin-left:4px;margin-right:4px;color:rgba(37,60,102,1);font-weight:700;text-decoration:underline;}svg{margin-right:4px;}button{background:",";font-size:13px;line-height:13px;padding:5px 10px;margin-left:8px;","}"],e=>{
      let{
        $variant:t
      }=e;
      return"taraLite"===t?"#fdecff":"rgba(254, 214, 77, 0.25)"
    },e=>{
      let{
        $variant:t
      }=e;
      return"taraLite"===t?"#fdecff":"rgba(254, 214, 77, 0.25)"
    },e=>{
      let{
        $variant:t
      }=e;
      return"taraLite"===t?"rgba(255, 255, 255, 0.8)":"rgba(255, 255, 255, 0.45)"
    },e=>{
      let{
        $variant:t
      }=e;
      return"taraLite"===t&&"\n			border: 1.5px solid rgba(238, 94, 221, 0.5);\n		"
    }),
    d$=T.default.button.withConfig({
      componentId:"sc-37d5080-1"
    })(["position:absolute;top:50%;transform:translateY(-50%);right:10px;margin:0 !important;padding:0 !important;border:none !important;background:transparent !important;height:16px;width:16px;cursor:pointer;"]),
    dY=T.default.span.withConfig({
      componentId:"sc-37d5080-2"
    })(["display:flex;align-items:center;gap:4px;span{font-weight:500;}"]);
    var dX=e=>{
      let{
        variant:t
      }=e,
      {
        setTaraBacthLimitOpen:n
      }=(0,rS.n)(),
      {
        setUpgradeModalVisible:a
      }=(0,t0.fB)(),
      r=(0,R.useRouter)(),
      l=(0,s.I0)(),
      {
        parentType:d
      }=r.query,
      {
        currentOrgReducer:{
          orgId:c
        }
      }=(0,s.v9)(e=>e),
      u=(0,o.useCallback)(()=>{
        n(!1)
      },[n]),
      p=(0,o.useCallback)(()=>{
        l((0,K.qS)({
          taraProduct:"taraLite"===t?"upgrade_request":"all_credits_used",
          parentType:d||"unknown",
          source:"banner"
        })),
        a(!0)
      },[a,d,l,t]);
      return"taraLite"===t?(0,i.jsxs)(dG,{
        $variant:"taraLite",
        children:[(0,i.jsxs)(dY,{
          children:[(0,i.jsx)(dQ,{}),(0,i.jsx)("span",{
            children:"Showing limited sample with Tara Lite."
          }),"Unlock deeper insights with Tara Pro"]
        }),(0,i.jsx)(ne,{
          onClick:p,
          children:"Unlock Tara Pro"
        }),(0,i.jsx)(d$,{
          onClick:u,
          children:(0,i.jsx)(dK.Z,{})
        })]
      }):(0,i.jsxs)(dG,{
        $variant:"lowCredits",
        children:[(0,i.jsx)(tX,{}),"You've used all your",(0,i.jsx)(sP(),{
          href:{
            pathname:"/integration",
            query:{
              setting:"org_setting",
              org:c,
              org_tab:"tara-ai",
              parentType:"settings"
            }
          },
          target:"_blank",
          as:"/settings/org/".concat(c,"/tara-ai"),
          rel:"noopener noreferrer",
          children:"monthly credits."
        }),(0,i.jsx)(ne,{
          onClick:p,
          children:"Upgrade plan"
        }),(0,i.jsx)(d$,{
          onClick:u,
          children:(0,i.jsx)(dK.Z,{})
        })]
      })
    },
    dJ=e=>{
      var t;
      let{
        isBatchFlag:n
      }=e,
      {
        taraBatchLimitOpen:a
      }=(0,rS.n)(),
      {
        currentOrgReducer:r
      }=(0,s.v9)(e=>e),
      l=null!==(t=null==r?void 0:r.isTaraProPackage)&&void 0!==t&&t,
      {
        remainingCredits:d,
        creditsUsageISLoading:c
      }=(0,t0.fB)(),
      u=(0,o.useMemo)(()=>n&&d<=0&&!c?"lowCredits":l?null:"taraLite",[n,d,c,l]);
      return u?(0,i.jsx)(dq,{
        open:a,
        children:(0,i.jsx)(dX,{
          variant:u
        })
      }):null
    },
    d0=()=>{
      let{
        urlReducer:{
          parentType:e
        }
      }=(0,s.v9)(e=>e),
      {
        aiSessionFeatureAllowed:t
      }=(0,E.I)();
      return("aiSessionsList"===e||"aiSessionStatistics"===e)&&t?(0,i.jsx)(i.Fragment,{
        children:(0,i.jsx)(dJ,{
          isBatchFlag:t
        })
      }):null
    };
    let d1=T.default.div.withConfig({
      componentId:"sc-87704bda-0"
    })(["height:100vh;width:100%;position:relative;display:",";"],e=>{
      let{
        split:t
      }=e;
      return t?"flex":"block"
    }),
    d2=T.default.div.withConfig({
      componentId:"sc-87704bda-1"
    })(["height:100%;flex:1;overflow:hidden;display:flex;flex-direction:column;"]),
    d5=T.default.div.withConfig({
      componentId:"sc-87704bda-2"
    })(["flex:1;position:relative;width:100%;overflow:hidden;"]),
    d4=T.default.div.withConfig({
      componentId:"sc-87704bda-3"
    })(["height:100%;width:100%;overflow-y:auto;z-index:1;"]),
    d6=T.default.div.withConfig({
      componentId:"sc-87704bda-4"
    })(["padding:15px 15px 16px 0;margin-left:1px;width:",";flex-shrink:0;max-height:100vh;z-index:2;transition:width 0.3s ease;@media (max-width:1200px){width:",";}@media (max-width:768px){width:",";}"],e=>e.isExpanded?"clamp(500px, 35%, 650px)":"clamp(350px, 25%, 450px)",e=>e.isExpanded?"400px":"320px",e=>e.isExpanded?"350px":"280px"),
    d3="".concat("https://integrated-platforms.uxcam.com","/data-hub/send-event/"),
    {
      Content:d8
    }=l.default,
    d7=new a.QueryClient({
      defaultOptions:{
        queries:{
          staleTime:1/0
        }
      }
    }),
    d9=h()(n.e(4295).then(n.bind(n,4295)),{
      loadableGenerated:{
        webpack:()=>[4295]
      },
      loading:()=>(0,i.jsx)(i.Fragment,{})
    }),
    ce=h()(Promise.all([n.e(6315),n.e(8775)]).then(n.bind(n,98775)),{
      loadableGenerated:{
        webpack:()=>[98775]
      },
      loading:()=>(0,i.jsx)(i.Fragment,{})
    }),
    ct=h()(n.e(7447).then(n.bind(n,27447)),{
      loadableGenerated:{
        webpack:()=>[27447]
      },
      loading:()=>(0,i.jsx)(i.Fragment,{})
    }),
    cn=h()(Promise.resolve().then(n.bind(n,90493)),{
      loadableGenerated:{
        webpack:()=>[90493]
      },
      loading:()=>(0,i.jsx)(i.Fragment,{})
    }),
    ci=h()(n.e(8927).then(n.bind(n,78927)),{
      loadableGenerated:{
        webpack:()=>[78927]
      },
      loading:()=>(0,i.jsx)(i.Fragment,{})
    }),
    co=e=>{
      let{
        showAISideChat:t,
        showTopMenuBar:n,
        urlParam:s,
        topLevelFilterBar:a,
        children:r
      }=e,
      l=(0,tA.$)(),
      d=t&&l.isVisible;
      return(0,i.jsxs)(d1,{
        split:d,
        children:[(0,i.jsxs)(d2,{
          children:[(0,i.jsx)(d0,{}),(0,i.jsxs)(d5,{
            children:[n&&(0,i.jsx)(ep,{
              query:s
            }),(0,i.jsxs)(d4,{
              id:"main-scrollable-container",
              children:[a,(0,o.cloneElement)(r)]
            })]
          })]
        }),d&&(0,i.jsx)(d6,{
          isExpanded:l.isExpanded,
          children:(0,i.jsx)(tx,{
            children:(0,i.jsx)(rC,{})
          })
        })]
      })
    },
    cs=e=>{
      let{
        parentType:t,
        currentApp:n,
        orgId:s,
        orgList:a,
        objIncludesFeature:r,
        planFeatures:l,
        featureKeyObj:d,
        urlParam:c,
        topLevelFilterBar:u,
        children:p
      }=e,
      {
        pageIsLocked:h,
        aiSessionFeatureAllowed:f
      }=(0,E.I)(),
      m=(0,o.useMemo)(()=>{
        if(S.h9.indexOf(t)>-1&&n.isIntegrated&&!h){
          let e=s&&a.length&&v()(a,{
            orgId:s
          });
          if(!(e>-1&&a[e].hasAccess)||!r||(null==l?void 0:l[d[t]]))return!0
        }
        return!1
      },[n,d,r,s,a,h,t,l]),
      g=(0,o.useMemo)(()=>"aiSessionsList"===t&&m&&f,[t,m,f]);
      return(0,i.jsx)(tA.U,{
        appId:null==c?void 0:c.appId,
        children:(0,i.jsx)(co,{
          showAISideChat:g,
          showTopMenuBar:m,
          urlParam:c,
          topLevelFilterBar:u,
          children:p
        })
      })
    },
    ca=o.memo(()=>{
      let{
        noCodeEventsFeatureFlag:e
      }=(0,em.Z)(),
      t=(0,s.I0)();
      return o.useEffect(()=>{
        t((0,e9.Yb)(e))
      },[e,t]),
      null
    }),
    cr=o.memo(e=>{
      let{
        parentType:t
      }=e,
      {
        setOpen:n,
        setContent:i
      }=(0,rI.v)();
      return(0,o.useEffect)(()=>{
        n(!1),
        i(null)
      },[t,n,i]),
      null
    }),
    cl=o.memo(()=>(di(),null)),
    cd=o.memo(()=>{
      let[e,t]=(0,o.useState)(null),
      n=(0,s.I0)();
      (0,o.useEffect)(()=>{
        let e=new URL(window.location.href),
        i=e.searchParams.get("shareError");
        i&&(t(i),"expired"===i?n((0,et.CW)(null,{
          eventName:"wa_tara_share_expired",
          track_type:"event"
        })):"no_permission"===i&&n((0,et.CW)(null,{
          eventName:"wa_tara_share_chat_blocked",
          track_type:"event"
        })),e.searchParams.delete("shareError"),window.history.replaceState({},"",e.toString()))
      },[]);
      let a=()=>t(null);
      return"chat_limit"===e?(0,i.jsx)(aY,{
        visible:!0,
        onClose:a,
        title:"Chat limit reached",
        description:"You've reached the maximum number of chats allowed. To start a new conversation, please delete an existing chat from your sidebar."
      }):(0,i.jsx)(l9,{
        visible:!!e,
        errorType:e,
        onClose:a,
        onSwitchAccount:()=>{
          window.location.href="/logout?redirect=".concat(window.location.pathname)
        }
      })
    }),
    cc=e=>{
      let{
        recordingStatusBanner:t
      }=e,
      n=(0,s.I0)();
      return(0,o.useEffect)(()=>{
        let e=document.getElementById("open-intercom-popup"),
        t=e=>{
          e.preventDefault(),
          (0,S.aL)()
        };
        return null==e||e.addEventListener("click",t),
        ()=>{
          null==e||e.removeEventListener("click",t)
        }
      },[]),
      (0,i.jsxs)("div",{
        className:"global-message-bar",
        children:[(0,i.jsx)("img",{
          alt:"",
          src:"/static/no-video.svg",
          style:{
            width:"20px",
            marginRight:"10px"
          }
        }),(0,i.jsx)("p",{
          children:(0,u.ZP)(t.message)
        }),(0,i.jsx)(c.Z,{
          icon:(0,i.jsx)(r.Z,{}),
          style:{
            fontSize:"12px"
          },
          onClick:e=>n((0,C.JT)(e))
        })]
      })
    };
    var cu=e=>{
      var t;
      let{
        children:n,
        query:u
      }=e,
      {
        commonReducer:p,
        currentOrgReducer:h,
        sidebarReducer:f,
        profileReducer:x,
        currentAppReducer:v,
        recordingStatusBanner:y,
        applicationReducer:w,
        selectedSessionReducer:F,
        selectedUserReducer:A,
        megaFilterReducer:Z,
        organizationReducer:N,
        appFilter:R
      }=(0,s.v9)(e=>e),
      D=(0,s.I0)(),
      {
        filterBarVisible:T
      }=Z,
      L=null==u?void 0:u.parentType,
      {
        bottomBarClassFlag:M,
        isVisible_custom_popup:z
      }=p,
      P=f.collapse,
      {
        isAIEnabled:O
      }=v,
      U=null==h?void 0:null===(t=h.planFeature)||void 0===t?void 0:t.tara,
      V=null==h?void 0:h.orgId,
      W=null==h?void 0:h.planType,
      [H,Q]=(0,o.useState)(!1),
      [K,G]=(0,o.useState)(null),
      [$,Y]=(0,o.useState)(null),
      [X,J]=(0,o.useState)(!1),
      [ee,et]=(0,o.useState)(""),
      en="eventsList"===L||"statistics"===L,
      ei=null==h?void 0:h.planFeature,
      eo=(0,o.useMemo)(()=>{
        var e,
        t;
        return Array.isArray(w)&&(null==w?void 0:null===(t=w.find(e=>e.orgId===V))||void 0===t?void 0:null===(e=t.subscription)||void 0===e?void 0:e.type)==="paid"
      },[V,w]),
      es=(0,o.useCallback)(()=>{
        var e,
        t;
        if(window,!K)return!1;
        let n="";
        try{
          n=window.localStorage.getItem("paymentBannerCloseDate")
        }
        catch(e){}let i=n&&new Date(n).getTime()+864e5<new Date().getTime();
        return null===i?null==K?void 0:null===(e=K.data)||void 0===e?void 0:e.show_banner:(null==K?void 0:null===(t=K.data)||void 0===t?void 0:t.show_banner)&&!!i
      },[K]),
      ea=(0,B.e)("web"),
      er=(0,o.useMemo)(()=>(null==N?void 0:N.length)?N.find(e=>e._id===(null==h?void 0:h.orgId)):{},[h,N]),
      el=(0,o.useMemo)(()=>{
        if(!(null==h?void 0:h.taraTrialExpiryDate))return!1;
        let e=new Date(h.taraTrialExpiryDate),
        t=new Date;
        return e.getTime()>t.getTime()
      },[null==h?void 0:h.taraTrialExpiryDate]),
      ed=(0,o.useMemo)(()=>M&&((null==er?void 0:er.selfServeCheckout)||(null==h?void 0:h.onTrial)||(null==h?void 0:h.planType)==="free"||es()||el),[M,null==er?void 0:er.selfServeCheckout,null==h?void 0:h.onTrial,null==h?void 0:h.planType,es,el]),
      eu=(0,o.useMemo)(()=>({
        eventsList:"eventAnalysis",
        statistics:"eventAnalysis",
        screenFlow:"screenFlow",
        issues:"issueAnalytics",
        funnels:"funnelFeature",
        [u.screenname?"screensList":""]:"screenAnalysis"
      }),[u.screenname]),
      ep=Object.keys(eu).indexOf(L)>-1,
      eh=(0,o.useCallback)(async()=>{
        V&&await tn.Z.getPaymentStatus(V).then(e=>{
          200===e.status&&G(e.data)
        }).catch(e=>{
          ey.l.error("Error in fetching payment status",e)
        })
      },[V]),
      ef=(0,o.useCallback)(async()=>{
        V&&"trial"===W&&await tn.Z.getRemainingTrial(V).then(e=>{
          if(200===e.status){
            var t,
            n;
            Y(null==e?void 0:null===(n=e.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.remainingTrial)
          }
        }).catch(e=>{
          ey.l.error("Error in fetching remaining trial",e)
        })
      },[V,W]),
      em=(0,o.useCallback)(async()=>{
        if(null==h?void 0:h.orgId){
          let{
            onTrial:e
          }=h,
          t=!H&&(e&&$&&$.days+$.hours>0||"free"===W||(null==er?void 0:er.selfServeCheckout)&&e||es()||el);
          D((0,C.H4)(t))
        }
      },[h,D,H,null==er?void 0:er.selfServeCheckout,W,$,es,el]),
      eg=async e=>{
        e.preventDefault();
        let t=await D((0,C.$R)());
        t&&await et(t)
      },
      ex=()=>{
        window.zE&&window.zE(()=>{
          window.zE.hide(),
          J(!0)
        })
      },
      ev=x.error?"":j()({
        "heatmap-hide-scroll":"heatmapsList"===L&&u.screenname&&!T,
        "wrapper-contracts":!P,
        "wrapper-expands":P,
        "feature-unavailable-page":ep&&ei&&!ei[eu[L]],
        "filter-display-event-wrapper":en&&T
      }),
      eb=async()=>{
        let e=await D((0,e8.Vs)(u.url,ea));
        I.rh[L]&&await D((0,ew.Yb)(e,I.rh[L])),
        I.rh[L]===I.rh.usersList&&await D((0,rZ.UV)(u.url))
      };
      (0,o.useEffect)(()=>{
        eb()
      },[ea]),
      (0,o.useEffect)(()=>{
        I._v[L]&&D((0,e8.Fn)(I._v[L]))
      },[L,D]),
      (0,o.useEffect)(()=>{
        u.appId&&D((0,e7.sw)())
      },[u.appId]),
      (0,o.useEffect)(()=>{
        ex()
      },[]),
      (0,o.useEffect)(()=>{
        em()
      },[em]),
      (0,o.useEffect)(()=>{
        window;
        let e="";
        try{
          e=window.localStorage.getItem("paymentBannerCloseDate")
        }
        catch(e){}let t=e&&new Date(e).getTime()+864e5<new Date().getTime();
        null===t&&eh(),
        eo&&t&&eh()
      },[eh,eo]),
      (0,o.useEffect)(()=>{
        V&&"trial"===W&&ef()
      },[V,W,ef]);
      let ej=(0,o.useMemo)(()=>{
        let e=(0,i.jsx)(i.Fragment,{});
        return S.h9.includes(L)&&0===F.length&&0===A.length&&v.isIntegrated&&(e=(0,i.jsx)(ec,{
          isFilterDisplayBar:!0
        },L+v._id)),
        e
      },[L,F.length,A.length,v]),
      ek=(0,o.useMemo)(()=>(null==er?void 0:er.selfServeCheckout)&&("free"===W||"trial"===W),[null==er?void 0:er.selfServeCheckout,W]),
      e_=(0,o.useMemo)(()=>"aiSessionsList"===L&&(null==u?void 0:u.sessionid),[L,null==u?void 0:u.sessionid]),
      eC=(0,o.useMemo)(()=>({
        applicationId:null==u?void 0:u.appId,
        organizationId:V,
        subscriptionPlan:W,
        userId:null==x?void 0:x.userId,
        userEmail:null==x?void 0:x.email
      }),[null==u?void 0:u.appId,V,W,null==x?void 0:x.userId,null==x?void 0:x.email]),
      eS=(0,o.useMemo)(()=>{
        let e;
        try{
          e=new ti.Z().get("token")
        }
        catch(t){
          e=""
        }
        return{
          Authorization:"Bearer ".concat(e)
        }
      },[]);
      return(h&&!h.isLoggedFromAdminDashboard?{
        blocked:"tara"===h.signupSurface
      }:{
        blocked:!1
      }).blocked?(0,i.jsx)(rA,{}):(0,i.jsx)(d.ZP,{
        direction:{
          locale:g.Z
        },
        children:(0,i.jsxs)(eO.Fh,{
          contextData:eC,
          eventEndpoint:d3,
          extraHeaders:eS,
          children:[(0,i.jsx)(ca,{}),(0,i.jsxs)(a.QueryClientProvider,{
            client:d7,
            children:[(0,i.jsx)(cl,{}),(0,i.jsx)(to.H,{
              children:(0,i.jsx)(eO.Fo,{
                children:(0,i.jsx)(E.m,{
                  children:(0,i.jsx)(te.D,{
                    children:(0,i.jsx)(_.QQ,{
                      appId:null==u?void 0:u.appId,
                      sessionId:null==u?void 0:u.sessionid,
                      children:(0,i.jsx)(q.$c,{
                        children:(0,i.jsx)(rI.O,{
                          children:(0,i.jsx)(rS.o,{
                            children:(0,i.jsxs)(t0.Vx,{
                              children:[(0,i.jsx)(lK,{}),(0,i.jsx)(lY,{}),(0,i.jsx)(rN.N,{
                                viewOnly:e_,
                                children:(0,i.jsxs)(i.Fragment,{
                                  children:[(0,i.jsx)(dl,{}),(0,i.jsx)(e3,{}),(0,i.jsxs)("div",{
                                    className:"theme-light internal-main-wrapper",
                                    id:"uxcam-main-layout",
                                    children:[(0,i.jsx)(k.Z,{
                                      brainTreeScript:"settings"===L?"https://js.braintreegateway.com/web/dropin/1.32.0/js/dropin.min.js":"",
                                      chargebeeScript:"settings"===L||ek?"https://js.chargebee.com/v2/chargebee.js":"",
                                      trialFlag:ed
                                    }),(0,i.jsxs)(l.default,{
                                      hasSider:!0,
                                      children:[b()(h)?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(df.tA,{
                                        trigger:null,
                                        collapsible:!0,
                                        collapsed:P,
                                        children:(0,i.jsx)(dz,{
                                          collapsedMenu:P
                                        })
                                      }),(0,i.jsxs)(d8,{
                                        className:ev,
                                        id:"main-content-container",
                                        children:[!!(U&&O)&&(0,i.jsxs)(i.Fragment,{
                                          children:[(0,i.jsx)(eO.Fo,{
                                            children:(0,i.jsx)(dW,{})
                                          }),(0,i.jsx)(cr,{
                                            parentType:L
                                          })]
                                        }),(0,i.jsx)(cs,{
                                          parentType:L,
                                          currentApp:v,
                                          orgId:V,
                                          orgList:w,
                                          objIncludesFeature:ep,
                                          planFeatures:ei,
                                          featureKeyObj:eu,
                                          urlParam:u,
                                          topLevelFilterBar:ej,
                                          children:n
                                        }),v.isIntegrated&&L&&y.status&&y.message&&!ea&&(0,i.jsx)(cc,{
                                          recordingStatusBanner:y
                                        }),ed&&(0,i.jsx)(ce,{
                                          currentOrgSubscription:h,
                                          expirePlanMsg:H,
                                          setTrialFlag:C.H4,
                                          isIntegrated:v.isIntegrated,
                                          handleCsrfAndQuoteModelVisible:eg,
                                          paymentStatus:K,
                                          remainingTrial:$,
                                          taraTrialExpiryDate:null==h?void 0:h.taraTrialExpiryDate
                                        })]
                                      }),X&&(0,i.jsxs)("div",{
                                        className:"feedback-btn",
                                        children:[(0,i.jsx)(c.Z,{
                                          type:"close-chat",
                                          icon:(0,i.jsx)(r.Z,{}),
                                          onClick:()=>J(!X)
                                        }),(0,i.jsx)(c.Z,{
                                          type:"zen-chat",
                                          onClick:()=>window.zE.activate({
                                            hideOnClose:!0
                                          }),
                                          children:(0,i.jsx)(m(),{})
                                        })]
                                      })]
                                    }),(0,i.jsx)(d9,{}),(0,i.jsx)(ct,{
                                      isVisible_custom_popup:z,
                                      handleCsrfAndQuoteModelVisible:eg
                                    }),(null==x?void 0:x.email)&&(null==x?void 0:x.showUpdateUserProfileModal)&&(0,i.jsx)(cn,{
                                      showUpdateUserProfileModal:null==x?void 0:x.showUpdateUserProfileModal
                                    }),(0,i.jsx)(ci,{}),(0,i.jsx)(cd,{})]
                                  })]
                                })
                              })]
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            }),(0,i.jsx)(tt.ReactQueryDevtools,{
              initialIsOpen:!1,
              position:"bottom-right"
            })]
          })]
        })
      })
    }
  },
  17877:function(e,t,n){
    "use strict";
    n.d(t,{
      $:function(){
        return d
      },
      U:function(){
        return c
      }
    });
    var i=n(85893),
    o=n(67294);
    let s=(0,o.createContext)(),
    a="uxcam_chat_minimize",
    r=e=>{
      try{
        let t=localStorage.getItem("".concat(a,"_").concat(e));
        return null!==t?JSON.parse(t):null
      }
      catch(e){
        return null
      }
    },
    l=(e,t)=>{
      try{
        localStorage.setItem("".concat(a,"_").concat(e),JSON.stringify(t))
      }
      catch(e){}
    },
    d=()=>{
      let e=(0,o.useContext)(s);
      if(!e)throw Error("useAISidebarContext must be used within an AISidebarContextProvider");
      return e
    },
    c=e=>{
      let{
        children:t,
        initialMinimizeState:n=!1,
        appId:a
      }=e,
      [d,c]=(0,o.useState)(()=>{
        if(a){
          let e=r(a);
          if(null!==e)return!e
        }
        return!n
      }),
      [u,p]=(0,o.useState)(!1),
      [h,f]=(0,o.useState)(!1),
      m=(0,o.useRef)(!1);
      o.useEffect(()=>{
        if(!m.current){
          m.current=!0;
          return
        }
        if(a){
          let e=r(a);
          if(null!==e){
            c(!e);
            return
          }
        }
        c(!n)
      },[n,a]);
      let g=(0,o.useCallback)(()=>{
        let e=!d;
        c(e),
        a&&l(a,!e)
      },[d,a]),
      x=(0,o.useCallback)(()=>p(!u),[u]),
      v=(0,o.useCallback)(()=>f(!h),[h]),
      y=(0,o.useCallback)(e=>{
        c(!e)
      },[]),
      b=(0,o.useMemo)(()=>({
        isVisible:d,
        isExpanded:u,
        toggleVisibility:g,
        toggleExpansion:x,
        debugMode:h,
        toggleDebugMode:v,
        setInitialVisibility:y
      }),[d,u,g,x,h,v,y]);
      return(0,i.jsx)(s.Provider,{
        value:b,
        children:t
      })
    }
  },
  18398:function(e,t,n){
    "use strict";
    n.d(t,{
      ZP:function(){
        return V
      },
      Nf:function(){
        return B
      },
      Tu:function(){
        return U
      }
    });
    var i=n(85893),
    o=n(67294),
    s=n(72654),
    a=n(39284),
    r=n(86477),
    l=n(48203),
    d=n(67401),
    c=n(73880),
    u=n(93193),
    p=n(52795),
    h=n(14416),
    f=n(88767),
    m=n(57566),
    g=n(4497),
    x=n(73495),
    v=n(19521),
    y=n(79999),
    b=n(8357),
    w=n(14896);
    let j=v.default.div.withConfig({
      componentId:"sc-a264a2ed-0"
    })(["margin-bottom:10px;background-color:",";border-radius:4px;font-size:12px;line-height:24px;"],y.r.colors.surface05.toString()),
    k=v.default.div.withConfig({
      componentId:"sc-a264a2ed-1"
    })(["display:flex;justify-content:space-between;align-items:center;padding:8px 10px;cursor:pointer;font-weight:500;h3{margin:0;color:",";font-size:12px;line-height:24px;font-weight:500;}"],y.r.colors.surface400.toString()),
    _=v.default.div.withConfig({
      componentId:"sc-a264a2ed-2"
    })(["display:flex;align-items:center;gap:8px;"]),
    C=v.default.span.withConfig({
      componentId:"sc-a264a2ed-3"
    })(["transition:transform 0.3s ease;transform:rotate(",");"],e=>e.isOpen?"0deg":"180deg"),
    S=v.default.div.withConfig({
      componentId:"sc-a264a2ed-4"
    })(["overflow:hidden;max-height:",";transition:max-height 0.3s ease;font-weight:400;color:",";"],e=>e.isOpen?"1000px":"0",y.r.colors.surface300.toString()),
    I=v.default.div.withConfig({
      componentId:"sc-a264a2ed-5"
    })(["padding:0 10px 10px;"]);
    var E=(0,o.memo)(e=>{
      let{
        title:t,
        description:n
      }=e,
      [s,a]=(0,o.useState)(!1);
      return(0,i.jsxs)(j,{
        children:[(0,i.jsxs)(k,{
          "data-element":"accordion-title",
          onClick:()=>{
            a(!s)
          },
          children:[(0,i.jsxs)(_,{
            children:[(0,i.jsx)(b.L7,{}),(0,i.jsx)("h3",{
              children:t
            })]
          }),(0,i.jsx)(C,{
            isOpen:s,
            children:(0,i.jsx)(w.Z,{})
          })]
        }),(0,i.jsx)(S,{
          isOpen:s,
          "data-element":"accordion-content",
          children:(0,i.jsx)(I,{
            dangerouslySetInnerHTML:{
              __html:n
            }
          })
        })]
      })
    }),
    F=n(5257),
    A=n(99252),
    Z=n(54882),
    N=n(13979),
    R=n(30663),
    D=n(87066),
    T=n(68805),
    L=n(11163),
    M=n(55137),
    z=n(22514),
    P=n(32240),
    O=n(17088);
    let U=Z.aI,
    B=Z.SN;
    var V=(0,o.memo)(()=>{
      var e,
      t,
      n,
      v,
      y,
      b,
      w,
      j,
      k,
      _,
      C,
      S,
      I,
      U,
      B,
      V,
      W,
      H,
      q,
      Q,
      K;
      let{
        managePopupOpen:G,
        setManagePopupOpen:$,
        setCurrentAction:Y,
        currentAction:X,
        currentScreen:J,
        deletePopupOpen:ee,
        setCurrentScreen:et,
        setDeletePopupOpen:en,
        setDuplicateEventModalOpen:ei,
        duplicateEventModalOpen:eo
      }=(0,d.Z)(),
      {
        sessionDetail:es,
        setSessionDetail:ea,
        sessionNocodeEvents:er,
        sessionQueriesToInvalidate:el,
        setSessionNocodeEvents:ed,
        setSessionQueriesToInvalidate:ec
      }=(0,F.Lc)(),
      {
        device:eu
      }=es||{},
      [ep]=s.Z.useForm(),
      [eh,ef]=(0,o.useState)(!1),
      [em,eg]=(0,o.useState)(!1),
      [ex,ev]=(0,o.useState)(!1),
      ey=(0,o.useMemo)(()=>({
        elementId:ev,
        viewName:eg,
        screenName:ef
      }),[]),
      eb=(0,o.useMemo)(()=>{
        var e;
        return null==X?void 0:null===(e=X.props)||void 0===e?void 0:e.rule
      },[null==X?void 0:null===(e=X.props)||void 0===e?void 0:e.rule]),
      ew=(0,o.useCallback)((e,t)=>{
        let n="any"===e.target.value;
        t in ey&&(0,ey[t])(!!n)
      },[ey]),
      ej=(0,o.useMemo)(()=>[{
        name:"screenName",
        value:eh
      },{
        name:"viewName",
        value:em
      },{
        name:"elementId",
        value:ex
      }],[ex,eh,em]),
      ek=(0,o.useMemo)(()=>ej.filter(e=>!0===e.value),[ej]),
      e_=(0,o.useMemo)(()=>ek.map(e=>e.name),[ek]),
      eC=(0,o.useCallback)(e=>!(2!==ek.length||e_.includes(e)),[ek,e_]),
      {
        message:eS
      }=(0,m.Z)(),
      eI=(0,h.I0)(),
      eE=(0,f.useQueryClient)(),
      {
        resetFields:eF,
        setFieldsValue:eA,
        setFields:eZ
      }=ep,
      eN=(0,o.useMemo)(()=>(null==X?void 0:X.type)==="smart_gesture_event",[null==X?void 0:X.type]),
      eR=(0,o.useRef)(void 0),
      eD=(0,L.useRouter)(),
      {
        currentAppReducer:eT,
        currentOrgReducer:eL,
        screenTimelineReducer:{
          selectedEventField:eM
        },
        appFilter:{
          event:{
            segment:ez
          },
          dateSegment:eP
        },
        urlReducer:eO
      }=(0,h.v9)(e=>e),
      {
        _id:eU
      }=eT,
      eB=null==eL?void 0:eL.orgId,
      eV=null==eO?void 0:eO.parentType,
      eW=(0,o.useMemo)(()=>"settings"===eV,[eV]),
      eH=(0,o.useCallback)(()=>({
        attribute:"nce_name",
        filter:[],
        appid:eU,
        search:"",
        dropdownLimit:501,
        date_range:eP
      }),[eU,eP]),
      {
        mutate:eq,
        isLoading:eQ
      }=(0,f.useMutation)(g.jl),
      {
        mutate:eK,
        isLoading:eG
      }=(0,f.useMutation)(g.xp),
      e$=eQ||eG,
      eY=(0,o.useCallback)(()=>!e$&&$(!1),[$,e$]),
      eX=(0,o.useCallback)(()=>{
        eN&&($(!1),en(!0))
      },[eN,en,$]),
      eJ=(0,o.useCallback)(()=>{
        let e=null==eO?void 0:eO.sessionid;
        e&&ec([...el,e]),
        eE.invalidateQueries({
          queryKey:["manage-nocode-list"]
        }),
        eE.invalidateQueries({
          queryKey:["nocodeEventList"]
        }),
        eE.invalidateQueries({
          queryKey:["nocodeEventNamesWithCount"]
        }),
        eE.invalidateQueries({
          queryKey:["sessionNocodeEvents"]
        })
      },[el,eO,eE,ec]),
      e0=(0,o.useMemo)(()=>{
        var e;
        return(null==X?void 0:X.type)==="gesture"?(null==X?void 0:X.name)||"not defined":(null==X?void 0:null===(e=X.props)||void 0===e?void 0:e.gestureType)||"not defined"
      },[null==X?void 0:X.name,null==X?void 0:null===(t=X.props)||void 0===t?void 0:t.gestureType,null==X?void 0:X.type]),
      e1=(0,o.useCallback)(()=>{
        eN&&($(!1),ei(!0))
      },[eN,ei,$]),
      e2=(0,o.useCallback)(e=>{
        var t,
        n,
        i,
        o,
        s,
        a;
        eU&&(null==X?void 0:X.name)&&eB&&(null==eu?void 0:eu.platform)&&(null==J?void 0:J.activityName)&&(null==eu?void 0:eu.sdkVersion)?eq({
          name:null===(t=e["event-name"])||void 0===t?void 0:t.trim(),
          description:e["event-description"],
          appid:eU,
          element_id:ex?["__any__"]:[null==X?void 0:null===(n=X.props)||void 0===n?void 0:n.idString],
          gesture_type:[Z.u$[X.name]],
          orgid:eB,
          platform:null==eu?void 0:eu.platform,
          screen_name:eh?["__any__"]:[J.activityName],
          sdk_version:null==eu?void 0:eu.sdkVersion,
          view_type:[null==X?void 0:null===(i=X.props)||void 0===i?void 0:i.viewTypeId],
          view_name:em?["__any__"]:[null==X?void 0:null===(o=X.props)||void 0===o?void 0:o.viewName],
          category:["nocode"]
        },{
          onSuccess:t=>{
            var n,
            i,
            o,
            s,
            a,
            r,
            l,
            d,
            c,
            u,
            p,
            h,
            f;
            eJ(),
            eI((0,M.MH)(eH(),!1,!0));
            let m=null==t?void 0:null===(i=t.data)||void 0===i?void 0:null===(n=i.data)||void 0===n?void 0:n.nceId,
            g=[...eM,{
              name:null===(o=e["event-name"])||void 0===o?void 0:o.trim(),
              count:1
            }];
            if(eI((0,T.TH)(g)),m&&es&&J&&X){
              let t={
                nceId:m,
                name:null===(u=e["event-name"])||void 0===u?void 0:u.trim(),
                description:e["event-description"],
                rule:{
                  viewName:em?"__any__":(null==X?void 0:null===(p=X.props)||void 0===p?void 0:p.viewName)||"undefined",
                  activityName:eh?"__any__":null==J?void 0:J.activityName,
                  idString:ex?"__any__":(null==X?void 0:null===(h=X.props)||void 0===h?void 0:h.idString)||"undefined"
                }
              };
              ea((0,P.Ql)(es,X,t))
            }
            ed&&er&&ed([...er,{
              event_name:null===(f=e["event-name"])||void 0===f?void 0:f.trim(),
              count:1
            }]),
            eS({
              content:"Smart event has been created successfully.",
              type:"success"
            }),
            eI((0,R.CW)(null,{
              eventName:"wa_create_nocode_event",
              track_type:"event",
              eventProperty:{
                event_id:m,
                event_name:null===(s=e["event-name"])||void 0===s?void 0:s.trim(),
                screen_name:eh?"__any__":null==J?void 0:J.activityName,
                view_name:em?"__any__":(null==X?void 0:null===(a=X.props)||void 0===a?void 0:a.viewNameUpdated)||(null==X?void 0:null===(r=X.props)||void 0===r?void 0:r.viewName),
                view_type:null==X?void 0:null===(l=X.props)||void 0===l?void 0:l.viewType,
                element_id:ex?"__any__":null==X?void 0:null===(d=X.props)||void 0===d?void 0:d.idString,
                gesture_type:null==X?void 0:null===(c=X.props)||void 0===c?void 0:c.gestureType,
                gesture_name:null==X?void 0:X.name,
                session_id:null==eO?void 0:eO.sessionid,
                type_of_event:"gesture"
              }
            })),
            eY()
          },
          onError:e=>{
            if(D.default.isAxiosError(e)){
              var t;
              let n=(null==e?void 0:null===(t=e.request)||void 0===t?void 0:t.response)&&JSON.parse(e.request.response).error;
              if((null==n?void 0:n.status)===409&&(null==n?void 0:n.message)==="Duplicate name."){
                eZ([{
                  name:"event-name",
                  errors:["Smart event with that name already exists"]
                }]);
                return
              }
            }
            eS({
              content:"Something went wrong while creating an event. Please try again.",
              type:"error"
            }),
            N.l.error(e,"Error while creating an event")
          }
        }):(eS({
          content:"Something went wrong while creating an event",
          type:"error"
        }),N.l.error([eU&&(null==X?void 0:X.name)&&eB&&(null==eu?void 0:eu.platform)&&(null==J?void 0:J.activityName)&&(null==eu?void 0:eu.sdkVersion)&&(null==X?void 0:null===(s=X.props)||void 0===s?void 0:s.viewTypeId)&&(null==X?void 0:null===(a=X.props)||void 0===a?void 0:a.viewType)],"Error with values when creating event"),eS({
          content:"Something went wrong while creating an event",
          type:"error"
        }))
      },[eU,X,eB,null==eu?void 0:eu.platform,null==eu?void 0:eu.sdkVersion,J,eq,ex,eh,em,eJ,eI,eH,eM,es,ed,er,eS,null==eO?void 0:eO.sessionid,eY,ea,eZ]),
      e5=(0,o.useCallback)(e=>{
        if(eN){
          var t;
          let n=null==X?void 0:X.id;
          eK({
            appid:eU,
            description:e["event-description"]||"",
            name:(null===(t=e["event-name"])||void 0===t?void 0:t.trim())||"",
            nce_id:n
          },{
            onSuccess:()=>{
              var t,
              i,
              o,
              s,
              a,
              r,
              l,
              d;
              if(ed&&er&&ed(er.map(t=>{
                if(t.event_name===(null==X?void 0:X.name)){
                  var n;
                  return{
                    ...t,
                    event_name:null===(n=e["event-name"])||void 0===n?void 0:n.trim()
                  }
                }
                return t
              })),n&&es&&J&&X){
                let t={
                  nceId:n,
                  name:null===(l=e["event-name"])||void 0===l?void 0:l.trim(),
                  description:e["event-description"]
                };
                ea((0,P.ZE)(es,t))
              }
              let c=eM.map(t=>{
                var n;
                return t.name===(null==X?void 0:X.name)?{
                  ...t,
                  name:null===(n=e["event-name"])||void 0===n?void 0:n.trim()
                }:t
              });
              if(eI((0,T.TH)(c)),(null==eO?void 0:eO.parentType)==="nocodeEventsList"&&(null==eO?void 0:eO.sessionid)){
                let t=(null==X?void 0:X.name)?JSON.parse(JSON.stringify(ez).replaceAll(X.name,null===(d=e["event-name"])||void 0===d?void 0:d.trim())):ez,
                n="/app/".concat(eU,"/smart-events/list/").concat(null==eO?void 0:eO.eventpage,"/").concat(null==eO?void 0:eO.sessionid,"/").concat(null==eO?void 0:eO.eventid,"/").concat(null==eO?void 0:eO.starttime,"#autoplay");
                eD.push("/integration?parentType=nocodeEventsList&appId=".concat(eU,"&sessionid=").concat(null==eO?void 0:eO.sessionid,"&eventpage=").concat(null==eO?void 0:eO.eventpage,"&eventid=").concat(null==eO?void 0:eO.eventid,"&starttime=").concat(null==eO?void 0:eO.starttime),(0,x.$)(n,t))
              }
              eJ(),
              eI((0,M.MH)(eH(),!1,!0)),
              eS({
                content:"Smart event has been updated successfully.",
                type:"success"
              }),
              eI((0,R.CW)(null,{
                eventName:"wa_modify_nocode_event",
                track_type:"event",
                eventProperty:{
                  event_id:null==X?void 0:X.id,
                  screen_name:(0,P.ww)("activityName",(null==J?void 0:J.activityName)||(null==X?void 0:X.screenName)||"undefined",eb).value,
                  view_name:(0,P.ww)("viewName",(null==X?void 0:null===(t=X.props)||void 0===t?void 0:t.viewName)||"undefined",eb).value,
                  view_type:(null==X?void 0:null===(i=X.props)||void 0===i?void 0:i.viewType)||"",
                  element_id:(0,P.ww)("idString",(null==X?void 0:null===(o=X.props)||void 0===o?void 0:o.idString)||"undefined",eb).value,
                  gesture_type:null==X?void 0:null===(s=X.props)||void 0===s?void 0:s.gestureType,
                  event_name_old:null==X?void 0:X.name,
                  event_name_new:null===(a=e["event-name"])||void 0===a?void 0:a.trim(),
                  modified_description:(null==X?void 0:null===(r=X.description)||void 0===r?void 0:r.trim())!==e["event-description"].trim(),
                  type_of_event:"gesture"
                }
              })),
              eY()
            },
            onError:e=>{
              if(D.default.isAxiosError(e)){
                var t;
                let n=(null==e?void 0:null===(t=e.request)||void 0===t?void 0:t.response)&&JSON.parse(e.request.response).error;
                if((null==n?void 0:n.status)===409&&(null==n?void 0:n.message)==="Duplicate name."){
                  eZ([{
                    name:"event-name",
                    errors:["Smart event with that name already exists"]
                  }]);
                  return
                }
              }
              eS({
                content:"Something went wrong while editing an event. Please try again.",
                type:"error"
              }),
              N.l.error(e,"Error while editing an event")
            }
          })
        }
      },[eN,X,eK,eU,ed,er,es,J,eM,eI,null==eO?void 0:eO.parentType,null==eO?void 0:eO.sessionid,null==eO?void 0:eO.eventpage,null==eO?void 0:eO.eventid,null==eO?void 0:eO.starttime,eJ,eH,eS,eb,eY,ea,ez,eD,eZ]),
      e4=(0,o.useCallback)(e=>eN?e5(e):e2(e),[eN,e2,e5]),
      e6=(0,o.useCallback)(()=>{
        eF(),
        ee||G||(Y(void 0),et(void 0))
      },[eF,ee,G,Y,et]);
      return(0,o.useEffect)(()=>{
        eN&&eA({
          "event-name":null==X?void 0:X.name,
          "event-description":(null==X?void 0:X.description)||""
        })
      },[X,eA,G,eN]),
      (0,o.useEffect)(()=>(G||eo||(eR.current=setTimeout(e6,500)),()=>clearTimeout(null==eR?void 0:eR.current)),[e6,eo,G]),
      (0,o.useEffect)(()=>{
        if(G){
          var e,
          t,
          n,
          i;
          eI((0,R.CW)(null,{
            eventName:eN?"wa_activity_open_modify_event_dialog":"wa_activity_open_create_event_dialog",
            track_type:"event",
            eventProperty:{
              screen_name:(0,P.ww)("activityName",(null==J?void 0:J.activityName)||(null==X?void 0:X.screenName)||"undefined",eb).value,
              view_name:(0,P.ww)("viewName",(null==X?void 0:null===(e=X.props)||void 0===e?void 0:e.viewName)||"undefined",eb).value,
              view_type:(null==X?void 0:null===(t=X.props)||void 0===t?void 0:t.viewType)||"",
              element_id:(0,P.ww)("idString",(null==X?void 0:null===(n=X.props)||void 0===n?void 0:n.idString)||"undefined",eb).value,
              gesture_type:(null==X?void 0:null===(i=X.props)||void 0===i?void 0:i.gestureType)||(null==X?void 0:X.name),
              event_id:null==X?void 0:X.id,
              event_name:null==X?void 0:X.name,
              session_id:null==es?void 0:es._id,
              type_of_event:"gesture"
            }
          }))
        }
      },[G,J,X,eN,es,eO,eI,eb]),
      (0,o.useEffect)(()=>{
        !eN&&G&&(ev(!1),ef(!1),eg(!1))
      },[eN,G]),
      (0,i.jsxs)(i.Fragment,{
        children:[(0,i.jsx)(O.nz,{}),(0,i.jsx)(a.default,{
          visible:G,
          footer:null,
          onCancel:eY,
          closable:!1,
          className:"ant-modal-manage-nocode-event",
          wrapClassName:"ant-modal-manage-nocode-event-wrapper",
          destroyOnClose:!0,
          width:570,
          children:(0,i.jsxs)(s.Z,{
            form:ep,
            name:"manage-no-code-event",
            onFinish:e4,
            children:[(0,i.jsx)(z.Dx,{
              children:eN?"Edit smart event":"Create smart event"
            }),(0,i.jsxs)(O.DK,{
              children:["Create and manage events without a single line of code. Click ",(0,i.jsx)("a",{
                href:"https://help.uxcam.com/hc/en-us/articles/24753425542297-What-are-smart-events",
                target:"_blank",
                rel:"noreferrer",
                children:" here"
              })," to know more."]
            }),(0,i.jsxs)(O.Rm,{
              children:[(0,i.jsx)(O.AZ,{
                children:(0,i.jsx)("b",{
                  children:"Event name"
                })
              }),(0,i.jsx)(s.Z.Item,{
                name:"event-name",
                rules:[{
                  required:!0,
                  message:"Please provide an event name"
                },{
                  max:50,
                  message:"The event name is too long. Please make it shorter."
                }],
                shouldUpdate:!0,
                children:(0,i.jsx)(O.oH,{
                  placeholder:"Add event name",
                  disabled:e$||!!eN
                })
              }),(0,i.jsx)(O.AZ,{
                children:(0,i.jsx)("b",{
                  children:"Description"
                })
              }),(0,i.jsx)(s.Z.Item,{
                name:"event-description",
                className:"text-area",
                rules:[{
                  max:500,
                  message:"The description is too long. Please make it shorter."
                }],
                children:(0,i.jsx)(O.ox,{
                  placeholder:"Add description",
                  disabled:e$
                })
              }),(0,i.jsxs)(O.pM,{
                isEditable:eN,
                children:[!eN&&(0,i.jsxs)(i.Fragment,{
                  children:[(0,i.jsx)(O.AZ,{
                    children:(0,i.jsx)("b",{
                      children:"Event properties"
                    })
                  }),(0,i.jsx)(E,{
                    title:P.br.title,
                    description:P.br.description
                  })]
                }),(0,i.jsxs)(O.ub,{
                  children:[(0,i.jsx)(z.__,{
                    children:(0,i.jsx)("b",{
                      children:"Screen name:"
                    })
                  }),(0,i.jsx)(O.u2,{
                    children:eN?(0,i.jsx)("span",{
                      children:(0,i.jsx)(l.Z,{
                        overlay:(0,P.hJ)(null==X?void 0:null===(n=X.props)||void 0===n?void 0:n.viewName)&&(null==X?void 0:null===(v=X.props)||void 0===v?void 0:v.viewName),
                        placement:"top",
                        children:(0,P.ww)("activityName",(null==J?void 0:J.activityName)||(null==X?void 0:X.screenName)||"undefined",eb).jsx
                      })
                    }):(0,i.jsxs)(r.default.Group,{
                      onChange:e=>ew(e,"screenName"),
                      defaultValue:(null==J?void 0:J.activityName)||(null==X?void 0:X.screenName),
                      disabled:eC("screenName"),
                      children:[(0,i.jsx)(l.Z,{
                        overlay:eC("screenName")&&"You can set a maximum of 2 attributes to “All”.",
                        placement:"bottom",
                        children:(0,i.jsx)(r.default,{
                          value:"any",
                          children:"All"
                        })
                      }),(0,i.jsx)(r.default,{
                        value:(null==J?void 0:J.activityName)||(null==X?void 0:X.screenName),
                        children:(0,i.jsx)(l.Z,{
                          overlay:(0,P.hJ)((null==J?void 0:J.activityName)||(null==X?void 0:X.screenName))&&((null==J?void 0:J.activityName)||(null==X?void 0:X.screenName)),
                          placement:"top",
                          children:(0,P.ww)("activityName",(null==J?void 0:J.activityName)||(null==X?void 0:X.screenName)||"undefined",eb).jsx
                        })
                      })]
                    })
                  })]
                }),eN&&(null==X?void 0:X.eventType)&&(0,i.jsxs)(O.ub,{
                  children:[(0,i.jsx)(z.__,{
                    children:(0,i.jsx)("b",{
                      children:"Event type:"
                    })
                  }),(0,i.jsx)(O.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:null==X?void 0:X.eventType
                    })
                  })]
                }),(0,i.jsxs)(O.ub,{
                  children:[(0,i.jsx)(z.__,{
                    children:(0,i.jsx)("b",{
                      children:"Gesture type:"
                    })
                  }),(0,i.jsx)(O.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:e0
                    })
                  })]
                }),(0,i.jsxs)(O.ub,{
                  children:[(0,i.jsx)(z.__,{
                    children:(0,i.jsx)("b",{
                      children:"UI element type:"
                    })
                  }),(0,i.jsx)(O.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:(null==X?void 0:null===(y=X.props)||void 0===y?void 0:y.viewType)||(0,i.jsx)("i",{
                        children:"Undefined"
                      })
                    })
                  })]
                }),(0,i.jsxs)(O.ub,{
                  children:[(0,i.jsx)(z.__,{
                    children:(0,i.jsx)("b",{
                      children:"UI element name:"
                    })
                  }),(0,i.jsx)(O.u2,{
                    children:eN?(0,i.jsx)("span",{
                      children:(0,i.jsx)(l.Z,{
                        overlay:(0,P.hJ)(null==X?void 0:null===(C=X.props)||void 0===C?void 0:C.viewName)&&(null==X?void 0:null===(S=X.props)||void 0===S?void 0:S.viewName),
                        placement:"top",
                        children:(0,P.ww)("viewName",(null==X?void 0:null===(I=X.props)||void 0===I?void 0:I.viewName)||"undefined",eb).jsx
                      })
                    }):(0,i.jsxs)(r.default.Group,{
                      onChange:e=>ew(e,"viewName"),
                      defaultValue:(null==X?void 0:null===(b=X.props)||void 0===b?void 0:b.viewName)||"not defined",
                      disabled:eC("viewName"),
                      children:[(0,i.jsx)(l.Z,{
                        overlay:eC("viewName")&&"You can set a maximum of 2 attributes to “All”.",
                        placement:"bottom",
                        children:(0,i.jsx)(r.default,{
                          value:"any",
                          children:"All"
                        })
                      }),(0,i.jsx)(r.default,{
                        value:(null==X?void 0:null===(w=X.props)||void 0===w?void 0:w.viewName)||"not defined",
                        children:(0,i.jsx)(l.Z,{
                          overlay:(0,P.hJ)(null==X?void 0:null===(j=X.props)||void 0===j?void 0:j.viewName)&&(null==X?void 0:null===(k=X.props)||void 0===k?void 0:k.viewName),
                          placement:"top",
                          children:(0,P.ww)("viewName",(null==X?void 0:null===(_=X.props)||void 0===_?void 0:_.viewName)||"undefined",eb).jsx
                        })
                      })]
                    })
                  })]
                }),(0,i.jsxs)(O.ub,{
                  children:[(0,i.jsx)(z.__,{
                    children:(0,i.jsx)("b",{
                      children:"UI element ID:"
                    })
                  }),(0,i.jsx)(O.u2,{
                    children:eN?(0,i.jsx)("span",{
                      children:(0,i.jsx)(l.Z,{
                        overlay:(0,P.hJ)(null==X?void 0:null===(q=X.props)||void 0===q?void 0:q.idString)&&(null==X?void 0:null===(Q=X.props)||void 0===Q?void 0:Q.idString),
                        placement:"top",
                        children:(0,P.ww)("idString",(null==X?void 0:null===(K=X.props)||void 0===K?void 0:K.idString)||"undefined",eb).jsx
                      })
                    }):(0,i.jsxs)(r.default.Group,{
                      onChange:e=>ew(e,"elementId"),
                      defaultValue:(null==X?void 0:null===(U=X.props)||void 0===U?void 0:U.idString)||"not defined",
                      disabled:eC("elementId"),
                      children:[(0,i.jsx)(l.Z,{
                        overlay:eC("elementId")&&"You can set a maximum of 2 attributes to “All”.",
                        placement:"bottom",
                        children:(0,i.jsx)(r.default,{
                          value:"any",
                          children:"All"
                        })
                      }),(0,i.jsx)(r.default,{
                        value:(null==X?void 0:null===(B=X.props)||void 0===B?void 0:B.idString)||"not defined",
                        children:(0,i.jsx)(l.Z,{
                          overlay:(0,P.hJ)(null==X?void 0:null===(V=X.props)||void 0===V?void 0:V.idString)&&(null==X?void 0:null===(W=X.props)||void 0===W?void 0:W.idString),
                          placement:"top",
                          children:(0,P.ww)("idString",(null==X?void 0:null===(H=X.props)||void 0===H?void 0:H.idString)||"undefined",eb).jsx
                        })
                      })]
                    })
                  })]
                }),eN&&(null==X?void 0:X.createdByName)&&(0,i.jsxs)(O.ub,{
                  children:[(0,i.jsx)(z.__,{
                    children:(0,i.jsx)("b",{
                      children:"Created by:"
                    })
                  }),(0,i.jsx)(O.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:null==X?void 0:X.createdByName
                    })
                  })]
                }),eN&&(null==X?void 0:X.createdOn)&&(0,i.jsxs)(O.ub,{
                  children:[(0,i.jsx)(z.__,{
                    children:(0,i.jsx)("b",{
                      children:"Created on:"
                    })
                  }),(0,i.jsx)(O.u2,{
                    isUneditable:!0,
                    children:(0,i.jsx)("span",{
                      children:(0,A.Sr)(null==X?void 0:X.createdOn)
                    })
                  })]
                })]
              })]
            }),(0,i.jsx)(s.Z.Item,{
              children:(0,i.jsxs)(O.Zg,{
                children:[(0,i.jsx)(z.EK,{
                  children:eN&&(0,i.jsxs)(i.Fragment,{
                    children:[eW&&(0,i.jsxs)(p.Z,{
                      width:"default",
                      variant:"ghost",
                      size:"big",
                      onClick:e1,
                      type:"button",
                      style:{
                        color:"#5D97FF",
                        fontSize:"12px",
                        lineHeight:"24px",
                        paddingRight:"12px"
                      },
                      loading:eG,
                      disabled:eQ,
                      children:[(0,i.jsx)(u.Z,{}),"Duplicate event"]
                    }),(0,i.jsxs)(p.Z,{
                      width:"default",
                      variant:"ghost",
                      size:"big",
                      onClick:eX,
                      type:"button",
                      style:{
                        color:"#DC4F44",
                        fontSize:"12px",
                        lineHeight:"24px",
                        paddingRight:"12px"
                      },
                      loading:eG,
                      disabled:eQ,
                      children:[(0,i.jsx)(c.Z,{}),"Delete event"]
                    })]
                  })
                }),(0,i.jsxs)(z.EK,{
                  children:[(0,i.jsx)(p.Z,{
                    width:"medium",
                    variant:"ghost",
                    onClick:eY,
                    disabled:e$,
                    type:"button",
                    children:"Cancel"
                  }),(0,i.jsx)(p.Z,{
                    width:"medium",
                    type:"submit",
                    loading:eQ,
                    disabled:eG,
                    children:eN?"Save":"Create event"
                  })]
                })]
              })
            })]
          })
        })]
      })
    })
  },
  32240:function(e,t,n){
    "use strict";
    n.d(t,{
      O9:function(){
        return f
      },
      Pc:function(){
        return h
      },
      Ql:function(){
        return a
      },
      TG:function(){
        return l
      },
      ZE:function(){
        return r
      },
      br:function(){
        return u
      },
      dl:function(){
        return d
      },
      hJ:function(){
        return m
      },
      ww:function(){
        return c
      },
      zE:function(){
        return p
      }
    });
    var i=n(85893),
    o=n(48203);
    n(67294);
    let s=n(19521).default.span.withConfig({
      componentId:"sc-c8720876-0"
    })(["overflow:hidden;max-width:150px;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-all;"]),
    a=(e,t,n)=>{
      var i,
      o,
      s,
      a,
      r;
      let l=(null==n?void 0:null===(i=n.rule)||void 0===i?void 0:i.activityName)==="__any__",
      d=(null==n?void 0:null===(o=n.rule)||void 0===o?void 0:o.viewName)==="__any__",
      c=(null==n?void 0:null===(s=n.rule)||void 0===s?void 0:s.idString)==="__any__",
      u=null===(r=e.screenTimeline)||void 0===r?void 0:null===(a=r.activities)||void 0===a?void 0:a.map(e=>{
        var i;
        return{
          ...e,
          actions:null==e?void 0:null===(i=e.actions)||void 0===i?void 0:i.flatMap(i=>{
            var o,
            s,
            a,
            r,
            u,
            p,
            h,
            f;
            if(i.name===t.name&&(c||(null==i?void 0:null===(o=i.properties)||void 0===o?void 0:o.idString)===(null==t?void 0:null===(s=t.props)||void 0===s?void 0:s.idString))&&(d||(null==i?void 0:null===(a=i.properties)||void 0===a?void 0:a.viewName)===(null==t?void 0:null===(r=t.props)||void 0===r?void 0:r.viewName))&&(l||t.screenName===(null==e?void 0:e.activityName))){
              let e={
                ...i,
                type:"smart_gesture_event",
                id:null==n?void 0:n.nceId.toString(),
                name:null==n?void 0:n.name,
                description:null==n?void 0:n.description,
                params:{
                  ...i.properties,
                  gestureType:null==i?void 0:i.name,
                  rule:null==n?void 0:n.rule,
                  viewName:(null==i?void 0:null===(u=i.properties)||void 0===u?void 0:u.viewName)||null,
                  viewType:(null==i?void 0:null===(p=i.properties)||void 0===p?void 0:p.viewType)||"Unknown view type",
                  idString:(null==i?void 0:null===(h=i.properties)||void 0===h?void 0:h.idString)||null
                }
              };
              return null==e||null===(f=e.params)||void 0===f||delete f.viewClass,
              null==e||delete e.properties,
              null==e||delete e.isRage,
              null==e||delete e.isResponsiveGesture,
              [i,e]
            }
            return i
          })
        }
      });
      return{
        ...e,
        screenTimeline:{
          ...e.screenTimeline,
          activities:u
        }
      }
    },
    r=(e,t)=>{
      var n,
      i;
      let o=null===(i=e.screenTimeline)||void 0===i?void 0:null===(n=i.activities)||void 0===n?void 0:n.map(e=>{
        var n;
        return{
          ...e,
          actions:null==e?void 0:null===(n=e.actions)||void 0===n?void 0:n.map(e=>(null==e?void 0:e.id)===(null==t?void 0:t.nceId)?{
            ...e,
            name:null==t?void 0:t.name,
            description:null==t?void 0:t.description
          }:e)
        }
      });
      return{
        ...e,
        screenTimeline:{
          ...e.screenTimeline,
          activities:o
        }
      }
    },
    l=(e,t,n)=>{
      var i,
      o;
      let s=null===(o=e.screenTimeline)||void 0===o?void 0:null===(i=o.activities)||void 0===i?void 0:i.map(e=>{
        var t;
        return{
          ...e,
          actions:null==e?void 0:null===(t=e.actions)||void 0===t?void 0:t.filter(e=>e.id!==n)
        }
      });
      return{
        ...e,
        screenTimeline:{
          ...e.screenTimeline,
          activities:s
        }
      }
    },
    d=e=>{
      if("undefined"!==e&&"__any__"===e)return(0,i.jsx)("i",{
        children:"Includes all"
      });
      if(null==e)return(0,i.jsx)("i",{
        children:"Undefined"
      });
      let t=(null==e?void 0:e.length)>42;
      return(0,i.jsx)(o.Z,{
        overlay:t&&e,
        placement:"top",
        children:(0,i.jsx)(s,{
          children:e
        })
      })
    },
    c=(e,t,n)=>"__any__"===t?{
      jsx:(0,i.jsx)("i",{
        children:"Includes all"
      }),
      value:"__any__"
    }:"undefined"===t?{
      jsx:(0,i.jsx)("i",{
        children:"Undefined"
      }),
      value:"undefined"
    }:n&&Object.keys(n)&&"__any__"===n[e]?{
      jsx:(0,i.jsx)("i",{
        children:"Includes all"
      }),
      value:"__any__"
    }:{
      jsx:t,
      value:t
    },
    u={
      title:'Use "All" to tag multiple similar events at once',
      description:'"All" gives you flexibility and saves time creating events across all platforms (iOS, Android).<br>\n	<b>Screen name - All</b> - to tag interactions with the UI element on all screens where it appears (e.g., capture the "Add to cart" button wherever it is.)<br>\n	<b>UI element name - All</b> - to tag interactions with all UI elements of the same element ID, regardless of the element name (e.g., capture taps on all products on the screen.)<br>\n	<b>UI element ID - All</b> - to tag interactions with all UI elements of the same element name, regardless of the element ID (e.g., capture taps on all buttons that do the same thing but differ in color or shape.)'
    },
    p=(e,t,n)=>{
      var i,
      o;
      let s=null===(o=e.screenTimeline)||void 0===o?void 0:null===(i=o.activities)||void 0===i?void 0:i.map(e=>{
        if((null==e?void 0:e.activityName)===(null==t?void 0:t.activityName)){
          var i;
          let t=[{
            ...n,
            type:"smart_screenvisit_event",
            id:null==n?void 0:n.id.toString(),
            name:null==n?void 0:n.name,
            description:null==n?void 0:n.description,
            time:null==e?void 0:e.time,
            params:{
              ...null==n?void 0:n.params,
              screenName:null==n?void 0:null===(i=n.params)||void 0===i?void 0:i.screenName
            }
          },...(null==e?void 0:e.actions)||[]];
          return{
            ...e,
            actions:t
          }
        }
        return e
      });
      return{
        ...e,
        screenTimeline:{
          ...e.screenTimeline,
          activities:s
        }
      }
    },
    h=(e,t)=>{
      var n,
      i;
      let o=null===(i=e.screenTimeline)||void 0===i?void 0:null===(n=i.activities)||void 0===n?void 0:n.map(e=>{
        var n;
        return{
          ...e,
          actions:null==e?void 0:null===(n=e.actions)||void 0===n?void 0:n.map(e=>(null==e?void 0:e.id)===(null==t?void 0:t.id)?{
            ...e,
            name:null==t?void 0:t.name,
            description:null==t?void 0:t.description
          }:e)
        }
      });
      return{
        ...e,
        screenTimeline:{
          ...e.screenTimeline,
          activities:o
        }
      }
    },
    f=(e,t,n)=>{
      var i,
      o;
      let s=null===(o=e.screenTimeline)||void 0===o?void 0:null===(i=o.activities)||void 0===i?void 0:i.map(e=>{
        if(e.screenIndex===(null==t?void 0:t.screenIndex)){
          var i;
          return{
            ...e,
            actions:null==e?void 0:null===(i=e.actions)||void 0===i?void 0:i.filter(e=>e.id!==n)
          }
        }
        return e
      });
      return{
        ...e,
        screenTimeline:{
          ...e.screenTimeline,
          activities:s
        }
      }
    },
    m=e=>e&&(null==e?void 0:e.length)>40
  },
  17088:function(e,t,n){
    "use strict";
    n.d(t,{
      AZ:function(){
        return r
      },
      DK:function(){
        return p
      },
      RY:function(){
        return y
      },
      Rm:function(){
        return h
      },
      Zg:function(){
        return u
      },
      nz:function(){
        return v
      },
      oH:function(){
        return d
      },
      ox:function(){
        return c
      },
      pM:function(){
        return f
      },
      u2:function(){
        return g
      },
      uH:function(){
        return x
      },
      ub:function(){
        return m
      }
    });
    var i=n(19521),
    o=n(79999),
    s=n(97600),
    a=n(22514);
    let r=(0,i.default)(a.__).withConfig({
      componentId:"sc-e440759-0"
    })(["margin-bottom:8px;span{font-style:italic;}"]),
    l=(0,i.css)(["font-weight:400;font-size:12px;line-height:24px;color:#161e35;outline:none;border:1px solid #e8e8eb;border-radius:6px;padding:2px 10px;width:100%;margin-bottom:16px;&::placeholder{color:#737886;opacity:1;}&:hover:not(:disabled){border-color:#9ec1ff;}&:focus:not(:disabled){border-color:#5d97ff;}&:disabled{border-color:#e8e8eb;color:#d0d2d7;&::placeholder{color:#d0d2d7;}}"]),
    d=i.default.input.withConfig({
      componentId:"sc-e440759-1"
    })([""," ",""],l,e=>{
      let{
        error:t
      }=e;
      return t&&(0,i.css)(["border-color:#f4584c;color:#f4584c;&:hover{border-color:#f4584c;}"])
    }),
    c=i.default.textarea.withConfig({
      componentId:"sc-e440759-2"
    })([""," height:48px;resize:none;"],l),
    u=i.default.div.withConfig({
      componentId:"sc-e440759-3"
    })(["width:100%;display:flex;justify-content:space-between;"]),
    p=i.default.p.withConfig({
      componentId:"sc-e440759-4"
    })(["font-size:0.75rem;line-height:1.5rem;color:#090f19;margin-bottom:16px;"]),
    h=i.default.div.withConfig({
      componentId:"sc-e440759-5"
    })(["max-height:460px;overflow-y:auto;overflow-x:hidden;"]),
    f=i.default.div.withConfig({
      componentId:"sc-e440759-6"
    })(["border-radius:4px;padding:",";background-color:",";",""],e=>{
      let{
        isEditable:t
      }=e;
      return t?"12px":"0px"
    },e=>{
      let{
        isEditable:t
      }=e;
      return t?o.r.colors.surface05.toString():"initial"
    },e=>{
      let{
        isEditable:t
      }=e;
      return t&&(0,i.css)(["span{color:"," !important;}"],o.r.colors.surface300.toString())
    }),
    m=i.default.div.withConfig({
      componentId:"sc-e440759-7"
    })(["display:flex;align-items:center;width:100%;> h3{flex-basis:25%;min-width:25%;}.ant-radio-group{display:flex;}span{font-size:12px;line-height:24px;}"]),
    g=i.default.div.withConfig({
      componentId:"sc-e440759-8"
    })(["display:flex;align-items:center;margin-bottom:6px;gap:8px;span{color:",";max-width:300px;padding-right:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}"],e=>{
      let{
        isUneditable:t
      }=e;
      return t?o.r.colors.surface300.toString():o.r.colors.surface400.toString()
    }),
    x=i.default.div.withConfig({
      componentId:"sc-e440759-9"
    })(["h2{margin-bottom:16px;}p{color:#454B5D;margin-bottom:32px;strong{font-weight:700;}}button{margin-left:auto;min-width:112px;text-align:center;display:flex;justify-content:center;}"]),
    v=(0,i.createGlobalStyle)([".ant-modal-manage-nocode-event-wrapper{display:flex;align-items:center;}.ant-modal-manage-nocode-event{top:0;.ant-modal-content{border-radius:8px;padding:32px;}.ant-modal-body{padding:0;}form#manage-no-code-event,form#manage-no-code-screen-event{.ant-form-item-explain-error{margin-top:-6px;font-weight:400;font-size:10px;line-height:14px;color:#F4584C;}.ant-form-item,.text-area{margin-bottom:0px;}.ant-form-item-has-error input{border-color:#F4584C;}}}"]),
    y=(0,i.default)(s.Z).withConfig({
      componentId:"sc-e440759-10"
    })(["border-radius:4px;background:rgba(243,244,245,0.50);display:flex;border:none;font-style:italic;font-size:12px;align-items:start;margin-bottom:8px;.anticon-info-circle{margin-top:6px;color:#000;}.ant-alert-message{line-height:24px;}",""],e=>{
      let{
        rotate:t
      }=e;
      return t&&"\n    svg {\n      transform: rotate( ".concat(t,"deg );\n    }\n  ")
    })
  },
  59722:function(e,t,n){
    "use strict";
    var i=n(85893),
    o=n(67294),
    s=n(19521),
    a=n(48203);
    let r=s.default.p.withConfig({
      componentId:"sc-80203c38-0"
    })(["white-space:pre;overflow:hidden;text-overflow:ellipsis;width:",";text-align:left;font-size:14px;font-weight:400;margin:0;padding:0;"],e=>{
      let{
        widthValue:t
      }=e;
      return t?"".concat(t,"px"):void 0
    }),
    l=e=>{
      let{
        children:t,
        title:n,
        width:s
      }=e,
      [l,d]=(0,o.useState)(!1),
      c=(0,o.useRef)(null);
      return(0,i.jsx)(a.Z,{
        visible:l,
        onVisibleChange:e=>{
          c.current.clientWidth<c.current.scrollWidth&&d(e)
        },
        title:n,
        overlayStyle:{
          whiteSpace:"pre"
        },
        children:(0,i.jsx)(r,{
          ref:c,
          widthValue:s,
          className:"ellipse-tooltip-text",
          children:t
        })
      })
    };
    t.Z=e=>{
      let{
        value:t,
        width:n
      }=e;
      return(0,i.jsx)(l,{
        title:t,
        width:n,
        children:t
      })
    }
  },
  95996:function(e,t,n){
    "use strict";
    function i(e){
      for(var t=0,n=0;t<e.length;n=e.charCodeAt(t++)+((n<<5)-n));
      for(var t=0,i="#";t<3;i+="00".concat((n>>8*t++&255).toString(16)).slice(-2));
      return i
    }
    n.d(t,{
      Z:function(){
        return i
      }
    })
  },
  12810:function(e,t,n){
    "use strict";
    var i=n(85893),
    o=n(67294),
    s=n(19521);
    let a=s.default.div.withConfig({
      componentId:"sc-94818d98-0"
    })(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0;z-index:9999;"]),
    r=s.default.div.withConfig({
      componentId:"sc-94818d98-1"
    })(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;margin:auto;"]),
    l=s.default.span.withConfig({
      componentId:"sc-94818d98-2"
    })(["display:inline-block;font-size:30px;padding:0.8em;position:relative;width:0.1em;height:0.1em;color:inherit;vertical-align:middle;pointer-events:none;border:.3em solid #DFEAFF;border-top-color:#3377fa;border-radius:50%;animation:1s loader-spin linear infinite;position:relative;&:before{content:'';display:block;width:inherit;height:inherit;position:absolute;top:-.2em;;left:-.2em;;border:.2em solid transparent;border-radius:50%;opacity:.5;}@keyframes loader-spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]),
    d=(0,o.memo)(e=>{
      let{
        size:t,
        fullscreen:n,
        className:o
      }=e;
      return n?(0,i.jsx)(a,{
        className:"loader center-loader ".concat(o),
        children:(0,i.jsx)(l,{
          style:{
            fontSize:t?"".concat(t,"px"):"30px"
          }
        })
      }):(0,i.jsx)(r,{
        className:o||"",
        children:(0,i.jsx)(l,{
          style:{
            fontSize:t?"".concat(t,"px"):"30px"
          }
        })
      })
    });
    t.Z=d
  },
  8865:function(e,t,n){
    "use strict";
    n.d(t,{
      Z:function(){
        return s
      }
    });
    var i=n(8891),
    o=n.n(i);
    function s(){
      return 0===document.referrer.search("https?://(.*)google.([^/?]*)")?"Google":0===document.referrer.search("https?://(.*)bing.([^/?]*)")?"Bing":0===document.referrer.search("https?://(.*)yahoo.([^/?]*)")?"Yahoo":0===document.referrer.search("https?://(.*)facebook.([^/?]*)")?"Facebook":0===document.referrer.search("https?://(.*)twitter.([^/?]*)")?"Twitter":0===document.referrer.search("https?://(.*)medium.([^/?]*)")?"Medium":0===document.referrer.search("https?://(.*)quora.([^/?]*)")?"Quora":0===document.referrer.search("https?://(.*)linkedin.([^/?]*)")?"LinkedIn":0===document.referrer.search("https?://(.*)github.([^/?]*)")?"Github":0===document.referrer.search("https?://(.*)stackoverflow.([^/?]*)")?"Stackoverflow":0===document.referrer.search("https?://(.*)jobsnepal.([^/?]*)")?"JobsNepal":(document.referrer.search("https?://(.*)uxcam.([^/?]*)"),o().get_property("utm_source")?o().get_property("utm_source"):"")
    }
  },
  75191:function(e,t,n){
    "use strict";
    n.d(t,{
      n:function(){
        return d
      }
    });
    var i=n(67294),
    o=n(66678),
    s=n.n(o),
    a=n(14416),
    r=n(92046),
    l=n(5257);
    let d=()=>{
      let{
        sessionDetail:e
      }=(0,l.Lc)(),
      t=(0,i.useMemo)(()=>{
        var t;
        return(null==e?void 0:null===(t=e.screenTimeline)||void 0===t?void 0:t.activities)||[]
      },[e]),
      {
        selectedScreens:n=[]
      }=(0,a.v9)(e=>e.screenTimelineReducer);
      return(0,i.useMemo)(()=>{
        if(!t.length)return{};
        let e=s()(t),
        i=[],
        o=[];
        if(null==e?void 0:e.length){
          let t=(e=e.map((e,t)=>(e.screenIndex=t,e))).filter(e=>{
            let{
              activityName:t
            }=e;
            return!n.includes(t)
          }),
          s=t.map(e=>e.screenIndex);
          t.length&&(i=(0,r.ie)(s)),
          i=(o=(o=i.filter(e=>e.includes("->"))).map(e=>{
            let t=e;
            return t=e.includes("->")?e.split("->"):e,
            t=e.includes("->")?(0,r.w6)(Number(t[0]),Number(t[1])):[Number(t)]
          })).map(t=>t.map(t=>e[t]))
        }
        if(o.length){
          o.map((t,n)=>(e.splice(t[0],1,i[n]),t));
          let t=o.map(e=>(e.shift(),e)).reduce((e,t)=>e.concat(t),[]);
          e=e.filter((e,n)=>!t.includes(n))
        }
        return{
          screenTimeLineDataCloned:e,
          seqArrayIndexList:i
        }
      },[t,n])
    }
  },
  4497:function(e,t,n){
    "use strict";
    n.d(t,{
      Hs:function(){
        return s
      },
      Kn:function(){
        return l
      },
      Ov:function(){
        return d
      },
      ZP:function(){
        return a
      },
      e5:function(){
        return c
      },
      jl:function(){
        return o
      },
      xp:function(){
        return r
      }
    });
    var i=n(98777);
    let o=async e=>i.be.post("".concat("https://pythonapi-prod.uxcam.com","/no_code_event/create"),e,{
      withCredentials:!0
    }),
    s=async e=>i.be.post("".concat("https://pythonapi-prod.uxcam.com","/no_code_event/management"),e,{
      withCredentials:!0
    }),
    a=async e=>{
      let{
        appId:t,
        nceId:n
      }=e;
      return i.be.delete("".concat("https://pythonapi-prod.uxcam.com","/no_code_event/delete/").concat(t,"/").concat(n),{
        withCredentials:!0
      })
    },
    r=async e=>i.be.post("".concat("https://pythonapi-prod.uxcam.com","/no_code_event/update"),e,{
      withCredentials:!0
    }),
    l=async e=>i.be.post("".concat("https://pythonapi-prod.uxcam.com","/screenvisit_event/create"),e,{
      withCredentials:!0
    }),
    d=async e=>i.be.post("".concat("https://pythonapi-prod.uxcam.com","/screenvisit_event/update"),e,{
      withCredentials:!0
    }),
    c=async e=>{
      let{
        appId:t,
        nceId:n
      }=e;
      return i.be.delete("".concat("https://pythonapi-prod.uxcam.com","/screenvisit_event/delete/").concat(t,"/").concat(n),{
        withCredentials:!0
      })
    }
  },
  24842:function(e,t,n){
    "use strict";
    n.d(t,{
      EJ:function(){
        return U
      },
      FL:function(){
        return C
      },
      Gf:function(){
        return G
      },
      I6:function(){
        return h
      },
      I7:function(){
        return V
      },
      LF:function(){
        return H
      },
      Qh:function(){
        return Z
      },
      YY:function(){
        return Q
      },
      bR:function(){
        return y
      },
      bZ:function(){
        return x
      },
      g7:function(){
        return T
      },
      he:function(){
        return u
      },
      j4:function(){
        return A
      },
      ko:function(){
        return M
      },
      oI:function(){
        return R
      },
      pA:function(){
        return w
      },
      rC:function(){
        return d
      },
      s3:function(){
        return F
      },
      wd:function(){
        return I
      },
      x1:function(){
        return m
      },
      xl:function(){
        return P
      }
    });
    var i=n(88767),
    o=n(98777);
    let s="https://pythonapi-prod.uxcam.com",
    a="https://dashboardapi.uxcam.com",
    r="https://pythonapi-prod.uxcam.com/v2",
    l=async e=>o.be.post("".concat(r,"/sessions/get-event-details"),e,{
      withCredentials:!0,
      credentials:"include"
    }),
    d=(e,t)=>(0,i.useQuery)(["sessionEvents",e],()=>l(e),{
      keepPreviousData:!0,
      enabled:t
    }),
    c=async e=>o.be.post("".concat("https://pythonapi-prod.uxcam.com","/no_code_event/get_event_details"),e,{
      withCredentials:!0,
      credentials:"include"
    }),
    u=(e,t)=>(0,i.useQuery)(["sessionNocodeEvents",e],()=>c(e),{
      keepPreviousData:!0,
      enabled:t
    }),
    p=async e=>o.be.get("".concat("https://pythonapi-prod.uxcam.com","/no_code_event/get_event_details/").concat(e),{
      withCredentials:!0,
      credentials:"include"
    }),
    h=function(e){
      let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];
      return(0,i.useQuery)(["sharedSessionNocodeEvents"],()=>p(e),{
        keepPreviousData:!0,
        enabled:t
      })
    },
    f=async e=>o.be.post("".concat(r,"/sessions/get-gesture-details"),e,{
      withCredentials:!0,
      credentials:"include"
    }),
    m=(e,t)=>(0,i.useQuery)(["sessionGestures",e],()=>f(e),{
      enabled:t&&!!(null==e?void 0:e.sessionid)
    }),
    g=e=>o.be.get("".concat(s,"/app/team/").concat(e),{
      withCredentials:!0,
      credentials:"include"
    }),
    x=(e,t)=>(0,i.useQuery)("".concat(e),()=>g(t)),
    v=async e=>o.be.post("".concat(a,"/share/copy-share-session"),e,{
      withCredentials:!0,
      credentials:"include"
    }),
    y=(e,t)=>(0,i.useQuery)("".concat(e),()=>v(t),{
      enabled:!1
    }),
    b=async e=>o.be.post("".concat(a,"/share/share-session"),e,{
      withCredentials:!0,
      credentials:"include"
    }),
    w=(e,t)=>(0,i.useQuery)("".concat(e),()=>b(t),{
      enabled:!1,
      retry:!1
    }),
    j=(e,t)=>o.be.get("".concat(r).concat(e).concat(t),{
      withCredentials:!0,
      credentials:"include"
    }),
    k=(e,t)=>o.be.get("".concat(s).concat(e).concat(t),{
      withCredentials:!0,
      credentials:"include"
    }),
    _=e=>o.be.get("".concat(r,"/sessions/get-recording-setting-details/").concat(e),{
      withCredentials:!0,
      credentials:"include"
    }),
    C=(e,t,n)=>(0,i.useQuery)("".concat(e),()=>k(t,n)),
    S=e=>o.be.get("".concat(s,"/ai/sessions/get-ai-feature/").concat(e),{
      withCredentials:!0,
      credentials:"include"
    }),
    I=function(e){
      let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];
      return(0,i.useQuery)(["shareSessionAIFeature",e],()=>S(e),{
        enabled:t&&!!e,
        keepPreviousData:!0
      })
    },
    E=e=>o.be.get("".concat(s,"/ai/sessions/get-ai-insights/").concat(e),{
      withCredentials:!0,
      credentials:"include"
    }),
    F=function(e){
      let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];
      return(0,i.useQuery)(["shareSessionAIInsights",e],()=>E(e),{
        enabled:t&&!!e,
        keepPreviousData:!0
      })
    },
    A=function(e,t,n){
      let o=!(arguments.length>3)||void 0===arguments[3]||arguments[3];
      return(0,i.useQuery)("".concat(e),()=>j(t,n),{
        keepPreviousData:!0,
        enabled:o
      })
    },
    Z=e=>(0,i.useQuery)("publicRecordingSetting",()=>_(e)),
    N=async e=>o.be.post("".concat(r,"/sessions/get-bug-details"),e,{
      withCredentials:!0,
      credentials:"include"
    }),
    R=e=>(0,i.useQuery)("sessionBugInfo",()=>N(e)),
    D=async(e,t)=>o.be.post("".concat(s).concat(e),t,{
      withCredentials:!0,
      credentials:"include"
    }),
    T=(e,t)=>(0,i.useQuery)(["crashSession",t],()=>D(e,t)),
    L=(e,t,n)=>o.be.get("".concat(a).concat(e).concat(t,"/session/").concat(n,"/crash-file-download"),{
      withCredentials:!0,
      credentials:"include"
    }),
    M=(e,t,n)=>(0,i.useQuery)("crashLog",()=>L(e,t,n),{
      enabled:!1,
      retry:!1
    }),
    z=async(e,t)=>o.be.post("".concat(s).concat(e),t,{
      withCredentials:!0,
      credentials:"include"
    }),
    P=(e,t)=>(0,i.useQuery)("exceptionsSession",()=>z(e,t)),
    O=async(e,t)=>o.be.post("".concat(s).concat(e),t,{
      withCredentials:!0,
      credentials:"include"
    }),
    U=(e,t)=>(0,i.useQuery)("anrSession",()=>O(e,t)),
    B=async e=>o.be.post("".concat(r,"/sessions/find-nearest-session"),e,{
      withCredentials:!0,
      credentials:"include"
    }),
    V=(e,t)=>(0,i.useQuery)(e,()=>B(t),{
      enabled:!1
    }),
    W=async e=>o.be.post("".concat(r,"/sessions/get-app-log"),e,{
      withCredentials:!0,
      credentials:"include"
    }),
    H=e=>(0,i.useQuery)("sessionAppLogs",()=>W(e),{
      enabled:!1,
      retry:!1
    }),
    q=async e=>o.be.post("".concat("https://pythonapi-prod.uxcam.com","/sessions/get-details"),e,{
      withCredentials:!0,
      credentials:"include"
    }).then(e=>{
      let{
        data:{
          data:t
        }
      }=e;
      return t
    }).catch(e=>{
      var t;
      return null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.data
    }),
    Q=(e,t)=>(0,i.useQuery)([e],()=>q(t),{
      suspense:!0,
      retry:3,
      refetchOnWindowFocus:!1,
      enabled:!!(null==t?void 0:t.sessionid)
    }),
    K=(e,t)=>o.be.get("".concat(s).concat(e).concat(t),{
      withCredentials:!0,
      credentials:"include"
    }),
    G=(e,t,n)=>(0,i.useQuery)("".concat(e),()=>K(t,n))
  },
  47295:function(e,t,n){
    "use strict";
    var i=n(85893);
    n(67294);
    var o=n(39284),
    s=n(74936),
    a=n(19521);
    let r=(0,a.default)(o.default).withConfig({
      componentId:"sc-b06adc7b-0"
    })(["height:210px;.ant-modal-footer{border-top:none;padding:0;}"]),
    l=a.default.div.withConfig({
      componentId:"sc-b06adc7b-1"
    })(["font-weight:400;font-size:18px;line-height:21px;margin-bottom:16px;padding:16px;"]),
    d=(0,a.default)(s.Z).withConfig({
      componentId:"sc-b06adc7b-2"
    })(["width:100px;height:42px;background:#5d97ff;border-radius:4px;color:#ffffff;font-size:16px;"]),
    c=a.default.div.withConfig({
      componentId:"sc-b06adc7b-3"
    })(["display:flex;justify-content:flex-end;"]),
    u=a.default.p.withConfig({
      componentId:"sc-b06adc7b-4"
    })(["color:#5b6d89;font-weight:400;font-size:14px;margin-bottom:0;"]),
    p=a.default.p.withConfig({
      componentId:"sc-b06adc7b-5"
    })(["font-size:18px;color:#161e35;margin-bottom:0;"]);
    t.Z=e=>{
      let{
        visibleForbiddenModal:t,
        setVisibleForbiddenModal:n
      }=e,
      o=()=>{
        n(!1)
      },
      s=()=>{
        n(!1)
      };
      return(0,i.jsxs)(r,{
        title:"",
        visible:t,
        onOk:o,
        onCancel:s,
        destroyOnClose:s,
        width:"415px",
        closable:!1,
        footer:[],
        children:[(0,i.jsxs)(l,{
          children:[(0,i.jsx)(p,{
            children:"Insufficient Privilege"
          }),(0,i.jsx)(u,{
            children:"You do not have required privilege for this action."
          })]
        }),(0,i.jsx)(c,{
          children:(0,i.jsx)(d,{
            onClick:()=>o(),
            type:"primary",
            children:"Ok"
          })
        })]
      })
    }
  },
  48019:function(e,t){
    "use strict";
    t.Z=[{
      roleText:"No access",
      role:"noAccess",
      settingAccess:"No access to the app"
    },{
      roleText:"App manager",
      role:"admin",
      infoMessage:["Can edit and delete selected apps.","Can edit team settings of selected apps.","Can view subscription and organization details.","Has full access to the available features."]
    },{
      roleText:"App member",
      role:"collaborator",
      infoMessage:["Can view settings of selected apps.","Can view subscription and organization details."," Has full access to the available features."]
    },{
      roleText:"App viewer",
      role:"viewer",
      infoMessage:["Can view settings of selected apps.","Can view subscription and organization details.","Has viewer access to the available features."]
    }]
  },
  57566:function(e,t,n){
    "use strict";
    n.d(t,{
      Z:function(){
        return d
      }
    });
    var i=n(85893),
    o=n(67294),
    s=n(80432),
    a=n(22911),
    r=n(87825),
    l=e=>(0,i.jsx)("svg",{
      width:19,
      height:19,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M15.252 2.482C13.632 1.13 11.362.485 9.14.485c-2.22 0-4.492.645-6.111 1.997C1.204 4.006.283 6.458.155 8.894c-.128 2.436.53 4.986 2.031 6.748 1.644 1.93 4.34 2.843 6.954 2.843 2.615 0 5.311-.913 6.954-2.843 1.5-1.762 2.16-4.312 2.031-6.748-.127-2.436-1.049-4.888-2.873-6.412ZM9.14 4.692c.456 0 .826.37.826.826v3.961a.825.825 0 0 1-1.651 0V5.518c0-.456.37-.825.825-.825Zm.826 8.419a.825.825 0 0 0-1.651 0v.33a.825.825 0 0 0 1.65 0v-.33Z",
        fill:"#FF955B"
      })
    }),
    d=()=>{
      let e=(0,o.useCallback)(e=>{
        switch(e){
          case"error":return(0,i.jsx)(r.Z,{});
          case"info":return(0,i.jsx)(l,{});
          default:return(0,i.jsx)(a.Z,{})
        }
      },[]);
      return{
        message:(0,o.useCallback)(t=>{
          let{
            content:n,
            type:i
          }=t;
          return s.ZP.open({
            content:n,
            type:i,
            icon:e(i),
            className:"new-message",
            duration:5
          })
        },[e])
      }
    }
  },
  65372:function(e,t,n){
    "use strict";
    n.d(t,{
      ro:function(){
        return d
      },
      C6:function(){
        return c
      },
      Rf:function(){
        return u
      },
      Nw:function(){
        return p
      },
      $z:function(){
        return h
      }
    });
    var i=n(30998),
    o=n.n(i),
    s=n(98777);
    class a{
      static async checkPlanStatus(e){
        return(await s.be.get("".concat("https://das-api.uxcam.com","/organization/").concat(e,"/check-plan-status"),{
          withCredentials:!0,
          validateStatus:e=>e>=200&&e<500
        })).data
      }
      static async getApps(e){
        return(await s.be.get("".concat("https://das-api.uxcam.com","/organization/").concat(e,"/get-apps"),{
          withCredentials:!0,
          validateStatus:e=>e>=200&&e<500
        })).data
      }
      static async getUsers(e){
        return(await s.be.get("".concat("https://das-api.uxcam.com","/organization/").concat(e,"/get-users"),{
          withCredentials:!0,
          validateStatus:e=>e>=200&&e<500
        })).data
      }
      static async manageAppAccess(e){
        return(await s.be.post("".concat("https://das-api.uxcam.com","/organization/").concat(e.organizationId,"/manage-app-access"),e,{
          withCredentials:!0,
          validateStatus:e=>e>=200&&e<500
        })).data
      }
      static async manageUserAccess(e){
        return(await s.be.post("".concat("https://das-api.uxcam.com","/organization/").concat(e.organizationId,"/manage-user-access"),e,{
          withCredentials:!0,
          validateStatus:e=>e>=200&&e<500
        })).data
      }
    }
    var r=n(32642);
    let l=(e,t)=>({
      type:t,
      data:e
    }),
    d=e=>async(t,n)=>{
      let i=!1,
      s=[...n().applicationReducer],
      d=o()(s,{
        orgId:e
      });
      return d>-1&&(i=s[d].isOwner),
      i&&a.checkPlanStatus(e).then(e=>(t(l(e.data,r.D0)),e.data)).catch(e=>(null==e?void 0:e.response)&&t(l(e.response.data,r.D0)))
    },
    c=e=>async t=>a.getApps(e).then(e=>(t(l(e.data,r.Vs)),e.data)).catch(e=>e.response),
    u=e=>async t=>a.getUsers(e).then(e=>(t(l(e.data,r.jW)),e.data)).catch(e=>e.response),
    p=e=>async()=>a.manageAppAccess(e).then(e=>e).catch(e=>e),
    h=e=>async()=>a.manageUserAccess(e).then(e=>e).catch(e=>e.response)
  },
  62610:function(e,t,n){
    "use strict";
    n.d(t,{
      FL:function(){
        return y
      },
      FY:function(){
        return j
      },
      IO:function(){
        return p
      },
      Oc:function(){
        return _
      },
      W3:function(){
        return m
      },
      XE:function(){
        return g
      },
      Yi:function(){
        return x
      },
      Zn:function(){
        return f
      },
      dA:function(){
        return v
      },
      gY:function(){
        return h
      },
      jG:function(){
        return k
      },
      jQ:function(){
        return I
      },
      kI:function(){
        return S
      },
      ri:function(){
        return b
      },
      uv:function(){
        return C
      },
      ym:function(){
        return w
      }
    });
    var i=n(36005),
    o=n(80432),
    s=n(11163),
    a=n.n(s),
    r=n(26797),
    l=n(32642),
    d=n(47639);
    o.ZP.config({
      maxCount:1
    });
    let c=e=>({
      type:l.ZI,
      data:e
    }),
    u=e=>({
      type:l.vx,
      data:e
    }),
    p=e=>({
      type:l.RG,
      data:e
    }),
    h=e=>({
      type:l.Wj,
      data:e
    }),
    f=(e,t)=>(n,i)=>r.Z.getAppDropdown(e||i().tokenReducer,t).then(async e=>{
      let i=t?await e.json():null,
      o=t?i.data:e.data.data;
      return n(c(o)),
      o
    }).catch(e=>((0,d.jF)(n,c,e.response,"dashboard"),e.response)),
    m=e=>async(t,n)=>{
      var i;
      let o=await t((0,d.c8)());
      return e._csrf=o,
      r.Z.createApp(e,null===(i=n().organizationReducer)||void 0===i?void 0:i[0]._id).then(e=>{
        var i;
        if(null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.success){
          let i=n().applicationReducer?n().applicationReducer[0]:[],
          o=n().csrfReducer;
          if(o.appExist=!0,i.apps.push(e.data.data.app),t(c([i])),t(u(o)),t(p(e.data.data.app)),1===i.apps.length)try{
            window.localStorage.setItem("appCreatedInitial",!0)
          }
          catch(e){}
        }
        return e.data
      },n=>{
        var i;
        return(0,d.pA)(t,void 0,n.response,e),
        null===(i=n.response)||void 0===i?void 0:i.data
      })
    },
    g=e=>async(t,n)=>{
      let i=await t((0,d.c8)());
      return e._csrf=i,
      r.Z.createApp(e,n().currentOrgReducer.orgId).then(async e=>{
        var i;
        if(null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.success){
          let i=n().csrfReducer;
          return i.appExist=!0,
          await t(f()),
          t(u(i)),
          e.data
        }
      },n=>(0,d.pA)(t,void 0,n.response,e))
    },
    x=e=>async(t,n)=>{
      let i=await t((0,d.c8)());
      return e._csrf=i,
      r.Z.createOrg(e,n().tokenReducer).then(e=>{
        if(e.success){
          let n={};
          return n.name=e.data.organization.name,
          n.orgId=e.data.organization._id,
          n.apps=[],
          t(c([n])),
          t(u({
            csrf:"",
            orgExist:!0,
            appExist:!1
          })),
          window.dataLayer=window.dataLayer||[],
          window.dataLayer.push({
            event:"organization-created",
            orgID:e.data.organization._id,
            orgName:e.data.organization.name
          }),
          {
            orgExist:!0,
            appExist:!1
          }
        }
      },e=>(0,d.pA)(t,void 0,e.response))
    },
    v=(e,t)=>(e,n)=>r.Z.installCode(n().urlReducer.appId,t).then(async t=>{
      if(200===t.status){
        let o=t.data,
        s=i.ZP.clone(n().currentAppReducer),
        a=n().appChecklistReducer;
        return(null==s?void 0:s.isIntegrated)||(s.isIntegrated=o.data.isIntegrated,a.isSDKIntegrated=o.data.isIntegrated),
        e(h(a)),
        e(p(s)),
        o.data
      }
      throw t
    }).catch(async t=>(0,d.jF)(e,p,t)),
    y=(e,t)=>(n,i)=>{
      let o;
      return(t||i().applicationReducer||[]).some(t=>t.apps.some(t=>{
        if((null==t?void 0:t._id)===e)return o=t,
        !0
      })),
      o||"undefined"===e||r.Z.getApp(e,i().tokenReducer).then(async e=>(n(p(e.data.data)),e.data.data)).catch(()=>{
        a().push("/error?errorStatus=406")
      }),
      void 0!==o&&n(p(o)),
      o
    },
    b=e=>async(t,n)=>{
      let i=e||n().currentAppReducer._id||n().urlReducer.appId;
      await r.Z.getAppChecklist(i).then(async e=>(t(h(e.data.data)),e.data.data),e=>{
        (0,d.pA)(t,void 0,e.response)
      })
    },
    w=(e,t)=>async n=>{
      let i=await n((0,d.c8)());
      return t._csrf=i,
      r.Z.allowSensitiveDataBlocked(t,e).then(e=>{
        if(e.data.success)return o.ZP.info(e.data.data.message),
        e.data.success
      },e=>{
        (0,d.pA)(n,void 0,e.response)
      })
    },
    j=(e,t)=>async n=>{
      let i=await n((0,d.c8)());
      return t._csrf=i,
      r.Z.allowOtherAnalyticTools(t,e).then(async e=>{
        if(e.data.success)return o.ZP.info(e.data.data.message),
        e.data.success
      },e=>{
        (0,d.pA)(n,void 0,e.response)
      })
    },
    k=(e,t)=>async n=>{
      let i=await n((0,d.c8)());
      return t._csrf=i,
      r.Z.allowToWatchCrashSession(t,e).then(async e=>{
        if(e.data.success)return o.ZP.info(e.data.data.message),
        e.data.success
      },e=>{
        (0,d.pA)(n,void 0,e.response)
      })
    },
    _=(e,t)=>async n=>{
      let i=await n((0,d.c8)());
      return t._csrf=i,
      r.Z.allowToWatchSlippingWayUser(t,e).then(async e=>{
        if(e.data.success)return o.ZP.info(e.data.data.message),
        e.data.success
      },e=>{
        (0,d.pA)(n,void 0,e.response)
      })
    },
    C=e=>async t=>{
      let n=await t((0,d.c8)());
      return r.Z.lastAppSelected({
        appId:e,
        _csrf:n
      }).then(e=>e).catch(e=>e)
    },
    S=(e,t)=>r.Z.handleChecklist(e,t).then(e=>{
      var t;
      return null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.data
    }).catch(e=>{
      var t,
      n,
      i;
      o.ZP.error((null==e?void 0:null===(i=e.response)||void 0===i?void 0:null===(n=i.data)||void 0===n?void 0:null===(t=n.error)||void 0===t?void 0:t.message)||"Unable to update")
    }),
    I=e=>r.Z.getAppChecklist(e).then(async e=>e.data.data,e=>{
      var t;
      return null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.data
    })
  },
  93851:function(e,t,n){
    "use strict";
    n.d(t,{
      _g:function(){
        return s
      },
      j3:function(){
        return a
      }
    });
    var i=n(32642);
    n(8721);
    let o=(e,t)=>({
      type:t||i.Bp,
      data:e
    }),
    s=(e,t)=>async(n,i)=>{
      let s=JSON.parse(JSON.stringify(i().auth));
      s._formData={
        ...s._formData,
        ["step_".concat(t+1,"_data")]:e
      },
      await n(o(s))
    },
    a=(e,t)=>async(n,i)=>{
      let s=JSON.parse(JSON.stringify(i().auth));
      s[e]=t,
      await n(o(s))
    }
  },
  53624:function(e,t,n){
    "use strict";
    n.d(t,{
      l4:function(){
        return l
      },
      qQ:function(){
        return r
      },
      s7:function(){
        return a
      }
    }),
    n(36005);
    var i=n(32642),
    o=n(7855),
    s=n(62610);
    let a=e=>({
      type:i.Xq,
      data:e
    }),
    r=e=>async(t,n)=>{
      let i=n().appChecklistReducer;
      return o.Z.customScreenName(e).then(async e=>200===e.status?(t(a(e.data.data)),i.isAppScreenRenamed||(i.isAppScreenRenamed=!0,t((0,s.gY)(i))),e.data.data):400===e.status?e:null).catch(e=>e.response)
    },
    l=e=>async(t,n)=>{
      let i=e||n().currentAppReducer._id||n().urlReducer.appId;
      return await t(a({})),
      o.Z.getScreenEditedList(i).then(async e=>(t(a(e.data.data)),e.data.data)).catch(e=>e)
    }
  },
  8721:function(e,t,n){
    "use strict";
    var i=n(87066),
    o=n(94301),
    s=n.n(o);
    class a{
      static async getCsrfReturnPayload(e){
        let t=await s()("".concat("https://dashboardapi.uxcam.com","/auth/signup"),{
          credentials:"include"
        });
        return{
          payload:{
            email:e,
            _csrf:(t=await t.json()).data.csrf.token
          }
        }
      }
      static async checkEmailExistOrNot(e){
        return await s()("".concat("https://dashboardapi.uxcam.com","/auth/check-email"),{
          method:"POST",
          body:JSON.stringify(e),
          credentials:"include",
          headers:{
            Cookie:""
          }
        })
      }
      static async teamInvitationAccept(e){
        return await i.default.get("".concat("https://dashboardapi.uxcam.com","/team/invitation/accept/").concat(e),{
          withCredentials:!0
        })
      }
    }
    t.Z=a
  },
  59416:function(e,t,n){
    "use strict";
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:17,
      height:16,
      fill:"none",
      ...e,
      children:(0,i.jsxs)("g",{
        clipPath:"url(#close-banner_svg__a)",
        children:[(0,i.jsx)("path",{
          fill:"#A2A5AE",
          d:"M8.942 16a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
        }),(0,i.jsx)("path",{
          stroke:"#fff",
          strokeLinecap:"round",
          strokeLinejoin:"round",
          strokeWidth:2,
          d:"m5.657 4.715 6.57 6.57m0-6.57-6.57 6.57"
        })]
      })
    })
  },
  14896:function(e,t,n){
    "use strict";
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsx)("svg",{
      width:11,
      height:7,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"m1.674 5.952 4-4 4 4",
        stroke:"currentColor",
        strokeWidth:2,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    })
  },
  73880:function(e,t,n){
    "use strict";
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsx)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M5.5 12.5a.963.963 0 0 1-.706-.294.961.961 0 0 1-.294-.706V5H4V4h2.5v-.5h3V4H12v1h-.5v6.5c0 .275-.098.51-.294.707a.961.961 0 0 1-.706.293h-5Zm5-7.5h-5v6.5h5V5Zm-4 5.5h1V6h-1v4.5Zm2 0h1V6h-1v4.5Z",
        fill:"#DC4F44"
      })
    })
  },
  22911:function(e,t,n){
    "use strict";
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsx)("svg",{
      width:18,
      height:18,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M0 9a9 9 0 1 1 18 0A9 9 0 0 1 0 9Zm12.893-2.716a.833.833 0 0 0-1.12-1.235c-1.107 1.005-1.94 1.908-2.642 3.005-.511.798-.942 1.68-1.363 2.749l-1.503-1.55a.833.833 0 1 0-1.197 1.16l2.425 2.5a.833.833 0 0 0 1.385-.306c.56-1.61 1.058-2.72 1.657-3.654.595-.93 1.314-1.722 2.358-2.67Z",
        fill:"#32BF8A"
      })
    })
  },
  17642:function(e,t,n){
    "use strict";
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsx)("svg",{
      width:9,
      height:5,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"M8 1 4.5 4.5 1 1",
        stroke:"#5B6D89",
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    })
  },
  93193:function(e,t,n){
    "use strict";
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsxs)("svg",{
      width:17,
      height:17,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsxs)("g",{
        clipPath:"url(#icon-duplicate-small_svg__a)",
        children:[(0,i.jsx)("path",{
          d:"M12.815 5.405h-6.75a.667.667 0 0 0-.668.667v6.75c0 .369.299.667.667.667h6.751a.667.667 0 0 0 .667-.666V6.072a.667.667 0 0 0-.667-.667Z",
          fill:"#BED5FF"
        }),(0,i.jsx)("path",{
          d:"M10.585 3.377H3.833a.667.667 0 0 0-.666.666v6.751c0 .369.298.667.666.667h6.752a.667.667 0 0 0 .666-.667v-6.75a.667.667 0 0 0-.666-.667Z",
          fill:"#5D97FF"
        }),(0,i.jsx)("path",{
          d:"M7.554 5.345h-.691v4.147h.691V5.345Z",
          fill:"#fff"
        }),(0,i.jsx)("path",{
          d:"M9.283 7.073H5.135v.691h4.148v-.69Z",
          fill:"#fff"
        })]
      }),(0,i.jsx)("defs",{
        children:(0,i.jsx)("clipPath",{
          id:"icon-duplicate-small_svg__a",
          children:(0,i.jsx)("path",{
            fill:"#fff",
            transform:"translate(3.167 3.377)",
            d:"M0 0h10.316v10.113H0z"
          })
        })
      })]
    })
  },
  77435:function(e,t,n){
    "use strict";
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsxs)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:24,
      height:24,
      fill:"none",
      ...e,
      children:[(0,i.jsxs)("g",{
        clipPath:"url(#icon-duplicate_svg__a)",
        children:[(0,i.jsx)("path",{
          fill:"#BED5FF",
          d:"M18.473 7.042H8.346a1 1 0 0 0-1 1V18.17a1 1 0 0 0 1 1h10.127a1 1 0 0 0 1-1V8.042a1 1 0 0 0-1-1Z"
        }),(0,i.jsx)("path",{
          fill:"#5D97FF",
          d:"M15.127 4H5a1 1 0 0 0-1 1v10.127a1 1 0 0 0 1 1h10.127a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"
        }),(0,i.jsx)("path",{
          fill:"#fff",
          d:"M10.582 6.953H9.544v6.22h1.037v-6.22Z"
        }),(0,i.jsx)("path",{
          fill:"#fff",
          d:"M13.174 9.545h-6.22v1.037h6.22V9.545Z"
        })]
      }),(0,i.jsx)("defs",{
        children:(0,i.jsx)("clipPath",{
          id:"icon-duplicate_svg__a",
          children:(0,i.jsx)("path",{
            fill:"#fff",
            d:"M4 4h15.473v15.169H4z"
          })
        })
      })]
    })
  },
  87825:function(e,t,n){
    "use strict";
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsx)("svg",{
      width:19,
      height:19,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M.88 9.244a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm12.464 3.464a.804.804 0 0 1-1.136 0L9.881 10.38l-2.328 2.328a.804.804 0 0 1-1.136-1.137l2.327-2.327-2.327-2.328A.804.804 0 1 1 7.553 5.78l2.328 2.327 2.327-2.327a.804.804 0 0 1 1.136 1.136l-2.327 2.328 2.327 2.327a.804.804 0 0 1 0 1.137Z",
        fill:"#F4584C"
      })
    })
  },
  37088:function(e,t,n){
    "use strict";
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("path",{
        d:"M8 1a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1Zm0 12.813A5.813 5.813 0 0 1 8 2.187a5.813 5.813 0 0 1 0 11.626Z",
        fill:"#000"
      }),(0,i.jsx)("path",{
        d:"M7.25 5.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM8.375 7h-.75a.125.125 0 0 0-.125.125v4.25c0 .069.056.125.125.125h.75a.125.125 0 0 0 .125-.125v-4.25A.125.125 0 0 0 8.375 7Z",
        fill:"#000"
      })]
    })
  },
  50247:function(){}
}]);