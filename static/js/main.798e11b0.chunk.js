(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),i=n(8),o=(n(13),n(14),n(1)),a=n(4),u=n.n(a),l=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="name",d="length";var h=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(o.useState)(!1),a=Object(r.a)(c,2),h=a[0],p=a[1],f=function(t,e){var n=e.sortField,s=e.isReversed,c=Object(i.a)(t);return n&&c.sort((function(t,e){switch(n){case j:return t.localeCompare(e);case d:return t[n]-e[n];default:return 0}})),s&&c.reverse(),c}(b,{sortField:n,isReversed:h});return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n!==j}),onClick:function(){return s(j)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":n!==d}),onClick:function(){return s(d)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!h}),onClick:function(){return p(!h)},children:"Reverse"}),(h||n)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),p(!1)},children:"Reset"})]}),Object(l.jsx)("ul",{children:f.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.798e11b0.chunk.js.map