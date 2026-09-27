"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5743],{
  96291:function(e,n,t){
    Object.defineProperty(n,Symbol.toStringTag,{
      value:"Module"
    });
    let r=t(91911),
    l=t(67294),
    o=t(46134);
    t(40310),
    t(31238),
    t(86435),
    t(78840),
    t(75708);
    let i={
      argumentDefinitions:[],
      kind:"Fragment",
      metadata:null,
      name:"ConversionChartGraphFragment",
      selections:[{
        alias:null,
        args:null,
        kind:"ScalarField",
        name:"graph",
        storageKey:null
      }],
      type:"ConversionGraphChartData",
      abstractKey:null
    };
    i.hash="3f186434c96ce14261363da33e2e437f";
    let a=l.memo(function(e){
      var n=e.data,
      t=e.w,
      l=e.h,
      a=e.isPreview,
      c=e.meta,
      s=e.shared,
      d=e.metric,
      u=e.printView,
      h=e.plotBandOptions,
      f=e.showAverage,
      A=e.previewComponentType,
      v=o.reactRelay.useFragment(i,n).graph;
      return r.jsx(o.ChartDataGraph,{
        graph:v,
        "data-element":"chart",
        printView:u,
        metric:d,
        shared:s,
        meta:c,
        isPreview:a,
        w:t,
        h:l,
        data:n,
        plotBandOptions:h,
        showAverage:f,
        previewComponentType:A
      })
    });
    n.default=a
  },
  56214:function(e,n,t){
    Object.defineProperties(n,{
      __esModule:{
        value:!0
      },
      [Symbol.toStringTag]:{
        value:"Module"
      }
    });
    let r=t(91911),
    l=t(46134),
    o=t(67294);
    function i(e,n){
      var t=Object.keys(e);
      if(Object.getOwnPropertySymbols){
        var r=Object.getOwnPropertySymbols(e);
        n&&(r=r.filter(function(n){
          return Object.getOwnPropertyDescriptor(e,n).enumerable
        })),
        t.push.apply(t,r)
      }
      return t
    }
    function a(e){
      for(var n=1;n<arguments.length;n++){
        var t=null!=arguments[n]?arguments[n]:{};
        n%2?i(Object(t),!0).forEach(function(n){
          l._defineProperty(e,n,t[n])
        }):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(n){
          Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))
        })
      }
      return e
    }
    t(40310),
    t(31238),
    t(86435),
    t(78840),
    t(75708);
    var c=l.node;
    let s=o.memo(({
      funnelData:e,
      onUpdate:n,
      onCreate:t,
      onCancel:i,
      isClone:a=!1,
      onError:c,
      existingFunnels:s=[],
      baseElemRef:d,
      backLabel:u,
      setChangesOnPage:h,
      initialChartData:f,
      onTitleDescUpdate:A,
      MassUserIdModal:v
    })=>{
      let{
        queryData:p
      }=l.useFunnelDataContext();
      return r.jsx(l.GlobalStyles,{
        children:r.jsxs(r.MassUserIdModalProvider,{
          MassUserIdModal:v,
          children:[r.jsx(r.Global,{
            styles:[l.WidgetBuilderComponents.globalStyles]
          }),r.jsx(l.ModalBase,{
            customStyles:r.css("					background:#fff;top:0;max-height:calc( 100vh - 60px );"),
            baseElem:d,
            preventScroll:!0,
            open:!0,
            zIndex:2,
            backgroundOpacity:.2,
            onClose:i,
            children:r.jsx(o.Suspense,{
              fallback:r.jsx(r.Spinner,{}),
              children:p?r.jsx(l.FunnelBuilder,{
                existingFunnels:s,
                funnelData:e,
                onUpdate:n,
                onCreate:t,
                onCancel:i,
                onError:c,
                isClone:a,
                backLabel:u,
                setChangesOnPage:h,
                initialChartData:f,
                onTitleDescUpdate:A
              }):null
            })
          })]
        })
      })
    });
    n.CustomSelect=r.CustomSelectNew,
    n.FunnelChart=l.FunnelChart,
    n.FunnelContext=l.index,
    n.FunnelDatePicker=l.index$1,
    n.getFunnelDisplayGrouping=l.getFunnelDisplayGrouping,
    n.getOldFormatLinksMap=l.getOldFormatLinksMap,
    n.mapFunnelDataToV2Req=l.mapFunnelDataToV2Req,
    n.mapFunnelDateRange=l.mapFunnelDateRange,
    n.useExternalFunnelMetrics=l.useExternalFunnelMetrics,
    n.useRenamedScreens=l.useRenamedScreens,
    n.default=s,
    n.useUpdateFunnelStepName=function(e,n){
      var t=l.useAppContext().appId,
      r=l.reactRelay.useMutation(c),
      i=l._slicedToArray(r,1)[0],
      s=null==n?void 0:n.onStepNameUpdate,
      d=o.useState({}),
      u=l._slicedToArray(d,2),
      h=u[0],
      f=u[1];
      return o.useEffect(function(){
        f({})
      },[e]),
      {
        updateStepName:o.useCallback(function(n,r){
          var o=r.trim()||void 0;
          f(function(e){
            return a(a({},e),{},l._defineProperty({},n,o||""))
          }),
          i({
            variables:{
              appId:t,
              funnelId:e,
              stepIndex:n,
              stepName:o||null
            },
            updater:function(e){
              e.getRoot().invalidateRecord()
            },
            onCompleted:function(){
              null==s||s(n,o||null)
            },
            onError:function(){
              f(function(e){
                var t=a({},e);
                return delete t[n],
                t
              })
            }
          })
        },[t,e,i,s]),
        stepNamesOverride:h,
        resetOverrides:o.useCallback(function(){
          f({})
        },[])
      }
    }
  },
  94912:function(e,n,t){
    Object.defineProperty(n,Symbol.toStringTag,{
      value:"Module"
    });
    let r=t(91911),
    l=t(67294),
    o=t(46134);
    t(40310),
    t(31238),
    t(86435),
    t(78840),
    t(75708);
    let i={
      argumentDefinitions:[],
      kind:"Fragment",
      metadata:null,
      name:"NormalChartGraphFragment",
      selections:[{
        alias:null,
        args:null,
        kind:"ScalarField",
        name:"graph",
        storageKey:null
      }],
      type:"GraphChartData",
      abstractKey:null
    };
    i.hash="b5d063e230661dcafd595b627d2bdbf2";
    let a=l.memo(function(e){
      var n=e.data,
      t=e.w,
      l=e.h,
      a=e.isPreview,
      c=e.meta,
      s=e.shared,
      d=e.metric,
      u=e.printView,
      h=e.plotBandOptions,
      f=e.showAverage,
      A=e.previewComponentType,
      v=o.reactRelay.useFragment(i,n).graph;
      return r.jsx(o.ChartDataGraph,{
        graph:v,
        "data-element":"chart",
        printView:u,
        metric:d,
        shared:s,
        meta:c,
        isPreview:a,
        w:t,
        h:l,
        data:n,
        plotBandOptions:h,
        showAverage:f,
        previewComponentType:A
      })
    });
    n.default=a
  },
  84395:function(e,n){
    Object.defineProperty(n,Symbol.toStringTag,{
      value:"Module"
    });
    let t="KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGU9c2VsZjtlLmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLHQ9Pnt0cnl7Y29uc3Qgcz10LmRhdGFbMF0se2NvbHVtbjpyLG9yZGVyOm99PXQuZGF0YVsxXSxuPXQuZGF0YVsyXS5zb3J0KChkLGwpPT57Y29uc3QgYT1kW3JdLGM9bFtyXTtyZXR1cm4obz09PSJhc2NlbmQiP2E+YzpjPmEpPzE6LTF9KTtlLnBvc3RNZXNzYWdlKFtzLG5dKX1jYXRjaChzKXtjb25zb2xlLmVycm9yKHMpfX0pfSkoKTsK",
    r="u">typeof window&&window.Blob&&new Blob([atob(t)],{
      type:"text/javascript;charset=utf-8"
    });
    n.default=function(e){
      let n;
      try{
        if(!(n=r&&(window.URL||window.webkitURL).createObjectURL(r)))throw"";
        let t=new Worker(n,{
          name:null==e?void 0:e.name
        });
        return t.addEventListener("error",()=>{
          (window.URL||window.webkitURL).revokeObjectURL(n)
        }),
        t
      }
      catch{
        return new Worker("data:application/javascript;base64,"+t,{
          name:null==e?void 0:e.name
        })
      }
      finally{
        n&&(window.URL||window.webkitURL).revokeObjectURL(n)
      }
    }
  },
  23791:function(e,n,t){
    t.d(n,{
      Z:function(){
        return v
      }
    });
    var r=t(85893),
    l=t(67294),
    o=t(19521),
    i=e=>(0,r.jsx)("svg",{
      width:11,
      height:11,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,r.jsx)("path",{
        d:"M5.333 10.667c-1.489 0-2.75-.517-3.783-1.55C.517 8.083 0 6.822 0 5.333c0-1.489.517-2.75 1.55-3.783S3.844 0 5.333 0c.767 0 1.5.158 2.2.475.7.316 1.3.769 1.8 1.358V0h1.334v4.667H6V3.333h2.8a3.892 3.892 0 0 0-1.458-1.466 3.951 3.951 0 0 0-2.009-.534c-1.11 0-2.055.39-2.833 1.167-.778.778-1.167 1.722-1.167 2.833 0 1.111.39 2.056 1.167 2.834.778.777 1.722 1.166 2.833 1.166.856 0 1.628-.244 2.317-.733A3.873 3.873 0 0 0 9.1 6.667h1.4A5.264 5.264 0 0 1 8.6 9.55a5.173 5.173 0 0 1-3.267 1.117Z",
        fill:"currentColor"
      })
    }),
    a=t(94839),
    c=t(79999),
    s=t(99252);
    (0,o.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
    let d=o.default.div.withConfig({
      componentId:"sc-b543b1cd-0"
    })(["display:flex;align-items:center;justify-content:center;width:16px;height:16px;color:",";transition:color 0.2s ease-in-out;svg{transition:transform 0.18s ease-out;","}"],c.r.colors.surface400.toString(),e=>{
      let{
        isActive:n
      }=e;
      return n&&(0,o.css)(["color:"," !important;"],c.r.colors.primary500.toString())
    }),
    u=o.default.span.withConfig({
      componentId:"sc-b543b1cd-1"
    })(["font-family:'Roboto',sans-serif;font-size:12px;font-weight:400;line-height:normal;color:",";white-space:nowrap;transition:color 0.2s ease-in-out;"],c.r.colors.surface400.toString()),
    h=o.default.div.withConfig({
      componentId:"sc-b543b1cd-2"
    })(["width:160px;height:100%;display:flex;align-items:center;justify-content:flex-start;background-color:transparent;"]),
    f=o.default.div.withConfig({
      componentId:"sc-b543b1cd-3"
    })(["display:flex;align-items:center;gap:6px;padding:8px;background-color:",";border-radius:6px;cursor:",";transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out;width:fit-content;svg{color:#000;}",""],c.r.colors.surface05.toString(),e=>{
      let{
        clickable:n,
        isActive:t
      }=e;
      return n&&!t?"pointer":"default"
    },e=>{
      let{
        clickable:n,
        isActive:t,
        isHovered:r
      }=e;
      return n&&!t&&r&&(0,o.css)(["background-color:",";","{color:",";}","{svg{color:",";transform:rotate(120deg);}}"],c.r.colors.primary10.toString(),u,c.r.colors.primary500.toString(),d,c.r.colors.primary500.toString())
    }),
    A=(e,n)=>{
      let[,t]=(0,l.useState)(0);
      return(0,l.useEffect)(()=>{
        if(n)return;
        let e=setInterval(()=>{
          t(e=>e+1)
        },6e4);
        return()=>clearInterval(e)
      },[n,e]),
      "Updated ".concat((0,s.$x)(e))
    };
    var v=(0,l.memo)(e=>{
      let{
        hoverText:n="Refresh data",
        activeText:t="Refreshing",
        isActive:o=!1,
        onClick:c,
        style:s,
        isRefreshing:v=!1,
        lastUpdate:p
      }=e,
      [g,m]=(0,l.useState)(!1),
      x=o||v,
      w=A(p,x),
      j=x?t:g&&c?n:w;
      return(0,r.jsx)(h,{
        onMouseEnter:()=>m(!0),
        onMouseLeave:()=>m(!1),
        style:s,
        children:(0,r.jsxs)(f,{
          clickable:!!c,
          isActive:x,
          isHovered:g,
          onClick:x?void 0:c,
          children:[(0,r.jsx)(d,{
            isActive:x,
            children:x?(0,r.jsx)(a.Z,{
              style:{
                fontSize:"12px"
              }
            }):(0,r.jsx)(i,{})
          }),(0,r.jsx)(u,{
            children:j
          })]
        })
      })
    })
  },
  48745:function(e,n,t){
    t.r(n),
    t.d(n,{
      default:function(){
        return tD
      }
    });
    var r=t(85893),
    l=t(67294),
    o=t(19521),
    i=t(79999),
    a=t(12810),
    c=t(41371),
    s=t(48203),
    d=t(11163),
    u=t.n(d),
    h=t(41664),
    f=t.n(h),
    A=e=>(0,r.jsxs)("svg",{
      width:14,
      height:14,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,r.jsx)("path",{
        d:"M7 4.602v2.4m0 0v2.4m0-2.4h2.4m-2.4 0H4.6",
        stroke:"currentColor",
        strokeWidth:1.5,
        strokeLinecap:"round"
      }),(0,r.jsx)("path",{
        d:"M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
        stroke:"currentColor",
        strokeWidth:1.5
      })]
    }),
    v=e=>(0,r.jsxs)("svg",{
      width:25,
      height:25,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,r.jsx)("rect",{
        x:.174,
        y:.289,
        width:24,
        height:24,
        rx:12,
        fill:"#fff"
      }),(0,r.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M16.486 4.64a.562.562 0 0 1 .54-.43c.255 0 .477.177.541.43.247.968.517 1.562.92 2.002.407.443 1.002.788 2.016 1.138a.574.574 0 0 1 .381.545.574.574 0 0 1-.38.546c-1.015.35-1.61.695-2.016 1.137-.404.44-.674 1.035-.92 2.003a.562.562 0 0 1-.541.429.562.562 0 0 1-.54-.43c-.247-.967-.517-1.561-.921-2.002-.406-.442-1.001-.787-2.015-1.137a.574.574 0 0 1-.382-.546c0-.247.154-.466.382-.545 1.014-.35 1.609-.695 2.015-1.138.404-.44.674-1.034.92-2.002Zm-7.16 3.204a.562.562 0 0 1 .541-.43c.255 0 .477.177.541.43.444 1.751.946 2.895 1.736 3.758.792.866 1.925 1.51 3.75 2.142.227.079.38.298.38.545a.574.574 0 0 1-.38.545s-2.958 1.276-3.75 2.142c-.79.864-1.292 2.007-1.736 3.758a.562.562 0 0 1-.54.43.562.562 0 0 1-.541-.43c-.444-1.751-.947-2.895-1.736-3.758-.792-.866-1.926-1.51-3.75-2.142a.574.574 0 0 1-.38-.545c0-.247.153-.466.38-.545 1.824-.633 2.958-1.276 3.75-2.142.79-.863 1.292-2.007 1.736-3.758Z",
        fill:"currentColor"
      })]
    }),
    p=t(88767),
    g=t(14416),
    m=t(90745),
    x=t(98777);
    let w=async(e,n)=>{
      let{
        data:t
      }=await x.be.post("".concat("https://pythonapi-prod.uxcam.com/v2","/funnels/list"),{
        appid:e,
        userid:n
      },{
        withCredentials:!0
      }),
      {
        funneList:r,
        funnelLimit:l
      }=t;
      return{
        funnelList:r,
        funnelLimit:l
      }
    },
    j=e=>["FUNNEL_LIST",e],
    b=async(e,n,t)=>{
      let{
        data:r
      }=await x.be.post("".concat("https://pythonapi-prod.uxcam.com/v2","/funnels/recently_viewed"),{
        appid:e,
        userid:n,
        funnel_id:t
      },{
        withCredentials:!0
      });
      return r
    },
    y=async e=>{
      let{
        appId:n,
        funnelId:t,
        pin:r,
        userId:l
      }=e,
      {
        data:o
      }=await x.be.post("".concat("https://pythonapi-prod.uxcam.com/v2","/funnels/pin_funnel"),{
        appid:n,
        funnel_id:t,
        is_pinned:r,
        user_id:l
      },{
        withCredentials:!0
      });
      return o
    },
    Z=async function(e,n){
      let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];
      if(!e)return null;
      let{
        data:r
      }=await x.be.post("".concat("https://pythonapi-prod.uxcam.com/v2","/funnels/load"),{
        appid:n,
        funnel_id:e,
        force_update:t
      },{
        withCredentials:!0
      });
      return r
    },
    B=e=>["FETCH_FUNNEL",e],
    C=function(e){
      let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",
      t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",
      r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";
      return["SUGGESTION_ATTRIBUTE_VALUES",e,n,t,r]
    },
    D=async function(e){
      let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",
      t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",
      r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";
      if(!t||!n)return{
        data:[]
      };
      try{
        let{
          data:l
        }=await x.be.post("".concat("https://pythonapi-prod.uxcam.com","/search_attribute"),{
          appid:e,
          table:n,
          attribute:t,
          dateRange:{
            from:new Date("2022-03-14T23:00:00.000Z").toISOString(),
            to:new Date().toISOString()
          },
          search:r,
          dropdownLimit:20,
          filters:[]
        },{
          withCredentials:!0
        });
        return l
      }
      catch(e){
        return console.error(e),
        {
          data:[]
        }
      }
    },
    E=async(e,n)=>{
      let{
        data:t
      }=await x.be.post("".concat("https://pythonapi-prod.uxcam.com/v2","/funnels/delete"),{
        appid:n,
        funnel_id:e
      },{
        withCredentials:!0
      });
      return t
    },
    M=function(e){
      let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";
      return["FUNNEL_SUGGESTIONS",e,n]
    },
    k=async function(e){
      let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";
      if(!n)return{
        suggestions:[]
      };
      let{
        data:t
      }=await x.be.post("".concat("https://pythonapi-prod.uxcam.com/v2","/insights/funnel-suggestions"),{
        appid:e,
        last_step_value:n,
        include_step_type:["screen","event"]
      },{
        withCredentials:!0
      });
      return t
    };
    var S=t(30663);
    let O=l.createContext({
      trackEvent:()=>null
    }),
    V=()=>l.useContext(O),
    Q=l.memo(e=>{
      let{
        children:n,
        version:t
      }=e,
      o=(0,g.I0)(),
      i=l.useCallback(function(e){
        let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};
        o((0,S.CW)(null,{
          eventName:e,
          track_type:"event",
          eventProperty:{
            ...n,
            version:t
          }
        }))
      },[o,t]),
      a=l.useMemo(()=>({
        trackEvent:i
      }),[i]);
      return(0,r.jsx)(O.Provider,{
        value:a,
        children:n
      })
    }),
    T=l.createContext({
      items:[],
      refreshFunnelList:()=>Promise.resolve(),
      limitReached:!1,
      funnelLimit:0,
      funnelsDisabled:!1,
      disabledMessage:"",
      isViewer:!1,
      pinFunnelItem:()=>Promise.resolve(),
      isPinningInFlight:!1
    }),
    z=l.memo(e=>{
      let{
        children:n
      }=e,
      t=(0,g.v9)(e=>e.currentOrgReducer),
      o=(0,g.v9)(e=>e.profileReducer),
      {
        _id:i
      }=o,
      {
        isLoggedInAsAdminGuest:a
      }=(0,m.Z)(),
      c=t.planFeature,
      s=null==c?void 0:c.funnelFeature,
      u=!s,
      {
        trackEvent:h
      }=V(),
      {
        appId:f
      }=(0,d.useRouter)().query,
      A=j(f),
      {
        data:v,
        refetch:x
      }=(0,p.useQuery)({
        queryKey:A,
        queryFn:()=>w(f,i),
        suspense:!0
      }),
      b=(0,p.useQueryClient)(),
      {
        mutate:Z,
        isLoading:B
      }=(0,p.useMutation)({
        mutationFn:e=>y({
          ...e,
          appId:f,
          userId:i
        }),
        onMutate:async e=>{
          let n=b.getQueryData(A);
          return b.setQueryData(A,n=>{
            if(!n)return n;
            let t=n.funnelList.map(n=>n.funnel_id===e.funnelId?{
              ...n,
              is_pinned:e.pin
            }:n);
            return{
              ...n,
              funnelList:t
            }
          }),
          {
            previousList:n,
            updatedFunnelItem:e
          }
        },
        onError:(e,n,t)=>{
          b.setQueryData(A,null==t?void 0:t.previousList)
        }
      }),
      C=l.useMemo(()=>{
        var e;
        return((null==v?void 0:null===(e=v.funnelList)||void 0===e?void 0:e.length)||0)>=((null==v?void 0:v.funnelLimit)||0)
      },[v]),
      D=l.useMemo(()=>(null==v?void 0:v.funnelLimit)||0,[v]),
      E=l.useMemo(()=>{
        var e,
        n,
        r;
        let l=null==o?void 0:null===(e=o.organization)||void 0===e?void 0:e.find(e=>e.$oid===t.orgId);
        return null==l?void 0:null===(r=l.apps)||void 0===r?void 0:null===(n=r.find(e=>e.id===f))||void 0===n?void 0:n.role
      },[o,t.orgId,f]),
      M=a||"viewer"===E,
      k=l.useMemo(()=>s?C?"A maximum number of ".concat(D," funnels are allowed per app. Please delete an existing funnel to create a new one."):M?"You don't have permission to perform this action.":"":"Funnels are not available on your current plan. Please upgrade to use this feature.",[s,C,D,M]),
      S=l.useCallback(()=>(b.invalidateQueries(A),x()),[b,A,x]),
      O=l.useCallback(e=>{
        let{
          funnelId:n,
          pin:t,
          name:r
        }=e;
        return Z({
          funnelId:n,
          pin:t
        },{
          onSuccess:e=>{
            (null==e?void 0:e.is_pinned)?h("wa_add_feature_to_favorites",{
              feature_type:"funnel",
              feature_name:r
            }):h("wa_remove_feature_from_favorites",{
              feature_type:"funnel",
              feature_name:r
            })
          }
        })
      },[Z,h]),
      Q=l.useMemo(()=>({
        items:(null==v?void 0:v.funnelList)||[],
        funnelLimit:D,
        refreshFunnelList:S,
        limitReached:C,
        funnelsDisabled:u,
        disabledMessage:k,
        isViewer:M,
        pinFunnelItem:O,
        isPinningInFlight:B
      }),[v,S,C,u,k,D,M,O,B]);
      return(0,r.jsx)(T.Provider,{
        value:Q,
        children:n
      })
    }),
    F=()=>l.useContext(T),
    _=l.createContext({
      funnelId:null,
      funnel:null,
      loading:!1,
      updateInProgress:!1,
      setUpdateInProgress:()=>null,
      updateFunnelCache:()=>null,
      isBuilderOpen:!1,
      setIsBuilderOpen:()=>null,
      showDropOff:!0,
      setShowDropOff:()=>null
    }),
    H=()=>l.useContext(_),
    P=l.memo(e=>{
      let{
        onLoading:n,
        onFunnelLoaded:t
      }=e,
      {
        appId:r
      }=(0,d.useRouter)().query,
      {
        _id:o
      }=(0,g.v9)(e=>e.profileReducer),
      {
        funnelId:i
      }=H(),
      a=B(i),
      {
        data:c,
        isLoading:s
      }=(0,p.useQuery)({
        queryKey:a,
        queryFn:()=>Z(i,r),
        suspense:!1
      });
      return l.useEffect(()=>{
        i&&r&&o&&b(r,o,i)
      },[i,r,o]),
      l.useEffect(()=>{
        n(s)
      },[s,n]),
      l.useEffect(()=>{
        c&&t(c)
      },[c,t]),
      null
    }),
    I=l.memo(e=>{
      let{
        children:n
      }=e,
      {
        query:t
      }=(0,d.useRouter)(),
      o=l.useRef(t);
      l.useEffect(()=>{
        o.current=t
      },[t]);
      let{
        funnelId:i=null,
        appId:a
      }=t,
      {
        items:c
      }=F(),
      s=l.useMemo(()=>{
        let e={};
        return c.forEach(n=>{
          e[n.funnel_id]=!0
        }),
        e
      },[c]),
      [h,f]=l.useState(!1),
      [A,v]=l.useState(!1),
      [g,m]=l.useState(null),
      [x,w]=l.useState(!1),
      [j,b]=l.useState(!0),
      y=(0,p.useQueryClient)(),
      Z=l.useCallback(e=>{
        let n=B(e.funnel_id);
        y.setQueryData(n,e)
      },[y]),
      C=l.useMemo(()=>({
        funnel:g,
        loading:h,
        funnelId:i,
        updateFunnelCache:Z,
        isBuilderOpen:x,
        setIsBuilderOpen:w,
        showDropOff:j,
        setShowDropOff:b,
        updateInProgress:A,
        setUpdateInProgress:v
      }),[g,h,i,Z,x,j,A,v]),
      D=l.useMemo(()=>i&&!s[i],[i,s]);
      return l.useEffect(()=>{
        if(D){
          var e;
          let n=new URLSearchParams(((null===(e=o.current)||void 0===e?void 0:e.url)||"?").split("?")[1]||"");
          n.delete("appId"),
          n.delete("parentType"),
          n.delete("funnelId");
          let t=n.toString(),
          r="create"===i,
          l=r?"#create":"";
          if(r){
            if(c.length){
              let e=c[0].funnel_id;
              u().push("/integration?appId=".concat(a,"&parentType=funnels&funnelId=").concat(e).concat(l).concat(t?"&".concat(t):""),"/app/".concat(a,"/funnels/").concat(e).concat(t?"?".concat(t):"").concat(l));
              return
            }
            u().push("/integration?appId=".concat(a,"&parentType=funnels").concat(t?"&".concat(t):"","#create"),"/app/".concat(a,"/funnels").concat(t?"?".concat(t):"","#create"));
            return
          }
          if(c.length){
            let e=c[0].funnel_id;
            u().push("/integration?appId=".concat(a,"&parentType=funnels&funnelId=").concat(e),"/app/".concat(a,"/funnels/").concat(e));
            return
          }
          u().push("/integration?appId=".concat(a,"&parentType=funnels"),"/app/".concat(a,"/funnels"));
          return
        }
        if(!i&&c.length>0){
          let e=c[0].funnel_id;
          u().push("/integration?appId=".concat(a,"&parentType=funnels&funnelId=").concat(e),"/app/".concat(a,"/funnels/").concat(e))
        }
      },[D,c,a,i,s]),
      (0,r.jsxs)(_.Provider,{
        value:C,
        children:[i&&!D?(0,r.jsx)(P,{
          onLoading:f,
          onFunnelLoaded:m
        }):null,n]
      })
    });
    var N=e=>(0,r.jsxs)("svg",{
      width:25,
      height:25,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,r.jsx)("rect",{
        x:.191,
        y:.452,
        width:24,
        height:24,
        rx:12,
        fill:"#F2F2F2"
      }),(0,r.jsx)("path",{
        d:"M7.579 5.533A2.306 2.306 0 0 0 5.272 7.84v2.617c.286-.136.597-.231.923-.278V7.839a1.384 1.384 0 0 1 1.384-1.383h6.457a1.384 1.384 0 0 1 1.384 1.383v6.458a1.384 1.384 0 0 1-1.384 1.384h-.461v.922h.461a2.306 2.306 0 0 0 2.306-2.306v-.923l2.214 1.66a.923.923 0 0 0 1.476-.737V7.839a.922.922 0 0 0-1.476-.738l-2.214 1.66V7.84a2.306 2.306 0 0 0-2.306-2.306H7.58Zm8.763 4.382 2.768-2.076v6.458l-2.768-2.076V9.915Z",
        fill:"#161E35"
      }),(0,r.jsx)("path",{
        d:"M4.35 13.375a2.306 2.306 0 0 1 2.307-2.307h3.69a2.306 2.306 0 0 1 2.306 2.307v3.69a2.306 2.306 0 0 1-2.306 2.306h-3.69a2.306 2.306 0 0 1-2.306-2.306v-3.69Zm3.709.031a.417.417 0 0 0-.412-.034.47.47 0 0 0-.278.429v2.836a.463.463 0 0 0 .28.432.415.415 0 0 0 .417-.04l2.118-1.446a.434.434 0 0 0 .15-.17.495.495 0 0 0-.002-.45.449.449 0 0 0-.155-.168l-2.118-1.389Z",
        fill:"#161E35"
      })]
    }),
    q=e=>(0,r.jsxs)("svg",{
      width:25,
      height:25,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,r.jsx)("rect",{
        x:.674,
        y:.452,
        width:24,
        height:24,
        rx:12,
        fill:"#F2F2F2"
      }),(0,r.jsx)("path",{
        d:"M18.137 15.932a5.277 5.277 0 0 0-1.512-1.057 3.492 3.492 0 0 0 1.299-2.721c0-1.94-1.617-3.53-3.556-3.5a3.502 3.502 0 0 0-2.15 6.22 5.269 5.269 0 0 0-1.511 1.058A5.216 5.216 0 0 0 9.174 19.5a.14.14 0 0 0 .14.144h.98a.14.14 0 0 0 .14-.135 3.956 3.956 0 0 1 1.167-2.686 3.967 3.967 0 0 1 2.823-1.17c1.065 0 2.068.415 2.822 1.17a3.971 3.971 0 0 1 1.168 2.686.14.14 0 0 0 .14.135h.98a.142.142 0 0 0 .1-.043.139.139 0 0 0 .04-.1 5.204 5.204 0 0 0-1.537-3.57Zm-3.713-1.538a2.22 2.22 0 0 1-1.584-.656 2.222 2.222 0 0 1-.656-1.607A2.243 2.243 0 0 1 14.4 9.914a2.253 2.253 0 0 1 1.592.64c.434.426.672.994.672 1.6 0 .598-.232 1.16-.656 1.584a2.23 2.23 0 0 1-1.585.656Zm-4.384-1.778a4.474 4.474 0 0 1 .05-1.276.14.14 0 0 0-.078-.154 2.212 2.212 0 0 1-.646-.44 2.231 2.231 0 0 1-.677-1.669 2.228 2.228 0 0 1 .635-1.498 2.228 2.228 0 0 1 1.631-.677 2.237 2.237 0 0 1 1.862 1.03.14.14 0 0 0 .163.055c.308-.107.633-.182.968-.217a.14.14 0 0 0 .11-.203 3.506 3.506 0 0 0-3.075-1.923c-1.94-.03-3.557 1.56-3.557 3.498 0 1.1.505 2.08 1.298 2.721A5.26 5.26 0 0 0 7.21 12.92a5.204 5.204 0 0 0-1.536 3.57.14.14 0 0 0 .14.144h.982a.14.14 0 0 0 .14-.135 3.955 3.955 0 0 1 1.167-2.686 3.951 3.951 0 0 1 1.832-1.045.14.14 0 0 0 .105-.152Z",
        fill:"#000"
      })]
    }),
    X=t(7906),
    L=e=>(0,r.jsx)("svg",{
      width:14,
      height:14,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,r.jsx)("path",{
        d:"m7.827 1.008.002.005 1.49 2.855.112.213.236.046 3.064.6c.726.142 1.028 1.066.513 1.636l-2.156 2.38-.153.17.028.228.403 3.247c.097.783-.678 1.34-1.342 1.011l-2.802-1.39L7 11.9l-.222.11-2.802 1.39c-.664.329-1.44-.228-1.342-1.011l.403-3.247.029-.228-.154-.17-2.156-2.38c-.515-.57-.213-1.494.513-1.636l3.064-.6.236-.046.111-.213 1.49-2.855.003-.005a.926.926 0 0 1 1.312-.37l.19-.31-.19.31c.146.089.264.217.342.37Z",
        stroke:"#E8E8EB"
      })
    });
    let W=o.default.button.withConfig({
      componentId:"sc-6b61cf24-0"
    })(["margin:0;padding:0;box-shadow:none;border:none;outline:none;display:flex;justify-content:center;align-items:center;background:none;width:14px;height:14px;cursor:pointer;&:disabled{cursor:progress;}&:hover{svg{path{stroke:rgba(254,214,77,0.5);fill:rgba(254,214,77,0.5);}}}svg{animation:",";path{stroke:",";fill:",";}}@keyframes blink{50%{transform:scale(1.3);}100%{transform:scale(1);}}"],e=>{
      let{
        active:n
      }=e;
      return n?"blink 0.5s linear 1":"none"
    },e=>{
      let{
        active:n
      }=e;
      return n?"#FED64D !important":"#E8E8EB"
    },e=>{
      let{
        active:n
      }=e;
      return n?"#FED64D !important":"none"
    });
    var R=l.memo(e=>{
      let{
        active:n,
        ...t
      }=e;
      return(0,r.jsx)(W,{
        active:n||!1,
        type:"button",
        ...t,
        children:(0,r.jsx)(s.Z,{
          title:n?"Remove from Favorites":"Add to Favorites",
          placement:"right",
          children:(0,r.jsx)(L,{})
        })
      })
    });
    let U=o.default.div.withConfig({
      componentId:"sc-2eb52625-0"
    })(["max-height:420px;overflow-y:auto;padding:0 12px;&::-webkit-scrollbar{width:4px;}&::-webkit-scrollbar-thumb{background:",";border-radius:4px;}"],i.r.colors.surface200.toString()),
    G=o.default.ul.withConfig({
      componentId:"sc-2eb52625-1"
    })(["display:flex;flex-direction:column;gap:4px;list-style:none;padding:0;margin:0;h4{font-size:13px;font-weight:500;line-height:20px;color:#161E35;margin:0;padding:8px 0 4px;}"]),
    Y=o.default.li.withConfig({
      componentId:"sc-2eb52625-2"
    })(["display:flex;align-items:center;height:32px;padding:0 8px 0 10px;border-radius:4px;cursor:pointer;font-size:13px;color:#161E35;background:",";&:hover{background:",";}"],e=>{
      let{
        isSelected:n
      }=e;
      return n?"#DFEAFF":"transparent"
    },i.r.colors.primary10.toString()),
    K=o.default.span.withConfig({
      componentId:"sc-2eb52625-3"
    })(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;min-width:0;"]),
    J=o.default.div.withConfig({
      componentId:"sc-2eb52625-4"
    })(["display:flex;align-items:center;margin-left:auto;padding-left:8px;"]),
    $=o.default.span.withConfig({
      componentId:"sc-2eb52625-5"
    })(["font-size:11px;color:#8A99B1;white-space:nowrap;margin-left:12px;flex-shrink:0;"]),
    ee=o.default.div.withConfig({
      componentId:"sc-2eb52625-6"
    })(["height:40px;display:flex;justify-content:center;align-items:center;color:",";font-size:12px;"],i.r.colors.surface400.toString()),
    en=o.default.span.withConfig({
      componentId:"sc-2eb52625-7"
    })(["display:flex;align-items:center;margin-right:8px;flex-shrink:0;"]);
    var et=l.memo(function(e){
      let{
        categories:n,
        renderItem:t,
        emptyMessage:l="No results found"
      }=e;
      return 0===n.length?(0,r.jsx)(ee,{
        children:l
      }):(0,r.jsx)(U,{
        children:n.map(e=>{
          let{
            key:n,
            label:l,
            items:o
          }=e;
          return(0,r.jsxs)(G,{
            children:[l?(0,r.jsx)("h4",{
              children:l
            }):null,o.map(e=>t(e,n))]
          },n)
        })
      })
    }),
    er=l.memo(e=>{
      let{
        title:n,
        isSelected:t,
        onClick:o,
        renderActions:i,
        icon:a
      }=e,
      [c,d]=l.useState(!1),
      u=l.useRef(null),
      [h,f]=l.useState(!1);
      l.useEffect(()=>{
        u.current&&f(u.current.scrollWidth>u.current.clientWidth)
      },[n]);
      let A=(0,r.jsx)(K,{
        ref:u,
        children:n
      });
      return(0,r.jsxs)(Y,{
        isSelected:t,
        onClick:o,
        onMouseEnter:()=>d(!0),
        onMouseLeave:()=>d(!1),
        children:[a?(0,r.jsx)(en,{
          children:a
        }):null,h?(0,r.jsx)(s.Z,{
          title:n,
          placement:"right",
          children:A
        }):A,null==i?void 0:i(c)]
      })
    });
    let el=e=>{
      if(!e)return null;
      let n=e.endsWith("Z")?e:"".concat(e,"Z"),
      t=Math.floor((Date.now()-new Date(n).getTime())/1e3);
      if(t<60)return"- just now";
      let r=Math.floor(t/60);
      if(r<60)return"- ".concat(r,"m ago");
      let l=Math.floor(r/60);
      if(l<24)return"- ".concat(l,"h ago");
      let o=Math.floor(l/24);
      if(o<7)return"- ".concat(o,"d ago");
      let i=Math.floor(o/7);
      if(i<5)return"- ".concat(i,"w ago");
      let a=Math.floor(o/30);
      return a<12?"- ".concat(a,"mo ago"):"- ".concat(Math.floor(o/365),"y ago")
    },
    eo=o.default.button.withConfig({
      componentId:"sc-b331881a-0"
    })(["display:flex;justify-content:center;align-items:center;gap:4px;background-color:",";color:",";border:none;height:32px;width:-webkit-fill-available;cursor:pointer;font-size:12px !important;border-radius:6px;transition:0.2s background-color ease-in-out;font-family:Roboto,sans-serif;svg{path{stroke:"," !important;}}&:hover{background-color:",";}&:disabled{background-color:",";color:",";cursor:not-allowed;pointer-events:none;svg{path{stroke:"," !important;}}}"],i.r.colors.primary05.toString(),i.r.colors.primary500.toString(),i.r.colors.primary500.toString(),i.r.colors.primary10.toString(),i.r.colors.surface05.toString(),i.r.colors.surface200.toString(),i.r.colors.surface200.toString()),
    ei=["recently_viewed","my_funnels","team_funnels"],
    ea={
      recently_viewed:"Recently viewed",
      my_funnels:"My funnels",
      team_funnels:"Team funnels"
    };
    var ec=l.memo(e=>{
      let{
        funnelId:n,
        funnels:t,
        onSelect:o,
        disabled:i,
        createDisabled:a
      }=e,
      [c,d]=l.useState(!1),
      [u,h]=l.useState(""),
      v=l.useRef(null),
      {
        trackEvent:p
      }=V(),
      g=l.useRef(),
      m=l.useCallback(e=>{
        clearTimeout(g.current),
        e&&0!==e.length&&(g.current=setTimeout(()=>{
          p("wa_search_report")
        },2e3))
      },[p]),
      [x,w]=l.useState(!1),
      {
        pinFunnelItem:j,
        isPinningInFlight:b,
        refreshFunnelList:y,
        disabledMessage:Z
      }=F(),
      B=l.useCallback(e=>{
        h(e.target.value),
        m(e.target.value)
      },[m]),
      C=l.useCallback((e,n,t)=>r=>{
        r.stopPropagation(),
        w(!0),
        j({
          funnelId:e,
          pin:!n,
          name:t
        })
      },[j]),
      D=l.useCallback(e=>()=>{
        o(e),
        d(!1),
        w(!0)
      },[o]),
      E=l.useMemo(()=>{
        let e=(null==u?void 0:u.toLowerCase())||"",
        r=t.filter(n=>n.name.toLowerCase().includes(e));
        return ei.map(e=>{
          let t=r.filter(n=>{
            var t;
            return null===(t=n.categories)||void 0===t?void 0:t.includes(e)
          });
          return("recently_viewed"===e&&(t=t.filter(e=>e.funnel_id!==n).slice(0,3)),("my_funnels"===e||"team_funnels"===e)&&(t=[...t].sort((e,n)=>{
            if(e.is_pinned!==n.is_pinned)return e.is_pinned?-1:1;
            let t=e.last_updated_on?new Date(e.last_updated_on).getTime():0;
            return(n.last_updated_on?new Date(n.last_updated_on).getTime():0)-t
          })),0===t.length)?null:{
            key:e,
            label:ea[e],
            items:t
          }
        }).filter(Boolean)
      },[t,u,n]),
      M=l.useMemo(()=>t.find(e=>e.funnel_id===n),[t,n]),
      k=l.useMemo(()=>(0,r.jsxs)(X.hF,{
        layoutVariant:"3tier",
        paddingVariant:"vertical",
        children:[(0,r.jsx)(X.Mj,{
          ref:v,
          value:u,
          onChange:B
        }),(0,r.jsx)(et,{
          categories:E,
          renderItem:(e,t)=>(0,r.jsx)(er,{
            title:e.name,
            isSelected:"recently_viewed"!==t&&e.funnel_id===n,
            onClick:D(e.funnel_id),
            icon:"session"===e.funnel_type?(0,r.jsx)(N,{}):(0,r.jsx)(q,{}),
            renderActions:n=>(0,r.jsxs)(r.Fragment,{
              children:["recently_viewed"===t?(0,r.jsx)($,{
                children:el(e.recently_viewed_date)
              }):null,(0,r.jsx)(J,{
                style:{
                  visibility:e.is_pinned||n?"visible":"hidden"
                },
                children:(0,r.jsx)(R,{
                  active:e.is_pinned,
                  disabled:b,
                  onClick:C(e.funnel_id,e.is_pinned,e.name)
                })
              })]
            })
          },"".concat(t,"-").concat(e.funnel_id))
        }),(0,r.jsx)(s.Z,{
          title:a?Z:void 0,
          children:(0,r.jsx)("span",{
            style:{
              display:"block",
              margin:"4px 14px 0 12px"
            },
            children:a?(0,r.jsxs)(eo,{
              disabled:!0,
              type:"button",
              children:[(0,r.jsx)(A,{}),"New funnel"]
            }):(0,r.jsx)(f(),{
              href:"#create",
              children:(0,r.jsxs)(eo,{
                type:"button",
                onClick:()=>d(!1),
                children:[(0,r.jsx)(A,{}),"New funnel"]
              })
            })
          })
        })]
      }),[E,n,D,C,b,B,u,a,Z]);
      return(0,r.jsx)(X.Fo,{
        children:(0,r.jsx)(X.kF,{
          trigger:["click"],
          overlay:k,
          visible:c,
          onVisibleChange:e=>{
            d(e),
            e?(y(),setTimeout(()=>{
              var e;
              return null===(e=v.current)||void 0===e?void 0:e.focus()
            },10)):(h(""),x&&(y(),w(!1)))
          },
          destroyPopupOnHide:!0,
          disabled:i,
          selectorProps:{
            selectedValue:(null==M?void 0:M.name)||"Untitled Funnel",
            fixedWidth:350
          }
        })
      })
    });
    let es=o.default.div.withConfig({
      componentId:"sc-e767ec53-0"
    })(["display:flex;justify-content:space-between;position:sticky;top:0;height:60px;min-height:60px;width:100%;background:#fff;padding:",";z-index:10;"],i.r.spacing(0,2)),
    ed=o.default.div.withConfig({
      componentId:"sc-e767ec53-1"
    })(["display:flex;align-items:center;gap:",';opacity:1;visibility:visible;transition:0.2s all ease-in-out;&[aria-hidden="true"]{opacity:0;visibility:hidden;}'],i.r.spacing(1)),
    eu=o.default.div.withConfig({
      componentId:"sc-e767ec53-2"
    })(["display:flex;align-items:center;"]),
    eh=o.default.button.withConfig({
      componentId:"sc-e767ec53-3"
    })(["display:inline-flex;align-items:center;justify-content:center;height:32px;padding:",";border-radius:6px;background:",";border:none;color:#fff;font-weight:500;font-size:",";gap:6px;transition:0.2s all ease-in-out;cursor:pointer;&:disabled{background:",";color:",";pointer-events:none;}&:hover{background:",";}&:active{background:",";}"],i.r.spacing(0,1.5),i.r.colors.primary500.toString(),i.r.fontSize(1.4),i.r.colors.surface05.toString(),i.r.colors.surface200.toString(),i.r.colors.primary600.toString(),i.r.colors.primary700.toString()),
    ef=o.default.button.withConfig({
      componentId:"sc-e767ec53-4"
    })(["display:flex;align-items:center;justify-content:center;gap:6px;border-radius:6px;height:32px;font-weight:500;background:",";color:",";padding:",";transition:0.2s all ease-in-out;border:none;cursor:pointer;&:hover{background:",";}&:disabled{background:",";color:",";pointer-events:none;}"],i.r.colors.primary05.toString(),i.r.colors.primary500.toString(),i.r.spacing(0,1.5),i.r.colors.primary100.toString(),i.r.colors.surface05.toString(),i.r.colors.surface200.toString()),
    eA=(0,o.default)(v).withConfig({
      componentId:"sc-e767ec53-5"
    })(["transform:scale( 0.64 );"]),
    ev=[{
      funnel_id:"untitled",
      name:"Untitled funnel"
    }];
    var ep=l.memo(()=>{
      let{
        query:{
          appId:e
        },
        asPath:n
      }=(0,d.useRouter)(),
      {
        items:t,
        limitReached:o,
        disabledMessage:i,
        funnelsDisabled:a,
        isViewer:c
      }=F(),
      {
        funnelId:h,
        isBuilderOpen:v
      }=H(),
      p=l.useMemo(()=>t.find(e=>e.funnel_id===h),[t,h]),
      g=l.useCallback(n=>{
        u().push("/integration?appId=".concat(e,"&parentType=funnels&funnelId=").concat(n),"/app/".concat(e,"/funnels/").concat(n))
      },[e]),
      m=l.useMemo(()=>n.split("#")[1],[n]),
      x=l.useMemo(()=>"create"===m||"clone"===m,[m]),
      w=l.useMemo(()=>(!t.length||x)&&v?ev:t,[t,v,x]),
      j=l.useMemo(()=>(!t.length||x)&&v?"untitled":null==p?void 0:p.funnel_id,[p,t,v,x]),
      b=o||a||c,
      y=(0,r.jsx)("span",{
        children:b?(0,r.jsxs)(eh,{
          disabled:!0,
          type:"button",
          "data-intercom-target":"Create funnel",
          children:[(0,r.jsx)(A,{}),"Create funnel"]
        }):(0,r.jsx)(f(),{
          href:"#create",
          children:(0,r.jsxs)(eh,{
            type:"button",
            "data-intercom-target":"Create funnel",
            children:[(0,r.jsx)(A,{}),"Create funnel"]
          })
        })
      }),
      Z=(0,r.jsx)("span",{
        children:b?(0,r.jsxs)(ef,{
          disabled:!0,
          type:"button",
          "data-intercom-target":"Funnel suggestions button",
          children:[(0,r.jsx)(eA,{}),"Suggestions"]
        }):(0,r.jsx)(f(),{
          href:"#funnel-suggestions",
          children:(0,r.jsxs)(ef,{
            type:"button",
            "data-intercom-target":"Funnel suggestions button",
            children:[(0,r.jsx)(eA,{}),"Suggestions"]
          })
        })
      });
      return(0,r.jsxs)(es,{
        children:[(0,r.jsx)(eu,{
          children:j?(0,r.jsx)(ec,{
            disabled:v,
            createDisabled:b,
            funnels:w,
            funnelId:j,
            onSelect:g
          }):null
        }),(0,r.jsxs)(ed,{
          "aria-hidden":v,
          children:[o||a,b?(0,r.jsx)(s.Z,{
            title:i,
            children:y
          }):y,b?(0,r.jsx)(s.Z,{
            title:i,
            children:Z
          }):Z]
        })]
      })
    }),
    eg=t(56214),
    em=t.n(eg),
    ex=t(47639),
    ew=t(67401),
    ej=t(55931),
    eb=t(16905);
    let ey=l.memo(e=>{
      let{
        children:n
      }=e,
      t=(0,g.I0)(),
      {
        query:{
          appId:o,
          parentType:i
        }
      }=(0,d.useRouter)(),
      a=l.useCallback((e,n)=>{
        t((0,S.CW)(null,{
          eventName:e,
          track_type:"event",
          eventProperty:n,
          pageName:i
        })),
        t((0,ex.hI)({
          action:e,
          property:n
        }))
      },[t,i]),
      {
        noCodeEventsFeatureFlag:s
      }=(0,ew.Z)(),
      u=(0,ej.e)("web"),
      h=(0,X.ye)("new-screens-filter"),
      {
        retentionFeatureAllowed:f
      }=(0,c.I)(),
      {
        aiSessionFeatureAllowed:A
      }=(0,c.I)()||{};
      return(0,r.jsx)(eg.FunnelContext,{
        trackEvent:a,
        appId:o,
        env:"production",
        cohortsEnabled:f,
        noCodeEnabled:s,
        isWebSDK:u,
        newScreenFilter:h,
        isNewAISessionEnabled:A,
        onBeforeRequest:eb.e.refreshIfNeeded,
        children:n
      })
    });
    var eZ=t(80432),
    eB=t(13979),
    eC=t(74444),
    eD=t(50691),
    eE=t(74936),
    eM=t(31049),
    ek=e=>(0,r.jsxs)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:13,
      height:12,
      fill:"none",
      ...e,
      children:[(0,r.jsx)("g",{
        fill:"#fff",
        clipPath:"url(#funnel-eye-crossed_svg__a)",
        children:(0,r.jsx)("path",{
          d:"M11.652 5.255a10.32 10.32 0 0 0-2.15-1.795l2-2a.455.455 0 0 0-.025-.67.435.435 0 0 0-.655 0l-9.765 9.745a.5.5 0 1 0 .675.675l2.075-2.075a5.425 5.425 0 0 0 2.305.47c2.125 0 4.245-1.5 5.5-2.9a1.08 1.08 0 0 0 .04-1.45Zm-3.44 1.36a2.295 2.295 0 0 1-1.5 1.5 2.15 2.15 0 0 1-1.55-.095.12.12 0 0 1-.03-.2l2.775-2.78a.125.125 0 0 1 .205.03 2.15 2.15 0 0 1 .1 1.545Zm-4.351.065a.12.12 0 0 0 .035-.12 2 2 0 0 1-.09-.56 2.255 2.255 0 0 1 2.25-2.27 2 2 0 0 1 .58.09.13.13 0 0 0 .12-.03l.975-.975a.13.13 0 0 0-.055-.21 5.29 5.29 0 0 0-1.62-.25c-2.15 0-4.3 1.5-5.595 2.9a1.08 1.08 0 0 0 0 1.45 10.68 10.68 0 0 0 1.715 1.5.13.13 0 0 0 .165 0l1.52-1.525Z"
        })
      }),(0,r.jsx)("defs",{
        children:(0,r.jsx)("clipPath",{
          id:"funnel-eye-crossed_svg__a",
          children:(0,r.jsx)("path",{
            fill:"#fff",
            d:"M.057 0h12v12h-12z"
          })
        })
      })]
    }),
    eS=e=>(0,r.jsxs)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:13,
      height:13,
      fill:"none",
      ...e,
      children:[(0,r.jsxs)("g",{
        fill:"#000",
        clipPath:"url(#funnel-eye_svg__a)",
        children:[(0,r.jsx)("path",{
          d:"M12.07 5.76c-1.32-1.455-3.5-3-5.716-2.96C4.14 2.84 1.96 4.305.64 5.76a1.11 1.11 0 0 0 0 1.5c.88.95 3.085 2.94 5.715 2.94s4.83-2 5.715-2.965a1.11 1.11 0 0 0 0-1.475Zm-8.016.74a2.3 2.3 0 1 1 4.6 0 2.3 2.3 0 0 1-4.6 0Z"
        }),(0,r.jsx)("path",{
          d:"M6.355 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        })]
      }),(0,r.jsx)("defs",{
        children:(0,r.jsx)("clipPath",{
          id:"funnel-eye_svg__a",
          children:(0,r.jsx)("path",{
            fill:"#fff",
            d:"M.355.5h12v12h-12z"
          })
        })
      })]
    }),
    eO=t(62499),
    eV=e=>(0,r.jsxs)("svg",{
      width:16,
      height:15,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,r.jsx)("rect",{
        x:3.047,
        y:2.44,
        width:12.127,
        height:12.127,
        rx:1,
        fill:"currentColor",
        style:{
          opacity:.4
        }
      }),(0,r.jsx)("rect",{
        x:.174,
        y:.338,
        width:12.127,
        height:12.127,
        rx:1,
        fill:"currentColor"
      }),(0,r.jsx)("path",{
        fill:"#fff",
        d:"M5.629 2.766h1.213v7.276H5.629z"
      }),(0,r.jsx)("path",{
        fill:"#fff",
        d:"M2.598 7.01V5.797h7.276V7.01z"
      })]
    }),
    eQ=e=>(0,r.jsx)("svg",{
      width:14,
      height:15,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,r.jsx)("path",{
        d:"M11.05 4.827H2.3a.292.292 0 0 0-.292.292v8.166a1.167 1.167 0 0 0 1.166 1.167h7a1.167 1.167 0 0 0 1.167-1.166V5.119a.292.292 0 0 0-.291-.292Zm-5.396 7.584a.437.437 0 1 1-.875 0V7.16a.437.437 0 1 1 .875 0v5.25Zm2.916 0a.437.437 0 1 1-.875 0V7.16a.438.438 0 0 1 .875 0v5.25ZM12.508 2.785H9.737a.146.146 0 0 1-.146-.145v-.73A1.458 1.458 0 0 0 8.133.452H5.216A1.458 1.458 0 0 0 3.758 1.91v.73a.146.146 0 0 1-.146.145H.842a.583.583 0 0 0 0 1.167h11.666a.583.583 0 0 0 0-1.167ZM4.924 2.64v-.73a.292.292 0 0 1 .292-.291h2.917a.292.292 0 0 1 .291.291v.73a.146.146 0 0 1-.145.145H5.07a.146.146 0 0 1-.146-.145Z",
        fill:"currentColor"
      })
    }),
    eT=t(23791),
    ez=t(99252),
    eF=t(5926);
    let e_=o.default.div.withConfig({
      componentId:"sc-e80831fc-0"
    })(["display:flex;flex-direction:column;padding:",";position:relative;"],i.r.spacing(1,0)),
    eH=o.default.div.withConfig({
      componentId:"sc-e80831fc-1"
    })(["display:flex;justify-content:space-between;align-items:flex-start;width:100%;position:relative;padding:",";gap:16px;"],i.r.spacing(0,0,3)),
    eP=o.default.div.withConfig({
      componentId:"sc-e80831fc-2"
    })(["display:flex;flex-direction:column;gap:8px;flex:1;min-width:0;"]),
    eI=o.default.div.withConfig({
      componentId:"sc-e80831fc-3"
    })(["display:flex;align-items:center;gap:16px;"]),
    eN=o.default.div.withConfig({
      componentId:"sc-e80831fc-4"
    })(["font-weight:700;font-size:18px;line-height:normal;color:",";white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"],i.r.colors.surface500.toString()),
    eq=o.default.div.withConfig({
      componentId:"sc-e80831fc-5"
    })(["font-size:12px;line-height:normal;color:",";&:empty{display:none;}"],i.r.colors.surface300.toString()),
    eX=o.default.div.withConfig({
      componentId:"sc-e80831fc-6"
    })(["display:flex;align-items:flex-start;gap:",";flex-shrink:0;"],i.r.spacing(1)),
    eL=o.default.button.withConfig({
      componentId:"sc-e80831fc-7"
    })(["display:flex;align-items:center;justify-content:center;width:32px;height:24px;border-radius:4px;background:transparent;border:none;cursor:pointer;transition:all 0.2s ease-in-out;color:",";&:hover{color:",";}&:active{color:",';}&[data-action="delete"]{color:',";&:hover{color:",";}&:active{color:",";}}&:disabled{color:",";pointer-events:none;}"],i.r.colors.primary500.toString(),i.r.colors.primary600.toString(),i.r.colors.primary700.toString(),i.r.colors.error500.toString(),i.r.colors.error600.toString(),i.r.colors.error700.toString(),i.r.colors.surface200.toString()),
    eW=(0,o.default)(eE.Z).withConfig({
      componentId:"sc-e80831fc-8"
    })(["padding:8px 6px;display:flex;align-items:center;gap:8px;border-radius:30px;height:26px;font-size:12px;background-color:",";transition:all 0.4s ease-in-out;color:",";border:unset !important;&:focus{background-color:",";color:",";}"],e=>{
      let{
        isShown:n
      }=e;
      return n?i.r.colors.primary500.toString():i.r.colors.surface05.toString()
    },e=>{
      let{
        isShown:n
      }=e;
      return n?i.r.colors.primarySnow.toString():i.r.colors.primaryMidnight.toString()
    },e=>{
      let{
        isShown:n
      }=e;
      return n?i.r.colors.primary500.toString():i.r.colors.surface05.toString()
    },e=>{
      let{
        isShown:n
      }=e;
      return n?i.r.colors.primarySnow.toString():i.r.colors.primaryMidnight.toString()
    }),
    eR=o.default.div.withConfig({
      componentId:"sc-e80831fc-9"
    })(["display:flex;flex-wrap:wrap;width:calc( 100% + "," );margin:0 ",";justify-content:center;"],i.r.spacing(3),i.r.spacing(-1.5)),
    eU=o.default.div.withConfig({
      componentId:"sc-e80831fc-10"
    })(["display:flex;flex-direction:column;margin:",";border-radius:8px;background:rgba(243,244,245,0.5);padding:",";min-width:140px;"],i.r.spacing(1.5),i.r.spacing(1.5,2)),
    eG=o.default.div.withConfig({
      componentId:"sc-e80831fc-11"
    })(["display:flex;font-size:12px;line-height:14px;color:",";margin:",";"],i.r.colors.primaryMidnight.toString(),i.r.spacing(0,0,1)),
    eY=o.default.div.withConfig({
      componentId:"sc-e80831fc-12"
    })(["display:flex;font-size:14px;line-height:16px;font-weight:600;color:",";"],i.r.colors.primaryMidnight.toString());
    var eK=l.memo(()=>{
      let{
        query:{
          appId:e
        }
      }=(0,d.useRouter)(),
      {
        funnel:n,
        updateFunnelCache:t,
        showDropOff:o,
        setShowDropOff:i,
        setUpdateInProgress:a,
        updateInProgress:c
      }=H(),
      {
        refreshFunnelList:u,
        limitReached:h,
        funnelsDisabled:A,
        disabledMessage:v,
        isViewer:g
      }=F(),
      m=(0,p.useQueryClient)(),
      x=B(null==n?void 0:n.funnel_id),
      w=m.getQueryData(x),
      [j,b]=(0,l.useState)(()=>(0,ez.lt)(null==w?void 0:w.last_updated_on));
      l.useEffect(()=>{
        let e=m.getQueryData(x);
        (null==e?void 0:e.last_updated_on)&&b((0,ez.lt)(e.last_updated_on))
      },[x,m,null==w?void 0:w.last_updated_on]);
      let y=l.useCallback(()=>n?E(n.funnel_id,n.appid):null,[n]),
      {
        mutateAsync:C
      }=(0,p.useMutation)({
        mutationFn:y
      }),
      D=l.useCallback(()=>n?Z(n.funnel_id,e,!0):()=>Promise.resolve(),[n,e]),
      {
        mutate:M,
        isLoading:k
      }=(0,p.useMutation)({
        mutationFn:D,
        onSuccess:e=>{
          a(!1),
          e&&(m.setQueryData(x,e),b((0,ez.lt)(e.last_updated_on)))
        },
        onError:()=>{
          a(!1)
        }
      }),
      {
        trackEvent:S
      }=V(),
      O=l.useCallback(()=>{
        S("wa_funnels_refresh_data",{
          id:null==n?void 0:n.funnel_id,
          name:null==n?void 0:n.name
        }),
        a(!0),
        M()
      },[M,a,S,null==n?void 0:n.funnel_id]),
      Q=l.useCallback(e=>{
        S("wa_funnels_change_date_range",{
          id:e.funnel_id,
          name:e.name,
          oldRange:null==n?void 0:n.newDate,
          newRange:e.newDate
        }),
        a(!1),
        t(e)
      },[t,a,n,S]),
      T=l.useCallback(()=>(a(!1),null),[a]),
      z=l.useCallback(()=>{
        a(!0)
      },[a]),
      _=l.useMemo(()=>{
        if(!n)return;
        if("user"===n.funnel_type){
          let{
            user_count:e,
            average_time_to_conversion:t,
            conversion_rate:r,
            total_conversion:l
          }=n.funnel_statistics||{};
          return{
            count:e,
            avgConversionTime:t,
            conversionRate:r,
            totalConversions:l
          }
        }
        let{
          session_count:e,
          average_time_to_conversion:t,
          conversion_rate:r,
          total_conversion:l
        }=n.funnel_statistics||{};
        return{
          count:e,
          avgConversionTime:t,
          conversionRate:r,
          totalConversions:l
        }
      },[n]),
      P=l.useCallback(()=>{
        S("wa_funnels_delete_funnel",{
          funnel_id:null==n?void 0:n.funnel_id,
          funnel_name:null==n?void 0:n.name
        }),
        C().finally(()=>{
          u()
        })
      },[C,u,null==n?void 0:n.funnel_id,S]),
      I=l.useCallback(()=>{
        let e=!o;
        S("wa_funnels_toggle_dropoff",{
          id:null==n?void 0:n.funnel_id,
          name:null==n?void 0:n.name,
          enabled:e
        }),
        i(e)
      },[i,o,S,n]),
      N=(0,r.jsx)("span",{
        children:h||A||g?(0,r.jsx)(s.Z,{
          title:v,
          placement:"bottomLeft",
          children:(0,r.jsx)("span",{
            children:(0,r.jsx)(eL,{
              disabled:!0,
              type:"button",
              children:(0,r.jsx)(eV,{})
            })
          })
        }):(0,r.jsx)(f(),{
          href:"#clone",
          children:(0,r.jsx)(s.Z,{
            title:"Duplicate funnel",
            children:(0,r.jsx)(eL,{
              type:"button",
              children:(0,r.jsx)(eV,{})
            })
          })
        })
      });
      if(!n)return null;
      let q=n.ordered_funnel||!1;
      return(0,r.jsxs)(e_,{
        children:[(0,r.jsxs)(eH,{
          children:[(0,r.jsxs)(eP,{
            children:[(0,r.jsxs)(eI,{
              children:[(0,r.jsx)(eN,{
                children:null==n?void 0:n.name
              }),g?(0,r.jsx)(s.Z,{
                title:v,
                children:(0,r.jsx)("span",{
                  children:(0,r.jsx)(eT.Z,{
                    isActive:c,
                    isRefreshing:k,
                    lastUpdate:j
                  })
                })
              }):(0,r.jsx)(eT.Z,{
                onClick:O,
                isActive:c,
                isRefreshing:k,
                lastUpdate:j
              })]
            }),(0,r.jsx)(eq,{
              children:null==n?void 0:n.description
            })]
          }),(0,r.jsxs)(eX,{
            children:[g?(0,r.jsx)(s.Z,{
              title:v,
              children:(0,r.jsx)("span",{
                children:(0,r.jsx)(eg.FunnelDatePicker,{
                  funnelData:n,
                  onUpdate:Q,
                  onError:T,
                  onPending:z,
                  disabled:!0
                })
              })
            }):(0,r.jsx)(eg.FunnelDatePicker,{
              funnelData:n,
              onUpdate:Q,
              onError:T,
              onPending:z
            }),(0,r.jsx)(eW,{
              icon:o?(0,r.jsx)(ek,{}):(0,r.jsx)(eS,{}),
              type:"primary",
              isShown:o,
              onClick:I,
              children:o?"Hide drop-off rate":"Show drop-off rate"
            }),!g&&(0,r.jsx)(f(),{
              href:"#edit",
              children:(0,r.jsx)(s.Z,{
                title:"Edit funnel",
                children:(0,r.jsx)(eL,{
                  type:"button",
                  "data-intercom-target":"Edit funnel",
                  children:(0,r.jsx)(eO.Z,{})
                })
              })
            }),!g&&N,!g&&(0,r.jsx)(eM.Z,{
              title:"Are you sure you want to delete this funnel? ",
              onConfirm:P,
              placement:"bottomRight",
              okText:"Yes",
              cancelText:"No",
              "data-intercom-target":"Delete Funnel",
              children:(0,r.jsx)(s.Z,{
                title:"Delete funnel",
                children:(0,r.jsx)(eL,{
                  "data-action":"delete",
                  type:"button",
                  children:(0,r.jsx)(eQ,{})
                })
              })
            })]
          })]
        }),(0,r.jsxs)(eR,{
          "data-intercom-target":"Funnels Stat Boxes",
          children:[(0,r.jsxs)(eU,{
            children:[(0,r.jsx)(eG,{
              children:"user"===n.funnel_type?(0,r.jsx)(r.Fragment,{
                children:"Total users"
              }):(0,r.jsx)(r.Fragment,{
                children:"Total sessions"
              })
            }),(0,r.jsx)(eY,{
              children:(0,r.jsx)(s.Z,{
                title:(0,eF.rX)(n.funnel_type,"total_count",(null==_?void 0:_.count)||0),
                children:(0,eF.Ly)((null==_?void 0:_.count)||0)
              })
            })]
          }),(0,r.jsxs)(eU,{
            children:[(0,r.jsx)(eG,{
              children:"Conversion rate"
            }),(0,r.jsx)(eY,{
              children:(0,r.jsx)(s.Z,{
                title:(0,eF.rX)(n.funnel_type,"conversion_rate",(null==_?void 0:_.conversionRate)||0),
                children:(0,eF.EU)(((null==_?void 0:_.conversionRate)||0)/100)
              })
            })]
          }),(0,r.jsxs)(eU,{
            children:[(0,r.jsx)(eG,{
              children:"Total conversions"
            }),(0,r.jsx)(eY,{
              children:(0,r.jsx)(s.Z,{
                title:(0,eF.rX)(n.funnel_type,"total_conversion",(null==_?void 0:_.totalConversions)||0),
                children:(0,eF.Ly)((null==_?void 0:_.totalConversions)||0)
              })
            })]
          }),(0,r.jsxs)(eU,{
            children:[(0,r.jsx)(eG,{
              children:"Avg. time to conversion"
            }),(0,r.jsx)(eY,{
              children:q?(0,r.jsx)(s.Z,{
                title:(0,eF.rX)(n.funnel_type,"avg_conversion_time",(null==_?void 0:_.avgConversionTime)||0),
                children:(0,eF.dp)((null==_?void 0:_.avgConversionTime)||0)
              }):(0,r.jsx)(s.Z,{
                title:(0,r.jsxs)(r.Fragment,{
                  children:["Only available for the funnel type ",(0,r.jsx)("i",{
                    children:"This order"
                  }),"."]
                }),
                children:"---"
              })
            })]
          })]
        })]
      })
    });
    let eJ=(e,n)=>{
      let{
        funnel_type:t,
        funnel_data:r,
        step_d_l:l,
        ordered_funnel:o=!1
      }=e,
      i=(0,eg.getOldFormatLinksMap)(e),
      a=r||[],
      c="session"===t?a.map(e=>{
        let{
          step:t,
          session_count:r,
          session_conversion_time:l,
          session_drop_off_url:o,
          session_conversion_url:i
        }=e;
        return{
          grouping:n?e[n]:null,
          step:t,
          count:r,
          conversionTime:l,
          dropOffUrl:o,
          conversionUrl:i
        }
      }):a.map(e=>{
        let{
          step:t,
          user_count:r,
          user_conversion_time:l,
          user_drop_off_url:o,
          user_conversion_url:i
        }=e;
        return{
          grouping:n?e[n]:null,
          step:t,
          count:r,
          conversionTime:l,
          dropOffUrl:o,
          conversionUrl:i
        }
      }),
      s=c.reduce((e,n)=>{
        let{
          step:t
        }=n,
        r=e[t]||[];
        return r.push(n),
        e[t]=r,
        e
      },{}),
      d=c.reduce((e,n)=>{
        let{
          step:t,
          grouping:r
        }=n;
        return e[r?"".concat(t,"_").concat(r):t]=n,
        e
      },{}),
      u=(s["1"]||[]).sort((e,n)=>n.count-e.count).map(e=>{
        let{
          grouping:n,
          step:t
        }=e;
        return n||t
      }).reduce((e,n,t)=>(e[n]=t+1,e),{});
      return s.undefined?[]:Array(l.length).fill(null).map((e,t)=>{
        let r=t+1,
        l=s[r],
        a=s[t],
        c=s[1],
        h=c?n?c.find(e=>"__all__"===e.grouping):c[0]:null,
        f=n?l.find(e=>"__all__"===e.grouping):l[0],
        A=n&&a?a.find(e=>"__all__"===e.grouping):a&&a[0]||void 0,
        v=h?((null==f?void 0:f.count)||0)/(null==h?void 0:h.count):1,
        p=A?((null==f?void 0:f.count)||0)/(null==A?void 0:A.count):1,
        g=A?(null==A?void 0:A.count)-((null==f?void 0:f.count)||0):0,
        m=A?1-((null==f?void 0:f.count)||0)/((null==A?void 0:A.count)||0):0,
        {
          dropOffUrl:x,
          conversionUrl:w
        }=f||{};
        if(!o){
          let e=i[n?"".concat(r,"_all"):"".concat(r,"_count")]||{};
          w=e.completionUrl||"",
          x=e.dropOffUrl||""
        }
        return{
          step:r,
          conversionStep1:v,
          conversionPrevStep:p,
          count:(null==f?void 0:f.count)||0,
          dropOffPrevStepCount:g,
          dropOffPrevStepPercentage:m,
          dropOffUrl:x||null,
          conversionUrl:w||null,
          breakdown:l.filter(e=>!n||"__all__"!==e.grouping).sort((e,n)=>u[e.grouping||e.step]-u[n.grouping||n.step]).map(e=>{
            let{
              grouping:n
            }=e,
            {
              conversionUrl:l,
              dropOffUrl:a
            }=e,
            c=n?"".concat(t,"_").concat(n):t,
            s=n?"1_".concat(n):"1";
            if(!o){
              let e=i[n?"".concat(r,"_").concat(n):"".concat(r,"_count")]||{};
              l=e.completionUrl||"",
              a=e.dropOffUrl||""
            }
            let u=d[c],
            h=d[s],
            {
              count:f
            }=e,
            A=f/h.count,
            v=u?f/u.count:1,
            p=void 0===u?0:u.count-f,
            g=void 0===u?0:1-f/u.count;
            return{
              grouping:n,
              conversionStep1:A,
              conversionPrevStep:v,
              count:f,
              dropOffPrevStepCount:p,
              dropOffPrevStepPercentage:g,
              conversionUrl:l,
              dropOffUrl:a
            }
          })
        }
      })
    };
    var e$=t(14896);
    let e1=o.default.div.withConfig({
      componentId:"sc-2fd66008-0"
    })(["display:flex;flex-grow:1;flex-direction:column;"]),
    e2=o.default.div.withConfig({
      componentId:"sc-2fd66008-1"
    })(["display:flex;width:100%;flex-direction:column;background:rgba(243,244,245,0.5);border-radius:8px;margin-bottom:",";"],i.r.spacing(2)),
    e0=o.default.div.withConfig({
      componentId:"sc-2fd66008-2"
    })(['display:flex;&[aria-hidden="true"]{display:none;}']),
    e4=o.default.div.withConfig({
      componentId:"sc-2fd66008-3"
    })(["display:flex;min-height:43px;padding:",";width:calc( 100% / 6 );"],i.r.spacing(1.5,1.25)),
    e3=o.default.button.withConfig({
      componentId:"sc-2fd66008-4"
    })(["display:inline-flex;background:transparent;border:none;cursor:pointer;height:43px;font-weight:500;font-size:",";padding:",";align-items:center;gap:",';width:auto;> svg{transform:rotate( 0deg );transform-origin:center;transition:transform 0.2s ease-in-out;}&[data-collapsed="true"]{> svg{transform:rotate( 180deg );}}&[aria-hidden="true"]{display:none;}'],i.r.fontSize(1.4),i.r.spacing(0,1.5),i.r.spacing(1)),
    e6=o.default.button.withConfig({
      componentId:"sc-2fd66008-5"
    })(["display:inline-flex;background:transparent;border:none;cursor:pointer;height:43px;font-weight:400;color:",";font-size:",";padding:",";align-items:center;gap:",";width:auto;> svg{transform:rotate( 180deg );transform-origin:center;transition:transform 0.2s ease-in-out;}&:before{content:'See more';}&[data-expanded=\"true\"]{&:before{content:'See less';}> svg{transform:rotate( 0deg );}}&[aria-hidden=\"true\"]{display:none;}"],i.r.colors.primary500.toString(),i.r.fontSize(1.4),i.r.spacing(0,1.5),i.r.spacing(1));
    var e5=l.memo(e=>{
      let{
        items:n,
        onLinkClick:t
      }=e,
      [o,i]=l.useState(!1),
      [a,c]=l.useState(!1),
      s=l.useCallback(()=>{
        c(e=>!e)
      },[]),
      d=l.useCallback(()=>{
        i(e=>!e)
      },[]),
      u=l.useMemo(()=>o?0:a?n.length:5,[o,a,n.length]),
      h=l.useMemo(()=>n.length>5&&!o,[n,o]);
      return(0,r.jsx)(e1,{
        children:(0,r.jsxs)(e2,{
          children:[(0,r.jsxs)(e3,{
            onClick:d,
            "data-collapsed":o,
            type:"button",
            children:["Grouping",(0,r.jsx)(e$.Z,{})]
          }),n.map((e,n)=>{
            let{
              conversionPrevStep:l,
              conversionStep1:o,
              grouping:i,
              count:a,
              dropOffPrevStepCount:c,
              dropOffPrevStepPercentage:s,
              dropOffUrl:d,
              conversionUrl:h
            }=e;
            return(0,r.jsxs)(e0,{
              "aria-hidden":n>=u,
              children:[(0,r.jsx)(e4,{
                children:i
              }),(0,r.jsx)(e4,{
                children:(0,eF.EU)(o)
              }),(0,r.jsx)(e4,{
                children:(0,eF.EU)(l)
              }),(0,r.jsx)(e4,{
                children:a&&h&&"Others"!==i?(0,r.jsx)("a",{
                  onClick:t,
                  target:"_blank",
                  rel:"noreferrer",
                  href:h,
                  children:(0,eF.cu)(a)
                }):(0,r.jsx)("span",{
                  children:(0,eF.cu)(a)
                })
              }),(0,r.jsx)(e4,{
                children:(0,eF.EU)(s)
              }),(0,r.jsx)(e4,{
                children:c&&d&&"Others"!==i?(0,r.jsx)("a",{
                  onClick:t,
                  target:"_blank",
                  rel:"noreferrer",
                  href:d,
                  children:(0,eF.cu)(c)
                }):(0,r.jsx)("span",{
                  children:(0,eF.cu)(c)
                })
              })]
            },n)
          }),(0,r.jsx)(e6,{
            "aria-hidden":!h,
            onClick:s,
            "data-expanded":a,
            type:"button",
            children:(0,r.jsx)(e$.Z,{})
          })]
        })
      })
    }),
    e8=t(92046);
    let e7=o.default.div.withConfig({
      componentId:"sc-8a480081-0"
    })(["display:block;font-size:",";font-weight:500;color:",";gap:",";line-height:",";max-width:100%;word-break:initial;"],i.r.fontSize(1.4),i.r.colors.surface300.toString(),i.r.spacing(1),i.r.fontSize(1.641)),
    e9=o.default.span.withConfig({
      componentId:"sc-8a480081-1"
    })(["display:inline-block;margin-right:",";"],i.r.spacing(.25)),
    ne=o.default.span.withConfig({
      componentId:"sc-8a480081-2"
    })(["margin:",";"],i.r.spacing(.25)),
    nn=o.default.span.withConfig({
      componentId:"sc-8a480081-3"
    })(["display:inline-block;color:",";margin:",";"],i.r.colors.surface300.toString(),i.r.spacing(0,.25)),
    nt=o.default.span.withConfig({
      componentId:"sc-8a480081-4"
    })(["display:inline;color:",";font-weight:500;"],i.r.colors.surface500.toString()),
    nr=o.default.div.withConfig({
      componentId:"sc-8a480081-5"
    })(["display:block;font-size:",";color:",";font-weight:400;margin-top:",";padding-left:",";"],i.r.fontSize(1.2),i.r.colors.surface300.toString(),i.r.spacing(.25),i.r.spacing(1.5)),
    nl=o.default.span.withConfig({
      componentId:"sc-8a480081-6"
    })(["display:inline-block;margin:0;color:",";margin:",";word-break:break-word;"],i.r.colors.surface500.toString(),i.r.spacing(0,.25)),
    no=[{
      label:"equals",
      value:"in"
    },{
      label:"equals not",
      value:"not_in"
    },{
      label:"greater",
      value:"greater"
    },{
      label:"less",
      value:"less"
    },{
      label:"contains",
      value:"contains"
    },{
      label:"does not contain",
      value:"not_contains"
    }],
    ni=(e,n,t)=>{
      if(!e)return"";
      if((null==(e=n?e.map(e=>(null==t?void 0:t[e])||e):e)?void 0:e.length)<=2)return(0,r.jsxs)(r.Fragment,{
        children:[(0,r.jsx)(nl,{
          children:e[0]
        }),1!==e.length&&(0,r.jsxs)(r.Fragment,{
          children:[(0,r.jsx)(nn,{
            children:"or"
          }),(0,r.jsx)(nl,{
            children:e[1]
          })]
        })]
      });
      let l=null==e?void 0:e.slice(0,1).join(", "),
      o=e[1];
      return(0,r.jsxs)(nl,{
        children:["".concat(l,", ").concat(o)," ",(0,r.jsx)(nn,{
          children:" or "
        })," ","".concat(e.length-2," more")]
      })
    },
    na=(e,n,t)=>{
      var l,
      o,
      i,
      a,
      c,
      d,
      u;
      if(!e.fb_l)return(0,r.jsx)(r.Fragment,{
        children:t
      });
      let h=(null==e?void 0:null===(l=e.fb_l)||void 0===l?void 0:l[1])||null,
      f=(null==e?void 0:null===(o=e.fb_l[0])||void 0===o?void 0:o.value)||[];
      return(0,r.jsxs)(r.Fragment,{
        children:[(0,r.jsx)(r.Fragment,{
          children:(0,r.jsx)(ne,{
            children:((e,n)=>{
              switch(e){
                case"screen_name":return"Screen".concat(n>1?"s":"",":");
                case"nce_name":return"Smart event".concat(n>1?"s":"",":");
                default:return"Event".concat(n>1?"s":"",":")
              }
            })(null==e?void 0:null===(i=e.fb_l[0])||void 0===i?void 0:i.attribute,f.length)
          })
        }),(0,r.jsxs)(r.Fragment,{
          children:[(0,r.jsx)(s.Z,{
            title:(null==e?void 0:null===(a=e.fb_l[0])||void 0===a?void 0:a.attribute)==="screen_name"?null===(c=f.map(e=>n[e]||e))||void 0===c?void 0:c.join(", "):f.join(", "),
            children:ni(f,(null==e?void 0:null===(d=e.fb_l[0])||void 0===d?void 0:d.attribute)==="screen_name",n)
          }),h&&(0,r.jsxs)(r.Fragment,{
            children:[(0,r.jsx)(nn,{
              children:"with"
            }),ni(h.json_field,!1),(0,r.jsx)(nn,{
              children:null===(u=no.find(e=>e.value===h.operator))||void 0===u?void 0:u.label
            }),(0,r.jsx)(s.Z,{
              title:Array.isArray(h.value)&&h.value.join(", "),
              children:ni(Array.isArray(h.value)?h.value:[h.value],!1)
            })]
          })]
        })]
      })
    };
    var nc=l.memo(e=>{
      let{
        step:n,
        renamedScreens:t,
        stepNum:l,
        stepName:o
      }=e,
      {
        launchedText:i
      }=(0,e8.ci)();
      return(0,r.jsxs)(e7,{
        children:[(0,r.jsxs)(e9,{
          children:[l,"."]
        }),o?(0,r.jsxs)(r.Fragment,{
          children:[(0,r.jsx)(nt,{
            children:o
          }),(0,r.jsx)(nr,{
            children:na(n,t,i)
          })]
        }):na(n,t,i)]
      })
    });
    let ns=o.default.div.withConfig({
      componentId:"sc-acbdf8e9-0"
    })(["display:flex;flex-direction:column;flex-grow:1;width:100%;max-width:100%;padding:",";"],i.r.spacing(0,0,5.25)),
    nd=o.default.div.withConfig({
      componentId:"sc-acbdf8e9-1"
    })(["display:flex;flex-direction:column;flex-grow:1;width:100%;flex-grow:1;a{text-decoration:underline;}"]),
    nu=o.default.div.withConfig({
      componentId:"sc-acbdf8e9-2"
    })(["display:flex;align-items:center;width:calc( 100% / 6 );min-height:43px;background:",";border-right:1px solid #fff;padding:",";font-weight:500;font-size:",';word-break:break-word;&[data-sticky="true"]{position:sticky;left:0;}&:last-child{border-right:none;border-radius:0 4px 0 0;}&:first-child{border-radius:4px 0 0 0;}&[data-has-breakdown="true"]{width:calc( 100% / 7 );}'],i.r.colors.surface05.toString(),i.r.spacing(1.5,1.25),i.r.fontSize(1.4)),
    nh=o.default.div.withConfig({
      componentId:"sc-acbdf8e9-3"
    })(['display:flex;position:sticky;top:60px;z-index:2;&[data-has-breakdown="true"]{',"{width:calc( 100% / 7 );}}"],nu),
    nf=o.default.div.withConfig({
      componentId:"sc-acbdf8e9-4"
    })(["display:flex;align-items:flex-start;width:calc( 1 * 100% / 6 );padding:",";font-weight:500;font-size:",";position:sticky;left:0;top:43px;background:#fff;z-index:1;word-break:break-word;"],i.r.spacing(1.5,1.25),i.r.fontSize(1.4)),
    nA=o.default.div.withConfig({
      componentId:"sc-acbdf8e9-5"
    })(["display:flex;flex-direction:column;flex-grow:1;width:calc( 5 * 100% / 6 );"]),
    nv=o.default.div.withConfig({
      componentId:"sc-acbdf8e9-6"
    })(["display:flex;border-bottom:2px solid ",';&[data-has-breakdown="true"]{',"{width:calc( 1 * 100% / 7 );}","{width:calc( 6 * 100% / 7 );}}"],i.r.colors.surface05.toString(),nf,nA),
    np=o.default.div.withConfig({
      componentId:"sc-acbdf8e9-7"
    })(["display:flex;font-weight:500;font-size:",";"],i.r.fontSize(1.4)),
    ng=o.default.div.withConfig({
      componentId:"sc-acbdf8e9-8"
    })(["display:flex;flex-grow:1;"]),
    nm=o.default.div.withConfig({
      componentId:"sc-acbdf8e9-9"
    })(["display:flex;flex-grow:1;width:calc( 1 * 100% / 6 );min-height:43px;padding:",";"],i.r.spacing(1.5,1.25));
    var nx=l.memo(e=>{
      let{
        stepNames:n
      }=e,
      {
        funnel:t
      }=H(),
      o=l.useMemo(()=>{
        var e;
        return t?eJ(t,(null==t?void 0:null===(e=t.gb_d)||void 0===e?void 0:e.attribute)||null):[]
      },[t]),
      i=l.useMemo(()=>{
        var e;
        return t&&(null===(e=t.gb_d)||void 0===e?void 0:e.attribute)||null
      },[t]),
      a=l.useMemo(()=>!!t&&!!t.gb_d,[t]),
      c=(0,eg.useExternalFunnelMetrics)(),
      s=l.useMemo(()=>(0,eg.getFunnelDisplayGrouping)(t,c),[t,c]),
      {
        renamedScreens:d
      }=(0,eg.useRenamedScreens)(),
      {
        trackEvent:u
      }=V(),
      h=l.useCallback(()=>{
        t&&u((null==t?void 0:t.funnel_type)==="session"?"wa_funnels_navigate_to_sessions":"wa_funnels_navigate_to_users",{
          id:null==t?void 0:t.funnel_id,
          name:null==t?void 0:t.name,
          filters:(0,eF.VM)(t)
        })
      },[u,t]);
      return t?(0,r.jsx)(ns,{
        children:(0,r.jsxs)(nd,{
          children:[(0,r.jsxs)(nh,{
            "data-has-breakdown":a,
            children:[(0,r.jsx)(nu,{
              "data-sticky":!0,
              children:"Steps"
            }),s?(0,r.jsx)(nu,{
              children:s
            }):null,(0,r.jsx)(nu,{
              children:"Conversion from step 1 (%)"
            }),(0,r.jsx)(nu,{
              children:"Conversion from previous step (%)"
            }),(0,r.jsx)(nu,{
              children:"Conversion (Count uniques)"
            }),(0,r.jsx)(nu,{
              children:"Drop-off from previous step  (%)"
            }),(0,r.jsx)(nu,{
              children:"Drop-off (Count uniques)"
            })]
          }),o.map((e,l)=>{
            let{
              step:o,
              conversionPrevStep:c,
              conversionStep1:s,
              dropOffPrevStepPercentage:u,
              dropOffPrevStepCount:f,
              count:A,
              breakdown:v,
              conversionUrl:p,
              dropOffUrl:g
            }=e,
            m=t.step_d_l[l];
            return(0,r.jsxs)(nv,{
              "data-has-breakdown":a,
              children:[(0,r.jsx)(nf,{
                children:(0,r.jsx)(nc,{
                  step:m,
                  renamedScreens:d,
                  stepNum:o,
                  stepName:null==n?void 0:n[l]
                })
              }),(0,r.jsxs)(nA,{
                children:[(0,r.jsxs)(np,{
                  children:[i?(0,r.jsx)(nm,{
                    children:"Total"
                  }):null,(0,r.jsx)(nm,{
                    children:(0,eF.EU)(s)
                  }),(0,r.jsx)(nm,{
                    children:(0,eF.EU)(c)
                  }),(0,r.jsx)(nm,{
                    children:A&&p?(0,r.jsx)("a",{
                      onClick:h,
                      target:"_blank",
                      rel:"noreferrer",
                      href:p,
                      children:(0,eF.cu)(A)
                    }):(0,r.jsx)("span",{
                      children:(0,eF.cu)(A)
                    })
                  }),(0,r.jsx)(nm,{
                    children:(0,eF.EU)(u)
                  }),(0,r.jsx)(nm,{
                    children:f&&g?(0,r.jsx)("a",{
                      onClick:h,
                      target:"_blank",
                      rel:"noreferrer",
                      href:g,
                      children:(0,eF.cu)(f)
                    }):(0,r.jsx)("span",{
                      children:(0,eF.cu)(f)
                    })
                  })]
                }),i?(0,r.jsx)(ng,{
                  children:(0,r.jsx)(e5,{
                    items:v,
                    onLinkClick:h
                  })
                }):null]
              })]
            },l)
          })]
        })
      }):null
    }),
    nw=e=>(0,r.jsx)("svg",{
      width:25,
      height:25,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,r.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M16.486 4.64a.562.562 0 0 1 .54-.43c.255 0 .477.177.541.43.247.968.517 1.562.92 2.002.407.443 1.002.788 2.016 1.138a.574.574 0 0 1 .381.545.574.574 0 0 1-.38.546c-1.015.35-1.61.695-2.016 1.137-.404.44-.674 1.035-.92 2.003a.562.562 0 0 1-.541.429.562.562 0 0 1-.54-.43c-.247-.967-.517-1.561-.921-2.002-.406-.442-1.001-.787-2.015-1.137a.574.574 0 0 1-.382-.546c0-.247.154-.466.382-.545 1.014-.35 1.609-.695 2.015-1.138.404-.44.674-1.034.92-2.002Zm-7.16 3.204a.562.562 0 0 1 .541-.43c.255 0 .477.177.541.43.444 1.751.946 2.895 1.736 3.758.792.866 1.925 1.51 3.75 2.142.227.079.38.298.38.545a.574.574 0 0 1-.38.545s-2.958 1.276-3.75 2.142c-.79.864-1.292 2.007-1.736 3.758a.562.562 0 0 1-.54.43.562.562 0 0 1-.541-.43c-.444-1.751-.947-2.895-1.736-3.758-.792-.866-1.926-1.51-3.75-2.142a.574.574 0 0 1-.38-.545c0-.247.153-.466.38-.545 1.824-.633 2.958-1.276 3.75-2.142.79-.863 1.292-2.007 1.736-3.758Z",
        fill:"currentColor"
      })
    });
    let nj=o.default.div.withConfig({
      componentId:"sc-193c3558-0"
    })(["display:flex;flex-grow:1;align-items:center;color:",";"],i.r.colors.surface500.toString()),
    nb=o.default.div.withConfig({
      componentId:"sc-193c3558-1"
    })(["display:flex;align-items:center;justify-content:center;width:50%;padding:",";"],i.r.spacing(0,2)),
    ny=o.default.div.withConfig({
      componentId:"sc-193c3558-2"
    })(["display:flex;flex-direction:column;width:50%;padding:",";"],i.r.spacing(0,2)),
    nZ=o.default.img.withConfig({
      componentId:"sc-193c3558-3"
    })(["display:block;max-width:100%;max-height:100%;width:500px;"]),
    nB=o.default.div.withConfig({
      componentId:"sc-193c3558-4"
    })(["display:block;margin:",";font-size:",";line-height:",";font-weight:500;"],i.r.spacing(0,0,.5),i.r.fontSize(2.8),i.r.fontSize(3.5)),
    nC=o.default.div.withConfig({
      componentId:"sc-193c3558-5"
    })(["display:block;margin:",";font-size:",";line-height:",";font-weight:500;"],i.r.spacing(0,0,2),i.r.fontSize(1.8),i.r.fontSize(2.4)),
    nD=o.default.ul.withConfig({
      componentId:"sc-193c3558-6"
    })(["list-style:none;max-width:100%;width:454px;margin:",";li{display:block;position:relative;font-size:",";line-height:",";padding-left:",";&:before{content:'';width:4px;height:4px;border-radius:50%;background:",";position:absolute;top:",";left:0;transform:translateY( -50% );}}"],i.r.spacing(0,0,2),i.r.fontSize(1.4),i.r.fontSize(2.4),i.r.spacing(2.25),i.r.colors.surface500.toString(),i.r.spacing(1.5)),
    nE=o.default.button.withConfig({
      componentId:"sc-193c3558-7"
    })(["display:inline-flex;align-items:center;justify-content:center;height:32px;padding:",";border-radius:6px;background:transparent;border:none;color:",";font-weight:500;font-size:",";gap:6px;transition:0.2s all ease-in-out;cursor:pointer;&:disabled{background:",";color:",";pointer-events:none;}&:hover{background:",";}&:active{background:",";}"],i.r.spacing(0,1.5),i.r.colors.primary500.toString(),i.r.fontSize(1.4),i.r.colors.surface05.toString(),i.r.colors.surface200.toString(),i.r.colors.primary05.toString(),i.r.colors.primary700.toString()),
    nM=o.default.button.withConfig({
      componentId:"sc-193c3558-8"
    })(["display:inline-flex;align-items:center;justify-content:center;height:32px;padding:",";border-radius:6px;background:",";border:none;color:#fff;font-weight:500;font-size:",";gap:6px;transition:0.2s all ease-in-out;cursor:pointer;&:disabled{background:",";color:",";pointer-events:none;}&:hover{background:",";}&:active{background:",";}"],i.r.spacing(0,1.5),i.r.colors.primary500.toString(),i.r.fontSize(1.4),i.r.colors.surface05.toString(),i.r.colors.surface200.toString(),i.r.colors.primary600.toString(),i.r.colors.primary700.toString()),
    nk=o.default.div.withConfig({
      componentId:"sc-193c3558-9"
    })(["display:flex;gap:",";"],i.r.spacing(4));
    var nS=l.memo(()=>{
      let{
        trackEvent:e
      }=V(),
      {
        items:n,
        disabledMessage:t,
        isViewer:o
      }=F(),
      i=l.useCallback(()=>{
        e("wa_funnels_open_funnel_creator")
      },[e]);
      return n.length?null:(0,r.jsxs)(nj,{
        children:[(0,r.jsx)(nb,{
          children:(0,r.jsx)(nZ,{
            src:"/static/funnel/illustration.png"
          })
        }),(0,r.jsxs)(ny,{
          children:[(0,r.jsx)(nB,{
            children:"Funnels"
          }),(0,r.jsx)(nC,{
            children:"Boost your conversion rate"
          }),(0,r.jsxs)(nD,{
            children:[(0,r.jsx)("li",{
              children:"Track conversions and drop-offs in one view"
            }),(0,r.jsx)("li",{
              children:"Replay the drop-offs and find out who leaves, why, and what they do instead"
            }),(0,r.jsx)("li",{
              children:"Spot user segments that are more likely to convert"
            })]
          }),(0,r.jsxs)(nk,{
            children:[(0,r.jsx)("div",{
              children:o?(0,r.jsx)(s.Z,{
                title:t,
                children:(0,r.jsx)("span",{
                  children:(0,r.jsx)(nE,{
                    type:"button",
                    disabled:!0,
                    children:"Build funnel"
                  })
                })
              }):(0,r.jsx)(f(),{
                href:"#create",
                children:(0,r.jsx)(nE,{
                  type:"button",
                  onClick:i,
                  children:"Build funnel"
                })
              })
            }),(0,r.jsx)("div",{
              children:o?(0,r.jsx)(s.Z,{
                title:t,
                children:(0,r.jsx)("span",{
                  children:(0,r.jsxs)(nM,{
                    type:"button",
                    disabled:!0,
                    children:[(0,r.jsx)(nw,{}),"Get funnel suggestions"]
                  })
                })
              }):(0,r.jsx)(f(),{
                href:"#funnel-suggestions",
                children:(0,r.jsxs)(nM,{
                  type:"button",
                  children:[(0,r.jsx)(nw,{}),"Get funnel suggestions"]
                })
              })
            })]
          })]
        })]
      })
    }),
    nO=e=>(0,r.jsxs)("svg",{
      width:20,
      height:20,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,r.jsx)("g",{
        clipPath:"url(#arrow-up_svg__a)",
        children:(0,r.jsx)("path",{
          d:"m18.808 9.806-7.72-8.768a2.136 2.136 0 0 0-1.416-.64 2.136 2.136 0 0 0-1.416.64l-7.72 8.8a1.128 1.128 0 1 0 1.696 1.464l5.96-6.768a.2.2 0 0 1 .352.128V18.47a1.128 1.128 0 1 0 2.256 0V4.662a.2.2 0 0 1 .25-.191.2.2 0 0 1 .102.063l5.96 6.768a1.13 1.13 0 1 0 1.696-1.496Z",
          fill:"currentColor"
        })
      }),(0,r.jsx)("defs",{
        children:(0,r.jsx)("clipPath",{
          id:"arrow-up_svg__a",
          children:(0,r.jsx)("path",{
            fill:"currentColor",
            transform:"translate(.072 .398)",
            d:"M0 0h19.2v19.2H0z"
          })
        })
      })]
    });
    let nV=o.default.button.withConfig({
      componentId:"sc-a2140925-0"
    })(["display:flex;justify-content:center;align-items:center;z-index:2;position:absolute;bottom:110px;right:50px;background-color:",";color:",";border:unset;cursor:pointer;width:32px;height:32px;border-radius:50%;transition:all 0.13s ease-in-out;opacity:",";pointer-events:",";&:hover{color:",";background-color:",";}"],i.r.colors.primary100.toString(),i.r.colors.primary500.toString(),e=>{
      let{
        isVisible:n
      }=e;
      return n?0:1
    },e=>{
      let{
        isVisible:n
      }=e;
      return n?"none":"all"
    },i.r.colors.primarySnow.toString(),i.r.colors.primary500.toString());
    var nQ=(0,l.memo)(e=>{
      let{
        scrollRef:n
      }=e,
      [t,o]=l.useState(!1);
      return l.useEffect(()=>{
        let e=new IntersectionObserver(e=>{
          e.forEach(e=>{
            o(e.isIntersecting)
          })
        },{
          root:null,
          rootMargin:"0px",
          threshold:0
        });
        return n.current&&e.observe(n.current),
        ()=>{
          e.disconnect()
        }
      },[n]),
      (0,r.jsx)(s.Z,{
        overlay:"Scroll to the top",
        placement:"left",
        children:(0,r.jsx)(nV,{
          onClick:()=>{
            (null==n?void 0:n.current)&&n.current.scrollIntoView({
              behavior:"smooth",
              block:"end",
              inline:"nearest"
            })
          },
          type:"button",
          isVisible:t,
          children:(0,r.jsx)(nO,{})
        })
      })
    });
    let nT=o.default.div.withConfig({
      componentId:"sc-a71bea5a-0"
    })(["display:flex;flex-grow:1;flex-direction:column;&[aria-busy='true']{opacity:0.72;pointer-events:none;}"]),
    nz=o.default.div.withConfig({
      componentId:"sc-a71bea5a-1"
    })(["display:flex;flex-direction:column;height:100%;margin-bottom:32px;&:empty{display:none;}"]),
    nF=o.default.div.withConfig({
      componentId:"sc-a71bea5a-2"
    })(["padding:16px;border-radius:8px;border:1px solid ",";margin-bottom:24px;"],i.r.colors.surface10.toString()),
    n_=o.default.div.withConfig({
      componentId:"sc-a71bea5a-3"
    })(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;flex:1;"]),
    nH=o.default.div.withConfig({
      componentId:"sc-a71bea5a-4"
    })([""]),
    nP=o.default.div.withConfig({
      componentId:"sc-a71bea5a-5"
    })([""]),
    nI=o.default.div.withConfig({
      componentId:"sc-a71bea5a-6"
    })(["position:absolute;left:0;right:0;width:100%;height:calc(100% - 60px);background-color:rgba(255,255,255,0.8);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;z-index:10;"]),
    nN=e=>{
      let{
        funnelType:n
      }=e;
      return(0,r.jsxs)(n_,{
        children:[(0,r.jsx)("img",{
          src:"/static/icon-happy-no-data.svg",
          alt:"no data"
        }),(0,r.jsxs)(nH,{
          children:["No ","user"===n?"users":"sessions"," match the first step of your funnel. Try changing the criteria."]
        })]
      })
    },
    nq=()=>(0,r.jsx)(nI,{
      children:(0,r.jsx)(a.Z,{})
    });
    var nX=l.memo(e=>{
      var n;
      let{
        rootRef:t
      }=e,
      {
        trackEvent:o
      }=V(),
      i=l.useRef(null),
      {
        asPath:a,
        query:c
      }=(0,d.useRouter)(),
      {
        appId:s,
        suggestionType:h,
        suggestionValue:f,
        url:A
      }=c,
      v=(0,l.useMemo)(()=>null==A?void 0:A.split("?")[1],[A]),
      {
        funnel:p,
        funnelId:g,
        updateFunnelCache:m,
        setIsBuilderOpen:x,
        showDropOff:w,
        updateInProgress:j,
        loading:b
      }=H(),
      y=l.useCallback((e,n)=>{
        if(!p)return;
        let t=p.step_d_l.map((t,r)=>r===e?{
          ...t,
          name:n
        }:t),
        r={
          ...p.step_names
        };
        n?r[String(e)]=n:delete r[String(e)],
        m({
          ...p,
          step_d_l:t,
          step_names:r
        })
      },[p,m]),
      {
        updateStepName:Z,
        stepNamesOverride:B,
        resetOverrides:C
      }=(0,eg.useUpdateFunnelStepName)(null!==(n=null==p?void 0:p.funnel_id)&&void 0!==n?n:"",{
        onStepNameUpdate:y
      }),
      D=l.useMemo(()=>{
        var e,
        n;
        return null!==(n=null==p?void 0:null===(e=p.step_d_l)||void 0===e?void 0:e.map((e,n)=>{
          var t,
          r,
          l,
          o;
          return null!==(o=null!==(l=null!==(r=B[n])&&void 0!==r?r:null==p?void 0:null===(t=p.step_names)||void 0===t?void 0:t[String(n)])&&void 0!==l?l:e.name)&&void 0!==o?o:""
        }))&&void 0!==n?n:[]
      },[null==p?void 0:p.step_d_l,null==p?void 0:p.step_names,B]),
      {
        contextHolder:E,
        handlePreventLeaving:M
      }=(0,eC.H)(),
      k=l.useMemo(()=>{
        var e,
        n;
        let t={};
        return null==p||null===(e=p.fb_d_l)||void 0===e||e.forEach(e=>{
          t[e.attribute]=(t[e.attribute]||0)+1
        }),
        null==p||null===(n=p.step_d_l)||void 0===n||n.forEach(e=>{
          if((null==e?void 0:e.table)==="no_code_event"){
            var n;
            null==e||null===(n=e.fb_l)||void 0===n||n.forEach(e=>{
              t[e.attribute]=(t[e.attribute]||0)+1
            })
          }
        }),
        t
      },[p]),
      {
        items:S,
        refreshFunnelList:O,
        funnelLimit:Q,
        isViewer:T
      }=F();
      l.useEffect(()=>{
        if(p){
          var e;
          o("wa_funnels_visit_funnel",{
            id:p.funnel_id,
            name:p.name,
            filter_attributes:k,
            favorite:(null==S?void 0:null===(e=S.find(e=>{
              let{
                funnel_id:n
              }=e;
              return n===p.funnel_id
            }))||void 0===e?void 0:e.is_pinned)||!1
          })
        }
      },[o,null==p?void 0:p.funnel_id,k]);
      let z=l.useMemo(()=>a.split("#")[1],[a]),
      _=l.useMemo(()=>!T&&("edit"===z||"create"===z||"clone"===z),[z,T]),
      P=l.useMemo(()=>"create"===z,[z]),
      I=l.useMemo(()=>"create"===z||("edit"===z||"clone"===z)&&(null==p?void 0:p.funnel_id)===g,[g,p,z]),
      N=l.useMemo(()=>!!(h&&f),[h,f]);
      l.useEffect(()=>{
        z||M(!1)
      },[M,z]);
      let q=l.useCallback(()=>{
        let e=N?"suggestionType=".concat(h,"&suggestionValue=").concat(f):"",
        n=N?"#funnel-suggestions":"";
        if(g){
          u().push("/integration?appId=".concat(s,"&parentType=funnels&funnelId=").concat(g).concat(e?"&".concat(e):"").concat(n),"/app/".concat(s,"/funnels/").concat(g).concat(e?"?".concat(e):"").concat(n));
          return
        }
        u().push("/integration?appId=".concat(s,"&parentType=funnels").concat(e?"&".concat(e):"").concat(n),"/app/".concat(s,"/funnels").concat(e?"?".concat(e):"").concat(n))
      },[g,s,h,f,N]),
      X=l.useCallback(e=>{
        C(),
        m(e),
        O().then(()=>{
          setTimeout(()=>{
            u().push("/integration?appId=".concat(s,"&parentType=funnels&funnelId=").concat(e.funnel_id),"/app/".concat(s,"/funnels/").concat(e.funnel_id)).catch(e=>{
              if(!e.cancelled)throw e
            })
          },10)
        })
      },[m,s,O,C]),
      L=l.useMemo(()=>"clone"===z,[z]),
      W=l.useCallback(e=>{
        var n;
        o("wa_funnels_edit_funnel",{
          id:e.funnel_id,
          type:e.funnel_type,
          name:e.name,
          stepsNumber:e.step_d_l.length,
          steps:(0,eF.GO)(e),
          order:e.ordered_funnel?"this_order":"any_order",
          conversionWindowFilter:(null===(n=e.conversion_filter)||void 0===n?void 0:n.length)?e.conversion_filter[0]:null,
          filters:(0,eF.VM)(e),
          grouping:e.gb_d
        }),
        X(e)
      },[X,o]),
      R=l.useCallback(e=>{
        var n;
        o(L?"wa_funnels_clone_funnel":"wa_funnels_create_funnel",{
          id:e.funnel_id,
          type:e.funnel_type,
          name:e.name,
          stepsNumber:e.step_d_l.length,
          steps:(0,eF.GO)(e),
          order:e.ordered_funnel?"this_order":"any_order",
          conversionWindowFilter:(null===(n=e.conversion_filter)||void 0===n?void 0:n.length)?e.conversion_filter[0]:null,
          filters:(0,eF.VM)(e),
          grouping:e.gb_d
        }),
        X(e)
      },[X,o,L]),
      U=l.useCallback(e=>{
        if((null==S?void 0:S.length)>=Q&&"create"===z){
          eZ.ZP.error("Funnel limit reached. A maximum number of ".concat(Q," funnels are allowed per app. Please delete an existing funnel to create a new one."));
          return
        }
        eZ.ZP.error(e.message),
        eB.l.error(e)
      },[S,Q,z]),
      G=l.useMemo(()=>{
        if(!P)return;
        let e=new URLSearchParams(((c.url||"?").split("?")[1]||"").split("#")[0]),
        n=e.get("steps"),
        t=e.get("groupby"),
        r=e.get("filters"),
        l=e.get("type");
        if(n||t||r||l)try{
          return{
            funnel_type:l||"session",
            ordered_funnel:!0,
            step_d_l:JSON.parse(n||"[]"),
            gb_d:t?JSON.parse("gb_d"):null,
            fb_d_l:JSON.parse(r||"[]"),
            newDate:{
              From:null,
              To:null,
              relativeTo:"NOW",
              source:"UPLOAD_TIME",
              timezone:"UTC",
              timezoneOffset:0,
              unit:"DAY",
              value:30
            }
          }
        }
        catch(e){
          console.error(e)
        }
      },[c,P]),
      Y=l.useMemo(()=>"create"===z?G:p,[z,p,G]);
      l.useEffect(()=>{
        if(z)switch(z){
          case"edit":return o("wa_funnels_open_funnel_editor",{
            id:null==p?void 0:p.funnel_id,
            name:null==p?void 0:p.name
          });
          case"create":return o("wa_funnels_open_funnel_creator");
          case"clone":return o("wa_funnels_open_funnel_clone",{
            id:null==p?void 0:p.funnel_id,
            name:null==p?void 0:p.name
          });
          default:return
        }
      },[z,o,null==p?void 0:p.funnel_id]),
      l.useEffect(()=>{
        if(_&&I){
          x(!0);
          return
        }
        x(!1)
      },[_,I,x]);
      let K=l.useMemo(()=>{
        var e,
        n;
        return!(null==p?void 0:null===(e=p.funnel_data)||void 0===e?void 0:e.length)||0===Object.keys(null==p?void 0:null===(n=p.funnel_data)||void 0===n?void 0:n[0]).length
      },[p]),
      J=l.useCallback((e,n)=>{
        p&&(e||n)&&m({
          ...p,
          ...e&&{
            name:e
          },
          ...n&&{
            description:n
          }
        })
      },[p,m]);
      return(0,r.jsxs)(nT,{
        "aria-busy":j||b,
        children:[(0,r.jsx)(nP,{
          id:"funnel-top",
          ref:i
        }),E,j||b&&(0,r.jsx)(nq,{}),_&&I?(0,r.jsx)(em(),{
          existingFunnels:S,
          onCreate:R,
          onUpdate:W,
          onCancel:q,
          onError:U,
          isClone:L,
          funnelData:Y,
          baseElemRef:t,
          backLabel:N?"Funnel suggestions":"Funnel view",
          setChangesOnPage:e=>{
            v||M(e)
          },
          initialChartData:p,
          onTitleDescUpdate:J,
          MassUserIdModal:eD.ZP
        }):null,p&&S.length?K?(0,r.jsxs)(nF,{
          children:[(0,r.jsx)(eK,{}),(0,r.jsx)(nN,{
            funnelType:null==p?void 0:p.funnel_type
          })]
        }):(0,r.jsxs)(r.Fragment,{
          children:[(0,r.jsxs)(nF,{
            children:[(0,r.jsx)(eK,{}),(0,r.jsx)(nz,{
              children:p?(0,r.jsx)(eg.FunnelChart,{
                funnelData:p,
                showDropOff:w,
                stepNames:D,
                onStepNameChange:T?void 0:Z
              },p.funnel_id):null
            })]
          }),(0,r.jsx)(nx,{
            stepNames:D
          })]
        }):b?null:(0,r.jsx)(nS,{}),(0,r.jsx)(nQ,{
          scrollRef:i
        })]
      })
    });
    let nL=o.default.div.withConfig({
      componentId:"sc-8930c514-0"
    })(["display:flex;flex-direction:column;flex-grow:1;align-items:center;justify-content:center;"]),
    nW=o.default.div.withConfig({
      componentId:"sc-8930c514-1"
    })(["font-size:",";margin:",";"],i.r.fontSize(2),i.r.spacing(0,0,3)),
    nR=o.default.button.withConfig({
      componentId:"sc-8930c514-2"
    })(["display:inline-flex;align-items:center;justify-content:center;height:32px;padding:",";border-radius:6px;background:",";border:none;color:#fff;font-weight:500;font-size:",";gap:6px;transition:0.2s all ease-in-out;cursor:pointer;&:disabled{background:",";color:",";pointer-events:none;}&:hover{background:",";}&:active{background:",";}"],i.r.spacing(0,1.5),i.r.colors.primary500.toString(),i.r.fontSize(1.4),i.r.colors.surface05.toString(),i.r.colors.surface200.toString(),i.r.colors.primary600.toString(),i.r.colors.primary700.toString());
    class nU extends l.PureComponent{
      static getDerivedStateFromError(){
        return{
          hasError:!0
        }
      }
      componentDidCatch(e){
        console.error(e),
        this.setState({
          hasError:!0
        })
      }
      render(){
        let{
          children:e,
          onRetry:n
        }=this.props,
        {
          hasError:t
        }=this.state;
        return t?(0,r.jsxs)(nL,{
          children:[(0,r.jsx)(nW,{
            children:"Failed to load the funnel."
          }),(0,r.jsx)(nR,{
            type:"button",
            onClick:n,
            children:"Try again"
          })]
        }):e
      }
      constructor(...e){
        super(...e),
        this.state={
          hasError:!1
        }
      }
    }
    var nG=e=>(0,r.jsx)("svg",{
      width:25,
      height:25,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,r.jsx)("path",{
        d:"M17.937 18.453 6.41 6.133m11.527 0L6.41 18.453",
        stroke:"currentColor",
        strokeWidth:3.5,
        strokeLinecap:"round"
      })
    }),
    nY=e=>(0,r.jsx)("svg",{
      width:6,
      height:10,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,r.jsx)("path",{
        d:"m1.174 9.003 4-4-4-4",
        stroke:"#161E35",
        strokeWidth:1.5,
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    }),
    nK=e=>(0,r.jsxs)("svg",{
      width:15,
      height:12,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,r.jsx)("path",{
        d:"M14.634 5.785A7.772 7.772 0 0 0 7.675.82h-.003A7.772 7.772 0 0 0 .715 5.784v.001a.513.513 0 0 0 0 .349A7.772 7.772 0 0 0 7.673 11.1h.003a7.77 7.77 0 0 0 6.957-4.964v-.001a.512.512 0 0 0 0-.349Zm-6.96 4.289c-2.424 0-4.99-1.796-5.928-4.114.938-2.32 3.504-4.115 5.928-4.115s4.99 1.796 5.929 4.115c-.938 2.318-3.505 4.114-5.929 4.114Z",
        fill:"currentColor",
        stroke:"currentColor",
        strokeWidth:.1
      }),(0,r.jsx)("path",{
        d:"M7.675 3.13a2.826 2.826 0 1 0 0 5.653 2.826 2.826 0 0 0 0-5.652Zm0 4.627a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601Z",
        fill:"currentColor",
        stroke:"currentColor",
        strokeWidth:.1
      })]
    });
    let nJ=o.default.div.withConfig({
      componentId:"sc-a24835f9-0"
    })(["display:flex;flex-direction:column;width:calc( 50% - "," );border-radius:4px;padding:",";border:1px solid ",";"],i.r.spacing(1),i.r.spacing(1.5,2,2),i.r.colors.surface05.toString()),
    n$=o.default.div.withConfig({
      componentId:"sc-a24835f9-1"
    })(["font-size:",";line-height:",";font-weight:700;margin:",";"],i.r.fontSize(1.2),i.r.fontSize(2.4),i.r.spacing(0,0,1)),
    n1=o.default.div.withConfig({
      componentId:"sc-a24835f9-2"
    })(["display:flex;flex-wrap:wrap;gap:",";padding:",";"],i.r.spacing(1),i.r.spacing(0,0,3.5)),
    n2=o.default.div.withConfig({
      componentId:"sc-a24835f9-3"
    })(["display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:50%;background:",";"],i.r.colors.surface05.toString()),
    n0=o.default.div.withConfig({
      componentId:"sc-a24835f9-4"
    })(["display:inline-flex;gap:",";align-items:center;font-size:",";line-height:",";font-weight:400;color:",";&:last-of-type{","{display:none;}}"],i.r.spacing(1),i.r.fontSize(1.2),i.r.fontSize(2.4),i.r.colors.surface400.toString(),n2),
    n4=o.default.div.withConfig({
      componentId:"sc-a24835f9-5"
    })(["display:flex;justify-content:flex-end;"]),
    n3=o.default.button.withConfig({
      componentId:"sc-a24835f9-6"
    })(["display:inline-flex;gap:",";white-space:nowrap;width:130px;justify-content:center;align-items:center;height:28px;border-radius:6px;border:none;color:",";background:",";font-size:",";font-weight:500;cursor:pointer;transition:background 0.2s ease-in-out,color 0.2s ease-in-out;&:hover{background:",";color:#fff;}"],i.r.spacing(1),i.r.colors.primary500.toString(),i.r.colors.primary05.toString(),i.r.fontSize(1.2),i.r.colors.primary500.toString()),
    n6=(e,n,t)=>{
      var r;
      if(!(null==e?void 0:null===(r=e.fb_l)||void 0===r?void 0:r.length))return t;
      let l=e.fb_l[0].value[0];
      return"screen_name"===e.fb_l[0].attribute&&n[l]||l
    };
    var n5=l.memo(e=>{
      let{
        index:n,
        suggestion:t,
        suggestionType:o,
        suggestionValue:i,
        renamedScreens:a
      }=e,
      c=(0,d.useRouter)(),
      {
        appId:s,
        funnelId:u
      }=c.query,
      {
        trackEvent:h
      }=V(),
      f=l.useMemo(()=>{
        let e=t.step_d_l.map(e=>e);
        return"steps=".concat(encodeURIComponent(JSON.stringify(e)))
      },[t]),
      A=l.useCallback(()=>{
        h("wa_funnels_view_funnel_suggestion",{
          suggestion_type:o,
          suggestion_value:i
        }),
        c.push("/integration?appId=".concat(s,"&parentType=funnels").concat(u?"&funnelId=".concat(u):"","&").concat(f,"&suggestionType=").concat(o,"&suggestionValue=").concat(i,"#create"),"/app/".concat(s,"/funnels").concat(u?"/".concat(u):"","?").concat(f,"&suggestionType=").concat(o,"&suggestionValue=").concat(i,"#create"))
      },[f,c,s,u,o,i,h]),
      {
        launchedText:v
      }=(0,e8.ci)();
      return(0,r.jsxs)(nJ,{
        children:[(0,r.jsxs)(n$,{
          children:["Suggestion ",n+1]
        }),(0,r.jsx)(n1,{
          children:t.step_d_l.map(e=>(0,r.jsxs)(n0,{
            children:[n6(e,a,v),(0,r.jsx)(n2,{
              children:(0,r.jsx)(nY,{})
            })]
          }))
        }),(0,r.jsx)(n4,{
          children:(0,r.jsxs)(n3,{
            type:"button",
            onClick:A,
            children:[(0,r.jsx)(nK,{}),"View funnel"]
          })
        })]
      })
    });
    let n8=o.default.div.withConfig({
      componentId:"sc-1d3bc106-0"
    })(['display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;height:100%;width:100%;background:rgba(22,30,53,0.3);;z-index:99;&[aria-hidden="true"]{display:none;}']),
    n7=o.default.div.withConfig({
      componentId:"sc-1d3bc106-1"
    })(["display:flex;flex-direction:column;background:#fff;border-radius:4px;width:900px;max-width:100%;height:628px;max-height:100%;"]),
    n9=o.default.div.withConfig({
      componentId:"sc-1d3bc106-2"
    })(["display:flex;align-items:center;position:relative;background:",";border-radius:4px 4px 0 0;padding:",";font-size:",";line-height:",";font-weight:700;color:",";gap:",";"],i.r.colors.surface05.toString(),i.r.spacing(2.5),i.r.fontSize(2.2),i.r.fontSize(2.4),i.r.colors.surface500.toString(),i.r.spacing(1)),
    te=o.default.div.withConfig({
      componentId:"sc-1d3bc106-3"
    })(["display:flex;flex-grow:1;flex-direction:column;padding:",";max-height:100%;overflow:hidden;"],i.r.spacing(2)),
    tn=o.default.p.withConfig({
      componentId:"sc-1d3bc106-4"
    })(["font-size:",";font-weight:400;line-height:",";color:",";"],i.r.fontSize(1.2),i.r.fontSize(2.4),i.r.colors.surface500.toString()),
    tt=o.default.div.withConfig({
      componentId:"sc-1d3bc106-5"
    })(["display:flex;flex-wrap:wrap;gap:",";max-height:100%;overflow-y:auto;"],i.r.spacing(2)),
    tr=o.default.div.withConfig({
      componentId:"sc-1d3bc106-6"
    })(["display:flex;align-items:flex-start;width:100%;gap:",";margin:",";"],i.r.spacing(2),i.r.spacing(0,0,2)),
    tl=(0,o.default)(eg.CustomSelect).withConfig({
      componentId:"sc-1d3bc106-7"
    })([""]),
    to=o.default.div.withConfig({
      componentId:"sc-1d3bc106-8"
    })(["display:flex;flex-direction:column;flex-grow:1;&:first-of-type{flex-grow:initial;width:184px;}"]),
    ti=o.default.div.withConfig({
      componentId:"sc-1d3bc106-9"
    })(["display:flex;flex-direction:column;flex-grow:1;align-items:center;justify-content:center;"]),
    ta=o.default.div.withConfig({
      componentId:"sc-1d3bc106-10"
    })(["display:flex;justify-content:center;align-items:center;font-size:",";line-height:",";font-weight:400;color:",";"],i.r.fontSize(1.2),i.r.fontSize(2.4),i.r.colors.gray3.toString()),
    tc=o.default.div.withConfig({
      componentId:"sc-1d3bc106-11"
    })(["display:flex;align-items:center;color:#000;font-weight:500;font-size:",";line-height:",";"],i.r.fontSize(1.4),i.r.fontSize(2.4)),
    ts=(0,o.default)(e=>(0,r.jsxs)("svg",{
      width:145,
      height:77,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,r.jsxs)("g",{
        clipPath:"url(#suggestions-illustration_svg__a)",
        children:[(0,r.jsx)("path",{
          d:"M144.198.12H.89v75.247h143.308V.119Z",
          fill:"#F2F2F2"
        }),(0,r.jsx)("path",{
          d:"M144.111.003H.801v8.723h143.31V.003Z",
          fill:"#E6E6E6"
        }),(0,r.jsx)("path",{
          d:"M141.516 12.263H4.13V71.4h137.386V12.263ZM14.382 5.785a1.443 1.443 0 1 0 0-2.886 1.443 1.443 0 0 0 0 2.886ZM19.859 5.785a1.443 1.443 0 1 0 0-2.886 1.443 1.443 0 0 0 0 2.886ZM8.89 5.785a1.443 1.443 0 1 0 0-2.886 1.443 1.443 0 0 0 0 2.886Z",
          fill:"#fff"
        }),(0,r.jsx)("path",{
          d:"M27.536 56.96a2.535 2.535 0 1 0 0-5.07 2.535 2.535 0 0 0 0 5.07ZM49.93 50.32a2.535 2.535 0 1 0 0-5.07 2.535 2.535 0 0 0 0 5.07ZM72.326 56.96a2.535 2.535 0 1 0 0-5.07 2.535 2.535 0 0 0 0 5.07ZM94.72 23.468a2.535 2.535 0 1 0 .001-5.07 2.535 2.535 0 0 0 0 5.07ZM117.116 23.156a2.535 2.535 0 1 0 .001-5.071 2.535 2.535 0 0 0-.001 5.07Z",
          fill:"#E4E4E4"
        }),(0,r.jsx)("path",{
          d:"M72.379 54.992 49.93 48.018l-22.14 6.745-.508-.677 22.649-7.124 22.341 6.894 22.202-33.28.09-.036 22.394-.039.316.784-22.306.004-22.589 33.703Z",
          fill:"#E4E4E4"
        })]
      }),(0,r.jsx)("defs",{
        children:(0,r.jsx)("clipPath",{
          id:"suggestions-illustration_svg__a",
          children:(0,r.jsx)("path",{
            fill:"#fff",
            transform:"translate(.802 .003)",
            d:"M0 0h143.396v76H0z"
          })
        })
      })]
    })).withConfig({
      componentId:"sc-1d3bc106-12"
    })(["margin:",";"],i.r.spacing(0,0,2)),
    td=(0,o.default)(a.Z).withConfig({
      componentId:"sc-1d3bc106-13"
    })(["width:auto;height:auto;margin:0;margin:",";"],i.r.spacing(0,0,2)),
    tu=o.default.button.withConfig({
      componentId:"sc-1d3bc106-14"
    })(["dispaly:flex;position:absolute;top:50%;right:20px;transform:translate( 0,-50% );padding:0;border:none;background:transparent;width:24px;height:24px;align-items:center;justify-content:center;color:#BDBDBD;transition:color 0.2s ease-in-out;cursor:pointer;&:hover{color:",";}"],i.r.colors.gray2.toString()),
    th=o.default.button.withConfig({
      componentId:"sc-1d3bc106-15"
    })(["display:flex;height:32px;width:92px;min-width:92px;align-items:center;justify-content:center;background:",";border:none;border-radius:6px;color:#fff;font-size:",";font-weight:500;&:disabled{background:",";color:",";}&:not( :disabled ){cursor:pointer;&:hover{background:",";}}"],i.r.colors.primary500.toString(),i.r.fontSize(1.2),i.r.colors.surface05.toString(),i.r.colors.surface200.toString(),i.r.colors.primary600.toString()),
    tf=o.default.div.withConfig({
      componentId:"sc-1d3bc106-16"
    })(["font-size:",";line-height:",";font-weight:500;color:",";margin:",";"],i.r.fontSize(1.2),i.r.fontSize(2.4),i.r.colors.surface500.toString(),i.r.spacing(0,0,.75)),
    tA=o.default.div.withConfig({
      componentId:"sc-1d3bc106-17"
    })(["font-size:",";color:",";padding:",';&[aria-hidden="true"]{visibility:hidden;}'],i.r.fontSize(1),i.r.colors.error500.toString(),i.r.spacing(1,0,0)),
    tv=o.default.img.withConfig({
      componentId:"sc-1d3bc106-18"
    })(["width:63px;height:57px;margin:",";"],i.r.spacing(0,0,2)),
    tp=(0,o.default)(v).withConfig({
      componentId:"sc-1d3bc106-19"
    })(["color:",";"],i.r.colors.primary500.toString()),
    tg=(0,o.default)(e=>(0,r.jsxs)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      id:"no-results_svg__Layer_1",
      "data-name":"Layer 1",
      viewBox:"0 0 164.66 116",
      ...e,
      children:[(0,r.jsx)("defs",{
        children:(0,r.jsx)("style",{
          children:".no-results_svg__cls-4{fill:#bbd4ff}.no-results_svg__cls-5{fill:#dfeaff}.no-results_svg__cls-6{fill:#5d97ff}"
        })
      }),(0,r.jsx)("path",{
        d:"M126.66 4v52.77c-4.72.25-9.07 1.91-12.62 4.57-3.94 2.96-6.92 7.15-8.33 12.01-.61 2.06-.94 4.25-.94 6.51 0 1.87.22 3.69.65 5.43H30.66c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h92c2.21 0 4 1.79 4 4Z",
        className:"no-results_svg__cls-5"
      }),(0,r.jsx)("rect",{
        width:18.55,
        height:59.48,
        x:40.2,
        y:13.87,
        className:"no-results_svg__cls-6",
        rx:1,
        ry:1
      }),(0,r.jsx)("rect",{
        width:18.55,
        height:59.48,
        x:67.85,
        y:13.87,
        className:"no-results_svg__cls-4",
        rx:1,
        ry:1
      }),(0,r.jsx)("rect",{
        width:18.55,
        height:41.45,
        x:67.85,
        y:31.9,
        className:"no-results_svg__cls-6",
        rx:1,
        ry:1
      }),(0,r.jsx)("path",{
        d:"M114.04 32.9v28.44c-3.94 2.96-6.92 7.15-8.33 12.01H96.5c-.55 0-1-.45-1-1V32.9c0-.56.45-1 1-1h16.54c.56 0 1 .44 1 1Z",
        className:"no-results_svg__cls-4"
      }),(0,r.jsx)("path",{
        d:"M114.04 53.61v7.73c-3.94 2.96-6.92 7.15-8.33 12.01H96.5c-.55 0-1-.45-1-1V53.61c0-.55.45-1 1-1h16.54c.56 0 1 .45 1 1Z",
        className:"no-results_svg__cls-6"
      }),(0,r.jsx)("path",{
        d:"M146.7 88.32h3.76v24.81h-3.76z",
        style:{
          isolation:"isolate",
          opacity:.4,
          fill:"#5d97ff"
        },
        transform:"rotate(-45 148.59 100.722)"
      }),(0,r.jsx)("rect",{
        width:6.69,
        height:24.81,
        x:149.18,
        y:92.23,
        rx:.5,
        ry:.5,
        style:{
          fill:"#022251"
        },
        transform:"rotate(-45 152.53 104.63)"
      }),(0,r.jsx)("circle",{
        cx:127.89,
        cy:79.94,
        r:19.33,
        style:{
          fill:"#8fbdff"
        }
      }),(0,r.jsx)("circle",{
        cx:127.89,
        cy:79.94,
        r:15.42,
        className:"no-results_svg__cls-5"
      }),(0,r.jsx)("path",{
        d:"M136.5 85.32c.39.39.39 1.03 0 1.42l-1.82 1.81c-.39.4-1.02.4-1.41 0l-5.38-5.38-5.38 5.38a.99.99 0 0 1-1.42 0l-1.81-1.81c-.39-.39-.39-1.03 0-1.42l5.38-5.38-5.38-5.38a.996.996 0 0 1 0-1.41l1.81-1.82c.39-.39 1.03-.39 1.42 0l5.38 5.38 5.38-5.38a.996.996 0 0 1 1.41 0l1.82 1.82c.39.39.39 1.02 0 1.41l-5.38 5.38 5.38 5.38Z",
        style:{
          fill:"#f4584c"
        }
      })]
    })).withConfig({
      componentId:"sc-1d3bc106-20"
    })(["margin:",";width:164.66px;height:116px;"],i.r.spacing(0,0,2)),
    tm=[{
      label:"Event happened",
      value:"event_name",
      table:"event"
    },{
      label:"Screen visited",
      value:"screen_name",
      table:"screenvisit"
    }];
    var tx=l.memo(()=>{
      var e;
      let{
        renamedScreens:n
      }=(0,g.v9)(e=>{
        let{
          screenRenamedList:n
        }=e;
        return{
          renamedScreens:n
        }
      }),
      t=l.useMemo(()=>Object.fromEntries(Object.entries(n).map(e=>{
        let[n,t]=e;
        return[t,n]
      })),[n]),
      o=l.useMemo(()=>Object.values(n),[n]),
      {
        trackEvent:i
      }=V(),
      [a,c]=l.useState({
        suggestionType:!1,
        suggestionValue:!1
      }),
      s=(0,d.useRouter)(),
      {
        query:{
          appId:u,
          funnelId:h,
          suggestionType:f,
          suggestionValue:A
        },
        asPath:v
      }=s,
      {
        suggestionType:m,
        suggestionValue:x
      }=l.useMemo(()=>({
        suggestionType:f,
        suggestionValue:A
      }),[f,A]),
      [w,j]=l.useState(void 0),
      [b,y]=l.useState(void 0),
      Z=l.useMemo(()=>v.split("#")[1],[v]),
      B=l.useMemo(()=>"funnel-suggestions"===Z,[Z]);
      l.useEffect(()=>{
        B&&(i("wa_funnels_suggestions_open"),j(f||void 0),y(A||void 0),c({
          suggestionType:!1,
          suggestionValue:!1
        }))
      },[B]);
      let E=l.useMemo(()=>M(u,x),[u,x]),
      {
        data:S,
        isLoading:O,
        error:Q
      }=(0,p.useQuery)({
        queryKey:E,
        retry:3,
        queryFn:()=>k(u,x)
      }),
      T=l.useCallback((e,n)=>{
        n=n?"&suggestionValue=".concat(n):"",
        s.push("/integration?appId=".concat(u,"&parentType=funnels").concat(h?"&funnelId=".concat(h):"","&suggestionType=").concat(e).concat(n,"#funnel-suggestions"),"/app/".concat(u,"/funnels").concat(h?"/".concat(h):"","?suggestionType=").concat(e).concat(n,"#funnel-suggestions"))
      },[s,u,h]),
      {
        searchTable:z,
        searchAttribute:F
      }=l.useMemo(()=>{
        let e=tm.find(e=>e.value===w);
        return{
          searchTable:null==e?void 0:e.table,
          searchAttribute:null==e?void 0:e.value
        }
      },[w]),
      [_,H]=l.useState(""),
      [P,I]=l.useState(_),
      N=l.useRef(void 0);
      l.useEffect(()=>{
        N.current&&clearTimeout(N.current),
        N.current=setTimeout(()=>{
          I(_)
        },500)
      },[_]);
      let q=C(u,z,F,P),
      {
        data:X,
        isLoading:L
      }=(0,p.useQuery)({
        queryKey:q,
        queryFn:()=>D(u,z,F,P)
      }),
      W=l.useMemo(()=>"screen_name"===w?((null==X?void 0:X.data)||[]).map(e=>({
        label:n[e]||e,
        value:e
      })):((null==X?void 0:X.data)||[]).map(e=>({
        label:e,
        value:e
      })),[X,w,n]),
      R=l.useMemo(()=>{
        if(!w)return W;
        let e=W;
        if(_){
          let n=o.filter(e=>e.toLowerCase().includes(_.toLowerCase())).map(e=>({
            label:e,
            value:t[e]
          }));
          e=W.concat(n)
        }
        let r=W.map(e=>e.value);
        return b&&n[b]&&!r.includes(b)&&e.push({
          label:n[b],
          value:b
        }),
        e.sort((e,n)=>e.label>n.label?1:-1)
      },[W,w,_,o,t,b,n]),
      U=l.useRef(null),
      G=l.useRef(null),
      Y=l.useCallback(e=>{
        H(""),
        j(e),
        y(void 0),
        setTimeout(()=>{
          var e;
          null===(e=G.current)||void 0===e||e.focus()
        },400)
      },[]);
      l.useEffect(()=>{
        setTimeout(()=>{
          var e;
          null===(e=U.current)||void 0===e||e.focus()
        },400)
      },[B]);
      let K=l.useCallback(e=>{
        y(e)
      },[]),
      J=l.useCallback(()=>{
        i("wa_funnels_get_suggestions",{
          suggestion_type:w,
          suggestion_value:b
        }),
        T(w,b)
      },[T,w,b,i]),
      $=l.useMemo(()=>!w||!b,[w,b]),
      ee=l.useMemo(()=>w?"event_name"===w?"Select conversion event":"Select conversion screen":"Select conversion event or screen",[w]),
      en=l.useCallback(()=>{
        c(e=>({
          ...e,
          suggestionType:!0
        }))
      },[]),
      et=l.useCallback(()=>{
        c(e=>({
          ...e,
          suggestionValue:!0
        }))
      },[]),
      er=l.useCallback(()=>{
        s.push("/integration?appId=".concat(u,"&parentType=funnels").concat(h?"&funnelId=".concat(h):""),"/app/".concat(u,"/funnels").concat(h?"/".concat(h):""))
      },[s,u,h]);
      return(0,r.jsx)(n8,{
        "aria-hidden":"funnel-suggestions"!==Z,
        children:(0,r.jsxs)(n7,{
          children:[(0,r.jsxs)(n9,{
            children:[(0,r.jsx)(tp,{}),"Get funnel suggestions",(0,r.jsx)(tu,{
              onClick:er,
              type:"button",
              children:(0,r.jsx)(nG,{})
            })]
          }),(0,r.jsxs)(te,{
            children:[(0,r.jsx)(tn,{
              children:"What action do you want your users to complete? Select a screen or event as an end goal that means conversion to you, and get suggested funnels based on the most common paths to it."
            }),(0,r.jsx)(tf,{
              children:"Add conversion screen or event:"
            }),(0,r.jsxs)(tr,{
              children:[(0,r.jsxs)(to,{
                children:[(0,r.jsx)(tl,{
                  inputRef:U,
                  placeholder:"Select action",
                  onChange:Y,
                  options:tm,
                  value:w||null,
                  onBlur:en,
                  invalid:!w&&a.suggestionType
                }),(0,r.jsx)(tA,{
                  "aria-hidden":!(!w&&a.suggestionType),
                  children:"Please select a conversion action."
                })]
              }),(0,r.jsxs)(to,{
                children:[(0,r.jsx)(eg.CustomSelect,{
                  inputRef:G,
                  searchable:!0,
                  ref:G,
                  placeholder:ee,
                  disabled:!w,
                  searchValue:P,
                  onSearch:H,
                  options:R,
                  value:b||null,
                  onChange:K,
                  loading:L,
                  onBlur:et,
                  invalid:!b&&a.suggestionValue,
                  message:R.length>=20?"Not all results are displayed - type to search for more.":void 0
                }),(0,r.jsx)(tA,{
                  "aria-hidden":!(!b&&a.suggestionValue),
                  children:"event_name"===w?"Please select a conversion event":"Please select a conversion screen"
                })]
              }),(0,r.jsx)(th,{
                type:"button",
                disabled:$,
                onClick:J,
                children:"Get funnels"
              })]
            }),m&&x?O?(0,r.jsxs)(ti,{
              children:[(0,r.jsx)(td,{}),(0,r.jsx)(ta,{
                children:"Almost there! Your funnel suggestions will be ready in a moment."
              })]
            }):(null==S?void 0:null===(e=S.suggestions)||void 0===e?void 0:e.length)?Q?(0,r.jsxs)(ti,{
              children:[(0,r.jsx)(tv,{
                src:"/static/funnel/no-results.png"
              }),(0,r.jsx)(ta,{
                children:"Sorry, something went wrong while generating suggestions. Please give it another try or consider creating a funnel from scratch."
              })]
            }):(0,r.jsx)(tt,{
              children:null==S?void 0:S.suggestions.map((e,t)=>(0,r.jsx)(n5,{
                index:t,
                suggestion:e,
                suggestionType:m,
                suggestionValue:x,
                renamedScreens:n
              },t))
            }):(0,r.jsxs)(ti,{
              children:[(0,r.jsx)(tg,{}),(0,r.jsx)(tc,{
                children:"Sorry, we couldn't suggest funnels for this conversion action"
              }),(0,r.jsx)(ta,{
                children:"Please try a different action or create a funnel from scratch."
              })]
            }):(0,r.jsxs)(ti,{
              children:[(0,r.jsx)(ts,{}),(0,r.jsx)(ta,{
                children:"Add conversion screen or event to get funnel suggestions."
              })]
            })]
          })]
        })
      })
    }),
    tw=t(32471),
    tj=e=>(0,r.jsxs)("svg",{
      viewBox:"0 0 548 511",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      xmlnsXlink:"http://www.w3.org/1999/xlink",
      ...e,
      children:[(0,r.jsx)("path",{
        fill:"url(#funnels-locked-illustration_svg__a)",
        d:"M293 0h245.97v480H293z"
      }),(0,r.jsxs)("g",{
        filter:"url(#funnels-locked-illustration_svg__b)",
        children:[(0,r.jsx)("g",{
          filter:"url(#funnels-locked-illustration_svg__c)",
          children:(0,r.jsx)("rect",{
            x:15,
            y:165,
            width:390,
            height:280,
            rx:4,
            fill:"#F5F5F5"
          })
        }),(0,r.jsx)("path",{
          d:"M31.2 194.99V200h-2.93v-14.219h5.546c1.068 0 2.006.196 2.813.586.814.391 1.439.947 1.875 1.67.436.716.654 1.533.654 2.451 0 1.394-.478 2.494-1.435 3.301-.95.801-2.27 1.201-3.955 1.201h-2.569Zm0-2.373h2.616c.775 0 1.364-.182 1.768-.547.41-.364.615-.885.615-1.562 0-.697-.205-1.26-.615-1.69-.41-.429-.977-.651-1.7-.664H31.2v4.463Zm16.122 6.309c-.696.846-1.66 1.269-2.89 1.269-1.133 0-2-.325-2.598-.976-.593-.651-.895-1.605-.908-2.862v-6.923h2.822v6.826c0 1.1.501 1.65 1.504 1.65.957 0 1.614-.332 1.973-.996v-7.48h2.832V200H47.4l-.078-1.074Zm10.801-6.846a7.678 7.678 0 0 0-1.016-.078c-1.067 0-1.767.361-2.1 1.084V200h-2.822v-10.566h2.667l.078 1.259c.566-.97 1.35-1.455 2.353-1.455.313 0 .606.043.88.127l-.04 2.715Zm5.567 5.84c.52 0 .944-.143 1.269-.43.325-.286.495-.667.508-1.142h2.646a3.642 3.642 0 0 1-.586 1.972 3.903 3.903 0 0 1-1.582 1.387c-.664.326-1.4.488-2.207.488-1.51 0-2.702-.478-3.574-1.435-.872-.964-1.309-2.292-1.309-3.985v-.185c0-1.628.433-2.927 1.3-3.897.865-.97 2.053-1.455 3.564-1.455 1.321 0 2.38.378 3.174 1.133.8.749 1.207 1.748 1.22 2.998h-2.646c-.013-.547-.183-.989-.508-1.328-.326-.345-.755-.518-1.29-.518-.657 0-1.155.241-1.493.723-.332.475-.498 1.25-.498 2.324v.293c0 1.088.166 1.869.498 2.344.332.475.836.713 1.514.713Zm8.788-7.334c.75-.898 1.69-1.348 2.823-1.348 2.291 0 3.454 1.332 3.486 3.994V200h-2.822v-6.689c0-.606-.13-1.052-.39-1.338-.261-.293-.694-.44-1.3-.44-.826 0-1.425.319-1.797.957V200h-2.822v-15h2.822v5.586ZM87.04 200a3.139 3.139 0 0 1-.283-.947c-.684.761-1.572 1.142-2.666 1.142-1.035 0-1.895-.299-2.578-.898-.677-.599-1.016-1.354-1.016-2.266 0-1.12.413-1.979 1.24-2.578.834-.599 2.035-.902 3.604-.908h1.299v-.606c0-.488-.127-.878-.381-1.171-.248-.293-.641-.44-1.182-.44-.475 0-.85.114-1.123.342-.267.228-.4.54-.4.937H80.73c0-.612.188-1.178.566-1.699.377-.521.911-.928 1.601-1.22.69-.3 1.465-.45 2.325-.45 1.302 0 2.334.329 3.095.987.769.651 1.153 1.569 1.153 2.754v4.58c.006 1.002.146 1.761.42 2.275V200h-2.852Zm-2.334-1.963c.417 0 .8-.091 1.152-.273.352-.189.612-.44.782-.752v-1.817h-1.055c-1.413 0-2.165.489-2.256 1.465l-.01.166c0 .352.124.641.371.869.248.228.586.342 1.016.342Zm12.656-.957c0-.345-.172-.615-.517-.81-.339-.202-.886-.381-1.64-.538-2.514-.527-3.77-1.595-3.77-3.203 0-.937.387-1.718 1.162-2.343.781-.632 1.8-.948 3.056-.948 1.341 0 2.412.316 3.213.948.808.631 1.211 1.451 1.211 2.46h-2.822c0-.403-.13-.735-.39-.996-.261-.267-.668-.4-1.221-.4-.476 0-.844.107-1.104.322-.26.215-.39.489-.39.821 0 .312.146.566.439.761.3.189.8.355 1.504.498.703.137 1.295.293 1.777.469 1.491.547 2.236 1.494 2.236 2.842 0 .963-.413 1.745-1.24 2.344-.827.592-1.894.888-3.203.888-.885 0-1.673-.156-2.363-.468-.684-.319-1.22-.752-1.612-1.299-.39-.554-.585-1.149-.585-1.787h2.675c.026.501.212.885.557 1.152.345.267.807.4 1.387.4.54 0 .947-.101 1.22-.302.28-.209.42-.479.42-.811Zm9.434 3.115c-1.55 0-2.813-.475-3.789-1.425-.97-.951-1.455-2.217-1.455-3.799v-.274c0-1.061.205-2.008.615-2.842.41-.839.99-1.484 1.738-1.933.756-.456 1.615-.684 2.578-.684 1.446 0 2.582.456 3.409 1.367.833.912 1.25 2.204 1.25 3.877v1.153h-6.729c.091.69.365 1.243.82 1.66.463.417 1.045.625 1.748.625 1.088 0 1.937-.394 2.549-1.182l1.387 1.553c-.423.599-.996 1.068-1.719 1.406-.722.332-1.523.498-2.402.498Zm-.322-8.672c-.56 0-1.016.189-1.368.567-.345.377-.566.918-.664 1.621h3.926v-.225c-.013-.625-.182-1.106-.508-1.445-.325-.345-.787-.518-1.386-.518ZM118.504 200v-8.496h-1.572v-2.07h1.572v-.899c0-1.185.338-2.103 1.016-2.754.683-.657 1.637-.986 2.861-.986.39 0 .869.065 1.435.195l-.029 2.188a3.574 3.574 0 0 0-.859-.088c-1.061 0-1.592.498-1.592 1.494v.85h2.1v2.07h-2.1V200h-2.832Zm12.725-1.074c-.697.846-1.661 1.269-2.891 1.269-1.133 0-1.999-.325-2.598-.976-.592-.651-.895-1.605-.908-2.862v-6.923h2.822v6.826c0 1.1.502 1.65 1.504 1.65.957 0 1.615-.332 1.973-.996v-7.48h2.832V200h-2.656l-.078-1.074Zm7.46-9.492.088 1.22c.756-.944 1.768-1.416 3.037-1.416 1.12 0 1.954.329 2.5.987.547.657.827 1.64.84 2.949V200h-2.822v-6.758c0-.599-.13-1.032-.391-1.299-.26-.273-.693-.41-1.298-.41-.795 0-1.39.339-1.788 1.016V200h-2.822v-10.566h2.656Zm11.211 0 .088 1.22c.755-.944 1.768-1.416 3.037-1.416 1.12 0 1.954.329 2.5.987.547.657.827 1.64.84 2.949V200h-2.822v-6.758c0-.599-.13-1.032-.391-1.299-.26-.273-.693-.41-1.298-.41-.795 0-1.39.339-1.788 1.016V200h-2.822v-10.566h2.656Zm13.477 10.761c-1.55 0-2.813-.475-3.789-1.425-.97-.951-1.455-2.217-1.455-3.799v-.274c0-1.061.205-2.008.615-2.842.41-.839.99-1.484 1.738-1.933.756-.456 1.615-.684 2.578-.684 1.446 0 2.582.456 3.409 1.367.833.912 1.25 2.204 1.25 3.877v1.153h-6.729c.091.69.365 1.243.82 1.66.463.417 1.045.625 1.748.625 1.088 0 1.937-.394 2.549-1.182l1.387 1.553c-.423.599-.996 1.068-1.719 1.406-.722.332-1.523.498-2.402.498Zm-.322-8.672c-.56 0-1.016.189-1.367.567-.346.377-.567.918-.665 1.621h3.926v-.225c-.013-.625-.182-1.106-.508-1.445-.325-.345-.787-.518-1.386-.518Zm9.257 8.477h-2.832v-15h2.832v15Z",
          fill:"#5D97FF"
        }),(0,r.jsx)("path",{
          d:"M33.21 216.135h1.184v.885h-1.183V219h-1.09v-1.98h-3.885v-.639l3.82-5.912h1.155v5.666Zm-3.743 0h2.654v-4.184l-.129.235-2.525 3.949Zm8.273-.317h-2.86v-.884h2.86v.884Zm4.752 1.5c0-.293-.111-.519-.334-.679-.218-.164-.603-.305-1.154-.422-.547-.117-.982-.258-1.307-.422-.32-.164-.558-.359-.715-.586a1.416 1.416 0 0 1-.228-.809c0-.519.219-.959.656-1.318.442-.359 1.004-.539 1.688-.539.718 0 1.3.186 1.746.557.449.371.674.845.674 1.423h-1.09c0-.296-.127-.552-.381-.767-.25-.215-.566-.322-.95-.322-.394 0-.703.086-.925.257a.812.812 0 0 0-.334.674c0 .262.103.459.31.592.207.133.58.26 1.12.381.542.121.982.266 1.318.433.336.168.584.372.744.61.164.234.246.521.246.861 0 .567-.226 1.022-.68 1.365-.453.34-1.04.51-1.763.51-.508 0-.957-.09-1.348-.269-.39-.18-.697-.43-.92-.75a1.842 1.842 0 0 1-.328-1.049h1.084c.02.363.164.652.434.867.273.211.633.316 1.078.316.41 0 .738-.082.984-.246.25-.168.375-.39.375-.668Zm3.967-6.193v1.535h1.184v.838h-1.184v3.932c0 .254.053.445.158.574.106.125.285.187.54.187.124 0 .296-.023.515-.07V219a3.148 3.148 0 0 1-.832.117c-.485 0-.85-.146-1.096-.439-.246-.293-.369-.709-.369-1.248v-3.932h-1.154v-.838h1.154v-1.535h1.084Zm5.086 7.992c-.86 0-1.559-.281-2.098-.844-.539-.566-.808-1.322-.808-2.267v-.199c0-.629.119-1.19.357-1.682a2.812 2.812 0 0 1 1.008-1.16 2.537 2.537 0 0 1 1.406-.422c.824 0 1.465.271 1.922.814.457.543.686 1.321.686 2.332v.452h-4.295c.015.625.197 1.13.545 1.517.351.383.797.574 1.335.574.383 0 .707-.078.973-.234.266-.156.498-.363.697-.621l.662.516c-.53.816-1.328 1.224-2.39 1.224Zm-.135-5.683c-.437 0-.804.16-1.101.48-.297.316-.48.762-.551 1.336h3.176v-.082c-.032-.551-.18-.977-.446-1.277-.265-.305-.625-.457-1.078-.457Zm9.223 2.466c0 .965-.22 1.743-.662 2.332-.442.59-1.04.885-1.793.885-.77 0-1.375-.244-1.817-.732v3.053h-1.084v-8.778h.99l.053.703c.442-.547 1.055-.82 1.84-.82.762 0 1.363.287 1.805.861.445.575.668 1.373.668 2.397v.099Zm-1.084-.123c0-.715-.152-1.279-.457-1.693-.305-.414-.723-.621-1.254-.621-.656 0-1.148.291-1.477.873v3.029c.325.578.82.867 1.489.867.52 0 .931-.205 1.236-.615.309-.414.463-1.027.463-1.84ZM65.525 219v-5.502h-1.002v-.838h1.002v-.65c0-.68.182-1.205.545-1.576.364-.372.877-.557 1.541-.557.25 0 .498.033.745.1l-.06.878a3.128 3.128 0 0 0-.585-.052c-.352 0-.623.103-.814.31-.192.203-.288.496-.288.879v.668h1.354v.838h-1.354V219h-1.084Zm7.553-.627c-.422.496-1.04.744-1.857.744-.676 0-1.192-.195-1.547-.586-.352-.394-.53-.976-.533-1.746v-4.125h1.084v4.096c0 .961.39 1.441 1.172 1.441.828 0 1.378-.308 1.652-.926v-4.611h1.084V219h-1.031l-.024-.627Zm3.733-5.713.035.797c.484-.609 1.117-.914 1.898-.914 1.34 0 2.016.756 2.028 2.268V219h-1.085v-4.195c-.003-.457-.109-.795-.316-1.014-.203-.219-.521-.328-.955-.328-.352 0-.66.094-.926.281a1.918 1.918 0 0 0-.62.738V219h-1.085v-6.34h1.026Zm6.62 0 .036.797c.484-.609 1.117-.914 1.898-.914 1.34 0 2.016.756 2.028 2.268V219h-1.084v-4.195c-.004-.457-.11-.795-.317-1.014-.203-.219-.521-.328-.955-.328-.352 0-.66.094-.926.281a1.918 1.918 0 0 0-.62.738V219h-1.085v-6.34h1.026Zm8.227 6.457c-.86 0-1.558-.281-2.097-.844-.54-.566-.809-1.322-.809-2.267v-.199c0-.629.12-1.19.357-1.682a2.812 2.812 0 0 1 1.008-1.16 2.537 2.537 0 0 1 1.406-.422c.825 0 1.465.271 1.922.814.457.543.686 1.321.686 2.332v.452h-4.295c.016.625.197 1.13.545 1.517.351.383.797.574 1.336.574.383 0 .707-.078.972-.234.266-.156.499-.363.698-.621l.662.516c-.531.816-1.328 1.224-2.39 1.224Zm-.135-5.683c-.437 0-.804.16-1.101.48-.297.316-.48.762-.55 1.336h3.175v-.082c-.031-.551-.18-.977-.445-1.277-.266-.305-.625-.457-1.079-.457ZM96.568 219h-1.084v-9h1.084v9Zm6.973-3.182h-2.859v-.884h2.859v.884Zm5.338 2.262h4.043v.92h-5.174v-8.531h1.131v7.611Zm9.07.92c-.062-.125-.113-.348-.152-.668-.504.523-1.106.785-1.805.785-.625 0-1.138-.176-1.541-.527a1.73 1.73 0 0 1-.597-1.348c0-.66.25-1.172.75-1.535.503-.367 1.21-.551 2.121-.551h1.054v-.498c0-.379-.113-.679-.34-.902-.226-.227-.56-.34-1.001-.34-.387 0-.711.098-.973.293-.262.195-.393.432-.393.709h-1.09c0-.316.112-.621.334-.914.227-.297.532-.531.914-.703a3.097 3.097 0 0 1 1.272-.258c.73 0 1.303.184 1.717.551.414.363.629.865.644 1.506v2.918c0 .582.075 1.044.223 1.388V219h-1.137Zm-1.799-.826c.34 0 .662-.088.967-.264a1.59 1.59 0 0 0 .662-.685v-1.301h-.849c-1.328 0-1.992.388-1.992 1.166 0 .34.113.605.339.797.227.191.518.287.873.287Zm8.104-.856c0-.293-.111-.519-.334-.679-.219-.164-.604-.305-1.154-.422-.547-.117-.983-.258-1.307-.422-.32-.164-.559-.359-.715-.586a1.418 1.418 0 0 1-.228-.809c0-.519.218-.959.656-1.318.441-.359 1.004-.539 1.687-.539.719 0 1.301.186 1.746.557.45.371.674.845.674 1.423h-1.09c0-.296-.127-.552-.38-.767-.25-.215-.567-.322-.95-.322-.394 0-.703.086-.925.257a.812.812 0 0 0-.334.674c0 .262.103.459.31.592.207.133.58.26 1.119.381.543.121.983.266 1.319.433.336.168.584.372.744.61.164.234.246.521.246.861 0 .567-.227 1.022-.68 1.365-.453.34-1.041.51-1.763.51-.508 0-.957-.09-1.348-.269a2.227 2.227 0 0 1-.92-.75 1.84 1.84 0 0 1-.328-1.049h1.084c.019.363.164.652.433.867.274.211.633.316 1.079.316.41 0 .738-.082.984-.246.25-.168.375-.39.375-.668Zm3.967-6.193v1.535h1.183v.838h-1.183v3.932c0 .254.052.445.158.574.105.125.285.187.539.187.125 0 .297-.023.516-.07V219a3.155 3.155 0 0 1-.832.117c-.485 0-.85-.146-1.096-.439-.246-.293-.369-.709-.369-1.248v-3.932h-1.155v-.838h1.155v-1.535h1.084Zm6.896 3.082h.815c.511-.008.914-.143 1.207-.404.293-.262.439-.615.439-1.061 0-1-.498-1.5-1.494-1.5-.469 0-.844.135-1.125.404-.277.266-.416.62-.416 1.061h-1.084c0-.676.246-1.236.738-1.682.496-.449 1.125-.673 1.887-.673.805 0 1.436.212 1.893.638.457.426.685 1.018.685 1.776 0 .371-.121.73-.363 1.078a2.162 2.162 0 0 1-.979.779c.469.148.83.395 1.084.738.258.344.387.764.387 1.26 0 .766-.25 1.373-.75 1.822-.5.45-1.15.674-1.951.674-.801 0-1.453-.217-1.957-.65-.5-.434-.75-1.006-.75-1.717h1.09c0 .449.146.809.439 1.078.293.27.686.404 1.178.404.523 0 .924-.136 1.201-.41.277-.273.416-.666.416-1.177 0-.497-.152-.877-.457-1.143-.305-.266-.744-.402-1.318-.41h-.815v-.885Zm10.512 1.154c0 1.27-.217 2.213-.65 2.83-.434.618-1.112.926-2.034.926-.91 0-1.584-.301-2.021-.902-.438-.606-.664-1.508-.68-2.707v-1.447c0-1.254.217-2.186.651-2.795.433-.61 1.113-.914 2.039-.914.918 0 1.593.294 2.027.884.434.586.656 1.493.668 2.719v1.406Zm-1.084-1.482c0-.918-.129-1.586-.387-2.004-.258-.422-.666-.633-1.224-.633-.555 0-.959.209-1.213.627-.254.418-.385 1.061-.393 1.928v1.734c0 .922.133 1.604.399 2.045.269.438.675.656 1.218.656.535 0 .932-.207 1.19-.621.261-.414.398-1.066.41-1.957v-1.775Zm5.73 5.121v-8.531h2.409c.742 0 1.398.164 1.968.492.571.328 1.01.795 1.319 1.4.312.606.47 1.301.474 2.086v.545c0 .805-.156 1.51-.468 2.115a3.25 3.25 0 0 1-1.331 1.395c-.574.324-1.244.49-2.009.498h-2.362Zm1.125-7.605v6.685h1.184c.867 0 1.541-.269 2.021-.809.485-.539.727-1.306.727-2.302v-.498c0-.969-.228-1.721-.686-2.256-.453-.539-1.097-.813-1.933-.82H151.4ZM161.895 219c-.063-.125-.114-.348-.153-.668-.504.523-1.105.785-1.804.785-.626 0-1.139-.176-1.542-.527a1.73 1.73 0 0 1-.597-1.348c0-.66.25-1.172.75-1.535.504-.367 1.211-.551 2.121-.551h1.055v-.498c0-.379-.114-.679-.34-.902-.227-.227-.561-.34-1.002-.34-.387 0-.711.098-.973.293-.262.195-.392.432-.392.709h-1.09c0-.316.111-.621.334-.914a2.31 2.31 0 0 1 .914-.703c.386-.172.81-.258 1.271-.258.731 0 1.303.184 1.717.551.414.363.629.865.645 1.506v2.918c0 .582.074 1.044.222 1.388V219h-1.136Zm-1.799-.826c.34 0 .662-.088.966-.264.305-.176.526-.404.663-.685v-1.301h-.85c-1.328 0-1.992.388-1.992 1.166 0 .34.113.605.34.797.226.191.517.287.873.287Zm6.392-.762 1.477-4.752h1.16l-2.549 7.319c-.394 1.054-1.021 1.582-1.881 1.582l-.205-.018-.404-.076v-.879l.293.023c.367 0 .652-.074.855-.222.207-.149.377-.42.51-.815l.24-.644-2.261-6.27h1.183l1.582 4.752Zm7.301-.094c0-.293-.111-.519-.334-.679-.219-.164-.603-.305-1.154-.422-.547-.117-.983-.258-1.307-.422-.32-.164-.558-.359-.715-.586a1.418 1.418 0 0 1-.228-.809c0-.519.219-.959.656-1.318.441-.359 1.004-.539 1.688-.539.718 0 1.3.186 1.746.557.449.371.673.845.673 1.423h-1.089c0-.296-.127-.552-.381-.767-.25-.215-.567-.322-.949-.322-.395 0-.704.086-.926.257a.812.812 0 0 0-.334.674c0 .262.103.459.31.592.207.133.58.26 1.119.381.543.121.983.266 1.319.433.336.168.584.372.744.61.164.234.246.521.246.861 0 .567-.227 1.022-.68 1.365-.453.34-1.041.51-1.763.51-.508 0-.957-.09-1.348-.269a2.227 2.227 0 0 1-.92-.75 1.84 1.84 0 0 1-.328-1.049h1.084c.02.363.164.652.434.867.273.211.632.316 1.078.316.41 0 .738-.082.984-.246.25-.168.375-.39.375-.668Z",
          fill:"#8A99B1"
        }),(0,r.jsx)("path",{
          d:"M36.348 233.68 31.8 244h-1.992l4.539-9.852h-5.883v-1.523h7.883v1.055Zm2.828 8.32c.354 0 .627.102.82.305.193.198.29.448.29.75 0 .297-.097.544-.29.742-.193.193-.466.289-.82.289-.339 0-.607-.096-.805-.289a.99.99 0 0 1-.297-.742c0-.302.097-.552.29-.75.192-.203.463-.305.812-.305Zm10.734-8.32L45.363 244h-1.992l4.54-9.852h-5.884v-1.523h7.883v1.055Zm1.446 1.132c0-.687.22-1.25.663-1.687.443-.443 1.024-.664 1.743-.664.729 0 1.312.221 1.75.664.442.437.664 1.013.664 1.727v.562c0 .682-.222 1.242-.664 1.68-.438.437-1.016.656-1.735.656-.703 0-1.284-.214-1.742-.641-.453-.432-.68-1.013-.68-1.742v-.555Zm1.328.602c0 .359.099.651.297.875.203.219.468.328.796.328.323 0 .584-.109.782-.328.198-.224.297-.526.297-.906v-.571c0-.359-.102-.651-.305-.874-.198-.224-.461-.336-.79-.336-.327 0-.59.114-.788.343-.193.224-.29.521-.29.891v.578Zm4.14 5.797c0-.698.227-1.263.68-1.695.453-.433 1.031-.649 1.734-.649.709 0 1.287.216 1.735.649.453.432.68 1.015.68 1.75v.554c0 .677-.22 1.237-.657 1.68-.432.438-1.013.656-1.742.656-.73 0-1.318-.216-1.766-.648-.442-.438-.664-1.013-.664-1.727v-.57Zm1.328.609c0 .354.102.646.305.875.208.224.474.336.797.336.333 0 .594-.107.781-.32.193-.219.29-.523.29-.914v-.586c0-.365-.102-.656-.306-.875a1.017 1.017 0 0 0-.78-.328c-.324 0-.587.109-.79.328-.198.219-.297.521-.297.906v.578Zm-3.984 1.328-.977-.562 5.555-8.891.977.563-5.555 8.89Zm22.383-4.539c0 1.115-.193 2.094-.578 2.938-.386.838-.938 1.484-1.657 1.937-.713.448-1.536.672-2.468.672-.922 0-1.745-.224-2.47-.672-.718-.453-1.275-1.096-1.671-1.929-.39-.834-.588-1.795-.594-2.883v-.641c0-1.109.196-2.088.586-2.937.396-.849.95-1.498 1.664-1.946.719-.453 1.542-.679 2.469-.679.927 0 1.747.224 2.461.672.719.442 1.273 1.083 1.664 1.921.39.834.589 1.805.594 2.915v.632Zm-1.977-.593c0-1.261-.24-2.227-.718-2.899-.474-.672-1.149-1.008-2.024-1.008-.854 0-1.523.336-2.008 1.008-.479.667-.724 1.612-.734 2.836v.656c0 1.25.242 2.217.726 2.899.49.682 1.167 1.023 2.032 1.023.875 0 1.546-.333 2.015-1 .474-.666.711-1.64.711-2.922v-.593Zm6.742 3.578 1.79-6.047h1.96L82.136 244h-1.648l-2.953-8.453h1.969l1.812 6.047Zm8.555 2.562c-1.203 0-2.18-.377-2.93-1.133-.744-.76-1.117-1.77-1.117-3.031v-.234c0-.844.162-1.597.485-2.258a3.738 3.738 0 0 1 1.375-1.555 3.63 3.63 0 0 1 1.968-.554c1.151 0 2.04.367 2.664 1.101.63.735.946 1.774.946 3.117v.766h-5.524c.058.698.29 1.25.696 1.656.411.407.927.61 1.547.61.87 0 1.578-.352 2.125-1.055l1.023.976a3.433 3.433 0 0 1-1.36 1.18c-.562.276-1.195.414-1.898.414Zm-.227-7.242c-.52 0-.942.182-1.265.547-.318.365-.52.872-.61 1.523h3.618v-.14c-.042-.636-.211-1.115-.508-1.438-.297-.328-.708-.492-1.235-.492Zm9.524.367a4.772 4.772 0 0 0-.774-.062c-.87 0-1.455.333-1.757 1V244h-1.899v-8.453h1.813l.047.945c.458-.734 1.093-1.101 1.906-1.101.27 0 .495.036.672.109l-.008 1.781Zm6.016 6.719c-.084-.161-.157-.424-.219-.789a2.956 2.956 0 0 1-2.219.945c-.849 0-1.542-.242-2.078-.726-.536-.485-.805-1.084-.805-1.797 0-.901.334-1.591 1-2.071.672-.484 1.63-.726 2.875-.726h1.164v-.555c0-.437-.122-.786-.367-1.047-.245-.265-.617-.398-1.117-.398-.432 0-.786.109-1.063.328a.994.994 0 0 0-.414.82h-1.898c0-.463.154-.895.461-1.296.307-.407.724-.724 1.25-.954a4.432 4.432 0 0 1 1.773-.343c.99 0 1.779.25 2.368.75.588.494.89 1.192.906 2.093v3.813c0 .76.107 1.367.32 1.82V244h-1.937Zm-2.086-1.367c.375 0 .726-.091 1.054-.274.334-.182.584-.427.75-.734v-1.594h-1.023c-.703 0-1.232.123-1.586.367-.354.245-.531.592-.531 1.04 0 .364.12.656.359.874.245.214.57.321.977.321Zm7.711 1.367h-1.899v-12h1.899v12Zm4.093 0h-1.898v-12h1.898v12Zm9.532-1.359c.474 0 .867-.138 1.179-.414.313-.276.479-.618.5-1.024h1.789a2.807 2.807 0 0 1-.492 1.477 3.243 3.243 0 0 1-1.25 1.078 3.733 3.733 0 0 1-1.703.398c-1.182 0-2.12-.383-2.812-1.148-.693-.766-1.04-1.823-1.04-3.172v-.195c0-1.287.344-2.315 1.032-3.086.687-.776 1.625-1.164 2.812-1.164 1.005 0 1.823.294 2.453.882.636.584.969 1.352 1 2.305h-1.789c-.021-.484-.187-.883-.5-1.195-.307-.313-.7-.469-1.179-.469-.615 0-1.089.224-1.422.672-.334.443-.503 1.117-.508 2.023v.305c0 .917.164 1.602.492 2.055.333.448.813.672 1.438.672Zm4.546-2.946c0-.828.165-1.573.493-2.234.328-.667.789-1.177 1.382-1.531.594-.36 1.277-.539 2.047-.539 1.141 0 2.065.367 2.774 1.101.713.735 1.099 1.709 1.156 2.922l.008.445c0 .834-.162 1.579-.485 2.235a3.513 3.513 0 0 1-1.375 1.523c-.593.36-1.281.539-2.062.539-1.193 0-2.148-.396-2.867-1.187-.714-.797-1.071-1.857-1.071-3.18v-.094Zm1.899.164c0 .87.18 1.552.539 2.047.359.49.859.735 1.5.735s1.138-.25 1.492-.75c.36-.5.539-1.232.539-2.196 0-.854-.185-1.531-.554-2.031-.365-.5-.862-.75-1.493-.75-.619 0-1.112.247-1.476.742-.365.49-.547 1.224-.547 2.203Zm9.328-4.312.055.976c.625-.755 1.445-1.132 2.461-1.132 1.76 0 2.656 1.007 2.687 3.023V244h-1.898v-5.477c0-.536-.117-.932-.352-1.187-.229-.26-.607-.391-1.133-.391-.765 0-1.336.347-1.711 1.039V244h-1.898v-8.453h1.789Zm10.125 6.047 1.789-6.047h1.961l-2.93 8.453h-1.648l-2.953-8.453h1.969l1.812 6.047Zm8.555 2.562c-1.203 0-2.18-.377-2.93-1.133-.745-.76-1.117-1.77-1.117-3.031v-.234c0-.844.161-1.597.484-2.258a3.74 3.74 0 0 1 1.375-1.555 3.633 3.633 0 0 1 1.969-.554c1.151 0 2.039.367 2.664 1.101.63.735.945 1.774.945 3.117v.766h-5.523c.057.698.289 1.25.695 1.656.412.407.927.61 1.547.61.87 0 1.578-.352 2.125-1.055l1.024.976a3.436 3.436 0 0 1-1.36 1.18c-.562.276-1.195.414-1.898.414Zm-.227-7.242c-.521 0-.943.182-1.265.547-.318.365-.521.872-.61 1.523h3.617v-.14c-.041-.636-.211-1.115-.507-1.438-.297-.328-.709-.492-1.235-.492Zm9.524.367a4.776 4.776 0 0 0-.774-.062c-.87 0-1.456.333-1.758 1V244h-1.898v-8.453h1.812l.047.945c.459-.734 1.094-1.101 1.907-1.101.27 0 .494.036.671.109l-.007 1.781Zm5.937 4.422a.86.86 0 0 0-.422-.773c-.276-.177-.737-.334-1.383-.469-.645-.135-1.184-.307-1.617-.516-.948-.458-1.422-1.122-1.422-1.992 0-.729.308-1.338.922-1.828.615-.49 1.396-.734 2.344-.734 1.01 0 1.825.25 2.445.75.625.5.938 1.148.938 1.945h-1.899c0-.365-.135-.667-.406-.906-.271-.245-.63-.368-1.078-.368-.417 0-.758.097-1.023.29a.911.911 0 0 0-.391.773.77.77 0 0 0 .367.68c.245.161.74.325 1.484.492.745.161 1.329.357 1.75.586.428.224.743.495.946.812.208.318.312.703.312 1.157 0 .76-.315 1.377-.945 1.851-.63.469-1.456.703-2.477.703-.692 0-1.309-.125-1.851-.375s-.964-.593-1.266-1.031a2.443 2.443 0 0 1-.453-1.414h1.844c.026.448.195.794.508 1.039.312.24.726.359 1.242.359.5 0 .88-.093 1.14-.281a.892.892 0 0 0 .391-.75Zm5.547 2.297h-1.898v-8.453h1.898V244Zm-2.016-10.648c0-.292.091-.534.274-.727.187-.193.453-.289.797-.289.343 0 .609.096.797.289.187.193.281.435.281.727a.99.99 0 0 1-.281.718c-.188.188-.454.282-.797.282-.344 0-.61-.094-.797-.282a1 1 0 0 1-.274-.718Zm3.735 6.343c0-.828.164-1.573.492-2.234.328-.667.789-1.177 1.383-1.531.593-.36 1.276-.539 2.047-.539 1.14 0 2.065.367 2.773 1.101.714.735 1.099 1.709 1.156 2.922l.008.445c0 .834-.161 1.579-.484 2.235a3.519 3.519 0 0 1-1.375 1.523c-.594.36-1.282.539-2.063.539-1.192 0-2.148-.396-2.867-1.187-.714-.797-1.07-1.857-1.07-3.18v-.094Zm1.898.164c0 .87.18 1.552.539 2.047.36.49.86.735 1.5.735.641 0 1.138-.25 1.492-.75.36-.5.539-1.232.539-2.196 0-.854-.184-1.531-.554-2.031-.365-.5-.862-.75-1.492-.75-.62 0-1.112.247-1.477.742-.365.49-.547 1.224-.547 2.203Zm9.328-4.312.055.976c.625-.755 1.445-1.132 2.461-1.132 1.76 0 2.656 1.007 2.687 3.023V244h-1.898v-5.477c0-.536-.117-.932-.352-1.187-.229-.26-.606-.391-1.132-.391-.766 0-1.336.347-1.711 1.039V244h-1.899v-8.453h1.789Z",
          fill:"#161E35"
        }),(0,r.jsx)("path",{
          d:"M30.663 410.901a.512.512 0 0 0-.2-.433c-.13-.102-.367-.204-.711-.308a3.422 3.422 0 0 1-.82-.346c-.389-.244-.583-.562-.583-.955 0-.343.14-.627.419-.849.28-.223.645-.334 1.092-.334.297 0 .562.054.794.164.233.109.415.265.548.469.133.201.2.424.2.67h-.739c0-.222-.07-.396-.21-.521-.14-.127-.339-.19-.598-.19-.243 0-.431.051-.566.155a.517.517 0 0 0-.2.433.47.47 0 0 0 .218.393c.144.104.383.205.715.305.332.097.598.21.8.337.2.125.348.269.442.433.093.162.14.353.14.572 0 .355-.136.638-.41.849-.271.209-.64.314-1.107.314-.309 0-.593-.057-.853-.17a1.46 1.46 0 0 1-.603-.475 1.183 1.183 0 0 1-.214-.703h.741c0 .242.08.43.24.562.16.133.39.2.689.2.258 0 .45-.052.58-.156a.507.507 0 0 0 .196-.416Zm4.474-2.569h-1.33V412h-.736v-3.668h-1.318v-.598h3.384v.598Zm3.055 1.764H36.44v1.312h2.048V412H35.7v-4.266h2.769v.598H36.44v1.178h1.752v.586Zm1.641.319V412h-.741v-4.266h1.632c.476 0 .854.124 1.133.372.282.248.422.577.422.985 0 .418-.137.743-.413.975-.273.233-.657.349-1.151.349h-.882Zm0-.595h.89c.264 0 .465-.061.604-.184.139-.125.208-.305.208-.539 0-.231-.07-.414-.21-.551-.141-.139-.335-.21-.58-.214h-.912v1.488Zm6.404 2.18h-.709v-3.425l-1.046.358v-.601l1.665-.612h.09V412ZM122.663 410.901a.512.512 0 0 0-.199-.433c-.131-.102-.368-.204-.712-.308a3.412 3.412 0 0 1-.82-.346c-.389-.244-.583-.562-.583-.955 0-.343.139-.627.419-.849.281-.223.645-.334 1.092-.334.297 0 .562.054.794.164.233.109.415.265.548.469.133.201.199.424.199.67h-.738c0-.222-.07-.396-.211-.521-.139-.127-.338-.19-.598-.19-.242 0-.43.051-.565.155a.517.517 0 0 0-.199.433.47.47 0 0 0 .217.393c.144.104.382.205.714.305.333.097.599.21.8.337.201.125.349.269.443.433.093.162.14.353.14.572 0 .355-.136.638-.41.849-.271.209-.64.314-1.107.314-.309 0-.593-.057-.853-.17a1.454 1.454 0 0 1-.603-.475 1.18 1.18 0 0 1-.214-.703h.741c0 .242.08.43.24.562.16.133.39.2.689.2.258 0 .451-.052.58-.156a.507.507 0 0 0 .196-.416Zm4.474-2.569h-1.33V412h-.736v-3.668h-1.318v-.598h3.384v.598Zm3.055 1.764h-1.752v1.312h2.048V412h-2.789v-4.266h2.769v.598h-2.028v1.178h1.752v.586Zm1.641.319V412h-.741v-4.266h1.632c.476 0 .854.124 1.133.372.282.248.422.577.422.985 0 .418-.137.743-.413.975-.273.233-.657.349-1.151.349h-.882Zm0-.595h.891c.263 0 .464-.061.603-.184.139-.125.208-.305.208-.539 0-.231-.07-.414-.211-.551-.14-.139-.334-.21-.58-.214h-.911v1.488Zm7.345 2.18h-2.868v-.489l1.42-1.55c.206-.229.351-.419.437-.571a.93.93 0 0 0 .132-.463.698.698 0 0 0-.173-.492.59.59 0 0 0-.46-.188c-.23 0-.409.07-.536.211-.127.141-.191.333-.191.577h-.711c0-.26.058-.493.175-.7.119-.209.288-.371.507-.486.221-.116.475-.173.762-.173.414 0 .74.104.978.313.241.207.361.494.361.862 0 .212-.061.436-.182.67-.119.233-.315.498-.589.794l-1.043 1.117h1.981V412ZM214.663 410.901a.512.512 0 0 0-.199-.433c-.131-.102-.368-.204-.712-.308a3.412 3.412 0 0 1-.82-.346c-.389-.244-.583-.562-.583-.955 0-.343.139-.627.419-.849.281-.223.645-.334 1.092-.334.297 0 .562.054.794.164.233.109.415.265.548.469.133.201.199.424.199.67h-.738c0-.222-.07-.396-.211-.521-.139-.127-.338-.19-.598-.19-.242 0-.43.051-.565.155a.517.517 0 0 0-.199.433.47.47 0 0 0 .217.393c.144.104.382.205.714.305.333.097.599.21.8.337.201.125.349.269.443.433.093.162.14.353.14.572 0 .355-.136.638-.41.849-.271.209-.64.314-1.107.314-.309 0-.593-.057-.853-.17a1.454 1.454 0 0 1-.603-.475 1.18 1.18 0 0 1-.214-.703h.741c0 .242.08.43.24.562.16.133.39.2.689.2.258 0 .451-.052.58-.156a.507.507 0 0 0 .196-.416Zm4.474-2.569h-1.33V412h-.736v-3.668h-1.318v-.598h3.384v.598Zm3.055 1.764h-1.752v1.312h2.048V412h-2.789v-4.266h2.769v.598h-2.028v1.178h1.752v.586Zm1.641.319V412h-.741v-4.266h1.632c.476 0 .854.124 1.133.372.282.248.422.577.422.985 0 .418-.137.743-.413.975-.273.233-.657.349-1.151.349h-.882Zm0-.595h.891c.263 0 .464-.061.603-.184.139-.125.208-.305.208-.539 0-.231-.07-.414-.211-.551-.14-.139-.334-.21-.58-.214h-.911v1.488Zm5.3-.278h.433c.219-.002.392-.059.519-.17.129-.111.193-.272.193-.483 0-.203-.053-.361-.161-.472-.105-.113-.267-.17-.486-.17a.677.677 0 0 0-.472.167.548.548 0 0 0-.184.431h-.712c0-.219.057-.418.173-.598.117-.18.279-.319.486-.419.209-.101.442-.152.7-.152.426 0 .76.107 1.002.322.244.213.366.51.366.891a.909.909 0 0 1-.184.542 1.145 1.145 0 0 1-.472.381c.234.08.412.206.533.377.123.172.185.377.185.616 0 .383-.132.687-.396.914-.261.226-.606.34-1.034.34-.41 0-.746-.11-1.008-.329-.261-.218-.392-.509-.392-.873h.712c0 .188.062.34.187.457.127.118.297.176.51.176.221 0 .394-.058.521-.176.127-.117.191-.287.191-.509 0-.225-.067-.398-.199-.519-.133-.121-.331-.182-.592-.182h-.419v-.562ZM306.663 410.901a.512.512 0 0 0-.199-.433c-.131-.102-.368-.204-.712-.308a3.412 3.412 0 0 1-.82-.346c-.389-.244-.583-.562-.583-.955 0-.343.139-.627.419-.849.281-.223.645-.334 1.092-.334.297 0 .562.054.794.164.233.109.415.265.548.469.133.201.199.424.199.67h-.738c0-.222-.07-.396-.211-.521-.139-.127-.338-.19-.598-.19-.242 0-.43.051-.565.155a.517.517 0 0 0-.199.433.47.47 0 0 0 .217.393c.144.104.382.205.714.305.333.097.599.21.8.337.201.125.349.269.443.433.093.162.14.353.14.572 0 .355-.136.638-.41.849-.271.209-.64.314-1.107.314-.309 0-.593-.057-.853-.17a1.454 1.454 0 0 1-.603-.475 1.18 1.18 0 0 1-.214-.703h.741c0 .242.08.43.24.562.16.133.39.2.689.2.258 0 .451-.052.58-.156a.507.507 0 0 0 .196-.416Zm4.474-2.569h-1.33V412h-.736v-3.668h-1.318v-.598h3.384v.598Zm3.055 1.764h-1.752v1.312h2.048V412h-2.789v-4.266h2.769v.598h-2.028v1.178h1.752v.586Zm1.641.319V412h-.741v-4.266h1.632c.476 0 .854.124 1.133.372.282.248.422.577.422.985 0 .418-.137.743-.413.975-.273.233-.657.349-1.151.349h-.882Zm0-.595h.891c.263 0 .464-.061.603-.184.139-.125.208-.305.208-.539 0-.231-.07-.414-.211-.551-.14-.139-.334-.21-.58-.214h-.911v1.488Zm6.885.659h.53v.572h-.53V412h-.712v-.949h-1.843l-.02-.434 1.839-2.883h.736v2.745Zm-1.828 0h1.116v-1.781l-.053.094-1.063 1.687Z",
          fill:"#8A99B1"
        }),(0,r.jsx)("path",{
          d:"M29.566 422.211h2.582V423h-3.57v-5.688h.988v4.899Zm7.63-1.906c0 .557-.097 1.047-.29 1.468-.192.42-.468.743-.828.969a2.272 2.272 0 0 1-1.234.336c-.461 0-.873-.112-1.235-.336a2.245 2.245 0 0 1-.836-.965c-.195-.416-.294-.897-.296-1.441v-.32c0-.555.097-1.045.293-1.469.197-.425.475-.749.832-.973.359-.226.77-.34 1.234-.34.464 0 .874.112 1.23.336.36.222.637.542.832.961.196.417.295.903.297 1.457v.317Zm-.989-.297c0-.63-.12-1.113-.36-1.449-.236-.336-.574-.504-1.011-.504-.427 0-.762.168-1.004.504-.24.333-.362.806-.367 1.418v.328c0 .625.12 1.108.363 1.449.245.341.583.512 1.016.512.437 0 .773-.167 1.008-.5.237-.334.355-.821.355-1.461v-.297Zm6.332 2.254c-.206.268-.49.471-.855.609a3.491 3.491 0 0 1-1.243.207c-.476 0-.898-.108-1.265-.324a2.174 2.174 0 0 1-.852-.926c-.198-.404-.3-.874-.308-1.41v-.445c0-.86.205-1.53.617-2.012.411-.484.985-.727 1.722-.727.633 0 1.136.157 1.508.469.373.313.597.763.672 1.352h-.969c-.109-.685-.506-1.028-1.191-1.028-.443 0-.78.161-1.012.481-.229.318-.347.785-.355 1.402v.438c0 .614.129 1.092.386 1.433.26.339.622.508 1.083.508.505 0 .864-.115 1.078-.344v-1.113h-1.172v-.75h2.156v2.18Zm2.129.738h-.984v-5.688h.984V423Zm5.727 0h-.989l-2.535-4.035V423h-.988v-5.688h.988l2.543 4.051v-4.051h.98V423Zm-18.844 8.535c0-.25-.089-.443-.266-.578-.174-.135-.49-.272-.95-.41-.457-.138-.822-.292-1.093-.461-.518-.326-.777-.75-.777-1.274 0-.458.186-.835.558-1.132.375-.297.861-.446 1.457-.446.396 0 .75.073 1.06.219.309.146.552.354.73.625.177.268.265.567.265.895h-.984c0-.297-.094-.529-.281-.696-.185-.169-.451-.254-.797-.254-.323 0-.575.069-.754.207-.177.138-.266.331-.266.579 0 .208.096.382.29.523.192.138.51.273.952.406.443.13.799.28 1.067.45.268.166.465.359.59.578.125.216.187.47.187.761 0 .474-.182.852-.547 1.133-.362.279-.854.418-1.476.418-.412 0-.79-.075-1.137-.226a1.942 1.942 0 0 1-.805-.633 1.58 1.58 0 0 1-.285-.938h.988c0 .323.107.573.32.75.214.177.52.266.919.266.343 0 .601-.069.773-.207a.68.68 0 0 0 .262-.555Zm6.015-4.223v3.801c0 .604-.194 1.084-.582 1.438-.385.351-.9.527-1.543.527-.65 0-1.168-.173-1.55-.519-.383-.349-.575-.832-.575-1.45v-3.797h.985v3.805c0 .38.096.671.289.871.193.201.476.301.851.301.76 0 1.141-.401 1.141-1.203v-3.774h.984Zm5.399 3.836c-.057.607-.281 1.081-.672 1.422-.39.339-.91.508-1.559.508-.453 0-.852-.107-1.199-.32a2.13 2.13 0 0 1-.797-.918c-.187-.396-.285-.856-.293-1.379v-.531c0-.537.095-1.009.285-1.418.19-.409.463-.724.817-.946a2.295 2.295 0 0 1 1.234-.332c.628 0 1.133.171 1.516.512.383.341.605.823.668 1.445h-.985c-.046-.408-.166-.703-.359-.882-.19-.183-.47-.274-.84-.274-.43 0-.76.158-.992.473-.23.312-.346.772-.352 1.379v.504c0 .614.11 1.083.329 1.406.221.323.544.484.968.484.388 0 .68-.087.875-.261.196-.175.32-.465.371-.872h.985Zm5.226 0c-.057.607-.28 1.081-.672 1.422-.39.339-.91.508-1.558.508-.453 0-.853-.107-1.2-.32a2.131 2.131 0 0 1-.796-.918c-.188-.396-.285-.856-.293-1.379v-.531c0-.537.095-1.009.285-1.418.19-.409.462-.724.816-.946a2.296 2.296 0 0 1 1.235-.332c.627 0 1.133.171 1.515.512.383.341.606.823.668 1.445h-.984c-.047-.408-.167-.703-.36-.882-.19-.183-.47-.274-.84-.274-.429 0-.76.158-.991.473-.23.312-.347.772-.352 1.379v.504c0 .614.11 1.083.328 1.406.222.323.544.484.969.484.388 0 .68-.087.875-.261.195-.175.319-.465.371-.872h.984Zm4.211-.687h-2.336v1.75h2.73V433h-3.718v-5.688h3.691v.797h-2.703v1.571h2.336v.781Zm4.172 1.074c0-.25-.088-.443-.265-.578-.175-.135-.491-.272-.95-.41-.458-.138-.823-.292-1.093-.461-.519-.326-.778-.75-.778-1.274 0-.458.187-.835.559-1.132.375-.297.86-.446 1.457-.446.396 0 .749.073 1.059.219.31.146.553.354.73.625.177.268.266.567.266.895h-.985c0-.297-.093-.529-.281-.696-.185-.169-.45-.254-.797-.254-.323 0-.574.069-.754.207-.177.138-.265.331-.265.579 0 .208.096.382.289.523.192.138.51.273.953.406.442.13.798.28 1.066.45.268.166.465.359.59.578.125.216.188.47.188.761 0 .474-.183.852-.547 1.133-.362.279-.855.418-1.477.418-.411 0-.79-.075-1.137-.226a1.941 1.941 0 0 1-.804-.633 1.58 1.58 0 0 1-.285-.938h.988c0 .323.107.573.32.75.214.177.52.266.918.266.344 0 .602-.069.773-.207a.679.679 0 0 0 .262-.555Zm4.828 0c0-.25-.088-.443-.265-.578-.175-.135-.491-.272-.95-.41-.458-.138-.822-.292-1.093-.461-.519-.326-.778-.75-.778-1.274 0-.458.187-.835.559-1.132.375-.297.86-.446 1.457-.446.396 0 .749.073 1.059.219.31.146.553.354.73.625.177.268.266.567.266.895h-.985c0-.297-.093-.529-.28-.696-.186-.169-.451-.254-.798-.254-.323 0-.574.069-.754.207-.177.138-.265.331-.265.579 0 .208.096.382.289.523.192.138.51.273.953.406.443.13.798.28 1.066.45.269.166.465.359.59.578.125.216.188.47.188.761 0 .474-.183.852-.547 1.133-.362.279-.854.418-1.477.418-.411 0-.79-.075-1.136-.226a1.941 1.941 0 0 1-.805-.633 1.58 1.58 0 0 1-.285-.938h.988c0 .323.107.573.32.75.214.177.52.266.918.266.344 0 .602-.069.774-.207a.679.679 0 0 0 .261-.555Zm5.133-.945h-2.289V433h-.988v-5.688h3.613v.797h-2.625v1.692h2.29v.789Zm5.281-3.278v3.801c0 .604-.194 1.084-.582 1.438-.385.351-.9.527-1.543.527-.65 0-1.168-.173-1.55-.519-.383-.349-.575-.832-.575-1.45v-3.797h.985v3.805c0 .38.096.671.289.871.193.201.476.301.851.301.76 0 1.141-.401 1.141-1.203v-3.774h.984Zm2.047 4.899h2.582V433h-3.57v-5.688h.988v4.899ZM123.719 421.828h-2.055l-.391 1.172h-1.246l2.118-5.688h1.085l2.129 5.688h-1.246l-.394-1.172Zm-1.739-.949h1.422l-.714-2.129-.708 2.129Zm3.911 2.121v-5.688h1.75c.5 0 .946.114 1.339.34.396.224.705.545.926.961.222.414.332.886.332 1.414v.262c0 .529-.109.999-.328 1.41a2.315 2.315 0 0 1-.918.957 2.677 2.677 0 0 1-1.34.344h-1.761Zm1.171-4.738v3.797h.567c.458 0 .809-.15 1.051-.45.242-.299.366-.727.371-1.285v-.301c0-.578-.12-1.015-.36-1.312-.239-.3-.589-.449-1.05-.449h-.579Zm4.032 4.738v-5.688h1.75c.5 0 .946.114 1.34.34.395.224.704.545.925.961.222.414.332.886.332 1.414v.262c0 .529-.109.999-.328 1.41a2.315 2.315 0 0 1-.918.957 2.677 2.677 0 0 1-1.34.344h-1.761Zm1.172-4.738v3.797h.566c.458 0 .809-.15 1.051-.45.242-.299.366-.727.371-1.285v-.301c0-.578-.12-1.015-.359-1.312-.24-.3-.59-.449-1.051-.449h-.578Zm10.07 0h-1.742V423h-1.172v-4.738h-1.719v-.95h4.633v.95Zm5.234 2.023c0 .56-.099 1.051-.297 1.473a2.22 2.22 0 0 1-.851.976c-.367.23-.789.344-1.266.344-.471 0-.892-.113-1.261-.34a2.255 2.255 0 0 1-.86-.968c-.203-.422-.306-.907-.308-1.454v-.281c0-.56.1-1.052.3-1.476.203-.427.489-.754.856-.981.37-.229.791-.344 1.265-.344.474 0 .895.115 1.262.344.37.227.655.554.856.981.203.424.304.915.304 1.472v.254Zm-1.187-.258c0-.596-.107-1.049-.321-1.359-.213-.31-.518-.465-.914-.465-.393 0-.696.154-.91.461-.213.305-.321.753-.324 1.344v.277c0 .581.107 1.031.32 1.352.214.32.521.48.922.48.393 0 .696-.153.906-.461.211-.31.318-.76.321-1.351v-.278Zm-21.41 11.078c-.045.612-.271 1.094-.68 1.446-.406.351-.943.527-1.609.527-.73 0-1.304-.245-1.723-.734-.417-.492-.625-1.167-.625-2.024v-.347c0-.547.096-1.029.289-1.446.193-.416.467-.735.824-.957.36-.224.776-.336 1.25-.336.656 0 1.185.176 1.586.528.401.351.633.845.695 1.48h-1.171c-.029-.367-.132-.633-.309-.797-.174-.166-.441-.25-.801-.25-.39 0-.683.141-.879.422-.192.279-.291.712-.297 1.301v.43c0 .614.093 1.063.278 1.347.187.284.482.426.883.426.362 0 .631-.082.808-.246.18-.167.283-.423.309-.77h1.172Zm3.98.723h-2.055l-.39 1.172h-1.246l2.117-5.688h1.086l2.129 5.688h-1.246l-.395-1.172Zm-1.738-.949h1.422l-.715-2.129-.707 2.129Zm6.015.039h-.933V433h-1.172v-5.688h2.113c.672 0 1.19.15 1.555.45.365.299.547.722.547 1.269 0 .388-.085.712-.254.973-.167.258-.421.463-.762.617l1.231 2.324V433h-1.258l-1.067-2.082Zm-.933-.949h.945c.294 0 .522-.074.684-.223.161-.151.242-.358.242-.621 0-.268-.077-.479-.23-.633-.152-.153-.385-.23-.7-.23h-.941v1.707Zm8.023-1.707h-1.742V433h-1.172v-4.738h-1.718v-.95h4.632v.95Z",
          fill:"#5B6D89"
        }),(0,r.jsx)("path",{
          d:"M29.68 422.059h2.488V423h-3.66v-5.688h1.172v4.747Zm7.586-1.774c0 .56-.1 1.051-.297 1.473a2.23 2.23 0 0 1-.852.976c-.367.23-.789.344-1.265.344-.472 0-.892-.113-1.262-.34a2.256 2.256 0 0 1-.86-.968c-.203-.422-.305-.907-.308-1.454v-.281c0-.56.1-1.052.3-1.476a2.26 2.26 0 0 1 .856-.981c.37-.229.792-.344 1.266-.344s.894.115 1.261.344c.37.227.655.554.856.981.203.424.305.915.305 1.472v.254Zm-1.188-.258c0-.596-.107-1.049-.32-1.359-.214-.31-.518-.465-.914-.465-.394 0-.697.154-.91.461-.214.305-.322.753-.325 1.344v.277c0 .581.107 1.031.32 1.352.214.32.521.48.923.48.393 0 .695-.153.906-.461.21-.31.317-.76.32-1.351v-.278Zm6.54 2.254c-.212.253-.51.449-.895.59a3.78 3.78 0 0 1-1.282.207c-.492 0-.924-.107-1.297-.32a2.177 2.177 0 0 1-.859-.938c-.2-.409-.303-.889-.308-1.441v-.387c0-.568.095-1.058.285-1.472.192-.417.468-.735.828-.954.362-.221.785-.332 1.27-.332.674 0 1.201.162 1.581.485.38.32.606.788.676 1.402h-1.14c-.052-.325-.168-.564-.348-.715-.177-.151-.422-.226-.734-.226-.399 0-.702.149-.91.449-.209.299-.314.745-.317 1.336v.363c0 .596.113 1.047.34 1.352.226.304.558.457.996.457.44 0 .754-.094.941-.282v-.98H40.38v-.863h2.238v2.269Zm2.198.719h-1.172v-5.688h1.172V423Zm5.715 0H49.36l-2.28-3.742V423h-1.173v-5.688h1.172l2.285 3.75v-3.75h1.168V423Zm-19.074 8.508c0-.222-.078-.391-.234-.508-.157-.12-.438-.245-.844-.375a6.059 6.059 0 0 1-.965-.391c-.646-.349-.969-.819-.969-1.41 0-.307.086-.581.258-.82.175-.242.423-.431.746-.566.326-.136.69-.204 1.094-.204.406 0 .768.075 1.086.223.318.146.564.353.738.621.177.268.266.573.266.914H31.46c0-.26-.082-.462-.246-.605-.164-.146-.395-.219-.692-.219-.286 0-.509.061-.668.184a.566.566 0 0 0-.238.476c0 .185.093.34.277.465.188.125.463.242.825.352.666.2 1.152.449 1.457.746.304.297.457.666.457 1.109 0 .492-.186.879-.559 1.16-.372.279-.873.418-1.504.418-.437 0-.836-.079-1.195-.238-.36-.162-.634-.382-.824-.66a1.696 1.696 0 0 1-.281-.969h1.175c0 .628.375.941 1.125.941.279 0 .496-.056.653-.168a.556.556 0 0 0 .234-.476Zm6.277-4.196v3.747c0 .622-.195 1.114-.586 1.476-.388.362-.919.543-1.593.543-.664 0-1.192-.176-1.582-.527-.391-.352-.59-.835-.598-1.449v-3.79h1.172v3.754c0 .373.088.645.266.817.18.169.427.254.742.254.659 0 .993-.347 1.004-1.039v-3.786h1.175Zm5.426 3.793c-.044.612-.27 1.094-.68 1.446-.406.351-.942.527-1.609.527-.73 0-1.303-.245-1.723-.734-.416-.492-.625-1.167-.625-2.024v-.347c0-.547.097-1.029.29-1.446.192-.416.467-.735.824-.957.36-.224.776-.336 1.25-.336.656 0 1.185.176 1.586.528.4.351.633.845.695 1.48h-1.172c-.029-.367-.131-.633-.309-.797-.174-.166-.44-.25-.8-.25-.39 0-.684.141-.88.422-.192.279-.29.712-.296 1.301v.43c0 .614.092 1.063.277 1.347.188.284.482.426.883.426.362 0 .632-.082.809-.246.18-.167.282-.423.308-.77h1.172Zm5.235 0c-.045.612-.271 1.094-.68 1.446-.406.351-.943.527-1.61.527-.729 0-1.303-.245-1.722-.734-.417-.492-.625-1.167-.625-2.024v-.347c0-.547.096-1.029.289-1.446.193-.416.467-.735.824-.957.36-.224.776-.336 1.25-.336.656 0 1.185.176 1.586.528.401.351.633.845.695 1.48H47.23c-.028-.367-.131-.633-.308-.797-.175-.166-.441-.25-.8-.25-.392 0-.684.141-.88.422-.192.279-.291.712-.297 1.301v.43c0 .614.093 1.063.278 1.347.187.284.481.426.883.426.361 0 .631-.082.808-.246.18-.167.283-.423.309-.77h1.172Zm4.19-.57h-2.25v1.524h2.642V433h-3.813v-5.688h3.805v.95h-2.633v1.355h2.25v.918Zm4.028.973c0-.222-.078-.391-.234-.508-.156-.12-.438-.245-.844-.375a6.06 6.06 0 0 1-.965-.391c-.645-.349-.968-.819-.968-1.41 0-.307.086-.581.257-.82.175-.242.424-.431.746-.566.326-.136.69-.204 1.094-.204.407 0 .768.075 1.086.223.318.146.564.353.738.621.177.268.266.573.266.914h-1.172c0-.26-.082-.462-.246-.605-.164-.146-.394-.219-.691-.219-.287 0-.51.061-.668.184a.566.566 0 0 0-.239.476c0 .185.093.34.278.465.187.125.462.242.824.352.667.2 1.152.449 1.457.746.305.297.457.666.457 1.109 0 .492-.186.879-.559 1.16-.372.279-.873.418-1.503.418-.438 0-.836-.079-1.196-.238-.36-.162-.634-.382-.824-.66a1.696 1.696 0 0 1-.281-.969h1.176c0 .628.375.941 1.125.941.278 0 .496-.056.652-.168a.556.556 0 0 0 .234-.476Zm4.922 0c0-.222-.078-.391-.234-.508-.157-.12-.438-.245-.844-.375a6.063 6.063 0 0 1-.965-.391c-.646-.349-.969-.819-.969-1.41 0-.307.086-.581.258-.82.175-.242.423-.431.746-.566.326-.136.69-.204 1.094-.204.406 0 .768.075 1.086.223.318.146.564.353.738.621.177.268.266.573.266.914h-1.172c0-.26-.082-.462-.246-.605-.164-.146-.395-.219-.691-.219-.287 0-.51.061-.668.184a.566.566 0 0 0-.239.476c0 .185.093.34.278.465.187.125.462.242.824.352.667.2 1.152.449 1.457.746.305.297.457.666.457 1.109 0 .492-.186.879-.559 1.16-.372.279-.873.418-1.504.418-.437 0-.836-.079-1.195-.238-.36-.162-.634-.382-.824-.66a1.696 1.696 0 0 1-.281-.969h1.175c0 .628.375.941 1.125.941.28 0 .496-.056.653-.168a.556.556 0 0 0 .234-.476Zm5.395-.832h-2.25V433h-1.172v-5.688h3.703v.95H64.68v1.468h2.25v.946Zm5.265-3.364v3.747c0 .622-.195 1.114-.586 1.476-.388.362-.919.543-1.593.543-.664 0-1.192-.176-1.582-.527-.391-.352-.59-.835-.598-1.449v-3.79h1.172v3.754c0 .373.088.645.265.817.18.169.428.254.743.254.658 0 .993-.347 1.003-1.039v-3.786h1.176Zm2.133 4.747h2.488V433h-3.66v-5.688h1.172v4.747Z",
          fill:"#5B6D89"
        }),(0,r.jsx)("path",{
          d:"M216.648 421.535h-2.568l-.488 1.465h-1.558l2.647-7.109h1.357l2.661 7.109h-1.557l-.494-1.465Zm-2.172-1.186h1.777l-.894-2.661-.883 2.661Zm4.887 2.651v-7.109h2.188c.625 0 1.183.141 1.675.424.494.28.88.681 1.157 1.202.277.517.415 1.106.415 1.767v.327c0 .661-.137 1.249-.41 1.763-.27.514-.653.913-1.148 1.196a3.337 3.337 0 0 1-1.675.43h-2.202Zm1.465-5.923v4.746h.708c.573 0 1.011-.187 1.314-.561.302-.375.457-.91.463-1.607v-.376c0-.722-.149-1.269-.449-1.64-.299-.375-.737-.562-1.313-.562h-.723Zm5.039 5.923v-7.109h2.188c.625 0 1.183.141 1.674.424.495.28.881.681 1.158 1.202.276.517.415 1.106.415 1.767v.327c0 .661-.137 1.249-.41 1.763a2.91 2.91 0 0 1-1.148 1.196 3.337 3.337 0 0 1-1.675.43h-2.202Zm1.465-5.923v4.746h.708c.573 0 1.011-.187 1.314-.561.302-.375.457-.91.463-1.607v-.376c0-.722-.149-1.269-.449-1.64-.299-.375-.737-.562-1.313-.562h-.723Zm8.994 3.418V423h-1.465v-7.109h2.774c.534 0 1.002.097 1.406.293.407.195.719.473.938.835.218.358.327.766.327 1.225 0 .697-.24 1.247-.718 1.651-.475.4-1.135.6-1.978.6h-1.284Zm0-1.186h1.309c.387 0 .682-.092.884-.274.205-.182.307-.443.307-.781 0-.348-.102-.63-.307-.845-.206-.215-.489-.325-.85-.332h-1.343v2.232Zm8.135 2.226h-2.568l-.489 1.465h-1.557l2.646-7.109h1.358l2.661 7.109h-1.558l-.493-1.465Zm-2.173-1.186h1.777l-.893-2.661-.884 2.661Zm6.607-1.255 1.479-3.203h1.602l-2.334 4.531V423h-1.49v-2.578l-2.334-4.531h1.607l1.47 3.203Zm5.644-3.203 1.826 5.156 1.817-5.156h1.923V423h-1.469v-1.943l.146-3.355-1.919 5.298h-1.006l-1.914-5.293.147 3.35V423h-1.465v-7.109h1.914Zm11.123 4.028h-2.812v1.904h3.3V423h-4.765v-7.109h4.756v1.186h-3.291v1.694h2.812v1.148Zm7.129 3.081h-1.465l-2.851-4.678V423h-1.465v-7.109h1.465l2.856 4.687v-4.687h1.46V423Zm6.484-5.923h-2.177V423h-1.465v-5.923h-2.149v-1.186h5.791v1.186Zm-64.726 8.814 1.826 5.156 1.816-5.156h1.924V433h-1.469v-1.943l.146-3.355-1.919 5.298h-1.006l-1.914-5.293.147 3.35V433h-1.465v-7.109h1.914Zm11.123 4.028h-2.813v1.904h3.301V433h-4.765v-7.109h4.755v1.186h-3.291v1.694h2.813v1.148Zm6.797-2.842h-2.178V433h-1.465v-5.923h-2.148v-1.186h5.791v1.186Zm6.626 5.923h-1.465v-3.047h-2.857V433h-1.464v-7.109h1.464v2.88h2.857v-2.88h1.465V433Zm7.124-3.394c0 .7-.124 1.314-.371 1.841a2.79 2.79 0 0 1-1.065 1.221c-.459.286-.986.43-1.582.43a2.959 2.959 0 0 1-1.577-.425 2.826 2.826 0 0 1-1.074-1.211c-.254-.527-.383-1.133-.386-1.816v-.352c0-.7.125-1.315.376-1.846.254-.534.61-.942 1.069-1.225a2.94 2.94 0 0 1 1.582-.43c.593 0 1.119.143 1.578.43.462.283.818.691 1.069 1.225.254.531.381 1.144.381 1.841v.317Zm-1.485-.322c0-.745-.133-1.312-.4-1.699s-.648-.581-1.143-.581c-.491 0-.87.192-1.137.576-.267.381-.402.941-.406 1.68v.346c0 .726.134 1.29.401 1.69.267.4.651.6 1.152.6.492 0 .869-.192 1.133-.576.264-.387.397-.95.4-1.689v-.347Zm2.549 3.716v-7.109h2.188c.625 0 1.183.141 1.675.424.494.28.88.681 1.157 1.202.276.517.415 1.106.415 1.767v.327c0 .661-.137 1.249-.41 1.763a2.91 2.91 0 0 1-1.148 1.196 3.337 3.337 0 0 1-1.675.43h-2.202Zm1.465-5.923v4.746h.708c.573 0 1.011-.187 1.314-.561.302-.375.457-.91.463-1.607v-.376c0-.722-.149-1.269-.449-1.64-.299-.375-.737-.562-1.313-.562h-.723Z",
          fill:"#161E35"
        }),(0,r.jsx)("path",{
          d:"M305.68 420.996V423h-1.172v-5.688h2.219c.427 0 .802.079 1.125.235.325.156.575.379.75.668.174.286.261.613.261.98 0 .558-.191.998-.574 1.321-.38.32-.907.48-1.582.48h-1.027Zm0-.949h1.047c.309 0 .545-.073.707-.219.164-.146.246-.354.246-.625 0-.279-.082-.504-.246-.676-.164-.172-.391-.26-.68-.265h-1.074v1.785Zm8.297-2.735v3.747c0 .622-.196 1.114-.586 1.476-.388.362-.92.543-1.594.543-.664 0-1.192-.176-1.582-.527-.391-.352-.59-.835-.598-1.449v-3.79h1.172v3.754c0 .373.089.645.266.817.179.169.427.254.742.254.659 0 .993-.347 1.004-1.039v-3.786h1.176Zm3.066 3.606h-.934V423h-1.171v-5.688h2.113c.672 0 1.19.15 1.554.45.365.299.547.722.547 1.269 0 .388-.084.712-.254.973-.166.258-.42.463-.761.617l1.23 2.324V423h-1.258l-1.066-2.082Zm-.934-.949h.946c.294 0 .522-.074.683-.223.162-.151.242-.358.242-.621 0-.268-.076-.479-.23-.633-.151-.153-.384-.23-.699-.23h-.942v1.707Zm8.403 1.136c-.045.612-.271 1.094-.68 1.446-.406.351-.943.527-1.609.527-.73 0-1.304-.245-1.723-.734-.417-.492-.625-1.167-.625-2.024v-.347c0-.547.096-1.029.289-1.446.193-.416.468-.735.824-.957.36-.224.776-.336 1.25-.336.657 0 1.185.176 1.586.528.401.351.633.845.696 1.48h-1.172c-.029-.367-.132-.633-.309-.797-.174-.166-.441-.25-.801-.25-.39 0-.683.141-.879.422-.192.279-.291.712-.297 1.301v.43c0 .614.093 1.063.278 1.347.187.284.482.426.883.426.362 0 .631-.082.808-.246.18-.167.283-.423.309-.77h1.172ZM329.91 423h-1.172v-2.438h-2.285V423h-1.172v-5.688h1.172v2.305h2.285v-2.305h1.172V423Zm4.309-1.172h-2.055l-.391 1.172h-1.246l2.118-5.688h1.085l2.129 5.688h-1.246l-.394-1.172Zm-1.739-.949h1.422l-.714-2.129-.708 2.129Zm6.86.629c0-.222-.078-.391-.235-.508-.156-.12-.437-.245-.843-.375a6.035 6.035 0 0 1-.965-.391c-.646-.349-.969-.819-.969-1.41 0-.307.086-.581.258-.82.174-.242.423-.431.746-.566.326-.136.69-.204 1.094-.204.406 0 .768.075 1.086.223.317.146.564.353.738.621.177.268.266.573.266.914h-1.172c0-.26-.082-.462-.246-.605-.164-.146-.395-.219-.692-.219-.286 0-.509.061-.668.184a.565.565 0 0 0-.238.476c0 .185.092.34.277.465.188.125.463.242.825.352.666.2 1.152.449 1.457.746.304.297.457.666.457 1.109 0 .492-.187.879-.559 1.16-.372.279-.874.418-1.504.418-.437 0-.836-.079-1.195-.238-.36-.162-.634-.382-.824-.66a1.693 1.693 0 0 1-.282-.969h1.176c0 .628.375.941 1.125.941.279 0 .496-.056.652-.168a.555.555 0 0 0 .235-.476Zm5.394-.973h-2.25v1.524h2.641V423h-3.813v-5.688h3.805v.95h-2.633v1.355h2.25v.918Zm-35.761 10.57c-.045.612-.271 1.094-.68 1.446-.406.351-.943.527-1.609.527-.73 0-1.304-.245-1.723-.734-.417-.492-.625-1.167-.625-2.024v-.347c0-.547.096-1.029.289-1.446.193-.416.467-.735.824-.957.36-.224.776-.336 1.25-.336.656 0 1.185.176 1.586.528.401.351.633.845.695 1.48h-1.171c-.029-.367-.132-.633-.309-.797-.174-.166-.441-.25-.801-.25-.39 0-.683.141-.879.422-.192.279-.291.712-.297 1.301v.43c0 .614.093 1.063.278 1.347.187.284.482.426.883.426.362 0 .631-.082.808-.246.18-.167.283-.423.309-.77h1.172Zm5.441-.82c0 .56-.099 1.051-.297 1.473a2.233 2.233 0 0 1-.851.976c-.368.23-.789.344-1.266.344-.471 0-.892-.113-1.262-.34a2.253 2.253 0 0 1-.859-.968c-.203-.422-.306-.907-.309-1.454v-.281c0-.56.101-1.052.301-1.476.203-.427.488-.754.856-.981a2.35 2.35 0 0 1 1.265-.344c.474 0 .895.115 1.262.344.37.227.655.554.855.981.203.424.305.915.305 1.472v.254Zm-1.187-.258c0-.596-.107-1.049-.321-1.359-.213-.31-.518-.465-.914-.465-.393 0-.696.154-.91.461-.214.305-.322.753-.324 1.344v.277c0 .581.107 1.031.32 1.352.214.32.521.48.922.48.393 0 .695-.153.906-.461.211-.31.318-.76.321-1.351v-.278Zm3.57-2.715 1.461 4.126 1.453-4.126h1.539V433h-1.176v-1.555l.117-2.683-1.535 4.238h-.804l-1.532-4.234.118 2.679V433h-1.172v-5.688h1.531Zm6.648 3.684V433h-1.172v-5.688h2.219c.427 0 .802.079 1.125.235.326.156.576.379.75.668.175.286.262.613.262.98 0 .558-.191.998-.574 1.321-.381.32-.908.48-1.582.48h-1.028Zm0-.949h1.047c.31 0 .546-.073.707-.219.164-.146.246-.354.246-.625 0-.279-.082-.504-.246-.676-.164-.172-.39-.26-.679-.265h-1.075v1.785Zm5.164 2.012h2.489V433h-3.66v-5.688h1.171v4.747Zm6.586-1.524h-2.25v1.524h2.641V433h-3.813v-5.688h3.805v.95h-2.633v1.355h2.25v.918Zm5.438-2.273h-1.742V433h-1.172v-4.738H336v-.95h4.633v.95Zm4.094 2.273h-2.25v1.524h2.64V433h-3.812v-5.688h3.804v.95h-2.632v1.355h2.25v.918Zm1.078 2.465v-5.688h1.75c.5 0 .946.114 1.34.34.395.224.704.545.925.961.222.414.332.886.332 1.414v.262c0 .529-.109.999-.328 1.41a2.315 2.315 0 0 1-.918.957 2.677 2.677 0 0 1-1.34.344h-1.761Zm1.172-4.738v3.797h.566c.458 0 .809-.15 1.051-.45.242-.299.366-.727.371-1.285v-.301c0-.578-.12-1.015-.36-1.312-.239-.3-.589-.449-1.05-.449h-.578Z",
          fill:"#5B6D89"
        }),(0,r.jsx)("path",{
          opacity:.2,
          fill:"#C0CAD9",
          d:"M120.15 281h84v120h-84z"
        }),(0,r.jsx)("path",{
          fill:"#5D97FF",
          d:"M120 305h84v96h-84z"
        }),(0,r.jsx)("path",{
          stroke:"#161E35",
          strokeWidth:4,
          d:"M210 279h88v82h-88z"
        }),(0,r.jsx)("path",{
          fill:"#5D97FF",
          d:"M28 281h84v120H28z"
        }),(0,r.jsx)("path",{
          opacity:.2,
          fill:"#C0CAD9",
          d:"M212.15 281h84v120h-84z"
        }),(0,r.jsx)("path",{
          fill:"#5D97FF",
          d:"M212 359h84v42h-84z"
        }),(0,r.jsx)("path",{
          opacity:.2,
          fill:"#C0CAD9",
          d:"M304.15 281h84v120h-84z"
        }),(0,r.jsx)("path",{
          fill:"#5D97FF",
          d:"M304 385h84v16h-84z"
        }),(0,r.jsxs)("g",{
          filter:"url(#funnels-locked-illustration_svg__d)",
          children:[(0,r.jsx)("rect",{
            x:38,
            y:261,
            width:64,
            height:40,
            rx:4,
            fill:"#fff",
            shapeRendering:"crispEdges"
          }),(0,r.jsx)("path",{
            d:"M54.986 282H52.86v-10.274l-3.138 1.072v-1.802l4.993-1.837h.272V282Zm12.788-5.388c0 1.84-.346 3.229-1.037 4.166-.685.932-1.731 1.398-3.138 1.398-1.382 0-2.425-.454-3.128-1.363-.698-.914-1.055-2.264-1.073-4.051v-2.215c0-1.84.343-3.22 1.029-4.14.691-.92 1.743-1.38 3.155-1.38 1.4 0 2.443.449 3.129 1.345.691.897 1.046 2.238 1.063 4.025v2.215Zm-2.136-2.39c0-1.201-.164-2.08-.492-2.637-.328-.563-.85-.844-1.564-.844-.697 0-1.21.267-1.538.8-.328.527-.501 1.354-.519 2.479v2.9c0 1.195.167 2.086.501 2.672.334.586.859.879 1.573.879.686 0 1.193-.27 1.52-.809.33-.545.502-1.394.52-2.549v-2.891Zm12.367 2.39c0 1.84-.346 3.229-1.037 4.166-.686.932-1.732 1.398-3.138 1.398-1.383 0-2.426-.454-3.129-1.363-.697-.914-1.055-2.264-1.072-4.051v-2.215c0-1.84.343-3.22 1.028-4.14.691-.92 1.743-1.38 3.155-1.38 1.4 0 2.444.449 3.13 1.345.69.897 1.045 2.238 1.063 4.025v2.215Zm-2.136-2.39c0-1.201-.164-2.08-.492-2.637-.328-.563-.85-.844-1.565-.844-.697 0-1.21.267-1.538.8-.328.527-.5 1.354-.518 2.479v2.9c0 1.195.167 2.086.5 2.672.335.586.859.879 1.574.879.685 0 1.192-.27 1.52-.809.329-.545.501-1.394.519-2.549v-2.891Zm3.937-2.558c0-.773.25-1.406.748-1.898.498-.498 1.15-.747 1.96-.747.82 0 1.476.249 1.968.747.498.492.747 1.139.747 1.942v.633c0 .767-.249 1.397-.747 1.889-.492.493-1.142.739-1.95.739-.792 0-1.445-.24-1.96-.721-.51-.486-.766-1.14-.766-1.96v-.624Zm1.495.677c0 .404.11.732.334.984.228.246.527.369.896.369.363 0 .656-.123.879-.369.223-.252.334-.592.334-1.019v-.642c0-.404-.114-.732-.343-.984-.222-.252-.518-.378-.888-.378-.369 0-.665.129-.887.386-.217.252-.325.586-.325 1.002v.651Zm4.658 6.521c0-.785.255-1.421.764-1.907.51-.486 1.16-.729 1.952-.729.797 0 1.447.243 1.95.729.51.486.765 1.143.765 1.969v.624c0 .762-.246 1.391-.738 1.89-.486.492-1.14.738-1.96.738-.82 0-1.482-.243-1.986-.73-.498-.492-.747-1.139-.747-1.942v-.642Zm1.494.686c0 .398.114.726.343.984.234.252.533.378.896.378.375 0 .668-.12.88-.36.216-.246.324-.589.324-1.029v-.659c0-.41-.114-.738-.343-.984a1.146 1.146 0 0 0-.878-.369c-.364 0-.66.123-.888.369-.223.246-.334.586-.334 1.019v.651Zm-4.483 1.494-1.098-.633 6.249-10.002 1.099.633-6.25 10.002ZM62.602 296h-.908v-6.021l-1.821.669v-.82l2.588-.972h.142V296Zm7.105-3.032c0 1.058-.18 1.844-.542 2.358-.361.514-.926.772-1.694.772-.759 0-1.32-.251-1.685-.752-.365-.505-.553-1.257-.566-2.256v-1.206c0-1.045.18-1.822.542-2.329.361-.508.927-.762 1.699-.762.765 0 1.328.246 1.69.737.36.489.546 1.244.556 2.266v1.172Zm-.903-1.236c0-.765-.108-1.321-.323-1.67-.214-.351-.555-.527-1.02-.527-.462 0-.8.174-1.01.523-.212.348-.321.883-.328 1.606v1.445c0 .769.11 1.337.332 1.704.225.365.563.547 1.016.547.446 0 .776-.172.99-.517.219-.345.333-.889.343-1.631v-1.48Zm6.518 1.236c0 1.058-.18 1.844-.542 2.358-.361.514-.926.772-1.694.772-.758 0-1.32-.251-1.685-.752-.364-.505-.553-1.257-.566-2.256v-1.206c0-1.045.18-1.822.542-2.329.361-.508.928-.762 1.7-.762.764 0 1.327.246 1.689.737.361.489.546 1.244.556 2.266v1.172Zm-.903-1.236c0-.765-.108-1.321-.322-1.67-.215-.351-.555-.527-1.02-.527-.463 0-.8.174-1.012.523-.211.348-.32.883-.327 1.606v1.445c0 .769.111 1.337.332 1.704.225.365.564.547 1.016.547.446 0 .776-.172.991-.517.218-.345.332-.889.342-1.631v-1.48Zm3.628 1.822-.566.591V296h-.904v-7.5h.904v4.536l.483-.581 1.645-1.738h1.099l-2.056 2.207L80.947 296h-1.06l-1.84-2.446Z",
            fill:"#8A99B1"
          })]
        }),(0,r.jsxs)("g",{
          filter:"url(#funnels-locked-illustration_svg__e)",
          children:[(0,r.jsx)("rect",{
            x:130,
            y:285,
            width:64,
            height:40,
            rx:4,
            fill:"#fff",
            shapeRendering:"crispEdges"
          }),(0,r.jsx)("path",{
            d:"M154.835 294.39 149.72 306h-2.242l5.107-11.083h-6.618v-1.714h8.868v1.187Zm7.769 6.257c-.715.756-1.55 1.134-2.505 1.134-1.125 0-2.021-.392-2.689-1.177-.668-.792-1.002-1.829-1.002-3.112 0-.844.17-1.608.51-2.294a3.798 3.798 0 0 1 1.45-1.599c.627-.381 1.353-.572 2.18-.572 1.289 0 2.311.481 3.067 1.442.756.961 1.134 2.247 1.134 3.858v.598c0 2.308-.522 4.069-1.565 5.282s-2.598 1.828-4.667 1.846h-.254v-1.767h.307c1.26-.017 2.227-.319 2.901-.905.673-.592 1.051-1.503 1.133-2.734Zm-2.056-.536c.427 0 .829-.123 1.204-.369s.665-.586.87-1.019v-.835c0-.944-.193-1.702-.58-2.277-.387-.574-.888-.861-1.503-.861-.615 0-1.108.255-1.477.765-.363.504-.545 1.142-.545 1.916 0 .802.185 1.45.554 1.942.369.492.861.738 1.477.738Zm6.143-4.447c0-.773.249-1.406.747-1.898.498-.498 1.152-.747 1.96-.747.821 0 1.477.249 1.969.747.498.492.747 1.139.747 1.942v.633c0 .767-.249 1.397-.747 1.889-.492.493-1.143.739-1.951.739-.791 0-1.445-.24-1.96-.721-.51-.486-.765-1.14-.765-1.96v-.624Zm1.494.677c0 .404.112.732.334.984.229.246.528.369.897.369.363 0 .656-.123.879-.369.222-.252.334-.592.334-1.019v-.642c0-.404-.115-.732-.343-.984-.223-.252-.519-.378-.888-.378s-.665.129-.887.386c-.217.252-.326.586-.326 1.002v.651Zm4.659 6.521c0-.785.254-1.421.764-1.907s1.16-.729 1.951-.729c.797 0 1.448.243 1.952.729.509.486.764 1.143.764 1.969v.624c0 .762-.246 1.391-.738 1.89-.486.492-1.14.738-1.96.738-.82 0-1.482-.243-1.986-.73-.498-.492-.747-1.139-.747-1.942v-.642Zm1.494.686c0 .398.114.726.342.984.235.252.534.378.897.378.375 0 .668-.12.879-.36.217-.246.325-.589.325-1.029v-.659c0-.41-.114-.738-.343-.984a1.145 1.145 0 0 0-.879-.369c-.363 0-.659.123-.887.369-.223.246-.334.586-.334 1.019v.651Zm-4.483 1.494-1.098-.633 6.249-10.002 1.098.633-6.249 10.002ZM159.031 313.398 156.087 320h-.947l2.934-6.367h-3.847v-.742h4.804v.507Zm4.488 3.477a2.199 2.199 0 0 1-.679.542 1.82 1.82 0 0 1-.86.205c-.41 0-.768-.101-1.074-.303a1.978 1.978 0 0 1-.703-.849 2.922 2.922 0 0 1-.249-1.216c0-.475.09-.903.269-1.284.182-.381.439-.672.771-.874.332-.202.72-.303 1.162-.303.703 0 1.257.264 1.66.791.407.524.611 1.24.611 2.148v.264c0 1.384-.274 2.394-.821 3.032-.546.635-1.372.961-2.475.977h-.176v-.762h.191c.745-.013 1.318-.207 1.718-.581.401-.377.619-.973.655-1.787Zm-1.392 0c.303 0 .581-.093.835-.278.257-.186.444-.415.561-.689v-.361c0-.593-.128-1.074-.385-1.445-.257-.372-.583-.557-.977-.557-.397 0-.716.153-.957.459-.241.303-.361.703-.361 1.201 0 .485.115.885.346 1.201.235.313.547.469.938.469Zm5.112.679-.566.591V320h-.903v-7.5h.903v4.536l.483-.581 1.646-1.738h1.098l-2.055 2.207L170.14 320h-1.06l-1.841-2.446Z",
            fill:"#8A99B1"
          })]
        }),(0,r.jsxs)("g",{
          filter:"url(#funnels-locked-illustration_svg__f)",
          children:[(0,r.jsx)("rect",{
            x:222,
            y:339,
            width:64,
            height:40,
            rx:4,
            fill:"#fff",
            shapeRendering:"crispEdges"
          }),(0,r.jsx)("path",{
            d:"M240.674 352.477h1.353c.645 0 1.122-.162 1.433-.484.31-.322.466-.75.466-1.283 0-.516-.156-.917-.466-1.204-.305-.287-.727-.431-1.266-.431-.486 0-.893.135-1.222.404-.328.264-.492.61-.492 1.038h-2.54c0-.668.179-1.266.536-1.793.364-.534.868-.95 1.512-1.248a5.071 5.071 0 0 1 2.145-.449c1.353 0 2.414.326 3.181.976.768.644 1.152 1.535 1.152 2.672 0 .586-.179 1.125-.537 1.617-.357.492-.826.87-1.406 1.134.721.258 1.257.644 1.609 1.16.357.516.536 1.125.536 1.828 0 1.137-.416 2.048-1.248 2.733-.826.686-1.922 1.029-3.287 1.029-1.278 0-2.324-.337-3.138-1.011-.809-.674-1.213-1.564-1.213-2.672h2.54c0 .481.179.873.536 1.178.363.305.809.457 1.336.457.604 0 1.075-.158 1.415-.475.346-.322.519-.747.519-1.274 0-1.277-.703-1.916-2.11-1.916h-1.344v-1.986Zm16.365 2.232c0 1.77-.366 3.123-1.099 4.061-.732.937-1.804 1.406-3.217 1.406-1.394 0-2.46-.46-3.199-1.38-.738-.92-1.116-2.238-1.134-3.955v-2.356c0-1.787.37-3.143 1.108-4.069.744-.926 1.813-1.389 3.208-1.389 1.394 0 2.461.46 3.199 1.38.738.914 1.116 2.23 1.134 3.947v2.355Zm-2.54-2.584c0-1.061-.147-1.831-.44-2.312-.287-.486-.738-.729-1.353-.729-.598 0-1.04.231-1.327.694-.282.457-.431 1.175-.449 2.154v3.111c0 1.043.141 1.819.422 2.329.287.504.744.756 1.371.756.622 0 1.07-.243 1.345-.73.276-.486.419-1.23.431-2.232v-3.041Zm4.227-2.461c0-.785.255-1.421.765-1.907.51-.492 1.178-.738 2.004-.738.838 0 1.512.243 2.021.729.51.481.765 1.134.765 1.96v.633c0 .791-.255 1.427-.765 1.907-.509.481-1.177.721-2.003.721-.833 0-1.506-.24-2.022-.721-.51-.486-.765-1.14-.765-1.96v-.624Zm1.688.677c0 .351.099.636.299.852.205.211.471.317.8.317.328 0 .588-.109.782-.325.193-.217.29-.507.29-.871v-.65c0-.352-.097-.636-.29-.852-.194-.217-.46-.326-.8-.326-.322 0-.583.109-.782.326-.2.21-.299.506-.299.887v.642Zm4.43 6.521c0-.791.257-1.426.773-1.907.516-.486 1.184-.729 2.004-.729.832 0 1.503.24 2.013.72.515.475.773 1.131.773 1.969v.633c0 .785-.252 1.421-.756 1.907-.504.481-1.175.721-2.013.721-.843 0-1.52-.243-2.03-.73-.51-.486-.764-1.131-.764-1.933v-.651Zm1.687.686c0 .322.106.598.316.826.211.229.475.343.791.343.715 0 1.073-.396 1.073-1.187v-.668c0-.351-.1-.633-.299-.843-.199-.217-.463-.326-.791-.326s-.592.109-.791.326c-.199.21-.299.501-.299.87v.659Zm-4.518 1.494-1.239-.668 6.249-10.002 1.24.668-6.25 10.002Z",
            fill:"#161E35"
          }),(0,r.jsx)("path",{
            d:"M246.974 374h-4.659v-.649l2.461-2.735c.365-.413.616-.748.752-1.006.14-.26.21-.529.21-.805 0-.371-.112-.676-.337-.913-.224-.238-.524-.357-.898-.357-.449 0-.799.129-1.05.386-.247.254-.371.609-.371 1.064h-.903c0-.654.21-1.183.63-1.587.423-.403.988-.605 1.694-.605.661 0 1.183.174 1.567.522.384.345.576.806.576 1.382 0 .7-.445 1.533-1.337 2.5l-1.905 2.066h3.57V374Zm2.27-3.994h.679c.426-.007.762-.119 1.006-.337.244-.218.366-.513.366-.884 0-.833-.415-1.25-1.245-1.25-.391 0-.703.112-.938.337-.231.221-.346.516-.346.884h-.904c0-.563.205-1.03.616-1.402.413-.374.937-.561 1.572-.561.67 0 1.196.177 1.577.532.381.355.571.848.571 1.48 0 .309-.101.608-.302.898-.199.29-.471.506-.816.65.391.123.692.328.903.615.215.286.323.636.323 1.05 0 .638-.209 1.144-.625 1.518-.417.374-.959.562-1.626.562-.668 0-1.211-.181-1.631-.542-.417-.362-.625-.839-.625-1.431h.908c0 .374.122.674.366.898.244.225.572.337.982.337.436 0 .77-.114 1.001-.341.231-.228.346-.555.346-.982 0-.413-.127-.731-.381-.952-.253-.221-.62-.335-1.098-.342h-.679v-.737Zm4.414 3.52c0-.156.046-.286.137-.39.094-.104.234-.157.42-.157.185 0 .325.053.42.157a.55.55 0 0 1 .146.39c0 .15-.049.275-.146.376-.095.101-.235.152-.42.152-.186 0-.326-.051-.42-.152a.54.54 0 0 1-.137-.376Zm7.114-6.128L257.828 374h-.947l2.934-6.367h-3.847v-.742h4.804v.507Zm2.593 4.156-.566.591V374h-.903v-7.5h.903v4.536l.483-.581 1.646-1.738h1.098l-2.055 2.207 2.295 3.076h-1.06l-1.841-2.446Z",
            fill:"#8A99B1"
          })]
        }),(0,r.jsxs)("g",{
          filter:"url(#funnels-locked-illustration_svg__g)",
          children:[(0,r.jsx)("rect",{
            x:314,
            y:353,
            width:64,
            height:40,
            rx:4,
            fill:"#fff",
            shapeRendering:"crispEdges"
          }),(0,r.jsx)("path",{
            d:"M343.493 364.578c0 .627-.161 1.187-.483 1.679a3.37 3.37 0 0 1-1.319 1.151c.668.311 1.181.736 1.538 1.275a3.19 3.19 0 0 1 .545 1.828c0 1.125-.381 2.018-1.142 2.68-.762.657-1.776.985-3.041.985-1.272 0-2.291-.331-3.059-.993-.762-.662-1.143-1.553-1.143-2.672 0-.686.182-1.301.545-1.846.364-.545.873-.964 1.53-1.257a3.378 3.378 0 0 1-1.31-1.151 3.04 3.04 0 0 1-.475-1.679c0-1.09.352-1.954 1.055-2.593.703-.638 1.653-.958 2.848-.958 1.201 0 2.153.32 2.856.958.703.639 1.055 1.503 1.055 2.593Zm-1.855 5.827c0-.633-.19-1.142-.571-1.529-.375-.393-.873-.589-1.494-.589s-1.119.193-1.494.58c-.369.387-.554.9-.554 1.538 0 .627.182 1.128.545 1.503.369.375.876.563 1.521.563.644 0 1.145-.182 1.503-.545.363-.364.544-.87.544-1.521Zm-.272-5.748c0-.556-.161-1.013-.483-1.371-.323-.363-.756-.545-1.301-.545-.545 0-.976.173-1.292.519-.317.34-.475.805-.475 1.397 0 .586.158 1.052.475 1.398.322.345.756.518 1.301.518.545 0 .975-.173 1.292-.518.322-.346.483-.812.483-1.398Zm4.21-.993c0-.773.249-1.406.747-1.898.498-.498 1.151-.747 1.96-.747.82 0 1.477.249 1.969.747.498.492.747 1.139.747 1.942v.633c0 .767-.249 1.397-.747 1.889-.492.493-1.143.739-1.951.739-.791 0-1.445-.24-1.96-.721-.51-.486-.765-1.14-.765-1.96v-.624Zm1.494.677c0 .404.111.732.334.984.229.246.527.369.897.369.363 0 .656-.123.878-.369.223-.252.334-.592.334-1.019v-.642c0-.404-.114-.732-.342-.984-.223-.252-.519-.378-.888-.378s-.665.129-.888.386c-.216.252-.325.586-.325 1.002v.651Zm4.658 6.521c0-.785.255-1.421.765-1.907s1.16-.729 1.951-.729c.797 0 1.447.243 1.951.729.51.486.765 1.143.765 1.969v.624c0 .762-.246 1.391-.738 1.89-.487.492-1.14.738-1.96.738-.821 0-1.483-.243-1.987-.73-.498-.492-.747-1.139-.747-1.942v-.642Zm1.494.686c0 .398.115.726.343.984.235.252.533.378.897.378.375 0 .668-.12.879-.36.216-.246.325-.589.325-1.029v-.659c0-.41-.114-.738-.343-.984a1.145 1.145 0 0 0-.879-.369c-.363 0-.659.123-.888.369-.222.246-.334.586-.334 1.019v.651Zm-4.482 1.494-1.099-.633 6.249-10.002 1.099.633-6.249 10.002ZM340.092 388h-.908v-6.021l-1.822.669v-.82l2.588-.972h.142V388Zm2.759-.474a.57.57 0 0 1 .136-.39c.095-.104.235-.157.42-.157.186 0 .326.053.42.157a.547.547 0 0 1 .147.39c0 .15-.049.275-.147.376-.094.101-.234.152-.42.152-.185 0-.325-.051-.42-.152a.54.54 0 0 1-.136-.376Zm5.986-2.651a2.199 2.199 0 0 1-.679.542c-.26.137-.547.205-.859.205-.41 0-.768-.101-1.074-.303a1.98 1.98 0 0 1-.704-.849 2.922 2.922 0 0 1-.249-1.216c0-.475.09-.903.269-1.284.182-.381.439-.672.771-.874.333-.202.72-.303 1.163-.303.703 0 1.256.264 1.66.791.407.524.61 1.24.61 2.148v.264c0 1.384-.273 2.394-.82 3.032-.547.635-1.372.961-2.476.977h-.176v-.762h.191c.745-.013 1.318-.207 1.719-.581.4-.377.618-.973.654-1.787Zm-1.392 0c.303 0 .581-.093.835-.278.257-.186.445-.415.562-.689v-.361c0-.593-.129-1.074-.386-1.445-.257-.372-.583-.557-.977-.557-.397 0-.716.153-.957.459-.24.303-.361.703-.361 1.201 0 .485.116.885.347 1.201.234.313.547.469.937.469Zm5.113.679-.567.591V388h-.903v-7.5h.903v4.536l.484-.581 1.645-1.738h1.099l-2.056 2.207 2.295 3.076h-1.06l-1.84-2.446Z",
            fill:"#8A99B1"
          })]
        })]
      }),(0,r.jsx)("path",{
        d:"M75.904 83.728h-4.656l-.8 2.272h-1.904l3.984-11.136h2.112L78.624 86h-1.92l-.8-2.272Zm-.512-1.488-1.808-5.168-1.824 5.168h3.632Zm4.356-.688c0-.885.182-1.67.544-2.352a4.062 4.062 0 0 1 3.632-2.16 4.01 4.01 0 0 1 1.696.384c.566.245 1.014.576 1.344.992V74.16h1.84V86h-1.84v-1.328c-.298.427-.714.779-1.248 1.056-.522.277-1.125.416-1.808.416a4.028 4.028 0 0 1-2.112-.576 4.275 4.275 0 0 1-1.504-1.632c-.362-.704-.544-1.499-.544-2.384Zm7.216.032c0-.608-.128-1.136-.384-1.584a2.585 2.585 0 0 0-.976-1.024 2.574 2.574 0 0 0-1.312-.352c-.47 0-.906.117-1.312.352-.405.224-.736.56-.992 1.008-.245.437-.368.96-.368 1.568 0 .608.123 1.141.368 1.6.256.459.587.81.992 1.056.416.235.854.352 1.312.352.47 0 .907-.117 1.312-.352.406-.235.73-.576.976-1.024.256-.459.384-.992.384-1.6Zm3.628-.032c0-.885.181-1.67.544-2.352a4.063 4.063 0 0 1 3.632-2.16 4.01 4.01 0 0 1 1.696.384c.565.245 1.013.576 1.344.992V74.16h1.84V86h-1.84v-1.328c-.299.427-.715.779-1.248 1.056-.523.277-1.125.416-1.808.416a4.028 4.028 0 0 1-2.112-.576 4.275 4.275 0 0 1-1.504-1.632c-.363-.704-.544-1.499-.544-2.384Zm7.216.032c0-.608-.128-1.136-.384-1.584a2.584 2.584 0 0 0-.976-1.024 2.574 2.574 0 0 0-1.312-.352c-.47 0-.907.117-1.312.352-.405.224-.736.56-.992 1.008-.245.437-.368.96-.368 1.568 0 .608.123 1.141.368 1.6.256.459.587.81.992 1.056.416.235.853.352 1.312.352.47 0 .907-.117 1.312-.352s.73-.576.976-1.024c.256-.459.384-.992.384-1.6Zm7.784-.032c0-.885.181-1.67.544-2.352a4.063 4.063 0 0 1 3.616-2.16c.693 0 1.296.139 1.808.416.523.267.939.603 1.248 1.008v-1.28h1.84V86h-1.84v-1.312c-.309.416-.731.763-1.264 1.04s-1.141.416-1.824.416a3.917 3.917 0 0 1-2.08-.576 4.275 4.275 0 0 1-1.504-1.632c-.363-.704-.544-1.499-.544-2.384Zm7.216.032c0-.608-.128-1.136-.384-1.584a2.584 2.584 0 0 0-.976-1.024 2.574 2.574 0 0 0-1.312-.352c-.469 0-.907.117-1.312.352a2.58 2.58 0 0 0-.992 1.008c-.245.437-.368.96-.368 1.568 0 .608.123 1.141.368 1.6.256.459.587.81.992 1.056a2.63 2.63 0 0 0 1.312.352c.469 0 .907-.117 1.312-.352s.731-.576.976-1.024c.256-.459.384-.992.384-1.6Zm12.088-2.912h-1.632V86h-1.84v-7.328h-1.04v-1.488h1.04v-.624c0-1.013.267-1.75.8-2.208.544-.47 1.392-.704 2.544-.704v1.52c-.555 0-.944.107-1.168.32-.224.203-.336.56-.336 1.072v.624h1.632v1.488Zm2.545-2.656a1.13 1.13 0 0 1-.832-.336 1.13 1.13 0 0 1-.336-.832c0-.33.112-.608.336-.832a1.13 1.13 0 0 1 .832-.336c.32 0 .592.112.816.336.224.224.336.501.336.832 0 .33-.112.608-.336.832a1.11 1.11 0 0 1-.816.336Zm.896 1.168V86h-1.824v-8.816h1.824Zm4.218-3.024V86h-1.824V74.16h1.824Zm4.523 4.512v4.88c0 .33.075.57.224.72.16.139.427.208.8.208h1.12V86h-1.44c-.821 0-1.451-.192-1.888-.576-.437-.384-.656-1.008-.656-1.872v-4.88h-1.04v-1.488h1.04v-2.192h1.84v2.192h2.144v1.488h-2.144Zm11.905 2.704c0 .33-.021.63-.064.896h-6.736c.053.704.315 1.27.784 1.696.469.427 1.045.64 1.728.64.981 0 1.675-.41 2.08-1.232h1.968a4 4 0 0 1-1.456 2c-.693.512-1.557.768-2.592.768-.843 0-1.6-.187-2.272-.56a4.187 4.187 0 0 1-1.568-1.6c-.373-.693-.56-1.493-.56-2.4 0-.907.181-1.701.544-2.384a3.936 3.936 0 0 1 1.552-1.6c.672-.373 1.44-.56 2.304-.56.832 0 1.573.181 2.224.544a3.83 3.83 0 0 1 1.52 1.536c.363.65.544 1.403.544 2.256Zm-1.904-.576c-.011-.672-.251-1.21-.72-1.616-.469-.405-1.051-.608-1.744-.608-.629 0-1.168.203-1.616.608-.448.395-.715.933-.8 1.616h4.88Zm5.523-2.336a2.826 2.826 0 0 1 1.056-1.04c.448-.256.976-.384 1.584-.384v1.888h-.464c-.715 0-1.259.181-1.632.544-.363.363-.544.992-.544 1.888V86h-1.824v-8.816h1.824v1.28Zm7.865 3.088c0-.885.181-1.67.544-2.352a4.063 4.063 0 0 1 3.616-2.16c.693 0 1.296.139 1.808.416.523.267.939.603 1.248 1.008v-1.28h1.84V86h-1.84v-1.312c-.309.416-.731.763-1.264 1.04s-1.141.416-1.824.416a3.917 3.917 0 0 1-2.08-.576 4.275 4.275 0 0 1-1.504-1.632c-.363-.704-.544-1.499-.544-2.384Zm7.216.032c0-.608-.128-1.136-.384-1.584a2.584 2.584 0 0 0-.976-1.024 2.574 2.574 0 0 0-1.312-.352c-.469 0-.907.117-1.312.352a2.58 2.58 0 0 0-.992 1.008c-.245.437-.368.96-.368 1.568 0 .608.123 1.141.368 1.6.256.459.587.81.992 1.056a2.63 2.63 0 0 0 1.312.352c.469 0 .907-.117 1.312-.352s.731-.576.976-1.024c.256-.459.384-.992.384-1.6Zm8.684-4.544c.693 0 1.312.144 1.856.432.554.288.986.715 1.296 1.28.309.565.464 1.248.464 2.048V86h-1.808v-4.928c0-.79-.198-1.392-.592-1.808-.395-.427-.934-.64-1.616-.64-.683 0-1.227.213-1.632.64-.395.416-.592 1.019-.592 1.808V86h-1.824v-8.816h1.824v1.008a3.025 3.025 0 0 1 1.136-.848 3.71 3.71 0 0 1 1.488-.304Zm5.334 4.512c0-.885.182-1.67.544-2.352a4.059 4.059 0 0 1 3.632-2.16c.576 0 1.142.128 1.696.384.566.245 1.014.576 1.344.992V74.16h1.84V86h-1.84v-1.328c-.298.427-.714.779-1.248 1.056-.522.277-1.125.416-1.808.416a4.028 4.028 0 0 1-2.112-.576 4.283 4.283 0 0 1-1.504-1.632c-.362-.704-.544-1.499-.544-2.384Zm7.216.032c0-.608-.128-1.136-.384-1.584a2.578 2.578 0 0 0-.976-1.024 2.571 2.571 0 0 0-1.312-.352c-.469 0-.906.117-1.312.352a2.58 2.58 0 0 0-.992 1.008c-.245.437-.368.96-.368 1.568 0 .608.123 1.141.368 1.6.256.459.587.81.992 1.056.416.235.854.352 1.312.352.47 0 .907-.117 1.312-.352.406-.235.731-.576.976-1.024.256-.459.384-.992.384-1.6Zm20.232-4.4L206.413 86h-1.92l-1.776-6.512L200.941 86h-1.92l-2.752-8.816h1.856l1.84 7.088 1.872-7.088h1.904l1.792 7.056 1.824-7.056h1.792Zm.756 4.368c0-.885.181-1.67.544-2.352a4.056 4.056 0 0 1 3.616-2.16c.693 0 1.296.139 1.808.416.522.267.938.603 1.248 1.008v-1.28h1.84V86h-1.84v-1.312c-.31.416-.731.763-1.264 1.04-.534.277-1.142.416-1.824.416a3.914 3.914 0 0 1-2.08-.576 4.268 4.268 0 0 1-1.504-1.632c-.363-.704-.544-1.499-.544-2.384Zm7.216.032c0-.608-.128-1.136-.384-1.584a2.591 2.591 0 0 0-.976-1.024 2.577 2.577 0 0 0-1.312-.352c-.47 0-.907.117-1.312.352-.406.224-.736.56-.992 1.008-.246.437-.368.96-.368 1.568 0 .608.122 1.141.368 1.6.256.459.586.81.992 1.056a2.63 2.63 0 0 0 1.312.352c.469 0 .906-.117 1.312-.352.405-.235.73-.576.976-1.024.256-.459.384-.992.384-1.6Zm6.363-2.912v4.88c0 .33.075.57.224.72.16.139.427.208.8.208h1.12V86h-1.44c-.821 0-1.45-.192-1.888-.576-.437-.384-.656-1.008-.656-1.872v-4.88h-1.04v-1.488h1.04v-2.192h1.84v2.192h2.144v1.488h-2.144Zm3.217 2.912c0-.907.182-1.701.544-2.384a3.976 3.976 0 0 1 1.536-1.6c.651-.373 1.398-.56 2.24-.56 1.067 0 1.947.256 2.64.768.704.501 1.179 1.221 1.424 2.16h-1.968a2.081 2.081 0 0 0-.768-1.024c-.352-.245-.794-.368-1.328-.368-.746 0-1.344.267-1.792.8-.437.523-.656 1.259-.656 2.208 0 .95.219 1.69.656 2.224.448.533 1.046.8 1.792.8 1.056 0 1.755-.464 2.096-1.392h1.968c-.256.896-.736 1.61-1.44 2.144-.704.523-1.578.784-2.624.784-.842 0-1.589-.187-2.24-.56a4.115 4.115 0 0 1-1.536-1.6c-.362-.693-.544-1.493-.544-2.4Zm14.762-4.544c.672 0 1.269.144 1.792.432.533.288.949.715 1.248 1.28.309.565.464 1.248.464 2.048V86h-1.808v-4.928c0-.79-.197-1.392-.592-1.808-.395-.427-.933-.64-1.616-.64s-1.227.213-1.632.64c-.395.416-.592 1.019-.592 1.808V86h-1.824V74.16h1.824v4.048a3.072 3.072 0 0 1 1.168-.864 3.99 3.99 0 0 1 1.568-.304ZM68.592 105.552c0-.885.181-1.669.544-2.352a4.059 4.059 0 0 1 3.632-2.16 4.01 4.01 0 0 1 1.696.384c.565.245 1.013.576 1.344.992V98.16h1.84V110h-1.84v-1.328c-.299.427-.715.779-1.248 1.056-.523.277-1.125.416-1.808.416a4.028 4.028 0 0 1-2.112-.576 4.28 4.28 0 0 1-1.504-1.632c-.363-.704-.544-1.499-.544-2.384Zm7.216.032c0-.608-.128-1.136-.384-1.584a2.586 2.586 0 0 0-.976-1.024 2.571 2.571 0 0 0-1.312-.352c-.47 0-.907.117-1.312.352-.405.224-.736.56-.992 1.008-.245.437-.368.96-.368 1.568 0 .608.123 1.141.368 1.6.256.459.587.811.992 1.056a2.628 2.628 0 0 0 2.624 0c.405-.235.73-.576.976-1.024.256-.459.384-.992.384-1.6Zm6.06-3.12a2.818 2.818 0 0 1 1.056-1.04c.448-.256.976-.384 1.584-.384v1.888h-.464c-.715 0-1.259.181-1.632.544-.363.363-.544.992-.544 1.888V110h-1.824v-8.816h1.824v1.28Zm8.14 7.68c-.832 0-1.584-.187-2.256-.56a4.149 4.149 0 0 1-1.584-1.6c-.384-.693-.576-1.493-.576-2.4 0-.896.198-1.691.592-2.384a4.088 4.088 0 0 1 1.616-1.6c.683-.373 1.446-.56 2.288-.56.843 0 1.606.187 2.288.56a4.09 4.09 0 0 1 1.616 1.6c.395.693.592 1.488.592 2.384 0 .896-.202 1.691-.608 2.384a4.254 4.254 0 0 1-1.664 1.616 4.785 4.785 0 0 1-2.304.56Zm0-1.584c.47 0 .907-.112 1.312-.336.416-.224.752-.56 1.008-1.008.256-.448.384-.992.384-1.632 0-.64-.122-1.179-.368-1.616a2.473 2.473 0 0 0-.976-1.008 2.67 2.67 0 0 0-1.312-.336c-.469 0-.906.112-1.312.336-.394.224-.709.56-.944 1.008-.234.437-.352.976-.352 1.616 0 .949.24 1.685.72 2.208.491.512 1.104.768 1.84.768Zm8.204-6.08c.309-.405.73-.747 1.263-1.024.534-.277 1.137-.416 1.809-.416.768 0 1.466.192 2.096.576.64.373 1.141.901 1.504 1.584.362.683.544 1.467.544 2.352 0 .885-.182 1.68-.544 2.384a4.123 4.123 0 0 1-1.504 1.632 3.947 3.947 0 0 1-2.096.576c-.672 0-1.27-.133-1.793-.4a4.11 4.11 0 0 1-1.28-1.024v5.472h-1.823v-13.008h1.823v1.296Zm5.36 3.072c0-.608-.128-1.131-.384-1.568a2.447 2.447 0 0 0-.992-1.008 2.63 2.63 0 0 0-2.624 0 2.699 2.699 0 0 0-.993 1.024c-.245.448-.367.976-.367 1.584 0 .608.122 1.141.367 1.6.257.448.587.789.993 1.024a2.63 2.63 0 0 0 2.624 0c.416-.245.746-.597.992-1.056.256-.459.384-.992.384-1.6Zm5.483-3.072c.31-.405.731-.747 1.264-1.024.534-.277 1.136-.416 1.808-.416.768 0 1.467.192 2.096.576.64.373 1.142.901 1.504 1.584.363.683.544 1.467.544 2.352 0 .885-.181 1.68-.544 2.384a4.116 4.116 0 0 1-1.504 1.632 3.945 3.945 0 0 1-2.096.576c-.672 0-1.269-.133-1.792-.4a4.122 4.122 0 0 1-1.28-1.024v5.472h-1.824v-13.008h1.824v1.296Zm5.36 3.072c0-.608-.128-1.131-.384-1.568a2.441 2.441 0 0 0-.992-1.008 2.63 2.63 0 0 0-2.624 0 2.7 2.7 0 0 0-.992 1.024c-.245.448-.368.976-.368 1.584 0 .608.123 1.141.368 1.6a2.7 2.7 0 0 0 .992 1.024 2.63 2.63 0 0 0 2.624 0 2.63 2.63 0 0 0 .992-1.056c.256-.459.384-.992.384-1.6Zm11.74-.176c0 .331-.021.629-.064.896h-6.736c.053.704.315 1.269.784 1.696.469.427 1.045.64 1.728.64.981 0 1.675-.411 2.08-1.232h1.968a4 4 0 0 1-1.456 2c-.693.512-1.557.768-2.592.768-.843 0-1.6-.187-2.272-.56a4.185 4.185 0 0 1-1.568-1.6c-.373-.693-.56-1.493-.56-2.4 0-.907.181-1.701.544-2.384a3.936 3.936 0 0 1 1.552-1.6c.672-.373 1.44-.56 2.304-.56.832 0 1.573.181 2.224.544a3.835 3.835 0 0 1 1.52 1.536c.363.651.544 1.403.544 2.256Zm-1.904-.576c-.011-.672-.251-1.211-.72-1.616s-1.051-.608-1.744-.608c-.629 0-1.168.203-1.616.608-.448.395-.715.933-.8 1.616h4.88Zm3.091.752c0-.885.181-1.669.544-2.352a4.059 4.059 0 0 1 3.632-2.16 4.01 4.01 0 0 1 1.696.384c.565.245 1.013.576 1.344.992V98.16h1.84V110h-1.84v-1.328c-.299.427-.715.779-1.248 1.056-.523.277-1.125.416-1.808.416a4.028 4.028 0 0 1-2.112-.576 4.28 4.28 0 0 1-1.504-1.632c-.363-.704-.544-1.499-.544-2.384Zm7.216.032c0-.608-.128-1.136-.384-1.584a2.586 2.586 0 0 0-.976-1.024 2.571 2.571 0 0 0-1.312-.352c-.469 0-.907.117-1.312.352a2.58 2.58 0 0 0-.992 1.008c-.245.437-.368.96-.368 1.568 0 .608.123 1.141.368 1.6.256.459.587.811.992 1.056a2.627 2.627 0 0 0 2.624 0c.405-.235.731-.576.976-1.024.256-.459.384-.992.384-1.6Zm11.004-2.144v1.536h-6.576v-1.536h6.576Zm6.415 6.704c-.832 0-1.584-.187-2.256-.56a4.149 4.149 0 0 1-1.584-1.6c-.384-.693-.576-1.493-.576-2.4 0-.896.197-1.691.592-2.384a4.09 4.09 0 0 1 1.616-1.6c.683-.373 1.445-.56 2.288-.56.843 0 1.605.187 2.288.56a4.09 4.09 0 0 1 1.616 1.6c.395.693.592 1.488.592 2.384 0 .896-.203 1.691-.608 2.384a4.252 4.252 0 0 1-1.664 1.616 4.783 4.783 0 0 1-2.304.56Zm0-1.584a2.67 2.67 0 0 0 1.312-.336c.416-.224.752-.56 1.008-1.008.256-.448.384-.992.384-1.632 0-.64-.123-1.179-.368-1.616a2.473 2.473 0 0 0-.976-1.008 2.67 2.67 0 0 0-1.312-.336 2.67 2.67 0 0 0-1.312.336c-.395.224-.709.56-.944 1.008-.235.437-.352.976-.352 1.616 0 .949.24 1.685.72 2.208.491.512 1.104.768 1.84.768Zm10.075-5.888h-1.632V110h-1.84v-7.328h-1.04v-1.488h1.04v-.624c0-1.013.267-1.75.8-2.208.544-.47 1.392-.704 2.544-.704v1.52c-.554 0-.944.107-1.168.32-.224.203-.336.56-.336 1.072v.624h1.632v1.488Zm5.313 0h-1.632V110h-1.84v-7.328h-1.04v-1.488h1.04v-.624c0-1.013.266-1.75.8-2.208.544-.47 1.392-.704 2.544-.704v1.52c-.555 0-.944.107-1.168.32-.224.203-.336.56-.336 1.072v.624h1.632v1.488Zm8.973 7.472c-.694 0-1.318-.123-1.872-.368-.544-.256-.976-.597-1.296-1.024a2.588 2.588 0 0 1-.512-1.456h1.888c.032.373.208.688.528.944.33.245.741.368 1.232.368.512 0 .906-.096 1.184-.288.288-.203.432-.459.432-.768 0-.331-.16-.576-.48-.736-.31-.16-.806-.336-1.488-.528-.662-.181-1.2-.357-1.616-.528a2.902 2.902 0 0 1-1.088-.784c-.299-.352-.448-.816-.448-1.392 0-.469.138-.896.416-1.28.277-.395.672-.704 1.184-.928.522-.224 1.12-.336 1.792-.336 1.002 0 1.808.256 2.416.768.618.501.949 1.189.992 2.064h-1.824a1.3 1.3 0 0 0-.48-.944c-.288-.235-.678-.352-1.168-.352-.48 0-.848.091-1.104.272a.841.841 0 0 0-.384.72c0 .235.085.432.256.592.17.16.378.288.624.384.245.085.608.197 1.088.336.64.171 1.162.347 1.568.528.416.171.773.427 1.072.768.298.341.453.795.464 1.36 0 .501-.139.949-.416 1.344-.278.395-.672.704-1.184.928-.502.224-1.094.336-1.776.336Zm13.426-4.768c0 .331-.021.629-.064.896h-6.736c.054.704.315 1.269.784 1.696.47.427 1.046.64 1.728.64.982 0 1.675-.411 2.08-1.232h1.968a3.994 3.994 0 0 1-1.456 2c-.693.512-1.557.768-2.592.768-.842 0-1.6-.187-2.272-.56a4.185 4.185 0 0 1-1.568-1.6c-.373-.693-.56-1.493-.56-2.4 0-.907.182-1.701.544-2.384a3.942 3.942 0 0 1 1.552-1.6c.672-.373 1.44-.56 2.304-.56.832 0 1.574.181 2.224.544a3.828 3.828 0 0 1 1.52 1.536c.363.651.544 1.403.544 2.256Zm-1.904-.576c-.01-.672-.25-1.211-.72-1.616-.469-.405-1.05-.608-1.744-.608-.629 0-1.168.203-1.616.608-.448.395-.714.933-.8 1.616h4.88Zm6.899 5.344c-.693 0-1.317-.123-1.872-.368-.544-.256-.976-.597-1.296-1.024a2.596 2.596 0 0 1-.512-1.456h1.888c.032.373.208.688.528.944.331.245.742.368 1.232.368.512 0 .907-.096 1.184-.288.288-.203.432-.459.432-.768 0-.331-.16-.576-.48-.736-.309-.16-.805-.336-1.488-.528-.661-.181-1.2-.357-1.616-.528a2.91 2.91 0 0 1-1.088-.784c-.298-.352-.448-.816-.448-1.392 0-.469.139-.896.416-1.28.278-.395.672-.704 1.184-.928.523-.224 1.12-.336 1.792-.336 1.003 0 1.808.256 2.416.768.619.501.95 1.189.992 2.064h-1.824a1.3 1.3 0 0 0-.48-.944c-.288-.235-.677-.352-1.168-.352-.48 0-.848.091-1.104.272a.841.841 0 0 0-.384.72c0 .235.086.432.256.592.171.16.379.288.624.384.246.085.608.197 1.088.336.64.171 1.163.347 1.568.528a2.84 2.84 0 0 1 1.072.768c.299.341.454.795.464 1.36 0 .501-.138.949-.416 1.344-.277.395-.672.704-1.184.928-.501.224-1.093.336-1.776.336Zm8.547 0c-.693 0-1.317-.123-1.872-.368-.544-.256-.976-.597-1.296-1.024a2.596 2.596 0 0 1-.512-1.456h1.888c.032.373.208.688.528.944.331.245.742.368 1.232.368.512 0 .907-.096 1.184-.288.288-.203.432-.459.432-.768 0-.331-.16-.576-.48-.736-.309-.16-.805-.336-1.488-.528-.661-.181-1.2-.357-1.616-.528a2.91 2.91 0 0 1-1.088-.784c-.298-.352-.448-.816-.448-1.392 0-.469.139-.896.416-1.28.278-.395.672-.704 1.184-.928.523-.224 1.12-.336 1.792-.336 1.003 0 1.808.256 2.416.768.619.501.95 1.189.992 2.064h-1.824a1.3 1.3 0 0 0-.48-.944c-.288-.235-.677-.352-1.168-.352-.48 0-.848.091-1.104.272a.841.841 0 0 0-.384.72c0 .235.086.432.256.592.171.16.379.288.624.384.246.085.608.197 1.088.336.64.171 1.163.347 1.568.528a2.84 2.84 0 0 1 1.072.768c.299.341.454.795.464 1.36 0 .501-.138.949-.416 1.344-.277.395-.672.704-1.184.928-.501.224-1.093.336-1.776.336Zm6.275-10.128a1.13 1.13 0 0 1-.832-.336 1.13 1.13 0 0 1-.336-.832c0-.33.112-.608.336-.832a1.13 1.13 0 0 1 .832-.336c.32 0 .592.112.816.336.224.224.336.501.336.832 0 .33-.112.608-.336.832a1.11 1.11 0 0 1-.816.336Zm.896 1.168V110h-1.824v-8.816h1.824Zm6.219 8.96c-.832 0-1.584-.187-2.256-.56a4.149 4.149 0 0 1-1.584-1.6c-.384-.693-.576-1.493-.576-2.4 0-.896.197-1.691.592-2.384a4.09 4.09 0 0 1 1.616-1.6c.683-.373 1.445-.56 2.288-.56.843 0 1.605.187 2.288.56a4.09 4.09 0 0 1 1.616 1.6c.395.693.592 1.488.592 2.384 0 .896-.203 1.691-.608 2.384a4.252 4.252 0 0 1-1.664 1.616 4.783 4.783 0 0 1-2.304.56Zm0-1.584a2.67 2.67 0 0 0 1.312-.336c.416-.224.752-.56 1.008-1.008.256-.448.384-.992.384-1.632 0-.64-.123-1.179-.368-1.616a2.473 2.473 0 0 0-.976-1.008 2.67 2.67 0 0 0-1.312-.336 2.67 2.67 0 0 0-1.312.336c-.395.224-.709.56-.944 1.008-.235.437-.352.976-.352 1.616 0 .949.24 1.685.72 2.208.491.512 1.104.768 1.84.768Zm10.827-7.52c.693 0 1.312.144 1.856.432.555.288.987.715 1.296 1.28.309.565.464 1.248.464 2.048v5.2h-1.808v-4.928c0-.789-.197-1.392-.592-1.808-.395-.427-.933-.64-1.616-.64s-1.227.213-1.632.64c-.395.416-.592 1.019-.592 1.808V110h-1.824v-8.816h1.824v1.008a3.033 3.033 0 0 1 1.136-.848 3.706 3.706 0 0 1 1.488-.304Zm9.143 9.104c-.694 0-1.318-.123-1.872-.368-.544-.256-.976-.597-1.296-1.024a2.588 2.588 0 0 1-.512-1.456h1.888c.032.373.208.688.528.944.33.245.741.368 1.232.368.512 0 .906-.096 1.184-.288.288-.203.432-.459.432-.768 0-.331-.16-.576-.48-.736-.31-.16-.806-.336-1.488-.528-.662-.181-1.2-.357-1.616-.528a2.902 2.902 0 0 1-1.088-.784c-.299-.352-.448-.816-.448-1.392 0-.469.138-.896.416-1.28.277-.395.672-.704 1.184-.928.522-.224 1.12-.336 1.792-.336 1.002 0 1.808.256 2.416.768.618.501.949 1.189.992 2.064h-1.824a1.3 1.3 0 0 0-.48-.944c-.288-.235-.678-.352-1.168-.352-.48 0-.848.091-1.104.272a.841.841 0 0 0-.384.72c0 .235.085.432.256.592.17.16.378.288.624.384.245.085.608.197 1.088.336.64.171 1.162.347 1.568.528.416.171.773.427 1.072.768.298.341.453.795.464 1.36 0 .501-.139.949-.416 1.344-.278.395-.672.704-1.184.928-.502.224-1.094.336-1.776.336Z",
        fill:"#161E35"
      }),(0,r.jsx)("path",{
        fill:"url(#funnels-locked-illustration_svg__h)",
        d:"M296 479h240v27.769H296z"
      }),(0,r.jsx)("path",{
        d:"M264.926 264.33a172.29 172.29 0 0 1 .969-34.541c.027-.194.05-.383.077-.573 0 .099-.05.379 0-.085.044-.343.094-.686.139-1.028.103-.722.21-1.447.323-2.164.22-1.443.448-2.881.718-4.314a169.682 169.682 0 0 1 1.696-8.318 179.065 179.065 0 0 1 4.594-16.446 181.258 181.258 0 0 1 2.818-7.857 148.05 148.05 0 0 1 3.073-7.43 172.997 172.997 0 0 1 7.404-14.701 155.17 155.17 0 0 1 8.749-13.687 122.93 122.93 0 0 1 4.54-5.977 136.945 136.945 0 0 1 5.044-5.91 125.128 125.128 0 0 1 11.028-10.82c.948-.817 1.909-1.62 2.881-2.407l1.422-1.132c.081-.063.449-.333.103-.081l.319-.243.803-.609a110.409 110.409 0 0 1 6.143-4.301 98.954 98.954 0 0 1 3.113-1.943 2.263 2.263 0 0 0 .705-3.01 2.242 2.242 0 0 0-2.948-.885 117.223 117.223 0 0 0-24.027 19.345 146.126 146.126 0 0 0-19.616 25.786 171.284 171.284 0 0 0-14.439 30.588 178.623 178.623 0 0 0-8.453 33.279 175.928 175.928 0 0 0-1.92 35.163c.071 1.434.16 2.863.264 4.288.086 1.176.969 2.312 2.244 2.254 1.139-.05 2.337-.992 2.243-2.254l-.009.013Z",
        fill:"#5D97FF"
      }),(0,r.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"m328.344 121.477 4.157-3.012-2.115 13.251a2.038 2.038 0 0 0 4.024.642l2.891-18.108a2.039 2.039 0 0 0-1.691-2.334l-18.108-2.89a2.037 2.037 0 1 0-.643 4.024l13.251 2.115-4.206 3.048c1.069.915 1.909 2.026 2.44 3.264Z",
        fill:"#5D97FF"
      }),(0,r.jsxs)("g",{
        filter:"url(#funnels-locked-illustration_svg__i)",
        children:[(0,r.jsx)("g",{
          filter:"url(#funnels-locked-illustration_svg__j)",
          children:(0,r.jsx)("rect",{
            x:379,
            y:237,
            width:152,
            height:80,
            rx:4,
            fill:"#F5F5F5"
          })
        }),(0,r.jsx)("path",{
          d:"M400.475 287.39 395.359 299h-2.241l5.107-11.083h-6.619v-1.714h8.869v1.187Zm10.054 6.222c0 1.84-.345 3.229-1.037 4.166-.685.932-1.731 1.398-3.138 1.398-1.382 0-2.425-.454-3.128-1.363-.698-.914-1.055-2.264-1.073-4.051v-2.215c0-1.84.343-3.22 1.029-4.14.691-.92 1.743-1.38 3.155-1.38 1.4 0 2.443.449 3.129 1.345.691.897 1.046 2.238 1.063 4.025v2.215Zm-2.135-2.39c0-1.201-.165-2.08-.493-2.637-.328-.563-.849-.844-1.564-.844-.697 0-1.21.267-1.538.8-.328.527-.501 1.354-.519 2.479v2.9c0 1.195.167 2.086.501 2.672.334.586.859.879 1.573.879.686 0 1.193-.27 1.521-.809.328-.545.501-1.394.519-2.549v-2.891Zm3.937-2.558c0-.773.249-1.406.747-1.898.498-.498 1.151-.747 1.96-.747.82 0 1.477.249 1.969.747.498.492.747 1.139.747 1.942v.633c0 .767-.249 1.397-.747 1.889-.492.493-1.143.739-1.951.739-.791 0-1.445-.24-1.96-.721-.51-.486-.765-1.14-.765-1.96v-.624Zm1.494.677c0 .404.112.732.334.984.229.246.528.369.897.369.363 0 .656-.123.879-.369.222-.252.334-.592.334-1.019v-.642c0-.404-.115-.732-.343-.984-.223-.252-.519-.378-.888-.378s-.665.129-.888.386c-.216.252-.325.586-.325 1.002v.651Zm4.658 6.521c0-.785.255-1.421.765-1.907s1.16-.729 1.951-.729c.797 0 1.447.243 1.951.729.51.486.765 1.143.765 1.969v.624c0 .762-.246 1.391-.738 1.89-.487.492-1.14.738-1.96.738-.821 0-1.483-.243-1.987-.73-.498-.492-.747-1.139-.747-1.942v-.642Zm1.495.686c0 .398.114.726.342.984.235.252.534.378.897.378.375 0 .668-.12.879-.36.216-.246.325-.589.325-1.029v-.659c0-.41-.114-.738-.343-.984a1.145 1.145 0 0 0-.879-.369c-.363 0-.659.123-.887.369-.223.246-.334.586-.334 1.019v.651Zm-4.483 1.494-1.099-.633 6.25-10.002 1.098.633-6.249 10.002Zm14.361-3.867c0-1.465.34-2.64 1.02-3.525.68-.89 1.591-1.336 2.733-1.336 1.008 0 1.823.352 2.444 1.055V285.5h2.135V299h-1.933l-.106-.984c-.638.773-1.491 1.16-2.557 1.16-1.113 0-2.016-.448-2.707-1.345-.686-.896-1.029-2.115-1.029-3.656Zm2.136.184c0 .967.185 1.723.554 2.268.375.539.905.809 1.591.809.873 0 1.511-.39 1.916-1.169v-4.061c-.393-.762-1.026-1.143-1.899-1.143-.691 0-1.224.276-1.599.827-.375.545-.563 1.368-.563 2.469Zm13.404-2.918a5.399 5.399 0 0 0-.871-.07c-.978 0-1.637.375-1.977 1.125V299h-2.136v-9.51h2.039l.053 1.064c.516-.826 1.23-1.24 2.144-1.24.305 0 .557.041.756.124l-.008 2.003Zm.632 2.716c0-.931.185-1.769.554-2.513.369-.75.888-1.325 1.556-1.723.668-.404 1.435-.607 2.302-.607 1.284 0 2.324.414 3.121 1.24.802.826 1.236 1.922 1.3 3.287l.009.501c0 .937-.182 1.775-.545 2.513a3.95 3.95 0 0 1-1.547 1.714c-.668.405-1.441.607-2.32.607-1.342 0-2.417-.446-3.226-1.336-.802-.897-1.204-2.089-1.204-3.577v-.106Zm2.136.185c0 .978.202 1.746.607 2.303.404.55.966.826 1.687.826.721 0 1.28-.282 1.679-.844.404-.563.606-1.386.606-2.47 0-.961-.208-1.722-.624-2.285-.41-.562-.97-.844-1.679-.844-.697 0-1.251.279-1.661.835-.41.551-.615 1.377-.615 2.479Zm16.84 0c0 1.47-.334 2.645-1.002 3.524-.668.873-1.564 1.31-2.69 1.31-1.042 0-1.877-.343-2.504-1.029v4.509h-2.136V289.49h1.969l.088.967c.626-.762 1.479-1.143 2.557-1.143 1.16 0 2.068.434 2.725 1.301.662.862.993 2.06.993 3.595v.132Zm-2.127-.185c0-.949-.19-1.702-.571-2.259-.375-.556-.914-.835-1.618-.835-.873 0-1.5.361-1.88 1.082v4.218c.386.739 1.019 1.108 1.898 1.108.68 0 1.21-.273 1.591-.818.387-.55.58-1.382.58-2.496Zm8.086.264h-4.614v-1.723h4.614v1.723Zm1.362-.264c0-.931.185-1.769.554-2.513.369-.75.888-1.325 1.556-1.723.668-.404 1.435-.607 2.302-.607 1.284 0 2.324.414 3.12 1.24.803.826 1.237 1.922 1.301 3.287l.009.501c0 .937-.182 1.775-.545 2.513a3.95 3.95 0 0 1-1.547 1.714c-.668.405-1.441.607-2.32.607-1.342 0-2.417-.446-3.226-1.336-.802-.897-1.204-2.089-1.204-3.577v-.106Zm2.136.185c0 .978.202 1.746.606 2.303.405.55.967.826 1.688.826s1.28-.282 1.679-.844c.404-.563.606-1.386.606-2.47 0-.961-.208-1.722-.624-2.285-.41-.562-.97-.844-1.679-.844-.697 0-1.251.279-1.661.835-.41.551-.615 1.377-.615 2.479Zm9.264 4.658v-7.928h-1.451v-1.582h1.451v-.87c0-1.055.293-1.869.879-2.443.585-.574 1.406-.862 2.46-.862.375 0 .774.053 1.196.159l-.053 1.67a4.19 4.19 0 0 0-.817-.071c-1.02 0-1.53.525-1.53 1.573v.844h1.934v1.582h-1.934V299h-2.135Zm6.38 0v-7.928h-1.45v-1.582h1.45v-.87c0-1.055.293-1.869.879-2.443.586-.574 1.407-.862 2.461-.862.375 0 .774.053 1.196.159l-.053 1.67a4.19 4.19 0 0 0-.817-.071c-1.02 0-1.53.525-1.53 1.573v.844h1.934v1.582h-1.934V299h-2.136Z",
          fill:"#161E35"
        }),(0,r.jsx)("path",{
          d:"M400.297 265.07h-5.137l-.976 2.93h-3.116l5.293-14.219h2.715L404.398 268h-3.115l-.986-2.93Zm-4.346-2.373h3.555l-1.787-5.322-1.768 5.322Zm9.151-.058c0-1.647.367-2.959 1.103-3.936.742-.976 1.755-1.465 3.037-1.465 1.029 0 1.878.384 2.549 1.153V253h2.832v15h-2.549l-.136-1.123c-.704.879-1.609 1.318-2.715 1.318-1.244 0-2.243-.488-2.998-1.465-.749-.983-1.123-2.347-1.123-4.091Zm2.822.205c0 .989.172 1.748.517 2.275.345.527.847.791 1.504.791.873 0 1.488-.368 1.846-1.103v-4.17c-.352-.736-.96-1.104-1.826-1.104-1.361 0-2.041 1.104-2.041 3.311Zm8.447-.205c0-1.647.368-2.959 1.104-3.936.742-.976 1.754-1.465 3.037-1.465 1.028 0 1.878.384 2.549 1.153V253h2.832v15h-2.549l-.137-1.123c-.703.879-1.608 1.318-2.715 1.318-1.243 0-2.243-.488-2.998-1.465-.749-.983-1.123-2.347-1.123-4.091Zm2.822.205c0 .989.173 1.748.518 2.275.345.527.846.791 1.504.791.872 0 1.487-.368 1.846-1.103v-4.17c-.352-.736-.961-1.104-1.827-1.104-1.36 0-2.041 1.104-2.041 3.311Zm16.983.146V268h-2.93v-14.219h5.547c1.068 0 2.005.196 2.812.586.814.391 1.439.947 1.875 1.67.437.716.655 1.533.655 2.451 0 1.394-.479 2.494-1.436 3.301-.95.801-2.269 1.201-3.955 1.201h-2.568Zm0-2.373h2.617c.775 0 1.364-.182 1.768-.547.41-.364.615-.885.615-1.562 0-.697-.205-1.26-.615-1.69-.411-.429-.977-.651-1.7-.664h-2.685v4.463ZM451.977 268a3.127 3.127 0 0 1-.284-.947c-.683.761-1.572 1.142-2.666 1.142-1.035 0-1.894-.299-2.578-.898-.677-.599-1.015-1.354-1.015-2.266 0-1.12.413-1.979 1.24-2.578.833-.599 2.034-.902 3.603-.908h1.299v-.606c0-.488-.127-.878-.381-1.171-.247-.293-.641-.44-1.181-.44-.476 0-.85.114-1.123.342-.267.228-.401.54-.401.937h-2.822c0-.612.189-1.178.566-1.699.378-.521.912-.928 1.602-1.22.69-.3 1.465-.45 2.324-.45 1.302 0 2.334.329 3.096.987.768.651 1.152 1.569 1.152 2.754v4.58c.007 1.002.147 1.761.42 2.275V268h-2.851Zm-2.334-1.963c.416 0 .8-.091 1.152-.273.351-.189.612-.44.781-.752v-1.817h-1.055c-1.412 0-2.164.489-2.255 1.465l-.01.166c0 .352.124.641.371.869.247.228.586.342 1.016.342Zm10.722-2.031 1.953-6.572h3.028l-4.248 12.207-.235.556c-.631 1.38-1.673 2.071-3.125 2.071a4.43 4.43 0 0 1-1.25-.186v-2.139l.43.01c.534 0 .931-.081 1.191-.244.267-.163.476-.433.625-.811l.332-.869-3.701-10.595h3.037l1.963 6.572Zm8.74-6.572.088 1.181c.749-.918 1.761-1.377 3.037-1.377 1.361 0 2.295.537 2.803 1.612.742-1.075 1.8-1.612 3.174-1.612 1.146 0 1.999.336 2.559 1.006.56.664.839 1.667.839 3.008V268h-2.832v-6.738c0-.599-.117-1.035-.351-1.309-.234-.28-.648-.42-1.24-.42-.847 0-1.433.404-1.758 1.211l.01 7.256h-2.823v-6.729c0-.611-.12-1.054-.361-1.328-.241-.273-.651-.41-1.23-.41-.801 0-1.381.332-1.739.996V268h-2.822v-10.566h2.646Zm19.541 10.761c-1.549 0-2.812-.475-3.789-1.425-.97-.951-1.455-2.217-1.455-3.799v-.274c0-1.061.205-2.008.616-2.842.41-.839.989-1.484 1.738-1.933.755-.456 1.614-.684 2.578-.684 1.445 0 2.581.456 3.408 1.367.834.912 1.25 2.204 1.25 3.877v1.153h-6.728c.091.69.364 1.243.82 1.66.462.417 1.045.625 1.748.625 1.087 0 1.937-.394 2.549-1.182l1.387 1.553c-.424.599-.997 1.068-1.719 1.406-.723.332-1.524.498-2.403.498Zm-.322-8.672c-.56 0-1.015.189-1.367.567-.345.377-.566.918-.664 1.621h3.926v-.225c-.013-.625-.183-1.106-.508-1.445-.326-.345-.788-.518-1.387-.518Zm8.877-2.089.088 1.22c.755-.944 1.768-1.416 3.037-1.416 1.12 0 1.953.329 2.5.987.547.657.827 1.64.84 2.949V268h-2.822v-6.758c0-.599-.13-1.032-.391-1.299-.26-.273-.693-.41-1.299-.41-.794 0-1.39.339-1.787 1.016V268h-2.822v-10.566h2.656Zm11.992-2.598v2.598H511v2.07h-1.807v5.273c0 .391.075.671.225.84.15.169.436.254.859.254.313 0 .59-.023.83-.068v2.138a5.784 5.784 0 0 1-1.709.254c-1.979 0-2.988-.999-3.027-2.998v-5.693h-1.543v-2.07h1.543v-2.598h2.822Z",
          fill:"#5D97FF"
        })]
      }),(0,r.jsxs)("defs",{
        children:[(0,r.jsxs)("filter",{
          id:"funnels-locked-illustration_svg__b",
          x:9,
          y:159,
          width:406,
          height:296,
          filterUnits:"userSpaceOnUse",
          colorInterpolationFilters:"sRGB",
          children:[(0,r.jsx)("feFlood",{
            floodOpacity:0,
            result:"BackgroundImageFix"
          }),(0,r.jsx)("feColorMatrix",{
            in:"SourceAlpha",
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result:"hardAlpha"
          }),(0,r.jsx)("feOffset",{
            dx:2,
            dy:2
          }),(0,r.jsx)("feGaussianBlur",{
            stdDeviation:4
          }),(0,r.jsx)("feComposite",{
            in2:"hardAlpha",
            operator:"out"
          }),(0,r.jsx)("feColorMatrix",{
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          }),(0,r.jsx)("feBlend",{
            in2:"BackgroundImageFix",
            result:"effect1_dropShadow_2261_9634"
          }),(0,r.jsx)("feBlend",{
            in:"SourceGraphic",
            in2:"effect1_dropShadow_2261_9634",
            result:"shape"
          })]
        }),(0,r.jsxs)("filter",{
          id:"funnels-locked-illustration_svg__c",
          x:7,
          y:161,
          width:406,
          height:296,
          filterUnits:"userSpaceOnUse",
          colorInterpolationFilters:"sRGB",
          children:[(0,r.jsx)("feFlood",{
            floodOpacity:0,
            result:"BackgroundImageFix"
          }),(0,r.jsx)("feColorMatrix",{
            in:"SourceAlpha",
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result:"hardAlpha"
          }),(0,r.jsx)("feOffset",{
            dy:4
          }),(0,r.jsx)("feGaussianBlur",{
            stdDeviation:4
          }),(0,r.jsx)("feComposite",{
            in2:"hardAlpha",
            operator:"out"
          }),(0,r.jsx)("feColorMatrix",{
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          }),(0,r.jsx)("feBlend",{
            in2:"BackgroundImageFix",
            result:"effect1_dropShadow_2261_9634"
          }),(0,r.jsx)("feBlend",{
            in:"SourceGraphic",
            in2:"effect1_dropShadow_2261_9634",
            result:"shape"
          })]
        }),(0,r.jsxs)("filter",{
          id:"funnels-locked-illustration_svg__d",
          x:32,
          y:255,
          width:80,
          height:56,
          filterUnits:"userSpaceOnUse",
          colorInterpolationFilters:"sRGB",
          children:[(0,r.jsx)("feFlood",{
            floodOpacity:0,
            result:"BackgroundImageFix"
          }),(0,r.jsx)("feColorMatrix",{
            in:"SourceAlpha",
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result:"hardAlpha"
          }),(0,r.jsx)("feOffset",{
            dx:2,
            dy:2
          }),(0,r.jsx)("feGaussianBlur",{
            stdDeviation:4
          }),(0,r.jsx)("feComposite",{
            in2:"hardAlpha",
            operator:"out"
          }),(0,r.jsx)("feColorMatrix",{
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          }),(0,r.jsx)("feBlend",{
            in2:"BackgroundImageFix",
            result:"effect1_dropShadow_2261_9634"
          }),(0,r.jsx)("feBlend",{
            in:"SourceGraphic",
            in2:"effect1_dropShadow_2261_9634",
            result:"shape"
          })]
        }),(0,r.jsxs)("filter",{
          id:"funnels-locked-illustration_svg__e",
          x:124,
          y:279,
          width:80,
          height:56,
          filterUnits:"userSpaceOnUse",
          colorInterpolationFilters:"sRGB",
          children:[(0,r.jsx)("feFlood",{
            floodOpacity:0,
            result:"BackgroundImageFix"
          }),(0,r.jsx)("feColorMatrix",{
            in:"SourceAlpha",
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result:"hardAlpha"
          }),(0,r.jsx)("feOffset",{
            dx:2,
            dy:2
          }),(0,r.jsx)("feGaussianBlur",{
            stdDeviation:4
          }),(0,r.jsx)("feComposite",{
            in2:"hardAlpha",
            operator:"out"
          }),(0,r.jsx)("feColorMatrix",{
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          }),(0,r.jsx)("feBlend",{
            in2:"BackgroundImageFix",
            result:"effect1_dropShadow_2261_9634"
          }),(0,r.jsx)("feBlend",{
            in:"SourceGraphic",
            in2:"effect1_dropShadow_2261_9634",
            result:"shape"
          })]
        }),(0,r.jsxs)("filter",{
          id:"funnels-locked-illustration_svg__f",
          x:216,
          y:333,
          width:80,
          height:56,
          filterUnits:"userSpaceOnUse",
          colorInterpolationFilters:"sRGB",
          children:[(0,r.jsx)("feFlood",{
            floodOpacity:0,
            result:"BackgroundImageFix"
          }),(0,r.jsx)("feColorMatrix",{
            in:"SourceAlpha",
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result:"hardAlpha"
          }),(0,r.jsx)("feOffset",{
            dx:2,
            dy:2
          }),(0,r.jsx)("feGaussianBlur",{
            stdDeviation:4
          }),(0,r.jsx)("feComposite",{
            in2:"hardAlpha",
            operator:"out"
          }),(0,r.jsx)("feColorMatrix",{
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          }),(0,r.jsx)("feBlend",{
            in2:"BackgroundImageFix",
            result:"effect1_dropShadow_2261_9634"
          }),(0,r.jsx)("feBlend",{
            in:"SourceGraphic",
            in2:"effect1_dropShadow_2261_9634",
            result:"shape"
          })]
        }),(0,r.jsxs)("filter",{
          id:"funnels-locked-illustration_svg__g",
          x:308,
          y:347,
          width:80,
          height:56,
          filterUnits:"userSpaceOnUse",
          colorInterpolationFilters:"sRGB",
          children:[(0,r.jsx)("feFlood",{
            floodOpacity:0,
            result:"BackgroundImageFix"
          }),(0,r.jsx)("feColorMatrix",{
            in:"SourceAlpha",
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result:"hardAlpha"
          }),(0,r.jsx)("feOffset",{
            dx:2,
            dy:2
          }),(0,r.jsx)("feGaussianBlur",{
            stdDeviation:4
          }),(0,r.jsx)("feComposite",{
            in2:"hardAlpha",
            operator:"out"
          }),(0,r.jsx)("feColorMatrix",{
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          }),(0,r.jsx)("feBlend",{
            in2:"BackgroundImageFix",
            result:"effect1_dropShadow_2261_9634"
          }),(0,r.jsx)("feBlend",{
            in:"SourceGraphic",
            in2:"effect1_dropShadow_2261_9634",
            result:"shape"
          })]
        }),(0,r.jsxs)("filter",{
          id:"funnels-locked-illustration_svg__i",
          x:373,
          y:231,
          width:168,
          height:96,
          filterUnits:"userSpaceOnUse",
          colorInterpolationFilters:"sRGB",
          children:[(0,r.jsx)("feFlood",{
            floodOpacity:0,
            result:"BackgroundImageFix"
          }),(0,r.jsx)("feColorMatrix",{
            in:"SourceAlpha",
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result:"hardAlpha"
          }),(0,r.jsx)("feOffset",{
            dx:2,
            dy:2
          }),(0,r.jsx)("feGaussianBlur",{
            stdDeviation:4
          }),(0,r.jsx)("feComposite",{
            in2:"hardAlpha",
            operator:"out"
          }),(0,r.jsx)("feColorMatrix",{
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          }),(0,r.jsx)("feBlend",{
            in2:"BackgroundImageFix",
            result:"effect1_dropShadow_2261_9634"
          }),(0,r.jsx)("feBlend",{
            in:"SourceGraphic",
            in2:"effect1_dropShadow_2261_9634",
            result:"shape"
          })]
        }),(0,r.jsxs)("filter",{
          id:"funnels-locked-illustration_svg__j",
          x:371,
          y:233,
          width:168,
          height:96,
          filterUnits:"userSpaceOnUse",
          colorInterpolationFilters:"sRGB",
          children:[(0,r.jsx)("feFlood",{
            floodOpacity:0,
            result:"BackgroundImageFix"
          }),(0,r.jsx)("feColorMatrix",{
            in:"SourceAlpha",
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result:"hardAlpha"
          }),(0,r.jsx)("feOffset",{
            dy:4
          }),(0,r.jsx)("feGaussianBlur",{
            stdDeviation:4
          }),(0,r.jsx)("feComposite",{
            in2:"hardAlpha",
            operator:"out"
          }),(0,r.jsx)("feColorMatrix",{
            values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          }),(0,r.jsx)("feBlend",{
            in2:"BackgroundImageFix",
            result:"effect1_dropShadow_2261_9634"
          }),(0,r.jsx)("feBlend",{
            in:"SourceGraphic",
            in2:"effect1_dropShadow_2261_9634",
            result:"shape"
          })]
        }),(0,r.jsx)("pattern",{
          id:"funnels-locked-illustration_svg__a",
          patternContentUnits:"objectBoundingBox",
          width:1,
          height:1,
          children:(0,r.jsx)("use",{
            xlinkHref:"#funnels-locked-illustration_svg__k",
            transform:"scale(.00243 .00124)"
          })
        }),(0,r.jsx)("pattern",{
          id:"funnels-locked-illustration_svg__h",
          patternContentUnits:"objectBoundingBox",
          width:1,
          height:1,
          children:(0,r.jsx)("use",{
            xlinkHref:"#funnels-locked-illustration_svg__l",
            transform:"scale(.00207 .01786)"
          })
        }),(0,r.jsx)("image",{
          id:"funnels-locked-illustration_svg__k",
          width:412,
          height:804,
          xlinkHref:"data:image/png;base64,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OAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4AwASBAwAwQeAAAEwQOAAAEwQOAMAEgQMAMEHgAABMEDgAABMEDgDABIEDADBB4AAATBA4AAATBA4A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"
        }),(0,r.jsx)("image",{
          id:"funnels-locked-illustration_svg__l",
          width:484,
          height:56,
          xlinkHref:"data:image/png;base64,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"
        })]
      })]
    }),
    tb=(0,l.memo)(()=>{
      let e=(0,g.I0)(),
      {
        setShowPricingModal:n
      }=(0,c.I)(),
      {
        urlReducer:{
          url:t
        }
      }=(0,g.v9)(e=>e),
      {
        selfServeFlag:o
      }=(0,c.I)(),
      i=(0,l.useCallback)(()=>{
        n(!0),
        e((0,S.CW)(null,{
          eventName:"wa_see_pricing_clicked",
          track_type:"event",
          eventProperty:{
            source:"Funnels"
          }
        }))
      },[e,n]),
      a=(0,l.useCallback)(()=>{
        n(!0),
        e((0,S.CW)(null,{
          eventName:"wa_request_pricing_clicked",
          track_type:"event",
          eventProperty:{
            source:"Funnels"
          }
        }))
      },[e,n]);
      return(0,l.useEffect)(()=>{
        e((0,S.CW)(null,{
          eventName:"wa_blocked_feature_pop_up_displayed",
          track_type:"event",
          eventProperty:{
            source:"Funnels",
            self_Checkout:o
          }
        }))
      },[t,e,o]),
      (0,r.jsx)(tw.ZP,{
        image:tj,
        title:"Funnels",
        subTitle:"Boost your conversion rate",
        list:(0,r.jsxs)(r.Fragment,{
          children:[(0,r.jsx)("li",{
            children:"Track conversions and drop-offs in one view."
          }),(0,r.jsxs)("li",{
            children:["Replay the drop-offs and find out who leaves, why, ",(0,r.jsx)("br",{}),"and what they do instead."]
          }),(0,r.jsx)("li",{
            children:"Spot user segments that are more likely to convert."
          })]
        }),
        selfServeFlag:o,
        handleClickSeePricing:i,
        handleClickRequestPricing:a
      })
    });
    let ty=o.default.div.withConfig({
      componentId:"sc-bbd4df93-0"
    })(["display:flex;flex-direction:column;flex-grow:1;background:",";min-height:100vh;max-height:100vh;overflow:auto;"],i.r.colors.primarySnow.toString()),
    tZ=o.default.div.withConfig({
      componentId:"sc-bbd4df93-1"
    })(["display:flex;flex-direction:column;flex-grow:1;min-height:100vh;overflow:hidden;"]),
    tB=o.default.div.withConfig({
      componentId:"sc-bbd4df93-2"
    })(["display:flex;flex-direction:column;flex-grow:1;padding:",";min-height:calc( 100% - 60px );z-index:1;"],i.r.spacing(2)),
    tC=o.default.div.withConfig({
      componentId:"sc-bbd4df93-3"
    })(["display:flex;flex-direction:column;flex-grow:1;background:#fff;border-radius:4px;padding:",";max-width:100%;max-height:100%;"],i.r.spacing(1,0));
    var tD=l.memo(()=>{
      let e=l.useRef(),
      [n,t]=l.useState(!1),
      o=l.useMemo(()=>Date.now().toString(),[n]),
      i=l.useCallback(()=>{
        t(e=>!e)
      },[]),
      {
        showFunnelsPageLockScreen:s
      }=(0,c.I)();
      return s?(0,r.jsx)(tb,{}):(0,r.jsx)(Q,{
        version:"Q2-2023",
        children:(0,r.jsxs)(l.Suspense,{
          fallback:(0,r.jsx)(a.Z,{}),
          children:[(0,r.jsx)(tx,{}),(0,r.jsx)(ey,{
            children:(0,r.jsx)(z,{
              children:(0,r.jsx)(I,{
                children:(0,r.jsx)(tZ,{
                  ref:e,
                  children:(0,r.jsxs)(ty,{
                    ref:e,
                    children:[(0,r.jsx)(ep,{}),(0,r.jsx)(tB,{
                      children:(0,r.jsx)(tC,{
                        children:(0,r.jsx)(nU,{
                          onRetry:i,
                          children:(0,r.jsx)(l.Suspense,{
                            fallback:(0,r.jsx)(a.Z,{}),
                            children:(0,r.jsx)(nX,{
                              rootRef:e
                            })
                          })
                        },o)
                      })
                    })]
                  })
                })
              })
            })
          })]
        })
      })
    })
  },
  74444:function(e,n,t){
    t.d(n,{
      H:function(){
        return a
      }
    });
    var r=t(39284),
    l=t(11163),
    o=t.n(l),
    i=t(67294);
    let a=()=>{
      let e=(0,i.useRef)(!1),
      [n,t]=(0,i.useState)(!1),
      [a,c]=r.default.useModal(),
      s=(0,i.useRef)(!1);
      return(0,i.useEffect)(()=>{
        var i;
        let c=()=>new Promise(e=>{
          a.confirm({
            width:570,
            title:"You have unsaved changes",
            content:"Are you sure you want to leave this page? Unsaved changes will be lost.",
            okText:"Leave",
            cancelText:"Cancel",
            wrapClassName:"unsaved-changes-modal",
            centered:!0,
            icon:null,
            maskStyle:{
              backgroundColor:"rgba(22, 30, 53, 0.3)"
            },
            onOk:()=>{
              e(!0),
              r.default.destroyAll()
            },
            onCancel:()=>{
              e(!1),
              r.default.destroyAll()
            }
          })
        });
        if(!(null===(i=o().router)||void 0===i?void 0:i.change))return;
        let d=o().router.change,
        u=window.onbeforeunload;
        return n?window.onbeforeunload=()=>"":window.onbeforeunload=u,
        n&&(o().router.change=async function(){
          for(var n,r,i,a=arguments.length,d=Array(a),u=0;u<a;u++)d[u]=arguments[u];
          let[h,,f]=d,
          A=(null===(n=o().router)||void 0===n?void 0:n.state.asPath.split("?")[0])!==f.split("?")[0];
          (A&&!s.current&&(s.current=!0,e.current=await c(),s.current=!1),e.current)?(l.Router.prototype.change.apply(o().router,d),t(!1)):"replaceState"===h&&A&&(await (null===(i=o().router)||void 0===i?void 0:i.push(null===(r=o().router)||void 0===r?void 0:r.state.asPath)),window.history.go(1))
        }),
        ()=>{
          o().router.change=d,
          window.onbeforeunload=u
        }
      },[n,a,t]),
      {
        shouldPreventLeaving:n,
        contextHolder:c,
        handlePreventLeaving:t
      }
    }
  },
  62499:function(e,n,t){
    var r=t(85893);
    t(67294),
    n.Z=e=>(0,r.jsx)("svg",{
      width:15,
      height:15,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,r.jsx)("path",{
        d:"m1.324 14.451 3.38-.678a.269.269 0 0 0 .205-.194.28.28 0 0 0-.065-.269L1.82 10.296a.258.258 0 0 0-.452.13l-.689 3.38a.55.55 0 0 0 .635.635l.011.01ZM13.844 1.275a2.82 2.82 0 0 0-3.983 0L2.669 8.467a.258.258 0 0 0 0 .377l3.607 3.617a.29.29 0 0 0 .388 0l7.191-7.191a2.819 2.819 0 0 0-.01-3.995Z",
        fill:"currentColor"
      })
    })
  }
}]);