(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const $ of f.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&s($)}).observe(document,{childList:!0,subtree:!0});function t(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerpolicy&&(f.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?f.credentials="include":l.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(l){if(l.ep)return;l.ep=!0;const f=t(l);fetch(l.href,f)}})();function O(){}function Le(n,e){for(const t in e)n[t]=e[t];return n}function ve(n){return n()}function pe(){return Object.create(null)}function J(n){n.forEach(ve)}function ke(n){return typeof n=="function"}function N(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Z;function Te(n,e){return Z||(Z=document.createElement("a")),Z.href=e,n===Z.href}function Ne(n){return Object.keys(n).length===0}function Q(n,e,t,s){if(n){const l=xe(n,e,t,s);return n[0](l)}}function xe(n,e,t,s){return n[1]&&s?Le(t.ctx.slice(),n[1](s(e))):t.ctx}function U(n,e,t,s){if(n[2]&&s){const l=n[2](s(t));if(e.dirty===void 0)return l;if(typeof l=="object"){const f=[],$=Math.max(e.dirty.length,l.length);for(let r=0;r<$;r+=1)f[r]=e.dirty[r]|l[r];return f}return e.dirty|l}return e.dirty}function X(n,e,t,s,l,f){if(l){const $=xe(e,t,s,f);n.p($,l)}}function Y(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let s=0;s<t;s++)e[s]=-1;return e}return-1}function q(n,e){n.appendChild(e)}function c(n,e,t){n.insertBefore(e,t||null)}function i(n){n.parentNode&&n.parentNode.removeChild(n)}function Ee(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function x(n){return document.createElement(n)}function m(n){return document.createTextNode(n)}function L(){return m(" ")}function $e(){return m("")}function j(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ae(n){return Array.from(n.childNodes)}function ue(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function C(n,e,t,s){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}function _e(n,e){return new n(e)}let H;function V(n){H=n}function Ie(){if(!H)throw new Error("Function called outside component initialization");return H}function oe(n){Ie().$$.on_mount.push(n)}const z=[],me=[];let D=[];const ae=[],Oe=Promise.resolve();let le=!1;function Pe(){le||(le=!0,Oe.then(Me))}function re(n){D.push(n)}const se=new Set;let W=0;function Me(){if(W!==0)return;const n=H;do{try{for(;W<z.length;){const e=z[W];W++,V(e),ye(e.$$)}}catch(e){throw z.length=0,W=0,e}for(V(null),z.length=0,W=0;me.length;)me.pop()();for(let e=0;e<D.length;e+=1){const t=D[e];se.has(t)||(se.add(t),t())}D.length=0}while(z.length);for(;ae.length;)ae.pop()();le=!1,se.clear(),V(n)}function ye(n){if(n.fragment!==null){n.update(),J(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(re)}}function je(n){const e=[],t=[];D.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),D=e}const ne=new Set;let R;function Ce(){R={r:0,c:[],p:R}}function Se(){R.r||J(R.c),R=R.p}function d(n,e){n&&n.i&&(ne.delete(n),n.i(e))}function w(n,e,t,s){if(n&&n.o){if(ne.has(n))return;ne.add(n),R.c.push(()=>{ne.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}function E(n){n&&n.c()}function v(n,e,t,s){const{fragment:l,after_update:f}=n.$$;l&&l.m(e,t),s||re(()=>{const $=n.$$.on_mount.map(ve).filter(ke);n.$$.on_destroy?n.$$.on_destroy.push(...$):J($),n.$$.on_mount=[]}),f.forEach(re)}function k(n,e){const t=n.$$;t.fragment!==null&&(je(t.after_update),J(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function qe(n,e){n.$$.dirty[0]===-1&&(z.push(n),Pe(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function A(n,e,t,s,l,f,$,r=[-1]){const o=H;V(n);const u=n.$$={fragment:null,ctx:[],props:f,update:O,not_equal:l,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:pe(),dirty:r,skip_bound:!1,root:e.target||o.$$.root};$&&$(u.root);let _=!1;if(u.ctx=t?t(n,e.props||{},(p,a,...M)=>{const T=M.length?M[0]:a;return u.ctx&&l(u.ctx[p],u.ctx[p]=T)&&(!u.skip_bound&&u.bound[p]&&u.bound[p](T),_&&qe(n,p)),a}):[],u.update(),_=!0,J(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const p=Ae(e.target);u.fragment&&u.fragment.l(p),p.forEach(i)}else u.fragment&&u.fragment.c();e.intro&&d(n.$$.fragment),v(n,e.target,e.anchor,e.customElement),Me()}V(o)}class I{$destroy(){k(this,1),this.$destroy=O}$on(e,t){if(!ke(t))return O;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}$set(e){this.$$set&&!Ne(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Be(n){let e,t;const s=n[1].default,l=Q(s,n,n[0],null);return{c(){e=x("div"),l&&l.c(),j(e,"class","fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center text-white")},m(f,$){c(f,e,$),l&&l.m(e,null),t=!0},p(f,[$]){l&&l.p&&(!t||$&1)&&X(l,s,f,f[0],t?U(s,f[0],$,null):Y(f[0]),null)},i(f){t||(d(l,f),t=!0)},o(f){w(l,f),t=!1},d(f){f&&i(e),l&&l.d(f)}}}function Fe(n,e,t){let{$$slots:s={},$$scope:l}=e;return n.$$set=f=>{"$$scope"in f&&t(0,l=f.$$scope)},[l,s]}class Ge extends I{constructor(e){super(),A(this,e,Fe,Be,N,{})}}function Ke(n){let e,t;const s=n[1].default,l=Q(s,n,n[0],null);return{c(){e=x("div"),l&&l.c(),j(e,"class","text-xl md:text-4xl lg:text-6xl 2xl:text-8xl text-center my-2")},m(f,$){c(f,e,$),l&&l.m(e,null),t=!0},p(f,[$]){l&&l.p&&(!t||$&1)&&X(l,s,f,f[0],t?U(s,f[0],$,null):Y(f[0]),null)},i(f){t||(d(l,f),t=!0)},o(f){w(l,f),t=!1},d(f){f&&i(e),l&&l.d(f)}}}function Re(n,e,t){let{$$slots:s={},$$scope:l}=e;return n.$$set=f=>{"$$scope"in f&&t(0,l=f.$$scope)},[l,s]}class B extends I{constructor(e){super(),A(this,e,Re,Ke,N,{})}}function We(n){let e,t;const s=n[1].default,l=Q(s,n,n[0],null);return{c(){e=x("span"),l&&l.c(),j(e,"class","pb-1 px-2 bg-white/5 border border-white/10 rounded-md")},m(f,$){c(f,e,$),l&&l.m(e,null),t=!0},p(f,[$]){l&&l.p&&(!t||$&1)&&X(l,s,f,f[0],t?U(s,f[0],$,null):Y(f[0]),null)},i(f){t||(d(l,f),t=!0)},o(f){w(l,f),t=!1},d(f){f&&i(e),l&&l.d(f)}}}function ze(n,e,t){let{$$slots:s={},$$scope:l}=e;return n.$$set=f=>{"$$scope"in f&&t(0,l=f.$$scope)},[l,s]}class y extends I{constructor(e){super(),A(this,e,ze,We,N,{})}}function De(n){let e,t;const s=n[1].default,l=Q(s,n,n[0],null);return{c(){e=x("div"),l&&l.c(),j(e,"class","text-lg lg:text-2xl 2xl:text-4xl opacity-50 text-center mt-4"),C(e,"line-height","1.5")},m(f,$){c(f,e,$),l&&l.m(e,null),t=!0},p(f,[$]){l&&l.p&&(!t||$&1)&&X(l,s,f,f[0],t?U(s,f[0],$,null):Y(f[0]),null)},i(f){t||(d(l,f),t=!0)},o(f){w(l,f),t=!1},d(f){f&&i(e),l&&l.d(f)}}}function Ve(n,e,t){let{$$slots:s={},$$scope:l}=e;return n.$$set=f=>{"$$scope"in f&&t(0,l=f.$$scope)},[l,s]}class S extends I{constructor(e){super(),A(this,e,Ve,De,N,{})}}function He(n){let e,t,s;return{c(){e=m("\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C "),t=x("br"),s=m(`\r
	\u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442 \xAB\u0418\u043A\u0441\u041F\u0440\u043E\xBB!`)},m(l,f){c(l,e,f),c(l,t,f),c(l,s,f)},p:O,d(l){l&&i(e),l&&i(t),l&&i(s)}}}function Je(n){let e;return{c(){e=m("\u{1F814}")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function Qe(n){let e;return{c(){e=m("\u279E")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function Ue(n){let e,t,s,l,f,$;return t=new y({props:{$$slots:{default:[Je]},$$scope:{ctx:n}}}),l=new y({props:{$$slots:{default:[Qe]},$$scope:{ctx:n}}}),{c(){e=m("\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 "),E(t.$$.fragment),s=m(" \u0438 "),E(l.$$.fragment),f=m(" \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F")},m(r,o){c(r,e,o),v(t,r,o),c(r,s,o),v(l,r,o),c(r,f,o),$=!0},p(r,o){const u={};o&1&&(u.$$scope={dirty:o,ctx:r}),t.$set(u);const _={};o&1&&(_.$$scope={dirty:o,ctx:r}),l.$set(_)},i(r){$||(d(t.$$.fragment,r),d(l.$$.fragment,r),$=!0)},o(r){w(t.$$.fragment,r),w(l.$$.fragment,r),$=!1},d(r){r&&i(e),k(t,r),r&&i(s),k(l,r),r&&i(f)}}}function Xe(n){let e,t,s,l,f,$,r;return e=new B({props:{$$slots:{default:[He]},$$scope:{ctx:n}}}),$=new S({props:{$$slots:{default:[Ue]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment),t=L(),s=x("img"),f=L(),E($.$$.fragment),j(s,"class","my-8"),Te(s.src,l="favicon.ico")||j(s,"src",l)},m(o,u){v(e,o,u),c(o,t,u),c(o,s,u),c(o,f,u),v($,o,u),r=!0},p(o,[u]){const _={};u&1&&(_.$$scope={dirty:u,ctx:o}),e.$set(_);const p={};u&1&&(p.$$scope={dirty:u,ctx:o}),$.$set(p)},i(o){r||(d(e.$$.fragment,o),d($.$$.fragment,o),r=!0)},o(o){w(e.$$.fragment,o),w($.$$.fragment,o),r=!1},d(o){k(e,o),o&&i(t),o&&i(s),o&&i(f),k($,o)}}}class Ye extends I{constructor(e){super(),A(this,e,null,Xe,N,{})}}function Ze(n){let e,t;const s=n[1].default,l=Q(s,n,n[0],null);return{c(){e=x("p"),l&&l.c(),j(e,"class","text-lg lg:text-2xl 2xl:text-4xl text-center mt-4"),C(e,"line-height","1.5")},m(f,$){c(f,e,$),l&&l.m(e,null),t=!0},p(f,[$]){l&&l.p&&(!t||$&1)&&X(l,s,f,f[0],t?U(s,f[0],$,null):Y(f[0]),null)},i(f){t||(d(l,f),t=!0)},o(f){w(l,f),t=!1},d(f){f&&i(e),l&&l.d(f)}}}function he(n,e,t){let{$$slots:s={},$$scope:l}=e;return n.$$set=f=>{"$$scope"in f&&t(0,l=f.$$scope)},[l,s]}class G extends I{constructor(e){super(),A(this,e,he,Ze,N,{})}}function et(n){let e;return{c(){e=m("\u0427\u0442\u043E \u044D\u0442\u043E?")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function tt(n){let e,t,s,l,f;return{c(){e=m("\u0418\u043A\u0441\u041F\u0440\u043E - \u0441\u0435\u0440\u0432\u0435\u0440 GTA \u0441 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438 RPG \u0438 DM."),t=x("br"),s=m(`\r
	\u041F\u0435\u0440\u0435\u0441\u0442\u0440\u0435\u043B\u043A\u0438, \u0433\u043E\u043D\u043A\u0438, \u0433\u0440\u0438\u043D\u0434, \u0438 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0434\u0440\u0443\u0433\u0438\u0445 \u0437\u0430\u043D\u044F\u0442\u0438\u0439.`),l=x("br"),f=m(`\r
	\u0421\u0435\u0439\u0447\u0430\u0441 \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C!`)},m($,r){c($,e,r),c($,t,r),c($,s,r),c($,l,r),c($,f,r)},p:O,d($){$&&i(e),$&&i(t),$&&i(s),$&&i(l),$&&i(f)}}}function ft(n){let e;return{c(){e=m("\u279E")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function nt(n){let e,t,s,l;return t=new y({props:{$$slots:{default:[ft]},$$scope:{ctx:n}}}),{c(){e=m("\u041D\u0430\u0436\u043C\u0438\u0442\u0435 "),E(t.$$.fragment),s=m(" \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C")},m(f,$){c(f,e,$),v(t,f,$),c(f,s,$),l=!0},p(f,$){const r={};$&1&&(r.$$scope={dirty:$,ctx:f}),t.$set(r)},i(f){l||(d(t.$$.fragment,f),l=!0)},o(f){w(t.$$.fragment,f),l=!1},d(f){f&&i(e),k(t,f),f&&i(s)}}}function st(n){let e,t,s,l,f,$;return e=new B({props:{$$slots:{default:[et]},$$scope:{ctx:n}}}),s=new G({props:{$$slots:{default:[tt]},$$scope:{ctx:n}}}),f=new S({props:{$$slots:{default:[nt]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment),t=L(),E(s.$$.fragment),l=L(),E(f.$$.fragment)},m(r,o){v(e,r,o),c(r,t,o),v(s,r,o),c(r,l,o),v(f,r,o),$=!0},p(r,[o]){const u={};o&1&&(u.$$scope={dirty:o,ctx:r}),e.$set(u);const _={};o&1&&(_.$$scope={dirty:o,ctx:r}),s.$set(_);const p={};o&1&&(p.$$scope={dirty:o,ctx:r}),f.$set(p)},i(r){$||(d(e.$$.fragment,r),d(s.$$.fragment,r),d(f.$$.fragment,r),$=!0)},o(r){w(e.$$.fragment,r),w(s.$$.fragment,r),w(f.$$.fragment,r),$=!1},d(r){k(e,r),r&&i(t),k(s,r),r&&i(l),k(f,r)}}}class lt extends I{constructor(e){super(),A(this,e,null,st,N,{})}}function rt(n){let e;return{c(){e=m("\u0424\u0440\u0430\u043A\u0446\u0438\u0438")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function $t(n){let e,t,s,l,f,$,r,o;return{c(){e=m("\u0412\u0441\u0442\u0443\u043F\u0438\u0442\u0435 \u0432 \u043A\u0440\u0438\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0443\u044E \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0443,"),t=x("br"),s=m(`\r
	\u0447\u0442\u043E\u0431\u044B \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 \u0442\u0443\u0440\u043D\u0438\u0440\u0430\u0445 \u0438 \u0432\u043E\u0439\u043D\u0430\u0445 \u0437\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044E,`),l=x("br"),f=m(`\r
	\u043F\u0440\u043E\u043A\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0440\u0430\u043D\u0433 \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0437\u0430 \u0432\u0441\u0451 \u044D\u0442\u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0443. `),$=x("br"),r=m(`\r
	\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0430 \u0432 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435.`),o=x("br")},m(u,_){c(u,e,_),c(u,t,_),c(u,s,_),c(u,l,_),c(u,f,_),c(u,$,_),c(u,r,_),c(u,o,_)},p:O,d(u){u&&i(e),u&&i(t),u&&i(s),u&&i(l),u&&i(f),u&&i($),u&&i(r),u&&i(o)}}}function ut(n){let e;return{c(){e=m("M")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function ot(n){let e,t,s,l,f,$;return t=new y({props:{$$slots:{default:[ut]},$$scope:{ctx:n}}}),{c(){e=m("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u0432 "),E(t.$$.fragment),s=m(" \u041F\u043B\u0430\u043D\u0448\u0435\u0442\u0435. "),l=x("br"),f=m(`\r
	\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u044D\u0442\u043E \u043F\u043E\u0437\u0436\u0435, \u043A\u043E\u0433\u0434\u0430 \u0437\u0430\u0445\u043E\u0442\u0438\u0442\u0435.`)},m(r,o){c(r,e,o),v(t,r,o),c(r,s,o),c(r,l,o),c(r,f,o),$=!0},p(r,o){const u={};o&1&&(u.$$scope={dirty:o,ctx:r}),t.$set(u)},i(r){$||(d(t.$$.fragment,r),$=!0)},o(r){w(t.$$.fragment,r),$=!1},d(r){r&&i(e),k(t,r),r&&i(s),r&&i(l),r&&i(f)}}}function it(n){let e,t,s,l,f,$;return e=new B({props:{$$slots:{default:[rt]},$$scope:{ctx:n}}}),s=new G({props:{$$slots:{default:[$t]},$$scope:{ctx:n}}}),f=new S({props:{$$slots:{default:[ot]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment),t=L(),E(s.$$.fragment),l=L(),E(f.$$.fragment)},m(r,o){v(e,r,o),c(r,t,o),v(s,r,o),c(r,l,o),v(f,r,o),$=!0},p(r,[o]){const u={};o&1&&(u.$$scope={dirty:o,ctx:r}),e.$set(u);const _={};o&1&&(_.$$scope={dirty:o,ctx:r}),s.$set(_);const p={};o&1&&(p.$$scope={dirty:o,ctx:r}),f.$set(p)},i(r){$||(d(e.$$.fragment,r),d(s.$$.fragment,r),d(f.$$.fragment,r),$=!0)},o(r){w(e.$$.fragment,r),w(s.$$.fragment,r),w(f.$$.fragment,r),$=!1},d(r){k(e,r),r&&i(t),k(s,r),r&&i(l),k(f,r)}}}class ct extends I{constructor(e){super(),A(this,e,null,it,N,{})}}function pt(n){let e;return{c(){e=m("\u0413\u0434\u0435 \u0434\u043E\u0441\u0442\u0430\u0442\u044C \u043E\u0440\u0443\u0436\u0438\u0435?")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function _t(n){let e,t,s,l,f;return{c(){e=m("\u2022 \u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 "),t=x("br"),s=m(`\r
	\u2022 \u0421\u043A\u0440\u0430\u0444\u0442\u0438\u0442\u044C \u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u0435 \u0444\u0440\u0430\u043A\u0446\u0438\u0438 `),l=x("br"),f=m(`\r
	\u2022 \u0412\u044B\u0431\u0438\u0442\u044C \u0438\u0437 \u0440\u0443\u043A \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0438\u0433\u0440\u043E\u043A\u0430`)},m($,r){c($,e,r),c($,t,r),c($,s,r),c($,l,r),c($,f,r)},p:O,d($){$&&i(e),$&&i(t),$&&i(s),$&&i(l),$&&i(f)}}}function mt(n){let e;return{c(){e=m("I")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function at(n){let e,t,s,l,f;return l=new y({props:{$$slots:{default:[mt]},$$scope:{ctx:n}}}),{c(){e=m("\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u043E\u0435 \u043E\u0440\u0443\u0436\u0438\u0435! "),t=x("br"),s=m(`\r
	\u0427\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 `),E(l.$$.fragment)},m($,r){c($,e,r),c($,t,r),c($,s,r),v(l,$,r),f=!0},p($,r){const o={};r&1&&(o.$$scope={dirty:r,ctx:$}),l.$set(o)},i($){f||(d(l.$$.fragment,$),f=!0)},o($){w(l.$$.fragment,$),f=!1},d($){$&&i(e),$&&i(t),$&&i(s),k(l,$)}}}function dt(n){let e,t,s,l,f,$;return e=new B({props:{$$slots:{default:[pt]},$$scope:{ctx:n}}}),s=new G({props:{$$slots:{default:[_t]},$$scope:{ctx:n}}}),f=new S({props:{$$slots:{default:[at]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment),t=L(),E(s.$$.fragment),l=L(),E(f.$$.fragment)},m(r,o){v(e,r,o),c(r,t,o),v(s,r,o),c(r,l,o),v(f,r,o),$=!0},p(r,[o]){const u={};o&1&&(u.$$scope={dirty:o,ctx:r}),e.$set(u);const _={};o&1&&(_.$$scope={dirty:o,ctx:r}),s.$set(_);const p={};o&1&&(p.$$scope={dirty:o,ctx:r}),f.$set(p)},i(r){$||(d(e.$$.fragment,r),d(s.$$.fragment,r),d(f.$$.fragment,r),$=!0)},o(r){w(e.$$.fragment,r),w(s.$$.fragment,r),w(f.$$.fragment,r),$=!1},d(r){k(e,r),r&&i(t),k(s,r),r&&i(l),k(f,r)}}}class bt extends I{constructor(e){super(),A(this,e,null,dt,N,{})}}function de(n,e,t){const s=n.slice();return s[1]=e[t],s}function wt(n){let e;return{c(){e=m("\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function gt(n){let e,t,s,l,f;return{c(){e=m("\u0420\u0430\u0437\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u0441\u044F \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437 \u0432 \u0434\u0435\u043D\u044C. "),t=x("br"),s=m(`\r
	\u0412\u044B\u0441\u043E\u043A\u0430\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0446\u0438\u044F \u0438 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043E\u043A. `),l=x("br"),f=m(`\r
	\u042D\u0442\u043E \u043B\u0443\u0447\u0448\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443, \u0447\u0435\u043C \u0447\u0438\u0442\u0430\u0442\u044C \u043E\u0431 \u044D\u0442\u043E\u043C.`)},m($,r){c($,e,r),c($,t,r),c($,s,r),c($,l,r),c($,f,r)},p:O,d($){$&&i(e),$&&i(t),$&&i(s),$&&i(l),$&&i(f)}}}function vt(n){let e;return{c(){e=m("M")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function kt(n){let e,t,s,l,f;return t=new y({props:{$$slots:{default:[vt]},$$scope:{ctx:n}}}),{c(){e=m("\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0432 "),E(t.$$.fragment),s=m(" \u041F\u043B\u0430\u043D\u0448\u0435\u0442\u0435. "),l=x("br")},m($,r){c($,e,r),v(t,$,r),c($,s,r),c($,l,r),f=!0},p($,r){const o={};r&16&&(o.$$scope={dirty:r,ctx:$}),t.$set(o)},i($){f||(d(t.$$.fragment,$),f=!0)},o($){w(t.$$.fragment,$),f=!1},d($){$&&i(e),k(t,$),$&&i(s),$&&i(l)}}}function be(n){let e,t=n[1].name+"",s,l;return{c(){e=x("div"),s=m(t),l=L(),j(e,"class","absolute uppercase opacity-20 duration-100 "),C(e,"top",n[1].top+"%"),C(e,"left",n[1].left+"%")},m(f,$){c(f,e,$),q(e,s),q(e,l)},p(f,$){$&1&&t!==(t=f[1].name+"")&&ue(s,t),$&1&&C(e,"top",f[1].top+"%"),$&1&&C(e,"left",f[1].left+"%")},d(f){f&&i(e)}}}function xt(n){let e,t,s,l,f,$,r,o;e=new B({props:{$$slots:{default:[wt]},$$scope:{ctx:n}}}),s=new G({props:{$$slots:{default:[gt]},$$scope:{ctx:n}}}),f=new S({props:{$$slots:{default:[kt]},$$scope:{ctx:n}}});let u=n[0],_=[];for(let p=0;p<u.length;p+=1)_[p]=be(de(n,u,p));return{c(){E(e.$$.fragment),t=L(),E(s.$$.fragment),l=L(),E(f.$$.fragment),$=L();for(let p=0;p<_.length;p+=1)_[p].c();r=$e()},m(p,a){v(e,p,a),c(p,t,a),v(s,p,a),c(p,l,a),v(f,p,a),c(p,$,a);for(let M=0;M<_.length;M+=1)_[M]&&_[M].m(p,a);c(p,r,a),o=!0},p(p,[a]){const M={};a&16&&(M.$$scope={dirty:a,ctx:p}),e.$set(M);const T={};a&16&&(T.$$scope={dirty:a,ctx:p}),s.$set(T);const g={};if(a&16&&(g.$$scope={dirty:a,ctx:p}),f.$set(g),a&1){u=p[0];let b;for(b=0;b<u.length;b+=1){const F=de(p,u,b);_[b]?_[b].p(F,a):(_[b]=be(F),_[b].c(),_[b].m(r.parentNode,r))}for(;b<_.length;b+=1)_[b].d(1);_.length=u.length}},i(p){o||(d(e.$$.fragment,p),d(s.$$.fragment,p),d(f.$$.fragment,p),o=!0)},o(p){w(e.$$.fragment,p),w(s.$$.fragment,p),w(f.$$.fragment,p),o=!1},d(p){k(e,p),p&&i(t),k(s,p),p&&i(l),k(f,p),p&&i($),Ee(_,p),p&&i(r)}}}function K(n){return{name:n,top:ee([h(5,30),h(70,95)]),left:ee([h(5,30),h(70,95)]),dirTop:ee([!0,!1]),dirLeft:ee([!0,!1])}}function h(n,e){return Math.floor(Math.random()*(e-n+1))+n}function ee(n){return n[Math.floor(Math.random()*n.length)]}function Et(n,e,t){let s=[K("\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u043A\u0430\u044F \u0431\u0438\u0442\u0432\u0430"),K("\u041F\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"),K("\u041F\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043C\u0435\u0434\u0438\u043A\u0430\u043C\u0435\u043D\u0442\u043E\u0432"),K("\u041E\u0433\u0440\u0430\u0431\u043B\u0435\u043D\u0438\u0435 \u0431\u0430\u043D\u043A\u0430"),K("\u041D\u0430\u043F\u0430\u0434\u0435\u043D\u0438\u0435 \u043D\u0430 \u0424\u043E\u0440\u0442"),K("\u041F\u0435\u0440\u0435\u0445\u0432\u0430\u0442 \u0422\u0421"),K("\u0423\u043B\u0438\u0447\u043D\u0430\u044F \u0433\u043E\u043D\u043A\u0430")];return oe(()=>{let l=setInterval(()=>{s.forEach(f=>{f.left=f.left+(f.dirLeft?.1:-.1),f.top=f.top+(f.dirTop?.1:-.1),(f.left<=5||f.left>=95)&&(f.dirLeft=!f.dirLeft),(f.top<=5||f.top>=95)&&(f.dirTop=!f.dirTop)}),t(0,s)},100);return()=>clearInterval(l)}),[s]}class Mt extends I{constructor(e){super(),A(this,e,Et,xt,N,{})}}function Lt(n){let e;return{c(){e=m("\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function Tt(n){let e,t,s,l;return{c(){e=m("\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u044C \u0410\u0440\u0435\u043D\u0443 - \u0441\u0430\u043C\u044B\u0439 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u043D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443."),t=x("br"),s=m(`\r
	\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0435 \u043E\u0440\u0443\u0436\u0438\u0435 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441, \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043A\u0430\u0440\u0442, \u043C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0435\u0441\u043F\u0430\u0432\u043D.`),l=x("br")},m(f,$){c(f,e,$),c(f,t,$),c(f,s,$),c(f,l,$)},p:O,d(f){f&&i(e),f&&i(t),f&&i(s),f&&i(l)}}}function Nt(n){let e;return{c(){e=m("Esc")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function At(n){let e,t,s,l,f,$,r,o;return $=new y({props:{$$slots:{default:[Nt]},$$scope:{ctx:n}}}),{c(){e=m(`\u041D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u043C\u043E\u0436\u043D\u043E \u0441\u0442\u0440\u0435\u043B\u044F\u0442\u044C\u0441\u044F \u0432 \u043B\u044E\u0431\u043E\u0439 \u0442\u043E\u0447\u043A\u0435 \u043A\u0430\u0440\u0442\u044B, \u043A\u0440\u043E\u043C\u0435 \u0437\u0435\u043B\u0451\u043D\u044B\u0445 \u0437\u043E\u043D.\r
	`),t=x("br"),s=m(`\r
	\u041D\u043E \u0437\u0430\u0447\u0435\u043C? \u0410\u0440\u0435\u043D\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F, \u043D\u0435 \u0442\u0440\u0430\u0442\u044F \u043F\u0430\u0442\u0440\u043E\u043D\u044B \u0438 \u0430\u043F\u0442\u0435\u0447\u043A\u0438.\r
	`),l=x("br"),f=m(`\r
	\u041D\u0430\u0436\u043C\u0438\u0442\u0435 `),E($.$$.fragment),r=m(", \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0439\u0442\u0438 \u0437\u043D\u0430\u0447\u043E\u043A \u0410\u0440\u0435\u043D\u044B \u043D\u0430 \u043A\u0430\u0440\u0442\u0435.")},m(u,_){c(u,e,_),c(u,t,_),c(u,s,_),c(u,l,_),c(u,f,_),v($,u,_),c(u,r,_),o=!0},p(u,_){const p={};_&1&&(p.$$scope={dirty:_,ctx:u}),$.$set(p)},i(u){o||(d($.$$.fragment,u),o=!0)},o(u){w($.$$.fragment,u),o=!1},d(u){u&&i(e),u&&i(t),u&&i(s),u&&i(l),u&&i(f),k($,u),u&&i(r)}}}function It(n){let e,t,s,l,f,$;return e=new B({props:{$$slots:{default:[Lt]},$$scope:{ctx:n}}}),s=new G({props:{$$slots:{default:[Tt]},$$scope:{ctx:n}}}),f=new S({props:{$$slots:{default:[At]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment),t=L(),E(s.$$.fragment),l=L(),E(f.$$.fragment)},m(r,o){v(e,r,o),c(r,t,o),v(s,r,o),c(r,l,o),v(f,r,o),$=!0},p(r,[o]){const u={};o&1&&(u.$$scope={dirty:o,ctx:r}),e.$set(u);const _={};o&1&&(_.$$scope={dirty:o,ctx:r}),s.$set(_);const p={};o&1&&(p.$$scope={dirty:o,ctx:r}),f.$set(p)},i(r){$||(d(e.$$.fragment,r),d(s.$$.fragment,r),d(f.$$.fragment,r),$=!0)},o(r){w(e.$$.fragment,r),w(s.$$.fragment,r),w(f.$$.fragment,r),$=!1},d(r){k(e,r),r&&i(t),k(s,r),r&&i(l),k(f,r)}}}class Ot extends I{constructor(e){super(),A(this,e,null,It,N,{})}}function Pt(n){let e;return{c(){e=m("\u041A\u0430\u043A \u043D\u0430\u0439\u0442\u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442?")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function yt(n){let e,t,s,l,f;return{c(){e=m("\u2022 \u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0438\u0442\u0435 \u043C\u0430\u0448\u0438\u043D\u0443 \u0438\u043B\u0438 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B \u0432 \u0430\u0432\u0442\u043E\u0441\u0430\u043B\u043E\u043D\u0435 "),t=x("br"),s=m(`\r
	\u2022 \u0423\u0441\u0442\u0440\u043E\u0439\u0442\u0435\u0441\u044C \u0432\u043E \u0444\u0440\u0430\u043A\u0446\u0438\u044E \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0435\u0451 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0443 `),l=x("br"),f=m(`\r
	\u2022 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0430\u0440\u0435\u043D\u0434\u0443! NPC-\u0430\u0440\u0435\u043D\u0434\u0430\u0442\u043E\u0440\u044B \u0435\u0441\u0442\u044C \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0443\u043B\u0438\u0446\u0435`)},m($,r){c($,e,r),c($,t,r),c($,s,r),c($,l,r),c($,f,r)},p:O,d($){$&&i(e),$&&i(t),$&&i(s),$&&i(l),$&&i(f)}}}function jt(n){let e;return{c(){e=m("M")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function Ct(n){let e,t,s,l,f,$,r,o;return $=new y({props:{$$slots:{default:[jt]},$$scope:{ctx:n}}}),{c(){e=m(`\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u043A \u0432\u0430\u043C \u0430\u0440\u0435\u043D\u0434\u0430\u0442\u043E\u0440 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0441\u043F\u0440\u0430\u0432\u0430 \u043E\u0442 \u044D\u0442\u043E\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430.\r
	`),t=x("br"),s=m(`\r
	\u041C\u0430\u0448\u0438\u043D\u044B \u0441\u0442\u043E\u044F\u0442 \u043E\u0442 $7000. \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0432\u0442\u043E\u0441\u0430\u043B\u043E\u043D\u0430!\r
	`),l=x("br"),f=m(`\r
	\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430 \u0438 \u0430\u0432\u0442\u043E\u0441\u0430\u043B\u043E\u043D\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0432 `),E($.$$.fragment),r=m(" \u041F\u043B\u0430\u043D\u0448\u0435\u0442\u0435")},m(u,_){c(u,e,_),c(u,t,_),c(u,s,_),c(u,l,_),c(u,f,_),v($,u,_),c(u,r,_),o=!0},p(u,_){const p={};_&1&&(p.$$scope={dirty:_,ctx:u}),$.$set(p)},i(u){o||(d($.$$.fragment,u),o=!0)},o(u){w($.$$.fragment,u),o=!1},d(u){u&&i(e),u&&i(t),u&&i(s),u&&i(l),u&&i(f),k($,u),u&&i(r)}}}function St(n){let e,t,s,l,f,$;return e=new B({props:{$$slots:{default:[Pt]},$$scope:{ctx:n}}}),s=new G({props:{$$slots:{default:[yt]},$$scope:{ctx:n}}}),f=new S({props:{$$slots:{default:[Ct]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment),t=L(),E(s.$$.fragment),l=L(),E(f.$$.fragment)},m(r,o){v(e,r,o),c(r,t,o),v(s,r,o),c(r,l,o),v(f,r,o),$=!0},p(r,[o]){const u={};o&1&&(u.$$scope={dirty:o,ctx:r}),e.$set(u);const _={};o&1&&(_.$$scope={dirty:o,ctx:r}),s.$set(_);const p={};o&1&&(p.$$scope={dirty:o,ctx:r}),f.$set(p)},i(r){$||(d(e.$$.fragment,r),d(s.$$.fragment,r),d(f.$$.fragment,r),$=!0)},o(r){w(e.$$.fragment,r),w(s.$$.fragment,r),w(f.$$.fragment,r),$=!1},d(r){k(e,r),r&&i(t),k(s,r),r&&i(l),k(f,r)}}}class qt extends I{constructor(e){super(),A(this,e,null,St,N,{})}}function we(n,e,t){const s=n.slice();return s[1]=e[t],s}function Bt(n){let e;return{c(){e=m("\u0420\u0430\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u0438 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043E\u043A")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function Ft(n){let e,t,s,l;return{c(){e=m("\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044C\u0442\u0435, \u0447\u0435\u043C \u0431\u044B \u0432\u0430\u043C \u0445\u043E\u0442\u0435\u043B\u043E\u0441\u044C \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F. "),t=x("br"),s=m(`\r
	\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u044D\u0442\u043E \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435! `),l=x("br")},m(f,$){c(f,e,$),c(f,t,$),c(f,s,$),c(f,l,$)},p:O,d(f){f&&i(e),f&&i(t),f&&i(s),f&&i(l)}}}function Gt(n){let e;return{c(){e=m("Esc")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function Kt(n){let e;return{c(){e=m("M")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function Rt(n){let e;return{c(){e=m("T")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function Wt(n){let e,t,s,l,f,$,r,o,u,_,p,a,M,T;return t=new y({props:{$$slots:{default:[Gt]},$$scope:{ctx:n}}}),$=new y({props:{$$slots:{default:[Kt]},$$scope:{ctx:n}}}),_=new y({props:{$$slots:{default:[Rt]},$$scope:{ctx:n}}}),{c(){e=m("\u0418\u0441\u0441\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u043C\u0438\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043D\u0430 "),E(t.$$.fragment),s=m(" \u043A\u0430\u0440\u0442\u0435,"),l=x("br"),f=m(`\r
	\u0438\u0437\u0443\u0447\u0430\u0439\u0442\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0432 `),E($.$$.fragment),r=m(" \u041F\u043B\u0430\u043D\u0448\u0435\u0442\u0435,"),o=x("br"),u=m(`\r
	\u043E\u0431\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0438\u0433\u0440\u043E\u043A\u0430\u043C\u0438 \u0432 `),E(_.$$.fragment),p=m(" \u0447\u0430\u0442\u0435,"),a=x("br"),M=m(`\r
	\u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0439\u0442\u0435 \u0434\u043B\u044F \u0441\u0435\u0431\u044F \u043D\u043E\u0432\u044B\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u044F.`)},m(g,b){c(g,e,b),v(t,g,b),c(g,s,b),c(g,l,b),c(g,f,b),v($,g,b),c(g,r,b),c(g,o,b),c(g,u,b),v(_,g,b),c(g,p,b),c(g,a,b),c(g,M,b),T=!0},p(g,b){const F={};b&16&&(F.$$scope={dirty:b,ctx:g}),t.$set(F);const ie={};b&16&&(ie.$$scope={dirty:b,ctx:g}),$.$set(ie);const ce={};b&16&&(ce.$$scope={dirty:b,ctx:g}),_.$set(ce)},i(g){T||(d(t.$$.fragment,g),d($.$$.fragment,g),d(_.$$.fragment,g),T=!0)},o(g){w(t.$$.fragment,g),w($.$$.fragment,g),w(_.$$.fragment,g),T=!1},d(g){g&&i(e),k(t,g),g&&i(s),g&&i(l),g&&i(f),k($,g),g&&i(r),g&&i(o),g&&i(u),k(_,g),g&&i(p),g&&i(a),g&&i(M)}}}function ge(n){let e,t=n[1].name+"",s,l;return{c(){e=x("div"),s=m(t),l=L(),j(e,"class","absolute uppercase opacity-20 duration-100 "),C(e,"top",n[1].top+"%"),C(e,"left",n[1].left+"%")},m(f,$){c(f,e,$),q(e,s),q(e,l)},p(f,$){$&1&&t!==(t=f[1].name+"")&&ue(s,t),$&1&&C(e,"top",f[1].top+"%"),$&1&&C(e,"left",f[1].left+"%")},d(f){f&&i(e)}}}function zt(n){let e,t,s,l,f,$,r,o;e=new B({props:{$$slots:{default:[Bt]},$$scope:{ctx:n}}}),s=new G({props:{$$slots:{default:[Ft]},$$scope:{ctx:n}}}),f=new S({props:{$$slots:{default:[Wt]},$$scope:{ctx:n}}});let u=n[0],_=[];for(let p=0;p<u.length;p+=1)_[p]=ge(we(n,u,p));return{c(){E(e.$$.fragment),t=L(),E(s.$$.fragment),l=L(),E(f.$$.fragment),$=L();for(let p=0;p<_.length;p+=1)_[p].c();r=$e()},m(p,a){v(e,p,a),c(p,t,a),v(s,p,a),c(p,l,a),v(f,p,a),c(p,$,a);for(let M=0;M<_.length;M+=1)_[M]&&_[M].m(p,a);c(p,r,a),o=!0},p(p,[a]){const M={};a&16&&(M.$$scope={dirty:a,ctx:p}),e.$set(M);const T={};a&16&&(T.$$scope={dirty:a,ctx:p}),s.$set(T);const g={};if(a&16&&(g.$$scope={dirty:a,ctx:p}),f.$set(g),a&1){u=p[0];let b;for(b=0;b<u.length;b+=1){const F=we(p,u,b);_[b]?_[b].p(F,a):(_[b]=ge(F),_[b].c(),_[b].m(r.parentNode,r))}for(;b<_.length;b+=1)_[b].d(1);_.length=u.length}},i(p){o||(d(e.$$.fragment,p),d(s.$$.fragment,p),d(f.$$.fragment,p),o=!0)},o(p){w(e.$$.fragment,p),w(s.$$.fragment,p),w(f.$$.fragment,p),o=!1},d(p){k(e,p),p&&i(t),k(s,p),p&&i(l),k(f,p),p&&i($),Ee(_,p),p&&i(r)}}}function P(n){return{name:n,top:fe([te(10,30),te(70,90)]),left:fe([te(10,30),te(70,90)]),dirTop:fe([!0,!1]),dirLeft:fe([!0,!1])}}function te(n,e){return Math.floor(Math.random()*(e-n+1))+n}function fe(n){return n[Math.floor(Math.random()*n.length)]}function Dt(n,e,t){let s=[P("\u041A\u0430\u0437\u0438\u043D\u043E"),P("\u0420\u044B\u0431\u0430\u043B\u043A\u0430"),P("\u0421\u0430\u0434\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E"),P("\u0422\u044E\u043D\u0438\u043D\u0433"),P("\u041E\u0434\u0435\u0436\u0434\u0430"),P("\u0410\u043B\u043A\u043E\u0433\u043E\u043B\u044C"),P("\u0421\u0435\u043C\u044C\u044F"),P("\u0420\u0430\u0431\u043E\u0442\u0430"),P("\u041A\u0440\u0438\u043C\u0438\u043D\u0430\u043B"),P("\u0417\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u0430"),P("\u0411\u0438\u0437\u043D\u0435\u0441"),P("\u041E\u0433\u0440\u0430\u0431\u043B\u0435\u043D\u0438\u044F"),P("\u041A\u0440\u0430\u0444\u0442")];return oe(()=>{let l=setInterval(()=>{s.forEach(f=>{f.left=f.left+(f.dirLeft?.1:-.1),f.top=f.top+(f.dirTop?.1:-.1),(f.left<=5||f.left>=95)&&(f.dirLeft=!f.dirLeft),(f.top<=5||f.top>=95)&&(f.dirTop=!f.dirTop)}),t(0,s)},100);return()=>clearInterval(l)}),[s]}class Vt extends I{constructor(e){super(),A(this,e,Dt,zt,N,{})}}function Ht(n){let e;return{c(){e=m("\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043E!")},m(t,s){c(t,e,s)},d(t){t&&i(e)}}}function Jt(n){let e,t,s;return{c(){e=m("\u0423\u0436\u0435 \u0440\u0435\u0448\u0438\u043B\u0438, \u043A\u0443\u0434\u0430 \u043F\u043E\u0435\u0434\u0435\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C \u0434\u0435\u043B\u043E\u043C? "),t=x("br"),s=m(`\r
	\u0412\u043E\u0437\u044C\u043C\u0438\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0431\u0430\u0439\u043A \u0443 \u0430\u0440\u0435\u043D\u0434\u0430\u0442\u043E\u0440\u0430 \u0441\u043F\u0440\u0430\u0432\u0430 \u043E\u0442 \u0432\u0430\u0441.`)},m(l,f){c(l,e,f),c(l,t,f),c(l,s,f)},p:O,d(l){l&&i(e),l&&i(t),l&&i(s)}}}function Qt(n){let e,t,s,l,f;return{c(){e=m("\u041D\u0430\u0434 \u0440\u0430\u0434\u0430\u0440\u043E\u043C \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u044B \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u0432 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0435\u043C. "),t=x("br"),s=m(`\r
	\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u044B `),l=x("b"),l.textContent="/q",f=m(" \u0432 \u0447\u0430\u0442\u0435.")},m($,r){c($,e,r),c($,t,r),c($,s,r),c($,l,r),c($,f,r)},p:O,d($){$&&i(e),$&&i(t),$&&i(s),$&&i(l),$&&i(f)}}}function Ut(n){let e,t,s;return{c(){e=m("\u042D\u0442\u043E \u0431\u044B\u043B\u043E \u043A\u0440\u0430\u0442\u043A\u043E\u0435 \u0437\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E \u0441 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C. "),t=x("br"),s=m(`\r
	\u041F\u043E\u0440\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C \u0438\u0433\u0440\u0443. \u0416\u0435\u043B\u0430\u0435\u043C \u0443\u0434\u0430\u0447\u0438!`)},m(l,f){c(l,e,f),c(l,t,f),c(l,s,f)},p:O,d(l){l&&i(e),l&&i(t),l&&i(s)}}}function Xt(n){let e,t,s,l,f,$,r,o;return e=new B({props:{$$slots:{default:[Ht]},$$scope:{ctx:n}}}),s=new S({props:{$$slots:{default:[Jt]},$$scope:{ctx:n}}}),f=new S({props:{$$slots:{default:[Qt]},$$scope:{ctx:n}}}),r=new G({props:{$$slots:{default:[Ut]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment),t=L(),E(s.$$.fragment),l=L(),E(f.$$.fragment),$=L(),E(r.$$.fragment)},m(u,_){v(e,u,_),c(u,t,_),v(s,u,_),c(u,l,_),v(f,u,_),c(u,$,_),v(r,u,_),o=!0},p(u,[_]){const p={};_&1&&(p.$$scope={dirty:_,ctx:u}),e.$set(p);const a={};_&1&&(a.$$scope={dirty:_,ctx:u}),s.$set(a);const M={};_&1&&(M.$$scope={dirty:_,ctx:u}),f.$set(M);const T={};_&1&&(T.$$scope={dirty:_,ctx:u}),r.$set(T)},i(u){o||(d(e.$$.fragment,u),d(s.$$.fragment,u),d(f.$$.fragment,u),d(r.$$.fragment,u),o=!0)},o(u){w(e.$$.fragment,u),w(s.$$.fragment,u),w(f.$$.fragment,u),w(r.$$.fragment,u),o=!1},d(u){k(e,u),u&&i(t),k(s,u),u&&i(l),k(f,u),u&&i($),k(r,u)}}}class Yt extends I{constructor(e){super(),A(this,e,null,Xt,N,{})}}function Zt(n){let e,t,s;var l=n[0];function f($){return{}}return l&&(e=_e(l,f())),{c(){e&&E(e.$$.fragment),t=$e()},m($,r){e&&v(e,$,r),c($,t,r),s=!0},p($,r){if(r&1&&l!==(l=$[0])){if(e){Ce();const o=e;w(o.$$.fragment,1,0,()=>{k(o,1)}),Se()}l?(e=_e(l,f()),E(e.$$.fragment),d(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}},i($){s||(e&&d(e.$$.fragment,$),s=!0)},o($){e&&w(e.$$.fragment,$),s=!1},d($){$&&i(t),e&&k(e,$)}}}function ht(n){let e,t,s,l,f=n[1]+1+"",$,r,o=n[2].length+"",u,_;return t=new Ge({props:{$$slots:{default:[Zt]},$$scope:{ctx:n}}}),{c(){e=x("main"),E(t.$$.fragment),s=L(),l=x("div"),$=m(f),r=m("/"),u=m(o),j(l,"class","fixed bottom-0 left-0 p-4 text-white/60 w-screen text-center pointer-events-none"),j(e,"class","")},m(p,a){c(p,e,a),v(t,e,null),q(e,s),q(e,l),q(l,$),q(l,r),q(l,u),_=!0},p(p,[a]){const M={};a&17&&(M.$$scope={dirty:a,ctx:p}),t.$set(M),(!_||a&2)&&f!==(f=p[1]+1+"")&&ue($,f)},i(p){_||(d(t.$$.fragment,p),_=!0)},o(p){w(t.$$.fragment,p),_=!1},d(p){p&&i(e),k(t)}}}function ef(n,e,t){const s=[Ye,lt,ct,bt,Mt,Ot,qt,Vt,Yt];let l=s[0],f=0;function $(r,o,u=1){const _=r.indexOf(o);return t(1,f=_+u),f<0&&t(1,f=0),f>=r.length&&t(1,f=r.length-1),console.log(`NextIndex = ${f}`),r[f]}return oe(()=>{console.log("[Guide] Mounted!"),window.addEventListener("keydown",r=>{r.code==="ArrowRight"?t(0,l=$(s,l,1)):r.code==="ArrowLeft"&&t(0,l=$(s,l,-1))})}),[l,f,s]}class tf extends I{constructor(e){super(),A(this,e,ef,ht,N,{})}}new tf({target:document.getElementById("app")});