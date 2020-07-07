(this.webpackJsonpmoondays=this.webpackJsonpmoondays||[]).push([[0],{202:function(e,a,t){e.exports=t(423)},207:function(e,a,t){},208:function(e,a,t){},423:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),o=(t(207),t(132)),i=(t(208),t(433)),s=t(426),m=t(427),u=t(32),d=t(429),h=t(431),p=t(428),E=t(434),y=t(430),f=t(432),v=(t(209),t(435)),g=t(436),w=t(437),b=t(438),I=t(21),A=t.n(I),N=(t(210),t(211)),S=t(336),j=t(337),x=function(e,a,t){return t=t||"0",(e+="").length>=a?e:new Array(a-e.length+1).join(t)+e},k=function(e){return e.length<4?e.map((function(e){return e.start.map((function(e){return x(e,2)})).join("/")})).join(", "):[e[0],e[1],"...",e[e.length-1]].map((function(e){return"..."===e?e:e.start.map((function(e){return x(e,2)})).join("/")})).join(", ")};var q=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),I=Object(o.a)(c,2),x=I[0],q=I[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"white"},"M\u25d0\u25d1N DAYS"),r.a.createElement(s.a,{gutter:8},r.a.createElement(m.a,null,r.a.createElement("h3",{className:"white",style:{marginBottom:16}},"A lunar calendar event creator. Made by ",r.a.createElement("a",{href:"https://ericbai.co/"},"Eric Bai"),".")),r.a.createElement(m.a,null,r.a.createElement(u.a,{ghost:!0,size:"small",shape:"circle",icon:r.a.createElement(w.a,null),onClick:function(){return q(!0)}}))),r.a.createElement(d.a,{wrapperCol:{span:8},layout:"horizontal",onFinish:function(e){for(var a=e.date,t=e.title,n=e.recurrences,c=e.location,o=e.description,s=[],m=0;m<n;m++){var u=A()().year(a.year()+m).month(a.month()).date(a.date()).solar(),d={title:t,start:[u.year(),u.month()+1,u.date()],duration:{days:1},location:c,description:o};s.push(d)}var h=N.createEvents(s),p=h.error,E=h.value;if(p)l(r.a.createElement(i.a,{icon:r.a.createElement(v.a,null),title:"Something went wrong!",extra:r.a.createElement("div",null,r.a.createElement("p",null,"Sorry! Let Eric know his app is broken!"))}));else{var y=new Blob([E],{type:"text/plain;charset=utf-8"});S.saveAs(y,"".concat(j(t),".ics")),l(r.a.createElement(i.a,{icon:r.a.createElement(g.a,null),title:"".concat(t," downloaded!"),extra:r.a.createElement("div",null,r.a.createElement("p",null,"Your calendar file contains ".concat(s.length," ").concat(1===s.length?"event":"events"," on ").concat(k(s),".")),r.a.createElement("p",null,"Import this file to your favourite calendar app!"),r.a.createElement("p",null,"Note: If you want to delete these events, you will have to delete each one manually."))}))}},initialValues:{recurrences:25}},r.a.createElement(d.a.Item,{name:"title",rules:[{required:!0,message:"Event title is required."}]},r.a.createElement(h.a,{placeholder:"Add event title",size:"large"})),r.a.createElement(d.a.Item,null,r.a.createElement(h.a.Group,{compact:!0,style:{display:"flex",alignItems:"center"}},r.a.createElement(d.a.Item,{noStyle:!0,name:"date",rules:[{required:!0,message:"Date is required."}]},r.a.createElement(p.a,null)),r.a.createElement("div",{className:"white",style:{marginLeft:8}},"(according to the lunar calendar)"))),r.a.createElement(d.a.Item,null,r.a.createElement(h.a.Group,{compact:!0,style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{className:"white",style:{marginRight:8}},"Annually for "),r.a.createElement(d.a.Item,{noStyle:!0,name:"recurrences",rules:[{required:!0,message:"Number of recurrences is required."}]},r.a.createElement(E.a,{min:1,max:100,style:{marginRight:8}})),r.a.createElement("div",{className:"white"},"years"))),r.a.createElement(d.a.Item,{name:"location"},r.a.createElement(h.a,{placeholder:"Add location (optional)",prefix:r.a.createElement(b.a,null)})),r.a.createElement(d.a.Item,{name:"description"},r.a.createElement(h.a.TextArea,{rows:4,placeholder:"Add description (optional)"})),r.a.createElement(d.a.Item,null,r.a.createElement(u.a,{ghost:!0,shape:"round",htmlType:"submit"},"Create Events"))),r.a.createElement(y.a,{visible:null!=t,onCancel:function(){return l(null)},footer:null},t),r.a.createElement(f.a,{title:"ABOUT M\u25d0\u25d1N DAYS ",placement:"right",closable:!1,onClose:function(){return q(!1)},visible:x},r.a.createElement("p",null,"The most commonly used calendar in the world is the Gregorian calendar. Some traditional holidays, such as Chinese New Year, are based on a lunisolar calendar, often colloquially called the lunar calendar."),r.a.createElement("p",null,"My dad celebrates his birthday according to the Chinese calendar. Every year, I'm a bit confused about when to actually celebrate his birthday. I made M\u25d0\u25d1N DAYS so that anyone can specify a lunar calendar date and create annual calendar events for their favourite calendar app.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[202,1,2]]]);
//# sourceMappingURL=main.0f63f1fe.chunk.js.map