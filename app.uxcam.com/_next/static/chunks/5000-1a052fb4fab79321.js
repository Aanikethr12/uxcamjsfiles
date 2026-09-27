"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5e3],{
  85e3:function(e,t,n){
    n.r(t);
    var r=n(85893),
    i=n(67294),
    l=n(14416),
    o=n(47639),
    s=n(15948),
    a=n(79870),
    d=n(39618),
    c=n(48203),
    u=n(74936),
    p=n(18879),
    m=n(96820),
    f=n(76633),
    h=n(67287),
    x=n(84620),
    g=n(44908),
    b=n.n(g),
    v=n(63105),
    C=n.n(v),
    y=n(64721),
    j=n.n(y),
    w=n(30663),
    k=n(91966),
    I=n.n(k),
    N=n(19521),
    S=n(47707),
    F=n(55931),
    _=n(92980),
    P=n(39171),
    Z=n(99133),
    E=n(42554);
    let D=N.default.div.withConfig({
      componentId:"sc-33513783-0"
    })(["overflow:auto;overflow-x:hidden;"]),
    O="preference/column-update",
    z=["event_name","name","lastseen","sessionhashofuser","relevance_score"];
    t.default=e=>{
      let{
        type:t,
        saveLocally:n=!1,
        setLocalHeaders:g=()=>{},
        closeLocal:v=()=>{},
        appid:y,
        setLoading:k,
        setDropdownVisibility:N,
        headers:M,
        dropdownVisible:T,
        showAddCustomUserButton:H,
        showAddCustomEventButton:A,
        minWidth:R=250,
        onResetSuccess:V
      }=e,
      J=(0,l.I0)(),
      {
        mutate:L,
        isLoading:U,
        status:W
      }=(0,m.QP)(),
      Y=(0,F.e)("web"),
      {
        parentType:K
      }=(0,l.v9)(e=>e.urlReducer),
      q=(0,i.useCallback)(()=>null==M?void 0:M.map(e=>({
        ...e,
        title:_.oR[e.title]||e.title
      })),[M]),
      [B,X]=(0,i.useState)(q),
      [$,G]=(0,i.useState)({
        checkedEvent:!1,
        dragEvent:!1
      }),
      {
        openModal:Q,
        setOpenModal:ee,
        CustomPropertyModal:et
      }=(0,P.Z)(),
      [en,er]=(0,i.useState)(""),
      [ei,el]=(0,i.useState)([]),
      [eo,es]=(0,i.useState)([]),
      [ea,ed]=(0,i.useState)([]),
      [ec,eu]=(0,i.useState)([]),
      {
        customPropertiesSelectOptions:ep,
        filterOutUnslectedCustom:em,
        filteredOutPositionArray:ef,
        customPropsPresentInHeader:eh,
        getColumnUpdateObject:ex,
        existingCustomEventProps:eg,
        existingCustomUserProps:eb,
        stripCustomPropertyAndMapLabel:ev
      }=(0,E.gx)({
        headers:B||[],
        modalType:en,
        selectedCustomProps:"user"===en?ea:eo,
        overallSelectedCustomProps:[...ea,...eo],
        excludeEventProps:"eventsList"!==K
      }),
      [eC,ey]=(0,i.useState)(!1),
      [ej,ew]=(0,i.useState)(""),
      [ek,eI]=(0,i.useState)(null),
      eN=(0,i.useMemo)(()=>C()((0,S.Es)(ep,"user"===en?ea:eo),e=>0===ej.length||j()(ev(e).toLowerCase(),ej.toLowerCase())),[ej,ep,en,ev]),
      eS=e=>z.includes(null==e?void 0:e.attribute),
      eF=(0,i.useCallback)((e,t,n,r,i)=>{
        if(t){
          if(!r.includes(e)){
            let t=[...r,e];
            i(t),
            en===n&&el(t)
          }
        }
        else{
          let t=C()(r,t=>t!==e);
          i(t),
          en===n&&el(t)
        }
      },[en]),
      e_=(0,i.useCallback)(async e=>{
        G({
          ...$,
          checkedEvent:!0
        });
        let t=e.target.value,
        n=e.target.checked,
        r=B.findIndex(e=>e.attribute===t);
        B[r].isVisible=n,
        X([...B]);
        let i=B[r];
        i.isCustomUserProperty?eF(t,n,"user",ea,ed):i.isCustomEventProperty&&eF(t,n,"event",eo,es),
        n&&eI(t)
      },[B,$,ea,eo,eF]),
      eP=(e,t)=>{
        X((0,f.HP)(B,e,t))
      },
      eZ=(0,i.useCallback)(()=>{
        let e={
          appid:y,
          table:(0,f.rI)(t),
          is_reset:!0
        };
        if(n){
          let e="";
          try{
            e=sessionStorage.getItem("aiDefaultHeaders")
          }
          catch(e){}if(e){
            let t=JSON.parse(e);
            X(t),
            g(t),
            ed([]);
            try{
              sessionStorage.setItem("aiHeaders",e)
            }
            catch(e){}
          }
          v()
        }
        else L({
          data:e,
          url:O,
          type:t
        },{
          onSuccess:()=>{
            null==V||V()
          }
        })
      },[y,n,L,t,Y,v,g,V]),
      eE=(0,i.useCallback)(async e=>{
        let r=[],
        i=[];
        await $.checkedEvent&&C()(em,e=>{
          r.push(ex(e))
        }),
        C()(ef,e=>i.push(e.attribute));
        let l={
          appid:y,
          visibility:$.checkedEvent?r:em.map(e=>ex(e)),
          position:b()(i),
          table:(0,f.rI)(t)
        };
        if(ek&&J((0,w.CW)(null,{
          eventName:"wa_column_add",
          track_type:"event",
          eventProperty:{
            column_name:ek
          }
        })),n){
          let e=(0,E.Jy)(B,l);
          g(e),
          X(e);
          try{
            sessionStorage.setItem("aiHeaders",JSON.stringify(e))
          }
          catch(e){}ee(!1),
          v()
        }
        else L({
          data:l,
          url:O,
          type:t
        },{
          onError:e=>{
            console.error(e)
          }
        });
        J((0,o.hI)({
          action:"Changed column setup on ".concat(p.e5[K]," page")
        })),
        "boolean"==typeof e&&e&&J((0,w.CW)(null,{
          eventName:"user"===en?"wa_custom_user_property":"wa_custom_event_property",
          track_type:"event",
          eventProperty:{
            property_added:"user"===en?ea:eo,
            property_removed:I()(ec,ei)
          }
        }))
      },[B,ek,null==$?void 0:$.checkedEvent,eo,ea,ef,E.Jy,g,v]),
      eD=()=>N(!1);
      (0,i.useEffect)(()=>{
        k(U)
      },[U]),
      (0,i.useEffect)(()=>{
        T?(es(eg),ed(eb)):X(q)
      },[T]),
      (0,i.useEffect)(()=>{
        "user"===en?el(ea):el(eo)
      },[en,ea,eo]),
      (0,i.useEffect)(()=>{
        "success"===W&&(X(q),N(!1),Q&&ee(!1))
      },[W]);
      let eO=(0,i.useRef)(!1);
      (0,i.useEffect)(()=>{
        n&&!eO.current&&JSON.stringify(M)!==JSON.stringify(B)&&(X(M),eO.current=!0)
      },[M,B,n]);
      let ez=(0,i.useCallback)(()=>"event"===en?"event":"user",[en]),
      eM=(0,i.useCallback)(e=>{
        let t=C()(B,t=>!j()(t.attribute,e.attribute)),
        r=C()(eb,t=>!j()(t,e.attribute)),
        i=C()(eg,t=>!j()(t,e.attribute));
        if(n){
          g(t);
          try{
            sessionStorage.setItem("aiHeaders",JSON.stringify(t))
          }
          catch(e){}
        }
        X(t),
        e.isCustomEventProperty?es(i):e.isCustomUserProperty&&ed(r)
      },[B,eb,eg]),
      eT=(0,i.useCallback)(e=>(0,r.jsxs)(r.Fragment,{
        children:[(0,r.jsxs)(Z.fv,{
          onKeyDown:e=>{
            8===e.keyCode&&e.stopPropagation()
          },
          children:[(0,r.jsx)(h.Z,{}),(0,r.jsx)(Z.Mj,{
            placeholder:"Search",
            debounceTimeout:500,
            minLength:1,
            value:ej,
            onChange:e=>{
              ew(e.target.value)
            }
          })]
        }),e]
      }),[ej]);
      return(0,r.jsxs)(r.Fragment,{
        children:[(0,r.jsx)(et,{
          title:"Choose custom ".concat(ez()," properties"),
          subtitle:"You can add a maximum of 3 properties",
          handleOk:()=>{
            eE(!0)
          },
          handleCancel:()=>{
            ew(""),
            el("user"===en?eb:eg)
          },
          disabled:ei.length>3,
          children:(0,r.jsx)(a.default,{
            placeholder:"Select custom ".concat(en," properties"),
            dropdownRender:eT,
            onInputKeyDown:e=>{
              8===e.keyCode&&e.stopPropagation()
            },
            notFoundContent:(0,r.jsx)(Z.H,{
              children:"No matching filter"
            }),
            showArrow:!0,
            showSearch:!1,
            value:"user"===en?ea:eo,
            open:eC,
            onDropdownVisibleChange:e=>ey(e),
            mode:"multiple",
            getPopupContainer:e=>e.parentNode,
            onChange:e=>{
              "event"===en?es(e):ed(e),
              eu(ei),
              el(e)
            },
            optionLabelProp:"label",
            menuItemSelectedIcon:null,
            children:eN.length&&eN.map(e=>(0,r.jsxs)(a.default.Option,{
              value:e,
              label:ev(e),
              disabled:ei.length>=3&&!ei.includes(e),
              children:[(0,r.jsx)(d.default,{
                checked:ei.includes(e)
              }),ev(e)]
            },e))
          })
        }),(0,r.jsxs)(Z.fh,{
          children:[(0,r.jsx)(s.Z5,{
            onDragEnd:e=>{
              var t;
              let n=B[null==e?void 0:null===(t=e.destination)||void 0===t?void 0:t.index];
              !(!e.destination||eS(n))&&(G({
                ...$,
                dragEvent:!0
              }),n.isDraggable&&eP(e.source.index,e.destination.index))
            },
            children:(0,r.jsx)(s.bK,{
              droppableId:"droppable",
              children:(e,t)=>(0,r.jsx)(D,{
                className:"column-wrapper",
                children:(0,r.jsxs)("div",{
                  ref:e.innerRef,
                  style:(0,f.lr)(t.isDraggingOver,R),
                  className:"column-order-menu",
                  children:[B&&B.map((e,t)=>(0,r.jsx)(s._l,{
                    draggableId:t,
                    isDragDisabled:eS(e)||!(null==e?void 0:e.isDraggable),
                    disableInteractiveElementBlocking:!0,
                    index:t,
                    children:(t,n)=>(0,r.jsxs)("div",{
                      className:"column-reorder-dropdown-row",
                      children:[(0,r.jsxs)("div",{
                        className:"column-edit-items",
                        ref:t.innerRef,
                        style:(0,f.gI)(t.draggableProps.style,n.isDraggingOver),
                        ...t.dragHandleProps,
                        ...t.draggableProps,
                        children:[(0,r.jsx)(d.default,{
                          checked:e.isVisible,
                          value:e.attribute,
                          disabled:eS(e),
                          onChange:e_,
                          children:e.isCustomUserProperty||e.isCustomEventProperty?(0,r.jsx)(c.Z,{
                            title:"Custom ".concat(e.isCustomUserProperty?"user":"event"," property"),
                            children:(0,r.jsx)("div",{
                              className:"label-wrapper",
                              children:(0,r.jsxs)("em",{
                                children:[e.title," ",e.subTitle?e.subTitle:""]
                              })
                            })
                          }):"".concat(e.title," ").concat(e.subTitle?e.subTitle:"")
                        }),(0,r.jsxs)(Z.nM,{
                          children:[e.isDraggable&&(0,r.jsx)("a",{
                            href:"#!",
                            className:"movable-handle",
                            children:(0,r.jsx)(Z.hX,{})
                          }),e.isCustomUserProperty||e.isCustomEventProperty?(0,r.jsx)(Z.xZ,{
                            onClick:()=>{
                              eM(e)
                            },
                            children:(0,r.jsx)(x.Z,{})
                          }):null]
                        })]
                      }),t.placeholder]
                    })
                  },e.attribute)),e.placeholder]
                })
              })
            })
          }),(0,r.jsxs)("div",{
            children:[A?(0,r.jsxs)(Z.te,{
              onClick:()=>{
                er("event"),
                es(eh("event")),
                ee(!0)
              },
              children:[(0,r.jsx)("img",{
                src:"/static/circle-plus.svg",
                alt:"add-icon"
              }),"Add custom event properties"]
            }):null,H?(0,r.jsxs)(Z.te,{
              onClick:()=>{
                er("user"),
                ed(eh("user")),
                ee(!0)
              },
              children:[(0,r.jsx)("img",{
                src:"/static/circle-plus.svg",
                alt:"add-icon"
              }),"Add custom user properties"]
            }):null,(0,r.jsxs)(Z.W4,{
              "data-element":"column-reorder-button-wrapper",
              children:[(0,r.jsx)(u.Z,{
                type:"link",
                className:"reset-btn",
                onClick:()=>{
                  eZ(),
                  eD()
                },
                children:"Reset"
              }),(0,r.jsx)(u.Z,{
                type:"primary",
                className:"done-btn",
                onClick:eE,
                children:"Apply"
              })]
            })]
          })]
        })]
      })
    }
  },
  99133:function(e,t,n){
    n.d(t,{
      H:function(){
        return m
      },
      Mj:function(){
        return c
      },
      W4:function(){
        return p
      },
      fh:function(){
        return f
      },
      fv:function(){
        return u
      },
      hX:function(){
        return o
      },
      nM:function(){
        return a
      },
      te:function(){
        return s
      },
      xZ:function(){
        return d
      }
    });
    var r=n(19521),
    i=n(67282),
    l=n(775);
    let o=(0,r.default)(i.Z).withConfig({
      componentId:"sc-866d00d0-0"
    })(["font-size:12px;color:#737886;"]),
    s=r.default.button.withConfig({
      componentId:"sc-866d00d0-1"
    })(["display:flex;align-items:center;gap:6px;padding:6px 10px;padding-bottom:0;color:#5D97FF;font-size:12px;border:none;outline:none;background-color:transparent;cursor:pointer;&:hover{color:#337AFF;}"]),
    a=r.default.span.withConfig({
      componentId:"sc-866d00d0-2"
    })(["display:flex;align-items:center;gap:10px;font-size:12px;"]),
    d=r.default.button.withConfig({
      componentId:"sc-866d00d0-3"
    })(["outline:none;border:none;background:transparent;padding:0;color:#DC4F44;font-size:12px;cursor:pointer;"]),
    c=(0,r.default)(l.DebounceInput).withConfig({
      componentId:"sc-866d00d0-4"
    })(["border:none;outline:none;border-radius:6px;background-color:#F2F2F299;height:30px;padding:8px 10px;padding-left:28px;width:100%;"]),
    u=r.default.div.withConfig({
      componentId:"sc-866d00d0-5"
    })(["margin:8px;position:relative;display:flex;align-items:center;.anticon{position:absolute;left:8px;color:#828282;}"]),
    p=r.default.div.withConfig({
      componentId:"sc-866d00d0-6"
    })(["padding:10px;display:flex;justify-content:flex-end;gap:16px;button{height:26px;padding:6px 10px;display:flex;justify-content:center;align-items:center;border-radius:4px;flex:1;font-size:12px;}.reset-btn{border:none;}.cancel-btn{border-color:$purple;color:$purple;background:#fff;box-shadow:none !important;text-shadow:none !important;text-transform:none;}.ant-btn-link{color:#5C97FF;}.ant-btn-link:hover{border-color:#fff;color:#337aff;}"]),
    m=r.default.p.withConfig({
      componentId:"sc-866d00d0-7"
    })(["margin:0;font-size:12px;"]),
    f=r.default.div.withConfig({
      componentId:"sc-866d00d0-8"
    })(["display:flex;flex:1;flex-direction:column;max-height:100%;.column-wrapper{margin-bottom:4px;}"])
  },
  47707:function(e,t,n){
    n.d(t,{
      Uv:function(){
        return ec
      },
      cG:function(){
        return eu
      },
      YO:function(){
        return ef
      },
      Hb:function(){
        return ea
      },
      kX:function(){
        return ep
      },
      cL:function(){
        return eh
      },
      $$:function(){
        return eg
      },
      Gv:function(){
        return ex
      },
      xl:function(){
        return ed
      },
      Wy:function(){
        return ev
      },
      Es:function(){
        return eb
      }
    });
    var r=n(85893),
    i=n(67294),
    l=n(14416),
    o=n(68457),
    s=n(79870),
    a=n(80432),
    d=n(48203),
    c=n(12016),
    u=n(74936),
    p=n(67287),
    m=n(16614),
    f=n(60063),
    h=n(775),
    x=n(7436),
    g=n.n(x),
    b=n(13218),
    v=n.n(b),
    C=n(1469),
    y=n.n(C),
    j=n(30381),
    w=n.n(j),
    k=n(1069),
    I=n(94184),
    N=n.n(I),
    S=n(92980),
    F=n(12810),
    _=n(24571),
    P=n(89830);
    let Z=function(e,t){
      let n=!(arguments.length>2)||void 0===arguments[2]||arguments[2];
      return n?"".concat(w().utc(e).toISOString().split(".")[0],"Z"):"start"===t?"".concat(w().utc(e).startOf("day").toISOString().split(".")[0],"Z"):"".concat(w().utc(e).endOf("day").toISOString().split(".")[0],"Z")
    };
    var E=n(49470),
    D=n(19521),
    O=n(57043),
    z=n.n(O),
    M=n(91966),
    T=n.n(M),
    H=n(25325),
    A=n.n(H),
    R=n(93386),
    V=n.n(R),
    J=n(63105),
    L=n.n(J),
    U=n(89734),
    W=n.n(U),
    Y=n(64721),
    K=n.n(Y),
    q=n(53857),
    B=n(11163),
    X=n.n(B),
    $=n(52128),
    G=n(89741),
    Q=n(71353);
    D.default.span.withConfig({
      componentId:"sc-ae1339b5-0"
    })(["color:#5D97FF !important;font-weight:600;padding:0 1px;"]);
    let ee=D.default.span.withConfig({
      componentId:"sc-a7073548-0"
    })(['display:inline-flex;flex-direction:column;align-items:flex-start;border:none !important;a{height:20px;overflow:hidden;width:100%;text-overflow:ellipsis;}&.required{a{border-color:#F4584C;}&:after{content:"Required";color:#F4584C;font-size:12px;display:block;border:none !important;}&:focus-within a{outline:1px solid #5D97FF;}}']),
    et=D.default.button.withConfig({
      componentId:"sc-a7073548-1"
    })(["padding:0;border:none;background:none;display:flex;align-items:center;justify-content:center;height:16px;width:20px;position:absolute;right:4px;top:2.5px;background:white;z-index:1;cursor:pointer;svg{color:#5D97FF;}"]),
    en=o.default.Item,
    er=o.default.ItemGroup,
    ei=(0,P.default)(_.Z),
    {
      RangePicker:el
    }=ei,
    eo=e=>(0,k.Z)(e,"yyyy-MM-dd",new Date),
    es=e=>(0,k.Z)(e,"yyyy-MM-dd HH:mm:ss",new Date),
    ea=(0,i.memo)(e=>{
      let{
        children:t,
        spinning:n,
        className:i,
        style:l
      }=e;
      return t?(0,r.jsx)(E.Z,{
        show:n,
        message:(0,r.jsx)(F.Z,{
          size:12
        }),
        className:"ant-spin-container ".concat(i||""),
        style:l,
        backgroundStyle:{
          backgroundColor:"rgba(255, 255, 255, 0.4)",
          height:"120px",
          paddingTop:"10px"
        },
        children:t
      }):(0,r.jsx)("div",{
        style:{
          width:"100%",
          height:"260px"
        },
        children:(0,r.jsx)(F.Z,{
          size:12
        })
      })
    }),
    ed=(0,i.memo)(e=>{
      let{
        placeholder:t,
        value:n,
        handleChange:l,
        maxTagCount:o=2,
        numeric:d=!0,
        tokenSeparators:c=[","," "],
        disabled:u=!1
      }=e;
      return(0,r.jsx)(s.default,{
        mode:"tags",
        placeholder:t,
        className:"filter-select-input",
        dropdownClassName:"filter-input-dropdown increased-dropdown-zIndex",
        maxTagCount:o,
        value:n,
        onSelect:(0,i.useCallback)(e=>d&&!S.X1.test(e)&&a.ZP.error("Only numbers are allowed!"),[d]),
        onChange:l,
        notFoundContent:null,
        autoFocus:!0,
        style:{
          minWidth:170
        },
        tokenSeparators:c,
        disabled:u
      })
    }),
    ec=(0,i.memo)(e=>{
      let{
        selectedOperator:t,
        onDateChange:n,
        defaultValue:i,
        editFieldVisibility:l,
        fromMegaFilter:o,
        disabled:s
      }=e,
      a=null,
      d=i;
      return y()(d)&&(a=[es((d=JSON.parse(JSON.stringify(d=d.map(e=>w().utc(e).format("YYYY-MM-DD HH:mm:ss")))))[0]),es(d[1])]),
      v()(d)&&d.lower&&(a=[eo(d.lower),eo(d.upper)]),
      (null==t?void 0:t.attribute)==="between"?(0,r.jsx)(el,{
        format:S.yP,
        dropdownClassName:"increased-dropdown-zIndex date-picker-zIndex",
        disabledDate:S.Q8||s,
        onChange:(e,t)=>{
          n([...t].map((e,t)=>Z(e,0===t&&"start",!o)),!0)
        },
        defaultValue:a,
        defaultOpen:l,
        placeholder:["From","To"],
        clearIcon:!1,
        locale:S.cO
      }):(0,r.jsx)(ei,{
        format:S.vc,
        disabledDate:S.Q8||s,
        dropdownClassName:"increased-dropdown-zIndex date-picker-zIndex",
        onChange:(e,t)=>n(t),
        defaultValue:!d||v()(d)?null:eo(d),
        defaultOpen:l,
        clearIcon:!1,
        locale:S.cO
      })
    }),
    eu=(0,i.memo)(e=>{
      let{
        debounceTimeout:t=500,
        className:n,
        autoFocus:i=!0,
        placeholder:l="Input text",
        onPressEnter:o,
        onChange:s,
        defaultValue:a,
        value:d,
        style:c,
        prefix:u,
        suffix:p,
        onClick:m,
        onBlur:f,
        onMouseLeave:x,
        editFieldVisibility:g,
        min:b,
        type:v,
        disabled:C,
        inputRef:y
      }=e;
      return(0,r.jsxs)(r.Fragment,{
        children:[u,(0,r.jsx)(h.DebounceInput,{
          inputRef:y,
          autoFocus:i,
          debounceTimeout:t,
          className:N()("ant-input debounce-input ".concat(n),{
            "input-with-search":u,
            "input-with-cross":g||p
          }),
          placeholder:l,
          onChange:s,
          defaultValue:a,
          value:d,
          style:c,
          onKeyDown:e=>{
            e.stopPropagation(),
            o&&"Enter"===e.key&&o(e)
          },
          onClick:m,
          onBlur:f,
          onMouseLeave:x,
          min:b,
          type:v,
          disabled:C
        }),p]
      })
    }),
    ep=(0,i.memo)(e=>{
      let{
        children:t,
        onChange:n,
        value:i,
        placeholder:l,
        id:o,
        title:s,
        editFieldVisibility:a,
        inputRef:d,
        isSequenceScreenFilter:c,
        onSequenceChange:u,
        sequenceNumber:m,
        disabled:f,
        isNumberExists:h,
        errorMessage:x,
        headerChildren:g
      }=e;
      return(0,r.jsx)(er,{
        title:null,
        className:"menu-second-level",
        children:(0,r.jsx)(er,{
          className:"menu-item-column submenu-search segment-menu-column",
          id:o,
          title:a?g?(0,r.jsx)("div",{
            className:"header-children",
            children:g
          }):(0,r.jsx)(r.Fragment,{}):(0,r.jsxs)("div",{
            className:"debounce-input-menu-item",
            children:[s&&!(null==s?void 0:s.includes("operator"))&&(0,r.jsx)("h4",{
              className:"user-properties-title",
              children:(0,r.jsx)("div",{
                children:s
              })
            }),c&&(0,r.jsxs)(r.Fragment,{
              children:[(0,r.jsx)(eu,{
                placeholder:"1",
                onChange:u,
                value:m,
                className:"mb-10"
              }),h&&(0,r.jsx)("p",{
                className:"index-error-message",
                children:"This number is already used. Try another one."
              }),x&&(0,r.jsx)("p",{
                className:"index-error-message",
                children:x
              })]
            }),l&&(0,r.jsx)(eu,{
              prefix:(0,r.jsx)(p.Z,{}),
              placeholder:l,
              onChange:n,
              value:i,
              maintainFocus:"menu-selected-key"===o,
              inputRef:d,
              disabled:f
            }),g?(0,r.jsx)("div",{
              className:"header-children",
              children:g
            }):(0,r.jsx)(r.Fragment,{})]
          }),
          children:t
        },o)
      })
    }),
    em=(0,i.memo)(e=>{
      let{
        appId:t,
        parentType:n
      }=e;
      return(0,r.jsx)(d.Z,{
        title:"Manage cohort",
        placement:"bottom",
        children:(0,r.jsx)(et,{
          type:"text",
          onClick:e=>{
            e.stopPropagation();
            let r="/app/".concat(t,"/retention/cohorts#manage?redirect_from_filter=").concat(n);
            X().push("/integration?".concat("appId=".concat(t,"&parentType=retention")),r)
          },
          children:(0,r.jsx)(q.Z,{})
        })
      })
    }),
    ef=(0,i.memo)(e=>{
      let{
        children:t,
        id:n,
        title:i,
        editFieldVisibility:l,
        appId:o,
        parentType:s
      }=e;
      return(0,r.jsx)(er,{
        title:null,
        className:"menu-second-level event-second-level",
        children:(0,r.jsx)(er,{
          className:"menu-item-column submenu-search segment-menu-column",
          id:n,
          title:!l&&(0,r.jsx)("div",{
            className:"debounce-input-menu-item",
            children:i&&!(null==i?void 0:i.includes("operator"))&&(0,r.jsxs)("h4",{
              className:"user-properties-title",
              children:[(0,r.jsx)("div",{
                children:i
              }),"cohort"===n&&(0,r.jsx)(em,{
                appId:o,
                parentType:s
              })]
            })
          }),
          children:t
        },n)
      })
    }),
    eh=(0,i.memo)(e=>{
      let{
        selectedOperator:t,
        operatorType:n,
        className:s,
        handleOperatorMenuClick:a,
        isFilterDisplayBar:p,
        propertyName:h,
        selectedAttribute:x=null,
        activityFilterProperty:b,
        isScreenProperty:v
      }=e,
      [C,y]=(0,i.useState)(!1),
      [j,w]=(0,i.useState)(""),
      {
        eventPropertyList:k
      }=(0,l.v9)(e=>e.commonReducer),
      I=j||n,
      {
        viewOnly:F,
        disabledFilterMessage:_
      }=(0,Q.b)(),
      P=I&&$.Hp[I];
      "integer"===j&&(P=P.filter(e=>{
        let{
          attribute:t
        }=e;
        return!["greater_or_equal","less_or_equal"].includes(t)
      })),
      v&&(P=P.filter(e=>{
        let{
          attribute:t
        }=e;
        return!["greater","less"].includes(t)
      })),
      P=(0,i.useMemo)(()=>(P||[]).filter(e=>{
        let{
          attribute:t
        }=e;
        return!["contains_any","not_contains_any"].includes(t)||!!["session_screen_list","screen_name"].includes(x)
      }),[P,x]);
      let Z=(0,i.useCallback)(e=>{
        y(!1),
        a(e,I,v)
      },[y,a,I,v]);
      (0,i.useEffect)(()=>{
        if(h){
          let e=g()(k,{
            propertyName:h
          });
          e>-1?w(k[e].propertyType):w("")
        }
        else w("")
      },[h]);
      let E=(0,i.useMemo)(()=>(null==P?void 0:P.length)&&P.map(e=>{
        let{
          display:t,
          attribute:n,
          format:i,
          title:l
        }=e;
        return t&&(0,r.jsx)(en,{
          format:i,
          children:l
        },n)
      }),[P]),
      D=(0,i.useMemo)(()=>!!(p&&S.p6.includes(I))&&(0,r.jsx)("span",{
        children:"is "
      }),[t,p,n]),
      O=(0,i.useMemo)(()=>Object.keys(S.RI).includes(null==t?void 0:t.attribute)?S.RI[null==t?void 0:t.attribute]:null==t?void 0:t.attribute,[t]);
      return(0,r.jsxs)(d.Z,{
        title:_,
        children:[D,(0,r.jsx)(c.Z,{
          trigger:["click"],
          overlayClassName:"increased-dropdown-zIndex select-operator-menu",
          overlay:(0,r.jsx)(o.default,{
            onClick:Z,
            selectedKeys:[null==t?void 0:t.attribute],
            children:(0,r.jsx)(ep,{
              title:"Select filter operator",
              id:"filter-operator",
              children:E
            })
          }),
          visible:C,
          onVisibleChange:y,
          disabled:F,
          children:p?(0,r.jsx)(ee,{
            id:b?b.id:void 0,
            children:(0,r.jsx)("a",{
              href:"#!",
              onClick:S.VC,
              className:N()(F&&"filter-input-disabled"),
              children:(null==t?void 0:t.title)==="select_activity"?(0,r.jsx)(G.I5,{
                children:"Select"
              }):null==t?void 0:t.title
            })
          }):(0,r.jsxs)(u.Z,{
            className:s,
            onClick:S.VC,
            children:[O,C?(0,r.jsx)(m.Z,{}):(0,r.jsx)(f.Z,{})]
          })
        })]
      })
    }),
    ex=(0,i.memo)(e=>{
      let{
        operatorAttribute:t,
        isOperatorRadio:n,
        newFetchedList:i,
        operatorType:l,
        handleSelectAllOptions:o,
        disableSelect:s,
        handleClearAllOptions:a,
        disableClear:d
      }=e,
      c=(0,D.default)(u.Z).withConfig({
        componentId:"sc-a7073548-2"
      })(["color:#5D97FF;padding:0;border:none;font-size:12px;font-weight:400;font-family:inter,sans-serif;&:hover,&:active,&:disabled{background:none !important;}"]),
      p=D.default.div.withConfig({
        componentId:"sc-a7073548-3"
      })(["display:flex;align-items:center;"]),
      m=D.default.span.withConfig({
        componentId:"sc-a7073548-4"
      })(["width:1px;height:1rem;background-color:#CCCCCC;margin:0 8px;"]);
      if(!(["contains","greater","less","not_contains"].includes(t)||["date"].includes(l))&&!n&&!((null==i?void 0:i.length)<=0))return(0,r.jsxs)(p,{
        children:[(0,r.jsx)(c,{
          size:"small",
          onClick:o,
          disabled:s,
          children:"Select all"
        }),(0,r.jsx)(m,{}),(0,r.jsx)(c,{
          size:"small",
          onClick:a,
          disabled:d,
          children:"Clear all"
        })]
      })
    }),
    eg=(0,i.memo)(e=>{
      let{
        text:t
      }=e,
      n=D.default.p.withConfig({
        componentId:"sc-a7073548-5"
      })(["font-size:12px;color:#A3A5AE;margin-bottom:4px;line-height:1rem;"]);
      return(0,r.jsx)(n,{
        children:t
      })
    });
    function eb(e,t,n){
      if(!e)return e;
      if(v()(e[0])){
        let r=L()(e,e=>{
          var r;
          return K()(t,null!==(r=e[n])&&void 0!==r?r:e.uxcamuserid)
        }),
        i=T()(e,r);
        return W()(r.concat(i),e=>{
          var r;
          return K()(t,null!==(r=e[n])&&void 0!==r?r:e.uxcamuserid)?0:1
        })
      }
      let r=A()(e,t),
      i=T()(e,r);
      return z()(r,i)
    }
    function ev(e,t,n){
      if(!e)return e;
      if(!v()(e[0])){
        let n=T()(t,e);
        return V()(n,e)
      }
      let r="uxcam_user_id"===n;
      if(!r&&"uxcamuserid"!==n)return e;
      let i=e.map(e=>{
        var t,
        n;
        return null!==(n=null!==(t=null==e?void 0:e.uxcamuserid)&&void 0!==t?t:null==e?void 0:e.id)&&void 0!==n?n:null==e?void 0:e.name
      }).filter(Boolean),
      l=(t||[]).filter(e=>!i.includes(e));
      return l.length?V()(l.map(e=>r?{
        uxcamuserid:e,
        hasCustomUserId:!0
      }:{
        uxcamuserid:e,
        name:e
      }),e):e
    }
  },
  89741:function(e,t,n){
    n.d(t,{
      Bd:function(){
        return s
      },
      I5:function(){
        return m
      },
      MF:function(){
        return c
      },
      j2:function(){
        return d
      },
      jb:function(){
        return u
      },
      lZ:function(){
        return a
      },
      rP:function(){
        return p
      }
    });
    var r=n(68457),
    i=n(74936),
    l=n(19521);
    let o=r.default.Item,
    s=l.default.span.withConfig({
      componentId:"sc-afef250b-0"
    })(["display:inline-flex;height:18px;align-items:baseline;font-weight:",";"],e=>{
      let{
        isBold:t
      }=e;
      return t?400:500
    }),
    a=l.default.span.withConfig({
      componentId:"sc-afef250b-1"
    })(["display:flex;margin:10px;max-width:232px;"]),
    d=l.default.div.withConfig({
      componentId:"sc-afef250b-2"
    })(["padding:15px 0 0;position:absolute;right:15px;bottom:15px;.ant-btn{height:28px;border-radius:4px;display:inline-flex;align-items:center;text-transform:none;margin-right:10px}"]),
    c=l.default.li.withConfig({
      componentId:"sc-afef250b-3"
    })(["padding:5px 10px;.ant-checkbox-wrapper{font-size:12px;}"]),
    u=(0,l.default)(i.Z).withConfig({
      componentId:"sc-afef250b-4"
    })(["width:150px;border:none;box-shadow:none;padding:0;text-align:start;align-items:center;font-size:14px;display:flex;.anticon{margin-right:6px;font-size:14px;}"]),
    p=(0,l.default)(o).withConfig({
      componentId:"sc-afef250b-5"
    })(["svg{width:18px;margin-right:10px;}"]),
    m=l.default.span.withConfig({
      componentId:"sc-afef250b-6"
    })(["display:inline-flex;align-items:baseline;font-weight:400;color:#A2A5AE;line-height:normal;padding:0px 4px;"])
  },
  71353:function(e,t,n){
    n.d(t,{
      N:function(){
        return s
      },
      b:function(){
        return a
      }
    });
    var r=n(85893),
    i=n(67294);
    let l={
      viewOnly:!1,
      disabledFilterMessage:"This filter can only be changed outside the player. Please navigate back to adjust."
    },
    o=(0,i.createContext)(l),
    s=e=>{
      let{
        children:t,
        viewOnly:n=!1
      }=e,
      s=(0,i.useMemo)(()=>({
        ...l,
        viewOnly:n,
        disabledFilterMessage:n?l.disabledFilterMessage:""
      }),[n]);
      return(0,r.jsx)(o.Provider,{
        value:s,
        children:t
      })
    },
    a=()=>{
      let e=(0,i.useContext)(o);
      if(void 0===e)throw Error("useAppliedFilterContext must be used within a AppliedFilterContextProvider");
      return e
    }
  }
}]);