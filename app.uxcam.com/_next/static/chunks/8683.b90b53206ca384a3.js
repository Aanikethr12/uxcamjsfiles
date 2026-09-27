"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8683],{
  48683:function(e,a,s){
    s.r(a),
    s.d(a,{
      default:function(){
        return C
      }
    });
    var t=s(85893),
    i=s(67294),
    l=s(35161),
    r=s.n(l),
    n=s(59854),
    c=s.n(n),
    h=s(94184),
    d=s.n(h),
    o=s(20510),
    v=s(48203),
    g=s(80631),
    u=s(14416),
    x=s(30381),
    p=s.n(x),
    w=s(43399),
    m=s(92046),
    f=s(14811),
    j=s(23357),
    z=()=>{
      let{
        urlReducer:{
          appId:e,
          screenname:a
        },
        appFilter:{
          dateSegment:s,
          heatmap:{
            segment:l
          }
        }
      }=(0,u.v9)(e=>{
        let{
          urlReducer:a,
          appFilter:s
        }=e;
        return{
          urlReducer:a,
          appFilter:s
        }
      }),
      r=(0,i.useMemo)(()=>({
        appid:e,
        screen_name:a,
        mega_filters:(0,f.q)(l)||[],
        date_range:s
      }),[e,a,l,s]),
      n=(0,i.useMemo)(()=>({
        appid:e,
        screen_name:a,
        mega_filters:(0,f.q)(l)||[],
        date_range:{
          ...s,
          value:{
            lower:p().unix((Math.round(new Date(s.value.lower).getTime())-p()(s.value.upper).diff(s.value.lower))/1e3),
            upper:p()(s.value.lower).utc().format()
          }
        }
      }),[e,a,l,s]),
      {
        data:c
      }=(0,w.mr)(r,"heatmap-screen-stats"),
      {
        data:h
      }=(0,w.mr)(n,"heatmap-screen-stats-prev"),
      d=(0,i.useCallback)(e=>["loading...","-"].indexOf(e)>-1,[]),
      o=(0,i.useCallback)((e,a)=>(0,t.jsxs)(t.Fragment,{
        children:[(0,t.jsx)("b",{
          children:e
        }),a]
      }),[]);
      return(0,i.useMemo)(()=>{
        let{
          avgTimeOnScreen:e="-",
          userCount:a="-",
          count:s="-",
          uiFreezeRate:t="-",
          rageTapRate:i="-",
          exitRate:l="-",
          avgGestureCount:r="-",
          crashPercentage:n="-",
          this_period_date_string:v
        }=(null==c?void 0:c.data)||{},
        {
          avgTimeOnScreen:g,
          userCount:u,
          count:x,
          uiFreezeRate:p,
          rageTapRate:w,
          exitRate:f,
          avgGestureCount:z,
          crashPercentage:M
        }=(null==h?void 0:h.data)||{},
        A=e=>d(e)?e:(0,m.Zk)(e,2),
        V=function(e){
          let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],
          s=(0,m.bV)(e,2,a);
          return d(e)?e:"".concat(s,"%")
        };
        return{
          "Screen visits":{
            display:"loading..."!==s?A(s):s,
            valueThisPeriod:s,
            valuePreviousPeriod:x,
            tooltipTitle:o("loading..."!==s&&(0,j.p)(s)," times on total, users visited the screen during ".concat(v||"the selected date range."))
          },
          Users:{
            display:A(a),
            valueThisPeriod:a,
            valuePreviousPeriod:u,
            tooltipTitle:o("loading..."!==a&&(0,j.p)(a)," total distinct users visited the screen during ".concat(v||"the selected date range."))
          },
          "Visit duration":{
            display:"loading..."!==e?e<60?"".concat(Math.round(e)," sec"):(0,m.zk)({
              durationInSecs:e
            }):e,
            valueThisPeriod:e,
            valuePreviousPeriod:g,
            tooltipTitle:o("loading..."!==e?e<60?"".concat(Math.round(e)," sec"):(0,m.zk)({
              durationInSecs:e
            }):e," on average, users spent time on the screen during ".concat(v||"the selected date range."))
          },
          "Gestures on screen":{
            display:"loading..."!==r?(0,m.bV)(r,2):r,
            valueThisPeriod:r,
            valuePreviousPeriod:z,
            tooltipTitle:o("loading..."!==r&&(0,m.bV)(r,2)," times on average, users made gestures on the screen during ".concat(v||"the selected date range."))
          },
          "App quit rate":{
            display:V(l),
            valueThisPeriod:+l,
            valuePreviousPeriod:+f,
            tooltipTitle:o("loading..."!==l&&V(l,!0)," of screen visits, users quit the app during ".concat(v||"the selected date range."))
          },
          "Visits with rage taps":{
            display:V(i),
            valueThisPeriod:+i,
            valuePreviousPeriod:+w,
            tooltipTitle:o("loading..."!==i&&V(i,!0)," of screen visits with rage taps during ".concat(v||"the selected date range."))
          },
          "Visits with crashes":{
            display:V(n),
            valueThisPeriod:+n,
            valuePreviousPeriod:+M,
            tooltipTitle:o("loading..."!==n&&V(n,!0)," of screen visits with crashes during ".concat(v||"the selected date range."))
          },
          "Visits with UI freezes":{
            display:V(t),
            valueThisPeriod:+t,
            valuePreviousPeriod:+p,
            tooltipTitle:o("loading..."!==t&&V(t,!0)," screen visits with UI freezes during ".concat(v||"the selected date range."))
          }
        }
      },[d,null==c?void 0:c.data,null==h?void 0:h.data,o])
    },
    M=(0,i.memo)(e=>{
      let a,
      {
        mainKey:s
      }=e;
      switch(s){
        case"Gestures on screen":a=(0,t.jsxs)("svg",{
          xmlns:"http://www.w3.org/2000/svg",
          width:"19",
          height:"18",
          fill:"none",
          viewBox:"0 0 19 18",
          children:[(0,t.jsxs)("g",{
            fill:"#161E35",
            stroke:"#161E35",
            strokeWidth:"0.5",
            clipPath:"url(#clip0_699_13378)",
            children:[(0,t.jsx)("path",{
              d:"M16.524 7.234l.037.206h1.349c.047 0 .096.029.12.083a.162.162 0 01-.02.167l-1.92 2.396a.13.13 0 01-.101.05.129.129 0 01-.1-.05L13.965 7.69h0a.161.161 0 01-.02-.166.135.135 0 01.121-.083H15.508l-.066-.304C14.717 3.835 11.87 1.35 8.457 1.35c-3.962 0-7.17 3.346-7.17 7.44 0 4.093 3.208 7.44 7.17 7.44 2.556 0 4.934-1.43 6.212-3.724h0a.502.502 0 01.702-.198h0c.25.15.34.487.192.755-1.466 2.633-4.19 4.264-7.106 4.264C3.94 17.326.25 13.505.25 8.788.25 4.072 3.941.25 8.457.25c4.007 0 7.362 3.01 8.067 6.984z"
            }),(0,t.jsx)("path",{
              d:"M12.077 7.85l-1.55-1.63a.814.814 0 00-1.115.002.732.732 0 00-.2.326.816.816 0 00-1.036.069.745.745 0 00-.2.325.816.816 0 00-1.036.07.74.74 0 00-.198.317l-.73-.699a.814.814 0 00-1.116.003.731.731 0 000 1.065l2.806 2.685-1.664.25c-.45.062-.789.436-.789.87 0 .327.277.592.618.592h3.885c.606 0 1.175-.225 1.603-.635l.648-.62c.428-.41.663-.954.663-1.532 0-.54-.21-1.059-.59-1.458zm-.365 2.71l-.649.621c-.35.335-.815.52-1.31.52H5.866a.202.202 0 01-.206-.197c0-.24.187-.446.438-.48l2.066-.311a.204.204 0 00.165-.134.192.192 0 00-.05-.2l-3.092-2.96a.35.35 0 01.002-.51.384.384 0 01.53 0l2.062 1.973c.08.077.21.077.291 0a.193.193 0 000-.28L7.23 7.8a.35.35 0 01.002-.51.388.388 0 01.53 0l.843.806c.08.077.211.077.291 0a.193.193 0 000-.28l-.43-.41a.35.35 0 01.003-.51.388.388 0 01.53 0l.432.412s0 0 0 0v.001h.001v.001h.001c.081.074.209.072.287-.004a.191.191 0 000-.278l-.017-.017a.35.35 0 01.002-.51.387.387 0 01.524-.007l1.542 1.623c.31.327.482.75.482 1.193 0 .473-.192.918-.542 1.253z"
            })]
          }),(0,t.jsx)("defs",{
            children:(0,t.jsx)("clipPath",{
              id:"clip0_699_13378",
              children:(0,t.jsx)("path",{
                fill:"#fff",
                d:"M0 0H18.667V18H0z"
              })
            })
          })]
        });
        break;
        case"Screen visits":a=(0,t.jsxs)("svg",{
          xmlns:"http://www.w3.org/2000/svg",
          width:"14",
          height:"18",
          fill:"none",
          viewBox:"0 0 14 18",
          children:[(0,t.jsx)("path",{
            fill:"#161E35",
            d:"M5 4.286a.8.8 0 01-.293.606A1.09 1.09 0 014 5.143c-.265 0-.52-.09-.707-.251A.8.8 0 013 4.286a.8.8 0 01.293-.606A1.09 1.09 0 014 3.429c.265 0 .52.09.707.25A.8.8 0 015 4.287zM4 7.714c.265 0 .52-.09.707-.25A.8.8 0 005 6.856a.8.8 0 00-.293-.606A1.09 1.09 0 004 6c-.265 0-.52.09-.707.251A.8.8 0 003 6.857a.8.8 0 00.293.606c.187.161.442.251.707.251zM5 14.571a.8.8 0 01-.293.606 1.09 1.09 0 01-.707.251c-.265 0-.52-.09-.707-.25A.8.8 0 013 14.57a.8.8 0 01.293-.606A1.09 1.09 0 014 13.714c.265 0 .52.09.707.25a.8.8 0 01.293.607zM4 10.286c.265 0 .52-.09.707-.252A.8.8 0 005 9.428a.8.8 0 00-.293-.606A1.09 1.09 0 004 8.572c-.265 0-.52.09-.707.25A.8.8 0 003 9.428a.8.8 0 00.293.606c.187.161.442.252.707.252zM8 4.286a.8.8 0 01-.293.606A1.09 1.09 0 017 5.143c-.265 0-.52-.09-.707-.251A.8.8 0 016 4.286a.8.8 0 01.293-.606A1.09 1.09 0 017 3.429c.265 0 .52.09.707.25A.8.8 0 018 4.287zM7 7.714c.265 0 .52-.09.707-.25A.8.8 0 008 6.856a.8.8 0 00-.293-.606A1.09 1.09 0 007 6c-.265 0-.52.09-.707.251A.8.8 0 006 6.857a.8.8 0 00.293.606c.187.161.442.251.707.251zM8 14.571a.8.8 0 01-.293.606 1.09 1.09 0 01-.707.251c-.265 0-.52-.09-.707-.25A.8.8 0 016 14.57a.8.8 0 01.293-.606A1.09 1.09 0 017 13.714c.265 0 .52.09.707.25a.8.8 0 01.293.607zM10 5.143c.265 0 .52-.09.707-.251A.8.8 0 0011 4.286a.8.8 0 00-.293-.606A1.09 1.09 0 0010 3.429c-.265 0-.52.09-.707.25A.8.8 0 009 4.287a.8.8 0 00.293.606c.187.16.442.251.707.251zM11 6.857a.8.8 0 01-.293.606 1.09 1.09 0 01-.707.251c-.265 0-.52-.09-.707-.25A.8.8 0 019 6.856a.8.8 0 01.293-.606A1.09 1.09 0 0110 6c.265 0 .52.09.707.251a.8.8 0 01.293.606zM10 15.428c.265 0 .52-.09.707-.25A.8.8 0 0011 14.57a.8.8 0 00-.293-.606 1.09 1.09 0 00-.707-.251c-.265 0-.52.09-.707.25a.8.8 0 00-.293.607.8.8 0 00.293.606c.187.16.442.251.707.251zM5 .857h4a.857.857 0 01-.857.858H5.857A.857.857 0 015 .857z"
          }),(0,t.jsx)("rect",{
            width:"13",
            height:"17",
            x:"-0.5",
            y:"0.5",
            stroke:"#161E35",
            rx:"2.5",
            transform:"matrix(-1 0 0 1 13 0)"
          })]
        });
        break;
        case"Visit duration":a=(0,t.jsxs)("svg",{
          xmlns:"http://www.w3.org/2000/svg",
          width:"14",
          height:"15",
          fill:"none",
          viewBox:"0 0 14 15",
          children:[(0,t.jsx)("path",{
            fill:"#161E35",
            d:"M6.5 11.5h1v1h-1v-1zM2 7h1v1H2V7zM11 7h1v1h-1V7z"
          }),(0,t.jsx)("path",{
            fill:"#161E35",
            d:"M11.95 2.55A6.948 6.948 0 007.5.518V.5h-1v3h1V1.521A6.008 6.008 0 0113 7.5c0 3.308-2.691 6-6 6a6.007 6.007 0 01-5.543-8.3 5.988 5.988 0 011.306-1.948L6.376 7.81l.784-.622-4.266-5.382-.394.331a7 7 0 109.45.412z"
          })]
        });
        break;
        case"App quit rate":a=(0,t.jsx)("svg",{
          xmlns:"http://www.w3.org/2000/svg",
          width:"15",
          height:"14",
          fill:"none",
          viewBox:"0 0 15 14",
          children:(0,t.jsx)("path",{
            fill:"#161E35",
            d:"M9.5 14a.5.5 0 000-1H3a2 2 0 01-2-2V3a2 2 0 012-2h6.5a.5.5 0 100-1H3a3 3 0 00-3 3v8a3 3 0 003 3h6.5zm1.146-10.854a.499.499 0 01.708 0l3.5 3.5a.5.5 0 010 .708l-3.5 3.5a.5.5 0 11-.708-.708L13.293 7.5H4.5a.5.5 0 110-1h8.793l-2.647-2.646a.5.5 0 010-.708z"
          })
        });
        break;
        case"Visits with rage taps":a=(0,t.jsx)("svg",{
          xmlns:"http://www.w3.org/2000/svg",
          width:"14",
          height:"18",
          fill:"none",
          viewBox:"0 0 14 18",
          children:(0,t.jsx)("path",{
            fill:"#161E35",
            d:"M13.6 8.8c-.9-.95-2.1-1.6-3.35-1.85-.55-.15-1.1-.25-1.65-.3C10 5 9.75 2.5 8.1 1.1 6.45-.3 3.95-.05 2.55 1.6c-1.4 1.65-1.15 4.15.5 5.55.3.25.6.45.9.55v1.1l-.8-.75c-.7-.7-1.85-.7-2.6 0-.7.7-.75 1.8-.05 2.5l2.3 2.7c.1.7.35 1.35.7 1.95.25.45.6.9.95 1.25v.95c0 .3.2.5.5.5h6.8c.25 0 .5-.25.5-.5v-1.3c.95-1.15 1.45-2.6 1.45-4.05v-2.9c.05-.2 0-.3-.1-.35zm-11-4.7c0-1.65 1.35-2.95 3-2.9 1.65 0 2.95 1.35 2.9 3 0 .9-.4 1.7-1.1 2.25v-2.5a1.7 1.7 0 00-1.7-1.6c-.9-.05-1.7.7-1.7 1.6v2.6c-.85-.5-1.35-1.45-1.4-2.45zM12.75 12c.05 1.3-.4 2.55-1.25 3.55-.1.1-.2.2-.2.35v1.05H5.5v-.7c0-.15-.1-.3-.2-.4-.35-.3-.65-.65-.9-1.1-.3-.5-.5-1.1-.6-1.7 0-.1-.05-.2-.1-.3L1.3 9.9a.828.828 0 01-.25-.6c0-.2.1-.45.25-.6.35-.3.85-.3 1.2 0l1.45 1.45v1.5l.95-.5v-7.2c.05-.35.35-.65.75-.6.35 0 .7.25.7.6V9.7l1 .2V7.6c.05-.05.1-.05.15-.1.35 0 .7.05 1.05.1v2.55l.8.15V7.7l.6.15c.25.05.5.15.75.25v2.5l.8.15v-2.3c.45.2.85.5 1.2.85l.05 2.7z"
          })
        });
        break;
        case"Visits with UI freezes":a=(0,t.jsx)("svg",{
          xmlns:"http://www.w3.org/2000/svg",
          width:"11",
          height:"15",
          fill:"none",
          viewBox:"0 0 11 15",
          children:(0,t.jsx)("path",{
            fill:"#161E35",
            d:"M9.318 4.28V2.054h1.428c.073 0 .133-.06.133-.133v-.93a.133.133 0 00-.133-.133H.254A.133.133 0 00.12.992v.93c0 .073.06.133.133.133h1.428v2.224c0 1.353.704 2.544 1.766 3.221a3.814 3.814 0 00-1.766 3.22v2.225H.254a.133.133 0 00-.133.133v.93c0 .073.06.133.133.133h10.492c.073 0 .133-.06.133-.133v-.93a.133.133 0 00-.133-.133H9.318v-2.224A3.814 3.814 0 007.552 7.5a3.814 3.814 0 001.766-3.22zm-1.195 6.44v2.225H2.877v-2.224c0-.7.272-1.36.769-1.855A2.6 2.6 0 015.5 8.098c.7 0 1.36.272 1.854.768a2.6 2.6 0 01.769 1.855zm0-6.44a2.6 2.6 0 01-.769 1.854 2.6 2.6 0 01-1.854.768 2.6 2.6 0 01-1.854-.768 2.6 2.6 0 01-.769-1.855V2.055h5.246v2.224z"
          })
        });
        break;
        case"Time in App":a=(0,t.jsx)("svg",{
          xmlns:"http://www.w3.org/2000/svg",
          width:"14",
          height:"14",
          fill:"none",
          viewBox:"0 0 14 14",
          children:(0,t.jsx)("path",{
            fill:"#161E35",
            d:"M11.95 2.05A6.948 6.948 0 007.5.018V0h-1v3h1V1.021A6.008 6.008 0 0113 7c0 3.308-2.691 6-6 6a6.007 6.007 0 01-5.543-8.3 5.988 5.988 0 011.306-1.948L6.376 7.31l.784-.622-4.266-5.382-.394.331a7 7 0 109.45.412z"
          })
        });
        break;
        case"Rage Taps":a=(0,t.jsx)("svg",{
          xmlns:"http://www.w3.org/2000/svg",
          width:"15",
          height:"18",
          fill:"none",
          viewBox:"0 0 15 18",
          children:(0,t.jsx)("path",{
            fill:"#161E35",
            d:"M14.2 8.8c-.9-.95-2.1-1.6-3.35-1.85-.55-.15-1.1-.25-1.65-.3C10.6 5 10.35 2.5 8.7 1.1 7.05-.3 4.55-.05 3.15 1.6c-1.4 1.65-1.15 4.15.5 5.55.3.25.6.45.9.55v1.1l-.8-.75c-.7-.7-1.85-.7-2.6 0-.7.7-.75 1.8-.05 2.5l2.3 2.7c.1.7.35 1.35.7 1.95.25.45.6.9.95 1.25v.95c0 .3.2.5.5.5h6.8c.25 0 .5-.25.5-.5v-1.3c.95-1.15 1.45-2.6 1.45-4.05v-2.9c.05-.2 0-.3-.1-.35zm-11-4.7c0-1.65 1.35-2.95 3-2.9 1.65 0 2.95 1.35 2.9 3 0 .9-.4 1.7-1.1 2.25v-2.5a1.7 1.7 0 00-1.7-1.6c-.9-.05-1.7.7-1.7 1.6v2.6c-.85-.5-1.35-1.45-1.4-2.45zM13.35 12c.05 1.3-.4 2.55-1.25 3.55-.1.1-.2.2-.2.35v1.05H6.1v-.7c0-.15-.1-.3-.2-.4-.35-.3-.65-.65-.9-1.1-.3-.5-.5-1.1-.6-1.7 0-.1-.05-.2-.1-.3L1.9 9.9a.828.828 0 01-.25-.6c0-.2.1-.45.25-.6.35-.3.85-.3 1.2 0l1.45 1.45v1.5l.95-.5v-7.2c.05-.35.35-.65.75-.6.35 0 .7.25.7.6V9.7l1 .2V7.6c.05-.05.1-.05.15-.1.35 0 .7.05 1.05.1v2.55l.8.15V7.7l.6.15c.25.05.5.15.75.25v2.5l.8.15v-2.3c.45.2.85.5 1.2.85l.05 2.7z"
          })
        });
        break;
        case"Screen Visits":a=(0,t.jsxs)("svg",{
          xmlns:"http://www.w3.org/2000/svg",
          width:"14",
          height:"21",
          fill:"none",
          viewBox:"0 0 14 21",
          children:[(0,t.jsx)("path",{
            fill:"#161E35",
            d:"M5 5a1 1 0 11-2 0 1 1 0 012 0zM4 9a1 1 0 100-2 1 1 0 000 2zM5 17a1 1 0 11-2 0 1 1 0 012 0zM4 12a1 1 0 100-2 1 1 0 000 2zM8 5a1 1 0 11-2 0 1 1 0 012 0zM7 9a1 1 0 100-2 1 1 0 000 2zM8 17a1 1 0 11-2 0 1 1 0 012 0zM10 6a1 1 0 100-2 1 1 0 000 2zM11 8a1 1 0 11-2 0 1 1 0 012 0zM10 18a1 1 0 100-2 1 1 0 000 2zM5 1h4a1 1 0 01-1 1H6a1 1 0 01-1-1z"
          }),(0,t.jsx)("rect",{
            width:"13",
            height:"20",
            x:"-0.5",
            y:"0.5",
            stroke:"#161E35",
            rx:"2.5",
            transform:"matrix(-1 0 0 1 13 0)"
          })]
        });
        break;
        case"Crashes":a=(0,t.jsx)("svg",{
          xmlns:"http://www.w3.org/2000/svg",
          width:"21",
          height:"20",
          viewBox:"0 0 21 30",
          children:(0,t.jsx)("g",{
            fill:"none",
            fillRule:"evenodd",
            stroke:"none",
            strokeWidth:"1",
            children:(0,t.jsx)("g",{
              fill:"#161E35",
              fillRule:"nonzero",
              transform:"translate(-1822 -153)",
              children:(0,t.jsx)("g",{
                transform:"translate(1199 16)",
                children:(0,t.jsx)("g",{
                  transform:"translate(18 53)",
                  children:(0,t.jsx)("g",{
                    transform:"translate(342.612)",
                    children:(0,t.jsx)("g",{
                      transform:"translate(245 72)",
                      children:(0,t.jsx)("g",{
                        transform:"translate(17.53 12.082)",
                        children:(0,t.jsx)("path",{
                          d:"M7.482 29.199c.134.05.267.075.401.075.347 0 .694-.15.908-.453L20.25 13.184a.959.959 0 00.08-1.059 1.124 1.124 0 00-.961-.555l-7.105-.05L14.32 1.23c.107-.454-.16-.933-.615-1.135a1.122 1.122 0 00-1.308.303L.244 14.848a.957.957 0 00-.133 1.085c.187.353.56.58.988.58l7.852.05-2.11 11.5c-.107.48.16.96.641 1.136zM3.342 14.47l8.013-9.533-1.496 7.44c-.053.302.027.605.24.857.214.227.508.378.829.378l6.33.025-7.452 10.189 1.469-8.12a.953.953 0 00-.24-.833 1.026 1.026 0 00-.802-.353l-6.89-.05z"
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        });
        break;
        case"Users":a=(0,t.jsx)("svg",{
          xmlns:"http://www.w3.org/2000/svg",
          width:"20",
          height:"14",
          fill:"none",
          viewBox:"0 0 20 14",
          children:(0,t.jsx)("path",{
            fill:"#161E35",
            d:"M9.468 9.34a4.687 4.687 0 10-5.187 0 7.517 7.517 0 00-3.543 2.722.625.625 0 101.022.72 6.25 6.25 0 0110.229-.001.624.624 0 101.022-.72A7.516 7.516 0 009.468 9.34zm-6.03-3.902a3.437 3.437 0 116.874 0 3.437 3.437 0 01-6.875 0zm15.79 7.494a.625.625 0 01-.87-.151 6.263 6.263 0 00-5.114-2.656.625.625 0 110-1.25 3.438 3.438 0 10-.933-6.747.625.625 0 01-.339-1.203 4.687 4.687 0 013.865 8.415 7.517 7.517 0 013.543 2.721.625.625 0 01-.151.871z"
          })
        });
        break;
        case"Visits with crashes":a=(0,t.jsxs)("svg",{
          width:"12",
          height:"12",
          viewBox:"0 0 12 12",
          fill:"none",
          xmlns:"http://www.w3.org/2000/svg",
          children:[(0,t.jsx)("path",{
            d:"M5.35611 4.61035H6.64076V7.96943H5.35611V4.61035ZM5.35547 8.64125H6.64012V9.98488H5.35547V8.64125Z",
            fill:"#161E35"
          }),(0,t.jsx)("path",{
            d:"M7.13546 0.713469C6.91193 0.273429 6.47643 0 5.99982 0C5.52322 0 5.08772 0.273429 4.86419 0.714141L0.150799 10.0275C0.0462072 10.2321 -0.00560249 10.4616 0.000480047 10.6934C0.00656259 10.9253 0.0703271 11.1515 0.185484 11.3497C0.298982 11.5488 0.460168 11.7135 0.653129 11.8275C0.84609 11.9416 1.06415 12.001 1.28579 12H10.7139C11.1686 12 11.5804 11.7568 11.8148 11.3497C11.9298 11.1514 11.9934 10.9252 11.9995 10.6934C12.0056 10.4616 11.9539 10.2321 11.8495 10.0275L7.13546 0.713469ZM1.28579 10.6564L5.99982 1.34296L10.7171 10.6564H1.28579Z",
            fill:"#161E35"
          })]
        });
        break;
        default:a=(0,t.jsx)(t.Fragment,{})
      }
      return a
    }),
    A=s(34742);
    let V=["Visits with UI freezes","Visits with rage taps","Visits with crashes","App quit rate"],
    k=(0,i.memo)(()=>{
      let e=z(),
      a=(0,i.useMemo)(()=>(t.Fragment,(0,t.jsx)(A.GZ,{
        children:r()(e,(e,a)=>(0,t.jsx)(P,{
          statistic:e,
          title:a
        },a))
      })),[e]);
      return(0,t.jsx)(t.Fragment,{
        children:a
      })
    }),
    P=(0,i.memo)(e=>{
      let{
        title:a,
        statistic:{
          display:s,
          tooltipTitle:l,
          valueThisPeriod:r,
          valuePreviousPeriod:n
        }
      }=e,
      h=(0,i.useMemo)(()=>{
        let e;
        return(e=-1===n||-1===r?null:0===n&&r>0?"inf":c()((r-n)/n*100,1))===1/0&&(e="inf"),
        e?String(e):null
      },[n,r]),
      d=s;
      -1===r&&(d="-");
      let g=(0,i.useMemo)(()=>V.indexOf(a)>-1,[a]);
      return(0,t.jsx)(o.Z,{
        className:"box-item",
        "data-intercom-target":a,
        children:(0,t.jsxs)(v.Z,{
          title:l,
          placement:"bottom",
          align:{
            offset:[0,-16]
          },
          children:[(0,t.jsx)("div",{
            className:"ant-card-head",
            children:(0,t.jsx)("div",{
              className:"ant-card-head-wrapper",
              children:(0,t.jsx)("div",{
                className:"ant-card-head-title",
                children:(0,t.jsxs)("div",{
                  className:"overview-card-heading",
                  children:[(0,t.jsx)("div",{
                    className:"icon-box",
                    children:(0,t.jsx)(M,{
                      mainKey:a
                    })
                  }),(0,t.jsxs)("span",{
                    children:[(0,t.jsx)("span",{
                      className:"stat-card-title",
                      children:a
                    })," ",(0,t.jsxs)("span",{
                      className:"stat-title",
                      children:[(0,t.jsx)(b,{
                        percentChange:h,
                        isIssues:g
                      })," "]
                    })]
                  })]
                })
              })
            })
          }),(0,t.jsx)("div",{
            className:"stat-flex-wrapper",
            children:(0,t.jsx)(H,{
              display:d
            })
          })]
        })
      })
    }),
    b=(0,i.memo)(e=>{
      let a,
      {
        percentChange:s,
        isIssues:i
      }=e,
      l=["null","0",null].indexOf(s)>-1;
      return s&&!l?((a="".concat(s.includes("-")?"":"+").concat("inf"!==s?(0,m.Zk)(c()(s,1)):s,"%")).includes("inf")&&(a=(0,t.jsx)(g.Z,{
        className:"heatmaps-stat-up-icon"
      })),(0,t.jsx)("span",{
        className:d()("stat-percent",{
          "stat-down":i?!s.includes("-"):s.includes("-"),
          "stat-up":i?s.includes("-"):!s.includes("-")
        }),
        children:a
      })):(0,t.jsx)(t.Fragment,{})
    }),
    H=(0,i.memo)(e=>{
      let{
        display:a
      }=e;
      return(0,t.jsx)("div",{
        className:"stat-flex stat-flex-1",
        children:(0,t.jsx)("span",{
          className:"stat-content",
          children:(0,t.jsx)("h2",{
            children:a
          })
        })
      })
    });
    var C=k
  }
}]);