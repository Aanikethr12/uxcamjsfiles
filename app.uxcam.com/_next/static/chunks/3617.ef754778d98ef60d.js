"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3617,4689],{
  33617:function(e,s,i){
    i.r(s);
    var n=i(85893),
    l=i(67294),
    d=i(87066),
    t=i(88767),
    o=i(19521),
    a=i(14416),
    r=i(47639),
    u=i(11163),
    c=i(44908),
    v=i.n(c),
    f=i(4078),
    m=i(24842),
    p=i(38565),
    g=i(68805),
    h=i(92046),
    x=i(5148),
    j=i(8545),
    b=i(34689),
    w=i(5257),
    I=i(82972),
    L=i(96880),
    M=i(79850),
    S=i(41371),
    y=i(95315),
    E=i(7906);
    let C=o.default.div.withConfig({
      componentId:"sc-ffcd7bb5-0"
    })(["display:flex;flex-direction:column;flex-grow:1;max-width:100%;background:#fff;border-radius:8px;"]),
    R=o.default.div.withConfig({
      componentId:"sc-ffcd7bb5-1"
    })(["padding:20px !important;border:1px solid rgba(37,56,88,0.2);border-radius:4px;width:315px;max-width:100%;text-align:left;"]),
    _=o.default.div.withConfig({
      componentId:"sc-ffcd7bb5-2"
    })(["&[aria-hidden='true']{display:none;}border-radius:0;display:flex;text-align:center;align-items:center;justify-content:center;flex-grow:1;"]),
    Z=(0,l.memo)(e=>{
      var s,
      i,
      o,
      c,
      j;
      let{
        sessionId:C,
        appId:Z,
        toggleFullScreen:F,
        userId:k,
        uploadedOn:T,
        multiScreenSkippedData:N,
        setDetailErrorMessage:D,
        userSessionRun:P
      }=e,
      {
        setSessionDetail:O,
        setSessionBugInfo:A,
        setNearestSession:q,
        sessionDetail:z,
        setSessionLogs:K
      }=(0,w.Lc)(),
      {
        selectedHeaderField:U
      }=(0,w.qI)(),
      {
        monthsOfVideosAccessible:V
      }=(0,S.I)(),
      B=(0,u.useRouter)(),
      H=k||(null==z?void 0:null===(s=z.userProperty)||void 0===s?void 0:s.uxcamuserid),
      {
        urlReducer:{
          parentType:Q,
          shareSessionKey:G
        },
        appFilter:{
          dateSegment:J
        },
        currentOrgReducer:{
          planLimit:W
        },
        screenTimelineReducer:{
          selectedScreens:X=[],
          screenList:Y
        }
      }=(0,a.v9)(e=>e),
      $=(0,l.useMemo)(()=>C===(null==z?void 0:z._id)?null==z?void 0:z.sessionNumber:"",[C,z]),
      ee=(0,l.useMemo)(()=>$||P,[P,$]),
      {
        data:es
      }=(0,y.hf)(["appSetting",Z],Z),
      ei=(0,E.ye)("new-screens-filter"),
      {
        data:{
          data:{
            data:en=[]
          }={}
        }={}
      }=(0,p.bB)({
        appid:Z,
        attribute:ei?"screen_name":"session_screen_list",
        date_range:J,
        dropdownLimit:501,
        filter:[],
        search:"",
        table:"session"
      },{
        enabled:!G
      }),
      el=(0,l.useMemo)(()=>{
        var e;
        return{
          data:{
            data:((null==z?void 0:null===(e=z.screenTimeline)||void 0===e?void 0:e.activities)||[]).reduce((e,s)=>{
              let{
                activityName:i,
                endTime:n,
                time:l
              }=s,
              d=n-l,
              t=e.find(e=>{
                let{
                  screenName:s
                }=e;
                return s===i
              });
              return t?t.duration+=d:e.push({
                screenName:i,
                duration:d
              }),
              e
            },[])
          }
        }
      },[z]),
      ed=(0,l.useMemo)(()=>{
        var e;
        return el?null===(e=el.data)||void 0===e?void 0:e.data.filter((e,s)=>"Launch"!==e.screenName||0!==s).sort((e,s)=>s.duration-e.duration):[]
      },[el]),
      et=(0,l.useMemo)(()=>ed.map(e=>e.screenName),[ed]),
      eo=(0,l.useMemo)(()=>({
        appid:Z,
        sessionid:C,
        uploadedon:T
      }),[Z,C,T]),
      ea=(0,l.useMemo)(()=>({
        appid:Z,
        sessionid:C,
        uploadedon:T
      }),[Z,C,T]),
      er=(0,l.useMemo)(()=>({
        appid:Z,
        sessionid:C,
        uxcamuserid:H,
        date_range:J,
        usersessionrun:ee
      }),[Z,C,H,J,ee]),
      eu=(0,l.useMemo)(()=>C,[C]),
      ec=(0,l.useMemo)(()=>"nextSession".concat(C),[C]),
      ev=(0,a.I0)(),
      {
        data:ef
      }=(0,t.useQuery)([eu],()=>d.default.post("".concat("https://pythonapi-prod.uxcam.com","/sessions/get-details"),eo,{
        withCredentials:!0,
        credentials:"include"
      }).then(e=>{
        let{
          data:{
            data:s
          }
        }=e;
        return s
      }).catch(e=>{
        var s,
        i;
        return O(null==e?void 0:null===(s=e.response)||void 0===s?void 0:s.data),
        null==e?void 0:null===(i=e.response)||void 0===i?void 0:i.data
      }),{
        cacheTime:1e4,
        suspense:!0
      }),
      {
        data:em,
        refetch:ep
      }=(0,m.oI)(ea),
      {
        data:eg,
        refetch:eh
      }=(0,m.I7)(ec,er),
      {
        data:ex,
        refetch:ej
      }=(0,m.LF)(ea),
      {
        refetch:eb
      }=(0,p.K2)({
        sessionid:C,
        appid:Z,
        uploadedon:T
      });
      (0,l.useEffect)(()=>{
        ep(),
        ej(),
        G||eb()
      },[C]),
      (0,l.useEffect)(()=>{
        if((null==en?void 0:en.length)&&(null==et?void 0:et.length)){
          let e=[];
          Y.length&&et.map(s=>{
            Y.includes(s)||(e=[...e,s])
          });
          let s=(null==Y?void 0:Y.length)?v()([...Y,...et]):v()([...en,...et]),
          i=X.length?v()([...X,...e]):s;
          ev((0,g.Pl)(s)),
          ev((0,g.Ko)(i))
        }
      },[en,et]),
      (0,l.useEffect)(()=>{
        H&&["sessionsList","eventsList"].includes(Q)&&ee&&eh()
      },[Q,eh,C,ee,H]),
      (0,l.useEffect)(()=>{
        if(em){
          var e;
          A(null==em?void 0:null===(e=em.data)||void 0===e?void 0:e.data)
        }
      },[em,A]),
      (0,l.useEffect)(()=>{
        if(ex){
          var e;
          K(null==ex?void 0:null===(e=ex.data)||void 0===e?void 0:e.data)
        }
      },[ex,K]);
      let ew=null==ef?void 0:ef._id;
      (0,l.useEffect)(()=>{
        ef&&O({
          ...ef,
          isAppLogEnabled:(null==es?void 0:es.recordAppLog)||!1
        })
      },[C,ef,O,es]),
      (0,l.useEffect)(()=>{
        if(eg){
          var e;
          q(null==eg?void 0:null===(e=eg.data)||void 0===e?void 0:e.data)
        }
      },[eg,q]),
      (0,l.useEffect)(()=>{
        "eventsList"===Q&&ev((0,r.hI)({
          action:"Played video from ".concat(h.ls[Q]," page")
        })),
        ev((0,r.hI)({
          action:"Viewed session from ".concat(h.ls[Q]," page")
        }))
      },[]),
      l.useEffect(()=>{
        var e;
        if(V&&(0,f.gO)(null==ef?void 0:null===(e=ef.time)||void 0===e?void 0:e.sessionUploadedDateTime,V)&&(null==W?void 0:W.videoRetentionTime)!==(null==W?void 0:W.videoPlaybackAccessibleTime)){
          let e=B.asPath.replace(B.query.sessionid,"");
          delete B.query.sessionid,
          B.push(B,e)
        }
      },[B,ef,V,W]),
      (0,l.useEffect)(()=>{
        var e;
        D(null==ef?void 0:null===(e=ef.error)||void 0===e?void 0:e.message)
      },[ef,D]);
      let eI=(0,l.useMemo)(()=>{
        var e;
        return null==z?void 0:null===(e=z.error)||void 0===e?void 0:e.message
      },[null==z?void 0:null===(i=z.error)||void 0===i?void 0:i.message]);
      return(0,n.jsxs)(n.Fragment,{
        children:[!(null==z?void 0:null===(o=z.error)||void 0===o?void 0:o.message)&&ew&&(0,n.jsx)(b.default,{
          session:ef
        }),"sessionVideo"===U?(0,n.jsxs)(n.Fragment,{
          children:[(0,n.jsx)(_,{
            "aria-hidden":!eI,
            children:(0,n.jsx)(R,{
              children:(0,n.jsx)("p",{
                dangerouslySetInnerHTML:{
                  __html:null==z?void 0:null===(c=z.error)||void 0===c?void 0:c.message
                }
              })
            })
          }),!(null==z?void 0:null===(j=z.error)||void 0===j?void 0:j.message)&&ew&&(0,n.jsx)(x.default,{
            appId:Z,
            session:ef,
            toggleFullScreen:F,
            multiScreenSkippedData:N
          },ew)]
        }):null,(null==U?void 0:U.includes("crash"))?(0,n.jsx)(I.Z,{}):null,(null==U?void 0:U.includes("exception"))?(0,n.jsx)(L.Z,{}):null,(null==U?void 0:U.includes("UIFreeze"))?(0,n.jsx)(M.Z,{}):null]
      })
    });
    s.default=(0,l.memo)(e=>{
      let{
        sessionId:s,
        appId:i,
        sessionList:d,
        userId:t,
        uploadedOn:o,
        toggleFullScreen:a,
        multiScreenSkippedData:r,
        setDetailErrorMessage:u
      }=e,
      c=(0,l.useMemo)(()=>{
        var e;
        return d&&(null===(e=d.body)||void 0===e?void 0:e.find(e=>{
          let{
            sessionid:i
          }=e;
          return i===s
        }))
      },[d,s]);
      return(0,n.jsx)(C,{
        children:(0,n.jsx)(j.Z,{
          sessionListItem:c,
          toggleFullScreen:a,
          appId:i,
          uploadedOn:o,
          children:(0,n.jsx)(Z,{
            toggleFullScreen:a,
            sessionId:s,
            appId:i,
            userId:t,
            uploadedOn:o,
            multiScreenSkippedData:r,
            setDetailErrorMessage:u,
            userSessionRun:null==c?void 0:c.userSessionRun
          })
        })
      })
    })
  },
  34689:function(e,s,i){
    i.r(s);
    var n=i(85893),
    l=i(67294),
    d=i(14416),
    t=i(76633),
    o=i(28166),
    a=i(5257),
    r=i(85823),
    u=i(9257),
    c=i(72617),
    v=i(10125);
    s.default=(0,l.memo)(e=>{
      let{
        session:s
      }=e,
      {
        appFilter:i,
        urlReducer:f
      }=(0,d.v9)(e=>e),
      {
        parentType:m,
        appId:p
      }=f,
      g=(0,l.useMemo)(()=>{
        var e,
        s,
        n;
        return"issues"===m?(null===(s=i.issue)||void 0===s?void 0:s.segment)||[]:"eventsList"===m?(null===(n=i.event)||void 0===n?void 0:n.segment)||[]:(null===(e=i.session)||void 0===e?void 0:e.segment)||[]
      },[i,m]),
      {
        megaFilterCustomLabels:h
      }=(0,o.ZP)(),
      x=(0,l.useMemo)(()=>h.map(e=>e.name),[h]),
      {
        sessionDetail:j,
        sessionBugInfo:b
      }=(0,a.Lc)(),
      [w,I]=(0,l.useState)([]),
      [L,M]=(0,l.useState)(!1),
      S=(0,l.useMemo)(()=>(0,t.MG)(s,m),[s,m]),
      y=null==S?void 0:S.customLabel,
      E=(null==j?void 0:j.isCrashedLog)||!1,
      C=(0,l.useMemo)(()=>(0,t.Iw)(j)||[],[j]);
      return(0,l.useEffect)(()=>{
        ["sessionsList","eventsList","aiSessionsList"].includes(m)?I((null==y?void 0:y.filter(e=>x.indexOf(e)>=0))||[]):I(y||[])
      },[y,h,m,x]),
      (0,n.jsxs)(n.Fragment,{
        children:[(0,n.jsxs)(u.h4,{
          children:[(0,n.jsxs)(u.Km,{
            "data-intercom-target":"Session User Id",
            className:"labels-nav",
            children:[(0,n.jsx)(r.Z,{
              className:"user-icon"
            }),(0,n.jsx)(v.jg,{
              sessionDetails:S,
              appId:p,
              urlQuery:f,
              parentType:m
            })]
          }),(0,n.jsx)(v.cM,{
            sessionDetails:S,
            pageSegment:g
          }),(0,n.jsx)(v.dA,{
            sessionDetails:S,
            pageSegment:g,
            parentType:m
          }),(0,n.jsx)(v.fz,{
            labelSession:w,
            showCustomLabel:L,
            setShowCustomLabel:M
          }),(0,n.jsx)(v.mz,{
            isCrashLog:E,
            totalBugs:b||[],
            anrMenu:C
          })]
        }),L&&(0,n.jsx)(c.Z,{
          setShowCustomLabel:M
        })]
      })
    })
  },
  8545:function(e,s,i){
    var n=i(85893),
    l=i(67294),
    d=i(19521),
    t=i(14416),
    o=i(74569),
    a=i(5257),
    r=i(34689);
    let u=d.default.div.withConfig({
      componentId:"sc-e20645ff-0"
    })(["display:flex;flex-direction:column;flex-grow:1;"]),
    c=d.default.div.withConfig({
      componentId:"sc-e20645ff-1"
    })(["flex-grow:1;position:relative;"]);
    s.Z=l.memo(e=>{
      let{
        sessionListItem:s,
        children:i
      }=e,
      d=l.useRef(),
      {
        getScreenLayoutData:v
      }=(0,a.Rb)(),
      {
        urlReducer:{
          parentType:f
        }
      }=(0,t.v9)(e=>e),
      m=l.useMemo(()=>s?(0,n.jsxs)(u,{
        children:[!v(f).isHeaderV2&&(0,n.jsx)(r.default,{
          session:s
        }),(0,n.jsx)(c,{
          children:(0,n.jsx)("div",{})
        }),(0,n.jsx)(o.Z,{
          screens:[],
          videoRef:d
        })]
      }):null,[s,v,f]);
      return(0,n.jsx)(l.Suspense,{
        fallback:m,
        children:i
      })
    })
  },
  85823:function(e,s,i){
    var n=i(85893);
    i(67294),
    s.Z=e=>(0,n.jsx)("svg",{
      width:25,
      height:25,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,n.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M12.987 5.379a3.257 3.257 0 1 0 0 6.513 3.257 3.257 0 0 0 0-6.513Zm0 7.207a9.394 9.394 0 0 0-5.234 1.584c-.378.252-.629.585-.737.96-.109.372-.068.754.08 1.09.296.668 1.015 1.159 1.905 1.159h7.972c.89 0 1.609-.49 1.904-1.16.149-.335.19-.717.081-1.089-.108-.375-.359-.708-.737-.96a9.394 9.394 0 0 0-5.234-1.584Z",
        fill:"#737886"
      })
    })
  }
}]);