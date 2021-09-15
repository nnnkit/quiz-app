(this.webpackJsonpsample=this.webpackJsonpsample||[]).push([[0],{33:function(t,e,s){},34:function(t,e,s){"use strict";s.r(e);var n=s(1),a=s.n(n),r=s(18),c=s.n(r),i=(s(26),s(8)),o=s(9),u=s(12),l=s(11),d=s(10),h=s(0),j=function(t){Object(u.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(i.a)(this,s),(n=e.call(this,t)).state={categories:null},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this;fetch("https://opentdb.com/api_category.php").then((function(t){return t.json()})).then((function(e){t.setState({categories:e.trivia_categories})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"quiz",children:[Object(h.jsx)("div",{className:"title my-5 has-text-info-dark",style:{textAlign:"center"},children:"Popular Quizzes"}),Object(h.jsx)("div",{className:"columns is-centered is-multiline mx-4 py-6",children:this.state.categories?this.state.categories.map((function(t){return Object(h.jsxs)("span",{className:"column is-3 box my-4  py-6 has-background-light has-text-centered mx-4",children:[Object(h.jsx)("div",{className:"subtitle has-text-dark",style:{fontSize:"1.75rem"},children:t.name}),Object(h.jsx)(d.b,{to:"/quiz/".concat(t.id),children:Object(h.jsx)("div",{className:"button is-warning ","data-id":t.id,children:"Take this Quiz"})})]},t.id)})):"Loading..."})]})}}]),s}(a.a.Component),x=s(21),b=function(t){Object(u.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(i.a)(this,s),(n=e.call(this,t)).getOptions=function(){var t=Object(x.a)(n.state.quizData["".concat(n.state.currentQuestionIndex)].incorrect_answers);return t.push(n.state.quizData["".concat(n.state.currentQuestionIndex)].correct_answer),t.sort((function(){return Math.random()-.5})),t},n.getAnswers=function(){var t=[];return n.state.quizData.forEach((function(e){t.push(e.correct_answer)})),t},n.handleClick=function(t){"next"===t.target.dataset.id?n.state.currentQuestionIndex<9?n.state.done?n.setState((function(t){var e=n.state.score,s="";return n.state.userAnswer===n.state.quizData[n.state.currentQuestionIndex].correct_answer&&e++,s=n.state.userAnswer===n.state.quizData[n.state.currentQuestionIndex].correct_answer?"\u2705":"\u274c",{currentQuestionIndex:t.currentQuestionIndex+1,done:!1,userData:t.userData.concat(n.state.userAnswer),score:e,output:t.output.concat(s)}}),(function(){n.setState({options:n.getOptions()})})):n.setState({error:"Select an option to proceed..."}):n.state.done?n.setState((function(t){var e=n.state.score,s="";return n.state.userAnswer===n.state.quizData[n.state.currentQuestionIndex].correct_answer&&e++,s=n.state.userAnswer===n.state.quizData[n.state.currentQuestionIndex].correct_answer?"\u2705":"\u274c",{isFinished:!0,done:!1,userData:t.userData.concat(n.state.userAnswer),score:e,output:t.output.concat(s)}}),(function(){n.setState({options:n.getOptions()})})):n.setState({error:"Select an option to proceed..."}):n.setState((function(e){return t.target.innerText===e.userAnswer?{done:!e.done,userAnswer:null}:{done:!0,userAnswer:t.target.innerText,error:null}}))},n.state={quizId:null,quizData:null,userData:[],options:null,score:0,currentQuestionIndex:0,done:!1,userAnswer:null,error:null,isFinished:!1,output:[]},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this;fetch("https://opentdb.com/api.php?amount=10&category=".concat(this.props.match.params.id,"&type=multiple")).then((function(t){return t.json()})).then((function(e){t.setState({quizId:t.props.match.params.id,quizData:e.results},(function(){t.setState({options:t.getOptions()})}))}))}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"quiz",children:[Object(h.jsxs)("div",{className:"title my-5 pt-4 has-text-dark",style:{textAlign:"center"},children:["Category:"," ",Object(h.jsx)("span",{children:this.state.quizId?this.state.quizData[0].category:"loading..."})," "]}),this.state.isFinished?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"title has-text-danger",children:["Your Score: ",this.state.score]}),Object(h.jsxs)("table",{className:"table is-fullwidth is-bordered is-striped",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[" ",Object(h.jsx)("th",{children:"Question"})," ",Object(h.jsx)("th",{children:"Correct Answer"})," ",Object(h.jsx)("th",{children:"Your Answer"}),Object(h.jsx)("th",{children:"Right/Wrong?"})]})}),Object(h.jsx)("tbody",{children:this.state.quizData.map((function(e,s){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"has-text-weight-bold",children:e.question}),Object(h.jsx)("td",{className:"has-text-centered",children:e.correct_answer}),Object(h.jsx)("td",{className:"has-text-centered",children:t.state.userData[s]}),Object(h.jsx)("td",{className:"has-text-centered",children:t.state.output[s]})]})})}))})]})]}):Object(h.jsx)("div",{className:"columns is-centered is-multiline mx-4 py-6",children:this.state.quizId?Object(h.jsxs)("div",{className:"column is-10",children:[Object(h.jsxs)("div",{className:"subtitle has-text-success-dark",children:["Question ",this.state.currentQuestionIndex+1,"/10"," "]}),Object(h.jsx)("progress",{className:"progress is-success is-small",value:10*(this.state.currentQuestionIndex+1),max:"100"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"is-size-4 has-text-weight-bold box has-background-info-light",children:this.state.quizData["".concat(this.state.currentQuestionIndex)].question}),this.state.options?this.state.options.map((function(e){return Object(h.jsx)("div",{className:t.state.userAnswer===e?"button is-fullwidth is-grey is-light my-5 py-5 has-background-success":"button is-fullwidth is-grey is-light my-5 py-5",onClick:t.handleClick,children:e})})):"Loading..."]}),this.state.error?Object(h.jsx)("div",{className:"has-text-danger has-text-centered",children:this.state.error}):"",Object(h.jsxs)("div",{className:"level",children:[Object(h.jsx)("div",{className:"level-left"}),Object(h.jsx)("div",{className:"level-right",children:Object(h.jsx)("div",{"data-id":"next",className:"button px-6 is-primary",onClick:this.handleClick,children:"Next"})})]})]}):"Starting Quiz..."})]})}}]),s}(a.a.Component),p=s(2),m=function(t){Object(u.a)(s,t);var e=Object(l.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("svg",{id:"visual",viewBox:"0 0 900 600",className:"background-svg",xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:[Object(h.jsx)("rect",{x:"0",y:"0",width:"960",height:"540",fill:"#FFFFFF"}),Object(h.jsx)("path",{d:"M0 96L192 97L384 77L576 86L768 94L960 68L960 0L768 0L576 0L384 0L192 0L0 0Z",fill:"#002233",strokeLinecap:"square",strokeLinejoin:"bevel"})]}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"altcampus columns is-centered is-multiline mx-4 py-4",style:{marginTop:"8px"},children:Object(h.jsxs)(d.b,{to:"/",children:[Object(h.jsx)("span",{children:" quiz"}),"App"]})}),Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{path:"/",exact:!0,children:Object(h.jsx)(j,{})}),Object(h.jsx)(p.a,{path:"/quiz/:id",component:b}),Object(h.jsx)(p.a,{path:"*",children:Object(h.jsx)(O,{})})]})]})]})}}]),s}(a.a.Component);function O(){return Object(h.jsx)("h2",{className:"has-text-danger title mt-6 has-text-centered",children:"404: Page not found!"})}var g=m;s(33);c.a.render(Object(h.jsx)(d.a,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.895362a2.chunk.js.map