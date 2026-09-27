"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4621],{
  7126:function(e,t,n){
    n.d(t,{
      Z:function(){
        return A
      }
    });
    var i=n(85893),
    s=n(67294),
    l=n(80432),
    a=n(42432),
    o=n(25409),
    r=n(83423),
    d=n(48203),
    c=n(14416),
    u=n(65885),
    p=n(19755),
    h=n.n(p),
    m=n(36005),
    x=n(84620),
    v=n(8357),
    f=n(19521),
    g=n(28166),
    b=n(13311),
    y=n.n(b),
    w=n(74936),
    j=n(31049),
    C=n(67287),
    _=n(76501),
    k=n(78303),
    L=n(88767),
    N=n(55137);
    let{
      Paragraph:F
    }=n(33519).default;
    var I=e=>{
      let{
        children:t,
        ellipsis:n,
        ...l
      }=e,
      [a,o]=(0,s.useState)(!1);
      return(0,i.jsx)(d.Z,{
        title:a?t:void 0,
        children:(0,i.jsx)(F,{
          ...l,
          style:{
            whiteSpace:"pre"
          },
          ellipsis:{
            ...n,
            onEllipsis:o
          },
          children:t
        })
      })
    },
    T=n(12616),
    Z=n(99795);
    n(55393);
    let D=(0,f.default)(w.Z).withConfig({
      componentId:"sc-379ef8c3-0"
    })(["border-radius:20px;background-color:transparent;padding:0 8px;height:24px;line-height:20px;font-size:12px;border:solid 1px #C0CAD9;display:flex;align-items:center;justify-content:center;.anticon-setting{position:relative;top:1px;}span:nth-child(2){margin-left:4px !important;}"]),
    S=f.default.div.withConfig({
      componentId:"sc-379ef8c3-1"
    })(["display:flex;flex-direction:column;gap:6px;position:relative;min-width:210px;.manage-dropdown-height{max-height:300px;position:relative;overflow-y:auto;display:flex;flex-direction:column;gap:6px;scrollbar-width:thin;&::-webkit-scrollbar{width:3px;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background:transparent;}&:hover{&::-webkit-scrollbar-thumb{background:#DADCE0;}&::-webkit-scrollbar-thumb:hover{background:#80868B;}}}.label-search-box{width:100%;line-height:24px;font-size:12px;box-sizing:border-box;border:solid 1px transparent;color:$bodyTextColor;border-radius:6px;background-color:#F3F4F5;padding:2px 8px;input{padding-left:0px !important;height:24px;}&::placeholder{font-size:12px;font-weight:300;color:#737886;}.ant-input-prefix{.anticon{position:initial;top:auto;font-size:14px;color:#828282;}}input{background-color:transparent;font-size:12px;}}.label-item{line-height:28px;height:28px;max-height:28px;min-height:28px;overflow:hidden;padding:0px 40px 0px 8px;position:relative;font-size:12px;border-radius:4px;.label-name{display:inline-block;max-width:160px;overflow-x:hidden;text-overflow:ellipsis;}.label-action{display:inline-block;position:absolute;right:8px;top:-2px;.ant-btn{font-size:12px;background:transparent;border:0px;padding:0px;line-height:12px;.anticon{font-size:12px;}}.btn-filter-icon{display:inline-block;margin-right:5px;svg{height:10px;position:relative;top:-1px;}}}&:hover{background:#e6eeff;}}}"]);
    var E=()=>{
      var e;
      let t=(0,c.I0)(),
      n=(0,s.useRef)(null),
      {
        urlReducer:l,
        sessionDetailReducer:a,
        currentAppReducer:{
          _id:u
        },
        userDetailReducer:p
      }=(0,c.v9)(e=>e),
      h=(0,L.useQueryClient)(),
      {
        data:m
      }=p,
      {
        megaFilterSessionLabels:x,
        userLabels:f
      }=(0,g.ZP)(),
      b="",
      y="";
      try{
        b=JSON.parse(localStorage.getItem("issuesListReqBody")),
        y=JSON.parse(localStorage.getItem("screensListReqBody"))
      }
      catch(e){}let F=h.getQueryData(b),
      E=h.getQueryData(["heatmaps-screen-visits",y]),
      M=(0,s.useMemo)(()=>{
        var e,
        t;
        return[...(null==F?void 0:null===(t=F.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.body)||[],...(null==E?void 0:E.body)||[]]
      },[F,E]),
      P=(0,s.useMemo)(()=>null==M?void 0:M.map(e=>e.sessionid),[M]),
      {
        deleteLabel:z
      }=(0,g.Aj)(),
      {
        parentType:R,
        sessionid:A,
        uxcamuserid:B
      }=l,
      U="usersList"===R,
      W=(0,s.useMemo)(()=>U?f:x,[U,f,x]),
      {
        session:O,
        user:Q,
        issue:q
      }=(0,c.v9)(e=>e.appFilter),
      K=(null==O?void 0:O.segment)||[],
      H=(null==Q?void 0:Q.segment)||[],
      Y=(null==q?void 0:q.segment)||[],
      [J,V]=(0,s.useState)(),
      [X,G]=(0,s.useState)(),
      [$,ee]=(0,s.useState)(),
      et=(null==a?void 0:null===(e=a.data)||void 0===e?void 0:e.customLabel)||[],
      en=(null==m?void 0:m.customLabel)||[],
      ei="aiSessionsList"===R?"aiSessionItems":"sessionItems",
      es="aiSessionsList"===R?"aiSessionsListReqBody":"sessionsListReqBody",
      el="";
      try{
        el="usersList"===R?["userList",JSON.parse(localStorage.getItem("usersListReqBody"))]:[ei,JSON.parse(localStorage.getItem(es))]
      }
      catch(e){}let ea=e=>{
        let n={
          ...m
        };
        n.customLabel=null==en?void 0:en.filter(t=>t!==e),
        t((0,Z.Xr)(n))
      },
      eo=e=>{
        z({
          ...e,
          appid:u
        });
        let t=null==e?void 0:e.customLabelName;
        if(["sessionsList","aiSessionsList","usersList"].includes(R)&&h.setQueryData(el,e=>{
          let n=e.data.data.body.map(e=>({
            ...e,
            customLabel:e.customLabel.filter(e=>e!==t)
          }));
          return{
            ...e,
            data:{
              ...e.data,
              data:{
                ...e.data.data,
                body:n
              }
            }
          }
        }),null==P?void 0:P.length){
          let e;
          [...new Set(P)].forEach(n=>{
            let i=h.getQueryData(n);
            if(i){
              let s=(null==i?void 0:i.customLabel)||[];
              (null==s?void 0:s.length)&&(e=s.filter(e=>e!==t)),
              h.setQueryData(n,t=>({
                ...t,
                customLabel:e
              }))
            }
          })
        }
      },
      er=e=>{
        if(eo({
          customLabelName:e,
          labelType:"usersList"===R?"user":"session"
        }),A){
          let t=et.filter(t=>t!==e).sort();
          a&&(a.data.customLabel=[...t])
        }
        B&&U&&ea(e),
        G(!1)
      },
      ed=async e=>{
        let n,
        i=[];
        if(i=U?H:K,"issues"===R&&(i=Y),i.push({
          attribute:"appuser"==(n=U?"appuser":"session")?"user_custom_label":"custom_label",
          operator:"has_any",
          value:[e],
          table:n
        }),U)await t((0,N.Yb)(i,"user-filter")),
        t((0,N.Ct)(1,"user",!0));
        else{
          if("issues"===R){
            await t((0,N.Yb)(i,"issue-filter")),
            t((0,N.pb)(1,"issue"));
            return
          }
          await t((0,N.Yb)(i,"session-filter")),
          t((0,T.Tj)()),
          t((0,N.gW)(1,"session"))
        }
        G(!1),
        V(""),
        ee(W)
      };
      (0,s.useEffect)(()=>{
        ee(W)
      },[null==W?void 0:W.length]),
      (0,s.useEffect)(()=>{
        let e=X&&setTimeout(()=>{
          var e;
          null==n||null===(e=n.current)||void 0===e||e.focus()
        },500);
        return()=>{
          clearInterval(e)
        }
      },[null==n?void 0:n.current,X]);
      let ec=(0,i.jsxs)(S,{
        children:[(0,i.jsx)(r.default,{
          placeholder:"Search labels",
          value:J,
          ref:n,
          className:"label-search-box",
          onChange:e=>{
            V(e.target.value),
            ee(W&&W.filter(t=>t.name.toLowerCase().indexOf(e.target.value.toLowerCase())>=0))
          },
          prefix:(0,i.jsx)(C.Z,{})
        }),(0,i.jsx)("div",{
          className:"manage-dropdown-height",
          children:$ instanceof Array&&(null==$?void 0:$.map((e,t)=>(0,i.jsxs)("div",{
            className:"label-item",
            children:[(0,i.jsx)("div",{
              className:"label-name",
              children:(0,i.jsx)(I,{
                children:e.name
              })
            }),(0,i.jsxs)("div",{
              className:"label-action",
              children:[(0,i.jsx)(d.Z,{
                placement:"topRight",
                title:"Show ".concat(U?"users":"sessions"," with '").concat(e.name,"' label only"),
                children:["sessionsList","aiSessionsList","usersList","issues"].includes(R)&&(0,i.jsx)(w.Z,{
                  icon:(0,i.jsx)(v.aq,{}),
                  onClick:()=>ed(e.name),
                  className:"btn-filter-icon"
                })
              }),(0,i.jsx)(j.Z,{
                overlayClassName:"delete-pop-confirm",
                getPopupContainer:()=>document.body,
                onConfirm:()=>er(e.name),
                title:(0,i.jsx)("div",{
                  children:"Delete this label permanently from all ".concat(U?"users":"sessions","?")
                }),
                okText:"Delete",
                icon:null,
                cancelText:"Cancel",
                children:(0,i.jsx)(w.Z,{
                  icon:(0,i.jsx)(_.Z,{})
                })
              })]
            })]
          },t+e.name)))
        })]
      });
      return(0,i.jsx)(o.Z,{
        content:ec,
        trigger:"click",
        placement:"bottom",
        visible:X,
        getPopupContainer:e=>e.parentNode,
        overlayClassName:"label-manage-dropdown",
        onVisibleChange:e=>{
          G(e),
          V(""),
          e||ee(W)
        },
        children:(0,i.jsxs)(D,{
          children:[(0,i.jsx)(k.Z,{})," Manage label"]
        })
      })
    },
    M=n(95593);
    let P="You are not allowed to perform this action from the guest login.",
    z=f.default.div.withConfig({
      componentId:"sc-ae5637cb-0"
    })(["position:relative;display:flex;.btn-up-icon{display:inline-block;cursor:pointer;text-align:center;margin:0px;margin-left:10px;height:24px;line-height:24px;width:24px;}"]),
    R=f.default.button.withConfig({
      componentId:"sc-ae5637cb-1"
    })(["margin:0px;padding:2px 8px;height:28px;border-radius:4px;border:none;outline:none;display:flex;align-items:center;justify-content:space-between;background-color:transparent;font-size:12px;cursor:pointer;&:hover{background-color:#EFF5FF;}.label-press{font-size:10px;color:#A2A5AE;}.label-name{display:flex;align-items:center;gap:8px;svg{width:14px;height:14px;}span{display:flex;strong{flex:1;max-width:40px;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;}}}"]);
    var A=e=>{
      var t;
      let{
        addedLabels:n,
        handleRemoveLabel:p,
        addLabel:f,
        handleMarkLabel:b,
        handleCloseLabel:w,
        labelCountBy:j
      }=e,
      C=new u.Z,
      {
        urlReducer:_
      }=(0,c.v9)(e=>e),
      {
        megaFilterSessionLabels:k,
        labelSearch:L,
        setLabelSearch:N,
        megaFilteredSessionLabels:F,
        filteredUserLabels:I,
        userLabels:T,
        compareLabels:Z,
        resetSearch:D,
        getLabelTypeFromValue:S,
        checkExistingLabel:A
      }=(0,g.ZP)(),
      B="usersList"===(null==_?void 0:_.parentType),
      [U,W]=(0,s.useState)(B?"user":"session"),
      O=(0,s.useMemo)(()=>B?T:k,[B,T,k]),
      Q=C.get("loggedInType"),
      q=(0,s.useRef)(null),
      K=(0,s.useRef)(),
      [H,Y]=(0,s.useState)(!1),
      [J,V]=(0,s.useState)(!1),
      [X,G]=(0,s.useState)([]),
      [$,ee]=(0,s.useState)([]),
      [et,en]=(0,s.useState)(""),
      [ei,es]=(0,s.useState)("".concat(100,"px")),
      el=(0,s.useMemo)(()=>B?[{
        key:"user",
        name:"User label",
        options:I.sort((e,t)=>Z(n,e,t)),
        showSearch:!1
      }]:[{
        key:"session",
        name:"Session label",
        options:F.sort((e,t)=>Z(n,e,t)),
        showSearch:!1
      }],[B,F,I,n]),
      ea=()=>Y(!0),
      eo=e=>e.sort((e,t)=>e.name.length-t.name.length&&e.name.localeCompare(t.name)).sort((e,t)=>e[j]<=t[j]?1:-1),
      er=()=>{
        w(),
        Y(!1)
      },
      ed=()=>{
        (null==et?void 0:et.length)>2&&(null==et?void 0:et.length)<=50?A(et)?l.ZP.error("Label already exists."):(f(et.trim(),$),V(!1)):l.ZP.error("Label name must be ".concat((null==et?void 0:et.length)<=2?"more than 2":"less than 50"," characters."))
      },
      ec=async e=>{
        let{
          value:t
        }=e.target;
        en(t),
        es("".concat((null==t?void 0:t.length)>=10?(t.length+1)*7:85,"px"));
        let n=O.filter(e=>{
          var n;
          return(null==e?void 0:null===(n=e.name)||void 0===n?void 0:n.toLowerCase().indexOf(t.toLowerCase()))>=0
        });
        N({
          sessionLabels:t,
          userLabels:t
        }),
        await G(eo(n))
      },
      eu=(e,t)=>{
        if("guest"!==Q){
          let n={
            customLabelName:e
          };
          n.isTagged=!1,
          p(n,t)
        }
        else l.ZP.info(P)
      },
      ep=e=>{
        let t=[];
        e.length&&e.map(e=>t.push(e.name)),
        ee(t)
      },
      eh=(0,s.useCallback)(e=>{
        N({
          sessionLabels:et,
          userLabels:et
        })
      },[L,U,N]);
      (0,s.useEffect)(()=>{
        h()(".sd-scrollbar").animate({
          scrollLeft:"+=357px"
        },"slow")
      },[n]),
      (0,s.useEffect)(()=>{
        ep(O),
        G(eo(O))
      },[O,null==O?void 0:O.length,!0===J]),
      (0,s.useEffect)(()=>{
        if(null==q?void 0:q.current){
          var e;
          V(!0),
          null==q||null===(e=q.current)||void 0===e||e.focus()
        }
      },[H]),
      (0,s.useEffect)(()=>{
        J||(Y(J),en(""),es("100px"),G(eo(O)),D()),
        B&&W("user")
      },[J]);
      let em=(0,s.useMemo)(()=>B?"user":"session",[B]),
      ex=(0,s.useMemo)(()=>"session"===U&&(null==k?void 0:k.length)<=0||"user"===U&&(null==T?void 0:T.length)<=0?"You haven't created any label.":null,[null==k?void 0:k.length,U,null==T?void 0:T.length]),
      ev=(null==et?void 0:et.length)&&!A(et)&&U===em?(0,i.jsxs)(R,{
        "aria-hidden":"true",
        onClick:()=>ed(),
        className:"create-label-btn ".concat((null===(t=X.filter(e=>!m.ZP.contains(n,e.name)))||void 0===t?void 0:t.length)===0?"active-label":""),
        children:[(0,i.jsxs)("div",{
          className:"label-name",
          children:[(0,i.jsx)(v.Bc,{}),(0,i.jsxs)("span",{
            children:['Create label "',(0,i.jsx)("strong",{
              children:"".concat(et)
            }),'"']
          })]
        }),(0,i.jsx)("div",{
          className:"label-press",
          children:"Press enter"
        })]
      },"submit"):null;
      return(0,i.jsxs)("div",{
        className:"session-detail-custom-label",
        children:[(0,i.jsxs)("div",{
          className:"left-wrapper ".concat((null==O?void 0:O.length)===0?"manage-hide":""),
          ref:K,
          children:[(0,i.jsx)("div",{
            className:"left-shadow"
          }),(0,i.jsxs)("div",{
            className:"sd-scrollbar",
            children:[(null==n?void 0:n.length)>0&&n.sort((e,t)=>e.localeCompare(t)).map(e=>(null==_?void 0:_.shareSessionKey)?(0,i.jsx)(a.Z,{
              children:(0,i.jsx)("span",{
                className:"tag-name",
                children:e
              },e)
            },e):(0,i.jsx)(a.Z,{
              children:(0,i.jsxs)("span",{
                className:"tag-name",
                children:[e,(0,i.jsx)(x.Z,{
                  onClick:()=>eu(e,S(e))
                })]
              },e)
            },e)),!H||(null==_?void 0:_.shareSessionKey)||"guest"===Q?(0,i.jsx)("div",{
              className:"tag-item",
              children:!(null==_?void 0:_.shareSessionKey)&&(0,i.jsx)(a.Z,{
                onClick:()=>ea(),
                children:(0,i.jsx)(d.Z,{
                  className:"add-label-tooltip",
                  title:"Click to add ".concat(B?"user":"session"," label"),
                  placement:"bottom",
                  children:(0,i.jsx)("span",{
                    className:"add-label",
                    children:"+ Add ".concat(B?"user":"session"," label")
                  })
                })
              })
            }):(0,i.jsx)(o.Z,{
              content:(0,i.jsx)(M.Z,{
                tabs:el,
                selectedKeys:n,
                handleItemClicked:(e,t)=>{
                  let i=y()(t.options,{
                    name:e
                  });
                  if("guest"!==Q){
                    let t={
                      customLabelName:null==i?void 0:i.name
                    };
                    t.isTagged=!0,
                    en(""),
                    G(eo(O)),
                    V(!1),
                    (null==n?void 0:n.includes(e))?eu(e,i.labelType):b(t,i.labelType)
                  }
                  else l.ZP.info(P)
                },
                handleTabChange:e=>{
                  W(e),
                  q.current.focus()
                },
                emptyLabelMessage:ex,
                hideFooter:!0,
                footer:ev,
                searchInput:{
                  placeholder:"Search label",
                  value:et,
                  onChange:eh
                },
                showLabelCount:!0
              }),
              trigger:"click",
              placement:"bottomLeft",
              visible:J,
              onVisibleChange:e=>V(e),
              overlayClassName:"label-add-dropdown ".concat((null==n?void 0:n.length)>1?"":"label-empty"),
              overlayStyle:{
                padding:0
              },
              getPopupContainer:e=>e&&(null==e?void 0:e.parentNode),
              children:(0,i.jsx)(r.default,{
                ref:q,
                value:et,
                style:{
                  width:ei
                },
                onPressEnter:ed,
                className:"custom-label-input",
                onChange:ec,
                placeholder:"type to add..."
              })
            })]
          })]
        }),(0,i.jsxs)(z,{
          children:[!(null==_?void 0:_.shareSessionKey)&&"guest"!==Q&&(null==O?void 0:O.length)!==0&&(0,i.jsx)(E,{}),(0,i.jsx)("div",{
            className:"btn-up-icon",
            "aria-hidden":"true",
            onClick:()=>er(),
            children:(0,i.jsx)(v.mo,{})
          })]
        })]
      })
    }
  },
  90581:function(e,t,n){
    var i=n(85893),
    s=n(41664),
    l=n.n(s),
    a=n(67294),
    o=n(14416),
    r=n(36005),
    d=n(22365),
    c=n(48203),
    u=n(55137),
    p=n(47639),
    h=n(73495),
    m=n(30663),
    x=n(12616),
    v=n(92046);
    let f=e=>{
      let{
        children_value:t,
        tooltipTitle_value:n,
        isSessionsList:s
      }=e;
      return(0,i.jsxs)(c.Z,{
        title:n&&(0,i.jsxs)("div",{
          style:{
            textAlign:"left"
          },
          children:[n,s&&(0,i.jsxs)("div",{
            className:"click-info",
            children:[(0,i.jsx)(d.Z,{})," Click to filter"]
          })]
        }),
        children:[t,(0,i.jsx)("style",{
          children:"\n      .click-info{\n          border-top: 1px solid #737373;\n          padding-top: 7px;\n          margin-top: 7px;\n      }\n    "
        })]
      })
    };
    t.Z=e=>{
      let t,
      {
        children:n,
        segment:s,
        _attribute:d,
        __value:c={},
        _operator:g="in",
        _isNotArrayFormat:b,
        tooltipTitle_value:y,
        isClickableLink:w,
        table:j
      }=e,
      C=(0,o.I0)(),
      {
        urlReducer:_
      }=(0,o.v9)(e=>e),
      k=r.ZP.clone(s),
      [L,N]=(0,a.useState)(""),
      [F,I]=(0,a.useState)([]),
      T=async(e,n,i)=>{
        let s;
        let l={
          attribute:e,
          operator:i||"in",
          value:b?n:[n],
          table:j
        };
        if(s="/app/".concat(_.appId,"/sessions/list/1/").concat(_.sessionid,"?"),"usersList"===_.parentType&&(s="/app/".concat(_.appId,"/users/list/1/").concat(_.uxcamuserid,"?")),"issues"===_.parentType&&(s="/app/".concat(_.appId,"/issues/").concat(_.issueType,"/").concat(_.issuepage,"/").concat(_.issueid,"/").concat(_.issuedetailpage,"/session/").concat(_.sessionid,"/").concat(_.starttime,"?")),"eventsList"===_.parentType&&(s="/app/".concat(_.appId,"/events/list/").concat(_.eventpage,"/").concat(_.sessionid,"/").concat(_.eventid,"/").concat(_.starttime,"?")),"nocodeEventsList"===_.parentType&&(s="/app/".concat(_.appId,"/smart-events/list/").concat(_.eventpage,"/").concat(_.sessionid,"/").concat(_.eventid,"/").concat(_.starttime,"?")),k.length){
          let t=r.ZP.pluck(k,"attribute").includes(e),
          n=t&&r.ZP.findLastIndex(k,{
            attribute:e
          });
          t&&n>=0&&g===k[n].operator?"platform"===e?k[n].operator=i:r.ZP.isEmpty(k[n].value)||k[n].value.includes(c)||(b?k[n].value=c:k[n].value=[...k[n].value,...c],"session_uploadedon"!==e||(k[n].operator=i)):k.push(l),
          s=(0,h.$)(s,k)
        }
        else k=[l],
        t=JSON.stringify({
          o:i||"in",
          v:c,
          tb:j
        }),
        s=encodeURI(s=s.concat(e,"=",t));
        I(k),
        N(s)
      },
      Z=()=>{
        C((0,m.CW)(null,{
          eventName:"create_filter",
          track_type:"event",
          eventProperty:(0,v.aZ)(F),
          pageName:_.parentType
        })),
        C((0,x.Tj)()),
        C((0,u.gW)(1,"session"))
      },
      D=(0,a.useMemo)(()=>["sessionsList"].includes(_.parentType)?{
        appId:_.appId,
        parentType:_.parentType,
        sessionid:_.sessionid,
        sessionpage:1
      }:"issues"===_.parentType?{
        appId:_.appId,
        parentType:_.parentType,
        issueType:_.issueType,
        issuepage:_.issuepage,
        issueid:_.issueid,
        issuedetailpage:_.issuedetailpage,
        sessionid:_.sessionid,
        starttime:_.starttime
      }:["eventsList","nocodeEventsList"].includes(_.parentType)?{
        appId:_.appId,
        parentType:_.parentType,
        sessionid:_.sessionid,
        eventid:_.eventid,
        starttime:_.starttime,
        eventpage:_.eventpage
      }:{
        appId:_.appId,
        parentType:_.parentType,
        sessionid:_.sessionid,
        sessionpage:1
      },[_]);
      return["sessionsList"].includes(_.parentType)||w?(0,i.jsx)(l(),{
        href:{
          pathname:"/integration",
          query:D
        },
        as:L,
        passHref:!0,
        legacyBehavior:!0,
        children:(0,i.jsx)("a",{
          onFocus:()=>T(d,c,g),
          onMouseOver:()=>T(d,c,g),
          onMouseLeave:()=>I({}),
          href:"#!",
          children:(0,i.jsx)("span",{
            "aria-hidden":"true",
            onClick:()=>{
              C((0,p.vT)([]));
              let e="user-filter";
              ["sessionsList","aiSessionsList"].includes(_.parentType)?e="session-filter":["eventsList","nocodeEventsList"].includes(_.parentType)&&(e="event-filter"),
              C((0,u.Yb)(F,e)),
              ["sessionsList","aiSessionsList"].includes(_.parentType)?Z():["eventsList","nocodeEventsList"].includes(_.parentType)?C((0,x.tu)()):C((0,u.Ct)(1,"user",!0))
            },
            children:(0,i.jsx)(f,{
              children_value:n,
              tooltipTitle_value:y,
              isSessionsList:!0
            })
          })
        })
      }):(0,i.jsx)(f,{
        children_value:n,
        tooltipTitle_value:y
      })
    }
  },
  88809:function(e,t,n){
    n.d(t,{
      BQ:function(){
        return r
      },
      CM:function(){
        return m
      },
      DT:function(){
        return x
      },
      ED:function(){
        return w
      },
      EI:function(){
        return c
      },
      NX:function(){
        return u
      },
      Nv:function(){
        return h
      },
      Rg:function(){
        return g
      },
      W2:function(){
        return o
      },
      YF:function(){
        return b
      },
      Zh:function(){
        return y
      },
      l2:function(){
        return p
      },
      nL:function(){
        return f
      },
      oD:function(){
        return d
      },
      p1:function(){
        return v
      },
      vx:function(){
        return j
      }
    });
    var i=n(19521),
    s=n(12016),
    l=n(68457);
    let a={
      inactive:{
        background:"#E8E8EB",
        text:"#161E35"
      },
      inactiveHover:{
        background:"#9EC1FF",
        text:"#161E35"
      },
      active:{
        background:"#5D97FF",
        text:"#FFFFFF"
      },
      activeHover:{
        background:"#4A79CC",
        text:"#FFFFFF"
      }
    },
    o=i.default.div.withConfig({
      componentId:"sc-dfbcccf9-0"
    })(["max-width:600px;display:relative;flex-shrink:0;"]),
    r=i.default.div.withConfig({
      componentId:"sc-dfbcccf9-1"
    })(["display:flex;align-items:center;justify-content:space-between;width:100%;gap:6px;border-radius:5px;background-color:",";color:",";padding:8px 10px;font-size:13px;font-weight:500;overflow-y:hidden;cursor:",";user-select:'none';outline:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;&:hover,&:focus{background-color:",";color:",";}.playlist-action-icon{min-width:16px;max-width:16px;min-height:16px;height:16px;flex-shrink:0;background-color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;border:none;outline:none;padding:0;cursor:",";&:disabled{cursor:not-allowed;opacity:0.5;}}"],e=>{
      let{
        isActive:t
      }=e;
      return t?a.active.background:a.inactive.background
    },e=>{
      let{
        isActive:t
      }=e;
      return t?a.active.text:a.inactive.text
    },e=>{
      let{
        disabled:t
      }=e;
      return t?"not-allowed":"pointer"
    },e=>{
      let{
        isActive:t
      }=e;
      return t?a.activeHover.background:a.inactiveHover.background
    },e=>{
      let{
        isActive:t
      }=e;
      return t?a.activeHover.text:a.inactiveHover.text
    },e=>{
      let{
        disabled:t
      }=e;
      return t?"not-allowed":"pointer"
    }),
    d=i.default.div.withConfig({
      componentId:"sc-dfbcccf9-2"
    })(["flex:1;text-align:center;display:flex;"]),
    c=(0,i.default)(s.Z).withConfig({
      componentId:"sc-dfbcccf9-3"
    })(["width:100%;height:",";"],e=>{
      let{
        size:t
      }=e;
      return"sm"===t?"28px":"32px"
    }),
    u=i.default.div.withConfig({
      componentId:"sc-dfbcccf9-4"
    })(["font-size:12px;font-weight:500;color:#454B5D;margin-bottom:12px;"]),
    p=(0,i.default)(l.default).withConfig({
      componentId:"sc-dfbcccf9-5"
    })(["overflow-y:hidden;height:100%;margin:0px;padding:0px;box-shadow:none;z-index:1;position:relative;.ant-dropdown-menu-item-selected{background-color:#DFEAFF !important;&::before{background-color:#5D97FF !important;}.name{color:#090F19 !important;}.location,.date{color:#454B5D !important;}&.inactive-selected{background-color:#F3F4F5 !important;}}"]),
    h=i.default.div.withConfig({
      componentId:"sc-dfbcccf9-6"
    })(["border-radius:6px;box-shadow:1px 2px 10px 0px rgba(0,0,0,0.09);width:100%;padding:16px;border:1px solid #E8E8EB;background-color:#FFFFFF;position:relative;min-width:350px;min-height:",";"],e=>{
      let{
        isLoading:t
      }=e;
      return t?"600px":"auto"
    }),
    m=(0,i.default)(l.default.Item).withConfig({
      componentId:"sc-dfbcccf9-7"
    })(["min-width:316px;border-radius:5px;border:1px solid #D0D2D7;margin-bottom:16px;padding:10px 14px;line-height:1.1;position:relative;overflow:hidden;&:last-child{margin-bottom:0;}&:hover{background-color:#f5f5f5;}&::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;width:5px;}"]),
    x=i.default.div.withConfig({
      componentId:"sc-dfbcccf9-8"
    })(["display:flex;align-items:flex-start;width:100%;gap:16px;max-height:60px;"]),
    v=i.default.div.withConfig({
      componentId:"sc-dfbcccf9-9"
    })(["display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;"]),
    f=i.default.div.withConfig({
      componentId:"sc-dfbcccf9-10"
    })(["text-align:center;color:#161E35;font-size:12px;"]),
    g=i.default.div.withConfig({
      componentId:"sc-dfbcccf9-11"
    })(["min-width:24px;display:flex;align-items:center;justify-content:center;background-color:none !important;"]),
    b=i.default.div.withConfig({
      componentId:"sc-dfbcccf9-12"
    })(["flex:1;.name{font-size:13px;color:#090F19 !important;font-weight:400 !important;display:block;margin-top:6px;svg{margin-right:4px;}}.continue-watching{color:#5D97FF;font-size:12px;display:block;margin-top:6px;font-weight:500 !important;svg{margin-right:3px;}}.date{font-size:12px;display:block;margin-top:6px;font-weight:400 !important;color:#A2A5AE;}"]),
    y=i.default.div.withConfig({
      componentId:"sc-dfbcccf9-13"
    })(["display:flex;justify-content:center;align-items:center;position:relative;margin:0 16px;"]),
    w=i.default.div.withConfig({
      componentId:"sc-dfbcccf9-14"
    })(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:2;width:100%;height:100%;background-color:rgba(255,255,255,0.6);"]),
    j=i.default.span.withConfig({
      componentId:"sc-dfbcccf9-15"
    })(["font-style:",";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"],e=>{
      let{
        italic:t
      }=e;
      return t?"italic":"normal"
    })
  },
  91369:function(e,t,n){
    n.d(t,{
      LU:function(){
        return v
      },
      FN:function(){
        return E
      },
      eR:function(){
        return x
      },
      I1:function(){
        return y
      },
      vW:function(){
        return g
      },
      pe:function(){
        return f
      },
      HV:function(){
        return p
      },
      qo:function(){
        return _
      },
      R3:function(){
        return L
      },
      Q_:function(){
        return N
      },
      qS:function(){
        return S
      },
      X2:function(){
        return w
      },
      Ql:function(){
        return T
      },
      kA:function(){
        return j
      },
      Gp:function(){
        return C
      },
      Jt:function(){
        return k
      },
      vd:function(){
        return F
      },
      YI:function(){
        return I
      },
      b4:function(){
        return D
      },
      dk:function(){
        return Z
      }
    });
    var i=n(85893),
    s=n(67294),
    l=n(873),
    a=e=>(0,i.jsxs)("svg",{
      width:25,
      height:24,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("rect",{
        x:.744,
        width:24,
        height:24,
        rx:12,
        fill:"#5D97FF"
      }),(0,i.jsx)("rect",{
        x:8.278,
        y:6.5,
        width:3,
        height:11,
        rx:1.5,
        fill:"#fff"
      }),(0,i.jsx)("rect",{
        x:14.21,
        y:6.5,
        width:3,
        height:11,
        rx:1.5,
        fill:"#fff"
      })]
    }),
    o=n(28785),
    r=n(48203),
    d=n(30663),
    c=n(92046),
    u=n(88809);
    let p=function(e,t){
      let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7;
      if(!e.length)return[];
      let i=e.findIndex(e=>e.id===t);
      if(-1===i)return e.slice(0,n);
      let s=Math.floor((n-1)/2),
      l=n-s-1,
      a=Math.max(0,i-s),
      o=Math.min(e.length-1,i+l);
      return i<s&&(o=Math.min(e.length-1,n-1)),
      i>e.length-l-1&&(a=Math.max(0,e.length-n)),
      e.slice(a,o+1)
    },
    h=()=>{
      let e=(0,s.useId)();
      return(0,i.jsxs)("svg",{
        width:"25",
        height:"25",
        viewBox:"0 0 25 25",
        fill:"none",
        xmlns:"http://www.w3.org/2000/svg",
        children:[(0,i.jsx)("circle",{
          cx:"12.2447",
          cy:"12.0605",
          r:"12",
          fill:"url(#".concat(e,")")
        }),(0,i.jsx)("path",{
          d:"M10.6509 6.63519C10.4615 6.51224 10.2413 6.43815 10.0123 6.42031C9.78322 6.40228 9.55318 6.44126 9.3449 6.53299C9.17386 6.60339 9.01901 6.70462 8.88909 6.83106C8.61692 7.09442 8.46482 7.44816 8.46544 7.81624V16.3016C8.46349 16.4847 8.49991 16.666 8.57264 16.8357C8.64535 17.0052 8.75291 17.1596 8.88909 17.2895C9.02338 17.415 9.17954 17.5178 9.35073 17.5932C9.64718 17.7214 9.98355 17.7412 10.2945 17.6483C10.4292 17.6064 10.5571 17.547 10.6743 17.4718L17.3828 13.1475C17.5868 13.0204 17.7512 12.8442 17.859 12.637C17.97 12.4284 18.0271 12.1978 18.0256 11.9641C18.0241 11.7306 17.964 11.5006 17.8503 11.2931C17.7352 11.0887 17.5661 10.9155 17.3594 10.791L10.6509 6.63519Z",
          fill:"white"
        }),(0,i.jsx)("defs",{
          children:(0,i.jsxs)("linearGradient",{
            id:e,
            x1:"17.92",
            y1:"12.0605",
            x2:"5.6552",
            y2:"21.1805",
            gradientUnits:"userSpaceOnUse",
            children:[(0,i.jsx)("stop",{
              offset:"0.259615",
              stopColor:"#EE5EDD"
            }),(0,i.jsx)("stop",{
              offset:"1",
              stopColor:"#49C5FF"
            })]
          })
        })]
      })
    },
    m=()=>{
      let e=(0,s.useId)();
      return(0,i.jsxs)("svg",{
        width:"25",
        height:"25",
        viewBox:"0 0 25 25",
        fill:"none",
        xmlns:"http://www.w3.org/2000/svg",
        children:[(0,i.jsx)("circle",{
          cx:"12.2447",
          cy:"12.707",
          r:"12",
          fill:"url(#".concat(e,")")
        }),(0,i.jsx)("rect",{
          x:"7.77786",
          y:"7.53125",
          width:"3",
          height:"11",
          rx:"1.5",
          fill:"white"
        }),(0,i.jsx)("rect",{
          x:"13.7095",
          y:"7.53125",
          width:"3",
          height:"11",
          rx:"1.5",
          fill:"white"
        }),(0,i.jsx)("defs",{
          children:(0,i.jsxs)("linearGradient",{
            id:e,
            x1:"17.92",
            y1:"12.707",
            x2:"5.6552",
            y2:"21.8269",
            gradientUnits:"userSpaceOnUse",
            children:[(0,i.jsx)("stop",{
              offset:"0.259615",
              stopColor:"#EE5EDD"
            }),(0,i.jsx)("stop",{
              offset:"1",
              stopColor:"#49C5FF"
            })]
          })
        })]
      })
    },
    x=(e,t,n,s,r,d)=>d?n?e&&s===r?["ai-pause",(0,i.jsx)(m,{})]:["ai-play",(0,i.jsx)(h,{})]:e&&s===r?["pause",(0,i.jsx)(a,{})]:["play",(0,i.jsx)(l.Z,{})]:["noVideo",(0,i.jsx)(o.Z,{})],
    v=e=>e.split(".")[0],
    f=e=>{
      let t={
        content:"",
        tooltip:null
      };
      return(null==e?void 0:e.kUXCam_UserIdentity)?t.content=null==e?void 0:e.kUXCam_UserIdentity:(t.content="".concat(null==e?void 0:e.uxcamuserid," *"),t.tooltip="Custom user ID was not set for this user."),
      t
    },
    g=e=>(0,i.jsx)(r.Z,{
      title:f(e).tooltip,
      children:(0,i.jsx)(u.vx,{
        italic:!!f(e).tooltip,
        children:f(e).content
      })
    }),
    b={
      month:"short",
      day:"numeric",
      hour:"2-digit",
      minute:"2-digit",
      hour12:!1
    },
    y=(e,t)=>{
      let n=new Date(e),
      i=new Intl.DateTimeFormat("en-US",b).format(n);
      return["".concat(i," (UTC ").concat(t,")"),i,"(UTC ".concat(t,")")]
    },
    w=e=>{
      let{
        currentOrder:t,
        total:n,
        playlistType:i,
        direction:s,
        parentType:l
      }=e;
      return(0,d.CW)(null,{
        eventName:"wa_sessions_navigate_playlist",
        track_type:"event",
        pageName:l,
        eventProperty:{
          current_order:t,
          total:n,
          playlist_type:i,
          direction:s
        }
      })
    },
    j=e=>{
      let{
        playlistType:t,
        parentType:n
      }=e;
      return(0,d.CW)(null,{
        eventName:"wa_sessions_click_playlist",
        track_type:"event",
        pageName:n,
        eventProperty:{
          playlist_type:t
        }
      })
    },
    C=e=>{
      let{
        playlistType:t,
        parentType:n,
        sessionsPosition:i,
        selectedSessionPosition:s
      }=e;
      return(0,d.CW)(null,{
        eventName:"wa_sessions_select_playlist_session",
        track_type:"event",
        pageName:n,
        eventProperty:{
          playlist_type:t,
          sessions_position:i,
          selected_session_position:s
        }
      })
    },
    _=e=>{
      let{
        sessionId:t,
        aiAnalyzed:n,
        filtersApplied:i,
        duration:s,
        containsVideo:l,
        gestureCount:a,
        sessionSelectedFrom:o,
        parentType:r,
        isCrashed:u,
        isRageTap:p,
        isUiFreeze:h
      }=e,
      m=[p&&"rage_tap",h&&"ui_freeze",u&&"crashed"].filter(Boolean);
      return(0,d.CW)(null,{
        eventName:"wa_sessions_visit_session_player",
        track_type:"event",
        pageName:r,
        eventProperty:{
          session_id:t,
          filters_applied:i?(0,c.aZ)(i):null,
          ai_analyzed:n,
          duration:s,
          contains_video:l,
          gesture_count:a,
          frustrations:m,
          session_selected_from:o
        }
      })
    },
    k=()=>(0,d.CW)(null,{
      eventName:"wa_sessions_select_sessions",
      track_type:"event"
    }),
    L=()=>(0,d.CW)(null,{
      eventName:"wa_batch_watch_more",
      track_type:"event"
    }),
    N=e=>{
      let{
        parentType:t,
        isVisible:n
      }=e;
      return(0,d.CW)(null,{
        eventName:"wa_tara_click_tara",
        track_type:"event",
        pageName:t,
        eventProperty:{
          visibilityChangedTo:!n
        }
      })
    },
    F=e=>{
      let{
        batchName:t,
        approximateSessions:n,
        creditsUsed:i,
        creditsRemaining:s,
        filtersApplied:l,
        parentType:a,
        type:o
      }=e;
      return(0,d.CW)(null,{
        eventName:"wa_tara_session_processing_completed",
        track_type:"event",
        pageName:a,
        eventProperty:{
          batch_name:t,
          approximate_sessions:n,
          credits_used:i,
          credits_remaining:s,
          filters_applied:l?(0,c.aZ)(l):null,
          type:o
        }
      })
    },
    I=e=>{
      let{
        batchName:t,
        approximateSessions:n,
        creditsUsed:i,
        creditsRemaining:s,
        filtersApplied:l,
        parentType:a,
        type:o
      }=e;
      return(0,d.CW)(null,{
        eventName:"wa_tara_submit_batch_request",
        track_type:"event",
        pageName:a,
        eventProperty:{
          batch_name:t,
          approximate_sessions:n,
          credits_used:i,
          credits_remaining:s,
          filters_applied:l?(0,c.aZ)(l):null,
          type:o
        }
      })
    },
    T=e=>{
      let{
        feature:t,
        isAdmin:n,
        autoAnalysisStatus:i,
        customAnalysisStatus:s
      }=e;
      return(0,d.CW)(null,{
        eventName:"screenvisit_org_setting",
        track_type:"event",
        pageName:"settings",
        eventProperty:{
          feature:t,
          isAdmin:n,
          auto_analysis_status:i,
          custom_analysis_status:s
        }
      })
    },
    Z=e=>{
      let{
        taraSetting:t,
        isAdmin:n,
        currentAutoanalysisLimit:i,
        currentCreditsLimit:s
      }=e;
      return(0,d.CW)(null,{
        eventName:"wa_tara_toggle_tara",
        track_type:"event",
        pageName:"settings",
        eventProperty:{
          tara_setting:t,
          isAdmin:n,
          current_autoanalysis_limit:i,
          current_credits_limit:s
        }
      })
    },
    D=e=>{
      let{
        error:t,
        parentType:n
      }=e;
      return(0,d.CW)(null,{
        eventName:"wa_tara_error_notification",
        track_type:"event",
        pageName:n,
        eventProperty:{
          error:t
        }
      })
    },
    S=e=>{
      let{
        taraProduct:t,
        parentType:n,
        source:i
      }=e;
      return(0,d.CW)(null,{
        eventName:"wa_tara_click_upgrade",
        track_type:"event",
        pageName:n,
        eventProperty:{
          tara_product:t,
          source:i
        }
      })
    },
    E=e=>["get-AI-Details-".concat(e)]
  },
  72617:function(e,t,n){
    var i=n(85893),
    s=n(67294),
    l=n(14416),
    a=n(36005),
    o=n(88767),
    r=n(7126),
    d=n(5257),
    c=n(30663),
    u=n(91369),
    p=n(44908),
    h=n.n(p),
    m=n(28166);
    let x=["sessionsList","aiSessionsList","eventsList","issues","heatmapsList"];
    t.Z=(0,s.memo)(e=>{
      let{
        setShowCustomLabel:t
      }=e,
      n=(0,l.I0)(),
      p=(0,o.useQueryClient)(),
      {
        sessionDetail:v
      }=(0,d.Lc)(),
      {
        urlReducer:f
      }=(0,l.v9)(e=>e),
      {
        megaFilterCustomLabels:g
      }=(0,m.ZP)(),
      {
        addSessionLabel:b,
        markSessionLabel:y
      }=(0,m.Aj)(),
      {
        parentType:w,
        sessionid:j,
        secondarysessionid:C,
        appId:_
      }=f,
      k="aiSessionsList"===w,
      L=k?C:j,
      N=e=>k?(0,u.FN)(e):e,
      F=(0,s.useMemo)(()=>null==v?void 0:v.customLabel,[v]),
      I="aiSessionsList"===w?"aiSessionItems":"sessionItems",
      T="aiSessionsList"===w?"aiSessionsListReqBody":"sessionsListReqBody",
      Z="";
      try{
        Z=JSON.parse(localStorage.getItem(T))
      }
      catch(e){}let D=(0,s.useMemo)(()=>[I,Z],[Z]),
      S=(0,s.useMemo)(()=>null==g?void 0:g.map(e=>e.name),[g]),
      [E,M]=(0,s.useState)([]),
      P=(e,t)=>{
        var n,
        i,
        s;
        let l=e.customLabelName,
        a=[null==v?void 0:null===(n=v.userProperty)||void 0===n?void 0:n.uxcamuserid],
        o=[null==v?void 0:null===(i=v.time)||void 0===i?void 0:i.sessionUploadedDateTime];
        if(!(null==v?void 0:null===(s=v.time)||void 0===s?void 0:s.sessionUploadedDateTime)){
          let e=p.getQueriesData(["sessionItems"]).map(e=>{
            var t,
            n;
            let[,i]=e;
            return null==i?void 0:null===(n=i.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.body
          }).filter(Boolean).flat().find(e=>(null==e?void 0:e.sessionid)===L);
          (null==e?void 0:e.sessionUploadedDateTime)&&(o=[e.sessionUploadedDateTime])
        }
        o[0]&&L&&_&&(y({
          appid:_,
          ...e,
          uxcamuserIds:a,
          sessionIds:[L],
          uploadedOn:o,
          labelType:t||"session"
        }),["sessionsList","aiSessionsList"].includes(w)&&p.setQueryData(D,t=>{
          var n,
          i,
          s,
          a,
          o;
          let r=[...null!==(a=null==t?void 0:null===(i=t.data)||void 0===i?void 0:null===(n=i.data)||void 0===n?void 0:n.body)&&void 0!==a?a:[]],
          d=r.find(e=>e.sessionid===L),
          c=e.isTagged;
          if(d&&(null==d?void 0:null===(s=d.customLabel)||void 0===s?void 0:s.includes(l))&&!c){
            let e=[...d.customLabel];
            e.splice(e.indexOf(l),1),
            d={
              ...d,
              customLabel:e
            }
          }
          else c&&(null==d?void 0:d.sessionid)&&(d={
            ...d,
            customLabel:[...null!==(o=null==d?void 0:d.customLabel)&&void 0!==o?o:[],l]
          });
          return{
            ...t,
            data:{
              ...t.data,
              data:{
                ...t.data.data,
                body:r.map(e=>e.sessionid===(null==d?void 0:d.sessionid)?{
                  ...e,
                  customLabel:h()(null==d?void 0:d.customLabel)
                }:e)
              }
            }
          }
        }))
      },
      z=(e,t)=>{
        let i;
        let s=e.customLabelName,
        l=e.isTagged;
        P(e,t),
        n((0,c.CW)(null,{
          eventName:l?"add_label":"remove_label",
          track_type:"event",
          eventProperty:{
            "label name":s,
            "session ids":[L],
            label_type:t||"session"
          }
        }));
        let a=N(L),
        o=p.getQueryData(a);
        if(o){
          let e=(null==o?void 0:o.customLabel)||[];
          i=(null==e?void 0:e.indexOf(s))>-1?e.filter(e=>e!==s):[...e,s],
          p.setQueryData(a,e=>({
            ...e,
            customLabel:i
          }))
        }
      },
      R=e=>{
        var t,
        i,
        s;
        let l=(null==e?void 0:e.sessionIds)||[],
        a=[null==v?void 0:null===(t=v.userProperty)||void 0===t?void 0:t.uxcamuserid],
        o=[null==v?void 0:null===(i=v.time)||void 0===i?void 0:i.sessionUploadedDateTime];
        if(!(null==v?void 0:null===(s=v.time)||void 0===s?void 0:s.sessionUploadedDateTime)){
          let e=p.getQueriesData(["sessionItems"]).map(e=>{
            var t,
            n;
            let[,i]=e;
            return null==i?void 0:null===(n=i.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.body
          }).filter(Boolean).flat().find(e=>(null==e?void 0:e.sessionid)===L);
          (null==e?void 0:e.sessionUploadedDateTime)&&(o=[e.sessionUploadedDateTime])
        }
        if(!o[0]||!l.length||!_)return;
        let r={
          ...e,
          appid:_,
          uxcamuserIds:a,
          uploadedOn:o,
          labelType:"usersList"===w?"user":"session"
        };
        b(r),
        n((0,c.CW)(null,{
          eventName:"add_label",
          track_type:"event",
          eventProperty:{
            "label name":null==r?void 0:r.customLabelName,
            "session ids":l,
            label_type:"usersList"===w?"user":"session"
          }
        })),
        ["sessionsList","aiSessionsList"].includes(w)&&p.setQueryData(D,t=>{
          let n=t.data.data.body.map(t=>{
            if(l.length&&l.includes(t.sessionid)){
              let n=t.customLabel?[...t.customLabel]:[];
              return{
                ...t,
                customLabel:[...n,e.customLabelName]
              }
            }
            return t
          });
          return{
            ...t,
            data:{
              ...t.data,
              data:{
                ...t.data.data,
                body:n
              }
            }
          }
        }),
        l.forEach(t=>{
          let n=N(t),
          i=p.getQueryData(n);
          if(i){
            let t=[...(null==i?void 0:i.customLabel)||[],e.customLabelName];
            p.setQueryData(n,e=>({
              ...e,
              customLabel:t
            }))
          }
        })
      },
      A=async(e,t)=>{
        e.length&&!(0,a.r3)(t,e)&&(g.push({
          name:e,
          icon:"tag",
          sessioncount:1
        }),g.sort((e,t)=>e.name.localeCompare(t.name)),x.includes(w)&&R({
          customLabelName:e,
          labelIcon:"tag",
          sessionIds:[L]
        }))
      };
      return(0,s.useEffect)(()=>{
        x.includes(w)?M(null==F?void 0:F.filter(e=>S.indexOf(e)>=0)):M(F)
      },[F,w,S,null==g?void 0:g.length]),
      (0,i.jsx)(r.Z,{
        addedLabels:E,
        handleRemoveLabel:z,
        addLabel:A,
        handleMarkLabel:z,
        handleCloseLabel:()=>{
          t(!1)
        },
        labelCountBy:"count"
      })
    })
  },
  10125:function(e,t,n){
    n.d(t,{
      dA:function(){
        return Q
      },
      mz:function(){
        return K
      },
      fz:function(){
        return q
      },
      cM:function(){
        return O
      },
      jg:function(){
        return U
      },
      Dh:function(){
        return W
      }
    });
    var i=n(85893),
    s=n(67294),
    l=n(48203),
    a=n(19197),
    o=n(41664),
    r=n.n(o),
    d=n(99252),
    c=n(90581),
    u=n(52537),
    p=n(83967),
    h=n(25161),
    m=n(30663),
    x=n(12616),
    v=n(14416),
    f=n(91369),
    g=n(9257),
    b=n(68457),
    y=n(74936),
    w=n(12016),
    j=n(60063),
    C=n(76633),
    _=n(5257),
    k=n(8357),
    L=n(19521),
    N=n(92046),
    F=n(75493),
    I=n(55668);
    let T=b.default.Item,
    Z=L.default.div.withConfig({
      componentId:"sc-9a14c5a7-0"
    })(["display:flex;align-items:center;gap:10px;.ant-dropdown-trigger{margin-top:0px;}.video-box-head h2{font-size:1.4rem;margin-bottom:10px;line-height:17px;color:#868ea1;display:inline-block;}.video-box-head h2 small{font-size:1rem;}.video-box-head{padding:15px 15px 0;line-height:16px;}.video-box-head ul li{display:inline-block;margin-right:20px;}.video-box-head ul li strong{display:block;text-transform:uppercase;}.tag-wrapper{margin-top:10px;}.tag-wrapper .ant-tag{background-color:#fff;border:1px solid #ddd;}.tag-wrapper input,.tag-wrapper .ant-btn{border-radius:50px;}.flags{margin-right:5px;}.ant-tooltip-inner{word-break:break-word;}.video-datas .ant-card{border-color:#C0CAD9 !important;}.txt-underline{textDecoration:'underline';}.sessions-details-events-tab:hover{color:#5D97FF !important}"]),
    D=(0,L.default)(b.default).withConfig({
      componentId:"sc-9a14c5a7-1"
    })(["align-items:center;max-height:60vh;overflow-y:auto;background:#fff;max-width:300px;.ant-menu-item{padding:24px 24px;margin-left:5px;margin-bottom:0px !important;height:24px;line-height:24px;&.ant-menu-item-active{background:#f7f7fe;}}"]),
    S=(0,L.default)(T).withConfig({
      componentId:"sc-9a14c5a7-2"
    })(["svg{cursor:pointer;}"]),
    E=(0,L.default)(y.Z).withConfig({
      componentId:"sc-9a14c5a7-3"
    })(["border:1px solid #F4584C;box-sizing:border-box;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;padding:0 10px;height:28px;color:#F4584C;svg{margin-right:4px;}&:active,&:focus,&:hover{border:1px solid #F4584C;color:#F4584C;}"]),
    M=L.default.div.withConfig({
      componentId:"sc-9a14c5a7-4"
    })(["margin-right:",";"],e=>(null==e?void 0:e.value)?"24px":"0px"),
    P=L.default.div.withConfig({
      componentId:"sc-9a14c5a7-5"
    })(["display:flex;border-bottom:",";.time-btn{color:#5D97FF;font-size:10px;border:1px solid #5D97FF;border-radius:4px;height:22px;display:flex;gap:2px;align-items:center;padding:0 5px;svg{width:13px;height:13px;}}.content-wrap{margin-right:10 px;.duration{.screen{font-weight:500;font-size:14px;max-width:210px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:block}.topofstack{font-weight:400;font-size:13px;color:rgba(37,56,88,0.6);max-width:220px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:block}}&:hover{.duration{.screen{color:#5D97FF;}.topofstack{color:#5D97FF;opacity:60%;}}}"],e=>(null==e?void 0:e.isMultiple)?"1px solid #EFEFEF":""),
    z=L.default.div.withConfig({
      componentId:"sc-9a14c5a7-6"
    })(["border-bottom:",";.content-wrap{.title{font-weight:500;font-size:14px;display:flex;p{margin:0;flex:1;max-width:200px;text-overflow:ellipsis;overflow:hidden;white-space:wrap;break-word:break-all;display:block;}}}.reason{font-weight:400;font-size:13px;color:rgba(37,56,88,0.6);max-width:275px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:block;}.time-btn{color:#5d97ff;display:flex;align-items:center;gap:2px;border:1px solid #5d97ff;border-radius:4px;font-size:10px;height:22px;padding:0 5px;width:60px;display:inline-flex;align-items:center;margin-left:10px;font-weight:400;svg{width:13px;height:13px;}}&:hover{.content-wrap{.title p{color:#5d97ff;}}.reason{color:#5d97ff;opacity:60%;}}"],e=>(null==e?void 0:e.isMultiple)?"1px solid #EFEFEF":"");
    var R=e=>{
      let{
        isCrashLog:t,
        totalBugs:n,
        anrMenu:l
      }=e,
      a=(0,s.useRef)(),
      {
        setSelectedHeaderField:o
      }=(0,_.qI)(),
      {
        rewind:r
      }=(0,_.Lc)(),
      d=(e,t)=>{
        e.preventDefault(),
        e.stopPropagation(),
        r(t)
      },
      c=e=>{
        o(e)
      },
      u=(0,s.useCallback)((e,t)=>"000".concat(e).slice(-1*t),[]),
      p=(0,s.useCallback)(e=>{
        let t=(0,C.I1)(e),
        n=parseFloat(e).toFixed(1).slice(-1);
        return"".concat(t,".").concat(u(n,1))
      },[]),
      h=(0,s.useMemo)(()=>(0,i.jsx)(D,{
        onClick:e=>c(e.key),
        children:l.map((e,t)=>{
          var n,
          s;
          return(0,i.jsx)(S,{
            children:(0,i.jsx)("span",{
              children:(0,i.jsx)(A,{
                time:null==e?void 0:e.time,
                duration:null==e?void 0:null===(n=e.params)||void 0===n?void 0:n.duration,
                displayTime:p,
                params:null==e?void 0:e.params,
                dataLength:(null==l?void 0:l.length)-t==0,
                handleRewind:d
              })
            })
          },"UIFreeze_".concat(null==e?void 0:null===(s=e.params)||void 0===s?void 0:s.anrNumber))
        })
      }),[l]),
      m=(0,s.useMemo)(()=>(0,i.jsx)(D,{
        onClick:e=>c(e.key),
        children:n.map((e,t)=>(0,i.jsx)(S,{
          children:(0,i.jsx)("span",{
            children:(0,i.jsx)(B,{
              title:null==e?void 0:e.exceptionName,
              time:null==e?void 0:e.timeFromStart,
              displayTime:p,
              reason:null==e?void 0:e.reason,
              dataLength:(null==n?void 0:n.length)-t==0,
              handleRewind:d
            })
          })
        },"exception_".concat(null==e?void 0:e.timeFromStart,"+").concat(t)))
      }),[n]),
      x=s.useCallback(()=>a.current,[a]);
      return(0,i.jsxs)(Z,{
        ref:a,
        children:[t?(0,i.jsxs)(E,{
          value:(null==l?void 0:l.length)>0||(null==n?void 0:n.length)>0,
          onClick:()=>o("crash"),
          children:[(0,i.jsx)(I.Z,{}),"Crashed"]
        }):null,l instanceof Array&&l.length>0?(0,i.jsx)(w.Z,{
          getPopupContainer:x,
          overlay:h,
          children:(0,i.jsxs)(M,{
            value:(null==n?void 0:n.length)>0,
            type:"text",
            children:[(0,i.jsx)("span",{
              children:(0,i.jsx)(k.hJ,{})
            }),"".concat(l.length," UI freeze").concat((null==l?void 0:l.length)>1?"s":"")," ",(0,i.jsx)(j.Z,{})]
          })
        }):null,n&&n.length>0?(0,i.jsx)(w.Z,{
          getPopupContainer:x,
          overlay:m,
          children:(0,i.jsxs)("div",{
            type:"text",
            children:[(0,i.jsx)("span",{
              children:(0,i.jsx)(k.F$,{})
            }),"".concat(n.length," Exception").concat((null==n?void 0:n.length)>1?"s":"")," ",(0,i.jsx)(j.Z,{})]
          })
        }):null]
      })
    };
    let A=e=>{
      let{
        time:t,
        duration:n,
        params:s,
        dataLength:l,
        handleRewind:a
      }=e;
      return(0,i.jsxs)(P,{
        isMultiple:l,
        children:[(0,i.jsx)("div",{
          className:"content-wrap",
          children:(0,i.jsxs)("span",{
            className:"duration",
            children:[(0,i.jsx)("span",{
              className:"screen",
              children:"".concat(parseFloat(n).toFixed(0),"s in ").concat(null==s?void 0:s.screen)
            }),(0,i.jsx)("span",{
              className:"topofstack",
              children:null==s?void 0:s.topOfStack
            })]
          })
        }),(0,i.jsxs)("span",{
          "aria-hidden":"true",
          className:"time-btn",
          onClick:e=>a(e,t),
          children:[(0,i.jsx)(F.Od,{})," ",(0,N.nH)(t)]
        })]
      })
    },
    B=e=>{
      let{
        title:t,
        time:n,
        reason:s,
        dataLength:a,
        handleRewind:o
      }=e;
      return(0,i.jsxs)(z,{
        isMultiple:a,
        children:[(0,i.jsx)("div",{
          className:"content-wrap",
          children:(0,i.jsxs)("span",{
            className:"title",
            children:[(0,i.jsx)(l.Z,{
              title:t,
              children:(0,i.jsx)("p",{
                children:"".concat(t)
              })
            }),(0,i.jsxs)("span",{
              "aria-hidden":"true",
              className:"time-btn",
              onClick:e=>o(e,n),
              children:[(0,i.jsx)(F.Od,{})," ",n<60?"".concat(n,"s"):(0,N.nH)(n)]
            })]
          })
        }),(0,i.jsxs)("span",{
          className:"reason",
          children:[" ","".concat(s)]
        })]
      })
    },
    U=e=>{
      let{
        sessionDetails:t,
        appId:n,
        urlQuery:a,
        parentType:o
      }=e,
      d=(0,v.I0)(),
      c=t.isAlias?(0,i.jsx)(l.Z,{
        title:(0,i.jsxs)("span",{
          children:[t.name||t.uxcamuserid,(0,i.jsx)("br",{}),"(Randomly assigned alias based on country of IP)"]
        }),
        children:(0,i.jsxs)("span",{
          className:"text-ellipsis",
          children:[t.name||t.uxcamuserid," *"]
        })
      }):(0,i.jsx)("span",{
        className:"text-ellipsis",
        children:t.name||t.uxcamuserid
      });
      return(0,s.useMemo)(()=>a.shareSessionKey?c:(0,i.jsx)(r(),{
        href:{
          pathname:"/integration",
          query:{
            appId:n,
            parentType:"usersList",
            uxcamuserid:t.uxcamuserid,
            sessionPage:1,
            userpage:1
          }
        },
        as:"/app/".concat(n,"/users/list/1/").concat(t.uxcamuserid),
        passHref:!0,
        legacyBehavior:!0,
        children:(0,i.jsx)("a",{
          href:"#!",
          onClick:()=>{
            "eventsList"===o&&d((0,x.Fn)("appuser")),
            d((0,m.CW)(null,{
              eventName:"click_gotouser",
              track_type:"event",
              pageName:o,
              eventProperty:{
                userId:null==t?void 0:t.uxcamuserid,
                sessionId:null==t?void 0:t.sessionid
              }
            }))
          },
          children:c
        })
      }),[t,n])
    },
    W=e=>{
      var t;
      let{
        session:n,
        appId:a,
        urlQuery:o,
        parentType:d
      }=e,
      c=(0,v.I0)(),
      u=(null==n?void 0:null===(t=n.userProperty)||void 0===t?void 0:t.uxcamuserid)||"",
      p=(0,s.useMemo)(()=>{
        if(!(null==n?void 0:n.userProperty))return null;
        let e=(0,f.pe)(null==n?void 0:n.userProperty);
        return(0,i.jsx)(l.Z,{
          title:e.tooltip,
          children:(0,i.jsx)("span",{
            className:"text-ellipsis",
            style:{
              fontStyle:e.tooltip?"italic":"normal"
            },
            children:e.content
          })
        })
      },[null==n?void 0:n.userProperty]);
      return(0,s.useMemo)(()=>o.shareSessionKey?p:(0,i.jsx)(r(),{
        href:{
          pathname:"/integration",
          query:{
            appId:a,
            parentType:"usersList",
            uxcamuserid:u,
            sessionPage:1,
            userpage:1
          }
        },
        as:"/app/".concat(a,"/users/list/1/").concat(u),
        passHref:!0,
        legacyBehavior:!0,
        children:(0,i.jsx)("a",{
          href:"#!",
          onClick:()=>{
            "eventsList"===d&&c((0,x.Fn)("appuser")),
            c((0,m.CW)(null,{
              eventName:"wa_sessions_click_user",
              track_type:"event",
              pageName:d,
              eventProperty:{
                userId:u,
                sessionId:null==n?void 0:n.sessionid
              }
            }))
          },
          children:p
        })
      }),[o.shareSessionKey,p,a,u,d,c,null==n?void 0:n.sessionid])
    },
    O=e=>{
      let{
        sessionDetails:t,
        pageSegment:n,
        isClickableLink:l=!0
      }=e;
      return(0,s.useMemo)(()=>{
        let e=(null==t?void 0:t.city)||"Undetermined City",
        s=(null==t?void 0:t.country)||"N/A",
        a=(null==t?void 0:t.city)==="N/A"?"device_country":"device_city",
        o=(null==t?void 0:t.city)==="N/A"?null==t?void 0:t.country:null==t?void 0:t.city,
        r="Location is ".concat((null==t?void 0:t.city)==="N/A"?"Undetermined city":null==t?void 0:t.city,", ").concat((null==t?void 0:t.country)||"N/A");
        return(0,i.jsxs)(g.Km,{
          children:[(0,i.jsx)(u.Z,{})," ",(0,i.jsxs)(c.Z,{
            segment:n,
            _attribute:a,
            __value:o,
            tooltipTitle_value:r,
            _operator:"in",
            table:"session",
            isClickableLink:l,
            _isNotArrayFormat:!1,
            children:[e,", ",s]
          })]
        })
      },[l,n,null==t?void 0:t.city,null==t?void 0:t.country])
    },
    Q=e=>{
      let{
        sessionDetails:t,
        pageSegment:n,
        isClickableLink:l=!0,
        isV2:a=!1,
        parentType:o
      }=e;
      return(0,s.useMemo)(()=>{
        let e=null==t?void 0:t.deviceLocalDateTime,
        s=e&&(0,d.dT)(e,"yyyy-MM-dd"),
        r=e&&(0,d.dT)(e,"dd-MMMM-yyyy"),
        u=e&&(0,d.dT)(e,"MMM d, yyyy"),
        h=e&&(0,d.dT)(e,"EEEE hh:mm a"),
        m="Device time: ".concat(h,", ").concat(r);
        if(a){
          var x,
          v;
          let e=(null==t?void 0:t.deviceLocalDateTime)&&(0,f.I1)(t.deviceLocalDateTime,t.userTimezone);
          u=e&&e[0];
          let n=((null==h?void 0:h.split(" "))||[])[0]||"",
          i=e&&(null===(v=e[1])||void 0===v?void 0:null===(x=v.split(",")[1])||void 0===x?void 0:x.trim())||"",
          s=(null==t?void 0:t.deviceLocalDateTime)&&new Date(t.deviceLocalDateTime).getFullYear(),
          l=e&&e[2]||"",
          a=e&&e[1]||"";
          m="Device time: ".concat(n,", ").concat(null==a?void 0:a.split(",")[0],", ").concat(s," at ").concat(i," ").concat(l)
        }
        let b=["eventsList","nocodeEventsList"].includes(o)?"event_recordedon":"session_recordedon";
        return(0,i.jsxs)(g.Km,{
          children:[(0,i.jsx)(p.Z,{}),(0,i.jsx)(c.Z,{
            segment:n,
            _attribute:b,
            __value:s,
            _operator:"on",
            _isNotArrayFormat:!0,
            tooltipTitle_value:m,
            table:"session",
            isClickableLink:l,
            children:u
          })]
        })
      },[t.deviceLocalDateTime,t.userTimezone,a,o,n,l])
    },
    q=e=>{
      let{
        labelSession:t,
        showCustomLabel:n,
        setShowCustomLabel:s
      }=e;
      return(0,i.jsx)(g.Km,{
        "data-intercom-target":"Session Label",
        children:(0,i.jsx)("span",{
          "aria-hidden":"true",
          onClick:()=>s(!n),
          className:"labels-nav",
          children:(0,i.jsx)(l.Z,{
            overlayClassName:"session-label-tooltip",
            title:"Session Labels",
            placement:"bottom",
            children:(0,i.jsxs)(g.hB,{
              children:[(0,i.jsx)(h.Z,{}),"Labels",(0,i.jsx)(a.Z,{
                count:(null==t?void 0:t.length)||0
              })]
            })
          })
        })
      })
    },
    K=e=>{
      let{
        isCrashLog:t,
        totalBugs:n,
        anrMenu:s
      }=e;
      return t||(null==n?void 0:n.length)||(null==s?void 0:s.length)?(0,i.jsx)(g.Km,{
        value:!!((null==n?void 0:n.length)>0&&(null==s?void 0:s.length)),
        children:(0,i.jsx)(R,{
          isCrashLog:t,
          totalBugs:n,
          anrMenu:s
        })
      }):null
    }
  },
  9257:function(e,t,n){
    n.d(t,{
      Km:function(){
        return l
      },
      h4:function(){
        return s
      },
      hB:function(){
        return a
      }
    });
    var i=n(19521);
    let s=i.default.div.withConfig({
      componentId:"sc-d43807ee-0"
    })(["overflow-x:auto;display:flex;max-width:100%;height:55px;border-bottom:1px solid rgba(165,165,165,0.2);align-items:center;padding:0 16px;padding-bottom:0;flex-shrink:0;display:flex;align-items:center;gap:20px;&::-webkit-scrollbar{width:5px;height:5px;}&::-webkit-scrollbar-track{border-radius:6px;}&::-webkit-scrollbar-thumb{background-color:#babec5;border-radius:6px;transition:background-color 1s;&:hover{background-color:#747c8b;}}"]),
    l=i.default.div.withConfig({
      componentId:"sc-d43807ee-1"
    })(["white-space:nowrap;color:#737886;font-size:12px;display:flex;align-items:center;&:hover{color:#5D97FF;a{color:#5D97FF;}.labels-nav{}}.user-icon{margin-right:4px;}.anticon{margin-right:4px;}a{color:#49576E;}&:first-of-type{font-weight:500;}&:last-of-type{margin:0;}.labels-nav{cursor:pointer;svg{position:relative;}.ant-badge{margin-left:2px;position:relative;top:-1px;.ant-badge-count{min-width:16px;height:16px;line-height:16px;border-radius:8px;background:#5D97FF;padding:0px 2px;}}}.ant-dropdown-trigger{display:inline-flex;align-items:center;line-height:normal;cursor:pointer;&:first-child{margin-right:",";margin-left:",";}svg{margin-left:5px;}span{display:flex;align-items:center;margin-right:5px;}}"],e=>(null==e?void 0:e.value)!==!0?"0px":"24px",e=>(null==e?void 0:e.value)!==!0?"0px":"15px"),
    a=i.default.span.withConfig({
      componentId:"sc-d43807ee-2"
    })(["display:flex;align-items:center;.ant-badge{margin-left:4px !important;}"])
  },
  55668:function(e,t,n){
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsxs)("svg",{
      "data-name":"Layer 1",
      xmlns:"http://www.w3.org/2000/svg",
      width:20,
      viewBox:"0 0 16 16",
      ...e,
      children:[(0,i.jsx)("path",{
        d:"M8 0c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8Z",
        style:{
          fill:"#fff"
        }
      }),(0,i.jsx)("path",{
        d:"M13.58 12.61 8.38 2.22a.41.41 0 0 0-.16-.16.428.428 0 0 0-.44 0 .49.49 0 0 0-.16.16l-5.2 10.39c-.03.06-.05.14-.05.21 0 .06 0 .11.03.17.02.05.05.1.09.14.04.04.09.07.14.1.05.02.11.04.16.04h10.42c.06 0 .11-.01.16-.04a.45.45 0 0 0 .23-.24.467.467 0 0 0-.02-.38ZM9.04 9.13l-.62 1.26s-.01.03-.01.04 0 .03.01.04c0 .02.01.03.02.04.01.01.02.02.04.03l.32.14s.08.05.1.09c.03.04.04.08.04.13s-.01.09-.04.13c-.03.04-.06.07-.1.09l-1.17.47h-.09s-.09-.01-.13-.04a.244.244 0 0 1-.09-.11l-.47-1.17s-.02-.09-.01-.14c0-.05.03-.09.06-.12s.08-.05.12-.06.09 0 .14.01l.47.2s.06.01.09 0a.09.09 0 0 0 .06-.06l.5-1.03s.02-.04.02-.06 0-.04-.02-.06c0-.02-.02-.03-.04-.04-.02 0-.04-.02-.06-.01h-.89c-.11 0-.22-.02-.32-.07a.75.75 0 0 1-.25-.22c-.05-.1-.08-.21-.08-.32s.03-.22.08-.32l1.21-2.62s.05-.08.08-.11.07-.06.12-.07.09-.02.14-.02c.05 0 .09.01.13.03.04.02.08.05.11.08s.06.07.07.12c.02.04.02.09.02.14 0 .05-.01.09-.03.13l-1.1 2.38s-.01.04-.01.06 0 .04.01.06c.01.02.03.03.04.04.02 0 .04.02.06.02h.89c.11 0 .22.02.32.07s.18.13.25.22c.06.1.09.21.09.32 0 .11-.03.22-.08.32Z",
        style:{
          fill:"#f15a4d"
        }
      })]
    })
  },
  83967:function(e,t,n){
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsx)("svg",{
      width:25,
      height:24,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M16.636 7.519a15.67 15.67 0 0 0-.011-.437c-.022-.537-.39-1.033-1-1.07a7.575 7.575 0 0 0-.909 0c-.61.037-.978.533-1 1.07l-.008.257a45.374 45.374 0 0 0-1.877 0 15.677 15.677 0 0 0-.008-.257c-.022-.537-.389-1.033-1-1.07a7.581 7.581 0 0 0-.909 0c-.61.037-.978.533-1 1.07-.005.128-.01.275-.011.437-.161.017-.308.036-.441.053A1.688 1.688 0 0 0 7 9.018c-.11.776-.233 2.002-.233 3.647 0 1.644.122 2.87.233 3.646.11.765.699 1.344 1.462 1.446.853.114 2.272.243 4.308.243s3.454-.13 4.307-.243a1.688 1.688 0 0 0 1.462-1.446c.111-.776.233-2.002.233-3.646 0-1.645-.122-2.87-.233-3.647a1.688 1.688 0 0 0-1.462-1.446c-.133-.017-.28-.036-.44-.053Zm-6.868 4.479a.6.6 0 0 1 .6-.6h4.803a.6.6 0 0 1 0 1.2h-4.802a.6.6 0 0 1-.6-.6Zm.6 2.067a.6.6 0 0 0 0 1.2h2.402a.6.6 0 0 0 0-1.2h-2.401Z",
        fill:"#737886"
      })
    })
  },
  25161:function(e,t,n){
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsx)("svg",{
      width:25,
      height:25,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M17.575 6.432a32.26 32.26 0 0 0-4.202.034 1.78 1.78 0 0 0-.975.377c-.803.633-2.883 2.38-4.983 5.032-.456.577-.523 1.38-.049 1.998.362.47.947 1.17 1.884 2.17 1.092 1.165 1.862 1.786 2.361 2.117.549.363 1.191.237 1.646-.107 2.79-2.111 4.6-4.324 5.23-5.152.212-.277.332-.604.358-.945.055-.745.148-2.406.035-4.22a1.392 1.392 0 0 0-1.305-1.304Zm-2.081 2.46a.926.926 0 1 1 1.852 0 .926.926 0 0 1-1.852 0Z",
        fill:"#737886"
      })
    })
  },
  52537:function(e,t,n){
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsx)("svg",{
      width:25,
      height:25,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,i.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M7.787 10.077a5.2 5.2 0 1 1 10.4 0c0 1.728-.786 3.33-1.692 4.612-.91 1.287-1.978 2.3-2.62 2.855a1.35 1.35 0 0 1-1.777 0c-.641-.556-1.709-1.568-2.62-2.856-.905-1.28-1.69-2.883-1.69-4.61Zm7.128-.276a1.929 1.929 0 1 1-3.857 0 1.929 1.929 0 0 1 3.857 0Z",
        fill:"#737886"
      })
    })
  },
  873:function(e,t,n){
    var i=n(85893);
    n(67294),
    t.Z=e=>(0,i.jsxs)("svg",{
      width:25,
      height:25,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,i.jsx)("circle",{
        cx:12.25,
        cy:12.323,
        r:12,
        fill:"#5D97FF"
      }),(0,i.jsx)("path",{
        d:"M10.656 6.897a1.388 1.388 0 0 0-1.306-.102c-.17.07-.326.172-.456.298a1.368 1.368 0 0 0-.423.985v8.486c-.002.183.034.364.107.534.073.17.18.324.316.454.135.125.29.228.462.303.297.128.633.148.944.055.134-.041.262-.1.38-.176l6.708-4.324c.204-.127.368-.304.476-.51a1.412 1.412 0 0 0-.008-1.345 1.376 1.376 0 0 0-.491-.502l-6.709-4.156Z",
        fill:"#fff"
      })]
    })
  }
}]);