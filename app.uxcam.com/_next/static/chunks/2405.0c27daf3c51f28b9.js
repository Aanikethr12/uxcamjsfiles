"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2405],{
  38565:function(e,t,n){
    n.d(t,{
      K2:function(){
        return l
      },
      bB:function(){
        return o
      },
      ip:function(){
        return r
      }
    });
    var i=n(88767),
    s=n(25357),
    a=n(71093);
    let l=e=>(0,i.useQuery)("sessionScreens",()=>s.Z.fetchSessionScreenNames(e),{
      enabled:!!(null==e?void 0:e.sessionid)
    }),
    o=(e,t)=>(0,i.useQuery)("appScreens",()=>a.Z.getPropertiesWithCancelToken(e),t),
    r=(e,t)=>(0,i.useQuery)(["appScreensApi",e.screenname,t],()=>a.Z.getPropertiesWithCancelToken(e),{
      enabled:t
    })
  },
  42405:function(e,t,n){
    let i,
    s;
    n.r(t),
    n.d(t,{
      default:function(){
        return iJ
      }
    });
    var a=n(85893),
    l=n(67294),
    o=n(88058),
    r=n(25104),
    c=n(14416),
    d=n(68805),
    p=n(41371),
    u=e=>(0,a.jsxs)("svg",{
      width:13,
      height:13,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,a.jsx)("path",{
        d:"M.907 6.863a5.655 5.655 0 0 1 5.64 5.637 6.01 6.01 0 0 1-5.64-5.637Zm11.998 0A6.009 6.009 0 0 1 7.266 12.5a5.655 5.655 0 0 1 1.655-3.98 5.657 5.657 0 0 1 3.984-1.656ZM6.546.5a5.654 5.654 0 0 1-3.488 5.214 5.653 5.653 0 0 1-2.152.429A6.01 6.01 0 0 1 6.546.5Zm.72 0a6.01 6.01 0 0 1 5.64 5.643A5.65 5.65 0 0 1 7.266.5Z",
        fill:"url(#TaraMicroLogo_svg__a)"
      }),(0,a.jsx)("defs",{
        children:(0,a.jsxs)("linearGradient",{
          id:"TaraMicroLogo_svg__a",
          x1:9.743,
          y1:6.5,
          x2:3.611,
          y2:11.06,
          gradientUnits:"userSpaceOnUse",
          children:[(0,a.jsx)("stop",{
            offset:.26,
            stopColor:"#EE5EDD"
          }),(0,a.jsx)("stop",{
            offset:1,
            stopColor:"#49C5FF"
          })]
        })
      })]
    }),
    h=n(8357),
    m=n(73495),
    v=n(11163),
    g=n.n(v),
    f=n(66678),
    x=n.n(f),
    b=n(1469),
    w=n.n(b),
    j=n(7334),
    y=n.n(j),
    k=n(92046),
    C=n(19521),
    S=n(30663),
    N=n(47639),
    I=n(24842),
    _=n(94184),
    T=n.n(_),
    L=n(13927),
    M=n(88767),
    Z=n(67401),
    F=n(7906);
    let E=C.default.div.withConfig({
      componentId:"sc-68267ed1-0"
    })(["height:100%;.event-wrapper{background:#ffffff;padding:10px;height:fit-content;overflow-y:auto;}.screen-timeline-search{background:#ffffff;padding:10px 10px 4px 10px;}.session-sidebar,.ant-tabs,.ant-tabs-content{height:100%;}.session-sidebar .ant-tabs-top .ant-tabs-nav .ant-tabs-tab{padding:10px 5px !important;text-align:left;margin-right:15px;&:last-of-type{margin-right:0px;}&.ant-tabs-tab-active{.ant-tabs-tab-btn{font-weight:500;}}}.activity-header-wrap{.ant-collapse-header-text{width:100%;& > div{display:flex;align-items:flex-start;justify-content:space-between;margin-right:20px;li.gesture-time{top:0 !important;}ul{align-items:flex-start !important;}}}&.ant-collapse-item-active{.gesture-text{height:auto !important;white-space:pre-line;}}}.gesture-box.active{button.add-event-btn{svg{path{fill:#5d97ff !important;}rect{fill:#eff5ff !important;}}}}.tooltip-gesture-text{max-width:172px;.ant-tooltip-inner{font-size:10px;line-height:14px;}}"]),
    D=C.default.div.withConfig({
      componentId:"sc-68267ed1-1"
    })(["background-color:#ffffff;overflow:auto;width:100%;height:100%;padding-top:10px;font-size:14px;.ant-collapse{border:0 !important;}"]),
    R=C.default.div.withConfig({
      componentId:"sc-68267ed1-2"
    })(["height:calc(100vh - 160px);display:flex;align-items:flex-end;padding:10px;"]),
    A=C.default.div.withConfig({
      componentId:"sc-68267ed1-3"
    })(["height:100%;overflow-y:auto;display:flex;flex-direction:column;.ant-layout .ant-tabs-nav-scroll{padding-top:0;}.event-item .item-header{padding:5px 5px 0px 10px;cursor:pointer;}.event-item .item-header .meta-box{margin-left:32px;margin-top:7px;line-height:13px;}.event-item .item-header .meta-box ul li{display:inline-block;margin-right:10px;transition:none;color:#161e35;font-size:12px;}.event-item .item-header .meta-box ul li svg{color:#868ea1;position:relative;top:-1px;}.event-item .item-header h3{font-size:0.8rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:500;margin:0;}.event-item .item-header h3 .time{font-size:0.8rem;font-weight:500;}.event-item .item-header h3 a{font-weight:500;color:#161e35;}.event-item .item-header h3 a:hover{color:#5d97ff;text-decoration:underline !important;}.event-item .item-header.active h3 a{color:#fff;-web-kit-transition:unset;transition:unset;}.event-item .item-header.active h3 a:hover{color:#5d97ff;}.event-item .item-body ul li{padding:0px 0 0px 2px;transition:none;}.event-item .item-body ul li a{width:100%;transition:none !important;color:inherit;}.event-item .item-body ul li a:hover{color:#5d97ff;}.event-item .item-body ul li.rage-box a:hover{color:#FF955B;}.event-item .item-body ul li a:hover svg rect,.event-item .item-body ul li a:hover svg g{fill:#5d97ff;}.event-item .item-body ul li.active{background:#f3f3ff;}.event-item .item-body ul li a:hover svg:not(.caret) path:not(.smart-event-icon),.event-item .item-body ul li.active svg:not(.caret) rect,.event-item .item-body ul li.active svg:not(.caret) g,.event-item .item-body ul li a:hover svg:not(.caret),.event-item .item-body ul li.active svg:not(.caret) svg:not(.icon-analyze_svg__analyze),.event-item .item-body ul li.active svg:not(.caret) path:not(.smart-event-icon) path:not(.icon-analyze_svg__analyze){fill:#5d97ff;}.event-item .item-body ul li a:hover svg:not(.caret):has(.smart-event-icon) path,.event-item .item-body ul li.active svg:not(.caret):has(.smart-event-icon) path{fill:#32BF8A !important;}.event-item .item-body ul li a:hover svg.caret path,.event-item .item-body ul li.active svg.caret rect,.event-item .item-body ul li.active svg.caret g,.event-item .item-body ul li a:hover svg.caret,.event-item .item-body ul li.active svg.caret,.event-item .item-body ul li.active svg.caret path{stroke:#5d97ff;}.event-item .item-body ul li.active svg[data-element=\"no-code\"]{circle{fill:#5d97ff;}path,rect{fill:#ffffff;}}.event-item .item-body ul li.rage-box a:hover svg path,.event-item .item-body ul li.rage-box a:hover svg,.event-item .item-body ul li.active.rage-box:not(.no-code-box) .rage-icon svg path{fill:#FF955B !important;}.event-item .item-body ul li.activeLong{background:#ffd152;}.sidebar-heatmap-icon{position:absolute;padding-left:10px;}.event-item .item-body ul li.activeLong *{color:#fff;}.event-item .item-body ul li.activeLong svg path{fill:#fff;}.event-item .item-body ul li li{display:inline-block;margin:0 2px 0 5px;padding:0;overflow:hidden;}.event-item .item-body ul li span.icon-box{position:relative;width:15px;height:18px;margin:0 5px 0 10px;display:inline-block;}.event-item .item-body ul li span.icon-box svg{width:13px;}.event-wrapper{flex:1;}.event-wrapper .event-item:first-child .item-header{border-top:0;}.event-wrapper .ant-collapse-content > .ant-collapse-content-box{padding-top:0;padding-bottom:0;}.event-wrapper .ant-collapse-content{padding:0;}.event-wrapper .ant-collapse > .ant-collapse-item > .ant-collapse-header{padding:0;}.event-wrapper .ant-collapse > .ant-collapse-item > .ant-collapse-header .arrow{left:5px;}.event-wrapper .ant-collapse > .ant-collapse-item:last-child,.event-wrapper .ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header{border-radius:0;}.event-wrapper .ant-collapse{border:0;}.item-body{overflow-y:auto;}.event-item .gesture-box{white-space:nowrap;text-overflow:ellipsis;width:100%;overflow:hidden;font-size:0.75rem;}.gesture-time{text-align:right;overflow:visible !important;}.session-sidebar .ant-tabs-tab-active:hover,.session-sidebar .ant-tabs-tab-active{color:#68737d;font-weight:500;cursor:auto;}.event-popover-content{width:200px;margin:-15px -16px;padding:10px 0 20px;}.event-popover-content .activity-event-name{border-bottom:1px solid #ddd;padding:0 10px 5px;margin-bottom:5px;}.event-popover-content .no-eventparam-message{padding:0 10px;color:#d2d2d2;margin-bottom:0;}.event-popover-content .event-param-name{padding:0 10px;word-break:break-all;}.video-action-timeline .ant-tabs .ant-tabs-bar{border:1px solid #c0cad9;border-right:0;background-color:#f5f5f5;padding:0px 10px;}.video-action-timeline .ant-tabs .ant-tabs-bar .ant-tabs-tab{font-weight:600;color:#161e35;padding:0;}.event-item .item-body .gesture-box ul{line-height:9px;display:flex;align-items:center;}.event-item .item-body .unresponsive-gesture ul li{color:#ff7833;}.event-item .item-body .unresponsive-gesture ul li.icon-box svg path{fill:#ff7833;}@media (min-width:1200px){.gesture-box .gesture-name{width:78px;text-overflow:ellipsis;}}.icon-rage-unresponsive{line-height:18px !important;width:32px;margin-right:0 !important;text-align:right;}.icon-rage-unresponsive img{margin-left:2px;width:12px;position:relative;top:-3px;}.event-item .item-body ul li.gesture-box{padding-left:5px;margin:7px 0;}.event-item .item-body ul .gesture-box ul li.gesture-name{border:1px solid #e3e3ef;border-radius:50px;height:27px;line-height:27px;padding:0 5px;margin-right:0;}.action-bar-popover{z-index:9999;}.action-bar-popover.ant-popover-placement-topLeft .ant-popover-arrow{border-color:transparent #3e3e40 #3e3e40 transparent;}.action-bar-popover.ant-popover-placement-bottomLeft .ant-popover-arrow{border-color:#3e3e40 transparent transparent #3e3e40;}.action-bar-popover .ant-popover-inner{background-color:rgba(0,0,0,0.75);}.action-bar-popover .event-popover-content .activity-event-name{color:#fff;border-bottom:1px solid #adadad;font-weight:600;display:flex;}.event-item .item-body ul .gesture-box ul li.gesture-name .action-bar-popover .event-popover-content .activity-event-name a{margin-left:auto;color:#fff;}.action-bar-popover .no-eventparam-message{font-style:italic;}.action-bar-popover .event-popover-content .event-param-name{color:#fff;display:flex;margin:0;}.action-bar-popover.ant-popover-placement-topRight > .ant-popover-content > .ant-popover-arrow{border-color:transparent #3e3e40 #3e3e40 transparent;}.action-bar-popover.ant-popover-placement-bottomRight > .ant-popover-content > .ant-popover-arrow{border-color:#3e3e40 transparent transparent #3e3e40;}.action-bar-popover > .ant-popover-content > .ant-popover-arrow:after{border-top-color:#000;}.action-bar-popover .prop-title{font-weight:600;color:#fff;padding:0 10px 4px;margin-bottom:0;}.event-param-name .param-key-box{display:inline-block;width:60px;}.event-param-name .param-val-box{display:inline-block;word-break:break-all;}.action-bar-popover .list-box{margin-bottom:5px;}.action-bar-popover .list-box li{color:#fff;padding:7px 10px;border-bottom:1px solid #989898;}.action-bar-popover .list-box li img{width:11px;}.action-bar-popover .list-box span{display:inline-block;width:17px;}.event-item .item-body ul li li.gesture-icon{width:17px;text-align:center;overflow:visible;}.event-item .item-body ul li.rage-box .gesture-icon small{font-size:8px;margin-top:2px;color:#FF955B;position:absolute !important;bottom:-10px !important;left:0 !important;}.event-item .item-body ul li.rage-box:not(.no-code-box) .gesture-icon svg path{fill:#FF955B;}.event-wrapper .event-item .no-interaction{padding:4px 10px;font-style:italic;color:#6f7a8e;text-align:center;}.old-sdk-box a li.gesture-name,.no-viewtype a li.gesture-name,.event-box a li.gesture-name{padding-left:30px !important;}.event-box a ul li.gesture-time{color:#161e35;}.event-wrapper .unresponsive-box li.gesture-name{font-family:'Roboto Mono';font-style:italic;}.event-wrapper .unresponsive-box a ul li.gesture-name .icon-box svg path{fill:#ff9214 !important;}.gesture-box a ul li.gesture-name span .icon-box{width:18px;text-align:center;height:100%;display:flex;align-items:center;justify-content:center;margin-right:5px;float:left;}.event-item .gesture-box .gesture-text{text-overflow:ellipsis;overflow:hidden;}.session-detail-page .session-sidebar .event-wrapper .event-item .item-header{font-size:15px;color:#161e35;background:#ffffff;font-weight:600;border-top:0px;border-bottom:0px;}.session-detail-page .session-sidebar .event-wrapper .event-item .item-body ul li.gesture-box ul li.gesture-name .icon-box{display:none;}"]),
    P=C.default.div.withConfig({
      componentId:"sc-68267ed1-4"
    })(["display:flex;justify-content:space-between;height:60px;line-height:30px;padding:0px 15px;font-size:14px;align-items:center;background:#ffffff;span{&:first-child{svg{margin-right:5px;}}&:last-child{svg{margin-left:5px;}}}"]),
    z=C.default.span.withConfig({
      componentId:"sc-68267ed1-5"
    })(["pointer-events:",";display:flex;align-items:center;color:#5d97ff;opacity:",";cursor:",";"],e=>{
      let{
        clickable:t
      }=e;
      return t?"":"none"
    },e=>{
      let{
        clickable:t
      }=e;
      return t?"1":"0.6"
    },e=>{
      let{
        clickable:t
      }=e;
      return t?"pointer":"default"
    }),
    V=C.default.div.withConfig({
      componentId:"sc-68267ed1-6"
    })([".skipped-header{border-left:1px solid #F0F0FF;border-right:1px solid #F0F0FF;border-bottom:1px solid #F0F0FF;border-top:2px solid #5D97FF;box-shadow:0 2px 2px 0 #F0F0FF;border:1px width:100%;display:flex;background:rgba(80,106,255,0.1);border-radius:0 0 4px 4px;height:32px;margin:10px 0;justify-content:space-between;align-items:center;padding:0 10px;font-size:0.8rem;position:relative;.caret-button{padding-left:4px;.anticon{color:#161E35;}svg{transform:",";}}.name{text-align:center;}&:hover,&:active,&:focus{color:#5D97FF;.caret-button{.anticon{color:#161E35;}}}}.skip-bar-extra-btn{border:none;background:none;cursor:pointer;bottom:2.5px;}"],e=>{
      let{
        visibleSkippedScreen:t
      }=e;
      return t?"rotate(-180deg) !important":""
    }),
    O=C.default.div.withConfig({
      componentId:"sc-68267ed1-7"
    })([".screen-timeline-overlay{background:#fff;opacity:0.4;pointer-events:none;cursor:not-allowed;.event-item{.item-header{h3{.timeline-screen-element{display:inline-block;width:45%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:bottom;}}}}}.screen-timeline-display{display:",";}.timeline-engagement-time{position:absolute;right:4px;}.timeline-skip-icon{color:rgb(255,119,60) !important;position:absolute;right:95px;font-weight:400;width:25px;display:inline-block;svg{margin-right:3px;}}.timeline-screen-element{width:",";display:inline-block;vertical-align:bottom;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}"],e=>{
      let{
        visibleSkippedScreen:t,
        isSkippedScreenActivity:n
      }=e;
      return t||!n?"block":"none"
    },e=>{
      let{
        activityNameLength:t
      }=e;
      return t>33?"60%":""
    }),
    U=(0,C.default)(r.Z).withConfig({
      componentId:"sc-68267ed1-8"
    })(["margin:8px;width:96%;"]);
    var B=n(98359),
    W=n(48203),
    H=n(85445),
    G=n(5257),
    K=e=>(0,a.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,a.jsx)("rect",{
        width:16,
        height:16,
        rx:2,
        fill:"#F3F4F5"
      }),(0,a.jsx)("rect",{
        width:16,
        height:16,
        rx:2,
        fill:"#F3F4F5"
      }),(0,a.jsx)("path",{
        d:"M7.333 12.667v-4h-4V7.333h4v-4h1.334v4h4v1.334h-4v4H7.333Z",
        fill:"#737886"
      })]
    }),
    q=e=>(0,a.jsxs)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      fill:"none",
      viewBox:"0 0 16 16",
      ...e,
      children:[(0,a.jsx)("rect",{
        width:16,
        height:16,
        fill:"#F3F4F5",
        rx:1.555
      }),(0,a.jsx)("path",{
        fill:"#737886",
        d:"m3.467 13 2.413-.485a.192.192 0 0 0 .146-.138.2.2 0 0 0-.046-.192l-2.16-2.153a.185.185 0 0 0-.322.092l-.492 2.415a.392.392 0 0 0 .453.453l.008.008Zm8.94-9.412a2.013 2.013 0 0 0-2.844 0L4.43 8.725a.185.185 0 0 0 0 .269l2.575 2.583a.207.207 0 0 0 .277 0l5.133-5.136a2.014 2.014 0 0 0-.007-2.853Z"
      })]
    }),
    Y=n(76633);
    let Q=()=>(0,a.jsxs)("svg",{
      width:"17",
      height:"16",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      className:"custom-icon",
      children:[(0,a.jsx)("g",{
        clipPath:"url(#single-tap__a)",
        children:(0,a.jsx)("path",{
          d:"M8.888 11.9a3.9 3.9 0 1 0 0-7.8 3.9 3.9 0 0 0 0 7.8Z",
          fill:"inherit"
        })
      }),(0,a.jsx)("defs",{
        children:(0,a.jsx)("clipPath",{
          id:"single-tap__a",
          children:(0,a.jsx)("path",{
            fill:"#fff",
            transform:"translate(.888)",
            d:"M0 0h16v16H0z"
          })
        })
      })]
    }),
    X=()=>(0,a.jsxs)("svg",{
      width:"17",
      height:"16",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,a.jsxs)("g",{
        clipPath:"url(#double-tap__a)",
        className:"custom-icon",
        fill:"inherit",
        children:[(0,a.jsx)("path",{
          opacity:".6",
          d:"M8.398 11.32A3.653 3.653 0 0 1 3.228 8a3.653 3.653 0 0 1 5.17-3.32 4.133 4.133 0 0 0 0 6.64Z"
        }),(0,a.jsx)("path",{
          d:"M14.538 8a3.651 3.651 0 0 1-5.17 3.32c-.08-.04-.17-.08-.25-.12-.08-.05-.15-.09-.23-.14-1-.65-1.66-1.78-1.66-3.06s.66-2.4 1.66-3.06c.08-.05.15-.09.23-.14.08-.04.17-.08.25-.12A3.658 3.658 0 0 1 14.538 8Z"
        })]
      }),(0,a.jsx)("defs",{
        children:(0,a.jsx)("clipPath",{
          id:"double-tap__a",
          children:(0,a.jsx)("path",{
            fill:"#fff",
            transform:"translate(.888)",
            d:"M0 0h16v16H0z"
          })
        })
      })]
    }),
    $=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"10.641",
      height:"11",
      viewBox:"0 0 10.641 11",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M154.854,160.753H146.11l5.234-4.543a.119.119,0,0,0-.078-.209h-1.323a.24.24,0,0,0-.157.058l-5.648,4.9a.478.478,0,0,0,0,.722l5.681,4.93a.118.118,0,0,0,.078.03h1.367a.119.119,0,0,0,.078-.209l-5.232-4.543h8.744a.12.12,0,0,0,.12-.12v-.9A.12.12,0,0,0,154.854,160.753Z",
        transform:"translate(166.641 -143.974) rotate(90)"
      })
    }),
    J=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"10.641",
      height:"11",
      viewBox:"0 0 10.641 11",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M154.854,160.753H146.11l5.234-4.543a.119.119,0,0,0-.078-.209h-1.323a.24.24,0,0,0-.157.058l-5.648,4.9a.478.478,0,0,0,0,.722l5.681,4.93a.118.118,0,0,0,.078.03h1.367a.119.119,0,0,0,.078-.209l-5.232-4.543h8.744a.12.12,0,0,0,.12-.12v-.9A.12.12,0,0,0,154.854,160.753Z",
        transform:"translate(-156 154.974) rotate(-90)"
      })
    }),
    ee=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"14.138",
      height:"14.138",
      viewBox:"0 0 14.138 14.138",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M-1986.326-3.781a4.958,4.958,0,0,1-3.6-1.525,4.966,4.966,0,0,1-1.4-3.56,4.969,4.969,0,0,1,1.524-3.511,4.975,4.975,0,0,1,3.474-1.4,4.962,4.962,0,0,1,3.6,1.525,5.005,5.005,0,0,1-.121,7.07A4.975,4.975,0,0,1-1986.326-3.781Zm.116-3.9h0l.2.2a.275.275,0,0,0,.118.082.011.011,0,0,0,.008,0l2.272-2.272a.01.01,0,0,0,0-.008.272.272,0,0,0-.082-.118l-.718-.718a.272.272,0,0,0-.118-.082.01.01,0,0,0-.008,0l-1.675,1.674-1.676-1.675a.01.01,0,0,0-.007,0,.276.276,0,0,0-.119.082l-.718.719c-.057.057-.092.113-.08.126l2.273,2.273a.01.01,0,0,0,.008,0,.273.273,0,0,0,.118-.082l.2-.2Z",
        transform:"matrix(0.695, -0.719, 0.719, 0.695, 1393.88, -1414.997)"
      })
    }),
    et=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"11",
      height:"10.641",
      viewBox:"0 0 11 10.641",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M154.854,160.753H146.11l5.234-4.543a.119.119,0,0,0-.078-.209h-1.323a.24.24,0,0,0-.157.058l-5.648,4.9a.478.478,0,0,0,0,.722l5.681,4.93a.118.118,0,0,0,.078.03h1.367a.119.119,0,0,0,.078-.209l-5.232-4.543h8.744a.12.12,0,0,0,.12-.12v-.9A.12.12,0,0,0,154.854,160.753Z",
        transform:"translate(-143.974 -156)"
      })
    }),
    en=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"11",
      height:"10.641",
      viewBox:"0 0 11 10.641",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M154.854,160.753H146.11l5.234-4.543a.119.119,0,0,0-.078-.209h-1.323a.24.24,0,0,0-.157.058l-5.648,4.9a.478.478,0,0,0,0,.722l5.681,4.93a.118.118,0,0,0,.078.03h1.367a.119.119,0,0,0,.078-.209l-5.232-4.543h8.744a.12.12,0,0,0,.12-.12v-.9A.12.12,0,0,0,154.854,160.753Z",
        transform:"translate(154.974 166.641) rotate(-180)"
      })
    }),
    ei=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"12.425",
      height:"12.424",
      viewBox:"0 0 12.425 12.424",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M142.727,152.959l-.91-.91a.162.162,0,0,0-.228,0l-.973.975-1.1-1.1a.16.16,0,0,0-.272.095l-.474,3.817a.161.161,0,0,0,.18.18l3.818-.474a.161.161,0,0,0,.095-.272l-1.1-1.1.975-.975A.161.161,0,0,0,142.727,152.959Zm4.641-5.731-3.819.474a.161.161,0,0,0-.095.272l1.1,1.1-1.708,1.708a.162.162,0,0,0,0,.228l.91.91a.162.162,0,0,0,.228,0l1.71-1.71,1.1,1.1a.16.16,0,0,0,.272-.095l.472-3.817a.159.159,0,0,0-.18-.18Z",
        transform:"translate(-202.226 0.229) rotate(-45)"
      })
    }),
    es=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"14.141",
      height:"14.141",
      viewBox:"0 0 14.141 14.141",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M152.627,143.059l-.91-.91a.162.162,0,0,0-.228,0l-.973.975-1.1-1.1a.16.16,0,0,0-.272.095l-.474,3.817a.161.161,0,0,0,.18.18l3.818-.474a.161.161,0,0,0,.095-.272l-1.1-1.1.975-.975A.161.161,0,0,0,152.627,143.059Zm-5.258,4.168-3.819.474a.161.161,0,0,0-.095.272l1.1,1.1-1.708,1.708a.162.162,0,0,0,0,.228l.91.91a.162.162,0,0,0,.228,0l1.71-1.71,1.1,1.1a.16.16,0,0,0,.272-.095l.472-3.817a.159.159,0,0,0-.18-.18Z",
        transform:"translate(-201.368 7.659) rotate(-45)"
      })
    }),
    ea=()=>(0,a.jsxs)("svg",{
      width:"16px",
      viewBox:"0 0 45 50",
      version:"1.1",
      children:[(0,a.jsx)("title",{
        children:"gesture-unknown"
      }),(0,a.jsx)("desc",{
        children:"Created with Sketch."
      }),(0,a.jsx)("defs",{
        children:(0,a.jsx)("polygon",{
          id:"path-1",
          points:"2.02931818 0.233079545 44.7669205 0.233079545 44.7669205 43 2.02931818 43"
        })
      }),(0,a.jsxs)("g",{
        id:"gesture-unknown",
        stroke:"none",
        strokeWidth:"1",
        fill:"none",
        fillRule:"evenodd",
        children:[(0,a.jsx)("g",{
          id:"Clip-2"
        }),(0,a.jsx)("path",{
          d:"M23.3856591,43 L23.3856591,42.0227273 L23.3837045,43 C11.5933977,43 2,33.4066023 2,21.6167841 C2,9.82647727 11.5933977,0.233079545 23.3837045,0.233079545 C35.1740114,0.233079545 44.7669205,9.82647727 44.7669205,21.6167841 C44.7669205,33.4066023 35.1759659,43 23.3856591,43 Z M23.3837045,2.187625 C12.6698636,2.187625 3.95454545,10.9029432 3.95454545,21.6167841 C3.95454545,32.3301364 12.6698636,41.0454545 23.3837045,41.0454545 L23.3856591,41.0454545 C34.0975455,41.0454545 42.812375,32.3301364 42.812375,21.6167841 C42.812375,10.9029432 34.0975455,2.187625 23.3837045,2.187625 Z",
          id:"Fill-1",
          fill:"#69707F",
          mask:"url(#mask-2)"
        }),(0,a.jsx)("path",{
          d:"M24.0002494,26 C23.4485138,26 23.0025359,25.5601882 23.0025359,25.0160809 L23.0025359,20.8521354 C23.0025359,20.3080282 23.4485138,19.8682163 24.0002494,19.8682163 C26.2081896,19.8682163 28.0045729,18.0961781 28.0045729,15.9187652 C28.0045729,13.7413523 26.2081896,11.9678381 24.0002494,11.9678381 C21.7923093,11.9678381 19.9954271,13.7413523 19.9954271,15.9187652 C19.9954271,16.4628724 19.5494492,16.9026843 18.9977136,16.9026843 C18.4464768,16.9026843 18,16.4628724 18,15.9187652 C18,12.6555976 20.6913324,10 24.0002494,10 C27.3091665,10 30,12.6555976 30,15.9187652 C30,18.8454325 27.8329661,21.2845678 24.997963,21.7534053 L24.997963,25.0160809 C24.997963,25.5601882 24.5514862,26 24.0002494,26 Z",
          id:"Fill-4",
          fill:"#69707F",
          mask:"url(#mask-2)"
        }),(0,a.jsx)("path",{
          d:"M25,30.5 C25,31.3272092 24.3272092,32 23.5,32 C22.6705132,32 22,31.3272092 22,30.5 C22,29.6709687 22.6705132,29 23.5,29 C24.3272092,29 25,29.6709687 25,30.5 Z",
          id:"Fill-5",
          fill:"#69707F",
          mask:"url(#mask-2)"
        })]
      })]
    }),
    el=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"10",
      height:"9.1",
      viewBox:"0 0 10 9.1",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M-1987.5,9.1a.5.5,0,0,1-.5-.5V6a.5.5,0,0,1,.5-.5h6a.5.5,0,0,1,.5.5V8.6a.5.5,0,0,1-.5.5Zm-1-1.1h-2.1a.4.4,0,0,1-.4-.4V.4a.4.4,0,0,1,.4-.4h4.2a.4.4,0,0,1,.4.4V5h-1.5a1,1,0,0,0-1,1V8h0Z",
        transform:"translate(1991)"
      })
    }),
    eo=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"12.13",
      height:"9.638",
      viewBox:"0 0 12.13 9.638",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M1606.942,172.477s.438-4.6,3.991-4.087,6.464-3.016,6.281-5.327a17.086,17.086,0,0,1-1.861-.223c-.126,1.112-.355,4.17-4.7,3.715s-5.558,5.606-5.558,5.606Z",
        transform:"translate(-1605.092 -162.839)"
      })
    }),
    er=()=>(0,a.jsxs)("svg",{
      width:"17",
      height:"16",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,a.jsx)("g",{
        clipPath:"url(#event__a)",
        children:(0,a.jsx)("path",{
          d:"M12.888 2h-8c-1.1 0-2 .9-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2Zm-1.47 9.86h-5.05V4.14h4.99v1.2h-3.62v1.95h3.16v1.19h-3.16v2.19h3.68v1.19Z",
          fill:"inherit"
        })
      }),(0,a.jsx)("defs",{
        children:(0,a.jsx)("clipPath",{
          id:"event__a",
          children:(0,a.jsx)("path",{
            fill:"#fff",
            transform:"translate(.888)",
            d:"M0 0h16v16H0z"
          })
        })
      })]
    }),
    ec=()=>(0,a.jsxs)("svg",{
      width:"16px",
      viewBox:"0 0 45 50",
      version:"1.1",
      children:[(0,a.jsx)("title",{
        children:"gesture-single-tap"
      }),(0,a.jsx)("desc",{
        children:"Created with Sketch."
      }),(0,a.jsx)("defs",{
        children:(0,a.jsx)("polygon",{
          id:"path-1",
          points:"0.00638297872 0.0354255319 49.9290426 0.0354255319 49.9290426 38.6170213 0.00638297872 38.6170213"
        })
      }),(0,a.jsxs)("g",{
        id:"gesture-single-tap",
        stroke:"none",
        strokeWidth:"1",
        fill:"none",
        fillRule:"evenodd",
        children:[(0,a.jsx)("g",{
          id:"Clip-2"
        }),(0,a.jsx)("path",{
          d:"M10.212766,8.1693617 C9.68393617,8.1693617 9.15521277,8.3712766 8.75117021,8.77297872 C7.93414894,9.59234043 7.93414894,10.9040426 8.73989362,11.7097872 L25.7679787,28.7378723 C26.0697872,29.0396809 26.1764894,29.4868085 26.0447872,29.8907447 C25.9109574,30.2970213 25.5637234,30.5942553 25.1415957,30.6601064 L13.76,32.4485106 C12.3778723,32.6459574 11.3475532,33.8328723 11.3475532,35.212766 C11.3475532,35.8391489 11.8558511,36.3474468 12.482234,36.3474468 L33.881383,36.3474468 C36.6093617,36.3474468 39.1739362,35.2853191 41.1029787,33.3562766 L44.6728723,29.786383 C46.5996809,27.8595745 47.6595745,25.2995745 47.6595745,22.5761702 C47.6595745,20.0320213 46.7154255,17.5945745 45.0064894,15.7131915 L36.5094681,6.37414894 C35.7401064,5.61159574 34.4328723,5.6093617 33.625,6.41276596 C33.2209574,6.81670213 33.0076596,7.33414894 33.0076596,7.8856383 C33.0076596,8.43712766 33.2232979,8.95680851 33.613617,9.34723404 L33.7111702,9.44478723 C34.1537234,9.88734043 34.1537234,10.6068085 33.7111702,11.0493617 C33.277766,11.4851064 32.5741489,11.4941489 32.1293617,11.0720213 C32.1293617,11.0720213 32.1293617,11.0697872 32.1271277,11.0697872 L32.1247872,11.0697872 C32.1247872,11.0697872 32.1247872,11.0697872 32.1225532,11.0674468 C32.1225532,11.0674468 32.1225532,11.0674468 32.1203191,11.0652128 L32.1179787,11.0629787 C32.1179787,11.0629787 32.1203191,11.0629787 32.1157447,11.0606383 L29.7373404,8.68223404 C28.9339362,7.87882979 27.6198936,7.87882979 26.8164894,8.68223404 C25.9971277,9.50148936 25.9971277,10.8110638 26.8028723,11.6167021 L29.1698936,13.9838298 C29.3923404,14.2061702 29.5035106,14.4967021 29.5035106,14.787234 C29.5035106,15.0776596 29.3923404,15.3681915 29.172234,15.5906383 C28.7296809,16.0331915 28.0102128,16.0331915 27.5676596,15.5906383 L22.9288298,10.9517021 C22.1254255,10.1482979 20.811383,10.1482979 20.0079787,10.9517021 C19.188617,11.7710638 19.188617,13.0805319 19.9943617,13.8861702 L24.6309574,18.522766 C24.8532979,18.7452128 24.9645745,19.0357447 24.9645745,19.3261702 C24.9645745,19.6167021 24.8532979,19.907234 24.6331915,20.1295745 C24.1906383,20.5721277 23.4711702,20.5721277 23.028617,20.1295745 L11.6743617,8.77531915 C11.2703191,8.3712766 10.7415957,8.1693617 10.212766,8.1693617 Z M33.881383,38.6170213 L12.482234,38.6170213 C10.6054255,38.6170213 9.07797872,37.0895745 9.07797872,35.212766 C9.07797872,32.7094681 10.9458511,30.5579787 13.4218085,30.2039362 L22.5860638,28.7651064 L7.13531915,13.3142553 C5.44457447,11.6235106 5.44457447,8.87287234 7.13531915,7.1843617 C8.83968085,5.48 11.5903191,5.48223404 13.2788298,7.17074468 L17.3004255,11.1923404 C17.4978723,10.5205319 17.8609574,9.88957447 18.3897872,9.36085106 C19.9511702,7.79712766 22.4,7.67 24.0975532,8.96595745 C24.292766,8.27829787 24.6604255,7.63148936 25.1982979,7.0912766 C26.7620213,5.52765957 29.2107447,5.39829787 30.9084043,6.6987234 C31.0990426,6.0087234 31.4667021,5.36191489 32.0068085,4.82180851 C33.7111702,3.11744681 36.4618085,3.11968085 38.1503191,4.80819149 L46.6837234,14.1857447 C48.7761702,16.4870213 49.9290426,19.4669149 49.9290426,22.5761702 C49.9290426,25.9055319 48.6331915,29.0374468 46.2774468,31.3908511 L42.7075532,34.9608511 C40.3494681,37.3188298 37.2153191,38.6170213 33.881383,38.6170213 Z",
          id:"Fill-1",
          fill:"#69707F",
          mask:"url(#mask-2)"
        }),(0,a.jsx)("path",{
          d:"M6.48851064,19.6461702 C6.33191489,19.6461702 6.17308511,19.6144681 6.02095745,19.546383 C2.36478723,17.8919149 0,14.2425532 0,10.2481915 C0,4.61755319 4.58212766,0.0354255319 10.212766,0.0354255319 C14.2071277,0.0354255319 17.8564894,2.40021277 19.508617,6.05638298 C19.7673404,6.62829787 19.5131915,7.30010638 18.9412766,7.55882979 C18.3715957,7.81978723 17.6975532,7.56340426 17.4411702,6.99148936 C16.1543617,4.14553191 13.3174468,2.30489362 10.212766,2.30489362 C5.83265957,2.30489362 2.26946809,5.86808511 2.26946809,10.2481915 C2.26946809,13.3528723 4.11010638,16.1897872 6.95606383,17.4765957 C7.5256383,17.7353191 7.77989362,18.4070213 7.52340426,18.9789362 C7.33276596,19.3965957 6.91968085,19.6461702 6.48851064,19.6461702",
          id:"Fill-3",
          fill:"#69707F",
          mask:"url(#mask-2)"
        })]
      })]
    }),
    ed=()=>(0,a.jsxs)("svg",{
      width:"17",
      height:"16",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,a.jsx)("g",{
        clipPath:"url(#rage__a)",
        children:(0,a.jsx)("path",{
          d:"M9.318 2.03a.55.55 0 0 0-.7.33c-.06.16-.04.34.06.48.02.03 1.76 2.76.23 3.83-.33.26-.75.37-1.16.3-.61-.22-1.13-.64-1.46-1.2a.553.553 0 0 0-.91-.06c-.09.11-2.13 2.77-.8 5.58a4.749 4.749 0 0 0 6.33 2.26c1.84-.87 2.87-2.82 2.76-5.2-.12-2.41-1.51-5.29-4.34-6.31l-.01-.01Zm-.24 10.87c-1.16.08-2.16-.79-2.24-1.94v-.04c-.05-.32.17-.63.5-.68.14-.02.28 0 .4.08 1.5.9 3.3-.74 3.19-2.37.91.8.91 4.95-1.84 4.95h-.01Z",
          fill:"none"
        })
      }),(0,a.jsx)("defs",{
        children:(0,a.jsx)("clipPath",{
          id:"rage__a",
          children:(0,a.jsx)("path",{
            fill:"#fff",
            transform:"translate(.888)",
            d:"M0 0h16v16H0z"
          })
        })
      })]
    }),
    ep=()=>(0,a.jsxs)("svg",{
      width:"17",
      height:"16",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,a.jsx)("g",{
        clipPath:"url(#rage__a)",
        children:(0,a.jsx)("path",{
          d:"M9.318 2.03a.55.55 0 0 0-.7.33c-.06.16-.04.34.06.48.02.03 1.76 2.76.23 3.83-.33.26-.75.37-1.16.3-.61-.22-1.13-.64-1.46-1.2a.553.553 0 0 0-.91-.06c-.09.11-2.13 2.77-.8 5.58a4.749 4.749 0 0 0 6.33 2.26c1.84-.87 2.87-2.82 2.76-5.2-.12-2.41-1.51-5.29-4.34-6.31l-.01-.01Zm-.24 10.87c-1.16.08-2.16-.79-2.24-1.94v-.04c-.05-.32.17-.63.5-.68.14-.02.28 0 .4.08 1.5.9 3.3-.74 3.19-2.37.91.8.91 4.95-1.84 4.95h-.01Z",
          fill:"none"
        })
      }),(0,a.jsx)("defs",{
        children:(0,a.jsx)("clipPath",{
          id:"rage__a",
          children:(0,a.jsx)("path",{
            fill:"#fff",
            transform:"translate(.888)",
            d:"M0 0h16v16H0z"
          })
        })
      })]
    }),
    eu=()=>(0,a.jsxs)("svg",{
      width:"17",
      height:"16",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,a.jsxs)("g",{
        clipPath:"url(#double-rage__a)",
        fill:"none",
        children:[(0,a.jsx)("path",{
          d:"M7.538 13.05c-.18.03-.35.05-.54.05-1.29.09-2.4-.89-2.5-2.18-.03-.25.03-.48.16-.66.14-.18.34-.29.56-.32.18-.04.38 0 .55.11.07.04.14.07.21.1-.19-1.14.03-2.19.34-3.01-.23.06-.47.07-.7.03-.71-.26-1.28-.72-1.64-1.33a.28.28 0 0 0-.26-.15c-.05 0-.1 0-.14.04-.04.02-.08.06-.09.08-.03.02-2.05 2.61-.77 5.31a4.445 4.445 0 0 0 5.35 2.38c-.19-.14-.37-.29-.53-.45Zm-.38-10.83a.288.288 0 0 0-.38.17c-.04.1-.03.19.02.28.04.03.8 1.24.89 2.41.13-.06.27-.08.41-.08.09 0 .17 0 .26.03.28.08.5.25.65.5.27.45.69.79 1.19.97.19.03.48-.05.68-.21.02-.01.03-.02.04-.03-.65-1.95-2.02-3.41-3.76-4.04Z",
          opacity:".5"
        }),(0,a.jsx)("path",{
          d:"M11.528 2.27a.304.304 0 0 0-.23.01.31.31 0 0 0-.15.17c-.04.09-.03.19.03.27.07.12 1.85 2.92.19 4.14-.01 0-.02.01-.03.02-.37.3-.87.43-1.35.34-.71-.25-1.27-.71-1.63-1.32a.33.33 0 0 0-.19-.14h-.08c-.05 0-.1 0-.14.04-.04.02-.07.04-.09.07-.02.03-1.72 2.2-1.02 4.63.05.23.14.46.25.69.26.54.61 1.01 1.03 1.38.32.3.68.55 1.07.73 1.18.58 2.61.64 3.9.03 1.75-.83 2.72-2.68 2.61-4.96-.11-2.33-1.45-5.11-4.17-6.09v-.01Zm2.2 9.15c-.42 1.11-1.26 1.73-2.35 1.73-.06.01-.11.01-.16.01-.47 0-.92-.14-1.3-.4-.08-.04-.16-.1-.24-.17-.32-.29-.56-.64-.68-1.04-.07-.18-.11-.37-.12-.57a.85.85 0 0 1 .15-.65.82.82 0 0 1 .55-.33c.2-.04.4 0 .57.11.46.28.9.25 1.24.14.18-.05.32-.12.43-.19.72-.44 1.19-1.3 1.14-2.09l-.04-.6.45.39c.67.59.84 2.36.36 3.66Z"
        })]
      }),(0,a.jsx)("defs",{
        children:(0,a.jsx)("clipPath",{
          id:"double-rage__a",
          children:(0,a.jsx)("path",{
            fill:"#fff",
            transform:"translate(.888)",
            d:"M0 0h16v16H0z"
          })
        })
      })]
    }),
    eh=()=>(0,a.jsxs)("svg",{
      width:"17",
      height:"16",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,a.jsx)("g",{
        clipPath:"url(#ui-freeze__a)",
        children:(0,a.jsx)("path",{
          d:"M8.888 2c-.22 0-.43.04-.62.13-.21.11-.27.34-.28.52-.02.43-.05 1.49-.07 3.67-.36-.2-.68-.39-.97-.55l-.2-1.65a.652.652 0 0 0-.74-.58l-.27.03c-.37.04-.63.38-.58.74l.06.51c-.23-.12-.39-.21-.51-.27-.16-.08-.39-.15-.59-.02-.18.12-.33.28-.43.47-.11.18-.18.39-.19.61 0 .24.16.4.32.5.37.23 1.26.79 3.14 1.89-.36.21-.68.4-.96.57l-1.53-.65a.661.661 0 0 0-.87.35l-.11.24c-.14.34.01.73.35.88l.47.2-.49.31c-.15.1-.32.26-.32.5 0 .16.05.36.19.61s.3.39.43.47c.2.13.43.06.59-.02.39-.2 1.32-.7 3.21-1.78 0 .41 0 .78.01 1.12l-1.33 1c-.29.22-.35.64-.13.93l.16.21c.22.29.64.35.93.13l.41-.31c0 .26.01.45.02.58 0 .18.07.41.28.52.14.07.34.14.62.14.28 0 .49-.06.62-.14.21-.11.27-.34.28-.52.02-.43.05-1.49.07-3.67.36.2.68.39.97.55l.2 1.65c.04.37.38.63.74.58l.27-.03c.37-.04.63-.38.58-.74l-.06-.51c.23.12.39.21.51.27.16.08.39.15.59.02.18-.12.33-.28.43-.47.14-.25.19-.45.19-.61 0-.24-.16-.4-.31-.5-.37-.23-1.26-.79-3.14-1.89l.96-.57 1.53.65c.34.14.73-.01.88-.35l.1-.24a.676.676 0 0 0-.35-.88l-.47-.2.49-.31c.15-.1.32-.26.31-.5-.01-.22-.08-.43-.19-.61-.1-.19-.25-.35-.43-.47-.2-.13-.43-.06-.59.02-.39.2-1.32.7-3.21 1.78V5.19l1.33-1c.29-.22.35-.64.13-.93l-.16-.21a.668.668 0 0 0-.93-.13l-.41.31c0-.19-.01-.38-.02-.58 0-.18-.07-.41-.28-.52-.19-.1-.41-.14-.63-.13Z",
          fill:"none"
        })
      }),(0,a.jsx)("defs",{
        children:(0,a.jsx)("clipPath",{
          id:"ui-freeze__a",
          children:(0,a.jsx)("path",{
            fill:"#fff",
            transform:"translate(.888)",
            d:"M0 0h16v16H0z"
          })
        })
      })]
    }),
    em=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"17.5",
      height:"9",
      viewBox:"0 0 17.5 9",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M-3964.5-214H-3978a2,2,0,0,1-2-2v-5a2,2,0,0,1,2-2h13.5a2,2,0,0,1,2,2v5A2,2,0,0,1-3964.5-214Zm-12.139-7.462a1.507,1.507,0,0,0-1.611,1.369v3.424a1.507,1.507,0,0,0,1.611,1.369h10.876a1.507,1.507,0,0,0,1.612-1.369v-3.424a1.507,1.507,0,0,0-1.612-1.369Z",
        transform:"translate(3980 223)"
      })
    }),
    ev=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"7.275",
      height:"12.307",
      viewBox:"0 0 7.275 12.307",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M-1989.927-131.693c-.041,0-.073-.066-.073-.145v-1.016c0-.08.032-.146.073-.146h2.513v-9.693h-2.513c-.041,0-.073-.066-.073-.146v-1.016c0-.079.032-.145.073-.145h7.13c.04,0,.072.066.072.145v1.016c0,.08-.032.146-.072.146h-2.616V-133h2.616c.04,0,.072.066.072.146v1.016c0,.079-.032.145-.072.145Z",
        transform:"translate(1990 144)"
      })
    }),
    eg=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"11",
      height:"11.001",
      viewBox:"0 0 11 11.001",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M-5709-541.5a5.5,5.5,0,0,1,5.5-5.5,5.5,5.5,0,0,1,5.5,5.5,5.5,5.5,0,0,1-5.5,5.5A5.5,5.5,0,0,1-5709-541.5Zm.933,0a4.568,4.568,0,0,0,4.568,4.566,4.566,4.566,0,0,0,4.566-4.566,4.568,4.568,0,0,0-4.566-4.568A4.569,4.569,0,0,0-5708.067-541.5Zm1.067,0a3.5,3.5,0,0,1,3.5-3.5,3.5,3.5,0,0,1,3.5,3.5,3.5,3.5,0,0,1-3.5,3.5A3.5,3.5,0,0,1-5707-541.5Z",
        transform:"translate(5709 547)"
      })
    }),
    ef=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"13",
      height:"6",
      viewBox:"0 0 13 6",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M-3978.451-559.807h-1.419c-.071,0-.13-.1-.13-.222v-1.556c0-.122.059-.222.13-.222h1.282A3,3,0,0,1-3975.7-564a3,3,0,0,1,2.891,2.193h5.677c.072,0,.13.1.13.222v1.556c0,.122-.058.222-.13.222h-5.814A3,3,0,0,1-3975.7-558,3,3,0,0,1-3978.451-559.807Z",
        transform:"translate(3980 564)"
      })
    }),
    ex=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"9",
      height:"11.5",
      viewBox:"0 0 9 11.5",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M-5705-458.5V-465h4v6.5Zm-5,0V-462h4v3.5Zm0-5V-470h4v6.5Zm5-3V-470h4v3.5Z",
        transform:"translate(5710 469.999)"
      })
    }),
    eb=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"13.52",
      height:"11.829",
      viewBox:"0 0 13.52 11.829",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M-5708.517-759.171a.482.482,0,0,1-.417-.724l6.277-10.865a.475.475,0,0,1,.417-.241.478.478,0,0,1,.418.241l6.276,10.865a.482.482,0,0,1-.417.724Zm1.15-1.145h10.254l-5.128-8.875Zm4.585-.805a.534.534,0,0,1-.182-.416.529.529,0,0,1,.182-.415.659.659,0,0,1,.457-.162.656.656,0,0,1,.456.162.529.529,0,0,1,.184.415.533.533,0,0,1-.184.416.663.663,0,0,1-.456.162A.666.666,0,0,1-5702.782-761.121Zm-.043-1.454a2.229,2.229,0,0,1,.113-.788,1.246,1.246,0,0,1,.365-.5,2.438,2.438,0,0,0,.386-.388.63.63,0,0,0,.13-.387c0-.344-.148-.517-.444-.517a.412.412,0,0,0-.331.15.639.639,0,0,0-.133.407h-1.155a1.379,1.379,0,0,1,.43-1.065,1.721,1.721,0,0,1,1.189-.381,1.785,1.785,0,0,1,1.182.352,1.24,1.24,0,0,1,.418,1,1.158,1.158,0,0,1-.113.516,1.74,1.74,0,0,1-.363.476l-.393.365a.916.916,0,0,0-.232.33,1.28,1.28,0,0,0-.072.43Z",
        transform:"translate(5709 771)"
      })
    }),
    ew=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"6",
      height:"13",
      viewBox:"0 0 6 13",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M-3978.451-559.807h-1.419c-.071,0-.13-.1-.13-.222v-1.556c0-.122.059-.222.13-.222h1.282A3,3,0,0,1-3975.7-564a3,3,0,0,1,2.891,2.193h5.677c.072,0,.13.1.13.222v1.556c0,.122-.058.222-.13.222h-5.814A3,3,0,0,1-3975.7-558,3,3,0,0,1-3978.451-559.807Z",
        transform:"translate(-558 3980) rotate(90)"
      })
    }),
    ej=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"11",
      height:"12",
      viewBox:"0 0 11 12",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M-1979,12h-11V0h11V12h0Zm-9.5-1.5h8v-9h-8Zm3.542-1.677V4.166h-1.789V3.023h4.822V4.166h-1.814V8.824Z",
        transform:"translate(1990)"
      })
    }),
    ey=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"7.071",
      height:"9",
      viewBox:"0 0 7.071 9",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M-1980.572,9h-5.786a.644.644,0,0,1-.643-.643V6.75h7.071V8.357A.644.644,0,0,1-1980.572,9Zm.643-3.536H-1987V3.536h7.071V5.464Zm0-3.214H-1987V.643a.643.643,0,0,1,.643-.643h5.786a.644.644,0,0,1,.643.643V2.249Z",
        transform:"translate(1987)"
      })
    }),
    ek=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"17",
      height:"7.556",
      viewBox:"0 0 17 7.556",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M-1980.555,3.777A3.782,3.782,0,0,1-1976.778,0,3.783,3.783,0,0,1-1973,3.777a3.783,3.783,0,0,1-3.779,3.778A3.782,3.782,0,0,1-1980.555,3.777Zm1.233.663h1.837V6.51h1.395V4.44h1.831V3.117h-1.831V1.133h-1.395V3.117h-1.837ZM-1990,3.777A3.781,3.781,0,0,1-1986.222,0a3.782,3.782,0,0,1,3.778,3.777,3.782,3.782,0,0,1-3.778,3.778A3.782,3.782,0,0,1-1990,3.777Zm1.889.56h3.635v-1.5h-3.635Z",
        transform:"translate(1990)"
      })
    }),
    eC=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"9.867",
      height:"11.285",
      viewBox:"0 0 9.867 11.285",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M112,122.834a.425.425,0,0,0,.395.451h9.077a.425.425,0,0,0,.395-.451v-5.925H112Zm9.472-9.818H119.4v-.9a.107.107,0,0,0-.1-.113h-.691a.107.107,0,0,0-.1.113v.9h-3.157v-.9a.107.107,0,0,0-.1-.113h-.691a.107.107,0,0,0-.1.113v.9h-2.072a.425.425,0,0,0-.395.451v2.483h9.867v-2.483A.425.425,0,0,0,121.472,113.016Z",
        transform:"translate(-112 -112)"
      })
    }),
    eS=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      width:"8.893",
      height:"10.262",
      viewBox:"0 0 8.893 10.262",
      children:(0,a.jsx)("path",{
        style:{
          fill:"inherit"
        },
        d:"M158.383,97.406l0,0h0L155.946,96,153.5,97.4h0l.009,0L151.5,98.565V103.7l4.446,2.565,4.446-2.565V98.565Zm-2.8,7.815-3.363-1.877V99.415l3.363,1.94Zm-3.016-6.439,3.379-1.815,3.378,1.815-3.378,1.949Zm7.1,4.346-3.363,2.092v-3.862l3.363-1.94Z",
        transform:"translate(-151.5 -96)"
      })
    }),
    eN=()=>(0,a.jsx)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      viewBox:"0 0 14 14",
      children:(0,a.jsx)("path",{
        fill:"#737886",
        className:"smart-event-icon",
        fillRule:"evenodd",
        d:"M2.318 1h5.268c.724 0 1.317.589 1.317 1.308v2.086A5.084 5.084 0 0 0 5.2 6.671H4.194V5.238h2.081V4.46H4.194V3.185h2.384v-.786H3.292v5.05h1.493c-.19.447-.313.919-.367 1.4h-2.1A1.312 1.312 0 0 1 1 7.541V2.308C1 1.588 1.593 1 2.318 1Zm8.614 4.28a.264.264 0 0 1 .254-.2c.119 0 .224.083.254.2.116.453.243.73.433.935.191.207.47.369.948.532.108.038.18.14.179.255a.267.267 0 0 1-.179.254c-.477.164-.757.326-.948.532-.19.206-.317.483-.433.936a.264.264 0 0 1-.254.2.264.264 0 0 1-.254-.2c-.117-.453-.244-.73-.433-.936-.192-.206-.471-.368-.949-.532a.27.27 0 0 1 0-.51c.478-.162.757-.324.949-.53.19-.206.316-.483.432-.936h.001ZM7.563 6.777a.264.264 0 0 1 .254-.2c.12 0 .224.082.254.201.21.817.446 1.351.817 1.755.373.404.906.705 1.764 1 .108.04.18.141.179.256a.267.267 0 0 1-.179.253s-1.391.598-1.764 1.001c-.371.404-.608.938-.817 1.756a.264.264 0 0 1-.254.201.264.264 0 0 1-.254-.202c-.21-.817-.445-1.351-.817-1.755-.373-.403-.906-.705-1.764-1a.268.268 0 0 1-.178-.255c0-.116.072-.217.178-.254.858-.296 1.391-.597 1.764-1.001.372-.404.608-.938.817-1.756Z"
      })
    });
    var eI=(0,l.memo)(e=>{
      let{
        name:t
      }=e,
      n=(()=>{
        switch(t.toLowerCase()){
          case"single tap":return(0,a.jsx)(Q,{});
          case"double tap":return(0,a.jsx)(X,{});
          case"swipe up":return(0,a.jsx)($,{});
          case"swipe down":return(0,a.jsx)(J,{});
          case"swipe left":return(0,a.jsx)(et,{});
          case"swipe right":return(0,a.jsx)(en,{});
          case"long press":return(0,a.jsx)(ee,{});
          case"zoom in":return(0,a.jsx)(ei,{});
          case"zoom out":return(0,a.jsx)(es,{});
          case"unknown":return(0,a.jsx)(ea,{});
          case"orientation change":return(0,a.jsx)(el,{});
          case"trail":return(0,a.jsx)(eo,{});
          case"rage":return(0,a.jsx)(ed,{});
          case"single rage":return(0,a.jsx)(ep,{});
          case"double rage":return(0,a.jsx)(eu,{});
          case"event":return(0,a.jsx)(er,{});
          case"no-code event":return(0,a.jsx)(eN,{
            "data-element":"no-code"
          });
          case"generic":return(0,a.jsx)(ec,{});
          case"ui freeze":return(0,a.jsx)(eh,{});
          case"smart_screenvisit_event":return(0,a.jsx)(eN,{});
          default:return null
        }
      })();
      return(0,a.jsx)("span",{
        children:n
      })
    }),
    e_=e=>{
      let{
        gesture:t
      }=e,
      n=(()=>{
        switch(t){
          case"-1":return(0,a.jsx)(eS,{});
          case"1":return(0,a.jsx)(em,{});
          case"2":return(0,a.jsx)(ev,{});
          case"3":return(0,a.jsx)(eg,{});
          case"4":return(0,a.jsx)(ef,{});
          case"5":return(0,a.jsx)(ex,{});
          case"6":return(0,a.jsx)(ew,{});
          case"7":return(0,a.jsx)(ej,{});
          case"8":return(0,a.jsx)(ey,{});
          case"9":return(0,a.jsx)(ek,{});
          case"10":return(0,a.jsx)(eC,{});
          case"unresponsive":return(0,a.jsx)(eb,{});
          default:return null
        }
      })();
      return(0,a.jsx)("span",{
        children:n
      })
    },
    eT=n(73113);
    let eL=C.default.div.withConfig({
      componentId:"sc-182c7889-0"
    })(["font-weight:400 !important;i{font-style:italic !important;font-weight:500;}"]);
    var eM=e=>{
      let{
        isEvent:t,
        properties:n,
        params:i,
        name:s,
        newSdk:o,
        isGesture:r,
        isSmartEvent:c,
        isScreenEvent:d
      }=e,
      {
        noCodeEventsFeatureFlag:p
      }=(0,Z.Z)(),
      u=(null==i?void 0:i.gestureType)||s,
      h=(null==n?void 0:n.viewNameUpdated)||(null==n?void 0:n.viewName)||(null==i?void 0:i.viewName),
      m=(null==i?void 0:i.viewType)||(null==n?void 0:n.viewType),
      v=(0,l.useMemo)(()=>(0,eT._Y)(u,m,p,h),[u,h,m,p]),
      g=(0,l.useMemo)(()=>u&&m&&p?"".concat(u," - ").concat(h&&"UnknownView"!==h?"".concat(h," "):""," ").concat(m&&"unknown"!==m?m:""):null,[u,h,m,p]),
      f=(0,l.useMemo)(()=>p&&r?(0,a.jsx)(eL,{
        className:"gesture-text",
        children:v
      }):c?(0,a.jsx)(W.Z,{
        title:"Original name: ".concat(g),
        overlayClassName:"tooltip-gesture-text",
        placement:"bottomLeft",
        align:{
          offset:[15,-5]
        },
        children:(0,a.jsx)(eL,{
          className:"gesture-text",
          children:(0,a.jsx)("b",{
            children:s
          })
        })
      }):(0,a.jsx)("div",{
        className:"gesture-text",
        children:v
      }),[p,r,c,v,g,s]);
      return(0,a.jsxs)(a.Fragment,{
        children:[o&&!t&&n&&(0,a.jsx)("div",{
          className:"icon-box",
          children:(0,a.jsx)(e_,{
            gesture:(null==n?void 0:n.viewTypeId)||""
          })
        }),(!o||!n)&&!t&&(0,a.jsx)("div",{
          className:"icon-box",
          children:(0,a.jsx)(eI,{
            name:"generic"
          })
        }),f]
      })
    },
    eZ=n(75493),
    eF=n(74936),
    eE=n(80432),
    eD=n(74855),
    eR=n(66873),
    eA=n(61288),
    eP=n(20088),
    ez=e=>(0,a.jsxs)("svg",{
      xmlns:"http://www.w3.org/2000/svg",
      className:"icon-analyze_svg__analyze",
      width:15,
      height:14,
      fill:"none",
      ...e,
      children:[(0,a.jsx)("path",{
        fill:"#fff",
        fillRule:"evenodd",
        d:"M9.312 2.866a.58.58 0 0 1 .244-.814.542.542 0 0 1 .306-.046c.89.13 1.387.251 2.203.549.12.044.22.128.287.24a.58.58 0 0 1 .076.371c-.116.88-.236 1.389-.533 2.26a.568.568 0 0 1-.18.257.546.546 0 0 1-.817-.15l-.529-.889-.024.014c-.842.49-1.921 1.083-2.823 1.454-.79.326-1.818.637-2.634.864a47.3 47.3 0 0 1-1.343.353l-.083.02-.022.005-.006.002h-.002a.543.543 0 0 1-.407-.082.58.58 0 0 1-.174-.767.556.556 0 0 1 .33-.257l.002-.001.005-.002.02-.004.08-.02.299-.074c.254-.065.609-.158 1.01-.27.81-.224 1.785-.522 2.51-.82.828-.341 1.853-.902 2.685-1.386l-.122-.206-.358-.601Z",
        clipRule:"evenodd"
      }),(0,a.jsx)("path",{
        fill:"#fff",
        d:"M5.005 12H3.217a.703.703 0 0 1-.709-.667 8.4 8.4 0 0 1 .003-.796.71.71 0 0 1 .206-.461.676.676 0 0 1 .456-.198 16.913 16.913 0 0 1 1.55 0 .693.693 0 0 1 .662.66 8.6 8.6 0 0 1-.02 1.128.37.37 0 0 1-.116.24.354.354 0 0 1-.244.094Zm3.535.001H6.458a.36.36 0 0 1-.251-.101.378.378 0 0 1-.115-.25 23.247 23.247 0 0 1-.015-2.457.729.729 0 0 1 .198-.47.695.695 0 0 1 .453-.216c.514-.039 1.03-.039 1.544 0 .171.013.332.09.452.216.12.127.19.294.198.47.039.819.034 1.639-.015 2.457a.378.378 0 0 1-.115.25.36.36 0 0 1-.251.1v.001ZM11.736 12H10.02a.362.362 0 0 1-.254-.104.38.38 0 0 1-.114-.255 45.743 45.743 0 0 1-.01-3.845.73.73 0 0 1 .185-.466.696.696 0 0 1 .438-.228 7.314 7.314 0 0 1 1.577 0 .7.7 0 0 1 .439.228.73.73 0 0 1 .185.466c.046 1.161.047 2.324.005 3.486a.757.757 0 0 1-.226.51.72.72 0 0 1-.508.207V12Z"
      })]
    }),
    eV=n(52795),
    eO=e=>(0,a.jsxs)("svg",{
      width:16,
      height:16,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,a.jsx)("g",{
        clipPath:"url(#icon-no-code-settings_svg__a)",
        children:(0,a.jsx)("path",{
          fillRule:"evenodd",
          clipRule:"evenodd",
          d:"M12.55 8.54V7.46l.52-.66c.16-.19.25-.43.27-.68.02-.25-.04-.5-.16-.72l-.34-.58c-.12-.22-.31-.4-.54-.51-.22-.1-.48-.14-.73-.11l-.83.13-.93-.54-.31-.78a1.26 1.26 0 0 0-1.16-.8h-.67c-.26 0-.5.08-.71.22-.21.14-.37.35-.46.58l-.31.78-.93.54-.83-.13c-.25-.03-.5.01-.73.11-.23.11-.42.29-.54.51l-.34.58c-.12.22-.18.47-.16.72.02.25.11.49.27.68l.52.66v1.08l-.52.66a1.2 1.2 0 0 0-.27.68c-.02.25.04.5.16.72l.34.58c.12.22.31.4.54.51.23.1.48.14.73.11l.83-.13.93.54.31.78a1.26 1.26 0 0 0 1.16.8h.67c.26 0 .5-.08.71-.22.21-.14.37-.35.46-.58l.3-.78.94-.54.83.13c.25.03.5-.01.73-.11.23-.11.41-.29.54-.51l.34-.58c.12-.22.18-.47.16-.72a1.26 1.26 0 0 0-.27-.69l-.52-.65ZM8 10.04c-1.13 0-2.04-.91-2.04-2.04S6.87 5.96 8 5.96s2.04.91 2.04 2.04-.91 2.04-2.04 2.04Z",
          fill:"currentColor"
        })
      }),(0,a.jsx)("defs",{
        children:(0,a.jsx)("clipPath",{
          id:"icon-no-code-settings_svg__a",
          children:(0,a.jsx)("path",{
            fill:"transparent",
            d:"M0 0h16v16H0z"
          })
        })
      })]
    }),
    eU=n(41609),
    eB=n.n(eU),
    eW=n(13218),
    eH=n.n(eW),
    eG=n(35161),
    eK=n.n(eG),
    eq=n(79999);
    let eY=C.default.div.withConfig({
      componentId:"sc-e095c732-0"
    })(["padding:8px 0 !important;font-size:12px;.event-param-name > div:last-of-type{color:",";}.event-param-name:not(:last-of-type){margin-bottom:8px !important;}.event-key-title{color:",";font-weight:700 !important;}.anticon-question-circle{margin-left:8px !important;}"],eq.r.colors.surface300.toString(),eq.r.colors.surface400.toString()),
    eQ=C.default.div.withConfig({
      componentId:"sc-e095c732-1"
    })(["width:100%;display:flex;justify-content:flex-end;gap:16px;margin-top:20px;a{width:fit-content !important;}button[data-element='no-code']{svg{transform:scale( 0.6 );path{fill:#ffffff !important;}}}"]);
    var eX=(0,l.memo)(e=>{
      let t=(0,c.I0)(),
      {
        action:n,
        activityName:i,
        screen:s,
        isScreenEventCreated:o
      }=e,
      {
        params:r,
        name:d
      }=n,
      {
        currentAppReducer:p,
        urlReducer:u,
        screenRenamedList:h
      }=(0,c.v9)(e=>e),
      m=(0,l.useMemo)(()=>h[i]||i,[i,h]),
      {
        setShowDashboardTemplate:v,
        setScreenEventModalOpen:g,
        setCurrentScreen:f,
        setCurrentAction:x
      }=(0,Z.Z)(),
      {
        _id:b,
        orgId:w
      }=p,
      j=(0,l.useMemo)(()=>(null==u?void 0:u.parentType)==="shareSession",[null==u?void 0:u.parentType]),
      y=(0,l.useMemo)(()=>{
        let e="nce_name=".concat(encodeURIComponent(JSON.stringify({
          o:"in",
          v:[d],
          tb:"no_code_event"
        })));
        return"/app/".concat(b,"/sessions/list/1?").concat(e)
      },[b,d]),
      k=(0,l.useCallback)(()=>{
        var e;
        null===(e=window)||void 0===e||e.open(y,"_blank")
      },[y]),
      {
        isScreenEvent:C
      }=(0,Y.Pw)(n),
      N=(0,l.useMemo)(()=>C&&o,[C,o]),
      I=e=>"screenName"===e?"Original screen name":e,
      _=(0,l.useCallback)(()=>{
        f(s),
        g(!0)
      },[s,f,g]),
      {
        videoElemRef:T
      }=(0,G.rS)(),
      L=(0,l.useCallback)(()=>{
        var e;
        x({
          ...n,
          props:r
        }),
        null==T||null===(e=T.current)||void 0===e||e.pause(),
        f(s),
        v(!0)
      },[x,n,r,T,f,s,v]),
      M=(0,l.useCallback)(()=>{
        t((0,S.CW)(null,{
          eventName:"wa_manage_smart_events_redirect",
          track_type:"event",
          eventProperty:{
            screen_name:m,
            original_screen_name:i,
            type_of_event:"screenvisit"
          }
        }))
      },[i,t,m]);
      return(0,a.jsxs)(eY,{
        className:"expanded-content",
        children:[(0,a.jsxs)("div",{
          className:"pop-height-wrap",
          children:[(0,a.jsxs)("div",{
            className:"event-param-name",
            children:[(0,a.jsx)("div",{
              className:"event-key-title",
              children:"Screen name:"
            }),(0,a.jsx)("div",{
              children:m
            })]
          }),eH()(r)&&!eB()(r)?eK()(r,(e,t)=>"rule"!==t?(0,a.jsxs)("div",{
            className:"event-param-name",
            children:[(0,a.jsxs)("div",{
              className:"event-key-title",
              children:[I(t),":"]
            }),(0,a.jsx)("div",{
              children:e
            })]
          },t):null):(0,a.jsx)("p",{
            className:"no-eventparam-message",
            children:"No properties sent"
          })]
        }),j?null:N?(0,a.jsxs)(eJ,{
          children:[(0,a.jsxs)(e$,{
            children:[(0,a.jsxs)(eV.Z,{
              variant:"ghost",
              onClick:k,
              children:[(0,a.jsx)(eP.Z,{}),"Watch sessions"]
            }),(0,a.jsxs)(eV.Z,{
              onClick:L,
              children:[(0,a.jsx)(ez,{}),"Analyze event"]
            })]
          }),(0,a.jsx)("a",{
            href:"/settings/app/".concat(w,"/").concat(b,"/smart_events"),
            target:"_blank",
            rel:"noreferrer",
            children:(0,a.jsxs)(eV.Z,{
              variant:"outline",
              onClick:M,
              children:[(0,a.jsx)(eO,{}),"Manage Smart events"]
            })
          })]
        }):(0,a.jsx)(eQ,{
          children:(0,a.jsx)(eV.Z,{
            width:"medium",
            onClick:_,
            children:"Create event"
          })
        })]
      })
    });
    let e$=C.default.div.withConfig({
      componentId:"sc-60487d1c-0"
    })(["display:flex;gap:16px;> button{flex-basis:50%;display:flex;align-items:center;justify-content:center;}"]),
    eJ=C.default.div.withConfig({
      componentId:"sc-60487d1c-1"
    })(["width:100%;margin-top:20px;display:flex;flex-direction:column;>a{button{margin-top:12px;width:100%;display:flex;align-items:center;justify-content:center;}}"]),
    e0=C.default.span.withConfig({
      componentId:"sc-60487d1c-2"
    })(["font-style:italic;color:",";margin-left:4px;"],eq.r.colors.surface200.toString()),
    e1=["viewName","viewType","idString"],
    e2=e=>"viewName"===e?"UI element name":"viewType"===e?"UI element type":"idString"===e?"UI element ID":"viewClass"===e?"UI element class":"activityName"===e?"Screen name":e,
    e3=e=>{
      let{
        obj:t,
        val:n,
        handleCopy:i,
        copy:s,
        newSdk:o,
        smartRule:r
      }=e,
      c=(0,l.useMemo)(()=>{
        if(r&&Object.keys(r).includes(t)&&"__any__"===r[t])switch(t){
          case"idString":return"(includes all UI element id)";
          case"viewName":return"(includes all UI element name)";
          case"activityName":return"(includes all UI screen name)"
        }
        return null
      },[t,r]),
      d=(0,l.useMemo)(()=>"_UXCam_Overload"===t,[t]),
      p=(0,l.useMemo)(()=>d?n.match(/\d+/g):[],[d,n]),
      u=(0,l.useMemo)(()=>o?"Undefined":"unknown",[o]),
      h=(0,l.useMemo)(()=>d?"Too many properties in this event (".concat(null==p?void 0:p[0]," out of ").concat(null==p?void 0:p[1],")."):n,[d,p,n]),
      {
        isWebSession:m
      }=(0,G.Lc)(),
      v=(0,l.useMemo)(()=>{
        if("Undefined"===n||"Undefined"===u)switch(t){
          case"viewName":return"UI element name couldn't be captured.";
          case"viewType":return"UI element type couldn't be captured.";
          case"idString":return"UI element id couldn't be captured.";
          default:return null
        }
        return o?null:"Please update your SDK to the latest version to capture the underlying UI components"
      },[u,o,t,n]);
      return["viewTypeId","gestureType","rule"].includes(t)?null:(0,a.jsxs)("div",{
        className:"event-param-name",
        children:[(0,a.jsxs)("div",{
          className:"event-key-title",
          children:[e2(t),":"]
        }),(0,a.jsx)("div",{
          children:h&&"Undefined"!==h?(0,a.jsxs)(a.Fragment,{
            children:[h,c&&(0,a.jsx)(e0,{
              children:c
            }),s&&i&&(0,a.jsx)(eD.CopyToClipboard,{
              text:i(h),
              onCopy:()=>{},
              children:(0,a.jsx)(eF.Z,{
                size:"small",
                icon:(0,a.jsx)(eR.Z,{}),
                onClick:e=>s(e)
              })
            })]
          }):(0,a.jsxs)(a.Fragment,{
            children:[(0,a.jsx)("i",{
              children:u
            }),c&&(0,a.jsx)(e0,{
              children:c
            }),(v||u)&&!m&&(0,a.jsx)(W.Z,{
              placement:"topLeft",
              title:v,
              children:(0,a.jsx)(eA.Z,{})
            })]
          })
        },t+n)]
      },t)
    },
    e5=e=>{
      let{
        newSdk:t,
        isEvent:n
      }=e;
      return n?(0,a.jsx)("p",{
        className:"no-eventparam-message",
        children:"No properties sent"
      }):(0,a.jsx)(a.Fragment,{
        children:eK()(e1,e=>(0,a.jsx)(e3,{
          obj:e,
          val:"Undefined",
          newSdk:t
        }))
      })
    };
    var e4=(0,l.memo)(e=>{
      let{
        action:t,
        newSdk:n,
        handleCreateEventBtn:i,
        displayAddEventBtn:s,
        screen:o,
        isEvent:r,
        eventName:d
      }=e,
      {
        properties:p,
        isRage:u,
        params:h
      }=t,
      m=(0,l.useMemo)(()=>p||h,[p,h]),
      {
        currentAppReducer:v,
        urlReducer:g
      }=(0,c.v9)(e=>e),
      {
        _id:f,
        orgId:x
      }=v,
      [b,w]=(0,l.useState)(void 0),
      {
        setShowDashboardTemplate:j,
        setCurrentAction:y,
        setCurrentScreen:k
      }=(0,Z.Z)(),
      {
        isSmartEvent:C,
        isScreenEvent:N
      }=(0,Y.Pw)(t),
      I=(0,l.useMemo)(()=>{
        let e="".concat(C?"nce_name":"event_name","=").concat(encodeURIComponent(JSON.stringify({
          o:"in",
          v:[d],
          tb:C?"no_code_event":"event"
        })));
        return"/app/".concat(f,"/sessions/list/1?").concat(e)
      },[f,d,C]),
      _=(0,l.useCallback)(()=>{
        window.open(I,"_blank")
      },[I]);
      (0,l.useEffect)(()=>{
        (null==m?void 0:m.rule)&&w(m.rule)
      },[null==m?void 0:m.rule]);
      let T=(0,c.I0)(),
      L=(0,l.useMemo)(()=>(null==g?void 0:g.parentType)==="shareSession",[null==g?void 0:g.parentType]),
      M=async e=>{
        e.stopPropagation(),
        e.preventDefault(),
        eE.ZP.success("copied")
      },
      F=e=>JSON.stringify(e).replace(/"/g,""),
      {
        videoElemRef:E
      }=(0,G.rS)(),
      D=(0,l.useCallback)(()=>{
        var e;
        y({
          ...t,
          props:p||h
        }),
        null==E||null===(e=E.current)||void 0===e||e.pause(),
        k(o),
        j(!0)
      },[t,h,p,o,y,k,j,E]),
      R=(0,l.useCallback)(()=>{
        T((0,S.CW)(null,{
          eventName:"wa_manage_smart_events_redirect",
          track_type:"event",
          eventProperty:{
            event_id:null==t?void 0:t.id,
            screen_name:null==o?void 0:o.activityName,
            view_name:(null==h?void 0:h.viewNameUpdated)||(null==h?void 0:h.viewName),
            view_type:null==h?void 0:h.viewType,
            element_id:null==h?void 0:h.idString,
            gesture_type:null==t?void 0:t.name,
            event_name:null==t?void 0:t.name,
            type_of_event:"gesture"
          }
        }))
      },[T,null==t?void 0:t.id,null==t?void 0:t.name,null==o?void 0:o.activityName,null==h?void 0:h.viewNameUpdated,null==h?void 0:h.viewName,null==h?void 0:h.viewType,null==h?void 0:h.idString]),
      A=(0,l.useMemo)(()=>(null==t?void 0:t.id)&&(null==t?void 0:t.type)==="smart_screenvisit_event",[t]);
      return N?(0,a.jsx)(eX,{
        screen:o,
        action:t,
        activityName:null==o?void 0:o.activityName,
        isScreenEventCreated:A
      }):(0,a.jsxs)(eY,{
        className:"expanded-content",
        children:[u&&(0,a.jsx)("ul",{
          className:"list-box",
          children:(0,a.jsxs)("li",{
            children:[(0,a.jsx)("span",{
              children:(0,a.jsx)("img",{
                alt:" ",
                src:(0,Y.RP)(t.name)
              })
            }),"Part of rage tap sequence"]
          })
        }),(0,a.jsxs)("div",{
          className:"pop-height-wrap",
          children:[C&&(0,a.jsx)(e3,{
            obj:"activityName",
            val:null==o?void 0:o.activityName,
            newSdk:n,
            smartRule:b
          }),eH()(m)&&!eB()(m)?eK()(m,(e,t)=>"anrNumber"!==t?(0,a.jsx)(e3,{
            obj:t,
            val:e,
            handleCopy:F,
            copy:M,
            newSdk:n,
            smartRule:b
          }):null):(0,a.jsx)(e5,{
            newSdk:n,
            isEvent:r
          })]
        }),!L&&(0,a.jsxs)(eJ,{
          children:[!s&&(C||r)&&(0,a.jsxs)(e$,{
            children:[(0,a.jsxs)(eV.Z,{
              variant:"ghost",
              onClick:_,
              children:[(0,a.jsx)(eP.Z,{}),"Watch sessions"]
            }),(0,a.jsxs)(eV.Z,{
              onClick:D,
              children:[(0,a.jsx)(ez,{}),"Analyze event"]
            })]
          }),C&&(0,a.jsx)("a",{
            href:"/settings/app/".concat(x,"/").concat(f,"/smart_events"),
            target:"_blank",
            rel:"noreferrer",
            children:(0,a.jsxs)(eV.Z,{
              variant:"outline",
              onClick:R,
              children:[(0,a.jsx)(eO,{}),"Manage Smart events"]
            })
          })]
        }),s&&!C&&!L&&(0,a.jsx)(eQ,{
          children:(0,a.jsx)(eV.Z,{
            width:"medium",
            onClick:i,
            children:"Create event"
          })
        })]
      })
    });
    let{
      Panel:e6
    }=B.default,
    e7=C.default.li.withConfig({
      componentId:"sc-af107030-0"
    })(["width:",";"],e=>{
      let{
        width:t
      }=e;
      return"".concat(t,"px !important")
    }),
    e8=C.default.div.withConfig({
      componentId:"sc-af107030-1"
    })(["height:16px;width:16px;display:flex;justify-content:center;align-items:center;svg path,svg rect{transition:all 0.1s ease-in-out;}button{height:16px;width:16px;background:transparent;border:none;outline:none;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:0;transition:all 0.1s ease-in-out;&:hover{background:#F8FAFF;border-radius:2px;}}&:hover{svg{path{fill:#5D97FF;}rect{fill:#DFEAFF;}}}"]),
    e9=(0,C.default)(B.default).withConfig({
      componentId:"sc-af107030-2"
    })(["background-color:#ffffff !important;.ant-collapse-item.ant-collapse-item-active{margin-top:5px;padding:5px 0;border:1px solid #5D97FF;}.ant-collapse-content > .ant-collapse-content-box{padding:0;}"]),
    te=C.default.span.withConfig({
      componentId:"sc-af107030-3"
    })(["font-size:12px;margin-left:13px;color:rgba(73,87,110,0.6);"]),
    tt=C.default.span.withConfig({
      componentId:"sc-af107030-4"
    })(["font-size:13px;font-weight:500;color:#49576E;svg{position:relative;top:2px;margin:0 2px;width:18px;height:18px;}"]),
    tn=C.default.span.withConfig({
      componentId:"sc-af107030-5"
    })(["margin-right:10px;"]),
    ti=(0,l.memo)(e=>{
      let{
        sessionDetail:t
      }=(0,G.Lc)(),
      {
        setSelectedScreenName:n
      }=(0,G.he)(),
      {
        setManagePopupOpen:i,
        setCurrentAction:s,
        setCurrentScreen:o,
        noCodeEventsFeatureFlag:r,
        setScreenEventModalOpen:d
      }=(0,Z.Z)(),
      {
        urlReducer:p
      }=(0,c.v9)(e=>e),
      {
        parentType:u,
        sessionid:m
      }=p,
      v=(0,c.I0)(),
      {
        device:g,
        newSdk:f
      }=t||{},
      {
        active:x,
        containerWidth:b,
        gestureIndex:w,
        action:j,
        onRewind:y,
        screen:k
      }=e,
      {
        properties:C,
        isRage:N,
        name:I,
        time:_,
        params:L
      }=j,
      {
        isEvent:M,
        isSmartEvent:F,
        isGesture:E,
        isScreenEvent:D
      }=(0,Y.Pw)(j),
      [R,A]=(0,l.useState)(""),
      P=(0,l.useMemo)(()=>"".concat(w,"-").concat(I,"-").concat(_),[w,I,_]),
      z=(0,l.useMemo)(()=>{
        if(!r||!(null==g?void 0:g.platform)||!(null==g?void 0:g.sdkVersion)||"shareSession"===u)return!1;
        let e=["Single Tap","Double Tap","Swipe Up","Swipe Down","Swipe Left","Swipe Right","Long Press","Zoom In","Zoom Out"].includes(I),
        t="native"===g.sdkPluginType||"react-native"===g.sdkPluginType,
        n="flutter"===g.sdkPluginType,
        i=!1;
        return t?i=(0,eT.iY)(g.sdkVersion,1===g.platform?"3.0.7":"3.6.0"):n?i=(0,eT.iY)(g.sdkVersion,1===g.platform?"3.7.1":"3.7.0"):eT.k2.includes(g.sdkPluginType)&&(i=!0),
        e&&i
      },[r,null==g?void 0:g.platform,null==g?void 0:g.sdkVersion,g.sdkPluginType,u,I]),
      V=(0,l.useCallback)(e=>{
        let t=R===e?"":e;
        A(t),
        t&&v((0,S.CW)(null,{
          eventName:"wa_activity_expand",
          track_type:"event",
          eventProperty:{
            session_id:m,
            element_type:M||F||D?"event":"gesture",
            screen_name:null==k?void 0:k.activityName,
            view_name:(null==C?void 0:C.viewNameUpdated)||(null==C?void 0:C.viewName),
            view_type:null==C?void 0:C.viewType,
            element_id:null==C?void 0:C.idString,
            ...M||F||D?{
              type_of_event:F?"nocode":D?"screenvisit":"UI Freeze"===I?"predefined":"custom"
            }:{}
          }
        }))
      },[R,m,M,F,C,k,I,v,D]),
      O=(0,l.useCallback)(()=>{
        y(_)
      },[y,_]),
      U=(0,l.useCallback)(()=>{
        s({
          ...j,
          screenName:null==k?void 0:k.activityName,
          props:(null==j?void 0:j.params)||(null==j?void 0:j.properties)
        }),
        o(k),
        i(!0)
      },[s,j,o,k,i]),
      Q=(0,l.useCallback)(()=>{
        s({
          ...j,
          props:C||L
        }),
        o(k),
        D?d(!0):i(!0)
      },[s,j,C,L,o,k,D,d,i]),
      X=(0,l.useCallback)(()=>{
        v((0,S.CW)(null,{
          eventName:"wa_activity_click_on_bar_element",
          track_type:"event",
          eventProperty:{
            session_id:m,
            clicked_element:M||F||D?"event":"gesture"
          }
        }))
      },[v,M,F,m,D]),
      $=(0,l.useCallback)(()=>{
        O(),
        n(null==k?void 0:k.activityName)
      },[O,n,k]);
      return(0,a.jsx)(a.Fragment,{
        children:(0,a.jsx)("li",{
          className:T()("gesture-box",{
            active:x
          },{
            "event-box":M
          },{
            "ui-freeze-box":M&&"UI Freeze"===I
          },{
            "rage-box":N
          },{
            "old-sdk-box":!f&&M
          },{
            "no-code-box":r&&L
          }),
          "aria-hidden":"true",
          children:(0,a.jsx)(B.default,{
            accordion:!0,
            activeKey:[R],
            expandIconPosition:["end"],
            ghost:!0,
            children:(0,a.jsx)(e6,{
              showArrow:!1,
              extra:(0,a.jsx)("span",{
                "aria-hidden":"true",
                onClick:()=>V(P),
                children:(0,a.jsx)(h.GW,{})
              }),
              className:"activity-header-wrap",
              onClick:X,
              header:(0,a.jsxs)("div",{
                children:[(0,a.jsxs)("ul",{
                  "aria-hidden":"true",
                  onClick:$,
                  children:[(0,a.jsx)("li",{
                    className:"gesture-time",
                    children:(0,H.Ko)(_)
                  }),(0,a.jsx)("li",{
                    className:T()("gesture-icon",{
                      "rage-icon":N&&(!r||F)
                    }),
                    children:(0,a.jsx)(eI,{
                      name:(0,Y.jT)(I,N,M,F&&r,D&&r)
                    })
                  }),(0,a.jsx)(e7,{
                    className:"gesture-name",
                    width:"".concat(b-(r?133:100)),
                    children:(0,a.jsx)(eM,{
                      isEvent:M,
                      isGesture:E,
                      isScreenEvent:D,
                      isSmartEvent:F,
                      properties:C,
                      params:L,
                      name:I,
                      newSdk:f
                    })
                  })]
                }),z&&!F&&(0,a.jsx)(e8,{
                  children:(0,a.jsx)(W.Z,{
                    title:"Create event",
                    align:{
                      offset:[0,8]
                    },
                    overlayStyle:{
                      pointerEvents:"none"
                    },
                    children:(0,a.jsx)("button",{
                      type:"button",
                      onClick:U,
                      className:"add-event-btn",
                      children:(0,a.jsx)(K,{})
                    })
                  })
                }),(F||D)&&"shareSession"!==u&&(0,a.jsx)(e8,{
                  children:(0,a.jsx)(W.Z,{
                    title:"Edit event",
                    align:{
                      offset:[0,8]
                    },
                    overlayStyle:{
                      pointerEvents:"none"
                    },
                    children:(0,a.jsx)("button",{
                      type:"button",
                      onClick:Q,
                      className:"add-event-btn",
                      children:(0,a.jsx)(q,{})
                    })
                  })
                })]
              }),
              children:(0,a.jsx)(e4,{
                action:j,
                eventName:I,
                isEvent:M,
                newSdk:f,
                handleCreateEventBtn:U,
                displayAddEventBtn:z,
                screen:k
              })
            },P)
          })
        },w)
      })
    });
    var ts=(0,l.memo)(e=>{
      let{
        containerWidth:t,
        action:n,
        gestureIndex:i,
        onRewind:s,
        currentGestures:o,
        screen:r
      }=e,
      {
        isRageTapsGroup:c,
        rageGestures:d,
        time:p
      }=n,
      u=d?d[0].time:"",
      [m,v]=(0,l.useState)(""),
      g=(0,l.useMemo)(()=>"".concat(i,"-").concat(u,"-").concat(p),[i,u,p]);
      return(0,a.jsx)(a.Fragment,{
        children:c?(0,a.jsx)(e9,{
          accordion:!0,
          expandIconPosition:["end"],
          activeKey:[m],
          ghost:!0,
          children:(0,a.jsx)(e6,{
            showArrow:!1,
            extra:(0,a.jsx)("span",{
              "aria-hidden":"true",
              onClick:()=>{
                v(m===g?"":g)
              },
              children:(0,a.jsx)(tn,{
                children:(0,a.jsx)(h.GW,{})
              })
            }),
            header:(0,a.jsxs)(a.Fragment,{
              children:[(0,a.jsx)(te,{
                children:(0,H.Ko)(d[0].time)
              }),(0,a.jsxs)(tt,{
                children:[(0,a.jsx)(eZ.Z4,{}),(0,a.jsxs)("span",{
                  children:["Rage behavior (",d.length," gestures)"]
                })]
              })]
            }),
            children:(0,a.jsx)(a.Fragment,{
              children:null==d?void 0:d.map((e,n)=>{
                let l=o.has(e);
                return(0,a.jsx)(ti,{
                  active:l,
                  action:e,
                  containerWidth:t,
                  gestureIndex:i+n+1,
                  onRewind:s,
                  screen:r
                })
              })
            })
          },g)
        }):(0,a.jsx)(ti,{
          active:o.has(n),
          action:n,
          containerWidth:t,
          gestureIndex:i,
          onRewind:s,
          screen:r
        })
      })
    }),
    ta=n(65589),
    tl=n(41664),
    to=n.n(tl),
    tr=(0,l.memo)(e=>{
      let{
        activityProperties:t
      }=e;
      return(0,a.jsx)(eY,{
        className:"expanded-content",
        children:(0,a.jsx)("div",{
          className:"pop-height-wrap",
          children:t&&Object.keys(t).length>0?Object.entries(t).map(e=>{
            let[t,n]=e;
            return(0,a.jsxs)("div",{
              className:"event-param-name",
              children:[(0,a.jsxs)("div",{
                className:"event-key-title",
                children:[t,":"]
              }),(0,a.jsx)("div",{
                children:n
              })]
            },t)
          }):(0,a.jsx)("p",{
            className:"no-eventparam-message",
            children:"No properties sent"
          })
        })
      })
    });
    let{
      Panel:tc
    }=B.default,
    td=(0,C.default)(B.default).withConfig({
      componentId:"sc-c9e3a789-0"
    })(["background:transparent !important;.ant-collapse-item-active{margin-bottom:4px !important;border-color:#5d97ff !important;}.ant-collapse-item{background:transparent;border:1px solid transparent;overflow:hidden;margin:5px 5px 0px 5px;.ant-collapse-content{background:transparent;.ant-collapse-content-box{padding:0 10px !important;}}}.ant-collapse-header{background:transparent;> div{margin-right:0;}.ant-collapse-extra{margin-left:8px !important;margin-right:5px;}.ant-collapse-header-text{.item-header{margin:0;padding:4px 0 0 7px;width:100%;h3{width:100%;display:flex;align-items:center;.screen-name-wrapper{position:relative;display:flex;flex:1;}.timeline-screen-element{max-width:160px;position:relative;}.timeline-engagement-time{position:relative;display:inline-block;right:0;margin-inline:4px;}.sidebar-heatmap-icon{justify-content:center;align-items:center;position:relative;padding:0;right:auto;.icon-custom{right:0;}}}}}}"]),
    tp=C.default.div.withConfig({
      componentId:"sc-c9e3a789-1"
    })(["height:16px;width:16px;display:inline-block;svg path,svg rect{transition:all 0.1s ease-in-out;}button{height:16px;width:16px;background:transparent;border:none;outline:none;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:0;transition:all 0.1s ease-in-out;&:hover{background:#f8faff;border-radius:2px;}}&:hover{svg{path{fill:#5d97ff;}rect{fill:#dfeaff;}}}"]),
    tu=(0,l.memo)(e=>{
      let t=(0,c.I0)(),
      {
        screen:n,
        handleHeaderClick:i,
        eventIndex:s,
        active:o,
        time:r,
        activityName:d,
        isSkippedScreenActivity:p,
        engagementTime:u,
        onRewind:v,
        displayAddScreenEventBtn:g
      }=e,
      {
        setScreenEventModalOpen:f,
        setCurrentScreen:x
      }=(0,Z.Z)(),
      {
        isWebSession:b
      }=(0,G.Lc)(),
      {
        urlReducer:{
          appId:w,
          shareSessionKey:j
        },
        appFilter:{
          dateSegment:y
        }
      }=(0,c.v9)(e=>e),
      k=(0,l.useCallback)(e=>(0,m.$)(e,[y]),[y]),
      C=(0,l.useCallback)(()=>{
        v(r+.001)
      },[v,r]),
      N=(0,l.useCallback)(()=>{
        x(n),
        f(!0)
      },[n,x,f]);
      return(0,a.jsx)("div",{
        "aria-hidden":"true",
        onClick:i,
        className:T()("item-header","event-header-".concat(s),{
          active:o
        }),
        children:(0,a.jsxs)("h3",{
          children:[(0,a.jsx)("span",{
            className:"time",
            style:{
              display:"inlineBlock",
              marginRight:"5px"
            },
            children:(0,H.Ko)(r)
          }),(0,a.jsxs)("span",{
            className:"screen-name-wrapper",
            children:[(0,a.jsx)(ta.Z,{
              originalScreenName:d,
              onRenderScreen:e=>(0,a.jsx)("span",{
                "aria-hidden":"true",
                onClick:C,
                className:"timeline-screen-element",
                children:e
              })
            }),!j&&!b&&(0,a.jsx)(to(),{
              passHref:!0,
              href:{
                pathname:"/integration",
                query:{
                  parentType:"screensList",
                  appId:w,
                  screenname:encodeURIComponent(d),
                  sessionPage:"1",
                  screenpage:"1"
                }
              },
              as:k("/app/".concat(w,"/screens/details/").concat(encodeURIComponent(d),"/heatmaps")),
              legacyBehavior:!0,
              children:(0,a.jsx)("a",{
                href:"#!",
                target:"_blank",
                children:(0,a.jsx)("span",{
                  className:"sidebar-heatmap-icon",
                  children:(0,a.jsx)(W.Z,{
                    title:(0,a.jsxs)("span",{
                      children:["Open the detail page for the ",(0,a.jsx)("i",{
                        children:d
                      })," ","screen in a separate tab."]
                    }),
                    placement:"topRight",
                    children:(0,a.jsx)("i",{
                      "aria-hidden":"true",
                      className:"anticon icon-custom",
                      style:{
                        top:"2px"
                      },
                      onClick:()=>t((0,S.CW)(null,{
                        eventName:"go_to_heatmap",
                        track_type:"event",
                        eventProperty:{}
                      })),
                      children:(0,a.jsx)("svg",{
                        xmlns:"http://www.w3.org/2000/svg",
                        width:"12",
                        height:"12",
                        fill:"none",
                        viewBox:"0 0 12 12",
                        children:(0,a.jsx)("path",{
                          stroke:"#253858",
                          strokeLinecap:"round",
                          strokeLinejoin:"round",
                          strokeOpacity:"0.6",
                          strokeWidth:"1.167",
                          d:"M11.25 7.167v2.916a1.167 1.167 0 01-1.167 1.167H1.917A1.167 1.167 0 01.75 10.083V1.917A1.167 1.167 0 011.917.75h2.916m2.042 4.375L11.25.75 6.875 5.125zM8.333.75h2.917v2.917L8.333.75z"
                        })
                      })
                    })
                  })
                })
              })
            })]
          }),p&&(0,a.jsxs)("span",{
            className:"timeline-skip-icon",
            children:[(0,a.jsx)(h.C4,{}),"skipped"]
          }),!!u&&(0,a.jsx)("span",{
            className:"timeline-engagement-time",
            children:u
          }),g&&(0,a.jsx)(tp,{
            children:(0,a.jsx)(W.Z,{
              title:"Create event",
              align:{
                offset:[0,8]
              },
              overlayStyle:{
                pointerEvents:"none"
              },
              children:(0,a.jsx)("button",{
                type:"button",
                onClick:N,
                className:"add-event-btn",
                children:(0,a.jsx)(K,{})
              })
            })
          })]
        })
      })
    });
    var th=e=>{
      let{
        screen:t,
        eventIndex:n,
        active:i,
        handleHeaderClick:s,
        time:o,
        activityName:r,
        isSkippedScreenActivity:d,
        engagementTime:p,
        onRewind:u,
        noCodeEventsFeatureFlag:m
      }=e,
      v=(0,c.I0)(),
      {
        isWebSession:g
      }=(0,G.Lc)(),
      {
        urlReducer:{
          sessionid:f,
          parentType:x
        }
      }=(0,c.v9)(e=>e),
      [b,w]=(0,l.useState)(""),
      j=(0,l.useMemo)(()=>"".concat(n,"-").concat(r,"-").concat(o),[n,r,o]),
      y=(0,l.useMemo)(()=>({
        name:"",
        time:o,
        params:{
          screenName:r
        },
        type:"smart_screenvisit_event"
      }),[r,o]),
      k=(0,l.useMemo)(()=>{
        var e;
        return null==t?void 0:null===(e=t.actions)||void 0===e?void 0:e.some(e=>(null==e?void 0:e.id)&&(null==e?void 0:e.type)==="smart_screenvisit_event")
      },[null==t?void 0:t.actions]),
      C=(0,l.useCallback)(e=>{
        let t=b===e?"":e;
        w(t),
        t&&v((0,S.CW)(null,{
          eventName:"wa_activity_expand",
          track_type:"event",
          eventProperty:{
            session_id:f,
            screen_name:r,
            type_of_event:"screenvisit"
          }
        }))
      },[r,b,v,f]),
      {
        sessionDetail:N
      }=(0,G.Lc)(),
      {
        device:I
      }=N,
      _=(0,l.useMemo)(()=>{
        if(!m||!(null==I?void 0:I.platform)||!(null==I?void 0:I.sdkVersion)||"shareSession"===x||k)return!1;
        let e="native"===I.sdkPluginType||"react-native"===I.sdkPluginType,
        t="flutter"===I.sdkPluginType,
        n=!1;
        return e?n=(0,eT.iY)(I.sdkVersion,1===I.platform?"3.0.7":"3.6.0"):t?n=(0,eT.iY)(I.sdkVersion,1===I.platform?"3.7.1":"3.7.0"):eT.k2.includes(I.sdkPluginType)&&(n=!0),
        n
      },[m,null==I?void 0:I.platform,null==I?void 0:I.sdkVersion,I.sdkPluginType,x,k]);
      return m&&_||g?(0,a.jsx)(td,{
        accordion:!0,
        activeKey:k?[""]:[b],
        expandIconPosition:"end",
        ghost:!0,
        children:(0,a.jsx)(tc,{
          showArrow:!1,
          extra:k?null:(0,a.jsx)("span",{
            "aria-hidden":"true",
            onClick:()=>C(j),
            children:(0,a.jsx)(h.GW,{})
          }),
          className:"activity-header-wrap",
          header:(0,a.jsx)(tu,{
            screen:t,
            eventIndex:n,
            active:i,
            handleHeaderClick:s,
            time:o,
            activityName:r,
            isSkippedScreenActivity:d,
            engagementTime:p,
            onRewind:u,
            noCodeEventsFeatureFlag:m,
            isScreenEventCreated:k,
            displayAddScreenEventBtn:_
          }),
          children:g?(0,a.jsx)(tr,{
            activityProperties:null==t?void 0:t.activityProperties
          }):(0,a.jsx)(eX,{
            screen:t,
            activityName:r,
            action:y,
            isScreenEventCreated:k
          })
        },j)
      }):(0,a.jsx)(tu,{
        ...e
      })
    },
    tm=(0,l.memo)(e=>{
      let{
        screen:t,
        active:n,
        onRewind:i,
        eventIndex:s,
        sessionDetail:o,
        currentGestures:d,
        selectedGestureFields:u,
        selectedEventFields:h,
        selectedSmartEventFields:m,
        engagementTime:v,
        disabled:g,
        isSkippedScreenActivity:f,
        visibleSkippedScreen:x,
        uploadedOn:b
      }=e,
      w=(0,c.I0)(),
      {
        setSelectedScreenName:j
      }=(0,G.he)(),
      {
        urlReducer:{
          parentType:y,
          sessionid:k,
          secondarysessionid:C,
          shareSessionKey:N,
          appId:I
        },
        screenRenamedList:_
      }=(0,c.v9)(e=>e),
      {
        time:F,
        activityName:E,
        actions:D=[]
      }=t,
      {
        _id:R
      }=o,
      {
        noCodeEventsFeatureFlag:A
      }=(0,Z.Z)(),
      {
        getScreenLayoutData:P
      }=(0,G.Rb)(),
      z=(0,M.useQueryClient)(),
      V="aiSessionsList"===y?C:k,
      U=(0,l.useMemo)(()=>["sessionEvents",{
        appid:I,
        sessionId:V,
        uploadedon:b
      }],[I,V,b]),
      B=(0,l.useMemo)(()=>["sessionNocodeEvents",{
        appid:I,
        sessionId:V,
        uploadedon:b
      }],[I,V,b]),
      W=z.getQueryData(U),
      H=z.getQueryData(B),
      {
        aiSessionFeatureAllowed:K
      }=(0,p.I)()||{},
      q="aiSessionsList"===y||"aiSessionsDetail"===y,
      Y=!!(null==o?void 0:o.sessionanalyzedbyai)&&!!K&&!!q,
      Q=(0,l.useMemo)(()=>"heatmapsList"===y?160:"issues"===y?890:Y?230:110,[Y,y]),
      X=(0,l.useCallback)(()=>{
        i(F+.001)
      },[i,F]),
      $=(0,l.useCallback)(e=>{
        i(e)
      },[i]),
      J=(0,l.useCallback)(()=>{
        j(E),
        X(),
        w((0,S.CW)(null,{
          eventName:"wa_activity_click_on_bar_element",
          track_type:"event",
          eventProperty:{
            session_id:V,
            clicked_element:"screen"
          }
        }))
      },[V,X,w,E,j]),
      ee=(0,l.useRef)();
      (0,l.useEffect)(()=>{
        if(n){
          let e=ee.current;
          if(e){
            let t=e.closest(".event-wrapper");
            if(!t)return;
            t.scrollTo({
              behavior:"smooth",
              top:e.offsetTop-Q
            })
          }
        }
      },[n]);
      let et=l.useMemo(()=>D.filter(e=>{
        let{
          name:t,
          type:n
        }=e;
        return"gesture"===n?u[t]:"sdk_event"===n?W&&0===Object.keys(h||{}).length?null:0===Object.keys(h||{}).length?t:h[t]:H&&0===Object.keys(m||{}).length?null:0===Object.keys(m||{}).length?t:m[t]
      }),[D,h,u,m,W,H]);
      return(0,a.jsx)(O,{
        isSkippedScreenActivity:f,
        visibleSkippedScreen:x,
        shareSessionKey:N,
        activityNameLength:(_[E]||E).length,
        children:(0,a.jsx)("div",{
          className:T()("screen-timeline-display",{
            "screen-timeline-overlay":f
          }),
          "data-intercom-target":"".concat(E," ").concat(s),
          children:(0,a.jsx)(r.Z,{
            loading:!N&&V!==R,
            active:!0,
            paragraph:{
              rows:6
            },
            children:(0,a.jsxs)("div",{
              ref:ee,
              className:T()("event-item","event-item-".concat(s),{
                active:n,
                disabled:g
              }),
              style:{
                borderLeft:"1px solid #F0F0FF",
                borderRight:"1px solid #F0F0FF",
                borderBottom:"1px solid #F0F0FF",
                borderTop:"2px solid ".concat(P(y).isSequentialTimelineColor?(0,L.g)(s):(0,L.Z)(E?E.trim():""))
              },
              children:[(0,a.jsx)(th,{
                screen:t,
                eventIndex:s,
                active:n,
                handleHeaderClick:J,
                time:F,
                activityName:E,
                isSkippedScreenActivity:f,
                engagementTime:v,
                onRewind:i,
                noCodeEventsFeatureFlag:A
              }),(0,a.jsx)("div",{
                className:"item-body",
                id:"gesture-body-".concat(s),
                children:(0,a.jsx)("ul",{
                  children:et.length>0?et.map((e,n)=>{
                    var i,
                    s;
                    return(0,a.jsx)(ts,{
                      action:e,
                      gestureIndex:n,
                      onRewind:$,
                      currentGestures:d,
                      containerWidth:null==ee?void 0:null===(s=ee.current)||void 0===s?void 0:null===(i=s.getBoundingClientRect())||void 0===i?void 0:i.width,
                      screen:t
                    },n)
                  }):(0,a.jsx)("li",{
                    className:"no-interaction",
                    children:"No user interaction"
                  })
                })
              })]
            },F+s)
          })
        })
      })
    });
    let tv=e=>{
      let{
        engagementTime:t,
        len:n,
        handleClick:i,
        viewTime:s
      }=e;
      return(0,a.jsxs)("a",{
        href:"#!",
        onClick:i,
        className:"skipped-header",
        children:[(0,a.jsxs)("span",{
          className:"name",
          children:["".concat(s," Skipped ").concat(n||1," screen").concat(n?"s":""),(0,a.jsx)("span",{
            className:"caret-button",
            children:(0,a.jsx)(h.GW,{})
          })]
        }),(0,a.jsx)("span",{
          children:t
        })]
      })
    },
    tg=(0,l.memo)(e=>{
      let[t,n]=(0,l.useState)(!1),
      {
        screenList:i,
        ...s
      }=e,
      o=(0,l.useMemo)(()=>i.reduce((e,t)=>e+(t.endTime-t.time),0),[i],[]),
      r=(0,l.useMemo)(()=>(0,k.zk)({
        durationInSecs:o,
        roundFalse:!1
      }),[o]),
      c=(0,l.useCallback)(e=>{
        e.preventDefault(),
        n(!t)
      },[t]);
      return(0,a.jsxs)(V,{
        visibleSkippedScreen:t,
        children:[(0,a.jsx)(tv,{
          viewTime:(0,H.Ko)(i[0].time),
          len:i.length,
          engagementTime:r,
          handleClick:c
        }),i.map((e,n)=>{
          let i=e.endTime-e.time;
          return(0,a.jsx)(tm,{
            eventIndex:n,
            screen:e,
            engagementTime:i<60?"".concat(Math.round(i)," sec"):(0,k.zk)({
              durationInSecs:i,
              roundFalse:!1
            }),
            isSkippedScreenActivity:!0,
            disabled:!0,
            visibleSkippedScreen:t,
            ...s
          },e.activityName+n)
        })]
      })
    }),
    tf=(0,l.memo)(e=>{
      let[t,n]=(0,l.useState)(!1),
      {
        isSkippedScreenActivity:i,
        engagementTime:s,
        screen:{
          time:o
        }={}
      }=e,
      {
        screenTimelineReducer:{
          selectedScreens:r=[]
        }
      }=(0,c.v9)(e=>e),
      d=(0,l.useCallback)(e=>{
        e.preventDefault(),
        n(!t)
      },[t]);
      return(0,a.jsxs)(V,{
        visibleSkippedScreen:t,
        children:[i&&r.length&&(0,a.jsx)(tv,{
          viewTime:(0,H.Ko)(o),
          handleClick:d,
          engagementTime:s
        }),(0,a.jsx)(tm,{
          visibleSkippedScreen:t,
          ...e
        })]
      })
    });
    var tx=n(99933),
    tb=n(25332),
    tw=n(4958),
    tj=e=>(0,a.jsxs)("svg",{
      width:91,
      height:90,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,a.jsx)("path",{
        d:"M35.37 17.402c-7.676 0-13.785.64-17.991 1.288-5.068.776-8.684 4.908-9.057 9.919-.285 3.811-.549 9.274-.549 16.391 0 7.117.264 12.58.549 16.391.373 5.011 3.989 9.143 9.057 9.919 4.206.647 10.315 1.288 17.992 1.288 7.677 0 13.785-.641 17.992-1.288 5.068-.776 8.684-4.908 9.057-9.919a156 156 0 0 0 .206-3.181c3.027 1.813 6.631 3.695 10.537 5.163 4.213 1.584 8.537-1.219 9.087-5.55.401-3.147.79-7.56.79-12.823 0-5.264-.39-9.676-.79-12.824-.552-4.332-4.874-7.133-9.087-5.55-3.906 1.47-7.51 3.35-10.537 5.164a156.047 156.047 0 0 0-.206-3.181c-.373-5.011-3.99-9.143-9.057-9.919-4.207-.649-10.315-1.288-17.992-1.288Z",
        fill:"#E8E8EB"
      }),(0,a.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M48.945 37.173c.459-.117.779-.52.779-.98 0-.461-.32-.864-.78-.981-1.754-.447-2.832-.937-3.63-1.67-.803-.736-1.429-1.816-2.064-3.655a1.041 1.041 0 0 0-.99-.692c-.448 0-.846.279-.989.692-.635 1.84-1.261 2.919-2.064 3.655-.798.733-1.876 1.223-3.631 1.67a1.02 1.02 0 0 0-.78.98c0 .462.32.864.78.981 1.755.447 2.833.937 3.631 1.67.803.736 1.429 1.816 2.064 3.655.143.413.541.692.99.692.448 0 .846-.279.989-.692.635-1.84 1.261-2.919 2.063-3.655.799-.733 1.877-1.223 3.632-1.67Zm-5.812 12.988c.46-.117.78-.52.78-.981 0-.462-.32-.865-.78-.981-3.176-.805-5.25-1.717-6.817-3.15-1.57-1.435-2.737-3.492-3.885-6.8a1.041 1.041 0 0 0-.988-.69c-.448 0-.846.277-.99.69 0 0-2.314 5.365-3.884 6.8-1.567 1.433-3.64 2.345-6.817 3.15-.46.116-.78.52-.78.98 0 .462.32.865.78.982 3.176.804 5.25 1.716 6.817 3.149 1.57 1.436 2.737 3.492 3.885 6.8.143.413.54.69.989.69.447 0 .845-.277.988-.69 1.148-3.308 2.315-5.364 3.885-6.8 1.567-1.433 3.64-2.345 6.817-3.15Z",
        fill:"#fff"
      }),(0,a.jsx)("rect",{
        x:36.531,
        y:56.5,
        width:29.626,
        height:29.626,
        rx:14.813,
        fill:"#fff"
      }),(0,a.jsx)("path",{
        d:"M51.344 59.984c-6.258 0-11.327 5.07-11.327 11.328 0 6.258 5.069 11.328 11.327 11.328 6.259 0 11.328-5.07 11.328-11.328 0-6.259-5.07-11.328-11.328-11.328Zm.878 18.351c-.41.283-1.104.297-1.444.184l-.198-.099a1.553 1.553 0 0 1-.793-1.388c0-.58.283-1.076.764-1.33l.184-.1c.184-.085.411-.141.553-.141l.226.014c.793.099 1.388.764 1.388 1.557 0 .567-.24 1.006-.68 1.303Zm-1.67-14.089c.254-.127.552-.212.792-.212.283 0 .538.07.779.212l.184.1c.354.254.58.68.58 1.076v6.485a1.4 1.4 0 0 1-.622 1.147c-.553.297-1.161.269-1.459.155l-.255-.113a1.31 1.31 0 0 1-.75-1.19v-6.484c0-.496.269-.92.75-1.176Z",
        fill:"#D0D2D7"
      })]
    }),
    ty=n(45995),
    tk=n(17877),
    tC=n(61127),
    tS=n(26617);
    let tN=C.default.div.withConfig({
      componentId:"sc-7af991c0-0"
    })(["position:relative;margin:16px 12px 4px 12px;padding:8px;border-radius:6px;background:#fff;z-index:1;background:#E71DFF03;&::before{content:'';position:absolute;inset:0;padding:1px;border-radius:6px;background:linear-gradient(187deg,#EE5EDD 48.25%,#49C5FF 81.95%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;z-index:-1;}"]),
    tI=C.default.div.withConfig({
      componentId:"sc-7af991c0-1"
    })(["display:flex;align-items:center;gap:6px;font-size:13px;line-height:18px;font-weight:500;color:#161E35;margin-bottom:6px;padding-left:2px;"]),
    t_=C.default.div.withConfig({
      componentId:"sc-7af991c0-2"
    })(["display:flex;align-items:center;gap:6px;"]),
    tT=C.default.span.withConfig({
      componentId:"sc-7af991c0-3"
    })(["background:",";border:1px solid ",";color:",";padding:4px 8px;border-radius:30px;font-size:12px;line-height:16px;"],eq.r.colors.surface05.toString(),eq.r.colors.surface10.toString(),eq.r.colors.surface400.toString()),
    tL=C.default.div.withConfig({
      componentId:"sc-7af991c0-4"
    })(["font-size:13px;line-height:18px;color:#454B5D;margin-left:20px;"]),
    tM=C.default.div.withConfig({
      componentId:"sc-7af991c0-5"
    })(["display:flex;justify-content:center;align-items:center;height:32px;width:100%;background-color:#fff;"]),
    tZ=C.default.div.withConfig({
      componentId:"sc-7af991c0-6"
    })(["overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:",";-webkit-box-orient:vertical;white-space:normal;"],e=>e.clamp),
    tF=C.default.button.withConfig({
      componentId:"sc-7af991c0-7"
    })(["display:flex;align-items:center;gap:6px;padding:0;margin:0;background:transparent;border:none;color:#EE5FDD;font-size:13px;line-height:20px;cursor:pointer;margin-top:6px;font-size:500;"]);
    var tE=e=>{
      let{
        setSelectedTab:t
      }=e,
      [n,i]=l.useState(2),
      s=l.useRef(null),
      [o,r]=l.useState(!1),
      d=(0,c.I0)(),
      {
        debugMode:p
      }=(0,tk.$)(),
      {
        currentAppReducer:{
          _id:h
        },
        urlReducer:{
          sessionid:m,
          secondarysessionid:v,
          parentType:g,
          shareSessionKey:f
        }
      }=(0,c.v9)(e=>e),
      x="shareSession"===g,
      b=l.useMemo(()=>{
        let e="";
        try{
          e=localStorage.getItem("aiSessionsListReqBody")
        }
        catch(e){}if(!e)return null;
        try{
          return JSON.parse(e)
        }
        catch(e){
          return null
        }
      },[]),
      {
        data:w,
        isFetching:j
      }=(0,tS.C)(b),
      y=l.useMemo(()=>{
        var e,
        t;
        return null==w?void 0:null===(t=w.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.body.find(e=>e.sessionid===m)
      },[w,m]),
      k=l.useMemo(()=>{
        var e,
        t;
        return null==w?void 0:null===(t=w.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.body.find(e=>e.sessionid===v)
      },[w,v]),
      {
        data:C,
        isFetching:N
      }=(0,M.useQuery)({
        queryKey:["ai-insights",h,m,v],
        queryFn:()=>(0,tx.fd)({
          appid:h,
          sessionid:v||m
        }),
        enabled:!x&&!!h&&!k&&!!v
      }),
      {
        data:_,
        isFetching:T
      }=(0,I.s3)(f,x&&!!f),
      L=(0,l.useMemo)(()=>null==C?void 0:C.vision_version,[C]),
      Z=l.useMemo(()=>{
        if(x){
          var e,
          t;
          return(null==_?void 0:null===(t=_.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.short_description)||"No AI summary available for this session."
        }
        return v?k?k.short_description:(null==C?void 0:C.short_description)?null==C?void 0:C.short_description:"No AI summary available for this session.":(null==y?void 0:y.short_description)||"No AI summary available for this session."
      },[y,C,v,k,x,_]),
      E=l.useCallback(()=>{
        t("aiInsights"),
        d((0,S.CW)(null,{
          eventName:"wa_sessions_click_insights",
          track_type:"event",
          eventProperty:{
            source:"activity_tab"
          }
        }))
      },[t,d]);
      return l.useEffect(()=>{
        let e=s.current;
        if(!e||o)return;
        let t=parseFloat(window.getComputedStyle(e).lineHeight);
        e.scrollHeight>2*t?i(2):i(1),
        r(!0)
      },[o]),
      l.useEffect(()=>{
        window.addEventListener("resize",()=>{
          r(!1)
        })
      },[]),
      (0,a.jsx)(tN,{
        children:j||N||T?(0,a.jsx)(tM,{
          children:(0,a.jsx)(F.$j,{
            "data-size":"xs"
          })
        }):(0,a.jsxs)(a.Fragment,{
          children:[(0,a.jsxs)(tI,{
            children:[(0,a.jsxs)(t_,{
              children:[(0,a.jsx)(u,{}),"What happened in this session?"]
            }),p&&L&&(0,a.jsxs)(tT,{
              children:["Vision ",L]
            })]
          }),(0,a.jsxs)(tL,{
            children:[(0,a.jsx)(tZ,{
              ref:s,
              clamp:n,
              children:Z
            }),(0,a.jsxs)(tF,{
              onClick:E,
              children:["Full AI Summary",(0,a.jsx)(tC.Z,{})]
            })]
          })]
        })
      })
    };
    let tD=C.default.div.withConfig({
      componentId:"sc-ab986c26-0"
    })(["height:100%;width:100%;overflow:auto;position:relative;"]),
    tR=(0,C.default)(tD).withConfig({
      componentId:"sc-ab986c26-1"
    })(["display:flex;justify-content:center;align-items:center;flex-direction:column;svg{margin-bottom:16px;}h2{margin-bottom:4px;}"]),
    tA=C.default.h2.withConfig({
      componentId:"sc-ab986c26-2"
    })(["font-size:14px;line-height:24px;font-weight:600;color:#090f19;"]),
    tP=C.default.div.withConfig({
      componentId:"sc-ab986c26-3"
    })(["display:flex;align-items:center;gap:6px;margin-bottom:8px;h2{margin-bottom:0;}"]),
    tz=C.default.p.withConfig({
      componentId:"sc-ab986c26-4"
    })(["font-size:14px;line-height:24px;font-weight:400;color:#090f19;"]),
    tV=(0,C.default)(tz).withConfig({
      componentId:"sc-ab986c26-5"
    })(["font-size:13px;"]),
    tO=C.default.div.withConfig({
      componentId:"sc-ab986c26-6"
    })(["border:1px solid transparent;border-radius:12px;padding:8px;margin-right:1px;background:linear-gradient(white,white) padding-box,linear-gradient(233.37deg,#ee5edd 48.25%,#49c5ff 81.95%) border-box;font-size:14px;line-height:24px;font-weight:400;color:#333333;margin-bottom:16px;span{font-size:14px;line-height:18px;font-weight:500;color:#333333;width:100%;display:block;}ul{margin-top:4px;padding-left:18px;}li{font-size:14px;line-height:24px;font-weight:400;color:#333333;list-style:disc;}"]),
    tU=C.default.div.withConfig({
      componentId:"sc-ab986c26-7"
    })(["width:18px;height:18px;cursor:pointer;svg{transform:scale(0.75) translateX(-4px) translateY(-2px);}"]),
    tB=C.default.div.withConfig({
      componentId:"sc-ab986c26-8"
    })(["display:flex;flex-direction:row;gap:11px;margin-bottom:17px;"]),
    tW=C.default.div.withConfig({
      componentId:"sc-ab986c26-9"
    })(["font-size:14px;line-height:22px;font-weight:400;color:#090f19;white-space:nowrap;"]),
    tH=C.default.div.withConfig({
      componentId:"sc-ab986c26-10"
    })(["font-family:Roboto;font-weight:400;font-size:14px;line-height:24px;letter-spacing:0%;color:#090f19;"]),
    tG=C.default.div.withConfig({
      componentId:"sc-ab986c26-11"
    })(["font-weight:700;"]),
    tK=C.default.div.withConfig({
      componentId:"sc-ab986c26-12"
    })(["margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid #e8e8e8;h2{font-size:14px;line-height:24px;font-weight:600;color:#090f19;margin-top:16px;margin-bottom:8px;}h2:first-child{margin-top:0;}p{font-size:14px;line-height:24px;font-weight:400;color:#090f19;margin-bottom:8px;}ul{padding-left:18px;margin-top:4px;margin-bottom:8px;}li{font-size:14px;line-height:24px;font-weight:400;color:#090f19;list-style:disc;}strong{font-weight:600;}ol{padding-left:18px;list-style:auto;}& > *:last-child{margin-bottom:0;}"]);
    var tq=e=>{
      var t,
      n;
      let{
        isAISession:i
      }=e,
      {
        currentAppReducer:{
          _id:s
        },
        urlReducer:{
          sessionid:o,
          secondarysessionid:r,
          parentType:d,
          shareSessionKey:p
        },
        screenRenamedList:u
      }=(0,c.v9)(e=>e),
      {
        rewind:h
      }=(0,G.Lc)(),
      m=(0,c.I0)(),
      {
        debugMode:v
      }=(0,tk.$)(),
      g="shareSession"===d,
      {
        data:f,
        isFetching:x
      }=(0,M.useQuery)({
        queryKey:["ai-insights",s,o,r],
        queryFn:()=>(0,tx.fd)({
          appid:s,
          sessionid:r||o
        }),
        enabled:!g&&!!s&&(!!o||!!r)
      }),
      {
        data:b,
        isFetching:w
      }=(0,I.s3)(p,g&&!!p),
      j=g?null==b?void 0:null===(t=b.data)||void 0===t?void 0:t.data:f,
      y=g?w:x,
      k=l.useCallback((e,t,n)=>{
        h(e+.001),
        m((0,S.CW)(null,{
          eventName:"wa_sessions_click_insights_timestamp",
          track_type:"event",
          eventProperty:{
            time:e,
            screen_name:t,
            screen_description:n
          }
        }))
      },[h,m]);
      return i?(0,a.jsx)(tD,{
        children:y?(0,a.jsx)(F.$j,{
          "data-size":"m"
        }):(0,a.jsxs)(a.Fragment,{
          children:[(null==j?void 0:j.user_friendly_description)?(0,a.jsx)(tK,{
            children:(0,a.jsx)(tb.UG,{
              remarkPlugins:[tw.Z],
              children:j.user_friendly_description
            })
          }):(0,a.jsxs)(a.Fragment,{
            children:[(0,a.jsxs)(tP,{
              children:[(0,a.jsx)(tA,{
                children:"What happened in this session?"
              }),v&&(null==j?void 0:j.vision_version)&&(0,a.jsxs)(tT,{
                children:["Vision ",j.vision_version]
              })]
            }),(0,a.jsx)(tz,{
              children:(null==j?void 0:j.description)||"No insights available for this session."
            }),(0,a.jsxs)(tO,{
              children:[(0,a.jsx)("span",{
                children:"Highlights:"
              }),null==j?void 0:j.highlight]
            })]
          }),(0,a.jsx)(tA,{
            children:"Screen summary:"
          }),null==j?void 0:null===(n=j.screens)||void 0===n?void 0:n.map(e=>{
            let{
              screen_name:t,
              short_description:n,
              timestamp_from:i,
              timestamp_to:s
            }=e,
            l=t+n+i+s,
            o=u[t||""]||t;
            return(0,a.jsxs)(tB,{
              children:[(0,a.jsx)(tU,{
                onClick:()=>k(i,t,n),
                children:(0,a.jsx)(ty.Z,{})
              }),(0,a.jsx)(tW,{
                children:"".concat((0,H.mr)(i)," - ").concat((0,H.mr)(s))
              }),(0,a.jsxs)(tH,{
                children:[(0,a.jsx)(tG,{
                  children:o
                }),n]
              })]
            },l)
          })]
        })
      }):(0,a.jsxs)(tR,{
        children:[(0,a.jsx)(tj,{}),(0,a.jsx)(tA,{
          children:"This session hasn’t been AI analyzed yet"
        }),(0,a.jsx)(tV,{
          children:"Tara works automatically, check back soon!"
        })]
      })
    },
    tY=n(88540),
    tQ=n(98777),
    tX=n(31049),
    t$=n(20510),
    tJ=n(87066),
    t0=e=>{
      let[t,n]=(0,l.useState)([]),
      [s,o]=(0,l.useState)(),
      [r,d]=(0,l.useState)(),
      [p,u]=(0,l.useState)(!1),
      [m,v]=(0,l.useState)([]),
      [g,f]=(0,l.useState)([]),
      x=(0,M.useQueryClient)(),
      {
        users:b,
        redirectToVideo:w,
        defaultStyle:j,
        sessionDetail:y
      }=e,
      C=(0,l.useRef)(null),
      S=(0,l.useRef)(null),
      N=(0,l.useCallback)(()=>S.current,[S]),
      {
        profileReducer:I,
        urlReducer:_
      }=(0,c.v9)(e=>e),
      {
        _id:T,
        appId:L,
        time:Z
      }=y||{},
      F=null==Z?void 0:Z.sessionUploadedDateTime,
      {
        sessionid:E,
        appId:D,
        parentType:R
      }=_,
      A=T||E,
      P=L||D,
      z=e=>(0,a.jsxs)("span",{
        className:"title-name",
        children:[(0,a.jsx)("span",{
          className:"name",
          children:"".concat(e.userName," -")
        })," ",(0,a.jsx)("span",{
          className:"title-date",
          children:(0,k.jS)(e.createdOn)
        })]
      }),
      {
        mutate:V
      }=(0,M.useMutation)(e=>tQ.be.post("".concat("https://pythonapi-prod.uxcam.com","/notes/session/edit"),e,{
        withCredentials:!0,
        credentials:"include"
      }),{
        onSuccess:e=>(f([]),(null==e?void 0:e.status)===422&&eE.ZP.error("".concat(Object.values(e.data.error))),(null==e?void 0:e.status)===500&&eE.ZP.error("".concat(Object.values(e.data.error))),x.invalidateQueries(["session-note",T]))
      }),
      O=async e=>{
        let i=r.trim();
        if(i.length){
          let i=r;
          b.map(e=>{
            i=i.replaceAll("[".concat(e.display,"](").concat(e.id,")"),"".concat(e.email))
          }),
          g&&g.map(e=>{
            i=i.replaceAll("@[".concat(e,"](abc)"),e)
          });
          let s={
            note_id:e,
            updated_body:i,
            appid:P,
            uploadedon:F
          };
          n(t&&t.map(t=>t.noteId===e?{
            ...t,
            body:s.updated_body
          }:t)),
          u(!1),
          V(s)
        }
        else d(i)
      },
      U=()=>{
        let e=null==S?void 0:S.current;
        e&&(e.scrollTop=null==e?void 0:e.scrollHeight)
      },
      B=()=>{
        u(!1)
      },
      {
        mutate:W
      }=(0,M.useMutation)(e=>tQ.be.delete("".concat("https://pythonapi-prod.uxcam.com","/notes/session/delete/").concat(e.appid,"/").concat(e.note_id),{
        withCredentials:!0,
        credentials:"include"
      }),{
        onSuccess:()=>x.invalidateQueries(["session-note",T]),
        onMutate:()=>{
          let e="";
          try{
            e=JSON.parse(localStorage.getItem("aiSessionsList"===R?"aiSessionsListReqBody":"sessionsListReqBody"))
          }
          catch(e){}let t=["aiSessionsList"===R?"aiSessionItems":"sessionItems",e];
          x.cancelQueries(t);
          let n=x.getQueryData(t);
          return n&&x.setQueryData(t,e=>{
            let t=e.data.data.body.map(e=>e.sessionid===T?{
              ...e,
              sessionNotesCount:Math.max(e.sessionNotesCount-1,0)
            }:e);
            return{
              ...e,
              data:{
                ...e.data,
                data:{
                  ...e.data.data,
                  body:t
                }
              }
            }
          }),
          n
        }
      }),
      H=async(e,i)=>{
        W({
          note_id:i.noteId,
          appid:P
        }),
        n(t.filter(e=>e.noteId!==i.noteId))
      },
      G=e=>{
        let t=e.target.value;
        g.length&&g.map(e=>{
          t=t.replaceAll("@[".concat(e,"](abc)"),"".concat(e))
        });
        let n=t.split(" ");
        v([]),
        d(n.map(e=>{
          let t=e;
          if(e.match(k.xP)){
            let n=e.match(k.xP);
            v(n);
            for(let e=n.length-1;e>=0;e--)t=t.replace(n[e],"@[".concat(n[e],"](abc)"));
            return t
          }
          return"".concat(e)
        }).join(" "))
      },
      K=e=>{
        let t=e;
        return b.map(e=>t=t.replaceAll("@".concat(e.email),"@[".concat(e.display,"](").concat(e.id,")"))),
        t
      },
      q=e=>{
        let t=e.split(" ");
        return v([]),
        t.map(e=>{
          let t=e;
          if(e.match(k.xP)){
            let n=e.match(k.xP);
            v(n);
            for(let e=n.length-1;e>=0;e--)t=t.replaceAll(n[e],"@[".concat(n[e],"](abc)"));
            return t
          }
          return"".concat(e)
        }).join(" ")
      },
      Y=async e=>{
        await o(e.noteId),
        await u(!0);
        let t=q(K(e.body));
        await d(t),
        C&&C.current.focus()
      },
      Q=e=>(0,a.jsx)("div",{
        className:"title-action",
        children:I.email===e.userEmail&&(0,a.jsxs)(a.Fragment,{
          children:[(0,a.jsx)(eF.Z,{
            onClick:()=>Y(e),
            children:(0,a.jsx)(h.qY,{})
          }),(0,a.jsx)(tX.Z,{
            placement:"topRight",
            trigger:["click"],
            title:(0,a.jsxs)("div",{
              className:"note-delete-title",
              children:[(0,a.jsx)("p",{
                className:"pop-title",
                children:(0,a.jsx)("strong",{
                  children:"Delete Note?"
                })
              }),(0,a.jsx)("p",{
                className:"pop-des",
                children:"This can’t be undone and the note will be deleted permanently."
              })]
            }),
            onConfirm:t=>H(t,e),
            okText:"Delete",
            cancelText:"Cancel",
            icon:"",
            overlayClassName:"pop-up-session-note",
            getPopupContainer:N,
            children:(0,a.jsx)(eF.Z,{
              children:(0,a.jsx)(h.eJ,{})
            })
          })]
        })
      }),
      X=e=>{
        let t="".concat(e.target.innerText);
        "time-span-on-note"===e.target.className&&w((0,k.ox)(t))
      },
      $=e=>{
        let t=e;
        return b.map(e=>t=t.replaceAll("@".concat(e.email),"<span class='selected-user'>".concat(e.display,"</span>"))),
        (0,a.jsx)("span",{
          dangerouslySetInnerHTML:{
            __html:" ".concat(t," ")
          }
        })
      },
      J=e=>e.split(" ").map(e=>{
        let t=e;
        if(e.match(k.xP)){
          let n=e.match(k.xP);
          for(let e=n.length-1;e>=0;e--)t=t.replace(n[e],"<span class='time-span-on-note'}>".concat(n[e],"</span>"));
          return(0,a.jsx)("span",{
            "aria-hidden":"true",
            onClick:e=>X(e),
            dangerouslySetInnerHTML:{
              __html:" ".concat(t," ")
            }
          })
        }
        return e.match(k.HN)?$(e):" ".concat(e," ")
      }),
      ee=(0,l.useMemo)(()=>({
        appid:P,
        sessionid:A,
        uploadedon:F
      }),[L,T,F]),
      et=(0,l.useMemo)(()=>["session-note",T],[T]),
      {
        data:en
      }=(0,M.useQuery)(et,()=>tJ.default.post("".concat("https://pythonapi-prod.uxcam.com","/notes/session/list"),ee,{
        withCredentials:!0,
        credentials:"include"
      }).then(e=>{
        let{
          data:{
            data:t
          }
        }=e;
        return t
      }),{});
      return(0,l.useEffect)(()=>{
        en&&n(en)
      },[T,en]),
      (0,l.useEffect)(()=>U,[t,p]),
      (0,l.useEffect)(()=>{
        u(!1),
        d(),
        f([])
      },[null==y?void 0:y.selectedTab]),
      (0,l.useEffect)(()=>{
        m.length&&f([...new Set(g.concat(m))])
      },[m]),
      (0,a.jsx)("div",{
        ref:S,
        className:"session-note-list",
        children:t.length?t.map(e=>(0,a.jsx)("div",{
          className:"session-list-item",
          style:{
            marginTop:"10px"
          },
          children:(0,a.jsx)(t$.Z,{
            size:"small",
            title:z(e),
            extra:Q(e),
            bordered:!1,
            children:p&&e.noteId===s?(0,a.jsxs)("div",{
              className:"edit-note",
              ref:e=>{
                i=e
              },
              children:[(0,a.jsx)(tY.r,{
                inputRef:C,
                className:"mention-input ".concat(!r||(null==r?void 0:r.length)>=1e3?"validation-message":""),
                value:r,
                onChange:G,
                maxLength:1e3,
                style:j,
                suggestionsPortalHost:i,
                forceSuggestionsAboveCursor:!0,
                children:(0,a.jsx)(tY.p,{
                  trigger:"@",
                  data:b,
                  appendSpaceOnAdd:!0,
                  className:"mention-inner-highlight"
                })
              }),(0,a.jsxs)("div",{
                className:"button-wrapper",
                children:[(0,a.jsx)(eF.Z,{
                  size:"small",
                  className:"cancel-btn",
                  onClick:B,
                  children:"Cancel"
                }),(0,a.jsx)(eF.Z,{
                  size:"small",
                  disabled:!r||(null==r?void 0:r.length)>=1e3,
                  className:"save-btn-title",
                  onClick:()=>O(e.noteId),
                  children:"Save"
                })]
              }),r?"":(0,a.jsx)("div",{
                className:"has-error",
                children:"Note can’t be empty."
              }),r&&r.length>=1e3?(0,a.jsx)("div",{
                className:"has-error",
                children:"Reached max limit of 1000 characters."
              }):""]
            }):(0,a.jsx)("div",{
              children:J(e.body)
            },e.noteId)
          },e.noteId)
        },e.noteId)):""
      })
    };
    let t1={
      control:{
        backgroundColor:"#fff",
        fontSize:12,
        fontWeight:"normal"
      },
      "&multiLine":{
        control:{
          fontFamily:"Roboto",
          minHeight:120
        },
        highlighter:{
          padding:9,
          border:"1px solid transparent"
        },
        input:{
          padding:9,
          border:"1px solid silver"
        }
      }
    };
    var t2=e=>{
      let t=(0,c.I0)(),
      n=(0,l.useRef)(null),
      {
        appId:i,
        parentType:o
      }=(0,c.v9)(e=>e.urlReducer),
      {
        sessionDetail:r
      }=(0,G.Lc)(),
      {
        timeRef:d
      }=(0,G.rS)(),
      {
        selectedTab:p,
        noteTime:u,
        setNoteTime:h
      }=(0,G.he)(),
      {
        isPlaying:m
      }=(0,G.W4)(),
      [v,g]=(0,l.useState)(""),
      [f,x]=(0,l.useState)(!1),
      [b,w]=(0,l.useState)(!1),
      [j,y]=(0,l.useState)([]),
      [C,N]=(0,l.useState)([]),
      {
        redirectToVideo:_
      }=e,
      {
        _id:T,
        appId:L,
        recTime:Z,
        time:F
      }=r||{},
      [E,D]=(0,l.useState)([]),
      R=(0,M.useQueryClient)(),
      A=L||i,
      P=Z&&(0,k.ox)(Z),
      {
        current:z
      }=d,
      V=null==F?void 0:F.sessionUploadedDateTime,
      O=l.useMemo(()=>A,[L]),
      U=l.useMemo(()=>["team-user",L],[L]),
      {
        data:B
      }=(0,I.bZ)(U,O);
      (0,l.useEffect)(()=>{
        if(B){
          var e,
          t;
          N(null==B?void 0:null===(t=B.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.map((e,t)=>({
            id:t,
            email:e.email,
            display:e.name
          })))
        }
      },[B,L]);
      let{
        mutate:W,
        isLoading:H
      }=(0,M.useMutation)(e=>tQ.be.post("".concat("https://pythonapi-prod.uxcam.com","/notes/session/create"),e,{
        withCredentials:!0,
        credentials:"include"
      }),{
        onSuccess:()=>(g(""),D([]),h(null),R.invalidateQueries(["session-note",T])),
        onMutate:()=>{
          let e="";
          try{
            e=JSON.parse(localStorage.getItem("aiSessionsList"===o?"aiSessionsListReqBody":"sessionsListReqBody"))
          }
          catch(e){}let t=["aiSessionsList"===o?"aiSessionItems":"sessionItems",e];
          R.cancelQueries(t);
          let n=R.getQueryData(t);
          return n&&R.setQueryData(t,e=>{
            let t=e.data.data.body.map(e=>e.sessionid===T?{
              ...e,
              sessionNotesCount:e.sessionNotesCount+1
            }:e);
            return{
              ...e,
              data:{
                ...e.data,
                data:{
                  ...e.data.data,
                  body:t
                }
              }
            }
          }),
          n
        }
      }),
      K=e=>{
        let t=e;
        return C.map(e=>{
          t=t.replaceAll("@[".concat(e.display,"](").concat(e.id,")"),"".concat(e.display))
        }),
        t.split(" ").map(e=>{
          let t=e;
          if(e.match(k.xP)){
            let n=e.match(k.xP);
            return n.length&&n.map(e=>{
              t=t.replaceAll("@[".concat(e,"](abc)"),e)
            }),
            t
          }
          return"".concat(e)
        }).join(" ")
      },
      q=()=>{
        let e=v.trim();
        if(e.length&&!f){
          let e={},
          n=v;
          C.map(e=>{
            n=n.replaceAll("[".concat(e.display,"](").concat(e.id,")"),"".concat(e.email))
          });
          let i=n.split(" ").map(e=>{
            let t=e;
            if(e.match(k.xP)){
              let n=e.match(k.xP);
              return n.length&&n.map(e=>{
                t=t.replaceAll("@[".concat(e,"](abc)"),e)
              }),
              t
            }
            return"".concat(e)
          });
          e.body=i.join(" "),
          e.appid=L,
          e.sessionid=T,
          e.uploadedon=V,
          e.isaisession="aiSessionsList"===o,
          t((0,S.CW)(null,{
            eventName:"add_note",
            track_type:"event",
            pageName:o,
            eventProperty:{
              sessionid:T,
              note:i.join(" ")
            }
          })),
          W(e)
        }
        else x(!0),
        g(e)
      },
      Y=()=>{
        let e=z<=0?"":z>=P?"".concat(Z):" ".concat((0,k.nH)(z)," ");
        return m?g("".concat(v," "," ").concat((0,k.nH)(z)," ")):g("".concat(v).concat(e)),
        m?"".concat(v).concat((0,k.nH)(z)," "):"".concat(v).concat(e)
      };
      return(0,l.useEffect)(()=>{
        n.current&&(g(""),x(!1)),
        D([]);
        let e=setTimeout(()=>{
          (null==n?void 0:n.current)&&(null==n||n.current.focus())
        },1e3);
        return()=>{
          clearTimeout(e)
        }
      },[n,b,p,T]),
      (0,l.useEffect)(()=>{
        z&&"notes"===p&&((async()=>{
          let e=await Y();
          g(u?e:"")
        })(),setTimeout(()=>{
          (null==n?void 0:n.current)&&(null==n||n.current.focus())
        },1e3))
      },[u]),
      (0,l.useEffect)(()=>{
        j.length&&D([...new Set(E.concat(j))])
      },[j]),
      (0,l.useEffect)(()=>{
        w(!0)
      },[L]),
      (0,a.jsx)("div",{
        className:"session-note-tab",
        children:b&&(0,a.jsxs)("div",{
          ref:e=>{
            s=e
          },
          children:[(0,a.jsx)(t0,{
            users:C,
            defaultStyle:t1,
            redirectToVideo:_,
            sessionDetail:r
          }),(0,a.jsx)(tY.r,{
            inputRef:n,
            className:"mention-input ".concat(f?"validation-message":""),
            value:v,
            onChange:e=>{
              let{
                value:t
              }=e.target,
              n=t;
              E.length&&E.map(e=>{
                n=n.replaceAll("@[".concat(e,"](abc)"),"".concat(e))
              });
              let i=n.split(" ");
              y([]);
              let s=i.map(e=>{
                let t=e;
                if(e.match(k.xP)){
                  let n=e.match(k.xP);
                  return y(n),
                  n.length&&n.map(e=>{
                    t=(t=t.replaceAll("@[".concat(e,"](abc)"),e)).replaceAll(e,"@[".concat(e,"](abc)"))
                  }),
                  t
                }
                return"".concat(e)
              }).join(" ");
              g(s);
              let a=K(s);
              t.length&&x(!1),
              a.length>=1e3&&x(!0)
            },
            placeholder:"Write your note",
            maxLength:1e3,
            style:t1,
            suggestionsPortalHost:s,
            forceSuggestionsAboveCursor:!0,
            children:(0,a.jsx)(tY.p,{
              trigger:"@",
              data:C,
              appendSpaceOnAdd:!0,
              className:"mention-inner-highlight"
            })
          }),(0,a.jsxs)("div",{
            className:"mention-outer",
            children:[(0,a.jsx)(eF.Z,{
              onClick:()=>q(),
              disabled:(null==v?void 0:v.length)>=1e3,
              className:"save-btn note-save-btn",
              loading:H,
              children:"Save note"
            }),f&&!v?(0,a.jsx)("div",{
              className:"has-error",
              children:"Note can’t be empty."
            }):"",f&&v&&v.length>=1e3?(0,a.jsx)("div",{
              className:"has-error",
              children:"Reached max limit of 1000 characters."
            }):""]
          })]
        })
      })
    },
    t3=n(25409),
    t5=n(60063),
    t4=n(57557),
    t6=n.n(t4),
    t7=n(18879),
    t8=n(75655),
    t9=n(740),
    ne=n(86927);
    let{
      Panel:nt
    }=B.default,
    nn={
      uxcamuserid:"UXCam user ID",
      alias:"Random alias",
      userId:"UXCam user ID",
      kuxcam_useridentity:"kuxcam user identity",
      totalSessionTime:"Length of the session",
      numberOfGesture:"Number of gestures in the session",
      numberOfEvent:"Number of events in the session",
      numberOfScreenVisited:"Number of unique screens visited in the session",
      numberOfScreenTransitions:"Number of transitions between screens in the session",
      platform:"Platform",
      deviceId:"Install identifier",
      deviceType:"Device type",
      sdkVersion:"Version of the UXCam SDK",
      appVersion:"Version of the application",
      deviceModel:"Device marketing name",
      deviceClass:"Device class",
      osVersion:"Version of the OS",
      deviceLanguage:"Device language",
      deviceWidth:"Display screen width in pixels",
      deviceHeight:"Display screen height in pixels",
      devicecarriername:"Name of the carrier",
      deviceManufacturer:"Device manufacturer",
      deviceRam:"Total memory available in the device",
      deviceStorage:"Total storage available in the device",
      deviceBatteryLabelInStart:"Battery level (start)",
      batteryLevelAtTheEndOfSesssion:"Battery level (end)",
      city:"Name of the city (latest session)",
      country:"Name of the country (latest session)",
      latitude:"Latitude (latest session)",
      longitude:"Longitude (latest session)",
      countryCode:"Country code",
      deviceLocalDateTime:"Time when the session is uploaded from the user device",
      sessionRecordedDateTime:"Time verified by the SDK during the start of the session",
      sessionUploadedDateTime:"Time when the session is uploaded to the server",
      duration:"Length of session",
      sessionNumber:"Session number",
      sessionID:"Session ID assigned by UXCam",
      gestures:"Number of gestures in the session",
      events:"Number of events in the session",
      screen:"Number of transitions between screens in the session",
      screenVisit:"Number of unique screens visited in the sessions",
      deviceTime:"Time when the session is uploaded from the user device",
      uploadTime:"Time when the session is uploaded to the server",
      recordingTime:"Time verified by the SDK during the start of the session",
      networkType:"Network",
      environment:"Build type based on the stage of the app release life cycle."
    },
    ni={
      uxcamuserid:"UXCam user ID",
      alias:"Random alias",
      userId:"UXCam user ID",
      kuxcam_useridentity:"kuxcam user identity",
      totalSessionTime:"Length of the session",
      numberOfGesture:"Number of gestures in the session",
      numberOfEvent:"Number of events in the session",
      numberOfScreenVisited:"Number of unique screens visited in the session",
      numberOfScreenTransitions:"Number of transitions between screens in the session",
      platform:"Platform",
      deviceId:"Install ID",
      deviceType:"Device type",
      sdkVersion:"SDK version",
      appVersion:"App version",
      deviceModel:"Model name",
      deviceClass:"Device class",
      osVersion:"OS version",
      deviceWidth:"Display width (px)",
      deviceLanguage:"language",
      deviceHeight:"Display height (px)",
      devicecarriername:"Carrier",
      deviceManufacturer:"Manufacturer",
      deviceRam:"Total memory",
      deviceStorage:"Total storage",
      deviceBatteryLabelInStart:"Battery level (start)",
      batteryLevelAtTheEndOfSesssion:"Battery level (end)",
      city:"Name of the city (latest session)",
      country:"Name of the country (latest session)",
      latitude:"Latitude (latest session)",
      longitude:"Longitude (latest session)",
      countryCode:"Country code",
      deviceLocalDateTime:"Time when the session is uploaded from the user device",
      sessionRecordedDateTime:"Time verified by the SDK during the start of the session",
      sessionUploadedDateTime:"Time when the session is uploaded to the server",
      duration:"Duration",
      sessionNumber:"Session number",
      sessionID:"Session ID",
      gestures:"Gestures",
      events:"Events",
      screen:"Screen visits",
      screenVisit:"Screens",
      deviceTime:"Device time",
      uploadTime:"Upload time",
      recordingTime:"Recording time",
      networkType:"Network",
      environment:"Environment",
      referrer:"Referrer",
      refererDomain:"Referrer Domain",
      landingUtm:"Landing UTM",
      browser:"Browser",
      browserVersion:"Browser version",
      os:"OS"
    },
    ns=C.default.div.withConfig({
      componentId:"sc-f2d2a7ea-0"
    })(["padding:5px 10px;display:flex;font-size:14px;align-items:center;"]),
    na=C.default.div.withConfig({
      componentId:"sc-f2d2a7ea-1"
    })(["padding:5px 10px;font-size:14px;svg{position:relative;top:3px;width:15.5px;}"]),
    nl=(0,C.default)(B.default).withConfig({
      componentId:"sc-f2d2a7ea-2"
    })(["background-color:#ffffff;.ant-collapse .ant-collapse-item .ant-collapse-header{padding:8px !important;border:none;align-items:center;}.ant-collapse-content{border:0px;}.ant-collapse-item{border-bottom:1px solid #f5f5f5;&:last-child{border-bottom:none;}}"]),
    no=(0,C.default)(nt).withConfig({
      componentId:"sc-f2d2a7ea-3"
    })(["background-color:#ffffff;padding:8px;.ant-collapse-header{color:#161e35 !important;}.ant-collapse-content .ant-collapse-content-box{margin-left:0 !important;padding:0 5px !important;}"]),
    nr=C.default.a.withConfig({
      componentId:"sc-f2d2a7ea-4"
    })(["border-radius:4px;height:22px;border:1px solid #c0cad9;padding:2px 8px;font-size:12px;line-height:14px;position:relative;display:inline-block;font-weight:400;white-space:nowrap;text-align:center;background-image:none;cursor:pointer;color:rgba(0,0,0,0.85);background:#fff;&:hover{border-color:#5d97ff;color:#5d97ff;}"]),
    nc=C.default.div.withConfig({
      componentId:"sc-f2d2a7ea-5"
    })(["display:flex;flex-direction:row;flex-wrap:wrap;width:100%;padding:5px 0px;align-items:flex-start;border-bottom:1px solid #f5f5f5;&:last-child{border-bottom:none;}"]),
    nd=C.default.div.withConfig({
      componentId:"sc-f2d2a7ea-6"
    })(["text-align:left;display:block;align-items:center;font-weight:500;font-size:13px;color:#161e35;min-width:120px;width:35%;word-wrap:break-word;margin-left:5px;"]),
    np=C.default.span.withConfig({
      componentId:"sc-f2d2a7ea-7"
    })(["margin-left:5px;"]),
    nu=C.default.div.withConfig({
      componentId:"sc-f2d2a7ea-8"
    })(["font-weight:400;font-size:12px;color:#161e35;display:flex;align-items:center;width:calc(65% - 18px);justify-content:space-between;word-break:break-word;.ant-btn{height:22px;border:1px solid #161e35;&:hover{border-color:#5d97ff;}}"]),
    nh=C.default.span.withConfig({
      componentId:"sc-f2d2a7ea-9"
    })(["margin-left:",";font-style:",";font-weight:500;color:",";font-size:",";"],e=>e.type?"0":"10px",e=>"user-alternative"===e.type?"italic":"normal",e=>"user-alternative"===e.type&&"rgba(37, 56, 88, 0.6)",e=>"inner"===e.type&&"14px;"),
    nm=C.default.span.withConfig({
      componentId:"sc-f2d2a7ea-10"
    })(["font-size:12px;width:30%;word-wrap:break-word;"]),
    nv=C.default.span.withConfig({
      componentId:"sc-f2d2a7ea-11"
    })(["display:flex;flex-direction:column;gap:2px;> i{color:",";}"],eq.r.colors.surface300.toString());
    var ng=()=>{
      let e,
      t,
      n;
      let{
        sessionDetail:i,
        isWebSession:s
      }=(0,G.Lc)(),
      {
        _id:o,
        userProperty:r,
        device:d,
        activity:p,
        location:u,
        time:h,
        sessionNumber:v,
        networkType:g,
        error:f,
        environment:x,
        referer:b,
        refererDomain:w,
        landingUtm:j
      }=i,
      {
        urlReducer:{
          shareSessionKey:y,
          appId:C,
          sessionid:I,
          parentType:_,
          screenname:T
        },
        appFilter:{
          dateSegment:L
        }
      }=(0,c.v9)(e=>e),
      M=(0,l.useRef)(),
      Z=(0,ne.n5)({
        customUserId:null==r?void 0:r.kUXCam_UserIdentity,
        uxcamuserid:null==r?void 0:r.uxcamuserid
      }),
      F=h&&(0,t7.fh)(null==h?void 0:h.deviceLocalDateTime,"MMMM DD YYYY, hh:mm:ss A"),
      E=h&&(0,t7.fh)(null==h?void 0:h.sessionUploadedDateTime,"MMMM DD YYYY, hh:mm:ss A"),
      D=h&&(0,t7.fh)(null==h?void 0:h.sessionRecordedDateTime,"MMMM DD YYYY, hh:mm:ss A"),
      R=(0,l.useMemo)(()=>({
        sessionNumber:"".concat(v).concat((0,k.Zr)(v)),
        sessionID:o,
        duration:"".concat((0,Y.BZ)(null==p?void 0:p.totalSessionTime)),
        screen:"".concat(null==p?void 0:p.numberOfScreenTransitions),
        screenVisit:"".concat(null==p?void 0:p.numberOfScreenVisited),
        gestures:"".concat(null==p?void 0:p.numberOfGesture),
        events:"".concat(null==p?void 0:p.numberOfEvent),
        deviceTime:"".concat(F," (User Time)"),
        uploadTime:"".concat(E," (UTC Time)"),
        recordingTime:"".concat(D," (UTC Time)"),
        environment:"".concat(x?(0,t8.I)(x):"Undefined")
      }),[p,F,x,D,v,E,o]),
      A=(0,l.useMemo)(()=>({
        sessionNumber:"".concat(v).concat((0,k.Zr)(v)),
        sessionID:o,
        duration:"".concat((0,Y.BZ)(null==p?void 0:p.totalSessionTime)),
        screen:"".concat(null==p?void 0:p.numberOfScreenTransitions),
        screenVisit:"".concat(null==p?void 0:p.numberOfScreenVisited),
        gestures:"".concat(null==p?void 0:p.numberOfGesture),
        events:"".concat(null==p?void 0:p.numberOfEvent),
        deviceTime:"".concat(F," (User Time)"),
        uploadTime:"".concat(E," (UTC Time)"),
        recordingTime:"".concat(D," (UTC Time)"),
        referrer:b||"N/A",
        refererDomain:w||"N/A",
        landingUtm:j||"N/A"
      }),[p,F,j,D,b,v,E,o,w]),
      P=(0,l.useMemo)(()=>({
        deviceManufacturer:null==d?void 0:d.deviceManufacturer,
        deviceModel:null==d?void 0:d.deviceModel,
        deviceId:null==d?void 0:d.deviceId,
        deviceWidth:null==d?void 0:d.deviceWidth,
        deviceHeight:null==d?void 0:d.deviceHeight,
        deviceClass:(0,k.Zy)(null==d?void 0:d.deviceClass),
        deviceLanguage:null==d?void 0:d.deviceLanguage,
        devicecarriername:null==d?void 0:d.devicecarriername,
        deviceStorage:null==d?void 0:d.deviceStorage,
        deviceRam:null==d?void 0:d.deviceRam,
        networkType:g,
        osVersion:null==d?void 0:d.osVersion,
        appVersion:null==d?void 0:d.appVersion,
        sdkVersion:null==d?void 0:d.sdkVersion,
        deviceBatteryLabelInStart:null==d?void 0:d.deviceBatteryLabelInStart,
        batteryLevelAtTheEndOfSesssion:null==d?void 0:d.batteryLevelAtTheEndOfSesssion
      }),[d,g]),
      z=(0,l.useMemo)(()=>({
        deviceType:null==d?void 0:d.deviceType,
        deviceId:null==d?void 0:d.deviceId,
        deviceWidth:null==d?void 0:d.deviceWidth,
        deviceHeight:null==d?void 0:d.deviceHeight,
        deviceLanguage:null==d?void 0:d.deviceLanguage,
        os:null==d?void 0:d.deviceOs,
        osVersion:null==d?void 0:d.osVersion,
        browser:null==d?void 0:d.browserName,
        browserVersion:null==d?void 0:d.browserVersion,
        appVersion:null==d?void 0:d.appVersion,
        sdkVersion:null==d?void 0:d.sdkVersion
      }),[d]),
      V=t6()(r,"alias","kUXCam_UserIdentity","uxcamuserid"),
      O=(0,c.I0)(),
      U=(0,l.useCallback)(e=>O((0,N.hI)({
        action:"View all user ".concat("events"===e?"events":"screens"," from session details page")
      })),[O]),
      B=(0,l.useCallback)(()=>M.current,[M]),
      H=(0,l.useCallback)(e=>{
        let t="",
        n={
          attribute:"uxcamuserid",
          operator:"in",
          value:[null==r?void 0:r.uxcamuserid],
          table:"appuser"
        };
        t="events"===e?"/app/".concat(C,"/events/list/1?isSessionEventTab=",!0,"&"):t9.Z.modifyUrl("/app/".concat(C,"/sessions/list/1?"));
        let i=[L,n];
        return(0,m.$)(t,i)
      },[C,L,_,null==r?void 0:r.uxcamuserid]);
      (0,l.useEffect)(()=>{
        O((0,S.CW)(null,{
          eventName:"display_session_properties",
          track_type:"event",
          eventProperty:{
            sessionid:I,
            ..."heatmapsList"===_&&{
              screenname:T
            }
          }
        }))
      },[O,_,T,I]);
      let K=(0,l.useMemo)(()=>{
        let e=s?A:R;
        return Object.keys(e).map(t=>{
          let n=e[t];
          return"landingUtm"===t&&"N/A"!==n?(0,a.jsxs)(nc,{
            children:[(0,a.jsx)(W.Z,{
              title:nn[t],
              children:(0,a.jsx)(nd,{
                children:ni[t]
              })
            }),(0,a.jsx)(nu,{
              children:(0,a.jsx)(nv,{
                children:Object.entries(n).map(e=>{
                  let[t,n]=e;
                  return(0,a.jsxs)("div",{
                    children:[(0,a.jsxs)("b",{
                      children:[t,":"]
                    }),(0,a.jsxs)("span",{
                      children:[" ",n]
                    })]
                  },t)
                })
              })
            })]
          },t):(0,a.jsxs)(nc,{
            children:[(0,a.jsx)(W.Z,{
              title:nn[t],
              children:(0,a.jsx)(nd,{
                children:ni[t]
              })
            }),(0,a.jsxs)(nu,{
              children:[(0,a.jsxs)(nv,{
                children:[e[t],"environment"===t&&"Undefined"===e.environment&&(0,a.jsx)("i",{
                  children:"Environment is set to undefined when sessions are being captured from older Android SDK version (before 3.6.6) and iOS SDK version (before 3.5.2)."
                })]
              }),("events"===t||"sessionNumber"===t)&&!y&&"0"!==e[t]&&(0,a.jsx)(nr,{
                onClick:()=>U(t),
                href:H(t),
                rel:"noreferrer",
                target:"_blank",
                children:"view all"
              })]
            })]
          },t)
        })
      },[s,R,y,U,H]),
      q=(0,l.useMemo)(()=>{
        let e=s?z:P;
        return Object.keys(e).map(t=>(0,a.jsxs)(nc,{
          children:[(0,a.jsx)(W.Z,{
            title:nn[t],
            children:(0,a.jsx)(nd,{
              children:"".concat(ni[t])
            })
          }),(0,a.jsx)(nu,{
            children:"".concat(e[t])
          })]
        },t))
      },[P,s,z]);
      return!(null==f?void 0:f.message)&&(0,a.jsxs)(nl,{
        expandIcon:e=>{
          let{
            isActive:t
          }=e;
          return(0,a.jsx)(t5.Z,{
            rotate:t?180:0
          })
        },
        expandIconPosition:"right",
        defaultActiveKey:["1"],
        children:[(0,a.jsx)(no,{
          header:(e="Session properties",(0,a.jsxs)(ns,{
            children:[(0,a.jsx)(eZ.rE,{}),(0,a.jsx)(nh,{
              children:"".concat(e)
            })]
          })),
          children:K
        },"1"),(0,a.jsxs)(no,{
          header:(t="User properties",(0,a.jsxs)(na,{
            children:[(0,a.jsx)(eZ.tB,{}),(0,a.jsx)(nh,{
              children:t
            })]
          })),
          children:[(0,a.jsxs)(nc,{
            children:[(0,a.jsx)(W.Z,{
              title:ne._M,
              children:(0,a.jsx)(nd,{
                children:"Username"
              })
            }),(0,a.jsx)(nu,{
              ref:M,
              children:(0,a.jsxs)(nh,{
                type:(null==Z?void 0:Z.customUserId)?"user":"user-alternative",
                children:["".concat((null==Z?void 0:Z.customUserId)||"".concat(null==Z?void 0:Z.uxcamuserid).concat(null==Z?void 0:Z.indicator)||(null==r?void 0:r.name)),!(null==Z?void 0:Z.customUserId)&&(0,a.jsx)(t3.Z,{
                  getPopupContainer:B,
                  content:null==Z?void 0:Z.info,
                  trigger:"hover",
                  title:null,
                  arrowPointAtCenter:!0,
                  children:(0,a.jsx)(np,{
                    children:(0,a.jsx)(eZ.mz,{})
                  })
                })]
              })
            })]
          },"alias"),(0,a.jsxs)(nc,{
            children:[(0,a.jsx)(W.Z,{
              title:ne.XY,
              children:(0,a.jsx)(nd,{
                children:"UXCam user ID"
              })
            }),(0,a.jsx)(nm,{
              children:null==r?void 0:r.uxcamuserid
            })]
          },"id"),(0,a.jsxs)(nc,{
            children:[(0,a.jsx)(W.Z,{
              title:"Name of the city, country (latest session)",
              children:(0,a.jsx)(nd,{
                children:"Location"
              })
            }),(0,a.jsx)(nu,{
              children:"".concat(null==u?void 0:u.city,", ").concat(null==u?void 0:u.country)
            })]
          },"location"),Object.keys(V).length>0&&Object.keys(V).map(e=>(0,a.jsxs)(nc,{
            children:[(0,a.jsx)(W.Z,{
              title:"Additional custom properties",
              children:(0,a.jsx)(nd,{
                children:e
              })
            }),(0,a.jsx)(nu,{
              children:String(V[e])
            })]
          },e)),Object.keys(V).length<1&&(0,a.jsxs)("span",{
            children:["You can set custom user properties eg. age_group, gender.",(0,a.jsxs)("a",{
              href:"https://help.uxcam.com/en/articles/10222539-ideas-for-custom-user-properties",
              target:"_blank",
              rel:"noopener noreferrer",
              children:[" ","Click here"," "]
            })," ","to check out documentation."]
          })]
        },"2"),(0,a.jsx)(no,{
          header:(n="Device properties",(0,a.jsxs)(ns,{
            children:[(0,a.jsx)(eZ.um,{}),(0,a.jsx)(nh,{
              children:"".concat(n)
            })]
          })),
          children:q
        },"3")]
      })
    },
    nf=n(68457),
    nx=n(12016),
    nb=n(19197),
    nw=n(44908),
    nj=n.n(nw),
    ny=n(38565);
    let nk=C.default.div.withConfig({
      componentId:"sc-e010669e-0"
    })(["max-width:300px;.skip-option{padding:10px 0px 0px 20px;margin-bottom:5px;display:flex;align-items:center;.ant-switch{margin-right:5px;}}.ant-dropdown-menu-item-group-list{margin:0 0 0 20px !important;padding-bottom:0px;}.timeline-event-toggle{margin-bottom:0px !important;}.loading{display:block;font-weight:400;}.ant-input{margin:10px 20px 0;width:250px;border-radius:4px;}.ant-checkbox-wrapper + .ant-checkbox-wrapper{margin-left:0 !important;}.ant-checkbox-wrapper{margin:5px 0;font-size:13px;.ant-checkbox-inner{width:14px;height:14px;&:after{width:4.714px !important;height:8.143px !important;}}.timeline-screen-dropdown-title{position:relative;color:#5D97FF;font-weight:700;}.timeline-screen-dropdown-title::after{position:absolute;content:'';height:1px;top:9px;background:#C0CAD9;left:54px;width:169px;}}.ant-checkbox-group{display:block;.ant-checkbox-wrapper{.check-option-title{display:flex;.screen-with-duration{width:172px;display:inline-block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:bottom;margin-right:10px;}.check-option-count{display:inline-block;text-align:right;font-size:12px;right:13px;position:absolute;}.screen-without-duration{width:225px;display:inline-block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:bottom;}}}}"]),
    nC=C.default.div.withConfig({
      componentId:"sc-e010669e-1"
    })(["display:inline;}"]);
    var nS=n(89697),
    nN=n(39618),
    nI=n(22365),
    n_=n(30998),
    nT=n.n(n_),
    nL=n(18446),
    nM=n.n(nL);
    n(36968);
    var nZ=n(85613),
    nF=n(92980),
    nE=n(27878),
    nD=n(47707),
    nR=n(92685);
    let nA=C.default.div.withConfig({
      componentId:"sc-f685ac9f-0"
    })(["display:flex;position:relative;margin-bottom:10px;button{width:50%;border:none;font-weight:400;font-size:12px;line-height:16px;padding:8px 0;color:#161E35;box-shadow:none;}button:first-of-type{color:",";}button:last-of-type{color:",";}&::before{position:absolute;bottom:0;left:0;height:2px;width:100%;background:#F3F4F5;opacity:1;transition:all 0.2s ease-in-out;content:'';pointer-events:none;z-index:1;}&::after{position:absolute;bottom:0;left:",";height:2px;width:50%;background:#5D97FF;opacity:1;transition:all 0.2s ease-in-out;content:'';pointer-events:none;z-index:2;}"],e=>{
      let{
        toggleEvent:t
      }=e;
      return t?"#5D97FF":"#161E35"
    },e=>{
      let{
        toggleEvent:t
      }=e;
      return t?"#161E35":"#5D97FF"
    },e=>{
      let{
        toggleEvent:t
      }=e;
      return t?"0":"50%"
    }),
    nP=C.default.div.withConfig({
      componentId:"sc-f685ac9f-1"
    })(["position:relative;margin-bottom:5px;svg{position:absolute;left:10px;top:50%;transform:translateY(-50%);}"]),
    nz=(0,C.default)(nR.DebounceInput).withConfig({
      componentId:"sc-f685ac9f-2"
    })(["border-radius:6px;border:none;font-weight:400;font-size:12px;line-height:24px;padding:2px 0 2px 32px;background-color:#F3F4F5;margin:0;width:100%;outline:none;&::placeholder{color:#737886;}"]),
    nV=C.default.div.withConfig({
      componentId:"sc-f685ac9f-3"
    })(["display:flex;justify-content:space-between;margin-top:18px;gap:8px;button{width:50%;display:flex;justify-content:center;line-height:24px;padding:0;}"]),
    nO=(0,C.createGlobalStyle)([".screens-items-menu-item-group{.ant-dropdown-menu-item-group-list{margin:0 !important;}label.ant-checkbox-wrapper{margin:0;width:100%;font-size:12px;line-height:13px;color:#4F4F4F;padding:8px 8px 0 !important;.check-option-title{width:100%;display:flex;justify-content:space-between;}}.ant-checkbox-inner{height:16px !important;width:16px !important;}.timeline-screen-dropdown-title{font-weight:400 !important;&::after{display:none;}}.check-option-title{position:relative;}.check-option-count{right:0px !important;}.screen-with-duration,.screen-without-duration{margin-right:0px;}}"]),
    nU=C.default.div.withConfig({
      componentId:"sc-14773763-0"
    })(["font-size:12px;line-height:16px;button{margin:5px 6px 10px 0;}"]),
    nB=(0,l.memo)(e=>{
      let{
        sessionScreensList:t,
        availableOptions:n,
        fetchedDataSort:i,
        isLoading:s,
        isEmptyMessage:o,
        handleCheckboxGroupChange:r,
        sessionScreens:p,
        screenCategoryFlag:u,
        tempCheckedBoxes:h,
        setTempCheckedBoxes:m
      }=e,
      v=(0,c.I0)(),
      {
        selectedScreens:g=[],
        allScreenCheckToggle:f
      }=(0,c.v9)(e=>e.screenTimelineReducer);
      return(0,l.useCallback)(e=>{
        if(o)return;
        let t=[];
        "sessionScreens"===u?t=e.target.checked?nj()([...p,...g]):g.filter(e=>!p.filter(e=>e!==i[0]).includes(e)):"allScreens"===u&&(t=e.target.checked?n:n.filter(e=>e===i[0])),
        v((0,d.mO)(e.target.checked)),
        m(t)
      },[u,n,i,m,o,g,p,v]),
      (0,l.useEffect)(()=>{
        g.length&&n.length&&v((0,d.mO)("sessionScreens"===u?g.filter(e=>-1!==p.indexOf(e)).length===p.length:nM()(n.sort(),g.sort())))
      },[u,g]),
      (0,l.useMemo)(()=>s?(0,a.jsx)("span",{
        className:"loading",
        children:"loading..."
      }):o?(0,a.jsxs)("div",{
        className:"text-center",
        children:[(0,a.jsx)(nI.Z,{})," No matching event or screen name"]
      }):(0,a.jsx)("div",{
        className:"ant-checkbox-group",
        children:i.map(e=>{
          let n=nT()(t,{
            screenName:e
          });
          return(0,a.jsx)(nN.default,{
            checked:h.indexOf(e)>-1,
            onChange:r,
            value:e,
            className:"check-option",
            children:(0,a.jsxs)("div",{
              className:"check-option-title",
              children:[(0,a.jsx)(ta.Z,{
                onRenderScreen:e=>(0,a.jsx)("span",{
                  className:n>-1?"screen-with-duration":"screen-without-duration",
                  children:e
                }),
                originalScreenName:e
              }),n>-1&&(0,a.jsx)("span",{
                className:"check-option-count",
                children:"number"==typeof t[n].duration?(0,k.zk)({
                  durationInSecs:t[n].duration,
                  roundFalse:!1
                }):""
              })]
            })
          },e)
        })
      }),[r,s,o,i,t,h])
    });
    var nW=(0,l.memo)(e=>{
      let{
        screenDropdownVisible:t,
        sessionScreensList:n,
        sessionScreens:i,
        screenDropdownToggler:s,
        onVisibleChange:o
      }=e,
      r=(0,l.useRef)(null),
      p=(0,c.I0)(),
      [u,h]=(0,l.useState)([]),
      [m,v]=(0,l.useState)([]),
      [g,f]=(0,l.useState)({}),
      [b,w]=(0,l.useState)(!1),
      [j,y]=(0,l.useState)(""),
      [k,C]=(0,l.useState)(!1),
      [N,I]=(0,l.useState)([]),
      {
        urlReducer:{
          appId:_,
          sessionid:T,
          shareSessionKey:L,
          parentType:M,
          screenname:Z,
          sessionid:E
        },
        screenTimelineReducer:{
          selectedScreens:D=[],
          skipDeselectedToggle:R,
          screenList:A,
          screenCategoryFlag:P,
          allScreenCheckToggle:z
        },
        appFilter:{
          dateSegment:V
        }
      }=(0,c.v9)(e=>e),
      O=(0,F.ye)("new-screens-filter"),
      {
        refetch:U,
        isLoading:B
      }=(0,ny.ip)({
        appid:_,
        attribute:O?"screen_name":"session_screen_list",
        date_range:V,
        dropdownLimit:9999,
        filter:[],
        search:j,
        table:"session"
      },k),
      W=(0,l.useMemo)(()=>{
        let e=[],
        t=i.filter(e=>m.includes(e)),
        n=[...t.filter(e=>D.includes(e)),...t.filter(e=>!D.includes(e))];
        if(L||"sessionScreens"===P)e=[...n];
        else{
          let t=m.filter(e=>!i.includes(e));
          e=[...n,...t.filter(e=>D.includes(e)),...t.filter(e=>!D.includes(e))]
        }
        return e
      },[P,m,i,t]),
      H=e=>{
        v(e),
        h(e),
        f({
          "":(null==e?void 0:e.length)>0
        }),
        w(!e.length)
      },
      G=(0,l.useCallback)(async e=>{
        let t=e.trim()||"",
        n=[],
        i=[],
        s=x()(g),
        a=x()(u),
        l=[];
        if(y(t),C(!1),w(!1),!t){
          v(a);
          return
        }
        if(n=a.length?a.filter(e=>(0,nF.Nq)(e,t)):[],!eB()(s)&&Object.keys(s).includes(t)&&s[t]){
          v(n);
          return
        }
        n.length<10?(await C(!0),U().then(e=>{
          var o;
          let r=null==e?void 0:null===(o=e.data)||void 0===o?void 0:o.data;
          (null==r?void 0:r.length)>=1?s[t]=!0:s[t]=!1;
          let c=(null==r?void 0:r.length)?r.filter(e=>!a.includes(e)):[];
          i=[...n,...c],
          l=[...u,...c],
          w(!i.length),
          f(s),
          v(nj()(i)),
          h(nj()(l))
        })):(i=n,l=a,v(nj()(i)),h(nj()(l)))
      },[u,g,U]),
      K=(0,l.useCallback)(e=>{
        if(L||"sessionScreens"===P){
          y(e.target.value);
          let t=u.filter(t=>(0,nF.Nq)(t,e.target.value.trim()));
          v(t),
          w(!t.length)
        }
        else G(e.target.value)
      },[u,P]),
      q=(0,l.useCallback)(e=>{
        let t=e.target.value,
        n=[];
        if(N.includes(t)){
          if(0===(n=N.filter(e=>e!==t)).length)return
        }
        else n=[...N,t];
        I(n),
        n.length!==A.length||z||p((0,d.mO)(!0)),
        n.length!==A.length&&z&&p((0,d.mO)(!1))
      },[I,N,A,p,z]),
      Y=(0,l.useCallback)(()=>{
        f({}),
        h([]),
        v([]),
        w(!1),
        y(""),
        I(u)
      },[u]),
      Q=(0,l.useCallback)(()=>p((0,d.dL)("sessionScreens")),[p]),
      X=(0,l.useCallback)(()=>p((0,d.dL)("allScreens")),[p]),
      $=(0,l.useCallback)(()=>{
        (null==j?void 0:j.length)?p((0,d.Ko)(W)):p((0,d.Ko)(N)),
        p((0,S.CW)(null,{
          eventName:"filter_screens",
          track_type:"event",
          pageName:M,
          eventProperty:{
            ..."heatmapsList"===M&&{
              screenname:Z
            },
            ..."heatmapsList"===M&&{
              sessionid:E
            }
          }
        })),
        p((0,d.mO)(nM()(u.sort(),N.sort()))),
        s(!1)
      },[null==j?void 0:j.length,p,M,Z,E,u,N,s,W]),
      J=(0,l.useCallback)(()=>{
        p((0,d.Ko)(A)),
        I(A),
        p((0,d.mO)(!0)),
        y(""),
        p((0,d.Yo)(!0)),
        I(u),
        o(!1)
      },[p,o,u,A]),
      ee=(0,l.useCallback)(()=>I(u),[u]),
      et=(0,l.useCallback)(()=>I([]),[]);
      return(0,l.useEffect)(()=>{
        Y()
      },[_,T]),
      (0,l.useEffect)(()=>{
        I(D)
      },[D]),
      (0,l.useEffect)(()=>{
        A&&H(A)
      },[A,T,_]),
      (0,l.useEffect)(()=>{
        t&&u.length&&(w(!1),y(""),G(""))
      },[t]),
      (0,l.useEffect)(()=>{
        t&&setTimeout(()=>{
          var e;
          null===(e=r.current)||void 0===e||e.focus({
            preventScroll:!0
          })
        },0)
      },[t]),
      (0,a.jsxs)(a.Fragment,{
        children:[(0,a.jsx)(nO,{}),(0,a.jsxs)(nk,{
          children:[!L&&(0,a.jsxs)(nA,{
            toggleEvent:"allScreens"===P,
            children:[(0,a.jsx)(eF.Z,{
              onClick:X,
              children:"All screens"
            }),(0,a.jsx)(eF.Z,{
              onClick:Q,
              children:"In this session"
            })]
          }),(0,a.jsxs)(nP,{
            children:[(0,a.jsx)(nz,{
              value:j,
              placeholder:"Search screens",
              debounceTimeout:500,
              inputRef:r,
              onChange:K
            }),(0,a.jsx)(nZ.Z,{})]
          }),(0,a.jsxs)(nU,{
            children:[(0,a.jsx)(nS.Z,{
              onClick:(0,l.useCallback)(e=>p((0,d.Yo)(e)),[]),
              checked:R,
              size:"small"
            })," ",(0,a.jsx)("span",{
              children:"Skip deselected screens in video replay"
            })]
          }),(0,a.jsx)(nE.Eu,{}),(0,a.jsx)(nD.Gv,{
            handleSelectAllOptions:ee,
            handleClearAllOptions:et,
            disableSelect:B||N.length===D.length,
            disableClear:!N.length||B
          }),(0,a.jsx)(nf.default.ItemGroup,{
            className:"menu-item-group screens-items-menu-item-group",
            children:(0,a.jsx)(nB,{
              screenCategoryFlag:P,
              sessionScreens:i,
              sessionScreensList:n,
              availableOptions:u,
              fetchedDataSort:W,
              isLoading:B,
              isEmptyMessage:b,
              handleCheckboxGroupChange:q,
              tempCheckedBoxes:N,
              setTempCheckedBoxes:I
            },P)
          },"screen"),(0,a.jsxs)(nV,{
            children:[(0,a.jsx)(eV.Z,{
              onClick:J,
              variant:"ghost",
              children:"Reset"
            }),(0,a.jsx)(eV.Z,{
              onClick:$,
              variant:"primary",
              children:"Apply"
            })]
          })]
        })]
      })
    });
    let nH=(e,t)=>e.some(e=>t.includes(e));
    var nG=e=>{
      let{
        screenDropdownVisible:t,
        screenDropdownToggler:n,
        uploadedOn:i
      }=e,
      s=(0,c.I0)(),
      {
        sessionDetailScreens:o
      }=(0,G.Lc)(),
      {
        screenTimelineReducer:{
          selectedScreens:r=[],
          screenList:p
        },
        urlReducer:{
          appId:u,
          sessionid:m,
          shareSessionKey:v
        },
        appFilter:{
          dateSegment:g
        }
      }=(0,c.v9)(e=>e),
      {
        sessionDetail:f
      }=(0,G.Lc)(),
      x=(0,F.ye)("new-screens-filter"),
      {
        data:b,
        refetch:w,
        isLoading:j
      }=v?(0,I.j4)("screens-details","/sessions/get-all-screens/",v):(0,ny.K2)({
        sessionid:m,
        appid:u,
        uploadedon:i
      }),
      y=(0,l.useMemo)(()=>{
        var e;
        return{
          data:{
            data:((null==f?void 0:null===(e=f.screenTimeline)||void 0===e?void 0:e.activities)||[]).reduce((e,t)=>{
              let{
                activityName:n,
                endTime:i,
                time:s
              }=t,
              a=i-s,
              l=e.find(e=>{
                let{
                  screenName:t
                }=e;
                return t===n
              });
              return l?l.duration+=a:e.push({
                screenName:n,
                duration:a
              }),
              e
            },[])
          }
        }
      },[f]),
      {
        data:{
          data:{
            data:C=[]
          }={}
        }={},
        refetch:S,
        isLoading:_
      }=(0,ny.bB)({
        appid:u,
        attribute:x?"screen_name":"session_screen_list",
        date_range:g,
        dropdownLimit:501,
        filter:[],
        search:"",
        table:"session"
      },{
        enabled:!v
      }),
      L=(0,l.useMemo)(()=>{
        var e;
        return y?null===(e=y.data)||void 0===e?void 0:e.data.filter((e,t)=>"Launch"!==e.screenName||0!==t).sort((e,t)=>t.duration-e.duration):[]
      },[y]),
      M=(0,l.useMemo)(()=>L.map(e=>e.screenName),[L]),
      Z=(0,l.useMemo)(()=>r.length!==p.length,[r,p]),
      E=(0,l.useCallback)(e=>{
        n(e),
        e&&s((0,N.hI)({
          action:"View all user screens from session details page"
        }))
      },[n,s]);
      (0,l.useEffect)(()=>{
        v||S()
      },[u]),
      (0,l.useEffect)(()=>{
        !v&&m&&w()
      },[m]),
      (0,l.useEffect)(()=>{
        if(!v&&(null==C?void 0:C.length)&&(null==M?void 0:M.length)){
          let e=[];
          p.length&&M.map(t=>{
            p.includes(t)||(e=[...e,t])
          });
          let t=(null==p?void 0:p.length)?nj()([...p,...M]):nj()([...C,...M]),
          n=r.length?nj()([...r,...e]):t;
          s((0,d.Pl)(t)),
          s((0,d.Ko)(n))
        }
      },[C,M]),
      (0,l.useEffect)(()=>{
        !v&&r.length&&M.length&&s((0,d.p2)({
          flag:!nH(M,r),
          message:nH(M,r)?"":"You have unselected all the screen in this session from the screens filter. Please select at least 1 screen from this session to play the video."
        }))
      },[M,r]),
      (0,l.useEffect)(()=>{
        M.length&&v&&(s((0,d.Pl)(M)),s((0,d.Ko)(M)))
      },[M]);
      let D=(0,l.useMemo)(()=>(0,a.jsx)(nf.default,{
        children:(0,a.jsx)(nW,{
          screenDropdownVisible:t,
          sessionScreensList:L,
          sessionScreens:M,
          screenDropdownToggler:n,
          onVisibleChange:E
        },"screen-menu-Items")
      }),[t,L,M,n,E]);
      return(0,a.jsx)(nC,{
        isFullscreen:!!document.mozFullScreenElement,
        children:(0,a.jsx)(nx.Z,{
          visible:t,
          trigger:["click"],
          onVisibleChange:E,
          overlay:D,
          overlayClassName:"screen-timeline-search-dropdown-restyled",
          placement:"bottomRight",
          getPopupContainer:k.Gr,
          align:{
            offset:[0,8]
          },
          children:(0,a.jsx)(W.Z,{
            title:"Select screens that should be shown on the timeline.",
            children:(0,a.jsxs)(eF.Z,{
              className:T()("screen-btn",{
                "filter-applied":Z
              }),
              loading:_||j,
              children:[(0,a.jsx)(h.Xq,{})," Screens"," ",Z&&(0,a.jsx)(nb.Z,{
                count:r.length
              })]
            })
          })
        },"timeline-screen-dropdown")
      })
    };
    let nK=C.default.div.withConfig({
      componentId:"sc-e010669e-0"
    })(["max-width:300px;.skip-option{padding:10px 0px 0px 20px;margin-bottom:5px;display:flex;align-items:center;.ant-switch{margin-right:5px;}}.ant-dropdown-menu-item-group-list{margin:0 0 0 20px !important;padding-bottom:0px;}.timeline-event-toggle{margin-bottom:0px !important;}.loading{display:block;font-weight:400;}.ant-input{margin:10px 20px 0;width:250px;border-radius:4px;}.ant-checkbox-wrapper + .ant-checkbox-wrapper{margin-left:0 !important;}.ant-checkbox-wrapper{margin:5px 0;font-size:13px;.ant-checkbox-inner{width:14px;height:14px;&:after{width:4.714px !important;height:8.143px !important;}}.timeline-screen-dropdown-title{position:relative;color:#5D97FF;font-weight:700;}.timeline-screen-dropdown-title::after{position:absolute;content:'';height:1px;top:9px;background:#C0CAD9;left:54px;width:169px;}}.ant-checkbox-group{display:block;.ant-checkbox-wrapper{.check-option-title{display:flex;.screen-with-duration{width:172px;display:inline-block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:bottom;margin-right:10px;}.check-option-count{display:inline-block;text-align:right;font-size:12px;right:13px;position:absolute;}.screen-without-duration{width:225px;display:inline-block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:bottom;}}}}"]),
    nq=C.default.div.withConfig({
      componentId:"sc-e010669e-1"
    })(["display:inline;}"]);
    var nY=n(775);
    let nQ=(0,l.memo)(e=>{
      let{
        sessionScreensList:t,
        availableOptions:n,
        fetchedDataSort:i,
        isLoading:s,
        isEmptyMessage:o,
        handleCheckboxGroupChange:r,
        sessionScreens:p,
        screenCategoryFlag:u
      }=e,
      h=(0,c.I0)(),
      {
        selectedScreens:m=[],
        allScreenCheckToggle:v
      }=(0,c.v9)(e=>e.screenTimelineReducer),
      g=(0,l.useCallback)(e=>{
        if(o)return;
        let t=[];
        "sessionScreens"===u?t=e.target.checked?nj()([...p,...m]):m.filter(e=>!p.filter(e=>e!==i[0]).includes(e)):"allScreens"===u&&(t=e.target.checked?n:n.filter(e=>e===i[0])),
        h((0,d.Ko)(t)),
        h((0,d.mO)(e.target.checked))
      },[u,n,i]);
      (0,l.useEffect)(()=>{
        m.length&&n.length&&h((0,d.mO)("sessionScreens"===u?m.filter(e=>-1!==p.indexOf(e)).length===p.length:nM()(n.sort(),m.sort())))
      },[u,m]);
      let f=(0,l.useMemo)(()=>s?(0,a.jsx)("span",{
        className:"loading",
        children:"loading..."
      }):o?(0,a.jsxs)("div",{
        className:"text-center",
        children:[(0,a.jsx)(nI.Z,{})," No matching event or screen name"]
      }):(0,a.jsx)("div",{
        className:"ant-checkbox-group",
        children:i.map(e=>{
          let n=nT()(t,{
            screenName:e
          });
          return(0,a.jsx)(nN.default,{
            checked:m.indexOf(e)>-1,
            onChange:r,
            value:e,
            className:"check-option",
            children:(0,a.jsxs)("div",{
              className:"check-option-title",
              children:[(0,a.jsx)(ta.Z,{
                onRenderScreen:e=>(0,a.jsx)("span",{
                  className:n>-1?"screen-with-duration":"screen-without-duration",
                  children:e
                }),
                originalScreenName:e
              }),n>-1&&(0,a.jsx)("span",{
                className:"check-option-count",
                children:"number"==typeof t[n].duration?(0,k.zk)({
                  durationInSecs:t[n].duration,
                  roundFalse:!1
                }):""
              })]
            })
          },e)
        })
      }),[r,s,o,i,t,m]);
      return(0,a.jsxs)(a.Fragment,{
        children:[(0,a.jsx)(nN.default,{
          onClick:g,
          checked:v,
          children:(0,a.jsx)("span",{
            className:"timeline-screen-dropdown-title",
            children:"Screens"
          })
        }),f]
      })
    });
    var nX=(0,l.memo)(e=>{
      let{
        screenDropdownVisible:t,
        sessionScreensList:n,
        sessionScreens:i
      }=e,
      s=(0,l.useRef)(null),
      o=(0,c.I0)(),
      [r,p]=(0,l.useState)([]),
      [u,h]=(0,l.useState)([]),
      [m,v]=(0,l.useState)({}),
      [g,f]=(0,l.useState)(!1),
      [b,w]=(0,l.useState)(!1),
      [j,y]=(0,l.useState)(!1),
      {
        urlReducer:{
          appId:k,
          sessionid:C,
          shareSessionKey:N,
          parentType:I,
          screenname:_,
          sessionid:T
        },
        screenTimelineReducer:{
          selectedScreens:L=[],
          skipDeselectedToggle:M,
          screenList:Z,
          screenCategoryFlag:E
        },
        appFilter:{
          dateSegment:D
        }
      }=(0,c.v9)(e=>e),
      R=(0,l.useMemo)(()=>{
        var e,
        t;
        return{
          from:null==D?void 0:null===(e=D.value)||void 0===e?void 0:e.lower,
          to:null==D?void 0:null===(t=D.value)||void 0===t?void 0:t.upper
        }
      },[D]),
      A=(0,F.ye)("new-screens-filter"),
      P=(0,l.useRef)(!1),
      {
        refetch:z,
        isLoading:V
      }=(0,ny.ip)({
        appid:k,
        attribute:A?"screen_name":"session_screen_list",
        dateRange:R,
        dropdownLimit:9999,
        filter:[],
        search:b,
        table:"session"
      },j),
      O=(0,l.useMemo)(()=>{
        let e=[],
        t=i.filter(e=>u.includes(e)),
        n=[...t.filter(e=>L.includes(e)),...t.filter(e=>!L.includes(e))];
        if(N||"sessionScreens"===E)e=[...n];
        else{
          let t=u.filter(e=>!i.includes(e));
          e=[...n,...t.filter(e=>L.includes(e)),...t.filter(e=>!L.includes(e))]
        }
        return e
      },[E,u,i,t]),
      U=e=>{
        h(e),
        p(e),
        v({
          "":(null==e?void 0:e.length)>0
        }),
        f(!e.length)
      },
      B=(0,l.useCallback)(async e=>{
        let t=e.trim()||"",
        n=[],
        i=[],
        s=x()(m),
        a=x()(r),
        l=[];
        if(w(t),y(!1),f(!1),!t){
          h(a);
          return
        }
        if(n=a.length?a.filter(e=>(0,nF.Nq)(e,t)):[],!eB()(s)&&Object.keys(s).includes(t)&&s[t]){
          h(n);
          return
        }
        n.length<10?(await y(!0),z().then(e=>{
          var o;
          let c=null==e?void 0:null===(o=e.data)||void 0===o?void 0:o.data;
          (null==c?void 0:c.length)>=1?s[t]=!0:s[t]=!1;
          let d=(null==c?void 0:c.length)?c.filter(e=>!a.includes(e)):[];
          i=[...n,...d],
          l=[...r,...d],
          f(!i.length),
          v(s),
          h(nj()(i)),
          p(nj()(l))
        })):(i=n,l=a,h(nj()(i)),p(nj()(l)))
      },[r,m,z]),
      W=(0,l.useCallback)(e=>{
        if(N||"sessionScreens"===E){
          w(e.target.value);
          let t=r.filter(t=>(0,nF.Nq)(t,e.target.value.trim()));
          h(t),
          f(!t.length)
        }
        else B(e.target.value)
      },[r,E]),
      H=(0,l.useCallback)(e=>{
        let t=e.target.value,
        n=[];
        if(P.current=!0,o((0,S.CW)(null,{
          eventName:"filter_screens",
          track_type:"event",
          pageName:I,
          eventProperty:{
            ..."heatmapsList"===I&&{
              screenname:_
            },
            ..."heatmapsList"===I&&{
              sessionid:T
            }
          }
        })),L.length){
          if(L.includes(t)){
            if(0===(n=L.filter(e=>e!==t)).length)return
          }
          else n=[...L,t]
        }
        o((0,d.Ko)(n)),
        o((0,d.mO)(nM()(r.sort(),n.sort())))
      },[r,L,i]),
      G=()=>{
        v({}),
        p([]),
        h([]),
        f(!1),
        w("")
      };
      return(0,l.useEffect)(()=>{
        G()
      },[k,C]),
      (0,l.useEffect)(()=>{
        Z&&U(Z)
      },[Z,C,k]),
      (0,l.useEffect)(()=>{
        t&&r.length&&(f(!1),w(""),B(""))
      },[t]),
      (0,l.useEffect)(()=>{
        t&&setTimeout(()=>{
          var e;
          null===(e=s.current)||void 0===e||e.focus({
            preventScroll:!0
          })
        },0),
        !t&&P.current&&(o((0,S.CW)(null,{
          eventName:"wa_localized_filter_applied",
          eventProperty:{
            filterName:"Screens"
          }
        })),P.current=!1)
      },[t]),
      (0,a.jsxs)(nK,{
        children:[(0,a.jsx)(nY.DebounceInput,{
          value:b,
          placeholder:"Search",
          debounceTimeout:500,
          className:"ant-input debounce-input",
          inputRef:s,
          onChange:W
        }),(0,a.jsxs)("div",{
          className:"skip-option",
          children:[(0,a.jsx)(nS.Z,{
            onClick:(0,l.useCallback)(e=>o((0,d.Yo)(e)),[]),
            checked:M,
            size:"small"
          })," ",(0,a.jsx)("span",{
            children:"Skip deselected screens in video replay"
          })]
        }),(0,a.jsx)(nf.default.ItemGroup,{
          title:!N&&(0,a.jsxs)("span",{
            className:"timeline-event-toggle",
            children:[(0,a.jsx)(eF.Z,{
              className:"sessionScreens"===E?"active-toggle-btn":"",
              onClick:()=>o((0,d.dL)("sessionScreens")),
              children:"In this session"
            }),(0,a.jsx)(eF.Z,{
              className:"allScreens"===E?"active-toggle-btn":"",
              onClick:()=>o((0,d.dL)("allScreens")),
              children:"All screens"
            })]
          }),
          className:"menu-item-group",
          children:(0,a.jsx)(nQ,{
            screenCategoryFlag:E,
            sessionScreens:i,
            sessionScreensList:n,
            availableOptions:r,
            fetchedDataSort:O,
            isLoading:V,
            isEmptyMessage:g,
            handleCheckboxGroupChange:H
          },E)
        },"screen")]
      })
    });
    let n$=(e,t)=>e.some(e=>t.includes(e));
    var nJ=e=>{
      let{
        screenDropdownVisible:t,
        screenDropdownToggler:n,
        uploadedOn:i
      }=e,
      s=(0,c.I0)(),
      {
        sessionDetailScreens:o
      }=(0,G.Lc)(),
      {
        screenTimelineReducer:{
          selectedScreens:r=[],
          screenList:p
        },
        urlReducer:{
          appId:u,
          sessionid:m,
          shareSessionKey:v
        },
        appFilter:{
          dateSegment:g
        }
      }=(0,c.v9)(e=>e),
      {
        sessionDetail:f
      }=(0,G.Lc)(),
      x=(0,l.useMemo)(()=>{
        var e,
        t;
        return{
          from:null==g?void 0:null===(e=g.value)||void 0===e?void 0:e.lower,
          to:null==g?void 0:null===(t=g.value)||void 0===t?void 0:t.upper
        }
      },[g]),
      {
        data:b,
        refetch:w,
        isLoading:j
      }=v?(0,I.j4)("screens-details","/sessions/get-all-screens/",v):(0,ny.K2)({
        sessionid:m,
        appid:u,
        uploadedon:i
      }),
      y=(0,l.useMemo)(()=>{
        var e;
        return{
          data:{
            data:((null==f?void 0:null===(e=f.screenTimeline)||void 0===e?void 0:e.activities)||[]).reduce((e,t)=>{
              let{
                activityName:n,
                endTime:i,
                time:s
              }=t,
              a=i-s,
              l=e.find(e=>{
                let{
                  screenName:t
                }=e;
                return t===n
              });
              return l?l.duration+=a:e.push({
                screenName:n,
                duration:a
              }),
              e
            },[])
          }
        }
      },[f]),
      C=(0,F.ye)("new-screens-filter"),
      {
        data:{
          data:{
            data:S=[]
          }={}
        }={},
        refetch:_,
        isLoading:L
      }=(0,ny.bB)({
        appid:u,
        attribute:C?"screen_name":"session_screen_list",
        dateRange:x,
        dropdownLimit:501,
        filter:[],
        search:"",
        table:"session"
      },{
        enabled:!v
      }),
      M=(0,l.useMemo)(()=>{
        var e;
        return y?null===(e=y.data)||void 0===e?void 0:e.data.filter((e,t)=>"Launch"!==e.screenName||0!==t).sort((e,t)=>t.duration-e.duration):[]
      },[y]),
      Z=(0,l.useMemo)(()=>M.map(e=>e.screenName),[M]),
      E=(0,l.useMemo)(()=>r.length!==p.length,[r,p]);
      (0,l.useEffect)(()=>{
        v||_()
      },[u]),
      (0,l.useEffect)(()=>{
        !v&&m&&w()
      },[m]),
      (0,l.useEffect)(()=>{
        if(!v&&(null==S?void 0:S.length)&&(null==Z?void 0:Z.length)){
          let e=[];
          p.length&&Z.map(t=>{
            p.includes(t)||(e=[...e,t])
          });
          let t=(null==p?void 0:p.length)?nj()([...p,...Z]):nj()([...S,...Z]),
          n=r.length?nj()([...r,...e]):t;
          s((0,d.Pl)(t)),
          s((0,d.Ko)(n))
        }
      },[S,Z]),
      (0,l.useEffect)(()=>{
        !v&&r.length&&Z.length&&s((0,d.p2)({
          flag:!n$(Z,r),
          message:n$(Z,r)?"":"You have unselected all the screen in this session from the screens filter. Please select at least 1 screen from this session to play the video."
        }))
      },[Z,r]),
      (0,l.useEffect)(()=>{
        Z.length&&v&&(s((0,d.Pl)(Z)),s((0,d.Ko)(Z)))
      },[Z]);
      let D=(0,a.jsx)(nf.default,{
        children:(0,a.jsx)(nX,{
          screenDropdownVisible:t,
          sessionScreensList:M,
          sessionScreens:Z
        },"screen-menu-Items")
      });
      return(0,a.jsx)(nq,{
        isFullscreen:!!document.mozFullScreenElement,
        children:(0,a.jsx)(nx.Z,{
          visible:t,
          trigger:["click"],
          onVisibleChange:e=>{
            n(e),
            e&&s((0,N.hI)({
              action:"View all user screens from session details page"
            }))
          },
          overlay:D,
          overlayClassName:"screen-timeline-search-dropdown",
          placement:"bottomLeft",
          getPopupContainer:k.Gr,
          children:(0,a.jsx)(W.Z,{
            title:"Select screens that should be shown on the timeline.",
            children:(0,a.jsxs)(eF.Z,{
              className:T()("screen-btn",{
                "filter-applied":E
              }),
              loading:L||j,
              children:[(0,a.jsx)(h.Xq,{})," Screens"," ",E&&(0,a.jsx)(nb.Z,{
                count:r.length
              })]
            })
          })
        },"timeline-screen-dropdown")
      })
    };
    let n0=(0,C.createGlobalStyle)([".screen-timeline-search-dropdown-restyled{.screen-with-duration{max-width:135px;}.ant-dropdown-menu-root{padding:8px 10px;width:268px;border-radius:8px;overflow:hidden;border:1px solid #DBDBDE;box-shadow:0px 4px 12px rgba(0,0,0,0.05);.ant-dropdown-menu-title-content{width:100%;}.ant-dropdown-menu-item-group-list{margin:0;}.ant-dropdown-menu-item{padding:0;}label.ant-checkbox-wrapper{width:100%;font-size:12px;line-height:13px;color:#4F4F4F;padding:8px 8px 0;.check-option-title{width:100%;display:flex;justify-content:space-between;}.check-option-name{width:initial;flex:1;}.check-option-title{max-width:187px;}.no-event-message{padding-top:15px;color:#737886;}}.ant-checkbox-wrapper > span:last-of-type{padding:0;width:100%;}.ant-checkbox{margin-right:12px;}.ant-dropdown-menu-item-group{max-height:200px;overflow-y:scroll;overflow-x:hidden;}}}"]),
    n1=nf.default.ItemGroup;
    nf.default.Item;
    let n2=C.default.div.withConfig({
      componentId:"sc-219a4bc1-0"
    })([".ant-input{margin-bottom:5px;border-radius:4px;}"]),
    n3=C.default.div.withConfig({
      componentId:"sc-219a4bc1-1"
    })(["display:flex;width:100%;gap:10px;margin-bottom:10px;button{font-weight:400;width:50%;display:flex;justify-content:center;border-radius:30px;line-height:16px;}"]),
    n5=C.default.div.withConfig({
      componentId:"sc-219a4bc1-2"
    })(["width:20px;height:13px;overflow:hidden;.custom-icon{height:13px;fill:#090F19;}"]);
    var n4=(0,l.memo)(e=>{
      let{
        uploadedOn:t
      }=e,
      {
        sessionDetailReducer:n,
        screenTimelineReducer:i,
        urlReducer:s
      }=(0,c.v9)(e=>e),
      {
        selectedEventField:o,
        selectedGestureField:r,
        allEvents:p,
        isEventTriggered:u
      }=i,
      m=(0,l.useRef)(),
      v=(0,c.I0)(),
      [g,f]=(0,l.useState)(""),
      [x,b]=(0,l.useState)([]),
      [w,j]=(0,l.useState)([]),
      [y,C]=(0,l.useState)([]),
      [N,_]=(0,l.useState)(!1),
      [T,L]=(0,l.useState)(!1),
      [M,Z]=(0,l.useState)(p),
      [F,E]=(0,l.useState)([]),
      [D,R]=(0,l.useState)([]),
      [A,P]=(0,l.useState)(!1),
      z=(0,l.useMemo)(()=>w.map(e=>({
        name:e.event_name,
        count:e.count,
        isSmartEvent:!0
      })),[w]),
      V=(0,l.useMemo)(()=>[...z,...x],[z,x]),
      O=(0,l.useMemo)(()=>A?z:x,[A,x,z]),
      U=(0,l.useRef)(),
      {
        sessionid:B,
        secondarysessionid:H,
        appId:K,
        parentType:q
      }=s,
      {
        setSessionGestures:Y,
        setSessionEvents:Q,
        setSessionNocodeEvents:X,
        sessionGestures:$
      }=(0,G.Lc)(),
      J="aiSessionsList"===q?H:B,
      ee=(0,l.useMemo)(()=>({
        appid:K,
        sessionid:J,
        uploadedon:t
      }),[K,J,t]),
      et=(0,l.useMemo)(()=>(null==s?void 0:s.parentType)==="shareSession",[s]),
      {
        data:en,
        refetch:ei,
        isLoading:es
      }=(0,I.x1)(ee,!et),
      {
        data:ea,
        isLoading:el
      }=(0,I.rC)(ee,N&&!et),
      {
        data:eo,
        isLoading:er
      }=(0,I.he)(ee,N&&A&&!et),
      ec=s.shareSessionKey,
      {
        data:ed,
        isLoading:ep
      }=(0,I.j4)("event-details","/sessions/get-event-details/",ec,N&&et),
      eu=(0,l.useMemo)(()=>{
        var e;
        return(null==ed?void 0:null===(e=ed.data)||void 0===e?void 0:e.data)||[]
      },[ed]),
      {
        data:eh,
        isLoading:em
      }=(0,I.I6)(ec,N&&A&&et),
      ev=(0,l.useMemo)(()=>{
        var e;
        return(null==eh?void 0:null===(e=eh.data)||void 0===e?void 0:e.data)||[]
      },[eh]),
      eg=(null==en?void 0:en.length)||0,
      ef=null==n?void 0:n.loader;
      (0,l.useEffect)(()=>{
        if(en&&!et){
          var e,
          t;
          C((null==en?void 0:null===(e=en.data)||void 0===e?void 0:e.data)||[]),
          Y((null==en?void 0:null===(t=en.data)||void 0===t?void 0:t.data)||[])
        }
      },[en,Y,et]),
      (0,l.useEffect)(()=>{
        if(ea&&!et){
          var e,
          t;
          b((null==ea?void 0:null===(e=ea.data)||void 0===e?void 0:e.data)||[]),
          Q((null==ea?void 0:null===(t=ea.data)||void 0===t?void 0:t.data)||[])
        }
        return()=>{
          Q([])
        }
      },[ea,Q,et]),
      (0,l.useEffect)(()=>{
        if(eo&&!et){
          var e,
          t;
          j((null==eo?void 0:null===(e=eo.data)||void 0===e?void 0:e.data)||[]),
          X((null==eo?void 0:null===(t=eo.data)||void 0===t?void 0:t.data)||[])
        }
        return()=>{
          X([])
        }
      },[eo,X,et]),
      (0,l.useEffect)(()=>{
        et&&$&&C($)
      },[et,$]),
      (0,l.useEffect)(()=>{
        et&&eu&&eu.length>0&&b(eu)
      },[et,eu]),
      (0,l.useEffect)(()=>{
        et&&ev&&j(ev)
      },[et,ev]),
      (0,l.useEffect)(()=>{
        !et&&J&&ei()
      },[J]);
      let ex=(0,l.useCallback)(e=>M?e:e.filter(e=>0!==e.count),[M]),
      eb=(0,l.useMemo)(()=>N?ex(O):y,[N,O,y,ex]),
      ew=(0,l.useMemo)(()=>eb.filter(e=>e.name.toLowerCase().includes(g)),[eb,g]),
      ej=(0,l.useMemo)(()=>N?F:D,[N,F,D]),
      ey=(0,l.useCallback)((e,t)=>e.some(e=>e.name===t),[]),
      ek=(0,l.useCallback)((e,t,n)=>{
        let{
          name:i,
          count:s,
          isSmartEvent:a
        }=t;
        e.preventDefault(),
        "events"===n&&(F.map(e=>e.name).indexOf(i)>-1?E(F.filter(e=>e.name!==i)):E([...F,{
          name:i,
          count:s,
          isSmartEvent:a
        }])),
        "gestures"===n&&(D.map(e=>e.name).indexOf(i)>-1?R(D.filter(e=>e.name!==i)):R([...D,{
          name:i,
          count:s
        }])),
        v((0,d.O4)(!0))
      },[v,F,D]),
      eC=e=>f(e.target.value.trim().toLowerCase()),
      eS=(0,l.useCallback)(e=>{
        Z(e),
        v((0,d.iy)(e))
      },[v]),
      eN=(0,l.useCallback)(e=>{
        _(e),
        f("")
      },[]),
      e_=(0,l.useCallback)(e=>{
        L(e),
        f("")
      },[]),
      eT=(0,l.useCallback)(e=>{
        "events"===e?(v((0,d.TH)(V)),eN(!1)):(v((0,d.EF)(y)),e_(!1)),
        f("")
      },[V,y,v,eN,e_]),
      eL=(0,l.useCallback)(()=>{
        N?(v((0,d.TH)(F)),v((0,S.CW)(null,{
          eventName:"filter_events",
          track_type:"event",
          pageName:null==s?void 0:s.parentType,
          eventProperty:{
            ...(null==s?void 0:s.parentType)==="heatmapsList"&&{
              screenname:null==s?void 0:s.screenname
            },
            ...(null==s?void 0:s.parentType)==="heatmapsList"&&{
              sessionid:J
            }
          }
        })),eN(!1)):(v((0,d.EF)(D)),v((0,S.CW)(null,{
          eventName:"filter_gestures",
          track_type:"event",
          pageName:null==s?void 0:s.parentType,
          eventProperty:{
            gestures:D,
            ...(null==s?void 0:s.parentType)==="heatmapsList"&&{
              screenname:null==s?void 0:s.screenname
            },
            ...(null==s?void 0:s.parentType)==="heatmapsList"&&{
              sessionid:J
            }
          }
        })),e_(!1))
      },[F,v,N,J,ew,eo,s,D,g,A,ea,eN,e_]),
      eM=(0,l.useCallback)(()=>P(!1),[]),
      eZ=(0,l.useCallback)(()=>P(!0),[]),
      eE=(0,l.useCallback)(e=>{
        "events"===e?(null==g?void 0:g.length)?E(F.filter(e=>!ew.some(t=>t.name===e.name))):A?E(F.filter(e=>!z.some(t=>t.name===e.name))):E(F.filter(e=>!x.some(t=>t.name===e.name))):R([])
      },[x,z,ew,g,A,F]),
      eD=(0,l.useCallback)(e=>{
        "events"===e?(null==g?void 0:g.length)?A?E([...F.filter(e=>!z.some(t=>t.name===e.name)),...ew]):E([...F.filter(e=>!x.some(t=>t.name===e.name)),...ew]):E([...new Set([...F,...A?z:x])]):R(y)
      },[g,A,ew,z,x,F,y]),
      eR=(0,l.useMemo)(()=>ef||eb.every(e=>ej.some(t=>t.name===e.name&&t.count===e.count)),[ej,eb,ef]),
      eA=(0,l.useMemo)(()=>ef||eb.every(e=>!ej.some(t=>t.name===e.name&&t.count===e.count)),[ej,eb,ef]),
      eP=(0,l.useCallback)(e=>(0,a.jsxs)(nf.default,{
        children:[(0,a.jsxs)(n2,{
          children:["events"===e&&(0,a.jsxs)(nA,{
            toggleEvent:M,
            children:[(0,a.jsx)(eF.Z,{
              onClick:()=>eS(!0),
              children:"All events"
            }),(0,a.jsx)(eF.Z,{
              onClick:()=>eS(!1),
              children:"In this session"
            })]
          }),"events"===e&&(0,a.jsxs)(n3,{
            children:[(0,a.jsx)(eV.Z,{
              variant:A?"secondary":"primary",
              onClick:eM,
              children:"Coded events"
            }),(0,a.jsx)(eV.Z,{
              variant:A?"primary":"secondary",
              onClick:eZ,
              children:"Smart events"
            })]
          }),"events"===e&&(0,a.jsxs)(nP,{
            children:[(0,a.jsx)(nz,{
              value:g,
              placeholder:"Search events",
              debounceTimeout:500,
              inputRef:m,
              onChange:eC
            }),(0,a.jsx)(nZ.Z,{})]
          }),(0,a.jsx)(nE.Eu,{
            children:(0,a.jsx)(nD.Gv,{
              handleSelectAllOptions:()=>eD(e),
              handleClearAllOptions:()=>eE(e),
              disableSelect:eR,
              disableClear:eA
            })
          })]
        }),(0,a.jsx)(n1,{
          className:"menu-item-group",
          children:ew.length?ew.map(t=>(0,a.jsx)(nf.default.Item,{
            className:0===t.count?"timeline-options timeline-event-none":"timeline-options",
            children:(0,a.jsx)(nN.default,{
              className:"check-option",
              checked:ej.map(e=>e.name).includes(t.name),
              onChange:n=>ek(n,t,e),
              value:t.name,
              children:(0,a.jsxs)("div",{
                className:"check-option-title",
                children:["gestures"===e&&(0,a.jsx)(n5,{
                  children:(0,a.jsx)(eI,{
                    name:t.name
                  })
                })," ",(0,a.jsx)("span",{
                  className:"check-option-name",
                  children:t.name
                }),(0,a.jsx)("span",{
                  className:"check-option-count",
                  children:t.count
                })]
              })
            },t.name)
          },t.name+t.count)):(0,a.jsx)("div",{
            className:"no-event-message",
            children:el||er||ep||em?"loading ".concat(e,"..."):"No ".concat(e," in this session")
          })
        }),(0,a.jsxs)(nV,{
          children:[(0,a.jsx)(eV.Z,{
            onClick:()=>eT(e),
            variant:"ghost",
            children:"Reset"
          }),(0,a.jsx)(eV.Z,{
            onClick:()=>eL(e),
            variant:"primary",
            children:"Apply"
          })]
        })]
      }),[ej,ew,g,M,A,eA,eR,eL,ek,eT,eS,eE,eD,eM,eZ,el,er,ep,em]),
      ez=(0,l.useCallback)(e=>{
        let t=0,
        n="events"===e?V:y,
        i="events"===e?o:r;
        return null==n||n.forEach(e=>{
          ey(i,e.name)&&(t+=1)
        }),
        t
      },[r,V,y,o,ey]);
      return(0,l.useEffect)(()=>{
        ea&&en&&eo&&(b(null==ea?void 0:ea.data.data),j(null==eo?void 0:eo.data.data),C(null==en?void 0:en.data.data))
      },[J,M,ea,en,eo]),
      (0,l.useEffect)(()=>((null==O?void 0:O.length)&&(U.current=setTimeout(()=>{
        v((0,d.TH)(u?o:V))
      },1e3)),()=>{
        (0,d.TH)([]),
        clearTimeout(U.current)
      }),[v,O]),
      (0,l.useEffect)(()=>{
        y.length&&v((0,d.EF)(u||0!==r.length?r:y))
      },[y,en,v,u,r]),
      (0,l.useEffect)(()=>{
        m.current&&N&&setTimeout(()=>{
          m.current.focus()
        },1e3)
      },[N,M]),
      (0,l.useEffect)(()=>o&&E(o),[o]),
      (0,l.useEffect)(()=>r&&R(r),[r]),
      (0,l.useEffect)(()=>f(""),[A]),
      (0,a.jsxs)(a.Fragment,{
        children:[(0,a.jsx)(n0,{}),(0,a.jsx)(nx.Z,{
          visible:N,
          trigger:["click"],
          disabled:ef,
          onVisibleChange:eN,
          overlay:eP("events"),
          overlayClassName:"screen-timeline-search-dropdown-restyled",
          getPopupContainer:k.Gr,
          placement:"bottomLeft",
          align:{
            offset:[0,8]
          },
          children:(0,a.jsx)(W.Z,{
            title:"Select events that should be shown on the timeline.",
            children:(0,a.jsxs)(eF.Z,{
              className:ez("events")<(null==V?void 0:V.length)?"filter-applied":"",
              "data-intercom-target":"Events dropdown",
              children:[(0,a.jsx)(h.Xq,{})," Events"," ",ez("events")<(null==V?void 0:V.length)&&(0,a.jsx)(nb.Z,{
                showZero:!0,
                count:ez("events")
              })]
            })
          })
        }),(0,a.jsx)(nx.Z,{
          disabled:ef,
          visible:T,
          trigger:["click"],
          onVisibleChange:e_,
          overlay:eP("gestures"),
          overlayClassName:"screen-timeline-search-dropdown-restyled",
          getPopupContainer:k.Gr,
          placement:"bottomCenter",
          align:{
            offset:[0,8]
          },
          children:(0,a.jsx)(W.Z,{
            title:"Select gestures that should be shown on the timeline.",
            children:(0,a.jsxs)(eF.Z,{
              loading:es,
              className:ez("gesture")<eg?"filter-applied":"",
              children:[(0,a.jsx)(h.Xq,{})," Gestures"," ",ez("gesture")<eg&&(0,a.jsx)(nb.Z,{
                showZero:!0,
                count:ez("gesture")
              })]
            })
          })
        })]
      })
    });
    let n6=nf.default.ItemGroup;
    nf.default.Item;
    let n7=C.default.div.withConfig({
      componentId:"sc-102de2f5-0"
    })([".ant-input{margin-bottom:5px;border-radius:4px;}"]),
    n8=(0,l.memo)(e=>{
      let{
        menuList:t,
        title:n,
        searchValue:i,
        type:s,
        selectedList:l,
        handleMenuClick:o,
        loadingEvents:r,
        loadingSharedEvents:c
      }=e;
      return(0,a.jsx)(n6,{
        title:n,
        className:"menu-item-group",
        children:t.length?t.filter(e=>e.name.toLowerCase().includes(i)).map(e=>(0,a.jsx)(nf.default.Item,{
          className:0===e.count?"timeline-options timeline-event-none":"timeline-options",
          children:(0,a.jsx)(nN.default,{
            className:"check-option",
            checked:l.map(e=>e.name).includes(e.name),
            onChange:t=>o(t,e,s),
            value:e.name,
            children:(0,a.jsxs)("div",{
              className:"check-option-title",
              children:[(0,a.jsxs)("span",{
                className:"check-option-name",
                children:["gestures"===s&&(0,a.jsx)(eI,{
                  name:e.name
                })," ",e.name]
              }),(0,a.jsx)("span",{
                className:"check-option-count",
                children:e.count
              })]
            })
          },e.name)
        },e.name+e.count)):(0,a.jsx)("div",{
          className:"no-event-message",
          children:r||c?"loading ".concat(s,"..."):"No ".concat(s," in this session")
        })
      })
    });
    var n9=e=>{
      let{
        uploadedOn:t
      }=e,
      {
        sessionDetailReducer:n,
        screenTimelineReducer:i,
        urlReducer:s
      }=(0,c.v9)(e=>e),
      {
        selectedEventField:o,
        selectedGestureField:r,
        allEvents:p,
        isEventTriggered:u
      }=i,
      m=(0,l.useRef)(),
      v=(0,c.I0)(),
      [g,f]=(0,l.useState)(""),
      [x,b]=(0,l.useState)([]),
      [w,j]=(0,l.useState)([]),
      [y,C]=(0,l.useState)(!1),
      [N,_]=(0,l.useState)(!1),
      [T,L]=(0,l.useState)(!1),
      [M,Z]=(0,l.useState)(!1),
      [F,E]=(0,l.useState)(p),
      {
        sessionid:D,
        secondarysessionid:R,
        parentType:A,
        appId:P
      }=s,
      {
        setSessionGestures:z,
        setSessionEvents:V,
        sessionGestures:O
      }=(0,G.Lc)(),
      U=s.shareSessionKey,
      B="aiSessionsList"===A?R:D,
      H=(0,l.useMemo)(()=>({
        appid:P,
        sessionid:B,
        uploadedon:t
      }),[P,B,t]),
      K=(0,l.useMemo)(()=>(null==s?void 0:s.parentType)==="shareSession",[s]),
      {
        data:q,
        refetch:Y,
        isLoading:Q
      }=(0,I.x1)(H,!K),
      {
        data:X,
        isLoading:$
      }=(0,I.rC)(H,y&&!K),
      {
        data:J,
        isLoading:ee
      }=(0,I.j4)("event-details","/sessions/get-event-details/",U,y&&K),
      et=(0,l.useMemo)(()=>{
        var e;
        return(null==J?void 0:null===(e=J.data)||void 0===e?void 0:e.data)||[]
      },[J]),
      en=(null==q?void 0:q.length)||0,
      ei=(null==X?void 0:X.length)||0,
      es=null==n?void 0:n.loader,
      ea=(0,l.useRef)({
        changed:!1,
        type:""
      });
      (0,l.useEffect)(()=>{
        if(q&&!K){
          var e,
          t;
          j((null==q?void 0:null===(e=q.data)||void 0===e?void 0:e.data)||[]),
          z((null==q?void 0:null===(t=q.data)||void 0===t?void 0:t.data)||[])
        }
      },[K,q,z]),
      (0,l.useEffect)(()=>{
        if(X&&!K){
          var e,
          t;
          b((null==X?void 0:null===(e=X.data)||void 0===e?void 0:e.data)||[]),
          V((null==X?void 0:null===(t=X.data)||void 0===t?void 0:t.data)||[])
        }
        return()=>{
          V([])
        }
      },[K,X,V]),
      (0,l.useEffect)(()=>{
        K&&O&&j(O)
      },[K,O]),
      (0,l.useEffect)(()=>{
        K&&et&&et.length>0&&b(et)
      },[K,et]),
      (0,l.useEffect)(()=>{
        !K&&B&&Y()
      },[B]);
      let el=(e,t)=>e.some(e=>e.name===t),
      eo=async(e,t,n)=>{
        let{
          name:i,
          count:a
        }=t;
        if(ea.current={
          changed:!0,
          type:n
        },e.preventDefault(),"events"===n){
          let e=[];
          e=o.map(e=>e.name).indexOf(i)>-1?o.filter(e=>e.name!==i):[...o,{
            name:i,
            count:a
          }],
          await v((0,d.TH)(e)),
          v((0,S.CW)(null,{
            eventName:"filter_events",
            track_type:"event",
            pageName:null==s?void 0:s.parentType,
            eventProperty:{
              ...(null==s?void 0:s.parentType)==="heatmapsList"&&{
                screenname:null==s?void 0:s.screenname
              },
              ...(null==s?void 0:s.parentType)==="heatmapsList"&&{
                sessionid:B
              }
            }
          }))
        }
        if("gestures"===n){
          let e=[];
          e=r.map(e=>e.name).indexOf(i)>-1?r.filter(e=>e.name!==i):[...r,{
            name:i,
            count:a
          }],
          await v((0,d.EF)(e)),
          v((0,S.CW)(null,{
            eventName:"filter_gestures",
            track_type:"event",
            pageName:null==s?void 0:s.parentType,
            eventProperty:{
              gestures:e,
              ...(null==s?void 0:s.parentType)==="heatmapsList"&&{
                screenname:null==s?void 0:s.screenname
              },
              ...(null==s?void 0:s.parentType)==="heatmapsList"&&{
                sessionid:B
              }
            }
          }))
        }
        v((0,d.O4)(!0))
      },
      er=(e,t)=>{
        let n=new Set;
        return e.filter(e=>!n.has(e[t])&&n.add(e[t]))
      },
      ec=e=>f(e.target.value.trim().toLowerCase()),
      ed=async(e,t)=>{
        if(e.target.checked){
          if("events"===t){
            let e=er([...o,...x],"name"),
            t=F?e:e.filter(e=>0!==e.count);
            await v((0,d.TH)(t)),
            v((0,S.CW)(null,{
              eventName:"filter_events",
              track_type:"event",
              pageName:null==s?void 0:s.parentType,
              eventProperty:{
                ...(null==s?void 0:s.parentType)==="heatmapsList"&&{
                  screenname:null==s?void 0:s.screenname
                },
                ...(null==s?void 0:s.parentType)==="heatmapsList"&&{
                  sessionid:B
                }
              }
            }))
          }
          if("gestures"===t){
            let e=[...r,...w];
            await v((0,d.EF)(er(e,"name"))),
            v((0,S.CW)(null,{
              eventName:"filter_gestures",
              track_type:"event",
              pageName:null==s?void 0:s.parentType,
              eventProperty:{
                gestures:e,
                ...(null==s?void 0:s.parentType)==="heatmapsList"&&{
                  screenname:null==s?void 0:s.screenname
                },
                ...(null==s?void 0:s.parentType)==="heatmapsList"&&{
                  sessionid:B
                }
              }
            }))
          }
        }
        else{
          if("events"===t){
            let e=F?[]:x.filter(e=>0===e.count);
            await v((0,d.TH)(e))
          }"gestures"===t&&await v((0,d.EF)([]))
        }
        f(""),
        v((0,d.O4)(!0))
      },
      ep=e=>{
        E(e),
        v((0,d.iy)(e))
      },
      eu=e=>(0,a.jsxs)(n7,{
        children:["events"===e&&(0,a.jsx)(nY.DebounceInput,{
          value:g,
          placeholder:"Search",
          debounceTimeout:500,
          className:"ant-input debounce-input",
          inputRef:m,
          onChange:ec
        }),"events"===e&&(0,a.jsxs)("span",{
          className:"timeline-event-toggle",
          children:[(0,a.jsx)(eF.Z,{
            className:F&&"active-toggle-btn",
            onClick:()=>ep(!0),
            children:"All events"
          }),(0,a.jsx)(eF.Z,{
            className:!F&&"active-toggle-btn",
            onClick:()=>ep(!1),
            children:"In this session"
          })]
        }),(0,a.jsx)(nN.default,{
          checked:"events"===e?T:M,
          onClick:t=>ed(t,e),
          children:(0,a.jsx)("span",{
            className:"checkbox-span",
            children:"events"===e?"Events":"Gestures"
          })
        })]
      }),
      eh=e=>F?e:e.filter(e=>0!==e.count),
      em=e=>(0,a.jsx)(nf.default,{
        children:(0,a.jsx)(n8,{
          type:e,
          menuList:"events"===e?eh(x):w,
          title:eu(e),
          searchValue:g,
          selectedList:"events"===e?o:r,
          handleMenuClick:eo,
          loadingEvents:$,
          loadingSharedEvents:ee
        },e)
      }),
      ev=(e,t,n)=>{
        let i=[];
        return!(i="events"===n?F?t:t.filter(e=>0!==e.count):t).length||i.every(t=>e.some(e=>e.name===t.name))
      },
      eg=e=>{
        let t=0,
        n="events"===e?x:w,
        i="events"===e?o:r;
        return n.forEach(e=>{
          el(i,e.name)&&(t+=1)
        }),
        t
      };
      return(0,l.useEffect)(()=>{
        X&&q&&(b(null==X?void 0:X.data.data),j(null==q?void 0:q.data.data))
      },[B,F,X,q]),
      (0,l.useEffect)(()=>((null==x?void 0:x.length)&&v((0,d.TH)(u?o:x)),()=>{
        (0,d.TH)([])
      }),[x,X]),
      (0,l.useEffect)(()=>{
        y&&N||!ea.current.changed||(v((0,S.CW)(null,{
          eventName:"wa_localized_filter_applied",
          eventProperty:{
            filterName:(e=>{
              switch(e){
                case"events":return"Events";
                case"gestures":return"Gestures";
                default:return""
              }
            })(ea.current.type)
          }
        })),ea.current={
          changed:!1,
          type:""
        })
      },[y,N]),
      (0,l.useEffect)(()=>{
        w.length&&v((0,d.EF)(u||0!==r.length?r:w))
      },[w]),
      (0,l.useEffect)(()=>{
        L(ev(o,x,"events"))
      },[o.length,F,x]),
      (0,l.useEffect)(()=>{
        Z(ev(r,w,"gestures"))
      },[r.length,w]),
      (0,l.useEffect)(()=>{
        m.current&&y&&setTimeout(()=>{
          m.current.focus()
        },1e3)
      },[y,F]),
      (0,a.jsxs)(a.Fragment,{
        children:[(0,a.jsx)(nx.Z,{
          visible:y,
          disabled:es,
          trigger:["click"],
          onVisibleChange:e=>{
            C(e),
            f("")
          },
          overlay:em("events"),
          overlayClassName:"screen-timeline-search-dropdown",
          getPopupContainer:k.Gr,
          children:(0,a.jsx)(W.Z,{
            title:"Select events that should be shown on the timeline.",
            children:(0,a.jsxs)(eF.Z,{
              className:eg("events")<ei?"filter-applied":"",
              "data-intercom-target":"Events dropdown",
              children:[(0,a.jsx)(h.Xq,{})," Events"," ",eg("events")<ei&&(0,a.jsx)(nb.Z,{
                showZero:!0,
                count:eg("events")
              })]
            })
          })
        }),(0,a.jsx)(nx.Z,{
          disabled:es,
          visible:N,
          trigger:["click"],
          onVisibleChange:e=>{
            _(e),
            f("")
          },
          overlay:em("gestures"),
          overlayClassName:"screen-timeline-search-dropdown",
          getPopupContainer:k.Gr,
          children:(0,a.jsx)(W.Z,{
            title:"Select gestures that should be shown on the timeline.",
            children:(0,a.jsxs)(eF.Z,{
              loading:Q,
              className:eg("gesture")<en?"filter-applied":"",
              children:[(0,a.jsx)(h.Xq,{})," Gestures"," ",eg("gesture")<en&&(0,a.jsx)(nb.Z,{
                showZero:!0,
                count:eg("gesture")
              })]
            })
          })
        })]
      })
    },
    ie=e=>{
      let{
        screenDropdownVisible:t,
        screenDropdownToggler:n,
        uploadedOn:i
      }=e,
      {
        urlReducer:{
          parentType:s
        }
      }=(0,c.v9)(e=>e),
      {
        noCodeEventsFeatureFlag:l
      }=(0,Z.Z)();
      return(0,a.jsx)("div",{
        className:"screen-timeline-search ".concat("heatmapsList"===s?"remove-screen-search":""),
        children:l?(0,a.jsxs)(a.Fragment,{
          children:[(0,a.jsx)(n4,{
            uploadedOn:i
          }),(0,a.jsx)(nG,{
            screenDropdownVisible:t,
            screenDropdownToggler:n,
            uploadedOn:i
          })]
        }):(0,a.jsxs)(a.Fragment,{
          children:[(0,a.jsx)(n9,{
            uploadedOn:i
          }),(0,a.jsx)(nJ,{
            screenDropdownVisible:t,
            screenDropdownToggler:n,
            uploadedOn:i
          })]
        })
      })
    },
    it=n(62357),
    ii=e=>{
      let{
        active:t,
        videoDuration:n,
        isCrashedLog:i,
        onRewind:s
      }=e,
      {
        setSelectedHeaderField:l
      }=(0,G.qI)();
      return(0,a.jsx)("div",{
        className:T()("event-item session-ended",{
          withCrash:i,
          active:t
        }),
        children:(0,a.jsx)("div",{
          "aria-hidden":"true",
          onClick:()=>s(n),
          className:T()("item-header","event-header",{
            active:t
          }),
          children:(0,a.jsx)("h3",{
            children:i?(0,a.jsx)("div",{
              className:"crashed",
              children:(0,a.jsxs)("span",{
                className:"title",
                children:[(0,a.jsxs)("span",{
                  "aria-hidden":"true",
                  children:[(0,a.jsx)(it.Z,{})," App crashed"]
                }),(0,a.jsxs)("p",{
                  "aria-hidden":"true",
                  onClick:()=>l("crash"),
                  children:[" ","show details"]
                })]
              })
            }):"Session ended"
          })
        })
      })
    },
    is=n(4368),
    ia=n(23279),
    il=n.n(ia),
    io=n(45697),
    ir=n.n(io);
    let ic=C.default.span.withConfig({
      componentId:"sc-c2d3b161-0"
    })(["word-break:break-all;"]),
    id=C.default.span.withConfig({
      componentId:"sc-c2d3b161-1"
    })(["position:fixed;visibility:hidden;top:0;left:0;"]);
    class ip extends l.Component{
      componentDidMount(){
        let{
          elements:{
            text:e
          },
          calcTargetWidth:t,
          onResize:n
        }=this,
        i=document.createElement("canvas");
        this.canvasContext=i.getContext("2d"),
        t(()=>{
          e&&e.parentNode&&e.parentNode.contains(e)&&e.parentNode.removeChild(e)
        }),
        window.addEventListener("resize",n)
      }
      componentDidUpdate(e){
        this.props.children!==e.children&&this.forceUpdate(),
        this.props.width!==e.width&&this.calcTargetWidth()
      }
      componentWillUnmount(){
        let{
          elements:{
            ellipsis:e
          },
          onResize:t,
          timeout:n
        }=this;
        e&&e.parentNode&&e.parentNode.contains(e)&&e.parentNode.removeChild(e),
        window.removeEventListener("resize",t),
        window.cancelAnimationFrame(n)
      }
      render(){
        let e;
        let{
          elements:{
            target:t
          },
          props:{
            children:n,
            ellipsis:i,
            lines:s,
            ...l
          },
          state:{
            targetWidth:o
          },
          getLines:r,
          onTruncate:c
        }=this;
        return t&&o&&(s>0?e=r():(e=n,c(!1))),
        delete l.onTruncate,
        delete l.trimWhitespace,
        (0,a.jsxs)("span",{
          ...l,
          ref:e=>{
            this.elements.target=e
          },
          children:[(0,a.jsx)(ic,{
            children:e
          }),(0,a.jsx)("span",{
            ref:e=>{
              this.elements.text=e
            },
            children:n
          }),(0,a.jsx)(id,{
            ref:e=>{
              this.elements.ellipsis=e
            },
            children:i
          })]
        })
      }
      constructor(...e){
        super(...e),
        this.state={},
        this.extractReplaceLinksKeys=e=>{
          var t=this,
          n=0;
          return this.replacedLinks=[],
          e.replace(/(<a[\s]+([^>]+)>((?:.(?!\<\/a\>))*.)<\/a>)/g,function(){
            let i=Array.prototype.slice.call(arguments,1,4);
            i.key="["+"@".repeat(i[2].length-1)+"="+n+++"]",
            t.replacedLinks.push(i),
            e=e.replace(i[0],i.key)
          }),
          e
        },
        this.restoreReplacedLinks=e=>(this.replacedLinks.forEach(t=>{
          e=e.replace(t.key,t[0])
        }),this.createMarkup(e)),
        this.innerText=e=>{
          let t=document.createElement("div"),
          n="innerText"in window.HTMLElement.prototype?"innerText":"textContent",
          i=e.innerHTML.replace(/\r\n|\r|\n/g," ");
          t.innerHTML=this.extractReplaceLinksKeys(i);
          let s=t[n],
          a=document.createElement("div");
          return a.innerHTML="foo<br/>bar",
          "foo\nbar"!==a[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),s=t[n]),
          s
        },
        this.onResize=()=>{
          this.calcTargetWidth()
        },
        this.onTruncate=e=>{
          let{
            onTruncate:t
          }=this.props;
          "function"==typeof t&&(this.timeout=window.requestAnimationFrame(()=>{
            t(e)
          }))
        },
        this.calcTargetWidth=e=>{
          let{
            elements:{
              target:t
            },
            calcTargetWidth:n,
            canvasContext:i,
            props:{
              width:s
            }
          }=this;
          if(!t)return;
          let a=s||Math.floor(t.parentNode.getBoundingClientRect().width);
          if(!a)return window.requestAnimationFrame(()=>n(e));
          let l=window.getComputedStyle(t),
          o=[l["font-weight"],l["font-style"],l["font-size"],l["font-family"]].join(" ");
          i.font=o,
          this.setState({
            targetWidth:a
          },e)
        },
        this.measureWidth=e=>this.canvasContext.measureText(e).width,
        this.ellipsisWidth=e=>e.offsetWidth,
        this.trimRight=e=>e.replace(/\s+$/,""),
        this.createMarkup=e=>(0,a.jsx)("span",{
          dangerouslySetInnerHTML:{
            __html:e
          }
        }),
        this.getLines=()=>{
          let{
            elements:e,
            props:{
              lines:t,
              ellipsis:n,
              trimWhitespace:i
            },
            state:{
              targetWidth:s
            },
            innerText:l,
            measureWidth:o,
            onTruncate:r,
            trimRight:c,
            renderLine:d,
            restoreReplacedLinks:p
          }=this,
          u=[],
          h=l(e.text).split("\n").map(e=>e.split(" ")),
          m=!0,
          v=this.ellipsisWidth(this.elements.ellipsis);
          for(let e=1;e<=t;e++){
            let l=h[0];
            if(0===l.length){
              u.push(),
              h.shift(),
              e--;
              continue
            }
            let r=l.join(" ");
            if(o(r)<=s&&1===h.length){
              m=!1,
              r=p(r),
              u.push(r);
              break
            }
            if(e===t){
              let e=l.join(" "),
              t=0,
              d=e.length-1;
              for(;t<=d;){
                let n=Math.floor((t+d)/2);
                o(e.slice(0,n+1))+v<=s?t=n+1:d=n-1
              }
              let h=e.slice(0,t);
              if(i)for(h=c(h);!h.length&&u.length;)h=c(u.pop());
              "]["===h.substr(h.length-2)&&(h=h.substring(0,h.length-1)),
              h=p(h=h.replace(/\[@+$/,"")),
              r=(0,a.jsxs)("span",{
                children:[h,n]
              })
            }
            else{
              let n=0,
              i=l.length-1;
              for(;n<=i;){
                let e=Math.floor((n+i)/2);
                o(l.slice(0,e+1).join(" "))<=s?n=e+1:i=e-1
              }
              if(0===n){
                e=t-1;
                continue
              }
              r=p(r=l.slice(0,n).join(" ")),
              h[0].splice(0,n)
            }
            u.push(r)
          }
          return r(m),
          u.map(d)
        },
        this.renderLine=(e,t,n)=>{
          if(t===n.length-1)return(0,a.jsx)("span",{
            children:e
          },t);
          {
            let n=(0,a.jsx)("br",{},t+"br");
            return e?[(0,a.jsx)("span",{
              children:e
            },t),n]:n
          }
        },
        this.elements={},
        this.replacedLinks=[]
      }
    }
    ip.propTypes={
      children:ir().node,
      ellipsis:ir().node,
      lines:ir().oneOfType([ir().oneOf([!1]),ir().number]),
      trimWhitespace:ir().bool,
      width:ir().number,
      onTruncate:ir().func
    },
    ip.defaultProps={
      children:"",
      ellipsis:"…",
      lines:1,
      trimWhitespace:!1,
      width:0
    };
    class iu extends l.Component{
      componentDidMount(){
        this._isMounted=!0,
        this._isMounted&&this.setState({
          expanded:this.props.expanded
        })
      }
      componentWillUnmount(){
        this._isMounted=!1
      }
      render(){
        let{
          children:e,
          more:t,
          less:n,
          lines:i,
          anchorClass:s,
          className:l,
          width:o,
          keepNewLines:r,
          truncatedEndingComponent:c
        }=this.props,
        {
          expanded:d,
          truncated:p
        }=this.state;
        return(0,a.jsxs)("div",{
          className:l,
          children:[(0,a.jsx)(ip,{
            width:o,
            lines:!d&&i,
            ellipsis:(0,a.jsxs)("span",{
              children:[c,(0,a.jsx)("a",{
                href:"",
                className:s,
                onClick:this.toggleLines,
                children:t
              })]
            }),
            onTruncate:this.handleTruncate,
            ref:e=>this.truncateRef=e,
            children:r?e.split("\n").map((e,t,n)=>(e=(0,a.jsx)("span",{
              children:e
            },t),t===n.length-1)?e:[e,(0,a.jsx)("br",{},t+"br")]):e
          }),!p&&d&&(0,a.jsxs)("span",{
            children:[" ",(0,a.jsx)("a",{
              href:"",
              className:s,
              onClick:this.toggleLines,
              children:n
            })]
          })]
        })
      }
      constructor(e){
        super(e),
        this._isMounted=!1,
        this.handleTruncate=e=>{
          this._isMounted&&e!==this.state.truncated&&(this.setState({
            truncated:e
          }),e&&this.truncateRef.onResize())
        },
        this.toggleLines=e=>{
          e.preventDefault();
          var t=this;
          this._isMounted&&this.setState({
            expanded:!this.state.expanded
          },()=>{
            t.props.onClick&&t.props.onClick(t.state.expanded)
          })
        },
        this.state={
          expanded:!1,
          truncated:!1
        }
      }
    }
    iu.defaultProps={
      lines:1,
      more:"Show",
      less:"Hide",
      anchorClass:"",
      onClick:void 0,
      expanded:!1,
      width:0,
      keepNewLines:!1,
      truncatedEndingComponent:"... "
    },
    iu.propTypes={
      children:io.PropTypes.node,
      lines:io.PropTypes.number,
      more:io.PropTypes.node,
      less:io.PropTypes.node,
      anchorClass:io.PropTypes.string,
      className:io.PropTypes.string,
      onClick:io.PropTypes.func,
      expanded:io.PropTypes.bool,
      width:io.PropTypes.number,
      keepNewLines:io.PropTypes.bool,
      truncatedEndingComponent:io.PropTypes.node
    };
    var ih=n(78720),
    im=n(79870),
    iv=n(83423);
    let ig=C.default.div.withConfig({
      componentId:"sc-e5124eca-0"
    })(["background:#ffffff;padding:10px;padding-top:0;overflow-y:auto;height:calc(100vh - 212px);&::-webkit-scrollbar{width:5px;height:5px;}&::-webkit-scrollbar-track{border-radius:6px;}&::-webkit-scrollbar-thumb{background-color:#babec5;border-radius:6px;transition:background-color 1s;&:hover{background-color:#747c8b;}}.log-wrapper{height:",";}.log-wrapper:only-of-type{height:"," !important;}.log-wrapper:nth-of-type(1){height:"," !important;}.log-wrapper:nth-of-type(2){height:"," !important;}.log-wrapper:nth-of-type(2){height:"," !important;}.log-wrapper .log-content-wrapper{min-height:",";max-height:",";height:",";}"],e=>{
      let{
        size:t
      }=e;
      return t<4?"calc((100% / ".concat(t,") - 10px)"):"auto"
    },e=>{
      let{
        firstChildSize:t
      }=e;
      return 0!==t.length&&t.length<23?"calc((32px * ".concat(t,"))"):"auto"
    },e=>{
      let{
        firstChildSize:t,
        size:n
      }=e;
      return n<4&&t>1&&t<11?"calc((32px * ".concat(t,") + 40px)"):""
    },e=>{
      let{
        secondChildSize:t,
        size:n
      }=e;
      return n<4&&t>1&&t<11?"calc((32px * ".concat(t,") + 40px)"):""
    },e=>{
      let{
        secondChildSize:t,
        size:n,
        firstChildSize:i
      }=e;
      return 2===n&&0!==i&&i<11&&0!==t?"calc(32px * ".concat(10+i,")"):""
    },e=>{
      let{
        size:t,
        firstChildSize:n,
        secondChildSize:i
      }=e;
      return t<4&&(1===n||1===i)?"32px":t<4?"calc(100% - 40px)":"200px"
    },e=>{
      let{
        size:t,
        firstChildSize:n,
        secondChildSize:i
      }=e;
      return t<4&&(1===n||1===i)?"none":t<4?"calc(100% - 40px)":"200px"
    },e=>{
      let{
        size:t,
        firstChildSize:n,
        secondChildSize:i
      }=e;
      return t<4&&(1===n||1===i)?"auto":t<4?"":"200px"
    }),
    ix=C.default.div.withConfig({
      componentId:"sc-e5124eca-1"
    })(["margin:0px 0px 10px 0px;border-left:1px solid #f0f0ff;border-right:1px solid #f0f0ff;border-bottom:1px solid #f0f0ff;border-top:",";&:last-of-type{margin-bottom:0px;}"],e=>{
      let{
        color:t
      }=e;
      return"2px solid ".concat(t)
    }),
    ib=C.default.div.withConfig({
      componentId:"sc-e5124eca-2"
    })(["font-size:0.8rem;font-weight:500;margin:10px;color:#49576E;width:95%;text-overflow:ellipsis;overflow:hidden;"]),
    iw=C.default.span.withConfig({
      componentId:"sc-e5124eca-3"
    })(["display:inlineBlock;margin-right:5px;cursor:pointer;"]),
    ij=C.default.div.withConfig({
      componentId:"sc-e5124eca-4"
    })(["display:flex;justify-content:center;align-items:center;height:100%;color:#6f7a8e;flex-direction:column;"]);
    C.default.div.withConfig({
      componentId:"sc-e5124eca-5"
    })(["padding:10px;"]);
    let iy=C.default.div.withConfig({
      componentId:"sc-e5124eca-6"
    })(["overflow-y:auto;overflow-x:hidden;&::-webkit-scrollbar{width:5px;}&::-webkit-scrollbar-track{border-radius:6px;}&::-webkit-scrollbar-thumb{background-color:#babec5;border-radius:6px;transition:background-color 1s;&:hover{background-color:#747c8b;}}"]),
    ik=C.default.ul.withConfig({
      componentId:"sc-e5124eca-7"
    })(["position:relative;"]),
    iC=C.default.li.withConfig({
      componentId:"sc-e5124eca-8"
    })(["display:flex;margin:0px 8px;padding-right:8px;top:0;left:0;position:inherit;width:","px;font-size:12px;font-weight:500;margin-bottom:-20px;color:rgba(73,87,110,0.6);scroll-behavior:smooth;"],e=>{
      let{
        width:t
      }=e;
      return"".concat(t)
    }),
    iS=C.default.span.withConfig({
      componentId:"sc-e5124eca-9"
    })(["margin:0 4px;cursor:pointer;"]),
    iN=(0,C.default)(iS).withConfig({
      componentId:"sc-e5124eca-10"
    })(["width:20px;svg{width:14px;height:14px;margin-top:2px;}"]),
    iI=C.default.div.withConfig({
      componentId:"sc-e5124eca-11"
    })(["width:100%;margin:0 10px 0 4px;"]),
    i_=C.default.div.withConfig({
      componentId:"sc-e5124eca-12"
    })(["text-align:center;font-style:italic;color:#6f7a8e;padding:4px 10px;display:flex;justify-content:center;align-items:center;height:90%;"]),
    iT=C.default.div.withConfig({
      componentId:"sc-e5124eca-13"
    })(["height:42px;margin:10px 20px 0 0;position:relative;background:#ffffff;"]),
    iL=(0,C.default)(im.default).withConfig({
      componentId:"sc-e5124eca-14"
    })(["width:45%;display:inline-block;font-size:12px;border-radius:4px;border:solid 1px #c9d1e8;color:#253858;position:absolute;top:0;left:0;margin:0 0 0 10px;&:hover,&:focus{border:1px solid #5D97FF !important;}:not(.ant-select-customize-input) .ant-select-selector{border:none;}.ant-select-selection-item{padding-inline-start:0 !important;}.ant-select-selection-item-content svg{display:none;}"]),
    iM=(0,C.default)(iv.default).withConfig({
      componentId:"sc-e5124eca-15"
    })(["width:45%;display:inline-block;font-size:12px;border:solid 1px #c9d1e8;border-radius:4px;color:#253858;position:absolute;top:0;right:0;height:32px;"]),
    iZ=C.default.p.withConfig({
      componentId:"sc-e5124eca-16"
    })(["text-align:center;font-weight:500;padding:10px 10px 0 10px;"]),
    iF=(0,C.default)(iZ).withConfig({
      componentId:"sc-e5124eca-17"
    })(["font-weight:400;.ant-btn-link{color:#337aff;border:0;padding:0;font-size:13px;&:hover,&:focus{border:none;}}"]),
    iE=C.default.img.withConfig({
      componentId:"sc-e5124eca-18"
    })(["height:205px;width:280px;margin-bottom:20px;"]),
    iD={
      i:(0,a.jsx)(h.sz,{}),
      d:(0,a.jsx)(h.IP,{}),
      e:(0,a.jsx)(h.Pz,{}),
      w:(0,a.jsx)(h.aN,{}),
      v:(0,a.jsx)(h.Sj,{}),
      f:(0,a.jsx)(h.Q4,{}),
      u:(0,a.jsx)(h.Oq,{})
    };
    var iR=e=>{
      var t;
      let{
        logs:n,
        handleRewind:i,
        size:s
      }=e,
      o=(0,l.useRef)(),
      r=(0,ih.o)({
        size:null==n?void 0:n.length,
        parentRef:o,
        estimateSize:(0,l.useCallback)(()=>28,[]),
        overscan:30
      });
      return(0,a.jsx)(a.Fragment,{
        children:(null==n?void 0:n.length)>0?(0,a.jsx)(iy,{
          ref:o,
          className:"log-content-wrapper",
          style:{
            height:"".concat(s<4&&(null==n?void 0:n.length)>1&&(null==n?void 0:n.length)<7?"calc((32px * ".concat(n.length,"))"):"auto")
          },
          children:(0,a.jsx)(ik,{
            className:"log-container",
            children:null===(t=r.virtualItems)||void 0===t?void 0:t.map(e=>{
              var t,
              s,
              l,
              r,
              c;
              return(0,a.jsxs)(iC,{
                width:null==o?void 0:null===(t=o.current)||void 0===t?void 0:t.getBoundingClientRect().width,
                style:{
                  transform:"translateY(".concat(e.start,"px)"),
                  transition:"transform 0.5s ease-in-out"
                },
                children:[(0,a.jsx)(iS,{
                  onClick:t=>{
                    var s;
                    return i(t,null===(s=n[e.index])||void 0===s?void 0:s.timeLine)
                  },
                  children:(0,H.Ko)(null===(s=n[e.index])||void 0===s?void 0:s.timeLine)
                }),(0,a.jsx)(iN,{
                  children:iD[null===(l=n[e.index])||void 0===l?void 0:l.level]
                }),(0,a.jsx)(iI,{
                  children:(0,a.jsx)(iu,{
                    width:(null==o?void 0:null===(r=o.current)||void 0===r?void 0:r.getBoundingClientRect().width)-100,
                    children:null===(c=n[e.index])||void 0===c?void 0:c.message
                  })
                })]
              },e.index)
            })
          })
        }):(0,a.jsx)(i_,{
          children:" No logs found for this screen. "
        })
      })
    };
    let{
      Option:iA
    }=im.default,
    iP={
      d:"Debug",
      e:"Error",
      f:"Fault",
      i:"Info",
      u:"Undefined",
      v:"Verbose",
      w:"Warning"
    },
    iz=[{
      value:"d",
      display:"Debug"
    },{
      value:"e",
      display:"Error"
    },{
      value:"f",
      display:"Fault"
    },{
      value:"i",
      display:"Info"
    },{
      value:"u",
      display:"Undefined"
    },{
      value:"v",
      display:"Verbose"
    },{
      value:"w",
      display:"Warning"
    }];
    var iV=e=>{
      var t;
      let{
        platform:n,
        handleLogFilter:i,
        defaultFilter:s,
        handleChange:o
      }=e,
      r=(0,l.useRef)(),
      c=(0,l.useCallback)(()=>r.current,[r]),
      d=s.map(e=>iP[e]);
      return(0,a.jsxs)(iT,{
        ref:r,
        children:[1===n?(0,a.jsx)(iL,{
          clearIcon:!0,
          showSearch:!1,
          mode:"multiple",
          value:s,
          placeholder:"Select to filter logs",
          maxTagCount:(null===(t=d.join(""))||void 0===t?void 0:t.length)>11?1:2,
          maxTagTextLength:5,
          onChange:i,
          getPopupContainer:c,
          children:iz&&iz.map(e=>(0,a.jsxs)(iA,{
            value:e.value,
            children:[" ",iD[e.value],e.display]
          }))
        }):null,(0,a.jsx)(iM,{
          placeholder:"Type to filter logs ...",
          onChange:e=>o(e.target.value)
        })]
      })
    },
    iO=e=>{
      let{
        platform:t
      }=e;
      return(0,a.jsxs)(a.Fragment,{
        children:[(0,a.jsxs)(iZ,{
          children:["To record console logs, please update your SDK version to"," ",1===t?"3.4.0":"3.4.1"," or check if the end user has updated the SDKs on their device"]
        }),(0,a.jsxs)(iF,{
          children:["Your app’s console logs are a powerful resource to help you debug and understand the inner workings of your productions apps."," ",(0,a.jsx)("a",{
            href:"https://help.uxcam.com/en/articles/10222573-app-logs",
            rel:"noopener noreferrer",
            target:"_blank",
            children:"Learn more"
          })]
        })]
      })
    },
    iU=()=>{
      let{
        currentOrgReducer:{
          orgId:e
        },
        urlReducer:{
          appId:t
        }
      }=(0,c.v9)(e=>e);
      return(0,a.jsxs)(a.Fragment,{
        children:[(0,a.jsxs)(iZ,{
          children:["Console logs are not enabled. You can turn-on this feature in your",(0,a.jsx)(to(),{
            href:{
              pathname:"/integration",
              query:{
                setting:"app_setting",
                org:e,
                app:t,
                app_tab:"video_recording_setting",
                parentType:"settings"
              }
            },
            as:"/settings/app/".concat(e,"/").concat(t,"/video_recording_setting"),
            legacyBehavior:!0,
            children:(0,a.jsx)("a",{
              href:"!#",
              children:" app recording settings. "
            })
          })]
        }),(0,a.jsxs)(iF,{
          children:["Your app’s console logs are a powerful resource to help you debug and understand the inner workings of your productions apps."," ",(0,a.jsx)("a",{
            href:"https://help.uxcam.com/en/articles/10222573-app-logs",
            rel:"noopener noreferrer",
            target:"_blank",
            children:"Learn more"
          })]
        })]
      })
    },
    iB=()=>(0,a.jsxs)(a.Fragment,{
      children:[(0,a.jsx)(iZ,{
        children:"App logs were not recorded for the selected session. Please check if your SDKs are updated to latest version and if the app recording option is enabled in settings."
      }),(0,a.jsxs)(iF,{
        children:["Please ",(0,a.jsx)(eF.Z,{
          type:"link",
          onClick:()=>(0,t7.aL)(),
          children:"contact us"
        })," for further support."]
      })]
    }),
    iW=e=>{
      let{
        isAppLogValid:t,
        isAppLogRecorded:n,
        platform:i
      }=e;
      return(0,a.jsxs)(ij,{
        children:[(0,a.jsx)(iE,{
          src:"/static/loginfo.svg",
          alt:"no log info"
        }),(0,a.jsx)(eZ.tu,{}),t?n?(0,a.jsx)(iU,{}):(0,a.jsx)(iB,{}):(0,a.jsx)(iO,{
          platform:i
        })]
      })
    };
    let iH={
      d:"Debug",
      e:"Error",
      f:"Fault",
      i:"Info",
      u:"Undefined",
      v:"Verbose",
      w:"Warning"
    };
    var iG=()=>{
      var e,
      t,
      n,
      i,
      s;
      let o=(0,c.I0)(),
      {
        sessionDetail:d,
        sessionLogs:p,
        rewind:u
      }=(0,G.Lc)(),
      {
        selectedTab:h
      }=(0,G.he)(),
      {
        urlReducer:{
          sessionid:m,
          shareSessionKey:v,
          appId:g
        }
      }=(0,c.v9)(e=>e),
      {
        device:{
          platform:f
        }
      }=d||{},
      x=null==d?void 0:null===(e=d.screenTimeline)||void 0===e?void 0:e.activities,
      [b,w]=(0,l.useState)([]),
      [j,y]=(0,l.useState)([]),
      [k,C]=(0,l.useState)(""),
      [_]=(0,is.c)(H.aC),
      T=(0,l.useCallback)(async()=>{
        w(await _(x,p))
      },[x,p,_]),
      M=(0,l.useMemo)(()=>({
        appid:g,
        sessionid:m
      }),[g,m]),
      {
        isLoading:Z,
        isRefetching:F
      }=(0,I.LF)(M),
      E=(0,l.useMemo)(()=>b.map(e=>{
        let t={
          ...e
        },
        n=new RegExp(null==k?void 0:k.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
        return(null==k?void 0:k.length)&&(t.logs=null==e?void 0:e.logs.filter(e=>{
          var t;
          return(null==k?void 0:k.length)&&n.test(null===(t=e.message)||void 0===t?void 0:t.toLowerCase())
        })),
        j.length&&(t.logs=null==t?void 0:t.logs.filter(e=>(null==j?void 0:j.length)&&(null==j?void 0:j.includes(e.level)))),
        t
      }),[j,b,k]),
      D=(0,l.useMemo)(()=>E.reduce((e,t)=>{
        var n;
        return e+(null==t?void 0:null===(n=t.logs)||void 0===n?void 0:n.length)
      },0),[j,k]);
      (0,l.useEffect)(()=>{
        x&&p&&T()
      },[x,p,T]),
      (0,l.useEffect)(()=>{
        if((null==j?void 0:j.length)<1&&""===k)return;
        let e=j.map(e=>iH[e]);
        o((0,S.CW)(null,{
          eventName:"filter_log",
          track_type:"event",
          eventProperty:{
            sessionId:m,
            filterDetails:{
              logFilter:e,
              searchText:k
            },
            filteredLogCount:D
          }
        })),
        o((0,N.hI)({
          action:"Filter Log",
          info:{
            sessionId:m,
            filterDetails:{
              logFilter:e,
              searchText:k
            },
            filteredLogCount:D
          }
        }))
      },[D]),
      (0,l.useEffect)(()=>{
        y([])
      },[h,m]);
      let R=(e,t)=>{
        e.preventDefault(),
        e.stopPropagation(),
        u(t)
      },
      A=(0,l.useCallback)(il()(e=>{
        C((null==e?void 0:e.length)>=3?e:"")
      },500),[]);
      return(0,a.jsxs)(a.Fragment,{
        children:[(null==b?void 0:b.length)>0&&!(Z||F)&&(0,a.jsx)(iV,{
          platform:f,
          handleLogFilter:e=>{
            y(e)
          },
          defaultFilter:j,
          handleChange:A
        }),(0,a.jsx)(ig,{
          className:"appLogWrapper",
          size:(null==b?void 0:b.length)||0,
          firstChildSize:(null===(n=b[0])||void 0===n?void 0:null===(t=n.logs)||void 0===t?void 0:t.length)||0,
          secondChildSize:(null===(s=b[1])||void 0===s?void 0:null===(i=s.logs)||void 0===i?void 0:i.length)||0,
          children:(0,a.jsx)(r.Z,{
            loading:!v&&(Z||F),
            active:!0,
            paragraph:{
              rows:10
            },
            children:(null==b?void 0:b.length)>0&&!F?E.map(e=>(0,a.jsxs)(ix,{
              color:(0,L.Z)((null==e?void 0:e.activityName)?null==e?void 0:e.activityName.trim():""),
              className:"log-wrapper",
              children:[(0,a.jsxs)(ib,{
                children:[(0,a.jsx)(iw,{
                  onClick:t=>R(t,null==e?void 0:e.time),
                  children:(0,a.jsx)("strong",{
                    children:(0,H.Ko)(null==e?void 0:e.time)
                  })
                }),(0,a.jsx)("span",{
                  children:null==e?void 0:e.activityName
                })]
              }),(0,a.jsx)(iR,{
                logs:null==e?void 0:e.logs,
                handleRewind:R,
                size:null==b?void 0:b.length
              })]
            },"".concat(null==e?void 0:e.activityName,"-").concat(null==e?void 0:e.time))):(0,a.jsx)(iW,{
              platform:f,
              isAppLogValid:!0,
              isAppLogRecorded:!1
            })
          })
        })]
      })
    };
    let{
      TabPane:iK
    }=o.default,
    iq=new Map,
    iY=C.default.div.withConfig({
      componentId:"sc-5d2641a2-0"
    })(["display:flex;align-items:center;gap:6px;",""],e=>{
      let{
        isAISession:t
      }=e;
      return!t&&(0,C.css)(["svg path{filter:grayscale(1) invert(0);transform:rotateZ(180deg);opacity:0.8;}"])
    }),
    iQ=C.default.div.withConfig({
      componentId:"sc-5d2641a2-1"
    })(["padding:16px 12px;height:100%;"]),
    iX=(0,C.createGlobalStyle)(['.session-detail-tabs{.ant-tabs-nav-wrap{&::before,&::after{opacity:0 !important;}}.ant-tabs-nav{padding-left:0 !important;.ant-tabs-nav-list{.ant-tabs-tab{margin-right:0 !important;min-width:105px;[aria-selected="true"]{.insights-tab-header{color:#EE5FDD;}}}.ant-tabs-ink-bar{height:2px !important;',"}}}.ant-tabs-nav-more{transition:background 0.1s ease-in-out;&.ant-tabs-dropdown-open{background-color:#DFEAFF !important;}}}.session-detail-tabs-popup{.ant-tabs-dropdown-menu{border-radius:8px;border:1px solid #E8E8EB;box-shadow:none;padding:10px;li{padding:6px 8px;border-radius:4px;}}}"],e=>{
      let{
        aiInsightsTabIsSelected:t
      }=e;
      return t&&(0,C.css)(["background:linear-gradient(233.37deg,#EE5EDD 48.25%,#49C5FF 81.95%);"])
    }),
    i$=C.default.div.withConfig({
      componentId:"sc-5d2641a2-2"
    })(["display:flex;flex-direction:column;height:100%;overflow:hidden;"]);
    var iJ=(0,l.memo)(e=>{
      var t,
      n,
      i,
      s,
      v,
      f,
      b;
      let{
        multiScreenSkippedData:j,
        uploadedOn:C,
        detailErrorMessage:_
      }=e,
      {
        isPlaying:T
      }=(0,G.W4)(),
      {
        videoElemRef:L
      }=(0,G.rS)(),
      {
        setSelectedTab:M,
        selectedTab:Z
      }=(0,G.he)(),
      [F,V]=(0,l.useState)(iq),
      [O,B]=(0,l.useState)(!1),
      {
        sessionDetail:W,
        rewind:K,
        currentScreen:q,
        currentTimeRef:Y,
        nearestSession:Q,
        sessionLogs:X,
        isWebSession:$
      }=(0,G.Lc)(),
      {
        getScreenLayoutData:J
      }=(0,G.Rb)(),
      {
        previousSessionId:ee,
        nextSessionId:et
      }=Q||{},
      en=(0,c.I0)(),
      {
        aiSessionFeatureAllowed:ei
      }=(0,p.I)()||{},
      {
        isAppLogEnabled:es,
        device:ea,
        _id:el
      }=W||{},
      eo=null==ea?void 0:ea.platform,
      er=(0,l.useMemo)(()=>{
        if(ea){
          var e;
          let t=1===eo?555:20220413;
          return(null!==(e=null==ea?void 0:ea.sdkVersionNumber)&&void 0!==e?e:0)>=t
        }
        return null
      },[ea,eo]),
      ec=er&&es,
      {
        urlReducer:{
          appId:ed,
          shareSessionKey:ep,
          sessionpage:eu,
          parentType:eh,
          notetab:em,
          sessionid:ev,
          secondarysessionid:eg,
          eventpage:ef
        },
        screenTimelineReducer:{
          selectedEventField:ex,
          selectedGestureField:eb,
          selectedScreens:ew=[],
          screenList:ej
        },
        appFilter:ey
      }=(0,c.v9)(e=>e),
      ek="aiSessionsList"===eh?eg:ev,
      eC=null==ey?void 0:null===(t=ey.session)||void 0===t?void 0:t.segment,
      eS="shareSession"===eh,
      {
        data:eN
      }=(0,I.wd)(ep,ei&&eS),
      eI=(null==eN?void 0:null===(i=eN.data)||void 0===i?void 0:null===(n=i.data)||void 0===n?void 0:n.is_ai_enabled)||!1,
      e_=(0,l.useMemo)(()=>{
        var e;
        return(null==W?void 0:null===(e=W.screenTimeline)||void 0===e?void 0:e.activities)||[]
      },[W]),
      eT=(0,l.useMemo)(()=>ex.concat(eb).reduce((e,t)=>{
        let{
          name:n
        }=t;
        return e[n]=!0,
        e
      },{}),[ex,eb]),
      eL=(0,l.useMemo)(()=>null==ex?void 0:ex.filter(e=>!(null==e?void 0:e.isSmartEvent)).reduce((e,t)=>{
        let{
          name:n
        }=t;
        return e[n]=!0,
        e
      },{}),[ex]),
      eM=(0,l.useMemo)(()=>null==ex?void 0:ex.filter(e=>null==e?void 0:e.isSmartEvent).reduce((e,t)=>{
        let{
          name:n
        }=t;
        return e[n]=!0,
        e
      },{}),[ex]),
      eZ=(0,l.useMemo)(()=>eb.reduce((e,t)=>{
        let{
          name:n
        }=t;
        return e[n]=!0,
        e
      },{}),[eb]),
      eF=(0,l.useRef)(q),
      eE=(0,l.useMemo)(()=>{
        var e;
        return(null==L?void 0:null===(e=L.current)||void 0===e?void 0:e.duration)||0
      },[null==L?void 0:null===(s=L.current)||void 0===s?void 0:s.duration]),
      eD=(0,l.useMemo)(()=>{
        var e;
        return null==L?void 0:null===(e=L.current)||void 0===e?void 0:e.currentTime
      },[null==L?void 0:null===(v=L.current)||void 0===v?void 0:v.currentTime]),
      eR=(0,l.useMemo)(()=>{
        var e;
        return((null==W?void 0:null===(e=W.screenTimeline)||void 0===e?void 0:e.activities)||[]).reduce((e,t)=>{
          let{
            actions:n
          }=t;
          return e.concat(n)
        },[])
      },[null==W?void 0:null===(f=W.screenTimeline)||void 0===f?void 0:f.activities]),
      eA=(0,l.useCallback)(()=>{
        let e=Y.current;
        if(eR){
          let t=(0,H._$)(eR,e).reduce((e,t)=>(e.set(t,1),e),new Map);
          V(e=>(0,k.Dw)(t,e)?e:t)
        }
      },[eR,Y]);
      (0,l.useEffect)(()=>{
        eF.current=q
      },[q]),
      (0,l.useEffect)(()=>{
        let e,
        t=null,
        n=()=>{
          let i=new Date;
          (!e||i-e>16)&&(e=i,eA()),
          t=requestAnimationFrame(n)
        };
        return T&&(t=requestAnimationFrame(n)),
        ()=>{
          cancelAnimationFrame(t)
        }
      },[T,eA]);
      let eP=(0,l.useCallback)(e=>{
        K(e)
      },[K]),
      ez=(0,l.useCallback)(()=>{
        setTimeout(eA,10)
      },[L,eA]);
      (0,l.useEffect)(()=>{
        let e=L.current;
        if(e)return e.addEventListener("seeked",ez),
        ()=>{
          e.removeEventListener("seeked",ez)
        }
      },[L,ez]);
      let eV=(0,l.useMemo)(()=>{
        var e;
        let t=null==W?void 0:null===(e=W.screenTimeline)||void 0===e?void 0:e.activities;
        return t&&t.map(e=>{
          let t={
            ...e
          };
          return{
            ...e,
            actions:t.actions.filter(e=>{
              let{
                name:t
              }=e;
              return eT[t]
            })
          }
        })
      },[null==W?void 0:null===(b=W.screenTimeline)||void 0===b?void 0:b.activities,eT]);
      (0,l.useEffect)(()=>{
        en((0,d.SX)(eV))
      },[eV]);
      let eO=(0,l.useMemo)(()=>es?X.length<1?"App logs are not recorded due to old sdk versions":null:"App logs has been disabled in the app settings page",[es,X]);
      (0,l.useEffect)(()=>{
        "logs"===Z&&(en((0,S.CW)(null,{
          eventName:"visit_log",
          track_type:"event",
          eventProperty:{
            sessionId:ek,
            appLogAvailable:es||!1,
            ...eO&&{
              description:eO
            }
          }
        })),en((0,N.hI)({
          action:"Visit Log",
          info:{
            sessionId:ek,
            appLogAvailable:es||!1
          }
        })))
      },[Z]);
      let eU=(0,l.useCallback)(e=>{
        M(e),
        en((0,N.hI)({
          action:"Click on ".concat(y()(e)," tab session detail page")
        })),
        "aiInsights"===e&&en((0,S.CW)(null,{
          eventName:"wa_sessions_click_insights",
          track_type:"event",
          eventProperty:{
            source:"insights_tab"
          }
        }))
      },[en,M]),
      eB=(0,l.useCallback)(e=>{
        let t="",
        n="";
        return"sessionsList"===eh&&(t=(0,m.$)("/app/".concat(ed,"/sessions/list/").concat(eu||1,"/").concat(e,"?"),eC),n="appId=".concat(ed,"&parentType=sessionsList&sessionid=").concat(e,"&sessionpage=").concat(eu||1)),
        "aiSessionsList"===eh&&(t=(0,m.$)("/app/".concat(ed,"/sessions/list/").concat(eu||1,"/").concat(e,"?"),eC),n="appId=".concat(ed,"&parentType=aiSessionsList&sessionid=").concat(e,"&sessionpage=").concat(eu||1)),
        "eventsList"===eh&&(t=(0,m.$)("/app/".concat(ed,"/events/list/").concat(ef||1,"/").concat(e?"/".concat(e):"","?"),eC),n="appId=".concat(ed,"&parentType=eventsList").concat(e?"&sessionid=".concat(e):"","&eventpage=").concat(ef||1,"&starttime=0")),
        {
          url:t,
          query:n
        }
      },[ed,eh,eC,eu,ef]),
      eW=e=>{
        let{
          url:t,
          query:n
        }=eB(e);
        g().push("/integration?".concat(n),t)
      },
      eH=e=>{
        var t;
        en((0,S.CW)(null,{
          eventName:e,
          track_type:"event",
          eventProperty:{
            userId:null==W?void 0:null===(t=W.userProperty)||void 0===t?void 0:t.uxcamuserid
          }
        }))
      },
      eG=(0,l.useCallback)(()=>{
        eH("previous_user_session"),
        eW(ee),
        en((0,N.hI)({
          action:"Previous session session detail page"
        }))
      },[ee]),
      eK=(0,l.useCallback)(()=>{
        eH("next_user_session"),
        eW(et),
        en((0,N.hI)({
          action:"Next session session detail page"
        }))
      },[et]),
      eq=x()(e_);
      (0,l.useEffect)(()=>{
        em&&M("notes")
      },[em]);
      let eY=(0,l.useMemo)(()=>{
        var e;
        return(null===(e=j.seqArrayIndexList)||void 0===e?void 0:e.length)&&ew.length?j.screenTimeLineDataCloned.map((e,t)=>{
          let n=e.endTime-e.time;
          return w()(e)?(0,a.jsx)(tg,{
            screenList:e,
            onRewind:eP,
            sessionDetail:W,
            currentGestures:F,
            selectedFields:eT,
            selectedEventFields:eL,
            selectedSmartEventFields:eM,
            selectedGestureFields:eZ,
            currentScreen:q,
            screenDropdownToggler:B,
            uploadedOn:C
          },t):(0,a.jsx)(tf,{
            eventIndex:t,
            screen:e,
            active:ew.includes(e.activityName)&&q===e,
            onRewind:eP,
            sessionDetail:W,
            currentGestures:F,
            selectedFields:eT,
            selectedEventFields:eL,
            selectedSmartEventFields:eM,
            selectedGestureFields:eZ,
            engagementTime:n<60?"".concat(Math.round(n)," sec"):(0,k.zk)({
              durationInSecs:n,
              roundFalse:!1
            }),
            isSkippedScreenActivity:!ew.includes(e.activityName)||!ej.includes(e.activityName),
            screenDropdownToggler:B,
            uploadedOn:C
          },n+t)
        }):null==eq?void 0:eq.map((e,t)=>{
          let n=e.endTime-e.time;
          return(0,a.jsx)(tf,{
            eventIndex:t,
            screen:e,
            active:ew.includes(e.activityName)&&q===e,
            onRewind:eP,
            sessionDetail:W,
            currentGestures:F,
            selectedFields:eT,
            selectedEventFields:eL,
            selectedSmartEventFields:eM,
            selectedGestureFields:eZ,
            engagementTime:n<60?"".concat(Math.round(n)," sec"):(0,k.zk)({
              durationInSecs:n,
              roundFalse:!1
            }),
            isSkippedScreenActivity:!!ej.length&&(!ew.includes(e.activityName)||!ej.includes(e.activityName)),
            screenDropdownToggler:B,
            uploadedOn:C
          },n+t)
        })
      },[j,C,ew,eq,q,eP,W,F,eT,eL,eM,eZ,ej]),
      eQ="aiSessionsList"===eh||"aiSessionsDetail"===eh,
      eX=ei&&(eQ||eS&&eI);
      return(0,a.jsxs)(E,{
        children:[eX&&(0,a.jsx)(iX,{
          aiInsightsTabIsSelected:"aiInsights"===Z
        }),(0,a.jsx)(U,{
          loading:!ep&&void 0===_&&ek!==el,
          active:!0,
          paragraph:{
            rows:25
          },
          children:(0,a.jsx)("div",{
            className:"session-sidebar video-action-timeline",
            "data-intercom-target":"Session sidebar",
            children:(0,a.jsxs)(o.default,{
              activeKey:Z||"activity",
              onChange:eU,
              className:"session-detail-tabs",
              popupClassName:"session-detail-tabs-popup",
              children:[(0,a.jsx)(iK,{
                tab:(0,a.jsx)("span",{
                  "data-intercom-target":"Tab Activity",
                  children:"Activity"
                }),
                children:(0,a.jsxs)(i$,{
                  children:[((null==W?void 0:W.sessionanalyzedbyai)||eI)&&eX&&(0,a.jsx)(tE,{
                    setSelectedTab:M
                  }),(0,a.jsx)(ie,{
                    screenDropdownToggler:B,
                    screenDropdownVisible:O,
                    uploadedOn:C
                  }),(0,a.jsxs)(A,{
                    children:[(0,a.jsxs)("div",{
                      className:"event-wrapper",
                      children:[eY,eE&&e_?(0,a.jsx)(ii,{
                        active:null===q&&eD===eE,
                        videoDuration:eE,
                        isCrashedLog:null==W?void 0:W.isCrashedLog,
                        onRewind:eP
                      }):null]
                    }),!ep&&["sessionsList","aiSessionsList","eventsList","nocodeEventsList"].includes(eh)&&!eQ?(0,a.jsx)(r.Z,{
                      loading:el!==ek,
                      active:!0,
                      paragraph:{
                        rows:1
                      },
                      children:(0,a.jsxs)(P,{
                        children:[(0,a.jsxs)(z,{
                          "data-intercom-target":"Previous Session",
                          clickable:ee,
                          onClick:()=>eG(),
                          children:[(0,a.jsx)(h.hX,{})," Previous user session"]
                        }),(0,a.jsxs)(z,{
                          "data-intercom-target":"Next Session",
                          clickable:et,
                          onClick:()=>eK(),
                          children:[" ","Next user session ",(0,a.jsx)(h.Z1,{})]
                        })]
                      })
                    }):null]
                  })]
                })
              },"activity"),(0,a.jsx)(iK,{
                tab:(0,a.jsx)("span",{
                  "data-intercom-target":"Tab Session Info",
                  children:ei&&eQ?"Info":"Session Info"
                }),
                children:(0,a.jsx)(D,{
                  className:"session-info",
                  children:(0,a.jsx)(ng,{})
                })
              },"sessionInfo"),eX&&(0,a.jsx)(iK,{
                tab:(0,a.jsxs)(iY,{
                  className:"insights-tab-header",
                  isAISession:(null==W?void 0:W.sessionanalyzedbyai)||eI,
                  children:[(0,a.jsx)(u,{}),"Insights"]
                }),
                children:(0,a.jsx)(iQ,{
                  children:(0,a.jsx)(tq,{
                    isAISession:(null==W?void 0:W.sessionanalyzedbyai)||eI
                  })
                })
              },"aiInsights"),ep?null:(0,a.jsx)(iK,{
                tab:(0,a.jsx)("span",{
                  "data-intercom-target":"Tab Notes",
                  children:"Notes"
                }),
                children:(0,a.jsx)(R,{
                  className:"note-info",
                  children:(0,a.jsx)(t2,{
                    redirectToVideo:eP
                  })
                })
              },"notes"),!ep&&["sessionsList","aiSessionsList","issues"].includes(eh)&&!$?(0,a.jsx)(iK,{
                tab:(0,a.jsx)("span",{
                  "data-intercom-target":"Tab Logs",
                  children:"Logs"
                }),
                children:ec?(0,a.jsx)(iG,{}):(0,a.jsx)(iW,{
                  platform:eo,
                  isAppLogValid:er,
                  isAppLogRecorded:!0
                })
              },"logs"):""]
            })
          })
        })]
      })
    })
  },
  61127:function(e,t,n){
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsx)("svg",{
      width:13,
      height:13,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        d:"m10.037 7.25-4.2 4.2 1.07 1.05 6-6-6-6-1.07 1.05 4.2 4.2H.907v1.5h9.13Z",
        fill:"#EE5FDD"
      })
    })
  },
  20088:function(e,t,n){
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsxs)("svg",{
      width:16,
      height:14,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("path",{
        d:"M3.267 0A2.333 2.333 0 0 0 .934 2.333v2.648c.289-.138.603-.234.933-.282V2.333a1.4 1.4 0 0 1 1.4-1.4H9.8a1.4 1.4 0 0 1 1.4 1.4v6.534a1.4 1.4 0 0 1-1.4 1.4h-.466v.933H9.8a2.333 2.333 0 0 0 2.334-2.333v-.934l2.24 1.68a.933.933 0 0 0 1.493-.746V2.333a.933.933 0 0 0-1.493-.746l-2.24 1.68v-.934A2.333 2.333 0 0 0 9.8 0H3.267Zm8.867 4.433 2.8-2.1v6.534l-2.8-2.1V4.433Z",
        fill:"#5D97FF"
      }),(0,i.jsx)("path",{
        d:"M0 7.933A2.333 2.333 0 0 1 2.333 5.6h3.734A2.333 2.333 0 0 1 8.4 7.933v3.734A2.333 2.333 0 0 1 6.067 14H2.333A2.333 2.333 0 0 1 0 11.667V7.933Zm3.752.032a.422.422 0 0 0-.417-.034.476.476 0 0 0-.28.434v2.87a.468.468 0 0 0 .282.436.42.42 0 0 0 .422-.04l2.143-1.463a.439.439 0 0 0 .153-.173.5.5 0 0 0-.003-.454.455.455 0 0 0-.157-.17L3.752 7.965Z",
        fill:"#5D97FF"
      })]
    })
  }
}]);