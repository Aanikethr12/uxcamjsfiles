"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4260],{
  27755:function(e,t,n){
    var r=n(85893);
    n(67294);
    var o=n(27205),
    i=n(73260),
    a=n(12810);
    t.Z=e=>{
      let{
        color:t
      }=e;
      return(0,r.jsx)(o.Z,{
        children:(0,r.jsx)(i.Z,{
          span:12,
          offset:6,
          children:(0,r.jsx)(a.Z,{})
        })
      })
    }
  },
  84260:function(e,t,n){
    n.r(t),
    n.d(t,{
      default:function(){
        return eP
      }
    });
    var r=n(85893),
    o=n(67294),
    i=n(14416),
    a=n(36005),
    l=n(19521),
    s=n(67393),
    d=n(47639),
    p=n(71768),
    c=n(49588),
    u=n(55137),
    v=n(41371),
    g=n(55931),
    h=n(35161),
    m=n.n(h),
    f=n(43063),
    x=n.n(f),
    b=n(7436),
    y=n.n(b),
    w=n(66073),
    _=n.n(w),
    j=n(66678),
    C=n.n(j),
    k=n(49470),
    S=n(12810),
    E=n(35946),
    F=n(86086),
    I=n(19228),
    D=n(8047),
    z=n(54973),
    Z=n(43522),
    N=n(18777),
    L=n(30663),
    V=n(99252),
    P=n(50197),
    A=n(92046),
    M=n(68457),
    R=n(12016),
    B=n(60063);
    let{
      SubMenu:H,
      Item:O
    }=M.default,
    T={
      count:"Count",
      sum:"Sum",
      max:"Maximum",
      min:"Minimum",
      avg:"Average"
    },
    U={
      events:"Count of events",
      "users with events":"Count of user with events",
      "sessions with events":"Count of sessions with events"
    };
    var q=e=>{
      let[t,n]=o.useState(!1),
      {
        selectedOption:i
      }=e,
      a=(null==i?void 0:i.operator)?"".concat(T[i.operator]," of ").concat(i.json_field&&(i.json_field.length?"event property":i.display)):null==i?void 0:i.display;
      return a=Object.keys(U).includes(a)?U[a]:a,
      (null==i?void 0:i.json_field)&&i.json_field.length&&(a=(0,r.jsxs)(r.Fragment,{
        children:[a," ",(0,r.jsx)("em",{
          children:i.display
        })]
      })),
      (0,r.jsx)(R.Z,{
        trigger:["click"],
        overlay:(0,r.jsx)(G,{
          setDropdownVisible:n,
          isDropdownVisible:t,
          ...e
        }),
        visible:t,
        onVisibleChange:e=>n(e),
        children:(0,r.jsxs)("a",{
          href:"#!",
          className:"ant-dropdown-link",
          onClick:e=>{
            e.preventDefault(),
            n(!0)
          },
          children:[a," ",(0,r.jsx)("span",{
            children:(0,r.jsx)(B.Z,{
              className:"sm-caret-down"
            })
          })]
        })
      })
    };
    let G=e=>{
      let{
        options_operator:t,
        options_aggregation:n,
        handleEvent:i,
        selectedOption:a,
        setDropdownVisible:l,
        isDropdownVisible:s
      }=e,
      [d,p]=o.useState(null),
      [c,u]=o.useState(null),
      [v,g]=o.useState(null);
      t&&delete t.json.std;
      let{
        operator:h
      }=a;
      return""===h&&(h="count"),
      o.useEffect(()=>(s||u(!1),()=>{
        u(!1),
        p(null),
        g(null)
      }),[s]),
      t?(0,r.jsx)(M.default,{
        className:"dropdown-multilevel",
        defaultOpenKeys:["count"],
        selectedKeys:"json"===h?[]:[a.attribute],
        onClick:async e=>{
          l(!1),
          g(null),
          await i(e)
        },
        mode:"vertical",
        children:s&&m()(t,(e,t)=>{
          let o=[];
          return"json"===t&&(m()(e,(e,t)=>{
            o.push({
              display:e.display,
              attribute:t
            })
          }),o=[o.pop(),...o]),
          "json"===t&&m()(o,(e,t)=>{
            t=e.attribute;
            let o="Sample Count"===e.display?"Count of ...":"".concat(e.display," of ..."),
            f=h===t?a.json_field?"agg-sub-selected-option":"agg-selected-option":"";
            return(0,r.jsxs)(H,{
              value:t,
              title:o,
              className:"sub-multilevel ".concat(f),
              popupClassName:"sub-multilevel ".concat(f),
              onTitleMouseEnter:e=>{
                g(e.key),
                e.key===t?u(!0):u(!1)
              },
              children:[v===t&&c&&(0,r.jsx)(O,{
                disabled:!0,
                className:"menu-title",
                children:"count"===t?"Choose what to count":"Choose ".concat(d||"event property"," to ").concat(e.display.toLowerCase())
              }),v===t&&"count"===t&&m()(n,e=>(0,r.jsx)(O,{
                children:e.display
              },e.attribute)),v===t&&"count"===t&&(0,r.jsxs)(H,{
                title:"events with property",
                className:"aggregation-property-sub-menu",
                children:[(0,r.jsx)(O,{
                  disabled:!0,
                  className:"menu-title",
                  children:"Choose ".concat(d||"event property"," to count")
                }),(0,r.jsx)(K,{
                  operator:t,
                  handleEvent:i,
                  selectedOption:h===t&&a,
                  aggregationEventId:"event_property",
                  handlePropertyValue:p,
                  setDropdownVisible:l,
                  isDropdownVisible:s,
                  setHoveredValue:g
                })]
              },"event_property"),v===t&&"count"!==t&&(0,r.jsx)(K,{
                operator:t,
                handleEvent:i,
                selectedOption:h===t&&a,
                _id:t,
                handlePropertyValue:p,
                setDropdownVisible:l,
                isDropdownVisible:v===t&&c,
                handleHoverValue:u,
                setHoveredValue:g
              })]
            },t)
          })
        })
      }):null
    },
    K=e=>{
      let{
        handleEvent:t,
        operator:n,
        selectedOption:o,
        handlePropertyValue:i,
        setDropdownVisible:a,
        isDropdownVisible:l,
        handleHoverValue:s,
        setHoveredValue:d,
        aggregationEventId:p
      }=e;
      return(0,r.jsx)(D.Z,{
        aggregationEventId:p,
        handleChangeEvents:t,
        id:"events_agg_dropdown",
        isImprovedAggregation:!0,
        eventProperty:!0,
        placeholderText:"Add Aggregation",
        userPropertyFromStats:!1,
        _operator:n,
        eventDropVal:o,
        handleHoverPropertyValue:i,
        setDropdownVisible:a,
        isStatisticsDropdownVisible:l,
        handleHoverValue:s,
        setHoveredValue:d
      },n)
    },
    Q=[{
      attribute:"event_count",
      display:"events",
      type:"count",
      table:"event"
    },{
      attribute:"event_unique_user_count",
      display:"users with events",
      type:"count",
      table:"event"
    },{
      attribute:"event_unique_session_count",
      display:"sessions with events",
      type:"count",
      table:"event"
    }],
    W=(0,r.jsxs)(r.Fragment,{
      children:[(0,r.jsx)(N.Z,{
        preText:"Computing chart data"
      }),(0,r.jsx)(S.Z,{})]
    }),
    $={
      type:{
        event_count:"count",
        event_custom_property:"json",
        user_custom_property:"json"
      }
    },
    J=(0,o.createRef)(),
    X=(0,o.memo)(e=>{
      var t,
      n,
      a;
      let{
        callGraphApi:l
      }=e,
      p=(0,i.I0)(),
      {
        statisticsReducer:{
          dropdownData:c,
          eventDropValues:u,
          grpByVal:v,
          loader:h,
          graphSelectedVal:f,
          graphData:b
        },
        commonReducer:{
          bottomBarClassFlag:w
        },
        appFilter:{
          fetchProperty:j={},
          dateSegment:S
        }
      }=(0,i.v9)(e=>e),
      [N,M]=o.useState(!1),
      R=(0,g.e)("web"),
      B=(null==j?void 0:null===(t=j.custom_user_property)||void 0===t?void 0:t.data)||[],
      H=(null==j?void 0:null===(n=j.custom_event_property)||void 0===n?void 0:n.data)||[],
      O=(null==j?void 0:null===(a=j.user_first_utm)||void 0===a?void 0:a.data)||[],
      T=null==c?void 0:c.agg_operators,
      U=c&&C()(c.groupby_dropdown);
      U={
        ...U,
        "Custom event properties":H||[],
        "Custom user properties":B||[]
      };
      let G=(0,P.d)(O);
      c&&c.groupby_dropdown&&R&&(c.groupby_dropdown["Initial landing UTM"]=G);
      let K=f&&f.key,
      X=(e,t)=>x()(e,(e,n)=>n===t),
      Y=async e=>{
        let t=X(v,e),
        n={
          dropName:"grpByVal",
          data:[...t]
        };
        await p((0,s.SH)(n)),
        l(null,null,t,null)
      },
      ee=async e=>{
        let t={
          dropName:"graphSelectedVal",
          data:F.K[e]
        };
        await p((0,s.SH)(t)),
        l(null,null,v,!0),
        p((0,d.hI)({
          action:"Graph type changed",
          info:{
            page:"Event Analytics",
            "graph type":e
          }
        })),
        p((0,L.CW)(null,{
          eventName:"wa_change_chart_type",
          track_type:"event",
          eventProperty:{
            chart_type:e
          }
        }))
      },
      et=async e=>{
        u.operator=e,
        await p((0,s.SH)({
          dropName:"eventDropValues",
          data:u
        })),
        e&&await l(null,null,v,null)
      },
      en=async(e,t,n,r,o,i)=>{
        let a;
        u.operator=e.keyPath[1],
        await p((0,s.SH)({
          dropName:"eventDropValues",
          data:u
        }));
        let c=r&&e||("object"==typeof e?e.key:e),
        g=Q.map(e=>e.attribute),
        h=y()(Q,{
          attribute:c
        }),
        m=h>=0&&Q[h]&&Q[h].display,
        f=g.includes(c);
        f||(a=r?o?"user_custom_property":"event_custom_property":e.item.props.property);
        let x={
          dropName:"eventDropValues",
          data:{
            attribute:f?c:a,
            type:f?$.type[c]:$.type[a],
            table:"user_custom_property"===a?"appuser":"event",
            operator:i||("event_custom_property"===a||"user_custom_property"===a?"count":""),
            json_field:f?void 0:[c],
            display:a?c:m
          }
        };
        M(g.includes(c)),
        await p((0,s.SH)(x)),
        l(null,null,v,null),
        p((0,d.hI)({
          action:"Aggregation function changed",
          info:{
            "function name":f?c:a
          }
        }))
      },
      er=async(e,t,n,r,o)=>{
        var i,
        a,
        c,
        u,
        g;
        let h,
        m,
        x,
        b,
        w;
        let j=r&&e||e.key,
        C={},
        k=[...v],
        E="";
        if(await _()(U,e=>{
          e.map(e=>{
            C.values={
              ...C.values,
              [e.attribute]:e.table
            }
          })
        }),Object.keys(C.values).includes(j)||(E="".concat(o?"User":"Event"," property")),"Initial landing UTM"===(0,A.Z3)(j,U))h={
          attribute:"user_first_utm",
          table:"appuser",
          type:"json",
          display:j,
          json_field:[j]
        };
        else if(E)h={
          attribute:"eventpropertyvalueofgrp"===(b=r?o?"user_custom_property":"event_custom_property":e.item.props.property)?"event_custom_property":"userpropertyvalueofgrp"===b?"user_custom_property":"utmpropertyvalueofgrp"===b?"utm":b,
          table:"user_custom_property"===b||"userpropertyvalueofgrp"===b?"appuser":"utmpropertyvalueofgrp"===b?"session":"event",
          type:"json",
          json_field:E?[j]:void 0
        };
        else{
          m=e.item.props.categorytitle;
          let t=y()(U[m],{
            display:e.item.props.display
          });
          h=w=U[m][t],
          ["event_period_day","event_date_week","event_date_month"].includes(j)&&(h.time_zone_offset=(0,V.pQ)(S.tz,new Date))
        }(null==e?void 0:null===(a=e.item)||void 0===a?void 0:null===(i=a.props)||void 0===i?void 0:i.max_group_number)&&(h.max_group_number=e.item.props.max_group_number),
        (null==e?void 0:null===(g=e.item)||void 0===g?void 0:null===(u=g.props)||void 0===u?void 0:null===(c=u.labels)||void 0===c?void 0:c.length)?h.labels=e.item.props.labels:h.labels=void 0,
        "grp-array"===t&&n>=0&&n<2&&(k[n]=h,x=[...k]),
        "grp-main"===t&&k.length<2&&(x=[...k,h]);
        let F={
          dropName:"grpByVal",
          data:x
        };
        await p((0,s.SH)(F)),
        w&&"event_period_day"===w.attribute&&"pie"===f.type&&await p((0,s.SH)({
          dropName:"graphSelectedVal",
          data:{}
        })),
        l(null,null,x,null),
        p((0,d.hI)({
          action:"Changed event analytics grouping ".concat(n+1),
          info:{
            "Grouping type":j,
            page:"event analytics"
          }
        }))
      };
      return o.useEffect(()=>{
        p((0,d.hI)({
          action:"Entered event analytics"
        }))
      },[]),
      (0,r.jsx)("div",{
        className:"event-big-box-analytics",
        children:(0,r.jsx)("div",{
          className:"stat-full-box",
          children:(0,r.jsxs)("div",{
            className:"stat-graph-box",
            children:[(0,r.jsxs)("div",{
              className:"stat-filter-bar",
              children:[(0,r.jsxs)("div",{
                className:"filter-left-box",
                children:[(0,r.jsx)("div",{
                  className:"dropdown-wrapper",
                  children:(0,r.jsxs)("div",{
                    className:"big-combo-box",
                    children:[(0,r.jsx)(I.Z,{
                      isEventProperty:N,
                      dataIntercomTarget:"Count",
                      children:(0,r.jsx)(q,{
                        handleAggOperators:et,
                        selectedOption:u,
                        options_operator:T,
                        options_aggregation:Q,
                        handleEvent:en
                      },"agg-dropdown-improved")
                    }),(null==v?void 0:v.length)&&m()(v,(e,t)=>(0,r.jsx)(I.Z,{
                      label:0===t?"grouped by":"and",
                      _idByArr:"grp-array",
                      filterArr:Y,
                      _grpByArr:v,
                      _index:t,
                      isRevamped:!0,
                      dataIntercomTarget:0===t?"grouped by":"and",
                      children:(0,r.jsx)(D.Z,{
                        handleChangeEvents:er,
                        handleValuesByName:s.SH,
                        id:"groupby_dropdown",
                        options:U,
                        eventDropVal:e,
                        _idByArr:"grp-array",
                        group_list:v,
                        indexByGrpby:t,
                        isRevamped:!0,
                        isEventAnalytics:!0,
                        eventProperty:!0
                      },e.attribute.includes("property")?e.json_field[0]:e.attribute)
                    },e.attribute.includes("property")?e.json_field[0]:e.attribute))]
                  })
                }),(null==v?void 0:v.length)<2?(0,r.jsx)(I.Z,{
                  className:"add-btn",
                  children:(0,r.jsx)(D.Z,{
                    handleChangeEvents:er,
                    handleValuesByName:s.SH,
                    id:"groupby_dropdown",
                    options:U,
                    _idByArr:"grp-main",
                    placeholderText:"+ add grouping",
                    indexByGrpby:1,
                    group_list:v,
                    isRevamped:!0,
                    isEventAnalytics:!0,
                    eventProperty:!0
                  },v[0].attribute.includes("property")?v[0].json_field[0]:v[0].attribute)
                }):null]
              }),(0,r.jsxs)("div",{
                className:"filter-right-box",
                children:[(0,r.jsx)(I.Z,{
                  children:(0,r.jsx)(Z.Z,{
                    chartRef:J,
                    graphData:b
                  })
                }),(0,r.jsx)(I.Z,{
                  children:(0,r.jsx)(E.Z,{
                    handleChartChange:ee,
                    graphTypeVal:K,
                    graphTypeObj:F.K,
                    graphData:b,
                    group_list:v
                  })
                })]
              })]
            }),(0,r.jsx)(k.Z,{
              show:h||!1,
              message:W,
              backgroundStyle:{
                backgroundColor:"rgba(255,255,255,0.6)"
              },
              style:{
                height:"100%"
              },
              children:(0,r.jsx)(z.Z,{
                graphData:b,
                eventDropVal:u,
                height:"100%",
                chartRef:J
              })
            })]
          })
        })
      })
    });
    var Y=n(81803),
    ee=n(5152),
    et=n.n(ee),
    en=n(79999),
    er=n(42405),
    eo=n(16783),
    ei=n(67401),
    ea=n(75191),
    el=n(42554),
    es=n(11163),
    ed=n.n(es),
    ep=n(74936),
    ec=n(48203),
    eu=n(27755),
    ev=n(73495),
    eg=n(8357),
    eh=n(2880),
    em=n(22453),
    ef=n(11444);
    let ex=l.default.div.withConfig({
      componentId:"sc-7c57f3a0-0"
    })(["display:flex;justify-content:space-between;margin:5px 16px 10px;z-index:1;position:relative;.dropdown-btn{padding:0;display:flex;justify-content:center;align-content:center;height:fit-content;padding:6px 10px;height:32px;border-radius:4px;border-color:#828282;margin-left:20px;background-color:#ffffff;svg{path,rect{fill:#828282;stroke:#828282;}}&:hover{background:transparent;svg{path,rect{fill:#5D97FF;stroke:#5D97FF;}}}}.btn-quick-filter{button{height:32px;border-radius:4px;border-color:#5D97FF;color:#5D97FF;background-color:#ffffff;letter-spacing:0.4px;&:hover{background:transparent;color:#5D97FF;svg{path{fill:#5D97FF;}}}}}"]),
    eb=l.default.div.withConfig({
      componentId:"sc-7c57f3a0-1"
    })(["font-size:",";display:flex;align-items:center;"],e=>{
      let{
        smaller:t
      }=e;
      return t?"0.875rem":"1.125rem"
    }),
    ey=l.default.button.withConfig({
      componentId:"sc-7c57f3a0-2"
    })(["font-weight:",";font-size:",";line-height:",";cursor:",";background-color:transparent;border:",";box-sizing:border-box;border-radius:4px;height:32px;&:hover{border-color:",";color:",";}svg{margin-right:3px;margin-left:2px;}"],e=>(null==e?void 0:e.expanded)?"500":"400",e=>(null==e?void 0:e.expanded)?"18px":"14px",e=>(null==e?void 0:e.expanded)?"21px":"16.41px",e=>(null==e?void 0:e.expanded)?"auto":"pointer",e=>(null==e?void 0:e.expanded)?"none":"1.16667px solid rgba(37, 56, 88, 0.6)",e=>(null==e?void 0:e.expanded)?"":"#5D97FF",e=>(null==e?void 0:e.expanded)?"":"#5D97FF"),
    ew=l.default.div.withConfig({
      componentId:"sc-7c57f3a0-3"
    })(["display:flex;align-items:center;.ant-dropdown-trigger{background:#ffffff;&:hover{background:transparent;border-color:#C0CAD9 !important;svg{path{fill:#5D97FF;}}}}"]),
    e_=(0,l.default)(ep.Z).withConfig({
      componentId:"sc-7c57f3a0-4"
    })(["background:#ffffff;border:0px;padding:0px;margin-left:15px;&:hover{background:transparent;color:#5D97FF;svg{path{fill:#5D97FF;}}}"]),
    ej=et()(Promise.resolve().then(n.bind(n,85e3)),{
      loadableGenerated:{
        webpack:()=>[85e3]
      }
    });
    var eC=(0,o.memo)(e=>{
      var t;
      let{
        expanded:n,
        session:a,
        containerRef:l,
        eventsList:s
      }=e,
      [d,p]=(0,o.useState)(!1),
      [c,u]=(0,o.useState)(null),
      [v,g]=(0,o.useState)(!1),
      {
        urlReducer:h,
        currentAppReducer:m,
        appFilter:f
      }=(0,i.v9)(e=>e),
      {
        _id:x
      }=m,
      {
        eventpage:b,
        sessionid:y,
        autoplay:w,
        parentType:_
      }=h,
      {
        noCodeEventsFeatureFlag:j
      }=(0,ei.Z)(),
      C=(0,o.useMemo)(()=>"nocodeEventsList"!==_,[_]),
      S=null==f?void 0:null===(t=f.event)||void 0===t?void 0:t.segment,
      E=(0,o.useMemo)(()=>{
        var e;
        return null==s?void 0:null===(e=s.header)||void 0===e?void 0:e.filter(e=>"country"!==e.attribute&&"trackedon"!==e.attribute&&"video"!==e.attribute)
      },[null==s?void 0:s.header]),
      F=()=>{
        let e="eventsList"===_?"events":"smart-events",
        t="nocodeEventsList"===_?"nocodeEventsList":"eventsList",
        n=(0,ev.$)("/app/".concat(x,"/").concat(e,"/list/").concat(b,"?"),S),
        r="appId=".concat(x,"&parentType=").concat(t,"&eventpage=").concat(b,"&starttime=0").concat("&autoplay=".concat(w?"1":" 0"));
        ed().push("/integration?".concat(r),n)
      },
      I=(0,o.useMemo)(()=>"".concat(j?"nocodeEventsList"===_?"Smart":"Coded":"Custom"," events"),[_,j]);
      return(0,o.useEffect)(()=>{
        a&&a!==c&&u(a)
      },[a]),
      (0,r.jsxs)(ex,{
        children:[(0,r.jsx)(eb,{
          smaller:!!y,
          children:(0,r.jsx)(ey,{
            expanded:n,
            type:"button",
            onMouseDown:F,
            children:n?I:(0,r.jsxs)(r.Fragment,{
              children:[(0,r.jsx)(eg.pI,{})," ",I," list "]
            })
          })
        }),(0,r.jsx)(ew,{
          children:n?(0,r.jsxs)(r.Fragment,{
            children:[(0,r.jsx)(R.Z,{
              overlayClassName:"column-edit-dropdown",
              className:"dropdown-btn",
              trigger:["click"],
              onVisibleChange:e=>p(e),
              visible:d,
              overlay:(0,r.jsx)(k.Z,{
                show:v,
                message:(0,r.jsx)(eu.Z,{}),
                backgroundStyle:{
                  backgroundColor:"rgba(0, 0, 0, 0.0)"
                },
                children:(0,r.jsx)(ej,{
                  type:"nocodeEventsList"===_?"nocodeEvent":"event",
                  appid:x,
                  setLoading:e=>g(e),
                  dropdownVisible:d,
                  setDropdownVisibility:p,
                  headers:E,
                  showAddCustomUserButton:!0,
                  showAddCustomEventButton:C
                })
              }),
              children:(0,r.jsx)(ep.Z,{
                children:(0,r.jsx)(eg.cI,{})
              })
            }),(0,r.jsx)(ef.Z,{})]
          }):(0,r.jsxs)(r.Fragment,{
            children:[(0,r.jsx)(eh.Z,{}),(0,r.jsx)(em.Z,{
              containerRef:l
            }),(0,r.jsx)(ec.Z,{
              overlayClassName:"custom-popover",
              title:"Close",
              children:(0,r.jsx)(e_,{
                icon:(0,r.jsx)(eg.Tw,{}),
                onMouseDown:F
              })
            })]
          })
        })]
      })
    }),
    ek=n(8999);
    let eS=l.default.div.withConfig({
      componentId:"sc-c1425fb3-0"
    })([".resize-panel-container{max-width:350px;> div:first-of-type{min-width:200px;border-radius:8px;overflow:hidden;background-color:#fff;}}.resize-panel-container-second{max-width:450px;> div:nth-of-type(2){min-width:350px;}}.resize-handle{cursor:ew-resize;width:4px;height:4px;text-align:center;z-index:10;border-radius:5px;display:-webkit-box;display:flex;align-items:center;border:unset;background-color:#a7a7a7;transition:opacity 0.2s ease-in-out;transition-delay:200ms;position:relative;&:before{content:'';height:4px;position:absolute;border-radius:8px;top:-6px;width:4px;background-color:#a7a7a7;}&:after{content:'';height:4px;position:absolute;border-radius:8px;bottom:-6px;width:4px;background-color:#a7a7a7;}}.resize-border{width:14px !important;background-color:"," !important;cursor:ew-resize;height:100%;background:transparent;display:flex;z-index:1;align-items:center;align-content:center;justify-content:center;}.resize-panel-container,.resize-panel-container-second{max-width:100%;}.middle-panel{transition:all 0.55s ease-in-out;transition-delay:400ms;}",""],en.r.colors.primarySnow,e=>{
      let{
        expanded:t
      }=e;
      return!t&&(0,l.css)([".resize-handle{opacity:0 !important;}.resize-panel-container{flex-grow:1 !important;}.resize-border{width:0 !important;}.middle-panel{flex-grow:0 !important;min-width:0 !important;width:0 !important;margin:0 !important;}.resize-panel-container-second{flex-grow:0 !important;max-width:0 !important;}"])
    }),
    eE=l.default.div.withConfig({
      componentId:"sc-c1425fb3-1"
    })(["display:block;background:#ffffff;min-width:200px;border-radius:8px;overflow:hidden;flex-grow:1;margin:0;overflow:hidden;width:fit-content;border:1px solid ",";&[aria-label='video']{min-width:350px;display:flex;position:relative;overflow:visible;border:1px solid ",";}&.transparent-bg{background-color:transparent;}"],en.r.colors.surface10,en.r.colors.surface10),
    eF=(0,l.default)(eE).withConfig({
      componentId:"sc-c1425fb3-2"
    })(["background-color:#ffffff;overflow:visible;border:none;"]),
    eI=l.default.div.withConfig({
      componentId:"sc-c1425fb3-3"
    })(["display:flex;flex-grow:1;border-radius:8px;overflow:hidden;height:calc(100vh - 120px);z-index:1;position:relative;margin:0 16px;&:-webkit-full-screen{min-height:100vh;}&:fullscreen{min-height:100vh;}&:-webkit-full-screen{.resize-panel-container{display:none !important;}.resize-panel-container-second{max-width:550px;}}&:fullscreen{.resize-panel-container{display:none;}.resize-panel-container-second{max-width:550px;}}&:-webkit-full-screen{.event-wrapper{height:calc(100vh - 107px) !important;}.note-info{height:calc(100vh - 50px) !important;}}&:fullscreen{.event-wrapper{height:calc(100vh - 168px) !important;}.note-info{height:calc(100vh - 50px) !important;}}&:-webkit-full-screen,&:fullscreen{.fullscreen-icon{background-image:url(/static/session-replay/smallscreen.svg) !important;}}&:-webkit-full-screen{.session-info{height:calc(100vh - 55px) !important;padding-bottom:10px;}}&:fullscreen{.session-info{height:calc(100vh - 55px) !important;padding-bottom:10px;}}.resize-panel-container{.resize-border:{background-color:#F5F5F5;width:8px;}}"]),
    eD=et()(n.e(4786).then(n.bind(n,64786)),{
      loadableGenerated:{
        webpack:()=>[64786]
      },
      loading:()=>(0,r.jsx)(S.Z,{})
    }),
    ez=et()(Promise.all([n.e(3104),n.e(5148),n.e(2495),n.e(2972),n.e(8852),n.e(3617)]).then(n.bind(n,33617)),{
      loadableGenerated:{
        webpack:()=>[33617]
      }
    }),
    eZ=et()(()=>Promise.all([n.e(1677),n.e(5411),n.e(4251)]).then(n.bind(n,14251)),{
      loadableGenerated:{
        webpack:()=>[14251]
      },
      ssr:!1
    });
    var eN=(0,o.memo)(()=>{
      let e=(0,o.useRef)(),
      t=(0,i.I0)(),
      {
        noCodeEventsFeatureFlag:n
      }=(0,ei.Z)(),
      {
        urlReducer:a,
        appFilter:l
      }=(0,i.v9)(e=>e),
      [s,d]=(0,o.useState)([]),
      [p,c]=(0,o.useState)(!1),
      {
        appId:v
      }=a,
      {
        event:{
          segment:h
        },
        dateSegment:m,
        fetchProperty:f
      }=l,
      x=null==l?void 0:l.eventDetailSize,
      b=f.event_custom_property.data||[],
      y=f.user_custom_property.data||[],
      {
        eventpage:w,
        sessionid:_,
        parentType:j,
        autoplay:C,
        eventid:k,
        starttime:S,
        appId:E
      }=a,
      F=Number(w)||1,
      I=E||v,
      D="";
      try{
        D=JSON.parse(localStorage.getItem("eventsListReqBody"))
      }
      catch(e){}let z=(0,g.e)("web"),
      Z=(0,o.useMemo)(()=>{
        var e,
        t;
        return{
          appid:I,
          filters:[...h],
          date_range:{
            ...m,
            table:"nocodeEventsList"===j?"no_code_event":"event"
          },
          page:F||1,
          ...((null==s?void 0:s.length)||D)&&{
            orderBy:(null==s?void 0:s.length)?[{
              sortName:null===(e=s[0])||void 0===e?void 0:e.id,
              sortOrder:(null===(t=s[0])||void 0===t?void 0:t.desc)?"desc":"asc",
              ...s[0].isCustomUserProperty&&{
                isCustomUserProperty:s[0].isCustomUserProperty
              },
              ...s[0].isCustomEventProperty&&{
                isCustomEventProperty:s[0].isCustomEventProperty
              }
            }]:null==D?void 0:D.orderBy
          },
          webApp:z
        }
      },[I,m,h,s,F,j,z,D]);
      (0,o.useEffect)(()=>{
        try{
          localStorage.setItem("eventsListReqBody",JSON.stringify(Z))
        }
        catch(e){}
      },[Z]);
      let{
        data:N,
        refetch:L,
        isRefetching:V,
        isLoading:P
      }=(0,ek.EF)({
        postBody:Z,
        enabled:"nocodeEventsList"!==j
      }),
      {
        data:A,
        refetch:M,
        isRefetching:R,
        isLoading:B
      }=(0,ek.Zt)({
        postBody:Z,
        enabled:"nocodeEventsList"===j
      }),
      H=(0,o.useMemo)(()=>{
        var e,
        t;
        return"nocodeEventsList"===j&&n?null==A?void 0:null===(t=A.data)||void 0===t?void 0:t.data:null==N?void 0:null===(e=N.data)||void 0===e?void 0:e.data
      },[j,N,A,n]),
      O=(0,ea.n)(),
      T=(0,o.useMemo)(()=>{
        var e;
        return null==H?void 0:null===(e=H.body)||void 0===e?void 0:e.filter(e=>e.sessionid===_?e.userProperty:null).filter(e=>e)[0]
      },[H,_]),
      U=async e=>{
        (0,ek.j_)({
          appid:v,
          date_range:m,
          filters:h,
          table:"eventTable",
          orderBy:e,
          page:1,
          webApp:z
        }).then(()=>{
          "nocodeEventsList"===j?M():L()
        })
      },
      q=(e,n)=>t((0,u.Xy)(e,n)),
      G=(0,o.useCallback)(()=>{
        let t=e.current,
        n=document.webkitCurrentFullScreenElement,
        r=document.mozFullScreenElement;
        t&&(n?document.webkitExitFullscreen&&document.webkitExitFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen(),r?document.mozCancelFullScreen&&document.mozCancelFullScreen():t.mozRequestFullScreen&&t.mozRequestFullScreen())
      },[]),
      K=()=>{
        Z.page=1,
        "nocodeEventsList"===j?M():L(),
        (0,eo.I)({
          page:1,
          appId:v,
          sessionid:_,
          autoplay:C,
          segment:h,
          parentType:j,
          eventid:k,
          starttime:S,
          expanded:_||!1
        })
      };
      return(0,o.useEffect)(()=>{
        p&&(_?(0,eo.I)({
          page:w,
          appId:v,
          sessionid:_,
          autoplay:C,
          segment:h,
          parentType:j,
          eventid:k,
          starttime:S,
          expanded:_||!1,
          dateSegment:m
        }):K())
      },[null==m?void 0:m.value,h]),
      (0,o.useEffect)(()=>{
        var e,
        t,
        n;
        (null==s?void 0:s.length)&&(null===(e=s[0])||void 0===e?void 0:e.sortName)!==""&&(K(),U([{
          sortName:null===(t=s[0])||void 0===t?void 0:t.id,
          sortOrder:(null===(n=s[0])||void 0===n?void 0:n.desc)?"desc":"asc",
          ...s[0].isCustomUserProperty&&{
            isCustomUserProperty:s[0].isCustomUserProperty
          },
          ...s[0].isCustomEventProperty&&{
            isCustomEventProperty:s[0].isCustomEventProperty
          }
        }]))
      },[s]),
      (0,o.useEffect)(()=>(c(!0),()=>{
        c(!1)
      }),[]),
      (0,r.jsxs)(eS,{
        expanded:!!_,
        children:[(0,r.jsx)(eC,{
          expanded:!_,
          session:T,
          containerRef:e,
          eventsList:H
        }),(0,r.jsx)(eI,{
          ref:e,
          children:(0,r.jsxs)(r.Fragment,{
            children:[(0,r.jsx)(eZ,{
              direction:"e",
              handleClass:"resize-handle",
              containerClass:"resize-panel-container",
              borderClass:"resize-border",
              initialWidth:parseInt(null==x?void 0:x.initial)>518?518:(null==x?void 0:x.initial)<220?220:null==x?void 0:x.initial,
              saveDetailSize:q,
              children:(0,r.jsx)(eF,{
                children:(0,r.jsx)(eD,{
                  data:H||{},
                  isLoading:V||P||B||R,
                  setSortedBy:e=>{
                    let{
                      id:t,
                      desc:n
                    }=e()[0],
                    r=y.includes((0,el.h$)(t)),
                    o=b.includes((0,el.h$)(t));
                    d([{
                      id:t,
                      desc:n,
                      ...r&&{
                        isCustomUserProperty:r
                      },
                      ...o&&{
                        isCustomEventProperty:o
                      }
                    }])
                  },
                  sortedBy:(null==s?void 0:s.length)>0?s:(e=>{
                    if(e.length>0){
                      let{
                        sortName:t,
                        sortOrder:n,
                        isCustomUserProperty:r
                      }=e[0];
                      return[{
                        id:t,
                        desc:"desc"===n,
                        ...r&&{
                          isCustomUserProperty:r
                        }
                      }]
                    }
                    return[]
                  })((null==H?void 0:H.orderBy)||[])
                })
              })
            }),_&&(0,r.jsxs)(r.Fragment,{
              children:[(0,r.jsx)(eE,{
                "aria-label":"video",
                className:"middle-panel",
                children:(0,r.jsx)(ez,{
                  sessionList:H,
                  appId:v,
                  sessionId:_,
                  uploadedOn:null==T?void 0:T.sessionUploadedDateTime,
                  userId:null==T?void 0:T.uxcamuserid,
                  toggleFullScreen:G,
                  multiScreenSkippedData:O,
                  setDetailErrorMessage:()=>null
                })
              }),(0,r.jsx)(eZ,{
                direction:"w",
                handleClass:"resize-handle",
                containerClass:"resize-panel-container-second",
                borderClass:"resize-border",
                initialWidth:parseInt(null==x?void 0:x.end)>548?548:null==x?void 0:x.end,
                saveDetailSize:q,
                children:(0,r.jsx)(eE,{
                  children:(0,r.jsx)(er.default,{
                    multiScreenSkippedData:O,
                    uploadedOn:null==T?void 0:T.sessionUploadedDateTime
                  })
                })
              })]
            })]
          })
        })]
      })
    }),
    eL=n(46315);
    let eV=l.default.div.withConfig({
      componentId:"sc-df62a489-0"
    })(["height:100%;padding-top:",";pointer-events:",";"],e=>{
      let{
        noPadding:t
      }=e;
      return t?"0px":"60px"
    },e=>{
      let{
        isGlobalFilterVisible:t
      }=e;
      return t?"none":""
    });
    var eP=(0,Y.Z)(e=>{
      let{
        callApi:t,
        callGraphApi:n
      }=e,
      l=(0,g.e)("web"),
      h=(0,i.I0)(),
      {
        urlReducer:{
          parentType:m,
          appId:f
        },
        appFilter:{
          dateSegment:x,
          event:{
            segment:b
          }
        }
      }=(0,i.v9)(e=>e),
      {
        showEventsPageLockScreen:y
      }=(0,v.I)(),
      {
        noCodeEventsFeatureFlag:w
      }=(0,ei.Z)(),
      {
        megaDropdownVisible:_,
        megaBottomDropdownVisible:j
      }=(0,i.v9)(e=>e.megaFilterReducer),
      C=(0,o.useMemo)(()=>_||j,[_,j]),
      k=(0,a.d9)(b),
      {
        table:S
      }=(0,i.v9)(e=>{
        let{
          eventTable:t
        }=e;
        return t
      }),
      E=(0,o.useMemo)(()=>({
        appid:f,
        date_range:x,
        filters:[]
      }),[f,x]),
      F=(0,o.useMemo)(()=>{
        let e=null==k?void 0:k.filter(e=>"event_name"===e.attribute);
        return{
          attribute:"event_custom_property",
          filter:(null==k?void 0:k.length)>0?e:[],
          search:"",
          dropdownLimit:501,
          date_range:x
        }
      },[k,x]),
      I=(0,o.useMemo)(()=>({
        attribute:"user_custom_property",
        filter:[],
        search:"",
        dropdownLimit:501,
        date_range:x
      }),[x]),
      D=(0,o.useMemo)(()=>({
        attribute:"session_screen_with_property",
        filter:[],
        search:"",
        dropdownLimit:501,
        date_range:x
      }),[x]),
      z=async()=>{
        h((0,s.MX)()),
        h((0,c.SH)({
          dropName:"eventPropertyFilter",
          data:[]
        }))
      },
      Z=async()=>{
        h((0,d.Ap)("eventProperty_Ldr",!0)),
        h((0,u.MH)(F,!1,!0)).finally(()=>h((0,d.Ap)("eventProperty_Ldr",!1)))
      },
      N=async()=>{
        h((0,d.Ap)("userProperty_Ldr",!0)),
        h((0,u.MH)(I,!1,!0)).finally(()=>h((0,d.Ap)("userProperty_Ldr",!1)))
      },
      L=async()=>{
        h((0,u.MH)(D,!1,!0)).finally(()=>h((0,d.Ap)("customScreenProperty_Ldr",!1)))
      },
      V=async()=>{
        await z(),
        h((0,p.tQ)([])),
        t(f,"initial",void 0,l),
        h((0,p.Le)(E)),
        ("eventsList"===m||"statistics"===m)&&await Z(),
        N(),
        L(),
        "eventsList"===m&&h((0,d.hI)({
          action:"events list page"
        })),
        "nocodeEventsList"===m&&h((0,d.hI)({
          action:"nocode events list page"
        }))
      },
      P=()=>{
        if(null==k?void 0:k.length){
          let e=(0,a.qr)(k,{
            attribute:"event_name"
          });
          if(e>-1&&(null==S?void 0:S.length)){
            let t=k[e];
            h((0,p.tQ)(t.value))
          }
        }
      };
      if((0,o.useEffect)(()=>{
        P()
      },[S]),(0,o.useEffect)(()=>{
        ("eventsList"===m||"nocodeEventsList"===m||"statistics"===m)&&V()
      },[f,l]),y)return(0,r.jsx)(eL.ZP,{});
      let A=(0,r.jsx)(r.Fragment,{});
      return("eventsList"===m||"nocodeEventsList"===m&&w)&&(A=(0,r.jsx)(eN,{})),
      "statistics"===m&&(A=(0,r.jsx)(X,{
        callGraphApi:n
      })),
      (0,r.jsx)(eV,{
        noPadding:y,
        isGlobalFilterVisible:C,
        children:A
      })
    })
  },
  11444:function(e,t,n){
    var r=n(85893),
    o=n(67294),
    i=n(68457),
    a=n(74936),
    l=n(80432),
    s=n(12016),
    d=n(19521),
    p=n(75493),
    c=n(1363),
    u=n(15941);
    let v=i.default.Item,
    g=(0,d.default)(a.Z).withConfig({
      componentId:"sc-77d6417d-0"
    })(["padding:0;display:flex;justify-content:center;align-content:center;height:fit-content;padding:6px 10px;height:32px;border-radius:4px;border-color:#828282;margin-left:20px;background-color:#ffffff;svg{path,rect{fill:#828282;stroke:#828282;}}&:hover{background:transparent;svg{path,rect{fill:#5d97ff;stroke:#5d97ff;}}}"]),
    h=d.default.div.withConfig({
      componentId:"sc-77d6417d-1"
    })(["color:#5d97ff;font-weight:700;font-size:14px;line-height:24px;padding:2px 12px;margin-bottom:2px;"]),
    m=(0,d.default)(i.default).withConfig({
      componentId:"sc-77d6417d-2"
    })(["border-radius:4px;padding:4px;.ant-dropdown-menu-item{display:flex;align-items:center;font-weight:400;line-height:24px;font-size:12px;color:#161e35;svg{width:13px;display:inline-flex;margin-right:2px;}:hover{background-color:#eff5ff;border-radius:4px;}}"]);
    t.Z=e=>{
      var t,
      n;
      let{
        globalFilter:i
      }=e,
      [a,d]=(0,o.useState)(!1),
      [f,x]=(0,o.useState)(),
      {
        canExportData:b,
        isApiError:y,
        apiError:w,
        CommonUpgradeModal:_,
        upgradePlan:j,
        setUpgradePlan:C
      }=(0,c.D)(),
      k=e=>{
        d(e)
      },
      S=(0,o.useCallback)(e=>{
        var t,
        n,
        r,
        o,
        i;
        let{
          key:a
        }=e;
        if((null==w?void 0:null===(n=w.response)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.error)||y){
          l.ZP.error((null==w?void 0:null===(i=w.response)||void 0===i?void 0:null===(o=i.data)||void 0===o?void 0:null===(r=o.error)||void 0===r?void 0:r.message)||"Something went wrong");
          return
        }
        b?(x(a),C(!1),k(!0)):C(!0)
      },[null==w?void 0:null===(n=w.response)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.error,b,y,C]),
      E=(0,o.useMemo)(()=>(0,r.jsxs)(m,{
        onClick:S,
        children:[(0,r.jsx)(h,{
          children:"Download data as"
        }),(0,r.jsxs)(v,{
          children:[(0,r.jsx)(p.b2,{})," Visible columns only (CSV)"]
        },"visibleOnly"),(0,r.jsxs)(v,{
          children:[(0,r.jsx)(p.b2,{})," All columns (CSV)"]
        },"allColumns")]
      }),[S]);
      return(0,r.jsxs)(r.Fragment,{
        children:[(0,r.jsx)(s.Z,{
          overlay:E,
          placement:"bottomLeft",
          trigger:["click"],
          children:(0,r.jsx)(g,{
            onClick:e=>e.preventDefault(),
            icon:(0,r.jsx)(p.b2,{})
          })
        }),j?(0,r.jsx)(_,{}):a&&(0,r.jsx)(u.Z,{
          visibleDownloadModal:a,
          handleVisibleModal:k,
          downLoadColumn:f,
          setDownloadColumn:x,
          globalFilter:i
        })]
      })
    }
  }
}]);