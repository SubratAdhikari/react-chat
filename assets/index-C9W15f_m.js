function JA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ZA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ar(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Q0={exports:{}},wc={},Y0={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),eC=Symbol.for("react.portal"),tC=Symbol.for("react.fragment"),nC=Symbol.for("react.strict_mode"),rC=Symbol.for("react.profiler"),iC=Symbol.for("react.provider"),sC=Symbol.for("react.context"),oC=Symbol.for("react.forward_ref"),aC=Symbol.for("react.suspense"),lC=Symbol.for("react.memo"),uC=Symbol.for("react.lazy"),$y=Symbol.iterator;function cC(t){return t===null||typeof t!="object"?null:(t=$y&&t[$y]||t["@@iterator"],typeof t=="function"?t:null)}var X0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J0=Object.assign,Z0={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=Z0,this.updater=n||X0}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ew(){}ew.prototype=Ks.prototype;function Ap(t,e,n){this.props=t,this.context=e,this.refs=Z0,this.updater=n||X0}var Cp=Ap.prototype=new ew;Cp.constructor=Ap;J0(Cp,Ks.prototype);Cp.isPureReactComponent=!0;var jy=Array.isArray,tw=Object.prototype.hasOwnProperty,Rp={current:null},nw={key:!0,ref:!0,__self:!0,__source:!0};function rw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tw.call(e,r)&&!nw.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Va,type:t,key:s,ref:o,props:i,_owner:Rp.current}}function hC(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function dC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zy=/\/+/g;function ld(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dC(""+t.key):e.toString(36)}function Jl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Va:case eC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ld(o,0):r,jy(i)?(n="",t!=null&&(n=t.replace(zy,"$&/")+"/"),Jl(i,e,n,"",function(c){return c})):i!=null&&(Pp(i)&&(i=hC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(zy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jy(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ld(s,l);o+=Jl(s,e,n,u,i)}else if(u=cC(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ld(s,l++),o+=Jl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pl(t,e,n){if(t==null)return t;var r=[],i=0;return Jl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},Zl={transition:null},pC={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:Zl,ReactCurrentOwner:Rp};function iw(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Pl,forEach:function(t,e,n){Pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pl(t,function(){e++}),e},toArray:function(t){return Pl(t,function(e){return e})||[]},only:function(t){if(!Pp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Ks;Z.Fragment=tC;Z.Profiler=rC;Z.PureComponent=Ap;Z.StrictMode=nC;Z.Suspense=aC;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pC;Z.act=iw;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=J0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)tw.call(e,u)&&!nw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Va,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:sC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iC,_context:t},t.Consumer=t};Z.createElement=rw;Z.createFactory=function(t){var e=rw.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:oC,render:t}};Z.isValidElement=Pp;Z.lazy=function(t){return{$$typeof:uC,_payload:{_status:-1,_result:t},_init:fC}};Z.memo=function(t,e){return{$$typeof:lC,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Zl.transition;Zl.transition={};try{t()}finally{Zl.transition=e}};Z.unstable_act=iw;Z.useCallback=function(t,e){return At.current.useCallback(t,e)};Z.useContext=function(t){return At.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return At.current.useDeferredValue(t)};Z.useEffect=function(t,e){return At.current.useEffect(t,e)};Z.useId=function(){return At.current.useId()};Z.useImperativeHandle=function(t,e,n){return At.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return At.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return At.current.useReducer(t,e,n)};Z.useRef=function(t){return At.current.useRef(t)};Z.useState=function(t){return At.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return At.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return At.current.useTransition()};Z.version="18.3.1";Y0.exports=Z;var L=Y0.exports;const sw=ZA(L),Su=JA({__proto__:null,default:sw},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mC=L,gC=Symbol.for("react.element"),yC=Symbol.for("react.fragment"),vC=Object.prototype.hasOwnProperty,_C=mC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wC={key:!0,ref:!0,__self:!0,__source:!0};function ow(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vC.call(e,r)&&!wC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gC,type:t,key:s,ref:o,props:i,_owner:_C.current}}wc.Fragment=yC;wc.jsx=ow;wc.jsxs=ow;Q0.exports=wc;var F=Q0.exports,ef={},aw={exports:{}},Wt={},lw={exports:{}},uw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Y){var J=z.length;z.push(Y);e:for(;0<J;){var Te=J-1>>>1,fe=z[Te];if(0<i(fe,Y))z[Te]=Y,z[J]=fe,J=Te;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Y=z[0],J=z.pop();if(J!==Y){z[0]=J;e:for(var Te=0,fe=z.length,be=fe>>>1;Te<be;){var Fn=2*(Te+1)-1,Un=z[Fn],$n=Fn+1,jn=z[$n];if(0>i(Un,J))$n<fe&&0>i(jn,Un)?(z[Te]=jn,z[$n]=J,Te=$n):(z[Te]=Un,z[Fn]=J,Te=Fn);else if($n<fe&&0>i(jn,J))z[Te]=jn,z[$n]=J,Te=$n;else break e}}return Y}function i(z,Y){var J=z.sortIndex-Y.sortIndex;return J!==0?J:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,E=!1,A=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=z)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function N(z){if(S=!1,I(z),!A)if(n(u)!==null)A=!0,ni(D);else{var Y=n(c);Y!==null&&Vn(N,Y.startTime-z)}}function D(z,Y){A=!1,S&&(S=!1,w(y),y=-1),E=!0;var J=m;try{for(I(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||z&&!k());){var Te=p.callback;if(typeof Te=="function"){p.callback=null,m=p.priorityLevel;var fe=Te(p.expirationTime<=Y);Y=t.unstable_now(),typeof fe=="function"?p.callback=fe:p===n(u)&&r(u),I(Y)}else r(u);p=n(u)}if(p!==null)var be=!0;else{var Fn=n(c);Fn!==null&&Vn(N,Fn.startTime-Y),be=!1}return be}finally{p=null,m=J,E=!1}}var M=!1,_=null,y=-1,T=5,C=-1;function k(){return!(t.unstable_now()-C<T)}function x(){if(_!==null){var z=t.unstable_now();C=z;var Y=!0;try{Y=_(!0,z)}finally{Y?R():(M=!1,_=null)}}else M=!1}var R;if(typeof v=="function")R=function(){v(x)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,Ln=Ye.port2;Ye.port1.onmessage=x,R=function(){Ln.postMessage(null)}}else R=function(){P(x,0)};function ni(z){_=z,M||(M=!0,R())}function Vn(z,Y){y=P(function(){z(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){A||E||(A=!0,ni(D))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var J=m;m=Y;try{return z()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=m;m=z;try{return Y()}finally{m=J}},t.unstable_scheduleCallback=function(z,Y,J){var Te=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Te+J:Te):J=Te,z){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=J+fe,z={id:d++,callback:Y,priorityLevel:z,startTime:J,expirationTime:fe,sortIndex:-1},J>Te?(z.sortIndex=J,e(c,z),n(u)===null&&z===n(c)&&(S?(w(y),y=-1):S=!0,Vn(N,J-Te))):(z.sortIndex=fe,e(u,z),A||E||(A=!0,ni(D))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var Y=m;return function(){var J=m;m=Y;try{return z.apply(this,arguments)}finally{m=J}}}})(uw);lw.exports=uw;var EC=lw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TC=L,Bt=EC;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cw=new Set,sa={};function Li(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(sa[t]=e,t=0;t<e.length;t++)cw.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=Object.prototype.hasOwnProperty,IC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,By={},Wy={};function SC(t){return tf.call(Wy,t)?!0:tf.call(By,t)?!1:IC.test(t)?Wy[t]=!0:(By[t]=!0,!1)}function AC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function CC(t,e,n,r){if(e===null||typeof e>"u"||AC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var kp=/[\-:]([a-z])/g;function xp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kp,xp);it[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kp,xp);it[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kp,xp);it[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function bp(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(CC(e,n,i,r)&&(n=null),r||i===null?SC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=TC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kl=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),Np=Symbol.for("react.strict_mode"),nf=Symbol.for("react.profiler"),hw=Symbol.for("react.provider"),dw=Symbol.for("react.context"),Op=Symbol.for("react.forward_ref"),rf=Symbol.for("react.suspense"),sf=Symbol.for("react.suspense_list"),Dp=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),fw=Symbol.for("react.offscreen"),qy=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=qy&&t[qy]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,ud;function Oo(t){if(ud===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ud=e&&e[1]||""}return`
`+ud+t}var cd=!1;function hd(t,e){if(!t||cd)return"";cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{cd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function RC(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=hd(t.type,!1),t;case 11:return t=hd(t.type.render,!1),t;case 1:return t=hd(t.type,!0),t;default:return""}}function of(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case nf:return"Profiler";case Np:return"StrictMode";case rf:return"Suspense";case sf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dw:return(t.displayName||"Context")+".Consumer";case hw:return(t._context.displayName||"Context")+".Provider";case Op:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dp:return e=t.displayName||null,e!==null?e:of(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return of(t(e))}catch{}}return null}function PC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return of(e);case 8:return e===Np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kC(t){var e=pw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xl(t){t._valueTracker||(t._valueTracker=kC(t))}function mw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Au(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function af(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gw(t,e){e=e.checked,e!=null&&bp(t,"checked",e,!1)}function lf(t,e){gw(t,e);var n=$r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&uf(t,e.type,$r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ky(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uf(t,e,n){(e!=="number"||Au(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Do=Array.isArray;function gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Do(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$r(n)}}function yw(t,e){var n=$r(e.value),r=$r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bl,_w=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bl=bl||document.createElement("div"),bl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xC=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(t){xC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zo[e]=zo[t]})});function ww(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zo.hasOwnProperty(t)&&zo[t]?(""+e).trim():e+"px"}function Ew(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ww(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var bC=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function df(t,e){if(e){if(bC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pf=null;function Mp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mf=null,ys=null,vs=null;function Yy(t){if(t=$a(t)){if(typeof mf!="function")throw Error($(280));var e=t.stateNode;e&&(e=Ac(e),mf(t.stateNode,t.type,e))}}function Tw(t){ys?vs?vs.push(t):vs=[t]:ys=t}function Iw(){if(ys){var t=ys,e=vs;if(vs=ys=null,Yy(t),e)for(t=0;t<e.length;t++)Yy(e[t])}}function Sw(t,e){return t(e)}function Aw(){}var dd=!1;function Cw(t,e,n){if(dd)return t(e,n);dd=!0;try{return Sw(t,e,n)}finally{dd=!1,(ys!==null||vs!==null)&&(Aw(),Iw())}}function aa(t,e){var n=t.stateNode;if(n===null)return null;var r=Ac(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var gf=!1;if(Zn)try{var To={};Object.defineProperty(To,"passive",{get:function(){gf=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{gf=!1}function NC(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Bo=!1,Cu=null,Ru=!1,yf=null,OC={onError:function(t){Bo=!0,Cu=t}};function DC(t,e,n,r,i,s,o,l,u){Bo=!1,Cu=null,NC.apply(OC,arguments)}function MC(t,e,n,r,i,s,o,l,u){if(DC.apply(this,arguments),Bo){if(Bo){var c=Cu;Bo=!1,Cu=null}else throw Error($(198));Ru||(Ru=!0,yf=c)}}function Vi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xy(t){if(Vi(t)!==t)throw Error($(188))}function LC(t){var e=t.alternate;if(!e){if(e=Vi(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xy(i),t;if(s===r)return Xy(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function Pw(t){return t=LC(t),t!==null?kw(t):null}function kw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kw(t);if(e!==null)return e;t=t.sibling}return null}var xw=Bt.unstable_scheduleCallback,Jy=Bt.unstable_cancelCallback,VC=Bt.unstable_shouldYield,FC=Bt.unstable_requestPaint,Ne=Bt.unstable_now,UC=Bt.unstable_getCurrentPriorityLevel,Lp=Bt.unstable_ImmediatePriority,bw=Bt.unstable_UserBlockingPriority,Pu=Bt.unstable_NormalPriority,$C=Bt.unstable_LowPriority,Nw=Bt.unstable_IdlePriority,Ec=null,An=null;function jC(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Ec,t,void 0,(t.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:WC,zC=Math.log,BC=Math.LN2;function WC(t){return t>>>=0,t===0?32:31-(zC(t)/BC|0)|0}var Nl=64,Ol=4194304;function Mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ku(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Mo(l):(s&=o,s!==0&&(r=Mo(s)))}else o=n&~i,o!==0?r=Mo(o):s!==0&&(r=Mo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gn(e),i=1<<n,r|=t[n],e&=~i;return r}function qC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=qC(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ow(){var t=Nl;return Nl<<=1,!(Nl&4194240)&&(Nl=64),t}function fd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gn(e),t[e]=n}function KC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-gn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function Dw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mw,Fp,Lw,Vw,Fw,_f=!1,Dl=[],kr=null,xr=null,br=null,la=new Map,ua=new Map,vr=[],GC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zy(t,e){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":la.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$a(e),e!==null&&Fp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QC(t,e,n,r,i){switch(e){case"focusin":return kr=Io(kr,t,e,n,r,i),!0;case"dragenter":return xr=Io(xr,t,e,n,r,i),!0;case"mouseover":return br=Io(br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return la.set(s,Io(la.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ua.set(s,Io(ua.get(s)||null,t,e,n,r,i)),!0}return!1}function Uw(t){var e=hi(t.target);if(e!==null){var n=Vi(e);if(n!==null){if(e=n.tag,e===13){if(e=Rw(n),e!==null){t.blockedOn=e,Fw(t.priority,function(){Lw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pf=r,n.target.dispatchEvent(r),pf=null}else return e=$a(n),e!==null&&Fp(e),t.blockedOn=n,!1;e.shift()}return!0}function ev(t,e,n){eu(t)&&n.delete(e)}function YC(){_f=!1,kr!==null&&eu(kr)&&(kr=null),xr!==null&&eu(xr)&&(xr=null),br!==null&&eu(br)&&(br=null),la.forEach(ev),ua.forEach(ev)}function So(t,e){t.blockedOn===e&&(t.blockedOn=null,_f||(_f=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,YC)))}function ca(t){function e(i){return So(i,t)}if(0<Dl.length){So(Dl[0],t);for(var n=1;n<Dl.length;n++){var r=Dl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kr!==null&&So(kr,t),xr!==null&&So(xr,t),br!==null&&So(br,t),la.forEach(e),ua.forEach(e),n=0;n<vr.length;n++)r=vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)Uw(n),n.blockedOn===null&&vr.shift()}var _s=lr.ReactCurrentBatchConfig,xu=!0;function XC(t,e,n,r){var i=ue,s=_s.transition;_s.transition=null;try{ue=1,Up(t,e,n,r)}finally{ue=i,_s.transition=s}}function JC(t,e,n,r){var i=ue,s=_s.transition;_s.transition=null;try{ue=4,Up(t,e,n,r)}finally{ue=i,_s.transition=s}}function Up(t,e,n,r){if(xu){var i=wf(t,e,n,r);if(i===null)Id(t,e,r,bu,n),Zy(t,r);else if(QC(i,t,e,n,r))r.stopPropagation();else if(Zy(t,r),e&4&&-1<GC.indexOf(t)){for(;i!==null;){var s=$a(i);if(s!==null&&Mw(s),s=wf(t,e,n,r),s===null&&Id(t,e,r,bu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Id(t,e,r,null,n)}}var bu=null;function wf(t,e,n,r){if(bu=null,t=Mp(r),t=hi(t),t!==null)if(e=Vi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bu=t,null}function $w(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UC()){case Lp:return 1;case bw:return 4;case Pu:case $C:return 16;case Nw:return 536870912;default:return 16}default:return 16}}var Ar=null,$p=null,tu=null;function jw(){if(tu)return tu;var t,e=$p,n=e.length,r,i="value"in Ar?Ar.value:Ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return tu=i.slice(t,1<r?1-r:void 0)}function nu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ml(){return!0}function tv(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ml:tv,this.isPropagationStopped=tv,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jp=qt(Gs),Ua=Ae({},Gs,{view:0,detail:0}),ZC=qt(Ua),pd,md,Ao,Tc=Ae({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(pd=t.screenX-Ao.screenX,md=t.screenY-Ao.screenY):md=pd=0,Ao=t),pd)},movementY:function(t){return"movementY"in t?t.movementY:md}}),nv=qt(Tc),eR=Ae({},Tc,{dataTransfer:0}),tR=qt(eR),nR=Ae({},Ua,{relatedTarget:0}),gd=qt(nR),rR=Ae({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),iR=qt(rR),sR=Ae({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oR=qt(sR),aR=Ae({},Gs,{data:0}),rv=qt(aR),lR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cR[t])?!!e[t]:!1}function zp(){return hR}var dR=Ae({},Ua,{key:function(t){if(t.key){var e=lR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zp,charCode:function(t){return t.type==="keypress"?nu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fR=qt(dR),pR=Ae({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iv=qt(pR),mR=Ae({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zp}),gR=qt(mR),yR=Ae({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),vR=qt(yR),_R=Ae({},Tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wR=qt(_R),ER=[9,13,27,32],Bp=Zn&&"CompositionEvent"in window,Wo=null;Zn&&"documentMode"in document&&(Wo=document.documentMode);var TR=Zn&&"TextEvent"in window&&!Wo,zw=Zn&&(!Bp||Wo&&8<Wo&&11>=Wo),sv=" ",ov=!1;function Bw(t,e){switch(t){case"keyup":return ER.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ww(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function IR(t,e){switch(t){case"compositionend":return Ww(e);case"keypress":return e.which!==32?null:(ov=!0,sv);case"textInput":return t=e.data,t===sv&&ov?null:t;default:return null}}function SR(t,e){if(rs)return t==="compositionend"||!Bp&&Bw(t,e)?(t=jw(),tu=$p=Ar=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zw&&e.locale!=="ko"?null:e.data;default:return null}}var AR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function av(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AR[t.type]:e==="textarea"}function qw(t,e,n,r){Tw(r),e=Nu(e,"onChange"),0<e.length&&(n=new jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qo=null,ha=null;function CR(t){nE(t,0)}function Ic(t){var e=os(t);if(mw(e))return t}function RR(t,e){if(t==="change")return e}var Hw=!1;if(Zn){var yd;if(Zn){var vd="oninput"in document;if(!vd){var lv=document.createElement("div");lv.setAttribute("oninput","return;"),vd=typeof lv.oninput=="function"}yd=vd}else yd=!1;Hw=yd&&(!document.documentMode||9<document.documentMode)}function uv(){qo&&(qo.detachEvent("onpropertychange",Kw),ha=qo=null)}function Kw(t){if(t.propertyName==="value"&&Ic(ha)){var e=[];qw(e,ha,t,Mp(t)),Cw(CR,e)}}function PR(t,e,n){t==="focusin"?(uv(),qo=e,ha=n,qo.attachEvent("onpropertychange",Kw)):t==="focusout"&&uv()}function kR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ic(ha)}function xR(t,e){if(t==="click")return Ic(e)}function bR(t,e){if(t==="input"||t==="change")return Ic(e)}function NR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vn=typeof Object.is=="function"?Object.is:NR;function da(t,e){if(vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tf.call(e,i)||!vn(t[i],e[i]))return!1}return!0}function cv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hv(t,e){var n=cv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cv(n)}}function Gw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qw(){for(var t=window,e=Au();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Au(t.document)}return e}function Wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OR(t){var e=Qw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gw(n.ownerDocument.documentElement,n)){if(r!==null&&Wp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hv(n,s);var o=hv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DR=Zn&&"documentMode"in document&&11>=document.documentMode,is=null,Ef=null,Ho=null,Tf=!1;function dv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tf||is==null||is!==Au(r)||(r=is,"selectionStart"in r&&Wp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ho&&da(Ho,r)||(Ho=r,r=Nu(Ef,"onSelect"),0<r.length&&(e=new jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=is)))}function Ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},_d={},Yw={};Zn&&(Yw=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Sc(t){if(_d[t])return _d[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yw)return _d[t]=e[n];return t}var Xw=Sc("animationend"),Jw=Sc("animationiteration"),Zw=Sc("animationstart"),eE=Sc("transitionend"),tE=new Map,fv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){tE.set(t,e),Li(e,[t])}for(var wd=0;wd<fv.length;wd++){var Ed=fv[wd],MR=Ed.toLowerCase(),LR=Ed[0].toUpperCase()+Ed.slice(1);Gr(MR,"on"+LR)}Gr(Xw,"onAnimationEnd");Gr(Jw,"onAnimationIteration");Gr(Zw,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(eE,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Li("onBeforeInput",["compositionend","keypress","textInput","paste"]);Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function pv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,MC(r,e,void 0,t),t.currentTarget=null}function nE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;pv(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;pv(i,l,c),s=u}}}if(Ru)throw t=yf,Ru=!1,yf=null,t}function ve(t,e){var n=e[Rf];n===void 0&&(n=e[Rf]=new Set);var r=t+"__bubble";n.has(r)||(rE(e,t,2,!1),n.add(r))}function Td(t,e,n){var r=0;e&&(r|=4),rE(n,t,r,e)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function fa(t){if(!t[Vl]){t[Vl]=!0,cw.forEach(function(n){n!=="selectionchange"&&(VR.has(n)||Td(n,!1,t),Td(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vl]||(e[Vl]=!0,Td("selectionchange",!1,e))}}function rE(t,e,n,r){switch($w(e)){case 1:var i=XC;break;case 4:i=JC;break;default:i=Up}n=i.bind(null,e,n,t),i=void 0,!gf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Id(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=hi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Cw(function(){var c=s,d=Mp(n),p=[];e:{var m=tE.get(t);if(m!==void 0){var E=jp,A=t;switch(t){case"keypress":if(nu(n)===0)break e;case"keydown":case"keyup":E=fR;break;case"focusin":A="focus",E=gd;break;case"focusout":A="blur",E=gd;break;case"beforeblur":case"afterblur":E=gd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=nv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=tR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=gR;break;case Xw:case Jw:case Zw:E=iR;break;case eE:E=vR;break;case"scroll":E=ZC;break;case"wheel":E=wR;break;case"copy":case"cut":case"paste":E=oR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=iv}var S=(e&4)!==0,P=!S&&t==="scroll",w=S?m!==null?m+"Capture":null:m;S=[];for(var v=c,I;v!==null;){I=v;var N=I.stateNode;if(I.tag===5&&N!==null&&(I=N,w!==null&&(N=aa(v,w),N!=null&&S.push(pa(v,N,I)))),P)break;v=v.return}0<S.length&&(m=new E(m,A,null,n,d),p.push({event:m,listeners:S}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==pf&&(A=n.relatedTarget||n.fromElement)&&(hi(A)||A[er]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(A=n.relatedTarget||n.toElement,E=c,A=A?hi(A):null,A!==null&&(P=Vi(A),A!==P||A.tag!==5&&A.tag!==6)&&(A=null)):(E=null,A=c),E!==A)){if(S=nv,N="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=iv,N="onPointerLeave",w="onPointerEnter",v="pointer"),P=E==null?m:os(E),I=A==null?m:os(A),m=new S(N,v+"leave",E,n,d),m.target=P,m.relatedTarget=I,N=null,hi(d)===c&&(S=new S(w,v+"enter",A,n,d),S.target=I,S.relatedTarget=P,N=S),P=N,E&&A)t:{for(S=E,w=A,v=0,I=S;I;I=Hi(I))v++;for(I=0,N=w;N;N=Hi(N))I++;for(;0<v-I;)S=Hi(S),v--;for(;0<I-v;)w=Hi(w),I--;for(;v--;){if(S===w||w!==null&&S===w.alternate)break t;S=Hi(S),w=Hi(w)}S=null}else S=null;E!==null&&mv(p,m,E,S,!1),A!==null&&P!==null&&mv(p,P,A,S,!0)}}e:{if(m=c?os(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var D=RR;else if(av(m))if(Hw)D=bR;else{D=kR;var M=PR}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(D=xR);if(D&&(D=D(t,c))){qw(p,D,n,d);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&uf(m,"number",m.value)}switch(M=c?os(c):window,t){case"focusin":(av(M)||M.contentEditable==="true")&&(is=M,Ef=c,Ho=null);break;case"focusout":Ho=Ef=is=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,dv(p,n,d);break;case"selectionchange":if(DR)break;case"keydown":case"keyup":dv(p,n,d)}var _;if(Bp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else rs?Bw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(zw&&n.locale!=="ko"&&(rs||y!=="onCompositionStart"?y==="onCompositionEnd"&&rs&&(_=jw()):(Ar=d,$p="value"in Ar?Ar.value:Ar.textContent,rs=!0)),M=Nu(c,y),0<M.length&&(y=new rv(y,t,null,n,d),p.push({event:y,listeners:M}),_?y.data=_:(_=Ww(n),_!==null&&(y.data=_)))),(_=TR?IR(t,n):SR(t,n))&&(c=Nu(c,"onBeforeInput"),0<c.length&&(d=new rv("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=_))}nE(p,e)})}function pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=aa(t,n),s!=null&&r.unshift(pa(t,s,i)),s=aa(t,e),s!=null&&r.push(pa(t,s,i))),t=t.return}return r}function Hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=aa(n,s),u!=null&&o.unshift(pa(n,u,l))):i||(u=aa(n,s),u!=null&&o.push(pa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FR=/\r\n?/g,UR=/\u0000|\uFFFD/g;function gv(t){return(typeof t=="string"?t:""+t).replace(FR,`
`).replace(UR,"")}function Fl(t,e,n){if(e=gv(e),gv(t)!==e&&n)throw Error($(425))}function Ou(){}var If=null,Sf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,$R=typeof clearTimeout=="function"?clearTimeout:void 0,yv=typeof Promise=="function"?Promise:void 0,jR=typeof queueMicrotask=="function"?queueMicrotask:typeof yv<"u"?function(t){return yv.resolve(null).then(t).catch(zR)}:Cf;function zR(t){setTimeout(function(){throw t})}function Sd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ca(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ca(e)}function Nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Qs,ma="__reactProps$"+Qs,er="__reactContainer$"+Qs,Rf="__reactEvents$"+Qs,BR="__reactListeners$"+Qs,WR="__reactHandles$"+Qs;function hi(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vv(t);t!==null;){if(n=t[Sn])return n;t=vv(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[Sn]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Ac(t){return t[ma]||null}var Pf=[],as=-1;function Qr(t){return{current:t}}function _e(t){0>as||(t.current=Pf[as],Pf[as]=null,as--)}function ge(t,e){as++,Pf[as]=t.current,t.current=e}var jr={},gt=Qr(jr),kt=Qr(!1),wi=jr;function xs(t,e){var n=t.type.contextTypes;if(!n)return jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function Du(){_e(kt),_e(gt)}function _v(t,e,n){if(gt.current!==jr)throw Error($(168));ge(gt,e),ge(kt,n)}function iE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,PC(t)||"Unknown",i));return Ae({},n,r)}function Mu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jr,wi=gt.current,ge(gt,t),ge(kt,kt.current),!0}function wv(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=iE(t,e,wi),r.__reactInternalMemoizedMergedChildContext=t,_e(kt),_e(gt),ge(gt,t)):_e(kt),ge(kt,n)}var qn=null,Cc=!1,Ad=!1;function sE(t){qn===null?qn=[t]:qn.push(t)}function qR(t){Cc=!0,sE(t)}function Yr(){if(!Ad&&qn!==null){Ad=!0;var t=0,e=ue;try{var n=qn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,Cc=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),xw(Lp,Yr),i}finally{ue=e,Ad=!1}}return null}var ls=[],us=0,Lu=null,Vu=0,Gt=[],Qt=0,Ei=null,Hn=1,Kn="";function ai(t,e){ls[us++]=Vu,ls[us++]=Lu,Lu=t,Vu=e}function oE(t,e,n){Gt[Qt++]=Hn,Gt[Qt++]=Kn,Gt[Qt++]=Ei,Ei=t;var r=Hn;t=Kn;var i=32-gn(r)-1;r&=~(1<<i),n+=1;var s=32-gn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-gn(e)+i|n<<i|r,Kn=s+t}else Hn=1<<s|n<<i|r,Kn=t}function qp(t){t.return!==null&&(ai(t,1),oE(t,1,0))}function Hp(t){for(;t===Lu;)Lu=ls[--us],ls[us]=null,Vu=ls[--us],ls[us]=null;for(;t===Ei;)Ei=Gt[--Qt],Gt[Qt]=null,Kn=Gt[--Qt],Gt[Qt]=null,Hn=Gt[--Qt],Gt[Qt]=null}var Ut=null,Vt=null,Ee=!1,fn=null;function aE(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ev(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Vt=Nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ei!==null?{id:Hn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Vt=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xf(t){if(Ee){var e=Vt;if(e){var n=e;if(!Ev(t,e)){if(kf(t))throw Error($(418));e=Nr(n.nextSibling);var r=Ut;e&&Ev(t,e)?aE(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Ut=t)}}else{if(kf(t))throw Error($(418));t.flags=t.flags&-4097|2,Ee=!1,Ut=t}}}function Tv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function Ul(t){if(t!==Ut)return!1;if(!Ee)return Tv(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=Vt)){if(kf(t))throw lE(),Error($(418));for(;e;)aE(t,e),e=Nr(e.nextSibling)}if(Tv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=Nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=Ut?Nr(t.stateNode.nextSibling):null;return!0}function lE(){for(var t=Vt;t;)t=Nr(t.nextSibling)}function bs(){Vt=Ut=null,Ee=!1}function Kp(t){fn===null?fn=[t]:fn.push(t)}var HR=lr.ReactCurrentBatchConfig;function Co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function $l(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Iv(t){var e=t._init;return e(t._payload)}function uE(t){function e(w,v){if(t){var I=w.deletions;I===null?(w.deletions=[v],w.flags|=16):I.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=Lr(w,v),w.index=0,w.sibling=null,w}function s(w,v,I){return w.index=I,t?(I=w.alternate,I!==null?(I=I.index,I<v?(w.flags|=2,v):I):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,I,N){return v===null||v.tag!==6?(v=Nd(I,w.mode,N),v.return=w,v):(v=i(v,I),v.return=w,v)}function u(w,v,I,N){var D=I.type;return D===ns?d(w,v,I.props.children,N,I.key):v!==null&&(v.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===gr&&Iv(D)===v.type)?(N=i(v,I.props),N.ref=Co(w,v,I),N.return=w,N):(N=uu(I.type,I.key,I.props,null,w.mode,N),N.ref=Co(w,v,I),N.return=w,N)}function c(w,v,I,N){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=Od(I,w.mode,N),v.return=w,v):(v=i(v,I.children||[]),v.return=w,v)}function d(w,v,I,N,D){return v===null||v.tag!==7?(v=yi(I,w.mode,N,D),v.return=w,v):(v=i(v,I),v.return=w,v)}function p(w,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Nd(""+v,w.mode,I),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case kl:return I=uu(v.type,v.key,v.props,null,w.mode,I),I.ref=Co(w,null,v),I.return=w,I;case ts:return v=Od(v,w.mode,I),v.return=w,v;case gr:var N=v._init;return p(w,N(v._payload),I)}if(Do(v)||Eo(v))return v=yi(v,w.mode,I,null),v.return=w,v;$l(w,v)}return null}function m(w,v,I,N){var D=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return D!==null?null:l(w,v,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case kl:return I.key===D?u(w,v,I,N):null;case ts:return I.key===D?c(w,v,I,N):null;case gr:return D=I._init,m(w,v,D(I._payload),N)}if(Do(I)||Eo(I))return D!==null?null:d(w,v,I,N,null);$l(w,I)}return null}function E(w,v,I,N,D){if(typeof N=="string"&&N!==""||typeof N=="number")return w=w.get(I)||null,l(v,w,""+N,D);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case kl:return w=w.get(N.key===null?I:N.key)||null,u(v,w,N,D);case ts:return w=w.get(N.key===null?I:N.key)||null,c(v,w,N,D);case gr:var M=N._init;return E(w,v,I,M(N._payload),D)}if(Do(N)||Eo(N))return w=w.get(I)||null,d(v,w,N,D,null);$l(v,N)}return null}function A(w,v,I,N){for(var D=null,M=null,_=v,y=v=0,T=null;_!==null&&y<I.length;y++){_.index>y?(T=_,_=null):T=_.sibling;var C=m(w,_,I[y],N);if(C===null){_===null&&(_=T);break}t&&_&&C.alternate===null&&e(w,_),v=s(C,v,y),M===null?D=C:M.sibling=C,M=C,_=T}if(y===I.length)return n(w,_),Ee&&ai(w,y),D;if(_===null){for(;y<I.length;y++)_=p(w,I[y],N),_!==null&&(v=s(_,v,y),M===null?D=_:M.sibling=_,M=_);return Ee&&ai(w,y),D}for(_=r(w,_);y<I.length;y++)T=E(_,w,y,I[y],N),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?y:T.key),v=s(T,v,y),M===null?D=T:M.sibling=T,M=T);return t&&_.forEach(function(k){return e(w,k)}),Ee&&ai(w,y),D}function S(w,v,I,N){var D=Eo(I);if(typeof D!="function")throw Error($(150));if(I=D.call(I),I==null)throw Error($(151));for(var M=D=null,_=v,y=v=0,T=null,C=I.next();_!==null&&!C.done;y++,C=I.next()){_.index>y?(T=_,_=null):T=_.sibling;var k=m(w,_,C.value,N);if(k===null){_===null&&(_=T);break}t&&_&&k.alternate===null&&e(w,_),v=s(k,v,y),M===null?D=k:M.sibling=k,M=k,_=T}if(C.done)return n(w,_),Ee&&ai(w,y),D;if(_===null){for(;!C.done;y++,C=I.next())C=p(w,C.value,N),C!==null&&(v=s(C,v,y),M===null?D=C:M.sibling=C,M=C);return Ee&&ai(w,y),D}for(_=r(w,_);!C.done;y++,C=I.next())C=E(_,w,y,C.value,N),C!==null&&(t&&C.alternate!==null&&_.delete(C.key===null?y:C.key),v=s(C,v,y),M===null?D=C:M.sibling=C,M=C);return t&&_.forEach(function(x){return e(w,x)}),Ee&&ai(w,y),D}function P(w,v,I,N){if(typeof I=="object"&&I!==null&&I.type===ns&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case kl:e:{for(var D=I.key,M=v;M!==null;){if(M.key===D){if(D=I.type,D===ns){if(M.tag===7){n(w,M.sibling),v=i(M,I.props.children),v.return=w,w=v;break e}}else if(M.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===gr&&Iv(D)===M.type){n(w,M.sibling),v=i(M,I.props),v.ref=Co(w,M,I),v.return=w,w=v;break e}n(w,M);break}else e(w,M);M=M.sibling}I.type===ns?(v=yi(I.props.children,w.mode,N,I.key),v.return=w,w=v):(N=uu(I.type,I.key,I.props,null,w.mode,N),N.ref=Co(w,v,I),N.return=w,w=N)}return o(w);case ts:e:{for(M=I.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(w,v.sibling),v=i(v,I.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Od(I,w.mode,N),v.return=w,w=v}return o(w);case gr:return M=I._init,P(w,v,M(I._payload),N)}if(Do(I))return A(w,v,I,N);if(Eo(I))return S(w,v,I,N);$l(w,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,I),v.return=w,w=v):(n(w,v),v=Nd(I,w.mode,N),v.return=w,w=v),o(w)):n(w,v)}return P}var Ns=uE(!0),cE=uE(!1),Fu=Qr(null),Uu=null,cs=null,Gp=null;function Qp(){Gp=cs=Uu=null}function Yp(t){var e=Fu.current;_e(Fu),t._currentValue=e}function bf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){Uu=t,Gp=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(Gp!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(Uu===null)throw Error($(308));cs=t,Uu.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var di=null;function Xp(t){di===null?di=[t]:di.push(t)}function hE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xp(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function Jp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,Xp(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function ru(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vp(t,n)}}function Sv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $u(t,e,n,r){var i=t.updateQueue;yr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,S=l;switch(m=e,E=n,S.tag){case 1:if(A=S.payload,typeof A=="function"){p=A.call(E,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=S.payload,m=typeof A=="function"?A.call(E,p,m):A,m==null)break e;p=Ae({},p,m);break e;case 2:yr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=p):d=d.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ii|=o,t.lanes=o,t.memoizedState=p}}function Av(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var ja={},Cn=Qr(ja),ga=Qr(ja),ya=Qr(ja);function fi(t){if(t===ja)throw Error($(174));return t}function Zp(t,e){switch(ge(ya,e),ge(ga,t),ge(Cn,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hf(e,t)}_e(Cn),ge(Cn,e)}function Os(){_e(Cn),_e(ga),_e(ya)}function fE(t){fi(ya.current);var e=fi(Cn.current),n=hf(e,t.type);e!==n&&(ge(ga,t),ge(Cn,n))}function em(t){ga.current===t&&(_e(Cn),_e(ga))}var Ie=Qr(0);function ju(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cd=[];function tm(){for(var t=0;t<Cd.length;t++)Cd[t]._workInProgressVersionPrimary=null;Cd.length=0}var iu=lr.ReactCurrentDispatcher,Rd=lr.ReactCurrentBatchConfig,Ti=0,Se=null,$e=null,He=null,zu=!1,Ko=!1,va=0,KR=0;function ut(){throw Error($(321))}function nm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vn(t[n],e[n]))return!1;return!0}function rm(t,e,n,r,i,s){if(Ti=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,iu.current=t===null||t.memoizedState===null?XR:JR,t=n(r,i),Ko){s=0;do{if(Ko=!1,va=0,25<=s)throw Error($(301));s+=1,He=$e=null,e.updateQueue=null,iu.current=ZR,t=n(r,i)}while(Ko)}if(iu.current=Bu,e=$e!==null&&$e.next!==null,Ti=0,He=$e=Se=null,zu=!1,e)throw Error($(300));return t}function im(){var t=va!==0;return va=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Se.memoizedState=He=t:He=He.next=t,He}function tn(){if($e===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=He===null?Se.memoizedState:He.next;if(e!==null)He=e,$e=t;else{if(t===null)throw Error($(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},He===null?Se.memoizedState=He=t:He=He.next=t}return He}function _a(t,e){return typeof e=="function"?e(t):e}function Pd(t){var e=tn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Ti&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Se.lanes|=d,Ii|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,vn(r,e.memoizedState)||(Pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,Ii|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kd(t){var e=tn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vn(s,e.memoizedState)||(Pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function pE(){}function mE(t,e){var n=Se,r=tn(),i=e(),s=!vn(r.memoizedState,i);if(s&&(r.memoizedState=i,Pt=!0),r=r.queue,sm(vE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,wa(9,yE.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error($(349));Ti&30||gE(n,e,i)}return i}function gE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yE(t,e,n,r){e.value=n,e.getSnapshot=r,_E(e)&&wE(t)}function vE(t,e,n){return n(function(){_E(e)&&wE(t)})}function _E(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vn(t,n)}catch{return!0}}function wE(t){var e=tr(t,1);e!==null&&yn(e,t,1,-1)}function Cv(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},e.queue=t,t=t.dispatch=YR.bind(null,Se,t),[e.memoizedState,t]}function wa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function EE(){return tn().memoizedState}function su(t,e,n,r){var i=En();Se.flags|=t,i.memoizedState=wa(1|e,n,void 0,r===void 0?null:r)}function Rc(t,e,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&nm(r,o.deps)){i.memoizedState=wa(e,n,s,r);return}}Se.flags|=t,i.memoizedState=wa(1|e,n,s,r)}function Rv(t,e){return su(8390656,8,t,e)}function sm(t,e){return Rc(2048,8,t,e)}function TE(t,e){return Rc(4,2,t,e)}function IE(t,e){return Rc(4,4,t,e)}function SE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function AE(t,e,n){return n=n!=null?n.concat([t]):null,Rc(4,4,SE.bind(null,e,t),n)}function om(){}function CE(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function RE(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function PE(t,e,n){return Ti&21?(vn(n,e)||(n=Ow(),Se.lanes|=n,Ii|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=n)}function GR(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Rd.transition;Rd.transition={};try{t(!1),e()}finally{ue=n,Rd.transition=r}}function kE(){return tn().memoizedState}function QR(t,e,n){var r=Mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xE(t))bE(e,n);else if(n=hE(t,e,n,r),n!==null){var i=It();yn(n,t,r,i),NE(n,e,r)}}function YR(t,e,n){var r=Mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xE(t))bE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,vn(l,o)){var u=e.interleaved;u===null?(i.next=i,Xp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=hE(t,e,i,r),n!==null&&(i=It(),yn(n,t,r,i),NE(n,e,r))}}function xE(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function bE(t,e){Ko=zu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function NE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vp(t,n)}}var Bu={readContext:en,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},XR={readContext:en,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:Rv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,su(4194308,4,SE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return su(4194308,4,t,e)},useInsertionEffect:function(t,e){return su(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QR.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:Cv,useDebugValue:om,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=Cv(!1),e=t[0];return t=GR.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=En();if(Ee){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),Ge===null)throw Error($(349));Ti&30||gE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rv(vE.bind(null,r,s,t),[t]),r.flags|=2048,wa(9,yE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=Ge.identifierPrefix;if(Ee){var n=Kn,r=Hn;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JR={readContext:en,useCallback:CE,useContext:en,useEffect:sm,useImperativeHandle:AE,useInsertionEffect:TE,useLayoutEffect:IE,useMemo:RE,useReducer:Pd,useRef:EE,useState:function(){return Pd(_a)},useDebugValue:om,useDeferredValue:function(t){var e=tn();return PE(e,$e.memoizedState,t)},useTransition:function(){var t=Pd(_a)[0],e=tn().memoizedState;return[t,e]},useMutableSource:pE,useSyncExternalStore:mE,useId:kE,unstable_isNewReconciler:!1},ZR={readContext:en,useCallback:CE,useContext:en,useEffect:sm,useImperativeHandle:AE,useInsertionEffect:TE,useLayoutEffect:IE,useMemo:RE,useReducer:kd,useRef:EE,useState:function(){return kd(_a)},useDebugValue:om,useDeferredValue:function(t){var e=tn();return $e===null?e.memoizedState=t:PE(e,$e.memoizedState,t)},useTransition:function(){var t=kd(_a)[0],e=tn().memoizedState;return[t,e]},useMutableSource:pE,useSyncExternalStore:mE,useId:kE,unstable_isNewReconciler:!1};function hn(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pc={isMounted:function(t){return(t=t._reactInternals)?Vi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=Mr(t),s=Xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,i),e!==null&&(yn(e,t,i,r),ru(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=Mr(t),s=Xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,i),e!==null&&(yn(e,t,i,r),ru(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Mr(t),i=Xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Or(t,i,r),e!==null&&(yn(e,t,r,n),ru(e,t,r))}};function Pv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!da(n,r)||!da(i,s):!0}function OE(t,e,n){var r=!1,i=jr,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=xt(e)?wi:gt.current,r=e.contextTypes,s=(r=r!=null)?xs(t,i):jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pc.enqueueReplaceState(e,e.state,null)}function Of(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Jp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=xt(e)?wi:gt.current,i.context=xs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Pc.enqueueReplaceState(i,i.state,null),$u(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e){try{var n="",r=e;do n+=RC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function xd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eP=typeof WeakMap=="function"?WeakMap:Map;function DE(t,e,n){n=Xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){qu||(qu=!0,Wf=r),Df(t,e)},n}function ME(t,e,n){n=Xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Df(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pP.bind(null,t,e,n),e.then(t,t))}function bv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xn(-1,1),e.tag=2,Or(n,e,1))),n.lanes|=1),t)}var tP=lr.ReactCurrentOwner,Pt=!1;function wt(t,e,n,r){e.child=t===null?cE(e,null,n,r):Ns(e,t.child,n,r)}function Ov(t,e,n,r,i){n=n.render;var s=e.ref;return ws(e,i),r=rm(t,e,n,r,s,i),n=im(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Ee&&n&&qp(e),e.flags|=1,wt(t,e,r,i),e.child)}function Dv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!pm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,LE(t,e,s,r,i)):(t=uu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:da,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=Lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function LE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(da(s,r)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,nr(t,e,i)}return Mf(t,e,n,r,i)}function VE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ds,Mt),Mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(ds,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(ds,Mt),Mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(ds,Mt),Mt|=r;return wt(t,e,i,n),e.child}function FE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mf(t,e,n,r,i){var s=xt(n)?wi:gt.current;return s=xs(e,s),ws(e,i),n=rm(t,e,n,r,s,i),r=im(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Ee&&r&&qp(e),e.flags|=1,wt(t,e,n,i),e.child)}function Mv(t,e,n,r,i){if(xt(n)){var s=!0;Mu(e)}else s=!1;if(ws(e,i),e.stateNode===null)ou(t,e),OE(e,n,r),Of(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=en(c):(c=xt(n)?wi:gt.current,c=xs(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&kv(e,o,r,c),yr=!1;var m=e.memoizedState;o.state=m,$u(e,r,o,i),u=e.memoizedState,l!==r||m!==u||kt.current||yr?(typeof d=="function"&&(Nf(e,n,d,r),u=e.memoizedState),(l=yr||Pv(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,dE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:hn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=en(u):(u=xt(n)?wi:gt.current,u=xs(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&kv(e,o,r,u),yr=!1,m=e.memoizedState,o.state=m,$u(e,r,o,i);var A=e.memoizedState;l!==p||m!==A||kt.current||yr?(typeof E=="function"&&(Nf(e,n,E,r),A=e.memoizedState),(c=yr||Pv(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Lf(t,e,n,r,s,i)}function Lf(t,e,n,r,i,s){FE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wv(e,n,!1),nr(t,e,s);r=e.stateNode,tP.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ns(e,t.child,null,s),e.child=Ns(e,null,l,s)):wt(t,e,l,s),e.memoizedState=r.state,i&&wv(e,n,!0),e.child}function UE(t){var e=t.stateNode;e.pendingContext?_v(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_v(t,e.context,!1),Zp(t,e.containerInfo)}function Lv(t,e,n,r,i){return bs(),Kp(i),e.flags|=256,wt(t,e,n,r),e.child}var Vf={dehydrated:null,treeContext:null,retryLane:0};function Ff(t){return{baseLanes:t,cachePool:null,transitions:null}}function $E(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ie,i&1),t===null)return xf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bc(o,r,0,null),t=yi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ff(n),e.memoizedState=Vf,t):am(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nP(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Lr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Lr(l,s):(s=yi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ff(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vf,r}return s=t.child,t=s.sibling,r=Lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function am(t,e){return e=bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jl(t,e,n,r){return r!==null&&Kp(r),Ns(e,t.child,null,n),t=am(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=xd(Error($(422))),jl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bc({mode:"visible",children:r.children},i,0,null),s=yi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ns(e,t.child,null,o),e.child.memoizedState=Ff(o),e.memoizedState=Vf,s);if(!(e.mode&1))return jl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error($(419)),r=xd(s,r,void 0),jl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Pt||l){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),yn(r,t,i,-1))}return fm(),r=xd(Error($(421))),jl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Vt=Nr(i.nextSibling),Ut=e,Ee=!0,fn=null,t!==null&&(Gt[Qt++]=Hn,Gt[Qt++]=Kn,Gt[Qt++]=Ei,Hn=t.id,Kn=t.overflow,Ei=e),e=am(e,r.children),e.flags|=4096,e)}function Vv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bf(t.return,e,n)}function bd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vv(t,n,e);else if(t.tag===19)Vv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ju(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ju(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bd(e,!0,n,null,s);break;case"together":bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ou(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ii|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rP(t,e,n){switch(e.tag){case 3:UE(e),bs();break;case 5:fE(e);break;case 1:xt(e.type)&&Mu(e);break;case 4:Zp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Fu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?$E(t,e,n):(ge(Ie,Ie.current&1),t=nr(t,e,n),t!==null?t.sibling:null);ge(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,VE(t,e,n)}return nr(t,e,n)}var zE,Uf,BE,WE;zE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uf=function(){};BE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fi(Cn.current);var s=null;switch(n){case"input":i=af(t,i),r=af(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=cf(t,i),r=cf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ou)}df(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};WE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ro(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iP(t,e,n){var r=e.pendingProps;switch(Hp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return xt(e.type)&&Du(),ct(e),null;case 3:return r=e.stateNode,Os(),_e(kt),_e(gt),tm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(Kf(fn),fn=null))),Uf(t,e),ct(e),null;case 5:em(e);var i=fi(ya.current);if(n=e.type,t!==null&&e.stateNode!=null)BE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return ct(e),null}if(t=fi(Cn.current),Ul(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sn]=e,r[ma]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Lo.length;i++)ve(Lo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Hy(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":Gy(r,s),ve("invalid",r)}df(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Fl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Fl(r.textContent,l,t),i=["children",""+l]):sa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":xl(r),Ky(r,s,!0);break;case"textarea":xl(r),Qy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ou)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[ma]=r,zE(t,e,!1,!1),e.stateNode=t;e:{switch(o=ff(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Lo.length;i++)ve(Lo[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":Hy(t,r),i=af(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Gy(t,r),i=cf(t,r),ve("invalid",t);break;default:i=r}df(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ew(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_w(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&oa(t,u):typeof u=="number"&&oa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&bp(t,s,u,o))}switch(n){case"input":xl(t),Ky(t,r,!1);break;case"textarea":xl(t),Qy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gs(t,!!r.multiple,s,!1):r.defaultValue!=null&&gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ou)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)WE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=fi(ya.current),fi(Cn.current),Ul(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:Fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return ct(e),null;case 13:if(_e(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Vt!==null&&e.mode&1&&!(e.flags&128))lE(),bs(),e.flags|=98560,s=!1;else if(s=Ul(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Sn]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),s=!1}else fn!==null&&(Kf(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?ze===0&&(ze=3):fm())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return Os(),Uf(t,e),t===null&&fa(e.stateNode.containerInfo),ct(e),null;case 10:return Yp(e.type._context),ct(e),null;case 17:return xt(e.type)&&Du(),ct(e),null;case 19:if(_e(Ie),s=e.memoizedState,s===null)return ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ro(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ju(t),o!==null){for(e.flags|=128,Ro(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Ms&&(e.flags|=128,r=!0,Ro(s,!1),e.lanes=4194304)}else{if(!r)if(t=ju(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return ct(e),null}else 2*Ne()-s.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,r=!0,Ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ie.current,ge(Ie,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return dm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function sP(t,e){switch(Hp(e),e.tag){case 1:return xt(e.type)&&Du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),_e(kt),_e(gt),tm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return em(e),null;case 13:if(_e(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ie),null;case 4:return Os(),null;case 10:return Yp(e.type._context),null;case 22:case 23:return dm(),null;case 24:return null;default:return null}}var zl=!1,pt=!1,oP=typeof WeakSet=="function"?WeakSet:Set,B=null;function hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function $f(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Fv=!1;function aP(t,e){if(If=xu,t=Qw(),Wp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)m=p,p=E;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(E=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:t,selectionRange:n},xu=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var S=A.memoizedProps,P=A.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?S:hn(e.type,S),P);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(N){xe(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return A=Fv,Fv=!1,A}function Go(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$f(e,n,s)}i=i.next}while(i!==r)}}function kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qE(t){var e=t.alternate;e!==null&&(t.alternate=null,qE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[ma],delete e[Rf],delete e[BR],delete e[WR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function HE(t){return t.tag===5||t.tag===3||t.tag===4}function Uv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||HE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ou));else if(r!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}var Je=null,dn=!1;function pr(t,e,n){for(n=n.child;n!==null;)KE(t,e,n),n=n.sibling}function KE(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Ec,n)}catch{}switch(n.tag){case 5:pt||hs(n,e);case 6:var r=Je,i=dn;Je=null,pr(t,e,n),Je=r,dn=i,Je!==null&&(dn?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(dn?(t=Je,n=n.stateNode,t.nodeType===8?Sd(t.parentNode,n):t.nodeType===1&&Sd(t,n),ca(t)):Sd(Je,n.stateNode));break;case 4:r=Je,i=dn,Je=n.stateNode.containerInfo,dn=!0,pr(t,e,n),Je=r,dn=i;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$f(n,e,o),i=i.next}while(i!==r)}pr(t,e,n);break;case 1:if(!pt&&(hs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}pr(t,e,n);break;case 21:pr(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,pr(t,e,n),pt=r):pr(t,e,n);break;default:pr(t,e,n)}}function $v(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oP),e.forEach(function(r){var i=gP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,dn=!1;break e;case 3:Je=l.stateNode.containerInfo,dn=!0;break e;case 4:Je=l.stateNode.containerInfo,dn=!0;break e}l=l.return}if(Je===null)throw Error($(160));KE(s,o,i),Je=null,dn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)GE(e,t),e=e.sibling}function GE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),wn(t),r&4){try{Go(3,t,t.return),kc(3,t)}catch(S){xe(t,t.return,S)}try{Go(5,t,t.return)}catch(S){xe(t,t.return,S)}}break;case 1:cn(e,t),wn(t),r&512&&n!==null&&hs(n,n.return);break;case 5:if(cn(e,t),wn(t),r&512&&n!==null&&hs(n,n.return),t.flags&32){var i=t.stateNode;try{oa(i,"")}catch(S){xe(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&gw(i,s),ff(l,o);var c=ff(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?Ew(i,p):d==="dangerouslySetInnerHTML"?_w(i,p):d==="children"?oa(i,p):bp(i,d,p,c)}switch(l){case"input":lf(i,s);break;case"textarea":yw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?gs(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?gs(i,!!s.multiple,s.defaultValue,!0):gs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ma]=s}catch(S){xe(t,t.return,S)}}break;case 6:if(cn(e,t),wn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){xe(t,t.return,S)}}break;case 3:if(cn(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(e.containerInfo)}catch(S){xe(t,t.return,S)}break;case 4:cn(e,t),wn(t);break;case 13:cn(e,t),wn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cm=Ne())),r&4&&$v(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(c=pt)||d,cn(e,t),pt=c):cn(e,t),wn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(B=t,d=t.child;d!==null;){for(p=B=d;B!==null;){switch(m=B,E=m.child,m.tag){case 0:case 11:case 14:case 15:Go(4,m,m.return);break;case 1:hs(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(S){xe(r,n,S)}}break;case 5:hs(m,m.return);break;case 22:if(m.memoizedState!==null){zv(p);continue}}E!==null?(E.return=m,B=E):zv(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ww("display",o))}catch(S){xe(t,t.return,S)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(S){xe(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:cn(e,t),wn(t),r&4&&$v(t);break;case 21:break;default:cn(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(HE(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oa(i,""),r.flags&=-33);var s=Uv(t);Bf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Uv(t);zf(t,l,o);break;default:throw Error($(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lP(t,e,n){B=t,QE(t)}function QE(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||zl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||pt;l=zl;var c=pt;if(zl=o,(pt=u)&&!c)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?Bv(i):u!==null?(u.return=o,B=u):Bv(i);for(;s!==null;)B=s,QE(s),s=s.sibling;B=i,zl=l,pt=c}jv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):jv(t)}}function jv(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pt||kc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:hn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Av(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Av(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ca(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}pt||e.flags&512&&jf(e)}catch(m){xe(e,e.return,m)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function zv(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Bv(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kc(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{jf(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{jf(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var uP=Math.ceil,Wu=lr.ReactCurrentDispatcher,lm=lr.ReactCurrentOwner,Jt=lr.ReactCurrentBatchConfig,re=0,Ge=null,Fe=null,nt=0,Mt=0,ds=Qr(0),ze=0,Ea=null,Ii=0,xc=0,um=0,Qo=null,Rt=null,cm=0,Ms=1/0,Wn=null,qu=!1,Wf=null,Dr=null,Bl=!1,Cr=null,Hu=0,Yo=0,qf=null,au=-1,lu=0;function It(){return re&6?Ne():au!==-1?au:au=Ne()}function Mr(t){return t.mode&1?re&2&&nt!==0?nt&-nt:HR.transition!==null?(lu===0&&(lu=Ow()),lu):(t=ue,t!==0||(t=window.event,t=t===void 0?16:$w(t.type)),t):1}function yn(t,e,n,r){if(50<Yo)throw Yo=0,qf=null,Error($(185));Fa(t,n,r),(!(re&2)||t!==Ge)&&(t===Ge&&(!(re&2)&&(xc|=n),ze===4&&_r(t,nt)),bt(t,r),n===1&&re===0&&!(e.mode&1)&&(Ms=Ne()+500,Cc&&Yr()))}function bt(t,e){var n=t.callbackNode;HC(t,e);var r=ku(t,t===Ge?nt:0);if(r===0)n!==null&&Jy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jy(n),e===1)t.tag===0?qR(Wv.bind(null,t)):sE(Wv.bind(null,t)),jR(function(){!(re&6)&&Yr()}),n=null;else{switch(Dw(r)){case 1:n=Lp;break;case 4:n=bw;break;case 16:n=Pu;break;case 536870912:n=Nw;break;default:n=Pu}n=r1(n,YE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function YE(t,e){if(au=-1,lu=0,re&6)throw Error($(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var r=ku(t,t===Ge?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ku(t,r);else{e=r;var i=re;re|=2;var s=JE();(Ge!==t||nt!==e)&&(Wn=null,Ms=Ne()+500,gi(t,e));do try{dP();break}catch(l){XE(t,l)}while(!0);Qp(),Wu.current=s,re=i,Fe!==null?e=0:(Ge=null,nt=0,e=ze)}if(e!==0){if(e===2&&(i=vf(t),i!==0&&(r=i,e=Hf(t,i))),e===1)throw n=Ea,gi(t,0),_r(t,r),bt(t,Ne()),n;if(e===6)_r(t,r);else{if(i=t.current.alternate,!(r&30)&&!cP(i)&&(e=Ku(t,r),e===2&&(s=vf(t),s!==0&&(r=s,e=Hf(t,s))),e===1))throw n=Ea,gi(t,0),_r(t,r),bt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:li(t,Rt,Wn);break;case 3:if(_r(t,r),(r&130023424)===r&&(e=cm+500-Ne(),10<e)){if(ku(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Cf(li.bind(null,t,Rt,Wn),e);break}li(t,Rt,Wn);break;case 4:if(_r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-gn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uP(r/1960))-r,10<r){t.timeoutHandle=Cf(li.bind(null,t,Rt,Wn),r);break}li(t,Rt,Wn);break;case 5:li(t,Rt,Wn);break;default:throw Error($(329))}}}return bt(t,Ne()),t.callbackNode===n?YE.bind(null,t):null}function Hf(t,e){var n=Qo;return t.current.memoizedState.isDehydrated&&(gi(t,e).flags|=256),t=Ku(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&Kf(e)),t}function Kf(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function cP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~um,e&=~xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gn(e),r=1<<n;t[n]=-1,e&=~r}}function Wv(t){if(re&6)throw Error($(327));Es();var e=ku(t,0);if(!(e&1))return bt(t,Ne()),null;var n=Ku(t,e);if(t.tag!==0&&n===2){var r=vf(t);r!==0&&(e=r,n=Hf(t,r))}if(n===1)throw n=Ea,gi(t,0),_r(t,e),bt(t,Ne()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,li(t,Rt,Wn),bt(t,Ne()),null}function hm(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Ms=Ne()+500,Cc&&Yr())}}function Si(t){Cr!==null&&Cr.tag===0&&!(re&6)&&Es();var e=re;re|=1;var n=Jt.transition,r=ue;try{if(Jt.transition=null,ue=1,t)return t()}finally{ue=r,Jt.transition=n,re=e,!(re&6)&&Yr()}}function dm(){Mt=ds.current,_e(ds)}function gi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$R(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(Hp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Du();break;case 3:Os(),_e(kt),_e(gt),tm();break;case 5:em(r);break;case 4:Os();break;case 13:_e(Ie);break;case 19:_e(Ie);break;case 10:Yp(r.type._context);break;case 22:case 23:dm()}n=n.return}if(Ge=t,Fe=t=Lr(t.current,null),nt=Mt=e,ze=0,Ea=null,um=xc=Ii=0,Rt=Qo=null,di!==null){for(e=0;e<di.length;e++)if(n=di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}di=null}return t}function XE(t,e){do{var n=Fe;try{if(Qp(),iu.current=Bu,zu){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zu=!1}if(Ti=0,He=$e=Se=null,Ko=!1,va=0,lm.current=null,n===null||n.return===null){ze=1,Ea=e,Fe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=nt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=bv(o);if(E!==null){E.flags&=-257,Nv(E,o,l,s,e),E.mode&1&&xv(s,c,e),e=E,u=c;var A=e.updateQueue;if(A===null){var S=new Set;S.add(u),e.updateQueue=S}else A.add(u);break e}else{if(!(e&1)){xv(s,c,e),fm();break e}u=Error($(426))}}else if(Ee&&l.mode&1){var P=bv(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Nv(P,o,l,s,e),Kp(Ds(u,l));break e}}s=u=Ds(u,l),ze!==4&&(ze=2),Qo===null?Qo=[s]:Qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=DE(s,u,e);Sv(s,w);break e;case 1:l=u;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Dr===null||!Dr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=ME(s,l,e);Sv(s,N);break e}}s=s.return}while(s!==null)}e1(n)}catch(D){e=D,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function JE(){var t=Wu.current;return Wu.current=Bu,t===null?Bu:t}function fm(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||!(Ii&268435455)&&!(xc&268435455)||_r(Ge,nt)}function Ku(t,e){var n=re;re|=2;var r=JE();(Ge!==t||nt!==e)&&(Wn=null,gi(t,e));do try{hP();break}catch(i){XE(t,i)}while(!0);if(Qp(),re=n,Wu.current=r,Fe!==null)throw Error($(261));return Ge=null,nt=0,ze}function hP(){for(;Fe!==null;)ZE(Fe)}function dP(){for(;Fe!==null&&!VC();)ZE(Fe)}function ZE(t){var e=n1(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?e1(t):Fe=e,lm.current=null}function e1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sP(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Fe=null;return}}else if(n=iP(n,e,Mt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);ze===0&&(ze=5)}function li(t,e,n){var r=ue,i=Jt.transition;try{Jt.transition=null,ue=1,fP(t,e,n,r)}finally{Jt.transition=i,ue=r}return null}function fP(t,e,n,r){do Es();while(Cr!==null);if(re&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(KC(t,s),t===Ge&&(Fe=Ge=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bl||(Bl=!0,r1(Pu,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jt.transition,Jt.transition=null;var o=ue;ue=1;var l=re;re|=4,lm.current=null,aP(t,n),GE(n,t),OR(Sf),xu=!!If,Sf=If=null,t.current=n,lP(n),FC(),re=l,ue=o,Jt.transition=s}else t.current=n;if(Bl&&(Bl=!1,Cr=t,Hu=i),s=t.pendingLanes,s===0&&(Dr=null),jC(n.stateNode),bt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qu)throw qu=!1,t=Wf,Wf=null,t;return Hu&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===qf?Yo++:(Yo=0,qf=t):Yo=0,Yr(),null}function Es(){if(Cr!==null){var t=Dw(Hu),e=Jt.transition,n=ue;try{if(Jt.transition=null,ue=16>t?16:t,Cr===null)var r=!1;else{if(t=Cr,Cr=null,Hu=0,re&6)throw Error($(331));var i=re;for(re|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(B=c;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:Go(8,d,s)}var p=d.child;if(p!==null)p.return=d,B=p;else for(;B!==null;){d=B;var m=d.sibling,E=d.return;if(qE(d),d===c){B=null;break}if(m!==null){m.return=E,B=m;break}B=E}}}var A=s.alternate;if(A!==null){var S=A.child;if(S!==null){A.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Go(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,B=w;break e}B=s.return}}var v=t.current;for(B=v;B!==null;){o=B;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,B=I;else e:for(o=v;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:kc(9,l)}}catch(D){xe(l,l.return,D)}if(l===o){B=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,B=N;break e}B=l.return}}if(re=i,Yr(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Ec,t)}catch{}r=!0}return r}finally{ue=n,Jt.transition=e}}return!1}function qv(t,e,n){e=Ds(n,e),e=DE(t,e,1),t=Or(t,e,1),e=It(),t!==null&&(Fa(t,1,e),bt(t,e))}function xe(t,e,n){if(t.tag===3)qv(t,t,n);else for(;e!==null;){if(e.tag===3){qv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=Ds(n,t),t=ME(e,t,1),e=Or(e,t,1),t=It(),e!==null&&(Fa(e,1,t),bt(e,t));break}}e=e.return}}function pP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(nt&n)===n&&(ze===4||ze===3&&(nt&130023424)===nt&&500>Ne()-cm?gi(t,0):um|=n),bt(t,e)}function t1(t,e){e===0&&(t.mode&1?(e=Ol,Ol<<=1,!(Ol&130023424)&&(Ol=4194304)):e=1);var n=It();t=tr(t,e),t!==null&&(Fa(t,e,n),bt(t,n))}function mP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),t1(t,n)}function gP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),t1(t,n)}var n1;n1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)Pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pt=!1,rP(t,e,n);Pt=!!(t.flags&131072)}else Pt=!1,Ee&&e.flags&1048576&&oE(e,Vu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ou(t,e),t=e.pendingProps;var i=xs(e,gt.current);ws(e,n),i=rm(null,e,r,t,i,n);var s=im();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,Mu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jp(e),i.updater=Pc,e.stateNode=i,i._reactInternals=e,Of(e,r,t,n),e=Lf(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&qp(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ou(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vP(r),t=hn(r,t),i){case 0:e=Mf(null,e,r,t,n);break e;case 1:e=Mv(null,e,r,t,n);break e;case 11:e=Ov(null,e,r,t,n);break e;case 14:e=Dv(null,e,r,hn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Mf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Mv(t,e,r,i,n);case 3:e:{if(UE(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,dE(t,e),$u(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ds(Error($(423)),e),e=Lv(t,e,r,n,i);break e}else if(r!==i){i=Ds(Error($(424)),e),e=Lv(t,e,r,n,i);break e}else for(Vt=Nr(e.stateNode.containerInfo.firstChild),Ut=e,Ee=!0,fn=null,n=cE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),r===i){e=nr(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return fE(e),t===null&&xf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Af(r,i)?o=null:s!==null&&Af(r,s)&&(e.flags|=32),FE(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&xf(e),null;case 13:return $E(t,e,n);case 4:return Zp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ns(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Ov(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Fu,r._currentValue),r._currentValue=o,s!==null)if(vn(s.value,o)){if(s.children===i.children&&!kt.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Xn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),bf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),bf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ws(e,n),i=en(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=hn(r,e.pendingProps),i=hn(r.type,i),Dv(t,e,r,i,n);case 15:return LE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),ou(t,e),e.tag=1,xt(r)?(t=!0,Mu(e)):t=!1,ws(e,n),OE(e,r,i),Of(e,r,i,n),Lf(null,e,r,!0,t,n);case 19:return jE(t,e,n);case 22:return VE(t,e,n)}throw Error($(156,e.tag))};function r1(t,e){return xw(t,e)}function yP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new yP(t,e,n,r)}function pm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vP(t){if(typeof t=="function")return pm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Op)return 11;if(t===Dp)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")pm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ns:return yi(n.children,i,s,e);case Np:o=8,i|=8;break;case nf:return t=Xt(12,n,e,i|2),t.elementType=nf,t.lanes=s,t;case rf:return t=Xt(13,n,e,i),t.elementType=rf,t.lanes=s,t;case sf:return t=Xt(19,n,e,i),t.elementType=sf,t.lanes=s,t;case fw:return bc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hw:o=10;break e;case dw:o=9;break e;case Op:o=11;break e;case Dp:o=14;break e;case gr:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function yi(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function bc(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=fw,t.lanes=n,t.stateNode={isHidden:!1},t}function Nd(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function Od(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _P(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fd(0),this.expirationTimes=fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mm(t,e,n,r,i,s,o,l,u){return t=new _P(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jp(s),t}function wP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function i1(t){if(!t)return jr;t=t._reactInternals;e:{if(Vi(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(xt(n))return iE(t,n,e)}return e}function s1(t,e,n,r,i,s,o,l,u){return t=mm(n,r,!0,t,i,s,o,l,u),t.context=i1(null),n=t.current,r=It(),i=Mr(n),s=Xn(r,i),s.callback=e??null,Or(n,s,i),t.current.lanes=i,Fa(t,i,r),bt(t,r),t}function Nc(t,e,n,r){var i=e.current,s=It(),o=Mr(i);return n=i1(n),e.context===null?e.context=n:e.pendingContext=n,e=Xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Or(i,e,o),t!==null&&(yn(t,i,o,s),ru(t,i,o)),o}function Gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gm(t,e){Hv(t,e),(t=t.alternate)&&Hv(t,e)}function EP(){return null}var o1=typeof reportError=="function"?reportError:function(t){console.error(t)};function ym(t){this._internalRoot=t}Oc.prototype.render=ym.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Nc(t,e,null,null)};Oc.prototype.unmount=ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Si(function(){Nc(null,t,null,null)}),e[er]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&Uw(t)}};function vm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kv(){}function TP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Gu(o);s.call(c)}}var o=s1(e,r,t,0,null,!1,!1,"",Kv);return t._reactRootContainer=o,t[er]=o.current,fa(t.nodeType===8?t.parentNode:t),Si(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Gu(u);l.call(c)}}var u=mm(t,0,!1,null,null,!1,!1,"",Kv);return t._reactRootContainer=u,t[er]=u.current,fa(t.nodeType===8?t.parentNode:t),Si(function(){Nc(e,u,n,r)}),u}function Mc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Gu(o);l.call(u)}}Nc(e,o,t,i)}else o=TP(n,e,t,i,r);return Gu(o)}Mw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mo(e.pendingLanes);n!==0&&(Vp(e,n|1),bt(e,Ne()),!(re&6)&&(Ms=Ne()+500,Yr()))}break;case 13:Si(function(){var r=tr(t,1);if(r!==null){var i=It();yn(r,t,1,i)}}),gm(t,1)}};Fp=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=It();yn(e,t,134217728,n)}gm(t,134217728)}};Lw=function(t){if(t.tag===13){var e=Mr(t),n=tr(t,e);if(n!==null){var r=It();yn(n,t,e,r)}gm(t,e)}};Vw=function(){return ue};Fw=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};mf=function(t,e,n){switch(e){case"input":if(lf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ac(r);if(!i)throw Error($(90));mw(r),lf(r,i)}}}break;case"textarea":yw(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};Sw=hm;Aw=Si;var IP={usingClientEntryPoint:!1,Events:[$a,os,Ac,Tw,Iw,hm]},Po={findFiberByHostInstance:hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SP={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pw(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||EP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Ec=Wl.inject(SP),An=Wl}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IP;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vm(e))throw Error($(200));return wP(t,e,null,n)};Wt.createRoot=function(t,e){if(!vm(t))throw Error($(299));var n=!1,r="",i=o1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=mm(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,fa(t.nodeType===8?t.parentNode:t),new ym(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=Pw(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return Si(t)};Wt.hydrate=function(t,e,n){if(!Dc(e))throw Error($(200));return Mc(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!vm(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=o1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=s1(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,fa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Oc(e)};Wt.render=function(t,e,n){if(!Dc(e))throw Error($(200));return Mc(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!Dc(t))throw Error($(40));return t._reactRootContainer?(Si(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Wt.unstable_batchedUpdates=hm;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Mc(t,e,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function a1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a1)}catch(t){console.error(t)}}a1(),aw.exports=Wt;var AP=aw.exports,Gv=AP;ef.createRoot=Gv.createRoot,ef.hydrateRoot=Gv.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ta.apply(this,arguments)}var Rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Rr||(Rr={}));const Qv="popstate";function CP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Gf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:u1(i)}return PP(e,n,null,t)}function Ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function l1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function RP(){return Math.random().toString(36).substr(2,8)}function Yv(t,e){return{usr:t.state,key:t.key,idx:e}}function Gf(t,e,n,r){return n===void 0&&(n=null),Ta({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ys(e):e,{state:n,key:e&&e.key||r||RP()})}function u1(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ys(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Rr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ta({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Rr.Pop;let P=d(),w=P==null?null:P-c;c=P,u&&u({action:l,location:S.location,delta:w})}function m(P,w){l=Rr.Push;let v=Gf(S.location,P,w);c=d()+1;let I=Yv(v,c),N=S.createHref(v);try{o.pushState(I,"",N)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(N)}s&&u&&u({action:l,location:S.location,delta:1})}function E(P,w){l=Rr.Replace;let v=Gf(S.location,P,w);c=d();let I=Yv(v,c),N=S.createHref(v);o.replaceState(I,"",N),s&&u&&u({action:l,location:S.location,delta:0})}function A(P){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof P=="string"?P:u1(P);return v=v.replace(/ $/,"%20"),Ue(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let S={get action(){return l},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Qv,p),u=P,()=>{i.removeEventListener(Qv,p),u=null}},createHref(P){return e(i,P)},createURL:A,encodeLocation(P){let w=A(P);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:E,go(P){return o.go(P)}};return S}var Xv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Xv||(Xv={}));function kP(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ys(e):e,i=d1(r.pathname||"/",n);if(i==null)return null;let s=c1(t);xP(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let u=zP(i);o=UP(s[l],u)}return o}function c1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ue(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=vi([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),c1(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:VP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of h1(s.path))i(s,o,u)}),e}function h1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=h1(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function xP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bP=/^:[\w-]+$/,NP=3,OP=2,DP=1,MP=10,LP=-2,Jv=t=>t==="*";function VP(t,e){let n=t.split("/"),r=n.length;return n.some(Jv)&&(r+=LP),e&&(r+=OP),n.filter(i=>!Jv(i)).reduce((i,s)=>i+(bP.test(s)?NP:s===""?DP:MP),r)}function FP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",d=$P({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c);if(!d)return null;Object.assign(r,d.params);let p=l.route;s.push({params:r,pathname:vi([i,d.pathname]),pathnameBase:HP(vi([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=vi([i,d.pathnameBase]))}return s}function $P(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=jP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let S=l[p]||"";o=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const A=l[p];return E&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function jP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),l1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function zP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return l1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function d1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function BP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ys(t):t;return{pathname:n?n.startsWith("/")?n:WP(n,e):e,search:KP(r),hash:GP(i)}}function WP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function f1(t,e){let n=qP(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function p1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ys(t):(i=Ta({},t),Ue(!i.pathname||!i.pathname.includes("?"),Dd("?","pathname","search",i)),Ue(!i.pathname||!i.pathname.includes("#"),Dd("#","pathname","hash",i)),Ue(!i.search||!i.search.includes("#"),Dd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=BP(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const vi=t=>t.join("/").replace(/\/\/+/g,"/"),HP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),KP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,GP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const m1=["post","put","patch","delete"];new Set(m1);const YP=["get",...m1];new Set(YP);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ia(){return Ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ia.apply(this,arguments)}const _m=L.createContext(null),XP=L.createContext(null),za=L.createContext(null),Lc=L.createContext(null),Fi=L.createContext({outlet:null,matches:[],isDataRoute:!1}),g1=L.createContext(null);function Ba(){return L.useContext(Lc)!=null}function Vc(){return Ba()||Ue(!1),L.useContext(Lc).location}function y1(t){L.useContext(za).static||L.useLayoutEffect(t)}function v1(){let{isDataRoute:t}=L.useContext(Fi);return t?ck():JP()}function JP(){Ba()||Ue(!1);let t=L.useContext(_m),{basename:e,future:n,navigator:r}=L.useContext(za),{matches:i}=L.useContext(Fi),{pathname:s}=Vc(),o=JSON.stringify(f1(i,n.v7_relativeSplatPath)),l=L.useRef(!1);return y1(()=>{l.current=!0}),L.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=p1(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:vi([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function ZP(t,e){return ek(t,e)}function ek(t,e,n,r){Ba()||Ue(!1);let{navigator:i}=L.useContext(za),{matches:s}=L.useContext(Fi),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Vc(),d;if(e){var p;let P=typeof e=="string"?Ys(e):e;u==="/"||(p=P.pathname)!=null&&p.startsWith(u)||Ue(!1),d=P}else d=c;let m=d.pathname||"/",E=m;if(u!=="/"){let P=u.replace(/^\//,"").split("/");E="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let A=kP(t,{pathname:E}),S=sk(A&&A.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:vi([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:vi([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&S?L.createElement(Lc.Provider,{value:{location:Ia({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Rr.Pop}},S):S}function tk(){let t=uk(),e=QP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}const nk=L.createElement(tk,null);class rk extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(Fi.Provider,{value:this.props.routeContext},L.createElement(g1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ik(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(_m);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Fi.Provider,{value:e},r)}function sk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ue(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:E}=n,A=p.route.loader&&m[p.route.id]===void 0&&(!E||E[p.route.id]===void 0);if(p.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let E,A=!1,S=null,P=null;n&&(E=l&&p.route.id?l[p.route.id]:void 0,S=p.route.errorElement||nk,u&&(c<0&&m===0?(A=!0,P=null):c===m&&(A=!0,P=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),v=()=>{let I;return E?I=S:A?I=P:p.route.Component?I=L.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=d,L.createElement(ik,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:I})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?L.createElement(rk,{location:n.location,revalidation:n.revalidation,component:S,error:E,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var _1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(_1||{}),Qu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Qu||{});function ok(t){let e=L.useContext(_m);return e||Ue(!1),e}function ak(t){let e=L.useContext(XP);return e||Ue(!1),e}function lk(t){let e=L.useContext(Fi);return e||Ue(!1),e}function w1(t){let e=lk(),n=e.matches[e.matches.length-1];return n.route.id||Ue(!1),n.route.id}function uk(){var t;let e=L.useContext(g1),n=ak(Qu.UseRouteError),r=w1(Qu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function ck(){let{router:t}=ok(_1.UseNavigateStable),e=w1(Qu.UseNavigateStable),n=L.useRef(!1);return y1(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ia({fromRouteId:e},s)))},[t,e])}function hk(t){let{to:e,replace:n,state:r,relative:i}=t;Ba()||Ue(!1);let{future:s,static:o}=L.useContext(za),{matches:l}=L.useContext(Fi),{pathname:u}=Vc(),c=v1(),d=p1(e,f1(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return L.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function ui(t){Ue(!1)}function dk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Rr.Pop,navigator:s,static:o=!1,future:l}=t;Ba()&&Ue(!1);let u=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:u,navigator:s,static:o,future:Ia({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ys(r));let{pathname:d="/",search:p="",hash:m="",state:E=null,key:A="default"}=r,S=L.useMemo(()=>{let P=d1(d,u);return P==null?null:{location:{pathname:P,search:p,hash:m,state:E,key:A},navigationType:i}},[u,d,p,m,E,A,i]);return S==null?null:L.createElement(za.Provider,{value:c},L.createElement(Lc.Provider,{children:n,value:S}))}function fk(t){let{children:e,location:n}=t;return ZP(Qf(e),n)}new Promise(()=>{});function Qf(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,Qf(r.props.children,s));return}r.type!==ui&&Ue(!1),!r.props.index||!r.props.children||Ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Qf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const pk="6";try{window.__reactRouterVersion=pk}catch{}const mk="startTransition",Zv=Su[mk];function gk(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=CP({window:i,v5Compat:!0}));let o=s.current,[l,u]=L.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=L.useCallback(p=>{c&&Zv?Zv(()=>u(p)):u(p)},[u,c]);return L.useLayoutEffect(()=>o.listen(d),[o,d]),L.createElement(dk,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var e_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(e_||(e_={}));var t_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(t_||(t_={}));var wm={},E1={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(E1);var Wa=E1.exports,Md={};function ce(){return ce=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ce.apply(null,arguments)}function wr(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function T1(t){if(!wr(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=T1(t[n])}),e}function Rn(t,e,n={clone:!0}){const r=n.clone?ce({},t):t;return wr(t)&&wr(e)&&Object.keys(e).forEach(i=>{wr(e[i])&&Object.prototype.hasOwnProperty.call(t,i)&&wr(t[i])?r[i]=Rn(t[i],e[i],n):n.clone?r[i]=wr(e[i])?T1(e[i]):e[i]:r[i]=e[i]}),r}const yk=Object.freeze(Object.defineProperty({__proto__:null,default:Rn,isPlainObject:wr},Symbol.toStringTag,{value:"Module"}));function Sa(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}const vk=Object.freeze(Object.defineProperty({__proto__:null,default:Sa},Symbol.toStringTag,{value:"Module"}));var I1={exports:{}},he={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em=Symbol.for("react.element"),Tm=Symbol.for("react.portal"),Fc=Symbol.for("react.fragment"),Uc=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),jc=Symbol.for("react.provider"),zc=Symbol.for("react.context"),_k=Symbol.for("react.server_context"),Bc=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),qc=Symbol.for("react.suspense_list"),Hc=Symbol.for("react.memo"),Kc=Symbol.for("react.lazy"),wk=Symbol.for("react.offscreen"),S1;S1=Symbol.for("react.module.reference");function on(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Em:switch(t=t.type,t){case Fc:case $c:case Uc:case Wc:case qc:return t;default:switch(t=t&&t.$$typeof,t){case _k:case zc:case Bc:case Kc:case Hc:case jc:return t;default:return e}}case Tm:return e}}}he.ContextConsumer=zc;he.ContextProvider=jc;he.Element=Em;he.ForwardRef=Bc;he.Fragment=Fc;he.Lazy=Kc;he.Memo=Hc;he.Portal=Tm;he.Profiler=$c;he.StrictMode=Uc;he.Suspense=Wc;he.SuspenseList=qc;he.isAsyncMode=function(){return!1};he.isConcurrentMode=function(){return!1};he.isContextConsumer=function(t){return on(t)===zc};he.isContextProvider=function(t){return on(t)===jc};he.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Em};he.isForwardRef=function(t){return on(t)===Bc};he.isFragment=function(t){return on(t)===Fc};he.isLazy=function(t){return on(t)===Kc};he.isMemo=function(t){return on(t)===Hc};he.isPortal=function(t){return on(t)===Tm};he.isProfiler=function(t){return on(t)===$c};he.isStrictMode=function(t){return on(t)===Uc};he.isSuspense=function(t){return on(t)===Wc};he.isSuspenseList=function(t){return on(t)===qc};he.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Fc||t===$c||t===Uc||t===Wc||t===qc||t===wk||typeof t=="object"&&t!==null&&(t.$$typeof===Kc||t.$$typeof===Hc||t.$$typeof===jc||t.$$typeof===zc||t.$$typeof===Bc||t.$$typeof===S1||t.getModuleId!==void 0)};he.typeOf=on;I1.exports=he;var n_=I1.exports;const Ek=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function A1(t){const e=`${t}`.match(Ek);return e&&e[1]||""}function C1(t,e=""){return t.displayName||t.name||A1(t)||e}function r_(t,e,n){const r=C1(e);return t.displayName||(r!==""?`${n}(${r})`:n)}function Tk(t){if(t!=null){if(typeof t=="string")return t;if(typeof t=="function")return C1(t,"Component");if(typeof t=="object")switch(t.$$typeof){case n_.ForwardRef:return r_(t,t.render,"ForwardRef");case n_.Memo:return r_(t,t.type,"memo");default:return}}}const Ik=Object.freeze(Object.defineProperty({__proto__:null,default:Tk,getFunctionName:A1},Symbol.toStringTag,{value:"Module"}));function zr(t){if(typeof t!="string")throw new Error(Sa(7));return t.charAt(0).toUpperCase()+t.slice(1)}const Sk=Object.freeze(Object.defineProperty({__proto__:null,default:zr},Symbol.toStringTag,{value:"Module"}));function Ak(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function Ck(t,e=166){let n;function r(...i){const s=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(s,e)}return r.clear=()=>{clearTimeout(n)},r}function Rk(t,e){return()=>null}function Pk(t,e){var n,r;return L.isValidElement(t)&&e.indexOf((n=t.type.muiName)!=null?n:(r=t.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function R1(t){return t&&t.ownerDocument||document}function kk(t){return R1(t).defaultView||window}function xk(t,e){return()=>null}function P1(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const k1=typeof window<"u"?L.useLayoutEffect:L.useEffect;let i_=0;function bk(t){const[e,n]=L.useState(t),r=t||e;return L.useEffect(()=>{e==null&&(i_+=1,n(`mui-${i_}`))},[e]),r}const s_=Su.useId;function Nk(t){if(s_!==void 0){const e=s_();return t??e}return bk(t)}function Ok(t,e,n,r,i){return null}function Dk({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=L.useRef(t!==void 0),[s,o]=L.useState(e),l=i?t:s,u=L.useCallback(c=>{i||o(c)},[]);return[l,u]}function Mk(t){const e=L.useRef(t);return k1(()=>{e.current=t}),L.useRef((...n)=>(0,e.current)(...n)).current}function Lk(...t){return L.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{P1(n,e)})},t)}class Im{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new Im}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}let Gc=!0,Yf=!1;const Vk=new Im,Fk={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Uk(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&Fk[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function $k(t){t.metaKey||t.altKey||t.ctrlKey||(Gc=!0)}function Ld(){Gc=!1}function jk(){this.visibilityState==="hidden"&&Yf&&(Gc=!0)}function zk(t){t.addEventListener("keydown",$k,!0),t.addEventListener("mousedown",Ld,!0),t.addEventListener("pointerdown",Ld,!0),t.addEventListener("touchstart",Ld,!0),t.addEventListener("visibilitychange",jk,!0)}function Bk(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return Gc||Uk(e)}function Wk(){const t=L.useCallback(i=>{i!=null&&zk(i.ownerDocument)},[]),e=L.useRef(!1);function n(){return e.current?(Yf=!0,Vk.start(100,()=>{Yf=!1}),e.current=!1,!0):!1}function r(i){return Bk(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}function x1(t,e){const n=ce({},e);return Object.keys(t).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=ce({},t[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=t[r]||{},s=e[r];n[r]={},!s||!Object.keys(s)?n[r]=i:!i||!Object.keys(i)?n[r]=s:(n[r]=ce({},s),Object.keys(i).forEach(o=>{n[r][o]=x1(i[o],s[o])}))}else n[r]===void 0&&(n[r]=t[r])}),n}function qk(t,e,n=void 0){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((s,o)=>{if(o){const l=e(o);l!==""&&s.push(l),n&&n[o]&&s.push(n[o])}return s},[]).join(" ")}),r}const o_=t=>t,Hk=()=>{let t=o_;return{configure(e){t=e},generate(e){return t(e)},reset(){t=o_}}},b1=Hk(),Kk={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function N1(t,e,n="Mui"){const r=Kk[e];return r?`${n}-${r}`:`${b1.generate(t)}-${e}`}function Gk(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=N1(t,i,n)}),r}function Qk(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}const Yk=Object.freeze(Object.defineProperty({__proto__:null,default:Qk},Symbol.toStringTag,{value:"Module"}));function Xr(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function O1(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=O1(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Xk(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=O1(t))&&(r&&(r+=" "),r+=e);return r}function Jk(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:x1(e.components[n].defaultProps,r)}const Zk=["values","unit","step"],ex=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>ce({},n,{[r.key]:r.val}),{})};function D1(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=Xr(t,Zk),s=ex(e),o=Object.keys(s);function l(m){return`@media (min-width:${typeof e[m]=="number"?e[m]:m}${n})`}function u(m){return`@media (max-width:${(typeof e[m]=="number"?e[m]:m)-r/100}${n})`}function c(m,E){const A=o.indexOf(E);return`@media (min-width:${typeof e[m]=="number"?e[m]:m}${n}) and (max-width:${(A!==-1&&typeof e[o[A]]=="number"?e[o[A]]:E)-r/100}${n})`}function d(m){return o.indexOf(m)+1<o.length?c(m,o[o.indexOf(m)+1]):l(m)}function p(m){const E=o.indexOf(m);return E===0?l(o[1]):E===o.length-1?u(o[E]):c(m,o[o.indexOf(m)+1]).replace("@media","@media not all and")}return ce({keys:o,values:s,up:l,down:u,between:c,only:d,not:p,unit:n},i)}const tx={borderRadius:4};function Xo(t,e){return e?Rn(t,e,{clone:!1}):t}const Sm={xs:0,sm:600,md:900,lg:1200,xl:1536},a_={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Sm[t]}px)`};function rr(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const s=r.breakpoints||a_;return e.reduce((o,l,u)=>(o[s.up(s.keys[u])]=n(e[u]),o),{})}if(typeof e=="object"){const s=r.breakpoints||a_;return Object.keys(e).reduce((o,l)=>{if(Object.keys(s.values||Sm).indexOf(l)!==-1){const u=s.up(l);o[u]=n(e[l],l)}else{const u=l;o[u]=e[u]}return o},{})}return n(e)}function nx(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const s=t.up(i);return r[s]={},r},{}))||{}}function rx(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function Qc(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function Yu(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=Qc(t,n)||r,e&&(i=e(i,r,t)),i}function Oe(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,s=o=>{if(o[e]==null)return null;const l=o[e],u=o.theme,c=Qc(u,r)||{};return rr(o,l,p=>{let m=Yu(c,i,p);return p===m&&typeof p=="string"&&(m=Yu(c,i,`${e}${p==="default"?"":zr(p)}`,p)),n===!1?m:{[n]:m}})};return s.propTypes={},s.filterProps=[e],s}function ix(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const sx={m:"margin",p:"padding"},ox={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},l_={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},ax=ix(t=>{if(t.length>2)if(l_[t])t=l_[t];else return[t];const[e,n]=t.split(""),r=sx[e],i=ox[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),Am=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Cm=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Am,...Cm];function qa(t,e,n,r){var i;const s=(i=Qc(t,e,!1))!=null?i:n;return typeof s=="number"?o=>typeof o=="string"?o:s*o:Array.isArray(s)?o=>typeof o=="string"?o:s[o]:typeof s=="function"?s:()=>{}}function M1(t){return qa(t,"spacing",8)}function Ha(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function lx(t,e){return n=>t.reduce((r,i)=>(r[i]=Ha(e,n),r),{})}function ux(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=ax(n),s=lx(i,r),o=t[n];return rr(t,o,s)}function L1(t,e){const n=M1(t.theme);return Object.keys(t).map(r=>ux(t,e,r,n)).reduce(Xo,{})}function Pe(t){return L1(t,Am)}Pe.propTypes={};Pe.filterProps=Am;function ke(t){return L1(t,Cm)}ke.propTypes={};ke.filterProps=Cm;function cx(t=8){if(t.mui)return t;const e=M1({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}function Yc(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>e[s]?Xo(i,e[s](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function Yt(t){return typeof t!="number"?t:`${t}px solid`}function an(t,e){return Oe({prop:t,themeKey:"borders",transform:e})}const hx=an("border",Yt),dx=an("borderTop",Yt),fx=an("borderRight",Yt),px=an("borderBottom",Yt),mx=an("borderLeft",Yt),gx=an("borderColor"),yx=an("borderTopColor"),vx=an("borderRightColor"),_x=an("borderBottomColor"),wx=an("borderLeftColor"),Ex=an("outline",Yt),Tx=an("outlineColor"),Xc=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=qa(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Ha(e,r)});return rr(t,t.borderRadius,n)}return null};Xc.propTypes={};Xc.filterProps=["borderRadius"];Yc(hx,dx,fx,px,mx,gx,yx,vx,_x,wx,Xc,Ex,Tx);const Jc=t=>{if(t.gap!==void 0&&t.gap!==null){const e=qa(t.theme,"spacing",8),n=r=>({gap:Ha(e,r)});return rr(t,t.gap,n)}return null};Jc.propTypes={};Jc.filterProps=["gap"];const Zc=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=qa(t.theme,"spacing",8),n=r=>({columnGap:Ha(e,r)});return rr(t,t.columnGap,n)}return null};Zc.propTypes={};Zc.filterProps=["columnGap"];const eh=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=qa(t.theme,"spacing",8),n=r=>({rowGap:Ha(e,r)});return rr(t,t.rowGap,n)}return null};eh.propTypes={};eh.filterProps=["rowGap"];const Ix=Oe({prop:"gridColumn"}),Sx=Oe({prop:"gridRow"}),Ax=Oe({prop:"gridAutoFlow"}),Cx=Oe({prop:"gridAutoColumns"}),Rx=Oe({prop:"gridAutoRows"}),Px=Oe({prop:"gridTemplateColumns"}),kx=Oe({prop:"gridTemplateRows"}),xx=Oe({prop:"gridTemplateAreas"}),bx=Oe({prop:"gridArea"});Yc(Jc,Zc,eh,Ix,Sx,Ax,Cx,Rx,Px,kx,xx,bx);function Ts(t,e){return e==="grey"?e:t}const Nx=Oe({prop:"color",themeKey:"palette",transform:Ts}),Ox=Oe({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Ts}),Dx=Oe({prop:"backgroundColor",themeKey:"palette",transform:Ts});Yc(Nx,Ox,Dx);function Lt(t){return t<=1&&t!==0?`${t*100}%`:t}const Mx=Oe({prop:"width",transform:Lt}),Rm=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i;const s=((r=t.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Sm[n];return s?((i=t.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${s}${t.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:Lt(n)}};return rr(t,t.maxWidth,e)}return null};Rm.filterProps=["maxWidth"];const Lx=Oe({prop:"minWidth",transform:Lt}),Vx=Oe({prop:"height",transform:Lt}),Fx=Oe({prop:"maxHeight",transform:Lt}),Ux=Oe({prop:"minHeight",transform:Lt});Oe({prop:"size",cssProperty:"width",transform:Lt});Oe({prop:"size",cssProperty:"height",transform:Lt});const $x=Oe({prop:"boxSizing"});Yc(Mx,Rm,Lx,Vx,Fx,Ux,$x);const Ka={border:{themeKey:"borders",transform:Yt},borderTop:{themeKey:"borders",transform:Yt},borderRight:{themeKey:"borders",transform:Yt},borderBottom:{themeKey:"borders",transform:Yt},borderLeft:{themeKey:"borders",transform:Yt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Yt},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Xc},color:{themeKey:"palette",transform:Ts},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Ts},backgroundColor:{themeKey:"palette",transform:Ts},p:{style:ke},pt:{style:ke},pr:{style:ke},pb:{style:ke},pl:{style:ke},px:{style:ke},py:{style:ke},padding:{style:ke},paddingTop:{style:ke},paddingRight:{style:ke},paddingBottom:{style:ke},paddingLeft:{style:ke},paddingX:{style:ke},paddingY:{style:ke},paddingInline:{style:ke},paddingInlineStart:{style:ke},paddingInlineEnd:{style:ke},paddingBlock:{style:ke},paddingBlockStart:{style:ke},paddingBlockEnd:{style:ke},m:{style:Pe},mt:{style:Pe},mr:{style:Pe},mb:{style:Pe},ml:{style:Pe},mx:{style:Pe},my:{style:Pe},margin:{style:Pe},marginTop:{style:Pe},marginRight:{style:Pe},marginBottom:{style:Pe},marginLeft:{style:Pe},marginX:{style:Pe},marginY:{style:Pe},marginInline:{style:Pe},marginInlineStart:{style:Pe},marginInlineEnd:{style:Pe},marginBlock:{style:Pe},marginBlockStart:{style:Pe},marginBlockEnd:{style:Pe},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Jc},rowGap:{style:eh},columnGap:{style:Zc},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Lt},maxWidth:{style:Rm},minWidth:{transform:Lt},height:{transform:Lt},maxHeight:{transform:Lt},minHeight:{transform:Lt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function jx(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function zx(t,e){return typeof t=="function"?t(e):t}function V1(){function t(n,r,i,s){const o={[n]:r,theme:i},l=s[n];if(!l)return{[n]:r};const{cssProperty:u=n,themeKey:c,transform:d,style:p}=l;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const m=Qc(i,c)||{};return p?p(o):rr(o,r,A=>{let S=Yu(m,d,A);return A===S&&typeof A=="string"&&(S=Yu(m,d,`${n}${A==="default"?"":zr(A)}`,A)),u===!1?S:{[u]:S}})}function e(n){var r;const{sx:i,theme:s={}}=n||{};if(!i)return null;const o=(r=s.unstable_sxConfig)!=null?r:Ka;function l(u){let c=u;if(typeof u=="function")c=u(s);else if(typeof u!="object")return u;if(!c)return null;const d=nx(s.breakpoints),p=Object.keys(d);let m=d;return Object.keys(c).forEach(E=>{const A=zx(c[E],s);if(A!=null)if(typeof A=="object")if(o[E])m=Xo(m,t(E,A,s,o));else{const S=rr({theme:s},A,P=>({[E]:P}));jx(S,A)?m[E]=e({sx:A,theme:s}):m=Xo(m,S)}else m=Xo(m,t(E,A,s,o))}),rx(p,m)}return Array.isArray(i)?i.map(l):l(i)}return e}const th=V1();th.filterProps=["sx"];function F1(t,e){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(t).replace(/(\[[^\]]+\])/,"*:where($1)")]:e}:n.palette.mode===t?e:{}}const Bx=["breakpoints","palette","spacing","shape"];function Pm(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:s={}}=t,o=Xr(t,Bx),l=D1(n),u=cx(i);let c=Rn({breakpoints:l,direction:"ltr",components:{},palette:ce({mode:"light"},r),spacing:u,shape:ce({},tx,s)},o);return c.applyStyles=F1,c=e.reduce((d,p)=>Rn(d,p),c),c.unstable_sxConfig=ce({},Ka,o==null?void 0:o.unstable_sxConfig),c.unstable_sx=function(p){return th({sx:p,theme:this})},c}const Wx=Object.freeze(Object.defineProperty({__proto__:null,default:Pm,private_createBreakpoints:D1,unstable_applyStyles:F1},Symbol.toStringTag,{value:"Module"}));function U1(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var qx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Hx=U1(function(t){return qx.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Kx(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Gx(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Qx=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Gx(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Kx(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),dt="-ms-",Xu="-moz-",se="-webkit-",$1="comm",km="rule",xm="decl",Yx="@import",j1="@keyframes",Xx="@layer",Jx=Math.abs,nh=String.fromCharCode,Zx=Object.assign;function eb(t,e){return et(t,0)^45?(((e<<2^et(t,0))<<2^et(t,1))<<2^et(t,2))<<2^et(t,3):0}function z1(t){return t.trim()}function tb(t,e){return(t=e.exec(t))?t[0]:t}function oe(t,e,n){return t.replace(e,n)}function Xf(t,e){return t.indexOf(e)}function et(t,e){return t.charCodeAt(e)|0}function Aa(t,e,n){return t.slice(e,n)}function Tn(t){return t.length}function bm(t){return t.length}function ql(t,e){return e.push(t),t}function nb(t,e){return t.map(e).join("")}var rh=1,Ls=1,B1=0,Ot=0,Ve=0,Xs="";function ih(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:rh,column:Ls,length:o,return:""}}function ko(t,e){return Zx(ih("",null,null,"",null,null,0),t,{length:-t.length},e)}function rb(){return Ve}function ib(){return Ve=Ot>0?et(Xs,--Ot):0,Ls--,Ve===10&&(Ls=1,rh--),Ve}function $t(){return Ve=Ot<B1?et(Xs,Ot++):0,Ls++,Ve===10&&(Ls=1,rh++),Ve}function Pn(){return et(Xs,Ot)}function cu(){return Ot}function Ga(t,e){return Aa(Xs,t,e)}function Ca(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W1(t){return rh=Ls=1,B1=Tn(Xs=t),Ot=0,[]}function q1(t){return Xs="",t}function hu(t){return z1(Ga(Ot-1,Jf(t===91?t+2:t===40?t+1:t)))}function sb(t){for(;(Ve=Pn())&&Ve<33;)$t();return Ca(t)>2||Ca(Ve)>3?"":" "}function ob(t,e){for(;--e&&$t()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return Ga(t,cu()+(e<6&&Pn()==32&&$t()==32))}function Jf(t){for(;$t();)switch(Ve){case t:return Ot;case 34:case 39:t!==34&&t!==39&&Jf(Ve);break;case 40:t===41&&Jf(t);break;case 92:$t();break}return Ot}function ab(t,e){for(;$t()&&t+Ve!==57;)if(t+Ve===84&&Pn()===47)break;return"/*"+Ga(e,Ot-1)+"*"+nh(t===47?t:$t())}function lb(t){for(;!Ca(Pn());)$t();return Ga(t,Ot)}function ub(t){return q1(du("",null,null,null,[""],t=W1(t),0,[0],t))}function du(t,e,n,r,i,s,o,l,u){for(var c=0,d=0,p=o,m=0,E=0,A=0,S=1,P=1,w=1,v=0,I="",N=i,D=s,M=r,_=I;P;)switch(A=v,v=$t()){case 40:if(A!=108&&et(_,p-1)==58){Xf(_+=oe(hu(v),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:_+=hu(v);break;case 9:case 10:case 13:case 32:_+=sb(A);break;case 92:_+=ob(cu()-1,7);continue;case 47:switch(Pn()){case 42:case 47:ql(cb(ab($t(),cu()),e,n),u);break;default:_+="/"}break;case 123*S:l[c++]=Tn(_)*w;case 125*S:case 59:case 0:switch(v){case 0:case 125:P=0;case 59+d:w==-1&&(_=oe(_,/\f/g,"")),E>0&&Tn(_)-p&&ql(E>32?c_(_+";",r,n,p-1):c_(oe(_," ","")+";",r,n,p-2),u);break;case 59:_+=";";default:if(ql(M=u_(_,e,n,c,d,i,l,I,N=[],D=[],p),s),v===123)if(d===0)du(_,e,M,M,N,s,p,l,D);else switch(m===99&&et(_,3)===110?100:m){case 100:case 108:case 109:case 115:du(t,M,M,r&&ql(u_(t,M,M,0,0,i,l,I,i,N=[],p),D),i,D,p,l,r?N:D);break;default:du(_,M,M,M,[""],D,0,l,D)}}c=d=E=0,S=w=1,I=_="",p=o;break;case 58:p=1+Tn(_),E=A;default:if(S<1){if(v==123)--S;else if(v==125&&S++==0&&ib()==125)continue}switch(_+=nh(v),v*S){case 38:w=d>0?1:(_+="\f",-1);break;case 44:l[c++]=(Tn(_)-1)*w,w=1;break;case 64:Pn()===45&&(_+=hu($t())),m=Pn(),d=p=Tn(I=_+=lb(cu())),v++;break;case 45:A===45&&Tn(_)==2&&(S=0)}}return s}function u_(t,e,n,r,i,s,o,l,u,c,d){for(var p=i-1,m=i===0?s:[""],E=bm(m),A=0,S=0,P=0;A<r;++A)for(var w=0,v=Aa(t,p+1,p=Jx(S=o[A])),I=t;w<E;++w)(I=z1(S>0?m[w]+" "+v:oe(v,/&\f/g,m[w])))&&(u[P++]=I);return ih(t,e,n,i===0?km:l,u,c,d)}function cb(t,e,n){return ih(t,e,n,$1,nh(rb()),Aa(t,2,-2),0)}function c_(t,e,n,r){return ih(t,e,n,xm,Aa(t,0,r),Aa(t,r+1,-1),r)}function Is(t,e){for(var n="",r=bm(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function hb(t,e,n,r){switch(t.type){case Xx:if(t.children.length)break;case Yx:case xm:return t.return=t.return||t.value;case $1:return"";case j1:return t.return=t.value+"{"+Is(t.children,r)+"}";case km:t.value=t.props.join(",")}return Tn(n=Is(t.children,r))?t.return=t.value+"{"+n+"}":""}function db(t){var e=bm(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function fb(t){return function(e){e.root||(e=e.return)&&t(e)}}var pb=function(e,n,r){for(var i=0,s=0;i=s,s=Pn(),i===38&&s===12&&(n[r]=1),!Ca(s);)$t();return Ga(e,Ot)},mb=function(e,n){var r=-1,i=44;do switch(Ca(i)){case 0:i===38&&Pn()===12&&(n[r]=1),e[r]+=pb(Ot-1,n,r);break;case 2:e[r]+=hu(i);break;case 4:if(i===44){e[++r]=Pn()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=nh(i)}while(i=$t());return e},gb=function(e,n){return q1(mb(W1(e),n))},h_=new WeakMap,yb=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!h_.get(r))&&!i){h_.set(e,!0);for(var s=[],o=gb(n,s),l=r.props,u=0,c=0;u<o.length;u++)for(var d=0;d<l.length;d++,c++)e.props[c]=s[u]?o[u].replace(/&\f/g,l[d]):l[d]+" "+o[u]}}},vb=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function H1(t,e){switch(eb(t,e)){case 5103:return se+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return se+t+Xu+t+dt+t+t;case 6828:case 4268:return se+t+dt+t+t;case 6165:return se+t+dt+"flex-"+t+t;case 5187:return se+t+oe(t,/(\w+).+(:[^]+)/,se+"box-$1$2"+dt+"flex-$1$2")+t;case 5443:return se+t+dt+"flex-item-"+oe(t,/flex-|-self/,"")+t;case 4675:return se+t+dt+"flex-line-pack"+oe(t,/align-content|flex-|-self/,"")+t;case 5548:return se+t+dt+oe(t,"shrink","negative")+t;case 5292:return se+t+dt+oe(t,"basis","preferred-size")+t;case 6060:return se+"box-"+oe(t,"-grow","")+se+t+dt+oe(t,"grow","positive")+t;case 4554:return se+oe(t,/([^-])(transform)/g,"$1"+se+"$2")+t;case 6187:return oe(oe(oe(t,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),t,"")+t;case 5495:case 3959:return oe(t,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return oe(oe(t,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+dt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+t+t;case 4095:case 3583:case 4068:case 2532:return oe(t,/(.+)-inline(.+)/,se+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tn(t)-1-e>6)switch(et(t,e+1)){case 109:if(et(t,e+4)!==45)break;case 102:return oe(t,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+Xu+(et(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Xf(t,"stretch")?H1(oe(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(et(t,e+1)!==115)break;case 6444:switch(et(t,Tn(t)-3-(~Xf(t,"!important")&&10))){case 107:return oe(t,":",":"+se)+t;case 101:return oe(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+se+(et(t,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+dt+"$2box$3")+t}break;case 5936:switch(et(t,e+11)){case 114:return se+t+dt+oe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return se+t+dt+oe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return se+t+dt+oe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return se+t+dt+t+t}return t}var _b=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case xm:e.return=H1(e.value,e.length);break;case j1:return Is([ko(e,{value:oe(e.value,"@","@"+se)})],i);case km:if(e.length)return nb(e.props,function(s){switch(tb(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Is([ko(e,{props:[oe(s,/:(read-\w+)/,":"+Xu+"$1")]})],i);case"::placeholder":return Is([ko(e,{props:[oe(s,/:(plac\w+)/,":"+se+"input-$1")]}),ko(e,{props:[oe(s,/:(plac\w+)/,":"+Xu+"$1")]}),ko(e,{props:[oe(s,/:(plac\w+)/,dt+"input-$1")]})],i)}return""})}},wb=[_b],K1=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(S){var P=S.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var i=e.stylisPlugins||wb,s={},o,l=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var P=S.getAttribute("data-emotion").split(" "),w=1;w<P.length;w++)s[P[w]]=!0;l.push(S)});var u,c=[yb,vb];{var d,p=[hb,fb(function(S){d.insert(S)})],m=db(c.concat(i,p)),E=function(P){return Is(ub(P),m)};u=function(P,w,v,I){d=v,E(P?P+"{"+w.styles+"}":w.styles),I&&(A.inserted[w.name]=!0)}}var A={key:n,sheet:new Qx({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:u};return A.sheet.hydrate(l),A},G1={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=typeof Symbol=="function"&&Symbol.for,Nm=Qe?Symbol.for("react.element"):60103,Om=Qe?Symbol.for("react.portal"):60106,sh=Qe?Symbol.for("react.fragment"):60107,oh=Qe?Symbol.for("react.strict_mode"):60108,ah=Qe?Symbol.for("react.profiler"):60114,lh=Qe?Symbol.for("react.provider"):60109,uh=Qe?Symbol.for("react.context"):60110,Dm=Qe?Symbol.for("react.async_mode"):60111,ch=Qe?Symbol.for("react.concurrent_mode"):60111,hh=Qe?Symbol.for("react.forward_ref"):60112,dh=Qe?Symbol.for("react.suspense"):60113,Eb=Qe?Symbol.for("react.suspense_list"):60120,fh=Qe?Symbol.for("react.memo"):60115,ph=Qe?Symbol.for("react.lazy"):60116,Tb=Qe?Symbol.for("react.block"):60121,Ib=Qe?Symbol.for("react.fundamental"):60117,Sb=Qe?Symbol.for("react.responder"):60118,Ab=Qe?Symbol.for("react.scope"):60119;function Ht(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Nm:switch(t=t.type,t){case Dm:case ch:case sh:case ah:case oh:case dh:return t;default:switch(t=t&&t.$$typeof,t){case uh:case hh:case ph:case fh:case lh:return t;default:return e}}case Om:return e}}}function Q1(t){return Ht(t)===ch}de.AsyncMode=Dm;de.ConcurrentMode=ch;de.ContextConsumer=uh;de.ContextProvider=lh;de.Element=Nm;de.ForwardRef=hh;de.Fragment=sh;de.Lazy=ph;de.Memo=fh;de.Portal=Om;de.Profiler=ah;de.StrictMode=oh;de.Suspense=dh;de.isAsyncMode=function(t){return Q1(t)||Ht(t)===Dm};de.isConcurrentMode=Q1;de.isContextConsumer=function(t){return Ht(t)===uh};de.isContextProvider=function(t){return Ht(t)===lh};de.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nm};de.isForwardRef=function(t){return Ht(t)===hh};de.isFragment=function(t){return Ht(t)===sh};de.isLazy=function(t){return Ht(t)===ph};de.isMemo=function(t){return Ht(t)===fh};de.isPortal=function(t){return Ht(t)===Om};de.isProfiler=function(t){return Ht(t)===ah};de.isStrictMode=function(t){return Ht(t)===oh};de.isSuspense=function(t){return Ht(t)===dh};de.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===sh||t===ch||t===ah||t===oh||t===dh||t===Eb||typeof t=="object"&&t!==null&&(t.$$typeof===ph||t.$$typeof===fh||t.$$typeof===lh||t.$$typeof===uh||t.$$typeof===hh||t.$$typeof===Ib||t.$$typeof===Sb||t.$$typeof===Ab||t.$$typeof===Tb)};de.typeOf=Ht;G1.exports=de;var Cb=G1.exports,Y1=Cb,Rb={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},X1={};X1[Y1.ForwardRef]=Rb;X1[Y1.Memo]=Pb;var kb=!0;function xb(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var J1=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||kb===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},Z1=function(e,n,r){J1(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function bb(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Nb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ob=/[A-Z]|^ms/g,Db=/_EMO_([^_]+?)_([^]*?)_EMO_/g,eT=function(e){return e.charCodeAt(1)===45},d_=function(e){return e!=null&&typeof e!="boolean"},Vd=U1(function(t){return eT(t)?t:t.replace(Ob,"-$&").toLowerCase()}),f_=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(Db,function(r,i,s){return In={name:i,styles:s,next:In},i})}return Nb[e]!==1&&!eT(e)&&typeof n=="number"&&n!==0?n+"px":n};function Ra(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return In={name:n.name,styles:n.styles,next:In},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)In={name:r.name,styles:r.styles,next:In},r=r.next;var i=n.styles+";";return i}return Mb(t,e,n)}case"function":{if(t!==void 0){var s=In,o=n(t);return In=s,Ra(t,e,o)}break}}if(e==null)return n;var l=e[n];return l!==void 0?l:n}function Mb(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ra(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":d_(o)&&(r+=Vd(s)+":"+f_(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var l=0;l<o.length;l++)d_(o[l])&&(r+=Vd(s)+":"+f_(s,o[l])+";");else{var u=Ra(t,e,o);switch(s){case"animation":case"animationName":{r+=Vd(s)+":"+u+";";break}default:r+=s+"{"+u+"}"}}}return r}var p_=/label:\s*([^\s;\n{]+)\s*(;|$)/g,In,Mm=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";In=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=Ra(r,n,o)):s+=o[0];for(var l=1;l<e.length;l++)s+=Ra(r,n,e[l]),i&&(s+=o[l]);p_.lastIndex=0;for(var u="",c;(c=p_.exec(s))!==null;)u+="-"+c[1];var d=bb(s)+u;return{name:d,styles:s,next:In}},Lb=function(e){return e()},tT=Su.useInsertionEffect?Su.useInsertionEffect:!1,Vb=tT||Lb,m_=tT||L.useLayoutEffect,nT=L.createContext(typeof HTMLElement<"u"?K1({key:"css"}):null),Fb=nT.Provider,rT=function(e){return L.forwardRef(function(n,r){var i=L.useContext(nT);return e(n,i,r)})},mh=L.createContext({}),Fd={exports:{}},g_;function iT(){return g_||(g_=1,function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var s in i)({}).hasOwnProperty.call(i,s)&&(n[s]=i[s])}return n},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(null,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(Fd)),Fd.exports}iT();var Ub=rT(function(t,e){var n=t.styles,r=Mm([n],void 0,L.useContext(mh)),i=L.useRef();return m_(function(){var s=e.key+"-global",o=new e.sheet.constructor({key:s,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),l=!1,u=document.querySelector('style[data-emotion="'+s+" "+r.name+'"]');return e.sheet.tags.length&&(o.before=e.sheet.tags[0]),u!==null&&(l=!0,u.setAttribute("data-emotion",s),o.hydrate([u])),i.current=[o,l],function(){o.flush()}},[e]),m_(function(){var s=i.current,o=s[0],l=s[1];if(l){s[1]=!1;return}if(r.next!==void 0&&Z1(e,r.next,!0),o.tags.length){var u=o.tags[o.tags.length-1].nextElementSibling;o.before=u,o.flush()}e.insert("",r,o,!1)},[e,r.name]),null});function sT(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Mm(e)}var $b=function(){var e=sT.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},jb=Hx,zb=function(e){return e!=="theme"},y_=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?jb:zb},v_=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},Bb=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return J1(n,r,i),Vb(function(){return Z1(n,r,i)}),null},Wb=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var l=v_(e,n,r),u=l||y_(i),c=!u("as");return function(){var d=arguments,p=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&p.push("label:"+s+";"),d[0]==null||d[0].raw===void 0)p.push.apply(p,d);else{p.push(d[0][0]);for(var m=d.length,E=1;E<m;E++)p.push(d[E],d[0][E])}var A=rT(function(S,P,w){var v=c&&S.as||i,I="",N=[],D=S;if(S.theme==null){D={};for(var M in S)D[M]=S[M];D.theme=L.useContext(mh)}typeof S.className=="string"?I=xb(P.registered,N,S.className):S.className!=null&&(I=S.className+" ");var _=Mm(p.concat(N),P.registered,D);I+=P.key+"-"+_.name,o!==void 0&&(I+=" "+o);var y=c&&l===void 0?y_(v):u,T={};for(var C in S)c&&C==="as"||y(C)&&(T[C]=S[C]);return T.className=I,T.ref=w,L.createElement(L.Fragment,null,L.createElement(Bb,{cache:P,serialized:_,isStringTag:typeof v=="string"}),L.createElement(v,T))});return A.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",A.defaultProps=e.defaultProps,A.__emotion_real=A,A.__emotion_base=i,A.__emotion_styles=p,A.__emotion_forwardProp=l,Object.defineProperty(A,"toString",{value:function(){return"."+o}}),A.withComponent=function(S,P){return t(S,ce({},n,P,{shouldForwardProp:v_(A,P,!0)})).apply(void 0,p)},A}},qb=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Zf=Wb.bind();qb.forEach(function(t){Zf[t]=Zf(t)});let ep;typeof document=="object"&&(ep=K1({key:"css",prepend:!0}));function Hb(t){const{injectFirst:e,children:n}=t;return e&&ep?F.jsx(Fb,{value:ep,children:n}):n}function Kb(t){return t==null||Object.keys(t).length===0}function Gb(t){const{styles:e,defaultTheme:n={}}=t,r=typeof e=="function"?i=>e(Kb(i)?n:i):e;return F.jsx(Ub,{styles:r})}function Qb(t,e){return Zf(t,e)}const Yb=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))},Xb=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:Gb,StyledEngineProvider:Hb,ThemeContext:mh,css:sT,default:Qb,internal_processStyles:Yb,keyframes:$b},Symbol.toStringTag,{value:"Module"}));function Jb(t){return Object.keys(t).length===0}function Zb(t=null){const e=L.useContext(mh);return!e||Jb(e)?t:e}const e2=Pm();function t2(t=e2){return Zb(t)}function n2({props:t,name:e,defaultTheme:n,themeId:r}){let i=t2(n);return r&&(i=i[r]||i),Jk({theme:i,name:e,props:t})}const r2=["sx"],i2=t=>{var e,n;const r={systemProps:{},otherProps:{}},i=(e=t==null||(n=t.theme)==null?void 0:n.unstable_sxConfig)!=null?e:Ka;return Object.keys(t).forEach(s=>{i[s]?r.systemProps[s]=t[s]:r.otherProps[s]=t[s]}),r};function s2(t){const{sx:e}=t,n=Xr(t,r2),{systemProps:r,otherProps:i}=i2(n);let s;return Array.isArray(e)?s=[r,...e]:typeof e=="function"?s=(...o)=>{const l=e(...o);return wr(l)?ce({},r,l):r}:s=ce({},r,e),ce({},i,{sx:s})}const o2=Object.freeze(Object.defineProperty({__proto__:null,default:th,extendSxProp:s2,unstable_createStyleFunctionSx:V1,unstable_defaultSxConfig:Ka},Symbol.toStringTag,{value:"Module"}));function a2(t,e){return ce({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}var De={};const l2=ar(vk),u2=ar(Yk);var oT=Wa;Object.defineProperty(De,"__esModule",{value:!0});De.alpha=cT;De.blend=T2;De.colorChannel=void 0;var c2=De.darken=Vm;De.decomposeColor=nn;De.emphasize=hT;var h2=De.getContrastRatio=y2;De.getLuminance=Ju;De.hexToRgb=aT;De.hslToRgb=uT;var d2=De.lighten=Fm;De.private_safeAlpha=v2;De.private_safeColorChannel=void 0;De.private_safeDarken=_2;De.private_safeEmphasize=E2;De.private_safeLighten=w2;De.recomposeColor=Js;De.rgbToHex=g2;var __=oT(l2),f2=oT(u2);function Lm(t,e=0,n=1){return(0,f2.default)(t,e,n)}function aT(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function p2(t){const e=t.toString(16);return e.length===1?`0${e}`:e}function nn(t){if(t.type)return t;if(t.charAt(0)==="#")return nn(aT(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,__.default)(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error((0,__.default)(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}const lT=t=>{const e=nn(t);return e.values.slice(0,3).map((n,r)=>e.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};De.colorChannel=lT;const m2=(t,e)=>{try{return lT(t)}catch{return t}};De.private_safeColorChannel=m2;function Js(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function g2(t){if(t.indexOf("#")===0)return t;const{values:e}=nn(t);return`#${e.map((n,r)=>p2(r===3?Math.round(255*n):n)).join("")}`}function uT(t){t=nn(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),o=(c,d=(c+n/30)%12)=>i-s*Math.max(Math.min(d-3,9-d,1),-1);let l="rgb";const u=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(l+="a",u.push(e[3])),Js({type:l,values:u})}function Ju(t){t=nn(t);let e=t.type==="hsl"||t.type==="hsla"?nn(uT(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function y2(t,e){const n=Ju(t),r=Ju(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function cT(t,e){return t=nn(t),e=Lm(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,Js(t)}function v2(t,e,n){try{return cT(t,e)}catch{return t}}function Vm(t,e){if(t=nn(t),e=Lm(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return Js(t)}function _2(t,e,n){try{return Vm(t,e)}catch{return t}}function Fm(t,e){if(t=nn(t),e=Lm(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return Js(t)}function w2(t,e,n){try{return Fm(t,e)}catch{return t}}function hT(t,e=.15){return Ju(t)>.5?Vm(t,e):Fm(t,e)}function E2(t,e,n){try{return hT(t,e)}catch{return t}}function T2(t,e,n,r=1){const i=(u,c)=>Math.round((u**(1/r)*(1-n)+c**(1/r)*n)**r),s=nn(t),o=nn(e),l=[i(s.values[0],o.values[0]),i(s.values[1],o.values[1]),i(s.values[2],o.values[2])];return Js({type:"rgb",values:l})}const Pa={black:"#000",white:"#fff"},I2={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Ki={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Gi={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},xo={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Qi={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Yi={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Xi={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},S2=["mode","contrastThreshold","tonalOffset"],w_={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Pa.white,default:Pa.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ud={text:{primary:Pa.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Pa.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function E_(t,e,n,r){const i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=d2(t.main,i):e==="dark"&&(t.dark=c2(t.main,s)))}function A2(t="light"){return t==="dark"?{main:Qi[200],light:Qi[50],dark:Qi[400]}:{main:Qi[700],light:Qi[400],dark:Qi[800]}}function C2(t="light"){return t==="dark"?{main:Ki[200],light:Ki[50],dark:Ki[400]}:{main:Ki[500],light:Ki[300],dark:Ki[700]}}function R2(t="light"){return t==="dark"?{main:Gi[500],light:Gi[300],dark:Gi[700]}:{main:Gi[700],light:Gi[400],dark:Gi[800]}}function P2(t="light"){return t==="dark"?{main:Yi[400],light:Yi[300],dark:Yi[700]}:{main:Yi[700],light:Yi[500],dark:Yi[900]}}function k2(t="light"){return t==="dark"?{main:Xi[400],light:Xi[300],dark:Xi[700]}:{main:Xi[800],light:Xi[500],dark:Xi[900]}}function x2(t="light"){return t==="dark"?{main:xo[400],light:xo[300],dark:xo[700]}:{main:"#ed6c02",light:xo[500],dark:xo[900]}}function b2(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=Xr(t,S2),s=t.primary||A2(e),o=t.secondary||C2(e),l=t.error||R2(e),u=t.info||P2(e),c=t.success||k2(e),d=t.warning||x2(e);function p(S){return h2(S,Ud.text.primary)>=n?Ud.text.primary:w_.text.primary}const m=({color:S,name:P,mainShade:w=500,lightShade:v=300,darkShade:I=700})=>{if(S=ce({},S),!S.main&&S[w]&&(S.main=S[w]),!S.hasOwnProperty("main"))throw new Error(Sa(11,P?` (${P})`:"",w));if(typeof S.main!="string")throw new Error(Sa(12,P?` (${P})`:"",JSON.stringify(S.main)));return E_(S,"light",v,r),E_(S,"dark",I,r),S.contrastText||(S.contrastText=p(S.main)),S},E={dark:Ud,light:w_};return Rn(ce({common:ce({},Pa),mode:e,primary:m({color:s,name:"primary"}),secondary:m({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:m({color:l,name:"error"}),warning:m({color:d,name:"warning"}),info:m({color:u,name:"info"}),success:m({color:c,name:"success"}),grey:I2,contrastThreshold:n,getContrastText:p,augmentColor:m,tonalOffset:r},E[e]),i)}const N2=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function O2(t){return Math.round(t*1e5)/1e5}const T_={textTransform:"uppercase"},I_='"Roboto", "Helvetica", "Arial", sans-serif';function D2(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=I_,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:o=400,fontWeightMedium:l=500,fontWeightBold:u=700,htmlFontSize:c=16,allVariants:d,pxToRem:p}=n,m=Xr(n,N2),E=i/14,A=p||(w=>`${w/c*E}rem`),S=(w,v,I,N,D)=>ce({fontFamily:r,fontWeight:w,fontSize:A(v),lineHeight:I},r===I_?{letterSpacing:`${O2(N/v)}em`}:{},D,d),P={h1:S(s,96,1.167,-1.5),h2:S(s,60,1.2,-.5),h3:S(o,48,1.167,0),h4:S(o,34,1.235,.25),h5:S(o,24,1.334,0),h6:S(l,20,1.6,.15),subtitle1:S(o,16,1.75,.15),subtitle2:S(l,14,1.57,.1),body1:S(o,16,1.5,.15),body2:S(o,14,1.43,.15),button:S(l,14,1.75,.4,T_),caption:S(o,12,1.66,.4),overline:S(o,12,2.66,1,T_),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Rn(ce({htmlFontSize:c,pxToRem:A,fontFamily:r,fontSize:i,fontWeightLight:s,fontWeightRegular:o,fontWeightMedium:l,fontWeightBold:u},P),m,{clone:!1})}const M2=.2,L2=.14,V2=.12;function we(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${M2})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${L2})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${V2})`].join(",")}const F2=["none",we(0,2,1,-1,0,1,1,0,0,1,3,0),we(0,3,1,-2,0,2,2,0,0,1,5,0),we(0,3,3,-2,0,3,4,0,0,1,8,0),we(0,2,4,-1,0,4,5,0,0,1,10,0),we(0,3,5,-1,0,5,8,0,0,1,14,0),we(0,3,5,-1,0,6,10,0,0,1,18,0),we(0,4,5,-2,0,7,10,1,0,2,16,1),we(0,5,5,-3,0,8,10,1,0,3,14,2),we(0,5,6,-3,0,9,12,1,0,3,16,2),we(0,6,6,-3,0,10,14,1,0,4,18,3),we(0,6,7,-4,0,11,15,1,0,4,20,3),we(0,7,8,-4,0,12,17,2,0,5,22,4),we(0,7,8,-4,0,13,19,2,0,5,24,4),we(0,7,9,-4,0,14,21,2,0,5,26,4),we(0,8,9,-5,0,15,22,2,0,6,28,5),we(0,8,10,-5,0,16,24,2,0,6,30,5),we(0,8,11,-5,0,17,26,2,0,6,32,5),we(0,9,11,-5,0,18,28,2,0,7,34,6),we(0,9,12,-6,0,19,29,2,0,7,36,6),we(0,10,13,-6,0,20,31,3,0,8,38,7),we(0,10,13,-6,0,21,33,3,0,8,40,7),we(0,10,14,-6,0,22,35,3,0,8,42,7),we(0,11,14,-7,0,23,36,3,0,9,44,8),we(0,11,15,-7,0,24,38,3,0,9,46,8)],U2=["duration","easing","delay"],$2={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},j2={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function S_(t){return`${Math.round(t)}ms`}function z2(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function B2(t){const e=ce({},$2,t.easing),n=ce({},j2,t.duration);return ce({getAutoHeightDuration:z2,create:(i=["all"],s={})=>{const{duration:o=n.standard,easing:l=e.easeInOut,delay:u=0}=s;return Xr(s,U2),(Array.isArray(i)?i:[i]).map(c=>`${c} ${typeof o=="string"?o:S_(o)} ${l} ${typeof u=="string"?u:S_(u)}`).join(",")}},t,{easing:e,duration:n})}const W2={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},q2=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function H2(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:s={}}=t,o=Xr(t,q2);if(t.vars)throw new Error(Sa(18));const l=b2(r),u=Pm(t);let c=Rn(u,{mixins:a2(u.breakpoints,n),palette:l,shadows:F2.slice(),typography:D2(l,s),transitions:B2(i),zIndex:ce({},W2)});return c=Rn(c,o),c=e.reduce((d,p)=>Rn(d,p),c),c.unstable_sxConfig=ce({},Ka,o==null?void 0:o.unstable_sxConfig),c.unstable_sx=function(p){return th({sx:p,theme:this})},c}const dT=H2(),fT="$$material";function K2({props:t,name:e}){return n2({props:t,name:e,defaultTheme:dT,themeId:fT})}var Qa={},$d={exports:{}},A_;function G2(){return A_||(A_=1,function(t){function e(n,r){if(n==null)return{};var i={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(r.indexOf(s)>=0)continue;i[s]=n[s]}return i}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}($d)),$d.exports}const Q2=ar(Xb),Y2=ar(yk),X2=ar(Sk),J2=ar(Ik),Z2=ar(Wx),eN=ar(o2);var Zs=Wa;Object.defineProperty(Qa,"__esModule",{value:!0});var tN=Qa.default=pN;Qa.shouldForwardProp=fu;Qa.systemDefaultTheme=void 0;var Kt=Zs(iT()),tp=Zs(G2()),C_=lN(Q2),nN=Y2;Zs(X2);Zs(J2);var rN=Zs(Z2),iN=Zs(eN);const sN=["ownerState"],oN=["variants"],aN=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function pT(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(pT=function(r){return r?n:e})(t)}function lN(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=pT(e);if(n&&n.has(t))return n.get(t);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function uN(t){return Object.keys(t).length===0}function cN(t){return typeof t=="string"&&t.charCodeAt(0)>96}function fu(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const hN=Qa.systemDefaultTheme=(0,rN.default)(),dN=t=>t&&t.charAt(0).toLowerCase()+t.slice(1);function Hl({defaultTheme:t,theme:e,themeId:n}){return uN(e)?t:e[n]||e}function fN(t){return t?(e,n)=>n[t]:null}function pu(t,e){let{ownerState:n}=e,r=(0,tp.default)(e,sN);const i=typeof t=="function"?t((0,Kt.default)({ownerState:n},r)):t;if(Array.isArray(i))return i.flatMap(s=>pu(s,(0,Kt.default)({ownerState:n},r)));if(i&&typeof i=="object"&&Array.isArray(i.variants)){const{variants:s=[]}=i;let l=(0,tp.default)(i,oN);return s.forEach(u=>{let c=!0;typeof u.props=="function"?c=u.props((0,Kt.default)({ownerState:n},r,n)):Object.keys(u.props).forEach(d=>{(n==null?void 0:n[d])!==u.props[d]&&r[d]!==u.props[d]&&(c=!1)}),c&&(Array.isArray(l)||(l=[l]),l.push(typeof u.style=="function"?u.style((0,Kt.default)({ownerState:n},r,n)):u.style))}),l}return i}function pN(t={}){const{themeId:e,defaultTheme:n=hN,rootShouldForwardProp:r=fu,slotShouldForwardProp:i=fu}=t,s=o=>(0,iN.default)((0,Kt.default)({},o,{theme:Hl((0,Kt.default)({},o,{defaultTheme:n,themeId:e}))}));return s.__mui_systemSx=!0,(o,l={})=>{(0,C_.internal_processStyles)(o,D=>D.filter(M=>!(M!=null&&M.__mui_systemSx)));const{name:u,slot:c,skipVariantsResolver:d,skipSx:p,overridesResolver:m=fN(dN(c))}=l,E=(0,tp.default)(l,aN),A=d!==void 0?d:c&&c!=="Root"&&c!=="root"||!1,S=p||!1;let P,w=fu;c==="Root"||c==="root"?w=r:c?w=i:cN(o)&&(w=void 0);const v=(0,C_.default)(o,(0,Kt.default)({shouldForwardProp:w,label:P},E)),I=D=>typeof D=="function"&&D.__emotion_real!==D||(0,nN.isPlainObject)(D)?M=>pu(D,(0,Kt.default)({},M,{theme:Hl({theme:M.theme,defaultTheme:n,themeId:e})})):D,N=(D,...M)=>{let _=I(D);const y=M?M.map(I):[];u&&m&&y.push(k=>{const x=Hl((0,Kt.default)({},k,{defaultTheme:n,themeId:e}));if(!x.components||!x.components[u]||!x.components[u].styleOverrides)return null;const R=x.components[u].styleOverrides,Ye={};return Object.entries(R).forEach(([Ln,ni])=>{Ye[Ln]=pu(ni,(0,Kt.default)({},k,{theme:x}))}),m(k,Ye)}),u&&!A&&y.push(k=>{var x;const R=Hl((0,Kt.default)({},k,{defaultTheme:n,themeId:e})),Ye=R==null||(x=R.components)==null||(x=x[u])==null?void 0:x.variants;return pu({variants:Ye},(0,Kt.default)({},k,{theme:R}))}),S||y.push(s);const T=y.length-M.length;if(Array.isArray(D)&&T>0){const k=new Array(T).fill("");_=[...D,...k],_.raw=[...D.raw,...k]}const C=v(_,...y);return o.muiName&&(C.muiName=o.muiName),C};return v.withConfig&&(N.withConfig=v.withConfig),N}}function mN(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const gN=t=>mN(t)&&t!=="classes",yN=tN({themeId:fT,defaultTheme:dT,rootShouldForwardProp:gN});function vN(t){return N1("MuiSvgIcon",t)}Gk("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const _N=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],wN=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${zr(e)}`,`fontSize${zr(n)}`]};return qk(i,vN,r)},EN=yN("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${zr(n.color)}`],e[`fontSize${zr(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,s,o,l,u,c,d,p,m,E,A;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(i=i.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((s=t.typography)==null||(o=s.pxToRem)==null?void 0:o.call(s,20))||"1.25rem",medium:((l=t.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,24))||"1.5rem",large:((c=t.typography)==null||(d=c.pxToRem)==null?void 0:d.call(c,35))||"2.1875rem"}[e.fontSize],color:(p=(m=(t.vars||t).palette)==null||(m=m[e.color])==null?void 0:m.main)!=null?p:{action:(E=(t.vars||t).palette)==null||(E=E.action)==null?void 0:E.active,disabled:(A=(t.vars||t).palette)==null||(A=A.action)==null?void 0:A.disabled,inherit:void 0}[e.color]}}),np=L.forwardRef(function(e,n){const r=K2({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:o="inherit",component:l="svg",fontSize:u="medium",htmlColor:c,inheritViewBox:d=!1,titleAccess:p,viewBox:m="0 0 24 24"}=r,E=Xr(r,_N),A=L.isValidElement(i)&&i.type==="svg",S=ce({},r,{color:o,component:l,fontSize:u,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:m,hasSvgAsChild:A}),P={};d||(P.viewBox=m);const w=wN(S);return F.jsxs(EN,ce({as:l,className:Xk(w.root,s),focusable:"false",color:c,"aria-hidden":p?void 0:!0,role:p?"img":void 0,ref:n},P,E,A&&i.props,{ownerState:S,children:[A?i.props.children:i,p?F.jsx("title",{children:p}):null]}))});np.muiName="SvgIcon";function TN(t,e){function n(r,i){return F.jsx(np,ce({"data-testid":`${e}Icon`,ref:i},r,{children:t}))}return n.muiName=np.muiName,L.memo(L.forwardRef(n))}const IN={configure:t=>{b1.configure(t)}},SN=Object.freeze(Object.defineProperty({__proto__:null,capitalize:zr,createChainedFunction:Ak,createSvgIcon:TN,debounce:Ck,deprecatedPropType:Rk,isMuiElement:Pk,ownerDocument:R1,ownerWindow:kk,requirePropFactory:xk,setRef:P1,unstable_ClassNameGenerator:IN,unstable_useEnhancedEffect:k1,unstable_useId:Nk,unsupportedProp:Ok,useControlled:Dk,useEventCallback:Mk,useForkRef:Lk,useIsFocusVisible:Wk},Symbol.toStringTag,{value:"Module"})),AN=ar(SN);var R_;function Um(){return R_||(R_=1,function(t){"use client";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=AN}(Md)),Md}var CN=Wa;Object.defineProperty(wm,"__esModule",{value:!0});var $m=wm.default=void 0,RN=CN(Um()),PN=F;$m=wm.default=(0,RN.default)((0,PN.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");var jm={},kN=Wa;Object.defineProperty(jm,"__esModule",{value:!0});var Zu=jm.default=void 0,xN=kN(Um()),bN=F;Zu=jm.default=(0,xN.default)((0,bN.jsx)("path",{d:"M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3"}),"Key");const mT="/react-chat/assets/log-in-DRNWorB6.png";var P_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new ON;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ON extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DN=function(t){const e=gT(t);return yT.encodeByteArray(e,!0)},ec=function(t){return DN(t).replace(/\./g,"")},vT=function(t){try{return yT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function tc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!MN(n)||(t[n]=tc(t[n],e[n]));return t}function MN(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=()=>LN().__FIREBASE_DEFAULTS__,FN=()=>{if(typeof process>"u"||typeof P_>"u")return;const t=P_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vT(t[1]);return e&&JSON.parse(e)},gh=()=>{try{return VN()||FN()||UN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_T=t=>{var e,n;return(n=(e=gh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$N=t=>{const e=_T(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wT=()=>{var t;return(t=gh())===null||t===void 0?void 0:t.config},ET=t=>{var e;return(e=gh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ec(JSON.stringify(n)),ec(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function WN(){var t;const e=(t=gh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TT(){return typeof self=="object"&&self.self===self}function IT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HN(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KN(){return!WN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ST(){try{return typeof indexedDB=="object"}catch{return!1}}function AT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function GN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QN,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ur.prototype.create)}}class ur{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?YN(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ln(i,l,r)}}function YN(t,e){return t.replace(XN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const XN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function JN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ai(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(x_(s)&&x_(o)){if(!Ai(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function x_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function CT(t,e){const n=new ZN(t,e);return n.subscribe.bind(n)}class ZN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jd),i.error===void 0&&(i.error=jd),i.complete===void 0&&(i.complete=jd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=1e3,nO=2,rO=4*60*60*1e3,iO=.5;function b_(t,e=tO,n=nO){const r=e*Math.pow(n,t),i=Math.round(iO*r*(Math.random()-.5)*2);return Math.min(rO,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aO(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oO(t){return t===ci?void 0:t}function aO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=[];var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const PT={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},lO=ee.INFO,uO={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},cO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xa{constructor(e){this.name=e,this._logLevel=lO,this._logHandler=cO,this._userLogHandler=null,zm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}function hO(t){zm.forEach(e=>{e.setLogLevel(t)})}function dO(t,e){for(const n of zm){let r=null;e&&e.level&&(r=PT[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const l=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:ee[s].toLowerCase(),message:l,args:o,type:i.name})}}}const fO=(t,e)=>e.some(n=>t instanceof n);let N_,O_;function pO(){return N_||(N_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mO(){return O_||(O_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kT=new WeakMap,rp=new WeakMap,xT=new WeakMap,zd=new WeakMap,Bm=new WeakMap;function gO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kT.set(n,t)}).catch(()=>{}),Bm.set(e,t),e}function yO(t){if(rp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rp.set(t,e)}let ip={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vO(t){ip=t(ip)}function _O(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bd(this),e,...n);return xT.set(r,e.sort?e.sort():[e]),Vr(r)}:mO().includes(t)?function(...e){return t.apply(Bd(this),e),Vr(kT.get(this))}:function(...e){return Vr(t.apply(Bd(this),e))}}function wO(t){return typeof t=="function"?_O(t):(t instanceof IDBTransaction&&yO(t),fO(t,pO())?new Proxy(t,ip):t)}function Vr(t){if(t instanceof IDBRequest)return gO(t);if(zd.has(t))return zd.get(t);const e=wO(t);return e!==t&&(zd.set(t,e),Bm.set(e,t)),e}const Bd=t=>Bm.get(t);function bT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Vr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Vr(o.result),u.oldVersion,u.newVersion,Vr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const EO=["get","getKey","getAll","getAllKeys","count"],TO=["put","add","delete","clear"],Wd=new Map;function D_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wd.get(e))return Wd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=TO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||EO.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Wd.set(e,s),s}vO(t=>({...t,get:(e,n,r)=>D_(e,n)||t.get(e,n,r),has:(e,n)=>!!D_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nc="@firebase/app",sp="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Xa("@firebase/app"),AO="@firebase/app-compat",CO="@firebase/analytics-compat",RO="@firebase/analytics",PO="@firebase/app-check-compat",kO="@firebase/app-check",xO="@firebase/auth",bO="@firebase/auth-compat",NO="@firebase/database",OO="@firebase/database-compat",DO="@firebase/functions",MO="@firebase/functions-compat",LO="@firebase/installations",VO="@firebase/installations-compat",FO="@firebase/messaging",UO="@firebase/messaging-compat",$O="@firebase/performance",jO="@firebase/performance-compat",zO="@firebase/remote-config",BO="@firebase/remote-config-compat",WO="@firebase/storage",qO="@firebase/storage-compat",HO="@firebase/firestore",KO="@firebase/vertexai-preview",GO="@firebase/firestore-compat",QO="firebase",YO="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]",XO={[nc]:"fire-core",[AO]:"fire-core-compat",[RO]:"fire-analytics",[CO]:"fire-analytics-compat",[kO]:"fire-app-check",[PO]:"fire-app-check-compat",[xO]:"fire-auth",[bO]:"fire-auth-compat",[NO]:"fire-rtdb",[OO]:"fire-rtdb-compat",[DO]:"fire-fn",[MO]:"fire-fn-compat",[LO]:"fire-iid",[VO]:"fire-iid-compat",[FO]:"fire-fcm",[UO]:"fire-fcm-compat",[$O]:"fire-perf",[jO]:"fire-perf-compat",[zO]:"fire-rc",[BO]:"fire-rc-compat",[WO]:"fire-gcs",[qO]:"fire-gcs-compat",[HO]:"fire-fst",[GO]:"fire-fst-compat",[KO]:"fire-vertex","fire-js":"fire-js",[QO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Map,Vs=new Map,Fs=new Map;function ka(t,e){try{t.container.addComponent(e)}catch(n){Ci.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function NT(t,e){t.container.addOrOverwriteComponent(e)}function sn(t){const e=t.name;if(Fs.has(e))return Ci.debug(`There were multiple attempts to register component ${e}.`),!1;Fs.set(e,t);for(const n of Wr.values())ka(n,t);for(const n of Vs.values())ka(n,t);return!0}function cr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function JO(t,e,n=Br){cr(t,e).clearInstance(n)}function OT(t){return t.options!==void 0}function mn(t){return t.settings!==void 0}function ZO(){Fs.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new ur("app","Firebase",eD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DT=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD extends DT{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const l=e;super(l.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,mt(nc,sp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Wm(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Zt.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=YO;function yh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Br,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(n||(n=wT()),!n)throw Zt.create("no-options");const s=Wr.get(i);if(s){if(Ai(n,s.options)&&Ai(r,s.config))return s;throw Zt.create("duplicate-app",{appName:i})}const o=new RT(i);for(const u of Fs.values())o.addComponent(u);const l=new DT(n,r,o);return Wr.set(i,l),l}function nD(t,e){if(TT())throw Zt.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;OT(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,p)=>Math.imul(31,d)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Zt.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Vs.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const l=new RT(s);for(const c of Fs.values())l.addComponent(c);const u=new tD(n,e,s,l);return Vs.set(s,u),u}function vh(t=Br){const e=Wr.get(t);if(!e&&t===Br&&wT())return yh();if(!e)throw Zt.create("no-app",{appName:t});return e}function rD(){return Array.from(Wr.values())}async function Wm(t){let e=!1;const n=t.name;Wr.has(n)?(e=!0,Wr.delete(n)):Vs.has(n)&&t.decRefCount()<=0&&(Vs.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function mt(t,e,n){var r;let i=(r=XO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ci.warn(l.join(" "));return}sn(new rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function MT(t,e){if(t!==null&&typeof t!="function")throw Zt.create("invalid-log-argument");dO(t,e)}function LT(t){hO(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD="firebase-heartbeat-database",sD=1,xa="firebase-heartbeat-store";let qd=null;function VT(){return qd||(qd=bT(iD,sD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zt.create("idb-open",{originalErrorMessage:t.message})})),qd}async function oD(t){try{const n=(await VT()).transaction(xa),r=await n.objectStore(xa).get(FT(t));return await n.done,r}catch(e){if(e instanceof ln)Ci.warn(e.message);else{const n=Zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ci.warn(n.message)}}}async function M_(t,e){try{const r=(await VT()).transaction(xa,"readwrite");await r.objectStore(xa).put(e,FT(t)),await r.done}catch(n){if(n instanceof ln)Ci.warn(n.message);else{const r=Zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ci.warn(r.message)}}}function FT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=1024,lD=30*24*60*60*1e3;class uD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=L_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=lD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=L_(),{heartbeatsToSend:r,unsentEntries:i}=cD(this._heartbeatsCache.heartbeats),s=ec(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function L_(){return new Date().toISOString().substring(0,10)}function cD(t,e=aD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),V_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),V_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ST()?AT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return M_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return M_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function V_(t){return ec(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t){sn(new rn("platform-logger",e=>new IO(e),"PRIVATE")),sn(new rn("heartbeat",e=>new uD(e),"PRIVATE")),mt(nc,sp,t),mt(nc,sp,"esm2017"),mt("fire-js","")}dD("");const fD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ln,SDK_VERSION:Jr,_DEFAULT_ENTRY_NAME:Br,_addComponent:ka,_addOrOverwriteComponent:NT,_apps:Wr,_clearComponents:ZO,_components:Fs,_getProvider:cr,_isFirebaseApp:OT,_isFirebaseServerApp:mn,_registerComponent:sn,_removeServiceInstance:JO,_serverApps:Vs,deleteApp:Wm,getApp:vh,getApps:rD,initializeApp:yh,initializeServerApp:nD,onLog:MT,registerVersion:mt,setLogLevel:LT},Symbol.toStringTag,{value:"Module"}));function qm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function UT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pD=UT,$T=new ur("auth","Firebase",UT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Xa("@firebase/auth");function mD(t,...e){rc.logLevel<=ee.WARN&&rc.warn(`Auth (${Jr}): ${t}`,...e)}function mu(t,...e){rc.logLevel<=ee.ERROR&&rc.error(`Auth (${Jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,...e){throw Hm(t,...e)}function kn(t,...e){return Hm(t,...e)}function jT(t,e,n){const r=Object.assign(Object.assign({},pD()),{[e]:n});return new ur("auth","Firebase",r).create(e,{appName:t.name})}function Jn(t){return jT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $T.create(t,...e)}function Q(t,e,...n){if(!t)throw Hm(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mu(e),new Error(e)}function ir(t,e){t||Gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gD(){return F_()==="http:"||F_()==="https:"}function F_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gD()||IT()||"connection"in navigator)?navigator.onLine:!0}function vD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=BN()||qN()}get(){return yD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=new Ja(3e4,6e4);function Zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ei(t,e,n,r,i={}){return BT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ya(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),zT.fetch()(WT(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function BT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_D),e);try{const i=new TD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Kl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Kl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Kl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jT(t,d,c);_n(t,d)}}catch(i){if(i instanceof ln)throw i;_n(t,"network-request-failed",{message:String(i)})}}async function Za(t,e,n,r,i={}){const s=await ei(t,e,n,r,i);return"mfaPendingCredential"in s&&_n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function WT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Km(t.config,i):`${t.config.apiScheme}://${i}`}function ED(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),wD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kn(t,e,r);return i.customData._tokenResponse=n,i}function U_(t){return t!==void 0&&t.enterprise!==void 0}class ID{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ED(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function SD(t,e){return ei(t,"GET","/v2/recaptchaConfig",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(t,e){return ei(t,"POST","/v1/accounts:delete",e)}async function qT(t,e){return ei(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CD(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=Gm(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jo(Hd(i.auth_time)),issuedAtTime:Jo(Hd(i.iat)),expirationTime:Jo(Hd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hd(t){return Number(t)*1e3}function Gm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mu("JWT malformed, contained fewer than 3 sections"),null;try{const i=vT(n);return i?JSON.parse(i):(mu("Failed to decode base64 JWT payload"),null)}catch(i){return mu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $_(t){const e=Gm(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&RD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ba(t,qT(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?HT(s.providerUserInfo):[],l=xD(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ap(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function kD(t){const e=We(t);await ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function HT(t){return t.map(e=>{var{providerId:n}=e,r=qm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bD(t,e){const n=await BT(t,{},async()=>{const r=Ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=WT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",zT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ND(t,e){return ei(t,"POST","/v2/accounts:revokeToken",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=$_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ss;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ap(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ba(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CD(this,e)}reload(){return kD(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ic(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(Jn(this.auth));const e=await this.getIdToken();return await ba(this,AD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:N,isAnonymous:D,providerData:M,stsTokenManager:_}=n;Q(I&&_,e,"internal-error");const y=Ss.fromJSON(this.name,_);Q(typeof I=="string",e,"internal-error"),mr(p,e.name),mr(m,e.name),Q(typeof N=="boolean",e,"internal-error"),Q(typeof D=="boolean",e,"internal-error"),mr(E,e.name),mr(A,e.name),mr(S,e.name),mr(P,e.name),mr(w,e.name),mr(v,e.name);const T=new Qn({uid:I,auth:e,email:m,emailVerified:N,displayName:p,isAnonymous:D,photoURL:A,phoneNumber:E,tenantId:S,stsTokenManager:y,createdAt:w,lastLoginAt:v});return M&&Array.isArray(M)&&(T.providerData=M.map(C=>Object.assign({},C))),P&&(T._redirectEventId=P),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ss;i.updateFromServerResponse(n);const s=new Qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ic(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?HT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ss;l.updateFromIdToken(r);const u=new Qn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ap(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=new Map;function Yn(t){ir(t instanceof Function,"Expected a class definition");let e=j_.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,j_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}KT.type="NONE";const z_=KT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gu(this.userKey,i.apiKey,s),this.fullPersistenceKey=gu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new As(Yn(z_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Yn(z_);const o=gu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Qn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new As(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new As(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JT(e))return"Blackberry";if(ZT(e))return"Webos";if(Qm(e))return"Safari";if((e.includes("chrome/")||QT(e))&&!e.includes("edge/"))return"Chrome";if(XT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GT(t=st()){return/firefox\//i.test(t)}function Qm(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QT(t=st()){return/crios\//i.test(t)}function YT(t=st()){return/iemobile/i.test(t)}function XT(t=st()){return/android/i.test(t)}function JT(t=st()){return/blackberry/i.test(t)}function ZT(t=st()){return/webos/i.test(t)}function _h(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OD(t=st()){var e;return _h(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DD(){return HN()&&document.documentMode===10}function eI(t=st()){return _h(t)||XT(t)||ZT(t)||JT(t)||/windows phone/i.test(t)||YT(t)}function MD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t,e=[]){let n;switch(t){case"Browser":n=B_(st());break;case"Worker":n=`${B_(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(t,e={}){return ei(t,"GET","/v2/passwordPolicy",Zr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=6;class UD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new W_(this),this.idTokenSubscription=new W_(this),this.beforeStateQueue=new LD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$T,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qT(this,{idToken:e}),r=await Qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(Jn(this));const n=e?We(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(Jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(Jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VD(this),n=new UD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ur("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ND(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[Yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ui(t){return We(t)}class W_{constructor(e){this.auth=e,this.observer=null,this.addObserver=CT(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jD(t){wh=t}function nI(t){return wh.loadJS(t)}function zD(){return wh.recaptchaEnterpriseScript}function BD(){return wh.gapiScript}function WD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qD="recaptcha-enterprise",HD="NO_RECAPTCHA";class KD{constructor(e){this.type=qD,this.auth=Ui(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{SD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new ID(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;U_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(HD)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&U_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=zD();u.length!==0&&(u+=l),nI(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function q_(t,e,n,r=!1){const i=new KD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function lp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await q_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await q_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t,e){const n=cr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ai(s,e??{}))return i;_n(i,"already-initialized")}return n.initialize({options:e})}function QD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YD(t,e,n){const r=Ui(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=rI(e),{host:o,port:l}=XD(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),JD()}function rI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XD(t){const e=rI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:H_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:H_(o)}}}function H_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}async function ZD(t,e){return ei(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eM(t,e){return Za(t,"POST","/v1/accounts:signInWithPassword",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tM(t,e){return Za(t,"POST","/v1/accounts:signInWithEmailLink",Zr(t,e))}async function nM(t,e){return Za(t,"POST","/v1/accounts:signInWithEmailLink",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends Ym{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Na(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Na(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lp(e,n,"signInWithPassword",eM);case"emailLink":return tM(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lp(e,r,"signUpPassword",ZD);case"emailLink":return nM(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e){return Za(t,"POST","/v1/accounts:signInWithIdp",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM="http://localhost";class Ri extends Ym{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ri(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:rM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ya(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sM(t){const e=Vo(Fo(t)).link,n=e?Vo(Fo(e)).deep_link_id:null,r=Vo(Fo(t)).deep_link_id;return(r?Vo(Fo(r)).link:null)||r||n||e||t}class Xm{constructor(e){var n,r,i,s,o,l;const u=Vo(Fo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=iM((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=sM(e);try{return new Xm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.providerId=eo.PROVIDER_ID}static credential(e,n){return Na._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xm.parseLink(n);return Q(r,"argument-error"),Na._fromEmailAndCode(e,r.code,r.tenantId)}}eo.PROVIDER_ID="password";eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends iI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends el{constructor(){super("facebook.com")}static credential(e){return Ri._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends el{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ri._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.GOOGLE_SIGN_IN_METHOD="google.com";Tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends el{constructor(){super("github.com")}static credential(e){return Ri._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.GITHUB_SIGN_IN_METHOD="github.com";Ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends el{constructor(){super("twitter.com")}static credential(e,n){return Ri._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oM(t,e){return Za(t,"POST","/v1/accounts:signUp",Zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qn._fromIdTokenResponse(e,r,i),o=K_(r);return new Pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=K_(r);return new Pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function K_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,sc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new sc(e,n,r,i)}}function sI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?sc._fromErrorAndOperation(t,s,e,r):s})}async function aM(t,e,n=!1){const r=await ba(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lM(t,e,n=!1){const{auth:r}=t;if(mn(r.app))return Promise.reject(Jn(r));const i="reauthenticate";try{const s=await ba(t,sI(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Gm(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),Pi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e,n=!1){if(mn(t.app))return Promise.reject(Jn(t));const r="signIn",i=await sI(t,r,e),s=await Pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function uM(t,e){return oI(Ui(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t){const e=Ui(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cM(t,e,n){if(mn(t.app))return Promise.reject(Jn(t));const r=Ui(t),o=await lp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oM).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&aI(t),u}),l=await Pi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function hM(t,e,n){return mn(t.app)?Promise.reject(Jn(t)):uM(We(t),eo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&aI(t),r})}function dM(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function fM(t,e,n){return We(t).beforeAuthStateChanged(e,n)}const oc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oc,"1"),this.storage.removeItem(oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(){const t=st();return Qm(t)||_h(t)}const mM=1e3,gM=10;class uI extends lI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pM()&&MD(),this.fallbackToPolling=eI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);DD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uI.type="LOCAL";const yM=uI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI extends lI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cI.type="SESSION";const hI=cI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Eh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await vM(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Jm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function wM(t){xn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function EM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IM(){return dI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="firebaseLocalStorageDb",SM=1,ac="firebaseLocalStorage",pI="fbase_key";class tl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Th(t,e){return t.transaction([ac],e?"readwrite":"readonly").objectStore(ac)}function AM(){const t=indexedDB.deleteDatabase(fI);return new tl(t).toPromise()}function up(){const t=indexedDB.open(fI,SM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ac,{keyPath:pI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ac)?e(r):(r.close(),await AM(),e(await up()))})})}async function G_(t,e,n){const r=Th(t,!0).put({[pI]:e,value:n});return new tl(r).toPromise()}async function CM(t,e){const n=Th(t,!1).get(e),r=await new tl(n).toPromise();return r===void 0?null:r.value}function Q_(t,e){const n=Th(t,!0).delete(e);return new tl(n).toPromise()}const RM=800,PM=3;class mI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await up(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eh._getInstance(IM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EM(),!this.activeServiceWorker)return;this.sender=new _M(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await up();return await G_(e,oc,"1"),await Q_(e,oc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>G_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Q_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Th(i,!1).getAll();return new tl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mI.type="LOCAL";const kM=mI;new Ja(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(t,e){return e?Yn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm extends Ym{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bM(t){return oI(t.auth,new Zm(t),t.bypassAuthState)}function NM(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),lM(n,new Zm(t),t.bypassAuthState)}async function OM(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),aM(n,new Zm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bM;case"linkViaPopup":case"linkViaRedirect":return OM;case"reauthViaPopup":case"reauthViaRedirect":return NM;default:_n(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM=new Ja(2e3,1e4);class fs extends gI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Jm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DM.get())};e()}}fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM="pendingRedirect",yu=new Map;class LM extends gI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yu.get(this.auth._key());if(!e){try{const r=await VM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yu.set(this.auth._key(),e)}return this.bypassAuthState||yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VM(t,e){const n=$M(e),r=UM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function FM(t,e){yu.set(t._key(),e)}function UM(t){return Yn(t._redirectPersistence)}function $M(t){return gu(MM,t.config.apiKey,t.name)}async function jM(t,e,n=!1){if(mn(t.app))return Promise.reject(Jn(t));const r=Ui(t),i=xM(r,e),o=await new LM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=10*60*1e3;class BM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Y_(e))}saveEventToCache(e){this.cachedEventUids.add(Y_(e)),this.lastProcessedEventTime=Date.now()}}function Y_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qM(t,e={}){return ei(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KM=/^https?/;async function GM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qM(t);for(const n of e)try{if(QM(n))return}catch{}_n(t,"unauthorized-domain")}function QM(t){const e=op(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KM.test(n))return!1;if(HM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM=new Ja(3e4,6e4);function X_(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XM(t){return new Promise((e,n)=>{var r,i,s;function o(){X_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{X_(),n(kn(t,"network-request-failed"))},timeout:YM.get()})}if(!((i=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xn().gapi)===null||s===void 0)&&s.load)o();else{const l=WD("iframefcb");return xn()[l]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},nI(`${BD()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw vu=null,e})}let vu=null;function JM(t){return vu=vu||XM(t),vu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM=new Ja(5e3,15e3),eL="__/auth/iframe",tL="emulator/auth/iframe",nL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iL(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Km(e,tL):`https://${t.config.authDomain}/${eL}`,r={apiKey:e.apiKey,appName:t.name,v:Jr},i=rL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ya(r).slice(1)}`}async function sL(t){const e=await JM(t),n=xn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:iL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),l=xn().setTimeout(()=>{s(o)},ZM.get());function u(){xn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aL=500,lL=600,uL="_blank",cL="http://localhost";class J_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hL(t,e,n,r=aL,i=lL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},oL),{width:r.toString(),height:i.toString(),top:s,left:o}),c=st().toLowerCase();n&&(l=QT(c)?uL:n),GT(c)&&(e=e||cL,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,A])=>`${m}${E}=${A},`,"");if(OD(c)&&l!=="_self")return dL(e||"",l),new J_(null);const p=window.open(e||"",l,d);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new J_(p)}function dL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL="__/auth/handler",pL="emulator/auth/handler",mL=encodeURIComponent("fac");async function Z_(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jr,eventId:i};if(e instanceof iI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof el){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${mL}=${encodeURIComponent(u)}`:"";return`${gL(t)}?${Ya(l).slice(1)}${c}`}function gL({config:t}){return t.emulator?Km(t,pL):`https://${t.authDomain}/${fL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="webStorageSupport";class yL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hI,this._completeRedirectFn=jM,this._overrideRedirectResult=FM}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Z_(e,n,r,op(),i);return hL(e,o,Jm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Z_(e,n,r,op(),i);return wM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sL(e),r=new BM(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kd,{type:Kd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Kd];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eI()||Qm()||_h()}}const vL=yL;var e0="@firebase/auth",t0="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EL(t){sn(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tI(t)},c=new $D(r,i,s,u);return QD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),sn(new rn("auth-internal",e=>{const n=Ui(e.getProvider("auth").getImmediate());return(r=>new _L(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(e0,t0,wL(t)),mt(e0,t0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL=5*60,IL=ET("authIdTokenMaxAge")||TL;let n0=null;const SL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IL)return;const i=n==null?void 0:n.token;n0!==i&&(n0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Rs(t=vh()){const e=cr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GD(t,{popupRedirectResolver:vL,persistence:[kM,yM,hI]}),r=ET("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=SL(s.toString());fM(n,o,()=>o(n.currentUser)),dM(n,l=>o(l))}}const i=_T("auth");return i&&YD(n,`http://${i}`),n}function AL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",AL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EL("Browser");var CL="firebase",RL="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt(CL,RL,"app");const vI="@firebase/installations",eg="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=1e4,wI=`w:${eg}`,EI="FIS_v2",PL="https://firebaseinstallations.googleapis.com/v1",kL=60*60*1e3,xL="installations",bL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ki=new ur(xL,bL,NL);function TI(t){return t instanceof ln&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II({projectId:t}){return`${PL}/projects/${t}/installations`}function SI(t){return{token:t.token,requestStatus:2,expiresIn:DL(t.expiresIn),creationTime:Date.now()}}async function AI(t,e){const r=(await e.json()).error;return ki.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function CI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function OL(t,{refreshToken:e}){const n=CI(t);return n.append("Authorization",ML(e)),n}async function RI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function DL(t){return Number(t.replace("s","000"))}function ML(t){return`${EI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=II(t),i=CI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:EI,appId:t.appId,sdkVersion:wI},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await RI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:SI(c.authToken)}}else throw await AI("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=/^[cdef][\w-]{21}$/,cp="";function UL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=$L(t);return FL.test(n)?n:cp}catch{return cp}}function $L(t){return VL(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new Map;function xI(t,e){const n=Ih(t);bI(n,e),jL(n,e)}function bI(t,e){const n=kI.get(t);if(n)for(const r of n)r(e)}function jL(t,e){const n=zL();n&&n.postMessage({key:t,fid:e}),BL()}let pi=null;function zL(){return!pi&&"BroadcastChannel"in self&&(pi=new BroadcastChannel("[Firebase] FID Change"),pi.onmessage=t=>{bI(t.data.key,t.data.fid)}),pi}function BL(){kI.size===0&&pi&&(pi.close(),pi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL="firebase-installations-database",qL=1,xi="firebase-installations-store";let Gd=null;function tg(){return Gd||(Gd=bT(WL,qL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xi)}}})),Gd}async function lc(t,e){const n=Ih(t),i=(await tg()).transaction(xi,"readwrite"),s=i.objectStore(xi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&xI(t,e.fid),e}async function NI(t){const e=Ih(t),r=(await tg()).transaction(xi,"readwrite");await r.objectStore(xi).delete(e),await r.done}async function Sh(t,e){const n=Ih(t),i=(await tg()).transaction(xi,"readwrite"),s=i.objectStore(xi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&xI(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(t){let e;const n=await Sh(t.appConfig,r=>{const i=HL(r),s=KL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===cp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function HL(t){const e=t||{fid:UL(),registrationStatus:0};return OI(e)}function KL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ki.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=GL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QL(t)}:{installationEntry:e}}async function GL(t,e){try{const n=await LL(t,e);return lc(t.appConfig,n)}catch(n){throw TI(n)&&n.customData.serverCode===409?await NI(t.appConfig):await lc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QL(t){let e=await r0(t.appConfig);for(;e.registrationStatus===1;)await PI(100),e=await r0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ng(t);return r||n}return e}function r0(t){return Sh(t,e=>{if(!e)throw ki.create("installation-not-found");return OI(e)})}function OI(t){return YL(t)?{fid:t.fid,registrationStatus:0}:t}function YL(t){return t.registrationStatus===1&&t.registrationTime+_I<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XL({appConfig:t,heartbeatServiceProvider:e},n){const r=JL(t,n),i=OL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:wI,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await RI(()=>fetch(r,l));if(u.ok){const c=await u.json();return SI(c)}else throw await AI("Generate Auth Token",u)}function JL(t,{fid:e}){return`${II(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(t,e=!1){let n;const r=await Sh(t.appConfig,s=>{if(!DI(s))throw ki.create("not-registered");const o=s.authToken;if(!e&&tV(o))return s;if(o.requestStatus===1)return n=ZL(t,e),s;{if(!navigator.onLine)throw ki.create("app-offline");const l=rV(s);return n=eV(t,l),l}});return n?await n:r.authToken}async function ZL(t,e){let n=await i0(t.appConfig);for(;n.authToken.requestStatus===1;)await PI(100),n=await i0(t.appConfig);const r=n.authToken;return r.requestStatus===0?rg(t,e):r}function i0(t){return Sh(t,e=>{if(!DI(e))throw ki.create("not-registered");const n=e.authToken;return iV(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function eV(t,e){try{const n=await XL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await lc(t.appConfig,r),n}catch(n){if(TI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await NI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await lc(t.appConfig,r)}throw n}}function DI(t){return t!==void 0&&t.registrationStatus===2}function tV(t){return t.requestStatus===2&&!nV(t)}function nV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+kL}function rV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function iV(t){return t.requestStatus===1&&t.requestTime+_I<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sV(t){const e=t,{installationEntry:n,registrationPromise:r}=await ng(e);return r?r.catch(console.error):rg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oV(t,e=!1){const n=t;return await aV(n),(await rg(n,e)).token}async function aV(t){const{registrationPromise:e}=await ng(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(t){if(!t||!t.options)throw Qd("App Configuration");if(!t.name)throw Qd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Qd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Qd(t){return ki.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="installations",uV="installations-internal",cV=t=>{const e=t.getProvider("app").getImmediate(),n=lV(e),r=cr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},hV=t=>{const e=t.getProvider("app").getImmediate(),n=cr(e,MI).getImmediate();return{getId:()=>sV(n),getToken:i=>oV(n,i)}};function dV(){sn(new rn(MI,cV,"PUBLIC")),sn(new rn(uV,hV,"PRIVATE"))}dV();mt(vI,eg);mt(vI,eg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="analytics",fV="firebase_id",pV="origin",mV=60*1e3,gV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ig="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Xa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},jt=new ur("analytics","Analytics",yV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vV(t){if(!t.startsWith(ig)){const e=jt.create("invalid-gtag-resource",{gtagURL:t});return Nt.warn(e.message),""}return t}function LI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function _V(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function wV(t,e){const n=_V("firebase-js-sdk-policy",{createScriptURL:vV}),r=document.createElement("script"),i=`${ig}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function EV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function TV(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await LI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){Nt.error(l)}t("config",i,s)}async function IV(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await LI(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Nt.error(s)}}function SV(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await IV(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await TV(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Nt.error(l)}}return i}function AV(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=SV(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function CV(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ig)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RV=30,PV=1e3;class kV{constructor(e={},n=PV){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const VI=new kV;function xV(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function bV(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:xV(r)},s=gV.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw jt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function NV(t,e=VI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw jt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw jt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new MV;return setTimeout(async()=>{l.abort()},mV),FI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function FI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=VI){var s;const{appId:o,measurementId:l}=t;try{await OV(r,e)}catch(u){if(l)return Nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await bV(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!DV(c)){if(i.deleteThrottleMetadata(o),l)return Nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?b_(n,i.intervalMillis,RV):b_(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),Nt.debug(`Calling attemptFetch again in ${d} millis`),FI(t,p,r,i)}}function OV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(jt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function DV(t){if(!(t instanceof ln)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class MV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function LV(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VV(){if(ST())try{await AT()}catch(t){return Nt.warn(jt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Nt.warn(jt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function FV(t,e,n,r,i,s,o){var l;const u=NV(t);u.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&Nt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>Nt.error(E)),e.push(u);const c=VV().then(E=>{if(E)return r.getId()}),[d,p]=await Promise.all([u,c]);CV(s)||wV(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[pV]="firebase",m.update=!0,p!=null&&(m[fV]=p),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{constructor(e){this.app=e}_delete(){return delete Zo[this.app.options.appId],Promise.resolve()}}let Zo={},s0=[];const o0={};let Yd="dataLayer",$V="gtag",a0,UI,l0=!1;function jV(){const t=[];if(IT()&&t.push("This is a browser extension environment."),GN()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=jt.create("invalid-analytics-context",{errorInfo:e});Nt.warn(n.message)}}function zV(t,e,n){jV();const r=t.options.appId;if(!r)throw jt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw jt.create("no-api-key");if(Zo[r]!=null)throw jt.create("already-exists",{id:r});if(!l0){EV(Yd);const{wrappedGtag:s,gtagCore:o}=AV(Zo,s0,o0,Yd,$V);UI=s,a0=o,l0=!0}return Zo[r]=FV(t,s0,o0,e,a0,Yd,n),new UV(t)}function BV(t=vh()){t=We(t);const e=cr(t,uc);return e.isInitialized()?e.getImmediate():WV(t)}function WV(t,e={}){const n=cr(t,uc);if(n.isInitialized()){const i=n.getImmediate();if(Ai(e,n.getOptions()))return i;throw jt.create("already-initialized")}return n.initialize({options:e})}function qV(t,e,n,r){t=We(t),LV(UI,Zo[t.app.options.appId],e,n,r).catch(i=>Nt.error(i))}const u0="@firebase/analytics",c0="0.10.4";function HV(){sn(new rn(uc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return zV(r,i,n)},"PUBLIC")),sn(new rn("analytics-internal",t,"PRIVATE")),mt(u0,c0),mt(u0,c0,"esm2017");function t(e){try{const n=e.getProvider(uc).getImmediate();return{logEvent:(r,i,s)=>qV(n,r,i,s)}}catch(n){throw jt.create("interop-component-reg-failed",{reason:n})}}}HV();var h0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _i,$I;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function T(){}T.prototype=y.prototype,_.D=y.prototype,_.prototype=new T,_.prototype.constructor=_,_.C=function(C,k,x){for(var R=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)R[Ye-2]=arguments[Ye];return y.prototype[k].apply(C,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,T){T||(T=0);var C=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)C[k]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(k=0;16>k;++k)C[k]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=_.g[0],T=_.g[1],k=_.g[2];var x=_.g[3],R=y+(x^T&(k^x))+C[0]+3614090360&4294967295;y=T+(R<<7&4294967295|R>>>25),R=x+(k^y&(T^k))+C[1]+3905402710&4294967295,x=y+(R<<12&4294967295|R>>>20),R=k+(T^x&(y^T))+C[2]+606105819&4294967295,k=x+(R<<17&4294967295|R>>>15),R=T+(y^k&(x^y))+C[3]+3250441966&4294967295,T=k+(R<<22&4294967295|R>>>10),R=y+(x^T&(k^x))+C[4]+4118548399&4294967295,y=T+(R<<7&4294967295|R>>>25),R=x+(k^y&(T^k))+C[5]+1200080426&4294967295,x=y+(R<<12&4294967295|R>>>20),R=k+(T^x&(y^T))+C[6]+2821735955&4294967295,k=x+(R<<17&4294967295|R>>>15),R=T+(y^k&(x^y))+C[7]+4249261313&4294967295,T=k+(R<<22&4294967295|R>>>10),R=y+(x^T&(k^x))+C[8]+1770035416&4294967295,y=T+(R<<7&4294967295|R>>>25),R=x+(k^y&(T^k))+C[9]+2336552879&4294967295,x=y+(R<<12&4294967295|R>>>20),R=k+(T^x&(y^T))+C[10]+4294925233&4294967295,k=x+(R<<17&4294967295|R>>>15),R=T+(y^k&(x^y))+C[11]+2304563134&4294967295,T=k+(R<<22&4294967295|R>>>10),R=y+(x^T&(k^x))+C[12]+1804603682&4294967295,y=T+(R<<7&4294967295|R>>>25),R=x+(k^y&(T^k))+C[13]+4254626195&4294967295,x=y+(R<<12&4294967295|R>>>20),R=k+(T^x&(y^T))+C[14]+2792965006&4294967295,k=x+(R<<17&4294967295|R>>>15),R=T+(y^k&(x^y))+C[15]+1236535329&4294967295,T=k+(R<<22&4294967295|R>>>10),R=y+(k^x&(T^k))+C[1]+4129170786&4294967295,y=T+(R<<5&4294967295|R>>>27),R=x+(T^k&(y^T))+C[6]+3225465664&4294967295,x=y+(R<<9&4294967295|R>>>23),R=k+(y^T&(x^y))+C[11]+643717713&4294967295,k=x+(R<<14&4294967295|R>>>18),R=T+(x^y&(k^x))+C[0]+3921069994&4294967295,T=k+(R<<20&4294967295|R>>>12),R=y+(k^x&(T^k))+C[5]+3593408605&4294967295,y=T+(R<<5&4294967295|R>>>27),R=x+(T^k&(y^T))+C[10]+38016083&4294967295,x=y+(R<<9&4294967295|R>>>23),R=k+(y^T&(x^y))+C[15]+3634488961&4294967295,k=x+(R<<14&4294967295|R>>>18),R=T+(x^y&(k^x))+C[4]+3889429448&4294967295,T=k+(R<<20&4294967295|R>>>12),R=y+(k^x&(T^k))+C[9]+568446438&4294967295,y=T+(R<<5&4294967295|R>>>27),R=x+(T^k&(y^T))+C[14]+3275163606&4294967295,x=y+(R<<9&4294967295|R>>>23),R=k+(y^T&(x^y))+C[3]+4107603335&4294967295,k=x+(R<<14&4294967295|R>>>18),R=T+(x^y&(k^x))+C[8]+1163531501&4294967295,T=k+(R<<20&4294967295|R>>>12),R=y+(k^x&(T^k))+C[13]+2850285829&4294967295,y=T+(R<<5&4294967295|R>>>27),R=x+(T^k&(y^T))+C[2]+4243563512&4294967295,x=y+(R<<9&4294967295|R>>>23),R=k+(y^T&(x^y))+C[7]+1735328473&4294967295,k=x+(R<<14&4294967295|R>>>18),R=T+(x^y&(k^x))+C[12]+2368359562&4294967295,T=k+(R<<20&4294967295|R>>>12),R=y+(T^k^x)+C[5]+4294588738&4294967295,y=T+(R<<4&4294967295|R>>>28),R=x+(y^T^k)+C[8]+2272392833&4294967295,x=y+(R<<11&4294967295|R>>>21),R=k+(x^y^T)+C[11]+1839030562&4294967295,k=x+(R<<16&4294967295|R>>>16),R=T+(k^x^y)+C[14]+4259657740&4294967295,T=k+(R<<23&4294967295|R>>>9),R=y+(T^k^x)+C[1]+2763975236&4294967295,y=T+(R<<4&4294967295|R>>>28),R=x+(y^T^k)+C[4]+1272893353&4294967295,x=y+(R<<11&4294967295|R>>>21),R=k+(x^y^T)+C[7]+4139469664&4294967295,k=x+(R<<16&4294967295|R>>>16),R=T+(k^x^y)+C[10]+3200236656&4294967295,T=k+(R<<23&4294967295|R>>>9),R=y+(T^k^x)+C[13]+681279174&4294967295,y=T+(R<<4&4294967295|R>>>28),R=x+(y^T^k)+C[0]+3936430074&4294967295,x=y+(R<<11&4294967295|R>>>21),R=k+(x^y^T)+C[3]+3572445317&4294967295,k=x+(R<<16&4294967295|R>>>16),R=T+(k^x^y)+C[6]+76029189&4294967295,T=k+(R<<23&4294967295|R>>>9),R=y+(T^k^x)+C[9]+3654602809&4294967295,y=T+(R<<4&4294967295|R>>>28),R=x+(y^T^k)+C[12]+3873151461&4294967295,x=y+(R<<11&4294967295|R>>>21),R=k+(x^y^T)+C[15]+530742520&4294967295,k=x+(R<<16&4294967295|R>>>16),R=T+(k^x^y)+C[2]+3299628645&4294967295,T=k+(R<<23&4294967295|R>>>9),R=y+(k^(T|~x))+C[0]+4096336452&4294967295,y=T+(R<<6&4294967295|R>>>26),R=x+(T^(y|~k))+C[7]+1126891415&4294967295,x=y+(R<<10&4294967295|R>>>22),R=k+(y^(x|~T))+C[14]+2878612391&4294967295,k=x+(R<<15&4294967295|R>>>17),R=T+(x^(k|~y))+C[5]+4237533241&4294967295,T=k+(R<<21&4294967295|R>>>11),R=y+(k^(T|~x))+C[12]+1700485571&4294967295,y=T+(R<<6&4294967295|R>>>26),R=x+(T^(y|~k))+C[3]+2399980690&4294967295,x=y+(R<<10&4294967295|R>>>22),R=k+(y^(x|~T))+C[10]+4293915773&4294967295,k=x+(R<<15&4294967295|R>>>17),R=T+(x^(k|~y))+C[1]+2240044497&4294967295,T=k+(R<<21&4294967295|R>>>11),R=y+(k^(T|~x))+C[8]+1873313359&4294967295,y=T+(R<<6&4294967295|R>>>26),R=x+(T^(y|~k))+C[15]+4264355552&4294967295,x=y+(R<<10&4294967295|R>>>22),R=k+(y^(x|~T))+C[6]+2734768916&4294967295,k=x+(R<<15&4294967295|R>>>17),R=T+(x^(k|~y))+C[13]+1309151649&4294967295,T=k+(R<<21&4294967295|R>>>11),R=y+(k^(T|~x))+C[4]+4149444226&4294967295,y=T+(R<<6&4294967295|R>>>26),R=x+(T^(y|~k))+C[11]+3174756917&4294967295,x=y+(R<<10&4294967295|R>>>22),R=k+(y^(x|~T))+C[2]+718787259&4294967295,k=x+(R<<15&4294967295|R>>>17),R=T+(x^(k|~y))+C[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,_.g[2]=_.g[2]+k&4294967295,_.g[3]=_.g[3]+x&4294967295}r.prototype.u=function(_,y){y===void 0&&(y=_.length);for(var T=y-this.blockSize,C=this.B,k=this.h,x=0;x<y;){if(k==0)for(;x<=T;)i(this,_,x),x+=this.blockSize;if(typeof _=="string"){for(;x<y;)if(C[k++]=_.charCodeAt(x++),k==this.blockSize){i(this,C),k=0;break}}else for(;x<y;)if(C[k++]=_[x++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;var T=8*this.o;for(y=_.length-8;y<_.length;++y)_[y]=T&255,T/=256;for(this.u(_),_=Array(16),y=T=0;4>y;++y)for(var C=0;32>C;C+=8)_[T++]=this.g[y]>>>C&255;return _};function s(_,y){var T=l;return Object.prototype.hasOwnProperty.call(T,_)?T[_]:T[_]=y(_)}function o(_,y){this.h=y;for(var T=[],C=!0,k=_.length-1;0<=k;k--){var x=_[k]|0;C&&x==y||(T[k]=x,C=!1)}this.g=T}var l={};function u(_){return-128<=_&&128>_?s(_,function(y){return new o([y|0],0>y?-1:0)}):new o([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return p;if(0>_)return P(c(-_));for(var y=[],T=1,C=0;_>=T;C++)y[C]=_/T|0,T*=4294967296;return new o(y,0)}function d(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return P(d(_.substring(1),y));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),C=p,k=0;k<_.length;k+=8){var x=Math.min(8,_.length-k),R=parseInt(_.substring(k,k+x),y);8>x?(x=c(Math.pow(y,x)),C=C.j(x).add(c(R))):(C=C.j(T),C=C.add(c(R)))}return C}var p=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(S(this))return-P(this).m();for(var _=0,y=1,T=0;T<this.g.length;T++){var C=this.i(T);_+=(0<=C?C:4294967296+C)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A(this))return"0";if(S(this))return"-"+P(this).toString(_);for(var y=c(Math.pow(_,6)),T=this,C="";;){var k=N(T,y).g;T=w(T,k.j(y));var x=((0<T.g.length?T.g[0]:T.h)>>>0).toString(_);if(T=k,A(T))return x+C;for(;6>x.length;)x="0"+x;C=x+C}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function A(_){if(_.h!=0)return!1;for(var y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function S(_){return _.h==-1}t.l=function(_){return _=w(this,_),S(_)?-1:A(_)?0:1};function P(_){for(var y=_.g.length,T=[],C=0;C<y;C++)T[C]=~_.g[C];return new o(T,~_.h).add(m)}t.abs=function(){return S(this)?P(this):this},t.add=function(_){for(var y=Math.max(this.g.length,_.g.length),T=[],C=0,k=0;k<=y;k++){var x=C+(this.i(k)&65535)+(_.i(k)&65535),R=(x>>>16)+(this.i(k)>>>16)+(_.i(k)>>>16);C=R>>>16,x&=65535,R&=65535,T[k]=R<<16|x}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(_,y){return _.add(P(y))}t.j=function(_){if(A(this)||A(_))return p;if(S(this))return S(_)?P(this).j(P(_)):P(P(this).j(_));if(S(_))return P(this.j(P(_)));if(0>this.l(E)&&0>_.l(E))return c(this.m()*_.m());for(var y=this.g.length+_.g.length,T=[],C=0;C<2*y;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<_.g.length;k++){var x=this.i(C)>>>16,R=this.i(C)&65535,Ye=_.i(k)>>>16,Ln=_.i(k)&65535;T[2*C+2*k]+=R*Ln,v(T,2*C+2*k),T[2*C+2*k+1]+=x*Ln,v(T,2*C+2*k+1),T[2*C+2*k+1]+=R*Ye,v(T,2*C+2*k+1),T[2*C+2*k+2]+=x*Ye,v(T,2*C+2*k+2)}for(C=0;C<y;C++)T[C]=T[2*C+1]<<16|T[2*C];for(C=y;C<2*y;C++)T[C]=0;return new o(T,0)};function v(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function I(_,y){this.g=_,this.h=y}function N(_,y){if(A(y))throw Error("division by zero");if(A(_))return new I(p,p);if(S(_))return y=N(P(_),y),new I(P(y.g),P(y.h));if(S(y))return y=N(_,P(y)),new I(P(y.g),y.h);if(30<_.g.length){if(S(_)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,C=y;0>=C.l(_);)T=D(T),C=D(C);var k=M(T,1),x=M(C,1);for(C=M(C,2),T=M(T,2);!A(C);){var R=x.add(C);0>=R.l(_)&&(k=k.add(T),x=R),C=M(C,1),T=M(T,1)}return y=w(_,k.j(y)),new I(k,y)}for(k=p;0<=_.l(y);){for(T=Math.max(1,Math.floor(_.m()/y.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),x=c(T),R=x.j(y);S(R)||0<R.l(_);)T-=C,x=c(T),R=x.j(y);A(x)&&(x=m),k=k.add(x),_=w(_,R)}return new I(k,_)}t.A=function(_){return N(this,_).h},t.and=function(_){for(var y=Math.max(this.g.length,_.g.length),T=[],C=0;C<y;C++)T[C]=this.i(C)&_.i(C);return new o(T,this.h&_.h)},t.or=function(_){for(var y=Math.max(this.g.length,_.g.length),T=[],C=0;C<y;C++)T[C]=this.i(C)|_.i(C);return new o(T,this.h|_.h)},t.xor=function(_){for(var y=Math.max(this.g.length,_.g.length),T=[],C=0;C<y;C++)T[C]=this.i(C)^_.i(C);return new o(T,this.h^_.h)};function D(_){for(var y=_.g.length+1,T=[],C=0;C<y;C++)T[C]=_.i(C)<<1|_.i(C-1)>>>31;return new o(T,_.h)}function M(_,y){var T=y>>5;y%=32;for(var C=_.g.length-T,k=[],x=0;x<C;x++)k[x]=0<y?_.i(x+T)>>>y|_.i(x+T+1)<<32-y:_.i(x+T);return new o(k,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$I=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,_i=o}).apply(typeof h0<"u"?h0:typeof self<"u"?self:typeof window<"u"?window:{});var Gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jI,zI,Uo,BI,_u,hp,WI,qI,HI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gl=="object"&&Gl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in f))break e;f=f[b]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,b={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function E(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,b,O){for(var j=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)j[pe-2]=arguments[pe];return h.prototype[b].apply(g,j)}}function S(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const b=a.length||0,O=g.length||0;a.length=b+O;for(let j=0;j<O;j++)a[b+j]=g[j]}else a.push(g)}}class w{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var D=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function M(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function _(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,h){let f,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(f in g)a[f]=g[f];for(let O=0;O<T.length;O++)f=T[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function k(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function x(a){l.setTimeout(()=>{throw a},0)}function R(){var a=Y;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ye{constructor(){this.h=this.g=null}add(h,f){const g=Ln.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ln=new w(()=>new ni,a=>a.reset());class ni{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Vn,z=!1,Y=new Ye,J=()=>{const a=l.Promise.resolve(void 0);Vn=()=>{a.then(Te)}};var Te=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(f){x(f)}var h=Ln;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Fn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Un(a,h){if(be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(D){e:{try{N(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:$n[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Un.aa.h.call(this)}}A(Un,be);var $n={2:"touch",3:"pen",4:"mouse"};Un.prototype.h=function(){Un.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var jn="closure_listenable_"+(1e6*Math.random()|0),EA=0;function TA(a,h,f,g,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=b,this.key=++EA,this.da=this.fa=!1}function hl(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function dl(a){this.src=a,this.g={},this.h=0}dl.prototype.add=function(a,h,f,g,b){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var j=$h(a,h,g,b);return-1<j?(h=a[j],f||(h.fa=!1)):(h=new TA(h,this.src,O,!!g,b),h.fa=f,a.push(h)),h};function Uh(a,h){var f=h.type;if(f in a.g){var g=a.g[f],b=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=b)&&Array.prototype.splice.call(g,b,1),O&&(hl(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function $h(a,h,f,g){for(var b=0;b<a.length;++b){var O=a[b];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return b}return-1}var jh="closure_lm_"+(1e6*Math.random()|0),zh={};function jg(a,h,f,g,b){if(Array.isArray(h)){for(var O=0;O<h.length;O++)jg(a,h[O],f,g,b);return null}return f=Wg(f),a&&a[jn]?a.K(h,f,c(g)?!!g.capture:!!g,b):IA(a,h,f,!1,g,b)}function IA(a,h,f,g,b,O){if(!h)throw Error("Invalid event type");var j=c(b)?!!b.capture:!!b,pe=Wh(a);if(pe||(a[jh]=pe=new dl(a)),f=pe.add(h,f,g,j,O),f.proxy)return f;if(g=SA(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Fn||(b=j),b===void 0&&(b=!1),a.addEventListener(h.toString(),g,b);else if(a.attachEvent)a.attachEvent(Bg(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function SA(){function a(f){return h.call(a.src,a.listener,f)}const h=AA;return a}function zg(a,h,f,g,b){if(Array.isArray(h))for(var O=0;O<h.length;O++)zg(a,h[O],f,g,b);else g=c(g)?!!g.capture:!!g,f=Wg(f),a&&a[jn]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=$h(O,f,g,b),-1<f&&(hl(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=Wh(a))&&(h=a.g[h.toString()],a=-1,h&&(a=$h(h,f,g,b)),(f=-1<a?h[a]:null)&&Bh(f))}function Bh(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[jn])Uh(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Bg(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Wh(h))?(Uh(f,a),f.h==0&&(f.src=null,h[jh]=null)):hl(a)}}}function Bg(a){return a in zh?zh[a]:zh[a]="on"+a}function AA(a,h){if(a.da)a=!0;else{h=new Un(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Bh(a),a=f.call(g,h)}return a}function Wh(a){return a=a[jh],a instanceof dl?a:null}var qh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wg(a){return typeof a=="function"?a:(a[qh]||(a[qh]=function(h){return a.handleEvent(h)}),a[qh])}function ot(){fe.call(this),this.i=new dl(this),this.M=this,this.F=null}A(ot,fe),ot.prototype[jn]=!0,ot.prototype.removeEventListener=function(a,h,f,g){zg(this,a,h,f,g)};function vt(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new be(h,a);else if(h instanceof be)h.target=h.target||a;else{var b=h;h=new be(g,a),C(h,b)}if(b=!0,f)for(var O=f.length-1;0<=O;O--){var j=h.g=f[O];b=fl(j,g,!0,h)&&b}if(j=h.g=a,b=fl(j,g,!0,h)&&b,b=fl(j,g,!1,h)&&b,f)for(O=0;O<f.length;O++)j=h.g=f[O],b=fl(j,g,!1,h)&&b}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)hl(f[g]);delete a.g[h],a.h--}}this.F=null},ot.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ot.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function fl(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,O=0;O<h.length;++O){var j=h[O];if(j&&!j.da&&j.capture==f){var pe=j.listener,Xe=j.ha||j.src;j.fa&&Uh(a.i,j),b=pe.call(Xe,g)!==!1&&b}}return b&&!g.defaultPrevented}function qg(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Hg(a){a.g=qg(()=>{a.g=null,a.i&&(a.i=!1,Hg(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class CA extends fe{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Hg(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oo(a){fe.call(this),this.h=a,this.g={}}A(oo,fe);var Kg=[];function Gg(a){M(a.g,function(h,f){this.g.hasOwnProperty(f)&&Bh(h)},a),a.g={}}oo.prototype.N=function(){oo.aa.N.call(this),Gg(this)},oo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hh=l.JSON.stringify,RA=l.JSON.parse,PA=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Kh(){}Kh.prototype.h=null;function Qg(a){return a.h||(a.h=a.i())}function Yg(){}var ao={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gh(){be.call(this,"d")}A(Gh,be);function Qh(){be.call(this,"c")}A(Qh,be);var ri={},Xg=null;function pl(){return Xg=Xg||new ot}ri.La="serverreachability";function Jg(a){be.call(this,ri.La,a)}A(Jg,be);function lo(a){const h=pl();vt(h,new Jg(h))}ri.STAT_EVENT="statevent";function Zg(a,h){be.call(this,ri.STAT_EVENT,a),this.stat=h}A(Zg,be);function _t(a){const h=pl();vt(h,new Zg(h,a))}ri.Ma="timingevent";function ey(a,h){be.call(this,ri.Ma,a),this.size=h}A(ey,be);function uo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function co(){this.g=!0}co.prototype.xa=function(){this.g=!1};function kA(a,h,f,g,b,O){a.info(function(){if(a.g)if(O)for(var j="",pe=O.split("&"),Xe=0;Xe<pe.length;Xe++){var ie=pe[Xe].split("=");if(1<ie.length){var at=ie[0];ie=ie[1];var lt=at.split("_");j=2<=lt.length&&lt[1]=="type"?j+(at+"="+ie+"&"):j+(at+"=redacted&")}}else j=null;else j=O;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+f+`
`+j})}function xA(a,h,f,g,b,O,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+f+`
`+O+" "+j})}function zi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+NA(a,f)+(g?" "+g:"")})}function bA(a,h){a.info(function(){return"TIMEOUT: "+h})}co.prototype.info=function(){};function NA(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var O=b[0];if(O!="noop"&&O!="stop"&&O!="close")for(var j=1;j<b.length;j++)b[j]=""}}}}return Hh(f)}catch{return h}}var ml={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ty={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yh;function gl(){}A(gl,Kh),gl.prototype.g=function(){return new XMLHttpRequest},gl.prototype.i=function(){return{}},Yh=new gl;function hr(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new oo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ny}function ny(){this.i=null,this.g="",this.h=!1}var ry={},Xh={};function Jh(a,h,f){a.L=1,a.v=wl(zn(h)),a.m=f,a.P=!0,iy(a,null)}function iy(a,h){a.F=Date.now(),yl(a),a.A=zn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),vy(f.i,"t",g),a.C=0,f=a.j.J,a.h=new ny,a.g=Ly(a.j,f?h:null,!a.m),0<a.O&&(a.M=new CA(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Kg[0]=b.toString()),b=Kg);for(var O=0;O<b.length;O++){var j=jg(f,b[O],g||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),lo(),kA(a.i,a.u,a.A,a.l,a.R,a.m)}hr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Bn(a)==3?h.j():this.Y(a)},hr.prototype.Y=function(a){try{if(a==this.g)e:{const lt=Bn(this.g);var h=this.g.Ba();const qi=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||Ay(this.g)))){this.J||lt!=4||h==7||(h==8||0>=qi?lo(3):lo(2)),Zh(this);var f=this.g.Z();this.X=f;t:if(sy(this)){var g=Ay(this.g);a="";var b=g.length,O=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ii(this),ho(this);var j="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==b-1)});g.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,xA(this.i,this.u,this.A,this.l,this.R,lt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Xe=this.g;if((pe=Xe.g?Xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(pe)){var ie=pe;break t}}ie=null}if(f=ie)zi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ed(this,f);else{this.o=!1,this.s=3,_t(12),ii(this),ho(this);break e}}if(this.P){f=!0;let un;for(;!this.J&&this.C<j.length;)if(un=OA(this,j),un==Xh){lt==4&&(this.s=4,_t(14),f=!1),zi(this.i,this.l,null,"[Incomplete Response]");break}else if(un==ry){this.s=4,_t(15),zi(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else zi(this.i,this.l,un,null),ed(this,un);if(sy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||j.length!=0||this.h.h||(this.s=1,_t(16),f=!1),this.o=this.o&&f,!f)zi(this.i,this.l,j,"[Invalid Chunked Response]"),ii(this),ho(this);else if(0<j.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),od(at),at.M=!0,_t(11))}}else zi(this.i,this.l,j,null),ed(this,j);lt==4&&ii(this),this.o&&!this.J&&(lt==4?Ny(this.j,this):(this.o=!1,yl(this)))}else YA(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),ii(this),ho(this)}}}catch{}finally{}};function sy(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function OA(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Xh:(f=Number(h.substring(f,g)),isNaN(f)?ry:(g+=1,g+f>h.length?Xh:(h=h.slice(g,g+f),a.C=g+f,h)))}hr.prototype.cancel=function(){this.J=!0,ii(this)};function yl(a){a.S=Date.now()+a.I,oy(a,a.I)}function oy(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=uo(m(a.ba,a),h)}function Zh(a){a.B&&(l.clearTimeout(a.B),a.B=null)}hr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(bA(this.i,this.A),this.L!=2&&(lo(),_t(17)),ii(this),this.s=2,ho(this)):oy(this,this.S-a)};function ho(a){a.j.G==0||a.J||Ny(a.j,a)}function ii(a){Zh(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Gg(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ed(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||td(f.h,a))){if(!a.K&&td(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Al(f),Il(f);else break e;sd(f),_t(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=uo(m(f.Za,f),6e3));if(1>=uy(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else oi(f,11)}else if((a.K||f.g==a)&&Al(f),!v(h))for(b=f.Da.g.parse(h),h=0;h<b.length;h++){let ie=b[h];if(f.T=ie[0],ie=ie[1],f.G==2)if(ie[0]=="c"){f.K=ie[1],f.ia=ie[2];const at=ie[3];at!=null&&(f.la=at,f.j.info("VER="+f.la));const lt=ie[4];lt!=null&&(f.Aa=lt,f.j.info("SVER="+f.Aa));const qi=ie[5];qi!=null&&typeof qi=="number"&&0<qi&&(g=1.5*qi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const un=a.g;if(un){const Rl=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rl){var O=g.h;O.g||Rl.indexOf("spdy")==-1&&Rl.indexOf("quic")==-1&&Rl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(nd(O,O.h),O.h=null))}if(g.D){const ad=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;ad&&(g.ya=ad,ye(g.I,g.D,ad))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var j=a;if(g.qa=My(g,g.J?g.ia:null,g.W),j.K){cy(g.h,j);var pe=j,Xe=g.L;Xe&&(pe.I=Xe),pe.B&&(Zh(pe),yl(pe)),g.g=j}else xy(g);0<f.i.length&&Sl(f)}else ie[0]!="stop"&&ie[0]!="close"||oi(f,7);else f.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?oi(f,7):id(f):ie[0]!="noop"&&f.l&&f.l.ta(ie),f.v=0)}}lo(4)}catch{}}var DA=class{constructor(a,h){this.g=a,this.map=h}};function ay(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ly(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function uy(a){return a.h?1:a.g?a.g.size:0}function td(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function nd(a,h){a.g?a.g.add(h):a.h=h}function cy(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ay.prototype.cancel=function(){if(this.i=hy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function hy(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return S(a.i)}function MA(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function LA(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function dy(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=LA(a),g=MA(a),b=g.length,O=0;O<b;O++)h.call(void 0,g[O],f&&f[O],a)}var fy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VA(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),b=null;if(0<=g){var O=a[f].substring(0,g);b=a[f].substring(g+1)}else O=a[f];h(O,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function si(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof si){this.h=a.h,vl(this,a.j),this.o=a.o,this.g=a.g,_l(this,a.s),this.l=a.l;var h=a.i,f=new mo;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),py(this,f),this.m=a.m}else a&&(h=String(a).match(fy))?(this.h=!1,vl(this,h[1]||"",!0),this.o=fo(h[2]||""),this.g=fo(h[3]||"",!0),_l(this,h[4]),this.l=fo(h[5]||"",!0),py(this,h[6]||"",!0),this.m=fo(h[7]||"")):(this.h=!1,this.i=new mo(null,this.h))}si.prototype.toString=function(){var a=[],h=this.j;h&&a.push(po(h,my,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(po(h,my,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(po(f,f.charAt(0)=="/"?$A:UA,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",po(f,zA)),a.join("")};function zn(a){return new si(a)}function vl(a,h,f){a.j=f?fo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function _l(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function py(a,h,f){h instanceof mo?(a.i=h,BA(a.i,a.h)):(f||(h=po(h,jA)),a.i=new mo(h,a.h))}function ye(a,h,f){a.i.set(h,f)}function wl(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function fo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function po(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,FA),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function FA(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var my=/[#\/\?@]/g,UA=/[#\?:]/g,$A=/[#\?]/g,jA=/[#\?@]/g,zA=/#/g;function mo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function dr(a){a.g||(a.g=new Map,a.h=0,a.i&&VA(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=mo.prototype,t.add=function(a,h){dr(this),this.i=null,a=Bi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function gy(a,h){dr(a),h=Bi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function yy(a,h){return dr(a),h=Bi(a,h),a.g.has(h)}t.forEach=function(a,h){dr(this),this.g.forEach(function(f,g){f.forEach(function(b){a.call(h,b,g,this)},this)},this)},t.na=function(){dr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const b=a[g];for(let O=0;O<b.length;O++)f.push(h[g])}return f},t.V=function(a){dr(this);let h=[];if(typeof a=="string")yy(this,a)&&(h=h.concat(this.g.get(Bi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return dr(this),this.i=null,a=Bi(this,a),yy(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function vy(a,h,f){gy(a,h),0<f.length&&(a.i=null,a.g.set(Bi(a,h),S(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var b=O;j[g]!==""&&(b+="="+encodeURIComponent(String(j[g]))),a.push(b)}}return this.i=a.join("&")};function Bi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function BA(a,h){h&&!a.j&&(dr(a),a.i=null,a.g.forEach(function(f,g){var b=g.toLowerCase();g!=b&&(gy(this,g),vy(this,b,f))},a)),a.j=h}function WA(a,h){const f=new co;if(l.Image){const g=new Image;g.onload=E(fr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=E(fr,f,"TestLoadImage: error",!1,h,g),g.onabort=E(fr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=E(fr,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function qA(a,h){const f=new co,g=new AbortController,b=setTimeout(()=>{g.abort(),fr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(b),O.ok?fr(f,"TestPingServer: ok",!0,h):fr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),fr(f,"TestPingServer: error",!1,h)})}function fr(a,h,f,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(f)}catch{}}function HA(){this.g=new PA}function KA(a,h,f){const g=f||"";try{dy(a,function(b,O){let j=b;c(b)&&(j=Hh(b)),h.push(g+O+"="+encodeURIComponent(j))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function go(a){this.l=a.Ub||null,this.j=a.eb||!1}A(go,Kh),go.prototype.g=function(){return new El(this.l,this.j)},go.prototype.i=function(a){return function(){return a}}({});function El(a,h){ot.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(El,ot),t=El.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,vo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,vo(this)),this.g&&(this.readyState=3,vo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_y(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function _y(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?yo(this):vo(this),this.readyState==3&&_y(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,yo(this))},t.Qa=function(a){this.g&&(this.response=a,yo(this))},t.ga=function(){this.g&&yo(this)};function yo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,vo(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function vo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(El.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function wy(a){let h="";return M(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function rd(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=wy(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ye(a,h,f))}function Re(a){ot.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Re,ot);var GA=/^https?$/i,QA=["POST","PUT"];t=Re.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yh.g(),this.v=this.o?Qg(this.o):Qg(Yh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Ey(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)f.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(QA,h,void 0))||g||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,j]of f)this.g.setRequestHeader(O,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sy(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Ey(this,O)}};function Ey(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Ty(a),Tl(a)}function Ty(a){a.A||(a.A=!0,vt(a,"complete"),vt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,vt(this,"complete"),vt(this,"abort"),Tl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tl(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Iy(this):this.bb())},t.bb=function(){Iy(this)};function Iy(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Bn(a)!=4||a.Z()!=2)){if(a.u&&Bn(a)==4)qg(a.Ea,0,a);else if(vt(a,"readystatechange"),Bn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=j===0){var b=String(a.D).match(fy)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),g=!GA.test(b?b.toLowerCase():"")}f=g}if(f)vt(a,"complete"),vt(a,"success");else{a.m=6;try{var O=2<Bn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Ty(a)}}finally{Tl(a)}}}}function Tl(a,h){if(a.g){Sy(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||vt(a,"ready");try{f.onreadystatechange=g}catch{}}}function Sy(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),RA(h)}};function Ay(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function YA(a){const h={};a=(a.g&&2<=Bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var f=k(a[g]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[b]||[];h[b]=O,O.push(f)}_(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _o(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Cy(a){this.Aa=0,this.i=[],this.j=new co,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_o("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_o("baseRetryDelayMs",5e3,a),this.cb=_o("retryDelaySeedMs",1e4,a),this.Wa=_o("forwardChannelMaxRetries",2,a),this.wa=_o("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ay(a&&a.concurrentRequestLimit),this.Da=new HA,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cy.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){_t(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=My(this,null,this.W),Sl(this)};function id(a){if(Ry(a),a.G==3){var h=a.U++,f=zn(a.I);if(ye(f,"SID",a.K),ye(f,"RID",h),ye(f,"TYPE","terminate"),wo(a,f),h=new hr(a,a.j,h),h.L=2,h.v=wl(zn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ly(h.j,null),h.g.ea(h.v)),h.F=Date.now(),yl(h)}Dy(a)}function Il(a){a.g&&(od(a),a.g.cancel(),a.g=null)}function Ry(a){Il(a),a.u&&(l.clearTimeout(a.u),a.u=null),Al(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Sl(a){if(!ly(a.h)&&!a.s){a.s=!0;var h=a.Ga;Vn||J(),z||(Vn(),z=!0),Y.add(h,a),a.B=0}}function XA(a,h){return uy(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=uo(m(a.Ga,a,h),Oy(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new hr(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),C(O,this.S)):O=this.S),this.m!==null||this.O||(b.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=ky(this,b,h),f=zn(this.I),ye(f,"RID",a),ye(f,"CVER",22),this.D&&ye(f,"X-HTTP-Session-Id",this.D),wo(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(wy(O)))+"&"+h:this.m&&rd(f,this.m,O)),nd(this.h,b),this.Ua&&ye(f,"TYPE","init"),this.P?(ye(f,"$req",h),ye(f,"SID","null"),b.T=!0,Jh(b,f,null)):Jh(b,f,h),this.G=2}}else this.G==3&&(a?Py(this,a):this.i.length==0||ly(this.h)||Py(this))};function Py(a,h){var f;h?f=h.l:f=a.U++;const g=zn(a.I);ye(g,"SID",a.K),ye(g,"RID",f),ye(g,"AID",a.T),wo(a,g),a.m&&a.o&&rd(g,a.m,a.o),f=new hr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=ky(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),nd(a.h,f),Jh(f,g,h)}function wo(a,h){a.H&&M(a.H,function(f,g){ye(h,g,f)}),a.l&&dy({},function(f,g){ye(h,g,f)})}function ky(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var b=a.i;let O=-1;for(;;){const j=["count="+f];O==-1?0<f?(O=b[0].g,j.push("ofs="+O)):O=0:j.push("ofs="+O);let pe=!0;for(let Xe=0;Xe<f;Xe++){let ie=b[Xe].g;const at=b[Xe].map;if(ie-=O,0>ie)O=Math.max(0,b[Xe].g-100),pe=!1;else try{KA(at,j,"req"+ie+"_")}catch{g&&g(at)}}if(pe){g=j.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function xy(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Vn||J(),z||(Vn(),z=!0),Y.add(h,a),a.v=0}}function sd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=uo(m(a.Fa,a),Oy(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,by(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=uo(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Il(this),by(this))};function od(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function by(a){a.g=new hr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=zn(a.qa);ye(h,"RID","rpc"),ye(h,"SID",a.K),ye(h,"AID",a.T),ye(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(h,"TO",a.ja),ye(h,"TYPE","xmlhttp"),wo(a,h),a.m&&a.o&&rd(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=wl(zn(h)),f.m=null,f.P=!0,iy(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Il(this),sd(this),_t(19))};function Al(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ny(a,h){var f=null;if(a.g==h){Al(a),od(a),a.g=null;var g=2}else if(td(a.h,h))f=h.D,cy(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;g=pl(),vt(g,new ey(g,f)),Sl(a)}else xy(a);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&XA(a,h)||g==2&&sd(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),b){case 1:oi(a,5);break;case 4:oi(a,10);break;case 3:oi(a,6);break;default:oi(a,2)}}}function Oy(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function oi(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const b=!g;g=new si(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||vl(g,"https"),wl(g),b?WA(g.toString(),f):qA(g.toString(),f)}else _t(2);a.G=0,a.l&&a.l.sa(h),Dy(a),Ry(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Dy(a){if(a.G=0,a.ka=[],a.l){const h=hy(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.ra()}}function My(a,h,f){var g=f instanceof si?zn(f):new si(f);if(g.g!="")h&&(g.g=h+"."+g.g),_l(g,g.s);else{var b=l.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var O=new si(null);g&&vl(O,g),h&&(O.g=h),b&&_l(O,b),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&ye(g,f,h),ye(g,"VER",a.la),wo(a,g),g}function Ly(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Re(new go({eb:f})):new Re(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vy(){}t=Vy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Cl(){}Cl.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){ot.call(this),this.g=new Cy(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Wi(this)}A(Dt,ot),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){id(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Hh(a),a=f);h.i.push(new DA(h.Ya++,a)),h.G==3&&Sl(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,id(this.g),delete this.g,Dt.aa.N.call(this)};function Fy(a){Gh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(Fy,Gh);function Uy(){Qh.call(this),this.status=1}A(Uy,Qh);function Wi(a){this.g=a}A(Wi,Vy),Wi.prototype.ua=function(){vt(this.g,"a")},Wi.prototype.ta=function(a){vt(this.g,new Fy(a))},Wi.prototype.sa=function(a){vt(this.g,new Uy)},Wi.prototype.ra=function(){vt(this.g,"b")},Cl.prototype.createWebChannel=Cl.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,HI=function(){return new Cl},qI=function(){return pl()},WI=ri,hp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ml.NO_ERROR=0,ml.TIMEOUT=8,ml.HTTP_ERROR=6,_u=ml,ty.COMPLETE="complete",BI=ty,Yg.EventType=ao,ao.OPEN="a",ao.CLOSE="b",ao.ERROR="c",ao.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Uo=Yg,zI=go,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,jI=Re}).apply(typeof Gl<"u"?Gl:typeof self<"u"?self:typeof window<"u"?window:{});const d0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new Xa("@firebase/firestore");function bo(){return bi.logLevel}function W(t,...e){if(bi.logLevel<=ee.DEBUG){const n=e.map(sg);bi.debug(`Firestore (${to}): ${t}`,...n)}}function sr(t,...e){if(bi.logLevel<=ee.ERROR){const n=e.map(sg);bi.error(`Firestore (${to}): ${t}`,...n)}}function Us(t,...e){if(bi.logLevel<=ee.WARN){const n=e.map(sg);bi.warn(`Firestore (${to}): ${t}`,...n)}}function sg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${to}) INTERNAL ASSERTION FAILED: `+t;throw sr(e),new Error(e)}function le(t,e){t||K()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class GV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QV{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new KI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new ft(e)}}class YV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new YV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new JV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=e4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function $s(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Be(0,0))}static max(){return new G(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Oa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Oa{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const t4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Oa{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return t4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(me.fromString(e))}static fromName(e){return new H(me.fromString(e).popFirst(5))}static empty(){return new H(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new me(e.slice()))}}function n4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new qr(i,H.empty(),e)}function r4(t){return new qr(t.readTime,t.key,-1)}class qr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qr(G.min(),H.empty(),-1)}static max(){return new qr(G.max(),H.empty(),-1)}}function i4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class o4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==s4)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function a4(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function rl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}og.oe=-1;function il(t){return t==null}function cc(t){return t===0&&1/t==-1/0}function l4(t){return typeof t=="number"&&Number.isInteger(t)&&!cc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $i(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function QI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ql(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ql(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ql(this.root,e,this.comparator,!0)}}class Ql{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=i??Ze.EMPTY,this.right=s??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new p0(this.data.getIterator())}getIteratorFrom(e){return new p0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class p0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new rt(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new YI("Invalid base64 string: "+s):s}}(e);return new yt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const u4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(le(!!t),typeof t=="string"){let e=0;const n=u4.exec(t);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ni(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lg(t){const e=t.mapValue.fields.__previous_value__;return ag(e)?lg(e):e}function Da(t){const e=Hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Ma{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ma("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ma&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ag(t)?4:h4(t)?9007199254740991:10:K()}function On(t,e){if(t===e)return!0;const n=Oi(t);if(n!==Oi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Da(t).isEqual(Da(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Hr(i.timestampValue),l=Hr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ni(i.bytesValue).isEqual(Ni(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),l=Le(s.doubleValue);return o===l?cc(o)===cc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return $s(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(f0(o)!==f0(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!On(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function La(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function js(t,e){if(t===e)return 0;const n=Oi(t),r=Oi(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Le(s.integerValue||s.doubleValue),u=Le(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return m0(t.timestampValue,e.timestampValue);case 4:return m0(Da(t),Da(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ni(s),u=Ni(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ae(l[c],u[c]);if(d!==0)return d}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Le(s.latitude),Le(o.latitude));return l!==0?l:ae(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const d=js(l[c],u[c]);if(d)return d}return ae(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Yl.mapValue&&o===Yl.mapValue)return 0;if(s===Yl.mapValue)return 1;if(o===Yl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ae(u[p],d[p]);if(m!==0)return m;const E=js(l[u[p]],c[d[p]]);if(E!==0)return E}return ae(u.length,d.length)}(t.mapValue,e.mapValue);default:throw K()}}function m0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Hr(t),r=Hr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function zs(t){return dp(t)}function dp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ni(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dp(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function fp(t){return!!t&&"integerValue"in t}function ug(t){return!!t&&"arrayValue"in t}function g0(t){return!!t&&"nullValue"in t}function y0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wu(t){return!!t&&"mapValue"in t}function ea(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $i(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ea(t.arrayValue.values[n]);return e}return Object.assign({},t)}function h4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ea(n)}setAll(e){let n=tt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ea(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());wu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];wu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$i(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Et(ea(this.value))}}function XI(t){const e=[];return $i(t.fields,(n,r)=>{const i=new tt([n]);if(wu(r)){const s=XI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ke(e,0,G.min(),G.min(),G.min(),Et.empty(),0)}static newFoundDocument(e,n,r,i){return new Ke(e,1,n,G.min(),r,i,0)}static newNoDocument(e,n){return new Ke(e,2,n,G.min(),G.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,G.min(),G.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n){this.position=e,this.inclusive=n}}function v0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=js(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n="asc"){this.field=e,this.dir=n}}function d4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{}class je extends JI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new p4(e,n,r):n==="array-contains"?new y4(e,r):n==="in"?new v4(e,r):n==="not-in"?new _4(e,r):n==="array-contains-any"?new w4(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new m4(e,r):new g4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(js(n,this.value)):n!==null&&Oi(this.value)===Oi(n)&&this.matchesComparison(js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends JI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Dn(e,n)}matches(e){return ZI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ZI(t){return t.op==="and"}function eS(t){return f4(t)&&ZI(t)}function f4(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function pp(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+zs(t.value);if(eS(t))return t.filters.map(e=>pp(e)).join(",");{const e=t.filters.map(n=>pp(n)).join(",");return`${t.op}(${e})`}}function tS(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&On(r.value,i.value)}(t,e):t instanceof Dn?function(r,i){return i instanceof Dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&tS(o,i.filters[l]),!0):!1}(t,e):void K()}function nS(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${zs(n.value)}`}(t):t instanceof Dn?function(n){return n.op.toString()+" {"+n.getFilters().map(nS).join(" ,")+"}"}(t):"Filter"}class p4 extends je{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class m4 extends je{constructor(e,n){super(e,"in",n),this.keys=rS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class g4 extends je{constructor(e,n){super(e,"not-in",n),this.keys=rS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class y4 extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ug(n)&&La(n.arrayValue,this.value)}}class v4 extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&La(this.value.arrayValue,n)}}class _4 extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(La(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!La(this.value.arrayValue,n)}}class w4 extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ug(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>La(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function w0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new E4(t,e,n,r,i,s,o)}function cg(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),il(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zs(r)).join(",")),e.ue=n}return e.ue}function hg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!d4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_0(t.startAt,e.startAt)&&_0(t.endAt,e.endAt)}function mp(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function T4(t,e,n,r,i,s,o,l){return new Ah(t,e,n,r,i,s,o,l)}function dg(t){return new Ah(t)}function E0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function I4(t){return t.collectionGroup!==null}function ta(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new dc(s,r))}),n.has(tt.keyField().canonicalString())||e.ce.push(new dc(tt.keyField(),r))}return e.ce}function Nn(t){const e=X(t);return e.le||(e.le=S4(e,ta(t))),e.le}function S4(t,e){if(t.limitType==="F")return w0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new dc(i.field,s)});const n=t.endAt?new hc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hc(t.startAt.position,t.startAt.inclusive):null;return w0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gp(t,e,n){return new Ah(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ch(t,e){return hg(Nn(t),Nn(e))&&t.limitType===e.limitType}function iS(t){return`${cg(Nn(t))}|lt:${t.limitType}`}function Ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>nS(i)).join(", ")}]`),il(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>zs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>zs(i)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function Rh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ta(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=v0(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ta(r),i)||r.endAt&&!function(o,l,u){const c=v0(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ta(r),i))}(t,e)}function A4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sS(t){return(e,n)=>{let r=!1;for(const i of ta(t)){const s=C4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function C4(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?js(u,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$i(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return QI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R4=new Ce(H.comparator);function or(){return R4}const oS=new Ce(H.comparator);function $o(...t){let e=oS;for(const n of t)e=e.insert(n.key,n);return e}function aS(t){let e=oS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mi(){return na()}function lS(){return na()}function na(){return new no(t=>t.toString(),(t,e)=>t.isEqual(e))}const P4=new Ce(H.comparator),k4=new rt(H.comparator);function te(...t){let e=k4;for(const n of t)e=e.add(n);return e}const x4=new rt(ae);function b4(){return x4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function cS(t){return{integerValue:""+t}}function N4(t,e){return l4(e)?cS(e):uS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this._=void 0}}function O4(t,e,n){return t instanceof fc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ag(s)&&(s=lg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Bs?dS(t,e):t instanceof Ws?fS(t,e):function(i,s){const o=hS(i,s),l=T0(o)+T0(i.Pe);return fp(o)&&fp(i.Pe)?cS(l):uS(i.serializer,l)}(t,e)}function D4(t,e,n){return t instanceof Bs?dS(t,e):t instanceof Ws?fS(t,e):n}function hS(t,e){return t instanceof pc?function(r){return fp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fc extends Ph{}class Bs extends Ph{constructor(e){super(),this.elements=e}}function dS(t,e){const n=pS(e);for(const r of t.elements)n.some(i=>On(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ws extends Ph{constructor(e){super(),this.elements=e}}function fS(t,e){let n=pS(e);for(const r of t.elements)n=n.filter(i=>!On(i,r));return{arrayValue:{values:n}}}class pc extends Ph{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function T0(t){return Le(t.integerValue||t.doubleValue)}function pS(t){return ug(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n){this.field=e,this.transform=n}}function M4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Bs&&i instanceof Bs||r instanceof Ws&&i instanceof Ws?$s(r.elements,i.elements,On):r instanceof pc&&i instanceof pc?On(r.Pe,i.Pe):r instanceof fc&&i instanceof fc}(t.transform,e.transform)}class L4{constructor(e,n){this.version=e,this.transformResults=n}}class Tt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tt}static exists(e){return new Tt(void 0,e)}static updateTime(e){return new Tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class kh{}function gS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fg(t.key,Tt.none()):new sl(t.key,t.data,Tt.none());{const n=t.data,r=Et.empty();let i=new rt(tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ti(t.key,r,new Ft(i.toArray()),Tt.none())}}function V4(t,e,n){t instanceof sl?function(i,s,o){const l=i.value.clone(),u=S0(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ti?function(i,s,o){if(!Eu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=S0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(yS(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ra(t,e,n,r){return t instanceof sl?function(s,o,l,u){if(!Eu(s.precondition,o))return l;const c=s.value.clone(),d=A0(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ti?function(s,o,l,u){if(!Eu(s.precondition,o))return l;const c=A0(s.fieldTransforms,u,o),d=o.data;return d.setAll(yS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Eu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function F4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=hS(r.transform,i||null);s!=null&&(n===null&&(n=Et.empty()),n.set(r.field,s))}return n||null}function I0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&$s(r,i,(s,o)=>M4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sl extends kh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ti extends kh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function yS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function S0(t,e,n){const r=new Map;le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,D4(o,l,n[i]))}return r}function A0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,O4(s,o,e))}return r}class fg extends kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vS extends kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&V4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ra(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ra(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=gS(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&$s(this.mutations,e.mutations,(n,r)=>I0(n,r))&&$s(this.baseMutations,e.baseMutations,(n,r)=>I0(n,r))}}class pg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length);let i=function(){return P4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new pg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,ne;function _S(t){switch(t){default:return K();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function wS(t){if(t===void 0)return sr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Me.OK:return V.OK;case Me.CANCELLED:return V.CANCELLED;case Me.UNKNOWN:return V.UNKNOWN;case Me.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Me.INTERNAL:return V.INTERNAL;case Me.UNAVAILABLE:return V.UNAVAILABLE;case Me.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Me.NOT_FOUND:return V.NOT_FOUND;case Me.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Me.ABORTED:return V.ABORTED;case Me.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Me.DATA_LOSS:return V.DATA_LOSS;default:return K()}}(ne=Me||(Me={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z4(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B4=new _i([4294967295,4294967295],0);function C0(t){const e=z4().encode(t),n=new $I;return n.update(e),new Uint8Array(n.digest())}function R0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new _i([n,r],0),new _i([i,s],0)]}class mg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new jo(`Invalid padding: ${n}`);if(r<0)throw new jo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new jo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=_i.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(_i.fromNumber(r)));return i.compare(B4)===1&&(i=new _i([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=C0(e),[r,i]=R0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new mg(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=C0(e),[r,i]=R0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class jo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ol.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xh(G.min(),i,new Ce(ae),or(),te())}}class ol{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ol(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class ES{constructor(e,n){this.targetId=e,this.me=n}}class TS{constructor(e,n,r=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class P0{constructor(){this.fe=0,this.ge=x0(),this.pe=yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new ol(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=x0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class W4{constructor(e){this.Le=e,this.Be=new Map,this.ke=or(),this.qe=k0(),this.Qe=new Ce(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(mp(s))if(r===0){const o=new H(s.path);this.Ue(n,o,Ke.newNoDocument(o,G.min()))}else le(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ni(r).toUint8Array()}catch(u){if(u instanceof YI)return Us("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new mg(o,i,s)}catch(u){return Us(u instanceof jo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&mp(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ke.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new xh(e,n,this.Qe,this.ke,r);return this.ke=or(),this.qe=k0(),this.Qe=new Ce(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new P0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new P0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function k0(){return new Ce(H.comparator)}function x0(){return new Ce(H.comparator)}const q4={asc:"ASCENDING",desc:"DESCENDING"},H4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},K4={and:"AND",or:"OR"};class G4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yp(t,e){return t.useProto3Json||il(e)?e:{value:e}}function mc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Q4(t,e){return mc(t,e.toTimestamp())}function zt(t){return le(!!t),G.fromTimestamp(function(n){const r=Hr(n);return new Be(r.seconds,r.nanos)}(t))}function gg(t,e){return vp(t,e).canonicalString()}function vp(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function SS(t){const e=me.fromString(t);return le(xS(e)),e}function gc(t,e){return gg(t.databaseId,e.path)}function ia(t,e){const n=SS(e);if(n.get(1)!==t.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(CS(n))}function AS(t,e){return gg(t.databaseId,e)}function Y4(t){const e=SS(t);return e.length===4?me.emptyPath():CS(e)}function _p(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function CS(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function b0(t,e,n){return{name:gc(t,e),fields:n.value.mapValue.fields}}function X4(t,e){return"found"in e?function(r,i){le(!!i.found),i.found.name,i.found.updateTime;const s=ia(r,i.found.name),o=zt(i.found.updateTime),l=i.found.createTime?zt(i.found.createTime):G.min(),u=new Et({mapValue:{fields:i.found.fields}});return Ke.newFoundDocument(s,o,l,u)}(t,e):"missing"in e?function(r,i){le(!!i.missing),le(!!i.readTime);const s=ia(r,i.missing),o=zt(i.readTime);return Ke.newNoDocument(s,o)}(t,e):K()}function J4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(le(d===void 0||typeof d=="string"),yt.fromBase64String(d||"")):(le(d===void 0||d instanceof Buffer||d instanceof Uint8Array),yt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:wS(c.code);return new q(d,c.message||"")}(o);n=new TS(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ia(t,r.document.name),s=zt(r.document.updateTime),o=r.document.createTime?zt(r.document.createTime):G.min(),l=new Et({mapValue:{fields:r.document.fields}}),u=Ke.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Tu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ia(t,r.document),s=r.readTime?zt(r.readTime):G.min(),o=Ke.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Tu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ia(t,r.document),s=r.removedTargetIds||[];n=new Tu([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new j4(i,s),l=r.targetId;n=new ES(l,o)}}return n}function RS(t,e){let n;if(e instanceof sl)n={update:b0(t,e.key,e.value)};else if(e instanceof fg)n={delete:gc(t,e.key)};else if(e instanceof ti)n={update:b0(t,e.key,e.data),updateMask:aF(e.fieldMask)};else{if(!(e instanceof vS))return K();n={verify:gc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof fc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Bs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ws)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Q4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function Z4(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?zt(i.updateTime):zt(s);return o.isEqual(G.min())&&(o=zt(s)),new L4(o,i.transformResults||[])}(n,e))):[]}function eF(t,e){return{documents:[AS(t,e.path)]}}function tF(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=AS(t,i);const s=function(c){if(c.length!==0)return kS(Dn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Zi(m.field),direction:iF(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=yp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function nF(t){let e=Y4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=PS(p);return m instanceof Dn&&eS(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(A){return new dc(es(A.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,il(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,E=p.values||[];return new hc(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,E=p.values||[];return new hc(E,m)}(n.endAt)),T4(e,i,o,s,l,"F",u,c)}function rF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function PS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=es(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=es(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return je.create(es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dn.create(n.compositeFilter.filters.map(r=>PS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function iF(t){return q4[t]}function sF(t){return H4[t]}function oF(t){return K4[t]}function Zi(t){return{fieldPath:t.canonicalString()}}function es(t){return tt.fromServerFormat(t.fieldPath)}function kS(t){return t instanceof je?function(n){if(n.op==="=="){if(y0(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NAN"}};if(g0(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(y0(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NAN"}};if(g0(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zi(n.field),op:sF(n.op),value:n.value}}}(t):t instanceof Dn?function(n){const r=n.getFilters().map(i=>kS(i));return r.length===1?r[0]:{compositeFilter:{op:oF(n.op),filters:r}}}(t):K()}function aF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r,i,s=G.min(),o=G.min(),l=yt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(e){this.ct=e}}function uF(t){const e=nF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(){this._n=new hF}addToCollectionParentIndex(e,n){return this._n.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(qr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(qr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class hF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new rt(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new rt(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new qs(0)}static Ln(){return new qs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{constructor(){this.changes=new no(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ra(r.mutation,i,Ft.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=mi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=$o();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=mi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=or();const o=na(),l=function(){return na()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ti)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ra(d.mutation,c,d.mutation.getFieldMask(),Be.now())):o.set(c.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new fF(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=na();let i=new Ce((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Ft.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=lS();d.forEach(m=>{if(!s.has(m)){const E=gS(n.get(m),r.get(m));E!==null&&p.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):I4(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(mi());let l=-1,u=s;return o.next(c=>U.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(d=>({batchId:l,changes:aS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=$o();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=$o();return this.indexManager.getCollectionParents(e,s).next(l=>U.forEach(l,u=>{const c=function(p,m){return new Ah(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ke.newInvalidDocument(d)))});let l=$o();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ra(d.mutation,c,Ft.empty(),Be.now()),Rh(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return U.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:zt(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:uF(i.bundledQuery),readTime:zt(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(){this.overlays=new Ce(H.comparator),this.hr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mi();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=mi(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=mi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=mi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return U.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $4(n,r));let s=this.hr.get(n);s===void 0&&(s=te(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.Pr=new rt(qe.Ir),this.Tr=new rt(qe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new qe(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new H(new me([])),r=new qe(n,e),i=new qe(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new H(new me([])),r=new qe(n,e),i=new qe(n,e+1);let s=te();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qe(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return H.comparator(e.key,n.key)||ae(e.pr,n.pr)}static Er(e,n){return ae(e.pr,n.pr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new rt(qe.Ir)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new U4(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new qe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(ae);return n.forEach(i=>{const s=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),U.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new qe(new H(s),0);let l=new rt(ae);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.pr)),!0)},o),U.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return U.forEach(n.mutations,i=>{const s=new qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new qe(n,0),i=this.wr.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(e){this.vr=e,this.docs=function(){return new Ce(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let r=or();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ke.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=or();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||i4(r4(d),r)<=0||(i.has(d.key)||Rh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Fr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _F(this)}getSize(e){return U.resolve(this.size)}}class _F extends dF{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wF{constructor(e){this.persistence=e,this.Mr=new no(n=>cg(n),hg),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Or=0,this.Nr=new yg,this.targetCount=0,this.Lr=qs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),U.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new qs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.qn(n),U.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{constructor(e,n){this.Br={},this.overlays={},this.kr=new og(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new wF(this),this.indexManager=new cF,this.remoteDocumentCache=function(i){return new vF(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new lF(n),this.$r=new mF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new yF(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new TF(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return U.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class TF extends o4{constructor(e){super(),this.currentSequenceNumber=e}}class vg{constructor(e){this.persistence=e,this.zr=new yg,this.jr=null}static Hr(e){return new vg(e)}get Jr(){if(this.jr)return this.jr;throw K()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),U.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Jr,r=>{const i=H.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return U.or([()=>U.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _g(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SF{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return KN()?8:a4(st())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new IF;return this.Ji(e,n,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(bo()<=ee.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),U.resolve()):(bo()<=ee.DEBUG&&W("QueryEngine","Query:",Ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(bo()<=ee.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):U.resolve())}ji(e,n){if(E0(n))return U.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gp(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,l);return this.Xi(n,c,o,u.readTime)?this.ji(e,gp(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return E0(n)||i.isEqual(G.min())?U.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?U.resolve(null):(bo()<=ee.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ji(n)),this.es(e,o,n,n4(i,-1)).next(l=>l))})}Zi(e,n){let r=new rt(sS(e));return n.forEach((i,s)=>{Rh(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return bo()<=ee.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Ji(n)),this.zi.getDocumentsMatchingQuery(e,n,qr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ce(ae),this.rs=new no(s=>cg(s),hg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pF(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function CF(t,e,n,r){return new AF(t,e,n,r)}async function bS(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:l}))})})}function RF(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let E=U.resolve();return m.forEach(A=>{E=E.next(()=>d.getEntry(u,A)).next(S=>{const P=c.docVersions.get(A);le(P!==null),S.version.compareTo(P)<0&&(p.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),d.addEntry(S)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function NS(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function PF(t,e){const n=X(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,p)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(yt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(p,E),function(S,P,w){return S.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,E,d)&&l.push(n.Qr.updateTargetData(s,E))});let u=or(),c=te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(kF(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(G.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function kF(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=or();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function xF(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bF(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function wp(t,e,n){const r=X(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!rl(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function N0(t,e,n){const r=X(t);let i=G.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=X(u),m=p.rs.get(d);return m!==void 0?U.resolve(p.ns.get(m)):p.Qr.getTargetData(c,d)}(r,o,Nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:G.min(),n?s:te())).next(l=>(NF(r,A4(e),l),{documents:l,hs:s})))}function NF(t,e,n){let r=t.ss.get(e)||G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class O0{constructor(){this.activeTargetIds=b4()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OF{constructor(){this.no=new O0,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new O0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xl=null;function Xd(){return Xl===null?Xl=function(){return 268435456+Math.round(2147483648*Math.random())}():Xl++,"0x"+Xl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LF{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class VF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const l=Xd(),u=this.vo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(W("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Us("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,l){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+to}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=MF[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Xd();return new Promise((o,l)=>{const u=new jI;u.setWithCredentials(!0),u.listenOnce(BI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case _u.NO_ERROR:const d=u.getResponseJson();W(ht,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case _u.TIMEOUT:W(ht,`RPC '${e}' ${s} timed out`),l(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case _u.HTTP_ERROR:const p=u.getStatus();if(W(ht,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const A=function(P){const w=P.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(w)>=0?w:V.UNKNOWN}(E.status);l(new q(A,E.message))}else l(new q(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(V.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{W(ht,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(ht,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Xd(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=HI(),l=qI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new zI({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");W(ht,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,E=!1;const A=new LF({lo:P=>{E?W(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(W(ht,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(ht,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},ho:()=>p.close()}),S=(P,w,v)=>{P.listen(w,I=>{try{v(I)}catch(N){setTimeout(()=>{throw N},0)}})};return S(p,Uo.EventType.OPEN,()=>{E||(W(ht,`RPC '${e}' stream ${i} transport opened.`),A.mo())}),S(p,Uo.EventType.CLOSE,()=>{E||(E=!0,W(ht,`RPC '${e}' stream ${i} transport closed`),A.po())}),S(p,Uo.EventType.ERROR,P=>{E||(E=!0,Us(ht,`RPC '${e}' stream ${i} transport errored:`,P),A.po(new q(V.UNAVAILABLE,"The operation could not be completed")))}),S(p,Uo.EventType.MESSAGE,P=>{var w;if(!E){const v=P.data[0];le(!!v);const I=v,N=I.error||((w=I[0])===null||w===void 0?void 0:w.error);if(N){W(ht,`RPC '${e}' stream ${i} received error:`,N);const D=N.status;let M=function(T){const C=Me[T];if(C!==void 0)return wS(C)}(D),_=N.message;M===void 0&&(M=V.INTERNAL,_="Unknown error status: "+D+" with message "+N.message),E=!0,A.po(new q(M,_)),p.close()}else W(ht,`RPC '${e}' stream ${i} received:`,v),A.yo(v)}}),S(l,WI.STAT_EVENT,P=>{P.stat===hp.PROXY?W(ht,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===hp.NOPROXY&&W(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.fo()},0),A}}function Jd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t){return new G4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,n,r,i,s,o,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new wg(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(sr(n.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new q(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FF extends OS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=J4(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?zt(o.readTime):G.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=_p(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=mp(u)?{documents:eF(s,u)}:{query:tF(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=IS(s,o.resumeToken);const c=yp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(G.min())>0){l.readTime=mc(s,o.snapshotVersion.toTimestamp());const c=yp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=rF(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=_p(this.serializer),n.removeTarget=e,this.i_(n)}}class UF extends OS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=Z4(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.A_(r,n)}return le(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=_p(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RS(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,vp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(V.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,vp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class jF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(sr(n),this.y_=!1):W("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{ji(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.M_.add(4),await al(c),c.N_.set("Unknown"),c.M_.delete(4),await Nh(c)}(this))})}),this.N_=new jF(r,i)}}async function Nh(t){if(ji(t))for(const e of t.x_)await e(!0)}async function al(t){for(const e of t.x_)await e(!1)}function DS(t,e){const n=X(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Sg(n)?Ig(n):ro(n).Xo()&&Tg(n,e))}function Eg(t,e){const n=X(t),r=ro(n);n.F_.delete(e),r.Xo()&&MS(n,e),n.F_.size===0&&(r.Xo()?r.n_():ji(n)&&n.N_.set("Unknown"))}function Tg(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ro(t).P_(e)}function MS(t,e){t.L_.xe(e),ro(t).I_(e)}function Ig(t){t.L_=new W4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ro(t).start(),t.N_.w_()}function Sg(t){return ji(t)&&!ro(t).Zo()&&t.F_.size>0}function ji(t){return X(t).M_.size===0}function LS(t){t.L_=void 0}async function BF(t){t.N_.set("Online")}async function WF(t){t.F_.forEach((e,n)=>{Tg(t,e)})}async function qF(t,e){LS(t),Sg(t)?(t.N_.D_(e),Ig(t)):t.N_.set("Unknown")}async function HF(t,e,n){if(t.N_.set("Online"),e instanceof TS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yc(t,r)}else if(e instanceof Tu?t.L_.Ke(e):e instanceof ES?t.L_.He(e):t.L_.We(e),!n.isEqual(G.min()))try{const r=await NS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.L_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(yt.EMPTY_BYTE_STRING,d.snapshotVersion)),MS(s,u);const p=new Pr(d.target,u,c,d.sequenceNumber);Tg(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await yc(t,r)}}async function yc(t,e,n){if(!rl(e))throw e;t.M_.add(1),await al(t),t.N_.set("Offline"),n||(n=()=>NS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Nh(t)})}function VS(t,e){return e().catch(n=>yc(t,n,e))}async function Oh(t){const e=X(t),n=Kr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;KF(e);)try{const i=await xF(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,GF(e,i)}catch(i){await yc(e,i)}FS(e)&&US(e)}function KF(t){return ji(t)&&t.v_.length<10}function GF(t,e){t.v_.push(e);const n=Kr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function FS(t){return ji(t)&&!Kr(t).Zo()&&t.v_.length>0}function US(t){Kr(t).start()}async function QF(t){Kr(t).V_()}async function YF(t){const e=Kr(t);for(const n of t.v_)e.d_(n.mutations)}async function XF(t,e,n){const r=t.v_.shift(),i=pg.from(r,e,n);await VS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Oh(t)}async function JF(t,e){e&&Kr(t).E_&&await async function(r,i){if(function(o){return _S(o)&&o!==V.ABORTED}(i.code)){const s=r.v_.shift();Kr(r).t_(),await VS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Oh(r)}}(t,e),FS(t)&&US(t)}async function M0(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ji(n);n.M_.add(3),await al(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Nh(n)}async function ZF(t,e){const n=X(t);e?(n.M_.delete(2),await Nh(n)):e||(n.M_.add(2),await al(n),n.N_.set("Unknown"))}function ro(t){return t.B_||(t.B_=function(n,r,i){const s=X(n);return s.f_(),new FF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:BF.bind(null,t),To:WF.bind(null,t),Ao:qF.bind(null,t),h_:HF.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Sg(t)?Ig(t):t.N_.set("Unknown")):(await t.B_.stop(),LS(t))})),t.B_}function Kr(t){return t.k_||(t.k_=function(n,r,i){const s=X(n);return s.f_(),new UF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:QF.bind(null,t),Ao:JF.bind(null,t),R_:YF.bind(null,t),A_:XF.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Oh(t)):(await t.k_.stop(),t.v_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ag(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cg(t,e){if(sr("AsyncQueue",`${e}: ${t}`),rl(t))return new q(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=$o(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(){this.q_=new Ce(H.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):K():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Hs(e,n,Ps.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ch(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class tU{constructor(){this.queries=new no(e=>iS(e),Ch),this.onlineState="Unknown",this.z_=new Set}}async function $S(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new eU,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Cg(o,`Initialization of query '${Ji(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Rg(n)}async function jS(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function nU(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.U_)l.H_(i)&&(r=!0);o.K_=i}}r&&Rg(n)}function rU(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Rg(t){t.z_.forEach(e=>{e.next()})}var Ep,V0;(V0=Ep||(Ep={})).J_="default",V0.Cache="cache";class zS{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Ep.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.key=e}}class WS{constructor(e){this.key=e}}class iU{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=te(),this.mutatedKeys=te(),this.Ia=sS(e),this.Ta=new Ps(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new L0,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),E=Rh(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),S=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let P=!1;m&&E?m.data.isEqual(E.data)?A!==S&&(r.track({type:3,doc:E}),P=!0):this.Ra(m,E)||(r.track({type:2,doc:E}),P=!0,(u&&this.Ia(E,u)>0||c&&this.Ia(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),P=!0):m&&!E&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(l=!0)),P&&(E?(o=o.add(E),s=S?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(E,A){const S=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return S(E)-S(A)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new Hs(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new L0,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=te(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new WS(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new BS(r))}),n}pa(e){this.la=e.hs,this.Pa=te();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Hs.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class sU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oU{constructor(e){this.key=e,this.wa=!1}}class aU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new no(l=>iS(l),Ch),this.Da=new Map,this.Ca=new Set,this.va=new Ce(H.comparator),this.Fa=new Map,this.Ma=new yg,this.xa={},this.Oa=new Map,this.Na=qs.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function lU(t,e,n=!0){const r=YS(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await qS(r,e,n,!0),i}async function uU(t,e){const n=YS(t);await qS(n,e,!0,!1)}async function qS(t,e,n,r){const i=await bF(t.localStore,Nn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await cU(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&DS(t.remoteStore,i),l}async function cU(t,e,n,r,i){t.Ba=(p,m,E)=>async function(S,P,w,v){let I=P.view.da(w);I.Xi&&(I=await N0(S.localStore,P.query,!1).then(({documents:_})=>P.view.da(_,I)));const N=v&&v.targetChanges.get(P.targetId),D=v&&v.targetMismatches.get(P.targetId)!=null,M=P.view.applyChanges(I,S.isPrimaryClient,N,D);return U0(S,P.targetId,M.fa),M.snapshot}(t,p,m,E);const s=await N0(t.localStore,e,!0),o=new iU(e,s.hs),l=o.da(s.documents),u=ol.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);U0(t,n,c.fa);const d=new sU(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function hU(t,e,n){const r=X(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Ch(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Eg(r.remoteStore,i.targetId),Tp(r,i.targetId)}).catch(nl)):(Tp(r,i.targetId),await wp(r.localStore,i.targetId,!0))}async function dU(t,e){const n=X(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Eg(n.remoteStore,r.targetId))}async function fU(t,e,n){const r=wU(t);try{const i=await function(o,l){const u=X(o),c=Be.now(),d=l.reduce((E,A)=>E.add(A.key),te());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let A=or(),S=te();return u.os.getEntries(E,d).next(P=>{A=P,A.forEach((w,v)=>{v.isValidDocument()||(S=S.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,A)).next(P=>{p=P;const w=[];for(const v of l){const I=F4(v,p.get(v.key).overlayedDocument);I!=null&&w.push(new ti(v.key,I,XI(I.value.mapValue),Tt.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,w,l)}).next(P=>{m=P;const w=P.applyToLocalDocumentSet(p,S);return u.documentOverlayCache.saveOverlays(E,P.batchId,w)})}).then(()=>({batchId:m.batchId,changes:aS(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Ce(ae)),c=c.insert(l,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ll(r,i.changes),await Oh(r.remoteStore)}catch(i){const s=Cg(i,"Failed to persist write");n.reject(s)}}async function HS(t,e){const n=X(t);try{const r=await PF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?le(o.wa):i.removedDocuments.size>0&&(le(o.wa),o.wa=!1))}),await ll(n,r,e)}catch(r){await nl(r)}}function F0(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.U_)m.j_(l)&&(c=!0)}),c&&Rg(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pU(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Ce(H.comparator);o=o.insert(s,Ke.newNoDocument(s,G.min()));const l=te().add(s),u=new xh(G.min(),new Map,new Ce(ae),o,l);await HS(r,u),r.va=r.va.remove(s),r.Fa.delete(e),Pg(r)}else await wp(r.localStore,e,!1).then(()=>Tp(r,e,n)).catch(nl)}async function mU(t,e){const n=X(t),r=e.batch.batchId;try{const i=await RF(n.localStore,e);GS(n,r,null),KS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ll(n,i)}catch(i){await nl(i)}}async function gU(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(le(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);GS(r,e,n),KS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ll(r,i)}catch(i){await nl(i)}}function KS(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function GS(t,e,n){const r=X(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Tp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||QS(t,r)})}function QS(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Eg(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Pg(t))}function U0(t,e,n){for(const r of n)r instanceof BS?(t.Ma.addReference(r.key,e),yU(t,r)):r instanceof WS?(W("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||QS(t,r.key)):K()}function yU(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(W("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Pg(t))}function Pg(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new H(me.fromString(e)),r=t.Na.next();t.Fa.set(r,new oU(n)),t.va=t.va.insert(n,r),DS(t.remoteStore,new Pr(Nn(dg(n.path)),r,"TargetPurposeLimboResolution",og.oe))}}async function ll(t,e,n){const r=X(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=_g.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=X(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(c,m=>U.forEach(m.qi,E=>d.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>U.forEach(m.Qi,E=>d.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!rl(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const E=d.ns.get(m),A=E.snapshotVersion,S=E.withLastLimboFreeSnapshotVersion(A);d.ns=d.ns.insert(m,S)}}}(r.localStore,s))}async function vU(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await bS(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(u=>{u.reject(new q(V.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ll(n,r.us)}}function _U(t,e){const n=X(t),r=n.Fa.get(e);if(r&&r.wa)return te().add(r.key);{let i=te();const s=n.Da.get(e);if(!s)return i;for(const o of s){const l=n.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function YS(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_U.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pU.bind(null,e),e.Sa.h_=nU.bind(null,e.eventManager),e.Sa.ka=rU.bind(null,e.eventManager),e}function wU(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gU.bind(null,e),e}class $0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return CF(this.persistence,new SF,e.initialUser,this.serializer)}createPersistence(e){return new EF(vg.Hr,this.serializer)}createSharedClientState(e){return new OF}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class EU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>F0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vU.bind(null,this.syncEngine),await ZF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tU}()}createDatastore(e){const n=bh(e.databaseInfo.databaseId),r=function(s){return new VF(s)}(e.databaseInfo);return function(s,o,l,u){return new $F(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new zF(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>F0(this.syncEngine,n,0),function(){return D0.D()?new D0:new DF}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new aU(i,s,o,l,u,c);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=X(r);W("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await al(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new q(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=X(i),l={documents:s.map(p=>gc(o.serializer,p))},u=await o.xo("BatchGetDocuments",o.serializer.databaseId,me.emptyPath(),l,s.length),c=new Map;u.forEach(p=>{const m=X4(o.serializer,p);c.set(m.key.toString(),m)});const d=[];return s.forEach(p=>{const m=c.get(p.toString());le(!!m),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new fg(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=H.fromPath(r);this.mutations.push(new vS(i,this.precondition(i)))}),await async function(r,i){const s=X(r),o={writes:i.map(l=>RS(s.serializer,l))};await s.Co("Commit",s.serializer.databaseId,me.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw K();n=G.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new q(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(G.min())?Tt.exists(!1):Tt.updateTime(n):Tt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(G.min()))throw new q(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Tt.updateTime(n)}return Tt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IU{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new wg(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new TU(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!il(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!_S(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=GI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{W("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(W("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zd(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function j0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CU(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>M0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>M0(e.remoteStore,i)),t._onlineComponents=e}function AU(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function CU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!AU(n))throw n;Us("Error using user provided cache. Falling back to memory cache: "+n),await Zd(t,new $0)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Zd(t,new $0);return t._offlineComponents}async function kg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await j0(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await j0(t,new EU))),t._onlineComponents}function RU(t){return kg(t).then(e=>e.syncEngine)}function PU(t){return kg(t).then(e=>e.datastore)}async function JS(t){const e=await kg(t),n=e.eventManager;return n.onListen=lU.bind(null,e.syncEngine),n.onUnlisten=hU.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=uU.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dU.bind(null,e.syncEngine),n}function kU(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new XS({next:m=>{o.enqueueAndForget(()=>jS(s,p));const E=m.docs.has(l);!E&&m.fromCache?c.reject(new q(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new q(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new zS(dg(l.path),d,{includeMetadataChanges:!0,ra:!0});return $S(s,p)}(await JS(t),t.asyncQueue,e,n,r)),r.promise}function xU(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new XS({next:m=>{o.enqueueAndForget(()=>jS(s,p)),m.fromCache&&u.source==="server"?c.reject(new q(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new zS(l,d,{includeMetadataChanges:!0,ra:!0});return $S(s,p)}(await JS(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(t,e,n){if(!n)throw new q(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bU(t,e,n,r){if(e===!0&&r===!0)throw new q(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function B0(t){if(!H.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function W0(t){if(H.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xg(t);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new q0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new q0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KV;switch(r.type){case"firstParty":return new XV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=z0.get(n);r&&(W("ComponentProvider","Removing Datastore"),z0.delete(n),r.terminate())}(this),Promise.resolve()}}function NU(t,e,n,r={}){var i;const s=(t=Mn(t,Dh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ft.MOCK_USER;else{l=zN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ft(c)}t._authCredentials=new GV(new KI(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mh(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Fr extends Mh{constructor(e,n,r){super(e,n,dg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new H(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function OU(t,e,...n){if(t=We(t),eA("collection","path",e),t instanceof Dh){const r=me.fromString(e,...n);return W0(r),new Fr(t,null,r)}{if(!(t instanceof St||t instanceof Fr))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return W0(r),new Fr(t.firestore,null,r)}}function pn(t,e,...n){if(t=We(t),arguments.length===1&&(e=GI.newId()),eA("doc","path",e),t instanceof Dh){const r=me.fromString(e,...n);return B0(r),new St(t,null,new H(r))}{if(!(t instanceof St||t instanceof Fr))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return B0(r),new St(t.firestore,t instanceof Fr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DU{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new wg(this,"async_queue_retry"),this.hu=()=>{const n=Jd();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Jd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Jd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new bn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!rl(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw sr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Ag.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&K()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class io extends Dh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new DU}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nA(this),this._firestoreClient.terminate()}}function tA(t,e){const n=typeof t=="object"?t:vh(),r=typeof t=="string"?t:"(default)",i=cr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$N("firestore");s&&NU(i,...s)}return i}function Lh(t){return t._firestoreClient||nA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function nA(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new c4(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,ZS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new SU(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Di(yt.fromBase64String(e))}catch(n){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Di(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MU=/^__.*__$/;class LU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ti(e,this.data,this.fieldMask,n,this.fieldTransforms):new sl(e,this.data,n,this.fieldTransforms)}}class rA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ti(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Vh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Vh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return vc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(iA(this.fu)&&MU.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class VU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bh(e)}Fu(e,n,r,i=!1){return new Vh({fu:e,methodName:n,vu:r,path:tt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ng(t){const e=t._freezeSettings(),n=bh(t._databaseId);return new VU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sA(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Mg("Data must be an object, but it was:",o,r);const l=uA(r,o);let u,c;if(s.merge)u=new Ft(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Ip(e,p,n);if(!o.contains(m))throw new q(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);hA(d,m)||d.push(m)}u=new Ft(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new LU(new Et(l),u,c)}class Fh extends cl{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fh}}function oA(t,e,n){return new Vh({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Og extends cl{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=oA(this,e,!0),r=this.Mu.map(s=>so(s,n)),i=new Bs(r);return new mS(e.path,i)}isEqual(e){return e instanceof Og&&Ai(this.Mu,e.Mu)}}class Dg extends cl{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=oA(this,e,!0),r=this.Mu.map(s=>so(s,n)),i=new Ws(r);return new mS(e.path,i)}isEqual(e){return e instanceof Dg&&Ai(this.Mu,e.Mu)}}function aA(t,e,n,r){const i=t.Fu(1,e,n);Mg("Data must be an object, but it was:",i,r);const s=[],o=Et.empty();$i(r,(u,c)=>{const d=Lg(e,u,n);c=We(c);const p=i.Su(d);if(c instanceof Fh)s.push(d);else{const m=so(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Ft(s);return new rA(o,l,i.fieldTransforms)}function lA(t,e,n,r,i,s){const o=t.Fu(1,e,n),l=[Ip(e,r,n)],u=[i];if(s.length%2!=0)throw new q(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Ip(e,s[m])),u.push(s[m+1]);const c=[],d=Et.empty();for(let m=l.length-1;m>=0;--m)if(!hA(c,l[m])){const E=l[m];let A=u[m];A=We(A);const S=o.Su(E);if(A instanceof Fh)c.push(E);else{const P=so(A,S);P!=null&&(c.push(E),d.set(E,P))}}const p=new Ft(c);return new rA(d,p,o.fieldTransforms)}function so(t,e){if(cA(t=We(t)))return Mg("Unsupported field value:",e,t),uA(t,e);if(t instanceof cl)return function(r,i){if(!iA(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=so(l,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return N4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:mc(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mc(i.serializer,s)}}if(r instanceof bg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Di)return{bytesValue:IS(i.serializer,r._byteString)};if(r instanceof St){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${xg(r)}`)}(t,e)}function uA(t,e){const n={};return QI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$i(t,(r,i)=>{const s=so(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof bg||t instanceof Di||t instanceof St||t instanceof cl)}function Mg(t,e,n){if(!cA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=xg(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Ip(t,e,n){if((e=We(e))instanceof ul)return e._internalPath;if(typeof e=="string")return Lg(t,e);throw vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const FU=new RegExp("[~\\*/\\[\\]]");function Lg(t,e,n){if(e.search(FU)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ul(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(V.INVALID_ARGUMENT,l+t+u)}function hA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UU extends _c{data(){return super.data()}}function dA(t,e){return typeof e=="string"?Lg(t,e):e instanceof ul?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $U(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fA{convertValue(e,n="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $i(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new bg(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Da(e));default:return null}}convertTimestamp(e){const n=Hr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);le(xS(r));const i=new Ma(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class jU extends fA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Di(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vg extends _c{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Iu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Iu extends Vg{data(e={}){return super.data(e)}}class zU{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ps(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Iu(this._firestore,this._userDataWriter,r.key,r,new ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Iu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ps(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Iu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ps(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:BU(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){t=Mn(t,St);const e=Mn(t.firestore,io);return kU(Lh(e),t._key).then(n=>qU(e,t,n))}class Fg extends fA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Di(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function WU(t){t=Mn(t,Mh);const e=Mn(t.firestore,io),n=Lh(e),r=new Fg(e);return $U(t._query),xU(n,t._query).then(i=>new zU(e,r,t,i))}function mA(t,e,n){t=Mn(t,St);const r=Mn(t.firestore,io),i=pA(t.converter,e,n);return gA(r,[sA(Ng(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Tt.none())])}function Sp(t,e,n,...r){t=Mn(t,St);const i=Mn(t.firestore,io),s=Ng(i);let o;return o=typeof(e=We(e))=="string"||e instanceof ul?lA(s,"updateDoc",t._key,e,n,r):aA(s,"updateDoc",t._key,e),gA(i,[o.toMutation(t._key,Tt.exists(!0))])}function gA(t,e){return function(r,i){const s=new bn;return r.asyncQueue.enqueueAndForget(async()=>fU(await RU(r),i,s)),s.promise}(Lh(t),e)}function qU(t,e,n){const r=n.docs.get(e._key),i=new Fg(t);return new Vg(t,i,e._key,r,new ps(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HU={maxAttempts:5};function No(t,e){if((t=We(t)).firestore!==e)throw new q(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KU extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Ng(n)}get(n){const r=No(n,this._firestore),i=new jU(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return K();const o=s[0];if(o.isFoundDocument())return new _c(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new _c(this._firestore,i,r._key,null,r.converter);throw K()})}set(n,r,i){const s=No(n,this._firestore),o=pA(s.converter,r,i),l=sA(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,l),this}update(n,r,i,...s){const o=No(n,this._firestore);let l;return l=typeof(r=We(r))=="string"||r instanceof ul?lA(this._dataReader,"Transaction.update",o._key,r,i,s):aA(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,l),this}delete(n){const r=No(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=No(e,this._firestore),r=new Fg(this._firestore);return super.get(e).then(i=>new Vg(this._firestore,r,n._key,i._document,new ps(!1,!1),n.converter))}}function GU(t,e,n){t=Mn(t,io);const r=Object.assign(Object.assign({},HU),n);return function(s){if(s.maxAttempts<1)throw new q(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,l){const u=new bn;return s.asyncQueue.enqueueAndForget(async()=>{const c=await PU(s);new IU(s.asyncQueue,c,l,o,u).Xa()}),u.promise}(Lh(t),i=>e(new KU(t,i)),r)}function QU(...t){return new Og("arrayUnion",t)}function YU(...t){return new Dg("arrayRemove",t)}(function(e,n=!0){(function(i){to=i})(Jr),sn(new rn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new io(new QV(r.getProvider("auth-internal")),new ZV(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ma(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),mt(d0,"4.6.3",e),mt(d0,"4.6.3","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XU{constructor(e,n){this._delegate=e,this.firebase=n,ka(e,new rn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Wm(this._delegate)))}_getService(e,n=Br){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Br){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){ka(this._delegate,e)}_addOrOverwriteComponent(e){NT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JU={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},H0=new ur("app-compat","Firebase",JU);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZU(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:mt,setLogLevel:LT,onLog:MT,apps:null,SDK_VERSION:Jr,INTERNAL:{registerComponent:l,removeApp:r,useAsService:u,modularAPIs:fD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Br,!k_(e,c))throw H0.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const p=yh(c,d);if(k_(e,p.name))return e[p.name];const m=new t(p,n);return e[p.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function l(c){const d=c.name,p=d.replace("-compat","");if(sn(c)&&c.type==="PUBLIC"){const m=(E=i())=>{if(typeof E[p]!="function")throw H0.create("invalid-app-argument",{appName:d});return E[p]()};c.serviceProps!==void 0&&tc(m,c.serviceProps),n[p]=m,t.prototype[p]=function(...E){return this._getService.bind(this,d).apply(this,c.multipleInstances?E:[])}}return c.type==="PUBLIC"?n[p]:null}function u(c,d){return d==="serverAuth"?null:d}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(){const t=ZU(XU);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:yA,extendNamespace:e,createSubscribe:CT,ErrorFactory:ur,deepExtend:tc});function e(n){tc(t,n)}return t}const e3=yA();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=new Xa("@firebase/app-compat"),t3="@firebase/app-compat",n3="0.2.35";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r3(t){mt(t3,n3,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(TT()&&self.firebase!==void 0){K0.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&K0.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const i3=e3;r3();var s3="firebase",o3="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */i3.registerVersion(s3,o3,"app-compat");const a3={apiKey:"AIzaSyACuqbZFMslfnDdjg6rrYHZCht0CvtWLfs",authDomain:"react-fa5f1.firebaseapp.com",projectId:"react-fa5f1",storageBucket:"react-fa5f1.appspot.com",messagingSenderId:"873246413873",appId:"1:873246413873:web:d8db2c95d3794900cfb110",measurementId:"G-82TQDRQGSG"},vA=yh(a3);BV(vA);const Mi=Rs(),Ur=tA(vA),G0=()=>{const[t,e]=L.useState(""),[n,r]=L.useState(""),i=async()=>{try{await hM(Mi,t,n);const s=Mi.currentUser;console.log(s),console.log("User Successfully resistered! "),window.location.href="/dashboard"}catch(s){console.log(s.message)}};return F.jsx(F.Fragment,{children:F.jsx("div",{className:"abox",children:F.jsx("div",{className:"box",children:F.jsxs("div",{className:"box2",children:[F.jsx("img",{className:"login_img",src:mT,alt:"Description of image"}),F.jsxs("div",{className:"userid_box",children:[F.jsx($m,{className:"person_icon"}),F.jsx("input",{type:"text",placeholder:"E-mail",onChange:s=>e(s.target.value)})]}),F.jsxs("div",{className:"userid_box",children:[F.jsx(Zu,{className:"person_icon"}),F.jsx("input",{type:"password",placeholder:"Password",onChange:s=>r(s.target.value)})]}),F.jsxs("div",{className:"btn_div",children:[F.jsx("button",{className:"btn_login",onClick:i,children:"Login"}),F.jsxs("p",{className:"goto_signup",children:["Haven't signup yet? ",F.jsx("a",{href:"/signup",children:"Signup"})]})]})]})})})})};var Ug={},l3=Wa;Object.defineProperty(Ug,"__esModule",{value:!0});var _A=Ug.default=void 0,u3=l3(Um()),c3=F;_A=Ug.default=(0,u3.default)((0,c3.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email");const h3=()=>{const[t,e]=L.useState(""),[n,r]=L.useState(""),[i,s]=L.useState(""),[o,l]=L.useState(""),u=async()=>{try{await cM(Mi,t,n);const c=Mi.currentUser;console.log(c),c&&await mA(pn(Ur,"Users",c.uid),{user_details:{email:c.email,name:o}}),console.log("User Successfully resistered! "),window.location.href="/home"}catch(c){console.log(c.message)}};return F.jsx(F.Fragment,{children:F.jsx("div",{className:"abox",children:F.jsx("div",{className:"box",children:F.jsxs("div",{className:"box2",children:[F.jsx("img",{className:"login_img",src:mT,alt:"Description of image"}),F.jsxs("div",{className:"userid_box",children:[F.jsx($m,{className:"person_icon"}),F.jsx("input",{type:"text",placeholder:"Name",onChange:c=>l(c.target.value)})]}),F.jsxs("div",{className:"userid_box",children:[F.jsx(_A,{className:"person_icon"}),F.jsx("input",{type:"email",placeholder:"E-mail",onChange:c=>e(c.target.value)})]}),F.jsxs("div",{className:"userid_box",children:[F.jsx(Zu,{className:"person_icon"}),F.jsx("input",{type:"password",placeholder:"Password",onChange:c=>r(c.target.value)})]}),F.jsxs("div",{className:"userid_box",children:[F.jsx(Zu,{className:"person_icon"}),F.jsx("input",{type:"password",placeholder:"Conform Password",onChange:c=>s(c.target.value)})]}),F.jsxs("div",{className:"btn_div",children:[F.jsx("button",{className:"btn_signup",onClick:u,children:"Signup"}),F.jsxs("p",{className:"already_account",children:["Already have account? ",F.jsx("a",{href:"/home",children:"Login"})]})]})]})})})})},d3=()=>{const[t,e]=L.useState([]),[n,r]=L.useState("");L.useEffect(()=>{l()},[]);function i(c){r(c.target.value)}function s(){n.trim()!==""&&(o(n),r(""),l())}const o=async c=>{const p=Rs().currentUser;if(p){const m=p.uid,E=pn(Ur,"Users",m);try{await Sp(E,{todolist:QU(c)}),console.log("Array data added successfully!")}catch(A){console.error("Error adding array data:",A)}}else console.log("No user is signed in.")},l=async()=>{const d=Rs().currentUser;if(d)try{const p=d.uid,m=pn(Ur,"Users",p),E=await ms(m);if(E.exists()){const A=E.data();e(A.todolist),console.log("Retrieved todolist data:")}else console.log("Document does not exist.")}catch(p){console.error("Error retrieving todolist data:",p)}else console.log("No user is signed in.")};function u(c){const p=Rs().currentUser,m=t[c],E=p.uid,A=pn(Ur,"Users",E);try{Sp(A,{todolist:YU(m)}),console.log("Task deleted successfully from Firestore.")}catch(S){console.error("Error deleting task from Firestore:",S)}t.filter((S,P)=>P!==c),l()}return F.jsxs("div",{className:"todolist",children:[F.jsx("h1",{className:"heading",children:"To Do List"}),F.jsxs("div",{children:[F.jsx("input",{className:"input_task",type:"text",placeholder:"Enter a task....",value:n,onChange:i}),F.jsx("button",{className:"btn_add",onClick:s,children:"Add"})]}),F.jsx("ol",{className:"task_list",children:t&&t.map((c,d)=>F.jsxs("li",{children:[F.jsx("span",{className:"task",children:c}),F.jsx("button",{className:"btn_delete",onClick:()=>u(d),children:"Delete"})]},d))}),F.jsx("button",{onClick:()=>window.location.href="/onlinepage",children:"Online"})]})},wA=async()=>{const e=Rs().currentUser;if(e){const n=pn(Ur,"Users",e.uid);try{await GU(Ur,async r=>{r.update(n,{"user_details.lastonline":new Date().toISOString()})}),console.log("User online timestamp updated with transaction")}catch(r){console.error("Transaction failed: ",r)}}};wA();const $g=()=>{const t=setInterval(()=>{wA()},5e3);return()=>clearInterval(t)},f3=()=>{const[t,e]=L.useState(null),n=async()=>{Mi.onAuthStateChanged(async i=>{const s=pn(Ur,"Users",i.uid),o=await ms(s);o.exists()?e(o.data()):console.log("User is not logged in")})};L.useEffect(()=>{n(),$g()},[]);async function r(){try{await Mi.signOut(),window.location.href="/home",console.log("User logged out successfully!")}catch(i){console.error("Error loging out: ",i.message)}}return F.jsx("div",{className:"display",children:t?F.jsxs(F.Fragment,{children:[F.jsxs("h3",{children:["Welcome ",t.user_details.name]}),F.jsx("button",{className:"btn-logout",onClick:r,children:"Logout"}),F.jsx(d3,{})]}):F.jsx("h1",{children:"Loading....."})})},p3=()=>{const t=Vc(),{clientuid:e,clientusername:n}=t.state||{},s=Rs().currentUser.uid,o=tA(),[l,u]=L.useState(""),[c,d]=L.useState([]),p=P=>{u(P.target.value)},m=()=>{l.trim()!==""&&(E(l),u(""))},E=async P=>{const w=s+"_"+e;let v=w,I=pn(o,"chats",v);try{let N=await ms(I);if(!N.exists()){const y=e+"_"+s;I=pn(o,"chats",y),N=await ms(I),N.exists()?v=y:(v=w,I=pn(o,"chats",v))}const D=new Date().toISOString(),_=(N.exists()?N.data():{}).messages||[];_.push({user:s,message:P,timestamp:D}),N.exists()?await Sp(I,{messages:_}):await mA(I,{messages:_}),d(_)}catch(N){console.error("Error adding message: ",N)}},A=async(P,w)=>{let I=P+"_"+w,N=pn(o,"chats",I);try{let D=await ms(N);if(!D.exists()){const M=w+"_"+P;if(N=pn(o,"chats",M),D=await ms(N),!D.exists())return[]}return D.data().messages||[]}catch(D){return console.error("Error retrieving chat data: ",D),[]}},S=async()=>{const P=await A(s,e);d(P)};return L.useEffect(()=>{$g(),S();const P=setInterval(()=>{S()},2e3);return()=>clearInterval(P)},[]),F.jsxs("div",{className:"display",children:[F.jsx("h1",{className:"ClientName",children:n}),F.jsxs("div",{className:"chatbox",children:[F.jsx("div",{className:"jjj",children:F.jsx("div",{id:"chat-container",children:c.map((P,w)=>F.jsx("div",{className:`message ${P.user===s?"user-message":"client-message"}`,children:P.user===s?`${P.message}`:`${P.message}`},w))})}),F.jsxs("div",{className:"chatboxbuttom",children:[F.jsx("input",{className:"chatinput",value:l,onChange:p,placeholder:"Message.."}),F.jsx("button",{className:"btn_send",onClick:m,children:"Send"})]})]})]})},m3=()=>{const[t,e]=L.useState([[]]),n=v1(),r=async()=>{try{const s=OU(Ur,"Users"),o=await WU(s),l=new Date,u=o.docs.filter(c=>{var m;const d=c.data(),p=(m=d.user_details)!=null&&m.lastonline?new Date(d.user_details.lastonline):null;return p&&l-p<=3e4}).map(c=>({username:c.data().user_details.name,uid:c.id}));e([u]),console.log("online user updated")}catch(s){console.error("Error fetching online users: ",s)}};L.useEffect(()=>{$g(),r();const s=setInterval(()=>{r()},5e3);return()=>clearInterval(s)},[]);function i(s,o){n("/chatpage",{state:{clientuid:s,clientusername:o}})}return F.jsxs("div",{className:"display",children:[F.jsx("h1",{className:"heading",children:"Online Users"}),F.jsx("ol",{className:"online_list",children:t&&t.map((s,o)=>s.map((l,u)=>F.jsxs("li",{children:[F.jsx("span",{className:"onlineuser",children:l.username}),F.jsx("button",{className:"btn_chat",onClick:()=>i(l.uid,l.username),children:"Chat"})]},`${o}-${u}`)))})]})};function g3(){const[t,e]=L.useState();return L.useEffect(()=>{Mi.onAuthStateChanged(n=>{e(n)})}),F.jsx(F.Fragment,{children:F.jsx(gk,{basename:"/react-chat",children:F.jsxs(fk,{children:[F.jsx(ui,{path:"/",element:t?F.jsx(hk,{to:"/dashboard"}):F.jsx(G0,{})}),F.jsx(ui,{path:"/home",element:F.jsx(G0,{})}),F.jsx(ui,{path:"/signup",element:F.jsx(h3,{})}),F.jsx(ui,{path:"/dashboard",element:F.jsx(f3,{})}),F.jsx(ui,{path:"/onlinepage",element:F.jsx(m3,{})}),F.jsx(ui,{path:"/chatpage",element:F.jsx(p3,{})})]})})})}ef.createRoot(document.getElementById("root")).render(F.jsx(sw.StrictMode,{children:F.jsx(g3,{})}));
