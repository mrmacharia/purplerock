(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"/eQj":function(e,t){e.exports="/_next/static/components/home/images/0b870ade15b1833a919fbd43438d68c2.jpg"},"68c3":function(e,t){e.exports="/_next/static/components/home/images/6529ab0d74bba01de8a9a3a4ea078ba7.png"},"8ZFP":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("TSYQ"),c=a.n(r);t.a=function(e){var t=c()("part--layout-overview",{"full-height":e.fullHeight});return l.a.createElement("div",{className:t},l.a.createElement("div",{className:"panel",style:{backgroundColor:e.bgColor}},l.a.createElement("div",{className:"title"},l.a.createElement("span",{className:"bar",style:{background:"linear-gradient(90deg, "+e.gradient+")"}}),l.a.createElement("h4",null,e.title)),l.a.createElement("div",{className:"content"},e.children)))}},Dovu:function(e,t){e.exports="/_next/static/components/home/images/8944ab90c1b344fbb8e08c0f8f2d9f18.jpg"},"E/Zn":function(e,t,a){"use strict";var n=a("0iUn"),l=a("sLSF"),r=a("MI3g"),c=a("a7VT"),i=a("AT/M"),o=a("Tit0"),s=a("vYYK"),u=a("q1tI"),d=a.n(u),m=a("/MKj"),f=a("EgnG"),p=a("uuth"),g=a("mTMe"),b=function(e){function t(e){var a;return Object(n.default)(this,t),a=Object(r.default)(this,Object(c.default)(t).call(this,e)),Object(s.a)(Object(i.default)(a),"componentDidMount",function(){a.setState({wrapped:!0})}),Object(s.a)(Object(i.default)(a),"componentDidUpdate",function(e,t){!t.wrapped&&a.state.wrapped&&(a.animation=Object(f.a)({targets:a.letters.current.querySelectorAll(".letter"),opacity:[{value:[0,1],easing:"linear"}],translateY:["150%",0],duration:2e3,easing:"easeOutCirc",delay:f.a.stagger(25,{from:"center"})}),a.animation.seek(0)),!e.loaded&&a.props.loaded&&(a.animation.pause(),a.animation.seek(0),a.animation.play())}),a.state={wrapped:!1,visible:!1},a.letters=d.a.createRef(),a.chars=Object(g.c)(a.props.children),a.animation=null,a}return Object(o.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(p.a,{onEnter:function(){e.animation.play()},onLeave:function(){e.animation.pause(),e.animation.seek(0)}},d.a.createElement("span",{ref:this.letters},this.state.wrapped?this.chars:void 0))}}]),t}(d.a.Component);t.a=Object(m.b)(function(e){return e})(b)},EXQy:function(e,t){e.exports="/_next/static/components/home/images/823287b982280e835f8c7cc1bed3bd2e.jpg"},LxEq:function(e,t){e.exports="/_next/static/components/home/images/86bd30a41026912185551c18420e8105.png"},NkLn:function(e,t,a){"use strict";var n=a("0iUn"),l=a("sLSF"),r=a("MI3g"),c=a("a7VT"),i=a("AT/M"),o=a("Tit0"),s=a("vYYK"),u=a("q1tI"),d=a.n(u),m=a("EgnG"),f=a("TSYQ"),p=a.n(f),g=a("rdxz"),b=a("+qya"),h=function(e){function t(e){var a;return Object(n.default)(this,t),a=Object(r.default)(this,Object(c.default)(t).call(this,e)),Object(s.a)(Object(i.default)(a),"_handleClick",function(){Object(m.a)({targets:".video-player .placeholder",opacity:0,duration:1e3,easing:"linear",complete:function(){a.vidRef.current.play(),a.setState({playing:!0})}}),a.hover=Object(m.a)({targets:".play-button svg stop",stopColor:"#ffffff",easing:"easeInOutQuad",delay:m.a.stagger(50,{from:3}),duration:150}),Object(m.a)({targets:".play-button",opacity:0,duration:500,delay:150,easing:"linear"})}),Object(s.a)(Object(i.default)(a),"_handleMouseEnter",function(){a.hover=Object(m.a)({targets:".play-button svg stop",stopColor:function(e,t){return a.gradient[t]},easing:"easeInOutQuad",delay:m.a.stagger(50,{from:3}),duration:250}),Object(m.a)({targets:".video-player .placeholder",opacity:.25,duration:250,easing:"easeInOutQuad"})}),Object(s.a)(Object(i.default)(a),"_handleMouseLeave",function(){a.hover.pause(),a.hover=Object(m.a)({targets:".play-button svg stop",stopColor:"#242526",easing:"easeInOutQuad",delay:m.a.stagger(50,{from:5}),duration:200}),Object(m.a)({targets:".video-player .placeholder",opacity:1,duration:250,easing:"easeInOutQuad"})}),a.state={playing:!1},a.vidRef=d.a.createRef(),a.hover=null,a.gradient=[g.a.gradient[0],g.a.gradient[1],g.a.gradient[2],g.a.gradient[3],g.a.gradient[4]],a}return Object(o.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=p()("video",{playing:this.state.playing});return d.a.createElement("div",{className:"video-player"},d.a.createElement("div",{className:"play-button",onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave,onClick:this._handleClick},d.a.createElement("svg",{width:"144",height:"197",viewBox:"0 0 144 197",xmlns:"http://www.w3.org/2000/svg"},d.a.createElement("defs",null,d.a.createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"a"},d.a.createElement("stop",{stopColor:"#2C2D2E",offset:"0%"}),d.a.createElement("stop",{stopColor:"#2C2D2E",offset:"25%"}),d.a.createElement("stop",{stopColor:"#2C2D2E",offset:"50%"}),d.a.createElement("stop",{stopColor:"#2C2D2E",offset:"75%"}),d.a.createElement("stop",{stopColor:"#2C2D2E",offset:"100%"}))),d.a.createElement("path",{d:"M698.3126 4158.8856l75.6933 63.4739c12.0608 10.1138 13.6392 28.0898 3.5254 40.1506a28.5004 28.5004 0 0 1-3.4303 3.4453l-75.6933 64.0381c-12.0166 10.1663-29.9994 8.6663-40.1656-3.3502a28.5 28.5 0 0 1-6.7421-18.4077v-127.512c0-15.7401 12.7599-28.5 28.5-28.5a28.5 28.5 0 0 1 18.3126 6.662z",transform:"translate(-646 -4146)",stroke:"url(#a)",strokeWidth:"12",fill:"none",fillRule:"evenodd"}))),d.a.createElement("div",{className:"cover"}),d.a.createElement("div",{className:"placeholder"},d.a.createElement(b.Parallax,{y:[-10,10]},d.a.createElement("img",{src:this.props.placeholder}))),d.a.createElement("div",{className:e},d.a.createElement("video",{ref:this.vidRef,controls:!0,preload:"true"},d.a.createElement("source",{src:this.props.video,type:"video/mp4"}))))}}]),t}(d.a.Component);t.a=h},RNiq:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),l=a("MI3g"),r=a("a7VT"),c=a("AT/M"),i=a("sLSF"),o=a("Tit0"),s=a("vYYK"),u=a("q1tI"),d=a.n(u),m=a("m/Pd"),f=a.n(m),p=a("UgXd"),g=a.n(p),b=a("/MKj"),h=a("ANjH"),E=a("ZSSH"),v=a("uuth"),O=a("Wld8"),j=a("b+mb"),y=a("8ZFP"),w=a("x96L"),C=a("rdxz"),k=a("EgnG"),N=a("cPts"),I=a("E/Zn"),x=a("mTMe"),M=function(e){function t(e){var a;return Object(n.default)(this,t),a=Object(l.default)(this,Object(r.default)(t).call(this,e)),Object(s.a)(Object(c.default)(a),"componentDidMount",function(){a.chars=Object(x.c)(a.props.children),a.setState({wrapped:!0})}),Object(s.a)(Object(c.default)(a),"componentDidUpdate",function(e,t){!t.wrapped&&a.state.wrapped&&(a.animation=Object(k.a)({targets:a.letters.current.querySelectorAll(".word"),opacity:[{value:[0,1],easing:"linear"}],translateY:[k.a.stagger(["150%","-150%"]),0],duration:2e3,easing:"easeOutCirc",delay:k.a.stagger(200,{from:"center"})}),a.animation.seek(0)),!e.loaded&&a.props.loaded&&(a.animation.pause(),a.animation.seek(0),a.animation.play())}),a.state={wrapped:!1,visible:!1},a.letters=d.a.createRef(),a.chars=[],a.animation=null,a}return Object(o.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(v.a,{onEnter:function(){e.animation.play()},onLeave:function(){e.animation.pause(),e.animation.seek(0)}},d.a.createElement("span",{ref:this.letters,className:"animate--words"},this.state.wrapped?this.chars.map(function(e,t){return e}):void 0))}}]),t}(d.a.Component),S=Object(b.b)(function(e){return e})(M),R=Object(b.b)(function(e){return e},function(e){return{updateUI:Object(h.bindActionCreators)(E.j,e)}})(function(e){return d.a.createElement(v.a,{onEnter:function(){e.updateUI({logoColor:C.a.grayscale.black,navColor:C.a.grayscale.black})}},d.a.createElement("div",{className:"home--intro-wrapper"},d.a.createElement(N.a,null,d.a.createElement("h1",null,d.a.createElement(I.a,null,"We are an independent "),d.a.createElement(S,null,"strategic creative agency "),d.a.createElement(I.a,null,"with technology at our core."))),d.a.createElement("div",{className:"intro-border"})))}),T=a("+qya"),D=a("NkLn"),_=a("nCQj"),L=a.n(_),U=Object(b.b)(function(e){return e},function(e){return{updateUI:Object(h.bindActionCreators)(E.j,e)}})(function(e){return d.a.createElement(v.a,{bottomOffset:"90%",topOffset:"10%",onEnter:function(){e.updateUI({logoColor:C.a.grayscale.black,navColor:C.a.grayscale.black})}},d.a.createElement("div",{className:"part--video"},d.a.createElement("div",{className:"container"},d.a.createElement(D.a,{placeholder:L.a,video:"https://s3.amazonaws.com/cdn.prpl.rs/media/sizzle_supercut.mp4"}))))}),A=a("LxEq"),P=a.n(A),Y=a("68c3"),q=a.n(Y),Q=Object(b.b)(function(e){return e},function(e){return{updateUI:Object(h.bindActionCreators)(E.j,e)}})(function(e){return d.a.createElement(v.a,{onEnter:function(){e.updateUI({logoColor:C.a.grayscale.bg1,navColor:C.a.grayscale.bg1})},bottomOffset:"90%",topOffset:"10%"},d.a.createElement("div",{className:"part--featured-case-study"},d.a.createElement("div",{className:"content-block"},d.a.createElement("h3",null,"Case Study"),d.a.createElement("h2",null,"Field Museum"),d.a.createElement("p",null,"Helping the world’s fourth largest natural ",d.a.createElement("br",null),"history museum find its next evolution."),d.a.createElement(j.a,{url:"/work/field-museum"},d.a.createElement("span",null,"Explore"),d.a.createElement("svg",{width:"44",height:"25",viewBox:"0 0 44 25",xmlns:"http://www.w3.org/2000/svg"},d.a.createElement("path",{d:"M38.5 11l-8-8L33 .5 44 12v1L33 24.5 30.5 22l8-8H0v-3h38.5z",fill:"#000",fillRule:"nonzero"})))),d.a.createElement("div",{className:"content-flow"},d.a.createElement("svg",{className:"background",width:"1544",height:"900",viewBox:"0 0 1544 900",xmlns:"http://www.w3.org/2000/svg"},d.a.createElement("g",{fill:"none",fillRule:"evenodd"},d.a.createElement("circle",{stroke:"#EFA137",strokeWidth:"4",cx:"1302",cy:"900",r:"172"}),d.a.createElement("circle",{fill:"#EFA137",cx:"1499",cy:"501",r:"13"}),d.a.createElement("path",{d:"M1642.2077-49.5436l-60.2805 3.8748c-47.2628 3.038-85.913 38.8138-92.5872 85.7014l-9.0669 63.6952c-2.4593 17.2775 9.553 33.2774 26.8305 35.7368a31.599 31.599 0 0 0 18.8287-3.144c14.2391-7.2743 19.8853-24.7143 12.611-38.9535a28.9518 28.9518 0 0 0-14.1065-13.3218l-33.273-14.6637c-44.881-19.7794-97.4827-4.0898-124.1952 37.0437L1302 206.4683",stroke:"#D64472",strokeWidth:"4"}),d.a.createElement("path",{fill:"#B43B8B",d:"M-111 784.9862L325.5983 668l116.9862 436.5984L5.9862 1221.5847z"}))),d.a.createElement(T.Parallax,{className:"element-holder square",y:[0,-30],tagOuter:"div"},d.a.createElement("svg",{width:"211",height:"211",viewBox:"0 0 211 211",xmlns:"http://www.w3.org/2000/svg"},d.a.createElement("path",{d:"M77.732 2.7321l129.9039 75-75 129.9038-129.9038-75z",stroke:"#EFA137",strokeWidth:"4",fill:"none",fillRule:"evenodd"}))),d.a.createElement(T.Parallax,{className:"element-holder case-study-mobile",y:[0,30],tagOuter:"div"},d.a.createElement("img",{src:P.a})),d.a.createElement(T.Parallax,{className:"element-holder case-study-laptop",y:[35,-20],tagOuter:"div"},d.a.createElement("img",{src:q.a})))))}),F=a("TSYQ"),z=a.n(F),B=a("WEvE"),W=function(e){function t(e){return Object(n.default)(this,t),Object(l.default)(this,Object(r.default)(t).call(this,e))}return Object(o.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"service-lines"},d.a.createElement("div",{className:"grid-line"},d.a.createElement(B.a,{stagger:150},d.a.createElement(H,{line:"Strategy"},d.a.createElement("ul",null,d.a.createElement("li",null,"Research & Data"),d.a.createElement("li",null,"Branding & Positioning"),d.a.createElement("li",null,"Business Consulting"),d.a.createElement("li",null,"Go To Market"),d.a.createElement("li",null,"Innovation"),d.a.createElement("li",null,"SEO / SEM"))),d.a.createElement(H,{line:"Design"},d.a.createElement("ul",null,d.a.createElement("li",null,"User Research & Testing"),d.a.createElement("li",null,"UX Design"),d.a.createElement("li",null,"Visual Design"),d.a.createElement("li",null,"Information Architecture"),d.a.createElement("li",null,"Editorial Design"),d.a.createElement("li",null,"Environmental Design"))),d.a.createElement(H,{line:"Content"},d.a.createElement("ul",null,d.a.createElement("li",null,"Copywriting"),d.a.createElement("li",null,"Social Media"),d.a.createElement("li",null,"Interactive Media"),d.a.createElement("li",null,"Motion Design"),d.a.createElement("li",null,"Illustration"),d.a.createElement("li",null,"Photography & Video"))),d.a.createElement(H,{line:"Technology"},d.a.createElement("ul",null,d.a.createElement("li",null,"Application Development"),d.a.createElement("li",null,"Web Development"),d.a.createElement("li",null,"Enterprise CMS"),d.a.createElement("li",null,"Emerging Tech"),d.a.createElement("li",null,"eCommerce"),d.a.createElement("li",null,"CRM"))))))}}]),t}(d.a.Component),H=function(e){function t(e){var a;return Object(n.default)(this,t),a=Object(l.default)(this,Object(r.default)(t).call(this,e)),Object(s.a)(Object(c.default)(a),"_handleClick",function(){a.setState({open:!a.state.open})}),a.state={open:!1},a}return Object(o.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this,t=z()("line",this.props.line,{open:this.state.open});return d.a.createElement("div",{className:t},d.a.createElement("h3",{onClick:function(){return e._handleClick()}},this.props.line),d.a.createElement("div",{className:"rule"}),d.a.createElement("div",{className:"hover"},this.props.children))}}]),t}(d.a.Component),K=function(e){function t(){return Object(n.default)(this,t),Object(l.default)(this,Object(r.default)(t).apply(this,arguments))}return Object(o.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(v.a,{onEnter:function(){e.props.updateUI({logoColor:C.a.grayscale.bg1,navColor:C.a.grayscale.bg1})},bottomOffset:"90%",topOffset:"10%"},d.a.createElement("div",{className:"section--home-services"},d.a.createElement(y.a,{bgColor:C.a.grayscale.gray5,gradient:[C.a.gradient[1],C.a.gradient[6]],title:"Our Services"},d.a.createElement("p",null,"Our offerings / capabilities. We also offer custom solutions for our clients by deploying embedded resources.")),d.a.createElement(W,null),d.a.createElement("div",{className:"part--layout-skinny-cta"},d.a.createElement(j.a,{url:"/approach"},d.a.createElement("h4",null,"Ready to learn more?"),d.a.createElement("span",{className:"link"},"Read about our approach and services")))))}}]),t}(d.a.Component),G=Object(b.b)(function(e){return e},function(e){return{updateUI:Object(h.bindActionCreators)(E.j,e)}})(K),V=function(e){return d.a.createElement(v.a,{onEnter:function(){Object(k.a)({targets:".home--feature-blog a",scale:[.92,1],opacity:{value:[0,1],duration:750},duration:1250,delay:250,easing:"easeInOutCubic"})},onLeave:function(){k.a.set(".home--feature-blog a",{opacity:0})}},d.a.createElement("div",{className:"section--home-blog"},d.a.createElement("div",{className:"content home--feature-blog"},d.a.createElement(j.a,{url:"/blog/teaching-a-titanosaur-to-talk"},d.a.createElement("h3",null,"From the Blog"),d.a.createElement("h2",null,"Teaching a ",d.a.createElement("br",null),"Titanosaur ",d.a.createElement("br",null),"to Talk →")))))},X=function(e){function t(e){var a;return Object(n.default)(this,t),a=Object(l.default)(this,Object(r.default)(t).call(this,e)),Object(s.a)(Object(c.default)(a),"componentDidMount",function(){a.chars=Object(x.c)("Strategy. Design. Content. Technology."),a.setState({wrapped:!0})}),Object(s.a)(Object(c.default)(a),"componentDidUpdate",function(e,t){if(!t.wrapped&&a.state.wrapped&&(a.color=Object(k.a)({targets:a.myRef.current.querySelectorAll(".letter"),translateY:["50%",0],delay:k.a.stagger(5),duration:250,easing:"easeInOutQuart",autoplay:!1})),a.state.visible&&e.scrollPosition!==a.props.scrollPosition){var n=a.myRef.current,l=n.getBoundingClientRect().top+n.offsetHeight,r=.75*a.props.windowHeight+n.offsetHeight,c=Math.round(1e3*(1-l/r))/1e3;a.color.seek(1e3*c)}}),a.state={height:0,wrapped:!1,visible:!1},a.myRef=d.a.createRef(),a.chars=null,a.color=null,a}return Object(o.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(v.a,{onEnter:function(){e.props.updateUI({logoColor:C.a.grayscale.black,navColor:C.a.grayscale.black})},bottomOffset:"90%",topOffset:"10%"},d.a.createElement("div",{className:"section--home-statement"},d.a.createElement("div",{className:"part--values",ref:this.myRef},d.a.createElement("p",null,"Helping our partners move forward through"),d.a.createElement(v.a,{onEnter:function(){e.setState({visible:!0})},onLeave:function(){e.setState({visible:!1})}},d.a.createElement("h2",null,this.state.wrapped?this.chars:void 0)))))}}]),t}(d.a.Component),Z=Object(b.b)(function(e){return e},function(e){return{updateUI:Object(h.bindActionCreators)(E.j,e)}})(X),J=a("XPZr"),$=a.n(J),ee=a("Dovu"),te=a.n(ee),ae=a("/eQj"),ne=a.n(ae),le=a("EXQy"),re=a.n(le),ce=g()(function(){return a.e("7754").then(a.bind(null,"sjFK"))},{ssr:!1,loadableGenerated:{webpack:function(){return["sjFK"]},modules:["../components/_utility/Shader"]}}),ie=function(e){function t(e){var a;return Object(n.default)(this,t),a=Object(l.default)(this,Object(r.default)(t).call(this,e)),Object(s.a)(Object(c.default)(a),"componentDidMount",function(){a.props.updateShaderImage($.a)}),a.state={headers:null},a}return Object(o.default)(t,e),Object(i.default)(t,null,[{key:"getInitialProps",value:function(e){e.store,e.isServer,e.pathname,e.query;return{slug:"home",canonical:"/",images:[P.a,q.a,L.a]}}}]),Object(i.default)(t,[{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"home-wrap"},d.a.createElement(d.a.Fragment,null,d.a.createElement(f.a,null,d.a.createElement("title",null,"Strategic Creative & Development Agency | Purple Rock Scissors"))),d.a.createElement(ce,{preload:[$.a,re.a,te.a,ne.a],s_lsd:[50,50,.001],s_rgb:[15,50,.01]}),d.a.createElement("div",{className:"content-container"},d.a.createElement(R,null),d.a.createElement(Z,null),d.a.createElement(v.a,{onEnter:function(){e.props.updateShaderImage($.a)}}),d.a.createElement(U,null),d.a.createElement(Q,null),d.a.createElement(O.a,{image:function(){return e.props.windowWidth<768?ne.a:te.a}}),d.a.createElement(G,null),d.a.createElement(v.a,{onEnter:function(){e.props.updateShaderImage(re.a)}}),d.a.createElement(V,null),d.a.createElement(w.a,null)))}}]),t}(d.a.Component);t.default=Object(b.b)(function(e){return e},function(e){return{updateShaderImage:Object(h.bindActionCreators)(E.i,e)}})(ie)},WEvE:function(e,t,a){"use strict";var n=a("0iUn"),l=a("sLSF"),r=a("MI3g"),c=a("a7VT"),i=a("AT/M"),o=a("Tit0"),s=a("vYYK"),u=a("q1tI"),d=a.n(u),m=a("uuth"),f=a("EgnG"),p=function(e){function t(e){var a;return Object(n.default)(this,t),a=Object(r.default)(this,Object(c.default)(t).call(this,e)),Object(s.a)(Object(i.default)(a),"_animateIn",function(){Object(f.a)({targets:a.myRef.current.childNodes,opacity:[0,1],easing:"easeInOutCubic",duration:1e3,delay:f.a.stagger(a.props.stagger?a.props.stagger:100)})}),Object(s.a)(Object(i.default)(a),"_animateOut",function(){Object(f.a)({targets:a.myRef.current.childNodes,opacity:[1,0],easing:"easeInOutCubic",duration:500})}),a.myRef=d.a.createRef(),a}return Object(o.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(m.a,{onEnter:function(){e._animateIn()},onLeave:function(){e._animateOut()}},d.a.createElement("span",{className:"fade-wrapper",ref:this.myRef},this.props.children))}}]),t}(d.a.Component);t.a=p},XPZr:function(e,t){e.exports="/_next/static/components/home/images/6702c863fb1de02910c32201486ff44e.jpg"},cPts:function(e,t,a){"use strict";var n=a("0iUn"),l=a("sLSF"),r=a("MI3g"),c=a("a7VT"),i=a("AT/M"),o=a("Tit0"),s=a("vYYK"),u=a("q1tI"),d=a.n(u),m=a("EgnG"),f=a("uuth"),p=a("TSYQ"),g=a.n(p),b=a("rdxz"),h=(a("E/Zn"),function(e){function t(e){var a;return Object(n.default)(this,t),a=Object(r.default)(this,Object(c.default)(t).call(this,e)),Object(s.a)(Object(i.default)(a),"componentDidUpdate",function(e,t){!t.visible&&a.state.visible&&Object(m.a)({targets:".section--hero .part--headline .down-arrow svg",opacity:[0,1],translateY:[-32,0],duration:1500,delay:1e3,easing:"easeInOutQuad"})}),a.state={visible:!1},a}return Object(o.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this,t=g()("section--hero",{visible:this.state.visible});return d.a.createElement("div",{className:t},d.a.createElement("div",{className:"panel"},d.a.createElement(f.a,{onEnter:function(){e.setState({visible:!0})},onLeave:function(){e.setState({visible:!1})}},d.a.createElement("div",{className:"part--headline"},this.props.children,d.a.createElement("div",{className:"down-arrow"},d.a.createElement("svg",{width:"25",height:"44",viewBox:"0 0 25 44",xmlns:"http://www.w3.org/2000/svg"},d.a.createElement("path",{d:"M14 38.5l8-8 2.5 2.5L13 44h-1L.5 33 3 30.5l8 8V0h3v38.5z",fill:b.a.grayscale.black,fillRule:"nonzero"})))))))}}]),t}(d.a.Component));t.a=h},nCQj:function(e,t){e.exports="/_next/static/components/home/images/b05b0aeeee18d10590e967a42dd763bf.jpg"},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);