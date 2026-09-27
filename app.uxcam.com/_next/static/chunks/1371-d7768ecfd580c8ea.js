"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1371],{
  82761:function(e,t,s){
    s.d(t,{
      p:function(){
        return i
      }
    });
    class a{
      generateKey(e){
        var t;
        let s=e=>{
          if(!e)return null;
          let t=new Date(e);
          return t.setMinutes(0,0,0),
          t.toISOString()
        },
        a=(null===(t=e.date_range)||void 0===t?void 0:t.value)?{
          lower:s(e.date_range.value.lower),
          upper:s(e.date_range.value.upper)
        }:null,
        i=e.date_range?{
          operator:e.date_range.operator,
          labelId:e.date_range.labelId,
          value:a
        }:null;
        return JSON.stringify({
          appid:e.appid,
          date_range:i,
          filters:e.filters,
          orderBy:e.orderBy
        })
      }
      get(e){
        let t=this.generateKey(e),
        s=this.cache.get(t);
        if(!s)return null;
        let a=Date.now()-s.timestamp;
        return a>(s.duration<2e3?12e4:18e5)?(this.cache.delete(t),null):{
          data:s.data,
          timestamp:s.timestamp,
          age:a
        }
      }
      set(e,t,s){
        let a=this.generateKey(e);
        this.cache.set(a,{
          data:t,
          timestamp:Date.now(),
          duration:s
        }),
        this.pendingRequests.delete(a)
      }
      async getOrFetch(e,t){
        let s=this.generateKey(e),
        a=this.get(e);
        if(a)return{
          data:a.data,
          fromCache:!0,
          timestamp:a.timestamp
        };
        if(this.pendingRequests.has(s))return this.pendingRequests.get(s);
        let i=(async()=>{
          try{
            let{
              data:s,
              duration:a
            }=await t();
            return this.set(e,s,a),
            {
              data:s,
              fromCache:!1,
              timestamp:Date.now()
            }
          }
          catch(e){
            throw this.pendingRequests.delete(s),
            e
          }
        })();
        return this.pendingRequests.set(s,i),
        i
      }
      clear(e){
        if(!e){
          this.cache.clear();
          return
        }
        let t=[];
        this.cache.forEach((s,a)=>{
          try{
            JSON.parse(a).appid===e&&t.push(a)
          }
          catch(e){}
        }),
        t.forEach(e=>this.cache.delete(e))
      }
      invalidate(e){
        let t=this.generateKey(e);
        this.cache.delete(t)
      }
      getAll(){
        return Array.from(this.cache.entries()).map(e=>{
          let[t,s]=e;
          return{
            key:JSON.parse(t),
            ...s,
            age:Date.now()-s.timestamp
          }
        })
      }
      constructor(){
        this.cache=new Map,
        this.pendingRequests=new Map
      }
    }
    let i=new a
  },
  41371:function(e,t,s){
    s.d(t,{
      I:function(){
        return p
      },
      m:function(){
        return b
      }
    });
    var a=s(85893),
    i=s(67294),
    r=s(14416),
    n=s(68628),
    o=s(52128),
    u=s(67401),
    l=s(18446),
    c=s.n(l);
    let d=(0,i.createContext)(null),
    f=["All","UX issues"],
    b=e=>{
      let{
        children:t
      }=e,
      [s,l]=(0,i.useState)(!1),
      [b,p]=(0,i.useState)(!1),
      [h,_]=(0,i.useState)(!1),
      [v,g]=(0,i.useState)(!1),
      {
        segmentType:y,
        pageType:m
      }=(0,n.Z)(),
      {
        noCodeEventsFeatureFlag:w
      }=(0,u.Z)(),
      {
        urlReducer:{
          parentType:S
        },
        appFilter:k,
        currentOrgReducer:T,
        organizationReducer:C,
        currentAppReducer:{
          isAIEnabled:U,
          _id:I
        }
      }=(0,r.v9)(e=>e),
      D=(0,i.useMemo)(()=>{
        var e,
        t;
        return(null==T?void 0:null===(e=T.planFeature)||void 0===e?void 0:e.allowAdvancedFilters)===void 0||!!(null==T?void 0:null===(t=T.planFeature)||void 0===t?void 0:t.allowAdvancedFilters)
      },[T]),
      M=(0,i.useMemo)(()=>{
        var e;
        return null==T?void 0:null===(e=T.planFeature)||void 0===e?void 0:e.eventAnalysis
      },[T]),
      O=(0,i.useMemo)(()=>{
        var e;
        return null==T?void 0:null===(e=T.planFeature)||void 0===e?void 0:e.screenAnalysis
      },[T]),
      P=(0,i.useMemo)(()=>{
        var e;
        return null==T?void 0:null===(e=T.planFeature)||void 0===e?void 0:e.screenFlow
      },[T]),
      L=(0,i.useMemo)(()=>{
        var e;
        return null==T?void 0:null===(e=T.planFeature)||void 0===e?void 0:e.funnelFeature
      },[T]),
      A=(0,i.useMemo)(()=>{
        var e;
        return null==T?void 0:null===(e=T.planFeature)||void 0===e?void 0:e.issueAnalytics
      },[T]),
      F=(0,i.useMemo)(()=>{
        var e;
        return null==T?void 0:null===(e=T.planFeature)||void 0===e?void 0:e.tara
      },[T]),
      x=(0,i.useMemo)(()=>{
        var e;
        let t=null==T?void 0:null===(e=T.planFeature)||void 0===e?void 0:e.retentionAnalytics;
        return void 0!==t&&!!t
      },[T]),
      q=(0,i.useMemo)(()=>{
        var e;
        let t=null==T?void 0:null===(e=T.planFeature)||void 0===e?void 0:e.alerts;
        return void 0!==t&&!!t
      },[T]),
      N=(0,i.useMemo)(()=>!!(F&&U),[F,U]),
      E=(0,i.useMemo)(()=>(null==T?void 0:T.planType)==="trial",[T]),
      R=(0,i.useMemo)(()=>!M&&["statistics","eventsList"].includes(S),[S,M]),
      z=(0,i.useMemo)(()=>!O&&["heatmapsList"].includes(S),[S,O]),
      V=(0,i.useMemo)(()=>!P&&["screenFlow","screenBurst"].includes(S),[S,P]),
      X=(0,i.useMemo)(()=>!L&&["funnels"].includes(S),[S,L]),
      j=(0,i.useMemo)(()=>!A&&["issues"].includes(S),[S,A]),
      B=R||z||V||X||j,
      Z=(0,i.useMemo)(()=>{
        var e;
        return(null==C?void 0:C.length)&&(null===(e=C.find(e=>e._id===T.orgId))||void 0===e?void 0:e.selfServeCheckout)
      },[T,C]),
      J=(0,i.useMemo)(()=>(null==T?void 0:T.planType)==="free",[T]),
      Q=(0,i.useMemo)(()=>{
        var e;
        return null==T?void 0:null===(e=T.planLimit)||void 0===e?void 0:e.videoPlaybackAccessibleTime
      },[T]),
      G=k[y],
      H=(0,i.useMemo)(()=>w?o.NY:o.zw,[w]),
      K=(0,i.useMemo)(()=>H[m],[m,H]),
      W=i.useMemo(()=>f.filter(e=>"All"!==e),[]),
      Y=Object.keys(K||{}).reduce((e,t)=>(W.includes(t)&&(e[t]=K[t]),e),{}),
      $=i.useMemo(()=>Object.values(Y).flatMap(e=>e),[Y]),
      ee=i.useMemo(()=>$.map(e=>e.attribute),[$]),
      et=$.flatMap(e=>e.default).filter(e=>e),
      es=i.useMemo(()=>null==G?void 0:G.segment.some(e=>{
        let{
          attribute:t
        }=e;
        return"event_name"===t?!et.some(t=>c()(t,e)):!ee.includes(t)
      }),[G,ee,et]),
      ea=(0,i.useMemo)(()=>({
        allowedCategoriesInFreePlan:f,
        filterOptionsWithoutNotAllowedCategories:Y,
        notAllowedFiltersApplied:es,
        filtersLockedModal:s,
        setFiltersLockedModal:l,
        sessionLockedModal:b,
        setSessionLockedModal:p,
        selfServeFlag:Z,
        freePlanFlag:J,
        trialFlag:E,
        monthsOfVideosAccessible:Q,
        showPricingModal:h,
        setShowPricingModal:_,
        triggerRequestQuote:v,
        setTriggerRequestQuote:g,
        pageIsLocked:B,
        showEventsPageLockScreen:R,
        showScreensPageLockScreen:z,
        showAppFlowsPageLockScreen:V,
        showFunnelsPageLockScreen:X,
        showIssuesPageLockScreen:j,
        advancedFiltersAllowed:D,
        eventsFeatureAllowed:M,
        screensFeatureAllowed:O,
        appFlowsFeatureAllowed:P,
        funnelsFeatureAllowed:L,
        issuesFeatureAllowed:A,
        retentionFeatureAllowed:x,
        alertsFeatureAllowed:q,
        aiSessionFeatureAllowed:N,
        planFeatureAiSessions:F
      }),[Y,q,es,s,b,Z,J,E,Q,h,v,B,R,z,V,X,j,D,M,O,P,L,A,x,N,F]);
      return(0,a.jsx)(d.Provider,{
        value:ea,
        children:t
      })
    },
    p=()=>(0,i.useContext)(d)
  },
  70542:function(e,t,s){
    s.d(t,{
      B:function(){
        return o
      },
      v:function(){
        return n
      }
    });
    var a=s(85893),
    i=s(67294);
    let r=(0,i.createContext)({
      screensImageLoader:null,
      setScreensImageLoader:()=>null
    }),
    n=e=>{
      let{
        children:t
      }=e,
      [s,n]=(0,i.useState)(!1),
      o=(0,i.useMemo)(()=>({
        screensImageLoader:s,
        setScreensImageLoader:n
      }),[s,n]);
      return(0,a.jsx)(r.Provider,{
        value:o,
        children:t
      })
    },
    o=()=>(0,i.useContext)(r)
  },
  54763:function(e,t,s){
    var a=s(87066),
    i=s(98777);
    let{
      CancelToken:r
    }=a.default;
    class n{
      static async heatmapGestures(e){
        let t=null,
        s=0;
        s++,
        t&&await t(s);
        let a=await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com","/screens/heatmap"),
          data:e,
          withCredentials:!0,
          cancelToken:new r(e=>{
            t=e,
            s=0
          })
        });
        return t=null,
        a
      }
      static async heatmapGesturesTrino(e){
        let t=null,
        s=0;
        s++,
        t&&await t(s);
        let a=await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com/v2","/screens/trino/heatmap"),
          data:e,
          withCredentials:!0,
          cancelToken:new r(e=>{
            t=e,
            s=0
          })
        });
        return t=null,
        a.data
      }
      static async heatmapScreenshots(e){
        let t=null,
        s=0;
        s++,
        t&&await t(s);
        let a=await i.be.post("".concat("https://pythonapi-prod.uxcam.com/v2","/screens/heatmap/images"),e,{
          withCredentials:!0,
          cancelToken:new r(e=>{
            t=e,
            s=0
          })
        });
        return t=null,
        a.data
      }
      static async getScreenStats(e){
        return(0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com/v2","/screens/trino/screen_stats"),
          data:e,
          withCredentials:!0
        })
      }
      static async getHeatmapGesturesTypes(e){
        return(0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com/v2","/screens/trino/screen_gesture_types"),
          data:e,
          withCredentials:!0
        })
      }
      static async getScreenList(e){
        let t=await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com/v2","/screens/trino/screen_list"),
          data:e,
          withCredentials:!0
        });
        return null==t?void 0:t.data
      }
      static async getWebScreenList(e){
        let t=await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com/v2","/screens/trino/web/screen_list"),
          data:e,
          withCredentials:!0
        });
        return null==t?void 0:t.data
      }
      static async getScreenDeviceClass(e){
        let t=await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com/v2","/screens/screen_device_class"),
          data:e,
          withCredentials:!0
        });
        return null==t?void 0:t.data
      }
      static async getScreenVisitList(e){
        var t;
        let s=await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com/v2","/screens/screen_visit_list"),
          data:e,
          withCredentials:!0
        });
        return null==s?void 0:null===(t=s.data)||void 0===t?void 0:t.data
      }
      static async getDeviceClass(e){
        var t;
        let s=await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com/v2","/screens/top_device_class"),
          data:e,
          withCredentials:!0
        });
        return null==s?void 0:null===(t=s.data)||void 0===t?void 0:t.data
      }
      static async getScreenImages(e){
        return await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com/v2","/screens/images"),
          data:e,
          withCredentials:!0
        })
      }
      static async areaSpecificHeatmapGestures(e){
        let t=null,
        s=0;
        s++,
        t&&await t(s);
        let a=await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com/v2","/screens/heatmap/area-tooltip"),
          data:e,
          withCredentials:!0,
          cancelToken:new r(e=>{
            t=e,
            s=0
          })
        });
        return t=null,
        a.data
      }
      static async fetchHeatmapBox(e){
        let t=await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com/v2","/screens/screen_stat_box"),
          data:e,
          withCredentials:!0
        });
        return null==t?void 0:t.data
      }
      static async fetchHeatmapGraph(e){
        let t=null,
        s=0;
        s++,
        t&&await t(s);
        let a=await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com/v2","/screens/screen_stat_graph"),
          data:e,
          withCredentials:!0,
          cancelToken:new r(e=>{
            t=e,
            s=0
          })
        });
        return t=null,
        a
      }
    }
    t.Z=n
  },
  54882:function(e,t,s){
    s.d(t,{
      K9:function(){
        return f
      },
      LO:function(){
        return p
      },
      Ob:function(){
        return u
      },
      SN:function(){
        return i
      },
      Xk:function(){
        return l
      },
      aI:function(){
        return r
      },
      cB:function(){
        return o
      },
      e3:function(){
        return c
      },
      ev:function(){
        return n
      },
      fM:function(){
        return d
      },
      u$:function(){
        return a
      },
      wg:function(){
        return b
      }
    });
    let a={
      "Single Tap":0,
      "Double Tap":1,
      "Swipe Up":2,
      "Swipe Down":3,
      "Swipe Left":4,
      "Swipe Right":5,
      "Long Press":6,
      "Zoom In":7,
      "Zoom Out":8,
      Trail:11
    },
    i={
      0:"Single Tap",
      1:"Double Tap",
      2:"Swipe Up",
      3:"Swipe Down",
      4:"Swipe Left",
      5:"Swipe Right",
      6:"Long Press",
      7:"Zoom In",
      8:"Zoom Out",
      11:"Trail"
    },
    r={
      1:"Button",
      2:"EditText/TextField",
      3:"CompoundButton",
      4:"Slider",
      5:"ViewGroup",
      6:"ScrollView",
      7:"TextView",
      8:"TableView",
      9:"Stepper",
      10:"DatePicker",
      11:"TimePicker",
      12:"ImageView",
      13:"Menu",
      14:"Picker",
      15:"Keyboard",
      16:"Alert",
      17:"SearchBar",
      18:"PageControls",
      19:"UnknownComposable"
    },
    n=Object.entries(r).reduce((e,t)=>{
      let[s,a]=t;
      return e[a]=parseInt(s,10),
      e
    },{}),
    o=[{
      name:"Single Tap",
      category:"Taps"
    },{
      name:"Double Tap",
      category:"Taps"
    },{
      name:"Long Press",
      category:"Taps"
    },{
      name:"Swipe Up",
      category:"Swipes"
    },{
      name:"Swipe Down",
      category:"Swipes"
    },{
      name:"Swipe Left",
      category:"Swipes"
    },{
      name:"Swipe Right",
      category:"Swipes"
    },{
      name:"Trail",
      category:"Swipes"
    },{
      name:"Zoom In",
      category:"Zoom"
    },{
      name:"Zoom Out",
      category:"Zoom"
    }],
    u={
      avgTimeOnScreen:"loading...",
      userCount:"loading...",
      count:"loading...",
      uiFreezeRate:"loading...",
      rageTapRate:"loading...",
      exitRate:"loading...",
      avgGestureCount:"loading...",
      crashPercentage:"loading..."
    },
    l=[{
      label:"Rage taps",
      value:"is_rage"
    },{
      label:"First gesture on screen",
      value:"is_first_gesture"
    },{
      label:"First gesture in session",
      value:"is_first_screen"
    },{
      label:"Last gesture on screen",
      value:"is_last_gesture"
    },{
      label:"Last gesture in session",
      value:"is_last_screen"
    },{
      label:"Unresponsive gestures",
      value:"is_responsive"
    }],
    c={
      Taps:["Single Tap","Double Tap","Long Press"],
      Swipes:["Swipe Up","Swipe Down","Swipe Left","Swipe Right","Trail"],
      Zoom:["Zoom In","Zoom Out"]
    },
    d=Object.keys(a),
    f={
      screenDuration:"screen_duration",
      previousScreenName:"previous_screen_name",
      nextScreenName:"next_screen_name",
      sessionUploadedDateTime:"screen_uploadedon",
      city:"city",
      usersessionrun:"usersessionrun",
      rageTapCount:"rage_tap_count",
      screenGestureCount:"screen_gesture_count",
      totalscreen:"screen_number"
    },
    b={
      visitCount:"count",
      quitCount:"quit_count",
      openCount:"open_count",
      screenname:"screen_name",
      gestureCount:"gesture_count",
      visitorCount:"visitor_count",
      ragePercentage:"rage_percentage",
      openPercentage:"open_percentage",
      quitPercentage:"quit_percentage",
      rageGestureCount:"rage_gesture_count",
      zoomInPercentage:"zoom_in_percentage",
      zoomOutPercentage:"zoom_out_percentage",
      swipeUpPercentage:"swipe_up_percentage",
      swipeDownPercentage:"swipe_down_percentage",
      swipeLeftPercentage:"swipe_left_percentage",
      singleTapPercentage:"single_tap_percentage",
      doupleTapPercentage:"douple_tap_percentage",
      longPressPercentage:"long_press_percentage",
      swipeRightPercentage:"swipe_right_percentage",
      screenFirstVisitedOn:"screen_first_visited_on",
      screenLastVisitedOn:"screen_last_visited_on",
      avgScreenTimePerUser:"avg_screen_time_per_user",
      avgVisitCountPerUser:"avg_visit_count_per_user",
      avgScreenTimePerVisit:"avg_screen_time_per_visit",
      averageGesturesPerVisit:"average_gestures_per_visit",
      crashCount:"crash_count",
      uiFreezeCount:"ui_freeze_count",
      crashPercentage:"crash_percentage",
      uiFreezePercentage:"ui_freeze_percentage",
      visitPercentage:"visit_percentage",
      visitorPercentage:"visitor_percentage",
      bouncePercentage:"bounce_percentage",
      deadClickPercentage:"dead_click_percentage",
      pageRefreshPercentage:"page_refresh_percentage",
      medianScreenDuration:"median_screen_duration"
    },
    p="heatmapsList"
  },
  43399:function(e,t,s){
    s.d(t,{
      DE:function(){
        return I
      },
      Pw:function(){
        return U
      },
      Zp:function(){
        return O
      },
      gB:function(){
        return m
      },
      hz:function(){
        return C
      },
      k:function(){
        return g
      },
      lA:function(){
        return v
      },
      mT:function(){
        return P
      },
      mg:function(){
        return w
      },
      mr:function(){
        return y
      },
      rO:function(){
        return k
      },
      rc:function(){
        return M
      },
      uq:function(){
        return S
      },
      zc:function(){
        return T
      }
    });
    var a=s(67294),
    i=s(88767),
    r=s(71093),
    n=s(18879),
    o=s(91966),
    u=s.n(o),
    l=s(55931),
    c=s(82761),
    d=s(70542),
    f=s(54882),
    b=s(54763);
    let p=["device_class","app_version","device_platform","device_os_version"],
    h=async e=>{
      let{
        postBody:t
      }=e,
      s=Date.now(),
      a=await b.Z.getScreenList(t),
      i=Date.now()-s;
      return{
        data:null==a?void 0:a.data,
        pagination:null==a?void 0:a.pagination,
        orderBy:null==a?void 0:a.orderBy,
        duration:i
      }
    },
    _=async e=>{
      let{
        postBody:t
      }=e;
      return b.Z.getWebScreenList(t)
    },
    v=function(e){
      let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"web-screen-table-list",
      s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],
      r=(0,a.useMemo)(()=>[t,e],[t,e]);
      return(0,i.useQuery)(r,()=>_({
        postBody:e
      }),{
        refetchInterval:n.Ul,
        retry:!1,
        refetchOnWindowFocus:!1,
        refetchOnmount:!1,
        refetchOnReconnect:!1,
        enabled:s&&!!e.appid,
        keepPreviousData:!0
      })
    },
    g=function(e){
      let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"screen-table-list",
      s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],
      r=(0,a.useMemo)(()=>[t,e],[t,e]),
      [n,o]=(0,a.useState)(null),
      u=(null==e?void 0:e.page)&&e.page>50,
      l=(0,i.useQuery)(r,async()=>{
        if(u)return h({
          postBody:e
        });
        let t=await c.p.getOrFetch(e,()=>h({
          postBody:e
        }));
        return o(t.timestamp),
        t.data
      },{
        staleTime:u?0:1/0,
        cacheTime:u?3e5:1/0,
        refetchInterval:!1,
        retry:!1,
        refetchOnWindowFocus:!1,
        refetchOnmount:!1,
        refetchOnReconnect:!1,
        enabled:!s&&!!e.appid
      });
      (0,a.useEffect)(()=>{
        if(l.data&&!n&&!u){
          let t=c.p.get(e);
          t&&o(t.timestamp)
        }
      },[l.data,n,e,u]);
      let d=(0,a.useCallback)(async()=>(c.p.invalidate(e),l.refetch()),[e,l]),
      f=l.data,
      b=Array.isArray(f),
      p=b?f:null==f?void 0:f.data,
      _=b?null:null==f?void 0:f.pagination;
      return{
        ...l,
        data:p,
        pagination:_,
        lastUpdate:n,
        refresh:d
      }
    },
    y=(e,t)=>(0,i.useQuery)([t,e],()=>b.Z.getScreenStats(e),{
      enabled:!e.screenname,
      retry:!1,
      placeholderData:{
        data:{
          ...f.Ob
        }
      }
    }),
    m=e=>(0,i.useQuery)(["heatmap-gestures-types",e],()=>b.Z.getHeatmapGesturesTypes(e),{
      enabled:!e.screenname,
      retry:!1,
      placeholderData:{
        data:[...f.cB]
      }
    }),
    w=e=>(0,i.useQuery)(["heatmaps-images",e],()=>b.Z.heatmapScreenshots(e),{
      retry:!1,
      cacheTime:0
    }),
    S=(e,t)=>(0,i.useQuery)(["heatmaps-gestures",e],()=>b.Z.heatmapGesturesTrino(e),{
      retry:!1,
      enabled:t,
      cacheTime:0
    }),
    k=e=>(0,i.useQuery)(["area-specific-heatmaps-gestures - ".concat(e)],()=>b.Z.areaSpecificHeatmapGestures(e),{
      retry:!1,
      cacheTime:0,
      enabled:!1
    }),
    T=(e,t)=>(0,i.useQuery)(["heatmaps-screens-device-class",e],()=>b.Z.getScreenDeviceClass(e),{
      retry:!1,
      onSuccess:t
    }),
    C=(e,t)=>(0,i.useQuery)(["search-attribute-".concat(e.attribute),e],()=>r.Z.getPropertiesWithCancelToken(e),{
      retry:!1,
      cacheTime:0,
      onSuccess:t,
      enabled:!!e.appid
    }),
    U=e=>(0,i.useQuery)(["heatmaps-screen-visits",e],()=>b.Z.getScreenVisitList(e),{
      retry:!1,
      keepPreviousData:!0
    }),
    I=e=>(0,i.useQuery)(["app-device-class",e],()=>b.Z.getDeviceClass(e),{
      retry:!1,
      enabled:!!e.appid
    }),
    D=(e,t,s,a,r)=>{
      let n=(0,l.e)("web");
      return(0,i.useQuery)(["screen-images",e,t,s],()=>b.Z.getScreenImages(e),{
        retry:!1,
        enabled:!n&&(r||!!e.screen_names.length),
        onSuccess:a
      })
    },
    M=(e,t,s,a)=>{
      let r=(0,l.e)("web");
      return(0,i.useQuery)(["screen-flow-images",e.appid],()=>b.Z.getScreenImages(e),{
        retry:!1,
        enabled:!r&&(a||!!e.screen_names.length)
      })
    },
    O=e=>{
      var t;
      let{
        appid:s,
        screen_names:r
      }=e,
      n=["screen-flow-images",s],
      o=(0,i.useQueryClient)(),
      l=(0,a.useMemo)(()=>o.getQueryData(n),[n]),
      c=null==l?void 0:null===(t=l.data)||void 0===t?void 0:t.map(e=>e.screenName),
      d=u()(r,c);
      M(e,0,"",r&&r.length>0&&!l);
      let{
        data:f
      }=D({
        ...e,
        screen_names:d
      },0,"",null,c&&c.length>0&&d.length>0);
      if(c&&c.length>0&&d.length>0&&f){
        let e=[...null==l?void 0:l.data,...null==f?void 0:f.data];
        return o.setQueryData(n,{
          data:e
        }),
        {
          data:e
        }
      }
      return{
        data:l||[]
      }
    },
    P=e=>{
      let{
        screenNames:t=[],
        paginationLimit:s,
        screensListReqBody:r,
        screenSearchText:n
      }=e,
      {
        setScreensImageLoader:o
      }=(0,d.B)(),
      u=(0,i.useQueryClient)(),
      l=["screen-table-list",r],
      {
        appid:c,
        date_range:f,
        filters:b
      }=r,
      h=(0,a.useMemo)(()=>(null==b?void 0:b.length)>0&&(null==b?void 0:b.filter(e=>p.includes(e.attribute))),[b]),
      {
        isLoading:_
      }=D((0,a.useMemo)(()=>({
        appid:c,
        screen_names:t,
        date_range:f,
        filters:h||[]
      }),[c,t,f,h]),s+1,n,e=>{
        u.setQueryData(l,t=>{
          let s=Array.isArray(t),
          a=s?t:null==t?void 0:t.data;
          if(!a)return t;
          let i=a.map(t=>{
            let s=e.data.findIndex(e=>{
              let{
                screenName:s
              }=e;
              return s===t.screenname
            });
            if(s>-1){
              let{
                screenShotImageUrl:a
              }=e.data[s];
              return{
                ...t,
                screenShotImageUrl:a
              }
            }
            return t
          });
          return s?i:{
            ...t,
            data:i
          }
        })
      });
      o(_)
    }
  },
  52128:function(e,t,s){
    s.d(t,{
      p5:function(){
        return M
      },
      qm:function(){
        return z
      },
      ZK:function(){
        return V
      },
      zw:function(){
        return x
      },
      NY:function(){
        return q
      },
      $7:function(){
        return c
      },
      Jp:function(){
        return d
      },
      Hp:function(){
        return O
      },
      FZ:function(){
        return E
      },
      wC:function(){
        return R
      }
    });
    var a=s(63105),
    i=s.n(a),
    r=JSON.parse('[{"attribute":"browser_name","title":"Browser","type":"string","isSearchable":true,"info":"Name of the browser.","features":["websdk"]},{"attribute":"browser_version","title":"Browser version","type":"string","isSearchable":true,"info":"Version of the browser.","features":["websdk"]},{"attribute":"device_os_name","title":"OS","type":"string","isSearchable":true,"info":"Operating system of the device.","features":["websdk"]},{"attribute":"device_type","title":"Device type","type":"string","isSearchable":true,"info":"Type of the device.","features":["websdk"]},{"attribute":"device_os_version","title":"OS version","type":"string","isSearchable":true,"info":"Version of the device\'s operating system.","features":["default","websdk"]},{"attribute":"app_version","title":"App version","type":"string","isSearchable":true,"info":"App version on device.","features":["default"]},{"attribute":"device_platform","title":"Platform","type":"device_platform","isSearchable":false,"info":"Device platform, either Android or iOS","features":["default"]},{"attribute":"device_class","title":"Device class","type":"string","isSearchable":true,"info":"Class of the device given by the device size.","features":["default"]},{"attribute":"device_model","title":"Device name","type":"string","isSearchable":true,"info":"Production name of the device type.","features":["default"]},{"attribute":"device_id","title":"Install ID","type":"string","isSearchable":true,"info":"Unique identifier for a given device.","webInfo":"Unique identifier specific to the user\'s browser.","features":["default","websdk"]},{"attribute":"device_language","title":"Device language","type":"string","isSearchable":true,"info":"Language of the device as set by the user.","features":["default","websdk"]},{"attribute":"device_manufacturer","title":"Device manufacturer","type":"string","isSearchable":true,"info":"Name of the device manufacturer.","features":["default"]},{"attribute":"sdk_version","title":"SDK version","type":"string","isSearchable":true,"info":"UXCam SDK version.","features":["default","websdk"]},{"attribute":"device_width","title":"Display width","type":"float","isSearchable":false,"info":"Width of the display in pixels.","features":["default","websdk"]},{"attribute":"device_height","title":"Display height","type":"float","isSearchable":false,"info":"Height of the display in pixels.","features":["default","websdk"]}]'),
    n=JSON.parse('[{"attribute":"session_id","title":"Session Id","type":"string","isSearchable":true,"info":"Filter by set session id.","features":["default","websdk"]},{"attribute":"session_has_video","title":"Video recorded","type":"bool","isSearchable":false,"info":"A recording of the session is available.","table":"session","features":["default"]},{"attribute":"environment","title":"Environment","type":"string","isSearchable":true,"info":"Build type based on the stage of the app release life cycle.","table":"session","features":["default"]},{"attribute":"session_number_of_user","title":"User session count","type":"integer","isSearchable":false,"info":"Number of sessions of this user when the session happened.","table":"session","features":["default","websdk"]},{"attribute":"session_gesture_count","title":"Gesture count","type":"integer","isSearchable":false,"info":"Number of customer interactions during the session.","features":["default"]},{"attribute":"session_duration","title":"Session duration","type":"float","isSearchable":false,"info":"Duration of the session in seconds.","table":"session","features":["default","websdk"]},{"attribute":"device_city","title":"City","type":"string","isSearchable":true,"info":"City of the session based on the IP.","features":["default","websdk"]},{"attribute":"device_country","title":"Country","type":"string","isSearchable":true,"info":"Country of user, based on previously used IP address.","features":["default","websdk"]},{"attribute":"session_screen_list","title":"Visited screen","type":"list_of_string","isSearchable":true,"info":"Filter by the screens that have been visited during a session.","table":"session","features":["default","websdk"]},{"attribute":"screen_name","title":"Screen name","type":"screen_name_string","isSearchable":true,"info":"Filter by the screens that have been visited during a session.","table":"screenvisit","features":["default","websdk"]},{"attribute":"user_time_zone","title":"Device local time zone","type":"string","isSearchable":true,"info":"Session device date.","features":["default","websdk"]},{"attribute":"session_weekday","title":"Weekday","type":"string","isSearchable":false,"valueMapping":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"info":"Day of the week for the user when the session was recorded.","features":["default","websdk"]}]'),
    o=JSON.parse('[{"attribute":"kUXCam_UserIdentity","title":"Custom user ID","type":"string","isSearchable":true,"info":"User ID set by the API.","table":"appuser","features":["default","websdk"]},{"attribute":"uxcam_user_id","title":"UXCam user ID","type":"string","isSearchable":true,"info":"User ID set in the UXCam database.","table":"session","features":["default","websdk"]},{"attribute":"uxcamuserid","title":"User name","type":"string","isSearchable":true,"info":"Filter by Custom user ID or UXCam user ID.","table":"appuser","features":["default","websdk"]}]'),
    u=s(10518),
    l=JSON.parse('[{"attribute":"rage_screen","title":"Rage tap on screen","type":"bool","isSearchable":false,"table":"event","info":"Quick, repeated taps indicating user frustration.","features":["default","websdk"]},{"attribute":"crashed_screen","title":"Crash on screen","type":"bool","isSearchable":false,"info":"Unexpected exit caused by an unhandled exception.","table":"session","features":["default"]},{"attribute":"freeze_screen","title":"UI freeze on screen","type":"bool","isSearchable":false,"table":"event","info":"Temporary UI unresponsiveness.","features":["default"]},{"attribute":"screen_rage_tap_count","title":"Count of rage taps on screen","type":"integer","isSearchable":false,"info":"Count of quick, repeated taps indicating user frustration on a screen.","table":"screen","features":["default","websdk"]},{"attribute":"screen_uifreeze_count","title":"Count of UI freeze on screen","type":"integer","isSearchable":false,"info":"Count of occurrences of temporary UI unresponsiveness on a screen.","table":"screen","features":["default"]},{"attribute":"dead_click_screen","title":"Dead clicks on screen","type":"bool","isSearchable":false,"info":"Clicks on a screen that do not trigger any action.","table":"session","features":["websdk"]},{"attribute":"screen_dead_click_count","title":"Count of dead clicks on screen","type":"integer","isSearchable":false,"info":"Count of clicks on a screen that do not trigger any action.","table":"screen","features":["websdk"]},{"attribute":"session_crashed","title":"Crashed session","type":"bool","isSearchable":false,"info":"Session with unexpected exit caused by an unhandled exception.","table":"session","features":["default"]},{"attribute":"screen_uploadedon","title":"Count of users with screen visit","type":"date","isSearchable":false,"info":"Number of unique users who visited the selected screen.","table":"screenvisit","features":["default","websdk"]}]'),
    c=JSON.parse('[{"attribute":"include_event_count_per_screen_visit","title":"Screen visits with events","type":"string","isSearchable":true,"table":"event","info":"Screens that have a event","category":"Events","features":["default","websdk"]},{"attribute":"doesnot_include_event_count_per_screen_visit","title":"Screen visits without events","type":"string","isSearchable":true,"table":"event","info":"Screens that does not have a event","category":"Events","features":["default","websdk"]},{"attribute":"include_smart_event_count_per_screen_visit","title":"Screen visits with smart events","type":"string","isSearchable":true,"table":"no_code_event","info":"Screens that have a smart event","category":"Events","features":["default","websdk"]},{"attribute":"doesnot_include_smart_event_count_per_screen_visit","title":"Screen visits without smart events","type":"string","isSearchable":true,"table":"no_code_event","info":"Screens that does not have a smart event","category":"Events","features":["default","websdk"]}]'),
    d=JSON.parse('[{"attribute":"include_gesture_count_per_screen_visit","title":"Screen visits with gestures","type":"string","isSearchable":true,"table":"gesture","info":"Screens that have a gesture","features":["default","websdk"]},{"attribute":"doesnot_include_gesture_count_per_screen_visit","title":"Screen visits without gestures","type":"string","isSearchable":true,"table":"gesture","info":"Screens that does not have a gesture","features":["default","websdk"]}]'),
    f=JSON.parse('[{"attribute":"device_width","title":"Display width","type":"float","isSearchable":false,"info":"Width of the display in pixels.","table":"session","features":["default","websdk"]},{"attribute":"browser_name","title":"Browser","type":"string","isSearchable":true,"info":"Name of the browser.","table":"session","features":["websdk"]},{"attribute":"browser_version","title":"Browser version","type":"string","isSearchable":true,"info":"Version of the browser.","table":"session","features":["websdk"]},{"attribute":"device_os_name","title":"OS","type":"string","isSearchable":true,"info":"Operating system of the device.","table":"session","features":["websdk"]},{"attribute":"device_type","title":"Device type","type":"string","isSearchable":true,"info":"Type of the device.","table":"session","features":["websdk"]},{"attribute":"device_height","title":"Display height","type":"float","isSearchable":false,"info":"Height of the display in pixels.","table":"session","features":["default","websdk"]},{"attribute":"device_language","title":"Device language","type":"string","isSearchable":true,"info":"Language of the device as set by the user.","table":"session","features":["default","websdk"]},{"attribute":"device_class","title":"Device class","type":"string","isSearchable":true,"info":"Class of the device given by the device size.","table":"session","features":["default"]},{"attribute":"device_manufacturer","title":"Device manufacturer","type":"string","isSearchable":true,"info":"Name of the device manufacturer.","table":"session","features":["default"]},{"attribute":"sdk_version","title":"SDK version","type":"string","isSearchable":true,"info":"UXCam SDK version.","table":"session","features":["default","websdk"]},{"attribute":"device_platform","title":"Platform","type":"device_platform","info":"Device platform, either Android or iOS","isSearchable":false,"table":"session","features":["default"]},{"attribute":"device_os_version","title":"OS version","type":"string","info":"Version of the device\'s operating system.","isSearchable":true,"table":"session","features":["default","websdk"]},{"attribute":"device_model","title":"Device name","type":"string","info":"Show only sessions with/without engagement device type","isSearchable":true,"table":"session","features":["default"]},{"attribute":"app_version","title":"App version","type":"string","info":"App version on device.","isSearchable":true,"table":"session","features":["default"]},{"attribute":"device_id","title":"Install ID","type":"string","info":"Unique identifier for a given device.","webInfo":"Unique identifier specific to the user\'s browser","isSearchable":true,"table":"session","features":["default","websdk"]}]'),
    b=JSON.parse('[{"attribute":"session_gesture_count","title":"Gesture number","type":"integer","isSearchable":false,"info":"Number of customer interactions during the session.","table":"session","features":["default"]},{"attribute":"session_has_video","title":"Video recorded","type":"bool","isSearchable":false,"info":"A recording of the session is available.","table":"session","features":["default","websdk"]},{"attribute":"session_duration","title":"Session duration","type":"float","isSearchable":false,"info":"Duration of the session in seconds.","table":"session","features":["default","websdk"]},{"attribute":"session_number_of_user","title":"User session count","type":"integer","isSearchable":false,"info":"Number of sessions of this user when the session happened.","table":"session","features":["default","websdk"]},{"attribute":"session_analyzed_by_ai","title":"Analyzed by AI","type":"bool","isSearchable":false,"info":"This sessions has been analyzed by AI.","table":"session","features":["aisession"]},{"attribute":"session_screen_count","title":"Screen number","type":"integer","isSearchable":false,"info":"Number of visited screens during the session.","table":"session","features":["default","websdk"]},{"attribute":"session_screen_list","title":"Visited screen","type":"list_of_string","isSearchable":true,"info":"Filter by the screens that have been visited during a session.","table":"session","features":["default","websdk"]},{"attribute":"screen_name","title":"Screen name","type":"screen_name_string","isSearchable":true,"info":"Filter by the screens that have been visited during a session.","table":"screenvisit","features":["default","websdk"]},{"attribute":"session_screen_ordered_list","title":"Follows screen sequence","type":"list_of_string","isSearchable":true,"info":"Filter by the screens that have been visited during a session.","table":"session","features":["default","websdk"]},{"attribute":"session_offline_recorded","title":"Offline recorded","type":"bool","isSearchable":false,"info":"The session was recorded while the device was offline.","table":"session","features":["default"]},{"attribute":"session_is_viewed","title":"Viewed session","type":"bool","isSearchable":false,"info":"The session has been viewed in the dashboard.","table":"session","features":["default","websdk"]},{"attribute":"environment","title":"Environment","type":"string","isSearchable":true,"info":"Build type based on the stage of the app release life cycle.","table":"session","features":["default"]},{"attribute":"session_id","title":"Session Id","type":"string","isSearchable":true,"info":"Filter by set session id.","table":"session","features":["default","websdk"]},{"attribute":"session_network_type","title":"Network type","type":"string","isSearchable":false,"info":"Filter by the network from which the session has been uploaded.","table":"session","valueMapping":["wifi","mobile data","no network","unknown"],"features":["default"]},{"attribute":"session_responsive_gesture_count","title":"Responsive gesture count","type":"integer","isSearchable":false,"info":"Count of responsive gestures.","table":"session","features":["default"]},{"attribute":"session_with_notes","title":"With note","type":"bool","isSearchable":false,"info":"The session has note.","table":"session","features":["default","websdk"]},{"attribute":"event_uploadedon","title":"Event uploaded date","type":"date","isSearchable":false,"info":"Date on which the event was uploaded to our server.","table":"event","features":["default","websdk"]},{"attribute":"session_with_event","title":"Coded event count","type":"integer","isSearchable":false,"info":"Coded event count.","table":"session","features":["default","websdk"]},{"attribute":"referer","title":"Referrer","type":"string","isSearchable":true,"info":"Session\'s Referrer.","table":"session","features":["websdk"]},{"attribute":"referer_domain","title":"Referrer domain","type":"string","isSearchable":true,"info":"The referring domain of the session.","table":"session","features":["websdk"]}]'),
    p=JSON.parse('[{"attribute":"session_uploadedon","title":"Upload time","type":"date","isSearchable":false,"info":"Date on which the session was uploaded to our server.","table":"session","features":["default","websdk"]},{"attribute":"session_recordedon","title":"Device time","type":"date","isSearchable":false,"info":"Date on which the session was recorded in the device.","table":"session","features":["default","websdk"]},{"attribute":"session_weekday","title":"Weekday","type":"string","isSearchable":false,"valueMapping":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"info":"Day of the week for the user when the session was recorded.","table":"session","features":["default","websdk"]}]'),
    h=JSON.parse('[{"attribute":"kUXCam_UserIdentity","title":"Custom user ID","type":"string","isSearchable":true,"info":"User ID set by the API.","table":"appuser","features":["default","websdk"]},{"attribute":"uxcam_user_id","title":"UXCam user ID","type":"string","isSearchable":true,"info":"User ID set in the UXCam database.","table":"appuser","features":["default","websdk"]},{"attribute":"uxcamuserid","title":"User name","type":"string","isSearchable":true,"info":"Filter by Custom user ID or UXCam user ID.","table":"appuser","features":["default","websdk"]},{"attribute":"device_city","title":"City","type":"string","isSearchable":true,"info":"City of the session based on the IP.","table":"session","features":["default","websdk"]},{"attribute":"device_country","title":"Country","type":"string","isSearchable":true,"info":"Country of user, based on previously used IP address.","table":"session","features":["default","websdk"]},{"attribute":"device_language","title":"Device language","type":"string","isSearchable":true,"info":"Language of the device as set by the user.","table":"session","features":["default","websdk"]},{"attribute":"user_first_screen_name","title":"Initial landing page","type":"json","isSearchable":true,"info":"The first screen the user visited.","table":"session","features":["websdk"]},{"attribute":"user_first_referer","title":"Initial referrer","type":"json","isSearchable":true,"info":"The URL that linked to your site and initiated the users’ first session.","table":"session","features":["websdk"]},{"attribute":"user_first_referer_domain","title":"Initial referrer domain","type":"json","isSearchable":true,"info":"The domain that linked to your site and initiated the user’s first session.","table":"session","features":["websdk"]}]'),
    _=JSON.parse('[{"attribute":"rageTap","title":"Rage tap","type":"list_of_string","isSearchable":false,"table":"event","info":"Quick, repeated taps indicating user frustration.","default":[{"attribute":"event_name","operator":"in","value":["rageTap"],"table":"event"}],"features":["default","websdk"]},{"attribute":"rage_quit","title":"Rage quit","type":"bool","isSearchable":false,"info":"Exit that happened immediately after rage taps.","table":"session","features":["default"]},{"attribute":"session_crashed","title":"Crash","type":"bool","isSearchable":false,"info":"Unexpected exit caused by an unhandled exception.","table":"session","features":["default"]},{"attribute":"UI Freeze","title":"UI freeze","type":"list_of_string","isSearchable":false,"info":"Temporary UI unresponsiveness.","table":"event","default":[{"attribute":"event_name","operator":"in","value":["UI Freeze"],"table":"event"}],"features":["default"]},{"attribute":"session_rage_gesture_count","title":"Count of rage taps in session","type":"integer","isSearchable":false,"info":"Count of quick, repeated taps indicating user frustration in a session.","table":"session","features":["default"]},{"attribute":"session_unresponsive_gesture_count","title":"Count of unresponsive gestures in session","type":"integer","isSearchable":false,"info":"Count of gestures that did not trigger response on the UI in a session.","table":"session","features":["default"]}]'),
    v=JSON.parse('[{"attribute":"session_uploadedon","title":"Upload time","type":"date","isSearchable":false,"info":"Date on which the session was uploaded to our server.","table":"session","features":["default","websdk"]},{"attribute":"session_recordedon","title":"Device time","type":"date","isSearchable":false,"info":"Date on which the session was recorded in the device.","table":"session","features":["default","websdk"]},{"attribute":"user_session_count","title":"User session count","type":"integer","isSearchable":false,"info":"Show only users with/without engagement visit count","table":"session","features":["default","websdk"]},{"attribute":"user_session_duration","title":"Engagement time","type":"float","unit":[{"attribute":"sec","title":"sec"}],"isSearchable":false,"info":"Show only users with/without engagement screen visited","table":"appuser","features":["default","websdk"]},{"attribute":"user_event_count","title":"Coded event count","type":"integer","isSearchable":false,"info":"Show only users with/without engagement coded event count","table":"appuser","features":["default","websdk"]},{"attribute":"user_is_viewed","title":"Viewed user","type":"bool","isSearchable":false,"info":"The user has been viewed in the dashboard.","table":"appuser","features":["default","websdk"]},{"attribute":"session_screen_list","title":"Visited screen","type":"list_of_string","isSearchable":true,"info":"Filter by the screens that have been visited by user during a session.","table":"session","features":["default","websdk"]},{"attribute":"screen_name","title":"Screen name","type":"screen_name_string","isSearchable":true,"info":"Filter by the screens that have been visited during a session.","table":"screenvisit","features":["default","websdk"]}]'),
    g=JSON.parse('[{"attribute":"device_city","title":"City","type":"string","isSearchable":true,"info":"City of the session based on the IP.","table":"session","features":["default","websdk"]},{"attribute":"device_country","title":"Country","type":"string","isSearchable":true,"info":"Country of the session based on the IP.","table":"session","features":["default","websdk"]},{"attribute":"uxcamuserid","title":"User name","type":"string","isSearchable":true,"info":"Filter by Custom user ID or UXCam user ID.","table":"appuser","features":["default","websdk"]},{"attribute":"user_last_seen_on","title":"Last seen","type":"date","isSearchable":false,"info":"Date of the user\'s last session.","table":"appuser","features":["default","websdk"]},{"attribute":"user_first_seen_on","title":"First seen","type":"date","isSearchable":false,"info":"Date of the user\'s first session.","table":"appuser","features":["default","websdk"]},{"attribute":"user_gesture_count","title":"Gesture count","type":"integer","isSearchable":false,"info":"Total number of screen gestures of the user.","table":"appuser","features":["default"]},{"attribute":"user_responsive_gesture_count","title":"Responsive gesture count","type":"integer","isSearchable":false,"info":"Total number of responsive gestures of the user.","table":"appuser","features":["default"]},{"attribute":"alias","title":"alias","type":"string","isSearchable":true,"info":"Filter by alias","table":"appuser","features":["default","websdk"]},{"attribute":"kUXCam_UserIdentity","title":"kUXCam_UserIdentity","type":"string","isSearchable":true,"info":"Filter by kUXCam_UserIdentity","table":"appuser","features":["default","websdk"]},{"attribute":"user_first_screen_name","title":"Initial landing page","type":"json","isSearchable":true,"info":"The first screen the user visited.","table":"session","features":["websdk"]},{"attribute":"user_first_referer","title":"Initial referrer","type":"json","isSearchable":true,"info":"The URL that linked to your site and initiated the users’ first session.","table":"session","features":["websdk"]},{"attribute":"user_first_referer_domain","title":"Initial referrer domain","type":"json","isSearchable":true,"info":"The domain that linked to your site and initiated the user’s first session.","table":"session","features":["websdk"]}]'),
    y=JSON.parse('[{"attribute":"device_platform","title":"Platform","type":"device_platform","isSearchable":false,"info":"Device platform, either Android or iOS","table":"session","features":["default"]},{"attribute":"browser_name","title":"Browser","type":"string","isSearchable":true,"info":"Name of the browser.","table":"session","features":["websdk"]},{"attribute":"browser_version","title":"Browser version","type":"string","isSearchable":true,"info":"Version of the browser.","table":"session","features":["websdk"]},{"attribute":"device_os_name","title":"OS","type":"string","isSearchable":true,"info":"Operating system of the device.","table":"session","features":["websdk"]},{"attribute":"device_type","title":"Device type","type":"string","isSearchable":true,"info":"Type of the device.","table":"session","features":["websdk"]},{"attribute":"device_class","title":"Device class","type":"string","isSearchable":true,"info":"Class of the device given by the device size.","table":"session","features":["default"]},{"attribute":"device_manufacturer","title":"Device manufacturer","type":"string","isSearchable":true,"info":"Name of the device manufacturer.","table":"session","features":["default"]},{"attribute":"device_os_version","title":"OS version","type":"string","isSearchable":true,"isValuePredefined":false,"info":"Version of the device\'s operating system.","table":"session","features":["default","websdk"]},{"attribute":"device_model","title":"Device type","type":"string","isSearchable":true,"isValuePredefined":false,"info":"Show only users with/without engagement device type","table":"session","features":["default"]},{"attribute":"app_version","title":"App version","type":"string","isSearchable":true,"info":"App version on device.","table":"session","features":["default"]},{"attribute":"device_id","title":"Install ID","type":"string","isSearchable":false,"info":"Unique identifier for a given device.","webInfo":"Unique identifier specific to the user\'s browser.","table":"session","features":["default","websdk"]}]'),
    m=JSON.parse('[{"attribute":"rageTap","title":"Rage tap","type":"list_of_string","isSearchable":false,"table":"event","info":"Quick, repeated taps indicating user frustration.","default":[{"attribute":"event_name","operator":"in","value":["rageTap"],"table":"event"}],"features":["default","websdk"]},{"attribute":"UI Freeze","title":"UI freeze","type":"list_of_string","isSearchable":false,"info":"Temporary UI unresponsiveness.","table":"event","default":[{"attribute":"event_name","operator":"in","value":["UI Freeze"],"table":"event"}],"features":["default"]},{"attribute":"user_rage_gesture_count","title":"Total rage taps of user","type":"integer","isSearchable":false,"info":"Total count of quick, repeated taps indicating user frustration across all session of a user.","table":"appuser","features":["default"]},{"attribute":"user_unresponsive_gesture_count","title":"Total unresponsive gestures of user","type":"integer","isSearchable":false,"info":"Total count of gestures that did not trigger response on the UI across all sessions of a user.","table":"appuser","features":["default"]}]'),
    w=s(29345),
    S=JSON.parse('[{"attribute":"kUXCam_UserIdentity","title":"Custom user ID","type":"string","isSearchable":true,"info":"User ID set by the API","table":"appuser","features":["default","websdk"]},{"attribute":"uxcam_user_id","title":"UXCam user ID","type":"string","isSearchable":true,"info":"User ID set in the UXCam database.","table":"session","features":["default","websdk"]},{"attribute":"uxcamuserid","title":"User name","type":"string","isSearchable":true,"info":"Filter by Custom user ID or UXCam user ID.","table":"appuser","features":["default","websdk"]},{"attribute":"device_city","title":"City","type":"string","isSearchable":true,"info":"City of the session based on the IP.","table":"session","features":["default","websdk"]},{"attribute":"device_country","title":"Country","type":"string","isSearchable":true,"info":"Country of user, based on previously used IP address.","table":"session","features":["default","websdk"]},{"attribute":"user_first_seen_on","title":"First seen","type":"date","isSearchable":true,"info":"Date of the user\'s first session.","table":"appuser","features":["default","websdk"]},{"attribute":"user_last_seen_on","title":"Last seen","type":"date","isSearchable":true,"info":"Date of the user\'s last session.","table":"appuser","features":["default","websdk"]},{"attribute":"user_first_screen_name","title":"Initial landing page","type":"json","isSearchable":true,"info":"The first screen the user visited.","table":"session","features":["websdk"]},{"attribute":"user_first_referer","title":"Initial referrer","type":"json","isSearchable":true,"info":"The URL that linked to your site and initiated the users’ first session.","table":"session","features":["websdk"]},{"attribute":"user_first_referer_domain","title":"Initial referrer domain","type":"json","isSearchable":true,"info":"The domain that linked to your site and initiated the user’s first session.","table":"session","features":["websdk"]}]'),
    k=JSON.parse('[{"attribute":"session_uploadedon","title":"Date","type":"date","isSearchable":false,"info":"Date on which the session was uploaded to our server.","table":"session","features":["default","websdk"]},{"attribute":"session_weekday","title":"Weekday","type":"string","isSearchable":true,"info":"Day of the week for the user when the session was recorded.","valueMapping":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"table":"session","features":["default","websdk"]},{"attribute":"session_gesture_count","title":"Gesture count","type":"integer","isSearchable":false,"info":"Number of customer interactions during the session.","table":"session","features":["default"]},{"attribute":"session_with_event","title":"Coded event count","type":"integer","isSearchable":false,"info":"Coded event count.","table":"session","features":["default","websdk"]},{"attribute":"session_duration","title":"Length","type":"float","isSearchable":false,"info":"Duration of the session.","table":"session","features":["default","websdk"]},{"attribute":"session_has_video","title":"Has video","type":"bool","isSearchable":false,"info":"Was a video of the session recorded?","table":"session","features":["default"]},{"attribute":"session_screen_count","title":"Screen number","type":"integer","isSearchable":false,"info":"Number of visited screens during the session.","table":"session","features":["default","websdk"]},{"attribute":"session_screen_list","title":"Visited screen","type":"list_of_string","isSearchable":true,"info":"Filter by the screens that have been visited during a session.","table":"session","features":["default","websdk"]},{"attribute":"screen_name","title":"Screen name","type":"screen_name_string","isSearchable":true,"info":"Filter by the screens that have been visited during a session.","table":"screenvisit","features":["default","websdk"]},{"attribute":"session_number_of_user","title":"User session count","type":"integer","isSearchable":false,"info":"Number of sessions of this user when the session happened.","table":"session","features":["default","websdk"]},{"attribute":"session_offline_recorded","title":"Offline recorded","type":"bool","isSearchable":false,"info":"Offline Sessions","table":"session","features":["default"]},{"attribute":"session_id","title":"Session Id","type":"string","isSearchable":false,"info":"Filter by set session id.","table":"session","features":["default","websdk"]},{"attribute":"environment","title":"Environment","type":"string","isSearchable":true,"info":"Build type based on the stage of the app release life cycle.","table":"session","features":["default"]},{"attribute":"event_activity_name","title":"Event screen","type":"string","isSearchable":true,"info":"Name of the screen from when the event was triggered.","table":"event","features":["default","websdk"]},{"attribute":"event_uploadedon","title":"Event uploaded date","type":"date","isSearchable":false,"info":"Date on which the event was uploaded to our server.","table":"event","features":["default","websdk"]},{"attribute":"referer","title":"Referrer","type":"string","isSearchable":true,"info":"Session\'s Referrer.","table":"session","features":["websdk"]},{"attribute":"referer_domain","title":"Referrer domain","type":"string","isSearchable":true,"info":"The referring domain of the session.","table":"session","features":["websdk"]},{"attribute":"session_time_hour_of_day","title":"Hour of the day","type":"integer","isSearchable":false,"info":"","table":"session","features":["default","websdk"]},{"attribute":"session_recorded_hour_of_user","title":"Hour of the day","type":"string","isSearchable":false,"info":"","table":"session","valueMapping":["1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 AM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM","12 PM"],"features":["default","websdk"]}]'),
    T=JSON.parse('[{"attribute":"device_width","title":"Display width","type":"float","isSearchable":false,"info":"Width of the display in pixels.","table":"session","features":["default","websdk"]},{"attribute":"device_height","title":"Display height","type":"float","isSearchable":false,"info":"Height of the display in pixels.","table":"session","features":["default","websdk"]},{"attribute":"browser_name","title":"Browser","type":"string","isSearchable":true,"info":"Name of the browser.","table":"session","features":["websdk"]},{"attribute":"browser_version","title":"Browser version","type":"string","isSearchable":true,"info":"Version of the browser.","table":"session","features":["websdk"]},{"attribute":"device_os_name","title":"OS","type":"string","isSearchable":true,"info":"Operating system of the device.","table":"session","features":["websdk"]},{"attribute":"device_type","title":"Device type","type":"string","isSearchable":true,"info":"Type of the device.","table":"session","features":["websdk"]},{"attribute":"device_language","title":"Language","type":"string","isSearchable":true,"info":"Language of the device as set by the user.","table":"session","features":["default","websdk"]},{"attribute":"device_os_version","title":"OS version","type":"string","isSearchable":true,"info":"Version of the device\'s operating system.","table":"session","features":["default","websdk"]},{"attribute":"app_version","title":"App version","type":"string","isSearchable":true,"info":"App version on device.","table":"session","features":["default"]},{"attribute":"device_platform","title":"Platform","type":"device_platform","isSearchable":false,"info":"Device platform, either iOS or Android.","table":"session","features":["default"]},{"attribute":"sdk_version","title":"SDK version","type":"string","isSearchable":true,"info":"UXCam SDK version.","table":"session","features":["default","websdk"]},{"attribute":"device_class","title":"Device class","type":"string","isSearchable":true,"info":"Class of the device given by the device size.","table":"session","features":["default"]},{"attribute":"device_model","title":"Device name","type":"string","isSearchable":true,"info":"Production name of the device type.","table":"session","features":["default"]},{"attribute":"device_manufacturer","title":"Device manufacturer","type":"string","isSearchable":true,"info":"Name of the device manufacturer.","table":"session","features":["default"]},{"attribute":"device_id","title":"Install ID","type":"string","isSearchable":false,"info":"Unique identifier for a given device.","webInfo":"Unique identifier specific to the user\'s browser","table":"session","features":["default","websdk"]}]'),
    C=JSON.parse('[{"attribute":"session_uploadedon","title":"Upload time","type":"date","isSearchable":false,"info":"Date on which the session was uploaded to our server.","table":"session","features":["default","websdk"]},{"attribute":"event_recordedon","title":"Device time","type":"date","isSearchable":false,"info":"Date on which the session was recorded in the device.","table":"session","features":["default","websdk"]},{"attribute":"session_weekday","title":"Weekday","type":"string","isSearchable":false,"valueMapping":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"info":"Day of the week for the user when the session was recorded.","table":"session","features":["default","websdk"]}]'),
    U=s(62524),
    I=JSON.parse('[{"attribute":"rageTap","title":"Rage tap","type":"list_of_string","isSearchable":false,"table":"event","info":"Quick, repeated taps indicating user frustration.","default":[{"attribute":"event_name","operator":"in","value":["rageTap"],"table":"event"}],"features":["default","websdk"]},{"attribute":"session_crashed","title":"Crashed session","type":"bool","isSearchable":false,"info":"Session with unexpected exit caused by an unhandled exception.","table":"session","features":["default"]},{"attribute":"UI Freeze","title":"UI freeze","type":"list_of_string","isSearchable":false,"info":"Temporary UI unresponsiveness.","table":"event","default":[{"attribute":"event_name","operator":"in","value":["UI Freeze"],"table":"event"}],"features":["default"]},{"attribute":"session_rage_gesture_count","title":"Count of rage taps in session","type":"integer","isSearchable":false,"info":"Count of quick, repeated taps indicating user frustration in a session.","table":"session","features":["default"]},{"attribute":"session_unresponsive_gesture_count","title":"Count of unresponsive gestures in session","type":"integer","isSearchable":false,"info":"Count of gestures that did not trigger response on the UI in a session.","table":"session","features":["default"]}]'),
    D=JSON.parse('[{"attribute":"rageTap","title":"Rage tap in session","type":"list_of_string","isSearchable":false,"table":"event","info":"Quick, repeated taps indicating user frustration.","default":[{"attribute":"event_name","operator":"in","value":["rageTap"],"table":"event"}],"features":["default","websdk"]},{"attribute":"session_crashed","title":"Crashed session","type":"bool","isSearchable":false,"info":"Session with unexpected exit caused by an unhandled exception.","table":"session","features":["default"]},{"attribute":"UI Freeze","title":"UI freeze in session","type":"list_of_string","isSearchable":false,"info":"Temporary UI unresponsiveness.","table":"event","default":[{"attribute":"event_name","operator":"in","value":["UI Freeze"],"table":"event"}],"features":["default"]},{"attribute":"session_rage_gesture_count","title":"Count of rage taps in session","type":"integer","isSearchable":false,"info":"Count of quick, repeated taps indicating user frustration in a session.","table":"session","features":["default","websdk"]},{"attribute":"session_unresponsive_gesture_count","title":"Count of unresponsive gestures in session","type":"integer","isSearchable":false,"info":"Count of gestures that did not trigger response on the UI in a session.","table":"session","features":["default"]}]'),
    M=JSON.parse('{"Session Labels":{"attribute":"custom_label","title":"Session labels","type":"list_of_label_string","isSearchable":true,"info":"Filter by the session label that have been marked in a session.","table":"session","features":["default","websdk"]},"User Labels":{"attribute":"user_custom_label","title":"User labels","type":"list_of_label_string","isSearchable":true,"info":"Filter by the user label that have been marked in a user.","table":"appuser","features":["default","websdk"]},"Events":{"attribute":"event_name","title":"Events","filterTitle":"","type":"json","isSearchable":true,"info":"Filter by events sent during a session.","table":"event","features":["default","websdk"]},"Event properties":{"attribute":"event_custom_property","title":"Event Properties","filterTitle":"Has event with property","type":"json","isSearchable":true,"info":"Filter by events property sent during a session.","table":"event","features":["default","websdk"]},"Custom user properties":{"attribute":"user_custom_property","title":"Custom User properties","type":"json","isSearchable":true,"info":"Filter by custom user properties sent during a session","table":"appuser","features":["default","websdk"]},"Landing UTM":{"attribute":"utm","title":"Landing UTM","type":"json","isSearchable":true,"info":"Filter by the UTM parameters of the landing page.","table":"session","features":["websdk"]},"Initial landing UTM":{"attribute":"user_first_utm","title":"Initial landing UTM","type":"json","isSearchable":true,"info":"The UTM parameters from the user’s first visit.","table":"session","features":["websdk"]},"Screen visit properties":{"attribute":"session_screen_with_property_list","title":"Screen visit properties","type":"session_screen_string","isSearchable":true,"info":"Filter by saved page parameter","table":"screenvisit","features":["websdk"]},"Custom screen properties":{"attribute":"session_screen_with_property","title":"Custom screen properties","type":"string","isSearchable":true,"info":"Filter by saved page parameter","table":"screenvisit","features":["websdk"]},"Date Range":{"attribute":"date_range","title":"","type":"string","isSearchable":false,"info":"","table":"","features":["default","websdk"]},"SmartEvents":{"attribute":"nce_name","title":"Smart Events","filterTitle":"","type":"json","isSearchable":true,"info":"Filter by events sent during a session.","table":"no_code_event","features":["default","websdk"]},"Cohorts":{"attribute":"uxcamuserid_cohort","title":"Cohort","filterTitle":"","type":"user_cohort","isSearchable":true,"info":"Filter by cohorts.","table":"appuser","features":["default","websdk"]},"Tara\'s watchlist batches":{"attribute":"batch_id","title":"Tara\'s watchlist batches","filterTitle":"","type":"user_cohort","isSearchable":true,"info":"Filter by the batch processing ID.","table":"session","features":["aisession"]}}'),
    O=s(40594),
    P=JSON.parse('[{"attribute":"session_hour_of_day_user","title":"Hour of the day","type":"string","isSearchable":false,"info":"","table":"session"},{"attribute":"session_user_weekday","title":"Day of the week","type":"string","isSearchable":false,"info":"","table":"session"},{"attribute":"session_time_of_day_user","title":"Time of the day","type":"string","isSearchable":false,"info":"","table":"session"},{"attribute":"session_time_hour_of_day","title":"Hour of the day","type":"integer","isSearchable":false,"info":"","table":"session"},{"attribute":"session_recorded_hour_of_user","title":"Hour of the day","type":"string","isSearchable":false,"info":"","table":"session","valueMapping":["1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 AM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM","12 PM"]},{"attribute":"session_recorded_period_day","title":"Day of the week","type":"string","isSearchable":false,"info":"","table":"session"},{"attribute":"session_recorded_period_hour","title":"Time of the day","type":"string","isSearchable":false,"info":"","table":"session"},{"attribute":"session_recorded_week","title":"Week of the month","type":"string","isSearchable":false,"info":"","table":"session"},{"attribute":"session_recorded_month","title":"Month of the year","type":"string","isSearchable":false,"info":"","table":"session"},{"attribute":"user_identity","title":"User ID","type":"string","isSearchable":false,"info":"","table":"session"},{"attribute":"user_session_screen_count","title":"Count of screen visit","type":"integer","isSearchable":false,"info":"","table":"session"}]');
    let L=Object.values(w).flat(),
    A=i()(b,e=>!["session_analyzed_by_ai","batch_id"].includes(e.attribute)),
    F={
      session:{
        All:[..._,...f,...p,...h,...b],
        "UX issues":[..._],
        Device:[...f],
        Time:[...p],
        "User properties":[...h],
        "Session properties":[...b]
      },
      user:{
        All:[...m,...g,...y,...v],
        "UX issues":[...m],
        "User properties":[...g],
        Device:[...y],
        Engagement:[...v]
      },
      user_v2:{
        All:[...L],
        ...w
      },
      event:{
        All:[...I,...S,...T,...C,...k,...U],
        "UX issues":[...I],
        "User properties":[...S],
        Device:[...T],
        Time:[...C],
        "Session properties":[...k],
        "Smart event properties":[...U]
      },
      heatmap:{
        All:[...l,...r,...n,...o,...u,...c,...d],
        "UX issues":[...l],
        "Screen visit":[...u],
        Device:[...r],
        "Session properties":[...n],
        Gestures:[...d]
      },
      issue:{
        All:[...D,...f,...p,..._,...h,...A],
        "UX issues":[...D],
        Device:[...f],
        Time:[...p],
        "User properties":[...h],
        "Session properties":[...A]
      },
      appflow:{
        All:[...D,...f,...p,..._,...h,...A],
        "UX issues":[...D],
        Device:[...f],
        Time:[...p],
        "User properties":[...h],
        "Session properties":[...A]
      }
    },
    x={
      ...F,
      heatmap:{
        ...F.heatmap,
        "Custom events":[...c],
        "User properties":[...o]
      }
    },
    q={
      ...F,
      heatmap:{
        ...F.heatmap,
        "Coded events":[...c],
        "User properties":[...o]
      }
    },
    N={
      session:{
        "UX issues":[..._],
        Device:[...f],
        Time:[...p],
        "User properties":[...h],
        "Session properties":[...b]
      },
      user:{
        "UX issues":[...m],
        "User properties":[...g],
        Device:[...y],
        Engagement:[...v]
      },
      user_v2:{
        ...w
      },
      event:{
        "UX issues":[...I],
        "User properties":[...S],
        Device:[...T],
        Time:[...C],
        "Session properties":[...k],
        "Smart event properties":[...U]
      },
      heatmap:{
        "UX issues":[...l],
        Device:[...r],
        "Screen visit":[...u],
        "Session properties":[...n],
        Gestures:[...d]
      },
      issue:{
        "UX issues":[...D],
        Device:[...f],
        Time:[...p],
        "User properties":[...h],
        "Session properties":[...A]
      },
      appflow:{
        "UX issues":[...D],
        Device:[...f],
        Time:[...p],
        "User properties":[...h],
        "Session properties":[...A]
      }
    },
    E={
      ...N,
      heatmap:{
        ...N.heatmap,
        "Custom events":[...c],
        "User properties":[...o]
      }
    },
    R={
      ...N,
      heatmap:{
        ...N.heatmap,
        "Coded events":[...c],
        "User properties":[...o]
      }
    },
    z={
      session:[..._,...f,...p,...h,...b,...P,M["Landing UTM"],M["Initial landing UTM"],M["Session Labels"],M["User Labels"],M.Events,M["Event properties"],M["Custom user properties"],M["Screen visit properties"],M.Cohorts,M["Tara's watchlist batches"]],
      user:[...m,...g,...y,...v,...P,M["User Labels"],M["Initial landing UTM"],M["Custom user properties"],M["Screen visit properties"],M.Events,M["Event properties"],M.Cohorts],
      user_v2:[...L,...P,...v,M["User Labels"],M["Initial landing UTM"],M["Custom user properties"],M["Screen visit properties"],M.Events,M["Event properties"],M.Cohorts],
      event:[...I,...S,...T,...C,...k,M["Landing UTM"],M["Initial landing UTM"],M["Session Labels"],M["User Labels"],M["Event properties"],M.Events,...U,M["Custom user properties"],M["Custom screen properties"],M.SmartEvents,M.Cohorts,M["Tara's watchlist batches"]],
      heatmap:[...l,...r,...n,...u,...o,...P,M.Events,M["Session Labels"],M["Custom user properties"],M["Custom screen properties"],M["Landing UTM"],M["Initial landing UTM"],M["Tara's watchlist batches"]],
      issue:[...D,...f,...p,...h,...A,M["Session Labels"],M["User Labels"],M.Events,M["Event properties"],M["Custom user properties"],M["Screen visit properties"]],
      appflow:[...D,...f,...p,...h,...A,M["Session Labels"],M["User Labels"],M["Landing UTM"],M["Initial landing UTM"],M.Events,M["Event properties"],M["Custom user properties"],M["Screen visit properties"],M.Cohorts,M["Tara's watchlist batches"]]
    },
    V=Object.keys(M)
  },
  68628:function(e,t,s){
    var a=s(11163),
    i=s.n(a),
    r=s(14416),
    n=s(55137),
    o=s(92046),
    u=s(12616),
    l=s(47639),
    c=s(92980),
    d=s(43399),
    f=s(35161),
    b=s.n(f),
    p=s(73495),
    h=s(67294);
    t.Z=()=>{
      let e=(0,r.I0)(),
      {
        megaFilterReducer:{
          selectedAttributeProps:t
        },
        urlReducer:{
          parentType:s,
          issueid:a,
          issueType:f,
          issuepage:_,
          appId:v,
          starttime:g,
          sessionid:y,
          issuedetailpage:m,
          sessionpage:w
        },
        screenRenamedList:S,
        appFilter:k
      }=(0,r.v9)(e=>e),
      {
        dateSegment:T,
        fetchProperty:{
          screen_name:{
            data:C
          }={}
        }
      }=k,
      U=o.Sz[s],
      I=o.ls[s],
      D=o._v[s],
      M=(0,h.useMemo)(()=>(null==C?void 0:C.map(e=>e))||[],[C]),
      O=(0,h.useMemo)(()=>({
        appid:v,
        date_range:T,
        filters:[],
        screen_names:M&&M.length>0&&[...M,"Launch","Quit","Others"]
      }),[v,T,M]),
      {
        data:P
      }=(0,d.Zp)(O),
      L=(0,h.useMemo)(()=>b()(null==P?void 0:P.data,e=>{
        let t=S[e.screenName]||e.screenName;
        return{
          ...e,
          updatedScreenName:t
        }
      },[S]),[P,S]),
      A=t=>e((0,l.hI)({
        action:t,
        info:{
          page:"statistics"===s?"event analytics":s
        }
      })),
      F=async e=>{
        let t,
        s;
        a?(t="/app/".concat(v,"/issues/").concat(f,"/").concat(_||1,"/").concat(a,"?"),s="appId=".concat(v,"&issueType=").concat(f,"&parentType=issues&issueid=").concat(a,"&issuepage=").concat(_||1),g&&(t="/app/".concat(v,"/issues/").concat(f,"/").concat(_||1,"/").concat(a,"/").concat(m,"/session/").concat(y,"/").concat(g,"?"),s="appId=".concat(v,"&issueType=").concat(f,"&parentType=issues&issueid=").concat(a,"&issuepage=").concat(_||1,"&issuedetailpage=").concat(m||1,"&sessionid=").concat(y,"&starttime=").concat(g))):(t="/app/".concat(v,"/issues/").concat(f,"?"),s="appId=".concat(v,"&issueType=").concat(f,"&parentType=issues")),
        t=(0,p.$)(t,e?[...e]:[]),
        i().push("/integration?".concat(s),"".concat(t))
      };
      return{
        callListApi:async(t,a)=>{
          switch(t&&await e((0,n.Yb)(t)),U){
            case"session":if("issues"===s){
              await F(t);
              return
            }
            if("aiSessionsList"===s){
              await (0,n.Tj)({
                appId:v,
                sessionid:y,
                sessionpage:w,
                starttime:g
              },t);
              return
            }"screenFlow"===s||"screenBurst"===s?e((0,u.a1)(L)):e((0,u.Tj)());
            break;
            case"user":e((0,n.Ct)(1,"user",!0)),
            e((0,n.MH)({
              attribute:"user_custom_property",
              filter:[],
              search:"",
              dropdownLimit:501,
              date_range:T
            },!0));
            break;
            case"event":e((0,u.tu)())
          }
          a&&A(a)
        },
        pageType:U,
        segmentType:I,
        getPayload:(e,s,a)=>{
          let i;
          let{
            attribute:r,
            isSearchable:n
          }=a,
          {
            valueMapping:o,
            attribute:u,
            table:l
          }=t||{};
          i=n||c.c7.includes(r)&&o?e:s;
          let d=u,
          f=null==t?void 0:t.type,
          b=null==t?void 0:t.propertyName,
          p="activity"===b;
          return(0,c.Ig)(d)&&c.c7.includes(r)&&(i=i.map(e=>e.toLowerCase())),
          "session_recorded_hour_of_user"===d&&Array.isArray(i)&&(i=i.map(e=>e.replace(/(\d+)\s*(am|pm)/i,(e,t,s)=>"".concat(t).concat(s.toUpperCase())))),
          ["kUXCam_UserIdentity","alias"].indexOf(u)>-1&&(b=u,d="user_custom_property"),
          (c.Or.includes(d)||p)&&!["contains_any","not_contains_any"].includes(r)&&(i=Array.isArray(i)?i.map(e=>e):i),
          "viewtype"===d&&(i=c.qL.filter(e=>i.includes(e.title.toLowerCase())).map(e=>e.value)),
          [{
            attribute:d,
            operator:c.p6.includes(f)?"equal":r,
            property_name:b,
            value:i,
            table:l
          }]
        },
        dataTable:D,
        activityCallListApi:async function(t){
          let s=!(arguments.length>1)||void 0===arguments[1]||arguments[1];
          t&&await e((0,u.YS)(t,"user")),
          await e((0,n.Ct)(1,"user",!0,s)),
          e((0,n.MH)({
            attribute:"user_custom_property",
            filter:[],
            search:"",
            dropdownLimit:501,
            date_range:T
          },!0))
        }
      }
    }
  },
  92980:function(e,t,s){
    s.d(t,{
      Ig:function(){
        return y
      },
      Nq:function(){
        return S
      },
      Oh:function(){
        return x
      },
      Or:function(){
        return O
      },
      Q8:function(){
        return v
      },
      R:function(){
        return N
      },
      RI:function(){
        return k
      },
      TM:function(){
        return D
      },
      UL:function(){
        return M
      },
      VC:function(){
        return C
      },
      X1:function(){
        return p
      },
      Xp:function(){
        return T
      },
      Yo:function(){
        return P
      },
      c7:function(){
        return h
      },
      cO:function(){
        return g
      },
      ny:function(){
        return A
      },
      oG:function(){
        return m
      },
      oO:function(){
        return F
      },
      oR:function(){
        return w
      },
      p6:function(){
        return _
      },
      qL:function(){
        return q
      },
      uQ:function(){
        return L
      },
      vc:function(){
        return b
      },
      wW:function(){
        return I
      },
      wg:function(){
        return U
      },
      yP:function(){
        return f
      }
    });
    var a=s(85893);
    s(67294);
    var i=s(35161),
    r=s.n(i),
    n=s(1469),
    o=s.n(n),
    u=s(30381),
    l=s.n(u),
    c=s(92046),
    d=s(13979);
    let f="YYYY-MM-DD HH:mm:ss",
    b="YYYY-MM-DD",
    p=/^\d+$/,
    h=["in","not_in"],
    _=["bool","device_platform"],
    v=e=>e&&e.valueOf()>Date.now(),
    g=l().updateLocale("en",{
      week:{
        dow:1
      }
    }),
    y=e=>["session_recorded_weekday","session_recorded_hour_of_user","session_network_type","viewtype","uxcamuserid_cohort","session_weekday"].indexOf(e)>-1,
    m=e=>e.replace(/\s/g,"").toLowerCase(),
    w={
      kUXCam_UserIdentity:"Custom user ID"
    },
    S=(e,t)=>w[e]&&w[e].toLowerCase().indexOf(t.toLowerCase())>=0||e.toLowerCase().indexOf(t.toLowerCase())>=0,
    k={
      True:"is true",
      False:"is false",
      in:"equals",
      not_in:"does not equal",
      greater:"greater than",
      less:"less than",
      greater_or_equal:"greater than or equal to",
      less_or_equal:"less than or equal to",
      contains:"contains",
      not_contains:"does not contain",
      has_any:"has any of",
      not_has_any:"has none of",
      contains_any:"contains any of",
      not_contains_any:"does not contain any of",
      has_all:"has all of",
      not_has_all:"has not all of",
      not_on:"not on",
      1:"is android",
      2:"is iOS",
      wifi:"is wifi",
      "mobile data":"is mobile data",
      "no network":"is no network",
      unknown:"is unknown",
      equals_any_in:"equals",
      not_equals_any_in:"not equals",
      contains_any_in:"contains",
      not_contains_any_in:"contains not"
    },
    T=(e,t)=>{
      let s="";
      try{
        return o()(t)&&r()(t,(t,i,r)=>(s=5===r.length&&i!==r.length-1?",  ":e?i<r.length-1?", \xa0":"":i<r.length-1?4===i?",\xa0...":i<=4?", \xa0":"":"lower"===i?"\xa0and\xa0":"",e||["lower","upper"].includes(i)||i<=4)?(0,a.jsxs)("span",{
          children:["__undefined__"===t?(0,a.jsx)("em",{
            children:t
          }):t,s]
        },t):(0,a.jsx)(a.Fragment,{
          children:" "
        }))
      }
      catch(e){
        return d.l.error(e),
        (0,a.jsx)(a.Fragment,{
          children:" "
        })
      }
    },
    C=e=>e.preventDefault(),
    U={
      session:["event_uploadedon","session_with_event","session_screen_ordered_list"],
      user:["event_uploadedon","session_with_event","push_token"],
      user_v2:["event_uploadedon","session_with_event","push_token","alias","session_uploadedon","session_recordedon","session_number_of_user"],
      event:[],
      heatmap:["screen_name","session_crashed","screen_uploadedon"]
    },
    I=["session","user","event"],
    D=e=>null==e?void 0:e.some(e=>"object"==typeof e),
    M=(e,t)=>{
      let s;
      return s=t?["SDK version","OS version"].includes(t)?t:["Custom user properties","Custom user properties","Event properties"].includes(t)?["Custom user properties","Custom user properties"].includes(t)?"custom user property":"event property":t.toLowerCase():"",
      "".concat(e," ").concat(s)
    },
    O=["session_screen_list","next_screen_name","previous_screen_name","event_activity_name","screen_name"],
    P=e=>{
      if(!(null==e?void 0:e.length))return"";
      let t=e.slice(0,3),
      s=e.slice(3),
      a=(null==t?void 0:t.map(e=>(null==e?void 0:e.length)>31?"".concat(e.substr(0,31),"..."):e)).join(", ");
      if(e.length>3){
        let{
          length:e
        }=s;
        return"".concat(a,", + ").concat(e," other").concat(1!==e?"s":"")
      }
      return a
    },
    L=(e,t)=>{
      let s=!1;
      if("eventsList"===t||"statistics"===t||"nocodeEventsList"===t){
        for(let t=0;t<e.length;t+=1)if(c.Kf.includes(e[t].attribute)){
          s=!0;
          break
        }
      }
      return s
    },
    A={
      "Single Tap":0,
      "Double Tap":1,
      "Swipe Up":2,
      "Swipe Down":3,
      "Swipe Left":4,
      "Swipe Right":5,
      "Long Press":6,
      "Zoom In":7,
      "Zoom Out":8,
      "Orientation Change":10,
      Trail:11
    },
    F=(e,t)=>{
      let s=t.toLowerCase().replaceAll(/[.*+?^${}()|[\]\\]/g,"\\$&"),
      i=RegExp("(".concat(s.replace(/\s/g,"\\s"),")"),"gi");
      return e.split(i).map((e,t)=>e.toLowerCase()===s?(0,a.jsx)("i",{
        children:e
      },t+e):e)
    },
    x=e=>{
      switch(e){
        case"__undefined__":return"Environment is set to undefined when sessions are being captured from older Android SDK version (before 3.6.0) and iOS SDK version (before 3.5.2).";
        case".alpha":return"Build installed outside of TestFlight or Appstore (iOS) or debug build (Android).";
        case".beta":return"Build installed from TestFlight (iOS) or release build installed from outside Playstore (Android).";
        case".release":return"Build installed from Appstore (iOS) or Playstore (Android).";
        default:return null
      }
    },
    q=[{
      value:-1,
      title:"Unknown view type"
    },{
      value:1,
      title:"Button"
    },{
      value:2,
      title:"EditText / TextField"
    },{
      value:3,
      title:"CompoundButton"
    },{
      value:4,
      title:"Slider / Seekbar"
    },{
      value:5,
      title:"ViewGroup"
    },{
      value:6,
      title:"Scrollview"
    },{
      value:7,
      title:"Textview"
    },{
      value:8,
      title:"TableView - UITableView"
    },{
      value:9,
      title:"Stepper - UIStepper"
    },{
      value:10,
      title:"DatePicker"
    },{
      value:11,
      title:"Time picker"
    },{
      value:12,
      title:"ImageView"
    },{
      value:13,
      title:"Menu"
    },{
      value:14,
      title:"Picker"
    },{
      value:15,
      title:"Keyboard"
    },{
      value:16,
      title:"Alert/ActionSheet"
    },{
      value:17,
      title:"Search bar"
    },{
      value:18,
      title:"Page Controls"
    },{
      value:19,
      title:"Unknown Composable"
    }],
    N={
      getValues:e=>e.map(e=>{
        var t;
        return null===(t=q.find(t=>t.title.toLowerCase().includes(e.toLowerCase())))||void 0===t?void 0:t.value
      }),
      getTitles:e=>{
        if(!e)return[];
        if(!o()(e)){
          let t=q.find(t=>t.value===e);
          return(null==t?void 0:t.title)||q[0].title
        }
        return q.filter(t=>e.includes(t.value)).map(e=>e.title)
      }
    }
  },
  62524:function(e){
    e.exports=JSON.parse('[{"attribute":"viewid","title":"UI element ID","type":"string","isSearchable":true,"info":"Unique ID of the UI element","table":"gesture","features":["default","websdk"]},{"attribute":"viewname","title":"UI element name","type":"string","isSearchable":true,"info":"UI name of the UI element","table":"gesture","features":["default","websdk"]},{"attribute":"viewtype","title":"UI element type","type":"string","isSearchable":true,"info":"UI type of the UI element","table":"gesture","valueMapping":["Unknown view type","Button","EditText / TextField","CompoundButton","Slider / Seekbar","ViewGroup","Scrollview","Textview","TableView - UITableView","Stepper - UIStepper","Time picker","ImageView","Menu","Picker","Keyboard","Alert/ActionSheet","Search bar","Page Controls","Unknown Composable"],"features":["default","websdk"]}]')
  },
  10518:function(e){
    e.exports=JSON.parse('[{"attribute":"next_screen_name","title":"Next screen","type":"string","isSearchable":true,"info":"Name of the screen that was visited next.","filterTable":"screenvisit","features":["default","websdk"]},{"attribute":"previous_screen_name","title":"Previous screen","type":"string","isSearchable":true,"info":"Name of the screen that was visited previously.","filterTable":"screenvisit","features":["default","websdk"]},{"attribute":"screen_number","title":"Screen number in session","type":"integer","isSearchable":false,"info":"Number which the screen has in the session.","features":["default","websdk"]},{"attribute":"is_first_screen","title":"First screen in the session","type":"bool","isSearchable":false,"info":"Is the screen visit the first one in the session?","features":["default","websdk"]},{"attribute":"is_last_screen","title":"Last screen in the session","type":"bool","isSearchable":false,"info":"Is the screen visit the last one in the session?","features":["default","websdk"]},{"attribute":"screen_visit_duration","title":"Screen visit duration","type":"float","info":"How much time did the user spend on the screen?","isSearchable":false,"features":["default","websdk"]},{"attribute":"screen_gesture_count","title":"Gesture count on screen","type":"integer","info":"How many gestures did the user do on the screen?","isSearchable":false,"features":["default"]}]')
  },
  29345:function(e){
    e.exports=JSON.parse('{"User ID":[{"attribute":"kUXCam_UserIdentity","title":"Custom user ID","type":"string","isSearchable":true,"info":"User ID set by the API.","table":"appuser","features":["default","websdk"]},{"attribute":"uxcam_user_id","title":"UXCam user ID","type":"string","isSearchable":true,"info":"User ID set in the UXCam database.","table":"session","features":["default","websdk"]},{"attribute":"uxcamuserid","title":"User name","type":"string","isSearchable":true,"info":"Filter by Custom user ID or UXCam user ID.","table":"appuser","features":["default","websdk"]}],"Location":[{"attribute":"user_device_city","title":"Last city of user","type":"string","isSearchable":true,"info":"City of the user\'s last session.","table":"appuser","features":["default","websdk"]},{"attribute":"user_device_country","title":"Last country of user","type":"string","isSearchable":true,"info":"Country of the user\'s last session.","table":"appuser","features":["default","websdk"]}],"App properties":[{"attribute":"user_app_version","title":"Last app version of user","type":"string","isSearchable":true,"info":"App version of the user\'s last session.","table":"appuser","features":["default"]},{"attribute":"user_device_id","title":"Last install ID of user","type":"string","isSearchable":false,"info":"Unique device identifier of user\'s last session.","webInfo":"Unique identifier specific to the user\'s browser.","table":"appuser","features":["default"]}],"Device properties":[{"attribute":"user_device_model","title":"Last device model of user","type":"string","isSearchable":true,"isValuePredefined":false,"info":"Device model of the user\'s last session.","table":"appuser","features":["default"]},{"attribute":"user_device_manufacturer","title":"Last device manufacturer of user","type":"string","isSearchable":true,"info":"Device manufacturer of the user\'s last session.","table":"appuser","features":["default"]},{"attribute":"user_device_class","title":"Last device class of user","type":"string","isSearchable":true,"info":"Device class of the user\'s last session determined by the device size.","table":"appuser","features":["default"]},{"attribute":"user_device_platform","title":"Last device platform of user","type":"device_platform","isSearchable":false,"info":"Device platform of the user\'s last session, either Android or iOS.","table":"appuser","features":["default"]},{"attribute":"user_device_type","title":"Last device type of user","type":"string","isSearchable":true,"info":"Device type of the user\'s last session.","table":"session","features":["websdk"]},{"attribute":"user_browser_name","title":"Last browser of user","type":"string","isSearchable":true,"info":"Browser\'s name of the user\'s last session.","table":"session","features":["websdk"]},{"attribute":"user_browser_version","title":"Last browser version of user","type":"string","isSearchable":true,"info":"Browser\'s version of the user\'s last session.","table":"session","features":["websdk"]},{"attribute":"user_device_os_name","title":"Last OS of user","type":"string","isSearchable":true,"info":"Device\'s operating system of the user\'s last session.","table":"session","features":["websdk"]},{"attribute":"user_device_os_version","title":"Last OS version of user","type":"string","isSearchable":true,"isValuePredefined":false,"info":"Device\'s operating system version of the user\'s last session.","table":"appuser","features":["default","websdk"]},{"attribute":"user_device_id","title":"Last install ID","type":"string","isSearchable":false,"info":"Unique device identifier of user\'s last session.","webInfo":"Unique identifier specific to the user\'s browser.","table":"appuser","features":["websdk"]}],"Users with issues":[{"attribute":"rageTap","title":"Rage tap","type":"list_of_string","isSearchable":false,"table":"event","info":"Quick, repeated taps indicating user frustration.","default":[{"attribute":"event_name","operator":"in","value":["rageTap"],"table":"event"}],"features":["default","websdk"]},{"attribute":"session_crashed","title":"Crash","type":"bool","isSearchable":false,"info":"Session which was ended by an unhandled exception.","table":"session","features":["default"]},{"attribute":"UI Freeze","title":"UI freeze","type":"list_of_string","isSearchable":false,"info":"Temporary UI unresponsiveness.","table":"event","default":[{"attribute":"event_name","operator":"in","value":["UI Freeze"],"table":"event"}],"features":["default"]}],"User engagement":[{"attribute":"user_first_seen_on","title":"First seen","type":"date","isSearchable":false,"info":"Date of the user\'s first session.","table":"appuser","features":["default","websdk"]},{"attribute":"user_last_seen_on","title":"Last seen","type":"date","isSearchable":false,"info":"Date of the user\'s last session.","table":"appuser","features":["default","websdk"]},{"attribute":"user_session_count","title":"Total session count of user","type":"integer","isSearchable":false,"info":"Total number of sessions a user had across all time.","table":"session","features":["default","websdk"]},{"attribute":"user_session_duration","title":"Total session duration of user","type":"float","unit":[{"attribute":"sec","title":"sec"}],"isSearchable":false,"info":"Total time spent by the user across all sessions of a user.","table":"appuser","features":["default","websdk"]},{"attribute":"user_event_count","title":"Total coded event count of user","type":"integer","isSearchable":false,"info":"Total number of coded events triggered by the user across all sessions.","table":"appuser","features":["default","websdk"]},{"attribute":"user_rage_gesture_count","title":"Total rage tap count of user","type":"integer","isSearchable":false,"info":"Total count of quick, repeated taps indicating user frustration across all session of a user.","table":"appuser","features":["default"]},{"attribute":"user_gesture_count","title":"Total gesture count of user","type":"integer","isSearchable":false,"info":"Total number of screen gestures performed by the user across all sessions of a user.","table":"appuser","features":["default"]},{"attribute":"user_responsive_gesture_count","title":"Total responsive gesture count of user","type":"integer","isSearchable":false,"info":"Total number of gestures by the user that triggered a response across all sessions of a user.","table":"appuser","features":["default"]},{"attribute":"user_unresponsive_gesture_count","title":"Total unresponsive gesture count of user","type":"integer","isSearchable":false,"info":"Total count of gestures by the user that did not trigger a response on the UI across all sessions of a user.","table":"appuser","features":["default"]}],"Acquisition":[{"attribute":"user_first_screen_name","title":"Initial landing page","type":"json","isSearchable":true,"info":"The first screen the user visited.","table":"session","features":["websdk"]},{"attribute":"user_first_referer","title":"Initial referrer","type":"json","isSearchable":true,"info":"The URL that linked to your site and initiated the users’ first session.","table":"session","features":["websdk"]},{"attribute":"user_first_referer_domain","title":"Initial referrer domain","type":"json","isSearchable":true,"info":"The domain that linked to your site and initiated the user’s first session.","table":"session","features":["websdk"]}]}')
  },
  40594:function(e){
    e.exports=JSON.parse('{"bool":[{"attribute":"True","title":"True","format":"boolean","display":true},{"attribute":"False","title":"False","format":"boolean","display":true}],"integer":[{"attribute":"in","title":"equals","format":"list_of_integer","display":true,"isSearchable":false},{"attribute":"not_in","title":"does not equal","format":"list_of_integer","display":true,"isSearchable":false},{"attribute":"greater","title":"greater than","format":"integer","display":true},{"attribute":"less","title":"less than","format":"integer","display":true},{"attribute":"greater_or_equal","title":"greater than or equal to","format":"integer","display":true},{"attribute":"less_or_equal","title":"less than or equal to","format":"integer","display":true}],"float":[{"attribute":"greater","title":"greater than","format":"float","display":true},{"attribute":"less","title":"smaller than","format":"float","display":true}],"string":[{"attribute":"in","title":"equals","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"not_in","title":"does not equal","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"contains","title":"contains","format":"string","display":true},{"attribute":"not_contains","title":"does not contain","format":"string","display":true}],"session_screen_string":[{"attribute":"equals_any_in","title":"equals","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"not_equals_any_in","title":"doesn\'t equal","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"contains_any_in","title":"contains","format":"string","display":true},{"attribute":"not_contains_any_in","title":"contains not","format":"string","display":true}],"list_of_string":[{"attribute":"has_any","title":"has any of","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"not_has_any","title":"has none of","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"has_all","title":"has all of","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"not_has_all","title":"has not all of","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"contains_any","title":"contains any of","format":"string","display":true,"isSearchable":false},{"attribute":"not_contains_any","title":"does not contain any of","format":"string","display":true,"isSearchable":false}],"list_of_label_string":[{"attribute":"has_any","title":"are any of","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"not_has_any","title":"are none of","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"has_all","title":"are all of","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"not_has_all","title":"are not all of","format":"list_of_string","display":true,"isSearchable":true}],"date":[{"attribute":"between","title":"between","format":"date_range","display":true},{"attribute":"on","title":"on","format":"date","display":true},{"attribute":"not_on","title":"not on","format":"date","display":true},{"attribute":"before","title":"before","format":"date","display":true},{"attribute":"after","title":"after","format":"date","display":true}],"json":[{"attribute":"in","title":"equals","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"not_in","title":"does not equal","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"greater","title":"greater than","format":"integer","display":true},{"attribute":"less","title":"less than","format":"integer","display":true},{"attribute":"contains","title":"contains","format":"string","display":true},{"attribute":"not_contains","title":"does not contain","format":"string","display":true}],"device_platform":[{"title":"Android","attribute":"1","format":"string","display":true},{"title":"iOS","attribute":"2","format":"string","display":true}],"gesture_position":[{"attribute":"equal","title":"equals","format":"integer","display":true,"isSearchable":true},{"attribute":"not_equal","title":"does not equal","format":"integer","display":true,"isSearchable":true},{"attribute":"greater","title":"greater than","format":"integer","display":true},{"attribute":"less","title":"less than","format":"integer","display":true},{"attribute":"between","title":"between","format":"integer","display":true}],"user_cohort":[{"attribute":"in","title":"is","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"not_in","title":"is not","format":"list_of_string","display":true,"isSearchable":true}],"screen_name_string":[{"attribute":"in","title":"equals","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"not_in","title":"does not equal","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"contains","title":"contains","format":"string","display":true},{"attribute":"not_contains","title":"does not contain","format":"string","display":true},{"attribute":"not_contains_any","title":"does not contain any of","format":"list_of_string","display":true},{"attribute":"contains_any","title":"contains any of","format":"list_of_string","display":true}],"event_name_json":[{"attribute":"in","title":"equals","format":"list_of_string","display":true,"isSearchable":true},{"attribute":"not_in","title":"does not equal","format":"list_of_string","display":true,"isSearchable":true}]}')
  }
}]);