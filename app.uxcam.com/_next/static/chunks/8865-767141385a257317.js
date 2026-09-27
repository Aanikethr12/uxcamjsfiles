"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8865],{
  86640:function(e,t,n){
    var i=n(85893),
    s=n(67294),
    o=n(48203);
    let r=n(19521).default.div.withConfig({
      componentId:"sc-98030ac-0"
    })(["overflow:hidden;white-space:pre;text-overflow:ellipsis;width:","px;"],e=>{
      let{
        width:t
      }=e;
      return"".concat(t)
    });
    t.Z=e=>{
      let t=(0,s.useRef)(),
      {
        width:n,
        text:a,
        className:l="",
        value:c,
        showTooltip:u=!1,
        tooltipElement:d,
        placement:p="right"
      }=e,
      [C,h]=(0,s.useState)(u);
      return(0,s.useEffect)(()=>{
        h(t.current.scrollWidth>t.current.clientWidth)
      },[n]),
      C||d?(0,i.jsx)(o.Z,{
        title:d||a,
        placement:p,
        children:(0,i.jsx)(r,{
          width:n,
          ref:t,
          className:l,
          children:c
        })
      }):(0,i.jsx)(r,{
        width:n,
        ref:t,
        className:l,
        children:c
      })
    }
  },
  76633:function(e,t,n){
    n.d(t,{
      $b:function(){
        return C
      },
      BZ:function(){
        return b
      },
      HP:function(){
        return u
      },
      I1:function(){
        return d
      },
      Iw:function(){
        return g
      },
      MG:function(){
        return x
      },
      Pw:function(){
        return m
      },
      RP:function(){
        return v
      },
      SG:function(){
        return p
      },
      gI:function(){
        return l
      },
      h2:function(){
        return o
      },
      il:function(){
        return h
      },
      jT:function(){
        return f
      },
      lr:function(){
        return c
      },
      n5:function(){
        return r
      },
      rI:function(){
        return a
      },
      x_:function(){
        return s
      }
    }),
    n(85893),
    n(67294),
    n(41664);
    var i=n(86927);
    let s={
      "Bar chart":"bar",
      "Stacked bar chart":"stacked_bar",
      "Column chart":"column",
      "Stacked column chart":"stacked_column",
      "Line chart":"line",
      "Stacked line chart":"stacked_line",
      "Pie chart":"pie"
    },
    o={
      Sessions:"/static/sessions-icon-boxes.svg",
      Users:"/static/users-icon-boxes.svg",
      "Time in App":"/static/time-icon-boxes.svg",
      "Rage Taps":"/static/ragetaps-icon-boxes.svg",
      "Screen Visits":"/static/screen-icon-boxes.svg",
      Crashes:"/static/crashed-icon-boxes.svg"
    },
    r={
      Sessions:"/static/sessions-icon-boxes.svg",
      Users:"/static/users-icon-boxes.svg",
      "Time in App":"/static/time-icon-boxes.svg",
      "Rage Taps":"/static/ragetaps-icon-boxes.svg",
      "Screen Visits":"/static/screen-icon-boxes.svg",
      Crashes:"/static/crashed-icon-boxes.svg"
    },
    a=e=>{
      switch(e){
        case"user":return"userTable";
        case"screen":return"screenTable";
        case"event":case"nocodeEvent":return"eventTable";
        case"issue":return"issueTable";
        default:return"sessionTable"
      }
    },
    l=(e,t)=>({
      userSelect:"none",
      padding:16,
      margin:"0 0 ".concat(8,"px 0"),
      color:t?"#ffffff":"inherit",
      background:t?"#5D97FF":"#ffffff",
      ...e
    }),
    c=(e,t)=>({
      background:e?"#f5f5f5":"#ffffff",
      padding:8,
      maxWidth:"100%",
      minWidth:t
    }),
    u=(e,t,n)=>{
      let i=Array.from(e),
      [s]=i.splice(t,1);
      return i.splice(n,0,s),
      i
    },
    d=function(){
      let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,
      t=Math.floor(e/86400),
      n=new Date(e%86400*1e3).toISOString().substring(11,19).replace(/^(\d+)/,e=>"".concat(Number(e)+24*t).padStart(2,"0")).split(":");
      return"".concat(n[0]>0?"".concat(n[0],":"):"").concat(n[1]).concat(":".concat(n[2]))
    },
    p=(e,t)=>{
      let n=[];
      return e.map(e=>{
        let i=t.find(t=>t.sessionid===e);
        n.push({
          id:e,
          uploaded_on:i.sessionUploadedDateTime
        })
      }),
      n
    },
    C=(e,t)=>{
      let n=[];
      return e.map(e=>{
        let i=t.find(t=>t.uxcamuserid===e);
        n.push({
          id:e,
          first_seen:i.firstSeen,
          last_seen:i.lastSeen
        })
      }),
      n
    },
    h=e=>e.sort((e,t)=>Number(t.isVisible)-Number(e.isVisible));
    function v(e){
      return"Single Tap"===e?"/static/gestures/rage.svg":"/static/gestures/double-rage.svg"
    }
    function f(e,t,n,i,s){
      if(s)return"smart_screenvisit_event";
      if(i)return"no-code event";
      if(n)return"UI Freeze"===e?"ui freeze":"event";
      if(!t)return e;
      switch(e){
        case"Single Tap":return"single rage";
        case"Double Tap":return"double rage";
        default:return"rage"
      }
    }
    function m(e){
      let{
        type:t
      }=e;
      return{
        isEvent:"sdk_event"===t,
        isSmartEvent:"smart_gesture_event"===t,
        isGesture:"gesture"===t,
        isScreenEvent:"smart_screenvisit_event"===t
      }
    }
    let g=e=>{
      var t;
      let n=[],
      i=null==e?void 0:null===(t=e.screenTimeline)||void 0===t?void 0:t.activities;
      return null==i||i.forEach(e=>{
        let{
          actions:t
        }=e;
        t instanceof Array&&(null==t?void 0:t.length)>0&&(null==t||t.forEach(e=>{
          let{
            isEvent:t
          }=m(e);
          ("UI Freeze"===e.name||"ANR"===e.name&&t)&&n.push(e)
        }))
      }),
      n
    },
    x=(e,t)=>{
      var n,
      s,
      o,
      r,
      a,
      l,
      c,
      u,
      d,
      p,
      C;
      let h="issues"===t?null==e?void 0:e.user_property:null==e?void 0:e.userProperty,
      {
        availableUserId:v
      }=("eventsList"===t||"sessionsList"===t||"shareSession"===t||"issues"===t||"heatmapsList"===t)&&(0,i.n5)({
        customUserId:null==h?void 0:h.kUXCam_UserIdentity,
        uxcamuserid:null==h?void 0:h.uxcamuserid
      });
      return e?{
        name:v,
        kUXCam_UserIdentity:null==h?void 0:h.kUXCam_UserIdentity,
        deviceModel:(null==e?void 0:e.deviceModel)||(null==e?void 0:e.devicemodel)||(null==e?void 0:null===(n=e.device)||void 0===n?void 0:n.deviceModel),
        city:(null==e?void 0:e.city)||(null==e?void 0:null===(s=e.location)||void 0===s?void 0:s.city),
        country:(null==e?void 0:e.country)||(null==e?void 0:null===(o=e.location)||void 0===o?void 0:o.country),
        userSessionRun:(null==e?void 0:e.userSessionRun)||e.sessionRun||(null==e?void 0:e.sessionhash)||(null==e?void 0:e.sessionNumber),
        uxcamuserid:(null==e?void 0:e.uxcamuserid)||(null==e?void 0:null===(r=e.userProperty)||void 0===r?void 0:r.uxcamuserid),
        sessionUploadedDateTime:"eventsList"===t?null==e?void 0:null===(a=e.time)||void 0===a?void 0:a.sessionUploadedDateTime:(null==e?void 0:e.sessionUploadedDateTime)||(null==e?void 0:e.uploadedDateTime)||(null==e?void 0:null===(l=e.time)||void 0===l?void 0:l.sessionUploadedDateTime),
        platform:e.platform||(null==e?void 0:null===(c=e.device)||void 0===c?void 0:c.platform),
        appVersion:e.appVersion||e.appversion||(null==e?void 0:null===(u=e.device)||void 0===u?void 0:u.appVersion),
        networkType:e.networkType||e.networktype,
        osVersion:(null==e?void 0:e.osVersion)||(null==e?void 0:e.osversion)||(null==e?void 0:e.deviceosversion)||(null==e?void 0:null===(d=e.device)||void 0===d?void 0:d.osVersion),
        video:(null==e?void 0:e.video)!==null&&(null==e?void 0:e.video),
        crashed:(null==e?void 0:e.crashed)||(null==e?void 0:e.crashed),
        isFavourite:(null==e?void 0:e.isFavourite)||(null==e?void 0:e.isFavourite),
        isRageTap:(null==e?void 0:e.isRageTap)||(null==e?void 0:e.isRageTap),
        customLabel:(null==e?void 0:e.customLabel)||(null==e?void 0:e.customLabel),
        sessionid:(null==e?void 0:e.sessionid)||(null==e?void 0:e._id)||(null==e?void 0:e._id),
        sessionNumber:(null==e?void 0:e.sessionNumber)||"",
        recordedon:(null==e?void 0:e.recordedon)||(null==e?void 0:null===(p=e.time)||void 0===p?void 0:p.sessionRecordedDateTime)||"",
        deviceLocalDateTime:(null==e?void 0:e.deviceLocalDateTime)||(null==e?void 0:null===(C=e.time)||void 0===C?void 0:C.deviceLocalDateTime)||"",
        userTimezone:(null==e?void 0:e.userTimezone)||""
      }:null
    },
    b=e=>{
      let t=Math.floor(e/3600),
      n=e%3600,
      i=Math.floor(n/60);
      return"".concat(t?"".concat(t,"hour"):"").concat(t>1?"s":""," ").concat(i?"".concat(i,"min"):""," ").concat(Math.floor(n%60),"s")
    }
  },
  86927:function(e,t,n){
    n.d(t,{
      B2:function(){
        return i
      },
      XY:function(){
        return r
      },
      _M:function(){
        return o
      },
      n5:function(){
        return s
      }
    });
    let i="Custom user ID was not set for this user.",
    s=e=>{
      let{
        customUserId:t,
        uxcamuserid:n
      }=e,
      s={
        customUserId:t,
        uxcamuserid:n,
        indicator:"",
        info:i,
        selector:"customUserId",
        availableUserId:n
      };
      return t||(s.indicator="*"),
      t&&(s.availableUserId=t),
      s
    },
    o="Custom user ID or UXCam user ID",
    r="User ID set in the UXCam database"
  },
  95593:function(e,t,n){
    n.d(t,{
      Z:function(){
        return M
      }
    });
    var i=n(85893),
    s=n(67294),
    o=n(68457),
    r=n(88058),
    a=n(88812),
    l=n(55283),
    c=n(86640),
    u=n(19521);
    let d=u.default.i.withConfig({
      componentId:"sc-cbb10e51-0"
    })(["color:#5D97FF;font-style:normal;"]),
    p=(e,t)=>{
      let n=t.toLowerCase().replaceAll(/[.*+?^${}()|[\]\\]/g,"\\$&"),
      s=RegExp("(".concat(n.replace(/ /g,"\\s"),")"),"gi");
      return e.split(s).map(e=>e.toLowerCase()===n?(0,i.jsx)(d,{
        children:e
      }):e.includes("\xa0")?e.split("\xa0").join(" "):e)
    },
    C=u.default.div.withConfig({
      componentId:"sc-fd8c3488-0"
    })(["background-color:#fff;border-radius:8px;padding:10px 0;overflow:hidden;display:flex;flex-direction:column;gap:10px;max-width:240px;box-shadow:rgba(0,0,0,0.16) 0px 1px 4px;.empty-message{padding:0 10px;text-align:center;}"]),
    h=u.default.div.withConfig({
      componentId:"sc-fd8c3488-1"
    })(["padding:0 10px;display:flex;flex-direction:column;gap:8px;position:relative;&::before{content:'';position:absolute;top:-6px;left:0;width:100%;background-color:#E8E8EB;}"]),
    v=u.default.div.withConfig({
      componentId:"sc-fd8c3488-2"
    })(["display:flex;padding:0 10px;.ant-tabs{width:100% !important;}"]),
    f=(0,u.default)(r.default).withConfig({
      componentId:"sc-fd8c3488-3"
    })([".ant-tabs-nav-operations{display:none !important;}.ant-tabs-nav{}.ant-tabs-nav-list{width:100%;height:100%;.ant-tabs-tab{flex:1;min-width:100px;padding-top:0;}}.ant-tabs-content-holder{height:100%;overflow:hidden;}.ant-tabs-tab{font-size:13px;display:flex;justify-content:center;align-items:center;margin-left:0;padding:8px 0;}.ant-tabs-tab:hover{color:#5D97FF;}.ant-tabs-ink-bar{background:#5D97FF;}.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{color:#5D97FF;}.ant-tabs-nav{margin-bottom:8px;display:",";}.ant-dropdown-menu{padding:0;width:100%;border:none;min-height:auto;.ant-dropdown-menu-item-group{width:100%;.ant-dropdown-menu-item-group-list{margin:0;li{margin:0;width:100%;.anticon{margin:0;}}}}}"],e=>{
      let{
        tabCount:t
      }=e;
      return t>1?"flex":"none"
    }),
    m=(0,u.default)(o.default).withConfig({
      componentId:"sc-fd8c3488-4"
    })([".ant-dropdown-menu-item,.ant-menu-item{padding:0;display:flex;height:32px;align-items:center;}.ant-dropdown-menu-item-group-title,.ant-menu-item-group-title{padding:0;padding-bottom:",";background-color:#fff;position:sticky;top:0;z-index:2;}.ant-dropdown-menu-title-content{display:flex;align-items:center;gap:8px;height:28px;width:100%;span:nth-child(1){width:14px;}.tooltip{flex:1;}.label-count{font-size:12px;color:#A2A5AE;}}.ant-dropdown-menu-item{padding:0px 10px;border-radius:4px;background-color:#fff;&:hover,&.ant-dropdown-menu-item-selected{background-color:#EFF5FF !important;color:inherit !important;}}.custom-label-name{color:#444B5E;font-size:12px;line-height:24px;}.ant-menu-item-group{max-height:174px;overflow:hidden;overflow-y:auto;min-width:180px;width:100%;.ant-menu-item-group-list{display:flex;flex-direction:column;gap:8px;.ant-menu-item-selected{background-color:#EFF5FF;color:inherit;}.ant-menu-item{margin:0;height:100%;max-height:28px;padding:2px 8px;align-items:center;border-radius:4px;&:hover{background-color:#EFF5FF;color:inherit;}.ant-menu-title-content{height:28px;width:100%;display:flex;gap:8px;align-items:center;.tooltip{flex:1;font-size:12px;}.label-count{font-size:12px;color:#A2A5AE;}}}}}.ant-dropdown-menu-item-group-list{max-height:174px;overflow:hidden;overflow-y:auto;min-width:180px;width:100%;margin:0;display:flex;flex-direction:column;gap:8px;&::-webkit-scrollbar{width:5px;height:5px;}&::-webkit-scrollbar-track{border-radius:6px;}&::-webkit-scrollbar-thumb{background-color:#babec5;border-radius:6px;transition:background-color 1s;&:hover{background-color:#747c8b;}}}"],e=>{
      let{
        hasTitle:t
      }=e;
      return t?"8px":"0px"
    }),
    g=u.default.div.withConfig({
      componentId:"sc-fd8c3488-5"
    })(["position:relative;"]),
    x=u.default.input.withConfig({
      componentId:"sc-fd8c3488-6"
    })(["border:none;font-weight:400;font-size:12px;line-height:24px;background-color:#F3F4F5;color:#454B5D;padding:0 8px 0 28px;height:28px;width:100%;border-radius:6px;border:1px solid transparent;&:placeholder{color:#737886;}&:focus{outline:none;border:1px solid #5D97FF;}"]),
    b=u.default.img.withConfig({
      componentId:"sc-fd8c3488-7"
    })(["height:12px;width:12px;position:absolute;top:50%;left:10px;transform:translateY(-50%);"]),
    w=u.default.span.withConfig({
      componentId:"sc-fd8c3488-8"
    })(["display:flex;align-items:center;justify-content:center;svg{width:14px;height:14px;}"]),
    _=u.default.button.withConfig({
      componentId:"sc-fd8c3488-9"
    })(["border:none;background-color:#5D97FF;text-align:center;color:#ffffff;cursor:pointer;border-radius:4px;font-size:12px;line-height:24px;margin:0 10px;&:hover{opacity:0.9;}&:disabled{opacity:0.5;cursor:not-allowed;}"]),
    y=u.default.span.withConfig({
      componentId:"sc-fd8c3488-10"
    })(["display:flex;align-items:center;font-size:12px;padding:4px 10px;height:28px;"]),
    L=["session_with_notes","session_has_video","session_is_viewed"],
    {
      ItemGroup:k
    }=o.default;
    var M=e=>{
      let{
        header:t,
        footer:n,
        selectedKeys:u,
        disabledKeys:d,
        tabs:M,
        handleItemClicked:S,
        handleApply:j,
        searchInput:F,
        handleTabChange:I,
        showLabelCount:T,
        hideFooter:V,
        headerStyle:Z,
        containerStyle:D,
        emptyMessage:E,
        emptyLabelMessage:B
      }=e,
      H=(0,s.useCallback)(e=>{
        let{
          name:t,
          attribute:n,
          icon:s
        }=e;
        return(null==u?void 0:u.includes(t))||(null==u?void 0:u.includes(n||""))?(0,i.jsx)(w,{
          children:(0,i.jsx)(l.Z,{})
        }):L.includes(n||"")?s:(0,i.jsx)(a.Z,{
          type:s
        })
      },[u]);
      return(0,i.jsxs)(C,{
        style:D,
        children:[t?(0,i.jsx)(h,{
          style:Z,
          children:t
        }):null,E?(0,i.jsx)("i",{
          className:"empty-message",
          children:E
        }):(0,i.jsx)(v,{
          onClick:e=>{
            e.stopPropagation()
          },
          children:(0,i.jsx)(f,{
            centered:!0,
            defaultActiveKey:M[0].key,
            moreIcon:null,
            onChange:I,
            tabCount:M.length,
            children:M.map(e=>{
              let{
                name:t,
                key:n,
                options:s,
                showSearch:a
              }=e;
              return(0,i.jsx)(r.default.TabPane,{
                tab:t,
                children:(0,i.jsx)(m,{
                  selectedKeys:u,
                  onClick:t=>{
                    let{
                      key:n
                    }=t;
                    return S&&S(n,e)
                  },
                  hasTitle:a,
                  children:(0,i.jsxs)(k,{
                    title:a?(0,i.jsxs)(g,{
                      children:[(0,i.jsx)(b,{
                        src:"/static/sessions/search.svg",
                        alt:"Search icon"
                      }),(0,i.jsx)(x,{
                        placeholder:"Search labels",
                        ...F
                      })]
                    }):void 0,
                    children:[s.map(e=>(0,i.jsxs)(o.default.Item,{
                      disabled:null==d?void 0:d.includes(e.name||e.attribute||""),
                      children:[H(e),(0,i.jsx)(c.Z,{
                        width:T?150:170,
                        text:e.name,
                        value:p(e.name,null==F?void 0:F.value),
                        className:"tooltip"
                      }),T?(0,i.jsx)("span",{
                        className:"label-count",
                        children:e.count
                      }):null]
                    },e.attribute||e.name)),0===s.length&&(0,i.jsx)(y,{
                      children:B||"No matching filter"
                    })]
                  })
                })
              },n)
            })
          })
        }),n?(0,i.jsx)(h,{
          isFooter:!0,
          onClick:e=>e.stopPropagation(),
          children:n
        }):!V&&(0,i.jsx)(_,{
          onClick:j,
          children:"Apply"
        })]
      })
    }
  },
  55393:function(e,t,n){
    n.d(t,{
      Y:function(){
        return l
      }
    });
    var i=n(67294),
    s=n(14416),
    o=n(88767),
    r=n(40980),
    a=n(62091);
    let l={
      crashes:"crash",
      freezes:"uifreeze",
      exceptions:"exception"
    };
    t.Z=(e,t)=>{
      let{
        currentAppReducer:{
          _id:n
        },
        urlReducer:{
          issueType:c,
          issueid:u,
          url:d
        },
        appFilter:{
          issue:{
            segment:p
          },
          dateSegment:C
        }
      }=(0,s.v9)(e=>e),
      h=(0,i.useMemo)(()=>{
        if(u)return u.includes(" ")?d.split("/")[6].replace("?",""):u
      },[u,d]),
      v=(0,i.useCallback)(async()=>{
        let i=h?"detail_list":"list",
        s="".concat(a.dt[c]).concat(i),
        o=h?[...p,{
          attribute:"".concat(l[c],"_id"),
          operator:"equal",
          value:h
        }]:[...p];
        return r.Z.fetchIssueGraph({
          appid:n,
          date_range:C,
          filters:o,
          order_by:e,
          page:t
        },s)
      },[n,C,h,p,c,t,e]),
      f=(0,i.useMemo)(()=>["issue_list",n,c,p,e,t,C],[n,c,p,e,t,C]),
      m=(0,i.useMemo)(()=>["issue_detail_list",n,h,c,p,e,t,C],[n,h,c,p,e,t,C]),
      {
        isLoading:g,
        data:x,
        isPreviousData:b
      }=(0,o.useQuery)(f,()=>v(),{
        enabled:!!n&&void 0===h&&!!c,
        keepPreviousData:!0
      }),
      {
        isLoading:w,
        data:_,
        isPreviousData:y
      }=(0,o.useQuery)(m,()=>v(),{
        enabled:!!n&&void 0!==h&&!!c,
        keepPreviousData:!0
      });
      return{
        isAPILoading:(0,i.useMemo)(()=>g||w||b||y,[y,w,b,g]),
        issueList:(0,i.useMemo)(()=>{
          var e;
          return null==x?void 0:null===(e=x.data)||void 0===e?void 0:e.data
        },[x]),
        issueListDetail:(0,i.useMemo)(()=>{
          var e;
          return null==_?void 0:null===(e=_.data)||void 0===e?void 0:e.data
        },[_]),
        issueListQueryKey:f,
        issueListDetailQueryKey:m
      }
    }
  },
  62091:function(e,t,n){
    n.d(t,{
      $t:function(){
        return s
      },
      CK:function(){
        return a
      },
      FG:function(){
        return c
      },
      JC:function(){
        return i
      },
      Nb:function(){
        return o
      },
      XI:function(){
        return r
      },
      dt:function(){
        return u
      },
      o:function(){
        return l
      },
      yb:function(){
        return d
      }
    });
    let i=460,
    s="calc(".concat(i,"px - 84px)"),
    o=[{
      name:"Trends",
      key:"issue_date_graph"
    },{
      name:"App versions",
      key:"issue_appversion_graph"
    },{
      name:"OS versions",
      key:"issue_osversion_graph"
    },{
      name:"Devices",
      key:"issue_device_graph"
    },{
      name:"Platform",
      key:"session_platform"
    }],
    r=[{
      name:"Daily trend",
      key:"screen_period_day"
    },{
      name:"Most visited screens",
      key:"screen_top_five"
    },{
      name:"Device type",
      key:"device_type"
    },{
      name:"Top landing screens",
      key:"screen_top_five_landing"
    },{
      name:"Top exit screens",
      key:"screen_top_five_exit"
    },{
      name:"Highest bounce rate",
      key:"screen_bounce_rate"
    },{
      name:"Highest engagement screens",
      key:"screen_engagement"
    },{
      name:"Lowest engagement screens",
      key:"screen_low_engagement"
    },{
      name:"Issue type",
      key:"event_name"
    },{
      name:"Most problematic screens",
      key:"screen_with_issue"
    }],
    a={
      screen_count:["screen_top_five","screen_period_day","device_type","screen_top_five_landing","screen_top_five_exit"],
      screen_time:["screen_engagement","screen_low_engagement","screen_period_day","device_type"],
      bounce_rate:["screen_bounce_rate","screen_period_day","device_type"],
      screen_with_issue:["screen_with_issue","screen_period_day","device_type","event_name"]
    },
    l={
      issue_date_graph:"day",
      issue_appversion_graph:"app version",
      issue_osversion_graph:"OS versions",
      issue_device_graph:"Device",
      session_platform:"device platform"
    },
    c={
      issue_date_graph:"period_day",
      issue_appversion_graph:"app_version",
      issue_osversion_graph:"device_os_version",
      issue_device_graph:"device_model",
      session_platform:"device_platform"
    },
    u={
      crashes:"crashes/crash_",
      exceptions:"exceptions/exception_",
      freezes:"uifreezes/ui_freeze_"
    },
    d={
      crash_count:"Crashes",
      uifreeze_count:"UI freezes",
      exception_count:"Exceptions",
      crash_free_sessions:"Crash free sessions",
      uifreeze_free_sessions:"UI freeze free sessions",
      exception_free_sessions:"Sessions without exceptions",
      crash_unique_user_count:"Affected users",
      uifreeze_unique_user_count:"Affected users",
      exception_unique_user_count:"Affected users",
      session_count:"Total",
      screen_time:"Screen time",
      bounce_rate:"Bounce rate",
      screen_count:"Screen views",
      screen_with_issue:"Screens with issues"
    }
  },
  96820:function(e,t,n){
    n.d(t,{
      QP:function(){
        return p
      },
      e7:function(){
        return v
      },
      hr:function(){
        return l
      },
      pT:function(){
        return c
      },
      qr:function(){
        return C
      },
      sQ:function(){
        return d
      },
      yT:function(){
        return h
      }
    });
    var i=n(88767),
    s=n(14416),
    o=n(98777),
    r=n(25357);
    n(7906);
    let a=async e=>{
      let{
        postBody:t
      }=e;
      return r.Z.getV2SessionsList(t)
    },
    l=(e,t)=>{
      let{
        _id:n,
        isAIEnabled:o
      }=(0,s.v9)(e=>e.currentAppReducer)||{},
      r=(null==e?void 0:e.appid)&&e.appid===n&&!o;
      return(0,i.useQuery)(["sessionItems",e],()=>a({
        postBody:e
      }),{
        refetchOnMount:!1,
        retry:3,
        cacheTime:0,
        enabled:"usersList"!==t&&r,
        keepPreviousData:!0
      })
    },
    c=async e=>{
      let t=await o.be.post("".concat("https://pythonapi-prod.uxcam.com","/label/session/update_custom_label"),e,{
        withCredentials:!0,
        credentials:"include"
      });
      return null==t?void 0:t.data
    },
    u=e=>o.be.post("".concat("https://pythonapi-prod.uxcam.com","/preference/column-sort-order"),e,{
      withCredentials:!0,
      credentials:"include"
    }),
    d=e=>u(e),
    p=()=>{
      let e="",
      t="",
      n="",
      s="",
      r="";
      try{
        e=["sessionItems",JSON.parse(localStorage.getItem("sessionsListReqBody"))],
        t=["aiSessionItems",JSON.parse(localStorage.getItem("aiSessionsListReqBody"))],
        n=["userList",JSON.parse(localStorage.getItem("usersListReqBody"))],
        s=["eventList",JSON.parse(localStorage.getItem("eventsListReqBody"))],
        r=["nocodeEventList",JSON.parse(localStorage.getItem("eventsListReqBody"))]
      }
      catch(e){}let a={
        session:e,
        aiSession:t,
        user:n,
        event:s,
        nocodeEvent:r
      },
      l=(0,i.useQueryClient)();
      return(0,i.useMutation)(async e=>{
        let{
          data:t,
          url:n
        }=e;
        return o.be.post("".concat("https://pythonapi-prod.uxcam.com","/").concat(n),t,{
          withCredentials:!0,
          credentials:"include",
          enabled:!1
        })
      },{
        onSuccess:(e,t)=>{
          var n,
          i,
          s,
          o,
          r,
          c,
          u,
          d;
          let{
            type:p
          }=t,
          C=a[p],
          h=(null==e?void 0:null===(s=e.data)||void 0===s?void 0:null===(i=s.data)||void 0===i?void 0:null===(n=i.preferenceData)||void 0===n?void 0:n.header)||(null==e?void 0:null===(r=e.data)||void 0===r?void 0:null===(o=r.data)||void 0===o?void 0:o.preference),
          v=null==e?void 0:null===(d=e.data)||void 0===d?void 0:null===(u=d.data)||void 0===u?void 0:null===(c=u.preferenceData)||void 0===c?void 0:c.sortOrder,
          f=l.getQueryData(C);
          if(f&&l.setQueryData(C,e=>{
            var t;
            return(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.data)?{
              ...e,
              data:{
                ...e.data,
                data:{
                  ...e.data.data,
                  header:h,
                  ...v&&{
                    orderBy:v
                  }
                }
              }
            }:e
          }),v)try{
            let e={
              session:"sessionsListReqBody",
              aiSession:"aiSessionsListReqBody",
              user:"usersListReqBody",
              event:"eventsListReqBody",
              nocodeEvent:"eventsListReqBody"
            }[p];
            if(e){
              let t=JSON.parse(localStorage.getItem(e));
              t&&(t.orderBy=v,localStorage.setItem(e,JSON.stringify(t)))
            }
          }
          catch(e){}return"aiSession"===p&&l.invalidateQueries({
            queryKey:["aiSessionItems"]
          }),
          f
        }
      })
    },
    C=e=>o.be.post("".concat("https://pythonapi-prod.uxcam.com","/label/delete-label"),e,{
      withCredentials:!0,
      credentials:"include"
    }),
    h=async e=>{
      let t=await o.be.post("".concat("https://pythonapi-prod.uxcam.com","/label/session/add_custom_label"),e,{
        withCredentials:!0,
        credentials:"include"
      });
      return null==t?void 0:t.data
    },
    v=e=>o.be.post("".concat("https://pythonapi-prod.uxcam.com","/label/update-label"),e,{
      withCredentials:!0,
      credentials:"include"
    })
  },
  48194:function(e,t,n){
    n.d(t,{
      C_:function(){
        return c
      },
      Um:function(){
        return d
      },
      WG:function(){
        return l
      },
      ns:function(){
        return u
      }
    });
    var i=n(88767),
    s=n(98777),
    o=n(47662),
    r=n(18879);
    let a=async e=>o.Z.getUsersList(e),
    l=(e,t,n)=>(0,i.useQuery)(["userList",e],()=>a(e),{
      refetchInterval:r.Ul,
      retry:3,
      cacheTime:0,
      enabled:n&&!["sessionsList","aiSessionsList"].includes(t),
      keepPreviousData:!0
    }),
    c=e=>s.be.post("".concat("https://pythonapi-prod.uxcam.com","/preference/column-sort-order"),e,{
      withCredentials:!0,
      credentials:"include"
    }),
    u=async e=>{
      let t=await s.be.post("".concat("https://pythonapi-prod.uxcam.com","/label/user/add_custom_label"),e,{
        withCredentials:!0,
        credentials:"include"
      });
      return null==t?void 0:t.data
    },
    d=async e=>{
      let t=await s.be.post("".concat("https://pythonapi-prod.uxcam.com","/label/user/update_custom_label"),e,{
        withCredentials:!0,
        credentials:"include"
      });
      return null==t?void 0:t.data
    }
  },
  75493:function(e,t,n){
    n.d(t,{
      Od:function(){
        return d
      },
      Xn:function(){
        return f
      },
      Z4:function(){
        return C
      },
      b2:function(){
        return v
      },
      kb:function(){
        return c
      },
      mz:function(){
        return r
      },
      ol:function(){
        return l
      },
      pI:function(){
        return u
      },
      rE:function(){
        return a
      },
      tB:function(){
        return o
      },
      tu:function(){
        return p
      },
      um:function(){
        return s
      },
      xC:function(){
        return h
      }
    });
    var i=n(85893);
    n(67294);
    let s=()=>(0,i.jsx)("svg",{
      width:"16",
      height:"17",
      viewBox:"0 0 16 17",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:(0,i.jsx)("path",{
        d:"M8.45898 0C8.95627 0 9.43318 0.197366 9.78481 0.54868C10.1364 0.899994 10.334 1.37648 10.334 1.87331V6.67648C9.90148 6.70978 9.48315 6.79304 9.08398 6.92126V1.87331C9.08398 1.7077 9.01814 1.54887 8.90093 1.43177C8.78372 1.31466 8.62474 1.24887 8.45898 1.24887H2.20898C2.04322 1.24887 1.88425 1.31466 1.76704 1.43177C1.64983 1.54887 1.58398 1.7077 1.58398 1.87331V14.7783C1.58398 15.123 1.86398 15.4028 2.20898 15.4028H6.48148C6.867 15.8956 7.33469 16.3184 7.86398 16.6525L2.20898 16.6516C1.7117 16.6516 1.23479 16.4543 0.883159 16.103C0.531529 15.7517 0.333984 15.2752 0.333984 14.7783V1.87331C0.333984 1.37648 0.531529 0.899994 0.883159 0.54868C1.23479 0.197366 1.7117 0 2.20898 0H8.45898ZM10.7507 7.49324C11.9662 7.49324 13.132 7.97569 13.9916 8.83446C14.8511 9.69322 15.334 10.858 15.334 12.0724C15.334 13.2869 14.8511 14.4517 13.9916 15.3104C13.132 16.1692 11.9662 16.6516 10.7507 16.6516C9.53508 16.6516 8.36929 16.1692 7.50974 15.3104C6.6502 14.4517 6.16732 13.2869 6.16732 12.0724C6.16732 10.858 6.6502 9.69322 7.50974 8.83446C8.36929 7.97569 9.53508 7.49324 10.7507 7.49324ZM10.9307 9.6488L10.8723 9.69625L10.8248 9.75453C10.7768 9.82405 10.7511 9.90652 10.7511 9.99099C10.7511 10.0755 10.7768 10.1579 10.8248 10.2274L10.8723 10.2857L12.244 11.6553L8.24565 11.6562L8.17065 11.6628C8.0874 11.678 8.01075 11.7182 7.95091 11.778C7.89106 11.8378 7.85086 11.9143 7.83565 11.9975L7.82898 12.0724L7.83565 12.1474C7.85086 12.2306 7.89106 12.3071 7.95091 12.3669C8.01075 12.4267 8.0874 12.4669 8.17065 12.4821L8.24565 12.4887L12.2457 12.4879L10.8723 13.8592L10.8248 13.9174C10.7699 13.9976 10.7448 14.0944 10.7538 14.191C10.7628 14.2877 10.8053 14.3782 10.8741 14.4469C10.9428 14.5156 11.0334 14.5581 11.1301 14.567C11.2269 14.576 11.3238 14.5509 11.404 14.4961L11.4623 14.4486L13.5707 12.3397L13.6007 12.2981L13.6357 12.2315L13.6573 12.1624L13.6657 12.1091V12.0358L13.6573 11.9825L13.6357 11.9134L13.6015 11.8468L13.5698 11.8052L11.4615 9.69625L11.404 9.6488C11.3447 9.60774 11.2757 9.58278 11.2038 9.57636C11.132 9.56994 11.0596 9.58228 10.994 9.61216L10.9307 9.6488ZM5.39732 12.9067C5.46565 13.3421 5.58482 13.7601 5.74898 14.1547L4.29315 14.1572C4.12739 14.1574 3.96833 14.0919 3.85097 13.9749C3.7336 13.858 3.66754 13.6992 3.66732 13.5336C3.6671 13.368 3.73273 13.2091 3.84979 13.0918C3.96684 12.9746 4.12572 12.9086 4.29148 12.9084L5.39815 12.9067H5.39732Z",
        fill:"#161E35"
      })
    }),
    o=()=>(0,i.jsxs)("svg",{
      width:"16",
      height:"18",
      viewBox:"0 0 16 18",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,i.jsx)("path",{
        d:"M8 18.2603C3.57647 18.2603 0 14.3919 0 9.60729C0 4.82265 3.57647 0.954224 8 0.954224C12.4235 0.954224 16 4.82265 16 9.60729C16 14.3919 12.3765 18.2603 8 18.2603ZM8 1.97223C4.09412 1.97223 0.941176 5.38256 0.941176 9.60729C0.941176 13.832 4.09412 17.2423 8 17.2423C11.9059 17.2423 15.0588 13.832 15.0588 9.60729C15.0588 5.38256 11.8588 1.97223 8 1.97223Z",
        fill:"#161E35"
      }),(0,i.jsx)("path",{
        d:"M3.3882 15.868L2.54114 15.4608C2.77643 14.85 3.52937 14.4937 4.32937 14.0865C5.12937 13.6793 6.11761 13.2212 6.11761 12.6613V11.8978C5.83526 11.6433 5.36467 11.0834 5.27055 10.269C5.03526 10.0145 4.65878 9.55638 4.65878 8.94558C4.65878 8.58927 4.79996 8.28387 4.89408 8.08027C4.79996 7.67307 4.70584 6.90956 4.70584 6.29876C4.70584 4.31364 5.97643 2.99023 7.99996 2.99023C8.56467 2.99023 9.27055 3.14294 9.64702 3.60104C10.5411 3.80464 11.2941 4.92445 11.2941 6.29876C11.2941 7.16406 11.1529 7.87667 11.0588 8.23297C11.1529 8.38567 11.247 8.64017 11.247 8.94558C11.247 9.60728 10.9176 10.0654 10.6353 10.269C10.5411 11.0834 10.1176 11.5924 9.83526 11.8469V12.6613C9.83526 13.1194 10.6823 13.4757 11.4353 13.7811C12.3294 14.1374 13.2706 14.5446 13.6 15.359L12.7058 15.7153C12.5647 15.3081 11.8117 15.0027 11.1058 14.7482C10.0706 14.341 8.89408 13.8829 8.89408 12.7122V11.3888L9.12937 11.2361C9.12937 11.2361 9.69408 10.8289 9.69408 10.0145V9.65818L9.97643 9.50548C10.0235 9.50548 10.2588 9.35278 10.2588 8.94558C10.2588 8.84377 10.1647 8.69107 10.1176 8.64017L9.92937 8.43657L10.0235 8.18207C10.0235 8.18207 10.2588 7.36766 10.2588 6.34966C10.2588 5.38255 9.74114 4.66995 9.31761 4.66995H9.03526L8.89408 4.41544C8.89408 4.21184 8.56467 4.00824 7.99996 4.00824C6.54114 4.00824 5.64702 4.87355 5.64702 6.29876C5.64702 6.96046 5.88231 8.08027 5.88231 8.08027L5.92937 8.33477L5.74114 8.58927C5.69408 8.58927 5.59996 8.74197 5.59996 8.94558C5.59996 9.20008 5.88231 9.50548 6.02349 9.60728L6.21173 9.75998V10.0145C6.21173 10.778 6.82349 11.1852 6.82349 11.2361L7.05879 11.3888V12.7122C7.05879 13.9338 5.83526 14.5446 4.70584 15.0536C4.1882 15.2572 3.48231 15.6135 3.3882 15.868V15.868Z",
        fill:"#161E35"
      })]
    }),
    r=()=>(0,i.jsxs)("svg",{
      width:"12",
      height:"12",
      viewBox:"0 0 12 12",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,i.jsx)("path",{
        d:"M6.00098 0.75C3.10176 0.75 0.750977 3.10078 0.750977 6C0.750977 8.89922 3.10176 11.25 6.00098 11.25C8.9002 11.25 11.251 8.89922 11.251 6C11.251 3.10078 8.9002 0.75 6.00098 0.75ZM6.00098 10.3594C3.59395 10.3594 1.6416 8.40703 1.6416 6C1.6416 3.59297 3.59395 1.64062 6.00098 1.64062C8.40801 1.64062 10.3604 3.59297 10.3604 6C10.3604 8.40703 8.40801 10.3594 6.00098 10.3594Z",
        fill:"#161E35",
        fillOpacity:"0.6"
      }),(0,i.jsx)("path",{
        d:"M5.43848 3.9375C5.43848 4.08668 5.49774 4.22976 5.60323 4.33525C5.70872 4.44074 5.85179 4.5 6.00098 4.5C6.15016 4.5 6.29323 4.44074 6.39872 4.33525C6.50421 4.22976 6.56348 4.08668 6.56348 3.9375C6.56348 3.78832 6.50421 3.64524 6.39872 3.53975C6.29323 3.43426 6.15016 3.375 6.00098 3.375C5.85179 3.375 5.70872 3.43426 5.60323 3.53975C5.49774 3.64524 5.43848 3.78832 5.43848 3.9375ZM6.28223 5.25H5.71973C5.66816 5.25 5.62598 5.29219 5.62598 5.34375V8.53125C5.62598 8.58281 5.66816 8.625 5.71973 8.625H6.28223C6.33379 8.625 6.37598 8.58281 6.37598 8.53125V5.34375C6.37598 5.29219 6.33379 5.25 6.28223 5.25Z",
        fill:"#161E35",
        fillOpacity:"0.6"
      })]
    }),
    a=()=>(0,i.jsxs)("svg",{
      width:"18",
      height:"15",
      viewBox:"0 0 18 15",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,i.jsx)("path",{
        d:"M3.70561 0C3.00358 0 2.3303 0.263391 1.83389 0.732232C1.33748 1.20107 1.05859 1.83695 1.05859 2.49999V5.33698C1.38682 5.18898 1.74364 5.08598 2.1174 5.03498V2.49999C2.1174 2.10217 2.28473 1.72064 2.58258 1.43933C2.88043 1.15803 3.28439 0.999998 3.70561 0.999998H11.1172C11.5385 0.999998 11.9425 1.15803 12.2403 1.43933C12.5381 1.72064 12.7055 2.10217 12.7055 2.49999V9.49999C12.7055 9.89776 12.5381 10.2793 12.2403 10.5606C11.9425 10.8419 11.5385 10.9999 11.1172 10.9999H10.5879V12H11.1172C11.8193 12 12.4926 11.7366 12.989 11.2678C13.4854 10.7989 13.7643 10.163 13.7643 9.49999V8.5L16.3054 10.3C16.4627 10.4114 16.6498 10.4792 16.8456 10.4959C17.0415 10.5126 17.2384 10.4774 17.4142 10.3944C17.5901 10.3113 17.738 10.1836 17.8414 10.0257C17.9447 9.86775 17.9995 9.68566 17.9995 9.49999V2.49999C17.9995 2.31428 17.9447 2.13224 17.8414 1.97426C17.738 1.81629 17.5901 1.68862 17.4142 1.60557C17.2384 1.52251 17.0415 1.48736 16.8456 1.50404C16.6498 1.52071 16.4627 1.58857 16.3054 1.69999L13.7643 3.49999V2.49999C13.7643 1.83695 13.4854 1.20107 12.989 0.732232C12.4926 0.263391 11.8193 0 11.1172 0H3.70561ZM13.7643 4.74998L16.9407 2.49999V9.49999L13.7643 7.24997V4.74998Z",
        fill:"#161E35"
      }),(0,i.jsx)("path",{
        d:"M0 8.50001C0 7.83694 0.278881 7.20106 0.775295 6.73223C1.27171 6.26339 1.94498 6 2.64702 6H6.88225C7.58426 6 8.25753 6.26339 8.754 6.73223C9.2504 7.20106 9.52929 7.83694 9.52929 8.50001V12.4999C9.52929 13.163 9.2504 13.7989 8.754 14.2677C8.25753 14.7366 7.58426 14.9999 6.88225 14.9999H2.64702C1.94498 14.9999 1.27171 14.7366 0.775295 14.2677C0.278881 13.7989 0 13.163 0 12.4999V8.50001ZM4.2564 8.53402C4.18775 8.48947 4.10797 8.46262 4.02496 8.45615C3.94196 8.44962 3.8586 8.46375 3.78312 8.49699C3.72114 8.5225 3.66502 8.55918 3.61794 8.605C3.51931 8.70044 3.4642 8.82863 3.46442 8.96201V12.037C3.46371 12.1033 3.47691 12.169 3.50327 12.2305C3.52962 12.2919 3.56859 12.3479 3.61794 12.3949C3.66661 12.4404 3.7232 12.4777 3.78523 12.505C3.89266 12.5515 4.01455 12.5586 4.12723 12.525C4.17605 12.5098 4.22238 12.4883 4.26487 12.461L6.69589 10.894C6.76983 10.8479 6.82941 10.784 6.86848 10.709C6.90871 10.6334 6.92939 10.5498 6.92884 10.4651C6.92829 10.3805 6.90651 10.2972 6.86531 10.222C6.82361 10.1479 6.76234 10.0851 6.68743 10.04L4.2564 8.53402Z",
        fill:"#161E35"
      })]
    }),
    l=()=>(0,i.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"20",
      height:"18",
      fill:"none",
      viewBox:"0 0 20 18",
      children:(0,i.jsx)("path",{
        fill:"#161E35",
        d:"M11.584 16.064a.936.936 0 01-.5-.141L7.75 13.768a.745.745 0 01-.24-.25.62.62 0 01-.085-.315v-2.31l-4-6.513a.62.62 0 01.029-.692.79.79 0 01.304-.25.953.953 0 01.409-.09h11.666c.145 0 .287.033.413.093.126.061.23.149.304.254.073.107.112.23.112.353a.626.626 0 01-.112.353l-4.167 6.506v4.45a.628.628 0 01-.122.374.799.799 0 01-.336.262.957.957 0 01-.341.071zm-2.5-3.207l1.666 1.08v-3.213c0-.108.028-.214.084-.311l3.583-5.651H5.534l3.441 5.65c.06.101.092.213.092.326l.016 2.119z"
      })
    }),
    c=()=>(0,i.jsxs)("svg",{
      width:"20",
      height:"18",
      viewBox:"0 0 20 18",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,i.jsx)("path",{
        d:"M11.5835 16.0641C11.4032 16.0641 11.2277 16.0145 11.0835 15.9228L7.75016 13.7683C7.6482 13.7018 7.56579 13.6161 7.50941 13.5181C7.45302 13.42 7.42419 13.3122 7.42516 13.2032V10.8932L3.42519 4.38017C3.35931 4.27238 3.32732 4.15202 3.33229 4.0307C3.33726 3.90938 3.37903 3.79119 3.45357 3.68754C3.52811 3.58388 3.6329 3.49826 3.75784 3.43893C3.88278 3.3796 4.02364 3.34856 4.16685 3.34882H15.8334C15.9781 3.34884 16.1202 3.38076 16.2458 3.44145C16.3715 3.50214 16.4763 3.58951 16.5501 3.69496C16.6232 3.80234 16.6617 3.92416 16.6617 4.04816C16.6617 4.17216 16.6232 4.29397 16.5501 4.40136L12.3835 10.9074V15.3577C12.3845 15.4894 12.3422 15.6186 12.2612 15.731C12.1802 15.8433 12.0638 15.9342 11.9251 15.9935C11.8185 16.0374 11.702 16.0614 11.5835 16.0641ZM9.08348 12.857L10.7501 13.9378V10.7237C10.7496 10.6161 10.7781 10.5097 10.8335 10.4129L14.4168 4.76163H5.53351L8.97515 10.4129C9.03592 10.5134 9.06735 10.6248 9.06682 10.7378L9.08348 12.857Z",
        fill:"#5D97FF"
      }),(0,i.jsx)("path",{
        d:"M7 3.49004C7 5.12863 5.433 6.45697 3.5 6.45697C1.567 6.45697 0 5.12863 0 3.49004C0 1.85144 1.567 0.523102 3.5 0.523102C5.433 0.523102 7 1.85144 7 3.49004Z",
        fill:"#32BF8A"
      })]
    }),
    u=()=>(0,i.jsx)("svg",{
      width:"7",
      height:"12",
      viewBox:"0 0 7 12",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:(0,i.jsx)("path",{
        d:"M5.66667 1.33325L1 5.99992L5.66667 10.6666",
        stroke:"#161E35",
        strokeOpacity:"0.6",
        strokeWidth:"1.16667",
        strokeLinecap:"round",
        strokeLinejoin:"round"
      })
    }),
    d=()=>(0,i.jsxs)("svg",{
      width:"13",
      height:"12",
      viewBox:"0 0 13 12",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M7.11655 0.0128137C8.50583 0.0982387 9.80828 0.781639 10.7634 1.72131C11.8922 2.91726 12.5 4.36949 12.5 6.07799C12.5 7.44479 11.979 8.72616 11.1107 9.83669C10.2424 10.8618 9.02681 11.6306 7.63753 11.8869C6.24825 12.1432 4.85898 11.9723 3.64336 11.2889C2.42774 10.6055 1.47261 9.58041 0.951636 8.29904C0.430657 7.01766 0.343827 5.56544 0.777976 4.28406C1.21213 2.91726 1.99359 1.80674 3.20921 1.03791C4.338 0.269089 5.72728 -0.0726112 7.11655 0.0128137ZM7.5507 11.0326C8.67949 10.7764 9.72145 10.1784 10.5029 9.23871C11.1976 8.29904 11.6317 7.18851 11.5449 5.99256C11.5449 4.62576 11.0239 3.25896 10.0688 2.31929C9.20047 1.46504 8.15851 0.952488 6.94289 0.867063C5.8141 0.781639 4.59849 1.03791 3.64336 1.72131C2.68823 2.40471 1.99359 3.34439 1.64627 4.54034C1.29895 5.65086 1.29895 6.84681 1.81993 7.95734C2.34091 9.06786 3.12238 9.92211 4.16434 10.5201C5.2063 11.1181 6.42191 11.2889 7.5507 11.0326Z",
        fill:"#5D97FF"
      }),(0,i.jsx)("path",{
        d:"M5.07556 3.00244L9.63413 5.97523L5.07556 8.98219V3.00244ZM5.83532 7.58122L8.26308 5.98036L5.83532 4.39231V7.58037V7.58122Z",
        fill:"#5D97FF"
      })]
    }),
    p=()=>(0,i.jsx)("svg",{
      width:"36",
      height:"36",
      viewBox:"0 0 36 36",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:(0,i.jsx)("path",{
        d:"M18.18 25.245C18.18 25.443 18.333 25.605 18.5175 25.605H26.8425C27.027 25.605 27.18 25.443 27.18 25.245V23.085C27.18 22.887 27.027 22.725 26.8425 22.725H18.5175C18.333 22.725 18.18 22.887 18.18 23.085V25.245ZM9.4095 25.5195L18.0495 18.2745C18.2205 18.1305 18.2205 17.865 18.0495 17.721L9.4095 10.4805C9.35734 10.4361 9.29355 10.4077 9.2257 10.3985C9.15786 10.3893 9.0888 10.3998 9.02673 10.4287C8.96466 10.4576 8.91219 10.5037 8.87555 10.5616C8.8389 10.6194 8.81962 10.6865 8.82 10.755V13.5765C8.82 13.6845 8.865 13.7835 8.9505 13.851L13.8915 18L8.9505 22.149C8.91028 22.1827 8.8778 22.2246 8.85527 22.272C8.83275 22.3194 8.82072 22.371 8.82 22.4235V25.245C8.82 25.551 9.1755 25.7175 9.4095 25.5195ZM34.56 0H1.44C0.6435 0 0 0.6435 0 1.44V34.56C0 35.3565 0.6435 36 1.44 36H34.56C35.3565 36 36 35.3565 36 34.56V1.44C36 0.6435 35.3565 0 34.56 0ZM32.76 32.76H3.24V3.24H32.76V32.76Z",
        fill:"#5D97FF"
      })
    }),
    C=()=>(0,i.jsxs)("svg",{
      width:"17",
      height:"23",
      viewBox:"0 0 17 23",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,i.jsx)("path",{
        d:"M14.5464 14.7629L13.3797 18.6146C13.0774 19.5938 12.4306 20.4212 11.5664 20.9339C10.7021 21.4468 9.68293 21.608 8.70914 21.3861L7.19047 21.0282C6.70173 20.917 6.23991 20.7052 5.83283 20.4052C5.42576 20.1052 5.08188 19.7234 4.82193 19.2827L1.45111 13.5618C1.31075 13.3142 1.27141 13.0194 1.34172 12.742C1.41202 12.4646 1.58623 12.2272 1.82616 12.0819C2.14564 11.878 2.5253 11.7984 2.89672 11.8573C3.26813 11.9163 3.60691 12.11 3.85198 12.4036L5.67919 14.6134L7.38262 7.89614C7.47447 7.53965 7.69669 7.23361 8.0027 7.04218C8.30871 6.85075 8.67476 6.78876 9.02415 6.86922C9.19411 6.90804 9.35474 6.9818 9.49636 7.08611C9.638 7.19041 9.75773 7.3231 9.84839 7.47623C9.93905 7.62935 9.99876 7.79975 10.024 7.97723C10.0492 8.15471 10.0393 8.33559 9.99504 8.50906L9.55347 10.2564C9.76963 10.195 9.99721 10.1898 10.2158 10.2412C10.5294 10.3126 10.8059 10.5016 10.9917 10.7714C11.1775 11.0413 11.2592 11.3727 11.2209 11.7012C11.4408 11.6363 11.673 11.6294 11.8961 11.6812C12.2099 11.7526 12.4866 11.9417 12.6724 12.2118C12.8582 12.4818 12.9397 12.8135 12.9012 13.1421C13.1209 13.0759 13.3533 13.0687 13.5765 13.1212C13.7464 13.1599 13.9071 13.2337 14.0487 13.338C14.1903 13.4424 14.31 13.575 14.4008 13.7281C14.4914 13.8813 14.5511 14.0516 14.5762 14.2292C14.6015 14.4067 14.5917 14.5875 14.5473 14.7611L14.5464 14.7629Z",
        stroke:"#FF0000",
        strokeWidth:"0.8"
      }),(0,i.jsx)("path",{
        d:"M15.2626 9.65486L13.5925 9.23418C13.5483 9.22298 13.5064 9.20293 13.4697 9.17518C13.4326 9.14741 13.4013 9.1125 13.3773 9.0724C13.3295 8.99106 13.3148 8.89354 13.3367 8.80114C13.3475 8.7554 13.367 8.71234 13.3942 8.67444C13.4213 8.63653 13.4554 8.60456 13.4945 8.58035C13.5333 8.55543 13.5768 8.53921 13.622 8.53275C13.667 8.52553 13.7128 8.52747 13.757 8.53847L15.4271 8.95914C15.4715 8.97031 15.5133 8.99044 15.5501 9.01839C15.5868 9.04632 15.6179 9.0815 15.6415 9.12188C15.6653 9.16193 15.681 9.20644 15.688 9.25283C15.695 9.29923 15.693 9.34659 15.6821 9.39217C15.6714 9.43787 15.6521 9.48093 15.6251 9.51884C15.5981 9.55674 15.5641 9.58875 15.525 9.61297C15.4694 9.64778 15.4054 9.66592 15.3403 9.66532C15.3142 9.66485 15.288 9.66133 15.2626 9.65486ZM11.3386 9.24466C11.2911 9.23599 11.246 9.21683 11.2064 9.18849C11.1666 9.16021 11.1327 9.12396 11.1067 9.0819C11.0804 9.04006 11.0628 8.99307 11.055 8.9439C11.0472 8.89515 11.049 8.8453 11.0605 8.79734C11.0713 8.74853 11.0917 8.70253 11.1205 8.6622C11.3514 8.31748 11.497 7.91984 11.5446 7.50392C11.5936 7.08822 11.5435 6.66647 11.3986 6.27523C11.2528 5.88373 11.0177 5.53412 10.7132 5.25592C10.4077 4.97978 10.042 4.78387 9.64714 4.68489C9.25276 4.58458 8.84064 4.58458 8.44625 4.68489C8.05164 4.78585 7.68674 4.98411 7.383 5.26259C7.07887 5.54092 6.84519 5.89145 6.70218 6.2838C6.55833 6.67597 6.50916 7.09831 6.55897 7.5144C6.56927 7.56363 6.56927 7.61457 6.55897 7.66382C6.54777 7.71249 6.52737 7.75843 6.49893 7.79898C6.46961 7.838 6.43282 7.87038 6.39084 7.89414C6.34865 7.91888 6.30227 7.93504 6.25416 7.94173C6.20557 7.94786 6.15623 7.94398 6.1091 7.93031C6.06248 7.91603 6.01894 7.89277 5.98071 7.86179C5.94304 7.82911 5.91165 7.78939 5.8883 7.74472C5.86621 7.70058 5.85274 7.6524 5.84861 7.6029C5.78479 7.06739 5.84822 6.52391 6.03337 6.01922C6.21739 5.51435 6.51797 5.06325 6.90911 4.70488C7.2996 4.34618 7.76873 4.09044 8.27626 3.95966C8.78477 3.83089 9.31601 3.83089 9.82452 3.95966C10.3327 4.08787 10.8032 4.34058 11.1963 4.69631C11.5884 5.05332 11.8905 5.50304 12.0767 6.00684C12.2621 6.51146 12.3255 7.05501 12.2614 7.59053C12.1991 8.12552 12.0118 8.63696 11.7155 9.08096C11.6895 9.12274 11.6555 9.15867 11.6157 9.1866C11.5762 9.21479 11.5316 9.23454 11.4845 9.24466C11.4608 9.24962 11.4367 9.25217 11.4125 9.25227C11.3876 9.25239 11.3629 9.24984 11.3386 9.24466ZM4.51563 6.59027L2.84547 6.16959C2.75626 6.14658 2.67927 6.08852 2.6311 6.00781C2.60725 5.96761 2.59146 5.9229 2.58464 5.87632C2.57782 5.82974 2.58013 5.78222 2.59141 5.73655C2.60204 5.69086 2.6214 5.6478 2.64835 5.60989C2.67531 5.57198 2.70934 5.53998 2.74843 5.51576C2.78732 5.49129 2.83055 5.47501 2.87557 5.46782C2.9206 5.46063 2.96654 5.46268 3.01077 5.47388L4.68099 5.89455C4.72538 5.90572 4.76718 5.92585 4.80396 5.9538C4.84075 5.98173 4.8718 6.01691 4.8953 6.05729C4.91904 6.09736 4.93483 6.14187 4.94182 6.18826C4.94879 6.23465 4.94681 6.28199 4.93595 6.32759C4.92531 6.37328 4.90591 6.41634 4.87894 6.45425C4.85199 6.49216 4.81797 6.52416 4.77887 6.54838C4.72318 6.58315 4.65921 6.60128 4.5941 6.60074C4.56763 6.60032 4.54132 6.5968 4.51563 6.59027ZM12.932 5.26546C12.8886 5.25554 12.8478 5.23641 12.812 5.20929C12.7763 5.18231 12.7463 5.14796 12.7242 5.1084C12.7021 5.06933 12.6882 5.02586 12.6836 4.98088C12.6778 4.93546 12.6819 4.88931 12.6956 4.84573C12.7081 4.80168 12.7295 4.76084 12.7584 4.72581C12.7872 4.69138 12.8223 4.66322 12.8618 4.64301L13.8142 4.07198C13.8634 4.04159 13.9195 4.02516 13.9768 4.02439C14.0338 4.02383 14.0899 4.03893 14.1393 4.06816C14.1889 4.09673 14.2301 4.13849 14.2586 4.18904C14.3011 4.26583 14.3126 4.3567 14.2909 4.4422C14.2802 4.48465 14.2615 4.52449 14.2358 4.55945C14.2101 4.5944 14.1779 4.62379 14.1412 4.64587L13.1842 5.2169C13.148 5.24315 13.1068 5.26101 13.0632 5.26926C13.044 5.27301 13.0246 5.27492 13.005 5.27496C12.9808 5.27455 12.9566 5.27135 12.933 5.26546H12.932ZM5.93358 3.56661C5.89359 3.55233 5.85663 3.53037 5.82459 3.50189C5.79211 3.47353 5.76569 3.43853 5.74702 3.39911L5.26478 2.38835C5.23878 2.33642 5.22699 2.2782 5.23061 2.21991C5.23477 2.16111 5.25354 2.10441 5.28513 2.05526C5.31739 2.00688 5.36087 1.96763 5.41165 1.94104C5.48829 1.90159 5.57703 1.89508 5.65832 1.92296C5.73858 1.95213 5.80479 2.01217 5.84308 2.09047L6.32436 3.10311C6.36116 3.18262 6.36646 3.27375 6.33914 3.35722C6.31128 3.44049 6.25246 3.50896 6.17562 3.54757C6.13764 3.56717 6.0961 3.57852 6.05367 3.58087H6.02599C5.99468 3.58097 5.96349 3.57615 5.93358 3.56661ZM9.71458 2.54159C9.66673 2.54152 9.61941 2.53163 9.57531 2.51252C9.53122 2.4934 9.49124 2.46543 9.45775 2.43024C9.39039 2.35925 9.35258 2.26396 9.35243 2.1647L9.41987 1.60126C9.44268 1.50347 9.50215 1.41897 9.58524 1.36619C9.66803 1.3137 9.76711 1.29566 9.86235 1.31574C9.9582 1.31841 10.0493 1.35938 10.1164 1.42996C10.1499 1.4647 10.1764 1.50601 10.1942 1.55145C10.2119 1.5969 10.2207 1.64556 10.2199 1.69454L10.1533 2.25796C10.1296 2.35404 10.0716 2.43731 9.99079 2.49114C9.93117 2.5294 9.86239 2.54984 9.79215 2.55015C9.76545 2.55041 9.7388 2.54754 9.71271 2.54159H9.71458Z",
        fill:"#FF0000",
        stroke:"#FF0000",
        strokeWidth:"0.3"
      })]
    }),
    h=()=>(0,i.jsxs)("svg",{
      width:"34",
      height:"34",
      viewBox:"0 0 33 32",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,i.jsx)("path",{
        d:"M17.0291 15.9725L21.0791 11.9225C21.1701 11.8162 21.2176 11.6795 21.2122 11.5397C21.2068 11.3998 21.1489 11.2672 21.0499 11.1683C20.951 11.0693 20.8184 11.0114 20.6785 11.006C20.5387 11.0006 20.402 11.0481 20.2957 11.1391L16.2457 15.1891L12.1957 11.1336C12.0894 11.0426 11.9527 10.995 11.8129 11.0004C11.6731 11.0058 11.5405 11.0638 11.4415 11.1627C11.3426 11.2617 11.2846 11.3943 11.2792 11.5341C11.2738 11.6739 11.3214 11.8106 11.4124 11.9169L15.4624 15.9725L11.4068 20.0225C11.3487 20.0723 11.3014 20.1336 11.2681 20.2025C11.2348 20.2714 11.216 20.3465 11.2131 20.423C11.2101 20.4995 11.223 20.5758 11.2509 20.6471C11.2789 20.7184 11.3212 20.7831 11.3754 20.8373C11.4295 20.8914 11.4943 20.9338 11.5655 20.9617C11.6368 20.9896 11.7131 21.0025 11.7896 20.9996C11.8662 20.9966 11.9412 20.9779 12.0102 20.9445C12.0791 20.9112 12.1404 20.864 12.1902 20.8058L16.2457 16.7558L20.2957 20.8058C20.402 20.8968 20.5387 20.9444 20.6785 20.939C20.8184 20.9336 20.951 20.8756 21.0499 20.7767C21.1489 20.6777 21.2068 20.5451 21.2122 20.4053C21.2176 20.2655 21.1701 20.1288 21.0791 20.0225L17.0291 15.9725Z",
        fill:"black"
      }),(0,i.jsx)("rect",{
        x:"0.712646",
        y:"0.5",
        width:"31",
        height:"31",
        rx:"4.5",
        stroke:"#C0CAD9"
      })]
    }),
    v=()=>(0,i.jsx)("svg",{
      width:"14",
      height:"14",
      viewBox:"0 0 14 14",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:(0,i.jsx)("path",{
        d:"M12.25 9.625V12.25H1.75V9.625H0V12.25C0 13.2125 0.7875 14 1.75 14H12.25C13.2125 14 14 13.2125 14 12.25V9.625H12.25ZM11.375 6.125L10.1413 4.89125L7.875 7.14875V0H6.125V7.14875L3.85875 4.89125L2.625 6.125L7 10.5L11.375 6.125Z",
        fill:"#454B5D"
      })
    }),
    f=()=>(0,i.jsxs)("svg",{
      width:"17",
      height:"16",
      viewBox:"0 0 17 16",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M11.8933 1.67036C11.9439 1.47133 12.1186 1.33252 12.3186 1.33252C12.5184 1.33252 12.6932 1.47133 12.7438 1.67036C12.9374 2.43137 13.1498 2.89883 13.4677 3.24506C13.7872 3.59303 14.2552 3.86442 15.053 4.14C15.232 4.20186 15.3527 4.37454 15.3527 4.56895C15.3527 4.76336 15.232 4.93604 15.053 4.9979C14.2552 5.27348 13.7872 5.54487 13.4677 5.89285C13.1498 6.23908 12.9374 6.70653 12.7438 7.46757C12.6932 7.66659 12.5184 7.80535 12.3186 7.80535C12.1186 7.80535 11.9439 7.66659 11.8933 7.46757C11.6997 6.70653 11.4872 6.23908 11.1694 5.89285C10.85 5.54487 10.3818 5.27348 9.58415 4.9979C9.40509 4.93604 9.28441 4.76336 9.28441 4.56895C9.28441 4.37454 9.40509 4.20186 9.58415 4.14C10.3818 3.86442 10.85 3.59303 11.1694 3.24506C11.4872 2.89883 11.6997 2.43137 11.8933 1.67036ZM6.26158 4.19056C6.31207 3.99132 6.48689 3.85229 6.68693 3.85229C6.88697 3.85229 7.06179 3.99132 7.11228 4.19056C7.46127 5.56785 7.8566 6.46711 8.47781 7.1465C9.10055 7.82755 9.9922 8.33347 11.4269 8.83112C11.6057 8.89314 11.7261 9.06567 11.7261 9.25987C11.7261 9.45413 11.6057 9.62667 11.4269 9.68869C11.4269 9.68869 9.10055 10.6923 8.47781 11.3732C7.8566 12.0527 7.46127 12.952 7.11228 14.3292C7.06179 14.5285 6.88697 14.6675 6.68693 14.6675C6.48689 14.6675 6.31207 14.5285 6.26158 14.3292C5.91257 12.952 5.51729 12.0527 4.89603 11.3732C4.27333 10.6923 3.38164 10.1863 1.94692 9.68869C1.76811 9.62667 1.64771 9.45413 1.64771 9.25987C1.64771 9.06567 1.76811 8.89314 1.94692 8.83112C3.38164 8.33347 4.27333 7.82755 4.89603 7.1465C5.51729 6.46711 5.91257 5.56785 6.26158 4.19056Z",
        fill:"url(#paint0_linear_130_1194)"
      }),(0,i.jsx)("defs",{
        children:(0,i.jsxs)("linearGradient",{
          id:"paint0_linear_130_1194",
          x1:"20.8305",
          y1:"-0.818216",
          x2:"8.50019",
          y2:"17.7093",
          gradientUnits:"userSpaceOnUse",
          children:[(0,i.jsx)("stop",{
            stopColor:"#CC78EC"
          }),(0,i.jsx)("stop",{
            offset:"1",
            stopColor:"#808AFF"
          })]
        })
      })]
    })
  },
  28166:function(e,t,n){
    n.d(t,{
      Aj:function(){
        return x
      },
      Kf:function(){
        return g
      }
    });
    var i=n(67294),
    s=n(59704),
    o=n.n(s),
    r=n(13979),
    a=n(14416),
    l=n(88767),
    c=n(38014),
    u=n(47639),
    d=n(55137),
    p=n(30663),
    C=n(12616),
    h=n(48194),
    v=n(96820);
    let f=["rage_tap","rage_quit","session_crashed","ui_freeze"],
    m=["custom_label","user_custom_label"],
    g=e=>(0,l.useQuery)(["customLabels",e],()=>c.Z.getNewCustomLabel(e),{
      enabled:!!e
    }),
    x=()=>{
      let e=(0,l.useQueryClient)(),
      {
        currentAppReducer:t
      }=(0,a.v9)(e=>e),
      {
        _id:n
      }=t,
      s=(0,i.useMemo)(()=>["customLabels",n],[n]),
      o=(0,l.useMutation)({
        mutationFn:e=>(0,h.ns)(e),
        onSuccess:()=>{
          e.invalidateQueries(s)
        },
        onError:e=>{
          r.l.error(e)
        }
      }),
      c=(0,l.useMutation)({
        mutationFn:e=>(0,h.Um)(e),
        onSuccess:()=>{
          e.invalidateQueries(s)
        },
        onError:(e,t)=>{
          var n;
          r.l.error(e,{
            source:1,
            payload:t,
            errorMessage:null==e?void 0:null===(n=e.response)||void 0===n?void 0:n.data
          })
        }
      }),
      u=(0,l.useMutation)({
        mutationFn:e=>(0,v.yT)(e),
        onSuccess:()=>{
          e.invalidateQueries(s)
        },
        onError:(e,t)=>{
          var n;
          r.l.error(e,{
            source:2,
            payload:t,
            errorMessage:null==e?void 0:null===(n=e.response)||void 0===n?void 0:n.data
          })
        }
      }),
      d=(0,l.useMutation)({
        mutationFn:e=>(0,v.e7)(e),
        onSuccess:()=>{
          e.invalidateQueries(s)
        },
        onError:e=>{
          r.l.error(e)
        }
      }),
      p=(0,l.useMutation)({
        mutationFn:e=>(0,v.qr)(e),
        onSuccess:()=>{
          e.invalidateQueries(s)
        },
        onError:e=>{
          r.l.error(e)
        }
      }),
      C=(0,l.useMutation)({
        mutationFn:e=>(0,v.pT)(e),
        onSuccess:()=>{
          e.invalidateQueries(s)
        },
        onError:(e,t)=>{
          var n;
          r.l.error(e,{
            source:3,
            payload:t,
            errorMessage:null==e?void 0:null===(n=e.response)||void 0===n?void 0:n.data
          })
        }
      });
      return{
        addUserLabel:o.mutateAsync,
        markUserLabel:c.mutateAsync,
        addSessionLabel:u.mutateAsync,
        markSessionLabel:C.mutateAsync,
        updateLabel:d.mutateAsync,
        deleteLabel:p.mutateAsync
      }
    };
    t.ZP=()=>{
      let e=(0,a.I0)(),
      {
        appFilter:t,
        currentAppReducer:n
      }=(0,a.v9)(e=>e),
      {
        session:s
      }=t,
      r=s.segment,
      {
        _id:l
      }=n,
      {
        data:c
      }=g(l),
      h=(0,i.useMemo)(()=>["customLabels",l],[l]),
      [v,x]=(0,i.useState)({
        sessionLabels:[],
        userLabels:[]
      }),
      [b,w]=(0,i.useState)({
        sessionLabels:"",
        userLabels:""
      }),
      _=(0,i.useMemo)(()=>(null==c?void 0:c.data)||[],[c]),
      y=(0,i.useMemo)(()=>_.filter(e=>"session"===e.labelType),[_]),
      L=(0,i.useMemo)(()=>_.filter(e=>"user"===e.labelType),[_]),
      k=(0,i.useMemo)(()=>y.filter(e=>e.name.toLowerCase().indexOf(b.sessionLabels.toLowerCase())>=0),[y,b.sessionLabels]),
      M=(0,i.useMemo)(()=>L.filter(e=>e.name.toLowerCase().indexOf(b.userLabels.toLowerCase())>=0),[L,b.userLabels]),
      S=(0,i.useMemo)(()=>(null==c?void 0:c.data)||[],[null==c?void 0:c.data]),
      j=(0,i.useMemo)(()=>null==S?void 0:S.filter(e=>"session"===e.labelType),[S]),
      F=(0,i.useMemo)(()=>null==j?void 0:j.filter(e=>e.name.toLowerCase().indexOf(b.sessionLabels.toLowerCase())>=0),[j,b.sessionLabels]),
      I=(0,i.useCallback)(e=>{
        let t=_.find(t=>t.name===e);
        return null==t?void 0:t.labelType
      },[_]),
      T=(0,i.useCallback)(e=>{
        let t=e.replace(/\s+/g," ").trim();
        return o()(_,e=>e.name.toLowerCase()===t.toLowerCase())
      },[_]),
      V=(0,i.useCallback)((e,t,n)=>(null==e?void 0:e.includes(t.attribute||t.name))&&!(null==e?void 0:e.includes(n.attribute||n.name))?-1:(null==e?void 0:e.includes(n.attribute||n.name))&&!(null==e?void 0:e.includes(t.attribute||t.name))?1:0,[]),
      Z=()=>{
        w({
          sessionLabels:"",
          userLabels:""
        })
      },
      D=(0,i.useCallback)(()=>{
        null==k||k.sort((e,t)=>V(v.sessionLabels,e,t)),
        null==M||M.sort((e,t)=>V(v.userLabels,e,t)),
        null==F||F.sort((e,t)=>V(v.sessionLabels,e,t))
      },[V,k,M,F,v.sessionLabels,v.userLabels]),
      E=i.useCallback((t,n,i)=>{
        e((0,u.vT)([]));
        let s=t.filter(e=>!f.includes(e)),
        o=r||[];
        if(!t.length&&!n.length)return e((0,d.Yb)([],"session-filter")),
        e((0,C.Tj)()),
        null;
        let a=o.filter(e=>!m.includes(e.attribute)),
        l=[],
        c=[];
        s.forEach(e=>{
          l=[...l,{
            attribute:"custom_label",
            operator:"has_any",
            value:[e],
            table:"session"
          }]
        }),
        n&&n.length&&n.forEach(e=>{
          c=[...c,{
            attribute:"user_custom_label",
            operator:"has_any",
            value:[e],
            table:"appuser"
          }]
        });
        let h=[...a,...l,...c];
        return e((0,p.CW)(null,{
          eventName:"apply_quick_filter",
          track_type:"event",
          eventProperty:{
            type:"custom_label",
            featureFlagQuickbar:!0,
            oldSetting:o,
            newSetting:h
          }
        })),
        e((0,d.Yb)(h.length>0?h:void 0,"session-filter")),
        e((0,C.Tj)()),
        Z(),
        "function"==typeof i&&i(),
        null
      },[e,r]);
      return(0,i.useMemo)(()=>({
        customLabels:_,
        handleLabel:E,
        sessionSegment:r,
        selectedLabels:v,
        setSelectedLabels:x,
        filteredSessionLabels:k,
        filteredUserLabels:M,
        compareLabels:V,
        labelSearch:b,
        setLabelSearch:w,
        resetSearch:Z,
        sortLabels:D,
        megaFilterCustomLabels:S,
        megaFilterSessionLabels:j,
        megaFilterUserLabels:L,
        sessionLabels:y,
        userLabels:L,
        megaFilteredSessionLabels:F,
        getLabelTypeFromValue:I,
        customLabelQueryKey:h,
        checkExistingLabel:T
      }),[_,E,r,v,k,M,D,S,y,L,F,h])
    }
  },
  40980:function(e,t,n){
    var i=n(98777);
    class s{
      static async fetchIssueBox(e,t){
        return await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com","/").concat(t),
          data:e,
          withCredentials:!0
        })
      }
      static async fetchIssueSession(e,t){
        return await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com","/").concat(t),
          data:e,
          withCredentials:!0,
          validateStatus:e=>e>=200&&e<401
        })
      }
      static async fetchIssueDetailStackTrace(e,t){
        return await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com","/").concat(t),
          data:e,
          withCredentials:!0,
          validateStatus:e=>e>=200&&e<401
        })
      }
      static async fetchIssueGraph(e,t){
        return await i.be.post("".concat("https://pythonapi-prod.uxcam.com","/").concat(t),e,{
          withCredentials:!0
        })
      }
      static async fetchDetailIssueGraph(e,t){
        return await i.be.post("".concat("https://pythonapi-prod.uxcam.com","/").concat(t),e,{
          withCredentials:!0
        })
      }
      static async fetchIssueTable(e,t){
        return await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com","/").concat(t),
          data:e,
          withCredentials:!0
        })
      }
      static async fetchIssueDetailBox(e,t){
        return await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com","/").concat(t),
          data:e,
          withCredentials:!0
        })
      }
      static async fetchIssueDetailTable(e,t){
        return await (0,i.be)({
          method:"POST",
          url:"".concat("https://pythonapi-prod.uxcam.com","/").concat(t),
          data:e,
          withCredentials:!0
        })
      }
      static async fetchSessionIssueGraph(e){
        return await i.be.post("".concat("https://pythonapi-prod.uxcam.com","/sessions"),e,{
          withCredentials:!0
        })
      }
    }
    t.Z=s
  },
  28785:function(e,t,n){
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsxs)("svg",{
      width:25,
      height:25,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        x:.238,
        y:.393,
        width:24,
        height:24,
        rx:12,
        fill:"#F3F4F5"
      }),(0,i.jsx)("circle",{
        cx:6.764,
        cy:12.393,
        r:2,
        fill:"#161E35"
      }),(0,i.jsx)("circle",{
        cx:12.239,
        cy:12.393,
        r:2,
        fill:"#161E35"
      }),(0,i.jsx)("circle",{
        cx:17.713,
        cy:12.393,
        r:2,
        fill:"#161E35"
      })]
    })
  },
  55283:function(e,t,n){
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsxs)("svg",{
      viewBox:"0 0 12 12",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      style:{
        maxWidth:"100%",
        height:"auto"
      },
      ...e,
      children:[(0,i.jsx)("rect",{
        width:12,
        height:12,
        rx:6,
        fill:"#5D97FF"
      }),(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M9.06 3.28a.847.847 0 0 1-.024 1.198c-.315.303-.99.995-1.624 1.783-.64.793-1.413 1.842-1.66 2.286a.847.847 0 0 1-1.426.084c-.08-.11-.27-.327-.501-.567a16.962 16.962 0 0 0-.809-.783.847.847 0 0 1 1.069-1.315c.164.133.62.577.824.784.3-.416.843-1.13 1.183-1.552a22.78 22.78 0 0 1 1.771-1.942.847.847 0 0 1 1.198.024Z",
        fill:"#fff"
      })]
    })
  }
}]);