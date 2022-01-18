var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function o(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(n,e,r){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}(e,r))}function i(t,n){t.appendChild(n)}function c(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function a(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function p(){return d("")}function b(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t){return""===t?null:+t}function g(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function v(t,n){t.value=null==n?"":n}let x;function k(t){x=t}function y(){if(!x)throw new Error("Function called outside component initialization");return x}function w(t){y().$$.on_mount.push(t)}function z(){const t=y();return(n,e)=>{const r=t.$$.callbacks[n];if(r){const s=function(t,n,e=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,!1,n),r}(n,e);r.slice().forEach((n=>{n.call(t,s)}))}}}const _=[],C=[],N=[],E=[],T=Promise.resolve();let L=!1;function M(t){N.push(t)}const j=new Set;let H=0;function S(){const t=x;do{for(;H<_.length;){const t=_[H];H++,k(t),A(t.$$)}for(k(null),_.length=0,H=0;C.length;)C.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];j.has(n)||(j.add(n),n())}N.length=0}while(_.length);for(;E.length;)E.pop()();L=!1,j.clear(),k(t)}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(M)}}const q=new Set;let B;function O(){B={r:0,c:[],p:B}}function P(){B.r||r(B.c),B=B.p}function I(t,n){t&&t.i&&(q.delete(t),t.i(n))}function X(t,n,e,r){if(t&&t.o){if(q.has(t))return;q.add(t),B.c.push((()=>{q.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function F(t){t&&t.c()}function K(t,e,o,l){const{fragment:i,on_mount:c,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,o),l||M((()=>{const e=c.map(n).filter(s);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(M)}function R(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function V(t,n){-1===t.$$.dirty[0]&&(_.push(t),L||(L=!0,T.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function D(n,s,o,l,i,c,a,f=[-1]){const d=x;k(n);const m=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:s.target||d.$$.root};a&&a(m.root);let p=!1;if(m.ctx=o?o(n,s.props||{},((t,e,...r)=>{const s=r.length?r[0]:e;return m.ctx&&i(m.ctx[t],m.ctx[t]=s)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](s),p&&V(n,t)),e})):[],m.update(),p=!0,r(m.before_update),m.fragment=!!l&&l(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(u)}else m.fragment&&m.fragment.c();s.intro&&I(n.$$.fragment),K(n,s.target,s.anchor,s.customElement),S()}k(d)}class G{$destroy(){R(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const J=[];function Q(n,e=t){let r;const s=new Set;function l(t){if(o(n,t)&&(n=t,r)){const t=!J.length;for(const t of s)t[1](),J.push(t,n);if(t){for(let t=0;t<J.length;t+=2)J[t][0](J[t+1]);J.length=0}}}return{set:l,update:function(t){l(t(n))},subscribe:function(o,i=t){const c=[o,i];return s.add(c),1===s.size&&(r=e(l)||t),o(n),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const U=Q(""),W=Q(2),Y=Q([]);function Z(n){let e,s,o,l,a,d,p,g,x,k,y,w,z,_,C,N,E,T,L,M,j,H,S,A,q,B,O,P,I,X,F,K;return{c(){e=f("main"),s=f("div"),o=f("div"),l=f("div"),l.textContent="This IP address is not valid.",a=m(),d=f("div"),p=f("label"),p.textContent="How many subnets do you need?",g=m(),x=f("div"),k=f("span"),y=f("button"),y.innerHTML='<i class="fas fa-angle-down"></i>',w=m(),z=f("input"),_=m(),C=f("span"),N=f("button"),N.innerHTML='<i class="fas fa-angle-up"></i>',E=m(),T=f("hr"),L=m(),M=f("div"),j=f("label"),j.textContent="Major Network",H=m(),S=f("div"),A=f("input"),q=m(),B=f("span"),B.textContent="/24",O=m(),P=f("button"),P.innerHTML='<i class="fas fa-eraser"></i>  CLEAR',I=m(),X=f("button"),X.innerHTML='NEXT  <i class="fas fa-chevron-right"></i>',h(l,"class","alert alert-danger"),h(l,"role","alert"),h(p,"for","subnets"),h(p,"class","form-label"),h(y,"class","red-btn btn btn-danger w-100 svelte-1i211q1"),h(k,"class","p-0 input-group-text"),h(z,"type","number"),h(z,"id","subnets"),h(z,"class","form-control text-align-center svelte-1i211q1"),z.disabled=!0,h(N,"class","green-btn btn btn-success w-100 svelte-1i211q1"),h(C,"class","p-0 input-group-text"),h(x,"class","input-group mb-3"),h(d,"class","mb-4"),h(T,"class","my-3"),h(j,"for","majoripaddr"),h(j,"class","form-label"),h(A,"id","majoripaddr"),h(A,"type","text"),h(A,"class","form-control"),h(A,"placeholder","192.168.1.0"),A.required=!0,h(B,"class","input-group-text"),h(S,"class","input-group"),h(M,"class","my-4"),h(P,"class","btn btn-secondary"),h(X,"class","btn btn-primary"),h(o,"class","card-body"),h(s,"class","card")},m(t,r){c(t,e,r),i(e,s),i(s,o),i(o,l),n[8](l),i(o,a),i(o,d),i(d,p),i(d,g),i(d,x),i(x,k),i(k,y),n[9](y),i(x,w),i(x,z),v(z,n[0]),i(x,_),i(x,C),i(C,N),n[11](N),i(o,E),i(o,T),i(o,L),i(o,M),i(M,j),i(M,H),i(M,S),i(S,A),n[12](A),v(A,n[1]),i(S,q),i(S,B),i(o,O),i(o,P),n[14](P),i(o,I),i(o,X),n[15](X),F||(K=[b(z,"input",n[10]),b(A,"input",n[13])],F=!0)},p(t,[n]){1&n&&$(z.value)!==t[0]&&v(z,t[0]),2&n&&A.value!==t[1]&&v(A,t[1])},i:t,o:t,d(t){t&&u(e),n[8](null),n[9](null),n[11](null),n[12](null),n[14](null),n[15](null),F=!1,r(K)}}}function tt(t){let n=t.split(".");if(4!=n.length)return!1;for(let t of n){if(null==t||""==t)return!1;let n=Number(t);if(isNaN(n))return!1;if(n<0)return!1;if(n>255)return!1}return!0}function nt(t,n,e){let r,s;l(t,U,(t=>e(16,r=t))),l(t,W,(t=>e(17,s=t)));const o=z();let i,c,u,a,f,d,m=s,p=r;return w((()=>{e(6,f.disabled=!0,f),e(5,a.onkeyup=()=>{""!=p&&e(4,u.style.display="none",u),tt(p)?e(6,f.disabled=!1,f):e(6,f.disabled=!0,f)},a),e(4,u.style.display="none",u),m<=2?(e(2,i.disabled=!0,i),e(3,c.disabled=!1,c)):m>=128?(e(2,i.disabled=!1,i),e(3,c.disabled=!0,c)):(e(2,i.disabled=!1,i),e(3,c.disabled=!1,c)),e(2,i.onclick=()=>{e(0,m--,m),m<=2?(e(2,i.disabled=!0,i),e(3,c.disabled=!1,c)):m>=128?(e(2,i.disabled=!1,i),e(3,c.disabled=!0,c)):(e(2,i.disabled=!1,i),e(3,c.disabled=!1,c))},i),e(3,c.onclick=()=>{e(0,m++,m),m<=2?(e(2,i.disabled=!0,i),e(3,c.disabled=!1,c)):m>=128?(e(2,i.disabled=!1,i),e(3,c.disabled=!0,c)):(e(2,i.disabled=!1,i),e(3,c.disabled=!1,c))},c),e(6,f.onclick=()=>{tt(p)?(e(4,u.style.display="none",u),o("nextClicked"),e(1,p=p.split(".")),e(1,p[p.length-1]=0,p),e(1,p=p.join(".")),U.set(p),W.set(m)):(e(4,u.style.display="block",u),e(4,u.innerText="This IP address is not valid.",u))},f),e(7,d.onclick=()=>{e(1,p=""),e(0,m=2),e(6,f.disabled=!0,f),e(2,i.disabled=!0,i)},d)})),[m,p,i,c,u,a,f,d,function(t){C[t?"unshift":"push"]((()=>{u=t,e(4,u)}))},function(t){C[t?"unshift":"push"]((()=>{i=t,e(2,i)}))},function(){m=$(this.value),e(0,m)},function(t){C[t?"unshift":"push"]((()=>{c=t,e(3,c)}))},function(t){C[t?"unshift":"push"]((()=>{a=t,e(5,a)}))},function(){p=this.value,e(1,p)},function(t){C[t?"unshift":"push"]((()=>{d=t,e(7,d)}))},function(t){C[t?"unshift":"push"]((()=>{f=t,e(6,f)}))}]}class et extends G{constructor(t){super(),D(this,t,nt,Z,o,{})}}function rt(t){let n;return{c(){n=f("hr"),h(n,"class","mt-0 mb-2")},m(t,e){c(t,n,e)},d(t){t&&u(n)}}}function st(t){let n;return{c(){n=f("hr"),h(n,"class","mt-0 mb-2")},m(t,e){c(t,n,e)},d(t){t&&u(n)}}}function ot(t){let n;return{c(){n=f("hr"),h(n,"class","mt-0 mb-2")},m(t,e){c(t,n,e)},d(t){t&&u(n)}}}function lt(n){let e,s,o,l,a,p,$,x,k,y,w,z,_,C,N,E=n[1]&&rt(),T=n[1]&&st(),L=n[1]&&ot();return{c(){e=f("main"),s=f("div"),E&&E.c(),o=m(),l=d(n[0]),a=m(),p=f("div"),T&&T.c(),$=m(),x=f("span"),k=d(n[2]),y=m(),w=f("div"),L&&L.c(),z=m(),_=f("input"),h(s,"class","col-1 text-align-center svelte-1n51lvr"),h(p,"class","col-3 text-align-center svelte-1n51lvr"),h(_,"type","range"),h(_,"class","form-range"),h(_,"min","2"),h(_,"max","256"),h(w,"class","col-8 text-align-center svelte-1n51lvr"),h(e,"class","row")},m(t,r){c(t,e,r),i(e,s),E&&E.m(s,null),i(s,o),i(s,l),i(e,a),i(e,p),T&&T.m(p,null),i(p,$),i(p,x),i(x,k),i(e,y),i(e,w),L&&L.m(w,null),i(w,z),i(w,_),n[4](_),v(_,n[2]),C||(N=[b(_,"change",n[5]),b(_,"input",n[5])],C=!0)},p(t,[n]){t[1]?E||(E=rt(),E.c(),E.m(s,o)):E&&(E.d(1),E=null),1&n&&g(l,t[0]),t[1]?T||(T=st(),T.c(),T.m(p,$)):T&&(T.d(1),T=null),4&n&&g(k,t[2]),t[1]?L||(L=ot(),L.c(),L.m(w,z)):L&&(L.d(1),L=null),4&n&&v(_,t[2])},i:t,o:t,d(t){t&&u(e),E&&E.d(),T&&T.d(),L&&L.d(),n[4](null),C=!1,r(N)}}}function it(t,n,e){let r;l(t,Y,(t=>e(7,r=t)));let s,{count:o}=n,{border:i}=n,c=30,u=r;return u.push({count:o,size:c,network:"",broadcast:"",prefix:"",mask:"",error:!1}),Y.set(u),w((()=>{e(3,s.onchange=()=>{let t=function(){for(let t=0;t<u.length;t++)if(u[t].count==o)return t;return-1}();-1!=t&&(isNaN(Number(c))||(u[t].size=Number(c)))},s)})),t.$$set=t=>{"count"in t&&e(0,o=t.count),"border"in t&&e(1,i=t.border)},[o,i,c,s,function(t){C[t?"unshift":"push"]((()=>{s=t,e(3,s)}))},function(){c=$(this.value),e(2,c)}]}class ct extends G{constructor(t){super(),D(this,t,it,lt,o,{count:0,border:1})}}function ut(t){let n,e,r,s,o,l;return{c(){n=f("li"),e=d("Subnet #"),r=d(t[0]),s=d(" - "),o=d(t[1]),l=d(" hosts"),h(n,"class","list-group-item active bg-success border-success"),h(n,"aria-current","true")},m(t,u){c(t,n,u),i(n,e),i(n,r),i(n,s),i(n,o),i(n,l)},p(t,n){1&n&&g(r,t[0]),2&n&&g(o,t[1])},d(t){t&&u(n)}}}function at(t){let n,e,r,s,o,l;return{c(){n=f("li"),e=d("Subnet #"),r=d(t[0]),s=d(" - "),o=d(t[1]),l=d(" hosts"),h(n,"class","list-group-item active bg-danger border-danger"),h(n,"aria-current","true")},m(t,u){c(t,n,u),i(n,e),i(n,r),i(n,s),i(n,o),i(n,l)},p(t,n){1&n&&g(r,t[0]),2&n&&g(o,t[1])},d(t){t&&u(n)}}}function ft(t){let n,e,r,s,o,l,a,p,b,$,v;return{c(){n=f("div"),e=f("div"),e.textContent="Network",r=m(),s=d(t[2]),o=d("/"),l=d(t[3]),a=m(),p=f("div"),b=f("div"),b.textContent="Broadcast",$=m(),v=d(t[4]),h(e,"class","fw-bold"),h(n,"class","col-6"),h(b,"class","fw-bold"),h(p,"class","col-6")},m(t,u){c(t,n,u),i(n,e),i(n,r),i(n,s),i(n,o),i(n,l),c(t,a,u),c(t,p,u),i(p,b),i(p,$),i(p,v)},p(t,n){4&n&&g(s,t[2]),8&n&&g(l,t[3]),16&n&&g(v,t[4])},d(t){t&&u(n),t&&u(a),t&&u(p)}}}function dt(n){let e;return{c(){e=f("div"),e.textContent="-",h(e,"class","fw-bold")},m(t,n){c(t,e,n)},p:t,d(t){t&&u(e)}}}function mt(t){let n,e,r,s,o;return{c(){n=f("li"),e=f("div"),r=f("div"),r.textContent="Subnet mask",s=m(),o=d(t[5]),h(r,"class","fw-bold"),h(e,"class","col-12"),h(n,"class","list-group-item d-flex justify-content-between align-items-start")},m(t,l){c(t,n,l),i(n,e),i(e,r),i(e,s),i(e,o)},p(t,n){32&n&&g(o,t[5])},d(t){t&&u(n)}}}function pt(n){let e,r,s,o,l;function a(t,n){return t[6]?at:ut}let d=a(n),p=d(n);function b(t,n){return t[6]?dt:ft}let $=b(n),g=$(n),v=!n[6]&&mt(n);return{c(){e=f("main"),r=f("ul"),p.c(),s=m(),o=f("li"),g.c(),l=m(),v&&v.c(),h(o,"class","list-group-item d-flex justify-content-between align-items-start"),h(r,"class","list-group"),h(e,"class","row px-3")},m(t,u){c(t,e,u),i(e,r),p.m(r,null),i(r,s),i(r,o),g.m(o,null),i(r,l),v&&v.m(r,null),n[9](e)},p(t,[n]){d===(d=a(t))&&p?p.p(t,n):(p.d(1),p=d(t),p&&(p.c(),p.m(r,s))),$===($=b(t))&&g?g.p(t,n):(g.d(1),g=$(t),g&&(g.c(),g.m(o,null))),t[6]?v&&(v.d(1),v=null):v?v.p(t,n):(v=mt(t),v.c(),v.m(r,null))},i:t,o:t,d(t){t&&u(e),p.d(),g.d(),v&&v.d(),n[9](null)}}}function bt(t,n,e){let r,{count:s}=n,{margin:o}=n,{size:l}=n,{network:i}=n,{prefix:c}=n,{broadcast:u}=n,{mask:a}=n,{error:f=!1}=n;return w((()=>{o&&r.classList.add("mt-3")})),t.$$set=t=>{"count"in t&&e(0,s=t.count),"margin"in t&&e(8,o=t.margin),"size"in t&&e(1,l=t.size),"network"in t&&e(2,i=t.network),"prefix"in t&&e(3,c=t.prefix),"broadcast"in t&&e(4,u=t.broadcast),"mask"in t&&e(5,a=t.mask),"error"in t&&e(6,f=t.error)},[s,l,i,c,u,a,f,r,o,function(t){C[t?"unshift":"push"]((()=>{r=t,e(7,r)}))}]}class ht extends G{constructor(t){super(),D(this,t,bt,pt,o,{count:0,margin:8,size:1,network:2,prefix:3,broadcast:4,mask:5,error:6})}}function $t(t,n,e){const r=t.slice();return r[16]=n[e],r}function gt(t,n,e){const r=t.slice();return r[13]=n[e],r[15]=e,r}function vt(t){let n;return{c(){n=f("div"),n.innerHTML='<div class="col-1 text-align-center svelte-17kffpo"><b><i class="fas fa-sort-numeric-down"></i></b></div> \n                            <div class="col-3 text-align-center svelte-17kffpo"><b><i class="fas fa-desktop"></i></b></div> \n                            <div class="col-8 text-align-center svelte-17kffpo"><b>Size</b></div> \n                            <hr class="mt-1 mb-2"/>',h(n,"class","row")},m(t,e){c(t,n,e)},d(t){t&&u(n)}}}function xt(t){let n,e,r=t[6](t[5].sort(Et)),s=[];for(let n=0;n<r.length;n+=1)s[n]=yt($t(t,r,n));const o=t=>X(s[t],1,1,(()=>{s[t]=null}));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();n=p()},m(t,r){for(let n=0;n<s.length;n+=1)s[n].m(t,r);c(t,n,r),e=!0},p(t,e){if(96&e){let l;for(r=t[6](t[5].sort(Et)),l=0;l<r.length;l+=1){const o=$t(t,r,l);s[l]?(s[l].p(o,e),I(s[l],1)):(s[l]=yt(o),s[l].c(),I(s[l],1),s[l].m(n.parentNode,n))}for(O(),l=r.length;l<s.length;l+=1)o(l);P()}},i(t){if(!e){for(let t=0;t<r.length;t+=1)I(s[t]);e=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)X(s[t]);e=!1},d(t){a(s,t),t&&u(n)}}}function kt(n){let e,r,s=Array(n[3]),o=[];for(let t=0;t<s.length;t+=1)o[t]=_t(gt(n,s,t));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=p()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);c(t,e,n),r=!0},p:t,i(t){if(!r){for(let t=0;t<s.length;t+=1)I(o[t]);r=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)X(o[t]);r=!1},d(t){a(o,t),t&&u(e)}}}function yt(n){let e,r;return e=new ht({props:{size:n[16].size,network:n[16].network,broadcast:n[16].broadcast,prefix:n[16].prefix,mask:n[16].mask,margin:!0,count:n[16].count,error:n[16].error}}),{c(){F(e.$$.fragment)},m(t,n){K(e,t,n),r=!0},p:t,i(t){r||(I(e.$$.fragment,t),r=!0)},o(t){X(e.$$.fragment,t),r=!1},d(t){R(e,t)}}}function wt(t){let n,e;return n=new ct({props:{border:!0,count:t[15]+1}}),{c(){F(n.$$.fragment)},m(t,r){K(n,t,r),e=!0},i(t){e||(I(n.$$.fragment,t),e=!0)},o(t){X(n.$$.fragment,t),e=!1},d(t){R(n,t)}}}function zt(t){let n,e;return n=new ct({props:{border:!1,count:t[15]+1}}),{c(){F(n.$$.fragment)},m(t,r){K(n,t,r),e=!0},i(t){e||(I(n.$$.fragment,t),e=!0)},o(t){X(n.$$.fragment,t),e=!1},d(t){R(n,t)}}}function _t(n){let e,r,s,o;const l=[zt,wt],i=[];return e=function(t,n){return 0==t[15]?0:1}(n),r=i[e]=l[e](n),{c(){r.c(),s=p()},m(t,n){i[e].m(t,n),c(t,s,n),o=!0},p:t,i(t){o||(I(r),o=!0)},o(t){X(r),o=!1},d(t){i[e].d(t),t&&u(s)}}}function Ct(n){let e;return{c(){e=f("button"),e.innerHTML='NEXT  <i class="fas fa-chevron-right"></i>',h(e,"class","btn btn-primary")},m(t,r){c(t,e,r),n[8](e)},p:t,d(t){t&&u(e),n[8](null)}}}function Nt(t){let n,e,r,s,o,l,a,d,p,b,$,g,v,x,k,y,w,z,_,C,N=2==t[0]&&vt();const E=[kt,xt],T=[];function L(t,n){return 2==t[0]?0:3==t[0]?1:-1}~(v=L(t))&&(x=T[v]=E[v](t));let M=2==t[0]&&Ct(t);return{c(){n=f("main"),e=f("div"),r=f("div"),s=f("div"),o=f("div"),l=f("h3"),l.textContent=`${t[4]}/24`,a=m(),d=f("hr"),p=m(),b=f("div"),$=f("div"),N&&N.c(),g=m(),x&&x.c(),k=m(),y=f("div"),y.innerHTML="<hr/>",w=m(),z=f("button"),z.innerHTML='<i class="fas fa-chevron-left"></i>  BACK',_=m(),M&&M.c(),h(l,"class","text-align-center svelte-17kffpo"),h(o,"class","col"),h(d,"class","my-3"),h(s,"class","row"),h($,"class","card-body"),h(b,"class","card"),h(y,"class","row mt-3"),h(z,"class","btn btn-secondary"),h(r,"class","card-body"),h(e,"class","card")},m(u,f){c(u,n,f),i(n,e),i(e,r),i(r,s),i(s,o),i(o,l),i(s,a),i(s,d),i(r,p),i(r,b),i(b,$),N&&N.m($,null),i($,g),~v&&T[v].m($,null),i(r,k),i(r,y),i(r,w),i(r,z),t[7](z),i(r,_),M&&M.m(r,null),C=!0},p(t,[n]){2==t[0]?N||(N=vt(),N.c(),N.m($,g)):N&&(N.d(1),N=null);let e=v;v=L(t),v===e?~v&&T[v].p(t,n):(x&&(O(),X(T[e],1,1,(()=>{T[e]=null})),P()),~v?(x=T[v],x?x.p(t,n):(x=T[v]=E[v](t),x.c()),I(x,1),x.m($,null)):x=null),2==t[0]?M?M.p(t,n):(M=Ct(t),M.c(),M.m(r,null)):M&&(M.d(1),M=null)},i(t){C||(I(x),C=!0)},o(t){X(x),C=!1},d(e){e&&u(n),N&&N.d(),~v&&T[v].d(),t[7](null),M&&M.d()}}}function Et(t,n){return Number(t.size)<Number(n.size)?1:Number(t.size)>Number(n.size)?-1:0}function Tt(t,n,e){let r,s,o;l(t,Y,(t=>e(9,r=t))),l(t,U,(t=>e(10,s=t))),l(t,W,(t=>e(11,o=t)));const i=z();let c=o,u=s;r.sort(Et);let a,f,d=r,m=2;return w((()=>{e(1,a.onclick=()=>{i("backClicked"),Y.set([]),e(0,m=2)},a),e(2,f.onclick=()=>{e(0,m=3)},f)})),[m,a,f,c,u,d,function(t){let n=u.split("."),e=`${n[0]}.${n[1]}.${n[2]}.`,r=-1;for(let n=0;n<t.length;n++)if(!(t[n].size>256))if(t[n].size>126){if(r+255<256){r+=1,t[n].network=`${e}${r}`,r+=255,t[n].broadcast=`${e}${r}`,t[n].prefix="24",t[n].mask="255.255.255.0";continue}t[n].error=!0}else if(t[n].size>62){if(!(r+127<256)){t[n].error=!0;continue}r+=1,t[n].network=`${e}${r}`,r+=127,t[n].broadcast=`${e}${r}`,t[n].prefix="25",t[n].mask="255.255.255.128"}else if(t[n].size>30){if(!(r+63<256)){t[n].error=!0;continue}r+=1,t[n].network=`${e}${r}`,r+=63,t[n].broadcast=`${e}${r}`,t[n].prefix="27",t[n].mask="255.255.255.192"}else if(t[n].size>14){if(!(r+31<256)){t[n].error=!0;continue}r+=1,t[n].network=`${e}${r}`,r+=31,t[n].broadcast=`${e}${r}`,t[n].prefix="28",t[n].mask="255.255.255.224"}else if(t[n].size>6){if(!(r+15<256)){t[n].error=!0;continue}r+=1,t[n].network=`${e}${r}`,r+=15,t[n].broadcast=`${e}${r}`,t[n].prefix="28",t[n].mask="255.255.255.240"}else if(t[n].size>2){if(!(r+7<256)){t[n].error=!0;continue}r+=1,t[n].network=`${e}${r}`,r+=7,t[n].broadcast=`${e}${r}`,t[n].prefix="29",t[n].mask="255.255.255.248"}else if(t[n].size>0){if(!(r+3<256)){t[n].error=!0;continue}r+=1,t[n].network=`${e}${r}`,r+=3,t[n].broadcast=`${e}${r}`,t[n].prefix="30",t[n].mask="255.255.255.252"}else t[n].error=!0;for(let n=0;n<t.length;n++)""==t[n].broadcast&&(t[n].error=!0);return t},function(t){C[t?"unshift":"push"]((()=>{a=t,e(1,a)}))},function(t){C[t?"unshift":"push"]((()=>{f=t,e(2,f)}))}]}class Lt extends G{constructor(t){super(),D(this,t,Tt,Nt,o,{})}}function Mt(n){let e,r;return e=new Lt({}),e.$on("backClicked",n[2]),{c(){F(e.$$.fragment)},m(t,n){K(e,t,n),r=!0},p:t,i(t){r||(I(e.$$.fragment,t),r=!0)},o(t){X(e.$$.fragment,t),r=!1},d(t){R(e,t)}}}function jt(n){let e,r;return e=new et({}),e.$on("nextClicked",n[1]),{c(){F(e.$$.fragment)},m(t,n){K(e,t,n),r=!0},p:t,i(t){r||(I(e.$$.fragment,t),r=!0)},o(t){X(e.$$.fragment,t),r=!1},d(t){R(e,t)}}}function Ht(t){let n,e,r,s,o,l,a,d;const p=[jt,Mt],b=[];function $(t,n){return 1==t[0]?0:2==t[0]?1:-1}return~(l=$(t))&&(a=b[l]=p[l](t)),{c(){n=f("main"),e=f("div"),e.innerHTML='<div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-6"><h2 class="display-6 svelte-1eyag1x">VLSM calculator</h2> \n\t\t\t<hr/></div>',r=m(),s=f("div"),o=f("div"),a&&a.c(),h(e,"class","row justify-content-center my-4"),h(o,"class","col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-6"),h(s,"class","row justify-content-center"),h(n,"class","container")},m(t,u){c(t,n,u),i(n,e),i(n,r),i(n,s),i(s,o),~l&&b[l].m(o,null),d=!0},p(t,[n]){let e=l;l=$(t),l===e?~l&&b[l].p(t,n):(a&&(O(),X(b[e],1,1,(()=>{b[e]=null})),P()),~l?(a=b[l],a?a.p(t,n):(a=b[l]=p[l](t),a.c()),I(a,1),a.m(o,null)):a=null)},i(t){d||(I(a),d=!0)},o(t){X(a),d=!1},d(t){t&&u(n),~l&&b[l].d()}}}function St(t,n,e){let r=1;return[r,function(){e(0,r=2)},function(){e(0,r=1),U.set(""),W.set(2)}]}return new class extends G{constructor(t){super(),D(this,t,St,Ht,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
