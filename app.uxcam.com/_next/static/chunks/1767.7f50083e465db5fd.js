"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1767],{
  51767:function(e,t,a){
    a.r(t);
    var s=a(85893),
    r=a(67294),
    p=a(14416),
    i=a(39284),
    o=a(74936),
    n=a(83423),
    c=a(97600),
    d=a(80432),
    h=a(62610),
    l=a(47639),
    g=a(11163),
    u=a.n(g),
    m=a(8891),
    _=a.n(m),
    f=a(36005),
    y=a(30653);
    class b extends r.Component{
      onChange(e){
        this.setState({
          [e.target.name]:e.target.value
        })
      }
      render(){
        let{
          showCreateApp:e,
          cancelCreateApp:t
        }=this.props;
        return(0,s.jsxs)(i.default,{
          visible:e,
          title:null,
          className:"basic-info-modal",
          onCancel:t,
          width:"460px",
          centered:!0,
          footer:[(0,s.jsx)(o.Z,{
            type:"primary",
            onClick:this.createApp,
            style:{
              height:"35px",
              padding:"0 20px"
            },
            disabled:this.state.loading||this.state.appName.length<1,
            loading:this.state.loading,
            children:"OK"
          },"submit")],
          children:[(0,s.jsxs)("div",{
            style:{
              textAlign:"left"
            },
            children:[(0,s.jsx)("h2",{
              children:"What's the name of your app?"
            }),(0,s.jsx)(n.default,{
              size:"large",
              name:"appName",
              placeholder:"Enter your app name",
              style:{
                marginBottom:"15px"
              },
              value:this.state.appName,
              onChange:this.onChange,
              onKeyPress:this._handleKeyPress,
              autoFocus:!0
            }),(0,s.jsx)("div",{
              className:"create-org-notice",
              children:(0,s.jsx)(c.Z,{
                message:"This app will be part of organization - ".concat(this.props.orgName,". Managers will have access to by default and you can invite other members to join the app."),
                showIcon:!0
              })
            })]
          }),(0,s.jsx)("style",{
            children:"\n                .basic-info-modal h2{\n                  text-transform: none;\n                  font-size: 1.2rem;\n                  margin: 0 0 15px;\n                }\n                .basic-info-modal .ant-modal-footer{\n                    text-align: center;\n                    border: 0;\n                    padding: 0 24px 24px\n                }\n                .create-org-notice .ant-alert-info{\n                  border-color: #5D97FF;\n                  background-color: rgba(93, 151, 255, 0.1);\n                  color: #5D97FF;\n                  line-height: normal;\n                }\n                .create-org-notice .ant-alert-info .anticon{\n                  color: #5D97FF;\n                }\n            "
          })]
        })
      }
      constructor(e){
        super(e),
        this.cancel=()=>{
          this.props.cancelCreateApp(),
          this.setState({
            appName:""
          })
        },
        this.add=e=>{
          this.props.addNewApp&&this.props.addNewApp(e)
        },
        this.createApp=async()=>{
          if(!this.state.loading){
            this.setState({
              loading:!0
            });
            let e=this.props.orgId?this.props.orgId:1===this.props.data.length?this.props.data[0].orgId:this.props.urlQuery.org?this.props.urlQuery.org:1===this.props.userProfile.organization.length&&this.props.userProfile.organization[0].$oid;
            if(f.ZP.isEmpty(this.props.currentApp)){
              let t=await this.props.createApplication({
                name:this.state.appName,
                orgId:e,
                notifyEmail:!0
              });
              if(t.success&&1===this.props.data[0].apps.length){
                this.props.getAppDropdown(),
                u().push("/integration?appId=".concat(t.data.app._id,"&parentType=overview"),"/app/".concat(t.data.app._id,"/overview"));
                return
              }
              this.cancel(),
              this.setState({
                appName:""
              }),
              this.setState({
                loading:!1
              }),
              t.success?(await this.add(t.data.app),"sidebar"===this.props.pageCalled?this.props.urlQuery.setting?u().push("/setting?setting=app_setting&org=".concat(this.props.currentApp.orgId,"&app=").concat(this.props.currentApp._id,"&app_tab=video_recording_setting"),"/settings/app/".concat(this.props.currentApp.orgId,"/").concat(this.props.currentApp._id,"/video_recording_setting")):u().push("/integration?appId=".concat(t.data.app._id,"&parentType=sessionsList"),"/app/".concat(t.data.app._id,"/sessions/list")):u().push("/integration?parentType=settings&setting=app_setting&org=".concat(t.data.app.orgId,"&app=").concat(t.data.app._id,"&app_tab=video_recording_setting"),"/settings/app/".concat(t.data.app.orgId,"/").concat(t.data.app._id,"/video_recording_setting"))):403==t.error.status?d.ZP.error(t.error.message):this.props.error.message&&this.props.error.message.includes("suspicious behavior")?this.props.changeCommonValue("isVisible_custom_popup",!0):d.ZP.error(this.props.error.message);
              return
            }
            let t=await this.props.createOtherApp({
              name:this.state.appName,
              orgId:e,
              notifyEmail:!0,
              captchaToken:captchaToken
            });
            if(t.success){
              let e;
              this.props.data&&this.props.data.length&&this.props.data.map(function(a,s){
                a.orgId==t.data.app.orgId&&(e=a.name)
              });
              let a=e+"_"+t.data.app.orgId;
              this.cancel(),
              d.ZP.success(t.data.message),
              this.add(t.data.app),
              this.setState({
                appName:""
              }),
              this.setState({
                loading:!1
              }),
              null===_()||void 0===_()||_().identify(this.props.userProfile._id),
              null===_()||void 0===_()||_().track("App Created",{
                app_name:this.state.appName,
                $email:this.props.userProfile.email,
                organization_id:a
              }),
              null===_()||void 0===_()||_().people.increment("# of Apps",1),
              this.props.urlQuery.parentType||this.props.urlQuery.setting&&(window.location.href="https://app.uxcam.com"+"/settings/app/".concat(t.data.app.orgId,"/").concat(t.data.app._id,"/video_recording_setting"))
            }
            else this.setState({
              loading:!1
            }),
            403==t.error.status?d.ZP.error(t.error.message):this.props.error.message.includes("suspicious behavior")?(this.props.cancelCreateApp(),this.props.changeCommonValue("isVisible_custom_popup",!0)):this.props.error.message.includes("upgrade your account")?(this.props.cancelCreateApp(),this.props.changeCommonValue("isVisible_custom_popup",!0,(0,y.ZP)(this.props.error.message))):d.ZP.error(this.props.error.message);
            this.setState({
              loading:!1
            })
          }
        },
        this._handleKeyPress=e=>{
          "Enter"===e.key&&this.createApp()
        },
        this.state={
          appName:"",
          loading:!1
        },
        this.onChange=this.onChange.bind(this),
        this.createApp=this.createApp.bind(this),
        this.add=this.add.bind(this),
        this.cancel=this.cancel.bind(this),
        this._handleKeyPress=this._handleKeyPress.bind(this)
      }
    }
    t.default=(0,p.$j)(function(e){
      return{
        error:e.errorReducer,
        urlQuery:e.urlReducer,
        data:e.applicationReducer,
        userProfile:e.profileReducer,
        currentApp:e.currentAppReducer,
        csrf:e.csrfReducer,
        orgName:e.currentOrgReducer.orgName,
        orgId:e.currentOrgReducer.orgId
      }
    },{
      createApplication:h.W3,
      createOtherApp:h.XE,
      gotCurrentApp:h.IO,
      getAppDropdown:h.Zn,
      changeCommonValue:l.Ap
    })(b)
  }
}]);