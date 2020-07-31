(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{27:function(e,t,a){e.exports=a(57)},32:function(e,t,a){},33:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),i=(a(32),a(33),a(5)),o=a(9),s=a(1),m=a(6),u=a.n(m),d=a(8),v=function(e){var t=r.a.useState(),a=Object(i.a)(t,2),n=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),void 0!==n&&e.handleSubmit(n)}},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input is-large",onChange:function(e){c(e.target.value)},type:"text",placeholder:"Find a movie"})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-info is-large"},"Search")))))},E=a(11),f=a.n(E),p="https://www.omdbapi.com/?apikey=",h=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(p).concat("26277d7a","&s=").concat(t)).then((function(e){return void 0!==e.data.Error?(Promise.reject("The movie was not found"),[]):e.data.Search.map((function(e){return"N/A"===e.Poster?(e.Poster="https://i.redd.it/valbyu8f61gz.jpg",e):e}))})).catch((function(){return Promise.reject("Some error with the api"),[]}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(p).concat("26277d7a","&i=").concat(t)).then((function(e){return e.data.Error?Promise.reject({}):"N/A"===e.data.Poster?(e.data.Poster="https://i.redd.it/valbyu8f61gz.jpg",e.data):e.data})).catch((function(e){Promise.reject({})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement(o.b,{to:"/movie_finder/movie_details/".concat(e.imdbID)},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3 image-card"},r.a.createElement("img",{src:e.Poster,alt:e.Title}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},e.Title),r.a.createElement("p",{className:"subtitle is-6"},e.Year))))))},b=function(e){var t=e.children.map((function(e){return r.a.createElement("div",{className:"MoviesList-item",key:e.imdbID},r.a.createElement(N,{Poster:e.Poster,Year:e.Year,Title:e.Title,imdbID:e.imdbID}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"MoviesList"},t))},S=function(e){return r.a.createElement("h1",{className:"title"},e.children)},j=r.a.createContext({}),w=function(){var e=r.a.useState([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=r.a.useState(!1),l=Object(i.a)(c,2),o=l[0],s=l[1],m=r.a.useContext(j),E=m.movieSearched,f=m.setMovieSearched;r.a.useEffect((function(){E.length>0&&(n(E),s(!0))}),[n,E,s]);var p=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t).then((function(e){n(e),f(e)})).catch((function(e){return console.log("ERROR")}));case 2:s(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null,"Movie Finder"),r.a.createElement("div",{className:"SearchForm-wrapper"},r.a.createElement(v,{handleSubmit:p})),r.a.createElement("div",{className:"PrintResults-wrapper"},!1===o?r.a.createElement(r.a.Fragment,null):0===(null===a||void 0===a?void 0:a.length)||null===a?r.a.createElement("h4",null,"\ud83d\udca9 There aren't results \ud83d\udc4e"):r.a.createElement(b,null,a)))},P=function(){var e=Object(s.g)().id,t=Object(s.f)().goBack,a=r.a.useState(),n=Object(i.a)(a,2),c=n[0],l=n[1];r.a.useEffect((function(){g(e).then((function(e){return l(e)})).catch((function(){return l(null)}))}),[e]);return r.a.createElement(r.a.Fragment,null,void 0===c?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("progress",{className:"progress is-large is-info",max:"10"}))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"}),r.a.createElement("div",{className:"column is-half"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("button",{className:"button is-info",onClick:function(){return t()}},"\u21a9"),r.a.createElement("h1",{className:"title is-1"},null===c||void 0===c?void 0:c.Title),r.a.createElement("figure",{className:"image-movie"},r.a.createElement("img",{src:null===c||void 0===c?void 0:c.Poster,alt:"poster"})),r.a.createElement("h2",{className:"subtitle is-3"},null===c||void 0===c?void 0:c.Year),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Genre: "),null===c||void 0===c?void 0:c.Genre),r.a.createElement("p",null,r.a.createElement("strong",null,"Rating: "),null===c||void 0===c?void 0:c.imdbRating,"/10 \u2b50"),r.a.createElement("p",null,r.a.createElement("strong",null,"Director: "),null===c||void 0===c?void 0:c.Director),r.a.createElement("p",null,r.a.createElement("strong",null,"Country: "),null===c||void 0===c?void 0:c.Country),r.a.createElement("p",null,null===c||void 0===c?void 0:c.Plot))),r.a.createElement("div",null)))),r.a.createElement("div",{className:"column"}))))},x=function(){var e=r.a.useState([]),t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(j.Provider,{value:{movieSearched:a,setMovieSearched:n}},r.a.createElement(s.a,{exact:!0,path:"/movie_finder",component:w}),r.a.createElement(s.a,{path:"/movie_finder/movie_details/:id",component:P}))))};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.3abfb8bd.chunk.js.map