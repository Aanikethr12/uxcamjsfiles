(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5362],{
  36968:function(e,t,n){
    var u=n(10611);
    e.exports=function(e,t,n){
      return null==e?e:u(e,t,n)
    }
  },
  7334:function(e,t,n){
    var u=n(79833);
    e.exports=function(e){
      return u(e).toLowerCase()
    }
  },
  83852:function(e,t,n){
    "use strict";
    n.r(t),
    n.d(t,{
      DebounceInput:function(){
        return a
      }
    });
    var u=n(67294),
    r=n(45697),
    o=n.n(r),
    i=n(91296),
    s=n.n(i);
    class a extends u.PureComponent{
      static propTypes={
        element:o().oneOfType([o().string,o().func]),
        type:o().string,
        onChange:o().func.isRequired,
        onKeyDown:o().func,
        onBlur:o().func,
        value:o().oneOfType([o().string,o().number]),
        minLength:o().number,
        debounceTimeout:o().number,
        forceNotifyByEnter:o().bool,
        forceNotifyOnBlur:o().bool,
        inputRef:o().func
      };
      static defaultProps={
        element:"input",
        type:"text",
        onKeyDown:void 0,
        onBlur:void 0,
        value:void 0,
        minLength:0,
        debounceTimeout:100,
        forceNotifyByEnter:!0,
        forceNotifyOnBlur:!0,
        inputRef:void 0
      };
      constructor(e){
        super(e),
        this.isDebouncing=!1,
        this.state={
          value:void 0===e.value||null===e.value?"":e.value
        };
        let{
          debounceTimeout:t
        }=this.props;
        this.createNotifier(t)
      }
      componentDidUpdate(e){
        if(this.isDebouncing)return;
        let{
          value:t,
          debounceTimeout:n
        }=this.props,
        {
          debounceTimeout:u,
          value:r
        }=e,
        {
          value:o
        }=this.state;
        void 0!==t&&r!==t&&o!==t&&this.setState({
          value:t
        }),
        n!==u&&this.createNotifier(n)
      }
      componentWillUnmount(){
        this.flush&&this.flush()
      }
      onChange=e=>{
        e.persist();
        let{
          value:t
        }=this.state,
        {
          minLength:n
        }=this.props;
        this.setState({
          value:e.target.value
        },()=>{
          let{
            value:u
          }=this.state;
          if(u.length>=n){
            this.notify(e);
            return
          }
          t.length>u.length&&this.notify({
            ...e,
            target:{
              ...e.target,
              value:""
            }
          })
        })
      };
      onKeyDown=e=>{
        "Enter"===e.key&&this.forceNotify(e);
        let{
          onKeyDown:t
        }=this.props;
        t&&(e.persist(),t(e))
      };
      onBlur=e=>{
        this.forceNotify(e);
        let{
          onBlur:t
        }=this.props;
        t&&(e.persist(),t(e))
      };
      createNotifier=e=>{
        if(e<0)this.notify=()=>null;
        else if(0===e)this.notify=this.doNotify;
        else{
          let t=s()(e=>{
            this.isDebouncing=!1,
            this.doNotify(e)
          },e);
          this.notify=e=>{
            this.isDebouncing=!0,
            t(e)
          },
          this.flush=()=>t.flush(),
          this.cancel=()=>{
            this.isDebouncing=!1,
            t.cancel()
          }
        }
      };
      doNotify=(...e)=>{
        let{
          onChange:t
        }=this.props;
        t(...e)
      };
      forceNotify=e=>{
        let{
          debounceTimeout:t
        }=this.props;
        if(!this.isDebouncing&&t>0)return;
        this.cancel&&this.cancel();
        let{
          value:n
        }=this.state,
        {
          minLength:u
        }=this.props;
        n.length>=u?this.doNotify(e):this.doNotify({
          ...e,
          target:{
            ...e.target,
            value:n
          }
        })
      };
      render(){
        let e,
        t;
        let{
          element:n,
          onChange:r,
          value:o,
          minLength:i,
          debounceTimeout:s,
          forceNotifyByEnter:a,
          forceNotifyOnBlur:l,
          onKeyDown:c,
          onBlur:f,
          inputRef:g,
          ...p
        }=this.props,
        {
          value:d
        }=this.state;
        return e=a?{
          onKeyDown:this.onKeyDown
        }:c?{
          onKeyDown:c
        }:{},
        t=l?{
          onBlur:this.onBlur
        }:f?{
          onBlur:f
        }:{},
        u.createElement(n,{
          ...p,
          onChange:this.onChange,
          value:d,
          ...e,
          ...t,
          ...g?{
            ref:g
          }:{}
        })
      }
    }
  },
  92685:function(e,t,n){
    let{
      DebounceInput:u
    }=n(83852);
    u.DebounceInput=u,
    e.exports=u
  },
  88540:function(e,t,n){
    "use strict";
    function u(e){
      return function(e){
        if(Array.isArray(e)){
          for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];
          return n
        }
      }(e)||function(e){
        if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)
      }(e)||function(){
        throw TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    function r(){
      return(r=Object.assign||function(e){
        for(var t=1;t<arguments.length;t++){
          var n=arguments[t];
          for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])
        }
        return e
      }).apply(this,arguments)
    }
    function o(e){
      if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }
    function i(e,t){
      return(i=Object.setPrototypeOf||function(e,t){
        return e.__proto__=t,
        e
      })(e,t)
    }
    function s(e){
      return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
        return typeof e
      }:function(e){
        return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e
      })(e)
    }
    function a(e){
      return(a="function"==typeof Symbol&&"symbol"===s(Symbol.iterator)?function(e){
        return s(e)
      }:function(e){
        return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":s(e)
      })(e)
    }
    function l(e){
      return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){
        return e.__proto__||Object.getPrototypeOf(e)
      })(e)
    }
    function c(e,t,n){
      return t in e?Object.defineProperty(e,t,{
        value:n,
        enumerable:!0,
        configurable:!0,
        writable:!0
      }):e[t]=n,
      e
    }
    n.d(t,{
      p:function(){
        return eM
      },
      r:function(){
        return eL
      }
    });
    var f=n(67294),
    g=n(41143),
    p=n.n(g);
    function d(e,t){
      return function(e){
        if(Array.isArray(e))return e
      }(e)||function(e,t){
        var n=[],
        u=!0,
        r=!1,
        o=void 0;
        try{
          for(var i,s=e[Symbol.iterator]();!(u=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);u=!0);
        }
        catch(e){
          r=!0,
          o=e
        }
        finally{
          try{
            u||null==s.return||s.return()
          }
          finally{
            if(r)throw o
          }
        }
        return n
      }(e,t)||function(){
        throw TypeError("Invalid attempt to destructure non-iterable instance")
      }()
    }
    var E=n(4942),
    h=n(74902),
    v=function(e){
      return e===Object(e)?Object.keys(e):[]
    },
    b=function(e){
      return e===Object(e)?Object.values(e):[]
    },
    m=function(e){
      for(var t=arguments.length,n=Array(t>1?t-1:0),u=1;u<t;u++)n[u-1]=arguments[u];
      return n.reduce(function(e,t){
        return function e(t,n){
          var u=Object.assign({},t);
          return C(t)&&C(n)&&v(n).forEach(function(r){
            C(n[r])&&r in t?u[r]=e(t[r],n[r]):Object.assign(u,(0,E.Z)({},r,n[r]))
          }),
          u
        }(e,t)
      },e)
    },
    y=function(e,t){
      var n=Object.assign({},e);
      if(t)for(var u=0;u<t.length;u++)delete n[t[u]];
      return n
    },
    C=function(e){
      return e===Object(e)&&!(e instanceof Date)&&!Array.isArray(e)
    },
    A=function(e){
      return"&"===e[0]
    },
    F=function(e){
      return!A(e)
    },
    O=function(e){
      return e.replace(/-(\w)/g,function(e,t){
        return t.toUpperCase()
      })
    },
    S=function(e){
      for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=v(e),u={},r=0,o=n.length;r<o;r+=1){
        var i=n[r];
        ("[object Object]"!==Object.prototype.toString.call(e[i])||":"===i[0]||"@"===i[0]||t.indexOf(i)>=0)&&(u[i]=e[i])
      }
      return u
    },
    D=function(e,t){
      for(var n=t.map(O),u=v(e),r={},o=0,i=u.length;o<i;o+=1){
        var s=u[o];
        (t.indexOf(s)>=0||n.indexOf(O(s))>=0)&&(r[s]=e[s])
      }
      return r
    },
    w=function e(t,n){
      for(var u=m.apply(void 0,[{},y(t,n)].concat((0,h.Z)(b(D(t,n))))),r=v(u).filter(A),o=0,i=r.length;o<i;o+=1){
        var s=r[o],
        a=e(u[s],n);
        n.indexOf(s)>=0?(delete u[s],u=m({},u,a)):u[s]=a
      }
      return u
    };
    function B(e,t){
      var n=Object.keys(e);
      if(Object.getOwnPropertySymbols){
        var u=Object.getOwnPropertySymbols(e);
        t&&(u=u.filter(function(t){
          return Object.getOwnPropertyDescriptor(e,t).enumerable
        })),
        n.push.apply(n,u)
      }
      return n
    }
    function x(e){
      for(var t=1;t<arguments.length;t++){
        var n=null!=arguments[t]?arguments[t]:{};
        t%2?B(Object(n),!0).forEach(function(t){
          (0,E.Z)(e,t,n[t])
        }):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(t){
          Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))
        })
      }
      return e
    }
    var R=["animationName"],
    T=function(e){
      var t=e.style,
      n=e.className;
      return x(x({},t?{
        style:S(t,R)
      }:{}),n?{
        className:n
      }:{})
    },
    j=(0,f.createContext)(T);
    j.Provider;
    var P=function(e){
      return e?"string"==typeof e?[e]:Array.isArray(e)?e:v(e).reduce(function(t,n){
        return t.concat(e[n]?[n]:[])
      },[]):[]
    },
    N={};
    function k(e,t){
      var n=Object.keys(e);
      if(Object.getOwnPropertySymbols){
        var u=Object.getOwnPropertySymbols(e);
        t&&(u=u.filter(function(t){
          return Object.getOwnPropertyDescriptor(e,t).enumerable
        })),
        n.push.apply(n,u)
      }
      return n
    }
    function I(e){
      for(var t=1;t<arguments.length;t++){
        var n=null!=arguments[t]?arguments[t]:{};
        t%2?k(Object(n),!0).forEach(function(t){
          (0,E.Z)(e,t,n[t])
        }):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){
          Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))
        })
      }
      return e
    }
    var L=function(e){
      var t=e&&v(e)[0];
      return t&&t.split("__")[0].split("--")[0]
    },
    _=function(e,t,n){
      if(e){
        var u=e.split(" ")[0],
        r=[].concat((0,h.Z)(0===t.length?n.map(function(e){
          return"".concat(u,"--").concat(e.substring(1))
        }):[]),(0,h.Z)(t.map(function(e){
          return"".concat(u,"__").concat(e)
        })));
        return 0===t.length?[e].concat((0,h.Z)(r)):r
      }
    },
    M=function e(t){
      var n,
      u=t.style,
      r=t.className,
      o=t.classNames,
      i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T,
      s=r||L(o)||(null==u?void 0:u.className),
      a="function"==typeof u?u:(n=function(t,n){
        var r=P(t);
        p()(Array.isArray(r),"First parameter must be a string, an array of strings, a plain object with boolean values, or a falsy value."),
        p()(!n||C(n),"Optional second parameter must be a plain object.");
        var a=r.filter(A),
        l=r.filter(F),
        c=l.length>0?function(e){
          return b(D(e,l))
        }:function(e){
          return[e]
        },
        f=function(){
          var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};
          return c(w(e,a))
        },
        g=_(s,l,a);
        return e(I(I(I({},(u||n)&&{
          style:m.apply(void 0,[{}].concat((0,h.Z)(f(n)),(0,h.Z)(f(u))))
        }),g&&{
          className:g.join(" ")
        }),o&&{
          classNames:o
        }),i)
      },function(e,t){
        var u,
        r=t||N;
        n.memoize=n.memoize||new WeakMap,
        n.memoize.has(r)?u=n.memoize.get(r):(u={},n.memoize.set(r,u));
        var o=P(e).join(" ");
        return o in u?u[o]:u[o]=n(e||[],t)
      }),
      l=I({},"function"==typeof u?u:{
        style:u
      }),
      c=(0,h.Z)(new Set([].concat((0,h.Z)(l.className?l.className.split(" "):[]),(0,h.Z)(s?s.split(" "):[])))),
      f=o?(c.map(function(e){
        return o[e]
      })||[]).filter(Boolean):c;
      return Object.assign(a,i(I(I({},l),f.length>0?{
        className:f.join(" ")
      }:{}))),
      a
    },
    q=function(e,t,n){
      var u=t.style,
      r=t.className,
      o=t.classNames,
      i=(0,f.useContext)(j);
      return(0,f.useMemo)(function(){
        return M({
          style:u,
          className:r,
          classNames:o
        },i)
      },[u,r,o,i])(n,e)
    };
    function U(e,t){
      var n=Object.keys(e);
      if(Object.getOwnPropertySymbols){
        var u=Object.getOwnPropertySymbols(e);
        t&&(u=u.filter(function(t){
          return Object.getOwnPropertyDescriptor(e,t).enumerable
        })),
        n.push.apply(n,u)
      }
      return n
    }
    function z(e){
      for(var t=1;t<arguments.length;t++){
        var n=null!=arguments[t]?arguments[t]:{};
        t%2?U(Object(n),!0).forEach(function(t){
          (0,E.Z)(e,t,n[t])
        }):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(t){
          Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))
        })
      }
      return e
    }
    var H=function(){
      for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];
      return t.reduce(function(e,t){
        return z(z(z({},e),"function"==typeof t?t:{}),{},{
          style:z(z({},e.style),"function"==typeof t?t.style:t)
        })
      },{})
    },
    W=n(45697),
    Z=n.n(W),
    K=n(73935),
    V=function(e){
      return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")
    },
    G="__id__",
    Q="__display__",
    Y=function(e,t){
      p()("id"===t||"display"===t,'Second arg must be either "id" or "display", got: "'.concat(t,'"'));
      var n=e.indexOf(Q),
      u=e.indexOf(G);
      return(n<0&&(n=null),u<0&&(u=null),p()(null!==n||null!==u,"The markup '".concat(e,"' does not contain either of the placeholders '__id__' or '__display__'")),null!==n&&null!==u)?"id"===t&&u<=n||"display"===t&&n<=u?0:1:0
    },
    X=function(e){
      var t=/^\/(.+)\/(\w+)?$/;
      return RegExp(e.map(function(e){
        var n=d(t.exec(e.toString()),3),
        u=n[1],
        r=n[2];
        return p()(!r,"RegExp flags are not supported. Change /".concat(u,"/").concat(r," into /").concat(u,"/")),
        "(".concat(u,")")
      }).join("|"),"g")
    },
    $=function(e){
      var t=0;
      return e.indexOf("__id__")>=0&&t++,
      e.indexOf("__display__")>=0&&t++,
      t
    },
    J=function(){},
    ee=function(e,t,n){
      for(var u,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:J,o=X(t.map(function(e){
        return e.regex
      })),i=2,s=t.map(function(e){
        var t=e.markup,
        n=i;
        return i+=$(t)+1,
        n
      }),a=0,l=0;null!==(u=o.exec(e));){
        var c=s.find(function(e){
          return!!u[e]
        }),
        f=s.indexOf(c),
        g=t[f],
        p=g.markup,
        d=g.displayTransform,
        E=c+Y(p,"id"),
        h=c+Y(p,"display"),
        v=u[E],
        b=d(v,u[h]),
        m=e.substring(a,u.index);
        r(m,a,l),
        l+=m.length,
        n(u[0],u.index,l,v,b,f,a),
        l+=b.length,
        a=o.lastIndex
      }
      a<e.length&&r(e.substring(a),a,l)
    },
    et=function(e,t){
      var n="";
      return ee(e,t,function(e,t,u,r,o){
        n+=o
      },function(e){
        n+=e
      }),
      n
    },
    en=function(e,t,n){
      var u,
      r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"START";
      return"number"!=typeof n?n:(ee(e,t,function(e,t,o,i,s,a,l){
        void 0===u&&o+s.length>n&&(u="NULL"===r?null:t+("END"===r?e.length:0))
      },function(e,t,r){
        void 0===u&&r+e.length>=n&&(u=t+n-r)
      }),void 0===u?e.length:u)
    },
    eu=function(e,t,n,u){
      return e.substring(0,t)+u+e.substring(n)
    },
    er=function(e,t,n,u){
      var r=n.selectionStartBefore,
      o=n.selectionEndBefore,
      i=n.selectionEndAfter,
      s=et(e,u),
      a=s.length-t.length;
      "undefined"===r&&(r=i+a),
      "undefined"===o&&(o=r),
      r===o&&o===i&&s.length===t.length&&(r-=1);
      var l=t.slice(r,i),
      c=Math.min(r,i),
      f=o;
      r===i&&(f=Math.max(o,r+a));
      var g=en(e,u,c,"START"),
      p=en(e,u,f,"END"),
      d=en(e,u,c,"NULL"),
      E=en(e,u,f,"NULL"),
      h=eu(e,g,p,l);
      if(!(null===d||null===E)){
        var v=et(h,u);
        if(v!==t){
          for(c=0;t[c]===v[c];)c++;
          l=t.slice(c,i),
          f=s.lastIndexOf(t.substring(i)),
          g=en(e,u,c,"START"),
          p=en(e,u,f,"END"),
          h=eu(e,g,p,l)
        }
      }
      return h
    },
    eo=function(e,t,n){
      var u=n,
      r=!1;
      if(ee(e,t,function(e,t,o,i,s,a,l){
        o<=n&&o+s.length>n&&(u=o,r=!0)
      }),r)return u
    },
    ei=function(e,t){
      var n=[];
      return ee(e,t,function(e,t,u,r,o,i,s){
        n.push({
          id:r,
          display:o,
          childIndex:i,
          index:t,
          plainTextIndex:u
        })
      }),
      n
    },
    es=function(e,t){
      return"".concat(e,"-").concat(t)
    },
    ea=function(e){
      return Object.values(e).reduce(function(e,t){
        return e+t.results.length
      },0)
    },
    el=function(e,t){
      var n=ei(e,t),
      u=n[n.length-1];
      return u?u.plainTextIndex+u.display.length:0
    },
    ec=function(e){
      var t=V(e),
      n=e[e.indexOf(Q)+Q.length],
      u=e[e.indexOf(G)+G.length];
      return new RegExp(t.replace(Q,"([^".concat(V(n||""),"]+?)")).replace(G,"([^".concat(V(u||""),"]+?)")))
    },
    ef=function(e){
      return f.Children.toArray(e).map(function(e){
        var t=e.props,
        n=t.markup,
        u=t.regex,
        r=t.displayTransform;
        return{
          markup:n,
          regex:u?eg(u,n):ec(n),
          displayTransform:r||function(e,t){
            return t||e
          }
        }
      })
    },
    eg=function(e,t){
      var n=RegExp(e.toString()+"|").exec("").length-1,
      u=$(t);
      return p()(n===u,"Number of capturing groups in RegExp ".concat(e.toString()," (").concat(n,") does not match the number of placeholders in the markup '").concat(t,"' (").concat(u,")")),
      e
    },
    ep=[{
      base:"A",
      letters:/(&#65;|&#9398;|&#65313;|&#192;|&#193;|&#194;|&#7846;|&#7844;|&#7850;|&#7848;|&#195;|&#256;|&#258;|&#7856;|&#7854;|&#7860;|&#7858;|&#550;|&#480;|&#196;|&#478;|&#7842;|&#197;|&#506;|&#461;|&#512;|&#514;|&#7840;|&#7852;|&#7862;|&#7680;|&#260;|&#570;|&#11375;|[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F])/g
    },{
      base:"AA",
      letters:/(&#42802;|[\uA732])/g
    },{
      base:"AE",
      letters:/(&#198;|&#508;|&#482;|[\u00C6\u01FC\u01E2])/g
    },{
      base:"AO",
      letters:/(&#42804;|[\uA734])/g
    },{
      base:"AU",
      letters:/(&#42806;|[\uA736])/g
    },{
      base:"AV",
      letters:/(&#42808;|&#42810;|[\uA738\uA73A])/g
    },{
      base:"AY",
      letters:/(&#42812;|[\uA73C])/g
    },{
      base:"B",
      letters:/(&#66;|&#9399;|&#65314;|&#7682;|&#7684;|&#7686;|&#579;|&#386;|&#385;|[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181])/g
    },{
      base:"C",
      letters:/(&#67;|&#9400;|&#65315;|&#262;|&#264;|&#266;|&#268;|&#199;|&#7688;|&#391;|&#571;|&#42814;|[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E])/g
    },{
      base:"D",
      letters:/(&#68;|&#9401;|&#65316;|&#7690;|&#270;|&#7692;|&#7696;|&#7698;|&#7694;|&#272;|&#395;|&#394;|&#393;|&#42873;|&#208;|[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0])/g
    },{
      base:"DZ",
      letters:/(&#497;|&#452;|[\u01F1\u01C4])/g
    },{
      base:"Dz",
      letters:/(&#498;|&#453;|[\u01F2\u01C5])/g
    },{
      base:"E",
      letters:/(&#69;|&#9402;|&#65317;|&#200;|&#201;|&#202;|&#7872;|&#7870;|&#7876;|&#7874;|&#7868;|&#274;|&#7700;|&#7702;|&#276;|&#278;|&#203;|&#7866;|&#282;|&#516;|&#518;|&#7864;|&#7878;|&#552;|&#7708;|&#280;|&#7704;|&#7706;|&#400;|&#398;|[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E])/g
    },{
      base:"F",
      letters:/(&#70;|&#9403;|&#65318;|&#7710;|&#401;|&#42875;|[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B])/g
    },{
      base:"G",
      letters:/(&#71;|&#9404;|&#65319;|&#500;|&#284;|&#7712;|&#286;|&#288;|&#486;|&#290;|&#484;|&#403;|&#42912;|&#42877;|&#42878;|[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E])/g
    },{
      base:"H",
      letters:/(&#72;|&#9405;|&#65320;|&#292;|&#7714;|&#7718;|&#542;|&#7716;|&#7720;|&#7722;|&#294;|&#11367;|&#11381;|&#42893;|[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D])/g
    },{
      base:"I",
      letters:/(&#73;|&#9406;|&#65321;|&#204;|&#205;|&#206;|&#296;|&#298;|&#300;|&#304;|&#207;|&#7726;|&#7880;|&#463;|&#520;|&#522;|&#7882;|&#302;|&#7724;|&#407;|[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197])/g
    },{
      base:"J",
      letters:/(&#74;|&#9407;|&#65322;|&#308;|&#584;|[\u004A\u24BF\uFF2A\u0134\u0248])/g
    },{
      base:"K",
      letters:/(&#75;|&#9408;|&#65323;|&#7728;|&#488;|&#7730;|&#310;|&#7732;|&#408;|&#11369;|&#42816;|&#42818;|&#42820;|&#42914;|[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2])/g
    },{
      base:"L",
      letters:/(&#76;|&#9409;|&#65324;|&#319;|&#313;|&#317;|&#7734;|&#7736;|&#315;|&#7740;|&#7738;|&#321;|&#573;|&#11362;|&#11360;|&#42824;|&#42822;|&#42880;|[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780])/g
    },{
      base:"LJ",
      letters:/(&#455;|[\u01C7])/g
    },{
      base:"Lj",
      letters:/(&#456;|[\u01C8])/g
    },{
      base:"M",
      letters:/(&#77;|&#9410;|&#65325;|&#7742;|&#7744;|&#7746;|&#11374;|&#412;|[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C])/g
    },{
      base:"N",
      letters:/(&#78;|&#9411;|&#65326;|&#504;|&#323;|&#209;|&#7748;|&#327;|&#7750;|&#325;|&#7754;|&#7752;|&#544;|&#413;|&#42896;|&#42916;|&#330;|[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4\u014A])/g
    },{
      base:"NJ",
      letters:/(&#458;|[\u01CA])/g
    },{
      base:"Nj",
      letters:/(&#459;|[\u01CB])/g
    },{
      base:"O",
      letters:/(&#79;|&#9412;|&#65327;|&#210;|&#211;|&#212;|&#7890;|&#7888;|&#7894;|&#7892;|&#213;|&#7756;|&#556;|&#7758;|&#332;|&#7760;|&#7762;|&#334;|&#558;|&#560;|&#214;|&#554;|&#7886;|&#336;|&#465;|&#524;|&#526;|&#416;|&#7900;|&#7898;|&#7904;|&#7902;|&#7906;|&#7884;|&#7896;|&#490;|&#492;|&#216;|&#510;|&#390;|&#415;|&#42826;|&#42828;|[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C])/g
    },{
      base:"OE",
      letters:/(&#338;|[\u0152])/g
    },{
      base:"OI",
      letters:/(&#418;|[\u01A2])/g
    },{
      base:"OO",
      letters:/(&#42830;|[\uA74E])/g
    },{
      base:"OU",
      letters:/(&#546;|[\u0222])/g
    },{
      base:"P",
      letters:/(&#80;|&#9413;|&#65328;|&#7764;|&#7766;|&#420;|&#11363;|&#42832;|&#42834;|&#42836;|[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754])/g
    },{
      base:"Q",
      letters:/(&#81;|&#9414;|&#65329;|&#42838;|&#42840;|&#586;|[\u0051\u24C6\uFF31\uA756\uA758\u024A])/g
    },{
      base:"R",
      letters:/(&#82;|&#9415;|&#65330;|&#340;|&#7768;|&#344;|&#528;|&#530;|&#7770;|&#7772;|&#342;|&#7774;|&#588;|&#11364;|&#42842;|&#42918;|&#42882;|[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782])/g
    },{
      base:"S",
      letters:/(&#83;|&#9416;|&#65331;|&#7838;|&#346;|&#7780;|&#348;|&#7776;|&#352;|&#7782;|&#7778;|&#7784;|&#536;|&#350;|&#11390;|&#42920;|&#42884;|[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784])/g
    },{
      base:"T",
      letters:/(&#84;|&#9417;|&#65332;|&#7786;|&#356;|&#7788;|&#538;|&#354;|&#7792;|&#7790;|&#358;|&#428;|&#430;|&#574;|&#42886;|[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786])/g
    },{
      base:"TH",
      letters:/(&#222;|[\u00DE])/g
    },{
      base:"TZ",
      letters:/(&#42792;|[\uA728])/g
    },{
      base:"U",
      letters:/(&#85;|&#9418;|&#65333;|&#217;|&#218;|&#219;|&#360;|&#7800;|&#362;|&#7802;|&#364;|&#220;|&#475;|&#471;|&#469;|&#473;|&#7910;|&#366;|&#368;|&#467;|&#532;|&#534;|&#431;|&#7914;|&#7912;|&#7918;|&#7916;|&#7920;|&#7908;|&#7794;|&#370;|&#7798;|&#7796;|&#580;|[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244])/g
    },{
      base:"V",
      letters:/(&#86;|&#9419;|&#65334;|&#7804;|&#7806;|&#434;|&#42846;|&#581;|[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245])/g
    },{
      base:"VY",
      letters:/(&#42848;|[\uA760])/g
    },{
      base:"W",
      letters:/(&#87;|&#9420;|&#65335;|&#7808;|&#7810;|&#372;|&#7814;|&#7812;|&#7816;|&#11378;|[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72])/g
    },{
      base:"X",
      letters:/(&#88;|&#9421;|&#65336;|&#7818;|&#7820;|[\u0058\u24CD\uFF38\u1E8A\u1E8C])/g
    },{
      base:"Y",
      letters:/(&#89;|&#9422;|&#65337;|&#7922;|&#221;|&#374;|&#7928;|&#562;|&#7822;|&#376;|&#7926;|&#7924;|&#435;|&#590;|&#7934;|[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE])/g
    },{
      base:"Z",
      letters:/(&#90;|&#9423;|&#65338;|&#377;|&#7824;|&#379;|&#381;|&#7826;|&#7828;|&#437;|&#548;|&#11391;|&#11371;|&#42850;|[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762])/g
    },{
      base:"a",
      letters:/(&#97;|&#9424;|&#65345;|&#7834;|&#224;|&#225;|&#226;|&#7847;|&#7845;|&#7851;|&#7849;|&#227;|&#257;|&#259;|&#7857;|&#7855;|&#7861;|&#7859;|&#551;|&#481;|&#228;|&#479;|&#7843;|&#229;|&#507;|&#462;|&#513;|&#515;|&#7841;|&#7853;|&#7863;|&#7681;|&#261;|&#11365;|&#592;|[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250])/g
    },{
      base:"aa",
      letters:/(&#42803;|[\uA733])/g
    },{
      base:"ae",
      letters:/(&#230;|&#509;|&#483;|[\u00E6\u01FD\u01E3])/g
    },{
      base:"ao",
      letters:/(&#42805;|[\uA735])/g
    },{
      base:"au",
      letters:/(&#42807;|[\uA737])/g
    },{
      base:"av",
      letters:/(&#42809;|&#42811;|[\uA739\uA73B])/g
    },{
      base:"ay",
      letters:/(&#42813;|[\uA73D])/g
    },{
      base:"b",
      letters:/(&#98;|&#9425;|&#65346;|&#7683;|&#7685;|&#7687;|&#384;|&#387;|&#595;|[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253])/g
    },{
      base:"c",
      letters:/(&#99;|&#9426;|&#65347;|&#263;|&#265;|&#267;|&#269;|&#231;|&#7689;|&#392;|&#572;|&#42815;|&#8580;|[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184])/g
    },{
      base:"d",
      letters:/(&#100;|&#9427;|&#65348;|&#7691;|&#271;|&#7693;|&#7697;|&#7699;|&#7695;|&#273;|&#396;|&#598;|&#599;|&#42874;|&#240;|[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A\u00F0])/g
    },{
      base:"dz",
      letters:/(&#499;|&#454;|[\u01F3\u01C6])/g
    },{
      base:"e",
      letters:/(&#101;|&#9428;|&#65349;|&#232;|&#233;|&#234;|&#7873;|&#7871;|&#7877;|&#7875;|&#7869;|&#275;|&#7701;|&#7703;|&#277;|&#279;|&#235;|&#7867;|&#283;|&#517;|&#519;|&#7865;|&#7879;|&#553;|&#7709;|&#281;|&#7705;|&#7707;|&#583;|&#603;|&#477;|[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD])/g
    },{
      base:"f",
      letters:/(&#102;|&#9429;|&#65350;|&#7711;|&#402;|&#42876;|[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C])/g
    },{
      base:"g",
      letters:/(&#103;|&#9430;|&#65351;|&#501;|&#285;|&#7713;|&#287;|&#289;|&#487;|&#291;|&#485;|&#608;|&#42913;|&#7545;|&#42879;|[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F])/g
    },{
      base:"h",
      letters:/(&#104;|&#9431;|&#65352;|&#293;|&#7715;|&#7719;|&#543;|&#7717;|&#7721;|&#7723;|&#7830;|&#295;|&#11368;|&#11382;|&#613;|[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265])/g
    },{
      base:"hv",
      letters:/(&#405;|[\u0195])/g
    },{
      base:"i",
      letters:/(&#105;|&#9432;|&#65353;|&#236;|&#237;|&#238;|&#297;|&#299;|&#301;|&#239;|&#7727;|&#7881;|&#464;|&#521;|&#523;|&#7883;|&#303;|&#7725;|&#616;|&#305;|[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131])/g
    },{
      base:"ij",
      letters:/(&#307;|[\u0133])/g
    },{
      base:"j",
      letters:/(&#106;|&#9433;|&#65354;|&#309;|&#496;|&#585;|[\u006A\u24D9\uFF4A\u0135\u01F0\u0249])/g
    },{
      base:"k",
      letters:/(&#107;|&#9434;|&#65355;|&#7729;|&#489;|&#7731;|&#311;|&#7733;|&#409;|&#11370;|&#42817;|&#42819;|&#42821;|&#42915;|[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3])/g
    },{
      base:"l",
      letters:/(&#108;|&#9435;|&#65356;|&#320;|&#314;|&#318;|&#7735;|&#7737;|&#316;|&#7741;|&#7739;|&#322;|&#410;|&#619;|&#11361;|&#42825;|&#42881;|&#42823;|[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u0142\u019A\u026B\u2C61\uA749\uA781\uA747])/g
    },{
      base:"lj",
      letters:/(&#457;|[\u01C9])/g
    },{
      base:"m",
      letters:/(&#109;|&#9436;|&#65357;|&#7743;|&#7745;|&#7747;|&#625;|&#623;|[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F])/g
    },{
      base:"n",
      letters:/(&#110;|&#9437;|&#65358;|&#505;|&#324;|&#241;|&#7749;|&#328;|&#7751;|&#326;|&#7755;|&#7753;|&#414;|&#626;|&#329;|&#42897;|&#42917;|&#331;|[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u014B])/g
    },{
      base:"nj",
      letters:/(&#460;|[\u01CC])/g
    },{
      base:"o",
      letters:/(&#111;|&#9438;|&#65359;|&#242;|&#243;|&#244;|&#7891;|&#7889;|&#7895;|&#7893;|&#245;|&#7757;|&#557;|&#7759;|&#333;|&#7761;|&#7763;|&#335;|&#559;|&#561;|&#246;|&#555;|&#7887;|&#337;|&#466;|&#525;|&#527;|&#417;|&#7901;|&#7899;|&#7905;|&#7903;|&#7907;|&#7885;|&#7897;|&#491;|&#493;|&#248;|&#511;|&#596;|&#42827;|&#42829;|&#629;|[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275])/g
    },{
      base:"oe",
      letters:/(&#339;|[\u0153])/g
    },{
      base:"oi",
      letters:/(&#419;|[\u01A3])/g
    },{
      base:"ou",
      letters:/(&#547;|[\u0223])/g
    },{
      base:"oo",
      letters:/(&#42831;|[\uA74F])/g
    },{
      base:"p",
      letters:/(&#112;|&#9439;|&#65360;|&#7765;|&#7767;|&#421;|&#7549;|&#42833;|&#42835;|&#42837;|[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755])/g
    },{
      base:"q",
      letters:/(&#113;|&#9440;|&#65361;|&#587;|&#42839;|&#42841;|[\u0071\u24E0\uFF51\u024B\uA757\uA759])/g
    },{
      base:"r",
      letters:/(&#114;|&#9441;|&#65362;|&#341;|&#7769;|&#345;|&#529;|&#531;|&#7771;|&#7773;|&#343;|&#7775;|&#589;|&#637;|&#42843;|&#42919;|&#42883;|[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783])/g
    },{
      base:"s",
      letters:/(&#115;|&#9442;|&#65363;|&#347;|&#7781;|&#349;|&#7777;|&#353;|&#7783;|&#7779;|&#7785;|&#537;|&#351;|&#575;|&#42921;|&#42885;|&#7835;|&#383;|[\u0073\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u017F])/g
    },{
      base:"ss",
      letters:/(&#223;|[\u00DF])/g
    },{
      base:"t",
      letters:/(&#116;|&#9443;|&#65364;|&#7787;|&#7831;|&#357;|&#7789;|&#539;|&#355;|&#7793;|&#7791;|&#359;|&#429;|&#648;|&#11366;|&#42887;|[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787])/g
    },{
      base:"th",
      letters:/(&#254;|[\u00FE])/g
    },{
      base:"tz",
      letters:/(&#42793;|[\uA729])/g
    },{
      base:"u",
      letters:/(&#117;|&#9444;|&#65365;|&#249;|&#250;|&#251;|&#361;|&#7801;|&#363;|&#7803;|&#365;|&#252;|&#476;|&#472;|&#470;|&#474;|&#7911;|&#367;|&#369;|&#468;|&#533;|&#535;|&#432;|&#7915;|&#7913;|&#7919;|&#7917;|&#7921;|&#7909;|&#7795;|&#371;|&#7799;|&#7797;|&#649;|[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289])/g
    },{
      base:"v",
      letters:/(&#118;|&#9445;|&#65366;|&#7805;|&#7807;|&#651;|&#42847;|&#652;|[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C])/g
    },{
      base:"vy",
      letters:/(&#42849;|[\uA761])/g
    },{
      base:"w",
      letters:/(&#119;|&#9446;|&#65367;|&#7809;|&#7811;|&#373;|&#7815;|&#7813;|&#7832;|&#7817;|&#11379;|[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73])/g
    },{
      base:"x",
      letters:/(&#120;|&#9447;|&#65368;|&#7819;|&#7821;|[\u0078\u24E7\uFF58\u1E8B\u1E8D])/g
    },{
      base:"y",
      letters:/(&#121;|&#9448;|&#65369;|&#7923;|&#253;|&#375;|&#7929;|&#563;|&#7823;|&#255;|&#7927;|&#7833;|&#7925;|&#436;|&#591;|&#7935;|[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF])/g
    },{
      base:"z",
      letters:/(&#122;|&#9449;|&#65370;|&#378;|&#7825;|&#380;|&#382;|&#7827;|&#7829;|&#438;|&#549;|&#576;|&#11372;|&#42851;|[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763])/g
    }],
    ed=function(e){
      var t=e;
      return ep.forEach(function(e){
        t=t.replace(e.letters,e.base)
      }),
      t
    },
    eE=function(e){
      return ed(e).toLowerCase()
    },
    eh=function(e,t,n){
      return n?eE(e).indexOf(eE(t)):e.toLowerCase().indexOf(t.toLowerCase())
    },
    ev=function(e){
      return"number"==typeof e
    },
    eb=function(e){
      for(var t,n=arguments.length,u=Array(n>1?n-1:0),r=1;r<n;r++)u[r-1]=arguments[r];
      var o=(t=[]).concat.apply(t,u);
      return Object.keys(e).reduce(function(t,n){
        return e.hasOwnProperty(n)&&!o.includes(n)&&void 0!==e[n]&&(t[n]=e[n]),
        t
      },{})
    },
    em=["style","className","classNames"];
    function ey(e,t){
      return function(n){
        var u=function(u){
          var o=u.style,
          i=u.className,
          s=u.classNames,
          a=function(e,t){
            if(null==e)return{};
            var n,
            u,
            r=function(e,t){
              if(null==e)return{};
              var n,
              u,
              r={},
              o=Object.keys(e);
              for(u=0;u<o.length;u++)n=o[u],
              t.indexOf(n)>=0||(r[n]=e[n]);
              return r
            }(e,t);
            if(Object.getOwnPropertySymbols){
              var o=Object.getOwnPropertySymbols(e);
              for(u=0;u<o.length;u++)n=o[u],
              !(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])
            }
            return r
          }(u,em),
          l=q(e,{
            style:o,
            className:i,
            classNames:s
          },t?t(a):void 0);
          return f.createElement(n,r({},a,{
            style:l
          }))
        },
        o=n.displayName||n.name||"Component";
        return u.displayName="defaultStyle(".concat(o,")"),
        u
      }
    }
    function eC(e){
      var t,
      n,
      u=e.selectionStart,
      o=e.selectionEnd,
      i=e.value,
      s=void 0===i?"":i,
      a=e.onCaretPositionChange,
      l=e.containerRef,
      c=e.children,
      g=(e.singleLine,e.style),
      p=d((0,f.useState)({
        left:void 0,
        top:void 0
      }),2),
      E=p[0],
      h=p[1],
      v=d((0,f.useState)(),2),
      b=v[0],
      m=v[1];
      (0,f.useEffect)(function(){
        y()
      },[b]);
      var y=function(){
        if(b){
          var e=b.offsetLeft,
          t=b.offsetTop;
          if(E.left!==e||E.top!==t){
            var n={
              left:e,
              top:t
            };
            h(n),
            a(n)
          }
        }
      },
      C=ef(c);
      o===u&&(n=en(s,C,u,"START"));
      var A=[],
      F={},
      O=A,
      S=0,
      D=function(e,t){
        return f.createElement("span",r({},g("substring"),{
          key:t
        }),e)
      },
      w=function(e,t,n,u){
        var r=f.Children.toArray(c)[n];
        return f.cloneElement(r,{
          id:e,
          display:t,
          key:u
        })
      };
      return ee(s,C,function(e,t,n,u,r,o,i){
        var s=(F.hasOwnProperty(u)?F[u]++:F[u]=0,u+"_"+F[u]);
        O.push(w(u,r,o,s))
      },function(e,t,u){
        if(ev(n)&&n>=t&&n<=t+e.length){
          var r=n-t;
          O.push(D(e.substring(0,r),S)),
          O=[D(e.substring(r),S)]
        }
        else O.push(D(e,S));
        S++
      }),
      O.push(" "),
      O!==A&&A.push((t=O,f.createElement("span",r({},g("caret"),{
        ref:m,
        key:"caret"
      }),t))),
      f.createElement("div",r({},g,{
        ref:l
      }),A)
    }
    eC.propTypes={
      selectionStart:Z().number,
      selectionEnd:Z().number,
      value:Z().string.isRequired,
      onCaretPositionChange:Z().func.isRequired,
      containerRef:Z().oneOfType([Z().func,Z().shape({
        current:"undefined"==typeof Element?Z().any:Z().instanceOf(Element)
      })]),
      children:Z().oneOfType([Z().element,Z().arrayOf(Z().element)]).isRequired
    };
    var eA=ey({
      position:"relative",
      boxSizing:"border-box",
      width:"100%",
      color:"transparent",
      overflow:"hidden",
      whiteSpace:"pre-wrap",
      wordWrap:"break-word",
      border:"1px solid transparent",
      textAlign:"start",
      "&singleLine":{
        whiteSpace:"pre",
        wordWrap:null
      },
      substring:{
        visibility:"hidden"
      }
    },function(e){
      return{
        "&singleLine":e.singleLine
      }
    })(eC);
    function eF(e){
      var t,
      n,
      u,
      o=e.id,
      i=e.focused,
      s=e.ignoreAccents,
      a=e.index,
      l=e.onClick,
      c=e.onMouseEnter,
      g=e.query,
      p=e.renderSuggestion,
      d=e.suggestion,
      E=e.style;
      return e.className,
      e.classNames,
      f.createElement("li",r({
        id:o,
        role:"option",
        "aria-selected":i
      },{
        onClick:l,
        onMouseEnter:c
      },E),(u=-1===(n=eh(t=function(){
        if("string"==typeof d)return d;
        var e=d.id,
        t=d.display;
        return void 0!==e&&t?t:e
      }(),g,s))?f.createElement("span",E("display"),t):f.createElement("span",E("display"),t.substring(0,n),f.createElement("b",E("highlight"),t.substring(n,n+g.length)),t.substring(n+g.length)),p?p(d,g,u,a,i):u))
    }
    eF.propTypes={
      id:Z().string.isRequired,
      query:Z().string.isRequired,
      index:Z().number.isRequired,
      ignoreAccents:Z().bool,
      suggestion:Z().oneOfType([Z().string,Z().shape({
        id:Z().oneOfType([Z().string,Z().number]).isRequired,
        display:Z().string
      })]).isRequired,
      renderSuggestion:Z().func,
      focused:Z().bool
    };
    var eO=ey({
      cursor:"pointer"
    },function(e){
      return{
        "&focused":e.focused
      }
    })(eF);
    function eS(e){
      var t=q(eD,{
        style:e.style,
        className:e.className,
        classNames:e.classNames
      }),
      n=t("spinner");
      return f.createElement("div",t,f.createElement("div",n,f.createElement("div",n(["element","element1"])),f.createElement("div",n(["element","element2"])),f.createElement("div",n(["element","element3"])),f.createElement("div",n(["element","element4"])),f.createElement("div",n(["element","element5"]))))
    }
    var eD={};
    function ew(e){
      var t,
      n=e.id,
      o=e.suggestions,
      i=e.a11ySuggestionsListLabel,
      s=e.focusIndex,
      a=e.position,
      l=e.left,
      c=e.right,
      g=e.top,
      p=e.scrollFocusedIntoView,
      E=e.isLoading,
      h=e.isOpened,
      v=e.onSelect,
      b=void 0===v?function(){
        return null
      }:v,
      m=e.ignoreAccents,
      y=e.containerRef,
      C=e.children,
      A=e.style,
      F=e.customSuggestionsContainer,
      O=e.onMouseDown,
      S=e.onMouseEnter,
      D=d((0,f.useState)(),2),
      w=D[0],
      B=D[1];
      (0,f.useEffect)(function(){
        if(w&&!(w.offsetHeight>=w.scrollHeight)&&p){
          var e=w.scrollTop,
          t=w.children[s].getBoundingClientRect(),
          n=t.top,
          u=t.bottom,
          r=w.getBoundingClientRect().top;
          n=n-r+e,
          u=u-r+e,
          n<e?w.scrollTop=n:u>w.offsetHeight&&(w.scrollTop=u-w.offsetHeight)
        }
      },[]);
      var x=function(e,t,u){
        var r=u===s,
        o=t.childIndex,
        i=t.query,
        a=f.Children.toArray(C)[o].props.renderSuggestion;
        return f.createElement(eO,{
          style:A("item"),
          key:"".concat(o,"-").concat(j(e)),
          id:es(n,u),
          query:i,
          index:u,
          ignoreAccents:m,
          renderSuggestion:a,
          suggestion:e,
          focused:r,
          onClick:function(){
            return T(e,t)
          },
          onMouseEnter:function(){
            return R(u)
          }
        })
      },
      R=function(e,t){
        S&&S(e)
      },
      T=function(e,t){
        b(e,t)
      },
      j=function(e){
        return"string"==typeof e?e:e.id
      };
      return h?f.createElement("div",r({},H({
        position:a||"absolute",
        left:l,
        right:c,
        top:g
      },A),{
        onMouseDown:O,
        ref:y
      }),f.createElement("ul",r({
        ref:B,
        id:n,
        role:"listbox",
        "aria-label":i
      },A("list")),(t=Object.values(void 0===o?{}:o).reduce(function(e,t){
        var n=t.results,
        r=t.queryInfo;
        return[].concat(u(e),u(n.map(function(t,n){
          return x(t,r,e.length+n)
        })))
      },[]),F?F(t):t)),function(){
        if(E)return f.createElement(eS,{
          style:A("loadingIndicator")
        })
      }()):null
    }
    ew.propTypes={
      id:Z().string.isRequired,
      suggestions:Z().object.isRequired,
      a11ySuggestionsListLabel:Z().string,
      focusIndex:Z().number,
      position:Z().string,
      left:Z().number,
      right:Z().number,
      top:Z().number,
      scrollFocusedIntoView:Z().bool,
      isLoading:Z().bool,
      isOpened:Z().bool.isRequired,
      onSelect:Z().func,
      ignoreAccents:Z().bool,
      customSuggestionsContainer:Z().any,
      containerRef:Z().oneOfType([Z().func,Z().shape({
        current:"undefined"==typeof Element?Z().any:Z().instanceOf(Element)
      })])
    };
    var eB=ey({
      zIndex:1,
      backgroundColor:"white",
      marginTop:14,
      minWidth:100,
      list:{
        margin:0,
        padding:0,
        listStyleType:"none"
      }
    })(ew);
    function ex(e,t){
      var n=Object.keys(e);
      if(Object.getOwnPropertySymbols){
        var u=Object.getOwnPropertySymbols(e);
        t&&(u=u.filter(function(t){
          return Object.getOwnPropertyDescriptor(e,t).enumerable
        })),
        n.push.apply(n,u)
      }
      return n
    }
    function eR(e){
      for(var t=1;t<arguments.length;t++){
        var n=null!=arguments[t]?arguments[t]:{};
        t%2?ex(Object(n),!0).forEach(function(t){
          c(e,t,n[t])
        }):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ex(Object(n)).forEach(function(t){
          Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))
        })
      }
      return e
    }
    var eT=function(e){
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};
      if(e instanceof RegExp)return e;
      var n=t.allowSpaceInQuery,
      u=V(e);
      return new RegExp("(?:^|\\s)(".concat(u,"([^").concat(n?"":"\\s").concat(u,"]*))$"))
    },
    ej={
      TAB:9,
      RETURN:13,
      ESC:27,
      UP:38,
      DOWN:40
    },
    eP=!1,
    eN={
      singleLine:Z().bool,
      allowSpaceInQuery:Z().bool,
      allowSuggestionsAboveCursor:Z().bool,
      forceSuggestionsAboveCursor:Z().bool,
      ignoreAccents:Z().bool,
      a11ySuggestionsListLabel:Z().string,
      value:Z().string,
      onKeyDown:Z().func,
      customSuggestionsContainer:Z().func,
      onSelect:Z().func,
      onBlur:Z().func,
      onChange:Z().func,
      suggestionsPortalHost:"undefined"==typeof Element?Z().any:Z().PropTypes.instanceOf(Element),
      inputRef:Z().oneOfType([Z().func,Z().shape({
        current:"undefined"==typeof Element?Z().any:Z().instanceOf(Element)
      })]),
      children:Z().oneOfType([Z().element,Z().arrayOf(Z().element)]).isRequired
    },
    ek=function(e){
      !function(e,t){
        if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");
        e.prototype=Object.create(t&&t.prototype,{
          constructor:{
            value:e,
            writable:!0,
            configurable:!0
          }
        }),
        t&&i(e,t)
      }(g,e);
      var t,
      n,
      s=(t=function(){
        if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;
        if("function"==typeof Proxy)return!0;
        try{
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),
          !0
        }
        catch(e){
          return!1
        }
      }(),function(){
        var e,
        n=l(g);
        return e=t?Reflect.construct(n,arguments,l(this).constructor):n.apply(this,arguments),
        e&&("object"===a(e)||"function"==typeof e)?e:o(this)
      });
      function g(e){
        var t;
        return!function(e,t){
          if(!(e instanceof t))throw TypeError("Cannot call a class as a function")
        }(this,g),
        c(o(t=s.call(this,e)),"setContainerElement",function(e){
          t.containerElement=e
        }),
        c(o(t),"getInputProps",function(){
          var e=t.props,
          n=e.readOnly,
          u=e.disabled,
          r=e.style;
          return eR(eR(eR(eR({},eb(t.props,["style","classNames","className"],eN===Object(eN)?Object.keys(eN):[])),r("input")),{},{
            value:t.getPlainText(),
            onScroll:t.updateHighlighterScroll
          },!n&&!u&&{
            onChange:t.handleChange,
            onSelect:t.handleSelect,
            onKeyDown:t.handleKeyDown,
            onBlur:t.handleBlur,
            onCompositionStart:t.handleCompositionStart,
            onCompositionEnd:t.handleCompositionEnd
          }),t.isOpened()&&{
            role:"combobox",
            "aria-controls":t.uuidSuggestionsOverlay,
            "aria-expanded":!0,
            "aria-autocomplete":"list",
            "aria-haspopup":"listbox",
            "aria-activedescendant":es(t.uuidSuggestionsOverlay,t.state.focusIndex)
          })
        }),
        c(o(t),"renderControl",function(){
          var e=t.props,
          n=e.singleLine,
          u=e.style,
          r=t.getInputProps();
          return f.createElement("div",u("control"),t.renderHighlighter(),n?t.renderInput(r):t.renderTextarea(r))
        }),
        c(o(t),"renderInput",function(e){
          return f.createElement("input",r({
            type:"text",
            ref:t.setInputRef
          },e))
        }),
        c(o(t),"renderTextarea",function(e){
          return f.createElement("textarea",r({
            ref:t.setInputRef
          },e))
        }),
        c(o(t),"setInputRef",function(e){
          t.inputElement=e;
          var n=t.props.inputRef;
          "function"==typeof n?n(e):n&&(n.current=e)
        }),
        c(o(t),"setSuggestionsElement",function(e){
          t.suggestionsElement=e
        }),
        c(o(t),"renderSuggestionsOverlay",function(){
          if(!ev(t.state.selectionStart))return null;
          var e=t.state.suggestionsPosition,
          n=e.position,
          u=e.left,
          r=e.top,
          o=e.right,
          i=f.createElement(eB,{
            id:t.uuidSuggestionsOverlay,
            style:t.props.style("suggestions"),
            position:n,
            left:u,
            top:r,
            right:o,
            focusIndex:t.state.focusIndex,
            scrollFocusedIntoView:t.state.scrollFocusedIntoView,
            containerRef:t.setSuggestionsElement,
            suggestions:t.state.suggestions,
            customSuggestionsContainer:t.props.customSuggestionsContainer,
            onSelect:t.addMention,
            onMouseDown:t.handleSuggestionsMouseDown,
            onMouseEnter:t.handleSuggestionsMouseEnter,
            isLoading:t.isLoading(),
            isOpened:t.isOpened(),
            ignoreAccents:t.props.ignoreAccents,
            a11ySuggestionsListLabel:t.props.a11ySuggestionsListLabel
          },t.props.children);
          return t.props.suggestionsPortalHost?K.createPortal(i,t.props.suggestionsPortalHost):i
        }),
        c(o(t),"renderHighlighter",function(){
          var e=t.state,
          n=e.selectionStart,
          u=e.selectionEnd,
          r=t.props,
          o=r.singleLine,
          i=r.children,
          s=r.value,
          a=r.style;
          return f.createElement(eA,{
            containerRef:t.setHighlighterElement,
            style:a("highlighter"),
            value:s,
            singleLine:o,
            selectionStart:n,
            selectionEnd:u,
            onCaretPositionChange:t.handleCaretPositionChange
          },i)
        }),
        c(o(t),"setHighlighterElement",function(e){
          t.highlighterElement=e
        }),
        c(o(t),"handleCaretPositionChange",function(e){
          t.setState({
            caretPosition:e
          })
        }),
        c(o(t),"getPlainText",function(){
          return et(t.props.value||"",ef(t.props.children))
        }),
        c(o(t),"executeOnChange",function(e){
          for(var n,u,r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];
          return t.props.onChange?(n=t.props).onChange.apply(n,[e].concat(o)):t.props.valueLink?(u=t.props.valueLink).requestChange.apply(u,[e.target.value].concat(o)):void 0
        }),
        c(o(t),"handleChange",function(e){
          if(eP=!1,!document.documentMode||(document.activeElement&&document.activeElement.contentDocument||document).activeElement===e.target){
            var n=t.props.value||"",
            u=ef(t.props.children),
            r=e.target.value,
            o=er(n,r,{
              selectionStartBefore:t.state.selectionStart,
              selectionEndBefore:t.state.selectionEnd,
              selectionEndAfter:e.target.selectionEnd
            },u);
            r=et(o,u);
            var i=e.target.selectionStart,
            s=e.target.selectionEnd,
            a=!1,
            l=eo(n,u,i);
            void 0!==l&&t.state.selectionEnd>l&&(s=i=l+(e.nativeEvent.data?e.nativeEvent.data.length:0),a=!0),
            t.setState({
              selectionStart:i,
              selectionEnd:s,
              setSelectionAfterMentionChange:a
            });
            var c=ei(o,u);
            t.executeOnChange({
              target:{
                value:o
              }
            },o,r,c)
          }
        }),
        c(o(t),"handleSelect",function(e){
          if(t.setState({
            selectionStart:e.target.selectionStart,
            selectionEnd:e.target.selectionEnd
          }),!eP){
            var n=t.inputElement;
            e.target.selectionStart===e.target.selectionEnd?t.updateMentionsQueries(n.value,e.target.selectionStart):t.clearSuggestions(),
            t.updateHighlighterScroll(),
            t.props.onSelect(e)
          }
        }),
        c(o(t),"handleKeyDown",function(e){
          if(0===ea(t.state.suggestions)||!t.suggestionsElement){
            t.props.onKeyDown(e);
            return
          }
          switch(Object.values(ej).indexOf(e.keyCode)>=0&&(e.preventDefault(),e.stopPropagation()),e.keyCode){
            case ej.ESC:t.clearSuggestions();
            return;
            case ej.DOWN:t.shiftFocus(1);
            return;
            case ej.UP:t.shiftFocus(-1);
            return;
            case ej.RETURN:case ej.TAB:t.selectFocused();
            return;
            default:return
          }
        }),
        c(o(t),"shiftFocus",function(e){
          var n=ea(t.state.suggestions);
          t.setState({
            focusIndex:(n+t.state.focusIndex+e)%n,
            scrollFocusedIntoView:!0
          })
        }),
        c(o(t),"selectFocused",function(){
          var e=t.state,
          n=e.suggestions,
          r=e.focusIndex,
          o=Object.values(n).reduce(function(e,t){
            var n=t.results,
            r=t.queryInfo;
            return[].concat(u(e),u(n.map(function(e){
              return{
                result:e,
                queryInfo:r
              }
            })))
          },[])[r],
          i=o.result,
          s=o.queryInfo;
          t.addMention(i,s),
          t.setState({
            focusIndex:0
          })
        }),
        c(o(t),"handleBlur",function(e){
          var n=t._suggestionsMouseDown;
          t._suggestionsMouseDown=!1,
          n||t.setState({
            selectionStart:null,
            selectionEnd:null
          }),
          window.setTimeout(function(){
            t.updateHighlighterScroll()
          },1),
          t.props.onBlur(e,n)
        }),
        c(o(t),"handleSuggestionsMouseDown",function(e){
          t._suggestionsMouseDown=!0
        }),
        c(o(t),"handleSuggestionsMouseEnter",function(e){
          t.setState({
            focusIndex:e,
            scrollFocusedIntoView:!1
          })
        }),
        c(o(t),"updateSuggestionsPosition",function(){
          var e=t.state.caretPosition,
          n=t.props,
          u=n.suggestionsPortalHost,
          r=n.allowSuggestionsAboveCursor,
          o=n.forceSuggestionsAboveCursor;
          if(e&&t.suggestionsElement){
            var i=t.suggestionsElement,
            s=t.highlighterElement,
            a=s.getBoundingClientRect(),
            l=eI(s,"font-size"),
            c={
              left:a.left+e.left,
              top:a.top+e.top+l
            },
            f=Math.max(document.documentElement.clientHeight,window.innerHeight||0);
            if(i){
              var g={};
              if(u){
                g.position="fixed";
                var p=c.left,
                d=c.top;
                p-=eI(i,"margin-left"),
                d-=eI(i,"margin-top"),
                p-=s.scrollLeft,
                d-=s.scrollTop;
                var E=Math.max(document.documentElement.clientWidth,window.innerWidth||0);
                p+i.offsetWidth>E?g.left=Math.max(0,E-i.offsetWidth):g.left=p,
                r&&d+i.offsetHeight>f&&i.offsetHeight<d-l||o?g.top=Math.max(0,d-i.offsetHeight-l):g.top=d
              }
              else{
                var h=e.left-s.scrollLeft,
                v=e.top-s.scrollTop;
                h+i.offsetWidth>t.containerElement.offsetWidth?g.right=0:g.left=h,
                r&&c.top-s.scrollTop+i.offsetHeight>f&&i.offsetHeight<a.top-l-s.scrollTop||o?g.top=v-i.offsetHeight-l:g.top=v
              }(g.left!==t.state.suggestionsPosition.left||g.top!==t.state.suggestionsPosition.top||g.position!==t.state.suggestionsPosition.position)&&t.setState({
                suggestionsPosition:g
              })
            }
          }
        }),
        c(o(t),"updateHighlighterScroll",function(){
          var e=t.inputElement,
          n=t.highlighterElement;
          e&&n&&(n.scrollLeft=e.scrollLeft,n.scrollTop=e.scrollTop,n.height=e.height)
        }),
        c(o(t),"handleCompositionStart",function(){
          eP=!0
        }),
        c(o(t),"handleCompositionEnd",function(){
          eP=!1
        }),
        c(o(t),"setSelection",function(e,n){
          if(null!==e&&null!==n){
            var u=t.inputElement;
            if(u.setSelectionRange)u.setSelectionRange(e,n);
            else if(u.createTextRange){
              var r=u.createTextRange();
              r.collapse(!0),
              r.moveEnd("character",n),
              r.moveStart("character",e),
              r.select()
            }
          }
        }),
        c(o(t),"updateMentionsQueries",function(e,n){
          t._queryId++,
          t.suggestions={},
          t.setState({
            suggestions:{}
          });
          var u=t.props.value||"",
          r=t.props.children,
          o=ef(r),
          i=en(u,o,n,"NULL");
          if(null!==i){
            var s=el(u.substring(0,i),o),
            a=e.substring(s,n);
            f.Children.forEach(r,function(n,u){
              if(n){
                var r=eT(n.props.trigger,t.props),
                o=a.match(r);
                if(o){
                  var i=s+a.indexOf(o[1],o.index);
                  t.queryData(o[2],u,i,i+o[1].length,e)
                }
              }
            })
          }
        }),
        c(o(t),"clearSuggestions",function(){
          t._queryId++,
          t.suggestions={},
          t.setState({
            suggestions:{},
            focusIndex:0
          })
        }),
        c(o(t),"queryData",function(e,n,u,r,o){
          var i,
          s=t.props,
          a=s.children,
          l=s.ignoreAccents,
          c=((i=f.Children.toArray(a)[n].props.data)instanceof Array?function(e,t){
            for(var n=[],u=0,r=i.length;u<r;++u)eh(i[u].display||i[u].id,e,l)>=0&&n.push(i[u]);
            return n
          }:i)(e,t.updateSuggestions.bind(null,t._queryId,n,e,u,r,o));
          c instanceof Array&&t.updateSuggestions(t._queryId,n,e,u,r,o,c)
        }),
        c(o(t),"updateSuggestions",function(e,n,u,r,o,i,s){
          if(e===t._queryId){
            t.suggestions=eR(eR({},t.suggestions),{},c({},n,{
              queryInfo:{
                childIndex:n,
                query:u,
                querySequenceStart:r,
                querySequenceEnd:o,
                plainTextValue:i
              },
              results:s
            }));
            var a=t.state.focusIndex,
            l=ea(t.suggestions);
            t.setState({
              suggestions:t.suggestions,
              focusIndex:a>=l?Math.max(l-1,0):a
            })
          }
        }),
        c(o(t),"addMention",function(e,n){
          var u=e.id,
          r=e.display,
          o=n.childIndex,
          i=n.querySequenceStart,
          s=n.querySequenceEnd,
          a=n.plainTextValue,
          l=t.props.value||"",
          c=ef(t.props.children),
          g=f.Children.toArray(t.props.children)[o].props,
          p=g.markup,
          d=g.displayTransform,
          E=g.appendSpaceOnAdd,
          h=g.onAdd,
          v=en(l,c,i,"START"),
          b=v+s-i,
          m=p.replace(G,u).replace(Q,r);
          E&&(m+=" ");
          var y=eu(l,v,b,m);
          t.inputElement.focus();
          var C=d(u,r);
          E&&(C+=" ");
          var A=i+C.length;
          t.setState({
            selectionStart:A,
            selectionEnd:A,
            setSelectionAfterMentionChange:!0
          });
          var F=ei(y,c),
          O=eu(a,i,s,C);
          t.executeOnChange({
            target:{
              value:y
            }
          },y,O,F),
          h&&h(u,r,v,b),
          t.clearSuggestions()
        }),
        c(o(t),"isLoading",function(){
          var e=!1;
          return f.Children.forEach(t.props.children,function(t){
            e=e||t&&t.props.isLoading
          }),
          e
        }),
        c(o(t),"isOpened",function(){
          return ev(t.state.selectionStart)&&(0!==ea(t.state.suggestions)||t.isLoading())
        }),
        c(o(t),"_queryId",0),
        t.suggestions={},
        t.uuidSuggestionsOverlay=Math.random().toString(16).substring(2),
        t.handleCopy=t.handleCopy.bind(o(t)),
        t.handleCut=t.handleCut.bind(o(t)),
        t.handlePaste=t.handlePaste.bind(o(t)),
        t.state={
          focusIndex:0,
          selectionStart:null,
          selectionEnd:null,
          suggestions:{},
          caretPosition:null,
          suggestionsPosition:{}
        },
        t
      }
      return n=[{
        key:"componentDidMount",
        value:function(){
          document.addEventListener("copy",this.handleCopy),
          document.addEventListener("cut",this.handleCut),
          document.addEventListener("paste",this.handlePaste),
          this.updateSuggestionsPosition()
        }
      },{
        key:"componentDidUpdate",
        value:function(e,t){
          t.suggestionsPosition===this.state.suggestionsPosition&&this.updateSuggestionsPosition(),
          this.state.setSelectionAfterMentionChange&&(this.setState({
            setSelectionAfterMentionChange:!1
          }),this.setSelection(this.state.selectionStart,this.state.selectionEnd))
        }
      },{
        key:"componentWillUnmount",
        value:function(){
          document.removeEventListener("copy",this.handleCopy),
          document.removeEventListener("cut",this.handleCut),
          document.removeEventListener("paste",this.handlePaste)
        }
      },{
        key:"render",
        value:function(){
          return f.createElement("div",r({
            ref:this.setContainerElement
          },this.props.style),this.renderControl(),this.renderSuggestionsOverlay())
        }
      },{
        key:"handlePaste",
        value:function(e){
          if(e.target===this.inputElement&&this.supportsClipboardActions(e)){
            e.preventDefault();
            var t=this.state,
            n=t.selectionStart,
            u=t.selectionEnd,
            r=this.props,
            o=r.value,
            i=ef(r.children),
            s=en(o,i,n,"START"),
            a=en(o,i,u,"END"),
            l=e.clipboardData.getData("text/react-mentions"),
            c=e.clipboardData.getData("text/plain"),
            f=eu(o,s,a,l||c).replace(/\r/g,""),
            g=et(f,i),
            p={
              target:eR(eR({},e.target),{},{
                value:f
              })
            };
            this.executeOnChange(p,f,g,ei(f,i));
            var d=(eo(o,i,n)||n)+et(l||c,i).length;
            this.setSelection(d,d)
          }
        }
      },{
        key:"saveSelectionToClipboard",
        value:function(e){
          var t=this.inputElement.selectionStart,
          n=this.inputElement.selectionEnd,
          u=this.props,
          r=u.children,
          o=u.value,
          i=ef(r),
          s=en(o,i,t,"START"),
          a=en(o,i,n,"END");
          e.clipboardData.setData("text/plain",e.target.value.slice(t,n)),
          e.clipboardData.setData("text/react-mentions",o.slice(s,a))
        }
      },{
        key:"supportsClipboardActions",
        value:function(e){
          return!!e.clipboardData
        }
      },{
        key:"handleCopy",
        value:function(e){
          e.target===this.inputElement&&this.supportsClipboardActions(e)&&(e.preventDefault(),this.saveSelectionToClipboard(e))
        }
      },{
        key:"handleCut",
        value:function(e){
          if(e.target===this.inputElement&&this.supportsClipboardActions(e)){
            e.preventDefault(),
            this.saveSelectionToClipboard(e);
            var t=this.state,
            n=t.selectionStart,
            u=t.selectionEnd,
            r=this.props,
            o=r.children,
            i=r.value,
            s=ef(o),
            a=en(i,s,n,"START"),
            l=en(i,s,u,"END"),
            c=[i.slice(0,a),i.slice(l)].join(""),
            f=et(c,s),
            g={
              target:eR(eR({},e.target),{},{
                value:f
              })
            };
            this.executeOnChange(g,c,f,ei(i,s))
          }
        }
      }],
      function(e,t){
        for(var n=0;n<t.length;n++){
          var u=t[n];
          u.enumerable=u.enumerable||!1,
          u.configurable=!0,
          "value"in u&&(u.writable=!0),
          Object.defineProperty(e,u.key,u)
        }
      }(g.prototype,n),
      g
    }(f.Component);
    c(ek,"propTypes",eN),
    c(ek,"defaultProps",{
      ignoreAccents:!1,
      singleLine:!1,
      allowSuggestionsAboveCursor:!1,
      onKeyDown:function(){
        return null
      },
      onSelect:function(){
        return null
      },
      onBlur:function(){
        return null
      }
    });
    var eI=function(e,t){
      var n=parseFloat(window.getComputedStyle(e,null).getPropertyValue(t));
      return isFinite(n)?n:0
    },
    eL=ey({
      position:"relative",
      overflowY:"visible",
      input:{
        display:"block",
        width:"100%",
        position:"absolute",
        margin:0,
        top:0,
        left:0,
        boxSizing:"border-box",
        backgroundColor:"transparent",
        fontFamily:"inherit",
        fontSize:"inherit",
        letterSpacing:"inherit"
      },
      "&multiLine":{
        input:eR({
          height:"100%",
          bottom:0,
          overflow:"hidden",
          resize:"none"
        },"undefined"!=typeof navigator&&/iPhone|iPad|iPod/i.test(navigator.userAgent)?{
          marginTop:1,
          marginLeft:-3
        }:null)
      }
    },function(e){
      var t=e.singleLine;
      return{
        "&singleLine":t,
        "&multiLine":!t
      }
    })(ek),
    e_={
      fontWeight:"inherit"
    },
    eM=function(e){
      var t=e.display,
      n=q(e_,{
        style:e.style,
        className:e.className,
        classNames:e.classNames
      });
      return f.createElement("strong",n,t)
    };
    eM.propTypes={
      onAdd:Z().func,
      onRemove:Z().func,
      renderSuggestion:Z().func,
      trigger:Z().oneOfType([Z().string,Z().instanceOf(RegExp)]),
      markup:Z().string,
      displayTransform:Z().func,
      allowSpaceInQuery:Z().bool,
      isLoading:Z().bool
    },
    eM.defaultProps={
      trigger:"@",
      markup:"@[__display__](__id__)",
      displayTransform:function(e,t){
        return t||e
      },
      onAdd:function(){
        return null
      },
      onRemove:function(){
        return null
      },
      renderSuggestion:null,
      isLoading:!1,
      appendSpaceOnAdd:!1
    }
  },
  4368:function(e,t,n){
    "use strict";
    n.d(t,{
      c:function(){
        return p
      }
    });
    var u,
    r,
    o=n(67294),
    i=Object.prototype.hasOwnProperty,
    s=function(e){
      return function(t){
        return Promise.resolve(e.fn.apply(e,t.data[0])).then(function(t){
          var n="auto"===e.transferable&&("ArrayBuffer"in self&&t instanceof ArrayBuffer||"MessagePort"in self&&t instanceof MessagePort||"ImageBitmap"in self&&t instanceof ImageBitmap||"OffscreenCanvas"in self&&t instanceof OffscreenCanvas)?[t]:[];
          postMessage(["SUCCESS",t],n)
        }).catch(function(e){
          postMessage(["ERROR",e])
        })
      }
    },
    a=function(e,t,n){
      var u=new Blob(["\n    "+(0===t.length?"":"importScripts("+t.map(function(e){
        return"'"+e+"'"
      }).toString()+")")+";\n    onmessage=("+s+")({\n      fn: ("+e+"),\n      transferable: '"+n+"'\n    })\n  "],{
        type:"text/javascript"
      });
      return URL.createObjectURL(u)
    };
    (l=r||(r={})).PENDING="PENDING",
    l.SUCCESS="SUCCESS",
    l.RUNNING="RUNNING",
    l.ERROR="ERROR",
    l.TIMEOUT_EXPIRED="TIMEOUT_EXPIRED";
    var l,
    c,
    f=r;
    (u=c||(c={})).AUTO="auto",
    u.NONE="none";
    var g={
      timeout:void 0,
      remoteDependencies:[],
      autoTerminate:!0,
      transferable:c.AUTO
    },
    p=function(e,t){
      void 0===t&&(t=g);
      var n,
      u,
      r,
      s=o.useState(f.PENDING),
      l=s[0],
      p=s[1],
      d=o.useRef(),
      E=o.useRef(!1),
      h=o.useRef({}),
      v=o.useRef(),
      b=o.useCallback(function(e){
        E.current=e===f.RUNNING,
        p(e)
      },[]),
      m=o.useCallback(function(){
        var e;
        null!==(e=d.current)&&void 0!==e&&e._url&&(d.current.terminate(),URL.revokeObjectURL(d.current._url),h.current={},d.current=void 0,window.clearTimeout(v.current))
      },[]),
      y=o.useCallback(function(e){
        (null!=t.autoTerminate?t.autoTerminate:g.autoTerminate)&&m(),
        b(e)
      },[t.autoTerminate,m,b]),
      C=(n=function(){
        var n=t.remoteDependencies,
        u=t.timeout,
        r=void 0===u?g.timeout:u,
        o=t.transferable,
        i=a(e,void 0===n?g.remoteDependencies:n,void 0===o?g.transferable:o),
        s=new Worker(i);
        return s._url=i,
        s.onmessage=function(e){
          var t,
          n,
          u,
          r,
          o=e.data,
          i=o[1];
          o[0]===f.SUCCESS?(null===(t=(n=h.current).resolve)||void 0===t||t.call(n,i),y(f.SUCCESS)):(null===(u=(r=h.current).reject)||void 0===u||u.call(r,i),y(f.ERROR))
        },
        s.onerror=function(e){
          var t,
          n;
          null===(t=(n=h.current).reject)||void 0===t||t.call(n,e),
          y(f.ERROR)
        },
        r&&(v.current=window.setTimeout(function(){
          m(),
          b(f.TIMEOUT_EXPIRED)
        },r)),
        s
      },function e(t,n){
        var u,
        r;
        if(t===n)return!0;
        if(t&&n&&(u=t.constructor)===n.constructor){
          if(u===Date)return t.getTime()===n.getTime();
          if(u===RegExp)return t.toString()===n.toString();
          if(u===Array){
            if((r=t.length)===n.length)for(;r--&&e(t[r],n[r]););
            return -1===r
          }
          if(!u||"object"==typeof t){
            for(u in r=0,t)if(i.call(t,u)&&++r&&!i.call(n,u)||!(u in n)||!e(t[u],n[u]))return!1;
            return Object.keys(n).length===r
          }
        }
        return t!=t&&n!=n
      }((r=o.useRef(u=[e,t,m])).current,u)||(r.current=u),o.useCallback(n,r.current)),
      A=o.useCallback(function(){
        var e=[].slice.call(arguments),
        n=t.transferable,
        u=void 0===n?g.transferable:n;
        return new Promise(function(t,n){
          h.current=((r={}).resolve=t,r.reject=n,r);
          var r,
          o,
          i=u===c.AUTO?e.filter(function(e){
            return"ArrayBuffer"in window&&e instanceof ArrayBuffer||"MessagePort"in window&&e instanceof MessagePort||"ImageBitmap"in window&&e instanceof ImageBitmap||"OffscreenCanvas"in window&&e instanceof OffscreenCanvas
          }):[];
          null===(o=d.current)||void 0===o||o.postMessage([[].concat(e)],i),
          b(f.RUNNING)
        })
      },[b]),
      F=o.useCallback(function(){
        var e=null!=t.autoTerminate?t.autoTerminate:g.autoTerminate;
        return E.current?(console.error("[useWorker] You can only run one instance of the worker at a time, if you want to run more than one in parallel, create another instance with the hook useWorker(). Read more: https://github.com/alewin/useWorker"),Promise.reject()):(!e&&d.current||(d.current=C()),A.apply(void 0,[].slice.call(arguments)))
      },[t.autoTerminate,C,A]);
      return o.useEffect(function(){
        return function(){
          m()
        }
      },[m]),
      [F,{
        status:l,
        kill:m
      }]
    }
  },
  78720:function(e,t,n){
    "use strict";
    n.d(t,{
      o:function(){
        return E
      }
    });
    var u,
    r=n(67294);
    function o(){
      return(o=Object.assign||function(e){
        for(var t=1;t<arguments.length;t++){
          var n=arguments[t];
          for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])
        }
        return e
      }).apply(this,arguments)
    }
    var i=["bottom","height","left","right","top","width"],
    s=new Map,
    a=function e(){
      var t=[];
      s.forEach(function(e,n){
        var u,
        r,
        o=n.getBoundingClientRect();
        u=o,
        r=e.rect,
        void 0===u&&(u={}),
        void 0===r&&(r={}),
        i.some(function(e){
          return u[e]!==r[e]
        })&&(e.rect=o,t.push(e))
      }),
      t.forEach(function(e){
        e.callbacks.forEach(function(t){
          return t(e.rect)
        })
      }),
      u=window.requestAnimationFrame(e)
    },
    l="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;
    function c(e,t){
      var n=t.rect;
      return e.height!==n.height||e.width!==n.width?n:e
    }
    var f=function(){
      return 50
    },
    g=function(e){
      return e
    },
    p=function(e,t){
      return e[t?"offsetWidth":"offsetHeight"]
    },
    d=function(e){
      for(var t=Math.max(e.start-e.overscan,0),n=Math.min(e.end+e.overscan,e.size-1),u=[],r=t;r<=n;r++)u.push(r);
      return u
    };
    function E(e){
      var t,
      n=e.size,
      i=void 0===n?0:n,
      E=e.estimateSize,
      v=void 0===E?f:E,
      b=e.overscan,
      m=void 0===b?1:b,
      y=e.paddingStart,
      C=void 0===y?0:y,
      A=e.paddingEnd,
      F=e.parentRef,
      O=e.horizontal,
      S=e.scrollToFn,
      D=e.useObserver,
      w=e.initialRect,
      B=e.onScrollElement,
      x=e.scrollOffsetFn,
      R=e.keyExtractor,
      T=void 0===R?g:R,
      j=e.measureSize,
      P=void 0===j?p:j,
      N=e.rangeExtractor,
      k=void 0===N?d:N,
      I=O?"width":"height",
      L=O?"scrollLeft":"scrollTop",
      _=r.useRef({
        scrollOffset:0,
        measurements:[]
      }),
      M=r.useState(0),
      q=M[0],
      U=M[1];
      _.current.scrollOffset=q;
      var z=(D||function(e,t){
        void 0===t&&(t={
          width:0,
          height:0
        });
        var n=r.useState(e.current),
        o=n[0],
        i=n[1],
        f=r.useReducer(c,t),
        g=f[0],
        p=f[1],
        d=r.useRef(!1);
        return l(function(){
          e.current!==o&&i(e.current)
        }),
        l(function(){
          o&&!d.current&&(d.current=!0,p({
            rect:o.getBoundingClientRect()
          }))
        },[o]),
        r.useEffect(function(){
          if(o){
            var e,
            t=(e=function(e){
              p({
                rect:e
              })
            },{
              observe:function(){
                var t=0===s.size;
                s.has(o)?s.get(o).callbacks.push(e):s.set(o,{
                  rect:void 0,
                  hasRectChanged:!1,
                  callbacks:[e]
                }),
                t&&a()
              },
              unobserve:function(){
                var t=s.get(o);
                if(t){
                  var n=t.callbacks.indexOf(e);
                  n>=0&&t.callbacks.splice(n,1),
                  t.callbacks.length||s.delete(o),
                  s.size||cancelAnimationFrame(u)
                }
              }
            });
            return t.observe(),
            function(){
              t.unobserve()
            }
          }
        },[o]),
        g
      })(F,w)[I];
      _.current.outerSize=z;
      var H=r.useCallback(function(e){
        F.current&&(F.current[L]=e)
      },[F,L]),
      W=S||H;
      S=r.useCallback(function(e){
        W(e,H)
      },[H,W]);
      var Z=r.useState({}),
      K=Z[0],
      V=Z[1],
      G=r.useCallback(function(){
        return V({})
      },[]),
      Q=r.useRef([]),
      Y=r.useMemo(function(){
        var e=Q.current.length>0?Math.min.apply(Math,Q.current):0;
        Q.current=[];
        for(var t=_.current.measurements.slice(0,e),n=e;n<i;n++){
          var u=T(n),
          r=K[u],
          o=t[n-1]?t[n-1].end:C,
          s="number"==typeof r?r:v(n),
          a=o+s;
          t[n]={
            index:n,
            start:o,
            size:s,
            end:a,
            key:u
          }
        }
        return t
      },[v,K,C,i,T]),
      X=((null==(t=Y[i-1])?void 0:t.end)||C)+(void 0===A?0:A);
      _.current.measurements=Y,
      _.current.totalSize=X;
      var $=B?B.current:F.current,
      J=r.useRef(x);
      J.current=x,
      l(function(){
        if(!$){
          U(0);
          return
        }
        var e=function(e){
          U(J.current?J.current(e):$[L])
        };
        return e(),
        $.addEventListener("scroll",e,{
          capture:!1,
          passive:!0
        }),
        function(){
          $.removeEventListener("scroll",e)
        }
      },[$,L]);
      var ee=function(e){
        for(var t=e.measurements,n=e.outerSize,u=e.scrollOffset,r=t.length-1,o=h(0,r,function(e){
          return t[e].start
        },u),i=o;i<r&&t[i].end<u+n;)i++;
        return{
          start:o,
          end:i
        }
      }(_.current),
      et=ee.start,
      en=ee.end,
      eu=r.useMemo(function(){
        return k({
          start:et,
          end:en,
          overscan:m,
          size:Y.length
        })
      },[et,en,m,Y.length,k]),
      er=r.useRef(P);
      er.current=P;
      var eo=r.useMemo(function(){
        for(var e=[],t=0,n=eu.length;t<n;t++)!function(t,n){
          var u=eu[t],
          r=Y[u],
          i=o(o({},r),{},{
            measureRef:function(e){
              if(e){
                var t=er.current(e,O);
                if(t!==i.size){
                  var n=_.current.scrollOffset;
                  i.start<n&&H(n+(t-i.size)),
                  Q.current.push(u),
                  V(function(e){
                    var n;
                    return o(o({},e),{},((n={})[i.key]=t,n))
                  })
                }
              }
            }
          });
          e.push(i)
        }(t);
        return e
      },[eu,H,O,Y]),
      ei=r.useRef(!1);
      l(function(){
        ei.current&&V({}),
        ei.current=!0
      },[v]);
      var es=r.useCallback(function(e,t){
        var n=(void 0===t?{}:t).align,
        u=void 0===n?"start":n,
        r=_.current,
        o=r.scrollOffset,
        i=r.outerSize;
        "auto"===u&&(u=e<=o?"start":e>=o+i?"end":"start"),
        "start"===u?S(e):"end"===u?S(e-i):"center"===u&&S(e-i/2)
      },[S]),
      ea=r.useCallback(function(e,t){
        var n=void 0===t?{}:t,
        u=n.align,
        r=void 0===u?"auto":u,
        s=function(e,t){
          if(null==e)return{};
          var n,
          u,
          r={},
          o=Object.keys(e);
          for(u=0;u<o.length;u++)t.indexOf(n=o[u])>=0||(r[n]=e[n]);
          return r
        }(n,["align"]),
        a=_.current,
        l=a.measurements,
        c=a.scrollOffset,
        f=a.outerSize,
        g=l[Math.max(0,Math.min(e,i-1))];
        if(g){
          if("auto"===r){
            if(g.end>=c+f)r="end";
            else{
              if(!(g.start<=c))return;
              r="start"
            }
          }
          es("center"===r?g.start+g.size/2:"end"===r?g.end:g.start,o({
            align:r
          },s))
        }
      },[es,i]);
      return{
        virtualItems:eo,
        totalSize:X,
        scrollToOffset:es,
        scrollToIndex:r.useCallback(function(){
          for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];
          ea.apply(void 0,t),
          requestAnimationFrame(function(){
            ea.apply(void 0,t)
          })
        },[ea]),
        measure:G
      }
    }
    var h=function(e,t,n,u){
      for(;e<=t;){
        var r=(e+t)/2|0,
        o=n(r);
        if(o<u)e=r+1;
        else{
          if(!(o>u))return r;
          t=r-1
        }
      }
      return e>0?e-1:0
    }
  }
}]);