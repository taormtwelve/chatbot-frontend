(this["webpackJsonpchatbot-project"]=this["webpackJsonpchatbot-project"]||[]).push([[0],{25:function(e,t,s){},27:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),i=s(13),n=s.n(i),r=(s(25),s(4)),d=s.n(r),l=s(14),h=s(15),j=s(16),o=s(17),b=s(20),p=s(19),u=(s(27),s(18)),x=s.n(u).a.create({baseURL:"https://chatbot-backend-4rm7ds5isa-an.a.run.app/"}),m=s(0),O=function(e){Object(b.a)(s,e);var t=Object(p.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).state={},a.onChange=function(e){var t=e.target,s=t.name,c=t.value;a.setState(Object(h.a)({},s,c))},a.onKeyPress=function(e){if("Enter"===e.key&&e.target.value){var t=a.state.QnA;t.reverse(),t.push({Q:a.state.question}),t.reverse(),a.setState({QnA:t}),e.target.value="",a.ans()}},a.onClick=function(e){a.setState({question:e.target.innerHTML});var t=a.state.QnA;t.reverse(),t.push({Q:e.target.innerHTML}),t.reverse(),a.setState({QnA:t}),a.ans(e)},a.state={QnA:[{A:["\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a"]}],question:"",wait:!1,f_questions:[]},x.get("/get").then((function(e){a.setState({f_questions:e.data.questions})})).catch((function(e){return console.log(e)})),a}return Object(o.a)(s,[{key:"ans",value:function(){var e=Object(l.a)(d.a.mark((function e(t){var s=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post("/",t?{Q:t.target.innerHTML}:{Q:this.state.question}).then((function(e){var t=s.state.QnA,a=[];t.reverse(),e.data.A1&&a.push(e.data.A1),e.data.A2&&a.push(e.data.A2),e.data.A3&&a.push(e.data.A3),e.data.A4&&a.push(e.data.A4),e.data.A5&&a.push(e.data.A5),e.data.A6&&a.push(e.data.A6),t.push({A:a}),t.reverse(),s.setState({QnA:t}),x.post("/save",{Q:s.state.question,A:a,tag:e.data.tag}).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}));case 2:this.setState({wait:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"page-content",id:"page-content",children:[Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"padding",children:Object(m.jsx)("div",{className:"row  d-flex justify-content-center",children:Object(m.jsxs)("div",{className:"row col-md-11",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)("div",{className:"card card-bordered",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h4",{className:"card-title",children:Object(m.jsx)("strong",{children:"\u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e1e\u0e1a\u0e1a\u0e48\u0e2d\u0e22"})})}),Object(m.jsxs)("div",{className:"ps-container ps-theme-default ps-active-y",id:"chat-content",children:[Object(m.jsx)("div",{className:"publisher bt-1 border-light",children:Object(m.jsx)("div",{className:"media media-chat",onClick:this.onClick,children:Object(m.jsx)("div",{className:"media-body",children:Object(m.jsx)("p",{id:"0",children:this.state.f_questions[0]})})})}),Object(m.jsx)("div",{className:"publisher bt-1 border-light",children:Object(m.jsx)("div",{className:"media media-chat",onClick:this.onClick,children:Object(m.jsx)("div",{className:"media-body",children:Object(m.jsx)("p",{id:"1",children:this.state.f_questions[1]})})})}),Object(m.jsx)("div",{className:"publisher bt-1 border-light",children:Object(m.jsx)("div",{className:"media media-chat",onClick:this.onClick,children:Object(m.jsx)("div",{className:"media-body",children:Object(m.jsx)("p",{id:"2",children:this.state.f_questions[2]})})})})]})]})}),Object(m.jsx)("div",{className:"col-md-8",children:Object(m.jsxs)("div",{className:"card card-bordered",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h4",{className:"card-title",children:Object(m.jsx)("strong",{children:"CPE bot"})})}),Object(m.jsxs)("div",{className:"ps-container ps-theme-default ps-active-y chat-box",id:"chat-content",children:[this.state.QnA.map((function(e){return e.Q?Object(m.jsx)("div",{className:"media media-chat media-chat-reverse",children:Object(m.jsx)("div",{className:"media-body",children:Object(m.jsx)("p",{children:e.Q})})}):Object(m.jsxs)("div",{className:"media media-chat",children:[Object(m.jsx)("img",{src:".\\img\\BOT.png",width:"45px",height:"45px"}),Object(m.jsx)("div",{className:"media-body",children:e.A.map((function(e){return"object"==typeof e?Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:e.value,target:"_blank",children:e.key})}):Object(m.jsx)("p",{children:e})}))})]})})),Object(m.jsx)("div",{className:"ps-scrollbar-x-rail",style:{left:"0px",bottom:"0px"},children:Object(m.jsx)("div",{className:"ps-scrollbar-x",tabIndex:"0",style:{left:"0px",width:"0px"}})}),Object(m.jsx)("div",{className:"ps-scrollbar-y-rail",style:{top:"0px",height:"0px",right:"2px"},children:Object(m.jsx)("div",{className:"ps-scrollbar-y",tabIndex:"0",style:{top:"0px",height:"2px"}})})]}),Object(m.jsxs)("div",{className:"publisher bt-1 border-light",children:[Object(m.jsx)("img",{src:".\\img\\HUMAN.png",width:"45px",height:"45px"}),Object(m.jsx)("input",{id:"question",name:"question",className:"publisher-input",type:"text",maxLength:"80",placeholder:"\u0e40\u0e02\u0e35\u0e22\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21",onChange:this.onChange,onKeyPress:this.onKeyPress}),Object(m.jsxs)("span",{className:"publisher-btn file-group",children:[Object(m.jsx)("i",{className:"fa fa-paperclip file-browser"}),Object(m.jsx)("input",{type:"file"})]}),Object(m.jsx)("a",{className:"publisher-btn",href:"#","data-abc":"true",children:Object(m.jsx)("i",{className:"fa fa-smile"})}),Object(m.jsx)("a",{className:"publisher-btn text-info",href:"#","data-abc":"true",children:Object(m.jsx)("i",{className:"fa fa-paper-plane"})})]})]})})]})})}),Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"active",children:"CPE"})})})]})}}]),s}(c.a.Component),v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),i(e),n(e)}))};n.a.render(Object(m.jsx)(O,{}),document.getElementById("root")),v()}},[[47,1,2]]]);
//# sourceMappingURL=main.4e1f4db6.chunk.js.map