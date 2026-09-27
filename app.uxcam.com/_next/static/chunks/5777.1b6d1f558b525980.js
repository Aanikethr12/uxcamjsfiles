"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5777],{
  8047:function(e,t,s){
    s.d(t,{
      Z:function(){
        return H
      }
    });
    var r=s(85893),
    i=s(67294),
    o=s(14416),
    a=s(775),
    p=s(19521),
    n=s(94184),
    l=s.n(n),
    u=s(60063),
    d=s(22365),
    c=s(62357),
    h=s(67287),
    y=s(74936),
    m=s(12016),
    v=s(80432),
    g=s(68457),
    _=s(78268),
    f=s(48203),
    b=s(39618),
    x=s(35161),
    S=s.n(x),
    P=s(1469),
    j=s.n(P),
    w=s(66678),
    D=s.n(w),
    C=s(41609),
    A=s.n(C),
    N=s(7436),
    O=s.n(N),
    F=s(66073),
    I=s.n(F),
    k=s(16579),
    B=s.n(k),
    V=s(18446),
    G=s.n(V),
    L=s(44908),
    T=s.n(L),
    E=s(55137),
    Z=s(59268),
    R=s(92980),
    U=e=>{
      let{
        dropdownKeys:t,
        withPropertiesOrRanges:s,
        selectedKey:i
      }=e;
      return(0,r.jsx)(g.default.ItemGroup,{
        className:"menu-item-column menu-initial",
        children:t?t.map(e=>(0,r.jsxs)(g.default.Item,{
          className:e===i?"selected":"",
          ismainmenu:"true",
          children:[e," ","All"!==e&&s(e)]
        },e)):(0,r.jsx)(g.default.Item,{
          disabled:!0,
          className:"extra-features",
          children:(0,r.jsx)(_.Z,{})
        })
      })
    };
    let M=(0,p.default)(y.Z).withConfig({
      componentId:"sc-63c6d5d8-0"
    })(["width:100px;font-size:12px;height:28px;box-shadow:none;border-radius:4px;&:hover,&:focus,&:active{background-color:#4A79CB;}"]),
    K=(0,r.jsxs)("span",{
      children:["Additional information about your users that you can sent to UXCam using our user API. ",(0,r.jsx)("br",{}),(0,r.jsx)("a",{
        target:"_blank",
        style:{
          color:"#9699FF",
          textDecoration:"underline"
        },
        href:"https://help.uxcam.com/en/articles/10222703-send-user-properties",
        rel:"noreferrer",
        children:"Click here"
      })," ","for more information."]
    }),
    W=(0,r.jsxs)("span",{
      children:["Additional customizable properties that can be attached to all events in the UXCam event API. ",(0,r.jsx)("br",{}),(0,r.jsx)("a",{
        target:"_blank",
        style:{
          color:"#9699FF",
          textDecoration:"underline"
        },
        href:"https://help.uxcam.com/en/articles/10222547-ideas-for-events",
        rel:"noreferrer",
        children:"Click here"
      })," ","for more information."]
    }),
    J={
      session_app_version:"session_app_version",
      device_class:"device_class",
      device_model:"device_model",
      device_manufacturer:"device_manufacturer",
      device_os_version:"device_os_version",
      device_os_name:"device_os_name",
      screen_name:"screen_name",
      session_sessionid:"session_sessionid",
      userpropertyvalueofgrp:"userpropertyvalueofgrp",
      eventpropertyvalueofgrp:"eventpropertyvalueofgrp",
      utmpropertyvalueofgrp:"utmpropertyvalueofgrp",
      userfirstutmpropertyvalueofgrp:"userfirstutmpropertyvalueofgrp",
      eventname:"event_name",
      event_name:"event_name",
      app_version:"app_version",
      user_device_class:"user_device_class",
      user_devicemodel:"user_devicemodel",
      user_device_manufacturer:"user_device_manufacturer",
      user_osversion:"user_osversion",
      user_country:"user_country",
      user_city:"user_city",
      device_country:"device_country",
      device_city:"device_city",
      user_sessionid:"session_id",
      session_id:"session_id",
      sdk_version:"sdk_version",
      userpropertyofgrp:"userpropertyofgrp",
      property:"property",
      event_activity_name:"event_activity_name",
      session_user_experience:"session_user_experience",
      user_custom_property:"user_custom_property",
      user_first_utm:"user_first_utm",
      event_custom_property:"event_custom_property",
      utm:"utm",
      browser_name:"browser_name",
      browser_version:"browser_version",
      device_type:"device_type"
    };
    Object.keys(J);
    let Q=Object.values(J);
    class X extends i.Component{
      render(){
        var e;
        let t="events_agg_dropdown"===this.props.id||"groupby_dropdown"===this.props.id,
        s=this.props.isRevamped?"multi-column-menu":"old-multi-column-menu";
        return this.props.isImprovedAggregation?this.props.isStatisticsDropdownVisible?this.menu():null:(0,r.jsx)(m.Z,{
          overlay:this.menu,
          trigger:["click"],
          visible:this.state.visible,
          overlayClassName:t?s:"property-menu-dropdown",
          onVisibleChange:e=>this.onDropdownVisibilityChange(e),
          children:t?(0,r.jsxs)("a",{
            href:"#!",
            className:"ant-dropdown-link",
            onClick:e=>{
              e.preventDefault(),
              this.setValueByKey("visible",!0)
            },
            children:[(0,r.jsxs)("span",{
              children:[this.props.eventDropVal&&this.props.eventDropVal.attribute&&("event_custom_property"===this.props.eventDropVal.attribute||"user_custom_property"===this.props.eventDropVal.attribute?"kUXCam_UserIdentity"===this.props.eventDropVal.json_field[0]?this.displayTextByIndex("Custom user ID",!0):this.displayTextByIndex(this.props.eventDropVal.json_field[0],!0):this.displayTextByIndex(this.props.eventDropVal.display))||this.props.placeholderText," "]
            }),this.props.isRevamped&&(0,r.jsx)(u.Z,{
              className:"sm-caret-down"
            })]
          }):(0,r.jsx)("div",{
            className:"tag-value",
            children:(0,r.jsx)(a.DebounceInput,{
              debounceTimeout:500,
              placeholder:"Search property",
              defaultValue:this.state.propertyName,
              value:null!==(e=R.oR[this.state.propertyName])&&void 0!==e?e:this.state.propertyName,
              onClick:async e=>{
                e.persist(),
                await this.setState({
                  propertyName:e.target.value
                }),
                ""!==e.target.value&&this.handleSearchInputProps(e)
              },
              onChange:async e=>{
                this.handleSearchInputProps(e,!0),
                this.callCustomListApi(e)
              },
              onKeyDown:e=>{
                "Enter"===e.key&&(this.callCustomListApi(e),this.setState({
                  visible:!1
                }))
              },
              style:{
                width:"90px",
                maxWidth:"200px"
              }
            })
          })
        })
      }
      constructor(...e){
        var t,
        s;
        super(...e),
        t=this,
        this.state={
          availableOptions:[],
          searchedStrings:{},
          userPropertyAvailableOptions:[],
          userPropertySearchedStrings:{},
          userPropertyInputValue:"",
          originalList:[],
          _fetchedData:[],
          fetchedData:[],
          userPropertyFetchedData:[],
          isClickedDropdown:!1,
          hitEnter:!1,
          inputValue:"",
          propertyName:"",
          eventProperty_Ldr:!1,
          isProperty_null:!1,
          selectedKey:"All",
          maxGroupNumber:50,
          isShowTopActivated:!0,
          showRightSideSetting:!1,
          dropdownOptions:[],
          _inputValueToDropdownOptions:"",
          attributeBySearchFilter:"",
          groupingOptions:[],
          _inputValueToGroupingOptions:"",
          searchedData:[],
          max_group_number:(null===(s=this.props.eventDropVal)||void 0===s?void 0:s.max_group_number)||50
        },
        this._isMounted=!1,
        this.callSearchAttributeApi=async function(){
          let{
            filterData:e,
            attribute:s
          }=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};
          if(["session_user_experience"].includes(s))return;
          t.setState({
            searchedData:[]
          });
          let r=await t.props.getSearchAttrRemoteData(e,!0);
          t.setState({
            searchedData:[...r]
          })
        },
        this.segmentOpt=e=>{
          let t;
          let{
            sessionSegment:s,
            urlQ:r,
            userSegment:i,
            eventSegment:o,
            issueSegment:a,
            screenFlowSegment:p
          }=e;
          return"usersList"===r.parentType?t=i:["sessionsList","sessionStatistics","aiSessionsList","aiSessionStatistics"].includes(r.parentType)?t=s:"issues"===r.parentType?t=a:"screenFlow"===r.parentType||"screenBurst"===r.parentType?t=p:("eventsList"===r.parentType||"statistics"===r.parentType)&&(t=[]),
          t
        },
        this.handleSearchProps=async(e,t)=>{
          let{
            index:s,
            segmentOperator:r,
            eventProperty:i,
            handleChange:o,
            setFlagByKey:a,
            id:p
          }=this.props;
          e.target?(e.preventDefault(),e.stopPropagation()):(e.domEvent.preventDefault(),e.domEvent.stopPropagation()),
          this.state.visible||this.setState({
            visible:!0
          });
          let n=e.target?e.target.value:e.key?e.key:e;
          await a("eventPropertyValue",n,s),
          await a("isInputProps",!1,this.props.index),
          this.setState({
            propertyName:n
          }),
          await o(n,s,r,"propertyName",void 0,i),
          this.setState({
            visible:!1
          })
        },
        this.callCustomListApi=e=>{
          let{
            index:t,
            segmentOperator:s,
            eventProperty:r,
            handleChange:i
          }=this.props;
          i(e.target.value,t,s,"propertyName",void 0,r)
        },
        this.setStateErroo=(e,t,s,r)=>{
          r?this.setState(()=>({
            userPropertyFetchedData:s&&[...e],
            userPropertyFFData:[...e],
            userPropertySearchedStrings:t
          })):this.setState(()=>({
            fetchedData:s&&[...e],
            ffData:[...e],
            searchedStrings:t
          }))
        },
        this.handleErrorFF=async(e,t,s,r)=>{
          s.length>=1?t[e]=!0:t[e]=!1;
          let i=[...s],
          o=j()(i);
          await this.setStateErroo(i,t,o,r)
        },
        this.handleSearchInputProps=async(e,t)=>{
          e.persist(),
          e.preventDefault(),
          e.stopPropagation();
          let s="events_agg_dropdown"===this.props.id||"groupby_dropdown"===this.props.id,
          r=e.target.value.trim()||"",
          i=[],
          o=[];
          this.setState({
            inputValue:r,
            loader:!1,
            ffData:null
          });
          let a=D()(this.state.searchedStrings),
          p=[...this.state.availableOptions];
          if(""===r){
            this.setState({
              fetchedData:p
            });
            return
          }
          if(!s&&t&&await this.props.setFlagByKey("eventPropertyValue",r,this.props.index),!s&&t&&await this.props.setFlagByKey("isInputProps",!0,this.props.index),i=p.length?p.filter(e=>e.includes(r)):[],!A()(a)&&Object.keys(a).includes(r)&&a[r])return this.handleErrorFF(r,a,i);
          for(let e in a)if(r.includes(e)&&!a[e]){
            this.setState({
              fetchedData:[]
            });
            return
          }
          if(this.setState({
            fetchedData:[]
          }),i.length<10){
            this.setState({
              loader:!0
            });
            let e=await this.callPropertyValueApi(r,100,1e5);
            e.length>=1?a[r]=!0:a[r]=!1;
            let t=e&&e.length?e.filter(e=>!i.includes(e)):[];
            o=i.concat(t),
            p=p.concat(t)
          }
          else o=i;
          await this.setState({
            fetchedData:o,
            searchedStrings:a,
            availableOptions:p,
            loader:!1
          })
        },
        this.handleUserPropertyInputProps=async(e,t)=>{
          e.persist(),
          e.preventDefault(),
          e.stopPropagation();
          let s=e.target.value||"",
          r=[],
          i=[];
          this.setState({
            userPropertyInputValue:s,
            userPropertyLoader:!1,
            userPropertyFFData:null
          });
          let o=D()(this.state.userPropertySearchedStrings),
          a=[...this.state.userPropertyAvailableOptions];
          if(""===s){
            this.setState({
              userPropertyFetchedData:a
            });
            return
          }
          if(r=a.length?a.filter(e=>e.includes(s)):[],!A()(o)&&Object.keys(o).includes(s)&&o[s])return this.handleErrorFF(s,o,r,t);
          for(let e in o)if(s.includes(e)&&!o[e]){
            this.setState({
              userPropertyFetchedData:[]
            });
            return
          }
          if(this.setState({
            userPropertyFetchedData:[]
          }),r.length<10){
            this.setState({
              userPropertyLoader:!0
            });
            let e=await this.callPropertyValueApi(s,100,1e5,t);
            e.length>=1?o[s]=!0:o[s]=!1;
            let p=e&&e.length?e.filter(e=>!r.includes(e)):[];
            i=r.concat(p),
            a=a.concat(p)
          }
          else i=r;
          await this.setState({
            userPropertyFetchedData:i,
            userPropertySearchedStrings:o,
            userPropertyAvailableOptions:a,
            userPropertyLoader:!1
          })
        },
        this.initialCall=(e,t)=>{
          let{
            availableOptions:s,
            searchedStrings:r,
            userPropertySearchedStrings:i,
            userPropertyAvailableOptions:o
          }=this.state;
          if(t){
            if(0===s.length)i[""]=e&&e.length>0,
            e&&this.setState({
              userPropertyAvailableOptions:e,
              userPropertySearchedStrings:i,
              userPropertyFetchedData:e,
              userPropertyLoader:!1
            });
            else{
              let t=[],
              s=e.filter(e=>!o.includes(e));
              (t=o.concat(s)).sort(),
              i[""]=e&&e.length>0,
              this.setState({
                userPropertyLoader:!1,
                userPropertyFetchedData:t,
                userPropertyAvailableOptions:t,
                userPropertySearchedStrings:i
              })
            }
          }
          else if(0===s.length)r[""]=e&&e.length>0,
          e&&this.setState({
            availableOptions:e,
            searchedStrings:r,
            fetchedData:e,
            loader:!1
          });
          else{
            let t=[],
            i=e.filter(e=>!s.includes(e));
            (t=s.concat(i)).sort(),
            r[""]=e&&e.length>0,
            this.setState({
              loader:!1,
              fetchedData:t,
              availableOptions:t,
              searchedStrings:r
            })
          }
        },
        this.callPropertyValueApi=async(e,t,s,r)=>{
          let i,
          o,
          a;
          r&&await this.setState({
            userPropertyLoader:!0
          }),
          r||await this.setState({
            loader:!0
          });
          let{
            attribute:p,
            getSearchAttrRemoteData:n,
            urlQ:l,
            index:u,
            userProperty:d,
            isFunnel:c
          }=this.props,
          h=[],
          y="events_agg_dropdown"===this.props.id||"groupby_dropdown"===this.props.id;
          return i=this.props.eventProperty?"event_custom_property":d||"userproperty"===p||r||c?"user_custom_property":p,
          y?y&&this.props.eventPropertyFilter&&this.props.eventPropertyFilter.length&&(h=this.props.eventPropertyFilter[0].value.length?[...this.props.eventPropertyFilter]:[]):(a=await this.segmentOpt(this.props)).length&&"event_custom_property"===i&&("number"==typeof u&&u>=0?h.push(a[u]):h=a.filter(e=>"event"===e.attribute),h[0]&&h[0].property&&delete h[0].property),
          o={
            appid:l.appId,
            search:e,
            attribute:i,
            filter:h,
            dropdownLimit:t,
            date_range:this.props.dateSegment
          },
          await n(o)
        },
        this.onDropdownVisibilityChange=async e=>{
          let t="events_agg_dropdown"===this.props.id||"groupby_dropdown"===this.props.id;
          if(this.setState({
            visible:e
          }),e){
            if(t&&this.props.eventProperty&&this.state.userPropertyAvailableOptions.length<=0&&!this.state.userProperty_Ldr&&!this.state.isUserProperty_null){
              let e=await this.callPropertyValueApi(this.state.propertyName,500,2e5,!0);
              return await this.initialCall(e,!0),
              e
            }
            if(!this.props.isUserJourney&&this.state.availableOptions.length<=0&&!this.state.propertyName.length&&!this.state.eventProperty_Ldr&&!this.state.isProperty_null){
              let e=await this.callPropertyValueApi(this.state.propertyName,500,2e5);
              return await this.initialCall(e),
              e
            }
            t&&!this.props.isUserJourney&&this.handleProperty(),
            this.maintainDefaultSelect()
          }
        },
        this.disableProps=(e,t)=>{
          let{
            indexByGrpby:s,
            group_list:r
          }=this.props;
          return t?0===s&&r[1]&&r[1].json_field&&r[1].json_field[0]===e||1===s&&r[0]&&r[0].json_field&&r[0].json_field[0]===e:0===s&&r[1]&&r[1].display===e||1===s&&r[0]&&r[0].display===e
        },
        this.dStyle=(e,t)=>({
          color:this.disableProps(e,t)?"rgba(0,0,0,.25)":""
        }),
        this.callApiForGraph=(e,t)=>{
          let s=[];
          s=e?s.concat(e):this.state.groupingOptions;
          let r=this.props.eventDropVal,
          i=s.length?void 0:(null==r?void 0:r.max_group_number)||50;
          this.setState({
            max_group_number:i
          }),
          (this.props.isUserJourney||this.props.isEventAnalytics)&&(i=this.state.maxGroupNumber);
          let o=this.state._categorytitle;
          this.props.isEventAnalytics?this.props.handleChangeEvents(t||{
            key:this.state.keyByCategory,
            item:{
              props:{
                categorytitle:this.state._categorytitle,
                display:this.state.displayByCategory,
                max_group_number:this.state.maxGroupNumber,
                labels:this.state.isGroupOptionEnabled?s:[],
                property:this.state.attributeBySearchFilter
              }
            }
          },this.props._idByArr,this.props.indexByGrpby,!1,null,this.state.isGroupOptionEnabled?s:[]):this.props.handleChangeEvents(this.state.displayByCategory,this.props._idByArr,this.props.indexByGrpby,!1,this.props._operator,o,this.state.keyByCategory,this.state.isShowTopActivated,i,this.state.isGroupOptionEnabled?s:[]),
          this.setState({
            visible:!1
          })
        },
        this.handlePropertyInput=e=>{
          let t=e.target.value,
          s=this.state.dropdownOptions.filter(e=>e.display.toLowerCase().includes(t.toLowerCase())),
          r=this.state.availableOptions.filter(e=>{
            var s;
            return(null!==(s=R.oR[e])&&void 0!==s?s:e).toLowerCase().includes(t.toLowerCase())
          });
          ["All"].includes(this.state.selectedKey)||(s=s.filter(e=>e.categoryTitle===this.state.selectedKey)),
          this.setState({
            fetchedData:r,
            filteredDropdownOptions:s,
            inputValue:t
          })
        },
        this.handleInputChange_maxGroupNumber=async e=>{
          this.setState({
            max_group_number:e.target.value
          });
          let{
            parentType:t
          }=this.props.urlQ,
          s="statistics"===t?1001:501,
          r=""===e.target.value?"":+e.target.value;
          if("number"==typeof r&&(r<=0||r>=s)){
            v.ZP.info("Input must be greater than 0 and less than ".concat(s));
            return
          }
          let i=D()(this.props.group_list);
          r=r||void 0,
          !this.props.isUserJourney&&void 0!==this.props.indexByGrpby&&this.props.indexByGrpby>-1&&i[this.props.indexByGrpby]&&(i[this.props.indexByGrpby].max_group_number=r,"usersAnalytics"===this.props.urlQ.parentType?await this.props.setGroupList(i):await this.props.handleValuesByName({
            dropName:"group_list",
            data:i
          })),
          this.setState({
            maxGroupNumber:r,
            visible_maxGroupNumber:!1
          })
        },
        this.maintainDefaultSelect=()=>{
          let e=this.props.eventDropVal,
          t=null==e?void 0:e.attribute,
          s=t;
          if("userpropertyvalueofgrp"===t&&(s="user_custom_property"),"userfirstutmpropertyvalueofgrp"===t&&(s="user_first_utm"),"eventpropertyvalueofgrp"===t&&(s="event_custom_property"),"utmpropertyvalueofgrp"===t&&(s="utm"),this.props.isRevamped&&t){
            if("event_custom_property"===t||"user_custom_property"===t||"user_first_utm"===t||"utm"===t){
              var r;
              this.setState({
                keyByCategory:e.json_field[0],
                showRightSideSetting:!0,
                attributeBySearchFilter:s,
                isGrpingPropertyValue:!0,
                groupingOptions:(null===(r=e.labels)||void 0===r?void 0:r.length)?e.labels:[]
              })
            }
            else if(this.state.dropdownOptions&&this.state.dropdownOptions.length){
              let s=O()(this.state.dropdownOptions,{
                attribute:t
              }),
              r=this.state.dropdownOptions[s];
              this.setState({
                keyByCategory:t,
                _categorytitle:s>-1&&r.categoryTitle,
                displayByCategory:s>-1&&r.display,
                showRightSideSetting:!(s>-1)||"Date"!==r.categoryTitle,
                attributeBySearchFilter:J[t],
                groupingOptions:e.labels||[]
              }),
              this.maxGrpNumByAttr()
            }
          }
        },
        this.handleGroupingOptions=e=>{
          let t=this.state.groupingOptions.includes(e)?this.state.groupingOptions.filter(t=>t!==e):[...this.state.groupingOptions,e];
          this.setState({
            groupingOptions:t
          })
        },
        this.handleFilterSearch=async e=>{
          let t=this.state.attributeBySearchFilter;
          "userpropertyvalueofgrp"===t&&(t="user_custom_property"),
          "userfirstutmpropertyvalueofgrp"===t&&(t="user_first_utm"),
          "eventpropertyvalueofgrp"===t&&(t="event_custom_property"),
          "utmpropertyvalueofgrp"===t&&(t="utm");
          let s={
            search:e.target.value,
            attribute:t,
            filter:[],
            dropdownLimit:501,
            property_name:this.state.isGrpingPropertyValue?this.state.keyByCategory:void 0,
            date_range:this.props.dateSegment
          };
          this.setState({
            loaderByFilter:!0
          }),
          await this.callSearchAttributeApi({
            filterData:s,
            attribute:t
          }),
          this.setState({
            loaderByFilter:!1
          })
        },
        this.menu=()=>{
          var e,
          t,
          s,
          i;
          let o=this,
          {
            options:p,
            eventDropVal:n,
            isFunnel:u,
            isRevamped:y,
            id:m
          }=o.props,
          {
            selectedKey:v
          }=o.state,
          x="events_agg_dropdown"===m||"groupby_dropdown"===m,
          P="menu-item-column",
          j=[];
          (j=(p=D()(p))&&Object.keys(p))&&(j=["All",...j,,]),
          j=null==j?void 0:j.filter(e=>void 0!==e);
          let w=n&&n.attribute?"event_custom_property"===n.attribute||"user_custom_property"===n.attribute?n.json_field[0]:n.display:null,
          C="contains"!==o.props.operatorValue&&"does not contain"!==o.props.operatorValue?!o.state.eventProperty_Ldr&&!o.state.loader&&o.state.fetchedData&&(A()(o.state.fetchedData)?"All"===v||o.state.fetchedData.length?"All"!==v&&(0,r.jsx)(g.default.Item,{
            disabled:!0,
            children:"No property found"
          }):(0,r.jsx)(g.default.Item,{
            disabled:!0,
            className:"extra-features",
            children:(0,r.jsxs)("em",{
              children:[(0,r.jsx)(c.Z,{}),"Property not found"]
            })
          }):o.state.fetchedData.length<500?T()(o.state.ffData?[...o.state.ffData]:[...o.state.fetchedData]).map(e=>{
            var t,
            s;
            let i="uxcamuserid"===o.props.attribute?null!==(t=null==e?void 0:e.name)&&void 0!==t?t:e:null!==(s=R.oR[e])&&void 0!==s?s:e;
            i="User"!==v&&"All"!==v||o.props.isEventAnalytics?(0,r.jsx)(r.Fragment,{
              children:i
            }):(0,r.jsx)("em",{
              children:i
            });
            let a="uxcamuserid"===o.props.attribute&&e.uxcamuserid?e.uxcamuserid.toString():e;
            return(0,r.jsx)(g.default.Item,{
              onMouseEnter:e=>{
                x&&o.props.isImprovedAggregation&&o.props.handleHoverPropertyValue(e.key)
              },
              onMouseLeave:e=>x&&o.props.isImprovedAggregation&&o.props.handleHoverPropertyValue(null),
              style:x?o.dStyle(e,!0):null,
              disabled:!!x&&o.disableProps(e,!0),
              value:a,
              property:y?o.props.isEventAnalytics?"event_custom_property":"user_custom_property":"event_custom_property",
              className:e===o.state.keyByCategory?"selected":"",
              children:i
            },a)
          }):500===o.state.fetchedData.length&&(0,r.jsxs)(g.default.Item,{
            disabled:!0,
            className:"item-seemore",
            children:[(0,r.jsx)(d.Z,{}),"See more options by filtering."]
          },"more-option")):null,
          N="contains"!==o.props.operatorValue&&"does not contain"!==o.props.operatorValue?!o.state.userProperty_Ldr&&!o.state.userPropertyLoader&&o.state.userPropertyFetchedData&&(A()(o.state.userPropertyFetchedData)?"All"===v||o.state.userPropertyFetchedData.length?"All"!==v&&(0,r.jsx)(g.default.Item,{
            disabled:!0,
            children:"No property found!"
          }):(0,r.jsx)(g.default.Item,{
            disabled:!0,
            className:"extra-features",
            children:(0,r.jsxs)("em",{
              children:[(0,r.jsx)(c.Z,{}),"Property not found"]
            })
          }):o.state.userPropertyFetchedData.length<500?T()(o.state.userPropertyFFData?[...o.state.userPropertyFFData]:[...o.state.userPropertyFetchedData]).map(e=>{
            var t,
            s;
            let i="uxcamuserid"===o.props.attribute&&e.uxcamuserid?e.uxcamuserid.toString():e,
            a="uxcamuserid"===o.props.attribute?null!==(t=null==e?void 0:e.name)&&void 0!==t?t:e:null!==(s=R.oR[e])&&void 0!==s?s:e;
            return(0,r.jsx)(g.default.Item,{
              style:o.dStyle(e,!0),
              disabled:o.disableProps(e,!0),
              value:i,
              property:"user_custom_property",
              className:e===o.state.keyByCategory?"selected":"",
              children:a
            },i)
          }):500===o.state.userPropertyFetchedData.length&&(0,r.jsxs)(g.default.Item,{
            disabled:!0,
            className:"item-seemore",
            children:[(0,r.jsx)(d.Z,{}),"See more options by filtering."]
          },"more-option")):null,
          O=e=>(e||o.state.eventProperty_Ldr||o.state.userProperty_Ldr)&&(0,r.jsx)(g.default.Item,{
            disabled:!0,
            className:"extra-features",
            children:(0,r.jsx)(_.Z,{})
          }),
          F=(e,t)=>e&&t.length>0&&(0,r.jsx)(g.default.Item,{
            disabled:!0,
            className:"extra-features",
            children:(0,r.jsxs)("em",{
              children:[(0,r.jsx)(d.Z,{})," ",'To select "'.concat(t,'", hit enter.')]
            })
          }),
          I=(0,r.jsx)(g.default.Item,{
            disabled:!0,
            children:" No matching filter "
          }),
          k=["All","User"].includes(v),
          B=e=>"Date"===e?"ranges":["Registration","Event property","Session activity","Custom event properties","Custom user properties","Initial landing UTM"].includes(e)?"":"properties";
          return(0,r.jsxs)(g.default,{
            className:l()({
              "category-event-with-property":"event_custom_property"===this.props.aggregationEventId
            }),
            selectedKeys:!y&&[w],
            onClick:async e=>{
              (null==e?void 0:e.domEvent)?e.domEvent.persist():(null==e?void 0:e.persist)&&(null==e||e.persist());
              let t=this.props.isRevamped,
              s="events_agg_dropdown"===this.props.id||"groupby_dropdown"===this.props.id;
              if(void 0!==e.key){
                if(t){
                  if("true"===e.item.props.ismainmenu)e.key!==this.state.selectedKey&&this.setState({
                    filteredDropdownOptions:this.state.dropdownOptions,
                    inputValue:"",
                    fetchedData:this.state.availableOptions,
                    _inputValueToDropdownOptions:"",
                    userPropertyFetchedData:this.state.userPropertyAvailableOptions
                  }),
                  this.setState({
                    selectedKey:e.key
                  });
                  else if("show-top"!==e.key){
                    let t=e.item.props.property,
                    s=J["user_custom_property"===t?"userpropertyvalueofgrp":"event_custom_property"===t?"eventpropertyvalueofgrp":"utm"===t?"userfirstutmpropertyvalueofgrp":"user_first_utm"===t?"utmpropertyvalueofgrp":e.key];
                    await this.setState({
                      keyByCategory:e.key,
                      displayByCategory:e.item.props.display,
                      _categorytitle:e.item.props.categorytitle,
                      attributeBySearchFilter:s,
                      groupingOptions:[],
                      loaderByFilter:!0,
                      _inputValueToGroupingOptions:"",
                      isGroupOptionEnabled:!1,
                      isGrpingPropertyValue:"user_custom_property"===t||"event_custom_property"===t||"user_first_utm"===t,
                      groupingProperty:t
                    }),
                    this.callApiForGraph(null,e),
                    this.setState({
                      loaderByFilter:!1
                    })
                  }
                  return
                }
                this.props.isImprovedAggregation&&(this.props.setDropdownVisible(!1),this.props.handleHoverValue&&this.props.handleHoverValue(!1),this.props.setHoveredValue(null)),
                "input-field"!==e.key&&(s?this.props.handleChangeEvents(e,this.props._idByArr,this.props.indexByGrpby,null,null,this.props._operator):this.handleSearchProps(e,!0),this.setValueByKey("visible",!1))
              }
            },
            children:[p&&!y&&("events_agg_dropdown"===o.props.id?(0,r.jsx)(g.default.ItemGroup,{
              className:P,
              children:p.map(e=>(0,r.jsxs)(g.default.Item,{
                value:e.attribute,
                children:[e.display,e.tooltip&&(0,r.jsx)(f.Z,{
                  title:e.tooltip,
                  children:(0,r.jsx)(d.Z,{})
                })]
              },e.display))
            }):"groupby_dropdown"===o.props.id&&(0,r.jsx)(g.default.ItemGroup,{
              className:"".concat(P," menu-initial"),
              children:S()(p,function(e,t,s){
                return"Top"===t?e.map(e=>(0,r.jsxs)(g.default.Item,{
                  style:o.dStyle(e.display),
                  disabled:o.disableProps(e.display),
                  value:e.attribute,
                  categorytitle:"Top",
                  children:[e.display," ",e.tooltip&&(0,r.jsx)(f.Z,{
                    title:e.tooltip,
                    children:(0,r.jsx)(d.Z,{})
                  })]
                },e.display)):"Custom event properties"!==t&&(0,r.jsx)(g.default.ItemGroup,{
                  title:(0,r.jsx)("div",{
                    children:(0,r.jsx)("h4",{
                      children:(0,r.jsx)("span",{
                        children:t
                      })
                    })
                  }),
                  children:e.filter(e=>"property"!==e.attribute).map(e=>{
                    let s=(0,r.jsxs)("span",{
                      children:[e.display," ",e.tooltip&&(0,r.jsx)(f.Z,{
                        title:e.tooltip,
                        children:(0,r.jsx)(d.Z,{})
                      })]
                    });
                    return(0,r.jsx)(g.default.Item,{
                      style:o.dStyle(e.display),
                      disabled:o.disableProps(e.display),
                      value:e.attribute,
                      categorytitle:t,
                      children:s
                    },e.display)
                  })
                },t)
              })
            })),x&&!y&&(0,r.jsxs)(g.default.ItemGroup,{
              title:(0,r.jsxs)("div",{
                children:[o.props.isImprovedAggregation?null:(0,r.jsxs)("h4",{
                  children:[this.props.leftPropertyLabel||"Custom event properties"," ",(0,r.jsx)(f.Z,{
                    title:this.props.leftPropertyLabel?K:W,
                    children:(0,r.jsx)(d.Z,{
                      style:{
                        paddingLeft:3
                      }
                    })
                  })]
                }),(0,r.jsxs)("div",{
                  className:"debounce-input-menu-item",
                  children:[(0,r.jsx)(h.Z,{}),(0,r.jsx)(a.DebounceInput,{
                    autoFocus:o.props.isImprovedAggregation||!1,
                    debounceTimeout:500,
                    placeholder:"Search property",
                    value:o.state.propertyName,
                    onChange:async e=>o.handleSearchInputProps(e,!0),
                    onKeyDown:e=>{
                      "Enter"===e.key&&o.props.handleChangeEvents(e.target.value,o.props._idByArr,o.props.indexByGrpby,!0,o.props._operator)
                    },
                    className:"ant-input debounce-input"
                  })]
                })]
              }),
              className:"".concat(P," debounce-input-group"),
              children:[C,O(o.state.loader),F(o.state.loader,o.state.inputValue)]
            }),y&&(0,r.jsx)(U,{
              dropdownKeys:j,
              withPropertiesOrRanges:B,
              selectedKey:v
            }),y&&(0,r.jsx)(g.default.ItemGroup,{
              title:null,
              className:"menu-second-level",
              children:(0,r.jsxs)(g.default.ItemGroup,{
                className:"".concat(P," submenu-search"),
                title:(0,r.jsxs)("div",{
                  className:"debounce-input-menu-item",
                  children:[(0,r.jsx)(h.Z,{}),!o.props.isUserJourney&&(!o.props.isEventAnalytics&&"User"===v||"All"===v||["Custom user properties","Custom event properties"].includes(v))?(0,r.jsxs)(r.Fragment,{
                    children:["User"===v&&(0,r.jsx)("h4",{
                      className:"user-properties-title",
                      children:(0,r.jsx)("span",{
                        children:"".concat(v," properties")
                      })
                    }),(0,r.jsx)(a.DebounceInput,{
                      autoFocus:!0,
                      debounceTimeout:500,
                      placeholder:"Search ".concat(v.toLowerCase()," properties"),
                      value:o.state._inputValueToDropdownOptions,
                      onChange:async e=>{
                        o.setState({
                          _inputValueToDropdownOptions:e.target.value
                        }),
                        ["Custom event properties","All"].includes(v)&&o.handleSearchInputProps(e,!0),
                        ["Custom user properties","All"].includes(v)&&o.handleUserPropertyInputProps(e,!0),
                        ["Custom user properties","Custom event properties"].includes(v)||o.handlePropertyInput(e)
                      },
                      onKeyDown:e=>{
                        "Enter"===e.key&&(!this.props.isEventAnalytics||["Custom user properties","Custom event properties"].includes(v))&&this.props.handleChangeEvents(e.target.value,this.props._idByArr,this.props.indexByGrpby,!0,this.props.isEventAnalytics?!!["Custom user properties"].includes(v):this.props._operator,this.state._categorytitle,this.state.keyByCategory,this.state.isShowTopActivated,this.state.maxGroupNumber)
                      },
                      className:"ant-input debounce-input"
                    })]
                  }):(0,r.jsxs)(r.Fragment,{
                    children:["All"!==v&&(0,r.jsx)("h4",{
                      children:(0,r.jsx)("span",{
                        children:"".concat(v," ").concat(B(v))
                      })
                    }),(0,r.jsx)(a.DebounceInput,{
                      debounceTimeout:500,
                      autoFocus:!0,
                      placeholder:"Search ".concat(v.toLowerCase()," ").concat(B(v)),
                      className:"ant-input debounce-input",
                      onChange:e=>(o.setState({
                        _inputValueToDropdownOptions:e.target.value
                      }),o.handlePropertyInput(e)),
                      value:o.state.inputValue
                    })]
                  })]
                }),
                children:[S()(o.state.filteredDropdownOptions,(e,t)=>{
                  let{
                    table:s,
                    attribute:i,
                    period:a,
                    tooltip:p,
                    display:n,
                    categoryTitle:l
                  }=e;
                  if(v===l)return(0,r.jsx)(g.default.Item,{
                    categorytitle:l,
                    table:s,
                    period:a,
                    display:n,
                    style:x?o.dStyle(n):null,
                    disabled:!!x&&o.disableProps(n),
                    className:i===this.state.keyByCategory?"selected":"",
                    children:(0,r.jsx)(f.Z,{
                      title:p,
                      children:n
                    })
                  },i)
                }),o.props.isEventAnalytics&&["Custom event properties"].includes(v)&&C,o.props.isEventAnalytics&&["Custom user properties"].includes(v)&&N,"All"===v&&(o.state._inputValueToDropdownOptions.trim().length?S()(this.state.filteredDropdownOptions,(e,t)=>{
                  let{
                    table:s,
                    attribute:i,
                    period:a,
                    tooltip:p,
                    display:n,
                    categoryTitle:l
                  }=e;
                  return(0,r.jsx)(g.default.Item,{
                    categorytitle:l,
                    table:s,
                    period:a,
                    display:n,
                    style:x?o.dStyle(n):null,
                    disabled:!!x&&o.disableProps(n),
                    className:i===this.state.keyByCategory?"selected":"",
                    children:(0,r.jsx)(f.Z,{
                      title:p,
                      children:n
                    })
                  },i)
                }):S()(p,(e,t)=>{
                  let s=["Custom event properties","Custom user properties"].includes(t);
                  return(0,r.jsxs)(g.default.ItemGroup,{
                    title:(0,r.jsx)("div",{
                      children:(0,r.jsx)("h4",{
                        children:(0,r.jsxs)("span",{
                          children:[t," ",B(t)]
                        })
                      })
                    }),
                    children:[!s&&S()(e,e=>{
                      let{
                        table:s,
                        attribute:i,
                        period:a,
                        tooltip:p,
                        display:n
                      }=e;
                      return(0,r.jsx)(g.default.Item,{
                        categorytitle:t,
                        table:s,
                        period:a,
                        display:n,
                        style:x?o.dStyle(n):null,
                        disabled:!!x&&o.disableProps(n),
                        className:i===this.state.keyByCategory?"selected":"",
                        children:(0,r.jsx)(f.Z,{
                          title:p,
                          children:n
                        })
                      },i)
                    }),[{
                      title:"Custom event properties",
                      component:C
                    },{
                      title:"Custom user properties",
                      component:N
                    }].map(e=>{
                      let{
                        title:s,
                        component:r
                      }=e;
                      return t===s&&r
                    })]
                  },t)
                })),!!(o.props.isEventAnalytics&&o.state._inputValueToDropdownOptions.trim().length&&"All"===v)&&C,!!(o.props.isEventAnalytics&&o.state._inputValueToDropdownOptions.trim().length&&"All"===v)&&N,!!(!o.props.isEventAnalytics&&!o.props.isUserJourney&&["Custom user properties","All","User"].includes(v))&&C,!!((o.props.isEventAnalytics?!["All","Custom user properties","Custom event properties"].includes(v):!k)&&!o.state.filteredDropdownOptions.length)&&I,!!((o.props.isEventAnalytics?"All"===v:k)&&!o.state.loader&&(!o.props.isEventAnalytics||!(null===(e=o.state.userPropertyFetchedData)||void 0===e?void 0:e.length))&&!(null===(t=o.state.filteredDropdownOptions)||void 0===t?void 0:t.length)&&!o.state.fetchedData.length)&&I,!!(!o.props.isUserJourney&&["All","User","Custom user properties","Custom event properties"].includes(v))&&O(o.props.loader_hoc_userProperty||o.state.loader),"All"!==v&&O(o.state.userPropertyLoader)]
              })
            }),o.state.showRightSideSetting&&y&&!u&&(0,r.jsxs)(g.default.ItemGroup,{
              className:"".concat(P," menu-filter apply-grouping"),
              children:[(0,r.jsx)(g.default.Item,{
                children:(0,r.jsx)("h5",{
                  children:(0,r.jsx)("span",{
                    children:null!==(i=null!==(s=o.state.displayByCategory)&&void 0!==s?s:R.oR[o.state.keyByCategory])&&void 0!==i?i:o.state.keyByCategory
                  })
                })
              },"show-top"),(0,r.jsx)(b.default,{
                checked:o.state.isShowTopActivated,
                onClick:e=>this.setState({
                  isShowTopActivated:e.target.checked,
                  isGroupOptionEnabled:!1,
                  groupingOptions:[]
                }),
                children:"Show top"
              }),(0,r.jsx)(a.DebounceInput,{
                disabled:o.state.groupingOptions.length||!o.state.isShowTopActivated,
                autoFocus:!0,
                debounceTimeout:500,
                value:this.state.max_group_number,
                className:"ant-input debounce-input show-top-input",
                onKeyDown:e=>13===e.keyCode&&o.handleInputChange_maxGroupNumber(e),
                onChange:e=>o.handleInputChange_maxGroupNumber(e),
                max:500,
                min:1,
                type:"number"
              }),(0,r.jsx)("br",{}),Q.includes(o.state.attributeBySearchFilter)&&(0,r.jsx)(b.default,{
                checked:o.state.isGroupOptionEnabled,
                onChange:async e=>{
                  let t;
                  let{
                    eventDropVal:s
                  }=o.props;
                  if(o.setState({
                    isGroupOptionEnabled:e.target.checked,
                    isShowTopActivated:!1
                  }),e.target.checked){
                    o.setState({
                      loaderByFilter:!0
                    });
                    let e=J[s.attribute];
                    t=o.state.isGrpingPropertyValue?{
                      search:o.state._inputValueToGroupingOptions,
                      attribute:e,
                      filter:[],
                      property_name:o.state.keyByCategory,
                      dropdownLimit:501,
                      date_range:o.props.dateSegment
                    }:{
                      search:o.state._inputValueToGroupingOptions,
                      attribute:e,
                      filter:[],
                      dropdownLimit:501,
                      date_range:o.props.dateSegment
                    },
                    Q.includes(e)&&await o.callSearchAttributeApi({
                      filterData:t,
                      attribute:e
                    }),
                    o.setState({
                      loaderByFilter:!1
                    })
                  }
                  else o.setState({
                    groupingOptions:[]
                  })
                },
                children:"Select group names"
              }),o.state.isGroupOptionEnabled&&Q.includes(o.state.attributeBySearchFilter)&&!["session_user_experience"].includes(o.state.attributeBySearchFilter)&&(0,r.jsxs)("div",{
                className:"debounce-input-menu-item",
                children:[(0,r.jsx)(h.Z,{}),(0,r.jsx)(a.DebounceInput,{
                  debounceTimeout:500,
                  placeholder:"Search property",
                  onChange:e=>(o.setState({
                    _inputValueToGroupingOptions:e.target.value
                  }),o.handleFilterSearch(e)),
                  onKeyDown:e=>"Enter"===e.key&&o.callApiForGraph(e.target.value),
                  value:o.state._inputValueToGroupingOptions,
                  className:"ant-input debounce-input"
                })]
              }),o.state.isGroupOptionEnabled&&(0,r.jsx)(_.Z,{
                spinning:o.state.loaderByFilter||!1,
                children:(0,r.jsx)("ul",{
                  children:["session_user_experience"].includes(o.state.attributeBySearchFilter)?[">100 sessions","51th-100th session","11th-50th session","6th-10th session","2nd-5th session","1st session"].reverse().map(e=>(0,r.jsx)("li",{
                    children:(0,r.jsx)(b.default,{
                      checked:o.state.groupingOptions.includes(e),
                      onChange:()=>o.handleGroupingOptions(e),
                      children:(0,r.jsx)(f.Z,{
                        title:(null==e?void 0:e.length)>18?e:void 0,
                        children:(0,r.jsx)("span",{
                          className:"checkbox-label",
                          children:e
                        })
                      })
                    },e)
                  },e)):[...o.state.searchedData].length?o.state.searchedData.map(e=>{
                    let t=o.props.screenRenamedList[e]||e;
                    return(0,r.jsx)("li",{
                      children:(0,r.jsx)(b.default,{
                        checked:o.state.groupingOptions.includes(e),
                        onChange:()=>o.handleGroupingOptions(e),
                        children:(0,r.jsx)(f.Z,{
                          title:(null==t?void 0:t.length)>18?t:void 0,
                          placement:"topLeft",
                          children:(0,r.jsx)("span",{
                            className:"checkbox-label",
                            children:t
                          })
                        })
                      },e)
                    },e)
                  }):o.state.loaderByFilter?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("span",{
                    disabled:!0,
                    children:" No matching group name "
                  })
                })
              }),o.state.keyByCategory&&(0,r.jsx)("div",{
                className:"button-bar",
                children:(0,r.jsx)(M,{
                  type:"primary",
                  onClick:e=>o.callApiForGraph(),
                  children:"Apply"
                })
              },"button-bar")]
            }),x&&o.props.eventProperty&&o.props.userPropertyFromStats&&(0,r.jsxs)(g.default.ItemGroup,{
              title:(0,r.jsxs)("div",{
                children:[(0,r.jsxs)("h4",{
                  children:["Custom user properties",(0,r.jsx)(f.Z,{
                    title:K,
                    children:(0,r.jsx)(d.Z,{
                      style:{
                        paddingLeft:3
                      }
                    })
                  })]
                }),(0,r.jsxs)("div",{
                  className:"debounce-input-menu-item",
                  children:[(0,r.jsx)(h.Z,{}),(0,r.jsx)(a.DebounceInput,{
                    debounceTimeout:500,
                    placeholder:"Search property",
                    value:o.state.userPropertyName,
                    onChange:async e=>{
                      o.handleUserPropertyInputProps(e,!0)
                    },
                    onKeyDown:e=>{
                      "Enter"===e.key&&o.props.handleChangeEvents(e.target.value,o.props._idByArr,o.props.indexByGrpby,!0,o.props._operator)
                    },
                    className:"ant-input debounce-input"
                  })]
                })]
              }),
              className:"".concat(P," debounce-input-group"),
              children:[N,O(o.state.userPropertyLoader),F(o.state.userPropertyLoader,o.state.userPropertyInputValue)]
            },"userproperty"),!x&&C,!x&&O(o.state.loader),!x&&F(o.state.loader,o.state.inputValue)]
          })
        },
        this.getPropertyName=async(e,t)=>{
          let s=await this.segmentOpt(e);
          s=t&&j()(s)&&s.length?s:this.props.segment;
          let r=j()(s)?s&&s[e.index]:s,
          i=t||!this.state.propertyName?r.propertyName?r.propertyName:r.property&&r.property.name?r.property.name:"":this.state.propertyName;
          return this.setState({
            propertyName:i
          }),
          i
        },
        this.setValueByKey=(e,t)=>{
          this.setState({
            [e]:t
          })
        },
        this.handleEventProperty_events=async e=>{
          let{
            fetchProperty:t
          }=e;
          "object"==typeof t.event_custom_property.data&&t.event_custom_property.data&&t.event_custom_property.data.length?await this.setState({
            fetchedData:t.event_custom_property.data,
            availableOptions:t.event_custom_property.data,
            searchedStrings:{
              "":!0
            },
            isProperty_null:!1
          }):this.setState({
            fetchedData:[],
            availableOptions:[],
            searchedStrings:{
              "":!1
            },
            isProperty_null:!0
          })
        },
        this.handleUserProperty_events=async e=>{
          let{
            fetchProperty:t
          }=e;
          "object"==typeof t.user_custom_property.data&&t.user_custom_property.data&&t.user_custom_property.data.length?this.setState({
            userPropertyFetchedData:t.user_custom_property.data,
            userPropertyAvailableOptions:t.user_custom_property.data,
            userPropertySearchedStrings:{
              "":!0
            },
            isUserProperty_null:!1
          }):this.setState({
            userPropertyFetchedData:[],
            userPropertyAvailableOptions:[],
            userPropertySearchedStrings:{
              "":!1
            },
            isUserProperty_null:!0
          })
        },
        this.handleUserProperty_session=async e=>{
          var t;
          let{
            fetchProperty:s
          }=e;
          "object"==typeof s.user_custom_property.data&&(null===(t=s.user_custom_property.data)||void 0===t?void 0:t.length)?this.setState({
            fetchedData:s.user_custom_property.data,
            availableOptions:s.user_custom_property.data,
            searchedStrings:{
              "":!0
            },
            isProperty_null:!1
          }):this.setState({
            fetchedData:[],
            availableOptions:[],
            searchedStrings:{
              "":!1
            },
            isProperty_null:!0
          })
        },
        this.handleProperty=async()=>{
          this.props.eventProperty&&(await this.handleEventProperty_events(this.props),this.handleUserProperty_events(this.props)),
          this.props.userProperty&&this.handleUserProperty_session(this.props)
        },
        this.displayTextByIndex=(e,t)=>e&&(0,r.jsxs)(r.Fragment,{
          children:[this.props.isRevamped?"":this.props.indexByGrpby>0?"and":"grouped by"," ",t&&!this.props.isEventAnalytics?(0,r.jsx)("em",{
            children:e
          }):e]
        }),
        this.dynamicOptions=e=>{
          if(this.props.isRevamped&&e){
            let t=D()({
              ...e
            }),
            s=D()({
              ...e
            }),
            r=(s=I()(t,(e,t)=>!["Custom event properties","Custom user properties"].includes(t)&&(null==e?void 0:e.map(e=>(e.categoryTitle=t,e))))).Date;
            delete s.Date;
            let i=B()(s,function(e,t){
              return e.concat(t)
            },[]);
            i=i.reverse(),
            i=j()(r)?[...r,...i]:i,
            this.setState({
              dropdownOptions:i,
              filteredDropdownOptions:i
            })
          }
        },
        this.maintainDefaultSelection=e=>{
          let{
            isRevamped:t,
            eventDropVal:s
          }=e;
          t&&s&&("event_custom_property"===s.attribute||"user_custom_property"===s.attribute||"utm"===s.attribute?this.setState({
            keyByCategory:s.json_field[0]
          }):this.setState({
            keyByCategory:s.attribute
          }))
        },
        this.maxGrpNumByAttr=()=>{
          if(this.props.isUserJourney){
            var e;
            this.setState({
              maxGroupNumber:(null===(e=this.props.eventDropVal)||void 0===e?void 0:e.max_group_number)||50
            })
          }
        },
        this.componentDidMount=async()=>{
          if(this._isMounted=!0,this._isMounted){
            let e="events_agg_dropdown"===this.props.id||"groupby_dropdown"===this.props.id;
            e||this.getPropertyName(this.props),
            e&&!this.props.isUserJourney&&this.handleProperty(),
            this.dynamicOptions(this.props.options),
            this.maintainDefaultSelection(this.props)
          }
        },
        this.UNSAFE_componentWillReceiveProps=async e=>{
          let t="events_agg_dropdown"===this.props.id||"groupby_dropdown"===this.props.id,
          {
            sessionSegment:s,
            userSegment:r,
            eventSegment:i,
            issueSegment:o,
            screenFlowSegment:a
          }=e;
          !this._isMounted||G()(s,this.props.sessionSegment)&&G()(r,this.props.userSegment)&&G()(o,this.props.issueSegment)&&G()(a,this.props.screenFlowSegment)&&G()(i,this.props.eventSegment)||t||this.getPropertyName(e,!0),
          G()(this.props.options,e.options)||this.dynamicOptions(e.options),
          e.commonReducer.eventProperty_Ldr!==this.props.commonReducer.eventProperty_Ldr&&e.commonReducer.eventProperty_Ldr?this.setState({
            eventProperty_Ldr:!0
          }):this.setState({
            eventProperty_Ldr:!1
          }),
          e.commonReducer.userProperty_Ldr!==this.props.commonReducer.userProperty_Ldr&&e.commonReducer.userProperty_Ldr?this.setState({
            userProperty_Ldr:!0
          }):this.setState({
            userProperty_Ldr:!1
          }),
          this.props.eventProperty&&(G()(e.fetchProperty.event_custom_property,this.props.fetchProperty.event_custom_property)||this.handleEventProperty_events(e)),
          G()(e.fetchProperty.user_custom_property,this.props.fetchProperty.user_custom_property)||(this.props.userProperty?this.handleUserProperty_session(e):this.handleUserProperty_events(e)),
          G()(this.props.eventDropVal,e.eventDropVal)||this.maintainDefaultSelection(e),
          G()(this.props.selectedCategory,e.selectedCategory)&&G()(this.props.urlQ.appId,e.urlQ.appId)||this.maxGrpNumByAttr(),
          G()(this.props.urlQ.appId,e.urlQ.appId)||this.setState({
            isGroupOptionEnabled:!1,
            isShowTopActivated:!0
          })
        },
        this.componentWillUnmount=()=>{
          this._isMounted=!1
        }
      }
    }
    var H=(0,o.$j)(e=>({
      sessionSegment:[...e.appFilter.session.segment],
      urlQ:e.urlReducer,
      userSegment:[...e.appFilter.user.segment],
      eventSegment:[...e.appFilter.event.segment],
      issueSegment:[...e.appFilter.issue.segment],
      screenFlowSegment:[...e.appFilter.screenFlow.segment],
      dropValues:e.sessionStatisticsReducer.dropValues,
      fetchProperty:{
        ...e.appFilter.fetchProperty
      },
      eventPropertyFilter:e.statisticsReducer.eventPropertyFilter,
      commonReducer:e.commonReducer,
      screenRenamedList:e.screenRenamedList,
      dateSegment:e.appFilter.dateSegment
    }),{
      getSearchAttrRemoteData:E.f5,
      setGroupList:Z.PZ
    },null)(X)
  },
  19228:function(e,t,s){
    var r=s(85893);
    s(67294);
    var i=s(84620),
    o=s(74936),
    a=s(94184),
    p=s.n(a);
    t.Z=e=>{
      let{
        children:t,
        label:s,
        _idByArr:a,
        filterArr:n,
        _grpByArr:l,
        className:u="",
        isEventProperty:d,
        _index:c,
        isFunnel:h,
        isRevamped:y,
        dataIntercomTarget:m
      }=e;
      return(0,r.jsxs)("div",{
        "data-intercom-target":m,
        className:p()("filter-item",{
          "button-group":d,
          "groupby-item":"grp-array"===a||y
        }),
        children:[(0,r.jsxs)("div",{
          className:"".concat(u," combo-box"),
          children:[s&&y&&(0,r.jsx)("label",{
            children:s
          }),t]
        }),((null==l?void 0:l.length)===2||h)&&(0,r.jsx)(o.Z,{
          type:"close",
          onClick:()=>n(c),
          icon:(0,r.jsx)(i.Z,{}),
          shape:"circle",
          className:p()({
            "funnel-groupby-btn-close":h
          })
        })]
      })
    }
  },
  54973:function(e,t,s){
    s.d(t,{
      Z:function(){
        return U
      }
    });
    var r=s(85893),
    i=s(67294),
    o=s(14416),
    a=s(66678),
    p=s.n(a),
    n=s(41609),
    l=s.n(n),
    u=s(18446),
    d=s.n(u),
    c=s(7436),
    h=s.n(c),
    y=s(47037),
    m=s.n(y),
    v=s(13218),
    g=s.n(v),
    _=s(18879),
    f=s(55137),
    b=s(71768),
    x=s(49588),
    S=s(11163),
    P=s.n(S),
    j=s(73495),
    w=s(47639),
    D=s(30663),
    C=s(12616),
    A=s(46200),
    N=s(75708),
    O=s.n(N),
    F=s(78840),
    I=s.n(F),
    k=s(43864),
    B=s.n(k),
    V=s(42661),
    G=s(92046),
    L=s(23357),
    T=s(740);
    let E=["session_period_hour","event_period_hour"];
    s(58609)(I()),
    s(18393)(I()),
    s(9662)(I());
    var Z=(0,i.memo)(e=>{
      let{
        data:t,
        className:s,
        height:a,
        chartRef:p,
        dataIntercomTarget:n
      }=e,
      {
        sessionStatisticsReducer:{
          group_list:l=[]
        },
        statisticsReducer:{
          grpByVal:u=[]
        },
        urlReducer:d
      }=(0,o.v9)(e=>e),
      {
        parentType:c
      }=d,
      h=["sessionsList","aiSsessionsList"].includes(c)?l:u,
      y=(0,i.useMemo)(()=>["device_class","device_model"].includes(h[0].attribute),[h]),
      m=(0,i.useMemo)(()=>h[0].attribute,[h]),
      v={
        ...t,
        tooltip:{
          useHTML:!0,
          formatter(){
            let{
              point:{
                color:e,
                category:t,
                name:s,
                y:r
              },
              series:i
            }=this,
            {
              tooltipOptions:{
                valueDecimals:o=0
              }
            }=i,
            a=(0,V.Z)(t)?(0,_.fh)(t,"dddd, MMM D, YYYY"):s||"";
            return'<span class="tooltipHeader">'.concat(a,'</span>\n          <div class="tooltipPointWrapper">\n          <span class="tooltipLine"></span>\n          <span style="color: ').concat(e,'">●</span> ').concat((0,G.Zy)([i.name]),'\n          <span class="tooltipPoint">: ').concat((0,L.p)(r.toFixed(o)),"</span>")
          },
          style:{
            color:"#161E35"
          },
          backgroundColor:"#fff",
          borderRadius:5,
          borderWidth:1
        },
        legend:{
          ...t.legend,
          labelFormatter(){
            let{
              name:e
            }=this;
            return(0,G.Zy)(e)
          }
        },
        yAxis:{
          ...t.yAxis,
          lineColor:"#6d6875",
          lineWidth:2,
          tickColor:"#6d6875",
          tickWidth:2,
          gridLineColor:"#e5e5e5",
          gridLineWidth:"2",
          labels:{
            ...t.yAxis.labels,
            formatter(){
              let{
                value:e
              }=this;
              return"datetime"===t.yAxis.type?(0,_.fh)(e,"MMM D"):y?(0,G.Zy)(e):e
            }
          }
        },
        xAxis:{
          ...t.xAxis,
          labels:{
            ...t.xAxis.labels,
            formatter(){
              let{
                value:e
              }=this;
              return"datetime"===t.xAxis.type?(0,_.fh)(e,E.includes(m)?"MMM D, h a":"MMM D"):y?(0,G.Zy)(e):e
            }
          }
        },
        plotOptions:{
          series:{
            cursor:"pointer",
            point:{
              events:{
                click(e){
                  var t,
                  s;
                  let r;
                  let i=e.point.series.options.data[e.point.index];
                  if(Array.isArray(i)&&i.length>2){
                    let[,,e]=i;
                    r=e
                  }
                  else i.url?r=i.url:e.point.options&&e.point.options.url&&(r=e.point.options.url);
                  let o=e.point.name||(null===(t=e.point.options)||void 0===t?void 0:t.name),
                  a=null===(s=e.point.series)||void 0===s?void 0:s.name;
                  if(r&&!_.Xi.includes(o)&&!_.Xi.includes(a)&&e.point.y>0){
                    let e=T.Z.modifyUrl(r);
                    window.open(e,"_blank")
                  }
                }
              }
            }
          }
        },
        subtitle:{
          text:null
        }
      };
      return(0,i.useEffect)(()=>{
        I().Chart.prototype.addSeriesAsDrilldown||B()(I()),
        p.current.container.current.style.height=a,
        p.current.chart.reflow()
      },[p,t,a]),
      (0,r.jsx)("div",{
        className:s,
        id:"container",
        style:{
          width:"100%"
        },
        "data-intercom-target":n,
        children:(0,r.jsx)(O(),{
          highcharts:I(),
          ref:p,
          constructorType:"chart",
          options:v||[],
          containerProps:{
            style:{
              height:a
            }
          }
        })
      })
    });
    let R={
      avg:"averaged",
      min:"minimized",
      max:"maximized",
      sum:"summed"
    };
    var U=e=>{
      let t,
      {
        graphData:s,
        eventDropVal:i,
        height:a,
        box_key:n,
        chartRef:u,
        callGraphApi:c,
        callStatsBoxes:y
      }=e,
      v=(0,o.I0)(),
      {
        urlReducer:S,
        appFilter:N,
        sessionStatisticsReducer:O
      }=(0,o.v9)(e=>e),
      {
        group_list:F
      }=O,
      I=N.session.segment,
      {
        parentType:k,
        appId:B,
        sessionpage:V
      }=S,
      L=p()(s);
      if(i&&Object.keys(R).includes(i.operator)&&(t=(0,r.jsxs)("span",{
        style:{
          textAlign:"center"
        },
        children:["It seems like the event property ",i.display," cannot be"," ",R[i.operator]," in a meaningful way. ",(0,r.jsx)("br",{})," Only numerical properties can be ",R[i.operator]," but not strings."]
      })),null==L?void 0:L.success){
        var T,
        E,
        U,
        M;
        l()(L.data.plot.series),
        (null===(M=L.data)||void 0===M?void 0:null===(U=M.plot)||void 0===U?void 0:null===(E=U.plotOptions)||void 0===E?void 0:null===(T=E.series)||void 0===T?void 0:T.point)&&(L.data.plot.plotOptions.series.point.events.click=async function(){
          if(!_.Xi.includes(this.options.name)&&!_.Xi.includes(this.series.name)&&this.options.y>0){
            if("sessionStatistics"===k&&this.options.url_link.includes("sessions/list")||"aiSessionStatistics"===k&&this.options.url_link.includes("aisessions/list")){
              let r="aiSessionStatistics"===k?"aiSessionsList":"sessionsList",
              i=await v((0,C.Vs)(this.options.url_link));
              if("object"==typeof i){
                var e,
                t,
                s;
                if(!d()(i,I)&&i){
                  await v((0,f.Yb)(i,"session-filter"));
                  let e=h()(i,{
                    attribute:"event"
                  });
                  if(e>-1){
                    let t=i[e];
                    v((0,b.tQ)(t.value))
                  }
                  c(null,i),
                  y(i),
                  v((0,f.gW)(1,"session")),
                  v((0,x.r7)(r))
                }
                else v((0,x.r7)(r));
                let o="/integration?parentType=".concat(r,"&appId=").concat(B,"&type=session&sessionpage=").concat(V),
                a="/app/".concat(B,"/sessions/list/").concat(V||1,"?");
                a=i.length?(0,j.$)(a,i):a,
                v((0,w.X7)({
                  appId:B,
                  parentType:r,
                  type:"session",
                  url:a
                })),
                v((0,D.CW)(null,{
                  eventName:"open_list_from_chart",
                  track_type:"event",
                  eventProperty:{
                    chartType:(null==L?void 0:null===(s=L.data)||void 0===s?void 0:null===(t=s.plot)||void 0===t?void 0:null===(e=t.series[0])||void 0===e?void 0:e.type)||"bar",
                    grouping:F,
                    filters:(0,G.aZ)(I),
                    dateRange:null==N?void 0:N.dateSegment
                  }
                })),
                P().push(o,a,{
                  shallow:!0
                })
              }
            }
            else window.open(this.options.url_link),
            v((0,D.CW)(null,{
              eventName:"wa_plot_redirect_to_event_list",
              track_type:"event",
              eventProperty:{}
            }));
            v((0,w.hI)({
              action:"Clicked on graph section",
              info:{
                page:_.e5[k]
              }
            }))
          }
        })
      }
      let K=["ANR_rate","rage_rate","crash_rate"].includes(n),
      W={
        ANR_rate:"ui freezes",
        rage_rate:"rage taps",
        crash_rate:"crashes",
        screen_count:"screen visits",
        event_count:"events",
        total_engagement:"time in app"
      };
      return L?g()(L)?L.success?l()(L.data.plot.series)?(0,r.jsx)(A.Z,{
        displayIcon:!0,
        errorText:n?K?"All good! We found no ".concat(W[n]," for the applied filters."):"Sorry! We found no ".concat(W[n]," for the applied filters."):t||"Graph could not be created",
        isNoData:!0,
        imgSrc:K?"/static/icon-happy-no-data.svg":void 0
      }):(0,r.jsx)(Z,{
        dataIntercomTarget:"Graph",
        chartRef:u,
        data:L.data.plot||[],
        className:"graph-box-wrapper",
        id:"highChart-graph",
        height:a
      }):(0,r.jsx)(A.Z,{
        displayIcon:!0,
        errorText:_.CQ,
        isNoData:!0
      }):m()(L)&&(0,r.jsx)(A.Z,{
        displayIcon:!0,
        errorText:t||L,
        isNoData:!0
      }):(0,r.jsx)("div",{
        className:"graph-box-wrapper"
      })
    }
  }
}]);