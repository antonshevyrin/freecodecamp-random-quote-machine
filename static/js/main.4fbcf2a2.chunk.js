(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{22:function(t,e,n){t.exports=n(55)},29:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),u=n(13),r=n.n(u),c=(n(27),n(28),n(29),n(19)),l=n(14),i=n(15),s=n(20),m=n(16),h=n(2),b=n(21),d=n(17),v=n.n(d),f=n(3),q=n.n(f),Q=n(18),g=n.n(Q),w=(n(53),n(54),function(t){var e=t.quoteText,n=t.quoteAuthor;return o.a.createElement("blockquote",{className:"blockquote mb-0"},o.a.createElement("p",null,o.a.createElement(q.a,{name:"quote-left"}),"\xa0",e,"\xa0",o.a.createElement(q.a,{name:"quote-right"})),o.a.createElement("footer",{className:"blockquote-footer"},n))}),p=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(m.a)(e).call(this,t))).state={quoteText:"",quoteAuthor:"",currentIndex:0,quotesAreLoaded:!1,availableQuotes:[]},n.setRandomQuote=n.setRandomQuote.bind(Object(h.a)(n)),n.tweetOut=n.tweetOut.bind(Object(h.a)(n)),n.getCurrentFullQuote=n.getCurrentFullQuote.bind(Object(h.a)(n)),n.getQuoteText=n.getQuoteText.bind(Object(h.a)(n)),n.getQuoteAuthor=n.getQuoteAuthor.bind(Object(h.a)(n)),n}return Object(b.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.request=v.a.get("./quotes.json").then((function(e){t.setState({quotesAreLoaded:!0,availableQuotes:e.data.quotes}),t.setRandomQuote()}))}},{key:"componentWillUnmount",value:function(){this.request.abort()}},{key:"getQuoteText",value:function(t){var e=this.state.availableQuotes;return e.length>0?e[t].quoteText:""}},{key:"getQuoteAuthor",value:function(t){var e=this.state.availableQuotes;return e.length>0?e[t].quoteAuthor:""}},{key:"getCurrentFullQuote",value:function(){var t=this.state.currentIndex,e=this.getQuoteText(t),n=this.getQuoteAuthor(t);return'"'.concat(e,'" ').concat(n)}},{key:"setRandomQuote",value:function(){var t,e=this,n=1,a=this.state.availableQuotes;do{t=Math.floor(a.length*Math.random()),n+=1}while(t===this.currentIndex&&n<=10);this.setState((function(n){return Object(c.a)({},n,{currentIndex:t,quoteText:e.getQuoteText(t),quoteAuthor:e.getQuoteAuthor(t)})}))}},{key:"tweetOut",value:function(){window.open("https://twitter.com/intent/tweet?text=".concat(this.getCurrentFullQuote()))}},{key:"render",value:function(){var t=this.state,e=t.quoteText,n=t.quoteAuthor;return o.a.createElement("div",{className:"App container"},o.a.createElement("div",{className:"Quote"},o.a.createElement(w,{quoteText:e,quoteAuthor:n}),o.a.createElement("div",{className:"Controls navbar-fixed-bottom"},o.a.createElement("button",{type:"button",className:"btn btn-default",onClick:this.setRandomQuote},o.a.createElement(q.a,{name:"refresh"}),"\xa0New quote"),o.a.createElement("div",{className:"btn-toolbar"},o.a.createElement(g.a,{text:this.getCurrentFullQuote()},o.a.createElement("button",{type:"button",className:"btn btn-default"},o.a.createElement(q.a,{name:"clipboard"}),"\xa0Copy")),o.a.createElement("button",{type:"button",className:"btn btn-default",onClick:this.tweetOut},o.a.createElement(q.a,{name:"twitter"}),"\xa0Tweet out")))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.4fbcf2a2.chunk.js.map