"use strict";(self.webpackChunklearn_lingo_project=self.webpackChunklearn_lingo_project||[]).push([[861],{8600:function(e,s,n){n.d(s,{Z:function(){return I}});var r="TeachersList_teachersList__90mrM",t="TeachersListItem_teachersListItem__1tUFP",i="TeachersListItem_favoriteBtn__ffI4P",a="TeachersListItem_avatarBox__tiDyD",c="TeachersListItem_avatarImg__aIQLA",o="TeachersListItem_onlineStatusIcon__pAsfQ",l="TeachersListItem_descriptionBox__9Fz4X",u="TeachersListItem_lessonsInfoBox__vabHA",h="TeachersListItem_lessonsInfoList__rBEHG",d="TeachersListItem_lessonsInfoListItem__vD8eq",f="TeachersListItem_lessonsInfoListItemAccent__evxtZ";n(2791);var x=n.p+"static/media/sprite.54cef8f13ca473cb668a4ed2d14a6abb.svg",v=n(4420),j=n(9926),m=n(2605),p=n(8178),_=n(184),g=function(e){var s=e.teacher,n=(0,v.I0)(),r=(0,v.v9)(j.t),g=(0,v.v9)(m.Ts),b=null===r||void 0===r?void 0:r.some((function(e){return e.id===s.id})),I=s.avatar_url,L=s.conditions,N=s.experience,T=s.languages,k=s.lesson_info,w=s.lessons_done,y=s.levels,Z=s.name,C=s.price_per_hour,F=s.rating,A=s.reviews,S=s.surname;return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("li",{className:t,children:[(0,_.jsxs)("div",{className:a,children:[(0,_.jsx)("img",{src:I||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPr1oSKpobYe8EiA_UbHE7lM5xBsnf4DZEvuM7shysD3Q_VMpgFjMSNCZDJK13Z1bYwtw&usqp=CAU",alt:"".concat(Z," ").concat(S),className:c}),(0,_.jsx)("svg",{width:"12",height:"12","aria-label":"online status icon",className:o,children:(0,_.jsx)("use",{href:x+"#icon-online"})})]}),(0,_.jsxs)("div",{className:l,children:[(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{children:"Languages"}),(0,_.jsxs)("h3",{children:[Z," ",S]})]}),(0,_.jsxs)("div",{className:u,children:[(0,_.jsxs)("ul",{className:h,children:[(0,_.jsxs)("li",{className:d,children:[(0,_.jsx)("svg",{width:"16",height:"16","aria-label":"book icon",fill:"transparent",stroke:"#121417",children:(0,_.jsx)("use",{href:x+"#icon-book"})}),"Lessons online"]}),(0,_.jsxs)("li",{children:["Lessons done: ",w]}),(0,_.jsxs)("li",{className:d,children:[(0,_.jsx)("svg",{width:"16",height:"16","aria-label":"star icon",children:(0,_.jsx)("use",{href:x+"#icon-star"})}),"Rating: ",F]}),(0,_.jsxs)("li",{children:["Price / 1 hour:"," ",(0,_.jsxs)("span",{className:f,children:[C,"$"]})]})]}),(0,_.jsx)("button",{type:"button",className:i,onClick:function(){g?(console.log("favoritesTeachers: ",r),n(b?(0,p.CP)(s):(0,p.J)(s))):alert("\u041enly authorized users can add cards to favorites")},children:(0,_.jsx)("svg",{width:"26",height:"26","aria-label":"heart icon",fill:b?"#FFC531":"transparent",stroke:b?"#FFC531":"#121417",children:(0,_.jsx)("use",{href:x+"#icon-heart"})})})]})]}),(0,_.jsxs)("ul",{children:[(0,_.jsxs)("li",{children:[(0,_.jsx)("span",{children:"Speaks:"}),T.join(", ")]}),(0,_.jsxs)("li",{children:[(0,_.jsx)("span",{children:"Lesson Info:"}),k]}),(0,_.jsxs)("li",{children:[(0,_.jsx)("span",{children:"Conditions:"}),L]})]}),(0,_.jsx)("button",{type:"button",children:"Read more"}),(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{children:N}),(0,_.jsx)("ul",{children:null===A||void 0===A?void 0:A.map((function(e,s){return(0,_.jsxs)("li",{children:[(0,_.jsx)("img",{src:"",alt:""}),(0,_.jsx)("p",{children:e.reviewer_name}),(0,_.jsx)("p",{children:e.reviewer_rating}),(0,_.jsx)("p",{children:e.comment})]},s)}))})]}),(0,_.jsx)("ul",{children:null===y||void 0===y?void 0:y.map((function(e,s){return(0,_.jsx)("li",{children:e},s)}))}),(0,_.jsx)("button",{type:"button",children:"Book trial lesson"})]})]})})},b="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",I=function(e){var s=e.teachers;return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("ul",{className:r,children:s.map((function(e){return(0,_.jsx)(g,{teacher:e},function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,s="",n=crypto.getRandomValues(new Uint8Array(e));e--;)s+=b[63&n[e]];return s}())}))})})}},1861:function(e,s,n){n.r(s),n.d(s,{default:function(){return x}});var r=n(3433),t=n(1413),i=n(5861),a=n(9439),c=n(7757),o=n.n(c),l="TeachersPage_teachersPageSection__gh0NF",u=n(2791),h=n(2685),d=n(8600),f=n(184),x=function(){var e=(0,h.N8)(),s=(0,u.useState)([]),n=(0,a.Z)(s,2),c=n[0],x=n[1],v=(0,u.useState)(""),j=(0,a.Z)(v,2),m=j[0],p=j[1],_=(0,u.useCallback)(function(){var e=(0,i.Z)(o().mark((function e(s){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.jM)(s,(function(e){if(e.exists()){var s=[];e.forEach((function(e){var n=e.key,r=e.val();s.push((0,t.Z)({id:n},r)),p(n)})),x((function(e){return[].concat((0,r.Z)(e),s)}))}else console.log("No data available")}));case 3:return n=e.sent,e.abrupt("return",(function(){return n.unsubscribe()}));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(s){return e.apply(this,arguments)}}(),[]);(0,u.useEffect)((function(){var s=function(){var s=(0,i.Z)(o().mark((function s(){var n;return o().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n=(0,h.IO)((0,h.iH)(e,"teachers"),(0,h.R)(),(0,h.Wu)("3")),s.next=3,_(n);case 3:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return s(),function(){return h.jM.unsubscribe()}}),[_,e]);return(0,f.jsxs)("section",{className:l,children:[(0,f.jsx)(d.Z,{teachers:c}),(0,f.jsx)("button",{type:"button",onClick:function(){var s=(0,h.IO)((0,h.iH)(e,"teachers"),(0,h.R)(),(0,h.TQ)(m),(0,h.Wu)(String(Number(m)+4)));_(s)},children:"Load more"})]})}},9926:function(e,s,n){n.d(s,{t:function(){return r}});var r=function(e){return e.favorites.favoritesTeachers}}}]);
//# sourceMappingURL=861.67d2836d.chunk.js.map