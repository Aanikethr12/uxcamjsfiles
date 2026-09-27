"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1521],{
  4078:function(e,t,n){
    n.d(t,{
      gO:function(){
        return a
      }
    });
    var s=n(30381),
    i=n.n(s);
    let a=(e,t)=>{
      let n=i()(new Date).diff(new Date(e),"months",!0);
      return t&&n>t
    }
  },
  14811:function(e,t,n){
    n.d(t,{
      q:function(){
        return s
      }
    });
    let s=e=>(null==e?void 0:e.length)&&e.map(e=>{
      let t={
        ...e
      };
      if((null==t?void 0:t.attribute)==="event_count_per_screen_visit"||(null==t?void 0:t.attribute)==="smart_event_count_per_screen_visit"){
        var n;
        let s=null==e?void 0:e.filters,
        i=(null==s?void 0:s.length)>0&&(null==s?void 0:s.find(e=>(null==e?void 0:e.attribute)==="event_name"||(null==e?void 0:e.attribute)==="nce_name"));
        i&&(null==i?void 0:null===(n=i.value)||void 0===n?void 0:n.length)===0&&(t.filters=s.filter(e=>(null==e?void 0:e.attribute)!=="event_name"&&(null==e?void 0:e.attribute)!=="nce_name"))
      }
      return t
    })
  },
  23357:function(e,t,n){
    function s(e){
      let t=e;
      if("number"==typeof e&&(t=e.toString()),"string"!=typeof t)return"Invalid input";
      let n=t.split(".");
      return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),
      n.join(".")
    }
    function i(e){
      return/^\d+$/.test(e)?s(e):e
    }
    n.d(t,{
      Z:function(){
        return i
      },
      p:function(){
        return s
      }
    })
  },
  42554:function(e,t,n){
    n.d(t,{
      Jy:function(){
        return p
      },
      Kf:function(){
        return d
      },
      gx:function(){
        return u
      },
      h$:function(){
        return c
      }
    });
    var s=n(67294),
    i=n(14416),
    a=n(96486),
    o=n.n(a),
    l=n(92980);
    let r=()=>{
      let{
        appFilter:e
      }=(0,i.v9)(e=>e),
      {
        fetchProperty:t
      }=e,
      n=t.event_custom_property.data||[],
      s=t.user_custom_property.data||[];
      return{
        eventProperties:n.length&&n.map(e=>"".concat(e,"__UXCAM_CUSTOM_PROPERTY"))||[],
        userProperties:s.length&&s.map(e=>"".concat(e,"__UXCAM_CUSTOM_PROPERTY"))||[]
      }
    };
    function c(e){
      return e?Array.isArray(e)?e.map(e=>e.replace(/__UXCAM_CUSTOM_PROPERTY/g,"")):e.replace(/__UXCAM_CUSTOM_PROPERTY/g,""):e
    }
    let d=e=>l.oR[c(e)]||c(e),
    u=e=>{
      let{
        headers:t,
        modalType:n,
        selectedCustomProps:i,
        overallSelectedCustomProps:a
      }=e,
      {
        userProperties:l,
        eventProperties:u
      }=r(),
      p=(0,s.useMemo)(()=>"user"===n?l:u,[n,l,u]),
      m=(0,s.useMemo)(()=>[...l,...u],[l,u]),
      h=(0,s.useMemo)(()=>"user"===n?"isCustomUserProperty":"isCustomEventProperty",[n]),
      g=(0,s.useMemo)(()=>o().filter(t,{
        isCustomUserProperty:!0
      }).map(e=>e.attribute),[t]),
      f=(0,s.useMemo)(()=>o().filter(t,{
        isCustomEventProperty:!0
      }).map(e=>e.attribute),[t]),
      v=(0,s.useMemo)(()=>[...g,...f,...i],[f,g,i]),
      x=(0,s.useMemo)(()=>o().uniq(v),[v]),
      b=t.filter(e=>e.isVisible),
      y=t.filter(e=>!e.isVisible).sort((e,t)=>e.title.localeCompare(t.title)),
      w=(0,s.useCallback)(e=>"event"===e?o().map(o().filter(t,{
        isCustomEventProperty:!0
      }),"attribute"):o().map(o().filter(t,{
        isCustomUserProperty:!0
      }),"attribute"),[t]),
      j=(0,s.useMemo)(()=>o().difference(m,a),[m,a]),
      C=(0,s.useMemo)(()=>o().difference(x,o().map(t,"attribute")).map(e=>({
        attribute:e,
        title:e,
        subTitle:null,
        isVisible:!0,
        isDraggable:!0,
        isSortable:!0,
        smallSessionTable:!1,
        type:"string",
        titleInfo:"Custom ".concat(n," property"),
        position:2,
        [h]:!0
      })),[x,t,h,n]),
      _=[...b,...C,...y],
      k=(0,s.useMemo)(()=>o().uniqBy(t.concat(C),"attribute"),[t,C]),
      L=o().filter(k,e=>!o().includes(j,e.attribute)),
      S=(0,s.useMemo)(()=>o().filter(_,e=>!o().includes(j,e.attribute)),[j,_]);
      return{
        customPropsPresentInHeader:w,
        unselectedCustomProps:j,
        filterOutUnslectedCustom:L,
        filteredOutPositionArray:S,
        customPropertiesSelectOptions:p,
        getColumnUpdateObject:(0,s.useCallback)(e=>{
          let t={
            attribute:e.attribute,
            isVisible:e.isVisible
          };
          return e.isCustomEventProperty?{
            ...t,
            isCustomEventProperty:e.isCustomEventProperty
          }:e.isCustomUserProperty?{
            ...t,
            isCustomUserProperty:e.isCustomUserProperty
          }:t
        },[]),
        existingCustomProps:x,
        existingCustomEventProps:f,
        existingCustomUserProps:g,
        removeUxCamCustomProperty:c,
        stripCustomPropertyAndMapLabel:d
      }
    },
    p=(e,t)=>{
      let n=1e3;
      return Object.values((null==t?void 0:t.visibility)||{}).map(s=>{
        let{
          attribute:i,
          isVisible:a,
          isCustomUserProperty:o
        }=s,
        l=((null==t?void 0:t.position)||[]).findIndex(e=>e===i);
        if(o){
          if(!a)return;
          let e={
            attribute:i,
            isCustomUserProperty:!0,
            isDraggable:!0,
            isSortable:!0,
            isVisible:a,
            position:l||n,
            smallSessionTable:!1,
            subTitle:null,
            title:i,
            titleInfo:"Custom user property",
            type:"str"
          };
          return l||(n+=1),
          e
        }
        return{
          ...e.find(e=>{
            let{
              attribute:t
            }=e;
            return t===i
          }),
          position:l,
          isVisible:a||!1
        }
      }).filter(e=>e)
    }
  },
  48657:function(e,t,n){
    n.d(t,{
      Z:function(){
        return _
      }
    });
    var s=n(85893),
    i=n(67294),
    a=n(14416),
    o=n(88812),
    l=n(88767),
    r=n(60063),
    c=n(67287),
    d=n(72330),
    u=n(55915),
    p=n(76501),
    m=n(72654),
    h=n(12016),
    g=n(83423),
    f=n(74936),
    v=n(31049),
    x=n(99795),
    b=n(28166),
    y=n(1949),
    w=n(39284);
    let j=(0,n(19521).default)(w.default).withConfig({
      componentId:"sc-660b182b-0"
    })([".ant-modal-content{border-radius:8px;overflow:hidden;.ant-modal-body{padding:32px;.modal-title{font-size:18px;}.ant-form{padding:16px 0;display:flex;flex-direction:column;gap:8px;.ant-form-item-control-input-content{display:flex;align-items:center;}.ant-form-item{margin:0;}.ant-form-item-control-input{height:32px;}.ant-input-group{border-radius:6px;overflow:hidden;.ant-input-group-addon{background-color:#ffffff;border-color:#efeff3;border-radius:6px 0 0 6px;}}.ant-input-group-addon:last-child{padding:0;border:none;margin:0;.ant-btn{padding:0 12px;font-size:14px;border-radius:0;height:40px;}}}.modal-footer{display:flex;justify-content:flex-end;button{min-width:54px;border:none;border-radius:6px;outline:none;padding:10px 18px;display:flex;align-items:center;justify-content:center;color:#5D97FF;box-shadow:none;font-size:14px;&:hover{opacity:0.8;}}}}}.ant-form{max-height:310px;overflow-y:auto;}"]),
    C=m.Z.Item;
    var _=e=>{
      let t=(0,a.I0)(),
      n=(0,l.useQueryClient)(),
      [w]=m.Z.useForm(),
      {
        urlReducer:_,
        currentAppReducer:k,
        userDetailReducer:L
      }=(0,a.v9)(e=>e),
      {
        isModalVisible:S,
        modelHide:I
      }=e,
      {
        _id:F
      }=k,
      {
        data:M
      }=L,
      {
        sessionid:Z,
        uxcamuserid:N,
        parentType:D
      }=_,
      {
        megaFilterSessionLabels:E,
        userLabels:P
      }=(0,b.ZP)(),
      {
        deleteLabel:T,
        updateLabel:A
      }=(0,b.Aj)(),
      R=(0,i.useMemo)(()=>"usersList"===D?P:E,[D,P,E]),
      [B,O]=(0,i.useState)(R),
      [z,U]=(0,i.useState)(),
      [V,q]=(0,i.useState)(),
      [Q,W]=(0,i.useState)(void 0),
      [Y,H]=(0,i.useState)(),
      [J,X]=(0,i.useState)(),
      G=(null==M?void 0:M.customLabel)||[],
      $="aiSessionsList"===D?"aiSessionItems":"sessionItems",
      K="aiSessionsList"===D?"aiSessionsListReqBody":"sessionsListReqBody",
      ee="";
      try{
        ee="usersList"===D?["userList",JSON.parse(localStorage.getItem("usersListReqBody"))]:[$,JSON.parse(localStorage.getItem(K))]
      }
      catch(e){}let et=(0,i.useMemo)(()=>"".concat(Z),[Z]),
      en="usersList"===D,
      es=e=>{
        let n={
          ...M
        };
        n.customLabel=null==G?void 0:G.filter(t=>t!==e),
        t((0,x.Xr)(n))
      },
      ei=e=>{
        let t=null==e?void 0:e.customLabelName;
        if(T({
          ...e,
          appid:F,
          labelType:en?"user":"session"
        }).then(()=>{
          0===R.filter(e=>e.name!==t).length&&I()
        }),n.setQueryData(ee,e=>{
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
        }),N&&"usersList"===D&&es(t),(null==_?void 0:_.sessionid)&&["sessionsList","aiSessionsList"].includes(_.parentType)){
          let e=n.getQueryData(et),
          s=null==e?void 0:e.customLabel.filter(e=>e!==t).sort();
          e.customLabel=s,
          n.setQueryData(et,e)
        }
      },
      ea=async e=>{
        W(e),
        await U(e)
      },
      eo=async(e,t)=>{
        await U(e.icon),
        q(t),
        W(e.icon),
        H(e.icon)
      },
      el=async e=>{
        R.filter(t=>t.name!==e.name).sort((e,t)=>e.name.localeCompare(t.name)),
        ei({
          customLabelName:e.name
        })
      },
      er=e=>{
        let t={
          labelIcon:Y,
          updatedLabelIcon:Q,
          customLabelName:e,
          labelType:en?"user":"session"
        };
        t.appid=F,
        A(t),
        q(),
        W(),
        H(),
        X()
      },
      ec=(0,s.jsx)("div",{
        className:"icon-wrapper-box",
        children:(0,s.jsx)("ul",{
          className:"label-icon-list",
          children:y.ve&&y.ve.map(e=>(0,s.jsx)("li",{
            className:e.type===Q?"icon-selected":"",
            children:(0,s.jsx)("a",{
              children:(0,s.jsx)(o.Z,{
                type:e.type,
                onClick:()=>ea(e.type)
              })
            })
          },e.type))
        })
      }),
      ed=(0,s.jsx)(h.Z,{
        overlay:ec,
        overlayClassName:"icon-library-dropdown",
        trigger:["click"],
        onClick:e=>e.preventDefault(),
        children:(0,s.jsxs)("a",{
          style:{
            color:"#161E35"
          },
          children:[(0,s.jsx)(o.Z,{
            type:z
          })," ",(0,s.jsx)(r.Z,{})]
        })
      });
      return(0,i.useEffect)(()=>{
        O(J?R&&R.filter(e=>e.name.toLowerCase().indexOf(J.toLowerCase())>=0):R)
      },[R]),
      (0,s.jsx)(j,{
        visible:S,
        onCancel:I,
        afterClose:()=>{
          U(),
          q()
        },
        destroyOnClose:!0,
        closable:!0,
        footer:null,
        children:(0,s.jsxs)("section",{
          children:[(0,s.jsxs)("h3",{
            className:"modal-title",
            children:["Manage ","usersList"===D?"user":"session"," labels"]
          }),R&&R.length>20&&(0,s.jsxs)(C,{
            className:"label-search-box",
            children:[(0,s.jsx)(c.Z,{}),(0,s.jsx)(g.default,{
              placeholder:"Search custom label",
              value:J,
              onChange:e=>{
                X(e.target.value),
                O(R&&R.filter(t=>t.name.toLowerCase().indexOf(e.target.value.toLowerCase())>=0))
              }
            })]
          }),(0,s.jsx)(m.Z,{
            form:w,
            onFinish:null,
            hideRequiredMark:!0,
            className:"custom-scrollbar",
            children:B instanceof Array&&B.map((e,t)=>(0,s.jsx)("div",{
              children:(0,s.jsx)(C,{
                className:"label-viewonly",
                children:z&&V===t?(0,s.jsx)(C,{
                  style:{
                    width:"100%"
                  },
                  children:(0,s.jsx)(g.default,{
                    addonBefore:ed,
                    addonAfter:(0,s.jsx)(f.Z,{
                      type:"primary",
                      icon:(0,s.jsx)(d.Z,{}),
                      onClick:()=>er(e.name)
                    }),
                    placeholder:"Enter label name",
                    value:e.name,
                    disabled:!0
                  })
                }):(0,s.jsxs)(s.Fragment,{
                  children:[(0,s.jsx)("div",{
                    className:"icon-box",
                    children:(0,s.jsx)(o.Z,{
                      type:e.icon
                    })
                  }),(0,s.jsx)("div",{
                    className:"label-name",
                    children:e.name
                  }),(0,s.jsxs)("div",{
                    className:"label-action",
                    children:[(0,s.jsx)(f.Z,{
                      icon:(0,s.jsx)(u.Z,{}),
                      onClick:()=>eo(e,t)
                    }),(0,s.jsx)(v.Z,{
                      overlayClassName:"delete-pop-confirm",
                      onConfirm:()=>el(e,t),
                      title:"Are you sure you want to delete?",
                      okText:"Delete",
                      icon:null,
                      cancelText:"Cancel",
                      children:(0,s.jsx)(f.Z,{
                        icon:(0,s.jsx)(p.Z,{})
                      })
                    })]
                  })]
                })
              })
            },e.name))
          })]
        })
      })
    }
  },
  49644:function(e,t,n){
    n.d(t,{
      ZP:function(){
        return j
      },
      Gf:function(){
        return y
      },
      Sx:function(){
        return b
      }
    });
    var s=n(85893),
    i=n(67294),
    a=n(14416),
    o=n(88767),
    l=n(47639),
    r=n(88812),
    c=n(72654),
    d=n(83423),
    u=n(74936),
    p=n(30663),
    m=n(99795),
    h=n(28166),
    g=n(1949),
    f=n(19521),
    v=n(39284);
    let x=(0,f.default)(v.default).withConfig({
      componentId:"sc-c0f0b0a3-0"
    })([".ant-modal-content{border-radius:8px;overflow:hidden;.ant-modal-body{padding:32px;.modal-title{font-size:18px;margin-bottom:16px;}.ant-input-group-addon:first-child{border-color:#efeff3;}.select-icon-form{.ant-form-item-label{margin-bottom:0;}}.btn-wrapper{display:flex;justify-content:flex-end;gap:10px;margin-top:16px;.ant-form-item{margin-bottom:0;.ant-btn{min-width:112px;padding:10px 18px;border-radius:6px;display:flex;align-items:center;justify-content:center;height:32px;}}}}}"]),
    b=(e,t,n)=>e.map(e=>{
      var s;
      let i=t.find(t=>t[n]===e);
      return null==i?void 0:null===(s=i.userProperty)||void 0===s?void 0:s.uxcamuserid
    }).filter(e=>e),
    y=(e,t,n)=>e.map(e=>{
      let s=t.find(t=>t[n]===e);
      return null==s?void 0:s.sessionUploadedDateTime
    }).filter(e=>e),
    w=c.Z.Item;
    var j=e=>{
      let t=(0,a.I0)(),
      [n]=c.Z.useForm(),
      [,f]=(0,i.useState)({}),
      v=(0,o.useQueryClient)(),
      {
        urlReducer:j,
        currentAppReducer:C,
        selectedSessionReducer:_,
        selectedUserReducer:k,
        userDetailReducer:L
      }=(0,a.v9)(e=>e),
      {
        _id:S
      }=C,
      {
        customLabels:I,
        checkExistingLabel:F
      }=(0,h.ZP)(),
      {
        addUserLabel:M,
        addSessionLabel:Z
      }=(0,h.Aj)(),
      {
        data:N
      }=L,
      {
        isModalVisible:D,
        modelHide:E,
        id:P,
        markMultiple:T,
        addMultipleCustomLabel:A
      }=e,
      {
        parentType:R
      }=j,
      B="aiSessionsList"===R?"aiSessionItems":"sessionItems",
      O="aiSessionsList"===R?"aiSessionsListReqBody":"sessionsListReqBody",
      z="",
      U="";
      try{
        z=["userList",JSON.parse(localStorage.getItem("usersListReqBody"))],
        U=[B,JSON.parse(localStorage.getItem(O))]
      }
      catch(e){}let[V,q]=(0,i.useState)("tag"),
      [Q,W]=(0,i.useState)(!1),
      {
        customLabel:Y
      }=N,
      H=(0,i.useMemo)(()=>Y||[],[Y]),
      J=e=>{
        let n={
          ...N
        };
        (null==H?void 0:H.includes(e))?n.customLabel=null==H?void 0:H.filter(t=>t!==e):(H.push(e),n.customLabel=H),
        t((0,m.Xr)(n))
      },
      X=e=>{
        let n={
          ...e,
          appid:S
        };
        M(n),
        t((0,p.CW)(null,{
          eventName:"add_label",
          track_type:"event",
          eventProperty:{
            "label name":null==n?void 0:n.customLabelName,
            "user ids":null==n?void 0:n.uxcamuserIds,
            label_type:"user"
          }
        })),
        v.setQueryData(z,t=>{
          let n=(null==e?void 0:e.uxcamuserIds)||[],
          s=t.data.data.body.map(t=>n.length&&n.includes(t.uxcamuserid)?{
            ...t,
            customLabel:[...t.customLabel,e.customLabelName]
          }:t);
          return{
            ...t,
            data:{
              ...t.data,
              data:{
                ...t.data.data,
                body:s
              }
            }
          }
        }),
        J(null==e?void 0:e.customLabelName)
      },
      G=e=>{
        var n,
        s;
        let i=v.getQueryData(U),
        a=(null==i?void 0:null===(s=i.data)||void 0===s?void 0:null===(n=s.data)||void 0===n?void 0:n.body)||[],
        o=e.sessionIds||[],
        l=b(o,a,"sessionid"),
        r=y(o,a,"sessionid"),
        c={
          ...e,
          appid:S,
          uxcamuserIds:l,
          uploadedOn:r
        };
        Z(c),
        t((0,p.CW)(null,{
          eventName:"add_label",
          track_type:"event",
          eventProperty:{
            "label name":null==c?void 0:c.customLabelName,
            "session ids":null==c?void 0:c.sessionIds,
            label_type:"session"
          }
        })),
        v.setQueryData(U,t=>{
          let n=(null==e?void 0:e.sessionIds)||[],
          s=t.data.data.body.map(t=>{
            if(n.length&&n.includes(t.sessionid)){
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
                body:s
              }
            }
          }
        }),
        e.sessionIds.forEach(t=>{
          let n=v.getQueryData(t);
          if(n){
            let s=[...(null==n?void 0:n.customLabel)||[],e.customLabelName];
            v.setQueryData(t,e=>({
              ...e,
              customLabel:s
            }))
          }
        })
      },
      $=(0,i.useMemo)(()=>{
        let e;
        return P?e=[P]:["sessionsList","aiSessionsList"].includes(R)?e=_:"usersList"===R&&(e=k),
        e
      },[P,R]),
      K=async(e,t)=>{
        let n={
          name:t.customLabelName.trim(),
          icon:t.labelIcon,
          sessioncount:1
        },
        s={
          name:t.customLabelName.trim(),
          icon:t.labelIcon,
          usercount:1
        };
        (["sessionsList","aiSessionsList"].includes(R)?[...I,n]:[...I,s]).sort((e,t)=>e.name.localeCompare(t.name)),
        ["sessionsList","aiSessionsList"].includes(R)?G({
          ...t,
          labelType:"session",
          sessionIds:e
        }):X({
          ...t,
          labelType:"user",
          uxcamuserIds:e
        })
      },
      ee=()=>{
        n.resetFields(),
        E()
      },
      et=["sessionsList","aiSessionsList"].includes(R)?"session":"user",
      en=async e=>{
        e.preventDefault(),
        e.stopPropagation();
        let s=await n.validateFields(),
        i={
          ...s,
          labelIcon:(null==s?void 0:s.labelIcon)||"tag"
        };
        Q||(W(!0),t((0,l.hI)({
          action:"Created ".concat(et," label")
        })),T?await A(s,$):await K($,i),W(!1),ee())
      },
      es=e=>{
        q(e)
      };
      return(0,i.useEffect)(()=>{
        f({})
      },[]),
      (0,i.useEffect)(()=>{
        q("tag")
      },[]),
      (0,i.useEffect)(()=>{
        n.setFieldsValue({
          labelIcon:V||"tag"
        })
      },[n,V]),
      (0,s.jsxs)(s.Fragment,{
        children:[(0,s.jsx)(x,{
          visible:D,
          onCancel:ee,
          afterClose:()=>{
            q(),
            W(!1)
          },
          destroyOnClose:!0,
          closable:!1,
          footer:null,
          children:(0,s.jsxs)(s.Fragment,{
            children:[(0,s.jsxs)("h3",{
              className:"modal-title",
              children:["Create new ",et," label"]
            }),(0,s.jsxs)(c.Z,{
              layout:"vertical",
              form:n,
              onFinish:en,
              hideRequiredMark:!0,
              children:[(0,s.jsx)(w,{
                name:"customLabelName",
                rules:[{
                  required:!0,
                  message:"Label name is required"
                },{
                  max:50,
                  message:"Label name must be less than 50 characters."
                },{
                  min:3,
                  message:"Label name must be more than 2 characters."
                },{
                  whitespace:!0,
                  message:"Only whitespace are not allowed"
                },{
                  validator:(e,t,n)=>{
                    let s=[];
                    I&&F(t)&&s.push(Error("Label name already exists.")),
                    n(s)
                  }
                }],
                children:(0,s.jsx)(d.default,{
                  autoComplete:"off",
                  addonBefore:(0,s.jsx)(r.Z,{
                    type:V||"tag"
                  }),
                  autoFocus:!0,
                  placeholder:"Enter label name"
                })
              }),(0,s.jsx)(w,{
                label:"Select an icon",
                style:{
                  marginBottom:"0"
                },
                name:"labelIcon",
                className:"select-icon-form",
                children:(0,s.jsx)("ul",{
                  className:"label-icon-list",
                  children:g.ve&&g.ve.map(e=>(0,s.jsx)("li",{
                    className:e.type===V?"icon-selected":"",
                    children:(0,s.jsxs)("a",{
                      href:"#!",
                      children:[(0,s.jsx)(r.Z,{
                        type:e.type,
                        onClick:t=>{
                          t.preventDefault(),
                          t.stopPropagation(),
                          es(e.type)
                        }
                      })," "]
                    })
                  },e.type))
                })
              }),(0,s.jsxs)("div",{
                className:"btn-wrapper",
                children:[(0,s.jsx)(w,{
                  children:(0,s.jsx)(u.Z,{
                    type:"secondary",
                    onClick:ee,
                    children:"Cancel"
                  },"back")
                }),(0,s.jsx)(c.Z.Item,{
                  shouldUpdate:!0,
                  children:()=>(0,s.jsx)(u.Z,{
                    loading:Q,
                    disabled:!!n.getFieldsError().filter(e=>{
                      let{
                        errors:t
                      }=e;
                      return t.length
                    }).length,
                    type:"primary",
                    onClick:e=>en(e),
                    children:"Done"
                  },"submit")
                })]
              })]
            })]
          })
        }),(0,s.jsx)("style",{
          children:"\n    .icon-label-input .ant-input-group-addon{\n      border-color: #efeff3;\n    }\n    .create-custom-label-modal .ant-form-item .ant-form-item-label label:after{\n      display: none;\n    }\n    "
        })]
      })
    }
  },
  86086:function(e,t,n){
    n.d(t,{
      K:function(){
        return a
      }
    });
    var s=n(85893);
    n(67294);
    var i=n(8357);
    let a={
      bar:{
        type:"bar",
        key:"bar",
        display:"Bar chart",
        img:(0,s.jsx)(i.Mx,{})
      },
      stacked_bar:{
        type:"bar",
        key:"stacked_bar",
        display:"Stacked bar chart",
        stacking:"normal",
        img:(0,s.jsx)(i.Rn,{})
      },
      column:{
        type:"column",
        key:"column",
        display:"Column chart",
        img:(0,s.jsx)(i.ws,{})
      },
      stacked_column:{
        type:"column",
        key:"stacked_column",
        display:"Stacked column chart",
        stacking:"normal",
        img:(0,s.jsx)(i.dv,{})
      },
      line:{
        type:"line",
        key:"line",
        display:"Line chart",
        img:(0,s.jsx)(i.Hj,{})
      },
      stacked_line:{
        type:"area",
        key:"stacked_line",
        display:"Stacked line chart",
        stacking:"normal",
        img:(0,s.jsx)(i.fK,{})
      },
      pie:{
        type:"pie",
        key:"pie",
        display:"Pie chart",
        img:(0,s.jsx)(i.iB,{})
      }
    }
  },
  49470:function(e,t,n){
    n.d(t,{
      Z:function(){
        return r
      }
    });
    var s=n(85893),
    i=n(67294);
    let a={
      display:"block",
      position:"absolute",
      top:0,
      left:0,
      width:"100%",
      height:"100%",
      backgroundColor:"rgba(0,0,0,0.5)",
      zIndex:10
    },
    o={
      display:"table",
      width:"100%",
      height:"100%",
      textAlign:"center",
      zIndex:20,
      color:"white"
    },
    l={
      display:"table-cell",
      verticalAlign:"middle"
    };
    var r=e=>{
      let{
        backgroundStyle:t,
        children:n,
        className:r,
        contentBlur:c,
        contentStyle:d,
        disableDefaultStyles:u,
        foregroundStyle:p,
        hideContentOnLoad:m,
        message:h,
        messageStyle:g,
        style:f,
        show:v
      }=e,
      [x]=(0,i.useState)(!0),
      b=!!x&&!!v,
      y={
        ...u?{}:a,
        ...t
      },
      w={
        ...u?{}:o,
        ...p
      },
      j={
        ...u?{}:l,
        ...g
      },
      C={
        position:"relative",
        ...f
      },
      _=Object.assign(b&&c?{
        WebkitFilter:"blur(".concat(c,"px)"),
        MozFilter:"blur(".concat(c,"px)"),
        OFilter:"blur(".concat(c,"px)"),
        msFilter:"blur(".concat(c,"px)"),
        filter:"blur(".concat(c,"px)")
      }:{},d,{
        opacity:m&&v?0:1
      }),
      k=!!b&&(0,s.jsx)("div",{
        className:"Loader__background",
        style:y,
        children:(0,s.jsx)("div",{
          className:"Loader__foreground",
          style:w,
          children:(0,s.jsx)("div",{
            className:"Loader__message",
            style:j,
            children:h||"loading..."
          })
        })
      });
      return(0,s.jsxs)("div",{
        className:"Loader"+(r?" "+r:""),
        style:C,
        children:[(0,s.jsx)("div",{
          className:"Loader__content",
          style:_,
          children:n
        }),k]
      })
    }
  },
  92434:function(e,t,n){
    var s=n(85893),
    i=n(67294),
    a=n(14416),
    o=n(19020),
    l=n(78303),
    r=n(80432),
    c=n(19197),
    d=n(12016),
    u=n(65885),
    p=n(11163),
    m=n.n(p),
    h=n(41664),
    g=n.n(h),
    f=n(94184),
    v=n.n(f),
    x=n(55877),
    b=n(88767),
    y=n(30663),
    w=n(99795),
    j=n(28166),
    C=n(13311),
    _=n.n(C),
    k=n(73495),
    L=n(48657),
    S=n(49644),
    I=n(95593),
    F=n(88136);
    let M=new u.Z,
    Z=()=>(0,s.jsxs)("svg",{
      width:"12",
      height:"12",
      viewBox:"0 0 12 12",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,s.jsx)("path",{
        d:"M6.76224 0.185043C6.70369 0.126283 6.6341 0.0796824 6.55747 0.047925C6.48083 0.0161676 6.39868 -0.000119645 6.31572 6.61653e-07H0.631572C0.464069 6.61653e-07 0.303426 0.0665382 0.184983 0.184976C0.0665404 0.303413 0 0.464049 0 0.631545V6.31545C0 6.48344 0.0663151 6.64385 0.185051 6.76195L5.23763 11.8143C5.29615 11.8732 5.36572 11.9199 5.44235 11.9517C5.51898 11.9836 5.60116 12 5.68415 12C5.76714 12 5.84932 11.9836 5.92595 11.9517C6.00258 11.9199 6.07215 11.8732 6.13067 11.8143L11.8148 6.1304C11.8735 6.0718 11.9201 6.0022 11.9519 5.92559C11.9836 5.84897 12 5.76684 12 5.6839C12 5.60096 11.9836 5.51883 11.9519 5.44221C11.9201 5.3656 11.8735 5.296 11.8148 5.2374L6.76224 0.185043ZM5.68415 10.4748L1.26314 6.05399V1.26309H6.05425L10.4753 5.6839L5.68415 10.4748Z",
        fill:"#161E35"
      }),(0,s.jsx)("path",{
        d:"M3.47115 4.42072C3.9961 4.42072 4.42166 3.99518 4.42166 3.47025C4.42166 2.94532 3.9961 2.51978 3.47115 2.51978C2.94619 2.51978 2.52063 2.94532 2.52063 3.47025C2.52063 3.99518 2.94619 4.42072 3.47115 4.42072Z",
        fill:"#161E35"
      })]
    }),
    N=e=>(0,s.jsx)(o.Z,{
      component:Z,
      ...e
    }),
    D=(0,i.memo)(e=>{
      var t;
      let n,
      o;
      let u=(0,a.I0)(),
      p=(0,b.useQueryClient)(),
      {
        urlReducer:h,
        currentOrgReducer:f,
        currentAppReducer:C,
        userDetailReducer:Z
      }=(0,a.v9)(e=>e),
      {
        megaFilterCustomLabels:D,
        megaFilteredSessionLabels:E,
        megaFilterSessionLabels:P,
        filteredUserLabels:T,
        userLabels:A,
        selectedLabels:R,
        setSelectedLabels:B,
        labelSearch:O,
        setLabelSearch:z,
        resetSearch:U,
        compareLabels:V
      }=(0,j.ZP)(),
      {
        markUserLabel:q,
        markSessionLabel:Q
      }=(0,j.Aj)(),
      {
        parentType:W,
        sessionpage:Y,
        userpage:H
      }=h,
      J="usersList"===W,
      [X,G]=(0,i.useState)(J?"user":"session"),
      $=(0,i.useMemo)(()=>J?(null==A?void 0:A.length)>0:(null==P?void 0:P.length)>0,[T,E,J]),
      {
        data:K
      }=Z,
      {
        customLabel:ee
      }=K,
      {
        crashed:et,
        isRageTap:en,
        sessionid:es,
        uxcamuserid:ei,
        customLabel:ea,
        sessionLocked:eo
      }=e.data,
      {
        index:el
      }=e,
      er=(0,i.useCallback)(()=>{
        var e,
        t;
        return(null==et?void 0:null===(e=et.props)||void 0===e?void 0:e.children)?(null==et?void 0:null===(t=et.props)||void 0===t?void 0:t.children)==="Yes":et
      },[et]),
      ec=(0,i.useCallback)(()=>{
        var e,
        t;
        return(null==es?void 0:null===(e=es.props)||void 0===e?void 0:e.children)?null==es?void 0:null===(t=es.props)||void 0===t?void 0:t.children:es
      },[es]),
      ed=er(),
      eu=ec(),
      ep="boolean"==typeof en&&!0===en,
      {
        rowIndex:em
      }=e,
      {
        _id:eh
      }=C,
      {
        session:eg,
        user:ef
      }=(0,a.v9)(e=>e.appFilter),
      [ev,ex]=(0,i.useState)(!1),
      [eb,ey]=(0,i.useState)(!1),
      [ew,ej]=(0,i.useState)(ea),
      [eC,e_]=(0,i.useState)([]),
      ek=M.get("loggedInType"),
      eL=(0,i.useMemo)(()=>ee||[],[ee]),
      eS=e=>{
        let t={
          ...K
        };
        (null==eL?void 0:eL.includes(e))?t.customLabel=null==eL?void 0:eL.filter(t=>t!==e):(eL.push(e),t.customLabel=eL),
        u((0,w.Xr)(t))
      },
      eI=()=>{
        ex(!1),
        ey(!1)
      },
      eF={
        isModalVisible:ev,
        modelHide:eI,
        id:["sessionsList","aiSessionsList"].includes(W)?eu:ei
      };
      switch(W){
        case"sessionsList":n="/app/".concat(C._id,"/sessions/list/").concat(Y||1,"/").concat(eu,"?"),
        n=(0,k.$)(n,eg.segment),
        o="appId=".concat(C._id,"&video=false&parentType=sessionsList&sessionid=").concat(eu,"&index=").concat(em,"&sessionpage=").concat(Y||1);
        break;
        case"aiSessionsList":n="/app/".concat(C._id,"/aisessions/list/").concat(Y||1,"/").concat(eu,"?"),
        n=(0,k.$)(n,eg.segment),
        o="appId=".concat(C._id,"&video=false&parentType=aiSessionsList&sessionid=").concat(eu,"&index=").concat(em,"&sessionpage=").concat(Y||1);
        break;
        default:n="/app/".concat(C._id,"/users/list/").concat(H||1,"/").concat(ei,"?"),
        n=(0,k.$)(n,ef.segment),
        o="appId=".concat(C._id,"&parentType=usersList&uxcamuserid=").concat(ei,"&index=").concat(em,"&sessionpage=1&userpage=").concat(H||1)
      }
      let eM="aiSessionsList"===W?"aiSessionItems":"sessionItems",
      eZ="aiSessionsList"===W?"aiSessionsListReqBody":"sessionsListReqBody",
      eN="";
      try{
        eN=[eM,JSON.parse(localStorage.getItem(eZ))]
      }
      catch(e){}let eD=(e,t)=>{
        var n,
        s;
        let i;
        let a=p.getQueryData(eN),
        o=(null==a?void 0:null===(s=a.data)||void 0===s?void 0:null===(n=s.data)||void 0===n?void 0:n.body)||[],
        l=[eu],
        r=e.customLabelName,
        c=(0,S.Sx)(l,o,"sessionid"),
        d=(0,S.Gf)(l,o,"sessionid");
        Q({
          ...e,
          uxcamuserIds:c,
          sessionIds:l,
          uploadedOn:d,
          labelType:t,
          appid:eh
        }),
        ["sessionsList","aiSessionsList"].includes(W)&&p.setQueryData(eN,t=>{
          var n,
          s,
          i;
          let a=[...null!==(i=null===(s=t.data)||void 0===s?void 0:null===(n=s.data)||void 0===n?void 0:n.body)&&void 0!==i?i:[]],
          o=a.findIndex(e=>e.sessionid===es),
          l=a[o],
          c=e.isTagged;
          if(l.customLabel.indexOf(r)>-1){
            if(!c){
              let e=[...l.customLabel];
              e.splice(e.indexOf(r),1),
              l={
                ...l,
                customLabel:e
              }
            }
          }
          else c&&(l={
            ...l,
            customLabel:[...l.customLabel,r]
          });
          return{
            ...t,
            data:{
              ...t.data,
              data:{
                ...t.data.data,
                body:a.map(e=>e.sessionid===l.sessionid?{
                  ...e,
                  customLabel:l.customLabel
                }:e)
              }
            }
          }
        });
        let u=p.getQueryData(es);
        if(u){
          let e=(null==u?void 0:u.customLabel)||[];
          i=(null==e?void 0:e.indexOf(r))>-1?e.filter(e=>e!==r):[...e,r],
          p.setQueryData(es,e=>({
            ...e,
            customLabel:i
          }))
        }
      },
      eE="";
      try{
        eE=["userList",JSON.parse(localStorage.getItem("usersListReqBody"))]
      }
      catch(e){}let eP=(e,t,n,i,a)=>{
        let o=M.get("loggedInFromAdminDashboard");
        if("outside-icon-box"===e.target.id||"stack-icon-box"===e.target.id||"stack-icon"===a){
          if("1"!==o&&null!==f.planFeature){
            let e=(0,s.jsx)(g(),{
              href:{
                pathname:"/integration",
                query:{
                  setting:"org_setting",
                  org:f.orgId,
                  org_tab:"plan",
                  parentType:"settings"
                }
              },
              as:"/settings/org/".concat(f.orgId,"/plan"),
              legacyBehavior:!0,
              children:(0,s.jsxs)("a",{
                href:"#!",
                children:[" ","expired"===f.status.toLowerCase()?"Renew your Plan":"Update your Plan "]
              })
            });
            if("usersList"===W&&0===f.planFeature.userAnalysis||"usersList"===W&&"expired"===f.status.toLowerCase()){
              let t=(0,s.jsxs)("strong",{
                children:["Your plan"," ","expired"===f.status.toLowerCase()?"has been expired":"does not allow for User Analysis",".",(0,s.jsx)("br",{}),"Please ",e," to enable this feature."]
              });
              r.ZP.info(t);
              return
            }
          }
          m().push("/integration?".concat(t),"".concat(n))
        }
      },
      eT=(0,i.useMemo)(()=>(ew instanceof Array&&ew.length>0&&ew.map(()=>1),0),[ew]),
      eA=(0,i.useCallback)(()=>{
        let e=[];
        e.push((0,s.jsx)("span",{
          className:"icon-item",
          children:(0,s.jsx)(c.Z,{
            count:eT,
            title:!1,
            children:(0,s.jsx)(N,{
              className:ep||ed?"label-default":""
            })
          })
        },(0,x.v4)())),
        e_(e)
      },[eT,ed,ep]);
      (0,i.useEffect)(()=>{
        eA()
      },[ew,null==D?void 0:D.length]),
      (0,i.useEffect)(()=>{
        ej(ea||[]),
        "usersList"===W&&G("user")
      },[ea,null==ea?void 0:ea.length]);
      let eR=(0,i.useCallback)(e=>{
        let{
          value:t
        }=e.target;
        "session"===X?z({
          ...O,
          sessionLabels:t
        }):z({
          ...O,
          userLabels:t
        })
      },[O,X,z]),
      eB=(0,i.useMemo)(()=>"usersList"===W?[{
        key:"user",
        name:"User label",
        options:T.sort((e,t)=>V(ew,e,t)),
        showSearch:!0
      }]:[{
        key:"session",
        name:"Session label",
        options:E.sort((e,t)=>V(ew,e,t)),
        showSearch:!0
      }],[ew,T,E,W]),
      eO="guest"!==ek&&(0,s.jsxs)(F.bk,{
        children:[(0,s.jsxs)(F.Kk,{
          onClick:()=>{
            ex(!0)
          },
          children:[(0,s.jsx)("i",{
            className:"anticon",
            style:{
              fontWeight:"500",
              fontSize:"20px"
            },
            children:"+"
          })," ","Add label"]
        }),$&&(0,s.jsxs)(F.Kk,{
          onClick:()=>{
            ey(!0)
          },
          children:[(0,s.jsx)(l.Z,{})," Manage label"]
        })]
      }),
      ez=(0,i.useMemo)(()=>ed||ep?(0,s.jsx)(F.gM,{
        children:(0,s.jsxs)("span",{
          className:"title",
          children:["UX issues:"," ",ed&&(0,s.jsxs)("em",{
            children:["Crashed ",ep&&", "]
          }),ep&&(0,s.jsx)("em",{
            children:"With rage tap"
          })]
        })
      }):null,[ed,ep]),
      eU=(0,i.useMemo)(()=>J&&!$||D&&D.length<=0?"You haven’t created any label.":null,[D,$,J]);
      return(0,s.jsxs)(s.Fragment,{
        children:[(0,s.jsx)("div",{
          "aria-hidden":"true",
          id:"outside-icon-box",
          onClick:e=>eP(e,o,n,eu),
          className:v()("icon-flex-box"),
          children:(0,s.jsx)("div",{
            className:1===(t=eC.length)?"tag-icon-wrapper icon-one":2===t?"tag-icon-wrapper icon-two":"tag-icon-wrapper icon-three",
            "data-intercom-target":0===el?"Label icon":null,
            children:(0,s.jsx)(d.Z,{
              destroyPopupOnHide:!0,
              overlay:eo?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(I.Z,{
                tabs:eB,
                selectedKeys:[...ew,...R.sessionLabels,...R.userLabels],
                handleItemClicked:(e,t)=>{
                  let n=_()(t.options,{
                    name:e
                  }),
                  s=[...ew,...R.sessionLabels,...R.userLabels];
                  if("guest"!==ek){
                    let i=s.includes(e),
                    a={
                      customLabelName:n.name
                    };
                    i?(B({
                      sessionLabels:R.sessionLabels.filter(t=>t!==e),
                      userLabels:R.userLabels.filter(t=>t!==e)
                    }),a.isTagged=!1):(B({
                      sessionLabels:[...R.sessionLabels,e],
                      userLabels:[...R.userLabels,e]
                    }),a.isTagged=!0),
                    ["sessionsList","aiSessionsList"].includes(W)?(u((0,y.CW)(null,{
                      eventName:a[n.name]?"add_label":"remove_label",
                      track_type:"event",
                      eventProperty:{
                        "label name":t.name,
                        "session ids":[eu],
                        label_type:n.labelType
                      }
                    })),eD(a,n.labelType)):(q({
                      ...a,
                      labelType:n.labelType,
                      uxcamuserIds:[ei],
                      appid:eh
                    }),u((0,y.CW)(null,{
                      eventName:a[n.name]?"add_label":"remove_label",
                      track_type:"event",
                      eventProperty:{
                        "label name":t.name,
                        "user ids":[ei],
                        label_type:n.labelType
                      }
                    })),p.setQueryData(eE,e=>{
                      var t,
                      n,
                      s,
                      i;
                      let o=[...null!==(i=null===(n=e.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.body)&&void 0!==i?i:[]],
                      l=o.findIndex(e=>e.uxcamuserid===ei),
                      r=o[l],
                      c=a.customLabelName,
                      d=a.isTagged;
                      if((null==r?void 0:null===(s=r.customLabel)||void 0===s?void 0:s.indexOf(c))>-1){
                        if(!d){
                          let e=[...r.customLabel];
                          e.splice(e.indexOf(c),1),
                          r={
                            ...r,
                            customLabel:e
                          }
                        }
                      }
                      else d&&(r={
                        ...r,
                        customLabel:[...r.customLabel,c]
                      });
                      return{
                        ...e,
                        data:{
                          ...e.data,
                          data:{
                            ...e.data.data,
                            body:o.map(e=>(null==e?void 0:e.uxcamuserid)===(null==r?void 0:r.uxcamuserid)?{
                              ...e,
                              customLabel:(null==r?void 0:r.customLabel)||[]
                            }:e)
                          }
                        }
                      }
                    }),(null==h?void 0:h.uxcamuserid)===ei&&eS(a.customLabelName))
                  }
                  else r.ZP.info("You are not allowed to perform this action from the guest login.")
                },
                handleTabChange:e=>{
                  G(e)
                },
                searchInput:{
                  placeholder:"Search label",
                  value:"session"===X?O.sessionLabels:O.userLabels,
                  onChange:eR
                },
                hideFooter:!0,
                footer:eO,
                header:ez,
                emptyMessage:eU,
                headerStyle:{
                  backgroundColor:"#F3F4F5",
                  padding:"8px 10px"
                },
                containerStyle:{
                  paddingTop:ep||ed?"0px":"10px"
                }
              }),
              onVisibleChange:e=>{
                e||(U(),B({
                  sessionLabels:[],
                  userLabels:[]
                }))
              },
              overlayClassName:"label-dropdown-menu",
              children:(0,s.jsx)("a",{
                href:"#!",
                className:"stack-icon-box",
                id:"stack-icon-box",
                onClick:eo?()=>null:e=>eP(e,o,n,eu,"stack-icon"),
                children:(0,s.jsx)("span",{
                  className:"icon-item",
                  children:(0,s.jsx)(c.Z,{
                    count:eT,
                    title:!1,
                    children:(0,s.jsx)(N,{
                      className:ep||ed?"label-default":""
                    })
                  })
                },(0,x.v4)())
              })
            })
          })
        }),!eo&&(0,s.jsxs)(s.Fragment,{
          children:[(0,s.jsx)(S.ZP,{
            ...eF
          }),(0,s.jsx)(L.Z,{
            isModalVisible:eb,
            modelHide:eI
          })]
        })]
      })
    });
    t.Z=(0,i.memo)(D)
  },
  88136:function(e,t,n){
    n.d(t,{
      Kk:function(){
        return i
      },
      bk:function(){
        return a
      },
      gM:function(){
        return o
      }
    });
    var s=n(19521);
    let i=s.default.button.withConfig({
      componentId:"sc-4d39751-0"
    })(["margin:0px;padding:2px 8px;height:28px;border-radius:4px;border:none;outline:none;display:flex;gap:8px;align-items:center;background-color:transparent;font-size:12px;cursor:pointer;&:hover{background-color:#EFF5FF;}svg,img{width:14px;height:14px;}"]),
    a=s.default.div.withConfig({
      componentId:"sc-4d39751-1"
    })(["display:flex;gap:8px;button{flex:1;gap:4px;padding:0px 6px;border-radius:4px;justify-content:center;align-items:center;border:1px solid #F3F4F5;}"]),
    o=s.default.div.withConfig({
      componentId:"sc-4d39751-2"
    })(["width:100%;font-size:12px;height:24px;display:flex;align-items:center;.title{font-weight:500;}em{color:#737886;font-weight:300;}"]);
    s.default.div.withConfig({
      componentId:"sc-4d39751-3"
    })(["margin:0px;padding:2px 8px;height:28px;border-radius:4px;border:none;outline:none;display:flex;gap:8px;align-items:center;background-color:transparent;font-size:12px;svg{width:14px;height:14px;color:#F4584C;path{stroke:#F4584C;}}"])
  },
  23242:function(e,t,n){
    n.d(t,{
      R:function(){
        return d
      }
    });
    var s=n(85893);
    n(67294);
    var i=n(19521),
    a=e=>(0,s.jsx)("svg",{
      width:14,
      height:14,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,s.jsx)("path",{
        d:"M6.13 3.079a.422.422 0 0 0-.438.436c0 .253.184.436.437.436a.422.422 0 0 0 .438-.436.422.422 0 0 0-.438-.436Zm5.385 1.318a1.02 1.02 0 0 0-.874-.28v-.014h-.05a2.93 2.93 0 0 0-.52-1.195 3.379 3.379 0 0 0-.968-.887l.343-.49v-.045c0-.01.005-.031.01-.052.008-.033.019-.075.019-.121a.423.423 0 0 0-.438-.437.436.436 0 0 0-.354.21l-.4.577A4.18 4.18 0 0 0 7 1.457c-.428 0-.87.072-1.282.206l-.4-.577c-.09-.132-.22-.211-.355-.211a.422.422 0 0 0-.438.436c0 .085.035.175.092.238l.31.442a3.307 3.307 0 0 0-.988.89 2.77 2.77 0 0 0-.502 1.195h-.075v.013a1.02 1.02 0 0 0-.872.278 1.015 1.015 0 0 0-.294.724v3.213c0 .278.102.535.292.724a1.022 1.022 0 0 0 .874.28v1.278c0 .4.327.726.727.726h.436v.797c0 .278.103.535.293.723.189.19.449.294.727.294.278 0 .536-.102.726-.29.19-.19.294-.447.294-.726v-.795h.873v.794c0 .278.102.535.292.723.189.19.449.294.728.294a1.006 1.006 0 0 0 1.02-1.02v-.795h.436c.4 0 .727-.326.727-.726v-1.25a1.021 1.021 0 0 0 .872-.278c.189-.188.294-.445.294-.724V5.12a1.021 1.021 0 0 0-.292-.723ZM3.363 8.334c0 .093-.053.145-.146.145s-.146-.052-.146-.145V5.12c0-.093.053-.145.146-.145s.146.052.146.145v3.214ZM5.156 2.91A3.146 3.146 0 0 1 7 2.331c.68 0 1.333.207 1.846.581.443.324.741.741.857 1.196H4.3c.116-.456.417-.875.857-1.199Zm.537 9.225c-.008.076-.06.119-.143.119-.093 0-.147-.052-.147-.145v-.796h.29v.822Zm2.766.119c-.093 0-.146-.052-.146-.145v-.796h.29v.822c-.009.076-.06.119-.144.119Zm1.31-1.813H4.237V4.977h5.532v5.463Zm1.165-2.106c0 .093-.054.145-.147.145s-.146-.052-.146-.145V5.12c0-.093.053-.145.146-.145s.146.052.146.145v3.214ZM7.876 3.08a.422.422 0 0 0-.437.436c0 .253.185.436.437.436a.423.423 0 0 0 .44-.437.421.421 0 0 0-.44-.435Z",
        fill:"#737886"
      })
    }),
    o=e=>(0,s.jsx)("svg",{
      "data-name":"Layer 1",
      xmlns:"http://www.w3.org/2000/svg",
      viewBox:"0 0 12 12",
      ...e,
      children:(0,s.jsx)("path",{
        d:"M11.046 8.745c-.276.61-.408.884-.762 1.424-.496.754-1.195 1.695-2.06 1.702-.768.006-.967-.502-2.01-.494-1.044.005-1.261.503-2.03.495-.865-.008-1.527-.856-2.023-1.608C.775 8.152.63 5.677 1.485 4.36c.606-.934 1.565-1.482 2.466-1.482.917 0 1.493.504 2.252.504.735 0 1.184-.506 2.244-.506.802 0 1.65.437 2.257 1.191-1.983 1.087-1.66 3.919.342 4.677Zm-3.404-6.71c.386-.496.679-1.195.573-1.907-.63.043-1.366.445-1.796.965-.39.474-.713 1.179-.587 1.86.687.022 1.398-.387 1.81-.919Z",
        style:{
          fill:"#737886"
        }
      })
    }),
    l=e=>(0,s.jsx)("svg",{
      "data-name":"Layer 1",
      xmlns:"http://www.w3.org/2000/svg",
      viewBox:"0 0 12 12",
      ...e,
      children:(0,s.jsx)("path",{
        d:"m11.83.153-6.28.922v4.672l6.28-.05V.153ZM.174 6.254v3.975l4.762.655-.004-4.6-4.758-.03Zm5.327.064.008 4.637 6.317.892.001-5.519-6.326-.01ZM.17 1.809l.004 3.973 4.761-.027-.002-4.595-4.764.65Z",
        style:{
          fill:"#737886"
        }
      })
    }),
    r=e=>(0,s.jsx)("svg",{
      "data-name":"Layer 1",
      xmlns:"http://www.w3.org/2000/svg",
      viewBox:"0 0 12 12",
      ...e,
      children:(0,s.jsx)("path",{
        d:"M9.987 8.37c.125.055.22.129.282.223s.107.207.134.34c.016.078.034.15.053.216a1.332 1.332 0 0 0 .305.54c.05.054.095.124.134.21.04.086.06.168.06.247 0 .09-.024.166-.071.228s-.106.117-.176.164c-.09.063-.184.117-.281.164-.098.047-.196.096-.293.147-.16.078-.299.16-.416.246a2.249 2.249 0 0 0-.352.328 2.11 2.11 0 0 1-.469.392 1.1 1.1 0 0 1-.287.13 1.542 1.542 0 0 1-.293.052c-.226 0-.414-.039-.562-.117-.149-.078-.277-.22-.387-.428-.031-.058-.062-.096-.094-.111s-.082-.03-.152-.041l-.592-.047a7.505 7.505 0 0 0-.597-.023c-.164 0-.332.013-.504.04-.172.028-.342.061-.51.1-.035.008-.07.037-.106.088s-.083.107-.146.17a.828.828 0 0 1-.252.164 1.1 1.1 0 0 1-.416.076c-.129 0-.268-.013-.416-.04a1.367 1.367 0 0 1-.398-.136 2.679 2.679 0 0 0-.715-.246 15.681 15.681 0 0 0-.744-.117 2.524 2.524 0 0 1-.258-.047c-.082-.02-.155-.052-.217-.1s-.111-.1-.146-.163a.585.585 0 0 1-.06-.264c0-.121.017-.238.048-.352.031-.113.049-.232.053-.357 0-.086-.006-.17-.018-.252a2.649 2.649 0 0 1-.023-.264c0-.199.046-.345.14-.44s.23-.167.41-.222a.743.743 0 0 0 .223-.111 1.388 1.388 0 0 0 .328-.334c.047-.067.1-.133.158-.2a.086.086 0 0 0 .018-.052c0-.047-.002-.092-.006-.135l-.012-.14c0-.266.041-.534.123-.803.082-.27.19-.533.323-.791a6.81 6.81 0 0 1 .445-.744c.164-.239.326-.46.486-.662.227-.29.397-.59.51-.903.113-.312.172-.652.176-1.02 0-.156-.008-.31-.024-.462a4.594 4.594 0 0 1-.023-.469c0-.312.035-.594.105-.844.07-.25.18-.465.328-.644.149-.18.342-.315.58-.405.239-.09.524-.138.856-.146.395 0 .709.078.943.234.235.157.414.362.54.616.124.253.205.537.24.85.035.312.054.628.058.948v.1c0 .16.002.303.006.428a1.948 1.948 0 0 0 .17.732c.055.121.137.252.246.393.188.246.38.494.574.744s.373.508.534.773c.16.266.29.543.392.832.102.29.154.602.158.938 0 .27-.04.53-.123.78ZM5.071 2.265c.055 0 .1.013.135.04a.268.268 0 0 1 .082.112c.02.047.033.094.041.14a.89.89 0 0 1 .012.147c0 .04-.006.07-.018.094a.202.202 0 0 1-.052.064l-.07.059a.589.589 0 0 0-.071.07.321.321 0 0 1-.111.106c-.047.027-.092.056-.135.088s-.082.064-.117.1a.198.198 0 0 0-.053.146c0 .035.017.064.053.088.093.062.16.138.199.228.039.09.082.178.129.264.047.086.107.158.181.217s.19.087.346.087h.035c.156-.007.305-.048.446-.123.14-.074.28-.152.421-.234.02-.012.045-.023.077-.035s.056-.026.076-.041l.428-.334a.691.691 0 0 0 .017-.076l.012-.082a.177.177 0 0 0-.03-.106.3.3 0 0 0-.07-.07.255.255 0 0 0-.1-.041.682.682 0 0 1-.105-.03.812.812 0 0 1-.264-.105 1.092 1.092 0 0 0-.257-.117c-.016-.004-.028-.016-.036-.035a.738.738 0 0 1-.023-.07.172.172 0 0 1-.006-.077.095.095 0 0 0-.006-.058c0-.047.004-.096.012-.147.008-.05.025-.1.053-.146a.313.313 0 0 1 .094-.106.308.308 0 0 1 .152-.04c.121 0 .209.044.264.134.054.09.084.188.087.293 0 .05-.01.096-.029.135a.284.284 0 0 0-.03.129c0 .03.01.052.03.064.02.012.045.02.076.024.09 0 .149-.022.176-.065a.4.4 0 0 0 .047-.193c0-.09-.008-.19-.023-.3a.989.989 0 0 0-.094-.304.726.726 0 0 0-.182-.234.43.43 0 0 0-.287-.094c-.203 0-.35.05-.44.152-.09.102-.136.254-.14.457 0 .059.004.118.012.176.007.059.011.117.011.176 0 .02-.002.03-.005.03s-.016-.005-.036-.012a3.192 3.192 0 0 1-.07-.03.58.58 0 0 0-.088-.029.385.385 0 0 0-.152-.006.756.756 0 0 1-.094.006c-.055 0-.082-.01-.082-.03 0-.058-.004-.132-.012-.222a1.112 1.112 0 0 0-.058-.27.746.746 0 0 0-.117-.222c-.047-.059-.118-.09-.211-.094a.242.242 0 0 0-.17.065.679.679 0 0 0-.123.152.48.48 0 0 0-.065.2 4.073 4.073 0 0 1-.023.187 1.095 1.095 0 0 0 .117.469c.023.046.05.07.082.07.02 0 .045-.014.076-.041.031-.028.047-.053.047-.076 0-.012-.006-.02-.018-.024a.11.11 0 0 0-.035-.006c-.027 0-.05-.013-.07-.04a.351.351 0 0 1-.047-.095 3.857 3.857 0 0 1-.035-.11.199.199 0 0 1-.012-.089c0-.078.018-.148.053-.21.035-.063.1-.096.193-.1Zm-1.277 9.123c.094 0 .186-.008.275-.024a.727.727 0 0 0 .252-.093.46.46 0 0 0 .176-.182.707.707 0 0 0 .07-.281.612.612 0 0 0-.035-.205.723.723 0 0 0-.1-.188 2.072 2.072 0 0 0-.152-.21 2.065 2.065 0 0 1-.152-.212l-.217-.322a8.298 8.298 0 0 1-.387-.639 1.987 1.987 0 0 0-.199-.299.902.902 0 0 0-.164-.158.352.352 0 0 0-.217-.07.327.327 0 0 0-.222.082 1.899 1.899 0 0 0-.194.2c-.066.077-.14.153-.222.228a.879.879 0 0 1-.317.175.557.557 0 0 0-.234.13c-.055.054-.082.138-.082.251 0 .078.006.157.017.235.012.078.02.156.024.234a.938.938 0 0 1-.047.299.868.868 0 0 0-.047.275c0 .106.037.18.111.223a.742.742 0 0 0 .252.088c.118.02.229.035.334.047.106.011.21.029.31.052.103.024.204.05.306.077.101.027.209.07.322.129a.858.858 0 0 0 .105.04l.159.053c.058.02.113.035.164.047s.088.018.111.018Zm2.144-.703c.11 0 .227-.012.352-.036a2.68 2.68 0 0 0 .732-.252c.114-.058.215-.123.305-.193a.227.227 0 0 0 .041-.082v-.006c.024-.086.043-.18.059-.281.015-.102.03-.205.04-.31.013-.106.026-.21.042-.311.015-.102.03-.201.04-.299.016-.105.036-.207.06-.305.023-.097.054-.19.093-.275a.773.773 0 0 1 .158-.229c.067-.066.153-.128.258-.187v-.012l-.006-.017c0-.035.012-.073.035-.112.024-.039.053-.08.088-.123a.436.436 0 0 1 .112-.1.711.711 0 0 1 .123-.058 7.52 7.52 0 0 0-.076-.281 3.694 3.694 0 0 1-.07-.281 5.293 5.293 0 0 0-.071-.358 2.2 2.2 0 0 0-.082-.27.986.986 0 0 0-.135-.24c-.058-.078-.13-.171-.217-.28a.887.887 0 0 1-.088-.118.416.416 0 0 1-.035-.147 1.641 1.641 0 0 0-.035-.152 7.165 7.165 0 0 0-.182-.563 2.183 2.183 0 0 0-.128-.286 2.906 2.906 0 0 0-.13-.217c-.038-.059-.08-.088-.122-.088a.698.698 0 0 0-.334.111c-.13.074-.266.156-.41.246-.145.09-.286.174-.422.252a.708.708 0 0 1-.37.112.52.52 0 0 1-.322-.112 1.677 1.677 0 0 1-.27-.258 8.847 8.847 0 0 1-.204-.252c-.055-.07-.096-.109-.123-.117-.032 0-.05.024-.053.07-.004.047-.006.1-.006.159v.1c0 .023-.004.038-.012.046-.043.09-.09.178-.14.264-.051.086-.102.174-.153.264a1.208 1.208 0 0 0-.164.568c0 .059.004.117.012.176a.464.464 0 0 0 .059.17l-.012.023a.982.982 0 0 1-.1.117.804.804 0 0 0-.1.123 2.097 2.097 0 0 0-.304.698c-.059.25-.09.504-.094.761 0 .067.004.133.012.2.008.066.012.132.012.199 0 .02-.002.04-.006.064a.394.394 0 0 0-.006.065.563.563 0 0 1 .234.082c.09.05.188.115.293.193.106.078.205.168.3.27.093.101.183.2.269.298.086.098.148.196.187.293.04.098.065.178.076.24a.333.333 0 0 1-.093.247.716.716 0 0 1-.235.152c.067.117.149.217.246.299.098.082.203.148.317.2.113.05.236.087.369.11.133.024.261.036.386.036Zm2.35.832a.83.83 0 0 0 .24-.036c.121-.035.233-.085.334-.152.102-.066.196-.148.282-.246a2.297 2.297 0 0 1 .732-.562c.066-.032.13-.061.193-.088.063-.028.127-.061.194-.1a.73.73 0 0 0 .123-.1.192.192 0 0 0 .058-.14.22.22 0 0 0-.017-.088.435.435 0 0 0-.053-.088 3.874 3.874 0 0 1-.152-.229 1.473 1.473 0 0 1-.112-.222l-.093-.235a1.916 1.916 0 0 1-.082-.263.21.21 0 0 0-.041-.076.398.398 0 0 0-.346-.176.4.4 0 0 0-.2.053c-.062.035-.128.072-.199.11-.07.04-.14.077-.21.112a.491.491 0 0 1-.223.053.308.308 0 0 1-.194-.059.477.477 0 0 1-.128-.158 1.66 1.66 0 0 1-.088-.193 10.565 10.565 0 0 1-.07-.194.943.943 0 0 1-.106.141.5.5 0 0 0-.094.152c-.05.118-.082.248-.094.393-.02.227-.045.447-.076.662-.031.215-.084.43-.158.645a1.44 1.44 0 0 0-.047.205c-.012.074-.02.146-.023.217 0 .191.058.35.175.474a.62.62 0 0 0 .475.188Z",
        style:{
          fill:"#737886"
        }
      })
    });
    let c=i.default.span.withConfig({
      componentId:"sc-4b94d951-0"
    })(["display:flex;align-items:center;justify-content:center;margin-left:4px;svg{min-width:12px;min-height:12px;width:12px;height:12px;}"]),
    d=e=>{
      switch(e){
        case"Windows":return(0,s.jsx)(c,{
          children:(0,s.jsx)(l,{})
        });
        case"Android":return(0,s.jsx)(c,{
          children:(0,s.jsx)(a,{})
        });
        case"iOS":case"Mac OS":case"MacOS":case"Macintosh":return(0,s.jsx)(c,{
          children:(0,s.jsx)(o,{})
        });
        case"Linux":return(0,s.jsx)(c,{
          children:(0,s.jsx)(r,{})
        });
        default:return null
      }
    }
  },
  25971:function(e,t,n){
    var s=n(85893),
    i=n(67294),
    a=n(39284);
    t.Z=(0,i.memo)(e=>{
      let{
        onOk:t,
        onCancel:n,
        title:i,
        deleteModalVisible:o,
        deleteLoading:l,
        content:r
      }=e;
      return(0,s.jsx)(a.default,{
        title:i,
        visible:o,
        onOk:()=>t(),
        confirmLoading:l,
        onCancel:()=>n(),
        okText:"Yes",
        okType:"danger",
        cancelText:"Cancel",
        maskClosable:!1,
        children:(0,s.jsx)("p",{
          children:r
        })
      })
    })
  },
  13927:function(e,t,n){
    function s(e){
      let t=["#EECA93","#BD489C","#4F6996","#4E9BAE","#02343F","#815854","#1AAFBC","#0063B2","#CBCE91","#B1624E","#7B9ACC","#603F83","#004020","#0080E0","#800060","#2CAE66","#FFD662","#CF8360","#DF6589","#4B878B","#BD7F37","#F96167","#F9D141","#CCF381","#8BD8BD","#F3A94F","#348597","#307773","#800020"],
      n=0;
      if(0===e.length)return n;
      for(let t=0;t<e.length;t++)n=e.charCodeAt(t)+((n<<5)-n),
      n&=n;
      return n=(n%t.length+t.length)%t.length,
      t[n]
    }
    function i(e){
      let t=["#FED64D","#FE909F","#846388","#31DFA6","#FFA265","#F09CDD","#3DD3DD","#FDBB3A","#FF73A5","#699CD9","#4ABD86","#FF6E65","#CE7BE1","#7BC0F1","#F3B2A9"];
      return t[e%t.length]
    }
    n.d(t,{
      Z:function(){
        return s
      },
      g:function(){
        return i
      }
    })
  },
  1102:function(e,t,n){
    var s=n(85893),
    i=n(67294);
    t.Z=(0,i.memo)(e=>{
      let{
        indeterminate:t,
        className:n="",
        ...a
      }=e,
      o=(0,i.useRef)(null);
      return(0,i.useEffect)(()=>{
        "boolean"==typeof t&&(o.current.indeterminate=!a.checked&&t)
      },[o,t]),
      (0,s.jsx)("input",{
        type:"checkbox",
        ref:o,
        className:"".concat(n," cursor-pointer"),
        ...a
      })
    })
  },
  13354:function(e,t,n){
    n.d(t,{
      h:function(){
        return i
      }
    });
    var s=n(67294);
    let i=()=>{
      let[{
        pageIndex:e,
        pageSize:t
      },n]=(0,s.useState)({
        pageIndex:1,
        pageSize:1
      });
      return{
        pagination:(0,s.useMemo)(()=>({
          pageIndex:e,
          pageSize:t
        }),[e,t]),
        setPagination:n
      }
    }
  },
  3641:function(e,t,n){
    n.d(t,{
      o:function(){
        return x
      }
    });
    var s=n(67294),
    i=n(11163),
    a=n.n(i),
    o=n(65885),
    l=n(88767),
    r=n(13979),
    c=n(14416),
    d=n(30663),
    u=n(28166),
    p=n(36205),
    m=n(5257),
    h=n(73495),
    g=n(49644),
    f=n(16783);
    let v=new o.Z,
    x=e=>{
      var t,
      n;
      let{
        expanded:i
      }=e,
      {
        currentAppReducer:o,
        urlReducer:x,
        appFilter:b
      }=(0,c.v9)(e=>e),
      y=null==b?void 0:null===(t=b.event)||void 0===t?void 0:t.segment,
      w=null==b?void 0:null===(n=b.session)||void 0===n?void 0:n.segment,
      j=null==b?void 0:b.dateSegment,
      {
        _id:C
      }=o,
      {
        sessionpage:_,
        sessionid:k
      }=x,
      L=(0,s.useMemo)(()=>({
        eventsList:y,
        sessionsList:w,
        aiSessionsList:w
      })[x.parentType]||[],[y,w,x.parentType]),
      {
        appId:S,
        autoplay:I,
        parentType:F,
        eventid:M,
        starttime:Z,
        uxcamuserid:N,
        notetab:D
      }=x,
      E=(0,s.useMemo)(()=>Number(_),[_]),
      P=(0,c.I0)(),
      T=(0,l.useQueryClient)(),
      {
        setSelectedTab:A
      }=(0,m.he)(),
      {
        userTime:R
      }=(0,m.W4)(),
      {
        videoElemRef:B
      }=(0,m.rS)(),
      O=(0,p.Y)(),
      {
        markSessionLabel:z
      }=(0,u.Aj)(),
      U=v.get("loggedInFromAdminDashboard"),
      V=(0,s.useCallback)(e=>{
        let t="/app/".concat(C,"/sessions/list/").concat(e||1,"/").concat(k,"?"),
        n="appId=".concat(C,"&parentType=sessionsList&sessionid=").concat(k,"&sessionpage=").concat(e||1,"&starttime=0#autoplay");
        a().push("/integration?".concat(n),t)
      },[k,C]),
      q=e=>{
        var t,
        n,
        s,
        i,
        a,
        o;
        let l="";
        try{
          l=["sessionItems",JSON.parse(localStorage.getItem("sessionsListReqBody"))]
        }
        catch(e){}let c=[e],
        d=T.getQueryData(l),
        u=(null==d?void 0:null===(n=d.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.body)||[],
        p=(0,g.Sx)(c,u,"sessionid"),
        m=(0,g.Gf)(c,u,"sessionid"),
        h=T.getQueriesData(["sessionItems"]),
        f=null==h?void 0:null===(o=h[0])||void 0===o?void 0:null===(a=o[1])||void 0===a?void 0:null===(i=a.data)||void 0===i?void 0:null===(s=i.data)||void 0===s?void 0:s.body;
        (null==p?void 0:p.length)&&(null==m?void 0:m.length)||(p=(0,g.Sx)(c,f,"sessionid"),m=(0,g.Gf)(c,f,"sessionid"));
        let v={
          customLabelName:"isViewed",
          isTagged:!0,
          sessionIds:c,
          labelType:"session",
          appid:C,
          uxcamuserIds:p,
          uploadedOn:m,
          debugSource:3,
          debugCacheLen:null==u?void 0:u.length,
          debugAltCacheLen:null==f?void 0:f.length
        },
        x=e=>null!=e&&!Array.isArray(e)&&"object"==typeof e&&0===Object.keys(e).length,
        b=e=>Array.isArray(e)&&0===e.length,
        y=e=>null==e,
        w=e=>y(e)||b(e)||x(e);
        try{
          let e=w(p),
          t=w(m);
          (e||t)&&r.l.error("cant find required fields",{
            source:3,
            missing:{
              sessionUserIds:e,
              sessionUploadDate:t
            },
            sessionQueryKey:l,
            selectedSession:c,
            queryList:u,
            sessionResponse:d,
            payload:v
          })
        }
        catch(e){
          r.l.error("cant find required fields - catch error",{
            source:31,
            message:e instanceof Error?e.message:String(e),
            name:e instanceof Error?e.name:void 0
          })
        }
        z(v),
        T.setQueryData(l,e=>{
          var t,
          n;
          if(!(null==e?void 0:null===(n=e.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.body))return e;
          let s=e.data.data.body.map(e=>c.includes(e.sessionid)?{
            ...e,
            isViewed:!0
          }:e);
          return{
            ...e,
            data:{
              ...e.data,
              data:{
                ...e.data.data,
                body:s
              }
            }
          }
        })
      },
      Q=(0,s.useCallback)(function(e,t){
        let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,
        s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],
        i="/app/".concat(C,"/aisessions/list/").concat(_||1,"/").concat(e).concat(n?"/".concat(n):"","?secondarysessionid=").concat(t||e,"&");
        return"".concat((0,h.$)(i,[...L,{
          ...j
        }])).concat(s?"#autoplay":"")
      },[C,_,L,j,F]),
      W=(0,s.useCallback)(function(e,t,n,s){
        let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,
        o=t?"#autoplay":"";
        n&&"1"!==U&&q(e);
        let l=s||e,
        r=i?"/".concat(i):"",
        c="/app/".concat(C,"/aisessions/list/").concat(_||1,"/").concat(e).concat(r,"?secondarysessionid=").concat(l,"&");
        c="".concat((0,h.$)(c,[...L,{
          ...j
        }])).concat(o);
        let d="appId=".concat(C,"&parentType=aiSessionsList&sessionid=").concat(e,"&secondarysessionid=").concat(l,"&sessionpage=").concat(_||1,"&starttime=").concat(i).concat(o);
        return a().push("/integration?".concat(d),c),
        c
      },[z,C,_,L,j,F]),
      Y=(0,s.useCallback)((e,t)=>{
        var n;
        i&&P((0,d.CW)(null,{
          eventName:"session_replay_stopped",
          track_type:"event",
          eventProperty:{
            sessionId:e,
            userTime:t||R,
            duration:null==O?void 0:null===(n=O.current)||void 0===n?void 0:n.duration
          }
        }))
      },[P,i,R,O]),
      H=(0,s.useCallback)(function(e){
        let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],
        n=arguments.length>2?arguments[2]:void 0;
        arguments.length>3&&arguments[3],
        W(e,t,!n),
        (null==B?void 0:B.current)&&B.current.play().catch(()=>null),
        i&&P((0,d.CW)(null,{
          eventName:"open_session_replay",
          track_type:"event",
          eventProperty:{}
        }))
      },[P,i,W,B]),
      J=(0,s.useCallback)(e=>{
        W(e,!1),
        (null==B?void 0:B.current)&&B.current.pause()
      },[W,B]);
      return{
        buildSessionUrl:Q,
        handleRowClick:async(e,t,n,s)=>{
          var a;
          let o=(null==t?void 0:null===(a=t.props)||void 0===a?void 0:a.children)||t;
          i&&P((0,d.CW)(null,{
            eventName:"open_session_replay",
            track_type:"event",
            eventProperty:{}
          })),
          0===e.button&&W(o,!1,n),
          s&&A("notes")
        },
        handleUserClick:(0,s.useCallback)(e=>{
          let t=k?"1/".concat(k):"1",
          n="/app/".concat(C,"/users/list/1/").concat(e,"/session/").concat(t);
          t=k?"&sessionid=".concat(k):"";
          let s="appId=".concat(C,"&type=session&parentType=usersList&uxcamuserid=").concat(e,"&userpage=1&sessionpage=1&sort=ture").concat(t);
          a().push("/integration?".concat(s),"".concat(n))
        },[C,k]),
        handleViewedSession:q,
        navigatePage:V,
        onItemPlay:H,
        onItemPause:J,
        onItemSetActive:W,
        trackUserTimeEvent:Y,
        pageChange:async e=>{
          E!==e&&(P((0,d.CW)(null,{
            eventName:"navigate_sessions_table",
            track_type:"event",
            eventProperty:{
              currentPage:e
            }
          })),(0,f.I)({
            page:e,
            appId:S,
            sessionid:k,
            autoplayURL:I,
            segment:L,
            parentType:F,
            eventid:M,
            starttime:Z,
            expanded:i,
            uxcamuserid:N,
            notetab:D,
            dateSegment:k&&j
          }))
        }
      }
    }
  },
  22453:function(e,t,n){
    n.d(t,{
      Z:function(){
        return I
      }
    });
    var s=n(85893),
    i=n(67294),
    a=n(68457),
    o=n(74936),
    l=n(80432),
    r=n(12016),
    c=n(14416),
    d=n(39625),
    u=n(76501),
    p=n(19521),
    m=n(88767),
    h=n(25971),
    g=n(98777),
    f=n(47639),
    v=n(76633),
    x=n(5257),
    b=n(39284),
    y=n(18879),
    w=()=>{
      let[e,t]=(0,i.useState)(!1),
      [n,a]=(0,i.useState)(""),
      {
        currentOrgReducer:l
      }=(0,c.v9)(e=>e),
      {
        sessionDetail:r,
        setVideoLimitPopup:d,
        videoLimitPopup:u
      }=(0,x.Lc)(),
      p=()=>{
        t(!1),
        d(!1)
      },
      m=()=>{
        t(!0),
        (null==r?void 0:r._id)&&!(null==r?void 0:r.isPlayable)&&a("You have exceeded the monthly session quota limit allowed on your plan. You can upgrade your plan to increase the limits and again be able to view your sessions."),
        (null==r?void 0:r.verifiedPastVideoRecordingLimit)&&a("This video has been recorded after your plan's video recording limit has been reached. Gain access to watch the video by simply upgrading your plan.")
      };
      return(0,i.useEffect)(()=>{
        u&&!e&&m()
      },[u]),
      (0,s.jsxs)(b.default,{
        visible:e,
        onCancel:p,
        footer:null,
        afterClose:p,
        destroyOnClose:!0,
        className:"limit-message-box",
        children:[(0,s.jsx)("div",{
          className:"modal-header",
          children:(0,s.jsx)("img",{
            src:"/static/uxcam-new-logo.svg",
            alt:"",
            style:{
              width:"100px"
            }
          })
        }),(0,s.jsx)("div",{
          className:"modal-body",
          children:(0,s.jsx)("p",{
            children:n
          })
        }),(0,s.jsxs)("div",{
          className:"modal-footer",
          children:[(0,s.jsx)("a",{
            href:"".concat("https://app.uxcam.com","/settings/org/").concat(null==l?void 0:l.orgId,"/plan"),
            className:"ant-btn ant-btn-primary",
            children:"Upgrade"
          }),(0,s.jsx)(o.Z,{
            onClick:()=>(0,y.aL)(),
            style:{
              textDecoration:" underline "
            },
            children:"Get in touch"
          })]
        })]
      })
    },
    j=n(55393);
    let C=a.default.Item,
    _=p.default.button.withConfig({
      componentId:"sc-201ed15f-0"
    })(["border:none;background-color:#FFFFFF;transition:all 0.2s ease;border-radius:50%;height:24px;width:24px;padding:0;margin:0;margin-left:8px;cursor:pointer;&:hover{background-color:#EFF5FF !important;}img{margin-top:-2px;}"]),
    k=p.default.button.withConfig({
      componentId:"sc-201ed15f-1"
    })(["border:none;background:#F3F4F5;border-radius:50%;height:24px;width:24px;display:flex;justify-content:center;align-items:center;cursor:pointer;path{fill:#5D97FF;}"]),
    L=p.default.div.withConfig({
      componentId:"sc-201ed15f-2"
    })(["li{&:hover{background:transparent;}.ant-dropdown-menu-title-content{.ant-btn{box-shadow:none !important;}}}"]),
    S=(0,p.default)(o.Z).withConfig({
      componentId:"sc-201ed15f-3"
    })(["border:none;"]);
    var I=e=>{
      let{
        alternativeStyle:t=!1,
        passedSessionId:n=""
      }=e,
      o=(0,c.I0)(),
      {
        issueListDetailQueryKey:p
      }=(0,j.Z)(),
      b=(0,m.useQueryClient)(),
      y="",
      I="",
      F="";
      try{
        y=b.getQueryData(["sessionItems",JSON.parse(localStorage.getItem("sessionsListReqBody"))]),
        I=b.getQueryData(["aiSessionItems",JSON.parse(localStorage.getItem("aiSessionsListReqBody"))]),
        F=b.getQueryData(["eventList",JSON.parse(localStorage.getItem("eventsListReqBody"))])
      }
      catch(e){}let M=b.getQueryData(p),
      {
        sessionDetail:Z,
        setVideoLimitPopup:N,
        videoLimitPopup:D
      }=(0,x.Lc)(),
      [E,P]=(0,i.useState)(!1),
      {
        urlReducer:T,
        currentOrgReducer:A,
        profileReducer:R
      }=(0,c.v9)(e=>e),
      {
        name:B
      }=R,
      {
        appId:O,
        sessionid:z,
        shareSessionKey:U
      }=T,
      V=n||z,
      {
        mutate:q,
        isLoading:Q
      }=(0,m.useMutation)(e=>(0,g.be)({
        method:"POST",
        url:"".concat("https://data-management.uxcam.com","/deletion_requests"),
        data:e,
        withCredentials:!0
      }),{
        onSuccess:()=>{
          let e;
          P(!1),
          l.ZP.success("Session is deleted successfully"),
          e="issues"===T.parentType?"".concat("https://app.uxcam.com","/app/").concat(T.appId,"/issues/").concat(T.issueType,"/").concat(T.issuepage,"/").concat(T.issueid):"".concat("https://app.uxcam.com","/app/").concat(T.appId,"/").concat({
            sessionsList:"sessions/list",
            usersList:"users/list",
            screensList:"heatmaps/list",
            eventsList:"events/list",
            aiSessionsList:"aisessions/list"
          }[T.parentType]),
          window.location.href=e
        },
        onError:async e=>{
          var t,
          n,
          s,
          i,
          a;
          (null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.success)||await l.ZP.error(null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(i=a.data)||void 0===i?void 0:null===(s=i.error)||void 0===s?void 0:s.message),
          P(!1)
        }
      }),
      W=async()=>{
        var e,
        t,
        n,
        s,
        i,
        a,
        o,
        l;
        let r;
        (null==T?void 0:T.parentType)==="sessionsList"?r=null==y?void 0:null===(t=y.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.body:(null==T?void 0:T.parentType)==="eventsList"?r=null==F?void 0:null===(s=F.data)||void 0===s?void 0:null===(n=s.data)||void 0===n?void 0:n.body:(null==T?void 0:T.parentType)==="issues"?r=null==M?void 0:null===(a=M.data)||void 0===a?void 0:null===(i=a.data)||void 0===i?void 0:i.body:(null==T?void 0:T.parentType)==="aiSessionsList"&&(r=null==I?void 0:null===(l=I.data)||void 0===l?void 0:null===(o=l.data)||void 0===o?void 0:o.body),
        q({
          table_name:"session",
          app_id:O,
          requested_by_user_name:B,
          identifiers:(0,v.SG)([V],r)
        })
      },
      Y=()=>{
        P(!1)
      },
      H=()=>{
        if(!(null==Z?void 0:Z.isPlayable)||(null==Z?void 0:Z.verifiedPastVideoRecordingLimit)){
          N(!D);
          return
        }
        if(!(null==Z?void 0:Z.isPlayable)){
          l.ZP.info((0,s.jsxs)("span",{
            children:["Please"," ",(0,s.jsx)("a",{
              style:{
                textDecoration:"underline"
              },
              href:"".concat("https://app.uxcam.com","/settings/org/").concat(null==A?void 0:A.orgId,"/plan"),
              children:"upgrade your plan"
            })," ","to enable this feature or get in touch with the customer success team."]
          }),5);
          return
        }
        o((0,f.hI)({
          action:"Video downloaded"
        })),
        setTimeout(()=>{
          window.open(null==Z?void 0:Z.downloadableLink,"_blank","noopener,noreferrer")
        },100)
      };
      return(0,s.jsxs)(s.Fragment,{
        children:[(0,s.jsx)(r.Z,{
          overlay:()=>{
            var e;
            return(0,s.jsx)(a.default,{
              children:(0,s.jsxs)(L,{
                children:[(null==Z?void 0:null===(e=Z.device)||void 0===e?void 0:e.platform)===3?null:(0,s.jsx)(C,{
                  children:(0,s.jsxs)(S,{
                    onClick:()=>H(),
                    children:[(0,s.jsx)(d.Z,{})," Download video"]
                  })
                },"download"),!U&&(0,s.jsx)(C,{
                  children:(0,s.jsxs)(s.Fragment,{
                    children:[(0,s.jsx)(h.Z,{
                      title:"Delete Session?",
                      content:"Do you want to delete this session? This action is irreversible.",
                      onOk:W,
                      onCancel:Y,
                      deleteLoading:Q,
                      deleteModalVisible:E
                    }),(0,s.jsxs)(S,{
                      onClick:()=>P(!0),
                      children:[(0,s.jsx)(u.Z,{})," Delete session"]
                    })]
                  })
                },"delete")]
              })
            })
          },
          trigger:["hover"],
          children:t?(0,s.jsx)(k,{
            "data-intercom-target":"Session options",
            children:(0,s.jsx)("img",{
              src:"/static/sessions/threeDot.svg",
              alt:""
            })
          }):(0,s.jsx)(_,{
            "data-intercom-target":"Session options",
            children:(0,s.jsx)("img",{
              src:"/static/sessions/threeDot.svg",
              alt:""
            })
          })
        }),D&&(0,s.jsx)(w,{})]
      })
    }
  },
  86578:function(e,t,n){
    n.d(t,{
      Z:function(){
        return p
      }
    });
    var s=n(85893);
    n(67294);
    var i=n(39284),
    a=n(74936),
    o=n(19521);
    let l=o.default.div.withConfig({
      componentId:"sc-cdb9ef4d-0"
    })(["text-align:center;"]),
    r=o.default.div.withConfig({
      componentId:"sc-cdb9ef4d-1"
    })(["text-align:left;border-bottom:1px solid #e6e6e6;margin-left:-15px;margin-right:-15px;padding:0 15px 5px;"]),
    c=o.default.div.withConfig({
      componentId:"sc-cdb9ef4d-2"
    })(["padding:30px 0;"]),
    d=o.default.img.withConfig({
      componentId:"sc-cdb9ef4d-3"
    })(["width:100px;position:relative;top:-5px;"]),
    u=(0,o.default)(a.Z).withConfig({
      componentId:"sc-cdb9ef4d-4"
    })(["color:#5d97ff;border:none;:hover{border:none;}span{text-decoration:underline;}"]);
    var p=e=>{
      let{
        upgradePlan:t,
        handleUpgrade:n,
        handleGetinTouch:o,
        handleCancel:p,
        acceptText:m
      }=e;
      return(0,s.jsx)(i.default,{
        visible:t,
        onCancel:()=>p(),
        footer:null,
        className:"limit-message-box",
        width:"520px",
        children:(0,s.jsxs)(l,{
          children:[(0,s.jsx)(r,{
            children:(0,s.jsx)(d,{
              src:"/static/uxcam-new-logo.svg",
              alt:""
            })
          }),(0,s.jsx)(c,{
            children:(0,s.jsx)("p",{
              children:"Please upgrade your plan to enable this feature or get in touch with the customer success team."
            })
          }),(0,s.jsxs)(s.Fragment,{
            children:[(0,s.jsx)(a.Z,{
              type:"primary",
              onClick:()=>n(),
              children:m||"Request Pricing"
            }),(0,s.jsx)(u,{
              type:"link",
              onClick:()=>o(),
              children:"Get in touch"
            })]
          })]
        })
      })
    }
  },
  48715:function(e,t,n){
    var s=n(49588),
    i=n(30663),
    a=n(30998),
    o=n.n(a),
    l=n(57557),
    r=n.n(l),
    c=n(14416),
    d=n(99252),
    u=n(92046);
    let p={
      session_count_:"generate_sessions_chart",
      session_unique_user_count_:"generate_total_users_chart",
      session_new_users_count_:"generate_new_users_chart",
      session_is_crashed_sum:"generate_total_crashes_chart",
      session_is_crashed_percentage:"generate_crashes_frequency_chart",
      session_rage_number_sum:"generate_total_ragetaps_chart",
      session_rage_number_avg:"generate_average_ragetaps_chart",
      session_duration_sum:"generate_total_timeinapp_chart",
      session_duration_avg:"generate_average_timeinapp_chart",
      session_screen_number_sum:"generate_total_screenvisits_chart",
      session_screen_number_avg:"generate_average_screenvisits_chart",
      session_screen_count_sum:"generate_total_screenvisits_chart",
      session_screen_count_avg:"generate_average_screenvisits_chart",
      session_rage_gesture_count_sum:"generate_total_ragetaps_chart",
      session_rage_gesture_count_avg:"generate_average_ragetaps_chart"
    };
    t.Z=()=>{
      let e=(0,c.I0)(),
      {
        sessionStatisticsReducer:{
          groupingOptions:t,
          aggregation_list:n,
          group_list:a,
          series_plot_options:l
        },
        urlReducer:{
          appId:m,
          parentType:h
        },
        appFilter:g
      }=(0,c.v9)(e=>e),
      f=[...g.session.segment],
      {
        dateSegment:v
      }=g,
      x=t=>e((0,s.bF)({
        appid:m,
        webApp:t
      })),
      b=(t,c)=>{
        let{
          grpList:x,
          seriesPlotsOptions:b,
          agg_list:y
        }=t||{},
        w=a?[...a]:[];
        if(x&&(w=x),w.length){
          let e=o()(w,{
            attribute:"session_period"
          });
          e>-1&&(w[e].attribute="session_period_day")
        }
        let j={
          appid:m,
          aggregation_list:y?[y]:[n],
          group_list:w=w.map(e=>({
            ...e,
            time_zone_offset:(0,d.pQ)(v.tz,new Date)
          })),
          filters:[...c||f],
          date_range:{
            ...g.dateSegment,
            timezoneOffset:(0,d.pQ)(v.tz,new Date)
          },
          series_plot_options:r()(b||l,"display","key","img")
        };
        e((0,s.G9)(j));
        let{
          group_list:C,
          filters:_,
          dateRange:k,
          aggregation_list:L
        }=j;
        "sessionStatistics"===h&&e((0,i.CW)(null,{
          eventName:p["".concat(L[0].attribute,"_").concat(L[0].operator)],
          track_type:"event",
          eventProperty:{
            chartType:(null==l?void 0:l.type)||"bar",
            grouping:C,
            filters:(0,u.aZ)(_),
            dateRange:k
          }
        }))
      };
      return{
        callAnalyticsApi:async(e,n)=>{
          await b(e),
          t||x(n)
        },
        callStatsBoxes:t=>{
          let n=t||f,
          i=()=>({
            appid:m,
            filters:[...n],
            date_range:{
              ...g.dateSegment
            }
          }),
          a=i(),
          o=i();
          e((0,s.KB)(a)),
          e((0,s.$M)(o))
        },
        callGraphApi:b
      }
    }
  },
  67814:function(e,t){
    t.Z=()=>{
      let e=!1;
      try{
        e=!!localStorage.getItem("showSchematicReplayModal")
      }
      catch(e){}return{
        localShowSchematicReplayModal:e,
        setSchematicReplayModal:e=>{
          try{
            localStorage.setItem("showSchematicReplayModal",JSON.stringify(e))
          }
          catch(e){}
        }
      }
    }
  },
  52034:function(e,t,n){
    n.d(t,{
      uB:function(){
        return K
      },
      GE:function(){
        return en
      },
      HA:function(){
        return et
      },
      ZP:function(){
        return ec
      },
      fg:function(){
        return el
      },
      AP:function(){
        return eo
      }
    });
    var s=n(85893),
    i=n(30381),
    a=n.n(i),
    o=n(67294),
    l=n(19521),
    r=n(83441),
    c=n(48203),
    d=n(88812),
    u=n(18879),
    p=n(99252),
    m=n(92046),
    h=n(14416),
    g=n(18721),
    f=n.n(g),
    v=n(23357),
    x=n(27060),
    b=n(1102),
    y=n(42554),
    w=n(23242),
    j=n(86927),
    C=n(65885),
    _=n(88767);
    n(13979);
    var k=n(92434),
    L=n(8357),
    S=n(49644),
    I=n(28166),
    F=n(3641);
    let M=new C.Z,
    Z=l.default.div.withConfig({
      componentId:"sc-c9fe1ff3-0"
    })(["width:100%;display:flex;align-items:center;gap:14px;#outside-icon-box{padding-left:0;.ant-badge-count{display:none;}}background-color:",";"],e=>(null==e?void 0:e.isActive)?"#DFEAFF":""),
    N=l.default.div.withConfig({
      componentId:"sc-c9fe1ff3-1"
    })(["height:6px;width:6px;border-radius:50%;background-color:",";"],e=>{
      let{
        unread:t
      }=e;
      return t?"#DC4F44":"#D0D2D7"
    }),
    D=l.default.div.withConfig({
      componentId:"sc-c9fe1ff3-2"
    })(["display:flex;flex-direction:column;justify-content:center;"]),
    E=l.default.div.withConfig({
      componentId:"sc-c9fe1ff3-3"
    })(["position:relative;"]),
    P=l.default.div.withConfig({
      componentId:"sc-c9fe1ff3-4"
    })(["position:relative;svg{max-width:14px;path{fill:#49576E;}}"]),
    T=l.default.div.withConfig({
      componentId:"sc-c9fe1ff3-5"
    })(["position:absolute;top:-2px;right:-5px;height:13px;width:13px;padding:4px;font-size:0.5rem;color:#ffffff;background-color:#5D97FF;border-radius:50%;display:flex;justify-content:center;align-items:center;pointer-events:none;"]);
    var A=(0,o.memo)(e=>{
      var t,
      n,
      i,
      a,
      o;
      let{
        row:l,
        expanded:r
      }=e,
      d=null==l?void 0:null===(t=l.original)||void 0===t?void 0:t.sessionNotesCount,
      u=null==l?void 0:null===(n=l.original)||void 0===n?void 0:n.sessionid,
      p=null==l?void 0:null===(i=l.original)||void 0===i?void 0:i.customLabel,
      m=!(null==l?void 0:null===(a=l.original)||void 0===a?void 0:a.isViewed),
      g=null==l?void 0:null===(o=l.original)||void 0===o?void 0:o.sessionLocked,
      f=(0,_.useQueryClient)(),
      {
        markSessionLabel:v
      }=(0,I.Aj)(),
      {
        handleRowClick:x
      }=(0,F.o)({
        expanded:r
      }),
      {
        currentAppReducer:b,
        urlReducer:y
      }=(0,h.v9)(e=>e),
      {
        _id:w
      }=b,
      j="";
      try{
        j=["sessionItems",JSON.parse(localStorage.getItem("sessionsListReqBody"))]
      }
      catch(e){}let C=M.get("loggedInFromAdminDashboard"),
      A=async()=>{
        var e,
        t,
        n,
        s,
        i,
        a,
        o;
        if((null==l?void 0:null===(e=l.original)||void 0===e?void 0:e.sessionid)&&"1"!==C){
          let e=[l.original.sessionid],
          r=f.getQueryData(j),
          c=(null==r?void 0:null===(n=r.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.body)||[],
          d=(0,S.Sx)(e,c,"sessionid"),
          u=(0,S.Gf)(e,c,"sessionid"),
          p=f.getQueriesData(["sessionItems"]),
          h=null==p?void 0:null===(o=p[0])||void 0===o?void 0:null===(a=o[1])||void 0===a?void 0:null===(i=a.data)||void 0===i?void 0:null===(s=i.data)||void 0===s?void 0:s.body;
          (null==d?void 0:d.length)&&(null==u?void 0:u.length)||(d=(0,S.Sx)(e,h,"sessionid"),u=(0,S.Gf)(e,h,"sessionid")),
          v({
            customLabelName:"isViewed",
            isTagged:m,
            sessionIds:e,
            labelType:"session",
            appid:w,
            uxcamuserIds:d,
            uploadedOn:u,
            debugSource:2,
            debugCacheLen:null==c?void 0:c.length,
            debugAltCacheLen:null==h?void 0:h.length
          }),
          f.setQueryData(j,t=>{
            let n=t.data.data.body.map(t=>e.includes(t.sessionid)?{
              ...t,
              isViewed:m
            }:t);
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
          })
        }
      };
      return(0,s.jsxs)(Z,{
        isActive:(null==y?void 0:y.sessionid)===u,
        className:"icon-wrapper",
        children:[(0,s.jsx)(c.Z,{
          placement:"top",
          title:m?"Mark as read":"Mark as unread",
          visible:!g&&void 0,
          children:(0,s.jsx)(N,{
            unread:m,
            onMouseDown:g?void 0:A
          })
        }),!g&&(0,s.jsx)("input",{
          type:"checkbox",
          "aria-label":"Select row",
          checked:l.getIsSelected(),
          indeterminate:l.getIsSomeSelected(),
          disabled:!l.getCanSelect(),
          onChange:l.getToggleSelectedHandler()
        }),(0,s.jsxs)(D,{
          children:[(0,s.jsxs)(E,{
            children:[(0,s.jsx)(k.Z,{
              data:null==l?void 0:l.original,
              locked:g,
              index:null==l?void 0:l.index
            }),(null==p?void 0:p.length)>0&&(0,s.jsx)(T,{
              children:p.length
            })]
          }),(0,s.jsxs)(P,{
            onMouseDown:g?()=>null:e=>x(e,u,!m,!0),
            children:[(0,s.jsx)(L.Zi,{}),d>0&&(0,s.jsx)(T,{
              children:d
            })]
          })]
        })]
      })
    }),
    R=n(5257),
    B=n(47639),
    O=n(85445),
    z=n(17020),
    U=e=>(0,s.jsxs)("svg",{
      width:24,
      height:24,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,s.jsx)("circle",{
        cx:12,
        cy:12,
        r:12,
        fill:"#fff"
      }),(0,s.jsx)("rect",{
        x:8.064,
        y:6.136,
        width:2.482,
        height:11.509,
        rx:1.241,
        fill:"#5D97FF"
      }),(0,s.jsx)("rect",{
        x:13.454,
        y:6.136,
        width:2.482,
        height:11.509,
        rx:1.241,
        fill:"#5D97FF"
      })]
    }),
    V=n(90829),
    q=n(28785),
    Q=n(73211);
    let W=l.default.div.withConfig({
      componentId:"sc-5aac1d5d-0"
    })(["width:100%;height:100%;display:flex;align-items:center;gap:12px;padding-right:10px;background-color:transparent;border:none;&:focus,button:focus{outline:none;}"]),
    Y=l.default.div.withConfig({
      componentId:"sc-5aac1d5d-1"
    })(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:48px;min-width:48px;button{margin:0;padding:0;cursor:pointer;background-color:transparent;border:none;display:flex;}span{font-size:12px !important;}",""],e=>{
      let{
        locked:t
      }=e;
      return t&&(0,l.css)(["button{cursor:default;}"])
    }),
    H=l.default.div.withConfig({
      componentId:"sc-5aac1d5d-2"
    })(["display:flex;flex-direction:column;white-space:nowrap;font-weight:400 !important;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;gap:4px;.text-ellipsis{font-size:12px !important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#090F19;}span{font-size:11px !important;font-weight:400;line-height:0.9rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}"]);
    var J=(0,o.memo)(e=>{
      let{
        user:t,
        duration:n,
        sessionsNum:i,
        sessionId:a,
        onPlay:l,
        onPause:r,
        selectedItem:c,
        video:d,
        isViewed:u,
        sessionLocked:p
      }=e,
      m=(0,h.I0)(),
      {
        isPlaying:g,
        userTime:f
      }=(0,R.W4)(),
      v=(0,o.useMemo)(()=>a===c,[a,c]),
      x=(0,o.useMemo)(()=>v&&g,[v,g]),
      b=(0,o.useMemo)(()=>(0,O.mr)(n),[n]),
      y=(0,o.useCallback)(e=>{
        e.stopPropagation(),
        l({
          sessionId:a,
          isActive:!v,
          isViewed:u,
          userTime:f
        }),
        m((0,B.hI)({
          action:"played video from session page"
        }))
      },[l,a,v,u,f,m]),
      w=(0,o.useCallback)(e=>{
        e.stopPropagation(),
        r({
          sessionId:a
        })
      },[r,a]),
      j=(0,Q.C)({
        customUserId:null==t?void 0:t.kUXCam_UserIdentity,
        uxcamuserid:null==t?void 0:t.uxcamuserid
      }),
      C=(0,o.useMemo)(()=>d?x?(0,s.jsx)(U,{
        id:"play-icon"
      }):(0,s.jsx)(V.Z,{
        id:"play-icon"
      }):(0,s.jsx)(q.Z,{
        id:"play-icon"
      }),[x,d]);
      return(0,s.jsxs)(W,{
        role:"button",
        tabIndex:"0",
        className:"session-list-item",
        children:[(0,s.jsxs)(Y,{
          locked:p,
          children:[(0,s.jsx)("button",{
            type:"button",
            onMouseDown:d&&!p?x?w:y:()=>null,
            children:p?(0,s.jsx)(z.Z,{
              height:24,
              width:24,
              alt:"play icon locked"
            }):C
          }),(0,s.jsx)("span",{
            className:"subtitle",
            children:b
          })]
        }),(0,s.jsxs)(H,{
          children:[j,(0,s.jsx)("span",{
            className:"subtitle",
            children:"Session ".concat(i)
          })]
        })]
      })
    });
    let X=["sessionhashofuser","sessiondate","city","sessionhash","devicemodel","appversion","eventcount","timeforuser","video"],
    G={
      sessiondate:"sessionDate",
      sessionhash:"userSessionRun",
      eventcount:"totalEvent",
      timeforuser:"deviceLocalDateTime",
      devicemodel:"deviceModel",
      appversion:"appVersion",
      deviceclass:"deviceClass",
      deviceheight:"deviceHeight",
      devicewidth:"deviceWidth",
      screencount:"totalScreen"
    },
    $=l.default.div.withConfig({
      componentId:"sc-1fbe7a3d-0"
    })(["display:flex;height:100%;width:100%;justify-content:center;align-items:flex-start;flex-direction:column;flex-wrap:nowrap;white-space:nowrap;font-size:12px;padding:0;button{cursor:pointer;background-color:transparent;border:none;text-decoration:underline;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:100%;}"]),
    K=(0,l.default)($).withConfig({
      componentId:"sc-1fbe7a3d-1"
    })(["flex-direction:row;justify-content:left;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;.city,.when-date{display:flex;flex-direction:column;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.flag{margin-left:10px;transition:all 0.2s ease-in-out;opacity:0;transform:translateX(-5px);}.platform-icon{margin-right:5px;}&:hover{.flag{opacity:1;transform:translateX(0px);}}"]),
    ee=l.default.div.withConfig({
      componentId:"sc-1fbe7a3d-2"
    })(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;color:#A2A5AE;"]),
    et=l.default.div.withConfig({
      componentId:"sc-1fbe7a3d-3"
    })(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;"]),
    en=l.default.div.withConfig({
      componentId:"sc-1fbe7a3d-4"
    })(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;"]),
    es=l.default.p.withConfig({
      componentId:"sc-1fbe7a3d-5"
    })(["margin:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left;font-size:12px;"]),
    ei=l.default.span.withConfig({
      componentId:"sc-1fbe7a3d-6"
    })(["margin:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left;em{padding-right:3px;}"]),
    ea=l.default.div.withConfig({
      componentId:"sc-1fbe7a3d-7"
    })(["padding-left:8px;"]),
    eo={
      1:"android",
      2:"apple",
      3:"desktop"
    },
    el={
      1:"Android",
      2:"iOS",
      3:"Desktop"
    },
    er=(0,o.memo)(e=>{
      let{
        cell:t,
        row:n
      }=e,
      {
        urlReducer:i
      }=(0,h.v9)(e=>e),
      {
        sessionid:o
      }=i,
      {
        column:{
          id:l,
          isCustomUserProperty:g
        }
      }=t,
      {
        sessionid:x,
        userProperty:b,
        sessionDuration:C,
        userSessionRun:_,
        sessionUploadedDateTime:k,
        deviceLocalDateTime:L,
        city:S,
        country:I,
        countryCode:F,
        platform:M,
        deviceModel:Z,
        deviceClass:N,
        uniqueScreensCount:D,
        crashed:E,
        totalEvent:P,
        totalGesture:T,
        osVersion:A,
        rageGestureCount:R,
        video:B,
        isViewed:O,
        onItemPlay:z,
        onItemPause:U,
        handleUserClick:V,
        sessionLocked:q,
        browserName:Q,
        browserVersion:W,
        deviceType:Y,
        deviceHeight:H,
        deviceWidth:X,
        deviceOsName:ei
      }=n.original;
      if(f()(b,(0,y.h$)(l)))return(0,s.jsx)($,{
        children:(0,s.jsx)(es,{
          children:b[(0,y.h$)(l)]||"N/A"
        })
      });
      switch(l){
        case"sessionhashofuser":return(0,s.jsx)(J,{
          user:b,
          duration:C,
          sessionsNum:_,
          sessionId:x,
          onPlay:z,
          onPause:U,
          selectedItem:o,
          video:B,
          isViewed:O,
          sessionLocked:q
        },x);
        case"sessiondate":case"recordedon":return(0,s.jsx)(K,{
          children:(0,s.jsxs)("div",{
            className:"when-date title",
            children:[(0,p.$5)("recordedon"===l?L:k),(0,s.jsx)(ee,{
              className:"subtitle",
              children:(0,u.fh)("recordedon"===l?L:k,"ddd, MMMM DD, hh:mm A")
            })]
          })
        });
        case"timeforuser":return(0,s.jsxs)($,{
          className:"user-date title",
          children:[a()(L).format("MMM DD, YYYY"),(0,s.jsx)(ee,{
            className:"subtitle",
            children:a()(L).format("ddd, hh:mm  a")
          })]
        });
        case"city":return(0,s.jsxs)(K,{
          children:[(0,s.jsxs)("div",{
            className:"city title",
            children:[S,(0,s.jsx)(ee,{
              className:"subtitle",
              children:I
            })]
          }),(0,s.jsx)("div",{
            className:"flag",
            children:F?(0,s.jsx)(r.Z,{
              svg:!0,
              countryCode:F
            }):null
          })]
        });
        case"devicemodel":{
          let e=eo[M],
          t=Z.includes("iPhone")||Z.includes("iPad")?(0,m.Zy)(Z):Z.toUpperCase();
          return(0,s.jsxs)(K,{
            children:[(0,s.jsx)("div",{
              className:"platform-icon",
              children:"desktop"===e?(0,s.jsx)("p",{
                children:"D"
              }):(0,s.jsx)(d.Z,{
                type:e
              })
            }),(0,s.jsx)(en,{
              children:t
            })]
          })
        }
        case"country":return(0,s.jsx)(K,{
          children:(0,s.jsx)(et,{
            children:I
          })
        });
        case"uniquescreenscount":return(0,s.jsx)($,{
          children:(0,v.Z)(D)
        });
        case"crashed":return(0,s.jsx)($,{
          children:E?"Yes":"No"
        });
        case"eventcount":return(0,s.jsx)($,{
          children:(0,v.Z)(P)
        });
        case"totalgesture":return(0,s.jsx)($,{
          children:(0,v.Z)(T)
        });
        case"ragegesturecount":return(0,s.jsx)($,{
          children:(0,v.Z)(R)
        });
        case"osversion":return(0,s.jsxs)($,{
          children:[A,3===M?"":"(".concat(el[M],")")]
        });
        case"duration":{
          let e=C<60?"".concat(Math.round(C)," sec"):(0,m.zk)({
            durationInSecs:C
          });
          return(0,s.jsx)($,{
            children:e
          })
        }
        case"userdevice":{
          let e=(0,j.n5)({
            customUserId:null==b?void 0:b.kUXCam_UserIdentity,
            uxcamuserid:null==b?void 0:b.uxcamuserid
          });
          return(0,s.jsx)($,{
            children:(null==e?void 0:e.customUserId)?(0,s.jsx)("button",{
              type:"button",
              onMouseDown:()=>V(b.uxcamuserid),
              children:null==e?void 0:e.customUserId
            }):(0,s.jsx)(c.Z,{
              placement:"topLeft",
              title:(0,s.jsx)("span",{
                children:null==e?void 0:e.info
              }),
              children:(0,s.jsx)("button",{
                className:"text-italic-asterisk",
                type:"button",
                onMouseDown:()=>V(b.uxcamuserid),
                children:null==e?void 0:e.uxcamuserid
              })
            })
          })
        }
        case"platform":return(0,s.jsx)($,{
          children:el[M]
        });
        case"deviceclass":{
          let e=N.includes("iPhone")||N.includes("iPad")?(0,m.Zy)(N):N;
          return(0,s.jsx)($,{
            children:e
          })
        }
        case"sessionid":return(0,s.jsx)(K,{
          children:(0,s.jsx)(en,{
            children:x
          })
        });
        case"browsername":return(0,s.jsx)($,{
          children:Q||"N/A"
        });
        case"browserversion":return(0,s.jsx)($,{
          children:W||"N/A"
        });
        case"devicetype":return(0,s.jsx)($,{
          children:Y||"N/A"
        });
        case"deviceheight":return(0,s.jsx)($,{
          children:H
        });
        case"devicewidth":return(0,s.jsx)($,{
          children:X
        });
        case"deviceosname":return(0,s.jsxs)(K,{
          children:[ei||"N/A"," ",(0,w.R)(ei)]
        });
        default:return(0,s.jsx)($,{
          children:g?"N/A":(0,v.Z)(n.original[G[l]])||(0,v.Z)(n.original[l])||"-"
        })
      }
    });
    function ec(e,t){
      let{
        urlReducer:n
      }=(0,h.v9)(e=>e),
      {
        sessionid:i
      }=n,
      a=(0,x.Cl)(),
      l=(0,o.useMemo)(()=>({
        sessiondate:"Time since the session was uploaded.(UTC ".concat((0,p.Yb)(),")")
      }),[]),
      r=(0,o.useMemo)(()=>null==e?void 0:e.map(e=>X.find(t=>t===e.attribute)?e.isVisible:!e.isVisible).every(e=>e),[e]),
      d=(0,o.useMemo)(()=>e.map(e=>{
        let{
          isVisible:t,
          attribute:n,
          title:o,
          titleInfo:r,
          smallSessionTable:d,
          isSortable:u,
          isCustomUserProperty:p
        }=e,
        m=l.hasOwnProperty(n)?l[n]:r;
        return t&&"video"!==n&&(!i||"sessiondate"!==n&&d)?a.accessor(n,{
          header:p?(0,s.jsx)(c.Z,{
            placement:"top",
            title:m,
            children:(0,s.jsx)(ei,{
              children:(0,s.jsx)("em",{
                children:(0,y.Kf)(o)
              })
            })
          }):(0,s.jsx)(c.Z,{
            placement:"top",
            title:m,
            children:(0,s.jsx)(ei,{
              children:o
            })
          }),
          cell:e=>{
            let{
              cell:t,
              row:n
            }=e;
            return(0,s.jsx)(er,{
              cell:t,
              row:n
            })
          },
          accessor:n,
          titleInfo:m,
          size:180,
          enableResizing:!0,
          minSize:180,
          maxSize:360,
          enableSorting:u,
          isCustomUserProperty:p
        }):null
      }).filter(e=>e),[e,l,i,r]);
      return(0,o.useMemo)(()=>[{
        id:"select",
        disableResizing:!0,
        minWidth:35,
        width:35,
        maxWidth:35,
        header:e=>{
          let{
            table:t
          }=e;
          return(0,s.jsx)(ea,{
            children:(0,s.jsx)(b.Z,{
              checked:t.getIsAllRowsSelected(),
              indeterminate:t.getIsSomeRowsSelected(),
              onChange:t.getToggleAllRowsSelectedHandler()
            })
          })
        },
        cell:e=>{
          let{
            row:n
          }=e;
          return(0,s.jsx)(A,{
            row:n,
            expanded:t
          })
        }
      },...d],[d,t])
    }
  },
  39171:function(e,t,n){
    var s=n(85893),
    i=n(67294),
    a=n(74936),
    o=n(53678);
    let l=e=>{
      let{
        title:t,
        subtitle:n,
        children:i,
        isModalOpen:l,
        handleOk:r,
        handleCancel:c,
        disabled:d,
        loading:u,
        hideButtons:p,
        containerClassName:m
      }=e;
      return(0,s.jsxs)(o.oA,{
        visible:l,
        onOk:r,
        onCancel:c,
        centered:!0,
        footer:null,
        closable:!1,
        children:[(0,s.jsxs)("span",{
          className:m,
          children:[(0,s.jsx)("h2",{
            children:t
          }),(0,s.jsx)("p",{
            children:n
          })]
        }),(0,s.jsxs)(o.Yb,{
          onFinish:r,
          children:[i,p?null:(0,s.jsxs)("div",{
            className:"modal-footer",
            children:[(0,s.jsx)(a.Z,{
              onClick:()=>{
                c()
              },
              type:"link",
              children:"Cancel"
            }),(0,s.jsx)(a.Z,{
              type:"primary",
              htmlType:"submit",
              disabled:d,
              loading:u,
              children:"Update"
            })]
          })]
        })]
      })
    };
    t.Z=()=>{
      let[e,t]=(0,i.useState)(!1),
      n=(0,i.useCallback)(n=>{
        let{
          children:i,
          title:a,
          subtitle:o,
          handleOk:r,
          handleCancel:c,
          disabled:d,
          loading:u,
          hideButtons:p,
          containerClassName:m
        }=n;
        return(0,s.jsx)(l,{
          isModalOpen:e,
          title:a,
          subtitle:o,
          handleOk:r,
          handleCancel:()=>{
            c&&c(),
            t(!1)
          },
          disabled:d,
          loading:u,
          hideButtons:p,
          containerClassName:m,
          children:i
        })
      },[e]);
      return{
        openModal:e,
        setOpenModal:t,
        CustomPropertyModal:n
      }
    }
  },
  53678:function(e,t,n){
    n.d(t,{
      Vv:function(){
        return c
      },
      Yb:function(){
        return l
      },
      aZ:function(){
        return r
      },
      oA:function(){
        return o
      }
    });
    var s=n(39284),
    i=n(72654),
    a=n(19521);
    let o=(0,a.default)(s.default).withConfig({
      componentId:"sc-12c35a38-0"
    })([".ant-modal-content{min-width:420px;margin:0 auto;},.ant-modal-content,.ant-modal-header{border-radius:8px;border:none;}.ant-modal-body{padding:32px;.schematic-replay-modal{h2{margin-bottom:12px;}p{line-height:24px;margin-bottom:0;}}.schematic-replay-modal + .ant-form{margin-top:0px;}h2{font-size:18px;line-height:24px;margin-bottom:4px;color:#161E35;}p{font-size:12px;line-height:16px;}.modal-footer{border:none;padding:0px;display:flex;justify-content:flex-end;gap:16px;.ant-btn{font-weight:400;font-size:14px;line-height:14px;height:34px;min-width:112px;border-radius:6px;text-transform:none;}.ant-btn-link{color:#5C97FF;}.ant-btn-link:hover{border-color:#fff;}}}"]),
    l=(0,a.default)(i.Z).withConfig({
      componentId:"sc-12c35a38-1"
    })(["margin-top:24px;.ant-form-item-control-input-content{.ant-input{font-size:12px;color:#161E35;height:32px;}}.ant-form-item .ant-form-item-label{margin-bottom:0px;}.ant-form-item-with-help .ant-form-item-explain,.ant-form-item-explain-error{font-size:12px;}.ant-select{width:100%;margin-bottom:24px;color:#161E35;font-size:12px;.ant-select-selector{border-radius:6px;.ant-select-selection-item{font-size:12px;}}.ant-select-dropdown{border-radius:8px;.ant-select-item{margin-bottom:4px;.ant-select-item-option-content{display:flex;align-items:center;gap:8px;text-align:center;line-height:18px;}}.ant-select-item-option-active,.ant-select-item-option-selected{background-color:transparent;}.ant-select-item-option-disabled{opacity:0.4;}}}"]),
    r=a.default.div.withConfig({
      componentId:"sc-12c35a38-2"
    })(["display:flex;gap:10px;align-items:center;.ant-form-item:nth-child(1){flex:1;}.ant-select-item-option{position:relative;}.ant-select-item-option-selected::after{content:'✓';position:absolute;top:8px;right:12px;font-size:15px;color:#5C97FF;}.ant-select-item-option-active,.ant-select-item-option-selected{background-color:#DFEAFF !important;}.ant-form-item:nth-child(2){pointer-events:none;.ant-select-selector{border:none;padding:0px;font-size:14px;}}"]),
    c=a.default.div.withConfig({
      componentId:"sc-12c35a38-3"
    })(["display:flex;justify-content:","}.ant-btn{padding:0px;}.danger{border:none;text-shadow:none;box-shadow:none;display:flex;align-items:center;gap:4px;}"],e=>{
      let{
        isEditModal:t
      }=e;
      return t?"space-between":"flex-end"
    })
  },
  15941:function(e,t,n){
    var s=n(85893),
    i=n(67294),
    a=n(39284),
    o=n(74936),
    l=n(19521),
    r=n(88767),
    c=n(14416),
    d=n(98777),
    u=n(96512),
    p=n(54882),
    m=n(14811),
    h=n(39693),
    g=n.n(h),
    f=n(55931),
    v=n(27985),
    x=n(91209),
    b=n(67401);
    let y=(0,l.default)(a.default).withConfig({
      componentId:"sc-ecbb748-0"
    })([".ant-modal-content{border-radius:8px;width:420;}.ant-modal-body{padding:36px 40px;}"]),
    w=l.default.div.withConfig({
      componentId:"sc-ecbb748-1"
    })(["display:flex;flex-direction:column;"]),
    j=(0,l.default)(w).withConfig({
      componentId:"sc-ecbb748-2"
    })(["margin:16px 0;color:#454b5d;font-weight:400;font-size:13px;line-height:normal;"]),
    C=(0,l.default)(j).withConfig({
      componentId:"sc-ecbb748-3"
    })([""]),
    _=l.default.div.withConfig({
      componentId:"sc-ecbb748-4"
    })(["display:flex;font-weight:500;font-size:18px;line-height:24px;align-items:center;"]),
    k=(0,l.default)(j).withConfig({
      componentId:"sc-ecbb748-5"
    })(["color:#ff4d4f;"]),
    L=l.default.div.withConfig({
      componentId:"sc-ecbb748-6"
    })(["display:flex;align-items:center;justify-content:flex-end;margin-top:16px;"]),
    S=(0,l.default)(o.Z).withConfig({
      componentId:"sc-ecbb748-7"
    })(["background:#5d97ff;font-weight:500;font-size:14px;padding:10px 29px;border-radius:6px;display:flex;align-items:center;"]),
    I=(0,l.default)(S).withConfig({
      componentId:"sc-ecbb748-8"
    })(["color:#5d97ff;margin-right:24px;background:#ffffff;border-radius:6px;border:none;"]),
    F={
      sessionsList:"sessions",
      aiSessionsList:"sessions",
      heatmapsList:"screens",
      eventsList:"events",
      usersList:"users",
      nocodeEventsList:"no_code_event"
    },
    M={
      exportUrl:"".concat("https://pythonapi-prod.uxcam.com","/csv_export/page_export"),
      getExportUrl(){
        return this.exportUrl
      }
    };
    t.Z=e=>{
      var t,
      n,
      a;
      let{
        visibleDownloadModal:o,
        handleVisibleModal:l,
        downLoadColumn:h,
        setDownloadColumn:Z,
        globalFilter:N
      }=e,
      D=(0,r.useQueryClient)(),
      E=(0,f.e)("web"),
      P="",
      T="",
      A="",
      R="",
      B="";
      try{
        P=JSON.parse(localStorage.getItem("sessionsListReqBody")),
        T=JSON.parse(localStorage.getItem("aiSessionsListReqBody")),
        A=JSON.parse(localStorage.getItem("eventsListReqBody")),
        R=JSON.parse(localStorage.getItem("webScreenListReqBody")),
        B=JSON.parse(localStorage.getItem("usersListReqBody"))
      }
      catch(e){}let{
        currentAppReducer:{
          _id:O
        },
        appFilter:{
          session:{
            segment:z
          },
          heatmap:{
            segment:U
          },
          event:{
            segment:V
          },
          user:{
            segment:q,
            activityFilterList:Q
          },
          dateSegment:W
        },
        profileReducer:{
          email:Y
        },
        urlReducer:{
          parentType:H
        }
      }=(0,c.v9)(e=>e),
      [J]=(0,u.Z)(E?"webScreenHeaders":"screenHeaders"),
      [X]=(0,u.Z)("screenSortBy"),
      G=["sessionItems",P],
      $=["aiSessionItems",T],
      K=["eventList",A],
      ee=["userList",B],
      et=["web-screen-table-list",R],
      en=D.getQueryData(G),
      es=D.getQueryData($),
      ei=D.getQueryData(K),
      ea=D.getQueryData(ee),
      eo=D.getQueryData(et),
      el=D.getQueriesData({
        queryKey:["nocodeEventList"]
      }),
      er=(0,i.useMemo)(()=>{
        var e;
        return(null===(e=el[0])||void 0===e?void 0:e[1])||[]
      },[el]),
      {
        noCodeEventsFeatureFlag:ec
      }=(0,b.Z)(),
      ed=(0,i.useCallback)(e=>ec&&"nocodeEventsList"===e?"smart events":ec&&"eventsList"===e?"coded events":F[e]||e,[ec]),
      eu=(0,i.useMemo)(()=>{
        var e,
        t;
        return(null==en?void 0:null===(t=en.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.header)||[]
      },[en]),
      ep=(0,i.useMemo)(()=>{
        var e,
        t;
        return(null==es?void 0:null===(t=es.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.header)||[]
      },[es]),
      em=(0,i.useMemo)(()=>{
        var e,
        t;
        return(null==ei?void 0:null===(t=ei.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.header)||[]
      },[ei]),
      eh=(0,i.useMemo)(()=>{
        var e,
        t;
        return(null==ea?void 0:null===(t=ea.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.header)||[]
      },[ea]),
      eg=(0,i.useMemo)(()=>{
        var e,
        t;
        return(null==er?void 0:null===(t=er.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.header)||[]
      },[er]),
      ef=(0,i.useMemo)(()=>{
        var e,
        t;
        return(null==en?void 0:null===(t=en.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.orderBy)||[]
      },[en]),
      ev=(0,i.useMemo)(()=>{
        var e,
        t;
        return(null==es?void 0:null===(t=es.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.orderBy)||[]
      },[es]),
      ex=(0,i.useMemo)(()=>{
        var e,
        t;
        return(null==ei?void 0:null===(t=ei.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.orderBy)||[]
      },[ei]),
      eb=(0,i.useMemo)(()=>{
        var e,
        t;
        return(null==ea?void 0:null===(t=ea.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.orderBy)||[]
      },[ea]),
      ey=(0,i.useMemo)(()=>(null==eo?void 0:eo.orderBy)||[],[eo]),
      ew=(0,i.useMemo)(()=>{
        var e,
        t;
        return(null==er?void 0:null===(t=er.data)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.orderBy)||[]
      },[er]),
      ej=(0,i.useMemo)(()=>"allColumns"===h,[h]),
      eC=(0,x.IE)(),
      e_=(0,i.useMemo)(()=>(0,v.Vw)(Q,q,eC),[Q,q,eC]),
      ek=(0,i.useMemo)(()=>N?[...U,{
        attribute:"relevant_screen_name",
        operator:"contains",
        value:N
      }]:U,[N,U]),
      eL=(0,i.useMemo)(()=>{
        let e;
        switch(H){
          case"sessionsList":case"aiSessionsList":e=[...z];
          break;
          case"heatmapsList":e=[...(0,m.q)(ek)||[]];
          break;
          case"nocodeEventsList":case"eventsList":e=[...V];
          break;
          case"usersList":e=[...e_];
          break;
          default:e=[]
        }
        return e
      },[H,z,ek,V,e_]),
      eS=(0,i.useMemo)(()=>{
        let e;
        switch(H){
          case"sessionsList":e=[...eu];
          break;
          case"aiSessionsList":e=[...ep];
          break;
          case"heatmapsList":e=[...J];
          break;
          case"eventsList":e=[...em];
          break;
          case"usersList":e=[...eh];
          break;
          case"nocodeEventsList":e=[...eg];
          break;
          default:e=[]
        }
        return e
      },[H,eu,ep,J,em,eh,eg]),
      eI=(0,i.useMemo)(()=>{
        let e;
        switch(H){
          case"sessionsList":e=[...ef];
          break;
          case"aiSessionsList":e=[...ev];
          break;
          case"heatmapsList":e=E?[...ey]:(null==X?void 0:X.length)?X.map(e=>({
            sortName:p.wg[null==e?void 0:e.id]||(null==e?void 0:e.id),
            sortOrder:(null==e?void 0:e.desc)?"desc":"asc"
          })):[];
          break;
          case"eventsList":e=[...ex];
          break;
          case"usersList":e=[...eb];
          break;
          case"noCodeEventsList":e=[...ew];
          break;
          default:e=[]
        }
        return e
      },[H,ef,ev,E,ex,eb,ew,ey,X]),
      eF=(0,i.useMemo)(()=>null==eS?void 0:eS.reduce((e,t)=>((null==t?void 0:t.isVisible)&&e.push(null==t?void 0:t.attribute),e),[]),[eS]),
      eM=(0,i.useMemo)(()=>null==eS?void 0:eS.reduce((e,t)=>(e.push(null==t?void 0:t.attribute),e),[]),[eS]),
      eZ=(0,i.useMemo)(()=>null==eS?void 0:eS.filter(e=>null==e?void 0:e.isCustomUserProperty),[eS]),
      eN=(0,i.useMemo)(()=>null==eS?void 0:eS.filter(e=>null==e?void 0:e.isCustomEventProperty),[eS]),
      eD=(0,i.useMemo)(()=>null==eZ?void 0:eZ.filter(e=>null==e?void 0:e.isVisible),[eZ]),
      eE=(0,i.useMemo)(()=>null==eN?void 0:eN.filter(e=>null==e?void 0:e.isVisible),[eN]),
      eP=(0,i.useMemo)(()=>["".concat(F[H])],[H]),
      eT=(0,i.useMemo)(()=>ej?eM:eF,[ej,eM,eF]),
      eA=(0,i.useMemo)(()=>eT.filter(e=>"displayName"!==e),[eT]),
      eR=(0,i.useMemo)(()=>null==eA?void 0:eA.map(e=>p.wg[e]),[eA]),
      eB=(0,f.e)("web"),
      eO=(0,i.useMemo)(()=>{
        let e={
          name:"get_csv_dump",
          appid:O,
          webApp:eB||!1,
          filters:eL,
          table_list:eP,
          email_id:Y,
          date_range:W,
          ...eI&&{
            orderBy:eI
          },
          customUserPropertyColumns:ej?eZ.map(e=>e.attribute):eD.map(e=>e.attribute),
          customEventPropertyColumns:ej?eN.map(e=>e.attribute):eE.map(e=>e.attribute)
        };
        return eC&&(delete e.name,delete e.date_range),
        "heatmapsList"===H?e.columns=g()(eR):e.columns=eT,
        e
      },[O,eB,eL,eP,Y,W,eI,ej,eZ,eD,eN,eE,eC,H,eR,eT]),
      {
        data:ez,
        error:eU,
        mutate:eV,
        isLoading:eq
      }=(0,r.useMutation)(e=>(0,d.be)({
        method:"POST",
        url:M.getExportUrl(),
        data:e,
        withCredentials:!0
      }),{}),
      eQ=(0,i.useMemo)(()=>{
        var e;
        return(null==ez?void 0:ez.data)||(null==eU?void 0:null===(e=eU.response)||void 0===e?void 0:e.data)
      },[ez,eU]),
      eW=()=>{
        eV(eO)
      },
      eY=()=>{
        l(!1),
        Z()
      };
      return(0,s.jsx)("div",{
        children:(0,s.jsx)(y,{
          visible:o,
          onCancel:()=>eY(),
          footer:null,
          destroyOnClose:!0,
          closable:!1,
          children:(0,s.jsxs)(w,{
            children:[!eQ&&(0,s.jsxs)("div",{
              children:[(0,s.jsx)(_,{
                children:"Export ".concat(ed(H)," table data?")
              }),(0,s.jsx)(j,{
                children:"The exported data will be sent to your email in the CSV format."
              })]
            }),eQ&&(0,s.jsxs)("div",{
              children:[!(null==eQ?void 0:eQ.error)&&(0,s.jsx)(_,{
                children:"Data export successful"
              }),(0,s.jsx)("div",{
                children:(null==eQ?void 0:eQ.error)&&(0,s.jsxs)(s.Fragment,{
                  children:[(0,s.jsx)(_,{
                    children:"Export ".concat(eP," table data?")
                  }),(0,s.jsx)(k,{
                    children:(null==eQ?void 0:null===(n=eQ.error)||void 0===n?void 0:null===(t=n.message)||void 0===t?void 0:t.message)||(null==eQ?void 0:null===(a=eQ.error)||void 0===a?void 0:a.message)||"Sorry, we are unable to process your request! Please try again later"
                  })]
                })
              }),!(null==eQ?void 0:eQ.error)&&(0,s.jsx)(C,{
                children:"The CSV file link should arrive to your email within a few minutes."
              })]
            }),(0,s.jsxs)(L,{
              children:[eQ&&(0,s.jsx)(S,{
                type:"primary",
                onClick:e=>eY(e),
                children:"Done"
              }),!eQ&&(0,s.jsxs)(s.Fragment,{
                children:[(0,s.jsx)(I,{
                  type:"link",
                  onClick:()=>eY(),
                  children:"Cancel"
                }),(0,s.jsx)(S,{
                  loading:eq,
                  type:"primary",
                  onClick:()=>eW(),
                  children:"Confirm"
                })]
              })]
            })]
          })
        })
      })
    }
  },
  60786:function(e,t,n){
    n.d(t,{
      Z:function(){
        return p
      }
    });
    var s=n(85893),
    i=n(67294),
    a=n(74936),
    o=n(72654),
    l=n(39284),
    r=n(19521);
    let c=(0,r.default)(l.default).withConfig({
      componentId:"sc-14ca072d-0"
    })([".ant-modal-content{min-width:420px;margin:0 auto;},.ant-modal-content,.ant-modal-header{border-radius:8px;border:none;}.ant-modal-body{padding:32px;h2{font-size:18px;line-height:24px;margin-bottom:16px;color:#161E35;}p{font-size:12px;line-height:24px;}strong{font-weight:500;}.modal-footer{border:none;padding:0px;display:flex;justify-content:flex-end;gap:16px;.ant-btn{font-weight:400;font-size:14px;line-height:14px;height:34px;min-width:112px;border-radius:6px;text-transform:none;}.ant-btn-link{color:#5C97FF;}.ant-btn-link:hover{border-color:#fff;}}}"]),
    d=(0,r.default)(o.Z).withConfig({
      componentId:"sc-14ca072d-1"
    })(["margin-top:16px;"]);
    r.default.div.withConfig({
      componentId:"sc-14ca072d-2"
    })(["display:flex;justify-content:","}.ant-btn{padding:0px;}.danger{border:none;text-shadow:none;box-shadow:none;display:flex;align-items:center;gap:4px;}"],e=>{
      let{
        isEditModal:t
      }=e;
      return t?"space-between":"flex-end"
    });
    let u=e=>{
      let{
        title:t,
        subtitle:n,
        children:i,
        isModalOpen:o,
        handleOk:l,
        handleCancel:r,
        disabled:u,
        loading:p,
        hideButtons:m,
        containerClassName:h,
        actionButtonTitles:g,
        form:f
      }=e;
      return(0,s.jsxs)(c,{
        visible:o,
        onOk:l,
        onCancel:r,
        centered:!0,
        footer:null,
        closable:!1,
        children:[(0,s.jsxs)("span",{
          className:h,
          children:[t?(0,s.jsx)("h2",{
            children:t
          }):null,n?(0,s.jsx)("p",{
            children:n
          }):null]
        }),(0,s.jsxs)(d,{
          form:f,
          onFinish:l,
          children:[i,m?null:(0,s.jsxs)("div",{
            className:"modal-footer",
            children:[(0,s.jsx)(a.Z,{
              onClick:()=>{
                r()
              },
              type:"link",
              children:(null==g?void 0:g.cancel)||"Cancel"
            }),(0,s.jsx)(a.Z,{
              type:"primary",
              htmlType:"submit",
              disabled:u,
              loading:p,
              children:(null==g?void 0:g.ok)||"Ok"
            })]
          })]
        })]
      })
    };
    var p=()=>{
      let[e,t]=(0,i.useState)(!1),
      [n]=o.Z.useForm(),
      a=(0,i.useCallback)(i=>{
        let{
          children:a,
          title:o,
          subtitle:l,
          handleOk:r=()=>null,
          handleCancel:c,
          disabled:d,
          loading:p,
          hideButtons:m,
          containerClassName:h,
          actionButtonTitles:g
        }=i;
        return(0,s.jsx)(u,{
          isModalOpen:e,
          title:o,
          subtitle:l,
          handleOk:r,
          handleCancel:()=>{
            c&&c(),
            t(!1)
          },
          disabled:d,
          loading:p,
          hideButtons:m,
          containerClassName:h,
          actionButtonTitles:g,
          form:n,
          children:a
        })
      },[e,n]);
      return{
        openModal:e,
        setOpenModal:t,
        CommonModal:a,
        formRef:n
      }
    }
  },
  16783:function(e,t,n){
    n.d(t,{
      I:function(){
        return o
      }
    });
    var s=n(11163),
    i=n.n(s),
    a=n(73495);
    let o=e=>{
      let{
        page:t,
        appId:n,
        sessionid:s,
        secondarysessionid:o="",
        autoplay:l,
        segment:r=[],
        parentType:c,
        eventid:d,
        starttime:u,
        expanded:p,
        uxcamuserid:m,
        notetab:h,
        dateSegment:g
      }=e,
      f=[...r],
      v="",
      x="";
      "sessionsList"===c?(v=s?"/app/".concat(n,"/sessions/list/").concat(t,"/").concat(s).concat(u?"/".concat(u):h?"/0":"").concat(h?"/".concat(h):"","?"):"/app/".concat(n,"/sessions/list/").concat(t,"?"),x="appId=".concat(n,"&parentType=sessionsList").concat(s?"&sessionid=".concat(s):"","&sessionpage=").concat(t).concat(u?"&starttime=".concat(u):"").concat(h?"&notetab=".concat(h):"")):"aiSessionsList"===c?(v=s?"/app/".concat(n,"/aisessions/list/").concat(t,"/").concat(s).concat(u?"/".concat(u):h?"/0":"").concat(h?"/".concat(h):"","?secondarysessionid=").concat(o||s,"&"):"/app/".concat(n,"/aisessions/list/").concat(t,"?"),x="appId=".concat(n,"&parentType=aiSessionsList").concat(s?"&sessionid=".concat(s):"","&sessionpage=").concat(t).concat(u?"&starttime=".concat(u):"").concat(h?"&notetab=".concat(h):"","&secondarysessionid=").concat(o||s)):"eventsList"===c?(v=p?"/app/".concat(n,"/events/list/").concat(t,"/").concat(s,"/").concat(d).concat(u?"/".concat(u):""):"/app/".concat(n,"/events/list/").concat(t,"?"),x="appId=".concat(n,"&parentType=eventsList").concat(s?"&sessionid=".concat(s):"","&eventpage=").concat(t,"&starttime=").concat(u,"&eventid=").concat(d)):"nocodeEventsList"===c?(v=p?"/app/".concat(n,"/smart-events/list/").concat(t,"/").concat(s,"/").concat(d).concat(u?"/".concat(u):""):"/app/".concat(n,"/smart-events/list/").concat(t,"?"),x="appId=".concat(n,"&parentType=nocodeEventsList").concat(s?"&sessionid=".concat(s):"","&eventpage=").concat(t,"&starttime=").concat(u,"&eventid=").concat(d)):"heatmapsList"===c?(v="/app/".concat(n,"/screens/list/").concat(t,"?"),x="appId=".concat(n,"&parentType=heatmapsList&screenpage=").concat(t)):(v=m?"/app/".concat(n,"/users/list/").concat(t,"/").concat(m,"?"):"/app/".concat(n,"/users/list/").concat(t,"?"),x=m?"appId=".concat(n,"&parentType=usersList&userpage=").concat(t,"&uxcamuserid=").concat(m):"appId=".concat(n,"&parentType=usersList&userpage=").concat(t)),
      s&&(f=g?[...f,{
        ...g
      }]:f),
      v=(0,a.$)(v,f),
      s&&(v="".concat(v).concat(l?"#autoplay":"")),
      i().push("/integration?".concat(x),v)
    }
  },
  36205:function(e,t,n){
    n.d(t,{
      Y:function(){
        return a
      }
    });
    var s=n(67294);
    let i=s.createContext({
      time:0
    }),
    a=()=>(0,s.useContext)(i)
  },
  2880:function(e,t,n){
    var s=n(85893),
    i=n(94839),
    a=n(47639),
    o=n(30663),
    l=n(83423),
    r=n(80432),
    c=n(48203),
    d=n(78268),
    u=n(74936),
    p=n(35877),
    m=n(30233),
    h=n(67294),
    g=n(74855),
    f=n.n(g),
    v=n(82337),
    x=n(14416),
    b=n(19521),
    y=n(36005),
    w=n(92046),
    j=n(24842),
    C=n(5257);
    let _=/^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)([0-5][0-9]?\d)$/,
    {
      TextArea:k
    }=l.default,
    L=b.default.button.withConfig({
      componentId:"sc-687c7cac-0"
    })(["width:fit-content;height:32px;border:none;background:#5D97FF;border-radius:6px;padding:6px 14px;color:#ffffff;font-weight:400;font-size:14px;transition:all 0.2s ease;cursor:pointer;margin-right:8px;width:84px;img{margin-right:8px;}.anticon{color:#ffffff;margin-right:6px;}&:hover{background:#4A79CC;}"]),
    S=b.default.button.withConfig({
      componentId:"sc-687c7cac-1"
    })(["border:none;background:#F3F4F5;border-radius:50%;height:24px;width:24px;display:flex;justify-content:center;align-items:center;cursor:pointer;path{fill:#5D97FF;}"]),
    I=b.default.button.withConfig({
      componentId:"sc-687c7cac-2"
    })(["border:none;background-color:#FFFFFF;transition:all 0.2s ease;border-radius:50%;height:24px;width:24px;padding:0;margin:0;cursor:pointer;&:hover{background-color:#EFF5FF;}img{margin-top:-1px;}"]),
    F=(0,b.default)(k).withConfig({
      componentId:"sc-687c7cac-3"
    })(["font-size:12px !important;line-height:24px !important;padding:2px 10px !important;margin:0 !important;color:#454B5D v;border:1px solid #E8E8EB !important;border-radius:6px !important;&::placeholder{color:#737886 !important;}"]),
    M=b.default.div.withConfig({
      componentId:"sc-687c7cac-4"
    })([""]),
    Z=(0,b.createGlobalStyle)([".share-session-outisde-btn{margin-top:1px;}.ant-modal.new-share-session-modal{width:100% !important;max-width:700px;transform-origin:center !important;.ant-modal-content{border-radius:8px;}.ant-modal-footer{border:none;padding:0 32px 32px 0;.ant-btn{height:32px;line-height:0;border-top:none;}.ant-btn.ant-btn-primary{font-weight:600;}}.shareSession span a{color:rgba(0,0,0,0.65);}.react-multi-email.focused{border-color:#5D97FF;}.email-invite-box p{font-weight:400;font-size:12px;margin-bottom:5px;}.checkbox-wrap{margin-bottom:30px;color:#161E35;font-weight:400;}.checkbox-wrap .ant-checkbox-wrapper{margin-right:0;color:#161E35;font-weight:500;}.react-multi-email > input{width:100% !important;}.ant-modal-body{padding-bottom:0;}.ant-btn-secondary{font-weight:500 !important;font-size:14px !important;line-height:24px !important;padding:4px 34px !important;border:none !important;color:#5D97FF !important;border-radius:6px !important;&:hover{border:none !important;color:#4A79CB !important;}}.ant-btn-primary{font-weight:500 !important;font-size:14px !important;line-height:24px !important;padding:4px 34px !important;border:none !important;color:#ffffff !important;background-color:#5D97FF !important;border-radius:6px !important;&:hover{border:none !important;backround-color:#4A79CB !important;}&:disabled{opacity:0.7;}}}.share-link-popover .ant-popover-inner-content{max-width:240px;}"]),
    N=b.default.h3.withConfig({
      componentId:"sc-687c7cac-5"
    })(["font-weight:500;font-size:18px;line-height:24px;color:#161E35;margin-bottom:17px;"]),
    D=b.default.div.withConfig({
      componentId:"sc-687c7cac-6"
    })(["position:relative;background:#F3F4F5;border-radius:40px;padding:4px 0;"]),
    E=b.default.input.withConfig({
      componentId:"sc-687c7cac-7"
    })(["width:100%;height:25px;background:transparent;border:none;padding:0px 77px 0px 36px;font-weight:400;font-size:12px;line-height:24px;color:#737886;height:24px;&:focus-visible{outline:none;}"]),
    P=b.default.button.withConfig({
      componentId:"sc-687c7cac-8"
    })(["heigth:24px;width:24px;top:4px;left:4px;position:absolute;padding:0;margin:0;border:none;background:transparent;cursor:pointer;"]),
    T=b.default.img.withConfig({
      componentId:"sc-687c7cac-9"
    })(["heigth:24px;width:24px;"]),
    A=b.default.button.withConfig({
      componentId:"sc-687c7cac-10"
    })(["position:absolute;right:4px;top:4px;font-weight:500;font-size:12px;line-height:24px;display:flex;align-items:center;color:#FFFFFF;background:#5D97FF;padding:0 6px;border:none;border-radius:46px;cursor:pointer;transition:all 0.2s ease-in-out;&:hover{background:#4A79CB;}"]),
    R=b.default.div.withConfig({
      componentId:"sc-687c7cac-11"
    })(['margin-top:16px;.react-multi-email{padding:2px 10px;margin:0;border-radius:6px !important;border:1px solid #E7E8EB;}input,span{font-size:12px;line-height:24px;padding:0 !important;margin:0 !important;}span{left:10px !important;top:50% !important;transform:translateY(-50%) !important;color:#737886 !important;}div[data-tag="true"]{padding:4px 10px;margin-right:10px;font-weight:500;font-size:12px;span{margin-left:6px !important;}}']),
    B=b.default.h4.withConfig({
      componentId:"sc-687c7cac-12"
    })(["font-weight:500;font-size:12px;line-height:24px;color:#454B5D;"]),
    O=b.default.div.withConfig({
      componentId:"sc-687c7cac-13"
    })(["display:flex;flex-direction:row;margin-top:16px;margin-bottom:24px;"]),
    z=b.default.div.withConfig({
      componentId:"sc-687c7cac-14"
    })(["display:flex;flex-direction:column;margin-right:48px;position:relative;> span{display:flex;}.ant-checkbox-inner,.ant-checkbox,> span{left:initial !important;top:initial !important;transform:initial !important;}.ant-checkbox-wrapper{display:flex;align-items:center;margin-right:10px;}"]),
    U=b.default.div.withConfig({
      componentId:"sc-687c7cac-15"
    })(["display:flex;> span{display:flex;left:initial !important;top:initial !important;transform:initial !important;}"]),
    V=b.default.h5.withConfig({
      componentId:"sc-687c7cac-16"
    })(["color:#f4584c !important;display:block;font-size:12px;position:absolute;top:100%;left:27px;"]),
    q=b.default.h4.withConfig({
      componentId:"sc-687c7cac-17"
    })(["margin:0;font-weight:500;font-size:12px;line-height:24px;color:#454B5D;cursor:default;"]),
    Q=b.default.input.withConfig({
      componentId:"sc-687c7cac-18"
    })(["&#time{width:44px;text-align:center;font-weight:400;font-size:12px;line-height:24px;color:#737886;border-radius:6px;border:1px solid #E8E8EB;margin-left:10px !important;padding:1px 0 !important;}"]);
    t.Z=h.memo(e=>{
      var t;
      let{
        shareMultiple:n,
        selectedSession:l,
        alternativeStyle:g=!1,
        hidePublicLink:b=!1
      }=e,
      k=(0,x.I0)(),
      {
        urlReducer:W
      }=(0,x.v9)(e=>e),
      {
        timeRef:Y,
        videoElemRef:H
      }=(0,C.rS)(),
      [J,X]=(0,h.useState)(!1),
      [G,$]=(0,h.useState)(!0),
      [K,ee]=(0,h.useState)(""),
      [et,en]=(0,h.useState)(),
      [es,ei]=(0,h.useState)([]),
      [ea,eo]=(0,h.useState)(!0),
      [el,er]=(0,h.useState)(!1),
      [ec,ed]=(0,h.useState)(!1),
      [eu,ep]=(0,h.useState)(!1),
      em=h.useMemo(()=>n?l:[W.secondarysessionid||W.sessionid],[n,l,W.sessionid,W.secondarysessionid]),
      eh=(0,h.useMemo)(()=>n&&(null==l?void 0:l.length)?"Share selected sessions":"Share the session",[l,n]),
      eg=(null==H?void 0:null===(t=H.current)||void 0===t?void 0:t.duration)||0,
      ef=(0,h.useMemo)(()=>""!==et?(0,w.ox)(et):-1,[et]),
      {
        isLoading:ev,
        isFetched:ex,
        data:eb,
        refetch:ey
      }=(0,j.bR)(["shareSessionLink",em],{
        appId:W.appId,
        sessions:em
      }),
      ew=(0,h.useMemo)(()=>{
        var e,
        t,
        n;
        return(null==eb?void 0:null===(n=eb.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:null===(e=t.publicUrl)||void 0===e?void 0:e.length)>=1
      },[eb]),
      {
        isLoading:ej,
        isSuccess:eC,
        isError:e_,
        error:ek,
        data:eL,
        refetch:eS
      }=(0,j.pA)(["shareSessions",em],{
        sessions:em,
        appId:W.appId,
        privateMessage:K,
        email:es,
        isPublic:ew&&G,
        ...ef>0&&{
          viewTime:ef
        }
      }),
      eI=(0,h.useMemo)(()=>{
        var e,
        t,
        n;
        return null==eb?void 0:null===(n=eb.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:null===(e=t.publicUrl)||void 0===e?void 0:e.join("\n")
      },[eb]),
      eF=(0,h.useMemo)(()=>{
        var e,
        t,
        n;
        return null==eb?void 0:null===(n=eb.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:null===(e=t.privateUrl)||void 0===e?void 0:e.join("\n")
      },[eb]),
      eM=(0,h.useMemo)(()=>(0,w.nH)(null==Y?void 0:Y.current),[Y]),
      eZ=(0,h.useMemo)(()=>(!!_.test(et)||!Number.isNaN(et))&&ef<=eg,[ef,eg,et]),
      eN=h.useCallback(e=>{
        let t=G&&ew?eI:eF;
        return n?t:ef>0&&(ea||e)?"".concat(t,"/").concat(ef):t
      },[G,ew,ef,eF,eI,n,ea]),
      eD=h.useMemo(()=>eN(),[eN]),
      eE=h.useCallback(e=>{
        e||(ed(!1),en(0),ei([]),ee(""),eo(!0),$(!0)),
        X(e)
      },[]),
      eP=h.useCallback((e,t)=>{
        null==e||e.stopPropagation(),
        null==e||e.preventDefault();
        let n=eN(t);
        navigator.clipboard.writeText(n),
        r.ZP.success("Sessions link has been copied."),
        k((0,o.CW)(null,{
          eventName:"copy_sharing_link",
          track_type:"event",
          eventProperty:{
            redesignFlag:!0,
            sessionid:em,
            linkType:G&&ew?"public":"private",
            buttonType:"inside_share_dialog"
          }
        })),
        k((0,a.hI)({
          action:"Shared session",
          info:{
            method:"link"
          }
        })),
        eE(!1)
      },[k,em,eE,eN,G,ew]),
      eT=h.useCallback(e=>{
        ee(e.target.value)
      },[]),
      eA=(0,h.useCallback)(()=>{
        ed(!0),
        ey(),
        k((0,o.CW)(null,{
          eventName:"open_session_sharing_dialog",
          track_type:"event",
          eventProperty:{
            redesignFlag:!0
          }
        }))
      },[ey,k]),
      eR=h.useCallback(e=>{
        en((0,y.xb)(e.target.value)?"":e.target.value)
      },[]),
      eB=h.useCallback(()=>{
        er(!0),
        eS(),
        k((0,a.hI)({
          action:"Shared session",
          info:{
            method:"email"
          }
        })),
        k((0,o.CW)(null,{
          eventName:"session_shared_by_email",
          track_type:"event",
          eventProperty:{
            redesignFlag:!0,
            sessionid:em,
            email:es
          }
        }))
      },[eS,k,es,em]);
      (0,h.useEffect)(()=>{
        en(eM)
      },[eM]);
      let eO=(0,h.useCallback)(()=>{
        en((0,w.nH)(null==Y?void 0:Y.current))
      },[Y]),
      ez=(0,h.useCallback)(()=>{
        eE(!0),
        eO()
      },[eO,eE]);
      (0,h.useEffect)(()=>{
        eb&&ec&&ez()
      },[eb,ec,ez]),
      (0,h.useEffect)(()=>{
        eC&&r.ZP.success("Session successfully shared."),
        e_&&r.ZP.error(null==ek?void 0:ek.response.data.error.message),
        eE(!1),
        er(!1)
      },[eL,ek,e_,eC,eE]);
      let eU=h.useCallback(e=>{
        ei(e)
      },[]),
      eV=h.useCallback((e,t,n)=>(0,s.jsxs)("div",{
        "data-tag":!0,
        children:[e,(0,s.jsx)("span",{
          "aria-hidden":"true",
          "data-tag-handle":!0,
          onClick:()=>n(t),
          children:"\xd7"
        })]
      },t),[]),
      eq=h.useCallback(e=>{
        $(e.target.checked)
      },[]),
      eQ=h.useCallback(e=>{
        eo(e.target.checked)
      },[]),
      eW=h.useCallback(()=>{
        eE(!1)
      },[eE]),
      eY=h.useCallback(()=>{
        ey(),
        ep(!0),
        eO(),
        k((0,o.CW)(null,{
          eventName:"copy_sharing_link",
          track_type:"event",
          eventProperty:{
            redesignFlag:!0,
            sessionid:em,
            linkType:G&&ew?"public":"private",
            buttonType:"outside_share_dialog"
          }
        }))
      },[ey,k,eO,em,G,ew]);
      return h.useEffect(()=>{
        eu&&ex&&(eP(void 0,eu),ep(!1))
      },[eu,ex,eP]),
      (0,s.jsxs)(s.Fragment,{
        children:[(0,s.jsx)(Z,{}),(0,s.jsx)(M,{
          children:(0,s.jsxs)("span",{
            children:[(0,s.jsxs)(c.Z,{
              title:"Share session",
              placement:"bottom",
              align:{
                offset:[0,0]
              },
              children:[" ",g?(0,s.jsx)(S,{
                "data-intercom-target":"Share Session Button",
                onClick:eA,
                disabled:ev,
                children:ev&&ec?(0,s.jsx)(d.Z,{
                  indicator:(0,s.jsx)(i.Z,{
                    style:{
                      fontSize:14
                    },
                    spin:!0
                  })
                }):(0,s.jsx)("img",{
                  src:"/static/sharing/share-primary.svg",
                  alt:"share icon"
                })
              }):(0,s.jsxs)(L,{
                "data-intercom-target":"Share Session Button",
                onClick:eA,
                disabled:ev,
                children:[ev&&ec?(0,s.jsx)(d.Z,{
                  indicator:(0,s.jsx)(i.Z,{
                    style:{
                      fontSize:14
                    },
                    spin:!0
                  })
                }):(0,s.jsx)("img",{
                  src:"/static/sharing/share.svg",
                  alt:"share icon"
                }),"Share"]
              })]
            }),(0,s.jsx)(c.Z,{
              title:"A public link for sharing the session outside your team in UXCam.",
              overlayClassName:"custom-popover share-link-popover",
              placement:"bottomRight",
              align:{
                offset:[8,0]
              },
              children:b?null:g?(0,s.jsx)(S,{
                "data-intercom-target":"Share Session Link",
                onClick:eY,
                disabled:ev,
                children:ev&&eu?(0,s.jsx)(d.Z,{
                  indicator:(0,s.jsx)(i.Z,{
                    style:{
                      fontSize:14
                    },
                    spin:!0
                  })
                }):(0,s.jsx)("img",{
                  src:"/static/sharing/chain.svg",
                  alt:""
                })
              }):(0,s.jsx)(I,{
                "data-intercom-target":"Share Session Link",
                onClick:eY,
                disabled:ev,
                children:ev&&eu?(0,s.jsx)(d.Z,{
                  indicator:(0,s.jsx)(i.Z,{
                    style:{
                      fontSize:14
                    },
                    spin:!0
                  })
                }):(0,s.jsx)("img",{
                  src:"/static/sharing/chain.svg",
                  alt:""
                })
              })
            }),(0,s.jsxs)(m.Z,{
              visible:J,
              centered:!0,
              closable:!1,
              className:"new-share-session-modal",
              maskStyle:{
                backgroundColor:"rgba(22, 30, 53, 0.3)"
              },
              disabled:!eZ||0===es.length||ej,
              footer:[(0,s.jsx)(u.Z,{
                type:"secondary",
                onClick:eW,
                children:"Cancel"
              },"back"),(0,s.jsx)(u.Z,{
                type:"primary",
                disabled:!eZ||0===es.length||ej||el,
                loading:el,
                onClick:eB,
                children:el?"Sharing":"Share"
              },"submit")],
              children:[(0,s.jsx)(N,{
                children:eh
              }),(0,s.jsxs)(D,{
                children:[(0,s.jsx)(E,{
                  value:eD,
                  readOnly:!0
                }),(0,s.jsx)(f(),{
                  text:eD,
                  children:(0,s.jsx)(P,{
                    onClick:eP,
                    children:(0,s.jsx)(T,{
                      src:"/static/sessions/link.svg"
                    })
                  })
                }),(0,s.jsx)(f(),{
                  text:eD,
                  children:(0,s.jsx)(A,{
                    disabled:!eZ,
                    onClick:eP,
                    children:"Copy link"
                  })
                })]
              }),(0,s.jsxs)(R,{
                children:[(0,s.jsx)(B,{
                  children:"Recipients"
                }),(0,s.jsx)(v.Qg,{
                  placeholder:"Add people",
                  emails:es,
                  onChange:eU,
                  getLabel:eV
                })]
              }),(0,s.jsxs)(R,{
                children:[(0,s.jsx)(B,{
                  children:"Message"
                }),(0,s.jsx)(F,{
                  placeholder:"Add a message",
                  autoSize:{
                    minRows:1,
                    maxRows:4
                  },
                  value:K,
                  onChange:eT
                }),(0,s.jsxs)(O,{
                  children:[ew&&(0,s.jsx)(z,{
                    children:(0,s.jsxs)(c.Z,{
                      title:"Check this box only if you also want to make the session replay accessible to people who don’t have access to your app’s UXCam account.",
                      overlayStyle:{
                        zIndex:"999999"
                      },
                      children:[(0,s.jsx)(p.default,{
                        onChange:eq,
                        checked:G
                      }),(0,s.jsx)(q,{
                        children:"Generate public link"
                      })]
                    })
                  }),!n&&(0,s.jsxs)(z,{
                    children:[(0,s.jsxs)(U,{
                      children:[(0,s.jsx)(p.default,{
                        onChange:eQ,
                        checked:ea
                      }),(0,s.jsx)(q,{
                        children:"Shared session starts at:"
                      }),(0,s.jsx)(Q,{
                        id:"time",
                        disabled:!ea,
                        placeholder:"00:00",
                        value:et,
                        onChange:eR
                      })]
                    }),!eZ&&ea&&(0,s.jsx)(V,{
                      children:"Please enter valid time"
                    })]
                  })]
                })]
              })]
            })]
          })
        })]
      })
    })
  },
  85445:function(e,t,n){
    n.d(t,{
      $j:function(){
        return a
      },
      Ko:function(){
        return r
      },
      NG:function(){
        return s
      },
      _$:function(){
        return l
      },
      aC:function(){
        return c
      },
      hQ:function(){
        return o
      },
      lv:function(){
        return d
      },
      mr:function(){
        return i
      }
    });
    let s=e=>Math.ceil((e+Number.EPSILON)*1e5)/1e5,
    i=e=>{
      let t=e<0?0:e,
      n=Math.floor(t%60),
      s=Math.floor(t/60%60),
      i=Math.floor(t/3600);
      return(Number.isNaN(e)||e===1/0)&&(i=s=n="-"),
      s=(((i=i>0||Math.floor(e/3600)>0?i+":":"")||Math.floor(e/60%60)>=10)&&s<10?"0"+s:s)+":",
      i+s+(n=n<10?"0"+n:n)
    },
    a=(e,t)=>{
      let n=0,
      s=e.length-1;
      for(;n<=s;){
        let i=Math.floor((n+s)/2),
        a=e[i],
        {
          start:o,
          end:l
        }=a;
        if(t>=o&&t<=l)return a;
        o<t?n=i+1:s=i-1
      }
    },
    o=(e,t)=>{
      let n=e.filter(e=>{
        let{
          g:t
        }=e;
        return 10===t
      });
      return n.length?n.map(e=>{
        let{
          start:t,
          end:n,
          o:s
        }=e;
        return{
          start:t,
          end:n,
          o:s
        }
      }):e.length?[{
        start:e[0].start,
        end:t||e[e.length-1].end,
        o:e[0].o
      }]:[]
    },
    l=(e,t)=>{
      let n=-1,
      s=-1,
      i=0,
      a=e.length-1;
      for(;i<=a;){
        let o=Math.floor((i+a)/2),
        {
          time:l
        }=e[o],
        r=l+.5;
        if(t>=l&&t<=r){
          i=o,
          n=o,
          s=o;
          break
        }
        l<t?i=o+1:a=o-1
      }
      if(-1===n)return[];
      for(;n>=0;){
        let s=e[n-1];
        if(!s)break;
        let{
          time:i
        }=s;
        if(i+.5>=t)n-=1;
        else break
      }
      for(;s<=a;){
        let n=e[s+1];
        if(!n)break;
        let{
          time:i
        }=n;
        if(i<=t)s+=1;
        else break
      }
      return e.slice(n,s+1)
    },
    r=e=>{
      let t=Math.floor(e%86400/3600),
      n=(e%1).toFixed(3).slice(2).toString().padEnd(3,"0"),
      s=Math.floor(e%3600/60).toString().padStart(2,"0"),
      i=Math.floor(e%60).toString().padStart(2,"0"),
      a=Number(String(n)[0]);
      return"".concat(t>0?"".concat(t,":"):"").concat(s,":").concat(i,".").concat(a)
    },
    c=(e,t)=>{
      let n=0;
      return 0===t.length?[]:e.map(e=>{
        let{
          activityName:s,
          time:i,
          endTime:a
        }=e,
        o=t.slice(n).filter(e=>{
          let{
            timeLine:t
          }=e;
          return t>=i&&t<=a&&(n+=1,!0)
        });
        return{
          activityName:s,
          time:i,
          endTime:a,
          logs:o
        }
      })
    },
    d=["native","react-native","nativescript","xamarin"]
  },
  1949:function(e,t,n){
    n.d(t,{
      Ak:function(){
        return a
      },
      ve:function(){
        return i
      }
    });
    var s=n(85893);
    n(67294);
    let i=[{
      type:"account-book"
    },{
      type:"alert"
    },{
      type:"api"
    },{
      type:"appstore"
    },{
      type:"audio"
    },{
      type:"bank"
    },{
      type:"barcode"
    },{
      type:"bell"
    },{
      type:"book"
    },{
      type:"branches"
    },{
      type:"build"
    },{
      type:"bulb"
    },{
      type:"calculator"
    },{
      type:"calendar"
    },{
      type:"camera"
    },{
      type:"car"
    },{
      type:"carry-out"
    },{
      type:"ci"
    },{
      type:"cloud"
    },{
      type:"code"
    },{
      type:"compass"
    },{
      type:"control"
    },{
      type:"contacts"
    },{
      type:"container"
    },{
      type:"credit-card"
    },{
      type:"crown"
    },{
      type:"customer-service"
    },{
      type:"dashboard"
    },{
      type:"dislike"
    },{
      type:"environment"
    },{
      type:"eye-invisible"
    },{
      type:"file"
    },{
      type:"file-add"
    },{
      type:"file-pdf"
    },{
      type:"file-image"
    },{
      type:"file-unknown"
    },{
      type:"file-zip"
    },{
      type:"fire"
    },{
      type:"flag"
    },{
      type:"folder"
    },{
      type:"folder-add"
    },{
      type:"folder-open"
    },{
      type:"frown"
    },{
      type:"funnel-plot"
    },{
      type:"gift"
    },{
      type:"heart"
    },{
      type:"home"
    },{
      type:"hourglass"
    },{
      type:"idcard"
    },{
      type:"insurance"
    },{
      type:"interaction"
    },{
      type:"layout"
    },{
      type:"like"
    },{
      type:"lock"
    },{
      type:"meh"
    },{
      type:"mail"
    },{
      type:"message"
    },{
      type:"mobile"
    },{
      type:"money-collect"
    },{
      type:"notification"
    },{
      type:"phone"
    },{
      type:"poweroff"
    },{
      type:"play-square"
    },{
      type:"pushpin"
    },{
      type:"read"
    },{
      type:"reload"
    },{
      type:"rest"
    },{
      type:"rocket"
    },{
      type:"save"
    },{
      type:"security-scan"
    },{
      type:"setting"
    },{
      type:"shop"
    },{
      type:"shopping"
    },{
      type:"smile"
    },{
      type:"skin"
    },{
      type:"sound"
    },{
      type:"thunderbolt"
    },{
      type:"tool"
    },{
      type:"trophy"
    },{
      type:"unlock"
    },{
      type:"usb"
    },{
      type:"cloud-download"
    },{
      type:"cluster"
    },{
      type:"coffee"
    },{
      type:"desktop"
    },{
      type:"dollar"
    },{
      type:"download"
    },{
      type:"global"
    },{
      type:"gold"
    },{
      type:"euro"
    },{
      type:"history"
    },{
      type:"inbox"
    },{
      type:"key"
    },{
      type:"close"
    },{
      type:"line"
    },{
      type:"laptop"
    },{
      type:"monitor"
    },{
      type:"robot"
    },{
      type:"safety"
    },{
      type:"user"
    },{
      type:"upload"
    },{
      type:"pound"
    },{
      type:"paper-clip"
    },{
      type:"link"
    },{
      type:"man"
    },{
      type:"woman"
    },{
      type:"table"
    },{
      type:"team"
    },{
      type:"scan"
    },{
      type:"solution"
    },{
      type:"shake"
    },{
      type:"share-alt"
    },{
      type:"to-top"
    },{
      type:"qrcode"
    },{
      type:"select"
    }],
    a=()=>(0,s.jsxs)("svg",{
      width:"40",
      height:"50",
      viewBox:"0 0 40 50",
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      children:[(0,s.jsx)("path",{
        d:"M35.2839 17.5331L20.0466 32.4665M35.2839 17.5331C33.3 15.5295 30.6034 14.3929 27.7839 14.3719C24.9643 14.3508 22.2511 15.447 20.2375 17.4208C18.2239 19.3946 17.0737 22.0854 17.0384 24.9048C17.0032 27.7242 18.0857 30.4429 20.0492 32.4665L35.2839 17.5331ZM35.2839 17.5331C37.2475 19.5567 38.33 22.2754 38.2947 25.0948C38.2594 27.9142 37.1092 30.605 35.0956 32.5788C33.082 34.5525 30.3688 35.6488 27.5493 35.6277C24.7297 35.6067 22.0332 34.4701 20.0492 32.4665L35.2839 17.5331Z",
        stroke:"#8A99B1",
        "stroke-width":"1.7",
        "stroke-linecap":"round",
        "stroke-linejoin":"round"
      }),(0,s.jsx)("path",{
        d:"M38.3333 9V6.33333C38.3333 4.91885 37.7714 3.56229 36.7712 2.5621C35.771 1.5619 34.4145 1 33 1H6.33333C4.91885 1 3.56229 1.5619 2.5621 2.5621C1.5619 3.56229 1 4.91885 1 6.33333V43.6667C1 45.0812 1.5619 46.4377 2.5621 47.4379C3.56229 48.4381 4.91885 49 6.33333 49H33C34.4145 49 35.771 48.4381 36.7712 47.4379C37.7714 46.4377 38.3333 45.0812 38.3333 43.6667V41",
        stroke:"#8A99B1",
        "stroke-width":"1.7",
        "stroke-linecap":"round",
        "stroke-linejoin":"round"
      })]
    })
  },
  1363:function(e,t,n){
    n.d(t,{
      D:function(){
        return d
      }
    });
    var s=n(85893),
    i=n(67294),
    a=n(14416),
    o=n(95315),
    l=n(86578),
    r=n(41371),
    c=n(18879);
    let d=()=>{
      var e;
      let[t,n]=(0,i.useState)(!1),
      {
        currentAppReducer:d
      }=(0,a.v9)(e=>e),
      {
        orgId:u
      }=d,
      {
        setShowPricingModal:p,
        selfServeFlag:m
      }=(0,r.I)(),
      {
        data:h,
        refetch:g,
        error:f,
        isError:v
      }=(0,o.lx)(u),
      x=null==h?void 0:null===(e=h.planFeature)||void 0===e?void 0:e.exportCsv,
      b=null==h?void 0:h.status,
      y=(0,i.useMemo)(()=>!!(("Active"===b||"Canceled"===b)&&1===x),[b,x]),
      w=(0,i.useCallback)(()=>{
        n(!1),
        p(!0)
      },[p]),
      j=()=>{
        (0,c.aL)()
      };
      return(0,i.useEffect)(()=>{
        g()
      },[u]),
      {
        canExportData:y,
        CommonUpgradeModal:(0,i.useCallback)(()=>(0,s.jsx)(l.Z,{
          upgradePlan:t,
          handleGetinTouch:j,
          handleUpgrade:w,
          handleCancel:()=>n(!1),
          acceptText:m?"See pricing":"Request pricing"
        }),[t,w,m]),
        apiError:f,
        isApiError:v,
        setUpgradePlan:n,
        upgradePlan:t
      }
    }
  },
  90391:function(e,t,n){
    var s=n(67294),
    i=n(67401),
    a=n(55931);
    t.Z=function(){
      let e=(0,a.e)("web"),
      {
        noCodeEventsFeatureFlag:t
      }=(0,i.Z)();
      return!!(0,s.useMemo)(()=>t&&!e,[t,e])
    }
  },
  73211:function(e,t,n){
    n.d(t,{
      C:function(){
        return l
      }
    });
    var s=n(85893),
    i=n(48203),
    a=n(67294),
    o=n(86927);
    let l=(e,t)=>(0,a.useMemo)(()=>{
      let n=(0,o.n5)({
        customUserId:null==e?void 0:e.customUserId,
        uxcamuserid:null==e?void 0:e.uxcamuserid
      });
      return(null==n?void 0:n.customUserId)?t?(0,s.jsx)(t,{
        className:"text-ellipsis",
        children:null==n?void 0:n.customUserId
      }):(0,s.jsx)("span",{
        className:"text-ellipsis",
        children:null==n?void 0:n.customUserId
      }):(0,s.jsx)(i.Z,{
        title:(0,s.jsx)("span",{
          children:null==n?void 0:n.info
        }),
        children:t?(0,s.jsx)(t,{
          className:"text-ellipsis text-italic-asterisk",
          children:null==n?void 0:n.uxcamuserid
        }):(0,s.jsx)("span",{
          className:"text-ellipsis text-italic-asterisk",
          children:null==n?void 0:n.uxcamuserid
        })
      })
    },[e,t])
  },
  91209:function(e,t,n){
    n.d(t,{
      H7:function(){
        return f
      },
      IE:function(){
        return d
      },
      TI:function(){
        return u
      },
      WD:function(){
        return m
      },
      ux:function(){
        return g
      }
    });
    var s=n(67401),
    i=n(48002),
    a=n(67294),
    o=n(14416),
    l=n(92053),
    r=n(92046),
    c=n(90391);
    let d=()=>{
      let{
        urlReducer:e
      }=(0,o.v9)(e=>e),
      {
        parentType:t
      }=e;
      return"usersList"===t
    },
    u=e=>{
      let t=d();
      return(0,a.useMemo)(()=>"user"===r.ae[e]&&t?"user_v2":r.ae[e],[t,e])
    },
    p="User where",
    m={
      device_id:"user_device_id",
      session_is_viewed:"user_is_viewed",
      device_city:"user_device_city",
      device_country:"user_device_country",
      device_class:"user_device_class",
      device_manufacturer:"user_device_manufacturer",
      device_model:"user_device_model",
      device_type:"user_device_type",
      device_os_version:"user_device_os_version",
      device_platform:"user_device_platform",
      app_version:"user_app_version",
      session_number_of_user:"user_session_count",
      session_duration:"user_session_duration",
      session_with_event:"user_event_count",
      rage_quit:"user_rage_gesture_count",
      session_gesture_count:"user_gesture_count",
      session_responsive_gesture_count:"user_responsive_gesture_count",
      session_unresponsive_gesture_count:"user_unresponsive_gesture_count",
      last_seen_on:"user_last_seen_on",
      first_seen_on:"user_first_seen_on",
      device_os_name:"user_device_os_name",
      browser_version:"user_browser_version",
      browser_name:"user_browser_name"
    },
    h=new Set([...Object.values(m),"kUXCam_UserIdentity","uxcamuserid","user_custom_label","user_custom_property","uxcamuserid_cohort"]),
    g=()=>{
      let e=d(),
      t=(0,c.Z)(),
      {
        urlReducer:n
      }=(0,o.v9)(e=>e);
      return{
        getQueryPrefix:function(n){
          let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";
          return e&&h.has(n)?"kUXCam_UserIdentity"===n?"custom user ID":"user_custom_label"===n?"".concat(p," label"):"user_custom_property"===n?"".concat(p,"  "):"user_event_count"!==n||t?"".concat(p," ").concat(s.toLowerCase()):"".concat(p," total event count of user"):"kUXCam_UserIdentity"===n?"Custom user ID":s
        }
      }
    },
    f=()=>{
      let{
        noCodeEventsFeatureFlag:e
      }=(0,s.Z)(),
      t=(0,a.useMemo)(()=>[l.c.SESSION,l.c.CODED_EVENT,...e?[l.c.SMART_EVENT]:[],l.c.SCREENVISIT],[e]),
      n=(0,a.useCallback)(e=>Object.keys(i.i).filter(t=>i.i[t].configuration.type===e),[]);
      return(0,a.useMemo)(()=>t.flatMap(e=>n(e)),[t,n])
    }
  },
  17020:function(e,t,n){
    var s=n(85893);
    n(67294),
    t.Z=e=>(0,s.jsxs)("svg",{
      width:25,
      height:25,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,s.jsx)("circle",{
        cx:12.942,
        cy:12.666,
        r:12,
        fill:"#D0D2D7"
      }),(0,s.jsx)("path",{
        d:"M17.942 10h-2.25V8.25a2.75 2.75 0 1 0-5.5 0V10h-2.25a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-6.75-1.75a1.75 1.75 0 0 1 3.5 0V10h-3.5V8.25Z",
        fill:"#737886"
      })]
    })
  },
  90829:function(e,t,n){
    var s=n(85893);
    n(67294),
    t.Z=e=>(0,s.jsxs)("svg",{
      width:25,
      height:24,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:[(0,s.jsx)("rect",{
        x:.744,
        width:24,
        height:24,
        rx:12,
        fill:"#EFF5FF"
      }),(0,s.jsx)("path",{
        d:"M10.832 6.862a1.314 1.314 0 0 0-1.237-.097 1.361 1.361 0 0 0-.432.282c-.258.25-.402.584-.401.933v8.036c-.002.173.032.345.101.506.07.16.171.306.3.43.127.118.275.216.437.287a1.313 1.313 0 0 0 1.254-.115l6.353-4.095c.193-.12.349-.287.451-.483a1.338 1.338 0 0 0-.008-1.273 1.303 1.303 0 0 0-.465-.476l-6.353-3.936Z",
        fill:"#5D97FF"
      })]
    })
  },
  53857:function(e,t,n){
    var s=n(85893);
    n(67294),
    t.Z=e=>(0,s.jsx)("svg",{
      width:12,
      height:12,
      fill:"none",
      xmlns:"http://www.w3.org/2000/svg",
      ...e,
      children:(0,s.jsx)("path",{
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M5.652 0h.697a1.3 1.3 0 0 1 1.208.825l.318.81.969.56.859-.131a1.3 1.3 0 0 1 1.32.635l.347.602a1.3 1.3 0 0 1-.11 1.46l-.542.678v1.122l.539.678a1.3 1.3 0 0 1 .11 1.46l-.348.601a1.3 1.3 0 0 1-1.319.636l-.86-.13-.97.56-.316.808A1.3 1.3 0 0 1 6.347 12H5.65a1.3 1.3 0 0 1-1.208-.826l-.317-.808-.97-.56-.859.13a1.3 1.3 0 0 1-1.32-.635L.63 8.699a1.299 1.299 0 0 1 .11-1.46l.542-.678V5.439L.74 4.761A1.3 1.3 0 0 1 .63 3.3L.978 2.7a1.3 1.3 0 0 1 1.318-.636l.858.13.972-.563.32-.806A1.298 1.298 0 0 1 5.651 0ZM6 7.778a1.778 1.778 0 1 0 0-3.556 1.778 1.778 0 0 0 0 3.556Z",
        fill:"currentColor"
      })
    })
  }
}]);