import{I as l,J as d,K as f,M as u,P as a,Q as h,R as C,T as M,U as g,g as r,i as c,j as i,p as m,q as s,r as p}from"./chunk-3L6SOKNI.js";var N=[{path:"about",component:h},{path:"contact",component:C},{path:"countries",loadChildren:()=>import("./chunk-FSIK76HI.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],b=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a.forRoot(N),a]});let o=t;return o})();var v=(()=>{let t=class t{constructor(){this.title="countryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(e,j){e&1&&(m(0,"div",0)(1,"div",1),p(2,"shared-side-bar"),s(),m(3,"div",2),p(4,"router-outlet"),s()())},dependencies:[M,u]});let o=t;return o})();var w=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[v]}),t.\u0275inj=r({imports:[f,g,b,l]});let o=t;return o})();d().bootstrapModule(w).catch(o=>console.error(o));