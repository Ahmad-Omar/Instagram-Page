(this.webpackJsonpinstaclone=this.webpackJsonpinstaclone||[]).push([[0],[,,,,,,,,,,,,,function(e,s,a){},function(e,s,a){},function(e,s,a){},function(e,s,a){},function(e,s,a){},function(e,s,a){},function(e,s,a){"use strict";a.r(s);var c=a(0),t=a(1),i=a(7),n=a.n(i),r=a(2),l=a(3),o=a(5),m=a(4),j=a.p+"static/media/Instagram-logo.996f4ea9.svg",d=a.p+"static/media/Logo.9d3736aa.svg",p=(a(13),function(e){Object(o.a)(a,e);var s=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,t=new Array(c),i=0;i<c;i++)t[i]=arguments[i];return(e=s.call.apply(s,[this].concat(t))).state={navLinks:[{liName:"Home",liLink:"/",liIcon:"fas fa-home",isActive:!0},{liName:"Live",liLink:"/",liIcon:"fas fa-satellite-dish"},{liName:"Message",liLink:"/",liIcon:"fas fa-comment-alt"},{liName:"Notifications",liLink:"/",liIcon:"fas fa-bell"},{liName:"Settings",liLink:"/",liIcon:"fas fa-cog"},{liName:"Logout",liLink:"/",liIcon:"fas fa-power-off"}]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.navLinks.map((function(e){return Object(c.jsx)("li",{className:"nav-item ".concat(e.isActive?"active":""),children:Object(c.jsxs)("a",{href:e.liLink,children:[Object(c.jsx)("i",{className:e.liIcon})," ",e.liName]})})}));return Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsxs)("div",{className:"logo",children:[Object(c.jsx)("img",{src:d,alt:"instagram-logo",width:"25"}),Object(c.jsx)("img",{src:j,alt:"instagram-text",className:"inst-text",width:"98"})]}),Object(c.jsx)("ul",{className:"nav-items",children:e})]})}}]),a}(t.Component)),b=(a(14),a(15),a.p+"static/media/1.9e391268.jpg");var O=function(){return Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"header-container",children:[Object(c.jsx)("i",{className:"fas fa-camera"}),Object(c.jsxs)("div",{className:"search",children:[Object(c.jsx)("input",{type:"text",placeholder:"Search"}),Object(c.jsx)("i",{className:"fas fa-search"})]}),Object(c.jsxs)("div",{className:"profile-section",children:[Object(c.jsx)("div",{className:"profile-pic",children:Object(c.jsx)("img",{src:b,alt:"profile-pic"})}),Object(c.jsxs)("div",{className:"profile-info",children:[Object(c.jsx)("h5",{className:"profile-name",children:"Emma Watson"}),Object(c.jsx)("span",{children:"Actress, Model"}),Object(c.jsx)("span",{children:"Paris, France"})]})]})]})})},h=(a(16),a.p+"static/media/2.e1917421.jpg"),f=a.p+"static/media/3.380e3832.png",x=a.p+"static/media/4.c326fa16.png",g=a.p+"static/media/5.ad7a58f2.jpg",v=a.p+"static/media/tech.2ceb89d0.png",N=function(e){Object(o.a)(a,e);var s=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,t=new Array(c),i=0;i<c;i++)t[i]=arguments[i];return(e=s.call.apply(s,[this].concat(t))).state={stories:[{mainImg:h,mainTitle:"#Technology",SecondImg:v,secondTitle:"#Android"},{mainImg:f,mainTitle:"#Travels",SecondImg:v,secondTitle:"#Airlines"},{mainImg:x,mainTitle:"#Transport",SecondImg:v,secondTitle:"#Truck"},{mainImg:g,mainTitle:"#Travels",SecondImg:v,secondTitle:"#Tours"}]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.stories.map((function(e){return Object(c.jsxs)("div",{className:"story",children:[Object(c.jsxs)("div",{className:"circle-side",children:[Object(c.jsx)("div",{className:"circle-img",children:Object(c.jsx)("img",{src:e.mainImg,alt:"img2"})}),Object(c.jsx)("span",{children:e.mainTitle})]}),Object(c.jsxs)("div",{className:"rectangle-side",children:[Object(c.jsx)("div",{className:"rectangle-img",children:Object(c.jsx)("img",{src:e.SecondImg,alt:"Tech"})}),Object(c.jsx)("span",{children:e.secondTitle})]})]})}));return Object(c.jsxs)("section",{className:"stories",children:[Object(c.jsxs)("div",{className:"add-story",children:[Object(c.jsx)("div",{className:"add-icon",children:Object(c.jsx)("i",{className:"fas fa-plus"})}),Object(c.jsx)("span",{children:"Add Story"})]}),Object(c.jsx)("div",{className:"stories-items",children:e})]})}}]),a}(t.Component),u=(a(17),a.p+"static/media/truck.29115781.jpg"),I=function(e){Object(o.a)(a,e);var s=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,t=new Array(c),i=0;i<c;i++)t[i]=arguments[i];return(e=s.call.apply(s,[this].concat(t))).state={posts:[{id:1,personImg:b,personName:"Emma Watson",personCity:"Paris, France",postImg:u},{id:2,personImg:h,personName:"Emma Watson",personCity:"Paris, France",postImg:u},{id:3,personImg:f,personName:"Emma Watson",personCity:"Paris, France",postImg:u},{id:4,personImg:x,personName:"Emma Watson",personCity:"Paris, France",postImg:u},{id:5,personImg:g,personName:"Emma Watson",personCity:"Paris, France",postImg:u},{id:6,personImg:b,personName:"Emma Watson",personCity:"Paris, France",postImg:u}]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.posts.map((function(e){return Object(c.jsxs)("div",{className:"post",children:[Object(c.jsxs)("div",{className:"post-top",children:[Object(c.jsxs)("div",{className:"person-left",children:[Object(c.jsx)("div",{className:"person-img",children:Object(c.jsx)("img",{src:e.personImg,alt:"person"})}),Object(c.jsxs)("div",{className:"person-info",children:[Object(c.jsx)("h5",{children:e.personName}),Object(c.jsx)("span",{children:e.personCity})]})]}),Object(c.jsx)("div",{className:"info-tab",children:Object(c.jsx)("i",{className:"fas fa-ellipsis-v"})})]}),Object(c.jsx)("div",{className:"post-img",children:Object(c.jsx)("img",{src:e.postImg,alt:"post-img"})}),Object(c.jsxs)("div",{className:"post-bottom",children:[Object(c.jsxs)("div",{className:"left-icons",children:[Object(c.jsx)("i",{className:"fas fa-heart"}),Object(c.jsx)("i",{className:"far fa-comment"}),Object(c.jsx)("i",{className:"fas fa-location-arrow"})]}),Object(c.jsx)("div",{className:"right-icons",children:Object(c.jsx)("i",{className:"fas fa-bookmark"})})]})]},e.id)}));return Object(c.jsx)("section",{className:"posts",children:e})}}]),a}(t.Component);var y=function(){return Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)(O,{}),Object(c.jsx)(N,{}),Object(c.jsx)(I,{})]})};a(18);var k=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)(y,{})]})})};n.a.render(Object(c.jsx)(k,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.6a96ce2f.chunk.js.map