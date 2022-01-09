(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{20:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r,o,c,a,i,s,u,l,d,b,m,h,p,j,f=t(1),x=t.n(f),O=t(12),g=t.n(O),w=t(26),v=Object.freeze({colors:{primary:"#57d0e6",white:"#fff",borderColor:"#bdbdbd",textColor:"#212529",inputBoxShadow:"0 0 0 0.2rem rgba(87, 208, 230, 0.5)"}}),y=(t(20),t(14)),C=t(5),k=t(15),S=t(2),z=t(3),A=z.a.div(r||(r=Object(S.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1170px;\n  padding: 15px;\n"]))),D=t(0),B=function(n){var e=n.children;return Object(D.jsx)(A,{children:e})},J=z.a.div(o||(o=Object(S.a)(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n"]))),N=z.a.h2(c||(c=Object(S.a)(["\n  font-weight: 500;\n  text-transform: uppercase;\n"]))),L=function(n){var e=n.title,t=n.children;return Object(D.jsxs)(J,{children:[Object(D.jsx)(N,{children:e}),t]})},F=z.a.form(a||(a=Object(S.a)(["\n  border: ",";\n  padding: 30px;\n  width: 500px;\n"])),(function(n){return"2px solid ".concat(n.theme.colors.primary)})),I=z.a.label(i||(i=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: 500;\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n"]))),P=z.a.input(s||(s=Object(S.a)(["\n  width: 300px;\n  margin-top: 5px;\n\n  padding: 0.375rem 0.75rem;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: ",";\n  border: ",";\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  &:focus {\n    border-color: ",";\n    outline: 0;\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return"1px solid ".concat(n.theme.colors.borderColor)}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.inputBoxShadow})),Z=z.a.button(u||(u=Object(S.a)(["\n  background-color: transparent;\n  padding: 5px 10px;\n  border-radius: 5px;\n  width: 120px;\n  font-size: 1rem;\n  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    outline: 0;\n    cursor: pointer;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary})),q=function(n){var e=n.handleSubmit,t=Object(f.useState)(""),r=Object(C.a)(t,2),o=r[0],c=r[1],a=Object(f.useState)(""),i=Object(C.a)(a,2),s=i[0],u=i[1],l=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":c(r);break;case"number":u(r)}};return Object(D.jsxs)(F,{onSubmit:function(n){n.preventDefault(),e({name:o,number:s}),c(""),u("")},children:[Object(D.jsxs)(I,{children:["Name",Object(D.jsx)(P,{type:"text",name:"name",value:o,onChange:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(D.jsxs)(I,{children:["Number",Object(D.jsx)(P,{type:"tel",name:"number",value:s,onChange:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(D.jsx)(Z,{type:"submit",children:"Add contact"})]})},E=z.a.ul(l||(l=Object(S.a)(["\n  padding: 0;\n  width: 380px;\n"]))),M=z.a.li(d||(d=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: ",";\n"])),(function(n){return"1px solid ".concat(n.theme.colors.primary)})),T=z.a.p(b||(b=Object(S.a)(["\n  font-size: 1.1rem;\n"]))),$=z.a.button(m||(m=Object(S.a)(["\n  background-color: transparent;\n  padding: 5px 10px;\n  border-radius: 5px;\n  width: 75px;\n  font-size: 0.8rem;\n  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    outline: 0;\n    cursor: pointer;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary})),G=function(n){var e=n.contacts,t=n.onDeleteContact;return Object(D.jsx)(E,{children:e.map((function(n){return Object(D.jsxs)(M,{children:[Object(D.jsxs)(T,{children:[n.name,": ",n.number]}),Object(D.jsx)($,{type:"button",onClick:function(){return t(n.id)},children:"Delete"})]},n.id)}))})},H=z.a.label(h||(h=Object(S.a)(["\n  font-size: 1.1rem;\n  font-weight: 500;\n"]))),K=z.a.input(p||(p=Object(S.a)(["\n  margin-left: 20px;\n\n  padding: 0.2rem 0.4rem;\n  color: ",";\n  border: ",";\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  &:focus {\n    border-color: ",";\n    outline: 0;\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return"1px solid ".concat(n.theme.colors.borderColor)}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.inputBoxShadow})),Q=function(n){var e=n.value,t=n.onChange;return Object(D.jsxs)(H,{children:["Find contacts by name:",Object(D.jsx)(K,{type:"text",name:"filter",value:e,onChange:t})]})},R=z.a.h2(j||(j=Object(S.a)(["\n  text-align: center;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.primary})),U=function(n){var e=n.title,t=n.children;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(R,{children:e}),t]})},V=function(){var n=Object(f.useState)((function(){var n;return null!==(n=JSON.parse(localStorage.getItem("contacts")))&&void 0!==n?n:[]})),e=Object(C.a)(n,2),t=e[0],r=e[1],o=Object(f.useState)(""),c=Object(C.a)(o,2),a=c[0],i=c[1],s=function(n){var e=n.name,r=n.number,o=e.toLowerCase().replace(/\s+/g,""),c=r.replace(/\D/g,"");return t.some((function(n){return n.name.toLowerCase().replace(/\s+/g,"")===o||n.number.replace(/\D/g,"")===c}))};Object(f.useEffect)((function(){console.log("contacts: ",t),window.localStorage.setItem("contacts",JSON.stringify(t))}),[t]);var u=a.toLowerCase(),l=t.filter((function(n){return n.name.toLowerCase().includes(u)}));return Object(D.jsx)(U,{title:"Phonebook",children:Object(D.jsxs)(B,{children:[Object(D.jsx)(L,{title:"Phonebook",children:Object(D.jsx)(q,{handleSubmit:function(n){var e=n.name,t=n.number;if(s(n))alert("".concat(e," is already in contacts"));else{var o={id:Object(k.a)(),name:e,number:t};r((function(n){return[o].concat(Object(y.a)(n))}))}}})}),Object(D.jsxs)(L,{title:"Contacts",children:[Object(D.jsx)(Q,{value:a,onChange:function(n){i(n.currentTarget.value)}}),Object(D.jsx)(G,{contacts:l,onDeleteContact:function(n){r((function(e){return e.filter((function(e){return e.id!==n}))}))}})]})]})})};g.a.render(Object(D.jsx)(x.a.StrictMode,{children:Object(D.jsx)(w.b,{theme:v,children:Object(D.jsx)(V,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.dc7133ae.chunk.js.map