(this.webpackJsonprobotbuddies=this.webpackJsonprobotbuddies||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),c=n(7),s=n.n(c),a=(n(13),n(14),n(2)),i=n(3),h=n(5),u=n(4),l=(n(15),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasErrorrror:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:" Ooops. That is not good."}):this.props.children}}]),n}(o.Component)),b=function(e){e.robots;throw new Error("Noooo")},d=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},j=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RobotBuddies"}),Object(r.jsx)(d,{searchChange:this.onSearchChange}),Object(r.jsx)(j,{children:Object(r.jsx)(l,{children:Object(r.jsx)(b,{robots:o})})})]}):Object(r.jsx)("h1",{children:"loading..."})}}]),n}(o.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))};s.a.render(Object(r.jsx)(f,{}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.068de5e1.chunk.js.map