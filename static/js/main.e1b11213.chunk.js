(this.webpackJsonpgutask=this.webpackJsonpgutask||[]).push([[0],{38:function(n,e,t){"use strict";t.r(e);var i,r,c=t(1),a=t.n(c),o=t(20),s=t.n(o),d=t(6),l=t(3),u=t(8),b=t(7),j=t(2),h=t(15),f=t(21),O=t(28),p=t(9),m=t(22),g=t(27),x=t(29),y=function(n){Object(m.a)(t,n);var e=Object(g.a)(t);function t(){return Object(h.a)(this,t),e.apply(this,arguments)}return Object(f.a)(t,[{key:"add",value:function(n){n.id=this.maxId()+1,Object(O.a)(Object(p.a)(t.prototype),"push",this).call(this,n)}},{key:"remove",value:function(n){var e=this.findIndexById(n);e>-1&&this.splice(e,1)}},{key:"edit",value:function(n){var e=this.findIndexById(n);e>-1&&(this[e].description=n.description,this[e].gravity=n.gravity,this[e].urgency=n.urgency,this[e].tendency=n.tendency,this[e].gut=n.gravity*n.urgency*n.tendency)}},{key:"get",value:function(n){return this.find((function(e){return n.id===e.id}))}},{key:"findIndexById",value:function(n){return this.findIndex((function(e){return n.id===e.id}))}},{key:"sortByGut",value:function(){this.sort((function(n,e){return(n.status?1:0)-(e.status?1:0)||e.gut-n.gut}))}},{key:"maxId",value:function(){return Math.max.apply(Math,Object(b.a)(this.map((function(n){return n.id}))).concat([0]))}}]),t}(Object(x.a)(Array));!function(n){n.WRITE="WRITE",n.CLEAR_DRAFT_CREATE="CLEAR_DRAFT_CREATE",n.CLEAR_DRAFT_EDIT="CLEAR_DRAFT_EDIT"}(i||(i={})),function(n){n.CREATE_DRAFT="create_task",n.EDIT_DRAFT="edit_task",n.TASKLIST="tasklist"}(r||(r={}));var v=function(n,e){var t=e.type,c=e.payload;switch(t){case i.WRITE:return localStorage.setItem(r.TASKLIST,JSON.stringify(c.tasklist)),Object(j.a)(Object(j.a)({},n),{},{tasklist:c.tasklist});case i.CLEAR_DRAFT_CREATE:return localStorage.removeItem(r.CREATE_DRAFT),Object(j.a)({},n);case i.CLEAR_DRAFT_EDIT:return localStorage.removeItem(r.EDIT_DRAFT),Object(j.a)({},n);default:return n}},k={tasklist:function(){var n=localStorage.getItem(r.TASKLIST);return n?Object(u.a)(y,Object(b.a)(JSON.parse(n))):new y}()},w=a.a.createContext(void 0);var C,T,A,E,R,I,F,_,D,S,z,L,B,H,W=function(n,e){var t=Object(c.useState)((function(){var t=localStorage.getItem(n);return t?JSON.parse(t):e})),i=Object(d.a)(t,2),r=i[0],a=i[1];return Object(c.useEffect)((function(){localStorage.setItem(n,JSON.stringify(r))}),[n,r]),[r,a]},J={title:"light",color:{primary:"#FCFCFC",secondary:"#585858",unselected:"#A9A9A9"},shadow:"0 5px 38px -20px rgb(0 0 0 / 14%), 0 9px 20px -15px rgb(0 0 0 / 12%), 0 11px 15px -15px rgb(0 0 0 / 20%)",radius:".8rem"},M={title:"dark",color:{primary:"#585858",secondary:"#FCFCFC",unselected:"#CACACA"},shadow:"0 5px 38px -20px rgb(0 0 0 / 14%), 0 9px 20px -15px rgb(0 0 0 / 12%), 0 11px 15px -15px rgb(0 0 0 / 20%)",radius:".8rem"},N=t(4),G=Object(l.c)(C||(C=Object(N.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        outline: none;\n    }\n\n    body {\n        background: ",";\n        transition: background-color 0.2s ease-in-out;\n        font-size: 0.8em;\n        letter-spacing: .03rem;\n        color: ",";\n        transition: color 0.2s ease-in-out;\n        font-family: 'Quicksand', sans-serif;\n    }\n"])),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.secondary})),K=t(10),P=t(26),Q=t.n(P),q=l.e.div(T||(T=Object(N.a)(["\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 6px 5px -5px rgba(0, 0, 0, 0.2);\n    height: 3.5rem;\n    width: 100%;\n    padding: 0 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: ",";\n"])),(function(n){return n.theme.color.primary})),U=l.e.div(A||(A=Object(N.a)(["\n    i {\n        margin-left: 1rem;\n    }\n"]))),V=l.e.div(E||(E=Object(N.a)(["\n    margin-left: auto;\n    display: flex;\n    justify-content: space-between;\n    align-content: flex-end;\n\n    div + div {\n        margin-left: 1rem;\n    }\n"]))),X=t(5),Y=l.e.i(R||(R=Object(N.a)(["\n\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: 'liga';\n    -webkit-font-smoothing: antialiased;\n    text-rendering: optimizeLegibility;\n    -webkit-font-feature-settings: 'liga';\n    -moz-font-feature-settings: 'liga';\n    font-feature-settings: 'liga';\n\n    ","\n\n    margin-right: .3rem;\n\n    ","\n"])),(function(n){return n.pointer&&Object(l.d)(I||(I=Object(N.a)(["\n        cursor: pointer;\n    "])))}),(function(n){return n.main&&Object(l.d)(F||(F=Object(N.a)(["\n        margin-right: 0;\n        background-color: ",";\n        color: ",";\n        padding: .5rem;\n        border-radius: .3rem;\n        cursor: pointer;\n        transition: opacity ease-in-out .2s;\n        transition: transform ease-in-out .2s;\n\n        &:active {\n            opacity: .8;\n            transform: scale(.9, .9);\n        }\n    "])),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.color.primary}))})),Z=t(0),$=function(n){var e=n.children,t=Object(X.a)(n,["children"]);return Object(Z.jsx)(Y,Object(j.a)(Object(j.a)({},t),{},{children:e}))},nn=l.e.div(_||(_=Object(N.a)(["\n    width: 80%;\n\n    @media only screen and (min-width: 750px) {\n        & {\n            width: 50%;\n        }\n    }\n\n    padding: 2rem;\n    font-size: .9rem;\n\n    display: flex;\n    flex-direction: column;\n    transform: scale(0.85, 0.85);\n\tbackground-color: ",";\n    color: ",";\n\tborder-radius: ",";\n\toverflow-y: auto;\n\tmargin-top: 10%;\n\tmin-height: 70vh;\n    max-height: 85vh;\n\t\n\topacity: 0;\n\n    ","\n\n    /* Active modal */\n    @keyframes show-modal {\n        to {\n            transform: scale(1, 1);\n            margin-top: 0;\n            opacity: 1;\n        }\n    }\n"])),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.radius}),(function(n){return n.show&&Object(l.d)(D||(D=Object(N.a)(["\n        animation: show-modal .2s forwards;\n    "])))})),en=l.e.div(S||(S=Object(N.a)(["\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-bottom: 1rem;\n    display: flex;\n    width: 100%;\n\n    div {\n        display: flex;\n        justify-content: space-between;\n        width: 100%;\n    }\n"]))),tn=l.e.div(z||(z=Object(N.a)(["\n    font-size: 1.2rem;\n    font-weight: bold;\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n"]))),rn=l.e.div(L||(L=Object(N.a)(["\n    font-weight: bold;\n    margin: 1rem 0;\n    position: relative; \n"]))),cn=l.e.div(B||(B=Object(N.a)(["\n    background-color: rgba(0, 0, 0, 0);\n    position: fixed;\n    height: 100vh;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    ","\n\n    @keyframes show-modal-wrapper {\n        to {\n            background-color: rgba(0, 0, 0, 0.15);\n            backdrop-filter: blur(.08rem);\n        }\n    }\n"])),(function(n){return n.show&&Object(l.d)(H||(H=Object(N.a)(["\n        animation: show-modal-wrapper .2s forwards;\n    "])))})),an=function(n){var e=n.children,t=n.show,i=n.onHide,r=Object(X.a)(n,["children","show","onHide"]);return Object(Z.jsx)(Z.Fragment,{children:t&&Object(Z.jsx)(cn,{show:!0,onClick:function(n){n.target===n.currentTarget&&i&&i()},children:Object(Z.jsx)(nn,Object(j.a)(Object(j.a)({show:!0},r),{},{children:e}))})})};an.Title=function(n){var e=n.children,t=n.onHide,i=Object(X.a)(n,["children","onHide"]);return Object(Z.jsx)(en,Object(j.a)(Object(j.a)({},i),{},{children:Object(Z.jsxs)("div",{children:[e,t&&Object(Z.jsx)($,{pointer:!0,onClick:t,children:"close"})]})}))},an.Footer=function(n){var e=n.children,t=Object(X.a)(n,["children"]);return Object(Z.jsx)(tn,Object(j.a)(Object(j.a)({},t),{},{children:e}))},an.Body=function(n){var e=n.children,t=Object(X.a)(n,["children"]);return Object(Z.jsx)(rn,Object(j.a)(Object(j.a)({},t),{},{children:e}))};var on,sn,dn,ln,un,bn,jn,hn,fn,On,pn,mn,gn,xn=an,yn=l.e.div(on||(on=Object(N.a)(["\n    position: relative;\n    padding: 0;\n"]))),vn=l.e.label(sn||(sn=Object(N.a)(["\n    font-size: .9rem;\n    padding-left: .2rem;\n    font-weight: bold;\n\tcolor: ",";\n"])),(function(n){return n.theme.color.secondary})),kn=l.e.input(dn||(dn=Object(N.a)(["\n    height: 2rem;\n    font-size: 1rem;\n    text-indent: .2rem;\n\tfont-family: inherit;\n\toutline: none;\n\tbox-shadow: none;\n    font-weight: bold;\n    background-color: transparent;\n\tcolor: ",";\n\ttransition: border .2s linear;\n    min-width: 100%;\n    border: none;\n    border-bottom: .15rem solid ",";\n\n    &:focus {\n        border-bottom-color: ",";\n    }\n\n    /* Placeholder color */\n    ::placeholder {\n        color: ",";\n        font-weight: bold;\n        opacity: 1; /* Firefox */\n    }\n    \n    :-ms-input-placeholder { /* Internet Explorer 10-11 */\n        color: ",";\n        font-weight: bold;\n    }\n\n    ::-ms-input-placeholder { /* Microsoft Edge */\n        color: ",";\n        font-weight: bold;\n    }\n\n    /* Remove autofill yellow background */\n    &:-webkit-autofill {\n        transition: all 0s linear 5000s;\n    }\n"])),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.color.unselected}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.color.unselected}),(function(n){return n.theme.color.unselected}),(function(n){return n.theme.color.unselected})),wn=function(n){var e=n.label,t=n.placeholder,i=n.name,r=n.value,a=n.onChange,o=Object(X.a)(n,["label","placeholder","name","value","onChange"]),s=Object(c.useState)(r),l=Object(d.a)(s,2),u=l[0],b=l[1],h=function(n){b(n.target.value),a&&a(n)};return Object(Z.jsxs)(yn,{children:[e&&Object(Z.jsx)(vn,{htmlFor:"name",children:e}),Object(Z.jsx)(kn,Object(j.a)(Object(j.a)({},o),{},{id:i||"",name:i||"",placeholder:t||"",value:u,onChange:h,onInput:h}))]})},Cn=l.e.div(ln||(ln=Object(N.a)(["\n    margin-top: 2rem;\n"]))),Tn=l.e.button(un||(un=Object(N.a)(["\n\twidth: 100%;\n    font-size: 1rem;\n\tpadding: .8rem;\n\tfont-family: inherit;\n\toutline: none;\n\tbox-shadow: none !important;\n\ttransition: border 0.2s;\n    color: ",";\n    background-color: transparent;\n\tborder: .15rem solid ",";\n\tborder-radius: ",";\n\tfont-weight: bold !important;\n\ttransition: all 0.2s ease-in-out;\n\tletter-spacing: .08rem !important;\n\n    &:active {\n        opacity: 0.6;\n    }\n\n\t&:hover {\n\t\t",";\n\t}\n"])),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.radius}),(function(n){return!n.disabled&&Object(l.d)(bn||(bn=Object(N.a)(["\n\t\t\tbackground-color: ",";\n\t\t\tcolor: ",";\n\t\t\tcursor: pointer;\n\t\t"])),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.color.primary}))})),An=function(n){var e=n.children,t=n.loading,i=n.loading_text,r=Object(X.a)(n,["children","loading","loading_text"]);return Object(Z.jsx)(Cn,{children:Object(Z.jsx)(Tn,Object(j.a)(Object(j.a)({},r),{},{disabled:t,children:t?i:e}))})},En=l.e.div(jn||(jn=Object(N.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n"]))),Rn=l.e.div(hn||(hn=Object(N.a)(["\n    margin: 1.2rem 0;\n"]))),In=l.e.p(fn||(fn=Object(N.a)(["\n    &:first-letter {\n        text-transform: capitalize !important;\n    }\n\n    font-size: 1rem;\n    margin-bottom: .5rem;\n"]))),Fn=l.e.input(On||(On=Object(N.a)(["\n    display: none;\n"]))),_n=l.e.div(pn||(pn=Object(N.a)(["\n    height: 1.5rem;\n    width: 1.5rem;\n    display: inline-block;\n    border-radius: 50%;\n    cursor: pointer;\n    border: 1px solid ",";\n\n    ","\n"])),(function(n){return n.theme.color.secondary}),(function(n){return n.active?Object(l.d)(mn||(mn=Object(N.a)(["\n        background-color: ",";\n    "])),(function(n){return n.theme.color.primary})):Object(l.d)(gn||(gn=Object(N.a)(["\n        background-color: ",";\n    "])),(function(n){return n.theme.color.secondary}))})),Dn=function(n){var e=n.children,t=n.label,i=Object(X.a)(n,["children","label"]);return Object(Z.jsxs)(Rn,{children:[t&&Object(Z.jsx)(In,{children:t}),Object(Z.jsx)(En,Object(j.a)(Object(j.a)({},i),{},{children:e}))]})};Dn.Radio=function(n){var e=n.children,t=n.active,i=Object(X.a)(n,["children","active"]);return Object(Z.jsxs)("label",{children:[Object(Z.jsx)(Fn,Object(j.a)({type:"radio"},i)),Object(Z.jsx)(_n,{active:t,children:e})]})};var Sn=Dn,zn=function n(e){Object(h.a)(this,n),this.description=void 0,this.gravity=void 0,this.urgency=void 0,this.tendency=void 0,this.id=void 0,this.status=void 0,this.gut=void 0,this.description=e.description,this.gravity=e.gravity,this.urgency=e.urgency,this.tendency=e.tendency,this.status=!1,this.id=0,this.gut=this.gravity*this.urgency*this.tendency};zn.lastId=void 0;var Ln,Bn,Hn,Wn,Jn,Mn,Nn={gravity:1,urgency:1,tendency:1},Gn=Object(j.a)({description:""},Nn),Kn=function(n){var e=n.toggleTheme,t=Object(c.useContext)(l.a),a=t.title,o=t.color,s=t.shadow,h=Object(c.useContext)(w),f=Object(c.useState)(!1),O=Object(d.a)(f,2),p=O[0],m=O[1],g=W(r.CREATE_DRAFT,Gn),x=Object(d.a)(g,2),v=x[0],k=x[1],C=function(){return m(!1)},T=function(){return Object(Z.jsx)(Z.Fragment,{children:Object.entries(Nn).map((function(n,e){var t=Object(d.a)(n,1)[0];return Object(Z.jsx)(Sn,{label:t,children:Object(Z.jsx)(Z.Fragment,{children:Object(b.a)(Array(5)).map((function(n,e){return Object(Z.jsx)(Sn.Radio,{onClick:function(){!function(n,e){k(Object(j.a)(Object(j.a)({},v),{},Object(K.a)({},n,e)))}(t,e+1)},active:v[t]<=e},e)}))})},e)}))})};return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)(q,{children:[Object(Z.jsx)("h1",{children:"Gutask"}),Object(Z.jsxs)(U,{children:[Object(Z.jsx)(Q.a,{onChange:e,checked:"dark"===a,offColor:o.unselected,onColor:o.unselected,onHandleColor:"#235789",offHandleColor:"#F1D302",activeBoxShadow:s,checkedIcon:!1,uncheckedIcon:!1,height:20,handleDiameter:25,width:35}),Object(Z.jsx)($,{main:!0,onClick:function(){return m(!0)},children:"edit"})]})]}),Object(Z.jsx)(xn,{show:p,onHide:C,children:Object(Z.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),v.description&&""!==v.description.trim()){C();var e=new zn(v);if(h){var t=Object(u.a)(y,Object(b.a)(h.state.tasklist));t.add(e),h.dispatch({type:i.WRITE,payload:Object(j.a)(Object(j.a)({},h.state),{},{tasklist:t})}),h.dispatch({type:i.CLEAR_DRAFT_CREATE,payload:{tasklist:t}}),k(Gn)}}},children:[Object(Z.jsx)(xn.Title,{onHide:C,children:" Create Task "}),Object(Z.jsxs)(xn.Body,{children:[Object(Z.jsx)(wn,{onChange:function(n){var e=n.target,t=e.name,i=e.value;k(Object(j.a)(Object(j.a)({},v),{},Object(K.a)({},t,i)))},name:"description",value:v.description,placeholder:"Description"}),Object(Z.jsx)(T,{})]}),Object(Z.jsx)(xn.Footer,{children:Object(Z.jsx)(V,{children:Object(Z.jsx)(An,{type:"submit",style:{alignSelf:"flex-end"},children:" Create "})})})]})})]})},Pn=l.e.div(Ln||(Ln=Object(N.a)(["\n    min-width: 100%;\n    min-height: calc(100vh - 3.5rem);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),Qn=function(n){var e=n.children;return Object(Z.jsx)(Pn,{children:e})},qn=l.e.div(Bn||(Bn=Object(N.a)(["\n    width: 100%;\n    box-shadow: ",";\n    padding: 2rem;\n    font-size: .9rem;\n    display: flex;\n    justify-content: space-between;\n    transition: opacity ease-in-out .2s;\n    transition: transform ease-in-out .2s;\n\n    & + & {\n        margin-top: 1.5rem;\n    }\n\n    &:active {\n        opacity: .8;\n        transform: scale(99%, 99%);\n    }\n"])),(function(n){return n.theme.shadow})),Un=l.e.div(Hn||(Hn=Object(N.a)(["\n    font-size: 1rem;\n    font-weight: bold;\n    margin-bottom: 1rem;\n    display: flex;\n    text-align: left;\n    width: 80%;\n"]))),Vn=l.e.span(Wn||(Wn=Object(N.a)(["\n    display: flex;\n    height: 2rem;\n    width: 2rem;\n    border-radius: 50%;\n    background-color: ",";\n    color: ",";\n    font-weight: bold;\n    justify-content: center;\n    align-items: center;\n"])),(function(n){return n.theme.color.unselected}),(function(n){return n.theme.color.primary})),Xn=function(n){var e=n.children,t=Object(X.a)(n,["children"]);return Object(Z.jsx)(Un,Object(j.a)(Object(j.a)({},t),{},{children:Object(Z.jsx)("p",{children:e})}))},Yn=function(n){var e=n.task,t=n.onCheck,i=n.children,r=Object(X.a)(n,["task","onCheck","children"]);return Object(Z.jsxs)(qn,Object(j.a)(Object(j.a)({},r),{},{children:[Object(Z.jsx)($,{pointer:!0,onClick:function(n){n.stopPropagation(),t(e)},children:e.status?"check_box":"check_box_outline_blank"}),Object(Z.jsx)(Xn,{children:e.description}),Object(Z.jsx)(Vn,{children:Object(Z.jsx)("span",{children:e.gut})}),i]}))},Zn=l.e.div(Jn||(Jn=Object(N.a)(["\n    width: 90%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    padding-top: 2rem;\n\n    @media only screen and (min-width: 768px) {\n        & {\n            width: 40%;\n        }\n    }\n\n    @media only screen and (min-width: 992px) {\n        & {\n            width: 35%;\n        }\n    }\n"]))),$n=l.e.div(Mn||(Mn=Object(N.a)(["\n    margin-left: auto;\n    display: flex;\n    justify-content: space-between;\n    align-content: flex-end;\n\n    div + div {\n        margin-left: 1rem;\n    }\n"]))),ne={gravity:1,urgency:1,tendency:1},ee=Object(j.a)({description:"",id:-1,status:!1,gut:1},ne),te=function(){var n=Object(c.useContext)(w),e=(null===n||void 0===n?void 0:n.state.tasklist)||new y;e.sortByGut();var t=Object(c.useState)(!1),a=Object(d.a)(t,2),o=a[0],s=a[1],l=W(r.EDIT_DRAFT,ee),h=Object(d.a)(l,2),f=h[0],O=h[1],p=function(){return s(!1)},m=function(e){if(n){var t=Object(u.a)(y,Object(b.a)(n.state.tasklist));t.get(e).status=!t.get(e).status,n.dispatch({type:i.WRITE,payload:Object(j.a)(Object(j.a)({},n.state),{},{tasklist:t})})}},g=function(){return Object(Z.jsx)(Z.Fragment,{children:Object.entries(ne).map((function(n,e){var t=Object(d.a)(n,1)[0];return Object(Z.jsx)(Sn,{label:t,children:Object(Z.jsx)(Z.Fragment,{children:Object(b.a)(Array(5)).map((function(n,e){return Object(Z.jsx)(Sn.Radio,{onClick:function(){!function(n,e){O(Object(j.a)(Object(j.a)({},f),{},Object(K.a)({},n,e)))}(t,e+1)},active:f[t]<=e},e)}))})},e)}))})};return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(Zn,{children:e.map((function(n,e){return Object(Z.jsx)(Yn,{task:n,onCheck:m,onClick:function(){!function(n){O(n),s(!0)}(n)}},e)}))}),Object(Z.jsx)(xn,{show:o,onHide:p,children:Object(Z.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),f.description&&""!==f.description.trim()&&(p(),n)){var t=Object(u.a)(y,Object(b.a)(n.state.tasklist));t.edit(f),n.dispatch({type:i.WRITE,payload:Object(j.a)(Object(j.a)({},n.state),{},{tasklist:t})}),n.dispatch({type:i.CLEAR_DRAFT_EDIT,payload:{tasklist:t}}),O(ee)}},children:[Object(Z.jsx)(xn.Title,{onHide:p,children:" Edit Task "}),Object(Z.jsxs)(xn.Body,{children:[Object(Z.jsx)(wn,{onChange:function(n){var e=n.target,t=e.name,i=e.value;O(Object(j.a)(Object(j.a)({},f),{},Object(K.a)({},t,i)))},name:"description",value:f.description,placeholder:"Description"}),Object(Z.jsx)(g,{})]}),Object(Z.jsxs)(xn.Footer,{children:[Object(Z.jsx)(An,{onClick:function(){if(p(),n){var e=Object(u.a)(y,Object(b.a)(n.state.tasklist));e.remove(f),n.dispatch({type:i.WRITE,payload:Object(j.a)(Object(j.a)({},n.state),{},{tasklist:e})}),n.dispatch({type:i.CLEAR_DRAFT_EDIT,payload:{tasklist:e}}),O(ee)}},children:" Delete "}),Object(Z.jsxs)($n,{children:[Object(Z.jsx)(An,{onClick:p,children:" Cancel "}),Object(Z.jsx)(An,{type:"submit",children:" Save "})]})]})]})})]})},ie=function(){var n=W("theme",J),e=Object(d.a)(n,2),t=e[0],i=e[1],r=Object(c.useReducer)(v,k),a=Object(d.a)(r,2),o=a[0],s=a[1];return Object(Z.jsxs)(l.b,{theme:t,children:[Object(Z.jsx)(G,{}),Object(Z.jsxs)(w.Provider,{value:{state:o,dispatch:s},children:[Object(Z.jsx)(Kn,{toggleTheme:function(){i("light"===t.title?M:J)}}),Object(Z.jsx)(Qn,{children:Object(Z.jsx)(te,{})})]})]})};s.a.render(Object(Z.jsx)(a.a.StrictMode,{children:Object(Z.jsx)(ie,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.e1b11213.chunk.js.map