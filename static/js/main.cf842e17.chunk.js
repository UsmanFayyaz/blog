(window.webpackJsonpblog=window.webpackJsonpblog||[]).push([[0],{39:function(e,t,n){},51:function(e,t,n){e.exports=n(77)},56:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=(n(56),n(57),n(58),n(39),n(13)),s=n(14),l=n(16),u=n(15),d=n(18),h=n(17),p=n(80),m=n(23),f="FETCH_POSTS_PENDING",g="FETCH_POSTS_SUCCESS",b="FETCH_POSTS_ERROR",v="FETCH_PSGES_SUCCESS",E="FETCH_CATEGORIES_SUCCESS";function O(){return{type:f}}function j(e){return{type:b,error:e}}function y(e){return function(t){t(O()),fetch(e).then(function(e){return e.json()}).then(function(e){if(e.error)throw e.error;return t({type:g,posts:e}),e}).catch(function(e){t(j(e))})}}function S(e){return function(t){t(O()),fetch(e).then(function(e){return e.json()}).then(function(e){if(e.error)throw e.error;return t({type:v,pages:e}),e}).catch(function(e){t(j(e))})}}function C(e){return function(t){t(O()),fetch(e).then(function(e){return e.json()}).then(function(e){if(e.error)throw e.error;return t({type:E,categories:e}),e}).catch(function(e){t(j(e))})}}var w=n(43);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach(function(t){Object(w.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var D={pending:!0,posts:null,pages:null,error:null};var _=function(e){return e.posts},P=function(e){return e.pages},I=function(e){return e.categories},T=function(e){return e.pending},x=function(e){return e.error},N=n(19),H=n(10),M=n(22),R=n(50);var F=function(e){var t=e.index,n=e.data;e.func;var a,c=null!==(a=n[t].content.rendered.slice(0,199))&&""!==a&&(a=a.toString()).replace(/<[^>]*>/g,"");return c=[].concat(Object(R.a)(c),[".... read more"]),r.a.createElement("div",{id:"container"+t,className:"container col-sm-5"},r.a.createElement("div",{id:"title-container"},r.a.createElement("h5",{id:"title-of-post",dangerouslySetInnerHTML:{__html:n[t].title.rendered}})),r.a.createElement("hr",null),r.a.createElement("p",null,c))},U=function(e){var t=e.posts,n=e.address;return r.a.createElement("div",{id:"content"},t.map(function(e,a){return r.a.createElement(H.b,{key:a,to:"/".concat(n,"=").concat(t[a].id)},r.a.createElement(F,{index:a,data:t}))}))},W=function(e){return e.categories.map(function(e,t){return r.a.createElement(H.b,{key:t,to:"/category=".concat(e.id)},r.a.createElement("p",{className:"dropdown-list"},e.name))})},B="https://wpbakery.com/wp-json/wp/v2/",G=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={data:null,isLoading:!1,error:null},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.postsId,n="".concat(B,"posts/").concat(t);this.setState({isLoading:!0}),fetch(n).then(function(e){return e.json()}).then(function(t){return e.setState({data:t,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){return null!==this.state.data?r.a.createElement("div",{id:"content"},r.a.createElement("h2",{dangerouslySetInnerHTML:{__html:this.state.data.title.rendered}}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.data.content.rendered}})):r.a.createElement("div",null)}}]),t}(r.a.Component),J=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={data:null,isLoading:!1,error:null,index:n.props.index},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="".concat(B,"pages/").concat(this.state.index);this.setState({isLoading:!0}),fetch(t).then(function(e){return e.json()}).then(function(t){return e.setState({data:t,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){return null!==this.state.data?r.a.createElement("div",{id:"content"},r.a.createElement("h2",{dangerouslySetInnerHTML:{__html:this.state.data.title.rendered}}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.data.content.rendered}})):r.a.createElement("div",null)}}]),t}(r.a.Component),Q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={data:null,title:null,isLoading:!1,error:null},n.fetchData=n.fetchData.bind(Object(d.a)(n)),n.props.history.listen(function(e,t){var a=e.pathname.match(/\D*(\d+)/);null!==a&&n.fetchData(a[1])}),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"fetchData",value:function(e){var t=this,n=this.props.categories,a="".concat(B,"posts?categories=").concat(e);this.setState({isLoading:!0}),fetch(a).then(function(e){return e.json()}).then(function(e){return t.setState({data:e,isLoading:!1})}).catch(function(e){return t.setState({error:e,isLoading:!1})});for(var r=0;r<n.length;r++)if(n[r].id==e){this.setState({title:n[r].name});break}}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props.match.params.catId;this.fetchData(e)}},{key:"render",value:function(){return!1===this.state.isLoading?r.a.createElement("div",null,r.a.createElement("h4",{id:"content"},this.state.title),null!==this.state.data?r.a.createElement(U,{posts:this.state.data,address:"posts"}):""):r.a.createElement("div",null,"loading")}}]),t}(r.a.Component),A=Object(m.b)(function(e){return{error:x(e),categories:I(e),pending:T(e)}},function(e){return Object(N.b)({fetchCategories:C},e)})(Q),$=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={posts:null,categories:null,isLoading:!1,error:null},n.fetchData=n.fetchData.bind(Object(d.a)(n)),n.props.history.listen(function(e,t){var a=e.pathname.match(/^\/search=(\S+)/);null!==a&&n.fetchData(a[1])}),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"fetchData",value:function(e){var t=this,n="".concat(B,"categories?search=").concat(e),a="".concat(B,"posts?search=").concat(e);this.setState({isLoading:!0}),fetch(n).then(function(e){return e.json()}).then(function(e){return t.setState({categories:e,isLoading:!1})}).catch(function(e){return t.setState({error:e,isLoading:!1})}),this.setState({isLoading:!0}),fetch(a).then(function(e){return e.json()}).then(function(e){return t.setState({posts:e,isLoading:!1})}).catch(function(e){return t.setState({error:e,isLoading:!1})})}},{key:"componentDidMount",value:function(){this.fetchData(this.props.match.params.searchQuery)}},{key:"render",value:function(){return!1===this.state.isLoading?null!==this.state.posts&&null!==this.state.categories?r.a.createElement("div",null,r.a.createElement("div",{id:"content"},0===this.state.categories.length?r.a.createElement("h2",null,"No Category Found."):r.a.createElement("h2",null,"Categories:"),this.state.categories.map(function(e,t){return r.a.createElement(H.b,{key:t,to:"/category=".concat(e.id)},r.a.createElement("h4",{className:"category-list"},e.name))}),r.a.createElement("h2",null,"Posts:")),r.a.createElement(U,{posts:this.state.posts,address:"posts"})):r.a.createElement("div",null):r.a.createElement("div",null,"loading")}}]),t}(r.a.Component),q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={inputData:""},n.shouldComponentRender=n.shouldComponentRender.bind(Object(d.a)(n)),n.updateInput=n.updateInput.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"updateInput",value:function(e){e.preventDefault(),this.setState({inputData:e.target.value})}},{key:"componentWillMount",value:function(){var e=this.props,t=e.fetchPosts,n=e.fetchPages,a=e.fetchCategories,r="".concat(B,"posts"),c="".concat(B,"pages"),o="".concat(B,"categories");t(r),n(c),a(o)}},{key:"shouldComponentRender",value:function(){return!1!==this.props.pending}},{key:"render",value:function(){var e,t,n=this.props,a=n.posts,c=n.pages,o=n.categories;return this.shouldComponentRender()?r.a.createElement("div",null):(null!==c&&(e=c[3].id,t=c[5].id),null!==a&&null!==c?r.a.createElement(H.a,null,r.a.createElement("div",null,r.a.createElement("div",{id:"header"},r.a.createElement("div",null,r.a.createElement("h1",null,"My Blog")),r.a.createElement("div",{id:"navbar-element"},r.a.createElement(H.b,{className:"col-sm-2 navbar-elements",to:"/blog"},r.a.createElement("label",null,"Home")),r.a.createElement(H.b,{className:"col-sm-2 navbar-elements",to:"/page=".concat(e)},r.a.createElement("label",null,"Terms Of Services")),r.a.createElement(H.b,{className:"col-sm-2 navbar-elements",to:"/page=".concat(t)},r.a.createElement("label",null,"Code Of Conduct")),r.a.createElement("div",{className:"col-sm-2 navbar-elements"},r.a.createElement(p.a,{id:"dropdown-basic-button",title:"Categories"},r.a.createElement(W,{categories:o}))),r.a.createElement("input",{className:"col-sm-2",id:"search-bar",placeholder:"search",onChange:this.updateInput}),r.a.createElement(H.b,{id:"submit-button",className:"navbar-elements",to:"/search=".concat(this.state.inputData)},r.a.createElement("button",null,"Submit"))))),r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"/page=".concat(e),component:function(){return r.a.createElement(J,{index:e})}}),r.a.createElement(M.a,{path:"/page=".concat(t),component:function(){return r.a.createElement(J,{index:t})}}),r.a.createElement(M.a,{exact:!0,path:"/",component:function(){return r.a.createElement(U,{posts:a,address:"posts"})}}),r.a.createElement(M.a,{exact:!0,path:"/blog",component:function(){return r.a.createElement(U,{posts:a,address:"posts"})}}),r.a.createElement(M.a,{exact:!0,path:"/category=:catId",component:A}),r.a.createElement(M.a,{exact:!0,path:"/posts=:postsId",component:G}),r.a.createElement(M.a,{exact:!0,path:"/search=:searchQuery",component:$}))):r.a.createElement("div",null))}}]),t}(r.a.Component),z=Object(m.b)(function(e){return{error:x(e),posts:_(e),pages:P(e),categories:I(e),pending:T(e)}},function(e){return Object(N.b)({fetchPosts:y,fetchPages:S,fetchCategories:C},e)})(q);var K=function(){return r.a.createElement(z,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=[n(49).a],X=Object(N.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return k({},e,{pending:!0});case g:return k({},e,{pending:!1,posts:t.posts});case v:return k({},e,{pending:!1,pages:t.pages});case E:return k({},e,{pending:!1,categories:t.categories});case b:return k({},e,{pending:!1,error:t.error});default:return e}},D,N.a.apply(void 0,V));o.a.render(r.a.createElement(m.a,{store:X},r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.cf842e17.chunk.js.map