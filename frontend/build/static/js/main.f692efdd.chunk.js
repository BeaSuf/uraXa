(this["webpackJsonpsustainable-tourism"]=this["webpackJsonpsustainable-tourism"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},27:function(e,t,a){e.exports=a(46)},32:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),o=a.n(r),s=a(1),l=a(13),i=Object(n.createContext)(null),u=function(e){if(void 0!==e&&e.status>300)throw e;return e},m=function(e){e instanceof Error?console.error(e):e.text().then((function(e){console.error(e)}))},p=a(3),d=Object(p.a)();a(32);function b(){var e=Object(n.useContext)(i).email,t=Object(n.useContext)(i).token,a=Object(n.useContext)(i).username,r=Object(n.useContext)(i),o=r.posts,p=r.setPosts,b=Object(n.useContext)(i).login,f=Object(n.useContext)(i).domain,h=Object(n.useState)(!1),E=Object(s.a)(h,2),g=E[0],v=E[1],j=Object(n.useState)(!0),O=Object(s.a)(j,1)[0];Object(n.useEffect)((function(){var a="".concat(f,"/api/post/email?email=").concat(e,"&token=").concat(t);fetch(a,{method:"GET",headers:{"Content-Type":"application/json"}}).then(u).then((function(e){v(!0);var t=e.json();return console.log(t),t})).then((function(e){console.log(e.posts),p(e.posts),v(!1)})).catch((function(e){m(e)}))}),[b]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"loading-error"},g&&c.a.createElement("h3",null,". | . | . | ."),!O&&c.a.createElement("h3",null,"loading failed")),c.a.createElement("div",{className:"add-post"},c.a.createElement("button",{onClick:function(){return d.push("/add")}},"Add a Story")),c.a.createElement("div",{className:"hub"},c.a.createElement("div",{className:"container-posts"},o&&o.map((function(n,r){return c.a.createElement("div",{key:r,className:"hub-posts"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:n.image,className:"img-post"}),c.a.createElement("h2",{className:"title-post-card"},n.title),c.a.createElement("p",{className:"user-post"},"By: ",a),c.a.createElement("p",{className:"date-post"},n.date.slice(0,10)),c.a.createElement("button",{className:"delete-btn",onClick:function(){window.confirm("are you sure to delete the post?")&&function(a){var n=o.filter((function(e){return e.id!==a}));p(n);var c="".concat(f,"/api/post/id"),r={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,token:t,id:a})};fetch(c,r).then(u).then((function(e){var t=e.json();return console.log(t),t})).then((function(e){console.log(e.posts[0]);var t=e.posts[0];p([].concat(Object(l.a)(o),[t]))})).catch((function(e){m(e)}))}(n.id)}},"Delete")),c.a.createElement("div",{className:"data-container"},c.a.createElement("h4",null,n.text)))})))))}var f=a(6),h=(a(20),function(e){var t=e.postMarkers,a=e.mapSearchCoord,c=e.cityCentre,r=e.userCentre,o=e.citySearch,s=e.setPostInMarker,l=e.setMarkIsClicked,u=e.setLocationClickCoord,m=n.useRef(null),p=Object(n.useContext)(i).login,d=Object(n.useContext)(i).posts,b=Object(n.useContext)(i).mapPlaces,h=Object(n.useContext)(i).username,E=Object(n.useContext)(i).postLoading,g=Object(n.useContext)(i).setLocationIsClicked;return Object(n.useEffect)((function(){if(m.current){var e,n,i=window.H,d=new i.service.Platform({apikey:"Plzpoyk5PfFE85BLe9FTbYJlSarM9Wb2lMjzki6QQwY"}),E=function(t){n=d.createDefaultLayers(),e=new i.Map(m.current,n.vector.normal.map,{center:t,zoom:12,pixelRatio:window.devicePixelRatio||1})};E(p?r:c),o.length>0&&E(o[0]),new i.mapevents.Behavior(new i.mapevents.MapEvents(e)).disable(i.mapevents.Behavior.DBLTAPZOOM);var v=i.ui.UI.createDefault(e,n),j=function(e){var t="";return b.length>0&&"pin"!==e&&"object"!==typeof e?t='\n\t\t\t\t\t<div class="pin-card">\n\t\t\t\t\t\t<p class="pin_text">'.concat(e,"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t"):"pin"===e?t='\n\t\t\t\t\t<div class="pin-card">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t'.concat(p?"Add a Story":"Please LogIn to add a story","\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t"):"object"===typeof e&&(t='\n\t\t\t\t\t<div class="pin-card">\n\t\t\t\t\t\t<div class="container-pin-img">\n\t\t\t\t\t\t\t<img class="pin-img" src='.concat(e.image,'></img>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class="pin-text">').concat(e.title,"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t")),t};t.forEach((function(t){if(!Object(f.isEmpty)(t)){var a=new i.map.Icon("https://cdn2.iconfinder.com/data/icons/gur-project-1/32/1_10.png"),n=new i.map.Marker(t.coordinates,{icon:a}),c={image:t.image,title:t.title};n.setData(j(c)),e.addObject(n),n.addEventListener("tap",(function(){s(t),l(!0),g(!1)}))}}));var O=function(t,a,n){var c=t,r=new i.map.Icon(a),o=new i.map.Marker(c,{icon:r});o.setData(n),e.addObject(o)},C="https://cdn2.iconfinder.com/data/icons/gur-project-1/32/1_26.png",y="Welcome ".concat(h);p?O(r,Object(f.isEqual)(r,c)?C:"https://cdn2.iconfinder.com/data/icons/gur-project-1/32/1_26.png",y):O(c,C,y),a.forEach((function(t){var a=new i.map.Icon("https://cdn2.iconfinder.com/data/icons/gur-project-1/32/1_10.png"),n=new i.map.Marker(t.coordinates,{icon:a});n.setData(j(t.title)),e.addObject(n)}));var N=e.getBaseLayer().getProvider(),x=new i.map.Style("https://js.api.here.com/v3/3.1/styles/omv/normal.day.yaml","https://js.api.here.com/v3/3.1/styles/omv/");N.setStyle(x);return e.addEventListener("dbltap",(function(t){var a=t.currentPointer;!function(t){var a=new i.map.Icon("https://cdn1.iconfinder.com/data/icons/Momentum_GlossyEntireSet/32/pin-red.png"),n=new i.map.Marker(t,{icon:a});n.setData(j("pin")),e.addObject(n),n.addEventListener("tap",(function(){u(t),g(!0),s(null)}))}(e.screenToGeo(a.viewportX,a.viewportY))})),e.addEventListener("tap",(function(e){if(v.removeBubble(v.getBubbles()[0]),e.target instanceof i.map.Marker){var t=new i.ui.InfoBubble(e.target.getGeometry(),{content:e.target.getData()});v.addBubble(t)}})),function(){e.dispose()}}}),[m,t,a,c,r,d,p,E]),n.createElement("div",{className:"map",ref:m})}),E=a(15),g=a.n(E),v=a(24),j=function(){var e=Object(v.a)(g.a.mark((function e(t,a){var n,c,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="Plzpoyk5PfFE85BLe9FTbYJlSarM9Wb2lMjzki6QQwY",t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,fetch("https://discover.search.hereapi.com/v1/discover?apiKey=".concat(n,"&at=").concat(a.lat,",").concat(a.lng,"&limit=10&q=").concat(t));case 5:return c=e.sent,e.next=8,c.json();case 8:return r=e.sent,e.next=11,r.items;case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();a(35);function O(e){var t=e.maxLength,a=e.charsLeft,n={width:"".concat(a/t*100,"%")};return c.a.createElement("div",{className:"bar-wrapper"},c.a.createElement("div",{style:n,className:"bar"}),c.a.createElement("span",null,a))}a(21);function C(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),p=Object(s.a)(o,2),b=p[0],h=p[1],E=Object(n.useState)(""),g=Object(s.a)(E,2),v=g[0],C=g[1],y=Object(n.useState)(null),N=Object(s.a)(y,2),x=N[0],k=N[1],S=Object(n.useState)(null),w=Object(s.a)(S,2),L=w[0],P=w[1],M=Object(n.useState)(""),I=Object(s.a)(M,2),T=I[0],F=I[1],B=Object(n.useState)(!0),D=Object(s.a)(B,2),q=D[0],U=D[1],_=Object(n.useContext)(i).login,G=Object(n.useContext)(i),J=G.posts,W=G.setPosts,Y=Object(n.useContext)(i).email,A=Object(n.useContext)(i).token,R=Object(n.useContext)(i),z=R.types,H=R.setTypes,Q=Object(n.useContext)(i).userCentre,X=Object(n.useContext)(i).setPostLoading,K=Object(n.useContext)(i),V=K.locationClickCoord,Z=K.setLocationClickCoord,$=Object(n.useContext)(i).setPublish,ee=Object(n.useContext)(i).setLocationIsClicked,te=Object(n.useContext)(i).domain;Object(n.useEffect)((function(){a.trim()&&b.trim()&&v.trim()&&""!==T&&null!==x?U(!1):U(!0)}),[a,b,v,x,T]),Object(n.useEffect)((function(){var e="".concat(te,"/api/tag?email=").concat(Y,"&token=").concat(A);fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then(u).then((function(e){return e.json()})).then((function(e){H(e.tags)})).catch((function(e){m(e)}))}),[]),Object(n.useEffect)((function(){if(!Object(f.isEmpty)(V)){var e=document.querySelector("#location-input");null!==e&&e.classList.toggle("input-location-none"),C("location")}}),[V]);var ae=500-b.length;return c.a.createElement(c.a.Fragment,null,_?c.a.createElement("div",{className:"add-container"},c.a.createElement("div",{className:"container-img-preview"},c.a.createElement("img",{className:"img-preview",src:L})),c.a.createElement("form",{className:"form-wraper",method:"POST",name:"signup",id:"form"},c.a.createElement("div",{className:"title"},c.a.createElement("h2",null,"Add Story"),c.a.createElement("p",null,"fill in all fields")),c.a.createElement("div",{className:"input-wraper"},c.a.createElement("input",{className:"input",type:"file",id:"file",name:"file",onChange:function(e){k(e.target.files[0]),P(URL.createObjectURL(e.target.files[0]))},required:!0}),c.a.createElement("label",{className:"file-label",htmlFor:"file"},"Upload / Edit an Image")),c.a.createElement("div",{className:"input-wraper"},c.a.createElement("input",{className:"input",placeholder:"name your story",type:"text",id:"title",name:"title",autoComplete:"off",onChange:function(e){return r(e.target.value)},maxLength:"20",required:!0}),c.a.createElement("label",{className:"label",htmlFor:"title"},"Title")),c.a.createElement("div",{className:"input-wraper"},c.a.createElement("textarea",{style:{height:"250px"},className:"input",placeholder:"tell the world your story",type:"text",id:"description",name:"description",autoComplete:"off",onChange:function(e){return h(e.target.value)},maxLength:"500",required:!0}),c.a.createElement(O,{maxLength:500,charsLeft:ae}),c.a.createElement("label",{className:"label",htmlFor:"description"},"Description")),c.a.createElement("div",{className:"input-wraper",id:"location-input"},c.a.createElement("input",{className:"input",placeholder:"name of a city, place or address",type:"text",id:"location",name:"location",autoComplete:"off",onChange:function(e){return C(e.target.value)},required:!0}),c.a.createElement("label",{className:"label",htmlFor:"location"},"Location")),c.a.createElement("div",{className:"input-wraper"},c.a.createElement("select",{className:"select-wraper",defaultValue:"default",onChange:function(e){return F(e.target.value)}},c.a.createElement("option",{value:"default",disabled:!0},"Select a type of place"),void 0!==z&&z.length>0?z.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.tag)})):null),c.a.createElement("label",{className:"label",htmlFor:"select"},"Category")),c.a.createElement("button",{className:"btn",disabled:q,onClick:function(e){return function(e){e.preventDefault(),X(!0);var t="".concat(te,"/api/post"),n=new FormData;n.append("title",a),n.append("text",b),n.append("token",A),n.append("email",Y),n.append("image",x),n.append("tag",T),j(v,Q).then((function(e){var a=Object(f.isEmpty)(V)?"(".concat(e[0].position.lat,", ").concat(e[0].position.lng,")"):"(".concat(V.lat,", ").concat(V.lng,")");n.append("location",a),fetch(t,{method:"POST",body:n}).then(u).then((function(e){var t=e.json();return X(!1),$(!0),ee(!1),t})).then((function(e){var t=e.post;W([].concat(Object(l.a)(J),[t])),document.querySelector("#location-input").classList.toggle("input-location-none"),Z({})})).catch((function(e){m(e)}))})),d.push("/map")}(e)}},"Publish"))):d.push("/login"))}a(36);var y=function(e){var t=e.markIsClicked,a=e.setMarkIsClicked,r=e.postInMarker,o=e.setPostInMarker,l=Object(n.useState)(!1),u=Object(s.a)(l,2),m=u[0],p=u[1],d=Object(n.useContext)(i).login,b=Object(n.useContext)(i),h=b.publish,E=b.setPublish,g=Object(n.useContext)(i),v=g.locationIsClicked,j=g.setLocationIsClicked,O=function(){var e=document.querySelector("div.sidebar"),t=document.querySelector("span.arrow"),a=document.querySelector(".sidebar-display-none");e.classList.toggle("sidebar--expand"),t.classList.toggle("reverse"),null!==a&&a.classList.toggle("sidebar-display")};Object(n.useEffect)((function(){h||!t||m||v||(O(),p(!0)),!h&&v&&d&&!m?(O(),p(!0)):v&&m&&!d?(O(),p(!1)):h&&m&&d&&(p(!1),O(),E(!1))}),[h,t,v,d]);return c.a.createElement("div",{className:"sidebar"},c.a.createElement("span",{className:"arrow",onClick:function(e){O(),t&&a(!1),p(!m),o(null),v&&j(!1),p(!m)}},">>>"),v&&d?c.a.createElement(C,null):null,Object(f.isEmpty)(r)?null:c.a.createElement("div",{className:"sidebar-post"},c.a.createElement("div",{className:"sidebar-post-container"},c.a.createElement("div",null,c.a.createElement("img",{src:r.image,className:"sidebar-post-image"})),c.a.createElement("h4",{className:"data-post"},"By: ",r.username),c.a.createElement("h4",{className:"data-post"},"Tag: ",r.tag),c.a.createElement("h4",{className:"data-post"},r.date.slice(0,10)),c.a.createElement("h1",{className:"title-post"},r.title),c.a.createElement("h3",{className:"text-post"},r.text))),!v&&Object(f.isEmpty)(r)?c.a.createElement("div",{className:"sidebar-display-none"},c.a.createElement("img",{src:"https://cdn2.iconfinder.com/data/icons/gur-project-1/32/1_26.png"}),c.a.createElement("p",null,"search the map to go to new places"),c.a.createElement("img",{src:"https://cdn2.iconfinder.com/data/icons/gur-project-1/32/1_10.png"}),c.a.createElement("p",null,"click on the icon to explore posted stories"),c.a.createElement("img",{src:"https://cdn1.iconfinder.com/data/icons/Momentum_GlossyEntireSet/32/pin-red.png"}),c.a.createElement("p",null,"double click on the map to post stories")):null)};a(37);function N(){var e=Object(n.useContext)(i),t=e.userCentre,a=e.setUserCentre,r=Object(n.useContext)(i),o=r.cityCentre,l=r.setCityCentre,p=Object(n.useState)(""),d=Object(s.a)(p,2),b=d[0],f=d[1],h=Object(n.useState)(!0),E=Object(s.a)(h,2),g=E[0],v=E[1],O=Object(n.useState)(""),C=Object(s.a)(O,2),y=C[0],N=C[1],x=Object(n.useState)(""),k=Object(s.a)(x,1)[0],S=Object(n.useState)([]),w=Object(s.a)(S,2),L=w[0],P=w[1],M=Object(n.useState)(!1),I=Object(s.a)(M,2),T=I[0],F=I[1];Object(n.useEffect)((function(){j(y,t).then(u).then((function(e){var t;void 0!==e&&(P(e.map((function(e){return e}))),void 0!==e&&e.length>0&&(t="(".concat(e[0].position.lat,", ").concat(e[0].position.lng,")")),k(t))})).catch((function(e){m(e)}))}),[y]),Object(n.useEffect)((function(){b.trim()?v(!1):v(!0)}),[b]);return c.a.createElement("div",{className:"search-container"},c.a.createElement("form",{className:"search-bar"},c.a.createElement("div",null,c.a.createElement("input",{className:"search-input",placeholder:"where to? try a city, place, address",type:"text",name:"search",id:"search",autoComplete:"off",value:b,onChange:function(e){f(e.target.value),N(e.target.value)},onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},style:b.length&&0!==L.length&&T?{borderRadius:"20px 20px 0 0"}:null}),b.length&&0!==L.length?c.a.createElement("div",{className:"listbox"},c.a.createElement("ul",null,L.map((function(e,t){return c.a.createElement("li",{key:t,onMouseDown:function(t){return function(e,t){e.preventDefault(),f(e.target.innerHTML),l(t.position),a(t.position)}(t,e)}},e.title)})))):null,c.a.createElement("button",{className:"search-btn",disabled:g,onClick:function(e){e.preventDefault(),j(b,o).then((function(e){l(e[0].position),a(e[0].position)}))}},"Go"))))}function x(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),l=Object(s.a)(o,2),p=l[0],d=l[1],b=Object(n.useState)([]),f=Object(s.a)(b,2),E=f[0],g=f[1],v=Object(n.useState)(null),j=Object(s.a)(v,2),O=j[0],C=j[1],x=Object(n.useState)(!1),k=Object(s.a)(x,2),S=k[0],w=k[1],L=Object(n.useContext)(i),P=L.locationClickCoord,M=L.setLocationClickCoord,I=Object(n.useContext)(i).citySearch,T=Object(n.useContext)(i).mapPlaces,F=Object(n.useContext)(i).cityCentre,B=Object(n.useContext)(i).userCentre,D=Object(n.useContext)(i).postLoading,q=Object(n.useContext)(i).posts,U=Object(n.useContext)(i).domain;return Object(n.useEffect)((function(){var e="".concat(U,"/api/post/tags/all");fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then(u).then((function(e){return e.json()})).then((function(e){r(e.postsByTag)})).catch((function(e){m(e)}))}),[q]),Object(n.useEffect)((function(){var e=function(e){var t=[];return e.forEach((function(e){e.posts.length>0&&e.posts.forEach((function(a){a.tag=e.tag,t.push(a)}))})),t}(a),t=[];e.forEach((function(e){var a={lat:e.location.x,lng:e.location.y};t.push({date:e.date,text:e.text,image:e.image,title:e.title,coordinates:a,username:e.username,tag:e.tag})})),t.length>0&&d(t)}),[a]),Object(n.useEffect)((function(){var e=function(e){var t=[];return e.map((function(e){t.push({coordinates:e.position,title:e.address.label})})),t}(T);e.length>0&&g(e)}),[T]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"loading-error"},D&&c.a.createElement("h3",null,". | . | . | a new story is loading | . | . | .")),c.a.createElement("div",{className:"hub"},c.a.createElement(y,{postInMarker:O,setPostInMarker:C,setMarkIsClicked:w,markIsClicked:S,locationClickCoord:P,setLocationClickCoord:M}),c.a.createElement("div",{className:"container-map"},c.a.createElement(N,null),c.a.createElement(h,{postMarkers:p,mapSearchCoord:E,userCentre:B,cityCentre:F,citySearch:I,setPostInMarker:C,setMarkIsClicked:w,setLocationClickCoord:M}))))}function k(){var e=Object(n.useContext)(i),t=e.email,a=e.setEmail,r=Object(n.useContext)(i).setToken,o=Object(n.useContext)(i),l=o.username,p=o.setUsername,b=Object(n.useContext)(i).setLogin,f=Object(n.useContext)(i),h=f.userCentre,E=f.setUserCentre,g=Object(n.useContext)(i).domain,v=Object(n.useState)(!0),O=Object(s.a)(v,2),C=O[0],y=O[1],N=Object(n.useState)(""),x=Object(s.a)(N,2),k=x[0],S=x[1],w=Object(n.useState)(""),L=Object(s.a)(w,2),P=L[0],M=L[1],I=Object(n.useState)(""),T=Object(s.a)(I,2),F=T[0],B=T[1];Object(n.useEffect)((function(){j(P,h).then(u).then((function(e){var t={lat:-37.8136,lng:144.9631};void 0!==e&&e.length>0&&(t="(".concat(e[0].position.lat,", ").concat(e[0].position.lng,")")),B(t)})).catch((function(e){m(e)}))}),[P]),Object(n.useEffect)((function(){l.trim()&&t.trim()&&k.trim()&&F.trim()?y(!1):y(!0)}),[l,t,k,F]);return c.a.createElement("div",{className:"form-container"},c.a.createElement("div",{className:"title"},c.a.createElement("h2",null,"Your moments make great stories"),c.a.createElement("h4",null,"Sign up for a free account")),c.a.createElement("form",{className:"form-wraper",method:"POST",name:"signup",onSubmit:function(e){e.preventDefault();var n="".concat(g,"/api/signup"),c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:k,username:l,position:F})};fetch(n,c).then(u).then((function(e){return e.json()})).then((function(e){a(e.user.email),r(e.user.token),p(e.user.username),E({lat:e.user.position.x,lng:e.user.position.y}),b(!0),d.push("/map")})).catch((function(e){m(e),b(!1)}))}},c.a.createElement("div",{className:"input-wraper"},c.a.createElement("input",{className:"input",placeholder:"your name",type:"text",id:"username",name:"username",autoComplete:"off",onChange:function(e){return p(e.target.value)},required:!0}),c.a.createElement("label",{className:"label",htmlFor:"username"},"Username")),c.a.createElement("div",{className:"input-wraper"},c.a.createElement("input",{className:"input",placeholder:"name of a city, place or address",type:"text",id:"location",name:"location",autoComplete:"off",onChange:function(e){return M(e.target.value)},required:!0}),c.a.createElement("label",{className:"label",htmlFor:"location"},"Base Location")),c.a.createElement("div",{className:"input-wraper"},c.a.createElement("input",{className:"input",placeholder:"your email",type:"email",id:"email",name:"email",autoComplete:"off",onChange:function(e){return a(e.target.value)},required:!0}),c.a.createElement("label",{className:"label",htmlFor:"email"},"Email address")),c.a.createElement("div",{className:"input-wraper"},c.a.createElement("input",{className:"input",placeholder:"your password",type:"password",id:"password",name:"password",onChange:function(e){return S(e.target.value)},required:!0}),c.a.createElement("label",{className:"label",htmlFor:"password"},"Password")),c.a.createElement("button",{className:"btn",type:"submit",disabled:C},"Join")))}a(38);function S(){var e=Object(n.useContext)(i),t=e.email,a=e.setEmail,r=Object(n.useContext)(i).setToken,o=Object(n.useContext)(i),l=o.login,p=o.setLogin,b=Object(n.useContext)(i).setUsername,f=Object(n.useContext)(i),h=f.userCentre,E=f.setUserCentre,g=Object(n.useState)(""),v=Object(s.a)(g,2),j=v[0],O=v[1],C=Object(n.useState)(!0),y=Object(s.a)(C,2),N=y[0],x=y[1],k=Object(n.useState)(""),S=Object(s.a)(k,2),w=S[0],L=S[1],P=Object(n.useContext)(i).domain;Object(n.useEffect)((function(){t.trim()&&j.trim()||""===t?(x(!1),L("")):x(!0)}),[t,j]);return c.a.createElement("div",{className:"form-container"},c.a.createElement("div",{className:"title"},c.a.createElement("h2",null,"LogIn to add stories"),c.a.createElement("h4",null,"Thanks for being a guide")),c.a.createElement("form",{className:"form-wraper",method:"POST",name:"signup",onSubmit:function(e){e.preventDefault();var n="".concat(P,"/api/login"),c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:j})};fetch(n,c).then(u).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.user.email),r(e.user.token),b(e.user.username),E({lat:e.user.position.x,lng:e.user.position.y}),p(!0),console.log(h),d.push("/map")})).catch((function(e){m(e),p(!1),L("incorrect email or password, try again")}))}},c.a.createElement("div",{className:"input-wraper"},c.a.createElement("input",{className:"input",placeholder:"your email",type:"email",id:"email",name:"email",autoComplete:"off",onChange:function(e){return a(e.target.value)},required:!0}),c.a.createElement("label",{className:"label",htmlFor:"email"},"Email address")),c.a.createElement("div",{className:"input-wraper"},c.a.createElement("input",{className:"input",placeholder:"your password",type:"password",id:"password",name:"password",onChange:function(e){return O(e.target.value)},required:!0}),c.a.createElement("label",{className:"label",htmlFor:"password"},"Password")),c.a.createElement("button",{className:"btn",type:"submit",disabled:N},"LogIn"),c.a.createElement("p",{className:"error-msg"},w),c.a.createElement("div",{className:"join-direction"},c.a.createElement("p",null,"Haven't signed up yet?"),l?null:c.a.createElement("button",{className:"join-btn",onClick:function(){return d.push("/signup")}},"Make Account"))))}a(39);function w(){var e=Object(n.useContext)(i).login;return c.a.createElement("div",{className:"description"},c.a.createElement("div",{className:"container-explore"},c.a.createElement("h1",{className:"desc-title"},"Wander. Explore. Share."),c.a.createElement("div",{className:"desc-explore"},c.a.createElement("div",{className:"container-img"},c.a.createElement("img",{src:"https://cdn2.iconfinder.com/data/icons/bagbox/png/globe-terrestre.png"})),c.a.createElement("p",null,"Wander the map and ",c.a.createElement("br",null),"discover nearby stories.")),c.a.createElement("div",{className:"desc-explore"},c.a.createElement("div",{className:"container-img"},c.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/Travel_Icon_Pack/PNG/travel%20management.png"})),c.a.createElement("p",null,"Explore cities you can\u2019t ",c.a.createElement("br",null),"wait to travel to.")),c.a.createElement("div",{className:"desc-explore"},c.a.createElement("div",{className:"container-img"},c.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/refresh_cl/256/Misc/Holiday.png"})),c.a.createElement("p",null,"Share your stories and ",c.a.createElement("br",null),"return to them any time."))),c.a.createElement("div",{className:"container-desc"},c.a.createElement("h1",{className:"desc-title"},"uraXa map is a free community resource"),c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("span",{className:"desc-title"},"uralla")," means a place to come together."),c.a.createElement("p",null,"It is a vantage point to see the common paths we travel."),c.a.createElement("p",null,"You can explore anytime as a guest or make an account to guide other explorers.")),c.a.createElement("div",{className:"container-btn"},c.a.createElement("button",{className:"explore-btn",onClick:function(){return d.push("/map")}},"Explore Map"),e?null:c.a.createElement("button",{className:"join-btn",onClick:function(){return d.push("/signup")}},"Make Account"))))}a(40);function L(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",null,"Created by ",c.a.createElement("span",null,"Brown Bear")," | \xa9 2020"))}var P=a(7),M=a(9);a(41);function I(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),u=l[0],m=l[1],p=Object(n.useState)(""),f=Object(s.a)(p,2),h=f[0],E=f[1],g=Object(n.useState)(!1),v=Object(s.a)(g,2),j=v[0],O=v[1],y=Object(n.useState)([]),N=Object(s.a)(y,2),I=N[0],T=N[1],F=Object(n.useState)([]),B=Object(s.a)(F,2),D=B[0],q=B[1],U=Object(n.useState)([]),_=Object(s.a)(U,2),G=_[0],J=_[1],W=Object(n.useState)({lat:-16.925491,lng:145.75412}),Y=Object(s.a)(W,2),A=Y[0],R=Y[1],z=Object(n.useState)({lat:-16.925491,lng:145.75412}),H=Object(s.a)(z,2),Q=H[0],X=H[1],K=Object(n.useState)([]),V=Object(s.a)(K,2),Z=V[0],$=V[1],ee=Object(n.useState)(!1),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],ce=Object(n.useState)({}),re=Object(s.a)(ce,2),oe=re[0],se=re[1],le=Object(n.useState)(!1),ie=Object(s.a)(le,2),ue=ie[0],me=ie[1],pe=Object(n.useState)(!1),de=Object(s.a)(pe,2),be=de[0],fe=de[1],he=Object(n.useState)("https://uraxa-api.herokuapp.com"),Ee={token:a,setToken:r,email:u,setEmail:m,username:h,setUsername:E,login:j,setLogin:O,cityCentre:A,setCityCentre:R,posts:Z,setPosts:$,types:I,setTypes:T,mapPlaces:D,setMapPlaces:q,userCentre:Q,setUserCentre:X,citySearch:G,setCitySearch:J,postLoading:ae,setPostLoading:ne,locationClickCoord:oe,setLocationClickCoord:se,publish:ue,setPublish:me,locationIsClicked:be,setLocationIsClicked:fe,domain:Object(s.a)(he,1)[0]};return c.a.createElement("div",null,c.a.createElement(P.b,{history:d},c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-left"},j?null:c.a.createElement("h1",null,"uralla"),j?c.a.createElement("h1",null,"uraXa"):null,c.a.createElement(M.a,{className:"nav",activeClassName:"active-nav",to:"/",exact:!0},"Home"),c.a.createElement(M.a,{className:"nav",activeClassName:"active-nav",to:"/map"},"Map")),c.a.createElement("div",{className:"header-right"},c.a.createElement("h5",null,j?"heXo":""," ",j?h:""),j?c.a.createElement(M.a,{className:"nav",activeClassName:"active-nav",to:"/profile"},"Profile"):null,j?null:c.a.createElement(M.a,{className:"nav",activeClassName:"active-nav",to:"/login"},"LogIn"),j?null:c.a.createElement(M.a,{className:"nav",activeClassName:"active-nav",to:"/signup"},"SignUp"))),c.a.createElement(P.c,null,c.a.createElement(i.Provider,{value:Ee},c.a.createElement(P.a,{path:"/profile"},c.a.createElement(b,null)),c.a.createElement(P.a,{path:"/map"},c.a.createElement(x,null)),c.a.createElement(P.a,{path:"/signup"},c.a.createElement(k,null)),c.a.createElement(P.a,{path:"/login"},c.a.createElement(S,null)),c.a.createElement(P.a,{path:"/add"},c.a.createElement(C,null)),c.a.createElement(P.a,{path:"/",exact:!0},c.a.createElement(w,null))))),c.a.createElement(L,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.f692efdd.chunk.js.map