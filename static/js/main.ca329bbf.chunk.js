(this.webpackJsonpmoondays=this.webpackJsonpmoondays||[]).push([[0],{203:function(e,a,t){e.exports=t(420)},208:function(e,a,t){},209:function(e,a,t){},420:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(208),t(73)),i=(t(209),t(427)),s=t(425),m=t(430),u=t(423),d=t(424),h=t(42),p=t(428),E=t(431),g=t(426),y=t(429),v=(t(210),t(432)),f=t(433),w=t(434),b=t(29),I=t.n(b),S=(t(211),t(212)),C=t(337),j=t(338),x=i.a.Option,N=function(e,a,t){return t=t||"0",(e+="").length>=a?e:new Array(a-e.length+1).join(t)+e},q=function(e){return e.length<4?e.map((function(e){return e.start.map((function(e){return N(e,2)})).join("/")})).join(", "):[e[0],e[1],"...",e[e.length-1]].map((function(e){return"..."===e?e:e.start.map((function(e){return N(e,2)})).join("/")})).join(", ")},A=function(e,a,t,n,r,l){for(var c=[],o=0;o<n;o++){var i=I()().year(e+o).month(a).date(t).solar(),s={title:r,start:[i.year(),i.month()+1,i.date()],duration:{days:1},description:l};c.push(s)}return c};var k=function(){for(var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),b=Object(o.a)(c,2),N=b[0],k=b[1],O=Object(n.useState)(null),B=Object(o.a)(O,2),D=B[0],M=B[1],Y=s.a.useForm(),G=Object(o.a)(Y,1)[0],R=function(){var e=G.getFieldsValue(),a=e.year,t=e.month,n=e.day,r=e.recurrences;if(e&&a&&t&&n&&r&&a>1890&&a<2061&&r>0&&r<51){var l=A(a,t,n,r,null,null);M("Download ".concat(l.length," ").concat(1===l.length?"event":"events",": ").concat(q(l),"."))}else M(null)},T=[],z=1;z<=30;z++)T.push(z);return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"white"},"M\u25d0\u25d1N DAYS"),r.a.createElement(u.a,{gutter:8,style:{marginBottom:8,alignItems:"center"}},r.a.createElement(d.a,{xs:22,sm:14,md:14,lg:12,xl:12},r.a.createElement("h3",{className:"white",style:{marginBottom:16}},"Create lunar calendar events. Made by ",r.a.createElement("a",{href:"https://ericbai.co/"},"Eric Bai"),".")),r.a.createElement(d.a,{span:2},r.a.createElement(h.a,{ghost:!0,size:"small",shape:"circle",icon:r.a.createElement(w.a,null),onClick:function(){return k(!0)}}))),r.a.createElement(s.a,{form:G,wrapperCol:{span:12},layout:"horizontal",onFinish:function(e){var a=e.month,t=e.day,n=e.year,c=e.title,o=e.recurrences,i=e.description,s=A(n,a,t,o,c,i),u=S.createEvents(s),d=u.error,h=u.value;if(d)l(r.a.createElement(m.a,{icon:r.a.createElement(v.a,null),title:"Something went wrong!",extra:r.a.createElement("div",null,r.a.createElement("p",null,"Sorry! Let Eric know his app is broken!"))}));else{var p=new Blob([h],{type:"text/plain;charset=utf-8"});C.saveAs(p,"".concat(j(c),".ics")),l(r.a.createElement(m.a,{icon:r.a.createElement(f.a,null),title:"".concat(c," downloaded!"),extra:r.a.createElement("div",null,r.a.createElement("p",null,"Your calendar file contains ".concat(s.length," ").concat(1===s.length?"event":"events"," on ").concat(q(s),".")),r.a.createElement("p",null,"Import this file to your favourite calendar app! Drag and drop usually works."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://calendar.google.com/calendar/r/settings/export"},"Import to Google Calendar")),r.a.createElement("p",null,"Note: If you want to delete these events, you will have to delete each one manually."))}))}},initialValues:{recurrences:15,year:I()().year()}},r.a.createElement(s.a.Item,{name:"title",rules:[{required:!0,message:"Event title is required."}]},r.a.createElement(p.a,{placeholder:"Add event title",size:"large"})),r.a.createElement(s.a.Item,null,r.a.createElement(p.a.Group,{compact:!0,style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{className:"white",style:{marginRight:8}},"Lunar date:"),r.a.createElement(s.a.Item,{noStyle:!0,name:"month",rules:[{required:!0,message:"Month is required."}]},r.a.createElement(i.a,{placeholder:"Select month",onChange:R},r.a.createElement(x,{value:0},"1st month"),r.a.createElement(x,{value:1},"2nd month"),r.a.createElement(x,{value:2},"3rd month"),[3,4,5,6,7,8,9,10,11].map((function(e){return r.a.createElement(x,{value:e},"".concat(e+1,"th month"))})))),r.a.createElement(s.a.Item,{noStyle:!0,name:"day",rules:[{required:!0,message:"Day is required."}]},r.a.createElement(i.a,{placeholder:"Select day",onChange:R},T.map((function(e){return r.a.createElement(x,{value:e},e)})))))),r.a.createElement(s.a.Item,null,r.a.createElement(p.a.Group,{compact:!0,style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{className:"white",style:{marginRight:8}},"Annually for "),r.a.createElement(s.a.Item,{noStyle:!0,name:"recurrences",rules:[{required:!0,message:"Number of recurrences is required."}]},r.a.createElement(E.a,{onChange:R,min:1,max:50,style:{marginRight:8}})),r.a.createElement("div",{className:"white",style:{marginRight:8}},"years starting in"),r.a.createElement(s.a.Item,{noStyle:!0,name:"year",rules:[{required:!0,message:"Year is required."}]},r.a.createElement(E.a,{onChange:R,min:1890,max:2060})))),r.a.createElement(s.a.Item,{name:"description"},r.a.createElement(p.a.TextArea,{rows:4,placeholder:"Add description (optional)"})),r.a.createElement(s.a.Item,null,r.a.createElement(h.a,{ghost:!0,shape:"round",htmlType:"submit"},"Download Events")),null!=D&&r.a.createElement("p",null,D)),r.a.createElement(g.a,{visible:null!=t,onCancel:function(){return l(null)},footer:null},t),r.a.createElement(y.a,{title:"ABOUT M\u25d0\u25d1N DAYS",placement:"right",closable:!1,onClose:function(){return k(!1)},visible:N},r.a.createElement("p",null,"My dad celebrates his birthday according to the ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Chinese_calendar"},"Chinese calendar"),". Sadly, calendar apps do not let you create a recurring event based on these traditional calendars. I made M\u25d0\u25d1N DAYS so that anyone can create annual lunar calendar events."),r.a.createElement("p",null,"The most commonly used calendar in the world is the Gregorian calendar. Some traditional holidays, such as Chinese New Year, are based on a lunisolar calendar, often colloquially called the lunar calendar.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[203,1,2]]]);
//# sourceMappingURL=main.ca329bbf.chunk.js.map