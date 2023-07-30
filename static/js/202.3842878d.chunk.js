"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[202],{2070:function(n,t,e){e.d(t,{Z:function(){return d}});var r,i,c=e(168),o=e(6444),a=o.ZP.div(r||(r=(0,c.Z)(["\n  padding: 0 15px;\n  margin: 0 auto;\n  width: 1200px;\n"]))),s=o.ZP.h2(i||(i=(0,c.Z)(["\n  font-size: 36px;\n  font-weight: 700;\n  margin-bottom: 60px;\n  text-align: center;\n  color: #fd5103;\n"]))),u=e(184),d=function(n){var t=n.title,e=void 0===t?"":t,r=n.children;return(0,u.jsxs)(a,{children:[e&&(0,u.jsx)(s,{children:e}),r]})}},5903:function(n,t,e){e.d(t,{Z:function(){return a}});var r,i=e(168),c=e(6444).ZP.section(r||(r=(0,i.Z)(["\n  padding-top: 34px;\n  padding-bottom: 34px;\n"]))),o=e(184),a=function(n){var t=n.children;return(0,o.jsx)(c,{children:t})}},6202:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,i,c,o,a,s,u,d,p,f=e(885),l=e(2791),x=e(470),h=e(8820),v=e(367),m=e(168),g=e(6444),Z=e(6731),j=g.ZP.button(r||(r=(0,m.Z)(["\n  display: flex;\n  gap: 6px;\n  font-size: 22px;\n  font-weight: 500;\n  background-color: inherit;\n  color: #5f6775;\n  padding: 8px 14px;\n  border: inherit;\n  max-width: 190px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    color: #fd5103;\n  }\n"]))),b=g.ZP.div(i||(i=(0,m.Z)(["\n  display: flex;\n  gap: 30px;\n  margin-bottom: 30px;\n  margin-top: 20px;\n"]))),w=g.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  font-size: 18px;\n  line-height: 1.4;\n  color: #ffffff;\n"]))),k=g.ZP.h2(o||(o=(0,m.Z)(["\n  font-size: 36px;\n  color: #fd5103;\n"]))),y=g.ZP.h3(a||(a=(0,m.Z)(["\n  font-size: 26px;\n  margin-bottom: 20px;\n  color: #fd5103;\n"]))),P=g.ZP.ul(s||(s=(0,m.Z)(["\n  /* margin-bottom: 30px; */\n"]))),_=g.ZP.li(u||(u=(0,m.Z)(["\n  font-size: 22px;\n  padding: 8px;\n"]))),z=(0,g.ZP)(Z.rU)(d||(d=(0,m.Z)(["\n  color: #5f6775;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #fd5103;\n  }\n"]))),C=g.ZP.div(p||(p=(0,m.Z)(["\n  width: 100%;\n  height: 2px;\n  background-color: #fd5103;\n"]))),A=e(5903),F=e(2070),T=e(184),U=function(){var n=(0,l.useState)(null),t=(0,f.Z)(n,2),e=t[0],r=t[1],i=(0,x.UO)().movieId,c=(0,x.TH)(),o=(0,x.s0)();(0,l.useEffect)((function(){(0,v.TP)(i).then((function(n){r(n)}))}),[i]);return(0,T.jsx)(T.Fragment,{children:e&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(A.Z,{children:(0,T.jsxs)(F.Z,{children:[(0,T.jsxs)(j,{type:"button",onClick:function(){var n,t;o(null!==(n=null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/")},children:["Go back",(0,T.jsx)(h.YwC,{size:"25px"})]}),(0,T.jsxs)(b,{children:[e.poster_path&&(0,T.jsx)("img",{src:v.yA+"w342"+e.poster_path,alt:e.name||e.title,height:"400"}),(0,T.jsxs)(w,{children:[(0,T.jsxs)(k,{children:[e.title||e.name,e.release_date&&"(".concat(e.release_date.slice(0,4),")")]}),(0,T.jsxs)("p",{children:["User Score:"," ",e.vote_average&&(10*e.vote_average).toFixed(1),"%"]}),(0,T.jsx)("h3",{children:"Overview"}),(0,T.jsx)("p",{children:e.overview}),(0,T.jsx)("h3",{children:"Genres"}),(0,T.jsx)("p",{children:e.genres&&e.genres.map((function(n){return n.name})).join(" ")})]})]})]})}),(0,T.jsx)(C,{}),(0,T.jsx)(A.Z,{children:(0,T.jsxs)(F.Z,{children:[(0,T.jsx)(y,{children:"Additional information"}),(0,T.jsxs)(P,{children:[(0,T.jsx)(_,{children:(0,T.jsx)(z,{to:"cast",state:c.state,children:"Cast"})}),(0,T.jsx)(_,{children:(0,T.jsx)(z,{to:"reviews",state:c.state,children:"Reviews"})})]})]})}),(0,T.jsx)(C,{}),(0,T.jsx)(x.j3,{})]})})}},367:function(n,t,e){e.d(t,{Df:function(){return p},M1:function(){return l},TP:function(){return f},gH:function(){return h},tx:function(){return x},yA:function(){return d}});var r=e(5861),i=e(7757),c=e.n(i),o=e(4569),a=e.n(o),s="https://api.themoviedb.org/3/",u="43658d6d4343b834cdd29cb42d0281f9",d="https://image.tmdb.org/t/p/",p=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("".concat(s,"trending/movie/day?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("".concat(s,"movie/").concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("".concat(s,"search/movie?api_key=").concat(u,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=202.3842878d.chunk.js.map